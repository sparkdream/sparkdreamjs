//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { NameRecord, NameRecordAmino } from "./name_record";
import { Dispute, DisputeAmino } from "./dispute";
import { OwnerInfo, OwnerInfoAmino } from "./owner_info";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryResolveRequest defines the QueryResolveRequest message.
 * @name QueryResolveRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryResolveRequest
 */
export interface QueryResolveRequest {
  name: string;
}
export interface QueryResolveRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryResolveRequest";
  value: Uint8Array;
}
/**
 * QueryResolveRequest defines the QueryResolveRequest message.
 * @name QueryResolveRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryResolveRequest
 */
export interface QueryResolveRequestAmino {
  name?: string;
}
export interface QueryResolveRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryResolveRequest";
  value: QueryResolveRequestAmino;
}
/**
 * QueryResolveResponse defines the QueryResolveResponse message.
 * @name QueryResolveResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryResolveResponse
 */
export interface QueryResolveResponse {
  nameRecord?: NameRecord;
}
export interface QueryResolveResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryResolveResponse";
  value: Uint8Array;
}
/**
 * QueryResolveResponse defines the QueryResolveResponse message.
 * @name QueryResolveResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryResolveResponse
 */
export interface QueryResolveResponseAmino {
  name_record?: NameRecordAmino;
}
export interface QueryResolveResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryResolveResponse";
  value: QueryResolveResponseAmino;
}
/**
 * QueryReverseResolveRequest defines the QueryReverseResolveRequest message.
 * @name QueryReverseResolveRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryReverseResolveRequest
 */
export interface QueryReverseResolveRequest {
  address: string;
}
export interface QueryReverseResolveRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryReverseResolveRequest";
  value: Uint8Array;
}
/**
 * QueryReverseResolveRequest defines the QueryReverseResolveRequest message.
 * @name QueryReverseResolveRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryReverseResolveRequest
 */
export interface QueryReverseResolveRequestAmino {
  address?: string;
}
export interface QueryReverseResolveRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryReverseResolveRequest";
  value: QueryReverseResolveRequestAmino;
}
/**
 * QueryReverseResolveResponse defines the QueryReverseResolveResponse message.
 * @name QueryReverseResolveResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryReverseResolveResponse
 */
export interface QueryReverseResolveResponse {
  name: string;
}
export interface QueryReverseResolveResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryReverseResolveResponse";
  value: Uint8Array;
}
/**
 * QueryReverseResolveResponse defines the QueryReverseResolveResponse message.
 * @name QueryReverseResolveResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryReverseResolveResponse
 */
export interface QueryReverseResolveResponseAmino {
  name?: string;
}
export interface QueryReverseResolveResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryReverseResolveResponse";
  value: QueryReverseResolveResponseAmino;
}
/**
 * QueryNamesRequest defines the QueryNamesRequest message.
 * @name QueryNamesRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryNamesRequest
 */
export interface QueryNamesRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryNamesRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryNamesRequest";
  value: Uint8Array;
}
/**
 * QueryNamesRequest defines the QueryNamesRequest message.
 * @name QueryNamesRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryNamesRequest
 */
export interface QueryNamesRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryNamesRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryNamesRequest";
  value: QueryNamesRequestAmino;
}
/**
 * QueryNamesResponse defines the QueryNamesResponse message.
 * @name QueryNamesResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryNamesResponse
 */
export interface QueryNamesResponse {
  names: NameRecord[];
  pagination?: PageResponse;
}
export interface QueryNamesResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryNamesResponse";
  value: Uint8Array;
}
/**
 * QueryNamesResponse defines the QueryNamesResponse message.
 * @name QueryNamesResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryNamesResponse
 */
export interface QueryNamesResponseAmino {
  names?: NameRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryNamesResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryNamesResponse";
  value: QueryNamesResponseAmino;
}
/**
 * QueryGetDisputeRequest defines the QueryGetDisputeRequest message.
 * @name QueryGetDisputeRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetDisputeRequest
 */
