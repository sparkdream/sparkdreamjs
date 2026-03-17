//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.Params
 */
export interface Params {
  /**
   * Minimum liquidity required to create a market (in base denom units)
   */
  minLiquidity: string;
  /**
   * Maximum market duration in blocks
   */
  maxDuration: bigint;
  /**
   * Default minimum trade size to prevent spam
   */
  defaultMinTick: string;
  /**
   * Maximum redemption delay in blocks
   */
  maxRedemptionDelay: bigint;
  /**
   * Trading fee in basis points (e.g., 30 = 0.3%)
   */
  tradingFeeBps: bigint;
  /**
   * Maximum allowed exponent value for LMSR calculations (for numerical stability)
   */
  maxLmsrExponent: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.Params
 */
export interface ParamsAmino {
  /**
   * Minimum liquidity required to create a market (in base denom units)
   */
  min_liquidity?: string;
  /**
   * Maximum market duration in blocks
   */
  max_duration?: string;
  /**
   * Default minimum trade size to prevent spam
   */
  default_min_tick?: string;
  /**
   * Maximum redemption delay in blocks
   */
  max_redemption_delay?: string;
  /**
   * Trading fee in basis points (e.g., 30 = 0.3%)
   */
  trading_fee_bps?: string;
  /**
   * Maximum allowed exponent value for LMSR calculations (for numerical stability)
   */
  max_lmsr_exponent?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/futarchy/Params";
  value: ParamsAmino;
}
/**
 * FutarchyOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (min_liquidity, default_min_tick, max_lmsr_exponent) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name FutarchyOperationalParams
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.FutarchyOperationalParams
 */
export interface FutarchyOperationalParams {
  /**
   * Trading fee in basis points (e.g., 30 = 0.3%)
   */
  tradingFeeBps: bigint;
  /**
   * Maximum market duration in blocks
   */
  maxDuration: bigint;
  /**
   * Maximum redemption delay in blocks
   */
  maxRedemptionDelay: bigint;
}
export interface FutarchyOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.FutarchyOperationalParams";
  value: Uint8Array;
}
/**
 * FutarchyOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (min_liquidity, default_min_tick, max_lmsr_exponent) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name FutarchyOperationalParamsAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.FutarchyOperationalParams
 */
export interface FutarchyOperationalParamsAmino {
  /**
   * Trading fee in basis points (e.g., 30 = 0.3%)
   */
  trading_fee_bps?: string;
  /**
   * Maximum market duration in blocks
   */
  max_duration?: string;
  /**
   * Maximum redemption delay in blocks
   */
  max_redemption_delay?: string;
}
export interface FutarchyOperationalParamsAminoMsg {
  type: "sparkdream/x/futarchy/FutarchyOperationalParams";
  value: FutarchyOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    minLiquidity: "",
    maxDuration: BigInt(0),
    defaultMinTick: "",
    maxRedemptionDelay: BigInt(0),
    tradingFeeBps: BigInt(0),
    maxLmsrExponent: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.futarchy.v1.Params",
  aminoType: "sparkdream/x/futarchy/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minLiquidity !== "") {
      writer.uint32(10).string(message.minLiquidity);
    }
    if (message.maxDuration !== BigInt(0)) {
      writer.uint32(16).int64(message.maxDuration);
    }
    if (message.defaultMinTick !== "") {
      writer.uint32(26).string(message.defaultMinTick);
    }
    if (message.maxRedemptionDelay !== BigInt(0)) {
      writer.uint32(32).int64(message.maxRedemptionDelay);
    }
    if (message.tradingFeeBps !== BigInt(0)) {
      writer.uint32(40).uint64(message.tradingFeeBps);
    }
    if (message.maxLmsrExponent !== "") {
      writer.uint32(50).string(message.maxLmsrExponent);
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
          message.minLiquidity = reader.string();
          break;
        case 2:
          message.maxDuration = reader.int64();
          break;
        case 3:
          message.defaultMinTick = reader.string();
          break;
        case 4:
          message.maxRedemptionDelay = reader.int64();
          break;
        case 5:
          message.tradingFeeBps = reader.uint64();
          break;
        case 6:
          message.maxLmsrExponent = reader.string();
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
    message.minLiquidity = object.minLiquidity ?? "";
    message.maxDuration = object.maxDuration !== undefined && object.maxDuration !== null ? BigInt(object.maxDuration.toString()) : BigInt(0);
    message.defaultMinTick = object.defaultMinTick ?? "";
    message.maxRedemptionDelay = object.maxRedemptionDelay !== undefined && object.maxRedemptionDelay !== null ? BigInt(object.maxRedemptionDelay.toString()) : BigInt(0);
    message.tradingFeeBps = object.tradingFeeBps !== undefined && object.tradingFeeBps !== null ? BigInt(object.tradingFeeBps.toString()) : BigInt(0);
    message.maxLmsrExponent = object.maxLmsrExponent ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_liquidity !== undefined && object.min_liquidity !== null) {
      message.minLiquidity = object.min_liquidity;
    }
    if (object.max_duration !== undefined && object.max_duration !== null) {
      message.maxDuration = BigInt(object.max_duration);
    }
    if (object.default_min_tick !== undefined && object.default_min_tick !== null) {
      message.defaultMinTick = object.default_min_tick;
    }
    if (object.max_redemption_delay !== undefined && object.max_redemption_delay !== null) {
      message.maxRedemptionDelay = BigInt(object.max_redemption_delay);
    }
    if (object.trading_fee_bps !== undefined && object.trading_fee_bps !== null) {
      message.tradingFeeBps = BigInt(object.trading_fee_bps);
    }
    if (object.max_lmsr_exponent !== undefined && object.max_lmsr_exponent !== null) {
      message.maxLmsrExponent = object.max_lmsr_exponent;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_liquidity = message.minLiquidity === "" ? undefined : message.minLiquidity;
    obj.max_duration = message.maxDuration !== BigInt(0) ? message.maxDuration?.toString() : undefined;
    obj.default_min_tick = message.defaultMinTick === "" ? undefined : message.defaultMinTick;
    obj.max_redemption_delay = message.maxRedemptionDelay !== BigInt(0) ? message.maxRedemptionDelay?.toString() : undefined;
    obj.trading_fee_bps = message.tradingFeeBps !== BigInt(0) ? message.tradingFeeBps?.toString() : undefined;
    obj.max_lmsr_exponent = message.maxLmsrExponent === "" ? undefined : message.maxLmsrExponent;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/futarchy/Params",
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
      typeUrl: "/sparkdream.futarchy.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseFutarchyOperationalParams(): FutarchyOperationalParams {
  return {
    tradingFeeBps: BigInt(0),
    maxDuration: BigInt(0),
    maxRedemptionDelay: BigInt(0)
  };
}
/**
 * FutarchyOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (min_liquidity, default_min_tick, max_lmsr_exponent) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name FutarchyOperationalParams
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.FutarchyOperationalParams
 */
