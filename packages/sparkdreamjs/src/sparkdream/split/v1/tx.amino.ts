//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/sparkdream.split.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/split/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};