import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { Plan } from "@sixnetwork/sixchain-sdk/cosmos/upgrade/v1beta1/upgrade";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const UPGRADE_NAME = process.argv[3];
  const UPGRADE_HEIGHT = process.argv[4];
  const UPGRADE_INFO = process.argv[5] || "";

  if (!NETWORK || !UPGRADE_NAME || !UPGRADE_HEIGHT) {
    throw new Error(
      "Usage: bun run ./scripts/gov/tx/submit-software-upgrade-proposal.ts <network> <upgrade_name> <upgrade_height> [upgrade_info]"
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

  let msgArray: Array<EncodeObject> = [];

  // Create software upgrade plan
  const plan: Plan = {
    name: UPGRADE_NAME,
    height: Long.fromString(UPGRADE_HEIGHT),
    info: UPGRADE_INFO,
    upgradedClientState: null,
    time: undefined,
  };

  // Create software upgrade message
  const softwareUpgradeMsg = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
    value: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade.encode({
      authority: "6x10d07y265gmmuvt4z0w9aw880jnsr700j4vyszp",
      plan: plan,
    }).finish(),
  };

  const submitProposal =
    cosmos.gov.v1.MessageComposer.withTypeUrl.submitProposal({
      messages: [softwareUpgradeMsg],
      initialDeposit: [
        {
          denom: "usix",
          amount: "500000000",
        },
      ],
      proposer: address,
      metadata: JSON.stringify({
        title: `Software Upgrade: ${UPGRADE_NAME}`,
        summary: `Proposal to upgrade the network to ${UPGRADE_NAME}`,
        details: `This proposal will upgrade the network to ${UPGRADE_NAME} at height ${UPGRADE_HEIGHT}. ${UPGRADE_INFO}`,
      }),
      title: `Software Upgrade: ${UPGRADE_NAME}`,
      summary: `Proposal to upgrade the network to ${UPGRADE_NAME}`,
      expedited: false,
    });

  msgArray.push(submitProposal);

  const memo = "submit software upgrade proposal";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.GOV.SUBMIT_PROPOSAL,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error submitting proposal: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Software upgrade proposal submitted successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
