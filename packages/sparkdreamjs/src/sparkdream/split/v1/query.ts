//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Share, ShareAmino } from "./share";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.split.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.split.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.split.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.split.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetShareRequest defines the QueryGetShareRequest message.
 * @name QueryGetShareRequest
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryGetShareRequest
 */
export interface QueryGetShareRequest {
  address: string;
}
export interface QueryGetShareRequestProtoMsg {
  typeUrl: "/sparkdream.split.v1.QueryGetShareRequest";
  value: Uint8Array;
}
/**
 * QueryGetShareRequest defines the QueryGetShareRequest message.
 * @name QueryGetShareRequestAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryGetShareRequest
 */
export interface QueryGetShareRequestAmino {
  address?: string;
}
export interface QueryGetShareRequestAminoMsg {
  type: "/sparkdream.split.v1.QueryGetShareRequest";
  value: QueryGetShareRequestAmino;
}
/**
 * QueryGetShareResponse defines the QueryGetShareResponse message.
 * @name QueryGetShareResponse
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryGetShareResponse
 */
export interface QueryGetShareResponse {
  share: Share;
}
export interface QueryGetShareResponseProtoMsg {
  typeUrl: "/sparkdream.split.v1.QueryGetShareResponse";
  value: Uint8Array;
}
/**
 * QueryGetShareResponse defines the QueryGetShareResponse message.
 * @name QueryGetShareResponseAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryGetShareResponse
 */
export interface QueryGetShareResponseAmino {
  share?: ShareAmino;
}
export interface QueryGetShareResponseAminoMsg {
  type: "/sparkdream.split.v1.QueryGetShareResponse";
  value: QueryGetShareResponseAmino;
}
/**
 * QueryAllShareRequest defines the QueryAllShareRequest message.
 * @name QueryAllShareRequest
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryAllShareRequest
 */
export interface QueryAllShareRequest {
  pagination?: PageRequest;
}
export interface QueryAllShareRequestProtoMsg {
  typeUrl: "/sparkdream.split.v1.QueryAllShareRequest";
  value: Uint8Array;
}
/**
 * QueryAllShareRequest defines the QueryAllShareRequest message.
 * @name QueryAllShareRequestAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryAllShareRequest
 */
export interface QueryAllShareRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllShareRequestAminoMsg {
  type: "/sparkdream.split.v1.QueryAllShareRequest";
  value: QueryAllShareRequestAmino;
}
/**
 * QueryAllShareResponse defines the QueryAllShareResponse message.
 * @name QueryAllShareResponse
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryAllShareResponse
 */
export interface QueryAllShareResponse {
  share: Share[];
  pagination?: PageResponse;
}
export interface QueryAllShareResponseProtoMsg {
  typeUrl: "/sparkdream.split.v1.QueryAllShareResponse";
  value: Uint8Array;
}
/**
 * QueryAllShareResponse defines the QueryAllShareResponse message.
 * @name QueryAllShareResponseAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryAllShareResponse
 */
