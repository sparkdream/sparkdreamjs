//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgInviteMember, MsgAcceptInvitation, MsgTransferDream, MsgCreateInterim, MsgAssignInterim, MsgSubmitInterimWork, MsgApproveInterim, MsgAbandonInterim, MsgCompleteInterim, MsgProposeProject, MsgApproveProjectBudget, MsgCancelProject, MsgCreateInitiative, MsgAssignInitiative, MsgSubmitInitiativeWork, MsgApproveInitiative, MsgAbandonInitiative, MsgCompleteInitiative, MsgStake, MsgUnstake, MsgClaimStakingRewards, MsgCompoundStakingRewards, MsgCreateChallenge, MsgRespondToChallenge, MsgSubmitJurorVote, MsgSubmitExpertTestimony, MsgChallengeContent, MsgRespondToContentChallenge, MsgRegisterZkPublicKey, MsgCreateTag, MsgReportTag, MsgResolveTagReport, MsgCreateTagBudget, MsgAwardFromTagBudget, MsgTopUpTagBudget, MsgToggleTagBudget, MsgWithdrawTagBudget, MsgBondRole, MsgUnbondRole, MsgReportMember, MsgCosignMemberReport, MsgResolveMemberReport, MsgDefendMemberReport, MsgAppealGovAction, MsgResolveGovActionAppeal } from "./tx";
export const AminoConverter = {
  "/sparkdream.rep.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/rep/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.rep.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/rep/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.rep.v1.MsgInviteMember": {
    aminoType: "sparkdream/x/rep/MsgInviteMember",
    toAmino: MsgInviteMember.toAmino,
    fromAmino: MsgInviteMember.fromAmino
  },
  "/sparkdream.rep.v1.MsgAcceptInvitation": {
    aminoType: "sparkdream/x/rep/MsgAcceptInvitation",
    toAmino: MsgAcceptInvitation.toAmino,
    fromAmino: MsgAcceptInvitation.fromAmino
  },
  "/sparkdream.rep.v1.MsgTransferDream": {
    aminoType: "sparkdream/x/rep/MsgTransferDream",
    toAmino: MsgTransferDream.toAmino,
    fromAmino: MsgTransferDream.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateInterim": {
    aminoType: "sparkdream/x/rep/MsgCreateInterim",
    toAmino: MsgCreateInterim.toAmino,
    fromAmino: MsgCreateInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgAssignInterim": {
    aminoType: "sparkdream/x/rep/MsgAssignInterim",
    toAmino: MsgAssignInterim.toAmino,
    fromAmino: MsgAssignInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitInterimWork": {
    aminoType: "sparkdream/x/rep/MsgSubmitInterimWork",
    toAmino: MsgSubmitInterimWork.toAmino,
    fromAmino: MsgSubmitInterimWork.fromAmino
  },
  "/sparkdream.rep.v1.MsgApproveInterim": {
    aminoType: "sparkdream/x/rep/MsgApproveInterim",
    toAmino: MsgApproveInterim.toAmino,
    fromAmino: MsgApproveInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgAbandonInterim": {
    aminoType: "sparkdream/x/rep/MsgAbandonInterim",
    toAmino: MsgAbandonInterim.toAmino,
    fromAmino: MsgAbandonInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgCompleteInterim": {
    aminoType: "sparkdream/x/rep/MsgCompleteInterim",
    toAmino: MsgCompleteInterim.toAmino,
    fromAmino: MsgCompleteInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgProposeProject": {
    aminoType: "sparkdream/x/rep/MsgProposeProject",
    toAmino: MsgProposeProject.toAmino,
    fromAmino: MsgProposeProject.fromAmino
  },
  "/sparkdream.rep.v1.MsgApproveProjectBudget": {
    aminoType: "sparkdream/x/rep/MsgApproveProjectBudget",
    toAmino: MsgApproveProjectBudget.toAmino,
    fromAmino: MsgApproveProjectBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgCancelProject": {
    aminoType: "sparkdream/x/rep/MsgCancelProject",
    toAmino: MsgCancelProject.toAmino,
    fromAmino: MsgCancelProject.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateInitiative": {
    aminoType: "sparkdream/x/rep/MsgCreateInitiative",
    toAmino: MsgCreateInitiative.toAmino,
    fromAmino: MsgCreateInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgAssignInitiative": {
    aminoType: "sparkdream/x/rep/MsgAssignInitiative",
    toAmino: MsgAssignInitiative.toAmino,
    fromAmino: MsgAssignInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitInitiativeWork": {
    aminoType: "sparkdream/x/rep/MsgSubmitInitiativeWork",
    toAmino: MsgSubmitInitiativeWork.toAmino,
    fromAmino: MsgSubmitInitiativeWork.fromAmino
  },
  "/sparkdream.rep.v1.MsgApproveInitiative": {
    aminoType: "sparkdream/x/rep/MsgApproveInitiative",
    toAmino: MsgApproveInitiative.toAmino,
    fromAmino: MsgApproveInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgAbandonInitiative": {
    aminoType: "sparkdream/x/rep/MsgAbandonInitiative",
    toAmino: MsgAbandonInitiative.toAmino,
    fromAmino: MsgAbandonInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgCompleteInitiative": {
    aminoType: "sparkdream/x/rep/MsgCompleteInitiative",
    toAmino: MsgCompleteInitiative.toAmino,
    fromAmino: MsgCompleteInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgStake": {
    aminoType: "sparkdream/x/rep/MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/sparkdream.rep.v1.MsgUnstake": {
    aminoType: "sparkdream/x/rep/MsgUnstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino
  },
  "/sparkdream.rep.v1.MsgClaimStakingRewards": {
    aminoType: "sparkdream/x/rep/MsgClaimStakingRewards",
    toAmino: MsgClaimStakingRewards.toAmino,
    fromAmino: MsgClaimStakingRewards.fromAmino
  },
  "/sparkdream.rep.v1.MsgCompoundStakingRewards": {
    aminoType: "sparkdream/x/rep/MsgCompoundStakingRewards",
    toAmino: MsgCompoundStakingRewards.toAmino,
    fromAmino: MsgCompoundStakingRewards.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateChallenge": {
    aminoType: "sparkdream/x/rep/MsgCreateChallenge",
    toAmino: MsgCreateChallenge.toAmino,
    fromAmino: MsgCreateChallenge.fromAmino
  },
  "/sparkdream.rep.v1.MsgRespondToChallenge": {
    aminoType: "sparkdream/x/rep/MsgRespondToChallenge",
    toAmino: MsgRespondToChallenge.toAmino,
    fromAmino: MsgRespondToChallenge.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitJurorVote": {
    aminoType: "sparkdream/x/rep/MsgSubmitJurorVote",
    toAmino: MsgSubmitJurorVote.toAmino,
    fromAmino: MsgSubmitJurorVote.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitExpertTestimony": {
    aminoType: "sparkdream/x/rep/MsgSubmitExpertTestimony",
    toAmino: MsgSubmitExpertTestimony.toAmino,
    fromAmino: MsgSubmitExpertTestimony.fromAmino
  },
  "/sparkdream.rep.v1.MsgChallengeContent": {
    aminoType: "sparkdream/x/rep/MsgChallengeContent",
    toAmino: MsgChallengeContent.toAmino,
    fromAmino: MsgChallengeContent.fromAmino
  },
  "/sparkdream.rep.v1.MsgRespondToContentChallenge": {
    aminoType: "sparkdream/x/rep/MsgRespondToContentChallenge",
    toAmino: MsgRespondToContentChallenge.toAmino,
    fromAmino: MsgRespondToContentChallenge.fromAmino
  },
  "/sparkdream.rep.v1.MsgRegisterZkPublicKey": {
    aminoType: "sparkdream/x/rep/MsgRegisterZkPublicKey",
    toAmino: MsgRegisterZkPublicKey.toAmino,
    fromAmino: MsgRegisterZkPublicKey.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateTag": {
    aminoType: "sparkdream/x/rep/MsgCreateTag",
    toAmino: MsgCreateTag.toAmino,
    fromAmino: MsgCreateTag.fromAmino
  },
  "/sparkdream.rep.v1.MsgReportTag": {
    aminoType: "sparkdream/x/rep/MsgReportTag",
    toAmino: MsgReportTag.toAmino,
    fromAmino: MsgReportTag.fromAmino
  },
  "/sparkdream.rep.v1.MsgResolveTagReport": {
    aminoType: "sparkdream/x/rep/MsgResolveTagReport",
    toAmino: MsgResolveTagReport.toAmino,
    fromAmino: MsgResolveTagReport.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateTagBudget": {
    aminoType: "sparkdream/x/rep/MsgCreateTagBudget",
    toAmino: MsgCreateTagBudget.toAmino,
    fromAmino: MsgCreateTagBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgAwardFromTagBudget": {
    aminoType: "sparkdream/x/rep/MsgAwardFromTagBudget",
    toAmino: MsgAwardFromTagBudget.toAmino,
    fromAmino: MsgAwardFromTagBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgTopUpTagBudget": {
    aminoType: "sparkdream/x/rep/MsgTopUpTagBudget",
    toAmino: MsgTopUpTagBudget.toAmino,
    fromAmino: MsgTopUpTagBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgToggleTagBudget": {
    aminoType: "sparkdream/x/rep/MsgToggleTagBudget",
    toAmino: MsgToggleTagBudget.toAmino,
    fromAmino: MsgToggleTagBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgWithdrawTagBudget": {
    aminoType: "sparkdream/x/rep/MsgWithdrawTagBudget",
    toAmino: MsgWithdrawTagBudget.toAmino,
    fromAmino: MsgWithdrawTagBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgBondRole": {
    aminoType: "sparkdream/x/rep/MsgBondRole",
    toAmino: MsgBondRole.toAmino,
    fromAmino: MsgBondRole.fromAmino
  },
  "/sparkdream.rep.v1.MsgUnbondRole": {
    aminoType: "sparkdream/x/rep/MsgUnbondRole",
    toAmino: MsgUnbondRole.toAmino,
    fromAmino: MsgUnbondRole.fromAmino
  },
  "/sparkdream.rep.v1.MsgReportMember": {
    aminoType: "sparkdream/x/rep/MsgReportMember",
    toAmino: MsgReportMember.toAmino,
    fromAmino: MsgReportMember.fromAmino
  },
  "/sparkdream.rep.v1.MsgCosignMemberReport": {
    aminoType: "sparkdream/x/rep/MsgCosignMemberReport",
    toAmino: MsgCosignMemberReport.toAmino,
    fromAmino: MsgCosignMemberReport.fromAmino
  },
  "/sparkdream.rep.v1.MsgResolveMemberReport": {
    aminoType: "sparkdream/x/rep/MsgResolveMemberReport",
    toAmino: MsgResolveMemberReport.toAmino,
    fromAmino: MsgResolveMemberReport.fromAmino
  },
  "/sparkdream.rep.v1.MsgDefendMemberReport": {
    aminoType: "sparkdream/x/rep/MsgDefendMemberReport",
    toAmino: MsgDefendMemberReport.toAmino,
    fromAmino: MsgDefendMemberReport.fromAmino
  },
  "/sparkdream.rep.v1.MsgAppealGovAction": {
    aminoType: "sparkdream/x/rep/MsgAppealGovAction",
    toAmino: MsgAppealGovAction.toAmino,
    fromAmino: MsgAppealGovAction.fromAmino
  },
  "/sparkdream.rep.v1.MsgResolveGovActionAppeal": {
    aminoType: "sparkdream/x/rep/MsgResolveGovActionAppeal",
    toAmino: MsgResolveGovActionAppeal.toAmino,
    fromAmino: MsgResolveGovActionAppeal.fromAmino
  }
};