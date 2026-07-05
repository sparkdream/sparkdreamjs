//@ts-nocheck
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** State is an enum which refers to state of lease. */
export enum Lease_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** active - LeaseActive denotes state for lease active. */
  active = 1,
  /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds. */
  insufficient_funds = 2,
  /** closed - LeaseClosed denotes state for lease closed. */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Lease_StateAmino = Lease_State;
export function lease_StateFromJSON(object: any): Lease_State {
  switch (object) {
    case 0:
    case "invalid":
      return Lease_State.invalid;
    case 1:
    case "active":
      return Lease_State.active;
    case 2:
    case "insufficient_funds":
      return Lease_State.insufficient_funds;
    case 3:
    case "closed":
      return Lease_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lease_State.UNRECOGNIZED;
  }
}
export function lease_StateToJSON(object: Lease_State): string {
  switch (object) {
    case Lease_State.invalid:
      return "invalid";
    case Lease_State.active:
      return "active";
    case Lease_State.insufficient_funds:
      return "insufficient_funds";
    case Lease_State.closed:
      return "closed";
    case Lease_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * LeaseID stores bid details of lease.
 * @name LeaseID
 * @package akash.market.v1
 * @see proto type: akash.market.v1.LeaseID
 */
export interface LeaseID {
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
}
export interface LeaseIDProtoMsg {
  typeUrl: "/akash.market.v1.LeaseID";
  value: Uint8Array;
}
/**
 * LeaseID stores bid details of lease.
 * @name LeaseIDAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.LeaseID
 */
export interface LeaseIDAmino {
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
}
export interface LeaseIDAminoMsg {
  type: "/akash.market.v1.LeaseID";
  value: LeaseIDAmino;
}
/**
 * Lease stores LeaseID, state of lease and price.
 * The Lease defines the terms under which the provider allocates resources to fulfill
 * the tenant's deployment requirements.
 * Leases are paid from the tenant to the provider through a deposit and withdraw mechanism and are priced in blocks.
 * @name Lease
 * @package akash.market.v1
 * @see proto type: akash.market.v1.Lease
 */
export interface Lease {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseID;
  /**
   * State represents the state of the Lease.
   */
  state: Lease_State;
  /**
   * Price holds the settled price for the Lease.
   */
  price: DecCoin;
  /**
   * CreatedAt is the block height at which the Lease was created.
   */
  createdAt: bigint;
  /**
   * ClosedOn is the block height at which the Lease was closed.
   */
  closedOn: bigint;
}
export interface LeaseProtoMsg {
  typeUrl: "/akash.market.v1.Lease";
  value: Uint8Array;
}
/**
 * Lease stores LeaseID, state of lease and price.
 * The Lease defines the terms under which the provider allocates resources to fulfill
 * the tenant's deployment requirements.
 * Leases are paid from the tenant to the provider through a deposit and withdraw mechanism and are priced in blocks.
 * @name LeaseAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.Lease
 */
export interface LeaseAmino {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseIDAmino;
  /**
   * State represents the state of the Lease.
   */
  state: Lease_State;
  /**
   * Price holds the settled price for the Lease.
   */
  price: DecCoinAmino;
  /**
   * CreatedAt is the block height at which the Lease was created.
   */
  created_at: string;
  /**
   * ClosedOn is the block height at which the Lease was closed.
   */
  closed_on: string;
}
export interface LeaseAminoMsg {
  type: "/akash.market.v1.Lease";
  value: LeaseAmino;
}
function createBaseLeaseID(): LeaseID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
/**
 * LeaseID stores bid details of lease.
 * @name LeaseID
 * @package akash.market.v1
 * @see proto type: akash.market.v1.LeaseID
 */
export const LeaseID = {
  typeUrl: "/akash.market.v1.LeaseID",
  encode(message: LeaseID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseID();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LeaseID>): LeaseID {
    const message = createBaseLeaseID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: LeaseIDAmino): LeaseID {
    const message = createBaseLeaseID();
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
    return message;
  },
  toAmino(message: LeaseID): LeaseIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    return obj;
  },
  fromAminoMsg(object: LeaseIDAminoMsg): LeaseID {
    return LeaseID.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseIDProtoMsg): LeaseID {
    return LeaseID.decode(message.value);
  },
  toProto(message: LeaseID): Uint8Array {
    return LeaseID.encode(message).finish();
  },
  toProtoMsg(message: LeaseID): LeaseIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1.LeaseID",
      value: LeaseID.encode(message).finish()
    };
  }
};
function createBaseLease(): Lease {
  return {
    id: LeaseID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0),
    closedOn: BigInt(0)
  };
}
/**
 * Lease stores LeaseID, state of lease and price.
 * The Lease defines the terms under which the provider allocates resources to fulfill
 * the tenant's deployment requirements.
 * Leases are paid from the tenant to the provider through a deposit and withdraw mechanism and are priced in blocks.
 * @name Lease
 * @package akash.market.v1
 * @see proto type: akash.market.v1.Lease
 */
export const Lease = {
  typeUrl: "/akash.market.v1.Lease",
  encode(message: Lease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
    if (message.closedOn !== BigInt(0)) {
      writer.uint32(40).int64(message.closedOn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Lease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
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
          message.closedOn = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Lease>): Lease {
    const message = createBaseLease();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.closedOn = object.closedOn !== undefined && object.closedOn !== null ? BigInt(object.closedOn.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LeaseAmino): Lease {
    const message = createBaseLease();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
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
    if (object.closed_on !== undefined && object.closed_on !== null) {
      message.closedOn = BigInt(object.closed_on);
    }
    return message;
  },
  toAmino(message: Lease): LeaseAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : LeaseID.toAmino(LeaseID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.created_at = message.createdAt ? message.createdAt?.toString() : "0";
    obj.closed_on = message.closedOn ? message.closedOn?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: LeaseAminoMsg): Lease {
    return Lease.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseProtoMsg): Lease {
    return Lease.decode(message.value);
  },
  toProto(message: Lease): Uint8Array {
    return Lease.encode(message).finish();
  },
  toProtoMsg(message: Lease): LeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1.Lease",
      value: Lease.encode(message).finish()
    };
  }
};