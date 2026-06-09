//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPostRequest, QueryGetPostResponse, QueryAllPostRequest, QueryAllPostResponse, QueryGetUserRateLimitRequest, QueryGetUserRateLimitResponse, QueryAllUserRateLimitRequest, QueryAllUserRateLimitResponse, QueryGetUserReactionLimitRequest, QueryGetUserReactionLimitResponse, QueryAllUserReactionLimitRequest, QueryAllUserReactionLimitResponse, QueryGetSentinelActivityRequest, QueryGetSentinelActivityResponse, QueryAllSentinelActivityRequest, QueryAllSentinelActivityResponse, QueryGetHideRecordRequest, QueryGetHideRecordResponse, QueryAllHideRecordRequest, QueryAllHideRecordResponse, QueryGetThreadLockRecordRequest, QueryGetThreadLockRecordResponse, QueryAllThreadLockRecordRequest, QueryAllThreadLockRecordResponse, QueryGetThreadMoveRecordRequest, QueryGetThreadMoveRecordResponse, QueryAllThreadMoveRecordRequest, QueryAllThreadMoveRecordResponse, QueryGetPostFlagRequest, QueryGetPostFlagResponse, QueryAllPostFlagRequest, QueryAllPostFlagResponse, QueryGetBountyRequest, QueryGetBountyResponse, QueryAllBountyRequest, QueryAllBountyResponse, QueryGetThreadMetadataRequest, QueryGetThreadMetadataResponse, QueryAllThreadMetadataRequest, QueryAllThreadMetadataResponse, QueryGetThreadFollowRequest, QueryGetThreadFollowResponse, QueryAllThreadFollowRequest, QueryAllThreadFollowResponse, QueryGetThreadFollowCountRequest, QueryGetThreadFollowCountResponse, QueryAllThreadFollowCountRequest, QueryAllThreadFollowCountResponse, QueryGetArchiveMetadataRequest, QueryGetArchiveMetadataResponse, QueryAllArchiveMetadataRequest, QueryAllArchiveMetadataResponse, QueryPostsRequest, QueryPostsResponse, QueryThreadRequest, QueryThreadResponse, QueryUserPostsRequest, QueryUserPostsResponse, QueryArchiveCooldownRequest, QueryArchiveCooldownResponse, QueryForumStatusRequest, QueryForumStatusResponse, QueryAppealCooldownRequest, QueryAppealCooldownResponse, QueryPinnedPostsRequest, QueryPinnedPostsResponse, QueryLockedThreadsRequest, QueryLockedThreadsResponse, QueryThreadLockStatusRequest, QueryThreadLockStatusResponse, QueryTopPostsRequest, QueryTopPostsResponse, QueryThreadFollowersRequest, QueryThreadFollowersResponse, QueryUserFollowedThreadsRequest, QueryUserFollowedThreadsResponse, QueryIsFollowingThreadRequest, QueryIsFollowingThreadResponse, QueryBountyByThreadRequest, QueryBountyByThreadResponse, QueryActiveBountiesRequest, QueryActiveBountiesResponse, QueryUserBountiesRequest, QueryUserBountiesResponse, QueryBountyExpiringSoonRequest, QueryBountyExpiringSoonResponse, QueryPostFlagsRequest, QueryPostFlagsResponse, QueryFlagReviewQueueRequest, QueryFlagReviewQueueResponse, QueryGetPostConvictionStakeRequest, QueryGetPostConvictionStakeResponse, QueryPostConvictionStakesByStakerRequest, QueryPostConvictionStakesByStakerResponse, QueryPostConvictionStakesByPostRequest, QueryPostConvictionStakesByPostResponse } from "./query";
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
    const endpoint = `sparkdream/forum/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ListPost Queries a list of Post items. */
  getPost = async (params: QueryGetPostRequest): Promise<QueryGetPostResponse> => {
    const endpoint = `sparkdream/forum/v1/post/${params.postId}`;
    return await this.req.get<QueryGetPostResponse>(endpoint);
  };
  /* ListPost defines the ListPost RPC. */
  listPost = async (params: QueryAllPostRequest = {
    pagination: undefined
  }): Promise<QueryAllPostResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/post`;
    return await this.req.get<QueryAllPostResponse>(endpoint, options);
  };
  /* ListUserRateLimit Queries a list of UserRateLimit items. */
  getUserRateLimit = async (params: QueryGetUserRateLimitRequest): Promise<QueryGetUserRateLimitResponse> => {
    const endpoint = `sparkdream/forum/v1/user_rate_limit/${params.userAddress}`;
    return await this.req.get<QueryGetUserRateLimitResponse>(endpoint);
  };
  /* ListUserRateLimit defines the ListUserRateLimit RPC. */
  listUserRateLimit = async (params: QueryAllUserRateLimitRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRateLimitResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/user_rate_limit`;
    return await this.req.get<QueryAllUserRateLimitResponse>(endpoint, options);
  };
  /* ListUserReactionLimit Queries a list of UserReactionLimit items. */
  getUserReactionLimit = async (params: QueryGetUserReactionLimitRequest): Promise<QueryGetUserReactionLimitResponse> => {
    const endpoint = `sparkdream/forum/v1/user_reaction_limit/${params.userAddress}`;
    return await this.req.get<QueryGetUserReactionLimitResponse>(endpoint);
  };
  /* ListUserReactionLimit defines the ListUserReactionLimit RPC. */
  listUserReactionLimit = async (params: QueryAllUserReactionLimitRequest = {
    pagination: undefined
  }): Promise<QueryAllUserReactionLimitResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/user_reaction_limit`;
    return await this.req.get<QueryAllUserReactionLimitResponse>(endpoint, options);
  };
  /* ListSentinelActivity Queries a list of SentinelActivity items. */
  getSentinelActivity = async (params: QueryGetSentinelActivityRequest): Promise<QueryGetSentinelActivityResponse> => {
    const endpoint = `sparkdream/forum/v1/sentinel_activity/${params.address}`;
    return await this.req.get<QueryGetSentinelActivityResponse>(endpoint);
  };
  /* ListSentinelActivity defines the ListSentinelActivity RPC. */
  listSentinelActivity = async (params: QueryAllSentinelActivityRequest = {
    pagination: undefined
  }): Promise<QueryAllSentinelActivityResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/sentinel_activity`;
    return await this.req.get<QueryAllSentinelActivityResponse>(endpoint, options);
  };
  /* ListHideRecord Queries a list of HideRecord items. */
  getHideRecord = async (params: QueryGetHideRecordRequest): Promise<QueryGetHideRecordResponse> => {
    const endpoint = `sparkdream/forum/v1/hide_record/${params.postId}`;
    return await this.req.get<QueryGetHideRecordResponse>(endpoint);
  };
  /* ListHideRecord defines the ListHideRecord RPC. */
  listHideRecord = async (params: QueryAllHideRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllHideRecordResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/hide_record`;
    return await this.req.get<QueryAllHideRecordResponse>(endpoint, options);
  };
  /* ListThreadLockRecord Queries a list of ThreadLockRecord items. */
  getThreadLockRecord = async (params: QueryGetThreadLockRecordRequest): Promise<QueryGetThreadLockRecordResponse> => {
    const endpoint = `sparkdream/forum/v1/thread_lock_record/${params.rootId}`;
    return await this.req.get<QueryGetThreadLockRecordResponse>(endpoint);
  };
  /* ListThreadLockRecord defines the ListThreadLockRecord RPC. */
  listThreadLockRecord = async (params: QueryAllThreadLockRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadLockRecordResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread_lock_record`;
    return await this.req.get<QueryAllThreadLockRecordResponse>(endpoint, options);
  };
  /* ListThreadMoveRecord Queries a list of ThreadMoveRecord items. */
  getThreadMoveRecord = async (params: QueryGetThreadMoveRecordRequest): Promise<QueryGetThreadMoveRecordResponse> => {
    const endpoint = `sparkdream/forum/v1/thread_move_record/${params.rootId}`;
    return await this.req.get<QueryGetThreadMoveRecordResponse>(endpoint);
  };
  /* ListThreadMoveRecord defines the ListThreadMoveRecord RPC. */
  listThreadMoveRecord = async (params: QueryAllThreadMoveRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadMoveRecordResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread_move_record`;
    return await this.req.get<QueryAllThreadMoveRecordResponse>(endpoint, options);
  };
  /* ListPostFlag Queries a list of PostFlag items. */
  getPostFlag = async (params: QueryGetPostFlagRequest): Promise<QueryGetPostFlagResponse> => {
    const endpoint = `sparkdream/forum/v1/post_flag/${params.postId}`;
    return await this.req.get<QueryGetPostFlagResponse>(endpoint);
  };
  /* ListPostFlag defines the ListPostFlag RPC. */
  listPostFlag = async (params: QueryAllPostFlagRequest = {
    pagination: undefined
  }): Promise<QueryAllPostFlagResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/post_flag`;
    return await this.req.get<QueryAllPostFlagResponse>(endpoint, options);
  };
  /* ListBounty Queries a list of Bounty items. */
  getBounty = async (params: QueryGetBountyRequest): Promise<QueryGetBountyResponse> => {
    const endpoint = `sparkdream/forum/v1/bounty/${params.id}`;
    return await this.req.get<QueryGetBountyResponse>(endpoint);
  };
  /* ListBounty defines the ListBounty RPC. */
  listBounty = async (params: QueryAllBountyRequest = {
    pagination: undefined
  }): Promise<QueryAllBountyResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/bounty`;
    return await this.req.get<QueryAllBountyResponse>(endpoint, options);
  };
  /* ListThreadMetadata Queries a list of ThreadMetadata items. */
  getThreadMetadata = async (params: QueryGetThreadMetadataRequest): Promise<QueryGetThreadMetadataResponse> => {
    const endpoint = `sparkdream/forum/v1/thread_metadata/${params.threadId}`;
    return await this.req.get<QueryGetThreadMetadataResponse>(endpoint);
  };
  /* ListThreadMetadata defines the ListThreadMetadata RPC. */
  listThreadMetadata = async (params: QueryAllThreadMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadMetadataResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread_metadata`;
    return await this.req.get<QueryAllThreadMetadataResponse>(endpoint, options);
  };
  /* ListThreadFollow Queries a list of ThreadFollow items. */
  getThreadFollow = async (params: QueryGetThreadFollowRequest): Promise<QueryGetThreadFollowResponse> => {
    const endpoint = `sparkdream/forum/v1/thread_follow/${params.follower}`;
    return await this.req.get<QueryGetThreadFollowResponse>(endpoint);
  };
  /* ListThreadFollow defines the ListThreadFollow RPC. */
  listThreadFollow = async (params: QueryAllThreadFollowRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadFollowResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread_follow`;
    return await this.req.get<QueryAllThreadFollowResponse>(endpoint, options);
  };
  /* ListThreadFollowCount Queries a list of ThreadFollowCount items. */
  getThreadFollowCount = async (params: QueryGetThreadFollowCountRequest): Promise<QueryGetThreadFollowCountResponse> => {
    const endpoint = `sparkdream/forum/v1/thread_follow_count/${params.threadId}`;
    return await this.req.get<QueryGetThreadFollowCountResponse>(endpoint);
  };
  /* ListThreadFollowCount defines the ListThreadFollowCount RPC. */
  listThreadFollowCount = async (params: QueryAllThreadFollowCountRequest = {
    pagination: undefined
  }): Promise<QueryAllThreadFollowCountResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread_follow_count`;
    return await this.req.get<QueryAllThreadFollowCountResponse>(endpoint, options);
  };
  /* ListArchiveMetadata Queries a list of ArchiveMetadata items. */
  getArchiveMetadata = async (params: QueryGetArchiveMetadataRequest): Promise<QueryGetArchiveMetadataResponse> => {
    const endpoint = `sparkdream/forum/v1/archive_metadata/${params.rootId}`;
    return await this.req.get<QueryGetArchiveMetadataResponse>(endpoint);
  };
  /* ListArchiveMetadata defines the ListArchiveMetadata RPC. */
  listArchiveMetadata = async (params: QueryAllArchiveMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllArchiveMetadataResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/archive_metadata`;
    return await this.req.get<QueryAllArchiveMetadataResponse>(endpoint, options);
  };
  /* Posts Queries a list of Posts items. */
  posts = async (params: QueryPostsRequest): Promise<QueryPostsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/posts/${params.categoryId}/${params.status}`;
    return await this.req.get<QueryPostsResponse>(endpoint, options);
  };
  /* Thread Queries a list of Thread items. */
  thread = async (params: QueryThreadRequest): Promise<QueryThreadResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread/${params.rootId}`;
    return await this.req.get<QueryThreadResponse>(endpoint, options);
  };
  /* UserPosts Queries a list of UserPosts items. */
  userPosts = async (params: QueryUserPostsRequest): Promise<QueryUserPostsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/user_posts/${params.author}`;
    return await this.req.get<QueryUserPostsResponse>(endpoint, options);
  };
  /* ArchiveCooldown Queries a list of ArchiveCooldown items. */
  archiveCooldown = async (params: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse> => {
    const endpoint = `sparkdream/forum/v1/archive_cooldown/${params.rootId}`;
    return await this.req.get<QueryArchiveCooldownResponse>(endpoint);
  };
  /* ForumStatus Queries a list of ForumStatus items. */
  forumStatus = async (_params: QueryForumStatusRequest = {}): Promise<QueryForumStatusResponse> => {
    const endpoint = `sparkdream/forum/v1/forum_status`;
    return await this.req.get<QueryForumStatusResponse>(endpoint);
  };
  /* AppealCooldown Queries a list of AppealCooldown items. */
  appealCooldown = async (params: QueryAppealCooldownRequest): Promise<QueryAppealCooldownResponse> => {
    const endpoint = `sparkdream/forum/v1/appeal_cooldown/${params.postId}`;
    return await this.req.get<QueryAppealCooldownResponse>(endpoint);
  };
  /* PinnedPosts Queries a list of PinnedPosts items. */
  pinnedPosts = async (params: QueryPinnedPostsRequest): Promise<QueryPinnedPostsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/pinned_posts/${params.categoryId}`;
    return await this.req.get<QueryPinnedPostsResponse>(endpoint, options);
  };
  /* LockedThreads Queries a list of LockedThreads items. */
  lockedThreads = async (params: QueryLockedThreadsRequest = {
    pagination: undefined
  }): Promise<QueryLockedThreadsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/locked_threads`;
    return await this.req.get<QueryLockedThreadsResponse>(endpoint, options);
  };
  /* ThreadLockStatus Queries a list of ThreadLockStatus items. */
  threadLockStatus = async (params: QueryThreadLockStatusRequest): Promise<QueryThreadLockStatusResponse> => {
    const endpoint = `sparkdream/forum/v1/thread_lock_status/${params.rootId}`;
    return await this.req.get<QueryThreadLockStatusResponse>(endpoint);
  };
  /* TopPosts Queries a list of TopPosts items. */
  topPosts = async (params: QueryTopPostsRequest): Promise<QueryTopPostsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/top_posts/${params.categoryId}/${params.timeRange}`;
    return await this.req.get<QueryTopPostsResponse>(endpoint, options);
  };
  /* ThreadFollowers Queries a list of ThreadFollowers items. */
  threadFollowers = async (params: QueryThreadFollowersRequest): Promise<QueryThreadFollowersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/thread_followers/${params.threadId}`;
    return await this.req.get<QueryThreadFollowersResponse>(endpoint, options);
  };
  /* UserFollowedThreads Queries a list of UserFollowedThreads items. */
  userFollowedThreads = async (params: QueryUserFollowedThreadsRequest): Promise<QueryUserFollowedThreadsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/user_followed_threads/${params.user}`;
    return await this.req.get<QueryUserFollowedThreadsResponse>(endpoint, options);
  };
  /* IsFollowingThread Queries a list of IsFollowingThread items. */
  isFollowingThread = async (params: QueryIsFollowingThreadRequest): Promise<QueryIsFollowingThreadResponse> => {
    const endpoint = `sparkdream/forum/v1/is_following_thread/${params.threadId}/${params.user}`;
    return await this.req.get<QueryIsFollowingThreadResponse>(endpoint);
  };
  /* BountyByThread Queries a list of BountyByThread items. */
  bountyByThread = async (params: QueryBountyByThreadRequest): Promise<QueryBountyByThreadResponse> => {
    const endpoint = `sparkdream/forum/v1/bounty_by_thread/${params.threadId}`;
    return await this.req.get<QueryBountyByThreadResponse>(endpoint);
  };
  /* ActiveBounties Queries a list of ActiveBounties items. */
  activeBounties = async (params: QueryActiveBountiesRequest = {
    pagination: undefined
  }): Promise<QueryActiveBountiesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/active_bounties`;
    return await this.req.get<QueryActiveBountiesResponse>(endpoint, options);
  };
  /* UserBounties Queries a list of UserBounties items. */
  userBounties = async (params: QueryUserBountiesRequest): Promise<QueryUserBountiesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/user_bounties/${params.user}`;
    return await this.req.get<QueryUserBountiesResponse>(endpoint, options);
  };
  /* BountyExpiringSoon Queries a list of BountyExpiringSoon items. */
  bountyExpiringSoon = async (params: QueryBountyExpiringSoonRequest): Promise<QueryBountyExpiringSoonResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/bounty_expiring_soon/${params.withinSeconds}`;
    return await this.req.get<QueryBountyExpiringSoonResponse>(endpoint, options);
  };
  /* PostFlags Queries a list of PostFlags items. */
  postFlags = async (params: QueryPostFlagsRequest): Promise<QueryPostFlagsResponse> => {
    const endpoint = `sparkdream/forum/v1/post_flags/${params.postId}`;
    return await this.req.get<QueryPostFlagsResponse>(endpoint);
  };
  /* FlagReviewQueue Queries a list of FlagReviewQueue items. */
  flagReviewQueue = async (params: QueryFlagReviewQueueRequest = {
    pagination: undefined
  }): Promise<QueryFlagReviewQueueResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/flag_review_queue`;
    return await this.req.get<QueryFlagReviewQueueResponse>(endpoint, options);
  };
  /* GetPostConvictionStake returns a single post-conviction stake by id. */
  getPostConvictionStake = async (params: QueryGetPostConvictionStakeRequest): Promise<QueryGetPostConvictionStakeResponse> => {
    const endpoint = `sparkdream/forum/v1/post_conviction_stake/${params.id}`;
    return await this.req.get<QueryGetPostConvictionStakeResponse>(endpoint);
  };
  /* PostConvictionStakesByStaker lists a staker's open post-conviction stakes.
   Replaces the need for clients to mirror their own stake ids locally: the
   stake id required by MsgReleasePostConviction is otherwise only returned in
   the StakePostConviction tx response/event. */
  postConvictionStakesByStaker = async (params: QueryPostConvictionStakesByStakerRequest): Promise<QueryPostConvictionStakesByStakerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/post_conviction_stakes_by_staker/${params.staker}`;
    return await this.req.get<QueryPostConvictionStakesByStakerResponse>(endpoint, options);
  };
  /* PostConvictionStakesByPost lists all active stakes backing a post. */
  postConvictionStakesByPost = async (params: QueryPostConvictionStakesByPostRequest): Promise<QueryPostConvictionStakesByPostResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/post_conviction_stakes_by_post/${params.postId}`;
    return await this.req.get<QueryPostConvictionStakesByPostResponse>(endpoint, options);
  };
}