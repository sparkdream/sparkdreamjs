//@ts-nocheck
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the oracle module
 * @name Params
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.Params
 */
export interface Params {
  /**
   * sources addresses allowed to write prices into oracle module
   * those are to be smartcontract addresses
   */
  sources: string[];
  /**
   * Minimum number of price sources required (default: 2)
   */
  minPriceSources: number;
  /**
   * Maximum price staleness in blocks (default: 50 = ~ 5 minutes)
   */
  maxPriceStalenessBlocks: bigint;
  /**
   * TWAP window in blocks (default: 50 = ~ 5 minutes)
   */
  twapWindow: bigint;
  /**
   * Maximum price deviation in basis points (default: 150 = 1.5%)
   */
  maxPriceDeviationBps: bigint;
  /**
   * feed_contracts_params contains the configuration for the price feed contracts
   */
  feedContractsParams: Any[];
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.oracle.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the oracle module
 * @name ParamsAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.Params
 */
export interface ParamsAmino {
  /**
   * sources addresses allowed to write prices into oracle module
   * those are to be smartcontract addresses
   */
  sources: string[];
  /**
   * Minimum number of price sources required (default: 2)
   */
  min_price_sources?: number;
  /**
   * Maximum price staleness in blocks (default: 50 = ~ 5 minutes)
   */
  max_price_staleness_blocks?: string;
  /**
   * TWAP window in blocks (default: 50 = ~ 5 minutes)
   */
  twap_window?: string;
  /**
   * Maximum price deviation in basis points (default: 150 = 1.5%)
   */
  max_price_deviation_bps?: string;
  /**
   * feed_contracts_params contains the configuration for the price feed contracts
   */
  feed_contracts_params?: AnyAmino[];
}
export interface ParamsAminoMsg {
  type: "/akash.oracle.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    sources: [],
    minPriceSources: 0,
    maxPriceStalenessBlocks: BigInt(0),
    twapWindow: BigInt(0),
    maxPriceDeviationBps: BigInt(0),
    feedContractsParams: []
  };
}
/**
 * Params defines the parameters for the oracle module
 * @name Params
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.Params
 */
export const Params = {
  typeUrl: "/akash.oracle.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sources) {
      writer.uint32(10).string(v!);
    }
    if (message.minPriceSources !== 0) {
      writer.uint32(16).uint32(message.minPriceSources);
    }
    if (message.maxPriceStalenessBlocks !== BigInt(0)) {
      writer.uint32(24).int64(message.maxPriceStalenessBlocks);
    }
    if (message.twapWindow !== BigInt(0)) {
      writer.uint32(32).int64(message.twapWindow);
    }
    if (message.maxPriceDeviationBps !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxPriceDeviationBps);
    }
    for (const v of message.feedContractsParams) {
      Any.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.sources.push(reader.string());
          break;
        case 2:
          message.minPriceSources = reader.uint32();
          break;
        case 3:
          message.maxPriceStalenessBlocks = reader.int64();
          break;
        case 4:
          message.twapWindow = reader.int64();
          break;
        case 5:
          message.maxPriceDeviationBps = reader.uint64();
          break;
        case 6:
          message.feedContractsParams.push(Any.decode(reader, reader.uint32()));
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
    message.sources = object.sources?.map(e => e) || [];
    message.minPriceSources = object.minPriceSources ?? 0;
    message.maxPriceStalenessBlocks = object.maxPriceStalenessBlocks !== undefined && object.maxPriceStalenessBlocks !== null ? BigInt(object.maxPriceStalenessBlocks.toString()) : BigInt(0);
    message.twapWindow = object.twapWindow !== undefined && object.twapWindow !== null ? BigInt(object.twapWindow.toString()) : BigInt(0);
    message.maxPriceDeviationBps = object.maxPriceDeviationBps !== undefined && object.maxPriceDeviationBps !== null ? BigInt(object.maxPriceDeviationBps.toString()) : BigInt(0);
    message.feedContractsParams = object.feedContractsParams?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.sources = object.sources?.map(e => e) || [];
    if (object.min_price_sources !== undefined && object.min_price_sources !== null) {
      message.minPriceSources = object.min_price_sources;
    }
    if (object.max_price_staleness_blocks !== undefined && object.max_price_staleness_blocks !== null) {
      message.maxPriceStalenessBlocks = BigInt(object.max_price_staleness_blocks);
    }
    if (object.twap_window !== undefined && object.twap_window !== null) {
      message.twapWindow = BigInt(object.twap_window);
    }
    if (object.max_price_deviation_bps !== undefined && object.max_price_deviation_bps !== null) {
      message.maxPriceDeviationBps = BigInt(object.max_price_deviation_bps);
    }
    message.feedContractsParams = object.feed_contracts_params?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.sources) {
      obj.sources = message.sources.map(e => e);
    } else {
      obj.sources = message.sources;
    }
    obj.min_price_sources = message.minPriceSources === 0 ? undefined : message.minPriceSources;
    obj.max_price_staleness_blocks = message.maxPriceStalenessBlocks !== BigInt(0) ? message.maxPriceStalenessBlocks?.toString() : undefined;
    obj.twap_window = message.twapWindow !== BigInt(0) ? message.twapWindow?.toString() : undefined;
    obj.max_price_deviation_bps = message.maxPriceDeviationBps !== BigInt(0) ? message.maxPriceDeviationBps?.toString() : undefined;
    if (message.feedContractsParams) {
      obj.feed_contracts_params = message.feedContractsParams.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.feed_contracts_params = message.feedContractsParams;
    }
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
      typeUrl: "/akash.oracle.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};