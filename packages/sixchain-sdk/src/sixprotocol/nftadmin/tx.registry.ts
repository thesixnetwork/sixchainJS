//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgGrantPermission, MsgRevokePermission } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/sixprotocol.nftadmin.MsgUpdateParams", MsgUpdateParams],
  ["/sixprotocol.nftadmin.MsgGrantPermission", MsgGrantPermission],
  ["/sixprotocol.nftadmin.MsgRevokePermission", MsgRevokePermission],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    grantPermission(value: MsgGrantPermission) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgGrantPermission",
        value: MsgGrantPermission.encode(value).finish(),
      };
    },
    revokePermission(value: MsgRevokePermission) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgRevokePermission",
        value: MsgRevokePermission.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgUpdateParams",
        value,
      };
    },
    grantPermission(value: MsgGrantPermission) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgGrantPermission",
        value,
      };
    },
    revokePermission(value: MsgRevokePermission) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgRevokePermission",
        value,
      };
    },
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    grantPermission(value: MsgGrantPermission) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgGrantPermission",
        value: MsgGrantPermission.fromPartial(value),
      };
    },
    revokePermission(value: MsgRevokePermission) {
      return {
        typeUrl: "/sixprotocol.nftadmin.MsgRevokePermission",
        value: MsgRevokePermission.fromPartial(value),
      };
    },
  },
};
