//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { Category, CategoryAmino } from "./category";
import { Tag, TagAmino } from "../../common/v1/tag";
import { ReservedTag, ReservedTagAmino } from "../../common/v1/reserved_tag";
import { UserRateLimit, UserRateLimitAmino } from "./user_rate_limit";
import { UserReactionLimit, UserReactionLimitAmino } from "./user_reaction_limit";
import { SentinelActivity, SentinelActivityAmino } from "./sentinel_activity";
import { HideRecord, HideRecordAmino } from "./hide_record";
import { ThreadLockRecord, ThreadLockRecordAmino } from "./thread_lock_record";
import { ThreadMoveRecord, ThreadMoveRecordAmino } from "./thread_move_record";
import { PostFlag, PostFlagAmino } from "./post_flag";
import { Bounty, BountyAmino } from "./bounty";
import { TagBudget, TagBudgetAmino } from "./tag_budget";
import { TagBudgetAward, TagBudgetAwardAmino } from "./tag_budget_award";
import { ThreadMetadata, ThreadMetadataAmino } from "./thread_metadata";
import { ThreadFollow, ThreadFollowAmino } from "./thread_follow";
import { ThreadFollowCount, ThreadFollowCountAmino } from "./thread_follow_count";
import { ArchiveMetadata, ArchiveMetadataAmino } from "./archive_metadata";
import { TagReport, TagReportAmino } from "./tag_report";
import { MemberSalvationStatus, MemberSalvationStatusAmino } from "./member_salvation_status";
import { JuryParticipation, JuryParticipationAmino } from "./jury_participation";
import { MemberReport, MemberReportAmino } from "./member_report";
import { MemberWarning, MemberWarningAmino } from "./member_warning";
import { GovActionAppeal, GovActionAppealAmino } from "./gov_action_appeal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetPostRequest defines the QueryGetPostRequest message.
 * @name QueryGetPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostRequest
 */
export interface QueryGetPostRequest {
  postId: bigint;
}
export interface QueryGetPostRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostRequest";
  value: Uint8Array;
}
/**
 * QueryGetPostRequest defines the QueryGetPostRequest message.
 * @name QueryGetPostRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostRequest
 */
export interface QueryGetPostRequestAmino {
  post_id?: string;
}
export interface QueryGetPostRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostRequest";
  value: QueryGetPostRequestAmino;
}
/**
 * QueryGetPostResponse defines the QueryGetPostResponse message.
 * @name QueryGetPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostResponse
 */
export interface QueryGetPostResponse {
  post: Post;
}
export interface QueryGetPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostResponse";
  value: Uint8Array;
}
/**
 * QueryGetPostResponse defines the QueryGetPostResponse message.
 * @name QueryGetPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostResponse
 */
export interface QueryGetPostResponseAmino {
  post?: PostAmino;
}
export interface QueryGetPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostResponse";
  value: QueryGetPostResponseAmino;
}
/**
 * QueryAllPostRequest defines the QueryAllPostRequest message.
 * @name QueryAllPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostRequest
 */
export interface QueryAllPostRequest {
  pagination?: PageRequest;
}
export interface QueryAllPostRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostRequest";
  value: Uint8Array;
}
/**
 * QueryAllPostRequest defines the QueryAllPostRequest message.
 * @name QueryAllPostRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostRequest
 */
export interface QueryAllPostRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPostRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostRequest";
  value: QueryAllPostRequestAmino;
}
/**
 * QueryAllPostResponse defines the QueryAllPostResponse message.
 * @name QueryAllPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostResponse
 */
export interface QueryAllPostResponse {
  post: Post[];
  pagination?: PageResponse;
}
export interface QueryAllPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostResponse";
  value: Uint8Array;
}
/**
 * QueryAllPostResponse defines the QueryAllPostResponse message.
 * @name QueryAllPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostResponse
 */
export interface QueryAllPostResponseAmino {
  post?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostResponse";
  value: QueryAllPostResponseAmino;
}
/**
 * QueryGetCategoryRequest defines the QueryGetCategoryRequest message.
 * @name QueryGetCategoryRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetCategoryRequest
 */
export interface QueryGetCategoryRequest {
  categoryId: bigint;
}
export interface QueryGetCategoryRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetCategoryRequest";
  value: Uint8Array;
}
/**
 * QueryGetCategoryRequest defines the QueryGetCategoryRequest message.
 * @name QueryGetCategoryRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetCategoryRequest
 */
export interface QueryGetCategoryRequestAmino {
  category_id?: string;
}
export interface QueryGetCategoryRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetCategoryRequest";
  value: QueryGetCategoryRequestAmino;
}
/**
 * QueryGetCategoryResponse defines the QueryGetCategoryResponse message.
 * @name QueryGetCategoryResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetCategoryResponse
 */
export interface QueryGetCategoryResponse {
  category: Category;
}
export interface QueryGetCategoryResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetCategoryResponse";
  value: Uint8Array;
}
/**
 * QueryGetCategoryResponse defines the QueryGetCategoryResponse message.
 * @name QueryGetCategoryResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetCategoryResponse
 */
export interface QueryGetCategoryResponseAmino {
  category?: CategoryAmino;
}
export interface QueryGetCategoryResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetCategoryResponse";
  value: QueryGetCategoryResponseAmino;
}
/**
 * QueryAllCategoryRequest defines the QueryAllCategoryRequest message.
 * @name QueryAllCategoryRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllCategoryRequest
 */
export interface QueryAllCategoryRequest {
  pagination?: PageRequest;
}
export interface QueryAllCategoryRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllCategoryRequest";
  value: Uint8Array;
}
/**
 * QueryAllCategoryRequest defines the QueryAllCategoryRequest message.
 * @name QueryAllCategoryRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllCategoryRequest
 */
export interface QueryAllCategoryRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllCategoryRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllCategoryRequest";
  value: QueryAllCategoryRequestAmino;
}
/**
 * QueryAllCategoryResponse defines the QueryAllCategoryResponse message.
 * @name QueryAllCategoryResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllCategoryResponse
 */
export interface QueryAllCategoryResponse {
  category: Category[];
  pagination?: PageResponse;
}
export interface QueryAllCategoryResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllCategoryResponse";
  value: Uint8Array;
}
/**
 * QueryAllCategoryResponse defines the QueryAllCategoryResponse message.
 * @name QueryAllCategoryResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllCategoryResponse
 */
export interface QueryAllCategoryResponseAmino {
  category?: CategoryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllCategoryResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllCategoryResponse";
  value: QueryAllCategoryResponseAmino;
}
/**
 * QueryGetTagRequest defines the QueryGetTagRequest message.
 * @name QueryGetTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagRequest
 */
export interface QueryGetTagRequest {
  name: string;
}
export interface QueryGetTagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagRequest defines the QueryGetTagRequest message.
 * @name QueryGetTagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagRequest
 */
export interface QueryGetTagRequestAmino {
  name?: string;
}
export interface QueryGetTagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagRequest";
  value: QueryGetTagRequestAmino;
}
/**
 * QueryGetTagResponse defines the QueryGetTagResponse message.
 * @name QueryGetTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagResponse
 */
export interface QueryGetTagResponse {
  tag: Tag;
}
export interface QueryGetTagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagResponse defines the QueryGetTagResponse message.
 * @name QueryGetTagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagResponse
 */
export interface QueryGetTagResponseAmino {
  tag?: TagAmino;
}
export interface QueryGetTagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagResponse";
  value: QueryGetTagResponseAmino;
}
/**
 * QueryAllTagRequest defines the QueryAllTagRequest message.
 * @name QueryAllTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagRequest
 */
export interface QueryAllTagRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagRequest defines the QueryAllTagRequest message.
 * @name QueryAllTagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagRequest
 */
export interface QueryAllTagRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagRequest";
  value: QueryAllTagRequestAmino;
}
/**
 * QueryAllTagResponse defines the QueryAllTagResponse message.
 * @name QueryAllTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagResponse
 */
export interface QueryAllTagResponse {
  tag: Tag[];
  pagination?: PageResponse;
}
export interface QueryAllTagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagResponse defines the QueryAllTagResponse message.
 * @name QueryAllTagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagResponse
 */
export interface QueryAllTagResponseAmino {
  tag?: TagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagResponse";
  value: QueryAllTagResponseAmino;
}
/**
 * QueryGetReservedTagRequest defines the QueryGetReservedTagRequest message.
 * @name QueryGetReservedTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetReservedTagRequest
 */
export interface QueryGetReservedTagRequest {
  name: string;
}
export interface QueryGetReservedTagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetReservedTagRequest";
  value: Uint8Array;
}
/**
 * QueryGetReservedTagRequest defines the QueryGetReservedTagRequest message.
 * @name QueryGetReservedTagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetReservedTagRequest
 */
export interface QueryGetReservedTagRequestAmino {
  name?: string;
}
export interface QueryGetReservedTagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetReservedTagRequest";
  value: QueryGetReservedTagRequestAmino;
}
/**
 * QueryGetReservedTagResponse defines the QueryGetReservedTagResponse message.
 * @name QueryGetReservedTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetReservedTagResponse
 */
export interface QueryGetReservedTagResponse {
  reservedTag: ReservedTag;
}
export interface QueryGetReservedTagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetReservedTagResponse";
  value: Uint8Array;
}
/**
 * QueryGetReservedTagResponse defines the QueryGetReservedTagResponse message.
 * @name QueryGetReservedTagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetReservedTagResponse
 */
export interface QueryGetReservedTagResponseAmino {
  reserved_tag?: ReservedTagAmino;
}
export interface QueryGetReservedTagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetReservedTagResponse";
  value: QueryGetReservedTagResponseAmino;
}
/**
 * QueryAllReservedTagRequest defines the QueryAllReservedTagRequest message.
 * @name QueryAllReservedTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllReservedTagRequest
 */
export interface QueryAllReservedTagRequest {
  pagination?: PageRequest;
}
export interface QueryAllReservedTagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllReservedTagRequest";
  value: Uint8Array;
}
/**
 * QueryAllReservedTagRequest defines the QueryAllReservedTagRequest message.
 * @name QueryAllReservedTagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllReservedTagRequest
 */
export interface QueryAllReservedTagRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllReservedTagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllReservedTagRequest";
  value: QueryAllReservedTagRequestAmino;
}
/**
 * QueryAllReservedTagResponse defines the QueryAllReservedTagResponse message.
 * @name QueryAllReservedTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllReservedTagResponse
 */
export interface QueryAllReservedTagResponse {
  reservedTag: ReservedTag[];
  pagination?: PageResponse;
}
export interface QueryAllReservedTagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllReservedTagResponse";
  value: Uint8Array;
}
/**
 * QueryAllReservedTagResponse defines the QueryAllReservedTagResponse message.
 * @name QueryAllReservedTagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllReservedTagResponse
 */
export interface QueryAllReservedTagResponseAmino {
  reserved_tag?: ReservedTagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllReservedTagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllReservedTagResponse";
  value: QueryAllReservedTagResponseAmino;
}
/**
 * QueryGetUserRateLimitRequest defines the QueryGetUserRateLimitRequest message.
 * @name QueryGetUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitRequest
 */
export interface QueryGetUserRateLimitRequest {
  userAddress: string;
}
export interface QueryGetUserRateLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest";
  value: Uint8Array;
}
/**
 * QueryGetUserRateLimitRequest defines the QueryGetUserRateLimitRequest message.
 * @name QueryGetUserRateLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitRequest
 */
export interface QueryGetUserRateLimitRequestAmino {
  user_address?: string;
}
export interface QueryGetUserRateLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest";
  value: QueryGetUserRateLimitRequestAmino;
}
/**
 * QueryGetUserRateLimitResponse defines the QueryGetUserRateLimitResponse message.
 * @name QueryGetUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitResponse
 */
export interface QueryGetUserRateLimitResponse {
  userRateLimit: UserRateLimit;
}
export interface QueryGetUserRateLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse";
  value: Uint8Array;
}
/**
 * QueryGetUserRateLimitResponse defines the QueryGetUserRateLimitResponse message.
 * @name QueryGetUserRateLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitResponse
 */
export interface QueryGetUserRateLimitResponseAmino {
  user_rate_limit?: UserRateLimitAmino;
}
export interface QueryGetUserRateLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse";
  value: QueryGetUserRateLimitResponseAmino;
}
/**
 * QueryAllUserRateLimitRequest defines the QueryAllUserRateLimitRequest message.
 * @name QueryAllUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitRequest
 */
export interface QueryAllUserRateLimitRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserRateLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest";
  value: Uint8Array;
}
/**
 * QueryAllUserRateLimitRequest defines the QueryAllUserRateLimitRequest message.
 * @name QueryAllUserRateLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitRequest
 */
export interface QueryAllUserRateLimitRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllUserRateLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest";
  value: QueryAllUserRateLimitRequestAmino;
}
/**
 * QueryAllUserRateLimitResponse defines the QueryAllUserRateLimitResponse message.
 * @name QueryAllUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitResponse
 */
export interface QueryAllUserRateLimitResponse {
  userRateLimit: UserRateLimit[];
  pagination?: PageResponse;
}
export interface QueryAllUserRateLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse";
  value: Uint8Array;
}
/**
 * QueryAllUserRateLimitResponse defines the QueryAllUserRateLimitResponse message.
 * @name QueryAllUserRateLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitResponse
 */
export interface QueryAllUserRateLimitResponseAmino {
  user_rate_limit?: UserRateLimitAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserRateLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse";
  value: QueryAllUserRateLimitResponseAmino;
}
/**
 * QueryGetUserReactionLimitRequest defines the QueryGetUserReactionLimitRequest message.
 * @name QueryGetUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitRequest
 */
export interface QueryGetUserReactionLimitRequest {
  userAddress: string;
}
export interface QueryGetUserReactionLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest";
  value: Uint8Array;
}
/**
 * QueryGetUserReactionLimitRequest defines the QueryGetUserReactionLimitRequest message.
 * @name QueryGetUserReactionLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitRequest
 */
export interface QueryGetUserReactionLimitRequestAmino {
  user_address?: string;
}
export interface QueryGetUserReactionLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest";
  value: QueryGetUserReactionLimitRequestAmino;
}
/**
 * QueryGetUserReactionLimitResponse defines the QueryGetUserReactionLimitResponse message.
 * @name QueryGetUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitResponse
 */
export interface QueryGetUserReactionLimitResponse {
  userReactionLimit: UserReactionLimit;
}
export interface QueryGetUserReactionLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse";
  value: Uint8Array;
}
/**
 * QueryGetUserReactionLimitResponse defines the QueryGetUserReactionLimitResponse message.
 * @name QueryGetUserReactionLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitResponse
 */
export interface QueryGetUserReactionLimitResponseAmino {
  user_reaction_limit?: UserReactionLimitAmino;
}
export interface QueryGetUserReactionLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse";
  value: QueryGetUserReactionLimitResponseAmino;
}
/**
 * QueryAllUserReactionLimitRequest defines the QueryAllUserReactionLimitRequest message.
 * @name QueryAllUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitRequest
 */
export interface QueryAllUserReactionLimitRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserReactionLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest";
  value: Uint8Array;
}
/**
 * QueryAllUserReactionLimitRequest defines the QueryAllUserReactionLimitRequest message.
 * @name QueryAllUserReactionLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitRequest
 */
export interface QueryAllUserReactionLimitRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllUserReactionLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest";
  value: QueryAllUserReactionLimitRequestAmino;
}
/**
 * QueryAllUserReactionLimitResponse defines the QueryAllUserReactionLimitResponse message.
 * @name QueryAllUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitResponse
 */
export interface QueryAllUserReactionLimitResponse {
  userReactionLimit: UserReactionLimit[];
  pagination?: PageResponse;
}
export interface QueryAllUserReactionLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse";
  value: Uint8Array;
}
/**
 * QueryAllUserReactionLimitResponse defines the QueryAllUserReactionLimitResponse message.
 * @name QueryAllUserReactionLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitResponse
 */
export interface QueryAllUserReactionLimitResponseAmino {
  user_reaction_limit?: UserReactionLimitAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserReactionLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse";
  value: QueryAllUserReactionLimitResponseAmino;
}
/**
 * QueryGetSentinelActivityRequest defines the QueryGetSentinelActivityRequest message.
 * @name QueryGetSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityRequest
 */
export interface QueryGetSentinelActivityRequest {
  address: string;
}
export interface QueryGetSentinelActivityRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest";
  value: Uint8Array;
}
/**
 * QueryGetSentinelActivityRequest defines the QueryGetSentinelActivityRequest message.
 * @name QueryGetSentinelActivityRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityRequest
 */
export interface QueryGetSentinelActivityRequestAmino {
  address?: string;
}
export interface QueryGetSentinelActivityRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest";
  value: QueryGetSentinelActivityRequestAmino;
}
/**
 * QueryGetSentinelActivityResponse defines the QueryGetSentinelActivityResponse message.
 * @name QueryGetSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityResponse
 */
export interface QueryGetSentinelActivityResponse {
  sentinelActivity: SentinelActivity;
}
export interface QueryGetSentinelActivityResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse";
  value: Uint8Array;
}
/**
 * QueryGetSentinelActivityResponse defines the QueryGetSentinelActivityResponse message.
 * @name QueryGetSentinelActivityResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityResponse
 */
export interface QueryGetSentinelActivityResponseAmino {
  sentinel_activity?: SentinelActivityAmino;
}
export interface QueryGetSentinelActivityResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse";
  value: QueryGetSentinelActivityResponseAmino;
}
/**
 * QueryAllSentinelActivityRequest defines the QueryAllSentinelActivityRequest message.
 * @name QueryAllSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityRequest
 */
export interface QueryAllSentinelActivityRequest {
  pagination?: PageRequest;
}
export interface QueryAllSentinelActivityRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest";
  value: Uint8Array;
}
/**
 * QueryAllSentinelActivityRequest defines the QueryAllSentinelActivityRequest message.
 * @name QueryAllSentinelActivityRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityRequest
 */
export interface QueryAllSentinelActivityRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSentinelActivityRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest";
  value: QueryAllSentinelActivityRequestAmino;
}
/**
 * QueryAllSentinelActivityResponse defines the QueryAllSentinelActivityResponse message.
 * @name QueryAllSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityResponse
 */
export interface QueryAllSentinelActivityResponse {
  sentinelActivity: SentinelActivity[];
  pagination?: PageResponse;
}
export interface QueryAllSentinelActivityResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse";
  value: Uint8Array;
}
/**
 * QueryAllSentinelActivityResponse defines the QueryAllSentinelActivityResponse message.
 * @name QueryAllSentinelActivityResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityResponse
 */
export interface QueryAllSentinelActivityResponseAmino {
  sentinel_activity?: SentinelActivityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSentinelActivityResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse";
  value: QueryAllSentinelActivityResponseAmino;
}
/**
 * QueryGetHideRecordRequest defines the QueryGetHideRecordRequest message.
 * @name QueryGetHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordRequest
 */
export interface QueryGetHideRecordRequest {
  postId: bigint;
}
export interface QueryGetHideRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetHideRecordRequest defines the QueryGetHideRecordRequest message.
 * @name QueryGetHideRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordRequest
 */
export interface QueryGetHideRecordRequestAmino {
  post_id?: string;
}
export interface QueryGetHideRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetHideRecordRequest";
  value: QueryGetHideRecordRequestAmino;
}
/**
 * QueryGetHideRecordResponse defines the QueryGetHideRecordResponse message.
 * @name QueryGetHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordResponse
 */
export interface QueryGetHideRecordResponse {
  hideRecord: HideRecord;
}
export interface QueryGetHideRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetHideRecordResponse defines the QueryGetHideRecordResponse message.
 * @name QueryGetHideRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordResponse
 */
export interface QueryGetHideRecordResponseAmino {
  hide_record?: HideRecordAmino;
}
export interface QueryGetHideRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetHideRecordResponse";
  value: QueryGetHideRecordResponseAmino;
}
/**
 * QueryAllHideRecordRequest defines the QueryAllHideRecordRequest message.
 * @name QueryAllHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordRequest
 */
export interface QueryAllHideRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllHideRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllHideRecordRequest defines the QueryAllHideRecordRequest message.
 * @name QueryAllHideRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordRequest
 */
export interface QueryAllHideRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllHideRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllHideRecordRequest";
  value: QueryAllHideRecordRequestAmino;
}
/**
 * QueryAllHideRecordResponse defines the QueryAllHideRecordResponse message.
 * @name QueryAllHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordResponse
 */
export interface QueryAllHideRecordResponse {
  hideRecord: HideRecord[];
  pagination?: PageResponse;
}
export interface QueryAllHideRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllHideRecordResponse defines the QueryAllHideRecordResponse message.
 * @name QueryAllHideRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordResponse
 */
export interface QueryAllHideRecordResponseAmino {
  hide_record?: HideRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllHideRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllHideRecordResponse";
  value: QueryAllHideRecordResponseAmino;
}
/**
 * QueryGetThreadLockRecordRequest defines the QueryGetThreadLockRecordRequest message.
 * @name QueryGetThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordRequest
 */
export interface QueryGetThreadLockRecordRequest {
  rootId: bigint;
}
export interface QueryGetThreadLockRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadLockRecordRequest defines the QueryGetThreadLockRecordRequest message.
 * @name QueryGetThreadLockRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordRequest
 */
export interface QueryGetThreadLockRecordRequestAmino {
  root_id?: string;
}
export interface QueryGetThreadLockRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest";
  value: QueryGetThreadLockRecordRequestAmino;
}
/**
 * QueryGetThreadLockRecordResponse defines the QueryGetThreadLockRecordResponse message.
 * @name QueryGetThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordResponse
 */
export interface QueryGetThreadLockRecordResponse {
  threadLockRecord: ThreadLockRecord;
}
export interface QueryGetThreadLockRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadLockRecordResponse defines the QueryGetThreadLockRecordResponse message.
 * @name QueryGetThreadLockRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordResponse
 */
export interface QueryGetThreadLockRecordResponseAmino {
  thread_lock_record?: ThreadLockRecordAmino;
}
export interface QueryGetThreadLockRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse";
  value: QueryGetThreadLockRecordResponseAmino;
}
/**
 * QueryAllThreadLockRecordRequest defines the QueryAllThreadLockRecordRequest message.
 * @name QueryAllThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordRequest
 */
export interface QueryAllThreadLockRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadLockRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadLockRecordRequest defines the QueryAllThreadLockRecordRequest message.
 * @name QueryAllThreadLockRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordRequest
 */
export interface QueryAllThreadLockRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadLockRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest";
  value: QueryAllThreadLockRecordRequestAmino;
}
/**
 * QueryAllThreadLockRecordResponse defines the QueryAllThreadLockRecordResponse message.
 * @name QueryAllThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordResponse
 */
export interface QueryAllThreadLockRecordResponse {
  threadLockRecord: ThreadLockRecord[];
  pagination?: PageResponse;
}
export interface QueryAllThreadLockRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadLockRecordResponse defines the QueryAllThreadLockRecordResponse message.
 * @name QueryAllThreadLockRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordResponse
 */
export interface QueryAllThreadLockRecordResponseAmino {
  thread_lock_record?: ThreadLockRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadLockRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse";
  value: QueryAllThreadLockRecordResponseAmino;
}
/**
 * QueryGetThreadMoveRecordRequest defines the QueryGetThreadMoveRecordRequest message.
 * @name QueryGetThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordRequest
 */
export interface QueryGetThreadMoveRecordRequest {
  rootId: bigint;
}
export interface QueryGetThreadMoveRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadMoveRecordRequest defines the QueryGetThreadMoveRecordRequest message.
 * @name QueryGetThreadMoveRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordRequest
 */
export interface QueryGetThreadMoveRecordRequestAmino {
  root_id?: string;
}
export interface QueryGetThreadMoveRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest";
  value: QueryGetThreadMoveRecordRequestAmino;
}
/**
 * QueryGetThreadMoveRecordResponse defines the QueryGetThreadMoveRecordResponse message.
 * @name QueryGetThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordResponse
 */
export interface QueryGetThreadMoveRecordResponse {
  threadMoveRecord: ThreadMoveRecord;
}
export interface QueryGetThreadMoveRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadMoveRecordResponse defines the QueryGetThreadMoveRecordResponse message.
 * @name QueryGetThreadMoveRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordResponse
 */
export interface QueryGetThreadMoveRecordResponseAmino {
  thread_move_record?: ThreadMoveRecordAmino;
}
export interface QueryGetThreadMoveRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse";
  value: QueryGetThreadMoveRecordResponseAmino;
}
/**
 * QueryAllThreadMoveRecordRequest defines the QueryAllThreadMoveRecordRequest message.
 * @name QueryAllThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordRequest
 */
export interface QueryAllThreadMoveRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadMoveRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadMoveRecordRequest defines the QueryAllThreadMoveRecordRequest message.
 * @name QueryAllThreadMoveRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordRequest
 */
export interface QueryAllThreadMoveRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadMoveRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest";
  value: QueryAllThreadMoveRecordRequestAmino;
}
/**
 * QueryAllThreadMoveRecordResponse defines the QueryAllThreadMoveRecordResponse message.
 * @name QueryAllThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordResponse
 */
export interface QueryAllThreadMoveRecordResponse {
  threadMoveRecord: ThreadMoveRecord[];
  pagination?: PageResponse;
}
export interface QueryAllThreadMoveRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadMoveRecordResponse defines the QueryAllThreadMoveRecordResponse message.
 * @name QueryAllThreadMoveRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordResponse
 */
export interface QueryAllThreadMoveRecordResponseAmino {
  thread_move_record?: ThreadMoveRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadMoveRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse";
  value: QueryAllThreadMoveRecordResponseAmino;
}
/**
 * QueryGetPostFlagRequest defines the QueryGetPostFlagRequest message.
 * @name QueryGetPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagRequest
 */
export interface QueryGetPostFlagRequest {
  postId: bigint;
}
export interface QueryGetPostFlagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagRequest";
  value: Uint8Array;
}
/**
 * QueryGetPostFlagRequest defines the QueryGetPostFlagRequest message.
 * @name QueryGetPostFlagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagRequest
 */
export interface QueryGetPostFlagRequestAmino {
  post_id?: string;
}
export interface QueryGetPostFlagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostFlagRequest";
  value: QueryGetPostFlagRequestAmino;
}
/**
 * QueryGetPostFlagResponse defines the QueryGetPostFlagResponse message.
 * @name QueryGetPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagResponse
 */
export interface QueryGetPostFlagResponse {
  postFlag: PostFlag;
}
export interface QueryGetPostFlagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagResponse";
  value: Uint8Array;
}
/**
 * QueryGetPostFlagResponse defines the QueryGetPostFlagResponse message.
 * @name QueryGetPostFlagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagResponse
 */
export interface QueryGetPostFlagResponseAmino {
  post_flag?: PostFlagAmino;
}
export interface QueryGetPostFlagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostFlagResponse";
  value: QueryGetPostFlagResponseAmino;
}
/**
 * QueryAllPostFlagRequest defines the QueryAllPostFlagRequest message.
 * @name QueryAllPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagRequest
 */
export interface QueryAllPostFlagRequest {
  pagination?: PageRequest;
}
export interface QueryAllPostFlagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagRequest";
  value: Uint8Array;
}
/**
 * QueryAllPostFlagRequest defines the QueryAllPostFlagRequest message.
 * @name QueryAllPostFlagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagRequest
 */
export interface QueryAllPostFlagRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPostFlagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostFlagRequest";
  value: QueryAllPostFlagRequestAmino;
}
/**
 * QueryAllPostFlagResponse defines the QueryAllPostFlagResponse message.
 * @name QueryAllPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagResponse
 */
export interface QueryAllPostFlagResponse {
  postFlag: PostFlag[];
  pagination?: PageResponse;
}
export interface QueryAllPostFlagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagResponse";
  value: Uint8Array;
}
/**
 * QueryAllPostFlagResponse defines the QueryAllPostFlagResponse message.
 * @name QueryAllPostFlagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagResponse
 */
export interface QueryAllPostFlagResponseAmino {
  post_flag?: PostFlagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPostFlagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostFlagResponse";
  value: QueryAllPostFlagResponseAmino;
}
/**
 * QueryGetBountyRequest defines the QueryGetBountyRequest message.
 * @name QueryGetBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyRequest
 */
export interface QueryGetBountyRequest {
  id: bigint;
}
export interface QueryGetBountyRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyRequest";
  value: Uint8Array;
}
/**
 * QueryGetBountyRequest defines the QueryGetBountyRequest message.
 * @name QueryGetBountyRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyRequest
 */
export interface QueryGetBountyRequestAmino {
  id?: string;
}
export interface QueryGetBountyRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetBountyRequest";
  value: QueryGetBountyRequestAmino;
}
/**
 * QueryGetBountyResponse defines the QueryGetBountyResponse message.
 * @name QueryGetBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyResponse
 */
export interface QueryGetBountyResponse {
  bounty: Bounty;
}
export interface QueryGetBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyResponse";
  value: Uint8Array;
}
/**
 * QueryGetBountyResponse defines the QueryGetBountyResponse message.
 * @name QueryGetBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyResponse
 */
export interface QueryGetBountyResponseAmino {
  bounty?: BountyAmino;
}
export interface QueryGetBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetBountyResponse";
  value: QueryGetBountyResponseAmino;
}
/**
 * QueryAllBountyRequest defines the QueryAllBountyRequest message.
 * @name QueryAllBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyRequest
 */
export interface QueryAllBountyRequest {
  pagination?: PageRequest;
}
export interface QueryAllBountyRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyRequest";
  value: Uint8Array;
}
/**
 * QueryAllBountyRequest defines the QueryAllBountyRequest message.
 * @name QueryAllBountyRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyRequest
 */
export interface QueryAllBountyRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllBountyRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllBountyRequest";
  value: QueryAllBountyRequestAmino;
}
/**
 * QueryAllBountyResponse defines the QueryAllBountyResponse message.
 * @name QueryAllBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyResponse
 */
export interface QueryAllBountyResponse {
  bounty: Bounty[];
  pagination?: PageResponse;
}
export interface QueryAllBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyResponse";
  value: Uint8Array;
}
/**
 * QueryAllBountyResponse defines the QueryAllBountyResponse message.
 * @name QueryAllBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyResponse
 */
export interface QueryAllBountyResponseAmino {
  bounty?: BountyAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllBountyResponse";
  value: QueryAllBountyResponseAmino;
}
/**
 * QueryGetTagBudgetRequest defines the QueryGetTagBudgetRequest message.
 * @name QueryGetTagBudgetRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetRequest
 */
export interface QueryGetTagBudgetRequest {
  id: bigint;
}
export interface QueryGetTagBudgetRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetRequest defines the QueryGetTagBudgetRequest message.
 * @name QueryGetTagBudgetRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetRequest
 */
export interface QueryGetTagBudgetRequestAmino {
  id?: string;
}
export interface QueryGetTagBudgetRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagBudgetRequest";
  value: QueryGetTagBudgetRequestAmino;
}
/**
 * QueryGetTagBudgetResponse defines the QueryGetTagBudgetResponse message.
 * @name QueryGetTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetResponse
 */
export interface QueryGetTagBudgetResponse {
  tagBudget: TagBudget;
}
export interface QueryGetTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetResponse defines the QueryGetTagBudgetResponse message.
 * @name QueryGetTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetResponse
 */
export interface QueryGetTagBudgetResponseAmino {
  tag_budget?: TagBudgetAmino;
}
export interface QueryGetTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagBudgetResponse";
  value: QueryGetTagBudgetResponseAmino;
}
/**
 * QueryAllTagBudgetRequest defines the QueryAllTagBudgetRequest message.
 * @name QueryAllTagBudgetRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetRequest
 */
export interface QueryAllTagBudgetRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagBudgetRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetRequest defines the QueryAllTagBudgetRequest message.
 * @name QueryAllTagBudgetRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetRequest
 */
export interface QueryAllTagBudgetRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagBudgetRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagBudgetRequest";
  value: QueryAllTagBudgetRequestAmino;
}
/**
 * QueryAllTagBudgetResponse defines the QueryAllTagBudgetResponse message.
 * @name QueryAllTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetResponse
 */
export interface QueryAllTagBudgetResponse {
  tagBudget: TagBudget[];
  pagination?: PageResponse;
}
export interface QueryAllTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetResponse defines the QueryAllTagBudgetResponse message.
 * @name QueryAllTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetResponse
 */
export interface QueryAllTagBudgetResponseAmino {
  tag_budget?: TagBudgetAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagBudgetResponse";
  value: QueryAllTagBudgetResponseAmino;
}
/**
 * QueryGetTagBudgetAwardRequest defines the QueryGetTagBudgetAwardRequest message.
 * @name QueryGetTagBudgetAwardRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetAwardRequest
 */
export interface QueryGetTagBudgetAwardRequest {
  id: bigint;
}
export interface QueryGetTagBudgetAwardRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetAwardRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetAwardRequest defines the QueryGetTagBudgetAwardRequest message.
 * @name QueryGetTagBudgetAwardRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetAwardRequest
 */
export interface QueryGetTagBudgetAwardRequestAmino {
  id?: string;
}
export interface QueryGetTagBudgetAwardRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagBudgetAwardRequest";
  value: QueryGetTagBudgetAwardRequestAmino;
}
/**
 * QueryGetTagBudgetAwardResponse defines the QueryGetTagBudgetAwardResponse message.
 * @name QueryGetTagBudgetAwardResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetAwardResponse
 */
export interface QueryGetTagBudgetAwardResponse {
  tagBudgetAward: TagBudgetAward;
}
export interface QueryGetTagBudgetAwardResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetAwardResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetAwardResponse defines the QueryGetTagBudgetAwardResponse message.
 * @name QueryGetTagBudgetAwardResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetAwardResponse
 */
export interface QueryGetTagBudgetAwardResponseAmino {
  tag_budget_award?: TagBudgetAwardAmino;
}
export interface QueryGetTagBudgetAwardResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagBudgetAwardResponse";
  value: QueryGetTagBudgetAwardResponseAmino;
}
/**
 * QueryAllTagBudgetAwardRequest defines the QueryAllTagBudgetAwardRequest message.
 * @name QueryAllTagBudgetAwardRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetAwardRequest
 */
export interface QueryAllTagBudgetAwardRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagBudgetAwardRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetAwardRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetAwardRequest defines the QueryAllTagBudgetAwardRequest message.
 * @name QueryAllTagBudgetAwardRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetAwardRequest
 */
export interface QueryAllTagBudgetAwardRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagBudgetAwardRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagBudgetAwardRequest";
  value: QueryAllTagBudgetAwardRequestAmino;
}
/**
 * QueryAllTagBudgetAwardResponse defines the QueryAllTagBudgetAwardResponse message.
 * @name QueryAllTagBudgetAwardResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetAwardResponse
 */
export interface QueryAllTagBudgetAwardResponse {
  tagBudgetAward: TagBudgetAward[];
  pagination?: PageResponse;
}
export interface QueryAllTagBudgetAwardResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetAwardResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetAwardResponse defines the QueryAllTagBudgetAwardResponse message.
 * @name QueryAllTagBudgetAwardResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetAwardResponse
 */
export interface QueryAllTagBudgetAwardResponseAmino {
  tag_budget_award?: TagBudgetAwardAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagBudgetAwardResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagBudgetAwardResponse";
  value: QueryAllTagBudgetAwardResponseAmino;
}
/**
 * QueryGetThreadMetadataRequest defines the QueryGetThreadMetadataRequest message.
 * @name QueryGetThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataRequest
 */
export interface QueryGetThreadMetadataRequest {
  threadId: bigint;
}
export interface QueryGetThreadMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadMetadataRequest defines the QueryGetThreadMetadataRequest message.
 * @name QueryGetThreadMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataRequest
 */
export interface QueryGetThreadMetadataRequestAmino {
  thread_id?: string;
}
export interface QueryGetThreadMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest";
  value: QueryGetThreadMetadataRequestAmino;
}
/**
 * QueryGetThreadMetadataResponse defines the QueryGetThreadMetadataResponse message.
 * @name QueryGetThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataResponse
 */
export interface QueryGetThreadMetadataResponse {
  threadMetadata: ThreadMetadata;
}
export interface QueryGetThreadMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadMetadataResponse defines the QueryGetThreadMetadataResponse message.
 * @name QueryGetThreadMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataResponse
 */
export interface QueryGetThreadMetadataResponseAmino {
  thread_metadata?: ThreadMetadataAmino;
}
export interface QueryGetThreadMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse";
  value: QueryGetThreadMetadataResponseAmino;
}
/**
 * QueryAllThreadMetadataRequest defines the QueryAllThreadMetadataRequest message.
 * @name QueryAllThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataRequest
 */
export interface QueryAllThreadMetadataRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadMetadataRequest defines the QueryAllThreadMetadataRequest message.
 * @name QueryAllThreadMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataRequest
 */
export interface QueryAllThreadMetadataRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest";
  value: QueryAllThreadMetadataRequestAmino;
}
/**
 * QueryAllThreadMetadataResponse defines the QueryAllThreadMetadataResponse message.
 * @name QueryAllThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataResponse
 */
export interface QueryAllThreadMetadataResponse {
  threadMetadata: ThreadMetadata[];
  pagination?: PageResponse;
}
export interface QueryAllThreadMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadMetadataResponse defines the QueryAllThreadMetadataResponse message.
 * @name QueryAllThreadMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataResponse
 */
export interface QueryAllThreadMetadataResponseAmino {
  thread_metadata?: ThreadMetadataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse";
  value: QueryAllThreadMetadataResponseAmino;
}
/**
 * QueryGetThreadFollowRequest defines the QueryGetThreadFollowRequest message.
 * @name QueryGetThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowRequest
 */
export interface QueryGetThreadFollowRequest {
  follower: string;
}
export interface QueryGetThreadFollowRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowRequest defines the QueryGetThreadFollowRequest message.
 * @name QueryGetThreadFollowRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowRequest
 */
export interface QueryGetThreadFollowRequestAmino {
  follower?: string;
}
export interface QueryGetThreadFollowRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowRequest";
  value: QueryGetThreadFollowRequestAmino;
}
/**
 * QueryGetThreadFollowResponse defines the QueryGetThreadFollowResponse message.
 * @name QueryGetThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowResponse
 */
export interface QueryGetThreadFollowResponse {
  threadFollow: ThreadFollow;
}
export interface QueryGetThreadFollowResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowResponse defines the QueryGetThreadFollowResponse message.
 * @name QueryGetThreadFollowResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowResponse
 */
export interface QueryGetThreadFollowResponseAmino {
  thread_follow?: ThreadFollowAmino;
}
export interface QueryGetThreadFollowResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowResponse";
  value: QueryGetThreadFollowResponseAmino;
}
/**
 * QueryAllThreadFollowRequest defines the QueryAllThreadFollowRequest message.
 * @name QueryAllThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowRequest
 */
export interface QueryAllThreadFollowRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadFollowRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowRequest defines the QueryAllThreadFollowRequest message.
 * @name QueryAllThreadFollowRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowRequest
 */
export interface QueryAllThreadFollowRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadFollowRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowRequest";
  value: QueryAllThreadFollowRequestAmino;
}
/**
 * QueryAllThreadFollowResponse defines the QueryAllThreadFollowResponse message.
 * @name QueryAllThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowResponse
 */
