import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import { QueryParamsResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetMintRequestResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryAllMintRequestResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetActionRequestResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryAllActionRequestResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetCollectionOwnerRequestResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryAllCollectionOwnerRequestResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetOracleConfigResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetActionSignerResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryAllActionSignerResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetBindedSignerResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetActionSignerConfigResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryAllActionSignerConfigResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryGetSyncActionSignerResponse } from "./types/sixprotocol/nftoracle/query";
import { QueryAllSyncActionSignerResponse } from "./types/sixprotocol/nftoracle/query";

import { QueryParamsRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetMintRequestRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryAllMintRequestRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetActionRequestRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryAllActionRequestRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetCollectionOwnerRequestRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryAllCollectionOwnerRequestRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetOracleConfigRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetActionSignerRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryAllActionSignerRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetBindedSignerRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetActionSignerConfigRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryAllActionSignerConfigRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryGetSyncActionSignerRequest } from "./types/sixprotocol/nftoracle/query";
import { QueryAllSyncActionSignerRequest } from "./types/sixprotocol/nftoracle/query";


import type {SnakeCasedPropertiesDeep} from 'type-fest';

export type QueryParamsType = Record<string | number, any>;

export type FlattenObject<TValue> = CollapseEntries<CreateObjectEntries<TValue, TValue>>;

type Entry = { key: string; value: unknown };
type EmptyEntry<TValue> = { key: ''; value: TValue };
type ExcludedTypes = Date | Set<unknown> | Map<unknown, unknown>;
type ArrayEncoder = `[${bigint}]`;

type EscapeArrayKey<TKey extends string> = TKey extends `${infer TKeyBefore}.${ArrayEncoder}${infer TKeyAfter}`
  ? EscapeArrayKey<`${TKeyBefore}${ArrayEncoder}${TKeyAfter}`>
  : TKey;

// Transforms entries to one flattened type
type CollapseEntries<TEntry extends Entry> = {
  [E in TEntry as EscapeArrayKey<E['key']>]: E['value'];
};

// Transforms array type to object
type CreateArrayEntry<TValue, TValueInitial> = OmitItself<
  TValue extends unknown[] ? { [k: ArrayEncoder]: TValue[number] } : TValue,
  TValueInitial
>;

// Omit the type that references itself
type OmitItself<TValue, TValueInitial> = TValue extends TValueInitial
  ? EmptyEntry<TValue>
  : OmitExcludedTypes<TValue, TValueInitial>;

// Omit the type that is listed in ExcludedTypes union
type OmitExcludedTypes<TValue, TValueInitial> = TValue extends ExcludedTypes
  ? EmptyEntry<TValue>
  : CreateObjectEntries<TValue, TValueInitial>;

type CreateObjectEntries<TValue, TValueInitial> = TValue extends object
  ? {
      // Checks that Key is of type string
      [TKey in keyof TValue]-?: TKey extends string
        ? // Nested key can be an object, run recursively to the bottom
          CreateArrayEntry<TValue[TKey], TValueInitial> extends infer TNestedValue
          ? TNestedValue extends Entry
            ? TNestedValue['key'] extends ''
              ? {
                  key: TKey;
                  value: TNestedValue['value'];
                }
              :
                  | {
                      key: `${TKey}.${TNestedValue['key']}`;
                      value: TNestedValue['value'];
                    }
                  | {
                      key: TKey;
                      value: TValue[TKey];
                    }
            : never
          : never
        : never;
    }[keyof TValue] // Builds entry for each key
  : EmptyEntry<TValue>;

