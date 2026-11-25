import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "We launder bloated context windows for lazy AI agents: 200k tokens shrunk to 800 for $0.40 a wash, then upsell the $9/month 'never re-read your homework' plan they forget to cancel.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE.trim(), "utf8");
