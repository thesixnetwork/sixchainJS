import { SixDataChainConnector } from "@sixnetwork/sixchain-client";
const mnemonic = "";
const main = async () => {
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = "http://localhost:80";
  const accountSigner =
    await sixConnector.accounts.privateKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner);

  const msg = rpcClient.nftmngrModule.msgShowAttributes({
    creator: address,
    nftSchemaCode: "test_schema_code",
    show: false, // true: show, false: hide
    attributeNames: ["attribute1", "attribute2"],
  });
  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg]);
  console.log(txResponse);
};
main();
