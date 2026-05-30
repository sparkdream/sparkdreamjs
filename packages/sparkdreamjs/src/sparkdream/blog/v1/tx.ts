//@ts-nocheck
import { Params, ParamsAmino, BlogOperationalParams, BlogOperationalParamsAmino } from "./params";
import { ContentType } from "../../common/v1/content_type";
import { ReactionType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/blog/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Commons Operations Committee member.
   */
  authority: string;
  /**
   * operational_params defines the operational parameters to update.
   * NOTE: All operational parameters must be supplied.
   */
  operationalParams: BlogOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Commons Operations Committee member.
   */
  authority?: string;
  /**
   * operational_params defines the operational parameters to update.
   * NOTE: All operational parameters must be supplied.
   */
  operational_params: BlogOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/blog/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePost
 */
export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
  contentType: ContentType;
  /**
   * Minimum trust level to reply AND react (-1 open, 0-4, default: 0)
   */
  minReplyTrustLevel: number;
  /**
   * Optional DREAM amount to lock as author bond
   */
  authorBond?: string;
  /**
   * Optional: reference an x/rep initiative (0 = none, immutable)
   */
  initiativeId: bigint;
  /**
   * Tags referenced against the shared x/rep tag registry
   */
  tags: string[];
}
export interface MsgCreatePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePost";
  value: Uint8Array;
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePost
 */
export interface MsgCreatePostAmino {
  creator?: string;
  title?: string;
  body?: string;
  content_type?: ContentType;
  /**
   * Minimum trust level to reply AND react (-1 open, 0-4, default: 0)
   */
  min_reply_trust_level?: number;
  /**
   * Optional DREAM amount to lock as author bond
   */
  author_bond?: string;
  /**
   * Optional: reference an x/rep initiative (0 = none, immutable)
   */
  initiative_id?: string;
  /**
   * Tags referenced against the shared x/rep tag registry
   */
  tags?: string[];
}
export interface MsgCreatePostAminoMsg {
  type: "sparkdream/x/blog/MsgCreatePost";
  value: MsgCreatePostAmino;
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePostResponse
 */
export interface MsgCreatePostResponse {
  id: bigint;
}
export interface MsgCreatePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePostResponse";
  value: Uint8Array;
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePostResponse
 */
export interface MsgCreatePostResponseAmino {
  id?: string;
}
export interface MsgCreatePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgCreatePostResponse";
  value: MsgCreatePostResponseAmino;
}
/**
 * MsgUpdatePost defines the MsgUpdatePost message.
 * @name MsgUpdatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePost
 */
export interface MsgUpdatePost {
  creator: string;
  title: string;
  body: string;
  id: bigint;
  contentType: ContentType;
  repliesEnabled: boolean;
  /**
   * Minimum trust level to reply AND react (-1 open, 0-4)
   */
  minReplyTrustLevel: number;
  /**
   * Tags referenced against the shared x/rep tag registry (replaces existing tags)
   */
  tags: string[];
}
export interface MsgUpdatePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePost";
  value: Uint8Array;
}
/**
 * MsgUpdatePost defines the MsgUpdatePost message.
 * @name MsgUpdatePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePost
 */
export interface MsgUpdatePostAmino {
  creator?: string;
  title?: string;
  body?: string;
  id?: string;
  content_type?: ContentType;
  replies_enabled?: boolean;
  /**
   * Minimum trust level to reply AND react (-1 open, 0-4)
   */
  min_reply_trust_level?: number;
  /**
   * Tags referenced against the shared x/rep tag registry (replaces existing tags)
   */
  tags?: string[];
}
export interface MsgUpdatePostAminoMsg {
  type: "sparkdream/x/blog/MsgUpdatePost";
  value: MsgUpdatePostAmino;
}
/**
 * MsgUpdatePostResponse defines the MsgUpdatePostResponse message.
 * @name MsgUpdatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePostResponse
 */
export interface MsgUpdatePostResponse {}
export interface MsgUpdatePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePostResponse";
  value: Uint8Array;
}
/**
 * MsgUpdatePostResponse defines the MsgUpdatePostResponse message.
 * @name MsgUpdatePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePostResponse
 */
export interface MsgUpdatePostResponseAmino {}
export interface MsgUpdatePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdatePostResponse";
  value: MsgUpdatePostResponseAmino;
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePost
 */
export interface MsgDeletePost {
  creator: string;
  id: bigint;
}
export interface MsgDeletePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePost";
  value: Uint8Array;
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePost
 */
export interface MsgDeletePostAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeletePostAminoMsg {
  type: "sparkdream/x/blog/MsgDeletePost";
  value: MsgDeletePostAmino;
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePostResponse
 */
export interface MsgDeletePostResponse {}
export interface MsgDeletePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePostResponse";
  value: Uint8Array;
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePostResponse
 */
export interface MsgDeletePostResponseAmino {}
export interface MsgDeletePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgDeletePostResponse";
  value: MsgDeletePostResponseAmino;
}
/**
 * MsgHidePost defines the MsgHidePost message.
 * @name MsgHidePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHidePost
 */
export interface MsgHidePost {
  creator: string;
  id: bigint;
}
export interface MsgHidePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgHidePost";
  value: Uint8Array;
}
/**
 * MsgHidePost defines the MsgHidePost message.
 * @name MsgHidePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHidePost
 */
export interface MsgHidePostAmino {
  creator?: string;
  id?: string;
}
export interface MsgHidePostAminoMsg {
  type: "sparkdream/x/blog/MsgHidePost";
  value: MsgHidePostAmino;
}
/**
 * MsgHidePostResponse defines the MsgHidePostResponse message.
 * @name MsgHidePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHidePostResponse
 */
export interface MsgHidePostResponse {}
export interface MsgHidePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgHidePostResponse";
  value: Uint8Array;
}
/**
 * MsgHidePostResponse defines the MsgHidePostResponse message.
 * @name MsgHidePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHidePostResponse
 */
export interface MsgHidePostResponseAmino {}
export interface MsgHidePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgHidePostResponse";
  value: MsgHidePostResponseAmino;
}
/**
 * MsgUnhidePost defines the MsgUnhidePost message.
 * @name MsgUnhidePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhidePost
 */
export interface MsgUnhidePost {
  creator: string;
  id: bigint;
}
export interface MsgUnhidePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnhidePost";
  value: Uint8Array;
}
/**
 * MsgUnhidePost defines the MsgUnhidePost message.
 * @name MsgUnhidePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhidePost
 */
export interface MsgUnhidePostAmino {
  creator?: string;
  id?: string;
}
export interface MsgUnhidePostAminoMsg {
  type: "sparkdream/x/blog/MsgUnhidePost";
  value: MsgUnhidePostAmino;
}
/**
 * MsgUnhidePostResponse defines the MsgUnhidePostResponse message.
 * @name MsgUnhidePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhidePostResponse
 */
export interface MsgUnhidePostResponse {}
export interface MsgUnhidePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnhidePostResponse";
  value: Uint8Array;
}
/**
 * MsgUnhidePostResponse defines the MsgUnhidePostResponse message.
 * @name MsgUnhidePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhidePostResponse
 */
export interface MsgUnhidePostResponseAmino {}
export interface MsgUnhidePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUnhidePostResponse";
  value: MsgUnhidePostResponseAmino;
}
/**
 * MsgCreateReply defines the MsgCreateReply message.
 * @name MsgCreateReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreateReply
 */
export interface MsgCreateReply {
  creator: string;
  postId: bigint;
  parentReplyId: bigint;
  body: string;
  contentType: ContentType;
  /**
   * Optional DREAM amount to lock as author bond
   */
  authorBond?: string;
}
export interface MsgCreateReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgCreateReply";
  value: Uint8Array;
}
/**
 * MsgCreateReply defines the MsgCreateReply message.
 * @name MsgCreateReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreateReply
 */
export interface MsgCreateReplyAmino {
  creator?: string;
  post_id?: string;
  parent_reply_id?: string;
  body?: string;
  content_type?: ContentType;
  /**
   * Optional DREAM amount to lock as author bond
   */
  author_bond?: string;
}
export interface MsgCreateReplyAminoMsg {
  type: "sparkdream/x/blog/MsgCreateReply";
  value: MsgCreateReplyAmino;
}
/**
 * MsgCreateReplyResponse defines the MsgCreateReplyResponse message.
 * @name MsgCreateReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreateReplyResponse
 */
export interface MsgCreateReplyResponse {
  id: bigint;
}
export interface MsgCreateReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgCreateReplyResponse";
  value: Uint8Array;
}
/**
 * MsgCreateReplyResponse defines the MsgCreateReplyResponse message.
 * @name MsgCreateReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreateReplyResponse
 */
