//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
export interface Permission {
  name: string;
  addresses: string[];
}
export interface PermissionProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.Permission";
  value: Uint8Array;
}
/**
 * @name PermissionAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.Permission
 */
export interface PermissionAmino {
  name?: string;
  addresses?: string[];
}
export interface PermissionAminoMsg {
  type: "/sixprotocol.nftadmin.Permission";
  value: PermissionAmino;
}
export interface PermissionSDKType {
  name: string;
  addresses: string[];
}
export interface Authorization {
  rootAdmin: string;
  permissions: Permission[];
}
export interface AuthorizationProtoMsg {
  typeUrl: "/sixprotocol.nftadmin.Authorization";
  value: Uint8Array;
}
/**
 * @name AuthorizationAmino
 * @package sixprotocol.nftadmin
 * @see proto type: sixprotocol.nftadmin.Authorization
 */
export interface AuthorizationAmino {
  root_admin?: string;
  permissions?: PermissionAmino[];
}
export interface AuthorizationAminoMsg {
  type: "/sixprotocol.nftadmin.Authorization";
  value: AuthorizationAmino;
}
export interface AuthorizationSDKType {
  root_admin: string;
  permissions: PermissionSDKType[];
}
function createBasePermission(): Permission {
  return {
    name: "",
    addresses: [],
  };
}
export const Permission = {
  typeUrl: "/sixprotocol.nftadmin.Permission",
  encode(
    message: Permission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Permission>): Permission {
    const message = createBasePermission();
    message.name = object.name ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: PermissionAmino): Permission {
    const message = createBasePermission();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message: Permission): PermissionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: PermissionAminoMsg): Permission {
    return Permission.fromAmino(object.value);
  },
  fromProtoMsg(message: PermissionProtoMsg): Permission {
    return Permission.decode(message.value);
  },
  toProto(message: Permission): Uint8Array {
    return Permission.encode(message).finish();
  },
  toProtoMsg(message: Permission): PermissionProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.Permission",
      value: Permission.encode(message).finish(),
    };
  },
};
function createBaseAuthorization(): Authorization {
  return {
    rootAdmin: "",
    permissions: [],
  };
}
export const Authorization = {
  typeUrl: "/sixprotocol.nftadmin.Authorization",
  encode(
    message: Authorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rootAdmin !== "") {
      writer.uint32(10).string(message.rootAdmin);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Authorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootAdmin = reader.string();
          break;
        case 2:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Authorization>): Authorization {
    const message = createBaseAuthorization();
    message.rootAdmin = object.rootAdmin ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AuthorizationAmino): Authorization {
    const message = createBaseAuthorization();
    if (object.root_admin !== undefined && object.root_admin !== null) {
      message.rootAdmin = object.root_admin;
    }
    message.permissions =
      object.permissions?.map((e) => Permission.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Authorization): AuthorizationAmino {
    const obj: any = {};
    obj.root_admin = message.rootAdmin === "" ? undefined : message.rootAdmin;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toAmino(e) : undefined
      );
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: AuthorizationAminoMsg): Authorization {
    return Authorization.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorizationProtoMsg): Authorization {
    return Authorization.decode(message.value);
  },
  toProto(message: Authorization): Uint8Array {
    return Authorization.encode(message).finish();
  },
  toProtoMsg(message: Authorization): AuthorizationProtoMsg {
    return {
      typeUrl: "/sixprotocol.nftadmin.Authorization",
      value: Authorization.encode(message).finish(),
    };
  },
};
