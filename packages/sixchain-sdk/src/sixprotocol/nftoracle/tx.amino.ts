//@ts-nocheck
import {
  MsgUpdateParams,
  MsgCreateMintRequest,
  MsgSubmitMintResponse,
  MsgCreateActionRequest,
  MsgSubmitActionResponse,
  MsgCreateVerifyCollectionOwnerRequest,
  MsgSubmitVerifyCollectionOwner,
  MsgSetMinimumConfirmation,
  MsgCreateActionSigner,
  MsgUpdateActionSigner,
  MsgDeleteActionSigner,
  MsgCreateActionSignerConfig,
  MsgUpdateActionSignerConfig,
  MsgDeleteActionSignerConfig,
  MsgCreateSyncActionSigner,
  MsgSubmitSyncActionSigner,
} from "./tx";
export const AminoConverter = {
  "/sixprotocol.nftoracle.MsgUpdateParams": {
    aminoType: "sixprotocol/x/nftoracle/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgCreateMintRequest": {
    aminoType: "/sixprotocol.nftoracle.MsgCreateMintRequest",
    toAmino: MsgCreateMintRequest.toAmino,
    fromAmino: MsgCreateMintRequest.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgSubmitMintResponse": {
    aminoType: "/sixprotocol.nftoracle.MsgSubmitMintResponse",
    toAmino: MsgSubmitMintResponse.toAmino,
    fromAmino: MsgSubmitMintResponse.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgCreateActionRequest": {
    aminoType: "/sixprotocol.nftoracle.MsgCreateActionRequest",
    toAmino: MsgCreateActionRequest.toAmino,
    fromAmino: MsgCreateActionRequest.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgSubmitActionResponse": {
    aminoType: "/sixprotocol.nftoracle.MsgSubmitActionResponse",
    toAmino: MsgSubmitActionResponse.toAmino,
    fromAmino: MsgSubmitActionResponse.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest": {
    aminoType: "/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest",
    toAmino: MsgCreateVerifyCollectionOwnerRequest.toAmino,
    fromAmino: MsgCreateVerifyCollectionOwnerRequest.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner": {
    aminoType: "/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner",
    toAmino: MsgSubmitVerifyCollectionOwner.toAmino,
    fromAmino: MsgSubmitVerifyCollectionOwner.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgSetMinimumConfirmation": {
    aminoType: "/sixprotocol.nftoracle.MsgSetMinimumConfirmation",
    toAmino: MsgSetMinimumConfirmation.toAmino,
    fromAmino: MsgSetMinimumConfirmation.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgCreateActionSigner": {
    aminoType: "/sixprotocol.nftoracle.MsgCreateActionSigner",
    toAmino: MsgCreateActionSigner.toAmino,
    fromAmino: MsgCreateActionSigner.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgUpdateActionSigner": {
    aminoType: "/sixprotocol.nftoracle.MsgUpdateActionSigner",
    toAmino: MsgUpdateActionSigner.toAmino,
    fromAmino: MsgUpdateActionSigner.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgDeleteActionSigner": {
    aminoType: "/sixprotocol.nftoracle.MsgDeleteActionSigner",
    toAmino: MsgDeleteActionSigner.toAmino,
    fromAmino: MsgDeleteActionSigner.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgCreateActionSignerConfig": {
    aminoType: "/sixprotocol.nftoracle.MsgCreateActionSignerConfig",
    toAmino: MsgCreateActionSignerConfig.toAmino,
    fromAmino: MsgCreateActionSignerConfig.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgUpdateActionSignerConfig": {
    aminoType: "/sixprotocol.nftoracle.MsgUpdateActionSignerConfig",
    toAmino: MsgUpdateActionSignerConfig.toAmino,
    fromAmino: MsgUpdateActionSignerConfig.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgDeleteActionSignerConfig": {
    aminoType: "/sixprotocol.nftoracle.MsgDeleteActionSignerConfig",
    toAmino: MsgDeleteActionSignerConfig.toAmino,
    fromAmino: MsgDeleteActionSignerConfig.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgCreateSyncActionSigner": {
    aminoType: "/sixprotocol.nftoracle.MsgCreateSyncActionSigner",
    toAmino: MsgCreateSyncActionSigner.toAmino,
    fromAmino: MsgCreateSyncActionSigner.fromAmino,
  },
  "/sixprotocol.nftoracle.MsgSubmitSyncActionSigner": {
    aminoType: "/sixprotocol.nftoracle.MsgSubmitSyncActionSigner",
    toAmino: MsgSubmitSyncActionSigner.toAmino,
    fromAmino: MsgSubmitSyncActionSigner.fromAmino,
  },
};
