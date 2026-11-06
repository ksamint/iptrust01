import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { repositoryQuery, repositoryRecords } from "../edge/src/repository-status.js";
const brands = JSON.parse(await readFile(new URL("../config/brands.json", import.meta.url)));
const result = JSON.parse(execFileSync("gh", ["api", "graphql", "-f", `query=${repositoryQuery(brands)}`], { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 }));
if (result.errors?.length) throw new Error(JSON.stringify(result.errors));
const snapshot = { checkedAt: new Date().toISOString(), items: repositoryRecords(brands, result, new Date().toISOString()) };
await writeFile(new URL("../data/repository-status.json", import.meta.url), JSON.stringify(snapshot, null, 2) + "\n");
console.log(`Checked ${brands.length} repositories; ${Object.values(snapshot.items).filter((item) => !item.suffixValid).length} without a two-digit suffix.`);
