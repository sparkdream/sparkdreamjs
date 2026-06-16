//@ts-nocheck
import { Params, ParamsAmino, ForumOperationalParams, ForumOperationalParamsAmino } from "./params";
import { ContentType } from "../../common/v1/content_type";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ModerationAuthority selects which authority the caller of a sentinel/council
 * moderation message (hide, lock, move) is invoking. It disambiguates the case
 * where an account is BOTH a bonded forum sentinel and a Commons Operations
 * Committee member: without it the handler would silently pick the council
 * (gov) path — a strictly more powerful, less accountable action chosen by
 * accident. See docs/HANDOFF_HIDE_AUTHORITY_DISAMBIGUATION.md.
 */
export enum ModerationAuthority {
  /**
   * MODERATION_AUTHORITY_AUTO - AUTO (default, back-compat): resolve to the sentinel path whenever the
   * account is eligible for that specific action (bonded sentinel in
   * NORMAL/RECOVERY plus the action's own requirements), else fall through to
   * the council path if council-authorized, else error. AUTO prefers the
   * accountable (bonded + author-appealable) sentinel path.
   */
  MODERATION_AUTHORITY_AUTO = 0,
  /**
   * MODERATION_AUTHORITY_SENTINEL - SENTINEL: force the sentinel path; error if the account is not eligible
   * for the action (no silent fallback to council).
   */
  MODERATION_AUTHORITY_SENTINEL = 1,
  /**
   * MODERATION_AUTHORITY_COUNCIL - COUNCIL: force the council (gov-authority) path; error if the account is
   * not council-authorized. The deliberate "act as committee" choice.
   */
  MODERATION_AUTHORITY_COUNCIL = 2,
  UNRECOGNIZED = -1,
}
export const ModerationAuthorityAmino = ModerationAuthority;
export function moderationAuthorityFromJSON(object: any): ModerationAuthority {
  switch (object) {
    case 0:
    case "MODERATION_AUTHORITY_AUTO":
      return ModerationAuthority.MODERATION_AUTHORITY_AUTO;
    case 1:
    case "MODERATION_AUTHORITY_SENTINEL":
      return ModerationAuthority.MODERATION_AUTHORITY_SENTINEL;
    case 2:
    case "MODERATION_AUTHORITY_COUNCIL":
      return ModerationAuthority.MODERATION_AUTHORITY_COUNCIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModerationAuthority.UNRECOGNIZED;
  }
}
export function moderationAuthorityToJSON(object: ModerationAuthority): string {
  switch (object) {
    case ModerationAuthority.MODERATION_AUTHORITY_AUTO:
      return "MODERATION_AUTHORITY_AUTO";
    case ModerationAuthority.MODERATION_AUTHORITY_SENTINEL:
      return "MODERATION_AUTHORITY_SENTINEL";
    case ModerationAuthority.MODERATION_AUTHORITY_COUNCIL:
      return "MODERATION_AUTHORITY_COUNCIL";
    case ModerationAuthority.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
  type: "sparkdream/x/forum/MsgCreatePost";
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
  type: "sparkdream/x/forum/MsgEditPost";
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
  type: "sparkdream/x/forum/MsgDeletePost";
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
  type: "sparkdream/x/forum/MsgFreezeThread";
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
  type: "sparkdream/x/forum/MsgUnarchiveThread";
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
  type: "sparkdream/x/forum/MsgPinPost";
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
  type: "sparkdream/x/forum/MsgUnpinPost";
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
 * MsgMakePostPermanent promotes an ephemeral post (root post or reply) to
 * permanent.
 * @name MsgMakePostPermanent
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMakePostPermanent
 */
export interface MsgMakePostPermanent {
  creator: string;
  postId: bigint;
}
export interface MsgMakePostPermanentProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgMakePostPermanent";
  value: Uint8Array;
}
/**
 * MsgMakePostPermanent promotes an ephemeral post (root post or reply) to
 * permanent.
 * @name MsgMakePostPermanentAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMakePostPermanent
 */
export interface MsgMakePostPermanentAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgMakePostPermanentAminoMsg {
  type: "sparkdream/x/forum/MsgMakePostPermanent";
  value: MsgMakePostPermanentAmino;
}
/**
 * MsgMakePostPermanentResponse defines the MsgMakePostPermanent response.
 * @name MsgMakePostPermanentResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMakePostPermanentResponse
 */
export interface MsgMakePostPermanentResponse {}
export interface MsgMakePostPermanentResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgMakePostPermanentResponse";
  value: Uint8Array;
}
/**
 * MsgMakePostPermanentResponse defines the MsgMakePostPermanent response.
 * @name MsgMakePostPermanentResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMakePostPermanentResponse
 */
