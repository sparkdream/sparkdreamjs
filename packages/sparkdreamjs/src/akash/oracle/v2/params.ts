//@ts-nocheck
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the oracle module
 * @name Params
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.Params
 */
export interface Params {
  /**
   * sources addresses allowed to write prices into oracle module
   * those are to be smartcontract addresses
   */
  sources: string[];
  /**
   * Minimum number of price sources required (default: 1)
   */
  minPriceSources: number;
  /**
   * Maximum price staleness in seconds (default: 60s)
   */
  maxPriceStalenessPeriod: Duration;
  /**
   * TWAP window as a duration (default: 5s)
   */
  twapWindow: Duration;
  /**
   * Maximum price deviation in basis points (default: 150 = 1.5%)
   */
  maxPriceDeviationBps: bigint;
  /**
   * feed_contracts_params contains the configuration for the price feed contracts
   */
  feedContractsParams: Any[];
  /**
   * price_retention is how long to keep price records (default: 24h)
   */
  priceRetention: Duration;
  /**
   * prune_epoch is the epoch identifier that triggers pruning (default: "hour")
   */
  pruneEpoch: string;
  /**
   * max_prune_per_epoch is the max records to delete per epoch pruning pass (default: 1000)
   */
  maxPrunePerEpoch: bigint;
  /**
   * max_future_time_drift is the maximum amount of time a price timestamp
   * may exceed the current block time (default: 1m)
   */
  maxFutureTimeDrift: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.oracle.v2.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the oracle module
 * @name ParamsAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.Params
 */
export interface ParamsAmino {
  /**
   * sources addresses allowed to write prices into oracle module
   * those are to be smartcontract addresses
   */
  sources: string[];
  /**
   * Minimum number of price sources required (default: 1)
   */
  min_price_sources?: number;
  /**
   * Maximum price staleness in seconds (default: 60s)
   */
  max_price_staleness_period: DurationAmino;
  /**
   * TWAP window as a duration (default: 5s)
   */
  twap_window: DurationAmino;
  /**
   * Maximum price deviation in basis points (default: 150 = 1.5%)
   */
  max_price_deviation_bps?: string;
  /**
   * feed_contracts_params contains the configuration for the price feed contracts
   */
  feed_contracts_params?: AnyAmino[];
  /**
   * price_retention is how long to keep price records (default: 24h)
   */
  price_retention: DurationAmino;
  /**
   * prune_epoch is the epoch identifier that triggers pruning (default: "hour")
   */
  prune_epoch: string;
  /**
   * max_prune_per_epoch is the max records to delete per epoch pruning pass (default: 1000)
   */
  max_prune_per_epoch?: string;
  /**
   * max_future_time_drift is the maximum amount of time a price timestamp
   * may exceed the current block time (default: 1m)
   */
  max_future_time_drift: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/akash.oracle.v2.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    sources: [],
    minPriceSources: 0,
    maxPriceStalenessPeriod: Duration.fromPartial({}),
    twapWindow: Duration.fromPartial({}),
    maxPriceDeviationBps: BigInt(0),
    feedContractsParams: [],
    priceRetention: Duration.fromPartial({}),
    pruneEpoch: "",
    maxPrunePerEpoch: BigInt(0),
    maxFutureTimeDrift: Duration.fromPartial({})
  };
}
/**
 * Params defines the parameters for the oracle module
 * @name Params
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.Params
 */
