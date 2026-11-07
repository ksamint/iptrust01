interface RepositoryBrand { slug: string; designSystemUrl: string }
interface GithubRepository {
  url?: string;
  nameWithOwner?: string;
  isArchived?: boolean;
  updatedAt?: string;
  pushedAt?: string;
  defaultBranchRef?: { name?: string; target?: { committedDate?: string; url?: string; oid?: string } };
}
interface GithubResult { data?: Record<string, GithubRepository | null>; errors?: unknown[] }
interface RepositoryRecord {
  configuredUrl: string;
  url: string;
  name: string;
  accessible: boolean;
  suffixValid: boolean;
  archived: boolean | null;
  lastUpdatedAt: string | null;
  commitUrl: string | null;
  commit: string | null;
  branch: string | null;
  pushedAt: string | null;
  metadataUpdatedAt: string | null;
  checkedAt: string;
  error: string | null;
  stale?: boolean;
}
interface RepositorySnapshot { checkedAt: string; items: Record<string, RepositoryRecord>; mode?: string; refreshError?: string }
// This module also runs in Node build scripts; its types are independent of Workers globals.
interface BrandContent {
  logoUrl?: string;
  mainName?: string;
  intro?: { zh?: string; en?: string };
  profile?: { business?: { zh?: string; en?: string } };
  guides?: { primary?: boolean; text?: string; path?: string }[];
  tokens?: { text?: string }[];
  theme?: { primary?: string; accent?: string; ink?: string; paper?: string };
  images?: { role?: string; metadata?: { role?: string } }[];
  assetManifest?: { role?: string; access?: string; mediaUrl?: string }[];
  sources?: unknown[];
  primaryIndustry?: string;
  industries?: string[];
  ipType?: string;
}

// Only configured GitHub repositories are queried; user input never becomes GraphQL.
export function repositoryQuery(brands: RepositoryBrand[]) {
  return `query { ${brands.map((brand, index) => {
    const match = /^https:\/\/github\.com\/([\w-]+)\/([\w.-]+)$/.exec(brand.designSystemUrl || "");
    if (!match) throw new Error(`invalid_repository_url:${brand.slug}`);
    return `r${index}: repository(owner:${JSON.stringify(match[1])}, name:${JSON.stringify(match[2])}) { nameWithOwner url isArchived updatedAt pushedAt defaultBranchRef { name target { ... on Commit { oid committedDate url } } } }`;
  }).join(" ")} }`;
}

export function repositoryRecords(brands: RepositoryBrand[], result: GithubResult, checkedAt: string): Record<string, RepositoryRecord> {
  return Object.fromEntries(brands.map((brand, index) => {
    const repo = result.data?.[`r${index}`];
    const commit = repo?.defaultBranchRef?.target;
    return [brand.slug, {
      configuredUrl: brand.designSystemUrl,
      url: repo?.url || brand.designSystemUrl,
      name: repo?.nameWithOwner?.split("/")[1] || brand.designSystemUrl.split("/").pop(),
      accessible: Boolean(repo),
      suffixValid: /\d{2}$/.test(repo?.nameWithOwner || brand.designSystemUrl),
      archived: repo?.isArchived ?? null,
      // Repository updatedAt includes settings changes; rank by content commits instead.
      lastUpdatedAt: commit?.committedDate || null,
      commitUrl: commit?.url || null,
      commit: commit?.oid || null,
      branch: repo?.defaultBranchRef?.name || null,
      pushedAt: repo?.pushedAt || null,
      metadataUpdatedAt: repo?.updatedAt || null,
      checkedAt,
      error: repo ? null : "unavailable_or_not_authorized",
    }];
  }));
}

export function completeness(brand: BrandContent, repository?: Partial<RepositoryRecord>) {
  const checks = {
    profile: Boolean(brand.mainName && (brand.intro?.zh || brand.intro?.en)),
    business: Boolean(brand.profile?.business?.zh || brand.profile?.business?.en),
    guide: Boolean(brand.guides?.some((item) => item.primary && item.text?.trim())),
    tokens: Boolean(brand.tokens?.some((item) => item.text?.trim())),
    palette: Boolean(brand.theme?.primary && brand.theme?.accent && brand.theme?.ink && brand.theme?.paper),
    logo: Boolean(brand.images?.some((item) => item.role === "logo" || item.metadata?.role === "logo") || brand.assetManifest?.some((item) => item.role === "logo" && item.access === "public" && item.mediaUrl)),
    sources: Boolean(brand.sources?.length || brand.guides?.some((item) => /sources?\.md$/i.test(item.path) && item.text?.trim())),
    classification: Boolean(brand.primaryIndustry && brand.ipType && brand.industries?.length),
    repository: Boolean(repository?.accessible && !repository.archived && repository.commit),
    repositoryName: Boolean(repository?.suffixValid),
  };
  const score = Object.values(checks).filter(Boolean).length * 10;
  return { score, total: 100, status: score === 100 ? "inventory-complete" : score >= 70 ? "developing" : "foundation", checks, missing: Object.keys(checks).filter((key) => !checks[key]) };
}

export async function liveRepositoryStatus(env: { PUBLIC_SITE_URL: string; GITHUB_SERVICE_TOKEN?: string }): Promise<RepositorySnapshot> {
  const snapshotResponse = await fetch(`${env.PUBLIC_SITE_URL}/api/repository-status.json`);
  if (!snapshotResponse.ok) throw new Error("repository_snapshot_unavailable");
  const snapshot = await snapshotResponse.json() as RepositorySnapshot;
  if (!env.GITHUB_SERVICE_TOKEN) return { ...snapshot, mode: "snapshot", refreshError: "github_service_token_missing" };
  const brands = Object.entries(snapshot.items).map(([slug, item]) => ({ slug, designSystemUrl: item.configuredUrl }));
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.GITHUB_SERVICE_TOKEN}`, "User-Agent": "iptrust-edge", "Content-Type": "application/json" },
      body: JSON.stringify({ query: repositoryQuery(brands) }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("github_unavailable");
    const result = await response.json() as GithubResult;
    if (!result.data) throw new Error("github_unavailable");
    const checkedAt = new Date().toISOString();
    const items = repositoryRecords(brands, result, checkedAt);
    // Preserve known dates on permission/rate-limit failures, and mark them stale.
    for (const [slug, item] of Object.entries(items)) {
      if (!item.accessible) items[slug] = { ...snapshot.items[slug], error: item.error, stale: true };
    }
    return { checkedAt, mode: result.errors?.length ? "partial" : "live", items };
  } catch {
    return { ...snapshot, mode: "snapshot", refreshError: "github_unavailable" };
  }
}
