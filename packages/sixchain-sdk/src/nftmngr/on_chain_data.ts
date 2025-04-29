//@ts-nocheck
import { AttributeDefinition, AttributeDefinitionAmino, AttributeDefinitionSDKType } from "./attribute_definition";
import { Action, ActionAmino, ActionSDKType } from "./action";
import { NftAttributeValue, NftAttributeValueAmino, NftAttributeValueSDKType } from "./nft_attribute_value";
import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes } from "../helpers";
export interface OnChainData_StatusEntry {
  key: string;
  value: boolean;
}
export interface OnChainData_StatusEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface OnChainData_StatusEntryAmino {
  key?: string;
  value?: boolean;
}
export interface OnChainData_StatusEntryAminoMsg {
  type: string;
  value: OnChainData_StatusEntryAmino;
}
export interface OnChainData_StatusEntrySDKType {
  key: string;
  value: boolean;
}
export interface OnChainData_OnOffSwitchEntry {
  key: string;
  value: boolean;
}
export interface OnChainData_OnOffSwitchEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface OnChainData_OnOffSwitchEntryAmino {
  key?: string;
  value?: boolean;
}
export interface OnChainData_OnOffSwitchEntryAminoMsg {
  type: string;
  value: OnChainData_OnOffSwitchEntryAmino;
}
export interface OnChainData_OnOffSwitchEntrySDKType {
  key: string;
  value: boolean;
}
export interface OnChainData {
  revealRequired: boolean;
  revealSecret: Uint8Array;
  nftAttributes: AttributeDefinition[];
  tokenAttributes: AttributeDefinition[];
  actions: Action[];
  status: {
    [key: string]: boolean;
  };
  onOffSwitch: {
    [key: string]: boolean;
  };
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
  status?: {
    [key: string]: boolean;
  };
  on_off_switch?: {
    [key: string]: boolean;
  };
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
  status: {
    [key: string]: boolean;
  };
  on_off_switch: {
    [key: string]: boolean;
  };
  nft_attributes_value: NftAttributeValueSDKType[];
}
function createBaseOnChainData_StatusEntry(): OnChainData_StatusEntry {
  return {
    key: "",
    value: false
  };
}
export const OnChainData_StatusEntry = {
  encode(message: OnChainData_StatusEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OnChainData_StatusEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnChainData_StatusEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OnChainData_StatusEntry>): OnChainData_StatusEntry {
    const message = createBaseOnChainData_StatusEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: OnChainData_StatusEntryAmino): OnChainData_StatusEntry {
    const message = createBaseOnChainData_StatusEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: OnChainData_StatusEntry): OnChainData_StatusEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: OnChainData_StatusEntryAminoMsg): OnChainData_StatusEntry {
    return OnChainData_StatusEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OnChainData_StatusEntryProtoMsg): OnChainData_StatusEntry {
    return OnChainData_StatusEntry.decode(message.value);
  },
  toProto(message: OnChainData_StatusEntry): Uint8Array {
    return OnChainData_StatusEntry.encode(message).finish();
  }
};
function createBaseOnChainData_OnOffSwitchEntry(): OnChainData_OnOffSwitchEntry {
  return {
    key: "",
    value: false
  };
}
export const OnChainData_OnOffSwitchEntry = {
  encode(message: OnChainData_OnOffSwitchEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OnChainData_OnOffSwitchEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnChainData_OnOffSwitchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OnChainData_OnOffSwitchEntry>): OnChainData_OnOffSwitchEntry {
    const message = createBaseOnChainData_OnOffSwitchEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: OnChainData_OnOffSwitchEntryAmino): OnChainData_OnOffSwitchEntry {
    const message = createBaseOnChainData_OnOffSwitchEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: OnChainData_OnOffSwitchEntry): OnChainData_OnOffSwitchEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: OnChainData_OnOffSwitchEntryAminoMsg): OnChainData_OnOffSwitchEntry {
    return OnChainData_OnOffSwitchEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OnChainData_OnOffSwitchEntryProtoMsg): OnChainData_OnOffSwitchEntry {
    return OnChainData_OnOffSwitchEntry.decode(message.value);
  },
  toProto(message: OnChainData_OnOffSwitchEntry): Uint8Array {
    return OnChainData_OnOffSwitchEntry.encode(message).finish();
  }
};
function createBaseOnChainData(): OnChainData {
  return {
    revealRequired: false,
    revealSecret: new Uint8Array(),
    nftAttributes: [],
    tokenAttributes: [],
    actions: [],
    status: {},
    onOffSwitch: {},
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
    Object.entries(message.status).forEach(([key, value]) => {
      OnChainData_StatusEntry.encode({
        key: key as any,
        value
      }, writer.uint32(48).fork()).ldelim();
    });
    Object.entries(message.onOffSwitch).forEach(([key, value]) => {
      OnChainData_OnOffSwitchEntry.encode({
        key: key as any,
        value
      }, writer.uint32(56).fork()).ldelim();
    });
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
          const entry6 = OnChainData_StatusEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.status[entry6.key] = entry6.value;
          }
          break;
        case 7:
          const entry7 = OnChainData_OnOffSwitchEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.onOffSwitch[entry7.key] = entry7.value;
          }
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
    message.status = Object.entries(object.status ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    message.onOffSwitch = Object.entries(object.onOffSwitch ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
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
    message.status = Object.entries(object.status ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
    message.onOffSwitch = Object.entries(object.on_off_switch ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
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
    obj.status = {};
    if (message.status) {
      Object.entries(message.status).forEach(([k, v]) => {
        obj.status[k] = bool.toAmino(v);
      });
    }
    obj.on_off_switch = {};
    if (message.onOffSwitch) {
      Object.entries(message.onOffSwitch).forEach(([k, v]) => {
        obj.on_off_switch[k] = bool.toAmino(v);
      });
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