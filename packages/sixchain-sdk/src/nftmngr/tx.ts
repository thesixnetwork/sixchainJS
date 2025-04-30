//@ts-nocheck
import { Any, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { OnChainData, OnChainDataAmino, OnChainDataSDKType } from "./on_chain_data";
import * as _m0 from "protobufjs/minimal";
export enum AttributeLocation {
  NFT_ATTRIBUTE = 0,
  TOKEN_ATTRIBUTE = 1,
  UNRECOGNIZED = -1,
}
export const AttributeLocationSDKType = AttributeLocation;
export const AttributeLocationAmino = AttributeLocation;
export function attributeLocationFromJSON(object: any): AttributeLocation {
  switch (object) {
    case 0:
    case "NFT_ATTRIBUTE":
      return AttributeLocation.NFT_ATTRIBUTE;
    case 1:
    case "TOKEN_ATTRIBUTE":
      return AttributeLocation.TOKEN_ATTRIBUTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeLocation.UNRECOGNIZED;
  }
}
export function attributeLocationToJSON(object: AttributeLocation): string {
  switch (object) {
    case AttributeLocation.NFT_ATTRIBUTE:
      return "NFT_ATTRIBUTE";
    case AttributeLocation.TOKEN_ATTRIBUTE:
      return "TOKEN_ATTRIBUTE";
    case AttributeLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum AuthorizeTo {
  SYSTEM = 0,
  ALL = 1,
  UNRECOGNIZED = -1,
}
export const AuthorizeToSDKType = AuthorizeTo;
export const AuthorizeToAmino = AuthorizeTo;
export function authorizeToFromJSON(object: any): AuthorizeTo {
  switch (object) {
    case 0:
    case "SYSTEM":
      return AuthorizeTo.SYSTEM;
    case 1:
    case "ALL":
      return AuthorizeTo.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizeTo.UNRECOGNIZED;
  }
}
export function authorizeToToJSON(object: AuthorizeTo): string {
  switch (object) {
    case AuthorizeTo.SYSTEM:
      return "SYSTEM";
    case AuthorizeTo.ALL:
      return "ALL";
    case AuthorizeTo.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeeSubject {
  CREATE_NFT_SCHEMA = 0,
  UNRECOGNIZED = -1,
}
export const FeeSubjectSDKType = FeeSubject;
export const FeeSubjectAmino = FeeSubject;
export function feeSubjectFromJSON(object: any): FeeSubject {
  switch (object) {
    case 0:
    case "CREATE_NFT_SCHEMA":
      return FeeSubject.CREATE_NFT_SCHEMA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeeSubject.UNRECOGNIZED;
  }
}
export function feeSubjectToJSON(object: FeeSubject): string {
  switch (object) {
    case FeeSubject.CREATE_NFT_SCHEMA:
      return "CREATE_NFT_SCHEMA";
    case FeeSubject.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MsgCreateNFTSchema {
  creator: string;
  nftSchemaBase64: string;
}
export interface MsgCreateNFTSchemaProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema";
  value: Uint8Array;
}
export interface MsgCreateNFTSchemaAmino {
  creator?: string;
  nftSchemaBase64?: string;
}
export interface MsgCreateNFTSchemaAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema";
  value: MsgCreateNFTSchemaAmino;
}
export interface MsgCreateNFTSchemaSDKType {
  creator: string;
  nftSchemaBase64: string;
}
export interface MsgCreateNFTSchemaResponse {
  code: string;
}
export interface MsgCreateNFTSchemaResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchemaResponse";
  value: Uint8Array;
}
export interface MsgCreateNFTSchemaResponseAmino {
  code?: string;
}
export interface MsgCreateNFTSchemaResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchemaResponse";
  value: MsgCreateNFTSchemaResponseAmino;
}
export interface MsgCreateNFTSchemaResponseSDKType {
  code: string;
}
export interface MsgCreateMetadata {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  base64NFTData: string;
}
export interface MsgCreateMetadataProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata";
  value: Uint8Array;
}
export interface MsgCreateMetadataAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  base64NFTData?: string;
}
export interface MsgCreateMetadataAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata";
  value: MsgCreateMetadataAmino;
}
export interface MsgCreateMetadataSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  base64NFTData: string;
}
export interface MsgCreateMetadataResponse {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgCreateMetadataResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadataResponse";
  value: Uint8Array;
}
export interface MsgCreateMetadataResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgCreateMetadataResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadataResponse";
  value: MsgCreateMetadataResponseAmino;
}
export interface MsgCreateMetadataResponseSDKType {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgCreateMultiMetadata {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  base64NFTData: string;
}
export interface MsgCreateMultiMetadataProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata";
  value: Uint8Array;
}
export interface MsgCreateMultiMetadataAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string[];
  base64NFTData?: string;
}
export interface MsgCreateMultiMetadataAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata";
  value: MsgCreateMultiMetadataAmino;
}
export interface MsgCreateMultiMetadataSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  base64NFTData: string;
}
export interface MsgCreateMultiMetadataResponse {
  nftSchemaCode: string;
  tokenId: string[];
}
export interface MsgCreateMultiMetadataResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadataResponse";
  value: Uint8Array;
}
export interface MsgCreateMultiMetadataResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string[];
}
export interface MsgCreateMultiMetadataResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadataResponse";
  value: MsgCreateMultiMetadataResponseAmino;
}
export interface MsgCreateMultiMetadataResponseSDKType {
  nftSchemaCode: string;
  tokenId: string[];
}
export interface OpenseaAttribute {
  traitType: string;
  value?: Any;
}
export interface OpenseaAttributeProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.OpenseaAttribute";
  value: Uint8Array;
}
export interface OpenseaAttributeAmino {
  trait_type?: string;
  value?: AnyAmino;
}
export interface OpenseaAttributeAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.OpenseaAttribute";
  value: OpenseaAttributeAmino;
}
export interface OpenseaAttributeSDKType {
  trait_type: string;
  value?: AnySDKType;
}
export interface UpdatedOpenseaAttributes {
  attributes: OpenseaAttribute[];
}
export interface UpdatedOpenseaAttributesProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.UpdatedOpenseaAttributes";
  value: Uint8Array;
}
export interface UpdatedOpenseaAttributesAmino {
  attributes?: OpenseaAttributeAmino[];
}
export interface UpdatedOpenseaAttributesAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.UpdatedOpenseaAttributes";
  value: UpdatedOpenseaAttributesAmino;
}
export interface UpdatedOpenseaAttributesSDKType {
  attributes: OpenseaAttributeSDKType[];
}
export interface UpdatedOriginData {
  opensea?: UpdatedOpenseaAttributes;
}
export interface UpdatedOriginDataProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.UpdatedOriginData";
  value: Uint8Array;
}
export interface UpdatedOriginDataAmino {
  opensea?: UpdatedOpenseaAttributesAmino;
}
export interface UpdatedOriginDataAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.UpdatedOriginData";
  value: UpdatedOriginDataAmino;
}
export interface UpdatedOriginDataSDKType {
  opensea?: UpdatedOpenseaAttributesSDKType;
}
/** ActionParameter */
export interface ActionParameter {
  name: string;
  value: string;
}
export interface ActionParameterProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.ActionParameter";
  value: Uint8Array;
}
/** ActionParameter */
export interface ActionParameterAmino {
  name?: string;
  value?: string;
}
export interface ActionParameterAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.ActionParameter";
  value: ActionParameterAmino;
}
/** ActionParameter */
export interface ActionParameterSDKType {
  name: string;
  value: string;
}
export interface MsgPerformActionByAdmin {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  refId: string;
  parameters: ActionParameter[];
}
export interface MsgPerformActionByAdminProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin";
  value: Uint8Array;
}
export interface MsgPerformActionByAdminAmino {
  creator?: string;
  nft_schema_code?: string;
  tokenId?: string;
  action?: string;
  ref_id?: string;
  parameters?: ActionParameterAmino[];
}
export interface MsgPerformActionByAdminAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin";
  value: MsgPerformActionByAdminAmino;
}
export interface MsgPerformActionByAdminSDKType {
  creator: string;
  nft_schema_code: string;
  tokenId: string;
  action: string;
  ref_id: string;
  parameters: ActionParameterSDKType[];
}
export interface MsgPerformActionByAdminResponse {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgPerformActionByAdminResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdminResponse";
  value: Uint8Array;
}
export interface MsgPerformActionByAdminResponseAmino {
  nft_schema_code?: string;
  token_id?: string;
}
export interface MsgPerformActionByAdminResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdminResponse";
  value: MsgPerformActionByAdminResponseAmino;
}
export interface MsgPerformActionByAdminResponseSDKType {
  nft_schema_code: string;
  token_id: string;
}
export interface MsgPerformMultiTokenAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
  refId: string;
  parameters: string;
}
export interface MsgPerformMultiTokenActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction";
  value: Uint8Array;
}
export interface MsgPerformMultiTokenActionAmino {
  creator?: string;
  nft_schema_code?: string;
  tokenId?: string[];
  action?: string[];
  ref_id?: string;
  parameters?: string;
}
export interface MsgPerformMultiTokenActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction";
  value: MsgPerformMultiTokenActionAmino;
}
export interface MsgPerformMultiTokenActionSDKType {
  creator: string;
  nft_schema_code: string;
  tokenId: string[];
  action: string[];
  ref_id: string;
  parameters: string;
}
export interface MsgPerformMultiTokenActionResponse {
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
}
export interface MsgPerformMultiTokenActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenActionResponse";
  value: Uint8Array;
}
export interface MsgPerformMultiTokenActionResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string[];
  action?: string[];
}
export interface MsgPerformMultiTokenActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenActionResponse";
  value: MsgPerformMultiTokenActionResponseAmino;
}
export interface MsgPerformMultiTokenActionResponseSDKType {
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
}
export interface MsgPerformMultiTokenOneAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string;
  refId: string;
  parameters: ActionParameter[];
}
export interface MsgPerformMultiTokenOneActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneAction";
  value: Uint8Array;
}
export interface MsgPerformMultiTokenOneActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string[];
  action?: string;
  refId?: string;
  parameters?: ActionParameterAmino[];
}
export interface MsgPerformMultiTokenOneActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneAction";
  value: MsgPerformMultiTokenOneActionAmino;
}
export interface MsgPerformMultiTokenOneActionSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string;
  refId: string;
  parameters: ActionParameterSDKType[];
}
export interface MsgPerformMultiTokenOneActionResponse {
  nftSchemaCode: string;
  tokenId: string[];
}
export interface MsgPerformMultiTokenOneActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneActionResponse";
  value: Uint8Array;
}
export interface MsgPerformMultiTokenOneActionResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string[];
}
export interface MsgPerformMultiTokenOneActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneActionResponse";
  value: MsgPerformMultiTokenOneActionResponseAmino;
}
export interface MsgPerformMultiTokenOneActionResponseSDKType {
  nftSchemaCode: string;
  tokenId: string[];
}
export interface MsgPerformMultiTokenMultiAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
  refId: string;
  parameters: string[];
}
export interface MsgPerformMultiTokenMultiActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiAction";
  value: Uint8Array;
}
export interface MsgPerformMultiTokenMultiActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string[];
  action?: string[];
  refId?: string;
  parameters?: string[];
}
export interface MsgPerformMultiTokenMultiActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiAction";
  value: MsgPerformMultiTokenMultiActionAmino;
}
export interface MsgPerformMultiTokenMultiActionSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
  refId: string;
  parameters: string[];
}
export interface MsgPerformMultiTokenMultiActionResponse {
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
}
export interface MsgPerformMultiTokenMultiActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiActionResponse";
  value: Uint8Array;
}
export interface MsgPerformMultiTokenMultiActionResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string[];
  action?: string[];
}
export interface MsgPerformMultiTokenMultiActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiActionResponse";
  value: MsgPerformMultiTokenMultiActionResponseAmino;
}
export interface MsgPerformMultiTokenMultiActionResponseSDKType {
  nftSchemaCode: string;
  tokenId: string[];
  action: string[];
}
export interface MsgPerformOneTokenMultiAction {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string[];
  refId: string;
  parameters: string[];
}
export interface MsgPerformOneTokenMultiActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiAction";
  value: Uint8Array;
}
export interface MsgPerformOneTokenMultiActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  action?: string[];
  refId?: string;
  parameters?: string[];
}
export interface MsgPerformOneTokenMultiActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiAction";
  value: MsgPerformOneTokenMultiActionAmino;
}
export interface MsgPerformOneTokenMultiActionSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string[];
  refId: string;
  parameters: string[];
}
export interface MsgPerformOneTokenMultiActionResponse {
  nftSchemaCode: string;
  tokenId: string;
  action: string[];
}
export interface MsgPerformOneTokenMultiActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiActionResponse";
  value: Uint8Array;
}
export interface MsgPerformOneTokenMultiActionResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string;
  action?: string[];
}
export interface MsgPerformOneTokenMultiActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiActionResponse";
  value: MsgPerformOneTokenMultiActionResponseAmino;
}
export interface MsgPerformOneTokenMultiActionResponseSDKType {
  nftSchemaCode: string;
  tokenId: string;
  action: string[];
}
export interface MsgAddAttribute {
  creator: string;
  code: string;
  location: AttributeLocation;
  base64NewAttriuteDefenition: string;
}
export interface MsgAddAttributeProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute";
  value: Uint8Array;
}
export interface MsgAddAttributeAmino {
  creator?: string;
  code?: string;
  location?: AttributeLocation;
  base64NewAttriuteDefenition?: string;
}
export interface MsgAddAttributeAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute";
  value: MsgAddAttributeAmino;
}
export interface MsgAddAttributeSDKType {
  creator: string;
  code: string;
  location: AttributeLocation;
  base64NewAttriuteDefenition: string;
}
export interface MsgAddAttributeResponse {
  code: string;
  name: string;
  onchainData?: OnChainData;
}
export interface MsgAddAttributeResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttributeResponse";
  value: Uint8Array;
}
export interface MsgAddAttributeResponseAmino {
  code?: string;
  name?: string;
  onchainData?: OnChainDataAmino;
}
export interface MsgAddAttributeResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgAddAttributeResponse";
  value: MsgAddAttributeResponseAmino;
}
export interface MsgAddAttributeResponseSDKType {
  code: string;
  name: string;
  onchainData?: OnChainDataSDKType;
}
export interface MsgAddAction {
  creator: string;
  code: string;
  base64NewAction: string;
}
export interface MsgAddActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction";
  value: Uint8Array;
}
export interface MsgAddActionAmino {
  creator?: string;
  code?: string;
  base64NewAction?: string;
}
export interface MsgAddActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgAddAction";
  value: MsgAddActionAmino;
}
export interface MsgAddActionSDKType {
  creator: string;
  code: string;
  base64NewAction: string;
}
export interface MsgAddActionResponse {
  code: string;
  name: string;
  onchainData?: OnChainData;
}
export interface MsgAddActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddActionResponse";
  value: Uint8Array;
}
export interface MsgAddActionResponseAmino {
  code?: string;
  name?: string;
  onchainData?: OnChainDataAmino;
}
export interface MsgAddActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgAddActionResponse";
  value: MsgAddActionResponseAmino;
}
export interface MsgAddActionResponseSDKType {
  code: string;
  name: string;
  onchainData?: OnChainDataSDKType;
}
export interface MsgSetNFTAttribute {
  creator: string;
  nftSchemaCode: string;
  base64NftAttributeValue: string;
}
export interface MsgSetNFTAttributeProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute";
  value: Uint8Array;
}
export interface MsgSetNFTAttributeAmino {
  creator?: string;
  nft_schema_code?: string;
  base64_nft_attribute_value?: string;
}
export interface MsgSetNFTAttributeAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute";
  value: MsgSetNFTAttributeAmino;
}
export interface MsgSetNFTAttributeSDKType {
  creator: string;
  nft_schema_code: string;
  base64_nft_attribute_value: string;
}
export interface MsgSetNFTAttributeResponse {
  nftSchemaCode: string;
  attributeName: string;
  nftAttributeValue: string;
}
export interface MsgSetNFTAttributeResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttributeResponse";
  value: Uint8Array;
}
export interface MsgSetNFTAttributeResponseAmino {
  nft_schema_code?: string;
  attribute_name?: string;
  nft_attribute_value?: string;
}
export interface MsgSetNFTAttributeResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttributeResponse";
  value: MsgSetNFTAttributeResponseAmino;
}
export interface MsgSetNFTAttributeResponseSDKType {
  nft_schema_code: string;
  attribute_name: string;
  nft_attribute_value: string;
}
export interface MsgSetBaseUri {
  creator: string;
  code: string;
  newBaseUri: string;
}
export interface MsgSetBaseUriProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri";
  value: Uint8Array;
}
export interface MsgSetBaseUriAmino {
  creator?: string;
  code?: string;
  newBaseUri?: string;
}
export interface MsgSetBaseUriAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri";
  value: MsgSetBaseUriAmino;
}
export interface MsgSetBaseUriSDKType {
  creator: string;
  code: string;
  newBaseUri: string;
}
export interface MsgSetBaseUriResponse {
  code: string;
  uri: string;
}
export interface MsgSetBaseUriResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUriResponse";
  value: Uint8Array;
}
export interface MsgSetBaseUriResponseAmino {
  code?: string;
  uri?: string;
}
export interface MsgSetBaseUriResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUriResponse";
  value: MsgSetBaseUriResponseAmino;
}
export interface MsgSetBaseUriResponseSDKType {
  code: string;
  uri: string;
}
export interface MsgToggleAction {
  creator: string;
  code: string;
  action: string;
  disable: boolean;
}
export interface MsgToggleActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction";
  value: Uint8Array;
}
export interface MsgToggleActionAmino {
  creator?: string;
  code?: string;
  action?: string;
  disable?: boolean;
}
export interface MsgToggleActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction";
  value: MsgToggleActionAmino;
}
export interface MsgToggleActionSDKType {
  creator: string;
  code: string;
  action: string;
  disable: boolean;
}
export interface MsgToggleActionResponse {
  code: string;
  name: string;
  onchainDataAction?: OnChainData;
}
export interface MsgToggleActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleActionResponse";
  value: Uint8Array;
}
export interface MsgToggleActionResponseAmino {
  code?: string;
  name?: string;
  onchainDataAction?: OnChainDataAmino;
}
export interface MsgToggleActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgToggleActionResponse";
  value: MsgToggleActionResponseAmino;
}
export interface MsgToggleActionResponseSDKType {
  code: string;
  name: string;
  onchainDataAction?: OnChainDataSDKType;
}
export interface MsgChangeSchemaOwner {
  creator: string;
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgChangeSchemaOwnerProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner";
  value: Uint8Array;
}
export interface MsgChangeSchemaOwnerAmino {
  creator?: string;
  nftSchemaCode?: string;
  newOwner?: string;
}
export interface MsgChangeSchemaOwnerAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner";
  value: MsgChangeSchemaOwnerAmino;
}
export interface MsgChangeSchemaOwnerSDKType {
  creator: string;
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgChangeSchemaOwnerResponse {
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgChangeSchemaOwnerResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwnerResponse";
  value: Uint8Array;
}
export interface MsgChangeSchemaOwnerResponseAmino {
  nftSchemaCode?: string;
  newOwner?: string;
}
export interface MsgChangeSchemaOwnerResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwnerResponse";
  value: MsgChangeSchemaOwnerResponseAmino;
}
export interface MsgChangeSchemaOwnerResponseSDKType {
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgAddSystemActioner {
  creator: string;
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgAddSystemActionerProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner";
  value: Uint8Array;
}
export interface MsgAddSystemActionerAmino {
  creator?: string;
  nftSchemaCode?: string;
  actioner?: string;
}
export interface MsgAddSystemActionerAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner";
  value: MsgAddSystemActionerAmino;
}
export interface MsgAddSystemActionerSDKType {
  creator: string;
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgAddSystemActionerResponse {
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgAddSystemActionerResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActionerResponse";
  value: Uint8Array;
}
export interface MsgAddSystemActionerResponseAmino {
  nftSchemaCode?: string;
  actioner?: string;
}
export interface MsgAddSystemActionerResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActionerResponse";
  value: MsgAddSystemActionerResponseAmino;
}
export interface MsgAddSystemActionerResponseSDKType {
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgRemoveSystemActioner {
  creator: string;
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgRemoveSystemActionerProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner";
  value: Uint8Array;
}
export interface MsgRemoveSystemActionerAmino {
  creator?: string;
  nftSchemaCode?: string;
  actioner?: string;
}
export interface MsgRemoveSystemActionerAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner";
  value: MsgRemoveSystemActionerAmino;
}
export interface MsgRemoveSystemActionerSDKType {
  creator: string;
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgRemoveSystemActionerResponse {
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgRemoveSystemActionerResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActionerResponse";
  value: Uint8Array;
}
export interface MsgRemoveSystemActionerResponseAmino {
  nftSchemaCode?: string;
  actioner?: string;
}
export interface MsgRemoveSystemActionerResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActionerResponse";
  value: MsgRemoveSystemActionerResponseAmino;
}
export interface MsgRemoveSystemActionerResponseSDKType {
  nftSchemaCode: string;
  actioner: string;
}
export interface MsgResyncAttributesResponse {
  nftSchemaCode: string;
}
export interface MsgResyncAttributesResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributesResponse";
  value: Uint8Array;
}
export interface MsgResyncAttributesResponseAmino {
  nftSchemaCode?: string;
}
export interface MsgResyncAttributesResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributesResponse";
  value: MsgResyncAttributesResponseAmino;
}
export interface MsgResyncAttributesResponseSDKType {
  nftSchemaCode: string;
}
export interface MsgShowAttributes {
  creator: string;
  nftSchemaCode: string;
  show: boolean;
  attributeNames: string[];
}
export interface MsgShowAttributesProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes";
  value: Uint8Array;
}
export interface MsgShowAttributesAmino {
  creator?: string;
  nftSchemaCode?: string;
  show?: boolean;
  attributeNames?: string[];
}
export interface MsgShowAttributesAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes";
  value: MsgShowAttributesAmino;
}
export interface MsgShowAttributesSDKType {
  creator: string;
  nftSchemaCode: string;
  show: boolean;
  attributeNames: string[];
}
export interface MsgShowAttributesResponse {
  nftSchema: string;
}
export interface MsgShowAttributesResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributesResponse";
  value: Uint8Array;
}
export interface MsgShowAttributesResponseAmino {
  nftSchema?: string;
}
export interface MsgShowAttributesResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributesResponse";
  value: MsgShowAttributesResponseAmino;
}
export interface MsgShowAttributesResponseSDKType {
  nftSchema: string;
}
export interface MsgResyncAttributes {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgResyncAttributesProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes";
  value: Uint8Array;
}
export interface MsgResyncAttributesAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgResyncAttributesAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes";
  value: MsgResyncAttributesAmino;
}
export interface MsgResyncAttributesSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgSetFeeConfig {
  creator: string;
  newFeeConfigBase64: string;
  feeSubject: FeeSubject;
}
export interface MsgSetFeeConfigProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig";
  value: Uint8Array;
}
export interface MsgSetFeeConfigAmino {
  creator?: string;
  newFeeConfigBase64?: string;
  feeSubject?: FeeSubject;
}
export interface MsgSetFeeConfigAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig";
  value: MsgSetFeeConfigAmino;
}
export interface MsgSetFeeConfigSDKType {
  creator: string;
  newFeeConfigBase64: string;
  feeSubject: FeeSubject;
}
export interface MsgSetFeeConfigResponse {}
export interface MsgSetFeeConfigResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfigResponse";
  value: Uint8Array;
}
export interface MsgSetFeeConfigResponseAmino {}
export interface MsgSetFeeConfigResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfigResponse";
  value: MsgSetFeeConfigResponseAmino;
}
export interface MsgSetFeeConfigResponseSDKType {}
export interface MsgSetMintauth {
  creator: string;
  nftSchemaCode: string;
  authorizeTo: AuthorizeTo;
}
export interface MsgSetMintauthProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth";
  value: Uint8Array;
}
export interface MsgSetMintauthAmino {
  creator?: string;
  nftSchemaCode?: string;
  authorizeTo?: AuthorizeTo;
}
export interface MsgSetMintauthAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth";
  value: MsgSetMintauthAmino;
}
export interface MsgSetMintauthSDKType {
  creator: string;
  nftSchemaCode: string;
  authorizeTo: AuthorizeTo;
}
export interface MsgSetMintauthResponse {
  nftSchemaCode: string;
}
export interface MsgSetMintauthResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauthResponse";
  value: Uint8Array;
}
export interface MsgSetMintauthResponseAmino {
  nftSchemaCode?: string;
}
export interface MsgSetMintauthResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauthResponse";
  value: MsgSetMintauthResponseAmino;
}
export interface MsgSetMintauthResponseSDKType {
  nftSchemaCode: string;
}
export interface MsgChangeOrgOwner {
  creator: string;
  orgName: string;
  toNewOwner: string;
}
export interface MsgChangeOrgOwnerProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner";
  value: Uint8Array;
}
export interface MsgChangeOrgOwnerAmino {
  creator?: string;
  orgName?: string;
  toNewOwner?: string;
}
export interface MsgChangeOrgOwnerAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner";
  value: MsgChangeOrgOwnerAmino;
}
export interface MsgChangeOrgOwnerSDKType {
  creator: string;
  orgName: string;
  toNewOwner: string;
}
export interface MsgChangeOrgOwnerResponse {
  orgName: string;
  oldOwner: string;
  newOwner: string;
}
export interface MsgChangeOrgOwnerResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwnerResponse";
  value: Uint8Array;
}
export interface MsgChangeOrgOwnerResponseAmino {
  orgName?: string;
  oldOwner?: string;
  newOwner?: string;
}
export interface MsgChangeOrgOwnerResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwnerResponse";
  value: MsgChangeOrgOwnerResponseAmino;
}
export interface MsgChangeOrgOwnerResponseSDKType {
  orgName: string;
  oldOwner: string;
  newOwner: string;
}
export interface MsgSetUriRetrievalMethod {
  creator: string;
  schemaCode: string;
  newMethod: number;
}
export interface MsgSetUriRetrievalMethodProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod";
  value: Uint8Array;
}
export interface MsgSetUriRetrievalMethodAmino {
  creator?: string;
  schemaCode?: string;
  newMethod?: number;
}
export interface MsgSetUriRetrievalMethodAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod";
  value: MsgSetUriRetrievalMethodAmino;
}
export interface MsgSetUriRetrievalMethodSDKType {
  creator: string;
  schemaCode: string;
  newMethod: number;
}
export interface MsgSetUriRetrievalMethodResponse {
  schemaCode: string;
  newMethod: string;
}
export interface MsgSetUriRetrievalMethodResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethodResponse";
  value: Uint8Array;
}
export interface MsgSetUriRetrievalMethodResponseAmino {
  schemaCode?: string;
  newMethod?: string;
}
export interface MsgSetUriRetrievalMethodResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethodResponse";
  value: MsgSetUriRetrievalMethodResponseAmino;
}
export interface MsgSetUriRetrievalMethodResponseSDKType {
  schemaCode: string;
  newMethod: string;
}
export interface MsgSetOriginChain {
  creator: string;
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginChainProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain";
  value: Uint8Array;
}
export interface MsgSetOriginChainAmino {
  creator?: string;
  schemaCode?: string;
  newOriginChain?: string;
}
export interface MsgSetOriginChainAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain";
  value: MsgSetOriginChainAmino;
}
export interface MsgSetOriginChainSDKType {
  creator: string;
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginChainResponse {
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginChainResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChainResponse";
  value: Uint8Array;
}
export interface MsgSetOriginChainResponseAmino {
  schemaCode?: string;
  newOriginChain?: string;
}
export interface MsgSetOriginChainResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChainResponse";
  value: MsgSetOriginChainResponseAmino;
}
export interface MsgSetOriginChainResponseSDKType {
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginContract {
  creator: string;
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetOriginContractProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract";
  value: Uint8Array;
}
export interface MsgSetOriginContractAmino {
  creator?: string;
  schemaCode?: string;
  newContractAddress?: string;
}
export interface MsgSetOriginContractAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract";
  value: MsgSetOriginContractAmino;
}
export interface MsgSetOriginContractSDKType {
  creator: string;
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetOriginContractResponse {
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetOriginContractResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContractResponse";
  value: Uint8Array;
}
export interface MsgSetOriginContractResponseAmino {
  schemaCode?: string;
  newContractAddress?: string;
}
export interface MsgSetOriginContractResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContractResponse";
  value: MsgSetOriginContractResponseAmino;
}
export interface MsgSetOriginContractResponseSDKType {
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetAttributeOveriding {
  creator: string;
  schemaCode: string;
  newOveridingType: number;
}
export interface MsgSetAttributeOveridingProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding";
  value: Uint8Array;
}
export interface MsgSetAttributeOveridingAmino {
  creator?: string;
  schemaCode?: string;
  newOveridingType?: number;
}
export interface MsgSetAttributeOveridingAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding";
  value: MsgSetAttributeOveridingAmino;
}
export interface MsgSetAttributeOveridingSDKType {
  creator: string;
  schemaCode: string;
  newOveridingType: number;
}
export interface MsgSetAttributeOveridingResponse {
  schemaCode: string;
  newOveriding: string;
}
export interface MsgSetAttributeOveridingResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveridingResponse";
  value: Uint8Array;
}
export interface MsgSetAttributeOveridingResponseAmino {
  schemaCode?: string;
  newOveriding?: string;
}
export interface MsgSetAttributeOveridingResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveridingResponse";
  value: MsgSetAttributeOveridingResponseAmino;
}
export interface MsgSetAttributeOveridingResponseSDKType {
  schemaCode: string;
  newOveriding: string;
}
export interface MsgSetMetadataFormat {
  creator: string;
  schemaCode: string;
  newFormat: string;
}
export interface MsgSetMetadataFormatProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat";
  value: Uint8Array;
}
export interface MsgSetMetadataFormatAmino {
  creator?: string;
  schemaCode?: string;
  newFormat?: string;
}
export interface MsgSetMetadataFormatAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat";
  value: MsgSetMetadataFormatAmino;
}
export interface MsgSetMetadataFormatSDKType {
  creator: string;
  schemaCode: string;
  newFormat: string;
}
export interface MsgSetMetadataFormatResponse {
  schemaCode: string;
  newFormat: string;
}
export interface MsgSetMetadataFormatResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormatResponse";
  value: Uint8Array;
}
export interface MsgSetMetadataFormatResponseAmino {
  schemaCode?: string;
  newFormat?: string;
}
export interface MsgSetMetadataFormatResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormatResponse";
  value: MsgSetMetadataFormatResponseAmino;
}
export interface MsgSetMetadataFormatResponseSDKType {
  schemaCode: string;
  newFormat: string;
}
function createBaseMsgCreateNFTSchema(): MsgCreateNFTSchema {
  return {
    creator: "",
    nftSchemaBase64: ""
  };
}
export const MsgCreateNFTSchema = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema",
  encode(message: MsgCreateNFTSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaBase64 !== "") {
      writer.uint32(18).string(message.nftSchemaBase64);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNFTSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaBase64 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateNFTSchema>): MsgCreateNFTSchema {
    const message = createBaseMsgCreateNFTSchema();
    message.creator = object.creator ?? "";
    message.nftSchemaBase64 = object.nftSchemaBase64 ?? "";
    return message;
  },
  fromAmino(object: MsgCreateNFTSchemaAmino): MsgCreateNFTSchema {
    const message = createBaseMsgCreateNFTSchema();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaBase64 !== undefined && object.nftSchemaBase64 !== null) {
      message.nftSchemaBase64 = object.nftSchemaBase64;
    }
    return message;
  },
  toAmino(message: MsgCreateNFTSchema): MsgCreateNFTSchemaAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaBase64 = message.nftSchemaBase64 === "" ? undefined : message.nftSchemaBase64;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNFTSchemaAminoMsg): MsgCreateNFTSchema {
    return MsgCreateNFTSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNFTSchemaProtoMsg): MsgCreateNFTSchema {
    return MsgCreateNFTSchema.decode(message.value);
  },
  toProto(message: MsgCreateNFTSchema): Uint8Array {
    return MsgCreateNFTSchema.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNFTSchema): MsgCreateNFTSchemaProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema",
      value: MsgCreateNFTSchema.encode(message).finish()
    };
  }
};
function createBaseMsgCreateNFTSchemaResponse(): MsgCreateNFTSchemaResponse {
  return {
    code: ""
  };
}
export const MsgCreateNFTSchemaResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchemaResponse",
  encode(message: MsgCreateNFTSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNFTSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTSchemaResponse();
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
  fromPartial(object: Partial<MsgCreateNFTSchemaResponse>): MsgCreateNFTSchemaResponse {
    const message = createBaseMsgCreateNFTSchemaResponse();
    message.code = object.code ?? "";
    return message;
  },
  fromAmino(object: MsgCreateNFTSchemaResponseAmino): MsgCreateNFTSchemaResponse {
    const message = createBaseMsgCreateNFTSchemaResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    return message;
  },
  toAmino(message: MsgCreateNFTSchemaResponse): MsgCreateNFTSchemaResponseAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNFTSchemaResponseAminoMsg): MsgCreateNFTSchemaResponse {
    return MsgCreateNFTSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNFTSchemaResponseProtoMsg): MsgCreateNFTSchemaResponse {
    return MsgCreateNFTSchemaResponse.decode(message.value);
  },
  toProto(message: MsgCreateNFTSchemaResponse): Uint8Array {
    return MsgCreateNFTSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNFTSchemaResponse): MsgCreateNFTSchemaResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchemaResponse",
      value: MsgCreateNFTSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMetadata(): MsgCreateMetadata {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: "",
    base64NFTData: ""
  };
}
export const MsgCreateMetadata = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata",
  encode(message: MsgCreateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.base64NFTData !== "") {
      writer.uint32(34).string(message.base64NFTData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.base64NFTData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMetadata>): MsgCreateMetadata {
    const message = createBaseMsgCreateMetadata();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.base64NFTData = object.base64NFTData ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMetadataAmino): MsgCreateMetadata {
    const message = createBaseMsgCreateMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = object.base64NFTData;
    }
    return message;
  },
  toAmino(message: MsgCreateMetadata): MsgCreateMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    obj.base64NFTData = message.base64NFTData === "" ? undefined : message.base64NFTData;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMetadataAminoMsg): MsgCreateMetadata {
    return MsgCreateMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMetadataProtoMsg): MsgCreateMetadata {
    return MsgCreateMetadata.decode(message.value);
  },
  toProto(message: MsgCreateMetadata): Uint8Array {
    return MsgCreateMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMetadata): MsgCreateMetadataProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata",
      value: MsgCreateMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMetadataResponse(): MsgCreateMetadataResponse {
  return {
    nftSchemaCode: "",
    tokenId: ""
  };
}
export const MsgCreateMetadataResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadataResponse",
  encode(message: MsgCreateMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMetadataResponse();
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
  fromPartial(object: Partial<MsgCreateMetadataResponse>): MsgCreateMetadataResponse {
    const message = createBaseMsgCreateMetadataResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMetadataResponseAmino): MsgCreateMetadataResponse {
    const message = createBaseMsgCreateMetadataResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgCreateMetadataResponse): MsgCreateMetadataResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMetadataResponseAminoMsg): MsgCreateMetadataResponse {
    return MsgCreateMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMetadataResponseProtoMsg): MsgCreateMetadataResponse {
    return MsgCreateMetadataResponse.decode(message.value);
  },
  toProto(message: MsgCreateMetadataResponse): Uint8Array {
    return MsgCreateMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMetadataResponse): MsgCreateMetadataResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadataResponse",
      value: MsgCreateMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMultiMetadata(): MsgCreateMultiMetadata {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: [],
    base64NFTData: ""
  };
}
export const MsgCreateMultiMetadata = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata",
  encode(message: MsgCreateMultiMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    if (message.base64NFTData !== "") {
      writer.uint32(34).string(message.base64NFTData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMultiMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMultiMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.base64NFTData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMultiMetadata>): MsgCreateMultiMetadata {
    const message = createBaseMsgCreateMultiMetadata();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.base64NFTData = object.base64NFTData ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMultiMetadataAmino): MsgCreateMultiMetadata {
    const message = createBaseMsgCreateMultiMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = object.base64NFTData;
    }
    return message;
  },
  toAmino(message: MsgCreateMultiMetadata): MsgCreateMultiMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    obj.base64NFTData = message.base64NFTData === "" ? undefined : message.base64NFTData;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMultiMetadataAminoMsg): MsgCreateMultiMetadata {
    return MsgCreateMultiMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMultiMetadataProtoMsg): MsgCreateMultiMetadata {
    return MsgCreateMultiMetadata.decode(message.value);
  },
  toProto(message: MsgCreateMultiMetadata): Uint8Array {
    return MsgCreateMultiMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMultiMetadata): MsgCreateMultiMetadataProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadata",
      value: MsgCreateMultiMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMultiMetadataResponse(): MsgCreateMultiMetadataResponse {
  return {
    nftSchemaCode: "",
    tokenId: []
  };
}
export const MsgCreateMultiMetadataResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadataResponse",
  encode(message: MsgCreateMultiMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMultiMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMultiMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMultiMetadataResponse>): MsgCreateMultiMetadataResponse {
    const message = createBaseMsgCreateMultiMetadataResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreateMultiMetadataResponseAmino): MsgCreateMultiMetadataResponse {
    const message = createBaseMsgCreateMultiMetadataResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreateMultiMetadataResponse): MsgCreateMultiMetadataResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateMultiMetadataResponseAminoMsg): MsgCreateMultiMetadataResponse {
    return MsgCreateMultiMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMultiMetadataResponseProtoMsg): MsgCreateMultiMetadataResponse {
    return MsgCreateMultiMetadataResponse.decode(message.value);
  },
  toProto(message: MsgCreateMultiMetadataResponse): Uint8Array {
    return MsgCreateMultiMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMultiMetadataResponse): MsgCreateMultiMetadataResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMultiMetadataResponse",
      value: MsgCreateMultiMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseOpenseaAttribute(): OpenseaAttribute {
  return {
    traitType: "",
    value: undefined
  };
}
export const OpenseaAttribute = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.OpenseaAttribute",
  encode(message: OpenseaAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traitType !== "") {
      writer.uint32(10).string(message.traitType);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OpenseaAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenseaAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.traitType = reader.string();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenseaAttribute>): OpenseaAttribute {
    const message = createBaseOpenseaAttribute();
    message.traitType = object.traitType ?? "";
    message.value = object.value !== undefined && object.value !== null ? Any.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: OpenseaAttributeAmino): OpenseaAttribute {
    const message = createBaseOpenseaAttribute();
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.traitType = object.trait_type;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: OpenseaAttribute): OpenseaAttributeAmino {
    const obj: any = {};
    obj.trait_type = message.traitType === "" ? undefined : message.traitType;
    obj.value = message.value ? Any.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: OpenseaAttributeAminoMsg): OpenseaAttribute {
    return OpenseaAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenseaAttributeProtoMsg): OpenseaAttribute {
    return OpenseaAttribute.decode(message.value);
  },
  toProto(message: OpenseaAttribute): Uint8Array {
    return OpenseaAttribute.encode(message).finish();
  },
  toProtoMsg(message: OpenseaAttribute): OpenseaAttributeProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.OpenseaAttribute",
      value: OpenseaAttribute.encode(message).finish()
    };
  }
};
function createBaseUpdatedOpenseaAttributes(): UpdatedOpenseaAttributes {
  return {
    attributes: []
  };
}
export const UpdatedOpenseaAttributes = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.UpdatedOpenseaAttributes",
  encode(message: UpdatedOpenseaAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      OpenseaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedOpenseaAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedOpenseaAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(OpenseaAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatedOpenseaAttributes>): UpdatedOpenseaAttributes {
    const message = createBaseUpdatedOpenseaAttributes();
    message.attributes = object.attributes?.map(e => OpenseaAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdatedOpenseaAttributesAmino): UpdatedOpenseaAttributes {
    const message = createBaseUpdatedOpenseaAttributes();
    message.attributes = object.attributes?.map(e => OpenseaAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdatedOpenseaAttributes): UpdatedOpenseaAttributesAmino {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? OpenseaAttribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: UpdatedOpenseaAttributesAminoMsg): UpdatedOpenseaAttributes {
    return UpdatedOpenseaAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatedOpenseaAttributesProtoMsg): UpdatedOpenseaAttributes {
    return UpdatedOpenseaAttributes.decode(message.value);
  },
  toProto(message: UpdatedOpenseaAttributes): Uint8Array {
    return UpdatedOpenseaAttributes.encode(message).finish();
  },
  toProtoMsg(message: UpdatedOpenseaAttributes): UpdatedOpenseaAttributesProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.UpdatedOpenseaAttributes",
      value: UpdatedOpenseaAttributes.encode(message).finish()
    };
  }
};
function createBaseUpdatedOriginData(): UpdatedOriginData {
  return {
    opensea: undefined
  };
}
export const UpdatedOriginData = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.UpdatedOriginData",
  encode(message: UpdatedOriginData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.opensea !== undefined) {
      UpdatedOpenseaAttributes.encode(message.opensea, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedOriginData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedOriginData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opensea = UpdatedOpenseaAttributes.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatedOriginData>): UpdatedOriginData {
    const message = createBaseUpdatedOriginData();
    message.opensea = object.opensea !== undefined && object.opensea !== null ? UpdatedOpenseaAttributes.fromPartial(object.opensea) : undefined;
    return message;
  },
  fromAmino(object: UpdatedOriginDataAmino): UpdatedOriginData {
    const message = createBaseUpdatedOriginData();
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = UpdatedOpenseaAttributes.fromAmino(object.opensea);
    }
    return message;
  },
  toAmino(message: UpdatedOriginData): UpdatedOriginDataAmino {
    const obj: any = {};
    obj.opensea = message.opensea ? UpdatedOpenseaAttributes.toAmino(message.opensea) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdatedOriginDataAminoMsg): UpdatedOriginData {
    return UpdatedOriginData.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatedOriginDataProtoMsg): UpdatedOriginData {
    return UpdatedOriginData.decode(message.value);
  },
  toProto(message: UpdatedOriginData): Uint8Array {
    return UpdatedOriginData.encode(message).finish();
  },
  toProtoMsg(message: UpdatedOriginData): UpdatedOriginDataProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.UpdatedOriginData",
      value: UpdatedOriginData.encode(message).finish()
    };
  }
};
function createBaseActionParameter(): ActionParameter {
  return {
    name: "",
    value: ""
  };
}
export const ActionParameter = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.ActionParameter",
  encode(message: ActionParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionParameter>): ActionParameter {
    const message = createBaseActionParameter();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: ActionParameterAmino): ActionParameter {
    const message = createBaseActionParameter();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ActionParameter): ActionParameterAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ActionParameterAminoMsg): ActionParameter {
    return ActionParameter.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionParameterProtoMsg): ActionParameter {
    return ActionParameter.decode(message.value);
  },
  toProto(message: ActionParameter): Uint8Array {
    return ActionParameter.encode(message).finish();
  },
  toProtoMsg(message: ActionParameter): ActionParameterProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.ActionParameter",
      value: ActionParameter.encode(message).finish()
    };
  }
};
function createBaseMsgPerformActionByAdmin(): MsgPerformActionByAdmin {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: "",
    action: "",
    refId: "",
    parameters: []
  };
}
export const MsgPerformActionByAdmin = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin",
  encode(message: MsgPerformActionByAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      ActionParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformActionByAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformActionByAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(ActionParameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformActionByAdmin>): MsgPerformActionByAdmin {
    const message = createBaseMsgPerformActionByAdmin();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.action = object.action ?? "";
    message.refId = object.refId ?? "";
    message.parameters = object.parameters?.map(e => ActionParameter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgPerformActionByAdminAmino): MsgPerformActionByAdmin {
    const message = createBaseMsgPerformActionByAdmin();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
    }
    message.parameters = object.parameters?.map(e => ActionParameter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgPerformActionByAdmin): MsgPerformActionByAdminAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    obj.action = message.action === "" ? undefined : message.action;
    obj.ref_id = message.refId === "" ? undefined : message.refId;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? ActionParameter.toAmino(e) : undefined);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformActionByAdminAminoMsg): MsgPerformActionByAdmin {
    return MsgPerformActionByAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformActionByAdminProtoMsg): MsgPerformActionByAdmin {
    return MsgPerformActionByAdmin.decode(message.value);
  },
  toProto(message: MsgPerformActionByAdmin): Uint8Array {
    return MsgPerformActionByAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformActionByAdmin): MsgPerformActionByAdminProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin",
      value: MsgPerformActionByAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgPerformActionByAdminResponse(): MsgPerformActionByAdminResponse {
  return {
    nftSchemaCode: "",
    tokenId: ""
  };
}
export const MsgPerformActionByAdminResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdminResponse",
  encode(message: MsgPerformActionByAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformActionByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformActionByAdminResponse();
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
  fromPartial(object: Partial<MsgPerformActionByAdminResponse>): MsgPerformActionByAdminResponse {
    const message = createBaseMsgPerformActionByAdminResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromAmino(object: MsgPerformActionByAdminResponseAmino): MsgPerformActionByAdminResponse {
    const message = createBaseMsgPerformActionByAdminResponse();
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    return message;
  },
  toAmino(message: MsgPerformActionByAdminResponse): MsgPerformActionByAdminResponseAmino {
    const obj: any = {};
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgPerformActionByAdminResponseAminoMsg): MsgPerformActionByAdminResponse {
    return MsgPerformActionByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformActionByAdminResponseProtoMsg): MsgPerformActionByAdminResponse {
    return MsgPerformActionByAdminResponse.decode(message.value);
  },
  toProto(message: MsgPerformActionByAdminResponse): Uint8Array {
    return MsgPerformActionByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformActionByAdminResponse): MsgPerformActionByAdminResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdminResponse",
      value: MsgPerformActionByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPerformMultiTokenAction(): MsgPerformMultiTokenAction {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: [],
    action: [],
    refId: "",
    parameters: ""
  };
}
export const MsgPerformMultiTokenAction = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction",
  encode(message: MsgPerformMultiTokenAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(34).string(v!);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    if (message.parameters !== "") {
      writer.uint32(50).string(message.parameters);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformMultiTokenAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformMultiTokenAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.action.push(reader.string());
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformMultiTokenAction>): MsgPerformMultiTokenAction {
    const message = createBaseMsgPerformMultiTokenAction();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    message.refId = object.refId ?? "";
    message.parameters = object.parameters ?? "";
    return message;
  },
  fromAmino(object: MsgPerformMultiTokenActionAmino): MsgPerformMultiTokenAction {
    const message = createBaseMsgPerformMultiTokenAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = object.parameters;
    }
    return message;
  },
  toAmino(message: MsgPerformMultiTokenAction): MsgPerformMultiTokenActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    if (message.action) {
      obj.action = message.action.map(e => e);
    } else {
      obj.action = message.action;
    }
    obj.ref_id = message.refId === "" ? undefined : message.refId;
    obj.parameters = message.parameters === "" ? undefined : message.parameters;
    return obj;
  },
  fromAminoMsg(object: MsgPerformMultiTokenActionAminoMsg): MsgPerformMultiTokenAction {
    return MsgPerformMultiTokenAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformMultiTokenActionProtoMsg): MsgPerformMultiTokenAction {
    return MsgPerformMultiTokenAction.decode(message.value);
  },
  toProto(message: MsgPerformMultiTokenAction): Uint8Array {
    return MsgPerformMultiTokenAction.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformMultiTokenAction): MsgPerformMultiTokenActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenAction",
      value: MsgPerformMultiTokenAction.encode(message).finish()
    };
  }
};
function createBaseMsgPerformMultiTokenActionResponse(): MsgPerformMultiTokenActionResponse {
  return {
    nftSchemaCode: "",
    tokenId: [],
    action: []
  };
}
export const MsgPerformMultiTokenActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenActionResponse",
  encode(message: MsgPerformMultiTokenActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformMultiTokenActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformMultiTokenActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        case 3:
          message.action.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformMultiTokenActionResponse>): MsgPerformMultiTokenActionResponse {
    const message = createBaseMsgPerformMultiTokenActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPerformMultiTokenActionResponseAmino): MsgPerformMultiTokenActionResponse {
    const message = createBaseMsgPerformMultiTokenActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPerformMultiTokenActionResponse): MsgPerformMultiTokenActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    if (message.action) {
      obj.action = message.action.map(e => e);
    } else {
      obj.action = message.action;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformMultiTokenActionResponseAminoMsg): MsgPerformMultiTokenActionResponse {
    return MsgPerformMultiTokenActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformMultiTokenActionResponseProtoMsg): MsgPerformMultiTokenActionResponse {
    return MsgPerformMultiTokenActionResponse.decode(message.value);
  },
  toProto(message: MsgPerformMultiTokenActionResponse): Uint8Array {
    return MsgPerformMultiTokenActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformMultiTokenActionResponse): MsgPerformMultiTokenActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenActionResponse",
      value: MsgPerformMultiTokenActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPerformMultiTokenOneAction(): MsgPerformMultiTokenOneAction {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: [],
    action: "",
    refId: "",
    parameters: []
  };
}
export const MsgPerformMultiTokenOneAction = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneAction",
  encode(message: MsgPerformMultiTokenOneAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      ActionParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformMultiTokenOneAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformMultiTokenOneAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(ActionParameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformMultiTokenOneAction>): MsgPerformMultiTokenOneAction {
    const message = createBaseMsgPerformMultiTokenOneAction();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action ?? "";
    message.refId = object.refId ?? "";
    message.parameters = object.parameters?.map(e => ActionParameter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgPerformMultiTokenOneActionAmino): MsgPerformMultiTokenOneAction {
    const message = createBaseMsgPerformMultiTokenOneAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    message.parameters = object.parameters?.map(e => ActionParameter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgPerformMultiTokenOneAction): MsgPerformMultiTokenOneActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    obj.action = message.action === "" ? undefined : message.action;
    obj.refId = message.refId === "" ? undefined : message.refId;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? ActionParameter.toAmino(e) : undefined);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformMultiTokenOneActionAminoMsg): MsgPerformMultiTokenOneAction {
    return MsgPerformMultiTokenOneAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformMultiTokenOneActionProtoMsg): MsgPerformMultiTokenOneAction {
    return MsgPerformMultiTokenOneAction.decode(message.value);
  },
  toProto(message: MsgPerformMultiTokenOneAction): Uint8Array {
    return MsgPerformMultiTokenOneAction.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformMultiTokenOneAction): MsgPerformMultiTokenOneActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneAction",
      value: MsgPerformMultiTokenOneAction.encode(message).finish()
    };
  }
};
function createBaseMsgPerformMultiTokenOneActionResponse(): MsgPerformMultiTokenOneActionResponse {
  return {
    nftSchemaCode: "",
    tokenId: []
  };
}
export const MsgPerformMultiTokenOneActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneActionResponse",
  encode(message: MsgPerformMultiTokenOneActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformMultiTokenOneActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformMultiTokenOneActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformMultiTokenOneActionResponse>): MsgPerformMultiTokenOneActionResponse {
    const message = createBaseMsgPerformMultiTokenOneActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPerformMultiTokenOneActionResponseAmino): MsgPerformMultiTokenOneActionResponse {
    const message = createBaseMsgPerformMultiTokenOneActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPerformMultiTokenOneActionResponse): MsgPerformMultiTokenOneActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformMultiTokenOneActionResponseAminoMsg): MsgPerformMultiTokenOneActionResponse {
    return MsgPerformMultiTokenOneActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformMultiTokenOneActionResponseProtoMsg): MsgPerformMultiTokenOneActionResponse {
    return MsgPerformMultiTokenOneActionResponse.decode(message.value);
  },
  toProto(message: MsgPerformMultiTokenOneActionResponse): Uint8Array {
    return MsgPerformMultiTokenOneActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformMultiTokenOneActionResponse): MsgPerformMultiTokenOneActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenOneActionResponse",
      value: MsgPerformMultiTokenOneActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPerformMultiTokenMultiAction(): MsgPerformMultiTokenMultiAction {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: [],
    action: [],
    refId: "",
    parameters: []
  };
}
export const MsgPerformMultiTokenMultiAction = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiAction",
  encode(message: MsgPerformMultiTokenMultiAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(34).string(v!);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformMultiTokenMultiAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformMultiTokenMultiAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId.push(reader.string());
          break;
        case 4:
          message.action.push(reader.string());
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformMultiTokenMultiAction>): MsgPerformMultiTokenMultiAction {
    const message = createBaseMsgPerformMultiTokenMultiAction();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    message.refId = object.refId ?? "";
    message.parameters = object.parameters?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPerformMultiTokenMultiActionAmino): MsgPerformMultiTokenMultiAction {
    const message = createBaseMsgPerformMultiTokenMultiAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    message.parameters = object.parameters?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPerformMultiTokenMultiAction): MsgPerformMultiTokenMultiActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    if (message.action) {
      obj.action = message.action.map(e => e);
    } else {
      obj.action = message.action;
    }
    obj.refId = message.refId === "" ? undefined : message.refId;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformMultiTokenMultiActionAminoMsg): MsgPerformMultiTokenMultiAction {
    return MsgPerformMultiTokenMultiAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformMultiTokenMultiActionProtoMsg): MsgPerformMultiTokenMultiAction {
    return MsgPerformMultiTokenMultiAction.decode(message.value);
  },
  toProto(message: MsgPerformMultiTokenMultiAction): Uint8Array {
    return MsgPerformMultiTokenMultiAction.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformMultiTokenMultiAction): MsgPerformMultiTokenMultiActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiAction",
      value: MsgPerformMultiTokenMultiAction.encode(message).finish()
    };
  }
};
function createBaseMsgPerformMultiTokenMultiActionResponse(): MsgPerformMultiTokenMultiActionResponse {
  return {
    nftSchemaCode: "",
    tokenId: [],
    action: []
  };
}
export const MsgPerformMultiTokenMultiActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiActionResponse",
  encode(message: MsgPerformMultiTokenMultiActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.action) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformMultiTokenMultiActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformMultiTokenMultiActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId.push(reader.string());
          break;
        case 3:
          message.action.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformMultiTokenMultiActionResponse>): MsgPerformMultiTokenMultiActionResponse {
    const message = createBaseMsgPerformMultiTokenMultiActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPerformMultiTokenMultiActionResponseAmino): MsgPerformMultiTokenMultiActionResponse {
    const message = createBaseMsgPerformMultiTokenMultiActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.action = object.action?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPerformMultiTokenMultiActionResponse): MsgPerformMultiTokenMultiActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    if (message.action) {
      obj.action = message.action.map(e => e);
    } else {
      obj.action = message.action;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformMultiTokenMultiActionResponseAminoMsg): MsgPerformMultiTokenMultiActionResponse {
    return MsgPerformMultiTokenMultiActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformMultiTokenMultiActionResponseProtoMsg): MsgPerformMultiTokenMultiActionResponse {
    return MsgPerformMultiTokenMultiActionResponse.decode(message.value);
  },
  toProto(message: MsgPerformMultiTokenMultiActionResponse): Uint8Array {
    return MsgPerformMultiTokenMultiActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformMultiTokenMultiActionResponse): MsgPerformMultiTokenMultiActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformMultiTokenMultiActionResponse",
      value: MsgPerformMultiTokenMultiActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPerformOneTokenMultiAction(): MsgPerformOneTokenMultiAction {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: "",
    action: [],
    refId: "",
    parameters: []
  };
}
export const MsgPerformOneTokenMultiAction = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiAction",
  encode(message: MsgPerformOneTokenMultiAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    for (const v of message.action) {
      writer.uint32(34).string(v!);
    }
    if (message.refId !== "") {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformOneTokenMultiAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformOneTokenMultiAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.action.push(reader.string());
          break;
        case 5:
          message.refId = reader.string();
          break;
        case 6:
          message.parameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformOneTokenMultiAction>): MsgPerformOneTokenMultiAction {
    const message = createBaseMsgPerformOneTokenMultiAction();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.action = object.action?.map(e => e) || [];
    message.refId = object.refId ?? "";
    message.parameters = object.parameters?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPerformOneTokenMultiActionAmino): MsgPerformOneTokenMultiAction {
    const message = createBaseMsgPerformOneTokenMultiAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    message.action = object.action?.map(e => e) || [];
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    message.parameters = object.parameters?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPerformOneTokenMultiAction): MsgPerformOneTokenMultiActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    if (message.action) {
      obj.action = message.action.map(e => e);
    } else {
      obj.action = message.action;
    }
    obj.refId = message.refId === "" ? undefined : message.refId;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformOneTokenMultiActionAminoMsg): MsgPerformOneTokenMultiAction {
    return MsgPerformOneTokenMultiAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformOneTokenMultiActionProtoMsg): MsgPerformOneTokenMultiAction {
    return MsgPerformOneTokenMultiAction.decode(message.value);
  },
  toProto(message: MsgPerformOneTokenMultiAction): Uint8Array {
    return MsgPerformOneTokenMultiAction.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformOneTokenMultiAction): MsgPerformOneTokenMultiActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiAction",
      value: MsgPerformOneTokenMultiAction.encode(message).finish()
    };
  }
};
function createBaseMsgPerformOneTokenMultiActionResponse(): MsgPerformOneTokenMultiActionResponse {
  return {
    nftSchemaCode: "",
    tokenId: "",
    action: []
  };
}
export const MsgPerformOneTokenMultiActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiActionResponse",
  encode(message: MsgPerformOneTokenMultiActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    for (const v of message.action) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformOneTokenMultiActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformOneTokenMultiActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.action.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformOneTokenMultiActionResponse>): MsgPerformOneTokenMultiActionResponse {
    const message = createBaseMsgPerformOneTokenMultiActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.action = object.action?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPerformOneTokenMultiActionResponseAmino): MsgPerformOneTokenMultiActionResponse {
    const message = createBaseMsgPerformOneTokenMultiActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    message.action = object.action?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgPerformOneTokenMultiActionResponse): MsgPerformOneTokenMultiActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    if (message.action) {
      obj.action = message.action.map(e => e);
    } else {
      obj.action = message.action;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformOneTokenMultiActionResponseAminoMsg): MsgPerformOneTokenMultiActionResponse {
    return MsgPerformOneTokenMultiActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformOneTokenMultiActionResponseProtoMsg): MsgPerformOneTokenMultiActionResponse {
    return MsgPerformOneTokenMultiActionResponse.decode(message.value);
  },
  toProto(message: MsgPerformOneTokenMultiActionResponse): Uint8Array {
    return MsgPerformOneTokenMultiActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformOneTokenMultiActionResponse): MsgPerformOneTokenMultiActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformOneTokenMultiActionResponse",
      value: MsgPerformOneTokenMultiActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAttribute(): MsgAddAttribute {
  return {
    creator: "",
    code: "",
    location: 0,
    base64NewAttriuteDefenition: ""
  };
}
export const MsgAddAttribute = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute",
  encode(message: MsgAddAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.location !== 0) {
      writer.uint32(24).int32(message.location);
    }
    if (message.base64NewAttriuteDefenition !== "") {
      writer.uint32(34).string(message.base64NewAttriuteDefenition);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.location = reader.int32() as any;
          break;
        case 4:
          message.base64NewAttriuteDefenition = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAttribute>): MsgAddAttribute {
    const message = createBaseMsgAddAttribute();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.location = object.location ?? 0;
    message.base64NewAttriuteDefenition = object.base64NewAttriuteDefenition ?? "";
    return message;
  },
  fromAmino(object: MsgAddAttributeAmino): MsgAddAttribute {
    const message = createBaseMsgAddAttribute();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    if (object.base64NewAttriuteDefenition !== undefined && object.base64NewAttriuteDefenition !== null) {
      message.base64NewAttriuteDefenition = object.base64NewAttriuteDefenition;
    }
    return message;
  },
  toAmino(message: MsgAddAttribute): MsgAddAttributeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.location = message.location === 0 ? undefined : message.location;
    obj.base64NewAttriuteDefenition = message.base64NewAttriuteDefenition === "" ? undefined : message.base64NewAttriuteDefenition;
    return obj;
  },
  fromAminoMsg(object: MsgAddAttributeAminoMsg): MsgAddAttribute {
    return MsgAddAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAttributeProtoMsg): MsgAddAttribute {
    return MsgAddAttribute.decode(message.value);
  },
  toProto(message: MsgAddAttribute): Uint8Array {
    return MsgAddAttribute.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAttribute): MsgAddAttributeProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute",
      value: MsgAddAttribute.encode(message).finish()
    };
  }
};
function createBaseMsgAddAttributeResponse(): MsgAddAttributeResponse {
  return {
    code: "",
    name: "",
    onchainData: undefined
  };
}
export const MsgAddAttributeResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttributeResponse",
  encode(message: MsgAddAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.onchainData !== undefined) {
      OnChainData.encode(message.onchainData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAttributeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.onchainData = OnChainData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAttributeResponse>): MsgAddAttributeResponse {
    const message = createBaseMsgAddAttributeResponse();
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.onchainData = object.onchainData !== undefined && object.onchainData !== null ? OnChainData.fromPartial(object.onchainData) : undefined;
    return message;
  },
  fromAmino(object: MsgAddAttributeResponseAmino): MsgAddAttributeResponse {
    const message = createBaseMsgAddAttributeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.onchainData !== undefined && object.onchainData !== null) {
      message.onchainData = OnChainData.fromAmino(object.onchainData);
    }
    return message;
  },
  toAmino(message: MsgAddAttributeResponse): MsgAddAttributeResponseAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    obj.name = message.name === "" ? undefined : message.name;
    obj.onchainData = message.onchainData ? OnChainData.toAmino(message.onchainData) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddAttributeResponseAminoMsg): MsgAddAttributeResponse {
    return MsgAddAttributeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAttributeResponseProtoMsg): MsgAddAttributeResponse {
    return MsgAddAttributeResponse.decode(message.value);
  },
  toProto(message: MsgAddAttributeResponse): Uint8Array {
    return MsgAddAttributeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAttributeResponse): MsgAddAttributeResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttributeResponse",
      value: MsgAddAttributeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAction(): MsgAddAction {
  return {
    creator: "",
    code: "",
    base64NewAction: ""
  };
}
export const MsgAddAction = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction",
  encode(message: MsgAddAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.base64NewAction !== "") {
      writer.uint32(26).string(message.base64NewAction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.base64NewAction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAction>): MsgAddAction {
    const message = createBaseMsgAddAction();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.base64NewAction = object.base64NewAction ?? "";
    return message;
  },
  fromAmino(object: MsgAddActionAmino): MsgAddAction {
    const message = createBaseMsgAddAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.base64NewAction !== undefined && object.base64NewAction !== null) {
      message.base64NewAction = object.base64NewAction;
    }
    return message;
  },
  toAmino(message: MsgAddAction): MsgAddActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.base64NewAction = message.base64NewAction === "" ? undefined : message.base64NewAction;
    return obj;
  },
  fromAminoMsg(object: MsgAddActionAminoMsg): MsgAddAction {
    return MsgAddAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddActionProtoMsg): MsgAddAction {
    return MsgAddAction.decode(message.value);
  },
  toProto(message: MsgAddAction): Uint8Array {
    return MsgAddAction.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAction): MsgAddActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction",
      value: MsgAddAction.encode(message).finish()
    };
  }
};
function createBaseMsgAddActionResponse(): MsgAddActionResponse {
  return {
    code: "",
    name: "",
    onchainData: undefined
  };
}
export const MsgAddActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddActionResponse",
  encode(message: MsgAddActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.onchainData !== undefined) {
      OnChainData.encode(message.onchainData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.onchainData = OnChainData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddActionResponse>): MsgAddActionResponse {
    const message = createBaseMsgAddActionResponse();
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.onchainData = object.onchainData !== undefined && object.onchainData !== null ? OnChainData.fromPartial(object.onchainData) : undefined;
    return message;
  },
  fromAmino(object: MsgAddActionResponseAmino): MsgAddActionResponse {
    const message = createBaseMsgAddActionResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.onchainData !== undefined && object.onchainData !== null) {
      message.onchainData = OnChainData.fromAmino(object.onchainData);
    }
    return message;
  },
  toAmino(message: MsgAddActionResponse): MsgAddActionResponseAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    obj.name = message.name === "" ? undefined : message.name;
    obj.onchainData = message.onchainData ? OnChainData.toAmino(message.onchainData) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddActionResponseAminoMsg): MsgAddActionResponse {
    return MsgAddActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddActionResponseProtoMsg): MsgAddActionResponse {
    return MsgAddActionResponse.decode(message.value);
  },
  toProto(message: MsgAddActionResponse): Uint8Array {
    return MsgAddActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddActionResponse): MsgAddActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddActionResponse",
      value: MsgAddActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetNFTAttribute(): MsgSetNFTAttribute {
  return {
    creator: "",
    nftSchemaCode: "",
    base64NftAttributeValue: ""
  };
}
export const MsgSetNFTAttribute = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute",
  encode(message: MsgSetNFTAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64NftAttributeValue !== "") {
      writer.uint32(26).string(message.base64NftAttributeValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNFTAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNFTAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.base64NftAttributeValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetNFTAttribute>): MsgSetNFTAttribute {
    const message = createBaseMsgSetNFTAttribute();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.base64NftAttributeValue = object.base64NftAttributeValue ?? "";
    return message;
  },
  fromAmino(object: MsgSetNFTAttributeAmino): MsgSetNFTAttribute {
    const message = createBaseMsgSetNFTAttribute();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.base64_nft_attribute_value !== undefined && object.base64_nft_attribute_value !== null) {
      message.base64NftAttributeValue = object.base64_nft_attribute_value;
    }
    return message;
  },
  toAmino(message: MsgSetNFTAttribute): MsgSetNFTAttributeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.base64_nft_attribute_value = message.base64NftAttributeValue === "" ? undefined : message.base64NftAttributeValue;
    return obj;
  },
  fromAminoMsg(object: MsgSetNFTAttributeAminoMsg): MsgSetNFTAttribute {
    return MsgSetNFTAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetNFTAttributeProtoMsg): MsgSetNFTAttribute {
    return MsgSetNFTAttribute.decode(message.value);
  },
  toProto(message: MsgSetNFTAttribute): Uint8Array {
    return MsgSetNFTAttribute.encode(message).finish();
  },
  toProtoMsg(message: MsgSetNFTAttribute): MsgSetNFTAttributeProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute",
      value: MsgSetNFTAttribute.encode(message).finish()
    };
  }
};
function createBaseMsgSetNFTAttributeResponse(): MsgSetNFTAttributeResponse {
  return {
    nftSchemaCode: "",
    attributeName: "",
    nftAttributeValue: ""
  };
}
export const MsgSetNFTAttributeResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttributeResponse",
  encode(message: MsgSetNFTAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.attributeName !== "") {
      writer.uint32(18).string(message.attributeName);
    }
    if (message.nftAttributeValue !== "") {
      writer.uint32(26).string(message.nftAttributeValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNFTAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNFTAttributeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.attributeName = reader.string();
          break;
        case 3:
          message.nftAttributeValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetNFTAttributeResponse>): MsgSetNFTAttributeResponse {
    const message = createBaseMsgSetNFTAttributeResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.attributeName = object.attributeName ?? "";
    message.nftAttributeValue = object.nftAttributeValue ?? "";
    return message;
  },
  fromAmino(object: MsgSetNFTAttributeResponseAmino): MsgSetNFTAttributeResponse {
    const message = createBaseMsgSetNFTAttributeResponse();
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.attribute_name !== undefined && object.attribute_name !== null) {
      message.attributeName = object.attribute_name;
    }
    if (object.nft_attribute_value !== undefined && object.nft_attribute_value !== null) {
      message.nftAttributeValue = object.nft_attribute_value;
    }
    return message;
  },
  toAmino(message: MsgSetNFTAttributeResponse): MsgSetNFTAttributeResponseAmino {
    const obj: any = {};
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.attribute_name = message.attributeName === "" ? undefined : message.attributeName;
    obj.nft_attribute_value = message.nftAttributeValue === "" ? undefined : message.nftAttributeValue;
    return obj;
  },
  fromAminoMsg(object: MsgSetNFTAttributeResponseAminoMsg): MsgSetNFTAttributeResponse {
    return MsgSetNFTAttributeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetNFTAttributeResponseProtoMsg): MsgSetNFTAttributeResponse {
    return MsgSetNFTAttributeResponse.decode(message.value);
  },
  toProto(message: MsgSetNFTAttributeResponse): Uint8Array {
    return MsgSetNFTAttributeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetNFTAttributeResponse): MsgSetNFTAttributeResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttributeResponse",
      value: MsgSetNFTAttributeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetBaseUri(): MsgSetBaseUri {
  return {
    creator: "",
    code: "",
    newBaseUri: ""
  };
}
export const MsgSetBaseUri = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri",
  encode(message: MsgSetBaseUri, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.newBaseUri !== "") {
      writer.uint32(26).string(message.newBaseUri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseUri();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.newBaseUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetBaseUri>): MsgSetBaseUri {
    const message = createBaseMsgSetBaseUri();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.newBaseUri = object.newBaseUri ?? "";
    return message;
  },
  fromAmino(object: MsgSetBaseUriAmino): MsgSetBaseUri {
    const message = createBaseMsgSetBaseUri();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.newBaseUri !== undefined && object.newBaseUri !== null) {
      message.newBaseUri = object.newBaseUri;
    }
    return message;
  },
  toAmino(message: MsgSetBaseUri): MsgSetBaseUriAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.newBaseUri = message.newBaseUri === "" ? undefined : message.newBaseUri;
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseUriAminoMsg): MsgSetBaseUri {
    return MsgSetBaseUri.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBaseUriProtoMsg): MsgSetBaseUri {
    return MsgSetBaseUri.decode(message.value);
  },
  toProto(message: MsgSetBaseUri): Uint8Array {
    return MsgSetBaseUri.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseUri): MsgSetBaseUriProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri",
      value: MsgSetBaseUri.encode(message).finish()
    };
  }
};
function createBaseMsgSetBaseUriResponse(): MsgSetBaseUriResponse {
  return {
    code: "",
    uri: ""
  };
}
export const MsgSetBaseUriResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUriResponse",
  encode(message: MsgSetBaseUriResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseUriResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseUriResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetBaseUriResponse>): MsgSetBaseUriResponse {
    const message = createBaseMsgSetBaseUriResponse();
    message.code = object.code ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
  fromAmino(object: MsgSetBaseUriResponseAmino): MsgSetBaseUriResponse {
    const message = createBaseMsgSetBaseUriResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    return message;
  },
  toAmino(message: MsgSetBaseUriResponse): MsgSetBaseUriResponseAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    obj.uri = message.uri === "" ? undefined : message.uri;
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseUriResponseAminoMsg): MsgSetBaseUriResponse {
    return MsgSetBaseUriResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBaseUriResponseProtoMsg): MsgSetBaseUriResponse {
    return MsgSetBaseUriResponse.decode(message.value);
  },
  toProto(message: MsgSetBaseUriResponse): Uint8Array {
    return MsgSetBaseUriResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseUriResponse): MsgSetBaseUriResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUriResponse",
      value: MsgSetBaseUriResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleAction(): MsgToggleAction {
  return {
    creator: "",
    code: "",
    action: "",
    disable: false
  };
}
export const MsgToggleAction = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction",
  encode(message: MsgToggleAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    if (message.disable === true) {
      writer.uint32(32).bool(message.disable);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.disable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleAction>): MsgToggleAction {
    const message = createBaseMsgToggleAction();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.action = object.action ?? "";
    message.disable = object.disable ?? false;
    return message;
  },
  fromAmino(object: MsgToggleActionAmino): MsgToggleAction {
    const message = createBaseMsgToggleAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    }
    return message;
  },
  toAmino(message: MsgToggleAction): MsgToggleActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.action = message.action === "" ? undefined : message.action;
    obj.disable = message.disable === false ? undefined : message.disable;
    return obj;
  },
  fromAminoMsg(object: MsgToggleActionAminoMsg): MsgToggleAction {
    return MsgToggleAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleActionProtoMsg): MsgToggleAction {
    return MsgToggleAction.decode(message.value);
  },
  toProto(message: MsgToggleAction): Uint8Array {
    return MsgToggleAction.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleAction): MsgToggleActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction",
      value: MsgToggleAction.encode(message).finish()
    };
  }
};
function createBaseMsgToggleActionResponse(): MsgToggleActionResponse {
  return {
    code: "",
    name: "",
    onchainDataAction: undefined
  };
}
export const MsgToggleActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleActionResponse",
  encode(message: MsgToggleActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.onchainDataAction !== undefined) {
      OnChainData.encode(message.onchainDataAction, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.onchainDataAction = OnChainData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleActionResponse>): MsgToggleActionResponse {
    const message = createBaseMsgToggleActionResponse();
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.onchainDataAction = object.onchainDataAction !== undefined && object.onchainDataAction !== null ? OnChainData.fromPartial(object.onchainDataAction) : undefined;
    return message;
  },
  fromAmino(object: MsgToggleActionResponseAmino): MsgToggleActionResponse {
    const message = createBaseMsgToggleActionResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.onchainDataAction !== undefined && object.onchainDataAction !== null) {
      message.onchainDataAction = OnChainData.fromAmino(object.onchainDataAction);
    }
    return message;
  },
  toAmino(message: MsgToggleActionResponse): MsgToggleActionResponseAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    obj.name = message.name === "" ? undefined : message.name;
    obj.onchainDataAction = message.onchainDataAction ? OnChainData.toAmino(message.onchainDataAction) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgToggleActionResponseAminoMsg): MsgToggleActionResponse {
    return MsgToggleActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleActionResponseProtoMsg): MsgToggleActionResponse {
    return MsgToggleActionResponse.decode(message.value);
  },
  toProto(message: MsgToggleActionResponse): Uint8Array {
    return MsgToggleActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleActionResponse): MsgToggleActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleActionResponse",
      value: MsgToggleActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeSchemaOwner(): MsgChangeSchemaOwner {
  return {
    creator: "",
    nftSchemaCode: "",
    newOwner: ""
  };
}
export const MsgChangeSchemaOwner = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner",
  encode(message: MsgChangeSchemaOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeSchemaOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeSchemaOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeSchemaOwner>): MsgChangeSchemaOwner {
    const message = createBaseMsgChangeSchemaOwner();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgChangeSchemaOwnerAmino): MsgChangeSchemaOwner {
    const message = createBaseMsgChangeSchemaOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeSchemaOwner): MsgChangeSchemaOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.newOwner = message.newOwner === "" ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeSchemaOwnerAminoMsg): MsgChangeSchemaOwner {
    return MsgChangeSchemaOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeSchemaOwnerProtoMsg): MsgChangeSchemaOwner {
    return MsgChangeSchemaOwner.decode(message.value);
  },
  toProto(message: MsgChangeSchemaOwner): Uint8Array {
    return MsgChangeSchemaOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeSchemaOwner): MsgChangeSchemaOwnerProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner",
      value: MsgChangeSchemaOwner.encode(message).finish()
    };
  }
};
function createBaseMsgChangeSchemaOwnerResponse(): MsgChangeSchemaOwnerResponse {
  return {
    nftSchemaCode: "",
    newOwner: ""
  };
}
export const MsgChangeSchemaOwnerResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwnerResponse",
  encode(message: MsgChangeSchemaOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.newOwner !== "") {
      writer.uint32(18).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeSchemaOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeSchemaOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeSchemaOwnerResponse>): MsgChangeSchemaOwnerResponse {
    const message = createBaseMsgChangeSchemaOwnerResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgChangeSchemaOwnerResponseAmino): MsgChangeSchemaOwnerResponse {
    const message = createBaseMsgChangeSchemaOwnerResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeSchemaOwnerResponse): MsgChangeSchemaOwnerResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.newOwner = message.newOwner === "" ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeSchemaOwnerResponseAminoMsg): MsgChangeSchemaOwnerResponse {
    return MsgChangeSchemaOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeSchemaOwnerResponseProtoMsg): MsgChangeSchemaOwnerResponse {
    return MsgChangeSchemaOwnerResponse.decode(message.value);
  },
  toProto(message: MsgChangeSchemaOwnerResponse): Uint8Array {
    return MsgChangeSchemaOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeSchemaOwnerResponse): MsgChangeSchemaOwnerResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwnerResponse",
      value: MsgChangeSchemaOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddSystemActioner(): MsgAddSystemActioner {
  return {
    creator: "",
    nftSchemaCode: "",
    actioner: ""
  };
}
export const MsgAddSystemActioner = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner",
  encode(message: MsgAddSystemActioner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(26).string(message.actioner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSystemActioner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSystemActioner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddSystemActioner>): MsgAddSystemActioner {
    const message = createBaseMsgAddSystemActioner();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.actioner = object.actioner ?? "";
    return message;
  },
  fromAmino(object: MsgAddSystemActionerAmino): MsgAddSystemActioner {
    const message = createBaseMsgAddSystemActioner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    }
    return message;
  },
  toAmino(message: MsgAddSystemActioner): MsgAddSystemActionerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.actioner = message.actioner === "" ? undefined : message.actioner;
    return obj;
  },
  fromAminoMsg(object: MsgAddSystemActionerAminoMsg): MsgAddSystemActioner {
    return MsgAddSystemActioner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSystemActionerProtoMsg): MsgAddSystemActioner {
    return MsgAddSystemActioner.decode(message.value);
  },
  toProto(message: MsgAddSystemActioner): Uint8Array {
    return MsgAddSystemActioner.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSystemActioner): MsgAddSystemActionerProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner",
      value: MsgAddSystemActioner.encode(message).finish()
    };
  }
};
function createBaseMsgAddSystemActionerResponse(): MsgAddSystemActionerResponse {
  return {
    nftSchemaCode: "",
    actioner: ""
  };
}
export const MsgAddSystemActionerResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActionerResponse",
  encode(message: MsgAddSystemActionerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(18).string(message.actioner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSystemActionerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSystemActionerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddSystemActionerResponse>): MsgAddSystemActionerResponse {
    const message = createBaseMsgAddSystemActionerResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.actioner = object.actioner ?? "";
    return message;
  },
  fromAmino(object: MsgAddSystemActionerResponseAmino): MsgAddSystemActionerResponse {
    const message = createBaseMsgAddSystemActionerResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    }
    return message;
  },
  toAmino(message: MsgAddSystemActionerResponse): MsgAddSystemActionerResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.actioner = message.actioner === "" ? undefined : message.actioner;
    return obj;
  },
  fromAminoMsg(object: MsgAddSystemActionerResponseAminoMsg): MsgAddSystemActionerResponse {
    return MsgAddSystemActionerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSystemActionerResponseProtoMsg): MsgAddSystemActionerResponse {
    return MsgAddSystemActionerResponse.decode(message.value);
  },
  toProto(message: MsgAddSystemActionerResponse): Uint8Array {
    return MsgAddSystemActionerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSystemActionerResponse): MsgAddSystemActionerResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActionerResponse",
      value: MsgAddSystemActionerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveSystemActioner(): MsgRemoveSystemActioner {
  return {
    creator: "",
    nftSchemaCode: "",
    actioner: ""
  };
}
export const MsgRemoveSystemActioner = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner",
  encode(message: MsgRemoveSystemActioner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(26).string(message.actioner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSystemActioner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSystemActioner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveSystemActioner>): MsgRemoveSystemActioner {
    const message = createBaseMsgRemoveSystemActioner();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.actioner = object.actioner ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveSystemActionerAmino): MsgRemoveSystemActioner {
    const message = createBaseMsgRemoveSystemActioner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    }
    return message;
  },
  toAmino(message: MsgRemoveSystemActioner): MsgRemoveSystemActionerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.actioner = message.actioner === "" ? undefined : message.actioner;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveSystemActionerAminoMsg): MsgRemoveSystemActioner {
    return MsgRemoveSystemActioner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveSystemActionerProtoMsg): MsgRemoveSystemActioner {
    return MsgRemoveSystemActioner.decode(message.value);
  },
  toProto(message: MsgRemoveSystemActioner): Uint8Array {
    return MsgRemoveSystemActioner.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveSystemActioner): MsgRemoveSystemActionerProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner",
      value: MsgRemoveSystemActioner.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveSystemActionerResponse(): MsgRemoveSystemActionerResponse {
  return {
    nftSchemaCode: "",
    actioner: ""
  };
}
export const MsgRemoveSystemActionerResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActionerResponse",
  encode(message: MsgRemoveSystemActionerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.actioner !== "") {
      writer.uint32(18).string(message.actioner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSystemActionerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSystemActionerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.actioner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveSystemActionerResponse>): MsgRemoveSystemActionerResponse {
    const message = createBaseMsgRemoveSystemActionerResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.actioner = object.actioner ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveSystemActionerResponseAmino): MsgRemoveSystemActionerResponse {
    const message = createBaseMsgRemoveSystemActionerResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.actioner !== undefined && object.actioner !== null) {
      message.actioner = object.actioner;
    }
    return message;
  },
  toAmino(message: MsgRemoveSystemActionerResponse): MsgRemoveSystemActionerResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.actioner = message.actioner === "" ? undefined : message.actioner;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveSystemActionerResponseAminoMsg): MsgRemoveSystemActionerResponse {
    return MsgRemoveSystemActionerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveSystemActionerResponseProtoMsg): MsgRemoveSystemActionerResponse {
    return MsgRemoveSystemActionerResponse.decode(message.value);
  },
  toProto(message: MsgRemoveSystemActionerResponse): Uint8Array {
    return MsgRemoveSystemActionerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveSystemActionerResponse): MsgRemoveSystemActionerResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActionerResponse",
      value: MsgRemoveSystemActionerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResyncAttributesResponse(): MsgResyncAttributesResponse {
  return {
    nftSchemaCode: ""
  };
}
export const MsgResyncAttributesResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributesResponse",
  encode(message: MsgResyncAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResyncAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResyncAttributesResponse();
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
  fromPartial(object: Partial<MsgResyncAttributesResponse>): MsgResyncAttributesResponse {
    const message = createBaseMsgResyncAttributesResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    return message;
  },
  fromAmino(object: MsgResyncAttributesResponseAmino): MsgResyncAttributesResponse {
    const message = createBaseMsgResyncAttributesResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: MsgResyncAttributesResponse): MsgResyncAttributesResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: MsgResyncAttributesResponseAminoMsg): MsgResyncAttributesResponse {
    return MsgResyncAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResyncAttributesResponseProtoMsg): MsgResyncAttributesResponse {
    return MsgResyncAttributesResponse.decode(message.value);
  },
  toProto(message: MsgResyncAttributesResponse): Uint8Array {
    return MsgResyncAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResyncAttributesResponse): MsgResyncAttributesResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributesResponse",
      value: MsgResyncAttributesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgShowAttributes(): MsgShowAttributes {
  return {
    creator: "",
    nftSchemaCode: "",
    show: false,
    attributeNames: []
  };
}
export const MsgShowAttributes = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes",
  encode(message: MsgShowAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.show === true) {
      writer.uint32(24).bool(message.show);
    }
    for (const v of message.attributeNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShowAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShowAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.show = reader.bool();
          break;
        case 4:
          message.attributeNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgShowAttributes>): MsgShowAttributes {
    const message = createBaseMsgShowAttributes();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.show = object.show ?? false;
    message.attributeNames = object.attributeNames?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgShowAttributesAmino): MsgShowAttributes {
    const message = createBaseMsgShowAttributes();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.show !== undefined && object.show !== null) {
      message.show = object.show;
    }
    message.attributeNames = object.attributeNames?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgShowAttributes): MsgShowAttributesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.show = message.show === false ? undefined : message.show;
    if (message.attributeNames) {
      obj.attributeNames = message.attributeNames.map(e => e);
    } else {
      obj.attributeNames = message.attributeNames;
    }
    return obj;
  },
  fromAminoMsg(object: MsgShowAttributesAminoMsg): MsgShowAttributes {
    return MsgShowAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgShowAttributesProtoMsg): MsgShowAttributes {
    return MsgShowAttributes.decode(message.value);
  },
  toProto(message: MsgShowAttributes): Uint8Array {
    return MsgShowAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgShowAttributes): MsgShowAttributesProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes",
      value: MsgShowAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgShowAttributesResponse(): MsgShowAttributesResponse {
  return {
    nftSchema: ""
  };
}
export const MsgShowAttributesResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributesResponse",
  encode(message: MsgShowAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchema !== "") {
      writer.uint32(10).string(message.nftSchema);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShowAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShowAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchema = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgShowAttributesResponse>): MsgShowAttributesResponse {
    const message = createBaseMsgShowAttributesResponse();
    message.nftSchema = object.nftSchema ?? "";
    return message;
  },
  fromAmino(object: MsgShowAttributesResponseAmino): MsgShowAttributesResponse {
    const message = createBaseMsgShowAttributesResponse();
    if (object.nftSchema !== undefined && object.nftSchema !== null) {
      message.nftSchema = object.nftSchema;
    }
    return message;
  },
  toAmino(message: MsgShowAttributesResponse): MsgShowAttributesResponseAmino {
    const obj: any = {};
    obj.nftSchema = message.nftSchema === "" ? undefined : message.nftSchema;
    return obj;
  },
  fromAminoMsg(object: MsgShowAttributesResponseAminoMsg): MsgShowAttributesResponse {
    return MsgShowAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgShowAttributesResponseProtoMsg): MsgShowAttributesResponse {
    return MsgShowAttributesResponse.decode(message.value);
  },
  toProto(message: MsgShowAttributesResponse): Uint8Array {
    return MsgShowAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgShowAttributesResponse): MsgShowAttributesResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributesResponse",
      value: MsgShowAttributesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResyncAttributes(): MsgResyncAttributes {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: ""
  };
}
export const MsgResyncAttributes = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes",
  encode(message: MsgResyncAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResyncAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResyncAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgResyncAttributes>): MsgResyncAttributes {
    const message = createBaseMsgResyncAttributes();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromAmino(object: MsgResyncAttributesAmino): MsgResyncAttributes {
    const message = createBaseMsgResyncAttributes();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgResyncAttributes): MsgResyncAttributesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgResyncAttributesAminoMsg): MsgResyncAttributes {
    return MsgResyncAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResyncAttributesProtoMsg): MsgResyncAttributes {
    return MsgResyncAttributes.decode(message.value);
  },
  toProto(message: MsgResyncAttributes): Uint8Array {
    return MsgResyncAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgResyncAttributes): MsgResyncAttributesProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes",
      value: MsgResyncAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgSetFeeConfig(): MsgSetFeeConfig {
  return {
    creator: "",
    newFeeConfigBase64: "",
    feeSubject: 0
  };
}
export const MsgSetFeeConfig = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig",
  encode(message: MsgSetFeeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newFeeConfigBase64 !== "") {
      writer.uint32(18).string(message.newFeeConfigBase64);
    }
    if (message.feeSubject !== 0) {
      writer.uint32(24).int32(message.feeSubject);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeeConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newFeeConfigBase64 = reader.string();
          break;
        case 3:
          message.feeSubject = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetFeeConfig>): MsgSetFeeConfig {
    const message = createBaseMsgSetFeeConfig();
    message.creator = object.creator ?? "";
    message.newFeeConfigBase64 = object.newFeeConfigBase64 ?? "";
    message.feeSubject = object.feeSubject ?? 0;
    return message;
  },
  fromAmino(object: MsgSetFeeConfigAmino): MsgSetFeeConfig {
    const message = createBaseMsgSetFeeConfig();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.newFeeConfigBase64 !== undefined && object.newFeeConfigBase64 !== null) {
      message.newFeeConfigBase64 = object.newFeeConfigBase64;
    }
    if (object.feeSubject !== undefined && object.feeSubject !== null) {
      message.feeSubject = object.feeSubject;
    }
    return message;
  },
  toAmino(message: MsgSetFeeConfig): MsgSetFeeConfigAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.newFeeConfigBase64 = message.newFeeConfigBase64 === "" ? undefined : message.newFeeConfigBase64;
    obj.feeSubject = message.feeSubject === 0 ? undefined : message.feeSubject;
    return obj;
  },
  fromAminoMsg(object: MsgSetFeeConfigAminoMsg): MsgSetFeeConfig {
    return MsgSetFeeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFeeConfigProtoMsg): MsgSetFeeConfig {
    return MsgSetFeeConfig.decode(message.value);
  },
  toProto(message: MsgSetFeeConfig): Uint8Array {
    return MsgSetFeeConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFeeConfig): MsgSetFeeConfigProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig",
      value: MsgSetFeeConfig.encode(message).finish()
    };
  }
};
function createBaseMsgSetFeeConfigResponse(): MsgSetFeeConfigResponse {
  return {};
}
export const MsgSetFeeConfigResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfigResponse",
  encode(_: MsgSetFeeConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeeConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeeConfigResponse();
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
  fromPartial(_: Partial<MsgSetFeeConfigResponse>): MsgSetFeeConfigResponse {
    const message = createBaseMsgSetFeeConfigResponse();
    return message;
  },
  fromAmino(_: MsgSetFeeConfigResponseAmino): MsgSetFeeConfigResponse {
    const message = createBaseMsgSetFeeConfigResponse();
    return message;
  },
  toAmino(_: MsgSetFeeConfigResponse): MsgSetFeeConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetFeeConfigResponseAminoMsg): MsgSetFeeConfigResponse {
    return MsgSetFeeConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFeeConfigResponseProtoMsg): MsgSetFeeConfigResponse {
    return MsgSetFeeConfigResponse.decode(message.value);
  },
  toProto(message: MsgSetFeeConfigResponse): Uint8Array {
    return MsgSetFeeConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFeeConfigResponse): MsgSetFeeConfigResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfigResponse",
      value: MsgSetFeeConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintauth(): MsgSetMintauth {
  return {
    creator: "",
    nftSchemaCode: "",
    authorizeTo: 0
  };
}
export const MsgSetMintauth = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth",
  encode(message: MsgSetMintauth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.authorizeTo !== 0) {
      writer.uint32(24).int32(message.authorizeTo);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMintauth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintauth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.authorizeTo = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMintauth>): MsgSetMintauth {
    const message = createBaseMsgSetMintauth();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.authorizeTo = object.authorizeTo ?? 0;
    return message;
  },
  fromAmino(object: MsgSetMintauthAmino): MsgSetMintauth {
    const message = createBaseMsgSetMintauth();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.authorizeTo !== undefined && object.authorizeTo !== null) {
      message.authorizeTo = object.authorizeTo;
    }
    return message;
  },
  toAmino(message: MsgSetMintauth): MsgSetMintauthAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.authorizeTo = message.authorizeTo === 0 ? undefined : message.authorizeTo;
    return obj;
  },
  fromAminoMsg(object: MsgSetMintauthAminoMsg): MsgSetMintauth {
    return MsgSetMintauth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMintauthProtoMsg): MsgSetMintauth {
    return MsgSetMintauth.decode(message.value);
  },
  toProto(message: MsgSetMintauth): Uint8Array {
    return MsgSetMintauth.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintauth): MsgSetMintauthProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth",
      value: MsgSetMintauth.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintauthResponse(): MsgSetMintauthResponse {
  return {
    nftSchemaCode: ""
  };
}
export const MsgSetMintauthResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauthResponse",
  encode(message: MsgSetMintauthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMintauthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintauthResponse();
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
  fromPartial(object: Partial<MsgSetMintauthResponse>): MsgSetMintauthResponse {
    const message = createBaseMsgSetMintauthResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    return message;
  },
  fromAmino(object: MsgSetMintauthResponseAmino): MsgSetMintauthResponse {
    const message = createBaseMsgSetMintauthResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: MsgSetMintauthResponse): MsgSetMintauthResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: MsgSetMintauthResponseAminoMsg): MsgSetMintauthResponse {
    return MsgSetMintauthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMintauthResponseProtoMsg): MsgSetMintauthResponse {
    return MsgSetMintauthResponse.decode(message.value);
  },
  toProto(message: MsgSetMintauthResponse): Uint8Array {
    return MsgSetMintauthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintauthResponse): MsgSetMintauthResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauthResponse",
      value: MsgSetMintauthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeOrgOwner(): MsgChangeOrgOwner {
  return {
    creator: "",
    orgName: "",
    toNewOwner: ""
  };
}
export const MsgChangeOrgOwner = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner",
  encode(message: MsgChangeOrgOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.orgName !== "") {
      writer.uint32(18).string(message.orgName);
    }
    if (message.toNewOwner !== "") {
      writer.uint32(26).string(message.toNewOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeOrgOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOrgOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.orgName = reader.string();
          break;
        case 3:
          message.toNewOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeOrgOwner>): MsgChangeOrgOwner {
    const message = createBaseMsgChangeOrgOwner();
    message.creator = object.creator ?? "";
    message.orgName = object.orgName ?? "";
    message.toNewOwner = object.toNewOwner ?? "";
    return message;
  },
  fromAmino(object: MsgChangeOrgOwnerAmino): MsgChangeOrgOwner {
    const message = createBaseMsgChangeOrgOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = object.orgName;
    }
    if (object.toNewOwner !== undefined && object.toNewOwner !== null) {
      message.toNewOwner = object.toNewOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeOrgOwner): MsgChangeOrgOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.orgName = message.orgName === "" ? undefined : message.orgName;
    obj.toNewOwner = message.toNewOwner === "" ? undefined : message.toNewOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeOrgOwnerAminoMsg): MsgChangeOrgOwner {
    return MsgChangeOrgOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeOrgOwnerProtoMsg): MsgChangeOrgOwner {
    return MsgChangeOrgOwner.decode(message.value);
  },
  toProto(message: MsgChangeOrgOwner): Uint8Array {
    return MsgChangeOrgOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeOrgOwner): MsgChangeOrgOwnerProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner",
      value: MsgChangeOrgOwner.encode(message).finish()
    };
  }
};
function createBaseMsgChangeOrgOwnerResponse(): MsgChangeOrgOwnerResponse {
  return {
    orgName: "",
    oldOwner: "",
    newOwner: ""
  };
}
export const MsgChangeOrgOwnerResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwnerResponse",
  encode(message: MsgChangeOrgOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgName !== "") {
      writer.uint32(10).string(message.orgName);
    }
    if (message.oldOwner !== "") {
      writer.uint32(18).string(message.oldOwner);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeOrgOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOrgOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgName = reader.string();
          break;
        case 2:
          message.oldOwner = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeOrgOwnerResponse>): MsgChangeOrgOwnerResponse {
    const message = createBaseMsgChangeOrgOwnerResponse();
    message.orgName = object.orgName ?? "";
    message.oldOwner = object.oldOwner ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgChangeOrgOwnerResponseAmino): MsgChangeOrgOwnerResponse {
    const message = createBaseMsgChangeOrgOwnerResponse();
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = object.orgName;
    }
    if (object.oldOwner !== undefined && object.oldOwner !== null) {
      message.oldOwner = object.oldOwner;
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeOrgOwnerResponse): MsgChangeOrgOwnerResponseAmino {
    const obj: any = {};
    obj.orgName = message.orgName === "" ? undefined : message.orgName;
    obj.oldOwner = message.oldOwner === "" ? undefined : message.oldOwner;
    obj.newOwner = message.newOwner === "" ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeOrgOwnerResponseAminoMsg): MsgChangeOrgOwnerResponse {
    return MsgChangeOrgOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeOrgOwnerResponseProtoMsg): MsgChangeOrgOwnerResponse {
    return MsgChangeOrgOwnerResponse.decode(message.value);
  },
  toProto(message: MsgChangeOrgOwnerResponse): Uint8Array {
    return MsgChangeOrgOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeOrgOwnerResponse): MsgChangeOrgOwnerResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwnerResponse",
      value: MsgChangeOrgOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetUriRetrievalMethod(): MsgSetUriRetrievalMethod {
  return {
    creator: "",
    schemaCode: "",
    newMethod: 0
  };
}
export const MsgSetUriRetrievalMethod = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod",
  encode(message: MsgSetUriRetrievalMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newMethod !== 0) {
      writer.uint32(24).int32(message.newMethod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriRetrievalMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriRetrievalMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetUriRetrievalMethod>): MsgSetUriRetrievalMethod {
    const message = createBaseMsgSetUriRetrievalMethod();
    message.creator = object.creator ?? "";
    message.schemaCode = object.schemaCode ?? "";
    message.newMethod = object.newMethod ?? 0;
    return message;
  },
  fromAmino(object: MsgSetUriRetrievalMethodAmino): MsgSetUriRetrievalMethod {
    const message = createBaseMsgSetUriRetrievalMethod();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = object.newMethod;
    }
    return message;
  },
  toAmino(message: MsgSetUriRetrievalMethod): MsgSetUriRetrievalMethodAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newMethod = message.newMethod === 0 ? undefined : message.newMethod;
    return obj;
  },
  fromAminoMsg(object: MsgSetUriRetrievalMethodAminoMsg): MsgSetUriRetrievalMethod {
    return MsgSetUriRetrievalMethod.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUriRetrievalMethodProtoMsg): MsgSetUriRetrievalMethod {
    return MsgSetUriRetrievalMethod.decode(message.value);
  },
  toProto(message: MsgSetUriRetrievalMethod): Uint8Array {
    return MsgSetUriRetrievalMethod.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUriRetrievalMethod): MsgSetUriRetrievalMethodProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod",
      value: MsgSetUriRetrievalMethod.encode(message).finish()
    };
  }
};
function createBaseMsgSetUriRetrievalMethodResponse(): MsgSetUriRetrievalMethodResponse {
  return {
    schemaCode: "",
    newMethod: ""
  };
}
export const MsgSetUriRetrievalMethodResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethodResponse",
  encode(message: MsgSetUriRetrievalMethodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newMethod !== "") {
      writer.uint32(18).string(message.newMethod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriRetrievalMethodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriRetrievalMethodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newMethod = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetUriRetrievalMethodResponse>): MsgSetUriRetrievalMethodResponse {
    const message = createBaseMsgSetUriRetrievalMethodResponse();
    message.schemaCode = object.schemaCode ?? "";
    message.newMethod = object.newMethod ?? "";
    return message;
  },
  fromAmino(object: MsgSetUriRetrievalMethodResponseAmino): MsgSetUriRetrievalMethodResponse {
    const message = createBaseMsgSetUriRetrievalMethodResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = object.newMethod;
    }
    return message;
  },
  toAmino(message: MsgSetUriRetrievalMethodResponse): MsgSetUriRetrievalMethodResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newMethod = message.newMethod === "" ? undefined : message.newMethod;
    return obj;
  },
  fromAminoMsg(object: MsgSetUriRetrievalMethodResponseAminoMsg): MsgSetUriRetrievalMethodResponse {
    return MsgSetUriRetrievalMethodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUriRetrievalMethodResponseProtoMsg): MsgSetUriRetrievalMethodResponse {
    return MsgSetUriRetrievalMethodResponse.decode(message.value);
  },
  toProto(message: MsgSetUriRetrievalMethodResponse): Uint8Array {
    return MsgSetUriRetrievalMethodResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUriRetrievalMethodResponse): MsgSetUriRetrievalMethodResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethodResponse",
      value: MsgSetUriRetrievalMethodResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginChain(): MsgSetOriginChain {
  return {
    creator: "",
    schemaCode: "",
    newOriginChain: ""
  };
}
export const MsgSetOriginChain = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain",
  encode(message: MsgSetOriginChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newOriginChain !== "") {
      writer.uint32(26).string(message.newOriginChain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newOriginChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginChain>): MsgSetOriginChain {
    const message = createBaseMsgSetOriginChain();
    message.creator = object.creator ?? "";
    message.schemaCode = object.schemaCode ?? "";
    message.newOriginChain = object.newOriginChain ?? "";
    return message;
  },
  fromAmino(object: MsgSetOriginChainAmino): MsgSetOriginChain {
    const message = createBaseMsgSetOriginChain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = object.newOriginChain;
    }
    return message;
  },
  toAmino(message: MsgSetOriginChain): MsgSetOriginChainAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newOriginChain = message.newOriginChain === "" ? undefined : message.newOriginChain;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginChainAminoMsg): MsgSetOriginChain {
    return MsgSetOriginChain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginChainProtoMsg): MsgSetOriginChain {
    return MsgSetOriginChain.decode(message.value);
  },
  toProto(message: MsgSetOriginChain): Uint8Array {
    return MsgSetOriginChain.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginChain): MsgSetOriginChainProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain",
      value: MsgSetOriginChain.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginChainResponse(): MsgSetOriginChainResponse {
  return {
    schemaCode: "",
    newOriginChain: ""
  };
}
export const MsgSetOriginChainResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChainResponse",
  encode(message: MsgSetOriginChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newOriginChain !== "") {
      writer.uint32(18).string(message.newOriginChain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newOriginChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginChainResponse>): MsgSetOriginChainResponse {
    const message = createBaseMsgSetOriginChainResponse();
    message.schemaCode = object.schemaCode ?? "";
    message.newOriginChain = object.newOriginChain ?? "";
    return message;
  },
  fromAmino(object: MsgSetOriginChainResponseAmino): MsgSetOriginChainResponse {
    const message = createBaseMsgSetOriginChainResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = object.newOriginChain;
    }
    return message;
  },
  toAmino(message: MsgSetOriginChainResponse): MsgSetOriginChainResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newOriginChain = message.newOriginChain === "" ? undefined : message.newOriginChain;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginChainResponseAminoMsg): MsgSetOriginChainResponse {
    return MsgSetOriginChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginChainResponseProtoMsg): MsgSetOriginChainResponse {
    return MsgSetOriginChainResponse.decode(message.value);
  },
  toProto(message: MsgSetOriginChainResponse): Uint8Array {
    return MsgSetOriginChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginChainResponse): MsgSetOriginChainResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChainResponse",
      value: MsgSetOriginChainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginContract(): MsgSetOriginContract {
  return {
    creator: "",
    schemaCode: "",
    newContractAddress: ""
  };
}
export const MsgSetOriginContract = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract",
  encode(message: MsgSetOriginContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newContractAddress !== "") {
      writer.uint32(26).string(message.newContractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginContract>): MsgSetOriginContract {
    const message = createBaseMsgSetOriginContract();
    message.creator = object.creator ?? "";
    message.schemaCode = object.schemaCode ?? "";
    message.newContractAddress = object.newContractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetOriginContractAmino): MsgSetOriginContract {
    const message = createBaseMsgSetOriginContract();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newContractAddress !== undefined && object.newContractAddress !== null) {
      message.newContractAddress = object.newContractAddress;
    }
    return message;
  },
  toAmino(message: MsgSetOriginContract): MsgSetOriginContractAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newContractAddress = message.newContractAddress === "" ? undefined : message.newContractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginContractAminoMsg): MsgSetOriginContract {
    return MsgSetOriginContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginContractProtoMsg): MsgSetOriginContract {
    return MsgSetOriginContract.decode(message.value);
  },
  toProto(message: MsgSetOriginContract): Uint8Array {
    return MsgSetOriginContract.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginContract): MsgSetOriginContractProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract",
      value: MsgSetOriginContract.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginContractResponse(): MsgSetOriginContractResponse {
  return {
    schemaCode: "",
    newContractAddress: ""
  };
}
export const MsgSetOriginContractResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContractResponse",
  encode(message: MsgSetOriginContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newContractAddress !== "") {
      writer.uint32(18).string(message.newContractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginContractResponse>): MsgSetOriginContractResponse {
    const message = createBaseMsgSetOriginContractResponse();
    message.schemaCode = object.schemaCode ?? "";
    message.newContractAddress = object.newContractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetOriginContractResponseAmino): MsgSetOriginContractResponse {
    const message = createBaseMsgSetOriginContractResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newContractAddress !== undefined && object.newContractAddress !== null) {
      message.newContractAddress = object.newContractAddress;
    }
    return message;
  },
  toAmino(message: MsgSetOriginContractResponse): MsgSetOriginContractResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newContractAddress = message.newContractAddress === "" ? undefined : message.newContractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginContractResponseAminoMsg): MsgSetOriginContractResponse {
    return MsgSetOriginContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginContractResponseProtoMsg): MsgSetOriginContractResponse {
    return MsgSetOriginContractResponse.decode(message.value);
  },
  toProto(message: MsgSetOriginContractResponse): Uint8Array {
    return MsgSetOriginContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginContractResponse): MsgSetOriginContractResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContractResponse",
      value: MsgSetOriginContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetAttributeOveriding(): MsgSetAttributeOveriding {
  return {
    creator: "",
    schemaCode: "",
    newOveridingType: 0
  };
}
export const MsgSetAttributeOveriding = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding",
  encode(message: MsgSetAttributeOveriding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newOveridingType !== 0) {
      writer.uint32(24).int32(message.newOveridingType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAttributeOveriding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAttributeOveriding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newOveridingType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetAttributeOveriding>): MsgSetAttributeOveriding {
    const message = createBaseMsgSetAttributeOveriding();
    message.creator = object.creator ?? "";
    message.schemaCode = object.schemaCode ?? "";
    message.newOveridingType = object.newOveridingType ?? 0;
    return message;
  },
  fromAmino(object: MsgSetAttributeOveridingAmino): MsgSetAttributeOveriding {
    const message = createBaseMsgSetAttributeOveriding();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOveridingType !== undefined && object.newOveridingType !== null) {
      message.newOveridingType = object.newOveridingType;
    }
    return message;
  },
  toAmino(message: MsgSetAttributeOveriding): MsgSetAttributeOveridingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newOveridingType = message.newOveridingType === 0 ? undefined : message.newOveridingType;
    return obj;
  },
  fromAminoMsg(object: MsgSetAttributeOveridingAminoMsg): MsgSetAttributeOveriding {
    return MsgSetAttributeOveriding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAttributeOveridingProtoMsg): MsgSetAttributeOveriding {
    return MsgSetAttributeOveriding.decode(message.value);
  },
  toProto(message: MsgSetAttributeOveriding): Uint8Array {
    return MsgSetAttributeOveriding.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAttributeOveriding): MsgSetAttributeOveridingProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding",
      value: MsgSetAttributeOveriding.encode(message).finish()
    };
  }
};
function createBaseMsgSetAttributeOveridingResponse(): MsgSetAttributeOveridingResponse {
  return {
    schemaCode: "",
    newOveriding: ""
  };
}
export const MsgSetAttributeOveridingResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveridingResponse",
  encode(message: MsgSetAttributeOveridingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newOveriding !== "") {
      writer.uint32(18).string(message.newOveriding);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAttributeOveridingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAttributeOveridingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newOveriding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetAttributeOveridingResponse>): MsgSetAttributeOveridingResponse {
    const message = createBaseMsgSetAttributeOveridingResponse();
    message.schemaCode = object.schemaCode ?? "";
    message.newOveriding = object.newOveriding ?? "";
    return message;
  },
  fromAmino(object: MsgSetAttributeOveridingResponseAmino): MsgSetAttributeOveridingResponse {
    const message = createBaseMsgSetAttributeOveridingResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOveriding !== undefined && object.newOveriding !== null) {
      message.newOveriding = object.newOveriding;
    }
    return message;
  },
  toAmino(message: MsgSetAttributeOveridingResponse): MsgSetAttributeOveridingResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newOveriding = message.newOveriding === "" ? undefined : message.newOveriding;
    return obj;
  },
  fromAminoMsg(object: MsgSetAttributeOveridingResponseAminoMsg): MsgSetAttributeOveridingResponse {
    return MsgSetAttributeOveridingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAttributeOveridingResponseProtoMsg): MsgSetAttributeOveridingResponse {
    return MsgSetAttributeOveridingResponse.decode(message.value);
  },
  toProto(message: MsgSetAttributeOveridingResponse): Uint8Array {
    return MsgSetAttributeOveridingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAttributeOveridingResponse): MsgSetAttributeOveridingResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveridingResponse",
      value: MsgSetAttributeOveridingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMetadataFormat(): MsgSetMetadataFormat {
  return {
    creator: "",
    schemaCode: "",
    newFormat: ""
  };
}
export const MsgSetMetadataFormat = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat",
  encode(message: MsgSetMetadataFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== "") {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newFormat !== "") {
      writer.uint32(26).string(message.newFormat);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMetadataFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMetadataFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schemaCode = reader.string();
          break;
        case 3:
          message.newFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMetadataFormat>): MsgSetMetadataFormat {
    const message = createBaseMsgSetMetadataFormat();
    message.creator = object.creator ?? "";
    message.schemaCode = object.schemaCode ?? "";
    message.newFormat = object.newFormat ?? "";
    return message;
  },
  fromAmino(object: MsgSetMetadataFormatAmino): MsgSetMetadataFormat {
    const message = createBaseMsgSetMetadataFormat();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = object.newFormat;
    }
    return message;
  },
  toAmino(message: MsgSetMetadataFormat): MsgSetMetadataFormatAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newFormat = message.newFormat === "" ? undefined : message.newFormat;
    return obj;
  },
  fromAminoMsg(object: MsgSetMetadataFormatAminoMsg): MsgSetMetadataFormat {
    return MsgSetMetadataFormat.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMetadataFormatProtoMsg): MsgSetMetadataFormat {
    return MsgSetMetadataFormat.decode(message.value);
  },
  toProto(message: MsgSetMetadataFormat): Uint8Array {
    return MsgSetMetadataFormat.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMetadataFormat): MsgSetMetadataFormatProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat",
      value: MsgSetMetadataFormat.encode(message).finish()
    };
  }
};
function createBaseMsgSetMetadataFormatResponse(): MsgSetMetadataFormatResponse {
  return {
    schemaCode: "",
    newFormat: ""
  };
}
export const MsgSetMetadataFormatResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormatResponse",
  encode(message: MsgSetMetadataFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== "") {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newFormat !== "") {
      writer.uint32(18).string(message.newFormat);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMetadataFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMetadataFormatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaCode = reader.string();
          break;
        case 2:
          message.newFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMetadataFormatResponse>): MsgSetMetadataFormatResponse {
    const message = createBaseMsgSetMetadataFormatResponse();
    message.schemaCode = object.schemaCode ?? "";
    message.newFormat = object.newFormat ?? "";
    return message;
  },
  fromAmino(object: MsgSetMetadataFormatResponseAmino): MsgSetMetadataFormatResponse {
    const message = createBaseMsgSetMetadataFormatResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = object.newFormat;
    }
    return message;
  },
  toAmino(message: MsgSetMetadataFormatResponse): MsgSetMetadataFormatResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === "" ? undefined : message.schemaCode;
    obj.newFormat = message.newFormat === "" ? undefined : message.newFormat;
    return obj;
  },
  fromAminoMsg(object: MsgSetMetadataFormatResponseAminoMsg): MsgSetMetadataFormatResponse {
    return MsgSetMetadataFormatResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMetadataFormatResponseProtoMsg): MsgSetMetadataFormatResponse {
    return MsgSetMetadataFormatResponse.decode(message.value);
  },
  toProto(message: MsgSetMetadataFormatResponse): Uint8Array {
    return MsgSetMetadataFormatResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMetadataFormatResponse): MsgSetMetadataFormatResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormatResponse",
      value: MsgSetMetadataFormatResponse.encode(message).finish()
    };
  }
};