import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// This entry ships its image as entry.png next to this file. The program
// only copies that fixed image into the output directory the grader gives
// it, so every run writes exactly the same bytes. The "out" default is
// only a local convenience; the grader always sets MAKEFUN_OUTPUT_DIR.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
