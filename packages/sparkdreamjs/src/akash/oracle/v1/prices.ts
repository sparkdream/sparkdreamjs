//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * DataID uniquely identifies a price pair by asset and base denomination
 * @name DataID
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.DataID
 */
export interface DataID {
  /**
   * denom is the asset denomination (e.g., "uakt")
   */
  denom: string;
  /**
   * base_denom is the base denomination for the price pair (e.g., "usd")
   */
  baseDenom: string;
}
export interface DataIDProtoMsg {
  typeUrl: "/akash.oracle.v1.DataID";
  value: Uint8Array;
}
/**
 * DataID uniquely identifies a price pair by asset and base denomination
 * @name DataIDAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.DataID
 */
export interface DataIDAmino {
  /**
   * denom is the asset denomination (e.g., "uakt")
   */
  denom: string;
  /**
   * base_denom is the base denomination for the price pair (e.g., "usd")
   */
  base_denom: string;
}
export interface DataIDAminoMsg {
  type: "/akash.oracle.v1.DataID";
  value: DataIDAmino;
}
/**
 * PriceDataID identifies price data from a specific source for a specific pair
 * @name PriceDataID
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataID
 */
export interface PriceDataID {
  /**
   * source is the index of the price source (oracle provider)
   */
  source: number;
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * base_denom is the base denomination for the price pair
   */
  baseDenom: string;
}
export interface PriceDataIDProtoMsg {
  typeUrl: "/akash.oracle.v1.PriceDataID";
  value: Uint8Array;
}
/**
 * PriceDataID identifies price data from a specific source for a specific pair
 * @name PriceDataIDAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataID
 */
export interface PriceDataIDAmino {
  /**
   * source is the index of the price source (oracle provider)
   */
  source: number;
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * base_denom is the base denomination for the price pair
   */
  base_denom: string;
}
export interface PriceDataIDAminoMsg {
  type: "/akash.oracle.v1.PriceDataID";
  value: PriceDataIDAmino;
}
/**
 * PriceDataRecordID represents a price from a specific source at a specific time.
 * It also represents a single data point in TWAP history
 * @name PriceDataRecordID
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataRecordID
 */
export interface PriceDataRecordID {
  /**
   * source is the index of the price source (oracle provider)
   */
  source: number;
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * base_denom is the base denomination for the price pair
   */
  baseDenom: string;
  /**
   * height is the block height when this price was recorded
   */
  height: bigint;
}
export interface PriceDataRecordIDProtoMsg {
  typeUrl: "/akash.oracle.v1.PriceDataRecordID";
  value: Uint8Array;
}
/**
 * PriceDataRecordID represents a price from a specific source at a specific time.
 * It also represents a single data point in TWAP history
 * @name PriceDataRecordIDAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataRecordID
 */
export interface PriceDataRecordIDAmino {
  /**
   * source is the index of the price source (oracle provider)
   */
  source: number;
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * base_denom is the base denomination for the price pair
   */
  base_denom: string;
  /**
   * height is the block height when this price was recorded
   */
  height: string;
}
export interface PriceDataRecordIDAminoMsg {
  type: "/akash.oracle.v1.PriceDataRecordID";
  value: PriceDataRecordIDAmino;
}
/**
 * PriceDataState represents the price value and timestamp for a price entry
 * @name PriceDataState
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataState
 */
export interface PriceDataState {
  /**
   * price is the decimal price value
   */
  price: string;
  /**
   * timestamp is when the price was recorded
   */
  timestamp: Date;
}
export interface PriceDataStateProtoMsg {
  typeUrl: "/akash.oracle.v1.PriceDataState";
  value: Uint8Array;
}
/**
 * PriceDataState represents the price value and timestamp for a price entry
 * @name PriceDataStateAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataState
 */
export interface PriceDataStateAmino {
  /**
   * price is the decimal price value
   */
  price: string;
  /**
   * timestamp is when the price was recorded
   */
  timestamp: string;
}
export interface PriceDataStateAminoMsg {
  type: "/akash.oracle.v1.PriceDataState";
  value: PriceDataStateAmino;
}
/**
 * PriceData combines a price record identifier with its state
 * @name PriceData
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceData
 */
