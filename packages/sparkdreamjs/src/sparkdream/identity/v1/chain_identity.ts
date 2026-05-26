//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ChainIdentity is the immutable identity record of a federated Spark Dream
 * chain. Set at genesis, never changeable. See docs/x-identity-spec.md.
 * @name ChainIdentity
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.ChainIdentity
 */
export interface ChainIdentity {
  /**
   * Human-readable chain name (e.g., "Phoenix").
   */
  chainHumanName: string;
  /**
   * Uppercase ticker prefix (e.g., "PHX").
   */
  chainTickerPrefix: string;
  /**
   * SPARK gas/staking token.
   */
  bondDenom: string;
  /**
   * wallet ticker, e.g., "PSPK"
   */
  bondDisplaySymbol: string;
  /**
   * e.g., "Phoenix Spark"
   */
  bondDisplayName: string;
  /**
   * typically 6
   */
  bondDisplayDecimals: number;
  /**
   * DREAM internal reputation token.
   */
  dreamDenom: string;
  /**
   * e.g., "PDRM"
   */
  dreamDisplaySymbol: string;
  /**
   * e.g., "Phoenix Dream"
   */
  dreamDisplayName: string;
  dreamDisplayDecimals: number;
  /**
   * Founding metadata; surfaces in queries and federation peer registration.
   */
  foundedAt: bigint;
}
export interface ChainIdentityProtoMsg {
  typeUrl: "/sparkdream.identity.v1.ChainIdentity";
  value: Uint8Array;
}
/**
 * ChainIdentity is the immutable identity record of a federated Spark Dream
 * chain. Set at genesis, never changeable. See docs/x-identity-spec.md.
 * @name ChainIdentityAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.ChainIdentity
 */
export interface ChainIdentityAmino {
  /**
   * Human-readable chain name (e.g., "Phoenix").
   */
  chain_human_name?: string;
  /**
   * Uppercase ticker prefix (e.g., "PHX").
   */
  chain_ticker_prefix?: string;
  /**
   * SPARK gas/staking token.
   */
  bond_denom?: string;
  /**
   * wallet ticker, e.g., "PSPK"
   */
  bond_display_symbol?: string;
  /**
   * e.g., "Phoenix Spark"
   */
  bond_display_name?: string;
  /**
   * typically 6
   */
  bond_display_decimals?: number;
  /**
   * DREAM internal reputation token.
   */
  dream_denom?: string;
  /**
   * e.g., "PDRM"
   */
  dream_display_symbol?: string;
  /**
   * e.g., "Phoenix Dream"
   */
  dream_display_name?: string;
  dream_display_decimals?: number;
  /**
   * Founding metadata; surfaces in queries and federation peer registration.
   */
  founded_at?: string;
}
export interface ChainIdentityAminoMsg {
  type: "sparkdream/x/identity/ChainIdentity";
  value: ChainIdentityAmino;
}
function createBaseChainIdentity(): ChainIdentity {
  return {
    chainHumanName: "",
    chainTickerPrefix: "",
    bondDenom: "",
    bondDisplaySymbol: "",
    bondDisplayName: "",
    bondDisplayDecimals: 0,
    dreamDenom: "",
    dreamDisplaySymbol: "",
    dreamDisplayName: "",
    dreamDisplayDecimals: 0,
    foundedAt: BigInt(0)
  };
}
/**
 * ChainIdentity is the immutable identity record of a federated Spark Dream
 * chain. Set at genesis, never changeable. See docs/x-identity-spec.md.
 * @name ChainIdentity
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.ChainIdentity
 */
