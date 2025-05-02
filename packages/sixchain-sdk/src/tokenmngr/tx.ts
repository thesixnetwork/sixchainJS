//@ts-nocheck
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateToken {
  creator: string;
  name: string;
  maxSupply: Long;
  denomMetaData: string;
  mintee: string;
}
export interface MsgCreateTokenProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken";
  value: Uint8Array;
}
export interface MsgCreateTokenAmino {
  creator?: string;
  name?: string;
  maxSupply?: string;
  denomMetaData?: string;
  mintee?: string;
}
export interface MsgCreateTokenAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken";
  value: MsgCreateTokenAmino;
}
export interface MsgCreateTokenSDKType {
  creator: string;
  name: string;
  maxSupply: Long;
  denomMetaData: string;
  mintee: string;
}
export interface MsgCreateTokenResponse {}
export interface MsgCreateTokenResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateTokenResponse";
  value: Uint8Array;
}
export interface MsgCreateTokenResponseAmino {}
export interface MsgCreateTokenResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateTokenResponse";
  value: MsgCreateTokenResponseAmino;
}
export interface MsgCreateTokenResponseSDKType {}
export interface MsgUpdateToken {
  creator: string;
  name: string;
  maxSupply: Long;
  mintee: string;
}
export interface MsgUpdateTokenProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken";
  value: Uint8Array;
}
export interface MsgUpdateTokenAmino {
  creator?: string;
  name?: string;
  maxSupply?: string;
  mintee?: string;
}
export interface MsgUpdateTokenAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken";
  value: MsgUpdateTokenAmino;
}
export interface MsgUpdateTokenSDKType {
  creator: string;
  name: string;
  maxSupply: Long;
  mintee: string;
}
export interface MsgUpdateTokenResponse {}
export interface MsgUpdateTokenResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateTokenResponse";
  value: Uint8Array;
}
export interface MsgUpdateTokenResponseAmino {}
export interface MsgUpdateTokenResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateTokenResponse";
  value: MsgUpdateTokenResponseAmino;
}
export interface MsgUpdateTokenResponseSDKType {}
export interface MsgDeleteToken {
  creator: string;
  name: string;
}
export interface MsgDeleteTokenProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken";
  value: Uint8Array;
}
export interface MsgDeleteTokenAmino {
  creator?: string;
  name?: string;
}
export interface MsgDeleteTokenAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken";
  value: MsgDeleteTokenAmino;
}
export interface MsgDeleteTokenSDKType {
  creator: string;
  name: string;
}
export interface MsgDeleteTokenResponse {}
export interface MsgDeleteTokenResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteTokenResponse";
  value: Uint8Array;
}
export interface MsgDeleteTokenResponseAmino {}
export interface MsgDeleteTokenResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteTokenResponse";
  value: MsgDeleteTokenResponseAmino;
}
export interface MsgDeleteTokenResponseSDKType {}
export interface MsgCreateMintperm {
  creator: string;
  token: string;
  address: string;
}
export interface MsgCreateMintpermProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm";
  value: Uint8Array;
}
export interface MsgCreateMintpermAmino {
  creator?: string;
  token?: string;
  address?: string;
}
export interface MsgCreateMintpermAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm";
  value: MsgCreateMintpermAmino;
}
export interface MsgCreateMintpermSDKType {
  creator: string;
  token: string;
  address: string;
}
export interface MsgCreateMintpermResponse {}
export interface MsgCreateMintpermResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintpermResponse";
  value: Uint8Array;
}
export interface MsgCreateMintpermResponseAmino {}
export interface MsgCreateMintpermResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintpermResponse";
  value: MsgCreateMintpermResponseAmino;
}
export interface MsgCreateMintpermResponseSDKType {}
export interface MsgUpdateMintperm {
  creator: string;
  token: string;
  address: string;
}
export interface MsgUpdateMintpermProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm";
  value: Uint8Array;
}
export interface MsgUpdateMintpermAmino {
  creator?: string;
  token?: string;
  address?: string;
}
export interface MsgUpdateMintpermAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm";
  value: MsgUpdateMintpermAmino;
}
export interface MsgUpdateMintpermSDKType {
  creator: string;
  token: string;
  address: string;
}
export interface MsgUpdateMintpermResponse {}
export interface MsgUpdateMintpermResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintpermResponse";
  value: Uint8Array;
}
export interface MsgUpdateMintpermResponseAmino {}
export interface MsgUpdateMintpermResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintpermResponse";
  value: MsgUpdateMintpermResponseAmino;
}
export interface MsgUpdateMintpermResponseSDKType {}
export interface MsgDeleteMintperm {
  creator: string;
  token: string;
  address: string;
}
export interface MsgDeleteMintpermProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm";
  value: Uint8Array;
}
export interface MsgDeleteMintpermAmino {
  creator?: string;
  token?: string;
  address?: string;
}
export interface MsgDeleteMintpermAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm";
  value: MsgDeleteMintpermAmino;
}
export interface MsgDeleteMintpermSDKType {
  creator: string;
  token: string;
  address: string;
}
export interface MsgDeleteMintpermResponse {}
export interface MsgDeleteMintpermResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintpermResponse";
  value: Uint8Array;
}
export interface MsgDeleteMintpermResponseAmino {}
export interface MsgDeleteMintpermResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintpermResponse";
  value: MsgDeleteMintpermResponseAmino;
}
export interface MsgDeleteMintpermResponseSDKType {}
export interface MsgMint {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMint";
  value: Uint8Array;
}
export interface MsgMintAmino {
  creator?: string;
  amount?: string;
  token?: string;
}
export interface MsgMintAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgMint";
  value: MsgMintAmino;
}
export interface MsgMintSDKType {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMintResponse";
  value: Uint8Array;
}
export interface MsgMintResponseAmino {}
export interface MsgMintResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgMintResponse";
  value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {}
