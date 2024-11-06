//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetNFTSchemaRequest, QueryGetNFTSchemaResponse, QueryAllNFTSchemaRequest, QueryAllNFTSchemaResponse, QueryGetNftDataRequest, QueryGetNftDataResponse, QueryAllNftDataRequest, QueryAllNftDataResponse, QueryGetActionByRefIdRequest, QueryGetActionByRefIdResponse, QueryAllActionByRefIdRequest, QueryAllActionByRefIdResponse, QueryGetOrganizationRequest, QueryGetOrganizationResponse, QueryAllOrganizationRequest, QueryAllOrganizationResponse, QueryGetNftCollectionRequest, QueryGetNftCollectionResponse, QueryGetNFTSchemaByContractRequest, QueryGetNFTSchemaByContractResponse, QueryAllNFTSchemaByContractRequest, QueryAllNFTSchemaByContractResponse, QueryGetNFTFeeConfigRequest, QueryGetNFTFeeConfigResponse, QueryGetNFTFeeBalanceRequest, QueryGetNFTFeeBalanceResponse, QueryGetMetadataCreatorRequest, QueryGetMetadataCreatorResponse, QueryAllMetadataCreatorRequest, QueryAllMetadataCreatorResponse, QueryGetActionExecutorRequest, QueryGetActionExecutorResponse, QueryAllActionExecutorRequest, QueryAllActionExecutorResponse, QueryGetSchemaAttributeRequest, QueryGetSchemaAttributeResponse, QueryAllSchemaAttributeRequest, QueryAllSchemaAttributeResponse, QueryListAttributeBySchemaRequest, QueryListAttributeBySchemaResponse, QueryGetActionOfSchemaRequest, QueryGetActionOfSchemaResponse, QueryAllActionOfSchemaRequest, QueryAllActionOfSchemaResponse, QueryGetExecutorOfSchemaRequest, QueryGetExecutorOfSchemaResponse, QueryAllExecutorOfSchemaRequest, QueryAllExecutorOfSchemaResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NFTSchema by index. */
  nFTSchema(request: QueryGetNFTSchemaRequest): Promise<QueryGetNFTSchemaResponse>;
  /** Queries a list of NFTSchema items. */
  nFTSchemaAll(request?: QueryAllNFTSchemaRequest): Promise<QueryAllNFTSchemaResponse>;
  /** Queries a NftData by index. */
  nftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse>;
  /** Queries a list of NftData items. */
  nftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse>;
  /** Queries a ActionByRefId by index. */
  actionByRefId(request: QueryGetActionByRefIdRequest): Promise<QueryGetActionByRefIdResponse>;
  /** Queries a list of ActionByRefId items. */
  actionByRefIdAll(request?: QueryAllActionByRefIdRequest): Promise<QueryAllActionByRefIdResponse>;
  /** Queries a Organization by index. */
  organization(request: QueryGetOrganizationRequest): Promise<QueryGetOrganizationResponse>;
  /** Queries a list of Organization items. */
  organizationAll(request?: QueryAllOrganizationRequest): Promise<QueryAllOrganizationResponse>;
  /** Queries a NftCollection by index. */
  nftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse>;
  /** Queries a NFTSchemaByContract by index. */
  nFTSchemaByContract(request: QueryGetNFTSchemaByContractRequest): Promise<QueryGetNFTSchemaByContractResponse>;
  /** Queries a list of NFTSchemaByContract items. */
  nFTSchemaByContractAll(request?: QueryAllNFTSchemaByContractRequest): Promise<QueryAllNFTSchemaByContractResponse>;
  /** Queries a NFTFeeConfig by index. */
  nFTFeeConfig(request?: QueryGetNFTFeeConfigRequest): Promise<QueryGetNFTFeeConfigResponse>;
  /** Queries a NFTFeeBalance by index. */
  nFTFeeBalance(request?: QueryGetNFTFeeBalanceRequest): Promise<QueryGetNFTFeeBalanceResponse>;
  /** Queries a MetadataCreator by index. */
  metadataCreator(request: QueryGetMetadataCreatorRequest): Promise<QueryGetMetadataCreatorResponse>;
  /** Queries a list of MetadataCreator items. */
  metadataCreatorAll(request?: QueryAllMetadataCreatorRequest): Promise<QueryAllMetadataCreatorResponse>;
  /** Queries a ActionExecutor by index. */
  actionExecutor(request: QueryGetActionExecutorRequest): Promise<QueryGetActionExecutorResponse>;
  /** Queries a list of ActionExecutor items. */
  actionExecutorAll(request?: QueryAllActionExecutorRequest): Promise<QueryAllActionExecutorResponse>;
  /** Queries a SchemaAttribute by index. */
  schemaAttribute(request: QueryGetSchemaAttributeRequest): Promise<QueryGetSchemaAttributeResponse>;
  /** Queries a list of SchemaAttribute items. */
  schemaAttributeAll(request?: QueryAllSchemaAttributeRequest): Promise<QueryAllSchemaAttributeResponse>;
  /** Queries a list of ListAttributeBySchema items. */
  listAttributeBySchema(request: QueryListAttributeBySchemaRequest): Promise<QueryListAttributeBySchemaResponse>;
  /** Queries a ActionOfSchema by index. */
  actionOfSchema(request: QueryGetActionOfSchemaRequest): Promise<QueryGetActionOfSchemaResponse>;
  /** Queries a list of ActionOfSchema items. */
  actionOfSchemaAll(request?: QueryAllActionOfSchemaRequest): Promise<QueryAllActionOfSchemaResponse>;
  /** Queries a ExecutorOfSchema by index. */
  executorOfSchema(request: QueryGetExecutorOfSchemaRequest): Promise<QueryGetExecutorOfSchemaResponse>;
  /** Queries a list of ExecutorOfSchema items. */
  executorOfSchemaAll(request?: QueryAllExecutorOfSchemaRequest): Promise<QueryAllExecutorOfSchemaResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.nFTSchema = this.nFTSchema.bind(this);
    this.nFTSchemaAll = this.nFTSchemaAll.bind(this);
    this.nftData = this.nftData.bind(this);
    this.nftDataAll = this.nftDataAll.bind(this);
    this.actionByRefId = this.actionByRefId.bind(this);
    this.actionByRefIdAll = this.actionByRefIdAll.bind(this);
    this.organization = this.organization.bind(this);
    this.organizationAll = this.organizationAll.bind(this);
    this.nftCollection = this.nftCollection.bind(this);
    this.nFTSchemaByContract = this.nFTSchemaByContract.bind(this);
    this.nFTSchemaByContractAll = this.nFTSchemaByContractAll.bind(this);
    this.nFTFeeConfig = this.nFTFeeConfig.bind(this);
    this.nFTFeeBalance = this.nFTFeeBalance.bind(this);
    this.metadataCreator = this.metadataCreator.bind(this);
    this.metadataCreatorAll = this.metadataCreatorAll.bind(this);
    this.actionExecutor = this.actionExecutor.bind(this);
    this.actionExecutorAll = this.actionExecutorAll.bind(this);
    this.schemaAttribute = this.schemaAttribute.bind(this);
    this.schemaAttributeAll = this.schemaAttributeAll.bind(this);
    this.listAttributeBySchema = this.listAttributeBySchema.bind(this);
    this.actionOfSchema = this.actionOfSchema.bind(this);
    this.actionOfSchemaAll = this.actionOfSchemaAll.bind(this);
    this.executorOfSchema = this.executorOfSchema.bind(this);
    this.executorOfSchemaAll = this.executorOfSchemaAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  nFTSchema(request: QueryGetNFTSchemaRequest): Promise<QueryGetNFTSchemaResponse> {
    const data = QueryGetNFTSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NFTSchema", data);
    return promise.then(data => QueryGetNFTSchemaResponse.decode(new _m0.Reader(data)));
  }
  nFTSchemaAll(request: QueryAllNFTSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllNFTSchemaResponse> {
    const data = QueryAllNFTSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NFTSchemaAll", data);
    return promise.then(data => QueryAllNFTSchemaResponse.decode(new _m0.Reader(data)));
  }
  nftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse> {
    const data = QueryGetNftDataRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NftData", data);
    return promise.then(data => QueryGetNftDataResponse.decode(new _m0.Reader(data)));
  }
  nftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse> {
    const data = QueryAllNftDataRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NftDataAll", data);
    return promise.then(data => QueryAllNftDataResponse.decode(new _m0.Reader(data)));
  }
  actionByRefId(request: QueryGetActionByRefIdRequest): Promise<QueryGetActionByRefIdResponse> {
    const data = QueryGetActionByRefIdRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ActionByRefId", data);
    return promise.then(data => QueryGetActionByRefIdResponse.decode(new _m0.Reader(data)));
  }
  actionByRefIdAll(request: QueryAllActionByRefIdRequest = {
    pagination: undefined
  }): Promise<QueryAllActionByRefIdResponse> {
    const data = QueryAllActionByRefIdRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ActionByRefIdAll", data);
    return promise.then(data => QueryAllActionByRefIdResponse.decode(new _m0.Reader(data)));
  }
  organization(request: QueryGetOrganizationRequest): Promise<QueryGetOrganizationResponse> {
    const data = QueryGetOrganizationRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "Organization", data);
    return promise.then(data => QueryGetOrganizationResponse.decode(new _m0.Reader(data)));
  }
  organizationAll(request: QueryAllOrganizationRequest = {
    pagination: undefined
  }): Promise<QueryAllOrganizationResponse> {
    const data = QueryAllOrganizationRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "OrganizationAll", data);
    return promise.then(data => QueryAllOrganizationResponse.decode(new _m0.Reader(data)));
  }
  nftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse> {
    const data = QueryGetNftCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NftCollection", data);
    return promise.then(data => QueryGetNftCollectionResponse.decode(new _m0.Reader(data)));
  }
  nFTSchemaByContract(request: QueryGetNFTSchemaByContractRequest): Promise<QueryGetNFTSchemaByContractResponse> {
    const data = QueryGetNFTSchemaByContractRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NFTSchemaByContract", data);
    return promise.then(data => QueryGetNFTSchemaByContractResponse.decode(new _m0.Reader(data)));
  }
  nFTSchemaByContractAll(request: QueryAllNFTSchemaByContractRequest = {
    pagination: undefined
  }): Promise<QueryAllNFTSchemaByContractResponse> {
    const data = QueryAllNFTSchemaByContractRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NFTSchemaByContractAll", data);
    return promise.then(data => QueryAllNFTSchemaByContractResponse.decode(new _m0.Reader(data)));
  }
  nFTFeeConfig(request: QueryGetNFTFeeConfigRequest = {}): Promise<QueryGetNFTFeeConfigResponse> {
    const data = QueryGetNFTFeeConfigRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NFTFeeConfig", data);
    return promise.then(data => QueryGetNFTFeeConfigResponse.decode(new _m0.Reader(data)));
  }
  nFTFeeBalance(request: QueryGetNFTFeeBalanceRequest = {}): Promise<QueryGetNFTFeeBalanceResponse> {
    const data = QueryGetNFTFeeBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "NFTFeeBalance", data);
    return promise.then(data => QueryGetNFTFeeBalanceResponse.decode(new _m0.Reader(data)));
  }
  metadataCreator(request: QueryGetMetadataCreatorRequest): Promise<QueryGetMetadataCreatorResponse> {
    const data = QueryGetMetadataCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "MetadataCreator", data);
    return promise.then(data => QueryGetMetadataCreatorResponse.decode(new _m0.Reader(data)));
  }
  metadataCreatorAll(request: QueryAllMetadataCreatorRequest = {
    pagination: undefined
  }): Promise<QueryAllMetadataCreatorResponse> {
    const data = QueryAllMetadataCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "MetadataCreatorAll", data);
    return promise.then(data => QueryAllMetadataCreatorResponse.decode(new _m0.Reader(data)));
  }
  actionExecutor(request: QueryGetActionExecutorRequest): Promise<QueryGetActionExecutorResponse> {
    const data = QueryGetActionExecutorRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ActionExecutor", data);
    return promise.then(data => QueryGetActionExecutorResponse.decode(new _m0.Reader(data)));
  }
  actionExecutorAll(request: QueryAllActionExecutorRequest = {
    pagination: undefined
  }): Promise<QueryAllActionExecutorResponse> {
    const data = QueryAllActionExecutorRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ActionExecutorAll", data);
    return promise.then(data => QueryAllActionExecutorResponse.decode(new _m0.Reader(data)));
  }
  schemaAttribute(request: QueryGetSchemaAttributeRequest): Promise<QueryGetSchemaAttributeResponse> {
    const data = QueryGetSchemaAttributeRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "SchemaAttribute", data);
    return promise.then(data => QueryGetSchemaAttributeResponse.decode(new _m0.Reader(data)));
  }
  schemaAttributeAll(request: QueryAllSchemaAttributeRequest = {
    pagination: undefined
  }): Promise<QueryAllSchemaAttributeResponse> {
    const data = QueryAllSchemaAttributeRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "SchemaAttributeAll", data);
    return promise.then(data => QueryAllSchemaAttributeResponse.decode(new _m0.Reader(data)));
  }
  listAttributeBySchema(request: QueryListAttributeBySchemaRequest): Promise<QueryListAttributeBySchemaResponse> {
    const data = QueryListAttributeBySchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ListAttributeBySchema", data);
    return promise.then(data => QueryListAttributeBySchemaResponse.decode(new _m0.Reader(data)));
  }
  actionOfSchema(request: QueryGetActionOfSchemaRequest): Promise<QueryGetActionOfSchemaResponse> {
    const data = QueryGetActionOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ActionOfSchema", data);
    return promise.then(data => QueryGetActionOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  actionOfSchemaAll(request: QueryAllActionOfSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllActionOfSchemaResponse> {
    const data = QueryAllActionOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ActionOfSchemaAll", data);
    return promise.then(data => QueryAllActionOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  executorOfSchema(request: QueryGetExecutorOfSchemaRequest): Promise<QueryGetExecutorOfSchemaResponse> {
    const data = QueryGetExecutorOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ExecutorOfSchema", data);
    return promise.then(data => QueryGetExecutorOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  executorOfSchemaAll(request: QueryAllExecutorOfSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllExecutorOfSchemaResponse> {
    const data = QueryAllExecutorOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Query", "ExecutorOfSchemaAll", data);
    return promise.then(data => QueryAllExecutorOfSchemaResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    nFTSchema(request: QueryGetNFTSchemaRequest): Promise<QueryGetNFTSchemaResponse> {
      return queryService.nFTSchema(request);
    },
    nFTSchemaAll(request?: QueryAllNFTSchemaRequest): Promise<QueryAllNFTSchemaResponse> {
      return queryService.nFTSchemaAll(request);
    },
    nftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse> {
      return queryService.nftData(request);
    },
    nftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse> {
      return queryService.nftDataAll(request);
    },
    actionByRefId(request: QueryGetActionByRefIdRequest): Promise<QueryGetActionByRefIdResponse> {
      return queryService.actionByRefId(request);
    },
    actionByRefIdAll(request?: QueryAllActionByRefIdRequest): Promise<QueryAllActionByRefIdResponse> {
      return queryService.actionByRefIdAll(request);
    },
    organization(request: QueryGetOrganizationRequest): Promise<QueryGetOrganizationResponse> {
      return queryService.organization(request);
    },
    organizationAll(request?: QueryAllOrganizationRequest): Promise<QueryAllOrganizationResponse> {
      return queryService.organizationAll(request);
    },
    nftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse> {
      return queryService.nftCollection(request);
    },
    nFTSchemaByContract(request: QueryGetNFTSchemaByContractRequest): Promise<QueryGetNFTSchemaByContractResponse> {
      return queryService.nFTSchemaByContract(request);
    },
    nFTSchemaByContractAll(request?: QueryAllNFTSchemaByContractRequest): Promise<QueryAllNFTSchemaByContractResponse> {
      return queryService.nFTSchemaByContractAll(request);
    },
    nFTFeeConfig(request?: QueryGetNFTFeeConfigRequest): Promise<QueryGetNFTFeeConfigResponse> {
      return queryService.nFTFeeConfig(request);
    },
    nFTFeeBalance(request?: QueryGetNFTFeeBalanceRequest): Promise<QueryGetNFTFeeBalanceResponse> {
      return queryService.nFTFeeBalance(request);
    },
    metadataCreator(request: QueryGetMetadataCreatorRequest): Promise<QueryGetMetadataCreatorResponse> {
      return queryService.metadataCreator(request);
    },
    metadataCreatorAll(request?: QueryAllMetadataCreatorRequest): Promise<QueryAllMetadataCreatorResponse> {
      return queryService.metadataCreatorAll(request);
    },
    actionExecutor(request: QueryGetActionExecutorRequest): Promise<QueryGetActionExecutorResponse> {
      return queryService.actionExecutor(request);
    },
    actionExecutorAll(request?: QueryAllActionExecutorRequest): Promise<QueryAllActionExecutorResponse> {
      return queryService.actionExecutorAll(request);
    },
    schemaAttribute(request: QueryGetSchemaAttributeRequest): Promise<QueryGetSchemaAttributeResponse> {
      return queryService.schemaAttribute(request);
    },
    schemaAttributeAll(request?: QueryAllSchemaAttributeRequest): Promise<QueryAllSchemaAttributeResponse> {
      return queryService.schemaAttributeAll(request);
    },
    listAttributeBySchema(request: QueryListAttributeBySchemaRequest): Promise<QueryListAttributeBySchemaResponse> {
      return queryService.listAttributeBySchema(request);
    },
    actionOfSchema(request: QueryGetActionOfSchemaRequest): Promise<QueryGetActionOfSchemaResponse> {
      return queryService.actionOfSchema(request);
    },
    actionOfSchemaAll(request?: QueryAllActionOfSchemaRequest): Promise<QueryAllActionOfSchemaResponse> {
      return queryService.actionOfSchemaAll(request);
    },
    executorOfSchema(request: QueryGetExecutorOfSchemaRequest): Promise<QueryGetExecutorOfSchemaResponse> {
      return queryService.executorOfSchema(request);
    },
    executorOfSchemaAll(request?: QueryAllExecutorOfSchemaRequest): Promise<QueryAllExecutorOfSchemaResponse> {
      return queryService.executorOfSchemaAll(request);
    }
  };
};