export interface MsgMakePostPermanentResponseAmino {}
export interface MsgMakePostPermanentResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgMakePostPermanentResponse";
  value: MsgMakePostPermanentResponseAmino;
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
  /**
   * authority selects which moderation authority the caller is invoking.
   * Defaults to AUTO for backward compatibility.
   */
  authority: ModerationAuthority;
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
  /**
   * authority selects which moderation authority the caller is invoking.
   * Defaults to AUTO for backward compatibility.
   */
  authority?: ModerationAuthority;
}
export interface MsgLockThreadAminoMsg {
  type: "sparkdream/x/forum/MsgLockThread";
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
  type: "sparkdream/x/forum/MsgUnlockThread";
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
  /**
   * authority selects which moderation authority the caller is invoking.
   * Defaults to AUTO for backward compatibility.
   */
  authority: ModerationAuthority;
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
  /**
   * authority selects which moderation authority the caller is invoking.
   * Defaults to AUTO for backward compatibility.
   */
  authority?: ModerationAuthority;
}
export interface MsgMoveThreadAminoMsg {
  type: "sparkdream/x/forum/MsgMoveThread";
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
  type: "sparkdream/x/forum/MsgFollowThread";
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
  type: "sparkdream/x/forum/MsgUnfollowThread";
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
  type: "sparkdream/x/forum/MsgUpvotePost";
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
  type: "sparkdream/x/forum/MsgDownvotePost";
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
 * MsgStakePostConviction opens a PostConvictionStake. The signer is the
 * staker; the post's author cannot stake on their own post.
 * @name MsgStakePostConviction
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgStakePostConviction
 */
export interface MsgStakePostConviction {
  creator: string;
  postId: bigint;
  /**
   * amount is the DREAM (uDREAM) to lock for this stake. Must be at least
   * Params.min_post_conviction_stake.
   */
  amount: string;
}
export interface MsgStakePostConvictionProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgStakePostConviction";
  value: Uint8Array;
}
/**
 * MsgStakePostConviction opens a PostConvictionStake. The signer is the
 * staker; the post's author cannot stake on their own post.
 * @name MsgStakePostConvictionAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgStakePostConviction
 */
export interface MsgStakePostConvictionAmino {
  creator?: string;
  post_id?: string;
  /**
   * amount is the DREAM (uDREAM) to lock for this stake. Must be at least
   * Params.min_post_conviction_stake.
   */
  amount?: string;
}
export interface MsgStakePostConvictionAminoMsg {
  type: "sparkdream/x/forum/MsgStakePostConviction";
  value: MsgStakePostConvictionAmino;
}
/**
 * MsgStakePostConvictionResponse returns the new stake's id.
 * @name MsgStakePostConvictionResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgStakePostConvictionResponse
 */
export interface MsgStakePostConvictionResponse {
  stakeId: bigint;
}
export interface MsgStakePostConvictionResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgStakePostConvictionResponse";
  value: Uint8Array;
}
/**
 * MsgStakePostConvictionResponse returns the new stake's id.
 * @name MsgStakePostConvictionResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgStakePostConvictionResponse
 */
export interface MsgStakePostConvictionResponseAmino {
  stake_id?: string;
}
export interface MsgStakePostConvictionResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgStakePostConvictionResponse";
  value: MsgStakePostConvictionResponseAmino;
}
/**
 * MsgReleasePostConviction closes a PostConvictionStake. Only the original
 * staker may release; release before unlocks_at is rejected.
 * @name MsgReleasePostConviction
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReleasePostConviction
 */
