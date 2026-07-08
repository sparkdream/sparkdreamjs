//@ts-nocheck
import { Downtime } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/**
 * GenesisDowntimeEntry tracks the last occurrence of a specific downtime duration
 * @name GenesisDowntimeEntry
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.GenesisDowntimeEntry
 */
export interface GenesisDowntimeEntry {
  /**
   * duration is the downtime period being tracked
   */
  duration: Downtime;
  /**
   * last_downtime is the timestamp when this downtime duration was last observed
   */
  lastDowntime: Date;
}
export interface GenesisDowntimeEntryProtoMsg {
  typeUrl: "/akash.downtimedetector.v1beta1.GenesisDowntimeEntry";
  value: Uint8Array;
}
/**
 * GenesisDowntimeEntry tracks the last occurrence of a specific downtime duration
 * @name GenesisDowntimeEntryAmino
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.GenesisDowntimeEntry
 */
export interface GenesisDowntimeEntryAmino {
  /**
   * duration is the downtime period being tracked
   */
  duration?: Downtime;
  /**
   * last_downtime is the timestamp when this downtime duration was last observed
   */
  last_downtime?: string;
}
export interface GenesisDowntimeEntryAminoMsg {
  type: "/akash.downtimedetector.v1beta1.GenesisDowntimeEntry";
  value: GenesisDowntimeEntryAmino;
}
/**
 * GenesisState defines the downtime detector module's genesis state
 * @name GenesisState
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * downtimes is the list of tracked downtime entries
   */
  downtimes: GenesisDowntimeEntry[];
  /**
   * last_block_time is the timestamp of the last processed block
   */
  lastBlockTime: Date;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.downtimedetector.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the downtime detector module's genesis state
 * @name GenesisStateAmino
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * downtimes is the list of tracked downtime entries
   */
  downtimes?: GenesisDowntimeEntryAmino[];
  /**
   * last_block_time is the timestamp of the last processed block
   */
  last_block_time?: string;
}
export interface GenesisStateAminoMsg {
  type: "/akash.downtimedetector.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisDowntimeEntry(): GenesisDowntimeEntry {
  return {
    duration: 0,
    lastDowntime: new Date()
  };
}
/**
 * GenesisDowntimeEntry tracks the last occurrence of a specific downtime duration
 * @name GenesisDowntimeEntry
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.GenesisDowntimeEntry
 */
export const GenesisDowntimeEntry = {
  typeUrl: "/akash.downtimedetector.v1beta1.GenesisDowntimeEntry",
  encode(message: GenesisDowntimeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.lastDowntime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDowntime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDowntimeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDowntimeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32() as any;
          break;
        case 2:
          message.lastDowntime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisDowntimeEntry>): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    message.duration = object.duration ?? 0;
    message.lastDowntime = object.lastDowntime ?? undefined;
    return message;
  },
  fromAmino(object: GenesisDowntimeEntryAmino): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.last_downtime !== undefined && object.last_downtime !== null) {
      message.lastDowntime = fromTimestamp(Timestamp.fromAmino(object.last_downtime));
    }
    return message;
  },
  toAmino(message: GenesisDowntimeEntry): GenesisDowntimeEntryAmino {
    const obj: any = {};
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.last_downtime = message.lastDowntime ? Timestamp.toAmino(toTimestamp(message.lastDowntime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisDowntimeEntryAminoMsg): GenesisDowntimeEntry {
    return GenesisDowntimeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisDowntimeEntryProtoMsg): GenesisDowntimeEntry {
    return GenesisDowntimeEntry.decode(message.value);
  },
  toProto(message: GenesisDowntimeEntry): Uint8Array {
    return GenesisDowntimeEntry.encode(message).finish();
  },
  toProtoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryProtoMsg {
    return {
      typeUrl: "/akash.downtimedetector.v1beta1.GenesisDowntimeEntry",
      value: GenesisDowntimeEntry.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    downtimes: [],
    lastBlockTime: new Date()
  };
}
/**
 * GenesisState defines the downtime detector module's genesis state
 * @name GenesisState
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.downtimedetector.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromAmino(e)) || [];
    if (object.last_block_time !== undefined && object.last_block_time !== null) {
      message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time));
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toAmino(e) : undefined);
    } else {
      obj.downtimes = message.downtimes;
    }
    obj.last_block_time = message.lastBlockTime ? Timestamp.toAmino(toTimestamp(message.lastBlockTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.downtimedetector.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};