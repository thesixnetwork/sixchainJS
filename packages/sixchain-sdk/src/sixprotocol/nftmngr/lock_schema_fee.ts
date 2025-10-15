//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface LockSchemaFee {
  id: string;
  virtualSchemaCode: string;
  amount: Coin;
  proposer: string;
}
export interface LockSchemaFeeProtoMsg {
  typeUrl: "/sixprotocol.nftmngr.LockSchemaFee";
  value: Uint8Array;
}
/**
 * @name LockSchemaFeeAmino
 * @package sixprotocol.nftmngr
 * @see proto type: sixprotocol.nftmngr.LockSchemaFee
 */
export interface LockSchemaFeeAmino {
  id?: string;
  virtualSchemaCode?: string;
  amount?: CoinAmino;
  proposer?: string;
}
export interface LockSchemaFeeAminoMsg {
  type: "/sixprotocol.nftmngr.LockSchemaFee";
  value: LockSchemaFeeAmino;
}
export interface LockSchemaFeeSDKType {
  id: string;
  virtualSchemaCode: string;
  amount: CoinSDKType;
  proposer: string;
}
function createBaseLockSchemaFee(): LockSchemaFee {
  return {
    id: "",
    virtualSchemaCode: "",
    amount: Coin.fromPartial({}),
    proposer: ""
  };
}
export const LockSchemaFee = {
  typeUrl: "/sixprotocol.nftmngr.LockSchemaFee",
  encode(message: LockSchemaFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualSchemaCode !== "") {
      writer.uint32(18).string(message.virtualSchemaCode);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(34).string(message.proposer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LockSchemaFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockSchemaFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.virtualSchemaCode = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LockSchemaFee>): LockSchemaFee {
    const message = createBaseLockSchemaFee();
    message.id = object.id ?? "";
    message.virtualSchemaCode = object.virtualSchemaCode ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: LockSchemaFeeAmino): LockSchemaFee {
    const message = createBaseLockSchemaFee();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.virtualSchemaCode !== undefined && object.virtualSchemaCode !== null) {
      message.virtualSchemaCode = object.virtualSchemaCode;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message: LockSchemaFee): LockSchemaFeeAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.virtualSchemaCode = message.virtualSchemaCode === "" ? undefined : message.virtualSchemaCode;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    return obj;
  },
  fromAminoMsg(object: LockSchemaFeeAminoMsg): LockSchemaFee {
    return LockSchemaFee.fromAmino(object.value);
  },
  fromProtoMsg(message: LockSchemaFeeProtoMsg): LockSchemaFee {
    return LockSchemaFee.decode(message.value);
  },
  toProto(message: LockSchemaFee): Uint8Array {
    return LockSchemaFee.encode(message).finish();
  },
  toProtoMsg(message: LockSchemaFee): LockSchemaFeeProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftmngr.LockSchemaFee",
      value: LockSchemaFee.encode(message).finish()
    };
  }
};