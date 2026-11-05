#!/usr/bin/env bash
# Convert private source assets (AI, PDF, PSD and other non-web formats) into a
# public PNG preview, run by the operator on their own machine. Replaces
# .github/workflows/process-assets.yml (owner decision 2026-11-05: no GitHub
# Actions). Same steps as the workflow: fetch metadata and a 10-minute signed
# source URL from the API, check the file type, ClamAV-scan it with fresh
# signatures, render the preview (pdftoppm for ai/pdf, ImageMagick otherwise),
# upload it with scripts/upload-derived-asset.mjs, and report a failure back to
# the API when any step fails.
#
# The edge Worker still marks these assets 'converting' and sends a GitHub
# repository_dispatch; with no workflow, nothing picks that up. List the
# waiting assets with --pending and process them with this script.
#
# Usage:
#   scripts/process-asset.sh <asset-id> [<asset-id> ...]
#   scripts/process-asset.sh --pending      # list assets waiting in 'converting'
#
# Operator environment (never logged or written to disk):
#   IPTRUST_ASSET_PROCESSOR_KEY   service API key (or IPTRUST_SERVICE_API_KEY)
#   IPTRUST_API_URL               optional, default https://apuch.art/api/v2
#   CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID   only for --pending
#   CLAMAV_DB_DIR                 optional ClamAV database directory
# Tools on PATH: curl, jq, file, node, clamscan, freshclam, pdftoppm (poppler),
# ghostscript, and ImageMagick (magick, or convert for ImageMagick 6).
#   Debian/Ubuntu: sudo apt-get install -y --no-install-recommends clamav ghostscript imagemagick poppler-utils jq
#   macOS:         brew install clamav ghostscript imagemagick poppler jq
set -euo pipefail
set +x

REPO=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
die() { printf 'error: %s\n' "$*" >&2; exit 1; }
log() { printf '==> %s\n' "$*"; }

[[ $# -gt 0 ]] || { sed -n '2,27p' "${BASH_SOURCE[0]}"; exit 2; }
case $1 in
  -h|--help) sed -n '2,27p' "${BASH_SOURCE[0]}"; exit 0 ;;
  --pending)
    [[ -n ${CLOUDFLARE_API_TOKEN:-} && -n ${CLOUDFLARE_ACCOUNT_ID:-} ]] || die "CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID must be set"
    export CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID
    cd "$REPO"
    exec npx --no wrangler d1 execute iptrust-library --remote --config edge/wrangler.toml \
      --command "SELECT id, extension, mime_type, updated_at FROM assets WHERE status='converting' AND deleted_at IS NULL ORDER BY updated_at"
    ;;
esac

