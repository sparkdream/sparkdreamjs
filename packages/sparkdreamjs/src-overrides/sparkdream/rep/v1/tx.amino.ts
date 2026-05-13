//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope's auto-generated toAmino emits `[]` for empty repeated fields
// (the `if (message.field)` check is truthy for `[]` in JS), but
// cosmossdk.io/x/tx/signing/aminojson on the chain side omits them per
// `omitempty`. Whenever a repeated field happens to be empty (e.g. a project
// proposal with no tags / no deliverables / no milestones), the JS side signs
// `"tags":[]` and the chain reconstructs without the key — sign bytes differ,
// surfacing as "signature verification failed" / "unauthorized".
//
// Every rep message with a repeated field is patched here to mirror aminojson's
// omitempty (return `undefined` when empty). The rest of the converters pass
// straight through to the auto-generated toAmino/fromAmino.

import {
  MsgUpdateParams, MsgUpdateOperationalParams, MsgInviteMember, MsgAcceptInvitation,
  MsgTransferDream, MsgCreateInterim, MsgAssignInterim, MsgSubmitInterimWork,
  MsgApproveInterim, MsgAbandonInterim, MsgCompleteInterim, MsgProposeProject,
  MsgApproveProjectBudget, MsgCancelProject, MsgCreateInitiative, MsgAssignInitiative,
  MsgSubmitInitiativeWork, MsgApproveInitiative, MsgAbandonInitiative,
  MsgCompleteInitiative, MsgStake, MsgUnstake, MsgClaimStakingRewards,
  MsgCompoundStakingRewards, MsgCreateChallenge, MsgRespondToChallenge,
  MsgSubmitJurorVote, MsgSubmitExpertTestimony, MsgChallengeContent,
  MsgRespondToContentChallenge, MsgRegisterZkPublicKey, MsgCreateTag, MsgReportTag,
  MsgResolveTagReport, MsgCreateTagBudget, MsgAwardFromTagBudget, MsgTopUpTagBudget,
  MsgToggleTagBudget, MsgWithdrawTagBudget, MsgBondRole, MsgUnbondRole,
  MsgReportMember, MsgCosignMemberReport, MsgResolveMemberReport,
  MsgDefendMemberReport, MsgAppealGovAction, MsgResolveGovActionAppeal,
} from "./tx";
import { CriteriaVote } from "./jury_review";

