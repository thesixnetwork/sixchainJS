//@ts-nocheck
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateMintRequest {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: Long;
}
export interface MsgCreateMintRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest";
  value: Uint8Array;
}
export interface MsgCreateMintRequestAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  requiredConfirm?: string;
}
export interface MsgCreateMintRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest";
  value: MsgCreateMintRequestAmino;
}
export interface MsgCreateMintRequestSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: Long;
}
export interface MsgCreateMintRequestResponse {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgCreateMintRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequestResponse";
  value: Uint8Array;
}
export interface MsgCreateMintRequestResponseAmino {
  id?: string;
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgCreateMintRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequestResponse";
  value: MsgCreateMintRequestResponseAmino;
}
export interface MsgCreateMintRequestResponseSDKType {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgSubmitMintResponse {
  creator: string;
  mintRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitMintResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse";
  value: Uint8Array;
}
export interface MsgSubmitMintResponseAmino {
  creator?: string;
  mintRequestID?: string;
  base64NftData?: string;
}
export interface MsgSubmitMintResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse";
  value: MsgSubmitMintResponseAmino;
}
export interface MsgSubmitMintResponseSDKType {
  creator: string;
  mintRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitMintResponseResponse {
  mintRequestID: string;
}
export interface MsgSubmitMintResponseResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponseResponse";
  value: Uint8Array;
}
export interface MsgSubmitMintResponseResponseAmino {
  mintRequestID?: string;
}
export interface MsgSubmitMintResponseResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponseResponse";
  value: MsgSubmitMintResponseResponseAmino;
}
export interface MsgSubmitMintResponseResponseSDKType {
  mintRequestID: string;
}
export interface MsgCreateActionRequest {
  creator: string;
  vm: string;
  base64ActionSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateActionRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest";
  value: Uint8Array;
}
export interface MsgCreateActionRequestAmino {
  creator?: string;
  vm?: string;
  base64ActionSignature?: string;
  requiredConfirm?: string;
}
export interface MsgCreateActionRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest";
  value: MsgCreateActionRequestAmino;
}
export interface MsgCreateActionRequestSDKType {
  creator: string;
  vm: string;
  base64ActionSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateActionRequestResponse {
  id: Long;
}
export interface MsgCreateActionRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequestResponse";
  value: Uint8Array;
}
export interface MsgCreateActionRequestResponseAmino {
  id?: string;
}
export interface MsgCreateActionRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequestResponse";
  value: MsgCreateActionRequestResponseAmino;
}
export interface MsgCreateActionRequestResponseSDKType {
  id: Long;
}
export interface MsgSubmitActionResponse {
  creator: string;
  actionRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitActionResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse";
  value: Uint8Array;
}
export interface MsgSubmitActionResponseAmino {
  creator?: string;
  actionRequestID?: string;
  base64NftData?: string;
}
export interface MsgSubmitActionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse";
  value: MsgSubmitActionResponseAmino;
}
export interface MsgSubmitActionResponseSDKType {
  creator: string;
  actionRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitActionResponseResponse {
  actionRequestID: string;
}
export interface MsgSubmitActionResponseResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponseResponse";
  value: Uint8Array;
}
export interface MsgSubmitActionResponseResponseAmino {
  actionRequestID?: string;
}
export interface MsgSubmitActionResponseResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponseResponse";
  value: MsgSubmitActionResponseResponseAmino;
}
export interface MsgSubmitActionResponseResponseSDKType {
  actionRequestID: string;
}
export interface MsgCreateVerifyCollectionOwnerRequest {
  creator: string;
  nftSchemaCode: string;
  base64VerifyRequestorSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateVerifyCollectionOwnerRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest";
  value: Uint8Array;
}
export interface MsgCreateVerifyCollectionOwnerRequestAmino {
  creator?: string;
  nftSchemaCode?: string;
  base64VerifyRequestorSignature?: string;
  requiredConfirm?: string;
}
export interface MsgCreateVerifyCollectionOwnerRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest";
  value: MsgCreateVerifyCollectionOwnerRequestAmino;
}
export interface MsgCreateVerifyCollectionOwnerRequestSDKType {
  creator: string;
  nftSchemaCode: string;
  base64VerifyRequestorSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponse {
  id: Long;
  nftSchemaCode: string;
  ownerAddress: string;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse";
  value: Uint8Array;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseAmino {
  id?: string;
  nftSchemaCode?: string;
  ownerAddress?: string;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse";
  value: MsgCreateVerifyCollectionOwnerRequestResponseAmino;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseSDKType {
  id: Long;
  nftSchemaCode: string;
  ownerAddress: string;
}
export interface MsgSubmitVerifyCollectionOwner {
  creator: string;
  verifyRequestID: Long;
  nftSchemaCode: string;
  base64OriginContractInfo: string;
}
export interface MsgSubmitVerifyCollectionOwnerProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner";
  value: Uint8Array;
}
export interface MsgSubmitVerifyCollectionOwnerAmino {
  creator?: string;
  verifyRequestID?: string;
  nftSchemaCode?: string;
  base64OriginContractInfo?: string;
}
export interface MsgSubmitVerifyCollectionOwnerAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner";
  value: MsgSubmitVerifyCollectionOwnerAmino;
}
export interface MsgSubmitVerifyCollectionOwnerSDKType {
  creator: string;
  verifyRequestID: Long;
  nftSchemaCode: string;
  base64OriginContractInfo: string;
}
export interface MsgSubmitVerifyCollectionOwnerResponse {
  verifyRequestID: Long;
}
export interface MsgSubmitVerifyCollectionOwnerResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwnerResponse";
  value: Uint8Array;
}
export interface MsgSubmitVerifyCollectionOwnerResponseAmino {
  verifyRequestID?: string;
}
export interface MsgSubmitVerifyCollectionOwnerResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwnerResponse";
  value: MsgSubmitVerifyCollectionOwnerResponseAmino;
}
export interface MsgSubmitVerifyCollectionOwnerResponseSDKType {
  verifyRequestID: Long;
}
export interface MsgSetMinimumConfirmation {
  creator: string;
  newConfirmation: string;
}
export interface MsgSetMinimumConfirmationProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation";
  value: Uint8Array;
}
export interface MsgSetMinimumConfirmationAmino {
  creator?: string;
  newConfirmation?: string;
}
export interface MsgSetMinimumConfirmationAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation";
  value: MsgSetMinimumConfirmationAmino;
}
export interface MsgSetMinimumConfirmationSDKType {
  creator: string;
  newConfirmation: string;
}
export interface MsgSetMinimumConfirmationResponse {
  newConfirmation: string;
}
export interface MsgSetMinimumConfirmationResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmationResponse";
  value: Uint8Array;
}
export interface MsgSetMinimumConfirmationResponseAmino {
  newConfirmation?: string;
}
export interface MsgSetMinimumConfirmationResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmationResponse";
  value: MsgSetMinimumConfirmationResponseAmino;
}
export interface MsgSetMinimumConfirmationResponseSDKType {
  newConfirmation: string;
}
function createBaseMsgCreateMintRequest(): MsgCreateMintRequest {
  return {
    creator: "",
    nftSchemaCode: "",
    tokenId: "",
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateMintRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest",
  encode(message: MsgCreateMintRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMintRequest();
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
          message.requiredConfirm = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMintRequest>): MsgCreateMintRequest {
    const message = createBaseMsgCreateMintRequest();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateMintRequestAmino): MsgCreateMintRequest {
    const message = createBaseMsgCreateMintRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateMintRequest): MsgCreateMintRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? (message.requiredConfirm?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMintRequestAminoMsg): MsgCreateMintRequest {
    return MsgCreateMintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMintRequestProtoMsg): MsgCreateMintRequest {
    return MsgCreateMintRequest.decode(message.value);
  },
  toProto(message: MsgCreateMintRequest): Uint8Array {
    return MsgCreateMintRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMintRequest): MsgCreateMintRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest",
      value: MsgCreateMintRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMintRequestResponse(): MsgCreateMintRequestResponse {
  return {
    id: Long.UZERO,
    nftSchemaCode: "",
    tokenId: ""
  };
}
export const MsgCreateMintRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequestResponse",
  encode(message: MsgCreateMintRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMintRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMintRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
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
  fromPartial(object: Partial<MsgCreateMintRequestResponse>): MsgCreateMintRequestResponse {
    const message = createBaseMsgCreateMintRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMintRequestResponseAmino): MsgCreateMintRequestResponse {
    const message = createBaseMsgCreateMintRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgCreateMintRequestResponse): MsgCreateMintRequestResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === "" ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMintRequestResponseAminoMsg): MsgCreateMintRequestResponse {
    return MsgCreateMintRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMintRequestResponseProtoMsg): MsgCreateMintRequestResponse {
    return MsgCreateMintRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreateMintRequestResponse): Uint8Array {
    return MsgCreateMintRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMintRequestResponse): MsgCreateMintRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequestResponse",
      value: MsgCreateMintRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMintResponse(): MsgSubmitMintResponse {
  return {
    creator: "",
    mintRequestID: Long.UZERO,
    base64NftData: ""
  };
}
export const MsgSubmitMintResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse",
  encode(message: MsgSubmitMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.mintRequestID.isZero()) {
      writer.uint32(16).uint64(message.mintRequestID);
    }
    if (message.base64NftData !== "") {
      writer.uint32(26).string(message.base64NftData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.mintRequestID = reader.uint64() as Long;
          break;
        case 3:
          message.base64NftData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitMintResponse>): MsgSubmitMintResponse {
    const message = createBaseMsgSubmitMintResponse();
    message.creator = object.creator ?? "";
    message.mintRequestID = object.mintRequestID !== undefined && object.mintRequestID !== null ? Long.fromValue(object.mintRequestID) : Long.UZERO;
    message.base64NftData = object.base64NftData ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitMintResponseAmino): MsgSubmitMintResponse {
    const message = createBaseMsgSubmitMintResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = Long.fromString(object.mintRequestID);
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = object.base64NftData;
    }
    return message;
  },
  toAmino(message: MsgSubmitMintResponse): MsgSubmitMintResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.mintRequestID = !message.mintRequestID.isZero() ? (message.mintRequestID?.toString)() : undefined;
    obj.base64NftData = message.base64NftData === "" ? undefined : message.base64NftData;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMintResponseAminoMsg): MsgSubmitMintResponse {
    return MsgSubmitMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitMintResponseProtoMsg): MsgSubmitMintResponse {
    return MsgSubmitMintResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMintResponse): Uint8Array {
    return MsgSubmitMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMintResponse): MsgSubmitMintResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse",
      value: MsgSubmitMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMintResponseResponse(): MsgSubmitMintResponseResponse {
  return {
    mintRequestID: ""
  };
}
export const MsgSubmitMintResponseResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponseResponse",
  encode(message: MsgSubmitMintResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRequestID !== "") {
      writer.uint32(10).string(message.mintRequestID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMintResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMintResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRequestID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitMintResponseResponse>): MsgSubmitMintResponseResponse {
    const message = createBaseMsgSubmitMintResponseResponse();
    message.mintRequestID = object.mintRequestID ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitMintResponseResponseAmino): MsgSubmitMintResponseResponse {
    const message = createBaseMsgSubmitMintResponseResponse();
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = object.mintRequestID;
    }
    return message;
  },
  toAmino(message: MsgSubmitMintResponseResponse): MsgSubmitMintResponseResponseAmino {
    const obj: any = {};
    obj.mintRequestID = message.mintRequestID === "" ? undefined : message.mintRequestID;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMintResponseResponseAminoMsg): MsgSubmitMintResponseResponse {
    return MsgSubmitMintResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitMintResponseResponseProtoMsg): MsgSubmitMintResponseResponse {
    return MsgSubmitMintResponseResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMintResponseResponse): Uint8Array {
    return MsgSubmitMintResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMintResponseResponse): MsgSubmitMintResponseResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponseResponse",
      value: MsgSubmitMintResponseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionRequest(): MsgCreateActionRequest {
  return {
    creator: "",
    vm: "",
    base64ActionSignature: "",
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateActionRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest",
  encode(message: MsgCreateActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.vm !== "") {
      writer.uint32(18).string(message.vm);
    }
    if (message.base64ActionSignature !== "") {
      writer.uint32(26).string(message.base64ActionSignature);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vm = reader.string();
          break;
        case 3:
          message.base64ActionSignature = reader.string();
          break;
        case 4:
          message.requiredConfirm = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionRequest>): MsgCreateActionRequest {
    const message = createBaseMsgCreateActionRequest();
    message.creator = object.creator ?? "";
    message.vm = object.vm ?? "";
    message.base64ActionSignature = object.base64ActionSignature ?? "";
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateActionRequestAmino): MsgCreateActionRequest {
    const message = createBaseMsgCreateActionRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.vm !== undefined && object.vm !== null) {
      message.vm = object.vm;
    }
    if (object.base64ActionSignature !== undefined && object.base64ActionSignature !== null) {
      message.base64ActionSignature = object.base64ActionSignature;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateActionRequest): MsgCreateActionRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.vm = message.vm === "" ? undefined : message.vm;
    obj.base64ActionSignature = message.base64ActionSignature === "" ? undefined : message.base64ActionSignature;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? (message.requiredConfirm?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionRequestAminoMsg): MsgCreateActionRequest {
    return MsgCreateActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionRequestProtoMsg): MsgCreateActionRequest {
    return MsgCreateActionRequest.decode(message.value);
  },
  toProto(message: MsgCreateActionRequest): Uint8Array {
    return MsgCreateActionRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionRequest): MsgCreateActionRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest",
      value: MsgCreateActionRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionRequestResponse(): MsgCreateActionRequestResponse {
  return {
    id: Long.UZERO
  };
}
export const MsgCreateActionRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequestResponse",
  encode(message: MsgCreateActionRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionRequestResponse();
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
  fromPartial(object: Partial<MsgCreateActionRequestResponse>): MsgCreateActionRequestResponse {
    const message = createBaseMsgCreateActionRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateActionRequestResponseAmino): MsgCreateActionRequestResponse {
    const message = createBaseMsgCreateActionRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateActionRequestResponse): MsgCreateActionRequestResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionRequestResponseAminoMsg): MsgCreateActionRequestResponse {
    return MsgCreateActionRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionRequestResponseProtoMsg): MsgCreateActionRequestResponse {
    return MsgCreateActionRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreateActionRequestResponse): Uint8Array {
    return MsgCreateActionRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionRequestResponse): MsgCreateActionRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequestResponse",
      value: MsgCreateActionRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitActionResponse(): MsgSubmitActionResponse {
  return {
    creator: "",
    actionRequestID: Long.UZERO,
    base64NftData: ""
  };
}
export const MsgSubmitActionResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse",
  encode(message: MsgSubmitActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.actionRequestID.isZero()) {
      writer.uint32(16).uint64(message.actionRequestID);
    }
    if (message.base64NftData !== "") {
      writer.uint32(26).string(message.base64NftData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.actionRequestID = reader.uint64() as Long;
          break;
        case 3:
          message.base64NftData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitActionResponse>): MsgSubmitActionResponse {
    const message = createBaseMsgSubmitActionResponse();
    message.creator = object.creator ?? "";
    message.actionRequestID = object.actionRequestID !== undefined && object.actionRequestID !== null ? Long.fromValue(object.actionRequestID) : Long.UZERO;
    message.base64NftData = object.base64NftData ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitActionResponseAmino): MsgSubmitActionResponse {
    const message = createBaseMsgSubmitActionResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.actionRequestID !== undefined && object.actionRequestID !== null) {
      message.actionRequestID = Long.fromString(object.actionRequestID);
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = object.base64NftData;
    }
    return message;
  },
  toAmino(message: MsgSubmitActionResponse): MsgSubmitActionResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.actionRequestID = !message.actionRequestID.isZero() ? (message.actionRequestID?.toString)() : undefined;
    obj.base64NftData = message.base64NftData === "" ? undefined : message.base64NftData;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitActionResponseAminoMsg): MsgSubmitActionResponse {
    return MsgSubmitActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitActionResponseProtoMsg): MsgSubmitActionResponse {
    return MsgSubmitActionResponse.decode(message.value);
  },
  toProto(message: MsgSubmitActionResponse): Uint8Array {
    return MsgSubmitActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitActionResponse): MsgSubmitActionResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse",
      value: MsgSubmitActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitActionResponseResponse(): MsgSubmitActionResponseResponse {
  return {
    actionRequestID: ""
  };
}
export const MsgSubmitActionResponseResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponseResponse",
  encode(message: MsgSubmitActionResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionRequestID !== "") {
      writer.uint32(10).string(message.actionRequestID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitActionResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitActionResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionRequestID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitActionResponseResponse>): MsgSubmitActionResponseResponse {
    const message = createBaseMsgSubmitActionResponseResponse();
    message.actionRequestID = object.actionRequestID ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitActionResponseResponseAmino): MsgSubmitActionResponseResponse {
    const message = createBaseMsgSubmitActionResponseResponse();
    if (object.actionRequestID !== undefined && object.actionRequestID !== null) {
      message.actionRequestID = object.actionRequestID;
    }
    return message;
  },
  toAmino(message: MsgSubmitActionResponseResponse): MsgSubmitActionResponseResponseAmino {
    const obj: any = {};
    obj.actionRequestID = message.actionRequestID === "" ? undefined : message.actionRequestID;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitActionResponseResponseAminoMsg): MsgSubmitActionResponseResponse {
    return MsgSubmitActionResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitActionResponseResponseProtoMsg): MsgSubmitActionResponseResponse {
    return MsgSubmitActionResponseResponse.decode(message.value);
  },
  toProto(message: MsgSubmitActionResponseResponse): Uint8Array {
    return MsgSubmitActionResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitActionResponseResponse): MsgSubmitActionResponseResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponseResponse",
      value: MsgSubmitActionResponseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVerifyCollectionOwnerRequest(): MsgCreateVerifyCollectionOwnerRequest {
  return {
    creator: "",
    nftSchemaCode: "",
    base64VerifyRequestorSignature: "",
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateVerifyCollectionOwnerRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
  encode(message: MsgCreateVerifyCollectionOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64VerifyRequestorSignature !== "") {
      writer.uint32(26).string(message.base64VerifyRequestorSignature);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVerifyCollectionOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVerifyCollectionOwnerRequest();
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
          message.base64VerifyRequestorSignature = reader.string();
          break;
        case 4:
          message.requiredConfirm = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVerifyCollectionOwnerRequest>): MsgCreateVerifyCollectionOwnerRequest {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequest();
    message.creator = object.creator ?? "";
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.base64VerifyRequestorSignature = object.base64VerifyRequestorSignature ?? "";
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateVerifyCollectionOwnerRequestAmino): MsgCreateVerifyCollectionOwnerRequest {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.base64VerifyRequestorSignature !== undefined && object.base64VerifyRequestorSignature !== null) {
      message.base64VerifyRequestorSignature = object.base64VerifyRequestorSignature;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateVerifyCollectionOwnerRequest): MsgCreateVerifyCollectionOwnerRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.base64VerifyRequestorSignature = message.base64VerifyRequestorSignature === "" ? undefined : message.base64VerifyRequestorSignature;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? (message.requiredConfirm?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVerifyCollectionOwnerRequestAminoMsg): MsgCreateVerifyCollectionOwnerRequest {
    return MsgCreateVerifyCollectionOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVerifyCollectionOwnerRequestProtoMsg): MsgCreateVerifyCollectionOwnerRequest {
    return MsgCreateVerifyCollectionOwnerRequest.decode(message.value);
  },
  toProto(message: MsgCreateVerifyCollectionOwnerRequest): Uint8Array {
    return MsgCreateVerifyCollectionOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVerifyCollectionOwnerRequest): MsgCreateVerifyCollectionOwnerRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
      value: MsgCreateVerifyCollectionOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVerifyCollectionOwnerRequestResponse(): MsgCreateVerifyCollectionOwnerRequestResponse {
  return {
    id: Long.UZERO,
    nftSchemaCode: "",
    ownerAddress: ""
  };
}
export const MsgCreateVerifyCollectionOwnerRequestResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse",
  encode(message: MsgCreateVerifyCollectionOwnerRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVerifyCollectionOwnerRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVerifyCollectionOwnerRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVerifyCollectionOwnerRequestResponse>): MsgCreateVerifyCollectionOwnerRequestResponse {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCreateVerifyCollectionOwnerRequestResponseAmino): MsgCreateVerifyCollectionOwnerRequestResponse {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    return message;
  },
  toAmino(message: MsgCreateVerifyCollectionOwnerRequestResponse): MsgCreateVerifyCollectionOwnerRequestResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.ownerAddress = message.ownerAddress === "" ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVerifyCollectionOwnerRequestResponseAminoMsg): MsgCreateVerifyCollectionOwnerRequestResponse {
    return MsgCreateVerifyCollectionOwnerRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVerifyCollectionOwnerRequestResponseProtoMsg): MsgCreateVerifyCollectionOwnerRequestResponse {
    return MsgCreateVerifyCollectionOwnerRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreateVerifyCollectionOwnerRequestResponse): Uint8Array {
    return MsgCreateVerifyCollectionOwnerRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVerifyCollectionOwnerRequestResponse): MsgCreateVerifyCollectionOwnerRequestResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse",
      value: MsgCreateVerifyCollectionOwnerRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitVerifyCollectionOwner(): MsgSubmitVerifyCollectionOwner {
  return {
    creator: "",
    verifyRequestID: Long.UZERO,
    nftSchemaCode: "",
    base64OriginContractInfo: ""
  };
}
export const MsgSubmitVerifyCollectionOwner = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner",
  encode(message: MsgSubmitVerifyCollectionOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.verifyRequestID.isZero()) {
      writer.uint32(16).uint64(message.verifyRequestID);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(26).string(message.nftSchemaCode);
    }
    if (message.base64OriginContractInfo !== "") {
      writer.uint32(34).string(message.base64OriginContractInfo);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitVerifyCollectionOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVerifyCollectionOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.verifyRequestID = reader.uint64() as Long;
          break;
        case 3:
          message.nftSchemaCode = reader.string();
          break;
        case 4:
          message.base64OriginContractInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitVerifyCollectionOwner>): MsgSubmitVerifyCollectionOwner {
    const message = createBaseMsgSubmitVerifyCollectionOwner();
    message.creator = object.creator ?? "";
    message.verifyRequestID = object.verifyRequestID !== undefined && object.verifyRequestID !== null ? Long.fromValue(object.verifyRequestID) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.base64OriginContractInfo = object.base64OriginContractInfo ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitVerifyCollectionOwnerAmino): MsgSubmitVerifyCollectionOwner {
    const message = createBaseMsgSubmitVerifyCollectionOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.verifyRequestID !== undefined && object.verifyRequestID !== null) {
      message.verifyRequestID = Long.fromString(object.verifyRequestID);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.base64OriginContractInfo !== undefined && object.base64OriginContractInfo !== null) {
      message.base64OriginContractInfo = object.base64OriginContractInfo;
    }
    return message;
  },
  toAmino(message: MsgSubmitVerifyCollectionOwner): MsgSubmitVerifyCollectionOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.verifyRequestID = !message.verifyRequestID.isZero() ? (message.verifyRequestID?.toString)() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.base64OriginContractInfo = message.base64OriginContractInfo === "" ? undefined : message.base64OriginContractInfo;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitVerifyCollectionOwnerAminoMsg): MsgSubmitVerifyCollectionOwner {
    return MsgSubmitVerifyCollectionOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitVerifyCollectionOwnerProtoMsg): MsgSubmitVerifyCollectionOwner {
    return MsgSubmitVerifyCollectionOwner.decode(message.value);
  },
  toProto(message: MsgSubmitVerifyCollectionOwner): Uint8Array {
    return MsgSubmitVerifyCollectionOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitVerifyCollectionOwner): MsgSubmitVerifyCollectionOwnerProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner",
      value: MsgSubmitVerifyCollectionOwner.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitVerifyCollectionOwnerResponse(): MsgSubmitVerifyCollectionOwnerResponse {
  return {
    verifyRequestID: Long.UZERO
  };
}
export const MsgSubmitVerifyCollectionOwnerResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwnerResponse",
  encode(message: MsgSubmitVerifyCollectionOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.verifyRequestID.isZero()) {
      writer.uint32(8).uint64(message.verifyRequestID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitVerifyCollectionOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVerifyCollectionOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifyRequestID = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitVerifyCollectionOwnerResponse>): MsgSubmitVerifyCollectionOwnerResponse {
    const message = createBaseMsgSubmitVerifyCollectionOwnerResponse();
    message.verifyRequestID = object.verifyRequestID !== undefined && object.verifyRequestID !== null ? Long.fromValue(object.verifyRequestID) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgSubmitVerifyCollectionOwnerResponseAmino): MsgSubmitVerifyCollectionOwnerResponse {
    const message = createBaseMsgSubmitVerifyCollectionOwnerResponse();
    if (object.verifyRequestID !== undefined && object.verifyRequestID !== null) {
      message.verifyRequestID = Long.fromString(object.verifyRequestID);
    }
    return message;
  },
  toAmino(message: MsgSubmitVerifyCollectionOwnerResponse): MsgSubmitVerifyCollectionOwnerResponseAmino {
    const obj: any = {};
    obj.verifyRequestID = !message.verifyRequestID.isZero() ? (message.verifyRequestID?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitVerifyCollectionOwnerResponseAminoMsg): MsgSubmitVerifyCollectionOwnerResponse {
    return MsgSubmitVerifyCollectionOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitVerifyCollectionOwnerResponseProtoMsg): MsgSubmitVerifyCollectionOwnerResponse {
    return MsgSubmitVerifyCollectionOwnerResponse.decode(message.value);
  },
  toProto(message: MsgSubmitVerifyCollectionOwnerResponse): Uint8Array {
    return MsgSubmitVerifyCollectionOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitVerifyCollectionOwnerResponse): MsgSubmitVerifyCollectionOwnerResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwnerResponse",
      value: MsgSubmitVerifyCollectionOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMinimumConfirmation(): MsgSetMinimumConfirmation {
  return {
    creator: "",
    newConfirmation: ""
  };
}
export const MsgSetMinimumConfirmation = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation",
  encode(message: MsgSetMinimumConfirmation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newConfirmation !== "") {
      writer.uint32(18).string(message.newConfirmation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinimumConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinimumConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newConfirmation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMinimumConfirmation>): MsgSetMinimumConfirmation {
    const message = createBaseMsgSetMinimumConfirmation();
    message.creator = object.creator ?? "";
    message.newConfirmation = object.newConfirmation ?? "";
    return message;
  },
  fromAmino(object: MsgSetMinimumConfirmationAmino): MsgSetMinimumConfirmation {
    const message = createBaseMsgSetMinimumConfirmation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.newConfirmation !== undefined && object.newConfirmation !== null) {
      message.newConfirmation = object.newConfirmation;
    }
    return message;
  },
  toAmino(message: MsgSetMinimumConfirmation): MsgSetMinimumConfirmationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.newConfirmation = message.newConfirmation === "" ? undefined : message.newConfirmation;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinimumConfirmationAminoMsg): MsgSetMinimumConfirmation {
    return MsgSetMinimumConfirmation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinimumConfirmationProtoMsg): MsgSetMinimumConfirmation {
    return MsgSetMinimumConfirmation.decode(message.value);
  },
  toProto(message: MsgSetMinimumConfirmation): Uint8Array {
    return MsgSetMinimumConfirmation.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinimumConfirmation): MsgSetMinimumConfirmationProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation",
      value: MsgSetMinimumConfirmation.encode(message).finish()
    };
  }
};
function createBaseMsgSetMinimumConfirmationResponse(): MsgSetMinimumConfirmationResponse {
  return {
    newConfirmation: ""
  };
}
export const MsgSetMinimumConfirmationResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmationResponse",
  encode(message: MsgSetMinimumConfirmationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newConfirmation !== "") {
      writer.uint32(10).string(message.newConfirmation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinimumConfirmationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinimumConfirmationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newConfirmation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMinimumConfirmationResponse>): MsgSetMinimumConfirmationResponse {
    const message = createBaseMsgSetMinimumConfirmationResponse();
    message.newConfirmation = object.newConfirmation ?? "";
    return message;
  },
  fromAmino(object: MsgSetMinimumConfirmationResponseAmino): MsgSetMinimumConfirmationResponse {
    const message = createBaseMsgSetMinimumConfirmationResponse();
    if (object.newConfirmation !== undefined && object.newConfirmation !== null) {
      message.newConfirmation = object.newConfirmation;
    }
    return message;
  },
  toAmino(message: MsgSetMinimumConfirmationResponse): MsgSetMinimumConfirmationResponseAmino {
    const obj: any = {};
    obj.newConfirmation = message.newConfirmation === "" ? undefined : message.newConfirmation;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinimumConfirmationResponseAminoMsg): MsgSetMinimumConfirmationResponse {
    return MsgSetMinimumConfirmationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinimumConfirmationResponseProtoMsg): MsgSetMinimumConfirmationResponse {
    return MsgSetMinimumConfirmationResponse.decode(message.value);
  },
  toProto(message: MsgSetMinimumConfirmationResponse): Uint8Array {
    return MsgSetMinimumConfirmationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinimumConfirmationResponse): MsgSetMinimumConfirmationResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmationResponse",
      value: MsgSetMinimumConfirmationResponse.encode(message).finish()
    };
  }
};