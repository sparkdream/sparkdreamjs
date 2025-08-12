//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreatePost, MsgCreatePostResponse, MsgUpdatePost, MsgUpdatePostResponse, MsgDeletePost, MsgDeletePostResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** CreatePost defines the CreatePost RPC. */
  createPost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** UpdatePost defines the UpdatePost RPC. */
  updatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
  /** DeletePost defines the DeletePost RPC. */
  deletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreatePost defines the CreatePost RPC. */
  createPost = async (request: MsgCreatePost): Promise<MsgCreatePostResponse> => {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "CreatePost", data);
    return promise.then(data => MsgCreatePostResponse.decode(new BinaryReader(data)));
  };
  /* UpdatePost defines the UpdatePost RPC. */
  updatePost = async (request: MsgUpdatePost): Promise<MsgUpdatePostResponse> => {
    const data = MsgUpdatePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "UpdatePost", data);
    return promise.then(data => MsgUpdatePostResponse.decode(new BinaryReader(data)));
  };
  /* DeletePost defines the DeletePost RPC. */
  deletePost = async (request: MsgDeletePost): Promise<MsgDeletePostResponse> => {
    const data = MsgDeletePost.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.v1.Msg", "DeletePost", data);
    return promise.then(data => MsgDeletePostResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};