export interface PriceData {
  /**
   * id uniquely identifies this price record
   */
  id: PriceDataRecordID;
  /**
   * state contains the price value and timestamp
   */
  state: PriceDataState;
}
export interface PriceDataProtoMsg {
  typeUrl: "/akash.oracle.v1.PriceData";
  value: Uint8Array;
}
/**
 * PriceData combines a price record identifier with its state
 * @name PriceDataAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceData
 */
export interface PriceDataAmino {
  /**
   * id uniquely identifies this price record
   */
  id: PriceDataRecordIDAmino;
  /**
   * state contains the price value and timestamp
   */
  state: PriceDataStateAmino;
}
export interface PriceDataAminoMsg {
  type: "/akash.oracle.v1.PriceData";
  value: PriceDataAmino;
}
/**
 * AggregatedPrice represents the final aggregated price from all sources
 * @name AggregatedPrice
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.AggregatedPrice
 */
export interface AggregatedPrice {
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * twap is the time-weighted average price over the configured window
   */
  twap: string;
  /**
   * median_price is the median of all source prices
   */
  medianPrice: string;
  /**
   * min_price is the minimum price from all sources
   */
  minPrice: string;
  /**
   * max_price is the maximum price from all sources
   */
  maxPrice: string;
  /**
   * timestamp is when the aggregated price was computed
   */
  timestamp: Date;
  /**
   * num_sources is the number of price sources contributing to this aggregation
   */
  numSources: number;
  /**
   * deviation_bps is the price deviation in basis points between min and max prices
   */
  deviationBps: bigint;
}
export interface AggregatedPriceProtoMsg {
  typeUrl: "/akash.oracle.v1.AggregatedPrice";
  value: Uint8Array;
}
/**
 * AggregatedPrice represents the final aggregated price from all sources
 * @name AggregatedPriceAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.AggregatedPrice
 */
export interface AggregatedPriceAmino {
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * twap is the time-weighted average price over the configured window
   */
  twap: string;
  /**
   * median_price is the median of all source prices
   */
  median_price: string;
  /**
   * min_price is the minimum price from all sources
   */
  min_price: string;
  /**
   * max_price is the maximum price from all sources
   */
  max_price: string;
  /**
   * timestamp is when the aggregated price was computed
   */
  timestamp: string;
  /**
   * num_sources is the number of price sources contributing to this aggregation
   */
  num_sources: number;
  /**
   * deviation_bps is the price deviation in basis points between min and max prices
   */
  deviation_bps: string;
}
export interface AggregatedPriceAminoMsg {
  type: "/akash.oracle.v1.AggregatedPrice";
  value: AggregatedPriceAmino;
}
/**
 * PriceHealth represents the health status of a price feed
 * @name PriceHealth
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceHealth
 */
export interface PriceHealth {
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * is_healthy indicates if the price feed meets all health requirements
   */
  isHealthy: boolean;
  /**
   * has_min_sources indicates if minimum number of sources are reporting
   */
  hasMinSources: boolean;
  /**
   * deviation_ok indicates if price deviation is within acceptable limits
   */
  deviationOk: boolean;
  /**
   * total_sources indicates total amount of sources registered for price calculations
   */
  totalSources: number;
  /**
   * total_healthy_sources indicates total usable sources for price calculations
   */
  totalHealthySources: number;
  /**
   * failure_reason lists reasons for unhealthy status, if any
   */
  failureReason: string[];
}
export interface PriceHealthProtoMsg {
  typeUrl: "/akash.oracle.v1.PriceHealth";
  value: Uint8Array;
}
/**
 * PriceHealth represents the health status of a price feed
 * @name PriceHealthAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceHealth
 */
