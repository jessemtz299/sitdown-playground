// Every page under app/ must export a default component (checked without building).
import { test } from "node:test";
import assert from "node:assert";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

function pages(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? pages(p) : f === "page.tsx" ? [p] : [];
  });
}

test("every page exports a default component", () => {
  for (const p of pages("app")) assert.match(readFileSync(p, "utf8"), /export default function/, p);
});
