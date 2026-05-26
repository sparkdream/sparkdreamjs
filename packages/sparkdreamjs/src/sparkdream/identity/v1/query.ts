//@ts-nocheck
import { ChainIdentity, ChainIdentityAmino } from "./chain_identity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * @name QueryChainIdentityRequest
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryChainIdentityRequest
 */
export interface QueryChainIdentityRequest {}
export interface QueryChainIdentityRequestProtoMsg {
  typeUrl: "/sparkdream.identity.v1.QueryChainIdentityRequest";
  value: Uint8Array;
}
/**
 * @name QueryChainIdentityRequestAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryChainIdentityRequest
 */
export interface QueryChainIdentityRequestAmino {}
export interface QueryChainIdentityRequestAminoMsg {
  type: "/sparkdream.identity.v1.QueryChainIdentityRequest";
  value: QueryChainIdentityRequestAmino;
}
/**
 * @name QueryChainIdentityResponse
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryChainIdentityResponse
 */
export interface QueryChainIdentityResponse {
  identity: ChainIdentity;
}
export interface QueryChainIdentityResponseProtoMsg {
  typeUrl: "/sparkdream.identity.v1.QueryChainIdentityResponse";
  value: Uint8Array;
}
/**
 * @name QueryChainIdentityResponseAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryChainIdentityResponse
 */
export interface QueryChainIdentityResponseAmino {
  identity: ChainIdentityAmino;
}
export interface QueryChainIdentityResponseAminoMsg {
  type: "/sparkdream.identity.v1.QueryChainIdentityResponse";
  value: QueryChainIdentityResponseAmino;
}
/**
 * @name QueryBondDenomRequest
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryBondDenomRequest
 */
export interface QueryBondDenomRequest {}
export interface QueryBondDenomRequestProtoMsg {
  typeUrl: "/sparkdream.identity.v1.QueryBondDenomRequest";
  value: Uint8Array;
}
/**
 * @name QueryBondDenomRequestAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryBondDenomRequest
 */
export interface QueryBondDenomRequestAmino {}
export interface QueryBondDenomRequestAminoMsg {
  type: "/sparkdream.identity.v1.QueryBondDenomRequest";
  value: QueryBondDenomRequestAmino;
}
/**
 * @name QueryBondDenomResponse
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryBondDenomResponse
 */
export interface QueryBondDenomResponse {
  denom: string;
}
export interface QueryBondDenomResponseProtoMsg {
  typeUrl: "/sparkdream.identity.v1.QueryBondDenomResponse";
  value: Uint8Array;
}
/**
 * @name QueryBondDenomResponseAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryBondDenomResponse
 */
export interface QueryBondDenomResponseAmino {
  denom?: string;
}
export interface QueryBondDenomResponseAminoMsg {
  type: "/sparkdream.identity.v1.QueryBondDenomResponse";
  value: QueryBondDenomResponseAmino;
}
/**
 * @name QueryDreamDenomRequest
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryDreamDenomRequest
 */
export interface QueryDreamDenomRequest {}
export interface QueryDreamDenomRequestProtoMsg {
  typeUrl: "/sparkdream.identity.v1.QueryDreamDenomRequest";
  value: Uint8Array;
}
/**
 * @name QueryDreamDenomRequestAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryDreamDenomRequest
 */
export interface QueryDreamDenomRequestAmino {}
export interface QueryDreamDenomRequestAminoMsg {
  type: "/sparkdream.identity.v1.QueryDreamDenomRequest";
  value: QueryDreamDenomRequestAmino;
}
/**
 * @name QueryDreamDenomResponse
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryDreamDenomResponse
 */
export interface QueryDreamDenomResponse {
  denom: string;
}
export interface QueryDreamDenomResponseProtoMsg {
  typeUrl: "/sparkdream.identity.v1.QueryDreamDenomResponse";
  value: Uint8Array;
}
/**
 * @name QueryDreamDenomResponseAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryDreamDenomResponse
 */
export interface QueryDreamDenomResponseAmino {
  denom?: string;
}
export interface QueryDreamDenomResponseAminoMsg {
  type: "/sparkdream.identity.v1.QueryDreamDenomResponse";
  value: QueryDreamDenomResponseAmino;
}
function createBaseQueryChainIdentityRequest(): QueryChainIdentityRequest {
  return {};
}
/**
 * @name QueryChainIdentityRequest
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryChainIdentityRequest
 */
export const QueryChainIdentityRequest = {
  typeUrl: "/sparkdream.identity.v1.QueryChainIdentityRequest",
  encode(_: QueryChainIdentityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChainIdentityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainIdentityRequest();
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
  fromPartial(_: DeepPartial<QueryChainIdentityRequest>): QueryChainIdentityRequest {
    const message = createBaseQueryChainIdentityRequest();
    return message;
  },
  fromAmino(_: QueryChainIdentityRequestAmino): QueryChainIdentityRequest {
    const message = createBaseQueryChainIdentityRequest();
    return message;
  },
  toAmino(_: QueryChainIdentityRequest): QueryChainIdentityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryChainIdentityRequestAminoMsg): QueryChainIdentityRequest {
    return QueryChainIdentityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainIdentityRequestProtoMsg): QueryChainIdentityRequest {
    return QueryChainIdentityRequest.decode(message.value);
  },
  toProto(message: QueryChainIdentityRequest): Uint8Array {
    return QueryChainIdentityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChainIdentityRequest): QueryChainIdentityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.QueryChainIdentityRequest",
      value: QueryChainIdentityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChainIdentityResponse(): QueryChainIdentityResponse {
  return {
    identity: ChainIdentity.fromPartial({})
  };
}
/**
 * @name QueryChainIdentityResponse
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryChainIdentityResponse
 */
export const QueryChainIdentityResponse = {
  typeUrl: "/sparkdream.identity.v1.QueryChainIdentityResponse",
  encode(message: QueryChainIdentityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identity !== undefined) {
      ChainIdentity.encode(message.identity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChainIdentityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identity = ChainIdentity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChainIdentityResponse>): QueryChainIdentityResponse {
    const message = createBaseQueryChainIdentityResponse();
    message.identity = object.identity !== undefined && object.identity !== null ? ChainIdentity.fromPartial(object.identity) : undefined;
    return message;
  },
  fromAmino(object: QueryChainIdentityResponseAmino): QueryChainIdentityResponse {
    const message = createBaseQueryChainIdentityResponse();
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = ChainIdentity.fromAmino(object.identity);
    }
    return message;
  },
  toAmino(message: QueryChainIdentityResponse): QueryChainIdentityResponseAmino {
    const obj: any = {};
    obj.identity = message.identity ? ChainIdentity.toAmino(message.identity) : ChainIdentity.toAmino(ChainIdentity.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryChainIdentityResponseAminoMsg): QueryChainIdentityResponse {
    return QueryChainIdentityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainIdentityResponseProtoMsg): QueryChainIdentityResponse {
    return QueryChainIdentityResponse.decode(message.value);
  },
  toProto(message: QueryChainIdentityResponse): Uint8Array {
    return QueryChainIdentityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChainIdentityResponse): QueryChainIdentityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.QueryChainIdentityResponse",
      value: QueryChainIdentityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBondDenomRequest(): QueryBondDenomRequest {
  return {};
}
/**
 * @name QueryBondDenomRequest
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryBondDenomRequest
 */
export const QueryBondDenomRequest = {
  typeUrl: "/sparkdream.identity.v1.QueryBondDenomRequest",
  encode(_: QueryBondDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondDenomRequest();
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
  fromPartial(_: DeepPartial<QueryBondDenomRequest>): QueryBondDenomRequest {
    const message = createBaseQueryBondDenomRequest();
    return message;
  },
  fromAmino(_: QueryBondDenomRequestAmino): QueryBondDenomRequest {
    const message = createBaseQueryBondDenomRequest();
    return message;
  },
  toAmino(_: QueryBondDenomRequest): QueryBondDenomRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBondDenomRequestAminoMsg): QueryBondDenomRequest {
    return QueryBondDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondDenomRequestProtoMsg): QueryBondDenomRequest {
    return QueryBondDenomRequest.decode(message.value);
  },
  toProto(message: QueryBondDenomRequest): Uint8Array {
    return QueryBondDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBondDenomRequest): QueryBondDenomRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.QueryBondDenomRequest",
      value: QueryBondDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBondDenomResponse(): QueryBondDenomResponse {
  return {
    denom: ""
  };
}
/**
 * @name QueryBondDenomResponse
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryBondDenomResponse
 */
export const QueryBondDenomResponse = {
  typeUrl: "/sparkdream.identity.v1.QueryBondDenomResponse",
  encode(message: QueryBondDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBondDenomResponse>): QueryBondDenomResponse {
    const message = createBaseQueryBondDenomResponse();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryBondDenomResponseAmino): QueryBondDenomResponse {
    const message = createBaseQueryBondDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryBondDenomResponse): QueryBondDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBondDenomResponseAminoMsg): QueryBondDenomResponse {
    return QueryBondDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondDenomResponseProtoMsg): QueryBondDenomResponse {
    return QueryBondDenomResponse.decode(message.value);
  },
  toProto(message: QueryBondDenomResponse): Uint8Array {
    return QueryBondDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBondDenomResponse): QueryBondDenomResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.QueryBondDenomResponse",
      value: QueryBondDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDreamDenomRequest(): QueryDreamDenomRequest {
  return {};
}
/**
 * @name QueryDreamDenomRequest
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryDreamDenomRequest
 */
export const QueryDreamDenomRequest = {
  typeUrl: "/sparkdream.identity.v1.QueryDreamDenomRequest",
  encode(_: QueryDreamDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDreamDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDreamDenomRequest();
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
  fromPartial(_: DeepPartial<QueryDreamDenomRequest>): QueryDreamDenomRequest {
    const message = createBaseQueryDreamDenomRequest();
    return message;
  },
  fromAmino(_: QueryDreamDenomRequestAmino): QueryDreamDenomRequest {
    const message = createBaseQueryDreamDenomRequest();
    return message;
  },
  toAmino(_: QueryDreamDenomRequest): QueryDreamDenomRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDreamDenomRequestAminoMsg): QueryDreamDenomRequest {
    return QueryDreamDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDreamDenomRequestProtoMsg): QueryDreamDenomRequest {
    return QueryDreamDenomRequest.decode(message.value);
  },
  toProto(message: QueryDreamDenomRequest): Uint8Array {
    return QueryDreamDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDreamDenomRequest): QueryDreamDenomRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.QueryDreamDenomRequest",
      value: QueryDreamDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDreamDenomResponse(): QueryDreamDenomResponse {
  return {
    denom: ""
  };
}
/**
 * @name QueryDreamDenomResponse
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.QueryDreamDenomResponse
 */
export const QueryDreamDenomResponse = {
  typeUrl: "/sparkdream.identity.v1.QueryDreamDenomResponse",
  encode(message: QueryDreamDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDreamDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDreamDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDreamDenomResponse>): QueryDreamDenomResponse {
    const message = createBaseQueryDreamDenomResponse();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDreamDenomResponseAmino): QueryDreamDenomResponse {
    const message = createBaseQueryDreamDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDreamDenomResponse): QueryDreamDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDreamDenomResponseAminoMsg): QueryDreamDenomResponse {
    return QueryDreamDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDreamDenomResponseProtoMsg): QueryDreamDenomResponse {
    return QueryDreamDenomResponse.decode(message.value);
  },
  toProto(message: QueryDreamDenomResponse): Uint8Array {
    return QueryDreamDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDreamDenomResponse): QueryDreamDenomResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.QueryDreamDenomResponse",
      value: QueryDreamDenomResponse.encode(message).finish()
    };
  }
};