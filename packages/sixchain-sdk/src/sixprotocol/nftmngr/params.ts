//@ts-nocheck
import {
  Duration,
  DurationAmino,
  DurationSDKType,
} from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  /** Duration of the voting period. */
  votingPeriod?: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/sixprotocol.nftmngr.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "sixprotocol/x/nftmngr/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  voting_period?: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    votingPeriod: undefined,
  };
}
export const Params = {
  typeUrl: "/sixprotocol.nftmngr.Params",
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromPartial(object.votingPeriod)
        : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.voting_period = message.votingPeriod
      ? Duration.toAmino(message.votingPeriod)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sixprotocol/x/nftmngr/Params",
      value: Params.toAmino(message),
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftmngr.Params",
      value: Params.encode(message).finish(),
    };
  },
};