export interface MsgCreateReplyResponseAmino {
  id?: string;
}
export interface MsgCreateReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgCreateReplyResponse";
  value: MsgCreateReplyResponseAmino;
}
/**
 * MsgUpdateReply defines the MsgUpdateReply message.
 * @name MsgUpdateReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateReply
 */
export interface MsgUpdateReply {
  creator: string;
  id: bigint;
  body: string;
  contentType: ContentType;
}
export interface MsgUpdateReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateReply";
  value: Uint8Array;
}
/**
 * MsgUpdateReply defines the MsgUpdateReply message.
 * @name MsgUpdateReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateReply
 */
export interface MsgUpdateReplyAmino {
  creator?: string;
  id?: string;
  body?: string;
  content_type?: ContentType;
}
export interface MsgUpdateReplyAminoMsg {
  type: "sparkdream/x/blog/MsgUpdateReply";
  value: MsgUpdateReplyAmino;
}
/**
 * MsgUpdateReplyResponse defines the MsgUpdateReplyResponse message.
 * @name MsgUpdateReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateReplyResponse
 */
export interface MsgUpdateReplyResponse {}
export interface MsgUpdateReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateReplyResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateReplyResponse defines the MsgUpdateReplyResponse message.
 * @name MsgUpdateReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateReplyResponse
 */
export interface MsgUpdateReplyResponseAmino {}
export interface MsgUpdateReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdateReplyResponse";
  value: MsgUpdateReplyResponseAmino;
}
/**
 * MsgDeleteReply defines the MsgDeleteReply message.
 * @name MsgDeleteReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeleteReply
 */
export interface MsgDeleteReply {
  creator: string;
  id: bigint;
}
export interface MsgDeleteReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgDeleteReply";
  value: Uint8Array;
}
/**
 * MsgDeleteReply defines the MsgDeleteReply message.
 * @name MsgDeleteReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeleteReply
 */
export interface MsgDeleteReplyAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteReplyAminoMsg {
  type: "sparkdream/x/blog/MsgDeleteReply";
  value: MsgDeleteReplyAmino;
}
/**
 * MsgDeleteReplyResponse defines the MsgDeleteReplyResponse message.
 * @name MsgDeleteReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeleteReplyResponse
 */
export interface MsgDeleteReplyResponse {}
export interface MsgDeleteReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgDeleteReplyResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteReplyResponse defines the MsgDeleteReplyResponse message.
 * @name MsgDeleteReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeleteReplyResponse
 */
export interface MsgDeleteReplyResponseAmino {}
export interface MsgDeleteReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgDeleteReplyResponse";
  value: MsgDeleteReplyResponseAmino;
}
/**
 * MsgHideReply defines the MsgHideReply message.
 * @name MsgHideReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHideReply
 */
export interface MsgHideReply {
  creator: string;
  id: bigint;
}
export interface MsgHideReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgHideReply";
  value: Uint8Array;
}
/**
 * MsgHideReply defines the MsgHideReply message.
 * @name MsgHideReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHideReply
 */
export interface MsgHideReplyAmino {
  creator?: string;
  id?: string;
}
export interface MsgHideReplyAminoMsg {
  type: "sparkdream/x/blog/MsgHideReply";
  value: MsgHideReplyAmino;
}
/**
 * MsgHideReplyResponse defines the MsgHideReplyResponse message.
 * @name MsgHideReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHideReplyResponse
 */
export interface MsgHideReplyResponse {}
export interface MsgHideReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgHideReplyResponse";
  value: Uint8Array;
}
/**
 * MsgHideReplyResponse defines the MsgHideReplyResponse message.
 * @name MsgHideReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHideReplyResponse
 */
export interface MsgHideReplyResponseAmino {}
export interface MsgHideReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgHideReplyResponse";
  value: MsgHideReplyResponseAmino;
}
/**
 * MsgUnhideReply defines the MsgUnhideReply message.
 * @name MsgUnhideReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhideReply
 */
export interface MsgUnhideReply {
  creator: string;
  id: bigint;
}
export interface MsgUnhideReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnhideReply";
  value: Uint8Array;
}
/**
 * MsgUnhideReply defines the MsgUnhideReply message.
 * @name MsgUnhideReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhideReply
 */
export interface MsgUnhideReplyAmino {
  creator?: string;
  id?: string;
}
export interface MsgUnhideReplyAminoMsg {
  type: "sparkdream/x/blog/MsgUnhideReply";
  value: MsgUnhideReplyAmino;
}
/**
 * MsgUnhideReplyResponse defines the MsgUnhideReplyResponse message.
 * @name MsgUnhideReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhideReplyResponse
 */
export interface MsgUnhideReplyResponse {}
export interface MsgUnhideReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnhideReplyResponse";
  value: Uint8Array;
}
/**
 * MsgUnhideReplyResponse defines the MsgUnhideReplyResponse message.
 * @name MsgUnhideReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhideReplyResponse
 */
export interface MsgUnhideReplyResponseAmino {}
export interface MsgUnhideReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUnhideReplyResponse";
  value: MsgUnhideReplyResponseAmino;
}
/**
 * MsgReact defines the MsgReact message.
 * @name MsgReact
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgReact
 */
export interface MsgReact {
  creator: string;
  postId: bigint;
  replyId: bigint;
  /**
   * Uses enum instead of uint64
   */
  reactionType: ReactionType;
}
export interface MsgReactProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgReact";
  value: Uint8Array;
}
/**
 * MsgReact defines the MsgReact message.
 * @name MsgReactAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgReact
 */
export interface MsgReactAmino {
  creator?: string;
  post_id?: string;
  reply_id?: string;
  /**
   * Uses enum instead of uint64
   */
  reaction_type?: ReactionType;
}
export interface MsgReactAminoMsg {
  type: "sparkdream/x/blog/MsgReact";
  value: MsgReactAmino;
}
/**
 * MsgReactResponse defines the MsgReactResponse message.
 * @name MsgReactResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgReactResponse
 */
export interface MsgReactResponse {}
export interface MsgReactResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgReactResponse";
  value: Uint8Array;
}
/**
 * MsgReactResponse defines the MsgReactResponse message.
 * @name MsgReactResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgReactResponse
 */
export interface MsgReactResponseAmino {}
export interface MsgReactResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgReactResponse";
  value: MsgReactResponseAmino;
}
/**
 * MsgRemoveReaction defines the MsgRemoveReaction message.
 * @name MsgRemoveReaction
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgRemoveReaction
 */
export interface MsgRemoveReaction {
  creator: string;
  postId: bigint;
  replyId: bigint;
}
export interface MsgRemoveReactionProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgRemoveReaction";
  value: Uint8Array;
}
/**
 * MsgRemoveReaction defines the MsgRemoveReaction message.
 * @name MsgRemoveReactionAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgRemoveReaction
 */
export interface MsgRemoveReactionAmino {
  creator?: string;
  post_id?: string;
  reply_id?: string;
}
export interface MsgRemoveReactionAminoMsg {
  type: "sparkdream/x/blog/MsgRemoveReaction";
  value: MsgRemoveReactionAmino;
}
/**
 * MsgRemoveReactionResponse defines the MsgRemoveReactionResponse message.
 * @name MsgRemoveReactionResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgRemoveReactionResponse
 */
export interface MsgRemoveReactionResponse {}
export interface MsgRemoveReactionResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgRemoveReactionResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveReactionResponse defines the MsgRemoveReactionResponse message.
 * @name MsgRemoveReactionResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgRemoveReactionResponse
 */
export interface MsgRemoveReactionResponseAmino {}
export interface MsgRemoveReactionResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgRemoveReactionResponse";
  value: MsgRemoveReactionResponseAmino;
}
/**
 * MsgMakePostPermanent promotes an ephemeral post to permanent. No-op if
 * the post is already permanent.
 * @name MsgMakePostPermanent
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakePostPermanent
 */
export interface MsgMakePostPermanent {
  creator: string;
  id: bigint;
}
export interface MsgMakePostPermanentProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanent";
  value: Uint8Array;
}
/**
 * MsgMakePostPermanent promotes an ephemeral post to permanent. No-op if
 * the post is already permanent.
 * @name MsgMakePostPermanentAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakePostPermanent
 */
export interface MsgMakePostPermanentAmino {
  creator?: string;
  id?: string;
}
export interface MsgMakePostPermanentAminoMsg {
  type: "sparkdream/x/blog/MsgMakePostPermanent";
  value: MsgMakePostPermanentAmino;
}
/**
 * MsgMakePostPermanentResponse defines the response.
 * @name MsgMakePostPermanentResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakePostPermanentResponse
 */
