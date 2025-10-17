//@ts-nocheck
import * as _113 from "./crypto/v1/ethsecp256k1/keys";
import * as _114 from "./evm/v1/events";
import * as _115 from "./evm/v1/evm";
import * as _116 from "./evm/v1/genesis";
import * as _117 from "./evm/v1/query";
import * as _118 from "./evm/v1/tx";
import * as _119 from "./feemarket/v1/events";
import * as _120 from "./feemarket/v1/feemarket";
import * as _121 from "./feemarket/v1/genesis";
import * as _122 from "./feemarket/v1/query";
import * as _123 from "./feemarket/v1/tx";
import * as _124 from "./types/v1/account";
import * as _125 from "./types/v1/dynamic_fee";
import * as _126 from "./types/v1/indexer";
import * as _127 from "./types/v1/web3";
import * as _310 from "./evm/v1/tx.amino";
import * as _311 from "./feemarket/v1/tx.amino";
import * as _312 from "./evm/v1/tx.registry";
import * as _313 from "./feemarket/v1/tx.registry";
import * as _314 from "./evm/v1/query.rpc.Query";
import * as _315 from "./feemarket/v1/query.rpc.Query";
import * as _316 from "./evm/v1/tx.rpc.msg";
import * as _317 from "./feemarket/v1/tx.rpc.msg";
import * as _370 from "./rpc.query";
import * as _371 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._113,
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._310,
      ..._312,
      ..._314,
      ..._316,
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._311,
      ..._313,
      ..._315,
      ..._317,
    };
  }
  export namespace types {
    export const v1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
    };
  }
  export const ClientFactory = {
    ..._370,
    ..._371,
  };
}
