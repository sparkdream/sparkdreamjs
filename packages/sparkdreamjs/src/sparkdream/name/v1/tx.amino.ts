//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgRegisterName, MsgSetPrimary, MsgFileDispute, MsgContestDispute, MsgResolveDispute, MsgUpdateName, MsgSetDisplayName, MsgSetTarget, MsgAcceptTarget, MsgTransferName } from "./tx";
export const AminoConverter = {
  "/sparkdream.name.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/name/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.name.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/name/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.name.v1.MsgRegisterName": {
    aminoType: "sparkdream/x/name/MsgRegisterName",
    toAmino: MsgRegisterName.toAmino,
    fromAmino: MsgRegisterName.fromAmino
  },
  "/sparkdream.name.v1.MsgSetPrimary": {
    aminoType: "sparkdream/x/name/MsgSetPrimary",
    toAmino: MsgSetPrimary.toAmino,
    fromAmino: MsgSetPrimary.fromAmino
  },
  "/sparkdream.name.v1.MsgFileDispute": {
    aminoType: "sparkdream/x/name/MsgFileDispute",
    toAmino: MsgFileDispute.toAmino,
    fromAmino: MsgFileDispute.fromAmino
  },
  "/sparkdream.name.v1.MsgContestDispute": {
    aminoType: "sparkdream/x/name/MsgContestDispute",
    toAmino: MsgContestDispute.toAmino,
    fromAmino: MsgContestDispute.fromAmino
  },
  "/sparkdream.name.v1.MsgResolveDispute": {
    aminoType: "sparkdream/x/name/MsgResolveDispute",
    toAmino: MsgResolveDispute.toAmino,
    fromAmino: MsgResolveDispute.fromAmino
  },
  "/sparkdream.name.v1.MsgUpdateName": {
    aminoType: "sparkdream/x/name/MsgUpdateName",
    toAmino: MsgUpdateName.toAmino,
    fromAmino: MsgUpdateName.fromAmino
  },
  "/sparkdream.name.v1.MsgSetDisplayName": {
    aminoType: "sparkdream/x/name/MsgSetDisplayName",
    toAmino: MsgSetDisplayName.toAmino,
    fromAmino: MsgSetDisplayName.fromAmino
  },
  "/sparkdream.name.v1.MsgSetTarget": {
    aminoType: "sparkdream/x/name/MsgSetTarget",
    toAmino: MsgSetTarget.toAmino,
    fromAmino: MsgSetTarget.fromAmino
  },
  "/sparkdream.name.v1.MsgAcceptTarget": {
    aminoType: "sparkdream/x/name/MsgAcceptTarget",
    toAmino: MsgAcceptTarget.toAmino,
    fromAmino: MsgAcceptTarget.fromAmino
  },
  "/sparkdream.name.v1.MsgTransferName": {
    aminoType: "sparkdream/x/name/MsgTransferName",
    toAmino: MsgTransferName.toAmino,
    fromAmino: MsgTransferName.fromAmino
  }
};