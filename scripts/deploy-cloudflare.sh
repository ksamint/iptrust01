#!/usr/bin/env bash
# Production release to Cloudflare, run by the operator on their own machine.
# Replaces .github/workflows/deploy-cloudflare-pages.yml (owner decision
# 2026-11-05: no GitHub Actions). Same steps, same order, same pinned tools:
#   Node from .node-version, npm ci (wrangler 4.121.0 from package-lock.json),
#   R2 font sync when the font catalog changed, build:site, D1 library seed,
#   private research notes to R2, platform brand seeds, edge Worker deploy,
#   Pages deploy (project tableai-designaha, branch main), production check.
#
# Usage: scripts/deploy-cloudflare.sh [--font-sync-base REV]
#   --font-sync-base REV  compare scripts/sync-font-library.mjs and
#                         data/fonts.json against REV instead of HEAD^ (use the
#                         last deployed commit when releasing several commits).
#
# Operator environment (read from the shell, never logged or written to disk):
#   CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID   required
#   CLOUDFLARE_PAGES_PROJECT                      optional, default tableai-designaha
#   IPTRUST_SUBANGYUAN_NOTE_B64                   optional private note
#   IPTRUST_YOUYUAN_JINGMENG_NOTE_B64             optional private note
# Also needs python3 with venv when the font catalog changed (fonttools, brotli).
set -euo pipefail
set +x

REPO=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
# shellcheck source=scripts/lib/release-common.sh
. "$REPO/scripts/lib/release-common.sh"

FONT_SYNC_BASE=HEAD^
while [[ $# -gt 0 ]]; do
  case $1 in
    --font-sync-base) FONT_SYNC_BASE=${2:?--font-sync-base needs a revision}; shift 2 ;;
    -h|--help) sed -n '2,20p' "${BASH_SOURCE[0]}"; exit 0 ;;
    *) die "unknown argument: $1" ;;
  esac
done

project=${CLOUDFLARE_PAGES_PROJECT:-tableai-designaha}
if [[ -z ${CLOUDFLARE_API_TOKEN:-} || -z ${CLOUDFLARE_ACCOUNT_ID:-} ]]; then
  die "CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID must be set in the environment"
fi
export CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID

require_clean_main "$REPO" main
require_node_version "$REPO"
take_release_lock "$REPO" cloudflare-pages
make_source_worktree "$REPO" "$RELEASE_SHA" iptrust-deploy
trap cleanup_source_worktree EXIT
log "deploying $RELEASE_SHA to Cloudflare (Pages project $project)"
cd "$SRC"

# npx --no: use the pinned wrangler from node_modules, never download another.
wrangler() { npx --no wrangler "$@"; }

log "npm ci"
npm ci

log "font previews"
if git diff --quiet "$FONT_SYNC_BASE" HEAD -- scripts/sync-font-library.mjs data/fonts.json; then
  echo "Font catalog unchanged since $FONT_SYNC_BASE; skipping R2 font sync."
else
  python3 -m venv "$RELEASE_TMP/py"
  "$RELEASE_TMP/py/bin/python" -m pip install --quiet --disable-pip-version-check fonttools brotli
  PATH="$RELEASE_TMP/py/bin:$PATH" npm run sync:fonts:upload
fi

log "build static site"
npm run build:site

log "sync public library to D1"
npm run seed:library
wrangler d1 migrations apply iptrust-library --remote --config edge/wrangler.toml
wrangler d1 execute iptrust-library --remote --config edge/wrangler.toml --file .tmp/iptrust-library-seed.sql

log "private research notes to R2"
sha256_check() { # <expected> <file>
  local got
  if command -v sha256sum >/dev/null 2>&1; then got=$(sha256sum "$2" | cut -d' ' -f1)
  else got=$(shasum -a 256 "$2" | cut -d' ' -f1); fi
  [[ $got == "$1" ]] || die "checksum mismatch for $(basename "$2")"
}
put_note() { # <b64 value> <slug> <sha256> <name>
  local file="$notes/$4.md"
  printf '%s' "$1" | base64 --decode > "$file"
  sha256_check "$3" "$file"
  wrangler r2 object put "iptrust-media/private/$2/notes/$3/source.md" --remote --config edge/wrangler.toml --file "$file" --content-type text/markdown
}
notes="$RELEASE_TMP/private-notes"
(umask 077 && mkdir -p "$notes")
if [[ -n ${IPTRUST_SUBANGYUAN_NOTE_B64:-} ]]; then
  put_note "$IPTRUST_SUBANGYUAN_NOTE_B64" subangyuan 03f8c85995bd2c298ca270a0c3f4c8e8adc07151ea940a2f3275cdf1439c2b1f subangyuan
else
  echo "IPTRUST_SUBANGYUAN_NOTE_B64 not set; skipping."
fi
if [[ -n ${IPTRUST_YOUYUAN_JINGMENG_NOTE_B64:-} ]]; then
  put_note "$IPTRUST_YOUYUAN_JINGMENG_NOTE_B64" youyuan-jingmeng 49acff2bb8ef69a8a691d41c454379f11b1c1aa742b117a06efa070bae6f84ac youyuan-jingmeng
else
  echo "IPTRUST_YOUYUAN_JINGMENG_NOTE_B64 not set; skipping."
fi
rm -rf "$notes"

log "import version-safe IP architecture snapshots"
npm run seed:platform -- --brands-only
for seed in .tmp/platform-brand-seed-*.sql; do
  [[ -e $seed ]] || die "seed:platform produced no .tmp/platform-brand-seed-*.sql"
  wrangler d1 execute iptrust-library --remote --config edge/wrangler.toml --file "$seed"
done

log "deploy edge API and media worker"
wrangler deploy --config edge/wrangler.toml

log "deploy Cloudflare Pages"
wrangler pages deploy site --project-name="$project" --branch=main

log "verify production"
npm run check:production
log "released $RELEASE_SHA"
