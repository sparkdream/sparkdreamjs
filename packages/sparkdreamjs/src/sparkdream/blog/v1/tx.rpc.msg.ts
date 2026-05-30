//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgCreatePost, MsgCreatePostResponse, MsgUpdatePost, MsgUpdatePostResponse, MsgDeletePost, MsgDeletePostResponse, MsgHidePost, MsgHidePostResponse, MsgUnhidePost, MsgUnhidePostResponse, MsgCreateReply, MsgCreateReplyResponse, MsgUpdateReply, MsgUpdateReplyResponse, MsgDeleteReply, MsgDeleteReplyResponse, MsgHideReply, MsgHideReplyResponse, MsgUnhideReply, MsgUnhideReplyResponse, MsgReact, MsgReactResponse, MsgRemoveReaction, MsgRemoveReactionResponse, MsgMakePostPermanent, MsgMakePostPermanentResponse, MsgMakeReplyPermanent, MsgMakeReplyPermanentResponse, MsgPinPost, MsgPinPostResponse, MsgUnpinPost, MsgUnpinPostResponse, MsgPinReply, MsgPinReplyResponse, MsgUnpinReply, MsgUnpinReplyResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateOperationalParams defines an operation for updating the module's
   * operational parameters. Authorized for Commons Council Operations Committee.
   */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** CreatePost creates a new blog post. */
  createPost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** UpdatePost updates an existing blog post (full replacement). */
  updatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
  /** DeletePost tombstones a post (clears content, preserves structure). */
  deletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
  /** HidePost hides a post (author self-moderation). */
  hidePost(request: MsgHidePost): Promise<MsgHidePostResponse>;
  /** UnhidePost restores a previously hidden post. */
  unhidePost(request: MsgUnhidePost): Promise<MsgUnhidePostResponse>;
  /** CreateReply creates a threaded reply to a blog post. */
  createReply(request: MsgCreateReply): Promise<MsgCreateReplyResponse>;
  /** UpdateReply updates an existing reply. */
  updateReply(request: MsgUpdateReply): Promise<MsgUpdateReplyResponse>;
  /** DeleteReply tombstones a reply. */
  deleteReply(request: MsgDeleteReply): Promise<MsgDeleteReplyResponse>;
  /** HideReply hides a reply (post author moderation). */
  hideReply(request: MsgHideReply): Promise<MsgHideReplyResponse>;
  /** UnhideReply restores a previously hidden reply. */
  unhideReply(request: MsgUnhideReply): Promise<MsgUnhideReplyResponse>;
  /** React adds or changes a reaction on a post or reply. */
  react(request: MsgReact): Promise<MsgReactResponse>;
  /** RemoveReaction removes your reaction from a post or reply. */
  removeReaction(request: MsgRemoveReaction): Promise<MsgRemoveReactionResponse>;
  /**
   * MakePostPermanent promotes an ephemeral post to permanent by clearing
   * expires_at and removing the expiry-index entry. Idempotent on already-
   * permanent posts. Display markers (pinned_by) are untouched. Gated on
   * params.pin_min_trust_level and shares the per-day pin rate-limit counter.
   */
  makePostPermanent(request: MsgMakePostPermanent): Promise<MsgMakePostPermanentResponse>;
  /** MakeReplyPermanent mirrors MakePostPermanent for replies. */
  makeReplyPermanent(request: MsgMakeReplyPermanent): Promise<MsgMakeReplyPermanentResponse>;
  /**
   * PinPost sets the pinned marker on a post (curator "feature this"). The
   * post must already be permanent — call MakePostPermanent first to promote
   * ephemeral content. Gated on params.pin_min_trust_level.
   */
  pinPost(request: MsgPinPost): Promise<MsgPinPostResponse>;
  /**
   * UnpinPost clears the pinned marker on a post. The post stays permanent.
   * Gated on the same trust level as Pin.
   */
  unpinPost(request: MsgUnpinPost): Promise<MsgUnpinPostResponse>;
  /** PinReply mirrors PinPost. Requires the reply to already be permanent. */
  pinReply(request: MsgPinReply): Promise<MsgPinReplyResponse>;
  /** UnpinReply clears the pinned marker on a reply. The reply stays permanent. */
  unpinReply(request: MsgUnpinReply): Promise<MsgUnpinReplyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module's
   operational parameters. Authorized for Commons Council Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreatePost creates a new blog post. */
  createPost = async (request: MsgCreatePost): Promise<MsgCreatePostResponse> => {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "CreatePost", data);
    return promise.then(data => MsgCreatePostResponse.decode(new BinaryReader(data)));
  };
  /* UpdatePost updates an existing blog post (full replacement). */
  updatePost = async (request: MsgUpdatePost): Promise<MsgUpdatePostResponse> => {
    const data = MsgUpdatePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UpdatePost", data);
    return promise.then(data => MsgUpdatePostResponse.decode(new BinaryReader(data)));
  };
  /* DeletePost tombstones a post (clears content, preserves structure). */
  deletePost = async (request: MsgDeletePost): Promise<MsgDeletePostResponse> => {
    const data = MsgDeletePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "DeletePost", data);
    return promise.then(data => MsgDeletePostResponse.decode(new BinaryReader(data)));
  };
  /* HidePost hides a post (author self-moderation). */
  hidePost = async (request: MsgHidePost): Promise<MsgHidePostResponse> => {
    const data = MsgHidePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "HidePost", data);
    return promise.then(data => MsgHidePostResponse.decode(new BinaryReader(data)));
  };
  /* UnhidePost restores a previously hidden post. */
  unhidePost = async (request: MsgUnhidePost): Promise<MsgUnhidePostResponse> => {
    const data = MsgUnhidePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UnhidePost", data);
    return promise.then(data => MsgUnhidePostResponse.decode(new BinaryReader(data)));
  };
  /* CreateReply creates a threaded reply to a blog post. */
  createReply = async (request: MsgCreateReply): Promise<MsgCreateReplyResponse> => {
    const data = MsgCreateReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "CreateReply", data);
    return promise.then(data => MsgCreateReplyResponse.decode(new BinaryReader(data)));
  };
  /* UpdateReply updates an existing reply. */
  updateReply = async (request: MsgUpdateReply): Promise<MsgUpdateReplyResponse> => {
    const data = MsgUpdateReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UpdateReply", data);
    return promise.then(data => MsgUpdateReplyResponse.decode(new BinaryReader(data)));
  };
  /* DeleteReply tombstones a reply. */
  deleteReply = async (request: MsgDeleteReply): Promise<MsgDeleteReplyResponse> => {
    const data = MsgDeleteReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "DeleteReply", data);
    return promise.then(data => MsgDeleteReplyResponse.decode(new BinaryReader(data)));
  };
  /* HideReply hides a reply (post author moderation). */
  hideReply = async (request: MsgHideReply): Promise<MsgHideReplyResponse> => {
    const data = MsgHideReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "HideReply", data);
    return promise.then(data => MsgHideReplyResponse.decode(new BinaryReader(data)));
  };
  /* UnhideReply restores a previously hidden reply. */
  unhideReply = async (request: MsgUnhideReply): Promise<MsgUnhideReplyResponse> => {
    const data = MsgUnhideReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UnhideReply", data);
    return promise.then(data => MsgUnhideReplyResponse.decode(new BinaryReader(data)));
  };
  /* React adds or changes a reaction on a post or reply. */
  react = async (request: MsgReact): Promise<MsgReactResponse> => {
    const data = MsgReact.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "React", data);
    return promise.then(data => MsgReactResponse.decode(new BinaryReader(data)));
  };
  /* RemoveReaction removes your reaction from a post or reply. */
  removeReaction = async (request: MsgRemoveReaction): Promise<MsgRemoveReactionResponse> => {
    const data = MsgRemoveReaction.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "RemoveReaction", data);
    return promise.then(data => MsgRemoveReactionResponse.decode(new BinaryReader(data)));
  };
  /* MakePostPermanent promotes an ephemeral post to permanent by clearing
   expires_at and removing the expiry-index entry. Idempotent on already-
   permanent posts. Display markers (pinned_by) are untouched. Gated on
   params.pin_min_trust_level and shares the per-day pin rate-limit counter. */
  makePostPermanent = async (request: MsgMakePostPermanent): Promise<MsgMakePostPermanentResponse> => {
    const data = MsgMakePostPermanent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "MakePostPermanent", data);
    return promise.then(data => MsgMakePostPermanentResponse.decode(new BinaryReader(data)));
  };
  /* MakeReplyPermanent mirrors MakePostPermanent for replies. */
  makeReplyPermanent = async (request: MsgMakeReplyPermanent): Promise<MsgMakeReplyPermanentResponse> => {
    const data = MsgMakeReplyPermanent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "MakeReplyPermanent", data);
    return promise.then(data => MsgMakeReplyPermanentResponse.decode(new BinaryReader(data)));
  };
  /* PinPost sets the pinned marker on a post (curator "feature this"). The
   post must already be permanent — call MakePostPermanent first to promote
   ephemeral content. Gated on params.pin_min_trust_level. */
  pinPost = async (request: MsgPinPost): Promise<MsgPinPostResponse> => {
    const data = MsgPinPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "PinPost", data);
    return promise.then(data => MsgPinPostResponse.decode(new BinaryReader(data)));
  };
  /* UnpinPost clears the pinned marker on a post. The post stays permanent.
   Gated on the same trust level as Pin. */
  unpinPost = async (request: MsgUnpinPost): Promise<MsgUnpinPostResponse> => {
    const data = MsgUnpinPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UnpinPost", data);
    return promise.then(data => MsgUnpinPostResponse.decode(new BinaryReader(data)));
  };
  /* PinReply mirrors PinPost. Requires the reply to already be permanent. */
  pinReply = async (request: MsgPinReply): Promise<MsgPinReplyResponse> => {
    const data = MsgPinReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "PinReply", data);
    return promise.then(data => MsgPinReplyResponse.decode(new BinaryReader(data)));
  };
  /* UnpinReply clears the pinned marker on a reply. The reply stays permanent. */
  unpinReply = async (request: MsgUnpinReply): Promise<MsgUnpinReplyResponse> => {
    const data = MsgUnpinReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UnpinReply", data);
    return promise.then(data => MsgUnpinReplyResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};