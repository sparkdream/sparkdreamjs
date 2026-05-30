//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreatePost, MsgUpdatePost, MsgDeletePost, MsgHidePost, MsgUnhidePost, MsgCreateReply, MsgUpdateReply, MsgDeleteReply, MsgHideReply, MsgUnhideReply, MsgReact, MsgRemoveReaction, MsgMakePostPermanent, MsgMakeReplyPermanent, MsgPinPost, MsgUnpinPost, MsgPinReply, MsgUnpinReply } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.blog.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.blog.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.blog.v1.MsgCreatePost", MsgCreatePost], ["/sparkdream.blog.v1.MsgUpdatePost", MsgUpdatePost], ["/sparkdream.blog.v1.MsgDeletePost", MsgDeletePost], ["/sparkdream.blog.v1.MsgHidePost", MsgHidePost], ["/sparkdream.blog.v1.MsgUnhidePost", MsgUnhidePost], ["/sparkdream.blog.v1.MsgCreateReply", MsgCreateReply], ["/sparkdream.blog.v1.MsgUpdateReply", MsgUpdateReply], ["/sparkdream.blog.v1.MsgDeleteReply", MsgDeleteReply], ["/sparkdream.blog.v1.MsgHideReply", MsgHideReply], ["/sparkdream.blog.v1.MsgUnhideReply", MsgUnhideReply], ["/sparkdream.blog.v1.MsgReact", MsgReact], ["/sparkdream.blog.v1.MsgRemoveReaction", MsgRemoveReaction], ["/sparkdream.blog.v1.MsgMakePostPermanent", MsgMakePostPermanent], ["/sparkdream.blog.v1.MsgMakeReplyPermanent", MsgMakeReplyPermanent], ["/sparkdream.blog.v1.MsgPinPost", MsgPinPost], ["/sparkdream.blog.v1.MsgUnpinPost", MsgUnpinPost], ["/sparkdream.blog.v1.MsgPinReply", MsgPinReply], ["/sparkdream.blog.v1.MsgUnpinReply", MsgUnpinReply]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
        value: MsgCreatePost.encode(value).finish()
      };
    },
    updatePost(value: MsgUpdatePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
        value: MsgUpdatePost.encode(value).finish()
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
        value: MsgDeletePost.encode(value).finish()
      };
    },
    hidePost(value: MsgHidePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgHidePost",
        value: MsgHidePost.encode(value).finish()
      };
    },
    unhidePost(value: MsgUnhidePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnhidePost",
        value: MsgUnhidePost.encode(value).finish()
      };
    },
    createReply(value: MsgCreateReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgCreateReply",
        value: MsgCreateReply.encode(value).finish()
      };
    },
    updateReply(value: MsgUpdateReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateReply",
        value: MsgUpdateReply.encode(value).finish()
      };
    },
    deleteReply(value: MsgDeleteReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgDeleteReply",
        value: MsgDeleteReply.encode(value).finish()
      };
    },
    hideReply(value: MsgHideReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgHideReply",
        value: MsgHideReply.encode(value).finish()
      };
    },
    unhideReply(value: MsgUnhideReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnhideReply",
        value: MsgUnhideReply.encode(value).finish()
      };
    },
    react(value: MsgReact) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgReact",
        value: MsgReact.encode(value).finish()
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgRemoveReaction",
        value: MsgRemoveReaction.encode(value).finish()
      };
    },
    makePostPermanent(value: MsgMakePostPermanent) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanent",
        value: MsgMakePostPermanent.encode(value).finish()
      };
    },
    makeReplyPermanent(value: MsgMakeReplyPermanent) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanent",
        value: MsgMakeReplyPermanent.encode(value).finish()
      };
    },
    pinPost(value: MsgPinPost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgPinPost",
        value: MsgPinPost.encode(value).finish()
      };
    },
    unpinPost(value: MsgUnpinPost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnpinPost",
        value: MsgUnpinPost.encode(value).finish()
      };
    },
    pinReply(value: MsgPinReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgPinReply",
        value: MsgPinReply.encode(value).finish()
      };
    },
    unpinReply(value: MsgUnpinReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnpinReply",
        value: MsgUnpinReply.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParams",
        value
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
        value
      };
    },
    updatePost(value: MsgUpdatePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
        value
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
        value
      };
    },
    hidePost(value: MsgHidePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgHidePost",
        value
      };
    },
    unhidePost(value: MsgUnhidePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnhidePost",
        value
      };
    },
    createReply(value: MsgCreateReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgCreateReply",
        value
      };
    },
    updateReply(value: MsgUpdateReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateReply",
        value
      };
    },
    deleteReply(value: MsgDeleteReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgDeleteReply",
        value
      };
    },
    hideReply(value: MsgHideReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgHideReply",
        value
      };
    },
    unhideReply(value: MsgUnhideReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnhideReply",
        value
      };
    },
    react(value: MsgReact) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgReact",
        value
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgRemoveReaction",
        value
      };
    },
    makePostPermanent(value: MsgMakePostPermanent) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanent",
        value
      };
    },
    makeReplyPermanent(value: MsgMakeReplyPermanent) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanent",
        value
      };
    },
    pinPost(value: MsgPinPost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgPinPost",
        value
      };
    },
    unpinPost(value: MsgUnpinPost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnpinPost",
        value
      };
    },
    pinReply(value: MsgPinReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgPinReply",
        value
      };
    },
    unpinReply(value: MsgUnpinReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnpinReply",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
        value: MsgCreatePost.fromPartial(value)
      };
    },
    updatePost(value: MsgUpdatePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
        value: MsgUpdatePost.fromPartial(value)
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
        value: MsgDeletePost.fromPartial(value)
      };
    },
    hidePost(value: MsgHidePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgHidePost",
        value: MsgHidePost.fromPartial(value)
      };
    },
    unhidePost(value: MsgUnhidePost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnhidePost",
        value: MsgUnhidePost.fromPartial(value)
      };
    },
    createReply(value: MsgCreateReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgCreateReply",
        value: MsgCreateReply.fromPartial(value)
      };
    },
    updateReply(value: MsgUpdateReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateReply",
        value: MsgUpdateReply.fromPartial(value)
      };
    },
    deleteReply(value: MsgDeleteReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgDeleteReply",
        value: MsgDeleteReply.fromPartial(value)
      };
    },
    hideReply(value: MsgHideReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgHideReply",
        value: MsgHideReply.fromPartial(value)
      };
    },
    unhideReply(value: MsgUnhideReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnhideReply",
        value: MsgUnhideReply.fromPartial(value)
      };
    },
    react(value: MsgReact) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgReact",
        value: MsgReact.fromPartial(value)
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgRemoveReaction",
        value: MsgRemoveReaction.fromPartial(value)
      };
    },
    makePostPermanent(value: MsgMakePostPermanent) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgMakePostPermanent",
        value: MsgMakePostPermanent.fromPartial(value)
      };
    },
    makeReplyPermanent(value: MsgMakeReplyPermanent) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgMakeReplyPermanent",
        value: MsgMakeReplyPermanent.fromPartial(value)
      };
    },
    pinPost(value: MsgPinPost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgPinPost",
        value: MsgPinPost.fromPartial(value)
      };
    },
    unpinPost(value: MsgUnpinPost) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnpinPost",
        value: MsgUnpinPost.fromPartial(value)
      };
    },
    pinReply(value: MsgPinReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgPinReply",
        value: MsgPinReply.fromPartial(value)
      };
    },
    unpinReply(value: MsgUnpinReply) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUnpinReply",
        value: MsgUnpinReply.fromPartial(value)
      };
    }
  }
};