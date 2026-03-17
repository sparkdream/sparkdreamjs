//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgSetDisplayName, MsgSetUsername, MsgSetDisplayTitle, MsgCreateGuild, MsgJoinGuild, MsgLeaveGuild, MsgTransferGuildFounder, MsgDissolveGuild, MsgPromoteToOfficer, MsgDemoteOfficer, MsgInviteToGuild, MsgAcceptGuildInvite, MsgRevokeGuildInvite, MsgSetGuildInviteOnly, MsgUpdateGuildDescription, MsgKickFromGuild, MsgClaimGuildFounder, MsgStartQuest, MsgClaimQuestReward, MsgAbandonQuest, MsgCreateQuest, MsgDeactivateQuest, MsgExtendSeason, MsgSetNextSeasonInfo, MsgAbortSeasonTransition, MsgRetrySeasonTransition, MsgSkipTransitionPhase, MsgReportDisplayName, MsgAppealDisplayNameModeration, MsgCreateAchievement, MsgUpdateAchievement, MsgDeleteAchievement, MsgCreateTitle, MsgUpdateTitle, MsgDeleteTitle, MsgUpdateQuest, MsgResolveDisplayNameAppeal, MsgResolveUnappealedModeration, MsgNominate, MsgStakeNomination, MsgUnstakeNomination } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.season.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.season.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.season.v1.MsgSetDisplayName", MsgSetDisplayName], ["/sparkdream.season.v1.MsgSetUsername", MsgSetUsername], ["/sparkdream.season.v1.MsgSetDisplayTitle", MsgSetDisplayTitle], ["/sparkdream.season.v1.MsgCreateGuild", MsgCreateGuild], ["/sparkdream.season.v1.MsgJoinGuild", MsgJoinGuild], ["/sparkdream.season.v1.MsgLeaveGuild", MsgLeaveGuild], ["/sparkdream.season.v1.MsgTransferGuildFounder", MsgTransferGuildFounder], ["/sparkdream.season.v1.MsgDissolveGuild", MsgDissolveGuild], ["/sparkdream.season.v1.MsgPromoteToOfficer", MsgPromoteToOfficer], ["/sparkdream.season.v1.MsgDemoteOfficer", MsgDemoteOfficer], ["/sparkdream.season.v1.MsgInviteToGuild", MsgInviteToGuild], ["/sparkdream.season.v1.MsgAcceptGuildInvite", MsgAcceptGuildInvite], ["/sparkdream.season.v1.MsgRevokeGuildInvite", MsgRevokeGuildInvite], ["/sparkdream.season.v1.MsgSetGuildInviteOnly", MsgSetGuildInviteOnly], ["/sparkdream.season.v1.MsgUpdateGuildDescription", MsgUpdateGuildDescription], ["/sparkdream.season.v1.MsgKickFromGuild", MsgKickFromGuild], ["/sparkdream.season.v1.MsgClaimGuildFounder", MsgClaimGuildFounder], ["/sparkdream.season.v1.MsgStartQuest", MsgStartQuest], ["/sparkdream.season.v1.MsgClaimQuestReward", MsgClaimQuestReward], ["/sparkdream.season.v1.MsgAbandonQuest", MsgAbandonQuest], ["/sparkdream.season.v1.MsgCreateQuest", MsgCreateQuest], ["/sparkdream.season.v1.MsgDeactivateQuest", MsgDeactivateQuest], ["/sparkdream.season.v1.MsgExtendSeason", MsgExtendSeason], ["/sparkdream.season.v1.MsgSetNextSeasonInfo", MsgSetNextSeasonInfo], ["/sparkdream.season.v1.MsgAbortSeasonTransition", MsgAbortSeasonTransition], ["/sparkdream.season.v1.MsgRetrySeasonTransition", MsgRetrySeasonTransition], ["/sparkdream.season.v1.MsgSkipTransitionPhase", MsgSkipTransitionPhase], ["/sparkdream.season.v1.MsgReportDisplayName", MsgReportDisplayName], ["/sparkdream.season.v1.MsgAppealDisplayNameModeration", MsgAppealDisplayNameModeration], ["/sparkdream.season.v1.MsgCreateAchievement", MsgCreateAchievement], ["/sparkdream.season.v1.MsgUpdateAchievement", MsgUpdateAchievement], ["/sparkdream.season.v1.MsgDeleteAchievement", MsgDeleteAchievement], ["/sparkdream.season.v1.MsgCreateTitle", MsgCreateTitle], ["/sparkdream.season.v1.MsgUpdateTitle", MsgUpdateTitle], ["/sparkdream.season.v1.MsgDeleteTitle", MsgDeleteTitle], ["/sparkdream.season.v1.MsgUpdateQuest", MsgUpdateQuest], ["/sparkdream.season.v1.MsgResolveDisplayNameAppeal", MsgResolveDisplayNameAppeal], ["/sparkdream.season.v1.MsgResolveUnappealedModeration", MsgResolveUnappealedModeration], ["/sparkdream.season.v1.MsgNominate", MsgNominate], ["/sparkdream.season.v1.MsgStakeNomination", MsgStakeNomination], ["/sparkdream.season.v1.MsgUnstakeNomination", MsgUnstakeNomination]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    setDisplayName(value: MsgSetDisplayName) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetDisplayName",
        value: MsgSetDisplayName.encode(value).finish()
      };
    },
    setUsername(value: MsgSetUsername) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetUsername",
        value: MsgSetUsername.encode(value).finish()
      };
    },
    setDisplayTitle(value: MsgSetDisplayTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitle",
        value: MsgSetDisplayTitle.encode(value).finish()
      };
    },
    createGuild(value: MsgCreateGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateGuild",
        value: MsgCreateGuild.encode(value).finish()
      };
    },
    joinGuild(value: MsgJoinGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgJoinGuild",
        value: MsgJoinGuild.encode(value).finish()
      };
    },
    leaveGuild(value: MsgLeaveGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgLeaveGuild",
        value: MsgLeaveGuild.encode(value).finish()
      };
    },
    transferGuildFounder(value: MsgTransferGuildFounder) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounder",
        value: MsgTransferGuildFounder.encode(value).finish()
      };
    },
    dissolveGuild(value: MsgDissolveGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDissolveGuild",
        value: MsgDissolveGuild.encode(value).finish()
      };
    },
    promoteToOfficer(value: MsgPromoteToOfficer) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficer",
        value: MsgPromoteToOfficer.encode(value).finish()
      };
    },
    demoteOfficer(value: MsgDemoteOfficer) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDemoteOfficer",
        value: MsgDemoteOfficer.encode(value).finish()
      };
    },
    inviteToGuild(value: MsgInviteToGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgInviteToGuild",
        value: MsgInviteToGuild.encode(value).finish()
      };
    },
    acceptGuildInvite(value: MsgAcceptGuildInvite) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInvite",
        value: MsgAcceptGuildInvite.encode(value).finish()
      };
    },
    revokeGuildInvite(value: MsgRevokeGuildInvite) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInvite",
        value: MsgRevokeGuildInvite.encode(value).finish()
      };
    },
    setGuildInviteOnly(value: MsgSetGuildInviteOnly) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnly",
        value: MsgSetGuildInviteOnly.encode(value).finish()
      };
    },
    updateGuildDescription(value: MsgUpdateGuildDescription) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescription",
        value: MsgUpdateGuildDescription.encode(value).finish()
      };
    },
    kickFromGuild(value: MsgKickFromGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgKickFromGuild",
        value: MsgKickFromGuild.encode(value).finish()
      };
    },
    claimGuildFounder(value: MsgClaimGuildFounder) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounder",
        value: MsgClaimGuildFounder.encode(value).finish()
      };
    },
    startQuest(value: MsgStartQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgStartQuest",
        value: MsgStartQuest.encode(value).finish()
      };
    },
    claimQuestReward(value: MsgClaimQuestReward) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgClaimQuestReward",
        value: MsgClaimQuestReward.encode(value).finish()
      };
    },
    abandonQuest(value: MsgAbandonQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAbandonQuest",
        value: MsgAbandonQuest.encode(value).finish()
      };
    },
    createQuest(value: MsgCreateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateQuest",
        value: MsgCreateQuest.encode(value).finish()
      };
    },
    deactivateQuest(value: MsgDeactivateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeactivateQuest",
        value: MsgDeactivateQuest.encode(value).finish()
      };
    },
    extendSeason(value: MsgExtendSeason) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgExtendSeason",
        value: MsgExtendSeason.encode(value).finish()
      };
    },
    setNextSeasonInfo(value: MsgSetNextSeasonInfo) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfo",
        value: MsgSetNextSeasonInfo.encode(value).finish()
      };
    },
    abortSeasonTransition(value: MsgAbortSeasonTransition) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransition",
        value: MsgAbortSeasonTransition.encode(value).finish()
      };
    },
    retrySeasonTransition(value: MsgRetrySeasonTransition) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransition",
        value: MsgRetrySeasonTransition.encode(value).finish()
      };
    },
    skipTransitionPhase(value: MsgSkipTransitionPhase) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhase",
        value: MsgSkipTransitionPhase.encode(value).finish()
      };
    },
    reportDisplayName(value: MsgReportDisplayName) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgReportDisplayName",
        value: MsgReportDisplayName.encode(value).finish()
      };
    },
    appealDisplayNameModeration(value: MsgAppealDisplayNameModeration) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModeration",
        value: MsgAppealDisplayNameModeration.encode(value).finish()
      };
    },
    createAchievement(value: MsgCreateAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateAchievement",
        value: MsgCreateAchievement.encode(value).finish()
      };
    },
    updateAchievement(value: MsgUpdateAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateAchievement",
        value: MsgUpdateAchievement.encode(value).finish()
      };
    },
    deleteAchievement(value: MsgDeleteAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeleteAchievement",
        value: MsgDeleteAchievement.encode(value).finish()
      };
    },
    createTitle(value: MsgCreateTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateTitle",
        value: MsgCreateTitle.encode(value).finish()
      };
    },
    updateTitle(value: MsgUpdateTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateTitle",
        value: MsgUpdateTitle.encode(value).finish()
      };
    },
    deleteTitle(value: MsgDeleteTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeleteTitle",
        value: MsgDeleteTitle.encode(value).finish()
      };
    },
    updateQuest(value: MsgUpdateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateQuest",
        value: MsgUpdateQuest.encode(value).finish()
      };
    },
    resolveDisplayNameAppeal(value: MsgResolveDisplayNameAppeal) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppeal",
        value: MsgResolveDisplayNameAppeal.encode(value).finish()
      };
    },
    resolveUnappealedModeration(value: MsgResolveUnappealedModeration) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModeration",
        value: MsgResolveUnappealedModeration.encode(value).finish()
      };
    },
    nominate(value: MsgNominate) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgNominate",
        value: MsgNominate.encode(value).finish()
      };
    },
    stakeNomination(value: MsgStakeNomination) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgStakeNomination",
        value: MsgStakeNomination.encode(value).finish()
      };
    },
    unstakeNomination(value: MsgUnstakeNomination) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUnstakeNomination",
        value: MsgUnstakeNomination.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParams",
        value
      };
    },
    setDisplayName(value: MsgSetDisplayName) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetDisplayName",
        value
      };
    },
    setUsername(value: MsgSetUsername) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetUsername",
        value
      };
    },
    setDisplayTitle(value: MsgSetDisplayTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitle",
        value
      };
    },
    createGuild(value: MsgCreateGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateGuild",
        value
      };
    },
    joinGuild(value: MsgJoinGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgJoinGuild",
        value
      };
    },
    leaveGuild(value: MsgLeaveGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgLeaveGuild",
        value
      };
    },
    transferGuildFounder(value: MsgTransferGuildFounder) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounder",
        value
      };
    },
    dissolveGuild(value: MsgDissolveGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDissolveGuild",
        value
      };
    },
    promoteToOfficer(value: MsgPromoteToOfficer) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficer",
        value
      };
    },
    demoteOfficer(value: MsgDemoteOfficer) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDemoteOfficer",
        value
      };
    },
    inviteToGuild(value: MsgInviteToGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgInviteToGuild",
        value
      };
    },
    acceptGuildInvite(value: MsgAcceptGuildInvite) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInvite",
        value
      };
    },
    revokeGuildInvite(value: MsgRevokeGuildInvite) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInvite",
        value
      };
    },
    setGuildInviteOnly(value: MsgSetGuildInviteOnly) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnly",
        value
      };
    },
    updateGuildDescription(value: MsgUpdateGuildDescription) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescription",
        value
      };
    },
    kickFromGuild(value: MsgKickFromGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgKickFromGuild",
        value
      };
    },
    claimGuildFounder(value: MsgClaimGuildFounder) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounder",
        value
      };
    },
    startQuest(value: MsgStartQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgStartQuest",
        value
      };
    },
    claimQuestReward(value: MsgClaimQuestReward) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgClaimQuestReward",
        value
      };
    },
    abandonQuest(value: MsgAbandonQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAbandonQuest",
        value
      };
    },
    createQuest(value: MsgCreateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateQuest",
        value
      };
    },
    deactivateQuest(value: MsgDeactivateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeactivateQuest",
        value
      };
    },
    extendSeason(value: MsgExtendSeason) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgExtendSeason",
        value
      };
    },
    setNextSeasonInfo(value: MsgSetNextSeasonInfo) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfo",
        value
      };
    },
    abortSeasonTransition(value: MsgAbortSeasonTransition) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransition",
        value
      };
    },
    retrySeasonTransition(value: MsgRetrySeasonTransition) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransition",
        value
      };
    },
    skipTransitionPhase(value: MsgSkipTransitionPhase) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhase",
        value
      };
    },
    reportDisplayName(value: MsgReportDisplayName) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgReportDisplayName",
        value
      };
    },
    appealDisplayNameModeration(value: MsgAppealDisplayNameModeration) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModeration",
        value
      };
    },
    createAchievement(value: MsgCreateAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateAchievement",
        value
      };
    },
    updateAchievement(value: MsgUpdateAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateAchievement",
        value
      };
    },
    deleteAchievement(value: MsgDeleteAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeleteAchievement",
        value
      };
    },
    createTitle(value: MsgCreateTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateTitle",
        value
      };
    },
    updateTitle(value: MsgUpdateTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateTitle",
        value
      };
    },
    deleteTitle(value: MsgDeleteTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeleteTitle",
        value
      };
    },
    updateQuest(value: MsgUpdateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateQuest",
        value
      };
    },
    resolveDisplayNameAppeal(value: MsgResolveDisplayNameAppeal) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppeal",
        value
      };
    },
    resolveUnappealedModeration(value: MsgResolveUnappealedModeration) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModeration",
        value
      };
    },
    nominate(value: MsgNominate) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgNominate",
        value
      };
    },
    stakeNomination(value: MsgStakeNomination) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgStakeNomination",
        value
      };
    },
    unstakeNomination(value: MsgUnstakeNomination) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUnstakeNomination",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    setDisplayName(value: MsgSetDisplayName) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetDisplayName",
        value: MsgSetDisplayName.fromPartial(value)
      };
    },
    setUsername(value: MsgSetUsername) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetUsername",
        value: MsgSetUsername.fromPartial(value)
      };
    },
    setDisplayTitle(value: MsgSetDisplayTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitle",
        value: MsgSetDisplayTitle.fromPartial(value)
      };
    },
    createGuild(value: MsgCreateGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateGuild",
        value: MsgCreateGuild.fromPartial(value)
      };
    },
    joinGuild(value: MsgJoinGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgJoinGuild",
        value: MsgJoinGuild.fromPartial(value)
      };
    },
    leaveGuild(value: MsgLeaveGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgLeaveGuild",
        value: MsgLeaveGuild.fromPartial(value)
      };
    },
    transferGuildFounder(value: MsgTransferGuildFounder) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounder",
        value: MsgTransferGuildFounder.fromPartial(value)
      };
    },
    dissolveGuild(value: MsgDissolveGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDissolveGuild",
        value: MsgDissolveGuild.fromPartial(value)
      };
    },
    promoteToOfficer(value: MsgPromoteToOfficer) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficer",
        value: MsgPromoteToOfficer.fromPartial(value)
      };
    },
    demoteOfficer(value: MsgDemoteOfficer) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDemoteOfficer",
        value: MsgDemoteOfficer.fromPartial(value)
      };
    },
    inviteToGuild(value: MsgInviteToGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgInviteToGuild",
        value: MsgInviteToGuild.fromPartial(value)
      };
    },
    acceptGuildInvite(value: MsgAcceptGuildInvite) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInvite",
        value: MsgAcceptGuildInvite.fromPartial(value)
      };
    },
    revokeGuildInvite(value: MsgRevokeGuildInvite) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInvite",
        value: MsgRevokeGuildInvite.fromPartial(value)
      };
    },
    setGuildInviteOnly(value: MsgSetGuildInviteOnly) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnly",
        value: MsgSetGuildInviteOnly.fromPartial(value)
      };
    },
    updateGuildDescription(value: MsgUpdateGuildDescription) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescription",
        value: MsgUpdateGuildDescription.fromPartial(value)
      };
    },
    kickFromGuild(value: MsgKickFromGuild) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgKickFromGuild",
        value: MsgKickFromGuild.fromPartial(value)
      };
    },
    claimGuildFounder(value: MsgClaimGuildFounder) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounder",
        value: MsgClaimGuildFounder.fromPartial(value)
      };
    },
    startQuest(value: MsgStartQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgStartQuest",
        value: MsgStartQuest.fromPartial(value)
      };
    },
    claimQuestReward(value: MsgClaimQuestReward) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgClaimQuestReward",
        value: MsgClaimQuestReward.fromPartial(value)
      };
    },
    abandonQuest(value: MsgAbandonQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAbandonQuest",
        value: MsgAbandonQuest.fromPartial(value)
      };
    },
    createQuest(value: MsgCreateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateQuest",
        value: MsgCreateQuest.fromPartial(value)
      };
    },
    deactivateQuest(value: MsgDeactivateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeactivateQuest",
        value: MsgDeactivateQuest.fromPartial(value)
      };
    },
    extendSeason(value: MsgExtendSeason) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgExtendSeason",
        value: MsgExtendSeason.fromPartial(value)
      };
    },
    setNextSeasonInfo(value: MsgSetNextSeasonInfo) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfo",
        value: MsgSetNextSeasonInfo.fromPartial(value)
      };
    },
    abortSeasonTransition(value: MsgAbortSeasonTransition) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransition",
        value: MsgAbortSeasonTransition.fromPartial(value)
      };
    },
    retrySeasonTransition(value: MsgRetrySeasonTransition) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransition",
        value: MsgRetrySeasonTransition.fromPartial(value)
      };
    },
    skipTransitionPhase(value: MsgSkipTransitionPhase) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhase",
        value: MsgSkipTransitionPhase.fromPartial(value)
      };
    },
    reportDisplayName(value: MsgReportDisplayName) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgReportDisplayName",
        value: MsgReportDisplayName.fromPartial(value)
      };
    },
    appealDisplayNameModeration(value: MsgAppealDisplayNameModeration) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModeration",
        value: MsgAppealDisplayNameModeration.fromPartial(value)
      };
    },
    createAchievement(value: MsgCreateAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateAchievement",
        value: MsgCreateAchievement.fromPartial(value)
      };
    },
    updateAchievement(value: MsgUpdateAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateAchievement",
        value: MsgUpdateAchievement.fromPartial(value)
      };
    },
    deleteAchievement(value: MsgDeleteAchievement) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeleteAchievement",
        value: MsgDeleteAchievement.fromPartial(value)
      };
    },
    createTitle(value: MsgCreateTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgCreateTitle",
        value: MsgCreateTitle.fromPartial(value)
      };
    },
    updateTitle(value: MsgUpdateTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateTitle",
        value: MsgUpdateTitle.fromPartial(value)
      };
    },
    deleteTitle(value: MsgDeleteTitle) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgDeleteTitle",
        value: MsgDeleteTitle.fromPartial(value)
      };
    },
    updateQuest(value: MsgUpdateQuest) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUpdateQuest",
        value: MsgUpdateQuest.fromPartial(value)
      };
    },
    resolveDisplayNameAppeal(value: MsgResolveDisplayNameAppeal) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppeal",
        value: MsgResolveDisplayNameAppeal.fromPartial(value)
      };
    },
    resolveUnappealedModeration(value: MsgResolveUnappealedModeration) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModeration",
        value: MsgResolveUnappealedModeration.fromPartial(value)
      };
    },
    nominate(value: MsgNominate) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgNominate",
        value: MsgNominate.fromPartial(value)
      };
    },
    stakeNomination(value: MsgStakeNomination) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgStakeNomination",
        value: MsgStakeNomination.fromPartial(value)
      };
    },
    unstakeNomination(value: MsgUnstakeNomination) {
      return {
        typeUrl: "/sparkdream.season.v1.MsgUnstakeNomination",
        value: MsgUnstakeNomination.fromPartial(value)
      };
    }
  }
};