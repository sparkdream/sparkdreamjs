//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Order, OrderAmino } from "./order";
import { Lease, LeaseAmino } from "../v1/lease";
import { Bid, BidAmino } from "./bid";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the basic genesis state used by market module.
 * @name GenesisState
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.GenesisState
 */
export interface GenesisState {
  /**
   * Params holds parameters of the genesis of market.
   */
  params: Params;
  /**
   * Orders is a list of orders in the genesis state.
   */
  orders: Order[];
  /**
   * Leases is a list of leases in the genesis state.
   */
  leases: Lease[];
  /**
   * Bids is a list of bids in the genesis state.
   */
  bids: Bid[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.market.v1beta5.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the basic genesis state used by market module.
 * @name GenesisStateAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * Params holds parameters of the genesis of market.
   */
  params: ParamsAmino;
  /**
   * Orders is a list of orders in the genesis state.
   */
  orders: OrderAmino[];
  /**
   * Leases is a list of leases in the genesis state.
   */
  leases: LeaseAmino[];
  /**
   * Bids is a list of bids in the genesis state.
   */
  bids: BidAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/akash.market.v1beta5.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    orders: [],
    leases: [],
    bids: []
  };
}
/**
 * GenesisState defines the basic genesis state used by market module.
 * @name GenesisState
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.market.v1beta5.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 3:
          message.leases.push(Lease.decode(reader, reader.uint32()));
          break;
        case 4:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromAmino(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toAmino(e) : undefined);
    } else {
      obj.leases = message.leases;
    }
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
    } else {
      obj.bids = message.bids;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};