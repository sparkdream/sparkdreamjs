//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the BME module
 * @name Params
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.Params
 */
export interface Params {
  /**
   * circuit_breaker_warn_threshold is the CR below which warning is triggered
   * Stored as basis points * 100 (e.g., 9500 = 0.95)
   */
  circuitBreakerWarnThreshold: number;
  /**
   * circuit_breaker_halt_threshold is the CR below which mints are halted
   * Stored as basis points * 100 (e.g., 9000 = 0.90)
   */
  circuitBreakerHaltThreshold: number;
  /**
   * min_epoch_blocks is the minimum amount of blocks required for ACT mints
   */
  minEpochBlocks: bigint;
  /**
   * epoch_blocks_backoff increase of runway_blocks in % during warn threshold
   * for drop in 1 basis point of circuit_breaker_warn_threshold
   * Stored as basis points * 100 (e.g., 9500 = 0.95)
   * e.g: runway_blocks = 100
   *      min_runway_blocks_backoff = 1000
   *      circuit_breaker_warn_threshold drops from 0.95 to 0.94
   *      then runway_blocks = (100*0.1 + 100) = 110
   * 
   *      circuit_breaker_warn_threshold drops from 0.94 to 0.92
   *      then runway_blocks = (110*(0.1*2) + 110) = 132
   */
  epochBlocksBackoffPercent: number;
  /**
   * mint_spread_bps is the spread in basis points applied during ACT mint
   * (default: 25 bps = 0.25%)
   */
  mintSpreadBps: number;
  /**
   * settle_spread_bps is the spread in basis points applied during settlement
   * (default: 0 for no provider tax)
   */
  settleSpreadBps: number;
  /**
   * max_endblocker_records is the deterministic upper bound on pending ledger
   * records processed in a single EndBlocker invocation.
   */
  maxEndblockerRecords: number;
  /**
   * min_mint minimum amount of ACT required to be minted in the new transaction
   */
  minMint: Coin[];
  /**
   * max_pending_attempts is the maximum number of EndBlocker processing attempts
   * for a pending record before it is canceled. Applies to retriable errors only.
   */
  maxPendingAttempts: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.bme.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the BME module
 * @name ParamsAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.Params
 */
export interface ParamsAmino {
  /**
   * circuit_breaker_warn_threshold is the CR below which warning is triggered
   * Stored as basis points * 100 (e.g., 9500 = 0.95)
   */
  circuit_breaker_warn_threshold?: number;
  /**
   * circuit_breaker_halt_threshold is the CR below which mints are halted
   * Stored as basis points * 100 (e.g., 9000 = 0.90)
   */
  circuit_breaker_halt_threshold?: number;
  /**
   * min_epoch_blocks is the minimum amount of blocks required for ACT mints
   */
  min_epoch_blocks?: string;
  /**
   * epoch_blocks_backoff increase of runway_blocks in % during warn threshold
   * for drop in 1 basis point of circuit_breaker_warn_threshold
   * Stored as basis points * 100 (e.g., 9500 = 0.95)
   * e.g: runway_blocks = 100
   *      min_runway_blocks_backoff = 1000
   *      circuit_breaker_warn_threshold drops from 0.95 to 0.94
   *      then runway_blocks = (100*0.1 + 100) = 110
   * 
   *      circuit_breaker_warn_threshold drops from 0.94 to 0.92
   *      then runway_blocks = (110*(0.1*2) + 110) = 132
   */
  epoch_blocks_backoff_percent?: number;
  /**
   * mint_spread_bps is the spread in basis points applied during ACT mint
   * (default: 25 bps = 0.25%)
   */
  mint_spread_bps?: number;
  /**
   * settle_spread_bps is the spread in basis points applied during settlement
   * (default: 0 for no provider tax)
   */
  settle_spread_bps?: number;
  /**
   * max_endblocker_records is the deterministic upper bound on pending ledger
   * records processed in a single EndBlocker invocation.
   */
  max_endblocker_records?: number;
  /**
   * min_mint minimum amount of ACT required to be minted in the new transaction
   */
  min_mint: CoinAmino[];
  /**
   * max_pending_attempts is the maximum number of EndBlocker processing attempts
   * for a pending record before it is canceled. Applies to retriable errors only.
   */
  max_pending_attempts?: number;
}
export interface ParamsAminoMsg {
  type: "/akash.bme.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    circuitBreakerWarnThreshold: 0,
    circuitBreakerHaltThreshold: 0,
    minEpochBlocks: BigInt(0),
    epochBlocksBackoffPercent: 0,
    mintSpreadBps: 0,
    settleSpreadBps: 0,
    maxEndblockerRecords: 0,
    minMint: [],
    maxPendingAttempts: 0
  };
}
/**
 * Params defines the parameters for the BME module
 * @name Params
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.Params
 */
