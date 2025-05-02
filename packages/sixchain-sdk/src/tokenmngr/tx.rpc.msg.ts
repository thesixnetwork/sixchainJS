//@ts-nocheck
import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateToken, MsgCreateTokenResponse, MsgUpdateToken, MsgUpdateTokenResponse, MsgDeleteToken, MsgDeleteTokenResponse, MsgCreateMintperm, MsgCreateMintpermResponse, MsgUpdateMintperm, MsgUpdateMintpermResponse, MsgDeleteMintperm, MsgDeleteMintpermResponse, MsgMint, MsgMintResponse, MsgCreateOptions, MsgCreateOptionsResponse, MsgUpdateOptions, MsgUpdateOptionsResponse, MsgDeleteOptions, MsgDeleteOptionsResponse, MsgBurn, MsgBurnResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  updateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  deleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse>;
  createMintperm(request: MsgCreateMintperm): Promise<MsgCreateMintpermResponse>;
  updateMintperm(request: MsgUpdateMintperm): Promise<MsgUpdateMintpermResponse>;
  deleteMintperm(request: MsgDeleteMintperm): Promise<MsgDeleteMintpermResponse>;
  mint(request: MsgMint): Promise<MsgMintResponse>;
  createOptions(request: MsgCreateOptions): Promise<MsgCreateOptionsResponse>;
  updateOptions(request: MsgUpdateOptions): Promise<MsgUpdateOptionsResponse>;
  deleteOptions(request: MsgDeleteOptions): Promise<MsgDeleteOptionsResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createToken = this.createToken.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
    this.createMintperm = this.createMintperm.bind(this);
    this.updateMintperm = this.updateMintperm.bind(this);
    this.deleteMintperm = this.deleteMintperm.bind(this);
    this.mint = this.mint.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.burn = this.burn.bind(this);
  }
  createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "CreateToken", data);
    return promise.then(data => MsgCreateTokenResponse.decode(new _m0.Reader(data)));
  }
  updateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "UpdateToken", data);
    return promise.then(data => MsgUpdateTokenResponse.decode(new _m0.Reader(data)));
  }
  deleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse> {
    const data = MsgDeleteToken.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "DeleteToken", data);
    return promise.then(data => MsgDeleteTokenResponse.decode(new _m0.Reader(data)));
  }
  createMintperm(request: MsgCreateMintperm): Promise<MsgCreateMintpermResponse> {
    const data = MsgCreateMintperm.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "CreateMintperm", data);
    return promise.then(data => MsgCreateMintpermResponse.decode(new _m0.Reader(data)));
  }
  updateMintperm(request: MsgUpdateMintperm): Promise<MsgUpdateMintpermResponse> {
    const data = MsgUpdateMintperm.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "UpdateMintperm", data);
    return promise.then(data => MsgUpdateMintpermResponse.decode(new _m0.Reader(data)));
  }
  deleteMintperm(request: MsgDeleteMintperm): Promise<MsgDeleteMintpermResponse> {
    const data = MsgDeleteMintperm.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "DeleteMintperm", data);
    return promise.then(data => MsgDeleteMintpermResponse.decode(new _m0.Reader(data)));
  }
  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }
  createOptions(request: MsgCreateOptions): Promise<MsgCreateOptionsResponse> {
    const data = MsgCreateOptions.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "CreateOptions", data);
    return promise.then(data => MsgCreateOptionsResponse.decode(new _m0.Reader(data)));
  }
  updateOptions(request: MsgUpdateOptions): Promise<MsgUpdateOptionsResponse> {
    const data = MsgUpdateOptions.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "UpdateOptions", data);
    return promise.then(data => MsgUpdateOptionsResponse.decode(new _m0.Reader(data)));
  }
  deleteOptions(request: MsgDeleteOptions): Promise<MsgDeleteOptionsResponse> {
    const data = MsgDeleteOptions.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "DeleteOptions", data);
    return promise.then(data => MsgDeleteOptionsResponse.decode(new _m0.Reader(data)));
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("thesixnetwork.sixprotocol.tokenmngr.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }
}