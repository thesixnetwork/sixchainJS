//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { NFTSchema, NFTSchemaAmino, NFTSchemaSDKType } from "./nft_schema";
import { NftData, NftDataAmino, NftDataSDKType } from "./nft_data";
import { ActionByRefId, ActionByRefIdAmino, ActionByRefIdSDKType } from "./action_by_ref_id";
import { Organization, OrganizationAmino, OrganizationSDKType } from "./organization";
import { NFTSchemaByContract, NFTSchemaByContractAmino, NFTSchemaByContractSDKType } from "./nft_schema_by_contract";
import { NFTFeeConfig, NFTFeeConfigAmino, NFTFeeConfigSDKType } from "./nft_fee_config";
import { NFTFeeBalance, NFTFeeBalanceAmino, NFTFeeBalanceSDKType } from "./nft_fee_balance";
import { MetadataCreator, MetadataCreatorAmino, MetadataCreatorSDKType } from "./metadata_creator";
import { NftCollection, NftCollectionAmino, NftCollectionSDKType } from "./nft_collection";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisState {
  params: Params;
  nFTSchemaList: NFTSchema[];
  nftDataList: NftData[];
  actionByRefIdList: ActionByRefId[];
  organizationList: Organization[];
  nFTSchemaByContractList: NFTSchemaByContract[];
  nftFeeConfig?: NFTFeeConfig;
  nFTFeeBalance?: NFTFeeBalance;
  metadataCreatorList: MetadataCreator[];
  nftCollectionList: NftCollection[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  nFTSchemaList?: NFTSchemaAmino[];
  nftDataList?: NftDataAmino[];
  actionByRefIdList?: ActionByRefIdAmino[];
  organizationList?: OrganizationAmino[];
  nFTSchemaByContractList?: NFTSchemaByContractAmino[];
  nft_fee_config?: NFTFeeConfigAmino;
  nFTFeeBalance?: NFTFeeBalanceAmino;
  metadataCreatorList?: MetadataCreatorAmino[];
  nftCollectionList?: NftCollectionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  nFTSchemaList: NFTSchemaSDKType[];
  nftDataList: NftDataSDKType[];
  actionByRefIdList: ActionByRefIdSDKType[];
  organizationList: OrganizationSDKType[];
  nFTSchemaByContractList: NFTSchemaByContractSDKType[];
  nft_fee_config?: NFTFeeConfigSDKType;
  nFTFeeBalance?: NFTFeeBalanceSDKType;
  metadataCreatorList: MetadataCreatorSDKType[];
  nftCollectionList: NftCollectionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nFTSchemaList: [],
    nftDataList: [],
    actionByRefIdList: [],
    organizationList: [],
    nFTSchemaByContractList: [],
    nftFeeConfig: undefined,
    nFTFeeBalance: undefined,
    metadataCreatorList: [],
    nftCollectionList: []
  };
}
export const GenesisState = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nFTSchemaList) {
      NFTSchema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nftDataList) {
      NftData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actionByRefIdList) {
      ActionByRefId.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.organizationList) {
      Organization.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.nFTSchemaByContractList) {
      NFTSchemaByContract.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nftFeeConfig !== undefined) {
      NFTFeeConfig.encode(message.nftFeeConfig, writer.uint32(66).fork()).ldelim();
    }
    if (message.nFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(message.nFTFeeBalance, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.metadataCreatorList) {
      MetadataCreator.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.nftCollectionList) {
      NftCollection.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nFTSchemaList.push(NFTSchema.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nftDataList.push(NftData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actionByRefIdList.push(ActionByRefId.decode(reader, reader.uint32()));
          break;
        case 5:
          message.organizationList.push(Organization.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nFTSchemaByContractList.push(NFTSchemaByContract.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nftFeeConfig = NFTFeeConfig.decode(reader, reader.uint32());
          break;
        case 9:
          message.nFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
          break;
        case 10:
          message.metadataCreatorList.push(MetadataCreator.decode(reader, reader.uint32()));
          break;
        case 11:
          message.nftCollectionList.push(NftCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nFTSchemaList = object.nFTSchemaList?.map(e => NFTSchema.fromPartial(e)) || [];
    message.nftDataList = object.nftDataList?.map(e => NftData.fromPartial(e)) || [];
    message.actionByRefIdList = object.actionByRefIdList?.map(e => ActionByRefId.fromPartial(e)) || [];
    message.organizationList = object.organizationList?.map(e => Organization.fromPartial(e)) || [];
    message.nFTSchemaByContractList = object.nFTSchemaByContractList?.map(e => NFTSchemaByContract.fromPartial(e)) || [];
    message.nftFeeConfig = object.nftFeeConfig !== undefined && object.nftFeeConfig !== null ? NFTFeeConfig.fromPartial(object.nftFeeConfig) : undefined;
    message.nFTFeeBalance = object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null ? NFTFeeBalance.fromPartial(object.nFTFeeBalance) : undefined;
    message.metadataCreatorList = object.metadataCreatorList?.map(e => MetadataCreator.fromPartial(e)) || [];
    message.nftCollectionList = object.nftCollectionList?.map(e => NftCollection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.nFTSchemaList = object.nFTSchemaList?.map(e => NFTSchema.fromAmino(e)) || [];
    message.nftDataList = object.nftDataList?.map(e => NftData.fromAmino(e)) || [];
    message.actionByRefIdList = object.actionByRefIdList?.map(e => ActionByRefId.fromAmino(e)) || [];
    message.organizationList = object.organizationList?.map(e => Organization.fromAmino(e)) || [];
    message.nFTSchemaByContractList = object.nFTSchemaByContractList?.map(e => NFTSchemaByContract.fromAmino(e)) || [];
    if (object.nft_fee_config !== undefined && object.nft_fee_config !== null) {
      message.nftFeeConfig = NFTFeeConfig.fromAmino(object.nft_fee_config);
    }
    if (object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromAmino(object.nFTFeeBalance);
    }
    message.metadataCreatorList = object.metadataCreatorList?.map(e => MetadataCreator.fromAmino(e)) || [];
    message.nftCollectionList = object.nftCollectionList?.map(e => NftCollection.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.nFTSchemaList) {
      obj.nFTSchemaList = message.nFTSchemaList.map(e => e ? NFTSchema.toAmino(e) : undefined);
    } else {
      obj.nFTSchemaList = message.nFTSchemaList;
    }
    if (message.nftDataList) {
      obj.nftDataList = message.nftDataList.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftDataList = message.nftDataList;
    }
    if (message.actionByRefIdList) {
      obj.actionByRefIdList = message.actionByRefIdList.map(e => e ? ActionByRefId.toAmino(e) : undefined);
    } else {
      obj.actionByRefIdList = message.actionByRefIdList;
    }
    if (message.organizationList) {
      obj.organizationList = message.organizationList.map(e => e ? Organization.toAmino(e) : undefined);
    } else {
      obj.organizationList = message.organizationList;
    }
    if (message.nFTSchemaByContractList) {
      obj.nFTSchemaByContractList = message.nFTSchemaByContractList.map(e => e ? NFTSchemaByContract.toAmino(e) : undefined);
    } else {
      obj.nFTSchemaByContractList = message.nFTSchemaByContractList;
    }
    obj.nft_fee_config = message.nftFeeConfig ? NFTFeeConfig.toAmino(message.nftFeeConfig) : undefined;
    obj.nFTFeeBalance = message.nFTFeeBalance ? NFTFeeBalance.toAmino(message.nFTFeeBalance) : undefined;
    if (message.metadataCreatorList) {
      obj.metadataCreatorList = message.metadataCreatorList.map(e => e ? MetadataCreator.toAmino(e) : undefined);
    } else {
      obj.metadataCreatorList = message.metadataCreatorList;
    }
    if (message.nftCollectionList) {
      obj.nftCollectionList = message.nftCollectionList.map(e => e ? NftCollection.toAmino(e) : undefined);
    } else {
      obj.nftCollectionList = message.nftCollectionList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};