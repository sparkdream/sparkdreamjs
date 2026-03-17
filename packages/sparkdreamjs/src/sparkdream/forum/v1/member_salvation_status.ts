//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberSalvationStatus defines the MemberSalvationStatus message.
 * @name MemberSalvationStatus
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MemberSalvationStatus
 */
export interface MemberSalvationStatus {
  address: string;
  memberSince: bigint;
  canSalvage: boolean;
  epochSalvations: bigint;
  epochStart: bigint;
}
export interface MemberSalvationStatusProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MemberSalvationStatus";
  value: Uint8Array;
}
/**
 * MemberSalvationStatus defines the MemberSalvationStatus message.
 * @name MemberSalvationStatusAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MemberSalvationStatus
 */
export interface MemberSalvationStatusAmino {
  address?: string;
  member_since?: string;
  can_salvage?: boolean;
  epoch_salvations?: string;
  epoch_start?: string;
}
export interface MemberSalvationStatusAminoMsg {
  type: "/sparkdream.forum.v1.MemberSalvationStatus";
  value: MemberSalvationStatusAmino;
}
function createBaseMemberSalvationStatus(): MemberSalvationStatus {
  return {
    address: "",
    memberSince: BigInt(0),
    canSalvage: false,
    epochSalvations: BigInt(0),
    epochStart: BigInt(0)
  };
}
/**
 * MemberSalvationStatus defines the MemberSalvationStatus message.
 * @name MemberSalvationStatus
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MemberSalvationStatus
 */
export const MemberSalvationStatus = {
  typeUrl: "/sparkdream.forum.v1.MemberSalvationStatus",
  encode(message: MemberSalvationStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.memberSince !== BigInt(0)) {
      writer.uint32(16).int64(message.memberSince);
    }
    if (message.canSalvage === true) {
      writer.uint32(24).bool(message.canSalvage);
    }
    if (message.epochSalvations !== BigInt(0)) {
      writer.uint32(32).uint64(message.epochSalvations);
    }
    if (message.epochStart !== BigInt(0)) {
      writer.uint32(40).int64(message.epochStart);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberSalvationStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberSalvationStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.memberSince = reader.int64();
          break;
        case 3:
          message.canSalvage = reader.bool();
          break;
        case 4:
          message.epochSalvations = reader.uint64();
          break;
        case 5:
          message.epochStart = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberSalvationStatus>): MemberSalvationStatus {
    const message = createBaseMemberSalvationStatus();
    message.address = object.address ?? "";
    message.memberSince = object.memberSince !== undefined && object.memberSince !== null ? BigInt(object.memberSince.toString()) : BigInt(0);
    message.canSalvage = object.canSalvage ?? false;
    message.epochSalvations = object.epochSalvations !== undefined && object.epochSalvations !== null ? BigInt(object.epochSalvations.toString()) : BigInt(0);
    message.epochStart = object.epochStart !== undefined && object.epochStart !== null ? BigInt(object.epochStart.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberSalvationStatusAmino): MemberSalvationStatus {
    const message = createBaseMemberSalvationStatus();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.member_since !== undefined && object.member_since !== null) {
      message.memberSince = BigInt(object.member_since);
    }
    if (object.can_salvage !== undefined && object.can_salvage !== null) {
      message.canSalvage = object.can_salvage;
    }
    if (object.epoch_salvations !== undefined && object.epoch_salvations !== null) {
      message.epochSalvations = BigInt(object.epoch_salvations);
    }
    if (object.epoch_start !== undefined && object.epoch_start !== null) {
      message.epochStart = BigInt(object.epoch_start);
    }
    return message;
  },
  toAmino(message: MemberSalvationStatus): MemberSalvationStatusAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.member_since = message.memberSince !== BigInt(0) ? message.memberSince?.toString() : undefined;
    obj.can_salvage = message.canSalvage === false ? undefined : message.canSalvage;
    obj.epoch_salvations = message.epochSalvations !== BigInt(0) ? message.epochSalvations?.toString() : undefined;
    obj.epoch_start = message.epochStart !== BigInt(0) ? message.epochStart?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberSalvationStatusAminoMsg): MemberSalvationStatus {
    return MemberSalvationStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberSalvationStatusProtoMsg): MemberSalvationStatus {
    return MemberSalvationStatus.decode(message.value);
  },
  toProto(message: MemberSalvationStatus): Uint8Array {
    return MemberSalvationStatus.encode(message).finish();
  },
  toProtoMsg(message: MemberSalvationStatus): MemberSalvationStatusProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MemberSalvationStatus",
      value: MemberSalvationStatus.encode(message).finish()
    };
  }
};