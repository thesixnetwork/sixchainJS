//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
export interface NFTFeeBalance_FeeBalancesEntry {
  key: number;
  value: string;
}
export interface NFTFeeBalance_FeeBalancesEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface NFTFeeBalance_FeeBalancesEntryAmino {
  key?: number;
  value?: string;
}
export interface NFTFeeBalance_FeeBalancesEntryAminoMsg {
  type: string;
  value: NFTFeeBalance_FeeBalancesEntryAmino;
}
export interface NFTFeeBalance_FeeBalancesEntrySDKType {
  key: number;
  value: string;
}
export interface NFTFeeBalance {
  feeBalances: {
    [key: number]: string;
  };
}
export interface NFTFeeBalanceProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.NFTFeeBalance";
  value: Uint8Array;
}
export interface NFTFeeBalanceAmino {
  fee_balances?: {
    [key: number]: string;
  };
}
export interface NFTFeeBalanceAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.NFTFeeBalance";
  value: NFTFeeBalanceAmino;
}
export interface NFTFeeBalanceSDKType {
  fee_balances: {
    [key: number]: string;
  };
}
function createBaseNFTFeeBalance_FeeBalancesEntry(): NFTFeeBalance_FeeBalancesEntry {
  return {
    key: 0,
    value: ""
  };
}
export const NFTFeeBalance_FeeBalancesEntry = {
  encode(message: NFTFeeBalance_FeeBalancesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTFeeBalance_FeeBalancesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTFeeBalance_FeeBalancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTFeeBalance_FeeBalancesEntry>): NFTFeeBalance_FeeBalancesEntry {
    const message = createBaseNFTFeeBalance_FeeBalancesEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: NFTFeeBalance_FeeBalancesEntryAmino): NFTFeeBalance_FeeBalancesEntry {
    const message = createBaseNFTFeeBalance_FeeBalancesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: NFTFeeBalance_FeeBalancesEntry): NFTFeeBalance_FeeBalancesEntryAmino {
    const obj: any = {};
    obj.key = message.key === 0 ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: NFTFeeBalance_FeeBalancesEntryAminoMsg): NFTFeeBalance_FeeBalancesEntry {
    return NFTFeeBalance_FeeBalancesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTFeeBalance_FeeBalancesEntryProtoMsg): NFTFeeBalance_FeeBalancesEntry {
    return NFTFeeBalance_FeeBalancesEntry.decode(message.value);
  },
  toProto(message: NFTFeeBalance_FeeBalancesEntry): Uint8Array {
    return NFTFeeBalance_FeeBalancesEntry.encode(message).finish();
  }
};
function createBaseNFTFeeBalance(): NFTFeeBalance {
  return {
    feeBalances: {}
  };
}
export const NFTFeeBalance = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.NFTFeeBalance",
  encode(message: NFTFeeBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.feeBalances).forEach(([key, value]) => {
      NFTFeeBalance_FeeBalancesEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTFeeBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTFeeBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = NFTFeeBalance_FeeBalancesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.feeBalances[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTFeeBalance>): NFTFeeBalance {
    const message = createBaseNFTFeeBalance();
    message.feeBalances = Object.entries(object.feeBalances ?? {}).reduce<{
      [key: number]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: NFTFeeBalanceAmino): NFTFeeBalance {
    const message = createBaseNFTFeeBalance();
    message.feeBalances = Object.entries(object.fee_balances ?? {}).reduce<{
      [key: number]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: NFTFeeBalance): NFTFeeBalanceAmino {
    const obj: any = {};
    obj.fee_balances = {};
    if (message.feeBalances) {
      Object.entries(message.feeBalances).forEach(([k, v]) => {
        obj.fee_balances[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: NFTFeeBalanceAminoMsg): NFTFeeBalance {
    return NFTFeeBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTFeeBalanceProtoMsg): NFTFeeBalance {
    return NFTFeeBalance.decode(message.value);
  },
  toProto(message: NFTFeeBalance): Uint8Array {
    return NFTFeeBalance.encode(message).finish();
  },
  toProtoMsg(message: NFTFeeBalance): NFTFeeBalanceProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.NFTFeeBalance",
      value: NFTFeeBalance.encode(message).finish()
    };
  }
};