export const AminoConverter = {
  "/sparkdream.rep.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/rep/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.rep.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/rep/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino,
  },
  "/sparkdream.rep.v1.MsgInviteMember": {
    aminoType: "sparkdream/x/rep/MsgInviteMember",
    toAmino(message: any): any {
      const obj: any = {};
      obj.inviter = message.inviter === "" ? undefined : message.inviter;
      obj.invitee_address = message.inviteeAddress === "" ? undefined : message.inviteeAddress;
      obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
      obj.vouched_tags = (message.vouchedTags?.length ?? 0) > 0
        ? message.vouchedTags.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgInviteMember.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAcceptInvitation": {
    aminoType: "sparkdream/x/rep/MsgAcceptInvitation",
    toAmino: MsgAcceptInvitation.toAmino,
    fromAmino: MsgAcceptInvitation.fromAmino,
  },
  "/sparkdream.rep.v1.MsgTransferDream": {
    aminoType: "sparkdream/x/rep/MsgTransferDream",
    toAmino: MsgTransferDream.toAmino,
    fromAmino: MsgTransferDream.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCreateInterim": {
    aminoType: "sparkdream/x/rep/MsgCreateInterim",
    toAmino: MsgCreateInterim.toAmino,
    fromAmino: MsgCreateInterim.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAssignInterim": {
    aminoType: "sparkdream/x/rep/MsgAssignInterim",
    toAmino: MsgAssignInterim.toAmino,
    fromAmino: MsgAssignInterim.fromAmino,
  },
  "/sparkdream.rep.v1.MsgSubmitInterimWork": {
    aminoType: "sparkdream/x/rep/MsgSubmitInterimWork",
    toAmino: MsgSubmitInterimWork.toAmino,
    fromAmino: MsgSubmitInterimWork.fromAmino,
  },
  "/sparkdream.rep.v1.MsgApproveInterim": {
    aminoType: "sparkdream/x/rep/MsgApproveInterim",
    toAmino: MsgApproveInterim.toAmino,
    fromAmino: MsgApproveInterim.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAbandonInterim": {
    aminoType: "sparkdream/x/rep/MsgAbandonInterim",
    toAmino: MsgAbandonInterim.toAmino,
    fromAmino: MsgAbandonInterim.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCompleteInterim": {
    aminoType: "sparkdream/x/rep/MsgCompleteInterim",
    toAmino: MsgCompleteInterim.toAmino,
    fromAmino: MsgCompleteInterim.fromAmino,
  },
  // The UI hardcodes `deliverables: []` and `milestones: []` on every project
  // proposal, so without this override every submission fails sigverify.
  "/sparkdream.rep.v1.MsgProposeProject": {
    aminoType: "sparkdream/x/rep/MsgProposeProject",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.name = message.name === "" ? undefined : message.name;
      obj.description = message.description === "" ? undefined : message.description;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.category = message.category === 0 ? undefined : message.category;
      obj.council = message.council === "" ? undefined : message.council;
      obj.requested_budget = message.requestedBudget === "" ? undefined : message.requestedBudget;
      obj.requested_spark = message.requestedSpark === "" ? undefined : message.requestedSpark;
      obj.deliverables = (message.deliverables?.length ?? 0) > 0
        ? message.deliverables.map((e: string) => e)
        : undefined;
      obj.milestones = (message.milestones?.length ?? 0) > 0
        ? message.milestones.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgProposeProject.fromAmino,
  },
  "/sparkdream.rep.v1.MsgApproveProjectBudget": {
    aminoType: "sparkdream/x/rep/MsgApproveProjectBudget",
    toAmino: MsgApproveProjectBudget.toAmino,
    fromAmino: MsgApproveProjectBudget.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCancelProject": {
    aminoType: "sparkdream/x/rep/MsgCancelProject",
    toAmino: MsgCancelProject.toAmino,
    fromAmino: MsgCancelProject.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCreateInitiative": {
    aminoType: "sparkdream/x/rep/MsgCreateInitiative",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
      obj.title = message.title === "" ? undefined : message.title;
      obj.description = message.description === "" ? undefined : message.description;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.tier = message.tier !== BigInt(0) ? message.tier?.toString() : undefined;
      obj.category = message.category !== BigInt(0) ? message.category?.toString() : undefined;
      obj.template_id = message.templateId === "" ? undefined : message.templateId;
      obj.budget = message.budget === "" ? undefined : message.budget;
      return obj;
    },
    fromAmino: MsgCreateInitiative.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAssignInitiative": {
    aminoType: "sparkdream/x/rep/MsgAssignInitiative",
    toAmino: MsgAssignInitiative.toAmino,
    fromAmino: MsgAssignInitiative.fromAmino,
  },
  "/sparkdream.rep.v1.MsgSubmitInitiativeWork": {
    aminoType: "sparkdream/x/rep/MsgSubmitInitiativeWork",
    toAmino: MsgSubmitInitiativeWork.toAmino,
    fromAmino: MsgSubmitInitiativeWork.fromAmino,
  },
  "/sparkdream.rep.v1.MsgApproveInitiative": {
    aminoType: "sparkdream/x/rep/MsgApproveInitiative",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
      obj.criteria_votes = (message.criteriaVotes?.length ?? 0) > 0
        ? message.criteriaVotes.map((e: any) => e ? CriteriaVote.toAmino(e) : undefined)
        : undefined;
      obj.approved = message.approved === false ? undefined : message.approved;
      obj.comments = message.comments === "" ? undefined : message.comments;
      return obj;
    },
    fromAmino: MsgApproveInitiative.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAbandonInitiative": {
    aminoType: "sparkdream/x/rep/MsgAbandonInitiative",
    toAmino: MsgAbandonInitiative.toAmino,
    fromAmino: MsgAbandonInitiative.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCompleteInitiative": {
    aminoType: "sparkdream/x/rep/MsgCompleteInitiative",
    toAmino: MsgCompleteInitiative.toAmino,
    fromAmino: MsgCompleteInitiative.fromAmino,
  },
  "/sparkdream.rep.v1.MsgStake": {
    aminoType: "sparkdream/x/rep/MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino,
  },
  "/sparkdream.rep.v1.MsgUnstake": {
    aminoType: "sparkdream/x/rep/MsgUnstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino,
  },
  "/sparkdream.rep.v1.MsgClaimStakingRewards": {
    aminoType: "sparkdream/x/rep/MsgClaimStakingRewards",
    toAmino: MsgClaimStakingRewards.toAmino,
    fromAmino: MsgClaimStakingRewards.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCompoundStakingRewards": {
    aminoType: "sparkdream/x/rep/MsgCompoundStakingRewards",
    toAmino: MsgCompoundStakingRewards.toAmino,
    fromAmino: MsgCompoundStakingRewards.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCreateChallenge": {
    aminoType: "sparkdream/x/rep/MsgCreateChallenge",
    toAmino(message: any): any {
      const obj: any = {};
      obj.challenger = message.challenger === "" ? undefined : message.challenger;
      obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
      obj.reason = message.reason === "" ? undefined : message.reason;
      obj.evidence = (message.evidence?.length ?? 0) > 0
        ? message.evidence.map((e: string) => e)
        : undefined;
      obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
      return obj;
    },
    fromAmino: MsgCreateChallenge.fromAmino,
  },
  "/sparkdream.rep.v1.MsgRespondToChallenge": {
    aminoType: "sparkdream/x/rep/MsgRespondToChallenge",
    toAmino(message: any): any {
      const obj: any = {};
      obj.assignee = message.assignee === "" ? undefined : message.assignee;
      obj.challenge_id = message.challengeId !== BigInt(0) ? message.challengeId?.toString() : undefined;
      obj.response = message.response === "" ? undefined : message.response;
      obj.evidence = (message.evidence?.length ?? 0) > 0
        ? message.evidence.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgRespondToChallenge.fromAmino,
  },
  "/sparkdream.rep.v1.MsgSubmitJurorVote": {
    aminoType: "sparkdream/x/rep/MsgSubmitJurorVote",
    toAmino(message: any): any {
      const obj: any = {};
      obj.juror = message.juror === "" ? undefined : message.juror;
      obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
      obj.criteria_votes = (message.criteriaVotes?.length ?? 0) > 0
        ? message.criteriaVotes.map((e: any) => e ? CriteriaVote.toAmino(e) : undefined)
        : undefined;
      obj.verdict = message.verdict === 0 ? undefined : message.verdict;
      obj.confidence = message.confidence === "" ? undefined : message.confidence;
      obj.reasoning = message.reasoning === "" ? undefined : message.reasoning;
      return obj;
    },
    fromAmino: MsgSubmitJurorVote.fromAmino,
  },
  "/sparkdream.rep.v1.MsgSubmitExpertTestimony": {
    aminoType: "sparkdream/x/rep/MsgSubmitExpertTestimony",
    toAmino: MsgSubmitExpertTestimony.toAmino,
    fromAmino: MsgSubmitExpertTestimony.fromAmino,
  },
  "/sparkdream.rep.v1.MsgChallengeContent": {
    aminoType: "sparkdream/x/rep/MsgChallengeContent",
    toAmino(message: any): any {
      const obj: any = {};
      obj.challenger = message.challenger === "" ? undefined : message.challenger;
      obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
      obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
      obj.reason = message.reason === "" ? undefined : message.reason;
      obj.evidence = (message.evidence?.length ?? 0) > 0
        ? message.evidence.map((e: string) => e)
        : undefined;
      obj.staked_dream = message.stakedDream === null ? undefined : message.stakedDream;
      return obj;
    },
    fromAmino: MsgChallengeContent.fromAmino,
  },
  "/sparkdream.rep.v1.MsgRespondToContentChallenge": {
    aminoType: "sparkdream/x/rep/MsgRespondToContentChallenge",
    toAmino(message: any): any {
      const obj: any = {};
      obj.author = message.author === "" ? undefined : message.author;
      obj.content_challenge_id = message.contentChallengeId !== BigInt(0) ? message.contentChallengeId?.toString() : undefined;
      obj.response = message.response === "" ? undefined : message.response;
      obj.evidence = (message.evidence?.length ?? 0) > 0
        ? message.evidence.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgRespondToContentChallenge.fromAmino,
  },
  "/sparkdream.rep.v1.MsgRegisterZkPublicKey": {
    aminoType: "sparkdream/x/rep/MsgRegisterZkPublicKey",
    toAmino: MsgRegisterZkPublicKey.toAmino,
    fromAmino: MsgRegisterZkPublicKey.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCreateTag": {
    aminoType: "sparkdream/x/rep/MsgCreateTag",
    toAmino: MsgCreateTag.toAmino,
    fromAmino: MsgCreateTag.fromAmino,
  },
  "/sparkdream.rep.v1.MsgReportTag": {
    aminoType: "sparkdream/x/rep/MsgReportTag",
    toAmino: MsgReportTag.toAmino,
    fromAmino: MsgReportTag.fromAmino,
  },
  "/sparkdream.rep.v1.MsgResolveTagReport": {
    aminoType: "sparkdream/x/rep/MsgResolveTagReport",
    toAmino: MsgResolveTagReport.toAmino,
    fromAmino: MsgResolveTagReport.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCreateTagBudget": {
    aminoType: "sparkdream/x/rep/MsgCreateTagBudget",
    toAmino: MsgCreateTagBudget.toAmino,
    fromAmino: MsgCreateTagBudget.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAwardFromTagBudget": {
    aminoType: "sparkdream/x/rep/MsgAwardFromTagBudget",
    toAmino: MsgAwardFromTagBudget.toAmino,
    fromAmino: MsgAwardFromTagBudget.fromAmino,
  },
  "/sparkdream.rep.v1.MsgTopUpTagBudget": {
    aminoType: "sparkdream/x/rep/MsgTopUpTagBudget",
    toAmino: MsgTopUpTagBudget.toAmino,
    fromAmino: MsgTopUpTagBudget.fromAmino,
  },
  "/sparkdream.rep.v1.MsgToggleTagBudget": {
    aminoType: "sparkdream/x/rep/MsgToggleTagBudget",
    toAmino: MsgToggleTagBudget.toAmino,
    fromAmino: MsgToggleTagBudget.fromAmino,
  },
  "/sparkdream.rep.v1.MsgWithdrawTagBudget": {
    aminoType: "sparkdream/x/rep/MsgWithdrawTagBudget",
    toAmino: MsgWithdrawTagBudget.toAmino,
    fromAmino: MsgWithdrawTagBudget.fromAmino,
  },
  "/sparkdream.rep.v1.MsgBondRole": {
    aminoType: "sparkdream/x/rep/MsgBondRole",
    toAmino: MsgBondRole.toAmino,
    fromAmino: MsgBondRole.fromAmino,
  },
  "/sparkdream.rep.v1.MsgUnbondRole": {
    aminoType: "sparkdream/x/rep/MsgUnbondRole",
    toAmino: MsgUnbondRole.toAmino,
    fromAmino: MsgUnbondRole.fromAmino,
  },
  "/sparkdream.rep.v1.MsgReportMember": {
    aminoType: "sparkdream/x/rep/MsgReportMember",
    toAmino: MsgReportMember.toAmino,
    fromAmino: MsgReportMember.fromAmino,
  },
  "/sparkdream.rep.v1.MsgCosignMemberReport": {
    aminoType: "sparkdream/x/rep/MsgCosignMemberReport",
    toAmino: MsgCosignMemberReport.toAmino,
    fromAmino: MsgCosignMemberReport.fromAmino,
  },
  "/sparkdream.rep.v1.MsgResolveMemberReport": {
    aminoType: "sparkdream/x/rep/MsgResolveMemberReport",
    toAmino: MsgResolveMemberReport.toAmino,
    fromAmino: MsgResolveMemberReport.fromAmino,
  },
  "/sparkdream.rep.v1.MsgDefendMemberReport": {
    aminoType: "sparkdream/x/rep/MsgDefendMemberReport",
    toAmino: MsgDefendMemberReport.toAmino,
    fromAmino: MsgDefendMemberReport.fromAmino,
  },
  "/sparkdream.rep.v1.MsgAppealGovAction": {
    aminoType: "sparkdream/x/rep/MsgAppealGovAction",
    toAmino: MsgAppealGovAction.toAmino,
    fromAmino: MsgAppealGovAction.fromAmino,
  },
  "/sparkdream.rep.v1.MsgResolveGovActionAppeal": {
    aminoType: "sparkdream/x/rep/MsgResolveGovActionAppeal",
    toAmino: MsgResolveGovActionAppeal.toAmino,
    fromAmino: MsgResolveGovActionAppeal.fromAmino,
  },
};
