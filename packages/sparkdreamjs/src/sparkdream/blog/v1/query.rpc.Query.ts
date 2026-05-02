//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowPostRequest, QueryShowPostResponse, QueryListPostRequest, QueryListPostResponse, QueryShowReplyRequest, QueryShowReplyResponse, QueryListRepliesRequest, QueryListRepliesResponse, QueryListPostsByCreatorRequest, QueryListPostsByCreatorResponse, QueryReactionCountsRequest, QueryReactionCountsResponse, QueryUserReactionRequest, QueryUserReactionResponse, QueryListReactionsRequest, QueryListReactionsResponse, QueryListReactionsByCreatorRequest, QueryListReactionsByCreatorResponse, QueryListExpiringContentRequest, QueryListExpiringContentResponse, QueryListPostsByTagRequest, QueryListPostsByTagResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ShowPost returns a single post by ID. */
  showPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse>;
  /** ListPost returns paginated list of all posts. */
  listPost(request?: QueryListPostRequest): Promise<QueryListPostResponse>;
  /** ShowReply returns a single reply by ID. */
  showReply(request: QueryShowReplyRequest): Promise<QueryShowReplyResponse>;
  /** ListReplies returns paginated replies for a post. */
  listReplies(request: QueryListRepliesRequest): Promise<QueryListRepliesResponse>;
  /** ListPostsByCreator returns paginated posts by a specific creator. */
  listPostsByCreator(request: QueryListPostsByCreatorRequest): Promise<QueryListPostsByCreatorResponse>;
  /** ReactionCounts returns aggregate reaction counts for a target. */
  reactionCounts(request: QueryReactionCountsRequest): Promise<QueryReactionCountsResponse>;
  /** UserReaction checks what reaction a user has on a target. */
  userReaction(request: QueryUserReactionRequest): Promise<QueryUserReactionResponse>;
  /** ListReactions returns paginated reaction records for a target. */
  listReactions(request: QueryListReactionsRequest): Promise<QueryListReactionsResponse>;
  /** ListReactionsByCreator returns paginated reactions by a specific creator. */
  listReactionsByCreator(request: QueryListReactionsByCreatorRequest): Promise<QueryListReactionsByCreatorResponse>;
  /** ListExpiringContent returns paginated ephemeral content expiring before a timestamp. */
  listExpiringContent(request: QueryListExpiringContentRequest): Promise<QueryListExpiringContentResponse>;
  /** ListPostsByTag returns paginated posts that carry a given tag. */
  listPostsByTag(request: QueryListPostsByTagRequest): Promise<QueryListPostsByTagResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ShowPost returns a single post by ID. */
  showPost = async (request: QueryShowPostRequest): Promise<QueryShowPostResponse> => {
    const data = QueryShowPostRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ShowPost", data);
    return promise.then(data => QueryShowPostResponse.decode(new BinaryReader(data)));
  };
  /* ListPost returns paginated list of all posts. */
  listPost = async (request: QueryListPostRequest = {
    pagination: undefined
  }): Promise<QueryListPostResponse> => {
    const data = QueryListPostRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListPost", data);
    return promise.then(data => QueryListPostResponse.decode(new BinaryReader(data)));
  };
  /* ShowReply returns a single reply by ID. */
  showReply = async (request: QueryShowReplyRequest): Promise<QueryShowReplyResponse> => {
    const data = QueryShowReplyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ShowReply", data);
    return promise.then(data => QueryShowReplyResponse.decode(new BinaryReader(data)));
  };
  /* ListReplies returns paginated replies for a post. */
  listReplies = async (request: QueryListRepliesRequest): Promise<QueryListRepliesResponse> => {
    const data = QueryListRepliesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListReplies", data);
    return promise.then(data => QueryListRepliesResponse.decode(new BinaryReader(data)));
  };
  /* ListPostsByCreator returns paginated posts by a specific creator. */
  listPostsByCreator = async (request: QueryListPostsByCreatorRequest): Promise<QueryListPostsByCreatorResponse> => {
    const data = QueryListPostsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListPostsByCreator", data);
    return promise.then(data => QueryListPostsByCreatorResponse.decode(new BinaryReader(data)));
  };
  /* ReactionCounts returns aggregate reaction counts for a target. */
  reactionCounts = async (request: QueryReactionCountsRequest): Promise<QueryReactionCountsResponse> => {
    const data = QueryReactionCountsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ReactionCounts", data);
    return promise.then(data => QueryReactionCountsResponse.decode(new BinaryReader(data)));
  };
  /* UserReaction checks what reaction a user has on a target. */
  userReaction = async (request: QueryUserReactionRequest): Promise<QueryUserReactionResponse> => {
    const data = QueryUserReactionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "UserReaction", data);
    return promise.then(data => QueryUserReactionResponse.decode(new BinaryReader(data)));
  };
  /* ListReactions returns paginated reaction records for a target. */
  listReactions = async (request: QueryListReactionsRequest): Promise<QueryListReactionsResponse> => {
    const data = QueryListReactionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListReactions", data);
    return promise.then(data => QueryListReactionsResponse.decode(new BinaryReader(data)));
  };
  /* ListReactionsByCreator returns paginated reactions by a specific creator. */
  listReactionsByCreator = async (request: QueryListReactionsByCreatorRequest): Promise<QueryListReactionsByCreatorResponse> => {
    const data = QueryListReactionsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListReactionsByCreator", data);
    return promise.then(data => QueryListReactionsByCreatorResponse.decode(new BinaryReader(data)));
  };
  /* ListExpiringContent returns paginated ephemeral content expiring before a timestamp. */
  listExpiringContent = async (request: QueryListExpiringContentRequest): Promise<QueryListExpiringContentResponse> => {
    const data = QueryListExpiringContentRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListExpiringContent", data);
    return promise.then(data => QueryListExpiringContentResponse.decode(new BinaryReader(data)));
  };
  /* ListPostsByTag returns paginated posts that carry a given tag. */
  listPostsByTag = async (request: QueryListPostsByTagRequest): Promise<QueryListPostsByTagResponse> => {
    const data = QueryListPostsByTagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Query", "ListPostsByTag", data);
    return promise.then(data => QueryListPostsByTagResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    showPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse> {
      return queryService.showPost(request);
    },
    listPost(request?: QueryListPostRequest): Promise<QueryListPostResponse> {
      return queryService.listPost(request);
    },
    showReply(request: QueryShowReplyRequest): Promise<QueryShowReplyResponse> {
      return queryService.showReply(request);
    },
    listReplies(request: QueryListRepliesRequest): Promise<QueryListRepliesResponse> {
      return queryService.listReplies(request);
    },
    listPostsByCreator(request: QueryListPostsByCreatorRequest): Promise<QueryListPostsByCreatorResponse> {
      return queryService.listPostsByCreator(request);
    },
    reactionCounts(request: QueryReactionCountsRequest): Promise<QueryReactionCountsResponse> {
      return queryService.reactionCounts(request);
    },
    userReaction(request: QueryUserReactionRequest): Promise<QueryUserReactionResponse> {
      return queryService.userReaction(request);
    },
    listReactions(request: QueryListReactionsRequest): Promise<QueryListReactionsResponse> {
      return queryService.listReactions(request);
    },
    listReactionsByCreator(request: QueryListReactionsByCreatorRequest): Promise<QueryListReactionsByCreatorResponse> {
      return queryService.listReactionsByCreator(request);
    },
    listExpiringContent(request: QueryListExpiringContentRequest): Promise<QueryListExpiringContentResponse> {
      return queryService.listExpiringContent(request);
    },
    listPostsByTag(request: QueryListPostsByTagRequest): Promise<QueryListPostsByTagResponse> {
      return queryService.listPostsByTag(request);
    }
  };
};