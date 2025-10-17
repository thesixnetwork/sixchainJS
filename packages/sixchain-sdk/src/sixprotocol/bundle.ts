//@ts-nocheck
import * as _171 from "./nftadmin/authorization";
import * as _172 from "./nftadmin/genesis";
import * as _173 from "./nftadmin/params";
import * as _174 from "./nftadmin/permissions";
import * as _175 from "./nftadmin/query";
import * as _176 from "./nftadmin/tx";
import * as _177 from "./nftmngr/action_by_ref_id";
import * as _178 from "./nftmngr/action_executor";
import * as _179 from "./nftmngr/action_of_schema";
import * as _180 from "./nftmngr/action";
import * as _181 from "./nftmngr/attribute_definition";
import * as _182 from "./nftmngr/attribute_of_schema";
import * as _183 from "./nftmngr/display_option";
import * as _184 from "./nftmngr/executor_of_schema";
import * as _185 from "./nftmngr/genesis";
import * as _186 from "./nftmngr/lock_schema_fee";
import * as _187 from "./nftmngr/metadata_creator";
import * as _188 from "./nftmngr/nft_attribute_value";
import * as _189 from "./nftmngr/nft_collection";
import * as _190 from "./nftmngr/nft_data";
import * as _191 from "./nftmngr/nft_fee_balance";
import * as _192 from "./nftmngr/nft_fee_config";
import * as _193 from "./nftmngr/nft_schema_by_contract";
import * as _194 from "./nftmngr/nft_schema";
import * as _195 from "./nftmngr/on_chain_data";
import * as _196 from "./nftmngr/opensea_display_option";
import * as _197 from "./nftmngr/organization";
import * as _198 from "./nftmngr/origin_data";
import * as _199 from "./nftmngr/params";
import * as _200 from "./nftmngr/query";
import * as _201 from "./nftmngr/schema_attribute";
import * as _202 from "./nftmngr/tx";
import * as _203 from "./nftmngr/virtual_action";
import * as _204 from "./nftmngr/virtual_schema";
import * as _205 from "./nftoracle/action_request";
import * as _206 from "./nftoracle/action_signature";
import * as _207 from "./nftoracle/action_signer_config";
import * as _208 from "./nftoracle/action_signer";
import * as _209 from "./nftoracle/binded_signer";
import * as _210 from "./nftoracle/collection_owner_request";
import * as _211 from "./nftoracle/collection_owner_signature";
import * as _212 from "./nftoracle/genesis";
import * as _213 from "./nftoracle/mint_request";
import * as _214 from "./nftoracle/opensea";
import * as _215 from "./nftoracle/oracle_config";
import * as _216 from "./nftoracle/params";
import * as _217 from "./nftoracle/query";
import * as _218 from "./nftoracle/request";
import * as _219 from "./nftoracle/sync_action_signer";
import * as _220 from "./nftoracle/tx";
import * as _221 from "./protocoladmin/admin";
import * as _222 from "./protocoladmin/genesis";
import * as _223 from "./protocoladmin/group";
import * as _224 from "./protocoladmin/params";
import * as _225 from "./protocoladmin/query";
import * as _226 from "./protocoladmin/tx";
import * as _227 from "./tokenmngr/burn";
import * as _228 from "./tokenmngr/genesis";
import * as _229 from "./tokenmngr/mintperm";
import * as _230 from "./tokenmngr/options";
import * as _231 from "./tokenmngr/params";
import * as _232 from "./tokenmngr/query";
import * as _233 from "./tokenmngr/token_burn";
import * as _234 from "./tokenmngr/token";
import * as _235 from "./tokenmngr/tx";
import * as _346 from "./nftadmin/tx.amino";
import * as _347 from "./nftmngr/tx.amino";
import * as _348 from "./nftoracle/tx.amino";
import * as _349 from "./protocoladmin/tx.amino";
import * as _350 from "./tokenmngr/tx.amino";
import * as _351 from "./nftadmin/tx.registry";
import * as _352 from "./nftmngr/tx.registry";
import * as _353 from "./nftoracle/tx.registry";
import * as _354 from "./protocoladmin/tx.registry";
import * as _355 from "./tokenmngr/tx.registry";
import * as _356 from "./nftadmin/query.rpc.Query";
import * as _357 from "./nftmngr/query.rpc.Query";
import * as _358 from "./nftoracle/query.rpc.Query";
import * as _359 from "./protocoladmin/query.rpc.Query";
import * as _360 from "./tokenmngr/query.rpc.Query";
import * as _361 from "./nftadmin/tx.rpc.msg";
import * as _362 from "./nftmngr/tx.rpc.msg";
import * as _363 from "./nftoracle/tx.rpc.msg";
import * as _364 from "./protocoladmin/tx.rpc.msg";
import * as _365 from "./tokenmngr/tx.rpc.msg";
import * as _374 from "./rpc.query";
import * as _375 from "./rpc.tx";
export namespace sixprotocol {
  export const nftadmin = {
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._346,
    ..._351,
    ..._356,
    ..._361
  };
  export const nftmngr = {
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
    ..._204,
    ..._347,
    ..._352,
    ..._357,
    ..._362
  };
  export const nftoracle = {
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
    ..._220,
    ..._348,
    ..._353,
    ..._358,
    ..._363
  };
  export const protocoladmin = {
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._349,
    ..._354,
    ..._359,
    ..._364
  };
  export const tokenmngr = {
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._350,
    ..._355,
    ..._360,
    ..._365
  };
  export const ClientFactory = {
    ..._374,
    ..._375
  };
}