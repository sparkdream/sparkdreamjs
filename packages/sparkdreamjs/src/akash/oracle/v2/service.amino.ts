//@ts-nocheck
import { MsgAddPriceEntry, MsgUpdateParams } from "./msgs";
export const AminoConverter = {
  "/akash.oracle.v2.MsgAddPriceEntry": {
    aminoType: "/akash.oracle.v2.MsgAddPriceEntry",
    toAmino: MsgAddPriceEntry.toAmino,
    fromAmino: MsgAddPriceEntry.fromAmino
  },
  "/akash.oracle.v2.MsgUpdateParams": {
    aminoType: "/akash.oracle.v2.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};