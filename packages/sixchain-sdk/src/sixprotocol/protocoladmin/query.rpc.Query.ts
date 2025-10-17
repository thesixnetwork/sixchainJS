//@ts-nocheck
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetAdminRequest, QueryGetAdminResponse, QueryAllAdminRequest, QueryAllAdminResponse, QueryGetGroupRequest, QueryGetGroupResponse, QueryAllGroupRequest, QueryAllGroupResponse, QueryListAdminOfGroupRequest, QueryListAdminOfGroupResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Admin items. */
  admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse>;
  adminAll(request?: QueryAllAdminRequest): Promise<QueryAllAdminResponse>;
  /** Queries a list of Group items. */
  group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse>;
  groupAll(request?: QueryAllGroupRequest): Promise<QueryAllGroupResponse>;
  /** Queries a list of ListAdminOfGroup items. */
  listAdminOfGroup(request: QueryListAdminOfGroupRequest): Promise<QueryListAdminOfGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.admin = this.admin.bind(this);
    this.adminAll = this.adminAll.bind(this);
    this.group = this.group.bind(this);
    this.groupAll = this.groupAll.bind(this);
    this.listAdminOfGroup = this.listAdminOfGroup.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sixprotocol.protocoladmin.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
    const data = QueryGetAdminRequest.encode(request).finish();
    const promise = this.rpc.request("sixprotocol.protocoladmin.Query", "Admin", data);
    return promise.then(data => QueryGetAdminResponse.decode(new _m0.Reader(data)));
  }
  adminAll(request: QueryAllAdminRequest = {
    pagination: undefined
  }): Promise<QueryAllAdminResponse> {
    const data = QueryAllAdminRequest.encode(request).finish();
    const promise = this.rpc.request("sixprotocol.protocoladmin.Query", "AdminAll", data);
    return promise.then(data => QueryAllAdminResponse.decode(new _m0.Reader(data)));
  }
  group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> {
    const data = QueryGetGroupRequest.encode(request).finish();
    const promise = this.rpc.request("sixprotocol.protocoladmin.Query", "Group", data);
    return promise.then(data => QueryGetGroupResponse.decode(new _m0.Reader(data)));
  }
  groupAll(request: QueryAllGroupRequest = {
    pagination: undefined
  }): Promise<QueryAllGroupResponse> {
    const data = QueryAllGroupRequest.encode(request).finish();
    const promise = this.rpc.request("sixprotocol.protocoladmin.Query", "GroupAll", data);
    return promise.then(data => QueryAllGroupResponse.decode(new _m0.Reader(data)));
  }
  listAdminOfGroup(request: QueryListAdminOfGroupRequest): Promise<QueryListAdminOfGroupResponse> {
    const data = QueryListAdminOfGroupRequest.encode(request).finish();
    const promise = this.rpc.request("sixprotocol.protocoladmin.Query", "ListAdminOfGroup", data);
    return promise.then(data => QueryListAdminOfGroupResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
      return queryService.admin(request);
    },
    adminAll(request?: QueryAllAdminRequest): Promise<QueryAllAdminResponse> {
      return queryService.adminAll(request);
    },
    group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> {
      return queryService.group(request);
    },
    groupAll(request?: QueryAllGroupRequest): Promise<QueryAllGroupResponse> {
      return queryService.groupAll(request);
    },
    listAdminOfGroup(request: QueryListAdminOfGroupRequest): Promise<QueryListAdminOfGroupResponse> {
      return queryService.listAdminOfGroup(request);
    }
  };
};