//@ts-nocheck
import * as _58 from "./crypto/v1/ethsecp256k1/keys";
import * as _59 from "./evm/v1/evm";
import * as _60 from "./evm/v1/genesis";
import * as _61 from "./evm/v1/query";
import * as _62 from "./evm/v1/tx";
import * as _63 from "./feemarket/v1/feemarket";
import * as _64 from "./feemarket/v1/genesis";
import * as _65 from "./feemarket/v1/query";
import * as _66 from "./feemarket/v2/feemarket";
import * as _67 from "./feemarket/v2/genesis";
import * as _68 from "./feemarket/v2/query";
import * as _69 from "./types/v1/account";
import * as _70 from "./types/v1/web3";
import * as _188 from "./evm/v1/tx.amino";
import * as _189 from "./evm/v1/tx.registry";
import * as _190 from "./evm/v1/query.rpc.Query";
import * as _191 from "./feemarket/v1/query.rpc.Query";
import * as _192 from "./feemarket/v2/query.rpc.Query";
import * as _193 from "./evm/v1/tx.rpc.msg";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._58
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._188,
      ..._189,
      ..._190,
      ..._193
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._191
    };
    export const v2 = {
      ..._66,
      ..._67,
      ..._68,
      ..._192
    };
  }
  export namespace types {
    export const v1 = {
      ..._69,
      ..._70
    };
  }
  export const ClientFactory = {
    ..._220,
    ..._221
  };
}