//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgRegisterName, MsgSetPrimary, MsgFileDispute, MsgContestDispute, MsgResolveDispute, MsgUpdateName } from "./tx";
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
    aminoType: "/sparkdream.name.v1.MsgRegisterName",
    toAmino: MsgRegisterName.toAmino,
    fromAmino: MsgRegisterName.fromAmino
  },
  "/sparkdream.name.v1.MsgSetPrimary": {
    aminoType: "/sparkdream.name.v1.MsgSetPrimary",
    toAmino: MsgSetPrimary.toAmino,
    fromAmino: MsgSetPrimary.fromAmino
  },
  "/sparkdream.name.v1.MsgFileDispute": {
    aminoType: "/sparkdream.name.v1.MsgFileDispute",
    toAmino: MsgFileDispute.toAmino,
    fromAmino: MsgFileDispute.fromAmino
  },
  "/sparkdream.name.v1.MsgContestDispute": {
    aminoType: "sparkdream/x/name/MsgContestDispute",
    toAmino: MsgContestDispute.toAmino,
    fromAmino: MsgContestDispute.fromAmino
  },
  "/sparkdream.name.v1.MsgResolveDispute": {
    aminoType: "/sparkdream.name.v1.MsgResolveDispute",
    toAmino: MsgResolveDispute.toAmino,
    fromAmino: MsgResolveDispute.fromAmino
  },
  "/sparkdream.name.v1.MsgUpdateName": {
    aminoType: "/sparkdream.name.v1.MsgUpdateName",
    toAmino: MsgUpdateName.toAmino,
    fromAmino: MsgUpdateName.fromAmino
  }
};