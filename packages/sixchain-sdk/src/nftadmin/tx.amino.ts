//@ts-nocheck
import { MsgGrantPermission, MsgRevokePermission, MsgMint, MsgBurn } from "./tx";
export const AminoConverter = {
  "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission": {
    aminoType: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
    toAmino: MsgGrantPermission.toAmino,
    fromAmino: MsgGrantPermission.fromAmino
  },
  "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission": {
    aminoType: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
    toAmino: MsgRevokePermission.toAmino,
    fromAmino: MsgRevokePermission.fromAmino
  },
  "/thesixnetwork.sixnft.nftadmin.MsgMint": {
    aminoType: "/thesixnetwork.sixnft.nftadmin.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/thesixnetwork.sixnft.nftadmin.MsgBurn": {
    aminoType: "/thesixnetwork.sixnft.nftadmin.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  }
};