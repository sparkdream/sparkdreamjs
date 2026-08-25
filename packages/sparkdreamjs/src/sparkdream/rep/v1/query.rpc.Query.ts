//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetInvitationRequest, QueryGetInvitationResponse, QueryAllInvitationRequest, QueryAllInvitationResponse, QueryGetProjectRequest, QueryGetProjectResponse, QueryAllProjectRequest, QueryAllProjectResponse, QueryGetInitiativeRequest, QueryGetInitiativeResponse, QueryAllInitiativeRequest, QueryAllInitiativeResponse, QueryGetStakeRequest, QueryGetStakeResponse, QueryAllStakeRequest, QueryAllStakeResponse, QueryGetChallengeRequest, QueryGetChallengeResponse, QueryAllChallengeRequest, QueryAllChallengeResponse, QueryGetJuryReviewRequest, QueryGetJuryReviewResponse, QueryAllJuryReviewRequest, QueryAllJuryReviewResponse, QueryJuryReviewsByJurorRequest, QueryJuryReviewsByJurorResponse, QueryRoleActivityRequest, QueryRoleActivityResponse, QueryGetInterimRequest, QueryGetInterimResponse, QueryAllInterimRequest, QueryAllInterimResponse, QueryMembersByTrustLevelRequest, QueryMembersByTrustLevelResponse, QueryInvitationsByInviterRequest, QueryInvitationsByInviterResponse, QueryInterimsByAssigneeRequest, QueryInterimsByAssigneeResponse, QueryInterimsByTypeRequest, QueryInterimsByTypeResponse, QueryInterimsByReferenceRequest, QueryInterimsByReferenceResponse, QueryProjectsByCouncilRequest, QueryProjectsByCouncilResponse, QueryInitiativesByProjectRequest, QueryInitiativesByProjectResponse, QueryInitiativesByAssigneeRequest, QueryInitiativesByAssigneeResponse, QueryInitiativesByCreatorRequest, QueryInitiativesByCreatorResponse, QueryProjectsByCreatorRequest, QueryProjectsByCreatorResponse, QueryAvailableInitiativesRequest, QueryAvailableInitiativesResponse, QueryStakesByStakerRequest, QueryStakesByStakerResponse, QueryStakesByTargetRequest, QueryStakesByTargetResponse, QueryInitiativeConvictionRequest, QueryInitiativeConvictionResponse, QueryChallengesByInitiativeRequest, QueryChallengesByInitiativeResponse, QueryReputationRequest, QueryReputationResponse, QueryPendingStakeRewardsRequest, QueryPendingStakeRewardsResponse, QueryGetMemberStakePoolRequest, QueryGetMemberStakePoolResponse, QueryGetTagStakePoolRequest, QueryGetTagStakePoolResponse, QueryListTagStakePoolsRequest, QueryListTagStakePoolsResponse, QueryGetProjectStakeInfoRequest, QueryGetProjectStakeInfoResponse, QueryContentConvictionRequest, QueryContentConvictionResponse, QueryAuthorBondRequest, QueryAuthorBondResponse, QueryGetContentChallengeRequest, QueryGetContentChallengeResponse, QueryAllContentChallengeRequest, QueryAllContentChallengeResponse, QueryContentChallengesByTargetRequest, QueryContentChallengesByTargetResponse, QueryContentByInitiativeRequest, QueryContentByInitiativeResponse, QueryDreamSupplyStatsRequest, QueryDreamSupplyStatsResponse, QueryMintBurnRatioRequest, QueryMintBurnRatioResponse, QueryEffectiveApyRequest, QueryEffectiveApyResponse, QueryTreasuryStatusRequest, QueryTreasuryStatusResponse, QueryGetTagRequest, QueryGetTagResponse, QueryAllTagRequest, QueryAllTagResponse, QueryGetReservedTagRequest, QueryGetReservedTagResponse, QueryAllReservedTagRequest, QueryAllReservedTagResponse, QueryTagExistsRequest, QueryTagExistsResponse, QueryGetTagReportRequest, QueryGetTagReportResponse, QueryAllTagReportRequest, QueryAllTagReportResponse, QueryTagReportsRequest, QueryTagReportsResponse, QueryGetTagBudgetRequest, QueryGetTagBudgetResponse, QueryAllTagBudgetRequest, QueryAllTagBudgetResponse, QueryGetTagBudgetAwardRequest, QueryGetTagBudgetAwardResponse, QueryAllTagBudgetAwardRequest, QueryAllTagBudgetAwardResponse, QueryTagBudgetByTagRequest, QueryTagBudgetByTagResponse, QueryTagBudgetsRequest, QueryTagBudgetsResponse, QueryTagBudgetAwardsRequest, QueryTagBudgetAwardsResponse, QueryBondedRoleRequest, QueryBondedRoleResponse, QueryBondedRolesByTypeRequest, QueryBondedRolesByTypeResponse, QueryBondedRoleConfigRequest, QueryBondedRoleConfigResponse, QueryGetMemberReportRequest, QueryGetMemberReportResponse, QueryAllMemberReportRequest, QueryAllMemberReportResponse, QueryGetMemberWarningRequest, QueryGetMemberWarningResponse, QueryAllMemberWarningRequest, QueryAllMemberWarningResponse, QueryGetGovActionAppealRequest, QueryGetGovActionAppealResponse, QueryAllGovActionAppealRequest, QueryAllGovActionAppealResponse, QueryGetJuryParticipationRequest, QueryGetJuryParticipationResponse, QueryAllJuryParticipationRequest, QueryAllJuryParticipationResponse, QueryMemberReportsRequest, QueryMemberReportsResponse, QueryMemberWarningsRequest, QueryMemberWarningsResponse, QueryMemberStandingRequest, QueryMemberStandingResponse, QueryRequiredInvitationStakeRequest, QueryRequiredInvitationStakeResponse, QueryAuthorBondsByTypeRequest, QueryAuthorBondsByTypeResponse, QueryInitiativeReviewsRequest, QueryInitiativeReviewsResponse, QueryReviewBountyRequest, QueryReviewBountyResponse, QueryEscalatedReviewsRequest, QueryEscalatedReviewsResponse, QueryRoleRewardPoolsRequest, QueryRoleRewardPoolsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ListMember Queries a list of Member items. */
  getMember(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
  /** ListMember defines the ListMember RPC. */
  listMember(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
  /** ListInvitation Queries a list of Invitation items. */
  getInvitation(request: QueryGetInvitationRequest): Promise<QueryGetInvitationResponse>;
  /** ListInvitation defines the ListInvitation RPC. */
  listInvitation(request?: QueryAllInvitationRequest): Promise<QueryAllInvitationResponse>;
  /** ListProject Queries a list of Project items. */
  getProject(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse>;
  /** ListProject defines the ListProject RPC. */
  listProject(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
  /** ListInitiative Queries a list of Initiative items. */
  getInitiative(request: QueryGetInitiativeRequest): Promise<QueryGetInitiativeResponse>;
  /** ListInitiative defines the ListInitiative RPC. */
  listInitiative(request: QueryAllInitiativeRequest): Promise<QueryAllInitiativeResponse>;
  /** ListStake Queries a list of Stake items. */
  getStake(request: QueryGetStakeRequest): Promise<QueryGetStakeResponse>;
  /** ListStake defines the ListStake RPC. */
  listStake(request?: QueryAllStakeRequest): Promise<QueryAllStakeResponse>;
  /** ListChallenge Queries a list of Challenge items. */
  getChallenge(request: QueryGetChallengeRequest): Promise<QueryGetChallengeResponse>;
  /** ListChallenge defines the ListChallenge RPC. */
  listChallenge(request?: QueryAllChallengeRequest): Promise<QueryAllChallengeResponse>;
  /** ListJuryReview Queries a list of JuryReview items. */
  getJuryReview(request: QueryGetJuryReviewRequest): Promise<QueryGetJuryReviewResponse>;
  /** ListJuryReview defines the ListJuryReview RPC. */
  listJuryReview(request?: QueryAllJuryReviewRequest): Promise<QueryAllJuryReviewResponse>;
  /**
   * JuryReviewsByJuror lists the reviews a juror has been seated on. This is
   * how a juror (or their monitoring client) discovers an outstanding summons:
   * jury duty pays but is infrequent, and there is no other way to ask "am I
   * seated" short of paging through every review ever created.
   */
  juryReviewsByJuror(request: QueryJuryReviewsByJurorRequest): Promise<QueryJuryReviewsByJurorResponse>;
  /**
   * RoleActivity returns a bonded role holder's shared accountability record —
   * per-kind action counters, verdict streaks, overturn cooldown and the
   * accuracy ring. x/forum projects the sentinel view of this; reviewers and
   * curators had no way to inspect theirs at all, which matters because the
   * record gates pay and drives demotion.
   */
  roleActivity(request: QueryRoleActivityRequest): Promise<QueryRoleActivityResponse>;
  /** ListInterim Queries a list of Interim items. */
  getInterim(request: QueryGetInterimRequest): Promise<QueryGetInterimResponse>;
  /** ListInterim defines the ListInterim RPC. */
  listInterim(request?: QueryAllInterimRequest): Promise<QueryAllInterimResponse>;
  /** MembersByTrustLevel Queries a list of MembersByTrustLevel items. */
  membersByTrustLevel(request: QueryMembersByTrustLevelRequest): Promise<QueryMembersByTrustLevelResponse>;
  /** InvitationsByInviter Queries a list of InvitationsByInviter items. */
  invitationsByInviter(request: QueryInvitationsByInviterRequest): Promise<QueryInvitationsByInviterResponse>;
  /** InterimsByAssignee Queries a list of InterimsByAssignee items. */
  interimsByAssignee(request: QueryInterimsByAssigneeRequest): Promise<QueryInterimsByAssigneeResponse>;
  /** InterimsByType Queries a list of InterimsByType items. */
  interimsByType(request: QueryInterimsByTypeRequest): Promise<QueryInterimsByTypeResponse>;
  /** InterimsByReference Queries a list of InterimsByReference items. */
  interimsByReference(request: QueryInterimsByReferenceRequest): Promise<QueryInterimsByReferenceResponse>;
  /** ProjectsByCouncil Queries a list of ProjectsByCouncil items. */
  projectsByCouncil(request: QueryProjectsByCouncilRequest): Promise<QueryProjectsByCouncilResponse>;
  /** InitiativesByProject Queries a list of InitiativesByProject items. */
  initiativesByProject(request: QueryInitiativesByProjectRequest): Promise<QueryInitiativesByProjectResponse>;
  /** InitiativesByAssignee Queries a list of InitiativesByAssignee items. */
  initiativesByAssignee(request: QueryInitiativesByAssigneeRequest): Promise<QueryInitiativesByAssigneeResponse>;
  /** InitiativesByCreator Queries a list of InitiativesByCreator items. */
  initiativesByCreator(request: QueryInitiativesByCreatorRequest): Promise<QueryInitiativesByCreatorResponse>;
  /** ProjectsByCreator Queries a list of ProjectsByCreator items. */
  projectsByCreator(request: QueryProjectsByCreatorRequest): Promise<QueryProjectsByCreatorResponse>;
  /** AvailableInitiatives Queries a list of AvailableInitiatives items. */
  availableInitiatives(request: QueryAvailableInitiativesRequest): Promise<QueryAvailableInitiativesResponse>;
  /** StakesByStaker Queries a list of StakesByStaker items. */
  stakesByStaker(request: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse>;
  /** StakesByTarget Queries a list of StakesByTarget items. */
  stakesByTarget(request: QueryStakesByTargetRequest): Promise<QueryStakesByTargetResponse>;
  /** InitiativeConviction Queries a list of InitiativeConviction items. */
  initiativeConviction(request: QueryInitiativeConvictionRequest): Promise<QueryInitiativeConvictionResponse>;
  /** ChallengesByInitiative Queries a list of ChallengesByInitiative items. */
  challengesByInitiative(request: QueryChallengesByInitiativeRequest): Promise<QueryChallengesByInitiativeResponse>;
  /** Reputation Queries a list of Reputation items. */
  reputation(request: QueryReputationRequest): Promise<QueryReputationResponse>;
  /** PendingStakeRewards queries pending rewards for a stake */
  pendingStakeRewards(request: QueryPendingStakeRewardsRequest): Promise<QueryPendingStakeRewardsResponse>;
  /** GetMemberStakePool queries a member's stake pool info */
  getMemberStakePool(request: QueryGetMemberStakePoolRequest): Promise<QueryGetMemberStakePoolResponse>;
  /** GetTagStakePool queries a tag's stake pool info */
  getTagStakePool(request: QueryGetTagStakePoolRequest): Promise<QueryGetTagStakePoolResponse>;
  /** ListTagStakePools queries all tag stake pools with pagination. */
  listTagStakePools(request?: QueryListTagStakePoolsRequest): Promise<QueryListTagStakePoolsResponse>;
  /** GetProjectStakeInfo queries a project's stake info */
  getProjectStakeInfo(request: QueryGetProjectStakeInfoRequest): Promise<QueryGetProjectStakeInfoResponse>;
  /** ContentConviction queries the total conviction score for a content item */
  contentConviction(request: QueryContentConvictionRequest): Promise<QueryContentConvictionResponse>;
  /** AuthorBond queries the author bond for a content item */
  authorBond(request: QueryAuthorBondRequest): Promise<QueryAuthorBondResponse>;
  /** GetContentChallenge queries a content challenge by ID */
  getContentChallenge(request: QueryGetContentChallengeRequest): Promise<QueryGetContentChallengeResponse>;
  /** ListContentChallenge queries all content challenges with pagination */
  listContentChallenge(request?: QueryAllContentChallengeRequest): Promise<QueryAllContentChallengeResponse>;
  /** ContentChallengesByTarget queries content challenges by target type and ID */
  contentChallengesByTarget(request: QueryContentChallengesByTargetRequest): Promise<QueryContentChallengesByTargetResponse>;
  /** ContentByInitiative queries content items linked to an initiative for conviction propagation */
  contentByInitiative(request: QueryContentByInitiativeRequest): Promise<QueryContentByInitiativeResponse>;
  /** DreamSupplyStats queries aggregate DREAM supply statistics */
  dreamSupplyStats(request?: QueryDreamSupplyStatsRequest): Promise<QueryDreamSupplyStatsResponse>;
  /** MintBurnRatio queries the current season's mint/burn ratio */
  mintBurnRatio(request?: QueryMintBurnRatioRequest): Promise<QueryMintBurnRatioResponse>;
  /** EffectiveApy queries the effective staking APY from the seasonal pool */
  effectiveApy(request?: QueryEffectiveApyRequest): Promise<QueryEffectiveApyResponse>;
  /** TreasuryStatus queries the treasury balance and flows */
  treasuryStatus(request?: QueryTreasuryStatusRequest): Promise<QueryTreasuryStatusResponse>;
  /** GetTag queries a specific tag by name. */
  getTag(request: QueryGetTagRequest): Promise<QueryGetTagResponse>;
  /** ListTag queries all tags with pagination. */
  listTag(request?: QueryAllTagRequest): Promise<QueryAllTagResponse>;
  /** GetReservedTag queries a specific reserved tag by name. */
  getReservedTag(request: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse>;
  /** ListReservedTag queries all reserved tags with pagination. */
  listReservedTag(request?: QueryAllReservedTagRequest): Promise<QueryAllReservedTagResponse>;
  /** TagExists checks whether a tag exists and returns its expiration time. */
  tagExists(request: QueryTagExistsRequest): Promise<QueryTagExistsResponse>;
  /** GetTagReport queries a single tag report by tag name. */
  getTagReport(request: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse>;
  /** ListTagReport queries all tag reports with pagination. */
  listTagReport(request?: QueryAllTagReportRequest): Promise<QueryAllTagReportResponse>;
  /** TagReports returns the first tag report (summary query). */
  tagReports(request?: QueryTagReportsRequest): Promise<QueryTagReportsResponse>;
  /** GetTagBudget Queries a TagBudget by id. */
  getTagBudget(request: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse>;
  /** ListTagBudget defines the ListTagBudget RPC. */
  listTagBudget(request?: QueryAllTagBudgetRequest): Promise<QueryAllTagBudgetResponse>;
  /** GetTagBudgetAward Queries a TagBudgetAward by id. */
  getTagBudgetAward(request: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse>;
  /** ListTagBudgetAward defines the ListTagBudgetAward RPC. */
  listTagBudgetAward(request?: QueryAllTagBudgetAwardRequest): Promise<QueryAllTagBudgetAwardResponse>;
  /** TagBudgetByTag Queries a TagBudget by tag name. */
  tagBudgetByTag(request: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse>;
  /** TagBudgets returns the first tag budget (summary query). */
  tagBudgets(request?: QueryTagBudgetsRequest): Promise<QueryTagBudgetsResponse>;
  /** TagBudgetAwards returns the first award for a budget (summary query). */
  tagBudgetAwards(request: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse>;
  /** BondedRole queries a single BondedRole record by (role_type, address). */
  bondedRole(request: QueryBondedRoleRequest): Promise<QueryBondedRoleResponse>;
  /** BondedRolesByType lists all BondedRole records for a given role_type. */
  bondedRolesByType(request: QueryBondedRolesByTypeRequest): Promise<QueryBondedRolesByTypeResponse>;
  /**
   * BondedRoleConfig queries the per-role policy config seeded at genesis and
   * kept in sync by the owning module's operational-params handler.
   */
  bondedRoleConfig(request: QueryBondedRoleConfigRequest): Promise<QueryBondedRoleConfigResponse>;
  /** ListMemberReport Queries a list of MemberReport items. */
  getMemberReport(request: QueryGetMemberReportRequest): Promise<QueryGetMemberReportResponse>;
  /** ListMemberReport defines the ListMemberReport RPC. */
  listMemberReport(request?: QueryAllMemberReportRequest): Promise<QueryAllMemberReportResponse>;
  /** ListMemberWarning Queries a list of MemberWarning items. */
  getMemberWarning(request: QueryGetMemberWarningRequest): Promise<QueryGetMemberWarningResponse>;
  /** ListMemberWarning defines the ListMemberWarning RPC. */
  listMemberWarning(request?: QueryAllMemberWarningRequest): Promise<QueryAllMemberWarningResponse>;
  /** ListGovActionAppeal Queries a list of GovActionAppeal items. */
  getGovActionAppeal(request: QueryGetGovActionAppealRequest): Promise<QueryGetGovActionAppealResponse>;
  /** ListGovActionAppeal defines the ListGovActionAppeal RPC. */
  listGovActionAppeal(request?: QueryAllGovActionAppealRequest): Promise<QueryAllGovActionAppealResponse>;
  /** ListJuryParticipation Queries a list of JuryParticipation items. */
  getJuryParticipation(request: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse>;
  /** ListJuryParticipation defines the ListJuryParticipation RPC. */
  listJuryParticipation(request?: QueryAllJuryParticipationRequest): Promise<QueryAllJuryParticipationResponse>;
  /** MemberReports Queries the first member report (summary). */
  memberReports(request?: QueryMemberReportsRequest): Promise<QueryMemberReportsResponse>;
  /** MemberWarnings Queries the first warning for a member (summary). */
  memberWarnings(request: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse>;
  /** MemberStanding Queries a member's current standing (warnings, active reports, trust tier). */
  memberStanding(request: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse>;
  /** RequiredInvitationStake Queries a list of RequiredInvitationStake items. */
  requiredInvitationStake(request: QueryRequiredInvitationStakeRequest): Promise<QueryRequiredInvitationStakeResponse>;
  /** AuthorBondsByType Queries a list of AuthorBondsByType items. */
  authorBondsByType(request: QueryAuthorBondsByTypeRequest): Promise<QueryAuthorBondsByTypeResponse>;
  /** InitiativeReviews returns the bonded reviewers' verdicts on one initiative. */
  initiativeReviews(request: QueryInitiativeReviewsRequest): Promise<QueryInitiativeReviewsResponse>;
  /**
   * ReviewBounty returns the DREAM escrowed against an initiative to attract
   * reviewers, and when each contribution becomes reclaimable.
   */
  reviewBounty(request: QueryReviewBountyRequest): Promise<QueryReviewBountyResponse>;
  /**
   * EscalatedReviews lists the review rounds awaiting an Operations Committee
   * decision.
   */
  escalatedReviews(request?: QueryEscalatedReviewsRequest): Promise<QueryEscalatedReviewsResponse>;
  /**
   * RoleRewardPools reports the funding state of every bonded-role SPARK
   * reward pool, plus how much of today's community-pool allowance x/rep has
   * already drawn. Automatic funding is otherwise invisible: the pools are
   * derived sub-addresses with no other read surface.
   */
  roleRewardPools(request?: QueryRoleRewardPoolsRequest): Promise<QueryRoleRewardPoolsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ListMember Queries a list of Member items. */
  getMember = async (request: QueryGetMemberRequest): Promise<QueryGetMemberResponse> => {
    const data = QueryGetMemberRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetMember", data);
    return promise.then(data => QueryGetMemberResponse.decode(new BinaryReader(data)));
  };
  /* ListMember defines the ListMember RPC. */
  listMember = async (request: QueryAllMemberRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberResponse> => {
    const data = QueryAllMemberRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListMember", data);
    return promise.then(data => QueryAllMemberResponse.decode(new BinaryReader(data)));
  };
  /* ListInvitation Queries a list of Invitation items. */
  getInvitation = async (request: QueryGetInvitationRequest): Promise<QueryGetInvitationResponse> => {
    const data = QueryGetInvitationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetInvitation", data);
    return promise.then(data => QueryGetInvitationResponse.decode(new BinaryReader(data)));
  };
  /* ListInvitation defines the ListInvitation RPC. */
  listInvitation = async (request: QueryAllInvitationRequest = {
    pagination: undefined
  }): Promise<QueryAllInvitationResponse> => {
    const data = QueryAllInvitationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListInvitation", data);
    return promise.then(data => QueryAllInvitationResponse.decode(new BinaryReader(data)));
  };
  /* ListProject Queries a list of Project items. */
  getProject = async (request: QueryGetProjectRequest): Promise<QueryGetProjectResponse> => {
    const data = QueryGetProjectRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetProject", data);
    return promise.then(data => QueryGetProjectResponse.decode(new BinaryReader(data)));
  };
  /* ListProject defines the ListProject RPC. */
  listProject = async (request: QueryAllProjectRequest): Promise<QueryAllProjectResponse> => {
    const data = QueryAllProjectRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListProject", data);
    return promise.then(data => QueryAllProjectResponse.decode(new BinaryReader(data)));
  };
  /* ListInitiative Queries a list of Initiative items. */
  getInitiative = async (request: QueryGetInitiativeRequest): Promise<QueryGetInitiativeResponse> => {
    const data = QueryGetInitiativeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetInitiative", data);
    return promise.then(data => QueryGetInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* ListInitiative defines the ListInitiative RPC. */
  listInitiative = async (request: QueryAllInitiativeRequest): Promise<QueryAllInitiativeResponse> => {
    const data = QueryAllInitiativeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListInitiative", data);
    return promise.then(data => QueryAllInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* ListStake Queries a list of Stake items. */
  getStake = async (request: QueryGetStakeRequest): Promise<QueryGetStakeResponse> => {
    const data = QueryGetStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetStake", data);
    return promise.then(data => QueryGetStakeResponse.decode(new BinaryReader(data)));
  };
  /* ListStake defines the ListStake RPC. */
  listStake = async (request: QueryAllStakeRequest = {
    pagination: undefined
  }): Promise<QueryAllStakeResponse> => {
    const data = QueryAllStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListStake", data);
    return promise.then(data => QueryAllStakeResponse.decode(new BinaryReader(data)));
  };
  /* ListChallenge Queries a list of Challenge items. */
  getChallenge = async (request: QueryGetChallengeRequest): Promise<QueryGetChallengeResponse> => {
    const data = QueryGetChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetChallenge", data);
    return promise.then(data => QueryGetChallengeResponse.decode(new BinaryReader(data)));
  };
  /* ListChallenge defines the ListChallenge RPC. */
  listChallenge = async (request: QueryAllChallengeRequest = {
    pagination: undefined
  }): Promise<QueryAllChallengeResponse> => {
    const data = QueryAllChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListChallenge", data);
    return promise.then(data => QueryAllChallengeResponse.decode(new BinaryReader(data)));
  };
  /* ListJuryReview Queries a list of JuryReview items. */
  getJuryReview = async (request: QueryGetJuryReviewRequest): Promise<QueryGetJuryReviewResponse> => {
    const data = QueryGetJuryReviewRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetJuryReview", data);
    return promise.then(data => QueryGetJuryReviewResponse.decode(new BinaryReader(data)));
  };
  /* ListJuryReview defines the ListJuryReview RPC. */
  listJuryReview = async (request: QueryAllJuryReviewRequest = {
    pagination: undefined
  }): Promise<QueryAllJuryReviewResponse> => {
    const data = QueryAllJuryReviewRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListJuryReview", data);
    return promise.then(data => QueryAllJuryReviewResponse.decode(new BinaryReader(data)));
  };
  /* JuryReviewsByJuror lists the reviews a juror has been seated on. This is
   how a juror (or their monitoring client) discovers an outstanding summons:
   jury duty pays but is infrequent, and there is no other way to ask "am I
   seated" short of paging through every review ever created. */
  juryReviewsByJuror = async (request: QueryJuryReviewsByJurorRequest): Promise<QueryJuryReviewsByJurorResponse> => {
    const data = QueryJuryReviewsByJurorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "JuryReviewsByJuror", data);
    return promise.then(data => QueryJuryReviewsByJurorResponse.decode(new BinaryReader(data)));
  };
  /* RoleActivity returns a bonded role holder's shared accountability record —
   per-kind action counters, verdict streaks, overturn cooldown and the
   accuracy ring. x/forum projects the sentinel view of this; reviewers and
   curators had no way to inspect theirs at all, which matters because the
   record gates pay and drives demotion. */
  roleActivity = async (request: QueryRoleActivityRequest): Promise<QueryRoleActivityResponse> => {
    const data = QueryRoleActivityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "RoleActivity", data);
    return promise.then(data => QueryRoleActivityResponse.decode(new BinaryReader(data)));
  };
  /* ListInterim Queries a list of Interim items. */
  getInterim = async (request: QueryGetInterimRequest): Promise<QueryGetInterimResponse> => {
    const data = QueryGetInterimRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetInterim", data);
    return promise.then(data => QueryGetInterimResponse.decode(new BinaryReader(data)));
  };
  /* ListInterim defines the ListInterim RPC. */
  listInterim = async (request: QueryAllInterimRequest = {
    pagination: undefined
  }): Promise<QueryAllInterimResponse> => {
    const data = QueryAllInterimRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListInterim", data);
    return promise.then(data => QueryAllInterimResponse.decode(new BinaryReader(data)));
  };
  /* MembersByTrustLevel Queries a list of MembersByTrustLevel items. */
  membersByTrustLevel = async (request: QueryMembersByTrustLevelRequest): Promise<QueryMembersByTrustLevelResponse> => {
    const data = QueryMembersByTrustLevelRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "MembersByTrustLevel", data);
    return promise.then(data => QueryMembersByTrustLevelResponse.decode(new BinaryReader(data)));
  };
  /* InvitationsByInviter Queries a list of InvitationsByInviter items. */
  invitationsByInviter = async (request: QueryInvitationsByInviterRequest): Promise<QueryInvitationsByInviterResponse> => {
    const data = QueryInvitationsByInviterRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InvitationsByInviter", data);
    return promise.then(data => QueryInvitationsByInviterResponse.decode(new BinaryReader(data)));
  };
  /* InterimsByAssignee Queries a list of InterimsByAssignee items. */
  interimsByAssignee = async (request: QueryInterimsByAssigneeRequest): Promise<QueryInterimsByAssigneeResponse> => {
    const data = QueryInterimsByAssigneeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InterimsByAssignee", data);
    return promise.then(data => QueryInterimsByAssigneeResponse.decode(new BinaryReader(data)));
  };
  /* InterimsByType Queries a list of InterimsByType items. */
  interimsByType = async (request: QueryInterimsByTypeRequest): Promise<QueryInterimsByTypeResponse> => {
    const data = QueryInterimsByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InterimsByType", data);
    return promise.then(data => QueryInterimsByTypeResponse.decode(new BinaryReader(data)));
  };
  /* InterimsByReference Queries a list of InterimsByReference items. */
  interimsByReference = async (request: QueryInterimsByReferenceRequest): Promise<QueryInterimsByReferenceResponse> => {
    const data = QueryInterimsByReferenceRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InterimsByReference", data);
    return promise.then(data => QueryInterimsByReferenceResponse.decode(new BinaryReader(data)));
  };
  /* ProjectsByCouncil Queries a list of ProjectsByCouncil items. */
  projectsByCouncil = async (request: QueryProjectsByCouncilRequest): Promise<QueryProjectsByCouncilResponse> => {
    const data = QueryProjectsByCouncilRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ProjectsByCouncil", data);
    return promise.then(data => QueryProjectsByCouncilResponse.decode(new BinaryReader(data)));
  };
  /* InitiativesByProject Queries a list of InitiativesByProject items. */
  initiativesByProject = async (request: QueryInitiativesByProjectRequest): Promise<QueryInitiativesByProjectResponse> => {
    const data = QueryInitiativesByProjectRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InitiativesByProject", data);
    return promise.then(data => QueryInitiativesByProjectResponse.decode(new BinaryReader(data)));
  };
  /* InitiativesByAssignee Queries a list of InitiativesByAssignee items. */
  initiativesByAssignee = async (request: QueryInitiativesByAssigneeRequest): Promise<QueryInitiativesByAssigneeResponse> => {
    const data = QueryInitiativesByAssigneeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InitiativesByAssignee", data);
    return promise.then(data => QueryInitiativesByAssigneeResponse.decode(new BinaryReader(data)));
  };
  /* InitiativesByCreator Queries a list of InitiativesByCreator items. */
  initiativesByCreator = async (request: QueryInitiativesByCreatorRequest): Promise<QueryInitiativesByCreatorResponse> => {
    const data = QueryInitiativesByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InitiativesByCreator", data);
    return promise.then(data => QueryInitiativesByCreatorResponse.decode(new BinaryReader(data)));
  };
  /* ProjectsByCreator Queries a list of ProjectsByCreator items. */
  projectsByCreator = async (request: QueryProjectsByCreatorRequest): Promise<QueryProjectsByCreatorResponse> => {
    const data = QueryProjectsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ProjectsByCreator", data);
    return promise.then(data => QueryProjectsByCreatorResponse.decode(new BinaryReader(data)));
  };
  /* AvailableInitiatives Queries a list of AvailableInitiatives items. */
  availableInitiatives = async (request: QueryAvailableInitiativesRequest): Promise<QueryAvailableInitiativesResponse> => {
    const data = QueryAvailableInitiativesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "AvailableInitiatives", data);
    return promise.then(data => QueryAvailableInitiativesResponse.decode(new BinaryReader(data)));
  };
  /* StakesByStaker Queries a list of StakesByStaker items. */
  stakesByStaker = async (request: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse> => {
    const data = QueryStakesByStakerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "StakesByStaker", data);
    return promise.then(data => QueryStakesByStakerResponse.decode(new BinaryReader(data)));
  };
  /* StakesByTarget Queries a list of StakesByTarget items. */
  stakesByTarget = async (request: QueryStakesByTargetRequest): Promise<QueryStakesByTargetResponse> => {
    const data = QueryStakesByTargetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "StakesByTarget", data);
    return promise.then(data => QueryStakesByTargetResponse.decode(new BinaryReader(data)));
  };
  /* InitiativeConviction Queries a list of InitiativeConviction items. */
  initiativeConviction = async (request: QueryInitiativeConvictionRequest): Promise<QueryInitiativeConvictionResponse> => {
    const data = QueryInitiativeConvictionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InitiativeConviction", data);
    return promise.then(data => QueryInitiativeConvictionResponse.decode(new BinaryReader(data)));
  };
  /* ChallengesByInitiative Queries a list of ChallengesByInitiative items. */
  challengesByInitiative = async (request: QueryChallengesByInitiativeRequest): Promise<QueryChallengesByInitiativeResponse> => {
    const data = QueryChallengesByInitiativeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ChallengesByInitiative", data);
    return promise.then(data => QueryChallengesByInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* Reputation Queries a list of Reputation items. */
  reputation = async (request: QueryReputationRequest): Promise<QueryReputationResponse> => {
    const data = QueryReputationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "Reputation", data);
    return promise.then(data => QueryReputationResponse.decode(new BinaryReader(data)));
  };
  /* PendingStakeRewards queries pending rewards for a stake */
  pendingStakeRewards = async (request: QueryPendingStakeRewardsRequest): Promise<QueryPendingStakeRewardsResponse> => {
    const data = QueryPendingStakeRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "PendingStakeRewards", data);
    return promise.then(data => QueryPendingStakeRewardsResponse.decode(new BinaryReader(data)));
  };
  /* GetMemberStakePool queries a member's stake pool info */
  getMemberStakePool = async (request: QueryGetMemberStakePoolRequest): Promise<QueryGetMemberStakePoolResponse> => {
    const data = QueryGetMemberStakePoolRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetMemberStakePool", data);
    return promise.then(data => QueryGetMemberStakePoolResponse.decode(new BinaryReader(data)));
  };
  /* GetTagStakePool queries a tag's stake pool info */
  getTagStakePool = async (request: QueryGetTagStakePoolRequest): Promise<QueryGetTagStakePoolResponse> => {
    const data = QueryGetTagStakePoolRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetTagStakePool", data);
    return promise.then(data => QueryGetTagStakePoolResponse.decode(new BinaryReader(data)));
  };
  /* ListTagStakePools queries all tag stake pools with pagination. */
  listTagStakePools = async (request: QueryListTagStakePoolsRequest = {
    pagination: undefined
  }): Promise<QueryListTagStakePoolsResponse> => {
    const data = QueryListTagStakePoolsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListTagStakePools", data);
    return promise.then(data => QueryListTagStakePoolsResponse.decode(new BinaryReader(data)));
  };
  /* GetProjectStakeInfo queries a project's stake info */
  getProjectStakeInfo = async (request: QueryGetProjectStakeInfoRequest): Promise<QueryGetProjectStakeInfoResponse> => {
    const data = QueryGetProjectStakeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetProjectStakeInfo", data);
    return promise.then(data => QueryGetProjectStakeInfoResponse.decode(new BinaryReader(data)));
  };
  /* ContentConviction queries the total conviction score for a content item */
  contentConviction = async (request: QueryContentConvictionRequest): Promise<QueryContentConvictionResponse> => {
    const data = QueryContentConvictionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ContentConviction", data);
    return promise.then(data => QueryContentConvictionResponse.decode(new BinaryReader(data)));
  };
  /* AuthorBond queries the author bond for a content item */
  authorBond = async (request: QueryAuthorBondRequest): Promise<QueryAuthorBondResponse> => {
    const data = QueryAuthorBondRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "AuthorBond", data);
    return promise.then(data => QueryAuthorBondResponse.decode(new BinaryReader(data)));
  };
  /* GetContentChallenge queries a content challenge by ID */
  getContentChallenge = async (request: QueryGetContentChallengeRequest): Promise<QueryGetContentChallengeResponse> => {
    const data = QueryGetContentChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetContentChallenge", data);
    return promise.then(data => QueryGetContentChallengeResponse.decode(new BinaryReader(data)));
  };
  /* ListContentChallenge queries all content challenges with pagination */
  listContentChallenge = async (request: QueryAllContentChallengeRequest = {
    pagination: undefined
  }): Promise<QueryAllContentChallengeResponse> => {
    const data = QueryAllContentChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListContentChallenge", data);
    return promise.then(data => QueryAllContentChallengeResponse.decode(new BinaryReader(data)));
  };
  /* ContentChallengesByTarget queries content challenges by target type and ID */
  contentChallengesByTarget = async (request: QueryContentChallengesByTargetRequest): Promise<QueryContentChallengesByTargetResponse> => {
    const data = QueryContentChallengesByTargetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ContentChallengesByTarget", data);
    return promise.then(data => QueryContentChallengesByTargetResponse.decode(new BinaryReader(data)));
  };
  /* ContentByInitiative queries content items linked to an initiative for conviction propagation */
  contentByInitiative = async (request: QueryContentByInitiativeRequest): Promise<QueryContentByInitiativeResponse> => {
    const data = QueryContentByInitiativeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ContentByInitiative", data);
    return promise.then(data => QueryContentByInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* DreamSupplyStats queries aggregate DREAM supply statistics */
  dreamSupplyStats = async (request: QueryDreamSupplyStatsRequest = {}): Promise<QueryDreamSupplyStatsResponse> => {
    const data = QueryDreamSupplyStatsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "DreamSupplyStats", data);
    return promise.then(data => QueryDreamSupplyStatsResponse.decode(new BinaryReader(data)));
  };
  /* MintBurnRatio queries the current season's mint/burn ratio */
  mintBurnRatio = async (request: QueryMintBurnRatioRequest = {}): Promise<QueryMintBurnRatioResponse> => {
    const data = QueryMintBurnRatioRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "MintBurnRatio", data);
    return promise.then(data => QueryMintBurnRatioResponse.decode(new BinaryReader(data)));
  };
  /* EffectiveApy queries the effective staking APY from the seasonal pool */
  effectiveApy = async (request: QueryEffectiveApyRequest = {}): Promise<QueryEffectiveApyResponse> => {
    const data = QueryEffectiveApyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "EffectiveApy", data);
    return promise.then(data => QueryEffectiveApyResponse.decode(new BinaryReader(data)));
  };
  /* TreasuryStatus queries the treasury balance and flows */
  treasuryStatus = async (request: QueryTreasuryStatusRequest = {}): Promise<QueryTreasuryStatusResponse> => {
    const data = QueryTreasuryStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "TreasuryStatus", data);
    return promise.then(data => QueryTreasuryStatusResponse.decode(new BinaryReader(data)));
  };
  /* GetTag queries a specific tag by name. */
  getTag = async (request: QueryGetTagRequest): Promise<QueryGetTagResponse> => {
    const data = QueryGetTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetTag", data);
    return promise.then(data => QueryGetTagResponse.decode(new BinaryReader(data)));
  };
  /* ListTag queries all tags with pagination. */
  listTag = async (request: QueryAllTagRequest = {
    pagination: undefined
  }): Promise<QueryAllTagResponse> => {
    const data = QueryAllTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListTag", data);
    return promise.then(data => QueryAllTagResponse.decode(new BinaryReader(data)));
  };
  /* GetReservedTag queries a specific reserved tag by name. */
  getReservedTag = async (request: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse> => {
    const data = QueryGetReservedTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetReservedTag", data);
    return promise.then(data => QueryGetReservedTagResponse.decode(new BinaryReader(data)));
  };
  /* ListReservedTag queries all reserved tags with pagination. */
  listReservedTag = async (request: QueryAllReservedTagRequest = {
    pagination: undefined
  }): Promise<QueryAllReservedTagResponse> => {
    const data = QueryAllReservedTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListReservedTag", data);
    return promise.then(data => QueryAllReservedTagResponse.decode(new BinaryReader(data)));
  };
  /* TagExists checks whether a tag exists and returns its expiration time. */
  tagExists = async (request: QueryTagExistsRequest): Promise<QueryTagExistsResponse> => {
    const data = QueryTagExistsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "TagExists", data);
    return promise.then(data => QueryTagExistsResponse.decode(new BinaryReader(data)));
  };
  /* GetTagReport queries a single tag report by tag name. */
  getTagReport = async (request: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse> => {
    const data = QueryGetTagReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetTagReport", data);
    return promise.then(data => QueryGetTagReportResponse.decode(new BinaryReader(data)));
  };
  /* ListTagReport queries all tag reports with pagination. */
  listTagReport = async (request: QueryAllTagReportRequest = {
    pagination: undefined
  }): Promise<QueryAllTagReportResponse> => {
    const data = QueryAllTagReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListTagReport", data);
    return promise.then(data => QueryAllTagReportResponse.decode(new BinaryReader(data)));
  };
  /* TagReports returns the first tag report (summary query). */
  tagReports = async (request: QueryTagReportsRequest = {
    pagination: undefined
  }): Promise<QueryTagReportsResponse> => {
    const data = QueryTagReportsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "TagReports", data);
    return promise.then(data => QueryTagReportsResponse.decode(new BinaryReader(data)));
  };
  /* GetTagBudget Queries a TagBudget by id. */
  getTagBudget = async (request: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse> => {
    const data = QueryGetTagBudgetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetTagBudget", data);
    return promise.then(data => QueryGetTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* ListTagBudget defines the ListTagBudget RPC. */
  listTagBudget = async (request: QueryAllTagBudgetRequest = {
    pagination: undefined
  }): Promise<QueryAllTagBudgetResponse> => {
    const data = QueryAllTagBudgetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListTagBudget", data);
    return promise.then(data => QueryAllTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* GetTagBudgetAward Queries a TagBudgetAward by id. */
  getTagBudgetAward = async (request: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse> => {
    const data = QueryGetTagBudgetAwardRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetTagBudgetAward", data);
    return promise.then(data => QueryGetTagBudgetAwardResponse.decode(new BinaryReader(data)));
  };
  /* ListTagBudgetAward defines the ListTagBudgetAward RPC. */
  listTagBudgetAward = async (request: QueryAllTagBudgetAwardRequest = {
    pagination: undefined
  }): Promise<QueryAllTagBudgetAwardResponse> => {
    const data = QueryAllTagBudgetAwardRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListTagBudgetAward", data);
    return promise.then(data => QueryAllTagBudgetAwardResponse.decode(new BinaryReader(data)));
  };
  /* TagBudgetByTag Queries a TagBudget by tag name. */
  tagBudgetByTag = async (request: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse> => {
    const data = QueryTagBudgetByTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "TagBudgetByTag", data);
    return promise.then(data => QueryTagBudgetByTagResponse.decode(new BinaryReader(data)));
  };
  /* TagBudgets returns the first tag budget (summary query). */
  tagBudgets = async (request: QueryTagBudgetsRequest = {
    pagination: undefined
  }): Promise<QueryTagBudgetsResponse> => {
    const data = QueryTagBudgetsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "TagBudgets", data);
    return promise.then(data => QueryTagBudgetsResponse.decode(new BinaryReader(data)));
  };
  /* TagBudgetAwards returns the first award for a budget (summary query). */
  tagBudgetAwards = async (request: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse> => {
    const data = QueryTagBudgetAwardsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "TagBudgetAwards", data);
    return promise.then(data => QueryTagBudgetAwardsResponse.decode(new BinaryReader(data)));
  };
  /* BondedRole queries a single BondedRole record by (role_type, address). */
  bondedRole = async (request: QueryBondedRoleRequest): Promise<QueryBondedRoleResponse> => {
    const data = QueryBondedRoleRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "BondedRole", data);
    return promise.then(data => QueryBondedRoleResponse.decode(new BinaryReader(data)));
  };
  /* BondedRolesByType lists all BondedRole records for a given role_type. */
  bondedRolesByType = async (request: QueryBondedRolesByTypeRequest): Promise<QueryBondedRolesByTypeResponse> => {
    const data = QueryBondedRolesByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "BondedRolesByType", data);
    return promise.then(data => QueryBondedRolesByTypeResponse.decode(new BinaryReader(data)));
  };
  /* BondedRoleConfig queries the per-role policy config seeded at genesis and
   kept in sync by the owning module's operational-params handler. */
  bondedRoleConfig = async (request: QueryBondedRoleConfigRequest): Promise<QueryBondedRoleConfigResponse> => {
    const data = QueryBondedRoleConfigRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "BondedRoleConfig", data);
    return promise.then(data => QueryBondedRoleConfigResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberReport Queries a list of MemberReport items. */
  getMemberReport = async (request: QueryGetMemberReportRequest): Promise<QueryGetMemberReportResponse> => {
    const data = QueryGetMemberReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetMemberReport", data);
    return promise.then(data => QueryGetMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberReport defines the ListMemberReport RPC. */
  listMemberReport = async (request: QueryAllMemberReportRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberReportResponse> => {
    const data = QueryAllMemberReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListMemberReport", data);
    return promise.then(data => QueryAllMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberWarning Queries a list of MemberWarning items. */
  getMemberWarning = async (request: QueryGetMemberWarningRequest): Promise<QueryGetMemberWarningResponse> => {
    const data = QueryGetMemberWarningRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetMemberWarning", data);
    return promise.then(data => QueryGetMemberWarningResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberWarning defines the ListMemberWarning RPC. */
  listMemberWarning = async (request: QueryAllMemberWarningRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberWarningResponse> => {
    const data = QueryAllMemberWarningRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListMemberWarning", data);
    return promise.then(data => QueryAllMemberWarningResponse.decode(new BinaryReader(data)));
  };
  /* ListGovActionAppeal Queries a list of GovActionAppeal items. */
  getGovActionAppeal = async (request: QueryGetGovActionAppealRequest): Promise<QueryGetGovActionAppealResponse> => {
    const data = QueryGetGovActionAppealRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetGovActionAppeal", data);
    return promise.then(data => QueryGetGovActionAppealResponse.decode(new BinaryReader(data)));
  };
  /* ListGovActionAppeal defines the ListGovActionAppeal RPC. */
  listGovActionAppeal = async (request: QueryAllGovActionAppealRequest = {
    pagination: undefined
  }): Promise<QueryAllGovActionAppealResponse> => {
    const data = QueryAllGovActionAppealRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListGovActionAppeal", data);
    return promise.then(data => QueryAllGovActionAppealResponse.decode(new BinaryReader(data)));
  };
  /* ListJuryParticipation Queries a list of JuryParticipation items. */
  getJuryParticipation = async (request: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse> => {
    const data = QueryGetJuryParticipationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetJuryParticipation", data);
    return promise.then(data => QueryGetJuryParticipationResponse.decode(new BinaryReader(data)));
  };
  /* ListJuryParticipation defines the ListJuryParticipation RPC. */
  listJuryParticipation = async (request: QueryAllJuryParticipationRequest = {
    pagination: undefined
  }): Promise<QueryAllJuryParticipationResponse> => {
    const data = QueryAllJuryParticipationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListJuryParticipation", data);
    return promise.then(data => QueryAllJuryParticipationResponse.decode(new BinaryReader(data)));
  };
  /* MemberReports Queries the first member report (summary). */
  memberReports = async (request: QueryMemberReportsRequest = {
    pagination: undefined
  }): Promise<QueryMemberReportsResponse> => {
    const data = QueryMemberReportsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "MemberReports", data);
    return promise.then(data => QueryMemberReportsResponse.decode(new BinaryReader(data)));
  };
  /* MemberWarnings Queries the first warning for a member (summary). */
  memberWarnings = async (request: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse> => {
    const data = QueryMemberWarningsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "MemberWarnings", data);
    return promise.then(data => QueryMemberWarningsResponse.decode(new BinaryReader(data)));
  };
  /* MemberStanding Queries a member's current standing (warnings, active reports, trust tier). */
  memberStanding = async (request: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse> => {
    const data = QueryMemberStandingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "MemberStanding", data);
    return promise.then(data => QueryMemberStandingResponse.decode(new BinaryReader(data)));
  };
  /* RequiredInvitationStake Queries a list of RequiredInvitationStake items. */
  requiredInvitationStake = async (request: QueryRequiredInvitationStakeRequest): Promise<QueryRequiredInvitationStakeResponse> => {
    const data = QueryRequiredInvitationStakeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "RequiredInvitationStake", data);
    return promise.then(data => QueryRequiredInvitationStakeResponse.decode(new BinaryReader(data)));
  };
  /* AuthorBondsByType Queries a list of AuthorBondsByType items. */
  authorBondsByType = async (request: QueryAuthorBondsByTypeRequest): Promise<QueryAuthorBondsByTypeResponse> => {
    const data = QueryAuthorBondsByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "AuthorBondsByType", data);
    return promise.then(data => QueryAuthorBondsByTypeResponse.decode(new BinaryReader(data)));
  };
  /* InitiativeReviews returns the bonded reviewers' verdicts on one initiative. */
  initiativeReviews = async (request: QueryInitiativeReviewsRequest): Promise<QueryInitiativeReviewsResponse> => {
    const data = QueryInitiativeReviewsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "InitiativeReviews", data);
    return promise.then(data => QueryInitiativeReviewsResponse.decode(new BinaryReader(data)));
  };
  /* ReviewBounty returns the DREAM escrowed against an initiative to attract
   reviewers, and when each contribution becomes reclaimable. */
  reviewBounty = async (request: QueryReviewBountyRequest): Promise<QueryReviewBountyResponse> => {
    const data = QueryReviewBountyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ReviewBounty", data);
    return promise.then(data => QueryReviewBountyResponse.decode(new BinaryReader(data)));
  };
  /* EscalatedReviews lists the review rounds awaiting an Operations Committee
   decision. */
  escalatedReviews = async (request: QueryEscalatedReviewsRequest = {}): Promise<QueryEscalatedReviewsResponse> => {
    const data = QueryEscalatedReviewsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "EscalatedReviews", data);
    return promise.then(data => QueryEscalatedReviewsResponse.decode(new BinaryReader(data)));
  };
  /* RoleRewardPools reports the funding state of every bonded-role SPARK
   reward pool, plus how much of today's community-pool allowance x/rep has
   already drawn. Automatic funding is otherwise invisible: the pools are
   derived sub-addresses with no other read surface. */
  roleRewardPools = async (request: QueryRoleRewardPoolsRequest = {}): Promise<QueryRoleRewardPoolsResponse> => {
    const data = QueryRoleRewardPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "RoleRewardPools", data);
    return promise.then(data => QueryRoleRewardPoolsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getMember(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse> {
      return queryService.getMember(request);
    },
    listMember(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse> {
      return queryService.listMember(request);
    },
    getInvitation(request: QueryGetInvitationRequest): Promise<QueryGetInvitationResponse> {
      return queryService.getInvitation(request);
    },
    listInvitation(request?: QueryAllInvitationRequest): Promise<QueryAllInvitationResponse> {
      return queryService.listInvitation(request);
    },
    getProject(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse> {
      return queryService.getProject(request);
    },
    listProject(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse> {
      return queryService.listProject(request);
    },
    getInitiative(request: QueryGetInitiativeRequest): Promise<QueryGetInitiativeResponse> {
      return queryService.getInitiative(request);
    },
    listInitiative(request: QueryAllInitiativeRequest): Promise<QueryAllInitiativeResponse> {
      return queryService.listInitiative(request);
    },
    getStake(request: QueryGetStakeRequest): Promise<QueryGetStakeResponse> {
      return queryService.getStake(request);
    },
    listStake(request?: QueryAllStakeRequest): Promise<QueryAllStakeResponse> {
      return queryService.listStake(request);
    },
    getChallenge(request: QueryGetChallengeRequest): Promise<QueryGetChallengeResponse> {
      return queryService.getChallenge(request);
    },
    listChallenge(request?: QueryAllChallengeRequest): Promise<QueryAllChallengeResponse> {
      return queryService.listChallenge(request);
    },
    getJuryReview(request: QueryGetJuryReviewRequest): Promise<QueryGetJuryReviewResponse> {
      return queryService.getJuryReview(request);
    },
    listJuryReview(request?: QueryAllJuryReviewRequest): Promise<QueryAllJuryReviewResponse> {
      return queryService.listJuryReview(request);
    },
    juryReviewsByJuror(request: QueryJuryReviewsByJurorRequest): Promise<QueryJuryReviewsByJurorResponse> {
      return queryService.juryReviewsByJuror(request);
    },
    roleActivity(request: QueryRoleActivityRequest): Promise<QueryRoleActivityResponse> {
      return queryService.roleActivity(request);
    },
    getInterim(request: QueryGetInterimRequest): Promise<QueryGetInterimResponse> {
      return queryService.getInterim(request);
    },
    listInterim(request?: QueryAllInterimRequest): Promise<QueryAllInterimResponse> {
      return queryService.listInterim(request);
    },
    membersByTrustLevel(request: QueryMembersByTrustLevelRequest): Promise<QueryMembersByTrustLevelResponse> {
      return queryService.membersByTrustLevel(request);
    },
    invitationsByInviter(request: QueryInvitationsByInviterRequest): Promise<QueryInvitationsByInviterResponse> {
      return queryService.invitationsByInviter(request);
    },
    interimsByAssignee(request: QueryInterimsByAssigneeRequest): Promise<QueryInterimsByAssigneeResponse> {
      return queryService.interimsByAssignee(request);
    },
    interimsByType(request: QueryInterimsByTypeRequest): Promise<QueryInterimsByTypeResponse> {
      return queryService.interimsByType(request);
    },
    interimsByReference(request: QueryInterimsByReferenceRequest): Promise<QueryInterimsByReferenceResponse> {
      return queryService.interimsByReference(request);
    },
    projectsByCouncil(request: QueryProjectsByCouncilRequest): Promise<QueryProjectsByCouncilResponse> {
      return queryService.projectsByCouncil(request);
    },
    initiativesByProject(request: QueryInitiativesByProjectRequest): Promise<QueryInitiativesByProjectResponse> {
      return queryService.initiativesByProject(request);
    },
    initiativesByAssignee(request: QueryInitiativesByAssigneeRequest): Promise<QueryInitiativesByAssigneeResponse> {
      return queryService.initiativesByAssignee(request);
    },
    initiativesByCreator(request: QueryInitiativesByCreatorRequest): Promise<QueryInitiativesByCreatorResponse> {
      return queryService.initiativesByCreator(request);
    },
    projectsByCreator(request: QueryProjectsByCreatorRequest): Promise<QueryProjectsByCreatorResponse> {
      return queryService.projectsByCreator(request);
    },
    availableInitiatives(request: QueryAvailableInitiativesRequest): Promise<QueryAvailableInitiativesResponse> {
      return queryService.availableInitiatives(request);
    },
    stakesByStaker(request: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse> {
      return queryService.stakesByStaker(request);
    },
    stakesByTarget(request: QueryStakesByTargetRequest): Promise<QueryStakesByTargetResponse> {
      return queryService.stakesByTarget(request);
    },
    initiativeConviction(request: QueryInitiativeConvictionRequest): Promise<QueryInitiativeConvictionResponse> {
      return queryService.initiativeConviction(request);
    },
    challengesByInitiative(request: QueryChallengesByInitiativeRequest): Promise<QueryChallengesByInitiativeResponse> {
      return queryService.challengesByInitiative(request);
    },
    reputation(request: QueryReputationRequest): Promise<QueryReputationResponse> {
      return queryService.reputation(request);
    },
    pendingStakeRewards(request: QueryPendingStakeRewardsRequest): Promise<QueryPendingStakeRewardsResponse> {
      return queryService.pendingStakeRewards(request);
    },
    getMemberStakePool(request: QueryGetMemberStakePoolRequest): Promise<QueryGetMemberStakePoolResponse> {
      return queryService.getMemberStakePool(request);
    },
    getTagStakePool(request: QueryGetTagStakePoolRequest): Promise<QueryGetTagStakePoolResponse> {
      return queryService.getTagStakePool(request);
    },
    listTagStakePools(request?: QueryListTagStakePoolsRequest): Promise<QueryListTagStakePoolsResponse> {
      return queryService.listTagStakePools(request);
    },
    getProjectStakeInfo(request: QueryGetProjectStakeInfoRequest): Promise<QueryGetProjectStakeInfoResponse> {
      return queryService.getProjectStakeInfo(request);
    },
    contentConviction(request: QueryContentConvictionRequest): Promise<QueryContentConvictionResponse> {
      return queryService.contentConviction(request);
    },
    authorBond(request: QueryAuthorBondRequest): Promise<QueryAuthorBondResponse> {
      return queryService.authorBond(request);
    },
    getContentChallenge(request: QueryGetContentChallengeRequest): Promise<QueryGetContentChallengeResponse> {
      return queryService.getContentChallenge(request);
    },
    listContentChallenge(request?: QueryAllContentChallengeRequest): Promise<QueryAllContentChallengeResponse> {
      return queryService.listContentChallenge(request);
    },
    contentChallengesByTarget(request: QueryContentChallengesByTargetRequest): Promise<QueryContentChallengesByTargetResponse> {
      return queryService.contentChallengesByTarget(request);
    },
    contentByInitiative(request: QueryContentByInitiativeRequest): Promise<QueryContentByInitiativeResponse> {
      return queryService.contentByInitiative(request);
    },
    dreamSupplyStats(request?: QueryDreamSupplyStatsRequest): Promise<QueryDreamSupplyStatsResponse> {
      return queryService.dreamSupplyStats(request);
    },
    mintBurnRatio(request?: QueryMintBurnRatioRequest): Promise<QueryMintBurnRatioResponse> {
      return queryService.mintBurnRatio(request);
    },
    effectiveApy(request?: QueryEffectiveApyRequest): Promise<QueryEffectiveApyResponse> {
      return queryService.effectiveApy(request);
    },
    treasuryStatus(request?: QueryTreasuryStatusRequest): Promise<QueryTreasuryStatusResponse> {
      return queryService.treasuryStatus(request);
    },
    getTag(request: QueryGetTagRequest): Promise<QueryGetTagResponse> {
      return queryService.getTag(request);
    },
    listTag(request?: QueryAllTagRequest): Promise<QueryAllTagResponse> {
      return queryService.listTag(request);
    },
    getReservedTag(request: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse> {
      return queryService.getReservedTag(request);
    },
    listReservedTag(request?: QueryAllReservedTagRequest): Promise<QueryAllReservedTagResponse> {
      return queryService.listReservedTag(request);
    },
    tagExists(request: QueryTagExistsRequest): Promise<QueryTagExistsResponse> {
      return queryService.tagExists(request);
    },
    getTagReport(request: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse> {
      return queryService.getTagReport(request);
    },
    listTagReport(request?: QueryAllTagReportRequest): Promise<QueryAllTagReportResponse> {
      return queryService.listTagReport(request);
    },
    tagReports(request?: QueryTagReportsRequest): Promise<QueryTagReportsResponse> {
      return queryService.tagReports(request);
    },
    getTagBudget(request: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse> {
      return queryService.getTagBudget(request);
    },
    listTagBudget(request?: QueryAllTagBudgetRequest): Promise<QueryAllTagBudgetResponse> {
      return queryService.listTagBudget(request);
    },
    getTagBudgetAward(request: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse> {
      return queryService.getTagBudgetAward(request);
    },
    listTagBudgetAward(request?: QueryAllTagBudgetAwardRequest): Promise<QueryAllTagBudgetAwardResponse> {
      return queryService.listTagBudgetAward(request);
    },
    tagBudgetByTag(request: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse> {
      return queryService.tagBudgetByTag(request);
    },
    tagBudgets(request?: QueryTagBudgetsRequest): Promise<QueryTagBudgetsResponse> {
      return queryService.tagBudgets(request);
    },
    tagBudgetAwards(request: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse> {
      return queryService.tagBudgetAwards(request);
    },
    bondedRole(request: QueryBondedRoleRequest): Promise<QueryBondedRoleResponse> {
      return queryService.bondedRole(request);
    },
    bondedRolesByType(request: QueryBondedRolesByTypeRequest): Promise<QueryBondedRolesByTypeResponse> {
      return queryService.bondedRolesByType(request);
    },
    bondedRoleConfig(request: QueryBondedRoleConfigRequest): Promise<QueryBondedRoleConfigResponse> {
      return queryService.bondedRoleConfig(request);
    },
    getMemberReport(request: QueryGetMemberReportRequest): Promise<QueryGetMemberReportResponse> {
      return queryService.getMemberReport(request);
    },
    listMemberReport(request?: QueryAllMemberReportRequest): Promise<QueryAllMemberReportResponse> {
      return queryService.listMemberReport(request);
    },
    getMemberWarning(request: QueryGetMemberWarningRequest): Promise<QueryGetMemberWarningResponse> {
      return queryService.getMemberWarning(request);
    },
    listMemberWarning(request?: QueryAllMemberWarningRequest): Promise<QueryAllMemberWarningResponse> {
      return queryService.listMemberWarning(request);
    },
    getGovActionAppeal(request: QueryGetGovActionAppealRequest): Promise<QueryGetGovActionAppealResponse> {
      return queryService.getGovActionAppeal(request);
    },
    listGovActionAppeal(request?: QueryAllGovActionAppealRequest): Promise<QueryAllGovActionAppealResponse> {
      return queryService.listGovActionAppeal(request);
    },
    getJuryParticipation(request: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse> {
      return queryService.getJuryParticipation(request);
    },
    listJuryParticipation(request?: QueryAllJuryParticipationRequest): Promise<QueryAllJuryParticipationResponse> {
      return queryService.listJuryParticipation(request);
    },
    memberReports(request?: QueryMemberReportsRequest): Promise<QueryMemberReportsResponse> {
      return queryService.memberReports(request);
    },
    memberWarnings(request: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse> {
      return queryService.memberWarnings(request);
    },
    memberStanding(request: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse> {
      return queryService.memberStanding(request);
    },
    requiredInvitationStake(request: QueryRequiredInvitationStakeRequest): Promise<QueryRequiredInvitationStakeResponse> {
      return queryService.requiredInvitationStake(request);
    },
    authorBondsByType(request: QueryAuthorBondsByTypeRequest): Promise<QueryAuthorBondsByTypeResponse> {
      return queryService.authorBondsByType(request);
    },
    initiativeReviews(request: QueryInitiativeReviewsRequest): Promise<QueryInitiativeReviewsResponse> {
      return queryService.initiativeReviews(request);
    },
    reviewBounty(request: QueryReviewBountyRequest): Promise<QueryReviewBountyResponse> {
      return queryService.reviewBounty(request);
    },
    escalatedReviews(request?: QueryEscalatedReviewsRequest): Promise<QueryEscalatedReviewsResponse> {
      return queryService.escalatedReviews(request);
    },
    roleRewardPools(request?: QueryRoleRewardPoolsRequest): Promise<QueryRoleRewardPoolsResponse> {
      return queryService.roleRewardPools(request);
    }
  };
};