//@ts-nocheck
import { BidID, BidIDAmino } from "../v1/bid";
import { LeaseID, LeaseIDAmino } from "../v1/lease";
import { LeaseClosedReason } from "../v1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateLease is sent to create a lease.
 * @name MsgCreateLease
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateLease
 */
export interface MsgCreateLease {
  /**
   * BidId is the unique identifier of the Bid.
   */
  bidId: BidID;
}
export interface MsgCreateLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCreateLease";
  value: Uint8Array;
}
/**
 * MsgCreateLease is sent to create a lease.
 * @name MsgCreateLeaseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateLease
 */
export interface MsgCreateLeaseAmino {
  /**
   * BidId is the unique identifier of the Bid.
   */
  bid_id: BidIDAmino;
}
export interface MsgCreateLeaseAminoMsg {
  type: "/akash.market.v1beta5.MsgCreateLease";
  value: MsgCreateLeaseAmino;
}
/**
 * MsgCreateLeaseResponse is the response from creating a lease.
 * @name MsgCreateLeaseResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateLeaseResponse
 */
export interface MsgCreateLeaseResponse {}
export interface MsgCreateLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCreateLeaseResponse";
  value: Uint8Array;
}
/**
 * MsgCreateLeaseResponse is the response from creating a lease.
 * @name MsgCreateLeaseResponseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateLeaseResponse
 */
export interface MsgCreateLeaseResponseAmino {}
export interface MsgCreateLeaseResponseAminoMsg {
  type: "/akash.market.v1beta5.MsgCreateLeaseResponse";
  value: MsgCreateLeaseResponseAmino;
}
/**
 * MsgWithdrawLease defines an SDK message for withdrawing lease funds.
 * @name MsgWithdrawLease
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgWithdrawLease
 */
export interface MsgWithdrawLease {
  /**
   * BidId is the unique identifier of the Bid.
   */
  id: LeaseID;
}
export interface MsgWithdrawLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgWithdrawLease";
  value: Uint8Array;
}
/**
 * MsgWithdrawLease defines an SDK message for withdrawing lease funds.
 * @name MsgWithdrawLeaseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgWithdrawLease
 */
export interface MsgWithdrawLeaseAmino {
  /**
   * BidId is the unique identifier of the Bid.
   */
  id: LeaseIDAmino;
}
export interface MsgWithdrawLeaseAminoMsg {
  type: "/akash.market.v1beta5.MsgWithdrawLease";
  value: MsgWithdrawLeaseAmino;
}
/**
 * MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.
 * @name MsgWithdrawLeaseResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgWithdrawLeaseResponse
 */
export interface MsgWithdrawLeaseResponse {}
export interface MsgWithdrawLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgWithdrawLeaseResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.
 * @name MsgWithdrawLeaseResponseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgWithdrawLeaseResponse
 */
export interface MsgWithdrawLeaseResponseAmino {}
export interface MsgWithdrawLeaseResponseAminoMsg {
  type: "/akash.market.v1beta5.MsgWithdrawLeaseResponse";
  value: MsgWithdrawLeaseResponseAmino;
}
/**
 * MsgCloseLease defines an SDK message for closing order.
 * @name MsgCloseLease
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseLease
 */
export interface MsgCloseLease {
  /**
   * LeaseID is the unique identifier of the Lease.
   */
  id: LeaseID;
  reason: LeaseClosedReason;
}
export interface MsgCloseLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCloseLease";
  value: Uint8Array;
}
/**
 * MsgCloseLease defines an SDK message for closing order.
 * @name MsgCloseLeaseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseLease
 */
export interface MsgCloseLeaseAmino {
  /**
   * LeaseID is the unique identifier of the Lease.
   */
  id: LeaseIDAmino;
  reason: LeaseClosedReason;
}
export interface MsgCloseLeaseAminoMsg {
  type: "/akash.market.v1beta5.MsgCloseLease";
  value: MsgCloseLeaseAmino;
}
/**
 * MsgCloseLeaseResponse defines the Msg/CloseLease response type.
 * @name MsgCloseLeaseResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseLeaseResponse
 */
export interface MsgCloseLeaseResponse {}
export interface MsgCloseLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgCloseLeaseResponse";
  value: Uint8Array;
}
/**
 * MsgCloseLeaseResponse defines the Msg/CloseLease response type.
 * @name MsgCloseLeaseResponseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseLeaseResponse
 */
