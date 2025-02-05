import { SixDataChainConnector } from "@thesixnetwork/sixchain-client";
const mnemonic = "";
const main = async () => {
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = "http://localhost:80";
  const accountSigner =
    await sixConnector.accounts.privateKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner);

  const msg = rpcClient.nftmngrModule.msgToggleAction({
    creator: address,
    code: "test_schema_code",
    action: "attribute1",
    disalbe: true, // true: disable, false: enable
  });

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg]);
  console.log(txResponse);
};
main();

