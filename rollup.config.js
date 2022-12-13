import { wasm } from "@rollup/plugin-wasm";
import replace from "@rollup/plugin-replace";

export default {
  input: "pkg/holochain_serialization_js_bg.js",
  output: [{ dir: "dist", format: "es" }],
  plugins: [
    replace({ "import * as wasm": "import wasm", delimiters: ["", ""] }),
    wasm({
      maxFileSize: 10000000,
      targetEnv: "auto-inline",
      sync: ["pkg/holochain_serialization_js_bg.wasm"],
    }),
  ],
};
