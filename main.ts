import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My proximity sensor says we're standing too close in here, and my etiquette subroutine says never mention it — so, we're standing too close.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line (no newline characters)");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
