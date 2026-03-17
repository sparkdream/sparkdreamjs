//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberRegistration defines the MemberRegistration message.
 * @name MemberRegistration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberRegistration
 */
export interface MemberRegistration {
  member: string;
  registeredEpoch: bigint;
}
export interface MemberRegistrationProtoMsg {
  typeUrl: "/sparkdream.season.v1.MemberRegistration";
  value: Uint8Array;
}
/**
 * MemberRegistration defines the MemberRegistration message.
 * @name MemberRegistrationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberRegistration
 */
export interface MemberRegistrationAmino {
  member?: string;
  registered_epoch?: string;
}
export interface MemberRegistrationAminoMsg {
  type: "/sparkdream.season.v1.MemberRegistration";
  value: MemberRegistrationAmino;
}
function createBaseMemberRegistration(): MemberRegistration {
  return {
    member: "",
    registeredEpoch: BigInt(0)
  };
}
/**
 * MemberRegistration defines the MemberRegistration message.
 * @name MemberRegistration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberRegistration
 */
export const MemberRegistration = {
  typeUrl: "/sparkdream.season.v1.MemberRegistration",
  encode(message: MemberRegistration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.registeredEpoch !== BigInt(0)) {
      writer.uint32(16).int64(message.registeredEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberRegistration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRegistration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.registeredEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberRegistration>): MemberRegistration {
    const message = createBaseMemberRegistration();
    message.member = object.member ?? "";
    message.registeredEpoch = object.registeredEpoch !== undefined && object.registeredEpoch !== null ? BigInt(object.registeredEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberRegistrationAmino): MemberRegistration {
    const message = createBaseMemberRegistration();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.registered_epoch !== undefined && object.registered_epoch !== null) {
      message.registeredEpoch = BigInt(object.registered_epoch);
    }
    return message;
  },
  toAmino(message: MemberRegistration): MemberRegistrationAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.registered_epoch = message.registeredEpoch !== BigInt(0) ? message.registeredEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberRegistrationAminoMsg): MemberRegistration {
    return MemberRegistration.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberRegistrationProtoMsg): MemberRegistration {
    return MemberRegistration.decode(message.value);
  },
  toProto(message: MemberRegistration): Uint8Array {
    return MemberRegistration.encode(message).finish();
  },
  toProtoMsg(message: MemberRegistration): MemberRegistrationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MemberRegistration",
      value: MemberRegistration.encode(message).finish()
    };
  }
};