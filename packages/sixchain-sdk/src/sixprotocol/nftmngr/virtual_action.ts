//@ts-nocheck
import {
  AllowedActioner,
  ActionParams,
  ActionParamsAmino,
  ActionParamsSDKType,
} from "./action";
import * as _m0 from "protobufjs/minimal";
export interface VirtualAction {
  virtualNftSchemaCode: string;
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  /** NOTE: Policy of virtual action */
  allowedActioner?: AllowedActioner;
  params?: ActionParams[];
}
export interface VirtualActionProtoMsg {
  typeUrl: "/sixprotocol.nftmngr.VirtualAction";
  value: Uint8Array;
}
export interface VirtualActionAmino {
  virtualNftSchemaCode?: string;
  name?: string;
  desc?: string;
  disable?: boolean;
  when?: string;
  then?: string[];
  /** NOTE: Policy of virtual action */
  allowed_actioner?: AllowedActioner;
  params?: ActionParamsAmino[];
}
export interface VirtualActionAminoMsg {
  type: "/sixprotocol.nftmngr.VirtualAction";
  value: VirtualActionAmino;
}
export interface VirtualActionSDKType {
  virtualNftSchemaCode: string;
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  allowed_actioner?: AllowedActioner;
  params?: ActionParamsSDKType[];
}
function createBaseVirtualAction(): VirtualAction {
  return {
    virtualNftSchemaCode: "",
    name: "",
    desc: "",
    disable: false,
    when: "",
    then: [],
    allowedActioner: undefined,
    params: [],
  };
}
export const VirtualAction = {
  typeUrl: "/sixprotocol.nftmngr.VirtualAction",
  encode(
    message: VirtualAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.virtualNftSchemaCode !== "") {
      writer.uint32(10).string(message.virtualNftSchemaCode);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.disable === true) {
      writer.uint32(32).bool(message.disable);
    }
    if (message.when !== "") {
      writer.uint32(42).string(message.when);
    }
    for (const v of message.then) {
      writer.uint32(50).string(v!);
    }
    if (message.allowedActioner !== undefined) {
      writer.uint32(56).int32(message.allowedActioner);
    }
    for (const v of message.params) {
      ActionParams.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualNftSchemaCode = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.disable = reader.bool();
          break;
        case 5:
          message.when = reader.string();
          break;
        case 6:
          message.then.push(reader.string());
          break;
        case 7:
          message.allowedActioner = reader.int32() as any;
          break;
        case 8:
          message.params.push(ActionParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualAction>): VirtualAction {
    const message = createBaseVirtualAction();
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? "";
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.disable = object.disable ?? false;
    message.when = object.when ?? "";
    message.then = object.then?.map((e) => e) || [];
    message.allowedActioner = object.allowedActioner ?? undefined;
    message.params =
      object.params?.map((e) => ActionParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VirtualActionAmino): VirtualAction {
    const message = createBaseVirtualAction();
    if (
      object.virtualNftSchemaCode !== undefined &&
      object.virtualNftSchemaCode !== null
    ) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    }
    if (object.when !== undefined && object.when !== null) {
      message.when = object.when;
    }
    message.then = object.then?.map((e) => e) || [];
    if (
      object.allowed_actioner !== undefined &&
      object.allowed_actioner !== null
    ) {
      message.allowedActioner = object.allowed_actioner;
    }
    message.params = object.params?.map((e) => ActionParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: VirtualAction): VirtualActionAmino {
    const obj: any = {};
    obj.virtualNftSchemaCode =
      message.virtualNftSchemaCode === ""
        ? undefined
        : message.virtualNftSchemaCode;
    obj.name = message.name === "" ? undefined : message.name;
    obj.desc = message.desc === "" ? undefined : message.desc;
    obj.disable = message.disable === false ? undefined : message.disable;
    obj.when = message.when === "" ? undefined : message.when;
    if (message.then) {
      obj.then = message.then.map((e) => e);
    } else {
      obj.then = message.then;
    }
    obj.allowed_actioner =
      message.allowedActioner === null ? undefined : message.allowedActioner;
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? ActionParams.toAmino(e) : undefined
      );
    } else {
      obj.params = message.params;
    }
    return obj;
  },
  fromAminoMsg(object: VirtualActionAminoMsg): VirtualAction {
    return VirtualAction.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualActionProtoMsg): VirtualAction {
    return VirtualAction.decode(message.value);
  },
  toProto(message: VirtualAction): Uint8Array {
    return VirtualAction.encode(message).finish();
  },
  toProtoMsg(message: VirtualAction): VirtualActionProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftmngr.VirtualAction",
      value: VirtualAction.encode(message).finish(),
    };
  },
};
