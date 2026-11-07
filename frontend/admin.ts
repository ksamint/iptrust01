import type { Brand, Taxonomy, TaxonomyTerm, ApplicationLink, Application, IpRelation, PageList } from "./types.ts";
export {};
const $ = <T extends Element = HTMLElement>(selector: string): T | null => document.querySelector<T>(selector);
const state: { csrf: string; ipScopes: string[]; taxonomy: Taxonomy | null; ips: Brand[]; slug: string; ipEtag: string; brandEtag: string; brand: Brand | null; applicationSlug: string; applicationEtag: string; applicationLinks: ApplicationLink[] } = { csrf: "", ipScopes: [], taxonomy: null, ips: [], slug: "", ipEtag: "", brandEtag: "", brand: null, applicationSlug: "", applicationEtag: "", applicationLinks: [] };

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function status(message, isError = false) {
  const node = $("#editorStatus") || $("#unlockStatus");
  if (!node) return;
  node.textContent = message;
  node.style.color = isError ? "#b12137" : "#0e8c7b";
}

async function api<T = unknown>(path: string, init: RequestInit = {}): Promise<{ data: T; response: Response }> {
  const method = init.method || "GET";
  const headers = new Headers(init.headers || {});
  if (!["GET", "HEAD", "OPTIONS"].includes(method)) headers.set("X-CSRF-Token", state.csrf);
  const target = path.startsWith("api/") ? new URL("../" + path, import.meta.url) : path;
  const response = await fetch(target, { ...init, method, headers, credentials: "include" });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || data.message || ("HTTP " + response.status));
  return { data: data as T, response };
}

function primaryName(ip: Pick<Brand, "mainLanguage" | "names" | "slug">) {
  return ip.mainLanguage === "en" ? (ip.names?.en || ip.names?.zh || ip.slug) : (ip.names?.zh || ip.names?.en || ip.slug);
}

function options(items: TaxonomyTerm[], selected = "") {
  return items.map((item) => '<option value="' + esc(item.id) + '"' + (selected === item.id ? " selected" : "") + ">" + esc(item.labels?.zh || item.zh || item.id) + "</option>").join("");
}

function setSelectValues(select: HTMLSelectElement, values: string[]) {
  for (const option of select.options) option.selected = values.includes(option.value);
}

async function loadOverview() {
  const value = (await api<{ counts: Record<string, number>; services: Record<string, string> }>("api/v2/admin/status")).data;
  const labels = { ips: "IP", applications: "项目应用", assets: "资产", assetBytes: "存储字节", sessions: "有效会话" };
  $("#adminStats").innerHTML = Object.entries(value.counts).map(([key, count]) => '<article><strong>' + Number(count).toLocaleString() + '</strong><span>' + labels[key] + "</span></article>").join("");
  $("#serviceHealth").innerHTML = Object.entries(value.services).map(([key, service]) => '<span class="' + (service === "connected" ? "is-ok" : "") + '"><i></i>' + key + " · " + service + "</span>").join("");
}

function populateIpSelectors() {
  const allowed = state.ipScopes.includes("*") ? state.ips : state.ips.filter((ip) => state.ipScopes.includes(ip.slug));
  const markup = allowed.map((ip) => '<option value="' + esc(ip.slug) + '">' + esc(primaryName(ip)) + "</option>").join("");
  for (const selector of ["#brandSelect", "#relationParent", "#relationChild", "#applicationPrimary"]) {
    const node = $(selector);
    if (node) node.innerHTML = markup;
  }
}

async function loadCore() {
  const [taxonomy, ips] = await Promise.all([api<Taxonomy>("api/v2/taxonomy"), api<PageList<Brand>>("api/v2/ips")]);
  state.taxonomy = taxonomy.data;
  state.ips = ips.data.items || [];
  $<HTMLSelectElement>("#ipType").innerHTML = options(state.taxonomy.ipTypes || []);
  $<HTMLSelectElement>("#ipPrimaryIndustry").innerHTML = options(state.taxonomy.industries || []);
  $<HTMLSelectElement>("#ipIndustries").innerHTML = options(state.taxonomy.industries || []);
  $<HTMLSelectElement>("#applicationType").innerHTML = options(state.taxonomy.applicationTypes || []);
  populateIpSelectors();
  await Promise.all([loadOverview(), loadRelations(), loadApplications()]);
  if ($<HTMLSelectElement>("#brandSelect").value) await loadIp();
}

