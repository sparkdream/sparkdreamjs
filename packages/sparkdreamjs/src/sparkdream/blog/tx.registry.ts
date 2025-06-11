//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreatePost, MsgUpdatePost, MsgDeletePost } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.blog.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.blog.MsgCreatePost", MsgCreatePost], ["/sparkdream.blog.MsgUpdatePost", MsgUpdatePost], ["/sparkdream.blog.MsgDeletePost", MsgDeletePost]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgCreatePost",
        value: MsgCreatePost.encode(value).finish()
      };
    },
    updatePost(value: MsgUpdatePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgUpdatePost",
        value: MsgUpdatePost.encode(value).finish()
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgDeletePost",
        value: MsgDeletePost.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.MsgUpdateParams",
        value
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgCreatePost",
        value
      };
    },
    updatePost(value: MsgUpdatePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgUpdatePost",
        value
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgDeletePost",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgCreatePost",
        value: MsgCreatePost.fromPartial(value)
      };
    },
    updatePost(value: MsgUpdatePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgUpdatePost",
        value: MsgUpdatePost.fromPartial(value)
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/sparkdream.blog.MsgDeletePost",
        value: MsgDeletePost.fromPartial(value)
      };
    }
  }
};