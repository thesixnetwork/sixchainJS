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
  console.log(`Attempting ${memo || "transaction"} with auto gas...`);
  /*
  NOTE:: For some module gas estimaion and tx reponse might not updated or not the same native cosmos sdk such as feegrant module, so we need to use trycatch to make sure that tx reponse is atually code 11
   */
  try {
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

      const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
        client,
        address,
        messages,
        memo,
        options
      );

      console.log(
        `Retrying with calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`
      );

      // Retry with calculated fee
      txResponse = await client.signAndBroadcast(address, messages, fee, memo);
    }

    return txResponse;
  } catch (error: any) {
    if (error.code === 11 && error.codespace === "sdk") {
      console.log(
        "Out of gas exception detected. Retrying with calculated fee..."
      );
      console.log(`Exception log: ${error.log}`);

      try {
        // Calculate fee using utility function with higher multiplier for retry
        const retryOptions = {
          ...options,
          gasMultiplier: options.gasMultiplier * 1.2, // increas 20 percent
          fallbackGas: Math.max(options.fallbackGas || 80000, 100000),
        };

        const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
          client,
          address,
          messages,
          memo,
          retryOptions
        );

        console.log(
          `Retrying after exception with calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`
        );

        // Retry with calculated fee
        const txResponse = await client.signAndBroadcast(
          address,
          messages,
          fee,
          memo
        );
        return txResponse;
      } catch (retryError: any) {
        console.error("Retry also failed:");
        console.error(`Retry error: ${retryError.message}`);
        throw retryError;
      }
    }

    if (error.log) {
      console.error(`Log: ${error.log}`);
    }

    if (error.code && error.codespace) {
      console.error(`Code: ${error.code}, Codespace: ${error.codespace}`);
    }

    throw error;
  }
}

/**
 * Common gas limits for different transaction types on Six Protocol
 */
export const COMMON_GAS_LIMITS = {
  AUTHZ: {
    GRANT: 80000,
    REVOKE: 70000,
    EXEC: 80000,
  },
  BANK: {
    SEND: 80000,
    MULTI_SEND: 100000,
  },
  CIRCUIT: {
    RESET: 60000,
    AUTHORIZE: 80000,
    DISABLE: 80000,
  },
  DISTRIBUTION: {
    FUND_COMMMUNITY_POOL: 110000,
    FUND_VALIDATOR_REWARD: 110000,
    SET_WITHDRAW_ADDRESS: 70000,
    WITHDRAW_REWARD: 150000,
    WITHDRAW_VALIDATOR_REWARD: 90000,
  },
  GOV: {
    DEPOST: 150000,
    SUBMIT_PROPOSAL: 300000,
    VOTE: 70000,
  },
  FEEGRANT: {
    GRANT: 80000,
    PRUNE: 70000,
    REVOKE: 70000,
  },
  CONTRACT_DEPLOY: 200000,
  CONTRACT_EXECUTE: 150000,
  CIRCUIT_RESET: 80000,
  GOVERNANCE_PROPOSAL: 100000,
  STAKING: {
    DELEGATE: 180000,
  },
  NFT_ADMIN: {
    GRANT: 90000,
    REVOKE: 70000,
  },
  NFT_MANAGER: {
    ADD_ACTION: 100000,
    ADD_ATTRIBUTE: 100000,
    ADD_VIRTUAL_SCHEMA: 100000,
    CHANGE_ORG_OWNER: 100000,
    CHANGE_SCHEMA_OWNER: 100000,
    CREATE_ACTION_EXECUTOR: 100000,
    CREATE_METADATA: 400000,
    CREATE_NFT_SCHEMA: 600000,
    DELETE_ACTION_EXECUTOR: 100000,
    DELETE_VIRTUAL_ACTION: 100000,
    PERFORM_ACTION_BY_ADMIN: 100000,
    PERFORM_VIRTUAL_ACTION: 100000,
    PROPOSAL_VIRTUAL_ACTION: 100000,
    RESYNC_ATTRIBUTE: 100000,
    SET_ATTRIBUTE_OVERRIDING: 100000,
    SET_BASE_URI: 100000,
    SET_FEE_CONFIG: 100000,
    SET_METADATA_FORMAT: 100000,
    SET_MINTAUTH: 100000,
    SET_ORIGIN_CHAIN: 100000,
    SET_ORIGIN_CONTRACT: 100000,
    SET_URI_RETRIEVAL_METHOD: 100000,
    SHOW_ATTRIBUTES: 100000,
    TOGGLE_ACTION: 100000,
    UPDATE_ACTION: 100000,
    UPDATE_SCHEMA_ATTRIBUTE: 100000,
    UPDATE_VIRTUAL_ACTION: 100000,
    VIRTUAL_SCHEMA_PROPOSAL: 300000,
    VOTE_VIRTUAL_SCHEMA_PROPOSAL: 310000,
  },
  PROTOCOMADMIN: {
    ADD_ADMIN_TO_GROUP: 80000,
    CREATE_GROUP: 90000,
    DELETE_GROUP: 60000,
    REMOVE_ADMIN_FROM_GROUP: 70000,
  },
  NFT_MINT: 90000,
  NFT_CREATE_SCHEMA: 100000,
  DISTRIBUTION_WITHDRAW: 70000,
} as const;

/**
 * Gas price constants for Six Protocol
 */
export const GAS_PRICES = {
  USIX: 1.25,
  SIX: 0.00000125, // 1.25usix = 0.000001250six
} as const;
