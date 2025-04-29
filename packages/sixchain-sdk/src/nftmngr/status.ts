//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
export interface Status {
  firstMintComplete: boolean;
}
export interface StatusProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.Status";
  value: Uint8Array;
}
export interface StatusAmino {
  first_mint_complete?: boolean;
}
export interface StatusAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.Status";
  value: StatusAmino;
}
export interface StatusSDKType {
  first_mint_complete: boolean;
}
function createBaseStatus(): Status {
  return {
    firstMintComplete: false
  };
}
export const Status = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.Status",
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstMintComplete === true) {
      writer.uint32(8).bool(message.firstMintComplete);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstMintComplete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Status>): Status {
    const message = createBaseStatus();
    message.firstMintComplete = object.firstMintComplete ?? false;
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    const message = createBaseStatus();
    if (object.first_mint_complete !== undefined && object.first_mint_complete !== null) {
      message.firstMintComplete = object.first_mint_complete;
    }
    return message;
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    obj.first_mint_complete = message.firstMintComplete === false ? undefined : message.firstMintComplete;
    return obj;
  },
  fromAminoMsg(object: StatusAminoMsg): Status {
    return Status.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusProtoMsg): Status {
    return Status.decode(message.value);
  },
  toProto(message: Status): Uint8Array {
    return Status.encode(message).finish();
  },
  toProtoMsg(message: Status): StatusProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.Status",
      value: Status.encode(message).finish()
    };
  }
};