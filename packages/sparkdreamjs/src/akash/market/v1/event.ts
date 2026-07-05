//@ts-nocheck
import { OrderID, OrderIDAmino } from "./order";
import { BidID, BidIDAmino } from "./bid";
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { LeaseID, LeaseIDAmino } from "./lease";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventOrderCreated is triggered when an order is created.
 * It contains all the information required to identify an order.
 * @name EventOrderCreated
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventOrderCreated
 */
export interface EventOrderCreated {
  /**
   * Id is the unique identifier of the Order.
   */
  id: OrderID;
}
export interface EventOrderCreatedProtoMsg {
  typeUrl: "/akash.market.v1.EventOrderCreated";
  value: Uint8Array;
}
/**
 * EventOrderCreated is triggered when an order is created.
 * It contains all the information required to identify an order.
 * @name EventOrderCreatedAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventOrderCreated
 */
export interface EventOrderCreatedAmino {
  /**
   * Id is the unique identifier of the Order.
   */
  id: OrderIDAmino;
}
export interface EventOrderCreatedAminoMsg {
  type: "/akash.market.v1.EventOrderCreated";
  value: EventOrderCreatedAmino;
}
/**
 * EventOrderClosed is triggered when an order is closed.
 * It contains all the information required to identify an order.
 * @name EventOrderClosed
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventOrderClosed
 */
export interface EventOrderClosed {
  /**
   * Id is the unique identifier of the Order.
   */
  id: OrderID;
}
export interface EventOrderClosedProtoMsg {
  typeUrl: "/akash.market.v1.EventOrderClosed";
  value: Uint8Array;
}
/**
 * EventOrderClosed is triggered when an order is closed.
 * It contains all the information required to identify an order.
 * @name EventOrderClosedAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventOrderClosed
 */
export interface EventOrderClosedAmino {
  /**
   * Id is the unique identifier of the Order.
   */
  id: OrderIDAmino;
}
export interface EventOrderClosedAminoMsg {
  type: "/akash.market.v1.EventOrderClosed";
  value: EventOrderClosedAmino;
}
/**
 * EventBidCreated is triggered when a bid is created.
 * It contains all the information required to identify a bid.
 * @name EventBidCreated
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventBidCreated
 */
export interface EventBidCreated {
  /**
   * Id is the unique identifier of the Bid.
   */
  id: BidID;
  /**
   * Price stated on the Bid.
   */
  price: DecCoin;
}
export interface EventBidCreatedProtoMsg {
  typeUrl: "/akash.market.v1.EventBidCreated";
  value: Uint8Array;
}
/**
 * EventBidCreated is triggered when a bid is created.
 * It contains all the information required to identify a bid.
 * @name EventBidCreatedAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventBidCreated
 */
export interface EventBidCreatedAmino {
  /**
   * Id is the unique identifier of the Bid.
   */
  id: BidIDAmino;
  /**
   * Price stated on the Bid.
   */
  price: DecCoinAmino;
}
export interface EventBidCreatedAminoMsg {
  type: "/akash.market.v1.EventBidCreated";
  value: EventBidCreatedAmino;
}
/**
 * EventBidClosed is triggered when a bid is closed.
 * It contains all the information required to identify a bid.
 * @name EventBidClosed
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventBidClosed
 */
export interface EventBidClosed {
  /**
   * Id is the unique identifier of the Bid.
   */
  id: BidID;
}
export interface EventBidClosedProtoMsg {
  typeUrl: "/akash.market.v1.EventBidClosed";
  value: Uint8Array;
}
/**
 * EventBidClosed is triggered when a bid is closed.
 * It contains all the information required to identify a bid.
 * @name EventBidClosedAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventBidClosed
 */
export interface EventBidClosedAmino {
  /**
   * Id is the unique identifier of the Bid.
   */
  id: BidIDAmino;
}
export interface EventBidClosedAminoMsg {
  type: "/akash.market.v1.EventBidClosed";
  value: EventBidClosedAmino;
}
/**
 * EventLeaseCreated is triggered when a lease is created.
 * It contains all the information required to identify a lease.
 * @name EventLeaseCreated
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventLeaseCreated
 */
export interface EventLeaseCreated {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseID;
  /**
   * Price settled for the lease.
   */
  price: DecCoin;
}
export interface EventLeaseCreatedProtoMsg {
  typeUrl: "/akash.market.v1.EventLeaseCreated";
  value: Uint8Array;
}
/**
 * EventLeaseCreated is triggered when a lease is created.
 * It contains all the information required to identify a lease.
 * @name EventLeaseCreatedAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventLeaseCreated
 */
