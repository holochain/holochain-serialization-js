// eslint-disable-next-line
// @ts-ignore
import wasm from "./Cargo.toml";
let instance: any = undefined;
export async function hashZomeCall(value: any): Promise<Uint8Array> {
  if (!instance) {
    instance = await wasm({});
  }
  return instance.hashZomeCall(value);
}
