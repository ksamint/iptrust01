import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { stripTypeScriptTypes } from "node:module";
import { runInNewContext } from "node:vm";

test("public names show established aliases without unfinished translation labels", async () => {
  const source = stripTypeScriptTypes(await readFile(new URL("../../frontend/site.ts", import.meta.url), "utf8"));
  const brandFunctions = source.slice(source.indexOf("function alternateBrandName("), source.indexOf("function mainBrand(") + source.slice(source.indexOf("function mainBrand(")).indexOf("\n}\n") + 3);
  const ipStart = source.indexOf("function primaryIpName(");
  const ipFunctions = source.slice(ipStart, source.indexOf("async function loadIpSystem(", ipStart));
  const context = { contentLang: () => "zh", localizedBrand: (b) => ({ name: b.name }), localizedClassification: () => ({}) };
  const { mainBrand, secondaryIpName } = runInNewContext(brandFunctions + ipFunctions + "\n({ mainBrand, secondaryIpName })", context);
  for (const name of ["Table AI", "APUCH", "iNucleus", "同里市集"]) {
    assert.equal(mainBrand({ name, nativeName: name, mainLanguage: "zh" }).secondaryName, "");
    assert.equal(secondaryIpName({ names: { zh: name, en: name } }), "");
  }
  const bilingual = { name: "岁知社", nativeName: "IPTrust", mainLanguage: "zh", display: { zh: { name: "岁知社" }, en: { name: "IPTrust" } } };
  assert.equal(mainBrand(bilingual).name, "岁知社");
  assert.equal(mainBrand(bilingual).secondaryName, "IPTrust");
  assert.equal(secondaryIpName({ names: { zh: "岁知社", en: "IPTrust" } }), "IPTrust");
  const build = await readFile(new URL("../build-site.ts", import.meta.url), "utf8");
  const start = build.indexOf("const initialHeroRowHtml =");
  const end = build.indexOf("const initialHeroIndexHtml", start);
  assert.doesNotMatch(build.slice(start, end), /English name pending|中文名待补充/);
});