export interface QueryAllThreadFollowResponse {
  threadFollow: ThreadFollow[];
  pagination?: PageResponse;
}
export interface QueryAllThreadFollowResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowResponse defines the QueryAllThreadFollowResponse message.
 * @name QueryAllThreadFollowResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowResponse
 */
export interface QueryAllThreadFollowResponseAmino {
  thread_follow?: ThreadFollowAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadFollowResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowResponse";
  value: QueryAllThreadFollowResponseAmino;
}
/**
 * QueryGetThreadFollowCountRequest defines the QueryGetThreadFollowCountRequest message.
 * @name QueryGetThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountRequest
 */
export interface QueryGetThreadFollowCountRequest {
  threadId: bigint;
}
export interface QueryGetThreadFollowCountRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowCountRequest defines the QueryGetThreadFollowCountRequest message.
 * @name QueryGetThreadFollowCountRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountRequest
 */
export interface QueryGetThreadFollowCountRequestAmino {
  thread_id?: string;
}
export interface QueryGetThreadFollowCountRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest";
  value: QueryGetThreadFollowCountRequestAmino;
}
/**
 * QueryGetThreadFollowCountResponse defines the QueryGetThreadFollowCountResponse message.
 * @name QueryGetThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountResponse
 */
export interface QueryGetThreadFollowCountResponse {
  threadFollowCount: ThreadFollowCount;
}
export interface QueryGetThreadFollowCountResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowCountResponse defines the QueryGetThreadFollowCountResponse message.
 * @name QueryGetThreadFollowCountResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountResponse
 */
export interface QueryGetThreadFollowCountResponseAmino {
  thread_follow_count?: ThreadFollowCountAmino;
}
export interface QueryGetThreadFollowCountResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse";
  value: QueryGetThreadFollowCountResponseAmino;
}
/**
 * QueryAllThreadFollowCountRequest defines the QueryAllThreadFollowCountRequest message.
 * @name QueryAllThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountRequest
 */
export interface QueryAllThreadFollowCountRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadFollowCountRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowCountRequest defines the QueryAllThreadFollowCountRequest message.
 * @name QueryAllThreadFollowCountRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountRequest
 */
export interface QueryAllThreadFollowCountRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadFollowCountRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest";
  value: QueryAllThreadFollowCountRequestAmino;
}
/**
 * QueryAllThreadFollowCountResponse defines the QueryAllThreadFollowCountResponse message.
 * @name QueryAllThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountResponse
 */
export interface QueryAllThreadFollowCountResponse {
  threadFollowCount: ThreadFollowCount[];
  pagination?: PageResponse;
}
export interface QueryAllThreadFollowCountResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowCountResponse defines the QueryAllThreadFollowCountResponse message.
 * @name QueryAllThreadFollowCountResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountResponse
 */
export interface QueryAllThreadFollowCountResponseAmino {
  thread_follow_count?: ThreadFollowCountAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadFollowCountResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse";
  value: QueryAllThreadFollowCountResponseAmino;
}
/**
 * QueryGetArchiveMetadataRequest defines the QueryGetArchiveMetadataRequest message.
 * @name QueryGetArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataRequest
 */
export interface QueryGetArchiveMetadataRequest {
  rootId: bigint;
}
export interface QueryGetArchiveMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryGetArchiveMetadataRequest defines the QueryGetArchiveMetadataRequest message.
 * @name QueryGetArchiveMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataRequest
 */
export interface QueryGetArchiveMetadataRequestAmino {
  root_id?: string;
}
export interface QueryGetArchiveMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest";
  value: QueryGetArchiveMetadataRequestAmino;
}
/**
 * QueryGetArchiveMetadataResponse defines the QueryGetArchiveMetadataResponse message.
 * @name QueryGetArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataResponse
 */
export interface QueryGetArchiveMetadataResponse {
  archiveMetadata: ArchiveMetadata;
}
export interface QueryGetArchiveMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryGetArchiveMetadataResponse defines the QueryGetArchiveMetadataResponse message.
 * @name QueryGetArchiveMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataResponse
 */
export interface QueryGetArchiveMetadataResponseAmino {
  archive_metadata?: ArchiveMetadataAmino;
}
export interface QueryGetArchiveMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse";
  value: QueryGetArchiveMetadataResponseAmino;
}
/**
 * QueryAllArchiveMetadataRequest defines the QueryAllArchiveMetadataRequest message.
 * @name QueryAllArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataRequest
 */
export interface QueryAllArchiveMetadataRequest {
  pagination?: PageRequest;
}
export interface QueryAllArchiveMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryAllArchiveMetadataRequest defines the QueryAllArchiveMetadataRequest message.
 * @name QueryAllArchiveMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataRequest
 */
export interface QueryAllArchiveMetadataRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllArchiveMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest";
  value: QueryAllArchiveMetadataRequestAmino;
}
/**
 * QueryAllArchiveMetadataResponse defines the QueryAllArchiveMetadataResponse message.
 * @name QueryAllArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataResponse
 */
export interface QueryAllArchiveMetadataResponse {
  archiveMetadata: ArchiveMetadata[];
  pagination?: PageResponse;
}
export interface QueryAllArchiveMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryAllArchiveMetadataResponse defines the QueryAllArchiveMetadataResponse message.
 * @name QueryAllArchiveMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataResponse
 */
export interface QueryAllArchiveMetadataResponseAmino {
  archive_metadata?: ArchiveMetadataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllArchiveMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse";
  value: QueryAllArchiveMetadataResponseAmino;
}
/**
 * QueryGetTagReportRequest defines the QueryGetTagReportRequest message.
 * @name QueryGetTagReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagReportRequest
 */
export interface QueryGetTagReportRequest {
  tagName: string;
}
export interface QueryGetTagReportRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagReportRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagReportRequest defines the QueryGetTagReportRequest message.
 * @name QueryGetTagReportRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagReportRequest
 */
export interface QueryGetTagReportRequestAmino {
  tag_name?: string;
}
export interface QueryGetTagReportRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagReportRequest";
  value: QueryGetTagReportRequestAmino;
}
/**
 * QueryGetTagReportResponse defines the QueryGetTagReportResponse message.
 * @name QueryGetTagReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagReportResponse
 */
export interface QueryGetTagReportResponse {
  tagReport: TagReport;
}
export interface QueryGetTagReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagReportResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagReportResponse defines the QueryGetTagReportResponse message.
 * @name QueryGetTagReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagReportResponse
 */
export interface QueryGetTagReportResponseAmino {
  tag_report?: TagReportAmino;
}
export interface QueryGetTagReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetTagReportResponse";
  value: QueryGetTagReportResponseAmino;
}
/**
 * QueryAllTagReportRequest defines the QueryAllTagReportRequest message.
 * @name QueryAllTagReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagReportRequest
 */
export interface QueryAllTagReportRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagReportRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagReportRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagReportRequest defines the QueryAllTagReportRequest message.
 * @name QueryAllTagReportRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagReportRequest
 */
export interface QueryAllTagReportRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagReportRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagReportRequest";
  value: QueryAllTagReportRequestAmino;
}
/**
 * QueryAllTagReportResponse defines the QueryAllTagReportResponse message.
 * @name QueryAllTagReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagReportResponse
 */
export interface QueryAllTagReportResponse {
  tagReport: TagReport[];
  pagination?: PageResponse;
}
export interface QueryAllTagReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagReportResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagReportResponse defines the QueryAllTagReportResponse message.
 * @name QueryAllTagReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagReportResponse
 */
export interface QueryAllTagReportResponseAmino {
  tag_report?: TagReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllTagReportResponse";
  value: QueryAllTagReportResponseAmino;
}
/**
 * QueryGetMemberSalvationStatusRequest defines the QueryGetMemberSalvationStatusRequest message.
 * @name QueryGetMemberSalvationStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest
 */
export interface QueryGetMemberSalvationStatusRequest {
  address: string;
}
export interface QueryGetMemberSalvationStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberSalvationStatusRequest defines the QueryGetMemberSalvationStatusRequest message.
 * @name QueryGetMemberSalvationStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest
 */
export interface QueryGetMemberSalvationStatusRequestAmino {
  address?: string;
}
export interface QueryGetMemberSalvationStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest";
  value: QueryGetMemberSalvationStatusRequestAmino;
}
/**
 * QueryGetMemberSalvationStatusResponse defines the QueryGetMemberSalvationStatusResponse message.
 * @name QueryGetMemberSalvationStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse
 */
export interface QueryGetMemberSalvationStatusResponse {
  memberSalvationStatus: MemberSalvationStatus;
}
export interface QueryGetMemberSalvationStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberSalvationStatusResponse defines the QueryGetMemberSalvationStatusResponse message.
 * @name QueryGetMemberSalvationStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse
 */
export interface QueryGetMemberSalvationStatusResponseAmino {
  member_salvation_status?: MemberSalvationStatusAmino;
}
export interface QueryGetMemberSalvationStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse";
  value: QueryGetMemberSalvationStatusResponseAmino;
}
/**
 * QueryAllMemberSalvationStatusRequest defines the QueryAllMemberSalvationStatusRequest message.
 * @name QueryAllMemberSalvationStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest
 */
export interface QueryAllMemberSalvationStatusRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberSalvationStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberSalvationStatusRequest defines the QueryAllMemberSalvationStatusRequest message.
 * @name QueryAllMemberSalvationStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest
 */
export interface QueryAllMemberSalvationStatusRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberSalvationStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest";
  value: QueryAllMemberSalvationStatusRequestAmino;
}
/**
 * QueryAllMemberSalvationStatusResponse defines the QueryAllMemberSalvationStatusResponse message.
 * @name QueryAllMemberSalvationStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse
 */
export interface QueryAllMemberSalvationStatusResponse {
  memberSalvationStatus: MemberSalvationStatus[];
  pagination?: PageResponse;
}
export interface QueryAllMemberSalvationStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberSalvationStatusResponse defines the QueryAllMemberSalvationStatusResponse message.
 * @name QueryAllMemberSalvationStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse
 */
export interface QueryAllMemberSalvationStatusResponseAmino {
  member_salvation_status?: MemberSalvationStatusAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberSalvationStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse";
  value: QueryAllMemberSalvationStatusResponseAmino;
}
/**
 * QueryGetJuryParticipationRequest defines the QueryGetJuryParticipationRequest message.
 * @name QueryGetJuryParticipationRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetJuryParticipationRequest
 */
export interface QueryGetJuryParticipationRequest {
  juror: string;
}
export interface QueryGetJuryParticipationRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetJuryParticipationRequest";
  value: Uint8Array;
}
/**
 * QueryGetJuryParticipationRequest defines the QueryGetJuryParticipationRequest message.
 * @name QueryGetJuryParticipationRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetJuryParticipationRequest
 */
export interface QueryGetJuryParticipationRequestAmino {
  juror?: string;
}
export interface QueryGetJuryParticipationRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetJuryParticipationRequest";
  value: QueryGetJuryParticipationRequestAmino;
}
/**
 * QueryGetJuryParticipationResponse defines the QueryGetJuryParticipationResponse message.
 * @name QueryGetJuryParticipationResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetJuryParticipationResponse
 */
export interface QueryGetJuryParticipationResponse {
  juryParticipation: JuryParticipation;
}
export interface QueryGetJuryParticipationResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetJuryParticipationResponse";
  value: Uint8Array;
}
/**
 * QueryGetJuryParticipationResponse defines the QueryGetJuryParticipationResponse message.
 * @name QueryGetJuryParticipationResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetJuryParticipationResponse
 */
export interface QueryGetJuryParticipationResponseAmino {
  jury_participation?: JuryParticipationAmino;
}
export interface QueryGetJuryParticipationResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetJuryParticipationResponse";
  value: QueryGetJuryParticipationResponseAmino;
}
/**
 * QueryAllJuryParticipationRequest defines the QueryAllJuryParticipationRequest message.
 * @name QueryAllJuryParticipationRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllJuryParticipationRequest
 */
export interface QueryAllJuryParticipationRequest {
  pagination?: PageRequest;
}
export interface QueryAllJuryParticipationRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllJuryParticipationRequest";
  value: Uint8Array;
}
/**
 * QueryAllJuryParticipationRequest defines the QueryAllJuryParticipationRequest message.
 * @name QueryAllJuryParticipationRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllJuryParticipationRequest
 */
export interface QueryAllJuryParticipationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllJuryParticipationRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllJuryParticipationRequest";
  value: QueryAllJuryParticipationRequestAmino;
}
/**
 * QueryAllJuryParticipationResponse defines the QueryAllJuryParticipationResponse message.
 * @name QueryAllJuryParticipationResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllJuryParticipationResponse
 */
export interface QueryAllJuryParticipationResponse {
  juryParticipation: JuryParticipation[];
  pagination?: PageResponse;
}
export interface QueryAllJuryParticipationResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllJuryParticipationResponse";
  value: Uint8Array;
}
/**
 * QueryAllJuryParticipationResponse defines the QueryAllJuryParticipationResponse message.
 * @name QueryAllJuryParticipationResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllJuryParticipationResponse
 */
export interface QueryAllJuryParticipationResponseAmino {
  jury_participation?: JuryParticipationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllJuryParticipationResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllJuryParticipationResponse";
  value: QueryAllJuryParticipationResponseAmino;
}
/**
 * QueryGetMemberReportRequest defines the QueryGetMemberReportRequest message.
 * @name QueryGetMemberReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberReportRequest
 */
export interface QueryGetMemberReportRequest {
  member: string;
}
export interface QueryGetMemberReportRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberReportRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberReportRequest defines the QueryGetMemberReportRequest message.
 * @name QueryGetMemberReportRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberReportRequest
 */
export interface QueryGetMemberReportRequestAmino {
  member?: string;
}
export interface QueryGetMemberReportRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetMemberReportRequest";
  value: QueryGetMemberReportRequestAmino;
}
/**
 * QueryGetMemberReportResponse defines the QueryGetMemberReportResponse message.
 * @name QueryGetMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberReportResponse
 */
export interface QueryGetMemberReportResponse {
  memberReport: MemberReport;
}
export interface QueryGetMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberReportResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberReportResponse defines the QueryGetMemberReportResponse message.
 * @name QueryGetMemberReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberReportResponse
 */
export interface QueryGetMemberReportResponseAmino {
  member_report?: MemberReportAmino;
}
export interface QueryGetMemberReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetMemberReportResponse";
  value: QueryGetMemberReportResponseAmino;
}
/**
 * QueryAllMemberReportRequest defines the QueryAllMemberReportRequest message.
 * @name QueryAllMemberReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberReportRequest
 */
export interface QueryAllMemberReportRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberReportRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberReportRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberReportRequest defines the QueryAllMemberReportRequest message.
 * @name QueryAllMemberReportRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberReportRequest
 */
export interface QueryAllMemberReportRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberReportRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllMemberReportRequest";
  value: QueryAllMemberReportRequestAmino;
}
/**
 * QueryAllMemberReportResponse defines the QueryAllMemberReportResponse message.
 * @name QueryAllMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberReportResponse
 */
export interface QueryAllMemberReportResponse {
  memberReport: MemberReport[];
  pagination?: PageResponse;
}
export interface QueryAllMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberReportResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberReportResponse defines the QueryAllMemberReportResponse message.
 * @name QueryAllMemberReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberReportResponse
 */
export interface QueryAllMemberReportResponseAmino {
  member_report?: MemberReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllMemberReportResponse";
  value: QueryAllMemberReportResponseAmino;
}
/**
 * QueryGetMemberWarningRequest defines the QueryGetMemberWarningRequest message.
 * @name QueryGetMemberWarningRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberWarningRequest
 */
export interface QueryGetMemberWarningRequest {
  id: bigint;
}
export interface QueryGetMemberWarningRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberWarningRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberWarningRequest defines the QueryGetMemberWarningRequest message.
 * @name QueryGetMemberWarningRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberWarningRequest
 */
export interface QueryGetMemberWarningRequestAmino {
  id?: string;
}
export interface QueryGetMemberWarningRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetMemberWarningRequest";
  value: QueryGetMemberWarningRequestAmino;
}
/**
 * QueryGetMemberWarningResponse defines the QueryGetMemberWarningResponse message.
 * @name QueryGetMemberWarningResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberWarningResponse
 */
export interface QueryGetMemberWarningResponse {
  memberWarning: MemberWarning;
}
export interface QueryGetMemberWarningResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberWarningResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberWarningResponse defines the QueryGetMemberWarningResponse message.
 * @name QueryGetMemberWarningResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberWarningResponse
 */
export interface QueryGetMemberWarningResponseAmino {
  member_warning?: MemberWarningAmino;
}
export interface QueryGetMemberWarningResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetMemberWarningResponse";
  value: QueryGetMemberWarningResponseAmino;
}
/**
 * QueryAllMemberWarningRequest defines the QueryAllMemberWarningRequest message.
 * @name QueryAllMemberWarningRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberWarningRequest
 */
export interface QueryAllMemberWarningRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberWarningRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberWarningRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberWarningRequest defines the QueryAllMemberWarningRequest message.
 * @name QueryAllMemberWarningRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberWarningRequest
 */
export interface QueryAllMemberWarningRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberWarningRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllMemberWarningRequest";
  value: QueryAllMemberWarningRequestAmino;
}
/**
 * QueryAllMemberWarningResponse defines the QueryAllMemberWarningResponse message.
 * @name QueryAllMemberWarningResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberWarningResponse
 */
export interface QueryAllMemberWarningResponse {
  memberWarning: MemberWarning[];
  pagination?: PageResponse;
}
export interface QueryAllMemberWarningResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberWarningResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberWarningResponse defines the QueryAllMemberWarningResponse message.
 * @name QueryAllMemberWarningResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberWarningResponse
 */
export interface QueryAllMemberWarningResponseAmino {
  member_warning?: MemberWarningAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberWarningResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllMemberWarningResponse";
  value: QueryAllMemberWarningResponseAmino;
}
/**
 * QueryGetGovActionAppealRequest defines the QueryGetGovActionAppealRequest message.
 * @name QueryGetGovActionAppealRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetGovActionAppealRequest
 */
export interface QueryGetGovActionAppealRequest {
  id: bigint;
}
export interface QueryGetGovActionAppealRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetGovActionAppealRequest";
  value: Uint8Array;
}
/**
 * QueryGetGovActionAppealRequest defines the QueryGetGovActionAppealRequest message.
 * @name QueryGetGovActionAppealRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetGovActionAppealRequest
 */
export interface QueryGetGovActionAppealRequestAmino {
  id?: string;
}
export interface QueryGetGovActionAppealRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetGovActionAppealRequest";
  value: QueryGetGovActionAppealRequestAmino;
}
/**
 * QueryGetGovActionAppealResponse defines the QueryGetGovActionAppealResponse message.
 * @name QueryGetGovActionAppealResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetGovActionAppealResponse
 */
export interface QueryGetGovActionAppealResponse {
  govActionAppeal: GovActionAppeal;
}
export interface QueryGetGovActionAppealResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetGovActionAppealResponse";
  value: Uint8Array;
}
/**
 * QueryGetGovActionAppealResponse defines the QueryGetGovActionAppealResponse message.
 * @name QueryGetGovActionAppealResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetGovActionAppealResponse
 */
export interface QueryGetGovActionAppealResponseAmino {
  gov_action_appeal?: GovActionAppealAmino;
}
export interface QueryGetGovActionAppealResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetGovActionAppealResponse";
  value: QueryGetGovActionAppealResponseAmino;
}
/**
 * QueryAllGovActionAppealRequest defines the QueryAllGovActionAppealRequest message.
 * @name QueryAllGovActionAppealRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllGovActionAppealRequest
 */
export interface QueryAllGovActionAppealRequest {
  pagination?: PageRequest;
}
export interface QueryAllGovActionAppealRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllGovActionAppealRequest";
  value: Uint8Array;
}
/**
 * QueryAllGovActionAppealRequest defines the QueryAllGovActionAppealRequest message.
 * @name QueryAllGovActionAppealRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllGovActionAppealRequest
 */
export interface QueryAllGovActionAppealRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGovActionAppealRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllGovActionAppealRequest";
  value: QueryAllGovActionAppealRequestAmino;
}
/**
 * QueryAllGovActionAppealResponse defines the QueryAllGovActionAppealResponse message.
 * @name QueryAllGovActionAppealResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllGovActionAppealResponse
 */
export interface QueryAllGovActionAppealResponse {
  govActionAppeal: GovActionAppeal[];
  pagination?: PageResponse;
}
export interface QueryAllGovActionAppealResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllGovActionAppealResponse";
  value: Uint8Array;
}
/**
 * QueryAllGovActionAppealResponse defines the QueryAllGovActionAppealResponse message.
 * @name QueryAllGovActionAppealResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllGovActionAppealResponse
 */
export interface QueryAllGovActionAppealResponseAmino {
  gov_action_appeal?: GovActionAppealAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGovActionAppealResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllGovActionAppealResponse";
  value: QueryAllGovActionAppealResponseAmino;
}
/**
 * QueryPostsRequest defines the QueryPostsRequest message.
 * @name QueryPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsRequest
 */
export interface QueryPostsRequest {
  categoryId: bigint;
  status: bigint;
  pagination?: PageRequest;
}
export interface QueryPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostsRequest";
  value: Uint8Array;
}
/**
 * QueryPostsRequest defines the QueryPostsRequest message.
 * @name QueryPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsRequest
 */
export interface QueryPostsRequestAmino {
  category_id?: string;
  status?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostsRequest";
  value: QueryPostsRequestAmino;
}
/**
 * QueryPostsResponse defines the QueryPostsResponse message.
 * @name QueryPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsResponse
 */
export interface QueryPostsResponse {
  postId: bigint;
  author: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostsResponse";
  value: Uint8Array;
}
/**
 * QueryPostsResponse defines the QueryPostsResponse message.
 * @name QueryPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsResponse
 */
export interface QueryPostsResponseAmino {
  post_id?: string;
  author?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostsResponse";
  value: QueryPostsResponseAmino;
}
/**
 * QueryThreadRequest defines the QueryThreadRequest message.
 * @name QueryThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadRequest
 */
export interface QueryThreadRequest {
  rootId: bigint;
  pagination?: PageRequest;
}
export interface QueryThreadRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadRequest";
  value: Uint8Array;
}
/**
 * QueryThreadRequest defines the QueryThreadRequest message.
 * @name QueryThreadRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadRequest
 */
export interface QueryThreadRequestAmino {
  root_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryThreadRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadRequest";
  value: QueryThreadRequestAmino;
}
/**
 * QueryThreadResponse defines the QueryThreadResponse message.
 * @name QueryThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadResponse
 */
export interface QueryThreadResponse {
  postId: bigint;
  author: string;
  parentId: bigint;
  depth: bigint;
  pagination?: PageResponse;
}
export interface QueryThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadResponse";
  value: Uint8Array;
}
/**
 * QueryThreadResponse defines the QueryThreadResponse message.
 * @name QueryThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadResponse
 */
export interface QueryThreadResponseAmino {
  post_id?: string;
  author?: string;
  parent_id?: string;
  depth?: string;
  pagination?: PageResponseAmino;
}
export interface QueryThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadResponse";
  value: QueryThreadResponseAmino;
}
/**
 * QueryCategoriesRequest defines the QueryCategoriesRequest message.
 * @name QueryCategoriesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryCategoriesRequest
 */
export interface QueryCategoriesRequest {
  pagination?: PageRequest;
}
export interface QueryCategoriesRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryCategoriesRequest";
  value: Uint8Array;
}
/**
 * QueryCategoriesRequest defines the QueryCategoriesRequest message.
 * @name QueryCategoriesRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryCategoriesRequest
 */
export interface QueryCategoriesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryCategoriesRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryCategoriesRequest";
  value: QueryCategoriesRequestAmino;
}
/**
 * QueryCategoriesResponse defines the QueryCategoriesResponse message.
 * @name QueryCategoriesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryCategoriesResponse
 */
export interface QueryCategoriesResponse {
  categoryId: bigint;
  title: string;
  pagination?: PageResponse;
}
export interface QueryCategoriesResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryCategoriesResponse";
  value: Uint8Array;
}
/**
 * QueryCategoriesResponse defines the QueryCategoriesResponse message.
 * @name QueryCategoriesResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryCategoriesResponse
 */
export interface QueryCategoriesResponseAmino {
  category_id?: string;
  title?: string;
  pagination?: PageResponseAmino;
}
export interface QueryCategoriesResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryCategoriesResponse";
  value: QueryCategoriesResponseAmino;
}
/**
 * QueryUserPostsRequest defines the QueryUserPostsRequest message.
 * @name QueryUserPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsRequest
 */
export interface QueryUserPostsRequest {
  author: string;
  pagination?: PageRequest;
}
export interface QueryUserPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsRequest";
  value: Uint8Array;
}
/**
 * QueryUserPostsRequest defines the QueryUserPostsRequest message.
 * @name QueryUserPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsRequest
 */
export interface QueryUserPostsRequestAmino {
  author?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserPostsRequest";
  value: QueryUserPostsRequestAmino;
}
/**
 * QueryUserPostsResponse defines the QueryUserPostsResponse message.
 * @name QueryUserPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsResponse
 */
export interface QueryUserPostsResponse {
  postId: bigint;
  categoryId: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryUserPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsResponse";
  value: Uint8Array;
}
/**
 * QueryUserPostsResponse defines the QueryUserPostsResponse message.
 * @name QueryUserPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsResponse
 */
export interface QueryUserPostsResponseAmino {
  post_id?: string;
  category_id?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryUserPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserPostsResponse";
  value: QueryUserPostsResponseAmino;
}
/**
 * QuerySentinelStatusRequest defines the QuerySentinelStatusRequest message.
 * @name QuerySentinelStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelStatusRequest
 */
export interface QuerySentinelStatusRequest {
  address: string;
}
export interface QuerySentinelStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelStatusRequest";
  value: Uint8Array;
}
/**
 * QuerySentinelStatusRequest defines the QuerySentinelStatusRequest message.
 * @name QuerySentinelStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelStatusRequest
 */
export interface QuerySentinelStatusRequestAmino {
  address?: string;
}
export interface QuerySentinelStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QuerySentinelStatusRequest";
  value: QuerySentinelStatusRequestAmino;
}
/**
 * QuerySentinelStatusResponse defines the QuerySentinelStatusResponse message.
 * @name QuerySentinelStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelStatusResponse
 */
export interface QuerySentinelStatusResponse {
  address: string;
  bondStatus: bigint;
  currentBond: string;
  accuracyRate: string;
}
export interface QuerySentinelStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelStatusResponse";
  value: Uint8Array;
}
/**
 * QuerySentinelStatusResponse defines the QuerySentinelStatusResponse message.
 * @name QuerySentinelStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelStatusResponse
 */
export interface QuerySentinelStatusResponseAmino {
  address?: string;
  bond_status?: string;
  current_bond?: string;
  accuracy_rate?: string;
}
export interface QuerySentinelStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QuerySentinelStatusResponse";
  value: QuerySentinelStatusResponseAmino;
}
/**
 * QuerySentinelBondCommitmentRequest defines the QuerySentinelBondCommitmentRequest message.
 * @name QuerySentinelBondCommitmentRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelBondCommitmentRequest
 */
export interface QuerySentinelBondCommitmentRequest {
  address: string;
}
export interface QuerySentinelBondCommitmentRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelBondCommitmentRequest";
  value: Uint8Array;
}
/**
 * QuerySentinelBondCommitmentRequest defines the QuerySentinelBondCommitmentRequest message.
 * @name QuerySentinelBondCommitmentRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelBondCommitmentRequest
 */
export interface QuerySentinelBondCommitmentRequestAmino {
  address?: string;
}
export interface QuerySentinelBondCommitmentRequestAminoMsg {
  type: "/sparkdream.forum.v1.QuerySentinelBondCommitmentRequest";
  value: QuerySentinelBondCommitmentRequestAmino;
}
/**
 * QuerySentinelBondCommitmentResponse defines the QuerySentinelBondCommitmentResponse message.
 * @name QuerySentinelBondCommitmentResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelBondCommitmentResponse
 */
export interface QuerySentinelBondCommitmentResponse {
  currentBond: string;
  totalCommittedBond: string;
  availableBond: string;
}
export interface QuerySentinelBondCommitmentResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelBondCommitmentResponse";
  value: Uint8Array;
}
/**
 * QuerySentinelBondCommitmentResponse defines the QuerySentinelBondCommitmentResponse message.
 * @name QuerySentinelBondCommitmentResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelBondCommitmentResponse
 */
export interface QuerySentinelBondCommitmentResponseAmino {
  current_bond?: string;
  total_committed_bond?: string;
  available_bond?: string;
}
export interface QuerySentinelBondCommitmentResponseAminoMsg {
  type: "/sparkdream.forum.v1.QuerySentinelBondCommitmentResponse";
  value: QuerySentinelBondCommitmentResponseAmino;
}
/**
 * QueryArchiveCooldownRequest defines the QueryArchiveCooldownRequest message.
 * @name QueryArchiveCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownRequest
 */
export interface QueryArchiveCooldownRequest {
  rootId: bigint;
}
export interface QueryArchiveCooldownRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownRequest";
  value: Uint8Array;
}
/**
 * QueryArchiveCooldownRequest defines the QueryArchiveCooldownRequest message.
 * @name QueryArchiveCooldownRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownRequest
 */
export interface QueryArchiveCooldownRequestAmino {
  root_id?: string;
}
export interface QueryArchiveCooldownRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryArchiveCooldownRequest";
  value: QueryArchiveCooldownRequestAmino;
}
/**
 * QueryArchiveCooldownResponse defines the QueryArchiveCooldownResponse message.
 * @name QueryArchiveCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownResponse
 */
export interface QueryArchiveCooldownResponse {
  inCooldown: boolean;
  cooldownEnds: bigint;
}
export interface QueryArchiveCooldownResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownResponse";
  value: Uint8Array;
}
/**
 * QueryArchiveCooldownResponse defines the QueryArchiveCooldownResponse message.
 * @name QueryArchiveCooldownResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownResponse
 */
export interface QueryArchiveCooldownResponseAmino {
  in_cooldown?: boolean;
  cooldown_ends?: string;
}
export interface QueryArchiveCooldownResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryArchiveCooldownResponse";
  value: QueryArchiveCooldownResponseAmino;
}
/**
 * QueryTagExistsRequest defines the QueryTagExistsRequest message.
 * @name QueryTagExistsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagExistsRequest
 */
export interface QueryTagExistsRequest {
  tagName: string;
}
export interface QueryTagExistsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagExistsRequest";
  value: Uint8Array;
}
/**
 * QueryTagExistsRequest defines the QueryTagExistsRequest message.
 * @name QueryTagExistsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagExistsRequest
 */
export interface QueryTagExistsRequestAmino {
  tag_name?: string;
}
export interface QueryTagExistsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagExistsRequest";
  value: QueryTagExistsRequestAmino;
}
/**
 * QueryTagExistsResponse defines the QueryTagExistsResponse message.
 * @name QueryTagExistsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagExistsResponse
 */
export interface QueryTagExistsResponse {
  exists: boolean;
  expirationTime: bigint;
}
export interface QueryTagExistsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagExistsResponse";
  value: Uint8Array;
}
/**
 * QueryTagExistsResponse defines the QueryTagExistsResponse message.
 * @name QueryTagExistsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagExistsResponse
 */
export interface QueryTagExistsResponseAmino {
  exists?: boolean;
  expiration_time?: string;
}
export interface QueryTagExistsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagExistsResponse";
  value: QueryTagExistsResponseAmino;
}
/**
 * QueryTagReportsRequest defines the QueryTagReportsRequest message.
 * @name QueryTagReportsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagReportsRequest
 */
export interface QueryTagReportsRequest {
  pagination?: PageRequest;
}
export interface QueryTagReportsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagReportsRequest";
  value: Uint8Array;
}
/**
 * QueryTagReportsRequest defines the QueryTagReportsRequest message.
 * @name QueryTagReportsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagReportsRequest
 */
export interface QueryTagReportsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTagReportsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagReportsRequest";
  value: QueryTagReportsRequestAmino;
}
/**
 * QueryTagReportsResponse defines the QueryTagReportsResponse message.
 * @name QueryTagReportsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagReportsResponse
 */
export interface QueryTagReportsResponse {
  tagName: string;
  underReview: boolean;
  pagination?: PageResponse;
}
export interface QueryTagReportsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagReportsResponse";
  value: Uint8Array;
}
/**
 * QueryTagReportsResponse defines the QueryTagReportsResponse message.
 * @name QueryTagReportsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagReportsResponse
 */
export interface QueryTagReportsResponseAmino {
  tag_name?: string;
  under_review?: boolean;
  pagination?: PageResponseAmino;
}
export interface QueryTagReportsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagReportsResponse";
  value: QueryTagReportsResponseAmino;
}
/**
 * QueryForumStatusRequest defines the QueryForumStatusRequest message.
 * @name QueryForumStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusRequest
 */
export interface QueryForumStatusRequest {}
export interface QueryForumStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusRequest";
  value: Uint8Array;
}
/**
 * QueryForumStatusRequest defines the QueryForumStatusRequest message.
 * @name QueryForumStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusRequest
 */
export interface QueryForumStatusRequestAmino {}
export interface QueryForumStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryForumStatusRequest";
  value: QueryForumStatusRequestAmino;
}
/**
 * QueryForumStatusResponse defines the QueryForumStatusResponse message.
 * @name QueryForumStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusResponse
 */
export interface QueryForumStatusResponse {
  forumPaused: boolean;
  moderationPaused: boolean;
  currentEpoch: bigint;
}
export interface QueryForumStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusResponse";
  value: Uint8Array;
}
/**
 * QueryForumStatusResponse defines the QueryForumStatusResponse message.
 * @name QueryForumStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusResponse
 */
export interface QueryForumStatusResponseAmino {
  forum_paused?: boolean;
  moderation_paused?: boolean;
  current_epoch?: string;
}
export interface QueryForumStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryForumStatusResponse";
  value: QueryForumStatusResponseAmino;
}
/**
 * QueryAppealCooldownRequest defines the QueryAppealCooldownRequest message.
 * @name QueryAppealCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownRequest
 */
export interface QueryAppealCooldownRequest {
  postId: bigint;
}
export interface QueryAppealCooldownRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownRequest";
  value: Uint8Array;
}
/**
 * QueryAppealCooldownRequest defines the QueryAppealCooldownRequest message.
 * @name QueryAppealCooldownRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownRequest
 */
export interface QueryAppealCooldownRequestAmino {
  post_id?: string;
}
export interface QueryAppealCooldownRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAppealCooldownRequest";
  value: QueryAppealCooldownRequestAmino;
}
/**
 * QueryAppealCooldownResponse defines the QueryAppealCooldownResponse message.
 * @name QueryAppealCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownResponse
 */
export interface QueryAppealCooldownResponse {
  inCooldown: boolean;
  cooldownEnds: bigint;
}
export interface QueryAppealCooldownResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownResponse";
  value: Uint8Array;
}
/**
 * QueryAppealCooldownResponse defines the QueryAppealCooldownResponse message.
 * @name QueryAppealCooldownResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownResponse
 */
export interface QueryAppealCooldownResponseAmino {
  in_cooldown?: boolean;
  cooldown_ends?: string;
}
export interface QueryAppealCooldownResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAppealCooldownResponse";
  value: QueryAppealCooldownResponseAmino;
}
/**
 * QueryMemberReportsRequest defines the QueryMemberReportsRequest message.
 * @name QueryMemberReportsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberReportsRequest
 */
export interface QueryMemberReportsRequest {
  pagination?: PageRequest;
}
export interface QueryMemberReportsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryMemberReportsRequest";
  value: Uint8Array;
}
/**
 * QueryMemberReportsRequest defines the QueryMemberReportsRequest message.
 * @name QueryMemberReportsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberReportsRequest
 */
export interface QueryMemberReportsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryMemberReportsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryMemberReportsRequest";
  value: QueryMemberReportsRequestAmino;
}
/**
 * QueryMemberReportsResponse defines the QueryMemberReportsResponse message.
 * @name QueryMemberReportsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberReportsResponse
 */
export interface QueryMemberReportsResponse {
  member: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberReportsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryMemberReportsResponse";
  value: Uint8Array;
}
/**
 * QueryMemberReportsResponse defines the QueryMemberReportsResponse message.
 * @name QueryMemberReportsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberReportsResponse
 */
export interface QueryMemberReportsResponseAmino {
  member?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberReportsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryMemberReportsResponse";
  value: QueryMemberReportsResponseAmino;
}
/**
 * QueryMemberWarningsRequest defines the QueryMemberWarningsRequest message.
 * @name QueryMemberWarningsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberWarningsRequest
 */
export interface QueryMemberWarningsRequest {
  member: string;
  pagination?: PageRequest;
}
export interface QueryMemberWarningsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryMemberWarningsRequest";
  value: Uint8Array;
}
/**
 * QueryMemberWarningsRequest defines the QueryMemberWarningsRequest message.
 * @name QueryMemberWarningsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberWarningsRequest
 */
export interface QueryMemberWarningsRequestAmino {
  member?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMemberWarningsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryMemberWarningsRequest";
  value: QueryMemberWarningsRequestAmino;
}
/**
 * QueryMemberWarningsResponse defines the QueryMemberWarningsResponse message.
 * @name QueryMemberWarningsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberWarningsResponse
 */
export interface QueryMemberWarningsResponse {
  warningNumber: bigint;
  reason: string;
  issuedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberWarningsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryMemberWarningsResponse";
  value: Uint8Array;
}
/**
 * QueryMemberWarningsResponse defines the QueryMemberWarningsResponse message.
 * @name QueryMemberWarningsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberWarningsResponse
 */
export interface QueryMemberWarningsResponseAmino {
  warning_number?: string;
  reason?: string;
  issued_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberWarningsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryMemberWarningsResponse";
  value: QueryMemberWarningsResponseAmino;
}
/**
 * QueryMemberStandingRequest defines the QueryMemberStandingRequest message.
 * @name QueryMemberStandingRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberStandingRequest
 */
export interface QueryMemberStandingRequest {
  member: string;
}
export interface QueryMemberStandingRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryMemberStandingRequest";
  value: Uint8Array;
}
/**
 * QueryMemberStandingRequest defines the QueryMemberStandingRequest message.
 * @name QueryMemberStandingRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberStandingRequest
 */
export interface QueryMemberStandingRequestAmino {
  member?: string;
}
export interface QueryMemberStandingRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryMemberStandingRequest";
  value: QueryMemberStandingRequestAmino;
}
/**
 * QueryMemberStandingResponse defines the QueryMemberStandingResponse message.
 * @name QueryMemberStandingResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberStandingResponse
 */
export interface QueryMemberStandingResponse {
  warningCount: bigint;
  activeReport: boolean;
  trustTier: bigint;
}
export interface QueryMemberStandingResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryMemberStandingResponse";
  value: Uint8Array;
}
/**
 * QueryMemberStandingResponse defines the QueryMemberStandingResponse message.
 * @name QueryMemberStandingResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberStandingResponse
 */
export interface QueryMemberStandingResponseAmino {
  warning_count?: string;
  active_report?: boolean;
  trust_tier?: string;
}
export interface QueryMemberStandingResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryMemberStandingResponse";
  value: QueryMemberStandingResponseAmino;
}
/**
 * QueryPinnedPostsRequest defines the QueryPinnedPostsRequest message.
 * @name QueryPinnedPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsRequest
 */
