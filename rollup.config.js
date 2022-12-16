import typescript from "@rollup/plugin-typescript";
import rust from "@wasm-tool/rollup-plugin-rust";

export default {
  input: "index.ts",
  output: [{ dir: "dist", format: "es" }],
  plugins: [
    rust({
      inlineWasm: true,
    }),
    typescript({}),
  ],
};
