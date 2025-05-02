//@ts-nocheck
import * as _53 from "./wasm/v1/genesis";
import * as _54 from "./wasm/v1/ibc";
import * as _55 from "./wasm/v1/proposal";
import * as _56 from "./wasm/v1/query";
import * as _57 from "./wasm/v1/tx";
import * as _58 from "./wasm/v1/types";
import * as _124 from "./wasm/v1/tx.amino";
import * as _125 from "./wasm/v1/tx.registry";
import * as _126 from "./wasm/v1/query.rpc.Query";
import * as _127 from "./wasm/v1/tx.rpc.msg";
import * as _138 from "./rpc.query";
import * as _139 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._124,
      ..._125,
      ..._126,
      ..._127
    };
  }
  export const ClientFactory = {
    ..._138,
    ..._139
  };
}