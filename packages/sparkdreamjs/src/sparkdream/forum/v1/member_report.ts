//@ts-nocheck
import { GovActionType, MemberReportStatus } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberReport defines the MemberReport message.
 * @name MemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MemberReport
 */
export interface MemberReport {
  member: string;
  reason: string;
  recommendedAction: GovActionType;
  totalBond: string;
  createdAt: bigint;
  status: MemberReportStatus;
  defense: string;
  defenseSubmittedAt: bigint;
  reporters: string[];
  evidencePostIds: bigint[];
  defensePostIds: bigint[];
}
export interface MemberReportProtoMsg {
  typeUrl: "/sparkdream.forum.v1.MemberReport";
  value: Uint8Array;
}
/**
 * MemberReport defines the MemberReport message.
 * @name MemberReportAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MemberReport
 */
export interface MemberReportAmino {
  member?: string;
  reason?: string;
  recommended_action?: GovActionType;
  total_bond?: string;
  created_at?: string;
  status?: MemberReportStatus;
  defense?: string;
  defense_submitted_at?: string;
  reporters?: string[];
  evidence_post_ids?: string[];
  defense_post_ids?: string[];
}
export interface MemberReportAminoMsg {
  type: "/sparkdream.forum.v1.MemberReport";
  value: MemberReportAmino;
}
function createBaseMemberReport(): MemberReport {
  return {
    member: "",
    reason: "",
    recommendedAction: 0,
    totalBond: "",
    createdAt: BigInt(0),
    status: 0,
    defense: "",
    defenseSubmittedAt: BigInt(0),
    reporters: [],
    evidencePostIds: [],
    defensePostIds: []
  };
}
/**
 * MemberReport defines the MemberReport message.
 * @name MemberReport
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.MemberReport
 */
export const MemberReport = {
  typeUrl: "/sparkdream.forum.v1.MemberReport",
  encode(message: MemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.recommendedAction !== 0) {
      writer.uint32(24).int32(message.recommendedAction);
    }
    if (message.totalBond !== "") {
      writer.uint32(34).string(message.totalBond);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.defense !== "") {
      writer.uint32(58).string(message.defense);
    }
    if (message.defenseSubmittedAt !== BigInt(0)) {
      writer.uint32(64).int64(message.defenseSubmittedAt);
    }
    for (const v of message.reporters) {
      writer.uint32(82).string(v!);
    }
    writer.uint32(90).fork();
    for (const v of message.evidencePostIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(98).fork();
    for (const v of message.defensePostIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.recommendedAction = reader.int32() as any;
          break;
        case 4:
          message.totalBond = reader.string();
          break;
        case 5:
          message.createdAt = reader.int64();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.defense = reader.string();
          break;
        case 8:
          message.defenseSubmittedAt = reader.int64();
          break;
        case 10:
          message.reporters.push(reader.string());
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.evidencePostIds.push(reader.uint64());
            }
          } else {
            message.evidencePostIds.push(reader.uint64());
          }
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.defensePostIds.push(reader.uint64());
            }
          } else {
            message.defensePostIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberReport>): MemberReport {
    const message = createBaseMemberReport();
    message.member = object.member ?? "";
    message.reason = object.reason ?? "";
    message.recommendedAction = object.recommendedAction ?? 0;
    message.totalBond = object.totalBond ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.defense = object.defense ?? "";
    message.defenseSubmittedAt = object.defenseSubmittedAt !== undefined && object.defenseSubmittedAt !== null ? BigInt(object.defenseSubmittedAt.toString()) : BigInt(0);
    message.reporters = object.reporters?.map(e => e) || [];
    message.evidencePostIds = object.evidencePostIds?.map(e => BigInt(e.toString())) || [];
    message.defensePostIds = object.defensePostIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MemberReportAmino): MemberReport {
    const message = createBaseMemberReport();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.recommended_action !== undefined && object.recommended_action !== null) {
      message.recommendedAction = object.recommended_action;
    }
    if (object.total_bond !== undefined && object.total_bond !== null) {
      message.totalBond = object.total_bond;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.defense !== undefined && object.defense !== null) {
      message.defense = object.defense;
    }
    if (object.defense_submitted_at !== undefined && object.defense_submitted_at !== null) {
      message.defenseSubmittedAt = BigInt(object.defense_submitted_at);
    }
    message.reporters = object.reporters?.map(e => e) || [];
    message.evidencePostIds = object.evidence_post_ids?.map(e => BigInt(e)) || [];
    message.defensePostIds = object.defense_post_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MemberReport): MemberReportAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.recommended_action = message.recommendedAction === 0 ? undefined : message.recommendedAction;
    obj.total_bond = message.totalBond === "" ? undefined : message.totalBond;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.defense = message.defense === "" ? undefined : message.defense;
    obj.defense_submitted_at = message.defenseSubmittedAt !== BigInt(0) ? message.defenseSubmittedAt?.toString() : undefined;
    if (message.reporters) {
      obj.reporters = message.reporters.map(e => e);
    } else {
      obj.reporters = message.reporters;
    }
    if (message.evidencePostIds) {
      obj.evidence_post_ids = message.evidencePostIds.map(e => e.toString());
    } else {
      obj.evidence_post_ids = message.evidencePostIds;
    }
    if (message.defensePostIds) {
      obj.defense_post_ids = message.defensePostIds.map(e => e.toString());
    } else {
      obj.defense_post_ids = message.defensePostIds;
    }
    return obj;
  },
  fromAminoMsg(object: MemberReportAminoMsg): MemberReport {
    return MemberReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberReportProtoMsg): MemberReport {
    return MemberReport.decode(message.value);
  },
  toProto(message: MemberReport): Uint8Array {
    return MemberReport.encode(message).finish();
  },
  toProtoMsg(message: MemberReport): MemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.MemberReport",
      value: MemberReport.encode(message).finish()
    };
  }
};