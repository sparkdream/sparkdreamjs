//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetInvitationRequest, QueryGetInvitationResponse, QueryAllInvitationRequest, QueryAllInvitationResponse, QueryGetProjectRequest, QueryGetProjectResponse, QueryAllProjectRequest, QueryAllProjectResponse, QueryGetInitiativeRequest, QueryGetInitiativeResponse, QueryAllInitiativeRequest, QueryAllInitiativeResponse, QueryGetStakeRequest, QueryGetStakeResponse, QueryAllStakeRequest, QueryAllStakeResponse, QueryGetChallengeRequest, QueryGetChallengeResponse, QueryAllChallengeRequest, QueryAllChallengeResponse, QueryGetJuryReviewRequest, QueryGetJuryReviewResponse, QueryAllJuryReviewRequest, QueryAllJuryReviewResponse, QueryGetInterimRequest, QueryGetInterimResponse, QueryAllInterimRequest, QueryAllInterimResponse, QueryGetInterimTemplateRequest, QueryGetInterimTemplateResponse, QueryAllInterimTemplateRequest, QueryAllInterimTemplateResponse, QueryMembersByTrustLevelRequest, QueryMembersByTrustLevelResponse, QueryInvitationsByInviterRequest, QueryInvitationsByInviterResponse, QueryInterimsByAssigneeRequest, QueryInterimsByAssigneeResponse, QueryInterimsByTypeRequest, QueryInterimsByTypeResponse, QueryInterimsByReferenceRequest, QueryInterimsByReferenceResponse, QueryProjectsByCouncilRequest, QueryProjectsByCouncilResponse, QueryInitiativesByProjectRequest, QueryInitiativesByProjectResponse, QueryInitiativesByAssigneeRequest, QueryInitiativesByAssigneeResponse, QueryAvailableInitiativesRequest, QueryAvailableInitiativesResponse, QueryStakesByStakerRequest, QueryStakesByStakerResponse, QueryStakesByTargetRequest, QueryStakesByTargetResponse, QueryInitiativeConvictionRequest, QueryInitiativeConvictionResponse, QueryChallengesByInitiativeRequest, QueryChallengesByInitiativeResponse, QueryReputationRequest, QueryReputationResponse, QueryPendingStakeRewardsRequest, QueryPendingStakeRewardsResponse, QueryGetMemberStakePoolRequest, QueryGetMemberStakePoolResponse, QueryGetTagStakePoolRequest, QueryGetTagStakePoolResponse, QueryListTagStakePoolsRequest, QueryListTagStakePoolsResponse, QueryGetProjectStakeInfoRequest, QueryGetProjectStakeInfoResponse, QueryContentConvictionRequest, QueryContentConvictionResponse, QueryAuthorBondRequest, QueryAuthorBondResponse, QueryGetContentChallengeRequest, QueryGetContentChallengeResponse, QueryAllContentChallengeRequest, QueryAllContentChallengeResponse, QueryContentChallengesByTargetRequest, QueryContentChallengesByTargetResponse, QueryContentByInitiativeRequest, QueryContentByInitiativeResponse, QueryDreamSupplyStatsRequest, QueryDreamSupplyStatsResponse, QueryMintBurnRatioRequest, QueryMintBurnRatioResponse, QueryEffectiveApyRequest, QueryEffectiveApyResponse, QueryTreasuryStatusRequest, QueryTreasuryStatusResponse, QueryGetTagRequest, QueryGetTagResponse, QueryAllTagRequest, QueryAllTagResponse, QueryGetReservedTagRequest, QueryGetReservedTagResponse, QueryAllReservedTagRequest, QueryAllReservedTagResponse, QueryTagExistsRequest, QueryTagExistsResponse, QueryGetTagReportRequest, QueryGetTagReportResponse, QueryAllTagReportRequest, QueryAllTagReportResponse, QueryTagReportsRequest, QueryTagReportsResponse, QueryGetTagBudgetRequest, QueryGetTagBudgetResponse, QueryAllTagBudgetRequest, QueryAllTagBudgetResponse, QueryGetTagBudgetAwardRequest, QueryGetTagBudgetAwardResponse, QueryAllTagBudgetAwardRequest, QueryAllTagBudgetAwardResponse, QueryTagBudgetByTagRequest, QueryTagBudgetByTagResponse, QueryTagBudgetsRequest, QueryTagBudgetsResponse, QueryTagBudgetAwardsRequest, QueryTagBudgetAwardsResponse, QueryBondedRoleRequest, QueryBondedRoleResponse, QueryBondedRolesByTypeRequest, QueryBondedRolesByTypeResponse, QueryBondedRoleConfigRequest, QueryBondedRoleConfigResponse, QueryGetMemberReportRequest, QueryGetMemberReportResponse, QueryAllMemberReportRequest, QueryAllMemberReportResponse, QueryGetMemberWarningRequest, QueryGetMemberWarningResponse, QueryAllMemberWarningRequest, QueryAllMemberWarningResponse, QueryGetGovActionAppealRequest, QueryGetGovActionAppealResponse, QueryAllGovActionAppealRequest, QueryAllGovActionAppealResponse, QueryGetJuryParticipationRequest, QueryGetJuryParticipationResponse, QueryAllJuryParticipationRequest, QueryAllJuryParticipationResponse, QueryMemberReportsRequest, QueryMemberReportsResponse, QueryMemberWarningsRequest, QueryMemberWarningsResponse, QueryMemberStandingRequest, QueryMemberStandingResponse, QueryRequiredInvitationStakeRequest, QueryRequiredInvitationStakeResponse, QueryAuthorBondsByTypeRequest, QueryAuthorBondsByTypeResponse } from "./query";
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
    const endpoint = `sparkdream/rep/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ListMember Queries a list of Member items. */
  getMember = async (params: QueryGetMemberRequest): Promise<QueryGetMemberResponse> => {
    const endpoint = `sparkdream/rep/v1/member/${params.address}`;
    return await this.req.get<QueryGetMemberResponse>(endpoint);
  };
  /* ListMember defines the ListMember RPC. */
  listMember = async (params: QueryAllMemberRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/member`;
    return await this.req.get<QueryAllMemberResponse>(endpoint, options);
  };
  /* ListInvitation Queries a list of Invitation items. */
  getInvitation = async (params: QueryGetInvitationRequest): Promise<QueryGetInvitationResponse> => {
    const endpoint = `sparkdream/rep/v1/invitation/${params.id}`;
    return await this.req.get<QueryGetInvitationResponse>(endpoint);
  };
  /* ListInvitation defines the ListInvitation RPC. */
  listInvitation = async (params: QueryAllInvitationRequest = {
    pagination: undefined
  }): Promise<QueryAllInvitationResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/invitation`;
    return await this.req.get<QueryAllInvitationResponse>(endpoint, options);
  };
  /* ListProject Queries a list of Project items. */
  getProject = async (params: QueryGetProjectRequest): Promise<QueryGetProjectResponse> => {
    const endpoint = `sparkdream/rep/v1/project/${params.id}`;
    return await this.req.get<QueryGetProjectResponse>(endpoint);
  };
  /* ListProject defines the ListProject RPC. */
  listProject = async (params: QueryAllProjectRequest): Promise<QueryAllProjectResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.sortBy !== "undefined") {
      options.params.sort_by = params.sortBy;
    }
    const endpoint = `sparkdream/rep/v1/project`;
    return await this.req.get<QueryAllProjectResponse>(endpoint, options);
  };
  /* ListInitiative Queries a list of Initiative items. */
  getInitiative = async (params: QueryGetInitiativeRequest): Promise<QueryGetInitiativeResponse> => {
    const endpoint = `sparkdream/rep/v1/initiative/${params.id}`;
    return await this.req.get<QueryGetInitiativeResponse>(endpoint);
  };
  /* ListInitiative defines the ListInitiative RPC. */
  listInitiative = async (params: QueryAllInitiativeRequest): Promise<QueryAllInitiativeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.sortBy !== "undefined") {
      options.params.sort_by = params.sortBy;
    }
    const endpoint = `sparkdream/rep/v1/initiative`;
    return await this.req.get<QueryAllInitiativeResponse>(endpoint, options);
  };
  /* ListStake Queries a list of Stake items. */
  getStake = async (params: QueryGetStakeRequest): Promise<QueryGetStakeResponse> => {
    const endpoint = `sparkdream/rep/v1/stake/${params.id}`;
    return await this.req.get<QueryGetStakeResponse>(endpoint);
  };
  /* ListStake defines the ListStake RPC. */
  listStake = async (params: QueryAllStakeRequest = {
    pagination: undefined
  }): Promise<QueryAllStakeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/stake`;
    return await this.req.get<QueryAllStakeResponse>(endpoint, options);
  };
  /* ListChallenge Queries a list of Challenge items. */
  getChallenge = async (params: QueryGetChallengeRequest): Promise<QueryGetChallengeResponse> => {
    const endpoint = `sparkdream/rep/v1/challenge/${params.id}`;
    return await this.req.get<QueryGetChallengeResponse>(endpoint);
  };
  /* ListChallenge defines the ListChallenge RPC. */
  listChallenge = async (params: QueryAllChallengeRequest = {
    pagination: undefined
  }): Promise<QueryAllChallengeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/challenge`;
    return await this.req.get<QueryAllChallengeResponse>(endpoint, options);
  };
  /* ListJuryReview Queries a list of JuryReview items. */
  getJuryReview = async (params: QueryGetJuryReviewRequest): Promise<QueryGetJuryReviewResponse> => {
    const endpoint = `sparkdream/rep/v1/jury_review/${params.id}`;
    return await this.req.get<QueryGetJuryReviewResponse>(endpoint);
  };
  /* ListJuryReview defines the ListJuryReview RPC. */
  listJuryReview = async (params: QueryAllJuryReviewRequest = {
    pagination: undefined
  }): Promise<QueryAllJuryReviewResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/jury_review`;
    return await this.req.get<QueryAllJuryReviewResponse>(endpoint, options);
  };
  /* ListInterim Queries a list of Interim items. */
  getInterim = async (params: QueryGetInterimRequest): Promise<QueryGetInterimResponse> => {
    const endpoint = `sparkdream/rep/v1/interim/${params.id}`;
    return await this.req.get<QueryGetInterimResponse>(endpoint);
  };
  /* ListInterim defines the ListInterim RPC. */
  listInterim = async (params: QueryAllInterimRequest = {
    pagination: undefined
  }): Promise<QueryAllInterimResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/interim`;
    return await this.req.get<QueryAllInterimResponse>(endpoint, options);
  };
  /* ListInterimTemplate Queries a list of InterimTemplate items. */
  getInterimTemplate = async (params: QueryGetInterimTemplateRequest): Promise<QueryGetInterimTemplateResponse> => {
    const endpoint = `sparkdream/rep/v1/interim_template/${params.templateId}`;
    return await this.req.get<QueryGetInterimTemplateResponse>(endpoint);
  };
  /* ListInterimTemplate defines the ListInterimTemplate RPC. */
  listInterimTemplate = async (params: QueryAllInterimTemplateRequest = {
    pagination: undefined
  }): Promise<QueryAllInterimTemplateResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/interim_template`;
    return await this.req.get<QueryAllInterimTemplateResponse>(endpoint, options);
  };
  /* MembersByTrustLevel Queries a list of MembersByTrustLevel items. */
  membersByTrustLevel = async (params: QueryMembersByTrustLevelRequest): Promise<QueryMembersByTrustLevelResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/members_by_trust_level/${params.trustLevel}`;
    return await this.req.get<QueryMembersByTrustLevelResponse>(endpoint, options);
  };
  /* InvitationsByInviter Queries a list of InvitationsByInviter items. */
  invitationsByInviter = async (params: QueryInvitationsByInviterRequest): Promise<QueryInvitationsByInviterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/invitations_by_inviter/${params.inviter}`;
    return await this.req.get<QueryInvitationsByInviterResponse>(endpoint, options);
  };
  /* InterimsByAssignee Queries a list of InterimsByAssignee items. */
  interimsByAssignee = async (params: QueryInterimsByAssigneeRequest): Promise<QueryInterimsByAssigneeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/interims_by_assignee/${params.assignee}`;
    return await this.req.get<QueryInterimsByAssigneeResponse>(endpoint, options);
  };
  /* InterimsByType Queries a list of InterimsByType items. */
  interimsByType = async (params: QueryInterimsByTypeRequest): Promise<QueryInterimsByTypeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/interims_by_type/${params.interimType}`;
    return await this.req.get<QueryInterimsByTypeResponse>(endpoint, options);
  };
  /* InterimsByReference Queries a list of InterimsByReference items. */
  interimsByReference = async (params: QueryInterimsByReferenceRequest): Promise<QueryInterimsByReferenceResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/interims_by_reference/${params.referenceType}/${params.referenceId}`;
    return await this.req.get<QueryInterimsByReferenceResponse>(endpoint, options);
  };
  /* ProjectsByCouncil Queries a list of ProjectsByCouncil items. */
  projectsByCouncil = async (params: QueryProjectsByCouncilRequest): Promise<QueryProjectsByCouncilResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.sortBy !== "undefined") {
      options.params.sort_by = params.sortBy;
    }
    const endpoint = `sparkdream/rep/v1/projects_by_council/${params.council}`;
    return await this.req.get<QueryProjectsByCouncilResponse>(endpoint, options);
  };
  /* InitiativesByProject Queries a list of InitiativesByProject items. */
  initiativesByProject = async (params: QueryInitiativesByProjectRequest): Promise<QueryInitiativesByProjectResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.sortBy !== "undefined") {
      options.params.sort_by = params.sortBy;
    }
    const endpoint = `sparkdream/rep/v1/initiatives_by_project/${params.projectId}`;
    return await this.req.get<QueryInitiativesByProjectResponse>(endpoint, options);
  };
  /* InitiativesByAssignee Queries a list of InitiativesByAssignee items. */
  initiativesByAssignee = async (params: QueryInitiativesByAssigneeRequest): Promise<QueryInitiativesByAssigneeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.sortBy !== "undefined") {
      options.params.sort_by = params.sortBy;
    }
    const endpoint = `sparkdream/rep/v1/initiatives_by_assignee/${params.assignee}`;
    return await this.req.get<QueryInitiativesByAssigneeResponse>(endpoint, options);
  };
  /* AvailableInitiatives Queries a list of AvailableInitiatives items. */
  availableInitiatives = async (params: QueryAvailableInitiativesRequest): Promise<QueryAvailableInitiativesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.sortBy !== "undefined") {
      options.params.sort_by = params.sortBy;
    }
    const endpoint = `sparkdream/rep/v1/available_initiatives`;
    return await this.req.get<QueryAvailableInitiativesResponse>(endpoint, options);
  };
  /* StakesByStaker Queries a list of StakesByStaker items. */
  stakesByStaker = async (params: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/stakes_by_staker/${params.staker}`;
    return await this.req.get<QueryStakesByStakerResponse>(endpoint, options);
  };
  /* StakesByTarget Queries a list of StakesByTarget items. */
  stakesByTarget = async (params: QueryStakesByTargetRequest): Promise<QueryStakesByTargetResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/stakes_by_target/${params.targetType}/${params.targetId}`;
    return await this.req.get<QueryStakesByTargetResponse>(endpoint, options);
  };
  /* InitiativeConviction Queries a list of InitiativeConviction items. */
  initiativeConviction = async (params: QueryInitiativeConvictionRequest): Promise<QueryInitiativeConvictionResponse> => {
    const endpoint = `sparkdream/rep/v1/initiative_conviction/${params.initiativeId}`;
    return await this.req.get<QueryInitiativeConvictionResponse>(endpoint);
  };
  /* ChallengesByInitiative Queries a list of ChallengesByInitiative items. */
  challengesByInitiative = async (params: QueryChallengesByInitiativeRequest): Promise<QueryChallengesByInitiativeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/challenges_by_initiative/${params.initiativeId}`;
    return await this.req.get<QueryChallengesByInitiativeResponse>(endpoint, options);
  };
  /* Reputation Queries a list of Reputation items. */
  reputation = async (params: QueryReputationRequest): Promise<QueryReputationResponse> => {
    const endpoint = `sparkdream/rep/v1/reputation/${params.address}/${params.tag}`;
    return await this.req.get<QueryReputationResponse>(endpoint);
  };
  /* PendingStakeRewards queries pending rewards for a stake */
  pendingStakeRewards = async (params: QueryPendingStakeRewardsRequest): Promise<QueryPendingStakeRewardsResponse> => {
    const endpoint = `sparkdream/rep/v1/stake/${params.stakeId}/pending_rewards`;
    return await this.req.get<QueryPendingStakeRewardsResponse>(endpoint);
  };
  /* GetMemberStakePool queries a member's stake pool info */
  getMemberStakePool = async (params: QueryGetMemberStakePoolRequest): Promise<QueryGetMemberStakePoolResponse> => {
    const endpoint = `sparkdream/rep/v1/member_stake_pool/${params.member}`;
    return await this.req.get<QueryGetMemberStakePoolResponse>(endpoint);
  };
  /* GetTagStakePool queries a tag's stake pool info */
  getTagStakePool = async (params: QueryGetTagStakePoolRequest): Promise<QueryGetTagStakePoolResponse> => {
    const endpoint = `sparkdream/rep/v1/tag_stake_pool/${params.tag}`;
    return await this.req.get<QueryGetTagStakePoolResponse>(endpoint);
  };
  /* ListTagStakePools queries all tag stake pools with pagination. */
  listTagStakePools = async (params: QueryListTagStakePoolsRequest = {
    pagination: undefined
  }): Promise<QueryListTagStakePoolsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_stake_pool`;
    return await this.req.get<QueryListTagStakePoolsResponse>(endpoint, options);
  };
  /* GetProjectStakeInfo queries a project's stake info */
  getProjectStakeInfo = async (params: QueryGetProjectStakeInfoRequest): Promise<QueryGetProjectStakeInfoResponse> => {
    const endpoint = `sparkdream/rep/v1/project_stake_info/${params.projectId}`;
    return await this.req.get<QueryGetProjectStakeInfoResponse>(endpoint);
  };
  /* ContentConviction queries the total conviction score for a content item */
  contentConviction = async (params: QueryContentConvictionRequest): Promise<QueryContentConvictionResponse> => {
    const endpoint = `sparkdream/rep/v1/content_conviction/${params.targetType}/${params.targetId}`;
    return await this.req.get<QueryContentConvictionResponse>(endpoint);
  };
  /* AuthorBond queries the author bond for a content item */
  authorBond = async (params: QueryAuthorBondRequest): Promise<QueryAuthorBondResponse> => {
    const endpoint = `sparkdream/rep/v1/author_bond/${params.targetType}/${params.targetId}`;
    return await this.req.get<QueryAuthorBondResponse>(endpoint);
  };
  /* GetContentChallenge queries a content challenge by ID */
  getContentChallenge = async (params: QueryGetContentChallengeRequest): Promise<QueryGetContentChallengeResponse> => {
    const endpoint = `sparkdream/rep/v1/content_challenge/${params.id}`;
    return await this.req.get<QueryGetContentChallengeResponse>(endpoint);
  };
  /* ListContentChallenge queries all content challenges with pagination */
  listContentChallenge = async (params: QueryAllContentChallengeRequest = {
    pagination: undefined
  }): Promise<QueryAllContentChallengeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/content_challenge`;
    return await this.req.get<QueryAllContentChallengeResponse>(endpoint, options);
  };
  /* ContentChallengesByTarget queries content challenges by target type and ID */
  contentChallengesByTarget = async (params: QueryContentChallengesByTargetRequest): Promise<QueryContentChallengesByTargetResponse> => {
    const endpoint = `sparkdream/rep/v1/content_challenges_by_target/${params.targetType}/${params.targetId}`;
    return await this.req.get<QueryContentChallengesByTargetResponse>(endpoint);
  };
  /* ContentByInitiative queries content items linked to an initiative for conviction propagation */
  contentByInitiative = async (params: QueryContentByInitiativeRequest): Promise<QueryContentByInitiativeResponse> => {
    const endpoint = `sparkdream/rep/v1/content_by_initiative/${params.initiativeId}`;
    return await this.req.get<QueryContentByInitiativeResponse>(endpoint);
  };
  /* DreamSupplyStats queries aggregate DREAM supply statistics */
  dreamSupplyStats = async (_params: QueryDreamSupplyStatsRequest = {}): Promise<QueryDreamSupplyStatsResponse> => {
    const endpoint = `sparkdream/rep/v1/dream_supply_stats`;
    return await this.req.get<QueryDreamSupplyStatsResponse>(endpoint);
  };
  /* MintBurnRatio queries the current season's mint/burn ratio */
  mintBurnRatio = async (_params: QueryMintBurnRatioRequest = {}): Promise<QueryMintBurnRatioResponse> => {
    const endpoint = `sparkdream/rep/v1/mint_burn_ratio`;
    return await this.req.get<QueryMintBurnRatioResponse>(endpoint);
  };
  /* EffectiveApy queries the effective staking APY from the seasonal pool */
  effectiveApy = async (_params: QueryEffectiveApyRequest = {}): Promise<QueryEffectiveApyResponse> => {
    const endpoint = `sparkdream/rep/v1/effective_apy`;
    return await this.req.get<QueryEffectiveApyResponse>(endpoint);
  };
  /* TreasuryStatus queries the treasury balance and flows */
  treasuryStatus = async (_params: QueryTreasuryStatusRequest = {}): Promise<QueryTreasuryStatusResponse> => {
    const endpoint = `sparkdream/rep/v1/treasury_status`;
    return await this.req.get<QueryTreasuryStatusResponse>(endpoint);
  };
  /* GetTag queries a specific tag by name. */
  getTag = async (params: QueryGetTagRequest): Promise<QueryGetTagResponse> => {
    const endpoint = `sparkdream/rep/v1/tag/${params.name}`;
    return await this.req.get<QueryGetTagResponse>(endpoint);
  };
  /* ListTag queries all tags with pagination. */
  listTag = async (params: QueryAllTagRequest = {
    pagination: undefined
  }): Promise<QueryAllTagResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag`;
    return await this.req.get<QueryAllTagResponse>(endpoint, options);
  };
  /* GetReservedTag queries a specific reserved tag by name. */
  getReservedTag = async (params: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse> => {
    const endpoint = `sparkdream/rep/v1/reserved_tag/${params.name}`;
    return await this.req.get<QueryGetReservedTagResponse>(endpoint);
  };
  /* ListReservedTag queries all reserved tags with pagination. */
  listReservedTag = async (params: QueryAllReservedTagRequest = {
    pagination: undefined
  }): Promise<QueryAllReservedTagResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/reserved_tag`;
    return await this.req.get<QueryAllReservedTagResponse>(endpoint, options);
  };
  /* TagExists checks whether a tag exists and returns its expiration time. */
  tagExists = async (params: QueryTagExistsRequest): Promise<QueryTagExistsResponse> => {
    const endpoint = `sparkdream/rep/v1/tag_exists/${params.tagName}`;
    return await this.req.get<QueryTagExistsResponse>(endpoint);
  };
  /* GetTagReport queries a single tag report by tag name. */
  getTagReport = async (params: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse> => {
    const endpoint = `sparkdream/rep/v1/tag_report/${params.tagName}`;
    return await this.req.get<QueryGetTagReportResponse>(endpoint);
  };
  /* ListTagReport queries all tag reports with pagination. */
  listTagReport = async (params: QueryAllTagReportRequest = {
    pagination: undefined
  }): Promise<QueryAllTagReportResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_report`;
    return await this.req.get<QueryAllTagReportResponse>(endpoint, options);
  };
  /* TagReports returns the first tag report (summary query). */
  tagReports = async (params: QueryTagReportsRequest = {
    pagination: undefined
  }): Promise<QueryTagReportsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_reports`;
    return await this.req.get<QueryTagReportsResponse>(endpoint, options);
  };
  /* GetTagBudget Queries a TagBudget by id. */
  getTagBudget = async (params: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse> => {
    const endpoint = `sparkdream/rep/v1/tag_budget/${params.id}`;
    return await this.req.get<QueryGetTagBudgetResponse>(endpoint);
  };
  /* ListTagBudget defines the ListTagBudget RPC. */
  listTagBudget = async (params: QueryAllTagBudgetRequest = {
    pagination: undefined
  }): Promise<QueryAllTagBudgetResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_budget`;
    return await this.req.get<QueryAllTagBudgetResponse>(endpoint, options);
  };
  /* GetTagBudgetAward Queries a TagBudgetAward by id. */
  getTagBudgetAward = async (params: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse> => {
    const endpoint = `sparkdream/rep/v1/tag_budget_award/${params.id}`;
    return await this.req.get<QueryGetTagBudgetAwardResponse>(endpoint);
  };
  /* ListTagBudgetAward defines the ListTagBudgetAward RPC. */
  listTagBudgetAward = async (params: QueryAllTagBudgetAwardRequest = {
    pagination: undefined
  }): Promise<QueryAllTagBudgetAwardResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_budget_award`;
    return await this.req.get<QueryAllTagBudgetAwardResponse>(endpoint, options);
  };
  /* TagBudgetByTag Queries a TagBudget by tag name. */
  tagBudgetByTag = async (params: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse> => {
    const endpoint = `sparkdream/rep/v1/tag_budget_by_tag/${params.tag}`;
    return await this.req.get<QueryTagBudgetByTagResponse>(endpoint);
  };
  /* TagBudgets returns the first tag budget (summary query). */
  tagBudgets = async (params: QueryTagBudgetsRequest = {
    pagination: undefined
  }): Promise<QueryTagBudgetsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_budgets`;
    return await this.req.get<QueryTagBudgetsResponse>(endpoint, options);
  };
  /* TagBudgetAwards returns the first award for a budget (summary query). */
  tagBudgetAwards = async (params: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/tag_budget_awards/${params.budgetId}`;
    return await this.req.get<QueryTagBudgetAwardsResponse>(endpoint, options);
  };
  /* BondedRole queries a single BondedRole record by (role_type, address). */
  bondedRole = async (params: QueryBondedRoleRequest): Promise<QueryBondedRoleResponse> => {
    const endpoint = `sparkdream/rep/v1/bonded_role/${params.roleType}/${params.address}`;
    return await this.req.get<QueryBondedRoleResponse>(endpoint);
  };
  /* BondedRolesByType lists all BondedRole records for a given role_type. */
  bondedRolesByType = async (params: QueryBondedRolesByTypeRequest): Promise<QueryBondedRolesByTypeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/bonded_roles_by_type/${params.roleType}`;
    return await this.req.get<QueryBondedRolesByTypeResponse>(endpoint, options);
  };
  /* BondedRoleConfig queries the per-role policy config seeded at genesis and
   kept in sync by the owning module's operational-params handler. */
  bondedRoleConfig = async (params: QueryBondedRoleConfigRequest): Promise<QueryBondedRoleConfigResponse> => {
    const endpoint = `sparkdream/rep/v1/bonded_role_config/${params.roleType}`;
    return await this.req.get<QueryBondedRoleConfigResponse>(endpoint);
  };
  /* ListMemberReport Queries a list of MemberReport items. */
  getMemberReport = async (params: QueryGetMemberReportRequest): Promise<QueryGetMemberReportResponse> => {
    const endpoint = `sparkdream/rep/v1/member_report/${params.member}`;
    return await this.req.get<QueryGetMemberReportResponse>(endpoint);
  };
  /* ListMemberReport defines the ListMemberReport RPC. */
  listMemberReport = async (params: QueryAllMemberReportRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberReportResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/member_report`;
    return await this.req.get<QueryAllMemberReportResponse>(endpoint, options);
  };
  /* ListMemberWarning Queries a list of MemberWarning items. */
  getMemberWarning = async (params: QueryGetMemberWarningRequest): Promise<QueryGetMemberWarningResponse> => {
    const endpoint = `sparkdream/rep/v1/member_warning/${params.id}`;
    return await this.req.get<QueryGetMemberWarningResponse>(endpoint);
  };
  /* ListMemberWarning defines the ListMemberWarning RPC. */
  listMemberWarning = async (params: QueryAllMemberWarningRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberWarningResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/member_warning`;
    return await this.req.get<QueryAllMemberWarningResponse>(endpoint, options);
  };
  /* ListGovActionAppeal Queries a list of GovActionAppeal items. */
  getGovActionAppeal = async (params: QueryGetGovActionAppealRequest): Promise<QueryGetGovActionAppealResponse> => {
    const endpoint = `sparkdream/rep/v1/gov_action_appeal/${params.id}`;
    return await this.req.get<QueryGetGovActionAppealResponse>(endpoint);
  };
  /* ListGovActionAppeal defines the ListGovActionAppeal RPC. */
  listGovActionAppeal = async (params: QueryAllGovActionAppealRequest = {
    pagination: undefined
  }): Promise<QueryAllGovActionAppealResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/gov_action_appeal`;
    return await this.req.get<QueryAllGovActionAppealResponse>(endpoint, options);
  };
  /* ListJuryParticipation Queries a list of JuryParticipation items. */
  getJuryParticipation = async (params: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse> => {
    const endpoint = `sparkdream/rep/v1/jury_participation/${params.juror}`;
    return await this.req.get<QueryGetJuryParticipationResponse>(endpoint);
  };
  /* ListJuryParticipation defines the ListJuryParticipation RPC. */
  listJuryParticipation = async (params: QueryAllJuryParticipationRequest = {
    pagination: undefined
  }): Promise<QueryAllJuryParticipationResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/jury_participation`;
    return await this.req.get<QueryAllJuryParticipationResponse>(endpoint, options);
  };
  /* MemberReports Queries the first member report (summary). */
  memberReports = async (params: QueryMemberReportsRequest = {
    pagination: undefined
  }): Promise<QueryMemberReportsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/member_reports`;
    return await this.req.get<QueryMemberReportsResponse>(endpoint, options);
  };
  /* MemberWarnings Queries the first warning for a member (summary). */
  memberWarnings = async (params: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/member_warnings/${params.member}`;
    return await this.req.get<QueryMemberWarningsResponse>(endpoint, options);
  };
  /* MemberStanding Queries a member's current standing (warnings, active reports, trust tier). */
  memberStanding = async (params: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse> => {
    const endpoint = `sparkdream/rep/v1/member_standing/${params.member}`;
    return await this.req.get<QueryMemberStandingResponse>(endpoint);
  };
  /* RequiredInvitationStake Queries a list of RequiredInvitationStake items. */
  requiredInvitationStake = async (params: QueryRequiredInvitationStakeRequest): Promise<QueryRequiredInvitationStakeResponse> => {
    const endpoint = `sparkdream/rep/v1/required_invitation_stake/${params.inviter}`;
    return await this.req.get<QueryRequiredInvitationStakeResponse>(endpoint);
  };
  /* AuthorBondsByType Queries a list of AuthorBondsByType items. */
  authorBondsByType = async (params: QueryAuthorBondsByTypeRequest): Promise<QueryAuthorBondsByTypeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/rep/v1/author_bonds_by_type/${params.targetType}`;
    return await this.req.get<QueryAuthorBondsByTypeResponse>(endpoint, options);
  };
}