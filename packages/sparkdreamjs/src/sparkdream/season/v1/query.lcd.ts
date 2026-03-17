//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSeasonRequest, QueryGetSeasonResponse, QueryGetSeasonTransitionStateRequest, QueryGetSeasonTransitionStateResponse, QueryGetTransitionRecoveryStateRequest, QueryGetTransitionRecoveryStateResponse, QueryGetNextSeasonInfoRequest, QueryGetNextSeasonInfoResponse, QueryGetSeasonSnapshotRequest, QueryGetSeasonSnapshotResponse, QueryAllSeasonSnapshotRequest, QueryAllSeasonSnapshotResponse, QueryGetMemberSeasonSnapshotRequest, QueryGetMemberSeasonSnapshotResponse, QueryAllMemberSeasonSnapshotRequest, QueryAllMemberSeasonSnapshotResponse, QueryGetMemberProfileRequest, QueryGetMemberProfileResponse, QueryAllMemberProfileRequest, QueryAllMemberProfileResponse, QueryGetMemberRegistrationRequest, QueryGetMemberRegistrationResponse, QueryAllMemberRegistrationRequest, QueryAllMemberRegistrationResponse, QueryGetAchievementRequest, QueryGetAchievementResponse, QueryAllAchievementRequest, QueryAllAchievementResponse, QueryGetTitleRequest, QueryGetTitleResponse, QueryAllTitleRequest, QueryAllTitleResponse, QueryGetSeasonTitleEligibilityRequest, QueryGetSeasonTitleEligibilityResponse, QueryAllSeasonTitleEligibilityRequest, QueryAllSeasonTitleEligibilityResponse, QueryGetGuildRequest, QueryGetGuildResponse, QueryAllGuildRequest, QueryAllGuildResponse, QueryGetGuildMembershipRequest, QueryGetGuildMembershipResponse, QueryAllGuildMembershipRequest, QueryAllGuildMembershipResponse, QueryGetGuildInviteRequest, QueryGetGuildInviteResponse, QueryAllGuildInviteRequest, QueryAllGuildInviteResponse, QueryGetQuestRequest, QueryGetQuestResponse, QueryAllQuestRequest, QueryAllQuestResponse, QueryGetMemberQuestProgressRequest, QueryGetMemberQuestProgressResponse, QueryAllMemberQuestProgressRequest, QueryAllMemberQuestProgressResponse, QueryGetEpochXpTrackerRequest, QueryGetEpochXpTrackerResponse, QueryAllEpochXpTrackerRequest, QueryAllEpochXpTrackerResponse, QueryGetVoteXpRecordRequest, QueryGetVoteXpRecordResponse, QueryAllVoteXpRecordRequest, QueryAllVoteXpRecordResponse, QueryGetForumXpCooldownRequest, QueryGetForumXpCooldownResponse, QueryAllForumXpCooldownRequest, QueryAllForumXpCooldownResponse, QueryGetDisplayNameModerationRequest, QueryGetDisplayNameModerationResponse, QueryAllDisplayNameModerationRequest, QueryAllDisplayNameModerationResponse, QueryGetDisplayNameReportStakeRequest, QueryGetDisplayNameReportStakeResponse, QueryAllDisplayNameReportStakeRequest, QueryAllDisplayNameReportStakeResponse, QueryGetDisplayNameAppealStakeRequest, QueryGetDisplayNameAppealStakeResponse, QueryAllDisplayNameAppealStakeRequest, QueryAllDisplayNameAppealStakeResponse, QueryCurrentSeasonRequest, QueryCurrentSeasonResponse, QuerySeasonByNumberRequest, QuerySeasonByNumberResponse, QuerySeasonStatsRequest, QuerySeasonStatsResponse, QueryMemberByDisplayNameRequest, QueryMemberByDisplayNameResponse, QueryMemberSeasonHistoryRequest, QueryMemberSeasonHistoryResponse, QueryMemberXpHistoryRequest, QueryMemberXpHistoryResponse, QueryAchievementsRequest, QueryAchievementsResponse, QueryMemberAchievementsRequest, QueryMemberAchievementsResponse, QueryTitlesRequest, QueryTitlesResponse, QueryMemberTitlesRequest, QueryMemberTitlesResponse, QueryGuildByIdRequest, QueryGuildByIdResponse, QueryGuildsListRequest, QueryGuildsListResponse, QueryGuildsByFounderRequest, QueryGuildsByFounderResponse, QueryGuildMembersRequest, QueryGuildMembersResponse, QueryMemberGuildRequest, QueryMemberGuildResponse, QueryGuildInvitesRequest, QueryGuildInvitesResponse, QueryMemberGuildInvitesRequest, QueryMemberGuildInvitesResponse, QueryQuestsListRequest, QueryQuestsListResponse, QueryQuestByIdRequest, QueryQuestByIdResponse, QueryQuestChainRequest, QueryQuestChainResponse, QueryMemberQuestStatusRequest, QueryMemberQuestStatusResponse, QueryAvailableQuestsRequest, QueryAvailableQuestsResponse, QueryGetNominationRequest, QueryGetNominationResponse, QueryListNominationsRequest, QueryListNominationsResponse, QueryListNominationsByCreatorRequest, QueryListNominationsByCreatorResponse, QueryListNominationStakesRequest, QueryListNominationStakesResponse, QueryListRetroRewardHistoryRequest, QueryListRetroRewardHistoryResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Parameters queries the parameters of the module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/season/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Queries a Season by index. */
  getSeason = async (_params: QueryGetSeasonRequest = {}): Promise<QueryGetSeasonResponse> => {
    const endpoint = `sparkdream/season/v1/season`;
    return await this.req.get<QueryGetSeasonResponse>(endpoint);
  };
  /* Queries a SeasonTransitionState by index. */
  getSeasonTransitionState = async (_params: QueryGetSeasonTransitionStateRequest = {}): Promise<QueryGetSeasonTransitionStateResponse> => {
    const endpoint = `sparkdream/season/v1/season_transition_state`;
    return await this.req.get<QueryGetSeasonTransitionStateResponse>(endpoint);
  };
  /* Queries a TransitionRecoveryState by index. */
  getTransitionRecoveryState = async (_params: QueryGetTransitionRecoveryStateRequest = {}): Promise<QueryGetTransitionRecoveryStateResponse> => {
    const endpoint = `sparkdream/season/v1/transition_recovery_state`;
    return await this.req.get<QueryGetTransitionRecoveryStateResponse>(endpoint);
  };
  /* Queries a NextSeasonInfo by index. */
  getNextSeasonInfo = async (_params: QueryGetNextSeasonInfoRequest = {}): Promise<QueryGetNextSeasonInfoResponse> => {
    const endpoint = `sparkdream/season/v1/next_season_info`;
    return await this.req.get<QueryGetNextSeasonInfoResponse>(endpoint);
  };
  /* ListSeasonSnapshot Queries a list of SeasonSnapshot items. */
  getSeasonSnapshot = async (params: QueryGetSeasonSnapshotRequest): Promise<QueryGetSeasonSnapshotResponse> => {
    const endpoint = `sparkdream/season/v1/season_snapshot/${params.season}`;
    return await this.req.get<QueryGetSeasonSnapshotResponse>(endpoint);
  };
  /* ListSeasonSnapshot defines the ListSeasonSnapshot RPC. */
  listSeasonSnapshot = async (params: QueryAllSeasonSnapshotRequest = {
    pagination: undefined
  }): Promise<QueryAllSeasonSnapshotResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/season_snapshot`;
    return await this.req.get<QueryAllSeasonSnapshotResponse>(endpoint, options);
  };
  /* ListMemberSeasonSnapshot Queries a list of MemberSeasonSnapshot items. */
  getMemberSeasonSnapshot = async (params: QueryGetMemberSeasonSnapshotRequest): Promise<QueryGetMemberSeasonSnapshotResponse> => {
    const endpoint = `sparkdream/season/v1/member_season_snapshot/${params.seasonAddress}`;
    return await this.req.get<QueryGetMemberSeasonSnapshotResponse>(endpoint);
  };
  /* ListMemberSeasonSnapshot defines the ListMemberSeasonSnapshot RPC. */
  listMemberSeasonSnapshot = async (params: QueryAllMemberSeasonSnapshotRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberSeasonSnapshotResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_season_snapshot`;
    return await this.req.get<QueryAllMemberSeasonSnapshotResponse>(endpoint, options);
  };
  /* ListMemberProfile Queries a list of MemberProfile items. */
  getMemberProfile = async (params: QueryGetMemberProfileRequest): Promise<QueryGetMemberProfileResponse> => {
    const endpoint = `sparkdream/season/v1/member_profile/${params.address}`;
    return await this.req.get<QueryGetMemberProfileResponse>(endpoint);
  };
  /* ListMemberProfile defines the ListMemberProfile RPC. */
  listMemberProfile = async (params: QueryAllMemberProfileRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberProfileResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_profile`;
    return await this.req.get<QueryAllMemberProfileResponse>(endpoint, options);
  };
  /* ListMemberRegistration Queries a list of MemberRegistration items. */
  getMemberRegistration = async (params: QueryGetMemberRegistrationRequest): Promise<QueryGetMemberRegistrationResponse> => {
    const endpoint = `sparkdream/season/v1/member_registration/${params.member}`;
    return await this.req.get<QueryGetMemberRegistrationResponse>(endpoint);
  };
  /* ListMemberRegistration defines the ListMemberRegistration RPC. */
  listMemberRegistration = async (params: QueryAllMemberRegistrationRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberRegistrationResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_registration`;
    return await this.req.get<QueryAllMemberRegistrationResponse>(endpoint, options);
  };
  /* ListAchievement Queries a list of Achievement items. */
  getAchievement = async (params: QueryGetAchievementRequest): Promise<QueryGetAchievementResponse> => {
    const endpoint = `sparkdream/season/v1/achievement/${params.achievementId}`;
    return await this.req.get<QueryGetAchievementResponse>(endpoint);
  };
  /* ListAchievement defines the ListAchievement RPC. */
  listAchievement = async (params: QueryAllAchievementRequest = {
    pagination: undefined
  }): Promise<QueryAllAchievementResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/achievement`;
    return await this.req.get<QueryAllAchievementResponse>(endpoint, options);
  };
  /* ListTitle Queries a list of Title items. */
  getTitle = async (params: QueryGetTitleRequest): Promise<QueryGetTitleResponse> => {
    const endpoint = `sparkdream/season/v1/title/${params.titleId}`;
    return await this.req.get<QueryGetTitleResponse>(endpoint);
  };
  /* ListTitle defines the ListTitle RPC. */
  listTitle = async (params: QueryAllTitleRequest = {
    pagination: undefined
  }): Promise<QueryAllTitleResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/title`;
    return await this.req.get<QueryAllTitleResponse>(endpoint, options);
  };
  /* ListSeasonTitleEligibility Queries a list of SeasonTitleEligibility items. */
  getSeasonTitleEligibility = async (params: QueryGetSeasonTitleEligibilityRequest): Promise<QueryGetSeasonTitleEligibilityResponse> => {
    const endpoint = `sparkdream/season/v1/season_title_eligibility/${params.titleSeason}`;
    return await this.req.get<QueryGetSeasonTitleEligibilityResponse>(endpoint);
  };
  /* ListSeasonTitleEligibility defines the ListSeasonTitleEligibility RPC. */
  listSeasonTitleEligibility = async (params: QueryAllSeasonTitleEligibilityRequest = {
    pagination: undefined
  }): Promise<QueryAllSeasonTitleEligibilityResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/season_title_eligibility`;
    return await this.req.get<QueryAllSeasonTitleEligibilityResponse>(endpoint, options);
  };
  /* ListGuild Queries a list of Guild items. */
  getGuild = async (params: QueryGetGuildRequest): Promise<QueryGetGuildResponse> => {
    const endpoint = `sparkdream/season/v1/guild/${params.id}`;
    return await this.req.get<QueryGetGuildResponse>(endpoint);
  };
  /* ListGuild defines the ListGuild RPC. */
  listGuild = async (params: QueryAllGuildRequest = {
    pagination: undefined
  }): Promise<QueryAllGuildResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guild`;
    return await this.req.get<QueryAllGuildResponse>(endpoint, options);
  };
  /* ListGuildMembership Queries a list of GuildMembership items. */
  getGuildMembership = async (params: QueryGetGuildMembershipRequest): Promise<QueryGetGuildMembershipResponse> => {
    const endpoint = `sparkdream/season/v1/guild_membership/${params.member}`;
    return await this.req.get<QueryGetGuildMembershipResponse>(endpoint);
  };
  /* ListGuildMembership defines the ListGuildMembership RPC. */
  listGuildMembership = async (params: QueryAllGuildMembershipRequest = {
    pagination: undefined
  }): Promise<QueryAllGuildMembershipResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guild_membership`;
    return await this.req.get<QueryAllGuildMembershipResponse>(endpoint, options);
  };
  /* ListGuildInvite Queries a list of GuildInvite items. */
  getGuildInvite = async (params: QueryGetGuildInviteRequest): Promise<QueryGetGuildInviteResponse> => {
    const endpoint = `sparkdream/season/v1/guild_invite/${params.guildInvitee}`;
    return await this.req.get<QueryGetGuildInviteResponse>(endpoint);
  };
  /* ListGuildInvite defines the ListGuildInvite RPC. */
  listGuildInvite = async (params: QueryAllGuildInviteRequest = {
    pagination: undefined
  }): Promise<QueryAllGuildInviteResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guild_invite`;
    return await this.req.get<QueryAllGuildInviteResponse>(endpoint, options);
  };
  /* ListQuest Queries a list of Quest items. */
  getQuest = async (params: QueryGetQuestRequest): Promise<QueryGetQuestResponse> => {
    const endpoint = `sparkdream/season/v1/quest/${params.questId}`;
    return await this.req.get<QueryGetQuestResponse>(endpoint);
  };
  /* ListQuest defines the ListQuest RPC. */
  listQuest = async (params: QueryAllQuestRequest = {
    pagination: undefined
  }): Promise<QueryAllQuestResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/quest`;
    return await this.req.get<QueryAllQuestResponse>(endpoint, options);
  };
  /* ListMemberQuestProgress Queries a list of MemberQuestProgress items. */
  getMemberQuestProgress = async (params: QueryGetMemberQuestProgressRequest): Promise<QueryGetMemberQuestProgressResponse> => {
    const endpoint = `sparkdream/season/v1/member_quest_progress/${params.memberQuest}`;
    return await this.req.get<QueryGetMemberQuestProgressResponse>(endpoint);
  };
  /* ListMemberQuestProgress defines the ListMemberQuestProgress RPC. */
  listMemberQuestProgress = async (params: QueryAllMemberQuestProgressRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberQuestProgressResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_quest_progress`;
    return await this.req.get<QueryAllMemberQuestProgressResponse>(endpoint, options);
  };
  /* ListEpochXpTracker Queries a list of EpochXpTracker items. */
  getEpochXpTracker = async (params: QueryGetEpochXpTrackerRequest): Promise<QueryGetEpochXpTrackerResponse> => {
    const endpoint = `sparkdream/season/v1/epoch_xp_tracker/${params.memberEpoch}`;
    return await this.req.get<QueryGetEpochXpTrackerResponse>(endpoint);
  };
  /* ListEpochXpTracker defines the ListEpochXpTracker RPC. */
  listEpochXpTracker = async (params: QueryAllEpochXpTrackerRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochXpTrackerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/epoch_xp_tracker`;
    return await this.req.get<QueryAllEpochXpTrackerResponse>(endpoint, options);
  };
  /* ListVoteXpRecord Queries a list of VoteXpRecord items. */
  getVoteXpRecord = async (params: QueryGetVoteXpRecordRequest): Promise<QueryGetVoteXpRecordResponse> => {
    const endpoint = `sparkdream/season/v1/vote_xp_record/${params.seasonMemberProposal}`;
    return await this.req.get<QueryGetVoteXpRecordResponse>(endpoint);
  };
  /* ListVoteXpRecord defines the ListVoteXpRecord RPC. */
  listVoteXpRecord = async (params: QueryAllVoteXpRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllVoteXpRecordResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/vote_xp_record`;
    return await this.req.get<QueryAllVoteXpRecordResponse>(endpoint, options);
  };
  /* ListForumXpCooldown Queries a list of ForumXpCooldown items. */
  getForumXpCooldown = async (params: QueryGetForumXpCooldownRequest): Promise<QueryGetForumXpCooldownResponse> => {
    const endpoint = `sparkdream/season/v1/forum_xp_cooldown/${params.beneficiaryActor}`;
    return await this.req.get<QueryGetForumXpCooldownResponse>(endpoint);
  };
  /* ListForumXpCooldown defines the ListForumXpCooldown RPC. */
  listForumXpCooldown = async (params: QueryAllForumXpCooldownRequest = {
    pagination: undefined
  }): Promise<QueryAllForumXpCooldownResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/forum_xp_cooldown`;
    return await this.req.get<QueryAllForumXpCooldownResponse>(endpoint, options);
  };
  /* ListDisplayNameModeration Queries a list of DisplayNameModeration items. */
  getDisplayNameModeration = async (params: QueryGetDisplayNameModerationRequest): Promise<QueryGetDisplayNameModerationResponse> => {
    const endpoint = `sparkdream/season/v1/display_name_moderation/${params.member}`;
    return await this.req.get<QueryGetDisplayNameModerationResponse>(endpoint);
  };
  /* ListDisplayNameModeration defines the ListDisplayNameModeration RPC. */
  listDisplayNameModeration = async (params: QueryAllDisplayNameModerationRequest = {
    pagination: undefined
  }): Promise<QueryAllDisplayNameModerationResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/display_name_moderation`;
    return await this.req.get<QueryAllDisplayNameModerationResponse>(endpoint, options);
  };
  /* ListDisplayNameReportStake Queries a list of DisplayNameReportStake items. */
  getDisplayNameReportStake = async (params: QueryGetDisplayNameReportStakeRequest): Promise<QueryGetDisplayNameReportStakeResponse> => {
    const endpoint = `sparkdream/season/v1/display_name_report_stake/${params.challengeId}`;
    return await this.req.get<QueryGetDisplayNameReportStakeResponse>(endpoint);
  };
  /* ListDisplayNameReportStake defines the ListDisplayNameReportStake RPC. */
  listDisplayNameReportStake = async (params: QueryAllDisplayNameReportStakeRequest = {
    pagination: undefined
  }): Promise<QueryAllDisplayNameReportStakeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/display_name_report_stake`;
    return await this.req.get<QueryAllDisplayNameReportStakeResponse>(endpoint, options);
  };
  /* ListDisplayNameAppealStake Queries a list of DisplayNameAppealStake items. */
  getDisplayNameAppealStake = async (params: QueryGetDisplayNameAppealStakeRequest): Promise<QueryGetDisplayNameAppealStakeResponse> => {
    const endpoint = `sparkdream/season/v1/display_name_appeal_stake/${params.challengeId}`;
    return await this.req.get<QueryGetDisplayNameAppealStakeResponse>(endpoint);
  };
  /* ListDisplayNameAppealStake defines the ListDisplayNameAppealStake RPC. */
  listDisplayNameAppealStake = async (params: QueryAllDisplayNameAppealStakeRequest = {
    pagination: undefined
  }): Promise<QueryAllDisplayNameAppealStakeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/display_name_appeal_stake`;
    return await this.req.get<QueryAllDisplayNameAppealStakeResponse>(endpoint, options);
  };
  /* CurrentSeason Queries a list of CurrentSeason items. */
  currentSeason = async (_params: QueryCurrentSeasonRequest = {}): Promise<QueryCurrentSeasonResponse> => {
    const endpoint = `sparkdream/season/v1/current_season`;
    return await this.req.get<QueryCurrentSeasonResponse>(endpoint);
  };
  /* SeasonByNumber Queries a list of SeasonByNumber items. */
  seasonByNumber = async (params: QuerySeasonByNumberRequest): Promise<QuerySeasonByNumberResponse> => {
    const endpoint = `sparkdream/season/v1/season_by_number/${params.number}`;
    return await this.req.get<QuerySeasonByNumberResponse>(endpoint);
  };
  /* SeasonStats Queries a list of SeasonStats items. */
  seasonStats = async (params: QuerySeasonStatsRequest): Promise<QuerySeasonStatsResponse> => {
    const endpoint = `sparkdream/season/v1/season_stats/${params.season}`;
    return await this.req.get<QuerySeasonStatsResponse>(endpoint);
  };
  /* MemberByDisplayName Queries a list of MemberByDisplayName items. */
  memberByDisplayName = async (params: QueryMemberByDisplayNameRequest): Promise<QueryMemberByDisplayNameResponse> => {
    const endpoint = `sparkdream/season/v1/member_by_display_name/${params.displayName}`;
    return await this.req.get<QueryMemberByDisplayNameResponse>(endpoint);
  };
  /* MemberSeasonHistory Queries a list of MemberSeasonHistory items. */
  memberSeasonHistory = async (params: QueryMemberSeasonHistoryRequest): Promise<QueryMemberSeasonHistoryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_season_history/${params.address}`;
    return await this.req.get<QueryMemberSeasonHistoryResponse>(endpoint, options);
  };
  /* MemberXpHistory Queries a list of MemberXpHistory items. */
  memberXpHistory = async (params: QueryMemberXpHistoryRequest): Promise<QueryMemberXpHistoryResponse> => {
    const endpoint = `sparkdream/season/v1/member_xp_history/${params.address}/${params.season}/${params.epochsBack}`;
    return await this.req.get<QueryMemberXpHistoryResponse>(endpoint);
  };
  /* Achievements Queries a list of Achievements items. */
  achievements = async (params: QueryAchievementsRequest = {
    pagination: undefined
  }): Promise<QueryAchievementsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/achievements`;
    return await this.req.get<QueryAchievementsResponse>(endpoint, options);
  };
  /* MemberAchievements Queries a list of MemberAchievements items. */
  memberAchievements = async (params: QueryMemberAchievementsRequest): Promise<QueryMemberAchievementsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_achievements/${params.address}`;
    return await this.req.get<QueryMemberAchievementsResponse>(endpoint, options);
  };
  /* Titles Queries a list of Titles items. */
  titles = async (params: QueryTitlesRequest = {
    pagination: undefined
  }): Promise<QueryTitlesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/titles`;
    return await this.req.get<QueryTitlesResponse>(endpoint, options);
  };
  /* MemberTitles Queries a list of MemberTitles items. */
  memberTitles = async (params: QueryMemberTitlesRequest): Promise<QueryMemberTitlesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_titles/${params.address}`;
    return await this.req.get<QueryMemberTitlesResponse>(endpoint, options);
  };
  /* GuildById Queries a list of GuildById items. */
  guildById = async (params: QueryGuildByIdRequest): Promise<QueryGuildByIdResponse> => {
    const endpoint = `sparkdream/season/v1/guild_by_id/${params.guildId}`;
    return await this.req.get<QueryGuildByIdResponse>(endpoint);
  };
  /* GuildsList Queries a list of GuildsList items. */
  guildsList = async (params: QueryGuildsListRequest = {
    pagination: undefined
  }): Promise<QueryGuildsListResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guilds_list`;
    return await this.req.get<QueryGuildsListResponse>(endpoint, options);
  };
  /* GuildsByFounder Queries a list of GuildsByFounder items. */
  guildsByFounder = async (params: QueryGuildsByFounderRequest): Promise<QueryGuildsByFounderResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guilds_by_founder/${params.founder}/${params.includeDissolved}`;
    return await this.req.get<QueryGuildsByFounderResponse>(endpoint, options);
  };
  /* GuildMembers Queries a list of GuildMembers items. */
  guildMembers = async (params: QueryGuildMembersRequest): Promise<QueryGuildMembersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guild_members/${params.guildId}`;
    return await this.req.get<QueryGuildMembersResponse>(endpoint, options);
  };
  /* MemberGuild Queries a list of MemberGuild items. */
  memberGuild = async (params: QueryMemberGuildRequest): Promise<QueryMemberGuildResponse> => {
    const endpoint = `sparkdream/season/v1/member_guild/${params.member}`;
    return await this.req.get<QueryMemberGuildResponse>(endpoint);
  };
  /* GuildInvites Queries a list of GuildInvites items. */
  guildInvites = async (params: QueryGuildInvitesRequest): Promise<QueryGuildInvitesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/guild_invites/${params.guildId}`;
    return await this.req.get<QueryGuildInvitesResponse>(endpoint, options);
  };
  /* MemberGuildInvites Queries a list of MemberGuildInvites items. */
  memberGuildInvites = async (params: QueryMemberGuildInvitesRequest): Promise<QueryMemberGuildInvitesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/member_guild_invites/${params.member}`;
    return await this.req.get<QueryMemberGuildInvitesResponse>(endpoint, options);
  };
  /* QuestsList Queries a list of QuestsList items. */
  questsList = async (params: QueryQuestsListRequest = {
    pagination: undefined
  }): Promise<QueryQuestsListResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/quests_list`;
    return await this.req.get<QueryQuestsListResponse>(endpoint, options);
  };
  /* QuestById Queries a list of QuestById items. */
  questById = async (params: QueryQuestByIdRequest): Promise<QueryQuestByIdResponse> => {
    const endpoint = `sparkdream/season/v1/quest_by_id/${params.questId}`;
    return await this.req.get<QueryQuestByIdResponse>(endpoint);
  };
  /* QuestChain Queries a list of QuestChain items. */
  questChain = async (params: QueryQuestChainRequest): Promise<QueryQuestChainResponse> => {
    const endpoint = `sparkdream/season/v1/quest_chain/${params.questChain}`;
    return await this.req.get<QueryQuestChainResponse>(endpoint);
  };
  /* MemberQuestStatus Queries a list of MemberQuestStatus items. */
  memberQuestStatus = async (params: QueryMemberQuestStatusRequest): Promise<QueryMemberQuestStatusResponse> => {
    const endpoint = `sparkdream/season/v1/member_quest_status/${params.member}/${params.questId}`;
    return await this.req.get<QueryMemberQuestStatusResponse>(endpoint);
  };
  /* AvailableQuests Queries a list of AvailableQuests items. */
  availableQuests = async (params: QueryAvailableQuestsRequest): Promise<QueryAvailableQuestsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/available_quests/${params.member}`;
    return await this.req.get<QueryAvailableQuestsResponse>(endpoint, options);
  };
  /* GetNomination queries a single nomination by ID. */
  getNomination = async (params: QueryGetNominationRequest): Promise<QueryGetNominationResponse> => {
    const endpoint = `sparkdream/season/v1/nomination/${params.id}`;
    return await this.req.get<QueryGetNominationResponse>(endpoint);
  };
  /* ListNominations queries all nominations for the current season. */
  listNominations = async (params: QueryListNominationsRequest = {
    pagination: undefined
  }): Promise<QueryListNominationsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/nominations`;
    return await this.req.get<QueryListNominationsResponse>(endpoint, options);
  };
  /* ListNominationsByCreator queries nominations by a specific creator. */
  listNominationsByCreator = async (params: QueryListNominationsByCreatorRequest): Promise<QueryListNominationsByCreatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/nominations_by_creator/${params.creator}`;
    return await this.req.get<QueryListNominationsByCreatorResponse>(endpoint, options);
  };
  /* ListNominationStakes queries all stakes for a specific nomination. */
  listNominationStakes = async (params: QueryListNominationStakesRequest): Promise<QueryListNominationStakesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/nomination_stakes/${params.nominationId}`;
    return await this.req.get<QueryListNominationStakesResponse>(endpoint, options);
  };
  /* ListRetroRewardHistory queries retroactive reward records for a given season. */
  listRetroRewardHistory = async (params: QueryListRetroRewardHistoryRequest): Promise<QueryListRetroRewardHistoryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/season/v1/retro_reward_history/${params.season}`;
    return await this.req.get<QueryListRetroRewardHistoryResponse>(endpoint, options);
  };
}