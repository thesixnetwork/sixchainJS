# @sixnetwork/sixchain-sdk

<p align="center">
  <a href="https://github.com/thesixnetwork/sixchain-sdk">
    <img width="150" src="https://raw.githubusercontent.com/cosmos/chain-registry/refs/heads/master/six/images/six.png">
  </a>
</p>

<p align="center" width="100%">
  <a href="https://github.com/thesixnetwork/sixchain-sdk/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/thesixnetwork/sixchain-sdk/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/thesixnetwork/sixchain-sdk/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

## Install

```sh
npm install @sixnetwork/sixchain-sdk
```

## Table of contents

- [@sixnetwork/sixchain-sdk](#sixnetworksixchain-sdk)
  - [Install](#install)
  - [Environment Setup](#environment-setup)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
  - [Network Configuration](#network-configuration)
  - [RPC Clients](#rpc-clients)
  - [Composing Messages](#composing-messages)
    - [CosmWasm](#cosmwasm-messages)
    - [IBC](#ibc-messages)
    - [Cosmos](#cosmos-messages)
    - [Six Protocol](#six-protocol-messages)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
  - [Signing Client](#initializing-the-signing-client)
  - [Creating Signers](#creating-signers)
  - [Broadcasting Messages](#broadcasting-messages)
- [Script Examples](#script-examples)
  - [Query Examples](#query-examples)
  - [Transaction Examples](#transaction-examples)
  - [Available Script Categories](#available-script-categories)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
- [Codegen](#codegen)
- [Publishing](#publishing)
- [Related](#related)
- [Credits](#credits)

## Usage

### Network Configuration

First, set up your network configuration (see `src/scripts/client.ts` for the full implementation):

```js
import { getConnectorConfig } from "@client-util";

// Available networks: "local", "fivenet", "sixnet"
const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig("fivenet");
```

> **Note**: The `@client-util` import alias refers to `src/scripts/client.ts` and is configured in the project's TypeScript configuration. This utility provides network-specific RPC endpoints, API URLs, and mnemonic loading.

### RPC Clients

#### Cosmos Modules Query Client

```js
import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";

const { rpcUrl } = await getConnectorConfig("fivenet");

const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
  rpcEndpoint: rpcUrl,
});

// Query account balance
const balance = await queryClient.cosmos.bank.v1beta1.balance({
  address: "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq", 
  denom: "usix"
});

console.log(`Balance: ${balance.balance?.amount} ${balance.balance?.denom}`);
```

#### Six Protocol Modules Query Client

```js
import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";

const { rpcUrl } = await getConnectorConfig("fivenet");

const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
  rpcEndpoint: rpcUrl,
});

// Query NFT Schema
const nftSchema = await queryClient.sixprotocol.nftmngr.nFTSchema({
  code: "your-schema-code",
});

// Query Token Factory tokens
const token = await queryClient.sixprotocol.tokenmngr.token({
  name: "your-token-name",
});
```

### Composing Messages

Import the appropriate modules from `@sixnetwork/sixchain-sdk` based on what you need to interact with:

#### CosmWasm Messages

```js
import { cosmwasm } from "@sixnetwork/sixchain-sdk";

const {
  clearAdmin,
  executeContract,
  instantiateContract,
  migrateContract,
  storeCode,
  updateAdmin,
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from "@sixnetwork/sixchain-sdk";

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;
```

#### Cosmos Messages

```js
import { cosmos } from "@sixnetwork/sixchain-sdk";

// Bank operations
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

// Gov operations  
const { deposit, submitProposal, vote } = cosmos.gov.v1beta1.MessageComposer.withTypeUrl;

// Staking operations
const { delegate, undelegate, beginRedelegate } = cosmos.staking.v1beta1.MessageComposer.withTypeUrl;

// Distribution operations
const { withdrawDelegatorReward, setWithdrawAddress } = cosmos.distribution.v1beta1.MessageComposer.withTypeUrl;
```

#### Six Protocol Messages

```js
import { sixprotocol } from "@sixnetwork/sixchain-sdk";

// NFT Manager operations
const { 
  changeSchemaOwner, 
  addSystemActioner,
  removeSystemActioner 
} = sixprotocol.nftmngr.MessageComposer.withTypeUrl;

// Token Factory operations  
const {
  createToken,
  mint, 
  burn
} = sixprotocol.tokenmngr.MessageComposer.withTypeUrl;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://docs.cosmology.zone/cosmos-kit) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Signing Client

Use the appropriate signing client based on which modules you need:

#### For Cosmos modules:
```js
import { getSigningCosmosClient } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
  prefix: "6x",
});

const client = await getSigningCosmosClient({
  rpcEndpoint: rpcUrl,
  signer: wallet,
  options: {
    gasPrice: GasPrice.fromString("1.25usix"),
  },
});
```

#### For Six Protocol modules:
```js
import { getSigningSixprotocolClient } from "@sixnetwork/sixchain-sdk";

const client = await getSigningSixprotocolClient({
  rpcEndpoint: rpcUrl,
  signer: wallet,
  options: {
    gasPrice: GasPrice.fromString("1.25usix"),
  },
});
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://docs.cosmology.zone/cosmos-kit) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";
```

### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from "chain-registry";

const mnemonic =
  "unfold client turtle either pilot stock floor glow toward bullet car science";
const chain = chains.find(({ chain_name }) => chain_name === "six");
const signer = await getOfflineSigner({
  mnemonic,
  chain,
});
```

### Broadcasting Messages

Now that you have your signing client, you can broadcast messages:

#### Example: Send Tokens (see `src/scripts/bank/tx/send.ts`)

```js
import { 
  getSigningCosmosClient, 
  cosmos, 
  signAndBroadcastWithRetry,
  COMMON_GAS_LIMITS 
} from "@sixnetwork/sixchain-sdk";

const send = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
  fromAddress: address,
  toAddress: "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp",
  amount: [
    {
      denom: "usix",
      amount: "10000000", // 10 SIX in usix
    },
  ],
});

const txResponse = await signAndBroadcastWithRetry(
  client,
  address,
  [send],
  "send tokens", // memo
  {
    gasMultiplier: 1.5,
    gasPrice: 1.25,
    fallbackGas: COMMON_GAS_LIMITS.BANK.SEND,
    denom: "usix",
  }
);
```

#### Example: Transfer NFT Schema Ownership (see `src/scripts/nftmngr/tx/transfer_schema.ts`)

```js
import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork/sixchain-sdk";

const changeOwner = sixprotocol.nftmngr.MessageComposer.withTypeUrl.changeSchemaOwner({
  creator: address,
  nftSchemaCode: "your-schema-code",
  newOwner: "6x1newowneraddress...",
});

const txResponse = await client.signAndBroadcast(
  address,
  [changeOwner],
  "auto",
  "transfer schema ownership"
);
```

## Script Examples

This repository includes comprehensive examples in the `src/scripts/` directory demonstrating real-world usage patterns:

### Query Examples

Run queries against different networks using the examples:

```bash
# Query account balance
bun run src/scripts/bank/query/balance.ts fivenet [address] [denom]

# Query NFT schema
bun run src/scripts/nftmngr/query/nft-schema.ts fivenet [schema-code]

# Query token factory token
bun run src/scripts/tokenfactory/query/show_token.ts fivenet [token-name]

# Query governance proposals
bun run src/scripts/gov/query/proposals.ts fivenet
```

### Transaction Examples

Execute transactions using the script examples:

```bash
# Send tokens
bun run src/scripts/bank/tx/send.ts fivenet

# Submit governance proposal
bun run src/scripts/gov/tx/submit-proposal.ts fivenet

# Vote on proposal
bun run src/scripts/gov/tx/vote.ts fivenet

# Transfer NFT schema ownership
bun run src/scripts/nftmngr/tx/transfer_schema.ts fivenet
```

### Available Script Categories

- **`auth/`** - Authentication queries and transactions
- **`authz/`** - Authorization grants, revokes, and executions
- **`bank/`** - Token transfers and balance queries  
- **`gov/`** - Governance proposals, voting, and deposits
- **`nftmngr/`** - NFT schema management and queries
- **`tokenfactory/`** - Token creation and management
- **`staking/`** - Validator operations and delegations
- **`utils/`** - Connection testing and utilities

Each script includes proper error handling, network configuration, and detailed console output for learning purposes.

## Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    sixprotocolAminoConverters,
    sixprotocolProtoRegistry
} from '@sixnetwork/sixchain-sdk';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpoint = 'https://rpc1.fivenet.sixprotocol.net:443'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...sixprotocolProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...sixprotocolAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Developing

When first cloning the repo:

```
yarn
yarn build
```

### Codegen

Look inside of `scripts/codegen.ts` and configure the settings for bundling your SDK and contracts into `@sixnetwork/sixchain-sdk`:

```
yarn codegen
```

### Publishing

To publish, use `lerna`:

```
lerna publish
```

You can publish patch, minor, or major versions:

```
lerna publish minor
```

If you absolutely need to publish manually using npm, ensure to do it this way, and publish from the `dist/` directory for proper tree-shaking module paths:

```
cd ./packages/<your-telescope-module>
yarn build
cd dist
npm publish
```

## Related

Checkout these related projects:

- [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
- [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
- [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
- [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
- [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
