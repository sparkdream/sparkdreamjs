//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPostRequest, QueryGetPostResponse, QueryAllPostRequest, QueryAllPostResponse, QueryGetCategoryRequest, QueryGetCategoryResponse, QueryAllCategoryRequest, QueryAllCategoryResponse, QueryGetTagRequest, QueryGetTagResponse, QueryAllTagRequest, QueryAllTagResponse, QueryGetReservedTagRequest, QueryGetReservedTagResponse, QueryAllReservedTagRequest, QueryAllReservedTagResponse, QueryGetUserRateLimitRequest, QueryGetUserRateLimitResponse, QueryAllUserRateLimitRequest, QueryAllUserRateLimitResponse, QueryGetUserReactionLimitRequest, QueryGetUserReactionLimitResponse, QueryAllUserReactionLimitRequest, QueryAllUserReactionLimitResponse, QueryGetSentinelActivityRequest, QueryGetSentinelActivityResponse, QueryAllSentinelActivityRequest, QueryAllSentinelActivityResponse, QueryGetHideRecordRequest, QueryGetHideRecordResponse, QueryAllHideRecordRequest, QueryAllHideRecordResponse, QueryGetThreadLockRecordRequest, QueryGetThreadLockRecordResponse, QueryAllThreadLockRecordRequest, QueryAllThreadLockRecordResponse, QueryGetThreadMoveRecordRequest, QueryGetThreadMoveRecordResponse, QueryAllThreadMoveRecordRequest, QueryAllThreadMoveRecordResponse, QueryGetPostFlagRequest, QueryGetPostFlagResponse, QueryAllPostFlagRequest, QueryAllPostFlagResponse, QueryGetBountyRequest, QueryGetBountyResponse, QueryAllBountyRequest, QueryAllBountyResponse, QueryGetTagBudgetRequest, QueryGetTagBudgetResponse, QueryAllTagBudgetRequest, QueryAllTagBudgetResponse, QueryGetTagBudgetAwardRequest, QueryGetTagBudgetAwardResponse, QueryAllTagBudgetAwardRequest, QueryAllTagBudgetAwardResponse, QueryGetThreadMetadataRequest, QueryGetThreadMetadataResponse, QueryAllThreadMetadataRequest, QueryAllThreadMetadataResponse, QueryGetThreadFollowRequest, QueryGetThreadFollowResponse, QueryAllThreadFollowRequest, QueryAllThreadFollowResponse, QueryGetThreadFollowCountRequest, QueryGetThreadFollowCountResponse, QueryAllThreadFollowCountRequest, QueryAllThreadFollowCountResponse, QueryGetArchiveMetadataRequest, QueryGetArchiveMetadataResponse, QueryAllArchiveMetadataRequest, QueryAllArchiveMetadataResponse, QueryGetTagReportRequest, QueryGetTagReportResponse, QueryAllTagReportRequest, QueryAllTagReportResponse, QueryGetMemberSalvationStatusRequest, QueryGetMemberSalvationStatusResponse, QueryAllMemberSalvationStatusRequest, QueryAllMemberSalvationStatusResponse, QueryGetJuryParticipationRequest, QueryGetJuryParticipationResponse, QueryAllJuryParticipationRequest, QueryAllJuryParticipationResponse, QueryGetMemberReportRequest, QueryGetMemberReportResponse, QueryAllMemberReportRequest, QueryAllMemberReportResponse, QueryGetMemberWarningRequest, QueryGetMemberWarningResponse, QueryAllMemberWarningRequest, QueryAllMemberWarningResponse, QueryGetGovActionAppealRequest, QueryGetGovActionAppealResponse, QueryAllGovActionAppealRequest, QueryAllGovActionAppealResponse, QueryPostsRequest, QueryPostsResponse, QueryThreadRequest, QueryThreadResponse, QueryCategoriesRequest, QueryCategoriesResponse, QueryUserPostsRequest, QueryUserPostsResponse, QuerySentinelStatusRequest, QuerySentinelStatusResponse, QuerySentinelBondCommitmentRequest, QuerySentinelBondCommitmentResponse, QueryArchiveCooldownRequest, QueryArchiveCooldownResponse, QueryTagExistsRequest, QueryTagExistsResponse, QueryTagReportsRequest, QueryTagReportsResponse, QueryForumStatusRequest, QueryForumStatusResponse, QueryAppealCooldownRequest, QueryAppealCooldownResponse, QueryMemberReportsRequest, QueryMemberReportsResponse, QueryMemberWarningsRequest, QueryMemberWarningsResponse, QueryMemberStandingRequest, QueryMemberStandingResponse, QueryPinnedPostsRequest, QueryPinnedPostsResponse, QueryLockedThreadsRequest, QueryLockedThreadsResponse, QueryThreadLockStatusRequest, QueryThreadLockStatusResponse, QueryTopPostsRequest, QueryTopPostsResponse, QueryThreadFollowersRequest, QueryThreadFollowersResponse, QueryUserFollowedThreadsRequest, QueryUserFollowedThreadsResponse, QueryIsFollowingThreadRequest, QueryIsFollowingThreadResponse, QueryBountyByThreadRequest, QueryBountyByThreadResponse, QueryActiveBountiesRequest, QueryActiveBountiesResponse, QueryUserBountiesRequest, QueryUserBountiesResponse, QueryBountyExpiringSoonRequest, QueryBountyExpiringSoonResponse, QueryTagBudgetByTagRequest, QueryTagBudgetByTagResponse, QueryTagBudgetsRequest, QueryTagBudgetsResponse, QueryTagBudgetAwardsRequest, QueryTagBudgetAwardsResponse, QueryPostFlagsRequest, QueryPostFlagsResponse, QueryFlagReviewQueueRequest, QueryFlagReviewQueueResponse, QueryGovActionAppealsRequest, QueryGovActionAppealsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ListPost Queries a list of Post items. */
  getPost(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  /** ListPost defines the ListPost RPC. */
  listPost(request?: QueryAllPostRequest): Promise<QueryAllPostResponse>;
  /** ListCategory Queries a list of Category items. */
  getCategory(request: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse>;
  /** ListCategory defines the ListCategory RPC. */
  listCategory(request?: QueryAllCategoryRequest): Promise<QueryAllCategoryResponse>;
  /** ListTag Queries a list of Tag items. */
  getTag(request: QueryGetTagRequest): Promise<QueryGetTagResponse>;
  /** ListTag defines the ListTag RPC. */
  listTag(request?: QueryAllTagRequest): Promise<QueryAllTagResponse>;
  /** ListReservedTag Queries a list of ReservedTag items. */
  getReservedTag(request: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse>;
  /** ListReservedTag defines the ListReservedTag RPC. */
  listReservedTag(request?: QueryAllReservedTagRequest): Promise<QueryAllReservedTagResponse>;
  /** ListUserRateLimit Queries a list of UserRateLimit items. */
  getUserRateLimit(request: QueryGetUserRateLimitRequest): Promise<QueryGetUserRateLimitResponse>;
  /** ListUserRateLimit defines the ListUserRateLimit RPC. */
  listUserRateLimit(request?: QueryAllUserRateLimitRequest): Promise<QueryAllUserRateLimitResponse>;
  /** ListUserReactionLimit Queries a list of UserReactionLimit items. */
  getUserReactionLimit(request: QueryGetUserReactionLimitRequest): Promise<QueryGetUserReactionLimitResponse>;
  /** ListUserReactionLimit defines the ListUserReactionLimit RPC. */
  listUserReactionLimit(request?: QueryAllUserReactionLimitRequest): Promise<QueryAllUserReactionLimitResponse>;
  /** ListSentinelActivity Queries a list of SentinelActivity items. */
  getSentinelActivity(request: QueryGetSentinelActivityRequest): Promise<QueryGetSentinelActivityResponse>;
  /** ListSentinelActivity defines the ListSentinelActivity RPC. */
  listSentinelActivity(request?: QueryAllSentinelActivityRequest): Promise<QueryAllSentinelActivityResponse>;
  /** ListHideRecord Queries a list of HideRecord items. */
  getHideRecord(request: QueryGetHideRecordRequest): Promise<QueryGetHideRecordResponse>;
  /** ListHideRecord defines the ListHideRecord RPC. */
  listHideRecord(request?: QueryAllHideRecordRequest): Promise<QueryAllHideRecordResponse>;
  /** ListThreadLockRecord Queries a list of ThreadLockRecord items. */
  getThreadLockRecord(request: QueryGetThreadLockRecordRequest): Promise<QueryGetThreadLockRecordResponse>;
  /** ListThreadLockRecord defines the ListThreadLockRecord RPC. */
  listThreadLockRecord(request?: QueryAllThreadLockRecordRequest): Promise<QueryAllThreadLockRecordResponse>;
  /** ListThreadMoveRecord Queries a list of ThreadMoveRecord items. */
  getThreadMoveRecord(request: QueryGetThreadMoveRecordRequest): Promise<QueryGetThreadMoveRecordResponse>;
  /** ListThreadMoveRecord defines the ListThreadMoveRecord RPC. */
  listThreadMoveRecord(request?: QueryAllThreadMoveRecordRequest): Promise<QueryAllThreadMoveRecordResponse>;
  /** ListPostFlag Queries a list of PostFlag items. */
  getPostFlag(request: QueryGetPostFlagRequest): Promise<QueryGetPostFlagResponse>;
  /** ListPostFlag defines the ListPostFlag RPC. */
  listPostFlag(request?: QueryAllPostFlagRequest): Promise<QueryAllPostFlagResponse>;
  /** ListBounty Queries a list of Bounty items. */
  getBounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse>;
  /** ListBounty defines the ListBounty RPC. */
  listBounty(request?: QueryAllBountyRequest): Promise<QueryAllBountyResponse>;
  /** ListTagBudget Queries a list of TagBudget items. */
  getTagBudget(request: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse>;
  /** ListTagBudget defines the ListTagBudget RPC. */
  listTagBudget(request?: QueryAllTagBudgetRequest): Promise<QueryAllTagBudgetResponse>;
  /** ListTagBudgetAward Queries a list of TagBudgetAward items. */
  getTagBudgetAward(request: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse>;
  /** ListTagBudgetAward defines the ListTagBudgetAward RPC. */
  listTagBudgetAward(request?: QueryAllTagBudgetAwardRequest): Promise<QueryAllTagBudgetAwardResponse>;
  /** ListThreadMetadata Queries a list of ThreadMetadata items. */
  getThreadMetadata(request: QueryGetThreadMetadataRequest): Promise<QueryGetThreadMetadataResponse>;
  /** ListThreadMetadata defines the ListThreadMetadata RPC. */
  listThreadMetadata(request?: QueryAllThreadMetadataRequest): Promise<QueryAllThreadMetadataResponse>;
  /** ListThreadFollow Queries a list of ThreadFollow items. */
  getThreadFollow(request: QueryGetThreadFollowRequest): Promise<QueryGetThreadFollowResponse>;
  /** ListThreadFollow defines the ListThreadFollow RPC. */
  listThreadFollow(request?: QueryAllThreadFollowRequest): Promise<QueryAllThreadFollowResponse>;
  /** ListThreadFollowCount Queries a list of ThreadFollowCount items. */
  getThreadFollowCount(request: QueryGetThreadFollowCountRequest): Promise<QueryGetThreadFollowCountResponse>;
  /** ListThreadFollowCount defines the ListThreadFollowCount RPC. */
  listThreadFollowCount(request?: QueryAllThreadFollowCountRequest): Promise<QueryAllThreadFollowCountResponse>;
  /** ListArchiveMetadata Queries a list of ArchiveMetadata items. */
  getArchiveMetadata(request: QueryGetArchiveMetadataRequest): Promise<QueryGetArchiveMetadataResponse>;
  /** ListArchiveMetadata defines the ListArchiveMetadata RPC. */
  listArchiveMetadata(request?: QueryAllArchiveMetadataRequest): Promise<QueryAllArchiveMetadataResponse>;
  /** ListTagReport Queries a list of TagReport items. */
  getTagReport(request: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse>;
  /** ListTagReport defines the ListTagReport RPC. */
  listTagReport(request?: QueryAllTagReportRequest): Promise<QueryAllTagReportResponse>;
  /** ListMemberSalvationStatus Queries a list of MemberSalvationStatus items. */
  getMemberSalvationStatus(request: QueryGetMemberSalvationStatusRequest): Promise<QueryGetMemberSalvationStatusResponse>;
  /** ListMemberSalvationStatus defines the ListMemberSalvationStatus RPC. */
  listMemberSalvationStatus(request?: QueryAllMemberSalvationStatusRequest): Promise<QueryAllMemberSalvationStatusResponse>;
  /** ListJuryParticipation Queries a list of JuryParticipation items. */
  getJuryParticipation(request: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse>;
  /** ListJuryParticipation defines the ListJuryParticipation RPC. */
  listJuryParticipation(request?: QueryAllJuryParticipationRequest): Promise<QueryAllJuryParticipationResponse>;
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
  /** Posts Queries a list of Posts items. */
  posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
  /** Thread Queries a list of Thread items. */
  thread(request: QueryThreadRequest): Promise<QueryThreadResponse>;
  /** Categories Queries a list of Categories items. */
  categories(request?: QueryCategoriesRequest): Promise<QueryCategoriesResponse>;
  /** UserPosts Queries a list of UserPosts items. */
  userPosts(request: QueryUserPostsRequest): Promise<QueryUserPostsResponse>;
  /** SentinelStatus Queries a list of SentinelStatus items. */
  sentinelStatus(request: QuerySentinelStatusRequest): Promise<QuerySentinelStatusResponse>;
  /** SentinelBondCommitment Queries a list of SentinelBondCommitment items. */
  sentinelBondCommitment(request: QuerySentinelBondCommitmentRequest): Promise<QuerySentinelBondCommitmentResponse>;
  /** ArchiveCooldown Queries a list of ArchiveCooldown items. */
  archiveCooldown(request: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse>;
  /** TagExists Queries a list of TagExists items. */
  tagExists(request: QueryTagExistsRequest): Promise<QueryTagExistsResponse>;
  /** TagReports Queries a list of TagReports items. */
  tagReports(request?: QueryTagReportsRequest): Promise<QueryTagReportsResponse>;
  /** ForumStatus Queries a list of ForumStatus items. */
  forumStatus(request?: QueryForumStatusRequest): Promise<QueryForumStatusResponse>;
  /** AppealCooldown Queries a list of AppealCooldown items. */
  appealCooldown(request: QueryAppealCooldownRequest): Promise<QueryAppealCooldownResponse>;
  /** MemberReports Queries a list of MemberReports items. */
  memberReports(request?: QueryMemberReportsRequest): Promise<QueryMemberReportsResponse>;
  /** MemberWarnings Queries a list of MemberWarnings items. */
  memberWarnings(request: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse>;
  /** MemberStanding Queries a list of MemberStanding items. */
  memberStanding(request: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse>;
  /** PinnedPosts Queries a list of PinnedPosts items. */
  pinnedPosts(request: QueryPinnedPostsRequest): Promise<QueryPinnedPostsResponse>;
  /** LockedThreads Queries a list of LockedThreads items. */
  lockedThreads(request?: QueryLockedThreadsRequest): Promise<QueryLockedThreadsResponse>;
  /** ThreadLockStatus Queries a list of ThreadLockStatus items. */
  threadLockStatus(request: QueryThreadLockStatusRequest): Promise<QueryThreadLockStatusResponse>;
  /** TopPosts Queries a list of TopPosts items. */
  topPosts(request: QueryTopPostsRequest): Promise<QueryTopPostsResponse>;
  /** ThreadFollowers Queries a list of ThreadFollowers items. */
  threadFollowers(request: QueryThreadFollowersRequest): Promise<QueryThreadFollowersResponse>;
  /** UserFollowedThreads Queries a list of UserFollowedThreads items. */
  userFollowedThreads(request: QueryUserFollowedThreadsRequest): Promise<QueryUserFollowedThreadsResponse>;
  /** IsFollowingThread Queries a list of IsFollowingThread items. */
  isFollowingThread(request: QueryIsFollowingThreadRequest): Promise<QueryIsFollowingThreadResponse>;
  /** BountyByThread Queries a list of BountyByThread items. */
  bountyByThread(request: QueryBountyByThreadRequest): Promise<QueryBountyByThreadResponse>;
  /** ActiveBounties Queries a list of ActiveBounties items. */
  activeBounties(request?: QueryActiveBountiesRequest): Promise<QueryActiveBountiesResponse>;
  /** UserBounties Queries a list of UserBounties items. */
  userBounties(request: QueryUserBountiesRequest): Promise<QueryUserBountiesResponse>;
  /** BountyExpiringSoon Queries a list of BountyExpiringSoon items. */
  bountyExpiringSoon(request: QueryBountyExpiringSoonRequest): Promise<QueryBountyExpiringSoonResponse>;
  /** TagBudgetByTag Queries a list of TagBudgetByTag items. */
  tagBudgetByTag(request: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse>;
  /** TagBudgets Queries a list of TagBudgets items. */
  tagBudgets(request?: QueryTagBudgetsRequest): Promise<QueryTagBudgetsResponse>;
  /** TagBudgetAwards Queries a list of TagBudgetAwards items. */
  tagBudgetAwards(request: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse>;
  /** PostFlags Queries a list of PostFlags items. */
  postFlags(request: QueryPostFlagsRequest): Promise<QueryPostFlagsResponse>;
  /** FlagReviewQueue Queries a list of FlagReviewQueue items. */
  flagReviewQueue(request?: QueryFlagReviewQueueRequest): Promise<QueryFlagReviewQueueResponse>;
  /** GovActionAppeals Queries a list of GovActionAppeals items. */
  govActionAppeals(request?: QueryGovActionAppealsRequest): Promise<QueryGovActionAppealsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ListPost Queries a list of Post items. */
  getPost = async (request: QueryGetPostRequest): Promise<QueryGetPostResponse> => {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetPost", data);
    return promise.then(data => QueryGetPostResponse.decode(new BinaryReader(data)));
  };
  /* ListPost defines the ListPost RPC. */
  listPost = async (request: QueryAllPostRequest = {
    pagination: undefined
  }): Promise<QueryAllPostResponse> => {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListPost", data);
    return promise.then(data => QueryAllPostResponse.decode(new BinaryReader(data)));
  };
  /* ListCategory Queries a list of Category items. */
  getCategory = async (request: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse> => {
    const data = QueryGetCategoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetCategory", data);
    return promise.then(data => QueryGetCategoryResponse.decode(new BinaryReader(data)));
  };
  /* ListCategory defines the ListCategory RPC. */
  listCategory = async (request: QueryAllCategoryRequest = {
    pagination: undefined
  }): Promise<QueryAllCategoryResponse> => {
    const data = QueryAllCategoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListCategory", data);
    return promise.then(data => QueryAllCategoryResponse.decode(new BinaryReader(data)));
  };
  /* ListTag Queries a list of Tag items. */
  getTag = async (request: QueryGetTagRequest): Promise<QueryGetTagResponse> => {
    const data = QueryGetTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetTag", data);
    return promise.then(data => QueryGetTagResponse.decode(new BinaryReader(data)));
  };
  /* ListTag defines the ListTag RPC. */
  listTag = async (request: QueryAllTagRequest = {
    pagination: undefined
  }): Promise<QueryAllTagResponse> => {
    const data = QueryAllTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListTag", data);
    return promise.then(data => QueryAllTagResponse.decode(new BinaryReader(data)));
  };
  /* ListReservedTag Queries a list of ReservedTag items. */
  getReservedTag = async (request: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse> => {
    const data = QueryGetReservedTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetReservedTag", data);
    return promise.then(data => QueryGetReservedTagResponse.decode(new BinaryReader(data)));
  };
  /* ListReservedTag defines the ListReservedTag RPC. */
  listReservedTag = async (request: QueryAllReservedTagRequest = {
    pagination: undefined
  }): Promise<QueryAllReservedTagResponse> => {
    const data = QueryAllReservedTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListReservedTag", data);
    return promise.then(data => QueryAllReservedTagResponse.decode(new BinaryReader(data)));
  };
  /* ListUserRateLimit Queries a list of UserRateLimit items. */
  getUserRateLimit = async (request: QueryGetUserRateLimitRequest): Promise<QueryGetUserRateLimitResponse> => {
    const data = QueryGetUserRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetUserRateLimit", data);
    return promise.then(data => QueryGetUserRateLimitResponse.decode(new BinaryReader(data)));
  };
  /* ListUserRateLimit defines the ListUserRateLimit RPC. */
  listUserRateLimit = async (request: QueryAllUserRateLimitRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRateLimitResponse> => {
    const data = QueryAllUserRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListUserRateLimit", data);
    return promise.then(data => QueryAllUserRateLimitResponse.decode(new BinaryReader(data)));
  };
  /* ListUserReactionLimit Queries a list of UserReactionLimit items. */
  getUserReactionLimit = async (request: QueryGetUserReactionLimitRequest): Promise<QueryGetUserReactionLimitResponse> => {
    const data = QueryGetUserReactionLimitRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetUserReactionLimit", data);
    return promise.then(data => QueryGetUserReactionLimitResponse.decode(new BinaryReader(data)));
  };
  /* ListUserReactionLimit defines the ListUserReactionLimit RPC. */
  listUserReactionLimit = async (request: QueryAllUserReactionLimitRequest = {
    pagination: undefined
  }): Promise<QueryAllUserReactionLimitResponse> => {
    const data = QueryAllUserReactionLimitRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListUserReactionLimit", data);
    return promise.then(data => QueryAllUserReactionLimitResponse.decode(new BinaryReader(data)));
  };
  /* ListSentinelActivity Queries a list of SentinelActivity items. */
  getSentinelActivity = async (request: QueryGetSentinelActivityRequest): Promise<QueryGetSentinelActivityResponse> => {
    const data = QueryGetSentinelActivityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetSentinelActivity", data);
    return promise.then(data => QueryGetSentinelActivityResponse.decode(new BinaryReader(data)));
  };
  /* ListSentinelActivity defines the ListSentinelActivity RPC. */
  listSentinelActivity = async (request: QueryAllSentinelActivityRequest = {
    pagination: undefined
  }): Promise<QueryAllSentinelActivityResponse> => {
    const data = QueryAllSentinelActivityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListSentinelActivity", data);
    return promise.then(data => QueryAllSentinelActivityResponse.decode(new BinaryReader(data)));
  };
  /* ListHideRecord Queries a list of HideRecord items. */
  getHideRecord = async (request: QueryGetHideRecordRequest): Promise<QueryGetHideRecordResponse> => {
    const data = QueryGetHideRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetHideRecord", data);
    return promise.then(data => QueryGetHideRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListHideRecord defines the ListHideRecord RPC. */
  listHideRecord = async (request: QueryAllHideRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllHideRecordResponse> => {
    const data = QueryAllHideRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListHideRecord", data);
    return promise.then(data => QueryAllHideRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadLockRecord Queries a list of ThreadLockRecord items. */
  getThreadLockRecord = async (request: QueryGetThreadLockRecordRequest): Promise<QueryGetThreadLockRecordResponse> => {
    const data = QueryGetThreadLockRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetThreadLockRecord", data);
    return promise.then(data => QueryGetThreadLockRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadLockRecord defines the ListThreadLockRecord RPC. */
  listThreadLockRecord = async (request: QueryAllThreadLockRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadLockRecordResponse> => {
    const data = QueryAllThreadLockRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListThreadLockRecord", data);
    return promise.then(data => QueryAllThreadLockRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadMoveRecord Queries a list of ThreadMoveRecord items. */
  getThreadMoveRecord = async (request: QueryGetThreadMoveRecordRequest): Promise<QueryGetThreadMoveRecordResponse> => {
    const data = QueryGetThreadMoveRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetThreadMoveRecord", data);
    return promise.then(data => QueryGetThreadMoveRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadMoveRecord defines the ListThreadMoveRecord RPC. */
  listThreadMoveRecord = async (request: QueryAllThreadMoveRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadMoveRecordResponse> => {
    const data = QueryAllThreadMoveRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListThreadMoveRecord", data);
    return promise.then(data => QueryAllThreadMoveRecordResponse.decode(new BinaryReader(data)));
  };
  /* ListPostFlag Queries a list of PostFlag items. */
  getPostFlag = async (request: QueryGetPostFlagRequest): Promise<QueryGetPostFlagResponse> => {
    const data = QueryGetPostFlagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetPostFlag", data);
    return promise.then(data => QueryGetPostFlagResponse.decode(new BinaryReader(data)));
  };
  /* ListPostFlag defines the ListPostFlag RPC. */
  listPostFlag = async (request: QueryAllPostFlagRequest = {
    pagination: undefined
  }): Promise<QueryAllPostFlagResponse> => {
    const data = QueryAllPostFlagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListPostFlag", data);
    return promise.then(data => QueryAllPostFlagResponse.decode(new BinaryReader(data)));
  };
  /* ListBounty Queries a list of Bounty items. */
  getBounty = async (request: QueryGetBountyRequest): Promise<QueryGetBountyResponse> => {
    const data = QueryGetBountyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetBounty", data);
    return promise.then(data => QueryGetBountyResponse.decode(new BinaryReader(data)));
  };
  /* ListBounty defines the ListBounty RPC. */
  listBounty = async (request: QueryAllBountyRequest = {
    pagination: undefined
  }): Promise<QueryAllBountyResponse> => {
    const data = QueryAllBountyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListBounty", data);
    return promise.then(data => QueryAllBountyResponse.decode(new BinaryReader(data)));
  };
  /* ListTagBudget Queries a list of TagBudget items. */
  getTagBudget = async (request: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse> => {
    const data = QueryGetTagBudgetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetTagBudget", data);
    return promise.then(data => QueryGetTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* ListTagBudget defines the ListTagBudget RPC. */
  listTagBudget = async (request: QueryAllTagBudgetRequest = {
    pagination: undefined
  }): Promise<QueryAllTagBudgetResponse> => {
    const data = QueryAllTagBudgetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListTagBudget", data);
    return promise.then(data => QueryAllTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* ListTagBudgetAward Queries a list of TagBudgetAward items. */
  getTagBudgetAward = async (request: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse> => {
    const data = QueryGetTagBudgetAwardRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetTagBudgetAward", data);
    return promise.then(data => QueryGetTagBudgetAwardResponse.decode(new BinaryReader(data)));
  };
  /* ListTagBudgetAward defines the ListTagBudgetAward RPC. */
  listTagBudgetAward = async (request: QueryAllTagBudgetAwardRequest = {
    pagination: undefined
  }): Promise<QueryAllTagBudgetAwardResponse> => {
    const data = QueryAllTagBudgetAwardRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListTagBudgetAward", data);
    return promise.then(data => QueryAllTagBudgetAwardResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadMetadata Queries a list of ThreadMetadata items. */
  getThreadMetadata = async (request: QueryGetThreadMetadataRequest): Promise<QueryGetThreadMetadataResponse> => {
    const data = QueryGetThreadMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetThreadMetadata", data);
    return promise.then(data => QueryGetThreadMetadataResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadMetadata defines the ListThreadMetadata RPC. */
  listThreadMetadata = async (request: QueryAllThreadMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadMetadataResponse> => {
    const data = QueryAllThreadMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListThreadMetadata", data);
    return promise.then(data => QueryAllThreadMetadataResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadFollow Queries a list of ThreadFollow items. */
  getThreadFollow = async (request: QueryGetThreadFollowRequest): Promise<QueryGetThreadFollowResponse> => {
    const data = QueryGetThreadFollowRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetThreadFollow", data);
    return promise.then(data => QueryGetThreadFollowResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadFollow defines the ListThreadFollow RPC. */
  listThreadFollow = async (request: QueryAllThreadFollowRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadFollowResponse> => {
    const data = QueryAllThreadFollowRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListThreadFollow", data);
    return promise.then(data => QueryAllThreadFollowResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadFollowCount Queries a list of ThreadFollowCount items. */
  getThreadFollowCount = async (request: QueryGetThreadFollowCountRequest): Promise<QueryGetThreadFollowCountResponse> => {
    const data = QueryGetThreadFollowCountRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetThreadFollowCount", data);
    return promise.then(data => QueryGetThreadFollowCountResponse.decode(new BinaryReader(data)));
  };
  /* ListThreadFollowCount defines the ListThreadFollowCount RPC. */
  listThreadFollowCount = async (request: QueryAllThreadFollowCountRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadFollowCountResponse> => {
    const data = QueryAllThreadFollowCountRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListThreadFollowCount", data);
    return promise.then(data => QueryAllThreadFollowCountResponse.decode(new BinaryReader(data)));
  };
  /* ListArchiveMetadata Queries a list of ArchiveMetadata items. */
  getArchiveMetadata = async (request: QueryGetArchiveMetadataRequest): Promise<QueryGetArchiveMetadataResponse> => {
    const data = QueryGetArchiveMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetArchiveMetadata", data);
    return promise.then(data => QueryGetArchiveMetadataResponse.decode(new BinaryReader(data)));
  };
  /* ListArchiveMetadata defines the ListArchiveMetadata RPC. */
  listArchiveMetadata = async (request: QueryAllArchiveMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllArchiveMetadataResponse> => {
    const data = QueryAllArchiveMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListArchiveMetadata", data);
    return promise.then(data => QueryAllArchiveMetadataResponse.decode(new BinaryReader(data)));
  };
  /* ListTagReport Queries a list of TagReport items. */
  getTagReport = async (request: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse> => {
    const data = QueryGetTagReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetTagReport", data);
    return promise.then(data => QueryGetTagReportResponse.decode(new BinaryReader(data)));
  };
  /* ListTagReport defines the ListTagReport RPC. */
  listTagReport = async (request: QueryAllTagReportRequest = {
    pagination: undefined
  }): Promise<QueryAllTagReportResponse> => {
    const data = QueryAllTagReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListTagReport", data);
    return promise.then(data => QueryAllTagReportResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberSalvationStatus Queries a list of MemberSalvationStatus items. */
  getMemberSalvationStatus = async (request: QueryGetMemberSalvationStatusRequest): Promise<QueryGetMemberSalvationStatusResponse> => {
    const data = QueryGetMemberSalvationStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetMemberSalvationStatus", data);
    return promise.then(data => QueryGetMemberSalvationStatusResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberSalvationStatus defines the ListMemberSalvationStatus RPC. */
  listMemberSalvationStatus = async (request: QueryAllMemberSalvationStatusRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberSalvationStatusResponse> => {
    const data = QueryAllMemberSalvationStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListMemberSalvationStatus", data);
    return promise.then(data => QueryAllMemberSalvationStatusResponse.decode(new BinaryReader(data)));
  };
  /* ListJuryParticipation Queries a list of JuryParticipation items. */
  getJuryParticipation = async (request: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse> => {
    const data = QueryGetJuryParticipationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetJuryParticipation", data);
    return promise.then(data => QueryGetJuryParticipationResponse.decode(new BinaryReader(data)));
  };
  /* ListJuryParticipation defines the ListJuryParticipation RPC. */
  listJuryParticipation = async (request: QueryAllJuryParticipationRequest = {
    pagination: undefined
  }): Promise<QueryAllJuryParticipationResponse> => {
    const data = QueryAllJuryParticipationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListJuryParticipation", data);
    return promise.then(data => QueryAllJuryParticipationResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberReport Queries a list of MemberReport items. */
  getMemberReport = async (request: QueryGetMemberReportRequest): Promise<QueryGetMemberReportResponse> => {
    const data = QueryGetMemberReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetMemberReport", data);
    return promise.then(data => QueryGetMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberReport defines the ListMemberReport RPC. */
  listMemberReport = async (request: QueryAllMemberReportRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberReportResponse> => {
    const data = QueryAllMemberReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListMemberReport", data);
    return promise.then(data => QueryAllMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberWarning Queries a list of MemberWarning items. */
  getMemberWarning = async (request: QueryGetMemberWarningRequest): Promise<QueryGetMemberWarningResponse> => {
    const data = QueryGetMemberWarningRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetMemberWarning", data);
    return promise.then(data => QueryGetMemberWarningResponse.decode(new BinaryReader(data)));
  };
  /* ListMemberWarning defines the ListMemberWarning RPC. */
  listMemberWarning = async (request: QueryAllMemberWarningRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberWarningResponse> => {
    const data = QueryAllMemberWarningRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListMemberWarning", data);
    return promise.then(data => QueryAllMemberWarningResponse.decode(new BinaryReader(data)));
  };
  /* ListGovActionAppeal Queries a list of GovActionAppeal items. */
  getGovActionAppeal = async (request: QueryGetGovActionAppealRequest): Promise<QueryGetGovActionAppealResponse> => {
    const data = QueryGetGovActionAppealRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GetGovActionAppeal", data);
    return promise.then(data => QueryGetGovActionAppealResponse.decode(new BinaryReader(data)));
  };
  /* ListGovActionAppeal defines the ListGovActionAppeal RPC. */
  listGovActionAppeal = async (request: QueryAllGovActionAppealRequest = {
    pagination: undefined
  }): Promise<QueryAllGovActionAppealResponse> => {
    const data = QueryAllGovActionAppealRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ListGovActionAppeal", data);
    return promise.then(data => QueryAllGovActionAppealResponse.decode(new BinaryReader(data)));
  };
  /* Posts Queries a list of Posts items. */
  posts = async (request: QueryPostsRequest): Promise<QueryPostsResponse> => {
    const data = QueryPostsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "Posts", data);
    return promise.then(data => QueryPostsResponse.decode(new BinaryReader(data)));
  };
  /* Thread Queries a list of Thread items. */
  thread = async (request: QueryThreadRequest): Promise<QueryThreadResponse> => {
    const data = QueryThreadRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "Thread", data);
    return promise.then(data => QueryThreadResponse.decode(new BinaryReader(data)));
  };
  /* Categories Queries a list of Categories items. */
  categories = async (request: QueryCategoriesRequest = {
    pagination: undefined
  }): Promise<QueryCategoriesResponse> => {
    const data = QueryCategoriesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "Categories", data);
    return promise.then(data => QueryCategoriesResponse.decode(new BinaryReader(data)));
  };
  /* UserPosts Queries a list of UserPosts items. */
  userPosts = async (request: QueryUserPostsRequest): Promise<QueryUserPostsResponse> => {
    const data = QueryUserPostsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "UserPosts", data);
    return promise.then(data => QueryUserPostsResponse.decode(new BinaryReader(data)));
  };
  /* SentinelStatus Queries a list of SentinelStatus items. */
  sentinelStatus = async (request: QuerySentinelStatusRequest): Promise<QuerySentinelStatusResponse> => {
    const data = QuerySentinelStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "SentinelStatus", data);
    return promise.then(data => QuerySentinelStatusResponse.decode(new BinaryReader(data)));
  };
  /* SentinelBondCommitment Queries a list of SentinelBondCommitment items. */
  sentinelBondCommitment = async (request: QuerySentinelBondCommitmentRequest): Promise<QuerySentinelBondCommitmentResponse> => {
    const data = QuerySentinelBondCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "SentinelBondCommitment", data);
    return promise.then(data => QuerySentinelBondCommitmentResponse.decode(new BinaryReader(data)));
  };
  /* ArchiveCooldown Queries a list of ArchiveCooldown items. */
  archiveCooldown = async (request: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse> => {
    const data = QueryArchiveCooldownRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ArchiveCooldown", data);
    return promise.then(data => QueryArchiveCooldownResponse.decode(new BinaryReader(data)));
  };
  /* TagExists Queries a list of TagExists items. */
  tagExists = async (request: QueryTagExistsRequest): Promise<QueryTagExistsResponse> => {
    const data = QueryTagExistsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "TagExists", data);
    return promise.then(data => QueryTagExistsResponse.decode(new BinaryReader(data)));
  };
  /* TagReports Queries a list of TagReports items. */
  tagReports = async (request: QueryTagReportsRequest = {
    pagination: undefined
  }): Promise<QueryTagReportsResponse> => {
    const data = QueryTagReportsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "TagReports", data);
    return promise.then(data => QueryTagReportsResponse.decode(new BinaryReader(data)));
  };
  /* ForumStatus Queries a list of ForumStatus items. */
  forumStatus = async (request: QueryForumStatusRequest = {}): Promise<QueryForumStatusResponse> => {
    const data = QueryForumStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ForumStatus", data);
    return promise.then(data => QueryForumStatusResponse.decode(new BinaryReader(data)));
  };
  /* AppealCooldown Queries a list of AppealCooldown items. */
  appealCooldown = async (request: QueryAppealCooldownRequest): Promise<QueryAppealCooldownResponse> => {
    const data = QueryAppealCooldownRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "AppealCooldown", data);
    return promise.then(data => QueryAppealCooldownResponse.decode(new BinaryReader(data)));
  };
  /* MemberReports Queries a list of MemberReports items. */
  memberReports = async (request: QueryMemberReportsRequest = {
    pagination: undefined
  }): Promise<QueryMemberReportsResponse> => {
    const data = QueryMemberReportsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "MemberReports", data);
    return promise.then(data => QueryMemberReportsResponse.decode(new BinaryReader(data)));
  };
  /* MemberWarnings Queries a list of MemberWarnings items. */
  memberWarnings = async (request: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse> => {
    const data = QueryMemberWarningsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "MemberWarnings", data);
    return promise.then(data => QueryMemberWarningsResponse.decode(new BinaryReader(data)));
  };
  /* MemberStanding Queries a list of MemberStanding items. */
  memberStanding = async (request: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse> => {
    const data = QueryMemberStandingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "MemberStanding", data);
    return promise.then(data => QueryMemberStandingResponse.decode(new BinaryReader(data)));
  };
  /* PinnedPosts Queries a list of PinnedPosts items. */
  pinnedPosts = async (request: QueryPinnedPostsRequest): Promise<QueryPinnedPostsResponse> => {
    const data = QueryPinnedPostsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "PinnedPosts", data);
    return promise.then(data => QueryPinnedPostsResponse.decode(new BinaryReader(data)));
  };
  /* LockedThreads Queries a list of LockedThreads items. */
  lockedThreads = async (request: QueryLockedThreadsRequest = {
    pagination: undefined
  }): Promise<QueryLockedThreadsResponse> => {
    const data = QueryLockedThreadsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "LockedThreads", data);
    return promise.then(data => QueryLockedThreadsResponse.decode(new BinaryReader(data)));
  };
  /* ThreadLockStatus Queries a list of ThreadLockStatus items. */
  threadLockStatus = async (request: QueryThreadLockStatusRequest): Promise<QueryThreadLockStatusResponse> => {
    const data = QueryThreadLockStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ThreadLockStatus", data);
    return promise.then(data => QueryThreadLockStatusResponse.decode(new BinaryReader(data)));
  };
  /* TopPosts Queries a list of TopPosts items. */
  topPosts = async (request: QueryTopPostsRequest): Promise<QueryTopPostsResponse> => {
    const data = QueryTopPostsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "TopPosts", data);
    return promise.then(data => QueryTopPostsResponse.decode(new BinaryReader(data)));
  };
  /* ThreadFollowers Queries a list of ThreadFollowers items. */
  threadFollowers = async (request: QueryThreadFollowersRequest): Promise<QueryThreadFollowersResponse> => {
    const data = QueryThreadFollowersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ThreadFollowers", data);
    return promise.then(data => QueryThreadFollowersResponse.decode(new BinaryReader(data)));
  };
  /* UserFollowedThreads Queries a list of UserFollowedThreads items. */
  userFollowedThreads = async (request: QueryUserFollowedThreadsRequest): Promise<QueryUserFollowedThreadsResponse> => {
    const data = QueryUserFollowedThreadsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "UserFollowedThreads", data);
    return promise.then(data => QueryUserFollowedThreadsResponse.decode(new BinaryReader(data)));
  };
  /* IsFollowingThread Queries a list of IsFollowingThread items. */
  isFollowingThread = async (request: QueryIsFollowingThreadRequest): Promise<QueryIsFollowingThreadResponse> => {
    const data = QueryIsFollowingThreadRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "IsFollowingThread", data);
    return promise.then(data => QueryIsFollowingThreadResponse.decode(new BinaryReader(data)));
  };
  /* BountyByThread Queries a list of BountyByThread items. */
  bountyByThread = async (request: QueryBountyByThreadRequest): Promise<QueryBountyByThreadResponse> => {
    const data = QueryBountyByThreadRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "BountyByThread", data);
    return promise.then(data => QueryBountyByThreadResponse.decode(new BinaryReader(data)));
  };
  /* ActiveBounties Queries a list of ActiveBounties items. */
  activeBounties = async (request: QueryActiveBountiesRequest = {
    pagination: undefined
  }): Promise<QueryActiveBountiesResponse> => {
    const data = QueryActiveBountiesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ActiveBounties", data);
    return promise.then(data => QueryActiveBountiesResponse.decode(new BinaryReader(data)));
  };
  /* UserBounties Queries a list of UserBounties items. */
  userBounties = async (request: QueryUserBountiesRequest): Promise<QueryUserBountiesResponse> => {
    const data = QueryUserBountiesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "UserBounties", data);
    return promise.then(data => QueryUserBountiesResponse.decode(new BinaryReader(data)));
  };
  /* BountyExpiringSoon Queries a list of BountyExpiringSoon items. */
  bountyExpiringSoon = async (request: QueryBountyExpiringSoonRequest): Promise<QueryBountyExpiringSoonResponse> => {
    const data = QueryBountyExpiringSoonRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "BountyExpiringSoon", data);
    return promise.then(data => QueryBountyExpiringSoonResponse.decode(new BinaryReader(data)));
  };
  /* TagBudgetByTag Queries a list of TagBudgetByTag items. */
  tagBudgetByTag = async (request: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse> => {
    const data = QueryTagBudgetByTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "TagBudgetByTag", data);
    return promise.then(data => QueryTagBudgetByTagResponse.decode(new BinaryReader(data)));
  };
  /* TagBudgets Queries a list of TagBudgets items. */
  tagBudgets = async (request: QueryTagBudgetsRequest = {
    pagination: undefined
  }): Promise<QueryTagBudgetsResponse> => {
    const data = QueryTagBudgetsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "TagBudgets", data);
    return promise.then(data => QueryTagBudgetsResponse.decode(new BinaryReader(data)));
  };
  /* TagBudgetAwards Queries a list of TagBudgetAwards items. */
  tagBudgetAwards = async (request: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse> => {
    const data = QueryTagBudgetAwardsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "TagBudgetAwards", data);
    return promise.then(data => QueryTagBudgetAwardsResponse.decode(new BinaryReader(data)));
  };
  /* PostFlags Queries a list of PostFlags items. */
  postFlags = async (request: QueryPostFlagsRequest): Promise<QueryPostFlagsResponse> => {
    const data = QueryPostFlagsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "PostFlags", data);
    return promise.then(data => QueryPostFlagsResponse.decode(new BinaryReader(data)));
  };
  /* FlagReviewQueue Queries a list of FlagReviewQueue items. */
  flagReviewQueue = async (request: QueryFlagReviewQueueRequest = {
    pagination: undefined
  }): Promise<QueryFlagReviewQueueResponse> => {
    const data = QueryFlagReviewQueueRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "FlagReviewQueue", data);
    return promise.then(data => QueryFlagReviewQueueResponse.decode(new BinaryReader(data)));
  };
  /* GovActionAppeals Queries a list of GovActionAppeals items. */
  govActionAppeals = async (request: QueryGovActionAppealsRequest = {
    pagination: undefined
  }): Promise<QueryGovActionAppealsResponse> => {
    const data = QueryGovActionAppealsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "GovActionAppeals", data);
    return promise.then(data => QueryGovActionAppealsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getPost(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
      return queryService.getPost(request);
    },
    listPost(request?: QueryAllPostRequest): Promise<QueryAllPostResponse> {
      return queryService.listPost(request);
    },
    getCategory(request: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse> {
      return queryService.getCategory(request);
    },
    listCategory(request?: QueryAllCategoryRequest): Promise<QueryAllCategoryResponse> {
      return queryService.listCategory(request);
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
    getUserRateLimit(request: QueryGetUserRateLimitRequest): Promise<QueryGetUserRateLimitResponse> {
      return queryService.getUserRateLimit(request);
    },
    listUserRateLimit(request?: QueryAllUserRateLimitRequest): Promise<QueryAllUserRateLimitResponse> {
      return queryService.listUserRateLimit(request);
    },
    getUserReactionLimit(request: QueryGetUserReactionLimitRequest): Promise<QueryGetUserReactionLimitResponse> {
      return queryService.getUserReactionLimit(request);
    },
    listUserReactionLimit(request?: QueryAllUserReactionLimitRequest): Promise<QueryAllUserReactionLimitResponse> {
      return queryService.listUserReactionLimit(request);
    },
    getSentinelActivity(request: QueryGetSentinelActivityRequest): Promise<QueryGetSentinelActivityResponse> {
      return queryService.getSentinelActivity(request);
    },
    listSentinelActivity(request?: QueryAllSentinelActivityRequest): Promise<QueryAllSentinelActivityResponse> {
      return queryService.listSentinelActivity(request);
    },
    getHideRecord(request: QueryGetHideRecordRequest): Promise<QueryGetHideRecordResponse> {
      return queryService.getHideRecord(request);
    },
    listHideRecord(request?: QueryAllHideRecordRequest): Promise<QueryAllHideRecordResponse> {
      return queryService.listHideRecord(request);
    },
    getThreadLockRecord(request: QueryGetThreadLockRecordRequest): Promise<QueryGetThreadLockRecordResponse> {
      return queryService.getThreadLockRecord(request);
    },
    listThreadLockRecord(request?: QueryAllThreadLockRecordRequest): Promise<QueryAllThreadLockRecordResponse> {
      return queryService.listThreadLockRecord(request);
    },
    getThreadMoveRecord(request: QueryGetThreadMoveRecordRequest): Promise<QueryGetThreadMoveRecordResponse> {
      return queryService.getThreadMoveRecord(request);
    },
    listThreadMoveRecord(request?: QueryAllThreadMoveRecordRequest): Promise<QueryAllThreadMoveRecordResponse> {
      return queryService.listThreadMoveRecord(request);
    },
    getPostFlag(request: QueryGetPostFlagRequest): Promise<QueryGetPostFlagResponse> {
      return queryService.getPostFlag(request);
    },
    listPostFlag(request?: QueryAllPostFlagRequest): Promise<QueryAllPostFlagResponse> {
      return queryService.listPostFlag(request);
    },
    getBounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse> {
      return queryService.getBounty(request);
    },
    listBounty(request?: QueryAllBountyRequest): Promise<QueryAllBountyResponse> {
      return queryService.listBounty(request);
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
    getThreadMetadata(request: QueryGetThreadMetadataRequest): Promise<QueryGetThreadMetadataResponse> {
      return queryService.getThreadMetadata(request);
    },
    listThreadMetadata(request?: QueryAllThreadMetadataRequest): Promise<QueryAllThreadMetadataResponse> {
      return queryService.listThreadMetadata(request);
    },
    getThreadFollow(request: QueryGetThreadFollowRequest): Promise<QueryGetThreadFollowResponse> {
      return queryService.getThreadFollow(request);
    },
    listThreadFollow(request?: QueryAllThreadFollowRequest): Promise<QueryAllThreadFollowResponse> {
      return queryService.listThreadFollow(request);
    },
    getThreadFollowCount(request: QueryGetThreadFollowCountRequest): Promise<QueryGetThreadFollowCountResponse> {
      return queryService.getThreadFollowCount(request);
    },
    listThreadFollowCount(request?: QueryAllThreadFollowCountRequest): Promise<QueryAllThreadFollowCountResponse> {
      return queryService.listThreadFollowCount(request);
    },
    getArchiveMetadata(request: QueryGetArchiveMetadataRequest): Promise<QueryGetArchiveMetadataResponse> {
      return queryService.getArchiveMetadata(request);
    },
    listArchiveMetadata(request?: QueryAllArchiveMetadataRequest): Promise<QueryAllArchiveMetadataResponse> {
      return queryService.listArchiveMetadata(request);
    },
    getTagReport(request: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse> {
      return queryService.getTagReport(request);
    },
    listTagReport(request?: QueryAllTagReportRequest): Promise<QueryAllTagReportResponse> {
      return queryService.listTagReport(request);
    },
    getMemberSalvationStatus(request: QueryGetMemberSalvationStatusRequest): Promise<QueryGetMemberSalvationStatusResponse> {
      return queryService.getMemberSalvationStatus(request);
    },
    listMemberSalvationStatus(request?: QueryAllMemberSalvationStatusRequest): Promise<QueryAllMemberSalvationStatusResponse> {
      return queryService.listMemberSalvationStatus(request);
    },
    getJuryParticipation(request: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse> {
      return queryService.getJuryParticipation(request);
    },
    listJuryParticipation(request?: QueryAllJuryParticipationRequest): Promise<QueryAllJuryParticipationResponse> {
      return queryService.listJuryParticipation(request);
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
    posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
      return queryService.posts(request);
    },
    thread(request: QueryThreadRequest): Promise<QueryThreadResponse> {
      return queryService.thread(request);
    },
    categories(request?: QueryCategoriesRequest): Promise<QueryCategoriesResponse> {
      return queryService.categories(request);
    },
    userPosts(request: QueryUserPostsRequest): Promise<QueryUserPostsResponse> {
      return queryService.userPosts(request);
    },
    sentinelStatus(request: QuerySentinelStatusRequest): Promise<QuerySentinelStatusResponse> {
      return queryService.sentinelStatus(request);
    },
    sentinelBondCommitment(request: QuerySentinelBondCommitmentRequest): Promise<QuerySentinelBondCommitmentResponse> {
      return queryService.sentinelBondCommitment(request);
    },
    archiveCooldown(request: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse> {
      return queryService.archiveCooldown(request);
    },
    tagExists(request: QueryTagExistsRequest): Promise<QueryTagExistsResponse> {
      return queryService.tagExists(request);
    },
    tagReports(request?: QueryTagReportsRequest): Promise<QueryTagReportsResponse> {
      return queryService.tagReports(request);
    },
    forumStatus(request?: QueryForumStatusRequest): Promise<QueryForumStatusResponse> {
      return queryService.forumStatus(request);
    },
    appealCooldown(request: QueryAppealCooldownRequest): Promise<QueryAppealCooldownResponse> {
      return queryService.appealCooldown(request);
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
    pinnedPosts(request: QueryPinnedPostsRequest): Promise<QueryPinnedPostsResponse> {
      return queryService.pinnedPosts(request);
    },
    lockedThreads(request?: QueryLockedThreadsRequest): Promise<QueryLockedThreadsResponse> {
      return queryService.lockedThreads(request);
    },
    threadLockStatus(request: QueryThreadLockStatusRequest): Promise<QueryThreadLockStatusResponse> {
      return queryService.threadLockStatus(request);
    },
    topPosts(request: QueryTopPostsRequest): Promise<QueryTopPostsResponse> {
      return queryService.topPosts(request);
    },
    threadFollowers(request: QueryThreadFollowersRequest): Promise<QueryThreadFollowersResponse> {
      return queryService.threadFollowers(request);
    },
    userFollowedThreads(request: QueryUserFollowedThreadsRequest): Promise<QueryUserFollowedThreadsResponse> {
      return queryService.userFollowedThreads(request);
    },
    isFollowingThread(request: QueryIsFollowingThreadRequest): Promise<QueryIsFollowingThreadResponse> {
      return queryService.isFollowingThread(request);
    },
    bountyByThread(request: QueryBountyByThreadRequest): Promise<QueryBountyByThreadResponse> {
      return queryService.bountyByThread(request);
    },
    activeBounties(request?: QueryActiveBountiesRequest): Promise<QueryActiveBountiesResponse> {
      return queryService.activeBounties(request);
    },
    userBounties(request: QueryUserBountiesRequest): Promise<QueryUserBountiesResponse> {
      return queryService.userBounties(request);
    },
    bountyExpiringSoon(request: QueryBountyExpiringSoonRequest): Promise<QueryBountyExpiringSoonResponse> {
      return queryService.bountyExpiringSoon(request);
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
    postFlags(request: QueryPostFlagsRequest): Promise<QueryPostFlagsResponse> {
      return queryService.postFlags(request);
    },
    flagReviewQueue(request?: QueryFlagReviewQueueRequest): Promise<QueryFlagReviewQueueResponse> {
      return queryService.flagReviewQueue(request);
    },
    govActionAppeals(request?: QueryGovActionAppealsRequest): Promise<QueryGovActionAppealsResponse> {
      return queryService.govActionAppeals(request);
    }
  };
};