const { spawnSync } = require("node:child_process");

const target = (process.argv[2] || "all").toLowerCase();

if (!["frontend", "backend", "all"].includes(target)) {
  console.error('Usage: npm run test -- [frontend|backend|all]');
  process.exit(1);
}

const runTests = (scope) =>
  spawnSync(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "test", "--prefix", scope],
    {
      stdio: "inherit",
      cwd: process.cwd(),
      shell: process.platform === "win32",
    },
  );

if (target === "all") {
  const frontendResult = runTests("frontend");

  if (frontendResult.status !== 0) {
    process.exit(frontendResult.status ?? 1);
  }

  const backendResult = runTests("backend");
  process.exit(backendResult.status ?? 1);
}

const result = runTests(target);
process.exit(result.status ?? 1);
