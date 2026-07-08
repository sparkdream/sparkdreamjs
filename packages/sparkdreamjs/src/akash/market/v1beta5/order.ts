//@ts-nocheck
import { OrderID, OrderIDAmino } from "../v1/order";
import { GroupSpec, GroupSpecAmino } from "../../deployment/v1beta4/groupspec";
import { DeploymentReclamation, DeploymentReclamationAmino } from "../../deployment/v1/deployment";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** State is an enum which refers to state of order. */
export enum Order_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** open - OrderOpen denotes state for order open. */
  open = 1,
  /** active - OrderMatched denotes state for order matched. */
  active = 2,
  /** closed - OrderClosed denotes state for order lost. */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Order_StateAmino = Order_State;
export function order_StateFromJSON(object: any): Order_State {
  switch (object) {
    case 0:
    case "invalid":
      return Order_State.invalid;
    case 1:
    case "open":
      return Order_State.open;
    case 2:
    case "active":
      return Order_State.active;
    case 3:
    case "closed":
      return Order_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_State.UNRECOGNIZED;
  }
}
export function order_StateToJSON(object: Order_State): string {
  switch (object) {
    case Order_State.invalid:
      return "invalid";
    case Order_State.open:
      return "open";
    case Order_State.active:
      return "active";
    case Order_State.closed:
      return "closed";
    case Order_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Order stores orderID, state of order and other details.
 * @name Order
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Order
 */
export interface Order {
  /**
   * Id is the unique identifier of the order.
   */
  id: OrderID;
  state: Order_State;
  spec: GroupSpec;
  createdAt: bigint;
  /**
   * reclamation is the deployment-level reclamation requirement, propagated to the order.
   * Nil means the deployment does not require reclamation.
   */
  reclamation?: DeploymentReclamation;
}
export interface OrderProtoMsg {
  typeUrl: "/akash.market.v1beta5.Order";
  value: Uint8Array;
}
/**
 * Order stores orderID, state of order and other details.
 * @name OrderAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Order
 */
export interface OrderAmino {
  /**
   * Id is the unique identifier of the order.
   */
  id: OrderIDAmino;
  state: Order_State;
  spec: GroupSpecAmino;
  created_at?: string;
  /**
   * reclamation is the deployment-level reclamation requirement, propagated to the order.
   * Nil means the deployment does not require reclamation.
   */
  reclamation?: DeploymentReclamationAmino;
}
export interface OrderAminoMsg {
  type: "/akash.market.v1beta5.Order";
  value: OrderAmino;
}
function createBaseOrder(): Order {
  return {
    id: OrderID.fromPartial({}),
    state: 0,
    spec: GroupSpec.fromPartial({}),
    createdAt: BigInt(0),
    reclamation: undefined
  };
}
/**
 * Order stores orderID, state of order and other details.
 * @name Order
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.Order
 */
export const Order = {
  typeUrl: "/akash.market.v1beta5.Order",
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.spec !== undefined) {
      GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.reclamation !== undefined) {
      DeploymentReclamation.encode(message.reclamation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.spec = GroupSpec.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.reclamation = DeploymentReclamation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id !== undefined && object.id !== null ? OrderID.fromPartial(object.id) : undefined;
    message.state = object.state ?? 0;
    message.spec = object.spec !== undefined && object.spec !== null ? GroupSpec.fromPartial(object.spec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.reclamation = object.reclamation !== undefined && object.reclamation !== null ? DeploymentReclamation.fromPartial(object.reclamation) : undefined;
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = GroupSpec.fromAmino(object.spec);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.reclamation !== undefined && object.reclamation !== null) {
      message.reclamation = DeploymentReclamation.fromAmino(object.reclamation);
    }
    return message;
  },
  toAmino(message: Order): OrderAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id) : OrderID.toAmino(OrderID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.spec = message.spec ? GroupSpec.toAmino(message.spec) : GroupSpec.toAmino(GroupSpec.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.reclamation = message.reclamation ? DeploymentReclamation.toAmino(message.reclamation) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg): Order {
    return Order.decode(message.value);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.Order",
      value: Order.encode(message).finish()
    };
  }
};