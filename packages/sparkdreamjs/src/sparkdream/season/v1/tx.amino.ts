//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgSetDisplayName, MsgSetUsername, MsgSetDisplayTitle, MsgCreateGuild, MsgJoinGuild, MsgLeaveGuild, MsgTransferGuildFounder, MsgDissolveGuild, MsgPromoteToOfficer, MsgDemoteOfficer, MsgInviteToGuild, MsgAcceptGuildInvite, MsgRevokeGuildInvite, MsgSetGuildInviteOnly, MsgUpdateGuildDescription, MsgKickFromGuild, MsgClaimGuildFounder, MsgStartQuest, MsgClaimQuestReward, MsgAbandonQuest, MsgCreateQuest, MsgDeactivateQuest, MsgExtendSeason, MsgSetNextSeasonInfo, MsgAbortSeasonTransition, MsgRetrySeasonTransition, MsgSkipTransitionPhase, MsgReportDisplayName, MsgAppealDisplayNameModeration, MsgCreateAchievement, MsgUpdateAchievement, MsgDeleteAchievement, MsgCreateTitle, MsgUpdateTitle, MsgDeleteTitle, MsgUpdateQuest, MsgResolveDisplayNameAppeal, MsgResolveUnappealedModeration, MsgNominate, MsgStakeNomination, MsgUnstakeNomination } from "./tx";
export const AminoConverter = {
  "/sparkdream.season.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/season/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.season.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/season/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.season.v1.MsgSetDisplayName": {
    aminoType: "sparkdream/x/season/MsgSetDisplayName",
    toAmino: MsgSetDisplayName.toAmino,
    fromAmino: MsgSetDisplayName.fromAmino
  },
  "/sparkdream.season.v1.MsgSetUsername": {
    aminoType: "sparkdream/x/season/MsgSetUsername",
    toAmino: MsgSetUsername.toAmino,
    fromAmino: MsgSetUsername.fromAmino
  },
  "/sparkdream.season.v1.MsgSetDisplayTitle": {
    aminoType: "sparkdream/x/season/MsgSetDisplayTitle",
    toAmino: MsgSetDisplayTitle.toAmino,
    fromAmino: MsgSetDisplayTitle.fromAmino
  },
  "/sparkdream.season.v1.MsgCreateGuild": {
    aminoType: "sparkdream/x/season/MsgCreateGuild",
    toAmino: MsgCreateGuild.toAmino,
    fromAmino: MsgCreateGuild.fromAmino
  },
  "/sparkdream.season.v1.MsgJoinGuild": {
    aminoType: "sparkdream/x/season/MsgJoinGuild",
    toAmino: MsgJoinGuild.toAmino,
    fromAmino: MsgJoinGuild.fromAmino
  },
  "/sparkdream.season.v1.MsgLeaveGuild": {
    aminoType: "sparkdream/x/season/MsgLeaveGuild",
    toAmino: MsgLeaveGuild.toAmino,
    fromAmino: MsgLeaveGuild.fromAmino
  },
  "/sparkdream.season.v1.MsgTransferGuildFounder": {
    aminoType: "sparkdream/x/season/MsgTransferGuildFounder",
    toAmino: MsgTransferGuildFounder.toAmino,
    fromAmino: MsgTransferGuildFounder.fromAmino
  },
  "/sparkdream.season.v1.MsgDissolveGuild": {
    aminoType: "sparkdream/x/season/MsgDissolveGuild",
    toAmino: MsgDissolveGuild.toAmino,
    fromAmino: MsgDissolveGuild.fromAmino
  },
  "/sparkdream.season.v1.MsgPromoteToOfficer": {
    aminoType: "sparkdream/x/season/MsgPromoteToOfficer",
    toAmino: MsgPromoteToOfficer.toAmino,
    fromAmino: MsgPromoteToOfficer.fromAmino
  },
  "/sparkdream.season.v1.MsgDemoteOfficer": {
    aminoType: "sparkdream/x/season/MsgDemoteOfficer",
    toAmino: MsgDemoteOfficer.toAmino,
    fromAmino: MsgDemoteOfficer.fromAmino
  },
  "/sparkdream.season.v1.MsgInviteToGuild": {
    aminoType: "sparkdream/x/season/MsgInviteToGuild",
    toAmino: MsgInviteToGuild.toAmino,
    fromAmino: MsgInviteToGuild.fromAmino
  },
  "/sparkdream.season.v1.MsgAcceptGuildInvite": {
    aminoType: "sparkdream/x/season/MsgAcceptGuildInvite",
    toAmino: MsgAcceptGuildInvite.toAmino,
    fromAmino: MsgAcceptGuildInvite.fromAmino
  },
  "/sparkdream.season.v1.MsgRevokeGuildInvite": {
    aminoType: "sparkdream/x/season/MsgRevokeGuildInvite",
    toAmino: MsgRevokeGuildInvite.toAmino,
    fromAmino: MsgRevokeGuildInvite.fromAmino
  },
  "/sparkdream.season.v1.MsgSetGuildInviteOnly": {
    aminoType: "sparkdream/x/season/MsgSetGuildInviteOnly",
    toAmino: MsgSetGuildInviteOnly.toAmino,
    fromAmino: MsgSetGuildInviteOnly.fromAmino
  },
  "/sparkdream.season.v1.MsgUpdateGuildDescription": {
    aminoType: "sparkdream/x/season/MsgUpdateGuildDescription",
    toAmino: MsgUpdateGuildDescription.toAmino,
    fromAmino: MsgUpdateGuildDescription.fromAmino
  },
  "/sparkdream.season.v1.MsgKickFromGuild": {
    aminoType: "sparkdream/x/season/MsgKickFromGuild",
    toAmino: MsgKickFromGuild.toAmino,
    fromAmino: MsgKickFromGuild.fromAmino
  },
  "/sparkdream.season.v1.MsgClaimGuildFounder": {
    aminoType: "sparkdream/x/season/MsgClaimGuildFounder",
    toAmino: MsgClaimGuildFounder.toAmino,
    fromAmino: MsgClaimGuildFounder.fromAmino
  },
  "/sparkdream.season.v1.MsgStartQuest": {
    aminoType: "sparkdream/x/season/MsgStartQuest",
    toAmino: MsgStartQuest.toAmino,
    fromAmino: MsgStartQuest.fromAmino
  },
  "/sparkdream.season.v1.MsgClaimQuestReward": {
    aminoType: "sparkdream/x/season/MsgClaimQuestReward",
    toAmino: MsgClaimQuestReward.toAmino,
    fromAmino: MsgClaimQuestReward.fromAmino
  },
  "/sparkdream.season.v1.MsgAbandonQuest": {
    aminoType: "sparkdream/x/season/MsgAbandonQuest",
    toAmino: MsgAbandonQuest.toAmino,
    fromAmino: MsgAbandonQuest.fromAmino
  },
  "/sparkdream.season.v1.MsgCreateQuest": {
    aminoType: "sparkdream/x/season/MsgCreateQuest",
    toAmino: MsgCreateQuest.toAmino,
    fromAmino: MsgCreateQuest.fromAmino
  },
  "/sparkdream.season.v1.MsgDeactivateQuest": {
    aminoType: "sparkdream/x/season/MsgDeactivateQuest",
    toAmino: MsgDeactivateQuest.toAmino,
    fromAmino: MsgDeactivateQuest.fromAmino
  },
  "/sparkdream.season.v1.MsgExtendSeason": {
    aminoType: "sparkdream/x/season/MsgExtendSeason",
    toAmino: MsgExtendSeason.toAmino,
    fromAmino: MsgExtendSeason.fromAmino
  },
  "/sparkdream.season.v1.MsgSetNextSeasonInfo": {
    aminoType: "sparkdream/x/season/MsgSetNextSeasonInfo",
    toAmino: MsgSetNextSeasonInfo.toAmino,
    fromAmino: MsgSetNextSeasonInfo.fromAmino
  },
  "/sparkdream.season.v1.MsgAbortSeasonTransition": {
    aminoType: "sparkdream/x/season/MsgAbortSeasonTransition",
    toAmino: MsgAbortSeasonTransition.toAmino,
    fromAmino: MsgAbortSeasonTransition.fromAmino
  },
  "/sparkdream.season.v1.MsgRetrySeasonTransition": {
    aminoType: "sparkdream/x/season/MsgRetrySeasonTransition",
    toAmino: MsgRetrySeasonTransition.toAmino,
    fromAmino: MsgRetrySeasonTransition.fromAmino
  },
  "/sparkdream.season.v1.MsgSkipTransitionPhase": {
    aminoType: "sparkdream/x/season/MsgSkipTransitionPhase",
    toAmino: MsgSkipTransitionPhase.toAmino,
    fromAmino: MsgSkipTransitionPhase.fromAmino
  },
  "/sparkdream.season.v1.MsgReportDisplayName": {
    aminoType: "sparkdream/x/season/MsgReportDisplayName",
    toAmino: MsgReportDisplayName.toAmino,
    fromAmino: MsgReportDisplayName.fromAmino
  },
  "/sparkdream.season.v1.MsgAppealDisplayNameModeration": {
    aminoType: "sparkdream/x/season/MsgAppealDisplayNameModeration",
    toAmino: MsgAppealDisplayNameModeration.toAmino,
    fromAmino: MsgAppealDisplayNameModeration.fromAmino
  },
  "/sparkdream.season.v1.MsgCreateAchievement": {
    aminoType: "sparkdream/x/season/MsgCreateAchievement",
    toAmino: MsgCreateAchievement.toAmino,
    fromAmino: MsgCreateAchievement.fromAmino
  },
  "/sparkdream.season.v1.MsgUpdateAchievement": {
    aminoType: "sparkdream/x/season/MsgUpdateAchievement",
    toAmino: MsgUpdateAchievement.toAmino,
    fromAmino: MsgUpdateAchievement.fromAmino
  },
  "/sparkdream.season.v1.MsgDeleteAchievement": {
    aminoType: "sparkdream/x/season/MsgDeleteAchievement",
    toAmino: MsgDeleteAchievement.toAmino,
    fromAmino: MsgDeleteAchievement.fromAmino
  },
  "/sparkdream.season.v1.MsgCreateTitle": {
    aminoType: "sparkdream/x/season/MsgCreateTitle",
    toAmino: MsgCreateTitle.toAmino,
    fromAmino: MsgCreateTitle.fromAmino
  },
  "/sparkdream.season.v1.MsgUpdateTitle": {
    aminoType: "sparkdream/x/season/MsgUpdateTitle",
    toAmino: MsgUpdateTitle.toAmino,
    fromAmino: MsgUpdateTitle.fromAmino
  },
  "/sparkdream.season.v1.MsgDeleteTitle": {
    aminoType: "sparkdream/x/season/MsgDeleteTitle",
    toAmino: MsgDeleteTitle.toAmino,
    fromAmino: MsgDeleteTitle.fromAmino
  },
  "/sparkdream.season.v1.MsgUpdateQuest": {
    aminoType: "sparkdream/x/season/MsgUpdateQuest",
    toAmino: MsgUpdateQuest.toAmino,
    fromAmino: MsgUpdateQuest.fromAmino
  },
  "/sparkdream.season.v1.MsgResolveDisplayNameAppeal": {
    aminoType: "sparkdream/x/season/MsgResolveDisplayNameAppeal",
    toAmino: MsgResolveDisplayNameAppeal.toAmino,
    fromAmino: MsgResolveDisplayNameAppeal.fromAmino
  },
  "/sparkdream.season.v1.MsgResolveUnappealedModeration": {
    aminoType: "sparkdream/x/season/MsgResolveUnappealedModeration",
    toAmino: MsgResolveUnappealedModeration.toAmino,
    fromAmino: MsgResolveUnappealedModeration.fromAmino
  },
  "/sparkdream.season.v1.MsgNominate": {
    aminoType: "sparkdream/x/season/MsgNominate",
    toAmino: MsgNominate.toAmino,
    fromAmino: MsgNominate.fromAmino
  },
  "/sparkdream.season.v1.MsgStakeNomination": {
    aminoType: "sparkdream/x/season/MsgStakeNomination",
    toAmino: MsgStakeNomination.toAmino,
    fromAmino: MsgStakeNomination.fromAmino
  },
  "/sparkdream.season.v1.MsgUnstakeNomination": {
    aminoType: "sparkdream/x/season/MsgUnstakeNomination",
    toAmino: MsgUnstakeNomination.toAmino,
    fromAmino: MsgUnstakeNomination.fromAmino
  }
};