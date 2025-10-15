//@ts-nocheck
import {
  MsgUpdateParams,
  MsgCreateToken,
  MsgUpdateToken,
  MsgDeleteToken,
  MsgCreateMintperm,
  MsgUpdateMintperm,
  MsgDeleteMintperm,
  MsgCreateOptions,
  MsgUpdateOptions,
  MsgDeleteOptions,
  MsgBurn,
  MsgWrapToken,
  MsgUnwrapToken,
  MsgSendWrapToken,
} from "./tx";
export const AminoConverter = {
  "/sixprotocol.tokenmngr.MsgUpdateParams": {
    aminoType: "sixprotocol/x/tokenmngr/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgCreateToken": {
    aminoType: "/sixprotocol.tokenmngr.MsgCreateToken",
    toAmino: MsgCreateToken.toAmino,
    fromAmino: MsgCreateToken.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgUpdateToken": {
    aminoType: "/sixprotocol.tokenmngr.MsgUpdateToken",
    toAmino: MsgUpdateToken.toAmino,
    fromAmino: MsgUpdateToken.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgDeleteToken": {
    aminoType: "/sixprotocol.tokenmngr.MsgDeleteToken",
    toAmino: MsgDeleteToken.toAmino,
    fromAmino: MsgDeleteToken.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgCreateMintperm": {
    aminoType: "/sixprotocol.tokenmngr.MsgCreateMintperm",
    toAmino: MsgCreateMintperm.toAmino,
    fromAmino: MsgCreateMintperm.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgUpdateMintperm": {
    aminoType: "/sixprotocol.tokenmngr.MsgUpdateMintperm",
    toAmino: MsgUpdateMintperm.toAmino,
    fromAmino: MsgUpdateMintperm.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgDeleteMintperm": {
    aminoType: "/sixprotocol.tokenmngr.MsgDeleteMintperm",
    toAmino: MsgDeleteMintperm.toAmino,
    fromAmino: MsgDeleteMintperm.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgCreateOptions": {
    aminoType: "/sixprotocol.tokenmngr.MsgCreateOptions",
    toAmino: MsgCreateOptions.toAmino,
    fromAmino: MsgCreateOptions.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgUpdateOptions": {
    aminoType: "/sixprotocol.tokenmngr.MsgUpdateOptions",
    toAmino: MsgUpdateOptions.toAmino,
    fromAmino: MsgUpdateOptions.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgDeleteOptions": {
    aminoType: "/sixprotocol.tokenmngr.MsgDeleteOptions",
    toAmino: MsgDeleteOptions.toAmino,
    fromAmino: MsgDeleteOptions.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgBurn": {
    aminoType: "/sixprotocol.tokenmngr.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgWrapToken": {
    aminoType: "/sixprotocol.tokenmngr.MsgWrapToken",
    toAmino: MsgWrapToken.toAmino,
    fromAmino: MsgWrapToken.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgUnwrapToken": {
    aminoType: "/sixprotocol.tokenmngr.MsgUnwrapToken",
    toAmino: MsgUnwrapToken.toAmino,
    fromAmino: MsgUnwrapToken.fromAmino,
  },
  "/sixprotocol.tokenmngr.MsgSendWrapToken": {
    aminoType: "/sixprotocol.tokenmngr.MsgSendWrapToken",
    toAmino: MsgSendWrapToken.toAmino,
    fromAmino: MsgSendWrapToken.fromAmino,
  },
};
