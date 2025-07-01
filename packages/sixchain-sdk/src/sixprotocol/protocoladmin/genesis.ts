//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Admin, AdminAmino, AdminSDKType } from "./admin";
import { Group, GroupAmino, GroupSDKType } from "./group";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the protocoladmin module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  adminList: Admin[];
  groupList: Group[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sixprotocol.protocoladmin.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the protocoladmin module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  adminList?: AdminAmino[];
  groupList?: GroupAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sixprotocol.protocoladmin.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the protocoladmin module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  adminList: AdminSDKType[];
  groupList: GroupSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    adminList: [],
    groupList: []
  };
}
export const GenesisState = {
  typeUrl: "/sixprotocol.protocoladmin.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.adminList) {
      Admin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupList) {
      Group.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.adminList.push(Admin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupList.push(Group.decode(reader, reader.uint32()));
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
    message.adminList = object.adminList?.map(e => Admin.fromPartial(e)) || [];
    message.groupList = object.groupList?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.adminList = object.adminList?.map(e => Admin.fromAmino(e)) || [];
    message.groupList = object.groupList?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.adminList) {
      obj.adminList = message.adminList.map(e => e ? Admin.toAmino(e) : undefined);
    } else {
      obj.adminList = message.adminList;
    }
    if (message.groupList) {
      obj.groupList = message.groupList.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groupList = message.groupList;
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
      typeUrl: "/sixprotocol.protocoladmin.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};