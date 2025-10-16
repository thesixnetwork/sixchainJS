//@ts-nocheck
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgCreateGroup,
  MsgCreateGroupResponse,
  MsgUpdateGroup,
  MsgUpdateGroupResponse,
  MsgDeleteGroup,
  MsgDeleteGroupResponse,
  MsgAddAdminToGroup,
  MsgAddAdminToGroupResponse,
  MsgRemoveAdminFromGroup,
  MsgRemoveAdminFromGroupResponse,
} from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  updateGroup(request: MsgUpdateGroup): Promise<MsgUpdateGroupResponse>;
  deleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse>;
  addAdminToGroup(
    request: MsgAddAdminToGroup
  ): Promise<MsgAddAdminToGroupResponse>;
  removeAdminFromGroup(
    request: MsgRemoveAdminFromGroup
  ): Promise<MsgRemoveAdminFromGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.updateGroup = this.updateGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.addAdminToGroup = this.addAdminToGroup.bind(this);
    this.removeAdminFromGroup = this.removeAdminFromGroup.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "sixprotocol.protocoladmin.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }
  createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request(
      "sixprotocol.protocoladmin.Msg",
      "CreateGroup",
      data
    );
    return promise.then((data) =>
      MsgCreateGroupResponse.decode(new _m0.Reader(data))
    );
  }
  updateGroup(request: MsgUpdateGroup): Promise<MsgUpdateGroupResponse> {
    const data = MsgUpdateGroup.encode(request).finish();
    const promise = this.rpc.request(
      "sixprotocol.protocoladmin.Msg",
      "UpdateGroup",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupResponse.decode(new _m0.Reader(data))
    );
  }
  deleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse> {
    const data = MsgDeleteGroup.encode(request).finish();
    const promise = this.rpc.request(
      "sixprotocol.protocoladmin.Msg",
      "DeleteGroup",
      data
    );
    return promise.then((data) =>
      MsgDeleteGroupResponse.decode(new _m0.Reader(data))
    );
  }
  addAdminToGroup(
    request: MsgAddAdminToGroup
  ): Promise<MsgAddAdminToGroupResponse> {
    const data = MsgAddAdminToGroup.encode(request).finish();
    const promise = this.rpc.request(
      "sixprotocol.protocoladmin.Msg",
      "AddAdminToGroup",
      data
    );
    return promise.then((data) =>
      MsgAddAdminToGroupResponse.decode(new _m0.Reader(data))
    );
  }
  removeAdminFromGroup(
    request: MsgRemoveAdminFromGroup
  ): Promise<MsgRemoveAdminFromGroupResponse> {
    const data = MsgRemoveAdminFromGroup.encode(request).finish();
    const promise = this.rpc.request(
      "sixprotocol.protocoladmin.Msg",
      "RemoveAdminFromGroup",
      data
    );
    return promise.then((data) =>
      MsgRemoveAdminFromGroupResponse.decode(new _m0.Reader(data))
    );
  }
}
