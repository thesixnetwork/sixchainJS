//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
export interface OnOffSwitch {
  active: boolean;
}
export interface OnOffSwitchProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.OnOffSwitch";
  value: Uint8Array;
}
export interface OnOffSwitchAmino {
  active?: boolean;
}
export interface OnOffSwitchAminoMsg {
  type: "/thesixnetwork.sixnft.nftmngr.OnOffSwitch";
  value: OnOffSwitchAmino;
}
export interface OnOffSwitchSDKType {
  active: boolean;
}
function createBaseOnOffSwitch(): OnOffSwitch {
  return {
    active: false
  };
}
export const OnOffSwitch = {
  typeUrl: "/thesixnetwork.sixnft.nftmngr.OnOffSwitch",
  encode(message: OnOffSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OnOffSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnOffSwitch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OnOffSwitch>): OnOffSwitch {
    const message = createBaseOnOffSwitch();
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: OnOffSwitchAmino): OnOffSwitch {
    const message = createBaseOnOffSwitch();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: OnOffSwitch): OnOffSwitchAmino {
    const obj: any = {};
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: OnOffSwitchAminoMsg): OnOffSwitch {
    return OnOffSwitch.fromAmino(object.value);
  },
  fromProtoMsg(message: OnOffSwitchProtoMsg): OnOffSwitch {
    return OnOffSwitch.decode(message.value);
  },
  toProto(message: OnOffSwitch): Uint8Array {
    return OnOffSwitch.encode(message).finish();
  },
  toProtoMsg(message: OnOffSwitch): OnOffSwitchProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftmngr.OnOffSwitch",
      value: OnOffSwitch.encode(message).finish()
    };
  }
};