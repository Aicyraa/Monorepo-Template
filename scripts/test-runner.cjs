const { spawnSync } = require("node:child_process");

const target = (process.argv[2] || "all").toLowerCase();

if (!["frontend", "backend", "all"].includes(target)) {
  console.error('Usage: npm run test -- [frontend|backend|all]');
  process.exit(1);
}

const runVitest = (scope) =>
  spawnSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["vitest", "--root", scope, "run", "--passWithNoTests"],
    {
      stdio: "inherit",
      cwd: process.cwd(),
    },
  );

if (target === "all") {
  const frontendResult = runVitest("frontend");

  if (frontendResult.status !== 0) {
    process.exit(frontendResult.status ?? 1);
  }

  const backendResult = runVitest("backend");
  process.exit(backendResult.status ?? 1);
}

const result = runVitest(target);
process.exit(result.status ?? 1);
