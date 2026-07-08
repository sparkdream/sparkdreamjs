//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * DataID uniquely identifies a price pair by asset and base denomination
 * @name DataID
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.DataID
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
  typeUrl: "/akash.oracle.v2.DataID";
  value: Uint8Array;
}
/**
 * DataID uniquely identifies a price pair by asset and base denomination
 * @name DataIDAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.DataID
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
  type: "/akash.oracle.v2.DataID";
  value: DataIDAmino;
}
/**
 * PriceDataID identifies price data from a specific source for a specific pair
 * @name PriceDataID
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataID
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
  typeUrl: "/akash.oracle.v2.PriceDataID";
  value: Uint8Array;
}
/**
 * PriceDataID identifies price data from a specific source for a specific pair
 * @name PriceDataIDAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataID
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
  type: "/akash.oracle.v2.PriceDataID";
  value: PriceDataIDAmino;
}
/**
 * PriceLatestDataState holds the timestamp of the most recent price record for a source/pair
 * @name PriceLatestDataState
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceLatestDataState
 */
export interface PriceLatestDataState {
  /**
   * timestamp is when the price was recorded
   */
  timestamp: Date;
  /**
   * sequence disambiguates multiple price entries at the same timestamp
   */
  sequence: bigint;
}
export interface PriceLatestDataStateProtoMsg {
  typeUrl: "/akash.oracle.v2.PriceLatestDataState";
  value: Uint8Array;
}
/**
 * PriceLatestDataState holds the timestamp of the most recent price record for a source/pair
 * @name PriceLatestDataStateAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceLatestDataState
 */
export interface PriceLatestDataStateAmino {
  /**
   * timestamp is when the price was recorded
   */
  timestamp: string;
  /**
   * sequence disambiguates multiple price entries at the same timestamp
   */
  sequence: string;
}
export interface PriceLatestDataStateAminoMsg {
  type: "/akash.oracle.v2.PriceLatestDataState";
  value: PriceLatestDataStateAmino;
}
/**
 * PriceDataRecordID represents a price from a specific source at a specific time.
 * It also represents a single data point in TWAP history
 * @name PriceDataRecordID
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataRecordID
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
   * timestamp is when this price was recorded
   */
  timestamp: Date;
  /**
   * sequence disambiguates multiple price entries at the same timestamp
   */
  sequence: bigint;
}
export interface PriceDataRecordIDProtoMsg {
  typeUrl: "/akash.oracle.v2.PriceDataRecordID";
  value: Uint8Array;
}
/**
 * PriceDataRecordID represents a price from a specific source at a specific time.
 * It also represents a single data point in TWAP history
 * @name PriceDataRecordIDAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataRecordID
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
   * timestamp is when this price was recorded
   */
  timestamp: string;
  /**
   * sequence disambiguates multiple price entries at the same timestamp
   */
  sequence: string;
}
export interface PriceDataRecordIDAminoMsg {
  type: "/akash.oracle.v2.PriceDataRecordID";
  value: PriceDataRecordIDAmino;
}
/**
 * PriceDataState represents the price value
 * @name PriceDataState
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataState
 */
export interface PriceDataState {
  /**
   * price is the decimal price value
   */
  price: string;
}
export interface PriceDataStateProtoMsg {
  typeUrl: "/akash.oracle.v2.PriceDataState";
  value: Uint8Array;
}
/**
 * PriceDataState represents the price value
 * @name PriceDataStateAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataState
 */
export interface PriceDataStateAmino {
  /**
   * price is the decimal price value
   */
  price: string;
}
export interface PriceDataStateAminoMsg {
  type: "/akash.oracle.v2.PriceDataState";
  value: PriceDataStateAmino;
}
/**
 * PriceData combines a price record identifier with its state
 * @name PriceData
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceData
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
  typeUrl: "/akash.oracle.v2.PriceData";
  value: Uint8Array;
}
/**
 * PriceData combines a price record identifier with its state
 * @name PriceDataAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceData
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
  type: "/akash.oracle.v2.PriceData";
  value: PriceDataAmino;
}
/**
 * AggregatedPrice represents the final aggregated price from all sources
 * @name AggregatedPrice
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.AggregatedPrice
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
  typeUrl: "/akash.oracle.v2.AggregatedPrice";
  value: Uint8Array;
}
/**
 * AggregatedPrice represents the final aggregated price from all sources
 * @name AggregatedPriceAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.AggregatedPrice
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
  type: "/akash.oracle.v2.AggregatedPrice";
  value: AggregatedPriceAmino;
}
/**
 * PriceHealth represents the health status of a price feed
 * @name PriceHealth
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceHealth
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
  typeUrl: "/akash.oracle.v2.PriceHealth";
  value: Uint8Array;
}
/**
 * PriceHealth represents the health status of a price feed
 * @name PriceHealthAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceHealth
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
  type: "/akash.oracle.v2.PriceHealth";
  value: PriceHealthAmino;
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.DataID
 */
