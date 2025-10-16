//@ts-nocheck
import * as _104 from "./wasm/v1/genesis";
import * as _105 from "./wasm/v1/ibc";
import * as _106 from "./wasm/v1/proposal";
import * as _107 from "./wasm/v1/query";
import * as _108 from "./wasm/v1/tx";
import * as _109 from "./wasm/v1/types";
import * as _265 from "./wasm/v1/tx.amino";
import * as _266 from "./wasm/v1/tx.registry";
import * as _267 from "./wasm/v1/query.rpc.Query";
import * as _268 from "./wasm/v1/tx.rpc.msg";
import * as _299 from "./rpc.query";
import * as _300 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
    };
  }
  export const ClientFactory = {
    ..._299,
    ..._300,
  };
}
