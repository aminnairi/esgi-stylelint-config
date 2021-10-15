import { terser } from "rollup-plugin-terser";

export default {
  input: "sources/index.js",
  plugins: [
    terser()
  ],
  output: {
    file: "build/index.js",
    format: "cjs"
  }
}
