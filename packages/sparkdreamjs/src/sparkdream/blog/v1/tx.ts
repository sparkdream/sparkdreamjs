//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/blog/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePost
 */
export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
}
export interface MsgCreatePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePost";
  value: Uint8Array;
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePost
 */
export interface MsgCreatePostAmino {
  creator?: string;
  title?: string;
  body?: string;
}
export interface MsgCreatePostAminoMsg {
  type: "/sparkdream.blog.v1.MsgCreatePost";
  value: MsgCreatePostAmino;
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePostResponse
 */
export interface MsgCreatePostResponse {
  id: bigint;
}
export interface MsgCreatePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePostResponse";
  value: Uint8Array;
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePostResponse
 */
export interface MsgCreatePostResponseAmino {
  id?: string;
}
export interface MsgCreatePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgCreatePostResponse";
  value: MsgCreatePostResponseAmino;
}
/**
 * MsgUpdatePost defines the MsgUpdatePost message.
 * @name MsgUpdatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePost
 */
export interface MsgUpdatePost {
  creator: string;
  title: string;
  body: string;
  id: bigint;
}
export interface MsgUpdatePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePost";
  value: Uint8Array;
}
/**
 * MsgUpdatePost defines the MsgUpdatePost message.
 * @name MsgUpdatePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePost
 */
export interface MsgUpdatePostAmino {
  creator?: string;
  title?: string;
  body?: string;
  id?: string;
}
export interface MsgUpdatePostAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdatePost";
  value: MsgUpdatePostAmino;
}
/**
 * MsgUpdatePostResponse defines the MsgUpdatePostResponse message.
 * @name MsgUpdatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePostResponse
 */
export interface MsgUpdatePostResponse {}
export interface MsgUpdatePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePostResponse";
  value: Uint8Array;
}
/**
 * MsgUpdatePostResponse defines the MsgUpdatePostResponse message.
 * @name MsgUpdatePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePostResponse
 */
export interface MsgUpdatePostResponseAmino {}
export interface MsgUpdatePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgUpdatePostResponse";
  value: MsgUpdatePostResponseAmino;
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePost
 */
export interface MsgDeletePost {
  creator: string;
  id: bigint;
}
export interface MsgDeletePostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePost";
  value: Uint8Array;
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePost
 */
export interface MsgDeletePostAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeletePostAminoMsg {
  type: "/sparkdream.blog.v1.MsgDeletePost";
  value: MsgDeletePostAmino;
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePostResponse
 */
export interface MsgDeletePostResponse {}
export interface MsgDeletePostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePostResponse";
  value: Uint8Array;
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePostResponse
 */
export interface MsgDeletePostResponseAmino {}
export interface MsgDeletePostResponseAminoMsg {
  type: "/sparkdream.blog.v1.MsgDeletePostResponse";
  value: MsgDeletePostResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/blog/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/blog/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    creator: "",
    title: "",
    body: ""
  };
}
/**
 * MsgCreatePost defines the MsgCreatePost message.
 * @name MsgCreatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePost
 */
export const MsgCreatePost = {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
  encode(message: MsgCreatePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePostAmino): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    return message;
  },
  toAmino(message: MsgCreatePost): MsgCreatePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostAminoMsg): MsgCreatePost {
    return MsgCreatePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePostProtoMsg): MsgCreatePost {
    return MsgCreatePost.decode(message.value);
  },
  toProto(message: MsgCreatePost): Uint8Array {
    return MsgCreatePost.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePost): MsgCreatePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgCreatePost",
      value: MsgCreatePost.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {
    id: BigInt(0)
  };
}
/**
 * MsgCreatePostResponse defines the MsgCreatePostResponse message.
 * @name MsgCreatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgCreatePostResponse
 */