export const Params = {
  typeUrl: "/akash.oracle.v2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sources) {
      writer.uint32(10).string(v!);
    }
    if (message.minPriceSources !== 0) {
      writer.uint32(16).uint32(message.minPriceSources);
    }
    if (message.maxPriceStalenessPeriod !== undefined) {
      Duration.encode(message.maxPriceStalenessPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.twapWindow !== undefined) {
      Duration.encode(message.twapWindow, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxPriceDeviationBps !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxPriceDeviationBps);
    }
    for (const v of message.feedContractsParams) {
      Any.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceRetention !== undefined) {
      Duration.encode(message.priceRetention, writer.uint32(58).fork()).ldelim();
    }
    if (message.pruneEpoch !== "") {
      writer.uint32(66).string(message.pruneEpoch);
    }
    if (message.maxPrunePerEpoch !== BigInt(0)) {
      writer.uint32(72).int64(message.maxPrunePerEpoch);
    }
    if (message.maxFutureTimeDrift !== undefined) {
      Duration.encode(message.maxFutureTimeDrift, writer.uint32(82).fork()).ldelim();
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
          message.maxPriceStalenessPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.twapWindow = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxPriceDeviationBps = reader.uint64();
          break;
        case 6:
          message.feedContractsParams.push(Any.decode(reader, reader.uint32()));
          break;
        case 7:
          message.priceRetention = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.pruneEpoch = reader.string();
          break;
        case 9:
          message.maxPrunePerEpoch = reader.int64();
          break;
        case 10:
          message.maxFutureTimeDrift = Duration.decode(reader, reader.uint32());
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
    message.maxPriceStalenessPeriod = object.maxPriceStalenessPeriod !== undefined && object.maxPriceStalenessPeriod !== null ? Duration.fromPartial(object.maxPriceStalenessPeriod) : undefined;
    message.twapWindow = object.twapWindow !== undefined && object.twapWindow !== null ? Duration.fromPartial(object.twapWindow) : undefined;
    message.maxPriceDeviationBps = object.maxPriceDeviationBps !== undefined && object.maxPriceDeviationBps !== null ? BigInt(object.maxPriceDeviationBps.toString()) : BigInt(0);
    message.feedContractsParams = object.feedContractsParams?.map(e => Any.fromPartial(e)) || [];
    message.priceRetention = object.priceRetention !== undefined && object.priceRetention !== null ? Duration.fromPartial(object.priceRetention) : undefined;
    message.pruneEpoch = object.pruneEpoch ?? "";
    message.maxPrunePerEpoch = object.maxPrunePerEpoch !== undefined && object.maxPrunePerEpoch !== null ? BigInt(object.maxPrunePerEpoch.toString()) : BigInt(0);
    message.maxFutureTimeDrift = object.maxFutureTimeDrift !== undefined && object.maxFutureTimeDrift !== null ? Duration.fromPartial(object.maxFutureTimeDrift) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.sources = object.sources?.map(e => e) || [];
    if (object.min_price_sources !== undefined && object.min_price_sources !== null) {
      message.minPriceSources = object.min_price_sources;
    }
    if (object.max_price_staleness_period !== undefined && object.max_price_staleness_period !== null) {
      message.maxPriceStalenessPeriod = Duration.fromAmino(object.max_price_staleness_period);
    }
    if (object.twap_window !== undefined && object.twap_window !== null) {
      message.twapWindow = Duration.fromAmino(object.twap_window);
    }
    if (object.max_price_deviation_bps !== undefined && object.max_price_deviation_bps !== null) {
      message.maxPriceDeviationBps = BigInt(object.max_price_deviation_bps);
    }
    message.feedContractsParams = object.feed_contracts_params?.map(e => Any.fromAmino(e)) || [];
    if (object.price_retention !== undefined && object.price_retention !== null) {
      message.priceRetention = Duration.fromAmino(object.price_retention);
    }
    if (object.prune_epoch !== undefined && object.prune_epoch !== null) {
      message.pruneEpoch = object.prune_epoch;
    }
    if (object.max_prune_per_epoch !== undefined && object.max_prune_per_epoch !== null) {
      message.maxPrunePerEpoch = BigInt(object.max_prune_per_epoch);
    }
    if (object.max_future_time_drift !== undefined && object.max_future_time_drift !== null) {
      message.maxFutureTimeDrift = Duration.fromAmino(object.max_future_time_drift);
    }
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
    obj.max_price_staleness_period = message.maxPriceStalenessPeriod ? Duration.toAmino(message.maxPriceStalenessPeriod) : Duration.toAmino(Duration.fromPartial({}));
    obj.twap_window = message.twapWindow ? Duration.toAmino(message.twapWindow) : Duration.toAmino(Duration.fromPartial({}));
    obj.max_price_deviation_bps = message.maxPriceDeviationBps !== BigInt(0) ? message.maxPriceDeviationBps?.toString() : undefined;
    if (message.feedContractsParams) {
      obj.feed_contracts_params = message.feedContractsParams.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.feed_contracts_params = message.feedContractsParams;
    }
    obj.price_retention = message.priceRetention ? Duration.toAmino(message.priceRetention) : Duration.toAmino(Duration.fromPartial({}));
    obj.prune_epoch = message.pruneEpoch ?? "";
    obj.max_prune_per_epoch = message.maxPrunePerEpoch !== BigInt(0) ? message.maxPrunePerEpoch?.toString() : undefined;
    obj.max_future_time_drift = message.maxFutureTimeDrift ? Duration.toAmino(message.maxFutureTimeDrift) : Duration.toAmino(Duration.fromPartial({}));
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
      typeUrl: "/akash.oracle.v2.Params",
      value: Params.encode(message).finish()
    };
  }
};