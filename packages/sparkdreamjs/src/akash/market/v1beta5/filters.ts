//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BidFilters defines flags for bid list filter.
 * @name BidFilters
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.BidFilters
 */
export interface BidFilters {
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
   * State represents the state of the lease.
   */
  state: string;
  /**
   * BSeq (bid sequence) distinguishes multiple bids associated with a single deployment from same provider.
   */
  bseq: number;
}
export interface BidFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta5.BidFilters";
  value: Uint8Array;
}
/**
 * BidFilters defines flags for bid list filter.
 * @name BidFiltersAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.BidFilters
 */
export interface BidFiltersAmino {
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
   * State represents the state of the lease.
   */
  state: string;
  /**
   * BSeq (bid sequence) distinguishes multiple bids associated with a single deployment from same provider.
   */
  bseq: number;
}
export interface BidFiltersAminoMsg {
  type: "/akash.market.v1beta5.BidFilters";
  value: BidFiltersAmino;
}
/**
 * OrderFilters defines flags for order list filter
 * @name OrderFilters
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.OrderFilters
 */
export interface OrderFilters {
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
   * State represents the state of the lease.
   */
  state: string;
}
export interface OrderFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta5.OrderFilters";
  value: Uint8Array;
}
/**
 * OrderFilters defines flags for order list filter
 * @name OrderFiltersAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.OrderFilters
 */
export interface OrderFiltersAmino {
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
   * State represents the state of the lease.
   */
  state: string;
}
export interface OrderFiltersAminoMsg {
  type: "/akash.market.v1beta5.OrderFilters";
  value: OrderFiltersAmino;
}
function createBaseBidFilters(): BidFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    state: "",
    bseq: 0
  };
}
/**
 * BidFilters defines flags for bid list filter.
 * @name BidFilters
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.BidFilters
 */
export const BidFilters = {
  typeUrl: "/akash.market.v1beta5.BidFilters",
  encode(message: BidFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    if (message.bseq !== 0) {
      writer.uint32(56).uint32(message.bseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();
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
          message.state = reader.string();
          break;
        case 7:
          message.bseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BidFilters>): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    message.bseq = object.bseq ?? 0;
    return message;
  },
  fromAmino(object: BidFiltersAmino): BidFilters {
    const message = createBaseBidFilters();
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
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.bseq !== undefined && object.bseq !== null) {
      message.bseq = object.bseq;
    }
    return message;
  },
  toAmino(message: BidFilters): BidFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    obj.state = message.state ?? "";
    obj.bseq = message.bseq ?? 0;
    return obj;
  },
  fromAminoMsg(object: BidFiltersAminoMsg): BidFilters {
    return BidFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: BidFiltersProtoMsg): BidFilters {
    return BidFilters.decode(message.value);
  },
  toProto(message: BidFilters): Uint8Array {
    return BidFilters.encode(message).finish();
  },
  toProtoMsg(message: BidFilters): BidFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.BidFilters",
      value: BidFilters.encode(message).finish()
    };
  }
};
function createBaseOrderFilters(): OrderFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    state: ""
  };
}
/**
 * OrderFilters defines flags for order list filter
 * @name OrderFilters
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.OrderFilters
 */
export const OrderFilters = {
  typeUrl: "/akash.market.v1beta5.OrderFilters",
  encode(message: OrderFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderFilters();
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
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OrderFilters>): OrderFilters {
    const message = createBaseOrderFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: OrderFiltersAmino): OrderFilters {
    const message = createBaseOrderFilters();
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
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: OrderFilters): OrderFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: OrderFiltersAminoMsg): OrderFilters {
    return OrderFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderFiltersProtoMsg): OrderFilters {
    return OrderFilters.decode(message.value);
  },
  toProto(message: OrderFilters): Uint8Array {
    return OrderFilters.encode(message).finish();
  },
  toProtoMsg(message: OrderFilters): OrderFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.OrderFilters",
      value: OrderFilters.encode(message).finish()
    };
  }
};