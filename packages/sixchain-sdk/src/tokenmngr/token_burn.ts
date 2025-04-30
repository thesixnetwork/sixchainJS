//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TokenBurn {
  amount: Coin;
}
export interface TokenBurnProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn";
  value: Uint8Array;
}
export interface TokenBurnAmino {
  amount?: CoinAmino;
}
export interface TokenBurnAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn";
  value: TokenBurnAmino;
}
export interface TokenBurnSDKType {
  amount: CoinSDKType;
}
export interface TokenBurnV202 {
  token: string;
  amount: Long;
}
export interface TokenBurnV202ProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurnV202";
  value: Uint8Array;
}
export interface TokenBurnV202Amino {
  token?: string;
  amount?: string;
}
export interface TokenBurnV202AminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurnV202";
  value: TokenBurnV202Amino;
}
export interface TokenBurnV202SDKType {
  token: string;
  amount: Long;
}
function createBaseTokenBurn(): TokenBurn {
  return {
    amount: Coin.fromPartial({})
  };
}
export const TokenBurn = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn",
  encode(message: TokenBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenBurn();
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
  fromPartial(object: Partial<TokenBurn>): TokenBurn {
    const message = createBaseTokenBurn();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: TokenBurnAmino): TokenBurn {
    const message = createBaseTokenBurn();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: TokenBurn): TokenBurnAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenBurnAminoMsg): TokenBurn {
    return TokenBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenBurnProtoMsg): TokenBurn {
    return TokenBurn.decode(message.value);
  },
  toProto(message: TokenBurn): Uint8Array {
    return TokenBurn.encode(message).finish();
  },
  toProtoMsg(message: TokenBurn): TokenBurnProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn",
      value: TokenBurn.encode(message).finish()
    };
  }
};
function createBaseTokenBurnV202(): TokenBurnV202 {
  return {
    token: "",
    amount: Long.UZERO
  };
}
export const TokenBurnV202 = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurnV202",
  encode(message: TokenBurnV202, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenBurnV202 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenBurnV202();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.amount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenBurnV202>): TokenBurnV202 {
    const message = createBaseTokenBurnV202();
    message.token = object.token ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: TokenBurnV202Amino): TokenBurnV202 {
    const message = createBaseTokenBurnV202();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    }
    return message;
  },
  toAmino(message: TokenBurnV202): TokenBurnV202Amino {
    const obj: any = {};
    obj.token = message.token === "" ? undefined : message.token;
    obj.amount = !message.amount.isZero() ? (message.amount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenBurnV202AminoMsg): TokenBurnV202 {
    return TokenBurnV202.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenBurnV202ProtoMsg): TokenBurnV202 {
    return TokenBurnV202.decode(message.value);
  },
  toProto(message: TokenBurnV202): Uint8Array {
    return TokenBurnV202.encode(message).finish();
  },
  toProtoMsg(message: TokenBurnV202): TokenBurnV202ProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurnV202",
      value: TokenBurnV202.encode(message).finish()
    };
  }
};