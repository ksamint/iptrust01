import test from "node:test";
import assert from "node:assert/strict";
import { repositoryQuery, repositoryRecords, completeness, liveRepositoryStatus } from "../../edge/src/repository-status.js";
const brands = [{ slug: "example", designSystemUrl: "https://github.com/owner/dsys_example01" }];
const result = { data: { r0: { nameWithOwner: "owner/dsys_example02", url: "https://github.com/owner/dsys_example02", isArchived: false, updatedAt: "2026-11-06T10:00:00Z", defaultBranchRef: { name: "main", target: { oid: "abc", committedDate: "2026-11-01T10:00:00Z", url: "https://github.com/owner/dsys_example02/commit/abc" } } } } };
test("canonical name and content date, not repository settings date", () => {
  const repo = repositoryRecords(brands, result, "checked").example;
  assert.equal(repo.name, "dsys_example02");
  assert.equal(repo.suffixValid, true);
  assert.equal(repo.lastUpdatedAt, "2026-11-01T10:00:00Z");
  assert.match(repositoryQuery(brands), /committedDate/);
  assert.throws(() => repositoryQuery([{ slug: "bad", designSystemUrl: "https://evil.example/repo" }]), /invalid_repository_url/);
});
test("unavailable or empty repository cannot look ready", () => {
  const repo = repositoryRecords(brands, { data: {} }, "checked").example;
  assert.equal(repo.accessible, false);
  assert.equal(repo.lastUpdatedAt, null);
  const score = completeness({}, repo);
  assert.equal(score.score, 10);
  assert.equal(score.checks.repository, false);
  assert.equal(repositoryRecords([{ ...brands[0], designSystemUrl: "https://github.com/owner/dsys_example" }], {}, "checked").example.suffixValid, false);
});
test("ten evidence checks, missing logo is not inferred from hero", () => {
  const repo = repositoryRecords(brands, result, "checked").example;
  const brand = { mainName: "Example", intro: { en: "Intro" }, profile: { business: { en: "Business" } }, guides: [{ primary: true, text: "Guide", path: "BRAND.md" }, { path: "docs/sources.md", text: "Sources" }], tokens: [{ text: "{}" }], theme: { primary: "#000", accent: "#fff", ink: "#000", paper: "#fff" }, assetManifest: [{ role: "logo", access: "public", mediaUrl: "https://media.example/logo" }], primaryIndustry: "technology-ai", ipType: "corporate-brand", industries: ["technology-ai"] };
  assert.equal(completeness(brand, repo).score, 100);
  assert.equal(completeness({ ...brand, assetManifest: [], logoUrl: "hero.png" }, repo).score, 90);
  assert.deepEqual(completeness({ ...brand, assetManifest: [] }, repo).missing, ["logo"]);
});
test("live query fails safely to a dated snapshot and marks partial access stale", async (t) => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  const snapshot = { checkedAt: "old", items: repositoryRecords(brands, result, "old") };
  globalThis.fetch = async (url) => url.endsWith("repository-status.json") ? Response.json(snapshot) : Response.json({ data: { r0: null }, errors: [{ message: "not accessible" }] });
  assert.equal((await liveRepositoryStatus({ PUBLIC_SITE_URL: "https://example.org" })).mode, "snapshot");
  const partial = await liveRepositoryStatus({ PUBLIC_SITE_URL: "https://example.org", GITHUB_SERVICE_TOKEN: "test" });
  assert.equal(partial.mode, "partial");
  assert.equal(partial.items.example.stale, true);
  assert.equal(partial.items.example.lastUpdatedAt, snapshot.items.example.lastUpdatedAt);
  globalThis.fetch = async (url) => { if (url.endsWith("repository-status.json")) return Response.json(snapshot); throw Error("offline"); };
  assert.equal((await liveRepositoryStatus({ PUBLIC_SITE_URL: "https://example.org", GITHUB_SERVICE_TOKEN: "test" })).refreshError, "github_unavailable");
});

