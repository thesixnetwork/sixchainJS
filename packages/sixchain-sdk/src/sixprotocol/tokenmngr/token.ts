//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface Token {
  $typeUrl?: "/sixprotocol.tokenmngr.Token";
  name: string;
  base: string;
  maxSupply: Coin;
  mintee: string;
  creator: string;
}
export interface TokenProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.Token";
  value: Uint8Array;
}
export interface TokenAmino {
  name?: string;
  base?: string;
  maxSupply: CoinAmino;
  mintee?: string;
  creator?: string;
}
export interface TokenAminoMsg {
  type: "/sixprotocol.tokenmngr.Token";
  value: TokenAmino;
}
export interface TokenSDKType {
  $typeUrl?: "/sixprotocol.tokenmngr.Token";
  name: string;
  base: string;
  maxSupply: CoinSDKType;
  mintee: string;
  creator: string;
}
function createBaseToken(): Token {
  return {
    $typeUrl: "/sixprotocol.tokenmngr.Token",
    name: "",
    base: "",
    maxSupply: Coin.fromPartial({}),
    mintee: "",
    creator: "",
  };
}
export const Token = {
  typeUrl: "/sixprotocol.tokenmngr.Token",
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintee !== "") {
      writer.uint32(34).string(message.mintee);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.maxSupply = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.mintee = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.name = object.name ?? "";
    message.base = object.base ?? "";
    message.maxSupply =
      object.maxSupply !== undefined && object.maxSupply !== null
        ? Coin.fromPartial(object.maxSupply)
        : undefined;
    message.mintee = object.mintee ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Coin.fromAmino(object.maxSupply);
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = object.mintee;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.base = message.base === "" ? undefined : message.base;
    obj.maxSupply = message.maxSupply
      ? Coin.toAmino(message.maxSupply)
      : Coin.toAmino(Coin.fromPartial({}));
    obj.mintee = message.mintee === "" ? undefined : message.mintee;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.Token",
      value: Token.encode(message).finish(),
    };
  },
};
