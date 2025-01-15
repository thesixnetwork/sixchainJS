//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as nftadminTxRegistry from "../nftadmin/tx.registry";
import * as nftmngrTxRegistry from "../nftmngr/tx.registry";
import * as nftoracleTxRegistry from "../nftoracle/tx.registry";
import * as protocoladminTxRegistry from "../protocoladmin/tx.registry";
import * as tokenmngrTxRegistry from "../tokenmngr/tx.registry";
import * as nftadminTxAmino from "../nftadmin/tx.amino";
import * as nftmngrTxAmino from "../nftmngr/tx.amino";
import * as nftoracleTxAmino from "../nftoracle/tx.amino";
import * as protocoladminTxAmino from "../protocoladmin/tx.amino";
import * as tokenmngrTxAmino from "../tokenmngr/tx.amino";
export const thesixnetworkAminoConverters = {
  ...nftadminTxAmino.AminoConverter,
  ...nftmngrTxAmino.AminoConverter,
  ...nftoracleTxAmino.AminoConverter,
  ...protocoladminTxAmino.AminoConverter,
  ...tokenmngrTxAmino.AminoConverter
};
export const thesixnetworkProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...nftadminTxRegistry.registry, ...nftmngrTxRegistry.registry, ...nftoracleTxRegistry.registry, ...protocoladminTxRegistry.registry, ...tokenmngrTxRegistry.registry];
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