export interface MsgReleasePostConviction {
  creator: string;
  stakeId: bigint;
}
export interface MsgReleasePostConvictionProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgReleasePostConviction";
  value: Uint8Array;
}
/**
 * MsgReleasePostConviction closes a PostConvictionStake. Only the original
 * staker may release; release before unlocks_at is rejected.
 * @name MsgReleasePostConvictionAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReleasePostConviction
 */
export interface MsgReleasePostConvictionAmino {
  creator?: string;
  stake_id?: string;
}
export interface MsgReleasePostConvictionAminoMsg {
  type: "sparkdream/x/forum/MsgReleasePostConviction";
  value: MsgReleasePostConvictionAmino;
}
/**
 * MsgReleasePostConvictionResponse defines the MsgReleasePostConviction response.
 * @name MsgReleasePostConvictionResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReleasePostConvictionResponse
 */
export interface MsgReleasePostConvictionResponse {}
export interface MsgReleasePostConvictionResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgReleasePostConvictionResponse";
  value: Uint8Array;
}
/**
 * MsgReleasePostConvictionResponse defines the MsgReleasePostConviction response.
 * @name MsgReleasePostConvictionResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReleasePostConvictionResponse
 */
export interface MsgReleasePostConvictionResponseAmino {}
export interface MsgReleasePostConvictionResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgReleasePostConvictionResponse";
  value: MsgReleasePostConvictionResponseAmino;
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
  type: "sparkdream/x/forum/MsgFlagPost";
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
  type: "sparkdream/x/forum/MsgDismissFlags";
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
  /**
   * authority selects which moderation authority the caller is invoking.
   * Defaults to AUTO for backward compatibility.
   */
  authority: ModerationAuthority;
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
  /**
   * authority selects which moderation authority the caller is invoking.
   * Defaults to AUTO for backward compatibility.
   */
  authority?: ModerationAuthority;
}
export interface MsgHidePostAminoMsg {
  type: "sparkdream/x/forum/MsgHidePost";
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
 * MsgUnhidePost reverses MsgHidePost.
 * @name MsgUnhidePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnhidePost
 */
export interface MsgUnhidePost {
  creator: string;
  postId: bigint;
}
export interface MsgUnhidePostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnhidePost";
  value: Uint8Array;
}
/**
 * MsgUnhidePost reverses MsgHidePost.
 * @name MsgUnhidePostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnhidePost
 */
export interface MsgUnhidePostAmino {
  creator?: string;
  post_id?: string;
}
export interface MsgUnhidePostAminoMsg {
  type: "sparkdream/x/forum/MsgUnhidePost";
  value: MsgUnhidePostAmino;
}
/**
 * MsgUnhidePostResponse defines the MsgUnhidePostResponse message.
 * @name MsgUnhidePostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnhidePostResponse
 */
export interface MsgUnhidePostResponse {}
export interface MsgUnhidePostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MsgUnhidePostResponse";
  value: Uint8Array;
}
/**
 * MsgUnhidePostResponse defines the MsgUnhidePostResponse message.
 * @name MsgUnhidePostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnhidePostResponse
 */
