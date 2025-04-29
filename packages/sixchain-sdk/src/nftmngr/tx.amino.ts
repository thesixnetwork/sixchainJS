//@ts-nocheck
import { MsgCreateNFTSchema, MsgCreateMetadata, MsgPerformActionByAdmin, MsgAddAttribute, MsgAddAction, MsgSetNFTAttribute, MsgSetBaseUri, MsgToggleAction, MsgChangeSchemaOwner, MsgAddSystemActioner, MsgRemoveSystemActioner, MsgResyncAttributes, MsgShowAttributes, MsgSetFeeConfig, MsgSetMintauth } from "./tx";
export const AminoConverter = {
  "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema",
    toAmino: MsgCreateNFTSchema.toAmino,
    fromAmino: MsgCreateNFTSchema.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata",
    toAmino: MsgCreateMetadata.toAmino,
    fromAmino: MsgCreateMetadata.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin",
    toAmino: MsgPerformActionByAdmin.toAmino,
    fromAmino: MsgPerformActionByAdmin.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute",
    toAmino: MsgAddAttribute.toAmino,
    fromAmino: MsgAddAttribute.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgAddAction": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgAddAction",
    toAmino: MsgAddAction.toAmino,
    fromAmino: MsgAddAction.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgSetNFTAttribute",
    toAmino: MsgSetNFTAttribute.toAmino,
    fromAmino: MsgSetNFTAttribute.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri",
    toAmino: MsgSetBaseUri.toAmino,
    fromAmino: MsgSetBaseUri.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgToggleAction": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction",
    toAmino: MsgToggleAction.toAmino,
    fromAmino: MsgToggleAction.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner",
    toAmino: MsgChangeSchemaOwner.toAmino,
    fromAmino: MsgChangeSchemaOwner.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgAddSystemActioner",
    toAmino: MsgAddSystemActioner.toAmino,
    fromAmino: MsgAddSystemActioner.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgRemoveSystemActioner",
    toAmino: MsgRemoveSystemActioner.toAmino,
    fromAmino: MsgRemoveSystemActioner.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes",
    toAmino: MsgResyncAttributes.toAmino,
    fromAmino: MsgResyncAttributes.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes",
    toAmino: MsgShowAttributes.toAmino,
    fromAmino: MsgShowAttributes.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig",
    toAmino: MsgSetFeeConfig.toAmino,
    fromAmino: MsgSetFeeConfig.fromAmino
  },
  "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth": {
    aminoType: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth",
    toAmino: MsgSetMintauth.toAmino,
    fromAmino: MsgSetMintauth.fromAmino
  }
};