//@ts-nocheck
import * as _71 from "../nftadmin/authorization";
import * as _72 from "../nftadmin/genesis";
import * as _73 from "../nftadmin/params";
import * as _74 from "../nftadmin/permissions";
import * as _75 from "../nftadmin/query";
import * as _76 from "../nftadmin/tx";
import * as _77 from "../nftmngr/action_by_ref_id";
import * as _78 from "../nftmngr/action";
import * as _79 from "../nftmngr/attribute_definition";
import * as _80 from "../nftmngr/display_option";
import * as _81 from "../nftmngr/genesis";
import * as _82 from "../nftmngr/metadata_creator";
import * as _83 from "../nftmngr/nft_attribute_value";
import * as _84 from "../nftmngr/nft_collection";
import * as _85 from "../nftmngr/nft_data";
import * as _86 from "../nftmngr/nft_fee_balance";
import * as _87 from "../nftmngr/nft_fee_config";
import * as _88 from "../nftmngr/nft_schema_by_contract";
import * as _89 from "../nftmngr/nft_schema";
import * as _90 from "../nftmngr/on_chain_data";
import * as _91 from "../nftmngr/opensea_display_option";
import * as _92 from "../nftmngr/organization";
import * as _93 from "../nftmngr/origin_data";
import * as _94 from "../nftmngr/params";
import * as _95 from "../nftmngr/query";
import * as _96 from "../nftmngr/tx";
import * as _97 from "../nftoracle/action_request";
import * as _98 from "../nftoracle/action_signature";
import * as _99 from "../nftoracle/action_signer_config";
import * as _100 from "../nftoracle/action_signer";
import * as _101 from "../nftoracle/binded_signer";
import * as _102 from "../nftoracle/collection_owner_request";
import * as _103 from "../nftoracle/collection_owner_signature";
import * as _104 from "../nftoracle/genesis";
import * as _105 from "../nftoracle/mint_request";
import * as _106 from "../nftoracle/opensea";
import * as _107 from "../nftoracle/oracle_config";
import * as _108 from "../nftoracle/params";
import * as _109 from "../nftoracle/query";
import * as _110 from "../nftoracle/request";
import * as _111 from "../nftoracle/sync_action_signer";
import * as _112 from "../nftoracle/tx";
import * as _113 from "../protocoladmin/admin";
import * as _114 from "../protocoladmin/genesis";
import * as _115 from "../protocoladmin/group";
import * as _116 from "../protocoladmin/packet";
import * as _117 from "../protocoladmin/params";
import * as _118 from "../protocoladmin/query";
import * as _119 from "../protocoladmin/tx";
import * as _120 from "../tokenmngr/burn";
import * as _121 from "../tokenmngr/genesis";
import * as _122 from "../tokenmngr/mintperm";
import * as _123 from "../tokenmngr/options";
import * as _124 from "../tokenmngr/packet";
import * as _125 from "../tokenmngr/params";
import * as _126 from "../tokenmngr/query";
import * as _127 from "../tokenmngr/token_burn";
import * as _128 from "../tokenmngr/token";
import * as _129 from "../tokenmngr/tx";
import * as _179 from "../nftadmin/tx.amino";
import * as _180 from "../nftmngr/tx.amino";
import * as _181 from "../nftoracle/tx.amino";
import * as _182 from "../protocoladmin/tx.amino";
import * as _183 from "../tokenmngr/tx.amino";
import * as _184 from "../nftadmin/tx.registry";
import * as _185 from "../nftmngr/tx.registry";
import * as _186 from "../nftoracle/tx.registry";
import * as _187 from "../protocoladmin/tx.registry";
import * as _188 from "../tokenmngr/tx.registry";
import * as _189 from "../nftadmin/query.rpc.Query";
import * as _190 from "../nftmngr/query.rpc.Query";
import * as _191 from "../nftoracle/query.rpc.Query";
import * as _192 from "../protocoladmin/query.rpc.Query";
import * as _193 from "../tokenmngr/query.rpc.Query";
import * as _194 from "../nftadmin/tx.rpc.msg";
import * as _195 from "../nftmngr/tx.rpc.msg";
import * as _196 from "../nftoracle/tx.rpc.msg";
import * as _197 from "../protocoladmin/tx.rpc.msg";
import * as _198 from "../tokenmngr/tx.rpc.msg";
import * as _203 from "./rpc.query";
import * as _204 from "./rpc.tx";
export namespace thesixnetwork {
  export namespace sixnft {
    export const nftadmin = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._179,
      ..._184,
      ..._189,
      ..._194
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
      ..._180,
      ..._185,
      ..._190,
      ..._195
    };
    export const nftoracle = {
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
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._181,
      ..._186,
      ..._191,
      ..._196
    };
  }
  export namespace sixprotocol {
    export const protocoladmin = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._182,
      ..._187,
      ..._192,
      ..._197
    };
    export const tokenmngr = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._183,
      ..._188,
      ..._193,
      ..._198
    };
  }
  export const ClientFactory = {
    ..._203,
    ..._204
  };
}