export interface MsgMakePostPermanentResponse {}
export interface MsgMakePostPermanentResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanentResponse";
  value: Uint8Array;
}
/**
 * MsgMakePostPermanentResponse defines the response.
 * @name MsgMakePostPermanentResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakePostPermanentResponse
 */
export interface MsgMakePostPermanentResponseAmino {}
export interface MsgMakePostPermanentResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgMakePostPermanentResponse";
  value: MsgMakePostPermanentResponseAmino;
}
/**
 * MsgPinPost sets the pinned marker on a permanent post (display-only). The
 * post must already be permanent; promote ephemeral content with
 * MsgMakePostPermanent first.
 * @name MsgPinPost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinPost
 */
export interface MsgPinPost {
  creator: string;
  id: bigint;
}
export interface MsgPinPostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgPinPost";
  value: Uint8Array;
}
/**
 * MsgPinPost sets the pinned marker on a permanent post (display-only). The
 * post must already be permanent; promote ephemeral content with
 * MsgMakePostPermanent first.
 * @name MsgPinPostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinPost
 */
export interface MsgPinPostAmino {
  creator?: string;
  id?: string;
}
export interface MsgPinPostAminoMsg {
  type: "sparkdream/x/blog/MsgPinPost";
  value: MsgPinPostAmino;
}
/**
 * MsgPinPostResponse defines the MsgPinPostResponse message.
 * @name MsgPinPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinPostResponse
 */
export interface MsgPinPostResponse {}
export interface MsgPinPostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgPinPostResponse";
  value: Uint8Array;
}
/**
 * MsgPinPostResponse defines the MsgPinPostResponse message.
 * @name MsgPinPostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinPostResponse
 */
export interface MsgPinPostResponseAmino {}
export interface MsgPinPostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgPinPostResponse";
  value: MsgPinPostResponseAmino;
}
/**
 * MsgMakeReplyPermanent promotes an ephemeral reply to permanent.
 * @name MsgMakeReplyPermanent
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakeReplyPermanent
 */
export interface MsgMakeReplyPermanent {
  creator: string;
  id: bigint;
}
export interface MsgMakeReplyPermanentProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanent";
  value: Uint8Array;
}
/**
 * MsgMakeReplyPermanent promotes an ephemeral reply to permanent.
 * @name MsgMakeReplyPermanentAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakeReplyPermanent
 */
export interface MsgMakeReplyPermanentAmino {
  creator?: string;
  id?: string;
}
export interface MsgMakeReplyPermanentAminoMsg {
  type: "sparkdream/x/blog/MsgMakeReplyPermanent";
  value: MsgMakeReplyPermanentAmino;
}
/**
 * MsgMakeReplyPermanentResponse defines the response.
 * @name MsgMakeReplyPermanentResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakeReplyPermanentResponse
 */
export interface MsgMakeReplyPermanentResponse {}
export interface MsgMakeReplyPermanentResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanentResponse";
  value: Uint8Array;
}
/**
 * MsgMakeReplyPermanentResponse defines the response.
 * @name MsgMakeReplyPermanentResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakeReplyPermanentResponse
 */
export interface MsgMakeReplyPermanentResponseAmino {}
export interface MsgMakeReplyPermanentResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgMakeReplyPermanentResponse";
  value: MsgMakeReplyPermanentResponseAmino;
}
/**
 * MsgPinReply sets the pinned marker on a permanent reply. The reply must
 * already be permanent; promote ephemeral content with MsgMakeReplyPermanent
 * first.
 * @name MsgPinReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinReply
 */
export interface MsgPinReply {
  creator: string;
  id: bigint;
}
export interface MsgPinReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgPinReply";
  value: Uint8Array;
}
/**
 * MsgPinReply sets the pinned marker on a permanent reply. The reply must
 * already be permanent; promote ephemeral content with MsgMakeReplyPermanent
 * first.
 * @name MsgPinReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinReply
 */
export interface MsgPinReplyAmino {
  creator?: string;
  id?: string;
}
export interface MsgPinReplyAminoMsg {
  type: "sparkdream/x/blog/MsgPinReply";
  value: MsgPinReplyAmino;
}
/**
 * MsgPinReplyResponse defines the MsgPinReplyResponse message.
 * @name MsgPinReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinReplyResponse
 */
export interface MsgPinReplyResponse {}
export interface MsgPinReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgPinReplyResponse";
  value: Uint8Array;
}
/**
 * MsgPinReplyResponse defines the MsgPinReplyResponse message.
 * @name MsgPinReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinReplyResponse
 */
export interface MsgPinReplyResponseAmino {}
export interface MsgPinReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgPinReplyResponse";
  value: MsgPinReplyResponseAmino;
}
/**
 * MsgUnpinPost defines the MsgUnpinPost message.
 * @name MsgUnpinPost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinPost
 */
export interface MsgUnpinPost {
  creator: string;
  id: bigint;
}
export interface MsgUnpinPostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinPost";
  value: Uint8Array;
}
/**
 * MsgUnpinPost defines the MsgUnpinPost message.
 * @name MsgUnpinPostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinPost
 */
export interface MsgUnpinPostAmino {
  creator?: string;
  id?: string;
}
export interface MsgUnpinPostAminoMsg {
  type: "sparkdream/x/blog/MsgUnpinPost";
  value: MsgUnpinPostAmino;
}
/**
 * MsgUnpinPostResponse defines the MsgUnpinPostResponse message.
 * @name MsgUnpinPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinPostResponse
 */
export interface MsgUnpinPostResponse {}
export interface MsgUnpinPostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinPostResponse";
  value: Uint8Array;
}
/**
 * MsgUnpinPostResponse defines the MsgUnpinPostResponse message.
 * @name MsgUnpinPostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinPostResponse
 */
export interface MsgUnpinPostResponseAmino {}
export interface MsgUnpinPostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUnpinPostResponse";
  value: MsgUnpinPostResponseAmino;
}
/**
 * MsgUnpinReply defines the MsgUnpinReply message.
 * @name MsgUnpinReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinReply
 */
export interface MsgUnpinReply {
  creator: string;
  id: bigint;
}
export interface MsgUnpinReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinReply";
  value: Uint8Array;
}
/**
 * MsgUnpinReply defines the MsgUnpinReply message.
 * @name MsgUnpinReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinReply
 */
export interface MsgUnpinReplyAmino {
  creator?: string;
  id?: string;
}
export interface MsgUnpinReplyAminoMsg {
  type: "sparkdream/x/blog/MsgUnpinReply";
  value: MsgUnpinReplyAmino;
}
/**
 * MsgUnpinReplyResponse defines the MsgUnpinReplyResponse message.
 * @name MsgUnpinReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinReplyResponse
 */
export interface MsgUnpinReplyResponse {}
export interface MsgUnpinReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinReplyResponse";
  value: Uint8Array;
}
/**
 * MsgUnpinReplyResponse defines the MsgUnpinReplyResponse message.
 * @name MsgUnpinReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinReplyResponse
 */
export interface MsgUnpinReplyResponseAmino {}
export interface MsgUnpinReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUnpinReplyResponse";
  value: MsgUnpinReplyResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/blog/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: BlogOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/blog/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      BlogOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = BlogOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? BlogOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = BlogOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? BlogOperationalParams.toAmino(message.operationalParams) : BlogOperationalParams.toAmino(BlogOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    creator: "",
    title: "",
    body: "",
    contentType: 0,
    minReplyTrustLevel: 0,
    authorBond: undefined,
    initiativeId: BigInt(0),
    tags: []
  };
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePost
 */
export const MsgCreatePost = {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
  aminoType: "sparkdream/x/blog/MsgCreatePost",
  encode(message: MsgCreatePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.contentType !== 0) {
      writer.uint32(32).int32(message.contentType);
    }
    if (message.minReplyTrustLevel !== 0) {
      writer.uint32(40).int32(message.minReplyTrustLevel);
    }
    if (message.authorBond !== undefined) {
      writer.uint32(50).string(message.authorBond);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(56).uint64(message.initiativeId);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.contentType = reader.int32() as any;
          break;
        case 5:
          message.minReplyTrustLevel = reader.int32();
          break;
        case 6:
          message.authorBond = reader.string();
          break;
        case 7:
          message.initiativeId = reader.uint64();
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.contentType = object.contentType ?? 0;
    message.minReplyTrustLevel = object.minReplyTrustLevel ?? 0;
    message.authorBond = object.authorBond ?? undefined;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.tags = object.tags?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreatePostAmino): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.min_reply_trust_level !== undefined && object.min_reply_trust_level !== null) {
      message.minReplyTrustLevel = object.min_reply_trust_level;
    }
    if (object.author_bond !== undefined && object.author_bond !== null) {
      message.authorBond = object.author_bond;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    message.tags = object.tags?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreatePost): MsgCreatePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.min_reply_trust_level = message.minReplyTrustLevel === 0 ? undefined : message.minReplyTrustLevel;
    obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostAminoMsg): MsgCreatePost {
    return MsgCreatePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePost): MsgCreatePostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgCreatePost",
      value: MsgCreatePost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePostProtoMsg): MsgCreatePost {
    return MsgCreatePost.decode(message.value);
  },
  toProto(message: MsgCreatePost): Uint8Array {
    return MsgCreatePost.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePost): MsgCreatePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
      value: MsgCreatePost.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {
    id: BigInt(0)
  };
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePostResponse
 */
