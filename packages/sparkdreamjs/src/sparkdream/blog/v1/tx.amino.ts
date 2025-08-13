//@ts-nocheck
import { MsgUpdateParams, MsgCreatePost, MsgUpdatePost, MsgDeletePost } from "./tx";
export const AminoConverter = {
  "/sparkdream.blog.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/blog/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
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
  }
};