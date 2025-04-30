//@ts-nocheck
import { MsgCreateToken, MsgUpdateToken, MsgDeleteToken, MsgCreateMintperm, MsgUpdateMintperm, MsgDeleteMintperm, MsgMint, MsgCreateOptions, MsgUpdateOptions, MsgDeleteOptions, MsgBurn, MsgConvertToAtto, MsgConvertToMicro } from "./tx";
export const AminoConverter = {
  "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken",
    toAmino: MsgCreateToken.toAmino,
    fromAmino: MsgCreateToken.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken",
    toAmino: MsgUpdateToken.toAmino,
    fromAmino: MsgUpdateToken.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken",
    toAmino: MsgDeleteToken.toAmino,
    fromAmino: MsgDeleteToken.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm",
    toAmino: MsgCreateMintperm.toAmino,
    fromAmino: MsgCreateMintperm.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm",
    toAmino: MsgUpdateMintperm.toAmino,
    fromAmino: MsgUpdateMintperm.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm",
    toAmino: MsgDeleteMintperm.toAmino,
    fromAmino: MsgDeleteMintperm.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgMint": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions",
    toAmino: MsgCreateOptions.toAmino,
    fromAmino: MsgCreateOptions.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions",
    toAmino: MsgUpdateOptions.toAmino,
    fromAmino: MsgUpdateOptions.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions",
    toAmino: MsgDeleteOptions.toAmino,
    fromAmino: MsgDeleteOptions.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgConvertToAtto": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgConvertToAtto",
    toAmino: MsgConvertToAtto.toAmino,
    fromAmino: MsgConvertToAtto.fromAmino
  },
  "/thesixnetwork.sixprotocol.tokenmngr.MsgConvertToMicro": {
    aminoType: "/thesixnetwork.sixprotocol.tokenmngr.MsgConvertToMicro",
    toAmino: MsgConvertToMicro.toAmino,
    fromAmino: MsgConvertToMicro.fromAmino
  }
};