IPTRUST_API_URL=${IPTRUST_API_URL:-https://apuch.art/api/v2}
IPTRUST_SERVICE_API_KEY=${IPTRUST_SERVICE_API_KEY:-${IPTRUST_ASSET_PROCESSOR_KEY:-}}
[[ -n $IPTRUST_SERVICE_API_KEY ]] || die "IPTRUST_ASSET_PROCESSOR_KEY (or IPTRUST_SERVICE_API_KEY) must be set"
export IPTRUST_API_URL IPTRUST_SERVICE_API_KEY

for tool in curl jq file node clamscan freshclam pdftoppm gs; do
  command -v "$tool" >/dev/null 2>&1 || die "$tool not found on PATH (see the install line in this script's header)"
done
if command -v magick >/dev/null 2>&1; then MAGICK=(magick)
elif command -v convert >/dev/null 2>&1; then MAGICK=(convert)
else die "ImageMagick not found (magick or convert)"; fi

RUN_ID="local-$(date -u +%Y%m%dT%H%M%SZ)-$$"

# The key goes to curl through a pipe, not argv, so it never shows in ps.
api_curl() {
  curl --fail --silent --show-error \
    --config <(printf 'header = "Authorization: Bearer %s"\n' "$IPTRUST_SERVICE_API_KEY") "$@"
}

clamav_db_present() {
  local dir
  for dir in ${CLAMAV_DB_DIR:-} /var/lib/clamav /opt/homebrew/var/lib/clamav /usr/local/var/lib/clamav; do
    [[ -d $dir ]] || continue
    find "$dir" -maxdepth 1 -type f \( -name '*.cvd' -o -name '*.cld' \) -print -quit | grep -q . && return 0
  done
  return 1
}

update_clamav() {
  local attempt
  for attempt in 1 2 3; do
    if freshclam --stdout || { [[ $(id -u) -ne 0 ]] && sudo -n freshclam --stdout; }; then
      return 0
    fi
    sleep $((attempt * 5))
  done
  return 1
}

process_one() {
  local asset_id=$1 work meta url ext source
  work=$(mktemp -d "${TMPDIR:-/tmp}/iptrust-asset.XXXXXX")
  trap 'rm -rf "$work"' EXIT
  cd "$work"

  log "[$asset_id] request private source"
  meta=$(api_curl "$IPTRUST_API_URL/assets/$asset_id")
  url=$(api_curl -X POST -H 'Content-Type: application/json' --data '{"ttlSeconds":600}' \
    "$IPTRUST_API_URL/assets/$asset_id/sign" | jq -r .url)
  ext=$(printf '%s' "$meta" | jq -r .extension)
  [[ $ext =~ ^[A-Za-z0-9]+$ ]] || die "unexpected extension from API: $ext"
  source="source.$ext"
  curl --fail --silent --show-error --location "$url" --output "$source"

  log "[$asset_id] validate and scan"
  file "$source"
  if ! update_clamav && ! clamav_db_present; then
    echo 'ClamAV database is unavailable after three update attempts.' >&2
    exit 1
  fi
  if [[ -n ${CLAMAV_DB_DIR:-} ]]; then clamscan --no-summary --database="$CLAMAV_DB_DIR" "$source"
  else clamscan --no-summary "$source"; fi

  log "[$asset_id] convert preview"
  mkdir -p output
  case "$ext" in
    ai|pdf) pdftoppm -f 1 -singlefile -png -r 144 "$source" output/preview ;;
    psd) "${MAGICK[@]}" "${source}[0]" -strip -resize '2400x2400>' output/preview.png ;;
    *) "${MAGICK[@]}" "$source" -strip -resize '2400x2400>' output/preview.png ;;
  esac
  test -s output/preview.png

  log "[$asset_id] upload public derivative"
  node "$REPO/scripts/upload-derived-asset.mjs" output/preview.png "$asset_id" preview
}

report_failure() {
  local asset_id=$1
  api_curl -X POST \
    -H 'Content-Type: application/json' \
    -H "Idempotency-Key: conversion-failed-${asset_id}-${RUN_ID}" \
    --data "$(jq -cn --arg run "$RUN_ID" '{status:"failed",error:("Local conversion (scripts/process-asset.sh) failed; run " + $run + ".")}')" \
    "$IPTRUST_API_URL/assets/$asset_id/status" >/dev/null || echo "warning: could not report the failure for $asset_id" >&2
}

failed=()
for asset_id in "$@"; do
  [[ $asset_id =~ ^[A-Za-z0-9_-]+$ ]] || { echo "error: invalid asset id: $asset_id" >&2; failed+=("$asset_id"); continue; }
  # One run per asset at a time (the workflow's per-asset concurrency group).
  if command -v flock >/dev/null 2>&1; then
    lockdir=$(git -C "$REPO" rev-parse --path-format=absolute --git-common-dir)
    exec 8>"$lockdir/asset-$asset_id.lock"
    if ! flock -n 8; then
      echo "error: asset $asset_id is already being processed" >&2
      failed+=("$asset_id"); exec 8>&-; continue
    fi
  fi
  set +e
  ( set -e; process_one "$asset_id" )
  rc=$?
  set -e
  if [[ $rc -ne 0 ]]; then
    echo "error: asset $asset_id failed (exit $rc); reporting to the API" >&2
    report_failure "$asset_id"
    failed+=("$asset_id")
  else
    log "[$asset_id] done"
  fi
  exec 8>&-
done

if [[ ${#failed[@]} -gt 0 ]]; then
  die "failed: ${failed[*]}"
fi
