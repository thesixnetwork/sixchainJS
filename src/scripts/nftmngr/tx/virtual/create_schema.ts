import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETOWRK = process.argv[2];

  let msgArray: EncodeObject[] = [];
  if (!NETOWRK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETOWRK);

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });
  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
  });

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let schema_name = "divineXmembership";

  const virtualSchemaProp =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.proposalVirtualSchema({
      creator: address,
      virtualNftSchemaCode: schema_name,
      registry: [
        {
          nftSchemaCode: "sixprotocol.divine_elite",
        },
        {
          nftSchemaCode: "sixprotocol.membership",
        },
      ],
      actions: [
        {
          name: "bridge_4_to_2",
          allowedActioner: 1,
          desc: "Bridge service 4 to service 2",
          disable: false,
          params: [
            {
              name: "amount",
              desc: "Service 4 Amount",
              dataType: "number",
              required: true,
              defaultValue: "0",
            },
          ],
          then: [
            "ser4value = meta.GetNumber('sixprotocol.divine_elite','service_4')",
            "ser2Value = meta.GetNumber('sixprotocol.membership','service_2')",
            "toSetValue = ser2Value + params['amount'].GetNumber()",
            "meta.SetNumber('sixprotocol.membership','service_2', toSetValue)",
            "meta.SetNumber('sixprotocol.divine_elite','service_4', ser4value - params['amount'].GetNumber())",
          ],
          when: "meta.GetNumber('sixprotocol.divine_elite','service_4') >= params['amount'].GetNumber()",
        },
        {
          name: "bridge_12_to_17",
          allowedActioner: 1,
          desc: "Bridge service 4 to service 2",
          disable: false,
          params: [
            {
              name: "amount",
              desc: "Service 4 Amount",
              dataType: "number",
              required: true,
              defaultValue: "0",
            },
          ],
          then: [
            "ser12value = meta.GetNumber('sixprotocol.preventive','service_12')",
            "ser17value = meta.GetNumber('sixprotocol.lifestyle','service_17')",
            "toSetValue = ser12value + params['amount'].GetNumber()",
            "meta.SetNumber('sixprotocol.preventive','service_12', toSetValue)",
            "meta.SetNumber('sixprotocol.lifestyle','service_17', ser17value - params['amount'].GetNumber())",
          ],
          when: "meta.GetNumber('sixprotocol.preventive','service_12') >= params['amount'].GetNumber()",
        },
        {
          name: "bridge_3_to_1",
          allowedActioner: 1,
          desc: "Bridge service 1 to service 4",
          disable: false,
          params: [],
          then: [
            "ser3value = meta.GetNumber('sixprotocol.divine_elite','service_3')",
            "ser1Value = meta.GetNumber('sixprotocol.membership','service_1')",
            "toSetValue = ser3value + ser1Value",
            "meta.SetNumber('sixprotocol.membership','service_1', toSetValue)",
            "meta.SetNumber('sixprotocol.divine_elite','service_3', 0)",
          ],
          when: "true",
        },
        {
          name: "native_bridge",
          allowedActioner: 1,
          desc: "Send Value across schema",
          disable: false,
          params: [
            {
              name: "amount",
              desc: "Service 7 Amount",
              dataType: "number",
              required: true,
              defaultValue: "0",
            },
          ],
          then: [
            "meta.ConvertNumberAttribute('sixprotocol.divine_elite','service_7','sixprotocol.membership','service_x', params['amount'].GetNumber())",
          ],
          when: "true",
        },
        {
          name: "transform",
          allowedActioner: 1,
          desc: "Transform Metadata Image",
          disable: false,
          params: [],
          then: [
            "meta.SetImage('sixprotocol.divine_elite','https://image-trasformed-divine')",
            "meta.SetImage('sixprotocol.membership','https://image-trasformed-membership')",
          ],
          when: "true",
        },
      ],
      enable: true,
      executors: [
        "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
        "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp",
        "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq",
        "6x1adj7d8vthms0qw7p7706mwyzmpnwrgugegehg8",
        "6x1pgdtamdyl8pgl5tqnnrxs554tmspktzcexv039",
      ],
      proposalType: 0,
    });

  msgArray.push(virtualSchemaProp);

  try {
    const txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      "auto",
      "create virtual schema proposal"
    );
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};

main().catch((err) => {
  console.error("Error in main execution:", err);
});
