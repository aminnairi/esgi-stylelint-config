import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "sources/index.js",
    plugins: [
      terser()
    ],
    output: {
      file: "build/index.js",
      format: "cjs"
    }
  },
  {
    input: "sources/binary/index.js",
    plugins: [
      terser()
    ],
    external: ["stylelint"],
    output: {
      file: "build/binary/index.js",
      format: "cjs",
      banner: "#!/usr/bin/env node"
    }
  }
]
