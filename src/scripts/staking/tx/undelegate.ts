import { getSigningSixprotocolClient, cosmos } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Coin } from "@cosmjs/amino";
import { calculateFeeFromSimulation, COMMON_GAS_LIMITS } from "../../utils/fee-calculator";
import dotenv from "dotenv";

dotenv.config();

const undelegate = async () => {
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

  const validator_address = "6xvaloper13dwxflzhc3qlkcy9syfnhr8tu2kdvuavhzdf9f";

  const delegate_amount: Coin = {
    amount: "20000000",
    denom: "usix",
  };

  const msgUndelegate =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.undelegate({
      amount: delegate_amount,
      delegatorAddress: address,
      validatorAddress: validator_address,
    });

  // First attempt with auto gas
  console.log("Attempting undelegation with auto gas...");
  let txResponse = await client.signAndBroadcast(
    address,
    [msgUndelegate],
    "auto",
    "undelegate"
  );

  // If out of gas error (code 11), retry with calculated fee
  if (txResponse.code === 11) {
    console.log("Out of gas error detected. Retrying with calculated fee...");
    console.log(`Previous attempt: gasWanted=${txResponse.gasWanted}, gasUsed=${txResponse.gasUsed}`);
    
    // Calculate fee using utility function with higher multiplier
    const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
      client,
      address,
      [msgUndelegate],
      "undelegate",
      {
        gasMultiplier: 1.5, // 50% buffer
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.STAKING,
        denom: "usix"
      }
    );

    console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);

    // Retry with calculated fee
    txResponse = await client.signAndBroadcast(
      address,
      [msgUndelegate],
      fee,
      "undelegate"
    );
  }

  if (txResponse.code !== 0) {
    console.error(`Error in undelegation: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Undelegation successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
  }
  console.log(txResponse);
};

undelegate()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
