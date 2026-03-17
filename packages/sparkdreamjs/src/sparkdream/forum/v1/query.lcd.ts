//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPostRequest, QueryGetPostResponse, QueryAllPostRequest, QueryAllPostResponse, QueryGetCategoryRequest, QueryGetCategoryResponse, QueryAllCategoryRequest, QueryAllCategoryResponse, QueryGetTagRequest, QueryGetTagResponse, QueryAllTagRequest, QueryAllTagResponse, QueryGetReservedTagRequest, QueryGetReservedTagResponse, QueryAllReservedTagRequest, QueryAllReservedTagResponse, QueryGetUserRateLimitRequest, QueryGetUserRateLimitResponse, QueryAllUserRateLimitRequest, QueryAllUserRateLimitResponse, QueryGetUserReactionLimitRequest, QueryGetUserReactionLimitResponse, QueryAllUserReactionLimitRequest, QueryAllUserReactionLimitResponse, QueryGetSentinelActivityRequest, QueryGetSentinelActivityResponse, QueryAllSentinelActivityRequest, QueryAllSentinelActivityResponse, QueryGetHideRecordRequest, QueryGetHideRecordResponse, QueryAllHideRecordRequest, QueryAllHideRecordResponse, QueryGetThreadLockRecordRequest, QueryGetThreadLockRecordResponse, QueryAllThreadLockRecordRequest, QueryAllThreadLockRecordResponse, QueryGetThreadMoveRecordRequest, QueryGetThreadMoveRecordResponse, QueryAllThreadMoveRecordRequest, QueryAllThreadMoveRecordResponse, QueryGetPostFlagRequest, QueryGetPostFlagResponse, QueryAllPostFlagRequest, QueryAllPostFlagResponse, QueryGetBountyRequest, QueryGetBountyResponse, QueryAllBountyRequest, QueryAllBountyResponse, QueryGetTagBudgetRequest, QueryGetTagBudgetResponse, QueryAllTagBudgetRequest, QueryAllTagBudgetResponse, QueryGetTagBudgetAwardRequest, QueryGetTagBudgetAwardResponse, QueryAllTagBudgetAwardRequest, QueryAllTagBudgetAwardResponse, QueryGetThreadMetadataRequest, QueryGetThreadMetadataResponse, QueryAllThreadMetadataRequest, QueryAllThreadMetadataResponse, QueryGetThreadFollowRequest, QueryGetThreadFollowResponse, QueryAllThreadFollowRequest, QueryAllThreadFollowResponse, QueryGetThreadFollowCountRequest, QueryGetThreadFollowCountResponse, QueryAllThreadFollowCountRequest, QueryAllThreadFollowCountResponse, QueryGetArchiveMetadataRequest, QueryGetArchiveMetadataResponse, QueryAllArchiveMetadataRequest, QueryAllArchiveMetadataResponse, QueryGetTagReportRequest, QueryGetTagReportResponse, QueryAllTagReportRequest, QueryAllTagReportResponse, QueryGetMemberSalvationStatusRequest, QueryGetMemberSalvationStatusResponse, QueryAllMemberSalvationStatusRequest, QueryAllMemberSalvationStatusResponse, QueryGetJuryParticipationRequest, QueryGetJuryParticipationResponse, QueryAllJuryParticipationRequest, QueryAllJuryParticipationResponse, QueryGetMemberReportRequest, QueryGetMemberReportResponse, QueryAllMemberReportRequest, QueryAllMemberReportResponse, QueryGetMemberWarningRequest, QueryGetMemberWarningResponse, QueryAllMemberWarningRequest, QueryAllMemberWarningResponse, QueryGetGovActionAppealRequest, QueryGetGovActionAppealResponse, QueryAllGovActionAppealRequest, QueryAllGovActionAppealResponse, QueryPostsRequest, QueryPostsResponse, QueryThreadRequest, QueryThreadResponse, QueryCategoriesRequest, QueryCategoriesResponse, QueryUserPostsRequest, QueryUserPostsResponse, QuerySentinelStatusRequest, QuerySentinelStatusResponse, QuerySentinelBondCommitmentRequest, QuerySentinelBondCommitmentResponse, QueryArchiveCooldownRequest, QueryArchiveCooldownResponse, QueryTagExistsRequest, QueryTagExistsResponse, QueryTagReportsRequest, QueryTagReportsResponse, QueryForumStatusRequest, QueryForumStatusResponse, QueryAppealCooldownRequest, QueryAppealCooldownResponse, QueryMemberReportsRequest, QueryMemberReportsResponse, QueryMemberWarningsRequest, QueryMemberWarningsResponse, QueryMemberStandingRequest, QueryMemberStandingResponse, QueryPinnedPostsRequest, QueryPinnedPostsResponse, QueryLockedThreadsRequest, QueryLockedThreadsResponse, QueryThreadLockStatusRequest, QueryThreadLockStatusResponse, QueryTopPostsRequest, QueryTopPostsResponse, QueryThreadFollowersRequest, QueryThreadFollowersResponse, QueryUserFollowedThreadsRequest, QueryUserFollowedThreadsResponse, QueryIsFollowingThreadRequest, QueryIsFollowingThreadResponse, QueryBountyByThreadRequest, QueryBountyByThreadResponse, QueryActiveBountiesRequest, QueryActiveBountiesResponse, QueryUserBountiesRequest, QueryUserBountiesResponse, QueryBountyExpiringSoonRequest, QueryBountyExpiringSoonResponse, QueryTagBudgetByTagRequest, QueryTagBudgetByTagResponse, QueryTagBudgetsRequest, QueryTagBudgetsResponse, QueryTagBudgetAwardsRequest, QueryTagBudgetAwardsResponse, QueryPostFlagsRequest, QueryPostFlagsResponse, QueryFlagReviewQueueRequest, QueryFlagReviewQueueResponse, QueryGovActionAppealsRequest, QueryGovActionAppealsResponse } from "./query";
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
  /* ListCategory Queries a list of Category items. */
  getCategory = async (params: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse> => {
    const endpoint = `sparkdream/forum/v1/category/${params.categoryId}`;
    return await this.req.get<QueryGetCategoryResponse>(endpoint);
  };
  /* ListCategory defines the ListCategory RPC. */
  listCategory = async (params: QueryAllCategoryRequest = {
    pagination: undefined
  }): Promise<QueryAllCategoryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/category`;
    return await this.req.get<QueryAllCategoryResponse>(endpoint, options);
  };
  /* ListTag Queries a list of Tag items. */
  getTag = async (params: QueryGetTagRequest): Promise<QueryGetTagResponse> => {
    const endpoint = `sparkdream/forum/v1/tag/${params.name}`;
    return await this.req.get<QueryGetTagResponse>(endpoint);
  };
  /* ListTag defines the ListTag RPC. */
  listTag = async (params: QueryAllTagRequest = {
    pagination: undefined
  }): Promise<QueryAllTagResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/tag`;
    return await this.req.get<QueryAllTagResponse>(endpoint, options);
  };
  /* ListReservedTag Queries a list of ReservedTag items. */
  getReservedTag = async (params: QueryGetReservedTagRequest): Promise<QueryGetReservedTagResponse> => {
    const endpoint = `sparkdream/forum/v1/reserved_tag/${params.name}`;
    return await this.req.get<QueryGetReservedTagResponse>(endpoint);
  };
  /* ListReservedTag defines the ListReservedTag RPC. */
  listReservedTag = async (params: QueryAllReservedTagRequest = {
    pagination: undefined
  }): Promise<QueryAllReservedTagResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/reserved_tag`;
    return await this.req.get<QueryAllReservedTagResponse>(endpoint, options);
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
  /* ListTagBudget Queries a list of TagBudget items. */
  getTagBudget = async (params: QueryGetTagBudgetRequest): Promise<QueryGetTagBudgetResponse> => {
    const endpoint = `sparkdream/forum/v1/tag_budget/${params.id}`;
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
    const endpoint = `sparkdream/forum/v1/tag_budget`;
    return await this.req.get<QueryAllTagBudgetResponse>(endpoint, options);
  };
  /* ListTagBudgetAward Queries a list of TagBudgetAward items. */
  getTagBudgetAward = async (params: QueryGetTagBudgetAwardRequest): Promise<QueryGetTagBudgetAwardResponse> => {
    const endpoint = `sparkdream/forum/v1/tag_budget_award/${params.id}`;
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
    const endpoint = `sparkdream/forum/v1/tag_budget_award`;
    return await this.req.get<QueryAllTagBudgetAwardResponse>(endpoint, options);
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
  /* ListTagReport Queries a list of TagReport items. */
  getTagReport = async (params: QueryGetTagReportRequest): Promise<QueryGetTagReportResponse> => {
    const endpoint = `sparkdream/forum/v1/tag_report/${params.tagName}`;
    return await this.req.get<QueryGetTagReportResponse>(endpoint);
  };
  /* ListTagReport defines the ListTagReport RPC. */
  listTagReport = async (params: QueryAllTagReportRequest = {
    pagination: undefined
  }): Promise<QueryAllTagReportResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/tag_report`;
    return await this.req.get<QueryAllTagReportResponse>(endpoint, options);
  };
  /* ListMemberSalvationStatus Queries a list of MemberSalvationStatus items. */
  getMemberSalvationStatus = async (params: QueryGetMemberSalvationStatusRequest): Promise<QueryGetMemberSalvationStatusResponse> => {
    const endpoint = `sparkdream/forum/v1/member_salvation_status/${params.address}`;
    return await this.req.get<QueryGetMemberSalvationStatusResponse>(endpoint);
  };
  /* ListMemberSalvationStatus defines the ListMemberSalvationStatus RPC. */
  listMemberSalvationStatus = async (params: QueryAllMemberSalvationStatusRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberSalvationStatusResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/member_salvation_status`;
    return await this.req.get<QueryAllMemberSalvationStatusResponse>(endpoint, options);
  };
  /* ListJuryParticipation Queries a list of JuryParticipation items. */
  getJuryParticipation = async (params: QueryGetJuryParticipationRequest): Promise<QueryGetJuryParticipationResponse> => {
    const endpoint = `sparkdream/forum/v1/jury_participation/${params.juror}`;
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
    const endpoint = `sparkdream/forum/v1/jury_participation`;
    return await this.req.get<QueryAllJuryParticipationResponse>(endpoint, options);
  };
  /* ListMemberReport Queries a list of MemberReport items. */
  getMemberReport = async (params: QueryGetMemberReportRequest): Promise<QueryGetMemberReportResponse> => {
    const endpoint = `sparkdream/forum/v1/member_report/${params.member}`;
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
    const endpoint = `sparkdream/forum/v1/member_report`;
    return await this.req.get<QueryAllMemberReportResponse>(endpoint, options);
  };
  /* ListMemberWarning Queries a list of MemberWarning items. */
  getMemberWarning = async (params: QueryGetMemberWarningRequest): Promise<QueryGetMemberWarningResponse> => {
    const endpoint = `sparkdream/forum/v1/member_warning/${params.id}`;
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
    const endpoint = `sparkdream/forum/v1/member_warning`;
    return await this.req.get<QueryAllMemberWarningResponse>(endpoint, options);
  };
  /* ListGovActionAppeal Queries a list of GovActionAppeal items. */
  getGovActionAppeal = async (params: QueryGetGovActionAppealRequest): Promise<QueryGetGovActionAppealResponse> => {
    const endpoint = `sparkdream/forum/v1/gov_action_appeal/${params.id}`;
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
    const endpoint = `sparkdream/forum/v1/gov_action_appeal`;
    return await this.req.get<QueryAllGovActionAppealResponse>(endpoint, options);
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
  /* Categories Queries a list of Categories items. */
  categories = async (params: QueryCategoriesRequest = {
    pagination: undefined
  }): Promise<QueryCategoriesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/categories`;
    return await this.req.get<QueryCategoriesResponse>(endpoint, options);
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
  /* SentinelStatus Queries a list of SentinelStatus items. */
  sentinelStatus = async (params: QuerySentinelStatusRequest): Promise<QuerySentinelStatusResponse> => {
    const endpoint = `sparkdream/forum/v1/sentinel_status/${params.address}`;
    return await this.req.get<QuerySentinelStatusResponse>(endpoint);
  };
  /* SentinelBondCommitment Queries a list of SentinelBondCommitment items. */
  sentinelBondCommitment = async (params: QuerySentinelBondCommitmentRequest): Promise<QuerySentinelBondCommitmentResponse> => {
    const endpoint = `sparkdream/forum/v1/sentinel_bond_commitment/${params.address}`;
    return await this.req.get<QuerySentinelBondCommitmentResponse>(endpoint);
  };
  /* ArchiveCooldown Queries a list of ArchiveCooldown items. */
  archiveCooldown = async (params: QueryArchiveCooldownRequest): Promise<QueryArchiveCooldownResponse> => {
    const endpoint = `sparkdream/forum/v1/archive_cooldown/${params.rootId}`;
    return await this.req.get<QueryArchiveCooldownResponse>(endpoint);
  };
  /* TagExists Queries a list of TagExists items. */
  tagExists = async (params: QueryTagExistsRequest): Promise<QueryTagExistsResponse> => {
    const endpoint = `sparkdream/forum/v1/tag_exists/${params.tagName}`;
    return await this.req.get<QueryTagExistsResponse>(endpoint);
  };
  /* TagReports Queries a list of TagReports items. */
  tagReports = async (params: QueryTagReportsRequest = {
    pagination: undefined
  }): Promise<QueryTagReportsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/tag_reports`;
    return await this.req.get<QueryTagReportsResponse>(endpoint, options);
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
  /* MemberReports Queries a list of MemberReports items. */
  memberReports = async (params: QueryMemberReportsRequest = {
    pagination: undefined
  }): Promise<QueryMemberReportsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/member_reports`;
    return await this.req.get<QueryMemberReportsResponse>(endpoint, options);
  };
  /* MemberWarnings Queries a list of MemberWarnings items. */
  memberWarnings = async (params: QueryMemberWarningsRequest): Promise<QueryMemberWarningsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/member_warnings/${params.member}`;
    return await this.req.get<QueryMemberWarningsResponse>(endpoint, options);
  };
  /* MemberStanding Queries a list of MemberStanding items. */
  memberStanding = async (params: QueryMemberStandingRequest): Promise<QueryMemberStandingResponse> => {
    const endpoint = `sparkdream/forum/v1/member_standing/${params.member}`;
    return await this.req.get<QueryMemberStandingResponse>(endpoint);
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
  /* TagBudgetByTag Queries a list of TagBudgetByTag items. */
  tagBudgetByTag = async (params: QueryTagBudgetByTagRequest): Promise<QueryTagBudgetByTagResponse> => {
    const endpoint = `sparkdream/forum/v1/tag_budget_by_tag/${params.tag}`;
    return await this.req.get<QueryTagBudgetByTagResponse>(endpoint);
  };
  /* TagBudgets Queries a list of TagBudgets items. */
  tagBudgets = async (params: QueryTagBudgetsRequest = {
    pagination: undefined
  }): Promise<QueryTagBudgetsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/tag_budgets`;
    return await this.req.get<QueryTagBudgetsResponse>(endpoint, options);
  };
  /* TagBudgetAwards Queries a list of TagBudgetAwards items. */
  tagBudgetAwards = async (params: QueryTagBudgetAwardsRequest): Promise<QueryTagBudgetAwardsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/tag_budget_awards/${params.budgetId}`;
    return await this.req.get<QueryTagBudgetAwardsResponse>(endpoint, options);
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
  /* GovActionAppeals Queries a list of GovActionAppeals items. */
  govActionAppeals = async (params: QueryGovActionAppealsRequest = {
    pagination: undefined
  }): Promise<QueryGovActionAppealsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/forum/v1/gov_action_appeals`;
    return await this.req.get<QueryGovActionAppealsResponse>(endpoint, options);
  };
}