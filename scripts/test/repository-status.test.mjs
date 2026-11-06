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
  const end = script.indexOf("async function renderHeroIndex()", start);
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
