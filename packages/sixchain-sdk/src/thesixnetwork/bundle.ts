//@ts-nocheck
import * as _58 from "../nftadmin/authorization";
import * as _59 from "../nftadmin/genesis";
import * as _60 from "../nftadmin/params";
import * as _61 from "../nftadmin/permissions";
import * as _62 from "../nftadmin/query";
import * as _63 from "../nftadmin/tx";
import * as _64 from "../nftmngr/action_by_ref_id";
import * as _65 from "../nftmngr/action";
import * as _66 from "../nftmngr/attribute_definition";
import * as _67 from "../nftmngr/display_option";
import * as _68 from "../nftmngr/genesis";
import * as _69 from "../nftmngr/metadata_creator";
import * as _70 from "../nftmngr/nft_attribute_value";
import * as _71 from "../nftmngr/nft_collection";
import * as _72 from "../nftmngr/nft_data";
import * as _73 from "../nftmngr/nft_fee_balance";
import * as _74 from "../nftmngr/nft_fee_config";
import * as _75 from "../nftmngr/nft_schema_by_contract";
import * as _76 from "../nftmngr/nft_schema";
import * as _77 from "../nftmngr/on_chain_data";
import * as _78 from "../nftmngr/on_off_switch";
import * as _79 from "../nftmngr/opensea_display_option";
import * as _80 from "../nftmngr/organization";
import * as _81 from "../nftmngr/origin_data";
import * as _82 from "../nftmngr/params";
import * as _83 from "../nftmngr/query";
import * as _84 from "../nftmngr/status";
import * as _85 from "../nftmngr/tx";
import * as _86 from "../nftoracle/action_request";
import * as _87 from "../nftoracle/action_signature";
import * as _88 from "../nftoracle/collection_owner_request";
import * as _89 from "../nftoracle/collection_owner_signature";
import * as _90 from "../nftoracle/genesis";
import * as _91 from "../nftoracle/mint_request";
import * as _92 from "../nftoracle/opensea";
import * as _93 from "../nftoracle/oracle_config";
import * as _94 from "../nftoracle/params";
import * as _95 from "../nftoracle/query";
import * as _96 from "../nftoracle/request";
import * as _97 from "../nftoracle/tx";
import * as _98 from "../protocoladmin/admin";
import * as _99 from "../protocoladmin/genesis";
import * as _100 from "../protocoladmin/group";
import * as _101 from "../protocoladmin/packet";
import * as _102 from "../protocoladmin/params";
import * as _103 from "../protocoladmin/query";
import * as _104 from "../protocoladmin/tx";
import * as _105 from "../tokenmngr/burn";
import * as _106 from "../tokenmngr/genesis";
import * as _107 from "../tokenmngr/mintperm";
import * as _108 from "../tokenmngr/options";
import * as _109 from "../tokenmngr/packet";
import * as _110 from "../tokenmngr/params";
import * as _111 from "../tokenmngr/query";
import * as _112 from "../tokenmngr/token_burn";
import * as _113 from "../tokenmngr/token";
import * as _114 from "../tokenmngr/tx";
import * as _158 from "../nftadmin/tx.amino";
import * as _159 from "../nftmngr/tx.amino";
import * as _160 from "../nftoracle/tx.amino";
import * as _161 from "../protocoladmin/tx.amino";
import * as _162 from "../tokenmngr/tx.amino";
import * as _163 from "../nftadmin/tx.registry";
import * as _164 from "../nftmngr/tx.registry";
import * as _165 from "../nftoracle/tx.registry";
import * as _166 from "../protocoladmin/tx.registry";
import * as _167 from "../tokenmngr/tx.registry";
import * as _168 from "../nftadmin/query.rpc.Query";
import * as _169 from "../nftmngr/query.rpc.Query";
import * as _170 from "../nftoracle/query.rpc.Query";
import * as _171 from "../protocoladmin/query.rpc.Query";
import * as _172 from "../tokenmngr/query.rpc.Query";
import * as _173 from "../nftadmin/tx.rpc.msg";
import * as _174 from "../nftmngr/tx.rpc.msg";
import * as _175 from "../nftoracle/tx.rpc.msg";
import * as _176 from "../protocoladmin/tx.rpc.msg";
import * as _177 from "../tokenmngr/tx.rpc.msg";
import * as _180 from "./rpc.query";
import * as _181 from "./rpc.tx";
export namespace thesixnetwork {
  export namespace sixnft {
    export const nftadmin = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._158,
      ..._163,
      ..._168,
      ..._173
    };
    export const nftmngr = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
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
      ..._159,
      ..._164,
      ..._169,
      ..._174
    };
    export const nftoracle = {
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
      ..._160,
      ..._165,
      ..._170,
      ..._175
    };
  }
  export namespace sixprotocol {
    export const protocoladmin = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._161,
      ..._166,
      ..._171,
      ..._176
    };
    export const tokenmngr = {
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
      ..._162,
      ..._167,
      ..._172,
      ..._177
    };
  }
  export const ClientFactory = {
    ..._180,
    ..._181
  };
}