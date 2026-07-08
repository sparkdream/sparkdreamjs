//@ts-nocheck
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { LeaseClosedReason } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Reclamation defines the runtime reclamation state stored on a Lease.
 * @name Reclamation
 * @package akash.market.v1
 * @see proto type: akash.market.v1.Reclamation
 */
export interface Reclamation {
  /**
   * window is the negotiated reclamation window duration (from the winning bid).
   */
  window: Duration;
  /**
   * started_at is the block height at which reclamation was initiated.
   * Zero means reclamation has not been started yet.
   */
  startedAt: bigint;
  /**
   * deadline is the unix timestamp at which the reclamation window expires.
   * Zero means reclamation has not been started yet.
   */
  deadline: bigint;
  /**
   * reason is the provider's stated reason for reclamation.
   */
  reason: LeaseClosedReason;
}
export interface ReclamationProtoMsg {
  typeUrl: "/akash.market.v1.Reclamation";
  value: Uint8Array;
}
/**
 * Reclamation defines the runtime reclamation state stored on a Lease.
 * @name ReclamationAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.Reclamation
 */
export interface ReclamationAmino {
  /**
   * window is the negotiated reclamation window duration (from the winning bid).
   */
  window: DurationAmino;
  /**
   * started_at is the block height at which reclamation was initiated.
   * Zero means reclamation has not been started yet.
   */
  started_at: string;
  /**
   * deadline is the unix timestamp at which the reclamation window expires.
   * Zero means reclamation has not been started yet.
   */
  deadline: string;
  /**
   * reason is the provider's stated reason for reclamation.
   */
  reason: LeaseClosedReason;
}
export interface ReclamationAminoMsg {
  type: "/akash.market.v1.Reclamation";
  value: ReclamationAmino;
}
function createBaseReclamation(): Reclamation {
  return {
    window: Duration.fromPartial({}),
    startedAt: BigInt(0),
    deadline: BigInt(0),
    reason: 0
  };
}
/**
 * Reclamation defines the runtime reclamation state stored on a Lease.
 * @name Reclamation
 * @package akash.market.v1
 * @see proto type: akash.market.v1.Reclamation
 */
export const Reclamation = {
  typeUrl: "/akash.market.v1.Reclamation",
  encode(message: Reclamation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(10).fork()).ldelim();
    }
    if (message.startedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.startedAt);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(24).int64(message.deadline);
    }
    if (message.reason !== 0) {
      writer.uint32(32).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Reclamation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReclamation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.window = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.startedAt = reader.int64();
          break;
        case 3:
          message.deadline = reader.int64();
          break;
        case 4:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Reclamation>): Reclamation {
    const message = createBaseReclamation();
    message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? BigInt(object.startedAt.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: ReclamationAmino): Reclamation {
    const message = createBaseReclamation();
    if (object.window !== undefined && object.window !== null) {
      message.window = Duration.fromAmino(object.window);
    }
    if (object.started_at !== undefined && object.started_at !== null) {
      message.startedAt = BigInt(object.started_at);
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: Reclamation): ReclamationAmino {
    const obj: any = {};
    obj.window = message.window ? Duration.toAmino(message.window) : Duration.toAmino(Duration.fromPartial({}));
    obj.started_at = message.startedAt ? message.startedAt?.toString() : "0";
    obj.deadline = message.deadline ? message.deadline?.toString() : "0";
    obj.reason = message.reason ?? 0;
    return obj;
  },
  fromAminoMsg(object: ReclamationAminoMsg): Reclamation {
    return Reclamation.fromAmino(object.value);
  },
  fromProtoMsg(message: ReclamationProtoMsg): Reclamation {
    return Reclamation.decode(message.value);
  },
  toProto(message: Reclamation): Uint8Array {
    return Reclamation.encode(message).finish();
  },
  toProtoMsg(message: Reclamation): ReclamationProtoMsg {
    return {
      typeUrl: "/akash.market.v1.Reclamation",
      value: Reclamation.encode(message).finish()
    };
  }
};