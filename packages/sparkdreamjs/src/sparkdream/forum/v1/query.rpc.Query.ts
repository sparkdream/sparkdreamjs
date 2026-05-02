//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPostRequest, QueryGetPostResponse, QueryAllPostRequest, QueryAllPostResponse, QueryGetUserRateLimitRequest, QueryGetUserRateLimitResponse, QueryAllUserRateLimitRequest, QueryAllUserRateLimitResponse, QueryGetUserReactionLimitRequest, QueryGetUserReactionLimitResponse, QueryAllUserReactionLimitRequest, QueryAllUserReactionLimitResponse, QueryGetSentinelActivityRequest, QueryGetSentinelActivityResponse, QueryAllSentinelActivityRequest, QueryAllSentinelActivityResponse, QueryGetHideRecordRequest, QueryGetHideRecordResponse, QueryAllHideRecordRequest, QueryAllHideRecordResponse, QueryGetThreadLockRecordRequest, QueryGetThreadLockRecordResponse, QueryAllThreadLockRecordRequest, QueryAllThreadLockRecordResponse, QueryGetThreadMoveRecordRequest, QueryGetThreadMoveRecordResponse, QueryAllThreadMoveRecordRequest, QueryAllThreadMoveRecordResponse, QueryGetPostFlagRequest, QueryGetPostFlagResponse, QueryAllPostFlagRequest, QueryAllPostFlagResponse, QueryGetBountyRequest, QueryGetBountyResponse, QueryAllBountyRequest, QueryAllBountyResponse, QueryGetThreadMetadataRequest, QueryGetThreadMetadataResponse, QueryAllThreadMetadataRequest, QueryAllThreadMetadataResponse, QueryGetThreadFollowRequest, QueryGetThreadFollowResponse, QueryAllThreadFollowRequest, QueryAllThreadFollowResponse, QueryGetThreadFollowCountRequest, QueryGetThreadFollowCountResponse, QueryAllThreadFollowCountRequest, QueryAllThreadFollowCountResponse, QueryGetArchiveMetadataRequest, QueryGetArchiveMetadataResponse, QueryAllArchiveMetadataRequest, QueryAllArchiveMetadataResponse, QueryPostsRequest, QueryPostsResponse, QueryThreadRequest, QueryThreadResponse, QueryUserPostsRequest, QueryUserPostsResponse, QueryArchiveCooldownRequest, QueryArchiveCooldownResponse, QueryForumStatusRequest, QueryForumStatusResponse, QueryAppealCooldownRequest, QueryAppealCooldownResponse, QueryPinnedPostsRequest, QueryPinnedPostsResponse, QueryLockedThreadsRequest, QueryLockedThreadsResponse, QueryThreadLockStatusRequest, QueryThreadLockStatusResponse, QueryTopPostsRequest, QueryTopPostsResponse, QueryThreadFollowersRequest, QueryThreadFollowersResponse, QueryUserFollowedThreadsRequest, QueryUserFollowedThreadsResponse, QueryIsFollowingThreadRequest, QueryIsFollowingThreadResponse, QueryBountyByThreadRequest, QueryBountyByThreadResponse, QueryActiveBountiesRequest, QueryActiveBountiesResponse, QueryUserBountiesRequest, QueryUserBountiesResponse, QueryBountyExpiringSoonRequest, QueryBountyExpiringSoonResponse, QueryPostFlagsRequest, QueryPostFlagsResponse, QueryFlagReviewQueueRequest, QueryFlagReviewQueueResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ListPost Queries a list of Post items. */
  getPost(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  /** ListPost defines the ListPost RPC. */
  listPost(request?: QueryAllPostRequest): Promise<QueryAllPostResponse>;
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
  /** Posts Queries a list of Posts items. */
  posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
  /** Thread Queries a list of Thread items. */
  thread(request: QueryThreadRequest): Promise<QueryThreadResponse>;
  /** UserPosts Queries a list of UserPosts items. */
  userPosts(request: QueryUserPostsRequest): Promise<QueryUserPostsResponse>;
  /** ArchiveCooldown Queries a list of ArchiveCooldown items. */
  archiveCooldown(request: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse>;
  /** ForumStatus Queries a list of ForumStatus items. */
  forumStatus(request?: QueryForumStatusRequest): Promise<QueryForumStatusResponse>;
  /** AppealCooldown Queries a list of AppealCooldown items. */
  appealCooldown(request: QueryAppealCooldownRequest): Promise<QueryAppealCooldownResponse>;
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
  /** PostFlags Queries a list of PostFlags items. */
  postFlags(request: QueryPostFlagsRequest): Promise<QueryPostFlagsResponse>;
  /** FlagReviewQueue Queries a list of FlagReviewQueue items. */
  flagReviewQueue(request?: QueryFlagReviewQueueRequest): Promise<QueryFlagReviewQueueResponse>;
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
  /* UserPosts Queries a list of UserPosts items. */
  userPosts = async (request: QueryUserPostsRequest): Promise<QueryUserPostsResponse> => {
    const data = QueryUserPostsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "UserPosts", data);
    return promise.then(data => QueryUserPostsResponse.decode(new BinaryReader(data)));
  };
  /* ArchiveCooldown Queries a list of ArchiveCooldown items. */
  archiveCooldown = async (request: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse> => {
    const data = QueryArchiveCooldownRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Query", "ArchiveCooldown", data);
    return promise.then(data => QueryArchiveCooldownResponse.decode(new BinaryReader(data)));
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
    posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
      return queryService.posts(request);
    },
    thread(request: QueryThreadRequest): Promise<QueryThreadResponse> {
      return queryService.thread(request);
    },
    userPosts(request: QueryUserPostsRequest): Promise<QueryUserPostsResponse> {
      return queryService.userPosts(request);
    },
    archiveCooldown(request: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse> {
      return queryService.archiveCooldown(request);
    },
    forumStatus(request?: QueryForumStatusRequest): Promise<QueryForumStatusResponse> {
      return queryService.forumStatus(request);
    },
    appealCooldown(request: QueryAppealCooldownRequest): Promise<QueryAppealCooldownResponse> {
      return queryService.appealCooldown(request);
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
    postFlags(request: QueryPostFlagsRequest): Promise<QueryPostFlagsResponse> {
      return queryService.postFlags(request);
    },
    flagReviewQueue(request?: QueryFlagReviewQueueRequest): Promise<QueryFlagReviewQueueResponse> {
      return queryService.flagReviewQueue(request);
    }
  };
};