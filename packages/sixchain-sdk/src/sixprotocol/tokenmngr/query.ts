//@ts-nocheck
import {
  PageRequest,
  PageRequestAmino,
  PageRequestSDKType,
  PageResponse,
  PageResponseAmino,
  PageResponseSDKType,
} from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Token, TokenAmino, TokenSDKType } from "./token";
import { Mintperm, MintpermAmino, MintpermSDKType } from "./mintperm";
import { TokenBurn, TokenBurnAmino, TokenBurnSDKType } from "./token_burn";
import { Options, OptionsAmino, OptionsSDKType } from "./options";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetTokenRequest {
  name: string;
}
export interface QueryGetTokenRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetTokenRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetTokenRequest
 */
export interface QueryGetTokenRequestAmino {
  name?: string;
}
export interface QueryGetTokenRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetTokenRequest";
  value: QueryGetTokenRequestAmino;
}
export interface QueryGetTokenRequestSDKType {
  name: string;
}
export interface QueryGetTokenResponse {
  token: Token;
}
export interface QueryGetTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetTokenResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetTokenResponse
 */
export interface QueryGetTokenResponseAmino {
  token?: TokenAmino;
}
export interface QueryGetTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetTokenResponse";
  value: QueryGetTokenResponseAmino;
}
export interface QueryGetTokenResponseSDKType {
  token: TokenSDKType;
}
export interface QueryAllTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllTokenRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllTokenRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryAllTokenRequest
 */
export interface QueryAllTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryAllTokenRequest";
  value: QueryAllTokenRequestAmino;
}
export interface QueryAllTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllTokenResponse {
  token: Token[];
  pagination?: PageResponse;
}
export interface QueryAllTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllTokenResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryAllTokenResponse
 */
export interface QueryAllTokenResponseAmino {
  token?: TokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryAllTokenResponse";
  value: QueryAllTokenResponseAmino;
}
export interface QueryAllTokenResponseSDKType {
  token: TokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetMintpermRequest {
  token: string;
  address: string;
}
export interface QueryGetMintpermRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetMintpermRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetMintpermRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetMintpermRequest
 */
export interface QueryGetMintpermRequestAmino {
  token?: string;
  address?: string;
}
export interface QueryGetMintpermRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetMintpermRequest";
  value: QueryGetMintpermRequestAmino;
}
export interface QueryGetMintpermRequestSDKType {
  token: string;
  address: string;
}
export interface QueryGetMintpermResponse {
  mintperm: Mintperm;
}
export interface QueryGetMintpermResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetMintpermResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetMintpermResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetMintpermResponse
 */
export interface QueryGetMintpermResponseAmino {
  mintperm?: MintpermAmino;
}
export interface QueryGetMintpermResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetMintpermResponse";
  value: QueryGetMintpermResponseAmino;
}
export interface QueryGetMintpermResponseSDKType {
  mintperm: MintpermSDKType;
}
export interface QueryAllMintpermRequest {
  pagination?: PageRequest;
}
export interface QueryAllMintpermRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllMintpermRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllMintpermRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryAllMintpermRequest
 */
export interface QueryAllMintpermRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMintpermRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryAllMintpermRequest";
  value: QueryAllMintpermRequestAmino;
}
export interface QueryAllMintpermRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMintpermResponse {
  mintperm: Mintperm[];
  pagination?: PageResponse;
}
export interface QueryAllMintpermResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllMintpermResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllMintpermResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryAllMintpermResponse
 */
