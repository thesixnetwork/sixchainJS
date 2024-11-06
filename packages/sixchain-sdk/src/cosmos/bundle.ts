//@ts-nocheck
import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./feegrant/v1beta1/feegrant";
import * as _28 from "./feegrant/v1beta1/genesis";
import * as _29 from "./feegrant/v1beta1/query";
import * as _30 from "./feegrant/v1beta1/tx";
import * as _31 from "./gov/v1beta1/genesis";
import * as _32 from "./gov/v1beta1/gov";
import * as _33 from "./gov/v1beta1/query";
import * as _34 from "./gov/v1beta1/tx";
import * as _35 from "./mint/v1beta1/genesis";
import * as _36 from "./mint/v1beta1/mint";
import * as _37 from "./mint/v1beta1/query";
import * as _38 from "./params/v1beta1/params";
import * as _39 from "./params/v1beta1/query";
import * as _40 from "./staking/v1beta1/authz";
import * as _41 from "./staking/v1beta1/genesis";
import * as _42 from "./staking/v1beta1/query";
import * as _43 from "./staking/v1beta1/staking";
import * as _44 from "./staking/v1beta1/tx";
import * as _45 from "./staking/v2beta1/authz";
import * as _46 from "./staking/v2beta1/genesis";
import * as _47 from "./staking/v2beta1/query";
import * as _48 from "./staking/v2beta1/staking";
import * as _49 from "./staking/v2beta1/tx";
import * as _50 from "./staking/v2beta1/whitelist";
import * as _51 from "./tx/signing/v1beta1/signing";
import * as _52 from "./tx/v1beta1/service";
import * as _53 from "./tx/v1beta1/tx";
import * as _54 from "./upgrade/v1beta1/query";
import * as _55 from "./upgrade/v1beta1/upgrade";
import * as _56 from "./vesting/v1beta1/tx";
import * as _57 from "./vesting/v1beta1/vesting";
import * as _152 from "./authz/v1beta1/tx.amino";
import * as _153 from "./bank/v1beta1/tx.amino";
import * as _154 from "./distribution/v1beta1/tx.amino";
import * as _155 from "./feegrant/v1beta1/tx.amino";
import * as _156 from "./gov/v1beta1/tx.amino";
import * as _157 from "./staking/v1beta1/tx.amino";
import * as _158 from "./staking/v2beta1/tx.amino";
import * as _159 from "./vesting/v1beta1/tx.amino";
import * as _160 from "./authz/v1beta1/tx.registry";
import * as _161 from "./bank/v1beta1/tx.registry";
import * as _162 from "./distribution/v1beta1/tx.registry";
import * as _163 from "./feegrant/v1beta1/tx.registry";
import * as _164 from "./gov/v1beta1/tx.registry";
import * as _165 from "./staking/v1beta1/tx.registry";
import * as _166 from "./staking/v2beta1/tx.registry";
import * as _167 from "./vesting/v1beta1/tx.registry";
import * as _168 from "./auth/v1beta1/query.rpc.Query";
import * as _169 from "./authz/v1beta1/query.rpc.Query";
import * as _170 from "./bank/v1beta1/query.rpc.Query";
import * as _171 from "./distribution/v1beta1/query.rpc.Query";
import * as _172 from "./feegrant/v1beta1/query.rpc.Query";
import * as _173 from "./gov/v1beta1/query.rpc.Query";
import * as _174 from "./mint/v1beta1/query.rpc.Query";
import * as _175 from "./params/v1beta1/query.rpc.Query";
import * as _176 from "./staking/v1beta1/query.rpc.Query";
import * as _177 from "./staking/v2beta1/query.rpc.Query";
import * as _178 from "./tx/v1beta1/service.rpc.Service";
import * as _179 from "./upgrade/v1beta1/query.rpc.Query";
import * as _180 from "./authz/v1beta1/tx.rpc.msg";
import * as _181 from "./bank/v1beta1/tx.rpc.msg";
import * as _182 from "./distribution/v1beta1/tx.rpc.msg";
import * as _183 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _184 from "./gov/v1beta1/tx.rpc.msg";
import * as _185 from "./staking/v1beta1/tx.rpc.msg";
import * as _186 from "./staking/v2beta1/tx.rpc.msg";
import * as _187 from "./vesting/v1beta1/tx.rpc.msg";
import * as _218 from "./rpc.query";
import * as _219 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._168
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._152,
      ..._160,
      ..._169,
      ..._180
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._153,
      ..._161,
      ..._170,
      ..._181
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export const multisig = {
      ..._20
    };
    export const secp256k1 = {
      ..._21
    };
    export const secp256r1 = {
      ..._22
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._154,
      ..._162,
      ..._171,
      ..._182
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._155,
      ..._163,
      ..._172,
      ..._183
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._156,
      ..._164,
      ..._173,
      ..._184
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._174
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._175
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._157,
      ..._165,
      ..._176,
      ..._185
    };
    export const v2beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._158,
      ..._166,
      ..._177,
      ..._186
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._178
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._179
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._159,
      ..._167,
      ..._187
    };
  }
  export const ClientFactory = {
    ..._218,
    ..._219
  };
}