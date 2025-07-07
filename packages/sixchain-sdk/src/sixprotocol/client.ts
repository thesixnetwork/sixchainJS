import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient, SigningStargateClientOptions, GasPrice } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sixprotocolNftadminTxRegistry from "./nftadmin/tx.registry";
import * as sixprotocolNftmngrTxRegistry from "./nftmngr/tx.registry";
import * as sixprotocolNftoracleTxRegistry from "./nftoracle/tx.registry";
import * as sixprotocolProtocoladminTxRegistry from "./protocoladmin/tx.registry";
import * as sixprotocolTokenmngrTxRegistry from "./tokenmngr/tx.registry";
import * as sixprotocolNftadminTxAmino from "./nftadmin/tx.amino";
import * as sixprotocolNftmngrTxAmino from "./nftmngr/tx.amino";
import * as sixprotocolNftoracleTxAmino from "./nftoracle/tx.amino";
import * as sixprotocolProtocoladminTxAmino from "./protocoladmin/tx.amino";
import * as sixprotocolTokenmngrTxAmino from "./tokenmngr/tx.amino";
export const sixprotocolAminoConverters = {
  ...sixprotocolNftadminTxAmino.AminoConverter,
  ...sixprotocolNftmngrTxAmino.AminoConverter,
  ...sixprotocolNftoracleTxAmino.AminoConverter,
  ...sixprotocolProtocoladminTxAmino.AminoConverter,
  ...sixprotocolTokenmngrTxAmino.AminoConverter
};
export const sixprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...sixprotocolNftadminTxRegistry.registry, ...sixprotocolNftmngrTxRegistry.registry, ...sixprotocolNftoracleTxRegistry.registry, ...sixprotocolProtocoladminTxRegistry.registry, ...sixprotocolTokenmngrTxRegistry.registry];
export const getSigningSixprotocolClientOptions = ({
  defaultTypes = defaultRegistryTypes,
  gasPrice
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
  gasPrice?: GasPrice;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
  gasPrice?: GasPrice;
} => {
  const registry = new Registry([...defaultTypes, ...sixprotocolProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...sixprotocolAminoConverters
  });
  return {
    registry,
    aminoTypes,
    ...(gasPrice ? { gasPrice } : {})
  };
};
export const getSigningSixprotocolClient = async ({
  rpcEndpoint,
  signer,
  gasPrice,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  gasPrice?: GasPrice;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningSixprotocolClientOptions({
    defaultTypes,
    gasPrice
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
    ...(gasPrice ? { gasPrice } : {})
  });
  return client;
};