export const MsgCreatePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePostResponse",
  encode(message: MsgCreatePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();
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
  fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePostResponseAmino): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreatePostResponse): MsgCreatePostResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostResponseAminoMsg): MsgCreatePostResponse {
    return MsgCreatePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePostResponseProtoMsg): MsgCreatePostResponse {
    return MsgCreatePostResponse.decode(message.value);
  },
  toProto(message: MsgCreatePostResponse): Uint8Array {
    return MsgCreatePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePostResponse): MsgCreatePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgCreatePostResponse",
      value: MsgCreatePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePost(): MsgUpdatePost {
  return {
    creator: "",
    title: "",
    body: "",
    id: BigInt(0),
    contentType: 0,
    repliesEnabled: false,
    minReplyTrustLevel: 0,
    tags: []
  };
}
/**
 * MsgUpdatePost defines the MsgUpdatePost message.
 * @name MsgUpdatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePost
 */
export const MsgUpdatePost = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
  aminoType: "sparkdream/x/blog/MsgUpdatePost",
  encode(message: MsgUpdatePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.contentType !== 0) {
      writer.uint32(40).int32(message.contentType);
    }
    if (message.repliesEnabled === true) {
      writer.uint32(48).bool(message.repliesEnabled);
    }
    if (message.minReplyTrustLevel !== 0) {
      writer.uint32(56).int32(message.minReplyTrustLevel);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        case 5:
          message.contentType = reader.int32() as any;
          break;
        case 6:
          message.repliesEnabled = reader.bool();
          break;
        case 7:
          message.minReplyTrustLevel = reader.int32();
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost {
    const message = createBaseMsgUpdatePost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.contentType = object.contentType ?? 0;
    message.repliesEnabled = object.repliesEnabled ?? false;
    message.minReplyTrustLevel = object.minReplyTrustLevel ?? 0;
    message.tags = object.tags?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdatePostAmino): MsgUpdatePost {
    const message = createBaseMsgUpdatePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.replies_enabled !== undefined && object.replies_enabled !== null) {
      message.repliesEnabled = object.replies_enabled;
    }
    if (object.min_reply_trust_level !== undefined && object.min_reply_trust_level !== null) {
      message.minReplyTrustLevel = object.min_reply_trust_level;
    }
    message.tags = object.tags?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdatePost): MsgUpdatePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.replies_enabled = message.repliesEnabled === false ? undefined : message.repliesEnabled;
    obj.min_reply_trust_level = message.minReplyTrustLevel === 0 ? undefined : message.minReplyTrustLevel;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePostAminoMsg): MsgUpdatePost {
    return MsgUpdatePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdatePost): MsgUpdatePostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUpdatePost",
      value: MsgUpdatePost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdatePostProtoMsg): MsgUpdatePost {
    return MsgUpdatePost.decode(message.value);
  },
  toProto(message: MsgUpdatePost): Uint8Array {
    return MsgUpdatePost.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePost): MsgUpdatePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
      value: MsgUpdatePost.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePostResponse(): MsgUpdatePostResponse {
  return {};
}
/**
 * MsgUpdatePostResponse defines the MsgUpdatePostResponse message.
 * @name MsgUpdatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePostResponse
 */
export const MsgUpdatePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePostResponse",
  encode(_: MsgUpdatePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePostResponse();
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
  fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse {
    const message = createBaseMsgUpdatePostResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePostResponseAmino): MsgUpdatePostResponse {
    const message = createBaseMsgUpdatePostResponse();
    return message;
  },
  toAmino(_: MsgUpdatePostResponse): MsgUpdatePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePostResponseAminoMsg): MsgUpdatePostResponse {
    return MsgUpdatePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePostResponseProtoMsg): MsgUpdatePostResponse {
    return MsgUpdatePostResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePostResponse): Uint8Array {
    return MsgUpdatePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePostResponse): MsgUpdatePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdatePostResponse",
      value: MsgUpdatePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePost(): MsgDeletePost {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePost
 */
export const MsgDeletePost = {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
  aminoType: "sparkdream/x/blog/MsgDeletePost",
  encode(message: MsgDeletePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeletePostAmino): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeletePost): MsgDeletePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostAminoMsg): MsgDeletePost {
    return MsgDeletePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeletePost): MsgDeletePostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgDeletePost",
      value: MsgDeletePost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeletePostProtoMsg): MsgDeletePost {
    return MsgDeletePost.decode(message.value);
  },
  toProto(message: MsgDeletePost): Uint8Array {
    return MsgDeletePost.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePost): MsgDeletePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
      value: MsgDeletePost.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePostResponse(): MsgDeletePostResponse {
  return {};
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePostResponse
 */
export const MsgDeletePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePostResponse",
  encode(_: MsgDeletePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePostResponse();
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
  fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse {
    const message = createBaseMsgDeletePostResponse();
    return message;
  },
  fromAmino(_: MsgDeletePostResponseAmino): MsgDeletePostResponse {
    const message = createBaseMsgDeletePostResponse();
    return message;
  },
  toAmino(_: MsgDeletePostResponse): MsgDeletePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostResponseAminoMsg): MsgDeletePostResponse {
    return MsgDeletePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePostResponseProtoMsg): MsgDeletePostResponse {
    return MsgDeletePostResponse.decode(message.value);
  },
  toProto(message: MsgDeletePostResponse): Uint8Array {
    return MsgDeletePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePostResponse): MsgDeletePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgDeletePostResponse",
      value: MsgDeletePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgHidePost(): MsgHidePost {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgHidePost defines the MsgHidePost message.
 * @name MsgHidePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHidePost
 */
export const MsgHidePost = {
  typeUrl: "/sparkdream.blog.v1.MsgHidePost",
  aminoType: "sparkdream/x/blog/MsgHidePost",
  encode(message: MsgHidePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHidePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHidePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgHidePost>): MsgHidePost {
    const message = createBaseMsgHidePost();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgHidePostAmino): MsgHidePost {
    const message = createBaseMsgHidePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgHidePost): MsgHidePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgHidePostAminoMsg): MsgHidePost {
    return MsgHidePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHidePost): MsgHidePostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgHidePost",
      value: MsgHidePost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgHidePostProtoMsg): MsgHidePost {
    return MsgHidePost.decode(message.value);
  },
  toProto(message: MsgHidePost): Uint8Array {
    return MsgHidePost.encode(message).finish();
  },
  toProtoMsg(message: MsgHidePost): MsgHidePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgHidePost",
      value: MsgHidePost.encode(message).finish()
    };
  }
};
function createBaseMsgHidePostResponse(): MsgHidePostResponse {
  return {};
}
/**
 * MsgHidePostResponse defines the MsgHidePostResponse message.
 * @name MsgHidePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHidePostResponse
 */
export const MsgHidePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgHidePostResponse",
  encode(_: MsgHidePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHidePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHidePostResponse();
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
  fromPartial(_: DeepPartial<MsgHidePostResponse>): MsgHidePostResponse {
    const message = createBaseMsgHidePostResponse();
    return message;
  },
  fromAmino(_: MsgHidePostResponseAmino): MsgHidePostResponse {
    const message = createBaseMsgHidePostResponse();
    return message;
  },
  toAmino(_: MsgHidePostResponse): MsgHidePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgHidePostResponseAminoMsg): MsgHidePostResponse {
    return MsgHidePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHidePostResponseProtoMsg): MsgHidePostResponse {
    return MsgHidePostResponse.decode(message.value);
  },
  toProto(message: MsgHidePostResponse): Uint8Array {
    return MsgHidePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgHidePostResponse): MsgHidePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgHidePostResponse",
      value: MsgHidePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnhidePost(): MsgUnhidePost {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgUnhidePost defines the MsgUnhidePost message.
 * @name MsgUnhidePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhidePost
 */
export const MsgUnhidePost = {
  typeUrl: "/sparkdream.blog.v1.MsgUnhidePost",
  aminoType: "sparkdream/x/blog/MsgUnhidePost",
  encode(message: MsgUnhidePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnhidePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnhidePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnhidePost>): MsgUnhidePost {
    const message = createBaseMsgUnhidePost();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnhidePostAmino): MsgUnhidePost {
    const message = createBaseMsgUnhidePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUnhidePost): MsgUnhidePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnhidePostAminoMsg): MsgUnhidePost {
    return MsgUnhidePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnhidePost): MsgUnhidePostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUnhidePost",
      value: MsgUnhidePost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnhidePostProtoMsg): MsgUnhidePost {
    return MsgUnhidePost.decode(message.value);
  },
  toProto(message: MsgUnhidePost): Uint8Array {
    return MsgUnhidePost.encode(message).finish();
  },
  toProtoMsg(message: MsgUnhidePost): MsgUnhidePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnhidePost",
      value: MsgUnhidePost.encode(message).finish()
    };
  }
};
function createBaseMsgUnhidePostResponse(): MsgUnhidePostResponse {
  return {};
}
/**
 * MsgUnhidePostResponse defines the MsgUnhidePostResponse message.
 * @name MsgUnhidePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhidePostResponse
 */
