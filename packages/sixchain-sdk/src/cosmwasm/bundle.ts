//@ts-nocheck
import * as _200 from "./rpc.query";
import * as _201 from "./rpc.tx";
import * as _53 from "./wasm/v1/genesis";
import * as _54 from "./wasm/v1/ibc";
import * as _55 from "./wasm/v1/proposal";
import * as _56 from "./wasm/v1/query";
import * as _176 from "./wasm/v1/query.rpc.Query";
import * as _57 from "./wasm/v1/tx";
import * as _174 from "./wasm/v1/tx.amino";
import * as _175 from "./wasm/v1/tx.registry";
import * as _177 from "./wasm/v1/tx.rpc.msg";
import * as _58 from "./wasm/v1/types";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
    };
  }
  export const ClientFactory = {
    ..._200,
    ..._201,
  };
}
