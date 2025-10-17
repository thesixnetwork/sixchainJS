//@ts-nocheck
import * as _133 from "./applications/interchain_accounts/controller/v1/controller";
import * as _134 from "./applications/interchain_accounts/controller/v1/query";
import * as _135 from "./applications/interchain_accounts/controller/v1/tx";
import * as _136 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _137 from "./applications/interchain_accounts/host/v1/host";
import * as _138 from "./applications/interchain_accounts/host/v1/query";
import * as _139 from "./applications/interchain_accounts/host/v1/tx";
import * as _140 from "./applications/interchain_accounts/v1/account";
import * as _141 from "./applications/interchain_accounts/v1/metadata";
import * as _142 from "./applications/interchain_accounts/v1/packet";
import * as _143 from "./applications/transfer/v1/authz";
import * as _144 from "./applications/transfer/v1/genesis";
import * as _145 from "./applications/transfer/v1/query";
import * as _146 from "./applications/transfer/v1/transfer";
import * as _147 from "./applications/transfer/v1/tx";
import * as _148 from "./applications/transfer/v2/packet";
import * as _149 from "./core/channel/v1/channel";
import * as _150 from "./core/channel/v1/genesis";
import * as _151 from "./core/channel/v1/query";
import * as _152 from "./core/channel/v1/tx";
import * as _153 from "./core/channel/v1/upgrade";
import * as _154 from "./core/client/v1/client";
import * as _155 from "./core/client/v1/genesis";
import * as _156 from "./core/client/v1/query";
import * as _157 from "./core/client/v1/tx";
import * as _158 from "./core/commitment/v1/commitment";
import * as _159 from "./core/connection/v1/connection";
import * as _160 from "./core/connection/v1/genesis";
import * as _161 from "./core/connection/v1/query";
import * as _162 from "./core/connection/v1/tx";
import * as _163 from "./lightclients/localhost/v2/localhost";
import * as _164 from "./lightclients/solomachine/v2/solomachine";
import * as _165 from "./lightclients/solomachine/v3/solomachine";
import * as _166 from "./lightclients/tendermint/v1/tendermint";
import * as _167 from "./lightclients/wasm/v1/genesis";
import * as _168 from "./lightclients/wasm/v1/query";
import * as _169 from "./lightclients/wasm/v1/tx";
import * as _170 from "./lightclients/wasm/v1/wasm";
import * as _318 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _319 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _320 from "./applications/transfer/v1/tx.amino";
import * as _321 from "./core/channel/v1/tx.amino";
import * as _322 from "./core/client/v1/tx.amino";
import * as _323 from "./core/connection/v1/tx.amino";
import * as _324 from "./lightclients/wasm/v1/tx.amino";
import * as _325 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _326 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _327 from "./applications/transfer/v1/tx.registry";
import * as _328 from "./core/channel/v1/tx.registry";
import * as _329 from "./core/client/v1/tx.registry";
import * as _330 from "./core/connection/v1/tx.registry";
import * as _331 from "./lightclients/wasm/v1/tx.registry";
import * as _332 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _333 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _334 from "./applications/transfer/v1/query.rpc.Query";
import * as _335 from "./core/channel/v1/query.rpc.Query";
import * as _336 from "./core/client/v1/query.rpc.Query";
import * as _337 from "./core/connection/v1/query.rpc.Query";
import * as _338 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _339 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _340 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _341 from "./applications/transfer/v1/tx.rpc.msg";
import * as _342 from "./core/channel/v1/tx.rpc.msg";
import * as _343 from "./core/client/v1/tx.rpc.msg";
import * as _344 from "./core/connection/v1/tx.rpc.msg";
import * as _345 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _372 from "./rpc.query";
import * as _373 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._133,
          ..._134,
          ..._135,
          ..._318,
          ..._325,
          ..._332,
          ..._339,
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._136,
        };
      }
      export namespace host {
        export const v1 = {
          ..._137,
          ..._138,
          ..._139,
          ..._319,
          ..._326,
          ..._333,
          ..._340,
        };
      }
      export const v1 = {
        ..._140,
        ..._141,
        ..._142,
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._320,
        ..._327,
        ..._334,
        ..._341,
      };
      export const v2 = {
        ..._148,
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._321,
        ..._328,
        ..._335,
        ..._342,
      };
    }
    export namespace client {
      export const v1 = {
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._322,
        ..._329,
        ..._336,
        ..._343,
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._158,
      };
    }
    export namespace connection {
      export const v1 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._323,
        ..._330,
        ..._337,
        ..._344,
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._163,
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._164,
      };
      export const v3 = {
        ..._165,
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._166,
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._324,
        ..._331,
        ..._338,
        ..._345,
      };
    }
  }
  export const ClientFactory = {
    ..._372,
    ..._373,
  };
}
