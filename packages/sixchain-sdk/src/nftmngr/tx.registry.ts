//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateNFTSchema, MsgCreateMetadata, MsgPerformActionByAdmin, MsgAddAttribute, MsgAddAction, MsgSetBaseUri, MsgToggleAction, MsgChangeSchemaOwner, MsgResyncAttributes, MsgShowAttributes, MsgSetFeeConfig, MsgSetMintauth, MsgChangeOrgOwner, MsgSetUriRetrievalMethod, MsgSetOriginChain, MsgSetOriginContract, MsgSetAttributeOveriding, MsgSetMetadataFormat, MsgCreateActionExecutor, MsgDeleteActionExecutor, MsgUpdateSchemaAttribute, MsgUpdateAction } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema", MsgCreateNFTSchema], ["/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata", MsgCreateMetadata], ["/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin", MsgPerformActionByAdmin], ["/thesixnetwork.sixnft.nftmngr.MsgAddAttribute", MsgAddAttribute], ["/thesixnetwork.sixnft.nftmngr.MsgAddAction", MsgAddAction], ["/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri", MsgSetBaseUri], ["/thesixnetwork.sixnft.nftmngr.MsgToggleAction", MsgToggleAction], ["/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner", MsgChangeSchemaOwner], ["/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes", MsgResyncAttributes], ["/thesixnetwork.sixnft.nftmngr.MsgShowAttributes", MsgShowAttributes], ["/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig", MsgSetFeeConfig], ["/thesixnetwork.sixnft.nftmngr.MsgSetMintauth", MsgSetMintauth], ["/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner", MsgChangeOrgOwner], ["/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod", MsgSetUriRetrievalMethod], ["/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain", MsgSetOriginChain], ["/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract", MsgSetOriginContract], ["/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding", MsgSetAttributeOveriding], ["/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat", MsgSetMetadataFormat], ["/thesixnetwork.sixnft.nftmngr.MsgCreateActionExecutor", MsgCreateActionExecutor], ["/thesixnetwork.sixnft.nftmngr.MsgDeleteActionExecutor", MsgDeleteActionExecutor], ["/thesixnetwork.sixnft.nftmngr.MsgUpdateSchemaAttribute", MsgUpdateSchemaAttribute], ["/thesixnetwork.sixnft.nftmngr.MsgUpdateAction", MsgUpdateAction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema",
        value: MsgCreateNFTSchema.encode(value).finish()
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata",
        value: MsgCreateMetadata.encode(value).finish()
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin",
        value: MsgPerformActionByAdmin.encode(value).finish()
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute",
        value: MsgAddAttribute.encode(value).finish()
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction",
        value: MsgAddAction.encode(value).finish()
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri",
        value: MsgSetBaseUri.encode(value).finish()
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction",
        value: MsgToggleAction.encode(value).finish()
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner",
        value: MsgChangeSchemaOwner.encode(value).finish()
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes",
        value: MsgResyncAttributes.encode(value).finish()
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes",
        value: MsgShowAttributes.encode(value).finish()
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig",
        value: MsgSetFeeConfig.encode(value).finish()
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth",
        value: MsgSetMintauth.encode(value).finish()
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner",
        value: MsgChangeOrgOwner.encode(value).finish()
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod",
        value: MsgSetUriRetrievalMethod.encode(value).finish()
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain",
        value: MsgSetOriginChain.encode(value).finish()
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract",
        value: MsgSetOriginContract.encode(value).finish()
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding",
        value: MsgSetAttributeOveriding.encode(value).finish()
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat",
        value: MsgSetMetadataFormat.encode(value).finish()
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateActionExecutor",
        value: MsgCreateActionExecutor.encode(value).finish()
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgDeleteActionExecutor",
        value: MsgDeleteActionExecutor.encode(value).finish()
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateSchemaAttribute",
        value: MsgUpdateSchemaAttribute.encode(value).finish()
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateAction",
        value: MsgUpdateAction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema",
        value
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata",
        value
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin",
        value
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute",
        value
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction",
        value
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri",
        value
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction",
        value
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner",
        value
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes",
        value
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes",
        value
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig",
        value
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth",
        value
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner",
        value
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod",
        value
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain",
        value
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract",
        value
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding",
        value
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat",
        value
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateActionExecutor",
        value
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgDeleteActionExecutor",
        value
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateSchemaAttribute",
        value
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateAction",
        value
      };
    }
  },
  fromPartial: {
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateNFTSchema",
        value: MsgCreateNFTSchema.fromPartial(value)
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateMetadata",
        value: MsgCreateMetadata.fromPartial(value)
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgPerformActionByAdmin",
        value: MsgPerformActionByAdmin.fromPartial(value)
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAttribute",
        value: MsgAddAttribute.fromPartial(value)
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgAddAction",
        value: MsgAddAction.fromPartial(value)
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetBaseUri",
        value: MsgSetBaseUri.fromPartial(value)
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgToggleAction",
        value: MsgToggleAction.fromPartial(value)
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeSchemaOwner",
        value: MsgChangeSchemaOwner.fromPartial(value)
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgResyncAttributes",
        value: MsgResyncAttributes.fromPartial(value)
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgShowAttributes",
        value: MsgShowAttributes.fromPartial(value)
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetFeeConfig",
        value: MsgSetFeeConfig.fromPartial(value)
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMintauth",
        value: MsgSetMintauth.fromPartial(value)
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgChangeOrgOwner",
        value: MsgChangeOrgOwner.fromPartial(value)
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetUriRetrievalMethod",
        value: MsgSetUriRetrievalMethod.fromPartial(value)
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginChain",
        value: MsgSetOriginChain.fromPartial(value)
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetOriginContract",
        value: MsgSetOriginContract.fromPartial(value)
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetAttributeOveriding",
        value: MsgSetAttributeOveriding.fromPartial(value)
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgSetMetadataFormat",
        value: MsgSetMetadataFormat.fromPartial(value)
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgCreateActionExecutor",
        value: MsgCreateActionExecutor.fromPartial(value)
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgDeleteActionExecutor",
        value: MsgDeleteActionExecutor.fromPartial(value)
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateSchemaAttribute",
        value: MsgUpdateSchemaAttribute.fromPartial(value)
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/thesixnetwork.sixnft.nftmngr.MsgUpdateAction",
        value: MsgUpdateAction.fromPartial(value)
      };
    }
  }
};