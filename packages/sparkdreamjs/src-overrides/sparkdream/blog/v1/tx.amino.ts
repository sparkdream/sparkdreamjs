//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for the broader rationale.
//
// Telescope emits `[]` for empty repeated fields; aminojson on the chain omits
// them. The only repeated fields in blog are `tags` on MsgCreatePost and
// MsgUpdatePost — posts without tags would sign different bytes than the chain
// reconstructs, surfacing as "signature verification failed".

import {
  MsgUpdateParams, MsgUpdateOperationalParams, MsgCreatePost, MsgUpdatePost,
  MsgDeletePost, MsgHidePost, MsgUnhidePost, MsgCreateReply, MsgUpdateReply,
  MsgDeleteReply, MsgHideReply, MsgUnhideReply, MsgReact, MsgRemoveReaction,
  MsgPinPost, MsgPinReply,
} from "./tx";

export const AminoConverter = {
  "/sparkdream.blog.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/blog/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.blog.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/blog/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino,
  },
  "/sparkdream.blog.v1.MsgCreatePost": {
    aminoType: "sparkdream/x/blog/MsgCreatePost",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.title = message.title === "" ? undefined : message.title;
      obj.body = message.body === "" ? undefined : message.body;
      obj.content_type = message.contentType === 0 ? undefined : message.contentType;
      obj.min_reply_trust_level = message.minReplyTrustLevel === 0 ? undefined : message.minReplyTrustLevel;
      obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
      obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgCreatePost.fromAmino,
  },
  "/sparkdream.blog.v1.MsgUpdatePost": {
    aminoType: "sparkdream/x/blog/MsgUpdatePost",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.title = message.title === "" ? undefined : message.title;
      obj.body = message.body === "" ? undefined : message.body;
      obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
      obj.content_type = message.contentType === 0 ? undefined : message.contentType;
      obj.replies_enabled = message.repliesEnabled === false ? undefined : message.repliesEnabled;
      obj.min_reply_trust_level = message.minReplyTrustLevel === 0 ? undefined : message.minReplyTrustLevel;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgUpdatePost.fromAmino,
  },
  "/sparkdream.blog.v1.MsgDeletePost": {
    aminoType: "sparkdream/x/blog/MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino,
  },
  "/sparkdream.blog.v1.MsgHidePost": {
    aminoType: "sparkdream/x/blog/MsgHidePost",
    toAmino: MsgHidePost.toAmino,
    fromAmino: MsgHidePost.fromAmino,
  },
  "/sparkdream.blog.v1.MsgUnhidePost": {
    aminoType: "sparkdream/x/blog/MsgUnhidePost",
    toAmino: MsgUnhidePost.toAmino,
    fromAmino: MsgUnhidePost.fromAmino,
  },
  "/sparkdream.blog.v1.MsgCreateReply": {
    aminoType: "sparkdream/x/blog/MsgCreateReply",
    toAmino: MsgCreateReply.toAmino,
    fromAmino: MsgCreateReply.fromAmino,
  },
  "/sparkdream.blog.v1.MsgUpdateReply": {
    aminoType: "sparkdream/x/blog/MsgUpdateReply",
    toAmino: MsgUpdateReply.toAmino,
    fromAmino: MsgUpdateReply.fromAmino,
  },
  "/sparkdream.blog.v1.MsgDeleteReply": {
    aminoType: "sparkdream/x/blog/MsgDeleteReply",
    toAmino: MsgDeleteReply.toAmino,
    fromAmino: MsgDeleteReply.fromAmino,
  },
  "/sparkdream.blog.v1.MsgHideReply": {
    aminoType: "sparkdream/x/blog/MsgHideReply",
    toAmino: MsgHideReply.toAmino,
    fromAmino: MsgHideReply.fromAmino,
  },
  "/sparkdream.blog.v1.MsgUnhideReply": {
    aminoType: "sparkdream/x/blog/MsgUnhideReply",
    toAmino: MsgUnhideReply.toAmino,
    fromAmino: MsgUnhideReply.fromAmino,
  },
  "/sparkdream.blog.v1.MsgReact": {
    aminoType: "sparkdream/x/blog/MsgReact",
    toAmino: MsgReact.toAmino,
    fromAmino: MsgReact.fromAmino,
  },
  "/sparkdream.blog.v1.MsgRemoveReaction": {
    aminoType: "sparkdream/x/blog/MsgRemoveReaction",
    toAmino: MsgRemoveReaction.toAmino,
    fromAmino: MsgRemoveReaction.fromAmino,
  },
  "/sparkdream.blog.v1.MsgPinPost": {
    aminoType: "sparkdream/x/blog/MsgPinPost",
    toAmino: MsgPinPost.toAmino,
    fromAmino: MsgPinPost.fromAmino,
  },
  "/sparkdream.blog.v1.MsgPinReply": {
    aminoType: "sparkdream/x/blog/MsgPinReply",
    toAmino: MsgPinReply.toAmino,
    fromAmino: MsgPinReply.fromAmino,
  },
};
