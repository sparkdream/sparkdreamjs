//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * @name QueryAllowedMsgsRequest
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.QueryAllowedMsgsRequest
 */
export interface QueryAllowedMsgsRequest {}
export interface QueryAllowedMsgsRequestProtoMsg {
  typeUrl: "/sparkdream.guardian.v1.QueryAllowedMsgsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllowedMsgsRequestAmino
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.QueryAllowedMsgsRequest
 */
export interface QueryAllowedMsgsRequestAmino {}
export interface QueryAllowedMsgsRequestAminoMsg {
  type: "/sparkdream.guardian.v1.QueryAllowedMsgsRequest";
  value: QueryAllowedMsgsRequestAmino;
}
/**
 * @name QueryAllowedMsgsResponse
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.QueryAllowedMsgsResponse
 */
export interface QueryAllowedMsgsResponse {
  /**
   * type_urls is the sorted list of msg type URLs accepted by MsgExec.
   */
  typeUrls: string[];
}
export interface QueryAllowedMsgsResponseProtoMsg {
  typeUrl: "/sparkdream.guardian.v1.QueryAllowedMsgsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllowedMsgsResponseAmino
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.QueryAllowedMsgsResponse
 */
export interface QueryAllowedMsgsResponseAmino {
  /**
   * type_urls is the sorted list of msg type URLs accepted by MsgExec.
   */
  type_urls?: string[];
}
export interface QueryAllowedMsgsResponseAminoMsg {
  type: "/sparkdream.guardian.v1.QueryAllowedMsgsResponse";
  value: QueryAllowedMsgsResponseAmino;
}
function createBaseQueryAllowedMsgsRequest(): QueryAllowedMsgsRequest {
  return {};
}
/**
 * @name QueryAllowedMsgsRequest
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.QueryAllowedMsgsRequest
 */
export const QueryAllowedMsgsRequest = {
  typeUrl: "/sparkdream.guardian.v1.QueryAllowedMsgsRequest",
  encode(_: QueryAllowedMsgsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowedMsgsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedMsgsRequest();
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
  fromPartial(_: DeepPartial<QueryAllowedMsgsRequest>): QueryAllowedMsgsRequest {
    const message = createBaseQueryAllowedMsgsRequest();
    return message;
  },
  fromAmino(_: QueryAllowedMsgsRequestAmino): QueryAllowedMsgsRequest {
    const message = createBaseQueryAllowedMsgsRequest();
    return message;
  },
  toAmino(_: QueryAllowedMsgsRequest): QueryAllowedMsgsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllowedMsgsRequestAminoMsg): QueryAllowedMsgsRequest {
    return QueryAllowedMsgsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedMsgsRequestProtoMsg): QueryAllowedMsgsRequest {
    return QueryAllowedMsgsRequest.decode(message.value);
  },
  toProto(message: QueryAllowedMsgsRequest): Uint8Array {
    return QueryAllowedMsgsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedMsgsRequest): QueryAllowedMsgsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.guardian.v1.QueryAllowedMsgsRequest",
      value: QueryAllowedMsgsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedMsgsResponse(): QueryAllowedMsgsResponse {
  return {
    typeUrls: []
  };
}
/**
 * @name QueryAllowedMsgsResponse
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.QueryAllowedMsgsResponse
 */
export const QueryAllowedMsgsResponse = {
  typeUrl: "/sparkdream.guardian.v1.QueryAllowedMsgsResponse",
  encode(message: QueryAllowedMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.typeUrls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowedMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllowedMsgsResponse>): QueryAllowedMsgsResponse {
    const message = createBaseQueryAllowedMsgsResponse();
    message.typeUrls = object.typeUrls?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllowedMsgsResponseAmino): QueryAllowedMsgsResponse {
    const message = createBaseQueryAllowedMsgsResponse();
    message.typeUrls = object.type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllowedMsgsResponse): QueryAllowedMsgsResponseAmino {
    const obj: any = {};
    if (message.typeUrls) {
      obj.type_urls = message.typeUrls.map(e => e);
    } else {
      obj.type_urls = message.typeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllowedMsgsResponseAminoMsg): QueryAllowedMsgsResponse {
    return QueryAllowedMsgsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedMsgsResponseProtoMsg): QueryAllowedMsgsResponse {
    return QueryAllowedMsgsResponse.decode(message.value);
  },
  toProto(message: QueryAllowedMsgsResponse): Uint8Array {
    return QueryAllowedMsgsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedMsgsResponse): QueryAllowedMsgsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.guardian.v1.QueryAllowedMsgsResponse",
      value: QueryAllowedMsgsResponse.encode(message).finish()
    };
  }
};