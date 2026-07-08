//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino } from "./params";
import { AggregatedPrice, AggregatedPriceAmino, PriceHealth, PriceHealthAmino, PriceData, PriceDataAmino } from "./prices";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/**
 * PricesFilter defines filters used to query price data
 * @name PricesFilter
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PricesFilter
 */
export interface PricesFilter {
  /**
   * asset_denom is the asset denomination to filter by
   */
  assetDenom: string;
  /**
   * base_denom is the base denomination to filter by
   */
  baseDenom: string;
  /**
   * start_time is the inclusive start of the time range to filter by
   */
  startTime: Date;
  /**
   * end_time is the inclusive end of the time range to filter by
   */
  endTime: Date;
}
export interface PricesFilterProtoMsg {
  typeUrl: "/akash.oracle.v2.PricesFilter";
  value: Uint8Array;
}
/**
 * PricesFilter defines filters used to query price data
 * @name PricesFilterAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PricesFilter
 */
export interface PricesFilterAmino {
  /**
   * asset_denom is the asset denomination to filter by
   */
  asset_denom: string;
  /**
   * base_denom is the base denomination to filter by
   */
  base_denom: string;
  /**
   * start_time is the inclusive start of the time range to filter by
   */
  start_time: string;
  /**
   * end_time is the inclusive end of the time range to filter by
   */
  end_time: string;
}
export interface PricesFilterAminoMsg {
  type: "/akash.oracle.v2.PricesFilter";
  value: PricesFilterAmino;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/akash.oracle.v2.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/akash.oracle.v2.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/akash.oracle.v2.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/akash.oracle.v2.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryAggregatedPriceRequest is the request type for aggregated price.
 * @name QueryAggregatedPriceRequest
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryAggregatedPriceRequest
 */
export interface QueryAggregatedPriceRequest {
  /**
   * denom is the asset denomination
   */
  denom: string;
}
export interface QueryAggregatedPriceRequestProtoMsg {
  typeUrl: "/akash.oracle.v2.QueryAggregatedPriceRequest";
  value: Uint8Array;
}
/**
 * QueryAggregatedPriceRequest is the request type for aggregated price.
 * @name QueryAggregatedPriceRequestAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryAggregatedPriceRequest
 */
export interface QueryAggregatedPriceRequestAmino {
  /**
   * denom is the asset denomination
   */
  denom?: string;
}
export interface QueryAggregatedPriceRequestAminoMsg {
  type: "/akash.oracle.v2.QueryAggregatedPriceRequest";
  value: QueryAggregatedPriceRequestAmino;
}
/**
 * QueryAggregatedPriceResponse is the response type for aggregated price.
 * @name QueryAggregatedPriceResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryAggregatedPriceResponse
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
  typeUrl: "/akash.oracle.v2.QueryAggregatedPriceResponse";
  value: Uint8Array;
}
/**
 * QueryAggregatedPriceResponse is the response type for aggregated price.
 * @name QueryAggregatedPriceResponseAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryAggregatedPriceResponse
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
  type: "/akash.oracle.v2.QueryAggregatedPriceResponse";
  value: QueryAggregatedPriceResponseAmino;
}
/**
 * QueryPricesRequest is the request type for querying price history
 * @name QueryPricesRequest
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryPricesRequest
 */
export interface QueryPricesRequest {
  /**
   * filters holds the price fields to filter the request
   */
  filters: PricesFilter;
  /**
   * pagination is used to paginate the request
   */
  pagination?: PageRequest;
}
export interface QueryPricesRequestProtoMsg {
  typeUrl: "/akash.oracle.v2.QueryPricesRequest";
  value: Uint8Array;
}
/**
 * QueryPricesRequest is the request type for querying price history
 * @name QueryPricesRequestAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryPricesRequest
 */
export interface QueryPricesRequestAmino {
  /**
   * filters holds the price fields to filter the request
   */
  filters?: PricesFilterAmino;
  /**
   * pagination is used to paginate the request
   */
  pagination?: PageRequestAmino;
}
export interface QueryPricesRequestAminoMsg {
  type: "/akash.oracle.v2.QueryPricesRequest";
  value: QueryPricesRequestAmino;
}
/**
 * QueryPricesResponse is the response type for querying price history
 * @name QueryPricesResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryPricesResponse
 */
export interface QueryPricesResponse {
  /**
   * prices is the list of historical price data matching the filters
   */
  prices: PriceData[];
  /**
   * pagination contains the information about response pagination
   */
  pagination?: PageResponse;
}
export interface QueryPricesResponseProtoMsg {
  typeUrl: "/akash.oracle.v2.QueryPricesResponse";
  value: Uint8Array;
}
/**
 * QueryPricesResponse is the response type for querying price history
 * @name QueryPricesResponseAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryPricesResponse
 */
export interface QueryPricesResponseAmino {
  /**
   * prices is the list of historical price data matching the filters
   */
  prices: PriceDataAmino[];
  /**
   * pagination contains the information about response pagination
   */
  pagination?: PageResponseAmino;
}
export interface QueryPricesResponseAminoMsg {
  type: "/akash.oracle.v2.QueryPricesResponse";
  value: QueryPricesResponseAmino;
}
function createBasePricesFilter(): PricesFilter {
  return {
    assetDenom: "",
    baseDenom: "",
    startTime: new Date(),
    endTime: new Date()
  };
}
/**
 * PricesFilter defines filters used to query price data
 * @name PricesFilter
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PricesFilter
 */
export const PricesFilter = {
  typeUrl: "/akash.oracle.v2.PricesFilter",
  encode(message: PricesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetDenom !== "") {
      writer.uint32(10).string(message.assetDenom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PricesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetDenom = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PricesFilter>): PricesFilter {
    const message = createBasePricesFilter();
    message.assetDenom = object.assetDenom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: PricesFilterAmino): PricesFilter {
    const message = createBasePricesFilter();
    if (object.asset_denom !== undefined && object.asset_denom !== null) {
      message.assetDenom = object.asset_denom;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: PricesFilter): PricesFilterAmino {
    const obj: any = {};
    obj.asset_denom = message.assetDenom ?? "";
    obj.base_denom = message.baseDenom ?? "";
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : new Date();
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : new Date();
    return obj;
  },
  fromAminoMsg(object: PricesFilterAminoMsg): PricesFilter {
    return PricesFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: PricesFilterProtoMsg): PricesFilter {
    return PricesFilter.decode(message.value);
  },
  toProto(message: PricesFilter): Uint8Array {
    return PricesFilter.encode(message).finish();
  },
  toProtoMsg(message: PricesFilter): PricesFilterProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.PricesFilter",
      value: PricesFilter.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/akash.oracle.v2.QueryParamsRequest",
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
      typeUrl: "/akash.oracle.v2.QueryParamsRequest",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/akash.oracle.v2.QueryParamsResponse",
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
      typeUrl: "/akash.oracle.v2.QueryParamsResponse",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryAggregatedPriceRequest
 */
export const QueryAggregatedPriceRequest = {
  typeUrl: "/akash.oracle.v2.QueryAggregatedPriceRequest",
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
      typeUrl: "/akash.oracle.v2.QueryAggregatedPriceRequest",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryAggregatedPriceResponse
 */
export const QueryAggregatedPriceResponse = {
  typeUrl: "/akash.oracle.v2.QueryAggregatedPriceResponse",
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
      typeUrl: "/akash.oracle.v2.QueryAggregatedPriceResponse",
      value: QueryAggregatedPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {
    filters: PricesFilter.fromPartial({}),
    pagination: undefined
  };
}
/**
 * QueryPricesRequest is the request type for querying price history
 * @name QueryPricesRequest
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryPricesRequest
 */
export const QueryPricesRequest = {
  typeUrl: "/akash.oracle.v2.QueryPricesRequest",
  encode(message: QueryPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      PricesFilter.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = PricesFilter.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<QueryPricesRequest>): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? PricesFilter.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPricesRequestAmino): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = PricesFilter.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPricesRequest): QueryPricesRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? PricesFilter.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPricesRequestAminoMsg): QueryPricesRequest {
    return QueryPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesRequestProtoMsg): QueryPricesRequest {
    return QueryPricesRequest.decode(message.value);
  },
  toProto(message: QueryPricesRequest): Uint8Array {
    return QueryPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesRequest): QueryPricesRequestProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.QueryPricesRequest",
      value: QueryPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    prices: [],
    pagination: undefined
  };
}
/**
 * QueryPricesResponse is the response type for querying price history
 * @name QueryPricesResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.QueryPricesResponse
 */
export const QueryPricesResponse = {
  typeUrl: "/akash.oracle.v2.QueryPricesResponse",
  encode(message: QueryPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      PriceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(PriceData.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryPricesResponse>): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => PriceData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPricesResponseAmino): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => PriceData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPricesResponse): QueryPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? PriceData.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPricesResponseAminoMsg): QueryPricesResponse {
    return QueryPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesResponseProtoMsg): QueryPricesResponse {
    return QueryPricesResponse.decode(message.value);
  },
  toProto(message: QueryPricesResponse): Uint8Array {
    return QueryPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesResponse): QueryPricesResponseProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.QueryPricesResponse",
      value: QueryPricesResponse.encode(message).finish()
    };
  }
};