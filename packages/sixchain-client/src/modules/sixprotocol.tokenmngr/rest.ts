import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import { QueryParamsResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetTokenResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryAllTokenResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetMintpermResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryAllMintpermResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetTokenBurnResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryAllTokenBurnResponse } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetOptionsResponse } from "./types/sixprotocol/tokenmngr/query";

import { QueryParamsRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetTokenRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryAllTokenRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetMintpermRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryAllMintpermRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetTokenBurnRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryAllTokenBurnRequest } from "./types/sixprotocol/tokenmngr/query";
import { QueryGetOptionsRequest } from "./types/sixprotocol/tokenmngr/query";


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
 * @title sixprotocol.tokenmngr
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * QueryParams
   *
   * @tags Query
   * @name queryParams
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/params
   */
  queryParams = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryParamsResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/params`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryToken
   *
   * @tags Query
   * @name queryToken
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/token/{name}
   */
  queryToken = (name: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetTokenResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/token/${name}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryTokenAll
   *
   * @tags Query
   * @name queryTokenAll
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/token
   */
  queryTokenAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllTokenRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllTokenResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/token`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryMintperm
   *
   * @tags Query
   * @name queryMintperm
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/mintperm/{token}/{address}
   */
  queryMintperm = (token: string, address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetMintpermResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/mintperm/${token}/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryMintpermAll
   *
   * @tags Query
   * @name queryMintpermAll
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/mintperm
   */
  queryMintpermAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllMintpermRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllMintpermResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/mintperm`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryTokenBurn
   *
   * @tags Query
   * @name queryTokenBurn
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/token_burn/{index}
   */
  queryTokenBurn = (index: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetTokenBurnResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/token_burn/${index}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryTokenBurnAll
   *
   * @tags Query
   * @name queryTokenBurnAll
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/token_burn
   */
  queryTokenBurnAll = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllTokenBurnRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAllTokenBurnResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/token_burn`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryOptions
   *
   * @tags Query
   * @name queryOptions
   * @request GET:/thesixnetwork/six-protocol/tokenmngr/options
   */
  queryOptions = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryGetOptionsResponse>>>({
      path: `/thesixnetwork/six-protocol/tokenmngr/options`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
}