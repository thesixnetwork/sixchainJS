//@ts-nocheck
import { QueryClient } from '@cosmjs/stargate';
import { HttpEndpoint,Tendermint34Client } from '@cosmjs/tendermint-rpc';
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import('./auth/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import('./authz/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import('./bank/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import('./distribution/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import('./feegrant/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import('./gov/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import('./mint/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import('./params/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import('./staking/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import('./tx/v1beta1/service.rpc.Service')).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import('./upgrade/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      }
    }
  };
};