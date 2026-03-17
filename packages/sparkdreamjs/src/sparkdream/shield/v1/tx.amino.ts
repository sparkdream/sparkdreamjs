//@ts-nocheck
import { MsgUpdateParams, MsgShieldedExec, MsgTriggerDkg, MsgRegisterShieldedOp, MsgDeregisterShieldedOp } from "./tx";
export const AminoConverter = {
  "/sparkdream.shield.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/shield/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.shield.v1.MsgShieldedExec": {
    aminoType: "/sparkdream.shield.v1.MsgShieldedExec",
    toAmino: MsgShieldedExec.toAmino,
    fromAmino: MsgShieldedExec.fromAmino
  },
  "/sparkdream.shield.v1.MsgTriggerDkg": {
    aminoType: "/sparkdream.shield.v1.MsgTriggerDkg",
    toAmino: MsgTriggerDkg.toAmino,
    fromAmino: MsgTriggerDkg.fromAmino
  },
  "/sparkdream.shield.v1.MsgRegisterShieldedOp": {
    aminoType: "/sparkdream.shield.v1.MsgRegisterShieldedOp",
    toAmino: MsgRegisterShieldedOp.toAmino,
    fromAmino: MsgRegisterShieldedOp.fromAmino
  },
  "/sparkdream.shield.v1.MsgDeregisterShieldedOp": {
    aminoType: "/sparkdream.shield.v1.MsgDeregisterShieldedOp",
    toAmino: MsgDeregisterShieldedOp.toAmino,
    fromAmino: MsgDeregisterShieldedOp.fromAmino
  }
};