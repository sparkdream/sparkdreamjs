//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgInviteMember, MsgAcceptInvitation, MsgTransferDream, MsgCreateInterim, MsgAssignInterim, MsgSubmitInterimWork, MsgApproveInterim, MsgAbandonInterim, MsgCompleteInterim, MsgProposeProject, MsgApproveProjectBudget, MsgCancelProject, MsgCreateInitiative, MsgAssignInitiative, MsgSubmitInitiativeWork, MsgApproveInitiative, MsgAbandonInitiative, MsgCompleteInitiative, MsgStake, MsgUnstake, MsgClaimStakingRewards, MsgCompoundStakingRewards, MsgCreateChallenge, MsgRespondToChallenge, MsgSubmitJurorVote, MsgSubmitExpertTestimony, MsgChallengeContent, MsgRespondToContentChallenge, MsgRegisterZkPublicKey } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.rep.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.rep.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.rep.v1.MsgInviteMember", MsgInviteMember], ["/sparkdream.rep.v1.MsgAcceptInvitation", MsgAcceptInvitation], ["/sparkdream.rep.v1.MsgTransferDream", MsgTransferDream], ["/sparkdream.rep.v1.MsgCreateInterim", MsgCreateInterim], ["/sparkdream.rep.v1.MsgAssignInterim", MsgAssignInterim], ["/sparkdream.rep.v1.MsgSubmitInterimWork", MsgSubmitInterimWork], ["/sparkdream.rep.v1.MsgApproveInterim", MsgApproveInterim], ["/sparkdream.rep.v1.MsgAbandonInterim", MsgAbandonInterim], ["/sparkdream.rep.v1.MsgCompleteInterim", MsgCompleteInterim], ["/sparkdream.rep.v1.MsgProposeProject", MsgProposeProject], ["/sparkdream.rep.v1.MsgApproveProjectBudget", MsgApproveProjectBudget], ["/sparkdream.rep.v1.MsgCancelProject", MsgCancelProject], ["/sparkdream.rep.v1.MsgCreateInitiative", MsgCreateInitiative], ["/sparkdream.rep.v1.MsgAssignInitiative", MsgAssignInitiative], ["/sparkdream.rep.v1.MsgSubmitInitiativeWork", MsgSubmitInitiativeWork], ["/sparkdream.rep.v1.MsgApproveInitiative", MsgApproveInitiative], ["/sparkdream.rep.v1.MsgAbandonInitiative", MsgAbandonInitiative], ["/sparkdream.rep.v1.MsgCompleteInitiative", MsgCompleteInitiative], ["/sparkdream.rep.v1.MsgStake", MsgStake], ["/sparkdream.rep.v1.MsgUnstake", MsgUnstake], ["/sparkdream.rep.v1.MsgClaimStakingRewards", MsgClaimStakingRewards], ["/sparkdream.rep.v1.MsgCompoundStakingRewards", MsgCompoundStakingRewards], ["/sparkdream.rep.v1.MsgCreateChallenge", MsgCreateChallenge], ["/sparkdream.rep.v1.MsgRespondToChallenge", MsgRespondToChallenge], ["/sparkdream.rep.v1.MsgSubmitJurorVote", MsgSubmitJurorVote], ["/sparkdream.rep.v1.MsgSubmitExpertTestimony", MsgSubmitExpertTestimony], ["/sparkdream.rep.v1.MsgChallengeContent", MsgChallengeContent], ["/sparkdream.rep.v1.MsgRespondToContentChallenge", MsgRespondToContentChallenge], ["/sparkdream.rep.v1.MsgRegisterZkPublicKey", MsgRegisterZkPublicKey]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    inviteMember(value: MsgInviteMember) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgInviteMember",
        value: MsgInviteMember.encode(value).finish()
      };
    },
    acceptInvitation(value: MsgAcceptInvitation) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitation",
        value: MsgAcceptInvitation.encode(value).finish()
      };
    },
    transferDream(value: MsgTransferDream) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgTransferDream",
        value: MsgTransferDream.encode(value).finish()
      };
    },
    createInterim(value: MsgCreateInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateInterim",
        value: MsgCreateInterim.encode(value).finish()
      };
    },
    assignInterim(value: MsgAssignInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAssignInterim",
        value: MsgAssignInterim.encode(value).finish()
      };
    },
    submitInterimWork(value: MsgSubmitInterimWork) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWork",
        value: MsgSubmitInterimWork.encode(value).finish()
      };
    },
    approveInterim(value: MsgApproveInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveInterim",
        value: MsgApproveInterim.encode(value).finish()
      };
    },
    abandonInterim(value: MsgAbandonInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAbandonInterim",
        value: MsgAbandonInterim.encode(value).finish()
      };
    },
    completeInterim(value: MsgCompleteInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompleteInterim",
        value: MsgCompleteInterim.encode(value).finish()
      };
    },
    proposeProject(value: MsgProposeProject) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgProposeProject",
        value: MsgProposeProject.encode(value).finish()
      };
    },
    approveProjectBudget(value: MsgApproveProjectBudget) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudget",
        value: MsgApproveProjectBudget.encode(value).finish()
      };
    },
    cancelProject(value: MsgCancelProject) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCancelProject",
        value: MsgCancelProject.encode(value).finish()
      };
    },
    createInitiative(value: MsgCreateInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateInitiative",
        value: MsgCreateInitiative.encode(value).finish()
      };
    },
    assignInitiative(value: MsgAssignInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAssignInitiative",
        value: MsgAssignInitiative.encode(value).finish()
      };
    },
    submitInitiativeWork(value: MsgSubmitInitiativeWork) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWork",
        value: MsgSubmitInitiativeWork.encode(value).finish()
      };
    },
    approveInitiative(value: MsgApproveInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative",
        value: MsgApproveInitiative.encode(value).finish()
      };
    },
    abandonInitiative(value: MsgAbandonInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiative",
        value: MsgAbandonInitiative.encode(value).finish()
      };
    },
    completeInitiative(value: MsgCompleteInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiative",
        value: MsgCompleteInitiative.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },
    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewards",
        value: MsgClaimStakingRewards.encode(value).finish()
      };
    },
    compoundStakingRewards(value: MsgCompoundStakingRewards) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewards",
        value: MsgCompoundStakingRewards.encode(value).finish()
      };
    },
    createChallenge(value: MsgCreateChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateChallenge",
        value: MsgCreateChallenge.encode(value).finish()
      };
    },
    respondToChallenge(value: MsgRespondToChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRespondToChallenge",
        value: MsgRespondToChallenge.encode(value).finish()
      };
    },
    submitJurorVote(value: MsgSubmitJurorVote) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVote",
        value: MsgSubmitJurorVote.encode(value).finish()
      };
    },
    submitExpertTestimony(value: MsgSubmitExpertTestimony) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimony",
        value: MsgSubmitExpertTestimony.encode(value).finish()
      };
    },
    challengeContent(value: MsgChallengeContent) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgChallengeContent",
        value: MsgChallengeContent.encode(value).finish()
      };
    },
    respondToContentChallenge(value: MsgRespondToContentChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallenge",
        value: MsgRespondToContentChallenge.encode(value).finish()
      };
    },
    registerZkPublicKey(value: MsgRegisterZkPublicKey) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKey",
        value: MsgRegisterZkPublicKey.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParams",
        value
      };
    },
    inviteMember(value: MsgInviteMember) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgInviteMember",
        value
      };
    },
    acceptInvitation(value: MsgAcceptInvitation) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitation",
        value
      };
    },
    transferDream(value: MsgTransferDream) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgTransferDream",
        value
      };
    },
    createInterim(value: MsgCreateInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateInterim",
        value
      };
    },
    assignInterim(value: MsgAssignInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAssignInterim",
        value
      };
    },
    submitInterimWork(value: MsgSubmitInterimWork) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWork",
        value
      };
    },
    approveInterim(value: MsgApproveInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveInterim",
        value
      };
    },
    abandonInterim(value: MsgAbandonInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAbandonInterim",
        value
      };
    },
    completeInterim(value: MsgCompleteInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompleteInterim",
        value
      };
    },
    proposeProject(value: MsgProposeProject) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgProposeProject",
        value
      };
    },
    approveProjectBudget(value: MsgApproveProjectBudget) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudget",
        value
      };
    },
    cancelProject(value: MsgCancelProject) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCancelProject",
        value
      };
    },
    createInitiative(value: MsgCreateInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateInitiative",
        value
      };
    },
    assignInitiative(value: MsgAssignInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAssignInitiative",
        value
      };
    },
    submitInitiativeWork(value: MsgSubmitInitiativeWork) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWork",
        value
      };
    },
    approveInitiative(value: MsgApproveInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative",
        value
      };
    },
    abandonInitiative(value: MsgAbandonInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiative",
        value
      };
    },
    completeInitiative(value: MsgCompleteInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiative",
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgStake",
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUnstake",
        value
      };
    },
    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewards",
        value
      };
    },
    compoundStakingRewards(value: MsgCompoundStakingRewards) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewards",
        value
      };
    },
    createChallenge(value: MsgCreateChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateChallenge",
        value
      };
    },
    respondToChallenge(value: MsgRespondToChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRespondToChallenge",
        value
      };
    },
    submitJurorVote(value: MsgSubmitJurorVote) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVote",
        value
      };
    },
    submitExpertTestimony(value: MsgSubmitExpertTestimony) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimony",
        value
      };
    },
    challengeContent(value: MsgChallengeContent) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgChallengeContent",
        value
      };
    },
    respondToContentChallenge(value: MsgRespondToContentChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallenge",
        value
      };
    },
    registerZkPublicKey(value: MsgRegisterZkPublicKey) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKey",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    inviteMember(value: MsgInviteMember) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgInviteMember",
        value: MsgInviteMember.fromPartial(value)
      };
    },
    acceptInvitation(value: MsgAcceptInvitation) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitation",
        value: MsgAcceptInvitation.fromPartial(value)
      };
    },
    transferDream(value: MsgTransferDream) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgTransferDream",
        value: MsgTransferDream.fromPartial(value)
      };
    },
    createInterim(value: MsgCreateInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateInterim",
        value: MsgCreateInterim.fromPartial(value)
      };
    },
    assignInterim(value: MsgAssignInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAssignInterim",
        value: MsgAssignInterim.fromPartial(value)
      };
    },
    submitInterimWork(value: MsgSubmitInterimWork) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWork",
        value: MsgSubmitInterimWork.fromPartial(value)
      };
    },
    approveInterim(value: MsgApproveInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveInterim",
        value: MsgApproveInterim.fromPartial(value)
      };
    },
    abandonInterim(value: MsgAbandonInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAbandonInterim",
        value: MsgAbandonInterim.fromPartial(value)
      };
    },
    completeInterim(value: MsgCompleteInterim) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompleteInterim",
        value: MsgCompleteInterim.fromPartial(value)
      };
    },
    proposeProject(value: MsgProposeProject) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgProposeProject",
        value: MsgProposeProject.fromPartial(value)
      };
    },
    approveProjectBudget(value: MsgApproveProjectBudget) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudget",
        value: MsgApproveProjectBudget.fromPartial(value)
      };
    },
    cancelProject(value: MsgCancelProject) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCancelProject",
        value: MsgCancelProject.fromPartial(value)
      };
    },
    createInitiative(value: MsgCreateInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateInitiative",
        value: MsgCreateInitiative.fromPartial(value)
      };
    },
    assignInitiative(value: MsgAssignInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAssignInitiative",
        value: MsgAssignInitiative.fromPartial(value)
      };
    },
    submitInitiativeWork(value: MsgSubmitInitiativeWork) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWork",
        value: MsgSubmitInitiativeWork.fromPartial(value)
      };
    },
    approveInitiative(value: MsgApproveInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative",
        value: MsgApproveInitiative.fromPartial(value)
      };
    },
    abandonInitiative(value: MsgAbandonInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiative",
        value: MsgAbandonInitiative.fromPartial(value)
      };
    },
    completeInitiative(value: MsgCompleteInitiative) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiative",
        value: MsgCompleteInitiative.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },
    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewards",
        value: MsgClaimStakingRewards.fromPartial(value)
      };
    },
    compoundStakingRewards(value: MsgCompoundStakingRewards) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewards",
        value: MsgCompoundStakingRewards.fromPartial(value)
      };
    },
    createChallenge(value: MsgCreateChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgCreateChallenge",
        value: MsgCreateChallenge.fromPartial(value)
      };
    },
    respondToChallenge(value: MsgRespondToChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRespondToChallenge",
        value: MsgRespondToChallenge.fromPartial(value)
      };
    },
    submitJurorVote(value: MsgSubmitJurorVote) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVote",
        value: MsgSubmitJurorVote.fromPartial(value)
      };
    },
    submitExpertTestimony(value: MsgSubmitExpertTestimony) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimony",
        value: MsgSubmitExpertTestimony.fromPartial(value)
      };
    },
    challengeContent(value: MsgChallengeContent) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgChallengeContent",
        value: MsgChallengeContent.fromPartial(value)
      };
    },
    respondToContentChallenge(value: MsgRespondToContentChallenge) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallenge",
        value: MsgRespondToContentChallenge.fromPartial(value)
      };
    },
    registerZkPublicKey(value: MsgRegisterZkPublicKey) {
      return {
        typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKey",
        value: MsgRegisterZkPublicKey.fromPartial(value)
      };
    }
  }
};