export interface EventLeaseCreatedAmino {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseIDAmino;
  /**
   * Price settled for the lease.
   */
  price: DecCoinAmino;
}
export interface EventLeaseCreatedAminoMsg {
  type: "/akash.market.v1.EventLeaseCreated";
  value: EventLeaseCreatedAmino;
}
/**
 * EventLeaseClosed is triggered when a lease is closed.
 * It contains all the information required to identify a lease.
 * @name EventLeaseClosed
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventLeaseClosed
 */
export interface EventLeaseClosed {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseID;
}
export interface EventLeaseClosedProtoMsg {
  typeUrl: "/akash.market.v1.EventLeaseClosed";
  value: Uint8Array;
}
/**
 * EventLeaseClosed is triggered when a lease is closed.
 * It contains all the information required to identify a lease.
 * @name EventLeaseClosedAmino
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventLeaseClosed
 */
export interface EventLeaseClosedAmino {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseIDAmino;
}
export interface EventLeaseClosedAminoMsg {
  type: "/akash.market.v1.EventLeaseClosed";
  value: EventLeaseClosedAmino;
}
function createBaseEventOrderCreated(): EventOrderCreated {
  return {
    id: OrderID.fromPartial({})
  };
}
/**
 * EventOrderCreated is triggered when an order is created.
 * It contains all the information required to identify an order.
 * @name EventOrderCreated
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventOrderCreated
 */
export const EventOrderCreated = {
  typeUrl: "/akash.market.v1.EventOrderCreated",
  encode(message: EventOrderCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOrderCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOrderCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOrderCreated>): EventOrderCreated {
    const message = createBaseEventOrderCreated();
    message.id = object.id !== undefined && object.id !== null ? OrderID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventOrderCreatedAmino): EventOrderCreated {
    const message = createBaseEventOrderCreated();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventOrderCreated): EventOrderCreatedAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id) : OrderID.toAmino(OrderID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventOrderCreatedAminoMsg): EventOrderCreated {
    return EventOrderCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOrderCreatedProtoMsg): EventOrderCreated {
    return EventOrderCreated.decode(message.value);
  },
  toProto(message: EventOrderCreated): Uint8Array {
    return EventOrderCreated.encode(message).finish();
  },
  toProtoMsg(message: EventOrderCreated): EventOrderCreatedProtoMsg {
    return {
      typeUrl: "/akash.market.v1.EventOrderCreated",
      value: EventOrderCreated.encode(message).finish()
    };
  }
};
function createBaseEventOrderClosed(): EventOrderClosed {
  return {
    id: OrderID.fromPartial({})
  };
}
/**
 * EventOrderClosed is triggered when an order is closed.
 * It contains all the information required to identify an order.
 * @name EventOrderClosed
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventOrderClosed
 */
export const EventOrderClosed = {
  typeUrl: "/akash.market.v1.EventOrderClosed",
  encode(message: EventOrderClosed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOrderClosed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOrderClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOrderClosed>): EventOrderClosed {
    const message = createBaseEventOrderClosed();
    message.id = object.id !== undefined && object.id !== null ? OrderID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventOrderClosedAmino): EventOrderClosed {
    const message = createBaseEventOrderClosed();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventOrderClosed): EventOrderClosedAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id) : OrderID.toAmino(OrderID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventOrderClosedAminoMsg): EventOrderClosed {
    return EventOrderClosed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOrderClosedProtoMsg): EventOrderClosed {
    return EventOrderClosed.decode(message.value);
  },
  toProto(message: EventOrderClosed): Uint8Array {
    return EventOrderClosed.encode(message).finish();
  },
  toProtoMsg(message: EventOrderClosed): EventOrderClosedProtoMsg {
    return {
      typeUrl: "/akash.market.v1.EventOrderClosed",
      value: EventOrderClosed.encode(message).finish()
    };
  }
};
function createBaseEventBidCreated(): EventBidCreated {
  return {
    id: BidID.fromPartial({}),
    price: DecCoin.fromPartial({})
  };
}
/**
 * EventBidCreated is triggered when a bid is created.
 * It contains all the information required to identify a bid.
 * @name EventBidCreated
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventBidCreated
 */
