//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreatePost, MsgUpdatePost, MsgDeletePost } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.blog.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.blog.v1.MsgCreatePost", MsgCreatePost], ["/sparkdream.blog.v1.MsgUpdatePost", MsgUpdatePost], ["/sparkdream.blog.v1.MsgDeletePost", MsgDeletePost]];
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
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
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
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
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
    }
  }
};