export const MsgUnhidePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUnhidePostResponse",
  encode(_: MsgUnhidePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnhidePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnhidePostResponse();
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
  fromPartial(_: DeepPartial<MsgUnhidePostResponse>): MsgUnhidePostResponse {
    const message = createBaseMsgUnhidePostResponse();
    return message;
  },
  fromAmino(_: MsgUnhidePostResponseAmino): MsgUnhidePostResponse {
    const message = createBaseMsgUnhidePostResponse();
    return message;
  },
  toAmino(_: MsgUnhidePostResponse): MsgUnhidePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnhidePostResponseAminoMsg): MsgUnhidePostResponse {
    return MsgUnhidePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnhidePostResponseProtoMsg): MsgUnhidePostResponse {
    return MsgUnhidePostResponse.decode(message.value);
  },
  toProto(message: MsgUnhidePostResponse): Uint8Array {
    return MsgUnhidePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnhidePostResponse): MsgUnhidePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnhidePostResponse",
      value: MsgUnhidePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateReply(): MsgCreateReply {
  return {
    creator: "",
    postId: BigInt(0),
    parentReplyId: BigInt(0),
    body: "",
    contentType: 0,
    authorBond: undefined
  };
}
/**
 * MsgCreateReply defines the MsgCreateReply message.
 * @name MsgCreateReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreateReply
 */
export const MsgCreateReply = {
  typeUrl: "/sparkdream.blog.v1.MsgCreateReply",
  aminoType: "sparkdream/x/blog/MsgCreateReply",
  encode(message: MsgCreateReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.parentReplyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentReplyId);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.contentType !== 0) {
      writer.uint32(40).int32(message.contentType);
    }
    if (message.authorBond !== undefined) {
      writer.uint32(50).string(message.authorBond);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        case 3:
          message.parentReplyId = reader.uint64();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.contentType = reader.int32() as any;
          break;
        case 6:
          message.authorBond = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateReply>): MsgCreateReply {
    const message = createBaseMsgCreateReply();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.parentReplyId = object.parentReplyId !== undefined && object.parentReplyId !== null ? BigInt(object.parentReplyId.toString()) : BigInt(0);
    message.body = object.body ?? "";
    message.contentType = object.contentType ?? 0;
    message.authorBond = object.authorBond ?? undefined;
    return message;
  },
  fromAmino(object: MsgCreateReplyAmino): MsgCreateReply {
    const message = createBaseMsgCreateReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.parent_reply_id !== undefined && object.parent_reply_id !== null) {
      message.parentReplyId = BigInt(object.parent_reply_id);
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.author_bond !== undefined && object.author_bond !== null) {
      message.authorBond = object.author_bond;
    }
    return message;
  },
  toAmino(message: MsgCreateReply): MsgCreateReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.parent_reply_id = message.parentReplyId !== BigInt(0) ? message.parentReplyId?.toString() : undefined;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
    return obj;
  },
  fromAminoMsg(object: MsgCreateReplyAminoMsg): MsgCreateReply {
    return MsgCreateReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateReply): MsgCreateReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgCreateReply",
      value: MsgCreateReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateReplyProtoMsg): MsgCreateReply {
    return MsgCreateReply.decode(message.value);
  },
  toProto(message: MsgCreateReply): Uint8Array {
    return MsgCreateReply.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateReply): MsgCreateReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgCreateReply",
      value: MsgCreateReply.encode(message).finish()
    };
  }
};
function createBaseMsgCreateReplyResponse(): MsgCreateReplyResponse {
  return {
    id: BigInt(0)
  };
}
/**
 * MsgCreateReplyResponse defines the MsgCreateReplyResponse message.
 * @name MsgCreateReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreateReplyResponse
 */
export const MsgCreateReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgCreateReplyResponse",
  encode(message: MsgCreateReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateReplyResponse();
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
  fromPartial(object: DeepPartial<MsgCreateReplyResponse>): MsgCreateReplyResponse {
    const message = createBaseMsgCreateReplyResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateReplyResponseAmino): MsgCreateReplyResponse {
    const message = createBaseMsgCreateReplyResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateReplyResponse): MsgCreateReplyResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateReplyResponseAminoMsg): MsgCreateReplyResponse {
    return MsgCreateReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateReplyResponseProtoMsg): MsgCreateReplyResponse {
    return MsgCreateReplyResponse.decode(message.value);
  },
  toProto(message: MsgCreateReplyResponse): Uint8Array {
    return MsgCreateReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateReplyResponse): MsgCreateReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgCreateReplyResponse",
      value: MsgCreateReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateReply(): MsgUpdateReply {
  return {
    creator: "",
    id: BigInt(0),
    body: "",
    contentType: 0
  };
}
/**
 * MsgUpdateReply defines the MsgUpdateReply message.
 * @name MsgUpdateReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateReply
 */
export const MsgUpdateReply = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateReply",
  aminoType: "sparkdream/x/blog/MsgUpdateReply",
  encode(message: MsgUpdateReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.contentType !== 0) {
      writer.uint32(32).int32(message.contentType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.contentType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateReply>): MsgUpdateReply {
    const message = createBaseMsgUpdateReply();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.body = object.body ?? "";
    message.contentType = object.contentType ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateReplyAmino): MsgUpdateReply {
    const message = createBaseMsgUpdateReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    return message;
  },
  toAmino(message: MsgUpdateReply): MsgUpdateReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateReplyAminoMsg): MsgUpdateReply {
    return MsgUpdateReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateReply): MsgUpdateReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUpdateReply",
      value: MsgUpdateReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateReplyProtoMsg): MsgUpdateReply {
    return MsgUpdateReply.decode(message.value);
  },
  toProto(message: MsgUpdateReply): Uint8Array {
    return MsgUpdateReply.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateReply): MsgUpdateReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateReply",
      value: MsgUpdateReply.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateReplyResponse(): MsgUpdateReplyResponse {
  return {};
}
/**
 * MsgUpdateReplyResponse defines the MsgUpdateReplyResponse message.
 * @name MsgUpdateReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateReplyResponse
 */
export const MsgUpdateReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateReplyResponse",
  encode(_: MsgUpdateReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReplyResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateReplyResponse>): MsgUpdateReplyResponse {
    const message = createBaseMsgUpdateReplyResponse();
    return message;
  },
  fromAmino(_: MsgUpdateReplyResponseAmino): MsgUpdateReplyResponse {
    const message = createBaseMsgUpdateReplyResponse();
    return message;
  },
  toAmino(_: MsgUpdateReplyResponse): MsgUpdateReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateReplyResponseAminoMsg): MsgUpdateReplyResponse {
    return MsgUpdateReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateReplyResponseProtoMsg): MsgUpdateReplyResponse {
    return MsgUpdateReplyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateReplyResponse): Uint8Array {
    return MsgUpdateReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateReplyResponse): MsgUpdateReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateReplyResponse",
      value: MsgUpdateReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteReply(): MsgDeleteReply {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgDeleteReply defines the MsgDeleteReply message.
 * @name MsgDeleteReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeleteReply
 */
export const MsgDeleteReply = {
  typeUrl: "/sparkdream.blog.v1.MsgDeleteReply",
  aminoType: "sparkdream/x/blog/MsgDeleteReply",
  encode(message: MsgDeleteReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteReply>): MsgDeleteReply {
    const message = createBaseMsgDeleteReply();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteReplyAmino): MsgDeleteReply {
    const message = createBaseMsgDeleteReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteReply): MsgDeleteReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteReplyAminoMsg): MsgDeleteReply {
    return MsgDeleteReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteReply): MsgDeleteReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgDeleteReply",
      value: MsgDeleteReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteReplyProtoMsg): MsgDeleteReply {
    return MsgDeleteReply.decode(message.value);
  },
  toProto(message: MsgDeleteReply): Uint8Array {
    return MsgDeleteReply.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteReply): MsgDeleteReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgDeleteReply",
      value: MsgDeleteReply.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteReplyResponse(): MsgDeleteReplyResponse {
  return {};
}
/**
 * MsgDeleteReplyResponse defines the MsgDeleteReplyResponse message.
 * @name MsgDeleteReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeleteReplyResponse
 */
