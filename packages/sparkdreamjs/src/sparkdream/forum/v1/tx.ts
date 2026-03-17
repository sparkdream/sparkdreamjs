//@ts-nocheck
import { Params, ParamsAmino, ForumOperationalParams, ForumOperationalParamsAmino } from "./params";
import { ContentType } from "../../common/v1/content_type";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateParams
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
  typeUrl: "/sparkdream.forum.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateParams
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
  type: "sparkdream/x/forum/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateOperationalParams
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
  operationalParams: ForumOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateOperationalParams
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
  operational_params: ForumOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/forum/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgCreateCategory defines the MsgCreateCategory message.
 * @name MsgCreateCategory
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateCategory
 */
export interface MsgCreateCategory {
  creator: string;
  title: string;
  description: string;
  membersOnlyWrite: boolean;
  adminOnlyWrite: boolean;
}
export interface MsgCreateCategoryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreateCategory";
  value: Uint8Array;
}
/**
 * MsgCreateCategory defines the MsgCreateCategory message.
 * @name MsgCreateCategoryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateCategory
 */
export interface MsgCreateCategoryAmino {
  creator?: string;
  title?: string;
  description?: string;
  members_only_write?: boolean;
  admin_only_write?: boolean;
}
export interface MsgCreateCategoryAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreateCategory";
  value: MsgCreateCategoryAmino;
}
/**
 * MsgCreateCategoryResponse defines the MsgCreateCategoryResponse message.
 * @name MsgCreateCategoryResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateCategoryResponse
 */
export interface MsgCreateCategoryResponse {}
export interface MsgCreateCategoryResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreateCategoryResponse";
  value: Uint8Array;
}
/**
 * MsgCreateCategoryResponse defines the MsgCreateCategoryResponse message.
 * @name MsgCreateCategoryResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateCategoryResponse
 */
export interface MsgCreateCategoryResponseAmino {}
export interface MsgCreateCategoryResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreateCategoryResponse";
  value: MsgCreateCategoryResponseAmino;
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreatePost
 */
export interface MsgCreatePost {
  creator: string;
  categoryId: bigint;
  parentId: bigint;
  content: string;
  tags: string[];
  contentType: ContentType;
  /**
   * Optional DREAM amount to lock as author bond
   */
  authorBond?: string;
  initiativeId: bigint;
}
export interface MsgCreatePostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreatePost";
  value: Uint8Array;
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreatePost
 */
export interface MsgCreatePostAmino {
  creator?: string;
  category_id?: string;
  parent_id?: string;
  content?: string;
  tags?: string[];
  content_type?: ContentType;
  /**
   * Optional DREAM amount to lock as author bond
   */
  author_bond?: string;
  initiative_id?: string;
}
export interface MsgCreatePostAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreatePost";
  value: MsgCreatePostAmino;
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreatePostResponse
 */
export interface MsgCreatePostResponse {}
export interface MsgCreatePostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreatePostResponse";
  value: Uint8Array;
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreatePostResponse
 */
export interface MsgCreatePostResponseAmino {}
export interface MsgCreatePostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreatePostResponse";
  value: MsgCreatePostResponseAmino;
}
/**
 * MsgEditPost defines the MsgEditPost message.
 * @name MsgEditPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgEditPost
 */
export interface MsgEditPost {
  creator: string;
  postId: bigint;
  newContent: string;
  tags: string[];
  contentType: ContentType;
}
export interface MsgEditPostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgEditPost";
  value: Uint8Array;
}
/**
 * MsgEditPost defines the MsgEditPost message.
 * @name MsgEditPostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgEditPost
 */
export interface MsgEditPostAmino {
  creator?: string;
  post_id?: string;
  new_content?: string;
  tags?: string[];
  content_type?: ContentType;
}
export interface MsgEditPostAminoMsg {
  type: "/sparkdream.forum.v1.MsgEditPost";
  value: MsgEditPostAmino;
}
/**
 * MsgEditPostResponse defines the MsgEditPostResponse message.
 * @name MsgEditPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgEditPostResponse
 */
export interface MsgEditPostResponse {}
export interface MsgEditPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgEditPostResponse";
  value: Uint8Array;
}
/**
 * MsgEditPostResponse defines the MsgEditPostResponse message.
 * @name MsgEditPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgEditPostResponse
 */
export interface MsgEditPostResponseAmino {}
export interface MsgEditPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgEditPostResponse";
  value: MsgEditPostResponseAmino;
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDeletePost
 */
export interface MsgDeletePost {
  creator: string;
  postId: bigint;
}
export interface MsgDeletePostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDeletePost";
  value: Uint8Array;
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDeletePost
 */
export interface MsgDeletePostAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgDeletePostAminoMsg {
  type: "/sparkdream.forum.v1.MsgDeletePost";
  value: MsgDeletePostAmino;
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDeletePostResponse
 */
export interface MsgDeletePostResponse {}
export interface MsgDeletePostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDeletePostResponse";
  value: Uint8Array;
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDeletePostResponse
 */
export interface MsgDeletePostResponseAmino {}
export interface MsgDeletePostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgDeletePostResponse";
  value: MsgDeletePostResponseAmino;
}
/**
 * MsgFreezeThread defines the MsgFreezeThread message.
 * @name MsgFreezeThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFreezeThread
 */
export interface MsgFreezeThread {
  creator: string;
  rootId: bigint;
}
export interface MsgFreezeThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgFreezeThread";
  value: Uint8Array;
}
/**
 * MsgFreezeThread defines the MsgFreezeThread message.
 * @name MsgFreezeThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFreezeThread
 */
export interface MsgFreezeThreadAmino {
  creator?: string;
  root_id?: string;
}
export interface MsgFreezeThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgFreezeThread";
  value: MsgFreezeThreadAmino;
}
/**
 * MsgFreezeThreadResponse defines the MsgFreezeThreadResponse message.
 * @name MsgFreezeThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFreezeThreadResponse
 */
export interface MsgFreezeThreadResponse {}
export interface MsgFreezeThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgFreezeThreadResponse";
  value: Uint8Array;
}
/**
 * MsgFreezeThreadResponse defines the MsgFreezeThreadResponse message.
 * @name MsgFreezeThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFreezeThreadResponse
 */
export interface MsgFreezeThreadResponseAmino {}
export interface MsgFreezeThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgFreezeThreadResponse";
  value: MsgFreezeThreadResponseAmino;
}
/**
 * MsgUnarchiveThread defines the MsgUnarchiveThread message.
 * @name MsgUnarchiveThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnarchiveThread
 */
export interface MsgUnarchiveThread {
  creator: string;
  rootId: bigint;
}
export interface MsgUnarchiveThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThread";
  value: Uint8Array;
}
/**
 * MsgUnarchiveThread defines the MsgUnarchiveThread message.
 * @name MsgUnarchiveThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnarchiveThread
 */
export interface MsgUnarchiveThreadAmino {
  creator?: string;
  root_id?: string;
}
export interface MsgUnarchiveThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnarchiveThread";
  value: MsgUnarchiveThreadAmino;
}
/**
 * MsgUnarchiveThreadResponse defines the MsgUnarchiveThreadResponse message.
 * @name MsgUnarchiveThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnarchiveThreadResponse
 */
export interface MsgUnarchiveThreadResponse {}
export interface MsgUnarchiveThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThreadResponse";
  value: Uint8Array;
}
/**
 * MsgUnarchiveThreadResponse defines the MsgUnarchiveThreadResponse message.
 * @name MsgUnarchiveThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnarchiveThreadResponse
 */
export interface MsgUnarchiveThreadResponseAmino {}
export interface MsgUnarchiveThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnarchiveThreadResponse";
  value: MsgUnarchiveThreadResponseAmino;
}
/**
 * MsgPinPost defines the MsgPinPost message.
 * @name MsgPinPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinPost
 */
export interface MsgPinPost {
  creator: string;
  postId: bigint;
  priority: bigint;
}
export interface MsgPinPostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgPinPost";
  value: Uint8Array;
}
/**
 * MsgPinPost defines the MsgPinPost message.
 * @name MsgPinPostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinPost
 */
export interface MsgPinPostAmino {
  creator?: string;
  post_id?: string;
  priority?: string;
}
export interface MsgPinPostAminoMsg {
  type: "/sparkdream.forum.v1.MsgPinPost";
  value: MsgPinPostAmino;
}
/**
 * MsgPinPostResponse defines the MsgPinPostResponse message.
 * @name MsgPinPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinPostResponse
 */
export interface MsgPinPostResponse {}
export interface MsgPinPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgPinPostResponse";
  value: Uint8Array;
}
/**
 * MsgPinPostResponse defines the MsgPinPostResponse message.
 * @name MsgPinPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinPostResponse
 */
export interface MsgPinPostResponseAmino {}
export interface MsgPinPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgPinPostResponse";
  value: MsgPinPostResponseAmino;
}
/**
 * MsgUnpinPost defines the MsgUnpinPost message.
 * @name MsgUnpinPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinPost
 */
export interface MsgUnpinPost {
  creator: string;
  postId: bigint;
}
export interface MsgUnpinPostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinPost";
  value: Uint8Array;
}
/**
 * MsgUnpinPost defines the MsgUnpinPost message.
 * @name MsgUnpinPostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinPost
 */
export interface MsgUnpinPostAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgUnpinPostAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnpinPost";
  value: MsgUnpinPostAmino;
}
/**
 * MsgUnpinPostResponse defines the MsgUnpinPostResponse message.
 * @name MsgUnpinPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinPostResponse
 */
export interface MsgUnpinPostResponse {}
export interface MsgUnpinPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinPostResponse";
  value: Uint8Array;
}
/**
 * MsgUnpinPostResponse defines the MsgUnpinPostResponse message.
 * @name MsgUnpinPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinPostResponse
 */
export interface MsgUnpinPostResponseAmino {}
export interface MsgUnpinPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnpinPostResponse";
  value: MsgUnpinPostResponseAmino;
}
/**
 * MsgLockThread defines the MsgLockThread message.
 * @name MsgLockThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgLockThread
 */
export interface MsgLockThread {
  creator: string;
  rootId: bigint;
  reason: string;
}
export interface MsgLockThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgLockThread";
  value: Uint8Array;
}
/**
 * MsgLockThread defines the MsgLockThread message.
 * @name MsgLockThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgLockThread
 */
export interface MsgLockThreadAmino {
  creator?: string;
  root_id?: string;
  reason?: string;
}
export interface MsgLockThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgLockThread";
  value: MsgLockThreadAmino;
}
/**
 * MsgLockThreadResponse defines the MsgLockThreadResponse message.
 * @name MsgLockThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgLockThreadResponse
 */
export interface MsgLockThreadResponse {}
export interface MsgLockThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgLockThreadResponse";
  value: Uint8Array;
}
/**
 * MsgLockThreadResponse defines the MsgLockThreadResponse message.
 * @name MsgLockThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgLockThreadResponse
 */
export interface MsgLockThreadResponseAmino {}
export interface MsgLockThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgLockThreadResponse";
  value: MsgLockThreadResponseAmino;
}
/**
 * MsgUnlockThread defines the MsgUnlockThread message.
 * @name MsgUnlockThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnlockThread
 */
export interface MsgUnlockThread {
  creator: string;
  rootId: bigint;
}
export interface MsgUnlockThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnlockThread";
  value: Uint8Array;
}
/**
 * MsgUnlockThread defines the MsgUnlockThread message.
 * @name MsgUnlockThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnlockThread
 */
export interface MsgUnlockThreadAmino {
  creator?: string;
  root_id?: string;
}
export interface MsgUnlockThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnlockThread";
  value: MsgUnlockThreadAmino;
}
/**
 * MsgUnlockThreadResponse defines the MsgUnlockThreadResponse message.
 * @name MsgUnlockThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnlockThreadResponse
 */
export interface MsgUnlockThreadResponse {}
export interface MsgUnlockThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnlockThreadResponse";
  value: Uint8Array;
}
/**
 * MsgUnlockThreadResponse defines the MsgUnlockThreadResponse message.
 * @name MsgUnlockThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnlockThreadResponse
 */
export interface MsgUnlockThreadResponseAmino {}
export interface MsgUnlockThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnlockThreadResponse";
  value: MsgUnlockThreadResponseAmino;
}
/**
 * MsgMoveThread defines the MsgMoveThread message.
 * @name MsgMoveThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMoveThread
 */
export interface MsgMoveThread {
  creator: string;
  rootId: bigint;
  newCategoryId: bigint;
  reason: string;
}
export interface MsgMoveThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgMoveThread";
  value: Uint8Array;
}
/**
 * MsgMoveThread defines the MsgMoveThread message.
 * @name MsgMoveThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMoveThread
 */
export interface MsgMoveThreadAmino {
  creator?: string;
  root_id?: string;
  new_category_id?: string;
  reason?: string;
}
export interface MsgMoveThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgMoveThread";
  value: MsgMoveThreadAmino;
}
/**
 * MsgMoveThreadResponse defines the MsgMoveThreadResponse message.
 * @name MsgMoveThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMoveThreadResponse
 */
export interface MsgMoveThreadResponse {}
export interface MsgMoveThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgMoveThreadResponse";
  value: Uint8Array;
}
/**
 * MsgMoveThreadResponse defines the MsgMoveThreadResponse message.
 * @name MsgMoveThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMoveThreadResponse
 */
export interface MsgMoveThreadResponseAmino {}
export interface MsgMoveThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgMoveThreadResponse";
  value: MsgMoveThreadResponseAmino;
}
/**
 * MsgFollowThread defines the MsgFollowThread message.
 * @name MsgFollowThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFollowThread
 */
export interface MsgFollowThread {
  creator: string;
  threadId: bigint;
}
export interface MsgFollowThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgFollowThread";
  value: Uint8Array;
}
/**
 * MsgFollowThread defines the MsgFollowThread message.
 * @name MsgFollowThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFollowThread
 */
export interface MsgFollowThreadAmino {
  creator?: string;
  thread_id?: string;
}
export interface MsgFollowThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgFollowThread";
  value: MsgFollowThreadAmino;
}
/**
 * MsgFollowThreadResponse defines the MsgFollowThreadResponse message.
 * @name MsgFollowThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFollowThreadResponse
 */
export interface MsgFollowThreadResponse {}
export interface MsgFollowThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgFollowThreadResponse";
  value: Uint8Array;
}
/**
 * MsgFollowThreadResponse defines the MsgFollowThreadResponse message.
 * @name MsgFollowThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFollowThreadResponse
 */
export interface MsgFollowThreadResponseAmino {}
export interface MsgFollowThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgFollowThreadResponse";
  value: MsgFollowThreadResponseAmino;
}
/**
 * MsgUnfollowThread defines the MsgUnfollowThread message.
 * @name MsgUnfollowThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnfollowThread
 */
export interface MsgUnfollowThread {
  creator: string;
  threadId: bigint;
}
export interface MsgUnfollowThreadProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnfollowThread";
  value: Uint8Array;
}
/**
 * MsgUnfollowThread defines the MsgUnfollowThread message.
 * @name MsgUnfollowThreadAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnfollowThread
 */
export interface MsgUnfollowThreadAmino {
  creator?: string;
  thread_id?: string;
}
export interface MsgUnfollowThreadAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnfollowThread";
  value: MsgUnfollowThreadAmino;
}
/**
 * MsgUnfollowThreadResponse defines the MsgUnfollowThreadResponse message.
 * @name MsgUnfollowThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnfollowThreadResponse
 */
export interface MsgUnfollowThreadResponse {}
export interface MsgUnfollowThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnfollowThreadResponse";
  value: Uint8Array;
}
/**
 * MsgUnfollowThreadResponse defines the MsgUnfollowThreadResponse message.
 * @name MsgUnfollowThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnfollowThreadResponse
 */
export interface MsgUnfollowThreadResponseAmino {}
export interface MsgUnfollowThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnfollowThreadResponse";
  value: MsgUnfollowThreadResponseAmino;
}
/**
 * MsgUpvotePost defines the MsgUpvotePost message.
 * @name MsgUpvotePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpvotePost
 */
export interface MsgUpvotePost {
  creator: string;
  postId: bigint;
}
export interface MsgUpvotePostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUpvotePost";
  value: Uint8Array;
}
/**
 * MsgUpvotePost defines the MsgUpvotePost message.
 * @name MsgUpvotePostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpvotePost
 */
export interface MsgUpvotePostAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgUpvotePostAminoMsg {
  type: "/sparkdream.forum.v1.MsgUpvotePost";
  value: MsgUpvotePostAmino;
}
/**
 * MsgUpvotePostResponse defines the MsgUpvotePostResponse message.
 * @name MsgUpvotePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpvotePostResponse
 */
export interface MsgUpvotePostResponse {}
export interface MsgUpvotePostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUpvotePostResponse";
  value: Uint8Array;
}
/**
 * MsgUpvotePostResponse defines the MsgUpvotePostResponse message.
 * @name MsgUpvotePostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpvotePostResponse
 */
export interface MsgUpvotePostResponseAmino {}
export interface MsgUpvotePostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUpvotePostResponse";
  value: MsgUpvotePostResponseAmino;
}
/**
 * MsgDownvotePost defines the MsgDownvotePost message.
 * @name MsgDownvotePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDownvotePost
 */
export interface MsgDownvotePost {
  creator: string;
  postId: bigint;
}
export interface MsgDownvotePostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDownvotePost";
  value: Uint8Array;
}
/**
 * MsgDownvotePost defines the MsgDownvotePost message.
 * @name MsgDownvotePostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDownvotePost
 */
export interface MsgDownvotePostAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgDownvotePostAminoMsg {
  type: "/sparkdream.forum.v1.MsgDownvotePost";
  value: MsgDownvotePostAmino;
}
/**
 * MsgDownvotePostResponse defines the MsgDownvotePostResponse message.
 * @name MsgDownvotePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDownvotePostResponse
 */
export interface MsgDownvotePostResponse {}
export interface MsgDownvotePostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDownvotePostResponse";
  value: Uint8Array;
}
/**
 * MsgDownvotePostResponse defines the MsgDownvotePostResponse message.
 * @name MsgDownvotePostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDownvotePostResponse
 */
export interface MsgDownvotePostResponseAmino {}
export interface MsgDownvotePostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgDownvotePostResponse";
  value: MsgDownvotePostResponseAmino;
}
/**
 * MsgFlagPost defines the MsgFlagPost message.
 * @name MsgFlagPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFlagPost
 */
export interface MsgFlagPost {
  creator: string;
  postId: bigint;
  category: bigint;
  reason: string;
}
export interface MsgFlagPostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgFlagPost";
  value: Uint8Array;
}
/**
 * MsgFlagPost defines the MsgFlagPost message.
 * @name MsgFlagPostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFlagPost
 */
export interface MsgFlagPostAmino {
  creator?: string;
  post_id?: string;
  category?: string;
  reason?: string;
}
export interface MsgFlagPostAminoMsg {
  type: "/sparkdream.forum.v1.MsgFlagPost";
  value: MsgFlagPostAmino;
}
/**
 * MsgFlagPostResponse defines the MsgFlagPostResponse message.
 * @name MsgFlagPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFlagPostResponse
 */
export interface MsgFlagPostResponse {}
export interface MsgFlagPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgFlagPostResponse";
  value: Uint8Array;
}
/**
 * MsgFlagPostResponse defines the MsgFlagPostResponse message.
 * @name MsgFlagPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFlagPostResponse
 */
export interface MsgFlagPostResponseAmino {}
export interface MsgFlagPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgFlagPostResponse";
  value: MsgFlagPostResponseAmino;
}
/**
 * MsgDismissFlags defines the MsgDismissFlags message.
 * @name MsgDismissFlags
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDismissFlags
 */
export interface MsgDismissFlags {
  creator: string;
  postId: bigint;
  reason: string;
}
export interface MsgDismissFlagsProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDismissFlags";
  value: Uint8Array;
}
/**
 * MsgDismissFlags defines the MsgDismissFlags message.
 * @name MsgDismissFlagsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDismissFlags
 */
export interface MsgDismissFlagsAmino {
  creator?: string;
  post_id?: string;
  reason?: string;
}
export interface MsgDismissFlagsAminoMsg {
  type: "/sparkdream.forum.v1.MsgDismissFlags";
  value: MsgDismissFlagsAmino;
}
/**
 * MsgDismissFlagsResponse defines the MsgDismissFlagsResponse message.
 * @name MsgDismissFlagsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDismissFlagsResponse
 */
export interface MsgDismissFlagsResponse {}
export interface MsgDismissFlagsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDismissFlagsResponse";
  value: Uint8Array;
}
/**
 * MsgDismissFlagsResponse defines the MsgDismissFlagsResponse message.
 * @name MsgDismissFlagsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDismissFlagsResponse
 */
export interface MsgDismissFlagsResponseAmino {}
export interface MsgDismissFlagsResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgDismissFlagsResponse";
  value: MsgDismissFlagsResponseAmino;
}
/**
 * MsgHidePost defines the MsgHidePost message.
 * @name MsgHidePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgHidePost
 */
export interface MsgHidePost {
  creator: string;
  postId: bigint;
  reasonCode: bigint;
  reasonText: string;
}
export interface MsgHidePostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgHidePost";
  value: Uint8Array;
}
/**
 * MsgHidePost defines the MsgHidePost message.
 * @name MsgHidePostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgHidePost
 */
export interface MsgHidePostAmino {
  creator?: string;
  post_id?: string;
  reason_code?: string;
  reason_text?: string;
}
export interface MsgHidePostAminoMsg {
  type: "/sparkdream.forum.v1.MsgHidePost";
  value: MsgHidePostAmino;
}
/**
 * MsgHidePostResponse defines the MsgHidePostResponse message.
 * @name MsgHidePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgHidePostResponse
 */
export interface MsgHidePostResponse {}
export interface MsgHidePostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgHidePostResponse";
  value: Uint8Array;
}
/**
 * MsgHidePostResponse defines the MsgHidePostResponse message.
 * @name MsgHidePostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgHidePostResponse
 */
export interface MsgHidePostResponseAmino {}
export interface MsgHidePostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgHidePostResponse";
  value: MsgHidePostResponseAmino;
}
/**
 * MsgAppealPost defines the MsgAppealPost message.
 * @name MsgAppealPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealPost
 */
