//@ts-nocheck
import { MsgUpdateParams, MsgShieldedExec, MsgTriggerDkg, MsgRegisterShieldedOp, MsgDeregisterShieldedOp } from "./tx";
export const AminoConverter = {
  "/sparkdream.shield.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/shield/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.shield.v1.MsgShieldedExec": {
    aminoType: "sparkdream/x/shield/MsgShieldedExec",
    toAmino: MsgShieldedExec.toAmino,
    fromAmino: MsgShieldedExec.fromAmino
  },
  "/sparkdream.shield.v1.MsgTriggerDkg": {
    aminoType: "sparkdream/x/shield/MsgTriggerDkg",
    toAmino: MsgTriggerDkg.toAmino,
    fromAmino: MsgTriggerDkg.fromAmino
  },
  "/sparkdream.shield.v1.MsgRegisterShieldedOp": {
    aminoType: "sparkdream/x/shield/MsgRegisterShieldedOp",
    toAmino: MsgRegisterShieldedOp.toAmino,
    fromAmino: MsgRegisterShieldedOp.fromAmino
  },
  "/sparkdream.shield.v1.MsgDeregisterShieldedOp": {
    aminoType: "sparkdream/x/shield/MsgDeregisterShieldedOp",
    toAmino: MsgDeregisterShieldedOp.toAmino,
    fromAmino: MsgDeregisterShieldedOp.fromAmino
  }
};