export const Params = {
  typeUrl: "/akash.bme.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.circuitBreakerWarnThreshold !== 0) {
      writer.uint32(8).uint32(message.circuitBreakerWarnThreshold);
    }
    if (message.circuitBreakerHaltThreshold !== 0) {
      writer.uint32(16).uint32(message.circuitBreakerHaltThreshold);
    }
    if (message.minEpochBlocks !== BigInt(0)) {
      writer.uint32(24).int64(message.minEpochBlocks);
    }
    if (message.epochBlocksBackoffPercent !== 0) {
      writer.uint32(32).uint32(message.epochBlocksBackoffPercent);
    }
    if (message.mintSpreadBps !== 0) {
      writer.uint32(48).uint32(message.mintSpreadBps);
    }
    if (message.settleSpreadBps !== 0) {
      writer.uint32(56).uint32(message.settleSpreadBps);
    }
    if (message.maxEndblockerRecords !== 0) {
      writer.uint32(64).uint32(message.maxEndblockerRecords);
    }
    for (const v of message.minMint) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxPendingAttempts !== 0) {
      writer.uint32(80).uint32(message.maxPendingAttempts);
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
          message.circuitBreakerWarnThreshold = reader.uint32();
          break;
        case 2:
          message.circuitBreakerHaltThreshold = reader.uint32();
          break;
        case 3:
          message.minEpochBlocks = reader.int64();
          break;
        case 4:
          message.epochBlocksBackoffPercent = reader.uint32();
          break;
        case 6:
          message.mintSpreadBps = reader.uint32();
          break;
        case 7:
          message.settleSpreadBps = reader.uint32();
          break;
        case 8:
          message.maxEndblockerRecords = reader.uint32();
          break;
        case 9:
          message.minMint.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.maxPendingAttempts = reader.uint32();
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
    message.circuitBreakerWarnThreshold = object.circuitBreakerWarnThreshold ?? 0;
    message.circuitBreakerHaltThreshold = object.circuitBreakerHaltThreshold ?? 0;
    message.minEpochBlocks = object.minEpochBlocks !== undefined && object.minEpochBlocks !== null ? BigInt(object.minEpochBlocks.toString()) : BigInt(0);
    message.epochBlocksBackoffPercent = object.epochBlocksBackoffPercent ?? 0;
    message.mintSpreadBps = object.mintSpreadBps ?? 0;
    message.settleSpreadBps = object.settleSpreadBps ?? 0;
    message.maxEndblockerRecords = object.maxEndblockerRecords ?? 0;
    message.minMint = object.minMint?.map(e => Coin.fromPartial(e)) || [];
    message.maxPendingAttempts = object.maxPendingAttempts ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.circuit_breaker_warn_threshold !== undefined && object.circuit_breaker_warn_threshold !== null) {
      message.circuitBreakerWarnThreshold = object.circuit_breaker_warn_threshold;
    }
    if (object.circuit_breaker_halt_threshold !== undefined && object.circuit_breaker_halt_threshold !== null) {
      message.circuitBreakerHaltThreshold = object.circuit_breaker_halt_threshold;
    }
    if (object.min_epoch_blocks !== undefined && object.min_epoch_blocks !== null) {
      message.minEpochBlocks = BigInt(object.min_epoch_blocks);
    }
    if (object.epoch_blocks_backoff_percent !== undefined && object.epoch_blocks_backoff_percent !== null) {
      message.epochBlocksBackoffPercent = object.epoch_blocks_backoff_percent;
    }
    if (object.mint_spread_bps !== undefined && object.mint_spread_bps !== null) {
      message.mintSpreadBps = object.mint_spread_bps;
    }
    if (object.settle_spread_bps !== undefined && object.settle_spread_bps !== null) {
      message.settleSpreadBps = object.settle_spread_bps;
    }
    if (object.max_endblocker_records !== undefined && object.max_endblocker_records !== null) {
      message.maxEndblockerRecords = object.max_endblocker_records;
    }
    message.minMint = object.min_mint?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_pending_attempts !== undefined && object.max_pending_attempts !== null) {
      message.maxPendingAttempts = object.max_pending_attempts;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.circuit_breaker_warn_threshold = message.circuitBreakerWarnThreshold === 0 ? undefined : message.circuitBreakerWarnThreshold;
    obj.circuit_breaker_halt_threshold = message.circuitBreakerHaltThreshold === 0 ? undefined : message.circuitBreakerHaltThreshold;
    obj.min_epoch_blocks = message.minEpochBlocks !== BigInt(0) ? message.minEpochBlocks?.toString() : undefined;
    obj.epoch_blocks_backoff_percent = message.epochBlocksBackoffPercent === 0 ? undefined : message.epochBlocksBackoffPercent;
    obj.mint_spread_bps = message.mintSpreadBps === 0 ? undefined : message.mintSpreadBps;
    obj.settle_spread_bps = message.settleSpreadBps === 0 ? undefined : message.settleSpreadBps;
    obj.max_endblocker_records = message.maxEndblockerRecords === 0 ? undefined : message.maxEndblockerRecords;
    if (message.minMint) {
      obj.min_mint = message.minMint.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_mint = message.minMint;
    }
    obj.max_pending_attempts = message.maxPendingAttempts === 0 ? undefined : message.maxPendingAttempts;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};