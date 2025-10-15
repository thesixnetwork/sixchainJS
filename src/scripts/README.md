# Cosmos SDK Module Scripts

This directory contains scripts for interacting with various Cosmos SDK modules. Each module has both transaction (tx) and query scripts.

## Usage

Each script follows the same pattern:

```bash
# For transaction scripts
bun run ./scripts/[module]/tx/[script].ts [network]
# or
yarn ts-node ./scripts/[module]/tx/[script].ts [network]

# For query scripts
bun run ./scripts/[module]/query/[script].ts [network]
# or
yarn ts-node ./scripts/[module]/query/[script].ts [network]
```

Where `[network]` can be:

- `local` - Local development network
- `fivenet` - Fivenet testnet
- `sixnet` - Sixnet mainnet

## Available Modules

### 1. Authz Module (`/authz`)

Authorization module for granting and revoking permissions.

**Transaction Scripts:**

- `grant.ts` - Grant authorization to another account
- `revoke.ts` - Revoke authorization from an account
- `exec.ts` - Execute messages on behalf of granter

**Query Scripts:**

- `grants.ts` - Query authorization grants

### 2. Bank Module (`/bank`)

Token transfers and balance queries.

**Transaction Scripts:**

- `send.ts` - Send tokens to another account
- `multi-send.ts` - Send tokens to multiple accounts

**Query Scripts:**

- `balance.ts` - Query account balances
- `balances.ts` - Query all account balances
- `totalBalance.ts` - Query total token supply
- `total_supply.ts` - Query total supply of all tokens
- `denoms_metadata.ts` - Query token denomination metadata

### 3. Circuit Module (`/circuit`)

Circuit breaker functionality for emergency stops.

**Transaction Scripts:**

- `authorize.ts` - Authorize circuit breaker permissions
- `trip.ts` - Trip circuit breaker to disable message types
- `reset.ts` - Reset circuit breaker to re-enable message types

**Query Scripts:**

- `account.ts` - Query circuit breaker permissions and disabled messages

### 4. Crisis Module (`/crisis`)

Emergency halt functionality.

**Query Scripts:**

- `params.ts` - Query crisis module parameters (limited functionality)

### 5. Distribution Module (`/distribution`)

Staking rewards distribution.

**Transaction Scripts:**

- `withdraw-rewards.ts` - Withdraw staking rewards
- `set-withdraw-address.ts` - Set withdrawal address for rewards

**Query Scripts:**

- `rewards.ts` - Query staking rewards and commission

### 6. Feegrant Module (`/feegrant`)

Fee allowances and grants.

**Transaction Scripts:**

- `grant.ts` - Grant fee allowance to another account
- `revoke.ts` - Revoke fee allowance

**Query Scripts:**

- `allowance.ts` - Query fee allowances

### 7. Gov Module (`/gov`)

Governance proposals and voting.

**Transaction Scripts:**

- `submit-proposal.ts` - Submit governance proposal
- `vote.ts` - Vote on governance proposal
- `deposit.ts` - Deposit tokens to proposal

**Query Scripts:**

- `proposal.ts` - Query governance proposals, votes, and deposits

### 8. Group Module (`/group`)

Group-based decision making.

**Transaction Scripts:**

- `create-group.ts` - Create a new group
- `create-group-policy.ts` - Create group policy with decision rules

**Query Scripts:**

- `group-info.ts` - Query group information, members, and policies

### 9. Mint Module (`/mint`)

Token minting parameters and inflation.

**Query Scripts:**

- `params.ts` - Query mint parameters, inflation, and annual provisions

### 10. Staking Module (`/staking`)

Validator staking and delegation.

**Transaction Scripts:**

- `delegate.ts` - Delegate tokens to validator
- `undelegate.ts` - Undelegate tokens from validator

**Query Scripts:**

- `validators.ts` - Query validators, delegations, and staking info

### 11. Upgrade Module (`/upgrade`)

Chain upgrades and versioning.

**Transaction Scripts:**

- `software-upgrade.ts` - Submit software upgrade proposal
- `cancel-upgrade.ts` - Cancel pending upgrade

**Query Scripts:**

- `current-plan.ts` - Query current upgrade plan and module versions

### 12. Vesting Module (`/vesting`)

Vesting accounts and token lockups.

**Transaction Scripts:**

- `create-vesting-account.ts` - Create vesting account

**Query Scripts:**

- `account.ts` - Query vesting account information

## Important Notes

1. **TODO Comments**: All scripts contain TODO comments indicating values that need to be replaced with actual data for your use case.

2. **Network Configuration**: Make sure your `.env` file contains the appropriate mnemonics:

   - `ALICE_MNEMONIC` for local network
   - `FIVENET_MNEMONIC` for fivenet
   - `SIXNET_MNEMONIC` for sixnet

3. **Authority Requirements**: Some transactions (like upgrades) require special authority addresses that are typically controlled by governance.

4. **Gas Prices**: All scripts use a default gas price of "1.25usix". Adjust as needed for your network.

5. **Error Handling**: Each script includes proper error handling and will display transaction hash and gas usage on success.

## Excluded Modules

The following modules were excluded as requested:

- `nftmngr` - NFT Manager module
- `nftadmin` - NFT Admin module
- `nftoracle` - NFT Oracle module
- `tokenmngr` - Token Manager module
- `protocoladmin` - Protocol Admin module

## Development

To add new scripts:

1. Create the appropriate directory structure: `[module]/tx/` and `[module]/query/`
2. Follow the existing patterns for imports and structure
3. Include proper error handling and TODO comments
4. Update this README with the new scripts

## Examples

```bash
# Send tokens
bun run ./scripts/bank/tx/send.ts fivenet

# Query validator info
bun run ./scripts/staking/query/validators.ts fivenet

# Vote on proposal
bun run ./scripts/gov/tx/vote.ts fivenet

# Grant fee allowance
bun run ./scripts/feegrant/tx/grant.ts fivenet
```
