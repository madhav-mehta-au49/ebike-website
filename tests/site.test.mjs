import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
function files(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap(item =>
    item.isDirectory() ? files(join(path, item.name)) : [join(path, item.name)]
  );
}
const source = files(fileURLToPath(new URL("../src", import.meta.url))).map(file => readFileSync(file, "utf8")).join("\n");

test("every referenced standalone image exists and no mockup image is rendered", () => {
  const references = [...source.matchAll(/["'](\/images\/[^"']+\.png)["']/g)].map(match => match[1]);
  assert.ok(new Set(references).size >= 9, "all nine standalone assets must be connected");
  for (const image of references) {
    const file = new URL("../public" + image, import.meta.url);
    assert.ok(existsSync(file), image);
    assert.equal(readFileSync(file).subarray(1, 4).toString(), "PNG");
  }
  for (const old of ["/images/hero.png", "/images/range.png", "/images/support.png", "/images/lifestyle-reference.png"]) {
    assert.ok(!source.includes(old), "old mockup crop must not be rendered: " + old);
  }
});

test("hero assets preserve transparent backgrounds", () => {
  for (const name of ["hero", "sage", "pearl"]) {
    const png = readFileSync(new URL("../public/images/scooter-" + name + ".png", import.meta.url));
    assert.ok([4, 6].includes(png[25]), "PNG must have an alpha channel");
  }
});

test("approved design and required blueprint documents are present", () => {
  for (const file of ["design/approved-homepage.png", "AGENTS.md", ...["PRD", "DESIGN_SYSTEM", "ARCHITECTURE", "DATABASE", "SECURITY", "CODE_STYLE", "TESTING", "AGENTS"].map(x => "docs/" + x + ".md")])
    assert.ok(existsSync(new URL("../" + file, import.meta.url)), file);
});

