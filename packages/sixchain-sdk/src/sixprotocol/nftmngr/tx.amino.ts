//@ts-nocheck
import { MsgUpdateParams, MsgCreateNFTSchema, MsgCreateMetadata, MsgPerformActionByAdmin, MsgAddAttribute, MsgAddAction, MsgSetBaseUri, MsgToggleAction, MsgChangeSchemaOwner, MsgResyncAttributes, MsgShowAttributes, MsgSetFeeConfig, MsgSetMintauth, MsgChangeOrgOwner, MsgSetUriRetrievalMethod, MsgSetOriginChain, MsgSetOriginContract, MsgSetAttributeOveriding, MsgSetMetadataFormat, MsgCreateActionExecutor, MsgDeleteActionExecutor, MsgUpdateSchemaAttribute, MsgUpdateAction, MsgProposalVirtualSchema, MsgPerformVirtualAction, MsgVoteVirtualSchemaProposal } from "./tx";
export const AminoConverter = {
  "/sixprotocol.nftmngr.MsgUpdateParams": {
    aminoType: "sixprotocol/x/nftmngr/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sixprotocol.nftmngr.MsgCreateNFTSchema": {
    aminoType: "/sixprotocol.nftmngr.MsgCreateNFTSchema",
    toAmino: MsgCreateNFTSchema.toAmino,
    fromAmino: MsgCreateNFTSchema.fromAmino
  },
  "/sixprotocol.nftmngr.MsgCreateMetadata": {
    aminoType: "/sixprotocol.nftmngr.MsgCreateMetadata",
    toAmino: MsgCreateMetadata.toAmino,
    fromAmino: MsgCreateMetadata.fromAmino
  },
  "/sixprotocol.nftmngr.MsgPerformActionByAdmin": {
    aminoType: "/sixprotocol.nftmngr.MsgPerformActionByAdmin",
    toAmino: MsgPerformActionByAdmin.toAmino,
    fromAmino: MsgPerformActionByAdmin.fromAmino
  },
  "/sixprotocol.nftmngr.MsgAddAttribute": {
    aminoType: "/sixprotocol.nftmngr.MsgAddAttribute",
    toAmino: MsgAddAttribute.toAmino,
    fromAmino: MsgAddAttribute.fromAmino
  },
  "/sixprotocol.nftmngr.MsgAddAction": {
    aminoType: "/sixprotocol.nftmngr.MsgAddAction",
    toAmino: MsgAddAction.toAmino,
    fromAmino: MsgAddAction.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetBaseUri": {
    aminoType: "/sixprotocol.nftmngr.MsgSetBaseUri",
    toAmino: MsgSetBaseUri.toAmino,
    fromAmino: MsgSetBaseUri.fromAmino
  },
  "/sixprotocol.nftmngr.MsgToggleAction": {
    aminoType: "/sixprotocol.nftmngr.MsgToggleAction",
    toAmino: MsgToggleAction.toAmino,
    fromAmino: MsgToggleAction.fromAmino
  },
  "/sixprotocol.nftmngr.MsgChangeSchemaOwner": {
    aminoType: "/sixprotocol.nftmngr.MsgChangeSchemaOwner",
    toAmino: MsgChangeSchemaOwner.toAmino,
    fromAmino: MsgChangeSchemaOwner.fromAmino
  },
  "/sixprotocol.nftmngr.MsgResyncAttributes": {
    aminoType: "/sixprotocol.nftmngr.MsgResyncAttributes",
    toAmino: MsgResyncAttributes.toAmino,
    fromAmino: MsgResyncAttributes.fromAmino
  },
  "/sixprotocol.nftmngr.MsgShowAttributes": {
    aminoType: "/sixprotocol.nftmngr.MsgShowAttributes",
    toAmino: MsgShowAttributes.toAmino,
    fromAmino: MsgShowAttributes.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetFeeConfig": {
    aminoType: "/sixprotocol.nftmngr.MsgSetFeeConfig",
    toAmino: MsgSetFeeConfig.toAmino,
    fromAmino: MsgSetFeeConfig.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetMintauth": {
    aminoType: "/sixprotocol.nftmngr.MsgSetMintauth",
    toAmino: MsgSetMintauth.toAmino,
    fromAmino: MsgSetMintauth.fromAmino
  },
  "/sixprotocol.nftmngr.MsgChangeOrgOwner": {
    aminoType: "/sixprotocol.nftmngr.MsgChangeOrgOwner",
    toAmino: MsgChangeOrgOwner.toAmino,
    fromAmino: MsgChangeOrgOwner.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetUriRetrievalMethod": {
    aminoType: "/sixprotocol.nftmngr.MsgSetUriRetrievalMethod",
    toAmino: MsgSetUriRetrievalMethod.toAmino,
    fromAmino: MsgSetUriRetrievalMethod.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetOriginChain": {
    aminoType: "/sixprotocol.nftmngr.MsgSetOriginChain",
    toAmino: MsgSetOriginChain.toAmino,
    fromAmino: MsgSetOriginChain.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetOriginContract": {
    aminoType: "/sixprotocol.nftmngr.MsgSetOriginContract",
    toAmino: MsgSetOriginContract.toAmino,
    fromAmino: MsgSetOriginContract.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetAttributeOveriding": {
    aminoType: "/sixprotocol.nftmngr.MsgSetAttributeOveriding",
    toAmino: MsgSetAttributeOveriding.toAmino,
    fromAmino: MsgSetAttributeOveriding.fromAmino
  },
  "/sixprotocol.nftmngr.MsgSetMetadataFormat": {
    aminoType: "/sixprotocol.nftmngr.MsgSetMetadataFormat",
    toAmino: MsgSetMetadataFormat.toAmino,
    fromAmino: MsgSetMetadataFormat.fromAmino
  },
  "/sixprotocol.nftmngr.MsgCreateActionExecutor": {
    aminoType: "/sixprotocol.nftmngr.MsgCreateActionExecutor",
    toAmino: MsgCreateActionExecutor.toAmino,
    fromAmino: MsgCreateActionExecutor.fromAmino
  },
  "/sixprotocol.nftmngr.MsgDeleteActionExecutor": {
    aminoType: "/sixprotocol.nftmngr.MsgDeleteActionExecutor",
    toAmino: MsgDeleteActionExecutor.toAmino,
    fromAmino: MsgDeleteActionExecutor.fromAmino
  },
  "/sixprotocol.nftmngr.MsgUpdateSchemaAttribute": {
    aminoType: "/sixprotocol.nftmngr.MsgUpdateSchemaAttribute",
    toAmino: MsgUpdateSchemaAttribute.toAmino,
    fromAmino: MsgUpdateSchemaAttribute.fromAmino
  },
  "/sixprotocol.nftmngr.MsgUpdateAction": {
    aminoType: "/sixprotocol.nftmngr.MsgUpdateAction",
    toAmino: MsgUpdateAction.toAmino,
    fromAmino: MsgUpdateAction.fromAmino
  },
  "/sixprotocol.nftmngr.MsgProposalVirtualSchema": {
    aminoType: "/sixprotocol.nftmngr.MsgProposalVirtualSchema",
    toAmino: MsgProposalVirtualSchema.toAmino,
    fromAmino: MsgProposalVirtualSchema.fromAmino
  },
  "/sixprotocol.nftmngr.MsgPerformVirtualAction": {
    aminoType: "/sixprotocol.nftmngr.MsgPerformVirtualAction",
    toAmino: MsgPerformVirtualAction.toAmino,
    fromAmino: MsgPerformVirtualAction.fromAmino
  },
  "/sixprotocol.nftmngr.MsgVoteVirtualSchemaProposal": {
    aminoType: "/sixprotocol.nftmngr.MsgVoteVirtualSchemaProposal",
    toAmino: MsgVoteVirtualSchemaProposal.toAmino,
    fromAmino: MsgVoteVirtualSchemaProposal.fromAmino
  }
};