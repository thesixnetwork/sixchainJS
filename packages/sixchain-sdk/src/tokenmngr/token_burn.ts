//@ts-nocheck
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TokenBurn {
  token: string;
  amount: Long;
}
export interface TokenBurnProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn";
  value: Uint8Array;
}
export interface TokenBurnAmino {
  token?: string;
  amount?: string;
}
export interface TokenBurnAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn";
  value: TokenBurnAmino;
}
export interface TokenBurnSDKType {
  token: string;
  amount: Long;
}
function createBaseTokenBurn(): TokenBurn {
  return {
    token: "",
    amount: Long.UZERO
  };
}
export const TokenBurn = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.TokenBurn",
  encode(message: TokenBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
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
  fromPartial(object: Partial<TokenBurn>): TokenBurn {
    const message = createBaseTokenBurn();
    message.token = object.token ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: TokenBurnAmino): TokenBurn {
    const message = createBaseTokenBurn();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    }
    return message;
  },
  toAmino(message: TokenBurn): TokenBurnAmino {
    const obj: any = {};
    obj.token = message.token === "" ? undefined : message.token;
    obj.amount = !message.amount.isZero() ? (message.amount?.toString)() : undefined;
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