use wasm_bindgen::prelude::*;

fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen(js_name = "hashZomeCall")]
pub fn hash_zome_call(_value: JsValue) -> Result<Vec<u8>, wasm_bindgen::JsError> {
    set_panic_hook();
    // let unsigned_zome_call: ZomeCallUnsigned = serde_wasm_bindgen::from_value(value)?;
    // let serialized_zome_call =
    //     holochain_zome_types::encode(&unsigned_zome_call).map_err(wasm_bindgen::JsError::from)?;
    // let zome_call_hash = holo_hash::encode::blake2b_256(&serialized_zome_call);
    // let signature = unsigned_zome_call.provenance.;
    // Ok(zome_call_hash)
    
    Ok(vec![1,1,1])
}
