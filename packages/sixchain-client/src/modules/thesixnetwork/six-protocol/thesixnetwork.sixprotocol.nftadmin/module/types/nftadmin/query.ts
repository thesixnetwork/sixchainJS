/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nftadmin/params";
import { Authorization } from "../nftadmin/authorization";

export const protobufPackage = "thesixnetwork.sixprotocol.nftadmin";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAuthorizationRequest {}

export interface QueryGetAuthorizationResponse {
  Authorization: Authorization | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetAuthorizationRequest: object = {};

export const QueryGetAuthorizationRequest = {
  encode(
    _: QueryGetAuthorizationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorizationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthorizationRequest,
    } as QueryGetAuthorizationRequest;
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

  fromJSON(_: any): QueryGetAuthorizationRequest {
    const message = {
      ...baseQueryGetAuthorizationRequest,
    } as QueryGetAuthorizationRequest;
    return message;
  },

  toJSON(_: QueryGetAuthorizationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetAuthorizationRequest>
  ): QueryGetAuthorizationRequest {
    const message = {
      ...baseQueryGetAuthorizationRequest,
    } as QueryGetAuthorizationRequest;
    return message;
  },
};

const baseQueryGetAuthorizationResponse: object = {};

export const QueryGetAuthorizationResponse = {
  encode(
    message: QueryGetAuthorizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Authorization !== undefined) {
      Authorization.encode(
        message.Authorization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorizationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthorizationResponse,
    } as QueryGetAuthorizationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Authorization = Authorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthorizationResponse {
    const message = {
      ...baseQueryGetAuthorizationResponse,
    } as QueryGetAuthorizationResponse;
    if (object.Authorization !== undefined && object.Authorization !== null) {
      message.Authorization = Authorization.fromJSON(object.Authorization);
    } else {
      message.Authorization = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuthorizationResponse): unknown {
    const obj: any = {};
    message.Authorization !== undefined &&
      (obj.Authorization = message.Authorization
        ? Authorization.toJSON(message.Authorization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthorizationResponse>
  ): QueryGetAuthorizationResponse {
    const message = {
      ...baseQueryGetAuthorizationResponse,
    } as QueryGetAuthorizationResponse;
    if (object.Authorization !== undefined && object.Authorization !== null) {
      message.Authorization = Authorization.fromPartial(object.Authorization);
    } else {
      message.Authorization = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Authorization by index. */
  Authorization(
    request: QueryGetAuthorizationRequest
  ): Promise<QueryGetAuthorizationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.nftadmin.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Authorization(
    request: QueryGetAuthorizationRequest
  ): Promise<QueryGetAuthorizationResponse> {
    const data = QueryGetAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesixnetwork.sixprotocol.nftadmin.Query",
      "Authorization",
      data
    );
    return promise.then((data) =>
      QueryGetAuthorizationResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
