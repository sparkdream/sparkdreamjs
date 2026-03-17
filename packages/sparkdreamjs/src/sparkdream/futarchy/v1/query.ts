//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Market, MarketAmino } from "./market";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetMarketRequest defines the QueryGetMarketRequest message.
 * @name QueryGetMarketRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketRequest
 */
export interface QueryGetMarketRequest {
  index: bigint;
}
export interface QueryGetMarketRequestProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketRequest";
  value: Uint8Array;
}
/**
 * QueryGetMarketRequest defines the QueryGetMarketRequest message.
 * @name QueryGetMarketRequestAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketRequest
 */
export interface QueryGetMarketRequestAmino {
  index?: string;
}
export interface QueryGetMarketRequestAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryGetMarketRequest";
  value: QueryGetMarketRequestAmino;
}
/**
 * QueryGetMarketResponse defines the QueryGetMarketResponse message.
 * @name QueryGetMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketResponse
 */
export interface QueryGetMarketResponse {
  market: Market;
}
export interface QueryGetMarketResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketResponse";
  value: Uint8Array;
}
/**
 * QueryGetMarketResponse defines the QueryGetMarketResponse message.
 * @name QueryGetMarketResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketResponse
 */
export interface QueryGetMarketResponseAmino {
  market?: MarketAmino;
}
export interface QueryGetMarketResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryGetMarketResponse";
  value: QueryGetMarketResponseAmino;
}
/**
 * QueryAllMarketRequest defines the QueryAllMarketRequest message.
 * @name QueryAllMarketRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryAllMarketRequest
 */
export interface QueryAllMarketRequest {
  pagination?: PageRequest;
}
export interface QueryAllMarketRequestProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryAllMarketRequest";
  value: Uint8Array;
}
/**
 * QueryAllMarketRequest defines the QueryAllMarketRequest message.
 * @name QueryAllMarketRequestAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryAllMarketRequest
 */
export interface QueryAllMarketRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMarketRequestAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryAllMarketRequest";
  value: QueryAllMarketRequestAmino;
}
/**
 * QueryAllMarketResponse defines the QueryAllMarketResponse message.
 * @name QueryAllMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryAllMarketResponse
 */
export interface QueryAllMarketResponse {
  market: Market[];
  pagination?: PageResponse;
}
export interface QueryAllMarketResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryAllMarketResponse";
  value: Uint8Array;
}
/**
 * QueryAllMarketResponse defines the QueryAllMarketResponse message.
 * @name QueryAllMarketResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryAllMarketResponse
 */
export interface QueryAllMarketResponseAmino {
  market?: MarketAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMarketResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryAllMarketResponse";
  value: QueryAllMarketResponseAmino;
}
/**
 * QueryGetMarketPriceRequest defines the request for market price query.
 * @name QueryGetMarketPriceRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketPriceRequest
 */
export interface QueryGetMarketPriceRequest {
  marketId: bigint;
  isYes: boolean;
  amount: string;
}
export interface QueryGetMarketPriceRequestProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketPriceRequest";
  value: Uint8Array;
}
/**
 * QueryGetMarketPriceRequest defines the request for market price query.
 * @name QueryGetMarketPriceRequestAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketPriceRequest
 */
export interface QueryGetMarketPriceRequestAmino {
  market_id?: string;
  is_yes?: boolean;
  amount?: string;
}
export interface QueryGetMarketPriceRequestAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryGetMarketPriceRequest";
  value: QueryGetMarketPriceRequestAmino;
}
/**
 * QueryGetMarketPriceResponse defines the response for market price query.
 * @name QueryGetMarketPriceResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketPriceResponse
 */
export interface QueryGetMarketPriceResponse {
  /**
   * Price per share in market denom
   */
  price: string;
  /**
   * Shares received for the given amount
   */
  sharesOut: string;
}
export interface QueryGetMarketPriceResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketPriceResponse";
  value: Uint8Array;
}
/**
 * QueryGetMarketPriceResponse defines the response for market price query.
 * @name QueryGetMarketPriceResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketPriceResponse
 */
