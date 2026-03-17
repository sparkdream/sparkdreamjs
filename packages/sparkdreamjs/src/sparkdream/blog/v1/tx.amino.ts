//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreatePost, MsgUpdatePost, MsgDeletePost, MsgHidePost, MsgUnhidePost, MsgCreateReply, MsgUpdateReply, MsgDeleteReply, MsgHideReply, MsgUnhideReply, MsgReact, MsgRemoveReaction, MsgPinPost, MsgPinReply } from "./tx";
export const AminoConverter = {
  "/sparkdream.blog.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/blog/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.blog.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/blog/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.blog.v1.MsgCreatePost": {
    aminoType: "/sparkdream.blog.v1.MsgCreatePost",
    toAmino: MsgCreatePost.toAmino,
    fromAmino: MsgCreatePost.fromAmino
  },
  "/sparkdream.blog.v1.MsgUpdatePost": {
    aminoType: "/sparkdream.blog.v1.MsgUpdatePost",
    toAmino: MsgUpdatePost.toAmino,
    fromAmino: MsgUpdatePost.fromAmino
  },
  "/sparkdream.blog.v1.MsgDeletePost": {
    aminoType: "/sparkdream.blog.v1.MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino
  },
  "/sparkdream.blog.v1.MsgHidePost": {
    aminoType: "/sparkdream.blog.v1.MsgHidePost",
    toAmino: MsgHidePost.toAmino,
    fromAmino: MsgHidePost.fromAmino
  },
  "/sparkdream.blog.v1.MsgUnhidePost": {
    aminoType: "/sparkdream.blog.v1.MsgUnhidePost",
    toAmino: MsgUnhidePost.toAmino,
    fromAmino: MsgUnhidePost.fromAmino
  },
  "/sparkdream.blog.v1.MsgCreateReply": {
    aminoType: "/sparkdream.blog.v1.MsgCreateReply",
    toAmino: MsgCreateReply.toAmino,
    fromAmino: MsgCreateReply.fromAmino
  },
  "/sparkdream.blog.v1.MsgUpdateReply": {
    aminoType: "/sparkdream.blog.v1.MsgUpdateReply",
    toAmino: MsgUpdateReply.toAmino,
    fromAmino: MsgUpdateReply.fromAmino
  },
  "/sparkdream.blog.v1.MsgDeleteReply": {
    aminoType: "/sparkdream.blog.v1.MsgDeleteReply",
    toAmino: MsgDeleteReply.toAmino,
    fromAmino: MsgDeleteReply.fromAmino
  },
  "/sparkdream.blog.v1.MsgHideReply": {
    aminoType: "/sparkdream.blog.v1.MsgHideReply",
    toAmino: MsgHideReply.toAmino,
    fromAmino: MsgHideReply.fromAmino
  },
  "/sparkdream.blog.v1.MsgUnhideReply": {
    aminoType: "/sparkdream.blog.v1.MsgUnhideReply",
    toAmino: MsgUnhideReply.toAmino,
    fromAmino: MsgUnhideReply.fromAmino
  },
  "/sparkdream.blog.v1.MsgReact": {
    aminoType: "/sparkdream.blog.v1.MsgReact",
    toAmino: MsgReact.toAmino,
    fromAmino: MsgReact.fromAmino
  },
  "/sparkdream.blog.v1.MsgRemoveReaction": {
    aminoType: "/sparkdream.blog.v1.MsgRemoveReaction",
    toAmino: MsgRemoveReaction.toAmino,
    fromAmino: MsgRemoveReaction.fromAmino
  },
  "/sparkdream.blog.v1.MsgPinPost": {
    aminoType: "/sparkdream.blog.v1.MsgPinPost",
    toAmino: MsgPinPost.toAmino,
    fromAmino: MsgPinPost.fromAmino
  },
  "/sparkdream.blog.v1.MsgPinReply": {
    aminoType: "/sparkdream.blog.v1.MsgPinReply",
    toAmino: MsgPinReply.toAmino,
    fromAmino: MsgPinReply.fromAmino
  }
};