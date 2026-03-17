//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetInvitationRequest, QueryGetInvitationResponse, QueryAllInvitationRequest, QueryAllInvitationResponse, QueryGetProjectRequest, QueryGetProjectResponse, QueryAllProjectRequest, QueryAllProjectResponse, QueryGetInitiativeRequest, QueryGetInitiativeResponse, QueryAllInitiativeRequest, QueryAllInitiativeResponse, QueryGetStakeRequest, QueryGetStakeResponse, QueryAllStakeRequest, QueryAllStakeResponse, QueryGetChallengeRequest, QueryGetChallengeResponse, QueryAllChallengeRequest, QueryAllChallengeResponse, QueryGetJuryReviewRequest, QueryGetJuryReviewResponse, QueryAllJuryReviewRequest, QueryAllJuryReviewResponse, QueryGetInterimRequest, QueryGetInterimResponse, QueryAllInterimRequest, QueryAllInterimResponse, QueryGetInterimTemplateRequest, QueryGetInterimTemplateResponse, QueryAllInterimTemplateRequest, QueryAllInterimTemplateResponse, QueryMembersByTrustLevelRequest, QueryMembersByTrustLevelResponse, QueryInvitationsByInviterRequest, QueryInvitationsByInviterResponse, QueryInterimsByAssigneeRequest, QueryInterimsByAssigneeResponse, QueryInterimsByTypeRequest, QueryInterimsByTypeResponse, QueryInterimsByReferenceRequest, QueryInterimsByReferenceResponse, QueryProjectsByCouncilRequest, QueryProjectsByCouncilResponse, QueryInitiativesByProjectRequest, QueryInitiativesByProjectResponse, QueryInitiativesByAssigneeRequest, QueryInitiativesByAssigneeResponse, QueryAvailableInitiativesRequest, QueryAvailableInitiativesResponse, QueryStakesByStakerRequest, QueryStakesByStakerResponse, QueryStakesByTargetRequest, QueryStakesByTargetResponse, QueryInitiativeConvictionRequest, QueryInitiativeConvictionResponse, QueryChallengesByInitiativeRequest, QueryChallengesByInitiativeResponse, QueryReputationRequest, QueryReputationResponse, QueryPendingStakeRewardsRequest, QueryPendingStakeRewardsResponse, QueryGetMemberStakePoolRequest, QueryGetMemberStakePoolResponse, QueryGetTagStakePoolRequest, QueryGetTagStakePoolResponse, QueryGetProjectStakeInfoRequest, QueryGetProjectStakeInfoResponse, QueryContentConvictionRequest, QueryContentConvictionResponse, QueryAuthorBondRequest, QueryAuthorBondResponse, QueryGetContentChallengeRequest, QueryGetContentChallengeResponse, QueryAllContentChallengeRequest, QueryAllContentChallengeResponse, QueryContentChallengesByTargetRequest, QueryContentChallengesByTargetResponse, QueryContentByInitiativeRequest, QueryContentByInitiativeResponse } from "./query";
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
  listProject = async (params: QueryAllProjectRequest = {
    pagination: undefined
  }): Promise<QueryAllProjectResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
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
  listInitiative = async (params: QueryAllInitiativeRequest = {
    pagination: undefined
  }): Promise<QueryAllInitiativeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
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
    const endpoint = `sparkdream/rep/v1/initiatives_by_assignee/${params.assignee}`;
    return await this.req.get<QueryInitiativesByAssigneeResponse>(endpoint, options);
  };
  /* AvailableInitiatives Queries a list of AvailableInitiatives items. */
  availableInitiatives = async (params: QueryAvailableInitiativesRequest = {
    pagination: undefined
  }): Promise<QueryAvailableInitiativesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
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
}