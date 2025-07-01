import { SixDataChainConnector } from "@sixnetwork/sixchain-client";

const delegate = async () => {
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = "http://localhost:80";

  const accountSigner =
    await sixConnector.accounts.privateKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner);

  const delegate_amount = {
    amount: "20000000",
    denom: "usix",
  };

  const msgDelegate = {
    amount: delegate_amount,
    delegator_address: address,
    validator_address: validator_address,
  };
  const msg = rpcClient.cosmosStakingModule.msgUndelegate(msgDelegate);
  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg], {
    fee: "auto",
    memo: "memo",
  });
  console.log(txResponse);
};

delegate()
  .then(() => {
    console.log;
  })
  .catch(() => {
    console.log;
  });
