//@ts-nocheck
import { DataID, DataIDAmino, AggregatedPrice, AggregatedPriceAmino } from "./prices";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/**
 * EventPriceData is emitted when new price data is added to the oracle
 * @name EventPriceData
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceData
 */
export interface EventPriceData {
  /**
   * source is the address of the price source (oracle provider)
   */
  source: string;
  /**
   * id identifies the price pair (denom and base_denom)
   */
  id: DataID;
  /**
   * price is the decimal price value
   */
  price: string;
  /**
   * timestamp is when this price was recorded
   */
  timestamp: Date;
}
export interface EventPriceDataProtoMsg {
  typeUrl: "/akash.oracle.v2.EventPriceData";
  value: Uint8Array;
}
/**
 * EventPriceData is emitted when new price data is added to the oracle
 * @name EventPriceDataAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceData
 */
export interface EventPriceDataAmino {
  /**
   * source is the address of the price source (oracle provider)
   */
  source: string;
  /**
   * id identifies the price pair (denom and base_denom)
   */
  id: DataIDAmino;
  /**
   * price is the decimal price value
   */
  price: string;
  /**
   * timestamp is when this price was recorded
   */
  timestamp: string;
}
export interface EventPriceDataAminoMsg {
  type: "/akash.oracle.v2.EventPriceData";
  value: EventPriceDataAmino;
}
/**
 * EventPriceStaleWarning is emitted when price has not been updated and is about to become stale
 * @name EventPriceStaleWarning
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceStaleWarning
 */
export interface EventPriceStaleWarning {
  /**
   * id identifies the price pair
   */
  id: DataID;
  /**
   * last_height is the block height when the price was last updated
   */
  lastHeight: bigint;
  /**
   * blocks_to_stall is the number of blocks until the price becomes stale
   */
  blocksToStall: bigint;
}
export interface EventPriceStaleWarningProtoMsg {
  typeUrl: "/akash.oracle.v2.EventPriceStaleWarning";
  value: Uint8Array;
}
/**
 * EventPriceStaleWarning is emitted when price has not been updated and is about to become stale
 * @name EventPriceStaleWarningAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceStaleWarning
 */
export interface EventPriceStaleWarningAmino {
  /**
   * id identifies the price pair
   */
  id: DataIDAmino;
  /**
   * last_height is the block height when the price was last updated
   */
  last_height: string;
  /**
   * blocks_to_stall is the number of blocks until the price becomes stale
   */
  blocks_to_stall: string;
}
export interface EventPriceStaleWarningAminoMsg {
  type: "/akash.oracle.v2.EventPriceStaleWarning";
  value: EventPriceStaleWarningAmino;
}
/**
 * EventPriceStaled is emitted when a price has become stale
 * @name EventPriceStaled
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceStaled
 */
export interface EventPriceStaled {
  /**
   * id identifies the price pair
   */
  id: DataID;
  /**
   * last_height is the block height when the price was last updated before becoming stale
   */
  lastHeight: bigint;
}
export interface EventPriceStaledProtoMsg {
  typeUrl: "/akash.oracle.v2.EventPriceStaled";
  value: Uint8Array;
}
/**
 * EventPriceStaled is emitted when a price has become stale
 * @name EventPriceStaledAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceStaled
 */
export interface EventPriceStaledAmino {
  /**
   * id identifies the price pair
   */
  id: DataIDAmino;
  /**
   * last_height is the block height when the price was last updated before becoming stale
   */
  last_height: string;
}
export interface EventPriceStaledAminoMsg {
  type: "/akash.oracle.v2.EventPriceStaled";
  value: EventPriceStaledAmino;
}
/**
 * EventPriceRecovered is emitted when a stale price has started receiving updates again
 * @name EventPriceRecovered
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceRecovered
 */
export interface EventPriceRecovered {
  /**
   * id identifies the price pair
   */
  id: DataID;
  /**
   * height is the block height when the price recovery was detected
   */
  height: bigint;
}
export interface EventPriceRecoveredProtoMsg {
  typeUrl: "/akash.oracle.v2.EventPriceRecovered";
  value: Uint8Array;
}
/**
 * EventPriceRecovered is emitted when a stale price has started receiving updates again
 * @name EventPriceRecoveredAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceRecovered
 */
export interface EventPriceRecoveredAmino {
  /**
   * id identifies the price pair
   */
  id: DataIDAmino;
  /**
   * height is the block height when the price recovery was detected
   */
  height: string;
}
export interface EventPriceRecoveredAminoMsg {
  type: "/akash.oracle.v2.EventPriceRecovered";
  value: EventPriceRecoveredAmino;
}
/**
 * EventAggregatedPrice is emitted when aggregated price has an update
 * @name EventAggregatedPrice
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventAggregatedPrice
 */
export interface EventAggregatedPrice {
  /**
   * price is the aggregated price data
   */
  price: AggregatedPrice;
}
export interface EventAggregatedPriceProtoMsg {
  typeUrl: "/akash.oracle.v2.EventAggregatedPrice";
  value: Uint8Array;
}
/**
 * EventAggregatedPrice is emitted when aggregated price has an update
 * @name EventAggregatedPriceAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventAggregatedPrice
 */
