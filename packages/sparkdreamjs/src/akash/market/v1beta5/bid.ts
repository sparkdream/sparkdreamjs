//@ts-nocheck
import { BidID, BidIDAmino } from "../v1/bid";
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { ResourceOffer, ResourceOfferAmino } from "./resourcesoffer";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** BidState is an enum which refers to state of bid. */
export enum Bid_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** open - BidOpen denotes state for bid open. */
  open = 1,
  /** active - BidMatched denotes state for bid open. */
  active = 2,
  /** lost - BidLost denotes state for bid lost. */
  lost = 3,
  /** closed - BidClosed denotes state for bid closed. */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Bid_StateAmino = Bid_State;
export function bid_StateFromJSON(object: any): Bid_State {
  switch (object) {
    case 0:
    case "invalid":
      return Bid_State.invalid;
    case 1:
    case "open":
      return Bid_State.open;
    case 2:
    case "active":
      return Bid_State.active;
    case 3:
    case "lost":
      return Bid_State.lost;
    case 4:
    case "closed":
      return Bid_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Bid_State.UNRECOGNIZED;
  }
}
export function bid_StateToJSON(object: Bid_State): string {
  switch (object) {
    case Bid_State.invalid:
      return "invalid";
    case Bid_State.open:
      return "open";
    case Bid_State.active:
      return "active";
    case Bid_State.lost:
      return "lost";
    case Bid_State.closed:
      return "closed";
    case Bid_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Bid stores BidID, state of bid and price.
 * @name Bid
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Bid
 */
export interface Bid {
  /**
   * BidID stores owner and all other seq numbers.
   * A successful bid becomes a Lease(ID).
   */
  id: BidID;
  /**
   * State represents the state of the Bid.
   */
  state: Bid_State;
  /**
   * Price holds the pricing stated on the Bid.
   */
  price: DecCoin;
  /**
   * CreatedAt is the block height at which the Bid was created.
   */
  createdAt: bigint;
  /**
   * ResourceOffer is a list of offers.
   */
  resourcesOffer: ResourceOffer[];
  /**
   * reclamation_window is the reclamation window offered by this provider.
   */
  reclamationWindow?: Duration;
}
export interface BidProtoMsg {
  typeUrl: "/akash.market.v1beta5.Bid";
  value: Uint8Array;
}
/**
 * Bid stores BidID, state of bid and price.
 * @name BidAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Bid
 */
export interface BidAmino {
  /**
   * BidID stores owner and all other seq numbers.
   * A successful bid becomes a Lease(ID).
   */
  id: BidIDAmino;
  /**
   * State represents the state of the Bid.
   */
  state: Bid_State;
  /**
   * Price holds the pricing stated on the Bid.
   */
  price: DecCoinAmino;
  /**
   * CreatedAt is the block height at which the Bid was created.
   */
  created_at: string;
  /**
   * ResourceOffer is a list of offers.
   */
  resources_offer: ResourceOfferAmino[];
  /**
   * reclamation_window is the reclamation window offered by this provider.
   */
  reclamation_window?: DurationAmino;
}
export interface BidAminoMsg {
  type: "/akash.market.v1beta5.Bid";
  value: BidAmino;
}
function createBaseBid(): Bid {
  return {
    id: BidID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0),
    resourcesOffer: [],
    reclamationWindow: undefined
  };
}
/**
 * Bid stores BidID, state of bid and price.
 * @name Bid
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Bid
 */
export const Bid = {
  typeUrl: "/akash.market.v1beta5.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.reclamationWindow !== undefined) {
      Duration.encode(message.reclamationWindow, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
          break;
        case 6:
          message.reclamationWindow = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
    message.reclamationWindow = object.reclamationWindow !== undefined && object.reclamationWindow !== null ? Duration.fromPartial(object.reclamationWindow) : undefined;
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    message.resourcesOffer = object.resources_offer?.map(e => ResourceOffer.fromAmino(e)) || [];
    if (object.reclamation_window !== undefined && object.reclamation_window !== null) {
      message.reclamationWindow = Duration.fromAmino(object.reclamation_window);
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : BidID.toAmino(BidID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.created_at = message.createdAt ? message.createdAt?.toString() : "0";
    if (message.resourcesOffer) {
      obj.resources_offer = message.resourcesOffer.map(e => e ? ResourceOffer.toAmino(e) : undefined);
    } else {
      obj.resources_offer = message.resourcesOffer;
    }
    obj.reclamation_window = message.reclamationWindow ? Duration.toAmino(message.reclamationWindow) : undefined;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.Bid",
      value: Bid.encode(message).finish()
    };
  }
};