export const DataID = {
  typeUrl: "/akash.oracle.v2.DataID",
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
      typeUrl: "/akash.oracle.v2.DataID",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataID
 */
export const PriceDataID = {
  typeUrl: "/akash.oracle.v2.PriceDataID",
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
      typeUrl: "/akash.oracle.v2.PriceDataID",
      value: PriceDataID.encode(message).finish()
    };
  }
};
function createBasePriceLatestDataState(): PriceLatestDataState {
  return {
    timestamp: new Date(),
    sequence: BigInt(0)
  };
}
/**
 * PriceLatestDataState holds the timestamp of the most recent price record for a source/pair
 * @name PriceLatestDataState
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceLatestDataState
 */
export const PriceLatestDataState = {
  typeUrl: "/akash.oracle.v2.PriceLatestDataState",
  encode(message: PriceLatestDataState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceLatestDataState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceLatestDataState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceLatestDataState>): PriceLatestDataState {
    const message = createBasePriceLatestDataState();
    message.timestamp = object.timestamp ?? undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceLatestDataStateAmino): PriceLatestDataState {
    const message = createBasePriceLatestDataState();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PriceLatestDataState): PriceLatestDataStateAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    obj.sequence = message.sequence ? message.sequence?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: PriceLatestDataStateAminoMsg): PriceLatestDataState {
    return PriceLatestDataState.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceLatestDataStateProtoMsg): PriceLatestDataState {
    return PriceLatestDataState.decode(message.value);
  },
  toProto(message: PriceLatestDataState): Uint8Array {
    return PriceLatestDataState.encode(message).finish();
  },
  toProtoMsg(message: PriceLatestDataState): PriceLatestDataStateProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.PriceLatestDataState",
      value: PriceLatestDataState.encode(message).finish()
    };
  }
};
function createBasePriceDataRecordID(): PriceDataRecordID {
  return {
    source: 0,
    denom: "",
    baseDenom: "",
    timestamp: new Date(),
    sequence: BigInt(0)
  };
}
/**
 * PriceDataRecordID represents a price from a specific source at a specific time.
 * It also represents a single data point in TWAP history
 * @name PriceDataRecordID
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataRecordID
 */
export const PriceDataRecordID = {
  typeUrl: "/akash.oracle.v2.PriceDataRecordID",
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
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.sequence);
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
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sequence = reader.uint64();
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
    message.timestamp = object.timestamp ?? undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PriceDataRecordID): PriceDataRecordIDAmino {
    const obj: any = {};
    obj.source = message.source ?? 0;
    obj.denom = message.denom ?? "";
    obj.base_denom = message.baseDenom ?? "";
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    obj.sequence = message.sequence ? message.sequence?.toString() : "0";
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
      typeUrl: "/akash.oracle.v2.PriceDataRecordID",
      value: PriceDataRecordID.encode(message).finish()
    };
  }
};
function createBasePriceDataState(): PriceDataState {
  return {
    price: ""
  };
}
/**
 * PriceDataState represents the price value
 * @name PriceDataState
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceDataState
 */
export const PriceDataState = {
  typeUrl: "/akash.oracle.v2.PriceDataState",
  encode(message: PriceDataState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
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
    return message;
  },
  fromAmino(object: PriceDataStateAmino): PriceDataState {
    const message = createBasePriceDataState();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: PriceDataState): PriceDataStateAmino {
    const obj: any = {};
    obj.price = message.price ?? "";
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
      typeUrl: "/akash.oracle.v2.PriceDataState",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceData
 */
export const PriceData = {
  typeUrl: "/akash.oracle.v2.PriceData",
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
      typeUrl: "/akash.oracle.v2.PriceData",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.AggregatedPrice
 */
export const AggregatedPrice = {
  typeUrl: "/akash.oracle.v2.AggregatedPrice",
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
      typeUrl: "/akash.oracle.v2.AggregatedPrice",
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
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.PriceHealth
 */
export const PriceHealth = {
  typeUrl: "/akash.oracle.v2.PriceHealth",
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
      typeUrl: "/akash.oracle.v2.PriceHealth",
      value: PriceHealth.encode(message).finish()
    };
  }
};