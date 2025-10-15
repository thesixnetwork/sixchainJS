//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgUpdateParams,
  MsgCreateNFTSchema,
  MsgCreateMetadata,
  MsgPerformActionByAdmin,
  MsgAddAttribute,
  MsgAddAction,
  MsgSetBaseUri,
  MsgToggleAction,
  MsgChangeSchemaOwner,
  MsgResyncAttributes,
  MsgShowAttributes,
  MsgSetFeeConfig,
  MsgSetMintauth,
  MsgChangeOrgOwner,
  MsgSetUriRetrievalMethod,
  MsgSetOriginChain,
  MsgSetOriginContract,
  MsgSetAttributeOveriding,
  MsgSetMetadataFormat,
  MsgCreateActionExecutor,
  MsgDeleteActionExecutor,
  MsgUpdateSchemaAttribute,
  MsgUpdateAction,
  MsgProposalVirtualSchema,
  MsgPerformVirtualAction,
  MsgVoteVirtualSchemaProposal,
} from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/sixprotocol.nftmngr.MsgUpdateParams", MsgUpdateParams],
  ["/sixprotocol.nftmngr.MsgCreateNFTSchema", MsgCreateNFTSchema],
  ["/sixprotocol.nftmngr.MsgCreateMetadata", MsgCreateMetadata],
  ["/sixprotocol.nftmngr.MsgPerformActionByAdmin", MsgPerformActionByAdmin],
  ["/sixprotocol.nftmngr.MsgAddAttribute", MsgAddAttribute],
  ["/sixprotocol.nftmngr.MsgAddAction", MsgAddAction],
  ["/sixprotocol.nftmngr.MsgSetBaseUri", MsgSetBaseUri],
  ["/sixprotocol.nftmngr.MsgToggleAction", MsgToggleAction],
  ["/sixprotocol.nftmngr.MsgChangeSchemaOwner", MsgChangeSchemaOwner],
  ["/sixprotocol.nftmngr.MsgResyncAttributes", MsgResyncAttributes],
  ["/sixprotocol.nftmngr.MsgShowAttributes", MsgShowAttributes],
  ["/sixprotocol.nftmngr.MsgSetFeeConfig", MsgSetFeeConfig],
  ["/sixprotocol.nftmngr.MsgSetMintauth", MsgSetMintauth],
  ["/sixprotocol.nftmngr.MsgChangeOrgOwner", MsgChangeOrgOwner],
  ["/sixprotocol.nftmngr.MsgSetUriRetrievalMethod", MsgSetUriRetrievalMethod],
  ["/sixprotocol.nftmngr.MsgSetOriginChain", MsgSetOriginChain],
  ["/sixprotocol.nftmngr.MsgSetOriginContract", MsgSetOriginContract],
  ["/sixprotocol.nftmngr.MsgSetAttributeOveriding", MsgSetAttributeOveriding],
  ["/sixprotocol.nftmngr.MsgSetMetadataFormat", MsgSetMetadataFormat],
  ["/sixprotocol.nftmngr.MsgCreateActionExecutor", MsgCreateActionExecutor],
  ["/sixprotocol.nftmngr.MsgDeleteActionExecutor", MsgDeleteActionExecutor],
  ["/sixprotocol.nftmngr.MsgUpdateSchemaAttribute", MsgUpdateSchemaAttribute],
  ["/sixprotocol.nftmngr.MsgUpdateAction", MsgUpdateAction],
  ["/sixprotocol.nftmngr.MsgProposalVirtualSchema", MsgProposalVirtualSchema],
  ["/sixprotocol.nftmngr.MsgPerformVirtualAction", MsgPerformVirtualAction],
  [
    "/sixprotocol.nftmngr.MsgVoteVirtualSchemaProposal",
    MsgVoteVirtualSchemaProposal,
  ],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateNFTSchema",
        value: MsgCreateNFTSchema.encode(value).finish(),
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateMetadata",
        value: MsgCreateMetadata.encode(value).finish(),
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgPerformActionByAdmin",
        value: MsgPerformActionByAdmin.encode(value).finish(),
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgAddAttribute",
        value: MsgAddAttribute.encode(value).finish(),
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgAddAction",
        value: MsgAddAction.encode(value).finish(),
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetBaseUri",
        value: MsgSetBaseUri.encode(value).finish(),
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgToggleAction",
        value: MsgToggleAction.encode(value).finish(),
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgChangeSchemaOwner",
        value: MsgChangeSchemaOwner.encode(value).finish(),
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgResyncAttributes",
        value: MsgResyncAttributes.encode(value).finish(),
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgShowAttributes",
        value: MsgShowAttributes.encode(value).finish(),
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetFeeConfig",
        value: MsgSetFeeConfig.encode(value).finish(),
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetMintauth",
        value: MsgSetMintauth.encode(value).finish(),
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgChangeOrgOwner",
        value: MsgChangeOrgOwner.encode(value).finish(),
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetUriRetrievalMethod",
        value: MsgSetUriRetrievalMethod.encode(value).finish(),
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetOriginChain",
        value: MsgSetOriginChain.encode(value).finish(),
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetOriginContract",
        value: MsgSetOriginContract.encode(value).finish(),
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetAttributeOveriding",
        value: MsgSetAttributeOveriding.encode(value).finish(),
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetMetadataFormat",
        value: MsgSetMetadataFormat.encode(value).finish(),
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateActionExecutor",
        value: MsgCreateActionExecutor.encode(value).finish(),
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgDeleteActionExecutor",
        value: MsgDeleteActionExecutor.encode(value).finish(),
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateSchemaAttribute",
        value: MsgUpdateSchemaAttribute.encode(value).finish(),
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateAction",
        value: MsgUpdateAction.encode(value).finish(),
      };
    },
    proposalVirtualSchema(value: MsgProposalVirtualSchema) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgProposalVirtualSchema",
        value: MsgProposalVirtualSchema.encode(value).finish(),
      };
    },
    performVirtualAction(value: MsgPerformVirtualAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgPerformVirtualAction",
        value: MsgPerformVirtualAction.encode(value).finish(),
      };
    },
    voteVirtualSchemaProposal(value: MsgVoteVirtualSchemaProposal) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgVoteVirtualSchemaProposal",
        value: MsgVoteVirtualSchemaProposal.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateParams",
        value,
      };
    },
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateNFTSchema",
        value,
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateMetadata",
        value,
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgPerformActionByAdmin",
        value,
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgAddAttribute",
        value,
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgAddAction",
        value,
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetBaseUri",
        value,
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgToggleAction",
        value,
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgChangeSchemaOwner",
        value,
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgResyncAttributes",
        value,
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgShowAttributes",
        value,
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetFeeConfig",
        value,
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetMintauth",
        value,
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgChangeOrgOwner",
        value,
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetUriRetrievalMethod",
        value,
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetOriginChain",
        value,
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetOriginContract",
        value,
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetAttributeOveriding",
        value,
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetMetadataFormat",
        value,
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateActionExecutor",
        value,
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgDeleteActionExecutor",
        value,
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateSchemaAttribute",
        value,
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateAction",
        value,
      };
    },
    proposalVirtualSchema(value: MsgProposalVirtualSchema) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgProposalVirtualSchema",
        value,
      };
    },
    performVirtualAction(value: MsgPerformVirtualAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgPerformVirtualAction",
        value,
      };
    },
    voteVirtualSchemaProposal(value: MsgVoteVirtualSchemaProposal) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgVoteVirtualSchemaProposal",
        value,
      };
    },
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateNFTSchema",
        value: MsgCreateNFTSchema.fromPartial(value),
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateMetadata",
        value: MsgCreateMetadata.fromPartial(value),
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgPerformActionByAdmin",
        value: MsgPerformActionByAdmin.fromPartial(value),
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgAddAttribute",
        value: MsgAddAttribute.fromPartial(value),
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgAddAction",
        value: MsgAddAction.fromPartial(value),
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetBaseUri",
        value: MsgSetBaseUri.fromPartial(value),
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgToggleAction",
        value: MsgToggleAction.fromPartial(value),
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgChangeSchemaOwner",
        value: MsgChangeSchemaOwner.fromPartial(value),
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgResyncAttributes",
        value: MsgResyncAttributes.fromPartial(value),
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgShowAttributes",
        value: MsgShowAttributes.fromPartial(value),
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetFeeConfig",
        value: MsgSetFeeConfig.fromPartial(value),
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetMintauth",
        value: MsgSetMintauth.fromPartial(value),
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgChangeOrgOwner",
        value: MsgChangeOrgOwner.fromPartial(value),
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetUriRetrievalMethod",
        value: MsgSetUriRetrievalMethod.fromPartial(value),
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetOriginChain",
        value: MsgSetOriginChain.fromPartial(value),
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetOriginContract",
        value: MsgSetOriginContract.fromPartial(value),
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetAttributeOveriding",
        value: MsgSetAttributeOveriding.fromPartial(value),
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgSetMetadataFormat",
        value: MsgSetMetadataFormat.fromPartial(value),
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgCreateActionExecutor",
        value: MsgCreateActionExecutor.fromPartial(value),
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgDeleteActionExecutor",
        value: MsgDeleteActionExecutor.fromPartial(value),
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateSchemaAttribute",
        value: MsgUpdateSchemaAttribute.fromPartial(value),
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgUpdateAction",
        value: MsgUpdateAction.fromPartial(value),
      };
    },
    proposalVirtualSchema(value: MsgProposalVirtualSchema) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgProposalVirtualSchema",
        value: MsgProposalVirtualSchema.fromPartial(value),
      };
    },
    performVirtualAction(value: MsgPerformVirtualAction) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgPerformVirtualAction",
        value: MsgPerformVirtualAction.fromPartial(value),
      };
    },
    voteVirtualSchemaProposal(value: MsgVoteVirtualSchemaProposal) {
      return {
        typeUrl: "/sixprotocol.nftmngr.MsgVoteVirtualSchemaProposal",
        value: MsgVoteVirtualSchemaProposal.fromPartial(value),
      };
    },
  },
};