export interface QueryAllShareResponseAmino {
  share?: ShareAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllShareResponseAminoMsg {
  type: "/sparkdream.split.v1.QueryAllShareResponse";
  value: QueryAllShareResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.split.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.split.v1.QueryParamsRequest",
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
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.split.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.split.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetShareRequest(): QueryGetShareRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetShareRequest defines the QueryGetShareRequest message.
 * @name QueryGetShareRequest
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryGetShareRequest
 */
export const QueryGetShareRequest = {
  typeUrl: "/sparkdream.split.v1.QueryGetShareRequest",
  encode(message: QueryGetShareRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetShareRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetShareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetShareRequest>): QueryGetShareRequest {
    const message = createBaseQueryGetShareRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetShareRequestAmino): QueryGetShareRequest {
    const message = createBaseQueryGetShareRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetShareRequest): QueryGetShareRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetShareRequestAminoMsg): QueryGetShareRequest {
    return QueryGetShareRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetShareRequestProtoMsg): QueryGetShareRequest {
    return QueryGetShareRequest.decode(message.value);
  },
  toProto(message: QueryGetShareRequest): Uint8Array {
    return QueryGetShareRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetShareRequest): QueryGetShareRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.split.v1.QueryGetShareRequest",
      value: QueryGetShareRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetShareResponse(): QueryGetShareResponse {
  return {
    share: Share.fromPartial({})
  };
}
/**
 * QueryGetShareResponse defines the QueryGetShareResponse message.
 * @name QueryGetShareResponse
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryGetShareResponse
 */
export const QueryGetShareResponse = {
  typeUrl: "/sparkdream.split.v1.QueryGetShareResponse",
  encode(message: QueryGetShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.share !== undefined) {
      Share.encode(message.share, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetShareResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share = Share.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetShareResponse>): QueryGetShareResponse {
    const message = createBaseQueryGetShareResponse();
    message.share = object.share !== undefined && object.share !== null ? Share.fromPartial(object.share) : undefined;
    return message;
  },
  fromAmino(object: QueryGetShareResponseAmino): QueryGetShareResponse {
    const message = createBaseQueryGetShareResponse();
    if (object.share !== undefined && object.share !== null) {
      message.share = Share.fromAmino(object.share);
    }
    return message;
  },
  toAmino(message: QueryGetShareResponse): QueryGetShareResponseAmino {
    const obj: any = {};
    obj.share = message.share ? Share.toAmino(message.share) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetShareResponseAminoMsg): QueryGetShareResponse {
    return QueryGetShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetShareResponseProtoMsg): QueryGetShareResponse {
    return QueryGetShareResponse.decode(message.value);
  },
  toProto(message: QueryGetShareResponse): Uint8Array {
    return QueryGetShareResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetShareResponse): QueryGetShareResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.split.v1.QueryGetShareResponse",
      value: QueryGetShareResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllShareRequest(): QueryAllShareRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllShareRequest defines the QueryAllShareRequest message.
 * @name QueryAllShareRequest
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryAllShareRequest
 */
export const QueryAllShareRequest = {
  typeUrl: "/sparkdream.split.v1.QueryAllShareRequest",
  encode(message: QueryAllShareRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllShareRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllShareRequest();
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
  fromPartial(object: DeepPartial<QueryAllShareRequest>): QueryAllShareRequest {
    const message = createBaseQueryAllShareRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllShareRequestAmino): QueryAllShareRequest {
    const message = createBaseQueryAllShareRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllShareRequest): QueryAllShareRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllShareRequestAminoMsg): QueryAllShareRequest {
    return QueryAllShareRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllShareRequestProtoMsg): QueryAllShareRequest {
    return QueryAllShareRequest.decode(message.value);
  },
  toProto(message: QueryAllShareRequest): Uint8Array {
    return QueryAllShareRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllShareRequest): QueryAllShareRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.split.v1.QueryAllShareRequest",
      value: QueryAllShareRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllShareResponse(): QueryAllShareResponse {
  return {
    share: [],
    pagination: undefined
  };
}
/**
 * QueryAllShareResponse defines the QueryAllShareResponse message.
 * @name QueryAllShareResponse
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.QueryAllShareResponse
 */
export const QueryAllShareResponse = {
  typeUrl: "/sparkdream.split.v1.QueryAllShareResponse",
  encode(message: QueryAllShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.share) {
      Share.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllShareResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share.push(Share.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllShareResponse>): QueryAllShareResponse {
    const message = createBaseQueryAllShareResponse();
    message.share = object.share?.map(e => Share.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllShareResponseAmino): QueryAllShareResponse {
    const message = createBaseQueryAllShareResponse();
    message.share = object.share?.map(e => Share.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllShareResponse): QueryAllShareResponseAmino {
    const obj: any = {};
    if (message.share) {
      obj.share = message.share.map(e => e ? Share.toAmino(e) : undefined);
    } else {
      obj.share = message.share;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllShareResponseAminoMsg): QueryAllShareResponse {
    return QueryAllShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllShareResponseProtoMsg): QueryAllShareResponse {
    return QueryAllShareResponse.decode(message.value);
  },
  toProto(message: QueryAllShareResponse): Uint8Array {
    return QueryAllShareResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllShareResponse): QueryAllShareResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.split.v1.QueryAllShareResponse",
      value: QueryAllShareResponse.encode(message).finish()
    };
  }
};