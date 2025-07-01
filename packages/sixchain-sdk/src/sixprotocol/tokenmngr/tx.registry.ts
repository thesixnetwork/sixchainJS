//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateToken, MsgUpdateToken, MsgDeleteToken, MsgCreateMintperm, MsgUpdateMintperm, MsgDeleteMintperm, MsgCreateOptions, MsgUpdateOptions, MsgDeleteOptions, MsgBurn, MsgWrapToken, MsgUnwrapToken, MsgSendWrapToken } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sixprotocol.tokenmngr.MsgUpdateParams", MsgUpdateParams], ["/sixprotocol.tokenmngr.MsgCreateToken", MsgCreateToken], ["/sixprotocol.tokenmngr.MsgUpdateToken", MsgUpdateToken], ["/sixprotocol.tokenmngr.MsgDeleteToken", MsgDeleteToken], ["/sixprotocol.tokenmngr.MsgCreateMintperm", MsgCreateMintperm], ["/sixprotocol.tokenmngr.MsgUpdateMintperm", MsgUpdateMintperm], ["/sixprotocol.tokenmngr.MsgDeleteMintperm", MsgDeleteMintperm], ["/sixprotocol.tokenmngr.MsgCreateOptions", MsgCreateOptions], ["/sixprotocol.tokenmngr.MsgUpdateOptions", MsgUpdateOptions], ["/sixprotocol.tokenmngr.MsgDeleteOptions", MsgDeleteOptions], ["/sixprotocol.tokenmngr.MsgBurn", MsgBurn], ["/sixprotocol.tokenmngr.MsgWrapToken", MsgWrapToken], ["/sixprotocol.tokenmngr.MsgUnwrapToken", MsgUnwrapToken], ["/sixprotocol.tokenmngr.MsgSendWrapToken", MsgSendWrapToken]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateToken",
        value: MsgCreateToken.encode(value).finish()
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateToken",
        value: MsgUpdateToken.encode(value).finish()
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteToken",
        value: MsgDeleteToken.encode(value).finish()
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintperm",
        value: MsgCreateMintperm.encode(value).finish()
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintperm",
        value: MsgUpdateMintperm.encode(value).finish()
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintperm",
        value: MsgDeleteMintperm.encode(value).finish()
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptions",
        value: MsgCreateOptions.encode(value).finish()
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptions",
        value: MsgUpdateOptions.encode(value).finish()
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptions",
        value: MsgDeleteOptions.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgWrapToken",
        value: MsgWrapToken.encode(value).finish()
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapToken",
        value: MsgUnwrapToken.encode(value).finish()
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapToken",
        value: MsgSendWrapToken.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParams",
        value
      };
    },
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateToken",
        value
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateToken",
        value
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteToken",
        value
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintperm",
        value
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintperm",
        value
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintperm",
        value
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptions",
        value
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptions",
        value
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptions",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgBurn",
        value
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgWrapToken",
        value
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapToken",
        value
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapToken",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateToken",
        value: MsgCreateToken.fromPartial(value)
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateToken",
        value: MsgUpdateToken.fromPartial(value)
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteToken",
        value: MsgDeleteToken.fromPartial(value)
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateMintperm",
        value: MsgCreateMintperm.fromPartial(value)
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateMintperm",
        value: MsgUpdateMintperm.fromPartial(value)
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteMintperm",
        value: MsgDeleteMintperm.fromPartial(value)
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgCreateOptions",
        value: MsgCreateOptions.fromPartial(value)
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUpdateOptions",
        value: MsgUpdateOptions.fromPartial(value)
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgDeleteOptions",
        value: MsgDeleteOptions.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgWrapToken",
        value: MsgWrapToken.fromPartial(value)
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgUnwrapToken",
        value: MsgUnwrapToken.fromPartial(value)
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: "/sixprotocol.tokenmngr.MsgSendWrapToken",
        value: MsgSendWrapToken.fromPartial(value)
      };
    }
  }
};