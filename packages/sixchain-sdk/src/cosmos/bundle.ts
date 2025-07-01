//@ts-nocheck
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/module/v1/module";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./auth/v1beta1/tx";
import * as _8 from "./authz/module/v1/module";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/module/v1/module";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./circuit/module/v1/module";
import * as _26 from "./circuit/v1/query";
import * as _27 from "./circuit/v1/tx";
import * as _28 from "./circuit/v1/types";
import * as _29 from "./consensus/module/v1/module";
import * as _30 from "./consensus/v1/query";
import * as _31 from "./consensus/v1/tx";
import * as _32 from "./crisis/module/v1/module";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/module/v1/module";
import * as _40 from "./distribution/v1beta1/distribution";
import * as _41 from "./distribution/v1beta1/genesis";
import * as _42 from "./distribution/v1beta1/query";
import * as _43 from "./distribution/v1beta1/tx";
import * as _44 from "./evidence/module/v1/module";
import * as _45 from "./feegrant/module/v1/module";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/module/v1/module";
import * as _51 from "./gov/module/v1/module";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/module/v1/module";
import * as _61 from "./group/v1/events";
import * as _62 from "./group/v1/genesis";
import * as _63 from "./group/v1/query";
import * as _64 from "./group/v1/tx";
import * as _65 from "./group/v1/types";
import * as _66 from "./mint/module/v1/module";
import * as _67 from "./mint/v1beta1/genesis";
import * as _68 from "./mint/v1beta1/mint";
import * as _69 from "./mint/v1beta1/query";
import * as _70 from "./mint/v1beta1/tx";
import * as _71 from "./msg/textual/v1/textual";
import * as _72 from "./nft/module/v1/module";
import * as _73 from "./orm/module/v1alpha1/module";
import * as _74 from "./orm/query/v1alpha1/query";
import * as _75 from "./params/module/v1/module";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./query/v1/query";
import * as _79 from "./reflection/v1/reflection";
import * as _80 from "./slashing/module/v1/module";
import * as _81 from "./staking/module/v1/module";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./staking/v1beta1/whitelist";
import * as _88 from "./store/internal/kv/v1beta1/kv";
import * as _89 from "./store/snapshots/v1/snapshot";
import * as _90 from "./store/streaming/abci/grpc";
import * as _91 from "./store/v1beta1/commit_info";
import * as _92 from "./store/v1beta1/listening";
import * as _93 from "./tx/config/v1/config";
import * as _94 from "./tx/signing/v1beta1/signing";
import * as _95 from "./tx/v1beta1/service";
import * as _96 from "./tx/v1beta1/tx";
import * as _97 from "./upgrade/module/v1/module";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/module/v1/module";
import * as _102 from "./vesting/v1beta1/tx";
import * as _103 from "./vesting/v1beta1/vesting";
import * as _191 from "./auth/v1beta1/tx.amino";
import * as _192 from "./authz/v1beta1/tx.amino";
import * as _193 from "./bank/v1beta1/tx.amino";
import * as _194 from "./circuit/v1/tx.amino";
import * as _195 from "./consensus/v1/tx.amino";
import * as _196 from "./distribution/v1beta1/tx.amino";
import * as _197 from "./feegrant/v1beta1/tx.amino";
import * as _198 from "./gov/v1/tx.amino";
import * as _199 from "./gov/v1beta1/tx.amino";
import * as _200 from "./group/v1/tx.amino";
import * as _201 from "./mint/v1beta1/tx.amino";
import * as _202 from "./staking/v1beta1/tx.amino";
import * as _203 from "./upgrade/v1beta1/tx.amino";
import * as _204 from "./vesting/v1beta1/tx.amino";
import * as _205 from "./auth/v1beta1/tx.registry";
import * as _206 from "./authz/v1beta1/tx.registry";
import * as _207 from "./bank/v1beta1/tx.registry";
import * as _208 from "./circuit/v1/tx.registry";
import * as _209 from "./consensus/v1/tx.registry";
import * as _210 from "./distribution/v1beta1/tx.registry";
import * as _211 from "./feegrant/v1beta1/tx.registry";
import * as _212 from "./gov/v1/tx.registry";
import * as _213 from "./gov/v1beta1/tx.registry";
import * as _214 from "./group/v1/tx.registry";
import * as _215 from "./mint/v1beta1/tx.registry";
import * as _216 from "./staking/v1beta1/tx.registry";
import * as _217 from "./upgrade/v1beta1/tx.registry";
import * as _218 from "./vesting/v1beta1/tx.registry";
import * as _219 from "./auth/v1beta1/query.rpc.Query";
import * as _220 from "./authz/v1beta1/query.rpc.Query";
import * as _221 from "./bank/v1beta1/query.rpc.Query";
import * as _222 from "./base/node/v1beta1/query.rpc.Service";
import * as _223 from "./circuit/v1/query.rpc.Query";
import * as _224 from "./consensus/v1/query.rpc.Query";
import * as _225 from "./distribution/v1beta1/query.rpc.Query";
import * as _226 from "./feegrant/v1beta1/query.rpc.Query";
import * as _227 from "./gov/v1/query.rpc.Query";
import * as _228 from "./gov/v1beta1/query.rpc.Query";
import * as _229 from "./group/v1/query.rpc.Query";
import * as _230 from "./mint/v1beta1/query.rpc.Query";
import * as _231 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _232 from "./params/v1beta1/query.rpc.Query";
import * as _233 from "./staking/v1beta1/query.rpc.Query";
import * as _234 from "./tx/v1beta1/service.rpc.Service";
import * as _235 from "./upgrade/v1beta1/query.rpc.Query";
import * as _236 from "./auth/v1beta1/tx.rpc.msg";
import * as _237 from "./authz/v1beta1/tx.rpc.msg";
import * as _238 from "./bank/v1beta1/tx.rpc.msg";
import * as _239 from "./circuit/v1/tx.rpc.msg";
import * as _240 from "./consensus/v1/tx.rpc.msg";
import * as _241 from "./distribution/v1beta1/tx.rpc.msg";
import * as _242 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _243 from "./gov/v1/tx.rpc.msg";
import * as _244 from "./gov/v1beta1/tx.rpc.msg";
import * as _245 from "./group/v1/tx.rpc.msg";
import * as _246 from "./mint/v1beta1/tx.rpc.msg";
import * as _247 from "./staking/v1beta1/tx.rpc.msg";
import * as _248 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _249 from "./vesting/v1beta1/tx.rpc.msg";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._191,
      ..._205,
      ..._219,
      ..._236
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._192,
      ..._206,
      ..._220,
      ..._237
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._193,
      ..._207,
      ..._221,
      ..._238
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._222
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._194,
      ..._208,
      ..._223,
      ..._239
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._29
      };
    }
    export const v1 = {
      ..._30,
      ..._31,
      ..._195,
      ..._209,
      ..._224,
      ..._240
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._32
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export namespace hd {
      export const v1 = {
        ..._34
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35
      };
    }
    export const multisig = {
      ..._36
    };
    export const secp256k1 = {
      ..._37
    };
    export const secp256r1 = {
      ..._38
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._196,
      ..._210,
      ..._225,
      ..._241
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._197,
      ..._211,
      ..._226,
      ..._242
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._198,
      ..._212,
      ..._227,
      ..._243
    };
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._199,
      ..._213,
      ..._228,
      ..._244
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
    export const v1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._200,
      ..._214,
      ..._229,
      ..._245
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._201,
      ..._215,
      ..._230,
      ..._246
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._71
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._73
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._74,
        ..._231
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._232
    };
  }
  export namespace query {
    export const v1 = {
      ..._78
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._79
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._202,
      ..._216,
      ..._233,
      ..._247
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._88
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._89
      };
    }
    export namespace streaming {
      export const abci = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._93
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._94
      };
    }
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._234
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._97
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._203,
      ..._217,
      ..._235,
      ..._248
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._204,
      ..._218,
      ..._249
    };
  }
  export const ClientFactory = {
    ..._274,
    ..._275
  };
}