export interface MsgCloseLeaseResponseAmino {}
export interface MsgCloseLeaseResponseAminoMsg {
  type: "/akash.market.v1beta5.MsgCloseLeaseResponse";
  value: MsgCloseLeaseResponseAmino;
}
/**
 * MsgLeaseStartReclaim is sent by the provider to initiate reclamation on an active lease.
 * @name MsgLeaseStartReclaim
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgLeaseStartReclaim
 */
export interface MsgLeaseStartReclaim {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseID;
  /**
   * reason is the provider's stated reason for initiating reclamation.
   */
  reason: LeaseClosedReason;
}
export interface MsgLeaseStartReclaimProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgLeaseStartReclaim";
  value: Uint8Array;
}
/**
 * MsgLeaseStartReclaim is sent by the provider to initiate reclamation on an active lease.
 * @name MsgLeaseStartReclaimAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgLeaseStartReclaim
 */
export interface MsgLeaseStartReclaimAmino {
  /**
   * Id is the unique identifier of the Lease.
   */
  id: LeaseIDAmino;
  /**
   * reason is the provider's stated reason for initiating reclamation.
   */
  reason: LeaseClosedReason;
}
export interface MsgLeaseStartReclaimAminoMsg {
  type: "/akash.market.v1beta5.MsgLeaseStartReclaim";
  value: MsgLeaseStartReclaimAmino;
}
/**
 * MsgLeaseStartReclaimResponse is the response from starting lease reclamation.
 * @name MsgLeaseStartReclaimResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgLeaseStartReclaimResponse
 */
export interface MsgLeaseStartReclaimResponse {}
export interface MsgLeaseStartReclaimResponseProtoMsg {
  typeUrl: "/akash.market.v1beta5.MsgLeaseStartReclaimResponse";
  value: Uint8Array;
}
/**
 * MsgLeaseStartReclaimResponse is the response from starting lease reclamation.
 * @name MsgLeaseStartReclaimResponseAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgLeaseStartReclaimResponse
 */
export interface MsgLeaseStartReclaimResponseAmino {}
export interface MsgLeaseStartReclaimResponseAminoMsg {
  type: "/akash.market.v1beta5.MsgLeaseStartReclaimResponse";
  value: MsgLeaseStartReclaimResponseAmino;
}
function createBaseMsgCreateLease(): MsgCreateLease {
  return {
    bidId: BidID.fromPartial({})
  };
}
/**
 * MsgCreateLease is sent to create a lease.
 * @name MsgCreateLease
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateLease
 */
export const MsgCreateLease = {
  typeUrl: "/akash.market.v1beta5.MsgCreateLease",
  encode(message: MsgCreateLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateLease>): MsgCreateLease {
    const message = createBaseMsgCreateLease();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateLeaseAmino): MsgCreateLease {
    const message = createBaseMsgCreateLease();
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bidId = BidID.fromAmino(object.bid_id);
    }
    return message;
  },
  toAmino(message: MsgCreateLease): MsgCreateLeaseAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateLeaseAminoMsg): MsgCreateLease {
    return MsgCreateLease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateLeaseProtoMsg): MsgCreateLease {
    return MsgCreateLease.decode(message.value);
  },
  toProto(message: MsgCreateLease): Uint8Array {
    return MsgCreateLease.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLease): MsgCreateLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCreateLease",
      value: MsgCreateLease.encode(message).finish()
    };
  }
};
function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
  return {};
}
/**
 * MsgCreateLeaseResponse is the response from creating a lease.
 * @name MsgCreateLeaseResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCreateLeaseResponse
 */
