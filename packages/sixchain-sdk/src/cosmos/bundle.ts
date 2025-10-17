//@ts-nocheck
import * as _4 from "./app/runtime/v1alpha1/module";
import * as _5 from "./auth/module/v1/module";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./auth/v1beta1/tx";
import * as _10 from "./authz/module/v1/module";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/module/v1/module";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./circuit/module/v1/module";
import * as _28 from "./circuit/v1/query";
import * as _29 from "./circuit/v1/tx";
import * as _30 from "./circuit/v1/types";
import * as _31 from "./consensus/module/v1/module";
import * as _32 from "./consensus/v1/query";
import * as _33 from "./consensus/v1/tx";
import * as _34 from "./crisis/module/v1/module";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/hd/v1/hd";
import * as _37 from "./crypto/keyring/v1/record";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/module/v1/module";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/module/v1/module";
import * as _47 from "./feegrant/module/v1/module";
import * as _48 from "./feegrant/v1beta1/feegrant";
import * as _49 from "./feegrant/v1beta1/genesis";
import * as _50 from "./feegrant/v1beta1/query";
import * as _51 from "./feegrant/v1beta1/tx";
import * as _52 from "./genutil/module/v1/module";
import * as _53 from "./gov/module/v1/module";
import * as _54 from "./gov/v1/genesis";
import * as _55 from "./gov/v1/gov";
import * as _56 from "./gov/v1/query";
import * as _57 from "./gov/v1/tx";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./group/module/v1/module";
import * as _63 from "./group/v1/events";
import * as _64 from "./group/v1/genesis";
import * as _65 from "./group/v1/query";
import * as _66 from "./group/v1/tx";
import * as _67 from "./group/v1/types";
import * as _68 from "./ics23/v1/proofs";
import * as _69 from "./mint/module/v1/module";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./mint/v1beta1/tx";
import * as _74 from "./msg/textual/v1/textual";
import * as _75 from "./nft/module/v1/module";
import * as _76 from "./orm/module/v1alpha1/module";
import * as _77 from "./orm/query/v1alpha1/query";
import * as _78 from "./params/module/v1/module";
import * as _79 from "./params/v1beta1/params";
import * as _80 from "./params/v1beta1/query";
import * as _81 from "./query/v1/query";
import * as _82 from "./reflection/v1/reflection";
import * as _83 from "./slashing/module/v1/module";
import * as _84 from "./staking/module/v1/module";
import * as _85 from "./staking/v1beta1/authz";
import * as _86 from "./staking/v1beta1/genesis";
import * as _87 from "./staking/v1beta1/query";
import * as _88 from "./staking/v1beta1/staking";
import * as _89 from "./staking/v1beta1/tx";
import * as _90 from "./staking/v1beta1/whitelist";
import * as _91 from "./store/internal/kv/v1beta1/kv";
import * as _92 from "./store/snapshots/v1/snapshot";
import * as _93 from "./store/streaming/abci/grpc";
import * as _94 from "./store/v1beta1/commit_info";
import * as _95 from "./store/v1beta1/listening";
import * as _96 from "./tx/config/v1/config";
import * as _97 from "./tx/signing/v1beta1/signing";
import * as _98 from "./tx/v1beta1/service";
import * as _99 from "./tx/v1beta1/tx";
import * as _100 from "./upgrade/module/v1/module";
import * as _101 from "./upgrade/v1beta1/query";
import * as _102 from "./upgrade/v1beta1/tx";
import * as _103 from "./upgrade/v1beta1/upgrade";
import * as _104 from "./vesting/module/v1/module";
import * as _105 from "./vesting/v1beta1/tx";
import * as _106 from "./vesting/v1beta1/vesting";
import * as _247 from "./auth/v1beta1/tx.amino";
import * as _248 from "./authz/v1beta1/tx.amino";
import * as _249 from "./bank/v1beta1/tx.amino";
import * as _250 from "./circuit/v1/tx.amino";
import * as _251 from "./consensus/v1/tx.amino";
import * as _252 from "./distribution/v1beta1/tx.amino";
import * as _253 from "./feegrant/v1beta1/tx.amino";
import * as _254 from "./gov/v1/tx.amino";
import * as _255 from "./gov/v1beta1/tx.amino";
import * as _256 from "./group/v1/tx.amino";
import * as _257 from "./mint/v1beta1/tx.amino";
import * as _258 from "./staking/v1beta1/tx.amino";
import * as _259 from "./upgrade/v1beta1/tx.amino";
import * as _260 from "./vesting/v1beta1/tx.amino";
import * as _261 from "./auth/v1beta1/tx.registry";
import * as _262 from "./authz/v1beta1/tx.registry";
import * as _263 from "./bank/v1beta1/tx.registry";
import * as _264 from "./circuit/v1/tx.registry";
import * as _265 from "./consensus/v1/tx.registry";
import * as _266 from "./distribution/v1beta1/tx.registry";
import * as _267 from "./feegrant/v1beta1/tx.registry";
import * as _268 from "./gov/v1/tx.registry";
import * as _269 from "./gov/v1beta1/tx.registry";
import * as _270 from "./group/v1/tx.registry";
import * as _271 from "./mint/v1beta1/tx.registry";
import * as _272 from "./staking/v1beta1/tx.registry";
import * as _273 from "./upgrade/v1beta1/tx.registry";
import * as _274 from "./vesting/v1beta1/tx.registry";
import * as _275 from "./auth/v1beta1/query.rpc.Query";
import * as _276 from "./authz/v1beta1/query.rpc.Query";
import * as _277 from "./bank/v1beta1/query.rpc.Query";
import * as _278 from "./base/node/v1beta1/query.rpc.Service";
import * as _279 from "./circuit/v1/query.rpc.Query";
import * as _280 from "./consensus/v1/query.rpc.Query";
import * as _281 from "./distribution/v1beta1/query.rpc.Query";
import * as _282 from "./feegrant/v1beta1/query.rpc.Query";
import * as _283 from "./gov/v1/query.rpc.Query";
import * as _284 from "./gov/v1beta1/query.rpc.Query";
import * as _285 from "./group/v1/query.rpc.Query";
import * as _286 from "./mint/v1beta1/query.rpc.Query";
import * as _287 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _288 from "./params/v1beta1/query.rpc.Query";
import * as _289 from "./staking/v1beta1/query.rpc.Query";
import * as _290 from "./tx/v1beta1/service.rpc.Service";
import * as _291 from "./upgrade/v1beta1/query.rpc.Query";
import * as _292 from "./auth/v1beta1/tx.rpc.msg";
import * as _293 from "./authz/v1beta1/tx.rpc.msg";
import * as _294 from "./bank/v1beta1/tx.rpc.msg";
import * as _295 from "./circuit/v1/tx.rpc.msg";
import * as _296 from "./consensus/v1/tx.rpc.msg";
import * as _297 from "./distribution/v1beta1/tx.rpc.msg";
import * as _298 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _299 from "./gov/v1/tx.rpc.msg";
import * as _300 from "./gov/v1beta1/tx.rpc.msg";
import * as _301 from "./group/v1/tx.rpc.msg";
import * as _302 from "./mint/v1beta1/tx.rpc.msg";
import * as _303 from "./staking/v1beta1/tx.rpc.msg";
import * as _304 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _305 from "./vesting/v1beta1/tx.rpc.msg";
import * as _366 from "./rpc.query";
import * as _367 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._4,
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._5,
      };
    }
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._247,
      ..._261,
      ..._275,
      ..._292,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._10,
      };
    }
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._248,
      ..._262,
      ..._276,
      ..._293,
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._16,
      };
    }
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._249,
      ..._263,
      ..._277,
      ..._294,
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._22,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._23,
        ..._278,
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._24,
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._25,
      };
    }
    export const v1beta1 = {
      ..._26,
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._27,
      };
    }
    export const v1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._250,
      ..._264,
      ..._279,
      ..._295,
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._31,
      };
    }
    export const v1 = {
      ..._32,
      ..._33,
      ..._251,
      ..._265,
      ..._280,
      ..._296,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._34,
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._35,
    };
    export namespace hd {
      export const v1 = {
        ..._36,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._37,
      };
    }
    export const multisig = {
      ..._38,
    };
    export const secp256k1 = {
      ..._39,
    };
    export const secp256r1 = {
      ..._40,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._41,
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._252,
      ..._266,
      ..._281,
      ..._297,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._46,
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._47,
      };
    }
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._253,
      ..._267,
      ..._282,
      ..._298,
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._52,
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._53,
      };
    }
    export const v1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._254,
      ..._268,
      ..._283,
      ..._299,
    };
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._255,
      ..._269,
      ..._284,
      ..._300,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._62,
      };
    }
    export const v1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._256,
      ..._270,
      ..._285,
      ..._301,
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._68,
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._69,
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._257,
      ..._271,
      ..._286,
      ..._302,
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._74,
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._75,
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._76,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._77,
        ..._287,
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._78,
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._288,
    };
  }
  export namespace query {
    export const v1 = {
      ..._81,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._82,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._83,
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._84,
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._258,
      ..._272,
      ..._289,
      ..._303,
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._91,
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._92,
      };
    }
    export namespace streaming {
      export const abci = {
        ..._93,
      };
    }
    export const v1beta1 = {
      ..._94,
      ..._95,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._96,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._97,
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._290,
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._100,
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._259,
      ..._273,
      ..._291,
      ..._304,
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._104,
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._260,
      ..._274,
      ..._305,
    };
  }
  export const ClientFactory = {
    ..._366,
    ..._367,
  };
}
