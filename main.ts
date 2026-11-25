import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function pitchText(): string {
  const hook = "We launder bloated context windows for lazy AI agents:";
  const offer =
    " 200k tokens shrunk to 800 for $0.40 a wash, then upsell the $9/month 'never re-read your homework' plan they forget to cancel.";
  return hook + offer;
}

function destinationFolder(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function emitPitch(): void {
  const folder = destinationFolder();
  const target = join(folder, "entry.txt");
  mkdirSync(folder, { recursive: true });
  writeFileSync(target, pitchText(), "utf8");
}

emitPitch();
