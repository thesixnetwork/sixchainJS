//@ts-nocheck
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgGrantPermission {
  creator: string;
  name: string;
  grantee: string;
}
export interface MsgGrantPermissionProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission";
  value: Uint8Array;
}
export interface MsgGrantPermissionAmino {
  creator?: string;
  name?: string;
  grantee?: string;
}
export interface MsgGrantPermissionAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission";
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
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermissionResponse";
  value: Uint8Array;
}
export interface MsgGrantPermissionResponseAmino {
  grantee?: string;
}
export interface MsgGrantPermissionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermissionResponse";
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
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission";
  value: Uint8Array;
}
export interface MsgRevokePermissionAmino {
  creator?: string;
  name?: string;
  revokee?: string;
}
export interface MsgRevokePermissionAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission";
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
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermissionResponse";
  value: Uint8Array;
}
export interface MsgRevokePermissionResponseAmino {
  revokee?: string;
}
export interface MsgRevokePermissionResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermissionResponse";
  value: MsgRevokePermissionResponseAmino;
}
export interface MsgRevokePermissionResponseSDKType {
  revokee: string;
}
export interface MsgMint {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint";
  value: Uint8Array;
}
export interface MsgMintAmino {
  creator?: string;
  amount?: string;
  token?: string;
}
export interface MsgMintAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgMint";
  value: MsgMintAmino;
}
export interface MsgMintSDKType {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgMintResponse {
  amount: string;
  token: string;
}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMintResponse";
  value: Uint8Array;
}
export interface MsgMintResponseAmino {
  amount?: string;
  token?: string;
}
export interface MsgMintResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgMintResponse";
  value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {
  amount: string;
  token: string;
}
export interface MsgBurn {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn";
  value: Uint8Array;
}
export interface MsgBurnAmino {
  creator?: string;
  amount?: string;
  token?: string;
}
export interface MsgBurnAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgBurn";
  value: MsgBurnAmino;
}
export interface MsgBurnSDKType {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgBurnResponse {
  amount: string;
  token: string;
}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseAmino {
  amount?: string;
  token?: string;
}
export interface MsgBurnResponseAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
  amount: string;
  token: string;
}
function createBaseMsgGrantPermission(): MsgGrantPermission {
  return {
    creator: "",
    name: "",
    grantee: ""
  };
}
export const MsgGrantPermission = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
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
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
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
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermissionResponse",
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
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermissionResponse",
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
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
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
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
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
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermissionResponse",
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
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermissionResponse",
      value: MsgRevokePermissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    creator: "",
    amount: Long.UZERO,
    token: ""
  };
}
export const MsgMint = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint",
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.uint64() as Long;
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = !message.amount.isZero() ? (message.amount?.toString)() : undefined;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {
    amount: "",
    token: ""
  };
}
export const MsgMintResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMintResponse",
  encode(message: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.amount = object.amount ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    creator: "",
    amount: Long.UZERO,
    token: ""
  };
}
export const MsgBurn = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn",
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.uint64() as Long;
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = !message.amount.isZero() ? (message.amount?.toString)() : undefined;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {
    amount: "",
    token: ""
  };
}
export const MsgBurnResponse = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurnResponse",
  encode(message: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    message.amount = object.amount ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};