export interface MsgAppealPost {
  creator: string;
  postId: bigint;
}
export interface MsgAppealPostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealPost";
  value: Uint8Array;
}
/**
 * MsgAppealPost defines the MsgAppealPost message.
 * @name MsgAppealPostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealPost
 */
export interface MsgAppealPostAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgAppealPostAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealPost";
  value: MsgAppealPostAmino;
}
/**
 * MsgAppealPostResponse defines the MsgAppealPostResponse message.
 * @name MsgAppealPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealPostResponse
 */
export interface MsgAppealPostResponse {}
export interface MsgAppealPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealPostResponse";
  value: Uint8Array;
}
/**
 * MsgAppealPostResponse defines the MsgAppealPostResponse message.
 * @name MsgAppealPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealPostResponse
 */
export interface MsgAppealPostResponseAmino {}
export interface MsgAppealPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealPostResponse";
  value: MsgAppealPostResponseAmino;
}
/**
 * MsgAppealThreadLock defines the MsgAppealThreadLock message.
 * @name MsgAppealThreadLock
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadLock
 */
export interface MsgAppealThreadLock {
  creator: string;
  rootId: bigint;
}
export interface MsgAppealThreadLockProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLock";
  value: Uint8Array;
}
/**
 * MsgAppealThreadLock defines the MsgAppealThreadLock message.
 * @name MsgAppealThreadLockAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadLock
 */
export interface MsgAppealThreadLockAmino {
  creator?: string;
  root_id?: string;
}
export interface MsgAppealThreadLockAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealThreadLock";
  value: MsgAppealThreadLockAmino;
}
/**
 * MsgAppealThreadLockResponse defines the MsgAppealThreadLockResponse message.
 * @name MsgAppealThreadLockResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadLockResponse
 */
export interface MsgAppealThreadLockResponse {}
export interface MsgAppealThreadLockResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLockResponse";
  value: Uint8Array;
}
/**
 * MsgAppealThreadLockResponse defines the MsgAppealThreadLockResponse message.
 * @name MsgAppealThreadLockResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadLockResponse
 */
export interface MsgAppealThreadLockResponseAmino {}
export interface MsgAppealThreadLockResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealThreadLockResponse";
  value: MsgAppealThreadLockResponseAmino;
}
/**
 * MsgAppealThreadMove defines the MsgAppealThreadMove message.
 * @name MsgAppealThreadMove
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadMove
 */
export interface MsgAppealThreadMove {
  creator: string;
  rootId: bigint;
}
export interface MsgAppealThreadMoveProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMove";
  value: Uint8Array;
}
/**
 * MsgAppealThreadMove defines the MsgAppealThreadMove message.
 * @name MsgAppealThreadMoveAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadMove
 */
export interface MsgAppealThreadMoveAmino {
  creator?: string;
  root_id?: string;
}
export interface MsgAppealThreadMoveAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealThreadMove";
  value: MsgAppealThreadMoveAmino;
}
/**
 * MsgAppealThreadMoveResponse defines the MsgAppealThreadMoveResponse message.
 * @name MsgAppealThreadMoveResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadMoveResponse
 */
export interface MsgAppealThreadMoveResponse {}
export interface MsgAppealThreadMoveResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMoveResponse";
  value: Uint8Array;
}
/**
 * MsgAppealThreadMoveResponse defines the MsgAppealThreadMoveResponse message.
 * @name MsgAppealThreadMoveResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadMoveResponse
 */
export interface MsgAppealThreadMoveResponseAmino {}
export interface MsgAppealThreadMoveResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealThreadMoveResponse";
  value: MsgAppealThreadMoveResponseAmino;
}
/**
 * MsgCreateBounty defines the MsgCreateBounty message.
 * @name MsgCreateBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateBounty
 */
export interface MsgCreateBounty {
  creator: string;
  threadId: bigint;
  amount: string;
  duration: bigint;
}
export interface MsgCreateBountyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreateBounty";
  value: Uint8Array;
}
/**
 * MsgCreateBounty defines the MsgCreateBounty message.
 * @name MsgCreateBountyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateBounty
 */
export interface MsgCreateBountyAmino {
  creator?: string;
  thread_id?: string;
  amount?: string;
  duration?: string;
}
export interface MsgCreateBountyAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreateBounty";
  value: MsgCreateBountyAmino;
}
/**
 * MsgCreateBountyResponse defines the MsgCreateBountyResponse message.
 * @name MsgCreateBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateBountyResponse
 */
export interface MsgCreateBountyResponse {}
export interface MsgCreateBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreateBountyResponse";
  value: Uint8Array;
}
/**
 * MsgCreateBountyResponse defines the MsgCreateBountyResponse message.
 * @name MsgCreateBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateBountyResponse
 */
export interface MsgCreateBountyResponseAmino {}
export interface MsgCreateBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreateBountyResponse";
  value: MsgCreateBountyResponseAmino;
}
/**
 * MsgAwardBounty defines the MsgAwardBounty message.
 * @name MsgAwardBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardBounty
 */
export interface MsgAwardBounty {
  creator: string;
  bountyId: bigint;
}
export interface MsgAwardBountyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAwardBounty";
  value: Uint8Array;
}
/**
 * MsgAwardBounty defines the MsgAwardBounty message.
 * @name MsgAwardBountyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardBounty
 */
export interface MsgAwardBountyAmino {
  creator?: string;
  bounty_id?: string;
}
export interface MsgAwardBountyAminoMsg {
  type: "/sparkdream.forum.v1.MsgAwardBounty";
  value: MsgAwardBountyAmino;
}
/**
 * MsgAwardBountyResponse defines the MsgAwardBountyResponse message.
 * @name MsgAwardBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardBountyResponse
 */
export interface MsgAwardBountyResponse {}
export interface MsgAwardBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAwardBountyResponse";
  value: Uint8Array;
}
/**
 * MsgAwardBountyResponse defines the MsgAwardBountyResponse message.
 * @name MsgAwardBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardBountyResponse
 */
export interface MsgAwardBountyResponseAmino {}
export interface MsgAwardBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAwardBountyResponse";
  value: MsgAwardBountyResponseAmino;
}
/**
 * MsgIncreaseBounty defines the MsgIncreaseBounty message.
 * @name MsgIncreaseBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgIncreaseBounty
 */
export interface MsgIncreaseBounty {
  creator: string;
  bountyId: bigint;
  additionalAmount: string;
}
export interface MsgIncreaseBountyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgIncreaseBounty";
  value: Uint8Array;
}
/**
 * MsgIncreaseBounty defines the MsgIncreaseBounty message.
 * @name MsgIncreaseBountyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgIncreaseBounty
 */
export interface MsgIncreaseBountyAmino {
  creator?: string;
  bounty_id?: string;
  additional_amount?: string;
}
export interface MsgIncreaseBountyAminoMsg {
  type: "/sparkdream.forum.v1.MsgIncreaseBounty";
  value: MsgIncreaseBountyAmino;
}
/**
 * MsgIncreaseBountyResponse defines the MsgIncreaseBountyResponse message.
 * @name MsgIncreaseBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgIncreaseBountyResponse
 */
export interface MsgIncreaseBountyResponse {}
export interface MsgIncreaseBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgIncreaseBountyResponse";
  value: Uint8Array;
}
/**
 * MsgIncreaseBountyResponse defines the MsgIncreaseBountyResponse message.
 * @name MsgIncreaseBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgIncreaseBountyResponse
 */
export interface MsgIncreaseBountyResponseAmino {}
export interface MsgIncreaseBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgIncreaseBountyResponse";
  value: MsgIncreaseBountyResponseAmino;
}
/**
 * MsgCancelBounty defines the MsgCancelBounty message.
 * @name MsgCancelBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCancelBounty
 */
export interface MsgCancelBounty {
  creator: string;
  bountyId: bigint;
}
export interface MsgCancelBountyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCancelBounty";
  value: Uint8Array;
}
/**
 * MsgCancelBounty defines the MsgCancelBounty message.
 * @name MsgCancelBountyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCancelBounty
 */
export interface MsgCancelBountyAmino {
  creator?: string;
  bounty_id?: string;
}
export interface MsgCancelBountyAminoMsg {
  type: "/sparkdream.forum.v1.MsgCancelBounty";
  value: MsgCancelBountyAmino;
}
/**
 * MsgCancelBountyResponse defines the MsgCancelBountyResponse message.
 * @name MsgCancelBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCancelBountyResponse
 */
export interface MsgCancelBountyResponse {}
export interface MsgCancelBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCancelBountyResponse";
  value: Uint8Array;
}
/**
 * MsgCancelBountyResponse defines the MsgCancelBountyResponse message.
 * @name MsgCancelBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCancelBountyResponse
 */
export interface MsgCancelBountyResponseAmino {}
export interface MsgCancelBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgCancelBountyResponse";
  value: MsgCancelBountyResponseAmino;
}
/**
 * MsgAssignBountyToReply defines the MsgAssignBountyToReply message.
 * @name MsgAssignBountyToReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAssignBountyToReply
 */
export interface MsgAssignBountyToReply {
  creator: string;
  threadId: bigint;
  replyId: bigint;
  reason: string;
}
export interface MsgAssignBountyToReplyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReply";
  value: Uint8Array;
}
/**
 * MsgAssignBountyToReply defines the MsgAssignBountyToReply message.
 * @name MsgAssignBountyToReplyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAssignBountyToReply
 */
export interface MsgAssignBountyToReplyAmino {
  creator?: string;
  thread_id?: string;
  reply_id?: string;
  reason?: string;
}
export interface MsgAssignBountyToReplyAminoMsg {
  type: "/sparkdream.forum.v1.MsgAssignBountyToReply";
  value: MsgAssignBountyToReplyAmino;
}
/**
 * MsgAssignBountyToReplyResponse defines the MsgAssignBountyToReplyResponse message.
 * @name MsgAssignBountyToReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAssignBountyToReplyResponse
 */
export interface MsgAssignBountyToReplyResponse {}
export interface MsgAssignBountyToReplyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReplyResponse";
  value: Uint8Array;
}
/**
 * MsgAssignBountyToReplyResponse defines the MsgAssignBountyToReplyResponse message.
 * @name MsgAssignBountyToReplyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAssignBountyToReplyResponse
 */
export interface MsgAssignBountyToReplyResponseAmino {}
export interface MsgAssignBountyToReplyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAssignBountyToReplyResponse";
  value: MsgAssignBountyToReplyResponseAmino;
}
/**
 * MsgCreateTagBudget defines the MsgCreateTagBudget message.
 * @name MsgCreateTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateTagBudget
 */
export interface MsgCreateTagBudget {
  creator: string;
  tag: string;
  initialPool: string;
  membersOnly: boolean;
}
export interface MsgCreateTagBudgetProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudget";
  value: Uint8Array;
}
/**
 * MsgCreateTagBudget defines the MsgCreateTagBudget message.
 * @name MsgCreateTagBudgetAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateTagBudget
 */
export interface MsgCreateTagBudgetAmino {
  creator?: string;
  tag?: string;
  initial_pool?: string;
  members_only?: boolean;
}
export interface MsgCreateTagBudgetAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreateTagBudget";
  value: MsgCreateTagBudgetAmino;
}
/**
 * MsgCreateTagBudgetResponse defines the MsgCreateTagBudgetResponse message.
 * @name MsgCreateTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateTagBudgetResponse
 */
export interface MsgCreateTagBudgetResponse {}
export interface MsgCreateTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgCreateTagBudgetResponse defines the MsgCreateTagBudgetResponse message.
 * @name MsgCreateTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateTagBudgetResponse
 */
export interface MsgCreateTagBudgetResponseAmino {}
export interface MsgCreateTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgCreateTagBudgetResponse";
  value: MsgCreateTagBudgetResponseAmino;
}
/**
 * MsgAwardFromTagBudget defines the MsgAwardFromTagBudget message.
 * @name MsgAwardFromTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardFromTagBudget
 */
export interface MsgAwardFromTagBudget {
  creator: string;
  budgetId: bigint;
  postId: bigint;
  amount: string;
  reason: string;
}
export interface MsgAwardFromTagBudgetProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudget";
  value: Uint8Array;
}
/**
 * MsgAwardFromTagBudget defines the MsgAwardFromTagBudget message.
 * @name MsgAwardFromTagBudgetAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardFromTagBudget
 */
export interface MsgAwardFromTagBudgetAmino {
  creator?: string;
  budget_id?: string;
  post_id?: string;
  amount?: string;
  reason?: string;
}
export interface MsgAwardFromTagBudgetAminoMsg {
  type: "/sparkdream.forum.v1.MsgAwardFromTagBudget";
  value: MsgAwardFromTagBudgetAmino;
}
/**
 * MsgAwardFromTagBudgetResponse defines the MsgAwardFromTagBudgetResponse message.
 * @name MsgAwardFromTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardFromTagBudgetResponse
 */
export interface MsgAwardFromTagBudgetResponse {}
export interface MsgAwardFromTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgAwardFromTagBudgetResponse defines the MsgAwardFromTagBudgetResponse message.
 * @name MsgAwardFromTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardFromTagBudgetResponse
 */
export interface MsgAwardFromTagBudgetResponseAmino {}
export interface MsgAwardFromTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAwardFromTagBudgetResponse";
  value: MsgAwardFromTagBudgetResponseAmino;
}
/**
 * MsgTopUpTagBudget defines the MsgTopUpTagBudget message.
 * @name MsgTopUpTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgTopUpTagBudget
 */
export interface MsgTopUpTagBudget {
  creator: string;
  budgetId: bigint;
  amount: string;
}
export interface MsgTopUpTagBudgetProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudget";
  value: Uint8Array;
}
/**
 * MsgTopUpTagBudget defines the MsgTopUpTagBudget message.
 * @name MsgTopUpTagBudgetAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgTopUpTagBudget
 */
export interface MsgTopUpTagBudgetAmino {
  creator?: string;
  budget_id?: string;
  amount?: string;
}
export interface MsgTopUpTagBudgetAminoMsg {
  type: "/sparkdream.forum.v1.MsgTopUpTagBudget";
  value: MsgTopUpTagBudgetAmino;
}
/**
 * MsgTopUpTagBudgetResponse defines the MsgTopUpTagBudgetResponse message.
 * @name MsgTopUpTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgTopUpTagBudgetResponse
 */
export interface MsgTopUpTagBudgetResponse {}
export interface MsgTopUpTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgTopUpTagBudgetResponse defines the MsgTopUpTagBudgetResponse message.
 * @name MsgTopUpTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgTopUpTagBudgetResponse
 */
export interface MsgTopUpTagBudgetResponseAmino {}
export interface MsgTopUpTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgTopUpTagBudgetResponse";
  value: MsgTopUpTagBudgetResponseAmino;
}
/**
 * MsgToggleTagBudget defines the MsgToggleTagBudget message.
 * @name MsgToggleTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgToggleTagBudget
 */
export interface MsgToggleTagBudget {
  creator: string;
  budgetId: bigint;
  active: boolean;
}
export interface MsgToggleTagBudgetProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudget";
  value: Uint8Array;
}
/**
 * MsgToggleTagBudget defines the MsgToggleTagBudget message.
 * @name MsgToggleTagBudgetAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgToggleTagBudget
 */
export interface MsgToggleTagBudgetAmino {
  creator?: string;
  budget_id?: string;
  active?: boolean;
}
export interface MsgToggleTagBudgetAminoMsg {
  type: "/sparkdream.forum.v1.MsgToggleTagBudget";
  value: MsgToggleTagBudgetAmino;
}
/**
 * MsgToggleTagBudgetResponse defines the MsgToggleTagBudgetResponse message.
 * @name MsgToggleTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgToggleTagBudgetResponse
 */
export interface MsgToggleTagBudgetResponse {}
export interface MsgToggleTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgToggleTagBudgetResponse defines the MsgToggleTagBudgetResponse message.
 * @name MsgToggleTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgToggleTagBudgetResponse
 */
export interface MsgToggleTagBudgetResponseAmino {}
export interface MsgToggleTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgToggleTagBudgetResponse";
  value: MsgToggleTagBudgetResponseAmino;
}
/**
 * MsgWithdrawTagBudget defines the MsgWithdrawTagBudget message.
 * @name MsgWithdrawTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgWithdrawTagBudget
 */
export interface MsgWithdrawTagBudget {
  creator: string;
  budgetId: bigint;
}
export interface MsgWithdrawTagBudgetProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudget";
  value: Uint8Array;
}
/**
 * MsgWithdrawTagBudget defines the MsgWithdrawTagBudget message.
 * @name MsgWithdrawTagBudgetAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgWithdrawTagBudget
 */
export interface MsgWithdrawTagBudgetAmino {
  creator?: string;
  budget_id?: string;
}
export interface MsgWithdrawTagBudgetAminoMsg {
  type: "/sparkdream.forum.v1.MsgWithdrawTagBudget";
  value: MsgWithdrawTagBudgetAmino;
}
/**
 * MsgWithdrawTagBudgetResponse defines the MsgWithdrawTagBudgetResponse message.
 * @name MsgWithdrawTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgWithdrawTagBudgetResponse
 */
export interface MsgWithdrawTagBudgetResponse {}
export interface MsgWithdrawTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawTagBudgetResponse defines the MsgWithdrawTagBudgetResponse message.
 * @name MsgWithdrawTagBudgetResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgWithdrawTagBudgetResponse
 */
export interface MsgWithdrawTagBudgetResponseAmino {}
export interface MsgWithdrawTagBudgetResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgWithdrawTagBudgetResponse";
  value: MsgWithdrawTagBudgetResponseAmino;
}
/**
 * MsgPinReply defines the MsgPinReply message.
 * @name MsgPinReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinReply
 */
export interface MsgPinReply {
  creator: string;
  threadId: bigint;
  replyId: bigint;
}
export interface MsgPinReplyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgPinReply";
  value: Uint8Array;
}
/**
 * MsgPinReply defines the MsgPinReply message.
 * @name MsgPinReplyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinReply
 */
export interface MsgPinReplyAmino {
  creator?: string;
  thread_id?: string;
  reply_id?: string;
}
export interface MsgPinReplyAminoMsg {
  type: "/sparkdream.forum.v1.MsgPinReply";
  value: MsgPinReplyAmino;
}
/**
 * MsgPinReplyResponse defines the MsgPinReplyResponse message.
 * @name MsgPinReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinReplyResponse
 */
export interface MsgPinReplyResponse {}
export interface MsgPinReplyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgPinReplyResponse";
  value: Uint8Array;
}
/**
 * MsgPinReplyResponse defines the MsgPinReplyResponse message.
 * @name MsgPinReplyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinReplyResponse
 */
export interface MsgPinReplyResponseAmino {}
export interface MsgPinReplyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgPinReplyResponse";
  value: MsgPinReplyResponseAmino;
}
/**
 * MsgUnpinReply defines the MsgUnpinReply message.
 * @name MsgUnpinReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinReply
 */
export interface MsgUnpinReply {
  creator: string;
  threadId: bigint;
  replyId: bigint;
}
export interface MsgUnpinReplyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinReply";
  value: Uint8Array;
}
/**
 * MsgUnpinReply defines the MsgUnpinReply message.
 * @name MsgUnpinReplyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinReply
 */
export interface MsgUnpinReplyAmino {
  creator?: string;
  thread_id?: string;
  reply_id?: string;
}
export interface MsgUnpinReplyAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnpinReply";
  value: MsgUnpinReplyAmino;
}
/**
 * MsgUnpinReplyResponse defines the MsgUnpinReplyResponse message.
 * @name MsgUnpinReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinReplyResponse
 */
export interface MsgUnpinReplyResponse {}
export interface MsgUnpinReplyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinReplyResponse";
  value: Uint8Array;
}
/**
 * MsgUnpinReplyResponse defines the MsgUnpinReplyResponse message.
 * @name MsgUnpinReplyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinReplyResponse
 */
export interface MsgUnpinReplyResponseAmino {}
export interface MsgUnpinReplyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnpinReplyResponse";
  value: MsgUnpinReplyResponseAmino;
}
/**
 * MsgDisputePin defines the MsgDisputePin message.
 * @name MsgDisputePin
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDisputePin
 */
export interface MsgDisputePin {
  creator: string;
  threadId: bigint;
  replyId: bigint;
  reason: string;
}
export interface MsgDisputePinProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDisputePin";
  value: Uint8Array;
}
/**
 * MsgDisputePin defines the MsgDisputePin message.
 * @name MsgDisputePinAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDisputePin
 */
export interface MsgDisputePinAmino {
  creator?: string;
  thread_id?: string;
  reply_id?: string;
  reason?: string;
}
export interface MsgDisputePinAminoMsg {
  type: "/sparkdream.forum.v1.MsgDisputePin";
  value: MsgDisputePinAmino;
}
/**
 * MsgDisputePinResponse defines the MsgDisputePinResponse message.
 * @name MsgDisputePinResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDisputePinResponse
 */
export interface MsgDisputePinResponse {}
export interface MsgDisputePinResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDisputePinResponse";
  value: Uint8Array;
}
/**
 * MsgDisputePinResponse defines the MsgDisputePinResponse message.
 * @name MsgDisputePinResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDisputePinResponse
 */
export interface MsgDisputePinResponseAmino {}
export interface MsgDisputePinResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgDisputePinResponse";
  value: MsgDisputePinResponseAmino;
}
/**
 * MsgMarkAcceptedReply defines the MsgMarkAcceptedReply message.
 * @name MsgMarkAcceptedReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMarkAcceptedReply
 */
export interface MsgMarkAcceptedReply {
  creator: string;
  threadId: bigint;
  replyId: bigint;
}
export interface MsgMarkAcceptedReplyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReply";
  value: Uint8Array;
}
/**
 * MsgMarkAcceptedReply defines the MsgMarkAcceptedReply message.
 * @name MsgMarkAcceptedReplyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMarkAcceptedReply
 */
export interface MsgMarkAcceptedReplyAmino {
  creator?: string;
  thread_id?: string;
  reply_id?: string;
}
export interface MsgMarkAcceptedReplyAminoMsg {
  type: "/sparkdream.forum.v1.MsgMarkAcceptedReply";
  value: MsgMarkAcceptedReplyAmino;
}
/**
 * MsgMarkAcceptedReplyResponse defines the MsgMarkAcceptedReplyResponse message.
 * @name MsgMarkAcceptedReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMarkAcceptedReplyResponse
 */
