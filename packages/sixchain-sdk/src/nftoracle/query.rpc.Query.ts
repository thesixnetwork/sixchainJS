//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMintRequestRequest, QueryGetMintRequestResponse, QueryAllMintRequestRequest, QueryAllMintRequestResponse, QueryGetActionRequestRequest, QueryGetActionRequestResponse, QueryAllActionRequestRequest, QueryAllActionRequestResponse, QueryGetCollectionOwnerRequestRequest, QueryGetCollectionOwnerRequestResponse, QueryAllCollectionOwnerRequestRequest, QueryAllCollectionOwnerRequestResponse, QueryGetOracleConfigRequest, QueryGetOracleConfigResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a MintRequest by id. */
  mintRequest(request: QueryGetMintRequestRequest): Promise<QueryGetMintRequestResponse>;
  /** Queries a list of MintRequest items. */
  mintRequestAll(request?: QueryAllMintRequestRequest): Promise<QueryAllMintRequestResponse>;
  /** Queries a ActionRequest by id. */
  actionRequest(request: QueryGetActionRequestRequest): Promise<QueryGetActionRequestResponse>;
  /** Queries a list of ActionRequest items. */
  actionRequestAll(request?: QueryAllActionRequestRequest): Promise<QueryAllActionRequestResponse>;
  /** Queries a CollectionOwnerRequest by id. */
  collectionOwnerRequest(request: QueryGetCollectionOwnerRequestRequest): Promise<QueryGetCollectionOwnerRequestResponse>;
  /** Queries a list of CollectionOwnerRequest items. */
  collectionOwnerRequestAll(request?: QueryAllCollectionOwnerRequestRequest): Promise<QueryAllCollectionOwnerRequestResponse>;
  /** Queries a OracleConfig by index. */
  oracleConfig(request?: QueryGetOracleConfigRequest): Promise<QueryGetOracleConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.mintRequest = this.mintRequest.bind(this);
    this.mintRequestAll = this.mintRequestAll.bind(this);
    this.actionRequest = this.actionRequest.bind(this);
    this.actionRequestAll = this.actionRequestAll.bind(this);
    this.collectionOwnerRequest = this.collectionOwnerRequest.bind(this);
    this.collectionOwnerRequestAll = this.collectionOwnerRequestAll.bind(this);
    this.oracleConfig = this.oracleConfig.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  mintRequest(request: QueryGetMintRequestRequest): Promise<QueryGetMintRequestResponse> {
    const data = QueryGetMintRequestRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "MintRequest", data);
    return promise.then(data => QueryGetMintRequestResponse.decode(new _m0.Reader(data)));
  }
  mintRequestAll(request: QueryAllMintRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllMintRequestResponse> {
    const data = QueryAllMintRequestRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "MintRequestAll", data);
    return promise.then(data => QueryAllMintRequestResponse.decode(new _m0.Reader(data)));
  }
  actionRequest(request: QueryGetActionRequestRequest): Promise<QueryGetActionRequestResponse> {
    const data = QueryGetActionRequestRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "ActionRequest", data);
    return promise.then(data => QueryGetActionRequestResponse.decode(new _m0.Reader(data)));
  }
  actionRequestAll(request: QueryAllActionRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllActionRequestResponse> {
    const data = QueryAllActionRequestRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "ActionRequestAll", data);
    return promise.then(data => QueryAllActionRequestResponse.decode(new _m0.Reader(data)));
  }
  collectionOwnerRequest(request: QueryGetCollectionOwnerRequestRequest): Promise<QueryGetCollectionOwnerRequestResponse> {
    const data = QueryGetCollectionOwnerRequestRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "CollectionOwnerRequest", data);
    return promise.then(data => QueryGetCollectionOwnerRequestResponse.decode(new _m0.Reader(data)));
  }
  collectionOwnerRequestAll(request: QueryAllCollectionOwnerRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllCollectionOwnerRequestResponse> {
    const data = QueryAllCollectionOwnerRequestRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "CollectionOwnerRequestAll", data);
    return promise.then(data => QueryAllCollectionOwnerRequestResponse.decode(new _m0.Reader(data)));
  }
  oracleConfig(request: QueryGetOracleConfigRequest = {}): Promise<QueryGetOracleConfigResponse> {
    const data = QueryGetOracleConfigRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Query", "OracleConfig", data);
    return promise.then(data => QueryGetOracleConfigResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    mintRequest(request: QueryGetMintRequestRequest): Promise<QueryGetMintRequestResponse> {
      return queryService.mintRequest(request);
    },
    mintRequestAll(request?: QueryAllMintRequestRequest): Promise<QueryAllMintRequestResponse> {
      return queryService.mintRequestAll(request);
    },
    actionRequest(request: QueryGetActionRequestRequest): Promise<QueryGetActionRequestResponse> {
      return queryService.actionRequest(request);
    },
    actionRequestAll(request?: QueryAllActionRequestRequest): Promise<QueryAllActionRequestResponse> {
      return queryService.actionRequestAll(request);
    },
    collectionOwnerRequest(request: QueryGetCollectionOwnerRequestRequest): Promise<QueryGetCollectionOwnerRequestResponse> {
      return queryService.collectionOwnerRequest(request);
    },
    collectionOwnerRequestAll(request?: QueryAllCollectionOwnerRequestRequest): Promise<QueryAllCollectionOwnerRequestResponse> {
      return queryService.collectionOwnerRequestAll(request);
    },
    oracleConfig(request?: QueryGetOracleConfigRequest): Promise<QueryGetOracleConfigResponse> {
      return queryService.oracleConfig(request);
    }
  };
};