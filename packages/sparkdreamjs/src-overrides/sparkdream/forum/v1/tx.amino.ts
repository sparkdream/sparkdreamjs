//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for the broader rationale.
//
// Telescope emits `[]` for empty repeated fields; aminojson on the chain omits
// them. In forum the offending messages are MsgCreatePost and MsgEditPost,
// both of which have a repeated `tags` field that's commonly empty.

import {
  MsgUpdateParams, MsgUpdateOperationalParams, MsgCreatePost, MsgEditPost,
  MsgDeletePost, MsgFreezeThread, MsgUnarchiveThread, MsgPinPost, MsgUnpinPost,
  MsgLockThread, MsgUnlockThread, MsgMoveThread, MsgFollowThread,
  MsgUnfollowThread, MsgUpvotePost, MsgDownvotePost, MsgFlagPost,
  MsgDismissFlags, MsgHidePost, MsgUnhidePost, MsgAppealPost,
  MsgAppealThreadLock, MsgAppealThreadMove, MsgCreateBounty, MsgAwardBounty,
  MsgIncreaseBounty, MsgCancelBounty, MsgAssignBountyToReply, MsgPinReply,
  MsgUnpinReply, MsgDisputePin, MsgMarkAcceptedReply, MsgConfirmProposedReply,
  MsgRejectProposedReply, MsgSetForumPaused, MsgSetModerationPaused,
} from "./tx";

