//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ForumXpCooldown defines the ForumXpCooldown message.
 * @name ForumXpCooldown
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.ForumXpCooldown
 */
export interface ForumXpCooldown {
  beneficiaryActor: string;
  lastGrantedEpoch: bigint;
}
export interface ForumXpCooldownProtoMsg {
  typeUrl: "/sparkdream.season.v1.ForumXpCooldown";
  value: Uint8Array;
}
/**
 * ForumXpCooldown defines the ForumXpCooldown message.
 * @name ForumXpCooldownAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.ForumXpCooldown
 */
export interface ForumXpCooldownAmino {
  beneficiary_actor?: string;
  last_granted_epoch?: string;
}
export interface ForumXpCooldownAminoMsg {
  type: "/sparkdream.season.v1.ForumXpCooldown";
  value: ForumXpCooldownAmino;
}
function createBaseForumXpCooldown(): ForumXpCooldown {
  return {
    beneficiaryActor: "",
    lastGrantedEpoch: BigInt(0)
  };
}
/**
 * ForumXpCooldown defines the ForumXpCooldown message.
 * @name ForumXpCooldown
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.ForumXpCooldown
 */
export const ForumXpCooldown = {
  typeUrl: "/sparkdream.season.v1.ForumXpCooldown",
  encode(message: ForumXpCooldown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beneficiaryActor !== "") {
      writer.uint32(10).string(message.beneficiaryActor);
    }
    if (message.lastGrantedEpoch !== BigInt(0)) {
      writer.uint32(16).int64(message.lastGrantedEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForumXpCooldown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForumXpCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beneficiaryActor = reader.string();
          break;
        case 2:
          message.lastGrantedEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForumXpCooldown>): ForumXpCooldown {
    const message = createBaseForumXpCooldown();
    message.beneficiaryActor = object.beneficiaryActor ?? "";
    message.lastGrantedEpoch = object.lastGrantedEpoch !== undefined && object.lastGrantedEpoch !== null ? BigInt(object.lastGrantedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ForumXpCooldownAmino): ForumXpCooldown {
    const message = createBaseForumXpCooldown();
    if (object.beneficiary_actor !== undefined && object.beneficiary_actor !== null) {
      message.beneficiaryActor = object.beneficiary_actor;
    }
    if (object.last_granted_epoch !== undefined && object.last_granted_epoch !== null) {
      message.lastGrantedEpoch = BigInt(object.last_granted_epoch);
    }
    return message;
  },
  toAmino(message: ForumXpCooldown): ForumXpCooldownAmino {
    const obj: any = {};
    obj.beneficiary_actor = message.beneficiaryActor === "" ? undefined : message.beneficiaryActor;
    obj.last_granted_epoch = message.lastGrantedEpoch !== BigInt(0) ? message.lastGrantedEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ForumXpCooldownAminoMsg): ForumXpCooldown {
    return ForumXpCooldown.fromAmino(object.value);
  },
  fromProtoMsg(message: ForumXpCooldownProtoMsg): ForumXpCooldown {
    return ForumXpCooldown.decode(message.value);
  },
  toProto(message: ForumXpCooldown): Uint8Array {
    return ForumXpCooldown.encode(message).finish();
  },
  toProtoMsg(message: ForumXpCooldown): ForumXpCooldownProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.ForumXpCooldown",
      value: ForumXpCooldown.encode(message).finish()
    };
  }
};