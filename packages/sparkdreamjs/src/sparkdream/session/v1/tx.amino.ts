//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreateSession, MsgRevokeSession, MsgExecSession } from "./tx";
export const AminoConverter = {
  "/sparkdream.session.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/session/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.session.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/session/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.session.v1.MsgCreateSession": {
    aminoType: "sparkdream/x/session/MsgCreateSession",
    toAmino: MsgCreateSession.toAmino,
    fromAmino: MsgCreateSession.fromAmino
  },
  "/sparkdream.session.v1.MsgRevokeSession": {
    aminoType: "sparkdream/x/session/MsgRevokeSession",
    toAmino: MsgRevokeSession.toAmino,
    fromAmino: MsgRevokeSession.fromAmino
  },
  "/sparkdream.session.v1.MsgExecSession": {
    aminoType: "sparkdream/x/session/MsgExecSession",
    toAmino: MsgExecSession.toAmino,
    fromAmino: MsgExecSession.fromAmino
  }
};