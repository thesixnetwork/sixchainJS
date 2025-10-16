//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
  SigningStargateClientOptions,
  GasPrice,
} from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ethermintEvmV1TxRegistry from "./evm/v1/tx.registry";
import * as ethermintFeemarketV1TxRegistry from "./feemarket/v1/tx.registry";
import * as ethermintEvmV1TxAmino from "./evm/v1/tx.amino";
import * as ethermintFeemarketV1TxAmino from "./feemarket/v1/tx.amino";
export const ethermintAminoConverters = {
  ...ethermintEvmV1TxAmino.AminoConverter,
  ...ethermintFeemarketV1TxAmino.AminoConverter
};
export const ethermintProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...ethermintEvmV1TxRegistry.registry, ...ethermintFeemarketV1TxRegistry.registry];
export const getSigningEthermintClientOptions = ({
  defaultTypes = defaultRegistryTypes,
  options
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
  options?: SigningStargateClientOptions
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
  options?: SigningStargateClientOptions;
} => {
  const registry = new Registry([...defaultTypes, ...ethermintProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...ethermintAminoConverters
  });
  return {
    registry,
    aminoTypes,
    options
  };
};
export const getSigningEthermintClient = async ({
  rpcEndpoint,
  signer,
  options,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  options?: SigningStargateClientOptions;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningEthermintClientOptions({ defaultTypes, options });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
    ...options
  });
  return client;
};