export interface MsgUnhidePostResponseAmino {}
export interface MsgUnhidePostResponseAminoMsg {
  type: "/sparkdream.forum.v1.MsgUnhidePostResponse";
  value: MsgUnhidePostResponseAmino;
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
  type: "sparkdream/x/forum/MsgAppealPost";
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
  type: "sparkdream/x/forum/MsgAppealThreadLock";
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
  type: "sparkdream/x/forum/MsgAppealThreadMove";
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
  type: "sparkdream/x/forum/MsgCreateBounty";
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
  type: "sparkdream/x/forum/MsgAwardBounty";
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
  type: "sparkdream/x/forum/MsgIncreaseBounty";
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
  type: "sparkdream/x/forum/MsgCancelBounty";
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
  type: "sparkdream/x/forum/MsgAssignBountyToReply";
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
  type: "sparkdream/x/forum/MsgPinReply";
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
  type: "sparkdream/x/forum/MsgUnpinReply";
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
  type: "sparkdream/x/forum/MsgDisputePin";
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
  type: "sparkdream/x/forum/MsgMarkAcceptedReply";
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
  type: "sparkdream/x/forum/MsgConfirmProposedReply";
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
  type: "sparkdream/x/forum/MsgRejectProposedReply";
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
  type: "sparkdream/x/forum/MsgSetForumPaused";
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
  type: "sparkdream/x/forum/MsgSetModerationPaused";
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
  aminoType: "sparkdream/x/forum/MsgCreatePost",
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
  toAminoMsg(message: MsgCreatePost): MsgCreatePostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgCreatePost",
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
  aminoType: "sparkdream/x/forum/MsgEditPost",
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
  toAminoMsg(message: MsgEditPost): MsgEditPostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgEditPost",
      value: MsgEditPost.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgDeletePost",
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
  toAminoMsg(message: MsgDeletePost): MsgDeletePostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgDeletePost",
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
  aminoType: "sparkdream/x/forum/MsgFreezeThread",
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
  toAminoMsg(message: MsgFreezeThread): MsgFreezeThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgFreezeThread",
      value: MsgFreezeThread.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgUnarchiveThread",
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
  toAminoMsg(message: MsgUnarchiveThread): MsgUnarchiveThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUnarchiveThread",
      value: MsgUnarchiveThread.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgPinPost",
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
  toAminoMsg(message: MsgPinPost): MsgPinPostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgPinPost",
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
  aminoType: "sparkdream/x/forum/MsgUnpinPost",
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
  toAminoMsg(message: MsgUnpinPost): MsgUnpinPostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUnpinPost",
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
function createBaseMsgMakePostPermanent(): MsgMakePostPermanent {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgMakePostPermanent promotes an ephemeral post (root post or reply) to
 * permanent.
 * @name MsgMakePostPermanent
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMakePostPermanent
 */
export const MsgMakePostPermanent = {
  typeUrl: "/sparkdream.forum.v1.MsgMakePostPermanent",
  aminoType: "sparkdream/x/forum/MsgMakePostPermanent",
  encode(message: MsgMakePostPermanent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
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
          message.postId = reader.uint64();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMakePostPermanentAmino): MsgMakePostPermanent {
    const message = createBaseMsgMakePostPermanent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgMakePostPermanent): MsgMakePostPermanentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMakePostPermanentAminoMsg): MsgMakePostPermanent {
    return MsgMakePostPermanent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMakePostPermanent): MsgMakePostPermanentAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgMakePostPermanent",
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
      typeUrl: "/sparkdream.forum.v1.MsgMakePostPermanent",
      value: MsgMakePostPermanent.encode(message).finish()
    };
  }
};
function createBaseMsgMakePostPermanentResponse(): MsgMakePostPermanentResponse {
  return {};
}
/**
 * MsgMakePostPermanentResponse defines the MsgMakePostPermanent response.
 * @name MsgMakePostPermanentResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgMakePostPermanentResponse
 */
export const MsgMakePostPermanentResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgMakePostPermanentResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgMakePostPermanentResponse",
      value: MsgMakePostPermanentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLockThread(): MsgLockThread {
  return {
    creator: "",
    rootId: BigInt(0),
    reason: "",
    authority: 0
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
  aminoType: "sparkdream/x/forum/MsgLockThread",
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
    if (message.authority !== 0) {
      writer.uint32(32).int32(message.authority);
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
        case 4:
          message.authority = reader.int32() as any;
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
    message.authority = object.authority ?? 0;
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
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgLockThread): MsgLockThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.authority = message.authority === 0 ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgLockThreadAminoMsg): MsgLockThread {
    return MsgLockThread.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockThread): MsgLockThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgLockThread",
      value: MsgLockThread.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgUnlockThread",
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
  toAminoMsg(message: MsgUnlockThread): MsgUnlockThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUnlockThread",
      value: MsgUnlockThread.toAmino(message)
    };
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
    reason: "",
    authority: 0
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
  aminoType: "sparkdream/x/forum/MsgMoveThread",
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
    if (message.authority !== 0) {
      writer.uint32(40).int32(message.authority);
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
        case 5:
          message.authority = reader.int32() as any;
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
    message.authority = object.authority ?? 0;
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
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgMoveThread): MsgMoveThreadAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.new_category_id = message.newCategoryId !== BigInt(0) ? message.newCategoryId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.authority = message.authority === 0 ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgMoveThreadAminoMsg): MsgMoveThread {
    return MsgMoveThread.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMoveThread): MsgMoveThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgMoveThread",
      value: MsgMoveThread.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgFollowThread",
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
  toAminoMsg(message: MsgFollowThread): MsgFollowThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgFollowThread",
      value: MsgFollowThread.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgUnfollowThread",
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
  toAminoMsg(message: MsgUnfollowThread): MsgUnfollowThreadAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUnfollowThread",
      value: MsgUnfollowThread.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgUpvotePost",
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
  toAminoMsg(message: MsgUpvotePost): MsgUpvotePostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUpvotePost",
      value: MsgUpvotePost.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgDownvotePost",
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
  toAminoMsg(message: MsgDownvotePost): MsgDownvotePostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgDownvotePost",
      value: MsgDownvotePost.toAmino(message)
    };
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
function createBaseMsgStakePostConviction(): MsgStakePostConviction {
  return {
    creator: "",
    postId: BigInt(0),
    amount: ""
  };
}
/**
 * MsgStakePostConviction opens a PostConvictionStake. The signer is the
 * staker; the post's author cannot stake on their own post.
 * @name MsgStakePostConviction
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgStakePostConviction
 */
