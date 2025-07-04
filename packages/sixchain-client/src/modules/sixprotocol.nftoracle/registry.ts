import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/sixprotocol/nftoracle/tx";
import { MsgCreateMintRequest } from "./types/sixprotocol/nftoracle/tx";
import { MsgSubmitMintResponse } from "./types/sixprotocol/nftoracle/tx";
import { MsgCreateActionRequest } from "./types/sixprotocol/nftoracle/tx";
import { MsgSubmitActionResponse } from "./types/sixprotocol/nftoracle/tx";
import { MsgCreateVerifyCollectionOwnerRequest } from "./types/sixprotocol/nftoracle/tx";
import { MsgSubmitVerifyCollectionOwner } from "./types/sixprotocol/nftoracle/tx";
import { MsgSetMinimumConfirmation } from "./types/sixprotocol/nftoracle/tx";
import { MsgCreateActionSigner } from "./types/sixprotocol/nftoracle/tx";
import { MsgUpdateActionSigner } from "./types/sixprotocol/nftoracle/tx";
import { MsgDeleteActionSigner } from "./types/sixprotocol/nftoracle/tx";
import { MsgCreateActionSignerConfig } from "./types/sixprotocol/nftoracle/tx";
import { MsgUpdateActionSignerConfig } from "./types/sixprotocol/nftoracle/tx";
import { MsgDeleteActionSignerConfig } from "./types/sixprotocol/nftoracle/tx";
import { MsgCreateSyncActionSigner } from "./types/sixprotocol/nftoracle/tx";
import { MsgSubmitSyncActionSigner } from "./types/sixprotocol/nftoracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sixprotocol.nftoracle.MsgUpdateParams", MsgUpdateParams],
    ["/sixprotocol.nftoracle.MsgCreateMintRequest", MsgCreateMintRequest],
    ["/sixprotocol.nftoracle.MsgSubmitMintResponse", MsgSubmitMintResponse],
    ["/sixprotocol.nftoracle.MsgCreateActionRequest", MsgCreateActionRequest],
    ["/sixprotocol.nftoracle.MsgSubmitActionResponse", MsgSubmitActionResponse],
    ["/sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest", MsgCreateVerifyCollectionOwnerRequest],
    ["/sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner", MsgSubmitVerifyCollectionOwner],
    ["/sixprotocol.nftoracle.MsgSetMinimumConfirmation", MsgSetMinimumConfirmation],
    ["/sixprotocol.nftoracle.MsgCreateActionSigner", MsgCreateActionSigner],
    ["/sixprotocol.nftoracle.MsgUpdateActionSigner", MsgUpdateActionSigner],
    ["/sixprotocol.nftoracle.MsgDeleteActionSigner", MsgDeleteActionSigner],
    ["/sixprotocol.nftoracle.MsgCreateActionSignerConfig", MsgCreateActionSignerConfig],
    ["/sixprotocol.nftoracle.MsgUpdateActionSignerConfig", MsgUpdateActionSignerConfig],
    ["/sixprotocol.nftoracle.MsgDeleteActionSignerConfig", MsgDeleteActionSignerConfig],
    ["/sixprotocol.nftoracle.MsgCreateSyncActionSigner", MsgCreateSyncActionSigner],
    ["/sixprotocol.nftoracle.MsgSubmitSyncActionSigner", MsgSubmitSyncActionSigner],
    
];

export { msgTypes }