export interface QueryGetDisputeRequest {
  name: string;
}
export interface QueryGetDisputeRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryGetDisputeRequest";
  value: Uint8Array;
}
/**
 * QueryGetDisputeRequest defines the QueryGetDisputeRequest message.
 * @name QueryGetDisputeRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetDisputeRequest
 */
export interface QueryGetDisputeRequestAmino {
  name?: string;
}
export interface QueryGetDisputeRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryGetDisputeRequest";
  value: QueryGetDisputeRequestAmino;
}
/**
 * QueryGetDisputeResponse defines the QueryGetDisputeResponse message.
 * @name QueryGetDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetDisputeResponse
 */
export interface QueryGetDisputeResponse {
  dispute: Dispute;
}
export interface QueryGetDisputeResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryGetDisputeResponse";
  value: Uint8Array;
}
/**
 * QueryGetDisputeResponse defines the QueryGetDisputeResponse message.
 * @name QueryGetDisputeResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetDisputeResponse
 */
export interface QueryGetDisputeResponseAmino {
  dispute?: DisputeAmino;
}
export interface QueryGetDisputeResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryGetDisputeResponse";
  value: QueryGetDisputeResponseAmino;
}
/**
 * QueryAllDisputeRequest defines the QueryAllDisputeRequest message.
 * @name QueryAllDisputeRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryAllDisputeRequest
 */
export interface QueryAllDisputeRequest {
  pagination?: PageRequest;
}
export interface QueryAllDisputeRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryAllDisputeRequest";
  value: Uint8Array;
}
/**
 * QueryAllDisputeRequest defines the QueryAllDisputeRequest message.
 * @name QueryAllDisputeRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryAllDisputeRequest
 */
export interface QueryAllDisputeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDisputeRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryAllDisputeRequest";
  value: QueryAllDisputeRequestAmino;
}
/**
 * QueryAllDisputeResponse defines the QueryAllDisputeResponse message.
 * @name QueryAllDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryAllDisputeResponse
 */
export interface QueryAllDisputeResponse {
  dispute: Dispute[];
  pagination?: PageResponse;
}
export interface QueryAllDisputeResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryAllDisputeResponse";
  value: Uint8Array;
}
/**
 * QueryAllDisputeResponse defines the QueryAllDisputeResponse message.
 * @name QueryAllDisputeResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryAllDisputeResponse
 */
export interface QueryAllDisputeResponseAmino {
  dispute?: DisputeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDisputeResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryAllDisputeResponse";
  value: QueryAllDisputeResponseAmino;
}
/**
 * QueryGetOwnerInfoRequest defines the request type for the GetOwnerInfo RPC.
 * @name QueryGetOwnerInfoRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetOwnerInfoRequest
 */
export interface QueryGetOwnerInfoRequest {
  address: string;
}
export interface QueryGetOwnerInfoRequestProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryGetOwnerInfoRequest";
  value: Uint8Array;
}
/**
 * QueryGetOwnerInfoRequest defines the request type for the GetOwnerInfo RPC.
 * @name QueryGetOwnerInfoRequestAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetOwnerInfoRequest
 */
export interface QueryGetOwnerInfoRequestAmino {
  address?: string;
}
export interface QueryGetOwnerInfoRequestAminoMsg {
  type: "/sparkdream.name.v1.QueryGetOwnerInfoRequest";
  value: QueryGetOwnerInfoRequestAmino;
}
/**
 * QueryGetOwnerInfoResponse defines the response type for the GetOwnerInfo RPC.
 * owner_info is always populated; for addresses with no record it is returned
 * with the address echoed and all other fields empty/zero.
 * @name QueryGetOwnerInfoResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetOwnerInfoResponse
 */
export interface QueryGetOwnerInfoResponse {
  ownerInfo: OwnerInfo;
}
export interface QueryGetOwnerInfoResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.QueryGetOwnerInfoResponse";
  value: Uint8Array;
}
/**
 * QueryGetOwnerInfoResponse defines the response type for the GetOwnerInfo RPC.
 * owner_info is always populated; for addresses with no record it is returned
 * with the address echoed and all other fields empty/zero.
 * @name QueryGetOwnerInfoResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetOwnerInfoResponse
 */