export interface PriceHealthAmino {
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * is_healthy indicates if the price feed meets all health requirements
   */
  is_healthy?: boolean;
  /**
   * has_min_sources indicates if minimum number of sources are reporting
   */
  has_min_sources?: boolean;
  /**
   * deviation_ok indicates if price deviation is within acceptable limits
   */
  deviation_ok?: boolean;
  /**
   * total_sources indicates total amount of sources registered for price calculations
   */
  total_sources?: number;
  /**
   * total_healthy_sources indicates total usable sources for price calculations
   */
  total_healthy_sources?: number;
  /**
   * failure_reason lists reasons for unhealthy status, if any
   */
  failure_reason?: string[];
}
export interface PriceHealthAminoMsg {
  type: "/akash.oracle.v1.PriceHealth";
  value: PriceHealthAmino;
}
/**
 * PricesFilter defines filters used to query price data
 * @name PricesFilter
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PricesFilter
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
   * height is the block height to filter by
   */
  height: bigint;
}
export interface PricesFilterProtoMsg {
  typeUrl: "/akash.oracle.v1.PricesFilter";
  value: Uint8Array;
}
/**
 * PricesFilter defines filters used to query price data
 * @name PricesFilterAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PricesFilter
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
   * height is the block height to filter by
   */
  height: string;
}
export interface PricesFilterAminoMsg {
  type: "/akash.oracle.v1.PricesFilter";
  value: PricesFilterAmino;
}
/**
 * QueryPricesRequest is the request type for querying price history
 * @name QueryPricesRequest
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryPricesRequest
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
  typeUrl: "/akash.oracle.v1.QueryPricesRequest";
  value: Uint8Array;
}
/**
 * QueryPricesRequest is the request type for querying price history
 * @name QueryPricesRequestAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryPricesRequest
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
  type: "/akash.oracle.v1.QueryPricesRequest";
  value: QueryPricesRequestAmino;
}
/**
 * QueryPricesResponse is the response type for querying price history
 * @name QueryPricesResponse
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryPricesResponse
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
  typeUrl: "/akash.oracle.v1.QueryPricesResponse";
  value: Uint8Array;
}
/**
 * QueryPricesResponse is the response type for querying price history
 * @name QueryPricesResponseAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryPricesResponse
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
  type: "/akash.oracle.v1.QueryPricesResponse";
  value: QueryPricesResponseAmino;
}
function createBaseDataID(): DataID {
  return {
    denom: "",
    baseDenom: ""
  };
}
/**
 * DataID uniquely identifies a price pair by asset and base denomination
 * @name DataID
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.DataID
 */
export const DataID = {
  typeUrl: "/akash.oracle.v1.DataID",
  encode(message: DataID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DataID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DataID>): DataID {
    const message = createBaseDataID();
    message.denom = object.denom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: DataIDAmino): DataID {
    const message = createBaseDataID();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: DataID): DataIDAmino {
    const obj: any = {};
    obj.denom = message.denom ?? "";
    obj.base_denom = message.baseDenom ?? "";
    return obj;
  },
  fromAminoMsg(object: DataIDAminoMsg): DataID {
    return DataID.fromAmino(object.value);
  },
  fromProtoMsg(message: DataIDProtoMsg): DataID {
    return DataID.decode(message.value);
  },
  toProto(message: DataID): Uint8Array {
    return DataID.encode(message).finish();
  },
  toProtoMsg(message: DataID): DataIDProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.DataID",
      value: DataID.encode(message).finish()
    };
  }
};
function createBasePriceDataID(): PriceDataID {
  return {
    source: 0,
    denom: "",
    baseDenom: ""
  };
}
/**
 * PriceDataID identifies price data from a specific source for a specific pair
 * @name PriceDataID
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataID
 */
export const PriceDataID = {
  typeUrl: "/akash.oracle.v1.PriceDataID",
  encode(message: PriceDataID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== 0) {
      writer.uint32(8).uint32(message.source);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(26).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceDataID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceDataID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.uint32();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceDataID>): PriceDataID {
    const message = createBasePriceDataID();
    message.source = object.source ?? 0;
    message.denom = object.denom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: PriceDataIDAmino): PriceDataID {
    const message = createBasePriceDataID();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: PriceDataID): PriceDataIDAmino {
    const obj: any = {};
    obj.source = message.source ?? 0;
    obj.denom = message.denom ?? "";
    obj.base_denom = message.baseDenom ?? "";
    return obj;
  },
  fromAminoMsg(object: PriceDataIDAminoMsg): PriceDataID {
    return PriceDataID.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceDataIDProtoMsg): PriceDataID {
    return PriceDataID.decode(message.value);
  },
  toProto(message: PriceDataID): Uint8Array {
    return PriceDataID.encode(message).finish();
  },
  toProtoMsg(message: PriceDataID): PriceDataIDProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.PriceDataID",
      value: PriceDataID.encode(message).finish()
    };
  }
};
function createBasePriceDataRecordID(): PriceDataRecordID {
  return {
    source: 0,
    denom: "",
    baseDenom: "",
    height: BigInt(0)
  };
}
/**
 * PriceDataRecordID represents a price from a specific source at a specific time.
 * It also represents a single data point in TWAP history
 * @name PriceDataRecordID
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataRecordID
 */