test("live ranking updates canonical repo links and readiness status", async () => {
  const { readFile } = await import("node:fs/promises");
  const { runInNewContext } = await import("node:vm");
  const script = await readFile(process.env.IPTRUST_TEST_SITE_SCRIPT || new URL("../../site/assets/site.js", import.meta.url), "utf8");
  const start = script.indexOf("let repositoryStatusPromise = null;");
  const end = script.indexOf("async function renderHeroIndex(", start);
  assert.ok(start >= 0 && end > start);
  const checks = Object.fromEntries(["profile", "business", "guide", "tokens", "palette", "logo", "sources", "classification", "repository", "repositoryName"].map((key) => [key, true]));
  const refreshed = await runInNewContext(script.slice(start, end) + "\nloadRankedBrands()", {
    cachedBrands: [{ slug: "example", designSystemUrl: "https://github.com/owner/old", completeness: { checks, score: 100, status: "inventory-complete" } }],
    loadJson: async () => ({ mode: "live", items: { example: { url: "https://github.com/owner/new02", suffixValid: true, accessible: true, archived: true, commit: "abc", lastUpdatedAt: "2026-11-01T00:00:00Z" } } }),
  });
  assert.equal(refreshed[0].designSystemUrl, "https://github.com/owner/new02");
  assert.equal(refreshed[0].completeness.score, 90);
  assert.equal(refreshed[0].completeness.status, "developing");
});

test("bilingual directory names and a collapsed readiness bar", async () => {
  const { readFile } = await import("node:fs/promises");
  const { runInNewContext } = await import("node:vm");
  const ips = JSON.parse(await readFile(new URL("../../site/api/ips.json", import.meta.url)));
  assert.equal(ips.items.find((ip) => ip.slug === "mtongheng").names.en, "Tong Heng International");
  const script = await readFile(new URL("../../site/assets/site.js", import.meta.url), "utf8");
  const start = script.indexOf("let repositoryStatusPromise = null;");
  const end = script.indexOf("async function renderHeroIndex(", start);
  const brand = { slug: "example", lastUpdatedAt: "2026-11-06T04:00:00Z", repository: { name: "dsys_example01", suffixValid: true }, completeness: { score: 90, missing: ["logo"], checks: { logo: false } } };
  const html = runInNewContext(script.slice(start, end) + "\nipHealth(brand, true)", { brand, cachedBrands: [brand], currentLocale: "en", localeMeta: { en: { dateLocale: "en-US" } }, escapeHtml: (text) => String(text) });
  assert.match(html, /Readiness 90%/);
  assert.match(html, /<time[^>]+datetime="2026-11-06T04:00:00Z"/);
  assert.match(html, /<meter[^>]+aria-label="Inventory readiness"/);
  assert.ok(html.indexOf("dsys_example01") > html.indexOf("</summary>"));
  assert.doesNotMatch(html, /<details open/);
});

test("directory fixes seeded names while preserving newer admin names", async () => {
  const { readFile } = await import("node:fs/promises");
  const { runInNewContext } = await import("node:vm");
  const script = await readFile(new URL("../../site/assets/site.js", import.meta.url), "utf8");
  const start = script.indexOf("  const data =", script.indexOf("async function renderDirectory("));
  const end = script.indexOf("  const params =", start);
  const canonical = { slug: "example", display: { zh: { name: "示例" }, en: { name: "Example" } } };
  for (const version of [1, 2]) {
    const data = await runInNewContext("(async () => {" + script.slice(start, end) + ";return data;})()", {
      initialData: null, snapshotMode: false, cachedBrands: null, lastDirectoryData: null, loadIpSystem: async () => ({ ips: [{ slug: "example", version, names: { zh: "示例", en: "Admin name" } }] }),
      loadRankedBrands: async () => [canonical],
    });
    assert.equal(data.ips[0].names.en, version === 1 ? "Example" : "Admin name");
  }
});

