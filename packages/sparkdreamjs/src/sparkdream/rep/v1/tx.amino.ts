//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgInviteMember, MsgAcceptInvitation, MsgTransferDream, MsgCreateInterim, MsgAssignInterim, MsgSubmitInterimWork, MsgApproveInterim, MsgAbandonInterim, MsgCompleteInterim, MsgProposeProject, MsgApproveProjectBudget, MsgCancelProject, MsgCreateInitiative, MsgAssignInitiative, MsgSubmitInitiativeWork, MsgApproveInitiative, MsgAbandonInitiative, MsgCompleteInitiative, MsgStake, MsgUnstake, MsgClaimStakingRewards, MsgCompoundStakingRewards, MsgCreateChallenge, MsgRespondToChallenge, MsgSubmitJurorVote, MsgSubmitExpertTestimony, MsgChallengeContent, MsgRespondToContentChallenge, MsgRegisterZkPublicKey } from "./tx";
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
    aminoType: "/sparkdream.rep.v1.MsgInviteMember",
    toAmino: MsgInviteMember.toAmino,
    fromAmino: MsgInviteMember.fromAmino
  },
  "/sparkdream.rep.v1.MsgAcceptInvitation": {
    aminoType: "/sparkdream.rep.v1.MsgAcceptInvitation",
    toAmino: MsgAcceptInvitation.toAmino,
    fromAmino: MsgAcceptInvitation.fromAmino
  },
  "/sparkdream.rep.v1.MsgTransferDream": {
    aminoType: "/sparkdream.rep.v1.MsgTransferDream",
    toAmino: MsgTransferDream.toAmino,
    fromAmino: MsgTransferDream.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateInterim": {
    aminoType: "/sparkdream.rep.v1.MsgCreateInterim",
    toAmino: MsgCreateInterim.toAmino,
    fromAmino: MsgCreateInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgAssignInterim": {
    aminoType: "/sparkdream.rep.v1.MsgAssignInterim",
    toAmino: MsgAssignInterim.toAmino,
    fromAmino: MsgAssignInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitInterimWork": {
    aminoType: "/sparkdream.rep.v1.MsgSubmitInterimWork",
    toAmino: MsgSubmitInterimWork.toAmino,
    fromAmino: MsgSubmitInterimWork.fromAmino
  },
  "/sparkdream.rep.v1.MsgApproveInterim": {
    aminoType: "/sparkdream.rep.v1.MsgApproveInterim",
    toAmino: MsgApproveInterim.toAmino,
    fromAmino: MsgApproveInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgAbandonInterim": {
    aminoType: "/sparkdream.rep.v1.MsgAbandonInterim",
    toAmino: MsgAbandonInterim.toAmino,
    fromAmino: MsgAbandonInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgCompleteInterim": {
    aminoType: "/sparkdream.rep.v1.MsgCompleteInterim",
    toAmino: MsgCompleteInterim.toAmino,
    fromAmino: MsgCompleteInterim.fromAmino
  },
  "/sparkdream.rep.v1.MsgProposeProject": {
    aminoType: "/sparkdream.rep.v1.MsgProposeProject",
    toAmino: MsgProposeProject.toAmino,
    fromAmino: MsgProposeProject.fromAmino
  },
  "/sparkdream.rep.v1.MsgApproveProjectBudget": {
    aminoType: "/sparkdream.rep.v1.MsgApproveProjectBudget",
    toAmino: MsgApproveProjectBudget.toAmino,
    fromAmino: MsgApproveProjectBudget.fromAmino
  },
  "/sparkdream.rep.v1.MsgCancelProject": {
    aminoType: "/sparkdream.rep.v1.MsgCancelProject",
    toAmino: MsgCancelProject.toAmino,
    fromAmino: MsgCancelProject.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateInitiative": {
    aminoType: "/sparkdream.rep.v1.MsgCreateInitiative",
    toAmino: MsgCreateInitiative.toAmino,
    fromAmino: MsgCreateInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgAssignInitiative": {
    aminoType: "/sparkdream.rep.v1.MsgAssignInitiative",
    toAmino: MsgAssignInitiative.toAmino,
    fromAmino: MsgAssignInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitInitiativeWork": {
    aminoType: "/sparkdream.rep.v1.MsgSubmitInitiativeWork",
    toAmino: MsgSubmitInitiativeWork.toAmino,
    fromAmino: MsgSubmitInitiativeWork.fromAmino
  },
  "/sparkdream.rep.v1.MsgApproveInitiative": {
    aminoType: "/sparkdream.rep.v1.MsgApproveInitiative",
    toAmino: MsgApproveInitiative.toAmino,
    fromAmino: MsgApproveInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgAbandonInitiative": {
    aminoType: "/sparkdream.rep.v1.MsgAbandonInitiative",
    toAmino: MsgAbandonInitiative.toAmino,
    fromAmino: MsgAbandonInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgCompleteInitiative": {
    aminoType: "/sparkdream.rep.v1.MsgCompleteInitiative",
    toAmino: MsgCompleteInitiative.toAmino,
    fromAmino: MsgCompleteInitiative.fromAmino
  },
  "/sparkdream.rep.v1.MsgStake": {
    aminoType: "/sparkdream.rep.v1.MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/sparkdream.rep.v1.MsgUnstake": {
    aminoType: "/sparkdream.rep.v1.MsgUnstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino
  },
  "/sparkdream.rep.v1.MsgClaimStakingRewards": {
    aminoType: "/sparkdream.rep.v1.MsgClaimStakingRewards",
    toAmino: MsgClaimStakingRewards.toAmino,
    fromAmino: MsgClaimStakingRewards.fromAmino
  },
  "/sparkdream.rep.v1.MsgCompoundStakingRewards": {
    aminoType: "/sparkdream.rep.v1.MsgCompoundStakingRewards",
    toAmino: MsgCompoundStakingRewards.toAmino,
    fromAmino: MsgCompoundStakingRewards.fromAmino
  },
  "/sparkdream.rep.v1.MsgCreateChallenge": {
    aminoType: "/sparkdream.rep.v1.MsgCreateChallenge",
    toAmino: MsgCreateChallenge.toAmino,
    fromAmino: MsgCreateChallenge.fromAmino
  },
  "/sparkdream.rep.v1.MsgRespondToChallenge": {
    aminoType: "/sparkdream.rep.v1.MsgRespondToChallenge",
    toAmino: MsgRespondToChallenge.toAmino,
    fromAmino: MsgRespondToChallenge.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitJurorVote": {
    aminoType: "/sparkdream.rep.v1.MsgSubmitJurorVote",
    toAmino: MsgSubmitJurorVote.toAmino,
    fromAmino: MsgSubmitJurorVote.fromAmino
  },
  "/sparkdream.rep.v1.MsgSubmitExpertTestimony": {
    aminoType: "/sparkdream.rep.v1.MsgSubmitExpertTestimony",
    toAmino: MsgSubmitExpertTestimony.toAmino,
    fromAmino: MsgSubmitExpertTestimony.fromAmino
  },
  "/sparkdream.rep.v1.MsgChallengeContent": {
    aminoType: "/sparkdream.rep.v1.MsgChallengeContent",
    toAmino: MsgChallengeContent.toAmino,
    fromAmino: MsgChallengeContent.fromAmino
  },
  "/sparkdream.rep.v1.MsgRespondToContentChallenge": {
    aminoType: "/sparkdream.rep.v1.MsgRespondToContentChallenge",
    toAmino: MsgRespondToContentChallenge.toAmino,
    fromAmino: MsgRespondToContentChallenge.fromAmino
  },
  "/sparkdream.rep.v1.MsgRegisterZkPublicKey": {
    aminoType: "/sparkdream.rep.v1.MsgRegisterZkPublicKey",
    toAmino: MsgRegisterZkPublicKey.toAmino,
    fromAmino: MsgRegisterZkPublicKey.fromAmino
  }
};