export const MsgDeleteReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgDeleteReplyResponse",
  encode(_: MsgDeleteReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteReplyResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteReplyResponse>): MsgDeleteReplyResponse {
    const message = createBaseMsgDeleteReplyResponse();
    return message;
  },
  fromAmino(_: MsgDeleteReplyResponseAmino): MsgDeleteReplyResponse {
    const message = createBaseMsgDeleteReplyResponse();
    return message;
  },
  toAmino(_: MsgDeleteReplyResponse): MsgDeleteReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteReplyResponseAminoMsg): MsgDeleteReplyResponse {
    return MsgDeleteReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteReplyResponseProtoMsg): MsgDeleteReplyResponse {
    return MsgDeleteReplyResponse.decode(message.value);
  },
  toProto(message: MsgDeleteReplyResponse): Uint8Array {
    return MsgDeleteReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteReplyResponse): MsgDeleteReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgDeleteReplyResponse",
      value: MsgDeleteReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgHideReply(): MsgHideReply {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgHideReply defines the MsgHideReply message.
 * @name MsgHideReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHideReply
 */
export const MsgHideReply = {
  typeUrl: "/sparkdream.blog.v1.MsgHideReply",
  aminoType: "sparkdream/x/blog/MsgHideReply",
  encode(message: MsgHideReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHideReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHideReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgHideReply>): MsgHideReply {
    const message = createBaseMsgHideReply();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgHideReplyAmino): MsgHideReply {
    const message = createBaseMsgHideReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgHideReply): MsgHideReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgHideReplyAminoMsg): MsgHideReply {
    return MsgHideReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHideReply): MsgHideReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgHideReply",
      value: MsgHideReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgHideReplyProtoMsg): MsgHideReply {
    return MsgHideReply.decode(message.value);
  },
  toProto(message: MsgHideReply): Uint8Array {
    return MsgHideReply.encode(message).finish();
  },
  toProtoMsg(message: MsgHideReply): MsgHideReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgHideReply",
      value: MsgHideReply.encode(message).finish()
    };
  }
};
function createBaseMsgHideReplyResponse(): MsgHideReplyResponse {
  return {};
}
/**
 * MsgHideReplyResponse defines the MsgHideReplyResponse message.
 * @name MsgHideReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgHideReplyResponse
 */
export const MsgHideReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgHideReplyResponse",
  encode(_: MsgHideReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHideReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHideReplyResponse();
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
  fromPartial(_: DeepPartial<MsgHideReplyResponse>): MsgHideReplyResponse {
    const message = createBaseMsgHideReplyResponse();
    return message;
  },
  fromAmino(_: MsgHideReplyResponseAmino): MsgHideReplyResponse {
    const message = createBaseMsgHideReplyResponse();
    return message;
  },
  toAmino(_: MsgHideReplyResponse): MsgHideReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgHideReplyResponseAminoMsg): MsgHideReplyResponse {
    return MsgHideReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHideReplyResponseProtoMsg): MsgHideReplyResponse {
    return MsgHideReplyResponse.decode(message.value);
  },
  toProto(message: MsgHideReplyResponse): Uint8Array {
    return MsgHideReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgHideReplyResponse): MsgHideReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgHideReplyResponse",
      value: MsgHideReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnhideReply(): MsgUnhideReply {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgUnhideReply defines the MsgUnhideReply message.
 * @name MsgUnhideReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhideReply
 */
export const MsgUnhideReply = {
  typeUrl: "/sparkdream.blog.v1.MsgUnhideReply",
  aminoType: "sparkdream/x/blog/MsgUnhideReply",
  encode(message: MsgUnhideReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnhideReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnhideReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnhideReply>): MsgUnhideReply {
    const message = createBaseMsgUnhideReply();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnhideReplyAmino): MsgUnhideReply {
    const message = createBaseMsgUnhideReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUnhideReply): MsgUnhideReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnhideReplyAminoMsg): MsgUnhideReply {
    return MsgUnhideReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnhideReply): MsgUnhideReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUnhideReply",
      value: MsgUnhideReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnhideReplyProtoMsg): MsgUnhideReply {
    return MsgUnhideReply.decode(message.value);
  },
  toProto(message: MsgUnhideReply): Uint8Array {
    return MsgUnhideReply.encode(message).finish();
  },
  toProtoMsg(message: MsgUnhideReply): MsgUnhideReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnhideReply",
      value: MsgUnhideReply.encode(message).finish()
    };
  }
};
function createBaseMsgUnhideReplyResponse(): MsgUnhideReplyResponse {
  return {};
}
/**
 * MsgUnhideReplyResponse defines the MsgUnhideReplyResponse message.
 * @name MsgUnhideReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnhideReplyResponse
 */
export const MsgUnhideReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUnhideReplyResponse",
  encode(_: MsgUnhideReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnhideReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnhideReplyResponse();
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
  fromPartial(_: DeepPartial<MsgUnhideReplyResponse>): MsgUnhideReplyResponse {
    const message = createBaseMsgUnhideReplyResponse();
    return message;
  },
  fromAmino(_: MsgUnhideReplyResponseAmino): MsgUnhideReplyResponse {
    const message = createBaseMsgUnhideReplyResponse();
    return message;
  },
  toAmino(_: MsgUnhideReplyResponse): MsgUnhideReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnhideReplyResponseAminoMsg): MsgUnhideReplyResponse {
    return MsgUnhideReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnhideReplyResponseProtoMsg): MsgUnhideReplyResponse {
    return MsgUnhideReplyResponse.decode(message.value);
  },
  toProto(message: MsgUnhideReplyResponse): Uint8Array {
    return MsgUnhideReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnhideReplyResponse): MsgUnhideReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnhideReplyResponse",
      value: MsgUnhideReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReact(): MsgReact {
  return {
    creator: "",
    postId: BigInt(0),
    replyId: BigInt(0),
    reactionType: 0
  };
}
/**
 * MsgReact defines the MsgReact message.
 * @name MsgReact
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgReact
 */
export const MsgReact = {
  typeUrl: "/sparkdream.blog.v1.MsgReact",
  aminoType: "sparkdream/x/blog/MsgReact",
  encode(message: MsgReact, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
    }
    if (message.reactionType !== 0) {
      writer.uint32(32).int32(message.reactionType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReact {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        case 3:
          message.replyId = reader.uint64();
          break;
        case 4:
          message.reactionType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReact>): MsgReact {
    const message = createBaseMsgReact();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    message.reactionType = object.reactionType ?? 0;
    return message;
  },
  fromAmino(object: MsgReactAmino): MsgReact {
    const message = createBaseMsgReact();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    if (object.reaction_type !== undefined && object.reaction_type !== null) {
      message.reactionType = object.reaction_type;
    }
    return message;
  },
  toAmino(message: MsgReact): MsgReactAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    obj.reaction_type = message.reactionType === 0 ? undefined : message.reactionType;
    return obj;
  },
  fromAminoMsg(object: MsgReactAminoMsg): MsgReact {
    return MsgReact.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReact): MsgReactAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgReact",
      value: MsgReact.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReactProtoMsg): MsgReact {
    return MsgReact.decode(message.value);
  },
  toProto(message: MsgReact): Uint8Array {
    return MsgReact.encode(message).finish();
  },
  toProtoMsg(message: MsgReact): MsgReactProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgReact",
      value: MsgReact.encode(message).finish()
    };
  }
};
function createBaseMsgReactResponse(): MsgReactResponse {
  return {};
}
/**
 * MsgReactResponse defines the MsgReactResponse message.
 * @name MsgReactResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgReactResponse
 */
