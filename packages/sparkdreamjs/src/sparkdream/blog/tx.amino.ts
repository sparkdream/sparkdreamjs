//@ts-nocheck
import { MsgUpdateParams, MsgCreatePost, MsgUpdatePost, MsgDeletePost } from "./tx";
export const AminoConverter = {
  "/sparkdream.blog.MsgUpdateParams": {
    aminoType: "sparkdream/x/blog/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.blog.MsgCreatePost": {
    aminoType: "/sparkdream.blog.MsgCreatePost",
    toAmino: MsgCreatePost.toAmino,
    fromAmino: MsgCreatePost.fromAmino
  },
  "/sparkdream.blog.MsgUpdatePost": {
    aminoType: "/sparkdream.blog.MsgUpdatePost",
    toAmino: MsgUpdatePost.toAmino,
    fromAmino: MsgUpdatePost.fromAmino
  },
  "/sparkdream.blog.MsgDeletePost": {
    aminoType: "/sparkdream.blog.MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino
  }
};