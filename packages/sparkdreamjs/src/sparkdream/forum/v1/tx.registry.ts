//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreateCategory, MsgCreatePost, MsgEditPost, MsgDeletePost, MsgFreezeThread, MsgUnarchiveThread, MsgPinPost, MsgUnpinPost, MsgLockThread, MsgUnlockThread, MsgMoveThread, MsgFollowThread, MsgUnfollowThread, MsgUpvotePost, MsgDownvotePost, MsgFlagPost, MsgDismissFlags, MsgHidePost, MsgAppealPost, MsgAppealThreadLock, MsgAppealThreadMove, MsgCreateBounty, MsgAwardBounty, MsgIncreaseBounty, MsgCancelBounty, MsgAssignBountyToReply, MsgCreateTagBudget, MsgAwardFromTagBudget, MsgTopUpTagBudget, MsgToggleTagBudget, MsgWithdrawTagBudget, MsgPinReply, MsgUnpinReply, MsgDisputePin, MsgMarkAcceptedReply, MsgConfirmProposedReply, MsgRejectProposedReply, MsgSetForumPaused, MsgSetModerationPaused, MsgReportTag, MsgResolveTagReport, MsgBondSentinel, MsgUnbondSentinel, MsgReportMember, MsgCosignMemberReport, MsgResolveMemberReport, MsgDefendMemberReport, MsgAppealGovAction } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.forum.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.forum.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.forum.v1.MsgCreateCategory", MsgCreateCategory], ["/sparkdream.forum.v1.MsgCreatePost", MsgCreatePost], ["/sparkdream.forum.v1.MsgEditPost", MsgEditPost], ["/sparkdream.forum.v1.MsgDeletePost", MsgDeletePost], ["/sparkdream.forum.v1.MsgFreezeThread", MsgFreezeThread], ["/sparkdream.forum.v1.MsgUnarchiveThread", MsgUnarchiveThread], ["/sparkdream.forum.v1.MsgPinPost", MsgPinPost], ["/sparkdream.forum.v1.MsgUnpinPost", MsgUnpinPost], ["/sparkdream.forum.v1.MsgLockThread", MsgLockThread], ["/sparkdream.forum.v1.MsgUnlockThread", MsgUnlockThread], ["/sparkdream.forum.v1.MsgMoveThread", MsgMoveThread], ["/sparkdream.forum.v1.MsgFollowThread", MsgFollowThread], ["/sparkdream.forum.v1.MsgUnfollowThread", MsgUnfollowThread], ["/sparkdream.forum.v1.MsgUpvotePost", MsgUpvotePost], ["/sparkdream.forum.v1.MsgDownvotePost", MsgDownvotePost], ["/sparkdream.forum.v1.MsgFlagPost", MsgFlagPost], ["/sparkdream.forum.v1.MsgDismissFlags", MsgDismissFlags], ["/sparkdream.forum.v1.MsgHidePost", MsgHidePost], ["/sparkdream.forum.v1.MsgAppealPost", MsgAppealPost], ["/sparkdream.forum.v1.MsgAppealThreadLock", MsgAppealThreadLock], ["/sparkdream.forum.v1.MsgAppealThreadMove", MsgAppealThreadMove], ["/sparkdream.forum.v1.MsgCreateBounty", MsgCreateBounty], ["/sparkdream.forum.v1.MsgAwardBounty", MsgAwardBounty], ["/sparkdream.forum.v1.MsgIncreaseBounty", MsgIncreaseBounty], ["/sparkdream.forum.v1.MsgCancelBounty", MsgCancelBounty], ["/sparkdream.forum.v1.MsgAssignBountyToReply", MsgAssignBountyToReply], ["/sparkdream.forum.v1.MsgCreateTagBudget", MsgCreateTagBudget], ["/sparkdream.forum.v1.MsgAwardFromTagBudget", MsgAwardFromTagBudget], ["/sparkdream.forum.v1.MsgTopUpTagBudget", MsgTopUpTagBudget], ["/sparkdream.forum.v1.MsgToggleTagBudget", MsgToggleTagBudget], ["/sparkdream.forum.v1.MsgWithdrawTagBudget", MsgWithdrawTagBudget], ["/sparkdream.forum.v1.MsgPinReply", MsgPinReply], ["/sparkdream.forum.v1.MsgUnpinReply", MsgUnpinReply], ["/sparkdream.forum.v1.MsgDisputePin", MsgDisputePin], ["/sparkdream.forum.v1.MsgMarkAcceptedReply", MsgMarkAcceptedReply], ["/sparkdream.forum.v1.MsgConfirmProposedReply", MsgConfirmProposedReply], ["/sparkdream.forum.v1.MsgRejectProposedReply", MsgRejectProposedReply], ["/sparkdream.forum.v1.MsgSetForumPaused", MsgSetForumPaused], ["/sparkdream.forum.v1.MsgSetModerationPaused", MsgSetModerationPaused], ["/sparkdream.forum.v1.MsgReportTag", MsgReportTag], ["/sparkdream.forum.v1.MsgResolveTagReport", MsgResolveTagReport], ["/sparkdream.forum.v1.MsgBondSentinel", MsgBondSentinel], ["/sparkdream.forum.v1.MsgUnbondSentinel", MsgUnbondSentinel], ["/sparkdream.forum.v1.MsgReportMember", MsgReportMember], ["/sparkdream.forum.v1.MsgCosignMemberReport", MsgCosignMemberReport], ["/sparkdream.forum.v1.MsgResolveMemberReport", MsgResolveMemberReport], ["/sparkdream.forum.v1.MsgDefendMemberReport", MsgDefendMemberReport], ["/sparkdream.forum.v1.MsgAppealGovAction", MsgAppealGovAction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    createCategory(value: MsgCreateCategory) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateCategory",
        value: MsgCreateCategory.encode(value).finish()
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreatePost",
        value: MsgCreatePost.encode(value).finish()
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgEditPost",
        value: MsgEditPost.encode(value).finish()
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDeletePost",
        value: MsgDeletePost.encode(value).finish()
      };
    },
    freezeThread(value: MsgFreezeThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFreezeThread",
        value: MsgFreezeThread.encode(value).finish()
      };
    },
    unarchiveThread(value: MsgUnarchiveThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThread",
        value: MsgUnarchiveThread.encode(value).finish()
      };
    },
    pinPost(value: MsgPinPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgPinPost",
        value: MsgPinPost.encode(value).finish()
      };
    },
    unpinPost(value: MsgUnpinPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnpinPost",
        value: MsgUnpinPost.encode(value).finish()
      };
    },
    lockThread(value: MsgLockThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgLockThread",
        value: MsgLockThread.encode(value).finish()
      };
    },
    unlockThread(value: MsgUnlockThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnlockThread",
        value: MsgUnlockThread.encode(value).finish()
      };
    },
    moveThread(value: MsgMoveThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgMoveThread",
        value: MsgMoveThread.encode(value).finish()
      };
    },
    followThread(value: MsgFollowThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFollowThread",
        value: MsgFollowThread.encode(value).finish()
      };
    },
    unfollowThread(value: MsgUnfollowThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnfollowThread",
        value: MsgUnfollowThread.encode(value).finish()
      };
    },
    upvotePost(value: MsgUpvotePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpvotePost",
        value: MsgUpvotePost.encode(value).finish()
      };
    },
    downvotePost(value: MsgDownvotePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDownvotePost",
        value: MsgDownvotePost.encode(value).finish()
      };
    },
    flagPost(value: MsgFlagPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFlagPost",
        value: MsgFlagPost.encode(value).finish()
      };
    },
    dismissFlags(value: MsgDismissFlags) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDismissFlags",
        value: MsgDismissFlags.encode(value).finish()
      };
    },
    hidePost(value: MsgHidePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgHidePost",
        value: MsgHidePost.encode(value).finish()
      };
    },
    appealPost(value: MsgAppealPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealPost",
        value: MsgAppealPost.encode(value).finish()
      };
    },
    appealThreadLock(value: MsgAppealThreadLock) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLock",
        value: MsgAppealThreadLock.encode(value).finish()
      };
    },
    appealThreadMove(value: MsgAppealThreadMove) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMove",
        value: MsgAppealThreadMove.encode(value).finish()
      };
    },
    createBounty(value: MsgCreateBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateBounty",
        value: MsgCreateBounty.encode(value).finish()
      };
    },
    awardBounty(value: MsgAwardBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAwardBounty",
        value: MsgAwardBounty.encode(value).finish()
      };
    },
    increaseBounty(value: MsgIncreaseBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgIncreaseBounty",
        value: MsgIncreaseBounty.encode(value).finish()
      };
    },
    cancelBounty(value: MsgCancelBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCancelBounty",
        value: MsgCancelBounty.encode(value).finish()
      };
    },
    assignBountyToReply(value: MsgAssignBountyToReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReply",
        value: MsgAssignBountyToReply.encode(value).finish()
      };
    },
    createTagBudget(value: MsgCreateTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudget",
        value: MsgCreateTagBudget.encode(value).finish()
      };
    },
    awardFromTagBudget(value: MsgAwardFromTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudget",
        value: MsgAwardFromTagBudget.encode(value).finish()
      };
    },
    topUpTagBudget(value: MsgTopUpTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudget",
        value: MsgTopUpTagBudget.encode(value).finish()
      };
    },
    toggleTagBudget(value: MsgToggleTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudget",
        value: MsgToggleTagBudget.encode(value).finish()
      };
    },
    withdrawTagBudget(value: MsgWithdrawTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudget",
        value: MsgWithdrawTagBudget.encode(value).finish()
      };
    },
    pinReply(value: MsgPinReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgPinReply",
        value: MsgPinReply.encode(value).finish()
      };
    },
    unpinReply(value: MsgUnpinReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnpinReply",
        value: MsgUnpinReply.encode(value).finish()
      };
    },
    disputePin(value: MsgDisputePin) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDisputePin",
        value: MsgDisputePin.encode(value).finish()
      };
    },
    markAcceptedReply(value: MsgMarkAcceptedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReply",
        value: MsgMarkAcceptedReply.encode(value).finish()
      };
    },
    confirmProposedReply(value: MsgConfirmProposedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReply",
        value: MsgConfirmProposedReply.encode(value).finish()
      };
    },
    rejectProposedReply(value: MsgRejectProposedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReply",
        value: MsgRejectProposedReply.encode(value).finish()
      };
    },
    setForumPaused(value: MsgSetForumPaused) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgSetForumPaused",
        value: MsgSetForumPaused.encode(value).finish()
      };
    },
    setModerationPaused(value: MsgSetModerationPaused) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgSetModerationPaused",
        value: MsgSetModerationPaused.encode(value).finish()
      };
    },
    reportTag(value: MsgReportTag) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgReportTag",
        value: MsgReportTag.encode(value).finish()
      };
    },
    resolveTagReport(value: MsgResolveTagReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgResolveTagReport",
        value: MsgResolveTagReport.encode(value).finish()
      };
    },
    bondSentinel(value: MsgBondSentinel) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgBondSentinel",
        value: MsgBondSentinel.encode(value).finish()
      };
    },
    unbondSentinel(value: MsgUnbondSentinel) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinel",
        value: MsgUnbondSentinel.encode(value).finish()
      };
    },
    reportMember(value: MsgReportMember) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgReportMember",
        value: MsgReportMember.encode(value).finish()
      };
    },
    cosignMemberReport(value: MsgCosignMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReport",
        value: MsgCosignMemberReport.encode(value).finish()
      };
    },
    resolveMemberReport(value: MsgResolveMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReport",
        value: MsgResolveMemberReport.encode(value).finish()
      };
    },
    defendMemberReport(value: MsgDefendMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReport",
        value: MsgDefendMemberReport.encode(value).finish()
      };
    },
    appealGovAction(value: MsgAppealGovAction) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealGovAction",
        value: MsgAppealGovAction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParams",
        value
      };
    },
    createCategory(value: MsgCreateCategory) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateCategory",
        value
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreatePost",
        value
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgEditPost",
        value
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDeletePost",
        value
      };
    },
    freezeThread(value: MsgFreezeThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFreezeThread",
        value
      };
    },
    unarchiveThread(value: MsgUnarchiveThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThread",
        value
      };
    },
    pinPost(value: MsgPinPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgPinPost",
        value
      };
    },
    unpinPost(value: MsgUnpinPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnpinPost",
        value
      };
    },
    lockThread(value: MsgLockThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgLockThread",
        value
      };
    },
    unlockThread(value: MsgUnlockThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnlockThread",
        value
      };
    },
    moveThread(value: MsgMoveThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgMoveThread",
        value
      };
    },
    followThread(value: MsgFollowThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFollowThread",
        value
      };
    },
    unfollowThread(value: MsgUnfollowThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnfollowThread",
        value
      };
    },
    upvotePost(value: MsgUpvotePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpvotePost",
        value
      };
    },
    downvotePost(value: MsgDownvotePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDownvotePost",
        value
      };
    },
    flagPost(value: MsgFlagPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFlagPost",
        value
      };
    },
    dismissFlags(value: MsgDismissFlags) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDismissFlags",
        value
      };
    },
    hidePost(value: MsgHidePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgHidePost",
        value
      };
    },
    appealPost(value: MsgAppealPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealPost",
        value
      };
    },
    appealThreadLock(value: MsgAppealThreadLock) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLock",
        value
      };
    },
    appealThreadMove(value: MsgAppealThreadMove) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMove",
        value
      };
    },
    createBounty(value: MsgCreateBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateBounty",
        value
      };
    },
    awardBounty(value: MsgAwardBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAwardBounty",
        value
      };
    },
    increaseBounty(value: MsgIncreaseBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgIncreaseBounty",
        value
      };
    },
    cancelBounty(value: MsgCancelBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCancelBounty",
        value
      };
    },
    assignBountyToReply(value: MsgAssignBountyToReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReply",
        value
      };
    },
    createTagBudget(value: MsgCreateTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudget",
        value
      };
    },
    awardFromTagBudget(value: MsgAwardFromTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudget",
        value
      };
    },
    topUpTagBudget(value: MsgTopUpTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudget",
        value
      };
    },
    toggleTagBudget(value: MsgToggleTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudget",
        value
      };
    },
    withdrawTagBudget(value: MsgWithdrawTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudget",
        value
      };
    },
    pinReply(value: MsgPinReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgPinReply",
        value
      };
    },
    unpinReply(value: MsgUnpinReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnpinReply",
        value
      };
    },
    disputePin(value: MsgDisputePin) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDisputePin",
        value
      };
    },
    markAcceptedReply(value: MsgMarkAcceptedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReply",
        value
      };
    },
    confirmProposedReply(value: MsgConfirmProposedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReply",
        value
      };
    },
    rejectProposedReply(value: MsgRejectProposedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReply",
        value
      };
    },
    setForumPaused(value: MsgSetForumPaused) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgSetForumPaused",
        value
      };
    },
    setModerationPaused(value: MsgSetModerationPaused) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgSetModerationPaused",
        value
      };
    },
    reportTag(value: MsgReportTag) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgReportTag",
        value
      };
    },
    resolveTagReport(value: MsgResolveTagReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgResolveTagReport",
        value
      };
    },
    bondSentinel(value: MsgBondSentinel) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgBondSentinel",
        value
      };
    },
    unbondSentinel(value: MsgUnbondSentinel) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinel",
        value
      };
    },
    reportMember(value: MsgReportMember) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgReportMember",
        value
      };
    },
    cosignMemberReport(value: MsgCosignMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReport",
        value
      };
    },
    resolveMemberReport(value: MsgResolveMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReport",
        value
      };
    },
    defendMemberReport(value: MsgDefendMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReport",
        value
      };
    },
    appealGovAction(value: MsgAppealGovAction) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealGovAction",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    createCategory(value: MsgCreateCategory) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateCategory",
        value: MsgCreateCategory.fromPartial(value)
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreatePost",
        value: MsgCreatePost.fromPartial(value)
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgEditPost",
        value: MsgEditPost.fromPartial(value)
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDeletePost",
        value: MsgDeletePost.fromPartial(value)
      };
    },
    freezeThread(value: MsgFreezeThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFreezeThread",
        value: MsgFreezeThread.fromPartial(value)
      };
    },
    unarchiveThread(value: MsgUnarchiveThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnarchiveThread",
        value: MsgUnarchiveThread.fromPartial(value)
      };
    },
    pinPost(value: MsgPinPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgPinPost",
        value: MsgPinPost.fromPartial(value)
      };
    },
    unpinPost(value: MsgUnpinPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnpinPost",
        value: MsgUnpinPost.fromPartial(value)
      };
    },
    lockThread(value: MsgLockThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgLockThread",
        value: MsgLockThread.fromPartial(value)
      };
    },
    unlockThread(value: MsgUnlockThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnlockThread",
        value: MsgUnlockThread.fromPartial(value)
      };
    },
    moveThread(value: MsgMoveThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgMoveThread",
        value: MsgMoveThread.fromPartial(value)
      };
    },
    followThread(value: MsgFollowThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFollowThread",
        value: MsgFollowThread.fromPartial(value)
      };
    },
    unfollowThread(value: MsgUnfollowThread) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnfollowThread",
        value: MsgUnfollowThread.fromPartial(value)
      };
    },
    upvotePost(value: MsgUpvotePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUpvotePost",
        value: MsgUpvotePost.fromPartial(value)
      };
    },
    downvotePost(value: MsgDownvotePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDownvotePost",
        value: MsgDownvotePost.fromPartial(value)
      };
    },
    flagPost(value: MsgFlagPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgFlagPost",
        value: MsgFlagPost.fromPartial(value)
      };
    },
    dismissFlags(value: MsgDismissFlags) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDismissFlags",
        value: MsgDismissFlags.fromPartial(value)
      };
    },
    hidePost(value: MsgHidePost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgHidePost",
        value: MsgHidePost.fromPartial(value)
      };
    },
    appealPost(value: MsgAppealPost) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealPost",
        value: MsgAppealPost.fromPartial(value)
      };
    },
    appealThreadLock(value: MsgAppealThreadLock) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealThreadLock",
        value: MsgAppealThreadLock.fromPartial(value)
      };
    },
    appealThreadMove(value: MsgAppealThreadMove) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealThreadMove",
        value: MsgAppealThreadMove.fromPartial(value)
      };
    },
    createBounty(value: MsgCreateBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateBounty",
        value: MsgCreateBounty.fromPartial(value)
      };
    },
    awardBounty(value: MsgAwardBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAwardBounty",
        value: MsgAwardBounty.fromPartial(value)
      };
    },
    increaseBounty(value: MsgIncreaseBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgIncreaseBounty",
        value: MsgIncreaseBounty.fromPartial(value)
      };
    },
    cancelBounty(value: MsgCancelBounty) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCancelBounty",
        value: MsgCancelBounty.fromPartial(value)
      };
    },
    assignBountyToReply(value: MsgAssignBountyToReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAssignBountyToReply",
        value: MsgAssignBountyToReply.fromPartial(value)
      };
    },
    createTagBudget(value: MsgCreateTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCreateTagBudget",
        value: MsgCreateTagBudget.fromPartial(value)
      };
    },
    awardFromTagBudget(value: MsgAwardFromTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAwardFromTagBudget",
        value: MsgAwardFromTagBudget.fromPartial(value)
      };
    },
    topUpTagBudget(value: MsgTopUpTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgTopUpTagBudget",
        value: MsgTopUpTagBudget.fromPartial(value)
      };
    },
    toggleTagBudget(value: MsgToggleTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgToggleTagBudget",
        value: MsgToggleTagBudget.fromPartial(value)
      };
    },
    withdrawTagBudget(value: MsgWithdrawTagBudget) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgWithdrawTagBudget",
        value: MsgWithdrawTagBudget.fromPartial(value)
      };
    },
    pinReply(value: MsgPinReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgPinReply",
        value: MsgPinReply.fromPartial(value)
      };
    },
    unpinReply(value: MsgUnpinReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnpinReply",
        value: MsgUnpinReply.fromPartial(value)
      };
    },
    disputePin(value: MsgDisputePin) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDisputePin",
        value: MsgDisputePin.fromPartial(value)
      };
    },
    markAcceptedReply(value: MsgMarkAcceptedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgMarkAcceptedReply",
        value: MsgMarkAcceptedReply.fromPartial(value)
      };
    },
    confirmProposedReply(value: MsgConfirmProposedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgConfirmProposedReply",
        value: MsgConfirmProposedReply.fromPartial(value)
      };
    },
    rejectProposedReply(value: MsgRejectProposedReply) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgRejectProposedReply",
        value: MsgRejectProposedReply.fromPartial(value)
      };
    },
    setForumPaused(value: MsgSetForumPaused) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgSetForumPaused",
        value: MsgSetForumPaused.fromPartial(value)
      };
    },
    setModerationPaused(value: MsgSetModerationPaused) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgSetModerationPaused",
        value: MsgSetModerationPaused.fromPartial(value)
      };
    },
    reportTag(value: MsgReportTag) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgReportTag",
        value: MsgReportTag.fromPartial(value)
      };
    },
    resolveTagReport(value: MsgResolveTagReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgResolveTagReport",
        value: MsgResolveTagReport.fromPartial(value)
      };
    },
    bondSentinel(value: MsgBondSentinel) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgBondSentinel",
        value: MsgBondSentinel.fromPartial(value)
      };
    },
    unbondSentinel(value: MsgUnbondSentinel) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgUnbondSentinel",
        value: MsgUnbondSentinel.fromPartial(value)
      };
    },
    reportMember(value: MsgReportMember) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgReportMember",
        value: MsgReportMember.fromPartial(value)
      };
    },
    cosignMemberReport(value: MsgCosignMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgCosignMemberReport",
        value: MsgCosignMemberReport.fromPartial(value)
      };
    },
    resolveMemberReport(value: MsgResolveMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgResolveMemberReport",
        value: MsgResolveMemberReport.fromPartial(value)
      };
    },
    defendMemberReport(value: MsgDefendMemberReport) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgDefendMemberReport",
        value: MsgDefendMemberReport.fromPartial(value)
      };
    },
    appealGovAction(value: MsgAppealGovAction) {
      return {
        typeUrl: "/sparkdream.forum.v1.MsgAppealGovAction",
        value: MsgAppealGovAction.fromPartial(value)
      };
    }
  }
};