//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetInvitationRequest, QueryGetInvitationResponse, QueryAllInvitationRequest, QueryAllInvitationResponse, QueryGetProjectRequest, QueryGetProjectResponse, QueryAllProjectRequest, QueryAllProjectResponse, QueryGetInitiativeRequest, QueryGetInitiativeResponse, QueryAllInitiativeRequest, QueryAllInitiativeResponse, QueryGetStakeRequest, QueryGetStakeResponse, QueryAllStakeRequest, QueryAllStakeResponse, QueryGetChallengeRequest, QueryGetChallengeResponse, QueryAllChallengeRequest, QueryAllChallengeResponse, QueryGetJuryReviewRequest, QueryGetJuryReviewResponse, QueryAllJuryReviewRequest, QueryAllJuryReviewResponse, QueryGetInterimRequest, QueryGetInterimResponse, QueryAllInterimRequest, QueryAllInterimResponse, QueryGetInterimTemplateRequest, QueryGetInterimTemplateResponse, QueryAllInterimTemplateRequest, QueryAllInterimTemplateResponse, QueryMembersByTrustLevelRequest, QueryMembersByTrustLevelResponse, QueryInvitationsByInviterRequest, QueryInvitationsByInviterResponse, QueryInterimsByAssigneeRequest, QueryInterimsByAssigneeResponse, QueryInterimsByTypeRequest, QueryInterimsByTypeResponse, QueryInterimsByReferenceRequest, QueryInterimsByReferenceResponse, QueryProjectsByCouncilRequest, QueryProjectsByCouncilResponse, QueryInitiativesByProjectRequest, QueryInitiativesByProjectResponse, QueryInitiativesByAssigneeRequest, QueryInitiativesByAssigneeResponse, QueryAvailableInitiativesRequest, QueryAvailableInitiativesResponse, QueryStakesByStakerRequest, QueryStakesByStakerResponse, QueryStakesByTargetRequest, QueryStakesByTargetResponse, QueryInitiativeConvictionRequest, QueryInitiativeConvictionResponse, QueryChallengesByInitiativeRequest, QueryChallengesByInitiativeResponse, QueryReputationRequest, QueryReputationResponse, QueryPendingStakeRewardsRequest, QueryPendingStakeRewardsResponse, QueryGetMemberStakePoolRequest, QueryGetMemberStakePoolResponse, QueryGetTagStakePoolRequest, QueryGetTagStakePoolResponse, QueryGetProjectStakeInfoRequest, QueryGetProjectStakeInfoResponse, QueryContentConvictionRequest, QueryContentConvictionResponse, QueryAuthorBondRequest, QueryAuthorBondResponse, QueryGetContentChallengeRequest, QueryGetContentChallengeResponse, QueryAllContentChallengeRequest, QueryAllContentChallengeResponse, QueryContentChallengesByTargetRequest, QueryContentChallengesByTargetResponse, QueryContentByInitiativeRequest, QueryContentByInitiativeResponse } from "./query";
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
  listProject(request?: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
  /** ListInitiative Queries a list of Initiative items. */
  getInitiative(request: QueryGetInitiativeRequest): Promise<QueryGetInitiativeResponse>;
  /** ListInitiative defines the ListInitiative RPC. */
  listInitiative(request?: QueryAllInitiativeRequest): Promise<QueryAllInitiativeResponse>;
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
  /** ListInterim Queries a list of Interim items. */
  getInterim(request: QueryGetInterimRequest): Promise<QueryGetInterimResponse>;
  /** ListInterim defines the ListInterim RPC. */
  listInterim(request?: QueryAllInterimRequest): Promise<QueryAllInterimResponse>;
  /** ListInterimTemplate Queries a list of InterimTemplate items. */
  getInterimTemplate(request: QueryGetInterimTemplateRequest): Promise<QueryGetInterimTemplateResponse>;
  /** ListInterimTemplate defines the ListInterimTemplate RPC. */
  listInterimTemplate(request?: QueryAllInterimTemplateRequest): Promise<QueryAllInterimTemplateResponse>;
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
  /** AvailableInitiatives Queries a list of AvailableInitiatives items. */
  availableInitiatives(request?: QueryAvailableInitiativesRequest): Promise<QueryAvailableInitiativesResponse>;
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
  listProject = async (request: QueryAllProjectRequest = {
    pagination: undefined
  }): Promise<QueryAllProjectResponse> => {
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
  listInitiative = async (request: QueryAllInitiativeRequest = {
    pagination: undefined
  }): Promise<QueryAllInitiativeResponse> => {
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
  /* ListInterimTemplate Queries a list of InterimTemplate items. */
  getInterimTemplate = async (request: QueryGetInterimTemplateRequest): Promise<QueryGetInterimTemplateResponse> => {
    const data = QueryGetInterimTemplateRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "GetInterimTemplate", data);
    return promise.then(data => QueryGetInterimTemplateResponse.decode(new BinaryReader(data)));
  };
  /* ListInterimTemplate defines the ListInterimTemplate RPC. */
  listInterimTemplate = async (request: QueryAllInterimTemplateRequest = {
    pagination: undefined
  }): Promise<QueryAllInterimTemplateResponse> => {
    const data = QueryAllInterimTemplateRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Query", "ListInterimTemplate", data);
    return promise.then(data => QueryAllInterimTemplateResponse.decode(new BinaryReader(data)));
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
  /* AvailableInitiatives Queries a list of AvailableInitiatives items. */
  availableInitiatives = async (request: QueryAvailableInitiativesRequest = {
    pagination: undefined
  }): Promise<QueryAvailableInitiativesResponse> => {
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
    listProject(request?: QueryAllProjectRequest): Promise<QueryAllProjectResponse> {
      return queryService.listProject(request);
    },
    getInitiative(request: QueryGetInitiativeRequest): Promise<QueryGetInitiativeResponse> {
      return queryService.getInitiative(request);
    },
    listInitiative(request?: QueryAllInitiativeRequest): Promise<QueryAllInitiativeResponse> {
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
    getInterim(request: QueryGetInterimRequest): Promise<QueryGetInterimResponse> {
      return queryService.getInterim(request);
    },
    listInterim(request?: QueryAllInterimRequest): Promise<QueryAllInterimResponse> {
      return queryService.listInterim(request);
    },
    getInterimTemplate(request: QueryGetInterimTemplateRequest): Promise<QueryGetInterimTemplateResponse> {
      return queryService.getInterimTemplate(request);
    },
    listInterimTemplate(request?: QueryAllInterimTemplateRequest): Promise<QueryAllInterimTemplateResponse> {
      return queryService.listInterimTemplate(request);
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
    availableInitiatives(request?: QueryAvailableInitiativesRequest): Promise<QueryAvailableInitiativesResponse> {
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
    }
  };
};