async function loadIp() {
  const slug = $<HTMLSelectElement>("#brandSelect").value;
  if (!slug) return;
  const [ipResult, brandResult] = await Promise.all([api<Brand>("api/v2/ips/" + encodeURIComponent(slug)), api<Brand>("api/v2/brands/" + encodeURIComponent(slug)).catch(() => null)]);
  const ip = ipResult.data;
  state.slug = slug;
  state.ipEtag = ipResult.response.headers.get("etag") || "";
  state.brandEtag = brandResult?.response.headers.get("etag") || "";
  state.brand = brandResult?.data || ip.payload || {};
  $<HTMLInputElement>("#ipNameZh").value = ip.names?.zh || "";
  $<HTMLInputElement>("#ipNameEn").value = ip.names?.en || "";
  $<HTMLSelectElement>("#ipMainLanguage").value = ip.mainLanguage;
  $<HTMLSelectElement>("#ipType").value = ip.ipType;
  $<HTMLSelectElement>("#ipPrimaryIndustry").value = ip.primaryIndustry;
  setSelectValues($<HTMLSelectElement>("#ipIndustries"), ip.industries || []);
  $<HTMLSelectElement>("#ipLifecycle").value = ip.lifecycleStatus;
  $<HTMLSelectElement>("#ipGuideline").value = ip.guidelineMode;
  $<HTMLInputElement>("#ipParentCapable").checked = Boolean(ip.parentCapable);
  $<HTMLTextAreaElement>("#editor").value = JSON.stringify(state.brand, null, 2);
  $("#recordVersion").textContent = state.ipEtag;
  status("已载入 " + primaryName(ip));
}

async function saveIp() {
  const patch = {
    names: { zh: $<HTMLInputElement>("#ipNameZh").value.trim(), en: $<HTMLInputElement>("#ipNameEn").value.trim() },
    mainLanguage: $<HTMLSelectElement>("#ipMainLanguage").value,
    ipType: $<HTMLSelectElement>("#ipType").value,
    primaryIndustry: $<HTMLSelectElement>("#ipPrimaryIndustry").value,
    industries: [...$<HTMLSelectElement>("#ipIndustries").selectedOptions].map((option) => option.value),
    lifecycleStatus: $<HTMLSelectElement>("#ipLifecycle").value,
    guidelineMode: $<HTMLSelectElement>("#ipGuideline").value,
    parentCapable: $<HTMLInputElement>("#ipParentCapable").checked,
  };
  const result = await api<Brand>("api/v2/ips/" + encodeURIComponent(state.slug), {
    method: "PATCH",
    headers: { "Content-Type": "application/json", "If-Match": state.ipEtag, "Idempotency-Key": crypto.randomUUID() },
    body: JSON.stringify({ patch }),
  });
  state.ipEtag = result.response.headers.get("etag") || "";
  $("#recordVersion").textContent = state.ipEtag;
  status("字段已保存。");
  await loadCore();
}

async function saveBrand() {
  const patch = JSON.parse($<HTMLTextAreaElement>("#editor").value);
  const result = await api<Brand>("api/v2/brands/" + encodeURIComponent(state.slug), {
    method: "PATCH",
    headers: { "Content-Type": "application/json", "If-Match": state.brandEtag, "Idempotency-Key": crypto.randomUUID() },
    body: JSON.stringify({ patch }),
  });
  state.brandEtag = result.response.headers.get("etag") || "";
  status("品牌内容已保存。");
}

async function loadRelations() {
  const items = (await api<PageList<IpRelation & { version?: number }>>("api/v2/ip-relations")).data.items || [];
  $("#relationList").innerHTML = '<h2>当前关系</h2>' + items.map((item) => '<div class="admin-list-row"><span><strong>' + esc(item.parent) + " → " + esc(item.child) + "</strong><small>" + esc(item.type) + (item.primary ? " · primary" : "") + '</small></span><button class="ghost" type="button" data-delete-relation="' + esc(item.id) + '" data-version="' + Number(item.version || 1) + '">删除</button></div>').join("");
  document.querySelectorAll<HTMLElement>("[data-delete-relation]").forEach((button) => button.addEventListener("click", () => deleteRelation(button).catch((error) => status(error.message, true))));
}

