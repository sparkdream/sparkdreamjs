//@ts-nocheck
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { ResourceOffer, ResourceOfferAmino } from "./resourcesoffer";
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
 * BidID stores owner and all other seq numbers.
 * A successful bid becomes a Lease(ID).
 * @name BidID
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.BidID
 */
export interface BidID {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
   * It is used to differentiate deployments created by the same owner.
   */
  dseq: bigint;
  /**
   * Gseq (group sequence number) is a unique numeric identifier for the group.
   * It is used to differentiate groups created by the same owner in a deployment.
   */
  gseq: number;
  /**
   * Oseq (order sequence) distinguishes multiple orders associated with a single deployment.
   * Oseq is incremented when a lease associated with an existing deployment is closed, and a new order is generated.
   */
  oseq: number;
  /**
   * Provider is the account bech32 address of the provider making the bid.
   * It is a string representing a valid account bech32 address.
   * 
   * Example:
   *   "akash1..."
   */
  provider: string;
  /**
   * BSeq (bid sequence) distinguishes multiple bids associated with a single deployment from same provider.
   */
  bseq: number;
}
export interface BidIDProtoMsg {
  typeUrl: "/akash.market.v2beta1.BidID";
  value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers.
 * A successful bid becomes a Lease(ID).
 * @name BidIDAmino
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.BidID
 */
export interface BidIDAmino {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
   * It is used to differentiate deployments created by the same owner.
   */
  dseq: string;
  /**
   * Gseq (group sequence number) is a unique numeric identifier for the group.
   * It is used to differentiate groups created by the same owner in a deployment.
   */
  gseq: number;
  /**
   * Oseq (order sequence) distinguishes multiple orders associated with a single deployment.
   * Oseq is incremented when a lease associated with an existing deployment is closed, and a new order is generated.
   */
  oseq: number;
  /**
   * Provider is the account bech32 address of the provider making the bid.
   * It is a string representing a valid account bech32 address.
   * 
   * Example:
   *   "akash1..."
   */
  provider: string;
  /**
   * BSeq (bid sequence) distinguishes multiple bids associated with a single deployment from same provider.
   */
  bseq: number;
}
export interface BidIDAminoMsg {
  type: "/akash.market.v2beta1.BidID";
  value: BidIDAmino;
}
/**
 * Bid stores BidID, state of bid and price.
 * @name Bid
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.Bid
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
  prices: DecCoin[];
  /**
   * CreatedAt is the block height at which the Bid was created.
   */
  createdAt: bigint;
  /**
   * ResourceOffer is a list of offers.
   */
  resourcesOffer: ResourceOffer[];
}
export interface BidProtoMsg {
  typeUrl: "/akash.market.v2beta1.Bid";
  value: Uint8Array;
}
/**
 * Bid stores BidID, state of bid and price.
 * @name BidAmino
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.Bid
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
  prices: DecCoinAmino[];
  /**
   * CreatedAt is the block height at which the Bid was created.
   */
  created_at: string;
  /**
   * ResourceOffer is a list of offers.
   */
  resources_offer: ResourceOfferAmino[];
}
export interface BidAminoMsg {
  type: "/akash.market.v2beta1.Bid";
  value: BidAmino;
}
function createBaseBidID(): BidID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    bseq: 0
  };
}
/**
 * BidID stores owner and all other seq numbers.
 * A successful bid becomes a Lease(ID).
 * @name BidID
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.BidID
 */
export const BidID = {
  typeUrl: "/akash.market.v2beta1.BidID",
  encode(message: BidID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.bseq !== 0) {
      writer.uint32(48).uint32(message.bseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.bseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BidID>): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.bseq = object.bseq ?? 0;
    return message;
  },
  fromAmino(object: BidIDAmino): BidID {
    const message = createBaseBidID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.bseq !== undefined && object.bseq !== null) {
      message.bseq = object.bseq;
    }
    return message;
  },
  toAmino(message: BidID): BidIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    obj.bseq = message.bseq ?? 0;
    return obj;
  },
  fromAminoMsg(object: BidIDAminoMsg): BidID {
    return BidID.fromAmino(object.value);
  },
  fromProtoMsg(message: BidIDProtoMsg): BidID {
    return BidID.decode(message.value);
  },
  toProto(message: BidID): Uint8Array {
    return BidID.encode(message).finish();
  },
  toProtoMsg(message: BidID): BidIDProtoMsg {
    return {
      typeUrl: "/akash.market.v2beta1.BidID",
      value: BidID.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    id: BidID.fromPartial({}),
    state: 0,
    prices: [],
    createdAt: BigInt(0),
    resourcesOffer: []
  };
}
/**
 * Bid stores BidID, state of bid and price.
 * @name Bid
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.Bid
 */
export const Bid = {
  typeUrl: "/akash.market.v2beta1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    for (const v of message.prices) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.prices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
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
    message.prices = object.prices?.map(e => DecCoin.fromPartial(e)) || [];
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
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
    message.prices = object.prices?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    message.resourcesOffer = object.resources_offer?.map(e => ResourceOffer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : BidID.toAmino(BidID.fromPartial({}));
    obj.state = message.state ?? 0;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.created_at = message.createdAt ? message.createdAt?.toString() : "0";
    if (message.resourcesOffer) {
      obj.resources_offer = message.resourcesOffer.map(e => e ? ResourceOffer.toAmino(e) : undefined);
    } else {
      obj.resources_offer = message.resourcesOffer;
    }
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
      typeUrl: "/akash.market.v2beta1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};