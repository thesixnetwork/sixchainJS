//@ts-nocheck
import * as _110 from "./crypto/v1/ethsecp256k1/keys";
import * as _111 from "./evm/v1/events";
import * as _112 from "./evm/v1/evm";
import * as _113 from "./evm/v1/genesis";
import * as _114 from "./evm/v1/query";
import * as _115 from "./evm/v1/tx";
import * as _116 from "./feemarket/v1/events";
import * as _117 from "./feemarket/v1/feemarket";
import * as _118 from "./feemarket/v1/genesis";
import * as _119 from "./feemarket/v1/query";
import * as _120 from "./feemarket/v1/tx";
import * as _121 from "./types/v1/account";
import * as _122 from "./types/v1/dynamic_fee";
import * as _123 from "./types/v1/indexer";
import * as _124 from "./types/v1/web3";
import * as _269 from "./evm/v1/tx.amino";
import * as _270 from "./feemarket/v1/tx.amino";
import * as _271 from "./evm/v1/tx.registry";
import * as _272 from "./feemarket/v1/tx.registry";
import * as _273 from "./evm/v1/query.rpc.Query";
import * as _274 from "./feemarket/v1/query.rpc.Query";
import * as _275 from "./evm/v1/tx.rpc.msg";
import * as _276 from "./feemarket/v1/tx.rpc.msg";
import * as _301 from "./rpc.query";
import * as _302 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._110
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._269,
      ..._271,
      ..._273,
      ..._275
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._270,
      ..._272,
      ..._274,
      ..._276
    };
  }
  export namespace types {
    export const v1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124
    };
  }
  export const ClientFactory = {
    ..._301,
    ..._302
  };
}