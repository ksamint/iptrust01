#!/usr/bin/env bash
# Publish the GitHub Pages fallback mirror (https://ksamint.github.io/tableai_designaha/)
# from the operator's machine. Replaces .github/workflows/deploy-pages.yml
# (owner decision 2026-11-05: no GitHub Actions). Same build as the workflow:
# Node from .node-version, npm ci, npm run build:site, publish site/.
#
# The output is committed on top of the existing gh-pages branch (or as an
# orphan branch the first time) and pushed without force, with the operator's
# own git credentials. .nojekyll is added so _headers, _redirects, _routes.json
# and _worker.js are served as-is, like the artifact upload did.
#
# One-time owner step: GitHub > Settings > Pages > Build and deployment >
# Source "Deploy from a branch", branch gh-pages, folder / (root).
#
# Usage: scripts/publish-gh-pages.sh [--no-push]
#   --no-push  build and create the gh-pages commit locally, but do not push.
set -euo pipefail

REPO=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
# shellcheck source=scripts/lib/release-common.sh
. "$REPO/scripts/lib/release-common.sh"

push=1
while [[ $# -gt 0 ]]; do
  case $1 in
    --no-push) push=0; shift ;;
    -h|--help) sed -n '2,16p' "${BASH_SOURCE[0]}"; exit 0 ;;
    *) die "unknown argument: $1" ;;
  esac
done

require_clean_main "$REPO" main
require_node_version "$REPO"
take_release_lock "$REPO" gh-pages
make_source_worktree "$REPO" "$RELEASE_SHA" iptrust-gh-pages
trap cleanup_source_worktree EXIT
log "building $RELEASE_SHA for gh-pages"
cd "$SRC"
npm ci
npm run build:site
touch site/.nojekyll
publish_gh_pages "$REPO" "$SRC/site" "$RELEASE_SHA" "$push"
