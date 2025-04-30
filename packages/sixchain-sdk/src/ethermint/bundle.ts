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
import * as _173 from "./evm/v1/tx.amino";
import * as _174 from "./evm/v1/tx.registry";
import * as _175 from "./evm/v1/query.rpc.Query";
import * as _176 from "./feemarket/v1/query.rpc.Query";
import * as _177 from "./feemarket/v2/query.rpc.Query";
import * as _178 from "./evm/v1/tx.rpc.msg";
import * as _201 from "./rpc.query";
import * as _202 from "./rpc.tx";
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
      ..._173,
      ..._174,
      ..._175,
      ..._178
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._176
    };
    export const v2 = {
      ..._61,
      ..._62,
      ..._63,
      ..._177
    };
  }
  export namespace types {
    export const v1 = {
      ..._64,
      ..._65
    };
  }
  export const ClientFactory = {
    ..._201,
    ..._202
  };
}