export const EventBidCreated = {
  typeUrl: "/akash.market.v1.EventBidCreated",
  encode(message: EventBidCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBidCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBidCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBidCreated>): EventBidCreated {
    const message = createBaseEventBidCreated();
    message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: EventBidCreatedAmino): EventBidCreated {
    const message = createBaseEventBidCreated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: EventBidCreated): EventBidCreatedAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : BidID.toAmino(BidID.fromPartial({}));
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventBidCreatedAminoMsg): EventBidCreated {
    return EventBidCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBidCreatedProtoMsg): EventBidCreated {
    return EventBidCreated.decode(message.value);
  },
  toProto(message: EventBidCreated): Uint8Array {
    return EventBidCreated.encode(message).finish();
  },
  toProtoMsg(message: EventBidCreated): EventBidCreatedProtoMsg {
    return {
      typeUrl: "/akash.market.v1.EventBidCreated",
      value: EventBidCreated.encode(message).finish()
    };
  }
};
function createBaseEventBidClosed(): EventBidClosed {
  return {
    id: BidID.fromPartial({})
  };
}
/**
 * EventBidClosed is triggered when a bid is closed.
 * It contains all the information required to identify a bid.
 * @name EventBidClosed
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventBidClosed
 */
export const EventBidClosed = {
  typeUrl: "/akash.market.v1.EventBidClosed",
  encode(message: EventBidClosed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBidClosed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBidClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBidClosed>): EventBidClosed {
    const message = createBaseEventBidClosed();
    message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventBidClosedAmino): EventBidClosed {
    const message = createBaseEventBidClosed();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventBidClosed): EventBidClosedAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : BidID.toAmino(BidID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventBidClosedAminoMsg): EventBidClosed {
    return EventBidClosed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBidClosedProtoMsg): EventBidClosed {
    return EventBidClosed.decode(message.value);
  },
  toProto(message: EventBidClosed): Uint8Array {
    return EventBidClosed.encode(message).finish();
  },
  toProtoMsg(message: EventBidClosed): EventBidClosedProtoMsg {
    return {
      typeUrl: "/akash.market.v1.EventBidClosed",
      value: EventBidClosed.encode(message).finish()
    };
  }
};
function createBaseEventLeaseCreated(): EventLeaseCreated {
  return {
    id: LeaseID.fromPartial({}),
    price: DecCoin.fromPartial({})
  };
}
/**
 * EventLeaseCreated is triggered when a lease is created.
 * It contains all the information required to identify a lease.
 * @name EventLeaseCreated
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventLeaseCreated
 */
export const EventLeaseCreated = {
  typeUrl: "/akash.market.v1.EventLeaseCreated",
  encode(message: EventLeaseCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLeaseCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaseCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventLeaseCreated>): EventLeaseCreated {
    const message = createBaseEventLeaseCreated();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: EventLeaseCreatedAmino): EventLeaseCreated {
    const message = createBaseEventLeaseCreated();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: EventLeaseCreated): EventLeaseCreatedAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : LeaseID.toAmino(LeaseID.fromPartial({}));
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventLeaseCreatedAminoMsg): EventLeaseCreated {
    return EventLeaseCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLeaseCreatedProtoMsg): EventLeaseCreated {
    return EventLeaseCreated.decode(message.value);
  },
  toProto(message: EventLeaseCreated): Uint8Array {
    return EventLeaseCreated.encode(message).finish();
  },
  toProtoMsg(message: EventLeaseCreated): EventLeaseCreatedProtoMsg {
    return {
      typeUrl: "/akash.market.v1.EventLeaseCreated",
      value: EventLeaseCreated.encode(message).finish()
    };
  }
};
function createBaseEventLeaseClosed(): EventLeaseClosed {
  return {
    id: LeaseID.fromPartial({})
  };
}
/**
 * EventLeaseClosed is triggered when a lease is closed.
 * It contains all the information required to identify a lease.
 * @name EventLeaseClosed
 * @package akash.market.v1
 * @see proto type: akash.market.v1.EventLeaseClosed
 */
export const EventLeaseClosed = {
  typeUrl: "/akash.market.v1.EventLeaseClosed",
  encode(message: EventLeaseClosed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLeaseClosed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaseClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventLeaseClosed>): EventLeaseClosed {
    const message = createBaseEventLeaseClosed();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventLeaseClosedAmino): EventLeaseClosed {
    const message = createBaseEventLeaseClosed();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventLeaseClosed): EventLeaseClosedAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : LeaseID.toAmino(LeaseID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventLeaseClosedAminoMsg): EventLeaseClosed {
    return EventLeaseClosed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLeaseClosedProtoMsg): EventLeaseClosed {
    return EventLeaseClosed.decode(message.value);
  },
  toProto(message: EventLeaseClosed): Uint8Array {
    return EventLeaseClosed.encode(message).finish();
  },
  toProtoMsg(message: EventLeaseClosed): EventLeaseClosedProtoMsg {
    return {
      typeUrl: "/akash.market.v1.EventLeaseClosed",
      value: EventLeaseClosed.encode(message).finish()
    };
  }
};