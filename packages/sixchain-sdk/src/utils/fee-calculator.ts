import { SigningStargateClient } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

export interface FeeCalculationOptions {
  gasMultiplier?: number; // Default: 1.5 (50% buffer)
  gasPrice?: number; // Default: 1.25 (for usix)
  fallbackGas?: number; // Default: 60000
  denom?: string; // Default: "usix"
}

export interface SimulationResult {
  gasUsed: number;
  fee: {
    amount: Array<{ denom: string; amount: string }>;
    gas: string;
  };
  gasLimit: number;
}

/**
 * Calculate fee based on transaction simulation
 * @param client - The signing client
 * @param address - The sender address
 * @param messages - Array of messages to simulate
 * @param memo - Transaction memo
 * @param options - Fee calculation options
 * @returns Simulation result with calculated fee
 */
export async function calculateFeeFromSimulation(
  client: SigningStargateClient,
  address: string,
  messages: EncodeObject[],
  memo: string = "",
  options: FeeCalculationOptions = {}
): Promise<SimulationResult> {
  const {
    gasMultiplier = 1.5,
    gasPrice = 1.25,
    fallbackGas = 60000,
    denom = "usix",
  } = options;

  try {
    // Run simulation
    const simResult = await client.simulate(address, messages, memo);

    // Handle different possible return types from simulate()
    let gasUsed: number;
    if (typeof simResult === "number") {
      gasUsed = simResult;
    } else if (
      simResult &&
      typeof simResult === "object" &&
      "gasInfo" in simResult
    ) {
      gasUsed = (simResult as any).gasInfo.gasUsed;
    } else if (
      simResult &&
      typeof simResult === "object" &&
      "gasUsed" in simResult
    ) {
      gasUsed = (simResult as any).gasUsed;
    } else {
      console.warn("Unexpected simulation result format, using fallback gas");
      gasUsed = fallbackGas;
    }

    // Calculate gas limit with buffer
    const gasLimit = Math.ceil(gasUsed * gasMultiplier);

    // Calculate fee amount
    const feeAmount = Math.ceil(gasLimit * gasPrice);

    const fee = {
      amount: [
        {
          denom: denom,
          amount: String(feeAmount),
        },
      ],
      gas: String(gasLimit),
    };

    console.log(
      `Gas estimation: used=${gasUsed}, limit=${gasLimit}, fee=${feeAmount}${denom}`
    );

    return {
      gasUsed,
      fee,
      gasLimit,
    };
  } catch (error) {
    console.warn("Simulation failed, using fallback gas:", error);

    const gasLimit = Math.ceil(fallbackGas * gasMultiplier);
    const feeAmount = Math.ceil(gasLimit * gasPrice);

    const fee = {
      amount: [
        {
          denom: denom,
          amount: String(feeAmount),
        },
      ],
      gas: String(gasLimit),
    };

    return {
      gasUsed: fallbackGas,
      fee,
      gasLimit,
    };
  }
}

/**
 * Create a manual fee without simulation
 * @param gasLimit - Manual gas limit
 * @param options - Fee calculation options
 * @returns Fee object
 */
export function createManualFee(
  gasLimit: number,
  options: FeeCalculationOptions = {}
) {
  const { gasPrice = 1.25, denom = "usix" } = options;

  const feeAmount = Math.ceil(gasLimit * gasPrice);

  return {
    amount: [
      {
        denom: denom,
        amount: String(feeAmount),
      },
    ],
    gas: String(gasLimit),
  };
}

/**
 * Retry transaction with calculated fee if out of gas (code 11)
 * @param client - The signing client
 * @param address - The sender address
 * @param messages - Array of messages to send
 * @param memo - Transaction memo
 * @param options - Fee calculation options
 * @returns Transaction result
 */
export async function signAndBroadcastWithRetry(
  client: SigningStargateClient,
  address: string,
  messages: EncodeObject[],
  memo: string = "",
  options: FeeCalculationOptions = {}
) {
  // First attempt with auto gas
  console.log(`Attempting ${memo || "transaction"} with auto gas...`);
  let txResponse = await client.signAndBroadcast(
    address,
    messages,
    "auto",
    memo
  );

  // If out of gas error (code 11), retry with calculated fee
  if (txResponse.code === 11) {
    console.log("Out of gas error detected. Retrying with calculated fee...");
    console.log(
      `Previous attempt: gasWanted=${txResponse.gasWanted}, gasUsed=${txResponse.gasUsed}`
    );

    // Calculate fee using utility function
    const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
      client,
      address,
      messages,
      memo,
      options
    );

    console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);

    // Retry with calculated fee
    txResponse = await client.signAndBroadcast(address, messages, fee, memo);
  }

  return txResponse;
}

/**
 * Common gas limits for different transaction types on Six Protocol
 */
export const COMMON_GAS_LIMITS = {
  SAMPLE: 1000,
  SIMPLE_SEND: 60000,
  CONTRACT_DEPLOY: 200000,
  CONTRACT_EXECUTE: 150000,
  CIRCUIT_RESET: 80000,
  GOVERNANCE_PROPOSAL: 100000,
  STAKING: 120000,
  NFT_MINT: 90000,
  NFT_CREATE_SCHEMA: 100000,
  AUTHZ: {
    GRANT: 80000,
    REVOKE: 70000,
    EXEC: 80000,
  },
  DISTRIBUTION_WITHDRAW: 70000,
} as const;

/**
 * Gas price constants for Six Protocol
 */
export const GAS_PRICES = {
  USIX: 1.25,
  SIX: 0.00000125, // 1.25usix = 0.000001250six
} as const;