export const MsgCreateLeaseResponse = {
  typeUrl: "/akash.market.v1beta5.MsgCreateLeaseResponse",
  encode(_: MsgCreateLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLeaseResponse();
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
  fromPartial(_: DeepPartial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse {
    const message = createBaseMsgCreateLeaseResponse();
    return message;
  },
  fromAmino(_: MsgCreateLeaseResponseAmino): MsgCreateLeaseResponse {
    const message = createBaseMsgCreateLeaseResponse();
    return message;
  },
  toAmino(_: MsgCreateLeaseResponse): MsgCreateLeaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateLeaseResponseAminoMsg): MsgCreateLeaseResponse {
    return MsgCreateLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateLeaseResponseProtoMsg): MsgCreateLeaseResponse {
    return MsgCreateLeaseResponse.decode(message.value);
  },
  toProto(message: MsgCreateLeaseResponse): Uint8Array {
    return MsgCreateLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLeaseResponse): MsgCreateLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCreateLeaseResponse",
      value: MsgCreateLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLease(): MsgWithdrawLease {
  return {
    id: LeaseID.fromPartial({})
  };
}
/**
 * MsgWithdrawLease defines an SDK message for withdrawing lease funds.
 * @name MsgWithdrawLease
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgWithdrawLease
 */
export const MsgWithdrawLease = {
  typeUrl: "/akash.market.v1beta5.MsgWithdrawLease",
  encode(message: MsgWithdrawLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLease();
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
  fromPartial(object: DeepPartial<MsgWithdrawLease>): MsgWithdrawLease {
    const message = createBaseMsgWithdrawLease();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawLeaseAmino): MsgWithdrawLease {
    const message = createBaseMsgWithdrawLease();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawLease): MsgWithdrawLeaseAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : LeaseID.toAmino(LeaseID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawLeaseAminoMsg): MsgWithdrawLease {
    return MsgWithdrawLease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawLeaseProtoMsg): MsgWithdrawLease {
    return MsgWithdrawLease.decode(message.value);
  },
  toProto(message: MsgWithdrawLease): Uint8Array {
    return MsgWithdrawLease.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLease): MsgWithdrawLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgWithdrawLease",
      value: MsgWithdrawLease.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
  return {};
}
/**
 * MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type.
 * @name MsgWithdrawLeaseResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgWithdrawLeaseResponse
 */
export const MsgWithdrawLeaseResponse = {
  typeUrl: "/akash.market.v1beta5.MsgWithdrawLeaseResponse",
  encode(_: MsgWithdrawLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLeaseResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawLeaseResponse>): MsgWithdrawLeaseResponse {
    const message = createBaseMsgWithdrawLeaseResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawLeaseResponseAmino): MsgWithdrawLeaseResponse {
    const message = createBaseMsgWithdrawLeaseResponse();
    return message;
  },
  toAmino(_: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawLeaseResponseAminoMsg): MsgWithdrawLeaseResponse {
    return MsgWithdrawLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawLeaseResponseProtoMsg): MsgWithdrawLeaseResponse {
    return MsgWithdrawLeaseResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawLeaseResponse): Uint8Array {
    return MsgWithdrawLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgWithdrawLeaseResponse",
      value: MsgWithdrawLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseLease(): MsgCloseLease {
  return {
    id: LeaseID.fromPartial({}),
    reason: 0
  };
}
/**
 * MsgCloseLease defines an SDK message for closing order.
 * @name MsgCloseLease
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseLease
 */
export const MsgCloseLease = {
  typeUrl: "/akash.market.v1beta5.MsgCloseLease",
  encode(message: MsgCloseLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<MsgCloseLease>): MsgCloseLease {
    const message = createBaseMsgCloseLease();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: MsgCloseLeaseAmino): MsgCloseLease {
    const message = createBaseMsgCloseLease();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgCloseLease): MsgCloseLeaseAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : LeaseID.toAmino(LeaseID.fromPartial({}));
    obj.reason = message.reason ?? 0;
    return obj;
  },
  fromAminoMsg(object: MsgCloseLeaseAminoMsg): MsgCloseLease {
    return MsgCloseLease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseLeaseProtoMsg): MsgCloseLease {
    return MsgCloseLease.decode(message.value);
  },
  toProto(message: MsgCloseLease): Uint8Array {
    return MsgCloseLease.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseLease): MsgCloseLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCloseLease",
      value: MsgCloseLease.encode(message).finish()
    };
  }
};
function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
  return {};
}
/**
 * MsgCloseLeaseResponse defines the Msg/CloseLease response type.
 * @name MsgCloseLeaseResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgCloseLeaseResponse
 */
export const MsgCloseLeaseResponse = {
  typeUrl: "/akash.market.v1beta5.MsgCloseLeaseResponse",
  encode(_: MsgCloseLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLeaseResponse();
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
  fromPartial(_: DeepPartial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse {
    const message = createBaseMsgCloseLeaseResponse();
    return message;
  },
  fromAmino(_: MsgCloseLeaseResponseAmino): MsgCloseLeaseResponse {
    const message = createBaseMsgCloseLeaseResponse();
    return message;
  },
  toAmino(_: MsgCloseLeaseResponse): MsgCloseLeaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseLeaseResponseAminoMsg): MsgCloseLeaseResponse {
    return MsgCloseLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseLeaseResponseProtoMsg): MsgCloseLeaseResponse {
    return MsgCloseLeaseResponse.decode(message.value);
  },
  toProto(message: MsgCloseLeaseResponse): Uint8Array {
    return MsgCloseLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseLeaseResponse): MsgCloseLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgCloseLeaseResponse",
      value: MsgCloseLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaseStartReclaim(): MsgLeaseStartReclaim {
  return {
    id: LeaseID.fromPartial({}),
    reason: 0
  };
}
/**
 * MsgLeaseStartReclaim is sent by the provider to initiate reclamation on an active lease.
 * @name MsgLeaseStartReclaim
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgLeaseStartReclaim
 */
export const MsgLeaseStartReclaim = {
  typeUrl: "/akash.market.v1beta5.MsgLeaseStartReclaim",
  encode(message: MsgLeaseStartReclaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaseStartReclaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaseStartReclaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<MsgLeaseStartReclaim>): MsgLeaseStartReclaim {
    const message = createBaseMsgLeaseStartReclaim();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: MsgLeaseStartReclaimAmino): MsgLeaseStartReclaim {
    const message = createBaseMsgLeaseStartReclaim();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgLeaseStartReclaim): MsgLeaseStartReclaimAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : LeaseID.toAmino(LeaseID.fromPartial({}));
    obj.reason = message.reason ?? 0;
    return obj;
  },
  fromAminoMsg(object: MsgLeaseStartReclaimAminoMsg): MsgLeaseStartReclaim {
    return MsgLeaseStartReclaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeaseStartReclaimProtoMsg): MsgLeaseStartReclaim {
    return MsgLeaseStartReclaim.decode(message.value);
  },
  toProto(message: MsgLeaseStartReclaim): Uint8Array {
    return MsgLeaseStartReclaim.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaseStartReclaim): MsgLeaseStartReclaimProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgLeaseStartReclaim",
      value: MsgLeaseStartReclaim.encode(message).finish()
    };
  }
};
function createBaseMsgLeaseStartReclaimResponse(): MsgLeaseStartReclaimResponse {
  return {};
}
/**
 * MsgLeaseStartReclaimResponse is the response from starting lease reclamation.
 * @name MsgLeaseStartReclaimResponse
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.MsgLeaseStartReclaimResponse
 */
