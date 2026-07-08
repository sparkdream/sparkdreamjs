//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventEpochEnd is an event emitted when an epoch end.
 * @name EventEpochEnd
 * @package akash.epochs.v1beta1
 * @see proto type: akash.epochs.v1beta1.EventEpochEnd
 */
export interface EventEpochEnd {
  epochNumber: bigint;
}
export interface EventEpochEndProtoMsg {
  typeUrl: "/akash.epochs.v1beta1.EventEpochEnd";
  value: Uint8Array;
}
/**
 * EventEpochEnd is an event emitted when an epoch end.
 * @name EventEpochEndAmino
 * @package akash.epochs.v1beta1
 * @see proto type: akash.epochs.v1beta1.EventEpochEnd
 */
export interface EventEpochEndAmino {
  epoch_number?: string;
}
export interface EventEpochEndAminoMsg {
  type: "/akash.epochs.v1beta1.EventEpochEnd";
  value: EventEpochEndAmino;
}
/**
 * EventEpochStart is an event emitted when an epoch start.
 * @name EventEpochStart
 * @package akash.epochs.v1beta1
 * @see proto type: akash.epochs.v1beta1.EventEpochStart
 */
export interface EventEpochStart {
  epochNumber: bigint;
  epochStartTime: bigint;
}
export interface EventEpochStartProtoMsg {
  typeUrl: "/akash.epochs.v1beta1.EventEpochStart";
  value: Uint8Array;
}
/**
 * EventEpochStart is an event emitted when an epoch start.
 * @name EventEpochStartAmino
 * @package akash.epochs.v1beta1
 * @see proto type: akash.epochs.v1beta1.EventEpochStart
 */
export interface EventEpochStartAmino {
  epoch_number?: string;
  epoch_start_time?: string;
}
export interface EventEpochStartAminoMsg {
  type: "/akash.epochs.v1beta1.EventEpochStart";
  value: EventEpochStartAmino;
}
function createBaseEventEpochEnd(): EventEpochEnd {
  return {
    epochNumber: BigInt(0)
  };
}
/**
 * EventEpochEnd is an event emitted when an epoch end.
 * @name EventEpochEnd
 * @package akash.epochs.v1beta1
 * @see proto type: akash.epochs.v1beta1.EventEpochEnd
 */
export const EventEpochEnd = {
  typeUrl: "/akash.epochs.v1beta1.EventEpochEnd",
  encode(message: EventEpochEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEpochEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventEpochEnd>): EventEpochEnd {
    const message = createBaseEventEpochEnd();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventEpochEndAmino): EventEpochEnd {
    const message = createBaseEventEpochEnd();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: EventEpochEnd): EventEpochEndAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventEpochEndAminoMsg): EventEpochEnd {
    return EventEpochEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEpochEndProtoMsg): EventEpochEnd {
    return EventEpochEnd.decode(message.value);
  },
  toProto(message: EventEpochEnd): Uint8Array {
    return EventEpochEnd.encode(message).finish();
  },
  toProtoMsg(message: EventEpochEnd): EventEpochEndProtoMsg {
    return {
      typeUrl: "/akash.epochs.v1beta1.EventEpochEnd",
      value: EventEpochEnd.encode(message).finish()
    };
  }
};
function createBaseEventEpochStart(): EventEpochStart {
  return {
    epochNumber: BigInt(0),
    epochStartTime: BigInt(0)
  };
}
/**
 * EventEpochStart is an event emitted when an epoch start.
 * @name EventEpochStart
 * @package akash.epochs.v1beta1
 * @see proto type: akash.epochs.v1beta1.EventEpochStart
 */
export const EventEpochStart = {
  typeUrl: "/akash.epochs.v1beta1.EventEpochStart",
  encode(message: EventEpochStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.epochStartTime !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEpochStart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.epochStartTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventEpochStart>): EventEpochStart {
    const message = createBaseEventEpochStart();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.epochStartTime = object.epochStartTime !== undefined && object.epochStartTime !== null ? BigInt(object.epochStartTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventEpochStartAmino): EventEpochStart {
    const message = createBaseEventEpochStart();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.epoch_start_time !== undefined && object.epoch_start_time !== null) {
      message.epochStartTime = BigInt(object.epoch_start_time);
    }
    return message;
  },
  toAmino(message: EventEpochStart): EventEpochStartAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    obj.epoch_start_time = message.epochStartTime !== BigInt(0) ? message.epochStartTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventEpochStartAminoMsg): EventEpochStart {
    return EventEpochStart.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEpochStartProtoMsg): EventEpochStart {
    return EventEpochStart.decode(message.value);
  },
  toProto(message: EventEpochStart): Uint8Array {
    return EventEpochStart.encode(message).finish();
  },
  toProtoMsg(message: EventEpochStart): EventEpochStartProtoMsg {
    return {
      typeUrl: "/akash.epochs.v1beta1.EventEpochStart",
      value: EventEpochStart.encode(message).finish()
    };
  }
};