export const MsgCreatePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgCreatePostResponse",
  encode(message: MsgCreatePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePostResponseAmino): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreatePostResponse): MsgCreatePostResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostResponseAminoMsg): MsgCreatePostResponse {
    return MsgCreatePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePostResponseProtoMsg): MsgCreatePostResponse {
    return MsgCreatePostResponse.decode(message.value);
  },
  toProto(message: MsgCreatePostResponse): Uint8Array {
    return MsgCreatePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePostResponse): MsgCreatePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgCreatePostResponse",
      value: MsgCreatePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePost(): MsgUpdatePost {
  return {
    creator: "",
    title: "",
    body: "",
    id: BigInt(0)
  };
}
/**
 * MsgUpdatePost defines the MsgUpdatePost message.
 * @name MsgUpdatePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePost
 */
export const MsgUpdatePost = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
  encode(message: MsgUpdatePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost {
    const message = createBaseMsgUpdatePost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdatePostAmino): MsgUpdatePost {
    const message = createBaseMsgUpdatePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUpdatePost): MsgUpdatePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePostAminoMsg): MsgUpdatePost {
    return MsgUpdatePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePostProtoMsg): MsgUpdatePost {
    return MsgUpdatePost.decode(message.value);
  },
  toProto(message: MsgUpdatePost): Uint8Array {
    return MsgUpdatePost.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePost): MsgUpdatePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdatePost",
      value: MsgUpdatePost.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePostResponse(): MsgUpdatePostResponse {
  return {};
}
/**
 * MsgUpdatePostResponse defines the MsgUpdatePostResponse message.
 * @name MsgUpdatePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgUpdatePostResponse
 */
export const MsgUpdatePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgUpdatePostResponse",
  encode(_: MsgUpdatePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse {
    const message = createBaseMsgUpdatePostResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePostResponseAmino): MsgUpdatePostResponse {
    const message = createBaseMsgUpdatePostResponse();
    return message;
  },
  toAmino(_: MsgUpdatePostResponse): MsgUpdatePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePostResponseAminoMsg): MsgUpdatePostResponse {
    return MsgUpdatePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePostResponseProtoMsg): MsgUpdatePostResponse {
    return MsgUpdatePostResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePostResponse): Uint8Array {
    return MsgUpdatePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePostResponse): MsgUpdatePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgUpdatePostResponse",
      value: MsgUpdatePostResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePost(): MsgDeletePost {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * MsgDeletePost defines the MsgDeletePost message.
 * @name MsgDeletePost
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePost
 */
export const MsgDeletePost = {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
  encode(message: MsgDeletePost, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePost {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeletePostAmino): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeletePost): MsgDeletePostAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostAminoMsg): MsgDeletePost {
    return MsgDeletePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePostProtoMsg): MsgDeletePost {
    return MsgDeletePost.decode(message.value);
  },
  toProto(message: MsgDeletePost): Uint8Array {
    return MsgDeletePost.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePost): MsgDeletePostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgDeletePost",
      value: MsgDeletePost.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePostResponse(): MsgDeletePostResponse {
  return {};
}
/**
 * MsgDeletePostResponse defines the MsgDeletePostResponse message.
 * @name MsgDeletePostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.MsgDeletePostResponse
 */
export const MsgDeletePostResponse = {
  typeUrl: "/sparkdream.blog.v1.MsgDeletePostResponse",
  encode(_: MsgDeletePostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse {
    const message = createBaseMsgDeletePostResponse();
    return message;
  },
  fromAmino(_: MsgDeletePostResponseAmino): MsgDeletePostResponse {
    const message = createBaseMsgDeletePostResponse();
    return message;
  },
  toAmino(_: MsgDeletePostResponse): MsgDeletePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostResponseAminoMsg): MsgDeletePostResponse {
    return MsgDeletePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePostResponseProtoMsg): MsgDeletePostResponse {
    return MsgDeletePostResponse.decode(message.value);
  },
  toProto(message: MsgDeletePostResponse): Uint8Array {
    return MsgDeletePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePostResponse): MsgDeletePostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.MsgDeletePostResponse",
      value: MsgDeletePostResponse.encode(message).finish()
    };
  }
};