export interface QueryPinnedPostsRequest {
  categoryId: bigint;
  pagination?: PageRequest;
}
export interface QueryPinnedPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsRequest";
  value: Uint8Array;
}
/**
 * QueryPinnedPostsRequest defines the QueryPinnedPostsRequest message.
 * @name QueryPinnedPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsRequest
 */
export interface QueryPinnedPostsRequestAmino {
  category_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPinnedPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPinnedPostsRequest";
  value: QueryPinnedPostsRequestAmino;
}
/**
 * QueryPinnedPostsResponse defines the QueryPinnedPostsResponse message.
 * @name QueryPinnedPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsResponse
 */
export interface QueryPinnedPostsResponse {
  postId: bigint;
  priority: bigint;
  pinnedBy: string;
  pagination?: PageResponse;
}
export interface QueryPinnedPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsResponse";
  value: Uint8Array;
}
/**
 * QueryPinnedPostsResponse defines the QueryPinnedPostsResponse message.
 * @name QueryPinnedPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsResponse
 */
export interface QueryPinnedPostsResponseAmino {
  post_id?: string;
  priority?: string;
  pinned_by?: string;
  pagination?: PageResponseAmino;
}
export interface QueryPinnedPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPinnedPostsResponse";
  value: QueryPinnedPostsResponseAmino;
}
/**
 * QueryLockedThreadsRequest defines the QueryLockedThreadsRequest message.
 * @name QueryLockedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsRequest
 */
export interface QueryLockedThreadsRequest {
  pagination?: PageRequest;
}
export interface QueryLockedThreadsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsRequest";
  value: Uint8Array;
}
/**
 * QueryLockedThreadsRequest defines the QueryLockedThreadsRequest message.
 * @name QueryLockedThreadsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsRequest
 */
export interface QueryLockedThreadsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryLockedThreadsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryLockedThreadsRequest";
  value: QueryLockedThreadsRequestAmino;
}
/**
 * QueryLockedThreadsResponse defines the QueryLockedThreadsResponse message.
 * @name QueryLockedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsResponse
 */
export interface QueryLockedThreadsResponse {
  rootId: bigint;
  lockedBy: string;
  lockedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryLockedThreadsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsResponse";
  value: Uint8Array;
}
/**
 * QueryLockedThreadsResponse defines the QueryLockedThreadsResponse message.
 * @name QueryLockedThreadsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsResponse
 */
export interface QueryLockedThreadsResponseAmino {
  root_id?: string;
  locked_by?: string;
  locked_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryLockedThreadsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryLockedThreadsResponse";
  value: QueryLockedThreadsResponseAmino;
}
/**
 * QueryThreadLockStatusRequest defines the QueryThreadLockStatusRequest message.
 * @name QueryThreadLockStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusRequest
 */
export interface QueryThreadLockStatusRequest {
  rootId: bigint;
}
export interface QueryThreadLockStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusRequest";
  value: Uint8Array;
}
/**
 * QueryThreadLockStatusRequest defines the QueryThreadLockStatusRequest message.
 * @name QueryThreadLockStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusRequest
 */
export interface QueryThreadLockStatusRequestAmino {
  root_id?: string;
}
export interface QueryThreadLockStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadLockStatusRequest";
  value: QueryThreadLockStatusRequestAmino;
}
/**
 * QueryThreadLockStatusResponse defines the QueryThreadLockStatusResponse message.
 * @name QueryThreadLockStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusResponse
 */
export interface QueryThreadLockStatusResponse {
  locked: boolean;
  lockedBy: string;
  reason: string;
  isSentinelLock: boolean;
}
export interface QueryThreadLockStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusResponse";
  value: Uint8Array;
}
/**
 * QueryThreadLockStatusResponse defines the QueryThreadLockStatusResponse message.
 * @name QueryThreadLockStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusResponse
 */
export interface QueryThreadLockStatusResponseAmino {
  locked?: boolean;
  locked_by?: string;
  reason?: string;
  is_sentinel_lock?: boolean;
}
export interface QueryThreadLockStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadLockStatusResponse";
  value: QueryThreadLockStatusResponseAmino;
}
/**
 * QueryTopPostsRequest defines the QueryTopPostsRequest message.
 * @name QueryTopPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsRequest
 */
export interface QueryTopPostsRequest {
  categoryId: bigint;
  timeRange: bigint;
  pagination?: PageRequest;
}
export interface QueryTopPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsRequest";
  value: Uint8Array;
}
/**
 * QueryTopPostsRequest defines the QueryTopPostsRequest message.
 * @name QueryTopPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsRequest
 */
export interface QueryTopPostsRequestAmino {
  category_id?: string;
  time_range?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTopPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTopPostsRequest";
  value: QueryTopPostsRequestAmino;
}
/**
 * QueryTopPostsResponse defines the QueryTopPostsResponse message.
 * @name QueryTopPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsResponse
 */
export interface QueryTopPostsResponse {
  postId: bigint;
  upvoteCount: bigint;
  downvoteCount: bigint;
  pagination?: PageResponse;
}
export interface QueryTopPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsResponse";
  value: Uint8Array;
}
/**
 * QueryTopPostsResponse defines the QueryTopPostsResponse message.
 * @name QueryTopPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsResponse
 */
export interface QueryTopPostsResponseAmino {
  post_id?: string;
  upvote_count?: string;
  downvote_count?: string;
  pagination?: PageResponseAmino;
}
export interface QueryTopPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTopPostsResponse";
  value: QueryTopPostsResponseAmino;
}
/**
 * QueryThreadFollowersRequest defines the QueryThreadFollowersRequest message.
 * @name QueryThreadFollowersRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersRequest
 */
export interface QueryThreadFollowersRequest {
  threadId: bigint;
  pagination?: PageRequest;
}
export interface QueryThreadFollowersRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersRequest";
  value: Uint8Array;
}
/**
 * QueryThreadFollowersRequest defines the QueryThreadFollowersRequest message.
 * @name QueryThreadFollowersRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersRequest
 */
export interface QueryThreadFollowersRequestAmino {
  thread_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryThreadFollowersRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadFollowersRequest";
  value: QueryThreadFollowersRequestAmino;
}
/**
 * QueryThreadFollowersResponse defines the QueryThreadFollowersResponse message.
 * @name QueryThreadFollowersResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersResponse
 */
export interface QueryThreadFollowersResponse {
  follower: string;
  followedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryThreadFollowersResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersResponse";
  value: Uint8Array;
}
/**
 * QueryThreadFollowersResponse defines the QueryThreadFollowersResponse message.
 * @name QueryThreadFollowersResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersResponse
 */
export interface QueryThreadFollowersResponseAmino {
  follower?: string;
  followed_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryThreadFollowersResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadFollowersResponse";
  value: QueryThreadFollowersResponseAmino;
}
/**
 * QueryUserFollowedThreadsRequest defines the QueryUserFollowedThreadsRequest message.
 * @name QueryUserFollowedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsRequest
 */
export interface QueryUserFollowedThreadsRequest {
  user: string;
  pagination?: PageRequest;
}
export interface QueryUserFollowedThreadsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest";
  value: Uint8Array;
}
/**
 * QueryUserFollowedThreadsRequest defines the QueryUserFollowedThreadsRequest message.
 * @name QueryUserFollowedThreadsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsRequest
 */
export interface QueryUserFollowedThreadsRequestAmino {
  user?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserFollowedThreadsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest";
  value: QueryUserFollowedThreadsRequestAmino;
}
/**
 * QueryUserFollowedThreadsResponse defines the QueryUserFollowedThreadsResponse message.
 * @name QueryUserFollowedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsResponse
 */
export interface QueryUserFollowedThreadsResponse {
  threadId: bigint;
  followedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryUserFollowedThreadsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse";
  value: Uint8Array;
}
/**
 * QueryUserFollowedThreadsResponse defines the QueryUserFollowedThreadsResponse message.
 * @name QueryUserFollowedThreadsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsResponse
 */
export interface QueryUserFollowedThreadsResponseAmino {
  thread_id?: string;
  followed_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryUserFollowedThreadsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse";
  value: QueryUserFollowedThreadsResponseAmino;
}
/**
 * QueryIsFollowingThreadRequest defines the QueryIsFollowingThreadRequest message.
 * @name QueryIsFollowingThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadRequest
 */
export interface QueryIsFollowingThreadRequest {
  threadId: bigint;
  user: string;
}
export interface QueryIsFollowingThreadRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest";
  value: Uint8Array;
}
/**
 * QueryIsFollowingThreadRequest defines the QueryIsFollowingThreadRequest message.
 * @name QueryIsFollowingThreadRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadRequest
 */
export interface QueryIsFollowingThreadRequestAmino {
  thread_id?: string;
  user?: string;
}
export interface QueryIsFollowingThreadRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest";
  value: QueryIsFollowingThreadRequestAmino;
}
/**
 * QueryIsFollowingThreadResponse defines the QueryIsFollowingThreadResponse message.
 * @name QueryIsFollowingThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadResponse
 */
export interface QueryIsFollowingThreadResponse {
  isFollowing: boolean;
  followedAt: bigint;
}
export interface QueryIsFollowingThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse";
  value: Uint8Array;
}
/**
 * QueryIsFollowingThreadResponse defines the QueryIsFollowingThreadResponse message.
 * @name QueryIsFollowingThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadResponse
 */
export interface QueryIsFollowingThreadResponseAmino {
  is_following?: boolean;
  followed_at?: string;
}
export interface QueryIsFollowingThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse";
  value: QueryIsFollowingThreadResponseAmino;
}
/**
 * QueryBountyByThreadRequest defines the QueryBountyByThreadRequest message.
 * @name QueryBountyByThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadRequest
 */
export interface QueryBountyByThreadRequest {
  threadId: bigint;
}
export interface QueryBountyByThreadRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadRequest";
  value: Uint8Array;
}
/**
 * QueryBountyByThreadRequest defines the QueryBountyByThreadRequest message.
 * @name QueryBountyByThreadRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadRequest
 */
export interface QueryBountyByThreadRequestAmino {
  thread_id?: string;
}
export interface QueryBountyByThreadRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyByThreadRequest";
  value: QueryBountyByThreadRequestAmino;
}
/**
 * QueryBountyByThreadResponse defines the QueryBountyByThreadResponse message.
 * @name QueryBountyByThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadResponse
 */
export interface QueryBountyByThreadResponse {
  bountyId: bigint;
  amount: string;
  status: bigint;
  expiresAt: bigint;
}
export interface QueryBountyByThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadResponse";
  value: Uint8Array;
}
/**
 * QueryBountyByThreadResponse defines the QueryBountyByThreadResponse message.
 * @name QueryBountyByThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadResponse
 */
export interface QueryBountyByThreadResponseAmino {
  bounty_id?: string;
  amount?: string;
  status?: string;
  expires_at?: string;
}
export interface QueryBountyByThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyByThreadResponse";
  value: QueryBountyByThreadResponseAmino;
}
/**
 * QueryActiveBountiesRequest defines the QueryActiveBountiesRequest message.
 * @name QueryActiveBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesRequest
 */
export interface QueryActiveBountiesRequest {
  pagination?: PageRequest;
}
export interface QueryActiveBountiesRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesRequest";
  value: Uint8Array;
}
/**
 * QueryActiveBountiesRequest defines the QueryActiveBountiesRequest message.
 * @name QueryActiveBountiesRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesRequest
 */
export interface QueryActiveBountiesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryActiveBountiesRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryActiveBountiesRequest";
  value: QueryActiveBountiesRequestAmino;
}
/**
 * QueryActiveBountiesResponse defines the QueryActiveBountiesResponse message.
 * @name QueryActiveBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesResponse
 */
export interface QueryActiveBountiesResponse {
  bountyId: bigint;
  threadId: bigint;
  amount: string;
  pagination?: PageResponse;
}
export interface QueryActiveBountiesResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesResponse";
  value: Uint8Array;
}
/**
 * QueryActiveBountiesResponse defines the QueryActiveBountiesResponse message.
 * @name QueryActiveBountiesResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesResponse
 */
export interface QueryActiveBountiesResponseAmino {
  bounty_id?: string;
  thread_id?: string;
  amount?: string;
  pagination?: PageResponseAmino;
}
export interface QueryActiveBountiesResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryActiveBountiesResponse";
  value: QueryActiveBountiesResponseAmino;
}
/**
 * QueryUserBountiesRequest defines the QueryUserBountiesRequest message.
 * @name QueryUserBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesRequest
 */
export interface QueryUserBountiesRequest {
  user: string;
  pagination?: PageRequest;
}
export interface QueryUserBountiesRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesRequest";
  value: Uint8Array;
}
/**
 * QueryUserBountiesRequest defines the QueryUserBountiesRequest message.
 * @name QueryUserBountiesRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesRequest
 */
export interface QueryUserBountiesRequestAmino {
  user?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserBountiesRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserBountiesRequest";
  value: QueryUserBountiesRequestAmino;
}
/**
 * QueryUserBountiesResponse defines the QueryUserBountiesResponse message.
 * @name QueryUserBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesResponse
 */
export interface QueryUserBountiesResponse {
  bountyId: bigint;
  threadId: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryUserBountiesResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesResponse";
  value: Uint8Array;
}
/**
 * QueryUserBountiesResponse defines the QueryUserBountiesResponse message.
 * @name QueryUserBountiesResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesResponse
 */
export interface QueryUserBountiesResponseAmino {
  bounty_id?: string;
  thread_id?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryUserBountiesResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserBountiesResponse";
  value: QueryUserBountiesResponseAmino;
}
/**
 * QueryBountyExpiringSoonRequest defines the QueryBountyExpiringSoonRequest message.
 * @name QueryBountyExpiringSoonRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonRequest
 */
export interface QueryBountyExpiringSoonRequest {
  withinSeconds: bigint;
  pagination?: PageRequest;
}
export interface QueryBountyExpiringSoonRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest";
  value: Uint8Array;
}
/**
 * QueryBountyExpiringSoonRequest defines the QueryBountyExpiringSoonRequest message.
 * @name QueryBountyExpiringSoonRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonRequest
 */
export interface QueryBountyExpiringSoonRequestAmino {
  within_seconds?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBountyExpiringSoonRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest";
  value: QueryBountyExpiringSoonRequestAmino;
}
/**
 * QueryBountyExpiringSoonResponse defines the QueryBountyExpiringSoonResponse message.
 * @name QueryBountyExpiringSoonResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonResponse
 */
export interface QueryBountyExpiringSoonResponse {
  bountyId: bigint;
  threadId: bigint;
  expiresAt: bigint;
  pagination?: PageResponse;
}
export interface QueryBountyExpiringSoonResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse";
  value: Uint8Array;
}
/**
 * QueryBountyExpiringSoonResponse defines the QueryBountyExpiringSoonResponse message.
 * @name QueryBountyExpiringSoonResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonResponse
 */
export interface QueryBountyExpiringSoonResponseAmino {
  bounty_id?: string;
  thread_id?: string;
  expires_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryBountyExpiringSoonResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse";
  value: QueryBountyExpiringSoonResponseAmino;
}
/**
 * QueryTagBudgetByTagRequest defines the QueryTagBudgetByTagRequest message.
 * @name QueryTagBudgetByTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetByTagRequest
 */
export interface QueryTagBudgetByTagRequest {
  tag: string;
}
export interface QueryTagBudgetByTagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetByTagRequest";
  value: Uint8Array;
}
/**
 * QueryTagBudgetByTagRequest defines the QueryTagBudgetByTagRequest message.
 * @name QueryTagBudgetByTagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetByTagRequest
 */
export interface QueryTagBudgetByTagRequestAmino {
  tag?: string;
}
export interface QueryTagBudgetByTagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagBudgetByTagRequest";
  value: QueryTagBudgetByTagRequestAmino;
}
/**
 * QueryTagBudgetByTagResponse defines the QueryTagBudgetByTagResponse message.
 * @name QueryTagBudgetByTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetByTagResponse
 */
export interface QueryTagBudgetByTagResponse {
  budgetId: bigint;
  poolBalance: string;
  active: boolean;
}
export interface QueryTagBudgetByTagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetByTagResponse";
  value: Uint8Array;
}
/**
 * QueryTagBudgetByTagResponse defines the QueryTagBudgetByTagResponse message.
 * @name QueryTagBudgetByTagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetByTagResponse
 */
export interface QueryTagBudgetByTagResponseAmino {
  budget_id?: string;
  pool_balance?: string;
  active?: boolean;
}
export interface QueryTagBudgetByTagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagBudgetByTagResponse";
  value: QueryTagBudgetByTagResponseAmino;
}
/**
 * QueryTagBudgetsRequest defines the QueryTagBudgetsRequest message.
 * @name QueryTagBudgetsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetsRequest
 */
export interface QueryTagBudgetsRequest {
  pagination?: PageRequest;
}
export interface QueryTagBudgetsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetsRequest";
  value: Uint8Array;
}
/**
 * QueryTagBudgetsRequest defines the QueryTagBudgetsRequest message.
 * @name QueryTagBudgetsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetsRequest
 */
export interface QueryTagBudgetsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTagBudgetsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagBudgetsRequest";
  value: QueryTagBudgetsRequestAmino;
}
/**
 * QueryTagBudgetsResponse defines the QueryTagBudgetsResponse message.
 * @name QueryTagBudgetsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetsResponse
 */
export interface QueryTagBudgetsResponse {
  budgetId: bigint;
  tag: string;
  poolBalance: string;
  pagination?: PageResponse;
}
export interface QueryTagBudgetsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetsResponse";
  value: Uint8Array;
}
/**
 * QueryTagBudgetsResponse defines the QueryTagBudgetsResponse message.
 * @name QueryTagBudgetsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetsResponse
 */
export interface QueryTagBudgetsResponseAmino {
  budget_id?: string;
  tag?: string;
  pool_balance?: string;
  pagination?: PageResponseAmino;
}
export interface QueryTagBudgetsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagBudgetsResponse";
  value: QueryTagBudgetsResponseAmino;
}
/**
 * QueryTagBudgetAwardsRequest defines the QueryTagBudgetAwardsRequest message.
 * @name QueryTagBudgetAwardsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetAwardsRequest
 */
export interface QueryTagBudgetAwardsRequest {
  budgetId: bigint;
  pagination?: PageRequest;
}
export interface QueryTagBudgetAwardsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetAwardsRequest";
  value: Uint8Array;
}
/**
 * QueryTagBudgetAwardsRequest defines the QueryTagBudgetAwardsRequest message.
 * @name QueryTagBudgetAwardsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetAwardsRequest
 */
export interface QueryTagBudgetAwardsRequestAmino {
  budget_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTagBudgetAwardsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagBudgetAwardsRequest";
  value: QueryTagBudgetAwardsRequestAmino;
}
/**
 * QueryTagBudgetAwardsResponse defines the QueryTagBudgetAwardsResponse message.
 * @name QueryTagBudgetAwardsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetAwardsResponse
 */
export interface QueryTagBudgetAwardsResponse {
  postId: bigint;
  recipient: string;
  amount: string;
  pagination?: PageResponse;
}
export interface QueryTagBudgetAwardsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetAwardsResponse";
  value: Uint8Array;
}
/**
 * QueryTagBudgetAwardsResponse defines the QueryTagBudgetAwardsResponse message.
 * @name QueryTagBudgetAwardsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetAwardsResponse
 */
export interface QueryTagBudgetAwardsResponseAmino {
  post_id?: string;
  recipient?: string;
  amount?: string;
  pagination?: PageResponseAmino;
}
export interface QueryTagBudgetAwardsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTagBudgetAwardsResponse";
  value: QueryTagBudgetAwardsResponseAmino;
}
/**
 * QueryPostFlagsRequest defines the QueryPostFlagsRequest message.
 * @name QueryPostFlagsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsRequest
 */
export interface QueryPostFlagsRequest {
  postId: bigint;
}
export interface QueryPostFlagsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsRequest";
  value: Uint8Array;
}
/**
 * QueryPostFlagsRequest defines the QueryPostFlagsRequest message.
 * @name QueryPostFlagsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsRequest
 */
export interface QueryPostFlagsRequestAmino {
  post_id?: string;
}
export interface QueryPostFlagsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostFlagsRequest";
  value: QueryPostFlagsRequestAmino;
}
/**
 * QueryPostFlagsResponse defines the QueryPostFlagsResponse message.
 * @name QueryPostFlagsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsResponse
 */
export interface QueryPostFlagsResponse {
  totalWeight: string;
  inReviewQueue: boolean;
  flaggerCount: bigint;
}
export interface QueryPostFlagsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsResponse";
  value: Uint8Array;
}
/**
 * QueryPostFlagsResponse defines the QueryPostFlagsResponse message.
 * @name QueryPostFlagsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsResponse
 */
export interface QueryPostFlagsResponseAmino {
  total_weight?: string;
  in_review_queue?: boolean;
  flagger_count?: string;
}
export interface QueryPostFlagsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostFlagsResponse";
  value: QueryPostFlagsResponseAmino;
}
/**
 * QueryFlagReviewQueueRequest defines the QueryFlagReviewQueueRequest message.
 * @name QueryFlagReviewQueueRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueRequest
 */
export interface QueryFlagReviewQueueRequest {
  pagination?: PageRequest;
}
export interface QueryFlagReviewQueueRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest";
  value: Uint8Array;
}
/**
 * QueryFlagReviewQueueRequest defines the QueryFlagReviewQueueRequest message.
 * @name QueryFlagReviewQueueRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueRequest
 */
export interface QueryFlagReviewQueueRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryFlagReviewQueueRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest";
  value: QueryFlagReviewQueueRequestAmino;
}
/**
 * QueryFlagReviewQueueResponse defines the QueryFlagReviewQueueResponse message.
 * @name QueryFlagReviewQueueResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueResponse
 */
export interface QueryFlagReviewQueueResponse {
  postId: bigint;
  totalWeight: string;
  pagination?: PageResponse;
}
export interface QueryFlagReviewQueueResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse";
  value: Uint8Array;
}
/**
 * QueryFlagReviewQueueResponse defines the QueryFlagReviewQueueResponse message.
 * @name QueryFlagReviewQueueResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueResponse
 */
export interface QueryFlagReviewQueueResponseAmino {
  post_id?: string;
  total_weight?: string;
  pagination?: PageResponseAmino;
}
export interface QueryFlagReviewQueueResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse";
  value: QueryFlagReviewQueueResponseAmino;
}
/**
 * QueryGovActionAppealsRequest defines the QueryGovActionAppealsRequest message.
 * @name QueryGovActionAppealsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGovActionAppealsRequest
 */
export interface QueryGovActionAppealsRequest {
  pagination?: PageRequest;
}
export interface QueryGovActionAppealsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGovActionAppealsRequest";
  value: Uint8Array;
}
/**
 * QueryGovActionAppealsRequest defines the QueryGovActionAppealsRequest message.
 * @name QueryGovActionAppealsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGovActionAppealsRequest
 */
export interface QueryGovActionAppealsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryGovActionAppealsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGovActionAppealsRequest";
  value: QueryGovActionAppealsRequestAmino;
}
/**
 * QueryGovActionAppealsResponse defines the QueryGovActionAppealsResponse message.
 * @name QueryGovActionAppealsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGovActionAppealsResponse
 */
export interface QueryGovActionAppealsResponse {
  appealId: bigint;
  actionType: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryGovActionAppealsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGovActionAppealsResponse";
  value: Uint8Array;
}
/**
 * QueryGovActionAppealsResponse defines the QueryGovActionAppealsResponse message.
 * @name QueryGovActionAppealsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGovActionAppealsResponse
 */
export interface QueryGovActionAppealsResponseAmino {
  appeal_id?: string;
  action_type?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryGovActionAppealsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGovActionAppealsResponse";
  value: QueryGovActionAppealsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostRequest(): QueryGetPostRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryGetPostRequest defines the QueryGetPostRequest message.
 * @name QueryGetPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostRequest
 */
export const QueryGetPostRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostRequest",
  encode(message: QueryGetPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = createBaseQueryGetPostRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPostRequestAmino): QueryGetPostRequest {
    const message = createBaseQueryGetPostRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryGetPostRequest): QueryGetPostRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostRequestAminoMsg): QueryGetPostRequest {
    return QueryGetPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostRequestProtoMsg): QueryGetPostRequest {
    return QueryGetPostRequest.decode(message.value);
  },
  toProto(message: QueryGetPostRequest): Uint8Array {
    return QueryGetPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostRequest): QueryGetPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostRequest",
      value: QueryGetPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostResponse(): QueryGetPostResponse {
  return {
    post: Post.fromPartial({})
  };
}
/**
 * QueryGetPostResponse defines the QueryGetPostResponse message.
 * @name QueryGetPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostResponse
 */
export const QueryGetPostResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostResponse",
  encode(message: QueryGetPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = createBaseQueryGetPostResponse();
    message.post = object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPostResponseAmino): QueryGetPostResponse {
    const message = createBaseQueryGetPostResponse();
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromAmino(object.post);
    }
    return message;
  },
  toAmino(message: QueryGetPostResponse): QueryGetPostResponseAmino {
    const obj: any = {};
    obj.post = message.post ? Post.toAmino(message.post) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostResponseAminoMsg): QueryGetPostResponse {
    return QueryGetPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostResponseProtoMsg): QueryGetPostResponse {
    return QueryGetPostResponse.decode(message.value);
  },
  toProto(message: QueryGetPostResponse): Uint8Array {
    return QueryGetPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostResponse): QueryGetPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostResponse",
      value: QueryGetPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostRequest(): QueryAllPostRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllPostRequest defines the QueryAllPostRequest message.
 * @name QueryAllPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostRequest
 */
export const QueryAllPostRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostRequest",
  encode(message: QueryAllPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = createBaseQueryAllPostRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostRequestAmino): QueryAllPostRequest {
    const message = createBaseQueryAllPostRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostRequest): QueryAllPostRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostRequestAminoMsg): QueryAllPostRequest {
    return QueryAllPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostRequestProtoMsg): QueryAllPostRequest {
    return QueryAllPostRequest.decode(message.value);
  },
  toProto(message: QueryAllPostRequest): Uint8Array {
    return QueryAllPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostRequest): QueryAllPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostRequest",
      value: QueryAllPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostResponse(): QueryAllPostResponse {
  return {
    post: [],
    pagination: undefined
  };
}
/**
 * QueryAllPostResponse defines the QueryAllPostResponse message.
 * @name QueryAllPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostResponse
 */
export const QueryAllPostResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostResponse",
  encode(message: QueryAllPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = createBaseQueryAllPostResponse();
    message.post = object.post?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostResponseAmino): QueryAllPostResponse {
    const message = createBaseQueryAllPostResponse();
    message.post = object.post?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostResponse): QueryAllPostResponseAmino {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.post = message.post;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostResponseAminoMsg): QueryAllPostResponse {
    return QueryAllPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostResponseProtoMsg): QueryAllPostResponse {
    return QueryAllPostResponse.decode(message.value);
  },
  toProto(message: QueryAllPostResponse): Uint8Array {
    return QueryAllPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostResponse): QueryAllPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostResponse",
      value: QueryAllPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCategoryRequest(): QueryGetCategoryRequest {
  return {
    categoryId: BigInt(0)
  };
}
/**
 * QueryGetCategoryRequest defines the QueryGetCategoryRequest message.
 * @name QueryGetCategoryRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetCategoryRequest
 */
export const QueryGetCategoryRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetCategoryRequest",
  encode(message: QueryGetCategoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCategoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCategoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetCategoryRequest>): QueryGetCategoryRequest {
    const message = createBaseQueryGetCategoryRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetCategoryRequestAmino): QueryGetCategoryRequest {
    const message = createBaseQueryGetCategoryRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    return message;
  },
  toAmino(message: QueryGetCategoryRequest): QueryGetCategoryRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCategoryRequestAminoMsg): QueryGetCategoryRequest {
    return QueryGetCategoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCategoryRequestProtoMsg): QueryGetCategoryRequest {
    return QueryGetCategoryRequest.decode(message.value);
  },
  toProto(message: QueryGetCategoryRequest): Uint8Array {
    return QueryGetCategoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCategoryRequest): QueryGetCategoryRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetCategoryRequest",
      value: QueryGetCategoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCategoryResponse(): QueryGetCategoryResponse {
  return {
    category: Category.fromPartial({})
  };
}
/**
 * QueryGetCategoryResponse defines the QueryGetCategoryResponse message.
 * @name QueryGetCategoryResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetCategoryResponse
 */
export const QueryGetCategoryResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetCategoryResponse",
  encode(message: QueryGetCategoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.category !== undefined) {
      Category.encode(message.category, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCategoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = Category.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetCategoryResponse>): QueryGetCategoryResponse {
    const message = createBaseQueryGetCategoryResponse();
    message.category = object.category !== undefined && object.category !== null ? Category.fromPartial(object.category) : undefined;
    return message;
  },
  fromAmino(object: QueryGetCategoryResponseAmino): QueryGetCategoryResponse {
    const message = createBaseQueryGetCategoryResponse();
    if (object.category !== undefined && object.category !== null) {
      message.category = Category.fromAmino(object.category);
    }
    return message;
  },
  toAmino(message: QueryGetCategoryResponse): QueryGetCategoryResponseAmino {
    const obj: any = {};
    obj.category = message.category ? Category.toAmino(message.category) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCategoryResponseAminoMsg): QueryGetCategoryResponse {
    return QueryGetCategoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCategoryResponseProtoMsg): QueryGetCategoryResponse {
    return QueryGetCategoryResponse.decode(message.value);
  },
  toProto(message: QueryGetCategoryResponse): Uint8Array {
    return QueryGetCategoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCategoryResponse): QueryGetCategoryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetCategoryResponse",
      value: QueryGetCategoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllCategoryRequest(): QueryAllCategoryRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllCategoryRequest defines the QueryAllCategoryRequest message.
 * @name QueryAllCategoryRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllCategoryRequest
 */
export const QueryAllCategoryRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllCategoryRequest",
  encode(message: QueryAllCategoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCategoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCategoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllCategoryRequest>): QueryAllCategoryRequest {
    const message = createBaseQueryAllCategoryRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCategoryRequestAmino): QueryAllCategoryRequest {
    const message = createBaseQueryAllCategoryRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCategoryRequest): QueryAllCategoryRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCategoryRequestAminoMsg): QueryAllCategoryRequest {
    return QueryAllCategoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCategoryRequestProtoMsg): QueryAllCategoryRequest {
    return QueryAllCategoryRequest.decode(message.value);
  },
  toProto(message: QueryAllCategoryRequest): Uint8Array {
    return QueryAllCategoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCategoryRequest): QueryAllCategoryRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllCategoryRequest",
      value: QueryAllCategoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllCategoryResponse(): QueryAllCategoryResponse {
  return {
    category: [],
    pagination: undefined
  };
}
/**
 * QueryAllCategoryResponse defines the QueryAllCategoryResponse message.
 * @name QueryAllCategoryResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllCategoryResponse
 */
