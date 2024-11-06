//@ts-nocheck
import * as _77 from "../nftadmin/authorization";
import * as _78 from "../nftadmin/genesis";
import * as _79 from "../nftadmin/params";
import * as _80 from "../nftadmin/permissions";
import * as _81 from "../nftadmin/query";
import * as _82 from "../nftadmin/tx";
import * as _83 from "../nftmngr/action_by_ref_id";
import * as _84 from "../nftmngr/action_executor";
import * as _85 from "../nftmngr/action_of_schema";
import * as _86 from "../nftmngr/action";
import * as _87 from "../nftmngr/attribute_definition";
import * as _88 from "../nftmngr/attribute_of_schema";
import * as _89 from "../nftmngr/display_option";
import * as _90 from "../nftmngr/executor_of_schema";
import * as _91 from "../nftmngr/genesis";
import * as _92 from "../nftmngr/metadata_creator";
import * as _93 from "../nftmngr/nft_attribute_value";
import * as _94 from "../nftmngr/nft_collection";
import * as _95 from "../nftmngr/nft_data";
import * as _96 from "../nftmngr/nft_fee_balance";
import * as _97 from "../nftmngr/nft_fee_config";
import * as _98 from "../nftmngr/nft_schema_by_contract";
import * as _99 from "../nftmngr/nft_schema";
import * as _100 from "../nftmngr/on_chain_data";
import * as _101 from "../nftmngr/opensea_display_option";
import * as _102 from "../nftmngr/organization";
import * as _103 from "../nftmngr/origin_data";
import * as _104 from "../nftmngr/params";
import * as _105 from "../nftmngr/query";
import * as _106 from "../nftmngr/schema_attribute";
import * as _107 from "../nftmngr/tx";
import * as _108 from "../nftoracle/action_request";
import * as _109 from "../nftoracle/action_signature";
import * as _110 from "../nftoracle/action_signer_config";
import * as _111 from "../nftoracle/action_signer";
import * as _112 from "../nftoracle/binded_signer";
import * as _113 from "../nftoracle/collection_owner_request";
import * as _114 from "../nftoracle/collection_owner_signature";
import * as _115 from "../nftoracle/genesis";
import * as _116 from "../nftoracle/mint_request";
import * as _117 from "../nftoracle/opensea";
import * as _118 from "../nftoracle/oracle_config";
import * as _119 from "../nftoracle/params";
import * as _120 from "../nftoracle/query";
import * as _121 from "../nftoracle/request";
import * as _122 from "../nftoracle/sync_action_signer";
import * as _123 from "../nftoracle/tx";
import * as _124 from "../protocoladmin/admin";
import * as _125 from "../protocoladmin/genesis";
import * as _126 from "../protocoladmin/group";
import * as _127 from "../protocoladmin/packet";
import * as _128 from "../protocoladmin/params";
import * as _129 from "../protocoladmin/query";
import * as _130 from "../protocoladmin/tx";
import * as _131 from "../tokenmngr/v1/burn";
import * as _132 from "../tokenmngr/v1/genesis";
import * as _133 from "../tokenmngr/v1/mintperm";
import * as _134 from "../tokenmngr/v1/options";
import * as _135 from "../tokenmngr/v1/packet";
import * as _136 from "../tokenmngr/v1/params";
import * as _137 from "../tokenmngr/v1/query";
import * as _138 from "../tokenmngr/v1/token_burn";
import * as _139 from "../tokenmngr/v1/token";
import * as _140 from "../tokenmngr/v1/tx";
import * as _194 from "../nftadmin/tx.amino";
import * as _195 from "../nftmngr/tx.amino";
import * as _196 from "../nftoracle/tx.amino";
import * as _197 from "../protocoladmin/tx.amino";
import * as _198 from "../tokenmngr/v1/tx.amino";
import * as _199 from "../tokenmngr/v2/tx.amino";
import * as _200 from "../nftadmin/tx.registry";
import * as _201 from "../nftmngr/tx.registry";
import * as _202 from "../nftoracle/tx.registry";
import * as _203 from "../protocoladmin/tx.registry";
import * as _204 from "../tokenmngr/v1/tx.registry";
import * as _205 from "../tokenmngr/v2/tx.registry";
import * as _206 from "../nftadmin/query.rpc.Query";
import * as _207 from "../nftmngr/query.rpc.Query";
import * as _208 from "../nftoracle/query.rpc.Query";
import * as _209 from "../protocoladmin/query.rpc.Query";
import * as _210 from "../tokenmngr/v1/query.rpc.Query";
import * as _211 from "../tokenmngr/v2/query.rpc.Query";
import * as _212 from "../nftadmin/tx.rpc.msg";
import * as _213 from "../nftmngr/tx.rpc.msg";
import * as _214 from "../nftoracle/tx.rpc.msg";
import * as _215 from "../protocoladmin/tx.rpc.msg";
import * as _216 from "../tokenmngr/v1/tx.rpc.msg";
import * as _217 from "../tokenmngr/v2/tx.rpc.msg";
import * as _222 from "./rpc.query";
import * as _223 from "./rpc.tx";
export namespace thesixnetwork {
  export namespace sixnft {
    export const nftadmin = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._194,
      ..._200,
      ..._206,
      ..._212
    };
    export const nftmngr = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._195,
      ..._201,
      ..._207,
      ..._213
    };
    export const nftoracle = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._196,
      ..._202,
      ..._208,
      ..._214
    };
  }
  export namespace sixprotocol {
    export const protocoladmin = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._197,
      ..._203,
      ..._209,
      ..._215
    };
    export const tokenmngr = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._198,
      ..._204,
      ..._210,
      ..._216,
      v2: {
        ..._199,
        ..._205,
        ..._211,
        ..._217
      }
    };
  }
  export const ClientFactory = {
    ..._222,
    ..._223
  };
}