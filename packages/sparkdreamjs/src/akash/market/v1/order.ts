//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * OrderId stores owner and all other seq numbers.
 * @name OrderID
 * @package akash.market.v1
 * @see proto type: akash.market.v1.OrderID
 */
export interface OrderID {
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
}
export interface OrderIDProtoMsg {
  typeUrl: "/akash.market.v1.OrderID";
  value: Uint8Array;
}
/**
 * OrderId stores owner and all other seq numbers.
 * @name OrderIDAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.OrderID
 */
export interface OrderIDAmino {
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
}
export interface OrderIDAminoMsg {
  type: "/akash.market.v1.OrderID";
  value: OrderIDAmino;
}
function createBaseOrderID(): OrderID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0
  };
}
/**
 * OrderId stores owner and all other seq numbers.
 * @name OrderID
 * @package akash.market.v1
 * @see proto type: akash.market.v1.OrderID
 */
export const OrderID = {
  typeUrl: "/akash.market.v1.OrderID",
  encode(message: OrderID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderID();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OrderID>): OrderID {
    const message = createBaseOrderID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    return message;
  },
  fromAmino(object: OrderIDAmino): OrderID {
    const message = createBaseOrderID();
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
    return message;
  },
  toAmino(message: OrderID): OrderIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    return obj;
  },
  fromAminoMsg(object: OrderIDAminoMsg): OrderID {
    return OrderID.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderIDProtoMsg): OrderID {
    return OrderID.decode(message.value);
  },
  toProto(message: OrderID): Uint8Array {
    return OrderID.encode(message).finish();
  },
  toProtoMsg(message: OrderID): OrderIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1.OrderID",
      value: OrderID.encode(message).finish()
    };
  }
};