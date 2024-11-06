//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as nftadminTxRegistry from "../nftadmin/tx.registry";
import * as nftmngrTxRegistry from "../nftmngr/tx.registry";
import * as nftoracleTxRegistry from "../nftoracle/tx.registry";
import * as protocoladminTxRegistry from "../protocoladmin/tx.registry";
import * as tokenmngrV1TxRegistry from "../tokenmngr/v1/tx.registry";
import * as tokenmngrV2TxRegistry from "../tokenmngr/v2/tx.registry";
import * as nftadminTxAmino from "../nftadmin/tx.amino";
import * as nftmngrTxAmino from "../nftmngr/tx.amino";
import * as nftoracleTxAmino from "../nftoracle/tx.amino";
import * as protocoladminTxAmino from "../protocoladmin/tx.amino";
import * as tokenmngrV1TxAmino from "../tokenmngr/v1/tx.amino";
import * as tokenmngrV2TxAmino from "../tokenmngr/v2/tx.amino";
export const thesixnetworkAminoConverters = {
  ...nftadminTxAmino.AminoConverter,
  ...nftmngrTxAmino.AminoConverter,
  ...nftoracleTxAmino.AminoConverter,
  ...protocoladminTxAmino.AminoConverter,
  ...tokenmngrV1TxAmino.AminoConverter,
  ...tokenmngrV2TxAmino.AminoConverter
};
export const thesixnetworkProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...nftadminTxRegistry.registry, ...nftmngrTxRegistry.registry, ...nftoracleTxRegistry.registry, ...protocoladminTxRegistry.registry, ...tokenmngrV1TxRegistry.registry, ...tokenmngrV2TxRegistry.registry];
export const getSigningThesixnetworkClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...thesixnetworkProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...thesixnetworkAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningThesixnetworkClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningThesixnetworkClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};