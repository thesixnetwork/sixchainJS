//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { NFTSchema, NFTSchemaAmino, NFTSchemaSDKType } from "./nft_schema";
import { NftData, NftDataAmino, NftDataSDKType } from "./nft_data";
import { ActionByRefId, ActionByRefIdAmino, ActionByRefIdSDKType } from "./action_by_ref_id";
import { Organization, OrganizationAmino, OrganizationSDKType } from "./organization";
import { NFTSchemaByContract, NFTSchemaByContractAmino, NFTSchemaByContractSDKType } from "./nft_schema_by_contract";
import { NFTFeeConfig, NFTFeeConfigAmino, NFTFeeConfigSDKType } from "./nft_fee_config";
import { NFTFeeBalance, NFTFeeBalanceAmino, NFTFeeBalanceSDKType } from "./nft_fee_balance";
import { MetadataCreator, MetadataCreatorAmino, MetadataCreatorSDKType } from "./metadata_creator";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryParamsRequest";
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
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetNFTSchemaRequest {
  code: string;
}
export interface QueryGetNFTSchemaRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaRequest";
  value: Uint8Array;
}
export interface QueryGetNFTSchemaRequestAmino {
  code?: string;
}
export interface QueryGetNFTSchemaRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaRequest";
  value: QueryGetNFTSchemaRequestAmino;
}
export interface QueryGetNFTSchemaRequestSDKType {
  code: string;
}
export interface QueryGetNFTSchemaResponse {
  nFTSchema: NFTSchema;
}
export interface QueryGetNFTSchemaResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaResponse";
  value: Uint8Array;
}
export interface QueryGetNFTSchemaResponseAmino {
  nFTSchema?: NFTSchemaAmino;
}
export interface QueryGetNFTSchemaResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaResponse";
  value: QueryGetNFTSchemaResponseAmino;
}
export interface QueryGetNFTSchemaResponseSDKType {
  nFTSchema: NFTSchemaSDKType;
}
export interface QueryAllNFTSchemaRequest {
  pagination?: PageRequest;
}
export interface QueryAllNFTSchemaRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaRequest";
  value: Uint8Array;
}
export interface QueryAllNFTSchemaRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllNFTSchemaRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaRequest";
  value: QueryAllNFTSchemaRequestAmino;
}
export interface QueryAllNFTSchemaRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllNFTSchemaResponse {
  nFTSchema: NFTSchema[];
  pagination?: PageResponse;
}
export interface QueryAllNFTSchemaResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaResponse";
  value: Uint8Array;
}
export interface QueryAllNFTSchemaResponseAmino {
  nFTSchema?: NFTSchemaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllNFTSchemaResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaResponse";
  value: QueryAllNFTSchemaResponseAmino;
}
export interface QueryAllNFTSchemaResponseSDKType {
  nFTSchema: NFTSchemaSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNftDataRequest {
  nftSchemaCode: string;
  tokenId: string;
}
export interface QueryGetNftDataRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataRequest";
  value: Uint8Array;
}
export interface QueryGetNftDataRequestAmino {
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface QueryGetNftDataRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataRequest";
  value: QueryGetNftDataRequestAmino;
}
export interface QueryGetNftDataRequestSDKType {
  nftSchemaCode: string;
  tokenId: string;
}
export interface QueryGetNftDataResponse {
  nftData: NftData;
}
export interface QueryGetNftDataResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataResponse";
  value: Uint8Array;
}
export interface QueryGetNftDataResponseAmino {
  nftData?: NftDataAmino;
}
export interface QueryGetNftDataResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataResponse";
  value: QueryGetNftDataResponseAmino;
}
export interface QueryGetNftDataResponseSDKType {
  nftData: NftDataSDKType;
}
export interface QueryAllNftDataRequest {
  pagination?: PageRequest;
}
export interface QueryAllNftDataRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataRequest";
  value: Uint8Array;
}
export interface QueryAllNftDataRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllNftDataRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataRequest";
  value: QueryAllNftDataRequestAmino;
}
export interface QueryAllNftDataRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllNftDataResponse {
  nftData: NftData[];
  pagination?: PageResponse;
}
export interface QueryAllNftDataResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataResponse";
  value: Uint8Array;
}
export interface QueryAllNftDataResponseAmino {
  nftData?: NftDataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllNftDataResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataResponse";
  value: QueryAllNftDataResponseAmino;
}
export interface QueryAllNftDataResponseSDKType {
  nftData: NftDataSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetActionByRefIdRequest {
  refId: string;
}
export interface QueryGetActionByRefIdRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdRequest";
  value: Uint8Array;
}
export interface QueryGetActionByRefIdRequestAmino {
  refId?: string;
}
export interface QueryGetActionByRefIdRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdRequest";
  value: QueryGetActionByRefIdRequestAmino;
}
export interface QueryGetActionByRefIdRequestSDKType {
  refId: string;
}
export interface QueryGetActionByRefIdResponse {
  actionByRefId: ActionByRefId;
}
export interface QueryGetActionByRefIdResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdResponse";
  value: Uint8Array;
}
export interface QueryGetActionByRefIdResponseAmino {
  actionByRefId?: ActionByRefIdAmino;
}
export interface QueryGetActionByRefIdResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdResponse";
  value: QueryGetActionByRefIdResponseAmino;
}
export interface QueryGetActionByRefIdResponseSDKType {
  actionByRefId: ActionByRefIdSDKType;
}
export interface QueryAllActionByRefIdRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionByRefIdRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdRequest";
  value: Uint8Array;
}
export interface QueryAllActionByRefIdRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionByRefIdRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdRequest";
  value: QueryAllActionByRefIdRequestAmino;
}
export interface QueryAllActionByRefIdRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionByRefIdResponse {
  actionByRefId: ActionByRefId[];
  pagination?: PageResponse;
}
export interface QueryAllActionByRefIdResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdResponse";
  value: Uint8Array;
}
export interface QueryAllActionByRefIdResponseAmino {
  actionByRefId?: ActionByRefIdAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionByRefIdResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdResponse";
  value: QueryAllActionByRefIdResponseAmino;
}
export interface QueryAllActionByRefIdResponseSDKType {
  actionByRefId: ActionByRefIdSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOrganizationRequest {
  name: string;
}
export interface QueryGetOrganizationRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationRequest";
  value: Uint8Array;
}
export interface QueryGetOrganizationRequestAmino {
  name?: string;
}
export interface QueryGetOrganizationRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationRequest";
  value: QueryGetOrganizationRequestAmino;
}
export interface QueryGetOrganizationRequestSDKType {
  name: string;
}
export interface QueryGetOrganizationResponse {
  organization: Organization;
}
export interface QueryGetOrganizationResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationResponse";
  value: Uint8Array;
}
export interface QueryGetOrganizationResponseAmino {
  organization?: OrganizationAmino;
}
export interface QueryGetOrganizationResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationResponse";
  value: QueryGetOrganizationResponseAmino;
}
export interface QueryGetOrganizationResponseSDKType {
  organization: OrganizationSDKType;
}
export interface QueryAllOrganizationRequest {
  pagination?: PageRequest;
}
export interface QueryAllOrganizationRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationRequest";
  value: Uint8Array;
}
export interface QueryAllOrganizationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllOrganizationRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationRequest";
  value: QueryAllOrganizationRequestAmino;
}
export interface QueryAllOrganizationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOrganizationResponse {
  organization: Organization[];
  pagination?: PageResponse;
}
export interface QueryAllOrganizationResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationResponse";
  value: Uint8Array;
}
export interface QueryAllOrganizationResponseAmino {
  organization?: OrganizationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllOrganizationResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationResponse";
  value: QueryAllOrganizationResponseAmino;
}
export interface QueryAllOrganizationResponseSDKType {
  organization: OrganizationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNftCollectionRequest {
  nftSchemaCode: string;
  pagination?: PageRequest;
}
export interface QueryGetNftCollectionRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionRequest";
  value: Uint8Array;
}
export interface QueryGetNftCollectionRequestAmino {
  nftSchemaCode?: string;
  pagination?: PageRequestAmino;
}
export interface QueryGetNftCollectionRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionRequest";
  value: QueryGetNftCollectionRequestAmino;
}
export interface QueryGetNftCollectionRequestSDKType {
  nftSchemaCode: string;
  pagination?: PageRequestSDKType;
}
export interface QueryGetNftCollectionResponse {
  nftCollection?: NftData[];
  pagination?: PageResponse;
}
export interface QueryGetNftCollectionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionResponse";
  value: Uint8Array;
}
export interface QueryGetNftCollectionResponseAmino {
  nftCollection?: NftDataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGetNftCollectionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionResponse";
  value: QueryGetNftCollectionResponseAmino;
}
export interface QueryGetNftCollectionResponseSDKType {
  nftCollection?: NftDataSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNFTSchemaByContractRequest {
  originContractAddress: string;
}
export interface QueryGetNFTSchemaByContractRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractRequest";
  value: Uint8Array;
}
export interface QueryGetNFTSchemaByContractRequestAmino {
  originContractAddress?: string;
}
export interface QueryGetNFTSchemaByContractRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractRequest";
  value: QueryGetNFTSchemaByContractRequestAmino;
}
export interface QueryGetNFTSchemaByContractRequestSDKType {
  originContractAddress: string;
}
export interface QueryGetNFTSchemaByContractResponse {
  nFTSchemaByContract: NFTSchemaByContract;
}
export interface QueryGetNFTSchemaByContractResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractResponse";
  value: Uint8Array;
}
export interface QueryGetNFTSchemaByContractResponseAmino {
  nFTSchemaByContract?: NFTSchemaByContractAmino;
}
export interface QueryGetNFTSchemaByContractResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractResponse";
  value: QueryGetNFTSchemaByContractResponseAmino;
}
export interface QueryGetNFTSchemaByContractResponseSDKType {
  nFTSchemaByContract: NFTSchemaByContractSDKType;
}
export interface QueryAllNFTSchemaByContractRequest {
  pagination?: PageRequest;
}
export interface QueryAllNFTSchemaByContractRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractRequest";
  value: Uint8Array;
}
export interface QueryAllNFTSchemaByContractRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllNFTSchemaByContractRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractRequest";
  value: QueryAllNFTSchemaByContractRequestAmino;
}
export interface QueryAllNFTSchemaByContractRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllNFTSchemaByContractResponse {
  nFTSchemaByContract: NFTSchemaByContract[];
  pagination?: PageResponse;
}
export interface QueryAllNFTSchemaByContractResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractResponse";
  value: Uint8Array;
}
export interface QueryAllNFTSchemaByContractResponseAmino {
  nFTSchemaByContract?: NFTSchemaByContractAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllNFTSchemaByContractResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractResponse";
  value: QueryAllNFTSchemaByContractResponseAmino;
}
export interface QueryAllNFTSchemaByContractResponseSDKType {
  nFTSchemaByContract: NFTSchemaByContractSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNFTFeeConfigRequest {}
export interface QueryGetNFTFeeConfigRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigRequest";
  value: Uint8Array;
}
export interface QueryGetNFTFeeConfigRequestAmino {}
export interface QueryGetNFTFeeConfigRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigRequest";
  value: QueryGetNFTFeeConfigRequestAmino;
}
export interface QueryGetNFTFeeConfigRequestSDKType {}
export interface QueryGetNFTFeeConfigResponse {
  nFTFeeConfig: NFTFeeConfig;
}
export interface QueryGetNFTFeeConfigResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigResponse";
  value: Uint8Array;
}
export interface QueryGetNFTFeeConfigResponseAmino {
  NFTFeeConfig?: NFTFeeConfigAmino;
}
export interface QueryGetNFTFeeConfigResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigResponse";
  value: QueryGetNFTFeeConfigResponseAmino;
}
export interface QueryGetNFTFeeConfigResponseSDKType {
  NFTFeeConfig: NFTFeeConfigSDKType;
}
export interface QueryGetNFTFeeBalanceRequest {}
export interface QueryGetNFTFeeBalanceRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceRequest";
  value: Uint8Array;
}
export interface QueryGetNFTFeeBalanceRequestAmino {}
export interface QueryGetNFTFeeBalanceRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceRequest";
  value: QueryGetNFTFeeBalanceRequestAmino;
}
export interface QueryGetNFTFeeBalanceRequestSDKType {}
export interface QueryGetNFTFeeBalanceResponse {
  nFTFeeBalance: NFTFeeBalance;
}
export interface QueryGetNFTFeeBalanceResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceResponse";
  value: Uint8Array;
}
export interface QueryGetNFTFeeBalanceResponseAmino {
  NFTFeeBalance?: NFTFeeBalanceAmino;
}
export interface QueryGetNFTFeeBalanceResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceResponse";
  value: QueryGetNFTFeeBalanceResponseAmino;
}
export interface QueryGetNFTFeeBalanceResponseSDKType {
  NFTFeeBalance: NFTFeeBalanceSDKType;
}
export interface QueryGetMetadataCreatorRequest {
  nftSchemaCode: string;
}
export interface QueryGetMetadataCreatorRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorRequest";
  value: Uint8Array;
}
export interface QueryGetMetadataCreatorRequestAmino {
  nftSchemaCode?: string;
}
export interface QueryGetMetadataCreatorRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorRequest";
  value: QueryGetMetadataCreatorRequestAmino;
}
export interface QueryGetMetadataCreatorRequestSDKType {
  nftSchemaCode: string;
}
export interface QueryGetMetadataCreatorResponse {
  metadataCreator: MetadataCreator;
}
export interface QueryGetMetadataCreatorResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorResponse";
  value: Uint8Array;
}
export interface QueryGetMetadataCreatorResponseAmino {
  metadataCreator?: MetadataCreatorAmino;
}
export interface QueryGetMetadataCreatorResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorResponse";
  value: QueryGetMetadataCreatorResponseAmino;
}
export interface QueryGetMetadataCreatorResponseSDKType {
  metadataCreator: MetadataCreatorSDKType;
}
export interface QueryAllMetadataCreatorRequest {
  pagination?: PageRequest;
}
export interface QueryAllMetadataCreatorRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorRequest";
  value: Uint8Array;
}
export interface QueryAllMetadataCreatorRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMetadataCreatorRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorRequest";
  value: QueryAllMetadataCreatorRequestAmino;
}
export interface QueryAllMetadataCreatorRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMetadataCreatorResponse {
  metadataCreator: MetadataCreator[];
  pagination?: PageResponse;
}
export interface QueryAllMetadataCreatorResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorResponse";
  value: Uint8Array;
}
export interface QueryAllMetadataCreatorResponseAmino {
  metadataCreator?: MetadataCreatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMetadataCreatorResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorResponse";
  value: QueryAllMetadataCreatorResponseAmino;
}
export interface QueryAllMetadataCreatorResponseSDKType {
  metadataCreator: MetadataCreatorSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryParamsRequest",
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
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryParamsRequest",
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
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryParamsResponse",
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
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaRequest(): QueryGetNFTSchemaRequest {
  return {
    code: ""
  };
}
export const QueryGetNFTSchemaRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaRequest",
  encode(message: QueryGetNFTSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaRequest>): QueryGetNFTSchemaRequest {
    const message = createBaseQueryGetNFTSchemaRequest();
    message.code = object.code ?? "";
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaRequestAmino): QueryGetNFTSchemaRequest {
    const message = createBaseQueryGetNFTSchemaRequest();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaRequest): QueryGetNFTSchemaRequestAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaRequestAminoMsg): QueryGetNFTSchemaRequest {
    return QueryGetNFTSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaRequestProtoMsg): QueryGetNFTSchemaRequest {
    return QueryGetNFTSchemaRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaRequest): Uint8Array {
    return QueryGetNFTSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaRequest): QueryGetNFTSchemaRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaRequest",
      value: QueryGetNFTSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaResponse(): QueryGetNFTSchemaResponse {
  return {
    nFTSchema: NFTSchema.fromPartial({})
  };
}
export const QueryGetNFTSchemaResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaResponse",
  encode(message: QueryGetNFTSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTSchema !== undefined) {
      NFTSchema.encode(message.nFTSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchema = NFTSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaResponse>): QueryGetNFTSchemaResponse {
    const message = createBaseQueryGetNFTSchemaResponse();
    message.nFTSchema = object.nFTSchema !== undefined && object.nFTSchema !== null ? NFTSchema.fromPartial(object.nFTSchema) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaResponseAmino): QueryGetNFTSchemaResponse {
    const message = createBaseQueryGetNFTSchemaResponse();
    if (object.nFTSchema !== undefined && object.nFTSchema !== null) {
      message.nFTSchema = NFTSchema.fromAmino(object.nFTSchema);
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaResponse): QueryGetNFTSchemaResponseAmino {
    const obj: any = {};
    obj.nFTSchema = message.nFTSchema ? NFTSchema.toAmino(message.nFTSchema) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaResponseAminoMsg): QueryGetNFTSchemaResponse {
    return QueryGetNFTSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaResponseProtoMsg): QueryGetNFTSchemaResponse {
    return QueryGetNFTSchemaResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaResponse): Uint8Array {
    return QueryGetNFTSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaResponse): QueryGetNFTSchemaResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaResponse",
      value: QueryGetNFTSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaRequest(): QueryAllNFTSchemaRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllNFTSchemaRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaRequest",
  encode(message: QueryAllNFTSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaRequest();
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
  fromPartial(object: Partial<QueryAllNFTSchemaRequest>): QueryAllNFTSchemaRequest {
    const message = createBaseQueryAllNFTSchemaRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaRequestAmino): QueryAllNFTSchemaRequest {
    const message = createBaseQueryAllNFTSchemaRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaRequest): QueryAllNFTSchemaRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaRequestAminoMsg): QueryAllNFTSchemaRequest {
    return QueryAllNFTSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaRequestProtoMsg): QueryAllNFTSchemaRequest {
    return QueryAllNFTSchemaRequest.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaRequest): Uint8Array {
    return QueryAllNFTSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaRequest): QueryAllNFTSchemaRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaRequest",
      value: QueryAllNFTSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaResponse(): QueryAllNFTSchemaResponse {
  return {
    nFTSchema: [],
    pagination: undefined
  };
}
export const QueryAllNFTSchemaResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaResponse",
  encode(message: QueryAllNFTSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nFTSchema) {
      NFTSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchema.push(NFTSchema.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllNFTSchemaResponse>): QueryAllNFTSchemaResponse {
    const message = createBaseQueryAllNFTSchemaResponse();
    message.nFTSchema = object.nFTSchema?.map(e => NFTSchema.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaResponseAmino): QueryAllNFTSchemaResponse {
    const message = createBaseQueryAllNFTSchemaResponse();
    message.nFTSchema = object.nFTSchema?.map(e => NFTSchema.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaResponse): QueryAllNFTSchemaResponseAmino {
    const obj: any = {};
    if (message.nFTSchema) {
      obj.nFTSchema = message.nFTSchema.map(e => e ? NFTSchema.toAmino(e) : undefined);
    } else {
      obj.nFTSchema = message.nFTSchema;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaResponseAminoMsg): QueryAllNFTSchemaResponse {
    return QueryAllNFTSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaResponseProtoMsg): QueryAllNFTSchemaResponse {
    return QueryAllNFTSchemaResponse.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaResponse): Uint8Array {
    return QueryAllNFTSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaResponse): QueryAllNFTSchemaResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaResponse",
      value: QueryAllNFTSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftDataRequest(): QueryGetNftDataRequest {
  return {
    nftSchemaCode: "",
    tokenId: ""
  };
}
export const QueryGetNftDataRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataRequest",
  encode(message: QueryGetNftDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftDataRequest>): QueryGetNftDataRequest {
    const message = createBaseQueryGetNftDataRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromAmino(object: QueryGetNftDataRequestAmino): QueryGetNftDataRequest {
    const message = createBaseQueryGetNftDataRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: QueryGetNftDataRequest): QueryGetNftDataRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftDataRequestAminoMsg): QueryGetNftDataRequest {
    return QueryGetNftDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftDataRequestProtoMsg): QueryGetNftDataRequest {
    return QueryGetNftDataRequest.decode(message.value);
  },
  toProto(message: QueryGetNftDataRequest): Uint8Array {
    return QueryGetNftDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftDataRequest): QueryGetNftDataRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataRequest",
      value: QueryGetNftDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftDataResponse(): QueryGetNftDataResponse {
  return {
    nftData: NftData.fromPartial({})
  };
}
export const QueryGetNftDataResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataResponse",
  encode(message: QueryGetNftDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftData !== undefined) {
      NftData.encode(message.nftData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftData = NftData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftDataResponse>): QueryGetNftDataResponse {
    const message = createBaseQueryGetNftDataResponse();
    message.nftData = object.nftData !== undefined && object.nftData !== null ? NftData.fromPartial(object.nftData) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNftDataResponseAmino): QueryGetNftDataResponse {
    const message = createBaseQueryGetNftDataResponse();
    if (object.nftData !== undefined && object.nftData !== null) {
      message.nftData = NftData.fromAmino(object.nftData);
    }
    return message;
  },
  toAmino(message: QueryGetNftDataResponse): QueryGetNftDataResponseAmino {
    const obj: any = {};
    obj.nftData = message.nftData ? NftData.toAmino(message.nftData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftDataResponseAminoMsg): QueryGetNftDataResponse {
    return QueryGetNftDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftDataResponseProtoMsg): QueryGetNftDataResponse {
    return QueryGetNftDataResponse.decode(message.value);
  },
  toProto(message: QueryGetNftDataResponse): Uint8Array {
    return QueryGetNftDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftDataResponse): QueryGetNftDataResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftDataResponse",
      value: QueryGetNftDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllNftDataRequest(): QueryAllNftDataRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllNftDataRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataRequest",
  encode(message: QueryAllNftDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNftDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNftDataRequest();
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
  fromPartial(object: Partial<QueryAllNftDataRequest>): QueryAllNftDataRequest {
    const message = createBaseQueryAllNftDataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNftDataRequestAmino): QueryAllNftDataRequest {
    const message = createBaseQueryAllNftDataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNftDataRequest): QueryAllNftDataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNftDataRequestAminoMsg): QueryAllNftDataRequest {
    return QueryAllNftDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNftDataRequestProtoMsg): QueryAllNftDataRequest {
    return QueryAllNftDataRequest.decode(message.value);
  },
  toProto(message: QueryAllNftDataRequest): Uint8Array {
    return QueryAllNftDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNftDataRequest): QueryAllNftDataRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataRequest",
      value: QueryAllNftDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllNftDataResponse(): QueryAllNftDataResponse {
  return {
    nftData: [],
    pagination: undefined
  };
}
export const QueryAllNftDataResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataResponse",
  encode(message: QueryAllNftDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nftData) {
      NftData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNftDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNftDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftData.push(NftData.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllNftDataResponse>): QueryAllNftDataResponse {
    const message = createBaseQueryAllNftDataResponse();
    message.nftData = object.nftData?.map(e => NftData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNftDataResponseAmino): QueryAllNftDataResponse {
    const message = createBaseQueryAllNftDataResponse();
    message.nftData = object.nftData?.map(e => NftData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNftDataResponse): QueryAllNftDataResponseAmino {
    const obj: any = {};
    if (message.nftData) {
      obj.nftData = message.nftData.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftData = message.nftData;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNftDataResponseAminoMsg): QueryAllNftDataResponse {
    return QueryAllNftDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNftDataResponseProtoMsg): QueryAllNftDataResponse {
    return QueryAllNftDataResponse.decode(message.value);
  },
  toProto(message: QueryAllNftDataResponse): Uint8Array {
    return QueryAllNftDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNftDataResponse): QueryAllNftDataResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNftDataResponse",
      value: QueryAllNftDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionByRefIdRequest(): QueryGetActionByRefIdRequest {
  return {
    refId: ""
  };
}
export const QueryGetActionByRefIdRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdRequest",
  encode(message: QueryGetActionByRefIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refId !== "") {
      writer.uint32(10).string(message.refId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionByRefIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionByRefIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionByRefIdRequest>): QueryGetActionByRefIdRequest {
    const message = createBaseQueryGetActionByRefIdRequest();
    message.refId = object.refId ?? "";
    return message;
  },
  fromAmino(object: QueryGetActionByRefIdRequestAmino): QueryGetActionByRefIdRequest {
    const message = createBaseQueryGetActionByRefIdRequest();
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    return message;
  },
  toAmino(message: QueryGetActionByRefIdRequest): QueryGetActionByRefIdRequestAmino {
    const obj: any = {};
    obj.refId = message.refId === "" ? undefined : message.refId;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionByRefIdRequestAminoMsg): QueryGetActionByRefIdRequest {
    return QueryGetActionByRefIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionByRefIdRequestProtoMsg): QueryGetActionByRefIdRequest {
    return QueryGetActionByRefIdRequest.decode(message.value);
  },
  toProto(message: QueryGetActionByRefIdRequest): Uint8Array {
    return QueryGetActionByRefIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionByRefIdRequest): QueryGetActionByRefIdRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdRequest",
      value: QueryGetActionByRefIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionByRefIdResponse(): QueryGetActionByRefIdResponse {
  return {
    actionByRefId: ActionByRefId.fromPartial({})
  };
}
export const QueryGetActionByRefIdResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdResponse",
  encode(message: QueryGetActionByRefIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionByRefId !== undefined) {
      ActionByRefId.encode(message.actionByRefId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionByRefIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionByRefIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionByRefId = ActionByRefId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionByRefIdResponse>): QueryGetActionByRefIdResponse {
    const message = createBaseQueryGetActionByRefIdResponse();
    message.actionByRefId = object.actionByRefId !== undefined && object.actionByRefId !== null ? ActionByRefId.fromPartial(object.actionByRefId) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionByRefIdResponseAmino): QueryGetActionByRefIdResponse {
    const message = createBaseQueryGetActionByRefIdResponse();
    if (object.actionByRefId !== undefined && object.actionByRefId !== null) {
      message.actionByRefId = ActionByRefId.fromAmino(object.actionByRefId);
    }
    return message;
  },
  toAmino(message: QueryGetActionByRefIdResponse): QueryGetActionByRefIdResponseAmino {
    const obj: any = {};
    obj.actionByRefId = message.actionByRefId ? ActionByRefId.toAmino(message.actionByRefId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionByRefIdResponseAminoMsg): QueryGetActionByRefIdResponse {
    return QueryGetActionByRefIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionByRefIdResponseProtoMsg): QueryGetActionByRefIdResponse {
    return QueryGetActionByRefIdResponse.decode(message.value);
  },
  toProto(message: QueryGetActionByRefIdResponse): Uint8Array {
    return QueryGetActionByRefIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionByRefIdResponse): QueryGetActionByRefIdResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetActionByRefIdResponse",
      value: QueryGetActionByRefIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionByRefIdRequest(): QueryAllActionByRefIdRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionByRefIdRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdRequest",
  encode(message: QueryAllActionByRefIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionByRefIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionByRefIdRequest();
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
  fromPartial(object: Partial<QueryAllActionByRefIdRequest>): QueryAllActionByRefIdRequest {
    const message = createBaseQueryAllActionByRefIdRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionByRefIdRequestAmino): QueryAllActionByRefIdRequest {
    const message = createBaseQueryAllActionByRefIdRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionByRefIdRequest): QueryAllActionByRefIdRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionByRefIdRequestAminoMsg): QueryAllActionByRefIdRequest {
    return QueryAllActionByRefIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionByRefIdRequestProtoMsg): QueryAllActionByRefIdRequest {
    return QueryAllActionByRefIdRequest.decode(message.value);
  },
  toProto(message: QueryAllActionByRefIdRequest): Uint8Array {
    return QueryAllActionByRefIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionByRefIdRequest): QueryAllActionByRefIdRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdRequest",
      value: QueryAllActionByRefIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionByRefIdResponse(): QueryAllActionByRefIdResponse {
  return {
    actionByRefId: [],
    pagination: undefined
  };
}
export const QueryAllActionByRefIdResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdResponse",
  encode(message: QueryAllActionByRefIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionByRefId) {
      ActionByRefId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionByRefIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionByRefIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionByRefId.push(ActionByRefId.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllActionByRefIdResponse>): QueryAllActionByRefIdResponse {
    const message = createBaseQueryAllActionByRefIdResponse();
    message.actionByRefId = object.actionByRefId?.map(e => ActionByRefId.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionByRefIdResponseAmino): QueryAllActionByRefIdResponse {
    const message = createBaseQueryAllActionByRefIdResponse();
    message.actionByRefId = object.actionByRefId?.map(e => ActionByRefId.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionByRefIdResponse): QueryAllActionByRefIdResponseAmino {
    const obj: any = {};
    if (message.actionByRefId) {
      obj.actionByRefId = message.actionByRefId.map(e => e ? ActionByRefId.toAmino(e) : undefined);
    } else {
      obj.actionByRefId = message.actionByRefId;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionByRefIdResponseAminoMsg): QueryAllActionByRefIdResponse {
    return QueryAllActionByRefIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionByRefIdResponseProtoMsg): QueryAllActionByRefIdResponse {
    return QueryAllActionByRefIdResponse.decode(message.value);
  },
  toProto(message: QueryAllActionByRefIdResponse): Uint8Array {
    return QueryAllActionByRefIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionByRefIdResponse): QueryAllActionByRefIdResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllActionByRefIdResponse",
      value: QueryAllActionByRefIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrganizationRequest(): QueryGetOrganizationRequest {
  return {
    name: ""
  };
}
export const QueryGetOrganizationRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationRequest",
  encode(message: QueryGetOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrganizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrganizationRequest();
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
  fromPartial(object: Partial<QueryGetOrganizationRequest>): QueryGetOrganizationRequest {
    const message = createBaseQueryGetOrganizationRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetOrganizationRequestAmino): QueryGetOrganizationRequest {
    const message = createBaseQueryGetOrganizationRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetOrganizationRequest): QueryGetOrganizationRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrganizationRequestAminoMsg): QueryGetOrganizationRequest {
    return QueryGetOrganizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrganizationRequestProtoMsg): QueryGetOrganizationRequest {
    return QueryGetOrganizationRequest.decode(message.value);
  },
  toProto(message: QueryGetOrganizationRequest): Uint8Array {
    return QueryGetOrganizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrganizationRequest): QueryGetOrganizationRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationRequest",
      value: QueryGetOrganizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrganizationResponse(): QueryGetOrganizationResponse {
  return {
    organization: Organization.fromPartial({})
  };
}
export const QueryGetOrganizationResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationResponse",
  encode(message: QueryGetOrganizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organization !== undefined) {
      Organization.encode(message.organization, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrganizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrganizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetOrganizationResponse>): QueryGetOrganizationResponse {
    const message = createBaseQueryGetOrganizationResponse();
    message.organization = object.organization !== undefined && object.organization !== null ? Organization.fromPartial(object.organization) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOrganizationResponseAmino): QueryGetOrganizationResponse {
    const message = createBaseQueryGetOrganizationResponse();
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromAmino(object.organization);
    }
    return message;
  },
  toAmino(message: QueryGetOrganizationResponse): QueryGetOrganizationResponseAmino {
    const obj: any = {};
    obj.organization = message.organization ? Organization.toAmino(message.organization) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrganizationResponseAminoMsg): QueryGetOrganizationResponse {
    return QueryGetOrganizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrganizationResponseProtoMsg): QueryGetOrganizationResponse {
    return QueryGetOrganizationResponse.decode(message.value);
  },
  toProto(message: QueryGetOrganizationResponse): Uint8Array {
    return QueryGetOrganizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrganizationResponse): QueryGetOrganizationResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetOrganizationResponse",
      value: QueryGetOrganizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrganizationRequest(): QueryAllOrganizationRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOrganizationRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationRequest",
  encode(message: QueryAllOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrganizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrganizationRequest();
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
  fromPartial(object: Partial<QueryAllOrganizationRequest>): QueryAllOrganizationRequest {
    const message = createBaseQueryAllOrganizationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrganizationRequestAmino): QueryAllOrganizationRequest {
    const message = createBaseQueryAllOrganizationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrganizationRequest): QueryAllOrganizationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrganizationRequestAminoMsg): QueryAllOrganizationRequest {
    return QueryAllOrganizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrganizationRequestProtoMsg): QueryAllOrganizationRequest {
    return QueryAllOrganizationRequest.decode(message.value);
  },
  toProto(message: QueryAllOrganizationRequest): Uint8Array {
    return QueryAllOrganizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrganizationRequest): QueryAllOrganizationRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationRequest",
      value: QueryAllOrganizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrganizationResponse(): QueryAllOrganizationResponse {
  return {
    organization: [],
    pagination: undefined
  };
}
export const QueryAllOrganizationResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationResponse",
  encode(message: QueryAllOrganizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.organization) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrganizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrganizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization.push(Organization.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllOrganizationResponse>): QueryAllOrganizationResponse {
    const message = createBaseQueryAllOrganizationResponse();
    message.organization = object.organization?.map(e => Organization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrganizationResponseAmino): QueryAllOrganizationResponse {
    const message = createBaseQueryAllOrganizationResponse();
    message.organization = object.organization?.map(e => Organization.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrganizationResponse): QueryAllOrganizationResponseAmino {
    const obj: any = {};
    if (message.organization) {
      obj.organization = message.organization.map(e => e ? Organization.toAmino(e) : undefined);
    } else {
      obj.organization = message.organization;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrganizationResponseAminoMsg): QueryAllOrganizationResponse {
    return QueryAllOrganizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrganizationResponseProtoMsg): QueryAllOrganizationResponse {
    return QueryAllOrganizationResponse.decode(message.value);
  },
  toProto(message: QueryAllOrganizationResponse): Uint8Array {
    return QueryAllOrganizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrganizationResponse): QueryAllOrganizationResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllOrganizationResponse",
      value: QueryAllOrganizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftCollectionRequest(): QueryGetNftCollectionRequest {
  return {
    nftSchemaCode: "",
    pagination: undefined
  };
}
export const QueryGetNftCollectionRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionRequest",
  encode(message: QueryGetNftCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftCollectionRequest>): QueryGetNftCollectionRequest {
    const message = createBaseQueryGetNftCollectionRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNftCollectionRequestAmino): QueryGetNftCollectionRequest {
    const message = createBaseQueryGetNftCollectionRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetNftCollectionRequest): QueryGetNftCollectionRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftCollectionRequestAminoMsg): QueryGetNftCollectionRequest {
    return QueryGetNftCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftCollectionRequestProtoMsg): QueryGetNftCollectionRequest {
    return QueryGetNftCollectionRequest.decode(message.value);
  },
  toProto(message: QueryGetNftCollectionRequest): Uint8Array {
    return QueryGetNftCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftCollectionRequest): QueryGetNftCollectionRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionRequest",
      value: QueryGetNftCollectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftCollectionResponse(): QueryGetNftCollectionResponse {
  return {
    nftCollection: [],
    pagination: undefined
  };
}
export const QueryGetNftCollectionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionResponse",
  encode(message: QueryGetNftCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nftCollection) {
      NftData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftCollection.push(NftData.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryGetNftCollectionResponse>): QueryGetNftCollectionResponse {
    const message = createBaseQueryGetNftCollectionResponse();
    message.nftCollection = object.nftCollection?.map(e => NftData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNftCollectionResponseAmino): QueryGetNftCollectionResponse {
    const message = createBaseQueryGetNftCollectionResponse();
    message.nftCollection = object.nftCollection?.map(e => NftData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetNftCollectionResponse): QueryGetNftCollectionResponseAmino {
    const obj: any = {};
    if (message.nftCollection) {
      obj.nftCollection = message.nftCollection.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftCollection = message.nftCollection;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftCollectionResponseAminoMsg): QueryGetNftCollectionResponse {
    return QueryGetNftCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftCollectionResponseProtoMsg): QueryGetNftCollectionResponse {
    return QueryGetNftCollectionResponse.decode(message.value);
  },
  toProto(message: QueryGetNftCollectionResponse): Uint8Array {
    return QueryGetNftCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftCollectionResponse): QueryGetNftCollectionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNftCollectionResponse",
      value: QueryGetNftCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaByContractRequest(): QueryGetNFTSchemaByContractRequest {
  return {
    originContractAddress: ""
  };
}
export const QueryGetNFTSchemaByContractRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractRequest",
  encode(message: QueryGetNFTSchemaByContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originContractAddress !== "") {
      writer.uint32(10).string(message.originContractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaByContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaByContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaByContractRequest>): QueryGetNFTSchemaByContractRequest {
    const message = createBaseQueryGetNFTSchemaByContractRequest();
    message.originContractAddress = object.originContractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaByContractRequestAmino): QueryGetNFTSchemaByContractRequest {
    const message = createBaseQueryGetNFTSchemaByContractRequest();
    if (object.originContractAddress !== undefined && object.originContractAddress !== null) {
      message.originContractAddress = object.originContractAddress;
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaByContractRequest): QueryGetNFTSchemaByContractRequestAmino {
    const obj: any = {};
    obj.originContractAddress = message.originContractAddress === "" ? undefined : message.originContractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaByContractRequestAminoMsg): QueryGetNFTSchemaByContractRequest {
    return QueryGetNFTSchemaByContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaByContractRequestProtoMsg): QueryGetNFTSchemaByContractRequest {
    return QueryGetNFTSchemaByContractRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaByContractRequest): Uint8Array {
    return QueryGetNFTSchemaByContractRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaByContractRequest): QueryGetNFTSchemaByContractRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractRequest",
      value: QueryGetNFTSchemaByContractRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaByContractResponse(): QueryGetNFTSchemaByContractResponse {
  return {
    nFTSchemaByContract: NFTSchemaByContract.fromPartial({})
  };
}
export const QueryGetNFTSchemaByContractResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractResponse",
  encode(message: QueryGetNFTSchemaByContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTSchemaByContract !== undefined) {
      NFTSchemaByContract.encode(message.nFTSchemaByContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaByContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaByContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchemaByContract = NFTSchemaByContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaByContractResponse>): QueryGetNFTSchemaByContractResponse {
    const message = createBaseQueryGetNFTSchemaByContractResponse();
    message.nFTSchemaByContract = object.nFTSchemaByContract !== undefined && object.nFTSchemaByContract !== null ? NFTSchemaByContract.fromPartial(object.nFTSchemaByContract) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaByContractResponseAmino): QueryGetNFTSchemaByContractResponse {
    const message = createBaseQueryGetNFTSchemaByContractResponse();
    if (object.nFTSchemaByContract !== undefined && object.nFTSchemaByContract !== null) {
      message.nFTSchemaByContract = NFTSchemaByContract.fromAmino(object.nFTSchemaByContract);
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaByContractResponse): QueryGetNFTSchemaByContractResponseAmino {
    const obj: any = {};
    obj.nFTSchemaByContract = message.nFTSchemaByContract ? NFTSchemaByContract.toAmino(message.nFTSchemaByContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaByContractResponseAminoMsg): QueryGetNFTSchemaByContractResponse {
    return QueryGetNFTSchemaByContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaByContractResponseProtoMsg): QueryGetNFTSchemaByContractResponse {
    return QueryGetNFTSchemaByContractResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaByContractResponse): Uint8Array {
    return QueryGetNFTSchemaByContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaByContractResponse): QueryGetNFTSchemaByContractResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTSchemaByContractResponse",
      value: QueryGetNFTSchemaByContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaByContractRequest(): QueryAllNFTSchemaByContractRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllNFTSchemaByContractRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractRequest",
  encode(message: QueryAllNFTSchemaByContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaByContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaByContractRequest();
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
  fromPartial(object: Partial<QueryAllNFTSchemaByContractRequest>): QueryAllNFTSchemaByContractRequest {
    const message = createBaseQueryAllNFTSchemaByContractRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaByContractRequestAmino): QueryAllNFTSchemaByContractRequest {
    const message = createBaseQueryAllNFTSchemaByContractRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaByContractRequest): QueryAllNFTSchemaByContractRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaByContractRequestAminoMsg): QueryAllNFTSchemaByContractRequest {
    return QueryAllNFTSchemaByContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaByContractRequestProtoMsg): QueryAllNFTSchemaByContractRequest {
    return QueryAllNFTSchemaByContractRequest.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaByContractRequest): Uint8Array {
    return QueryAllNFTSchemaByContractRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaByContractRequest): QueryAllNFTSchemaByContractRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractRequest",
      value: QueryAllNFTSchemaByContractRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaByContractResponse(): QueryAllNFTSchemaByContractResponse {
  return {
    nFTSchemaByContract: [],
    pagination: undefined
  };
}
export const QueryAllNFTSchemaByContractResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractResponse",
  encode(message: QueryAllNFTSchemaByContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nFTSchemaByContract) {
      NFTSchemaByContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaByContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaByContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTSchemaByContract.push(NFTSchemaByContract.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllNFTSchemaByContractResponse>): QueryAllNFTSchemaByContractResponse {
    const message = createBaseQueryAllNFTSchemaByContractResponse();
    message.nFTSchemaByContract = object.nFTSchemaByContract?.map(e => NFTSchemaByContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaByContractResponseAmino): QueryAllNFTSchemaByContractResponse {
    const message = createBaseQueryAllNFTSchemaByContractResponse();
    message.nFTSchemaByContract = object.nFTSchemaByContract?.map(e => NFTSchemaByContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaByContractResponse): QueryAllNFTSchemaByContractResponseAmino {
    const obj: any = {};
    if (message.nFTSchemaByContract) {
      obj.nFTSchemaByContract = message.nFTSchemaByContract.map(e => e ? NFTSchemaByContract.toAmino(e) : undefined);
    } else {
      obj.nFTSchemaByContract = message.nFTSchemaByContract;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaByContractResponseAminoMsg): QueryAllNFTSchemaByContractResponse {
    return QueryAllNFTSchemaByContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaByContractResponseProtoMsg): QueryAllNFTSchemaByContractResponse {
    return QueryAllNFTSchemaByContractResponse.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaByContractResponse): Uint8Array {
    return QueryAllNFTSchemaByContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaByContractResponse): QueryAllNFTSchemaByContractResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllNFTSchemaByContractResponse",
      value: QueryAllNFTSchemaByContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeConfigRequest(): QueryGetNFTFeeConfigRequest {
  return {};
}
export const QueryGetNFTFeeConfigRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigRequest",
  encode(_: QueryGetNFTFeeConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeConfigRequest();
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
  fromPartial(_: Partial<QueryGetNFTFeeConfigRequest>): QueryGetNFTFeeConfigRequest {
    const message = createBaseQueryGetNFTFeeConfigRequest();
    return message;
  },
  fromAmino(_: QueryGetNFTFeeConfigRequestAmino): QueryGetNFTFeeConfigRequest {
    const message = createBaseQueryGetNFTFeeConfigRequest();
    return message;
  },
  toAmino(_: QueryGetNFTFeeConfigRequest): QueryGetNFTFeeConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeConfigRequestAminoMsg): QueryGetNFTFeeConfigRequest {
    return QueryGetNFTFeeConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeConfigRequestProtoMsg): QueryGetNFTFeeConfigRequest {
    return QueryGetNFTFeeConfigRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeConfigRequest): Uint8Array {
    return QueryGetNFTFeeConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeConfigRequest): QueryGetNFTFeeConfigRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigRequest",
      value: QueryGetNFTFeeConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeConfigResponse(): QueryGetNFTFeeConfigResponse {
  return {
    nFTFeeConfig: NFTFeeConfig.fromPartial({})
  };
}
export const QueryGetNFTFeeConfigResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigResponse",
  encode(message: QueryGetNFTFeeConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTFeeConfig !== undefined) {
      NFTFeeConfig.encode(message.nFTFeeConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTFeeConfig = NFTFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTFeeConfigResponse>): QueryGetNFTFeeConfigResponse {
    const message = createBaseQueryGetNFTFeeConfigResponse();
    message.nFTFeeConfig = object.nFTFeeConfig !== undefined && object.nFTFeeConfig !== null ? NFTFeeConfig.fromPartial(object.nFTFeeConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTFeeConfigResponseAmino): QueryGetNFTFeeConfigResponse {
    const message = createBaseQueryGetNFTFeeConfigResponse();
    if (object.NFTFeeConfig !== undefined && object.NFTFeeConfig !== null) {
      message.nFTFeeConfig = NFTFeeConfig.fromAmino(object.NFTFeeConfig);
    }
    return message;
  },
  toAmino(message: QueryGetNFTFeeConfigResponse): QueryGetNFTFeeConfigResponseAmino {
    const obj: any = {};
    obj.NFTFeeConfig = message.nFTFeeConfig ? NFTFeeConfig.toAmino(message.nFTFeeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeConfigResponseAminoMsg): QueryGetNFTFeeConfigResponse {
    return QueryGetNFTFeeConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeConfigResponseProtoMsg): QueryGetNFTFeeConfigResponse {
    return QueryGetNFTFeeConfigResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeConfigResponse): Uint8Array {
    return QueryGetNFTFeeConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeConfigResponse): QueryGetNFTFeeConfigResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeConfigResponse",
      value: QueryGetNFTFeeConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeBalanceRequest(): QueryGetNFTFeeBalanceRequest {
  return {};
}
export const QueryGetNFTFeeBalanceRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceRequest",
  encode(_: QueryGetNFTFeeBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeBalanceRequest();
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
  fromPartial(_: Partial<QueryGetNFTFeeBalanceRequest>): QueryGetNFTFeeBalanceRequest {
    const message = createBaseQueryGetNFTFeeBalanceRequest();
    return message;
  },
  fromAmino(_: QueryGetNFTFeeBalanceRequestAmino): QueryGetNFTFeeBalanceRequest {
    const message = createBaseQueryGetNFTFeeBalanceRequest();
    return message;
  },
  toAmino(_: QueryGetNFTFeeBalanceRequest): QueryGetNFTFeeBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeBalanceRequestAminoMsg): QueryGetNFTFeeBalanceRequest {
    return QueryGetNFTFeeBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeBalanceRequestProtoMsg): QueryGetNFTFeeBalanceRequest {
    return QueryGetNFTFeeBalanceRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeBalanceRequest): Uint8Array {
    return QueryGetNFTFeeBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeBalanceRequest): QueryGetNFTFeeBalanceRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceRequest",
      value: QueryGetNFTFeeBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeBalanceResponse(): QueryGetNFTFeeBalanceResponse {
  return {
    nFTFeeBalance: NFTFeeBalance.fromPartial({})
  };
}
export const QueryGetNFTFeeBalanceResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceResponse",
  encode(message: QueryGetNFTFeeBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(message.nFTFeeBalance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTFeeBalanceResponse>): QueryGetNFTFeeBalanceResponse {
    const message = createBaseQueryGetNFTFeeBalanceResponse();
    message.nFTFeeBalance = object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null ? NFTFeeBalance.fromPartial(object.nFTFeeBalance) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTFeeBalanceResponseAmino): QueryGetNFTFeeBalanceResponse {
    const message = createBaseQueryGetNFTFeeBalanceResponse();
    if (object.NFTFeeBalance !== undefined && object.NFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromAmino(object.NFTFeeBalance);
    }
    return message;
  },
  toAmino(message: QueryGetNFTFeeBalanceResponse): QueryGetNFTFeeBalanceResponseAmino {
    const obj: any = {};
    obj.NFTFeeBalance = message.nFTFeeBalance ? NFTFeeBalance.toAmino(message.nFTFeeBalance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeBalanceResponseAminoMsg): QueryGetNFTFeeBalanceResponse {
    return QueryGetNFTFeeBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeBalanceResponseProtoMsg): QueryGetNFTFeeBalanceResponse {
    return QueryGetNFTFeeBalanceResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeBalanceResponse): Uint8Array {
    return QueryGetNFTFeeBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeBalanceResponse): QueryGetNFTFeeBalanceResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetNFTFeeBalanceResponse",
      value: QueryGetNFTFeeBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMetadataCreatorRequest(): QueryGetMetadataCreatorRequest {
  return {
    nftSchemaCode: ""
  };
}
export const QueryGetMetadataCreatorRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorRequest",
  encode(message: QueryGetMetadataCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMetadataCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetadataCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMetadataCreatorRequest>): QueryGetMetadataCreatorRequest {
    const message = createBaseQueryGetMetadataCreatorRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    return message;
  },
  fromAmino(object: QueryGetMetadataCreatorRequestAmino): QueryGetMetadataCreatorRequest {
    const message = createBaseQueryGetMetadataCreatorRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: QueryGetMetadataCreatorRequest): QueryGetMetadataCreatorRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: QueryGetMetadataCreatorRequestAminoMsg): QueryGetMetadataCreatorRequest {
    return QueryGetMetadataCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMetadataCreatorRequestProtoMsg): QueryGetMetadataCreatorRequest {
    return QueryGetMetadataCreatorRequest.decode(message.value);
  },
  toProto(message: QueryGetMetadataCreatorRequest): Uint8Array {
    return QueryGetMetadataCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMetadataCreatorRequest): QueryGetMetadataCreatorRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorRequest",
      value: QueryGetMetadataCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMetadataCreatorResponse(): QueryGetMetadataCreatorResponse {
  return {
    metadataCreator: MetadataCreator.fromPartial({})
  };
}
export const QueryGetMetadataCreatorResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorResponse",
  encode(message: QueryGetMetadataCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadataCreator !== undefined) {
      MetadataCreator.encode(message.metadataCreator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMetadataCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetadataCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataCreator = MetadataCreator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMetadataCreatorResponse>): QueryGetMetadataCreatorResponse {
    const message = createBaseQueryGetMetadataCreatorResponse();
    message.metadataCreator = object.metadataCreator !== undefined && object.metadataCreator !== null ? MetadataCreator.fromPartial(object.metadataCreator) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMetadataCreatorResponseAmino): QueryGetMetadataCreatorResponse {
    const message = createBaseQueryGetMetadataCreatorResponse();
    if (object.metadataCreator !== undefined && object.metadataCreator !== null) {
      message.metadataCreator = MetadataCreator.fromAmino(object.metadataCreator);
    }
    return message;
  },
  toAmino(message: QueryGetMetadataCreatorResponse): QueryGetMetadataCreatorResponseAmino {
    const obj: any = {};
    obj.metadataCreator = message.metadataCreator ? MetadataCreator.toAmino(message.metadataCreator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMetadataCreatorResponseAminoMsg): QueryGetMetadataCreatorResponse {
    return QueryGetMetadataCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMetadataCreatorResponseProtoMsg): QueryGetMetadataCreatorResponse {
    return QueryGetMetadataCreatorResponse.decode(message.value);
  },
  toProto(message: QueryGetMetadataCreatorResponse): Uint8Array {
    return QueryGetMetadataCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMetadataCreatorResponse): QueryGetMetadataCreatorResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryGetMetadataCreatorResponse",
      value: QueryGetMetadataCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMetadataCreatorRequest(): QueryAllMetadataCreatorRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMetadataCreatorRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorRequest",
  encode(message: QueryAllMetadataCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMetadataCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMetadataCreatorRequest();
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
  fromPartial(object: Partial<QueryAllMetadataCreatorRequest>): QueryAllMetadataCreatorRequest {
    const message = createBaseQueryAllMetadataCreatorRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMetadataCreatorRequestAmino): QueryAllMetadataCreatorRequest {
    const message = createBaseQueryAllMetadataCreatorRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMetadataCreatorRequest): QueryAllMetadataCreatorRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMetadataCreatorRequestAminoMsg): QueryAllMetadataCreatorRequest {
    return QueryAllMetadataCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMetadataCreatorRequestProtoMsg): QueryAllMetadataCreatorRequest {
    return QueryAllMetadataCreatorRequest.decode(message.value);
  },
  toProto(message: QueryAllMetadataCreatorRequest): Uint8Array {
    return QueryAllMetadataCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMetadataCreatorRequest): QueryAllMetadataCreatorRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorRequest",
      value: QueryAllMetadataCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMetadataCreatorResponse(): QueryAllMetadataCreatorResponse {
  return {
    metadataCreator: [],
    pagination: undefined
  };
}
export const QueryAllMetadataCreatorResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorResponse",
  encode(message: QueryAllMetadataCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metadataCreator) {
      MetadataCreator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMetadataCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMetadataCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataCreator.push(MetadataCreator.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllMetadataCreatorResponse>): QueryAllMetadataCreatorResponse {
    const message = createBaseQueryAllMetadataCreatorResponse();
    message.metadataCreator = object.metadataCreator?.map(e => MetadataCreator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMetadataCreatorResponseAmino): QueryAllMetadataCreatorResponse {
    const message = createBaseQueryAllMetadataCreatorResponse();
    message.metadataCreator = object.metadataCreator?.map(e => MetadataCreator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMetadataCreatorResponse): QueryAllMetadataCreatorResponseAmino {
    const obj: any = {};
    if (message.metadataCreator) {
      obj.metadataCreator = message.metadataCreator.map(e => e ? MetadataCreator.toAmino(e) : undefined);
    } else {
      obj.metadataCreator = message.metadataCreator;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMetadataCreatorResponseAminoMsg): QueryAllMetadataCreatorResponse {
    return QueryAllMetadataCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMetadataCreatorResponseProtoMsg): QueryAllMetadataCreatorResponse {
    return QueryAllMetadataCreatorResponse.decode(message.value);
  },
  toProto(message: QueryAllMetadataCreatorResponse): Uint8Array {
    return QueryAllMetadataCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMetadataCreatorResponse): QueryAllMetadataCreatorResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.QueryAllMetadataCreatorResponse",
      value: QueryAllMetadataCreatorResponse.encode(message).finish()
    };
  }
};