//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgSetDisplayName, MsgSetDisplayNameResponse, MsgSetUsername, MsgSetUsernameResponse, MsgSetDisplayTitle, MsgSetDisplayTitleResponse, MsgCreateGuild, MsgCreateGuildResponse, MsgJoinGuild, MsgJoinGuildResponse, MsgLeaveGuild, MsgLeaveGuildResponse, MsgTransferGuildFounder, MsgTransferGuildFounderResponse, MsgDissolveGuild, MsgDissolveGuildResponse, MsgPromoteToOfficer, MsgPromoteToOfficerResponse, MsgDemoteOfficer, MsgDemoteOfficerResponse, MsgInviteToGuild, MsgInviteToGuildResponse, MsgAcceptGuildInvite, MsgAcceptGuildInviteResponse, MsgRevokeGuildInvite, MsgRevokeGuildInviteResponse, MsgSetGuildInviteOnly, MsgSetGuildInviteOnlyResponse, MsgUpdateGuildDescription, MsgUpdateGuildDescriptionResponse, MsgKickFromGuild, MsgKickFromGuildResponse, MsgClaimGuildFounder, MsgClaimGuildFounderResponse, MsgStartQuest, MsgStartQuestResponse, MsgClaimQuestReward, MsgClaimQuestRewardResponse, MsgAbandonQuest, MsgAbandonQuestResponse, MsgCreateQuest, MsgCreateQuestResponse, MsgDeactivateQuest, MsgDeactivateQuestResponse, MsgExtendSeason, MsgExtendSeasonResponse, MsgSetNextSeasonInfo, MsgSetNextSeasonInfoResponse, MsgAbortSeasonTransition, MsgAbortSeasonTransitionResponse, MsgRetrySeasonTransition, MsgRetrySeasonTransitionResponse, MsgSkipTransitionPhase, MsgSkipTransitionPhaseResponse, MsgReportDisplayName, MsgReportDisplayNameResponse, MsgAppealDisplayNameModeration, MsgAppealDisplayNameModerationResponse, MsgCreateAchievement, MsgCreateAchievementResponse, MsgUpdateAchievement, MsgUpdateAchievementResponse, MsgDeleteAchievement, MsgDeleteAchievementResponse, MsgCreateTitle, MsgCreateTitleResponse, MsgUpdateTitle, MsgUpdateTitleResponse, MsgDeleteTitle, MsgDeleteTitleResponse, MsgUpdateQuest, MsgUpdateQuestResponse, MsgResolveDisplayNameAppeal, MsgResolveDisplayNameAppealResponse, MsgResolveUnappealedModeration, MsgResolveUnappealedModerationResponse, MsgNominate, MsgNominateResponse, MsgStakeNomination, MsgStakeNominationResponse, MsgUnstakeNomination, MsgUnstakeNominationResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateOperationalParams defines an operation for updating the module
   * operational parameters. Can be called by the Operations Committee.
   */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** SetDisplayName defines the SetDisplayName RPC. */
  setDisplayName(request: MsgSetDisplayName): Promise<MsgSetDisplayNameResponse>;
  /** SetUsername defines the SetUsername RPC. */
  setUsername(request: MsgSetUsername): Promise<MsgSetUsernameResponse>;
  /** SetDisplayTitle defines the SetDisplayTitle RPC. */
  setDisplayTitle(request: MsgSetDisplayTitle): Promise<MsgSetDisplayTitleResponse>;
  /** CreateGuild defines the CreateGuild RPC. */
  createGuild(request: MsgCreateGuild): Promise<MsgCreateGuildResponse>;
  /** JoinGuild defines the JoinGuild RPC. */
  joinGuild(request: MsgJoinGuild): Promise<MsgJoinGuildResponse>;
  /** LeaveGuild defines the LeaveGuild RPC. */
  leaveGuild(request: MsgLeaveGuild): Promise<MsgLeaveGuildResponse>;
  /** TransferGuildFounder defines the TransferGuildFounder RPC. */
  transferGuildFounder(request: MsgTransferGuildFounder): Promise<MsgTransferGuildFounderResponse>;
  /** DissolveGuild defines the DissolveGuild RPC. */
  dissolveGuild(request: MsgDissolveGuild): Promise<MsgDissolveGuildResponse>;
  /** PromoteToOfficer defines the PromoteToOfficer RPC. */
  promoteToOfficer(request: MsgPromoteToOfficer): Promise<MsgPromoteToOfficerResponse>;
  /** DemoteOfficer defines the DemoteOfficer RPC. */
  demoteOfficer(request: MsgDemoteOfficer): Promise<MsgDemoteOfficerResponse>;
  /** InviteToGuild defines the InviteToGuild RPC. */
  inviteToGuild(request: MsgInviteToGuild): Promise<MsgInviteToGuildResponse>;
  /** AcceptGuildInvite defines the AcceptGuildInvite RPC. */
  acceptGuildInvite(request: MsgAcceptGuildInvite): Promise<MsgAcceptGuildInviteResponse>;
  /** RevokeGuildInvite defines the RevokeGuildInvite RPC. */
  revokeGuildInvite(request: MsgRevokeGuildInvite): Promise<MsgRevokeGuildInviteResponse>;
  /** SetGuildInviteOnly defines the SetGuildInviteOnly RPC. */
  setGuildInviteOnly(request: MsgSetGuildInviteOnly): Promise<MsgSetGuildInviteOnlyResponse>;
  /** UpdateGuildDescription defines the UpdateGuildDescription RPC. */
  updateGuildDescription(request: MsgUpdateGuildDescription): Promise<MsgUpdateGuildDescriptionResponse>;
  /** KickFromGuild defines the KickFromGuild RPC. */
  kickFromGuild(request: MsgKickFromGuild): Promise<MsgKickFromGuildResponse>;
  /** ClaimGuildFounder defines the ClaimGuildFounder RPC. */
  claimGuildFounder(request: MsgClaimGuildFounder): Promise<MsgClaimGuildFounderResponse>;
  /** StartQuest defines the StartQuest RPC. */
  startQuest(request: MsgStartQuest): Promise<MsgStartQuestResponse>;
  /** ClaimQuestReward defines the ClaimQuestReward RPC. */
  claimQuestReward(request: MsgClaimQuestReward): Promise<MsgClaimQuestRewardResponse>;
  /** AbandonQuest defines the AbandonQuest RPC. */
  abandonQuest(request: MsgAbandonQuest): Promise<MsgAbandonQuestResponse>;
  /** CreateQuest defines the CreateQuest RPC. */
  createQuest(request: MsgCreateQuest): Promise<MsgCreateQuestResponse>;
  /** DeactivateQuest defines the DeactivateQuest RPC. */
  deactivateQuest(request: MsgDeactivateQuest): Promise<MsgDeactivateQuestResponse>;
  /** ExtendSeason defines the ExtendSeason RPC. */
  extendSeason(request: MsgExtendSeason): Promise<MsgExtendSeasonResponse>;
  /** SetNextSeasonInfo defines the SetNextSeasonInfo RPC. */
  setNextSeasonInfo(request: MsgSetNextSeasonInfo): Promise<MsgSetNextSeasonInfoResponse>;
  /** AbortSeasonTransition defines the AbortSeasonTransition RPC. */
  abortSeasonTransition(request: MsgAbortSeasonTransition): Promise<MsgAbortSeasonTransitionResponse>;
  /** RetrySeasonTransition defines the RetrySeasonTransition RPC. */
  retrySeasonTransition(request: MsgRetrySeasonTransition): Promise<MsgRetrySeasonTransitionResponse>;
  /** SkipTransitionPhase defines the SkipTransitionPhase RPC. */
  skipTransitionPhase(request: MsgSkipTransitionPhase): Promise<MsgSkipTransitionPhaseResponse>;
  /** ReportDisplayName defines the ReportDisplayName RPC. */
  reportDisplayName(request: MsgReportDisplayName): Promise<MsgReportDisplayNameResponse>;
  /** AppealDisplayNameModeration defines the AppealDisplayNameModeration RPC. */
  appealDisplayNameModeration(request: MsgAppealDisplayNameModeration): Promise<MsgAppealDisplayNameModerationResponse>;
  /** Achievement management (Commons Council / Operations Committee) */
  createAchievement(request: MsgCreateAchievement): Promise<MsgCreateAchievementResponse>;
  updateAchievement(request: MsgUpdateAchievement): Promise<MsgUpdateAchievementResponse>;
  deleteAchievement(request: MsgDeleteAchievement): Promise<MsgDeleteAchievementResponse>;
  /** Title management (Commons Council / Operations Committee) */
  createTitle(request: MsgCreateTitle): Promise<MsgCreateTitleResponse>;
  updateTitle(request: MsgUpdateTitle): Promise<MsgUpdateTitleResponse>;
  deleteTitle(request: MsgDeleteTitle): Promise<MsgDeleteTitleResponse>;
  /** UpdateQuest allows updating quest details (Commons Council / Operations Committee) */
  updateQuest(request: MsgUpdateQuest): Promise<MsgUpdateQuestResponse>;
  /** ResolveDisplayNameAppeal defines the ResolveDisplayNameAppeal RPC. */
  resolveDisplayNameAppeal(request: MsgResolveDisplayNameAppeal): Promise<MsgResolveDisplayNameAppealResponse>;
  /**
   * ResolveUnappealedModeration resolves a display name moderation where the appeal period
   * expired without an appeal being filed. The report is upheld and the reporter's stake is returned.
   */
  resolveUnappealedModeration(request: MsgResolveUnappealedModeration): Promise<MsgResolveUnappealedModerationResponse>;
  /** Nominate creates a retroactive public goods funding nomination. */
  nominate(request: MsgNominate): Promise<MsgNominateResponse>;
  /** StakeNomination stakes DREAM on a nomination. */
  stakeNomination(request: MsgStakeNomination): Promise<MsgStakeNominationResponse>;
  /** UnstakeNomination removes a DREAM stake from a nomination. */
  unstakeNomination(request: MsgUnstakeNomination): Promise<MsgUnstakeNominationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module
   operational parameters. Can be called by the Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* SetDisplayName defines the SetDisplayName RPC. */
  setDisplayName = async (request: MsgSetDisplayName): Promise<MsgSetDisplayNameResponse> => {
    const data = MsgSetDisplayName.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "SetDisplayName", data);
    return promise.then(data => MsgSetDisplayNameResponse.decode(new BinaryReader(data)));
  };
  /* SetUsername defines the SetUsername RPC. */
  setUsername = async (request: MsgSetUsername): Promise<MsgSetUsernameResponse> => {
    const data = MsgSetUsername.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "SetUsername", data);
    return promise.then(data => MsgSetUsernameResponse.decode(new BinaryReader(data)));
  };
  /* SetDisplayTitle defines the SetDisplayTitle RPC. */
  setDisplayTitle = async (request: MsgSetDisplayTitle): Promise<MsgSetDisplayTitleResponse> => {
    const data = MsgSetDisplayTitle.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "SetDisplayTitle", data);
    return promise.then(data => MsgSetDisplayTitleResponse.decode(new BinaryReader(data)));
  };
  /* CreateGuild defines the CreateGuild RPC. */
  createGuild = async (request: MsgCreateGuild): Promise<MsgCreateGuildResponse> => {
    const data = MsgCreateGuild.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "CreateGuild", data);
    return promise.then(data => MsgCreateGuildResponse.decode(new BinaryReader(data)));
  };
  /* JoinGuild defines the JoinGuild RPC. */
  joinGuild = async (request: MsgJoinGuild): Promise<MsgJoinGuildResponse> => {
    const data = MsgJoinGuild.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "JoinGuild", data);
    return promise.then(data => MsgJoinGuildResponse.decode(new BinaryReader(data)));
  };
  /* LeaveGuild defines the LeaveGuild RPC. */
  leaveGuild = async (request: MsgLeaveGuild): Promise<MsgLeaveGuildResponse> => {
    const data = MsgLeaveGuild.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "LeaveGuild", data);
    return promise.then(data => MsgLeaveGuildResponse.decode(new BinaryReader(data)));
  };
  /* TransferGuildFounder defines the TransferGuildFounder RPC. */
  transferGuildFounder = async (request: MsgTransferGuildFounder): Promise<MsgTransferGuildFounderResponse> => {
    const data = MsgTransferGuildFounder.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "TransferGuildFounder", data);
    return promise.then(data => MsgTransferGuildFounderResponse.decode(new BinaryReader(data)));
  };
  /* DissolveGuild defines the DissolveGuild RPC. */
  dissolveGuild = async (request: MsgDissolveGuild): Promise<MsgDissolveGuildResponse> => {
    const data = MsgDissolveGuild.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "DissolveGuild", data);
    return promise.then(data => MsgDissolveGuildResponse.decode(new BinaryReader(data)));
  };
  /* PromoteToOfficer defines the PromoteToOfficer RPC. */
  promoteToOfficer = async (request: MsgPromoteToOfficer): Promise<MsgPromoteToOfficerResponse> => {
    const data = MsgPromoteToOfficer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "PromoteToOfficer", data);
    return promise.then(data => MsgPromoteToOfficerResponse.decode(new BinaryReader(data)));
  };
  /* DemoteOfficer defines the DemoteOfficer RPC. */
  demoteOfficer = async (request: MsgDemoteOfficer): Promise<MsgDemoteOfficerResponse> => {
    const data = MsgDemoteOfficer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "DemoteOfficer", data);
    return promise.then(data => MsgDemoteOfficerResponse.decode(new BinaryReader(data)));
  };
  /* InviteToGuild defines the InviteToGuild RPC. */
  inviteToGuild = async (request: MsgInviteToGuild): Promise<MsgInviteToGuildResponse> => {
    const data = MsgInviteToGuild.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "InviteToGuild", data);
    return promise.then(data => MsgInviteToGuildResponse.decode(new BinaryReader(data)));
  };
  /* AcceptGuildInvite defines the AcceptGuildInvite RPC. */
  acceptGuildInvite = async (request: MsgAcceptGuildInvite): Promise<MsgAcceptGuildInviteResponse> => {
    const data = MsgAcceptGuildInvite.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "AcceptGuildInvite", data);
    return promise.then(data => MsgAcceptGuildInviteResponse.decode(new BinaryReader(data)));
  };
  /* RevokeGuildInvite defines the RevokeGuildInvite RPC. */
  revokeGuildInvite = async (request: MsgRevokeGuildInvite): Promise<MsgRevokeGuildInviteResponse> => {
    const data = MsgRevokeGuildInvite.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "RevokeGuildInvite", data);
    return promise.then(data => MsgRevokeGuildInviteResponse.decode(new BinaryReader(data)));
  };
  /* SetGuildInviteOnly defines the SetGuildInviteOnly RPC. */
  setGuildInviteOnly = async (request: MsgSetGuildInviteOnly): Promise<MsgSetGuildInviteOnlyResponse> => {
    const data = MsgSetGuildInviteOnly.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "SetGuildInviteOnly", data);
    return promise.then(data => MsgSetGuildInviteOnlyResponse.decode(new BinaryReader(data)));
  };
  /* UpdateGuildDescription defines the UpdateGuildDescription RPC. */
  updateGuildDescription = async (request: MsgUpdateGuildDescription): Promise<MsgUpdateGuildDescriptionResponse> => {
    const data = MsgUpdateGuildDescription.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UpdateGuildDescription", data);
    return promise.then(data => MsgUpdateGuildDescriptionResponse.decode(new BinaryReader(data)));
  };
  /* KickFromGuild defines the KickFromGuild RPC. */
  kickFromGuild = async (request: MsgKickFromGuild): Promise<MsgKickFromGuildResponse> => {
    const data = MsgKickFromGuild.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "KickFromGuild", data);
    return promise.then(data => MsgKickFromGuildResponse.decode(new BinaryReader(data)));
  };
  /* ClaimGuildFounder defines the ClaimGuildFounder RPC. */
  claimGuildFounder = async (request: MsgClaimGuildFounder): Promise<MsgClaimGuildFounderResponse> => {
    const data = MsgClaimGuildFounder.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "ClaimGuildFounder", data);
    return promise.then(data => MsgClaimGuildFounderResponse.decode(new BinaryReader(data)));
  };
  /* StartQuest defines the StartQuest RPC. */
  startQuest = async (request: MsgStartQuest): Promise<MsgStartQuestResponse> => {
    const data = MsgStartQuest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "StartQuest", data);
    return promise.then(data => MsgStartQuestResponse.decode(new BinaryReader(data)));
  };
  /* ClaimQuestReward defines the ClaimQuestReward RPC. */
  claimQuestReward = async (request: MsgClaimQuestReward): Promise<MsgClaimQuestRewardResponse> => {
    const data = MsgClaimQuestReward.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "ClaimQuestReward", data);
    return promise.then(data => MsgClaimQuestRewardResponse.decode(new BinaryReader(data)));
  };
  /* AbandonQuest defines the AbandonQuest RPC. */
  abandonQuest = async (request: MsgAbandonQuest): Promise<MsgAbandonQuestResponse> => {
    const data = MsgAbandonQuest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "AbandonQuest", data);
    return promise.then(data => MsgAbandonQuestResponse.decode(new BinaryReader(data)));
  };
  /* CreateQuest defines the CreateQuest RPC. */
  createQuest = async (request: MsgCreateQuest): Promise<MsgCreateQuestResponse> => {
    const data = MsgCreateQuest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "CreateQuest", data);
    return promise.then(data => MsgCreateQuestResponse.decode(new BinaryReader(data)));
  };
  /* DeactivateQuest defines the DeactivateQuest RPC. */
  deactivateQuest = async (request: MsgDeactivateQuest): Promise<MsgDeactivateQuestResponse> => {
    const data = MsgDeactivateQuest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "DeactivateQuest", data);
    return promise.then(data => MsgDeactivateQuestResponse.decode(new BinaryReader(data)));
  };
  /* ExtendSeason defines the ExtendSeason RPC. */
  extendSeason = async (request: MsgExtendSeason): Promise<MsgExtendSeasonResponse> => {
    const data = MsgExtendSeason.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "ExtendSeason", data);
    return promise.then(data => MsgExtendSeasonResponse.decode(new BinaryReader(data)));
  };
  /* SetNextSeasonInfo defines the SetNextSeasonInfo RPC. */
  setNextSeasonInfo = async (request: MsgSetNextSeasonInfo): Promise<MsgSetNextSeasonInfoResponse> => {
    const data = MsgSetNextSeasonInfo.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "SetNextSeasonInfo", data);
    return promise.then(data => MsgSetNextSeasonInfoResponse.decode(new BinaryReader(data)));
  };
  /* AbortSeasonTransition defines the AbortSeasonTransition RPC. */
  abortSeasonTransition = async (request: MsgAbortSeasonTransition): Promise<MsgAbortSeasonTransitionResponse> => {
    const data = MsgAbortSeasonTransition.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "AbortSeasonTransition", data);
    return promise.then(data => MsgAbortSeasonTransitionResponse.decode(new BinaryReader(data)));
  };
  /* RetrySeasonTransition defines the RetrySeasonTransition RPC. */
  retrySeasonTransition = async (request: MsgRetrySeasonTransition): Promise<MsgRetrySeasonTransitionResponse> => {
    const data = MsgRetrySeasonTransition.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "RetrySeasonTransition", data);
    return promise.then(data => MsgRetrySeasonTransitionResponse.decode(new BinaryReader(data)));
  };
  /* SkipTransitionPhase defines the SkipTransitionPhase RPC. */
  skipTransitionPhase = async (request: MsgSkipTransitionPhase): Promise<MsgSkipTransitionPhaseResponse> => {
    const data = MsgSkipTransitionPhase.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "SkipTransitionPhase", data);
    return promise.then(data => MsgSkipTransitionPhaseResponse.decode(new BinaryReader(data)));
  };
  /* ReportDisplayName defines the ReportDisplayName RPC. */
  reportDisplayName = async (request: MsgReportDisplayName): Promise<MsgReportDisplayNameResponse> => {
    const data = MsgReportDisplayName.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "ReportDisplayName", data);
    return promise.then(data => MsgReportDisplayNameResponse.decode(new BinaryReader(data)));
  };
  /* AppealDisplayNameModeration defines the AppealDisplayNameModeration RPC. */
  appealDisplayNameModeration = async (request: MsgAppealDisplayNameModeration): Promise<MsgAppealDisplayNameModerationResponse> => {
    const data = MsgAppealDisplayNameModeration.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "AppealDisplayNameModeration", data);
    return promise.then(data => MsgAppealDisplayNameModerationResponse.decode(new BinaryReader(data)));
  };
  /* Achievement management (Commons Council / Operations Committee) */
  createAchievement = async (request: MsgCreateAchievement): Promise<MsgCreateAchievementResponse> => {
    const data = MsgCreateAchievement.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "CreateAchievement", data);
    return promise.then(data => MsgCreateAchievementResponse.decode(new BinaryReader(data)));
  };
  /* UpdateAchievement */
  updateAchievement = async (request: MsgUpdateAchievement): Promise<MsgUpdateAchievementResponse> => {
    const data = MsgUpdateAchievement.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UpdateAchievement", data);
    return promise.then(data => MsgUpdateAchievementResponse.decode(new BinaryReader(data)));
  };
  /* DeleteAchievement */
  deleteAchievement = async (request: MsgDeleteAchievement): Promise<MsgDeleteAchievementResponse> => {
    const data = MsgDeleteAchievement.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "DeleteAchievement", data);
    return promise.then(data => MsgDeleteAchievementResponse.decode(new BinaryReader(data)));
  };
  /* Title management (Commons Council / Operations Committee) */
  createTitle = async (request: MsgCreateTitle): Promise<MsgCreateTitleResponse> => {
    const data = MsgCreateTitle.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "CreateTitle", data);
    return promise.then(data => MsgCreateTitleResponse.decode(new BinaryReader(data)));
  };
  /* UpdateTitle */
  updateTitle = async (request: MsgUpdateTitle): Promise<MsgUpdateTitleResponse> => {
    const data = MsgUpdateTitle.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UpdateTitle", data);
    return promise.then(data => MsgUpdateTitleResponse.decode(new BinaryReader(data)));
  };
  /* DeleteTitle */
  deleteTitle = async (request: MsgDeleteTitle): Promise<MsgDeleteTitleResponse> => {
    const data = MsgDeleteTitle.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "DeleteTitle", data);
    return promise.then(data => MsgDeleteTitleResponse.decode(new BinaryReader(data)));
  };
  /* UpdateQuest allows updating quest details (Commons Council / Operations Committee) */
  updateQuest = async (request: MsgUpdateQuest): Promise<MsgUpdateQuestResponse> => {
    const data = MsgUpdateQuest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UpdateQuest", data);
    return promise.then(data => MsgUpdateQuestResponse.decode(new BinaryReader(data)));
  };
  /* ResolveDisplayNameAppeal defines the ResolveDisplayNameAppeal RPC. */
  resolveDisplayNameAppeal = async (request: MsgResolveDisplayNameAppeal): Promise<MsgResolveDisplayNameAppealResponse> => {
    const data = MsgResolveDisplayNameAppeal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "ResolveDisplayNameAppeal", data);
    return promise.then(data => MsgResolveDisplayNameAppealResponse.decode(new BinaryReader(data)));
  };
  /* ResolveUnappealedModeration resolves a display name moderation where the appeal period
   expired without an appeal being filed. The report is upheld and the reporter's stake is returned. */
  resolveUnappealedModeration = async (request: MsgResolveUnappealedModeration): Promise<MsgResolveUnappealedModerationResponse> => {
    const data = MsgResolveUnappealedModeration.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "ResolveUnappealedModeration", data);
    return promise.then(data => MsgResolveUnappealedModerationResponse.decode(new BinaryReader(data)));
  };
  /* Nominate creates a retroactive public goods funding nomination. */
  nominate = async (request: MsgNominate): Promise<MsgNominateResponse> => {
    const data = MsgNominate.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "Nominate", data);
    return promise.then(data => MsgNominateResponse.decode(new BinaryReader(data)));
  };
  /* StakeNomination stakes DREAM on a nomination. */
  stakeNomination = async (request: MsgStakeNomination): Promise<MsgStakeNominationResponse> => {
    const data = MsgStakeNomination.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "StakeNomination", data);
    return promise.then(data => MsgStakeNominationResponse.decode(new BinaryReader(data)));
  };
  /* UnstakeNomination removes a DREAM stake from a nomination. */
  unstakeNomination = async (request: MsgUnstakeNomination): Promise<MsgUnstakeNominationResponse> => {
    const data = MsgUnstakeNomination.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Msg", "UnstakeNomination", data);
    return promise.then(data => MsgUnstakeNominationResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};