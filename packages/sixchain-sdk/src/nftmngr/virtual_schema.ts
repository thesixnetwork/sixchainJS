//@ts-nocheck
import { Action, ActionAmino, ActionSDKType } from "./action";
import { Timestamp } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../helpers";
export enum RegistryStatus {
  PENDING = 0,
  REJECT = 1,
  ACCEPT = 2,
  UNRECOGNIZED = -1,
}
export const RegistryStatusSDKType = RegistryStatus;
export const RegistryStatusAmino = RegistryStatus;
export function registryStatusFromJSON(object: any): RegistryStatus {
  switch (object) {
    case 0:
    case "PENDING":
      return RegistryStatus.PENDING;
    case 1:
    case "REJECT":
      return RegistryStatus.REJECT;
    case 2:
    case "ACCEPT":
      return RegistryStatus.ACCEPT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RegistryStatus.UNRECOGNIZED;
  }
}
export function registryStatusToJSON(object: RegistryStatus): string {
  switch (object) {
    case RegistryStatus.PENDING:
      return "PENDING";
    case RegistryStatus.REJECT:
      return "REJECT";
    case RegistryStatus.ACCEPT:
      return "ACCEPT";
    case RegistryStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export enum ProposalType {
  CREATE = 0,
  EDIT = 1,
  UNRECOGNIZED = -1,
}
export const ProposalTypeSDKType = ProposalType;
export const ProposalTypeAmino = ProposalType;
export function proposalTypeFromJSON(object: any): ProposalType {
  switch (object) {
    case 0:
    case "CREATE":
      return ProposalType.CREATE;
    case 1:
    case "EDIT":
      return ProposalType.EDIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalType.UNRECOGNIZED;
  }
}
export function proposalTypeToJSON(object: ProposalType): string {
  switch (object) {
    case ProposalType.CREATE:
      return "CREATE";
    case ProposalType.EDIT:
      return "EDIT";
    case ProposalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export interface VirtualSchemaProposal {
  id: string;
  proposalType: ProposalType;
  virtualSchema?: VirtualSchema;
  actions: Action[];
  submitTime: Date;
  votingStartTime: Date;
  votingEndTime: Date;
}
export interface VirtualSchemaProposalProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal";
  value: Uint8Array;
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export interface VirtualSchemaProposalAmino {
  id?: string;
  proposalType?: ProposalType;
  virtualSchema?: VirtualSchemaAmino;
  actions?: ActionAmino[];
  submitTime?: string;
  votingStartTime?: string;
  votingEndTime?: string;
}
export interface VirtualSchemaProposalAminoMsg {
  type: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal";
  value: VirtualSchemaProposalAmino;
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export interface VirtualSchemaProposalSDKType {
  id: string;
  proposalType: ProposalType;
  virtualSchema?: VirtualSchemaSDKType;
  actions: ActionSDKType[];
  submitTime: Date;
  votingStartTime: Date;
  votingEndTime: Date;
}
export interface VirtualSchema {
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistry[];
  enable: boolean;
}
export interface VirtualSchemaProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchema";
  value: Uint8Array;
}
export interface VirtualSchemaAmino {
  virtualNftSchemaCode?: string;
  registry?: VirtualSchemaRegistryAmino[];
  enable?: boolean;
}
export interface VirtualSchemaAminoMsg {
  type: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchema";
  value: VirtualSchemaAmino;
}
export interface VirtualSchemaSDKType {
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistrySDKType[];
  enable: boolean;
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export interface VirtualSchemaRegistry {
  nftSchemaCode: string;
  sharedAttributes: string[];
  decision: RegistryStatus;
}
export interface VirtualSchemaRegistryProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry";
  value: Uint8Array;
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export interface VirtualSchemaRegistryAmino {
  nftSchemaCode?: string;
  sharedAttributes?: string[];
  decision?: RegistryStatus;
}
export interface VirtualSchemaRegistryAminoMsg {
  type: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry";
  value: VirtualSchemaRegistryAmino;
}
/** TODO: [chore] Combine enable/disable to change virtual schema. */
export interface VirtualSchemaRegistrySDKType {
  nftSchemaCode: string;
  sharedAttributes: string[];
  decision: RegistryStatus;
}
export interface VirtualSchemaRegistryRequest {
  nftSchemaCode: string;
  sharedAttributes: string[];
}
export interface VirtualSchemaRegistryRequestProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest";
  value: Uint8Array;
}
export interface VirtualSchemaRegistryRequestAmino {
  nftSchemaCode?: string;
  sharedAttributes?: string[];
}
export interface VirtualSchemaRegistryRequestAminoMsg {
  type: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest";
  value: VirtualSchemaRegistryRequestAmino;
}
export interface VirtualSchemaRegistryRequestSDKType {
  nftSchemaCode: string;
  sharedAttributes: string[];
}
export interface ActiveVirtualSchemaProposal {
  id: string;
}
export interface ActiveVirtualSchemaProposalProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal";
  value: Uint8Array;
}
export interface ActiveVirtualSchemaProposalAmino {
  id?: string;
}
export interface ActiveVirtualSchemaProposalAminoMsg {
  type: "/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal";
  value: ActiveVirtualSchemaProposalAmino;
}
export interface ActiveVirtualSchemaProposalSDKType {
  id: string;
}
export interface InactiveVirtualSchemaProposal {
  id: string;
}
export interface InactiveVirtualSchemaProposalProtoMsg {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal";
  value: Uint8Array;
}
export interface InactiveVirtualSchemaProposalAmino {
  id?: string;
}
export interface InactiveVirtualSchemaProposalAminoMsg {
  type: "/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal";
  value: InactiveVirtualSchemaProposalAmino;
}
export interface InactiveVirtualSchemaProposalSDKType {
  id: string;
}
function createBaseVirtualSchemaProposal(): VirtualSchemaProposal {
  return {
    id: "",
    proposalType: 0,
    virtualSchema: undefined,
    actions: [],
    submitTime: new Date(),
    votingStartTime: new Date(),
    votingEndTime: new Date()
  };
}
export const VirtualSchemaProposal = {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal",
  encode(message: VirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.proposalType !== 0) {
      writer.uint32(16).int32(message.proposalType);
    }
    if (message.virtualSchema !== undefined) {
      VirtualSchema.encode(message.virtualSchema, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.proposalType = reader.int32() as any;
          break;
        case 3:
          message.virtualSchema = VirtualSchema.decode(reader, reader.uint32());
          break;
        case 4:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaProposal>): VirtualSchemaProposal {
    const message = createBaseVirtualSchemaProposal();
    message.id = object.id ?? "";
    message.proposalType = object.proposalType ?? 0;
    message.virtualSchema = object.virtualSchema !== undefined && object.virtualSchema !== null ? VirtualSchema.fromPartial(object.virtualSchema) : undefined;
    message.actions = object.actions?.map(e => Action.fromPartial(e)) || [];
    message.submitTime = object.submitTime ?? undefined;
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    return message;
  },
  fromAmino(object: VirtualSchemaProposalAmino): VirtualSchemaProposal {
    const message = createBaseVirtualSchemaProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.proposalType !== undefined && object.proposalType !== null) {
      message.proposalType = object.proposalType;
    }
    if (object.virtualSchema !== undefined && object.virtualSchema !== null) {
      message.virtualSchema = VirtualSchema.fromAmino(object.virtualSchema);
    }
    message.actions = object.actions?.map(e => Action.fromAmino(e)) || [];
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submitTime));
    }
    if (object.votingStartTime !== undefined && object.votingStartTime !== null) {
      message.votingStartTime = fromTimestamp(Timestamp.fromAmino(object.votingStartTime));
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = fromTimestamp(Timestamp.fromAmino(object.votingEndTime));
    }
    return message;
  },
  toAmino(message: VirtualSchemaProposal): VirtualSchemaProposalAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.proposalType = message.proposalType === 0 ? undefined : message.proposalType;
    obj.virtualSchema = message.virtualSchema ? VirtualSchema.toAmino(message.virtualSchema) : undefined;
    if (message.actions) {
      obj.actions = message.actions.map(e => e ? Action.toAmino(e) : undefined);
    } else {
      obj.actions = message.actions;
    }
    obj.submitTime = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : undefined;
    obj.votingStartTime = message.votingStartTime ? Timestamp.toAmino(toTimestamp(message.votingStartTime)) : undefined;
    obj.votingEndTime = message.votingEndTime ? Timestamp.toAmino(toTimestamp(message.votingEndTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaProposalAminoMsg): VirtualSchemaProposal {
    return VirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaProposalProtoMsg): VirtualSchemaProposal {
    return VirtualSchemaProposal.decode(message.value);
  },
  toProto(message: VirtualSchemaProposal): Uint8Array {
    return VirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaProposal): VirtualSchemaProposalProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal",
      value: VirtualSchemaProposal.encode(message).finish()
    };
  }
};
function createBaseVirtualSchema(): VirtualSchema {
  return {
    virtualNftSchemaCode: "",
    registry: [],
    enable: false
  };
}
export const VirtualSchema = {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchema",
  encode(message: VirtualSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualNftSchemaCode !== "") {
      writer.uint32(10).string(message.virtualNftSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaRegistry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.enable === true) {
      writer.uint32(24).bool(message.enable);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualNftSchemaCode = reader.string();
          break;
        case 2:
          message.registry.push(VirtualSchemaRegistry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchema>): VirtualSchema {
    const message = createBaseVirtualSchema();
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? "";
    message.registry = object.registry?.map(e => VirtualSchemaRegistry.fromPartial(e)) || [];
    message.enable = object.enable ?? false;
    return message;
  },
  fromAmino(object: VirtualSchemaAmino): VirtualSchema {
    const message = createBaseVirtualSchema();
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    message.registry = object.registry?.map(e => VirtualSchemaRegistry.fromAmino(e)) || [];
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = object.enable;
    }
    return message;
  },
  toAmino(message: VirtualSchema): VirtualSchemaAmino {
    const obj: any = {};
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === "" ? undefined : message.virtualNftSchemaCode;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? VirtualSchemaRegistry.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    obj.enable = message.enable === false ? undefined : message.enable;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaAminoMsg): VirtualSchema {
    return VirtualSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaProtoMsg): VirtualSchema {
    return VirtualSchema.decode(message.value);
  },
  toProto(message: VirtualSchema): Uint8Array {
    return VirtualSchema.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchema): VirtualSchemaProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchema",
      value: VirtualSchema.encode(message).finish()
    };
  }
};
function createBaseVirtualSchemaRegistry(): VirtualSchemaRegistry {
  return {
    nftSchemaCode: "",
    sharedAttributes: [],
    decision: 0
  };
}
export const VirtualSchemaRegistry = {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry",
  encode(message: VirtualSchemaRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.sharedAttributes) {
      writer.uint32(18).string(v!);
    }
    if (message.decision !== 0) {
      writer.uint32(24).int32(message.decision);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.sharedAttributes.push(reader.string());
          break;
        case 3:
          message.decision = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaRegistry>): VirtualSchemaRegistry {
    const message = createBaseVirtualSchemaRegistry();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    message.decision = object.decision ?? 0;
    return message;
  },
  fromAmino(object: VirtualSchemaRegistryAmino): VirtualSchemaRegistry {
    const message = createBaseVirtualSchemaRegistry();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    }
    return message;
  },
  toAmino(message: VirtualSchemaRegistry): VirtualSchemaRegistryAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.sharedAttributes) {
      obj.sharedAttributes = message.sharedAttributes.map(e => e);
    } else {
      obj.sharedAttributes = message.sharedAttributes;
    }
    obj.decision = message.decision === 0 ? undefined : message.decision;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaRegistryAminoMsg): VirtualSchemaRegistry {
    return VirtualSchemaRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaRegistryProtoMsg): VirtualSchemaRegistry {
    return VirtualSchemaRegistry.decode(message.value);
  },
  toProto(message: VirtualSchemaRegistry): Uint8Array {
    return VirtualSchemaRegistry.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaRegistry): VirtualSchemaRegistryProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry",
      value: VirtualSchemaRegistry.encode(message).finish()
    };
  }
};
function createBaseVirtualSchemaRegistryRequest(): VirtualSchemaRegistryRequest {
  return {
    nftSchemaCode: "",
    sharedAttributes: []
  };
}
export const VirtualSchemaRegistryRequest = {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest",
  encode(message: VirtualSchemaRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.sharedAttributes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.sharedAttributes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaRegistryRequest>): VirtualSchemaRegistryRequest {
    const message = createBaseVirtualSchemaRegistryRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? "";
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: VirtualSchemaRegistryRequestAmino): VirtualSchemaRegistryRequest {
    const message = createBaseVirtualSchemaRegistryRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    return message;
  },
  toAmino(message: VirtualSchemaRegistryRequest): VirtualSchemaRegistryRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === "" ? undefined : message.nftSchemaCode;
    if (message.sharedAttributes) {
      obj.sharedAttributes = message.sharedAttributes.map(e => e);
    } else {
      obj.sharedAttributes = message.sharedAttributes;
    }
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaRegistryRequestAminoMsg): VirtualSchemaRegistryRequest {
    return VirtualSchemaRegistryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaRegistryRequestProtoMsg): VirtualSchemaRegistryRequest {
    return VirtualSchemaRegistryRequest.decode(message.value);
  },
  toProto(message: VirtualSchemaRegistryRequest): Uint8Array {
    return VirtualSchemaRegistryRequest.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaRegistryRequest): VirtualSchemaRegistryRequestProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest",
      value: VirtualSchemaRegistryRequest.encode(message).finish()
    };
  }
};
function createBaseActiveVirtualSchemaProposal(): ActiveVirtualSchemaProposal {
  return {
    id: ""
  };
}
export const ActiveVirtualSchemaProposal = {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal",
  encode(message: ActiveVirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveVirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveVirtualSchemaProposal>): ActiveVirtualSchemaProposal {
    const message = createBaseActiveVirtualSchemaProposal();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: ActiveVirtualSchemaProposalAmino): ActiveVirtualSchemaProposal {
    const message = createBaseActiveVirtualSchemaProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: ActiveVirtualSchemaProposal): ActiveVirtualSchemaProposalAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: ActiveVirtualSchemaProposalAminoMsg): ActiveVirtualSchemaProposal {
    return ActiveVirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveVirtualSchemaProposalProtoMsg): ActiveVirtualSchemaProposal {
    return ActiveVirtualSchemaProposal.decode(message.value);
  },
  toProto(message: ActiveVirtualSchemaProposal): Uint8Array {
    return ActiveVirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: ActiveVirtualSchemaProposal): ActiveVirtualSchemaProposalProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal",
      value: ActiveVirtualSchemaProposal.encode(message).finish()
    };
  }
};
function createBaseInactiveVirtualSchemaProposal(): InactiveVirtualSchemaProposal {
  return {
    id: ""
  };
}
export const InactiveVirtualSchemaProposal = {
  typeUrl: "/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal",
  encode(message: InactiveVirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InactiveVirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInactiveVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InactiveVirtualSchemaProposal>): InactiveVirtualSchemaProposal {
    const message = createBaseInactiveVirtualSchemaProposal();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: InactiveVirtualSchemaProposalAmino): InactiveVirtualSchemaProposal {
    const message = createBaseInactiveVirtualSchemaProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: InactiveVirtualSchemaProposal): InactiveVirtualSchemaProposalAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: InactiveVirtualSchemaProposalAminoMsg): InactiveVirtualSchemaProposal {
    return InactiveVirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: InactiveVirtualSchemaProposalProtoMsg): InactiveVirtualSchemaProposal {
    return InactiveVirtualSchemaProposal.decode(message.value);
  },
  toProto(message: InactiveVirtualSchemaProposal): Uint8Array {
    return InactiveVirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: InactiveVirtualSchemaProposal): InactiveVirtualSchemaProposalProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal",
      value: InactiveVirtualSchemaProposal.encode(message).finish()
    };
  }
};