//@ts-nocheck
import { TransitionPhase } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * TransitionRecoveryState tracks recovery from failed season transitions.
 * @name TransitionRecoveryState
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.TransitionRecoveryState
 */
export interface TransitionRecoveryState {
  /**
   * Block of the last recovery attempt
   */
  lastAttemptBlock: bigint;
  /**
   * Phase where the transition failed
   */
  failedPhase: TransitionPhase;
  /**
   * Number of consecutive failures
   */
  failureCount: bigint;
  /**
   * Error message from last failure
   */
  lastError: string;
  /**
   * Whether recovery mode is active
   */
  recoveryMode: boolean;
}
export interface TransitionRecoveryStateProtoMsg {
  typeUrl: "/sparkdream.season.v1.TransitionRecoveryState";
  value: Uint8Array;
}
/**
 * TransitionRecoveryState tracks recovery from failed season transitions.
 * @name TransitionRecoveryStateAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.TransitionRecoveryState
 */
export interface TransitionRecoveryStateAmino {
  /**
   * Block of the last recovery attempt
   */
  last_attempt_block?: string;
  /**
   * Phase where the transition failed
   */
  failed_phase?: TransitionPhase;
  /**
   * Number of consecutive failures
   */
  failure_count?: string;
  /**
   * Error message from last failure
   */
  last_error?: string;
  /**
   * Whether recovery mode is active
   */
  recovery_mode?: boolean;
}
export interface TransitionRecoveryStateAminoMsg {
  type: "/sparkdream.season.v1.TransitionRecoveryState";
  value: TransitionRecoveryStateAmino;
}
function createBaseTransitionRecoveryState(): TransitionRecoveryState {
  return {
    lastAttemptBlock: BigInt(0),
    failedPhase: 0,
    failureCount: BigInt(0),
    lastError: "",
    recoveryMode: false
  };
}
/**
 * TransitionRecoveryState tracks recovery from failed season transitions.
 * @name TransitionRecoveryState
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.TransitionRecoveryState
 */
export const TransitionRecoveryState = {
  typeUrl: "/sparkdream.season.v1.TransitionRecoveryState",
  encode(message: TransitionRecoveryState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastAttemptBlock !== BigInt(0)) {
      writer.uint32(8).int64(message.lastAttemptBlock);
    }
    if (message.failedPhase !== 0) {
      writer.uint32(16).int32(message.failedPhase);
    }
    if (message.failureCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.failureCount);
    }
    if (message.lastError !== "") {
      writer.uint32(34).string(message.lastError);
    }
    if (message.recoveryMode === true) {
      writer.uint32(40).bool(message.recoveryMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransitionRecoveryState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransitionRecoveryState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastAttemptBlock = reader.int64();
          break;
        case 2:
          message.failedPhase = reader.int32() as any;
          break;
        case 3:
          message.failureCount = reader.uint64();
          break;
        case 4:
          message.lastError = reader.string();
          break;
        case 5:
          message.recoveryMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransitionRecoveryState>): TransitionRecoveryState {
    const message = createBaseTransitionRecoveryState();
    message.lastAttemptBlock = object.lastAttemptBlock !== undefined && object.lastAttemptBlock !== null ? BigInt(object.lastAttemptBlock.toString()) : BigInt(0);
    message.failedPhase = object.failedPhase ?? 0;
    message.failureCount = object.failureCount !== undefined && object.failureCount !== null ? BigInt(object.failureCount.toString()) : BigInt(0);
    message.lastError = object.lastError ?? "";
    message.recoveryMode = object.recoveryMode ?? false;
    return message;
  },
  fromAmino(object: TransitionRecoveryStateAmino): TransitionRecoveryState {
    const message = createBaseTransitionRecoveryState();
    if (object.last_attempt_block !== undefined && object.last_attempt_block !== null) {
      message.lastAttemptBlock = BigInt(object.last_attempt_block);
    }
    if (object.failed_phase !== undefined && object.failed_phase !== null) {
      message.failedPhase = object.failed_phase;
    }
    if (object.failure_count !== undefined && object.failure_count !== null) {
      message.failureCount = BigInt(object.failure_count);
    }
    if (object.last_error !== undefined && object.last_error !== null) {
      message.lastError = object.last_error;
    }
    if (object.recovery_mode !== undefined && object.recovery_mode !== null) {
      message.recoveryMode = object.recovery_mode;
    }
    return message;
  },
  toAmino(message: TransitionRecoveryState): TransitionRecoveryStateAmino {
    const obj: any = {};
    obj.last_attempt_block = message.lastAttemptBlock !== BigInt(0) ? message.lastAttemptBlock?.toString() : undefined;
    obj.failed_phase = message.failedPhase === 0 ? undefined : message.failedPhase;
    obj.failure_count = message.failureCount !== BigInt(0) ? message.failureCount?.toString() : undefined;
    obj.last_error = message.lastError === "" ? undefined : message.lastError;
    obj.recovery_mode = message.recoveryMode === false ? undefined : message.recoveryMode;
    return obj;
  },
  fromAminoMsg(object: TransitionRecoveryStateAminoMsg): TransitionRecoveryState {
    return TransitionRecoveryState.fromAmino(object.value);
  },
  fromProtoMsg(message: TransitionRecoveryStateProtoMsg): TransitionRecoveryState {
    return TransitionRecoveryState.decode(message.value);
  },
  toProto(message: TransitionRecoveryState): Uint8Array {
    return TransitionRecoveryState.encode(message).finish();
  },
  toProtoMsg(message: TransitionRecoveryState): TransitionRecoveryStateProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.TransitionRecoveryState",
      value: TransitionRecoveryState.encode(message).finish()
    };
  }
};