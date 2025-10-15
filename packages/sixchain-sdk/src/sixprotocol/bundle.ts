//@ts-nocheck
import * as _115 from "./nftadmin/authorization";
import * as _116 from "./nftadmin/genesis";
import * as _117 from "./nftadmin/params";
import * as _118 from "./nftadmin/permissions";
import * as _119 from "./nftadmin/query";
import * as _120 from "./nftadmin/tx";
import * as _121 from "./nftmngr/action_by_ref_id";
import * as _122 from "./nftmngr/action_executor";
import * as _123 from "./nftmngr/action_of_schema";
import * as _124 from "./nftmngr/action";
import * as _125 from "./nftmngr/attribute_definition";
import * as _126 from "./nftmngr/attribute_of_schema";
import * as _127 from "./nftmngr/display_option";
import * as _128 from "./nftmngr/executor_of_schema";
import * as _129 from "./nftmngr/genesis";
import * as _130 from "./nftmngr/lock_schema_fee";
import * as _131 from "./nftmngr/metadata_creator";
import * as _132 from "./nftmngr/nft_attribute_value";
import * as _133 from "./nftmngr/nft_collection";
import * as _134 from "./nftmngr/nft_data";
import * as _135 from "./nftmngr/nft_fee_balance";
import * as _136 from "./nftmngr/nft_fee_config";
import * as _137 from "./nftmngr/nft_schema_by_contract";
import * as _138 from "./nftmngr/nft_schema";
import * as _139 from "./nftmngr/on_chain_data";
import * as _140 from "./nftmngr/opensea_display_option";
import * as _141 from "./nftmngr/organization";
import * as _142 from "./nftmngr/origin_data";
import * as _143 from "./nftmngr/params";
import * as _144 from "./nftmngr/query";
import * as _145 from "./nftmngr/schema_attribute";
import * as _146 from "./nftmngr/tx";
import * as _147 from "./nftmngr/virtual_action";
import * as _148 from "./nftmngr/virtual_schema";
import * as _149 from "./nftoracle/action_request";
import * as _150 from "./nftoracle/action_signature";
import * as _151 from "./nftoracle/action_signer_config";
import * as _152 from "./nftoracle/action_signer";
import * as _153 from "./nftoracle/binded_signer";
import * as _154 from "./nftoracle/collection_owner_request";
import * as _155 from "./nftoracle/collection_owner_signature";
import * as _156 from "./nftoracle/genesis";
import * as _157 from "./nftoracle/mint_request";
import * as _158 from "./nftoracle/opensea";
import * as _159 from "./nftoracle/oracle_config";
import * as _160 from "./nftoracle/params";
import * as _161 from "./nftoracle/query";
import * as _162 from "./nftoracle/request";
import * as _163 from "./nftoracle/sync_action_signer";
import * as _164 from "./nftoracle/tx";
import * as _165 from "./protocoladmin/admin";
import * as _166 from "./protocoladmin/genesis";
import * as _167 from "./protocoladmin/group";
import * as _168 from "./protocoladmin/params";
import * as _169 from "./protocoladmin/query";
import * as _170 from "./protocoladmin/tx";
import * as _171 from "./tokenmngr/burn";
import * as _172 from "./tokenmngr/genesis";
import * as _173 from "./tokenmngr/mintperm";
import * as _174 from "./tokenmngr/options";
import * as _175 from "./tokenmngr/params";
import * as _176 from "./tokenmngr/query";
import * as _177 from "./tokenmngr/token_burn";
import * as _178 from "./tokenmngr/token";
import * as _179 from "./tokenmngr/tx";
import * as _254 from "./nftadmin/tx.amino";
import * as _255 from "./nftmngr/tx.amino";
import * as _256 from "./nftoracle/tx.amino";
import * as _257 from "./protocoladmin/tx.amino";
import * as _258 from "./tokenmngr/tx.amino";
import * as _259 from "./nftadmin/tx.registry";
import * as _260 from "./nftmngr/tx.registry";
import * as _261 from "./nftoracle/tx.registry";
import * as _262 from "./protocoladmin/tx.registry";
import * as _263 from "./tokenmngr/tx.registry";
import * as _264 from "./nftadmin/query.rpc.Query";
import * as _265 from "./nftmngr/query.rpc.Query";
import * as _266 from "./nftoracle/query.rpc.Query";
import * as _267 from "./protocoladmin/query.rpc.Query";
import * as _268 from "./tokenmngr/query.rpc.Query";
import * as _269 from "./nftadmin/tx.rpc.msg";
import * as _270 from "./nftmngr/tx.rpc.msg";
import * as _271 from "./nftoracle/tx.rpc.msg";
import * as _272 from "./protocoladmin/tx.rpc.msg";
import * as _273 from "./tokenmngr/tx.rpc.msg";
import * as _278 from "./rpc.query";
import * as _279 from "./rpc.tx";
export namespace sixprotocol {
  export const nftadmin = {
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._254,
    ..._259,
    ..._264,
    ..._269
  };
  export const nftmngr = {
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
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._255,
    ..._260,
    ..._265,
    ..._270
  };
  export const nftoracle = {
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._256,
    ..._261,
    ..._266,
    ..._271
  };
  export const protocoladmin = {
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._257,
    ..._262,
    ..._267,
    ..._272
  };
  export const tokenmngr = {
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._258,
    ..._263,
    ..._268,
    ..._273
  };
  export const ClientFactory = {
    ..._278,
    ..._279
  };
}