export const PriceDataRecordID = {
  typeUrl: "/akash.oracle.v1.PriceDataRecordID",
  encode(message: PriceDataRecordID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== 0) {
      writer.uint32(8).uint32(message.source);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(26).string(message.baseDenom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceDataRecordID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceDataRecordID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.uint32();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.baseDenom = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceDataRecordID>): PriceDataRecordID {
    const message = createBasePriceDataRecordID();
    message.source = object.source ?? 0;
    message.denom = object.denom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceDataRecordIDAmino): PriceDataRecordID {
    const message = createBasePriceDataRecordID();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: PriceDataRecordID): PriceDataRecordIDAmino {
    const obj: any = {};
    obj.source = message.source ?? 0;
    obj.denom = message.denom ?? "";
    obj.base_denom = message.baseDenom ?? "";
    obj.height = message.height ? message.height?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: PriceDataRecordIDAminoMsg): PriceDataRecordID {
    return PriceDataRecordID.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceDataRecordIDProtoMsg): PriceDataRecordID {
    return PriceDataRecordID.decode(message.value);
  },
  toProto(message: PriceDataRecordID): Uint8Array {
    return PriceDataRecordID.encode(message).finish();
  },
  toProtoMsg(message: PriceDataRecordID): PriceDataRecordIDProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.PriceDataRecordID",
      value: PriceDataRecordID.encode(message).finish()
    };
  }
};
function createBasePriceDataState(): PriceDataState {
  return {
    price: "",
    timestamp: new Date()
  };
}
/**
 * PriceDataState represents the price value and timestamp for a price entry
 * @name PriceDataState
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceDataState
 */
export const PriceDataState = {
  typeUrl: "/akash.oracle.v1.PriceDataState",
  encode(message: PriceDataState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceDataState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceDataState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceDataState>): PriceDataState {
    const message = createBasePriceDataState();
    message.price = object.price ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: PriceDataStateAmino): PriceDataState {
    const message = createBasePriceDataState();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: PriceDataState): PriceDataStateAmino {
    const obj: any = {};
    obj.price = message.price ?? "";
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    return obj;
  },
  fromAminoMsg(object: PriceDataStateAminoMsg): PriceDataState {
    return PriceDataState.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceDataStateProtoMsg): PriceDataState {
    return PriceDataState.decode(message.value);
  },
  toProto(message: PriceDataState): Uint8Array {
    return PriceDataState.encode(message).finish();
  },
  toProtoMsg(message: PriceDataState): PriceDataStateProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.PriceDataState",
      value: PriceDataState.encode(message).finish()
    };
  }
};
function createBasePriceData(): PriceData {
  return {
    id: PriceDataRecordID.fromPartial({}),
    state: PriceDataState.fromPartial({})
  };
}
/**
 * PriceData combines a price record identifier with its state
 * @name PriceData
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceData
 */
export const PriceData = {
  typeUrl: "/akash.oracle.v1.PriceData",
  encode(message: PriceData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      PriceDataRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      PriceDataState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = PriceDataRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = PriceDataState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceData>): PriceData {
    const message = createBasePriceData();
    message.id = object.id !== undefined && object.id !== null ? PriceDataRecordID.fromPartial(object.id) : undefined;
    message.state = object.state !== undefined && object.state !== null ? PriceDataState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: PriceDataAmino): PriceData {
    const message = createBasePriceData();
    if (object.id !== undefined && object.id !== null) {
      message.id = PriceDataRecordID.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = PriceDataState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: PriceData): PriceDataAmino {
    const obj: any = {};
    obj.id = message.id ? PriceDataRecordID.toAmino(message.id) : PriceDataRecordID.toAmino(PriceDataRecordID.fromPartial({}));
    obj.state = message.state ? PriceDataState.toAmino(message.state) : PriceDataState.toAmino(PriceDataState.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: PriceDataAminoMsg): PriceData {
    return PriceData.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceDataProtoMsg): PriceData {
    return PriceData.decode(message.value);
  },
  toProto(message: PriceData): Uint8Array {
    return PriceData.encode(message).finish();
  },
  toProtoMsg(message: PriceData): PriceDataProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.PriceData",
      value: PriceData.encode(message).finish()
    };
  }
};
function createBaseAggregatedPrice(): AggregatedPrice {
  return {
    denom: "",
    twap: "",
    medianPrice: "",
    minPrice: "",
    maxPrice: "",
    timestamp: new Date(),
    numSources: 0,
    deviationBps: BigInt(0)
  };
}
/**
 * AggregatedPrice represents the final aggregated price from all sources
 * @name AggregatedPrice
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.AggregatedPrice
 */