export interface EventAggregatedPriceAmino {
  /**
   * price is the aggregated price data
   */
  price: AggregatedPriceAmino;
}
export interface EventAggregatedPriceAminoMsg {
  type: "/akash.oracle.v2.EventAggregatedPrice";
  value: EventAggregatedPriceAmino;
}
function createBaseEventPriceData(): EventPriceData {
  return {
    source: "",
    id: DataID.fromPartial({}),
    price: "",
    timestamp: new Date()
  };
}
/**
 * EventPriceData is emitted when new price data is added to the oracle
 * @name EventPriceData
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceData
 */
export const EventPriceData = {
  typeUrl: "/akash.oracle.v2.EventPriceData",
  encode(message: EventPriceData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.id !== undefined) {
      DataID.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPriceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPriceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.id = DataID.decode(reader, reader.uint32());
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventPriceData>): EventPriceData {
    const message = createBaseEventPriceData();
    message.source = object.source ?? "";
    message.id = object.id !== undefined && object.id !== null ? DataID.fromPartial(object.id) : undefined;
    message.price = object.price ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: EventPriceDataAmino): EventPriceData {
    const message = createBaseEventPriceData();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = DataID.fromAmino(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: EventPriceData): EventPriceDataAmino {
    const obj: any = {};
    obj.source = message.source ?? "";
    obj.id = message.id ? DataID.toAmino(message.id) : DataID.toAmino(DataID.fromPartial({}));
    obj.price = message.price ?? "";
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    return obj;
  },
  fromAminoMsg(object: EventPriceDataAminoMsg): EventPriceData {
    return EventPriceData.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPriceDataProtoMsg): EventPriceData {
    return EventPriceData.decode(message.value);
  },
  toProto(message: EventPriceData): Uint8Array {
    return EventPriceData.encode(message).finish();
  },
  toProtoMsg(message: EventPriceData): EventPriceDataProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.EventPriceData",
      value: EventPriceData.encode(message).finish()
    };
  }
};
function createBaseEventPriceStaleWarning(): EventPriceStaleWarning {
  return {
    id: DataID.fromPartial({}),
    lastHeight: BigInt(0),
    blocksToStall: BigInt(0)
  };
}
/**
 * EventPriceStaleWarning is emitted when price has not been updated and is about to become stale
 * @name EventPriceStaleWarning
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceStaleWarning
 */
export const EventPriceStaleWarning = {
  typeUrl: "/akash.oracle.v2.EventPriceStaleWarning",
  encode(message: EventPriceStaleWarning, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DataID.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.lastHeight);
    }
    if (message.blocksToStall !== BigInt(0)) {
      writer.uint32(32).int64(message.blocksToStall);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPriceStaleWarning {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPriceStaleWarning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = DataID.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastHeight = reader.int64();
          break;
        case 4:
          message.blocksToStall = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventPriceStaleWarning>): EventPriceStaleWarning {
    const message = createBaseEventPriceStaleWarning();
    message.id = object.id !== undefined && object.id !== null ? DataID.fromPartial(object.id) : undefined;
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
    message.blocksToStall = object.blocksToStall !== undefined && object.blocksToStall !== null ? BigInt(object.blocksToStall.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPriceStaleWarningAmino): EventPriceStaleWarning {
    const message = createBaseEventPriceStaleWarning();
    if (object.id !== undefined && object.id !== null) {
      message.id = DataID.fromAmino(object.id);
    }
    if (object.last_height !== undefined && object.last_height !== null) {
      message.lastHeight = BigInt(object.last_height);
    }
    if (object.blocks_to_stall !== undefined && object.blocks_to_stall !== null) {
      message.blocksToStall = BigInt(object.blocks_to_stall);
    }
    return message;
  },
  toAmino(message: EventPriceStaleWarning): EventPriceStaleWarningAmino {
    const obj: any = {};
    obj.id = message.id ? DataID.toAmino(message.id) : DataID.toAmino(DataID.fromPartial({}));
    obj.last_height = message.lastHeight ? message.lastHeight?.toString() : "0";
    obj.blocks_to_stall = message.blocksToStall ? message.blocksToStall?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventPriceStaleWarningAminoMsg): EventPriceStaleWarning {
    return EventPriceStaleWarning.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPriceStaleWarningProtoMsg): EventPriceStaleWarning {
    return EventPriceStaleWarning.decode(message.value);
  },
  toProto(message: EventPriceStaleWarning): Uint8Array {
    return EventPriceStaleWarning.encode(message).finish();
  },
  toProtoMsg(message: EventPriceStaleWarning): EventPriceStaleWarningProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.EventPriceStaleWarning",
      value: EventPriceStaleWarning.encode(message).finish()
    };
  }
};
function createBaseEventPriceStaled(): EventPriceStaled {
  return {
    id: DataID.fromPartial({}),
    lastHeight: BigInt(0)
  };
}
/**
 * EventPriceStaled is emitted when a price has become stale
 * @name EventPriceStaled
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceStaled
 */