test("directory snapshot renders without waiting for any API", async () => {
  const { readFile } = await import("node:fs/promises");
  const { runInNewContext } = await import("node:vm");
  const script = await readFile(process.env.IPTRUST_TEST_DIRECTORY_SCRIPT || new URL("../../site/assets/site.js", import.meta.url), "utf8");
  const html = await readFile(new URL("../../site/directory/index.html", import.meta.url), "utf8");
  const embedded = html.match(/<script id="directorySnapshot" type="application\/json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(embedded && !embedded.includes("<"));
  const snapshot = JSON.parse(embedded);
  const start = script.indexOf("  const data =", script.indexOf("async function renderDirectory("));
  const end = script.indexOf("  const params =", start);
  const data = await runInNewContext("(async () => {" + script.slice(start, end) + ";return data;})()", {
    initialData: snapshot, snapshotMode: true, cachedBrands: null, lastDirectoryData: null,
    loadIpSystem: () => { throw Error("unexpected network dependency"); },
    loadRankedBrands: () => { throw Error("unexpected network dependency"); },
  });
  assert.equal(data.ips.length, 39);
  assert.equal(data.ips.find((ip) => ip.slug === "mtongheng").names.en, "Tong Heng International");
});

test("nine secondary IPs collapse under More IPs and four IPs are enlarged", async () => {
  const { readFile } = await import("node:fs/promises");
  const { runInNewContext } = await import("node:vm");
  const script = await readFile(new URL("../../site/assets/site.js", import.meta.url), "utf8");
  const ips = JSON.parse(await readFile(new URL("../../site/api/ips.json", import.meta.url)));
  const taxonomy = JSON.parse(await readFile(new URL("../../site/api/taxonomy.json", import.meta.url)));
  const more = JSON.parse(script.match(/const MORE_IP_SLUGS = new Set\((\[[^\n]*\])\);/)[1]);
  const featured = JSON.parse(script.match(/const FEATURED_IP_SLUGS = new Set\((\[[^\n]*\])\);/)[1]);
  const start = script.indexOf("async function renderDirectory(");
  const end = script.indexOf("async function fallbackGraph(", start);
  for (const query of ["", "?q=清水亭"]) {
    const page = { innerHTML: "", querySelector: () => null };
    await runInNewContext(script.slice(start, end) + "\nrenderDirectory(initialData, true)", {
      initialData: structuredClone({ ips: ips.items, taxonomy, relationships: ips.relationships, applications: ips.applications }),
      $: () => page, document: { activeElement: null }, cachedBrands: null, lastDirectoryData: null,
      MORE_IP_SLUGS: new Set(more), FEATURED_IP_SLUGS: new Set(featured), currentLocale: "en", repositoryRefreshMode: "snapshot",
      location: { search: query }, URLSearchParams, escapeHtml: (value) => String(value), ipHealth: () => "",
      primaryIpName: (ip) => ip.names?.en || ip.names?.zh || ip.slug, secondaryIpName: () => "", selectOptions: () => "", taxonomyLabel: (term) => term?.id || "", t: () => "No results",
    });
    const [visible, hidden] = page.innerHTML.split('<details class="more-ips directory-more-ips"');
    assert.ok(hidden);
    if (!query) {
      assert.equal((visible.match(/class="directory-entry/g) || []).length, 30);
      assert.equal((hidden.match(/class="directory-entry/g) || []).length, 9);
      assert.equal((visible.match(/directory-entry is-featured/g) || []).length, 4);
      assert.doesNotMatch(hidden.slice(0, hidden.indexOf('>')), /open/);
    } else {
      assert.match(hidden.slice(0, hidden.indexOf('>')), /open/);
      assert.equal((hidden.match(/class="directory-entry/g) || []).length, 1);
    }
  }
});

test("homepage controls render from published data without a network wait", async () => {
  const { readFile } = await import("node:fs/promises");
  const { runInNewContext } = await import("node:vm");
  const html = await readFile(new URL("../../site/index.html", import.meta.url), "utf8");
  const embedded = html.match(/<script id="brandListSnapshot" type="application\/json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(embedded && !embedded.includes("<"));
  const brands = JSON.parse(embedded);
  assert.equal(brands.length, 37);
  assert.ok(brands.every((b) => b.profile && b.theme && b.completeness && !b.assetManifest));
  const script = await readFile(process.env.IPTRUST_TEST_HOME_SCRIPT || new URL("../../site/assets/site.js", import.meta.url), "utf8");
  const start = script.indexOf("async function renderHeroIndex(");
  const end = script.indexOf("async function renderVersions(", start);
  const index = { innerHTML: "", scrollTop: 180, querySelector: () => null };
  await runInNewContext(script.slice(start, end) + "\nrenderHeroIndex()", {
    $: () => index, cachedBrands: brands, currentLocale: "en",
    loadRankedBrands: () => { throw Error("unexpected metadata wait"); },
    mainBrand: (b) => ({ name: b.mainName, secondaryName: b.display.en.secondaryName }),
    MORE_IP_SLUGS: new Set(["qingshuiting", "youyuan-jingmeng", "subangyuan", "xiaotaoyuan", "ganglao-baozailu", "shuangxi-shaola", "mutangwan", "tongxianghui", "tongli-market"]),
    FEATURED_IP_SLUGS: new Set(["iptrust", "tableai", "opcglobal", "sidera"]),
    escapeHtml: (v) => String(v), themeStyle: () => "", ipHealth: () => "Readiness", colorDots: () => "", githubIcon: () => "", copyIcon: () => "", t: (v) => v, setupCopyButtons: () => {},
  });
  assert.match(index.innerHTML, /data-copy-brand=/);
  assert.match(index.innerHTML, /Readiness/);
  assert.equal(index.scrollTop, 180);
});
