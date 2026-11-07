export function canonicalSiteRedirect(request: Request) {
  if (!["GET", "HEAD"].includes(request.method)) return null;
  const url = new URL(request.url);
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return null;
  }
  if (pathname !== "/ip-evolution/" && pathname !== "/ip-evolution？") return null;
  url.pathname = "/ip-evolution";
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      "Cache-Control": "private, no-store",
      "X-IPTrust-Route": "canonical-ip-evolution",
    },
  });
}


export function mediaDownloadName(url: URL, pathname: string) {
  const requested = url.searchParams.get("download") || "";
  if (!requested) return /^\/public\/iptrust\/font-(?:source|package)-/.test(pathname) ? pathname.split("/").at(-1) : "";
  return String(requested === "1" ? pathname.split("/").at(-1) : requested)
    .split(/[\\/]/).pop().replace(/[\u0000-\u001f\u007f]/g, "").slice(0, 180) || "asset";
}
