//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
export enum AllowedActioner {
  ALLOWED_ACTIONER_ALL = 0,
  ALLOWED_ACTIONER_SYSTEM_ONLY = 1,
  ALLOWED_ACTIONER_USER_ONLY = 2,
  UNRECOGNIZED = -1,
}
export const AllowedActionerSDKType = AllowedActioner;
export const AllowedActionerAmino = AllowedActioner;
export function allowedActionerFromJSON(object: any): AllowedActioner {
  switch (object) {
    case 0:
    case "ALLOWED_ACTIONER_ALL":
      return AllowedActioner.ALLOWED_ACTIONER_ALL;
    case 1:
    case "ALLOWED_ACTIONER_SYSTEM_ONLY":
      return AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY;
    case 2:
    case "ALLOWED_ACTIONER_USER_ONLY":
      return AllowedActioner.ALLOWED_ACTIONER_USER_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AllowedActioner.UNRECOGNIZED;
  }
}
export function allowedActionerToJSON(object: AllowedActioner): string {
  switch (object) {
    case AllowedActioner.ALLOWED_ACTIONER_ALL:
      return "ALLOWED_ACTIONER_ALL";
    case AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY:
      return "ALLOWED_ACTIONER_SYSTEM_ONLY";
    case AllowedActioner.ALLOWED_ACTIONER_USER_ONLY:
      return "ALLOWED_ACTIONER_USER_ONLY";
    case AllowedActioner.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Action {
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  allowedActioner?: AllowedActioner;
}
export interface ActionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.Action";
  value: Uint8Array;
}
export interface ActionAmino {
  name?: string;
  desc?: string;
  disable?: boolean;
  when?: string;
  then?: string[];
  allowed_actioner?: AllowedActioner;
}
export interface ActionAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.Action";
  value: ActionAmino;
}
export interface ActionSDKType {
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  allowed_actioner?: AllowedActioner;
}
function createBaseAction(): Action {
  return {
    name: "",
    desc: "",
    disable: false,
    when: "",
    then: [],
    allowedActioner: undefined
  };
}
export const Action = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.Action",
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(18).string(message.desc);
    }
    if (message.disable === true) {
      writer.uint32(24).bool(message.disable);
    }
    if (message.when !== "") {
      writer.uint32(34).string(message.when);
    }
    for (const v of message.then) {
      writer.uint32(42).string(v!);
    }
    if (message.allowedActioner !== undefined) {
      writer.uint32(48).int32(message.allowedActioner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.desc = reader.string();
          break;
        case 3:
          message.disable = reader.bool();
          break;
        case 4:
          message.when = reader.string();
          break;
        case 5:
          message.then.push(reader.string());
          break;
        case 6:
          message.allowedActioner = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Action>): Action {
    const message = createBaseAction();
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.disable = object.disable ?? false;
    message.when = object.when ?? "";
    message.then = object.then?.map(e => e) || [];
    message.allowedActioner = object.allowedActioner ?? undefined;
    return message;
  },
  fromAmino(object: ActionAmino): Action {
    const message = createBaseAction();
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
    message.then = object.then?.map(e => e) || [];
    if (object.allowed_actioner !== undefined && object.allowed_actioner !== null) {
      message.allowedActioner = object.allowed_actioner;
    }
    return message;
  },
  toAmino(message: Action): ActionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.desc = message.desc === "" ? undefined : message.desc;
    obj.disable = message.disable === false ? undefined : message.disable;
    obj.when = message.when === "" ? undefined : message.when;
    if (message.then) {
      obj.then = message.then.map(e => e);
    } else {
      obj.then = message.then;
    }
    obj.allowed_actioner = message.allowedActioner === null ? undefined : message.allowedActioner;
    return obj;
  },
  fromAminoMsg(object: ActionAminoMsg): Action {
    return Action.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionProtoMsg): Action {
    return Action.decode(message.value);
  },
  toProto(message: Action): Uint8Array {
    return Action.encode(message).finish();
  },
  toProtoMsg(message: Action): ActionProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.Action",
      value: Action.encode(message).finish()
    };
  }
};