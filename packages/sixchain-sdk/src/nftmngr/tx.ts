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
export interface MsgPerformActionByAdmin {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  refId: string;
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
}
export interface MsgToggleActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction";
  value: Uint8Array;
}
export interface MsgToggleActionAmino {
  creator?: string;
  code?: string;
  action?: string;
}
export interface MsgToggleActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction";
  value: MsgToggleActionAmino;
}
export interface MsgToggleActionSDKType {
  creator: string;
  code: string;
  action: string;
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
function createBaseMsgPerformActionByAdmin(): MsgPerformActionByAdmin {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: "",
    action: "",
    refId: ""
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
    return message;
  },
  toAmino(message: MsgPerformActionByAdmin): MsgPerformActionByAdminAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    obj.action = message.action === "" ? undefined : message.action;
    obj.ref_id = message.refId === "" ? undefined : message.refId;
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
    action: ""
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
    return message;
  },
  toAmino(message: MsgToggleAction): MsgToggleActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.action = message.action === "" ? undefined : message.action;
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