export const EventPriceStaled = {
  typeUrl: "/akash.oracle.v2.EventPriceStaled",
  encode(message: EventPriceStaled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DataID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.lastHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPriceStaled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPriceStaled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DataID.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventPriceStaled>): EventPriceStaled {
    const message = createBaseEventPriceStaled();
    message.id = object.id !== undefined && object.id !== null ? DataID.fromPartial(object.id) : undefined;
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPriceStaledAmino): EventPriceStaled {
    const message = createBaseEventPriceStaled();
    if (object.id !== undefined && object.id !== null) {
      message.id = DataID.fromAmino(object.id);
    }
    if (object.last_height !== undefined && object.last_height !== null) {
      message.lastHeight = BigInt(object.last_height);
    }
    return message;
  },
  toAmino(message: EventPriceStaled): EventPriceStaledAmino {
    const obj: any = {};
    obj.id = message.id ? DataID.toAmino(message.id) : DataID.toAmino(DataID.fromPartial({}));
    obj.last_height = message.lastHeight ? message.lastHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventPriceStaledAminoMsg): EventPriceStaled {
    return EventPriceStaled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPriceStaledProtoMsg): EventPriceStaled {
    return EventPriceStaled.decode(message.value);
  },
  toProto(message: EventPriceStaled): Uint8Array {
    return EventPriceStaled.encode(message).finish();
  },
  toProtoMsg(message: EventPriceStaled): EventPriceStaledProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.EventPriceStaled",
      value: EventPriceStaled.encode(message).finish()
    };
  }
};
function createBaseEventPriceRecovered(): EventPriceRecovered {
  return {
    id: DataID.fromPartial({}),
    height: BigInt(0)
  };
}
/**
 * EventPriceRecovered is emitted when a stale price has started receiving updates again
 * @name EventPriceRecovered
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventPriceRecovered
 */
export const EventPriceRecovered = {
  typeUrl: "/akash.oracle.v2.EventPriceRecovered",
  encode(message: EventPriceRecovered, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DataID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPriceRecovered {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPriceRecovered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DataID.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventPriceRecovered>): EventPriceRecovered {
    const message = createBaseEventPriceRecovered();
    message.id = object.id !== undefined && object.id !== null ? DataID.fromPartial(object.id) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventPriceRecoveredAmino): EventPriceRecovered {
    const message = createBaseEventPriceRecovered();
    if (object.id !== undefined && object.id !== null) {
      message.id = DataID.fromAmino(object.id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: EventPriceRecovered): EventPriceRecoveredAmino {
    const obj: any = {};
    obj.id = message.id ? DataID.toAmino(message.id) : DataID.toAmino(DataID.fromPartial({}));
    obj.height = message.height ? message.height?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventPriceRecoveredAminoMsg): EventPriceRecovered {
    return EventPriceRecovered.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPriceRecoveredProtoMsg): EventPriceRecovered {
    return EventPriceRecovered.decode(message.value);
  },
  toProto(message: EventPriceRecovered): Uint8Array {
    return EventPriceRecovered.encode(message).finish();
  },
  toProtoMsg(message: EventPriceRecovered): EventPriceRecoveredProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.EventPriceRecovered",
      value: EventPriceRecovered.encode(message).finish()
    };
  }
};
function createBaseEventAggregatedPrice(): EventAggregatedPrice {
  return {
    price: AggregatedPrice.fromPartial({})
  };
}
/**
 * EventAggregatedPrice is emitted when aggregated price has an update
 * @name EventAggregatedPrice
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.EventAggregatedPrice
 */
export const EventAggregatedPrice = {
  typeUrl: "/akash.oracle.v2.EventAggregatedPrice",
  encode(message: EventAggregatedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      AggregatedPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAggregatedPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAggregatedPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = AggregatedPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAggregatedPrice>): EventAggregatedPrice {
    const message = createBaseEventAggregatedPrice();
    message.price = object.price !== undefined && object.price !== null ? AggregatedPrice.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: EventAggregatedPriceAmino): EventAggregatedPrice {
    const message = createBaseEventAggregatedPrice();
    if (object.price !== undefined && object.price !== null) {
      message.price = AggregatedPrice.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: EventAggregatedPrice): EventAggregatedPriceAmino {
    const obj: any = {};
    obj.price = message.price ? AggregatedPrice.toAmino(message.price) : AggregatedPrice.toAmino(AggregatedPrice.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventAggregatedPriceAminoMsg): EventAggregatedPrice {
    return EventAggregatedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAggregatedPriceProtoMsg): EventAggregatedPrice {
    return EventAggregatedPrice.decode(message.value);
  },
  toProto(message: EventAggregatedPrice): Uint8Array {
    return EventAggregatedPrice.encode(message).finish();
  },
  toProtoMsg(message: EventAggregatedPrice): EventAggregatedPriceProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.EventAggregatedPrice",
      value: EventAggregatedPrice.encode(message).finish()
    };
  }
};