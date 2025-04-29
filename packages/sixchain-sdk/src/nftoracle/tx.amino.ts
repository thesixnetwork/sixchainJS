//@ts-nocheck
import { MsgCreateMintRequest, MsgSubmitMintResponse, MsgCreateActionRequest, MsgSubmitActionResponse, MsgCreateVerifyCollectionOwnerRequest, MsgSubmitVerifyCollectionOwner, MsgSetMinimumConfirmation } from "./tx";
export const AminoConverter = {
  "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgCreateMintRequest",
    toAmino: MsgCreateMintRequest.toAmino,
    fromAmino: MsgCreateMintRequest.fromAmino
  },
  "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgSubmitMintResponse",
    toAmino: MsgSubmitMintResponse.toAmino,
    fromAmino: MsgSubmitMintResponse.fromAmino
  },
  "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgCreateActionRequest",
    toAmino: MsgCreateActionRequest.toAmino,
    fromAmino: MsgCreateActionRequest.fromAmino
  },
  "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgSubmitActionResponse",
    toAmino: MsgSubmitActionResponse.toAmino,
    fromAmino: MsgSubmitActionResponse.fromAmino
  },
  "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
    toAmino: MsgCreateVerifyCollectionOwnerRequest.toAmino,
    fromAmino: MsgCreateVerifyCollectionOwnerRequest.fromAmino
  },
  "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgSubmitVerifyCollectionOwner",
    toAmino: MsgSubmitVerifyCollectionOwner.toAmino,
    fromAmino: MsgSubmitVerifyCollectionOwner.fromAmino
  },
  "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation": {
    aminoType: "/thesixnetwork.sixnft.nftoracle.MsgSetMinimumConfirmation",
    toAmino: MsgSetMinimumConfirmation.toAmino,
    fromAmino: MsgSetMinimumConfirmation.fromAmino
  }
};