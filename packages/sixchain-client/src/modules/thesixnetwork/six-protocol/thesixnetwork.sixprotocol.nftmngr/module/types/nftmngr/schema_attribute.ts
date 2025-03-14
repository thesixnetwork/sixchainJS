/* eslint-disable */
import {
  NumberAttributeValue,
  StringAttributeValue,
  BooleanAttributeValue,
  FloatAttributeValue,
} from "../nftmngr/nft_attribute_value";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.nftmngr";

export interface SchemaAttribute {
  nftSchemaCode: string;
  name: string;
  data_type: string;
  current_value: SchemaAttributeValue | undefined;
  creator: string;
}

export interface SchemaAttributeValue {
  number_attribute_value: NumberAttributeValue | undefined;
  string_attribute_value: StringAttributeValue | undefined;
  boolean_attribute_value: BooleanAttributeValue | undefined;
  float_attribute_value: FloatAttributeValue | undefined;
}

const baseSchemaAttribute: object = {
  nftSchemaCode: "",
  name: "",
  data_type: "",
  creator: "",
};

export const SchemaAttribute = {
  encode(message: SchemaAttribute, writer: Writer = Writer.create()): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.data_type !== "") {
      writer.uint32(26).string(message.data_type);
    }
    if (message.current_value !== undefined) {
      SchemaAttributeValue.encode(
        message.current_value,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SchemaAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaAttribute } as SchemaAttribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftSchemaCode = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.data_type = reader.string();
          break;
        case 4:
          message.current_value = SchemaAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaAttribute {
    const message = { ...baseSchemaAttribute } as SchemaAttribute;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.data_type = String(object.data_type);
    } else {
      message.data_type = "";
    }
    if (object.current_value !== undefined && object.current_value !== null) {
      message.current_value = SchemaAttributeValue.fromJSON(
        object.current_value
      );
    } else {
      message.current_value = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: SchemaAttribute): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.name !== undefined && (obj.name = message.name);
    message.data_type !== undefined && (obj.data_type = message.data_type);
    message.current_value !== undefined &&
      (obj.current_value = message.current_value
        ? SchemaAttributeValue.toJSON(message.current_value)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaAttribute>): SchemaAttribute {
    const message = { ...baseSchemaAttribute } as SchemaAttribute;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.data_type = object.data_type;
    } else {
      message.data_type = "";
    }
    if (object.current_value !== undefined && object.current_value !== null) {
      message.current_value = SchemaAttributeValue.fromPartial(
        object.current_value
      );
    } else {
      message.current_value = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseSchemaAttributeValue: object = {};

export const SchemaAttributeValue = {
  encode(
    message: SchemaAttributeValue,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.number_attribute_value !== undefined) {
      NumberAttributeValue.encode(
        message.number_attribute_value,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.string_attribute_value !== undefined) {
      StringAttributeValue.encode(
        message.string_attribute_value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.boolean_attribute_value !== undefined) {
      BooleanAttributeValue.encode(
        message.boolean_attribute_value,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.float_attribute_value !== undefined) {
      FloatAttributeValue.encode(
        message.float_attribute_value,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SchemaAttributeValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaAttributeValue } as SchemaAttributeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number_attribute_value = NumberAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.string_attribute_value = StringAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.boolean_attribute_value = BooleanAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.float_attribute_value = FloatAttributeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaAttributeValue {
    const message = { ...baseSchemaAttributeValue } as SchemaAttributeValue;
    if (
      object.number_attribute_value !== undefined &&
      object.number_attribute_value !== null
    ) {
      message.number_attribute_value = NumberAttributeValue.fromJSON(
        object.number_attribute_value
      );
    } else {
      message.number_attribute_value = undefined;
    }
    if (
      object.string_attribute_value !== undefined &&
      object.string_attribute_value !== null
    ) {
      message.string_attribute_value = StringAttributeValue.fromJSON(
        object.string_attribute_value
      );
    } else {
      message.string_attribute_value = undefined;
    }
    if (
      object.boolean_attribute_value !== undefined &&
      object.boolean_attribute_value !== null
    ) {
      message.boolean_attribute_value = BooleanAttributeValue.fromJSON(
        object.boolean_attribute_value
      );
    } else {
      message.boolean_attribute_value = undefined;
    }
    if (
      object.float_attribute_value !== undefined &&
      object.float_attribute_value !== null
    ) {
      message.float_attribute_value = FloatAttributeValue.fromJSON(
        object.float_attribute_value
      );
    } else {
      message.float_attribute_value = undefined;
    }
    return message;
  },

  toJSON(message: SchemaAttributeValue): unknown {
    const obj: any = {};
    message.number_attribute_value !== undefined &&
      (obj.number_attribute_value = message.number_attribute_value
        ? NumberAttributeValue.toJSON(message.number_attribute_value)
        : undefined);
    message.string_attribute_value !== undefined &&
      (obj.string_attribute_value = message.string_attribute_value
        ? StringAttributeValue.toJSON(message.string_attribute_value)
        : undefined);
    message.boolean_attribute_value !== undefined &&
      (obj.boolean_attribute_value = message.boolean_attribute_value
        ? BooleanAttributeValue.toJSON(message.boolean_attribute_value)
        : undefined);
    message.float_attribute_value !== undefined &&
      (obj.float_attribute_value = message.float_attribute_value
        ? FloatAttributeValue.toJSON(message.float_attribute_value)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaAttributeValue>): SchemaAttributeValue {
    const message = { ...baseSchemaAttributeValue } as SchemaAttributeValue;
    if (
      object.number_attribute_value !== undefined &&
      object.number_attribute_value !== null
    ) {
      message.number_attribute_value = NumberAttributeValue.fromPartial(
        object.number_attribute_value
      );
    } else {
      message.number_attribute_value = undefined;
    }
    if (
      object.string_attribute_value !== undefined &&
      object.string_attribute_value !== null
    ) {
      message.string_attribute_value = StringAttributeValue.fromPartial(
        object.string_attribute_value
      );
    } else {
      message.string_attribute_value = undefined;
    }
    if (
      object.boolean_attribute_value !== undefined &&
      object.boolean_attribute_value !== null
    ) {
      message.boolean_attribute_value = BooleanAttributeValue.fromPartial(
        object.boolean_attribute_value
      );
    } else {
      message.boolean_attribute_value = undefined;
    }
    if (
      object.float_attribute_value !== undefined &&
      object.float_attribute_value !== null
    ) {
      message.float_attribute_value = FloatAttributeValue.fromPartial(
        object.float_attribute_value
      );
    } else {
      message.float_attribute_value = undefined;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
