//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrantPermission, MsgRevokePermission } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/thesixnetwork.sixnft.nftadmin.MsgGrantPermission", MsgGrantPermission], ["/thesixnetwork.sixnft.nftadmin.MsgRevokePermission", MsgRevokePermission]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    grantPermission(value: MsgGrantPermission) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
        value: MsgGrantPermission.encode(value).finish()
      };
    },
    revokePermission(value: MsgRevokePermission) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
        value: MsgRevokePermission.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grantPermission(value: MsgGrantPermission) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
        value
      };
    },
    revokePermission(value: MsgRevokePermission) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
        value
      };
    }
  },
  fromPartial: {
    grantPermission(value: MsgGrantPermission) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
        value: MsgGrantPermission.fromPartial(value)
      };
    },
    revokePermission(value: MsgRevokePermission) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
        value: MsgRevokePermission.fromPartial(value)
      };
    }
  }
};