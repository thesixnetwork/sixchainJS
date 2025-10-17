//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateMintRequest, MsgSubmitMintResponse, MsgCreateActionRequest, MsgSubmitActionResponse, MsgCreateVerifyCollectionOwnerRequest, MsgSubmitVerifyCollectionOwner, MsgSetMinimumConfirmation, MsgCreateActionSigner, MsgUpdateActionSigner, MsgDeleteActionSigner, MsgCreateActionSignerConfig, MsgUpdateActionSignerConfig, MsgDeleteActionSignerConfig, MsgCreateSyncActionSigner, MsgSubmitSyncActionSigner } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sixprotocol.nftoracle.MsgUpdateParams", MsgUpdateParams], ["/sixprotocol.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest], ["/sixprotocol.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse], ["/sixprotocol.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest], ["/sixprotocol.nftoracle.MsgSubmitActionResponse", MsgSubmitActionResponse], ["/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest", MsgCreateVerifyCollectionOwnerRequest], ["/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner", MsgSubmitVerifyCollectionOwner], ["/sixprotocol.nftoracle.MsgSetMinimumConfirmation", MsgSetMinimumConfirmation], ["/sixprotocol.nftoracle.MsgCreateActionSigner", MsgCreateActionSigner], ["/sixprotocol.nftoracle.MsgUpdateActionSigner", MsgUpdateActionSigner], ["/sixprotocol.nftoracle.MsgDeleteActionSigner", MsgDeleteActionSigner], ["/sixprotocol.nftoracle.MsgCreateActionSignerConfig", MsgCreateActionSignerConfig], ["/sixprotocol.nftoracle.MsgUpdateActionSignerConfig", MsgUpdateActionSignerConfig], ["/sixprotocol.nftoracle.MsgDeleteActionSignerConfig", MsgDeleteActionSignerConfig], ["/sixprotocol.nftoracle.MsgCreateSyncActionSigner", MsgCreateSyncActionSigner], ["/sixprotocol.nftoracle.MsgSubmitSyncActionSigner", MsgSubmitSyncActionSigner]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateMintRequest",
        value: MsgCreateMintRequest.encode(value).finish()
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitMintResponse",
        value: MsgSubmitMintResponse.encode(value).finish()
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionRequest",
        value: MsgCreateActionRequest.encode(value).finish()
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitActionResponse",
        value: MsgSubmitActionResponse.encode(value).finish()
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
        value: MsgCreateVerifyCollectionOwnerRequest.encode(value).finish()
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner",
        value: MsgSubmitVerifyCollectionOwner.encode(value).finish()
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSetMinimumConfirmation",
        value: MsgSetMinimumConfirmation.encode(value).finish()
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionSigner",
        value: MsgCreateActionSigner.encode(value).finish()
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateActionSigner",
        value: MsgUpdateActionSigner.encode(value).finish()
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgDeleteActionSigner",
        value: MsgDeleteActionSigner.encode(value).finish()
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionSignerConfig",
        value: MsgCreateActionSignerConfig.encode(value).finish()
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateActionSignerConfig",
        value: MsgUpdateActionSignerConfig.encode(value).finish()
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgDeleteActionSignerConfig",
        value: MsgDeleteActionSignerConfig.encode(value).finish()
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateSyncActionSigner",
        value: MsgCreateSyncActionSigner.encode(value).finish()
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitSyncActionSigner",
        value: MsgSubmitSyncActionSigner.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateParams",
        value
      };
    },
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateMintRequest",
        value
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitMintResponse",
        value
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionRequest",
        value
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitActionResponse",
        value
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
        value
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner",
        value
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSetMinimumConfirmation",
        value
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionSigner",
        value
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateActionSigner",
        value
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgDeleteActionSigner",
        value
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionSignerConfig",
        value
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateActionSignerConfig",
        value
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgDeleteActionSignerConfig",
        value
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateSyncActionSigner",
        value
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitSyncActionSigner",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateMintRequest",
        value: MsgCreateMintRequest.fromPartial(value)
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitMintResponse",
        value: MsgSubmitMintResponse.fromPartial(value)
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionRequest",
        value: MsgCreateActionRequest.fromPartial(value)
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitActionResponse",
        value: MsgSubmitActionResponse.fromPartial(value)
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
        value: MsgCreateVerifyCollectionOwnerRequest.fromPartial(value)
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner",
        value: MsgSubmitVerifyCollectionOwner.fromPartial(value)
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSetMinimumConfirmation",
        value: MsgSetMinimumConfirmation.fromPartial(value)
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionSigner",
        value: MsgCreateActionSigner.fromPartial(value)
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateActionSigner",
        value: MsgUpdateActionSigner.fromPartial(value)
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgDeleteActionSigner",
        value: MsgDeleteActionSigner.fromPartial(value)
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateActionSignerConfig",
        value: MsgCreateActionSignerConfig.fromPartial(value)
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgUpdateActionSignerConfig",
        value: MsgUpdateActionSignerConfig.fromPartial(value)
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgDeleteActionSignerConfig",
        value: MsgDeleteActionSignerConfig.fromPartial(value)
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgCreateSyncActionSigner",
        value: MsgCreateSyncActionSigner.fromPartial(value)
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: "/sixprotocol.nftoracle.MsgSubmitSyncActionSigner",
        value: MsgSubmitSyncActionSigner.fromPartial(value)
      };
    }
  }
};