export const AminoConverter = {
  "/sparkdream.forum.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/forum/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/forum/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino,
  },
  "/sparkdream.forum.v1.MsgCreatePost": {
    aminoType: "sparkdream/x/forum/MsgCreatePost",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
      obj.parent_id = message.parentId !== BigInt(0) ? message.parentId?.toString() : undefined;
      obj.content = message.content === "" ? undefined : message.content;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.content_type = message.contentType === 0 ? undefined : message.contentType;
      obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
      obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
      return obj;
    },
    fromAmino: MsgCreatePost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgEditPost": {
    aminoType: "sparkdream/x/forum/MsgEditPost",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
      obj.new_content = message.newContent === "" ? undefined : message.newContent;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.content_type = message.contentType === 0 ? undefined : message.contentType;
      return obj;
    },
    fromAmino: MsgEditPost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgDeletePost": {
    aminoType: "sparkdream/x/forum/MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgFreezeThread": {
    aminoType: "sparkdream/x/forum/MsgFreezeThread",
    toAmino: MsgFreezeThread.toAmino,
    fromAmino: MsgFreezeThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUnarchiveThread": {
    aminoType: "sparkdream/x/forum/MsgUnarchiveThread",
    toAmino: MsgUnarchiveThread.toAmino,
    fromAmino: MsgUnarchiveThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgPinPost": {
    aminoType: "sparkdream/x/forum/MsgPinPost",
    toAmino: MsgPinPost.toAmino,
    fromAmino: MsgPinPost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUnpinPost": {
    aminoType: "sparkdream/x/forum/MsgUnpinPost",
    toAmino: MsgUnpinPost.toAmino,
    fromAmino: MsgUnpinPost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgLockThread": {
    aminoType: "sparkdream/x/forum/MsgLockThread",
    toAmino: MsgLockThread.toAmino,
    fromAmino: MsgLockThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUnlockThread": {
    aminoType: "sparkdream/x/forum/MsgUnlockThread",
    toAmino: MsgUnlockThread.toAmino,
    fromAmino: MsgUnlockThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgMoveThread": {
    aminoType: "sparkdream/x/forum/MsgMoveThread",
    toAmino: MsgMoveThread.toAmino,
    fromAmino: MsgMoveThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgFollowThread": {
    aminoType: "sparkdream/x/forum/MsgFollowThread",
    toAmino: MsgFollowThread.toAmino,
    fromAmino: MsgFollowThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUnfollowThread": {
    aminoType: "sparkdream/x/forum/MsgUnfollowThread",
    toAmino: MsgUnfollowThread.toAmino,
    fromAmino: MsgUnfollowThread.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUpvotePost": {
    aminoType: "sparkdream/x/forum/MsgUpvotePost",
    toAmino: MsgUpvotePost.toAmino,
    fromAmino: MsgUpvotePost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgDownvotePost": {
    aminoType: "sparkdream/x/forum/MsgDownvotePost",
    toAmino: MsgDownvotePost.toAmino,
    fromAmino: MsgDownvotePost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgFlagPost": {
    aminoType: "sparkdream/x/forum/MsgFlagPost",
    toAmino: MsgFlagPost.toAmino,
    fromAmino: MsgFlagPost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgDismissFlags": {
    aminoType: "sparkdream/x/forum/MsgDismissFlags",
    toAmino: MsgDismissFlags.toAmino,
    fromAmino: MsgDismissFlags.fromAmino,
  },
  "/sparkdream.forum.v1.MsgHidePost": {
    aminoType: "sparkdream/x/forum/MsgHidePost",
    toAmino: MsgHidePost.toAmino,
    fromAmino: MsgHidePost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUnhidePost": {
    aminoType: "sparkdream/x/forum/MsgUnhidePost",
    toAmino: MsgUnhidePost.toAmino,
    fromAmino: MsgUnhidePost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgAppealPost": {
    aminoType: "sparkdream/x/forum/MsgAppealPost",
    toAmino: MsgAppealPost.toAmino,
    fromAmino: MsgAppealPost.fromAmino,
  },
  "/sparkdream.forum.v1.MsgAppealThreadLock": {
    aminoType: "sparkdream/x/forum/MsgAppealThreadLock",
    toAmino: MsgAppealThreadLock.toAmino,
    fromAmino: MsgAppealThreadLock.fromAmino,
  },
  "/sparkdream.forum.v1.MsgAppealThreadMove": {
    aminoType: "sparkdream/x/forum/MsgAppealThreadMove",
    toAmino: MsgAppealThreadMove.toAmino,
    fromAmino: MsgAppealThreadMove.fromAmino,
  },
  "/sparkdream.forum.v1.MsgCreateBounty": {
    aminoType: "sparkdream/x/forum/MsgCreateBounty",
    toAmino: MsgCreateBounty.toAmino,
    fromAmino: MsgCreateBounty.fromAmino,
  },
  "/sparkdream.forum.v1.MsgAwardBounty": {
    aminoType: "sparkdream/x/forum/MsgAwardBounty",
    toAmino: MsgAwardBounty.toAmino,
    fromAmino: MsgAwardBounty.fromAmino,
  },
  "/sparkdream.forum.v1.MsgIncreaseBounty": {
    aminoType: "sparkdream/x/forum/MsgIncreaseBounty",
    toAmino: MsgIncreaseBounty.toAmino,
    fromAmino: MsgIncreaseBounty.fromAmino,
  },
  "/sparkdream.forum.v1.MsgCancelBounty": {
    aminoType: "sparkdream/x/forum/MsgCancelBounty",
    toAmino: MsgCancelBounty.toAmino,
    fromAmino: MsgCancelBounty.fromAmino,
  },
  "/sparkdream.forum.v1.MsgAssignBountyToReply": {
    aminoType: "sparkdream/x/forum/MsgAssignBountyToReply",
    toAmino: MsgAssignBountyToReply.toAmino,
    fromAmino: MsgAssignBountyToReply.fromAmino,
  },
  "/sparkdream.forum.v1.MsgPinReply": {
    aminoType: "sparkdream/x/forum/MsgPinReply",
    toAmino: MsgPinReply.toAmino,
    fromAmino: MsgPinReply.fromAmino,
  },
  "/sparkdream.forum.v1.MsgUnpinReply": {
    aminoType: "sparkdream/x/forum/MsgUnpinReply",
    toAmino: MsgUnpinReply.toAmino,
    fromAmino: MsgUnpinReply.fromAmino,
  },
  "/sparkdream.forum.v1.MsgDisputePin": {
    aminoType: "sparkdream/x/forum/MsgDisputePin",
    toAmino: MsgDisputePin.toAmino,
    fromAmino: MsgDisputePin.fromAmino,
  },
  "/sparkdream.forum.v1.MsgMarkAcceptedReply": {
    aminoType: "sparkdream/x/forum/MsgMarkAcceptedReply",
    toAmino: MsgMarkAcceptedReply.toAmino,
    fromAmino: MsgMarkAcceptedReply.fromAmino,
  },
  "/sparkdream.forum.v1.MsgConfirmProposedReply": {
    aminoType: "sparkdream/x/forum/MsgConfirmProposedReply",
    toAmino: MsgConfirmProposedReply.toAmino,
    fromAmino: MsgConfirmProposedReply.fromAmino,
  },
  "/sparkdream.forum.v1.MsgRejectProposedReply": {
    aminoType: "sparkdream/x/forum/MsgRejectProposedReply",
    toAmino: MsgRejectProposedReply.toAmino,
    fromAmino: MsgRejectProposedReply.fromAmino,
  },
  "/sparkdream.forum.v1.MsgSetForumPaused": {
    aminoType: "sparkdream/x/forum/MsgSetForumPaused",
    toAmino: MsgSetForumPaused.toAmino,
    fromAmino: MsgSetForumPaused.fromAmino,
  },
  "/sparkdream.forum.v1.MsgSetModerationPaused": {
    aminoType: "sparkdream/x/forum/MsgSetModerationPaused",
    toAmino: MsgSetModerationPaused.toAmino,
    fromAmino: MsgSetModerationPaused.fromAmino,
  },
};
