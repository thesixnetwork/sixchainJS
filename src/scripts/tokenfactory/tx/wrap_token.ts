import {
  getSigningSixprotocolClient,
  sixprotocol,
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { Coin } from "@cosmjs/amino";
import dotenv from "dotenv";

dotenv.config();

const wrapToken = async () => {
  const rpcEndpoint = "http://localhost:26657";

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.ALICE_MNEMONIC!,
    { prefix: "6x" }
  );

  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint,
    signer: wallet,
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  const convertAmount: Coin = {
    amount: "1000000",
    denom: "usix",
  };

  const msgWrapToken =
    sixprotocol.tokenmngr.MessageComposer.withTypeUrl.wrapToken({
      amount: convertAmount,
      creator: address,
      receiver: "0xB62ef83643A2F8c95dF78F694C6Bf480f5b786f2", // REMARK IF NULL VALUE Coin will convert to itself
    });

  // First attempt with auto gas
  console.log("Attempting wrap token with auto gas...");
  let txResponse = await client.signAndBroadcast(
    address,
    [msgWrapToken],
    "auto",
    "wrap token"
  );

  // If out of gas error (code 11), retry with calculated fee
  if (txResponse.code === 11) {
    console.log("Out of gas error detected. Retrying with calculated fee...");
    console.log(
      `Previous attempt: gasWanted=${txResponse.gasWanted}, gasUsed=${txResponse.gasUsed}`
    );
    // Calculate fee using utility function with higher multiplier
    const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
      client,
      address,
      [msgWrapToken],
      "wrap token",
      {
        gasMultiplier: 1.5, // 50% buffer
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.GOVERNANCE_PROPOSAL,
        denom: "usix",
      }
    );
    console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);
    // Retry with calculated fee
    txResponse = await client.signAndBroadcast(
      address,
      [msgWrapToken],
      fee,
      "wrap token"
    );
  }
  console.log(txResponse);
};

wrapToken()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
