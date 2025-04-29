//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrantPermission, MsgRevokePermission, MsgMint, MsgBurn } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/thesixnetwork.sixnft.nftadmin.MsgGrantPermission", MsgGrantPermission], ["/thesixnetwork.sixnft.nftadmin.MsgRevokePermission", MsgRevokePermission], ["/thesixnetwork.sixnft.nftadmin.MsgMint", MsgMint], ["/thesixnetwork.sixnft.nftadmin.MsgBurn", MsgBurn]];
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
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn",
        value: MsgBurn.encode(value).finish()
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
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn",
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
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftadmin.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    }
  }
};