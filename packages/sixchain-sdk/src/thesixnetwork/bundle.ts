//@ts-nocheck
import * as _64 from "../protocoladmin/admin";
import * as _65 from "../protocoladmin/genesis";
import * as _66 from "../protocoladmin/group";
import * as _67 from "../protocoladmin/packet";
import * as _68 from "../protocoladmin/params";
import * as _69 from "../protocoladmin/query";
import * as _70 from "../protocoladmin/tx";
import * as _71 from "../tokenmngr/burn";
import * as _72 from "../tokenmngr/genesis";
import * as _73 from "../tokenmngr/mintperm";
import * as _74 from "../tokenmngr/options";
import * as _75 from "../tokenmngr/packet";
import * as _76 from "../tokenmngr/params";
import * as _77 from "../tokenmngr/query";
import * as _78 from "../tokenmngr/token_burn";
import * as _79 from "../tokenmngr/token";
import * as _80 from "../tokenmngr/tx";
import * as _128 from "../protocoladmin/tx.amino";
import * as _129 from "../tokenmngr/tx.amino";
import * as _130 from "../protocoladmin/tx.registry";
import * as _131 from "../tokenmngr/tx.registry";
import * as _132 from "../protocoladmin/query.rpc.Query";
import * as _133 from "../tokenmngr/query.rpc.Query";
import * as _134 from "../protocoladmin/tx.rpc.msg";
import * as _135 from "../tokenmngr/tx.rpc.msg";
import * as _140 from "./rpc.query";
import * as _141 from "./rpc.tx";
export namespace thesixnetwork {
  export namespace sixprotocol {
    export const protocoladmin = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._128,
      ..._130,
      ..._132,
      ..._134
    };
    export const tokenmngr = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._129,
      ..._131,
      ..._133,
      ..._135
    };
  }
  export const ClientFactory = {
    ..._140,
    ..._141
  };
}