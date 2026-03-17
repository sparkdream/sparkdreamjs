//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
export enum InvitationStatus {
  INVITATION_STATUS_PENDING = 0,
  INVITATION_STATUS_ACCEPTED = 1,
  INVITATION_STATUS_EXPIRED = 2,
  INVITATION_STATUS_REVOKED = 3,
  UNRECOGNIZED = -1,
}
export const InvitationStatusAmino = InvitationStatus;
export function invitationStatusFromJSON(object: any): InvitationStatus {
  switch (object) {
    case 0:
    case "INVITATION_STATUS_PENDING":
      return InvitationStatus.INVITATION_STATUS_PENDING;
    case 1:
    case "INVITATION_STATUS_ACCEPTED":
      return InvitationStatus.INVITATION_STATUS_ACCEPTED;
    case 2:
    case "INVITATION_STATUS_EXPIRED":
      return InvitationStatus.INVITATION_STATUS_EXPIRED;
    case 3:
    case "INVITATION_STATUS_REVOKED":
      return InvitationStatus.INVITATION_STATUS_REVOKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InvitationStatus.UNRECOGNIZED;
  }
}
export function invitationStatusToJSON(object: InvitationStatus): string {
  switch (object) {
    case InvitationStatus.INVITATION_STATUS_PENDING:
      return "INVITATION_STATUS_PENDING";
    case InvitationStatus.INVITATION_STATUS_ACCEPTED:
      return "INVITATION_STATUS_ACCEPTED";
    case InvitationStatus.INVITATION_STATUS_EXPIRED:
      return "INVITATION_STATUS_EXPIRED";
    case InvitationStatus.INVITATION_STATUS_REVOKED:
      return "INVITATION_STATUS_REVOKED";
    case InvitationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Invitation defines the Invitation message.
 * @name Invitation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Invitation
 */
export interface Invitation {
  id: bigint;
  inviter: string;
  inviteeAddress: string;
  stakedDream: string;
  vouchedTags: string[];
  accountabilityEnd: bigint;
  referralRate: string;
  referralEnd: bigint;
  referralEarned: string;
  status: InvitationStatus;
  createdAt: bigint;
  acceptedAt: bigint;
}
export interface InvitationProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Invitation";
  value: Uint8Array;
}
/**
 * Invitation defines the Invitation message.
 * @name InvitationAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Invitation
 */
export interface InvitationAmino {
  id?: string;
  inviter?: string;
  invitee_address?: string;
  staked_dream?: string;
  vouched_tags?: string[];
  accountability_end?: string;
  referral_rate?: string;
  referral_end?: string;
  referral_earned?: string;
  status?: InvitationStatus;
  created_at?: string;
  accepted_at?: string;
}
export interface InvitationAminoMsg {
  type: "/sparkdream.rep.v1.Invitation";
  value: InvitationAmino;
}
function createBaseInvitation(): Invitation {
  return {
    id: BigInt(0),
    inviter: "",
    inviteeAddress: "",
    stakedDream: "",
    vouchedTags: [],
    accountabilityEnd: BigInt(0),
    referralRate: "",
    referralEnd: BigInt(0),
    referralEarned: "",
    status: 0,
    createdAt: BigInt(0),
    acceptedAt: BigInt(0)
  };
}
/**
 * Invitation defines the Invitation message.
 * @name Invitation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Invitation
 */
export const Invitation = {
  typeUrl: "/sparkdream.rep.v1.Invitation",
  encode(message: Invitation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.inviter !== "") {
      writer.uint32(18).string(message.inviter);
    }
    if (message.inviteeAddress !== "") {
      writer.uint32(26).string(message.inviteeAddress);
    }
    if (message.stakedDream !== "") {
      writer.uint32(34).string(message.stakedDream);
    }
    for (const v of message.vouchedTags) {
      writer.uint32(42).string(v!);
    }
    if (message.accountabilityEnd !== BigInt(0)) {
      writer.uint32(48).int64(message.accountabilityEnd);
    }
    if (message.referralRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.referralRate, 18).atomics);
    }
    if (message.referralEnd !== BigInt(0)) {
      writer.uint32(64).int64(message.referralEnd);
    }
    if (message.referralEarned !== "") {
      writer.uint32(74).string(message.referralEarned);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(88).int64(message.createdAt);
    }
    if (message.acceptedAt !== BigInt(0)) {
      writer.uint32(96).int64(message.acceptedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Invitation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvitation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.inviter = reader.string();
          break;
        case 3:
          message.inviteeAddress = reader.string();
          break;
        case 4:
          message.stakedDream = reader.string();
          break;
        case 5:
          message.vouchedTags.push(reader.string());
          break;
        case 6:
          message.accountabilityEnd = reader.int64();
          break;
        case 7:
          message.referralRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.referralEnd = reader.int64();
          break;
        case 9:
          message.referralEarned = reader.string();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.createdAt = reader.int64();
          break;
        case 12:
          message.acceptedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Invitation>): Invitation {
    const message = createBaseInvitation();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.inviter = object.inviter ?? "";
    message.inviteeAddress = object.inviteeAddress ?? "";
    message.stakedDream = object.stakedDream ?? "";
    message.vouchedTags = object.vouchedTags?.map(e => e) || [];
    message.accountabilityEnd = object.accountabilityEnd !== undefined && object.accountabilityEnd !== null ? BigInt(object.accountabilityEnd.toString()) : BigInt(0);
    message.referralRate = object.referralRate ?? "";
    message.referralEnd = object.referralEnd !== undefined && object.referralEnd !== null ? BigInt(object.referralEnd.toString()) : BigInt(0);
    message.referralEarned = object.referralEarned ?? "";
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.acceptedAt = object.acceptedAt !== undefined && object.acceptedAt !== null ? BigInt(object.acceptedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: InvitationAmino): Invitation {
    const message = createBaseInvitation();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    if (object.invitee_address !== undefined && object.invitee_address !== null) {
      message.inviteeAddress = object.invitee_address;
    }
    if (object.staked_dream !== undefined && object.staked_dream !== null) {
      message.stakedDream = object.staked_dream;
    }
    message.vouchedTags = object.vouched_tags?.map(e => e) || [];
    if (object.accountability_end !== undefined && object.accountability_end !== null) {
      message.accountabilityEnd = BigInt(object.accountability_end);
    }
    if (object.referral_rate !== undefined && object.referral_rate !== null) {
      message.referralRate = object.referral_rate;
    }
    if (object.referral_end !== undefined && object.referral_end !== null) {
      message.referralEnd = BigInt(object.referral_end);
    }
    if (object.referral_earned !== undefined && object.referral_earned !== null) {
      message.referralEarned = object.referral_earned;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.accepted_at !== undefined && object.accepted_at !== null) {
      message.acceptedAt = BigInt(object.accepted_at);
    }
    return message;
  },
  toAmino(message: Invitation): InvitationAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    obj.invitee_address = message.inviteeAddress === "" ? undefined : message.inviteeAddress;
    obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
    if (message.vouchedTags) {
      obj.vouched_tags = message.vouchedTags.map(e => e);
    } else {
      obj.vouched_tags = message.vouchedTags;
    }
    obj.accountability_end = message.accountabilityEnd !== BigInt(0) ? message.accountabilityEnd?.toString() : undefined;
    obj.referral_rate = message.referralRate === "" ? undefined : message.referralRate;
    obj.referral_end = message.referralEnd !== BigInt(0) ? message.referralEnd?.toString() : undefined;
    obj.referral_earned = message.referralEarned === "" ? undefined : message.referralEarned;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.accepted_at = message.acceptedAt !== BigInt(0) ? message.acceptedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InvitationAminoMsg): Invitation {
    return Invitation.fromAmino(object.value);
  },
  fromProtoMsg(message: InvitationProtoMsg): Invitation {
    return Invitation.decode(message.value);
  },
  toProto(message: Invitation): Uint8Array {
    return Invitation.encode(message).finish();
  },
  toProtoMsg(message: Invitation): InvitationProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Invitation",
      value: Invitation.encode(message).finish()
    };
  }
};