export const MsgStakePostConviction = {
  typeUrl: "/sparkdream.forum.v1.MsgStakePostConviction",
  aminoType: "sparkdream/x/forum/MsgStakePostConviction",
  encode(message: MsgStakePostConviction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakePostConviction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePostConviction();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStakePostConviction>): MsgStakePostConviction {
    const message = createBaseMsgStakePostConviction();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakePostConvictionAmino): MsgStakePostConviction {
    const message = createBaseMsgStakePostConviction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStakePostConviction): MsgStakePostConvictionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgStakePostConvictionAminoMsg): MsgStakePostConviction {
    return MsgStakePostConviction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStakePostConviction): MsgStakePostConvictionAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgStakePostConviction",
      value: MsgStakePostConviction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakePostConvictionProtoMsg): MsgStakePostConviction {
    return MsgStakePostConviction.decode(message.value);
  },
  toProto(message: MsgStakePostConviction): Uint8Array {
    return MsgStakePostConviction.encode(message).finish();
  },
  toProtoMsg(message: MsgStakePostConviction): MsgStakePostConvictionProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgStakePostConviction",
      value: MsgStakePostConviction.encode(message).finish()
    };
  }
};
function createBaseMsgStakePostConvictionResponse(): MsgStakePostConvictionResponse {
  return {
    stakeId: BigInt(0)
  };
}
/**
 * MsgStakePostConvictionResponse returns the new stake's id.
 * @name MsgStakePostConvictionResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgStakePostConvictionResponse
 */
export const MsgStakePostConvictionResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgStakePostConvictionResponse",
  encode(message: MsgStakePostConvictionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakePostConvictionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePostConvictionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStakePostConvictionResponse>): MsgStakePostConvictionResponse {
    const message = createBaseMsgStakePostConvictionResponse();
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgStakePostConvictionResponseAmino): MsgStakePostConvictionResponse {
    const message = createBaseMsgStakePostConvictionResponse();
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgStakePostConvictionResponse): MsgStakePostConvictionResponseAmino {
    const obj: any = {};
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakePostConvictionResponseAminoMsg): MsgStakePostConvictionResponse {
    return MsgStakePostConvictionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakePostConvictionResponseProtoMsg): MsgStakePostConvictionResponse {
    return MsgStakePostConvictionResponse.decode(message.value);
  },
  toProto(message: MsgStakePostConvictionResponse): Uint8Array {
    return MsgStakePostConvictionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakePostConvictionResponse): MsgStakePostConvictionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgStakePostConvictionResponse",
      value: MsgStakePostConvictionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReleasePostConviction(): MsgReleasePostConviction {
  return {
    creator: "",
    stakeId: BigInt(0)
  };
}
/**
 * MsgReleasePostConviction closes a PostConvictionStake. Only the original
 * staker may release; release before unlocks_at is rejected.
 * @name MsgReleasePostConviction
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReleasePostConviction
 */
