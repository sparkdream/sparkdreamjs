//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreatePost, MsgEditPost, MsgDeletePost, MsgFreezeThread, MsgUnarchiveThread, MsgPinPost, MsgUnpinPost, MsgLockThread, MsgUnlockThread, MsgMoveThread, MsgFollowThread, MsgUnfollowThread, MsgUpvotePost, MsgDownvotePost, MsgFlagPost, MsgDismissFlags, MsgHidePost, MsgAppealPost, MsgAppealThreadLock, MsgAppealThreadMove, MsgCreateBounty, MsgAwardBounty, MsgIncreaseBounty, MsgCancelBounty, MsgAssignBountyToReply, MsgPinReply, MsgUnpinReply, MsgDisputePin, MsgMarkAcceptedReply, MsgConfirmProposedReply, MsgRejectProposedReply, MsgSetForumPaused, MsgSetModerationPaused } from "./tx";
export const AminoConverter = {
  "/sparkdream.forum.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/forum/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.forum.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/forum/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.forum.v1.MsgCreatePost": {
    aminoType: "/sparkdream.forum.v1.MsgCreatePost",
    toAmino: MsgCreatePost.toAmino,
    fromAmino: MsgCreatePost.fromAmino
  },
  "/sparkdream.forum.v1.MsgEditPost": {
    aminoType: "/sparkdream.forum.v1.MsgEditPost",
    toAmino: MsgEditPost.toAmino,
    fromAmino: MsgEditPost.fromAmino
  },
  "/sparkdream.forum.v1.MsgDeletePost": {
    aminoType: "/sparkdream.forum.v1.MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino
  },
  "/sparkdream.forum.v1.MsgFreezeThread": {
    aminoType: "/sparkdream.forum.v1.MsgFreezeThread",
    toAmino: MsgFreezeThread.toAmino,
    fromAmino: MsgFreezeThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgUnarchiveThread": {
    aminoType: "/sparkdream.forum.v1.MsgUnarchiveThread",
    toAmino: MsgUnarchiveThread.toAmino,
    fromAmino: MsgUnarchiveThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgPinPost": {
    aminoType: "/sparkdream.forum.v1.MsgPinPost",
    toAmino: MsgPinPost.toAmino,
    fromAmino: MsgPinPost.fromAmino
  },
  "/sparkdream.forum.v1.MsgUnpinPost": {
    aminoType: "/sparkdream.forum.v1.MsgUnpinPost",
    toAmino: MsgUnpinPost.toAmino,
    fromAmino: MsgUnpinPost.fromAmino
  },
  "/sparkdream.forum.v1.MsgLockThread": {
    aminoType: "/sparkdream.forum.v1.MsgLockThread",
    toAmino: MsgLockThread.toAmino,
    fromAmino: MsgLockThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgUnlockThread": {
    aminoType: "/sparkdream.forum.v1.MsgUnlockThread",
    toAmino: MsgUnlockThread.toAmino,
    fromAmino: MsgUnlockThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgMoveThread": {
    aminoType: "/sparkdream.forum.v1.MsgMoveThread",
    toAmino: MsgMoveThread.toAmino,
    fromAmino: MsgMoveThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgFollowThread": {
    aminoType: "/sparkdream.forum.v1.MsgFollowThread",
    toAmino: MsgFollowThread.toAmino,
    fromAmino: MsgFollowThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgUnfollowThread": {
    aminoType: "/sparkdream.forum.v1.MsgUnfollowThread",
    toAmino: MsgUnfollowThread.toAmino,
    fromAmino: MsgUnfollowThread.fromAmino
  },
  "/sparkdream.forum.v1.MsgUpvotePost": {
    aminoType: "/sparkdream.forum.v1.MsgUpvotePost",
    toAmino: MsgUpvotePost.toAmino,
    fromAmino: MsgUpvotePost.fromAmino
  },
  "/sparkdream.forum.v1.MsgDownvotePost": {
    aminoType: "/sparkdream.forum.v1.MsgDownvotePost",
    toAmino: MsgDownvotePost.toAmino,
    fromAmino: MsgDownvotePost.fromAmino
  },
  "/sparkdream.forum.v1.MsgFlagPost": {
    aminoType: "/sparkdream.forum.v1.MsgFlagPost",
    toAmino: MsgFlagPost.toAmino,
    fromAmino: MsgFlagPost.fromAmino
  },
  "/sparkdream.forum.v1.MsgDismissFlags": {
    aminoType: "/sparkdream.forum.v1.MsgDismissFlags",
    toAmino: MsgDismissFlags.toAmino,
    fromAmino: MsgDismissFlags.fromAmino
  },
  "/sparkdream.forum.v1.MsgHidePost": {
    aminoType: "/sparkdream.forum.v1.MsgHidePost",
    toAmino: MsgHidePost.toAmino,
    fromAmino: MsgHidePost.fromAmino
  },
  "/sparkdream.forum.v1.MsgAppealPost": {
    aminoType: "/sparkdream.forum.v1.MsgAppealPost",
    toAmino: MsgAppealPost.toAmino,
    fromAmino: MsgAppealPost.fromAmino
  },
  "/sparkdream.forum.v1.MsgAppealThreadLock": {
    aminoType: "/sparkdream.forum.v1.MsgAppealThreadLock",
    toAmino: MsgAppealThreadLock.toAmino,
    fromAmino: MsgAppealThreadLock.fromAmino
  },
  "/sparkdream.forum.v1.MsgAppealThreadMove": {
    aminoType: "/sparkdream.forum.v1.MsgAppealThreadMove",
    toAmino: MsgAppealThreadMove.toAmino,
    fromAmino: MsgAppealThreadMove.fromAmino
  },
  "/sparkdream.forum.v1.MsgCreateBounty": {
    aminoType: "/sparkdream.forum.v1.MsgCreateBounty",
    toAmino: MsgCreateBounty.toAmino,
    fromAmino: MsgCreateBounty.fromAmino
  },
  "/sparkdream.forum.v1.MsgAwardBounty": {
    aminoType: "/sparkdream.forum.v1.MsgAwardBounty",
    toAmino: MsgAwardBounty.toAmino,
    fromAmino: MsgAwardBounty.fromAmino
  },
  "/sparkdream.forum.v1.MsgIncreaseBounty": {
    aminoType: "/sparkdream.forum.v1.MsgIncreaseBounty",
    toAmino: MsgIncreaseBounty.toAmino,
    fromAmino: MsgIncreaseBounty.fromAmino
  },
  "/sparkdream.forum.v1.MsgCancelBounty": {
    aminoType: "/sparkdream.forum.v1.MsgCancelBounty",
    toAmino: MsgCancelBounty.toAmino,
    fromAmino: MsgCancelBounty.fromAmino
  },
  "/sparkdream.forum.v1.MsgAssignBountyToReply": {
    aminoType: "/sparkdream.forum.v1.MsgAssignBountyToReply",
    toAmino: MsgAssignBountyToReply.toAmino,
    fromAmino: MsgAssignBountyToReply.fromAmino
  },
  "/sparkdream.forum.v1.MsgPinReply": {
    aminoType: "/sparkdream.forum.v1.MsgPinReply",
    toAmino: MsgPinReply.toAmino,
    fromAmino: MsgPinReply.fromAmino
  },
  "/sparkdream.forum.v1.MsgUnpinReply": {
    aminoType: "/sparkdream.forum.v1.MsgUnpinReply",
    toAmino: MsgUnpinReply.toAmino,
    fromAmino: MsgUnpinReply.fromAmino
  },
  "/sparkdream.forum.v1.MsgDisputePin": {
    aminoType: "/sparkdream.forum.v1.MsgDisputePin",
    toAmino: MsgDisputePin.toAmino,
    fromAmino: MsgDisputePin.fromAmino
  },
  "/sparkdream.forum.v1.MsgMarkAcceptedReply": {
    aminoType: "/sparkdream.forum.v1.MsgMarkAcceptedReply",
    toAmino: MsgMarkAcceptedReply.toAmino,
    fromAmino: MsgMarkAcceptedReply.fromAmino
  },
  "/sparkdream.forum.v1.MsgConfirmProposedReply": {
    aminoType: "/sparkdream.forum.v1.MsgConfirmProposedReply",
    toAmino: MsgConfirmProposedReply.toAmino,
    fromAmino: MsgConfirmProposedReply.fromAmino
  },
  "/sparkdream.forum.v1.MsgRejectProposedReply": {
    aminoType: "/sparkdream.forum.v1.MsgRejectProposedReply",
    toAmino: MsgRejectProposedReply.toAmino,
    fromAmino: MsgRejectProposedReply.fromAmino
  },
  "/sparkdream.forum.v1.MsgSetForumPaused": {
    aminoType: "/sparkdream.forum.v1.MsgSetForumPaused",
    toAmino: MsgSetForumPaused.toAmino,
    fromAmino: MsgSetForumPaused.fromAmino
  },
  "/sparkdream.forum.v1.MsgSetModerationPaused": {
    aminoType: "/sparkdream.forum.v1.MsgSetModerationPaused",
    toAmino: MsgSetModerationPaused.toAmino,
    fromAmino: MsgSetModerationPaused.fromAmino
  }
};