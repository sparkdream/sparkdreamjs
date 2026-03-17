//@ts-nocheck
import { TransitionPhase } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * SeasonTransitionState tracks the progress of a season transition.
 * @name SeasonTransitionState
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonTransitionState
 */
export interface SeasonTransitionState {
  /**
   * Current transition phase
   */
  phase: TransitionPhase;
  /**
   * Number of items processed in current phase
   */
  processedCount: bigint;
  /**
   * Total items to process in current phase
   */
  totalCount: bigint;
  /**
   * Last processed item identifier
   */
  lastProcessed: string;
  /**
   * Block when transition started
   */
  transitionStart: bigint;
  /**
   * Whether the chain is in maintenance mode
   */
  maintenanceMode: boolean;
}
export interface SeasonTransitionStateProtoMsg {
  typeUrl: "/sparkdream.season.v1.SeasonTransitionState";
  value: Uint8Array;
}
/**
 * SeasonTransitionState tracks the progress of a season transition.
 * @name SeasonTransitionStateAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonTransitionState
 */
export interface SeasonTransitionStateAmino {
  /**
   * Current transition phase
   */
  phase?: TransitionPhase;
  /**
   * Number of items processed in current phase
   */
  processed_count?: string;
  /**
   * Total items to process in current phase
   */
  total_count?: string;
  /**
   * Last processed item identifier
   */
  last_processed?: string;
  /**
   * Block when transition started
   */
  transition_start?: string;
  /**
   * Whether the chain is in maintenance mode
   */
  maintenance_mode?: boolean;
}
export interface SeasonTransitionStateAminoMsg {
  type: "/sparkdream.season.v1.SeasonTransitionState";
  value: SeasonTransitionStateAmino;
}
function createBaseSeasonTransitionState(): SeasonTransitionState {
  return {
    phase: 0,
    processedCount: BigInt(0),
    totalCount: BigInt(0),
    lastProcessed: "",
    transitionStart: BigInt(0),
    maintenanceMode: false
  };
}
/**
 * SeasonTransitionState tracks the progress of a season transition.
 * @name SeasonTransitionState
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonTransitionState
 */
export const SeasonTransitionState = {
  typeUrl: "/sparkdream.season.v1.SeasonTransitionState",
  encode(message: SeasonTransitionState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.phase !== 0) {
      writer.uint32(8).int32(message.phase);
    }
    if (message.processedCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.processedCount);
    }
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalCount);
    }
    if (message.lastProcessed !== "") {
      writer.uint32(34).string(message.lastProcessed);
    }
    if (message.transitionStart !== BigInt(0)) {
      writer.uint32(40).int64(message.transitionStart);
    }
    if (message.maintenanceMode === true) {
      writer.uint32(48).bool(message.maintenanceMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SeasonTransitionState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonTransitionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phase = reader.int32() as any;
          break;
        case 2:
          message.processedCount = reader.uint64();
          break;
        case 3:
          message.totalCount = reader.uint64();
          break;
        case 4:
          message.lastProcessed = reader.string();
          break;
        case 5:
          message.transitionStart = reader.int64();
          break;
        case 6:
          message.maintenanceMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SeasonTransitionState>): SeasonTransitionState {
    const message = createBaseSeasonTransitionState();
    message.phase = object.phase ?? 0;
    message.processedCount = object.processedCount !== undefined && object.processedCount !== null ? BigInt(object.processedCount.toString()) : BigInt(0);
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.lastProcessed = object.lastProcessed ?? "";
    message.transitionStart = object.transitionStart !== undefined && object.transitionStart !== null ? BigInt(object.transitionStart.toString()) : BigInt(0);
    message.maintenanceMode = object.maintenanceMode ?? false;
    return message;
  },
  fromAmino(object: SeasonTransitionStateAmino): SeasonTransitionState {
    const message = createBaseSeasonTransitionState();
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    }
    if (object.processed_count !== undefined && object.processed_count !== null) {
      message.processedCount = BigInt(object.processed_count);
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.last_processed !== undefined && object.last_processed !== null) {
      message.lastProcessed = object.last_processed;
    }
    if (object.transition_start !== undefined && object.transition_start !== null) {
      message.transitionStart = BigInt(object.transition_start);
    }
    if (object.maintenance_mode !== undefined && object.maintenance_mode !== null) {
      message.maintenanceMode = object.maintenance_mode;
    }
    return message;
  },
  toAmino(message: SeasonTransitionState): SeasonTransitionStateAmino {
    const obj: any = {};
    obj.phase = message.phase === 0 ? undefined : message.phase;
    obj.processed_count = message.processedCount !== BigInt(0) ? message.processedCount?.toString() : undefined;
    obj.total_count = message.totalCount !== BigInt(0) ? message.totalCount?.toString() : undefined;
    obj.last_processed = message.lastProcessed === "" ? undefined : message.lastProcessed;
    obj.transition_start = message.transitionStart !== BigInt(0) ? message.transitionStart?.toString() : undefined;
    obj.maintenance_mode = message.maintenanceMode === false ? undefined : message.maintenanceMode;
    return obj;
  },
  fromAminoMsg(object: SeasonTransitionStateAminoMsg): SeasonTransitionState {
    return SeasonTransitionState.fromAmino(object.value);
  },
  fromProtoMsg(message: SeasonTransitionStateProtoMsg): SeasonTransitionState {
    return SeasonTransitionState.decode(message.value);
  },
  toProto(message: SeasonTransitionState): Uint8Array {
    return SeasonTransitionState.encode(message).finish();
  },
  toProtoMsg(message: SeasonTransitionState): SeasonTransitionStateProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.SeasonTransitionState",
      value: SeasonTransitionState.encode(message).finish()
    };
  }
};