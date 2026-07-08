//@ts-nocheck
import { Akash, AkashAmino } from "./akash";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GetInfoRequest is the request type for the Discovery/GetInfo RPC method.
 * @name GetInfoRequest
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.GetInfoRequest
 */
export interface GetInfoRequest {}
export interface GetInfoRequestProtoMsg {
  typeUrl: "/akash.discovery.v1.GetInfoRequest";
  value: Uint8Array;
}
/**
 * GetInfoRequest is the request type for the Discovery/GetInfo RPC method.
 * @name GetInfoRequestAmino
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.GetInfoRequest
 */
export interface GetInfoRequestAmino {}
export interface GetInfoRequestAminoMsg {
  type: "/akash.discovery.v1.GetInfoRequest";
  value: GetInfoRequestAmino;
}
/**
 * GetInfoResponse is the response type for the Discovery/GetInfo RPC method.
 * @name GetInfoResponse
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.GetInfoResponse
 */
export interface GetInfoResponse {
  /**
   * Info contains the node's version and capability information.
   */
  info?: Akash;
}
export interface GetInfoResponseProtoMsg {
  typeUrl: "/akash.discovery.v1.GetInfoResponse";
  value: Uint8Array;
}
/**
 * GetInfoResponse is the response type for the Discovery/GetInfo RPC method.
 * @name GetInfoResponseAmino
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.GetInfoResponse
 */
export interface GetInfoResponseAmino {
  /**
   * Info contains the node's version and capability information.
   */
  info?: AkashAmino;
}
export interface GetInfoResponseAminoMsg {
  type: "/akash.discovery.v1.GetInfoResponse";
  value: GetInfoResponseAmino;
}
function createBaseGetInfoRequest(): GetInfoRequest {
  return {};
}
/**
 * GetInfoRequest is the request type for the Discovery/GetInfo RPC method.
 * @name GetInfoRequest
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.GetInfoRequest
 */
export const GetInfoRequest = {
  typeUrl: "/akash.discovery.v1.GetInfoRequest",
  encode(_: GetInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoRequest();
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
  fromPartial(_: DeepPartial<GetInfoRequest>): GetInfoRequest {
    const message = createBaseGetInfoRequest();
    return message;
  },
  fromAmino(_: GetInfoRequestAmino): GetInfoRequest {
    const message = createBaseGetInfoRequest();
    return message;
  },
  toAmino(_: GetInfoRequest): GetInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetInfoRequestAminoMsg): GetInfoRequest {
    return GetInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetInfoRequestProtoMsg): GetInfoRequest {
    return GetInfoRequest.decode(message.value);
  },
  toProto(message: GetInfoRequest): Uint8Array {
    return GetInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: GetInfoRequest): GetInfoRequestProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.GetInfoRequest",
      value: GetInfoRequest.encode(message).finish()
    };
  }
};
function createBaseGetInfoResponse(): GetInfoResponse {
  return {
    info: undefined
  };
}
/**
 * GetInfoResponse is the response type for the Discovery/GetInfo RPC method.
 * @name GetInfoResponse
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.GetInfoResponse
 */
export const GetInfoResponse = {
  typeUrl: "/akash.discovery.v1.GetInfoResponse",
  encode(message: GetInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      Akash.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = Akash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetInfoResponse>): GetInfoResponse {
    const message = createBaseGetInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? Akash.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: GetInfoResponseAmino): GetInfoResponse {
    const message = createBaseGetInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = Akash.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: GetInfoResponse): GetInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? Akash.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetInfoResponseAminoMsg): GetInfoResponse {
    return GetInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetInfoResponseProtoMsg): GetInfoResponse {
    return GetInfoResponse.decode(message.value);
  },
  toProto(message: GetInfoResponse): Uint8Array {
    return GetInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: GetInfoResponse): GetInfoResponseProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.GetInfoResponse",
      value: GetInfoResponse.encode(message).finish()
    };
  }
};