export const MsgReactResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgReactResponse",
  encode(_: MsgReactResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReactResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReactResponse();
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
  fromPartial(_: DeepPartial<MsgReactResponse>): MsgReactResponse {
    const message = createBaseMsgReactResponse();
    return message;
  },
  fromAmino(_: MsgReactResponseAmino): MsgReactResponse {
    const message = createBaseMsgReactResponse();
    return message;
  },
  toAmino(_: MsgReactResponse): MsgReactResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReactResponseAminoMsg): MsgReactResponse {
    return MsgReactResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReactResponseProtoMsg): MsgReactResponse {
    return MsgReactResponse.decode(message.value);
  },
  toProto(message: MsgReactResponse): Uint8Array {
    return MsgReactResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReactResponse): MsgReactResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgReactResponse",
      value: MsgReactResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveReaction(): MsgRemoveReaction {
  return {
    creator: "",
    postId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * MsgRemoveReaction defines the MsgRemoveReaction message.
 * @name MsgRemoveReaction
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgRemoveReaction
 */
export const MsgRemoveReaction = {
  typeUrl: "/sparkdream.blog.v1.MsgRemoveReaction",
  aminoType: "sparkdream/x/blog/MsgRemoveReaction",
  encode(message: MsgRemoveReaction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveReaction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        case 3:
          message.replyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveReaction>): MsgRemoveReaction {
    const message = createBaseMsgRemoveReaction();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveReactionAmino): MsgRemoveReaction {
    const message = createBaseMsgRemoveReaction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: MsgRemoveReaction): MsgRemoveReactionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveReactionAminoMsg): MsgRemoveReaction {
    return MsgRemoveReaction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveReaction): MsgRemoveReactionAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgRemoveReaction",
      value: MsgRemoveReaction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveReactionProtoMsg): MsgRemoveReaction {
    return MsgRemoveReaction.decode(message.value);
  },
  toProto(message: MsgRemoveReaction): Uint8Array {
    return MsgRemoveReaction.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveReaction): MsgRemoveReactionProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgRemoveReaction",
      value: MsgRemoveReaction.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveReactionResponse(): MsgRemoveReactionResponse {
  return {};
}
/**
 * MsgRemoveReactionResponse defines the MsgRemoveReactionResponse message.
 * @name MsgRemoveReactionResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgRemoveReactionResponse
 */
export const MsgRemoveReactionResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgRemoveReactionResponse",
  encode(_: MsgRemoveReactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveReactionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReactionResponse();
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
  fromPartial(_: DeepPartial<MsgRemoveReactionResponse>): MsgRemoveReactionResponse {
    const message = createBaseMsgRemoveReactionResponse();
    return message;
  },
  fromAmino(_: MsgRemoveReactionResponseAmino): MsgRemoveReactionResponse {
    const message = createBaseMsgRemoveReactionResponse();
    return message;
  },
  toAmino(_: MsgRemoveReactionResponse): MsgRemoveReactionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveReactionResponseAminoMsg): MsgRemoveReactionResponse {
    return MsgRemoveReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveReactionResponseProtoMsg): MsgRemoveReactionResponse {
    return MsgRemoveReactionResponse.decode(message.value);
  },
  toProto(message: MsgRemoveReactionResponse): Uint8Array {
    return MsgRemoveReactionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveReactionResponse): MsgRemoveReactionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgRemoveReactionResponse",
      value: MsgRemoveReactionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMakePostPermanent(): MsgMakePostPermanent {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgMakePostPermanent promotes an ephemeral post to permanent. No-op if
 * the post is already permanent.
 * @name MsgMakePostPermanent
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakePostPermanent
 */
export const MsgMakePostPermanent = {
  typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanent",
  aminoType: "sparkdream/x/blog/MsgMakePostPermanent",
  encode(message: MsgMakePostPermanent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakePostPermanent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakePostPermanent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMakePostPermanent>): MsgMakePostPermanent {
    const message = createBaseMsgMakePostPermanent();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMakePostPermanentAmino): MsgMakePostPermanent {
    const message = createBaseMsgMakePostPermanent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgMakePostPermanent): MsgMakePostPermanentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMakePostPermanentAminoMsg): MsgMakePostPermanent {
    return MsgMakePostPermanent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMakePostPermanent): MsgMakePostPermanentAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgMakePostPermanent",
      value: MsgMakePostPermanent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMakePostPermanentProtoMsg): MsgMakePostPermanent {
    return MsgMakePostPermanent.decode(message.value);
  },
  toProto(message: MsgMakePostPermanent): Uint8Array {
    return MsgMakePostPermanent.encode(message).finish();
  },
  toProtoMsg(message: MsgMakePostPermanent): MsgMakePostPermanentProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanent",
      value: MsgMakePostPermanent.encode(message).finish()
    };
  }
};
function createBaseMsgMakePostPermanentResponse(): MsgMakePostPermanentResponse {
  return {};
}
/**
 * MsgMakePostPermanentResponse defines the response.
 * @name MsgMakePostPermanentResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakePostPermanentResponse
 */
export const MsgMakePostPermanentResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanentResponse",
  encode(_: MsgMakePostPermanentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakePostPermanentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakePostPermanentResponse();
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
  fromPartial(_: DeepPartial<MsgMakePostPermanentResponse>): MsgMakePostPermanentResponse {
    const message = createBaseMsgMakePostPermanentResponse();
    return message;
  },
  fromAmino(_: MsgMakePostPermanentResponseAmino): MsgMakePostPermanentResponse {
    const message = createBaseMsgMakePostPermanentResponse();
    return message;
  },
  toAmino(_: MsgMakePostPermanentResponse): MsgMakePostPermanentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMakePostPermanentResponseAminoMsg): MsgMakePostPermanentResponse {
    return MsgMakePostPermanentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMakePostPermanentResponseProtoMsg): MsgMakePostPermanentResponse {
    return MsgMakePostPermanentResponse.decode(message.value);
  },
  toProto(message: MsgMakePostPermanentResponse): Uint8Array {
    return MsgMakePostPermanentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMakePostPermanentResponse): MsgMakePostPermanentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanentResponse",
      value: MsgMakePostPermanentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinPost(): MsgPinPost {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgPinPost sets the pinned marker on a permanent post (display-only). The
 * post must already be permanent; promote ephemeral content with
 * MsgMakePostPermanent first.
 * @name MsgPinPost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinPost
 */
export const MsgPinPost = {
  typeUrl: "/sparkdream.blog.v1.MsgPinPost",
  aminoType: "sparkdream/x/blog/MsgPinPost",
  encode(message: MsgPinPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinPost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPinPost>): MsgPinPost {
    const message = createBaseMsgPinPost();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPinPostAmino): MsgPinPost {
    const message = createBaseMsgPinPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgPinPost): MsgPinPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPinPostAminoMsg): MsgPinPost {
    return MsgPinPost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPinPost): MsgPinPostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgPinPost",
      value: MsgPinPost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPinPostProtoMsg): MsgPinPost {
    return MsgPinPost.decode(message.value);
  },
  toProto(message: MsgPinPost): Uint8Array {
    return MsgPinPost.encode(message).finish();
  },
  toProtoMsg(message: MsgPinPost): MsgPinPostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgPinPost",
      value: MsgPinPost.encode(message).finish()
    };
  }
};
function createBaseMsgPinPostResponse(): MsgPinPostResponse {
  return {};
}
/**
 * MsgPinPostResponse defines the MsgPinPostResponse message.
 * @name MsgPinPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinPostResponse
 */
export const MsgPinPostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgPinPostResponse",
  encode(_: MsgPinPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinPostResponse();
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
  fromPartial(_: DeepPartial<MsgPinPostResponse>): MsgPinPostResponse {
    const message = createBaseMsgPinPostResponse();
    return message;
  },
  fromAmino(_: MsgPinPostResponseAmino): MsgPinPostResponse {
    const message = createBaseMsgPinPostResponse();
    return message;
  },
  toAmino(_: MsgPinPostResponse): MsgPinPostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPinPostResponseAminoMsg): MsgPinPostResponse {
    return MsgPinPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPinPostResponseProtoMsg): MsgPinPostResponse {
    return MsgPinPostResponse.decode(message.value);
  },
  toProto(message: MsgPinPostResponse): Uint8Array {
    return MsgPinPostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPinPostResponse): MsgPinPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgPinPostResponse",
      value: MsgPinPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMakeReplyPermanent(): MsgMakeReplyPermanent {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgMakeReplyPermanent promotes an ephemeral reply to permanent.
 * @name MsgMakeReplyPermanent
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakeReplyPermanent
 */
export const MsgMakeReplyPermanent = {
  typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanent",
  aminoType: "sparkdream/x/blog/MsgMakeReplyPermanent",
  encode(message: MsgMakeReplyPermanent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakeReplyPermanent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeReplyPermanent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMakeReplyPermanent>): MsgMakeReplyPermanent {
    const message = createBaseMsgMakeReplyPermanent();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMakeReplyPermanentAmino): MsgMakeReplyPermanent {
    const message = createBaseMsgMakeReplyPermanent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgMakeReplyPermanent): MsgMakeReplyPermanentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMakeReplyPermanentAminoMsg): MsgMakeReplyPermanent {
    return MsgMakeReplyPermanent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMakeReplyPermanent): MsgMakeReplyPermanentAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgMakeReplyPermanent",
      value: MsgMakeReplyPermanent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMakeReplyPermanentProtoMsg): MsgMakeReplyPermanent {
    return MsgMakeReplyPermanent.decode(message.value);
  },
  toProto(message: MsgMakeReplyPermanent): Uint8Array {
    return MsgMakeReplyPermanent.encode(message).finish();
  },
  toProtoMsg(message: MsgMakeReplyPermanent): MsgMakeReplyPermanentProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanent",
      value: MsgMakeReplyPermanent.encode(message).finish()
    };
  }
};
function createBaseMsgMakeReplyPermanentResponse(): MsgMakeReplyPermanentResponse {
  return {};
}
/**
 * MsgMakeReplyPermanentResponse defines the response.
 * @name MsgMakeReplyPermanentResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgMakeReplyPermanentResponse
 */
export const MsgMakeReplyPermanentResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanentResponse",
  encode(_: MsgMakeReplyPermanentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakeReplyPermanentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeReplyPermanentResponse();
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
  fromPartial(_: DeepPartial<MsgMakeReplyPermanentResponse>): MsgMakeReplyPermanentResponse {
    const message = createBaseMsgMakeReplyPermanentResponse();
    return message;
  },
  fromAmino(_: MsgMakeReplyPermanentResponseAmino): MsgMakeReplyPermanentResponse {
    const message = createBaseMsgMakeReplyPermanentResponse();
    return message;
  },
  toAmino(_: MsgMakeReplyPermanentResponse): MsgMakeReplyPermanentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMakeReplyPermanentResponseAminoMsg): MsgMakeReplyPermanentResponse {
    return MsgMakeReplyPermanentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMakeReplyPermanentResponseProtoMsg): MsgMakeReplyPermanentResponse {
    return MsgMakeReplyPermanentResponse.decode(message.value);
  },
  toProto(message: MsgMakeReplyPermanentResponse): Uint8Array {
    return MsgMakeReplyPermanentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMakeReplyPermanentResponse): MsgMakeReplyPermanentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanentResponse",
      value: MsgMakeReplyPermanentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinReply(): MsgPinReply {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgPinReply sets the pinned marker on a permanent reply. The reply must
 * already be permanent; promote ephemeral content with MsgMakeReplyPermanent
 * first.
 * @name MsgPinReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinReply
 */
export const MsgPinReply = {
  typeUrl: "/sparkdream.blog.v1.MsgPinReply",
  aminoType: "sparkdream/x/blog/MsgPinReply",
  encode(message: MsgPinReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPinReply>): MsgPinReply {
    const message = createBaseMsgPinReply();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPinReplyAmino): MsgPinReply {
    const message = createBaseMsgPinReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgPinReply): MsgPinReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPinReplyAminoMsg): MsgPinReply {
    return MsgPinReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPinReply): MsgPinReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgPinReply",
      value: MsgPinReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPinReplyProtoMsg): MsgPinReply {
    return MsgPinReply.decode(message.value);
  },
  toProto(message: MsgPinReply): Uint8Array {
    return MsgPinReply.encode(message).finish();
  },
  toProtoMsg(message: MsgPinReply): MsgPinReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgPinReply",
      value: MsgPinReply.encode(message).finish()
    };
  }
};
function createBaseMsgPinReplyResponse(): MsgPinReplyResponse {
  return {};
}
/**
 * MsgPinReplyResponse defines the MsgPinReplyResponse message.
 * @name MsgPinReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgPinReplyResponse
 */
export const MsgPinReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgPinReplyResponse",
  encode(_: MsgPinReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinReplyResponse();
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
  fromPartial(_: DeepPartial<MsgPinReplyResponse>): MsgPinReplyResponse {
    const message = createBaseMsgPinReplyResponse();
    return message;
  },
  fromAmino(_: MsgPinReplyResponseAmino): MsgPinReplyResponse {
    const message = createBaseMsgPinReplyResponse();
    return message;
  },
  toAmino(_: MsgPinReplyResponse): MsgPinReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPinReplyResponseAminoMsg): MsgPinReplyResponse {
    return MsgPinReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPinReplyResponseProtoMsg): MsgPinReplyResponse {
    return MsgPinReplyResponse.decode(message.value);
  },
  toProto(message: MsgPinReplyResponse): Uint8Array {
    return MsgPinReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPinReplyResponse): MsgPinReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgPinReplyResponse",
      value: MsgPinReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinPost(): MsgUnpinPost {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgUnpinPost defines the MsgUnpinPost message.
 * @name MsgUnpinPost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinPost
 */
export const MsgUnpinPost = {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinPost",
  aminoType: "sparkdream/x/blog/MsgUnpinPost",
  encode(message: MsgUnpinPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinPost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnpinPost>): MsgUnpinPost {
    const message = createBaseMsgUnpinPost();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnpinPostAmino): MsgUnpinPost {
    const message = createBaseMsgUnpinPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUnpinPost): MsgUnpinPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnpinPostAminoMsg): MsgUnpinPost {
    return MsgUnpinPost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnpinPost): MsgUnpinPostAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUnpinPost",
      value: MsgUnpinPost.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnpinPostProtoMsg): MsgUnpinPost {
    return MsgUnpinPost.decode(message.value);
  },
  toProto(message: MsgUnpinPost): Uint8Array {
    return MsgUnpinPost.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinPost): MsgUnpinPostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnpinPost",
      value: MsgUnpinPost.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinPostResponse(): MsgUnpinPostResponse {
  return {};
}
/**
 * MsgUnpinPostResponse defines the MsgUnpinPostResponse message.
 * @name MsgUnpinPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinPostResponse
 */
export const MsgUnpinPostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinPostResponse",
  encode(_: MsgUnpinPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinPostResponse();
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
  fromPartial(_: DeepPartial<MsgUnpinPostResponse>): MsgUnpinPostResponse {
    const message = createBaseMsgUnpinPostResponse();
    return message;
  },
  fromAmino(_: MsgUnpinPostResponseAmino): MsgUnpinPostResponse {
    const message = createBaseMsgUnpinPostResponse();
    return message;
  },
  toAmino(_: MsgUnpinPostResponse): MsgUnpinPostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnpinPostResponseAminoMsg): MsgUnpinPostResponse {
    return MsgUnpinPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpinPostResponseProtoMsg): MsgUnpinPostResponse {
    return MsgUnpinPostResponse.decode(message.value);
  },
  toProto(message: MsgUnpinPostResponse): Uint8Array {
    return MsgUnpinPostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinPostResponse): MsgUnpinPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnpinPostResponse",
      value: MsgUnpinPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinReply(): MsgUnpinReply {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgUnpinReply defines the MsgUnpinReply message.
 * @name MsgUnpinReply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinReply
 */
export const MsgUnpinReply = {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinReply",
  aminoType: "sparkdream/x/blog/MsgUnpinReply",
  encode(message: MsgUnpinReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnpinReply>): MsgUnpinReply {
    const message = createBaseMsgUnpinReply();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnpinReplyAmino): MsgUnpinReply {
    const message = createBaseMsgUnpinReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUnpinReply): MsgUnpinReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnpinReplyAminoMsg): MsgUnpinReply {
    return MsgUnpinReply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnpinReply): MsgUnpinReplyAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUnpinReply",
      value: MsgUnpinReply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnpinReplyProtoMsg): MsgUnpinReply {
    return MsgUnpinReply.decode(message.value);
  },
  toProto(message: MsgUnpinReply): Uint8Array {
    return MsgUnpinReply.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinReply): MsgUnpinReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnpinReply",
      value: MsgUnpinReply.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinReplyResponse(): MsgUnpinReplyResponse {
  return {};
}
/**
 * MsgUnpinReplyResponse defines the MsgUnpinReplyResponse message.
 * @name MsgUnpinReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUnpinReplyResponse
 */
export const MsgUnpinReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUnpinReplyResponse",
  encode(_: MsgUnpinReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinReplyResponse();
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
  fromPartial(_: DeepPartial<MsgUnpinReplyResponse>): MsgUnpinReplyResponse {
    const message = createBaseMsgUnpinReplyResponse();
    return message;
  },
  fromAmino(_: MsgUnpinReplyResponseAmino): MsgUnpinReplyResponse {
    const message = createBaseMsgUnpinReplyResponse();
    return message;
  },
  toAmino(_: MsgUnpinReplyResponse): MsgUnpinReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnpinReplyResponseAminoMsg): MsgUnpinReplyResponse {
    return MsgUnpinReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpinReplyResponseProtoMsg): MsgUnpinReplyResponse {
    return MsgUnpinReplyResponse.decode(message.value);
  },
  toProto(message: MsgUnpinReplyResponse): Uint8Array {
    return MsgUnpinReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinReplyResponse): MsgUnpinReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUnpinReplyResponse",
      value: MsgUnpinReplyResponse.encode(message).finish()
    };
  }
};