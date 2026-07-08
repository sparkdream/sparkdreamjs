//@ts-nocheck
import { BidID, BidIDAmino } from "../v1/bid";
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Deposit, DepositAmino } from "../../base/deposit/v1/deposit";
import { ResourceOffer, ResourceOfferAmino } from "./resourcesoffer";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { LeaseClosedReason } from "../v1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateBid defines an SDK message for creating Bid.
 * @name MsgCreateBid
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateBid
 */
export interface MsgCreateBid {
  id: BidID;
  /**
   * Price holds the pricing stated on the Bid.
   */
  price: DecCoin;
  /**
   * Deposit holds the amount of coins to deposit.
   */
  deposit: Deposit;
  /**
   * ResourceOffer is a list of resource offers.
   */
  resourcesOffer: ResourceOffer[];
  /**
   * reclamation_window is the reclamation window duration the provider offers.
   * If the order requires reclamation, this must be >= the order's min_window.
   * Nil means the provider does not offer reclamation on this bid.
   */
  reclamationWindow?: Duration;
}
export interface MsgCreateBidProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCreateBid";
  value: Uint8Array;
}
/**
 * MsgCreateBid defines an SDK message for creating Bid.
 * @name MsgCreateBidAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateBid
 */
export interface MsgCreateBidAmino {
  id: BidIDAmino;
  /**
   * Price holds the pricing stated on the Bid.
   */
  price: DecCoinAmino;
  /**
   * Deposit holds the amount of coins to deposit.
   */
  deposit: DepositAmino;
  /**
   * ResourceOffer is a list of resource offers.
   */
  resources_offer: ResourceOfferAmino[];
  /**
   * reclamation_window is the reclamation window duration the provider offers.
   * If the order requires reclamation, this must be >= the order's min_window.
   * Nil means the provider does not offer reclamation on this bid.
   */
  reclamation_window?: DurationAmino;
}
export interface MsgCreateBidAminoMsg {
  type: "/akash.market.v1beta5.MsgCreateBid";
  value: MsgCreateBidAmino;
}
/**
 * MsgCreateBidResponse defines the Msg/CreateBid response type.
 * @name MsgCreateBidResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateBidResponse
 */
export interface MsgCreateBidResponse {}
export interface MsgCreateBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCreateBidResponse";
  value: Uint8Array;
}
/**
 * MsgCreateBidResponse defines the Msg/CreateBid response type.
 * @name MsgCreateBidResponseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateBidResponse
 */
export interface MsgCreateBidResponseAmino {}
export interface MsgCreateBidResponseAminoMsg {
  type: "/akash.market.v1beta5.MsgCreateBidResponse";
  value: MsgCreateBidResponseAmino;
}
/**
 * MsgCloseBid defines an SDK message for closing bid.
 * @name MsgCloseBid
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseBid
 */
export interface MsgCloseBid {
  /**
   * Id is the unique identifier of the Bid.
   */
  id: BidID;
  reason: LeaseClosedReason;
}
export interface MsgCloseBidProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCloseBid";
  value: Uint8Array;
}
/**
 * MsgCloseBid defines an SDK message for closing bid.
 * @name MsgCloseBidAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseBid
 */
export interface MsgCloseBidAmino {
  /**
   * Id is the unique identifier of the Bid.
   */
  id: BidIDAmino;
  reason: LeaseClosedReason;
}
export interface MsgCloseBidAminoMsg {
  type: "/akash.market.v1beta5.MsgCloseBid";
  value: MsgCloseBidAmino;
}
/**
 * MsgCloseBidResponse defines the Msg/CloseBid response type.
 * @name MsgCloseBidResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseBidResponse
 */
export interface MsgCloseBidResponse {}
export interface MsgCloseBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCloseBidResponse";
  value: Uint8Array;
}
/**
 * MsgCloseBidResponse defines the Msg/CloseBid response type.
 * @name MsgCloseBidResponseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseBidResponse
 */
export interface MsgCloseBidResponseAmino {}
export interface MsgCloseBidResponseAminoMsg {
  type: "/akash.market.v1beta5.MsgCloseBidResponse";
  value: MsgCloseBidResponseAmino;
}
function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    id: BidID.fromPartial({}),
    price: DecCoin.fromPartial({}),
    deposit: Deposit.fromPartial({}),
    resourcesOffer: [],
    reclamationWindow: undefined
  };
}
/**
 * MsgCreateBid defines an SDK message for creating Bid.
 * @name MsgCreateBid
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateBid
 */
