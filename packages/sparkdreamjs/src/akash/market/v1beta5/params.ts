//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params is the params for the x/market module.
 * @name Params
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Params
 */
export interface Params {
  /**
   * BidMinDeposit is a parameter for the minimum deposit on a Bid.
   * Deprecated: use BidMinDeposits
   */
  bidMinDeposit: Coin;
  /**
   * OrderMaxBids is a parameter for the maximum number of bids in an order.
   */
  orderMaxBids: number;
  /**
   * BidMinDeposits is a parameter for the minimum deposits per denom on a Bid.
   */
  bidMinDeposits: Coin[];
  /**
   * min_reclamation_window is the minimum reclamation window duration allowed.
   */
  minReclamationWindow: Duration;
  /**
   * max_reclamation_window is the maximum reclamation window duration allowed.
   */
  maxReclamationWindow: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.market.v1beta5.Params";
  value: Uint8Array;
}
/**
 * Params is the params for the x/market module.
 * @name ParamsAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Params
 */
export interface ParamsAmino {
  /**
   * BidMinDeposit is a parameter for the minimum deposit on a Bid.
   * Deprecated: use BidMinDeposits
   */
  bid_min_deposit: CoinAmino;
  /**
   * OrderMaxBids is a parameter for the maximum number of bids in an order.
   */
  order_max_bids: number;
  /**
   * BidMinDeposits is a parameter for the minimum deposits per denom on a Bid.
   */
  bid_min_deposits: CoinAmino[];
  /**
   * min_reclamation_window is the minimum reclamation window duration allowed.
   */
  min_reclamation_window: DurationAmino;
  /**
   * max_reclamation_window is the maximum reclamation window duration allowed.
   */
  max_reclamation_window: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/akash.market.v1beta5.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    bidMinDeposit: Coin.fromPartial({}),
    orderMaxBids: 0,
    bidMinDeposits: [],
    minReclamationWindow: Duration.fromPartial({}),
    maxReclamationWindow: Duration.fromPartial({})
  };
}
/**
 * Params is the params for the x/market module.
 * @name Params
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Params
 */
export const Params = {
  typeUrl: "/akash.market.v1beta5.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    for (const v of message.bidMinDeposits) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.minReclamationWindow !== undefined) {
      Duration.encode(message.minReclamationWindow, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxReclamationWindow !== undefined) {
      Duration.encode(message.maxReclamationWindow, writer.uint32(42).fork()).ldelim();
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
          message.bidMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderMaxBids = reader.uint32();
          break;
        case 3:
          message.bidMinDeposits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minReclamationWindow = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxReclamationWindow = Duration.decode(reader, reader.uint32());
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
    message.bidMinDeposit = object.bidMinDeposit !== undefined && object.bidMinDeposit !== null ? Coin.fromPartial(object.bidMinDeposit) : undefined;
    message.orderMaxBids = object.orderMaxBids ?? 0;
    message.bidMinDeposits = object.bidMinDeposits?.map(e => Coin.fromPartial(e)) || [];
    message.minReclamationWindow = object.minReclamationWindow !== undefined && object.minReclamationWindow !== null ? Duration.fromPartial(object.minReclamationWindow) : undefined;
    message.maxReclamationWindow = object.maxReclamationWindow !== undefined && object.maxReclamationWindow !== null ? Duration.fromPartial(object.maxReclamationWindow) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.bid_min_deposit !== undefined && object.bid_min_deposit !== null) {
      message.bidMinDeposit = Coin.fromAmino(object.bid_min_deposit);
    }
    if (object.order_max_bids !== undefined && object.order_max_bids !== null) {
      message.orderMaxBids = object.order_max_bids;
    }
    message.bidMinDeposits = object.bid_min_deposits?.map(e => Coin.fromAmino(e)) || [];
    if (object.min_reclamation_window !== undefined && object.min_reclamation_window !== null) {
      message.minReclamationWindow = Duration.fromAmino(object.min_reclamation_window);
    }
    if (object.max_reclamation_window !== undefined && object.max_reclamation_window !== null) {
      message.maxReclamationWindow = Duration.fromAmino(object.max_reclamation_window);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.bid_min_deposit = message.bidMinDeposit ? Coin.toAmino(message.bidMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
    obj.order_max_bids = message.orderMaxBids ?? 0;
    if (message.bidMinDeposits) {
      obj.bid_min_deposits = message.bidMinDeposits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bid_min_deposits = message.bidMinDeposits;
    }
    obj.min_reclamation_window = message.minReclamationWindow ? Duration.toAmino(message.minReclamationWindow) : Duration.toAmino(Duration.fromPartial({}));
    obj.max_reclamation_window = message.maxReclamationWindow ? Duration.toAmino(message.maxReclamationWindow) : Duration.toAmino(Duration.fromPartial({}));
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
      typeUrl: "/akash.market.v1beta5.Params",
      value: Params.encode(message).finish()
    };
  }
};