export const ChainIdentity = {
  typeUrl: "/sparkdream.identity.v1.ChainIdentity",
  aminoType: "sparkdream/x/identity/ChainIdentity",
  encode(message: ChainIdentity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainHumanName !== "") {
      writer.uint32(10).string(message.chainHumanName);
    }
    if (message.chainTickerPrefix !== "") {
      writer.uint32(18).string(message.chainTickerPrefix);
    }
    if (message.bondDenom !== "") {
      writer.uint32(26).string(message.bondDenom);
    }
    if (message.bondDisplaySymbol !== "") {
      writer.uint32(34).string(message.bondDisplaySymbol);
    }
    if (message.bondDisplayName !== "") {
      writer.uint32(42).string(message.bondDisplayName);
    }
    if (message.bondDisplayDecimals !== 0) {
      writer.uint32(48).uint32(message.bondDisplayDecimals);
    }
    if (message.dreamDenom !== "") {
      writer.uint32(58).string(message.dreamDenom);
    }
    if (message.dreamDisplaySymbol !== "") {
      writer.uint32(66).string(message.dreamDisplaySymbol);
    }
    if (message.dreamDisplayName !== "") {
      writer.uint32(74).string(message.dreamDisplayName);
    }
    if (message.dreamDisplayDecimals !== 0) {
      writer.uint32(80).uint32(message.dreamDisplayDecimals);
    }
    if (message.foundedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.foundedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainIdentity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainHumanName = reader.string();
          break;
        case 2:
          message.chainTickerPrefix = reader.string();
          break;
        case 3:
          message.bondDenom = reader.string();
          break;
        case 4:
          message.bondDisplaySymbol = reader.string();
          break;
        case 5:
          message.bondDisplayName = reader.string();
          break;
        case 6:
          message.bondDisplayDecimals = reader.uint32();
          break;
        case 7:
          message.dreamDenom = reader.string();
          break;
        case 8:
          message.dreamDisplaySymbol = reader.string();
          break;
        case 9:
          message.dreamDisplayName = reader.string();
          break;
        case 10:
          message.dreamDisplayDecimals = reader.uint32();
          break;
        case 11:
          message.foundedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ChainIdentity>): ChainIdentity {
    const message = createBaseChainIdentity();
    message.chainHumanName = object.chainHumanName ?? "";
    message.chainTickerPrefix = object.chainTickerPrefix ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.bondDisplaySymbol = object.bondDisplaySymbol ?? "";
    message.bondDisplayName = object.bondDisplayName ?? "";
    message.bondDisplayDecimals = object.bondDisplayDecimals ?? 0;
    message.dreamDenom = object.dreamDenom ?? "";
    message.dreamDisplaySymbol = object.dreamDisplaySymbol ?? "";
    message.dreamDisplayName = object.dreamDisplayName ?? "";
    message.dreamDisplayDecimals = object.dreamDisplayDecimals ?? 0;
    message.foundedAt = object.foundedAt !== undefined && object.foundedAt !== null ? BigInt(object.foundedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ChainIdentityAmino): ChainIdentity {
    const message = createBaseChainIdentity();
    if (object.chain_human_name !== undefined && object.chain_human_name !== null) {
      message.chainHumanName = object.chain_human_name;
    }
    if (object.chain_ticker_prefix !== undefined && object.chain_ticker_prefix !== null) {
      message.chainTickerPrefix = object.chain_ticker_prefix;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.bond_display_symbol !== undefined && object.bond_display_symbol !== null) {
      message.bondDisplaySymbol = object.bond_display_symbol;
    }
    if (object.bond_display_name !== undefined && object.bond_display_name !== null) {
      message.bondDisplayName = object.bond_display_name;
    }
    if (object.bond_display_decimals !== undefined && object.bond_display_decimals !== null) {
      message.bondDisplayDecimals = object.bond_display_decimals;
    }
    if (object.dream_denom !== undefined && object.dream_denom !== null) {
      message.dreamDenom = object.dream_denom;
    }
    if (object.dream_display_symbol !== undefined && object.dream_display_symbol !== null) {
      message.dreamDisplaySymbol = object.dream_display_symbol;
    }
    if (object.dream_display_name !== undefined && object.dream_display_name !== null) {
      message.dreamDisplayName = object.dream_display_name;
    }
    if (object.dream_display_decimals !== undefined && object.dream_display_decimals !== null) {
      message.dreamDisplayDecimals = object.dream_display_decimals;
    }
    if (object.founded_at !== undefined && object.founded_at !== null) {
      message.foundedAt = BigInt(object.founded_at);
    }
    return message;
  },
  toAmino(message: ChainIdentity): ChainIdentityAmino {
    const obj: any = {};
    obj.chain_human_name = message.chainHumanName === "" ? undefined : message.chainHumanName;
    obj.chain_ticker_prefix = message.chainTickerPrefix === "" ? undefined : message.chainTickerPrefix;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.bond_display_symbol = message.bondDisplaySymbol === "" ? undefined : message.bondDisplaySymbol;
    obj.bond_display_name = message.bondDisplayName === "" ? undefined : message.bondDisplayName;
    obj.bond_display_decimals = message.bondDisplayDecimals === 0 ? undefined : message.bondDisplayDecimals;
    obj.dream_denom = message.dreamDenom === "" ? undefined : message.dreamDenom;
    obj.dream_display_symbol = message.dreamDisplaySymbol === "" ? undefined : message.dreamDisplaySymbol;
    obj.dream_display_name = message.dreamDisplayName === "" ? undefined : message.dreamDisplayName;
    obj.dream_display_decimals = message.dreamDisplayDecimals === 0 ? undefined : message.dreamDisplayDecimals;
    obj.founded_at = message.foundedAt !== BigInt(0) ? message.foundedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ChainIdentityAminoMsg): ChainIdentity {
    return ChainIdentity.fromAmino(object.value);
  },
  toAminoMsg(message: ChainIdentity): ChainIdentityAminoMsg {
    return {
      type: "sparkdream/x/identity/ChainIdentity",
      value: ChainIdentity.toAmino(message)
    };
  },
  fromProtoMsg(message: ChainIdentityProtoMsg): ChainIdentity {
    return ChainIdentity.decode(message.value);
  },
  toProto(message: ChainIdentity): Uint8Array {
    return ChainIdentity.encode(message).finish();
  },
  toProtoMsg(message: ChainIdentity): ChainIdentityProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.ChainIdentity",
      value: ChainIdentity.encode(message).finish()
    };
  }
};