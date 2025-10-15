//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sixprotocol/x/nftadmin/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sixprotocol.nftadmin.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgGrantPermission {
  creator: string;
  name: string;
  grantee: string;
}
export interface MsgGrantPermissionProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.MsgGrantPermission";
  value: Uint8Array;
}
/**
 * @name MsgGrantPermissionAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.MsgGrantPermission
 */
export interface MsgGrantPermissionAmino {
  creator?: string;
  name?: string;
  grantee?: string;
}
export interface MsgGrantPermissionAminoMsg {
  type: "/sixprotocol.nftadmin.MsgGrantPermission";
  value: MsgGrantPermissionAmino;
}
export interface MsgGrantPermissionSDKType {
  creator: string;
  name: string;
  grantee: string;
}
export interface MsgGrantPermissionResponse {
  grantee: string;
}
export interface MsgGrantPermissionResponseProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.MsgGrantPermissionResponse";
  value: Uint8Array;
}
/**
 * @name MsgGrantPermissionResponseAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.MsgGrantPermissionResponse
 */
export interface MsgGrantPermissionResponseAmino {
  grantee?: string;
}
export interface MsgGrantPermissionResponseAminoMsg {
  type: "/sixprotocol.nftadmin.MsgGrantPermissionResponse";
  value: MsgGrantPermissionResponseAmino;
}
export interface MsgGrantPermissionResponseSDKType {
  grantee: string;
}
export interface MsgRevokePermission {
  creator: string;
  name: string;
  revokee: string;
}
export interface MsgRevokePermissionProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.MsgRevokePermission";
  value: Uint8Array;
}
/**
 * @name MsgRevokePermissionAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.MsgRevokePermission
 */
export interface MsgRevokePermissionAmino {
  creator?: string;
  name?: string;
  revokee?: string;
}
export interface MsgRevokePermissionAminoMsg {
  type: "/sixprotocol.nftadmin.MsgRevokePermission";
  value: MsgRevokePermissionAmino;
}
export interface MsgRevokePermissionSDKType {
  creator: string;
  name: string;
  revokee: string;
}
export interface MsgRevokePermissionResponse {
  revokee: string;
}
export interface MsgRevokePermissionResponseProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.MsgRevokePermissionResponse";
  value: Uint8Array;
}
/**
 * @name MsgRevokePermissionResponseAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.MsgRevokePermissionResponse
 */
export interface MsgRevokePermissionResponseAmino {
  revokee?: string;
}
export interface MsgRevokePermissionResponseAminoMsg {
  type: "/sixprotocol.nftadmin.MsgRevokePermissionResponse";
  value: MsgRevokePermissionResponseAmino;
}
export interface MsgRevokePermissionResponseSDKType {
  revokee: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/sixprotocol.nftadmin.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sixprotocol/x/nftadmin/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/sixprotocol.nftadmin.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGrantPermission(): MsgGrantPermission {
  return {
    creator: "",
    name: "",
    grantee: ""
  };
}
export const MsgGrantPermission = {
  typeUrl: "/sixprotocol.nftadmin.MsgGrantPermission",
  encode(message: MsgGrantPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrantPermission>): MsgGrantPermission {
    const message = createBaseMsgGrantPermission();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgGrantPermissionAmino): MsgGrantPermission {
    const message = createBaseMsgGrantPermission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgGrantPermission): MsgGrantPermissionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgGrantPermissionAminoMsg): MsgGrantPermission {
    return MsgGrantPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGrantPermissionProtoMsg): MsgGrantPermission {
    return MsgGrantPermission.decode(message.value);
  },
  toProto(message: MsgGrantPermission): Uint8Array {
    return MsgGrantPermission.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantPermission): MsgGrantPermissionProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.MsgGrantPermission",
      value: MsgGrantPermission.encode(message).finish()
    };
  }
};
function createBaseMsgGrantPermissionResponse(): MsgGrantPermissionResponse {
  return {
    grantee: ""
  };
}
export const MsgGrantPermissionResponse = {
  typeUrl: "/sixprotocol.nftadmin.MsgGrantPermissionResponse",
  encode(message: MsgGrantPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrantPermissionResponse>): MsgGrantPermissionResponse {
    const message = createBaseMsgGrantPermissionResponse();
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgGrantPermissionResponseAmino): MsgGrantPermissionResponse {
    const message = createBaseMsgGrantPermissionResponse();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgGrantPermissionResponse): MsgGrantPermissionResponseAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgGrantPermissionResponseAminoMsg): MsgGrantPermissionResponse {
    return MsgGrantPermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGrantPermissionResponseProtoMsg): MsgGrantPermissionResponse {
    return MsgGrantPermissionResponse.decode(message.value);
  },
  toProto(message: MsgGrantPermissionResponse): Uint8Array {
    return MsgGrantPermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantPermissionResponse): MsgGrantPermissionResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.MsgGrantPermissionResponse",
      value: MsgGrantPermissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokePermission(): MsgRevokePermission {
  return {
    creator: "",
    name: "",
    revokee: ""
  };
}
export const MsgRevokePermission = {
  typeUrl: "/sixprotocol.nftadmin.MsgRevokePermission",
  encode(message: MsgRevokePermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.revokee !== "") {
      writer.uint32(26).string(message.revokee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.revokee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokePermission>): MsgRevokePermission {
    const message = createBaseMsgRevokePermission();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.revokee = object.revokee ?? "";
    return message;
  },
  fromAmino(object: MsgRevokePermissionAmino): MsgRevokePermission {
    const message = createBaseMsgRevokePermission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = object.revokee;
    }
    return message;
  },
  toAmino(message: MsgRevokePermission): MsgRevokePermissionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.revokee = message.revokee === "" ? undefined : message.revokee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokePermissionAminoMsg): MsgRevokePermission {
    return MsgRevokePermission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokePermissionProtoMsg): MsgRevokePermission {
    return MsgRevokePermission.decode(message.value);
  },
  toProto(message: MsgRevokePermission): Uint8Array {
    return MsgRevokePermission.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokePermission): MsgRevokePermissionProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.MsgRevokePermission",
      value: MsgRevokePermission.encode(message).finish()
    };
  }
};
function createBaseMsgRevokePermissionResponse(): MsgRevokePermissionResponse {
  return {
    revokee: ""
  };
}
export const MsgRevokePermissionResponse = {
  typeUrl: "/sixprotocol.nftadmin.MsgRevokePermissionResponse",
  encode(message: MsgRevokePermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokee !== "") {
      writer.uint32(10).string(message.revokee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revokee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokePermissionResponse>): MsgRevokePermissionResponse {
    const message = createBaseMsgRevokePermissionResponse();
    message.revokee = object.revokee ?? "";
    return message;
  },
  fromAmino(object: MsgRevokePermissionResponseAmino): MsgRevokePermissionResponse {
    const message = createBaseMsgRevokePermissionResponse();
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = object.revokee;
    }
    return message;
  },
  toAmino(message: MsgRevokePermissionResponse): MsgRevokePermissionResponseAmino {
    const obj: any = {};
    obj.revokee = message.revokee === "" ? undefined : message.revokee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokePermissionResponseAminoMsg): MsgRevokePermissionResponse {
    return MsgRevokePermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokePermissionResponseProtoMsg): MsgRevokePermissionResponse {
    return MsgRevokePermissionResponse.decode(message.value);
  },
  toProto(message: MsgRevokePermissionResponse): Uint8Array {
    return MsgRevokePermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokePermissionResponse): MsgRevokePermissionResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.MsgRevokePermissionResponse",
      value: MsgRevokePermissionResponse.encode(message).finish()
    };
  }
};