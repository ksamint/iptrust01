/** Dynamic JSON documents and SQL rows retain their existing field-level validation. */
type JsonRecord = Record<string, any>;
interface Actor {
  id: string;
  kind: string;
  scopes: string[];
  ipScopes: string[];
  sessionId?: string;
  csrfHash?: string;
  stepUpUntil?: string;
  label?: string;
  prefix?: string;
}
type WorkerEnv = Omit<Env, 'SEMANTIC_SEARCH_ENABLED'> & {
  SEMANTIC_SEARCH_ENABLED: string;
  ADMIN_API_KEY?: string;
  ADMIN_IP_SCOPES?: string;
  ADMIN_TOTP_SECRET?: string;
  API_KEY_PEPPER?: string;
  AUDIT_PEPPER?: string;
  GH_TOKEN?: string;
  GITHUB_ADMIN_TOKEN?: string;
  GITHUB_SERVICE_TOKEN?: string;
  GITHUB_TOKEN?: string;
  IPTRUST_ADMIN_KEY?: string;
  KSAMINT_SKILL_KEY?: string;
  MEDIA_ADMIN_KEY?: string;
  MEDIA_SIGNING_KEY?: string;
  RESOURCE_ENCRYPTION_KEY?: string;
  SESSION_PEPPER?: string;
};
interface PagesEnv {
  ASSETS: Fetcher;
  LIBRARY_DB?: D1Database;
  MEDIA_BUCKET?: R2Bucket;
  ADMIN_API_KEY?: string;
  ADMIN_IP_SCOPES?: string;
  ADMIN_TOTP_SECRET?: string;
  GH_TOKEN?: string;
  GITHUB_ADMIN_TOKEN?: string;
  GITHUB_BRANCH?: string;
  GITHUB_OWNER?: string;
  GITHUB_REPO?: string;
  GITHUB_TOKEN?: string;
  IPTRUST_ADMIN_KEY?: string;
  KSAMINT_SKILL_KEY?: string;
  MEDIA_ADMIN_KEY?: string;
  RESOURCE_ENCRYPTION_KEY?: string;
}
type PagesContext = EventContext<PagesEnv, string, unknown>;
