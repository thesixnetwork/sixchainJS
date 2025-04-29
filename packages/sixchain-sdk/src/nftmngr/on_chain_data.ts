//@ts-nocheck
import { AttributeDefinition, AttributeDefinitionAmino, AttributeDefinitionSDKType } from "./attribute_definition";
import { Action, ActionAmino, ActionSDKType } from "./action";
import { NftAttributeValue, NftAttributeValueAmino, NftAttributeValueSDKType } from "./nft_attribute_value";
import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes } from "../helpers";
export interface FlagStatus {
  statusName: string;
  statusValue: boolean;
}
export interface FlagStatusProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.FlagStatus";
  value: Uint8Array;
}
export interface FlagStatusAmino {
  status_name?: string;
  status_value?: boolean;
}
export interface FlagStatusAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.FlagStatus";
  value: FlagStatusAmino;
}
export interface FlagStatusSDKType {
  status_name: string;
  status_value: boolean;
}
export interface OnChainData {
  revealRequired: boolean;
  revealSecret: Uint8Array;
  nftAttributes: AttributeDefinition[];
  tokenAttributes: AttributeDefinition[];
  actions: Action[];
  status: FlagStatus[];
  nftAttributesValue: NftAttributeValue[];
}
export interface OnChainDataProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.OnChainData";
  value: Uint8Array;
}
export interface OnChainDataAmino {
  reveal_required?: boolean;
  reveal_secret?: string;
  nft_attributes?: AttributeDefinitionAmino[];
  token_attributes?: AttributeDefinitionAmino[];
  actions?: ActionAmino[];
  status?: FlagStatusAmino[];
  nft_attributes_value?: NftAttributeValueAmino[];
}
export interface OnChainDataAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.OnChainData";
  value: OnChainDataAmino;
}
export interface OnChainDataSDKType {
  reveal_required: boolean;
  reveal_secret: Uint8Array;
  nft_attributes: AttributeDefinitionSDKType[];
  token_attributes: AttributeDefinitionSDKType[];
  actions: ActionSDKType[];
  status: FlagStatusSDKType[];
  nft_attributes_value: NftAttributeValueSDKType[];
}
function createBaseFlagStatus(): FlagStatus {
  return {
    statusName: "",
    statusValue: false
  };
}
export const FlagStatus = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.FlagStatus",
  encode(message: FlagStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusName !== "") {
      writer.uint32(10).string(message.statusName);
    }
    if (message.statusValue === true) {
      writer.uint32(16).bool(message.statusValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FlagStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusName = reader.string();
          break;
        case 2:
          message.statusValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FlagStatus>): FlagStatus {
    const message = createBaseFlagStatus();
    message.statusName = object.statusName ?? "";
    message.statusValue = object.statusValue ?? false;
    return message;
  },
  fromAmino(object: FlagStatusAmino): FlagStatus {
    const message = createBaseFlagStatus();
    if (object.status_name !== undefined && object.status_name !== null) {
      message.statusName = object.status_name;
    }
    if (object.status_value !== undefined && object.status_value !== null) {
      message.statusValue = object.status_value;
    }
    return message;
  },
  toAmino(message: FlagStatus): FlagStatusAmino {
    const obj: any = {};
    obj.status_name = message.statusName === "" ? undefined : message.statusName;
    obj.status_value = message.statusValue === false ? undefined : message.statusValue;
    return obj;
  },
  fromAminoMsg(object: FlagStatusAminoMsg): FlagStatus {
    return FlagStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: FlagStatusProtoMsg): FlagStatus {
    return FlagStatus.decode(message.value);
  },
  toProto(message: FlagStatus): Uint8Array {
    return FlagStatus.encode(message).finish();
  },
  toProtoMsg(message: FlagStatus): FlagStatusProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.FlagStatus",
      value: FlagStatus.encode(message).finish()
    };
  }
};
function createBaseOnChainData(): OnChainData {
  return {
    revealRequired: false,
    revealSecret: new Uint8Array(),
    nftAttributes: [],
    tokenAttributes: [],
    actions: [],
    status: [],
    nftAttributesValue: []
  };
}
export const OnChainData = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.OnChainData",
  encode(message: OnChainData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revealRequired === true) {
      writer.uint32(8).bool(message.revealRequired);
    }
    if (message.revealSecret.length !== 0) {
      writer.uint32(18).bytes(message.revealSecret);
    }
    for (const v of message.nftAttributes) {
      AttributeDefinition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokenAttributes) {
      AttributeDefinition.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.status) {
      FlagStatus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nftAttributesValue) {
      NftAttributeValue.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OnChainData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnChainData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revealRequired = reader.bool();
          break;
        case 2:
          message.revealSecret = reader.bytes();
          break;
        case 3:
          message.nftAttributes.push(AttributeDefinition.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenAttributes.push(AttributeDefinition.decode(reader, reader.uint32()));
          break;
        case 5:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        case 6:
          message.status.push(FlagStatus.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nftAttributesValue.push(NftAttributeValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OnChainData>): OnChainData {
    const message = createBaseOnChainData();
    message.revealRequired = object.revealRequired ?? false;
    message.revealSecret = object.revealSecret ?? new Uint8Array();
    message.nftAttributes = object.nftAttributes?.map(e => AttributeDefinition.fromPartial(e)) || [];
    message.tokenAttributes = object.tokenAttributes?.map(e => AttributeDefinition.fromPartial(e)) || [];
    message.actions = object.actions?.map(e => Action.fromPartial(e)) || [];
    message.status = object.status?.map(e => FlagStatus.fromPartial(e)) || [];
    message.nftAttributesValue = object.nftAttributesValue?.map(e => NftAttributeValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OnChainDataAmino): OnChainData {
    const message = createBaseOnChainData();
    if (object.reveal_required !== undefined && object.reveal_required !== null) {
      message.revealRequired = object.reveal_required;
    }
    if (object.reveal_secret !== undefined && object.reveal_secret !== null) {
      message.revealSecret = bytesFromBase64(object.reveal_secret);
    }
    message.nftAttributes = object.nft_attributes?.map(e => AttributeDefinition.fromAmino(e)) || [];
    message.tokenAttributes = object.token_attributes?.map(e => AttributeDefinition.fromAmino(e)) || [];
    message.actions = object.actions?.map(e => Action.fromAmino(e)) || [];
    message.status = object.status?.map(e => FlagStatus.fromAmino(e)) || [];
    message.nftAttributesValue = object.nft_attributes_value?.map(e => NftAttributeValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OnChainData): OnChainDataAmino {
    const obj: any = {};
    obj.reveal_required = message.revealRequired === false ? undefined : message.revealRequired;
    obj.reveal_secret = message.revealSecret ? base64FromBytes(message.revealSecret) : undefined;
    if (message.nftAttributes) {
      obj.nft_attributes = message.nftAttributes.map(e => e ? AttributeDefinition.toAmino(e) : undefined);
    } else {
      obj.nft_attributes = message.nftAttributes;
    }
    if (message.tokenAttributes) {
      obj.token_attributes = message.tokenAttributes.map(e => e ? AttributeDefinition.toAmino(e) : undefined);
    } else {
      obj.token_attributes = message.tokenAttributes;
    }
    if (message.actions) {
      obj.actions = message.actions.map(e => e ? Action.toAmino(e) : undefined);
    } else {
      obj.actions = message.actions;
    }
    if (message.status) {
      obj.status = message.status.map(e => e ? FlagStatus.toAmino(e) : undefined);
    } else {
      obj.status = message.status;
    }
    if (message.nftAttributesValue) {
      obj.nft_attributes_value = message.nftAttributesValue.map(e => e ? NftAttributeValue.toAmino(e) : undefined);
    } else {
      obj.nft_attributes_value = message.nftAttributesValue;
    }
    return obj;
  },
  fromAminoMsg(object: OnChainDataAminoMsg): OnChainData {
    return OnChainData.fromAmino(object.value);
  },
  fromProtoMsg(message: OnChainDataProtoMsg): OnChainData {
    return OnChainData.decode(message.value);
  },
  toProto(message: OnChainData): Uint8Array {
    return OnChainData.encode(message).finish();
  },
  toProtoMsg(message: OnChainData): OnChainDataProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.OnChainData",
      value: OnChainData.encode(message).finish()
    };
  }
};