export interface QueryGetOwnerInfoResponseAmino {
  owner_info?: OwnerInfoAmino;
}
export interface QueryGetOwnerInfoResponseAminoMsg {
  type: "/sparkdream.name.v1.QueryGetOwnerInfoResponse";
  value: QueryGetOwnerInfoResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.name.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.name.v1.QueryParamsRequest",
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
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.name.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.name.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResolveRequest(): QueryResolveRequest {
  return {
    name: ""
  };
}
/**
 * QueryResolveRequest defines the QueryResolveRequest message.
 * @name QueryResolveRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryResolveRequest
 */
export const QueryResolveRequest = {
  typeUrl: "/sparkdream.name.v1.QueryResolveRequest",
  encode(message: QueryResolveRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryResolveRequest>): QueryResolveRequest {
    const message = createBaseQueryResolveRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryResolveRequestAmino): QueryResolveRequest {
    const message = createBaseQueryResolveRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryResolveRequest): QueryResolveRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryResolveRequestAminoMsg): QueryResolveRequest {
    return QueryResolveRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolveRequestProtoMsg): QueryResolveRequest {
    return QueryResolveRequest.decode(message.value);
  },
  toProto(message: QueryResolveRequest): Uint8Array {
    return QueryResolveRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResolveRequest): QueryResolveRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryResolveRequest",
      value: QueryResolveRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResolveResponse(): QueryResolveResponse {
  return {
    nameRecord: undefined
  };
}
/**
 * QueryResolveResponse defines the QueryResolveResponse message.
 * @name QueryResolveResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryResolveResponse
 */
export const QueryResolveResponse = {
  typeUrl: "/sparkdream.name.v1.QueryResolveResponse",
  encode(message: QueryResolveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nameRecord !== undefined) {
      NameRecord.encode(message.nameRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameRecord = NameRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryResolveResponse>): QueryResolveResponse {
    const message = createBaseQueryResolveResponse();
    message.nameRecord = object.nameRecord !== undefined && object.nameRecord !== null ? NameRecord.fromPartial(object.nameRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryResolveResponseAmino): QueryResolveResponse {
    const message = createBaseQueryResolveResponse();
    if (object.name_record !== undefined && object.name_record !== null) {
      message.nameRecord = NameRecord.fromAmino(object.name_record);
    }
    return message;
  },
  toAmino(message: QueryResolveResponse): QueryResolveResponseAmino {
    const obj: any = {};
    obj.name_record = message.nameRecord ? NameRecord.toAmino(message.nameRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResolveResponseAminoMsg): QueryResolveResponse {
    return QueryResolveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolveResponseProtoMsg): QueryResolveResponse {
    return QueryResolveResponse.decode(message.value);
  },
  toProto(message: QueryResolveResponse): Uint8Array {
    return QueryResolveResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResolveResponse): QueryResolveResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryResolveResponse",
      value: QueryResolveResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReverseResolveRequest(): QueryReverseResolveRequest {
  return {
    address: ""
  };
}
/**
 * QueryReverseResolveRequest defines the QueryReverseResolveRequest message.
 * @name QueryReverseResolveRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryReverseResolveRequest
 */
export const QueryReverseResolveRequest = {
  typeUrl: "/sparkdream.name.v1.QueryReverseResolveRequest",
  encode(message: QueryReverseResolveRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReverseResolveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReverseResolveRequest();
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
  fromPartial(object: DeepPartial<QueryReverseResolveRequest>): QueryReverseResolveRequest {
    const message = createBaseQueryReverseResolveRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryReverseResolveRequestAmino): QueryReverseResolveRequest {
    const message = createBaseQueryReverseResolveRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryReverseResolveRequest): QueryReverseResolveRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryReverseResolveRequestAminoMsg): QueryReverseResolveRequest {
    return QueryReverseResolveRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReverseResolveRequestProtoMsg): QueryReverseResolveRequest {
    return QueryReverseResolveRequest.decode(message.value);
  },
  toProto(message: QueryReverseResolveRequest): Uint8Array {
    return QueryReverseResolveRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReverseResolveRequest): QueryReverseResolveRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryReverseResolveRequest",
      value: QueryReverseResolveRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReverseResolveResponse(): QueryReverseResolveResponse {
  return {
    name: ""
  };
}
/**
 * QueryReverseResolveResponse defines the QueryReverseResolveResponse message.
 * @name QueryReverseResolveResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryReverseResolveResponse
 */
export const QueryReverseResolveResponse = {
  typeUrl: "/sparkdream.name.v1.QueryReverseResolveResponse",
  encode(message: QueryReverseResolveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReverseResolveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReverseResolveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReverseResolveResponse>): QueryReverseResolveResponse {
    const message = createBaseQueryReverseResolveResponse();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryReverseResolveResponseAmino): QueryReverseResolveResponse {
    const message = createBaseQueryReverseResolveResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryReverseResolveResponse): QueryReverseResolveResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryReverseResolveResponseAminoMsg): QueryReverseResolveResponse {
    return QueryReverseResolveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReverseResolveResponseProtoMsg): QueryReverseResolveResponse {
    return QueryReverseResolveResponse.decode(message.value);
  },
  toProto(message: QueryReverseResolveResponse): Uint8Array {
    return QueryReverseResolveResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReverseResolveResponse): QueryReverseResolveResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryReverseResolveResponse",
      value: QueryReverseResolveResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNamesRequest(): QueryNamesRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryNamesRequest defines the QueryNamesRequest message.
 * @name QueryNamesRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryNamesRequest
 */
export const QueryNamesRequest = {
  typeUrl: "/sparkdream.name.v1.QueryNamesRequest",
  encode(message: QueryNamesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNamesRequest>): QueryNamesRequest {
    const message = createBaseQueryNamesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNamesRequestAmino): QueryNamesRequest {
    const message = createBaseQueryNamesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNamesRequest): QueryNamesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNamesRequestAminoMsg): QueryNamesRequest {
    return QueryNamesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamesRequestProtoMsg): QueryNamesRequest {
    return QueryNamesRequest.decode(message.value);
  },
  toProto(message: QueryNamesRequest): Uint8Array {
    return QueryNamesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNamesRequest): QueryNamesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryNamesRequest",
      value: QueryNamesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNamesResponse(): QueryNamesResponse {
  return {
    names: [],
    pagination: undefined
  };
}
/**
 * QueryNamesResponse defines the QueryNamesResponse message.
 * @name QueryNamesResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryNamesResponse
 */
export const QueryNamesResponse = {
  typeUrl: "/sparkdream.name.v1.QueryNamesResponse",
  encode(message: QueryNamesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.names) {
      NameRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.names.push(NameRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryNamesResponse>): QueryNamesResponse {
    const message = createBaseQueryNamesResponse();
    message.names = object.names?.map(e => NameRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNamesResponseAmino): QueryNamesResponse {
    const message = createBaseQueryNamesResponse();
    message.names = object.names?.map(e => NameRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNamesResponse): QueryNamesResponseAmino {
    const obj: any = {};
    if (message.names) {
      obj.names = message.names.map(e => e ? NameRecord.toAmino(e) : undefined);
    } else {
      obj.names = message.names;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNamesResponseAminoMsg): QueryNamesResponse {
    return QueryNamesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamesResponseProtoMsg): QueryNamesResponse {
    return QueryNamesResponse.decode(message.value);
  },
  toProto(message: QueryNamesResponse): Uint8Array {
    return QueryNamesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNamesResponse): QueryNamesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryNamesResponse",
      value: QueryNamesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisputeRequest(): QueryGetDisputeRequest {
  return {
    name: ""
  };
}
/**
 * QueryGetDisputeRequest defines the QueryGetDisputeRequest message.
 * @name QueryGetDisputeRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetDisputeRequest
 */
export const QueryGetDisputeRequest = {
  typeUrl: "/sparkdream.name.v1.QueryGetDisputeRequest",
  encode(message: QueryGetDisputeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisputeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisputeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisputeRequest>): QueryGetDisputeRequest {
    const message = createBaseQueryGetDisputeRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetDisputeRequestAmino): QueryGetDisputeRequest {
    const message = createBaseQueryGetDisputeRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetDisputeRequest): QueryGetDisputeRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisputeRequestAminoMsg): QueryGetDisputeRequest {
    return QueryGetDisputeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisputeRequestProtoMsg): QueryGetDisputeRequest {
    return QueryGetDisputeRequest.decode(message.value);
  },
  toProto(message: QueryGetDisputeRequest): Uint8Array {
    return QueryGetDisputeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisputeRequest): QueryGetDisputeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryGetDisputeRequest",
      value: QueryGetDisputeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisputeResponse(): QueryGetDisputeResponse {
  return {
    dispute: Dispute.fromPartial({})
  };
}
/**
 * QueryGetDisputeResponse defines the QueryGetDisputeResponse message.
 * @name QueryGetDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetDisputeResponse
 */
export const QueryGetDisputeResponse = {
  typeUrl: "/sparkdream.name.v1.QueryGetDisputeResponse",
  encode(message: QueryGetDisputeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisputeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisputeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute = Dispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisputeResponse>): QueryGetDisputeResponse {
    const message = createBaseQueryGetDisputeResponse();
    message.dispute = object.dispute !== undefined && object.dispute !== null ? Dispute.fromPartial(object.dispute) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDisputeResponseAmino): QueryGetDisputeResponse {
    const message = createBaseQueryGetDisputeResponse();
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromAmino(object.dispute);
    }
    return message;
  },
  toAmino(message: QueryGetDisputeResponse): QueryGetDisputeResponseAmino {
    const obj: any = {};
    obj.dispute = message.dispute ? Dispute.toAmino(message.dispute) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisputeResponseAminoMsg): QueryGetDisputeResponse {
    return QueryGetDisputeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisputeResponseProtoMsg): QueryGetDisputeResponse {
    return QueryGetDisputeResponse.decode(message.value);
  },
  toProto(message: QueryGetDisputeResponse): Uint8Array {
    return QueryGetDisputeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisputeResponse): QueryGetDisputeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryGetDisputeResponse",
      value: QueryGetDisputeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisputeRequest(): QueryAllDisputeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllDisputeRequest defines the QueryAllDisputeRequest message.
 * @name QueryAllDisputeRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryAllDisputeRequest
 */
export const QueryAllDisputeRequest = {
  typeUrl: "/sparkdream.name.v1.QueryAllDisputeRequest",
  encode(message: QueryAllDisputeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisputeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisputeRequest();
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
  fromPartial(object: DeepPartial<QueryAllDisputeRequest>): QueryAllDisputeRequest {
    const message = createBaseQueryAllDisputeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisputeRequestAmino): QueryAllDisputeRequest {
    const message = createBaseQueryAllDisputeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisputeRequest): QueryAllDisputeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisputeRequestAminoMsg): QueryAllDisputeRequest {
    return QueryAllDisputeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisputeRequestProtoMsg): QueryAllDisputeRequest {
    return QueryAllDisputeRequest.decode(message.value);
  },
  toProto(message: QueryAllDisputeRequest): Uint8Array {
    return QueryAllDisputeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisputeRequest): QueryAllDisputeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryAllDisputeRequest",
      value: QueryAllDisputeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisputeResponse(): QueryAllDisputeResponse {
  return {
    dispute: [],
    pagination: undefined
  };
}
/**
 * QueryAllDisputeResponse defines the QueryAllDisputeResponse message.
 * @name QueryAllDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryAllDisputeResponse
 */
export const QueryAllDisputeResponse = {
  typeUrl: "/sparkdream.name.v1.QueryAllDisputeResponse",
  encode(message: QueryAllDisputeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.dispute) {
      Dispute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisputeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisputeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute.push(Dispute.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllDisputeResponse>): QueryAllDisputeResponse {
    const message = createBaseQueryAllDisputeResponse();
    message.dispute = object.dispute?.map(e => Dispute.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisputeResponseAmino): QueryAllDisputeResponse {
    const message = createBaseQueryAllDisputeResponse();
    message.dispute = object.dispute?.map(e => Dispute.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisputeResponse): QueryAllDisputeResponseAmino {
    const obj: any = {};
    if (message.dispute) {
      obj.dispute = message.dispute.map(e => e ? Dispute.toAmino(e) : undefined);
    } else {
      obj.dispute = message.dispute;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisputeResponseAminoMsg): QueryAllDisputeResponse {
    return QueryAllDisputeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisputeResponseProtoMsg): QueryAllDisputeResponse {
    return QueryAllDisputeResponse.decode(message.value);
  },
  toProto(message: QueryAllDisputeResponse): Uint8Array {
    return QueryAllDisputeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisputeResponse): QueryAllDisputeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryAllDisputeResponse",
      value: QueryAllDisputeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOwnerInfoRequest(): QueryGetOwnerInfoRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetOwnerInfoRequest defines the request type for the GetOwnerInfo RPC.
 * @name QueryGetOwnerInfoRequest
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetOwnerInfoRequest
 */
export const QueryGetOwnerInfoRequest = {
  typeUrl: "/sparkdream.name.v1.QueryGetOwnerInfoRequest",
  encode(message: QueryGetOwnerInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOwnerInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOwnerInfoRequest();
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
  fromPartial(object: DeepPartial<QueryGetOwnerInfoRequest>): QueryGetOwnerInfoRequest {
    const message = createBaseQueryGetOwnerInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetOwnerInfoRequestAmino): QueryGetOwnerInfoRequest {
    const message = createBaseQueryGetOwnerInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetOwnerInfoRequest): QueryGetOwnerInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetOwnerInfoRequestAminoMsg): QueryGetOwnerInfoRequest {
    return QueryGetOwnerInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOwnerInfoRequestProtoMsg): QueryGetOwnerInfoRequest {
    return QueryGetOwnerInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetOwnerInfoRequest): Uint8Array {
    return QueryGetOwnerInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOwnerInfoRequest): QueryGetOwnerInfoRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryGetOwnerInfoRequest",
      value: QueryGetOwnerInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOwnerInfoResponse(): QueryGetOwnerInfoResponse {
  return {
    ownerInfo: OwnerInfo.fromPartial({})
  };
}
/**
 * QueryGetOwnerInfoResponse defines the response type for the GetOwnerInfo RPC.
 * owner_info is always populated; for addresses with no record it is returned
 * with the address echoed and all other fields empty/zero.
 * @name QueryGetOwnerInfoResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.QueryGetOwnerInfoResponse
 */
export const QueryGetOwnerInfoResponse = {
  typeUrl: "/sparkdream.name.v1.QueryGetOwnerInfoResponse",
  encode(message: QueryGetOwnerInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerInfo !== undefined) {
      OwnerInfo.encode(message.ownerInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOwnerInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOwnerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerInfo = OwnerInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOwnerInfoResponse>): QueryGetOwnerInfoResponse {
    const message = createBaseQueryGetOwnerInfoResponse();
    message.ownerInfo = object.ownerInfo !== undefined && object.ownerInfo !== null ? OwnerInfo.fromPartial(object.ownerInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOwnerInfoResponseAmino): QueryGetOwnerInfoResponse {
    const message = createBaseQueryGetOwnerInfoResponse();
    if (object.owner_info !== undefined && object.owner_info !== null) {
      message.ownerInfo = OwnerInfo.fromAmino(object.owner_info);
    }
    return message;
  },
  toAmino(message: QueryGetOwnerInfoResponse): QueryGetOwnerInfoResponseAmino {
    const obj: any = {};
    obj.owner_info = message.ownerInfo ? OwnerInfo.toAmino(message.ownerInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOwnerInfoResponseAminoMsg): QueryGetOwnerInfoResponse {
    return QueryGetOwnerInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOwnerInfoResponseProtoMsg): QueryGetOwnerInfoResponse {
    return QueryGetOwnerInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetOwnerInfoResponse): Uint8Array {
    return QueryGetOwnerInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOwnerInfoResponse): QueryGetOwnerInfoResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.QueryGetOwnerInfoResponse",
      value: QueryGetOwnerInfoResponse.encode(message).finish()
    };
  }
};