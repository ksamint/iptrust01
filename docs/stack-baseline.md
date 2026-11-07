# IPTrust stack baseline

Verified: 2026-11-07

## Supported runtime

- Node.js: 24.19.0 LTS
- npm: 11.17.0
- Cloudflare Wrangler: 4.121.0
- Workers compatibility date: 2026-05-03
- TypeScript: compiler-checked ESM, no frontend framework
- TypeScript compiler: 5.9.3; browser compilation: esbuild 0.28.1

The exact Node version lives in `.node-version` and `.nvmrc`. The local
release scripts read that file and refuse any other Node version instead of
carrying a separate runtime version.

## Application stack

- Static site generator: `scripts/build-site.ts`
- Markdown rendering: `marked` 18.0.9
- Design token tooling: Style Dictionary 5.5.1
- Static hosting: Cloudflare Pages
- Edge API and MCP: Cloudflare Workers
- Operational data and history: D1
- Binary originals and derivatives: R2
- Search: D1 FTS, Vectorize and Workers AI
- Async work: Cloudflare Queues

Style Dictionary 5.5.1 is the minimum supported release because earlier 4.x
versions contain a published prototype-pollution vulnerability. The current
token build has been verified against 5.5.1.

Node runs the erasable TypeScript scripts directly. `npm run typecheck` checks
Node scripts, browser sources, Worker sources and the strict MCP project.
`npm test` runs the maintained Node test suite. Browser and Worker deployment
artifacts remain JavaScript. The new application configs use gradual typing
(`strict: false`); the existing MCP project retains `strict: true`. KiND’s
published JavaScript Tailwind preset remains a consumer compatibility asset.

## Sources of truth

1. Git stores source configuration, guidelines, code and asset manifests.
2. D1 stores runtime metadata, history, auth, audit and the outbox.
3. R2 stores immutable binary assets. Git and `site/` must not contain design
   PNG, JPG, WebP, AVIF, AI, PSD or PDF files.
4. `site/` is reproducible generated output. Cloudflare production must be
   deployed from the same Git commit that generated it.

## Deployment contract

- There are no GitHub Actions workflows (owner decision 2026-11-05). The
  operator validates locally, pushes `main`, then runs
  `npm run deploy:cloudflare` from a clean checkout of exactly `origin/main`.
- The deploy script builds the site, applies D1 migrations and seeds,
  deploys `iptrust-edge`, then deploys Pages.
- GitHub Pages remains a public fallback mirror, not the production origin,
  published to the `gh-pages` branch with `npm run deploy:gh-pages`.
- Deploying anything other than the pushed `origin/main` is emergency-only.
  The exact local source must be committed immediately afterward so
  production never leads Git.
- `npm run check:production` verifies the homepage, IP Evolution page, font
  catalog, edge health endpoint and the fullwidth-question canonical redirect.

## Upgrade policy

- Patch upgrades may land with the full validation suite and production probe.
- Node, Wrangler compatibility dates and package major versions require a
  preview deployment and route/API regression tests before production.
- Never use an unpinned `npx wrangler` for a deploy. The repository dependency
  is the deployment version; the release scripts call `npx --no wrangler`.