export interface MsgMarkAcceptedReplyResponse {}
export interface MsgMarkAcceptedReplyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReplyResponse";
  value: Uint8Array;
}
/**
 * MsgMarkAcceptedReplyResponse defines the MsgMarkAcceptedReplyResponse message.
 * @name MsgMarkAcceptedReplyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMarkAcceptedReplyResponse
 */
export interface MsgMarkAcceptedReplyResponseAmino {}
export interface MsgMarkAcceptedReplyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgMarkAcceptedReplyResponse";
  value: MsgMarkAcceptedReplyResponseAmino;
}
/**
 * MsgConfirmProposedReply defines the MsgConfirmProposedReply message.
 * @name MsgConfirmProposedReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgConfirmProposedReply
 */
export interface MsgConfirmProposedReply {
  creator: string;
  threadId: bigint;
}
export interface MsgConfirmProposedReplyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReply";
  value: Uint8Array;
}
/**
 * MsgConfirmProposedReply defines the MsgConfirmProposedReply message.
 * @name MsgConfirmProposedReplyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgConfirmProposedReply
 */
export interface MsgConfirmProposedReplyAmino {
  creator?: string;
  thread_id?: string;
}
export interface MsgConfirmProposedReplyAminoMsg {
  type: "/sparkdream.forum.v1.MsgConfirmProposedReply";
  value: MsgConfirmProposedReplyAmino;
}
/**
 * MsgConfirmProposedReplyResponse defines the MsgConfirmProposedReplyResponse message.
 * @name MsgConfirmProposedReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgConfirmProposedReplyResponse
 */
export interface MsgConfirmProposedReplyResponse {}
export interface MsgConfirmProposedReplyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReplyResponse";
  value: Uint8Array;
}
/**
 * MsgConfirmProposedReplyResponse defines the MsgConfirmProposedReplyResponse message.
 * @name MsgConfirmProposedReplyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgConfirmProposedReplyResponse
 */
export interface MsgConfirmProposedReplyResponseAmino {}
export interface MsgConfirmProposedReplyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgConfirmProposedReplyResponse";
  value: MsgConfirmProposedReplyResponseAmino;
}
/**
 * MsgRejectProposedReply defines the MsgRejectProposedReply message.
 * @name MsgRejectProposedReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgRejectProposedReply
 */
export interface MsgRejectProposedReply {
  creator: string;
  threadId: bigint;
  reason: string;
}
export interface MsgRejectProposedReplyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReply";
  value: Uint8Array;
}
/**
 * MsgRejectProposedReply defines the MsgRejectProposedReply message.
 * @name MsgRejectProposedReplyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgRejectProposedReply
 */
export interface MsgRejectProposedReplyAmino {
  creator?: string;
  thread_id?: string;
  reason?: string;
}
export interface MsgRejectProposedReplyAminoMsg {
  type: "/sparkdream.forum.v1.MsgRejectProposedReply";
  value: MsgRejectProposedReplyAmino;
}
/**
 * MsgRejectProposedReplyResponse defines the MsgRejectProposedReplyResponse message.
 * @name MsgRejectProposedReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgRejectProposedReplyResponse
 */
export interface MsgRejectProposedReplyResponse {}
export interface MsgRejectProposedReplyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReplyResponse";
  value: Uint8Array;
}
/**
 * MsgRejectProposedReplyResponse defines the MsgRejectProposedReplyResponse message.
 * @name MsgRejectProposedReplyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgRejectProposedReplyResponse
 */
export interface MsgRejectProposedReplyResponseAmino {}
export interface MsgRejectProposedReplyResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgRejectProposedReplyResponse";
  value: MsgRejectProposedReplyResponseAmino;
}
/**
 * MsgSetForumPaused defines the MsgSetForumPaused message.
 * @name MsgSetForumPaused
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetForumPaused
 */
export interface MsgSetForumPaused {
  creator: string;
  paused: boolean;
}
export interface MsgSetForumPausedProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgSetForumPaused";
  value: Uint8Array;
}
/**
 * MsgSetForumPaused defines the MsgSetForumPaused message.
 * @name MsgSetForumPausedAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetForumPaused
 */
export interface MsgSetForumPausedAmino {
  creator?: string;
  paused?: boolean;
}
export interface MsgSetForumPausedAminoMsg {
  type: "/sparkdream.forum.v1.MsgSetForumPaused";
  value: MsgSetForumPausedAmino;
}
/**
 * MsgSetForumPausedResponse defines the MsgSetForumPausedResponse message.
 * @name MsgSetForumPausedResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetForumPausedResponse
 */
export interface MsgSetForumPausedResponse {}
export interface MsgSetForumPausedResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgSetForumPausedResponse";
  value: Uint8Array;
}
/**
 * MsgSetForumPausedResponse defines the MsgSetForumPausedResponse message.
 * @name MsgSetForumPausedResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetForumPausedResponse
 */
export interface MsgSetForumPausedResponseAmino {}
export interface MsgSetForumPausedResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgSetForumPausedResponse";
  value: MsgSetForumPausedResponseAmino;
}
/**
 * MsgSetModerationPaused defines the MsgSetModerationPaused message.
 * @name MsgSetModerationPaused
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetModerationPaused
 */
export interface MsgSetModerationPaused {
  creator: string;
  paused: boolean;
}
export interface MsgSetModerationPausedProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgSetModerationPaused";
  value: Uint8Array;
}
/**
 * MsgSetModerationPaused defines the MsgSetModerationPaused message.
 * @name MsgSetModerationPausedAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetModerationPaused
 */
export interface MsgSetModerationPausedAmino {
  creator?: string;
  paused?: boolean;
}
export interface MsgSetModerationPausedAminoMsg {
  type: "/sparkdream.forum.v1.MsgSetModerationPaused";
  value: MsgSetModerationPausedAmino;
}
/**
 * MsgSetModerationPausedResponse defines the MsgSetModerationPausedResponse message.
 * @name MsgSetModerationPausedResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetModerationPausedResponse
 */
export interface MsgSetModerationPausedResponse {}
export interface MsgSetModerationPausedResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgSetModerationPausedResponse";
  value: Uint8Array;
}
/**
 * MsgSetModerationPausedResponse defines the MsgSetModerationPausedResponse message.
 * @name MsgSetModerationPausedResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetModerationPausedResponse
 */
export interface MsgSetModerationPausedResponseAmino {}
export interface MsgSetModerationPausedResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgSetModerationPausedResponse";
  value: MsgSetModerationPausedResponseAmino;
}
/**
 * MsgReportTag defines the MsgReportTag message.
 * @name MsgReportTag
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportTag
 */
export interface MsgReportTag {
  creator: string;
  tagName: string;
  reason: string;
}
export interface MsgReportTagProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgReportTag";
  value: Uint8Array;
}
/**
 * MsgReportTag defines the MsgReportTag message.
 * @name MsgReportTagAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportTag
 */
export interface MsgReportTagAmino {
  creator?: string;
  tag_name?: string;
  reason?: string;
}
export interface MsgReportTagAminoMsg {
  type: "/sparkdream.forum.v1.MsgReportTag";
  value: MsgReportTagAmino;
}
/**
 * MsgReportTagResponse defines the MsgReportTagResponse message.
 * @name MsgReportTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportTagResponse
 */
export interface MsgReportTagResponse {}
export interface MsgReportTagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgReportTagResponse";
  value: Uint8Array;
}
/**
 * MsgReportTagResponse defines the MsgReportTagResponse message.
 * @name MsgReportTagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportTagResponse
 */
export interface MsgReportTagResponseAmino {}
export interface MsgReportTagResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgReportTagResponse";
  value: MsgReportTagResponseAmino;
}
/**
 * MsgResolveTagReport defines the MsgResolveTagReport message.
 * @name MsgResolveTagReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveTagReport
 */
export interface MsgResolveTagReport {
  creator: string;
  tagName: string;
  action: bigint;
  reserveAuthority: string;
  reserveMembersCanUse: boolean;
}
export interface MsgResolveTagReportProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgResolveTagReport";
  value: Uint8Array;
}
/**
 * MsgResolveTagReport defines the MsgResolveTagReport message.
 * @name MsgResolveTagReportAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveTagReport
 */
export interface MsgResolveTagReportAmino {
  creator?: string;
  tag_name?: string;
  action?: string;
  reserve_authority?: string;
  reserve_members_can_use?: boolean;
}
export interface MsgResolveTagReportAminoMsg {
  type: "/sparkdream.forum.v1.MsgResolveTagReport";
  value: MsgResolveTagReportAmino;
}
/**
 * MsgResolveTagReportResponse defines the MsgResolveTagReportResponse message.
 * @name MsgResolveTagReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveTagReportResponse
 */
export interface MsgResolveTagReportResponse {}
export interface MsgResolveTagReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgResolveTagReportResponse";
  value: Uint8Array;
}
/**
 * MsgResolveTagReportResponse defines the MsgResolveTagReportResponse message.
 * @name MsgResolveTagReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveTagReportResponse
 */
export interface MsgResolveTagReportResponseAmino {}
export interface MsgResolveTagReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgResolveTagReportResponse";
  value: MsgResolveTagReportResponseAmino;
}
/**
 * MsgBondSentinel defines the MsgBondSentinel message.
 * @name MsgBondSentinel
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgBondSentinel
 */
export interface MsgBondSentinel {
  creator: string;
  amount: string;
}
export interface MsgBondSentinelProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgBondSentinel";
  value: Uint8Array;
}
/**
 * MsgBondSentinel defines the MsgBondSentinel message.
 * @name MsgBondSentinelAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgBondSentinel
 */
export interface MsgBondSentinelAmino {
  creator?: string;
  amount?: string;
}
export interface MsgBondSentinelAminoMsg {
  type: "/sparkdream.forum.v1.MsgBondSentinel";
  value: MsgBondSentinelAmino;
}
/**
 * MsgBondSentinelResponse defines the MsgBondSentinelResponse message.
 * @name MsgBondSentinelResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgBondSentinelResponse
 */
export interface MsgBondSentinelResponse {}
export interface MsgBondSentinelResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgBondSentinelResponse";
  value: Uint8Array;
}
/**
 * MsgBondSentinelResponse defines the MsgBondSentinelResponse message.
 * @name MsgBondSentinelResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgBondSentinelResponse
 */
export interface MsgBondSentinelResponseAmino {}
export interface MsgBondSentinelResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgBondSentinelResponse";
  value: MsgBondSentinelResponseAmino;
}
/**
 * MsgUnbondSentinel defines the MsgUnbondSentinel message.
 * @name MsgUnbondSentinel
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnbondSentinel
 */
export interface MsgUnbondSentinel {
  creator: string;
  amount: string;
}
export interface MsgUnbondSentinelProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinel";
  value: Uint8Array;
}
/**
 * MsgUnbondSentinel defines the MsgUnbondSentinel message.
 * @name MsgUnbondSentinelAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnbondSentinel
 */
export interface MsgUnbondSentinelAmino {
  creator?: string;
  amount?: string;
}
export interface MsgUnbondSentinelAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnbondSentinel";
  value: MsgUnbondSentinelAmino;
}
/**
 * MsgUnbondSentinelResponse defines the MsgUnbondSentinelResponse message.
 * @name MsgUnbondSentinelResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnbondSentinelResponse
 */
export interface MsgUnbondSentinelResponse {}
export interface MsgUnbondSentinelResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinelResponse";
  value: Uint8Array;
}
/**
 * MsgUnbondSentinelResponse defines the MsgUnbondSentinelResponse message.
 * @name MsgUnbondSentinelResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnbondSentinelResponse
 */
export interface MsgUnbondSentinelResponseAmino {}
export interface MsgUnbondSentinelResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnbondSentinelResponse";
  value: MsgUnbondSentinelResponseAmino;
}
/**
 * MsgReportMember defines the MsgReportMember message.
 * @name MsgReportMember
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportMember
 */
export interface MsgReportMember {
  creator: string;
  member: string;
  reason: string;
  recommendedAction: bigint;
}
export interface MsgReportMemberProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgReportMember";
  value: Uint8Array;
}
/**
 * MsgReportMember defines the MsgReportMember message.
 * @name MsgReportMemberAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportMember
 */
export interface MsgReportMemberAmino {
  creator?: string;
  member?: string;
  reason?: string;
  recommended_action?: string;
}
export interface MsgReportMemberAminoMsg {
  type: "/sparkdream.forum.v1.MsgReportMember";
  value: MsgReportMemberAmino;
}
/**
 * MsgReportMemberResponse defines the MsgReportMemberResponse message.
 * @name MsgReportMemberResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportMemberResponse
 */
export interface MsgReportMemberResponse {}
export interface MsgReportMemberResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgReportMemberResponse";
  value: Uint8Array;
}
/**
 * MsgReportMemberResponse defines the MsgReportMemberResponse message.
 * @name MsgReportMemberResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportMemberResponse
 */
export interface MsgReportMemberResponseAmino {}
export interface MsgReportMemberResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgReportMemberResponse";
  value: MsgReportMemberResponseAmino;
}
/**
 * MsgCosignMemberReport defines the MsgCosignMemberReport message.
 * @name MsgCosignMemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCosignMemberReport
 */
export interface MsgCosignMemberReport {
  creator: string;
  member: string;
}
export interface MsgCosignMemberReportProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReport";
  value: Uint8Array;
}
/**
 * MsgCosignMemberReport defines the MsgCosignMemberReport message.
 * @name MsgCosignMemberReportAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCosignMemberReport
 */
export interface MsgCosignMemberReportAmino {
  creator?: string;
  member?: string;
}
export interface MsgCosignMemberReportAminoMsg {
  type: "/sparkdream.forum.v1.MsgCosignMemberReport";
  value: MsgCosignMemberReportAmino;
}
/**
 * MsgCosignMemberReportResponse defines the MsgCosignMemberReportResponse message.
 * @name MsgCosignMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCosignMemberReportResponse
 */
export interface MsgCosignMemberReportResponse {}
export interface MsgCosignMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReportResponse";
  value: Uint8Array;
}
/**
 * MsgCosignMemberReportResponse defines the MsgCosignMemberReportResponse message.
 * @name MsgCosignMemberReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCosignMemberReportResponse
 */
export interface MsgCosignMemberReportResponseAmino {}
export interface MsgCosignMemberReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgCosignMemberReportResponse";
  value: MsgCosignMemberReportResponseAmino;
}
/**
 * MsgResolveMemberReport defines the MsgResolveMemberReport message.
 * @name MsgResolveMemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveMemberReport
 */
export interface MsgResolveMemberReport {
  creator: string;
  member: string;
  action: bigint;
  reason: string;
}
export interface MsgResolveMemberReportProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReport";
  value: Uint8Array;
}
/**
 * MsgResolveMemberReport defines the MsgResolveMemberReport message.
 * @name MsgResolveMemberReportAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveMemberReport
 */
export interface MsgResolveMemberReportAmino {
  creator?: string;
  member?: string;
  action?: string;
  reason?: string;
}
export interface MsgResolveMemberReportAminoMsg {
  type: "/sparkdream.forum.v1.MsgResolveMemberReport";
  value: MsgResolveMemberReportAmino;
}
/**
 * MsgResolveMemberReportResponse defines the MsgResolveMemberReportResponse message.
 * @name MsgResolveMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveMemberReportResponse
 */
export interface MsgResolveMemberReportResponse {}
export interface MsgResolveMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReportResponse";
  value: Uint8Array;
}
/**
 * MsgResolveMemberReportResponse defines the MsgResolveMemberReportResponse message.
 * @name MsgResolveMemberReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveMemberReportResponse
 */
export interface MsgResolveMemberReportResponseAmino {}
export interface MsgResolveMemberReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgResolveMemberReportResponse";
  value: MsgResolveMemberReportResponseAmino;
}
/**
 * MsgDefendMemberReport defines the MsgDefendMemberReport message.
 * @name MsgDefendMemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDefendMemberReport
 */
export interface MsgDefendMemberReport {
  creator: string;
  defense: string;
}
export interface MsgDefendMemberReportProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReport";
  value: Uint8Array;
}
/**
 * MsgDefendMemberReport defines the MsgDefendMemberReport message.
 * @name MsgDefendMemberReportAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDefendMemberReport
 */
export interface MsgDefendMemberReportAmino {
  creator?: string;
  defense?: string;
}
export interface MsgDefendMemberReportAminoMsg {
  type: "/sparkdream.forum.v1.MsgDefendMemberReport";
  value: MsgDefendMemberReportAmino;
}
/**
 * MsgDefendMemberReportResponse defines the MsgDefendMemberReportResponse message.
 * @name MsgDefendMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDefendMemberReportResponse
 */
export interface MsgDefendMemberReportResponse {}
export interface MsgDefendMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReportResponse";
  value: Uint8Array;
}
/**
 * MsgDefendMemberReportResponse defines the MsgDefendMemberReportResponse message.
 * @name MsgDefendMemberReportResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDefendMemberReportResponse
 */
export interface MsgDefendMemberReportResponseAmino {}
export interface MsgDefendMemberReportResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgDefendMemberReportResponse";
  value: MsgDefendMemberReportResponseAmino;
}
/**
 * MsgAppealGovAction defines the MsgAppealGovAction message.
 * @name MsgAppealGovAction
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealGovAction
 */
export interface MsgAppealGovAction {
  creator: string;
  actionType: bigint;
  actionTarget: string;
  appealReason: string;
}
export interface MsgAppealGovActionProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealGovAction";
  value: Uint8Array;
}
/**
 * MsgAppealGovAction defines the MsgAppealGovAction message.
 * @name MsgAppealGovActionAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealGovAction
 */
export interface MsgAppealGovActionAmino {
  creator?: string;
  action_type?: string;
  action_target?: string;
  appeal_reason?: string;
}
export interface MsgAppealGovActionAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealGovAction";
  value: MsgAppealGovActionAmino;
}
/**
 * MsgAppealGovActionResponse defines the MsgAppealGovActionResponse message.
 * @name MsgAppealGovActionResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealGovActionResponse
 */
export interface MsgAppealGovActionResponse {}
export interface MsgAppealGovActionResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgAppealGovActionResponse";
  value: Uint8Array;
}
/**
 * MsgAppealGovActionResponse defines the MsgAppealGovActionResponse message.
 * @name MsgAppealGovActionResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealGovActionResponse
 */
export interface MsgAppealGovActionResponseAmino {}
export interface MsgAppealGovActionResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgAppealGovActionResponse";
  value: MsgAppealGovActionResponseAmino;
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/forum/MsgUpdateParams",
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
      type: "sparkdream/x/forum/MsgUpdateParams",
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
      typeUrl: "/sparkdream.forum.v1.MsgUpdateParams",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: ForumOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/forum/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      ForumOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
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
          message.operationalParams = ForumOperationalParams.decode(reader, reader.uint32());
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
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? ForumOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = ForumOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? ForumOperationalParams.toAmino(message.operationalParams) : ForumOperationalParams.toAmino(ForumOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUpdateOperationalParams",
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
      typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParams",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParamsResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCategory(): MsgCreateCategory {
  return {
    creator: "",
    title: "",
    description: "",
    membersOnlyWrite: false,
    adminOnlyWrite: false
  };
}
/**
 * MsgCreateCategory defines the MsgCreateCategory message.
 * @name MsgCreateCategory
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateCategory
 */
export const MsgCreateCategory = {
  typeUrl: "/sparkdream.forum.v1.MsgCreateCategory",
  encode(message: MsgCreateCategory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.membersOnlyWrite === true) {
      writer.uint32(32).bool(message.membersOnlyWrite);
    }
    if (message.adminOnlyWrite === true) {
      writer.uint32(40).bool(message.adminOnlyWrite);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCategory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCategory();
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
          message.description = reader.string();
          break;
        case 4:
          message.membersOnlyWrite = reader.bool();
          break;
        case 5:
          message.adminOnlyWrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCategory>): MsgCreateCategory {
    const message = createBaseMsgCreateCategory();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.membersOnlyWrite = object.membersOnlyWrite ?? false;
    message.adminOnlyWrite = object.adminOnlyWrite ?? false;
    return message;
  },
  fromAmino(object: MsgCreateCategoryAmino): MsgCreateCategory {
    const message = createBaseMsgCreateCategory();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.members_only_write !== undefined && object.members_only_write !== null) {
      message.membersOnlyWrite = object.members_only_write;
    }
    if (object.admin_only_write !== undefined && object.admin_only_write !== null) {
      message.adminOnlyWrite = object.admin_only_write;
    }
    return message;
  },
  toAmino(message: MsgCreateCategory): MsgCreateCategoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.members_only_write = message.membersOnlyWrite === false ? undefined : message.membersOnlyWrite;
    obj.admin_only_write = message.adminOnlyWrite === false ? undefined : message.adminOnlyWrite;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCategoryAminoMsg): MsgCreateCategory {
    return MsgCreateCategory.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCategoryProtoMsg): MsgCreateCategory {
    return MsgCreateCategory.decode(message.value);
  },
  toProto(message: MsgCreateCategory): Uint8Array {
    return MsgCreateCategory.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCategory): MsgCreateCategoryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreateCategory",
      value: MsgCreateCategory.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCategoryResponse(): MsgCreateCategoryResponse {
  return {};
}
/**
 * MsgCreateCategoryResponse defines the MsgCreateCategoryResponse message.
 * @name MsgCreateCategoryResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateCategoryResponse
 */
export const MsgCreateCategoryResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgCreateCategoryResponse",
  encode(_: MsgCreateCategoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCategoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCategoryResponse();
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
  fromPartial(_: DeepPartial<MsgCreateCategoryResponse>): MsgCreateCategoryResponse {
    const message = createBaseMsgCreateCategoryResponse();
    return message;
  },
  fromAmino(_: MsgCreateCategoryResponseAmino): MsgCreateCategoryResponse {
    const message = createBaseMsgCreateCategoryResponse();
    return message;
  },
  toAmino(_: MsgCreateCategoryResponse): MsgCreateCategoryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCategoryResponseAminoMsg): MsgCreateCategoryResponse {
    return MsgCreateCategoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCategoryResponseProtoMsg): MsgCreateCategoryResponse {
    return MsgCreateCategoryResponse.decode(message.value);
  },
  toProto(message: MsgCreateCategoryResponse): Uint8Array {
    return MsgCreateCategoryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCategoryResponse): MsgCreateCategoryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreateCategoryResponse",
      value: MsgCreateCategoryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    creator: "",
    categoryId: BigInt(0),
    parentId: BigInt(0),
    content: "",
    tags: [],
    contentType: 0,
    authorBond: undefined,
    initiativeId: BigInt(0)
  };
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreatePost
 */
