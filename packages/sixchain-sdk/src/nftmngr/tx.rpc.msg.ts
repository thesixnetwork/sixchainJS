//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateNFTSchema, MsgCreateNFTSchemaResponse, MsgCreateMetadata, MsgCreateMetadataResponse, MsgPerformActionByAdmin, MsgPerformActionByAdminResponse, MsgAddAttribute, MsgAddAttributeResponse, MsgAddAction, MsgAddActionResponse, MsgSetBaseUri, MsgSetBaseUriResponse, MsgToggleAction, MsgToggleActionResponse, MsgChangeSchemaOwner, MsgChangeSchemaOwnerResponse, MsgResyncAttributes, MsgResyncAttributesResponse, MsgShowAttributes, MsgShowAttributesResponse, MsgSetFeeConfig, MsgSetFeeConfigResponse, MsgSetMintauth, MsgSetMintauthResponse, MsgChangeOrgOwner, MsgChangeOrgOwnerResponse, MsgSetUriRetrievalMethod, MsgSetUriRetrievalMethodResponse, MsgSetOriginChain, MsgSetOriginChainResponse, MsgSetOriginContract, MsgSetOriginContractResponse, MsgSetAttributeOveriding, MsgSetAttributeOveridingResponse, MsgSetMetadataFormat, MsgSetMetadataFormatResponse, MsgCreateActionExecutor, MsgCreateActionExecutorResponse, MsgDeleteActionExecutor, MsgDeleteActionExecutorResponse, MsgUpdateSchemaAttribute, MsgUpdateSchemaAttributeResponse, MsgUpdateAction, MsgUpdateActionResponse, MsgProposalVirtualSchema, MsgProposalVirtualSchemaResponse, MsgPerformVirtualAction, MsgPerformVirtualActionResponse, MsgVoteVirtualSchemaProposal, MsgVoteVirtualSchemaProposalResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createNFTSchema(request: MsgCreateNFTSchema): Promise<MsgCreateNFTSchemaResponse>;
  createMetadata(request: MsgCreateMetadata): Promise<MsgCreateMetadataResponse>;
  performActionByAdmin(request: MsgPerformActionByAdmin): Promise<MsgPerformActionByAdminResponse>;
  addAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse>;
  addAction(request: MsgAddAction): Promise<MsgAddActionResponse>;
  setBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse>;
  toggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse>;
  changeSchemaOwner(request: MsgChangeSchemaOwner): Promise<MsgChangeSchemaOwnerResponse>;
  resyncAttributes(request: MsgResyncAttributes): Promise<MsgResyncAttributesResponse>;
  showAttributes(request: MsgShowAttributes): Promise<MsgShowAttributesResponse>;
  setFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse>;
  setMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse>;
  changeOrgOwner(request: MsgChangeOrgOwner): Promise<MsgChangeOrgOwnerResponse>;
  setUriRetrievalMethod(request: MsgSetUriRetrievalMethod): Promise<MsgSetUriRetrievalMethodResponse>;
  setOriginChain(request: MsgSetOriginChain): Promise<MsgSetOriginChainResponse>;
  setOriginContract(request: MsgSetOriginContract): Promise<MsgSetOriginContractResponse>;
  setAttributeOveriding(request: MsgSetAttributeOveriding): Promise<MsgSetAttributeOveridingResponse>;
  setMetadataFormat(request: MsgSetMetadataFormat): Promise<MsgSetMetadataFormatResponse>;
  createActionExecutor(request: MsgCreateActionExecutor): Promise<MsgCreateActionExecutorResponse>;
  deleteActionExecutor(request: MsgDeleteActionExecutor): Promise<MsgDeleteActionExecutorResponse>;
  updateSchemaAttribute(request: MsgUpdateSchemaAttribute): Promise<MsgUpdateSchemaAttributeResponse>;
  updateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse>;
  proposalVirtualSchema(request: MsgProposalVirtualSchema): Promise<MsgProposalVirtualSchemaResponse>;
  performVirtualAction(request: MsgPerformVirtualAction): Promise<MsgPerformVirtualActionResponse>;
  voteVirtualSchemaProposal(request: MsgVoteVirtualSchemaProposal): Promise<MsgVoteVirtualSchemaProposalResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createNFTSchema = this.createNFTSchema.bind(this);
    this.createMetadata = this.createMetadata.bind(this);
    this.performActionByAdmin = this.performActionByAdmin.bind(this);
    this.addAttribute = this.addAttribute.bind(this);
    this.addAction = this.addAction.bind(this);
    this.setBaseUri = this.setBaseUri.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
    this.changeSchemaOwner = this.changeSchemaOwner.bind(this);
    this.resyncAttributes = this.resyncAttributes.bind(this);
    this.showAttributes = this.showAttributes.bind(this);
    this.setFeeConfig = this.setFeeConfig.bind(this);
    this.setMintauth = this.setMintauth.bind(this);
    this.changeOrgOwner = this.changeOrgOwner.bind(this);
    this.setUriRetrievalMethod = this.setUriRetrievalMethod.bind(this);
    this.setOriginChain = this.setOriginChain.bind(this);
    this.setOriginContract = this.setOriginContract.bind(this);
    this.setAttributeOveriding = this.setAttributeOveriding.bind(this);
    this.setMetadataFormat = this.setMetadataFormat.bind(this);
    this.createActionExecutor = this.createActionExecutor.bind(this);
    this.deleteActionExecutor = this.deleteActionExecutor.bind(this);
    this.updateSchemaAttribute = this.updateSchemaAttribute.bind(this);
    this.updateAction = this.updateAction.bind(this);
    this.proposalVirtualSchema = this.proposalVirtualSchema.bind(this);
    this.performVirtualAction = this.performVirtualAction.bind(this);
    this.voteVirtualSchemaProposal = this.voteVirtualSchemaProposal.bind(this);
  }
  createNFTSchema(request: MsgCreateNFTSchema): Promise<MsgCreateNFTSchemaResponse> {
    const data = MsgCreateNFTSchema.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "CreateNFTSchema", data);
    return promise.then(data => MsgCreateNFTSchemaResponse.decode(new _m0.Reader(data)));
  }
  createMetadata(request: MsgCreateMetadata): Promise<MsgCreateMetadataResponse> {
    const data = MsgCreateMetadata.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "CreateMetadata", data);
    return promise.then(data => MsgCreateMetadataResponse.decode(new _m0.Reader(data)));
  }
  performActionByAdmin(request: MsgPerformActionByAdmin): Promise<MsgPerformActionByAdminResponse> {
    const data = MsgPerformActionByAdmin.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "PerformActionByAdmin", data);
    return promise.then(data => MsgPerformActionByAdminResponse.decode(new _m0.Reader(data)));
  }
  addAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse> {
    const data = MsgAddAttribute.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "AddAttribute", data);
    return promise.then(data => MsgAddAttributeResponse.decode(new _m0.Reader(data)));
  }
  addAction(request: MsgAddAction): Promise<MsgAddActionResponse> {
    const data = MsgAddAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "AddAction", data);
    return promise.then(data => MsgAddActionResponse.decode(new _m0.Reader(data)));
  }
  setBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse> {
    const data = MsgSetBaseUri.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetBaseUri", data);
    return promise.then(data => MsgSetBaseUriResponse.decode(new _m0.Reader(data)));
  }
  toggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse> {
    const data = MsgToggleAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "ToggleAction", data);
    return promise.then(data => MsgToggleActionResponse.decode(new _m0.Reader(data)));
  }
  changeSchemaOwner(request: MsgChangeSchemaOwner): Promise<MsgChangeSchemaOwnerResponse> {
    const data = MsgChangeSchemaOwner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "ChangeSchemaOwner", data);
    return promise.then(data => MsgChangeSchemaOwnerResponse.decode(new _m0.Reader(data)));
  }
  resyncAttributes(request: MsgResyncAttributes): Promise<MsgResyncAttributesResponse> {
    const data = MsgResyncAttributes.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "ResyncAttributes", data);
    return promise.then(data => MsgResyncAttributesResponse.decode(new _m0.Reader(data)));
  }
  showAttributes(request: MsgShowAttributes): Promise<MsgShowAttributesResponse> {
    const data = MsgShowAttributes.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "ShowAttributes", data);
    return promise.then(data => MsgShowAttributesResponse.decode(new _m0.Reader(data)));
  }
  setFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse> {
    const data = MsgSetFeeConfig.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetFeeConfig", data);
    return promise.then(data => MsgSetFeeConfigResponse.decode(new _m0.Reader(data)));
  }
  setMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse> {
    const data = MsgSetMintauth.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetMintauth", data);
    return promise.then(data => MsgSetMintauthResponse.decode(new _m0.Reader(data)));
  }
  changeOrgOwner(request: MsgChangeOrgOwner): Promise<MsgChangeOrgOwnerResponse> {
    const data = MsgChangeOrgOwner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "ChangeOrgOwner", data);
    return promise.then(data => MsgChangeOrgOwnerResponse.decode(new _m0.Reader(data)));
  }
  setUriRetrievalMethod(request: MsgSetUriRetrievalMethod): Promise<MsgSetUriRetrievalMethodResponse> {
    const data = MsgSetUriRetrievalMethod.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetUriRetrievalMethod", data);
    return promise.then(data => MsgSetUriRetrievalMethodResponse.decode(new _m0.Reader(data)));
  }
  setOriginChain(request: MsgSetOriginChain): Promise<MsgSetOriginChainResponse> {
    const data = MsgSetOriginChain.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetOriginChain", data);
    return promise.then(data => MsgSetOriginChainResponse.decode(new _m0.Reader(data)));
  }
  setOriginContract(request: MsgSetOriginContract): Promise<MsgSetOriginContractResponse> {
    const data = MsgSetOriginContract.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetOriginContract", data);
    return promise.then(data => MsgSetOriginContractResponse.decode(new _m0.Reader(data)));
  }
  setAttributeOveriding(request: MsgSetAttributeOveriding): Promise<MsgSetAttributeOveridingResponse> {
    const data = MsgSetAttributeOveriding.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetAttributeOveriding", data);
    return promise.then(data => MsgSetAttributeOveridingResponse.decode(new _m0.Reader(data)));
  }
  setMetadataFormat(request: MsgSetMetadataFormat): Promise<MsgSetMetadataFormatResponse> {
    const data = MsgSetMetadataFormat.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "SetMetadataFormat", data);
    return promise.then(data => MsgSetMetadataFormatResponse.decode(new _m0.Reader(data)));
  }
  createActionExecutor(request: MsgCreateActionExecutor): Promise<MsgCreateActionExecutorResponse> {
    const data = MsgCreateActionExecutor.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "CreateActionExecutor", data);
    return promise.then(data => MsgCreateActionExecutorResponse.decode(new _m0.Reader(data)));
  }
  deleteActionExecutor(request: MsgDeleteActionExecutor): Promise<MsgDeleteActionExecutorResponse> {
    const data = MsgDeleteActionExecutor.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "DeleteActionExecutor", data);
    return promise.then(data => MsgDeleteActionExecutorResponse.decode(new _m0.Reader(data)));
  }
  updateSchemaAttribute(request: MsgUpdateSchemaAttribute): Promise<MsgUpdateSchemaAttributeResponse> {
    const data = MsgUpdateSchemaAttribute.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "UpdateSchemaAttribute", data);
    return promise.then(data => MsgUpdateSchemaAttributeResponse.decode(new _m0.Reader(data)));
  }
  updateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse> {
    const data = MsgUpdateAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "UpdateAction", data);
    return promise.then(data => MsgUpdateActionResponse.decode(new _m0.Reader(data)));
  }
  proposalVirtualSchema(request: MsgProposalVirtualSchema): Promise<MsgProposalVirtualSchemaResponse> {
    const data = MsgProposalVirtualSchema.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "ProposalVirtualSchema", data);
    return promise.then(data => MsgProposalVirtualSchemaResponse.decode(new _m0.Reader(data)));
  }
  performVirtualAction(request: MsgPerformVirtualAction): Promise<MsgPerformVirtualActionResponse> {
    const data = MsgPerformVirtualAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "PerformVirtualAction", data);
    return promise.then(data => MsgPerformVirtualActionResponse.decode(new _m0.Reader(data)));
  }
  voteVirtualSchemaProposal(request: MsgVoteVirtualSchemaProposal): Promise<MsgVoteVirtualSchemaProposalResponse> {
    const data = MsgVoteVirtualSchemaProposal.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.nftmngr.Msg", "VoteVirtualSchemaProposal", data);
    return promise.then(data => MsgVoteVirtualSchemaProposalResponse.decode(new _m0.Reader(data)));
  }
}