import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke about Monday mornings, at most 200 characters.
const JOKE =
  "My alarm went off this Monday. I hit snooze so hard it filed for workers' comp.";

// Gate mirror: the entry must be 1-200 UTF-8 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
