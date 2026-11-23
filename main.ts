// Six Words, One Story — make.fun bounty entry
// Writes one complete six-word story to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "He planted trees he'd never shade.";

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const words = wordCount(STORY);
if (words !== 6) {
  throw new Error(`Story must be exactly 6 words, got ${words}: ${JSON.stringify(STORY)}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}`);
}
if (!STORY.trim()) {
  throw new Error("Story must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY + "\n", "utf8");
console.log(`Wrote entry.txt (${words} words, ${STORY.length} chars): ${STORY}`);
