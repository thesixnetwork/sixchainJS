//@ts-nocheck
import * as _107 from "./wasm/v1/genesis";
import * as _108 from "./wasm/v1/ibc";
import * as _109 from "./wasm/v1/proposal";
import * as _110 from "./wasm/v1/query";
import * as _111 from "./wasm/v1/tx";
import * as _112 from "./wasm/v1/types";
import * as _306 from "./wasm/v1/tx.amino";
import * as _307 from "./wasm/v1/tx.registry";
import * as _308 from "./wasm/v1/query.rpc.Query";
import * as _309 from "./wasm/v1/tx.rpc.msg";
import * as _368 from "./rpc.query";
import * as _369 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._306,
      ..._307,
      ..._308,
      ..._309
    };
  }
  export const ClientFactory = {
    ..._368,
    ..._369
  };
}