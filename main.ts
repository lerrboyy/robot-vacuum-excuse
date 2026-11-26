// The Robot Vacuum's Funniest Excuse — make.fun entry
// Writes the vacuum's one-line excuse to /output/entry.txt and checks it
// is a valid entry: 1..120 characters (counted in Unicode code points),
// not only whitespace, exactly one line.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "That dust predates my employment. I'm not touching seniority.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

// Plain JavaScript syntax (valid TypeScript too) on purpose: the file must
// pass both `node --check` and `node main.ts` with no transpiler.
function charCount(text) {
  return [...text].length;
}

function main() {
  const length = charCount(LINE);

  if (length < 1 || length > 120) {
    throw new Error(`entry is ${length} chars, must be 1..120`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  // Create /output if it is missing, then clear ONLY its contents.
  // Never remove /output itself: it is a mount point for the grader.
  mkdirSync(OUT_DIR, { recursive: true });
  for (const name of readdirSync(OUT_DIR)) {
    rmSync(join(OUT_DIR, name), { recursive: true, force: true });
  }

  writeFileSync(OUT_FILE, LINE, "utf8");

  // Read back and verify byte-for-byte: what the grader reads must be
  // exactly the validated line, nothing more, nothing less.
  const written = readFileSync(OUT_FILE, "utf8");
  if (written !== LINE) {
    throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
  }
  if (charCount(written) !== length) {
    throw new Error("read-back mismatch: char count changed on disk");
  }

  console.log(`wrote ${length} chars to ${OUT_FILE} (read-back verified)`);
}

main();
