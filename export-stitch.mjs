import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const OUT_DIR = resolve(ROOT, "stitch-export");
const PROJECT_ID = process.env.STITCH_PROJECT_ID;

function getKeyFromMcpConfig() {
  const candidates = [
    resolve(ROOT, ".cursor/mcp.json"),
    resolve(ROOT, "../.cursor/mcp.json")
  ];

  for (const file of candidates) {
    if (!existsSync(file)) continue;
    try {
      const parsed = JSON.parse(readFileSync(file, "utf8"));
      const key = parsed?.mcpServers?.stitch?.env?.STITCH_API_KEY;
      if (typeof key === "string" && key && !key.includes("${")) {
        return key;
      }
    } catch {
      // Ignore invalid local JSON and continue fallback checks.
    }
  }
  return undefined;
}

const STITCH_API_KEY = process.env.STITCH_API_KEY || getKeyFromMcpConfig();
if (!STITCH_API_KEY) {
  console.error("Missing STITCH_API_KEY. Set env var or put key in .cursor/mcp.json");
  process.exit(1);
}
if (!PROJECT_ID) {
  console.error("Missing STITCH_PROJECT_ID. Example: STITCH_PROJECT_ID=16368809627926950257 npm run stitch:export");
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

const command = resolve(ROOT, "node_modules/@_davideast/stitch-mcp/bin/stitch-mcp.js");
const run = spawnSync(
  "node",
  [command, "site", "--project", PROJECT_ID, "--output", OUT_DIR],
  {
    cwd: ROOT,
    stdio: "inherit",
    env: {
      ...process.env,
      STITCH_API_KEY
    }
  }
);

if (run.status !== 0) {
  process.exit(run.status ?? 1);
}

const files = readdirSync(OUT_DIR).filter((f) => f.endsWith(".html"));
const manifest = {
  generatedAt: new Date().toISOString(),
  projectId: PROJECT_ID,
  outputDir: "stitch-export",
  files
};
writeFileSync(join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Generated stitch-export/manifest.json with ${files.length} HTML files`);
