import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { v4 } from "uuid";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";
dotenv.config();

const network: string = "local";
const schemaCode: string = "TechSauce.GlobalSummit2023";

const main = async (tokenID: number): Promise<any> => {
  const { rpcUrl, mnemonic } = await getConnectorConfig(network);
  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    mnemonic,
    { prefix: "6x" }
  );
  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
  });

  const accounts = await wallet.getAccounts()
  const address = accounts[0].address;
  let metadata;

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({ rpcEndpoint: rpcUrl });
  try {
    metadata = await queryClient.sixprotocol.nftmngr.nftData({
      nftSchemaCode: schemaCode,
      tokenId: String(tokenID),
      withGlobal: false,
    });
  } catch (error: any) {
    console.log("token not found", error.error);
    metadata = null;
    // return fail
    return null;
  }
  //   console.log(metadata.data.nftData.onchain_attributes);

  const onChainAttribute = metadata.nftData.onchainAttributes;
  //   console.log(onChainAttribute);

  const mustDoList = [
    "stage_1",
    "stage_2",
    "stage_3",
    "stage_4",
    "stage_5",
    "exhibition_a",
    "exhibition_b",
    "exhibition_c",
    "bussiness_zone",
    "relax_zone",
    "exp_zone",
    "cvc_zone",
    "techsauce_booth",
  ];

  let unDoneAttrubtes = [];
  for (let i = 0; i < onChainAttribute.length; i++) {
    const element = onChainAttribute[i];
    if (mustDoList.includes(element.name)) {
      if (element.booleanAttributeValue.value === true) {
        continue;
      } else {
        unDoneAttrubtes.push(element.name);
      }
    }
  }
  //   console.log(unDoneAttrubtes);

  let msgArray: Array<EncodeObject> = [];
  const stage_list = ["stage_1", "stage_2", "stage_3", "stage_4", "stage_5"];
  const exhibition_list = ["exhibition_a", "exhibition_b", "exhibition_c"];
  const zone_list = ["bussiness_zone", "relax_zone", "exp_zone", "cvc_zone"];
  const check_in = ["check_in"];
  // check if stage_list is in unDoneAttrubtes
  for (let i = 0; i < stage_list.length; i++) {
    if (unDoneAttrubtes.includes(stage_list[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action = sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
        creator: address,
        nftSchemaCode: schemaCode,
        tokenId: token_id,
        action: "attend_stage",
        refId: `${ref_id}`,
        parameters: [{ name: "stage", value: stage_list[i] }],
      });
      msgArray.push(action);
    }
  }

  // check if exhibition_list is in unDoneAttrubtes
  for (let i = 0; i < exhibition_list.length; i++) {
    if (unDoneAttrubtes.includes(exhibition_list[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action = sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
        creator: address,
        nftSchemaCode: schemaCode,
        tokenId: token_id,
        action: "attend_exhibition",
        refId: `${ref_id}`,
        parameters: [{ name: "exhibition", value: exhibition_list[i] }],
      });
      msgArray.push(action);
    }
  }

  // check if zone_list is in unDoneAttrubtes
  for (let i = 0; i < zone_list.length; i++) {
    if (unDoneAttrubtes.includes(zone_list[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action = sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
        creator: address,
        nftSchemaCode: schemaCode,
        tokenId: token_id,
        action: "attend_zone",
        refId: `${ref_id}`,
        parameters: [{ name: "zone", value: zone_list[i] }],
      });
      msgArray.push(action);
    }
  }

  // check if check_in is in unDoneAttrubtes
  for (let i = 0; i < check_in.length; i++) {
    if (unDoneAttrubtes.includes(check_in[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action = sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
        creator: address,
        nftSchemaCode: schemaCode,
        tokenId: token_id,
        action: "check_in",
        refId: `${ref_id}`,
        parameters: [],
      });
      msgArray.push(action);
    }
  }

  try {
    const txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      "auto",
      "memo"
    );
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }

};

main(2)
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });
