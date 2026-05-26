//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { GrantType, Grant, GrantAmino } from "./grant";
import { Params, ParamsAmino } from "./params";
import { Session, SessionAmino } from "./session";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * @name QueryParamsRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * @name QueryParamsRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.session.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * @name QueryParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.session.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QuerySessionRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionRequest
 */
export interface QuerySessionRequest {
  granter: string;
  grantee: string;
}
export interface QuerySessionRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QuerySessionRequest";
  value: Uint8Array;
}
/**
 * @name QuerySessionRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionRequest
 */
export interface QuerySessionRequestAmino {
  granter?: string;
  grantee?: string;
}
export interface QuerySessionRequestAminoMsg {
  type: "/sparkdream.session.v1.QuerySessionRequest";
  value: QuerySessionRequestAmino;
}
/**
 * @name QuerySessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionResponse
 */
export interface QuerySessionResponse {
  session: Session;
}
export interface QuerySessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QuerySessionResponse";
  value: Uint8Array;
}
/**
 * @name QuerySessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionResponse
 */
export interface QuerySessionResponseAmino {
  session?: SessionAmino;
}
export interface QuerySessionResponseAminoMsg {
  type: "/sparkdream.session.v1.QuerySessionResponse";
  value: QuerySessionResponseAmino;
}
/**
 * @name QuerySessionsByGranterRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranterRequest
 */
export interface QuerySessionsByGranterRequest {
  granter: string;
  pagination?: PageRequest;
}
export interface QuerySessionsByGranterRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranterRequest";
  value: Uint8Array;
}
/**
 * @name QuerySessionsByGranterRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranterRequest
 */
export interface QuerySessionsByGranterRequestAmino {
  granter?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySessionsByGranterRequestAminoMsg {
  type: "/sparkdream.session.v1.QuerySessionsByGranterRequest";
  value: QuerySessionsByGranterRequestAmino;
}
/**
 * @name QuerySessionsByGranterResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranterResponse
 */
export interface QuerySessionsByGranterResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsByGranterResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranterResponse";
  value: Uint8Array;
}
/**
 * @name QuerySessionsByGranterResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranterResponse
 */
export interface QuerySessionsByGranterResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsByGranterResponseAminoMsg {
  type: "/sparkdream.session.v1.QuerySessionsByGranterResponse";
  value: QuerySessionsByGranterResponseAmino;
}
/**
 * @name QuerySessionsByGranteeRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranteeRequest
 */
export interface QuerySessionsByGranteeRequest {
  grantee: string;
  pagination?: PageRequest;
}
export interface QuerySessionsByGranteeRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranteeRequest";
  value: Uint8Array;
}
/**
 * @name QuerySessionsByGranteeRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranteeRequest
 */
export interface QuerySessionsByGranteeRequestAmino {
  grantee?: string;
  pagination?: PageRequestAmino;
}
export interface QuerySessionsByGranteeRequestAminoMsg {
  type: "/sparkdream.session.v1.QuerySessionsByGranteeRequest";
  value: QuerySessionsByGranteeRequestAmino;
}
/**
 * @name QuerySessionsByGranteeResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranteeResponse
 */
export interface QuerySessionsByGranteeResponse {
  sessions: Session[];
  pagination?: PageResponse;
}
export interface QuerySessionsByGranteeResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranteeResponse";
  value: Uint8Array;
}
/**
 * @name QuerySessionsByGranteeResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranteeResponse
 */
export interface QuerySessionsByGranteeResponseAmino {
  sessions?: SessionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySessionsByGranteeResponseAminoMsg {
  type: "/sparkdream.session.v1.QuerySessionsByGranteeResponse";
  value: QuerySessionsByGranteeResponseAmino;
}
/**
 * @name QueryGrantRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantRequest
 */
export interface QueryGrantRequest {
  id: bigint;
}
export interface QueryGrantRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryGrantRequest";
  value: Uint8Array;
}
/**
 * @name QueryGrantRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantRequest
 */
export interface QueryGrantRequestAmino {
  id?: string;
}
export interface QueryGrantRequestAminoMsg {
  type: "/sparkdream.session.v1.QueryGrantRequest";
  value: QueryGrantRequestAmino;
}
/**
 * @name QueryGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantResponse
 */
export interface QueryGrantResponse {
  grant: Grant;
}
export interface QueryGrantResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryGrantResponse";
  value: Uint8Array;
}
/**
 * @name QueryGrantResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantResponse
 */
export interface QueryGrantResponseAmino {
  grant?: GrantAmino;
}
export interface QueryGrantResponseAminoMsg {
  type: "/sparkdream.session.v1.QueryGrantResponse";
  value: QueryGrantResponseAmino;
}
/**
 * @name QueryGrantsByGranterRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranterRequest
 */
export interface QueryGrantsByGranterRequest {
  granter: string;
  /**
   * Optional type filter. UNSPECIFIED returns all types.
   */
  type: GrantType;
  pagination?: PageRequest;
}
export interface QueryGrantsByGranterRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranterRequest";
  value: Uint8Array;
}
/**
 * @name QueryGrantsByGranterRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranterRequest
 */
export interface QueryGrantsByGranterRequestAmino {
  granter?: string;
  /**
   * Optional type filter. UNSPECIFIED returns all types.
   */
  type?: GrantType;
  pagination?: PageRequestAmino;
}
export interface QueryGrantsByGranterRequestAminoMsg {
  type: "/sparkdream.session.v1.QueryGrantsByGranterRequest";
  value: QueryGrantsByGranterRequestAmino;
}
/**
 * @name QueryGrantsByGranterResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranterResponse
 */
export interface QueryGrantsByGranterResponse {
  grants: Grant[];
  pagination?: PageResponse;
}
export interface QueryGrantsByGranterResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranterResponse";
  value: Uint8Array;
}
/**
 * @name QueryGrantsByGranterResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranterResponse
 */
export interface QueryGrantsByGranterResponseAmino {
  grants?: GrantAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGrantsByGranterResponseAminoMsg {
  type: "/sparkdream.session.v1.QueryGrantsByGranterResponse";
  value: QueryGrantsByGranterResponseAmino;
}
/**
 * @name QueryGrantsByGranteeRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranteeRequest
 */
export interface QueryGrantsByGranteeRequest {
  grantee: string;
  type: GrantType;
  pagination?: PageRequest;
}
export interface QueryGrantsByGranteeRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranteeRequest";
  value: Uint8Array;
}
/**
 * @name QueryGrantsByGranteeRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranteeRequest
 */
export interface QueryGrantsByGranteeRequestAmino {
  grantee?: string;
  type?: GrantType;
  pagination?: PageRequestAmino;
}
export interface QueryGrantsByGranteeRequestAminoMsg {
  type: "/sparkdream.session.v1.QueryGrantsByGranteeRequest";
  value: QueryGrantsByGranteeRequestAmino;
}
/**
 * @name QueryGrantsByGranteeResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranteeResponse
 */
export interface QueryGrantsByGranteeResponse {
  grants: Grant[];
  pagination?: PageResponse;
}
export interface QueryGrantsByGranteeResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranteeResponse";
  value: Uint8Array;
}
/**
 * @name QueryGrantsByGranteeResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranteeResponse
 */
export interface QueryGrantsByGranteeResponseAmino {
  grants?: GrantAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGrantsByGranteeResponseAminoMsg {
  type: "/sparkdream.session.v1.QueryGrantsByGranteeResponse";
  value: QueryGrantsByGranteeResponseAmino;
}
/**
 * @name QueryAllowedMsgTypesRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryAllowedMsgTypesRequest
 */
export interface QueryAllowedMsgTypesRequest {}
export interface QueryAllowedMsgTypesRequestProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryAllowedMsgTypesRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllowedMsgTypesRequestAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryAllowedMsgTypesRequest
 */
export interface QueryAllowedMsgTypesRequestAmino {}
export interface QueryAllowedMsgTypesRequestAminoMsg {
  type: "/sparkdream.session.v1.QueryAllowedMsgTypesRequest";
  value: QueryAllowedMsgTypesRequestAmino;
}
/**
 * @name QueryAllowedMsgTypesResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryAllowedMsgTypesResponse
 */
export interface QueryAllowedMsgTypesResponse {
  maxAllowedMsgTypes: string[];
  allowedMsgTypes: string[];
}
export interface QueryAllowedMsgTypesResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.QueryAllowedMsgTypesResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllowedMsgTypesResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryAllowedMsgTypesResponse
 */
export interface QueryAllowedMsgTypesResponseAmino {
  max_allowed_msg_types?: string[];
  allowed_msg_types?: string[];
}
export interface QueryAllowedMsgTypesResponseAminoMsg {
  type: "/sparkdream.session.v1.QueryAllowedMsgTypesResponse";
  value: QueryAllowedMsgTypesResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * @name QueryParamsRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.session.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.session.v1.QueryParamsRequest",
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
 * @name QueryParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.session.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.session.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionRequest(): QuerySessionRequest {
  return {
    granter: "",
    grantee: ""
  };
}
/**
 * @name QuerySessionRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionRequest
 */
export const QuerySessionRequest = {
  typeUrl: "/sparkdream.session.v1.QuerySessionRequest",
  encode(message: QuerySessionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySessionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySessionRequest>): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: QuerySessionRequestAmino): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: QuerySessionRequest): QuerySessionRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: QuerySessionRequestAminoMsg): QuerySessionRequest {
    return QuerySessionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionRequestProtoMsg): QuerySessionRequest {
    return QuerySessionRequest.decode(message.value);
  },
  toProto(message: QuerySessionRequest): Uint8Array {
    return QuerySessionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionRequest): QuerySessionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QuerySessionRequest",
      value: QuerySessionRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionResponse(): QuerySessionResponse {
  return {
    session: Session.fromPartial({})
  };
}
/**
 * @name QuerySessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionResponse
 */
export const QuerySessionResponse = {
  typeUrl: "/sparkdream.session.v1.QuerySessionResponse",
  encode(message: QuerySessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.session = Session.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySessionResponse>): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    message.session = object.session !== undefined && object.session !== null ? Session.fromPartial(object.session) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionResponseAmino): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromAmino(object.session);
    }
    return message;
  },
  toAmino(message: QuerySessionResponse): QuerySessionResponseAmino {
    const obj: any = {};
    obj.session = message.session ? Session.toAmino(message.session) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionResponseAminoMsg): QuerySessionResponse {
    return QuerySessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionResponseProtoMsg): QuerySessionResponse {
    return QuerySessionResponse.decode(message.value);
  },
  toProto(message: QuerySessionResponse): Uint8Array {
    return QuerySessionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionResponse): QuerySessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QuerySessionResponse",
      value: QuerySessionResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsByGranterRequest(): QuerySessionsByGranterRequest {
  return {
    granter: "",
    pagination: undefined
  };
}
/**
 * @name QuerySessionsByGranterRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranterRequest
 */
export const QuerySessionsByGranterRequest = {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranterRequest",
  encode(message: QuerySessionsByGranterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySessionsByGranterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsByGranterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
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
  fromPartial(object: DeepPartial<QuerySessionsByGranterRequest>): QuerySessionsByGranterRequest {
    const message = createBaseQuerySessionsByGranterRequest();
    message.granter = object.granter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsByGranterRequestAmino): QuerySessionsByGranterRequest {
    const message = createBaseQuerySessionsByGranterRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsByGranterRequest): QuerySessionsByGranterRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsByGranterRequestAminoMsg): QuerySessionsByGranterRequest {
    return QuerySessionsByGranterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsByGranterRequestProtoMsg): QuerySessionsByGranterRequest {
    return QuerySessionsByGranterRequest.decode(message.value);
  },
  toProto(message: QuerySessionsByGranterRequest): Uint8Array {
    return QuerySessionsByGranterRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsByGranterRequest): QuerySessionsByGranterRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QuerySessionsByGranterRequest",
      value: QuerySessionsByGranterRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsByGranterResponse(): QuerySessionsByGranterResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
/**
 * @name QuerySessionsByGranterResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranterResponse
 */
export const QuerySessionsByGranterResponse = {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranterResponse",
  encode(message: QuerySessionsByGranterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySessionsByGranterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(Session.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QuerySessionsByGranterResponse>): QuerySessionsByGranterResponse {
    const message = createBaseQuerySessionsByGranterResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsByGranterResponseAmino): QuerySessionsByGranterResponse {
    const message = createBaseQuerySessionsByGranterResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsByGranterResponse): QuerySessionsByGranterResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsByGranterResponseAminoMsg): QuerySessionsByGranterResponse {
    return QuerySessionsByGranterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsByGranterResponseProtoMsg): QuerySessionsByGranterResponse {
    return QuerySessionsByGranterResponse.decode(message.value);
  },
  toProto(message: QuerySessionsByGranterResponse): Uint8Array {
    return QuerySessionsByGranterResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsByGranterResponse): QuerySessionsByGranterResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QuerySessionsByGranterResponse",
      value: QuerySessionsByGranterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsByGranteeRequest(): QuerySessionsByGranteeRequest {
  return {
    grantee: "",
    pagination: undefined
  };
}
/**
 * @name QuerySessionsByGranteeRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranteeRequest
 */
export const QuerySessionsByGranteeRequest = {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranteeRequest",
  encode(message: QuerySessionsByGranteeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySessionsByGranteeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsByGranteeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
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
  fromPartial(object: DeepPartial<QuerySessionsByGranteeRequest>): QuerySessionsByGranteeRequest {
    const message = createBaseQuerySessionsByGranteeRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsByGranteeRequestAmino): QuerySessionsByGranteeRequest {
    const message = createBaseQuerySessionsByGranteeRequest();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsByGranteeRequest): QuerySessionsByGranteeRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsByGranteeRequestAminoMsg): QuerySessionsByGranteeRequest {
    return QuerySessionsByGranteeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsByGranteeRequestProtoMsg): QuerySessionsByGranteeRequest {
    return QuerySessionsByGranteeRequest.decode(message.value);
  },
  toProto(message: QuerySessionsByGranteeRequest): Uint8Array {
    return QuerySessionsByGranteeRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsByGranteeRequest): QuerySessionsByGranteeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QuerySessionsByGranteeRequest",
      value: QuerySessionsByGranteeRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySessionsByGranteeResponse(): QuerySessionsByGranteeResponse {
  return {
    sessions: [],
    pagination: undefined
  };
}
/**
 * @name QuerySessionsByGranteeResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QuerySessionsByGranteeResponse
 */
export const QuerySessionsByGranteeResponse = {
  typeUrl: "/sparkdream.session.v1.QuerySessionsByGranteeResponse",
  encode(message: QuerySessionsByGranteeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySessionsByGranteeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionsByGranteeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(Session.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QuerySessionsByGranteeResponse>): QuerySessionsByGranteeResponse {
    const message = createBaseQuerySessionsByGranteeResponse();
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySessionsByGranteeResponseAmino): QuerySessionsByGranteeResponse {
    const message = createBaseQuerySessionsByGranteeResponse();
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySessionsByGranteeResponse): QuerySessionsByGranteeResponseAmino {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySessionsByGranteeResponseAminoMsg): QuerySessionsByGranteeResponse {
    return QuerySessionsByGranteeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySessionsByGranteeResponseProtoMsg): QuerySessionsByGranteeResponse {
    return QuerySessionsByGranteeResponse.decode(message.value);
  },
  toProto(message: QuerySessionsByGranteeResponse): Uint8Array {
    return QuerySessionsByGranteeResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySessionsByGranteeResponse): QuerySessionsByGranteeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QuerySessionsByGranteeResponse",
      value: QuerySessionsByGranteeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGrantRequest(): QueryGrantRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * @name QueryGrantRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantRequest
 */
export const QueryGrantRequest = {
  typeUrl: "/sparkdream.session.v1.QueryGrantRequest",
  encode(message: QueryGrantRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantRequest();
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
  fromPartial(object: DeepPartial<QueryGrantRequest>): QueryGrantRequest {
    const message = createBaseQueryGrantRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGrantRequestAmino): QueryGrantRequest {
    const message = createBaseQueryGrantRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGrantRequest): QueryGrantRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantRequestAminoMsg): QueryGrantRequest {
    return QueryGrantRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantRequestProtoMsg): QueryGrantRequest {
    return QueryGrantRequest.decode(message.value);
  },
  toProto(message: QueryGrantRequest): Uint8Array {
    return QueryGrantRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantRequest): QueryGrantRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryGrantRequest",
      value: QueryGrantRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGrantResponse(): QueryGrantResponse {
  return {
    grant: Grant.fromPartial({})
  };
}
/**
 * @name QueryGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantResponse
 */
export const QueryGrantResponse = {
  typeUrl: "/sparkdream.session.v1.QueryGrantResponse",
  encode(message: QueryGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantResponse>): QueryGrantResponse {
    const message = createBaseQueryGrantResponse();
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantResponseAmino): QueryGrantResponse {
    const message = createBaseQueryGrantResponse();
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message: QueryGrantResponse): QueryGrantResponseAmino {
    const obj: any = {};
    obj.grant = message.grant ? Grant.toAmino(message.grant) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantResponseAminoMsg): QueryGrantResponse {
    return QueryGrantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantResponseProtoMsg): QueryGrantResponse {
    return QueryGrantResponse.decode(message.value);
  },
  toProto(message: QueryGrantResponse): Uint8Array {
    return QueryGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantResponse): QueryGrantResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryGrantResponse",
      value: QueryGrantResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsByGranterRequest(): QueryGrantsByGranterRequest {
  return {
    granter: "",
    type: 0,
    pagination: undefined
  };
}
/**
 * @name QueryGrantsByGranterRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranterRequest
 */
export const QueryGrantsByGranterRequest = {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranterRequest",
  encode(message: QueryGrantsByGranterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsByGranterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsByGranterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantsByGranterRequest>): QueryGrantsByGranterRequest {
    const message = createBaseQueryGrantsByGranterRequest();
    message.granter = object.granter ?? "";
    message.type = object.type ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsByGranterRequestAmino): QueryGrantsByGranterRequest {
    const message = createBaseQueryGrantsByGranterRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsByGranterRequest): QueryGrantsByGranterRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsByGranterRequestAminoMsg): QueryGrantsByGranterRequest {
    return QueryGrantsByGranterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantsByGranterRequestProtoMsg): QueryGrantsByGranterRequest {
    return QueryGrantsByGranterRequest.decode(message.value);
  },
  toProto(message: QueryGrantsByGranterRequest): Uint8Array {
    return QueryGrantsByGranterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsByGranterRequest): QueryGrantsByGranterRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryGrantsByGranterRequest",
      value: QueryGrantsByGranterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsByGranterResponse(): QueryGrantsByGranterResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
/**
 * @name QueryGrantsByGranterResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranterResponse
 */
export const QueryGrantsByGranterResponse = {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranterResponse",
  encode(message: QueryGrantsByGranterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsByGranterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryGrantsByGranterResponse>): QueryGrantsByGranterResponse {
    const message = createBaseQueryGrantsByGranterResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsByGranterResponseAmino): QueryGrantsByGranterResponse {
    const message = createBaseQueryGrantsByGranterResponse();
    message.grants = object.grants?.map(e => Grant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsByGranterResponse): QueryGrantsByGranterResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsByGranterResponseAminoMsg): QueryGrantsByGranterResponse {
    return QueryGrantsByGranterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantsByGranterResponseProtoMsg): QueryGrantsByGranterResponse {
    return QueryGrantsByGranterResponse.decode(message.value);
  },
  toProto(message: QueryGrantsByGranterResponse): Uint8Array {
    return QueryGrantsByGranterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsByGranterResponse): QueryGrantsByGranterResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryGrantsByGranterResponse",
      value: QueryGrantsByGranterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsByGranteeRequest(): QueryGrantsByGranteeRequest {
  return {
    grantee: "",
    type: 0,
    pagination: undefined
  };
}
/**
 * @name QueryGrantsByGranteeRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranteeRequest
 */
export const QueryGrantsByGranteeRequest = {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranteeRequest",
  encode(message: QueryGrantsByGranteeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsByGranteeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsByGranteeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantsByGranteeRequest>): QueryGrantsByGranteeRequest {
    const message = createBaseQueryGrantsByGranteeRequest();
    message.grantee = object.grantee ?? "";
    message.type = object.type ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsByGranteeRequestAmino): QueryGrantsByGranteeRequest {
    const message = createBaseQueryGrantsByGranteeRequest();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsByGranteeRequest): QueryGrantsByGranteeRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsByGranteeRequestAminoMsg): QueryGrantsByGranteeRequest {
    return QueryGrantsByGranteeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantsByGranteeRequestProtoMsg): QueryGrantsByGranteeRequest {
    return QueryGrantsByGranteeRequest.decode(message.value);
  },
  toProto(message: QueryGrantsByGranteeRequest): Uint8Array {
    return QueryGrantsByGranteeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsByGranteeRequest): QueryGrantsByGranteeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryGrantsByGranteeRequest",
      value: QueryGrantsByGranteeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsByGranteeResponse(): QueryGrantsByGranteeResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
/**
 * @name QueryGrantsByGranteeResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryGrantsByGranteeResponse
 */
export const QueryGrantsByGranteeResponse = {
  typeUrl: "/sparkdream.session.v1.QueryGrantsByGranteeResponse",
  encode(message: QueryGrantsByGranteeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsByGranteeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsByGranteeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryGrantsByGranteeResponse>): QueryGrantsByGranteeResponse {
    const message = createBaseQueryGrantsByGranteeResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsByGranteeResponseAmino): QueryGrantsByGranteeResponse {
    const message = createBaseQueryGrantsByGranteeResponse();
    message.grants = object.grants?.map(e => Grant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsByGranteeResponse): QueryGrantsByGranteeResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsByGranteeResponseAminoMsg): QueryGrantsByGranteeResponse {
    return QueryGrantsByGranteeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantsByGranteeResponseProtoMsg): QueryGrantsByGranteeResponse {
    return QueryGrantsByGranteeResponse.decode(message.value);
  },
  toProto(message: QueryGrantsByGranteeResponse): Uint8Array {
    return QueryGrantsByGranteeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsByGranteeResponse): QueryGrantsByGranteeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryGrantsByGranteeResponse",
      value: QueryGrantsByGranteeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedMsgTypesRequest(): QueryAllowedMsgTypesRequest {
  return {};
}
/**
 * @name QueryAllowedMsgTypesRequest
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryAllowedMsgTypesRequest
 */
export const QueryAllowedMsgTypesRequest = {
  typeUrl: "/sparkdream.session.v1.QueryAllowedMsgTypesRequest",
  encode(_: QueryAllowedMsgTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowedMsgTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedMsgTypesRequest();
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
  fromPartial(_: DeepPartial<QueryAllowedMsgTypesRequest>): QueryAllowedMsgTypesRequest {
    const message = createBaseQueryAllowedMsgTypesRequest();
    return message;
  },
  fromAmino(_: QueryAllowedMsgTypesRequestAmino): QueryAllowedMsgTypesRequest {
    const message = createBaseQueryAllowedMsgTypesRequest();
    return message;
  },
  toAmino(_: QueryAllowedMsgTypesRequest): QueryAllowedMsgTypesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllowedMsgTypesRequestAminoMsg): QueryAllowedMsgTypesRequest {
    return QueryAllowedMsgTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedMsgTypesRequestProtoMsg): QueryAllowedMsgTypesRequest {
    return QueryAllowedMsgTypesRequest.decode(message.value);
  },
  toProto(message: QueryAllowedMsgTypesRequest): Uint8Array {
    return QueryAllowedMsgTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedMsgTypesRequest): QueryAllowedMsgTypesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryAllowedMsgTypesRequest",
      value: QueryAllowedMsgTypesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedMsgTypesResponse(): QueryAllowedMsgTypesResponse {
  return {
    maxAllowedMsgTypes: [],
    allowedMsgTypes: []
  };
}
/**
 * @name QueryAllowedMsgTypesResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.QueryAllowedMsgTypesResponse
 */
export const QueryAllowedMsgTypesResponse = {
  typeUrl: "/sparkdream.session.v1.QueryAllowedMsgTypesResponse",
  encode(message: QueryAllowedMsgTypesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.maxAllowedMsgTypes) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.allowedMsgTypes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowedMsgTypesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedMsgTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAllowedMsgTypes.push(reader.string());
          break;
        case 2:
          message.allowedMsgTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllowedMsgTypesResponse>): QueryAllowedMsgTypesResponse {
    const message = createBaseQueryAllowedMsgTypesResponse();
    message.maxAllowedMsgTypes = object.maxAllowedMsgTypes?.map(e => e) || [];
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllowedMsgTypesResponseAmino): QueryAllowedMsgTypesResponse {
    const message = createBaseQueryAllowedMsgTypesResponse();
    message.maxAllowedMsgTypes = object.max_allowed_msg_types?.map(e => e) || [];
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllowedMsgTypesResponse): QueryAllowedMsgTypesResponseAmino {
    const obj: any = {};
    if (message.maxAllowedMsgTypes) {
      obj.max_allowed_msg_types = message.maxAllowedMsgTypes.map(e => e);
    } else {
      obj.max_allowed_msg_types = message.maxAllowedMsgTypes;
    }
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllowedMsgTypesResponseAminoMsg): QueryAllowedMsgTypesResponse {
    return QueryAllowedMsgTypesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedMsgTypesResponseProtoMsg): QueryAllowedMsgTypesResponse {
    return QueryAllowedMsgTypesResponse.decode(message.value);
  },
  toProto(message: QueryAllowedMsgTypesResponse): Uint8Array {
    return QueryAllowedMsgTypesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedMsgTypesResponse): QueryAllowedMsgTypesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.QueryAllowedMsgTypesResponse",
      value: QueryAllowedMsgTypesResponse.encode(message).finish()
    };
  }
};