export const MsgReleasePostConviction = {
  typeUrl: "/sparkdream.forum.v1.MsgReleasePostConviction",
  aminoType: "sparkdream/x/forum/MsgReleasePostConviction",
  encode(message: MsgReleasePostConviction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReleasePostConviction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReleasePostConviction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReleasePostConviction>): MsgReleasePostConviction {
    const message = createBaseMsgReleasePostConviction();
    message.creator = object.creator ?? "";
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgReleasePostConvictionAmino): MsgReleasePostConviction {
    const message = createBaseMsgReleasePostConviction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgReleasePostConviction): MsgReleasePostConvictionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgReleasePostConvictionAminoMsg): MsgReleasePostConviction {
    return MsgReleasePostConviction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReleasePostConviction): MsgReleasePostConvictionAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgReleasePostConviction",
      value: MsgReleasePostConviction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReleasePostConvictionProtoMsg): MsgReleasePostConviction {
    return MsgReleasePostConviction.decode(message.value);
  },
  toProto(message: MsgReleasePostConviction): Uint8Array {
    return MsgReleasePostConviction.encode(message).finish();
  },
  toProtoMsg(message: MsgReleasePostConviction): MsgReleasePostConvictionProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgReleasePostConviction",
      value: MsgReleasePostConviction.encode(message).finish()
    };
  }
};
function createBaseMsgReleasePostConvictionResponse(): MsgReleasePostConvictionResponse {
  return {};
}
/**
 * MsgReleasePostConvictionResponse defines the MsgReleasePostConviction response.
 * @name MsgReleasePostConvictionResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgReleasePostConvictionResponse
 */
export const MsgReleasePostConvictionResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgReleasePostConvictionResponse",
  encode(_: MsgReleasePostConvictionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReleasePostConvictionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReleasePostConvictionResponse();
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
  fromPartial(_: DeepPartial<MsgReleasePostConvictionResponse>): MsgReleasePostConvictionResponse {
    const message = createBaseMsgReleasePostConvictionResponse();
    return message;
  },
  fromAmino(_: MsgReleasePostConvictionResponseAmino): MsgReleasePostConvictionResponse {
    const message = createBaseMsgReleasePostConvictionResponse();
    return message;
  },
  toAmino(_: MsgReleasePostConvictionResponse): MsgReleasePostConvictionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReleasePostConvictionResponseAminoMsg): MsgReleasePostConvictionResponse {
    return MsgReleasePostConvictionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReleasePostConvictionResponseProtoMsg): MsgReleasePostConvictionResponse {
    return MsgReleasePostConvictionResponse.decode(message.value);
  },
  toProto(message: MsgReleasePostConvictionResponse): Uint8Array {
    return MsgReleasePostConvictionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReleasePostConvictionResponse): MsgReleasePostConvictionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MsgReleasePostConvictionResponse",
      value: MsgReleasePostConvictionResponse.encode(message).finish()
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
  aminoType: "sparkdream/x/forum/MsgFlagPost",
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
  toAminoMsg(message: MsgFlagPost): MsgFlagPostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgFlagPost",
      value: MsgFlagPost.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgDismissFlags",
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
  toAminoMsg(message: MsgDismissFlags): MsgDismissFlagsAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgDismissFlags",
      value: MsgDismissFlags.toAmino(message)
    };
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
    reasonText: "",
    authority: 0
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
  aminoType: "sparkdream/x/forum/MsgHidePost",
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
    if (message.authority !== 0) {
      writer.uint32(40).int32(message.authority);
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
        case 5:
          message.authority = reader.int32() as any;
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
    message.authority = object.authority ?? 0;
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
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgHidePost): MsgHidePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reason_code = message.reasonCode !== BigInt(0) ? message.reasonCode?.toString() : undefined;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    obj.authority = message.authority === 0 ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgHidePostAminoMsg): MsgHidePost {
    return MsgHidePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHidePost): MsgHidePostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgHidePost",
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
function createBaseMsgUnhidePost(): MsgUnhidePost {
  return {
    creator: "",
    postId: BigInt(0)
  };
}
/**
 * MsgUnhidePost reverses MsgHidePost.
 * @name MsgUnhidePost
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnhidePost
 */
export const MsgUnhidePost = {
  typeUrl: "/sparkdream.forum.v1.MsgUnhidePost",
  aminoType: "sparkdream/x/forum/MsgUnhidePost",
  encode(message: MsgUnhidePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
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
          message.postId = reader.uint64();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnhidePostAmino): MsgUnhidePost {
    const message = createBaseMsgUnhidePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: MsgUnhidePost): MsgUnhidePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnhidePostAminoMsg): MsgUnhidePost {
    return MsgUnhidePost.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnhidePost): MsgUnhidePostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUnhidePost",
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
      typeUrl: "/sparkdream.forum.v1.MsgUnhidePost",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MsgUnhidePostResponse
 */
export const MsgUnhidePostResponse = {
  typeUrl: "/sparkdream.forum.v1.MsgUnhidePostResponse",
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
      typeUrl: "/sparkdream.forum.v1.MsgUnhidePostResponse",
      value: MsgUnhidePostResponse.encode(message).finish()
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
  aminoType: "sparkdream/x/forum/MsgAppealPost",
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
  toAminoMsg(message: MsgAppealPost): MsgAppealPostAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgAppealPost",
      value: MsgAppealPost.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgAppealThreadLock",
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
  toAminoMsg(message: MsgAppealThreadLock): MsgAppealThreadLockAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgAppealThreadLock",
      value: MsgAppealThreadLock.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgAppealThreadMove",
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
  toAminoMsg(message: MsgAppealThreadMove): MsgAppealThreadMoveAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgAppealThreadMove",
      value: MsgAppealThreadMove.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgCreateBounty",
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
  toAminoMsg(message: MsgCreateBounty): MsgCreateBountyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgCreateBounty",
      value: MsgCreateBounty.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgAwardBounty",
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
  toAminoMsg(message: MsgAwardBounty): MsgAwardBountyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgAwardBounty",
      value: MsgAwardBounty.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgIncreaseBounty",
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
  toAminoMsg(message: MsgIncreaseBounty): MsgIncreaseBountyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgIncreaseBounty",
      value: MsgIncreaseBounty.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgCancelBounty",
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
  toAminoMsg(message: MsgCancelBounty): MsgCancelBountyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgCancelBounty",
      value: MsgCancelBounty.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgAssignBountyToReply",
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
  toAminoMsg(message: MsgAssignBountyToReply): MsgAssignBountyToReplyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgAssignBountyToReply",
      value: MsgAssignBountyToReply.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgPinReply",
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
  toAminoMsg(message: MsgPinReply): MsgPinReplyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgPinReply",
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
  aminoType: "sparkdream/x/forum/MsgUnpinReply",
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
  toAminoMsg(message: MsgUnpinReply): MsgUnpinReplyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgUnpinReply",
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
  aminoType: "sparkdream/x/forum/MsgDisputePin",
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
  toAminoMsg(message: MsgDisputePin): MsgDisputePinAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgDisputePin",
      value: MsgDisputePin.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgMarkAcceptedReply",
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
  toAminoMsg(message: MsgMarkAcceptedReply): MsgMarkAcceptedReplyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgMarkAcceptedReply",
      value: MsgMarkAcceptedReply.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgConfirmProposedReply",
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
  toAminoMsg(message: MsgConfirmProposedReply): MsgConfirmProposedReplyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgConfirmProposedReply",
      value: MsgConfirmProposedReply.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgRejectProposedReply",
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
  toAminoMsg(message: MsgRejectProposedReply): MsgRejectProposedReplyAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgRejectProposedReply",
      value: MsgRejectProposedReply.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgSetForumPaused",
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
  toAminoMsg(message: MsgSetForumPaused): MsgSetForumPausedAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgSetForumPaused",
      value: MsgSetForumPaused.toAmino(message)
    };
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
  aminoType: "sparkdream/x/forum/MsgSetModerationPaused",
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
  toAminoMsg(message: MsgSetModerationPaused): MsgSetModerationPausedAminoMsg {
    return {
      type: "sparkdream/x/forum/MsgSetModerationPaused",
      value: MsgSetModerationPaused.toAmino(message)
    };
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