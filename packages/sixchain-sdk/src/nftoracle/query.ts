//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MintRequest, MintRequestAmino, MintRequestSDKType } from "./mint_request";
import { ActionRequest, ActionRequestAmino, ActionRequestSDKType } from "./action_request";
import { CollectionOwnerRequest, CollectionOwnerRequestAmino, CollectionOwnerRequestSDKType } from "./collection_owner_request";
import { OracleConfig, OracleConfigAmino, OracleConfigSDKType } from "./oracle_config";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryParamsRequest";
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
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetMintRequestRequest {
  id: Long;
}
export interface QueryGetMintRequestRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest";
  value: Uint8Array;
}
export interface QueryGetMintRequestRequestAmino {
  id?: string;
}
export interface QueryGetMintRequestRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest";
  value: QueryGetMintRequestRequestAmino;
}
export interface QueryGetMintRequestRequestSDKType {
  id: Long;
}
export interface QueryGetMintRequestResponse {
  mintRequest: MintRequest;
}
export interface QueryGetMintRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse";
  value: Uint8Array;
}
export interface QueryGetMintRequestResponseAmino {
  MintRequest?: MintRequestAmino;
}
export interface QueryGetMintRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse";
  value: QueryGetMintRequestResponseAmino;
}
export interface QueryGetMintRequestResponseSDKType {
  MintRequest: MintRequestSDKType;
}
export interface QueryAllMintRequestRequest {
  pagination?: PageRequest;
}
export interface QueryAllMintRequestRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest";
  value: Uint8Array;
}
export interface QueryAllMintRequestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMintRequestRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest";
  value: QueryAllMintRequestRequestAmino;
}
export interface QueryAllMintRequestRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMintRequestResponse {
  mintRequest: MintRequest[];
  pagination?: PageResponse;
}
export interface QueryAllMintRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse";
  value: Uint8Array;
}
export interface QueryAllMintRequestResponseAmino {
  MintRequest?: MintRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMintRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse";
  value: QueryAllMintRequestResponseAmino;
}
export interface QueryAllMintRequestResponseSDKType {
  MintRequest: MintRequestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetActionRequestRequest {
  id: Long;
}
export interface QueryGetActionRequestRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest";
  value: Uint8Array;
}
export interface QueryGetActionRequestRequestAmino {
  id?: string;
}
export interface QueryGetActionRequestRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest";
  value: QueryGetActionRequestRequestAmino;
}
export interface QueryGetActionRequestRequestSDKType {
  id: Long;
}
export interface QueryGetActionRequestResponse {
  actionRequest: ActionRequest;
}
export interface QueryGetActionRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse";
  value: Uint8Array;
}
export interface QueryGetActionRequestResponseAmino {
  ActionRequest?: ActionRequestAmino;
}
export interface QueryGetActionRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse";
  value: QueryGetActionRequestResponseAmino;
}
export interface QueryGetActionRequestResponseSDKType {
  ActionRequest: ActionRequestSDKType;
}
export interface QueryAllActionRequestRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionRequestRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest";
  value: Uint8Array;
}
export interface QueryAllActionRequestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionRequestRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest";
  value: QueryAllActionRequestRequestAmino;
}
export interface QueryAllActionRequestRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionRequestResponse {
  actionRequest: ActionRequest[];
  pagination?: PageResponse;
}
export interface QueryAllActionRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse";
  value: Uint8Array;
}
export interface QueryAllActionRequestResponseAmino {
  ActionRequest?: ActionRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse";
  value: QueryAllActionRequestResponseAmino;
}
export interface QueryAllActionRequestResponseSDKType {
  ActionRequest: ActionRequestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetCollectionOwnerRequestRequest {
  id: Long;
}
export interface QueryGetCollectionOwnerRequestRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest";
  value: Uint8Array;
}
export interface QueryGetCollectionOwnerRequestRequestAmino {
  id?: string;
}
export interface QueryGetCollectionOwnerRequestRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest";
  value: QueryGetCollectionOwnerRequestRequestAmino;
}
export interface QueryGetCollectionOwnerRequestRequestSDKType {
  id: Long;
}
export interface QueryGetCollectionOwnerRequestResponse {
  collectionOwnerRequest: CollectionOwnerRequest;
}
export interface QueryGetCollectionOwnerRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse";
  value: Uint8Array;
}
export interface QueryGetCollectionOwnerRequestResponseAmino {
  CollectionOwnerRequest?: CollectionOwnerRequestAmino;
}
export interface QueryGetCollectionOwnerRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse";
  value: QueryGetCollectionOwnerRequestResponseAmino;
}
export interface QueryGetCollectionOwnerRequestResponseSDKType {
  CollectionOwnerRequest: CollectionOwnerRequestSDKType;
}
export interface QueryAllCollectionOwnerRequestRequest {
  pagination?: PageRequest;
}
export interface QueryAllCollectionOwnerRequestRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest";
  value: Uint8Array;
}
export interface QueryAllCollectionOwnerRequestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllCollectionOwnerRequestRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest";
  value: QueryAllCollectionOwnerRequestRequestAmino;
}
export interface QueryAllCollectionOwnerRequestRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllCollectionOwnerRequestResponse {
  collectionOwnerRequest: CollectionOwnerRequest[];
  pagination?: PageResponse;
}
export interface QueryAllCollectionOwnerRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse";
  value: Uint8Array;
}
export interface QueryAllCollectionOwnerRequestResponseAmino {
  CollectionOwnerRequest?: CollectionOwnerRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllCollectionOwnerRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse";
  value: QueryAllCollectionOwnerRequestResponseAmino;
}
export interface QueryAllCollectionOwnerRequestResponseSDKType {
  CollectionOwnerRequest: CollectionOwnerRequestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOracleConfigRequest {}
export interface QueryGetOracleConfigRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest";
  value: Uint8Array;
}
export interface QueryGetOracleConfigRequestAmino {}
export interface QueryGetOracleConfigRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest";
  value: QueryGetOracleConfigRequestAmino;
}
export interface QueryGetOracleConfigRequestSDKType {}
export interface QueryGetOracleConfigResponse {
  oracleConfig: OracleConfig;
}
export interface QueryGetOracleConfigResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse";
  value: Uint8Array;
}
export interface QueryGetOracleConfigResponseAmino {
  OracleConfig?: OracleConfigAmino;
}
export interface QueryGetOracleConfigResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse";
  value: QueryGetOracleConfigResponseAmino;
}
export interface QueryGetOracleConfigResponseSDKType {
  OracleConfig: OracleConfigSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintRequestRequest(): QueryGetMintRequestRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetMintRequestRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest",
  encode(message: QueryGetMintRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMintRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMintRequestRequest>): QueryGetMintRequestRequest {
    const message = createBaseQueryGetMintRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryGetMintRequestRequestAmino): QueryGetMintRequestRequest {
    const message = createBaseQueryGetMintRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetMintRequestRequest): QueryGetMintRequestRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintRequestRequestAminoMsg): QueryGetMintRequestRequest {
    return QueryGetMintRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintRequestRequestProtoMsg): QueryGetMintRequestRequest {
    return QueryGetMintRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetMintRequestRequest): Uint8Array {
    return QueryGetMintRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintRequestRequest): QueryGetMintRequestRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestRequest",
      value: QueryGetMintRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintRequestResponse(): QueryGetMintRequestResponse {
  return {
    mintRequest: MintRequest.fromPartial({})
  };
}
export const QueryGetMintRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse",
  encode(message: QueryGetMintRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRequest !== undefined) {
      MintRequest.encode(message.mintRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMintRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRequest = MintRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMintRequestResponse>): QueryGetMintRequestResponse {
    const message = createBaseQueryGetMintRequestResponse();
    message.mintRequest = object.mintRequest !== undefined && object.mintRequest !== null ? MintRequest.fromPartial(object.mintRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMintRequestResponseAmino): QueryGetMintRequestResponse {
    const message = createBaseQueryGetMintRequestResponse();
    if (object.MintRequest !== undefined && object.MintRequest !== null) {
      message.mintRequest = MintRequest.fromAmino(object.MintRequest);
    }
    return message;
  },
  toAmino(message: QueryGetMintRequestResponse): QueryGetMintRequestResponseAmino {
    const obj: any = {};
    obj.MintRequest = message.mintRequest ? MintRequest.toAmino(message.mintRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintRequestResponseAminoMsg): QueryGetMintRequestResponse {
    return QueryGetMintRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintRequestResponseProtoMsg): QueryGetMintRequestResponse {
    return QueryGetMintRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetMintRequestResponse): Uint8Array {
    return QueryGetMintRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintRequestResponse): QueryGetMintRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetMintRequestResponse",
      value: QueryGetMintRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintRequestRequest(): QueryAllMintRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMintRequestRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest",
  encode(message: QueryAllMintRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMintRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintRequestRequest();
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
  fromPartial(object: Partial<QueryAllMintRequestRequest>): QueryAllMintRequestRequest {
    const message = createBaseQueryAllMintRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintRequestRequestAmino): QueryAllMintRequestRequest {
    const message = createBaseQueryAllMintRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintRequestRequest): QueryAllMintRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintRequestRequestAminoMsg): QueryAllMintRequestRequest {
    return QueryAllMintRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintRequestRequestProtoMsg): QueryAllMintRequestRequest {
    return QueryAllMintRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllMintRequestRequest): Uint8Array {
    return QueryAllMintRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintRequestRequest): QueryAllMintRequestRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestRequest",
      value: QueryAllMintRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintRequestResponse(): QueryAllMintRequestResponse {
  return {
    mintRequest: [],
    pagination: undefined
  };
}
export const QueryAllMintRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse",
  encode(message: QueryAllMintRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mintRequest) {
      MintRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMintRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRequest.push(MintRequest.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllMintRequestResponse>): QueryAllMintRequestResponse {
    const message = createBaseQueryAllMintRequestResponse();
    message.mintRequest = object.mintRequest?.map(e => MintRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintRequestResponseAmino): QueryAllMintRequestResponse {
    const message = createBaseQueryAllMintRequestResponse();
    message.mintRequest = object.MintRequest?.map(e => MintRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintRequestResponse): QueryAllMintRequestResponseAmino {
    const obj: any = {};
    if (message.mintRequest) {
      obj.MintRequest = message.mintRequest.map(e => e ? MintRequest.toAmino(e) : undefined);
    } else {
      obj.MintRequest = message.mintRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintRequestResponseAminoMsg): QueryAllMintRequestResponse {
    return QueryAllMintRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintRequestResponseProtoMsg): QueryAllMintRequestResponse {
    return QueryAllMintRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllMintRequestResponse): Uint8Array {
    return QueryAllMintRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintRequestResponse): QueryAllMintRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllMintRequestResponse",
      value: QueryAllMintRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionRequestRequest(): QueryGetActionRequestRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetActionRequestRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest",
  encode(message: QueryGetActionRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionRequestRequest>): QueryGetActionRequestRequest {
    const message = createBaseQueryGetActionRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryGetActionRequestRequestAmino): QueryGetActionRequestRequest {
    const message = createBaseQueryGetActionRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetActionRequestRequest): QueryGetActionRequestRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionRequestRequestAminoMsg): QueryGetActionRequestRequest {
    return QueryGetActionRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionRequestRequestProtoMsg): QueryGetActionRequestRequest {
    return QueryGetActionRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetActionRequestRequest): Uint8Array {
    return QueryGetActionRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionRequestRequest): QueryGetActionRequestRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestRequest",
      value: QueryGetActionRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionRequestResponse(): QueryGetActionRequestResponse {
  return {
    actionRequest: ActionRequest.fromPartial({})
  };
}
export const QueryGetActionRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse",
  encode(message: QueryGetActionRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionRequest !== undefined) {
      ActionRequest.encode(message.actionRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionRequest = ActionRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionRequestResponse>): QueryGetActionRequestResponse {
    const message = createBaseQueryGetActionRequestResponse();
    message.actionRequest = object.actionRequest !== undefined && object.actionRequest !== null ? ActionRequest.fromPartial(object.actionRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionRequestResponseAmino): QueryGetActionRequestResponse {
    const message = createBaseQueryGetActionRequestResponse();
    if (object.ActionRequest !== undefined && object.ActionRequest !== null) {
      message.actionRequest = ActionRequest.fromAmino(object.ActionRequest);
    }
    return message;
  },
  toAmino(message: QueryGetActionRequestResponse): QueryGetActionRequestResponseAmino {
    const obj: any = {};
    obj.ActionRequest = message.actionRequest ? ActionRequest.toAmino(message.actionRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionRequestResponseAminoMsg): QueryGetActionRequestResponse {
    return QueryGetActionRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionRequestResponseProtoMsg): QueryGetActionRequestResponse {
    return QueryGetActionRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetActionRequestResponse): Uint8Array {
    return QueryGetActionRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionRequestResponse): QueryGetActionRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetActionRequestResponse",
      value: QueryGetActionRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionRequestRequest(): QueryAllActionRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionRequestRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest",
  encode(message: QueryAllActionRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionRequestRequest();
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
  fromPartial(object: Partial<QueryAllActionRequestRequest>): QueryAllActionRequestRequest {
    const message = createBaseQueryAllActionRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionRequestRequestAmino): QueryAllActionRequestRequest {
    const message = createBaseQueryAllActionRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionRequestRequest): QueryAllActionRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionRequestRequestAminoMsg): QueryAllActionRequestRequest {
    return QueryAllActionRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionRequestRequestProtoMsg): QueryAllActionRequestRequest {
    return QueryAllActionRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllActionRequestRequest): Uint8Array {
    return QueryAllActionRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionRequestRequest): QueryAllActionRequestRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestRequest",
      value: QueryAllActionRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionRequestResponse(): QueryAllActionRequestResponse {
  return {
    actionRequest: [],
    pagination: undefined
  };
}
export const QueryAllActionRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse",
  encode(message: QueryAllActionRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionRequest) {
      ActionRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionRequest.push(ActionRequest.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllActionRequestResponse>): QueryAllActionRequestResponse {
    const message = createBaseQueryAllActionRequestResponse();
    message.actionRequest = object.actionRequest?.map(e => ActionRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionRequestResponseAmino): QueryAllActionRequestResponse {
    const message = createBaseQueryAllActionRequestResponse();
    message.actionRequest = object.ActionRequest?.map(e => ActionRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionRequestResponse): QueryAllActionRequestResponseAmino {
    const obj: any = {};
    if (message.actionRequest) {
      obj.ActionRequest = message.actionRequest.map(e => e ? ActionRequest.toAmino(e) : undefined);
    } else {
      obj.ActionRequest = message.actionRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionRequestResponseAminoMsg): QueryAllActionRequestResponse {
    return QueryAllActionRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionRequestResponseProtoMsg): QueryAllActionRequestResponse {
    return QueryAllActionRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllActionRequestResponse): Uint8Array {
    return QueryAllActionRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionRequestResponse): QueryAllActionRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllActionRequestResponse",
      value: QueryAllActionRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCollectionOwnerRequestRequest(): QueryGetCollectionOwnerRequestRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetCollectionOwnerRequestRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest",
  encode(message: QueryGetCollectionOwnerRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionOwnerRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionOwnerRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetCollectionOwnerRequestRequest>): QueryGetCollectionOwnerRequestRequest {
    const message = createBaseQueryGetCollectionOwnerRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryGetCollectionOwnerRequestRequestAmino): QueryGetCollectionOwnerRequestRequest {
    const message = createBaseQueryGetCollectionOwnerRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetCollectionOwnerRequestRequest): QueryGetCollectionOwnerRequestRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCollectionOwnerRequestRequestAminoMsg): QueryGetCollectionOwnerRequestRequest {
    return QueryGetCollectionOwnerRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCollectionOwnerRequestRequestProtoMsg): QueryGetCollectionOwnerRequestRequest {
    return QueryGetCollectionOwnerRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetCollectionOwnerRequestRequest): Uint8Array {
    return QueryGetCollectionOwnerRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCollectionOwnerRequestRequest): QueryGetCollectionOwnerRequestRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestRequest",
      value: QueryGetCollectionOwnerRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCollectionOwnerRequestResponse(): QueryGetCollectionOwnerRequestResponse {
  return {
    collectionOwnerRequest: CollectionOwnerRequest.fromPartial({})
  };
}
export const QueryGetCollectionOwnerRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse",
  encode(message: QueryGetCollectionOwnerRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionOwnerRequest !== undefined) {
      CollectionOwnerRequest.encode(message.collectionOwnerRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionOwnerRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionOwnerRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionOwnerRequest = CollectionOwnerRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetCollectionOwnerRequestResponse>): QueryGetCollectionOwnerRequestResponse {
    const message = createBaseQueryGetCollectionOwnerRequestResponse();
    message.collectionOwnerRequest = object.collectionOwnerRequest !== undefined && object.collectionOwnerRequest !== null ? CollectionOwnerRequest.fromPartial(object.collectionOwnerRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetCollectionOwnerRequestResponseAmino): QueryGetCollectionOwnerRequestResponse {
    const message = createBaseQueryGetCollectionOwnerRequestResponse();
    if (object.CollectionOwnerRequest !== undefined && object.CollectionOwnerRequest !== null) {
      message.collectionOwnerRequest = CollectionOwnerRequest.fromAmino(object.CollectionOwnerRequest);
    }
    return message;
  },
  toAmino(message: QueryGetCollectionOwnerRequestResponse): QueryGetCollectionOwnerRequestResponseAmino {
    const obj: any = {};
    obj.CollectionOwnerRequest = message.collectionOwnerRequest ? CollectionOwnerRequest.toAmino(message.collectionOwnerRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCollectionOwnerRequestResponseAminoMsg): QueryGetCollectionOwnerRequestResponse {
    return QueryGetCollectionOwnerRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCollectionOwnerRequestResponseProtoMsg): QueryGetCollectionOwnerRequestResponse {
    return QueryGetCollectionOwnerRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetCollectionOwnerRequestResponse): Uint8Array {
    return QueryGetCollectionOwnerRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCollectionOwnerRequestResponse): QueryGetCollectionOwnerRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetCollectionOwnerRequestResponse",
      value: QueryGetCollectionOwnerRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllCollectionOwnerRequestRequest(): QueryAllCollectionOwnerRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllCollectionOwnerRequestRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest",
  encode(message: QueryAllCollectionOwnerRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollectionOwnerRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollectionOwnerRequestRequest();
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
  fromPartial(object: Partial<QueryAllCollectionOwnerRequestRequest>): QueryAllCollectionOwnerRequestRequest {
    const message = createBaseQueryAllCollectionOwnerRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCollectionOwnerRequestRequestAmino): QueryAllCollectionOwnerRequestRequest {
    const message = createBaseQueryAllCollectionOwnerRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCollectionOwnerRequestRequest): QueryAllCollectionOwnerRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCollectionOwnerRequestRequestAminoMsg): QueryAllCollectionOwnerRequestRequest {
    return QueryAllCollectionOwnerRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCollectionOwnerRequestRequestProtoMsg): QueryAllCollectionOwnerRequestRequest {
    return QueryAllCollectionOwnerRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllCollectionOwnerRequestRequest): Uint8Array {
    return QueryAllCollectionOwnerRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCollectionOwnerRequestRequest): QueryAllCollectionOwnerRequestRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestRequest",
      value: QueryAllCollectionOwnerRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllCollectionOwnerRequestResponse(): QueryAllCollectionOwnerRequestResponse {
  return {
    collectionOwnerRequest: [],
    pagination: undefined
  };
}
export const QueryAllCollectionOwnerRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse",
  encode(message: QueryAllCollectionOwnerRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collectionOwnerRequest) {
      CollectionOwnerRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollectionOwnerRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollectionOwnerRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionOwnerRequest.push(CollectionOwnerRequest.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllCollectionOwnerRequestResponse>): QueryAllCollectionOwnerRequestResponse {
    const message = createBaseQueryAllCollectionOwnerRequestResponse();
    message.collectionOwnerRequest = object.collectionOwnerRequest?.map(e => CollectionOwnerRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCollectionOwnerRequestResponseAmino): QueryAllCollectionOwnerRequestResponse {
    const message = createBaseQueryAllCollectionOwnerRequestResponse();
    message.collectionOwnerRequest = object.CollectionOwnerRequest?.map(e => CollectionOwnerRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCollectionOwnerRequestResponse): QueryAllCollectionOwnerRequestResponseAmino {
    const obj: any = {};
    if (message.collectionOwnerRequest) {
      obj.CollectionOwnerRequest = message.collectionOwnerRequest.map(e => e ? CollectionOwnerRequest.toAmino(e) : undefined);
    } else {
      obj.CollectionOwnerRequest = message.collectionOwnerRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCollectionOwnerRequestResponseAminoMsg): QueryAllCollectionOwnerRequestResponse {
    return QueryAllCollectionOwnerRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCollectionOwnerRequestResponseProtoMsg): QueryAllCollectionOwnerRequestResponse {
    return QueryAllCollectionOwnerRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllCollectionOwnerRequestResponse): Uint8Array {
    return QueryAllCollectionOwnerRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCollectionOwnerRequestResponse): QueryAllCollectionOwnerRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryAllCollectionOwnerRequestResponse",
      value: QueryAllCollectionOwnerRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOracleConfigRequest(): QueryGetOracleConfigRequest {
  return {};
}
export const QueryGetOracleConfigRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest",
  encode(_: QueryGetOracleConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOracleConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOracleConfigRequest();
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
  fromPartial(_: Partial<QueryGetOracleConfigRequest>): QueryGetOracleConfigRequest {
    const message = createBaseQueryGetOracleConfigRequest();
    return message;
  },
  fromAmino(_: QueryGetOracleConfigRequestAmino): QueryGetOracleConfigRequest {
    const message = createBaseQueryGetOracleConfigRequest();
    return message;
  },
  toAmino(_: QueryGetOracleConfigRequest): QueryGetOracleConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetOracleConfigRequestAminoMsg): QueryGetOracleConfigRequest {
    return QueryGetOracleConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOracleConfigRequestProtoMsg): QueryGetOracleConfigRequest {
    return QueryGetOracleConfigRequest.decode(message.value);
  },
  toProto(message: QueryGetOracleConfigRequest): Uint8Array {
    return QueryGetOracleConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOracleConfigRequest): QueryGetOracleConfigRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigRequest",
      value: QueryGetOracleConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOracleConfigResponse(): QueryGetOracleConfigResponse {
  return {
    oracleConfig: OracleConfig.fromPartial({})
  };
}
export const QueryGetOracleConfigResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse",
  encode(message: QueryGetOracleConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleConfig !== undefined) {
      OracleConfig.encode(message.oracleConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOracleConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOracleConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleConfig = OracleConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetOracleConfigResponse>): QueryGetOracleConfigResponse {
    const message = createBaseQueryGetOracleConfigResponse();
    message.oracleConfig = object.oracleConfig !== undefined && object.oracleConfig !== null ? OracleConfig.fromPartial(object.oracleConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOracleConfigResponseAmino): QueryGetOracleConfigResponse {
    const message = createBaseQueryGetOracleConfigResponse();
    if (object.OracleConfig !== undefined && object.OracleConfig !== null) {
      message.oracleConfig = OracleConfig.fromAmino(object.OracleConfig);
    }
    return message;
  },
  toAmino(message: QueryGetOracleConfigResponse): QueryGetOracleConfigResponseAmino {
    const obj: any = {};
    obj.OracleConfig = message.oracleConfig ? OracleConfig.toAmino(message.oracleConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOracleConfigResponseAminoMsg): QueryGetOracleConfigResponse {
    return QueryGetOracleConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOracleConfigResponseProtoMsg): QueryGetOracleConfigResponse {
    return QueryGetOracleConfigResponse.decode(message.value);
  },
  toProto(message: QueryGetOracleConfigResponse): Uint8Array {
    return QueryGetOracleConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOracleConfigResponse): QueryGetOracleConfigResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.QueryGetOracleConfigResponse",
      value: QueryGetOracleConfigResponse.encode(message).finish()
    };
  }
};