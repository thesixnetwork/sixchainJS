//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateMintRequest, MsgSubmitMintResponse, MsgCreateActionRequest, MsgSubmitActionResponse, MsgCreateVerifyCollectionOwnerRequest, MsgSubmitVerifyCollectionOwner, MsgSetMinimumConfirmation, MsgCreateActionSigner, MsgUpdateActionSigner, MsgDeleteActionSigner, MsgCreateActionSignerConfig, MsgUpdateActionSignerConfig, MsgDeleteActionSignerConfig, MsgCreateSyncActionSigner, MsgSubmitSyncActionSigner } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse], ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse", MsgSubmitActionResponse], ["/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest", MsgCreateVerifyCollectionOwnerRequest], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner", MsgSubmitVerifyCollectionOwner], ["/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation", MsgSetMinimumConfirmation], ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionSigner", MsgCreateActionSigner], ["/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSigner", MsgUpdateActionSigner], ["/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSigner", MsgDeleteActionSigner], ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionSignerConfig", MsgCreateActionSignerConfig], ["/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSignerConfig", MsgUpdateActionSignerConfig], ["/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSignerConfig", MsgDeleteActionSignerConfig], ["/thesixnetwork.sixnft.nftoracle.MsgCreateSyncActionSigner", MsgCreateSyncActionSigner], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitSyncActionSigner", MsgSubmitSyncActionSigner]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest",
        value: MsgCreateMintRequest.encode(value).finish()
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse",
        value: MsgSubmitMintResponse.encode(value).finish()
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest",
        value: MsgCreateActionRequest.encode(value).finish()
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse",
        value: MsgSubmitActionResponse.encode(value).finish()
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
        value: MsgCreateVerifyCollectionOwnerRequest.encode(value).finish()
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner",
        value: MsgSubmitVerifyCollectionOwner.encode(value).finish()
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation",
        value: MsgSetMinimumConfirmation.encode(value).finish()
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSigner",
        value: MsgCreateActionSigner.encode(value).finish()
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSigner",
        value: MsgUpdateActionSigner.encode(value).finish()
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSigner",
        value: MsgDeleteActionSigner.encode(value).finish()
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSignerConfig",
        value: MsgCreateActionSignerConfig.encode(value).finish()
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSignerConfig",
        value: MsgUpdateActionSignerConfig.encode(value).finish()
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSignerConfig",
        value: MsgDeleteActionSignerConfig.encode(value).finish()
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateSyncActionSigner",
        value: MsgCreateSyncActionSigner.encode(value).finish()
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitSyncActionSigner",
        value: MsgSubmitSyncActionSigner.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest",
        value
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse",
        value
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest",
        value
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse",
        value
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
        value
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner",
        value
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation",
        value
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSigner",
        value
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSigner",
        value
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSigner",
        value
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSignerConfig",
        value
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSignerConfig",
        value
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSignerConfig",
        value
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateSyncActionSigner",
        value
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitSyncActionSigner",
        value
      };
    }
  },
  fromPartial: {
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest",
        value: MsgCreateMintRequest.fromPartial(value)
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse",
        value: MsgSubmitMintResponse.fromPartial(value)
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest",
        value: MsgCreateActionRequest.fromPartial(value)
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse",
        value: MsgSubmitActionResponse.fromPartial(value)
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
        value: MsgCreateVerifyCollectionOwnerRequest.fromPartial(value)
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner",
        value: MsgSubmitVerifyCollectionOwner.fromPartial(value)
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation",
        value: MsgSetMinimumConfirmation.fromPartial(value)
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSigner",
        value: MsgCreateActionSigner.fromPartial(value)
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSigner",
        value: MsgUpdateActionSigner.fromPartial(value)
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSigner",
        value: MsgDeleteActionSigner.fromPartial(value)
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionSignerConfig",
        value: MsgCreateActionSignerConfig.fromPartial(value)
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgUpdateActionSignerConfig",
        value: MsgUpdateActionSignerConfig.fromPartial(value)
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgDeleteActionSignerConfig",
        value: MsgDeleteActionSignerConfig.fromPartial(value)
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgCreateSyncActionSigner",
        value: MsgCreateSyncActionSigner.fromPartial(value)
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftoracle.MsgSubmitSyncActionSigner",
        value: MsgSubmitSyncActionSigner.fromPartial(value)
      };
    }
  }
};