async function deleteRelation(button: HTMLElement) {
  if (!window.confirm("确认删除这条关系？")) return;
  const id = button.dataset.deleteRelation;
  await api("api/v2/ip-relations/" + encodeURIComponent(id), { method: "DELETE", headers: { "If-Match": '"ip-relation-' + id + "-v" + button.dataset.version + '"', "Idempotency-Key": crypto.randomUUID() }, body: "{}" });
  status("关系已删除。");
  await loadRelations();
}

async function createRelation(event: Event) {
  event.preventDefault();
  await api("api/v2/ip-relations", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() },
    body: JSON.stringify({ parent: $<HTMLSelectElement>("#relationParent").value, child: $<HTMLSelectElement>("#relationChild").value, type: $<HTMLSelectElement>("#relationType").value, primary: $<HTMLSelectElement>("#relationType").value === "brand_parent" }),
  });
  status("品牌关系已建立。");
  await loadRelations();
}

async function loadApplications() {
  const items = (await api<PageList<Application>>("api/v2/applications")).data.items || [];
  $("#applicationList").innerHTML = '<h2>项目应用</h2>' + items.map((item) => '<button class="admin-list-row" type="button" data-edit-application="' + esc(item.slug) + '"><strong>' + esc(primaryName(item)) + "</strong><span>" + esc(item.applicationType) + " · " + esc(item.guidelineMode) + "</span></button>").join("");
  document.querySelectorAll<HTMLElement>("[data-edit-application]").forEach((button) => button.addEventListener("click", () => loadApplication(button.dataset.editApplication).catch((error) => status(error.message, true))));
}

function resetApplication() {
  state.applicationSlug = "";
  state.applicationEtag = "";
  state.applicationLinks = [];
  $<HTMLFormElement>("#applicationForm").reset();
  $<HTMLInputElement>("#applicationSlug").disabled = false;
  $("#applicationFormTitle").textContent = "新增项目应用";
  populateIpSelectors();
}

async function loadApplication(slug) {
  const result = await api<Application>("api/v2/applications/" + encodeURIComponent(slug));
  const item = result.data;
  state.applicationSlug = slug;
  state.applicationEtag = result.response.headers.get("etag") || "";
  state.applicationLinks = item.links || [];
  $<HTMLInputElement>("#applicationSlug").value = slug;
  $<HTMLInputElement>("#applicationSlug").disabled = true;
  $<HTMLInputElement>("#applicationNameZh").value = item.names?.zh || "";
  $<HTMLInputElement>("#applicationNameEn").value = item.names?.en || "";
  $<HTMLSelectElement>("#applicationType").value = item.applicationType;
  $<HTMLSelectElement>("#applicationPrimary").value = item.links?.find((link) => link.role === "primary")?.ip || "";
  $<HTMLSelectElement>("#applicationGuideline").value = item.guidelineMode || "inherit";
  $<HTMLTextAreaElement>("#applicationDescriptionZh").value = item.description?.zh || "";
  $<HTMLTextAreaElement>("#applicationDescriptionEn").value = item.description?.en || "";
  $<HTMLTextAreaElement>("#applicationBusinessZh").value = item.business?.zh || "";
  $<HTMLTextAreaElement>("#applicationBusinessEn").value = item.business?.en || "";
  $<HTMLInputElement>("#applicationProvince").value = item.location?.province || "";
  $<HTMLInputElement>("#applicationCity").value = item.location?.city || "";
  $("#applicationFormTitle").textContent = "编辑项目应用";
}

