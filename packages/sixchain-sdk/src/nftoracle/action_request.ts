//@ts-nocheck
import { Timestamp } from "../google/protobuf/timestamp";
import { RequestStatus, DataHash, DataHashAmino, DataHashSDKType } from "./request";
import { Long, toTimestamp, fromTimestamp } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ActionParam {
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  refId: string;
  expiredAt: Date;
}
export interface ActionParamProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.ActionParam";
  value: Uint8Array;
}
export interface ActionParamAmino {
  nft_schema_code?: string;
  token_id?: string;
  action?: string;
  ref_id?: string;
  expired_at?: string;
}
export interface ActionParamAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.ActionParam";
  value: ActionParamAmino;
}
export interface ActionParamSDKType {
  nft_schema_code: string;
  token_id: string;
  action: string;
  ref_id: string;
  expired_at: Date;
}
export interface ActionRequest_ConfirmersEntry {
  key: string;
  value: boolean;
}
export interface ActionRequest_ConfirmersEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ActionRequest_ConfirmersEntryAmino {
  key?: string;
  value?: boolean;
}
export interface ActionRequest_ConfirmersEntryAminoMsg {
  type: string;
  value: ActionRequest_ConfirmersEntryAmino;
}
export interface ActionRequest_ConfirmersEntrySDKType {
  key: string;
  value: boolean;
}
export interface ActionRequest {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  caller: string;
  refId: string;
  requiredConfirm: Long;
  status: RequestStatus;
  currentConfirm: Long;
  confirmers: {
    [key: string]: boolean;
  };
  createdAt: Date;
  validUntil: Date;
  dataHashes: DataHash[];
  expiredHeight: Long;
  executionErrorMessage: string;
}
export interface ActionRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.ActionRequest";
  value: Uint8Array;
}
export interface ActionRequestAmino {
  id?: string;
  nft_schema_code?: string;
  token_id?: string;
  action?: string;
  caller?: string;
  ref_id?: string;
  required_confirm?: string;
  status?: RequestStatus;
  current_confirm?: string;
  confirmers?: {
    [key: string]: boolean;
  };
  created_at?: string;
  valid_until?: string;
  data_hashes?: DataHashAmino[];
  expired_height?: string;
  execution_error_message?: string;
}
export interface ActionRequestAminoMsg {
  type: "/thesixnetwork.sixnft.nftoracle.ActionRequest";
  value: ActionRequestAmino;
}
export interface ActionRequestSDKType {
  id: Long;
  nft_schema_code: string;
  token_id: string;
  action: string;
  caller: string;
  ref_id: string;
  required_confirm: Long;
  status: RequestStatus;
  current_confirm: Long;
  confirmers: {
    [key: string]: boolean;
  };
  created_at: Date;
  valid_until: Date;
  data_hashes: DataHashSDKType[];
  expired_height: Long;
  execution_error_message: string;
}
function createBaseActionParam(): ActionParam {
  return {
    nftSchemaCode: "",
    tokenId: "",
    action: "",
    refId: "",
    expiredAt: new Date()
  };
}
export const ActionParam = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.ActionParam",
  encode(message: ActionParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    if (message.refId !== "") {
      writer.uint32(34).string(message.refId);
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiredAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.refId = reader.string();
          break;
        case 5:
          message.expiredAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionParam>): ActionParam {
    const message = createBaseActionParam();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.action = object.action ?? "";
    message.refId = object.refId ?? "";
    message.expiredAt = object.expiredAt ?? undefined;
    return message;
  },
  fromAmino(object: ActionParamAmino): ActionParam {
    const message = createBaseActionParam();
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expiredAt = fromTimestamp(Timestamp.fromAmino(object.expired_at));
    }
    return message;
  },
  toAmino(message: ActionParam): ActionParamAmino {
    const obj: any = {};
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.action = message.action === "" ? undefined : message.action;
    obj.ref_id = message.refId === "" ? undefined : message.refId;
    obj.expired_at = message.expiredAt ? Timestamp.toAmino(toTimestamp(message.expiredAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActionParamAminoMsg): ActionParam {
    return ActionParam.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionParamProtoMsg): ActionParam {
    return ActionParam.decode(message.value);
  },
  toProto(message: ActionParam): Uint8Array {
    return ActionParam.encode(message).finish();
  },
  toProtoMsg(message: ActionParam): ActionParamProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.ActionParam",
      value: ActionParam.encode(message).finish()
    };
  }
};
function createBaseActionRequest_ConfirmersEntry(): ActionRequest_ConfirmersEntry {
  return {
    key: "",
    value: false
  };
}
export const ActionRequest_ConfirmersEntry = {
  encode(message: ActionRequest_ConfirmersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionRequest_ConfirmersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionRequest_ConfirmersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionRequest_ConfirmersEntry>): ActionRequest_ConfirmersEntry {
    const message = createBaseActionRequest_ConfirmersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: ActionRequest_ConfirmersEntryAmino): ActionRequest_ConfirmersEntry {
    const message = createBaseActionRequest_ConfirmersEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ActionRequest_ConfirmersEntry): ActionRequest_ConfirmersEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ActionRequest_ConfirmersEntryAminoMsg): ActionRequest_ConfirmersEntry {
    return ActionRequest_ConfirmersEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionRequest_ConfirmersEntryProtoMsg): ActionRequest_ConfirmersEntry {
    return ActionRequest_ConfirmersEntry.decode(message.value);
  },
  toProto(message: ActionRequest_ConfirmersEntry): Uint8Array {
    return ActionRequest_ConfirmersEntry.encode(message).finish();
  }
};
function createBaseActionRequest(): ActionRequest {
  return {
    id: Long.UZERO,
    nftSchemaCode: "",
    tokenId: "",
    action: "",
    caller: "",
    refId: "",
    requiredConfirm: Long.UZERO,
    status: 0,
    currentConfirm: Long.UZERO,
    confirmers: {},
    createdAt: new Date(),
    validUntil: new Date(),
    dataHashes: [],
    expiredHeight: Long.ZERO,
    executionErrorMessage: ""
  };
}
export const ActionRequest = {
  typeUrl: "/thesixnetwork.sixnft.nftoracle.ActionRequest",
  encode(message: ActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== "") {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.caller !== "") {
      writer.uint32(42).string(message.caller);
    }
    if (message.refId !== "") {
      writer.uint32(50).string(message.refId);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(56).uint64(message.requiredConfirm);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (!message.currentConfirm.isZero()) {
      writer.uint32(72).uint64(message.currentConfirm);
    }
    Object.entries(message.confirmers).forEach(([key, value]) => {
      ActionRequest_ConfirmersEntry.encode({
        key: key as any,
        value
      }, writer.uint32(80).fork()).ldelim();
    });
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.dataHashes) {
      DataHash.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (!message.expiredHeight.isZero()) {
      writer.uint32(112).int64(message.expiredHeight);
    }
    if (message.executionErrorMessage !== "") {
      writer.uint32(122).string(message.executionErrorMessage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.nftSchemaCode = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.caller = reader.string();
          break;
        case 6:
          message.refId = reader.string();
          break;
        case 7:
          message.requiredConfirm = reader.uint64() as Long;
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.currentConfirm = reader.uint64() as Long;
          break;
        case 10:
          const entry10 = ActionRequest_ConfirmersEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.confirmers[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.dataHashes.push(DataHash.decode(reader, reader.uint32()));
          break;
        case 14:
          message.expiredHeight = reader.int64() as Long;
          break;
        case 15:
          message.executionErrorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionRequest>): ActionRequest {
    const message = createBaseActionRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.tokenId = object.tokenId ?? "";
    message.action = object.action ?? "";
    message.caller = object.caller ?? "";
    message.refId = object.refId ?? "";
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    message.status = object.status ?? 0;
    message.currentConfirm = object.currentConfirm !== undefined && object.currentConfirm !== null ? Long.fromValue(object.currentConfirm) : Long.UZERO;
    message.confirmers = Object.entries(object.confirmers ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    message.createdAt = object.createdAt ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.dataHashes = object.dataHashes?.map(e => DataHash.fromPartial(e)) || [];
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.ZERO;
    message.executionErrorMessage = object.executionErrorMessage ?? "";
    return message;
  },
  fromAmino(object: ActionRequestAmino): ActionRequest {
    const message = createBaseActionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
    }
    if (object.required_confirm !== undefined && object.required_confirm !== null) {
      message.requiredConfirm = Long.fromString(object.required_confirm);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.current_confirm !== undefined && object.current_confirm !== null) {
      message.currentConfirm = Long.fromString(object.current_confirm);
    }
    message.confirmers = Object.entries(object.confirmers ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.valid_until !== undefined && object.valid_until !== null) {
      message.validUntil = fromTimestamp(Timestamp.fromAmino(object.valid_until));
    }
    message.dataHashes = object.data_hashes?.map(e => DataHash.fromAmino(e)) || [];
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = Long.fromString(object.expired_height);
    }
    if (object.execution_error_message !== undefined && object.execution_error_message !== null) {
      message.executionErrorMessage = object.execution_error_message;
    }
    return message;
  },
  toAmino(message: ActionRequest): ActionRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? (message.id?.toString)() : undefined;
    obj.nft_schema_code = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.action = message.action === "" ? undefined : message.action;
    obj.caller = message.caller === "" ? undefined : message.caller;
    obj.ref_id = message.refId === "" ? undefined : message.refId;
    obj.required_confirm = !message.requiredConfirm.isZero() ? (message.requiredConfirm?.toString)() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.current_confirm = !message.currentConfirm.isZero() ? (message.currentConfirm?.toString)() : undefined;
    obj.confirmers = {};
    if (message.confirmers) {
      Object.entries(message.confirmers).forEach(([k, v]) => {
        obj.confirmers[k] = bool.toAmino(v);
      });
    }
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.valid_until = message.validUntil ? Timestamp.toAmino(toTimestamp(message.validUntil)) : undefined;
    if (message.dataHashes) {
      obj.data_hashes = message.dataHashes.map(e => e ? DataHash.toAmino(e) : undefined);
    } else {
      obj.data_hashes = message.dataHashes;
    }
    obj.expired_height = !message.expiredHeight.isZero() ? (message.expiredHeight?.toString)() : undefined;
    obj.execution_error_message = message.executionErrorMessage === "" ? undefined : message.executionErrorMessage;
    return obj;
  },
  fromAminoMsg(object: ActionRequestAminoMsg): ActionRequest {
    return ActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionRequestProtoMsg): ActionRequest {
    return ActionRequest.decode(message.value);
  },
  toProto(message: ActionRequest): Uint8Array {
    return ActionRequest.encode(message).finish();
  },
  toProtoMsg(message: ActionRequest): ActionRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftoracle.ActionRequest",
      value: ActionRequest.encode(message).finish()
    };
  }
};