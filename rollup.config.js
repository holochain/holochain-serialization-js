import typescript from "@rollup/plugin-typescript";
import rust from "@wasm-tool/rollup-plugin-rust";
import replace from "@rollup/plugin-replace";

const match = `    if (typeof input === 'undefined') {
        input = new URL('index_bg.wasm', import.meta.url);
    }`;

export default {
  input: "index.ts",
  output: [{ dir: "dist", format: "es" }],
  plugins: [
    rust({
      inlineWasm: true,
    }),
    typescript({}),
    replace({
      [match]: "",
      delimiters: ["", ""],
    }),
  ],
};
