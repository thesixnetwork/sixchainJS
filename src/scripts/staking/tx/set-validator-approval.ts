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
  const newApproverAddress = process.argv[3] || ""; // New approver address
  const enabled = process.argv[4] === "true" || true; // Enable/disable validator approval

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/set-validator-approval.ts fivenet [newApproverAddress] [enabled] || yarn ts-node ./scripts/staking/tx/set-validator-approval.ts fivenet [newApproverAddress] [enabled]"
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

  console.log(`Setting validator approval:`);
  console.log(`Authority: ${address}`);
  console.log(`New Approver Address: ${newApproverAddress}`);
  console.log(`Enabled: ${enabled}`);

  let msgArray: Array<EncodeObject> = [];

  const setValidatorApproval =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.setValidatorApproval({
      approverAddress: address, // Current approver address
      newApproverAddress: newApproverAddress, // New approver address
      enabled: enabled, // Enable/disable validator approval
    });

  msgArray.push(setValidatorApproval);

  // First attempt with auto gas
  console.log("Attempting set validator approval with auto gas...");
  const memo = "set validator approval";
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
    console.error(`Error setting validator approval: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Set validator approval successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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