export type ChangeProtoToJSPrimitives<T extends object> = {
  [key in keyof T]: T[key] extends Uint8Array | Date ? string :  T[key] extends object ? ChangeProtoToJSPrimitives<T[key]>: T[key];
  // ^^^^ This line is used to convert Uint8Array to string, if you want to keep Uint8Array as is, you can remove this line
}

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers ),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    } as AxiosRequestConfig;
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title sixprotocol.nftoracle
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * QueryParams
   *
   * @tags Query
   * @name queryParams
   * @request GET:/thesixnetwork/six-protocol/nftoracle/params
   */
  queryParams = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryParamsResponse>>>({
      path: `/thesixnetwork/six-protocol/nftoracle/params`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryMintRequest
   *
   * @tags Query
   * @name queryMintRequest
   * @request GET:/thesixnetwork/sixnft/nftoracle/mint_request/{id}
   */
  queryMintRequest = (id: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetMintRequestResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/mint_request/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryMintRequestAll
   *
   * @tags Query
   * @name queryMintRequestAll
   * @request GET:/thesixnetwork/sixnft/nftoracle/mint_request
   */
  queryMintRequestAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllMintRequestRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllMintRequestResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/mint_request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryActionOracleRequest
   *
   * @tags Query
   * @name queryActionOracleRequest
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_request/{id}
   */
  queryActionOracleRequest = (id: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetActionRequestResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/action_request/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryActionRequestAll
   *
   * @tags Query
   * @name queryActionRequestAll
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_request
   */
  queryActionRequestAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllActionRequestRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllActionRequestResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/action_request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCollectionOwnerRequest
   *
   * @tags Query
   * @name queryCollectionOwnerRequest
   * @request GET:/thesixnetwork/sixnft/nftoracle/collection_owner_request/{id}
   */
  queryCollectionOwnerRequest = (id: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetCollectionOwnerRequestResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/collection_owner_request/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCollectionOwnerRequestAll
   *
   * @tags Query
   * @name queryCollectionOwnerRequestAll
   * @request GET:/thesixnetwork/sixnft/nftoracle/collection_owner_request
   */
  queryCollectionOwnerRequestAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllCollectionOwnerRequestRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllCollectionOwnerRequestResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/collection_owner_request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryOracleConfig
   *
   * @tags Query
   * @name queryOracleConfig
   * @request GET:/thesixnetwork/sixnft/nftoracle/oracle_config
   */
  queryOracleConfig = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetOracleConfigResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/oracle_config`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryActionSigner
   *
   * @tags Query
   * @name queryActionSigner
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer/{actorAddress}/{ownerAddress}
   */
  queryActionSigner = (actorAddress: string, ownerAddress: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetActionSignerResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer/${actorAddress}/${ownerAddress}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryActionSignerAll
   *
   * @tags Query
   * @name queryActionSignerAll
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer
   */
  queryActionSignerAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllActionSignerRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllActionSignerResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryBindedSigner
   *
   * @tags Query
   * @name queryBindedSigner
   * @request GET:/thesixnetwork/sixnft/nftoracle/binded_signer/{ownerAddress}
   */
  queryBindedSigner = (ownerAddress: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetBindedSignerResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/binded_signer/${ownerAddress}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryActionSignerConfig
   *
   * @tags Query
   * @name queryActionSignerConfig
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer_config/{chain}
   */
  queryActionSignerConfig = (chain: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetActionSignerConfigResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer_config/${chain}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryActionSignerConfigAll
   *
   * @tags Query
   * @name queryActionSignerConfigAll
   * @request GET:/thesixnetwork/sixnft/nftoracle/action_signer_config
   */
  queryActionSignerConfigAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllActionSignerConfigRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllActionSignerConfigResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/action_signer_config`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySyncActionSigner
   *
   * @tags Query
   * @name querySyncActionSigner
   * @request GET:/thesixnetwork/sixnft/nftoracle/sync_action_signer/{id}
   */
  querySyncActionSigner = (id: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetSyncActionSignerResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/sync_action_signer/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySyncActionSignerAll
   *
   * @tags Query
   * @name querySyncActionSignerAll
   * @request GET:/thesixnetwork/sixnft/nftoracle/sync_action_signer
   */
  querySyncActionSignerAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllSyncActionSignerRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllSyncActionSignerResponse>>>({
      path: `/thesixnetwork/sixnft/nftoracle/sync_action_signer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
}