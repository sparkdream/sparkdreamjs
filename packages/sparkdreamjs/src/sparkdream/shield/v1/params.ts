//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the shield module.
 * @name Params
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.Params
 */
export interface Params {
  /**
   * Whether shielded execution is enabled globally
   */
  enabled: boolean;
  /**
   * Maximum uspark to skim from community pool per day (14400 blocks at 6s/block)
   */
  maxFundingPerDay: string;
  /**
   * Target minimum balance for the shield module account
   */
  minGasReserve: string;
  /**
   * Maximum gas allowed per shielded execution
   */
  maxGasPerExec: bigint;
  /**
   * Per-identity rate limit: max shielded executions per epoch per nullifier-identity
   */
  maxExecsPerIdentityPerEpoch: bigint;
  /**
   * Whether encrypted batch mode is enabled (requires TLE DKG ceremony completed)
   */
  encryptedBatchEnabled: boolean;
  /**
   * Shield epoch interval in blocks
   */
  shieldEpochInterval: bigint;
  /**
   * Minimum number of operations in a batch before it executes
   */
  minBatchSize: number;
  /**
   * Maximum epochs an operation can remain pending before force-executing
   */
  maxPendingEpochs: number;
  /**
   * Maximum number of pending operations in the queue
   */
  maxPendingQueueSize: number;
  /**
   * Maximum size of encrypted_payload in bytes
   */
  maxEncryptedPayloadSize: number;
  /**
   * Maximum operations to execute in a single EndBlocker batch
   */
  maxOpsPerBatch: number;
  /**
   * Rolling window in shield epochs for tracking validator TLE misses
   */
  tleMissWindow: bigint;
  /**
   * Max misses within window before validator is jailed
   */
  tleMissTolerance: bigint;
  /**
   * Jail duration in seconds for TLE liveness violations
   */
  tleJailDuration: bigint;
  /**
   * Minimum bonded validators required to auto-open a DKG ceremony
   */
  minTleValidators: number;
  /**
   * Total DKG window in blocks (split: first half = key registration, second half = contributions)
   */
  dkgWindowBlocks: bigint;
  /**
   * Validator set drift percentage (0-100) that triggers automatic re-keying.
   * e.g. 33 means re-key if >33% of DKG participants are no longer in the bonded set.
   */
  maxValidatorSetDrift: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.shield.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the shield module.
 * @name ParamsAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.Params
 */
export interface ParamsAmino {
  /**
   * Whether shielded execution is enabled globally
   */
  enabled?: boolean;
  /**
   * Maximum uspark to skim from community pool per day (14400 blocks at 6s/block)
   */
  max_funding_per_day?: string;
  /**
   * Target minimum balance for the shield module account
   */
  min_gas_reserve?: string;
  /**
   * Maximum gas allowed per shielded execution
   */
  max_gas_per_exec?: string;
  /**
   * Per-identity rate limit: max shielded executions per epoch per nullifier-identity
   */
  max_execs_per_identity_per_epoch?: string;
  /**
   * Whether encrypted batch mode is enabled (requires TLE DKG ceremony completed)
   */
  encrypted_batch_enabled?: boolean;
  /**
   * Shield epoch interval in blocks
   */
  shield_epoch_interval?: string;
  /**
   * Minimum number of operations in a batch before it executes
   */
  min_batch_size?: number;
  /**
   * Maximum epochs an operation can remain pending before force-executing
   */
  max_pending_epochs?: number;
  /**
   * Maximum number of pending operations in the queue
   */
  max_pending_queue_size?: number;
  /**
   * Maximum size of encrypted_payload in bytes
   */
  max_encrypted_payload_size?: number;
  /**
   * Maximum operations to execute in a single EndBlocker batch
   */
  max_ops_per_batch?: number;
  /**
   * Rolling window in shield epochs for tracking validator TLE misses
   */
  tle_miss_window?: string;
  /**
   * Max misses within window before validator is jailed
   */
  tle_miss_tolerance?: string;
  /**
   * Jail duration in seconds for TLE liveness violations
   */
  tle_jail_duration?: string;
  /**
   * Minimum bonded validators required to auto-open a DKG ceremony
   */
  min_tle_validators?: number;
  /**
   * Total DKG window in blocks (split: first half = key registration, second half = contributions)
   */
  dkg_window_blocks?: string;
  /**
   * Validator set drift percentage (0-100) that triggers automatic re-keying.
   * e.g. 33 means re-key if >33% of DKG participants are no longer in the bonded set.
   */
  max_validator_set_drift?: number;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/shield/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    maxFundingPerDay: "",
    minGasReserve: "",
    maxGasPerExec: BigInt(0),
    maxExecsPerIdentityPerEpoch: BigInt(0),
    encryptedBatchEnabled: false,
    shieldEpochInterval: BigInt(0),
    minBatchSize: 0,
    maxPendingEpochs: 0,
    maxPendingQueueSize: 0,
    maxEncryptedPayloadSize: 0,
    maxOpsPerBatch: 0,
    tleMissWindow: BigInt(0),
    tleMissTolerance: BigInt(0),
    tleJailDuration: BigInt(0),
    minTleValidators: 0,
    dkgWindowBlocks: BigInt(0),
    maxValidatorSetDrift: 0
  };
}
/**
 * Params defines the parameters for the shield module.
 * @name Params
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.shield.v1.Params",
  aminoType: "sparkdream/x/shield/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.maxFundingPerDay !== "") {
      writer.uint32(18).string(message.maxFundingPerDay);
    }
    if (message.minGasReserve !== "") {
      writer.uint32(26).string(message.minGasReserve);
    }
    if (message.maxGasPerExec !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxGasPerExec);
    }
    if (message.maxExecsPerIdentityPerEpoch !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxExecsPerIdentityPerEpoch);
    }
    if (message.encryptedBatchEnabled === true) {
      writer.uint32(48).bool(message.encryptedBatchEnabled);
    }
    if (message.shieldEpochInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.shieldEpochInterval);
    }
    if (message.minBatchSize !== 0) {
      writer.uint32(64).uint32(message.minBatchSize);
    }
    if (message.maxPendingEpochs !== 0) {
      writer.uint32(72).uint32(message.maxPendingEpochs);
    }
    if (message.maxPendingQueueSize !== 0) {
      writer.uint32(80).uint32(message.maxPendingQueueSize);
    }
    if (message.maxEncryptedPayloadSize !== 0) {
      writer.uint32(88).uint32(message.maxEncryptedPayloadSize);
    }
    if (message.maxOpsPerBatch !== 0) {
      writer.uint32(96).uint32(message.maxOpsPerBatch);
    }
    if (message.tleMissWindow !== BigInt(0)) {
      writer.uint32(104).uint64(message.tleMissWindow);
    }
    if (message.tleMissTolerance !== BigInt(0)) {
      writer.uint32(112).uint64(message.tleMissTolerance);
    }
    if (message.tleJailDuration !== BigInt(0)) {
      writer.uint32(120).int64(message.tleJailDuration);
    }
    if (message.minTleValidators !== 0) {
      writer.uint32(128).uint32(message.minTleValidators);
    }
    if (message.dkgWindowBlocks !== BigInt(0)) {
      writer.uint32(136).uint64(message.dkgWindowBlocks);
    }
    if (message.maxValidatorSetDrift !== 0) {
      writer.uint32(144).uint32(message.maxValidatorSetDrift);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.maxFundingPerDay = reader.string();
          break;
        case 3:
          message.minGasReserve = reader.string();
          break;
        case 4:
          message.maxGasPerExec = reader.uint64();
          break;
        case 5:
          message.maxExecsPerIdentityPerEpoch = reader.uint64();
          break;
        case 6:
          message.encryptedBatchEnabled = reader.bool();
          break;
        case 7:
          message.shieldEpochInterval = reader.uint64();
          break;
        case 8:
          message.minBatchSize = reader.uint32();
          break;
        case 9:
          message.maxPendingEpochs = reader.uint32();
          break;
        case 10:
          message.maxPendingQueueSize = reader.uint32();
          break;
        case 11:
          message.maxEncryptedPayloadSize = reader.uint32();
          break;
        case 12:
          message.maxOpsPerBatch = reader.uint32();
          break;
        case 13:
          message.tleMissWindow = reader.uint64();
          break;
        case 14:
          message.tleMissTolerance = reader.uint64();
          break;
        case 15:
          message.tleJailDuration = reader.int64();
          break;
        case 16:
          message.minTleValidators = reader.uint32();
          break;
        case 17:
          message.dkgWindowBlocks = reader.uint64();
          break;
        case 18:
          message.maxValidatorSetDrift = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.maxFundingPerDay = object.maxFundingPerDay ?? "";
    message.minGasReserve = object.minGasReserve ?? "";
    message.maxGasPerExec = object.maxGasPerExec !== undefined && object.maxGasPerExec !== null ? BigInt(object.maxGasPerExec.toString()) : BigInt(0);
    message.maxExecsPerIdentityPerEpoch = object.maxExecsPerIdentityPerEpoch !== undefined && object.maxExecsPerIdentityPerEpoch !== null ? BigInt(object.maxExecsPerIdentityPerEpoch.toString()) : BigInt(0);
    message.encryptedBatchEnabled = object.encryptedBatchEnabled ?? false;
    message.shieldEpochInterval = object.shieldEpochInterval !== undefined && object.shieldEpochInterval !== null ? BigInt(object.shieldEpochInterval.toString()) : BigInt(0);
    message.minBatchSize = object.minBatchSize ?? 0;
    message.maxPendingEpochs = object.maxPendingEpochs ?? 0;
    message.maxPendingQueueSize = object.maxPendingQueueSize ?? 0;
    message.maxEncryptedPayloadSize = object.maxEncryptedPayloadSize ?? 0;
    message.maxOpsPerBatch = object.maxOpsPerBatch ?? 0;
    message.tleMissWindow = object.tleMissWindow !== undefined && object.tleMissWindow !== null ? BigInt(object.tleMissWindow.toString()) : BigInt(0);
    message.tleMissTolerance = object.tleMissTolerance !== undefined && object.tleMissTolerance !== null ? BigInt(object.tleMissTolerance.toString()) : BigInt(0);
    message.tleJailDuration = object.tleJailDuration !== undefined && object.tleJailDuration !== null ? BigInt(object.tleJailDuration.toString()) : BigInt(0);
    message.minTleValidators = object.minTleValidators ?? 0;
    message.dkgWindowBlocks = object.dkgWindowBlocks !== undefined && object.dkgWindowBlocks !== null ? BigInt(object.dkgWindowBlocks.toString()) : BigInt(0);
    message.maxValidatorSetDrift = object.maxValidatorSetDrift ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.max_funding_per_day !== undefined && object.max_funding_per_day !== null) {
      message.maxFundingPerDay = object.max_funding_per_day;
    }
    if (object.min_gas_reserve !== undefined && object.min_gas_reserve !== null) {
      message.minGasReserve = object.min_gas_reserve;
    }
    if (object.max_gas_per_exec !== undefined && object.max_gas_per_exec !== null) {
      message.maxGasPerExec = BigInt(object.max_gas_per_exec);
    }
    if (object.max_execs_per_identity_per_epoch !== undefined && object.max_execs_per_identity_per_epoch !== null) {
      message.maxExecsPerIdentityPerEpoch = BigInt(object.max_execs_per_identity_per_epoch);
    }
    if (object.encrypted_batch_enabled !== undefined && object.encrypted_batch_enabled !== null) {
      message.encryptedBatchEnabled = object.encrypted_batch_enabled;
    }
    if (object.shield_epoch_interval !== undefined && object.shield_epoch_interval !== null) {
      message.shieldEpochInterval = BigInt(object.shield_epoch_interval);
    }
    if (object.min_batch_size !== undefined && object.min_batch_size !== null) {
      message.minBatchSize = object.min_batch_size;
    }
    if (object.max_pending_epochs !== undefined && object.max_pending_epochs !== null) {
      message.maxPendingEpochs = object.max_pending_epochs;
    }
    if (object.max_pending_queue_size !== undefined && object.max_pending_queue_size !== null) {
      message.maxPendingQueueSize = object.max_pending_queue_size;
    }
    if (object.max_encrypted_payload_size !== undefined && object.max_encrypted_payload_size !== null) {
      message.maxEncryptedPayloadSize = object.max_encrypted_payload_size;
    }
    if (object.max_ops_per_batch !== undefined && object.max_ops_per_batch !== null) {
      message.maxOpsPerBatch = object.max_ops_per_batch;
    }
    if (object.tle_miss_window !== undefined && object.tle_miss_window !== null) {
      message.tleMissWindow = BigInt(object.tle_miss_window);
    }
    if (object.tle_miss_tolerance !== undefined && object.tle_miss_tolerance !== null) {
      message.tleMissTolerance = BigInt(object.tle_miss_tolerance);
    }
    if (object.tle_jail_duration !== undefined && object.tle_jail_duration !== null) {
      message.tleJailDuration = BigInt(object.tle_jail_duration);
    }
    if (object.min_tle_validators !== undefined && object.min_tle_validators !== null) {
      message.minTleValidators = object.min_tle_validators;
    }
    if (object.dkg_window_blocks !== undefined && object.dkg_window_blocks !== null) {
      message.dkgWindowBlocks = BigInt(object.dkg_window_blocks);
    }
    if (object.max_validator_set_drift !== undefined && object.max_validator_set_drift !== null) {
      message.maxValidatorSetDrift = object.max_validator_set_drift;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.max_funding_per_day = message.maxFundingPerDay === "" ? undefined : message.maxFundingPerDay;
    obj.min_gas_reserve = message.minGasReserve === "" ? undefined : message.minGasReserve;
    obj.max_gas_per_exec = message.maxGasPerExec !== BigInt(0) ? message.maxGasPerExec?.toString() : undefined;
    obj.max_execs_per_identity_per_epoch = message.maxExecsPerIdentityPerEpoch !== BigInt(0) ? message.maxExecsPerIdentityPerEpoch?.toString() : undefined;
    obj.encrypted_batch_enabled = message.encryptedBatchEnabled === false ? undefined : message.encryptedBatchEnabled;
    obj.shield_epoch_interval = message.shieldEpochInterval !== BigInt(0) ? message.shieldEpochInterval?.toString() : undefined;
    obj.min_batch_size = message.minBatchSize === 0 ? undefined : message.minBatchSize;
    obj.max_pending_epochs = message.maxPendingEpochs === 0 ? undefined : message.maxPendingEpochs;
    obj.max_pending_queue_size = message.maxPendingQueueSize === 0 ? undefined : message.maxPendingQueueSize;
    obj.max_encrypted_payload_size = message.maxEncryptedPayloadSize === 0 ? undefined : message.maxEncryptedPayloadSize;
    obj.max_ops_per_batch = message.maxOpsPerBatch === 0 ? undefined : message.maxOpsPerBatch;
    obj.tle_miss_window = message.tleMissWindow !== BigInt(0) ? message.tleMissWindow?.toString() : undefined;
    obj.tle_miss_tolerance = message.tleMissTolerance !== BigInt(0) ? message.tleMissTolerance?.toString() : undefined;
    obj.tle_jail_duration = message.tleJailDuration !== BigInt(0) ? message.tleJailDuration?.toString() : undefined;
    obj.min_tle_validators = message.minTleValidators === 0 ? undefined : message.minTleValidators;
    obj.dkg_window_blocks = message.dkgWindowBlocks !== BigInt(0) ? message.dkgWindowBlocks?.toString() : undefined;
    obj.max_validator_set_drift = message.maxValidatorSetDrift === 0 ? undefined : message.maxValidatorSetDrift;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/shield/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};