export interface QueryGetMarketPriceResponseAmino {
  /**
   * Price per share in market denom
   */
  price?: string;
  /**
   * Shares received for the given amount
   */
  shares_out?: string;
}
export interface QueryGetMarketPriceResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.QueryGetMarketPriceResponse";
  value: QueryGetMarketPriceResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.futarchy.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.futarchy.v1.QueryParamsRequest",
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
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.futarchy.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.futarchy.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMarketRequest(): QueryGetMarketRequest {
  return {
    index: BigInt(0)
  };
}
/**
 * QueryGetMarketRequest defines the QueryGetMarketRequest message.
 * @name QueryGetMarketRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketRequest
 */
export const QueryGetMarketRequest = {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketRequest",
  encode(message: QueryGetMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest {
    const message = createBaseQueryGetMarketRequest();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetMarketRequestAmino): QueryGetMarketRequest {
    const message = createBaseQueryGetMarketRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: QueryGetMarketRequest): QueryGetMarketRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMarketRequestAminoMsg): QueryGetMarketRequest {
    return QueryGetMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMarketRequestProtoMsg): QueryGetMarketRequest {
    return QueryGetMarketRequest.decode(message.value);
  },
  toProto(message: QueryGetMarketRequest): Uint8Array {
    return QueryGetMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMarketRequest): QueryGetMarketRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketRequest",
      value: QueryGetMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMarketResponse(): QueryGetMarketResponse {
  return {
    market: Market.fromPartial({})
  };
}
/**
 * QueryGetMarketResponse defines the QueryGetMarketResponse message.
 * @name QueryGetMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketResponse
 */
export const QueryGetMarketResponse = {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketResponse",
  encode(message: QueryGetMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse {
    const message = createBaseQueryGetMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? Market.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMarketResponseAmino): QueryGetMarketResponse {
    const message = createBaseQueryGetMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = Market.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QueryGetMarketResponse): QueryGetMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? Market.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMarketResponseAminoMsg): QueryGetMarketResponse {
    return QueryGetMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMarketResponseProtoMsg): QueryGetMarketResponse {
    return QueryGetMarketResponse.decode(message.value);
  },
  toProto(message: QueryGetMarketResponse): Uint8Array {
    return QueryGetMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMarketResponse): QueryGetMarketResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketResponse",
      value: QueryGetMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMarketRequest(): QueryAllMarketRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMarketRequest defines the QueryAllMarketRequest message.
 * @name QueryAllMarketRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryAllMarketRequest
 */
export const QueryAllMarketRequest = {
  typeUrl: "/sparkdream.futarchy.v1.QueryAllMarketRequest",
  encode(message: QueryAllMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketRequest();
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
  fromPartial(object: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest {
    const message = createBaseQueryAllMarketRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMarketRequestAmino): QueryAllMarketRequest {
    const message = createBaseQueryAllMarketRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMarketRequest): QueryAllMarketRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMarketRequestAminoMsg): QueryAllMarketRequest {
    return QueryAllMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMarketRequestProtoMsg): QueryAllMarketRequest {
    return QueryAllMarketRequest.decode(message.value);
  },
  toProto(message: QueryAllMarketRequest): Uint8Array {
    return QueryAllMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMarketRequest): QueryAllMarketRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.QueryAllMarketRequest",
      value: QueryAllMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMarketResponse(): QueryAllMarketResponse {
  return {
    market: [],
    pagination: undefined
  };
}
/**
 * QueryAllMarketResponse defines the QueryAllMarketResponse message.
 * @name QueryAllMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryAllMarketResponse
 */
export const QueryAllMarketResponse = {
  typeUrl: "/sparkdream.futarchy.v1.QueryAllMarketResponse",
  encode(message: QueryAllMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.market) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market.push(Market.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse {
    const message = createBaseQueryAllMarketResponse();
    message.market = object.market?.map(e => Market.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMarketResponseAmino): QueryAllMarketResponse {
    const message = createBaseQueryAllMarketResponse();
    message.market = object.market?.map(e => Market.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMarketResponse): QueryAllMarketResponseAmino {
    const obj: any = {};
    if (message.market) {
      obj.market = message.market.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.market = message.market;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMarketResponseAminoMsg): QueryAllMarketResponse {
    return QueryAllMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMarketResponseProtoMsg): QueryAllMarketResponse {
    return QueryAllMarketResponse.decode(message.value);
  },
  toProto(message: QueryAllMarketResponse): Uint8Array {
    return QueryAllMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMarketResponse): QueryAllMarketResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.QueryAllMarketResponse",
      value: QueryAllMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMarketPriceRequest(): QueryGetMarketPriceRequest {
  return {
    marketId: BigInt(0),
    isYes: false,
    amount: ""
  };
}
/**
 * QueryGetMarketPriceRequest defines the request for market price query.
 * @name QueryGetMarketPriceRequest
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketPriceRequest
 */
export const QueryGetMarketPriceRequest = {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketPriceRequest",
  encode(message: QueryGetMarketPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== BigInt(0)) {
      writer.uint32(8).uint64(message.marketId);
    }
    if (message.isYes === true) {
      writer.uint32(16).bool(message.isYes);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMarketPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.uint64();
          break;
        case 2:
          message.isYes = reader.bool();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMarketPriceRequest>): QueryGetMarketPriceRequest {
    const message = createBaseQueryGetMarketPriceRequest();
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    message.isYes = object.isYes ?? false;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryGetMarketPriceRequestAmino): QueryGetMarketPriceRequest {
    const message = createBaseQueryGetMarketPriceRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    if (object.is_yes !== undefined && object.is_yes !== null) {
      message.isYes = object.is_yes;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: QueryGetMarketPriceRequest): QueryGetMarketPriceRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    obj.is_yes = message.isYes === false ? undefined : message.isYes;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryGetMarketPriceRequestAminoMsg): QueryGetMarketPriceRequest {
    return QueryGetMarketPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMarketPriceRequestProtoMsg): QueryGetMarketPriceRequest {
    return QueryGetMarketPriceRequest.decode(message.value);
  },
  toProto(message: QueryGetMarketPriceRequest): Uint8Array {
    return QueryGetMarketPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMarketPriceRequest): QueryGetMarketPriceRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketPriceRequest",
      value: QueryGetMarketPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMarketPriceResponse(): QueryGetMarketPriceResponse {
  return {
    price: "",
    sharesOut: ""
  };
}
/**
 * QueryGetMarketPriceResponse defines the response for market price query.
 * @name QueryGetMarketPriceResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.QueryGetMarketPriceResponse
 */
export const QueryGetMarketPriceResponse = {
  typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketPriceResponse",
  encode(message: QueryGetMarketPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMarketPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMarketPriceResponse>): QueryGetMarketPriceResponse {
    const message = createBaseQueryGetMarketPriceResponse();
    message.price = object.price ?? "";
    message.sharesOut = object.sharesOut ?? "";
    return message;
  },
  fromAmino(object: QueryGetMarketPriceResponseAmino): QueryGetMarketPriceResponse {
    const message = createBaseQueryGetMarketPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.shares_out !== undefined && object.shares_out !== null) {
      message.sharesOut = object.shares_out;
    }
    return message;
  },
  toAmino(message: QueryGetMarketPriceResponse): QueryGetMarketPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
    return obj;
  },
  fromAminoMsg(object: QueryGetMarketPriceResponseAminoMsg): QueryGetMarketPriceResponse {
    return QueryGetMarketPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMarketPriceResponseProtoMsg): QueryGetMarketPriceResponse {
    return QueryGetMarketPriceResponse.decode(message.value);
  },
  toProto(message: QueryGetMarketPriceResponse): Uint8Array {
    return QueryGetMarketPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMarketPriceResponse): QueryGetMarketPriceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.QueryGetMarketPriceResponse",
      value: QueryGetMarketPriceResponse.encode(message).finish()
    };
  }
};