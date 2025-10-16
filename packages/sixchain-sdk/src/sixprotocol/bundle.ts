//@ts-nocheck
import * as _130 from "./nftadmin/authorization";
import * as _131 from "./nftadmin/genesis";
import * as _132 from "./nftadmin/params";
import * as _133 from "./nftadmin/permissions";
import * as _134 from "./nftadmin/query";
import * as _135 from "./nftadmin/tx";
import * as _136 from "./nftmngr/action_by_ref_id";
import * as _137 from "./nftmngr/action_executor";
import * as _138 from "./nftmngr/action_of_schema";
import * as _139 from "./nftmngr/action";
import * as _140 from "./nftmngr/attribute_definition";
import * as _141 from "./nftmngr/attribute_of_schema";
import * as _142 from "./nftmngr/display_option";
import * as _143 from "./nftmngr/executor_of_schema";
import * as _144 from "./nftmngr/genesis";
import * as _145 from "./nftmngr/lock_schema_fee";
import * as _146 from "./nftmngr/metadata_creator";
import * as _147 from "./nftmngr/nft_attribute_value";
import * as _148 from "./nftmngr/nft_collection";
import * as _149 from "./nftmngr/nft_data";
import * as _150 from "./nftmngr/nft_fee_balance";
import * as _151 from "./nftmngr/nft_fee_config";
import * as _152 from "./nftmngr/nft_schema_by_contract";
import * as _153 from "./nftmngr/nft_schema";
import * as _154 from "./nftmngr/on_chain_data";
import * as _155 from "./nftmngr/opensea_display_option";
import * as _156 from "./nftmngr/organization";
import * as _157 from "./nftmngr/origin_data";
import * as _158 from "./nftmngr/params";
import * as _159 from "./nftmngr/query";
import * as _160 from "./nftmngr/schema_attribute";
import * as _161 from "./nftmngr/tx";
import * as _162 from "./nftmngr/virtual_action";
import * as _163 from "./nftmngr/virtual_schema";
import * as _164 from "./nftoracle/action_request";
import * as _165 from "./nftoracle/action_signature";
import * as _166 from "./nftoracle/action_signer_config";
import * as _167 from "./nftoracle/action_signer";
import * as _168 from "./nftoracle/binded_signer";
import * as _169 from "./nftoracle/collection_owner_request";
import * as _170 from "./nftoracle/collection_owner_signature";
import * as _171 from "./nftoracle/genesis";
import * as _172 from "./nftoracle/mint_request";
import * as _173 from "./nftoracle/opensea";
import * as _174 from "./nftoracle/oracle_config";
import * as _175 from "./nftoracle/params";
import * as _176 from "./nftoracle/query";
import * as _177 from "./nftoracle/request";
import * as _178 from "./nftoracle/sync_action_signer";
import * as _179 from "./nftoracle/tx";
import * as _180 from "./protocoladmin/admin";
import * as _181 from "./protocoladmin/genesis";
import * as _182 from "./protocoladmin/group";
import * as _183 from "./protocoladmin/params";
import * as _184 from "./protocoladmin/query";
import * as _185 from "./protocoladmin/tx";
import * as _186 from "./tokenmngr/burn";
import * as _187 from "./tokenmngr/genesis";
import * as _188 from "./tokenmngr/mintperm";
import * as _189 from "./tokenmngr/options";
import * as _190 from "./tokenmngr/params";
import * as _191 from "./tokenmngr/query";
import * as _192 from "./tokenmngr/token_burn";
import * as _193 from "./tokenmngr/token";
import * as _194 from "./tokenmngr/tx";
import * as _277 from "./nftadmin/tx.amino";
import * as _278 from "./nftmngr/tx.amino";
import * as _279 from "./nftoracle/tx.amino";
import * as _280 from "./protocoladmin/tx.amino";
import * as _281 from "./tokenmngr/tx.amino";
import * as _282 from "./nftadmin/tx.registry";
import * as _283 from "./nftmngr/tx.registry";
import * as _284 from "./nftoracle/tx.registry";
import * as _285 from "./protocoladmin/tx.registry";
import * as _286 from "./tokenmngr/tx.registry";
import * as _287 from "./nftadmin/query.rpc.Query";
import * as _288 from "./nftmngr/query.rpc.Query";
import * as _289 from "./nftoracle/query.rpc.Query";
import * as _290 from "./protocoladmin/query.rpc.Query";
import * as _291 from "./tokenmngr/query.rpc.Query";
import * as _292 from "./nftadmin/tx.rpc.msg";
import * as _293 from "./nftmngr/tx.rpc.msg";
import * as _294 from "./nftoracle/tx.rpc.msg";
import * as _295 from "./protocoladmin/tx.rpc.msg";
import * as _296 from "./tokenmngr/tx.rpc.msg";
import * as _303 from "./rpc.query";
import * as _304 from "./rpc.tx";
export namespace sixprotocol {
  export const nftadmin = {
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._277,
    ..._282,
    ..._287,
    ..._292,
  };
  export const nftmngr = {
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
    ..._278,
    ..._283,
    ..._288,
    ..._293,
  };
  export const nftoracle = {
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._279,
    ..._284,
    ..._289,
    ..._294,
  };
  export const protocoladmin = {
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._280,
    ..._285,
    ..._290,
    ..._295,
  };
  export const tokenmngr = {
    ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._281,
    ..._286,
    ..._291,
    ..._296,
  };
  export const ClientFactory = {
    ..._303,
    ..._304,
  };
}