export const QueryAllCategoryResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllCategoryResponse",
  encode(message: QueryAllCategoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.category) {
      Category.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCategoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category.push(Category.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllCategoryResponse>): QueryAllCategoryResponse {
    const message = createBaseQueryAllCategoryResponse();
    message.category = object.category?.map(e => Category.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCategoryResponseAmino): QueryAllCategoryResponse {
    const message = createBaseQueryAllCategoryResponse();
    message.category = object.category?.map(e => Category.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCategoryResponse): QueryAllCategoryResponseAmino {
    const obj: any = {};
    if (message.category) {
      obj.category = message.category.map(e => e ? Category.toAmino(e) : undefined);
    } else {
      obj.category = message.category;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCategoryResponseAminoMsg): QueryAllCategoryResponse {
    return QueryAllCategoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCategoryResponseProtoMsg): QueryAllCategoryResponse {
    return QueryAllCategoryResponse.decode(message.value);
  },
  toProto(message: QueryAllCategoryResponse): Uint8Array {
    return QueryAllCategoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCategoryResponse): QueryAllCategoryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllCategoryResponse",
      value: QueryAllCategoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagRequest(): QueryGetTagRequest {
  return {
    name: ""
  };
}
/**
 * QueryGetTagRequest defines the QueryGetTagRequest message.
 * @name QueryGetTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagRequest
 */
export const QueryGetTagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagRequest",
  encode(message: QueryGetTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagRequest>): QueryGetTagRequest {
    const message = createBaseQueryGetTagRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetTagRequestAmino): QueryGetTagRequest {
    const message = createBaseQueryGetTagRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetTagRequest): QueryGetTagRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagRequestAminoMsg): QueryGetTagRequest {
    return QueryGetTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagRequestProtoMsg): QueryGetTagRequest {
    return QueryGetTagRequest.decode(message.value);
  },
  toProto(message: QueryGetTagRequest): Uint8Array {
    return QueryGetTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagRequest): QueryGetTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagRequest",
      value: QueryGetTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagResponse(): QueryGetTagResponse {
  return {
    tag: Tag.fromPartial({})
  };
}
/**
 * QueryGetTagResponse defines the QueryGetTagResponse message.
 * @name QueryGetTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagResponse
 */
export const QueryGetTagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagResponse",
  encode(message: QueryGetTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = Tag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagResponse>): QueryGetTagResponse {
    const message = createBaseQueryGetTagResponse();
    message.tag = object.tag !== undefined && object.tag !== null ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagResponseAmino): QueryGetTagResponse {
    const message = createBaseQueryGetTagResponse();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = Tag.fromAmino(object.tag);
    }
    return message;
  },
  toAmino(message: QueryGetTagResponse): QueryGetTagResponseAmino {
    const obj: any = {};
    obj.tag = message.tag ? Tag.toAmino(message.tag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagResponseAminoMsg): QueryGetTagResponse {
    return QueryGetTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagResponseProtoMsg): QueryGetTagResponse {
    return QueryGetTagResponse.decode(message.value);
  },
  toProto(message: QueryGetTagResponse): Uint8Array {
    return QueryGetTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagResponse): QueryGetTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagResponse",
      value: QueryGetTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagRequest(): QueryAllTagRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagRequest defines the QueryAllTagRequest message.
 * @name QueryAllTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagRequest
 */
export const QueryAllTagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagRequest",
  encode(message: QueryAllTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagRequest>): QueryAllTagRequest {
    const message = createBaseQueryAllTagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagRequestAmino): QueryAllTagRequest {
    const message = createBaseQueryAllTagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagRequest): QueryAllTagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagRequestAminoMsg): QueryAllTagRequest {
    return QueryAllTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagRequestProtoMsg): QueryAllTagRequest {
    return QueryAllTagRequest.decode(message.value);
  },
  toProto(message: QueryAllTagRequest): Uint8Array {
    return QueryAllTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagRequest): QueryAllTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagRequest",
      value: QueryAllTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagResponse(): QueryAllTagResponse {
  return {
    tag: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagResponse defines the QueryAllTagResponse message.
 * @name QueryAllTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagResponse
 */
export const QueryAllTagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagResponse",
  encode(message: QueryAllTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tag) {
      Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag.push(Tag.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagResponse>): QueryAllTagResponse {
    const message = createBaseQueryAllTagResponse();
    message.tag = object.tag?.map(e => Tag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagResponseAmino): QueryAllTagResponse {
    const message = createBaseQueryAllTagResponse();
    message.tag = object.tag?.map(e => Tag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagResponse): QueryAllTagResponseAmino {
    const obj: any = {};
    if (message.tag) {
      obj.tag = message.tag.map(e => e ? Tag.toAmino(e) : undefined);
    } else {
      obj.tag = message.tag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagResponseAminoMsg): QueryAllTagResponse {
    return QueryAllTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagResponseProtoMsg): QueryAllTagResponse {
    return QueryAllTagResponse.decode(message.value);
  },
  toProto(message: QueryAllTagResponse): Uint8Array {
    return QueryAllTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagResponse): QueryAllTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagResponse",
      value: QueryAllTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetReservedTagRequest(): QueryGetReservedTagRequest {
  return {
    name: ""
  };
}
/**
 * QueryGetReservedTagRequest defines the QueryGetReservedTagRequest message.
 * @name QueryGetReservedTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetReservedTagRequest
 */
export const QueryGetReservedTagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetReservedTagRequest",
  encode(message: QueryGetReservedTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetReservedTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReservedTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetReservedTagRequest>): QueryGetReservedTagRequest {
    const message = createBaseQueryGetReservedTagRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetReservedTagRequestAmino): QueryGetReservedTagRequest {
    const message = createBaseQueryGetReservedTagRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetReservedTagRequest): QueryGetReservedTagRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetReservedTagRequestAminoMsg): QueryGetReservedTagRequest {
    return QueryGetReservedTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReservedTagRequestProtoMsg): QueryGetReservedTagRequest {
    return QueryGetReservedTagRequest.decode(message.value);
  },
  toProto(message: QueryGetReservedTagRequest): Uint8Array {
    return QueryGetReservedTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReservedTagRequest): QueryGetReservedTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetReservedTagRequest",
      value: QueryGetReservedTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetReservedTagResponse(): QueryGetReservedTagResponse {
  return {
    reservedTag: ReservedTag.fromPartial({})
  };
}
/**
 * QueryGetReservedTagResponse defines the QueryGetReservedTagResponse message.
 * @name QueryGetReservedTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetReservedTagResponse
 */
export const QueryGetReservedTagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetReservedTagResponse",
  encode(message: QueryGetReservedTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservedTag !== undefined) {
      ReservedTag.encode(message.reservedTag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetReservedTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReservedTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservedTag = ReservedTag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetReservedTagResponse>): QueryGetReservedTagResponse {
    const message = createBaseQueryGetReservedTagResponse();
    message.reservedTag = object.reservedTag !== undefined && object.reservedTag !== null ? ReservedTag.fromPartial(object.reservedTag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetReservedTagResponseAmino): QueryGetReservedTagResponse {
    const message = createBaseQueryGetReservedTagResponse();
    if (object.reserved_tag !== undefined && object.reserved_tag !== null) {
      message.reservedTag = ReservedTag.fromAmino(object.reserved_tag);
    }
    return message;
  },
  toAmino(message: QueryGetReservedTagResponse): QueryGetReservedTagResponseAmino {
    const obj: any = {};
    obj.reserved_tag = message.reservedTag ? ReservedTag.toAmino(message.reservedTag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetReservedTagResponseAminoMsg): QueryGetReservedTagResponse {
    return QueryGetReservedTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReservedTagResponseProtoMsg): QueryGetReservedTagResponse {
    return QueryGetReservedTagResponse.decode(message.value);
  },
  toProto(message: QueryGetReservedTagResponse): Uint8Array {
    return QueryGetReservedTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReservedTagResponse): QueryGetReservedTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetReservedTagResponse",
      value: QueryGetReservedTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllReservedTagRequest(): QueryAllReservedTagRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllReservedTagRequest defines the QueryAllReservedTagRequest message.
 * @name QueryAllReservedTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllReservedTagRequest
 */
export const QueryAllReservedTagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllReservedTagRequest",
  encode(message: QueryAllReservedTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllReservedTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReservedTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllReservedTagRequest>): QueryAllReservedTagRequest {
    const message = createBaseQueryAllReservedTagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllReservedTagRequestAmino): QueryAllReservedTagRequest {
    const message = createBaseQueryAllReservedTagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllReservedTagRequest): QueryAllReservedTagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllReservedTagRequestAminoMsg): QueryAllReservedTagRequest {
    return QueryAllReservedTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllReservedTagRequestProtoMsg): QueryAllReservedTagRequest {
    return QueryAllReservedTagRequest.decode(message.value);
  },
  toProto(message: QueryAllReservedTagRequest): Uint8Array {
    return QueryAllReservedTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllReservedTagRequest): QueryAllReservedTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllReservedTagRequest",
      value: QueryAllReservedTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllReservedTagResponse(): QueryAllReservedTagResponse {
  return {
    reservedTag: [],
    pagination: undefined
  };
}
/**
 * QueryAllReservedTagResponse defines the QueryAllReservedTagResponse message.
 * @name QueryAllReservedTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllReservedTagResponse
 */
export const QueryAllReservedTagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllReservedTagResponse",
  encode(message: QueryAllReservedTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reservedTag) {
      ReservedTag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllReservedTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReservedTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservedTag.push(ReservedTag.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllReservedTagResponse>): QueryAllReservedTagResponse {
    const message = createBaseQueryAllReservedTagResponse();
    message.reservedTag = object.reservedTag?.map(e => ReservedTag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllReservedTagResponseAmino): QueryAllReservedTagResponse {
    const message = createBaseQueryAllReservedTagResponse();
    message.reservedTag = object.reserved_tag?.map(e => ReservedTag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllReservedTagResponse): QueryAllReservedTagResponseAmino {
    const obj: any = {};
    if (message.reservedTag) {
      obj.reserved_tag = message.reservedTag.map(e => e ? ReservedTag.toAmino(e) : undefined);
    } else {
      obj.reserved_tag = message.reservedTag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllReservedTagResponseAminoMsg): QueryAllReservedTagResponse {
    return QueryAllReservedTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllReservedTagResponseProtoMsg): QueryAllReservedTagResponse {
    return QueryAllReservedTagResponse.decode(message.value);
  },
  toProto(message: QueryAllReservedTagResponse): Uint8Array {
    return QueryAllReservedTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllReservedTagResponse): QueryAllReservedTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllReservedTagResponse",
      value: QueryAllReservedTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRateLimitRequest(): QueryGetUserRateLimitRequest {
  return {
    userAddress: ""
  };
}
/**
 * QueryGetUserRateLimitRequest defines the QueryGetUserRateLimitRequest message.
 * @name QueryGetUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitRequest
 */
export const QueryGetUserRateLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest",
  encode(message: QueryGetUserRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRateLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserRateLimitRequest>): QueryGetUserRateLimitRequest {
    const message = createBaseQueryGetUserRateLimitRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserRateLimitRequestAmino): QueryGetUserRateLimitRequest {
    const message = createBaseQueryGetUserRateLimitRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryGetUserRateLimitRequest): QueryGetUserRateLimitRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRateLimitRequestAminoMsg): QueryGetUserRateLimitRequest {
    return QueryGetUserRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRateLimitRequestProtoMsg): QueryGetUserRateLimitRequest {
    return QueryGetUserRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryGetUserRateLimitRequest): Uint8Array {
    return QueryGetUserRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRateLimitRequest): QueryGetUserRateLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest",
      value: QueryGetUserRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRateLimitResponse(): QueryGetUserRateLimitResponse {
  return {
    userRateLimit: UserRateLimit.fromPartial({})
  };
}
/**
 * QueryGetUserRateLimitResponse defines the QueryGetUserRateLimitResponse message.
 * @name QueryGetUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitResponse
 */
export const QueryGetUserRateLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse",
  encode(message: QueryGetUserRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userRateLimit !== undefined) {
      UserRateLimit.encode(message.userRateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRateLimit = UserRateLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserRateLimitResponse>): QueryGetUserRateLimitResponse {
    const message = createBaseQueryGetUserRateLimitResponse();
    message.userRateLimit = object.userRateLimit !== undefined && object.userRateLimit !== null ? UserRateLimit.fromPartial(object.userRateLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserRateLimitResponseAmino): QueryGetUserRateLimitResponse {
    const message = createBaseQueryGetUserRateLimitResponse();
    if (object.user_rate_limit !== undefined && object.user_rate_limit !== null) {
      message.userRateLimit = UserRateLimit.fromAmino(object.user_rate_limit);
    }
    return message;
  },
  toAmino(message: QueryGetUserRateLimitResponse): QueryGetUserRateLimitResponseAmino {
    const obj: any = {};
    obj.user_rate_limit = message.userRateLimit ? UserRateLimit.toAmino(message.userRateLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRateLimitResponseAminoMsg): QueryGetUserRateLimitResponse {
    return QueryGetUserRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRateLimitResponseProtoMsg): QueryGetUserRateLimitResponse {
    return QueryGetUserRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryGetUserRateLimitResponse): Uint8Array {
    return QueryGetUserRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRateLimitResponse): QueryGetUserRateLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse",
      value: QueryGetUserRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRateLimitRequest(): QueryAllUserRateLimitRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllUserRateLimitRequest defines the QueryAllUserRateLimitRequest message.
 * @name QueryAllUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitRequest
 */
export const QueryAllUserRateLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest",
  encode(message: QueryAllUserRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRateLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllUserRateLimitRequest>): QueryAllUserRateLimitRequest {
    const message = createBaseQueryAllUserRateLimitRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRateLimitRequestAmino): QueryAllUserRateLimitRequest {
    const message = createBaseQueryAllUserRateLimitRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRateLimitRequest): QueryAllUserRateLimitRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRateLimitRequestAminoMsg): QueryAllUserRateLimitRequest {
    return QueryAllUserRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRateLimitRequestProtoMsg): QueryAllUserRateLimitRequest {
    return QueryAllUserRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRateLimitRequest): Uint8Array {
    return QueryAllUserRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRateLimitRequest): QueryAllUserRateLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest",
      value: QueryAllUserRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRateLimitResponse(): QueryAllUserRateLimitResponse {
  return {
    userRateLimit: [],
    pagination: undefined
  };
}
/**
 * QueryAllUserRateLimitResponse defines the QueryAllUserRateLimitResponse message.
 * @name QueryAllUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitResponse
 */
export const QueryAllUserRateLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse",
  encode(message: QueryAllUserRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userRateLimit) {
      UserRateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRateLimit.push(UserRateLimit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllUserRateLimitResponse>): QueryAllUserRateLimitResponse {
    const message = createBaseQueryAllUserRateLimitResponse();
    message.userRateLimit = object.userRateLimit?.map(e => UserRateLimit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRateLimitResponseAmino): QueryAllUserRateLimitResponse {
    const message = createBaseQueryAllUserRateLimitResponse();
    message.userRateLimit = object.user_rate_limit?.map(e => UserRateLimit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRateLimitResponse): QueryAllUserRateLimitResponseAmino {
    const obj: any = {};
    if (message.userRateLimit) {
      obj.user_rate_limit = message.userRateLimit.map(e => e ? UserRateLimit.toAmino(e) : undefined);
    } else {
      obj.user_rate_limit = message.userRateLimit;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRateLimitResponseAminoMsg): QueryAllUserRateLimitResponse {
    return QueryAllUserRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRateLimitResponseProtoMsg): QueryAllUserRateLimitResponse {
    return QueryAllUserRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryAllUserRateLimitResponse): Uint8Array {
    return QueryAllUserRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRateLimitResponse): QueryAllUserRateLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse",
      value: QueryAllUserRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserReactionLimitRequest(): QueryGetUserReactionLimitRequest {
  return {
    userAddress: ""
  };
}
/**
 * QueryGetUserReactionLimitRequest defines the QueryGetUserReactionLimitRequest message.
 * @name QueryGetUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitRequest
 */
export const QueryGetUserReactionLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest",
  encode(message: QueryGetUserReactionLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserReactionLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserReactionLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserReactionLimitRequest>): QueryGetUserReactionLimitRequest {
    const message = createBaseQueryGetUserReactionLimitRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserReactionLimitRequestAmino): QueryGetUserReactionLimitRequest {
    const message = createBaseQueryGetUserReactionLimitRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryGetUserReactionLimitRequest): QueryGetUserReactionLimitRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserReactionLimitRequestAminoMsg): QueryGetUserReactionLimitRequest {
    return QueryGetUserReactionLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserReactionLimitRequestProtoMsg): QueryGetUserReactionLimitRequest {
    return QueryGetUserReactionLimitRequest.decode(message.value);
  },
  toProto(message: QueryGetUserReactionLimitRequest): Uint8Array {
    return QueryGetUserReactionLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserReactionLimitRequest): QueryGetUserReactionLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest",
      value: QueryGetUserReactionLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserReactionLimitResponse(): QueryGetUserReactionLimitResponse {
  return {
    userReactionLimit: UserReactionLimit.fromPartial({})
  };
}
/**
 * QueryGetUserReactionLimitResponse defines the QueryGetUserReactionLimitResponse message.
 * @name QueryGetUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitResponse
 */
export const QueryGetUserReactionLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse",
  encode(message: QueryGetUserReactionLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userReactionLimit !== undefined) {
      UserReactionLimit.encode(message.userReactionLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserReactionLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserReactionLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userReactionLimit = UserReactionLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserReactionLimitResponse>): QueryGetUserReactionLimitResponse {
    const message = createBaseQueryGetUserReactionLimitResponse();
    message.userReactionLimit = object.userReactionLimit !== undefined && object.userReactionLimit !== null ? UserReactionLimit.fromPartial(object.userReactionLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserReactionLimitResponseAmino): QueryGetUserReactionLimitResponse {
    const message = createBaseQueryGetUserReactionLimitResponse();
    if (object.user_reaction_limit !== undefined && object.user_reaction_limit !== null) {
      message.userReactionLimit = UserReactionLimit.fromAmino(object.user_reaction_limit);
    }
    return message;
  },
  toAmino(message: QueryGetUserReactionLimitResponse): QueryGetUserReactionLimitResponseAmino {
    const obj: any = {};
    obj.user_reaction_limit = message.userReactionLimit ? UserReactionLimit.toAmino(message.userReactionLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserReactionLimitResponseAminoMsg): QueryGetUserReactionLimitResponse {
    return QueryGetUserReactionLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserReactionLimitResponseProtoMsg): QueryGetUserReactionLimitResponse {
    return QueryGetUserReactionLimitResponse.decode(message.value);
  },
  toProto(message: QueryGetUserReactionLimitResponse): Uint8Array {
    return QueryGetUserReactionLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserReactionLimitResponse): QueryGetUserReactionLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse",
      value: QueryGetUserReactionLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserReactionLimitRequest(): QueryAllUserReactionLimitRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllUserReactionLimitRequest defines the QueryAllUserReactionLimitRequest message.
 * @name QueryAllUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitRequest
 */
export const QueryAllUserReactionLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest",
  encode(message: QueryAllUserReactionLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserReactionLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserReactionLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllUserReactionLimitRequest>): QueryAllUserReactionLimitRequest {
    const message = createBaseQueryAllUserReactionLimitRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserReactionLimitRequestAmino): QueryAllUserReactionLimitRequest {
    const message = createBaseQueryAllUserReactionLimitRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserReactionLimitRequest): QueryAllUserReactionLimitRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserReactionLimitRequestAminoMsg): QueryAllUserReactionLimitRequest {
    return QueryAllUserReactionLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserReactionLimitRequestProtoMsg): QueryAllUserReactionLimitRequest {
    return QueryAllUserReactionLimitRequest.decode(message.value);
  },
  toProto(message: QueryAllUserReactionLimitRequest): Uint8Array {
    return QueryAllUserReactionLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserReactionLimitRequest): QueryAllUserReactionLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest",
      value: QueryAllUserReactionLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserReactionLimitResponse(): QueryAllUserReactionLimitResponse {
  return {
    userReactionLimit: [],
    pagination: undefined
  };
}
/**
 * QueryAllUserReactionLimitResponse defines the QueryAllUserReactionLimitResponse message.
 * @name QueryAllUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitResponse
 */
export const QueryAllUserReactionLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse",
  encode(message: QueryAllUserReactionLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userReactionLimit) {
      UserReactionLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserReactionLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserReactionLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userReactionLimit.push(UserReactionLimit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllUserReactionLimitResponse>): QueryAllUserReactionLimitResponse {
    const message = createBaseQueryAllUserReactionLimitResponse();
    message.userReactionLimit = object.userReactionLimit?.map(e => UserReactionLimit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserReactionLimitResponseAmino): QueryAllUserReactionLimitResponse {
    const message = createBaseQueryAllUserReactionLimitResponse();
    message.userReactionLimit = object.user_reaction_limit?.map(e => UserReactionLimit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserReactionLimitResponse): QueryAllUserReactionLimitResponseAmino {
    const obj: any = {};
    if (message.userReactionLimit) {
      obj.user_reaction_limit = message.userReactionLimit.map(e => e ? UserReactionLimit.toAmino(e) : undefined);
    } else {
      obj.user_reaction_limit = message.userReactionLimit;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserReactionLimitResponseAminoMsg): QueryAllUserReactionLimitResponse {
    return QueryAllUserReactionLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserReactionLimitResponseProtoMsg): QueryAllUserReactionLimitResponse {
    return QueryAllUserReactionLimitResponse.decode(message.value);
  },
  toProto(message: QueryAllUserReactionLimitResponse): Uint8Array {
    return QueryAllUserReactionLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserReactionLimitResponse): QueryAllUserReactionLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse",
      value: QueryAllUserReactionLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSentinelActivityRequest(): QueryGetSentinelActivityRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetSentinelActivityRequest defines the QueryGetSentinelActivityRequest message.
 * @name QueryGetSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityRequest
 */
export const QueryGetSentinelActivityRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest",
  encode(message: QueryGetSentinelActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSentinelActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentinelActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSentinelActivityRequest>): QueryGetSentinelActivityRequest {
    const message = createBaseQueryGetSentinelActivityRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetSentinelActivityRequestAmino): QueryGetSentinelActivityRequest {
    const message = createBaseQueryGetSentinelActivityRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetSentinelActivityRequest): QueryGetSentinelActivityRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetSentinelActivityRequestAminoMsg): QueryGetSentinelActivityRequest {
    return QueryGetSentinelActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSentinelActivityRequestProtoMsg): QueryGetSentinelActivityRequest {
    return QueryGetSentinelActivityRequest.decode(message.value);
  },
  toProto(message: QueryGetSentinelActivityRequest): Uint8Array {
    return QueryGetSentinelActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSentinelActivityRequest): QueryGetSentinelActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest",
      value: QueryGetSentinelActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSentinelActivityResponse(): QueryGetSentinelActivityResponse {
  return {
    sentinelActivity: SentinelActivity.fromPartial({})
  };
}
/**
 * QueryGetSentinelActivityResponse defines the QueryGetSentinelActivityResponse message.
 * @name QueryGetSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityResponse
 */
export const QueryGetSentinelActivityResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse",
  encode(message: QueryGetSentinelActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sentinelActivity !== undefined) {
      SentinelActivity.encode(message.sentinelActivity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSentinelActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentinelActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sentinelActivity = SentinelActivity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSentinelActivityResponse>): QueryGetSentinelActivityResponse {
    const message = createBaseQueryGetSentinelActivityResponse();
    message.sentinelActivity = object.sentinelActivity !== undefined && object.sentinelActivity !== null ? SentinelActivity.fromPartial(object.sentinelActivity) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSentinelActivityResponseAmino): QueryGetSentinelActivityResponse {
    const message = createBaseQueryGetSentinelActivityResponse();
    if (object.sentinel_activity !== undefined && object.sentinel_activity !== null) {
      message.sentinelActivity = SentinelActivity.fromAmino(object.sentinel_activity);
    }
    return message;
  },
  toAmino(message: QueryGetSentinelActivityResponse): QueryGetSentinelActivityResponseAmino {
    const obj: any = {};
    obj.sentinel_activity = message.sentinelActivity ? SentinelActivity.toAmino(message.sentinelActivity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSentinelActivityResponseAminoMsg): QueryGetSentinelActivityResponse {
    return QueryGetSentinelActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSentinelActivityResponseProtoMsg): QueryGetSentinelActivityResponse {
    return QueryGetSentinelActivityResponse.decode(message.value);
  },
  toProto(message: QueryGetSentinelActivityResponse): Uint8Array {
    return QueryGetSentinelActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSentinelActivityResponse): QueryGetSentinelActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse",
      value: QueryGetSentinelActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSentinelActivityRequest(): QueryAllSentinelActivityRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllSentinelActivityRequest defines the QueryAllSentinelActivityRequest message.
 * @name QueryAllSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityRequest
 */
export const QueryAllSentinelActivityRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest",
  encode(message: QueryAllSentinelActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSentinelActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentinelActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllSentinelActivityRequest>): QueryAllSentinelActivityRequest {
    const message = createBaseQueryAllSentinelActivityRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSentinelActivityRequestAmino): QueryAllSentinelActivityRequest {
    const message = createBaseQueryAllSentinelActivityRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSentinelActivityRequest): QueryAllSentinelActivityRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSentinelActivityRequestAminoMsg): QueryAllSentinelActivityRequest {
    return QueryAllSentinelActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSentinelActivityRequestProtoMsg): QueryAllSentinelActivityRequest {
    return QueryAllSentinelActivityRequest.decode(message.value);
  },
  toProto(message: QueryAllSentinelActivityRequest): Uint8Array {
    return QueryAllSentinelActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSentinelActivityRequest): QueryAllSentinelActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest",
      value: QueryAllSentinelActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSentinelActivityResponse(): QueryAllSentinelActivityResponse {
  return {
    sentinelActivity: [],
    pagination: undefined
  };
}
/**
 * QueryAllSentinelActivityResponse defines the QueryAllSentinelActivityResponse message.
 * @name QueryAllSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityResponse
 */
export const QueryAllSentinelActivityResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse",
  encode(message: QueryAllSentinelActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sentinelActivity) {
      SentinelActivity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSentinelActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentinelActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sentinelActivity.push(SentinelActivity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllSentinelActivityResponse>): QueryAllSentinelActivityResponse {
    const message = createBaseQueryAllSentinelActivityResponse();
    message.sentinelActivity = object.sentinelActivity?.map(e => SentinelActivity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSentinelActivityResponseAmino): QueryAllSentinelActivityResponse {
    const message = createBaseQueryAllSentinelActivityResponse();
    message.sentinelActivity = object.sentinel_activity?.map(e => SentinelActivity.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSentinelActivityResponse): QueryAllSentinelActivityResponseAmino {
    const obj: any = {};
    if (message.sentinelActivity) {
      obj.sentinel_activity = message.sentinelActivity.map(e => e ? SentinelActivity.toAmino(e) : undefined);
    } else {
      obj.sentinel_activity = message.sentinelActivity;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSentinelActivityResponseAminoMsg): QueryAllSentinelActivityResponse {
    return QueryAllSentinelActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSentinelActivityResponseProtoMsg): QueryAllSentinelActivityResponse {
    return QueryAllSentinelActivityResponse.decode(message.value);
  },
  toProto(message: QueryAllSentinelActivityResponse): Uint8Array {
    return QueryAllSentinelActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSentinelActivityResponse): QueryAllSentinelActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse",
      value: QueryAllSentinelActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetHideRecordRequest(): QueryGetHideRecordRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryGetHideRecordRequest defines the QueryGetHideRecordRequest message.
 * @name QueryGetHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordRequest
 */
export const QueryGetHideRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordRequest",
  encode(message: QueryGetHideRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHideRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHideRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetHideRecordRequest>): QueryGetHideRecordRequest {
    const message = createBaseQueryGetHideRecordRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetHideRecordRequestAmino): QueryGetHideRecordRequest {
    const message = createBaseQueryGetHideRecordRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryGetHideRecordRequest): QueryGetHideRecordRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHideRecordRequestAminoMsg): QueryGetHideRecordRequest {
    return QueryGetHideRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHideRecordRequestProtoMsg): QueryGetHideRecordRequest {
    return QueryGetHideRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetHideRecordRequest): Uint8Array {
    return QueryGetHideRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHideRecordRequest): QueryGetHideRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordRequest",
      value: QueryGetHideRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetHideRecordResponse(): QueryGetHideRecordResponse {
  return {
    hideRecord: HideRecord.fromPartial({})
  };
}
/**
 * QueryGetHideRecordResponse defines the QueryGetHideRecordResponse message.
 * @name QueryGetHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordResponse
 */
export const QueryGetHideRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordResponse",
  encode(message: QueryGetHideRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hideRecord !== undefined) {
      HideRecord.encode(message.hideRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHideRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHideRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecord = HideRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetHideRecordResponse>): QueryGetHideRecordResponse {
    const message = createBaseQueryGetHideRecordResponse();
    message.hideRecord = object.hideRecord !== undefined && object.hideRecord !== null ? HideRecord.fromPartial(object.hideRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetHideRecordResponseAmino): QueryGetHideRecordResponse {
    const message = createBaseQueryGetHideRecordResponse();
    if (object.hide_record !== undefined && object.hide_record !== null) {
      message.hideRecord = HideRecord.fromAmino(object.hide_record);
    }
    return message;
  },
  toAmino(message: QueryGetHideRecordResponse): QueryGetHideRecordResponseAmino {
    const obj: any = {};
    obj.hide_record = message.hideRecord ? HideRecord.toAmino(message.hideRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHideRecordResponseAminoMsg): QueryGetHideRecordResponse {
    return QueryGetHideRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHideRecordResponseProtoMsg): QueryGetHideRecordResponse {
    return QueryGetHideRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetHideRecordResponse): Uint8Array {
    return QueryGetHideRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHideRecordResponse): QueryGetHideRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordResponse",
      value: QueryGetHideRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllHideRecordRequest(): QueryAllHideRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllHideRecordRequest defines the QueryAllHideRecordRequest message.
 * @name QueryAllHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordRequest
 */
export const QueryAllHideRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordRequest",
  encode(message: QueryAllHideRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHideRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHideRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllHideRecordRequest>): QueryAllHideRecordRequest {
    const message = createBaseQueryAllHideRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllHideRecordRequestAmino): QueryAllHideRecordRequest {
    const message = createBaseQueryAllHideRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHideRecordRequest): QueryAllHideRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHideRecordRequestAminoMsg): QueryAllHideRecordRequest {
    return QueryAllHideRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHideRecordRequestProtoMsg): QueryAllHideRecordRequest {
    return QueryAllHideRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllHideRecordRequest): Uint8Array {
    return QueryAllHideRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHideRecordRequest): QueryAllHideRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordRequest",
      value: QueryAllHideRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllHideRecordResponse(): QueryAllHideRecordResponse {
  return {
    hideRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllHideRecordResponse defines the QueryAllHideRecordResponse message.
 * @name QueryAllHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordResponse
 */
export const QueryAllHideRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordResponse",
  encode(message: QueryAllHideRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hideRecord) {
      HideRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHideRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHideRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecord.push(HideRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllHideRecordResponse>): QueryAllHideRecordResponse {
    const message = createBaseQueryAllHideRecordResponse();
    message.hideRecord = object.hideRecord?.map(e => HideRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllHideRecordResponseAmino): QueryAllHideRecordResponse {
    const message = createBaseQueryAllHideRecordResponse();
    message.hideRecord = object.hide_record?.map(e => HideRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHideRecordResponse): QueryAllHideRecordResponseAmino {
    const obj: any = {};
    if (message.hideRecord) {
      obj.hide_record = message.hideRecord.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_record = message.hideRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHideRecordResponseAminoMsg): QueryAllHideRecordResponse {
    return QueryAllHideRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHideRecordResponseProtoMsg): QueryAllHideRecordResponse {
    return QueryAllHideRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllHideRecordResponse): Uint8Array {
    return QueryAllHideRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHideRecordResponse): QueryAllHideRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordResponse",
      value: QueryAllHideRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadLockRecordRequest(): QueryGetThreadLockRecordRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryGetThreadLockRecordRequest defines the QueryGetThreadLockRecordRequest message.
 * @name QueryGetThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordRequest
 */
export const QueryGetThreadLockRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest",
  encode(message: QueryGetThreadLockRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadLockRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadLockRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadLockRecordRequest>): QueryGetThreadLockRecordRequest {
    const message = createBaseQueryGetThreadLockRecordRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadLockRecordRequestAmino): QueryGetThreadLockRecordRequest {
    const message = createBaseQueryGetThreadLockRecordRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadLockRecordRequest): QueryGetThreadLockRecordRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadLockRecordRequestAminoMsg): QueryGetThreadLockRecordRequest {
    return QueryGetThreadLockRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadLockRecordRequestProtoMsg): QueryGetThreadLockRecordRequest {
    return QueryGetThreadLockRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadLockRecordRequest): Uint8Array {
    return QueryGetThreadLockRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadLockRecordRequest): QueryGetThreadLockRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest",
      value: QueryGetThreadLockRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadLockRecordResponse(): QueryGetThreadLockRecordResponse {
  return {
    threadLockRecord: ThreadLockRecord.fromPartial({})
  };
}
/**
 * QueryGetThreadLockRecordResponse defines the QueryGetThreadLockRecordResponse message.
 * @name QueryGetThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordResponse
 */
export const QueryGetThreadLockRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse",
  encode(message: QueryGetThreadLockRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadLockRecord !== undefined) {
      ThreadLockRecord.encode(message.threadLockRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadLockRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadLockRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadLockRecord = ThreadLockRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadLockRecordResponse>): QueryGetThreadLockRecordResponse {
    const message = createBaseQueryGetThreadLockRecordResponse();
    message.threadLockRecord = object.threadLockRecord !== undefined && object.threadLockRecord !== null ? ThreadLockRecord.fromPartial(object.threadLockRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadLockRecordResponseAmino): QueryGetThreadLockRecordResponse {
    const message = createBaseQueryGetThreadLockRecordResponse();
    if (object.thread_lock_record !== undefined && object.thread_lock_record !== null) {
      message.threadLockRecord = ThreadLockRecord.fromAmino(object.thread_lock_record);
    }
    return message;
  },
  toAmino(message: QueryGetThreadLockRecordResponse): QueryGetThreadLockRecordResponseAmino {
    const obj: any = {};
    obj.thread_lock_record = message.threadLockRecord ? ThreadLockRecord.toAmino(message.threadLockRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadLockRecordResponseAminoMsg): QueryGetThreadLockRecordResponse {
    return QueryGetThreadLockRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadLockRecordResponseProtoMsg): QueryGetThreadLockRecordResponse {
    return QueryGetThreadLockRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadLockRecordResponse): Uint8Array {
    return QueryGetThreadLockRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadLockRecordResponse): QueryGetThreadLockRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse",
      value: QueryGetThreadLockRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadLockRecordRequest(): QueryAllThreadLockRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadLockRecordRequest defines the QueryAllThreadLockRecordRequest message.
 * @name QueryAllThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordRequest
 */
export const QueryAllThreadLockRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest",
  encode(message: QueryAllThreadLockRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadLockRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadLockRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadLockRecordRequest>): QueryAllThreadLockRecordRequest {
    const message = createBaseQueryAllThreadLockRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadLockRecordRequestAmino): QueryAllThreadLockRecordRequest {
    const message = createBaseQueryAllThreadLockRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadLockRecordRequest): QueryAllThreadLockRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadLockRecordRequestAminoMsg): QueryAllThreadLockRecordRequest {
    return QueryAllThreadLockRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadLockRecordRequestProtoMsg): QueryAllThreadLockRecordRequest {
    return QueryAllThreadLockRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadLockRecordRequest): Uint8Array {
    return QueryAllThreadLockRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadLockRecordRequest): QueryAllThreadLockRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest",
      value: QueryAllThreadLockRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadLockRecordResponse(): QueryAllThreadLockRecordResponse {
  return {
    threadLockRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadLockRecordResponse defines the QueryAllThreadLockRecordResponse message.
 * @name QueryAllThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordResponse
 */
export const QueryAllThreadLockRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse",
  encode(message: QueryAllThreadLockRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadLockRecord) {
      ThreadLockRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadLockRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadLockRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadLockRecord.push(ThreadLockRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadLockRecordResponse>): QueryAllThreadLockRecordResponse {
    const message = createBaseQueryAllThreadLockRecordResponse();
    message.threadLockRecord = object.threadLockRecord?.map(e => ThreadLockRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadLockRecordResponseAmino): QueryAllThreadLockRecordResponse {
    const message = createBaseQueryAllThreadLockRecordResponse();
    message.threadLockRecord = object.thread_lock_record?.map(e => ThreadLockRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadLockRecordResponse): QueryAllThreadLockRecordResponseAmino {
    const obj: any = {};
    if (message.threadLockRecord) {
      obj.thread_lock_record = message.threadLockRecord.map(e => e ? ThreadLockRecord.toAmino(e) : undefined);
    } else {
      obj.thread_lock_record = message.threadLockRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadLockRecordResponseAminoMsg): QueryAllThreadLockRecordResponse {
    return QueryAllThreadLockRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadLockRecordResponseProtoMsg): QueryAllThreadLockRecordResponse {
    return QueryAllThreadLockRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadLockRecordResponse): Uint8Array {
    return QueryAllThreadLockRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadLockRecordResponse): QueryAllThreadLockRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse",
      value: QueryAllThreadLockRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMoveRecordRequest(): QueryGetThreadMoveRecordRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryGetThreadMoveRecordRequest defines the QueryGetThreadMoveRecordRequest message.
 * @name QueryGetThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordRequest
 */
export const QueryGetThreadMoveRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest",
  encode(message: QueryGetThreadMoveRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMoveRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMoveRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMoveRecordRequest>): QueryGetThreadMoveRecordRequest {
    const message = createBaseQueryGetThreadMoveRecordRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadMoveRecordRequestAmino): QueryGetThreadMoveRecordRequest {
    const message = createBaseQueryGetThreadMoveRecordRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMoveRecordRequest): QueryGetThreadMoveRecordRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMoveRecordRequestAminoMsg): QueryGetThreadMoveRecordRequest {
    return QueryGetThreadMoveRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMoveRecordRequestProtoMsg): QueryGetThreadMoveRecordRequest {
    return QueryGetThreadMoveRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadMoveRecordRequest): Uint8Array {
    return QueryGetThreadMoveRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMoveRecordRequest): QueryGetThreadMoveRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest",
      value: QueryGetThreadMoveRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMoveRecordResponse(): QueryGetThreadMoveRecordResponse {
  return {
    threadMoveRecord: ThreadMoveRecord.fromPartial({})
  };
}
/**
 * QueryGetThreadMoveRecordResponse defines the QueryGetThreadMoveRecordResponse message.
 * @name QueryGetThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordResponse
 */
export const QueryGetThreadMoveRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse",
  encode(message: QueryGetThreadMoveRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadMoveRecord !== undefined) {
      ThreadMoveRecord.encode(message.threadMoveRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMoveRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMoveRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMoveRecord = ThreadMoveRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMoveRecordResponse>): QueryGetThreadMoveRecordResponse {
    const message = createBaseQueryGetThreadMoveRecordResponse();
    message.threadMoveRecord = object.threadMoveRecord !== undefined && object.threadMoveRecord !== null ? ThreadMoveRecord.fromPartial(object.threadMoveRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadMoveRecordResponseAmino): QueryGetThreadMoveRecordResponse {
    const message = createBaseQueryGetThreadMoveRecordResponse();
    if (object.thread_move_record !== undefined && object.thread_move_record !== null) {
      message.threadMoveRecord = ThreadMoveRecord.fromAmino(object.thread_move_record);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMoveRecordResponse): QueryGetThreadMoveRecordResponseAmino {
    const obj: any = {};
    obj.thread_move_record = message.threadMoveRecord ? ThreadMoveRecord.toAmino(message.threadMoveRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMoveRecordResponseAminoMsg): QueryGetThreadMoveRecordResponse {
    return QueryGetThreadMoveRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMoveRecordResponseProtoMsg): QueryGetThreadMoveRecordResponse {
    return QueryGetThreadMoveRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadMoveRecordResponse): Uint8Array {
    return QueryGetThreadMoveRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMoveRecordResponse): QueryGetThreadMoveRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse",
      value: QueryGetThreadMoveRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMoveRecordRequest(): QueryAllThreadMoveRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadMoveRecordRequest defines the QueryAllThreadMoveRecordRequest message.
 * @name QueryAllThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordRequest
 */
export const QueryAllThreadMoveRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest",
  encode(message: QueryAllThreadMoveRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMoveRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMoveRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadMoveRecordRequest>): QueryAllThreadMoveRecordRequest {
    const message = createBaseQueryAllThreadMoveRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMoveRecordRequestAmino): QueryAllThreadMoveRecordRequest {
    const message = createBaseQueryAllThreadMoveRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMoveRecordRequest): QueryAllThreadMoveRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMoveRecordRequestAminoMsg): QueryAllThreadMoveRecordRequest {
    return QueryAllThreadMoveRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMoveRecordRequestProtoMsg): QueryAllThreadMoveRecordRequest {
    return QueryAllThreadMoveRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadMoveRecordRequest): Uint8Array {
    return QueryAllThreadMoveRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMoveRecordRequest): QueryAllThreadMoveRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest",
      value: QueryAllThreadMoveRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMoveRecordResponse(): QueryAllThreadMoveRecordResponse {
  return {
    threadMoveRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadMoveRecordResponse defines the QueryAllThreadMoveRecordResponse message.
 * @name QueryAllThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordResponse
 */
export const QueryAllThreadMoveRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse",
  encode(message: QueryAllThreadMoveRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadMoveRecord) {
      ThreadMoveRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMoveRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMoveRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMoveRecord.push(ThreadMoveRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadMoveRecordResponse>): QueryAllThreadMoveRecordResponse {
    const message = createBaseQueryAllThreadMoveRecordResponse();
    message.threadMoveRecord = object.threadMoveRecord?.map(e => ThreadMoveRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMoveRecordResponseAmino): QueryAllThreadMoveRecordResponse {
    const message = createBaseQueryAllThreadMoveRecordResponse();
    message.threadMoveRecord = object.thread_move_record?.map(e => ThreadMoveRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMoveRecordResponse): QueryAllThreadMoveRecordResponseAmino {
    const obj: any = {};
    if (message.threadMoveRecord) {
      obj.thread_move_record = message.threadMoveRecord.map(e => e ? ThreadMoveRecord.toAmino(e) : undefined);
    } else {
      obj.thread_move_record = message.threadMoveRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMoveRecordResponseAminoMsg): QueryAllThreadMoveRecordResponse {
    return QueryAllThreadMoveRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMoveRecordResponseProtoMsg): QueryAllThreadMoveRecordResponse {
    return QueryAllThreadMoveRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadMoveRecordResponse): Uint8Array {
    return QueryAllThreadMoveRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMoveRecordResponse): QueryAllThreadMoveRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse",
      value: QueryAllThreadMoveRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostFlagRequest(): QueryGetPostFlagRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryGetPostFlagRequest defines the QueryGetPostFlagRequest message.
 * @name QueryGetPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagRequest
 */
export const QueryGetPostFlagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagRequest",
  encode(message: QueryGetPostFlagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostFlagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostFlagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostFlagRequest>): QueryGetPostFlagRequest {
    const message = createBaseQueryGetPostFlagRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPostFlagRequestAmino): QueryGetPostFlagRequest {
    const message = createBaseQueryGetPostFlagRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryGetPostFlagRequest): QueryGetPostFlagRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostFlagRequestAminoMsg): QueryGetPostFlagRequest {
    return QueryGetPostFlagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostFlagRequestProtoMsg): QueryGetPostFlagRequest {
    return QueryGetPostFlagRequest.decode(message.value);
  },
  toProto(message: QueryGetPostFlagRequest): Uint8Array {
    return QueryGetPostFlagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostFlagRequest): QueryGetPostFlagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagRequest",
      value: QueryGetPostFlagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostFlagResponse(): QueryGetPostFlagResponse {
  return {
    postFlag: PostFlag.fromPartial({})
  };
}
/**
 * QueryGetPostFlagResponse defines the QueryGetPostFlagResponse message.
 * @name QueryGetPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagResponse
 */
export const QueryGetPostFlagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagResponse",
  encode(message: QueryGetPostFlagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postFlag !== undefined) {
      PostFlag.encode(message.postFlag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostFlagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postFlag = PostFlag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostFlagResponse>): QueryGetPostFlagResponse {
    const message = createBaseQueryGetPostFlagResponse();
    message.postFlag = object.postFlag !== undefined && object.postFlag !== null ? PostFlag.fromPartial(object.postFlag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPostFlagResponseAmino): QueryGetPostFlagResponse {
    const message = createBaseQueryGetPostFlagResponse();
    if (object.post_flag !== undefined && object.post_flag !== null) {
      message.postFlag = PostFlag.fromAmino(object.post_flag);
    }
    return message;
  },
  toAmino(message: QueryGetPostFlagResponse): QueryGetPostFlagResponseAmino {
    const obj: any = {};
    obj.post_flag = message.postFlag ? PostFlag.toAmino(message.postFlag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostFlagResponseAminoMsg): QueryGetPostFlagResponse {
    return QueryGetPostFlagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostFlagResponseProtoMsg): QueryGetPostFlagResponse {
    return QueryGetPostFlagResponse.decode(message.value);
  },
  toProto(message: QueryGetPostFlagResponse): Uint8Array {
    return QueryGetPostFlagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostFlagResponse): QueryGetPostFlagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagResponse",
      value: QueryGetPostFlagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostFlagRequest(): QueryAllPostFlagRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllPostFlagRequest defines the QueryAllPostFlagRequest message.
 * @name QueryAllPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagRequest
 */
export const QueryAllPostFlagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagRequest",
  encode(message: QueryAllPostFlagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostFlagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostFlagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPostFlagRequest>): QueryAllPostFlagRequest {
    const message = createBaseQueryAllPostFlagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostFlagRequestAmino): QueryAllPostFlagRequest {
    const message = createBaseQueryAllPostFlagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostFlagRequest): QueryAllPostFlagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostFlagRequestAminoMsg): QueryAllPostFlagRequest {
    return QueryAllPostFlagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostFlagRequestProtoMsg): QueryAllPostFlagRequest {
    return QueryAllPostFlagRequest.decode(message.value);
  },
  toProto(message: QueryAllPostFlagRequest): Uint8Array {
    return QueryAllPostFlagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostFlagRequest): QueryAllPostFlagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagRequest",
      value: QueryAllPostFlagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostFlagResponse(): QueryAllPostFlagResponse {
  return {
    postFlag: [],
    pagination: undefined
  };
}
/**
 * QueryAllPostFlagResponse defines the QueryAllPostFlagResponse message.
 * @name QueryAllPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagResponse
 */
export const QueryAllPostFlagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagResponse",
  encode(message: QueryAllPostFlagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.postFlag) {
      PostFlag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostFlagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postFlag.push(PostFlag.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPostFlagResponse>): QueryAllPostFlagResponse {
    const message = createBaseQueryAllPostFlagResponse();
    message.postFlag = object.postFlag?.map(e => PostFlag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostFlagResponseAmino): QueryAllPostFlagResponse {
    const message = createBaseQueryAllPostFlagResponse();
    message.postFlag = object.post_flag?.map(e => PostFlag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostFlagResponse): QueryAllPostFlagResponseAmino {
    const obj: any = {};
    if (message.postFlag) {
      obj.post_flag = message.postFlag.map(e => e ? PostFlag.toAmino(e) : undefined);
    } else {
      obj.post_flag = message.postFlag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostFlagResponseAminoMsg): QueryAllPostFlagResponse {
    return QueryAllPostFlagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostFlagResponseProtoMsg): QueryAllPostFlagResponse {
    return QueryAllPostFlagResponse.decode(message.value);
  },
  toProto(message: QueryAllPostFlagResponse): Uint8Array {
    return QueryAllPostFlagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostFlagResponse): QueryAllPostFlagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagResponse",
      value: QueryAllPostFlagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBountyRequest(): QueryGetBountyRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetBountyRequest defines the QueryGetBountyRequest message.
 * @name QueryGetBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyRequest
 */
export const QueryGetBountyRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyRequest",
  encode(message: QueryGetBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBountyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBountyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBountyRequest>): QueryGetBountyRequest {
    const message = createBaseQueryGetBountyRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetBountyRequestAmino): QueryGetBountyRequest {
    const message = createBaseQueryGetBountyRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetBountyRequest): QueryGetBountyRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBountyRequestAminoMsg): QueryGetBountyRequest {
    return QueryGetBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBountyRequestProtoMsg): QueryGetBountyRequest {
    return QueryGetBountyRequest.decode(message.value);
  },
  toProto(message: QueryGetBountyRequest): Uint8Array {
    return QueryGetBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBountyRequest): QueryGetBountyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetBountyRequest",
      value: QueryGetBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBountyResponse(): QueryGetBountyResponse {
  return {
    bounty: Bounty.fromPartial({})
  };
}
/**
 * QueryGetBountyResponse defines the QueryGetBountyResponse message.
 * @name QueryGetBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyResponse
 */
export const QueryGetBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyResponse",
  encode(message: QueryGetBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bounty !== undefined) {
      Bounty.encode(message.bounty, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bounty = Bounty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBountyResponse>): QueryGetBountyResponse {
    const message = createBaseQueryGetBountyResponse();
    message.bounty = object.bounty !== undefined && object.bounty !== null ? Bounty.fromPartial(object.bounty) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBountyResponseAmino): QueryGetBountyResponse {
    const message = createBaseQueryGetBountyResponse();
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Bounty.fromAmino(object.bounty);
    }
    return message;
  },
  toAmino(message: QueryGetBountyResponse): QueryGetBountyResponseAmino {
    const obj: any = {};
    obj.bounty = message.bounty ? Bounty.toAmino(message.bounty) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBountyResponseAminoMsg): QueryGetBountyResponse {
    return QueryGetBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBountyResponseProtoMsg): QueryGetBountyResponse {
    return QueryGetBountyResponse.decode(message.value);
  },
  toProto(message: QueryGetBountyResponse): Uint8Array {
    return QueryGetBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBountyResponse): QueryGetBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetBountyResponse",
      value: QueryGetBountyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBountyRequest(): QueryAllBountyRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllBountyRequest defines the QueryAllBountyRequest message.
 * @name QueryAllBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyRequest
 */
export const QueryAllBountyRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyRequest",
  encode(message: QueryAllBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBountyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBountyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllBountyRequest>): QueryAllBountyRequest {
    const message = createBaseQueryAllBountyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBountyRequestAmino): QueryAllBountyRequest {
    const message = createBaseQueryAllBountyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBountyRequest): QueryAllBountyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBountyRequestAminoMsg): QueryAllBountyRequest {
    return QueryAllBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBountyRequestProtoMsg): QueryAllBountyRequest {
    return QueryAllBountyRequest.decode(message.value);
  },
  toProto(message: QueryAllBountyRequest): Uint8Array {
    return QueryAllBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBountyRequest): QueryAllBountyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllBountyRequest",
      value: QueryAllBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBountyResponse(): QueryAllBountyResponse {
  return {
    bounty: [],
    pagination: undefined
  };
}
/**
 * QueryAllBountyResponse defines the QueryAllBountyResponse message.
 * @name QueryAllBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyResponse
 */
export const QueryAllBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyResponse",
  encode(message: QueryAllBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bounty) {
      Bounty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bounty.push(Bounty.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllBountyResponse>): QueryAllBountyResponse {
    const message = createBaseQueryAllBountyResponse();
    message.bounty = object.bounty?.map(e => Bounty.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBountyResponseAmino): QueryAllBountyResponse {
    const message = createBaseQueryAllBountyResponse();
    message.bounty = object.bounty?.map(e => Bounty.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBountyResponse): QueryAllBountyResponseAmino {
    const obj: any = {};
    if (message.bounty) {
      obj.bounty = message.bounty.map(e => e ? Bounty.toAmino(e) : undefined);
    } else {
      obj.bounty = message.bounty;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBountyResponseAminoMsg): QueryAllBountyResponse {
    return QueryAllBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBountyResponseProtoMsg): QueryAllBountyResponse {
    return QueryAllBountyResponse.decode(message.value);
  },
  toProto(message: QueryAllBountyResponse): Uint8Array {
    return QueryAllBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBountyResponse): QueryAllBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllBountyResponse",
      value: QueryAllBountyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetRequest(): QueryGetTagBudgetRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetTagBudgetRequest defines the QueryGetTagBudgetRequest message.
 * @name QueryGetTagBudgetRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetRequest
 */
export const QueryGetTagBudgetRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetRequest",
  encode(message: QueryGetTagBudgetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagBudgetRequest>): QueryGetTagBudgetRequest {
    const message = createBaseQueryGetTagBudgetRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTagBudgetRequestAmino): QueryGetTagBudgetRequest {
    const message = createBaseQueryGetTagBudgetRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetRequest): QueryGetTagBudgetRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetRequestAminoMsg): QueryGetTagBudgetRequest {
    return QueryGetTagBudgetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetRequestProtoMsg): QueryGetTagBudgetRequest {
    return QueryGetTagBudgetRequest.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetRequest): Uint8Array {
    return QueryGetTagBudgetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetRequest): QueryGetTagBudgetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetRequest",
      value: QueryGetTagBudgetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetResponse(): QueryGetTagBudgetResponse {
  return {
    tagBudget: TagBudget.fromPartial({})
  };
}
/**
 * QueryGetTagBudgetResponse defines the QueryGetTagBudgetResponse message.
 * @name QueryGetTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetResponse
 */
export const QueryGetTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetResponse",
  encode(message: QueryGetTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagBudget !== undefined) {
      TagBudget.encode(message.tagBudget, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudget = TagBudget.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagBudgetResponse>): QueryGetTagBudgetResponse {
    const message = createBaseQueryGetTagBudgetResponse();
    message.tagBudget = object.tagBudget !== undefined && object.tagBudget !== null ? TagBudget.fromPartial(object.tagBudget) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagBudgetResponseAmino): QueryGetTagBudgetResponse {
    const message = createBaseQueryGetTagBudgetResponse();
    if (object.tag_budget !== undefined && object.tag_budget !== null) {
      message.tagBudget = TagBudget.fromAmino(object.tag_budget);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetResponse): QueryGetTagBudgetResponseAmino {
    const obj: any = {};
    obj.tag_budget = message.tagBudget ? TagBudget.toAmino(message.tagBudget) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetResponseAminoMsg): QueryGetTagBudgetResponse {
    return QueryGetTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetResponseProtoMsg): QueryGetTagBudgetResponse {
    return QueryGetTagBudgetResponse.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetResponse): Uint8Array {
    return QueryGetTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetResponse): QueryGetTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetResponse",
      value: QueryGetTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetRequest(): QueryAllTagBudgetRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetRequest defines the QueryAllTagBudgetRequest message.
 * @name QueryAllTagBudgetRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetRequest
 */
export const QueryAllTagBudgetRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetRequest",
  encode(message: QueryAllTagBudgetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagBudgetRequest>): QueryAllTagBudgetRequest {
    const message = createBaseQueryAllTagBudgetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetRequestAmino): QueryAllTagBudgetRequest {
    const message = createBaseQueryAllTagBudgetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetRequest): QueryAllTagBudgetRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetRequestAminoMsg): QueryAllTagBudgetRequest {
    return QueryAllTagBudgetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetRequestProtoMsg): QueryAllTagBudgetRequest {
    return QueryAllTagBudgetRequest.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetRequest): Uint8Array {
    return QueryAllTagBudgetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetRequest): QueryAllTagBudgetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetRequest",
      value: QueryAllTagBudgetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetResponse(): QueryAllTagBudgetResponse {
  return {
    tagBudget: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetResponse defines the QueryAllTagBudgetResponse message.
 * @name QueryAllTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetResponse
 */
export const QueryAllTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetResponse",
  encode(message: QueryAllTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tagBudget) {
      TagBudget.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudget.push(TagBudget.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagBudgetResponse>): QueryAllTagBudgetResponse {
    const message = createBaseQueryAllTagBudgetResponse();
    message.tagBudget = object.tagBudget?.map(e => TagBudget.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetResponseAmino): QueryAllTagBudgetResponse {
    const message = createBaseQueryAllTagBudgetResponse();
    message.tagBudget = object.tag_budget?.map(e => TagBudget.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetResponse): QueryAllTagBudgetResponseAmino {
    const obj: any = {};
    if (message.tagBudget) {
      obj.tag_budget = message.tagBudget.map(e => e ? TagBudget.toAmino(e) : undefined);
    } else {
      obj.tag_budget = message.tagBudget;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetResponseAminoMsg): QueryAllTagBudgetResponse {
    return QueryAllTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetResponseProtoMsg): QueryAllTagBudgetResponse {
    return QueryAllTagBudgetResponse.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetResponse): Uint8Array {
    return QueryAllTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetResponse): QueryAllTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetResponse",
      value: QueryAllTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetAwardRequest(): QueryGetTagBudgetAwardRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetTagBudgetAwardRequest defines the QueryGetTagBudgetAwardRequest message.
 * @name QueryGetTagBudgetAwardRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetAwardRequest
 */
export const QueryGetTagBudgetAwardRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetAwardRequest",
  encode(message: QueryGetTagBudgetAwardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetAwardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetAwardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagBudgetAwardRequest>): QueryGetTagBudgetAwardRequest {
    const message = createBaseQueryGetTagBudgetAwardRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTagBudgetAwardRequestAmino): QueryGetTagBudgetAwardRequest {
    const message = createBaseQueryGetTagBudgetAwardRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetAwardRequest): QueryGetTagBudgetAwardRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetAwardRequestAminoMsg): QueryGetTagBudgetAwardRequest {
    return QueryGetTagBudgetAwardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetAwardRequestProtoMsg): QueryGetTagBudgetAwardRequest {
    return QueryGetTagBudgetAwardRequest.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetAwardRequest): Uint8Array {
    return QueryGetTagBudgetAwardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetAwardRequest): QueryGetTagBudgetAwardRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetAwardRequest",
      value: QueryGetTagBudgetAwardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetAwardResponse(): QueryGetTagBudgetAwardResponse {
  return {
    tagBudgetAward: TagBudgetAward.fromPartial({})
  };
}
/**
 * QueryGetTagBudgetAwardResponse defines the QueryGetTagBudgetAwardResponse message.
 * @name QueryGetTagBudgetAwardResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagBudgetAwardResponse
 */
export const QueryGetTagBudgetAwardResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetAwardResponse",
  encode(message: QueryGetTagBudgetAwardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagBudgetAward !== undefined) {
      TagBudgetAward.encode(message.tagBudgetAward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetAwardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetAwardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudgetAward = TagBudgetAward.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagBudgetAwardResponse>): QueryGetTagBudgetAwardResponse {
    const message = createBaseQueryGetTagBudgetAwardResponse();
    message.tagBudgetAward = object.tagBudgetAward !== undefined && object.tagBudgetAward !== null ? TagBudgetAward.fromPartial(object.tagBudgetAward) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagBudgetAwardResponseAmino): QueryGetTagBudgetAwardResponse {
    const message = createBaseQueryGetTagBudgetAwardResponse();
    if (object.tag_budget_award !== undefined && object.tag_budget_award !== null) {
      message.tagBudgetAward = TagBudgetAward.fromAmino(object.tag_budget_award);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetAwardResponse): QueryGetTagBudgetAwardResponseAmino {
    const obj: any = {};
    obj.tag_budget_award = message.tagBudgetAward ? TagBudgetAward.toAmino(message.tagBudgetAward) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetAwardResponseAminoMsg): QueryGetTagBudgetAwardResponse {
    return QueryGetTagBudgetAwardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetAwardResponseProtoMsg): QueryGetTagBudgetAwardResponse {
    return QueryGetTagBudgetAwardResponse.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetAwardResponse): Uint8Array {
    return QueryGetTagBudgetAwardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetAwardResponse): QueryGetTagBudgetAwardResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagBudgetAwardResponse",
      value: QueryGetTagBudgetAwardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetAwardRequest(): QueryAllTagBudgetAwardRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetAwardRequest defines the QueryAllTagBudgetAwardRequest message.
 * @name QueryAllTagBudgetAwardRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetAwardRequest
 */
export const QueryAllTagBudgetAwardRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetAwardRequest",
  encode(message: QueryAllTagBudgetAwardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetAwardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetAwardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagBudgetAwardRequest>): QueryAllTagBudgetAwardRequest {
    const message = createBaseQueryAllTagBudgetAwardRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetAwardRequestAmino): QueryAllTagBudgetAwardRequest {
    const message = createBaseQueryAllTagBudgetAwardRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetAwardRequest): QueryAllTagBudgetAwardRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetAwardRequestAminoMsg): QueryAllTagBudgetAwardRequest {
    return QueryAllTagBudgetAwardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetAwardRequestProtoMsg): QueryAllTagBudgetAwardRequest {
    return QueryAllTagBudgetAwardRequest.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetAwardRequest): Uint8Array {
    return QueryAllTagBudgetAwardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetAwardRequest): QueryAllTagBudgetAwardRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetAwardRequest",
      value: QueryAllTagBudgetAwardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetAwardResponse(): QueryAllTagBudgetAwardResponse {
  return {
    tagBudgetAward: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetAwardResponse defines the QueryAllTagBudgetAwardResponse message.
 * @name QueryAllTagBudgetAwardResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagBudgetAwardResponse
 */
export const QueryAllTagBudgetAwardResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetAwardResponse",
  encode(message: QueryAllTagBudgetAwardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tagBudgetAward) {
      TagBudgetAward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetAwardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetAwardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudgetAward.push(TagBudgetAward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagBudgetAwardResponse>): QueryAllTagBudgetAwardResponse {
    const message = createBaseQueryAllTagBudgetAwardResponse();
    message.tagBudgetAward = object.tagBudgetAward?.map(e => TagBudgetAward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetAwardResponseAmino): QueryAllTagBudgetAwardResponse {
    const message = createBaseQueryAllTagBudgetAwardResponse();
    message.tagBudgetAward = object.tag_budget_award?.map(e => TagBudgetAward.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetAwardResponse): QueryAllTagBudgetAwardResponseAmino {
    const obj: any = {};
    if (message.tagBudgetAward) {
      obj.tag_budget_award = message.tagBudgetAward.map(e => e ? TagBudgetAward.toAmino(e) : undefined);
    } else {
      obj.tag_budget_award = message.tagBudgetAward;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetAwardResponseAminoMsg): QueryAllTagBudgetAwardResponse {
    return QueryAllTagBudgetAwardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetAwardResponseProtoMsg): QueryAllTagBudgetAwardResponse {
    return QueryAllTagBudgetAwardResponse.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetAwardResponse): Uint8Array {
    return QueryAllTagBudgetAwardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetAwardResponse): QueryAllTagBudgetAwardResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagBudgetAwardResponse",
      value: QueryAllTagBudgetAwardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMetadataRequest(): QueryGetThreadMetadataRequest {
  return {
    threadId: BigInt(0)
  };
}
/**
 * QueryGetThreadMetadataRequest defines the QueryGetThreadMetadataRequest message.
 * @name QueryGetThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataRequest
 */
export const QueryGetThreadMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest",
  encode(message: QueryGetThreadMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMetadataRequest>): QueryGetThreadMetadataRequest {
    const message = createBaseQueryGetThreadMetadataRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadMetadataRequestAmino): QueryGetThreadMetadataRequest {
    const message = createBaseQueryGetThreadMetadataRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMetadataRequest): QueryGetThreadMetadataRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMetadataRequestAminoMsg): QueryGetThreadMetadataRequest {
    return QueryGetThreadMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMetadataRequestProtoMsg): QueryGetThreadMetadataRequest {
    return QueryGetThreadMetadataRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadMetadataRequest): Uint8Array {
    return QueryGetThreadMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMetadataRequest): QueryGetThreadMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest",
      value: QueryGetThreadMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMetadataResponse(): QueryGetThreadMetadataResponse {
  return {
    threadMetadata: ThreadMetadata.fromPartial({})
  };
}
/**
 * QueryGetThreadMetadataResponse defines the QueryGetThreadMetadataResponse message.
 * @name QueryGetThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataResponse
 */
export const QueryGetThreadMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse",
  encode(message: QueryGetThreadMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadMetadata !== undefined) {
      ThreadMetadata.encode(message.threadMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMetadata = ThreadMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMetadataResponse>): QueryGetThreadMetadataResponse {
    const message = createBaseQueryGetThreadMetadataResponse();
    message.threadMetadata = object.threadMetadata !== undefined && object.threadMetadata !== null ? ThreadMetadata.fromPartial(object.threadMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadMetadataResponseAmino): QueryGetThreadMetadataResponse {
    const message = createBaseQueryGetThreadMetadataResponse();
    if (object.thread_metadata !== undefined && object.thread_metadata !== null) {
      message.threadMetadata = ThreadMetadata.fromAmino(object.thread_metadata);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMetadataResponse): QueryGetThreadMetadataResponseAmino {
    const obj: any = {};
    obj.thread_metadata = message.threadMetadata ? ThreadMetadata.toAmino(message.threadMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMetadataResponseAminoMsg): QueryGetThreadMetadataResponse {
    return QueryGetThreadMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMetadataResponseProtoMsg): QueryGetThreadMetadataResponse {
    return QueryGetThreadMetadataResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadMetadataResponse): Uint8Array {
    return QueryGetThreadMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMetadataResponse): QueryGetThreadMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse",
      value: QueryGetThreadMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMetadataRequest(): QueryAllThreadMetadataRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadMetadataRequest defines the QueryAllThreadMetadataRequest message.
 * @name QueryAllThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataRequest
 */
export const QueryAllThreadMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest",
  encode(message: QueryAllThreadMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadMetadataRequest>): QueryAllThreadMetadataRequest {
    const message = createBaseQueryAllThreadMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMetadataRequestAmino): QueryAllThreadMetadataRequest {
    const message = createBaseQueryAllThreadMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMetadataRequest): QueryAllThreadMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMetadataRequestAminoMsg): QueryAllThreadMetadataRequest {
    return QueryAllThreadMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMetadataRequestProtoMsg): QueryAllThreadMetadataRequest {
    return QueryAllThreadMetadataRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadMetadataRequest): Uint8Array {
    return QueryAllThreadMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMetadataRequest): QueryAllThreadMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest",
      value: QueryAllThreadMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMetadataResponse(): QueryAllThreadMetadataResponse {
  return {
    threadMetadata: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadMetadataResponse defines the QueryAllThreadMetadataResponse message.
 * @name QueryAllThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataResponse
 */
export const QueryAllThreadMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse",
  encode(message: QueryAllThreadMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadMetadata) {
      ThreadMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMetadata.push(ThreadMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadMetadataResponse>): QueryAllThreadMetadataResponse {
    const message = createBaseQueryAllThreadMetadataResponse();
    message.threadMetadata = object.threadMetadata?.map(e => ThreadMetadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMetadataResponseAmino): QueryAllThreadMetadataResponse {
    const message = createBaseQueryAllThreadMetadataResponse();
    message.threadMetadata = object.thread_metadata?.map(e => ThreadMetadata.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMetadataResponse): QueryAllThreadMetadataResponseAmino {
    const obj: any = {};
    if (message.threadMetadata) {
      obj.thread_metadata = message.threadMetadata.map(e => e ? ThreadMetadata.toAmino(e) : undefined);
    } else {
      obj.thread_metadata = message.threadMetadata;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMetadataResponseAminoMsg): QueryAllThreadMetadataResponse {
    return QueryAllThreadMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMetadataResponseProtoMsg): QueryAllThreadMetadataResponse {
    return QueryAllThreadMetadataResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadMetadataResponse): Uint8Array {
    return QueryAllThreadMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMetadataResponse): QueryAllThreadMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse",
      value: QueryAllThreadMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowRequest(): QueryGetThreadFollowRequest {
  return {
    follower: ""
  };
}
/**
 * QueryGetThreadFollowRequest defines the QueryGetThreadFollowRequest message.
 * @name QueryGetThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowRequest
 */
export const QueryGetThreadFollowRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowRequest",
  encode(message: QueryGetThreadFollowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.follower !== "") {
      writer.uint32(10).string(message.follower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.follower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowRequest>): QueryGetThreadFollowRequest {
    const message = createBaseQueryGetThreadFollowRequest();
    message.follower = object.follower ?? "";
    return message;
  },
  fromAmino(object: QueryGetThreadFollowRequestAmino): QueryGetThreadFollowRequest {
    const message = createBaseQueryGetThreadFollowRequest();
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = object.follower;
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowRequest): QueryGetThreadFollowRequestAmino {
    const obj: any = {};
    obj.follower = message.follower === "" ? undefined : message.follower;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowRequestAminoMsg): QueryGetThreadFollowRequest {
    return QueryGetThreadFollowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowRequestProtoMsg): QueryGetThreadFollowRequest {
    return QueryGetThreadFollowRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowRequest): Uint8Array {
    return QueryGetThreadFollowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowRequest): QueryGetThreadFollowRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowRequest",
      value: QueryGetThreadFollowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowResponse(): QueryGetThreadFollowResponse {
  return {
    threadFollow: ThreadFollow.fromPartial({})
  };
}
/**
 * QueryGetThreadFollowResponse defines the QueryGetThreadFollowResponse message.
 * @name QueryGetThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowResponse
 */
export const QueryGetThreadFollowResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowResponse",
  encode(message: QueryGetThreadFollowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadFollow !== undefined) {
      ThreadFollow.encode(message.threadFollow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollow = ThreadFollow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowResponse>): QueryGetThreadFollowResponse {
    const message = createBaseQueryGetThreadFollowResponse();
    message.threadFollow = object.threadFollow !== undefined && object.threadFollow !== null ? ThreadFollow.fromPartial(object.threadFollow) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadFollowResponseAmino): QueryGetThreadFollowResponse {
    const message = createBaseQueryGetThreadFollowResponse();
    if (object.thread_follow !== undefined && object.thread_follow !== null) {
      message.threadFollow = ThreadFollow.fromAmino(object.thread_follow);
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowResponse): QueryGetThreadFollowResponseAmino {
    const obj: any = {};
    obj.thread_follow = message.threadFollow ? ThreadFollow.toAmino(message.threadFollow) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowResponseAminoMsg): QueryGetThreadFollowResponse {
    return QueryGetThreadFollowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowResponseProtoMsg): QueryGetThreadFollowResponse {
    return QueryGetThreadFollowResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowResponse): Uint8Array {
    return QueryGetThreadFollowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowResponse): QueryGetThreadFollowResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowResponse",
      value: QueryGetThreadFollowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowRequest(): QueryAllThreadFollowRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowRequest defines the QueryAllThreadFollowRequest message.
 * @name QueryAllThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowRequest
 */
export const QueryAllThreadFollowRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowRequest",
  encode(message: QueryAllThreadFollowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadFollowRequest>): QueryAllThreadFollowRequest {
    const message = createBaseQueryAllThreadFollowRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowRequestAmino): QueryAllThreadFollowRequest {
    const message = createBaseQueryAllThreadFollowRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowRequest): QueryAllThreadFollowRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowRequestAminoMsg): QueryAllThreadFollowRequest {
    return QueryAllThreadFollowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowRequestProtoMsg): QueryAllThreadFollowRequest {
    return QueryAllThreadFollowRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowRequest): Uint8Array {
    return QueryAllThreadFollowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowRequest): QueryAllThreadFollowRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowRequest",
      value: QueryAllThreadFollowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowResponse(): QueryAllThreadFollowResponse {
  return {
    threadFollow: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowResponse defines the QueryAllThreadFollowResponse message.
 * @name QueryAllThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowResponse
 */
export const QueryAllThreadFollowResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowResponse",
  encode(message: QueryAllThreadFollowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadFollow) {
      ThreadFollow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollow.push(ThreadFollow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadFollowResponse>): QueryAllThreadFollowResponse {
    const message = createBaseQueryAllThreadFollowResponse();
    message.threadFollow = object.threadFollow?.map(e => ThreadFollow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowResponseAmino): QueryAllThreadFollowResponse {
    const message = createBaseQueryAllThreadFollowResponse();
    message.threadFollow = object.thread_follow?.map(e => ThreadFollow.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowResponse): QueryAllThreadFollowResponseAmino {
    const obj: any = {};
    if (message.threadFollow) {
      obj.thread_follow = message.threadFollow.map(e => e ? ThreadFollow.toAmino(e) : undefined);
    } else {
      obj.thread_follow = message.threadFollow;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowResponseAminoMsg): QueryAllThreadFollowResponse {
    return QueryAllThreadFollowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowResponseProtoMsg): QueryAllThreadFollowResponse {
    return QueryAllThreadFollowResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowResponse): Uint8Array {
    return QueryAllThreadFollowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowResponse): QueryAllThreadFollowResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowResponse",
      value: QueryAllThreadFollowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowCountRequest(): QueryGetThreadFollowCountRequest {
  return {
    threadId: BigInt(0)
  };
}
/**
 * QueryGetThreadFollowCountRequest defines the QueryGetThreadFollowCountRequest message.
 * @name QueryGetThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountRequest
 */
export const QueryGetThreadFollowCountRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest",
  encode(message: QueryGetThreadFollowCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowCountRequest>): QueryGetThreadFollowCountRequest {
    const message = createBaseQueryGetThreadFollowCountRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadFollowCountRequestAmino): QueryGetThreadFollowCountRequest {
    const message = createBaseQueryGetThreadFollowCountRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowCountRequest): QueryGetThreadFollowCountRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowCountRequestAminoMsg): QueryGetThreadFollowCountRequest {
    return QueryGetThreadFollowCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowCountRequestProtoMsg): QueryGetThreadFollowCountRequest {
    return QueryGetThreadFollowCountRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowCountRequest): Uint8Array {
    return QueryGetThreadFollowCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowCountRequest): QueryGetThreadFollowCountRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest",
      value: QueryGetThreadFollowCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowCountResponse(): QueryGetThreadFollowCountResponse {
  return {
    threadFollowCount: ThreadFollowCount.fromPartial({})
  };
}
/**
 * QueryGetThreadFollowCountResponse defines the QueryGetThreadFollowCountResponse message.
 * @name QueryGetThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountResponse
 */
export const QueryGetThreadFollowCountResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse",
  encode(message: QueryGetThreadFollowCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadFollowCount !== undefined) {
      ThreadFollowCount.encode(message.threadFollowCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollowCount = ThreadFollowCount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowCountResponse>): QueryGetThreadFollowCountResponse {
    const message = createBaseQueryGetThreadFollowCountResponse();
    message.threadFollowCount = object.threadFollowCount !== undefined && object.threadFollowCount !== null ? ThreadFollowCount.fromPartial(object.threadFollowCount) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadFollowCountResponseAmino): QueryGetThreadFollowCountResponse {
    const message = createBaseQueryGetThreadFollowCountResponse();
    if (object.thread_follow_count !== undefined && object.thread_follow_count !== null) {
      message.threadFollowCount = ThreadFollowCount.fromAmino(object.thread_follow_count);
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowCountResponse): QueryGetThreadFollowCountResponseAmino {
    const obj: any = {};
    obj.thread_follow_count = message.threadFollowCount ? ThreadFollowCount.toAmino(message.threadFollowCount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowCountResponseAminoMsg): QueryGetThreadFollowCountResponse {
    return QueryGetThreadFollowCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowCountResponseProtoMsg): QueryGetThreadFollowCountResponse {
    return QueryGetThreadFollowCountResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowCountResponse): Uint8Array {
    return QueryGetThreadFollowCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowCountResponse): QueryGetThreadFollowCountResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse",
      value: QueryGetThreadFollowCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowCountRequest(): QueryAllThreadFollowCountRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowCountRequest defines the QueryAllThreadFollowCountRequest message.
 * @name QueryAllThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountRequest
 */
export const QueryAllThreadFollowCountRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest",
  encode(message: QueryAllThreadFollowCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadFollowCountRequest>): QueryAllThreadFollowCountRequest {
    const message = createBaseQueryAllThreadFollowCountRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowCountRequestAmino): QueryAllThreadFollowCountRequest {
    const message = createBaseQueryAllThreadFollowCountRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowCountRequest): QueryAllThreadFollowCountRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowCountRequestAminoMsg): QueryAllThreadFollowCountRequest {
    return QueryAllThreadFollowCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowCountRequestProtoMsg): QueryAllThreadFollowCountRequest {
    return QueryAllThreadFollowCountRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowCountRequest): Uint8Array {
    return QueryAllThreadFollowCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowCountRequest): QueryAllThreadFollowCountRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest",
      value: QueryAllThreadFollowCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowCountResponse(): QueryAllThreadFollowCountResponse {
  return {
    threadFollowCount: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowCountResponse defines the QueryAllThreadFollowCountResponse message.
 * @name QueryAllThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountResponse
 */
export const QueryAllThreadFollowCountResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse",
  encode(message: QueryAllThreadFollowCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadFollowCount) {
      ThreadFollowCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollowCount.push(ThreadFollowCount.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllThreadFollowCountResponse>): QueryAllThreadFollowCountResponse {
    const message = createBaseQueryAllThreadFollowCountResponse();
    message.threadFollowCount = object.threadFollowCount?.map(e => ThreadFollowCount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowCountResponseAmino): QueryAllThreadFollowCountResponse {
    const message = createBaseQueryAllThreadFollowCountResponse();
    message.threadFollowCount = object.thread_follow_count?.map(e => ThreadFollowCount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowCountResponse): QueryAllThreadFollowCountResponseAmino {
    const obj: any = {};
    if (message.threadFollowCount) {
      obj.thread_follow_count = message.threadFollowCount.map(e => e ? ThreadFollowCount.toAmino(e) : undefined);
    } else {
      obj.thread_follow_count = message.threadFollowCount;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowCountResponseAminoMsg): QueryAllThreadFollowCountResponse {
    return QueryAllThreadFollowCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowCountResponseProtoMsg): QueryAllThreadFollowCountResponse {
    return QueryAllThreadFollowCountResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowCountResponse): Uint8Array {
    return QueryAllThreadFollowCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowCountResponse): QueryAllThreadFollowCountResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse",
      value: QueryAllThreadFollowCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetArchiveMetadataRequest(): QueryGetArchiveMetadataRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryGetArchiveMetadataRequest defines the QueryGetArchiveMetadataRequest message.
 * @name QueryGetArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataRequest
 */
export const QueryGetArchiveMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest",
  encode(message: QueryGetArchiveMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetArchiveMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetArchiveMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetArchiveMetadataRequest>): QueryGetArchiveMetadataRequest {
    const message = createBaseQueryGetArchiveMetadataRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetArchiveMetadataRequestAmino): QueryGetArchiveMetadataRequest {
    const message = createBaseQueryGetArchiveMetadataRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryGetArchiveMetadataRequest): QueryGetArchiveMetadataRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetArchiveMetadataRequestAminoMsg): QueryGetArchiveMetadataRequest {
    return QueryGetArchiveMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetArchiveMetadataRequestProtoMsg): QueryGetArchiveMetadataRequest {
    return QueryGetArchiveMetadataRequest.decode(message.value);
  },
  toProto(message: QueryGetArchiveMetadataRequest): Uint8Array {
    return QueryGetArchiveMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetArchiveMetadataRequest): QueryGetArchiveMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest",
      value: QueryGetArchiveMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetArchiveMetadataResponse(): QueryGetArchiveMetadataResponse {
  return {
    archiveMetadata: ArchiveMetadata.fromPartial({})
  };
}
/**
 * QueryGetArchiveMetadataResponse defines the QueryGetArchiveMetadataResponse message.
 * @name QueryGetArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataResponse
 */
export const QueryGetArchiveMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse",
  encode(message: QueryGetArchiveMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.archiveMetadata !== undefined) {
      ArchiveMetadata.encode(message.archiveMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetArchiveMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetArchiveMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archiveMetadata = ArchiveMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetArchiveMetadataResponse>): QueryGetArchiveMetadataResponse {
    const message = createBaseQueryGetArchiveMetadataResponse();
    message.archiveMetadata = object.archiveMetadata !== undefined && object.archiveMetadata !== null ? ArchiveMetadata.fromPartial(object.archiveMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryGetArchiveMetadataResponseAmino): QueryGetArchiveMetadataResponse {
    const message = createBaseQueryGetArchiveMetadataResponse();
    if (object.archive_metadata !== undefined && object.archive_metadata !== null) {
      message.archiveMetadata = ArchiveMetadata.fromAmino(object.archive_metadata);
    }
    return message;
  },
  toAmino(message: QueryGetArchiveMetadataResponse): QueryGetArchiveMetadataResponseAmino {
    const obj: any = {};
    obj.archive_metadata = message.archiveMetadata ? ArchiveMetadata.toAmino(message.archiveMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetArchiveMetadataResponseAminoMsg): QueryGetArchiveMetadataResponse {
    return QueryGetArchiveMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetArchiveMetadataResponseProtoMsg): QueryGetArchiveMetadataResponse {
    return QueryGetArchiveMetadataResponse.decode(message.value);
  },
  toProto(message: QueryGetArchiveMetadataResponse): Uint8Array {
    return QueryGetArchiveMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetArchiveMetadataResponse): QueryGetArchiveMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse",
      value: QueryGetArchiveMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllArchiveMetadataRequest(): QueryAllArchiveMetadataRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllArchiveMetadataRequest defines the QueryAllArchiveMetadataRequest message.
 * @name QueryAllArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataRequest
 */
export const QueryAllArchiveMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest",
  encode(message: QueryAllArchiveMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllArchiveMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArchiveMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllArchiveMetadataRequest>): QueryAllArchiveMetadataRequest {
    const message = createBaseQueryAllArchiveMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllArchiveMetadataRequestAmino): QueryAllArchiveMetadataRequest {
    const message = createBaseQueryAllArchiveMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllArchiveMetadataRequest): QueryAllArchiveMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllArchiveMetadataRequestAminoMsg): QueryAllArchiveMetadataRequest {
    return QueryAllArchiveMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllArchiveMetadataRequestProtoMsg): QueryAllArchiveMetadataRequest {
    return QueryAllArchiveMetadataRequest.decode(message.value);
  },
  toProto(message: QueryAllArchiveMetadataRequest): Uint8Array {
    return QueryAllArchiveMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllArchiveMetadataRequest): QueryAllArchiveMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest",
      value: QueryAllArchiveMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllArchiveMetadataResponse(): QueryAllArchiveMetadataResponse {
  return {
    archiveMetadata: [],
    pagination: undefined
  };
}
/**
 * QueryAllArchiveMetadataResponse defines the QueryAllArchiveMetadataResponse message.
 * @name QueryAllArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataResponse
 */
export const QueryAllArchiveMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse",
  encode(message: QueryAllArchiveMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.archiveMetadata) {
      ArchiveMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllArchiveMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArchiveMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archiveMetadata.push(ArchiveMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllArchiveMetadataResponse>): QueryAllArchiveMetadataResponse {
    const message = createBaseQueryAllArchiveMetadataResponse();
    message.archiveMetadata = object.archiveMetadata?.map(e => ArchiveMetadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllArchiveMetadataResponseAmino): QueryAllArchiveMetadataResponse {
    const message = createBaseQueryAllArchiveMetadataResponse();
    message.archiveMetadata = object.archive_metadata?.map(e => ArchiveMetadata.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllArchiveMetadataResponse): QueryAllArchiveMetadataResponseAmino {
    const obj: any = {};
    if (message.archiveMetadata) {
      obj.archive_metadata = message.archiveMetadata.map(e => e ? ArchiveMetadata.toAmino(e) : undefined);
    } else {
      obj.archive_metadata = message.archiveMetadata;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllArchiveMetadataResponseAminoMsg): QueryAllArchiveMetadataResponse {
    return QueryAllArchiveMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllArchiveMetadataResponseProtoMsg): QueryAllArchiveMetadataResponse {
    return QueryAllArchiveMetadataResponse.decode(message.value);
  },
  toProto(message: QueryAllArchiveMetadataResponse): Uint8Array {
    return QueryAllArchiveMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllArchiveMetadataResponse): QueryAllArchiveMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse",
      value: QueryAllArchiveMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagReportRequest(): QueryGetTagReportRequest {
  return {
    tagName: ""
  };
}
/**
 * QueryGetTagReportRequest defines the QueryGetTagReportRequest message.
 * @name QueryGetTagReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagReportRequest
 */
export const QueryGetTagReportRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagReportRequest",
  encode(message: QueryGetTagReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagReportRequest>): QueryGetTagReportRequest {
    const message = createBaseQueryGetTagReportRequest();
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryGetTagReportRequestAmino): QueryGetTagReportRequest {
    const message = createBaseQueryGetTagReportRequest();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    return message;
  },
  toAmino(message: QueryGetTagReportRequest): QueryGetTagReportRequestAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagReportRequestAminoMsg): QueryGetTagReportRequest {
    return QueryGetTagReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagReportRequestProtoMsg): QueryGetTagReportRequest {
    return QueryGetTagReportRequest.decode(message.value);
  },
  toProto(message: QueryGetTagReportRequest): Uint8Array {
    return QueryGetTagReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagReportRequest): QueryGetTagReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagReportRequest",
      value: QueryGetTagReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagReportResponse(): QueryGetTagReportResponse {
  return {
    tagReport: TagReport.fromPartial({})
  };
}
/**
 * QueryGetTagReportResponse defines the QueryGetTagReportResponse message.
 * @name QueryGetTagReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetTagReportResponse
 */
export const QueryGetTagReportResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetTagReportResponse",
  encode(message: QueryGetTagReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagReport !== undefined) {
      TagReport.encode(message.tagReport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagReport = TagReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagReportResponse>): QueryGetTagReportResponse {
    const message = createBaseQueryGetTagReportResponse();
    message.tagReport = object.tagReport !== undefined && object.tagReport !== null ? TagReport.fromPartial(object.tagReport) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagReportResponseAmino): QueryGetTagReportResponse {
    const message = createBaseQueryGetTagReportResponse();
    if (object.tag_report !== undefined && object.tag_report !== null) {
      message.tagReport = TagReport.fromAmino(object.tag_report);
    }
    return message;
  },
  toAmino(message: QueryGetTagReportResponse): QueryGetTagReportResponseAmino {
    const obj: any = {};
    obj.tag_report = message.tagReport ? TagReport.toAmino(message.tagReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagReportResponseAminoMsg): QueryGetTagReportResponse {
    return QueryGetTagReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagReportResponseProtoMsg): QueryGetTagReportResponse {
    return QueryGetTagReportResponse.decode(message.value);
  },
  toProto(message: QueryGetTagReportResponse): Uint8Array {
    return QueryGetTagReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagReportResponse): QueryGetTagReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetTagReportResponse",
      value: QueryGetTagReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagReportRequest(): QueryAllTagReportRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagReportRequest defines the QueryAllTagReportRequest message.
 * @name QueryAllTagReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagReportRequest
 */
export const QueryAllTagReportRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagReportRequest",
  encode(message: QueryAllTagReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagReportRequest>): QueryAllTagReportRequest {
    const message = createBaseQueryAllTagReportRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagReportRequestAmino): QueryAllTagReportRequest {
    const message = createBaseQueryAllTagReportRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagReportRequest): QueryAllTagReportRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagReportRequestAminoMsg): QueryAllTagReportRequest {
    return QueryAllTagReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagReportRequestProtoMsg): QueryAllTagReportRequest {
    return QueryAllTagReportRequest.decode(message.value);
  },
  toProto(message: QueryAllTagReportRequest): Uint8Array {
    return QueryAllTagReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagReportRequest): QueryAllTagReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagReportRequest",
      value: QueryAllTagReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagReportResponse(): QueryAllTagReportResponse {
  return {
    tagReport: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagReportResponse defines the QueryAllTagReportResponse message.
 * @name QueryAllTagReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllTagReportResponse
 */
export const QueryAllTagReportResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllTagReportResponse",
  encode(message: QueryAllTagReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tagReport) {
      TagReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagReport.push(TagReport.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllTagReportResponse>): QueryAllTagReportResponse {
    const message = createBaseQueryAllTagReportResponse();
    message.tagReport = object.tagReport?.map(e => TagReport.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagReportResponseAmino): QueryAllTagReportResponse {
    const message = createBaseQueryAllTagReportResponse();
    message.tagReport = object.tag_report?.map(e => TagReport.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagReportResponse): QueryAllTagReportResponseAmino {
    const obj: any = {};
    if (message.tagReport) {
      obj.tag_report = message.tagReport.map(e => e ? TagReport.toAmino(e) : undefined);
    } else {
      obj.tag_report = message.tagReport;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagReportResponseAminoMsg): QueryAllTagReportResponse {
    return QueryAllTagReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagReportResponseProtoMsg): QueryAllTagReportResponse {
    return QueryAllTagReportResponse.decode(message.value);
  },
  toProto(message: QueryAllTagReportResponse): Uint8Array {
    return QueryAllTagReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagReportResponse): QueryAllTagReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllTagReportResponse",
      value: QueryAllTagReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberSalvationStatusRequest(): QueryGetMemberSalvationStatusRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetMemberSalvationStatusRequest defines the QueryGetMemberSalvationStatusRequest message.
 * @name QueryGetMemberSalvationStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest
 */
export const QueryGetMemberSalvationStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest",
  encode(message: QueryGetMemberSalvationStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberSalvationStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberSalvationStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberSalvationStatusRequest>): QueryGetMemberSalvationStatusRequest {
    const message = createBaseQueryGetMemberSalvationStatusRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberSalvationStatusRequestAmino): QueryGetMemberSalvationStatusRequest {
    const message = createBaseQueryGetMemberSalvationStatusRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetMemberSalvationStatusRequest): QueryGetMemberSalvationStatusRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberSalvationStatusRequestAminoMsg): QueryGetMemberSalvationStatusRequest {
    return QueryGetMemberSalvationStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberSalvationStatusRequestProtoMsg): QueryGetMemberSalvationStatusRequest {
    return QueryGetMemberSalvationStatusRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberSalvationStatusRequest): Uint8Array {
    return QueryGetMemberSalvationStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberSalvationStatusRequest): QueryGetMemberSalvationStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusRequest",
      value: QueryGetMemberSalvationStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberSalvationStatusResponse(): QueryGetMemberSalvationStatusResponse {
  return {
    memberSalvationStatus: MemberSalvationStatus.fromPartial({})
  };
}
/**
 * QueryGetMemberSalvationStatusResponse defines the QueryGetMemberSalvationStatusResponse message.
 * @name QueryGetMemberSalvationStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse
 */
export const QueryGetMemberSalvationStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse",
  encode(message: QueryGetMemberSalvationStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberSalvationStatus !== undefined) {
      MemberSalvationStatus.encode(message.memberSalvationStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberSalvationStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberSalvationStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberSalvationStatus = MemberSalvationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberSalvationStatusResponse>): QueryGetMemberSalvationStatusResponse {
    const message = createBaseQueryGetMemberSalvationStatusResponse();
    message.memberSalvationStatus = object.memberSalvationStatus !== undefined && object.memberSalvationStatus !== null ? MemberSalvationStatus.fromPartial(object.memberSalvationStatus) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberSalvationStatusResponseAmino): QueryGetMemberSalvationStatusResponse {
    const message = createBaseQueryGetMemberSalvationStatusResponse();
    if (object.member_salvation_status !== undefined && object.member_salvation_status !== null) {
      message.memberSalvationStatus = MemberSalvationStatus.fromAmino(object.member_salvation_status);
    }
    return message;
  },
  toAmino(message: QueryGetMemberSalvationStatusResponse): QueryGetMemberSalvationStatusResponseAmino {
    const obj: any = {};
    obj.member_salvation_status = message.memberSalvationStatus ? MemberSalvationStatus.toAmino(message.memberSalvationStatus) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberSalvationStatusResponseAminoMsg): QueryGetMemberSalvationStatusResponse {
    return QueryGetMemberSalvationStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberSalvationStatusResponseProtoMsg): QueryGetMemberSalvationStatusResponse {
    return QueryGetMemberSalvationStatusResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberSalvationStatusResponse): Uint8Array {
    return QueryGetMemberSalvationStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberSalvationStatusResponse): QueryGetMemberSalvationStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetMemberSalvationStatusResponse",
      value: QueryGetMemberSalvationStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberSalvationStatusRequest(): QueryAllMemberSalvationStatusRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberSalvationStatusRequest defines the QueryAllMemberSalvationStatusRequest message.
 * @name QueryAllMemberSalvationStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest
 */
export const QueryAllMemberSalvationStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest",
  encode(message: QueryAllMemberSalvationStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberSalvationStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberSalvationStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberSalvationStatusRequest>): QueryAllMemberSalvationStatusRequest {
    const message = createBaseQueryAllMemberSalvationStatusRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberSalvationStatusRequestAmino): QueryAllMemberSalvationStatusRequest {
    const message = createBaseQueryAllMemberSalvationStatusRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberSalvationStatusRequest): QueryAllMemberSalvationStatusRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberSalvationStatusRequestAminoMsg): QueryAllMemberSalvationStatusRequest {
    return QueryAllMemberSalvationStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberSalvationStatusRequestProtoMsg): QueryAllMemberSalvationStatusRequest {
    return QueryAllMemberSalvationStatusRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberSalvationStatusRequest): Uint8Array {
    return QueryAllMemberSalvationStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberSalvationStatusRequest): QueryAllMemberSalvationStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusRequest",
      value: QueryAllMemberSalvationStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberSalvationStatusResponse(): QueryAllMemberSalvationStatusResponse {
  return {
    memberSalvationStatus: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberSalvationStatusResponse defines the QueryAllMemberSalvationStatusResponse message.
 * @name QueryAllMemberSalvationStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse
 */
export const QueryAllMemberSalvationStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse",
  encode(message: QueryAllMemberSalvationStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberSalvationStatus) {
      MemberSalvationStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberSalvationStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberSalvationStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberSalvationStatus.push(MemberSalvationStatus.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberSalvationStatusResponse>): QueryAllMemberSalvationStatusResponse {
    const message = createBaseQueryAllMemberSalvationStatusResponse();
    message.memberSalvationStatus = object.memberSalvationStatus?.map(e => MemberSalvationStatus.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberSalvationStatusResponseAmino): QueryAllMemberSalvationStatusResponse {
    const message = createBaseQueryAllMemberSalvationStatusResponse();
    message.memberSalvationStatus = object.member_salvation_status?.map(e => MemberSalvationStatus.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberSalvationStatusResponse): QueryAllMemberSalvationStatusResponseAmino {
    const obj: any = {};
    if (message.memberSalvationStatus) {
      obj.member_salvation_status = message.memberSalvationStatus.map(e => e ? MemberSalvationStatus.toAmino(e) : undefined);
    } else {
      obj.member_salvation_status = message.memberSalvationStatus;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberSalvationStatusResponseAminoMsg): QueryAllMemberSalvationStatusResponse {
    return QueryAllMemberSalvationStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberSalvationStatusResponseProtoMsg): QueryAllMemberSalvationStatusResponse {
    return QueryAllMemberSalvationStatusResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberSalvationStatusResponse): Uint8Array {
    return QueryAllMemberSalvationStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberSalvationStatusResponse): QueryAllMemberSalvationStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllMemberSalvationStatusResponse",
      value: QueryAllMemberSalvationStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetJuryParticipationRequest(): QueryGetJuryParticipationRequest {
  return {
    juror: ""
  };
}
/**
 * QueryGetJuryParticipationRequest defines the QueryGetJuryParticipationRequest message.
 * @name QueryGetJuryParticipationRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetJuryParticipationRequest
 */
export const QueryGetJuryParticipationRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetJuryParticipationRequest",
  encode(message: QueryGetJuryParticipationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetJuryParticipationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetJuryParticipationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetJuryParticipationRequest>): QueryGetJuryParticipationRequest {
    const message = createBaseQueryGetJuryParticipationRequest();
    message.juror = object.juror ?? "";
    return message;
  },
  fromAmino(object: QueryGetJuryParticipationRequestAmino): QueryGetJuryParticipationRequest {
    const message = createBaseQueryGetJuryParticipationRequest();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    return message;
  },
  toAmino(message: QueryGetJuryParticipationRequest): QueryGetJuryParticipationRequestAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    return obj;
  },
  fromAminoMsg(object: QueryGetJuryParticipationRequestAminoMsg): QueryGetJuryParticipationRequest {
    return QueryGetJuryParticipationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetJuryParticipationRequestProtoMsg): QueryGetJuryParticipationRequest {
    return QueryGetJuryParticipationRequest.decode(message.value);
  },
  toProto(message: QueryGetJuryParticipationRequest): Uint8Array {
    return QueryGetJuryParticipationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetJuryParticipationRequest): QueryGetJuryParticipationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetJuryParticipationRequest",
      value: QueryGetJuryParticipationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetJuryParticipationResponse(): QueryGetJuryParticipationResponse {
  return {
    juryParticipation: JuryParticipation.fromPartial({})
  };
}
/**
 * QueryGetJuryParticipationResponse defines the QueryGetJuryParticipationResponse message.
 * @name QueryGetJuryParticipationResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetJuryParticipationResponse
 */
export const QueryGetJuryParticipationResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetJuryParticipationResponse",
  encode(message: QueryGetJuryParticipationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryParticipation !== undefined) {
      JuryParticipation.encode(message.juryParticipation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetJuryParticipationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetJuryParticipationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryParticipation = JuryParticipation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetJuryParticipationResponse>): QueryGetJuryParticipationResponse {
    const message = createBaseQueryGetJuryParticipationResponse();
    message.juryParticipation = object.juryParticipation !== undefined && object.juryParticipation !== null ? JuryParticipation.fromPartial(object.juryParticipation) : undefined;
    return message;
  },
  fromAmino(object: QueryGetJuryParticipationResponseAmino): QueryGetJuryParticipationResponse {
    const message = createBaseQueryGetJuryParticipationResponse();
    if (object.jury_participation !== undefined && object.jury_participation !== null) {
      message.juryParticipation = JuryParticipation.fromAmino(object.jury_participation);
    }
    return message;
  },
  toAmino(message: QueryGetJuryParticipationResponse): QueryGetJuryParticipationResponseAmino {
    const obj: any = {};
    obj.jury_participation = message.juryParticipation ? JuryParticipation.toAmino(message.juryParticipation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetJuryParticipationResponseAminoMsg): QueryGetJuryParticipationResponse {
    return QueryGetJuryParticipationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetJuryParticipationResponseProtoMsg): QueryGetJuryParticipationResponse {
    return QueryGetJuryParticipationResponse.decode(message.value);
  },
  toProto(message: QueryGetJuryParticipationResponse): Uint8Array {
    return QueryGetJuryParticipationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetJuryParticipationResponse): QueryGetJuryParticipationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetJuryParticipationResponse",
      value: QueryGetJuryParticipationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllJuryParticipationRequest(): QueryAllJuryParticipationRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllJuryParticipationRequest defines the QueryAllJuryParticipationRequest message.
 * @name QueryAllJuryParticipationRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllJuryParticipationRequest
 */
export const QueryAllJuryParticipationRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllJuryParticipationRequest",
  encode(message: QueryAllJuryParticipationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllJuryParticipationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllJuryParticipationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllJuryParticipationRequest>): QueryAllJuryParticipationRequest {
    const message = createBaseQueryAllJuryParticipationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllJuryParticipationRequestAmino): QueryAllJuryParticipationRequest {
    const message = createBaseQueryAllJuryParticipationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllJuryParticipationRequest): QueryAllJuryParticipationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllJuryParticipationRequestAminoMsg): QueryAllJuryParticipationRequest {
    return QueryAllJuryParticipationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllJuryParticipationRequestProtoMsg): QueryAllJuryParticipationRequest {
    return QueryAllJuryParticipationRequest.decode(message.value);
  },
  toProto(message: QueryAllJuryParticipationRequest): Uint8Array {
    return QueryAllJuryParticipationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllJuryParticipationRequest): QueryAllJuryParticipationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllJuryParticipationRequest",
      value: QueryAllJuryParticipationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllJuryParticipationResponse(): QueryAllJuryParticipationResponse {
  return {
    juryParticipation: [],
    pagination: undefined
  };
}
/**
 * QueryAllJuryParticipationResponse defines the QueryAllJuryParticipationResponse message.
 * @name QueryAllJuryParticipationResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllJuryParticipationResponse
 */
export const QueryAllJuryParticipationResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllJuryParticipationResponse",
  encode(message: QueryAllJuryParticipationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.juryParticipation) {
      JuryParticipation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllJuryParticipationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllJuryParticipationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryParticipation.push(JuryParticipation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllJuryParticipationResponse>): QueryAllJuryParticipationResponse {
    const message = createBaseQueryAllJuryParticipationResponse();
    message.juryParticipation = object.juryParticipation?.map(e => JuryParticipation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllJuryParticipationResponseAmino): QueryAllJuryParticipationResponse {
    const message = createBaseQueryAllJuryParticipationResponse();
    message.juryParticipation = object.jury_participation?.map(e => JuryParticipation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllJuryParticipationResponse): QueryAllJuryParticipationResponseAmino {
    const obj: any = {};
    if (message.juryParticipation) {
      obj.jury_participation = message.juryParticipation.map(e => e ? JuryParticipation.toAmino(e) : undefined);
    } else {
      obj.jury_participation = message.juryParticipation;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllJuryParticipationResponseAminoMsg): QueryAllJuryParticipationResponse {
    return QueryAllJuryParticipationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllJuryParticipationResponseProtoMsg): QueryAllJuryParticipationResponse {
    return QueryAllJuryParticipationResponse.decode(message.value);
  },
  toProto(message: QueryAllJuryParticipationResponse): Uint8Array {
    return QueryAllJuryParticipationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllJuryParticipationResponse): QueryAllJuryParticipationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllJuryParticipationResponse",
      value: QueryAllJuryParticipationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberReportRequest(): QueryGetMemberReportRequest {
  return {
    member: ""
  };
}
/**
 * QueryGetMemberReportRequest defines the QueryGetMemberReportRequest message.
 * @name QueryGetMemberReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberReportRequest
 */
export const QueryGetMemberReportRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberReportRequest",
  encode(message: QueryGetMemberReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberReportRequest>): QueryGetMemberReportRequest {
    const message = createBaseQueryGetMemberReportRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberReportRequestAmino): QueryGetMemberReportRequest {
    const message = createBaseQueryGetMemberReportRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryGetMemberReportRequest): QueryGetMemberReportRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberReportRequestAminoMsg): QueryGetMemberReportRequest {
    return QueryGetMemberReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberReportRequestProtoMsg): QueryGetMemberReportRequest {
    return QueryGetMemberReportRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberReportRequest): Uint8Array {
    return QueryGetMemberReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberReportRequest): QueryGetMemberReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetMemberReportRequest",
      value: QueryGetMemberReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberReportResponse(): QueryGetMemberReportResponse {
  return {
    memberReport: MemberReport.fromPartial({})
  };
}
/**
 * QueryGetMemberReportResponse defines the QueryGetMemberReportResponse message.
 * @name QueryGetMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberReportResponse
 */
export const QueryGetMemberReportResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberReportResponse",
  encode(message: QueryGetMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberReport !== undefined) {
      MemberReport.encode(message.memberReport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberReport = MemberReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberReportResponse>): QueryGetMemberReportResponse {
    const message = createBaseQueryGetMemberReportResponse();
    message.memberReport = object.memberReport !== undefined && object.memberReport !== null ? MemberReport.fromPartial(object.memberReport) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberReportResponseAmino): QueryGetMemberReportResponse {
    const message = createBaseQueryGetMemberReportResponse();
    if (object.member_report !== undefined && object.member_report !== null) {
      message.memberReport = MemberReport.fromAmino(object.member_report);
    }
    return message;
  },
  toAmino(message: QueryGetMemberReportResponse): QueryGetMemberReportResponseAmino {
    const obj: any = {};
    obj.member_report = message.memberReport ? MemberReport.toAmino(message.memberReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberReportResponseAminoMsg): QueryGetMemberReportResponse {
    return QueryGetMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberReportResponseProtoMsg): QueryGetMemberReportResponse {
    return QueryGetMemberReportResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberReportResponse): Uint8Array {
    return QueryGetMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberReportResponse): QueryGetMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetMemberReportResponse",
      value: QueryGetMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberReportRequest(): QueryAllMemberReportRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberReportRequest defines the QueryAllMemberReportRequest message.
 * @name QueryAllMemberReportRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberReportRequest
 */
export const QueryAllMemberReportRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberReportRequest",
  encode(message: QueryAllMemberReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberReportRequest>): QueryAllMemberReportRequest {
    const message = createBaseQueryAllMemberReportRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberReportRequestAmino): QueryAllMemberReportRequest {
    const message = createBaseQueryAllMemberReportRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberReportRequest): QueryAllMemberReportRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberReportRequestAminoMsg): QueryAllMemberReportRequest {
    return QueryAllMemberReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberReportRequestProtoMsg): QueryAllMemberReportRequest {
    return QueryAllMemberReportRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberReportRequest): Uint8Array {
    return QueryAllMemberReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberReportRequest): QueryAllMemberReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllMemberReportRequest",
      value: QueryAllMemberReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberReportResponse(): QueryAllMemberReportResponse {
  return {
    memberReport: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberReportResponse defines the QueryAllMemberReportResponse message.
 * @name QueryAllMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberReportResponse
 */
export const QueryAllMemberReportResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberReportResponse",
  encode(message: QueryAllMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberReport) {
      MemberReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberReport.push(MemberReport.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberReportResponse>): QueryAllMemberReportResponse {
    const message = createBaseQueryAllMemberReportResponse();
    message.memberReport = object.memberReport?.map(e => MemberReport.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberReportResponseAmino): QueryAllMemberReportResponse {
    const message = createBaseQueryAllMemberReportResponse();
    message.memberReport = object.member_report?.map(e => MemberReport.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberReportResponse): QueryAllMemberReportResponseAmino {
    const obj: any = {};
    if (message.memberReport) {
      obj.member_report = message.memberReport.map(e => e ? MemberReport.toAmino(e) : undefined);
    } else {
      obj.member_report = message.memberReport;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberReportResponseAminoMsg): QueryAllMemberReportResponse {
    return QueryAllMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberReportResponseProtoMsg): QueryAllMemberReportResponse {
    return QueryAllMemberReportResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberReportResponse): Uint8Array {
    return QueryAllMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberReportResponse): QueryAllMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllMemberReportResponse",
      value: QueryAllMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberWarningRequest(): QueryGetMemberWarningRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetMemberWarningRequest defines the QueryGetMemberWarningRequest message.
 * @name QueryGetMemberWarningRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberWarningRequest
 */
export const QueryGetMemberWarningRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberWarningRequest",
  encode(message: QueryGetMemberWarningRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberWarningRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberWarningRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberWarningRequest>): QueryGetMemberWarningRequest {
    const message = createBaseQueryGetMemberWarningRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetMemberWarningRequestAmino): QueryGetMemberWarningRequest {
    const message = createBaseQueryGetMemberWarningRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetMemberWarningRequest): QueryGetMemberWarningRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberWarningRequestAminoMsg): QueryGetMemberWarningRequest {
    return QueryGetMemberWarningRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberWarningRequestProtoMsg): QueryGetMemberWarningRequest {
    return QueryGetMemberWarningRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberWarningRequest): Uint8Array {
    return QueryGetMemberWarningRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberWarningRequest): QueryGetMemberWarningRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetMemberWarningRequest",
      value: QueryGetMemberWarningRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberWarningResponse(): QueryGetMemberWarningResponse {
  return {
    memberWarning: MemberWarning.fromPartial({})
  };
}
/**
 * QueryGetMemberWarningResponse defines the QueryGetMemberWarningResponse message.
 * @name QueryGetMemberWarningResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetMemberWarningResponse
 */
export const QueryGetMemberWarningResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetMemberWarningResponse",
  encode(message: QueryGetMemberWarningResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberWarning !== undefined) {
      MemberWarning.encode(message.memberWarning, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberWarningResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberWarningResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberWarning = MemberWarning.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberWarningResponse>): QueryGetMemberWarningResponse {
    const message = createBaseQueryGetMemberWarningResponse();
    message.memberWarning = object.memberWarning !== undefined && object.memberWarning !== null ? MemberWarning.fromPartial(object.memberWarning) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberWarningResponseAmino): QueryGetMemberWarningResponse {
    const message = createBaseQueryGetMemberWarningResponse();
    if (object.member_warning !== undefined && object.member_warning !== null) {
      message.memberWarning = MemberWarning.fromAmino(object.member_warning);
    }
    return message;
  },
  toAmino(message: QueryGetMemberWarningResponse): QueryGetMemberWarningResponseAmino {
    const obj: any = {};
    obj.member_warning = message.memberWarning ? MemberWarning.toAmino(message.memberWarning) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberWarningResponseAminoMsg): QueryGetMemberWarningResponse {
    return QueryGetMemberWarningResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberWarningResponseProtoMsg): QueryGetMemberWarningResponse {
    return QueryGetMemberWarningResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberWarningResponse): Uint8Array {
    return QueryGetMemberWarningResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberWarningResponse): QueryGetMemberWarningResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetMemberWarningResponse",
      value: QueryGetMemberWarningResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberWarningRequest(): QueryAllMemberWarningRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberWarningRequest defines the QueryAllMemberWarningRequest message.
 * @name QueryAllMemberWarningRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberWarningRequest
 */
export const QueryAllMemberWarningRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberWarningRequest",
  encode(message: QueryAllMemberWarningRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberWarningRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberWarningRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberWarningRequest>): QueryAllMemberWarningRequest {
    const message = createBaseQueryAllMemberWarningRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberWarningRequestAmino): QueryAllMemberWarningRequest {
    const message = createBaseQueryAllMemberWarningRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberWarningRequest): QueryAllMemberWarningRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberWarningRequestAminoMsg): QueryAllMemberWarningRequest {
    return QueryAllMemberWarningRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberWarningRequestProtoMsg): QueryAllMemberWarningRequest {
    return QueryAllMemberWarningRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberWarningRequest): Uint8Array {
    return QueryAllMemberWarningRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberWarningRequest): QueryAllMemberWarningRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllMemberWarningRequest",
      value: QueryAllMemberWarningRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberWarningResponse(): QueryAllMemberWarningResponse {
  return {
    memberWarning: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberWarningResponse defines the QueryAllMemberWarningResponse message.
 * @name QueryAllMemberWarningResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllMemberWarningResponse
 */
export const QueryAllMemberWarningResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllMemberWarningResponse",
  encode(message: QueryAllMemberWarningResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberWarning) {
      MemberWarning.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberWarningResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberWarningResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberWarning.push(MemberWarning.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberWarningResponse>): QueryAllMemberWarningResponse {
    const message = createBaseQueryAllMemberWarningResponse();
    message.memberWarning = object.memberWarning?.map(e => MemberWarning.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberWarningResponseAmino): QueryAllMemberWarningResponse {
    const message = createBaseQueryAllMemberWarningResponse();
    message.memberWarning = object.member_warning?.map(e => MemberWarning.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberWarningResponse): QueryAllMemberWarningResponseAmino {
    const obj: any = {};
    if (message.memberWarning) {
      obj.member_warning = message.memberWarning.map(e => e ? MemberWarning.toAmino(e) : undefined);
    } else {
      obj.member_warning = message.memberWarning;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberWarningResponseAminoMsg): QueryAllMemberWarningResponse {
    return QueryAllMemberWarningResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberWarningResponseProtoMsg): QueryAllMemberWarningResponse {
    return QueryAllMemberWarningResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberWarningResponse): Uint8Array {
    return QueryAllMemberWarningResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberWarningResponse): QueryAllMemberWarningResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllMemberWarningResponse",
      value: QueryAllMemberWarningResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGovActionAppealRequest(): QueryGetGovActionAppealRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetGovActionAppealRequest defines the QueryGetGovActionAppealRequest message.
 * @name QueryGetGovActionAppealRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetGovActionAppealRequest
 */
export const QueryGetGovActionAppealRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetGovActionAppealRequest",
  encode(message: QueryGetGovActionAppealRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGovActionAppealRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGovActionAppealRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGovActionAppealRequest>): QueryGetGovActionAppealRequest {
    const message = createBaseQueryGetGovActionAppealRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetGovActionAppealRequestAmino): QueryGetGovActionAppealRequest {
    const message = createBaseQueryGetGovActionAppealRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetGovActionAppealRequest): QueryGetGovActionAppealRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGovActionAppealRequestAminoMsg): QueryGetGovActionAppealRequest {
    return QueryGetGovActionAppealRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGovActionAppealRequestProtoMsg): QueryGetGovActionAppealRequest {
    return QueryGetGovActionAppealRequest.decode(message.value);
  },
  toProto(message: QueryGetGovActionAppealRequest): Uint8Array {
    return QueryGetGovActionAppealRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGovActionAppealRequest): QueryGetGovActionAppealRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetGovActionAppealRequest",
      value: QueryGetGovActionAppealRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGovActionAppealResponse(): QueryGetGovActionAppealResponse {
  return {
    govActionAppeal: GovActionAppeal.fromPartial({})
  };
}
/**
 * QueryGetGovActionAppealResponse defines the QueryGetGovActionAppealResponse message.
 * @name QueryGetGovActionAppealResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetGovActionAppealResponse
 */
export const QueryGetGovActionAppealResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetGovActionAppealResponse",
  encode(message: QueryGetGovActionAppealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.govActionAppeal !== undefined) {
      GovActionAppeal.encode(message.govActionAppeal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGovActionAppealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGovActionAppealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.govActionAppeal = GovActionAppeal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGovActionAppealResponse>): QueryGetGovActionAppealResponse {
    const message = createBaseQueryGetGovActionAppealResponse();
    message.govActionAppeal = object.govActionAppeal !== undefined && object.govActionAppeal !== null ? GovActionAppeal.fromPartial(object.govActionAppeal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGovActionAppealResponseAmino): QueryGetGovActionAppealResponse {
    const message = createBaseQueryGetGovActionAppealResponse();
    if (object.gov_action_appeal !== undefined && object.gov_action_appeal !== null) {
      message.govActionAppeal = GovActionAppeal.fromAmino(object.gov_action_appeal);
    }
    return message;
  },
  toAmino(message: QueryGetGovActionAppealResponse): QueryGetGovActionAppealResponseAmino {
    const obj: any = {};
    obj.gov_action_appeal = message.govActionAppeal ? GovActionAppeal.toAmino(message.govActionAppeal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGovActionAppealResponseAminoMsg): QueryGetGovActionAppealResponse {
    return QueryGetGovActionAppealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGovActionAppealResponseProtoMsg): QueryGetGovActionAppealResponse {
    return QueryGetGovActionAppealResponse.decode(message.value);
  },
  toProto(message: QueryGetGovActionAppealResponse): Uint8Array {
    return QueryGetGovActionAppealResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGovActionAppealResponse): QueryGetGovActionAppealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetGovActionAppealResponse",
      value: QueryGetGovActionAppealResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGovActionAppealRequest(): QueryAllGovActionAppealRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllGovActionAppealRequest defines the QueryAllGovActionAppealRequest message.
 * @name QueryAllGovActionAppealRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllGovActionAppealRequest
 */
export const QueryAllGovActionAppealRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllGovActionAppealRequest",
  encode(message: QueryAllGovActionAppealRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGovActionAppealRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGovActionAppealRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllGovActionAppealRequest>): QueryAllGovActionAppealRequest {
    const message = createBaseQueryAllGovActionAppealRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGovActionAppealRequestAmino): QueryAllGovActionAppealRequest {
    const message = createBaseQueryAllGovActionAppealRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGovActionAppealRequest): QueryAllGovActionAppealRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGovActionAppealRequestAminoMsg): QueryAllGovActionAppealRequest {
    return QueryAllGovActionAppealRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGovActionAppealRequestProtoMsg): QueryAllGovActionAppealRequest {
    return QueryAllGovActionAppealRequest.decode(message.value);
  },
  toProto(message: QueryAllGovActionAppealRequest): Uint8Array {
    return QueryAllGovActionAppealRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGovActionAppealRequest): QueryAllGovActionAppealRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllGovActionAppealRequest",
      value: QueryAllGovActionAppealRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGovActionAppealResponse(): QueryAllGovActionAppealResponse {
  return {
    govActionAppeal: [],
    pagination: undefined
  };
}
/**
 * QueryAllGovActionAppealResponse defines the QueryAllGovActionAppealResponse message.
 * @name QueryAllGovActionAppealResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllGovActionAppealResponse
 */
export const QueryAllGovActionAppealResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllGovActionAppealResponse",
  encode(message: QueryAllGovActionAppealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.govActionAppeal) {
      GovActionAppeal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGovActionAppealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGovActionAppealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.govActionAppeal.push(GovActionAppeal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllGovActionAppealResponse>): QueryAllGovActionAppealResponse {
    const message = createBaseQueryAllGovActionAppealResponse();
    message.govActionAppeal = object.govActionAppeal?.map(e => GovActionAppeal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGovActionAppealResponseAmino): QueryAllGovActionAppealResponse {
    const message = createBaseQueryAllGovActionAppealResponse();
    message.govActionAppeal = object.gov_action_appeal?.map(e => GovActionAppeal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGovActionAppealResponse): QueryAllGovActionAppealResponseAmino {
    const obj: any = {};
    if (message.govActionAppeal) {
      obj.gov_action_appeal = message.govActionAppeal.map(e => e ? GovActionAppeal.toAmino(e) : undefined);
    } else {
      obj.gov_action_appeal = message.govActionAppeal;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGovActionAppealResponseAminoMsg): QueryAllGovActionAppealResponse {
    return QueryAllGovActionAppealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGovActionAppealResponseProtoMsg): QueryAllGovActionAppealResponse {
    return QueryAllGovActionAppealResponse.decode(message.value);
  },
  toProto(message: QueryAllGovActionAppealResponse): Uint8Array {
    return QueryAllGovActionAppealResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGovActionAppealResponse): QueryAllGovActionAppealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllGovActionAppealResponse",
      value: QueryAllGovActionAppealResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPostsRequest(): QueryPostsRequest {
  return {
    categoryId: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryPostsRequest defines the QueryPostsRequest message.
 * @name QueryPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsRequest
 */
export const QueryPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPostsRequest",
  encode(message: QueryPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(16).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.status = reader.uint64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPostsRequest>): QueryPostsRequest {
    const message = createBaseQueryPostsRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostsRequestAmino): QueryPostsRequest {
    const message = createBaseQueryPostsRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostsRequest): QueryPostsRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostsRequestAminoMsg): QueryPostsRequest {
    return QueryPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostsRequestProtoMsg): QueryPostsRequest {
    return QueryPostsRequest.decode(message.value);
  },
  toProto(message: QueryPostsRequest): Uint8Array {
    return QueryPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostsRequest): QueryPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostsRequest",
      value: QueryPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPostsResponse(): QueryPostsResponse {
  return {
    postId: BigInt(0),
    author: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryPostsResponse defines the QueryPostsResponse message.
 * @name QueryPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsResponse
 */
export const QueryPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPostsResponse",
  encode(message: QueryPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.author !== "") {
      writer.uint32(18).string(message.author);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.author = reader.string();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPostsResponse>): QueryPostsResponse {
    const message = createBaseQueryPostsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.author = object.author ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostsResponseAmino): QueryPostsResponse {
    const message = createBaseQueryPostsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostsResponse): QueryPostsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.author = message.author === "" ? undefined : message.author;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostsResponseAminoMsg): QueryPostsResponse {
    return QueryPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostsResponseProtoMsg): QueryPostsResponse {
    return QueryPostsResponse.decode(message.value);
  },
  toProto(message: QueryPostsResponse): Uint8Array {
    return QueryPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostsResponse): QueryPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostsResponse",
      value: QueryPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThreadRequest(): QueryThreadRequest {
  return {
    rootId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadRequest defines the QueryThreadRequest message.
 * @name QueryThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadRequest
 */
export const QueryThreadRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadRequest",
  encode(message: QueryThreadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadRequest>): QueryThreadRequest {
    const message = createBaseQueryThreadRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadRequestAmino): QueryThreadRequest {
    const message = createBaseQueryThreadRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadRequest): QueryThreadRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadRequestAminoMsg): QueryThreadRequest {
    return QueryThreadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadRequestProtoMsg): QueryThreadRequest {
    return QueryThreadRequest.decode(message.value);
  },
  toProto(message: QueryThreadRequest): Uint8Array {
    return QueryThreadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadRequest): QueryThreadRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadRequest",
      value: QueryThreadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThreadResponse(): QueryThreadResponse {
  return {
    postId: BigInt(0),
    author: "",
    parentId: BigInt(0),
    depth: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadResponse defines the QueryThreadResponse message.
 * @name QueryThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadResponse
 */
export const QueryThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadResponse",
  encode(message: QueryThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.author !== "") {
      writer.uint32(18).string(message.author);
    }
    if (message.parentId !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentId);
    }
    if (message.depth !== BigInt(0)) {
      writer.uint32(32).uint64(message.depth);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.author = reader.string();
          break;
        case 3:
          message.parentId = reader.uint64();
          break;
        case 4:
          message.depth = reader.uint64();
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadResponse>): QueryThreadResponse {
    const message = createBaseQueryThreadResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.author = object.author ?? "";
    message.parentId = object.parentId !== undefined && object.parentId !== null ? BigInt(object.parentId.toString()) : BigInt(0);
    message.depth = object.depth !== undefined && object.depth !== null ? BigInt(object.depth.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadResponseAmino): QueryThreadResponse {
    const message = createBaseQueryThreadResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parentId = BigInt(object.parent_id);
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = BigInt(object.depth);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadResponse): QueryThreadResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.author = message.author === "" ? undefined : message.author;
    obj.parent_id = message.parentId !== BigInt(0) ? message.parentId?.toString() : undefined;
    obj.depth = message.depth !== BigInt(0) ? message.depth?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadResponseAminoMsg): QueryThreadResponse {
    return QueryThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadResponseProtoMsg): QueryThreadResponse {
    return QueryThreadResponse.decode(message.value);
  },
  toProto(message: QueryThreadResponse): Uint8Array {
    return QueryThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadResponse): QueryThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadResponse",
      value: QueryThreadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCategoriesRequest(): QueryCategoriesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryCategoriesRequest defines the QueryCategoriesRequest message.
 * @name QueryCategoriesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryCategoriesRequest
 */
export const QueryCategoriesRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryCategoriesRequest",
  encode(message: QueryCategoriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCategoriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCategoriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCategoriesRequest>): QueryCategoriesRequest {
    const message = createBaseQueryCategoriesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCategoriesRequestAmino): QueryCategoriesRequest {
    const message = createBaseQueryCategoriesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCategoriesRequest): QueryCategoriesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCategoriesRequestAminoMsg): QueryCategoriesRequest {
    return QueryCategoriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCategoriesRequestProtoMsg): QueryCategoriesRequest {
    return QueryCategoriesRequest.decode(message.value);
  },
  toProto(message: QueryCategoriesRequest): Uint8Array {
    return QueryCategoriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCategoriesRequest): QueryCategoriesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryCategoriesRequest",
      value: QueryCategoriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCategoriesResponse(): QueryCategoriesResponse {
  return {
    categoryId: BigInt(0),
    title: "",
    pagination: undefined
  };
}
/**
 * QueryCategoriesResponse defines the QueryCategoriesResponse message.
 * @name QueryCategoriesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryCategoriesResponse
 */
export const QueryCategoriesResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryCategoriesResponse",
  encode(message: QueryCategoriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCategoriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCategoriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCategoriesResponse>): QueryCategoriesResponse {
    const message = createBaseQueryCategoriesResponse();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCategoriesResponseAmino): QueryCategoriesResponse {
    const message = createBaseQueryCategoriesResponse();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCategoriesResponse): QueryCategoriesResponseAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCategoriesResponseAminoMsg): QueryCategoriesResponse {
    return QueryCategoriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCategoriesResponseProtoMsg): QueryCategoriesResponse {
    return QueryCategoriesResponse.decode(message.value);
  },
  toProto(message: QueryCategoriesResponse): Uint8Array {
    return QueryCategoriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCategoriesResponse): QueryCategoriesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryCategoriesResponse",
      value: QueryCategoriesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserPostsRequest(): QueryUserPostsRequest {
  return {
    author: "",
    pagination: undefined
  };
}
/**
 * QueryUserPostsRequest defines the QueryUserPostsRequest message.
 * @name QueryUserPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsRequest
 */
export const QueryUserPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsRequest",
  encode(message: QueryUserPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.author !== "") {
      writer.uint32(10).string(message.author);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserPostsRequest>): QueryUserPostsRequest {
    const message = createBaseQueryUserPostsRequest();
    message.author = object.author ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPostsRequestAmino): QueryUserPostsRequest {
    const message = createBaseQueryUserPostsRequest();
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPostsRequest): QueryUserPostsRequestAmino {
    const obj: any = {};
    obj.author = message.author === "" ? undefined : message.author;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPostsRequestAminoMsg): QueryUserPostsRequest {
    return QueryUserPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPostsRequestProtoMsg): QueryUserPostsRequest {
    return QueryUserPostsRequest.decode(message.value);
  },
  toProto(message: QueryUserPostsRequest): Uint8Array {
    return QueryUserPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPostsRequest): QueryUserPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserPostsRequest",
      value: QueryUserPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserPostsResponse(): QueryUserPostsResponse {
  return {
    postId: BigInt(0),
    categoryId: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryUserPostsResponse defines the QueryUserPostsResponse message.
 * @name QueryUserPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsResponse
 */
export const QueryUserPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsResponse",
  encode(message: QueryUserPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.categoryId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.categoryId = reader.uint64();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserPostsResponse>): QueryUserPostsResponse {
    const message = createBaseQueryUserPostsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPostsResponseAmino): QueryUserPostsResponse {
    const message = createBaseQueryUserPostsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPostsResponse): QueryUserPostsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPostsResponseAminoMsg): QueryUserPostsResponse {
    return QueryUserPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPostsResponseProtoMsg): QueryUserPostsResponse {
    return QueryUserPostsResponse.decode(message.value);
  },
  toProto(message: QueryUserPostsResponse): Uint8Array {
    return QueryUserPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPostsResponse): QueryUserPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserPostsResponse",
      value: QueryUserPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySentinelStatusRequest(): QuerySentinelStatusRequest {
  return {
    address: ""
  };
}
/**
 * QuerySentinelStatusRequest defines the QuerySentinelStatusRequest message.
 * @name QuerySentinelStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelStatusRequest
 */
export const QuerySentinelStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelStatusRequest",
  encode(message: QuerySentinelStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySentinelStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySentinelStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySentinelStatusRequest>): QuerySentinelStatusRequest {
    const message = createBaseQuerySentinelStatusRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QuerySentinelStatusRequestAmino): QuerySentinelStatusRequest {
    const message = createBaseQuerySentinelStatusRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QuerySentinelStatusRequest): QuerySentinelStatusRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QuerySentinelStatusRequestAminoMsg): QuerySentinelStatusRequest {
    return QuerySentinelStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySentinelStatusRequestProtoMsg): QuerySentinelStatusRequest {
    return QuerySentinelStatusRequest.decode(message.value);
  },
  toProto(message: QuerySentinelStatusRequest): Uint8Array {
    return QuerySentinelStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySentinelStatusRequest): QuerySentinelStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QuerySentinelStatusRequest",
      value: QuerySentinelStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySentinelStatusResponse(): QuerySentinelStatusResponse {
  return {
    address: "",
    bondStatus: BigInt(0),
    currentBond: "",
    accuracyRate: ""
  };
}
/**
 * QuerySentinelStatusResponse defines the QuerySentinelStatusResponse message.
 * @name QuerySentinelStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelStatusResponse
 */
export const QuerySentinelStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelStatusResponse",
  encode(message: QuerySentinelStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.bondStatus !== BigInt(0)) {
      writer.uint32(16).uint64(message.bondStatus);
    }
    if (message.currentBond !== "") {
      writer.uint32(26).string(message.currentBond);
    }
    if (message.accuracyRate !== "") {
      writer.uint32(34).string(message.accuracyRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySentinelStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySentinelStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.bondStatus = reader.uint64();
          break;
        case 3:
          message.currentBond = reader.string();
          break;
        case 4:
          message.accuracyRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySentinelStatusResponse>): QuerySentinelStatusResponse {
    const message = createBaseQuerySentinelStatusResponse();
    message.address = object.address ?? "";
    message.bondStatus = object.bondStatus !== undefined && object.bondStatus !== null ? BigInt(object.bondStatus.toString()) : BigInt(0);
    message.currentBond = object.currentBond ?? "";
    message.accuracyRate = object.accuracyRate ?? "";
    return message;
  },
  fromAmino(object: QuerySentinelStatusResponseAmino): QuerySentinelStatusResponse {
    const message = createBaseQuerySentinelStatusResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.bond_status !== undefined && object.bond_status !== null) {
      message.bondStatus = BigInt(object.bond_status);
    }
    if (object.current_bond !== undefined && object.current_bond !== null) {
      message.currentBond = object.current_bond;
    }
    if (object.accuracy_rate !== undefined && object.accuracy_rate !== null) {
      message.accuracyRate = object.accuracy_rate;
    }
    return message;
  },
  toAmino(message: QuerySentinelStatusResponse): QuerySentinelStatusResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.bond_status = message.bondStatus !== BigInt(0) ? message.bondStatus?.toString() : undefined;
    obj.current_bond = message.currentBond === "" ? undefined : message.currentBond;
    obj.accuracy_rate = message.accuracyRate === "" ? undefined : message.accuracyRate;
    return obj;
  },
  fromAminoMsg(object: QuerySentinelStatusResponseAminoMsg): QuerySentinelStatusResponse {
    return QuerySentinelStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySentinelStatusResponseProtoMsg): QuerySentinelStatusResponse {
    return QuerySentinelStatusResponse.decode(message.value);
  },
  toProto(message: QuerySentinelStatusResponse): Uint8Array {
    return QuerySentinelStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySentinelStatusResponse): QuerySentinelStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QuerySentinelStatusResponse",
      value: QuerySentinelStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySentinelBondCommitmentRequest(): QuerySentinelBondCommitmentRequest {
  return {
    address: ""
  };
}
/**
 * QuerySentinelBondCommitmentRequest defines the QuerySentinelBondCommitmentRequest message.
 * @name QuerySentinelBondCommitmentRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelBondCommitmentRequest
 */
export const QuerySentinelBondCommitmentRequest = {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelBondCommitmentRequest",
  encode(message: QuerySentinelBondCommitmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySentinelBondCommitmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySentinelBondCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySentinelBondCommitmentRequest>): QuerySentinelBondCommitmentRequest {
    const message = createBaseQuerySentinelBondCommitmentRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QuerySentinelBondCommitmentRequestAmino): QuerySentinelBondCommitmentRequest {
    const message = createBaseQuerySentinelBondCommitmentRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QuerySentinelBondCommitmentRequest): QuerySentinelBondCommitmentRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QuerySentinelBondCommitmentRequestAminoMsg): QuerySentinelBondCommitmentRequest {
    return QuerySentinelBondCommitmentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySentinelBondCommitmentRequestProtoMsg): QuerySentinelBondCommitmentRequest {
    return QuerySentinelBondCommitmentRequest.decode(message.value);
  },
  toProto(message: QuerySentinelBondCommitmentRequest): Uint8Array {
    return QuerySentinelBondCommitmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySentinelBondCommitmentRequest): QuerySentinelBondCommitmentRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QuerySentinelBondCommitmentRequest",
      value: QuerySentinelBondCommitmentRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySentinelBondCommitmentResponse(): QuerySentinelBondCommitmentResponse {
  return {
    currentBond: "",
    totalCommittedBond: "",
    availableBond: ""
  };
}
/**
 * QuerySentinelBondCommitmentResponse defines the QuerySentinelBondCommitmentResponse message.
 * @name QuerySentinelBondCommitmentResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QuerySentinelBondCommitmentResponse
 */
export const QuerySentinelBondCommitmentResponse = {
  typeUrl: "/sparkdream.forum.v1.QuerySentinelBondCommitmentResponse",
  encode(message: QuerySentinelBondCommitmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentBond !== "") {
      writer.uint32(10).string(message.currentBond);
    }
    if (message.totalCommittedBond !== "") {
      writer.uint32(18).string(message.totalCommittedBond);
    }
    if (message.availableBond !== "") {
      writer.uint32(26).string(message.availableBond);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySentinelBondCommitmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySentinelBondCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentBond = reader.string();
          break;
        case 2:
          message.totalCommittedBond = reader.string();
          break;
        case 3:
          message.availableBond = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySentinelBondCommitmentResponse>): QuerySentinelBondCommitmentResponse {
    const message = createBaseQuerySentinelBondCommitmentResponse();
    message.currentBond = object.currentBond ?? "";
    message.totalCommittedBond = object.totalCommittedBond ?? "";
    message.availableBond = object.availableBond ?? "";
    return message;
  },
  fromAmino(object: QuerySentinelBondCommitmentResponseAmino): QuerySentinelBondCommitmentResponse {
    const message = createBaseQuerySentinelBondCommitmentResponse();
    if (object.current_bond !== undefined && object.current_bond !== null) {
      message.currentBond = object.current_bond;
    }
    if (object.total_committed_bond !== undefined && object.total_committed_bond !== null) {
      message.totalCommittedBond = object.total_committed_bond;
    }
    if (object.available_bond !== undefined && object.available_bond !== null) {
      message.availableBond = object.available_bond;
    }
    return message;
  },
  toAmino(message: QuerySentinelBondCommitmentResponse): QuerySentinelBondCommitmentResponseAmino {
    const obj: any = {};
    obj.current_bond = message.currentBond === "" ? undefined : message.currentBond;
    obj.total_committed_bond = message.totalCommittedBond === "" ? undefined : message.totalCommittedBond;
    obj.available_bond = message.availableBond === "" ? undefined : message.availableBond;
    return obj;
  },
  fromAminoMsg(object: QuerySentinelBondCommitmentResponseAminoMsg): QuerySentinelBondCommitmentResponse {
    return QuerySentinelBondCommitmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySentinelBondCommitmentResponseProtoMsg): QuerySentinelBondCommitmentResponse {
    return QuerySentinelBondCommitmentResponse.decode(message.value);
  },
  toProto(message: QuerySentinelBondCommitmentResponse): Uint8Array {
    return QuerySentinelBondCommitmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySentinelBondCommitmentResponse): QuerySentinelBondCommitmentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QuerySentinelBondCommitmentResponse",
      value: QuerySentinelBondCommitmentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryArchiveCooldownRequest(): QueryArchiveCooldownRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryArchiveCooldownRequest defines the QueryArchiveCooldownRequest message.
 * @name QueryArchiveCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownRequest
 */
export const QueryArchiveCooldownRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownRequest",
  encode(message: QueryArchiveCooldownRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchiveCooldownRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchiveCooldownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryArchiveCooldownRequest>): QueryArchiveCooldownRequest {
    const message = createBaseQueryArchiveCooldownRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryArchiveCooldownRequestAmino): QueryArchiveCooldownRequest {
    const message = createBaseQueryArchiveCooldownRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryArchiveCooldownRequest): QueryArchiveCooldownRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArchiveCooldownRequestAminoMsg): QueryArchiveCooldownRequest {
    return QueryArchiveCooldownRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArchiveCooldownRequestProtoMsg): QueryArchiveCooldownRequest {
    return QueryArchiveCooldownRequest.decode(message.value);
  },
  toProto(message: QueryArchiveCooldownRequest): Uint8Array {
    return QueryArchiveCooldownRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryArchiveCooldownRequest): QueryArchiveCooldownRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownRequest",
      value: QueryArchiveCooldownRequest.encode(message).finish()
    };
  }
};
function createBaseQueryArchiveCooldownResponse(): QueryArchiveCooldownResponse {
  return {
    inCooldown: false,
    cooldownEnds: BigInt(0)
  };
}
/**
 * QueryArchiveCooldownResponse defines the QueryArchiveCooldownResponse message.
 * @name QueryArchiveCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownResponse
 */
export const QueryArchiveCooldownResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownResponse",
  encode(message: QueryArchiveCooldownResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inCooldown === true) {
      writer.uint32(8).bool(message.inCooldown);
    }
    if (message.cooldownEnds !== BigInt(0)) {
      writer.uint32(16).int64(message.cooldownEnds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchiveCooldownResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchiveCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inCooldown = reader.bool();
          break;
        case 2:
          message.cooldownEnds = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryArchiveCooldownResponse>): QueryArchiveCooldownResponse {
    const message = createBaseQueryArchiveCooldownResponse();
    message.inCooldown = object.inCooldown ?? false;
    message.cooldownEnds = object.cooldownEnds !== undefined && object.cooldownEnds !== null ? BigInt(object.cooldownEnds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryArchiveCooldownResponseAmino): QueryArchiveCooldownResponse {
    const message = createBaseQueryArchiveCooldownResponse();
    if (object.in_cooldown !== undefined && object.in_cooldown !== null) {
      message.inCooldown = object.in_cooldown;
    }
    if (object.cooldown_ends !== undefined && object.cooldown_ends !== null) {
      message.cooldownEnds = BigInt(object.cooldown_ends);
    }
    return message;
  },
  toAmino(message: QueryArchiveCooldownResponse): QueryArchiveCooldownResponseAmino {
    const obj: any = {};
    obj.in_cooldown = message.inCooldown === false ? undefined : message.inCooldown;
    obj.cooldown_ends = message.cooldownEnds !== BigInt(0) ? message.cooldownEnds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArchiveCooldownResponseAminoMsg): QueryArchiveCooldownResponse {
    return QueryArchiveCooldownResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArchiveCooldownResponseProtoMsg): QueryArchiveCooldownResponse {
    return QueryArchiveCooldownResponse.decode(message.value);
  },
  toProto(message: QueryArchiveCooldownResponse): Uint8Array {
    return QueryArchiveCooldownResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryArchiveCooldownResponse): QueryArchiveCooldownResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownResponse",
      value: QueryArchiveCooldownResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagExistsRequest(): QueryTagExistsRequest {
  return {
    tagName: ""
  };
}
/**
 * QueryTagExistsRequest defines the QueryTagExistsRequest message.
 * @name QueryTagExistsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagExistsRequest
 */
export const QueryTagExistsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTagExistsRequest",
  encode(message: QueryTagExistsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagExistsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagExistsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagExistsRequest>): QueryTagExistsRequest {
    const message = createBaseQueryTagExistsRequest();
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryTagExistsRequestAmino): QueryTagExistsRequest {
    const message = createBaseQueryTagExistsRequest();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    return message;
  },
  toAmino(message: QueryTagExistsRequest): QueryTagExistsRequestAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryTagExistsRequestAminoMsg): QueryTagExistsRequest {
    return QueryTagExistsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagExistsRequestProtoMsg): QueryTagExistsRequest {
    return QueryTagExistsRequest.decode(message.value);
  },
  toProto(message: QueryTagExistsRequest): Uint8Array {
    return QueryTagExistsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagExistsRequest): QueryTagExistsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagExistsRequest",
      value: QueryTagExistsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagExistsResponse(): QueryTagExistsResponse {
  return {
    exists: false,
    expirationTime: BigInt(0)
  };
}
/**
 * QueryTagExistsResponse defines the QueryTagExistsResponse message.
 * @name QueryTagExistsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagExistsResponse
 */
export const QueryTagExistsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTagExistsResponse",
  encode(message: QueryTagExistsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    if (message.expirationTime !== BigInt(0)) {
      writer.uint32(16).int64(message.expirationTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagExistsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagExistsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exists = reader.bool();
          break;
        case 2:
          message.expirationTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagExistsResponse>): QueryTagExistsResponse {
    const message = createBaseQueryTagExistsResponse();
    message.exists = object.exists ?? false;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? BigInt(object.expirationTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTagExistsResponseAmino): QueryTagExistsResponse {
    const message = createBaseQueryTagExistsResponse();
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = BigInt(object.expiration_time);
    }
    return message;
  },
  toAmino(message: QueryTagExistsResponse): QueryTagExistsResponseAmino {
    const obj: any = {};
    obj.exists = message.exists === false ? undefined : message.exists;
    obj.expiration_time = message.expirationTime !== BigInt(0) ? message.expirationTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagExistsResponseAminoMsg): QueryTagExistsResponse {
    return QueryTagExistsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagExistsResponseProtoMsg): QueryTagExistsResponse {
    return QueryTagExistsResponse.decode(message.value);
  },
  toProto(message: QueryTagExistsResponse): Uint8Array {
    return QueryTagExistsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagExistsResponse): QueryTagExistsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagExistsResponse",
      value: QueryTagExistsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagReportsRequest(): QueryTagReportsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTagReportsRequest defines the QueryTagReportsRequest message.
 * @name QueryTagReportsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagReportsRequest
 */
export const QueryTagReportsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTagReportsRequest",
  encode(message: QueryTagReportsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagReportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagReportsRequest>): QueryTagReportsRequest {
    const message = createBaseQueryTagReportsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagReportsRequestAmino): QueryTagReportsRequest {
    const message = createBaseQueryTagReportsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagReportsRequest): QueryTagReportsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagReportsRequestAminoMsg): QueryTagReportsRequest {
    return QueryTagReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagReportsRequestProtoMsg): QueryTagReportsRequest {
    return QueryTagReportsRequest.decode(message.value);
  },
  toProto(message: QueryTagReportsRequest): Uint8Array {
    return QueryTagReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagReportsRequest): QueryTagReportsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagReportsRequest",
      value: QueryTagReportsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagReportsResponse(): QueryTagReportsResponse {
  return {
    tagName: "",
    underReview: false,
    pagination: undefined
  };
}
/**
 * QueryTagReportsResponse defines the QueryTagReportsResponse message.
 * @name QueryTagReportsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagReportsResponse
 */
export const QueryTagReportsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTagReportsResponse",
  encode(message: QueryTagReportsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    if (message.underReview === true) {
      writer.uint32(16).bool(message.underReview);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        case 2:
          message.underReview = reader.bool();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagReportsResponse>): QueryTagReportsResponse {
    const message = createBaseQueryTagReportsResponse();
    message.tagName = object.tagName ?? "";
    message.underReview = object.underReview ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagReportsResponseAmino): QueryTagReportsResponse {
    const message = createBaseQueryTagReportsResponse();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.under_review !== undefined && object.under_review !== null) {
      message.underReview = object.under_review;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagReportsResponse): QueryTagReportsResponseAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.under_review = message.underReview === false ? undefined : message.underReview;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagReportsResponseAminoMsg): QueryTagReportsResponse {
    return QueryTagReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagReportsResponseProtoMsg): QueryTagReportsResponse {
    return QueryTagReportsResponse.decode(message.value);
  },
  toProto(message: QueryTagReportsResponse): Uint8Array {
    return QueryTagReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagReportsResponse): QueryTagReportsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagReportsResponse",
      value: QueryTagReportsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryForumStatusRequest(): QueryForumStatusRequest {
  return {};
}
/**
 * QueryForumStatusRequest defines the QueryForumStatusRequest message.
 * @name QueryForumStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusRequest
 */
export const QueryForumStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusRequest",
  encode(_: QueryForumStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryForumStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForumStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryForumStatusRequest>): QueryForumStatusRequest {
    const message = createBaseQueryForumStatusRequest();
    return message;
  },
  fromAmino(_: QueryForumStatusRequestAmino): QueryForumStatusRequest {
    const message = createBaseQueryForumStatusRequest();
    return message;
  },
  toAmino(_: QueryForumStatusRequest): QueryForumStatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryForumStatusRequestAminoMsg): QueryForumStatusRequest {
    return QueryForumStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryForumStatusRequestProtoMsg): QueryForumStatusRequest {
    return QueryForumStatusRequest.decode(message.value);
  },
  toProto(message: QueryForumStatusRequest): Uint8Array {
    return QueryForumStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryForumStatusRequest): QueryForumStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryForumStatusRequest",
      value: QueryForumStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryForumStatusResponse(): QueryForumStatusResponse {
  return {
    forumPaused: false,
    moderationPaused: false,
    currentEpoch: BigInt(0)
  };
}
/**
 * QueryForumStatusResponse defines the QueryForumStatusResponse message.
 * @name QueryForumStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusResponse
 */
export const QueryForumStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusResponse",
  encode(message: QueryForumStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forumPaused === true) {
      writer.uint32(8).bool(message.forumPaused);
    }
    if (message.moderationPaused === true) {
      writer.uint32(16).bool(message.moderationPaused);
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryForumStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForumStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forumPaused = reader.bool();
          break;
        case 2:
          message.moderationPaused = reader.bool();
          break;
        case 3:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryForumStatusResponse>): QueryForumStatusResponse {
    const message = createBaseQueryForumStatusResponse();
    message.forumPaused = object.forumPaused ?? false;
    message.moderationPaused = object.moderationPaused ?? false;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryForumStatusResponseAmino): QueryForumStatusResponse {
    const message = createBaseQueryForumStatusResponse();
    if (object.forum_paused !== undefined && object.forum_paused !== null) {
      message.forumPaused = object.forum_paused;
    }
    if (object.moderation_paused !== undefined && object.moderation_paused !== null) {
      message.moderationPaused = object.moderation_paused;
    }
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message: QueryForumStatusResponse): QueryForumStatusResponseAmino {
    const obj: any = {};
    obj.forum_paused = message.forumPaused === false ? undefined : message.forumPaused;
    obj.moderation_paused = message.moderationPaused === false ? undefined : message.moderationPaused;
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryForumStatusResponseAminoMsg): QueryForumStatusResponse {
    return QueryForumStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryForumStatusResponseProtoMsg): QueryForumStatusResponse {
    return QueryForumStatusResponse.decode(message.value);
  },
  toProto(message: QueryForumStatusResponse): Uint8Array {
    return QueryForumStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryForumStatusResponse): QueryForumStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryForumStatusResponse",
      value: QueryForumStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAppealCooldownRequest(): QueryAppealCooldownRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryAppealCooldownRequest defines the QueryAppealCooldownRequest message.
 * @name QueryAppealCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownRequest
 */
export const QueryAppealCooldownRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownRequest",
  encode(message: QueryAppealCooldownRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppealCooldownRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppealCooldownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAppealCooldownRequest>): QueryAppealCooldownRequest {
    const message = createBaseQueryAppealCooldownRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAppealCooldownRequestAmino): QueryAppealCooldownRequest {
    const message = createBaseQueryAppealCooldownRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryAppealCooldownRequest): QueryAppealCooldownRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAppealCooldownRequestAminoMsg): QueryAppealCooldownRequest {
    return QueryAppealCooldownRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAppealCooldownRequestProtoMsg): QueryAppealCooldownRequest {
    return QueryAppealCooldownRequest.decode(message.value);
  },
  toProto(message: QueryAppealCooldownRequest): Uint8Array {
    return QueryAppealCooldownRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAppealCooldownRequest): QueryAppealCooldownRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownRequest",
      value: QueryAppealCooldownRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAppealCooldownResponse(): QueryAppealCooldownResponse {
  return {
    inCooldown: false,
    cooldownEnds: BigInt(0)
  };
}
/**
 * QueryAppealCooldownResponse defines the QueryAppealCooldownResponse message.
 * @name QueryAppealCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownResponse
 */
export const QueryAppealCooldownResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownResponse",
  encode(message: QueryAppealCooldownResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inCooldown === true) {
      writer.uint32(8).bool(message.inCooldown);
    }
    if (message.cooldownEnds !== BigInt(0)) {
      writer.uint32(16).int64(message.cooldownEnds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppealCooldownResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppealCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inCooldown = reader.bool();
          break;
        case 2:
          message.cooldownEnds = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAppealCooldownResponse>): QueryAppealCooldownResponse {
    const message = createBaseQueryAppealCooldownResponse();
    message.inCooldown = object.inCooldown ?? false;
    message.cooldownEnds = object.cooldownEnds !== undefined && object.cooldownEnds !== null ? BigInt(object.cooldownEnds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAppealCooldownResponseAmino): QueryAppealCooldownResponse {
    const message = createBaseQueryAppealCooldownResponse();
    if (object.in_cooldown !== undefined && object.in_cooldown !== null) {
      message.inCooldown = object.in_cooldown;
    }
    if (object.cooldown_ends !== undefined && object.cooldown_ends !== null) {
      message.cooldownEnds = BigInt(object.cooldown_ends);
    }
    return message;
  },
  toAmino(message: QueryAppealCooldownResponse): QueryAppealCooldownResponseAmino {
    const obj: any = {};
    obj.in_cooldown = message.inCooldown === false ? undefined : message.inCooldown;
    obj.cooldown_ends = message.cooldownEnds !== BigInt(0) ? message.cooldownEnds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAppealCooldownResponseAminoMsg): QueryAppealCooldownResponse {
    return QueryAppealCooldownResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAppealCooldownResponseProtoMsg): QueryAppealCooldownResponse {
    return QueryAppealCooldownResponse.decode(message.value);
  },
  toProto(message: QueryAppealCooldownResponse): Uint8Array {
    return QueryAppealCooldownResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAppealCooldownResponse): QueryAppealCooldownResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownResponse",
      value: QueryAppealCooldownResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberReportsRequest(): QueryMemberReportsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryMemberReportsRequest defines the QueryMemberReportsRequest message.
 * @name QueryMemberReportsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberReportsRequest
 */
export const QueryMemberReportsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryMemberReportsRequest",
  encode(message: QueryMemberReportsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberReportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberReportsRequest>): QueryMemberReportsRequest {
    const message = createBaseQueryMemberReportsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberReportsRequestAmino): QueryMemberReportsRequest {
    const message = createBaseQueryMemberReportsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberReportsRequest): QueryMemberReportsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberReportsRequestAminoMsg): QueryMemberReportsRequest {
    return QueryMemberReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberReportsRequestProtoMsg): QueryMemberReportsRequest {
    return QueryMemberReportsRequest.decode(message.value);
  },
  toProto(message: QueryMemberReportsRequest): Uint8Array {
    return QueryMemberReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberReportsRequest): QueryMemberReportsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryMemberReportsRequest",
      value: QueryMemberReportsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberReportsResponse(): QueryMemberReportsResponse {
  return {
    member: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberReportsResponse defines the QueryMemberReportsResponse message.
 * @name QueryMemberReportsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberReportsResponse
 */
export const QueryMemberReportsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryMemberReportsResponse",
  encode(message: QueryMemberReportsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(16).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.status = reader.uint64();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberReportsResponse>): QueryMemberReportsResponse {
    const message = createBaseQueryMemberReportsResponse();
    message.member = object.member ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberReportsResponseAmino): QueryMemberReportsResponse {
    const message = createBaseQueryMemberReportsResponse();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberReportsResponse): QueryMemberReportsResponseAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberReportsResponseAminoMsg): QueryMemberReportsResponse {
    return QueryMemberReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberReportsResponseProtoMsg): QueryMemberReportsResponse {
    return QueryMemberReportsResponse.decode(message.value);
  },
  toProto(message: QueryMemberReportsResponse): Uint8Array {
    return QueryMemberReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberReportsResponse): QueryMemberReportsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryMemberReportsResponse",
      value: QueryMemberReportsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberWarningsRequest(): QueryMemberWarningsRequest {
  return {
    member: "",
    pagination: undefined
  };
}
/**
 * QueryMemberWarningsRequest defines the QueryMemberWarningsRequest message.
 * @name QueryMemberWarningsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberWarningsRequest
 */
export const QueryMemberWarningsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryMemberWarningsRequest",
  encode(message: QueryMemberWarningsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberWarningsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberWarningsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberWarningsRequest>): QueryMemberWarningsRequest {
    const message = createBaseQueryMemberWarningsRequest();
    message.member = object.member ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberWarningsRequestAmino): QueryMemberWarningsRequest {
    const message = createBaseQueryMemberWarningsRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberWarningsRequest): QueryMemberWarningsRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberWarningsRequestAminoMsg): QueryMemberWarningsRequest {
    return QueryMemberWarningsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberWarningsRequestProtoMsg): QueryMemberWarningsRequest {
    return QueryMemberWarningsRequest.decode(message.value);
  },
  toProto(message: QueryMemberWarningsRequest): Uint8Array {
    return QueryMemberWarningsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberWarningsRequest): QueryMemberWarningsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryMemberWarningsRequest",
      value: QueryMemberWarningsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberWarningsResponse(): QueryMemberWarningsResponse {
  return {
    warningNumber: BigInt(0),
    reason: "",
    issuedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberWarningsResponse defines the QueryMemberWarningsResponse message.
 * @name QueryMemberWarningsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberWarningsResponse
 */
export const QueryMemberWarningsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryMemberWarningsResponse",
  encode(message: QueryMemberWarningsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.warningNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.warningNumber);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.issuedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.issuedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberWarningsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberWarningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warningNumber = reader.uint64();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.issuedAt = reader.int64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberWarningsResponse>): QueryMemberWarningsResponse {
    const message = createBaseQueryMemberWarningsResponse();
    message.warningNumber = object.warningNumber !== undefined && object.warningNumber !== null ? BigInt(object.warningNumber.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    message.issuedAt = object.issuedAt !== undefined && object.issuedAt !== null ? BigInt(object.issuedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberWarningsResponseAmino): QueryMemberWarningsResponse {
    const message = createBaseQueryMemberWarningsResponse();
    if (object.warning_number !== undefined && object.warning_number !== null) {
      message.warningNumber = BigInt(object.warning_number);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.issued_at !== undefined && object.issued_at !== null) {
      message.issuedAt = BigInt(object.issued_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberWarningsResponse): QueryMemberWarningsResponseAmino {
    const obj: any = {};
    obj.warning_number = message.warningNumber !== BigInt(0) ? message.warningNumber?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.issued_at = message.issuedAt !== BigInt(0) ? message.issuedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberWarningsResponseAminoMsg): QueryMemberWarningsResponse {
    return QueryMemberWarningsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberWarningsResponseProtoMsg): QueryMemberWarningsResponse {
    return QueryMemberWarningsResponse.decode(message.value);
  },
  toProto(message: QueryMemberWarningsResponse): Uint8Array {
    return QueryMemberWarningsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberWarningsResponse): QueryMemberWarningsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryMemberWarningsResponse",
      value: QueryMemberWarningsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberStandingRequest(): QueryMemberStandingRequest {
  return {
    member: ""
  };
}
/**
 * QueryMemberStandingRequest defines the QueryMemberStandingRequest message.
 * @name QueryMemberStandingRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberStandingRequest
 */
export const QueryMemberStandingRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryMemberStandingRequest",
  encode(message: QueryMemberStandingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberStandingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberStandingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberStandingRequest>): QueryMemberStandingRequest {
    const message = createBaseQueryMemberStandingRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryMemberStandingRequestAmino): QueryMemberStandingRequest {
    const message = createBaseQueryMemberStandingRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryMemberStandingRequest): QueryMemberStandingRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryMemberStandingRequestAminoMsg): QueryMemberStandingRequest {
    return QueryMemberStandingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberStandingRequestProtoMsg): QueryMemberStandingRequest {
    return QueryMemberStandingRequest.decode(message.value);
  },
  toProto(message: QueryMemberStandingRequest): Uint8Array {
    return QueryMemberStandingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberStandingRequest): QueryMemberStandingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryMemberStandingRequest",
      value: QueryMemberStandingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberStandingResponse(): QueryMemberStandingResponse {
  return {
    warningCount: BigInt(0),
    activeReport: false,
    trustTier: BigInt(0)
  };
}
/**
 * QueryMemberStandingResponse defines the QueryMemberStandingResponse message.
 * @name QueryMemberStandingResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryMemberStandingResponse
 */
export const QueryMemberStandingResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryMemberStandingResponse",
  encode(message: QueryMemberStandingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.warningCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.warningCount);
    }
    if (message.activeReport === true) {
      writer.uint32(16).bool(message.activeReport);
    }
    if (message.trustTier !== BigInt(0)) {
      writer.uint32(24).uint64(message.trustTier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberStandingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberStandingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warningCount = reader.uint64();
          break;
        case 2:
          message.activeReport = reader.bool();
          break;
        case 3:
          message.trustTier = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberStandingResponse>): QueryMemberStandingResponse {
    const message = createBaseQueryMemberStandingResponse();
    message.warningCount = object.warningCount !== undefined && object.warningCount !== null ? BigInt(object.warningCount.toString()) : BigInt(0);
    message.activeReport = object.activeReport ?? false;
    message.trustTier = object.trustTier !== undefined && object.trustTier !== null ? BigInt(object.trustTier.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberStandingResponseAmino): QueryMemberStandingResponse {
    const message = createBaseQueryMemberStandingResponse();
    if (object.warning_count !== undefined && object.warning_count !== null) {
      message.warningCount = BigInt(object.warning_count);
    }
    if (object.active_report !== undefined && object.active_report !== null) {
      message.activeReport = object.active_report;
    }
    if (object.trust_tier !== undefined && object.trust_tier !== null) {
      message.trustTier = BigInt(object.trust_tier);
    }
    return message;
  },
  toAmino(message: QueryMemberStandingResponse): QueryMemberStandingResponseAmino {
    const obj: any = {};
    obj.warning_count = message.warningCount !== BigInt(0) ? message.warningCount?.toString() : undefined;
    obj.active_report = message.activeReport === false ? undefined : message.activeReport;
    obj.trust_tier = message.trustTier !== BigInt(0) ? message.trustTier?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberStandingResponseAminoMsg): QueryMemberStandingResponse {
    return QueryMemberStandingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberStandingResponseProtoMsg): QueryMemberStandingResponse {
    return QueryMemberStandingResponse.decode(message.value);
  },
  toProto(message: QueryMemberStandingResponse): Uint8Array {
    return QueryMemberStandingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberStandingResponse): QueryMemberStandingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryMemberStandingResponse",
      value: QueryMemberStandingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedPostsRequest(): QueryPinnedPostsRequest {
  return {
    categoryId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryPinnedPostsRequest defines the QueryPinnedPostsRequest message.
 * @name QueryPinnedPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsRequest
 */
export const QueryPinnedPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsRequest",
  encode(message: QueryPinnedPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPinnedPostsRequest>): QueryPinnedPostsRequest {
    const message = createBaseQueryPinnedPostsRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPinnedPostsRequestAmino): QueryPinnedPostsRequest {
    const message = createBaseQueryPinnedPostsRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedPostsRequest): QueryPinnedPostsRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedPostsRequestAminoMsg): QueryPinnedPostsRequest {
    return QueryPinnedPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPinnedPostsRequestProtoMsg): QueryPinnedPostsRequest {
    return QueryPinnedPostsRequest.decode(message.value);
  },
  toProto(message: QueryPinnedPostsRequest): Uint8Array {
    return QueryPinnedPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedPostsRequest): QueryPinnedPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsRequest",
      value: QueryPinnedPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedPostsResponse(): QueryPinnedPostsResponse {
  return {
    postId: BigInt(0),
    priority: BigInt(0),
    pinnedBy: "",
    pagination: undefined
  };
}
/**
 * QueryPinnedPostsResponse defines the QueryPinnedPostsResponse message.
 * @name QueryPinnedPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsResponse
 */
export const QueryPinnedPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsResponse",
  encode(message: QueryPinnedPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.priority !== BigInt(0)) {
      writer.uint32(16).uint64(message.priority);
    }
    if (message.pinnedBy !== "") {
      writer.uint32(26).string(message.pinnedBy);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.priority = reader.uint64();
          break;
        case 3:
          message.pinnedBy = reader.string();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPinnedPostsResponse>): QueryPinnedPostsResponse {
    const message = createBaseQueryPinnedPostsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.priority = object.priority !== undefined && object.priority !== null ? BigInt(object.priority.toString()) : BigInt(0);
    message.pinnedBy = object.pinnedBy ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPinnedPostsResponseAmino): QueryPinnedPostsResponse {
    const message = createBaseQueryPinnedPostsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = BigInt(object.priority);
    }
    if (object.pinned_by !== undefined && object.pinned_by !== null) {
      message.pinnedBy = object.pinned_by;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedPostsResponse): QueryPinnedPostsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.priority = message.priority !== BigInt(0) ? message.priority?.toString() : undefined;
    obj.pinned_by = message.pinnedBy === "" ? undefined : message.pinnedBy;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedPostsResponseAminoMsg): QueryPinnedPostsResponse {
    return QueryPinnedPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPinnedPostsResponseProtoMsg): QueryPinnedPostsResponse {
    return QueryPinnedPostsResponse.decode(message.value);
  },
  toProto(message: QueryPinnedPostsResponse): Uint8Array {
    return QueryPinnedPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedPostsResponse): QueryPinnedPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsResponse",
      value: QueryPinnedPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockedThreadsRequest(): QueryLockedThreadsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryLockedThreadsRequest defines the QueryLockedThreadsRequest message.
 * @name QueryLockedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsRequest
 */
export const QueryLockedThreadsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsRequest",
  encode(message: QueryLockedThreadsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedThreadsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedThreadsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLockedThreadsRequest>): QueryLockedThreadsRequest {
    const message = createBaseQueryLockedThreadsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLockedThreadsRequestAmino): QueryLockedThreadsRequest {
    const message = createBaseQueryLockedThreadsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLockedThreadsRequest): QueryLockedThreadsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockedThreadsRequestAminoMsg): QueryLockedThreadsRequest {
    return QueryLockedThreadsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedThreadsRequestProtoMsg): QueryLockedThreadsRequest {
    return QueryLockedThreadsRequest.decode(message.value);
  },
  toProto(message: QueryLockedThreadsRequest): Uint8Array {
    return QueryLockedThreadsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedThreadsRequest): QueryLockedThreadsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsRequest",
      value: QueryLockedThreadsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockedThreadsResponse(): QueryLockedThreadsResponse {
  return {
    rootId: BigInt(0),
    lockedBy: "",
    lockedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryLockedThreadsResponse defines the QueryLockedThreadsResponse message.
 * @name QueryLockedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsResponse
 */
export const QueryLockedThreadsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsResponse",
  encode(message: QueryLockedThreadsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.lockedBy !== "") {
      writer.uint32(18).string(message.lockedBy);
    }
    if (message.lockedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.lockedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedThreadsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedThreadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        case 2:
          message.lockedBy = reader.string();
          break;
        case 3:
          message.lockedAt = reader.int64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLockedThreadsResponse>): QueryLockedThreadsResponse {
    const message = createBaseQueryLockedThreadsResponse();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.lockedBy = object.lockedBy ?? "";
    message.lockedAt = object.lockedAt !== undefined && object.lockedAt !== null ? BigInt(object.lockedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLockedThreadsResponseAmino): QueryLockedThreadsResponse {
    const message = createBaseQueryLockedThreadsResponse();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.locked_by !== undefined && object.locked_by !== null) {
      message.lockedBy = object.locked_by;
    }
    if (object.locked_at !== undefined && object.locked_at !== null) {
      message.lockedAt = BigInt(object.locked_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLockedThreadsResponse): QueryLockedThreadsResponseAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.locked_by = message.lockedBy === "" ? undefined : message.lockedBy;
    obj.locked_at = message.lockedAt !== BigInt(0) ? message.lockedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockedThreadsResponseAminoMsg): QueryLockedThreadsResponse {
    return QueryLockedThreadsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedThreadsResponseProtoMsg): QueryLockedThreadsResponse {
    return QueryLockedThreadsResponse.decode(message.value);
  },
  toProto(message: QueryLockedThreadsResponse): Uint8Array {
    return QueryLockedThreadsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedThreadsResponse): QueryLockedThreadsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsResponse",
      value: QueryLockedThreadsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThreadLockStatusRequest(): QueryThreadLockStatusRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryThreadLockStatusRequest defines the QueryThreadLockStatusRequest message.
 * @name QueryThreadLockStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusRequest
 */
export const QueryThreadLockStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusRequest",
  encode(message: QueryThreadLockStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadLockStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadLockStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadLockStatusRequest>): QueryThreadLockStatusRequest {
    const message = createBaseQueryThreadLockStatusRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryThreadLockStatusRequestAmino): QueryThreadLockStatusRequest {
    const message = createBaseQueryThreadLockStatusRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryThreadLockStatusRequest): QueryThreadLockStatusRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadLockStatusRequestAminoMsg): QueryThreadLockStatusRequest {
    return QueryThreadLockStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadLockStatusRequestProtoMsg): QueryThreadLockStatusRequest {
    return QueryThreadLockStatusRequest.decode(message.value);
  },
  toProto(message: QueryThreadLockStatusRequest): Uint8Array {
    return QueryThreadLockStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadLockStatusRequest): QueryThreadLockStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusRequest",
      value: QueryThreadLockStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThreadLockStatusResponse(): QueryThreadLockStatusResponse {
  return {
    locked: false,
    lockedBy: "",
    reason: "",
    isSentinelLock: false
  };
}
/**
 * QueryThreadLockStatusResponse defines the QueryThreadLockStatusResponse message.
 * @name QueryThreadLockStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusResponse
 */
export const QueryThreadLockStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusResponse",
  encode(message: QueryThreadLockStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.locked === true) {
      writer.uint32(8).bool(message.locked);
    }
    if (message.lockedBy !== "") {
      writer.uint32(18).string(message.lockedBy);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.isSentinelLock === true) {
      writer.uint32(32).bool(message.isSentinelLock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadLockStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadLockStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locked = reader.bool();
          break;
        case 2:
          message.lockedBy = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.isSentinelLock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadLockStatusResponse>): QueryThreadLockStatusResponse {
    const message = createBaseQueryThreadLockStatusResponse();
    message.locked = object.locked ?? false;
    message.lockedBy = object.lockedBy ?? "";
    message.reason = object.reason ?? "";
    message.isSentinelLock = object.isSentinelLock ?? false;
    return message;
  },
  fromAmino(object: QueryThreadLockStatusResponseAmino): QueryThreadLockStatusResponse {
    const message = createBaseQueryThreadLockStatusResponse();
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = object.locked;
    }
    if (object.locked_by !== undefined && object.locked_by !== null) {
      message.lockedBy = object.locked_by;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.is_sentinel_lock !== undefined && object.is_sentinel_lock !== null) {
      message.isSentinelLock = object.is_sentinel_lock;
    }
    return message;
  },
  toAmino(message: QueryThreadLockStatusResponse): QueryThreadLockStatusResponseAmino {
    const obj: any = {};
    obj.locked = message.locked === false ? undefined : message.locked;
    obj.locked_by = message.lockedBy === "" ? undefined : message.lockedBy;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.is_sentinel_lock = message.isSentinelLock === false ? undefined : message.isSentinelLock;
    return obj;
  },
  fromAminoMsg(object: QueryThreadLockStatusResponseAminoMsg): QueryThreadLockStatusResponse {
    return QueryThreadLockStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadLockStatusResponseProtoMsg): QueryThreadLockStatusResponse {
    return QueryThreadLockStatusResponse.decode(message.value);
  },
  toProto(message: QueryThreadLockStatusResponse): Uint8Array {
    return QueryThreadLockStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadLockStatusResponse): QueryThreadLockStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusResponse",
      value: QueryThreadLockStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTopPostsRequest(): QueryTopPostsRequest {
  return {
    categoryId: BigInt(0),
    timeRange: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTopPostsRequest defines the QueryTopPostsRequest message.
 * @name QueryTopPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsRequest
 */
export const QueryTopPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsRequest",
  encode(message: QueryTopPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.timeRange !== BigInt(0)) {
      writer.uint32(16).int64(message.timeRange);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTopPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTopPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.timeRange = reader.int64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTopPostsRequest>): QueryTopPostsRequest {
    const message = createBaseQueryTopPostsRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.timeRange = object.timeRange !== undefined && object.timeRange !== null ? BigInt(object.timeRange.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTopPostsRequestAmino): QueryTopPostsRequest {
    const message = createBaseQueryTopPostsRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.time_range !== undefined && object.time_range !== null) {
      message.timeRange = BigInt(object.time_range);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTopPostsRequest): QueryTopPostsRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.time_range = message.timeRange !== BigInt(0) ? message.timeRange?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTopPostsRequestAminoMsg): QueryTopPostsRequest {
    return QueryTopPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTopPostsRequestProtoMsg): QueryTopPostsRequest {
    return QueryTopPostsRequest.decode(message.value);
  },
  toProto(message: QueryTopPostsRequest): Uint8Array {
    return QueryTopPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTopPostsRequest): QueryTopPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTopPostsRequest",
      value: QueryTopPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTopPostsResponse(): QueryTopPostsResponse {
  return {
    postId: BigInt(0),
    upvoteCount: BigInt(0),
    downvoteCount: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTopPostsResponse defines the QueryTopPostsResponse message.
 * @name QueryTopPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsResponse
 */
export const QueryTopPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsResponse",
  encode(message: QueryTopPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.upvoteCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.upvoteCount);
    }
    if (message.downvoteCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.downvoteCount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTopPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTopPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.upvoteCount = reader.uint64();
          break;
        case 3:
          message.downvoteCount = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTopPostsResponse>): QueryTopPostsResponse {
    const message = createBaseQueryTopPostsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.upvoteCount = object.upvoteCount !== undefined && object.upvoteCount !== null ? BigInt(object.upvoteCount.toString()) : BigInt(0);
    message.downvoteCount = object.downvoteCount !== undefined && object.downvoteCount !== null ? BigInt(object.downvoteCount.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTopPostsResponseAmino): QueryTopPostsResponse {
    const message = createBaseQueryTopPostsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.upvote_count !== undefined && object.upvote_count !== null) {
      message.upvoteCount = BigInt(object.upvote_count);
    }
    if (object.downvote_count !== undefined && object.downvote_count !== null) {
      message.downvoteCount = BigInt(object.downvote_count);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTopPostsResponse): QueryTopPostsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.upvote_count = message.upvoteCount !== BigInt(0) ? message.upvoteCount?.toString() : undefined;
    obj.downvote_count = message.downvoteCount !== BigInt(0) ? message.downvoteCount?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTopPostsResponseAminoMsg): QueryTopPostsResponse {
    return QueryTopPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTopPostsResponseProtoMsg): QueryTopPostsResponse {
    return QueryTopPostsResponse.decode(message.value);
  },
  toProto(message: QueryTopPostsResponse): Uint8Array {
    return QueryTopPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTopPostsResponse): QueryTopPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTopPostsResponse",
      value: QueryTopPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThreadFollowersRequest(): QueryThreadFollowersRequest {
  return {
    threadId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadFollowersRequest defines the QueryThreadFollowersRequest message.
 * @name QueryThreadFollowersRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersRequest
 */
export const QueryThreadFollowersRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersRequest",
  encode(message: QueryThreadFollowersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadFollowersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadFollowersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadFollowersRequest>): QueryThreadFollowersRequest {
    const message = createBaseQueryThreadFollowersRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadFollowersRequestAmino): QueryThreadFollowersRequest {
    const message = createBaseQueryThreadFollowersRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadFollowersRequest): QueryThreadFollowersRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadFollowersRequestAminoMsg): QueryThreadFollowersRequest {
    return QueryThreadFollowersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadFollowersRequestProtoMsg): QueryThreadFollowersRequest {
    return QueryThreadFollowersRequest.decode(message.value);
  },
  toProto(message: QueryThreadFollowersRequest): Uint8Array {
    return QueryThreadFollowersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadFollowersRequest): QueryThreadFollowersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersRequest",
      value: QueryThreadFollowersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThreadFollowersResponse(): QueryThreadFollowersResponse {
  return {
    follower: "",
    followedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadFollowersResponse defines the QueryThreadFollowersResponse message.
 * @name QueryThreadFollowersResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersResponse
 */
export const QueryThreadFollowersResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersResponse",
  encode(message: QueryThreadFollowersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.follower !== "") {
      writer.uint32(10).string(message.follower);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.followedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadFollowersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadFollowersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.follower = reader.string();
          break;
        case 2:
          message.followedAt = reader.int64();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadFollowersResponse>): QueryThreadFollowersResponse {
    const message = createBaseQueryThreadFollowersResponse();
    message.follower = object.follower ?? "";
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadFollowersResponseAmino): QueryThreadFollowersResponse {
    const message = createBaseQueryThreadFollowersResponse();
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = object.follower;
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadFollowersResponse): QueryThreadFollowersResponseAmino {
    const obj: any = {};
    obj.follower = message.follower === "" ? undefined : message.follower;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadFollowersResponseAminoMsg): QueryThreadFollowersResponse {
    return QueryThreadFollowersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadFollowersResponseProtoMsg): QueryThreadFollowersResponse {
    return QueryThreadFollowersResponse.decode(message.value);
  },
  toProto(message: QueryThreadFollowersResponse): Uint8Array {
    return QueryThreadFollowersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadFollowersResponse): QueryThreadFollowersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersResponse",
      value: QueryThreadFollowersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserFollowedThreadsRequest(): QueryUserFollowedThreadsRequest {
  return {
    user: "",
    pagination: undefined
  };
}
/**
 * QueryUserFollowedThreadsRequest defines the QueryUserFollowedThreadsRequest message.
 * @name QueryUserFollowedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsRequest
 */
export const QueryUserFollowedThreadsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest",
  encode(message: QueryUserFollowedThreadsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserFollowedThreadsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserFollowedThreadsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserFollowedThreadsRequest>): QueryUserFollowedThreadsRequest {
    const message = createBaseQueryUserFollowedThreadsRequest();
    message.user = object.user ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserFollowedThreadsRequestAmino): QueryUserFollowedThreadsRequest {
    const message = createBaseQueryUserFollowedThreadsRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserFollowedThreadsRequest): QueryUserFollowedThreadsRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserFollowedThreadsRequestAminoMsg): QueryUserFollowedThreadsRequest {
    return QueryUserFollowedThreadsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserFollowedThreadsRequestProtoMsg): QueryUserFollowedThreadsRequest {
    return QueryUserFollowedThreadsRequest.decode(message.value);
  },
  toProto(message: QueryUserFollowedThreadsRequest): Uint8Array {
    return QueryUserFollowedThreadsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserFollowedThreadsRequest): QueryUserFollowedThreadsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest",
      value: QueryUserFollowedThreadsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserFollowedThreadsResponse(): QueryUserFollowedThreadsResponse {
  return {
    threadId: BigInt(0),
    followedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryUserFollowedThreadsResponse defines the QueryUserFollowedThreadsResponse message.
 * @name QueryUserFollowedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsResponse
 */
export const QueryUserFollowedThreadsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse",
  encode(message: QueryUserFollowedThreadsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.followedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserFollowedThreadsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserFollowedThreadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.followedAt = reader.int64();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserFollowedThreadsResponse>): QueryUserFollowedThreadsResponse {
    const message = createBaseQueryUserFollowedThreadsResponse();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserFollowedThreadsResponseAmino): QueryUserFollowedThreadsResponse {
    const message = createBaseQueryUserFollowedThreadsResponse();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserFollowedThreadsResponse): QueryUserFollowedThreadsResponseAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserFollowedThreadsResponseAminoMsg): QueryUserFollowedThreadsResponse {
    return QueryUserFollowedThreadsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserFollowedThreadsResponseProtoMsg): QueryUserFollowedThreadsResponse {
    return QueryUserFollowedThreadsResponse.decode(message.value);
  },
  toProto(message: QueryUserFollowedThreadsResponse): Uint8Array {
    return QueryUserFollowedThreadsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserFollowedThreadsResponse): QueryUserFollowedThreadsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse",
      value: QueryUserFollowedThreadsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsFollowingThreadRequest(): QueryIsFollowingThreadRequest {
  return {
    threadId: BigInt(0),
    user: ""
  };
}
/**
 * QueryIsFollowingThreadRequest defines the QueryIsFollowingThreadRequest message.
 * @name QueryIsFollowingThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadRequest
 */
export const QueryIsFollowingThreadRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest",
  encode(message: QueryIsFollowingThreadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsFollowingThreadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFollowingThreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsFollowingThreadRequest>): QueryIsFollowingThreadRequest {
    const message = createBaseQueryIsFollowingThreadRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryIsFollowingThreadRequestAmino): QueryIsFollowingThreadRequest {
    const message = createBaseQueryIsFollowingThreadRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryIsFollowingThreadRequest): QueryIsFollowingThreadRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryIsFollowingThreadRequestAminoMsg): QueryIsFollowingThreadRequest {
    return QueryIsFollowingThreadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsFollowingThreadRequestProtoMsg): QueryIsFollowingThreadRequest {
    return QueryIsFollowingThreadRequest.decode(message.value);
  },
  toProto(message: QueryIsFollowingThreadRequest): Uint8Array {
    return QueryIsFollowingThreadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsFollowingThreadRequest): QueryIsFollowingThreadRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest",
      value: QueryIsFollowingThreadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsFollowingThreadResponse(): QueryIsFollowingThreadResponse {
  return {
    isFollowing: false,
    followedAt: BigInt(0)
  };
}
/**
 * QueryIsFollowingThreadResponse defines the QueryIsFollowingThreadResponse message.
 * @name QueryIsFollowingThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadResponse
 */
export const QueryIsFollowingThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse",
  encode(message: QueryIsFollowingThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isFollowing === true) {
      writer.uint32(8).bool(message.isFollowing);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.followedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsFollowingThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFollowingThreadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFollowing = reader.bool();
          break;
        case 2:
          message.followedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsFollowingThreadResponse>): QueryIsFollowingThreadResponse {
    const message = createBaseQueryIsFollowingThreadResponse();
    message.isFollowing = object.isFollowing ?? false;
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIsFollowingThreadResponseAmino): QueryIsFollowingThreadResponse {
    const message = createBaseQueryIsFollowingThreadResponse();
    if (object.is_following !== undefined && object.is_following !== null) {
      message.isFollowing = object.is_following;
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    return message;
  },
  toAmino(message: QueryIsFollowingThreadResponse): QueryIsFollowingThreadResponseAmino {
    const obj: any = {};
    obj.is_following = message.isFollowing === false ? undefined : message.isFollowing;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIsFollowingThreadResponseAminoMsg): QueryIsFollowingThreadResponse {
    return QueryIsFollowingThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsFollowingThreadResponseProtoMsg): QueryIsFollowingThreadResponse {
    return QueryIsFollowingThreadResponse.decode(message.value);
  },
  toProto(message: QueryIsFollowingThreadResponse): Uint8Array {
    return QueryIsFollowingThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsFollowingThreadResponse): QueryIsFollowingThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse",
      value: QueryIsFollowingThreadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBountyByThreadRequest(): QueryBountyByThreadRequest {
  return {
    threadId: BigInt(0)
  };
}
/**
 * QueryBountyByThreadRequest defines the QueryBountyByThreadRequest message.
 * @name QueryBountyByThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadRequest
 */
export const QueryBountyByThreadRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadRequest",
  encode(message: QueryBountyByThreadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyByThreadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyByThreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyByThreadRequest>): QueryBountyByThreadRequest {
    const message = createBaseQueryBountyByThreadRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBountyByThreadRequestAmino): QueryBountyByThreadRequest {
    const message = createBaseQueryBountyByThreadRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: QueryBountyByThreadRequest): QueryBountyByThreadRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyByThreadRequestAminoMsg): QueryBountyByThreadRequest {
    return QueryBountyByThreadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyByThreadRequestProtoMsg): QueryBountyByThreadRequest {
    return QueryBountyByThreadRequest.decode(message.value);
  },
  toProto(message: QueryBountyByThreadRequest): Uint8Array {
    return QueryBountyByThreadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyByThreadRequest): QueryBountyByThreadRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadRequest",
      value: QueryBountyByThreadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBountyByThreadResponse(): QueryBountyByThreadResponse {
  return {
    bountyId: BigInt(0),
    amount: "",
    status: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * QueryBountyByThreadResponse defines the QueryBountyByThreadResponse message.
 * @name QueryBountyByThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadResponse
 */
export const QueryBountyByThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadResponse",
  encode(message: QueryBountyByThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(32).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyByThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyByThreadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyByThreadResponse>): QueryBountyByThreadResponse {
    const message = createBaseQueryBountyByThreadResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBountyByThreadResponseAmino): QueryBountyByThreadResponse {
    const message = createBaseQueryBountyByThreadResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: QueryBountyByThreadResponse): QueryBountyByThreadResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyByThreadResponseAminoMsg): QueryBountyByThreadResponse {
    return QueryBountyByThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyByThreadResponseProtoMsg): QueryBountyByThreadResponse {
    return QueryBountyByThreadResponse.decode(message.value);
  },
  toProto(message: QueryBountyByThreadResponse): Uint8Array {
    return QueryBountyByThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyByThreadResponse): QueryBountyByThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadResponse",
      value: QueryBountyByThreadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveBountiesRequest(): QueryActiveBountiesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryActiveBountiesRequest defines the QueryActiveBountiesRequest message.
 * @name QueryActiveBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesRequest
 */
export const QueryActiveBountiesRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesRequest",
  encode(message: QueryActiveBountiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveBountiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveBountiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActiveBountiesRequest>): QueryActiveBountiesRequest {
    const message = createBaseQueryActiveBountiesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActiveBountiesRequestAmino): QueryActiveBountiesRequest {
    const message = createBaseQueryActiveBountiesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActiveBountiesRequest): QueryActiveBountiesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActiveBountiesRequestAminoMsg): QueryActiveBountiesRequest {
    return QueryActiveBountiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveBountiesRequestProtoMsg): QueryActiveBountiesRequest {
    return QueryActiveBountiesRequest.decode(message.value);
  },
  toProto(message: QueryActiveBountiesRequest): Uint8Array {
    return QueryActiveBountiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveBountiesRequest): QueryActiveBountiesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesRequest",
      value: QueryActiveBountiesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveBountiesResponse(): QueryActiveBountiesResponse {
  return {
    bountyId: BigInt(0),
    threadId: BigInt(0),
    amount: "",
    pagination: undefined
  };
}
/**
 * QueryActiveBountiesResponse defines the QueryActiveBountiesResponse message.
 * @name QueryActiveBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesResponse
 */
export const QueryActiveBountiesResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesResponse",
  encode(message: QueryActiveBountiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveBountiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveBountiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActiveBountiesResponse>): QueryActiveBountiesResponse {
    const message = createBaseQueryActiveBountiesResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActiveBountiesResponseAmino): QueryActiveBountiesResponse {
    const message = createBaseQueryActiveBountiesResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActiveBountiesResponse): QueryActiveBountiesResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActiveBountiesResponseAminoMsg): QueryActiveBountiesResponse {
    return QueryActiveBountiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveBountiesResponseProtoMsg): QueryActiveBountiesResponse {
    return QueryActiveBountiesResponse.decode(message.value);
  },
  toProto(message: QueryActiveBountiesResponse): Uint8Array {
    return QueryActiveBountiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveBountiesResponse): QueryActiveBountiesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesResponse",
      value: QueryActiveBountiesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserBountiesRequest(): QueryUserBountiesRequest {
  return {
    user: "",
    pagination: undefined
  };
}
/**
 * QueryUserBountiesRequest defines the QueryUserBountiesRequest message.
 * @name QueryUserBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesRequest
 */
export const QueryUserBountiesRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesRequest",
  encode(message: QueryUserBountiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserBountiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserBountiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserBountiesRequest>): QueryUserBountiesRequest {
    const message = createBaseQueryUserBountiesRequest();
    message.user = object.user ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserBountiesRequestAmino): QueryUserBountiesRequest {
    const message = createBaseQueryUserBountiesRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserBountiesRequest): QueryUserBountiesRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserBountiesRequestAminoMsg): QueryUserBountiesRequest {
    return QueryUserBountiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserBountiesRequestProtoMsg): QueryUserBountiesRequest {
    return QueryUserBountiesRequest.decode(message.value);
  },
  toProto(message: QueryUserBountiesRequest): Uint8Array {
    return QueryUserBountiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserBountiesRequest): QueryUserBountiesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserBountiesRequest",
      value: QueryUserBountiesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserBountiesResponse(): QueryUserBountiesResponse {
  return {
    bountyId: BigInt(0),
    threadId: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryUserBountiesResponse defines the QueryUserBountiesResponse message.
 * @name QueryUserBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesResponse
 */
export const QueryUserBountiesResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesResponse",
  encode(message: QueryUserBountiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserBountiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserBountiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserBountiesResponse>): QueryUserBountiesResponse {
    const message = createBaseQueryUserBountiesResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserBountiesResponseAmino): QueryUserBountiesResponse {
    const message = createBaseQueryUserBountiesResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserBountiesResponse): QueryUserBountiesResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserBountiesResponseAminoMsg): QueryUserBountiesResponse {
    return QueryUserBountiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserBountiesResponseProtoMsg): QueryUserBountiesResponse {
    return QueryUserBountiesResponse.decode(message.value);
  },
  toProto(message: QueryUserBountiesResponse): Uint8Array {
    return QueryUserBountiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserBountiesResponse): QueryUserBountiesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserBountiesResponse",
      value: QueryUserBountiesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBountyExpiringSoonRequest(): QueryBountyExpiringSoonRequest {
  return {
    withinSeconds: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryBountyExpiringSoonRequest defines the QueryBountyExpiringSoonRequest message.
 * @name QueryBountyExpiringSoonRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonRequest
 */
export const QueryBountyExpiringSoonRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest",
  encode(message: QueryBountyExpiringSoonRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withinSeconds !== BigInt(0)) {
      writer.uint32(8).int64(message.withinSeconds);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyExpiringSoonRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyExpiringSoonRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withinSeconds = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyExpiringSoonRequest>): QueryBountyExpiringSoonRequest {
    const message = createBaseQueryBountyExpiringSoonRequest();
    message.withinSeconds = object.withinSeconds !== undefined && object.withinSeconds !== null ? BigInt(object.withinSeconds.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBountyExpiringSoonRequestAmino): QueryBountyExpiringSoonRequest {
    const message = createBaseQueryBountyExpiringSoonRequest();
    if (object.within_seconds !== undefined && object.within_seconds !== null) {
      message.withinSeconds = BigInt(object.within_seconds);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBountyExpiringSoonRequest): QueryBountyExpiringSoonRequestAmino {
    const obj: any = {};
    obj.within_seconds = message.withinSeconds !== BigInt(0) ? message.withinSeconds?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyExpiringSoonRequestAminoMsg): QueryBountyExpiringSoonRequest {
    return QueryBountyExpiringSoonRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyExpiringSoonRequestProtoMsg): QueryBountyExpiringSoonRequest {
    return QueryBountyExpiringSoonRequest.decode(message.value);
  },
  toProto(message: QueryBountyExpiringSoonRequest): Uint8Array {
    return QueryBountyExpiringSoonRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyExpiringSoonRequest): QueryBountyExpiringSoonRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest",
      value: QueryBountyExpiringSoonRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBountyExpiringSoonResponse(): QueryBountyExpiringSoonResponse {
  return {
    bountyId: BigInt(0),
    threadId: BigInt(0),
    expiresAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryBountyExpiringSoonResponse defines the QueryBountyExpiringSoonResponse message.
 * @name QueryBountyExpiringSoonResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonResponse
 */
export const QueryBountyExpiringSoonResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse",
  encode(message: QueryBountyExpiringSoonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyExpiringSoonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyExpiringSoonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.expiresAt = reader.int64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyExpiringSoonResponse>): QueryBountyExpiringSoonResponse {
    const message = createBaseQueryBountyExpiringSoonResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBountyExpiringSoonResponseAmino): QueryBountyExpiringSoonResponse {
    const message = createBaseQueryBountyExpiringSoonResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBountyExpiringSoonResponse): QueryBountyExpiringSoonResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyExpiringSoonResponseAminoMsg): QueryBountyExpiringSoonResponse {
    return QueryBountyExpiringSoonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyExpiringSoonResponseProtoMsg): QueryBountyExpiringSoonResponse {
    return QueryBountyExpiringSoonResponse.decode(message.value);
  },
  toProto(message: QueryBountyExpiringSoonResponse): Uint8Array {
    return QueryBountyExpiringSoonResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyExpiringSoonResponse): QueryBountyExpiringSoonResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse",
      value: QueryBountyExpiringSoonResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetByTagRequest(): QueryTagBudgetByTagRequest {
  return {
    tag: ""
  };
}
/**
 * QueryTagBudgetByTagRequest defines the QueryTagBudgetByTagRequest message.
 * @name QueryTagBudgetByTagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetByTagRequest
 */
export const QueryTagBudgetByTagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetByTagRequest",
  encode(message: QueryTagBudgetByTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetByTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetByTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetByTagRequest>): QueryTagBudgetByTagRequest {
    const message = createBaseQueryTagBudgetByTagRequest();
    message.tag = object.tag ?? "";
    return message;
  },
  fromAmino(object: QueryTagBudgetByTagRequestAmino): QueryTagBudgetByTagRequest {
    const message = createBaseQueryTagBudgetByTagRequest();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    return message;
  },
  toAmino(message: QueryTagBudgetByTagRequest): QueryTagBudgetByTagRequestAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetByTagRequestAminoMsg): QueryTagBudgetByTagRequest {
    return QueryTagBudgetByTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetByTagRequestProtoMsg): QueryTagBudgetByTagRequest {
    return QueryTagBudgetByTagRequest.decode(message.value);
  },
  toProto(message: QueryTagBudgetByTagRequest): Uint8Array {
    return QueryTagBudgetByTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetByTagRequest): QueryTagBudgetByTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagBudgetByTagRequest",
      value: QueryTagBudgetByTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetByTagResponse(): QueryTagBudgetByTagResponse {
  return {
    budgetId: BigInt(0),
    poolBalance: "",
    active: false
  };
}
/**
 * QueryTagBudgetByTagResponse defines the QueryTagBudgetByTagResponse message.
 * @name QueryTagBudgetByTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetByTagResponse
 */
export const QueryTagBudgetByTagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetByTagResponse",
  encode(message: QueryTagBudgetByTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.poolBalance !== "") {
      writer.uint32(18).string(message.poolBalance);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetByTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetByTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.poolBalance = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetByTagResponse>): QueryTagBudgetByTagResponse {
    const message = createBaseQueryTagBudgetByTagResponse();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.poolBalance = object.poolBalance ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: QueryTagBudgetByTagResponseAmino): QueryTagBudgetByTagResponse {
    const message = createBaseQueryTagBudgetByTagResponse();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.pool_balance !== undefined && object.pool_balance !== null) {
      message.poolBalance = object.pool_balance;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: QueryTagBudgetByTagResponse): QueryTagBudgetByTagResponseAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.pool_balance = message.poolBalance === "" ? undefined : message.poolBalance;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetByTagResponseAminoMsg): QueryTagBudgetByTagResponse {
    return QueryTagBudgetByTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetByTagResponseProtoMsg): QueryTagBudgetByTagResponse {
    return QueryTagBudgetByTagResponse.decode(message.value);
  },
  toProto(message: QueryTagBudgetByTagResponse): Uint8Array {
    return QueryTagBudgetByTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetByTagResponse): QueryTagBudgetByTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagBudgetByTagResponse",
      value: QueryTagBudgetByTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetsRequest(): QueryTagBudgetsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTagBudgetsRequest defines the QueryTagBudgetsRequest message.
 * @name QueryTagBudgetsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetsRequest
 */
export const QueryTagBudgetsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetsRequest",
  encode(message: QueryTagBudgetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetsRequest>): QueryTagBudgetsRequest {
    const message = createBaseQueryTagBudgetsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetsRequestAmino): QueryTagBudgetsRequest {
    const message = createBaseQueryTagBudgetsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetsRequest): QueryTagBudgetsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetsRequestAminoMsg): QueryTagBudgetsRequest {
    return QueryTagBudgetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetsRequestProtoMsg): QueryTagBudgetsRequest {
    return QueryTagBudgetsRequest.decode(message.value);
  },
  toProto(message: QueryTagBudgetsRequest): Uint8Array {
    return QueryTagBudgetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetsRequest): QueryTagBudgetsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagBudgetsRequest",
      value: QueryTagBudgetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetsResponse(): QueryTagBudgetsResponse {
  return {
    budgetId: BigInt(0),
    tag: "",
    poolBalance: "",
    pagination: undefined
  };
}
/**
 * QueryTagBudgetsResponse defines the QueryTagBudgetsResponse message.
 * @name QueryTagBudgetsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetsResponse
 */
export const QueryTagBudgetsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetsResponse",
  encode(message: QueryTagBudgetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.poolBalance !== "") {
      writer.uint32(26).string(message.poolBalance);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.poolBalance = reader.string();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetsResponse>): QueryTagBudgetsResponse {
    const message = createBaseQueryTagBudgetsResponse();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.tag = object.tag ?? "";
    message.poolBalance = object.poolBalance ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetsResponseAmino): QueryTagBudgetsResponse {
    const message = createBaseQueryTagBudgetsResponse();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.pool_balance !== undefined && object.pool_balance !== null) {
      message.poolBalance = object.pool_balance;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetsResponse): QueryTagBudgetsResponseAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.pool_balance = message.poolBalance === "" ? undefined : message.poolBalance;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetsResponseAminoMsg): QueryTagBudgetsResponse {
    return QueryTagBudgetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetsResponseProtoMsg): QueryTagBudgetsResponse {
    return QueryTagBudgetsResponse.decode(message.value);
  },
  toProto(message: QueryTagBudgetsResponse): Uint8Array {
    return QueryTagBudgetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetsResponse): QueryTagBudgetsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagBudgetsResponse",
      value: QueryTagBudgetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetAwardsRequest(): QueryTagBudgetAwardsRequest {
  return {
    budgetId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTagBudgetAwardsRequest defines the QueryTagBudgetAwardsRequest message.
 * @name QueryTagBudgetAwardsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetAwardsRequest
 */
export const QueryTagBudgetAwardsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetAwardsRequest",
  encode(message: QueryTagBudgetAwardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetAwardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetAwardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetAwardsRequest>): QueryTagBudgetAwardsRequest {
    const message = createBaseQueryTagBudgetAwardsRequest();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetAwardsRequestAmino): QueryTagBudgetAwardsRequest {
    const message = createBaseQueryTagBudgetAwardsRequest();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetAwardsRequest): QueryTagBudgetAwardsRequestAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetAwardsRequestAminoMsg): QueryTagBudgetAwardsRequest {
    return QueryTagBudgetAwardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetAwardsRequestProtoMsg): QueryTagBudgetAwardsRequest {
    return QueryTagBudgetAwardsRequest.decode(message.value);
  },
  toProto(message: QueryTagBudgetAwardsRequest): Uint8Array {
    return QueryTagBudgetAwardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetAwardsRequest): QueryTagBudgetAwardsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagBudgetAwardsRequest",
      value: QueryTagBudgetAwardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetAwardsResponse(): QueryTagBudgetAwardsResponse {
  return {
    postId: BigInt(0),
    recipient: "",
    amount: "",
    pagination: undefined
  };
}
/**
 * QueryTagBudgetAwardsResponse defines the QueryTagBudgetAwardsResponse message.
 * @name QueryTagBudgetAwardsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTagBudgetAwardsResponse
 */
export const QueryTagBudgetAwardsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTagBudgetAwardsResponse",
  encode(message: QueryTagBudgetAwardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetAwardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetAwardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetAwardsResponse>): QueryTagBudgetAwardsResponse {
    const message = createBaseQueryTagBudgetAwardsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetAwardsResponseAmino): QueryTagBudgetAwardsResponse {
    const message = createBaseQueryTagBudgetAwardsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetAwardsResponse): QueryTagBudgetAwardsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetAwardsResponseAminoMsg): QueryTagBudgetAwardsResponse {
    return QueryTagBudgetAwardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetAwardsResponseProtoMsg): QueryTagBudgetAwardsResponse {
    return QueryTagBudgetAwardsResponse.decode(message.value);
  },
  toProto(message: QueryTagBudgetAwardsResponse): Uint8Array {
    return QueryTagBudgetAwardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetAwardsResponse): QueryTagBudgetAwardsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTagBudgetAwardsResponse",
      value: QueryTagBudgetAwardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPostFlagsRequest(): QueryPostFlagsRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryPostFlagsRequest defines the QueryPostFlagsRequest message.
 * @name QueryPostFlagsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsRequest
 */
export const QueryPostFlagsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsRequest",
  encode(message: QueryPostFlagsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostFlagsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostFlagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPostFlagsRequest>): QueryPostFlagsRequest {
    const message = createBaseQueryPostFlagsRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPostFlagsRequestAmino): QueryPostFlagsRequest {
    const message = createBaseQueryPostFlagsRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryPostFlagsRequest): QueryPostFlagsRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostFlagsRequestAminoMsg): QueryPostFlagsRequest {
    return QueryPostFlagsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostFlagsRequestProtoMsg): QueryPostFlagsRequest {
    return QueryPostFlagsRequest.decode(message.value);
  },
  toProto(message: QueryPostFlagsRequest): Uint8Array {
    return QueryPostFlagsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostFlagsRequest): QueryPostFlagsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostFlagsRequest",
      value: QueryPostFlagsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPostFlagsResponse(): QueryPostFlagsResponse {
  return {
    totalWeight: "",
    inReviewQueue: false,
    flaggerCount: BigInt(0)
  };
}
/**
 * QueryPostFlagsResponse defines the QueryPostFlagsResponse message.
 * @name QueryPostFlagsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsResponse
 */
export const QueryPostFlagsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsResponse",
  encode(message: QueryPostFlagsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    if (message.inReviewQueue === true) {
      writer.uint32(16).bool(message.inReviewQueue);
    }
    if (message.flaggerCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.flaggerCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostFlagsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostFlagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.inReviewQueue = reader.bool();
          break;
        case 3:
          message.flaggerCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPostFlagsResponse>): QueryPostFlagsResponse {
    const message = createBaseQueryPostFlagsResponse();
    message.totalWeight = object.totalWeight ?? "";
    message.inReviewQueue = object.inReviewQueue ?? false;
    message.flaggerCount = object.flaggerCount !== undefined && object.flaggerCount !== null ? BigInt(object.flaggerCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPostFlagsResponseAmino): QueryPostFlagsResponse {
    const message = createBaseQueryPostFlagsResponse();
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.in_review_queue !== undefined && object.in_review_queue !== null) {
      message.inReviewQueue = object.in_review_queue;
    }
    if (object.flagger_count !== undefined && object.flagger_count !== null) {
      message.flaggerCount = BigInt(object.flagger_count);
    }
    return message;
  },
  toAmino(message: QueryPostFlagsResponse): QueryPostFlagsResponseAmino {
    const obj: any = {};
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.in_review_queue = message.inReviewQueue === false ? undefined : message.inReviewQueue;
    obj.flagger_count = message.flaggerCount !== BigInt(0) ? message.flaggerCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostFlagsResponseAminoMsg): QueryPostFlagsResponse {
    return QueryPostFlagsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostFlagsResponseProtoMsg): QueryPostFlagsResponse {
    return QueryPostFlagsResponse.decode(message.value);
  },
  toProto(message: QueryPostFlagsResponse): Uint8Array {
    return QueryPostFlagsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostFlagsResponse): QueryPostFlagsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostFlagsResponse",
      value: QueryPostFlagsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFlagReviewQueueRequest(): QueryFlagReviewQueueRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryFlagReviewQueueRequest defines the QueryFlagReviewQueueRequest message.
 * @name QueryFlagReviewQueueRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueRequest
 */
export const QueryFlagReviewQueueRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest",
  encode(message: QueryFlagReviewQueueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagReviewQueueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagReviewQueueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFlagReviewQueueRequest>): QueryFlagReviewQueueRequest {
    const message = createBaseQueryFlagReviewQueueRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlagReviewQueueRequestAmino): QueryFlagReviewQueueRequest {
    const message = createBaseQueryFlagReviewQueueRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlagReviewQueueRequest): QueryFlagReviewQueueRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlagReviewQueueRequestAminoMsg): QueryFlagReviewQueueRequest {
    return QueryFlagReviewQueueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagReviewQueueRequestProtoMsg): QueryFlagReviewQueueRequest {
    return QueryFlagReviewQueueRequest.decode(message.value);
  },
  toProto(message: QueryFlagReviewQueueRequest): Uint8Array {
    return QueryFlagReviewQueueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagReviewQueueRequest): QueryFlagReviewQueueRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest",
      value: QueryFlagReviewQueueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlagReviewQueueResponse(): QueryFlagReviewQueueResponse {
  return {
    postId: BigInt(0),
    totalWeight: "",
    pagination: undefined
  };
}
/**
 * QueryFlagReviewQueueResponse defines the QueryFlagReviewQueueResponse message.
 * @name QueryFlagReviewQueueResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueResponse
 */
export const QueryFlagReviewQueueResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse",
  encode(message: QueryFlagReviewQueueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.totalWeight !== "") {
      writer.uint32(18).string(message.totalWeight);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagReviewQueueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagReviewQueueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.totalWeight = reader.string();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFlagReviewQueueResponse>): QueryFlagReviewQueueResponse {
    const message = createBaseQueryFlagReviewQueueResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.totalWeight = object.totalWeight ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlagReviewQueueResponseAmino): QueryFlagReviewQueueResponse {
    const message = createBaseQueryFlagReviewQueueResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlagReviewQueueResponse): QueryFlagReviewQueueResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlagReviewQueueResponseAminoMsg): QueryFlagReviewQueueResponse {
    return QueryFlagReviewQueueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagReviewQueueResponseProtoMsg): QueryFlagReviewQueueResponse {
    return QueryFlagReviewQueueResponse.decode(message.value);
  },
  toProto(message: QueryFlagReviewQueueResponse): Uint8Array {
    return QueryFlagReviewQueueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagReviewQueueResponse): QueryFlagReviewQueueResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse",
      value: QueryFlagReviewQueueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGovActionAppealsRequest(): QueryGovActionAppealsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryGovActionAppealsRequest defines the QueryGovActionAppealsRequest message.
 * @name QueryGovActionAppealsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGovActionAppealsRequest
 */
export const QueryGovActionAppealsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGovActionAppealsRequest",
  encode(message: QueryGovActionAppealsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovActionAppealsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovActionAppealsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGovActionAppealsRequest>): QueryGovActionAppealsRequest {
    const message = createBaseQueryGovActionAppealsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGovActionAppealsRequestAmino): QueryGovActionAppealsRequest {
    const message = createBaseQueryGovActionAppealsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovActionAppealsRequest): QueryGovActionAppealsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovActionAppealsRequestAminoMsg): QueryGovActionAppealsRequest {
    return QueryGovActionAppealsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovActionAppealsRequestProtoMsg): QueryGovActionAppealsRequest {
    return QueryGovActionAppealsRequest.decode(message.value);
  },
  toProto(message: QueryGovActionAppealsRequest): Uint8Array {
    return QueryGovActionAppealsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovActionAppealsRequest): QueryGovActionAppealsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGovActionAppealsRequest",
      value: QueryGovActionAppealsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGovActionAppealsResponse(): QueryGovActionAppealsResponse {
  return {
    appealId: BigInt(0),
    actionType: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGovActionAppealsResponse defines the QueryGovActionAppealsResponse message.
 * @name QueryGovActionAppealsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGovActionAppealsResponse
 */
export const QueryGovActionAppealsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGovActionAppealsResponse",
  encode(message: QueryGovActionAppealsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appealId !== BigInt(0)) {
      writer.uint32(8).uint64(message.appealId);
    }
    if (message.actionType !== BigInt(0)) {
      writer.uint32(16).uint64(message.actionType);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovActionAppealsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovActionAppealsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appealId = reader.uint64();
          break;
        case 2:
          message.actionType = reader.uint64();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGovActionAppealsResponse>): QueryGovActionAppealsResponse {
    const message = createBaseQueryGovActionAppealsResponse();
    message.appealId = object.appealId !== undefined && object.appealId !== null ? BigInt(object.appealId.toString()) : BigInt(0);
    message.actionType = object.actionType !== undefined && object.actionType !== null ? BigInt(object.actionType.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGovActionAppealsResponseAmino): QueryGovActionAppealsResponse {
    const message = createBaseQueryGovActionAppealsResponse();
    if (object.appeal_id !== undefined && object.appeal_id !== null) {
      message.appealId = BigInt(object.appeal_id);
    }
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = BigInt(object.action_type);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovActionAppealsResponse): QueryGovActionAppealsResponseAmino {
    const obj: any = {};
    obj.appeal_id = message.appealId !== BigInt(0) ? message.appealId?.toString() : undefined;
    obj.action_type = message.actionType !== BigInt(0) ? message.actionType?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovActionAppealsResponseAminoMsg): QueryGovActionAppealsResponse {
    return QueryGovActionAppealsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovActionAppealsResponseProtoMsg): QueryGovActionAppealsResponse {
    return QueryGovActionAppealsResponse.decode(message.value);
  },
  toProto(message: QueryGovActionAppealsResponse): Uint8Array {
    return QueryGovActionAppealsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovActionAppealsResponse): QueryGovActionAppealsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGovActionAppealsResponse",
      value: QueryGovActionAppealsResponse.encode(message).finish()
    };
  }
};