export const FutarchyOperationalParams = {
  typeUrl: "/sparkdream.futarchy.v1.FutarchyOperationalParams",
  aminoType: "sparkdream/x/futarchy/FutarchyOperationalParams",
  encode(message: FutarchyOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingFeeBps !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradingFeeBps);
    }
    if (message.maxDuration !== BigInt(0)) {
      writer.uint32(16).int64(message.maxDuration);
    }
    if (message.maxRedemptionDelay !== BigInt(0)) {
      writer.uint32(24).int64(message.maxRedemptionDelay);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FutarchyOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFutarchyOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingFeeBps = reader.uint64();
          break;
        case 2:
          message.maxDuration = reader.int64();
          break;
        case 3:
          message.maxRedemptionDelay = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FutarchyOperationalParams>): FutarchyOperationalParams {
    const message = createBaseFutarchyOperationalParams();
    message.tradingFeeBps = object.tradingFeeBps !== undefined && object.tradingFeeBps !== null ? BigInt(object.tradingFeeBps.toString()) : BigInt(0);
    message.maxDuration = object.maxDuration !== undefined && object.maxDuration !== null ? BigInt(object.maxDuration.toString()) : BigInt(0);
    message.maxRedemptionDelay = object.maxRedemptionDelay !== undefined && object.maxRedemptionDelay !== null ? BigInt(object.maxRedemptionDelay.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FutarchyOperationalParamsAmino): FutarchyOperationalParams {
    const message = createBaseFutarchyOperationalParams();
    if (object.trading_fee_bps !== undefined && object.trading_fee_bps !== null) {
      message.tradingFeeBps = BigInt(object.trading_fee_bps);
    }
    if (object.max_duration !== undefined && object.max_duration !== null) {
      message.maxDuration = BigInt(object.max_duration);
    }
    if (object.max_redemption_delay !== undefined && object.max_redemption_delay !== null) {
      message.maxRedemptionDelay = BigInt(object.max_redemption_delay);
    }
    return message;
  },
  toAmino(message: FutarchyOperationalParams): FutarchyOperationalParamsAmino {
    const obj: any = {};
    obj.trading_fee_bps = message.tradingFeeBps !== BigInt(0) ? message.tradingFeeBps?.toString() : undefined;
    obj.max_duration = message.maxDuration !== BigInt(0) ? message.maxDuration?.toString() : undefined;
    obj.max_redemption_delay = message.maxRedemptionDelay !== BigInt(0) ? message.maxRedemptionDelay?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FutarchyOperationalParamsAminoMsg): FutarchyOperationalParams {
    return FutarchyOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: FutarchyOperationalParams): FutarchyOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/futarchy/FutarchyOperationalParams",
      value: FutarchyOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: FutarchyOperationalParamsProtoMsg): FutarchyOperationalParams {
    return FutarchyOperationalParams.decode(message.value);
  },
  toProto(message: FutarchyOperationalParams): Uint8Array {
    return FutarchyOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: FutarchyOperationalParams): FutarchyOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.FutarchyOperationalParams",
      value: FutarchyOperationalParams.encode(message).finish()
    };
  }
};