export interface MsgCreateOptions {
  creator: string;
  defaultMintee: string;
}
export interface MsgCreateOptionsProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions";
  value: Uint8Array;
}
export interface MsgCreateOptionsAmino {
  creator?: string;
  defaultMintee?: string;
}
export interface MsgCreateOptionsAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions";
  value: MsgCreateOptionsAmino;
}
export interface MsgCreateOptionsSDKType {
  creator: string;
  defaultMintee: string;
}
export interface MsgCreateOptionsResponse {}
export interface MsgCreateOptionsResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptionsResponse";
  value: Uint8Array;
}
export interface MsgCreateOptionsResponseAmino {}
export interface MsgCreateOptionsResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptionsResponse";
  value: MsgCreateOptionsResponseAmino;
}
export interface MsgCreateOptionsResponseSDKType {}
export interface MsgUpdateOptions {
  creator: string;
  defaultMintee: string;
}
export interface MsgUpdateOptionsProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions";
  value: Uint8Array;
}
export interface MsgUpdateOptionsAmino {
  creator?: string;
  defaultMintee?: string;
}
export interface MsgUpdateOptionsAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions";
  value: MsgUpdateOptionsAmino;
}
export interface MsgUpdateOptionsSDKType {
  creator: string;
  defaultMintee: string;
}
export interface MsgUpdateOptionsResponse {}
export interface MsgUpdateOptionsResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptionsResponse";
  value: Uint8Array;
}
export interface MsgUpdateOptionsResponseAmino {}
export interface MsgUpdateOptionsResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptionsResponse";
  value: MsgUpdateOptionsResponseAmino;
}
export interface MsgUpdateOptionsResponseSDKType {}
export interface MsgDeleteOptions {
  creator: string;
}
export interface MsgDeleteOptionsProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions";
  value: Uint8Array;
}
export interface MsgDeleteOptionsAmino {
  creator?: string;
}
export interface MsgDeleteOptionsAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions";
  value: MsgDeleteOptionsAmino;
}
export interface MsgDeleteOptionsSDKType {
  creator: string;
}
export interface MsgDeleteOptionsResponse {}
export interface MsgDeleteOptionsResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptionsResponse";
  value: Uint8Array;
}
export interface MsgDeleteOptionsResponseAmino {}
export interface MsgDeleteOptionsResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptionsResponse";
  value: MsgDeleteOptionsResponseAmino;
}
export interface MsgDeleteOptionsResponseSDKType {}
export interface MsgBurn {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn";
  value: Uint8Array;
}
export interface MsgBurnAmino {
  creator?: string;
  amount?: string;
  token?: string;
}
export interface MsgBurnAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn";
  value: MsgBurnAmino;
}
export interface MsgBurnSDKType {
  creator: string;
  amount: Long;
  token: string;
}
export interface MsgBurnResponse {
  id: Long;
}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseAmino {
  id?: string;
}
export interface MsgBurnResponseAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
  id: Long;
}
function createBaseMsgCreateToken(): MsgCreateToken {
  return {
    creator: "",
    name: "",
    maxSupply: Long.UZERO,
    denomMetaData: "",
    mintee: ""
  };
}
export const MsgCreateToken = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken",
  encode(message: MsgCreateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (!message.maxSupply.isZero()) {
      writer.uint32(24).uint64(message.maxSupply);
    }
    if (message.denomMetaData !== "") {
      writer.uint32(34).string(message.denomMetaData);
    }
    if (message.mintee !== "") {
      writer.uint32(42).string(message.mintee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateToken();
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
          message.maxSupply = reader.uint64() as Long;
          break;
        case 4:
          message.denomMetaData = reader.string();
          break;
        case 5:
          message.mintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateToken>): MsgCreateToken {
    const message = createBaseMsgCreateToken();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.denomMetaData = object.denomMetaData ?? "";
    message.mintee = object.mintee ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTokenAmino): MsgCreateToken {
    const message = createBaseMsgCreateToken();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Long.fromString(object.maxSupply);
    }
    if (object.denomMetaData !== undefined && object.denomMetaData !== null) {
      message.denomMetaData = object.denomMetaData;
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = object.mintee;
    }
    return message;
  },
  toAmino(message: MsgCreateToken): MsgCreateTokenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.maxSupply = !message.maxSupply.isZero() ? (message.maxSupply?.toString)() : undefined;
    obj.denomMetaData = message.denomMetaData === "" ? undefined : message.denomMetaData;
    obj.mintee = message.mintee === "" ? undefined : message.mintee;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTokenAminoMsg): MsgCreateToken {
    return MsgCreateToken.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTokenProtoMsg): MsgCreateToken {
    return MsgCreateToken.decode(message.value);
  },
  toProto(message: MsgCreateToken): Uint8Array {
    return MsgCreateToken.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateToken): MsgCreateTokenProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken",
      value: MsgCreateToken.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTokenResponse(): MsgCreateTokenResponse {
  return {};
}
export const MsgCreateTokenResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateTokenResponse",
  encode(_: MsgCreateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTokenResponse();
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
  fromPartial(_: Partial<MsgCreateTokenResponse>): MsgCreateTokenResponse {
    const message = createBaseMsgCreateTokenResponse();
    return message;
  },
  fromAmino(_: MsgCreateTokenResponseAmino): MsgCreateTokenResponse {
    const message = createBaseMsgCreateTokenResponse();
    return message;
  },
  toAmino(_: MsgCreateTokenResponse): MsgCreateTokenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTokenResponseAminoMsg): MsgCreateTokenResponse {
    return MsgCreateTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTokenResponseProtoMsg): MsgCreateTokenResponse {
    return MsgCreateTokenResponse.decode(message.value);
  },
  toProto(message: MsgCreateTokenResponse): Uint8Array {
    return MsgCreateTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTokenResponse): MsgCreateTokenResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateTokenResponse",
      value: MsgCreateTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateToken(): MsgUpdateToken {
  return {
    creator: "",
    name: "",
    maxSupply: Long.UZERO,
    mintee: ""
  };
}
export const MsgUpdateToken = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken",
  encode(message: MsgUpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (!message.maxSupply.isZero()) {
      writer.uint32(32).uint64(message.maxSupply);
    }
    if (message.mintee !== "") {
      writer.uint32(42).string(message.mintee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 4:
          message.maxSupply = reader.uint64() as Long;
          break;
        case 5:
          message.mintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateToken>): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.mintee = object.mintee ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateTokenAmino): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Long.fromString(object.maxSupply);
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = object.mintee;
    }
    return message;
  },
  toAmino(message: MsgUpdateToken): MsgUpdateTokenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.maxSupply = !message.maxSupply.isZero() ? (message.maxSupply?.toString)() : undefined;
    obj.mintee = message.mintee === "" ? undefined : message.mintee;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTokenAminoMsg): MsgUpdateToken {
    return MsgUpdateToken.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTokenProtoMsg): MsgUpdateToken {
    return MsgUpdateToken.decode(message.value);
  },
  toProto(message: MsgUpdateToken): Uint8Array {
    return MsgUpdateToken.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateToken): MsgUpdateTokenProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken",
      value: MsgUpdateToken.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTokenResponse(): MsgUpdateTokenResponse {
  return {};
}
export const MsgUpdateTokenResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateTokenResponse",
  encode(_: MsgUpdateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenResponse();
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
  fromPartial(_: Partial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTokenResponseAmino): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    return message;
  },
  toAmino(_: MsgUpdateTokenResponse): MsgUpdateTokenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTokenResponseAminoMsg): MsgUpdateTokenResponse {
    return MsgUpdateTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTokenResponseProtoMsg): MsgUpdateTokenResponse {
    return MsgUpdateTokenResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTokenResponse): Uint8Array {
    return MsgUpdateTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTokenResponse): MsgUpdateTokenResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateTokenResponse",
      value: MsgUpdateTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteToken(): MsgDeleteToken {
  return {
    creator: "",
    name: ""
  };
}
export const MsgDeleteToken = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken",
  encode(message: MsgDeleteToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteToken>): MsgDeleteToken {
    const message = createBaseMsgDeleteToken();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteTokenAmino): MsgDeleteToken {
    const message = createBaseMsgDeleteToken();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgDeleteToken): MsgDeleteTokenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTokenAminoMsg): MsgDeleteToken {
    return MsgDeleteToken.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTokenProtoMsg): MsgDeleteToken {
    return MsgDeleteToken.decode(message.value);
  },
  toProto(message: MsgDeleteToken): Uint8Array {
    return MsgDeleteToken.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteToken): MsgDeleteTokenProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken",
      value: MsgDeleteToken.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTokenResponse(): MsgDeleteTokenResponse {
  return {};
}
export const MsgDeleteTokenResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteTokenResponse",
  encode(_: MsgDeleteTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTokenResponse();
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
  fromPartial(_: Partial<MsgDeleteTokenResponse>): MsgDeleteTokenResponse {
    const message = createBaseMsgDeleteTokenResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTokenResponseAmino): MsgDeleteTokenResponse {
    const message = createBaseMsgDeleteTokenResponse();
    return message;
  },
  toAmino(_: MsgDeleteTokenResponse): MsgDeleteTokenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTokenResponseAminoMsg): MsgDeleteTokenResponse {
    return MsgDeleteTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTokenResponseProtoMsg): MsgDeleteTokenResponse {
    return MsgDeleteTokenResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTokenResponse): Uint8Array {
    return MsgDeleteTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTokenResponse): MsgDeleteTokenResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteTokenResponse",
      value: MsgDeleteTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMintperm(): MsgCreateMintperm {
  return {
    creator: "",
    token: "",
    address: ""
  };
}
export const MsgCreateMintperm = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm",
  encode(message: MsgCreateMintperm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMintperm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMintperm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMintperm>): MsgCreateMintperm {
    const message = createBaseMsgCreateMintperm();
    message.creator = object.creator ?? "";
    message.token = object.token ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMintpermAmino): MsgCreateMintperm {
    const message = createBaseMsgCreateMintperm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateMintperm): MsgCreateMintpermAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.token = message.token === "" ? undefined : message.token;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMintpermAminoMsg): MsgCreateMintperm {
    return MsgCreateMintperm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMintpermProtoMsg): MsgCreateMintperm {
    return MsgCreateMintperm.decode(message.value);
  },
  toProto(message: MsgCreateMintperm): Uint8Array {
    return MsgCreateMintperm.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMintperm): MsgCreateMintpermProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm",
      value: MsgCreateMintperm.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMintpermResponse(): MsgCreateMintpermResponse {
  return {};
}
export const MsgCreateMintpermResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintpermResponse",
  encode(_: MsgCreateMintpermResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMintpermResponse();
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
  fromPartial(_: Partial<MsgCreateMintpermResponse>): MsgCreateMintpermResponse {
    const message = createBaseMsgCreateMintpermResponse();
    return message;
  },
  fromAmino(_: MsgCreateMintpermResponseAmino): MsgCreateMintpermResponse {
    const message = createBaseMsgCreateMintpermResponse();
    return message;
  },
  toAmino(_: MsgCreateMintpermResponse): MsgCreateMintpermResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateMintpermResponseAminoMsg): MsgCreateMintpermResponse {
    return MsgCreateMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMintpermResponseProtoMsg): MsgCreateMintpermResponse {
    return MsgCreateMintpermResponse.decode(message.value);
  },
  toProto(message: MsgCreateMintpermResponse): Uint8Array {
    return MsgCreateMintpermResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMintpermResponse): MsgCreateMintpermResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintpermResponse",
      value: MsgCreateMintpermResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMintperm(): MsgUpdateMintperm {
  return {
    creator: "",
    token: "",
    address: ""
  };
}
export const MsgUpdateMintperm = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm",
  encode(message: MsgUpdateMintperm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMintperm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMintperm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMintperm>): MsgUpdateMintperm {
    const message = createBaseMsgUpdateMintperm();
    message.creator = object.creator ?? "";
    message.token = object.token ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMintpermAmino): MsgUpdateMintperm {
    const message = createBaseMsgUpdateMintperm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgUpdateMintperm): MsgUpdateMintpermAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.token = message.token === "" ? undefined : message.token;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMintpermAminoMsg): MsgUpdateMintperm {
    return MsgUpdateMintperm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMintpermProtoMsg): MsgUpdateMintperm {
    return MsgUpdateMintperm.decode(message.value);
  },
  toProto(message: MsgUpdateMintperm): Uint8Array {
    return MsgUpdateMintperm.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMintperm): MsgUpdateMintpermProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm",
      value: MsgUpdateMintperm.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMintpermResponse(): MsgUpdateMintpermResponse {
  return {};
}
export const MsgUpdateMintpermResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintpermResponse",
  encode(_: MsgUpdateMintpermResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMintpermResponse();
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
  fromPartial(_: Partial<MsgUpdateMintpermResponse>): MsgUpdateMintpermResponse {
    const message = createBaseMsgUpdateMintpermResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMintpermResponseAmino): MsgUpdateMintpermResponse {
    const message = createBaseMsgUpdateMintpermResponse();
    return message;
  },
  toAmino(_: MsgUpdateMintpermResponse): MsgUpdateMintpermResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMintpermResponseAminoMsg): MsgUpdateMintpermResponse {
    return MsgUpdateMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMintpermResponseProtoMsg): MsgUpdateMintpermResponse {
    return MsgUpdateMintpermResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMintpermResponse): Uint8Array {
    return MsgUpdateMintpermResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMintpermResponse): MsgUpdateMintpermResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintpermResponse",
      value: MsgUpdateMintpermResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteMintperm(): MsgDeleteMintperm {
  return {
    creator: "",
    token: "",
    address: ""
  };
}
export const MsgDeleteMintperm = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm",
  encode(message: MsgDeleteMintperm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMintperm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMintperm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteMintperm>): MsgDeleteMintperm {
    const message = createBaseMsgDeleteMintperm();
    message.creator = object.creator ?? "";
    message.token = object.token ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteMintpermAmino): MsgDeleteMintperm {
    const message = createBaseMsgDeleteMintperm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgDeleteMintperm): MsgDeleteMintpermAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.token = message.token === "" ? undefined : message.token;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteMintpermAminoMsg): MsgDeleteMintperm {
    return MsgDeleteMintperm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteMintpermProtoMsg): MsgDeleteMintperm {
    return MsgDeleteMintperm.decode(message.value);
  },
  toProto(message: MsgDeleteMintperm): Uint8Array {
    return MsgDeleteMintperm.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteMintperm): MsgDeleteMintpermProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm",
      value: MsgDeleteMintperm.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteMintpermResponse(): MsgDeleteMintpermResponse {
  return {};
}
export const MsgDeleteMintpermResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintpermResponse",
  encode(_: MsgDeleteMintpermResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMintpermResponse();
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
  fromPartial(_: Partial<MsgDeleteMintpermResponse>): MsgDeleteMintpermResponse {
    const message = createBaseMsgDeleteMintpermResponse();
    return message;
  },
  fromAmino(_: MsgDeleteMintpermResponseAmino): MsgDeleteMintpermResponse {
    const message = createBaseMsgDeleteMintpermResponse();
    return message;
  },
  toAmino(_: MsgDeleteMintpermResponse): MsgDeleteMintpermResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteMintpermResponseAminoMsg): MsgDeleteMintpermResponse {
    return MsgDeleteMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteMintpermResponseProtoMsg): MsgDeleteMintpermResponse {
    return MsgDeleteMintpermResponse.decode(message.value);
  },
  toProto(message: MsgDeleteMintpermResponse): Uint8Array {
    return MsgDeleteMintpermResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteMintpermResponse): MsgDeleteMintpermResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintpermResponse",
      value: MsgDeleteMintpermResponse.encode(message).finish()
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
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMint",
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
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMintResponse",
  encode(_: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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
  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  toAmino(_: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
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
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOptions(): MsgCreateOptions {
  return {
    creator: "",
    defaultMintee: ""
  };
}
export const MsgCreateOptions = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions",
  encode(message: MsgCreateOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defaultMintee !== "") {
      writer.uint32(18).string(message.defaultMintee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.defaultMintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateOptions>): MsgCreateOptions {
    const message = createBaseMsgCreateOptions();
    message.creator = object.creator ?? "";
    message.defaultMintee = object.defaultMintee ?? "";
    return message;
  },
  fromAmino(object: MsgCreateOptionsAmino): MsgCreateOptions {
    const message = createBaseMsgCreateOptions();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = object.defaultMintee;
    }
    return message;
  },
  toAmino(message: MsgCreateOptions): MsgCreateOptionsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.defaultMintee = message.defaultMintee === "" ? undefined : message.defaultMintee;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOptionsAminoMsg): MsgCreateOptions {
    return MsgCreateOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOptionsProtoMsg): MsgCreateOptions {
    return MsgCreateOptions.decode(message.value);
  },
  toProto(message: MsgCreateOptions): Uint8Array {
    return MsgCreateOptions.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOptions): MsgCreateOptionsProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions",
      value: MsgCreateOptions.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOptionsResponse(): MsgCreateOptionsResponse {
  return {};
}
export const MsgCreateOptionsResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptionsResponse",
  encode(_: MsgCreateOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOptionsResponse();
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
  fromPartial(_: Partial<MsgCreateOptionsResponse>): MsgCreateOptionsResponse {
    const message = createBaseMsgCreateOptionsResponse();
    return message;
  },
  fromAmino(_: MsgCreateOptionsResponseAmino): MsgCreateOptionsResponse {
    const message = createBaseMsgCreateOptionsResponse();
    return message;
  },
  toAmino(_: MsgCreateOptionsResponse): MsgCreateOptionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateOptionsResponseAminoMsg): MsgCreateOptionsResponse {
    return MsgCreateOptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOptionsResponseProtoMsg): MsgCreateOptionsResponse {
    return MsgCreateOptionsResponse.decode(message.value);
  },
  toProto(message: MsgCreateOptionsResponse): Uint8Array {
    return MsgCreateOptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOptionsResponse): MsgCreateOptionsResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptionsResponse",
      value: MsgCreateOptionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOptions(): MsgUpdateOptions {
  return {
    creator: "",
    defaultMintee: ""
  };
}
export const MsgUpdateOptions = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions",
  encode(message: MsgUpdateOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defaultMintee !== "") {
      writer.uint32(18).string(message.defaultMintee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.defaultMintee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateOptions>): MsgUpdateOptions {
    const message = createBaseMsgUpdateOptions();
    message.creator = object.creator ?? "";
    message.defaultMintee = object.defaultMintee ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateOptionsAmino): MsgUpdateOptions {
    const message = createBaseMsgUpdateOptions();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.defaultMintee !== undefined && object.defaultMintee !== null) {
      message.defaultMintee = object.defaultMintee;
    }
    return message;
  },
  toAmino(message: MsgUpdateOptions): MsgUpdateOptionsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.defaultMintee = message.defaultMintee === "" ? undefined : message.defaultMintee;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOptionsAminoMsg): MsgUpdateOptions {
    return MsgUpdateOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOptionsProtoMsg): MsgUpdateOptions {
    return MsgUpdateOptions.decode(message.value);
  },
  toProto(message: MsgUpdateOptions): Uint8Array {
    return MsgUpdateOptions.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOptions): MsgUpdateOptionsProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions",
      value: MsgUpdateOptions.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOptionsResponse(): MsgUpdateOptionsResponse {
  return {};
}
export const MsgUpdateOptionsResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptionsResponse",
  encode(_: MsgUpdateOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOptionsResponse();
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
  fromPartial(_: Partial<MsgUpdateOptionsResponse>): MsgUpdateOptionsResponse {
    const message = createBaseMsgUpdateOptionsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOptionsResponseAmino): MsgUpdateOptionsResponse {
    const message = createBaseMsgUpdateOptionsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOptionsResponse): MsgUpdateOptionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOptionsResponseAminoMsg): MsgUpdateOptionsResponse {
    return MsgUpdateOptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOptionsResponseProtoMsg): MsgUpdateOptionsResponse {
    return MsgUpdateOptionsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOptionsResponse): Uint8Array {
    return MsgUpdateOptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOptionsResponse): MsgUpdateOptionsResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptionsResponse",
      value: MsgUpdateOptionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOptions(): MsgDeleteOptions {
  return {
    creator: ""
  };
}
export const MsgDeleteOptions = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions",
  encode(message: MsgDeleteOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteOptions>): MsgDeleteOptions {
    const message = createBaseMsgDeleteOptions();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteOptionsAmino): MsgDeleteOptions {
    const message = createBaseMsgDeleteOptions();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgDeleteOptions): MsgDeleteOptionsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOptionsAminoMsg): MsgDeleteOptions {
    return MsgDeleteOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOptionsProtoMsg): MsgDeleteOptions {
    return MsgDeleteOptions.decode(message.value);
  },
  toProto(message: MsgDeleteOptions): Uint8Array {
    return MsgDeleteOptions.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOptions): MsgDeleteOptionsProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions",
      value: MsgDeleteOptions.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOptionsResponse(): MsgDeleteOptionsResponse {
  return {};
}
export const MsgDeleteOptionsResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptionsResponse",
  encode(_: MsgDeleteOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOptionsResponse();
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
  fromPartial(_: Partial<MsgDeleteOptionsResponse>): MsgDeleteOptionsResponse {
    const message = createBaseMsgDeleteOptionsResponse();
    return message;
  },
  fromAmino(_: MsgDeleteOptionsResponseAmino): MsgDeleteOptionsResponse {
    const message = createBaseMsgDeleteOptionsResponse();
    return message;
  },
  toAmino(_: MsgDeleteOptionsResponse): MsgDeleteOptionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOptionsResponseAminoMsg): MsgDeleteOptionsResponse {
    return MsgDeleteOptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOptionsResponseProtoMsg): MsgDeleteOptionsResponse {
    return MsgDeleteOptionsResponse.decode(message.value);
  },
  toProto(message: MsgDeleteOptionsResponse): Uint8Array {
    return MsgDeleteOptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOptionsResponse): MsgDeleteOptionsResponseProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptionsResponse",
      value: MsgDeleteOptionsResponse.encode(message).finish()
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
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn",
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
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {
    id: Long.UZERO
  };
}
export const MsgBurnResponse = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurnResponse",
  encode(message: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
          message.id = reader.uint64() as Long;
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
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    return message;
  },
  toAmino(message: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
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
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};