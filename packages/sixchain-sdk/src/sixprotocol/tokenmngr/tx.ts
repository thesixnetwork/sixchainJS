//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sixprotocol/x/tokenmngr/MsgUpdateParams";
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
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateToken {
  creator: string;
  name: string;
  maxSupply: Coin;
  denomMetaData: string;
  mintee: string;
}
export interface MsgCreateTokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateToken";
  value: Uint8Array;
}
export interface MsgCreateTokenAmino {
  creator?: string;
  name?: string;
  maxSupply?: CoinAmino;
  denomMetaData?: string;
  mintee?: string;
}
export interface MsgCreateTokenAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgCreateToken";
  value: MsgCreateTokenAmino;
}
export interface MsgCreateTokenSDKType {
  creator: string;
  name: string;
  maxSupply: CoinSDKType;
  denomMetaData: string;
  mintee: string;
}
export interface MsgCreateTokenResponse {}
export interface MsgCreateTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateTokenResponse";
  value: Uint8Array;
}
export interface MsgCreateTokenResponseAmino {}
export interface MsgCreateTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgCreateTokenResponse";
  value: MsgCreateTokenResponseAmino;
}
export interface MsgCreateTokenResponseSDKType {}
export interface MsgUpdateToken {
  creator: string;
  name: string;
  maxSupply: Coin;
  mintee: string;
}
export interface MsgUpdateTokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateToken";
  value: Uint8Array;
}
export interface MsgUpdateTokenAmino {
  creator?: string;
  name?: string;
  maxSupply?: CoinAmino;
  mintee?: string;
}
export interface MsgUpdateTokenAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateToken";
  value: MsgUpdateTokenAmino;
}
export interface MsgUpdateTokenSDKType {
  creator: string;
  name: string;
  maxSupply: CoinSDKType;
  mintee: string;
}
export interface MsgUpdateTokenResponse {}
export interface MsgUpdateTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateTokenResponse";
  value: Uint8Array;
}
export interface MsgUpdateTokenResponseAmino {}
export interface MsgUpdateTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateTokenResponse";
  value: MsgUpdateTokenResponseAmino;
}
export interface MsgUpdateTokenResponseSDKType {}
export interface MsgDeleteToken {
  creator: string;
  name: string;
}
export interface MsgDeleteTokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteToken";
  value: Uint8Array;
}
export interface MsgDeleteTokenAmino {
  creator?: string;
  name?: string;
}
export interface MsgDeleteTokenAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgDeleteToken";
  value: MsgDeleteTokenAmino;
}
export interface MsgDeleteTokenSDKType {
  creator: string;
  name: string;
}
export interface MsgDeleteTokenResponse {}
export interface MsgDeleteTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteTokenResponse";
  value: Uint8Array;
}
export interface MsgDeleteTokenResponseAmino {}
export interface MsgDeleteTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgDeleteTokenResponse";
  value: MsgDeleteTokenResponseAmino;
}
export interface MsgDeleteTokenResponseSDKType {}
export interface MsgCreateMintperm {
  creator: string;
  token: string;
  address: string;
}
export interface MsgCreateMintpermProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintperm";
  value: Uint8Array;
}
export interface MsgCreateMintpermAmino {
  creator?: string;
  token?: string;
  address?: string;
}
export interface MsgCreateMintpermAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgCreateMintperm";
  value: MsgCreateMintpermAmino;
}
export interface MsgCreateMintpermSDKType {
  creator: string;
  token: string;
  address: string;
}
export interface MsgCreateMintpermResponse {}
export interface MsgCreateMintpermResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintpermResponse";
  value: Uint8Array;
}
export interface MsgCreateMintpermResponseAmino {}
export interface MsgCreateMintpermResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgCreateMintpermResponse";
  value: MsgCreateMintpermResponseAmino;
}
export interface MsgCreateMintpermResponseSDKType {}
export interface MsgUpdateMintperm {
  creator: string;
  token: string;
  address: string;
}
export interface MsgUpdateMintpermProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintperm";
  value: Uint8Array;
}
export interface MsgUpdateMintpermAmino {
  creator?: string;
  token?: string;
  address?: string;
}
export interface MsgUpdateMintpermAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateMintperm";
  value: MsgUpdateMintpermAmino;
}
export interface MsgUpdateMintpermSDKType {
  creator: string;
  token: string;
  address: string;
}
export interface MsgUpdateMintpermResponse {}
export interface MsgUpdateMintpermResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintpermResponse";
  value: Uint8Array;
}
export interface MsgUpdateMintpermResponseAmino {}
export interface MsgUpdateMintpermResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateMintpermResponse";
  value: MsgUpdateMintpermResponseAmino;
}
export interface MsgUpdateMintpermResponseSDKType {}
export interface MsgDeleteMintperm {
  creator: string;
  token: string;
  address: string;
}
export interface MsgDeleteMintpermProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintperm";
  value: Uint8Array;
}
export interface MsgDeleteMintpermAmino {
  creator?: string;
  token?: string;
  address?: string;
}
export interface MsgDeleteMintpermAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgDeleteMintperm";
  value: MsgDeleteMintpermAmino;
}
export interface MsgDeleteMintpermSDKType {
  creator: string;
  token: string;
  address: string;
}
export interface MsgDeleteMintpermResponse {}
export interface MsgDeleteMintpermResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintpermResponse";
  value: Uint8Array;
}
export interface MsgDeleteMintpermResponseAmino {}
export interface MsgDeleteMintpermResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgDeleteMintpermResponse";
  value: MsgDeleteMintpermResponseAmino;
}
export interface MsgDeleteMintpermResponseSDKType {}
export interface MsgCreateOptions {
  creator: string;
  defaultMintee: string;
}
export interface MsgCreateOptionsProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptions";
  value: Uint8Array;
}
export interface MsgCreateOptionsAmino {
  creator?: string;
  defaultMintee?: string;
}
export interface MsgCreateOptionsAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgCreateOptions";
  value: MsgCreateOptionsAmino;
}
export interface MsgCreateOptionsSDKType {
  creator: string;
  defaultMintee: string;
}
export interface MsgCreateOptionsResponse {}
export interface MsgCreateOptionsResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptionsResponse";
  value: Uint8Array;
}
export interface MsgCreateOptionsResponseAmino {}
export interface MsgCreateOptionsResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgCreateOptionsResponse";
  value: MsgCreateOptionsResponseAmino;
}
export interface MsgCreateOptionsResponseSDKType {}
export interface MsgUpdateOptions {
  creator: string;
  defaultMintee: string;
}
export interface MsgUpdateOptionsProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptions";
  value: Uint8Array;
}
export interface MsgUpdateOptionsAmino {
  creator?: string;
  defaultMintee?: string;
}
export interface MsgUpdateOptionsAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateOptions";
  value: MsgUpdateOptionsAmino;
}
export interface MsgUpdateOptionsSDKType {
  creator: string;
  defaultMintee: string;
}
export interface MsgUpdateOptionsResponse {}
export interface MsgUpdateOptionsResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptionsResponse";
  value: Uint8Array;
}
export interface MsgUpdateOptionsResponseAmino {}
export interface MsgUpdateOptionsResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUpdateOptionsResponse";
  value: MsgUpdateOptionsResponseAmino;
}
export interface MsgUpdateOptionsResponseSDKType {}
export interface MsgDeleteOptions {
  creator: string;
}
export interface MsgDeleteOptionsProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptions";
  value: Uint8Array;
}
export interface MsgDeleteOptionsAmino {
  creator?: string;
}
export interface MsgDeleteOptionsAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgDeleteOptions";
  value: MsgDeleteOptionsAmino;
}
export interface MsgDeleteOptionsSDKType {
  creator: string;
}
export interface MsgDeleteOptionsResponse {}
export interface MsgDeleteOptionsResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptionsResponse";
  value: Uint8Array;
}
export interface MsgDeleteOptionsResponseAmino {}
export interface MsgDeleteOptionsResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgDeleteOptionsResponse";
  value: MsgDeleteOptionsResponseAmino;
}
export interface MsgDeleteOptionsResponseSDKType {}
export interface MsgBurn {
  creator: string;
  amount: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgBurn";
  value: Uint8Array;
}
export interface MsgBurnAmino {
  creator?: string;
  amount?: CoinAmino;
}
export interface MsgBurnAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgBurn";
  value: MsgBurnAmino;
}
export interface MsgBurnSDKType {
  creator: string;
  amount: CoinSDKType;
}
export interface MsgBurnResponse {
  id: Long;
}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseAmino {
  id?: string;
}
export interface MsgBurnResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
  id: Long;
}
export interface MsgWrapToken {
  creator: string;
  amount: Coin;
  receiver: string;
}
export interface MsgWrapTokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgWrapToken";
  value: Uint8Array;
}
export interface MsgWrapTokenAmino {
  creator?: string;
  amount?: CoinAmino;
  receiver?: string;
}
export interface MsgWrapTokenAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgWrapToken";
  value: MsgWrapTokenAmino;
}
export interface MsgWrapTokenSDKType {
  creator: string;
  amount: CoinSDKType;
  receiver: string;
}
export interface MsgWrapTokenResponse {
  amount: Coin;
}
export interface MsgWrapTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgWrapTokenResponse";
  value: Uint8Array;
}
export interface MsgWrapTokenResponseAmino {
  amount?: CoinAmino;
}
export interface MsgWrapTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgWrapTokenResponse";
  value: MsgWrapTokenResponseAmino;
}
export interface MsgWrapTokenResponseSDKType {
  amount: CoinSDKType;
}
export interface MsgUnwrapToken {
  creator: string;
  amount: Coin;
  receiver: string;
}
export interface MsgUnwrapTokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapToken";
  value: Uint8Array;
}
export interface MsgUnwrapTokenAmino {
  creator?: string;
  amount?: CoinAmino;
  receiver?: string;
}
export interface MsgUnwrapTokenAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUnwrapToken";
  value: MsgUnwrapTokenAmino;
}
export interface MsgUnwrapTokenSDKType {
  creator: string;
  amount: CoinSDKType;
  receiver: string;
}
export interface MsgUnwrapTokenResponse {
  amount: Coin;
}
export interface MsgUnwrapTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapTokenResponse";
  value: Uint8Array;
}
export interface MsgUnwrapTokenResponseAmino {
  amount?: CoinAmino;
}
export interface MsgUnwrapTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgUnwrapTokenResponse";
  value: MsgUnwrapTokenResponseAmino;
}
export interface MsgUnwrapTokenResponseSDKType {
  amount: CoinSDKType;
}
export interface MsgSendWrapToken {
  creator: string;
  ethAddress: string;
  amount: Coin;
}
export interface MsgSendWrapTokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapToken";
  value: Uint8Array;
}
export interface MsgSendWrapTokenAmino {
  creator?: string;
  ethAddress?: string;
  amount?: CoinAmino;
}
export interface MsgSendWrapTokenAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgSendWrapToken";
  value: MsgSendWrapTokenAmino;
}
export interface MsgSendWrapTokenSDKType {
  creator: string;
  ethAddress: string;
  amount: CoinSDKType;
}
export interface MsgSendWrapTokenResponse {
  receiver: string;
  amount: string;
}
export interface MsgSendWrapTokenResponseProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapTokenResponse";
  value: Uint8Array;
}
export interface MsgSendWrapTokenResponseAmino {
  receiver?: string;
  amount?: string;
}
export interface MsgSendWrapTokenResponseAminoMsg {
  type: "/sixprotocol.tokenmngr.MsgSendWrapTokenResponse";
  value: MsgSendWrapTokenResponseAmino;
}
export interface MsgSendWrapTokenResponseSDKType {
  receiver: string;
  amount: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParams",
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
      type: "sixprotocol/x/tokenmngr/MsgUpdateParams",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParamsResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateToken(): MsgCreateToken {
  return {
    creator: "",
    name: "",
    maxSupply: Coin.fromPartial({}),
    denomMetaData: "",
    mintee: ""
  };
}
export const MsgCreateToken = {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateToken",
  encode(message: MsgCreateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(26).fork()).ldelim();
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
          message.maxSupply = Coin.decode(reader, reader.uint32());
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
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
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
      message.maxSupply = Coin.fromAmino(object.maxSupply);
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
    obj.maxSupply = message.maxSupply ? Coin.toAmino(message.maxSupply) : undefined;
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
      typeUrl: "/sixprotocol.tokenmngr.MsgCreateToken",
      value: MsgCreateToken.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTokenResponse(): MsgCreateTokenResponse {
  return {};
}
export const MsgCreateTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateTokenResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgCreateTokenResponse",
      value: MsgCreateTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateToken(): MsgUpdateToken {
  return {
    creator: "",
    name: "",
    maxSupply: Coin.fromPartial({}),
    mintee: ""
  };
}
export const MsgUpdateToken = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateToken",
  encode(message: MsgUpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(34).fork()).ldelim();
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
          message.maxSupply = Coin.decode(reader, reader.uint32());
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
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
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
      message.maxSupply = Coin.fromAmino(object.maxSupply);
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
    obj.maxSupply = message.maxSupply ? Coin.toAmino(message.maxSupply) : undefined;
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateToken",
      value: MsgUpdateToken.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTokenResponse(): MsgUpdateTokenResponse {
  return {};
}
export const MsgUpdateTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateTokenResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateTokenResponse",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteToken",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgDeleteToken",
      value: MsgDeleteToken.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTokenResponse(): MsgDeleteTokenResponse {
  return {};
}
export const MsgDeleteTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteTokenResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgDeleteTokenResponse",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintperm",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintperm",
      value: MsgCreateMintperm.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMintpermResponse(): MsgCreateMintpermResponse {
  return {};
}
export const MsgCreateMintpermResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintpermResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintpermResponse",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintperm",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintperm",
      value: MsgUpdateMintperm.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMintpermResponse(): MsgUpdateMintpermResponse {
  return {};
}
export const MsgUpdateMintpermResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintpermResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintpermResponse",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintperm",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintperm",
      value: MsgDeleteMintperm.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteMintpermResponse(): MsgDeleteMintpermResponse {
  return {};
}
export const MsgDeleteMintpermResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintpermResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintpermResponse",
      value: MsgDeleteMintpermResponse.encode(message).finish()
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
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptions",
  encode(message: MsgCreateOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defaultMintee !== "") {
      writer.uint32(26).string(message.defaultMintee);
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
        case 3:
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
      typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptions",
      value: MsgCreateOptions.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOptionsResponse(): MsgCreateOptionsResponse {
  return {};
}
export const MsgCreateOptionsResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptionsResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptionsResponse",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptions",
  encode(message: MsgUpdateOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defaultMintee !== "") {
      writer.uint32(26).string(message.defaultMintee);
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
        case 3:
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptions",
      value: MsgUpdateOptions.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOptionsResponse(): MsgUpdateOptionsResponse {
  return {};
}
export const MsgUpdateOptionsResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptionsResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptionsResponse",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptions",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptions",
      value: MsgDeleteOptions.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOptionsResponse(): MsgDeleteOptionsResponse {
  return {};
}
export const MsgDeleteOptionsResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptionsResponse",
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
      typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptionsResponse",
      value: MsgDeleteOptionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    creator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBurn = {
  typeUrl: "/sixprotocol.tokenmngr.MsgBurn",
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
          message.amount = Coin.decode(reader, reader.uint32());
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
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
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
      typeUrl: "/sixprotocol.tokenmngr.MsgBurn",
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
  typeUrl: "/sixprotocol.tokenmngr.MsgBurnResponse",
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
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
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
      typeUrl: "/sixprotocol.tokenmngr.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWrapToken(): MsgWrapToken {
  return {
    creator: "",
    amount: Coin.fromPartial({}),
    receiver: ""
  };
}
export const MsgWrapToken = {
  typeUrl: "/sixprotocol.tokenmngr.MsgWrapToken",
  encode(message: MsgWrapToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWrapToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrapToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWrapToken>): MsgWrapToken {
    const message = createBaseMsgWrapToken();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgWrapTokenAmino): MsgWrapToken {
    const message = createBaseMsgWrapToken();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgWrapToken): MsgWrapTokenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgWrapTokenAminoMsg): MsgWrapToken {
    return MsgWrapToken.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrapTokenProtoMsg): MsgWrapToken {
    return MsgWrapToken.decode(message.value);
  },
  toProto(message: MsgWrapToken): Uint8Array {
    return MsgWrapToken.encode(message).finish();
  },
  toProtoMsg(message: MsgWrapToken): MsgWrapTokenProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.MsgWrapToken",
      value: MsgWrapToken.encode(message).finish()
    };
  }
};
function createBaseMsgWrapTokenResponse(): MsgWrapTokenResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgWrapTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgWrapTokenResponse",
  encode(message: MsgWrapTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWrapTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrapTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWrapTokenResponse>): MsgWrapTokenResponse {
    const message = createBaseMsgWrapTokenResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgWrapTokenResponseAmino): MsgWrapTokenResponse {
    const message = createBaseMsgWrapTokenResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgWrapTokenResponse): MsgWrapTokenResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrapTokenResponseAminoMsg): MsgWrapTokenResponse {
    return MsgWrapTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrapTokenResponseProtoMsg): MsgWrapTokenResponse {
    return MsgWrapTokenResponse.decode(message.value);
  },
  toProto(message: MsgWrapTokenResponse): Uint8Array {
    return MsgWrapTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrapTokenResponse): MsgWrapTokenResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.MsgWrapTokenResponse",
      value: MsgWrapTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnwrapToken(): MsgUnwrapToken {
  return {
    creator: "",
    amount: Coin.fromPartial({}),
    receiver: ""
  };
}
export const MsgUnwrapToken = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapToken",
  encode(message: MsgUnwrapToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnwrapToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnwrapToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnwrapToken>): MsgUnwrapToken {
    const message = createBaseMsgUnwrapToken();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgUnwrapTokenAmino): MsgUnwrapToken {
    const message = createBaseMsgUnwrapToken();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgUnwrapToken): MsgUnwrapTokenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgUnwrapTokenAminoMsg): MsgUnwrapToken {
    return MsgUnwrapToken.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnwrapTokenProtoMsg): MsgUnwrapToken {
    return MsgUnwrapToken.decode(message.value);
  },
  toProto(message: MsgUnwrapToken): Uint8Array {
    return MsgUnwrapToken.encode(message).finish();
  },
  toProtoMsg(message: MsgUnwrapToken): MsgUnwrapTokenProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapToken",
      value: MsgUnwrapToken.encode(message).finish()
    };
  }
};
function createBaseMsgUnwrapTokenResponse(): MsgUnwrapTokenResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgUnwrapTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapTokenResponse",
  encode(message: MsgUnwrapTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnwrapTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnwrapTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnwrapTokenResponse>): MsgUnwrapTokenResponse {
    const message = createBaseMsgUnwrapTokenResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUnwrapTokenResponseAmino): MsgUnwrapTokenResponse {
    const message = createBaseMsgUnwrapTokenResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUnwrapTokenResponse): MsgUnwrapTokenResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnwrapTokenResponseAminoMsg): MsgUnwrapTokenResponse {
    return MsgUnwrapTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnwrapTokenResponseProtoMsg): MsgUnwrapTokenResponse {
    return MsgUnwrapTokenResponse.decode(message.value);
  },
  toProto(message: MsgUnwrapTokenResponse): Uint8Array {
    return MsgUnwrapTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnwrapTokenResponse): MsgUnwrapTokenResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapTokenResponse",
      value: MsgUnwrapTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendWrapToken(): MsgSendWrapToken {
  return {
    creator: "",
    ethAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgSendWrapToken = {
  typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapToken",
  encode(message: MsgSendWrapToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendWrapToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendWrapToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSendWrapToken>): MsgSendWrapToken {
    const message = createBaseMsgSendWrapToken();
    message.creator = object.creator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgSendWrapTokenAmino): MsgSendWrapToken {
    const message = createBaseMsgSendWrapToken();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.ethAddress !== undefined && object.ethAddress !== null) {
      message.ethAddress = object.ethAddress;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgSendWrapToken): MsgSendWrapTokenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.ethAddress = message.ethAddress === "" ? undefined : message.ethAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendWrapTokenAminoMsg): MsgSendWrapToken {
    return MsgSendWrapToken.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendWrapTokenProtoMsg): MsgSendWrapToken {
    return MsgSendWrapToken.decode(message.value);
  },
  toProto(message: MsgSendWrapToken): Uint8Array {
    return MsgSendWrapToken.encode(message).finish();
  },
  toProtoMsg(message: MsgSendWrapToken): MsgSendWrapTokenProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapToken",
      value: MsgSendWrapToken.encode(message).finish()
    };
  }
};
function createBaseMsgSendWrapTokenResponse(): MsgSendWrapTokenResponse {
  return {
    receiver: "",
    amount: ""
  };
}
export const MsgSendWrapTokenResponse = {
  typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapTokenResponse",
  encode(message: MsgSendWrapTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendWrapTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendWrapTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSendWrapTokenResponse>): MsgSendWrapTokenResponse {
    const message = createBaseMsgSendWrapTokenResponse();
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgSendWrapTokenResponseAmino): MsgSendWrapTokenResponse {
    const message = createBaseMsgSendWrapTokenResponse();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgSendWrapTokenResponse): MsgSendWrapTokenResponseAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgSendWrapTokenResponseAminoMsg): MsgSendWrapTokenResponse {
    return MsgSendWrapTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendWrapTokenResponseProtoMsg): MsgSendWrapTokenResponse {
    return MsgSendWrapTokenResponse.decode(message.value);
  },
  toProto(message: MsgSendWrapTokenResponse): Uint8Array {
    return MsgSendWrapTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendWrapTokenResponse): MsgSendWrapTokenResponseProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapTokenResponse",
      value: MsgSendWrapTokenResponse.encode(message).finish()
    };
  }
};