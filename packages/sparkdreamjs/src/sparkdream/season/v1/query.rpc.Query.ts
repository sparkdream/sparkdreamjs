//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSeasonRequest, QueryGetSeasonResponse, QueryGetSeasonTransitionStateRequest, QueryGetSeasonTransitionStateResponse, QueryGetTransitionRecoveryStateRequest, QueryGetTransitionRecoveryStateResponse, QueryGetNextSeasonInfoRequest, QueryGetNextSeasonInfoResponse, QueryGetSeasonSnapshotRequest, QueryGetSeasonSnapshotResponse, QueryAllSeasonSnapshotRequest, QueryAllSeasonSnapshotResponse, QueryGetMemberSeasonSnapshotRequest, QueryGetMemberSeasonSnapshotResponse, QueryAllMemberSeasonSnapshotRequest, QueryAllMemberSeasonSnapshotResponse, QueryGetMemberProfileRequest, QueryGetMemberProfileResponse, QueryAllMemberProfileRequest, QueryAllMemberProfileResponse, QueryGetMemberRegistrationRequest, QueryGetMemberRegistrationResponse, QueryAllMemberRegistrationRequest, QueryAllMemberRegistrationResponse, QueryGetAchievementRequest, QueryGetAchievementResponse, QueryAllAchievementRequest, QueryAllAchievementResponse, QueryGetTitleRequest, QueryGetTitleResponse, QueryAllTitleRequest, QueryAllTitleResponse, QueryGetSeasonTitleEligibilityRequest, QueryGetSeasonTitleEligibilityResponse, QueryAllSeasonTitleEligibilityRequest, QueryAllSeasonTitleEligibilityResponse, QueryGetGuildRequest, QueryGetGuildResponse, QueryAllGuildRequest, QueryAllGuildResponse, QueryGetGuildMembershipRequest, QueryGetGuildMembershipResponse, QueryAllGuildMembershipRequest, QueryAllGuildMembershipResponse, QueryGetGuildInviteRequest, QueryGetGuildInviteResponse, QueryAllGuildInviteRequest, QueryAllGuildInviteResponse, QueryGetQuestRequest, QueryGetQuestResponse, QueryAllQuestRequest, QueryAllQuestResponse, QueryGetMemberQuestProgressRequest, QueryGetMemberQuestProgressResponse, QueryAllMemberQuestProgressRequest, QueryAllMemberQuestProgressResponse, QueryGetEpochXpTrackerRequest, QueryGetEpochXpTrackerResponse, QueryAllEpochXpTrackerRequest, QueryAllEpochXpTrackerResponse, QueryGetVoteXpRecordRequest, QueryGetVoteXpRecordResponse, QueryAllVoteXpRecordRequest, QueryAllVoteXpRecordResponse, QueryGetForumXpCooldownRequest, QueryGetForumXpCooldownResponse, QueryAllForumXpCooldownRequest, QueryAllForumXpCooldownResponse, QueryGetDisplayNameModerationRequest, QueryGetDisplayNameModerationResponse, QueryAllDisplayNameModerationRequest, QueryAllDisplayNameModerationResponse, QueryGetDisplayNameReportStakeRequest, QueryGetDisplayNameReportStakeResponse, QueryAllDisplayNameReportStakeRequest, QueryAllDisplayNameReportStakeResponse, QueryGetDisplayNameAppealStakeRequest, QueryGetDisplayNameAppealStakeResponse, QueryAllDisplayNameAppealStakeRequest, QueryAllDisplayNameAppealStakeResponse, QueryCurrentSeasonRequest, QueryCurrentSeasonResponse, QuerySeasonByNumberRequest, QuerySeasonByNumberResponse, QuerySeasonStatsRequest, QuerySeasonStatsResponse, QueryMemberByDisplayNameRequest, QueryMemberByDisplayNameResponse, QueryMemberSeasonHistoryRequest, QueryMemberSeasonHistoryResponse, QueryMemberXpHistoryRequest, QueryMemberXpHistoryResponse, QueryAchievementsRequest, QueryAchievementsResponse, QueryMemberAchievementsRequest, QueryMemberAchievementsResponse, QueryTitlesRequest, QueryTitlesResponse, QueryMemberTitlesRequest, QueryMemberTitlesResponse, QueryGuildByIdRequest, QueryGuildByIdResponse, QueryGuildsListRequest, QueryGuildsListResponse, QueryGuildsByFounderRequest, QueryGuildsByFounderResponse, QueryGuildMembersRequest, QueryGuildMembersResponse, QueryMemberGuildRequest, QueryMemberGuildResponse, QueryGuildInvitesRequest, QueryGuildInvitesResponse, QueryMemberGuildInvitesRequest, QueryMemberGuildInvitesResponse, QueryQuestsListRequest, QueryQuestsListResponse, QueryQuestByIdRequest, QueryQuestByIdResponse, QueryQuestChainRequest, QueryQuestChainResponse, QueryMemberQuestStatusRequest, QueryMemberQuestStatusResponse, QueryAvailableQuestsRequest, QueryAvailableQuestsResponse, QueryGetNominationRequest, QueryGetNominationResponse, QueryListNominationsRequest, QueryListNominationsResponse, QueryListNominationsByCreatorRequest, QueryListNominationsByCreatorResponse, QueryListNominationStakesRequest, QueryListNominationStakesResponse, QueryListRetroRewardHistoryRequest, QueryListRetroRewardHistoryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Season by index. */
  getSeason(request?: QueryGetSeasonRequest): Promise<QueryGetSeasonResponse>;
  /** Queries a SeasonTransitionState by index. */
  getSeasonTransitionState(request?: QueryGetSeasonTransitionStateRequest): Promise<QueryGetSeasonTransitionStateResponse>;
  /** Queries a TransitionRecoveryState by index. */
  getTransitionRecoveryState(request?: QueryGetTransitionRecoveryStateRequest): Promise<QueryGetTransitionRecoveryStateResponse>;
  /** Queries a NextSeasonInfo by index. */
  getNextSeasonInfo(request?: QueryGetNextSeasonInfoRequest): Promise<QueryGetNextSeasonInfoResponse>;
  /** ListSeasonSnapshot Queries a list of SeasonSnapshot items. */
  getSeasonSnapshot(request: QueryGetSeasonSnapshotRequest): Promise<QueryGetSeasonSnapshotResponse>;
  /** ListSeasonSnapshot defines the ListSeasonSnapshot RPC. */
  listSeasonSnapshot(request?: QueryAllSeasonSnapshotRequest): Promise<QueryAllSeasonSnapshotResponse>;
  /** ListMemberSeasonSnapshot Queries a list of MemberSeasonSnapshot items. */
  getMemberSeasonSnapshot(request: QueryGetMemberSeasonSnapshotRequest): Promise<QueryGetMemberSeasonSnapshotResponse>;
  /** ListMemberSeasonSnapshot defines the ListMemberSeasonSnapshot RPC. */
  listMemberSeasonSnapshot(request?: QueryAllMemberSeasonSnapshotRequest): Promise<QueryAllMemberSeasonSnapshotResponse>;
  /** ListMemberProfile Queries a list of MemberProfile items. */
  getMemberProfile(request: QueryGetMemberProfileRequest): Promise<QueryGetMemberProfileResponse>;
  /** ListMemberProfile defines the ListMemberProfile RPC. */
  listMemberProfile(request?: QueryAllMemberProfileRequest): Promise<QueryAllMemberProfileResponse>;
  /** ListMemberRegistration Queries a list of MemberRegistration items. */
  getMemberRegistration(request: QueryGetMemberRegistrationRequest): Promise<QueryGetMemberRegistrationResponse>;
  /** ListMemberRegistration defines the ListMemberRegistration RPC. */
  listMemberRegistration(request?: QueryAllMemberRegistrationRequest): Promise<QueryAllMemberRegistrationResponse>;
  /** ListAchievement Queries a list of Achievement items. */
  getAchievement(request: QueryGetAchievementRequest): Promise<QueryGetAchievementResponse>;
  /** ListAchievement defines the ListAchievement RPC. */
  listAchievement(request?: QueryAllAchievementRequest): Promise<QueryAllAchievementResponse>;
  /** ListTitle Queries a list of Title items. */
  getTitle(request: QueryGetTitleRequest): Promise<QueryGetTitleResponse>;
  /** ListTitle defines the ListTitle RPC. */
  listTitle(request?: QueryAllTitleRequest): Promise<QueryAllTitleResponse>;
  /** ListSeasonTitleEligibility Queries a list of SeasonTitleEligibility items. */
  getSeasonTitleEligibility(request: QueryGetSeasonTitleEligibilityRequest): Promise<QueryGetSeasonTitleEligibilityResponse>;
  /** ListSeasonTitleEligibility defines the ListSeasonTitleEligibility RPC. */
  listSeasonTitleEligibility(request?: QueryAllSeasonTitleEligibilityRequest): Promise<QueryAllSeasonTitleEligibilityResponse>;
  /** ListGuild Queries a list of Guild items. */
  getGuild(request: QueryGetGuildRequest): Promise<QueryGetGuildResponse>;
  /** ListGuild defines the ListGuild RPC. */
  listGuild(request?: QueryAllGuildRequest): Promise<QueryAllGuildResponse>;
  /** ListGuildMembership Queries a list of GuildMembership items. */
  getGuildMembership(request: QueryGetGuildMembershipRequest): Promise<QueryGetGuildMembershipResponse>;
  /** ListGuildMembership defines the ListGuildMembership RPC. */
  listGuildMembership(request?: QueryAllGuildMembershipRequest): Promise<QueryAllGuildMembershipResponse>;
  /** ListGuildInvite Queries a list of GuildInvite items. */
  getGuildInvite(request: QueryGetGuildInviteRequest): Promise<QueryGetGuildInviteResponse>;
  /** ListGuildInvite defines the ListGuildInvite RPC. */
  listGuildInvite(request?: QueryAllGuildInviteRequest): Promise<QueryAllGuildInviteResponse>;
  /** ListQuest Queries a list of Quest items. */
  getQuest(request: QueryGetQuestRequest): Promise<QueryGetQuestResponse>;
  /** ListQuest defines the ListQuest RPC. */
  listQuest(request?: QueryAllQuestRequest): Promise<QueryAllQuestResponse>;
  /** ListMemberQuestProgress Queries a list of MemberQuestProgress items. */
  getMemberQuestProgress(request: QueryGetMemberQuestProgressRequest): Promise<QueryGetMemberQuestProgressResponse>;
  /** ListMemberQuestProgress defines the ListMemberQuestProgress RPC. */
  listMemberQuestProgress(request?: QueryAllMemberQuestProgressRequest): Promise<QueryAllMemberQuestProgressResponse>;
  /** ListEpochXpTracker Queries a list of EpochXpTracker items. */
  getEpochXpTracker(request: QueryGetEpochXpTrackerRequest): Promise<QueryGetEpochXpTrackerResponse>;
  /** ListEpochXpTracker defines the ListEpochXpTracker RPC. */
  listEpochXpTracker(request?: QueryAllEpochXpTrackerRequest): Promise<QueryAllEpochXpTrackerResponse>;
  /** ListVoteXpRecord Queries a list of VoteXpRecord items. */
  getVoteXpRecord(request: QueryGetVoteXpRecordRequest): Promise<QueryGetVoteXpRecordResponse>;
  /** ListVoteXpRecord defines the ListVoteXpRecord RPC. */
  listVoteXpRecord(request?: QueryAllVoteXpRecordRequest): Promise<QueryAllVoteXpRecordResponse>;
  /** ListForumXpCooldown Queries a list of ForumXpCooldown items. */
  getForumXpCooldown(request: QueryGetForumXpCooldownRequest): Promise<QueryGetForumXpCooldownResponse>;
  /** ListForumXpCooldown defines the ListForumXpCooldown RPC. */
  listForumXpCooldown(request?: QueryAllForumXpCooldownRequest): Promise<QueryAllForumXpCooldownResponse>;
  /** ListDisplayNameModeration Queries a list of DisplayNameModeration items. */
  getDisplayNameModeration(request: QueryGetDisplayNameModerationRequest): Promise<QueryGetDisplayNameModerationResponse>;
  /** ListDisplayNameModeration defines the ListDisplayNameModeration RPC. */
  listDisplayNameModeration(request?: QueryAllDisplayNameModerationRequest): Promise<QueryAllDisplayNameModerationResponse>;
  /** ListDisplayNameReportStake Queries a list of DisplayNameReportStake items. */
  getDisplayNameReportStake(request: QueryGetDisplayNameReportStakeRequest): Promise<QueryGetDisplayNameReportStakeResponse>;
  /** ListDisplayNameReportStake defines the ListDisplayNameReportStake RPC. */
  listDisplayNameReportStake(request?: QueryAllDisplayNameReportStakeRequest): Promise<QueryAllDisplayNameReportStakeResponse>;
  /** ListDisplayNameAppealStake Queries a list of DisplayNameAppealStake items. */
  getDisplayNameAppealStake(request: QueryGetDisplayNameAppealStakeRequest): Promise<QueryGetDisplayNameAppealStakeResponse>;
  /** ListDisplayNameAppealStake defines the ListDisplayNameAppealStake RPC. */
  listDisplayNameAppealStake(request?: QueryAllDisplayNameAppealStakeRequest): Promise<QueryAllDisplayNameAppealStakeResponse>;
  /** CurrentSeason Queries a list of CurrentSeason items. */
  currentSeason(request?: QueryCurrentSeasonRequest): Promise<QueryCurrentSeasonResponse>;
  /** SeasonByNumber Queries a list of SeasonByNumber items. */
  seasonByNumber(request: QuerySeasonByNumberRequest): Promise<QuerySeasonByNumberResponse>;
  /** SeasonStats Queries a list of SeasonStats items. */
  seasonStats(request: QuerySeasonStatsRequest): Promise<QuerySeasonStatsResponse>;
  /** MemberByDisplayName Queries a list of MemberByDisplayName items. */
  memberByDisplayName(request: QueryMemberByDisplayNameRequest): Promise<QueryMemberByDisplayNameResponse>;
  /** MemberSeasonHistory Queries a list of MemberSeasonHistory items. */
  memberSeasonHistory(request: QueryMemberSeasonHistoryRequest): Promise<QueryMemberSeasonHistoryResponse>;
  /** MemberXpHistory Queries a list of MemberXpHistory items. */
  memberXpHistory(request: QueryMemberXpHistoryRequest): Promise<QueryMemberXpHistoryResponse>;
  /** Achievements Queries a list of Achievements items. */
  achievements(request?: QueryAchievementsRequest): Promise<QueryAchievementsResponse>;
  /** MemberAchievements Queries a list of MemberAchievements items. */
  memberAchievements(request: QueryMemberAchievementsRequest): Promise<QueryMemberAchievementsResponse>;
  /** Titles Queries a list of Titles items. */
  titles(request?: QueryTitlesRequest): Promise<QueryTitlesResponse>;
  /** MemberTitles Queries a list of MemberTitles items. */
  memberTitles(request: QueryMemberTitlesRequest): Promise<QueryMemberTitlesResponse>;
  /** GuildById Queries a list of GuildById items. */
  guildById(request: QueryGuildByIdRequest): Promise<QueryGuildByIdResponse>;
  /** GuildsList Queries a list of GuildsList items. */
  guildsList(request?: QueryGuildsListRequest): Promise<QueryGuildsListResponse>;
  /** GuildsByFounder Queries a list of GuildsByFounder items. */
  guildsByFounder(request: QueryGuildsByFounderRequest): Promise<QueryGuildsByFounderResponse>;
  /** GuildMembers Queries a list of GuildMembers items. */
  guildMembers(request: QueryGuildMembersRequest): Promise<QueryGuildMembersResponse>;
  /** MemberGuild Queries a list of MemberGuild items. */
  memberGuild(request: QueryMemberGuildRequest): Promise<QueryMemberGuildResponse>;
  /** GuildInvites Queries a list of GuildInvites items. */
  guildInvites(request: QueryGuildInvitesRequest): Promise<QueryGuildInvitesResponse>;
  /** MemberGuildInvites Queries a list of MemberGuildInvites items. */
  memberGuildInvites(request: QueryMemberGuildInvitesRequest): Promise<QueryMemberGuildInvitesResponse>;
  /** QuestsList Queries a list of QuestsList items. */
  questsList(request?: QueryQuestsListRequest): Promise<QueryQuestsListResponse>;
  /** QuestById Queries a list of QuestById items. */
  questById(request: QueryQuestByIdRequest): Promise<QueryQuestByIdResponse>;
  /** QuestChain Queries a list of QuestChain items. */
  questChain(request: QueryQuestChainRequest): Promise<QueryQuestChainResponse>;
  /** MemberQuestStatus Queries a list of MemberQuestStatus items. */
  memberQuestStatus(request: QueryMemberQuestStatusRequest): Promise<QueryMemberQuestStatusResponse>;
  /** AvailableQuests Queries a list of AvailableQuests items. */
  availableQuests(request: QueryAvailableQuestsRequest): Promise<QueryAvailableQuestsResponse>;
  /** GetNomination queries a single nomination by ID. */
  getNomination(request: QueryGetNominationRequest): Promise<QueryGetNominationResponse>;
  /** ListNominations queries all nominations for the current season. */
  listNominations(request?: QueryListNominationsRequest): Promise<QueryListNominationsResponse>;
  /** ListNominationsByCreator queries nominations by a specific creator. */
  listNominationsByCreator(request: QueryListNominationsByCreatorRequest): Promise<QueryListNominationsByCreatorResponse>;
  /** ListNominationStakes queries all stakes for a specific nomination. */
  listNominationStakes(request: QueryListNominationStakesRequest): Promise<QueryListNominationStakesResponse>;
  /** ListRetroRewardHistory queries retroactive reward records for a given season. */
  listRetroRewardHistory(request: QueryListRetroRewardHistoryRequest): Promise<QueryListRetroRewardHistoryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Queries a Season by index. */
  getSeason = async (request: QueryGetSeasonRequest = {}): Promise<QueryGetSeasonResponse> => {
    const data = QueryGetSeasonRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetSeason", data);
    return promise.then(data => QueryGetSeasonResponse.decode(new BinaryReader(data)));
  };
  /* Queries a SeasonTransitionState by index. */
  getSeasonTransitionState = async (request: QueryGetSeasonTransitionStateRequest = {}): Promise<QueryGetSeasonTransitionStateResponse> => {
    const data = QueryGetSeasonTransitionStateRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetSeasonTransitionState", data);
    return promise.then(data => QueryGetSeasonTransitionStateResponse.decode(new BinaryReader(data)));
  };
  /* Queries a TransitionRecoveryState by index. */
  getTransitionRecoveryState = async (request: QueryGetTransitionRecoveryStateRequest = {}): Promise<QueryGetTransitionRecoveryStateResponse> => {
    const data = QueryGetTransitionRecoveryStateRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetTransitionRecoveryState", data);
    return promise.then(data => QueryGetTransitionRecoveryStateResponse.decode(new BinaryReader(data)));
  };
  /* Queries a NextSeasonInfo by index. */
  getNextSeasonInfo = async (request: QueryGetNextSeasonInfoRequest = {}): Promise<QueryGetNextSeasonInfoResponse> => {
    const data = QueryGetNextSeasonInfoRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetNextSeasonInfo", data);
    return promise.then(data => QueryGetNextSeasonInfoResponse.decode(new BinaryReader(data)));
  };
  /* ListSeasonSnapshot Queries a list of SeasonSnapshot items. */
  getSeasonSnapshot = async (request: QueryGetSeasonSnapshotRequest): Promise<QueryGetSeasonSnapshotResponse> => {
    const data = QueryGetSeasonSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetSeasonSnapshot", data);
    return promise.then(data => QueryGetSeasonSnapshotResponse.decode(new BinaryReader(data)));
  };
  /* ListSeasonSnapshot defines the ListSeasonSnapshot RPC. */
  listSeasonSnapshot = async (request: QueryAllSeasonSnapshotRequest = {
    pagination: undefined
  }): Promise<QueryAllSeasonSnapshotResponse> => {
    const data = QueryAllSeasonSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListSeasonSnapshot", data);
    return promise.then(data => QueryAllSeasonSnapshotResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberSeasonSnapshot Queries a list of MemberSeasonSnapshot items. */
  getMemberSeasonSnapshot = async (request: QueryGetMemberSeasonSnapshotRequest): Promise<QueryGetMemberSeasonSnapshotResponse> => {
    const data = QueryGetMemberSeasonSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetMemberSeasonSnapshot", data);
    return promise.then(data => QueryGetMemberSeasonSnapshotResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberSeasonSnapshot defines the ListMemberSeasonSnapshot RPC. */
  listMemberSeasonSnapshot = async (request: QueryAllMemberSeasonSnapshotRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberSeasonSnapshotResponse> => {
    const data = QueryAllMemberSeasonSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListMemberSeasonSnapshot", data);
    return promise.then(data => QueryAllMemberSeasonSnapshotResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberProfile Queries a list of MemberProfile items. */
  getMemberProfile = async (request: QueryGetMemberProfileRequest): Promise<QueryGetMemberProfileResponse> => {
    const data = QueryGetMemberProfileRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetMemberProfile", data);
    return promise.then(data => QueryGetMemberProfileResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberProfile defines the ListMemberProfile RPC. */
  listMemberProfile = async (request: QueryAllMemberProfileRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberProfileResponse> => {
    const data = QueryAllMemberProfileRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListMemberProfile", data);
    return promise.then(data => QueryAllMemberProfileResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberRegistration Queries a list of MemberRegistration items. */
  getMemberRegistration = async (request: QueryGetMemberRegistrationRequest): Promise<QueryGetMemberRegistrationResponse> => {
    const data = QueryGetMemberRegistrationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetMemberRegistration", data);
    return promise.then(data => QueryGetMemberRegistrationResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberRegistration defines the ListMemberRegistration RPC. */
  listMemberRegistration = async (request: QueryAllMemberRegistrationRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberRegistrationResponse> => {
    const data = QueryAllMemberRegistrationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListMemberRegistration", data);
    return promise.then(data => QueryAllMemberRegistrationResponse.decode(new BinaryReader(data)));
  };
  /* ListAchievement Queries a list of Achievement items. */
  getAchievement = async (request: QueryGetAchievementRequest): Promise<QueryGetAchievementResponse> => {
    const data = QueryGetAchievementRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetAchievement", data);
    return promise.then(data => QueryGetAchievementResponse.decode(new BinaryReader(data)));
  };
  /* ListAchievement defines the ListAchievement RPC. */
  listAchievement = async (request: QueryAllAchievementRequest = {
    pagination: undefined
  }): Promise<QueryAllAchievementResponse> => {
    const data = QueryAllAchievementRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListAchievement", data);
    return promise.then(data => QueryAllAchievementResponse.decode(new BinaryReader(data)));
  };
  /* ListTitle Queries a list of Title items. */
  getTitle = async (request: QueryGetTitleRequest): Promise<QueryGetTitleResponse> => {
    const data = QueryGetTitleRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetTitle", data);
    return promise.then(data => QueryGetTitleResponse.decode(new BinaryReader(data)));
  };
  /* ListTitle defines the ListTitle RPC. */
  listTitle = async (request: QueryAllTitleRequest = {
    pagination: undefined
  }): Promise<QueryAllTitleResponse> => {
    const data = QueryAllTitleRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListTitle", data);
    return promise.then(data => QueryAllTitleResponse.decode(new BinaryReader(data)));
  };
  /* ListSeasonTitleEligibility Queries a list of SeasonTitleEligibility items. */
  getSeasonTitleEligibility = async (request: QueryGetSeasonTitleEligibilityRequest): Promise<QueryGetSeasonTitleEligibilityResponse> => {
    const data = QueryGetSeasonTitleEligibilityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetSeasonTitleEligibility", data);
    return promise.then(data => QueryGetSeasonTitleEligibilityResponse.decode(new BinaryReader(data)));
  };
  /* ListSeasonTitleEligibility defines the ListSeasonTitleEligibility RPC. */
  listSeasonTitleEligibility = async (request: QueryAllSeasonTitleEligibilityRequest = {
    pagination: undefined
  }): Promise<QueryAllSeasonTitleEligibilityResponse> => {
    const data = QueryAllSeasonTitleEligibilityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListSeasonTitleEligibility", data);
    return promise.then(data => QueryAllSeasonTitleEligibilityResponse.decode(new BinaryReader(data)));
  };
  /* ListGuild Queries a list of Guild items. */
  getGuild = async (request: QueryGetGuildRequest): Promise<QueryGetGuildResponse> => {
    const data = QueryGetGuildRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetGuild", data);
    return promise.then(data => QueryGetGuildResponse.decode(new BinaryReader(data)));
  };
  /* ListGuild defines the ListGuild RPC. */
  listGuild = async (request: QueryAllGuildRequest = {
    pagination: undefined
  }): Promise<QueryAllGuildResponse> => {
    const data = QueryAllGuildRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListGuild", data);
    return promise.then(data => QueryAllGuildResponse.decode(new BinaryReader(data)));
  };
  /* ListGuildMembership Queries a list of GuildMembership items. */
  getGuildMembership = async (request: QueryGetGuildMembershipRequest): Promise<QueryGetGuildMembershipResponse> => {
    const data = QueryGetGuildMembershipRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetGuildMembership", data);
    return promise.then(data => QueryGetGuildMembershipResponse.decode(new BinaryReader(data)));
  };
  /* ListGuildMembership defines the ListGuildMembership RPC. */
  listGuildMembership = async (request: QueryAllGuildMembershipRequest = {
    pagination: undefined
  }): Promise<QueryAllGuildMembershipResponse> => {
    const data = QueryAllGuildMembershipRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListGuildMembership", data);
    return promise.then(data => QueryAllGuildMembershipResponse.decode(new BinaryReader(data)));
  };
  /* ListGuildInvite Queries a list of GuildInvite items. */
  getGuildInvite = async (request: QueryGetGuildInviteRequest): Promise<QueryGetGuildInviteResponse> => {
    const data = QueryGetGuildInviteRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetGuildInvite", data);
    return promise.then(data => QueryGetGuildInviteResponse.decode(new BinaryReader(data)));
  };
  /* ListGuildInvite defines the ListGuildInvite RPC. */
  listGuildInvite = async (request: QueryAllGuildInviteRequest = {
    pagination: undefined
  }): Promise<QueryAllGuildInviteResponse> => {
    const data = QueryAllGuildInviteRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListGuildInvite", data);
    return promise.then(data => QueryAllGuildInviteResponse.decode(new BinaryReader(data)));
  };
  /* ListQuest Queries a list of Quest items. */
  getQuest = async (request: QueryGetQuestRequest): Promise<QueryGetQuestResponse> => {
    const data = QueryGetQuestRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetQuest", data);
    return promise.then(data => QueryGetQuestResponse.decode(new BinaryReader(data)));
  };
  /* ListQuest defines the ListQuest RPC. */
  listQuest = async (request: QueryAllQuestRequest = {
    pagination: undefined
  }): Promise<QueryAllQuestResponse> => {
    const data = QueryAllQuestRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListQuest", data);
    return promise.then(data => QueryAllQuestResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberQuestProgress Queries a list of MemberQuestProgress items. */
  getMemberQuestProgress = async (request: QueryGetMemberQuestProgressRequest): Promise<QueryGetMemberQuestProgressResponse> => {
    const data = QueryGetMemberQuestProgressRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetMemberQuestProgress", data);
    return promise.then(data => QueryGetMemberQuestProgressResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberQuestProgress defines the ListMemberQuestProgress RPC. */
  listMemberQuestProgress = async (request: QueryAllMemberQuestProgressRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberQuestProgressResponse> => {
    const data = QueryAllMemberQuestProgressRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListMemberQuestProgress", data);
    return promise.then(data => QueryAllMemberQuestProgressResponse.decode(new BinaryReader(data)));
  };
  /* ListEpochXpTracker Queries a list of EpochXpTracker items. */
  getEpochXpTracker = async (request: QueryGetEpochXpTrackerRequest): Promise<QueryGetEpochXpTrackerResponse> => {
    const data = QueryGetEpochXpTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetEpochXpTracker", data);
    return promise.then(data => QueryGetEpochXpTrackerResponse.decode(new BinaryReader(data)));
  };
  /* ListEpochXpTracker defines the ListEpochXpTracker RPC. */
  listEpochXpTracker = async (request: QueryAllEpochXpTrackerRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochXpTrackerResponse> => {
    const data = QueryAllEpochXpTrackerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListEpochXpTracker", data);
    return promise.then(data => QueryAllEpochXpTrackerResponse.decode(new BinaryReader(data)));
  };
  /* ListVoteXpRecord Queries a list of VoteXpRecord items. */
  getVoteXpRecord = async (request: QueryGetVoteXpRecordRequest): Promise<QueryGetVoteXpRecordResponse> => {
    const data = QueryGetVoteXpRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetVoteXpRecord", data);
    return promise.then(data => QueryGetVoteXpRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListVoteXpRecord defines the ListVoteXpRecord RPC. */
  listVoteXpRecord = async (request: QueryAllVoteXpRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllVoteXpRecordResponse> => {
    const data = QueryAllVoteXpRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListVoteXpRecord", data);
    return promise.then(data => QueryAllVoteXpRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListForumXpCooldown Queries a list of ForumXpCooldown items. */
  getForumXpCooldown = async (request: QueryGetForumXpCooldownRequest): Promise<QueryGetForumXpCooldownResponse> => {
    const data = QueryGetForumXpCooldownRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetForumXpCooldown", data);
    return promise.then(data => QueryGetForumXpCooldownResponse.decode(new BinaryReader(data)));
  };
  /* ListForumXpCooldown defines the ListForumXpCooldown RPC. */
  listForumXpCooldown = async (request: QueryAllForumXpCooldownRequest = {
    pagination: undefined
  }): Promise<QueryAllForumXpCooldownResponse> => {
    const data = QueryAllForumXpCooldownRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListForumXpCooldown", data);
    return promise.then(data => QueryAllForumXpCooldownResponse.decode(new BinaryReader(data)));
  };
  /* ListDisplayNameModeration Queries a list of DisplayNameModeration items. */
  getDisplayNameModeration = async (request: QueryGetDisplayNameModerationRequest): Promise<QueryGetDisplayNameModerationResponse> => {
    const data = QueryGetDisplayNameModerationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetDisplayNameModeration", data);
    return promise.then(data => QueryGetDisplayNameModerationResponse.decode(new BinaryReader(data)));
  };
  /* ListDisplayNameModeration defines the ListDisplayNameModeration RPC. */
  listDisplayNameModeration = async (request: QueryAllDisplayNameModerationRequest = {
    pagination: undefined
  }): Promise<QueryAllDisplayNameModerationResponse> => {
    const data = QueryAllDisplayNameModerationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListDisplayNameModeration", data);
    return promise.then(data => QueryAllDisplayNameModerationResponse.decode(new BinaryReader(data)));
  };
  /* ListDisplayNameReportStake Queries a list of DisplayNameReportStake items. */
  getDisplayNameReportStake = async (request: QueryGetDisplayNameReportStakeRequest): Promise<QueryGetDisplayNameReportStakeResponse> => {
    const data = QueryGetDisplayNameReportStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetDisplayNameReportStake", data);
    return promise.then(data => QueryGetDisplayNameReportStakeResponse.decode(new BinaryReader(data)));
  };
  /* ListDisplayNameReportStake defines the ListDisplayNameReportStake RPC. */
  listDisplayNameReportStake = async (request: QueryAllDisplayNameReportStakeRequest = {
    pagination: undefined
  }): Promise<QueryAllDisplayNameReportStakeResponse> => {
    const data = QueryAllDisplayNameReportStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListDisplayNameReportStake", data);
    return promise.then(data => QueryAllDisplayNameReportStakeResponse.decode(new BinaryReader(data)));
  };
  /* ListDisplayNameAppealStake Queries a list of DisplayNameAppealStake items. */
  getDisplayNameAppealStake = async (request: QueryGetDisplayNameAppealStakeRequest): Promise<QueryGetDisplayNameAppealStakeResponse> => {
    const data = QueryGetDisplayNameAppealStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetDisplayNameAppealStake", data);
    return promise.then(data => QueryGetDisplayNameAppealStakeResponse.decode(new BinaryReader(data)));
  };
  /* ListDisplayNameAppealStake defines the ListDisplayNameAppealStake RPC. */
  listDisplayNameAppealStake = async (request: QueryAllDisplayNameAppealStakeRequest = {
    pagination: undefined
  }): Promise<QueryAllDisplayNameAppealStakeResponse> => {
    const data = QueryAllDisplayNameAppealStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListDisplayNameAppealStake", data);
    return promise.then(data => QueryAllDisplayNameAppealStakeResponse.decode(new BinaryReader(data)));
  };
  /* CurrentSeason Queries a list of CurrentSeason items. */
  currentSeason = async (request: QueryCurrentSeasonRequest = {}): Promise<QueryCurrentSeasonResponse> => {
    const data = QueryCurrentSeasonRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "CurrentSeason", data);
    return promise.then(data => QueryCurrentSeasonResponse.decode(new BinaryReader(data)));
  };
  /* SeasonByNumber Queries a list of SeasonByNumber items. */
  seasonByNumber = async (request: QuerySeasonByNumberRequest): Promise<QuerySeasonByNumberResponse> => {
    const data = QuerySeasonByNumberRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "SeasonByNumber", data);
    return promise.then(data => QuerySeasonByNumberResponse.decode(new BinaryReader(data)));
  };
  /* SeasonStats Queries a list of SeasonStats items. */
  seasonStats = async (request: QuerySeasonStatsRequest): Promise<QuerySeasonStatsResponse> => {
    const data = QuerySeasonStatsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "SeasonStats", data);
    return promise.then(data => QuerySeasonStatsResponse.decode(new BinaryReader(data)));
  };
  /* MemberByDisplayName Queries a list of MemberByDisplayName items. */
  memberByDisplayName = async (request: QueryMemberByDisplayNameRequest): Promise<QueryMemberByDisplayNameResponse> => {
    const data = QueryMemberByDisplayNameRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberByDisplayName", data);
    return promise.then(data => QueryMemberByDisplayNameResponse.decode(new BinaryReader(data)));
  };
  /* MemberSeasonHistory Queries a list of MemberSeasonHistory items. */
  memberSeasonHistory = async (request: QueryMemberSeasonHistoryRequest): Promise<QueryMemberSeasonHistoryResponse> => {
    const data = QueryMemberSeasonHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberSeasonHistory", data);
    return promise.then(data => QueryMemberSeasonHistoryResponse.decode(new BinaryReader(data)));
  };
  /* MemberXpHistory Queries a list of MemberXpHistory items. */
  memberXpHistory = async (request: QueryMemberXpHistoryRequest): Promise<QueryMemberXpHistoryResponse> => {
    const data = QueryMemberXpHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberXpHistory", data);
    return promise.then(data => QueryMemberXpHistoryResponse.decode(new BinaryReader(data)));
  };
  /* Achievements Queries a list of Achievements items. */
  achievements = async (request: QueryAchievementsRequest = {
    pagination: undefined
  }): Promise<QueryAchievementsResponse> => {
    const data = QueryAchievementsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "Achievements", data);
    return promise.then(data => QueryAchievementsResponse.decode(new BinaryReader(data)));
  };
  /* MemberAchievements Queries a list of MemberAchievements items. */
  memberAchievements = async (request: QueryMemberAchievementsRequest): Promise<QueryMemberAchievementsResponse> => {
    const data = QueryMemberAchievementsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberAchievements", data);
    return promise.then(data => QueryMemberAchievementsResponse.decode(new BinaryReader(data)));
  };
  /* Titles Queries a list of Titles items. */
  titles = async (request: QueryTitlesRequest = {
    pagination: undefined
  }): Promise<QueryTitlesResponse> => {
    const data = QueryTitlesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "Titles", data);
    return promise.then(data => QueryTitlesResponse.decode(new BinaryReader(data)));
  };
  /* MemberTitles Queries a list of MemberTitles items. */
  memberTitles = async (request: QueryMemberTitlesRequest): Promise<QueryMemberTitlesResponse> => {
    const data = QueryMemberTitlesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberTitles", data);
    return promise.then(data => QueryMemberTitlesResponse.decode(new BinaryReader(data)));
  };
  /* GuildById Queries a list of GuildById items. */
  guildById = async (request: QueryGuildByIdRequest): Promise<QueryGuildByIdResponse> => {
    const data = QueryGuildByIdRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GuildById", data);
    return promise.then(data => QueryGuildByIdResponse.decode(new BinaryReader(data)));
  };
  /* GuildsList Queries a list of GuildsList items. */
  guildsList = async (request: QueryGuildsListRequest = {
    pagination: undefined
  }): Promise<QueryGuildsListResponse> => {
    const data = QueryGuildsListRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GuildsList", data);
    return promise.then(data => QueryGuildsListResponse.decode(new BinaryReader(data)));
  };
  /* GuildsByFounder Queries a list of GuildsByFounder items. */
  guildsByFounder = async (request: QueryGuildsByFounderRequest): Promise<QueryGuildsByFounderResponse> => {
    const data = QueryGuildsByFounderRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GuildsByFounder", data);
    return promise.then(data => QueryGuildsByFounderResponse.decode(new BinaryReader(data)));
  };
  /* GuildMembers Queries a list of GuildMembers items. */
  guildMembers = async (request: QueryGuildMembersRequest): Promise<QueryGuildMembersResponse> => {
    const data = QueryGuildMembersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GuildMembers", data);
    return promise.then(data => QueryGuildMembersResponse.decode(new BinaryReader(data)));
  };
  /* MemberGuild Queries a list of MemberGuild items. */
  memberGuild = async (request: QueryMemberGuildRequest): Promise<QueryMemberGuildResponse> => {
    const data = QueryMemberGuildRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberGuild", data);
    return promise.then(data => QueryMemberGuildResponse.decode(new BinaryReader(data)));
  };
  /* GuildInvites Queries a list of GuildInvites items. */
  guildInvites = async (request: QueryGuildInvitesRequest): Promise<QueryGuildInvitesResponse> => {
    const data = QueryGuildInvitesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GuildInvites", data);
    return promise.then(data => QueryGuildInvitesResponse.decode(new BinaryReader(data)));
  };
  /* MemberGuildInvites Queries a list of MemberGuildInvites items. */
  memberGuildInvites = async (request: QueryMemberGuildInvitesRequest): Promise<QueryMemberGuildInvitesResponse> => {
    const data = QueryMemberGuildInvitesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberGuildInvites", data);
    return promise.then(data => QueryMemberGuildInvitesResponse.decode(new BinaryReader(data)));
  };
  /* QuestsList Queries a list of QuestsList items. */
  questsList = async (request: QueryQuestsListRequest = {
    pagination: undefined
  }): Promise<QueryQuestsListResponse> => {
    const data = QueryQuestsListRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "QuestsList", data);
    return promise.then(data => QueryQuestsListResponse.decode(new BinaryReader(data)));
  };
  /* QuestById Queries a list of QuestById items. */
  questById = async (request: QueryQuestByIdRequest): Promise<QueryQuestByIdResponse> => {
    const data = QueryQuestByIdRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "QuestById", data);
    return promise.then(data => QueryQuestByIdResponse.decode(new BinaryReader(data)));
  };
  /* QuestChain Queries a list of QuestChain items. */
  questChain = async (request: QueryQuestChainRequest): Promise<QueryQuestChainResponse> => {
    const data = QueryQuestChainRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "QuestChain", data);
    return promise.then(data => QueryQuestChainResponse.decode(new BinaryReader(data)));
  };
  /* MemberQuestStatus Queries a list of MemberQuestStatus items. */
  memberQuestStatus = async (request: QueryMemberQuestStatusRequest): Promise<QueryMemberQuestStatusResponse> => {
    const data = QueryMemberQuestStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "MemberQuestStatus", data);
    return promise.then(data => QueryMemberQuestStatusResponse.decode(new BinaryReader(data)));
  };
  /* AvailableQuests Queries a list of AvailableQuests items. */
  availableQuests = async (request: QueryAvailableQuestsRequest): Promise<QueryAvailableQuestsResponse> => {
    const data = QueryAvailableQuestsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "AvailableQuests", data);
    return promise.then(data => QueryAvailableQuestsResponse.decode(new BinaryReader(data)));
  };
  /* GetNomination queries a single nomination by ID. */
  getNomination = async (request: QueryGetNominationRequest): Promise<QueryGetNominationResponse> => {
    const data = QueryGetNominationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "GetNomination", data);
    return promise.then(data => QueryGetNominationResponse.decode(new BinaryReader(data)));
  };
  /* ListNominations queries all nominations for the current season. */
  listNominations = async (request: QueryListNominationsRequest = {
    pagination: undefined
  }): Promise<QueryListNominationsResponse> => {
    const data = QueryListNominationsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListNominations", data);
    return promise.then(data => QueryListNominationsResponse.decode(new BinaryReader(data)));
  };
  /* ListNominationsByCreator queries nominations by a specific creator. */
  listNominationsByCreator = async (request: QueryListNominationsByCreatorRequest): Promise<QueryListNominationsByCreatorResponse> => {
    const data = QueryListNominationsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListNominationsByCreator", data);
    return promise.then(data => QueryListNominationsByCreatorResponse.decode(new BinaryReader(data)));
  };
  /* ListNominationStakes queries all stakes for a specific nomination. */
  listNominationStakes = async (request: QueryListNominationStakesRequest): Promise<QueryListNominationStakesResponse> => {
    const data = QueryListNominationStakesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListNominationStakes", data);
    return promise.then(data => QueryListNominationStakesResponse.decode(new BinaryReader(data)));
  };
  /* ListRetroRewardHistory queries retroactive reward records for a given season. */
  listRetroRewardHistory = async (request: QueryListRetroRewardHistoryRequest): Promise<QueryListRetroRewardHistoryResponse> => {
    const data = QueryListRetroRewardHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.season.v1.Query", "ListRetroRewardHistory", data);
    return promise.then(data => QueryListRetroRewardHistoryResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getSeason(request?: QueryGetSeasonRequest): Promise<QueryGetSeasonResponse> {
      return queryService.getSeason(request);
    },
    getSeasonTransitionState(request?: QueryGetSeasonTransitionStateRequest): Promise<QueryGetSeasonTransitionStateResponse> {
      return queryService.getSeasonTransitionState(request);
    },
    getTransitionRecoveryState(request?: QueryGetTransitionRecoveryStateRequest): Promise<QueryGetTransitionRecoveryStateResponse> {
      return queryService.getTransitionRecoveryState(request);
    },
    getNextSeasonInfo(request?: QueryGetNextSeasonInfoRequest): Promise<QueryGetNextSeasonInfoResponse> {
      return queryService.getNextSeasonInfo(request);
    },
    getSeasonSnapshot(request: QueryGetSeasonSnapshotRequest): Promise<QueryGetSeasonSnapshotResponse> {
      return queryService.getSeasonSnapshot(request);
    },
    listSeasonSnapshot(request?: QueryAllSeasonSnapshotRequest): Promise<QueryAllSeasonSnapshotResponse> {
      return queryService.listSeasonSnapshot(request);
    },
    getMemberSeasonSnapshot(request: QueryGetMemberSeasonSnapshotRequest): Promise<QueryGetMemberSeasonSnapshotResponse> {
      return queryService.getMemberSeasonSnapshot(request);
    },
    listMemberSeasonSnapshot(request?: QueryAllMemberSeasonSnapshotRequest): Promise<QueryAllMemberSeasonSnapshotResponse> {
      return queryService.listMemberSeasonSnapshot(request);
    },
    getMemberProfile(request: QueryGetMemberProfileRequest): Promise<QueryGetMemberProfileResponse> {
      return queryService.getMemberProfile(request);
    },
    listMemberProfile(request?: QueryAllMemberProfileRequest): Promise<QueryAllMemberProfileResponse> {
      return queryService.listMemberProfile(request);
    },
    getMemberRegistration(request: QueryGetMemberRegistrationRequest): Promise<QueryGetMemberRegistrationResponse> {
      return queryService.getMemberRegistration(request);
    },
    listMemberRegistration(request?: QueryAllMemberRegistrationRequest): Promise<QueryAllMemberRegistrationResponse> {
      return queryService.listMemberRegistration(request);
    },
    getAchievement(request: QueryGetAchievementRequest): Promise<QueryGetAchievementResponse> {
      return queryService.getAchievement(request);
    },
    listAchievement(request?: QueryAllAchievementRequest): Promise<QueryAllAchievementResponse> {
      return queryService.listAchievement(request);
    },
    getTitle(request: QueryGetTitleRequest): Promise<QueryGetTitleResponse> {
      return queryService.getTitle(request);
    },
    listTitle(request?: QueryAllTitleRequest): Promise<QueryAllTitleResponse> {
      return queryService.listTitle(request);
    },
    getSeasonTitleEligibility(request: QueryGetSeasonTitleEligibilityRequest): Promise<QueryGetSeasonTitleEligibilityResponse> {
      return queryService.getSeasonTitleEligibility(request);
    },
    listSeasonTitleEligibility(request?: QueryAllSeasonTitleEligibilityRequest): Promise<QueryAllSeasonTitleEligibilityResponse> {
      return queryService.listSeasonTitleEligibility(request);
    },
    getGuild(request: QueryGetGuildRequest): Promise<QueryGetGuildResponse> {
      return queryService.getGuild(request);
    },
    listGuild(request?: QueryAllGuildRequest): Promise<QueryAllGuildResponse> {
      return queryService.listGuild(request);
    },
    getGuildMembership(request: QueryGetGuildMembershipRequest): Promise<QueryGetGuildMembershipResponse> {
      return queryService.getGuildMembership(request);
    },
    listGuildMembership(request?: QueryAllGuildMembershipRequest): Promise<QueryAllGuildMembershipResponse> {
      return queryService.listGuildMembership(request);
    },
    getGuildInvite(request: QueryGetGuildInviteRequest): Promise<QueryGetGuildInviteResponse> {
      return queryService.getGuildInvite(request);
    },
    listGuildInvite(request?: QueryAllGuildInviteRequest): Promise<QueryAllGuildInviteResponse> {
      return queryService.listGuildInvite(request);
    },
    getQuest(request: QueryGetQuestRequest): Promise<QueryGetQuestResponse> {
      return queryService.getQuest(request);
    },
    listQuest(request?: QueryAllQuestRequest): Promise<QueryAllQuestResponse> {
      return queryService.listQuest(request);
    },
    getMemberQuestProgress(request: QueryGetMemberQuestProgressRequest): Promise<QueryGetMemberQuestProgressResponse> {
      return queryService.getMemberQuestProgress(request);
    },
    listMemberQuestProgress(request?: QueryAllMemberQuestProgressRequest): Promise<QueryAllMemberQuestProgressResponse> {
      return queryService.listMemberQuestProgress(request);
    },
    getEpochXpTracker(request: QueryGetEpochXpTrackerRequest): Promise<QueryGetEpochXpTrackerResponse> {
      return queryService.getEpochXpTracker(request);
    },
    listEpochXpTracker(request?: QueryAllEpochXpTrackerRequest): Promise<QueryAllEpochXpTrackerResponse> {
      return queryService.listEpochXpTracker(request);
    },
    getVoteXpRecord(request: QueryGetVoteXpRecordRequest): Promise<QueryGetVoteXpRecordResponse> {
      return queryService.getVoteXpRecord(request);
    },
    listVoteXpRecord(request?: QueryAllVoteXpRecordRequest): Promise<QueryAllVoteXpRecordResponse> {
      return queryService.listVoteXpRecord(request);
    },
    getForumXpCooldown(request: QueryGetForumXpCooldownRequest): Promise<QueryGetForumXpCooldownResponse> {
      return queryService.getForumXpCooldown(request);
    },
    listForumXpCooldown(request?: QueryAllForumXpCooldownRequest): Promise<QueryAllForumXpCooldownResponse> {
      return queryService.listForumXpCooldown(request);
    },
    getDisplayNameModeration(request: QueryGetDisplayNameModerationRequest): Promise<QueryGetDisplayNameModerationResponse> {
      return queryService.getDisplayNameModeration(request);
    },
    listDisplayNameModeration(request?: QueryAllDisplayNameModerationRequest): Promise<QueryAllDisplayNameModerationResponse> {
      return queryService.listDisplayNameModeration(request);
    },
    getDisplayNameReportStake(request: QueryGetDisplayNameReportStakeRequest): Promise<QueryGetDisplayNameReportStakeResponse> {
      return queryService.getDisplayNameReportStake(request);
    },
    listDisplayNameReportStake(request?: QueryAllDisplayNameReportStakeRequest): Promise<QueryAllDisplayNameReportStakeResponse> {
      return queryService.listDisplayNameReportStake(request);
    },
    getDisplayNameAppealStake(request: QueryGetDisplayNameAppealStakeRequest): Promise<QueryGetDisplayNameAppealStakeResponse> {
      return queryService.getDisplayNameAppealStake(request);
    },
    listDisplayNameAppealStake(request?: QueryAllDisplayNameAppealStakeRequest): Promise<QueryAllDisplayNameAppealStakeResponse> {
      return queryService.listDisplayNameAppealStake(request);
    },
    currentSeason(request?: QueryCurrentSeasonRequest): Promise<QueryCurrentSeasonResponse> {
      return queryService.currentSeason(request);
    },
    seasonByNumber(request: QuerySeasonByNumberRequest): Promise<QuerySeasonByNumberResponse> {
      return queryService.seasonByNumber(request);
    },
    seasonStats(request: QuerySeasonStatsRequest): Promise<QuerySeasonStatsResponse> {
      return queryService.seasonStats(request);
    },
    memberByDisplayName(request: QueryMemberByDisplayNameRequest): Promise<QueryMemberByDisplayNameResponse> {
      return queryService.memberByDisplayName(request);
    },
    memberSeasonHistory(request: QueryMemberSeasonHistoryRequest): Promise<QueryMemberSeasonHistoryResponse> {
      return queryService.memberSeasonHistory(request);
    },
    memberXpHistory(request: QueryMemberXpHistoryRequest): Promise<QueryMemberXpHistoryResponse> {
      return queryService.memberXpHistory(request);
    },
    achievements(request?: QueryAchievementsRequest): Promise<QueryAchievementsResponse> {
      return queryService.achievements(request);
    },
    memberAchievements(request: QueryMemberAchievementsRequest): Promise<QueryMemberAchievementsResponse> {
      return queryService.memberAchievements(request);
    },
    titles(request?: QueryTitlesRequest): Promise<QueryTitlesResponse> {
      return queryService.titles(request);
    },
    memberTitles(request: QueryMemberTitlesRequest): Promise<QueryMemberTitlesResponse> {
      return queryService.memberTitles(request);
    },
    guildById(request: QueryGuildByIdRequest): Promise<QueryGuildByIdResponse> {
      return queryService.guildById(request);
    },
    guildsList(request?: QueryGuildsListRequest): Promise<QueryGuildsListResponse> {
      return queryService.guildsList(request);
    },
    guildsByFounder(request: QueryGuildsByFounderRequest): Promise<QueryGuildsByFounderResponse> {
      return queryService.guildsByFounder(request);
    },
    guildMembers(request: QueryGuildMembersRequest): Promise<QueryGuildMembersResponse> {
      return queryService.guildMembers(request);
    },
    memberGuild(request: QueryMemberGuildRequest): Promise<QueryMemberGuildResponse> {
      return queryService.memberGuild(request);
    },
    guildInvites(request: QueryGuildInvitesRequest): Promise<QueryGuildInvitesResponse> {
      return queryService.guildInvites(request);
    },
    memberGuildInvites(request: QueryMemberGuildInvitesRequest): Promise<QueryMemberGuildInvitesResponse> {
      return queryService.memberGuildInvites(request);
    },
    questsList(request?: QueryQuestsListRequest): Promise<QueryQuestsListResponse> {
      return queryService.questsList(request);
    },
    questById(request: QueryQuestByIdRequest): Promise<QueryQuestByIdResponse> {
      return queryService.questById(request);
    },
    questChain(request: QueryQuestChainRequest): Promise<QueryQuestChainResponse> {
      return queryService.questChain(request);
    },
    memberQuestStatus(request: QueryMemberQuestStatusRequest): Promise<QueryMemberQuestStatusResponse> {
      return queryService.memberQuestStatus(request);
    },
    availableQuests(request: QueryAvailableQuestsRequest): Promise<QueryAvailableQuestsResponse> {
      return queryService.availableQuests(request);
    },
    getNomination(request: QueryGetNominationRequest): Promise<QueryGetNominationResponse> {
      return queryService.getNomination(request);
    },
    listNominations(request?: QueryListNominationsRequest): Promise<QueryListNominationsResponse> {
      return queryService.listNominations(request);
    },
    listNominationsByCreator(request: QueryListNominationsByCreatorRequest): Promise<QueryListNominationsByCreatorResponse> {
      return queryService.listNominationsByCreator(request);
    },
    listNominationStakes(request: QueryListNominationStakesRequest): Promise<QueryListNominationStakesResponse> {
      return queryService.listNominationStakes(request);
    },
    listRetroRewardHistory(request: QueryListRetroRewardHistoryRequest): Promise<QueryListRetroRewardHistoryResponse> {
      return queryService.listRetroRewardHistory(request);
    }
  };
};