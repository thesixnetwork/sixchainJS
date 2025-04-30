//@ts-nocheck
import * as _71 from "../nftadmin/authorization";
import * as _72 from "../nftadmin/genesis";
import * as _73 from "../nftadmin/params";
import * as _74 from "../nftadmin/permissions";
import * as _75 from "../nftadmin/query";
import * as _76 from "../nftadmin/tx";
import * as _77 from "../nftmngr/latest/action_by_ref_id";
import * as _78 from "../nftmngr/latest/action_executor";
import * as _79 from "../nftmngr/latest/action_of_schema";
import * as _80 from "../nftmngr/latest/action";
import * as _81 from "../nftmngr/latest/attribute_definition";
import * as _82 from "../nftmngr/latest/attribute_of_schema";
import * as _83 from "../nftmngr/latest/display_option";
import * as _84 from "../nftmngr/latest/executor_of_schema";
import * as _85 from "../nftmngr/latest/genesis";
import * as _86 from "../nftmngr/latest/metadata_creator";
import * as _87 from "../nftmngr/latest/nft_attribute_value";
import * as _88 from "../nftmngr/latest/nft_collection";
import * as _89 from "../nftmngr/latest/nft_data";
import * as _90 from "../nftmngr/latest/nft_fee_balance";
import * as _91 from "../nftmngr/latest/nft_fee_config";
import * as _92 from "../nftmngr/latest/nft_schema_by_contract";
import * as _93 from "../nftmngr/latest/nft_schema";
import * as _94 from "../nftmngr/latest/on_chain_data";
import * as _95 from "../nftmngr/latest/opensea_display_option";
import * as _96 from "../nftmngr/latest/organization";
import * as _97 from "../nftmngr/latest/origin_data";
import * as _98 from "../nftmngr/latest/params";
import * as _99 from "../nftmngr/latest/query";
import * as _100 from "../nftmngr/latest/schema_attribute";
import * as _101 from "../nftmngr/latest/tx";
import * as _102 from "../nftoracle/action_request";
import * as _103 from "../nftoracle/action_signature";
import * as _104 from "../nftoracle/action_signer_config";
import * as _105 from "../nftoracle/action_signer";
import * as _106 from "../nftoracle/binded_signer";
import * as _107 from "../nftoracle/collection_owner_request";
import * as _108 from "../nftoracle/collection_owner_signature";
import * as _109 from "../nftoracle/genesis";
import * as _110 from "../nftoracle/mint_request";
import * as _111 from "../nftoracle/opensea";
import * as _112 from "../nftoracle/oracle_config";
import * as _113 from "../nftoracle/params";
import * as _114 from "../nftoracle/query";
import * as _115 from "../nftoracle/request";
import * as _116 from "../nftoracle/sync_action_signer";
import * as _117 from "../nftoracle/tx";
import * as _118 from "../protocoladmin/admin";
import * as _119 from "../protocoladmin/genesis";
import * as _120 from "../protocoladmin/group";
import * as _121 from "../protocoladmin/packet";
import * as _122 from "../protocoladmin/params";
import * as _123 from "../protocoladmin/query";
import * as _124 from "../protocoladmin/tx";
import * as _125 from "../tokenmngr/v1/burn";
import * as _126 from "../tokenmngr/v1/genesis";
import * as _127 from "../tokenmngr/v1/mintperm";
import * as _128 from "../tokenmngr/v1/options";
import * as _129 from "../tokenmngr/v1/packet";
import * as _130 from "../tokenmngr/v1/params";
import * as _131 from "../tokenmngr/v1/query";
import * as _132 from "../tokenmngr/v1/token_burn";
import * as _133 from "../tokenmngr/v1/token";
import * as _134 from "../tokenmngr/v1/tx";
import * as _184 from "../nftadmin/tx.amino";
import * as _185 from "../nftmngr/latest/tx.amino";
import * as _186 from "../nftoracle/tx.amino";
import * as _187 from "../protocoladmin/tx.amino";
import * as _188 from "../tokenmngr/v1/tx.amino";
import * as _189 from "../tokenmngr/v2/tx.amino";
import * as _190 from "../nftadmin/tx.registry";
import * as _191 from "../nftmngr/latest/tx.registry";
import * as _192 from "../nftoracle/tx.registry";
import * as _193 from "../protocoladmin/tx.registry";
import * as _194 from "../tokenmngr/v1/tx.registry";
import * as _195 from "../tokenmngr/v2/tx.registry";
import * as _196 from "../nftadmin/query.rpc.Query";
import * as _197 from "../nftmngr/latest/query.rpc.Query";
import * as _198 from "../nftoracle/query.rpc.Query";
import * as _199 from "../protocoladmin/query.rpc.Query";
import * as _200 from "../tokenmngr/v1/query.rpc.Query";
import * as _201 from "../tokenmngr/v2/query.rpc.Query";
import * as _202 from "../nftadmin/tx.rpc.msg";
import * as _203 from "../nftmngr/latest/tx.rpc.msg";
import * as _204 from "../nftoracle/tx.rpc.msg";
import * as _205 from "../protocoladmin/tx.rpc.msg";
import * as _206 from "../tokenmngr/v1/tx.rpc.msg";
import * as _207 from "../tokenmngr/v2/tx.rpc.msg";
import * as _212 from "./rpc.query";
import * as _213 from "./rpc.tx";
export namespace thesixnetwork {
  export namespace sixnft {
    export const nftadmin = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._184,
      ..._190,
      ..._196,
      ..._202
    };
    export const nftmngr = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
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
      ..._185,
      ..._191,
      ..._197,
      ..._203
    };
    export const nftoracle = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
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
      ..._186,
      ..._192,
      ..._198,
      ..._204
    };
  }
  export namespace sixprotocol {
    export const protocoladmin = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._187,
      ..._193,
      ..._199,
      ..._205
    };
    export const tokenmngr = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._188,
      ..._194,
      ..._200,
      ..._206,
      v2: {
        ..._189,
        ..._195,
        ..._201,
        ..._207
      }
    };
  }
  export const ClientFactory = {
    ..._212,
    ..._213
  };
}