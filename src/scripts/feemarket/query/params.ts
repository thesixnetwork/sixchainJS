
import { getSigningEthermintClient, ethermint } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
    const NETWORK = process.argv[2];

    if (!NETWORK) {
        throw new Error(
            "INPUT NETWORK BY RUNNING: bun run ./scripts/feemarket/query/params.ts fivenet || yarn ts-node ./scripts/feemarket/query/params.ts fivenet"
        );
    }

    const { rpcUrl } = await getConnectorConfig(NETWORK);

    // Get query client
    const client = await ethermint.ClientFactory.createRPCQueryClient({
        rpcEndpoint: rpcUrl,
    });

    // Query feemarket params
    const response = await client.ethermint.feemarket.v1.params({})
    console.log("Feemarket Params:", response);
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
