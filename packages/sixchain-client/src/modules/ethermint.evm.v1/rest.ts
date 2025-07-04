import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import { QueryAccountResponse } from "./types/ethermint/evm/v1/query";
import { QueryCosmosAccountResponse } from "./types/ethermint/evm/v1/query";
import { QueryValidatorAccountResponse } from "./types/ethermint/evm/v1/query";
import { QueryBalanceResponse } from "./types/ethermint/evm/v1/query";
import { QueryStorageResponse } from "./types/ethermint/evm/v1/query";
import { QueryCodeResponse } from "./types/ethermint/evm/v1/query";
import { QueryParamsResponse } from "./types/ethermint/evm/v1/query";
import { MsgEthereumTxResponse } from "./types/ethermint/evm/v1/query";
import { MsgEthereumTxResponse } from "./types/ethermint/evm/v1/query";
import { EstimateGasResponse } from "./types/ethermint/evm/v1/query";
import { EstimateGasResponse } from "./types/ethermint/evm/v1/query";
import { QueryTraceTxResponse } from "./types/ethermint/evm/v1/query";
import { QueryTraceBlockResponse } from "./types/ethermint/evm/v1/query";
import { QueryBaseFeeResponse } from "./types/ethermint/evm/v1/query";

import { QueryAccountRequest } from "./types/ethermint/evm/v1/query";
import { QueryCosmosAccountRequest } from "./types/ethermint/evm/v1/query";
import { QueryValidatorAccountRequest } from "./types/ethermint/evm/v1/query";
import { QueryBalanceRequest } from "./types/ethermint/evm/v1/query";
import { QueryStorageRequest } from "./types/ethermint/evm/v1/query";
import { QueryCodeRequest } from "./types/ethermint/evm/v1/query";
import { QueryParamsRequest } from "./types/ethermint/evm/v1/query";
import { EthCallRequest } from "./types/ethermint/evm/v1/query";
import { EthCallWithOverrideRequest } from "./types/ethermint/evm/v1/query";
import { EthCallWithOverrideRequest } from "./types/ethermint/evm/v1/query";
import { EthCallRequest } from "./types/ethermint/evm/v1/query";
import { QueryTraceTxRequest } from "./types/ethermint/evm/v1/query";
import { QueryTraceBlockRequest } from "./types/ethermint/evm/v1/query";
import { QueryBaseFeeRequest } from "./types/ethermint/evm/v1/query";


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
 * @title ethermint.evm.v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * QueryAccount
   *
   * @tags Query
   * @name queryAccount
   * @request GET:/evmos/evm/v1/account/{address}
   */
  queryAccount = (address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAccountResponse>>>({
      path: `/evmos/evm/v1/account/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCosmosAccount
   *
   * @tags Query
   * @name queryCosmosAccount
   * @request GET:/evmos/evm/v1/cosmos_account/{address}
   */
  queryCosmosAccount = (address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCosmosAccountResponse>>>({
      path: `/evmos/evm/v1/cosmos_account/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryValidatorAccount
   *
   * @tags Query
   * @name queryValidatorAccount
   * @request GET:/evmos/evm/v1/validator_account/{cons_address}
   */
  queryValidatorAccount = (cons_address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryValidatorAccountResponse>>>({
      path: `/evmos/evm/v1/validator_account/${cons_address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryBalance
   *
   * @tags Query
   * @name queryBalance
   * @request GET:/evmos/evm/v1/balances/{address}
   */
  queryBalance = (address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryBalanceResponse>>>({
      path: `/evmos/evm/v1/balances/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryStorage
   *
   * @tags Query
   * @name queryStorage
   * @request GET:/evmos/evm/v1/storage/{address}/{key}
   */
  queryStorage = (address: string, key: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryStorageResponse>>>({
      path: `/evmos/evm/v1/storage/${address}/${key}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCode
   *
   * @tags Query
   * @name queryCode
   * @request GET:/evmos/evm/v1/codes/{address}
   */
  queryCode = (address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCodeResponse>>>({
      path: `/evmos/evm/v1/codes/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryParams
   *
   * @tags Query
   * @name queryParams
   * @request GET:/evmos/evm/v1/params
   */
  queryParams = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryParamsResponse>>>({
      path: `/evmos/evm/v1/params`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEthCall
   *
   * @tags Query
   * @name queryEthCall
   * @request GET:/evmos/evm/v1/eth_call
   */
  queryEthCall = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<EthCallRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<MsgEthereumTxResponse>>>({
      path: `/evmos/evm/v1/eth_call`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEthCallWithOverride
   *
   * @tags Query
   * @name queryEthCallWithOverride
   * @request GET:/ethermint/evm/v1/eth_call_overides
   */
  queryEthCallWithOverride = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<EthCallWithOverrideRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<MsgEthereumTxResponse>>>({
      path: `/ethermint/evm/v1/eth_call_overides`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEstimateGasWithOverride
   *
   * @tags Query
   * @name queryEstimateGasWithOverride
   * @request GET:/evmos/evm/v1/estimate_gas_overides
   */
  queryEstimateGasWithOverride = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<EthCallWithOverrideRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<EstimateGasResponse>>>({
      path: `/evmos/evm/v1/estimate_gas_overides`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEstimateGas
   *
   * @tags Query
   * @name queryEstimateGas
   * @request GET:/evmos/evm/v1/estimate_gas
   */
  queryEstimateGas = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<EthCallRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<EstimateGasResponse>>>({
      path: `/evmos/evm/v1/estimate_gas`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryTraceTx
   *
   * @tags Query
   * @name queryTraceTx
   * @request GET:/evmos/evm/v1/trace_tx
   */
  queryTraceTx = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryTraceTxRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryTraceTxResponse>>>({
      path: `/evmos/evm/v1/trace_tx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryTraceBlock
   *
   * @tags Query
   * @name queryTraceBlock
   * @request GET:/evmos/evm/v1/trace_block
   */
  queryTraceBlock = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryTraceBlockRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryTraceBlockResponse>>>({
      path: `/evmos/evm/v1/trace_block`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryBaseFee
   *
   * @tags Query
   * @name queryBaseFee
   * @request GET:/evmos/evm/v1/base_fee
   */
  queryBaseFee = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryBaseFeeResponse>>>({
      path: `/evmos/evm/v1/base_fee`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
}