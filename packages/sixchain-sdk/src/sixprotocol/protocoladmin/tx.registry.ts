//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateGroup, MsgUpdateGroup, MsgDeleteGroup, MsgAddAdminToGroup, MsgRemoveAdminFromGroup } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sixprotocol.protocoladmin.MsgUpdateParams", MsgUpdateParams], ["/sixprotocol.protocoladmin.MsgCreateGroup", MsgCreateGroup], ["/sixprotocol.protocoladmin.MsgUpdateGroup", MsgUpdateGroup], ["/sixprotocol.protocoladmin.MsgDeleteGroup", MsgDeleteGroup], ["/sixprotocol.protocoladmin.MsgAddAdminToGroup", MsgAddAdminToGroup], ["/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup", MsgRemoveAdminFromGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgCreateGroup",
        value: MsgCreateGroup.encode(value).finish()
      };
    },
    updateGroup(value: MsgUpdateGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgUpdateGroup",
        value: MsgUpdateGroup.encode(value).finish()
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgDeleteGroup",
        value: MsgDeleteGroup.encode(value).finish()
      };
    },
    addAdminToGroup(value: MsgAddAdminToGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgAddAdminToGroup",
        value: MsgAddAdminToGroup.encode(value).finish()
      };
    },
    removeAdminFromGroup(value: MsgRemoveAdminFromGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup",
        value: MsgRemoveAdminFromGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgUpdateParams",
        value
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgCreateGroup",
        value
      };
    },
    updateGroup(value: MsgUpdateGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgUpdateGroup",
        value
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgDeleteGroup",
        value
      };
    },
    addAdminToGroup(value: MsgAddAdminToGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgAddAdminToGroup",
        value
      };
    },
    removeAdminFromGroup(value: MsgRemoveAdminFromGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgCreateGroup",
        value: MsgCreateGroup.fromPartial(value)
      };
    },
    updateGroup(value: MsgUpdateGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgUpdateGroup",
        value: MsgUpdateGroup.fromPartial(value)
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgDeleteGroup",
        value: MsgDeleteGroup.fromPartial(value)
      };
    },
    addAdminToGroup(value: MsgAddAdminToGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgAddAdminToGroup",
        value: MsgAddAdminToGroup.fromPartial(value)
      };
    },
    removeAdminFromGroup(value: MsgRemoveAdminFromGroup) {
      return {
        typeUrl: "/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup",
        value: MsgRemoveAdminFromGroup.fromPartial(value)
      };
    }
  }
};