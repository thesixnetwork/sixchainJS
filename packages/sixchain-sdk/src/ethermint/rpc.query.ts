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
        v1beta1: (await import('../cosmos/auth/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import('../cosmos/authz/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import('../cosmos/bank/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import('../cosmos/distribution/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import('../cosmos/feegrant/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import('../cosmos/gov/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import('../cosmos/mint/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import('../cosmos/params/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import('../cosmos/staking/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import('../cosmos/tx/v1beta1/service.rpc.Service')).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import('../cosmos/upgrade/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      }
    },
    ethermint: {
      evm: {
        v1: (await import('./evm/v1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      feemarket: {
        v1: (await import('./feemarket/v1/query.rpc.Query')).createRpcQueryExtension(client),
        v2: (await import('./feemarket/v2/query.rpc.Query')).createRpcQueryExtension(client)
      }
    }
  };
};