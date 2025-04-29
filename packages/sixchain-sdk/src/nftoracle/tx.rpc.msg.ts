//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateMintRequest, MsgCreateMintRequestResponse, MsgSubmitMintResponse, MsgSubmitMintResponseResponse, MsgCreateActionRequest, MsgCreateActionRequestResponse, MsgSubmitActionResponse, MsgSubmitActionResponseResponse, MsgCreateVerifyCollectionOwnerRequest, MsgCreateVerifyCollectionOwnerRequestResponse, MsgSubmitVerifyCollectionOwner, MsgSubmitVerifyCollectionOwnerResponse, MsgSetMinimumConfirmation, MsgSetMinimumConfirmationResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createMintRequest(request: MsgCreateMintRequest): Promise<MsgCreateMintRequestResponse>;
  submitMintResponse(request: MsgSubmitMintResponse): Promise<MsgSubmitMintResponseResponse>;
  createActionRequest(request: MsgCreateActionRequest): Promise<MsgCreateActionRequestResponse>;
  submitActionResponse(request: MsgSubmitActionResponse): Promise<MsgSubmitActionResponseResponse>;
  createVerifyCollectionOwnerRequest(request: MsgCreateVerifyCollectionOwnerRequest): Promise<MsgCreateVerifyCollectionOwnerRequestResponse>;
  submitVerifyCollectionOwner(request: MsgSubmitVerifyCollectionOwner): Promise<MsgSubmitVerifyCollectionOwnerResponse>;
  setMinimumConfirmation(request: MsgSetMinimumConfirmation): Promise<MsgSetMinimumConfirmationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createMintRequest = this.createMintRequest.bind(this);
    this.submitMintResponse = this.submitMintResponse.bind(this);
    this.createActionRequest = this.createActionRequest.bind(this);
    this.submitActionResponse = this.submitActionResponse.bind(this);
    this.createVerifyCollectionOwnerRequest = this.createVerifyCollectionOwnerRequest.bind(this);
    this.submitVerifyCollectionOwner = this.submitVerifyCollectionOwner.bind(this);
    this.setMinimumConfirmation = this.setMinimumConfirmation.bind(this);
  }
  createMintRequest(request: MsgCreateMintRequest): Promise<MsgCreateMintRequestResponse> {
    const data = MsgCreateMintRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "CreateMintRequest", data);
    return promise.then(data => MsgCreateMintRequestResponse.decode(new _m0.Reader(data)));
  }
  submitMintResponse(request: MsgSubmitMintResponse): Promise<MsgSubmitMintResponseResponse> {
    const data = MsgSubmitMintResponse.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "SubmitMintResponse", data);
    return promise.then(data => MsgSubmitMintResponseResponse.decode(new _m0.Reader(data)));
  }
  createActionRequest(request: MsgCreateActionRequest): Promise<MsgCreateActionRequestResponse> {
    const data = MsgCreateActionRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "CreateActionRequest", data);
    return promise.then(data => MsgCreateActionRequestResponse.decode(new _m0.Reader(data)));
  }
  submitActionResponse(request: MsgSubmitActionResponse): Promise<MsgSubmitActionResponseResponse> {
    const data = MsgSubmitActionResponse.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "SubmitActionResponse", data);
    return promise.then(data => MsgSubmitActionResponseResponse.decode(new _m0.Reader(data)));
  }
  createVerifyCollectionOwnerRequest(request: MsgCreateVerifyCollectionOwnerRequest): Promise<MsgCreateVerifyCollectionOwnerRequestResponse> {
    const data = MsgCreateVerifyCollectionOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "CreateVerifyCollectionOwnerRequest", data);
    return promise.then(data => MsgCreateVerifyCollectionOwnerRequestResponse.decode(new _m0.Reader(data)));
  }
  submitVerifyCollectionOwner(request: MsgSubmitVerifyCollectionOwner): Promise<MsgSubmitVerifyCollectionOwnerResponse> {
    const data = MsgSubmitVerifyCollectionOwner.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "SubmitVerifyCollectionOwner", data);
    return promise.then(data => MsgSubmitVerifyCollectionOwnerResponse.decode(new _m0.Reader(data)));
  }
  setMinimumConfirmation(request: MsgSetMinimumConfirmation): Promise<MsgSetMinimumConfirmationResponse> {
    const data = MsgSetMinimumConfirmation.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixnft.nftoracle.Msg", "SetMinimumConfirmation", data);
    return promise.then(data => MsgSetMinimumConfirmationResponse.decode(new _m0.Reader(data)));
  }
}