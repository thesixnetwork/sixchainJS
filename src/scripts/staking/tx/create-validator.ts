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
  const moniker = process.argv[3] || "MyValidator";
  const identity = process.argv[4] || "";
  const website = process.argv[5] || "";
  const securityContact = process.argv[6] || "";
  const details = process.argv[7] || "";
  const rate = process.argv[8] || "0.100000000000000000"; // 10%
  const maxRate = process.argv[9] || "0.200000000000000000"; // 20%
  const maxChangeRate = process.argv[10] || "0.010000000000000000"; // 1%
  const minSelfDelegation = process.argv[11] || "1000000"; // 1 SIX
  const selfDelegateAmount = process.argv[12] || "1000000"; // 1 SIX
  const denom = process.argv[13] || "usix";
  const pubkey = process.argv[14]; // Required validator public key

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/create-validator.ts fivenet [moniker] [identity] [website] [securityContact] [details] [rate] [maxRate] [maxChangeRate] [minSelfDelegation] [selfDelegateAmount] [denom] [pubkey] || yarn ts-node ./scripts/staking/tx/create-validator.ts fivenet [moniker] [identity] [website] [securityContact] [details] [rate] [maxRate] [maxChangeRate] [minSelfDelegation] [selfDelegateAmount] [denom] [pubkey]"
    );
  }

  if (!pubkey) {
    throw new Error("Validator public key is required");
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

  console.log(`Creating validator:`);
  console.log(`Validator Address: ${address}`);
  console.log(`Moniker: ${moniker}`);
  console.log(`Commission Rate: ${rate}`);
  console.log(`Min Self Delegation: ${minSelfDelegation}`);
  console.log(`Self Delegate Amount: ${selfDelegateAmount} ${denom}`);

  let msgArray: Array<EncodeObject> = [];

  const createValidator =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.createValidator({
      description: {
        moniker: moniker,
        identity: identity,
        website: website,
        securityContact: securityContact,
        details: details,
      },
      commission: {
        rate: rate,
        maxRate: maxRate,
        maxChangeRate: maxChangeRate,
      },
      minSelfDelegation: minSelfDelegation,
      minDelegation: "1000000", // Min delegation amount
      delegationIncrement: "1000000", // Delegation increment
      maxLicense: "0", // Max license (0 for unlimited)
      licenseMode: false, // License mode
      enableRedelegation: true, // Enable redelegation
      delegatorAddress: address,
      validatorAddress: address, // Validator address is same as delegator for self-delegation
      approverAddress: "", // Approver address (optional)
      pubkey: {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey", // or other key type
        value: Buffer.from(pubkey, "base64"), // Assuming pubkey is base64 encoded
      },
      value: {
        amount: selfDelegateAmount,
        denom: denom,
      },
      specialMode: false, // Special mode
    });

  msgArray.push(createValidator);

  // First attempt with auto gas
  console.log("Attempting create validator with auto gas...");
  const memo = "create validator";
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
    console.error(`Error creating validator: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Create validator successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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