async function saveApplication(event: Event) {
  event.preventDefault();
  const slug = state.applicationSlug || $<HTMLInputElement>("#applicationSlug").value;
  const editing = Boolean(state.applicationSlug);
  const primaryIp = $<HTMLSelectElement>("#applicationPrimary").value;
  const links = [{ ip: primaryIp, role: "primary" }, ...state.applicationLinks.filter((link) => link.role !== "primary" && link.ip !== primaryIp)];
  const headers = { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() };
  if (editing) headers["If-Match"] = state.applicationEtag;
  await api(editing ? "api/v2/applications/" + encodeURIComponent(slug) : "api/v2/applications", {
    method: editing ? "PATCH" : "POST",
    headers,
    body: JSON.stringify({ patch: { slug, names: { zh: $<HTMLInputElement>("#applicationNameZh").value, en: $<HTMLInputElement>("#applicationNameEn").value }, mainLanguage: $<HTMLInputElement>("#applicationNameZh").value ? "zh" : "en", applicationType: $<HTMLSelectElement>("#applicationType").value, lifecycleStatus: "active", guidelineMode: $<HTMLSelectElement>("#applicationGuideline").value, description: { zh: $<HTMLTextAreaElement>("#applicationDescriptionZh").value, en: $<HTMLTextAreaElement>("#applicationDescriptionEn").value }, business: { zh: $<HTMLTextAreaElement>("#applicationBusinessZh").value, en: $<HTMLTextAreaElement>("#applicationBusinessEn").value }, location: { country: "CN", province: $<HTMLInputElement>("#applicationProvince").value, city: $<HTMLInputElement>("#applicationCity").value }, links } }),
  });
  status(editing ? "项目应用已保存。" : "项目应用已创建。");
  resetApplication();
  await loadApplications();
}

async function loadAssets() {
  const items = (await api<PageList<{ title?: string; ownerId?: string; mimeType?: string; bytes?: number }>>("api/v2/assets?limit=100")).data.items || [];
  $("#assetList").innerHTML = '<h2>资产</h2>' + items.map((item) => '<div class="admin-list-row"><strong>' + esc(item.title) + "</strong><span>" + esc(item.ownerId) + " · " + esc(item.mimeType) + " · " + Number(item.bytes || 0).toLocaleString() + " B</span></div>").join("");
}

async function loadJobs() {
  const value = (await api<{ counts: Record<string, number>; outbox?: unknown[]; assetJobs?: unknown[] }>("api/v2/admin/jobs")).data;
  $("#jobList").innerHTML = '<h2>任务</h2><pre>' + JSON.stringify({ counts: value.counts, outbox: value.outbox?.slice(0, 30), assetJobs: value.assetJobs?.slice(0, 30) }, null, 2) + "</pre>";
}

async function loadAudit() {
  const items = (await api<PageList<{ action: string; resource_type: string; resource_id: string; created_at: string }>>("api/v2/audit?limit=100")).data.items || [];
  $("#auditList").innerHTML = '<h2>审计</h2>' + items.map((item) => '<div class="admin-list-row"><strong>' + esc(item.action) + "</strong><span>" + esc(item.resource_type) + " · " + esc(item.resource_id) + " · " + esc(item.created_at) + "</span></div>").join("");
}

async function loadKeys() {
  const items = (await api<PageList<{ label: string; prefix: string; revoked_at?: string; id: string; etag: string }>>("api/v2/admin/keys")).data.items || [];
  $("#keyList").innerHTML = '<h2>API Keys</h2>' + items.map((item) => '<div class="admin-list-row"><span><strong>' + esc(item.label) + "</strong><small>" + esc(item.prefix) + " · " + (item.revoked_at ? "revoked" : "active") + '</small></span>' + (item.revoked_at ? "" : '<button class="ghost" type="button" data-revoke-key="' + esc(item.id) + '" data-etag="' + esc(item.etag) + '">撤销</button>') + "</div>").join("");
  document.querySelectorAll<HTMLElement>("[data-revoke-key]").forEach((button) => button.addEventListener("click", () => revokeKey(button).catch((error) => status(error.message, true))));
}

function csv(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

async function createKey(event: Event) {
  event.preventDefault();
  const result = await api<{ key: { token: string } }>("api/v2/admin/keys", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() }, body: JSON.stringify({ label: $<HTMLInputElement>("#keyLabel").value, kind: $<HTMLSelectElement>("#keyKind").value, scopes: csv($<HTMLInputElement>("#keyScopes").value), ipScopes: csv($<HTMLInputElement>("#keyIpScopes").value) }) });
  $("#newKeyToken").textContent = result.data.key.token;
  $("#newKeyToken").classList.remove("hidden");
  status("Key 已创建；明文只显示这一次。");
  await loadKeys();
}

