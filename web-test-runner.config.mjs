export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: "test-build/*.test.js",
  rootDir: ".",
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    include: ["./src/**/*.ts", "./test/**/*.ts", "./test-build/*.test.js"],
  },
})
