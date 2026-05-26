//@ts-nocheck
import { MsgExec } from "./tx";
export const AminoConverter = {
  "/sparkdream.guardian.v1.MsgExec": {
    aminoType: "sparkdream/x/guardian/MsgExec",
    toAmino: MsgExec.toAmino,
    fromAmino: MsgExec.fromAmino
  }
};