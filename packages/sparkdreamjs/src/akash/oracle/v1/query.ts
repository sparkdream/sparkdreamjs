//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { AggregatedPrice, AggregatedPriceAmino, PriceHealth, PriceHealthAmino } from "./prices";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/akash.oracle.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/akash.oracle.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/akash.oracle.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/akash.oracle.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryAggregatedPriceRequest is the request type for aggregated price.
 * @name QueryAggregatedPriceRequest
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryAggregatedPriceRequest
 */
export interface QueryAggregatedPriceRequest {
  /**
   * denom is the asset denomination
   */
  denom: string;
}
export interface QueryAggregatedPriceRequestProtoMsg {
  typeUrl: "/akash.oracle.v1.QueryAggregatedPriceRequest";
  value: Uint8Array;
}
/**
 * QueryAggregatedPriceRequest is the request type for aggregated price.
 * @name QueryAggregatedPriceRequestAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryAggregatedPriceRequest
 */
export interface QueryAggregatedPriceRequestAmino {
  /**
   * denom is the asset denomination
   */
  denom?: string;
}
export interface QueryAggregatedPriceRequestAminoMsg {
  type: "/akash.oracle.v1.QueryAggregatedPriceRequest";
  value: QueryAggregatedPriceRequestAmino;
}
/**
 * QueryAggregatedPriceResponse is the response type for aggregated price.
 * @name QueryAggregatedPriceResponse
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryAggregatedPriceResponse
 */
export interface QueryAggregatedPriceResponse {
  /**
   * aggregated_price is the aggregated price data
   */
  aggregatedPrice: AggregatedPrice;
  /**
   * price_health is the health status for the price feed
   */
  priceHealth: PriceHealth;
}
export interface QueryAggregatedPriceResponseProtoMsg {
  typeUrl: "/akash.oracle.v1.QueryAggregatedPriceResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatedPriceResponse is the response type for aggregated price.
 * @name QueryAggregatedPriceResponseAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryAggregatedPriceResponse
 */
export interface QueryAggregatedPriceResponseAmino {
  /**
   * aggregated_price is the aggregated price data
   */
  aggregated_price: AggregatedPriceAmino;
  /**
   * price_health is the health status for the price feed
   */
  price_health: PriceHealthAmino;
}
export interface QueryAggregatedPriceResponseAminoMsg {
  type: "/akash.oracle.v1.QueryAggregatedPriceResponse";
  value: QueryAggregatedPriceResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/akash.oracle.v1.QueryParamsRequest",
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
      typeUrl: "/akash.oracle.v1.QueryParamsRequest",
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
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/akash.oracle.v1.QueryParamsResponse",
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
      typeUrl: "/akash.oracle.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatedPriceRequest(): QueryAggregatedPriceRequest {
  return {
    denom: ""
  };
}
/**
 * QueryAggregatedPriceRequest is the request type for aggregated price.
 * @name QueryAggregatedPriceRequest
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryAggregatedPriceRequest
 */
export const QueryAggregatedPriceRequest = {
  typeUrl: "/akash.oracle.v1.QueryAggregatedPriceRequest",
  encode(message: QueryAggregatedPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatedPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatedPriceRequest();
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
  fromPartial(object: DeepPartial<QueryAggregatedPriceRequest>): QueryAggregatedPriceRequest {
    const message = createBaseQueryAggregatedPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAggregatedPriceRequestAmino): QueryAggregatedPriceRequest {
    const message = createBaseQueryAggregatedPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryAggregatedPriceRequest): QueryAggregatedPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAggregatedPriceRequestAminoMsg): QueryAggregatedPriceRequest {
    return QueryAggregatedPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatedPriceRequestProtoMsg): QueryAggregatedPriceRequest {
    return QueryAggregatedPriceRequest.decode(message.value);
  },
  toProto(message: QueryAggregatedPriceRequest): Uint8Array {
    return QueryAggregatedPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatedPriceRequest): QueryAggregatedPriceRequestProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.QueryAggregatedPriceRequest",
      value: QueryAggregatedPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregatedPriceResponse(): QueryAggregatedPriceResponse {
  return {
    aggregatedPrice: AggregatedPrice.fromPartial({}),
    priceHealth: PriceHealth.fromPartial({})
  };
}
/**
 * QueryAggregatedPriceResponse is the response type for aggregated price.
 * @name QueryAggregatedPriceResponse
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryAggregatedPriceResponse
 */
export const QueryAggregatedPriceResponse = {
  typeUrl: "/akash.oracle.v1.QueryAggregatedPriceResponse",
  encode(message: QueryAggregatedPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aggregatedPrice !== undefined) {
      AggregatedPrice.encode(message.aggregatedPrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.priceHealth !== undefined) {
      PriceHealth.encode(message.priceHealth, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatedPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatedPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatedPrice = AggregatedPrice.decode(reader, reader.uint32());
          break;
        case 2:
          message.priceHealth = PriceHealth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregatedPriceResponse>): QueryAggregatedPriceResponse {
    const message = createBaseQueryAggregatedPriceResponse();
    message.aggregatedPrice = object.aggregatedPrice !== undefined && object.aggregatedPrice !== null ? AggregatedPrice.fromPartial(object.aggregatedPrice) : undefined;
    message.priceHealth = object.priceHealth !== undefined && object.priceHealth !== null ? PriceHealth.fromPartial(object.priceHealth) : undefined;
    return message;
  },
  fromAmino(object: QueryAggregatedPriceResponseAmino): QueryAggregatedPriceResponse {
    const message = createBaseQueryAggregatedPriceResponse();
    if (object.aggregated_price !== undefined && object.aggregated_price !== null) {
      message.aggregatedPrice = AggregatedPrice.fromAmino(object.aggregated_price);
    }
    if (object.price_health !== undefined && object.price_health !== null) {
      message.priceHealth = PriceHealth.fromAmino(object.price_health);
    }
    return message;
  },
  toAmino(message: QueryAggregatedPriceResponse): QueryAggregatedPriceResponseAmino {
    const obj: any = {};
    obj.aggregated_price = message.aggregatedPrice ? AggregatedPrice.toAmino(message.aggregatedPrice) : AggregatedPrice.toAmino(AggregatedPrice.fromPartial({}));
    obj.price_health = message.priceHealth ? PriceHealth.toAmino(message.priceHealth) : PriceHealth.toAmino(PriceHealth.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryAggregatedPriceResponseAminoMsg): QueryAggregatedPriceResponse {
    return QueryAggregatedPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregatedPriceResponseProtoMsg): QueryAggregatedPriceResponse {
    return QueryAggregatedPriceResponse.decode(message.value);
  },
  toProto(message: QueryAggregatedPriceResponse): Uint8Array {
    return QueryAggregatedPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregatedPriceResponse): QueryAggregatedPriceResponseProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.QueryAggregatedPriceResponse",
      value: QueryAggregatedPriceResponse.encode(message).finish()
    };
  }
};