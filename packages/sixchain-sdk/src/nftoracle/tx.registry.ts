//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateMintRequest, MsgSubmitMintResponse, MsgCreateActionRequest, MsgSubmitActionResponse, MsgCreateVerifyCollectionOwnerRequest, MsgSubmitVerifyCollectionOwner, MsgSetMinimumConfirmation } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse], ["/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse", MsgSubmitActionResponse], ["/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest", MsgCreateVerifyCollectionOwnerRequest], ["/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner", MsgSubmitVerifyCollectionOwner], ["/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation", MsgSetMinimumConfirmation]];
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
    }
  }
};