export const MsgCreatePost = {
  typeUrl: "/sparkdream.forum.v1.MsgCreatePost",
  encode(message: MsgCreatePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.categoryId);
    }
    if (message.parentId !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentId);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.contentType !== 0) {
      writer.uint32(48).int32(message.contentType);
    }
    if (message.authorBond !== undefined) {
      writer.uint32(58).string(message.authorBond);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(64).uint64(message.initiativeId);
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
          message.categoryId = reader.uint64();
          break;
        case 3:
          message.parentId = reader.uint64();
          break;
        case 4:
          message.content = reader.string();
          break;
        case 5:
          message.tags.push(reader.string());
          break;
        case 6:
          message.contentType = reader.int32() as any;
          break;
        case 7:
          message.authorBond = reader.string();
          break;
        case 8:
          message.initiativeId = reader.uint64();
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
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.parentId = object.parentId !== undefined && object.parentId !== null ? BigInt(object.parentId.toString()) : BigInt(0);
    message.content = object.content ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.contentType = object.contentType ?? 0;
    message.authorBond = object.authorBond ?? undefined;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePostAmino): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parentId = BigInt(object.parent_id);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.author_bond !== undefined && object.author_bond !== null) {
      message.authorBond = object.author_bond;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: MsgCreatePost): MsgCreatePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.parent_id = message.parentId !== BigInt(0) ? message.parentId?.toString() : undefined;
    obj.content = message.content === "" ? undefined : message.content;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostAminoMsg): MsgCreatePost {
    return MsgCreatePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePostProtoMsg): MsgCreatePost {
    return MsgCreatePost.decode(message.value);
  },
  toProto(message: MsgCreatePost): Uint8Array {
    return MsgCreatePost.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePost): MsgCreatePostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreatePost",
      value: MsgCreatePost.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {};
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreatePostResponse
 */
export const MsgCreatePostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgCreatePostResponse",
  encode(_: MsgCreatePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();
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
  fromPartial(_: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    return message;
  },
  fromAmino(_: MsgCreatePostResponseAmino): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    return message;
  },
  toAmino(_: MsgCreatePostResponse): MsgCreatePostResponseAmino {
    const obj: any = {};
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
      typeUrl: "/sparkdream.forum.v1.MsgCreatePostResponse",
      value: MsgCreatePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditPost(): MsgEditPost {
  return {
    creator: "",
    postId: BigInt(0),
    newContent: "",
    tags: [],
    contentType: 0
  };
}
/**
 * MsgEditPost defines the MsgEditPost message.
 * @name MsgEditPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgEditPost
 */
export const MsgEditPost = {
  typeUrl: "/sparkdream.forum.v1.MsgEditPost",
  encode(message: MsgEditPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.newContent !== "") {
      writer.uint32(26).string(message.newContent);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.contentType !== 0) {
      writer.uint32(40).int32(message.contentType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditPost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditPost();
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
          message.newContent = reader.string();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          message.contentType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEditPost>): MsgEditPost {
    const message = createBaseMsgEditPost();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.newContent = object.newContent ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.contentType = object.contentType ?? 0;
    return message;
  },
  fromAmino(object: MsgEditPostAmino): MsgEditPost {
    const message = createBaseMsgEditPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.new_content !== undefined && object.new_content !== null) {
      message.newContent = object.new_content;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    return message;
  },
  toAmino(message: MsgEditPost): MsgEditPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.new_content = message.newContent === "" ? undefined : message.newContent;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    return obj;
  },
  fromAminoMsg(object: MsgEditPostAminoMsg): MsgEditPost {
    return MsgEditPost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditPostProtoMsg): MsgEditPost {
    return MsgEditPost.decode(message.value);
  },
  toProto(message: MsgEditPost): Uint8Array {
    return MsgEditPost.encode(message).finish();
  },
  toProtoMsg(message: MsgEditPost): MsgEditPostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgEditPost",
      value: MsgEditPost.encode(message).finish()
    };
  }
};
function createBaseMsgEditPostResponse(): MsgEditPostResponse {
  return {};
}
/**
 * MsgEditPostResponse defines the MsgEditPostResponse message.
 * @name MsgEditPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgEditPostResponse
 */
export const MsgEditPostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgEditPostResponse",
  encode(_: MsgEditPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditPostResponse();
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
  fromPartial(_: DeepPartial<MsgEditPostResponse>): MsgEditPostResponse {
    const message = createBaseMsgEditPostResponse();
    return message;
  },
  fromAmino(_: MsgEditPostResponseAmino): MsgEditPostResponse {
    const message = createBaseMsgEditPostResponse();
    return message;
  },
  toAmino(_: MsgEditPostResponse): MsgEditPostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditPostResponseAminoMsg): MsgEditPostResponse {
    return MsgEditPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditPostResponseProtoMsg): MsgEditPostResponse {
    return MsgEditPostResponse.decode(message.value);
  },
  toProto(message: MsgEditPostResponse): Uint8Array {
    return MsgEditPostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditPostResponse): MsgEditPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgEditPostResponse",
      value: MsgEditPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePost(): MsgDeletePost {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDeletePost
 */
export const MsgDeletePost = {
  typeUrl: "/sparkdream.forum.v1.MsgDeletePost",
  encode(message: MsgDeletePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
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
          message.postId = reader.uint64();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeletePostAmino): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgDeletePost): MsgDeletePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostAminoMsg): MsgDeletePost {
    return MsgDeletePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePostProtoMsg): MsgDeletePost {
    return MsgDeletePost.decode(message.value);
  },
  toProto(message: MsgDeletePost): Uint8Array {
    return MsgDeletePost.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePost): MsgDeletePostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDeletePost",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDeletePostResponse
 */
export const MsgDeletePostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgDeletePostResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgDeletePostResponse",
      value: MsgDeletePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeThread(): MsgFreezeThread {
  return {
    creator: "",
    rootId: BigInt(0)
  };
}
/**
 * MsgFreezeThread defines the MsgFreezeThread message.
 * @name MsgFreezeThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFreezeThread
 */
export const MsgFreezeThread = {
  typeUrl: "/sparkdream.forum.v1.MsgFreezeThread",
  encode(message: MsgFreezeThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFreezeThread>): MsgFreezeThread {
    const message = createBaseMsgFreezeThread();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgFreezeThreadAmino): MsgFreezeThread {
    const message = createBaseMsgFreezeThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: MsgFreezeThread): MsgFreezeThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFreezeThreadAminoMsg): MsgFreezeThread {
    return MsgFreezeThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeThreadProtoMsg): MsgFreezeThread {
    return MsgFreezeThread.decode(message.value);
  },
  toProto(message: MsgFreezeThread): Uint8Array {
    return MsgFreezeThread.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeThread): MsgFreezeThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgFreezeThread",
      value: MsgFreezeThread.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeThreadResponse(): MsgFreezeThreadResponse {
  return {};
}
/**
 * MsgFreezeThreadResponse defines the MsgFreezeThreadResponse message.
 * @name MsgFreezeThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFreezeThreadResponse
 */
export const MsgFreezeThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgFreezeThreadResponse",
  encode(_: MsgFreezeThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeThreadResponse();
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
  fromPartial(_: DeepPartial<MsgFreezeThreadResponse>): MsgFreezeThreadResponse {
    const message = createBaseMsgFreezeThreadResponse();
    return message;
  },
  fromAmino(_: MsgFreezeThreadResponseAmino): MsgFreezeThreadResponse {
    const message = createBaseMsgFreezeThreadResponse();
    return message;
  },
  toAmino(_: MsgFreezeThreadResponse): MsgFreezeThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFreezeThreadResponseAminoMsg): MsgFreezeThreadResponse {
    return MsgFreezeThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeThreadResponseProtoMsg): MsgFreezeThreadResponse {
    return MsgFreezeThreadResponse.decode(message.value);
  },
  toProto(message: MsgFreezeThreadResponse): Uint8Array {
    return MsgFreezeThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeThreadResponse): MsgFreezeThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgFreezeThreadResponse",
      value: MsgFreezeThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnarchiveThread(): MsgUnarchiveThread {
  return {
    creator: "",
    rootId: BigInt(0)
  };
}
/**
 * MsgUnarchiveThread defines the MsgUnarchiveThread message.
 * @name MsgUnarchiveThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnarchiveThread
 */
export const MsgUnarchiveThread = {
  typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThread",
  encode(message: MsgUnarchiveThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnarchiveThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnarchiveThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnarchiveThread>): MsgUnarchiveThread {
    const message = createBaseMsgUnarchiveThread();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnarchiveThreadAmino): MsgUnarchiveThread {
    const message = createBaseMsgUnarchiveThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: MsgUnarchiveThread): MsgUnarchiveThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnarchiveThreadAminoMsg): MsgUnarchiveThread {
    return MsgUnarchiveThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnarchiveThreadProtoMsg): MsgUnarchiveThread {
    return MsgUnarchiveThread.decode(message.value);
  },
  toProto(message: MsgUnarchiveThread): Uint8Array {
    return MsgUnarchiveThread.encode(message).finish();
  },
  toProtoMsg(message: MsgUnarchiveThread): MsgUnarchiveThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThread",
      value: MsgUnarchiveThread.encode(message).finish()
    };
  }
};
function createBaseMsgUnarchiveThreadResponse(): MsgUnarchiveThreadResponse {
  return {};
}
/**
 * MsgUnarchiveThreadResponse defines the MsgUnarchiveThreadResponse message.
 * @name MsgUnarchiveThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnarchiveThreadResponse
 */
export const MsgUnarchiveThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThreadResponse",
  encode(_: MsgUnarchiveThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnarchiveThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnarchiveThreadResponse();
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
  fromPartial(_: DeepPartial<MsgUnarchiveThreadResponse>): MsgUnarchiveThreadResponse {
    const message = createBaseMsgUnarchiveThreadResponse();
    return message;
  },
  fromAmino(_: MsgUnarchiveThreadResponseAmino): MsgUnarchiveThreadResponse {
    const message = createBaseMsgUnarchiveThreadResponse();
    return message;
  },
  toAmino(_: MsgUnarchiveThreadResponse): MsgUnarchiveThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnarchiveThreadResponseAminoMsg): MsgUnarchiveThreadResponse {
    return MsgUnarchiveThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnarchiveThreadResponseProtoMsg): MsgUnarchiveThreadResponse {
    return MsgUnarchiveThreadResponse.decode(message.value);
  },
  toProto(message: MsgUnarchiveThreadResponse): Uint8Array {
    return MsgUnarchiveThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnarchiveThreadResponse): MsgUnarchiveThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThreadResponse",
      value: MsgUnarchiveThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinPost(): MsgPinPost {
  return {
    creator: "",
    postId: BigInt(0),
    priority: BigInt(0)
  };
}
/**
 * MsgPinPost defines the MsgPinPost message.
 * @name MsgPinPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinPost
 */
export const MsgPinPost = {
  typeUrl: "/sparkdream.forum.v1.MsgPinPost",
  encode(message: MsgPinPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.priority !== BigInt(0)) {
      writer.uint32(24).uint64(message.priority);
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
          message.postId = reader.uint64();
          break;
        case 3:
          message.priority = reader.uint64();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.priority = object.priority !== undefined && object.priority !== null ? BigInt(object.priority.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPinPostAmino): MsgPinPost {
    const message = createBaseMsgPinPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = BigInt(object.priority);
    }
    return message;
  },
  toAmino(message: MsgPinPost): MsgPinPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.priority = message.priority !== BigInt(0) ? message.priority?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPinPostAminoMsg): MsgPinPost {
    return MsgPinPost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPinPostProtoMsg): MsgPinPost {
    return MsgPinPost.decode(message.value);
  },
  toProto(message: MsgPinPost): Uint8Array {
    return MsgPinPost.encode(message).finish();
  },
  toProtoMsg(message: MsgPinPost): MsgPinPostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgPinPost",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinPostResponse
 */
export const MsgPinPostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgPinPostResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgPinPostResponse",
      value: MsgPinPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinPost(): MsgUnpinPost {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgUnpinPost defines the MsgUnpinPost message.
 * @name MsgUnpinPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinPost
 */
export const MsgUnpinPost = {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinPost",
  encode(message: MsgUnpinPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
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
          message.postId = reader.uint64();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnpinPostAmino): MsgUnpinPost {
    const message = createBaseMsgUnpinPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgUnpinPost): MsgUnpinPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnpinPostAminoMsg): MsgUnpinPost {
    return MsgUnpinPost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpinPostProtoMsg): MsgUnpinPost {
    return MsgUnpinPost.decode(message.value);
  },
  toProto(message: MsgUnpinPost): Uint8Array {
    return MsgUnpinPost.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinPost): MsgUnpinPostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnpinPost",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinPostResponse
 */
export const MsgUnpinPostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinPostResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgUnpinPostResponse",
      value: MsgUnpinPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLockThread(): MsgLockThread {
  return {
    creator: "",
    rootId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgLockThread defines the MsgLockThread message.
 * @name MsgLockThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgLockThread
 */
export const MsgLockThread = {
  typeUrl: "/sparkdream.forum.v1.MsgLockThread",
  encode(message: MsgLockThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLockThread>): MsgLockThread {
    const message = createBaseMsgLockThread();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgLockThreadAmino): MsgLockThread {
    const message = createBaseMsgLockThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgLockThread): MsgLockThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgLockThreadAminoMsg): MsgLockThread {
    return MsgLockThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockThreadProtoMsg): MsgLockThread {
    return MsgLockThread.decode(message.value);
  },
  toProto(message: MsgLockThread): Uint8Array {
    return MsgLockThread.encode(message).finish();
  },
  toProtoMsg(message: MsgLockThread): MsgLockThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgLockThread",
      value: MsgLockThread.encode(message).finish()
    };
  }
};
function createBaseMsgLockThreadResponse(): MsgLockThreadResponse {
  return {};
}
/**
 * MsgLockThreadResponse defines the MsgLockThreadResponse message.
 * @name MsgLockThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgLockThreadResponse
 */
export const MsgLockThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgLockThreadResponse",
  encode(_: MsgLockThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockThreadResponse();
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
  fromPartial(_: DeepPartial<MsgLockThreadResponse>): MsgLockThreadResponse {
    const message = createBaseMsgLockThreadResponse();
    return message;
  },
  fromAmino(_: MsgLockThreadResponseAmino): MsgLockThreadResponse {
    const message = createBaseMsgLockThreadResponse();
    return message;
  },
  toAmino(_: MsgLockThreadResponse): MsgLockThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLockThreadResponseAminoMsg): MsgLockThreadResponse {
    return MsgLockThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockThreadResponseProtoMsg): MsgLockThreadResponse {
    return MsgLockThreadResponse.decode(message.value);
  },
  toProto(message: MsgLockThreadResponse): Uint8Array {
    return MsgLockThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockThreadResponse): MsgLockThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgLockThreadResponse",
      value: MsgLockThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockThread(): MsgUnlockThread {
  return {
    creator: "",
    rootId: BigInt(0)
  };
}
/**
 * MsgUnlockThread defines the MsgUnlockThread message.
 * @name MsgUnlockThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnlockThread
 */
export const MsgUnlockThread = {
  typeUrl: "/sparkdream.forum.v1.MsgUnlockThread",
  encode(message: MsgUnlockThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnlockThread>): MsgUnlockThread {
    const message = createBaseMsgUnlockThread();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnlockThreadAmino): MsgUnlockThread {
    const message = createBaseMsgUnlockThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: MsgUnlockThread): MsgUnlockThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnlockThreadAminoMsg): MsgUnlockThread {
    return MsgUnlockThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockThreadProtoMsg): MsgUnlockThread {
    return MsgUnlockThread.decode(message.value);
  },
  toProto(message: MsgUnlockThread): Uint8Array {
    return MsgUnlockThread.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockThread): MsgUnlockThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnlockThread",
      value: MsgUnlockThread.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockThreadResponse(): MsgUnlockThreadResponse {
  return {};
}
/**
 * MsgUnlockThreadResponse defines the MsgUnlockThreadResponse message.
 * @name MsgUnlockThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnlockThreadResponse
 */
export const MsgUnlockThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnlockThreadResponse",
  encode(_: MsgUnlockThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockThreadResponse();
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
  fromPartial(_: DeepPartial<MsgUnlockThreadResponse>): MsgUnlockThreadResponse {
    const message = createBaseMsgUnlockThreadResponse();
    return message;
  },
  fromAmino(_: MsgUnlockThreadResponseAmino): MsgUnlockThreadResponse {
    const message = createBaseMsgUnlockThreadResponse();
    return message;
  },
  toAmino(_: MsgUnlockThreadResponse): MsgUnlockThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnlockThreadResponseAminoMsg): MsgUnlockThreadResponse {
    return MsgUnlockThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockThreadResponseProtoMsg): MsgUnlockThreadResponse {
    return MsgUnlockThreadResponse.decode(message.value);
  },
  toProto(message: MsgUnlockThreadResponse): Uint8Array {
    return MsgUnlockThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockThreadResponse): MsgUnlockThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnlockThreadResponse",
      value: MsgUnlockThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMoveThread(): MsgMoveThread {
  return {
    creator: "",
    rootId: BigInt(0),
    newCategoryId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgMoveThread defines the MsgMoveThread message.
 * @name MsgMoveThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMoveThread
 */
export const MsgMoveThread = {
  typeUrl: "/sparkdream.forum.v1.MsgMoveThread",
  encode(message: MsgMoveThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    if (message.newCategoryId !== BigInt(0)) {
      writer.uint32(24).uint64(message.newCategoryId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMoveThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        case 3:
          message.newCategoryId = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMoveThread>): MsgMoveThread {
    const message = createBaseMsgMoveThread();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.newCategoryId = object.newCategoryId !== undefined && object.newCategoryId !== null ? BigInt(object.newCategoryId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgMoveThreadAmino): MsgMoveThread {
    const message = createBaseMsgMoveThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.new_category_id !== undefined && object.new_category_id !== null) {
      message.newCategoryId = BigInt(object.new_category_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgMoveThread): MsgMoveThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.new_category_id = message.newCategoryId !== BigInt(0) ? message.newCategoryId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgMoveThreadAminoMsg): MsgMoveThread {
    return MsgMoveThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveThreadProtoMsg): MsgMoveThread {
    return MsgMoveThread.decode(message.value);
  },
  toProto(message: MsgMoveThread): Uint8Array {
    return MsgMoveThread.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveThread): MsgMoveThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgMoveThread",
      value: MsgMoveThread.encode(message).finish()
    };
  }
};
function createBaseMsgMoveThreadResponse(): MsgMoveThreadResponse {
  return {};
}
/**
 * MsgMoveThreadResponse defines the MsgMoveThreadResponse message.
 * @name MsgMoveThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMoveThreadResponse
 */
export const MsgMoveThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgMoveThreadResponse",
  encode(_: MsgMoveThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMoveThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveThreadResponse();
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
  fromPartial(_: DeepPartial<MsgMoveThreadResponse>): MsgMoveThreadResponse {
    const message = createBaseMsgMoveThreadResponse();
    return message;
  },
  fromAmino(_: MsgMoveThreadResponseAmino): MsgMoveThreadResponse {
    const message = createBaseMsgMoveThreadResponse();
    return message;
  },
  toAmino(_: MsgMoveThreadResponse): MsgMoveThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMoveThreadResponseAminoMsg): MsgMoveThreadResponse {
    return MsgMoveThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveThreadResponseProtoMsg): MsgMoveThreadResponse {
    return MsgMoveThreadResponse.decode(message.value);
  },
  toProto(message: MsgMoveThreadResponse): Uint8Array {
    return MsgMoveThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveThreadResponse): MsgMoveThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgMoveThreadResponse",
      value: MsgMoveThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFollowThread(): MsgFollowThread {
  return {
    creator: "",
    threadId: BigInt(0)
  };
}
/**
 * MsgFollowThread defines the MsgFollowThread message.
 * @name MsgFollowThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFollowThread
 */
export const MsgFollowThread = {
  typeUrl: "/sparkdream.forum.v1.MsgFollowThread",
  encode(message: MsgFollowThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFollowThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFollowThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFollowThread>): MsgFollowThread {
    const message = createBaseMsgFollowThread();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgFollowThreadAmino): MsgFollowThread {
    const message = createBaseMsgFollowThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: MsgFollowThread): MsgFollowThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFollowThreadAminoMsg): MsgFollowThread {
    return MsgFollowThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFollowThreadProtoMsg): MsgFollowThread {
    return MsgFollowThread.decode(message.value);
  },
  toProto(message: MsgFollowThread): Uint8Array {
    return MsgFollowThread.encode(message).finish();
  },
  toProtoMsg(message: MsgFollowThread): MsgFollowThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgFollowThread",
      value: MsgFollowThread.encode(message).finish()
    };
  }
};
function createBaseMsgFollowThreadResponse(): MsgFollowThreadResponse {
  return {};
}
/**
 * MsgFollowThreadResponse defines the MsgFollowThreadResponse message.
 * @name MsgFollowThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFollowThreadResponse
 */
export const MsgFollowThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgFollowThreadResponse",
  encode(_: MsgFollowThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFollowThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFollowThreadResponse();
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
  fromPartial(_: DeepPartial<MsgFollowThreadResponse>): MsgFollowThreadResponse {
    const message = createBaseMsgFollowThreadResponse();
    return message;
  },
  fromAmino(_: MsgFollowThreadResponseAmino): MsgFollowThreadResponse {
    const message = createBaseMsgFollowThreadResponse();
    return message;
  },
  toAmino(_: MsgFollowThreadResponse): MsgFollowThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFollowThreadResponseAminoMsg): MsgFollowThreadResponse {
    return MsgFollowThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFollowThreadResponseProtoMsg): MsgFollowThreadResponse {
    return MsgFollowThreadResponse.decode(message.value);
  },
  toProto(message: MsgFollowThreadResponse): Uint8Array {
    return MsgFollowThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFollowThreadResponse): MsgFollowThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgFollowThreadResponse",
      value: MsgFollowThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnfollowThread(): MsgUnfollowThread {
  return {
    creator: "",
    threadId: BigInt(0)
  };
}
/**
 * MsgUnfollowThread defines the MsgUnfollowThread message.
 * @name MsgUnfollowThread
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnfollowThread
 */