export const MsgLeaseStartReclaimResponse = {
  typeUrl: "/akash.market.v1beta5.MsgLeaseStartReclaimResponse",
  encode(_: MsgLeaseStartReclaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaseStartReclaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaseStartReclaimResponse();
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
  fromPartial(_: DeepPartial<MsgLeaseStartReclaimResponse>): MsgLeaseStartReclaimResponse {
    const message = createBaseMsgLeaseStartReclaimResponse();
    return message;
  },
  fromAmino(_: MsgLeaseStartReclaimResponseAmino): MsgLeaseStartReclaimResponse {
    const message = createBaseMsgLeaseStartReclaimResponse();
    return message;
  },
  toAmino(_: MsgLeaseStartReclaimResponse): MsgLeaseStartReclaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaseStartReclaimResponseAminoMsg): MsgLeaseStartReclaimResponse {
    return MsgLeaseStartReclaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeaseStartReclaimResponseProtoMsg): MsgLeaseStartReclaimResponse {
    return MsgLeaseStartReclaimResponse.decode(message.value);
  },
  toProto(message: MsgLeaseStartReclaimResponse): Uint8Array {
    return MsgLeaseStartReclaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaseStartReclaimResponse): MsgLeaseStartReclaimResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.MsgLeaseStartReclaimResponse",
      value: MsgLeaseStartReclaimResponse.encode(message).finish()
    };
  }
};