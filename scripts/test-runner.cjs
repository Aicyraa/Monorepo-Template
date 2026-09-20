const { spawnSync } = require("node:child_process");

const target = (process.argv[2] || "all").toLowerCase();

const optionsByTarget = {
  frontend: ["--root", "frontend", "run"],
  backend: ["--root", "backend", "run"],
  all: ["run"],
};

if (!optionsByTarget[target]) {
  console.error('Usage: npm run test -- [frontend|backend|all]');
  process.exit(1);
}

const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["vitest", ...optionsByTarget[target]],
  {
    stdio: "inherit",
    cwd: process.cwd(),
  },
);

process.exit(result.status ?? 1);
