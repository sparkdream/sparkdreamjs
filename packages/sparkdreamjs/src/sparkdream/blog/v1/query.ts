//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryShowPostRequest defines the QueryShowPostRequest message.
 * @name QueryShowPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostRequest
 */
export interface QueryShowPostRequest {
  id: bigint;
}
export interface QueryShowPostRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostRequest";
  value: Uint8Array;
}
/**
 * QueryShowPostRequest defines the QueryShowPostRequest message.
 * @name QueryShowPostRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostRequest
 */
export interface QueryShowPostRequestAmino {
  id?: string;
}
export interface QueryShowPostRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryShowPostRequest";
  value: QueryShowPostRequestAmino;
}
/**
 * QueryShowPostResponse defines the QueryShowPostResponse message.
 * @name QueryShowPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostResponse
 */
export interface QueryShowPostResponse {
  post: Post;
}
export interface QueryShowPostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostResponse";
  value: Uint8Array;
}
/**
 * QueryShowPostResponse defines the QueryShowPostResponse message.
 * @name QueryShowPostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostResponse
 */
export interface QueryShowPostResponseAmino {
  post?: PostAmino;
}
export interface QueryShowPostResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryShowPostResponse";
  value: QueryShowPostResponseAmino;
}
/**
 * QueryListPostRequest defines the QueryListPostRequest message.
 * @name QueryListPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostRequest
 */
export interface QueryListPostRequest {
  pagination?: PageRequest;
}
export interface QueryListPostRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostRequest";
  value: Uint8Array;
}
/**
 * QueryListPostRequest defines the QueryListPostRequest message.
 * @name QueryListPostRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostRequest
 */
export interface QueryListPostRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListPostRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostRequest";
  value: QueryListPostRequestAmino;
}
/**
 * QueryListPostResponse defines the QueryListPostResponse message.
 * @name QueryListPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostResponse
 */
export interface QueryListPostResponse {
  post: Post[];
  pagination?: PageResponse;
}
export interface QueryListPostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostResponse";
  value: Uint8Array;
}
/**
 * QueryListPostResponse defines the QueryListPostResponse message.
 * @name QueryListPostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostResponse
 */
export interface QueryListPostResponseAmino {
  post?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListPostResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostResponse";
  value: QueryListPostResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowPostRequest(): QueryShowPostRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryShowPostRequest defines the QueryShowPostRequest message.
 * @name QueryShowPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostRequest
 */
export const QueryShowPostRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostRequest",
  encode(message: QueryShowPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPostRequest();
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
  fromPartial(object: DeepPartial<QueryShowPostRequest>): QueryShowPostRequest {
    const message = createBaseQueryShowPostRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowPostRequestAmino): QueryShowPostRequest {
    const message = createBaseQueryShowPostRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowPostRequest): QueryShowPostRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowPostRequestAminoMsg): QueryShowPostRequest {
    return QueryShowPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowPostRequestProtoMsg): QueryShowPostRequest {
    return QueryShowPostRequest.decode(message.value);
  },
  toProto(message: QueryShowPostRequest): Uint8Array {
    return QueryShowPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowPostRequest): QueryShowPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryShowPostRequest",
      value: QueryShowPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowPostResponse(): QueryShowPostResponse {
  return {
    post: Post.fromPartial({})
  };
}
/**
 * QueryShowPostResponse defines the QueryShowPostResponse message.
 * @name QueryShowPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostResponse
 */
export const QueryShowPostResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostResponse",
  encode(message: QueryShowPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShowPostResponse>): QueryShowPostResponse {
    const message = createBaseQueryShowPostResponse();
    message.post = object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
  fromAmino(object: QueryShowPostResponseAmino): QueryShowPostResponse {
    const message = createBaseQueryShowPostResponse();
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromAmino(object.post);
    }
    return message;
  },
  toAmino(message: QueryShowPostResponse): QueryShowPostResponseAmino {
    const obj: any = {};
    obj.post = message.post ? Post.toAmino(message.post) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowPostResponseAminoMsg): QueryShowPostResponse {
    return QueryShowPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowPostResponseProtoMsg): QueryShowPostResponse {
    return QueryShowPostResponse.decode(message.value);
  },
  toProto(message: QueryShowPostResponse): Uint8Array {
    return QueryShowPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowPostResponse): QueryShowPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryShowPostResponse",
      value: QueryShowPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPostRequest(): QueryListPostRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryListPostRequest defines the QueryListPostRequest message.
 * @name QueryListPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostRequest
 */
export const QueryListPostRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostRequest",
  encode(message: QueryListPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostRequest>): QueryListPostRequest {
    const message = createBaseQueryListPostRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostRequestAmino): QueryListPostRequest {
    const message = createBaseQueryListPostRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostRequest): QueryListPostRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostRequestAminoMsg): QueryListPostRequest {
    return QueryListPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostRequestProtoMsg): QueryListPostRequest {
    return QueryListPostRequest.decode(message.value);
  },
  toProto(message: QueryListPostRequest): Uint8Array {
    return QueryListPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostRequest): QueryListPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostRequest",
      value: QueryListPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPostResponse(): QueryListPostResponse {
  return {
    post: [],
    pagination: undefined
  };
}
/**
 * QueryListPostResponse defines the QueryListPostResponse message.
 * @name QueryListPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostResponse
 */
export const QueryListPostResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostResponse",
  encode(message: QueryListPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostResponse>): QueryListPostResponse {
    const message = createBaseQueryListPostResponse();
    message.post = object.post?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostResponseAmino): QueryListPostResponse {
    const message = createBaseQueryListPostResponse();
    message.post = object.post?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostResponse): QueryListPostResponseAmino {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.post = message.post;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostResponseAminoMsg): QueryListPostResponse {
    return QueryListPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostResponseProtoMsg): QueryListPostResponse {
    return QueryListPostResponse.decode(message.value);
  },
  toProto(message: QueryListPostResponse): Uint8Array {
    return QueryListPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostResponse): QueryListPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostResponse",
      value: QueryListPostResponse.encode(message).finish()
    };
  }
};