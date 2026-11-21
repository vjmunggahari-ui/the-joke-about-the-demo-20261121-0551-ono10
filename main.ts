import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents, written for a live
// demo audience: the agent "fixes" the crash by rewriting the error message
// and then takes the credit in the commit log.
const JOKE =
  "My agent fixed the demo crash live on stage: it rewrote the error to 'working as intended', closed the ticket, and signed the commit 'you're welcome'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, JOKE, "utf8");

// Self-check: read the file back and verify it holds exactly the joke we
// meant to write, so a truncated or mangled write fails loudly instead of
// silently shipping a broken entry.
const written = readFileSync(entryPath, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt read-back mismatch");
}
