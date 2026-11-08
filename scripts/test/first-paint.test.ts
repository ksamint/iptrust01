import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { gzipSync } from "node:zlib";

for (const path of ["index.html", "directory/index.html"]) {
  test(`${path} renders and binds controls without external CSS or JS`, async () => {
    const html = await readFile(new URL(`../../site/${path}`, import.meta.url), "utf8");
    assert.ok(gzipSync(html).byteLength < 100 * 1024, "entry page exceeds the 100 KiB compressed first-load budget");
    assert.match(html, /<style data-site-style>/);
    assert.match(html, /<script type="module" data-site-script>/);
    assert.doesNotMatch(html, /<link[^>]+(?:rel="stylesheet"|rel="modulepreload")[^>]*>/);
    assert.doesNotMatch(html, /<script[^>]+src=[^>]*site-[^>]+>/);
    assert.ok(html.indexOf("<style data-site-style>") < html.indexOf("</head>"));
    const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    if (path === "directory/index.html") assert.equal((markup.match(/class="directory-entry/g) || []).length, 39, "all names and links must exist before JavaScript runs");
    assert.doesNotMatch(markup, /中文名待补充|English name pending/);
  });
}