export interface QueryAllMintpermResponseAmino {
  mintperm?: MintpermAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMintpermResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryAllMintpermResponse";
  value: QueryAllMintpermResponseAmino;
}
export interface QueryAllMintpermResponseSDKType {
  mintperm: MintpermSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetTokenBurnRequest {
  index: string;
}
export interface QueryGetTokenBurnRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenBurnRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetTokenBurnRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetTokenBurnRequest
 */
export interface QueryGetTokenBurnRequestAmino {
  index?: string;
}
export interface QueryGetTokenBurnRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetTokenBurnRequest";
  value: QueryGetTokenBurnRequestAmino;
}
export interface QueryGetTokenBurnRequestSDKType {
  index: string;
}
export interface QueryGetTokenBurnResponse {
  tokenBurn: TokenBurn;
}
export interface QueryGetTokenBurnResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenBurnResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetTokenBurnResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetTokenBurnResponse
 */
export interface QueryGetTokenBurnResponseAmino {
  tokenBurn?: TokenBurnAmino;
}
export interface QueryGetTokenBurnResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetTokenBurnResponse";
  value: QueryGetTokenBurnResponseAmino;
}
export interface QueryGetTokenBurnResponseSDKType {
  tokenBurn: TokenBurnSDKType;
}
export interface QueryAllTokenBurnRequest {
  pagination?: PageRequest;
}
export interface QueryAllTokenBurnRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenBurnRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllTokenBurnRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryAllTokenBurnRequest
 */
export interface QueryAllTokenBurnRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenBurnRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryAllTokenBurnRequest";
  value: QueryAllTokenBurnRequestAmino;
}
export interface QueryAllTokenBurnRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllTokenBurnResponse {
  tokenBurn: TokenBurn[];
  pagination?: PageResponse;
}
export interface QueryAllTokenBurnResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenBurnResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllTokenBurnResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryAllTokenBurnResponse
 */
export interface QueryAllTokenBurnResponseAmino {
  tokenBurn?: TokenBurnAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenBurnResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryAllTokenBurnResponse";
  value: QueryAllTokenBurnResponseAmino;
}
export interface QueryAllTokenBurnResponseSDKType {
  tokenBurn: TokenBurnSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOptionsRequest {}
export interface QueryGetOptionsRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetOptionsRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetOptionsRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetOptionsRequest
 */
export interface QueryGetOptionsRequestAmino {}
export interface QueryGetOptionsRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetOptionsRequest";
  value: QueryGetOptionsRequestAmino;
}
export interface QueryGetOptionsRequestSDKType {}
export interface QueryGetOptionsResponse {
  options: Options;
}
export interface QueryGetOptionsResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetOptionsResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetOptionsResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryGetOptionsResponse
 */
export interface QueryGetOptionsResponseAmino {
  Options?: OptionsAmino;
}
export interface QueryGetOptionsResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryGetOptionsResponse";
  value: QueryGetOptionsResponseAmino;
}
export interface QueryGetOptionsResponseSDKType {
  Options: OptionsSDKType;
}
export interface QueryListPrecompileRequest {}
export interface QueryListPrecompileRequestProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryListPrecompileRequest";
  value: Uint8Array;
}
/**
 * @name QueryListPrecompileRequestAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryListPrecompileRequest
 */
export interface QueryListPrecompileRequestAmino {}
export interface QueryListPrecompileRequestAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryListPrecompileRequest";
  value: QueryListPrecompileRequestAmino;
}
export interface QueryListPrecompileRequestSDKType {}
export interface QueryListPrecompileResponse {
  precompiles: string[];
  pagination?: PageResponse;
}
export interface QueryListPrecompileResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.QueryListPrecompileResponse";
  value: Uint8Array;
}
/**
 * @name QueryListPrecompileResponseAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.QueryListPrecompileResponse
 */
