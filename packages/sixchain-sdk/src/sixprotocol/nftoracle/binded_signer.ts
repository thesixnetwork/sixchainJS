//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BindedSignerParams {
  actorAddress: string;
  expiredAt: Date;
}
export interface BindedSignerParamsProtoMsg {
  typeUrl: "/sixprotocol.nftoracle.BindedSignerParams";
  value: Uint8Array;
}
export interface BindedSignerParamsAmino {
  actor_address?: string;
  expired_at?: string;
}
export interface BindedSignerParamsAminoMsg {
  type: "/sixprotocol.nftoracle.BindedSignerParams";
  value: BindedSignerParamsAmino;
}
export interface BindedSignerParamsSDKType {
  actor_address: string;
  expired_at: Date;
}
export interface BindedSigner {
  ownerAddress: string;
  signers: BindedSignerParams[];
  actorCount: Long;
}
export interface BindedSignerProtoMsg {
  typeUrl: "/sixprotocol.nftoracle.BindedSigner";
  value: Uint8Array;
}
export interface BindedSignerAmino {
  ownerAddress?: string;
  signers?: BindedSignerParamsAmino[];
  actorCount?: string;
}
export interface BindedSignerAminoMsg {
  type: "/sixprotocol.nftoracle.BindedSigner";
  value: BindedSignerAmino;
}
export interface BindedSignerSDKType {
  ownerAddress: string;
  signers: BindedSignerParamsSDKType[];
  actorCount: Long;
}
function createBaseBindedSignerParams(): BindedSignerParams {
  return {
    actorAddress: "",
    expiredAt: new Date(),
  };
}
export const BindedSignerParams = {
  typeUrl: "/sixprotocol.nftoracle.BindedSignerParams",
  encode(
    message: BindedSignerParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorAddress !== "") {
      writer.uint32(10).string(message.actorAddress);
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiredAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BindedSignerParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindedSignerParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorAddress = reader.string();
          break;
        case 2:
          message.expiredAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BindedSignerParams>): BindedSignerParams {
    const message = createBaseBindedSignerParams();
    message.actorAddress = object.actorAddress ?? "";
    message.expiredAt = object.expiredAt ?? undefined;
    return message;
  },
  fromAmino(object: BindedSignerParamsAmino): BindedSignerParams {
    const message = createBaseBindedSignerParams();
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actorAddress = object.actor_address;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expiredAt = fromTimestamp(Timestamp.fromAmino(object.expired_at));
    }
    return message;
  },
  toAmino(message: BindedSignerParams): BindedSignerParamsAmino {
    const obj: any = {};
    obj.actor_address =
      message.actorAddress === "" ? undefined : message.actorAddress;
    obj.expired_at = message.expiredAt
      ? Timestamp.toAmino(toTimestamp(message.expiredAt))
      : undefined;
    return obj;
  },
  fromAminoMsg(object: BindedSignerParamsAminoMsg): BindedSignerParams {
    return BindedSignerParams.fromAmino(object.value);
  },
  fromProtoMsg(message: BindedSignerParamsProtoMsg): BindedSignerParams {
    return BindedSignerParams.decode(message.value);
  },
  toProto(message: BindedSignerParams): Uint8Array {
    return BindedSignerParams.encode(message).finish();
  },
  toProtoMsg(message: BindedSignerParams): BindedSignerParamsProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftoracle.BindedSignerParams",
      value: BindedSignerParams.encode(message).finish(),
    };
  },
};
function createBaseBindedSigner(): BindedSigner {
  return {
    ownerAddress: "",
    signers: [],
    actorCount: Long.UZERO,
  };
}
export const BindedSigner = {
  typeUrl: "/sixprotocol.nftoracle.BindedSigner",
  encode(
    message: BindedSigner,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    for (const v of message.signers) {
      BindedSignerParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.actorCount.isZero()) {
      writer.uint32(24).uint64(message.actorCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BindedSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBindedSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.signers.push(
            BindedSignerParams.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.actorCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BindedSigner>): BindedSigner {
    const message = createBaseBindedSigner();
    message.ownerAddress = object.ownerAddress ?? "";
    message.signers =
      object.signers?.map((e) => BindedSignerParams.fromPartial(e)) || [];
    message.actorCount =
      object.actorCount !== undefined && object.actorCount !== null
        ? Long.fromValue(object.actorCount)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: BindedSignerAmino): BindedSigner {
    const message = createBaseBindedSigner();
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    message.signers =
      object.signers?.map((e) => BindedSignerParams.fromAmino(e)) || [];
    if (object.actorCount !== undefined && object.actorCount !== null) {
      message.actorCount = Long.fromString(object.actorCount);
    }
    return message;
  },
  toAmino(message: BindedSigner): BindedSignerAmino {
    const obj: any = {};
    obj.ownerAddress =
      message.ownerAddress === "" ? undefined : message.ownerAddress;
    if (message.signers) {
      obj.signers = message.signers.map((e) =>
        e ? BindedSignerParams.toAmino(e) : undefined
      );
    } else {
      obj.signers = message.signers;
    }
    obj.actorCount = !message.actorCount.isZero()
      ? message.actorCount?.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: BindedSignerAminoMsg): BindedSigner {
    return BindedSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: BindedSignerProtoMsg): BindedSigner {
    return BindedSigner.decode(message.value);
  },
  toProto(message: BindedSigner): Uint8Array {
    return BindedSigner.encode(message).finish();
  },
  toProtoMsg(message: BindedSigner): BindedSignerProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftoracle.BindedSigner",
      value: BindedSigner.encode(message).finish(),
    };
  },
};
