//@ts-nocheck
import { MsgUpdateParams, MsgSpend } from "./tx";
export const AminoConverter = {
  "/sparkdream.ecosystem.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/ecosystem/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.ecosystem.v1.MsgSpend": {
    aminoType: "sparkdream/x/ecosystem/MsgSpend",
    toAmino: MsgSpend.toAmino,
    fromAmino: MsgSpend.fromAmino
  }
};