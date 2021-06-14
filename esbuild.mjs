import { serve, build } from "esbuild"
import postcssLiteral from "esbuild-plugin-postcss-literal"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import { env } from "process"

const IS_PROD = env.NODE_ENV == "production"
const IS_TEST = env.NODE_ENV == "test"
const WATCH = env.WATCH !== undefined

const postcssConfig = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    cssnano({
      preset: [
        IS_PROD ? "default" : "lite",
        {
          discardComments: { removeAll: true },
        },
      ],
    }),
  ],
}

const buildConfig = /** @type {import("esbuild").BuildOptions} */ {
  entryPoints: [IS_TEST ? "test/index.test.ts" : "src/index.ts"],
  bundle: true,
  format: "esm",
  target: "es2020",
  sourcemap: "external",
  outdir: IS_TEST ? "test-build" : "assets/js",
  plugins: [
    postcssLiteral({
      filter: /\.ts/,
      loader: "ts",
      tag: "pcss",
      config: postcssConfig,
    }),
  ],
  watch: WATCH
    ? {
        onRebuild(error, result) {
          if (error) console.error("Watch build failed:", error)
          else console.log("Watch build succeeded:", result)
        },
      }
    : undefined,
}

if (IS_PROD || IS_TEST) {
  build(buildConfig).catch(() => process.exit(1))
} else {
  serve({ servedir: "." }, buildConfig)
    .then(({ port }) => {
      console.log(`Dev server now running on http://localhost:${port}`)
      console.log("Files will be rebuilt on each page refresh")
    })
    .catch(() => process.exit(1))
}
