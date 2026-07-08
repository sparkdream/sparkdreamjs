//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BidID stores owner and all other seq numbers.
 * A successful bid becomes a Lease(ID).
 * @name BidID
 * @package akash.market.v1
 * @see proto type: akash.market.v1.BidID
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
  typeUrl: "/akash.market.v1.BidID";
  value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers.
 * A successful bid becomes a Lease(ID).
 * @name BidIDAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.BidID
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
  type: "/akash.market.v1.BidID";
  value: BidIDAmino;
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
 * @package akash.market.v1
 * @see proto type: akash.market.v1.BidID
 */
export const BidID = {
  typeUrl: "/akash.market.v1.BidID",
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
      typeUrl: "/akash.market.v1.BidID",
      value: BidID.encode(message).finish()
    };
  }
};