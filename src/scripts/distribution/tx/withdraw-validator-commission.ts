import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const validatorAddress = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/distribution/tx/withdraw-validator-commission.ts fivenet [validatorAddress] || yarn ts-node ./scripts/distribution/tx/withdraw-validator-commission.ts fivenet [validatorAddress]"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  // Use provided validator address or derive from account address
  const valAddr = validatorAddress || `6xvaloper${address.slice(2)}`;

  console.log(`Withdrawing commission for validator: ${valAddr}`);

  let msgArray: Array<EncodeObject> = [];

  const withdrawValidatorCommission =
    cosmos.distribution.v1beta1.MessageComposer.withTypeUrl.withdrawValidatorCommission({
      validatorAddress: valAddr,
    });

  msgArray.push(withdrawValidatorCommission);

  // First attempt with auto gas
  console.log("Attempting withdraw validator commission with auto gas...");
  const memo = "withdraw validator commission";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.SAMPLE,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error withdrawing validator commission: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Withdraw validator commission successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });