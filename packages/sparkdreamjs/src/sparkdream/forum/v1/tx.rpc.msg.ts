//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgCreatePost, MsgCreatePostResponse, MsgEditPost, MsgEditPostResponse, MsgDeletePost, MsgDeletePostResponse, MsgFreezeThread, MsgFreezeThreadResponse, MsgUnarchiveThread, MsgUnarchiveThreadResponse, MsgPinPost, MsgPinPostResponse, MsgUnpinPost, MsgUnpinPostResponse, MsgLockThread, MsgLockThreadResponse, MsgUnlockThread, MsgUnlockThreadResponse, MsgMoveThread, MsgMoveThreadResponse, MsgFollowThread, MsgFollowThreadResponse, MsgUnfollowThread, MsgUnfollowThreadResponse, MsgUpvotePost, MsgUpvotePostResponse, MsgDownvotePost, MsgDownvotePostResponse, MsgFlagPost, MsgFlagPostResponse, MsgDismissFlags, MsgDismissFlagsResponse, MsgHidePost, MsgHidePostResponse, MsgUnhidePost, MsgUnhidePostResponse, MsgAppealPost, MsgAppealPostResponse, MsgAppealThreadLock, MsgAppealThreadLockResponse, MsgAppealThreadMove, MsgAppealThreadMoveResponse, MsgCreateBounty, MsgCreateBountyResponse, MsgAwardBounty, MsgAwardBountyResponse, MsgIncreaseBounty, MsgIncreaseBountyResponse, MsgCancelBounty, MsgCancelBountyResponse, MsgAssignBountyToReply, MsgAssignBountyToReplyResponse, MsgPinReply, MsgPinReplyResponse, MsgUnpinReply, MsgUnpinReplyResponse, MsgDisputePin, MsgDisputePinResponse, MsgMarkAcceptedReply, MsgMarkAcceptedReplyResponse, MsgConfirmProposedReply, MsgConfirmProposedReplyResponse, MsgRejectProposedReply, MsgRejectProposedReplyResponse, MsgSetForumPaused, MsgSetForumPausedResponse, MsgSetModerationPaused, MsgSetModerationPausedResponse } from "./tx";
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
  /** CreatePost defines the CreatePost RPC. */
  createPost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** EditPost defines the EditPost RPC. */
  editPost(request: MsgEditPost): Promise<MsgEditPostResponse>;
  /** DeletePost defines the DeletePost RPC. */
  deletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
  /** FreezeThread defines the FreezeThread RPC. */
  freezeThread(request: MsgFreezeThread): Promise<MsgFreezeThreadResponse>;
  /** UnarchiveThread defines the UnarchiveThread RPC. */
  unarchiveThread(request: MsgUnarchiveThread): Promise<MsgUnarchiveThreadResponse>;
  /** PinPost defines the PinPost RPC. */
  pinPost(request: MsgPinPost): Promise<MsgPinPostResponse>;
  /** UnpinPost defines the UnpinPost RPC. */
  unpinPost(request: MsgUnpinPost): Promise<MsgUnpinPostResponse>;
  /** LockThread defines the LockThread RPC. */
  lockThread(request: MsgLockThread): Promise<MsgLockThreadResponse>;
  /** UnlockThread defines the UnlockThread RPC. */
  unlockThread(request: MsgUnlockThread): Promise<MsgUnlockThreadResponse>;
  /** MoveThread defines the MoveThread RPC. */
  moveThread(request: MsgMoveThread): Promise<MsgMoveThreadResponse>;
  /** FollowThread defines the FollowThread RPC. */
  followThread(request: MsgFollowThread): Promise<MsgFollowThreadResponse>;
  /** UnfollowThread defines the UnfollowThread RPC. */
  unfollowThread(request: MsgUnfollowThread): Promise<MsgUnfollowThreadResponse>;
  /** UpvotePost defines the UpvotePost RPC. */
  upvotePost(request: MsgUpvotePost): Promise<MsgUpvotePostResponse>;
  /** DownvotePost defines the DownvotePost RPC. */
  downvotePost(request: MsgDownvotePost): Promise<MsgDownvotePostResponse>;
  /** FlagPost defines the FlagPost RPC. */
  flagPost(request: MsgFlagPost): Promise<MsgFlagPostResponse>;
  /** DismissFlags defines the DismissFlags RPC. */
  dismissFlags(request: MsgDismissFlags): Promise<MsgDismissFlagsResponse>;
  /** HidePost defines the HidePost RPC. */
  hidePost(request: MsgHidePost): Promise<MsgHidePostResponse>;
  /**
   * UnhidePost reverses a prior MsgHidePost. Authorized for (a) the sentinel
   * who originally hid the post, but only within sentinel_unhide_window
   * seconds of the hide (self-correction grace window analogous to the
   * edit_max_window for authors); and (b) the Commons Operations Committee
   * / governance at any time (council override). Refuses if the post's
   * parent category has since been deleted (dangling reference guard).
   */
  unhidePost(request: MsgUnhidePost): Promise<MsgUnhidePostResponse>;
  /** AppealPost defines the AppealPost RPC. */
  appealPost(request: MsgAppealPost): Promise<MsgAppealPostResponse>;
  /** AppealThreadLock defines the AppealThreadLock RPC. */
  appealThreadLock(request: MsgAppealThreadLock): Promise<MsgAppealThreadLockResponse>;
  /** AppealThreadMove defines the AppealThreadMove RPC. */
  appealThreadMove(request: MsgAppealThreadMove): Promise<MsgAppealThreadMoveResponse>;
  /** CreateBounty defines the CreateBounty RPC. */
  createBounty(request: MsgCreateBounty): Promise<MsgCreateBountyResponse>;
  /** AwardBounty defines the AwardBounty RPC. */
  awardBounty(request: MsgAwardBounty): Promise<MsgAwardBountyResponse>;
  /** IncreaseBounty defines the IncreaseBounty RPC. */
  increaseBounty(request: MsgIncreaseBounty): Promise<MsgIncreaseBountyResponse>;
  /** CancelBounty defines the CancelBounty RPC. */
  cancelBounty(request: MsgCancelBounty): Promise<MsgCancelBountyResponse>;
  /** AssignBountyToReply defines the AssignBountyToReply RPC. */
  assignBountyToReply(request: MsgAssignBountyToReply): Promise<MsgAssignBountyToReplyResponse>;
  /** PinReply defines the PinReply RPC. */
  pinReply(request: MsgPinReply): Promise<MsgPinReplyResponse>;
  /** UnpinReply defines the UnpinReply RPC. */
  unpinReply(request: MsgUnpinReply): Promise<MsgUnpinReplyResponse>;
  /** DisputePin defines the DisputePin RPC. */
  disputePin(request: MsgDisputePin): Promise<MsgDisputePinResponse>;
  /** MarkAcceptedReply defines the MarkAcceptedReply RPC. */
  markAcceptedReply(request: MsgMarkAcceptedReply): Promise<MsgMarkAcceptedReplyResponse>;
  /** ConfirmProposedReply defines the ConfirmProposedReply RPC. */
  confirmProposedReply(request: MsgConfirmProposedReply): Promise<MsgConfirmProposedReplyResponse>;
  /** RejectProposedReply defines the RejectProposedReply RPC. */
  rejectProposedReply(request: MsgRejectProposedReply): Promise<MsgRejectProposedReplyResponse>;
  /** SetForumPaused defines the SetForumPaused RPC. */
  setForumPaused(request: MsgSetForumPaused): Promise<MsgSetForumPausedResponse>;
  /** SetModerationPaused defines the SetModerationPaused RPC. */
  setModerationPaused(request: MsgSetModerationPaused): Promise<MsgSetModerationPausedResponse>;
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
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module's
   operational parameters. Authorized for Commons Council Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreatePost defines the CreatePost RPC. */
  createPost = async (request: MsgCreatePost): Promise<MsgCreatePostResponse> => {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "CreatePost", data);
    return promise.then(data => MsgCreatePostResponse.decode(new BinaryReader(data)));
  };
  /* EditPost defines the EditPost RPC. */
  editPost = async (request: MsgEditPost): Promise<MsgEditPostResponse> => {
    const data = MsgEditPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "EditPost", data);
    return promise.then(data => MsgEditPostResponse.decode(new BinaryReader(data)));
  };
  /* DeletePost defines the DeletePost RPC. */
  deletePost = async (request: MsgDeletePost): Promise<MsgDeletePostResponse> => {
    const data = MsgDeletePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "DeletePost", data);
    return promise.then(data => MsgDeletePostResponse.decode(new BinaryReader(data)));
  };
  /* FreezeThread defines the FreezeThread RPC. */
  freezeThread = async (request: MsgFreezeThread): Promise<MsgFreezeThreadResponse> => {
    const data = MsgFreezeThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "FreezeThread", data);
    return promise.then(data => MsgFreezeThreadResponse.decode(new BinaryReader(data)));
  };
  /* UnarchiveThread defines the UnarchiveThread RPC. */
  unarchiveThread = async (request: MsgUnarchiveThread): Promise<MsgUnarchiveThreadResponse> => {
    const data = MsgUnarchiveThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UnarchiveThread", data);
    return promise.then(data => MsgUnarchiveThreadResponse.decode(new BinaryReader(data)));
  };
  /* PinPost defines the PinPost RPC. */
  pinPost = async (request: MsgPinPost): Promise<MsgPinPostResponse> => {
    const data = MsgPinPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "PinPost", data);
    return promise.then(data => MsgPinPostResponse.decode(new BinaryReader(data)));
  };
  /* UnpinPost defines the UnpinPost RPC. */
  unpinPost = async (request: MsgUnpinPost): Promise<MsgUnpinPostResponse> => {
    const data = MsgUnpinPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UnpinPost", data);
    return promise.then(data => MsgUnpinPostResponse.decode(new BinaryReader(data)));
  };
  /* LockThread defines the LockThread RPC. */
  lockThread = async (request: MsgLockThread): Promise<MsgLockThreadResponse> => {
    const data = MsgLockThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "LockThread", data);
    return promise.then(data => MsgLockThreadResponse.decode(new BinaryReader(data)));
  };
  /* UnlockThread defines the UnlockThread RPC. */
  unlockThread = async (request: MsgUnlockThread): Promise<MsgUnlockThreadResponse> => {
    const data = MsgUnlockThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UnlockThread", data);
    return promise.then(data => MsgUnlockThreadResponse.decode(new BinaryReader(data)));
  };
  /* MoveThread defines the MoveThread RPC. */
  moveThread = async (request: MsgMoveThread): Promise<MsgMoveThreadResponse> => {
    const data = MsgMoveThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "MoveThread", data);
    return promise.then(data => MsgMoveThreadResponse.decode(new BinaryReader(data)));
  };
  /* FollowThread defines the FollowThread RPC. */
  followThread = async (request: MsgFollowThread): Promise<MsgFollowThreadResponse> => {
    const data = MsgFollowThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "FollowThread", data);
    return promise.then(data => MsgFollowThreadResponse.decode(new BinaryReader(data)));
  };
  /* UnfollowThread defines the UnfollowThread RPC. */
  unfollowThread = async (request: MsgUnfollowThread): Promise<MsgUnfollowThreadResponse> => {
    const data = MsgUnfollowThread.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UnfollowThread", data);
    return promise.then(data => MsgUnfollowThreadResponse.decode(new BinaryReader(data)));
  };
  /* UpvotePost defines the UpvotePost RPC. */
  upvotePost = async (request: MsgUpvotePost): Promise<MsgUpvotePostResponse> => {
    const data = MsgUpvotePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UpvotePost", data);
    return promise.then(data => MsgUpvotePostResponse.decode(new BinaryReader(data)));
  };
  /* DownvotePost defines the DownvotePost RPC. */
  downvotePost = async (request: MsgDownvotePost): Promise<MsgDownvotePostResponse> => {
    const data = MsgDownvotePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "DownvotePost", data);
    return promise.then(data => MsgDownvotePostResponse.decode(new BinaryReader(data)));
  };
  /* FlagPost defines the FlagPost RPC. */
  flagPost = async (request: MsgFlagPost): Promise<MsgFlagPostResponse> => {
    const data = MsgFlagPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "FlagPost", data);
    return promise.then(data => MsgFlagPostResponse.decode(new BinaryReader(data)));
  };
  /* DismissFlags defines the DismissFlags RPC. */
  dismissFlags = async (request: MsgDismissFlags): Promise<MsgDismissFlagsResponse> => {
    const data = MsgDismissFlags.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "DismissFlags", data);
    return promise.then(data => MsgDismissFlagsResponse.decode(new BinaryReader(data)));
  };
  /* HidePost defines the HidePost RPC. */
  hidePost = async (request: MsgHidePost): Promise<MsgHidePostResponse> => {
    const data = MsgHidePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "HidePost", data);
    return promise.then(data => MsgHidePostResponse.decode(new BinaryReader(data)));
  };
  /* UnhidePost reverses a prior MsgHidePost. Authorized for (a) the sentinel
   who originally hid the post, but only within sentinel_unhide_window
   seconds of the hide (self-correction grace window analogous to the
   edit_max_window for authors); and (b) the Commons Operations Committee
   / governance at any time (council override). Refuses if the post's
   parent category has since been deleted (dangling reference guard). */
  unhidePost = async (request: MsgUnhidePost): Promise<MsgUnhidePostResponse> => {
    const data = MsgUnhidePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UnhidePost", data);
    return promise.then(data => MsgUnhidePostResponse.decode(new BinaryReader(data)));
  };
  /* AppealPost defines the AppealPost RPC. */
  appealPost = async (request: MsgAppealPost): Promise<MsgAppealPostResponse> => {
    const data = MsgAppealPost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "AppealPost", data);
    return promise.then(data => MsgAppealPostResponse.decode(new BinaryReader(data)));
  };
  /* AppealThreadLock defines the AppealThreadLock RPC. */
  appealThreadLock = async (request: MsgAppealThreadLock): Promise<MsgAppealThreadLockResponse> => {
    const data = MsgAppealThreadLock.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "AppealThreadLock", data);
    return promise.then(data => MsgAppealThreadLockResponse.decode(new BinaryReader(data)));
  };
  /* AppealThreadMove defines the AppealThreadMove RPC. */
  appealThreadMove = async (request: MsgAppealThreadMove): Promise<MsgAppealThreadMoveResponse> => {
    const data = MsgAppealThreadMove.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "AppealThreadMove", data);
    return promise.then(data => MsgAppealThreadMoveResponse.decode(new BinaryReader(data)));
  };
  /* CreateBounty defines the CreateBounty RPC. */
  createBounty = async (request: MsgCreateBounty): Promise<MsgCreateBountyResponse> => {
    const data = MsgCreateBounty.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "CreateBounty", data);
    return promise.then(data => MsgCreateBountyResponse.decode(new BinaryReader(data)));
  };
  /* AwardBounty defines the AwardBounty RPC. */
  awardBounty = async (request: MsgAwardBounty): Promise<MsgAwardBountyResponse> => {
    const data = MsgAwardBounty.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "AwardBounty", data);
    return promise.then(data => MsgAwardBountyResponse.decode(new BinaryReader(data)));
  };
  /* IncreaseBounty defines the IncreaseBounty RPC. */
  increaseBounty = async (request: MsgIncreaseBounty): Promise<MsgIncreaseBountyResponse> => {
    const data = MsgIncreaseBounty.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "IncreaseBounty", data);
    return promise.then(data => MsgIncreaseBountyResponse.decode(new BinaryReader(data)));
  };
  /* CancelBounty defines the CancelBounty RPC. */
  cancelBounty = async (request: MsgCancelBounty): Promise<MsgCancelBountyResponse> => {
    const data = MsgCancelBounty.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "CancelBounty", data);
    return promise.then(data => MsgCancelBountyResponse.decode(new BinaryReader(data)));
  };
  /* AssignBountyToReply defines the AssignBountyToReply RPC. */
  assignBountyToReply = async (request: MsgAssignBountyToReply): Promise<MsgAssignBountyToReplyResponse> => {
    const data = MsgAssignBountyToReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "AssignBountyToReply", data);
    return promise.then(data => MsgAssignBountyToReplyResponse.decode(new BinaryReader(data)));
  };
  /* PinReply defines the PinReply RPC. */
  pinReply = async (request: MsgPinReply): Promise<MsgPinReplyResponse> => {
    const data = MsgPinReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "PinReply", data);
    return promise.then(data => MsgPinReplyResponse.decode(new BinaryReader(data)));
  };
  /* UnpinReply defines the UnpinReply RPC. */
  unpinReply = async (request: MsgUnpinReply): Promise<MsgUnpinReplyResponse> => {
    const data = MsgUnpinReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "UnpinReply", data);
    return promise.then(data => MsgUnpinReplyResponse.decode(new BinaryReader(data)));
  };
  /* DisputePin defines the DisputePin RPC. */
  disputePin = async (request: MsgDisputePin): Promise<MsgDisputePinResponse> => {
    const data = MsgDisputePin.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "DisputePin", data);
    return promise.then(data => MsgDisputePinResponse.decode(new BinaryReader(data)));
  };
  /* MarkAcceptedReply defines the MarkAcceptedReply RPC. */
  markAcceptedReply = async (request: MsgMarkAcceptedReply): Promise<MsgMarkAcceptedReplyResponse> => {
    const data = MsgMarkAcceptedReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "MarkAcceptedReply", data);
    return promise.then(data => MsgMarkAcceptedReplyResponse.decode(new BinaryReader(data)));
  };
  /* ConfirmProposedReply defines the ConfirmProposedReply RPC. */
  confirmProposedReply = async (request: MsgConfirmProposedReply): Promise<MsgConfirmProposedReplyResponse> => {
    const data = MsgConfirmProposedReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "ConfirmProposedReply", data);
    return promise.then(data => MsgConfirmProposedReplyResponse.decode(new BinaryReader(data)));
  };
  /* RejectProposedReply defines the RejectProposedReply RPC. */
  rejectProposedReply = async (request: MsgRejectProposedReply): Promise<MsgRejectProposedReplyResponse> => {
    const data = MsgRejectProposedReply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "RejectProposedReply", data);
    return promise.then(data => MsgRejectProposedReplyResponse.decode(new BinaryReader(data)));
  };
  /* SetForumPaused defines the SetForumPaused RPC. */
  setForumPaused = async (request: MsgSetForumPaused): Promise<MsgSetForumPausedResponse> => {
    const data = MsgSetForumPaused.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "SetForumPaused", data);
    return promise.then(data => MsgSetForumPausedResponse.decode(new BinaryReader(data)));
  };
  /* SetModerationPaused defines the SetModerationPaused RPC. */
  setModerationPaused = async (request: MsgSetModerationPaused): Promise<MsgSetModerationPausedResponse> => {
    const data = MsgSetModerationPaused.encode(request).finish();
    const promise = this.rpc.request("sparkdream.forum.v1.Msg", "SetModerationPaused", data);
    return promise.then(data => MsgSetModerationPausedResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};