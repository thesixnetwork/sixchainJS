import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/sixprotocol/tokenmngr/tx";
import { MsgCreateToken } from "./types/sixprotocol/tokenmngr/tx";
import { MsgUpdateToken } from "./types/sixprotocol/tokenmngr/tx";
import { MsgDeleteToken } from "./types/sixprotocol/tokenmngr/tx";
import { MsgCreateMintperm } from "./types/sixprotocol/tokenmngr/tx";
import { MsgUpdateMintperm } from "./types/sixprotocol/tokenmngr/tx";
import { MsgDeleteMintperm } from "./types/sixprotocol/tokenmngr/tx";
import { MsgCreateOptions } from "./types/sixprotocol/tokenmngr/tx";
import { MsgUpdateOptions } from "./types/sixprotocol/tokenmngr/tx";
import { MsgDeleteOptions } from "./types/sixprotocol/tokenmngr/tx";
import { MsgBurn } from "./types/sixprotocol/tokenmngr/tx";
import { MsgWrapToken } from "./types/sixprotocol/tokenmngr/tx";
import { MsgUnwrapToken } from "./types/sixprotocol/tokenmngr/tx";
import { MsgSendWrapToken } from "./types/sixprotocol/tokenmngr/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sixprotocol.tokenmngr.MsgUpdateParams", MsgUpdateParams],
    ["/sixprotocol.tokenmngr.MsgCreateToken", MsgCreateToken],
    ["/sixprotocol.tokenmngr.MsgUpdateToken", MsgUpdateToken],
    ["/sixprotocol.tokenmngr.MsgDeleteToken", MsgDeleteToken],
    ["/sixprotocol.tokenmngr.MsgCreateMintperm", MsgCreateMintperm],
    ["/sixprotocol.tokenmngr.MsgUpdateMintperm", MsgUpdateMintperm],
    ["/sixprotocol.tokenmngr.MsgDeleteMintperm", MsgDeleteMintperm],
    ["/sixprotocol.tokenmngr.MsgCreateOptions", MsgCreateOptions],
    ["/sixprotocol.tokenmngr.MsgUpdateOptions", MsgUpdateOptions],
    ["/sixprotocol.tokenmngr.MsgDeleteOptions", MsgDeleteOptions],
    ["/sixprotocol.tokenmngr.MsgBurn", MsgBurn],
    ["/sixprotocol.tokenmngr.MsgWrapToken", MsgWrapToken],
    ["/sixprotocol.tokenmngr.MsgUnwrapToken", MsgUnwrapToken],
    ["/sixprotocol.tokenmngr.MsgSendWrapToken", MsgSendWrapToken],
    
];

export { msgTypes }