//@ts-nocheck
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Burn {
  id: Long;
  creator: string;
  token: string;
  amount: Long;
}
export interface BurnProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.Burn";
  value: Uint8Array;
}
export interface BurnAmino {
  id?: string;
  creator?: string;
  token?: string;
  amount?: string;
}
export interface BurnAminoMsg {
  type: "/thesixnetwork.sixprotocol.tokenmngr.Burn";
  value: BurnAmino;
}
export interface BurnSDKType {
  id: Long;
  creator: string;
  token: string;
  amount: Long;
}
function createBaseBurn(): Burn {
  return {
    id: Long.UZERO,
    creator: "",
    token: "",
    amount: Long.UZERO
  };
}
export const Burn = {
  typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.Burn",
  encode(message: Burn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Burn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.amount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Burn>): Burn {
    const message = createBaseBurn();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: BurnAmino): Burn {
    const message = createBaseBurn();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    }
    return message;
  },
  toAmino(message: Burn): BurnAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.token = message.token === "" ? undefined : message.token;
    obj.amount = !message.amount.isZero() ? (message.amount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BurnAminoMsg): Burn {
    return Burn.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnProtoMsg): Burn {
    return Burn.decode(message.value);
  },
  toProto(message: Burn): Uint8Array {
    return Burn.encode(message).finish();
  },
  toProtoMsg(message: Burn): BurnProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.Burn",
      value: Burn.encode(message).finish()
    };
  }
};