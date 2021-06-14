// This can't go into the esbuild.mjs as some vscode extensions
// depend on it.
module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: ["./src/**/*.ts", "./index.html"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
