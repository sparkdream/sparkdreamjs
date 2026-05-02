//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberWarning defines the MemberWarning message.
 * @name MemberWarning
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberWarning
 */
export interface MemberWarning {
  id: bigint;
  member: string;
  reason: string;
  issuedAt: bigint;
  issuedBy: string;
  warningNumber: bigint;
  evidencePostIds: bigint[];
}
export interface MemberWarningProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MemberWarning";
  value: Uint8Array;
}
/**
 * MemberWarning defines the MemberWarning message.
 * @name MemberWarningAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberWarning
 */
export interface MemberWarningAmino {
  id?: string;
  member?: string;
  reason?: string;
  issued_at?: string;
  issued_by?: string;
  warning_number?: string;
  evidence_post_ids?: string[];
}
export interface MemberWarningAminoMsg {
  type: "/sparkdream.rep.v1.MemberWarning";
  value: MemberWarningAmino;
}
function createBaseMemberWarning(): MemberWarning {
  return {
    id: BigInt(0),
    member: "",
    reason: "",
    issuedAt: BigInt(0),
    issuedBy: "",
    warningNumber: BigInt(0),
    evidencePostIds: []
  };
}
/**
 * MemberWarning defines the MemberWarning message.
 * @name MemberWarning
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberWarning
 */
export const MemberWarning = {
  typeUrl: "/sparkdream.rep.v1.MemberWarning",
  encode(message: MemberWarning, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.issuedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.issuedAt);
    }
    if (message.issuedBy !== "") {
      writer.uint32(42).string(message.issuedBy);
    }
    if (message.warningNumber !== BigInt(0)) {
      writer.uint32(48).uint64(message.warningNumber);
    }
    writer.uint32(82).fork();
    for (const v of message.evidencePostIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberWarning {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberWarning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.member = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.issuedAt = reader.int64();
          break;
        case 5:
          message.issuedBy = reader.string();
          break;
        case 6:
          message.warningNumber = reader.uint64();
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.evidencePostIds.push(reader.uint64());
            }
          } else {
            message.evidencePostIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberWarning>): MemberWarning {
    const message = createBaseMemberWarning();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.member = object.member ?? "";
    message.reason = object.reason ?? "";
    message.issuedAt = object.issuedAt !== undefined && object.issuedAt !== null ? BigInt(object.issuedAt.toString()) : BigInt(0);
    message.issuedBy = object.issuedBy ?? "";
    message.warningNumber = object.warningNumber !== undefined && object.warningNumber !== null ? BigInt(object.warningNumber.toString()) : BigInt(0);
    message.evidencePostIds = object.evidencePostIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MemberWarningAmino): MemberWarning {
    const message = createBaseMemberWarning();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.issued_at !== undefined && object.issued_at !== null) {
      message.issuedAt = BigInt(object.issued_at);
    }
    if (object.issued_by !== undefined && object.issued_by !== null) {
      message.issuedBy = object.issued_by;
    }
    if (object.warning_number !== undefined && object.warning_number !== null) {
      message.warningNumber = BigInt(object.warning_number);
    }
    message.evidencePostIds = object.evidence_post_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MemberWarning): MemberWarningAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.member = message.member === "" ? undefined : message.member;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.issued_at = message.issuedAt !== BigInt(0) ? message.issuedAt?.toString() : undefined;
    obj.issued_by = message.issuedBy === "" ? undefined : message.issuedBy;
    obj.warning_number = message.warningNumber !== BigInt(0) ? message.warningNumber?.toString() : undefined;
    if (message.evidencePostIds) {
      obj.evidence_post_ids = message.evidencePostIds.map(e => e.toString());
    } else {
      obj.evidence_post_ids = message.evidencePostIds;
    }
    return obj;
  },
  fromAminoMsg(object: MemberWarningAminoMsg): MemberWarning {
    return MemberWarning.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberWarningProtoMsg): MemberWarning {
    return MemberWarning.decode(message.value);
  },
  toProto(message: MemberWarning): Uint8Array {
    return MemberWarning.encode(message).finish();
  },
  toProtoMsg(message: MemberWarning): MemberWarningProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MemberWarning",
      value: MemberWarning.encode(message).finish()
    };
  }
};