export const MsgUnfollowThread = {
  typeUrl: "/sparkdream.forum.v1.MsgUnfollowThread",
  encode(message: MsgUnfollowThread, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfollowThread {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfollowThread();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnfollowThread>): MsgUnfollowThread {
    const message = createBaseMsgUnfollowThread();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnfollowThreadAmino): MsgUnfollowThread {
    const message = createBaseMsgUnfollowThread();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: MsgUnfollowThread): MsgUnfollowThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnfollowThreadAminoMsg): MsgUnfollowThread {
    return MsgUnfollowThread.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfollowThreadProtoMsg): MsgUnfollowThread {
    return MsgUnfollowThread.decode(message.value);
  },
  toProto(message: MsgUnfollowThread): Uint8Array {
    return MsgUnfollowThread.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfollowThread): MsgUnfollowThreadProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnfollowThread",
      value: MsgUnfollowThread.encode(message).finish()
    };
  }
};
function createBaseMsgUnfollowThreadResponse(): MsgUnfollowThreadResponse {
  return {};
}
/**
 * MsgUnfollowThreadResponse defines the MsgUnfollowThreadResponse message.
 * @name MsgUnfollowThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnfollowThreadResponse
 */
export const MsgUnfollowThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnfollowThreadResponse",
  encode(_: MsgUnfollowThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfollowThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfollowThreadResponse();
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
  fromPartial(_: DeepPartial<MsgUnfollowThreadResponse>): MsgUnfollowThreadResponse {
    const message = createBaseMsgUnfollowThreadResponse();
    return message;
  },
  fromAmino(_: MsgUnfollowThreadResponseAmino): MsgUnfollowThreadResponse {
    const message = createBaseMsgUnfollowThreadResponse();
    return message;
  },
  toAmino(_: MsgUnfollowThreadResponse): MsgUnfollowThreadResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnfollowThreadResponseAminoMsg): MsgUnfollowThreadResponse {
    return MsgUnfollowThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfollowThreadResponseProtoMsg): MsgUnfollowThreadResponse {
    return MsgUnfollowThreadResponse.decode(message.value);
  },
  toProto(message: MsgUnfollowThreadResponse): Uint8Array {
    return MsgUnfollowThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfollowThreadResponse): MsgUnfollowThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnfollowThreadResponse",
      value: MsgUnfollowThreadResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpvotePost(): MsgUpvotePost {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgUpvotePost defines the MsgUpvotePost message.
 * @name MsgUpvotePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpvotePost
 */
export const MsgUpvotePost = {
  typeUrl: "/sparkdream.forum.v1.MsgUpvotePost",
  encode(message: MsgUpvotePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpvotePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpvotePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpvotePost>): MsgUpvotePost {
    const message = createBaseMsgUpvotePost();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpvotePostAmino): MsgUpvotePost {
    const message = createBaseMsgUpvotePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgUpvotePost): MsgUpvotePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpvotePostAminoMsg): MsgUpvotePost {
    return MsgUpvotePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpvotePostProtoMsg): MsgUpvotePost {
    return MsgUpvotePost.decode(message.value);
  },
  toProto(message: MsgUpvotePost): Uint8Array {
    return MsgUpvotePost.encode(message).finish();
  },
  toProtoMsg(message: MsgUpvotePost): MsgUpvotePostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUpvotePost",
      value: MsgUpvotePost.encode(message).finish()
    };
  }
};
function createBaseMsgUpvotePostResponse(): MsgUpvotePostResponse {
  return {};
}
/**
 * MsgUpvotePostResponse defines the MsgUpvotePostResponse message.
 * @name MsgUpvotePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUpvotePostResponse
 */
export const MsgUpvotePostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUpvotePostResponse",
  encode(_: MsgUpvotePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpvotePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpvotePostResponse();
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
  fromPartial(_: DeepPartial<MsgUpvotePostResponse>): MsgUpvotePostResponse {
    const message = createBaseMsgUpvotePostResponse();
    return message;
  },
  fromAmino(_: MsgUpvotePostResponseAmino): MsgUpvotePostResponse {
    const message = createBaseMsgUpvotePostResponse();
    return message;
  },
  toAmino(_: MsgUpvotePostResponse): MsgUpvotePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpvotePostResponseAminoMsg): MsgUpvotePostResponse {
    return MsgUpvotePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpvotePostResponseProtoMsg): MsgUpvotePostResponse {
    return MsgUpvotePostResponse.decode(message.value);
  },
  toProto(message: MsgUpvotePostResponse): Uint8Array {
    return MsgUpvotePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpvotePostResponse): MsgUpvotePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUpvotePostResponse",
      value: MsgUpvotePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDownvotePost(): MsgDownvotePost {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgDownvotePost defines the MsgDownvotePost message.
 * @name MsgDownvotePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDownvotePost
 */
export const MsgDownvotePost = {
  typeUrl: "/sparkdream.forum.v1.MsgDownvotePost",
  encode(message: MsgDownvotePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDownvotePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDownvotePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDownvotePost>): MsgDownvotePost {
    const message = createBaseMsgDownvotePost();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDownvotePostAmino): MsgDownvotePost {
    const message = createBaseMsgDownvotePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgDownvotePost): MsgDownvotePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDownvotePostAminoMsg): MsgDownvotePost {
    return MsgDownvotePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDownvotePostProtoMsg): MsgDownvotePost {
    return MsgDownvotePost.decode(message.value);
  },
  toProto(message: MsgDownvotePost): Uint8Array {
    return MsgDownvotePost.encode(message).finish();
  },
  toProtoMsg(message: MsgDownvotePost): MsgDownvotePostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDownvotePost",
      value: MsgDownvotePost.encode(message).finish()
    };
  }
};
function createBaseMsgDownvotePostResponse(): MsgDownvotePostResponse {
  return {};
}
/**
 * MsgDownvotePostResponse defines the MsgDownvotePostResponse message.
 * @name MsgDownvotePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDownvotePostResponse
 */
export const MsgDownvotePostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgDownvotePostResponse",
  encode(_: MsgDownvotePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDownvotePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDownvotePostResponse();
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
  fromPartial(_: DeepPartial<MsgDownvotePostResponse>): MsgDownvotePostResponse {
    const message = createBaseMsgDownvotePostResponse();
    return message;
  },
  fromAmino(_: MsgDownvotePostResponseAmino): MsgDownvotePostResponse {
    const message = createBaseMsgDownvotePostResponse();
    return message;
  },
  toAmino(_: MsgDownvotePostResponse): MsgDownvotePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDownvotePostResponseAminoMsg): MsgDownvotePostResponse {
    return MsgDownvotePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDownvotePostResponseProtoMsg): MsgDownvotePostResponse {
    return MsgDownvotePostResponse.decode(message.value);
  },
  toProto(message: MsgDownvotePostResponse): Uint8Array {
    return MsgDownvotePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDownvotePostResponse): MsgDownvotePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDownvotePostResponse",
      value: MsgDownvotePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFlagPost(): MsgFlagPost {
  return {
    creator: "",
    postId: BigInt(0),
    category: BigInt(0),
    reason: ""
  };
}
/**
 * MsgFlagPost defines the MsgFlagPost message.
 * @name MsgFlagPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFlagPost
 */
export const MsgFlagPost = {
  typeUrl: "/sparkdream.forum.v1.MsgFlagPost",
  encode(message: MsgFlagPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.category !== BigInt(0)) {
      writer.uint32(24).uint64(message.category);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFlagPost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFlagPost();
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
          message.category = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFlagPost>): MsgFlagPost {
    const message = createBaseMsgFlagPost();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.category = object.category !== undefined && object.category !== null ? BigInt(object.category.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgFlagPostAmino): MsgFlagPost {
    const message = createBaseMsgFlagPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = BigInt(object.category);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgFlagPost): MsgFlagPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.category = message.category !== BigInt(0) ? message.category?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgFlagPostAminoMsg): MsgFlagPost {
    return MsgFlagPost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFlagPostProtoMsg): MsgFlagPost {
    return MsgFlagPost.decode(message.value);
  },
  toProto(message: MsgFlagPost): Uint8Array {
    return MsgFlagPost.encode(message).finish();
  },
  toProtoMsg(message: MsgFlagPost): MsgFlagPostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgFlagPost",
      value: MsgFlagPost.encode(message).finish()
    };
  }
};
function createBaseMsgFlagPostResponse(): MsgFlagPostResponse {
  return {};
}
/**
 * MsgFlagPostResponse defines the MsgFlagPostResponse message.
 * @name MsgFlagPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgFlagPostResponse
 */
export const MsgFlagPostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgFlagPostResponse",
  encode(_: MsgFlagPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFlagPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFlagPostResponse();
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
  fromPartial(_: DeepPartial<MsgFlagPostResponse>): MsgFlagPostResponse {
    const message = createBaseMsgFlagPostResponse();
    return message;
  },
  fromAmino(_: MsgFlagPostResponseAmino): MsgFlagPostResponse {
    const message = createBaseMsgFlagPostResponse();
    return message;
  },
  toAmino(_: MsgFlagPostResponse): MsgFlagPostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFlagPostResponseAminoMsg): MsgFlagPostResponse {
    return MsgFlagPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFlagPostResponseProtoMsg): MsgFlagPostResponse {
    return MsgFlagPostResponse.decode(message.value);
  },
  toProto(message: MsgFlagPostResponse): Uint8Array {
    return MsgFlagPostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFlagPostResponse): MsgFlagPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgFlagPostResponse",
      value: MsgFlagPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDismissFlags(): MsgDismissFlags {
  return {
    creator: "",
    postId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgDismissFlags defines the MsgDismissFlags message.
 * @name MsgDismissFlags
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDismissFlags
 */
export const MsgDismissFlags = {
  typeUrl: "/sparkdream.forum.v1.MsgDismissFlags",
  encode(message: MsgDismissFlags, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDismissFlags {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDismissFlags();
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
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDismissFlags>): MsgDismissFlags {
    const message = createBaseMsgDismissFlags();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgDismissFlagsAmino): MsgDismissFlags {
    const message = createBaseMsgDismissFlags();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgDismissFlags): MsgDismissFlagsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgDismissFlagsAminoMsg): MsgDismissFlags {
    return MsgDismissFlags.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDismissFlagsProtoMsg): MsgDismissFlags {
    return MsgDismissFlags.decode(message.value);
  },
  toProto(message: MsgDismissFlags): Uint8Array {
    return MsgDismissFlags.encode(message).finish();
  },
  toProtoMsg(message: MsgDismissFlags): MsgDismissFlagsProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDismissFlags",
      value: MsgDismissFlags.encode(message).finish()
    };
  }
};
function createBaseMsgDismissFlagsResponse(): MsgDismissFlagsResponse {
  return {};
}
/**
 * MsgDismissFlagsResponse defines the MsgDismissFlagsResponse message.
 * @name MsgDismissFlagsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDismissFlagsResponse
 */
export const MsgDismissFlagsResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgDismissFlagsResponse",
  encode(_: MsgDismissFlagsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDismissFlagsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDismissFlagsResponse();
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
  fromPartial(_: DeepPartial<MsgDismissFlagsResponse>): MsgDismissFlagsResponse {
    const message = createBaseMsgDismissFlagsResponse();
    return message;
  },
  fromAmino(_: MsgDismissFlagsResponseAmino): MsgDismissFlagsResponse {
    const message = createBaseMsgDismissFlagsResponse();
    return message;
  },
  toAmino(_: MsgDismissFlagsResponse): MsgDismissFlagsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDismissFlagsResponseAminoMsg): MsgDismissFlagsResponse {
    return MsgDismissFlagsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDismissFlagsResponseProtoMsg): MsgDismissFlagsResponse {
    return MsgDismissFlagsResponse.decode(message.value);
  },
  toProto(message: MsgDismissFlagsResponse): Uint8Array {
    return MsgDismissFlagsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDismissFlagsResponse): MsgDismissFlagsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDismissFlagsResponse",
      value: MsgDismissFlagsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgHidePost(): MsgHidePost {
  return {
    creator: "",
    postId: BigInt(0),
    reasonCode: BigInt(0),
    reasonText: ""
  };
}
/**
 * MsgHidePost defines the MsgHidePost message.
 * @name MsgHidePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgHidePost
 */
export const MsgHidePost = {
  typeUrl: "/sparkdream.forum.v1.MsgHidePost",
  encode(message: MsgHidePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.reasonCode !== BigInt(0)) {
      writer.uint32(24).uint64(message.reasonCode);
    }
    if (message.reasonText !== "") {
      writer.uint32(34).string(message.reasonText);
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
          message.postId = reader.uint64();
          break;
        case 3:
          message.reasonCode = reader.uint64();
          break;
        case 4:
          message.reasonText = reader.string();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.reasonCode = object.reasonCode !== undefined && object.reasonCode !== null ? BigInt(object.reasonCode.toString()) : BigInt(0);
    message.reasonText = object.reasonText ?? "";
    return message;
  },
  fromAmino(object: MsgHidePostAmino): MsgHidePost {
    const message = createBaseMsgHidePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reason_code !== undefined && object.reason_code !== null) {
      message.reasonCode = BigInt(object.reason_code);
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    return message;
  },
  toAmino(message: MsgHidePost): MsgHidePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reason_code = message.reasonCode !== BigInt(0) ? message.reasonCode?.toString() : undefined;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    return obj;
  },
  fromAminoMsg(object: MsgHidePostAminoMsg): MsgHidePost {
    return MsgHidePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHidePostProtoMsg): MsgHidePost {
    return MsgHidePost.decode(message.value);
  },
  toProto(message: MsgHidePost): Uint8Array {
    return MsgHidePost.encode(message).finish();
  },
  toProtoMsg(message: MsgHidePost): MsgHidePostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgHidePost",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgHidePostResponse
 */
export const MsgHidePostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgHidePostResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgHidePostResponse",
      value: MsgHidePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealPost(): MsgAppealPost {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgAppealPost defines the MsgAppealPost message.
 * @name MsgAppealPost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealPost
 */
export const MsgAppealPost = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealPost",
  encode(message: MsgAppealPost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealPost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealPost>): MsgAppealPost {
    const message = createBaseMsgAppealPost();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAppealPostAmino): MsgAppealPost {
    const message = createBaseMsgAppealPost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgAppealPost): MsgAppealPostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAppealPostAminoMsg): MsgAppealPost {
    return MsgAppealPost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealPostProtoMsg): MsgAppealPost {
    return MsgAppealPost.decode(message.value);
  },
  toProto(message: MsgAppealPost): Uint8Array {
    return MsgAppealPost.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealPost): MsgAppealPostProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealPost",
      value: MsgAppealPost.encode(message).finish()
    };
  }
};
function createBaseMsgAppealPostResponse(): MsgAppealPostResponse {
  return {};
}
/**
 * MsgAppealPostResponse defines the MsgAppealPostResponse message.
 * @name MsgAppealPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealPostResponse
 */
export const MsgAppealPostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealPostResponse",
  encode(_: MsgAppealPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealPostResponse();
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
  fromPartial(_: DeepPartial<MsgAppealPostResponse>): MsgAppealPostResponse {
    const message = createBaseMsgAppealPostResponse();
    return message;
  },
  fromAmino(_: MsgAppealPostResponseAmino): MsgAppealPostResponse {
    const message = createBaseMsgAppealPostResponse();
    return message;
  },
  toAmino(_: MsgAppealPostResponse): MsgAppealPostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealPostResponseAminoMsg): MsgAppealPostResponse {
    return MsgAppealPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealPostResponseProtoMsg): MsgAppealPostResponse {
    return MsgAppealPostResponse.decode(message.value);
  },
  toProto(message: MsgAppealPostResponse): Uint8Array {
    return MsgAppealPostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealPostResponse): MsgAppealPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealPostResponse",
      value: MsgAppealPostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealThreadLock(): MsgAppealThreadLock {
  return {
    creator: "",
    rootId: BigInt(0)
  };
}
/**
 * MsgAppealThreadLock defines the MsgAppealThreadLock message.
 * @name MsgAppealThreadLock
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadLock
 */
export const MsgAppealThreadLock = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLock",
  encode(message: MsgAppealThreadLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealThreadLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealThreadLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealThreadLock>): MsgAppealThreadLock {
    const message = createBaseMsgAppealThreadLock();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAppealThreadLockAmino): MsgAppealThreadLock {
    const message = createBaseMsgAppealThreadLock();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: MsgAppealThreadLock): MsgAppealThreadLockAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAppealThreadLockAminoMsg): MsgAppealThreadLock {
    return MsgAppealThreadLock.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealThreadLockProtoMsg): MsgAppealThreadLock {
    return MsgAppealThreadLock.decode(message.value);
  },
  toProto(message: MsgAppealThreadLock): Uint8Array {
    return MsgAppealThreadLock.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealThreadLock): MsgAppealThreadLockProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLock",
      value: MsgAppealThreadLock.encode(message).finish()
    };
  }
};
function createBaseMsgAppealThreadLockResponse(): MsgAppealThreadLockResponse {
  return {};
}
/**
 * MsgAppealThreadLockResponse defines the MsgAppealThreadLockResponse message.
 * @name MsgAppealThreadLockResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadLockResponse
 */
export const MsgAppealThreadLockResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLockResponse",
  encode(_: MsgAppealThreadLockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealThreadLockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealThreadLockResponse();
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
  fromPartial(_: DeepPartial<MsgAppealThreadLockResponse>): MsgAppealThreadLockResponse {
    const message = createBaseMsgAppealThreadLockResponse();
    return message;
  },
  fromAmino(_: MsgAppealThreadLockResponseAmino): MsgAppealThreadLockResponse {
    const message = createBaseMsgAppealThreadLockResponse();
    return message;
  },
  toAmino(_: MsgAppealThreadLockResponse): MsgAppealThreadLockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealThreadLockResponseAminoMsg): MsgAppealThreadLockResponse {
    return MsgAppealThreadLockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealThreadLockResponseProtoMsg): MsgAppealThreadLockResponse {
    return MsgAppealThreadLockResponse.decode(message.value);
  },
  toProto(message: MsgAppealThreadLockResponse): Uint8Array {
    return MsgAppealThreadLockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealThreadLockResponse): MsgAppealThreadLockResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLockResponse",
      value: MsgAppealThreadLockResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealThreadMove(): MsgAppealThreadMove {
  return {
    creator: "",
    rootId: BigInt(0)
  };
}
/**
 * MsgAppealThreadMove defines the MsgAppealThreadMove message.
 * @name MsgAppealThreadMove
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadMove
 */
export const MsgAppealThreadMove = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMove",
  encode(message: MsgAppealThreadMove, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(16).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealThreadMove {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealThreadMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealThreadMove>): MsgAppealThreadMove {
    const message = createBaseMsgAppealThreadMove();
    message.creator = object.creator ?? "";
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAppealThreadMoveAmino): MsgAppealThreadMove {
    const message = createBaseMsgAppealThreadMove();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: MsgAppealThreadMove): MsgAppealThreadMoveAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAppealThreadMoveAminoMsg): MsgAppealThreadMove {
    return MsgAppealThreadMove.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealThreadMoveProtoMsg): MsgAppealThreadMove {
    return MsgAppealThreadMove.decode(message.value);
  },
  toProto(message: MsgAppealThreadMove): Uint8Array {
    return MsgAppealThreadMove.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealThreadMove): MsgAppealThreadMoveProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMove",
      value: MsgAppealThreadMove.encode(message).finish()
    };
  }
};
function createBaseMsgAppealThreadMoveResponse(): MsgAppealThreadMoveResponse {
  return {};
}
/**
 * MsgAppealThreadMoveResponse defines the MsgAppealThreadMoveResponse message.
 * @name MsgAppealThreadMoveResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealThreadMoveResponse
 */
export const MsgAppealThreadMoveResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMoveResponse",
  encode(_: MsgAppealThreadMoveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealThreadMoveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealThreadMoveResponse();
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
  fromPartial(_: DeepPartial<MsgAppealThreadMoveResponse>): MsgAppealThreadMoveResponse {
    const message = createBaseMsgAppealThreadMoveResponse();
    return message;
  },
  fromAmino(_: MsgAppealThreadMoveResponseAmino): MsgAppealThreadMoveResponse {
    const message = createBaseMsgAppealThreadMoveResponse();
    return message;
  },
  toAmino(_: MsgAppealThreadMoveResponse): MsgAppealThreadMoveResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealThreadMoveResponseAminoMsg): MsgAppealThreadMoveResponse {
    return MsgAppealThreadMoveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealThreadMoveResponseProtoMsg): MsgAppealThreadMoveResponse {
    return MsgAppealThreadMoveResponse.decode(message.value);
  },
  toProto(message: MsgAppealThreadMoveResponse): Uint8Array {
    return MsgAppealThreadMoveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealThreadMoveResponse): MsgAppealThreadMoveResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMoveResponse",
      value: MsgAppealThreadMoveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBounty(): MsgCreateBounty {
  return {
    creator: "",
    threadId: BigInt(0),
    amount: "",
    duration: BigInt(0)
  };
}
/**
 * MsgCreateBounty defines the MsgCreateBounty message.
 * @name MsgCreateBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateBounty
 */
export const MsgCreateBounty = {
  typeUrl: "/sparkdream.forum.v1.MsgCreateBounty",
  encode(message: MsgCreateBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateBounty>): MsgCreateBounty {
    const message = createBaseMsgCreateBounty();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateBountyAmino): MsgCreateBounty {
    const message = createBaseMsgCreateBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: MsgCreateBounty): MsgCreateBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBountyAminoMsg): MsgCreateBounty {
    return MsgCreateBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBountyProtoMsg): MsgCreateBounty {
    return MsgCreateBounty.decode(message.value);
  },
  toProto(message: MsgCreateBounty): Uint8Array {
    return MsgCreateBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBounty): MsgCreateBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreateBounty",
      value: MsgCreateBounty.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBountyResponse(): MsgCreateBountyResponse {
  return {};
}
/**
 * MsgCreateBountyResponse defines the MsgCreateBountyResponse message.
 * @name MsgCreateBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateBountyResponse
 */