async function revokeKey(button: HTMLElement) {
  if (!window.confirm("确认撤销这个 API Key？")) return;
  await api("api/v2/admin/keys/" + encodeURIComponent(button.dataset.revokeKey), { method: "DELETE", headers: { "If-Match": button.dataset.etag, "Idempotency-Key": crypto.randomUUID() }, body: "{}" });
  status("Key 已撤销。");
  await loadKeys();
}

async function stepUp() {
  const result = await api<{ stepUpUntil: string }>("api/v2/auth/step-up", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ totp: $<HTMLInputElement>("#stepUpTotp").value }) });
  status("高权限已验证至 " + result.data.stepUpUntil);
  $<HTMLInputElement>("#stepUpTotp").value = "";
}

async function showAdmin(actor: { ipScopes?: string[]; scopes?: string[] }) {
  state.ipScopes = actor.ipScopes?.length ? actor.ipScopes : ["*"];
  $("#unlockPanel").classList.add("hidden");
  $("#editorPanel").classList.remove("hidden");
  await loadCore();
}

async function restoreSession() {
  const result = await api<{ csrfToken: string; actor: { ipScopes?: string[]; scopes?: string[] } }>("api/v2/auth/session");
  state.csrf = result.data.csrfToken || "";
  sessionStorage.setItem("iptrust_csrf", state.csrf);
  await showAdmin(result.data.actor);
}

async function unlock() {
  const key = $<HTMLInputElement>("#adminKey").value;
  const totp = $<HTMLInputElement>("#totpCode").value.trim();
  if (!key || !totp) throw new Error("Key + Google Authenticator first.");
  const result = await api<{ csrfToken: string; ipScopes?: string[]; scopes?: string[] }>("api/v2/auth/exchange", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ apiKey: key, totp }) });
  state.csrf = result.data.csrfToken || "";
  sessionStorage.setItem("iptrust_csrf", state.csrf);
  $<HTMLInputElement>("#adminKey").value = "";
  $<HTMLInputElement>("#totpCode").value = "";
  await showAdmin({ ipScopes: result.data.ipScopes, scopes: result.data.scopes });
}

document.querySelectorAll<HTMLElement>("[data-admin-tab]").forEach((button) => button.addEventListener("click", async () => {
  document.querySelectorAll<HTMLElement>("[data-admin-tab]").forEach((item) => item.classList.toggle("is-active", item === button));
  document.querySelectorAll<HTMLElement>("[data-admin-view]").forEach((view) => view.classList.toggle("hidden", view.dataset.adminView !== button.dataset.adminTab));
  const loaders = { overview: loadOverview, assets: loadAssets, jobs: loadJobs, audit: loadAudit, keys: loadKeys };
  if (loaders[button.dataset.adminTab]) await loaders[button.dataset.adminTab]().catch((error) => status(error.message, true));
}));
$("#unlockButton")?.addEventListener("click", () => unlock().catch((error) => status(error.message, true)));
$<HTMLSelectElement>("#brandSelect")?.addEventListener("change", () => loadIp().catch((error) => status(error.message, true)));
$("#loadBrand")?.addEventListener("click", () => loadIp().catch((error) => status(error.message, true)));
$("#saveIp")?.addEventListener("click", () => saveIp().catch((error) => status(error.message, true)));
$("#saveBrand")?.addEventListener("click", () => saveBrand().catch((error) => status(error.message, true)));
$("#relationForm")?.addEventListener("submit", (event) => createRelation(event).catch((error) => status(error.message, true)));
$<HTMLFormElement>("#applicationForm")?.addEventListener("submit", (event) => saveApplication(event).catch((error) => status(error.message, true)));
$("#newApplication")?.addEventListener("click", resetApplication);
$("#keyForm")?.addEventListener("submit", (event) => createKey(event).catch((error) => status(error.message, true)));
$("#stepUpButton")?.addEventListener("click", () => stepUp().catch((error) => status(error.message, true)));
restoreSession().catch(() => {});
