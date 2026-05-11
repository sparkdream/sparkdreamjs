//@ts-nocheck
import { MsgUpdateParams, MsgPropose, MsgApprove, MsgReject, MsgStake, MsgWithdraw, MsgReveal, MsgVerify, MsgCancel, MsgResolveDispute } from "./tx";
export const AminoConverter = {
  "/sparkdream.reveal.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/reveal/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.reveal.v1.MsgPropose": {
    aminoType: "sparkdream/x/reveal/MsgPropose",
    toAmino: MsgPropose.toAmino,
    fromAmino: MsgPropose.fromAmino
  },
  "/sparkdream.reveal.v1.MsgApprove": {
    aminoType: "sparkdream/x/reveal/MsgApprove",
    toAmino: MsgApprove.toAmino,
    fromAmino: MsgApprove.fromAmino
  },
  "/sparkdream.reveal.v1.MsgReject": {
    aminoType: "sparkdream/x/reveal/MsgReject",
    toAmino: MsgReject.toAmino,
    fromAmino: MsgReject.fromAmino
  },
  "/sparkdream.reveal.v1.MsgStake": {
    aminoType: "sparkdream/x/reveal/MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/sparkdream.reveal.v1.MsgWithdraw": {
    aminoType: "sparkdream/x/reveal/MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/sparkdream.reveal.v1.MsgReveal": {
    aminoType: "sparkdream/x/reveal/MsgReveal",
    toAmino: MsgReveal.toAmino,
    fromAmino: MsgReveal.fromAmino
  },
  "/sparkdream.reveal.v1.MsgVerify": {
    aminoType: "sparkdream/x/reveal/MsgVerify",
    toAmino: MsgVerify.toAmino,
    fromAmino: MsgVerify.fromAmino
  },
  "/sparkdream.reveal.v1.MsgCancel": {
    aminoType: "sparkdream/x/reveal/MsgCancel",
    toAmino: MsgCancel.toAmino,
    fromAmino: MsgCancel.fromAmino
  },
  "/sparkdream.reveal.v1.MsgResolveDispute": {
    aminoType: "sparkdream/x/reveal/MsgResolveDispute",
    toAmino: MsgResolveDispute.toAmino,
    fromAmino: MsgResolveDispute.fromAmino
  }
};