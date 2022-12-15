import { encode } from "@msgpack/msgpack";
import { expect } from "@esm-bundle/chai";
import { hashZomeCall } from "../dist/index.js";

const zeroHash36Byte = [];
for (let i = 0; i < 36; i++) {
  zeroHash36Byte.push(0);
}

const AGENT_PUB_KEY = new Uint8Array([132, 32, 36].concat(...zeroHash36Byte));
const DNA_HASH = new Uint8Array([132, 45, 36].concat(...zeroHash36Byte));
const CAP_SECRET = new Uint8Array(64);
const NONCE = new Uint8Array(32);

it("serialize unsigned zome call without payload", async () => {
  const unsignedZomeCallPayload = {
    provenance: AGENT_PUB_KEY,
    cell_id: [DNA_HASH, AGENT_PUB_KEY],
    zome_name: "zome",
    fn_name: "fn",
    payload: encode(null),
    cap_secret: CAP_SECRET,
    nonce: NONCE,
    expires_at: 0,
  };

  const zomeCallHash = await hashZomeCall(unsignedZomeCallPayload);

  expect(zomeCallHash).to.deep.equal(
    new Uint8Array([
      45, 175, 195, 133, 198, 26, 189, 167, 104, 112, 18, 199, 0, 221, 253, 123,
      241, 126, 71, 59, 249, 43, 191, 229, 213, 242, 34, 121, 134, 32, 153, 239,
    ])
  );
});

it("serialize unsigned zome call with string as payload", async () => {
  const unsignedZomeCallPayload = {
    provenance: AGENT_PUB_KEY,
    cell_id: [DNA_HASH, AGENT_PUB_KEY],
    zome_name: "zome",
    fn_name: "fn",
    payload: encode("test"),
    cap_secret: CAP_SECRET,
    nonce: NONCE,
    expires_at: 0,
  };

  const zomeCallHash = await hashZomeCall(unsignedZomeCallPayload);

  expect(zomeCallHash).to.deep.equal(
    new Uint8Array([
      61, 201, 17, 88, 56, 118, 91, 200, 12, 35, 189, 99, 167, 5, 198, 196, 27,
      175, 72, 165, 6, 86, 31, 246, 196, 55, 119, 205, 46, 218, 155, 151,
    ])
  );
});
