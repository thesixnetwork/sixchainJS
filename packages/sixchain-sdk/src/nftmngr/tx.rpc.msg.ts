//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateNFTSchema, MsgCreateNFTSchemaResponse, MsgCreateMetadata, MsgCreateMetadataResponse, MsgPerformActionByAdmin, MsgPerformActionByAdminResponse, MsgAddAttribute, MsgAddAttributeResponse, MsgAddAction, MsgAddActionResponse, MsgSetNFTAttribute, MsgSetNFTAttributeResponse, MsgSetBaseUri, MsgSetBaseUriResponse, MsgToggleAction, MsgToggleActionResponse, MsgChangeSchemaOwner, MsgChangeSchemaOwnerResponse, MsgAddSystemActioner, MsgAddSystemActionerResponse, MsgRemoveSystemActioner, MsgRemoveSystemActionerResponse, MsgResyncAttributes, MsgResyncAttributesResponse, MsgShowAttributes, MsgShowAttributesResponse, MsgSetFeeConfig, MsgSetFeeConfigResponse, MsgSetMintauth, MsgSetMintauthResponse, MsgChangeOrgOwner, MsgChangeOrgOwnerResponse, MsgCreateMultiMetadata, MsgCreateMultiMetadataResponse, MsgPerformMultiTokenAction, MsgPerformMultiTokenActionResponse, MsgSetUriRetrievalMethod, MsgSetUriRetrievalMethodResponse, MsgSetOriginChain, MsgSetOriginChainResponse, MsgSetOriginContract, MsgSetOriginContractResponse, MsgSetAttributeOveriding, MsgSetAttributeOveridingResponse, MsgSetMetadataFormat, MsgSetMetadataFormatResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createNFTSchema(request: MsgCreateNFTSchema): Promise<MsgCreateNFTSchemaResponse>;
  createMetadata(request: MsgCreateMetadata): Promise<MsgCreateMetadataResponse>;
  performActionByAdmin(request: MsgPerformActionByAdmin): Promise<MsgPerformActionByAdminResponse>;
  addAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse>;
  addAction(request: MsgAddAction): Promise<MsgAddActionResponse>;
  setNFTAttribute(request: MsgSetNFTAttribute): Promise<MsgSetNFTAttributeResponse>;
  setBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse>;
  toggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse>;
  changeSchemaOwner(request: MsgChangeSchemaOwner): Promise<MsgChangeSchemaOwnerResponse>;
  addSystemActioner(request: MsgAddSystemActioner): Promise<MsgAddSystemActionerResponse>;
  removeSystemActioner(request: MsgRemoveSystemActioner): Promise<MsgRemoveSystemActionerResponse>;
  resyncAttributes(request: MsgResyncAttributes): Promise<MsgResyncAttributesResponse>;
  showAttributes(request: MsgShowAttributes): Promise<MsgShowAttributesResponse>;
  setFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse>;
  setMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse>;
  changeOrgOwner(request: MsgChangeOrgOwner): Promise<MsgChangeOrgOwnerResponse>;
  createMultiMetadata(request: MsgCreateMultiMetadata): Promise<MsgCreateMultiMetadataResponse>;
  performMultiTokenAction(request: MsgPerformMultiTokenAction): Promise<MsgPerformMultiTokenActionResponse>;
  setUriRetrievalMethod(request: MsgSetUriRetrievalMethod): Promise<MsgSetUriRetrievalMethodResponse>;
  setOriginChain(request: MsgSetOriginChain): Promise<MsgSetOriginChainResponse>;
  setOriginContract(request: MsgSetOriginContract): Promise<MsgSetOriginContractResponse>;
  setAttributeOveriding(request: MsgSetAttributeOveriding): Promise<MsgSetAttributeOveridingResponse>;
  setMetadataFormat(request: MsgSetMetadataFormat): Promise<MsgSetMetadataFormatResponse>;
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
    this.setNFTAttribute = this.setNFTAttribute.bind(this);
    this.setBaseUri = this.setBaseUri.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
    this.changeSchemaOwner = this.changeSchemaOwner.bind(this);
    this.addSystemActioner = this.addSystemActioner.bind(this);
    this.removeSystemActioner = this.removeSystemActioner.bind(this);
    this.resyncAttributes = this.resyncAttributes.bind(this);
    this.showAttributes = this.showAttributes.bind(this);
    this.setFeeConfig = this.setFeeConfig.bind(this);
    this.setMintauth = this.setMintauth.bind(this);
    this.changeOrgOwner = this.changeOrgOwner.bind(this);
    this.createMultiMetadata = this.createMultiMetadata.bind(this);
    this.performMultiTokenAction = this.performMultiTokenAction.bind(this);
    this.setUriRetrievalMethod = this.setUriRetrievalMethod.bind(this);
    this.setOriginChain = this.setOriginChain.bind(this);
    this.setOriginContract = this.setOriginContract.bind(this);
    this.setAttributeOveriding = this.setAttributeOveriding.bind(this);
    this.setMetadataFormat = this.setMetadataFormat.bind(this);
  }
  createNFTSchema(request: MsgCreateNFTSchema): Promise<MsgCreateNFTSchemaResponse> {
    const data = MsgCreateNFTSchema.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "CreateNFTSchema", data);
    return promise.then(data => MsgCreateNFTSchemaResponse.decode(new _m0.Reader(data)));
  }
  createMetadata(request: MsgCreateMetadata): Promise<MsgCreateMetadataResponse> {
    const data = MsgCreateMetadata.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "CreateMetadata", data);
    return promise.then(data => MsgCreateMetadataResponse.decode(new _m0.Reader(data)));
  }
  performActionByAdmin(request: MsgPerformActionByAdmin): Promise<MsgPerformActionByAdminResponse> {
    const data = MsgPerformActionByAdmin.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "PerformActionByAdmin", data);
    return promise.then(data => MsgPerformActionByAdminResponse.decode(new _m0.Reader(data)));
  }
  addAttribute(request: MsgAddAttribute): Promise<MsgAddAttributeResponse> {
    const data = MsgAddAttribute.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "AddAttribute", data);
    return promise.then(data => MsgAddAttributeResponse.decode(new _m0.Reader(data)));
  }
  addAction(request: MsgAddAction): Promise<MsgAddActionResponse> {
    const data = MsgAddAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "AddAction", data);
    return promise.then(data => MsgAddActionResponse.decode(new _m0.Reader(data)));
  }
  setNFTAttribute(request: MsgSetNFTAttribute): Promise<MsgSetNFTAttributeResponse> {
    const data = MsgSetNFTAttribute.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetNFTAttribute", data);
    return promise.then(data => MsgSetNFTAttributeResponse.decode(new _m0.Reader(data)));
  }
  setBaseUri(request: MsgSetBaseUri): Promise<MsgSetBaseUriResponse> {
    const data = MsgSetBaseUri.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetBaseUri", data);
    return promise.then(data => MsgSetBaseUriResponse.decode(new _m0.Reader(data)));
  }
  toggleAction(request: MsgToggleAction): Promise<MsgToggleActionResponse> {
    const data = MsgToggleAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "ToggleAction", data);
    return promise.then(data => MsgToggleActionResponse.decode(new _m0.Reader(data)));
  }
  changeSchemaOwner(request: MsgChangeSchemaOwner): Promise<MsgChangeSchemaOwnerResponse> {
    const data = MsgChangeSchemaOwner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "ChangeSchemaOwner", data);
    return promise.then(data => MsgChangeSchemaOwnerResponse.decode(new _m0.Reader(data)));
  }
  addSystemActioner(request: MsgAddSystemActioner): Promise<MsgAddSystemActionerResponse> {
    const data = MsgAddSystemActioner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "AddSystemActioner", data);
    return promise.then(data => MsgAddSystemActionerResponse.decode(new _m0.Reader(data)));
  }
  removeSystemActioner(request: MsgRemoveSystemActioner): Promise<MsgRemoveSystemActionerResponse> {
    const data = MsgRemoveSystemActioner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "RemoveSystemActioner", data);
    return promise.then(data => MsgRemoveSystemActionerResponse.decode(new _m0.Reader(data)));
  }
  resyncAttributes(request: MsgResyncAttributes): Promise<MsgResyncAttributesResponse> {
    const data = MsgResyncAttributes.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "ResyncAttributes", data);
    return promise.then(data => MsgResyncAttributesResponse.decode(new _m0.Reader(data)));
  }
  showAttributes(request: MsgShowAttributes): Promise<MsgShowAttributesResponse> {
    const data = MsgShowAttributes.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "ShowAttributes", data);
    return promise.then(data => MsgShowAttributesResponse.decode(new _m0.Reader(data)));
  }
  setFeeConfig(request: MsgSetFeeConfig): Promise<MsgSetFeeConfigResponse> {
    const data = MsgSetFeeConfig.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetFeeConfig", data);
    return promise.then(data => MsgSetFeeConfigResponse.decode(new _m0.Reader(data)));
  }
  setMintauth(request: MsgSetMintauth): Promise<MsgSetMintauthResponse> {
    const data = MsgSetMintauth.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetMintauth", data);
    return promise.then(data => MsgSetMintauthResponse.decode(new _m0.Reader(data)));
  }
  changeOrgOwner(request: MsgChangeOrgOwner): Promise<MsgChangeOrgOwnerResponse> {
    const data = MsgChangeOrgOwner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "ChangeOrgOwner", data);
    return promise.then(data => MsgChangeOrgOwnerResponse.decode(new _m0.Reader(data)));
  }
  createMultiMetadata(request: MsgCreateMultiMetadata): Promise<MsgCreateMultiMetadataResponse> {
    const data = MsgCreateMultiMetadata.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "CreateMultiMetadata", data);
    return promise.then(data => MsgCreateMultiMetadataResponse.decode(new _m0.Reader(data)));
  }
  performMultiTokenAction(request: MsgPerformMultiTokenAction): Promise<MsgPerformMultiTokenActionResponse> {
    const data = MsgPerformMultiTokenAction.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "PerformMultiTokenAction", data);
    return promise.then(data => MsgPerformMultiTokenActionResponse.decode(new _m0.Reader(data)));
  }
  setUriRetrievalMethod(request: MsgSetUriRetrievalMethod): Promise<MsgSetUriRetrievalMethodResponse> {
    const data = MsgSetUriRetrievalMethod.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetUriRetrievalMethod", data);
    return promise.then(data => MsgSetUriRetrievalMethodResponse.decode(new _m0.Reader(data)));
  }
  setOriginChain(request: MsgSetOriginChain): Promise<MsgSetOriginChainResponse> {
    const data = MsgSetOriginChain.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetOriginChain", data);
    return promise.then(data => MsgSetOriginChainResponse.decode(new _m0.Reader(data)));
  }
  setOriginContract(request: MsgSetOriginContract): Promise<MsgSetOriginContractResponse> {
    const data = MsgSetOriginContract.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetOriginContract", data);
    return promise.then(data => MsgSetOriginContractResponse.decode(new _m0.Reader(data)));
  }
  setAttributeOveriding(request: MsgSetAttributeOveriding): Promise<MsgSetAttributeOveridingResponse> {
    const data = MsgSetAttributeOveriding.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetAttributeOveriding", data);
    return promise.then(data => MsgSetAttributeOveridingResponse.decode(new _m0.Reader(data)));
  }
  setMetadataFormat(request: MsgSetMetadataFormat): Promise<MsgSetMetadataFormatResponse> {
    const data = MsgSetMetadataFormat.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftmngr.Msg", "SetMetadataFormat", data);
    return promise.then(data => MsgSetMetadataFormatResponse.decode(new _m0.Reader(data)));
  }
}