//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateToken, MsgUpdateToken, MsgDeleteToken, MsgCreateMintperm, MsgUpdateMintperm, MsgDeleteMintperm, MsgMint, MsgCreateOptions, MsgUpdateOptions, MsgDeleteOptions, MsgBurn, MsgWrapToken, MsgUnwrapToken, MsgSendWrapToken } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateToken", MsgCreateToken], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateToken", MsgUpdateToken], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteToken", MsgDeleteToken], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateMintperm", MsgCreateMintperm], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateMintperm", MsgUpdateMintperm], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteMintperm", MsgDeleteMintperm], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgMint", MsgMint], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateOptions", MsgCreateOptions], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateOptions", MsgUpdateOptions], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteOptions", MsgDeleteOptions], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgBurn", MsgBurn], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgWrapToken", MsgWrapToken], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUnwrapToken", MsgUnwrapToken], ["/thesixnetwork.sixprotocol.tokenmngr.v2.MsgSendWrapToken", MsgSendWrapToken]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateToken",
        value: MsgCreateToken.encode(value).finish()
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateToken",
        value: MsgUpdateToken.encode(value).finish()
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteToken",
        value: MsgDeleteToken.encode(value).finish()
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateMintperm",
        value: MsgCreateMintperm.encode(value).finish()
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateMintperm",
        value: MsgUpdateMintperm.encode(value).finish()
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteMintperm",
        value: MsgDeleteMintperm.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateOptions",
        value: MsgCreateOptions.encode(value).finish()
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateOptions",
        value: MsgUpdateOptions.encode(value).finish()
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteOptions",
        value: MsgDeleteOptions.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgWrapToken",
        value: MsgWrapToken.encode(value).finish()
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUnwrapToken",
        value: MsgUnwrapToken.encode(value).finish()
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgSendWrapToken",
        value: MsgSendWrapToken.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateToken",
        value
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateToken",
        value
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteToken",
        value
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateMintperm",
        value
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateMintperm",
        value
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteMintperm",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgMint",
        value
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateOptions",
        value
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateOptions",
        value
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteOptions",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgBurn",
        value
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgWrapToken",
        value
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUnwrapToken",
        value
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgSendWrapToken",
        value
      };
    }
  },
  fromPartial: {
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateToken",
        value: MsgCreateToken.fromPartial(value)
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateToken",
        value: MsgUpdateToken.fromPartial(value)
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteToken",
        value: MsgDeleteToken.fromPartial(value)
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateMintperm",
        value: MsgCreateMintperm.fromPartial(value)
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateMintperm",
        value: MsgUpdateMintperm.fromPartial(value)
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteMintperm",
        value: MsgDeleteMintperm.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgCreateOptions",
        value: MsgCreateOptions.fromPartial(value)
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUpdateOptions",
        value: MsgUpdateOptions.fromPartial(value)
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgDeleteOptions",
        value: MsgDeleteOptions.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgWrapToken",
        value: MsgWrapToken.fromPartial(value)
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgUnwrapToken",
        value: MsgUnwrapToken.fromPartial(value)
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: "/thesixnetwork.sixprotocol.tokenmngr.v2.MsgSendWrapToken",
        value: MsgSendWrapToken.fromPartial(value)
      };
    }
  }
};