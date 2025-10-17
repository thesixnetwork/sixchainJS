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
  const moniker = process.argv[3] || ""; // Optional: validator moniker
  const identity = process.argv[4] || ""; // Optional: validator identity
  const website = process.argv[5] || ""; // Optional: validator website
  const securityContact = process.argv[6] || ""; // Optional: security contact
  const details = process.argv[7] || ""; // Optional: validator details
  const commissionRate = process.argv[8] || ""; // Optional: new commission rate

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/edit-validator.ts fivenet [moniker] [identity] [website] [securityContact] [details] [commissionRate] || yarn ts-node ./scripts/staking/tx/edit-validator.ts fivenet [moniker] [identity] [website] [securityContact] [details] [commissionRate]"
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

  console.log(`Editing validator:`);
  console.log(`Validator Address: ${address}`);
  if (moniker) console.log(`New Moniker: ${moniker}`);
  if (commissionRate) console.log(`New Commission Rate: ${commissionRate}`);

  let msgArray: Array<EncodeObject> = [];

  const editValidator =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.editValidator({
      description: {
        moniker: moniker,
        identity: identity,
        website: website,
        securityContact: securityContact,
        details: details,
      },
      validatorAddress: address,
      commissionRate: commissionRate,
      minSelfDelegation: "", // Keep existing min self delegation
      maxLicense: "0", // Keep existing max license
      licenseMode: false, // Keep existing license mode
      specialMode: false, // Keep existing special mode
    });

  msgArray.push(editValidator);

  // First attempt with auto gas
  console.log("Attempting edit validator with auto gas...");
  const memo = "edit validator";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.STAKING,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error editing validator: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Edit validator successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
