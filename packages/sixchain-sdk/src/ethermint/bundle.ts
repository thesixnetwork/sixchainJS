//@ts-nocheck
import * as _53 from "./crypto/v1/ethsecp256k1/keys";
import * as _54 from "./evm/v1/evm";
import * as _55 from "./evm/v1/genesis";
import * as _56 from "./evm/v1/query";
import * as _57 from "./evm/v1/tx";
import * as _58 from "./feemarket/v1/feemarket";
import * as _59 from "./feemarket/v1/genesis";
import * as _60 from "./feemarket/v1/query";
import * as _61 from "./feemarket/v2/feemarket";
import * as _62 from "./feemarket/v2/genesis";
import * as _63 from "./feemarket/v2/query";
import * as _64 from "./types/v1/account";
import * as _65 from "./types/v1/web3";
import * as _178 from "./evm/v1/tx.amino";
import * as _179 from "./evm/v1/tx.registry";
import * as _180 from "./evm/v1/query.rpc.Query";
import * as _181 from "./feemarket/v1/query.rpc.Query";
import * as _182 from "./feemarket/v2/query.rpc.Query";
import * as _183 from "./evm/v1/tx.rpc.msg";
import * as _210 from "./rpc.query";
import * as _211 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._53
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._178,
      ..._179,
      ..._180,
      ..._183
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._181
    };
    export const v2 = {
      ..._61,
      ..._62,
      ..._63,
      ..._182
    };
  }
  export namespace types {
    export const v1 = {
      ..._64,
      ..._65
    };
  }
  export const ClientFactory = {
    ..._210,
    ..._211
  };
}