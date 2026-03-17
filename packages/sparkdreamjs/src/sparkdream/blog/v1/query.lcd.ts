//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryShowPostRequest, QueryShowPostResponse, QueryListPostRequest, QueryListPostResponse, QueryShowReplyRequest, QueryShowReplyResponse, QueryListRepliesRequest, QueryListRepliesResponse, QueryListPostsByCreatorRequest, QueryListPostsByCreatorResponse, QueryReactionCountsRequest, QueryReactionCountsResponse, QueryUserReactionRequest, QueryUserReactionResponse, QueryListReactionsRequest, QueryListReactionsResponse, QueryListReactionsByCreatorRequest, QueryListReactionsByCreatorResponse, QueryListExpiringContentRequest, QueryListExpiringContentResponse } from "./query";
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
    const endpoint = `sparkdream/blog/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ShowPost returns a single post by ID. */
  showPost = async (params: QueryShowPostRequest): Promise<QueryShowPostResponse> => {
    const endpoint = `sparkdream/blog/v1/show_post/${params.id}`;
    return await this.req.get<QueryShowPostResponse>(endpoint);
  };
  /* ListPost returns paginated list of all posts. */
  listPost = async (params: QueryListPostRequest = {
    pagination: undefined
  }): Promise<QueryListPostResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/blog/v1/list_post`;
    return await this.req.get<QueryListPostResponse>(endpoint, options);
  };
  /* ShowReply returns a single reply by ID. */
  showReply = async (params: QueryShowReplyRequest): Promise<QueryShowReplyResponse> => {
    const endpoint = `sparkdream/blog/v1/show_reply/${params.id}`;
    return await this.req.get<QueryShowReplyResponse>(endpoint);
  };
  /* ListReplies returns paginated replies for a post. */
  listReplies = async (params: QueryListRepliesRequest): Promise<QueryListRepliesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filterByParent !== "undefined") {
      options.params.filter_by_parent = params.filterByParent;
    }
    if (typeof params?.parentReplyId !== "undefined") {
      options.params.parent_reply_id = params.parentReplyId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.includeHidden !== "undefined") {
      options.params.include_hidden = params.includeHidden;
    }
    const endpoint = `sparkdream/blog/v1/list_replies/${params.postId}`;
    return await this.req.get<QueryListRepliesResponse>(endpoint, options);
  };
  /* ListPostsByCreator returns paginated posts by a specific creator. */
  listPostsByCreator = async (params: QueryListPostsByCreatorRequest): Promise<QueryListPostsByCreatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.includeHidden !== "undefined") {
      options.params.include_hidden = params.includeHidden;
    }
    const endpoint = `sparkdream/blog/v1/list_posts_by_creator/${params.creator}`;
    return await this.req.get<QueryListPostsByCreatorResponse>(endpoint, options);
  };
  /* ReactionCounts returns aggregate reaction counts for a target. */
  reactionCounts = async (params: QueryReactionCountsRequest): Promise<QueryReactionCountsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.replyId !== "undefined") {
      options.params.reply_id = params.replyId;
    }
    const endpoint = `sparkdream/blog/v1/reaction_counts/${params.postId}`;
    return await this.req.get<QueryReactionCountsResponse>(endpoint, options);
  };
  /* UserReaction checks what reaction a user has on a target. */
  userReaction = async (params: QueryUserReactionRequest): Promise<QueryUserReactionResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.replyId !== "undefined") {
      options.params.reply_id = params.replyId;
    }
    const endpoint = `sparkdream/blog/v1/user_reaction/${params.creator}/${params.postId}`;
    return await this.req.get<QueryUserReactionResponse>(endpoint, options);
  };
  /* ListReactions returns paginated reaction records for a target. */
  listReactions = async (params: QueryListReactionsRequest): Promise<QueryListReactionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.replyId !== "undefined") {
      options.params.reply_id = params.replyId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/blog/v1/list_reactions/${params.postId}`;
    return await this.req.get<QueryListReactionsResponse>(endpoint, options);
  };
  /* ListReactionsByCreator returns paginated reactions by a specific creator. */
  listReactionsByCreator = async (params: QueryListReactionsByCreatorRequest): Promise<QueryListReactionsByCreatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/blog/v1/list_reactions_by_creator/${params.creator}`;
    return await this.req.get<QueryListReactionsByCreatorResponse>(endpoint, options);
  };
  /* ListExpiringContent returns paginated ephemeral content expiring before a timestamp. */
  listExpiringContent = async (params: QueryListExpiringContentRequest): Promise<QueryListExpiringContentResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.expiresBefore !== "undefined") {
      options.params.expires_before = params.expiresBefore;
    }
    if (typeof params?.contentType !== "undefined") {
      options.params.content_type = params.contentType;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/blog/v1/list_expiring_content`;
    return await this.req.get<QueryListExpiringContentResponse>(endpoint, options);
  };
}