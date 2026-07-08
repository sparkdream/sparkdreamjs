//@ts-nocheck
import { MsgAddPriceEntry, MsgUpdateParams } from "./msgs";
export const AminoConverter = {
  "/akash.oracle.v1.MsgAddPriceEntry": {
    aminoType: "/akash.oracle.v1.MsgAddPriceEntry",
    toAmino: MsgAddPriceEntry.toAmino,
    fromAmino: MsgAddPriceEntry.fromAmino
  },
  "/akash.oracle.v1.MsgUpdateParams": {
    aminoType: "/akash.oracle.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};