export const MsgCreateBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgCreateBountyResponse",
  encode(_: MsgCreateBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBountyResponse();
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
  fromPartial(_: DeepPartial<MsgCreateBountyResponse>): MsgCreateBountyResponse {
    const message = createBaseMsgCreateBountyResponse();
    return message;
  },
  fromAmino(_: MsgCreateBountyResponseAmino): MsgCreateBountyResponse {
    const message = createBaseMsgCreateBountyResponse();
    return message;
  },
  toAmino(_: MsgCreateBountyResponse): MsgCreateBountyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBountyResponseAminoMsg): MsgCreateBountyResponse {
    return MsgCreateBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBountyResponseProtoMsg): MsgCreateBountyResponse {
    return MsgCreateBountyResponse.decode(message.value);
  },
  toProto(message: MsgCreateBountyResponse): Uint8Array {
    return MsgCreateBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBountyResponse): MsgCreateBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreateBountyResponse",
      value: MsgCreateBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAwardBounty(): MsgAwardBounty {
  return {
    creator: "",
    bountyId: BigInt(0)
  };
}
/**
 * MsgAwardBounty defines the MsgAwardBounty message.
 * @name MsgAwardBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardBounty
 */
export const MsgAwardBounty = {
  typeUrl: "/sparkdream.forum.v1.MsgAwardBounty",
  encode(message: MsgAwardBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bountyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAwardBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAwardBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bountyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAwardBounty>): MsgAwardBounty {
    const message = createBaseMsgAwardBounty();
    message.creator = object.creator ?? "";
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAwardBountyAmino): MsgAwardBounty {
    const message = createBaseMsgAwardBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    return message;
  },
  toAmino(message: MsgAwardBounty): MsgAwardBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAwardBountyAminoMsg): MsgAwardBounty {
    return MsgAwardBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAwardBountyProtoMsg): MsgAwardBounty {
    return MsgAwardBounty.decode(message.value);
  },
  toProto(message: MsgAwardBounty): Uint8Array {
    return MsgAwardBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgAwardBounty): MsgAwardBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAwardBounty",
      value: MsgAwardBounty.encode(message).finish()
    };
  }
};
function createBaseMsgAwardBountyResponse(): MsgAwardBountyResponse {
  return {};
}
/**
 * MsgAwardBountyResponse defines the MsgAwardBountyResponse message.
 * @name MsgAwardBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardBountyResponse
 */
export const MsgAwardBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAwardBountyResponse",
  encode(_: MsgAwardBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAwardBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAwardBountyResponse();
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
  fromPartial(_: DeepPartial<MsgAwardBountyResponse>): MsgAwardBountyResponse {
    const message = createBaseMsgAwardBountyResponse();
    return message;
  },
  fromAmino(_: MsgAwardBountyResponseAmino): MsgAwardBountyResponse {
    const message = createBaseMsgAwardBountyResponse();
    return message;
  },
  toAmino(_: MsgAwardBountyResponse): MsgAwardBountyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAwardBountyResponseAminoMsg): MsgAwardBountyResponse {
    return MsgAwardBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAwardBountyResponseProtoMsg): MsgAwardBountyResponse {
    return MsgAwardBountyResponse.decode(message.value);
  },
  toProto(message: MsgAwardBountyResponse): Uint8Array {
    return MsgAwardBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAwardBountyResponse): MsgAwardBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAwardBountyResponse",
      value: MsgAwardBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIncreaseBounty(): MsgIncreaseBounty {
  return {
    creator: "",
    bountyId: BigInt(0),
    additionalAmount: ""
  };
}
/**
 * MsgIncreaseBounty defines the MsgIncreaseBounty message.
 * @name MsgIncreaseBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgIncreaseBounty
 */
export const MsgIncreaseBounty = {
  typeUrl: "/sparkdream.forum.v1.MsgIncreaseBounty",
  encode(message: MsgIncreaseBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bountyId);
    }
    if (message.additionalAmount !== "") {
      writer.uint32(26).string(message.additionalAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bountyId = reader.uint64();
          break;
        case 3:
          message.additionalAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIncreaseBounty>): MsgIncreaseBounty {
    const message = createBaseMsgIncreaseBounty();
    message.creator = object.creator ?? "";
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.additionalAmount = object.additionalAmount ?? "";
    return message;
  },
  fromAmino(object: MsgIncreaseBountyAmino): MsgIncreaseBounty {
    const message = createBaseMsgIncreaseBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.additional_amount !== undefined && object.additional_amount !== null) {
      message.additionalAmount = object.additional_amount;
    }
    return message;
  },
  toAmino(message: MsgIncreaseBounty): MsgIncreaseBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.additional_amount = message.additionalAmount === "" ? undefined : message.additionalAmount;
    return obj;
  },
  fromAminoMsg(object: MsgIncreaseBountyAminoMsg): MsgIncreaseBounty {
    return MsgIncreaseBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncreaseBountyProtoMsg): MsgIncreaseBounty {
    return MsgIncreaseBounty.decode(message.value);
  },
  toProto(message: MsgIncreaseBounty): Uint8Array {
    return MsgIncreaseBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreaseBounty): MsgIncreaseBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgIncreaseBounty",
      value: MsgIncreaseBounty.encode(message).finish()
    };
  }
};
function createBaseMsgIncreaseBountyResponse(): MsgIncreaseBountyResponse {
  return {};
}
/**
 * MsgIncreaseBountyResponse defines the MsgIncreaseBountyResponse message.
 * @name MsgIncreaseBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgIncreaseBountyResponse
 */
export const MsgIncreaseBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgIncreaseBountyResponse",
  encode(_: MsgIncreaseBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseBountyResponse();
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
  fromPartial(_: DeepPartial<MsgIncreaseBountyResponse>): MsgIncreaseBountyResponse {
    const message = createBaseMsgIncreaseBountyResponse();
    return message;
  },
  fromAmino(_: MsgIncreaseBountyResponseAmino): MsgIncreaseBountyResponse {
    const message = createBaseMsgIncreaseBountyResponse();
    return message;
  },
  toAmino(_: MsgIncreaseBountyResponse): MsgIncreaseBountyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIncreaseBountyResponseAminoMsg): MsgIncreaseBountyResponse {
    return MsgIncreaseBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncreaseBountyResponseProtoMsg): MsgIncreaseBountyResponse {
    return MsgIncreaseBountyResponse.decode(message.value);
  },
  toProto(message: MsgIncreaseBountyResponse): Uint8Array {
    return MsgIncreaseBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreaseBountyResponse): MsgIncreaseBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgIncreaseBountyResponse",
      value: MsgIncreaseBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelBounty(): MsgCancelBounty {
  return {
    creator: "",
    bountyId: BigInt(0)
  };
}
/**
 * MsgCancelBounty defines the MsgCancelBounty message.
 * @name MsgCancelBounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCancelBounty
 */
export const MsgCancelBounty = {
  typeUrl: "/sparkdream.forum.v1.MsgCancelBounty",
  encode(message: MsgCancelBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bountyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bountyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelBounty>): MsgCancelBounty {
    const message = createBaseMsgCancelBounty();
    message.creator = object.creator ?? "";
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelBountyAmino): MsgCancelBounty {
    const message = createBaseMsgCancelBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    return message;
  },
  toAmino(message: MsgCancelBounty): MsgCancelBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelBountyAminoMsg): MsgCancelBounty {
    return MsgCancelBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelBountyProtoMsg): MsgCancelBounty {
    return MsgCancelBounty.decode(message.value);
  },
  toProto(message: MsgCancelBounty): Uint8Array {
    return MsgCancelBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelBounty): MsgCancelBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCancelBounty",
      value: MsgCancelBounty.encode(message).finish()
    };
  }
};
function createBaseMsgCancelBountyResponse(): MsgCancelBountyResponse {
  return {};
}
/**
 * MsgCancelBountyResponse defines the MsgCancelBountyResponse message.
 * @name MsgCancelBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCancelBountyResponse
 */
export const MsgCancelBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgCancelBountyResponse",
  encode(_: MsgCancelBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBountyResponse();
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
  fromPartial(_: DeepPartial<MsgCancelBountyResponse>): MsgCancelBountyResponse {
    const message = createBaseMsgCancelBountyResponse();
    return message;
  },
  fromAmino(_: MsgCancelBountyResponseAmino): MsgCancelBountyResponse {
    const message = createBaseMsgCancelBountyResponse();
    return message;
  },
  toAmino(_: MsgCancelBountyResponse): MsgCancelBountyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelBountyResponseAminoMsg): MsgCancelBountyResponse {
    return MsgCancelBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelBountyResponseProtoMsg): MsgCancelBountyResponse {
    return MsgCancelBountyResponse.decode(message.value);
  },
  toProto(message: MsgCancelBountyResponse): Uint8Array {
    return MsgCancelBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelBountyResponse): MsgCancelBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCancelBountyResponse",
      value: MsgCancelBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAssignBountyToReply(): MsgAssignBountyToReply {
  return {
    creator: "",
    threadId: BigInt(0),
    replyId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgAssignBountyToReply defines the MsgAssignBountyToReply message.
 * @name MsgAssignBountyToReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAssignBountyToReply
 */
export const MsgAssignBountyToReply = {
  typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReply",
  encode(message: MsgAssignBountyToReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignBountyToReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignBountyToReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.replyId = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAssignBountyToReply>): MsgAssignBountyToReply {
    const message = createBaseMsgAssignBountyToReply();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAssignBountyToReplyAmino): MsgAssignBountyToReply {
    const message = createBaseMsgAssignBountyToReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAssignBountyToReply): MsgAssignBountyToReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAssignBountyToReplyAminoMsg): MsgAssignBountyToReply {
    return MsgAssignBountyToReply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAssignBountyToReplyProtoMsg): MsgAssignBountyToReply {
    return MsgAssignBountyToReply.decode(message.value);
  },
  toProto(message: MsgAssignBountyToReply): Uint8Array {
    return MsgAssignBountyToReply.encode(message).finish();
  },
  toProtoMsg(message: MsgAssignBountyToReply): MsgAssignBountyToReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReply",
      value: MsgAssignBountyToReply.encode(message).finish()
    };
  }
};
function createBaseMsgAssignBountyToReplyResponse(): MsgAssignBountyToReplyResponse {
  return {};
}
/**
 * MsgAssignBountyToReplyResponse defines the MsgAssignBountyToReplyResponse message.
 * @name MsgAssignBountyToReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAssignBountyToReplyResponse
 */
export const MsgAssignBountyToReplyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReplyResponse",
  encode(_: MsgAssignBountyToReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignBountyToReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignBountyToReplyResponse();
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
  fromPartial(_: DeepPartial<MsgAssignBountyToReplyResponse>): MsgAssignBountyToReplyResponse {
    const message = createBaseMsgAssignBountyToReplyResponse();
    return message;
  },
  fromAmino(_: MsgAssignBountyToReplyResponseAmino): MsgAssignBountyToReplyResponse {
    const message = createBaseMsgAssignBountyToReplyResponse();
    return message;
  },
  toAmino(_: MsgAssignBountyToReplyResponse): MsgAssignBountyToReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAssignBountyToReplyResponseAminoMsg): MsgAssignBountyToReplyResponse {
    return MsgAssignBountyToReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAssignBountyToReplyResponseProtoMsg): MsgAssignBountyToReplyResponse {
    return MsgAssignBountyToReplyResponse.decode(message.value);
  },
  toProto(message: MsgAssignBountyToReplyResponse): Uint8Array {
    return MsgAssignBountyToReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAssignBountyToReplyResponse): MsgAssignBountyToReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReplyResponse",
      value: MsgAssignBountyToReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTagBudget(): MsgCreateTagBudget {
  return {
    creator: "",
    tag: "",
    initialPool: "",
    membersOnly: false
  };
}
/**
 * MsgCreateTagBudget defines the MsgCreateTagBudget message.
 * @name MsgCreateTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateTagBudget
 */
export const MsgCreateTagBudget = {
  typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudget",
  encode(message: MsgCreateTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.initialPool !== "") {
      writer.uint32(26).string(message.initialPool);
    }
    if (message.membersOnly === true) {
      writer.uint32(32).bool(message.membersOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.initialPool = reader.string();
          break;
        case 4:
          message.membersOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateTagBudget>): MsgCreateTagBudget {
    const message = createBaseMsgCreateTagBudget();
    message.creator = object.creator ?? "";
    message.tag = object.tag ?? "";
    message.initialPool = object.initialPool ?? "";
    message.membersOnly = object.membersOnly ?? false;
    return message;
  },
  fromAmino(object: MsgCreateTagBudgetAmino): MsgCreateTagBudget {
    const message = createBaseMsgCreateTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.initial_pool !== undefined && object.initial_pool !== null) {
      message.initialPool = object.initial_pool;
    }
    if (object.members_only !== undefined && object.members_only !== null) {
      message.membersOnly = object.members_only;
    }
    return message;
  },
  toAmino(message: MsgCreateTagBudget): MsgCreateTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.initial_pool = message.initialPool === "" ? undefined : message.initialPool;
    obj.members_only = message.membersOnly === false ? undefined : message.membersOnly;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTagBudgetAminoMsg): MsgCreateTagBudget {
    return MsgCreateTagBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTagBudgetProtoMsg): MsgCreateTagBudget {
    return MsgCreateTagBudget.decode(message.value);
  },
  toProto(message: MsgCreateTagBudget): Uint8Array {
    return MsgCreateTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTagBudget): MsgCreateTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudget",
      value: MsgCreateTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTagBudgetResponse(): MsgCreateTagBudgetResponse {
  return {};
}
/**
 * MsgCreateTagBudgetResponse defines the MsgCreateTagBudgetResponse message.
 * @name MsgCreateTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCreateTagBudgetResponse
 */
export const MsgCreateTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudgetResponse",
  encode(_: MsgCreateTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgCreateTagBudgetResponse>): MsgCreateTagBudgetResponse {
    const message = createBaseMsgCreateTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgCreateTagBudgetResponseAmino): MsgCreateTagBudgetResponse {
    const message = createBaseMsgCreateTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgCreateTagBudgetResponse): MsgCreateTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTagBudgetResponseAminoMsg): MsgCreateTagBudgetResponse {
    return MsgCreateTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTagBudgetResponseProtoMsg): MsgCreateTagBudgetResponse {
    return MsgCreateTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgCreateTagBudgetResponse): Uint8Array {
    return MsgCreateTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTagBudgetResponse): MsgCreateTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudgetResponse",
      value: MsgCreateTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAwardFromTagBudget(): MsgAwardFromTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0),
    postId: BigInt(0),
    amount: "",
    reason: ""
  };
}
/**
 * MsgAwardFromTagBudget defines the MsgAwardFromTagBudget message.
 * @name MsgAwardFromTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardFromTagBudget
 */
export const MsgAwardFromTagBudget = {
  typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudget",
  encode(message: MsgAwardFromTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAwardFromTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAwardFromTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        case 3:
          message.postId = reader.uint64();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAwardFromTagBudget>): MsgAwardFromTagBudget {
    const message = createBaseMsgAwardFromTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAwardFromTagBudgetAmino): MsgAwardFromTagBudget {
    const message = createBaseMsgAwardFromTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAwardFromTagBudget): MsgAwardFromTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAwardFromTagBudgetAminoMsg): MsgAwardFromTagBudget {
    return MsgAwardFromTagBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAwardFromTagBudgetProtoMsg): MsgAwardFromTagBudget {
    return MsgAwardFromTagBudget.decode(message.value);
  },
  toProto(message: MsgAwardFromTagBudget): Uint8Array {
    return MsgAwardFromTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgAwardFromTagBudget): MsgAwardFromTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudget",
      value: MsgAwardFromTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgAwardFromTagBudgetResponse(): MsgAwardFromTagBudgetResponse {
  return {};
}
/**
 * MsgAwardFromTagBudgetResponse defines the MsgAwardFromTagBudgetResponse message.
 * @name MsgAwardFromTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAwardFromTagBudgetResponse
 */
export const MsgAwardFromTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudgetResponse",
  encode(_: MsgAwardFromTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAwardFromTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAwardFromTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgAwardFromTagBudgetResponse>): MsgAwardFromTagBudgetResponse {
    const message = createBaseMsgAwardFromTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgAwardFromTagBudgetResponseAmino): MsgAwardFromTagBudgetResponse {
    const message = createBaseMsgAwardFromTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgAwardFromTagBudgetResponse): MsgAwardFromTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAwardFromTagBudgetResponseAminoMsg): MsgAwardFromTagBudgetResponse {
    return MsgAwardFromTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAwardFromTagBudgetResponseProtoMsg): MsgAwardFromTagBudgetResponse {
    return MsgAwardFromTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgAwardFromTagBudgetResponse): Uint8Array {
    return MsgAwardFromTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAwardFromTagBudgetResponse): MsgAwardFromTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudgetResponse",
      value: MsgAwardFromTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpTagBudget(): MsgTopUpTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0),
    amount: ""
  };
}
/**
 * MsgTopUpTagBudget defines the MsgTopUpTagBudget message.
 * @name MsgTopUpTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgTopUpTagBudget
 */
export const MsgTopUpTagBudget = {
  typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudget",
  encode(message: MsgTopUpTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTopUpTagBudget>): MsgTopUpTagBudget {
    const message = createBaseMsgTopUpTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgTopUpTagBudgetAmino): MsgTopUpTagBudget {
    const message = createBaseMsgTopUpTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgTopUpTagBudget): MsgTopUpTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgTopUpTagBudgetAminoMsg): MsgTopUpTagBudget {
    return MsgTopUpTagBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpTagBudgetProtoMsg): MsgTopUpTagBudget {
    return MsgTopUpTagBudget.decode(message.value);
  },
  toProto(message: MsgTopUpTagBudget): Uint8Array {
    return MsgTopUpTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpTagBudget): MsgTopUpTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudget",
      value: MsgTopUpTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpTagBudgetResponse(): MsgTopUpTagBudgetResponse {
  return {};
}
/**
 * MsgTopUpTagBudgetResponse defines the MsgTopUpTagBudgetResponse message.
 * @name MsgTopUpTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgTopUpTagBudgetResponse
 */
export const MsgTopUpTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudgetResponse",
  encode(_: MsgTopUpTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgTopUpTagBudgetResponse>): MsgTopUpTagBudgetResponse {
    const message = createBaseMsgTopUpTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgTopUpTagBudgetResponseAmino): MsgTopUpTagBudgetResponse {
    const message = createBaseMsgTopUpTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgTopUpTagBudgetResponse): MsgTopUpTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTopUpTagBudgetResponseAminoMsg): MsgTopUpTagBudgetResponse {
    return MsgTopUpTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpTagBudgetResponseProtoMsg): MsgTopUpTagBudgetResponse {
    return MsgTopUpTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgTopUpTagBudgetResponse): Uint8Array {
    return MsgTopUpTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpTagBudgetResponse): MsgTopUpTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudgetResponse",
      value: MsgTopUpTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleTagBudget(): MsgToggleTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0),
    active: false
  };
}
/**
 * MsgToggleTagBudget defines the MsgToggleTagBudget message.
 * @name MsgToggleTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgToggleTagBudget
 */
export const MsgToggleTagBudget = {
  typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudget",
  encode(message: MsgToggleTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgToggleTagBudget>): MsgToggleTagBudget {
    const message = createBaseMsgToggleTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgToggleTagBudgetAmino): MsgToggleTagBudget {
    const message = createBaseMsgToggleTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgToggleTagBudget): MsgToggleTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgToggleTagBudgetAminoMsg): MsgToggleTagBudget {
    return MsgToggleTagBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleTagBudgetProtoMsg): MsgToggleTagBudget {
    return MsgToggleTagBudget.decode(message.value);
  },
  toProto(message: MsgToggleTagBudget): Uint8Array {
    return MsgToggleTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleTagBudget): MsgToggleTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudget",
      value: MsgToggleTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgToggleTagBudgetResponse(): MsgToggleTagBudgetResponse {
  return {};
}
/**
 * MsgToggleTagBudgetResponse defines the MsgToggleTagBudgetResponse message.
 * @name MsgToggleTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgToggleTagBudgetResponse
 */
export const MsgToggleTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudgetResponse",
  encode(_: MsgToggleTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgToggleTagBudgetResponse>): MsgToggleTagBudgetResponse {
    const message = createBaseMsgToggleTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgToggleTagBudgetResponseAmino): MsgToggleTagBudgetResponse {
    const message = createBaseMsgToggleTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgToggleTagBudgetResponse): MsgToggleTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleTagBudgetResponseAminoMsg): MsgToggleTagBudgetResponse {
    return MsgToggleTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleTagBudgetResponseProtoMsg): MsgToggleTagBudgetResponse {
    return MsgToggleTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgToggleTagBudgetResponse): Uint8Array {
    return MsgToggleTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleTagBudgetResponse): MsgToggleTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudgetResponse",
      value: MsgToggleTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTagBudget(): MsgWithdrawTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0)
  };
}
/**
 * MsgWithdrawTagBudget defines the MsgWithdrawTagBudget message.
 * @name MsgWithdrawTagBudget
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgWithdrawTagBudget
 */
export const MsgWithdrawTagBudget = {
  typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudget",
  encode(message: MsgWithdrawTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawTagBudget>): MsgWithdrawTagBudget {
    const message = createBaseMsgWithdrawTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawTagBudgetAmino): MsgWithdrawTagBudget {
    const message = createBaseMsgWithdrawTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawTagBudget): MsgWithdrawTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTagBudgetAminoMsg): MsgWithdrawTagBudget {
    return MsgWithdrawTagBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTagBudgetProtoMsg): MsgWithdrawTagBudget {
    return MsgWithdrawTagBudget.decode(message.value);
  },
  toProto(message: MsgWithdrawTagBudget): Uint8Array {
    return MsgWithdrawTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTagBudget): MsgWithdrawTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudget",
      value: MsgWithdrawTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTagBudgetResponse(): MsgWithdrawTagBudgetResponse {
  return {};
}
/**
 * MsgWithdrawTagBudgetResponse defines the MsgWithdrawTagBudgetResponse message.
 * @name MsgWithdrawTagBudgetResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgWithdrawTagBudgetResponse
 */
export const MsgWithdrawTagBudgetResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudgetResponse",
  encode(_: MsgWithdrawTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawTagBudgetResponse>): MsgWithdrawTagBudgetResponse {
    const message = createBaseMsgWithdrawTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTagBudgetResponseAmino): MsgWithdrawTagBudgetResponse {
    const message = createBaseMsgWithdrawTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgWithdrawTagBudgetResponse): MsgWithdrawTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTagBudgetResponseAminoMsg): MsgWithdrawTagBudgetResponse {
    return MsgWithdrawTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTagBudgetResponseProtoMsg): MsgWithdrawTagBudgetResponse {
    return MsgWithdrawTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTagBudgetResponse): Uint8Array {
    return MsgWithdrawTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTagBudgetResponse): MsgWithdrawTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudgetResponse",
      value: MsgWithdrawTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinReply(): MsgPinReply {
  return {
    creator: "",
    threadId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * MsgPinReply defines the MsgPinReply message.
 * @name MsgPinReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinReply
 */
export const MsgPinReply = {
  typeUrl: "/sparkdream.forum.v1.MsgPinReply",
  encode(message: MsgPinReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
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
          message.threadId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgPinReply>): MsgPinReply {
    const message = createBaseMsgPinReply();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPinReplyAmino): MsgPinReply {
    const message = createBaseMsgPinReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: MsgPinReply): MsgPinReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPinReplyAminoMsg): MsgPinReply {
    return MsgPinReply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPinReplyProtoMsg): MsgPinReply {
    return MsgPinReply.decode(message.value);
  },
  toProto(message: MsgPinReply): Uint8Array {
    return MsgPinReply.encode(message).finish();
  },
  toProtoMsg(message: MsgPinReply): MsgPinReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgPinReply",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgPinReplyResponse
 */
export const MsgPinReplyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgPinReplyResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgPinReplyResponse",
      value: MsgPinReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinReply(): MsgUnpinReply {
  return {
    creator: "",
    threadId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * MsgUnpinReply defines the MsgUnpinReply message.
 * @name MsgUnpinReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinReply
 */
export const MsgUnpinReply = {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinReply",
  encode(message: MsgUnpinReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
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
          message.threadId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgUnpinReply>): MsgUnpinReply {
    const message = createBaseMsgUnpinReply();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnpinReplyAmino): MsgUnpinReply {
    const message = createBaseMsgUnpinReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: MsgUnpinReply): MsgUnpinReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnpinReplyAminoMsg): MsgUnpinReply {
    return MsgUnpinReply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpinReplyProtoMsg): MsgUnpinReply {
    return MsgUnpinReply.decode(message.value);
  },
  toProto(message: MsgUnpinReply): Uint8Array {
    return MsgUnpinReply.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinReply): MsgUnpinReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnpinReply",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnpinReplyResponse
 */
export const MsgUnpinReplyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnpinReplyResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgUnpinReplyResponse",
      value: MsgUnpinReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisputePin(): MsgDisputePin {
  return {
    creator: "",
    threadId: BigInt(0),
    replyId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgDisputePin defines the MsgDisputePin message.
 * @name MsgDisputePin
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDisputePin
 */
export const MsgDisputePin = {
  typeUrl: "/sparkdream.forum.v1.MsgDisputePin",
  encode(message: MsgDisputePin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisputePin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisputePin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.replyId = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDisputePin>): MsgDisputePin {
    const message = createBaseMsgDisputePin();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgDisputePinAmino): MsgDisputePin {
    const message = createBaseMsgDisputePin();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgDisputePin): MsgDisputePinAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgDisputePinAminoMsg): MsgDisputePin {
    return MsgDisputePin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisputePinProtoMsg): MsgDisputePin {
    return MsgDisputePin.decode(message.value);
  },
  toProto(message: MsgDisputePin): Uint8Array {
    return MsgDisputePin.encode(message).finish();
  },
  toProtoMsg(message: MsgDisputePin): MsgDisputePinProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDisputePin",
      value: MsgDisputePin.encode(message).finish()
    };
  }
};
function createBaseMsgDisputePinResponse(): MsgDisputePinResponse {
  return {};
}
/**
 * MsgDisputePinResponse defines the MsgDisputePinResponse message.
 * @name MsgDisputePinResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDisputePinResponse
 */
export const MsgDisputePinResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgDisputePinResponse",
  encode(_: MsgDisputePinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisputePinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisputePinResponse();
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
  fromPartial(_: DeepPartial<MsgDisputePinResponse>): MsgDisputePinResponse {
    const message = createBaseMsgDisputePinResponse();
    return message;
  },
  fromAmino(_: MsgDisputePinResponseAmino): MsgDisputePinResponse {
    const message = createBaseMsgDisputePinResponse();
    return message;
  },
  toAmino(_: MsgDisputePinResponse): MsgDisputePinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisputePinResponseAminoMsg): MsgDisputePinResponse {
    return MsgDisputePinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisputePinResponseProtoMsg): MsgDisputePinResponse {
    return MsgDisputePinResponse.decode(message.value);
  },
  toProto(message: MsgDisputePinResponse): Uint8Array {
    return MsgDisputePinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisputePinResponse): MsgDisputePinResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDisputePinResponse",
      value: MsgDisputePinResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMarkAcceptedReply(): MsgMarkAcceptedReply {
  return {
    creator: "",
    threadId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * MsgMarkAcceptedReply defines the MsgMarkAcceptedReply message.
 * @name MsgMarkAcceptedReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMarkAcceptedReply
 */
export const MsgMarkAcceptedReply = {
  typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReply",
  encode(message: MsgMarkAcceptedReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMarkAcceptedReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMarkAcceptedReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgMarkAcceptedReply>): MsgMarkAcceptedReply {
    const message = createBaseMsgMarkAcceptedReply();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMarkAcceptedReplyAmino): MsgMarkAcceptedReply {
    const message = createBaseMsgMarkAcceptedReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: MsgMarkAcceptedReply): MsgMarkAcceptedReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMarkAcceptedReplyAminoMsg): MsgMarkAcceptedReply {
    return MsgMarkAcceptedReply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMarkAcceptedReplyProtoMsg): MsgMarkAcceptedReply {
    return MsgMarkAcceptedReply.decode(message.value);
  },
  toProto(message: MsgMarkAcceptedReply): Uint8Array {
    return MsgMarkAcceptedReply.encode(message).finish();
  },
  toProtoMsg(message: MsgMarkAcceptedReply): MsgMarkAcceptedReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReply",
      value: MsgMarkAcceptedReply.encode(message).finish()
    };
  }
};
function createBaseMsgMarkAcceptedReplyResponse(): MsgMarkAcceptedReplyResponse {
  return {};
}
/**
 * MsgMarkAcceptedReplyResponse defines the MsgMarkAcceptedReplyResponse message.
 * @name MsgMarkAcceptedReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMarkAcceptedReplyResponse
 */
export const MsgMarkAcceptedReplyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReplyResponse",
  encode(_: MsgMarkAcceptedReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMarkAcceptedReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMarkAcceptedReplyResponse();
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
  fromPartial(_: DeepPartial<MsgMarkAcceptedReplyResponse>): MsgMarkAcceptedReplyResponse {
    const message = createBaseMsgMarkAcceptedReplyResponse();
    return message;
  },
  fromAmino(_: MsgMarkAcceptedReplyResponseAmino): MsgMarkAcceptedReplyResponse {
    const message = createBaseMsgMarkAcceptedReplyResponse();
    return message;
  },
  toAmino(_: MsgMarkAcceptedReplyResponse): MsgMarkAcceptedReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMarkAcceptedReplyResponseAminoMsg): MsgMarkAcceptedReplyResponse {
    return MsgMarkAcceptedReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMarkAcceptedReplyResponseProtoMsg): MsgMarkAcceptedReplyResponse {
    return MsgMarkAcceptedReplyResponse.decode(message.value);
  },
  toProto(message: MsgMarkAcceptedReplyResponse): Uint8Array {
    return MsgMarkAcceptedReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMarkAcceptedReplyResponse): MsgMarkAcceptedReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReplyResponse",
      value: MsgMarkAcceptedReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmProposedReply(): MsgConfirmProposedReply {
  return {
    creator: "",
    threadId: BigInt(0)
  };
}
/**
 * MsgConfirmProposedReply defines the MsgConfirmProposedReply message.
 * @name MsgConfirmProposedReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgConfirmProposedReply
 */
export const MsgConfirmProposedReply = {
  typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReply",
  encode(message: MsgConfirmProposedReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmProposedReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmProposedReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConfirmProposedReply>): MsgConfirmProposedReply {
    const message = createBaseMsgConfirmProposedReply();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgConfirmProposedReplyAmino): MsgConfirmProposedReply {
    const message = createBaseMsgConfirmProposedReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: MsgConfirmProposedReply): MsgConfirmProposedReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmProposedReplyAminoMsg): MsgConfirmProposedReply {
    return MsgConfirmProposedReply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmProposedReplyProtoMsg): MsgConfirmProposedReply {
    return MsgConfirmProposedReply.decode(message.value);
  },
  toProto(message: MsgConfirmProposedReply): Uint8Array {
    return MsgConfirmProposedReply.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmProposedReply): MsgConfirmProposedReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReply",
      value: MsgConfirmProposedReply.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmProposedReplyResponse(): MsgConfirmProposedReplyResponse {
  return {};
}
/**
 * MsgConfirmProposedReplyResponse defines the MsgConfirmProposedReplyResponse message.
 * @name MsgConfirmProposedReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgConfirmProposedReplyResponse
 */
export const MsgConfirmProposedReplyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReplyResponse",
  encode(_: MsgConfirmProposedReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmProposedReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmProposedReplyResponse();
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
  fromPartial(_: DeepPartial<MsgConfirmProposedReplyResponse>): MsgConfirmProposedReplyResponse {
    const message = createBaseMsgConfirmProposedReplyResponse();
    return message;
  },
  fromAmino(_: MsgConfirmProposedReplyResponseAmino): MsgConfirmProposedReplyResponse {
    const message = createBaseMsgConfirmProposedReplyResponse();
    return message;
  },
  toAmino(_: MsgConfirmProposedReplyResponse): MsgConfirmProposedReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmProposedReplyResponseAminoMsg): MsgConfirmProposedReplyResponse {
    return MsgConfirmProposedReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmProposedReplyResponseProtoMsg): MsgConfirmProposedReplyResponse {
    return MsgConfirmProposedReplyResponse.decode(message.value);
  },
  toProto(message: MsgConfirmProposedReplyResponse): Uint8Array {
    return MsgConfirmProposedReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmProposedReplyResponse): MsgConfirmProposedReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReplyResponse",
      value: MsgConfirmProposedReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRejectProposedReply(): MsgRejectProposedReply {
  return {
    creator: "",
    threadId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgRejectProposedReply defines the MsgRejectProposedReply message.
 * @name MsgRejectProposedReply
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgRejectProposedReply
 */
export const MsgRejectProposedReply = {
  typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReply",
  encode(message: MsgRejectProposedReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectProposedReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectProposedReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRejectProposedReply>): MsgRejectProposedReply {
    const message = createBaseMsgRejectProposedReply();
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRejectProposedReplyAmino): MsgRejectProposedReply {
    const message = createBaseMsgRejectProposedReply();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRejectProposedReply): MsgRejectProposedReplyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRejectProposedReplyAminoMsg): MsgRejectProposedReply {
    return MsgRejectProposedReply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectProposedReplyProtoMsg): MsgRejectProposedReply {
    return MsgRejectProposedReply.decode(message.value);
  },
  toProto(message: MsgRejectProposedReply): Uint8Array {
    return MsgRejectProposedReply.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectProposedReply): MsgRejectProposedReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReply",
      value: MsgRejectProposedReply.encode(message).finish()
    };
  }
};
function createBaseMsgRejectProposedReplyResponse(): MsgRejectProposedReplyResponse {
  return {};
}
/**
 * MsgRejectProposedReplyResponse defines the MsgRejectProposedReplyResponse message.
 * @name MsgRejectProposedReplyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgRejectProposedReplyResponse
 */
export const MsgRejectProposedReplyResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReplyResponse",
  encode(_: MsgRejectProposedReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectProposedReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectProposedReplyResponse();
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
  fromPartial(_: DeepPartial<MsgRejectProposedReplyResponse>): MsgRejectProposedReplyResponse {
    const message = createBaseMsgRejectProposedReplyResponse();
    return message;
  },
  fromAmino(_: MsgRejectProposedReplyResponseAmino): MsgRejectProposedReplyResponse {
    const message = createBaseMsgRejectProposedReplyResponse();
    return message;
  },
  toAmino(_: MsgRejectProposedReplyResponse): MsgRejectProposedReplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRejectProposedReplyResponseAminoMsg): MsgRejectProposedReplyResponse {
    return MsgRejectProposedReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectProposedReplyResponseProtoMsg): MsgRejectProposedReplyResponse {
    return MsgRejectProposedReplyResponse.decode(message.value);
  },
  toProto(message: MsgRejectProposedReplyResponse): Uint8Array {
    return MsgRejectProposedReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectProposedReplyResponse): MsgRejectProposedReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReplyResponse",
      value: MsgRejectProposedReplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetForumPaused(): MsgSetForumPaused {
  return {
    creator: "",
    paused: false
  };
}
/**
 * MsgSetForumPaused defines the MsgSetForumPaused message.
 * @name MsgSetForumPaused
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetForumPaused
 */
export const MsgSetForumPaused = {
  typeUrl: "/sparkdream.forum.v1.MsgSetForumPaused",
  encode(message: MsgSetForumPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.paused === true) {
      writer.uint32(16).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetForumPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetForumPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetForumPaused>): MsgSetForumPaused {
    const message = createBaseMsgSetForumPaused();
    message.creator = object.creator ?? "";
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: MsgSetForumPausedAmino): MsgSetForumPaused {
    const message = createBaseMsgSetForumPaused();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: MsgSetForumPaused): MsgSetForumPausedAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.paused = message.paused === false ? undefined : message.paused;
    return obj;
  },
  fromAminoMsg(object: MsgSetForumPausedAminoMsg): MsgSetForumPaused {
    return MsgSetForumPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetForumPausedProtoMsg): MsgSetForumPaused {
    return MsgSetForumPaused.decode(message.value);
  },
  toProto(message: MsgSetForumPaused): Uint8Array {
    return MsgSetForumPaused.encode(message).finish();
  },
  toProtoMsg(message: MsgSetForumPaused): MsgSetForumPausedProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgSetForumPaused",
      value: MsgSetForumPaused.encode(message).finish()
    };
  }
};
function createBaseMsgSetForumPausedResponse(): MsgSetForumPausedResponse {
  return {};
}
/**
 * MsgSetForumPausedResponse defines the MsgSetForumPausedResponse message.
 * @name MsgSetForumPausedResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetForumPausedResponse
 */
export const MsgSetForumPausedResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgSetForumPausedResponse",
  encode(_: MsgSetForumPausedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetForumPausedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetForumPausedResponse();
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
  fromPartial(_: DeepPartial<MsgSetForumPausedResponse>): MsgSetForumPausedResponse {
    const message = createBaseMsgSetForumPausedResponse();
    return message;
  },
  fromAmino(_: MsgSetForumPausedResponseAmino): MsgSetForumPausedResponse {
    const message = createBaseMsgSetForumPausedResponse();
    return message;
  },
  toAmino(_: MsgSetForumPausedResponse): MsgSetForumPausedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetForumPausedResponseAminoMsg): MsgSetForumPausedResponse {
    return MsgSetForumPausedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetForumPausedResponseProtoMsg): MsgSetForumPausedResponse {
    return MsgSetForumPausedResponse.decode(message.value);
  },
  toProto(message: MsgSetForumPausedResponse): Uint8Array {
    return MsgSetForumPausedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetForumPausedResponse): MsgSetForumPausedResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgSetForumPausedResponse",
      value: MsgSetForumPausedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetModerationPaused(): MsgSetModerationPaused {
  return {
    creator: "",
    paused: false
  };
}
/**
 * MsgSetModerationPaused defines the MsgSetModerationPaused message.
 * @name MsgSetModerationPaused
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetModerationPaused
 */
export const MsgSetModerationPaused = {
  typeUrl: "/sparkdream.forum.v1.MsgSetModerationPaused",
  encode(message: MsgSetModerationPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.paused === true) {
      writer.uint32(16).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetModerationPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModerationPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetModerationPaused>): MsgSetModerationPaused {
    const message = createBaseMsgSetModerationPaused();
    message.creator = object.creator ?? "";
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: MsgSetModerationPausedAmino): MsgSetModerationPaused {
    const message = createBaseMsgSetModerationPaused();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: MsgSetModerationPaused): MsgSetModerationPausedAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.paused = message.paused === false ? undefined : message.paused;
    return obj;
  },
  fromAminoMsg(object: MsgSetModerationPausedAminoMsg): MsgSetModerationPaused {
    return MsgSetModerationPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetModerationPausedProtoMsg): MsgSetModerationPaused {
    return MsgSetModerationPaused.decode(message.value);
  },
  toProto(message: MsgSetModerationPaused): Uint8Array {
    return MsgSetModerationPaused.encode(message).finish();
  },
  toProtoMsg(message: MsgSetModerationPaused): MsgSetModerationPausedProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgSetModerationPaused",
      value: MsgSetModerationPaused.encode(message).finish()
    };
  }
};
function createBaseMsgSetModerationPausedResponse(): MsgSetModerationPausedResponse {
  return {};
}
/**
 * MsgSetModerationPausedResponse defines the MsgSetModerationPausedResponse message.
 * @name MsgSetModerationPausedResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgSetModerationPausedResponse
 */
export const MsgSetModerationPausedResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgSetModerationPausedResponse",
  encode(_: MsgSetModerationPausedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetModerationPausedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModerationPausedResponse();
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
  fromPartial(_: DeepPartial<MsgSetModerationPausedResponse>): MsgSetModerationPausedResponse {
    const message = createBaseMsgSetModerationPausedResponse();
    return message;
  },
  fromAmino(_: MsgSetModerationPausedResponseAmino): MsgSetModerationPausedResponse {
    const message = createBaseMsgSetModerationPausedResponse();
    return message;
  },
  toAmino(_: MsgSetModerationPausedResponse): MsgSetModerationPausedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetModerationPausedResponseAminoMsg): MsgSetModerationPausedResponse {
    return MsgSetModerationPausedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetModerationPausedResponseProtoMsg): MsgSetModerationPausedResponse {
    return MsgSetModerationPausedResponse.decode(message.value);
  },
  toProto(message: MsgSetModerationPausedResponse): Uint8Array {
    return MsgSetModerationPausedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetModerationPausedResponse): MsgSetModerationPausedResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgSetModerationPausedResponse",
      value: MsgSetModerationPausedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportTag(): MsgReportTag {
  return {
    creator: "",
    tagName: "",
    reason: ""
  };
}
/**
 * MsgReportTag defines the MsgReportTag message.
 * @name MsgReportTag
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportTag
 */
export const MsgReportTag = {
  typeUrl: "/sparkdream.forum.v1.MsgReportTag",
  encode(message: MsgReportTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tagName !== "") {
      writer.uint32(18).string(message.tagName);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportTag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tagName = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReportTag>): MsgReportTag {
    const message = createBaseMsgReportTag();
    message.creator = object.creator ?? "";
    message.tagName = object.tagName ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgReportTagAmino): MsgReportTag {
    const message = createBaseMsgReportTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgReportTag): MsgReportTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgReportTagAminoMsg): MsgReportTag {
    return MsgReportTag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportTagProtoMsg): MsgReportTag {
    return MsgReportTag.decode(message.value);
  },
  toProto(message: MsgReportTag): Uint8Array {
    return MsgReportTag.encode(message).finish();
  },
  toProtoMsg(message: MsgReportTag): MsgReportTagProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgReportTag",
      value: MsgReportTag.encode(message).finish()
    };
  }
};
function createBaseMsgReportTagResponse(): MsgReportTagResponse {
  return {};
}
/**
 * MsgReportTagResponse defines the MsgReportTagResponse message.
 * @name MsgReportTagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportTagResponse
 */
export const MsgReportTagResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgReportTagResponse",
  encode(_: MsgReportTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportTagResponse();
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
  fromPartial(_: DeepPartial<MsgReportTagResponse>): MsgReportTagResponse {
    const message = createBaseMsgReportTagResponse();
    return message;
  },
  fromAmino(_: MsgReportTagResponseAmino): MsgReportTagResponse {
    const message = createBaseMsgReportTagResponse();
    return message;
  },
  toAmino(_: MsgReportTagResponse): MsgReportTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReportTagResponseAminoMsg): MsgReportTagResponse {
    return MsgReportTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportTagResponseProtoMsg): MsgReportTagResponse {
    return MsgReportTagResponse.decode(message.value);
  },
  toProto(message: MsgReportTagResponse): Uint8Array {
    return MsgReportTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportTagResponse): MsgReportTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgReportTagResponse",
      value: MsgReportTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveTagReport(): MsgResolveTagReport {
  return {
    creator: "",
    tagName: "",
    action: BigInt(0),
    reserveAuthority: "",
    reserveMembersCanUse: false
  };
}
/**
 * MsgResolveTagReport defines the MsgResolveTagReport message.
 * @name MsgResolveTagReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveTagReport
 */
