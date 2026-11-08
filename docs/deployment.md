# Deployment and sync

Production is `https://apuch.art`, served by Cloudflare Pages and the
`iptrust-edge` Worker. GitHub `main` is the auditable source for code,
configuration, guidelines and manifests. D1 and R2 hold runtime state and
binary assets as described in `docs/stack-baseline.md`.

## Normal release

There is no GitHub Actions workflow or CI runner (owner decision
2026-11-05). Builds, checks and deploys run on the operator's machine.

1. Start from current `origin/main` and preserve unrelated local work.
2. Run `npm ci` and `npm run build:site`.
3. Run `npm run validate:assets`, `validate:ip`, `validate:fonts` and
   `validate:routes`.
4. Run JavaScript syntax checks and Wrangler dry-run validation.
5. Commit source and reproducible generated output together.
6. Push `main`, then run `npm run deploy:cloudflare`
   (`scripts/deploy-cloudflare.sh`) with `CLOUDFLARE_API_TOKEN` and
   `CLOUDFLARE_ACCOUNT_ID` in the environment. It refuses a dirty tree or a
   HEAD that is not `origin/main`, builds in a clean temporary worktree with the
   Node version from `.node-version`, syncs changed font previews to R2,
   applies D1 migrations and seeds, uploads the private research notes when
   `IPTRUST_SUBANGYUAN_NOTE_B64` / `IPTRUST_YOUYUAN_JINGMENG_NOTE_B64` are set,
   deploys the Worker, deploys Pages (`tableai-designaha`, branch `main`) and
   ends with `npm run check:production`. When releasing several commits whose
   font catalog changed before the last one, pass
   `--font-sync-base <last deployed commit>`.

`npm run deploy:gh-pages` (`scripts/publish-gh-pages.sh`) publishes the GitHub
Pages fallback at `https://ksamint.github.io/tableai_designaha/` by committing
the built `site/` (plus `.nojekyll`) on top of the `gh-pages` branch and
pushing it without force. `--no-push` builds the commit without pushing. The
repository's Pages source must be set once by the owner to "Deploy from a
branch: `gh-pages` / root" (Settings > Pages). The fallback is not the
production origin and must not be treated as the latest operational state.

## Private asset conversion

Uploads other than public PNG, JPEG, WebP, AVIF and SVG images (for example
AI, PDF, PSD or private files) are marked `converting` by the edge Worker. No workflow picks up its GitHub
`repository_dispatch` any more, so the operator converts them locally:

```sh
npm run process:asset -- --pending          # list waiting assets (Cloudflare credentials)
npm run process:asset -- <asset-id> [...]   # scan, render and upload the preview
```

`scripts/process-asset.sh` needs `IPTRUST_ASSET_PROCESSOR_KEY` and ClamAV,
Ghostscript, ImageMagick and Poppler on PATH; see the script header.

## Emergency deployment

A direct Wrangler deploy is allowed only to restore service. Immediately
rebuild and commit the exact source so `main`, Pages and Worker production no
longer diverge. Record the deployed Worker version and Pages deployment URL in
the incident notes.

## Admin writes

The admin UI writes authenticated updates to D1, records history and audit
events, and emits Git outbox work. D1 is authoritative for newer runtime
versions; an older Git snapshot must never overwrite a newer D1 record.

Secrets belong in 1Password and the operator's shell environment. Never save API keys,
TOTP seeds, Cloudflare tokens or signing keys in Git or generated site files.

## First-load regression gate

`npm run build:site` checks that the homepage and directory include their styles and interaction bundle in the HTML, with no separate render-blocking CSS/JS dependency and a compressed entry-page budget below 100 KiB. It also checks public name fallbacks: missing translations must not appear as brand names. These checks run in local and Cloudflare Git builds. The embedded public snapshots keep lists usable while live APIs fail or refresh in the background. All 39 directory names and links also ship as HTML, before JavaScript runs; this is checked by the same build gate. Transport/TLS latency is measured separately from application readiness; a successful provider build alone does not establish fast public delivery.
