//@ts-nocheck
import * as _64 from "../nftadmin/authorization";
import * as _65 from "../nftadmin/genesis";
import * as _66 from "../nftadmin/params";
import * as _67 from "../nftadmin/permissions";
import * as _68 from "../nftadmin/query";
import * as _69 from "../nftadmin/tx";
import * as _70 from "../nftmngr/action_by_ref_id";
import * as _71 from "../nftmngr/action_executor";
import * as _72 from "../nftmngr/action_of_schema";
import * as _73 from "../nftmngr/action";
import * as _74 from "../nftmngr/attribute_definition";
import * as _75 from "../nftmngr/attribute_of_schema";
import * as _76 from "../nftmngr/display_option";
import * as _77 from "../nftmngr/executor_of_schema";
import * as _78 from "../nftmngr/genesis";
import * as _79 from "../nftmngr/lock_schema_fee";
import * as _80 from "../nftmngr/metadata_creator";
import * as _81 from "../nftmngr/nft_attribute_value";
import * as _82 from "../nftmngr/nft_collection";
import * as _83 from "../nftmngr/nft_data";
import * as _84 from "../nftmngr/nft_fee_balance";
import * as _85 from "../nftmngr/nft_fee_config";
import * as _86 from "../nftmngr/nft_schema_by_contract";
import * as _87 from "../nftmngr/nft_schema";
import * as _88 from "../nftmngr/on_chain_data";
import * as _89 from "../nftmngr/opensea_display_option";
import * as _90 from "../nftmngr/organization";
import * as _91 from "../nftmngr/origin_data";
import * as _92 from "../nftmngr/params";
import * as _93 from "../nftmngr/query";
import * as _94 from "../nftmngr/schema_attribute";
import * as _95 from "../nftmngr/tx";
import * as _96 from "../nftmngr/virtual_action";
import * as _97 from "../nftmngr/virtual_schema";
import * as _98 from "../nftoracle/action_request";
import * as _99 from "../nftoracle/action_signature";
import * as _100 from "../nftoracle/action_signer_config";
import * as _101 from "../nftoracle/action_signer";
import * as _102 from "../nftoracle/binded_signer";
import * as _103 from "../nftoracle/collection_owner_request";
import * as _104 from "../nftoracle/collection_owner_signature";
import * as _105 from "../nftoracle/genesis";
import * as _106 from "../nftoracle/mint_request";
import * as _107 from "../nftoracle/opensea";
import * as _108 from "../nftoracle/oracle_config";
import * as _109 from "../nftoracle/params";
import * as _110 from "../nftoracle/query";
import * as _111 from "../nftoracle/request";
import * as _112 from "../nftoracle/sync_action_signer";
import * as _113 from "../nftoracle/tx";
import * as _114 from "../protocoladmin/admin";
import * as _115 from "../protocoladmin/genesis";
import * as _116 from "../protocoladmin/group";
import * as _117 from "../protocoladmin/packet";
import * as _118 from "../protocoladmin/params";
import * as _119 from "../protocoladmin/query";
import * as _120 from "../protocoladmin/tx";
import * as _121 from "../tokenmngr/burn";
import * as _122 from "../tokenmngr/genesis";
import * as _123 from "../tokenmngr/mintperm";
import * as _124 from "../tokenmngr/options";
import * as _125 from "../tokenmngr/packet";
import * as _126 from "../tokenmngr/params";
import * as _127 from "../tokenmngr/query";
import * as _128 from "../tokenmngr/token_burn";
import * as _129 from "../tokenmngr/token";
import * as _130 from "../tokenmngr/tx";
import * as _178 from "../nftadmin/tx.amino";
import * as _179 from "../nftmngr/tx.amino";
import * as _180 from "../nftoracle/tx.amino";
import * as _181 from "../protocoladmin/tx.amino";
import * as _182 from "../tokenmngr/tx.amino";
import * as _183 from "../nftadmin/tx.registry";
import * as _184 from "../nftmngr/tx.registry";
import * as _185 from "../nftoracle/tx.registry";
import * as _186 from "../protocoladmin/tx.registry";
import * as _187 from "../tokenmngr/tx.registry";
import * as _188 from "../nftadmin/query.rpc.Query";
import * as _189 from "../nftmngr/query.rpc.Query";
import * as _190 from "../nftoracle/query.rpc.Query";
import * as _191 from "../protocoladmin/query.rpc.Query";
import * as _192 from "../tokenmngr/query.rpc.Query";
import * as _193 from "../nftadmin/tx.rpc.msg";
import * as _194 from "../nftmngr/tx.rpc.msg";
import * as _195 from "../nftoracle/tx.rpc.msg";
import * as _196 from "../protocoladmin/tx.rpc.msg";
import * as _197 from "../tokenmngr/tx.rpc.msg";
import * as _202 from "./rpc.query";
import * as _203 from "./rpc.tx";
export namespace thesixnetwork {
  export namespace sixprotocol {
    export const nftadmin = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._178,
      ..._183,
      ..._188,
      ..._193
    };
    export const nftmngr = {
      ..._70,
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
      ..._179,
      ..._184,
      ..._189,
      ..._194
    };
    export const nftoracle = {
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
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._180,
      ..._185,
      ..._190,
      ..._195
    };
    export const protocoladmin = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._181,
      ..._186,
      ..._191,
      ..._196
    };
    export const tokenmngr = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._182,
      ..._187,
      ..._192,
      ..._197
    };
  }
  export const ClientFactory = {
    ..._202,
    ..._203
  };
}