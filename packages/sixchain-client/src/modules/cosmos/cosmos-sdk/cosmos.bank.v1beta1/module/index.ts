// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad';
import {EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { SigningStargateClient, SigningStargateClientOptions} from '@cosmjs/stargate';

import { Api } from './rest';
import { MsgSend } from './types/cosmos/bank/v1beta1/tx';
import { MsgMultiSend } from './types/cosmos/bank/v1beta1/tx';


const types = [
  ['/cosmos.bank.v1beta1.MsgSend', MsgSend],
  ['/cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend],
  
];
export const MissingWalletError = new Error('wallet is required');

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: '200000',
};

interface TxClientOptions {
  addr: string
}

export interface SignAndBroadcastOptions {
  fee: StdFee | 'auto',
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: 'http://localhost:26657' }, options?: SigningStargateClientOptions) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry, ...options});
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ''}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSend: (data: MsgSend): EncodeObject => ({ typeUrl: '/cosmos.bank.v1beta1.MsgSend', value: MsgSend.fromPartial( data ) }),
    msgMultiSend: (data: MsgMultiSend): EncodeObject => ({ typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend', value: MsgMultiSend.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: 'http://localhost:1317' }) => {
  return new Api({ baseUrl: addr });
};

export {
  queryClient,
  txClient,
};
