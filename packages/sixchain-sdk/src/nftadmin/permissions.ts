//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
export interface AddressList {
  addresses: string[];
}
export interface AddressListProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.AddressList";
  value: Uint8Array;
}
export interface AddressListAmino {
  addresses?: string[];
}
export interface AddressListAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.AddressList";
  value: AddressListAmino;
}
export interface AddressListSDKType {
  addresses: string[];
}
export interface Permissions_MapNameEntry {
  key: string;
  value?: AddressList;
}
export interface Permissions_MapNameEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Permissions_MapNameEntryAmino {
  key?: string;
  value?: AddressListAmino;
}
export interface Permissions_MapNameEntryAminoMsg {
  type: string;
  value: Permissions_MapNameEntryAmino;
}
export interface Permissions_MapNameEntrySDKType {
  key: string;
  value?: AddressListSDKType;
}
export interface Permissions {
  mapName: {
    [key: string]: AddressList;
  };
}
export interface PermissionsProtoMsg {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.Permissions";
  value: Uint8Array;
}
export interface PermissionsAmino {
  map_name?: {
    [key: string]: AddressListAmino;
  };
}
export interface PermissionsAminoMsg {
  type: "/thesixnetwork.sixnft.nftadmin.Permissions";
  value: PermissionsAmino;
}
export interface PermissionsSDKType {
  map_name: {
    [key: string]: AddressListSDKType;
  };
}
function createBaseAddressList(): AddressList {
  return {
    addresses: []
  };
}
export const AddressList = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.AddressList",
  encode(message: AddressList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressList>): AddressList {
    const message = createBaseAddressList();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AddressListAmino): AddressList {
    const message = createBaseAddressList();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: AddressList): AddressListAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: AddressListAminoMsg): AddressList {
    return AddressList.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressListProtoMsg): AddressList {
    return AddressList.decode(message.value);
  },
  toProto(message: AddressList): Uint8Array {
    return AddressList.encode(message).finish();
  },
  toProtoMsg(message: AddressList): AddressListProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftadmin.AddressList",
      value: AddressList.encode(message).finish()
    };
  }
};
function createBasePermissions_MapNameEntry(): Permissions_MapNameEntry {
  return {
    key: "",
    value: undefined
  };
}
export const Permissions_MapNameEntry = {
  encode(message: Permissions_MapNameEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AddressList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions_MapNameEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions_MapNameEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = AddressList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Permissions_MapNameEntry>): Permissions_MapNameEntry {
    const message = createBasePermissions_MapNameEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? AddressList.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: Permissions_MapNameEntryAmino): Permissions_MapNameEntry {
    const message = createBasePermissions_MapNameEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = AddressList.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Permissions_MapNameEntry): Permissions_MapNameEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? AddressList.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: Permissions_MapNameEntryAminoMsg): Permissions_MapNameEntry {
    return Permissions_MapNameEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Permissions_MapNameEntryProtoMsg): Permissions_MapNameEntry {
    return Permissions_MapNameEntry.decode(message.value);
  },
  toProto(message: Permissions_MapNameEntry): Uint8Array {
    return Permissions_MapNameEntry.encode(message).finish();
  }
};
function createBasePermissions(): Permissions {
  return {
    mapName: {}
  };
}
export const Permissions = {
  typeUrl: "/thesixnetwork.sixnft.nftadmin.Permissions",
  encode(message: Permissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.mapName).forEach(([key, value]) => {
      Permissions_MapNameEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Permissions_MapNameEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.mapName[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Permissions>): Permissions {
    const message = createBasePermissions();
    message.mapName = Object.entries(object.mapName ?? {}).reduce<{
      [key: string]: AddressList;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = AddressList.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: PermissionsAmino): Permissions {
    const message = createBasePermissions();
    message.mapName = Object.entries(object.map_name ?? {}).reduce<{
      [key: string]: AddressList;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = AddressList.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: Permissions): PermissionsAmino {
    const obj: any = {};
    obj.map_name = {};
    if (message.mapName) {
      Object.entries(message.mapName).forEach(([k, v]) => {
        obj.map_name[k] = AddressList.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: PermissionsAminoMsg): Permissions {
    return Permissions.fromAmino(object.value);
  },
  fromProtoMsg(message: PermissionsProtoMsg): Permissions {
    return Permissions.decode(message.value);
  },
  toProto(message: Permissions): Uint8Array {
    return Permissions.encode(message).finish();
  },
  toProtoMsg(message: Permissions): PermissionsProtoMsg {
    return {
      typeUrl: "/thesixnetwork.sixnft.nftadmin.Permissions",
      value: Permissions.encode(message).finish()
    };
  }
};