export const AggregatedPrice = {
  typeUrl: "/akash.oracle.v1.AggregatedPrice",
  encode(message: AggregatedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.twap !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.twap, 18).atomics);
    }
    if (message.medianPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.medianPrice, 18).atomics);
    }
    if (message.minPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.minPrice, 18).atomics);
    }
    if (message.maxPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.numSources !== 0) {
      writer.uint32(56).uint32(message.numSources);
    }
    if (message.deviationBps !== BigInt(0)) {
      writer.uint32(64).uint64(message.deviationBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregatedPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregatedPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.twap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.medianPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.minPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.numSources = reader.uint32();
          break;
        case 8:
          message.deviationBps = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AggregatedPrice>): AggregatedPrice {
    const message = createBaseAggregatedPrice();
    message.denom = object.denom ?? "";
    message.twap = object.twap ?? "";
    message.medianPrice = object.medianPrice ?? "";
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.numSources = object.numSources ?? 0;
    message.deviationBps = object.deviationBps !== undefined && object.deviationBps !== null ? BigInt(object.deviationBps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AggregatedPriceAmino): AggregatedPrice {
    const message = createBaseAggregatedPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.twap !== undefined && object.twap !== null) {
      message.twap = object.twap;
    }
    if (object.median_price !== undefined && object.median_price !== null) {
      message.medianPrice = object.median_price;
    }
    if (object.min_price !== undefined && object.min_price !== null) {
      message.minPrice = object.min_price;
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = object.max_price;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.num_sources !== undefined && object.num_sources !== null) {
      message.numSources = object.num_sources;
    }
    if (object.deviation_bps !== undefined && object.deviation_bps !== null) {
      message.deviationBps = BigInt(object.deviation_bps);
    }
    return message;
  },
  toAmino(message: AggregatedPrice): AggregatedPriceAmino {
    const obj: any = {};
    obj.denom = message.denom ?? "";
    obj.twap = message.twap ?? "";
    obj.median_price = message.medianPrice ?? "";
    obj.min_price = message.minPrice ?? "";
    obj.max_price = message.maxPrice ?? "";
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    obj.num_sources = message.numSources ?? 0;
    obj.deviation_bps = message.deviationBps ? message.deviationBps?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: AggregatedPriceAminoMsg): AggregatedPrice {
    return AggregatedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregatedPriceProtoMsg): AggregatedPrice {
    return AggregatedPrice.decode(message.value);
  },
  toProto(message: AggregatedPrice): Uint8Array {
    return AggregatedPrice.encode(message).finish();
  },
  toProtoMsg(message: AggregatedPrice): AggregatedPriceProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.AggregatedPrice",
      value: AggregatedPrice.encode(message).finish()
    };
  }
};
function createBasePriceHealth(): PriceHealth {
  return {
    denom: "",
    isHealthy: false,
    hasMinSources: false,
    deviationOk: false,
    totalSources: 0,
    totalHealthySources: 0,
    failureReason: []
  };
}
/**
 * PriceHealth represents the health status of a price feed
 * @name PriceHealth
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PriceHealth
 */
export const PriceHealth = {
  typeUrl: "/akash.oracle.v1.PriceHealth",
  encode(message: PriceHealth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.isHealthy === true) {
      writer.uint32(24).bool(message.isHealthy);
    }
    if (message.hasMinSources === true) {
      writer.uint32(32).bool(message.hasMinSources);
    }
    if (message.deviationOk === true) {
      writer.uint32(40).bool(message.deviationOk);
    }
    if (message.totalSources !== 0) {
      writer.uint32(48).uint32(message.totalSources);
    }
    if (message.totalHealthySources !== 0) {
      writer.uint32(56).uint32(message.totalHealthySources);
    }
    for (const v of message.failureReason) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceHealth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceHealth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.isHealthy = reader.bool();
          break;
        case 4:
          message.hasMinSources = reader.bool();
          break;
        case 5:
          message.deviationOk = reader.bool();
          break;
        case 6:
          message.totalSources = reader.uint32();
          break;
        case 7:
          message.totalHealthySources = reader.uint32();
          break;
        case 8:
          message.failureReason.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceHealth>): PriceHealth {
    const message = createBasePriceHealth();
    message.denom = object.denom ?? "";
    message.isHealthy = object.isHealthy ?? false;
    message.hasMinSources = object.hasMinSources ?? false;
    message.deviationOk = object.deviationOk ?? false;
    message.totalSources = object.totalSources ?? 0;
    message.totalHealthySources = object.totalHealthySources ?? 0;
    message.failureReason = object.failureReason?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PriceHealthAmino): PriceHealth {
    const message = createBasePriceHealth();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.is_healthy !== undefined && object.is_healthy !== null) {
      message.isHealthy = object.is_healthy;
    }
    if (object.has_min_sources !== undefined && object.has_min_sources !== null) {
      message.hasMinSources = object.has_min_sources;
    }
    if (object.deviation_ok !== undefined && object.deviation_ok !== null) {
      message.deviationOk = object.deviation_ok;
    }
    if (object.total_sources !== undefined && object.total_sources !== null) {
      message.totalSources = object.total_sources;
    }
    if (object.total_healthy_sources !== undefined && object.total_healthy_sources !== null) {
      message.totalHealthySources = object.total_healthy_sources;
    }
    message.failureReason = object.failure_reason?.map(e => e) || [];
    return message;
  },
  toAmino(message: PriceHealth): PriceHealthAmino {
    const obj: any = {};
    obj.denom = message.denom ?? "";
    obj.is_healthy = message.isHealthy === false ? undefined : message.isHealthy;
    obj.has_min_sources = message.hasMinSources === false ? undefined : message.hasMinSources;
    obj.deviation_ok = message.deviationOk === false ? undefined : message.deviationOk;
    obj.total_sources = message.totalSources === 0 ? undefined : message.totalSources;
    obj.total_healthy_sources = message.totalHealthySources === 0 ? undefined : message.totalHealthySources;
    if (message.failureReason) {
      obj.failure_reason = message.failureReason.map(e => e);
    } else {
      obj.failure_reason = message.failureReason;
    }
    return obj;
  },
  fromAminoMsg(object: PriceHealthAminoMsg): PriceHealth {
    return PriceHealth.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceHealthProtoMsg): PriceHealth {
    return PriceHealth.decode(message.value);
  },
  toProto(message: PriceHealth): Uint8Array {
    return PriceHealth.encode(message).finish();
  },
  toProtoMsg(message: PriceHealth): PriceHealthProtoMsg {
    return {
      typeUrl: "/akash.oracle.v1.PriceHealth",
      value: PriceHealth.encode(message).finish()
    };
  }
};
function createBasePricesFilter(): PricesFilter {
  return {
    assetDenom: "",
    baseDenom: "",
    height: BigInt(0)
  };
}
/**
 * PricesFilter defines filters used to query price data
 * @name PricesFilter
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.PricesFilter
 */
export const PricesFilter = {
  typeUrl: "/akash.oracle.v1.PricesFilter",
  encode(message: PricesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetDenom !== "") {
      writer.uint32(10).string(message.assetDenom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
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
          message.height = reader.int64();
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
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
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
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: PricesFilter): PricesFilterAmino {
    const obj: any = {};
    obj.asset_denom = message.assetDenom ?? "";
    obj.base_denom = message.baseDenom ?? "";
    obj.height = message.height ? message.height?.toString() : "0";
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
      typeUrl: "/akash.oracle.v1.PricesFilter",
      value: PricesFilter.encode(message).finish()
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
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryPricesRequest
 */
export const QueryPricesRequest = {
  typeUrl: "/akash.oracle.v1.QueryPricesRequest",
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
      typeUrl: "/akash.oracle.v1.QueryPricesRequest",
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
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.QueryPricesResponse
 */
export const QueryPricesResponse = {
  typeUrl: "/akash.oracle.v1.QueryPricesResponse",
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
      typeUrl: "/akash.oracle.v1.QueryPricesResponse",
      value: QueryPricesResponse.encode(message).finish()
    };
  }
};