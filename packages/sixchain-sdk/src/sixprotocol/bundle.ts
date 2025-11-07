//@ts-nocheck
import * as _171 from "./nftadmin/authorization";
import * as _172 from "./nftadmin/genesis";
import * as _173 from "./nftadmin/params";
import * as _174 from "./nftadmin/query";
import * as _175 from "./nftadmin/tx";
import * as _176 from "./nftmngr/action_by_ref_id";
import * as _177 from "./nftmngr/action_executor";
import * as _178 from "./nftmngr/action_of_schema";
import * as _179 from "./nftmngr/action";
import * as _180 from "./nftmngr/attribute_definition";
import * as _181 from "./nftmngr/attribute_of_schema";
import * as _182 from "./nftmngr/display_option";
import * as _183 from "./nftmngr/executor_of_schema";
import * as _184 from "./nftmngr/genesis";
import * as _185 from "./nftmngr/lock_schema_fee";
import * as _186 from "./nftmngr/metadata_creator";
import * as _187 from "./nftmngr/nft_attribute_value";
import * as _188 from "./nftmngr/nft_collection";
import * as _189 from "./nftmngr/nft_data";
import * as _190 from "./nftmngr/nft_fee_balance";
import * as _191 from "./nftmngr/nft_fee_config";
import * as _192 from "./nftmngr/nft_schema_by_contract";
import * as _193 from "./nftmngr/nft_schema";
import * as _194 from "./nftmngr/on_chain_data";
import * as _195 from "./nftmngr/opensea_display_option";
import * as _196 from "./nftmngr/organization";
import * as _197 from "./nftmngr/origin_data";
import * as _198 from "./nftmngr/params";
import * as _199 from "./nftmngr/query";
import * as _200 from "./nftmngr/schema_attribute";
import * as _201 from "./nftmngr/tx";
import * as _202 from "./nftmngr/virtual_action";
import * as _203 from "./nftmngr/virtual_schema";
import * as _204 from "./nftoracle/action_request";
import * as _205 from "./nftoracle/action_signature";
import * as _206 from "./nftoracle/action_signer_config";
import * as _207 from "./nftoracle/action_signer";
import * as _208 from "./nftoracle/binded_signer";
import * as _209 from "./nftoracle/collection_owner_request";
import * as _210 from "./nftoracle/collection_owner_signature";
import * as _211 from "./nftoracle/genesis";
import * as _212 from "./nftoracle/mint_request";
import * as _213 from "./nftoracle/opensea";
import * as _214 from "./nftoracle/oracle_config";
import * as _215 from "./nftoracle/params";
import * as _216 from "./nftoracle/query";
import * as _217 from "./nftoracle/request";
import * as _218 from "./nftoracle/sync_action_signer";
import * as _219 from "./nftoracle/tx";
import * as _220 from "./protocoladmin/admin";
import * as _221 from "./protocoladmin/genesis";
import * as _222 from "./protocoladmin/group";
import * as _223 from "./protocoladmin/params";
import * as _224 from "./protocoladmin/query";
import * as _225 from "./protocoladmin/tx";
import * as _226 from "./tokenmngr/burn";
import * as _227 from "./tokenmngr/genesis";
import * as _228 from "./tokenmngr/mintperm";
import * as _229 from "./tokenmngr/options";
import * as _230 from "./tokenmngr/params";
import * as _231 from "./tokenmngr/query";
import * as _232 from "./tokenmngr/token_burn";
import * as _233 from "./tokenmngr/token";
import * as _234 from "./tokenmngr/tx";
import * as _345 from "./nftadmin/tx.amino";
import * as _346 from "./nftmngr/tx.amino";
import * as _347 from "./nftoracle/tx.amino";
import * as _348 from "./protocoladmin/tx.amino";
import * as _349 from "./tokenmngr/tx.amino";
import * as _350 from "./nftadmin/tx.registry";
import * as _351 from "./nftmngr/tx.registry";
import * as _352 from "./nftoracle/tx.registry";
import * as _353 from "./protocoladmin/tx.registry";
import * as _354 from "./tokenmngr/tx.registry";
import * as _355 from "./nftadmin/query.rpc.Query";
import * as _356 from "./nftmngr/query.rpc.Query";
import * as _357 from "./nftoracle/query.rpc.Query";
import * as _358 from "./protocoladmin/query.rpc.Query";
import * as _359 from "./tokenmngr/query.rpc.Query";
import * as _360 from "./nftadmin/tx.rpc.msg";
import * as _361 from "./nftmngr/tx.rpc.msg";
import * as _362 from "./nftoracle/tx.rpc.msg";
import * as _363 from "./protocoladmin/tx.rpc.msg";
import * as _364 from "./tokenmngr/tx.rpc.msg";
import * as _373 from "./rpc.query";
import * as _374 from "./rpc.tx";
export namespace sixprotocol {
  export const nftadmin = {
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._345,
    ..._350,
    ..._355,
    ..._360,
  };
  export const nftmngr = {
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._346,
    ..._351,
    ..._356,
    ..._361,
  };
  export const nftoracle = {
    ..._204,
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._347,
    ..._352,
    ..._357,
    ..._362,
  };
  export const protocoladmin = {
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._348,
    ..._353,
    ..._358,
    ..._363,
  };
  export const tokenmngr = {
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._349,
    ..._354,
    ..._359,
    ..._364,
  };
  export const ClientFactory = {
    ..._373,
    ..._374,
  };
}
