//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Market defines the Market message.
 * @name Market
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.Market
 */
export interface Market {
  /**
   * Metadata
   */
  index: bigint;
  creator: string;
  symbol: string;
  question: string;
  /**
   * Configuration
   */
  denom: string;
  minTick: string;
  /**
   * Temporal properties
   */
  endBlock: bigint;
  redemptionBlocks: bigint;
  resolutionHeight: bigint;
  status: string;
  /**
   * LMSR state
   */
  bValue: string;
  poolYes: string;
  poolNo: string;
  /**
   * Liquidity tracking
   */
  initialLiquidity: string;
  liquidityWithdrawn: string;
}
export interface MarketProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.Market";
  value: Uint8Array;
}
/**
 * Market defines the Market message.
 * @name MarketAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.Market
 */
export interface MarketAmino {
  /**
   * Metadata
   */
  index?: string;
  creator?: string;
  symbol?: string;
  question?: string;
  /**
   * Configuration
   */
  denom?: string;
  min_tick?: string;
  /**
   * Temporal properties
   */
  end_block?: string;
  redemption_blocks?: string;
  resolution_height?: string;
  status?: string;
  /**
   * LMSR state
   */
  b_value?: string;
  pool_yes?: string;
  pool_no?: string;
  /**
   * Liquidity tracking
   */
  initial_liquidity?: string;
  liquidity_withdrawn?: string;
}
export interface MarketAminoMsg {
  type: "/sparkdream.futarchy.v1.Market";
  value: MarketAmino;
}
function createBaseMarket(): Market {
  return {
    index: BigInt(0),
    creator: "",
    symbol: "",
    question: "",
    denom: "",
    minTick: "",
    endBlock: BigInt(0),
    redemptionBlocks: BigInt(0),
    resolutionHeight: BigInt(0),
    status: "",
    bValue: "",
    poolYes: "",
    poolNo: "",
    initialLiquidity: "",
    liquidityWithdrawn: ""
  };
}
/**
 * Market defines the Market message.
 * @name Market
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.Market
 */
export const Market = {
  typeUrl: "/sparkdream.futarchy.v1.Market",
  encode(message: Market, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.question !== "") {
      writer.uint32(34).string(message.question);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.minTick !== "") {
      writer.uint32(50).string(message.minTick);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(56).int64(message.endBlock);
    }
    if (message.redemptionBlocks !== BigInt(0)) {
      writer.uint32(64).int64(message.redemptionBlocks);
    }
    if (message.resolutionHeight !== BigInt(0)) {
      writer.uint32(72).int64(message.resolutionHeight);
    }
    if (message.status !== "") {
      writer.uint32(82).string(message.status);
    }
    if (message.bValue !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.bValue, 18).atomics);
    }
    if (message.poolYes !== "") {
      writer.uint32(98).string(message.poolYes);
    }
    if (message.poolNo !== "") {
      writer.uint32(106).string(message.poolNo);
    }
    if (message.initialLiquidity !== "") {
      writer.uint32(114).string(message.initialLiquidity);
    }
    if (message.liquidityWithdrawn !== "") {
      writer.uint32(122).string(message.liquidityWithdrawn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Market {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.question = reader.string();
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 6:
          message.minTick = reader.string();
          break;
        case 7:
          message.endBlock = reader.int64();
          break;
        case 8:
          message.redemptionBlocks = reader.int64();
          break;
        case 9:
          message.resolutionHeight = reader.int64();
          break;
        case 10:
          message.status = reader.string();
          break;
        case 11:
          message.bValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.poolYes = reader.string();
          break;
        case 13:
          message.poolNo = reader.string();
          break;
        case 14:
          message.initialLiquidity = reader.string();
          break;
        case 15:
          message.liquidityWithdrawn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Market>): Market {
    const message = createBaseMarket();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.symbol = object.symbol ?? "";
    message.question = object.question ?? "";
    message.denom = object.denom ?? "";
    message.minTick = object.minTick ?? "";
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.redemptionBlocks = object.redemptionBlocks !== undefined && object.redemptionBlocks !== null ? BigInt(object.redemptionBlocks.toString()) : BigInt(0);
    message.resolutionHeight = object.resolutionHeight !== undefined && object.resolutionHeight !== null ? BigInt(object.resolutionHeight.toString()) : BigInt(0);
    message.status = object.status ?? "";
    message.bValue = object.bValue ?? "";
    message.poolYes = object.poolYes ?? "";
    message.poolNo = object.poolNo ?? "";
    message.initialLiquidity = object.initialLiquidity ?? "";
    message.liquidityWithdrawn = object.liquidityWithdrawn ?? "";
    return message;
  },
  fromAmino(object: MarketAmino): Market {
    const message = createBaseMarket();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.min_tick !== undefined && object.min_tick !== null) {
      message.minTick = object.min_tick;
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.redemption_blocks !== undefined && object.redemption_blocks !== null) {
      message.redemptionBlocks = BigInt(object.redemption_blocks);
    }
    if (object.resolution_height !== undefined && object.resolution_height !== null) {
      message.resolutionHeight = BigInt(object.resolution_height);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.b_value !== undefined && object.b_value !== null) {
      message.bValue = object.b_value;
    }
    if (object.pool_yes !== undefined && object.pool_yes !== null) {
      message.poolYes = object.pool_yes;
    }
    if (object.pool_no !== undefined && object.pool_no !== null) {
      message.poolNo = object.pool_no;
    }
    if (object.initial_liquidity !== undefined && object.initial_liquidity !== null) {
      message.initialLiquidity = object.initial_liquidity;
    }
    if (object.liquidity_withdrawn !== undefined && object.liquidity_withdrawn !== null) {
      message.liquidityWithdrawn = object.liquidity_withdrawn;
    }
    return message;
  },
  toAmino(message: Market): MarketAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.question = message.question === "" ? undefined : message.question;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.min_tick = message.minTick === "" ? undefined : message.minTick;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.redemption_blocks = message.redemptionBlocks !== BigInt(0) ? message.redemptionBlocks?.toString() : undefined;
    obj.resolution_height = message.resolutionHeight !== BigInt(0) ? message.resolutionHeight?.toString() : undefined;
    obj.status = message.status === "" ? undefined : message.status;
    obj.b_value = message.bValue === "" ? undefined : message.bValue;
    obj.pool_yes = message.poolYes === "" ? undefined : message.poolYes;
    obj.pool_no = message.poolNo === "" ? undefined : message.poolNo;
    obj.initial_liquidity = message.initialLiquidity === "" ? undefined : message.initialLiquidity;
    obj.liquidity_withdrawn = message.liquidityWithdrawn === "" ? undefined : message.liquidityWithdrawn;
    return obj;
  },
  fromAminoMsg(object: MarketAminoMsg): Market {
    return Market.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketProtoMsg): Market {
    return Market.decode(message.value);
  },
  toProto(message: Market): Uint8Array {
    return Market.encode(message).finish();
  },
  toProtoMsg(message: Market): MarketProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.Market",
      value: Market.encode(message).finish()
    };
  }
};