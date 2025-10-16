# Six Protocol Fee Calculator Utilities

This module provides robust gas estimation and fee calculation utilities for Six Protocol transactions.

## Features

- **Auto Gas + Fallback Pattern**: Tries "auto" gas first, falls back to calculated fee on failure
- **Smart Gas Estimation**: Handles different simulation response formats
- **Configurable Options**: Customizable gas multipliers, prices, and fallback values
- **Common Gas Limits**: Pre-defined gas limits for common Six Protocol operations
- **Retry Logic**: Automatic retry with proper gas calculation for code 11 (out of gas) errors

## Usage

### Basic Fee Calculation

```typescript
import { 
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry 
} from "@sixnetwork/sixchain-sdk";

// Calculate fee from simulation
const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
  client,
  address,
  messages,
  "transaction memo",
  {
    gasMultiplier: 1.5, // 50% buffer
    gasPrice: 1.25,     // usix gas price
    fallbackGas: COMMON_GAS_LIMITS.SIMPLE_SEND,
    denom: "usix"
  }
);

// Use the calculated fee
const txResponse = await client.signAndBroadcast(address, messages, fee, "memo");
```

### Auto Gas + Fallback Pattern (Recommended)

```typescript
// This function handles auto gas + fallback automatically
const txResponse = await signAndBroadcastWithRetry(
  client,
  address,
  messages,
  "transaction memo",
  {
    gasMultiplier: 1.5,
    gasPrice: 1.25,
    fallbackGas: COMMON_GAS_LIMITS.STAKING,
    denom: "usix"
  }
);
```

### Manual Fee Creation

```typescript
import { createManualFee } from "@sixnetwork/sixchain-sdk";

const fee = createManualFee(80000, {
  gasPrice: 1.25,
  denom: "usix"
});
```

## Configuration Options

### FeeCalculationOptions

```typescript
interface FeeCalculationOptions {
  gasMultiplier?: number; // Default: 1.5 (50% buffer)
  gasPrice?: number;      // Default: 1.25 (for usix)
  fallbackGas?: number;   // Default: 60000
  denom?: string;         // Default: "usix"
}
```

## Common Gas Limits

The SDK includes pre-defined gas limits for common operations:

```typescript
COMMON_GAS_LIMITS = {
  SIMPLE_SEND: 60000,
  CONTRACT_DEPLOY: 200000,
  CONTRACT_EXECUTE: 150000,
  CIRCUIT_RESET: 80000,
  GOVERNANCE_PROPOSAL: 100000,
  STAKING: 120000,
  NFT_MINT: 90000,
  NFT_CREATE_SCHEMA: 100000,
  AUTHZ_GRANT: 80000,
  DISTRIBUTION_WITHDRAW: 70000,
}
```

## Gas Price Constants

```typescript
GAS_PRICES = {
  USIX: 1.25,
  SIX: 0.000001250, // 1.25usix = 0.000001250six
}
```

## Error Handling

The utilities automatically handle:

- **Code 11 errors**: Out of gas - retries with calculated fee
- **Simulation failures**: Falls back to predefined gas limits
- **Different response formats**: Handles various simulation result structures

## Best Practices

1. **Always use the retry pattern** for production transactions
2. **Set appropriate fallback gas limits** for your transaction types
3. **Use gas multipliers** of 1.3-1.5 for safety margins
4. **Monitor gas usage** through the returned values for optimization

## Example: Complete Transaction Flow

```typescript
import { 
  getSigningCosmosClient,
  cosmos,
  signAndBroadcastWithRetry,
  COMMON_GAS_LIMITS 
} from "@sixnetwork/sixchain-sdk";

const main = async () => {
  // Setup client and messages...
  const client = await getSigningCosmosClient({...});
  const messages = [...];

  try {
    const txResponse = await signAndBroadcastWithRetry(
      client,
      address,
      messages,
      "My transaction",
      {
        gasMultiplier: 1.5,
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.STAKING,
        denom: "usix"
      }
    );

    if (txResponse.code === 0) {
      console.log("Transaction successful!");
      console.log(`Hash: ${txResponse.transactionHash}`);
      console.log(`Gas used: ${txResponse.gasUsed}/${txResponse.gasWanted}`);
    } else {
      console.error("Transaction failed:", txResponse.rawLog);
    }
  } catch (error) {
    console.error("Transaction error:", error);
  }
};
```