export const MsgCreateBid = {
  typeUrl: "/akash.market.v1beta5.MsgCreateBid",
  encode(message: MsgCreateBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.reclamationWindow !== undefined) {
      Duration.encode(message.reclamationWindow, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        case 2:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 3:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        case 4:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reclamationWindow = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
    message.reclamationWindow = object.reclamationWindow !== undefined && object.reclamationWindow !== null ? Duration.fromPartial(object.reclamationWindow) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateBidAmino): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    message.resourcesOffer = object.resources_offer?.map(e => ResourceOffer.fromAmino(e)) || [];
    if (object.reclamation_window !== undefined && object.reclamation_window !== null) {
      message.reclamationWindow = Duration.fromAmino(object.reclamation_window);
    }
    return message;
  },
  toAmino(message: MsgCreateBid): MsgCreateBidAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : BidID.toAmino(BidID.fromPartial({}));
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : Deposit.toAmino(Deposit.fromPartial({}));
    if (message.resourcesOffer) {
      obj.resources_offer = message.resourcesOffer.map(e => e ? ResourceOffer.toAmino(e) : undefined);
    } else {
      obj.resources_offer = message.resourcesOffer;
    }
    obj.reclamation_window = message.reclamationWindow ? Duration.toAmino(message.reclamationWindow) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidAminoMsg): MsgCreateBid {
    return MsgCreateBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBidProtoMsg): MsgCreateBid {
    return MsgCreateBid.decode(message.value);
  },
  toProto(message: MsgCreateBid): Uint8Array {
    return MsgCreateBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBid): MsgCreateBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCreateBid",
      value: MsgCreateBid.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return {};
}
/**
 * MsgCreateBidResponse defines the Msg/CreateBid response type.
 * @name MsgCreateBidResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateBidResponse
 */
export const MsgCreateBidResponse = {
  typeUrl: "/akash.market.v1beta5.MsgCreateBidResponse",
  encode(_: MsgCreateBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  fromAmino(_: MsgCreateBidResponseAmino): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  toAmino(_: MsgCreateBidResponse): MsgCreateBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidResponseAminoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBidResponseProtoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.decode(message.value);
  },
  toProto(message: MsgCreateBidResponse): Uint8Array {
    return MsgCreateBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBidResponse): MsgCreateBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCreateBidResponse",
      value: MsgCreateBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBid(): MsgCloseBid {
  return {
    id: BidID.fromPartial({}),
    reason: 0
  };
}
/**
 * MsgCloseBid defines an SDK message for closing bid.
 * @name MsgCloseBid
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseBid
 */
export const MsgCloseBid = {
  typeUrl: "/akash.market.v1beta5.MsgCloseBid",
  encode(message: MsgCloseBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: MsgCloseBidAmino): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgCloseBid): MsgCloseBidAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : BidID.toAmino(BidID.fromPartial({}));
    obj.reason = message.reason ?? 0;
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidAminoMsg): MsgCloseBid {
    return MsgCloseBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBidProtoMsg): MsgCloseBid {
    return MsgCloseBid.decode(message.value);
  },
  toProto(message: MsgCloseBid): Uint8Array {
    return MsgCloseBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBid): MsgCloseBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCloseBid",
      value: MsgCloseBid.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
  return {};
}
/**
 * MsgCloseBidResponse defines the Msg/CloseBid response type.
 * @name MsgCloseBidResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseBidResponse
 */
export const MsgCloseBidResponse = {
  typeUrl: "/akash.market.v1beta5.MsgCloseBidResponse",
  encode(_: MsgCloseBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  fromAmino(_: MsgCloseBidResponseAmino): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  toAmino(_: MsgCloseBidResponse): MsgCloseBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidResponseAminoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBidResponseProtoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.decode(message.value);
  },
  toProto(message: MsgCloseBidResponse): Uint8Array {
    return MsgCloseBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBidResponse): MsgCloseBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCloseBidResponse",
      value: MsgCloseBidResponse.encode(message).finish()
    };
  }
};