export interface QueryListPrecompileResponseAmino {
  precompiles?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryListPrecompileResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.QueryListPrecompileResponse";
  value: QueryListPrecompileResponseAmino;
}
export interface QueryListPrecompileResponseSDKType {
  precompiles: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryParamsRequest",
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryParamsResponse",
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params
      ? Params.toAmino(message.params)
      : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryGetTokenRequest(): QueryGetTokenRequest {
  return {
    name: "",
  };
}
export const QueryGetTokenRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenRequest",
  encode(
    message: QueryGetTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTokenRequest>): QueryGetTokenRequest {
    const message = createBaseQueryGetTokenRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetTokenRequestAmino): QueryGetTokenRequest {
    const message = createBaseQueryGetTokenRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetTokenRequest): QueryGetTokenRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetTokenRequestAminoMsg): QueryGetTokenRequest {
    return QueryGetTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTokenRequestProtoMsg): QueryGetTokenRequest {
    return QueryGetTokenRequest.decode(message.value);
  },
  toProto(message: QueryGetTokenRequest): Uint8Array {
    return QueryGetTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTokenRequest): QueryGetTokenRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenRequest",
      value: QueryGetTokenRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryGetTokenResponse(): QueryGetTokenResponse {
  return {
    token: Token.fromPartial({}),
  };
}
export const QueryGetTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenResponse",
  encode(
    message: QueryGetTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTokenResponse>): QueryGetTokenResponse {
    const message = createBaseQueryGetTokenResponse();
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    return message;
  },
  fromAmino(object: QueryGetTokenResponseAmino): QueryGetTokenResponse {
    const message = createBaseQueryGetTokenResponse();
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: QueryGetTokenResponse): QueryGetTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTokenResponseAminoMsg): QueryGetTokenResponse {
    return QueryGetTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTokenResponseProtoMsg): QueryGetTokenResponse {
    return QueryGetTokenResponse.decode(message.value);
  },
  toProto(message: QueryGetTokenResponse): Uint8Array {
    return QueryGetTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTokenResponse): QueryGetTokenResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenResponse",
      value: QueryGetTokenResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAllTokenRequest(): QueryAllTokenRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllTokenRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenRequest",
  encode(
    message: QueryAllTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenRequest>): QueryAllTokenRequest {
    const message = createBaseQueryAllTokenRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenRequestAmino): QueryAllTokenRequest {
    const message = createBaseQueryAllTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenRequest): QueryAllTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenRequestAminoMsg): QueryAllTokenRequest {
    return QueryAllTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenRequestProtoMsg): QueryAllTokenRequest {
    return QueryAllTokenRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenRequest): Uint8Array {
    return QueryAllTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenRequest): QueryAllTokenRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenRequest",
      value: QueryAllTokenRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAllTokenResponse(): QueryAllTokenResponse {
  return {
    token: [],
    pagination: undefined,
  };
}
export const QueryAllTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenResponse",
  encode(
    message: QueryAllTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.token) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token.push(Token.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenResponse>): QueryAllTokenResponse {
    const message = createBaseQueryAllTokenResponse();
    message.token = object.token?.map((e) => Token.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenResponseAmino): QueryAllTokenResponse {
    const message = createBaseQueryAllTokenResponse();
    message.token = object.token?.map((e) => Token.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenResponse): QueryAllTokenResponseAmino {
    const obj: any = {};
    if (message.token) {
      obj.token = message.token.map((e) => (e ? Token.toAmino(e) : undefined));
    } else {
      obj.token = message.token;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenResponseAminoMsg): QueryAllTokenResponse {
    return QueryAllTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenResponseProtoMsg): QueryAllTokenResponse {
    return QueryAllTokenResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenResponse): Uint8Array {
    return QueryAllTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenResponse): QueryAllTokenResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenResponse",
      value: QueryAllTokenResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryGetMintpermRequest(): QueryGetMintpermRequest {
  return {
    token: "",
    address: "",
  };
}
export const QueryGetMintpermRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetMintpermRequest",
  encode(
    message: QueryGetMintpermRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMintpermRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintpermRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGetMintpermRequest>
  ): QueryGetMintpermRequest {
    const message = createBaseQueryGetMintpermRequest();
    message.token = object.token ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetMintpermRequestAmino): QueryGetMintpermRequest {
    const message = createBaseQueryGetMintpermRequest();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetMintpermRequest): QueryGetMintpermRequestAmino {
    const obj: any = {};
    obj.token = message.token === "" ? undefined : message.token;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(
    object: QueryGetMintpermRequestAminoMsg
  ): QueryGetMintpermRequest {
    return QueryGetMintpermRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGetMintpermRequestProtoMsg
  ): QueryGetMintpermRequest {
    return QueryGetMintpermRequest.decode(message.value);
  },
  toProto(message: QueryGetMintpermRequest): Uint8Array {
    return QueryGetMintpermRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGetMintpermRequest
  ): QueryGetMintpermRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetMintpermRequest",
      value: QueryGetMintpermRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryGetMintpermResponse(): QueryGetMintpermResponse {
  return {
    mintperm: Mintperm.fromPartial({}),
  };
}
export const QueryGetMintpermResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetMintpermResponse",
  encode(
    message: QueryGetMintpermResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintperm !== undefined) {
      Mintperm.encode(message.mintperm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintpermResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintperm = Mintperm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGetMintpermResponse>
  ): QueryGetMintpermResponse {
    const message = createBaseQueryGetMintpermResponse();
    message.mintperm =
      object.mintperm !== undefined && object.mintperm !== null
        ? Mintperm.fromPartial(object.mintperm)
        : undefined;
    return message;
  },
  fromAmino(object: QueryGetMintpermResponseAmino): QueryGetMintpermResponse {
    const message = createBaseQueryGetMintpermResponse();
    if (object.mintperm !== undefined && object.mintperm !== null) {
      message.mintperm = Mintperm.fromAmino(object.mintperm);
    }
    return message;
  },
  toAmino(message: QueryGetMintpermResponse): QueryGetMintpermResponseAmino {
    const obj: any = {};
    obj.mintperm = message.mintperm
      ? Mintperm.toAmino(message.mintperm)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryGetMintpermResponseAminoMsg
  ): QueryGetMintpermResponse {
    return QueryGetMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGetMintpermResponseProtoMsg
  ): QueryGetMintpermResponse {
    return QueryGetMintpermResponse.decode(message.value);
  },
  toProto(message: QueryGetMintpermResponse): Uint8Array {
    return QueryGetMintpermResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGetMintpermResponse
  ): QueryGetMintpermResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetMintpermResponse",
      value: QueryGetMintpermResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAllMintpermRequest(): QueryAllMintpermRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllMintpermRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllMintpermRequest",
  encode(
    message: QueryAllMintpermRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMintpermRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintpermRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryAllMintpermRequest>
  ): QueryAllMintpermRequest {
    const message = createBaseQueryAllMintpermRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintpermRequestAmino): QueryAllMintpermRequest {
    const message = createBaseQueryAllMintpermRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintpermRequest): QueryAllMintpermRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAllMintpermRequestAminoMsg
  ): QueryAllMintpermRequest {
    return QueryAllMintpermRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAllMintpermRequestProtoMsg
  ): QueryAllMintpermRequest {
    return QueryAllMintpermRequest.decode(message.value);
  },
  toProto(message: QueryAllMintpermRequest): Uint8Array {
    return QueryAllMintpermRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAllMintpermRequest
  ): QueryAllMintpermRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryAllMintpermRequest",
      value: QueryAllMintpermRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAllMintpermResponse(): QueryAllMintpermResponse {
  return {
    mintperm: [],
    pagination: undefined,
  };
}
export const QueryAllMintpermResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllMintpermResponse",
  encode(
    message: QueryAllMintpermResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mintperm) {
      Mintperm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintpermResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintperm.push(Mintperm.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryAllMintpermResponse>
  ): QueryAllMintpermResponse {
    const message = createBaseQueryAllMintpermResponse();
    message.mintperm =
      object.mintperm?.map((e) => Mintperm.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintpermResponseAmino): QueryAllMintpermResponse {
    const message = createBaseQueryAllMintpermResponse();
    message.mintperm = object.mintperm?.map((e) => Mintperm.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintpermResponse): QueryAllMintpermResponseAmino {
    const obj: any = {};
    if (message.mintperm) {
      obj.mintperm = message.mintperm.map((e) =>
        e ? Mintperm.toAmino(e) : undefined
      );
    } else {
      obj.mintperm = message.mintperm;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAllMintpermResponseAminoMsg
  ): QueryAllMintpermResponse {
    return QueryAllMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAllMintpermResponseProtoMsg
  ): QueryAllMintpermResponse {
    return QueryAllMintpermResponse.decode(message.value);
  },
  toProto(message: QueryAllMintpermResponse): Uint8Array {
    return QueryAllMintpermResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAllMintpermResponse
  ): QueryAllMintpermResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryAllMintpermResponse",
      value: QueryAllMintpermResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryGetTokenBurnRequest(): QueryGetTokenBurnRequest {
  return {
    index: "",
  };
}
export const QueryGetTokenBurnRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenBurnRequest",
  encode(
    message: QueryGetTokenBurnRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenBurnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenBurnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGetTokenBurnRequest>
  ): QueryGetTokenBurnRequest {
    const message = createBaseQueryGetTokenBurnRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetTokenBurnRequestAmino): QueryGetTokenBurnRequest {
    const message = createBaseQueryGetTokenBurnRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetTokenBurnRequest): QueryGetTokenBurnRequestAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(
    object: QueryGetTokenBurnRequestAminoMsg
  ): QueryGetTokenBurnRequest {
    return QueryGetTokenBurnRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGetTokenBurnRequestProtoMsg
  ): QueryGetTokenBurnRequest {
    return QueryGetTokenBurnRequest.decode(message.value);
  },
  toProto(message: QueryGetTokenBurnRequest): Uint8Array {
    return QueryGetTokenBurnRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGetTokenBurnRequest
  ): QueryGetTokenBurnRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenBurnRequest",
      value: QueryGetTokenBurnRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryGetTokenBurnResponse(): QueryGetTokenBurnResponse {
  return {
    tokenBurn: TokenBurn.fromPartial({}),
  };
}
export const QueryGetTokenBurnResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenBurnResponse",
  encode(
    message: QueryGetTokenBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenBurn !== undefined) {
      TokenBurn.encode(message.tokenBurn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenBurn = TokenBurn.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGetTokenBurnResponse>
  ): QueryGetTokenBurnResponse {
    const message = createBaseQueryGetTokenBurnResponse();
    message.tokenBurn =
      object.tokenBurn !== undefined && object.tokenBurn !== null
        ? TokenBurn.fromPartial(object.tokenBurn)
        : undefined;
    return message;
  },
  fromAmino(object: QueryGetTokenBurnResponseAmino): QueryGetTokenBurnResponse {
    const message = createBaseQueryGetTokenBurnResponse();
    if (object.tokenBurn !== undefined && object.tokenBurn !== null) {
      message.tokenBurn = TokenBurn.fromAmino(object.tokenBurn);
    }
    return message;
  },
  toAmino(message: QueryGetTokenBurnResponse): QueryGetTokenBurnResponseAmino {
    const obj: any = {};
    obj.tokenBurn = message.tokenBurn
      ? TokenBurn.toAmino(message.tokenBurn)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryGetTokenBurnResponseAminoMsg
  ): QueryGetTokenBurnResponse {
    return QueryGetTokenBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGetTokenBurnResponseProtoMsg
  ): QueryGetTokenBurnResponse {
    return QueryGetTokenBurnResponse.decode(message.value);
  },
  toProto(message: QueryGetTokenBurnResponse): Uint8Array {
    return QueryGetTokenBurnResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGetTokenBurnResponse
  ): QueryGetTokenBurnResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetTokenBurnResponse",
      value: QueryGetTokenBurnResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAllTokenBurnRequest(): QueryAllTokenBurnRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllTokenBurnRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenBurnRequest",
  encode(
    message: QueryAllTokenBurnRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenBurnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenBurnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryAllTokenBurnRequest>
  ): QueryAllTokenBurnRequest {
    const message = createBaseQueryAllTokenBurnRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenBurnRequestAmino): QueryAllTokenBurnRequest {
    const message = createBaseQueryAllTokenBurnRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenBurnRequest): QueryAllTokenBurnRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAllTokenBurnRequestAminoMsg
  ): QueryAllTokenBurnRequest {
    return QueryAllTokenBurnRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAllTokenBurnRequestProtoMsg
  ): QueryAllTokenBurnRequest {
    return QueryAllTokenBurnRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenBurnRequest): Uint8Array {
    return QueryAllTokenBurnRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAllTokenBurnRequest
  ): QueryAllTokenBurnRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenBurnRequest",
      value: QueryAllTokenBurnRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAllTokenBurnResponse(): QueryAllTokenBurnResponse {
  return {
    tokenBurn: [],
    pagination: undefined,
  };
}
export const QueryAllTokenBurnResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenBurnResponse",
  encode(
    message: QueryAllTokenBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenBurn) {
      TokenBurn.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenBurn.push(TokenBurn.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryAllTokenBurnResponse>
  ): QueryAllTokenBurnResponse {
    const message = createBaseQueryAllTokenBurnResponse();
    message.tokenBurn =
      object.tokenBurn?.map((e) => TokenBurn.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenBurnResponseAmino): QueryAllTokenBurnResponse {
    const message = createBaseQueryAllTokenBurnResponse();
    message.tokenBurn =
      object.tokenBurn?.map((e) => TokenBurn.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenBurnResponse): QueryAllTokenBurnResponseAmino {
    const obj: any = {};
    if (message.tokenBurn) {
      obj.tokenBurn = message.tokenBurn.map((e) =>
        e ? TokenBurn.toAmino(e) : undefined
      );
    } else {
      obj.tokenBurn = message.tokenBurn;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAllTokenBurnResponseAminoMsg
  ): QueryAllTokenBurnResponse {
    return QueryAllTokenBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAllTokenBurnResponseProtoMsg
  ): QueryAllTokenBurnResponse {
    return QueryAllTokenBurnResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenBurnResponse): Uint8Array {
    return QueryAllTokenBurnResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAllTokenBurnResponse
  ): QueryAllTokenBurnResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryAllTokenBurnResponse",
      value: QueryAllTokenBurnResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryGetOptionsRequest(): QueryGetOptionsRequest {
  return {};
}
export const QueryGetOptionsRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetOptionsRequest",
  encode(
    _: QueryGetOptionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryGetOptionsRequest>): QueryGetOptionsRequest {
    const message = createBaseQueryGetOptionsRequest();
    return message;
  },
  fromAmino(_: QueryGetOptionsRequestAmino): QueryGetOptionsRequest {
    const message = createBaseQueryGetOptionsRequest();
    return message;
  },
  toAmino(_: QueryGetOptionsRequest): QueryGetOptionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetOptionsRequestAminoMsg): QueryGetOptionsRequest {
    return QueryGetOptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGetOptionsRequestProtoMsg
  ): QueryGetOptionsRequest {
    return QueryGetOptionsRequest.decode(message.value);
  },
  toProto(message: QueryGetOptionsRequest): Uint8Array {
    return QueryGetOptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOptionsRequest): QueryGetOptionsRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetOptionsRequest",
      value: QueryGetOptionsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryGetOptionsResponse(): QueryGetOptionsResponse {
  return {
    options: Options.fromPartial({}),
  };
}
export const QueryGetOptionsResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryGetOptionsResponse",
  encode(
    message: QueryGetOptionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGetOptionsResponse>
  ): QueryGetOptionsResponse {
    const message = createBaseQueryGetOptionsResponse();
    message.options =
      object.options !== undefined && object.options !== null
        ? Options.fromPartial(object.options)
        : undefined;
    return message;
  },
  fromAmino(object: QueryGetOptionsResponseAmino): QueryGetOptionsResponse {
    const message = createBaseQueryGetOptionsResponse();
    if (object.Options !== undefined && object.Options !== null) {
      message.options = Options.fromAmino(object.Options);
    }
    return message;
  },
  toAmino(message: QueryGetOptionsResponse): QueryGetOptionsResponseAmino {
    const obj: any = {};
    obj.Options = message.options
      ? Options.toAmino(message.options)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryGetOptionsResponseAminoMsg
  ): QueryGetOptionsResponse {
    return QueryGetOptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGetOptionsResponseProtoMsg
  ): QueryGetOptionsResponse {
    return QueryGetOptionsResponse.decode(message.value);
  },
  toProto(message: QueryGetOptionsResponse): Uint8Array {
    return QueryGetOptionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGetOptionsResponse
  ): QueryGetOptionsResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryGetOptionsResponse",
      value: QueryGetOptionsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryListPrecompileRequest(): QueryListPrecompileRequest {
  return {};
}
export const QueryListPrecompileRequest = {
  typeUrl: "/sixprotocol.tokenmngr.QueryListPrecompileRequest",
  encode(
    _: QueryListPrecompileRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListPrecompileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrecompileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<QueryListPrecompileRequest>
  ): QueryListPrecompileRequest {
    const message = createBaseQueryListPrecompileRequest();
    return message;
  },
  fromAmino(_: QueryListPrecompileRequestAmino): QueryListPrecompileRequest {
    const message = createBaseQueryListPrecompileRequest();
    return message;
  },
  toAmino(_: QueryListPrecompileRequest): QueryListPrecompileRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryListPrecompileRequestAminoMsg
  ): QueryListPrecompileRequest {
    return QueryListPrecompileRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryListPrecompileRequestProtoMsg
  ): QueryListPrecompileRequest {
    return QueryListPrecompileRequest.decode(message.value);
  },
  toProto(message: QueryListPrecompileRequest): Uint8Array {
    return QueryListPrecompileRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryListPrecompileRequest
  ): QueryListPrecompileRequestProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryListPrecompileRequest",
      value: QueryListPrecompileRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryListPrecompileResponse(): QueryListPrecompileResponse {
  return {
    precompiles: [],
    pagination: undefined,
  };
}
export const QueryListPrecompileResponse = {
  typeUrl: "/sixprotocol.tokenmngr.QueryListPrecompileResponse",
  encode(
    message: QueryListPrecompileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.precompiles) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryListPrecompileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrecompileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.precompiles.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryListPrecompileResponse>
  ): QueryListPrecompileResponse {
    const message = createBaseQueryListPrecompileResponse();
    message.precompiles = object.precompiles?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryListPrecompileResponseAmino
  ): QueryListPrecompileResponse {
    const message = createBaseQueryListPrecompileResponse();
    message.precompiles = object.precompiles?.map((e) => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(
    message: QueryListPrecompileResponse
  ): QueryListPrecompileResponseAmino {
    const obj: any = {};
    if (message.precompiles) {
      obj.precompiles = message.precompiles.map((e) => e);
    } else {
      obj.precompiles = message.precompiles;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryListPrecompileResponseAminoMsg
  ): QueryListPrecompileResponse {
    return QueryListPrecompileResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryListPrecompileResponseProtoMsg
  ): QueryListPrecompileResponse {
    return QueryListPrecompileResponse.decode(message.value);
  },
  toProto(message: QueryListPrecompileResponse): Uint8Array {
    return QueryListPrecompileResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryListPrecompileResponse
  ): QueryListPrecompileResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.QueryListPrecompileResponse",
      value: QueryListPrecompileResponse.encode(message).finish(),
    };
  },
};
