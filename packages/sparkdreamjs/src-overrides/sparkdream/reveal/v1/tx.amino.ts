//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for the broader rationale.
//
// MsgPropose has `repeated TrancheDef tranches` which Telescope emits as `[]`
// when empty — fine for a normal proposal but the override still mirrors
// aminojson's omitempty so the JS-signed bytes match the chain's reconstruction
// for any edge case (e.g. a single-tranche proposal where the contributor
// passes `[]` then computes tranches server-side).

import {
  MsgUpdateParams, MsgPropose, MsgApprove, MsgReject, MsgStake, MsgWithdraw,
  MsgReveal, MsgVerify, MsgCancel, MsgResolveDispute,
} from "./tx";
import { TrancheDef } from "./types";

export const AminoConverter = {
  "/sparkdream.reveal.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/reveal/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgPropose": {
    aminoType: "sparkdream/x/reveal/MsgPropose",
    toAmino(message: any): any {
      const obj: any = {};
      obj.contributor = message.contributor === "" ? undefined : message.contributor;
      obj.project_name = message.projectName === "" ? undefined : message.projectName;
      obj.description = message.description === "" ? undefined : message.description;
      obj.total_valuation = message.totalValuation === "" ? undefined : message.totalValuation;
      obj.tranches = (message.tranches?.length ?? 0) > 0
        ? message.tranches.map((e: any) => e ? TrancheDef.toAmino(e) : undefined)
        : undefined;
      obj.initial_license = message.initialLicense === "" ? undefined : message.initialLicense;
      obj.final_license = message.finalLicense === "" ? undefined : message.finalLicense;
      return obj;
    },
    fromAmino: MsgPropose.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgApprove": {
    aminoType: "sparkdream/x/reveal/MsgApprove",
    toAmino: MsgApprove.toAmino,
    fromAmino: MsgApprove.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgReject": {
    aminoType: "sparkdream/x/reveal/MsgReject",
    toAmino: MsgReject.toAmino,
    fromAmino: MsgReject.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgStake": {
    aminoType: "sparkdream/x/reveal/MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgWithdraw": {
    aminoType: "sparkdream/x/reveal/MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgReveal": {
    aminoType: "sparkdream/x/reveal/MsgReveal",
    toAmino: MsgReveal.toAmino,
    fromAmino: MsgReveal.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgVerify": {
    aminoType: "sparkdream/x/reveal/MsgVerify",
    toAmino: MsgVerify.toAmino,
    fromAmino: MsgVerify.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgCancel": {
    aminoType: "sparkdream/x/reveal/MsgCancel",
    toAmino: MsgCancel.toAmino,
    fromAmino: MsgCancel.fromAmino,
  },
  "/sparkdream.reveal.v1.MsgResolveDispute": {
    aminoType: "sparkdream/x/reveal/MsgResolveDispute",
    toAmino: MsgResolveDispute.toAmino,
    fromAmino: MsgResolveDispute.fromAmino,
  },
};