export const MsgResolveTagReport = {
  typeUrl: "/sparkdream.forum.v1.MsgResolveTagReport",
  encode(message: MsgResolveTagReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tagName !== "") {
      writer.uint32(18).string(message.tagName);
    }
    if (message.action !== BigInt(0)) {
      writer.uint32(24).uint64(message.action);
    }
    if (message.reserveAuthority !== "") {
      writer.uint32(34).string(message.reserveAuthority);
    }
    if (message.reserveMembersCanUse === true) {
      writer.uint32(40).bool(message.reserveMembersCanUse);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveTagReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveTagReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tagName = reader.string();
          break;
        case 3:
          message.action = reader.uint64();
          break;
        case 4:
          message.reserveAuthority = reader.string();
          break;
        case 5:
          message.reserveMembersCanUse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveTagReport>): MsgResolveTagReport {
    const message = createBaseMsgResolveTagReport();
    message.creator = object.creator ?? "";
    message.tagName = object.tagName ?? "";
    message.action = object.action !== undefined && object.action !== null ? BigInt(object.action.toString()) : BigInt(0);
    message.reserveAuthority = object.reserveAuthority ?? "";
    message.reserveMembersCanUse = object.reserveMembersCanUse ?? false;
    return message;
  },
  fromAmino(object: MsgResolveTagReportAmino): MsgResolveTagReport {
    const message = createBaseMsgResolveTagReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = BigInt(object.action);
    }
    if (object.reserve_authority !== undefined && object.reserve_authority !== null) {
      message.reserveAuthority = object.reserve_authority;
    }
    if (object.reserve_members_can_use !== undefined && object.reserve_members_can_use !== null) {
      message.reserveMembersCanUse = object.reserve_members_can_use;
    }
    return message;
  },
  toAmino(message: MsgResolveTagReport): MsgResolveTagReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.action = message.action !== BigInt(0) ? message.action?.toString() : undefined;
    obj.reserve_authority = message.reserveAuthority === "" ? undefined : message.reserveAuthority;
    obj.reserve_members_can_use = message.reserveMembersCanUse === false ? undefined : message.reserveMembersCanUse;
    return obj;
  },
  fromAminoMsg(object: MsgResolveTagReportAminoMsg): MsgResolveTagReport {
    return MsgResolveTagReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveTagReportProtoMsg): MsgResolveTagReport {
    return MsgResolveTagReport.decode(message.value);
  },
  toProto(message: MsgResolveTagReport): Uint8Array {
    return MsgResolveTagReport.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveTagReport): MsgResolveTagReportProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgResolveTagReport",
      value: MsgResolveTagReport.encode(message).finish()
    };
  }
};
function createBaseMsgResolveTagReportResponse(): MsgResolveTagReportResponse {
  return {};
}
/**
 * MsgResolveTagReportResponse defines the MsgResolveTagReportResponse message.
 * @name MsgResolveTagReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveTagReportResponse
 */
export const MsgResolveTagReportResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgResolveTagReportResponse",
  encode(_: MsgResolveTagReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveTagReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveTagReportResponse();
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
  fromPartial(_: DeepPartial<MsgResolveTagReportResponse>): MsgResolveTagReportResponse {
    const message = createBaseMsgResolveTagReportResponse();
    return message;
  },
  fromAmino(_: MsgResolveTagReportResponseAmino): MsgResolveTagReportResponse {
    const message = createBaseMsgResolveTagReportResponse();
    return message;
  },
  toAmino(_: MsgResolveTagReportResponse): MsgResolveTagReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveTagReportResponseAminoMsg): MsgResolveTagReportResponse {
    return MsgResolveTagReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveTagReportResponseProtoMsg): MsgResolveTagReportResponse {
    return MsgResolveTagReportResponse.decode(message.value);
  },
  toProto(message: MsgResolveTagReportResponse): Uint8Array {
    return MsgResolveTagReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveTagReportResponse): MsgResolveTagReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgResolveTagReportResponse",
      value: MsgResolveTagReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBondSentinel(): MsgBondSentinel {
  return {
    creator: "",
    amount: ""
  };
}
/**
 * MsgBondSentinel defines the MsgBondSentinel message.
 * @name MsgBondSentinel
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgBondSentinel
 */
export const MsgBondSentinel = {
  typeUrl: "/sparkdream.forum.v1.MsgBondSentinel",
  encode(message: MsgBondSentinel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondSentinel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondSentinel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBondSentinel>): MsgBondSentinel {
    const message = createBaseMsgBondSentinel();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgBondSentinelAmino): MsgBondSentinel {
    const message = createBaseMsgBondSentinel();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgBondSentinel): MsgBondSentinelAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgBondSentinelAminoMsg): MsgBondSentinel {
    return MsgBondSentinel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondSentinelProtoMsg): MsgBondSentinel {
    return MsgBondSentinel.decode(message.value);
  },
  toProto(message: MsgBondSentinel): Uint8Array {
    return MsgBondSentinel.encode(message).finish();
  },
  toProtoMsg(message: MsgBondSentinel): MsgBondSentinelProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgBondSentinel",
      value: MsgBondSentinel.encode(message).finish()
    };
  }
};
function createBaseMsgBondSentinelResponse(): MsgBondSentinelResponse {
  return {};
}
/**
 * MsgBondSentinelResponse defines the MsgBondSentinelResponse message.
 * @name MsgBondSentinelResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgBondSentinelResponse
 */
export const MsgBondSentinelResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgBondSentinelResponse",
  encode(_: MsgBondSentinelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondSentinelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondSentinelResponse();
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
  fromPartial(_: DeepPartial<MsgBondSentinelResponse>): MsgBondSentinelResponse {
    const message = createBaseMsgBondSentinelResponse();
    return message;
  },
  fromAmino(_: MsgBondSentinelResponseAmino): MsgBondSentinelResponse {
    const message = createBaseMsgBondSentinelResponse();
    return message;
  },
  toAmino(_: MsgBondSentinelResponse): MsgBondSentinelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBondSentinelResponseAminoMsg): MsgBondSentinelResponse {
    return MsgBondSentinelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondSentinelResponseProtoMsg): MsgBondSentinelResponse {
    return MsgBondSentinelResponse.decode(message.value);
  },
  toProto(message: MsgBondSentinelResponse): Uint8Array {
    return MsgBondSentinelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBondSentinelResponse): MsgBondSentinelResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgBondSentinelResponse",
      value: MsgBondSentinelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondSentinel(): MsgUnbondSentinel {
  return {
    creator: "",
    amount: ""
  };
}
/**
 * MsgUnbondSentinel defines the MsgUnbondSentinel message.
 * @name MsgUnbondSentinel
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnbondSentinel
 */
export const MsgUnbondSentinel = {
  typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinel",
  encode(message: MsgUnbondSentinel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondSentinel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondSentinel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnbondSentinel>): MsgUnbondSentinel {
    const message = createBaseMsgUnbondSentinel();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondSentinelAmino): MsgUnbondSentinel {
    const message = createBaseMsgUnbondSentinel();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgUnbondSentinel): MsgUnbondSentinelAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondSentinelAminoMsg): MsgUnbondSentinel {
    return MsgUnbondSentinel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondSentinelProtoMsg): MsgUnbondSentinel {
    return MsgUnbondSentinel.decode(message.value);
  },
  toProto(message: MsgUnbondSentinel): Uint8Array {
    return MsgUnbondSentinel.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondSentinel): MsgUnbondSentinelProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinel",
      value: MsgUnbondSentinel.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondSentinelResponse(): MsgUnbondSentinelResponse {
  return {};
}
/**
 * MsgUnbondSentinelResponse defines the MsgUnbondSentinelResponse message.
 * @name MsgUnbondSentinelResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnbondSentinelResponse
 */
export const MsgUnbondSentinelResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinelResponse",
  encode(_: MsgUnbondSentinelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondSentinelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondSentinelResponse();
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
  fromPartial(_: DeepPartial<MsgUnbondSentinelResponse>): MsgUnbondSentinelResponse {
    const message = createBaseMsgUnbondSentinelResponse();
    return message;
  },
  fromAmino(_: MsgUnbondSentinelResponseAmino): MsgUnbondSentinelResponse {
    const message = createBaseMsgUnbondSentinelResponse();
    return message;
  },
  toAmino(_: MsgUnbondSentinelResponse): MsgUnbondSentinelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondSentinelResponseAminoMsg): MsgUnbondSentinelResponse {
    return MsgUnbondSentinelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondSentinelResponseProtoMsg): MsgUnbondSentinelResponse {
    return MsgUnbondSentinelResponse.decode(message.value);
  },
  toProto(message: MsgUnbondSentinelResponse): Uint8Array {
    return MsgUnbondSentinelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondSentinelResponse): MsgUnbondSentinelResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinelResponse",
      value: MsgUnbondSentinelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportMember(): MsgReportMember {
  return {
    creator: "",
    member: "",
    reason: "",
    recommendedAction: BigInt(0)
  };
}
/**
 * MsgReportMember defines the MsgReportMember message.
 * @name MsgReportMember
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportMember
 */
export const MsgReportMember = {
  typeUrl: "/sparkdream.forum.v1.MsgReportMember",
  encode(message: MsgReportMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.recommendedAction !== BigInt(0)) {
      writer.uint32(32).uint64(message.recommendedAction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.recommendedAction = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReportMember>): MsgReportMember {
    const message = createBaseMsgReportMember();
    message.creator = object.creator ?? "";
    message.member = object.member ?? "";
    message.reason = object.reason ?? "";
    message.recommendedAction = object.recommendedAction !== undefined && object.recommendedAction !== null ? BigInt(object.recommendedAction.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgReportMemberAmino): MsgReportMember {
    const message = createBaseMsgReportMember();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.recommended_action !== undefined && object.recommended_action !== null) {
      message.recommendedAction = BigInt(object.recommended_action);
    }
    return message;
  },
  toAmino(message: MsgReportMember): MsgReportMemberAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.member = message.member === "" ? undefined : message.member;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.recommended_action = message.recommendedAction !== BigInt(0) ? message.recommendedAction?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgReportMemberAminoMsg): MsgReportMember {
    return MsgReportMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportMemberProtoMsg): MsgReportMember {
    return MsgReportMember.decode(message.value);
  },
  toProto(message: MsgReportMember): Uint8Array {
    return MsgReportMember.encode(message).finish();
  },
  toProtoMsg(message: MsgReportMember): MsgReportMemberProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgReportMember",
      value: MsgReportMember.encode(message).finish()
    };
  }
};
function createBaseMsgReportMemberResponse(): MsgReportMemberResponse {
  return {};
}
/**
 * MsgReportMemberResponse defines the MsgReportMemberResponse message.
 * @name MsgReportMemberResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReportMemberResponse
 */
export const MsgReportMemberResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgReportMemberResponse",
  encode(_: MsgReportMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportMemberResponse();
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
  fromPartial(_: DeepPartial<MsgReportMemberResponse>): MsgReportMemberResponse {
    const message = createBaseMsgReportMemberResponse();
    return message;
  },
  fromAmino(_: MsgReportMemberResponseAmino): MsgReportMemberResponse {
    const message = createBaseMsgReportMemberResponse();
    return message;
  },
  toAmino(_: MsgReportMemberResponse): MsgReportMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReportMemberResponseAminoMsg): MsgReportMemberResponse {
    return MsgReportMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportMemberResponseProtoMsg): MsgReportMemberResponse {
    return MsgReportMemberResponse.decode(message.value);
  },
  toProto(message: MsgReportMemberResponse): Uint8Array {
    return MsgReportMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportMemberResponse): MsgReportMemberResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgReportMemberResponse",
      value: MsgReportMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCosignMemberReport(): MsgCosignMemberReport {
  return {
    creator: "",
    member: ""
  };
}
/**
 * MsgCosignMemberReport defines the MsgCosignMemberReport message.
 * @name MsgCosignMemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCosignMemberReport
 */
export const MsgCosignMemberReport = {
  typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReport",
  encode(message: MsgCosignMemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCosignMemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCosignMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCosignMemberReport>): MsgCosignMemberReport {
    const message = createBaseMsgCosignMemberReport();
    message.creator = object.creator ?? "";
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: MsgCosignMemberReportAmino): MsgCosignMemberReport {
    const message = createBaseMsgCosignMemberReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: MsgCosignMemberReport): MsgCosignMemberReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: MsgCosignMemberReportAminoMsg): MsgCosignMemberReport {
    return MsgCosignMemberReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCosignMemberReportProtoMsg): MsgCosignMemberReport {
    return MsgCosignMemberReport.decode(message.value);
  },
  toProto(message: MsgCosignMemberReport): Uint8Array {
    return MsgCosignMemberReport.encode(message).finish();
  },
  toProtoMsg(message: MsgCosignMemberReport): MsgCosignMemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReport",
      value: MsgCosignMemberReport.encode(message).finish()
    };
  }
};
function createBaseMsgCosignMemberReportResponse(): MsgCosignMemberReportResponse {
  return {};
}
/**
 * MsgCosignMemberReportResponse defines the MsgCosignMemberReportResponse message.
 * @name MsgCosignMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgCosignMemberReportResponse
 */
export const MsgCosignMemberReportResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReportResponse",
  encode(_: MsgCosignMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCosignMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCosignMemberReportResponse();
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
  fromPartial(_: DeepPartial<MsgCosignMemberReportResponse>): MsgCosignMemberReportResponse {
    const message = createBaseMsgCosignMemberReportResponse();
    return message;
  },
  fromAmino(_: MsgCosignMemberReportResponseAmino): MsgCosignMemberReportResponse {
    const message = createBaseMsgCosignMemberReportResponse();
    return message;
  },
  toAmino(_: MsgCosignMemberReportResponse): MsgCosignMemberReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCosignMemberReportResponseAminoMsg): MsgCosignMemberReportResponse {
    return MsgCosignMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCosignMemberReportResponseProtoMsg): MsgCosignMemberReportResponse {
    return MsgCosignMemberReportResponse.decode(message.value);
  },
  toProto(message: MsgCosignMemberReportResponse): Uint8Array {
    return MsgCosignMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCosignMemberReportResponse): MsgCosignMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReportResponse",
      value: MsgCosignMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveMemberReport(): MsgResolveMemberReport {
  return {
    creator: "",
    member: "",
    action: BigInt(0),
    reason: ""
  };
}
/**
 * MsgResolveMemberReport defines the MsgResolveMemberReport message.
 * @name MsgResolveMemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveMemberReport
 */
export const MsgResolveMemberReport = {
  typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReport",
  encode(message: MsgResolveMemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.action !== BigInt(0)) {
      writer.uint32(24).uint64(message.action);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveMemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        case 3:
          message.action = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveMemberReport>): MsgResolveMemberReport {
    const message = createBaseMsgResolveMemberReport();
    message.creator = object.creator ?? "";
    message.member = object.member ?? "";
    message.action = object.action !== undefined && object.action !== null ? BigInt(object.action.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgResolveMemberReportAmino): MsgResolveMemberReport {
    const message = createBaseMsgResolveMemberReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = BigInt(object.action);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgResolveMemberReport): MsgResolveMemberReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.member = message.member === "" ? undefined : message.member;
    obj.action = message.action !== BigInt(0) ? message.action?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgResolveMemberReportAminoMsg): MsgResolveMemberReport {
    return MsgResolveMemberReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveMemberReportProtoMsg): MsgResolveMemberReport {
    return MsgResolveMemberReport.decode(message.value);
  },
  toProto(message: MsgResolveMemberReport): Uint8Array {
    return MsgResolveMemberReport.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveMemberReport): MsgResolveMemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReport",
      value: MsgResolveMemberReport.encode(message).finish()
    };
  }
};
function createBaseMsgResolveMemberReportResponse(): MsgResolveMemberReportResponse {
  return {};
}
/**
 * MsgResolveMemberReportResponse defines the MsgResolveMemberReportResponse message.
 * @name MsgResolveMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgResolveMemberReportResponse
 */
export const MsgResolveMemberReportResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReportResponse",
  encode(_: MsgResolveMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveMemberReportResponse();
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
  fromPartial(_: DeepPartial<MsgResolveMemberReportResponse>): MsgResolveMemberReportResponse {
    const message = createBaseMsgResolveMemberReportResponse();
    return message;
  },
  fromAmino(_: MsgResolveMemberReportResponseAmino): MsgResolveMemberReportResponse {
    const message = createBaseMsgResolveMemberReportResponse();
    return message;
  },
  toAmino(_: MsgResolveMemberReportResponse): MsgResolveMemberReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveMemberReportResponseAminoMsg): MsgResolveMemberReportResponse {
    return MsgResolveMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveMemberReportResponseProtoMsg): MsgResolveMemberReportResponse {
    return MsgResolveMemberReportResponse.decode(message.value);
  },
  toProto(message: MsgResolveMemberReportResponse): Uint8Array {
    return MsgResolveMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveMemberReportResponse): MsgResolveMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReportResponse",
      value: MsgResolveMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDefendMemberReport(): MsgDefendMemberReport {
  return {
    creator: "",
    defense: ""
  };
}
/**
 * MsgDefendMemberReport defines the MsgDefendMemberReport message.
 * @name MsgDefendMemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDefendMemberReport
 */
export const MsgDefendMemberReport = {
  typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReport",
  encode(message: MsgDefendMemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defense !== "") {
      writer.uint32(18).string(message.defense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefendMemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefendMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.defense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDefendMemberReport>): MsgDefendMemberReport {
    const message = createBaseMsgDefendMemberReport();
    message.creator = object.creator ?? "";
    message.defense = object.defense ?? "";
    return message;
  },
  fromAmino(object: MsgDefendMemberReportAmino): MsgDefendMemberReport {
    const message = createBaseMsgDefendMemberReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.defense !== undefined && object.defense !== null) {
      message.defense = object.defense;
    }
    return message;
  },
  toAmino(message: MsgDefendMemberReport): MsgDefendMemberReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.defense = message.defense === "" ? undefined : message.defense;
    return obj;
  },
  fromAminoMsg(object: MsgDefendMemberReportAminoMsg): MsgDefendMemberReport {
    return MsgDefendMemberReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefendMemberReportProtoMsg): MsgDefendMemberReport {
    return MsgDefendMemberReport.decode(message.value);
  },
  toProto(message: MsgDefendMemberReport): Uint8Array {
    return MsgDefendMemberReport.encode(message).finish();
  },
  toProtoMsg(message: MsgDefendMemberReport): MsgDefendMemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReport",
      value: MsgDefendMemberReport.encode(message).finish()
    };
  }
};
function createBaseMsgDefendMemberReportResponse(): MsgDefendMemberReportResponse {
  return {};
}
/**
 * MsgDefendMemberReportResponse defines the MsgDefendMemberReportResponse message.
 * @name MsgDefendMemberReportResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgDefendMemberReportResponse
 */
export const MsgDefendMemberReportResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReportResponse",
  encode(_: MsgDefendMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefendMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefendMemberReportResponse();
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
  fromPartial(_: DeepPartial<MsgDefendMemberReportResponse>): MsgDefendMemberReportResponse {
    const message = createBaseMsgDefendMemberReportResponse();
    return message;
  },
  fromAmino(_: MsgDefendMemberReportResponseAmino): MsgDefendMemberReportResponse {
    const message = createBaseMsgDefendMemberReportResponse();
    return message;
  },
  toAmino(_: MsgDefendMemberReportResponse): MsgDefendMemberReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDefendMemberReportResponseAminoMsg): MsgDefendMemberReportResponse {
    return MsgDefendMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefendMemberReportResponseProtoMsg): MsgDefendMemberReportResponse {
    return MsgDefendMemberReportResponse.decode(message.value);
  },
  toProto(message: MsgDefendMemberReportResponse): Uint8Array {
    return MsgDefendMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDefendMemberReportResponse): MsgDefendMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReportResponse",
      value: MsgDefendMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealGovAction(): MsgAppealGovAction {
  return {
    creator: "",
    actionType: BigInt(0),
    actionTarget: "",
    appealReason: ""
  };
}
/**
 * MsgAppealGovAction defines the MsgAppealGovAction message.
 * @name MsgAppealGovAction
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealGovAction
 */
export const MsgAppealGovAction = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealGovAction",
  encode(message: MsgAppealGovAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.actionType !== BigInt(0)) {
      writer.uint32(16).uint64(message.actionType);
    }
    if (message.actionTarget !== "") {
      writer.uint32(26).string(message.actionTarget);
    }
    if (message.appealReason !== "") {
      writer.uint32(34).string(message.appealReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealGovAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealGovAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.actionType = reader.uint64();
          break;
        case 3:
          message.actionTarget = reader.string();
          break;
        case 4:
          message.appealReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealGovAction>): MsgAppealGovAction {
    const message = createBaseMsgAppealGovAction();
    message.creator = object.creator ?? "";
    message.actionType = object.actionType !== undefined && object.actionType !== null ? BigInt(object.actionType.toString()) : BigInt(0);
    message.actionTarget = object.actionTarget ?? "";
    message.appealReason = object.appealReason ?? "";
    return message;
  },
  fromAmino(object: MsgAppealGovActionAmino): MsgAppealGovAction {
    const message = createBaseMsgAppealGovAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = BigInt(object.action_type);
    }
    if (object.action_target !== undefined && object.action_target !== null) {
      message.actionTarget = object.action_target;
    }
    if (object.appeal_reason !== undefined && object.appeal_reason !== null) {
      message.appealReason = object.appeal_reason;
    }
    return message;
  },
  toAmino(message: MsgAppealGovAction): MsgAppealGovActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.action_type = message.actionType !== BigInt(0) ? message.actionType?.toString() : undefined;
    obj.action_target = message.actionTarget === "" ? undefined : message.actionTarget;
    obj.appeal_reason = message.appealReason === "" ? undefined : message.appealReason;
    return obj;
  },
  fromAminoMsg(object: MsgAppealGovActionAminoMsg): MsgAppealGovAction {
    return MsgAppealGovAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealGovActionProtoMsg): MsgAppealGovAction {
    return MsgAppealGovAction.decode(message.value);
  },
  toProto(message: MsgAppealGovAction): Uint8Array {
    return MsgAppealGovAction.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealGovAction): MsgAppealGovActionProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealGovAction",
      value: MsgAppealGovAction.encode(message).finish()
    };
  }
};
function createBaseMsgAppealGovActionResponse(): MsgAppealGovActionResponse {
  return {};
}
/**
 * MsgAppealGovActionResponse defines the MsgAppealGovActionResponse message.
 * @name MsgAppealGovActionResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgAppealGovActionResponse
 */
export const MsgAppealGovActionResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgAppealGovActionResponse",
  encode(_: MsgAppealGovActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealGovActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealGovActionResponse();
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
  fromPartial(_: DeepPartial<MsgAppealGovActionResponse>): MsgAppealGovActionResponse {
    const message = createBaseMsgAppealGovActionResponse();
    return message;
  },
  fromAmino(_: MsgAppealGovActionResponseAmino): MsgAppealGovActionResponse {
    const message = createBaseMsgAppealGovActionResponse();
    return message;
  },
  toAmino(_: MsgAppealGovActionResponse): MsgAppealGovActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealGovActionResponseAminoMsg): MsgAppealGovActionResponse {
    return MsgAppealGovActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealGovActionResponseProtoMsg): MsgAppealGovActionResponse {
    return MsgAppealGovActionResponse.decode(message.value);
  },
  toProto(message: MsgAppealGovActionResponse): Uint8Array {
    return MsgAppealGovActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealGovActionResponse): MsgAppealGovActionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgAppealGovActionResponse",
      value: MsgAppealGovActionResponse.encode(message).finish()
    };
  }
};