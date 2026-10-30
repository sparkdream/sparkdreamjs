//@ts-nocheck
import { GovActionType, MemberReportStatus } from "./accountability";
import { MemberStatus, TrustLevel } from "./member";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberReport defines the MemberReport message.
 * @name MemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberReport
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
  /**
   * Per-signer locked bond amounts. Initial reporter and each cosigner lock
   * different amounts; refunds must use the recorded per-signer amount, not
   * an averaged share, to prevent cross-signer bond theft.
   */
  reporterBonds: ReporterBondEntry[];
  /**
   * resolved_action is the action MsgResolveMemberReport applied
   * (UNSPECIFIED = dismissed). Together with resolved_at it opens the
   * member's MsgAppealGovAction filing window.
   */
  resolvedAction: GovActionType;
  /**
   * resolved_at is the block time of the resolution (0 while open).
   */
  resolvedAt: bigint;
}
export interface MemberReportProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MemberReport";
  value: Uint8Array;
}
/**
 * MemberReport defines the MemberReport message.
 * @name MemberReportAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberReport
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
  /**
   * Per-signer locked bond amounts. Initial reporter and each cosigner lock
   * different amounts; refunds must use the recorded per-signer amount, not
   * an averaged share, to prevent cross-signer bond theft.
   */
  reporter_bonds?: ReporterBondEntryAmino[];
  /**
   * resolved_action is the action MsgResolveMemberReport applied
   * (UNSPECIFIED = dismissed). Together with resolved_at it opens the
   * member's MsgAppealGovAction filing window.
   */
  resolved_action?: GovActionType;
  /**
   * resolved_at is the block time of the resolution (0 while open).
   */
  resolved_at?: string;
}
export interface MemberReportAminoMsg {
  type: "/sparkdream.rep.v1.MemberReport";
  value: MemberReportAmino;
}
/**
 * ReporterBondEntry tracks the DREAM amount locked by a specific reporter
 * or cosigner against a member report.
 * @name ReporterBondEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReporterBondEntry
 */
export interface ReporterBondEntry {
  address: string;
  amount: string;
}
export interface ReporterBondEntryProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ReporterBondEntry";
  value: Uint8Array;
}
/**
 * ReporterBondEntry tracks the DREAM amount locked by a specific reporter
 * or cosigner against a member report.
 * @name ReporterBondEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReporterBondEntry
 */
export interface ReporterBondEntryAmino {
  address?: string;
  amount?: string;
}
export interface ReporterBondEntryAminoMsg {
  type: "/sparkdream.rep.v1.ReporterBondEntry";
  value: ReporterBondEntryAmino;
}
/**
 * @name MemberActionRestoration_ReputationEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface MemberActionRestoration_ReputationEntry {
  key: string;
  value: string;
}
export interface MemberActionRestoration_ReputationEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name MemberActionRestoration_ReputationEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberActionRestoration_ReputationEntry
 */
export interface MemberActionRestoration_ReputationEntryAmino {
  key?: string;
  value?: string;
}
export interface MemberActionRestoration_ReputationEntryAminoMsg {
  type: string;
  value: MemberActionRestoration_ReputationEntryAmino;
}
/**
 * MemberActionRestoration is what an OVERTURNED member-action appeal needs to
 * undo the action MsgResolveMemberReport applied. Written at resolution, keyed
 * by the member's canonical address (re-keyed by a migration), and deleted when
 * the appeal reaches any terminal outcome or the filing window closes with no
 * appeal, so at most one exists per member and only while the action is
 * appealable.
 * @name MemberActionRestoration
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberActionRestoration
 */
export interface MemberActionRestoration {
  member: string;
  /**
   * action is WARNING, DEMOTION or ZEROING.
   */
  action: GovActionType;
  /**
   * resolved_at is the block time of the resolution; the filing window closes
   * at resolved_at + DefaultAppealDeadline.
   */
  resolvedAt: bigint;
  /**
   * season is the season the action was applied in. Reputation restored in a
   * later season goes to the lifetime archive, which the season reset would
   * have moved it to.
   */
  season: bigint;
  /**
   * warning_id is the MemberWarning a WARNING created.
   */
  warningId: bigint;
  /**
   * reputation is, for DEMOTION, the reputation the slash took per tag and,
   * for ZEROING, the member's per-tag seasonal reputation before the zeroing.
   */
  reputation: {
    [key: string]: string;
  };
  /**
   * ZEROING only: the member's state before the zeroing, and the zeroed_count
   * the zeroing produced (a later, unrelated zeroing changes it and blocks
   * the restoration).
   */
  priorStatus: MemberStatus;
  priorTrustLevel: TrustLevel;
  priorInvitationCredits: number;
  /**
   * burned_dream is the liquid DREAM the zeroing burned from the balance.
   * Escrows the zeroing forfeited (challenge stakes, invitation stakes, role
   * and report bonds) are not included and are never restored.
   */
  burnedDream: string;
  zeroedCount: number;
  /**
   * appealed is set once MsgAppealGovAction files the (single) appeal of the
   * action; appeal_id is that appeal. Its outcome settles the record.
   */
  appealed: boolean;
  appealId: bigint;
}
export interface MemberActionRestorationProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MemberActionRestoration";
  value: Uint8Array;
}
/**
 * MemberActionRestoration is what an OVERTURNED member-action appeal needs to
 * undo the action MsgResolveMemberReport applied. Written at resolution, keyed
 * by the member's canonical address (re-keyed by a migration), and deleted when
 * the appeal reaches any terminal outcome or the filing window closes with no
 * appeal, so at most one exists per member and only while the action is
 * appealable.
 * @name MemberActionRestorationAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberActionRestoration
 */
export interface MemberActionRestorationAmino {
  member?: string;
  /**
   * action is WARNING, DEMOTION or ZEROING.
   */
  action?: GovActionType;
  /**
   * resolved_at is the block time of the resolution; the filing window closes
   * at resolved_at + DefaultAppealDeadline.
   */
  resolved_at?: string;
  /**
   * season is the season the action was applied in. Reputation restored in a
   * later season goes to the lifetime archive, which the season reset would
   * have moved it to.
   */
  season?: string;
  /**
   * warning_id is the MemberWarning a WARNING created.
   */
  warning_id?: string;
  /**
   * reputation is, for DEMOTION, the reputation the slash took per tag and,
   * for ZEROING, the member's per-tag seasonal reputation before the zeroing.
   */
  reputation?: {
    [key: string]: string;
  };
  /**
   * ZEROING only: the member's state before the zeroing, and the zeroed_count
   * the zeroing produced (a later, unrelated zeroing changes it and blocks
   * the restoration).
   */
  prior_status?: MemberStatus;
  prior_trust_level?: TrustLevel;
  prior_invitation_credits?: number;
  /**
   * burned_dream is the liquid DREAM the zeroing burned from the balance.
   * Escrows the zeroing forfeited (challenge stakes, invitation stakes, role
   * and report bonds) are not included and are never restored.
   */
  burned_dream?: string;
  zeroed_count?: number;
  /**
   * appealed is set once MsgAppealGovAction files the (single) appeal of the
   * action; appeal_id is that appeal. Its outcome settles the record.
   */
  appealed?: boolean;
  appeal_id?: string;
}
export interface MemberActionRestorationAminoMsg {
  type: "/sparkdream.rep.v1.MemberActionRestoration";
  value: MemberActionRestorationAmino;
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
    defensePostIds: [],
    reporterBonds: [],
    resolvedAction: 0,
    resolvedAt: BigInt(0)
  };
}
/**
 * MemberReport defines the MemberReport message.
 * @name MemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberReport
 */
export const MemberReport = {
  typeUrl: "/sparkdream.rep.v1.MemberReport",
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
      writer.uint32(74).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.evidencePostIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.defensePostIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.reporterBonds) {
      ReporterBondEntry.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.resolvedAction !== 0) {
      writer.uint32(104).int32(message.resolvedAction);
    }
    if (message.resolvedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.resolvedAt);
    }
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
        case 9:
          message.reporters.push(reader.string());
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
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.defensePostIds.push(reader.uint64());
            }
          } else {
            message.defensePostIds.push(reader.uint64());
          }
          break;
        case 12:
          message.reporterBonds.push(ReporterBondEntry.decode(reader, reader.uint32()));
          break;
        case 13:
          message.resolvedAction = reader.int32() as any;
          break;
        case 14:
          message.resolvedAt = reader.int64();
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
    message.reporterBonds = object.reporterBonds?.map(e => ReporterBondEntry.fromPartial(e)) || [];
    message.resolvedAction = object.resolvedAction ?? 0;
    message.resolvedAt = object.resolvedAt !== undefined && object.resolvedAt !== null ? BigInt(object.resolvedAt.toString()) : BigInt(0);
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
    message.reporterBonds = object.reporter_bonds?.map(e => ReporterBondEntry.fromAmino(e)) || [];
    if (object.resolved_action !== undefined && object.resolved_action !== null) {
      message.resolvedAction = object.resolved_action;
    }
    if (object.resolved_at !== undefined && object.resolved_at !== null) {
      message.resolvedAt = BigInt(object.resolved_at);
    }
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
    if (message.reporterBonds) {
      obj.reporter_bonds = message.reporterBonds.map(e => e ? ReporterBondEntry.toAmino(e) : undefined);
    } else {
      obj.reporter_bonds = message.reporterBonds;
    }
    obj.resolved_action = message.resolvedAction === 0 ? undefined : message.resolvedAction;
    obj.resolved_at = message.resolvedAt !== BigInt(0) ? message.resolvedAt?.toString() : undefined;
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
      typeUrl: "/sparkdream.rep.v1.MemberReport",
      value: MemberReport.encode(message).finish()
    };
  }
};
function createBaseReporterBondEntry(): ReporterBondEntry {
  return {
    address: "",
    amount: ""
  };
}
/**
 * ReporterBondEntry tracks the DREAM amount locked by a specific reporter
 * or cosigner against a member report.
 * @name ReporterBondEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReporterBondEntry
 */
export const ReporterBondEntry = {
  typeUrl: "/sparkdream.rep.v1.ReporterBondEntry",
  encode(message: ReporterBondEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReporterBondEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReporterBondEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReporterBondEntry>): ReporterBondEntry {
    const message = createBaseReporterBondEntry();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ReporterBondEntryAmino): ReporterBondEntry {
    const message = createBaseReporterBondEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: ReporterBondEntry): ReporterBondEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: ReporterBondEntryAminoMsg): ReporterBondEntry {
    return ReporterBondEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ReporterBondEntryProtoMsg): ReporterBondEntry {
    return ReporterBondEntry.decode(message.value);
  },
  toProto(message: ReporterBondEntry): Uint8Array {
    return ReporterBondEntry.encode(message).finish();
  },
  toProtoMsg(message: ReporterBondEntry): ReporterBondEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ReporterBondEntry",
      value: ReporterBondEntry.encode(message).finish()
    };
  }
};
function createBaseMemberActionRestoration_ReputationEntry(): MemberActionRestoration_ReputationEntry {
  return {
    key: "",
    value: ""
  };
}
/**
 * @name MemberActionRestoration_ReputationEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const MemberActionRestoration_ReputationEntry = {
  encode(message: MemberActionRestoration_ReputationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberActionRestoration_ReputationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberActionRestoration_ReputationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberActionRestoration_ReputationEntry>): MemberActionRestoration_ReputationEntry {
    const message = createBaseMemberActionRestoration_ReputationEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MemberActionRestoration_ReputationEntryAmino): MemberActionRestoration_ReputationEntry {
    const message = createBaseMemberActionRestoration_ReputationEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MemberActionRestoration_ReputationEntry): MemberActionRestoration_ReputationEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MemberActionRestoration_ReputationEntryAminoMsg): MemberActionRestoration_ReputationEntry {
    return MemberActionRestoration_ReputationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberActionRestoration_ReputationEntryProtoMsg): MemberActionRestoration_ReputationEntry {
    return MemberActionRestoration_ReputationEntry.decode(message.value);
  },
  toProto(message: MemberActionRestoration_ReputationEntry): Uint8Array {
    return MemberActionRestoration_ReputationEntry.encode(message).finish();
  }
};
function createBaseMemberActionRestoration(): MemberActionRestoration {
  return {
    member: "",
    action: 0,
    resolvedAt: BigInt(0),
    season: BigInt(0),
    warningId: BigInt(0),
    reputation: {},
    priorStatus: 0,
    priorTrustLevel: 0,
    priorInvitationCredits: 0,
    burnedDream: "",
    zeroedCount: 0,
    appealed: false,
    appealId: BigInt(0)
  };
}
/**
 * MemberActionRestoration is what an OVERTURNED member-action appeal needs to
 * undo the action MsgResolveMemberReport applied. Written at resolution, keyed
 * by the member's canonical address (re-keyed by a migration), and deleted when
 * the appeal reaches any terminal outcome or the filing window closes with no
 * appeal, so at most one exists per member and only while the action is
 * appealable.
 * @name MemberActionRestoration
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberActionRestoration
 */
export const MemberActionRestoration = {
  typeUrl: "/sparkdream.rep.v1.MemberActionRestoration",
  encode(message: MemberActionRestoration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    if (message.resolvedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.resolvedAt);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(32).int64(message.season);
    }
    if (message.warningId !== BigInt(0)) {
      writer.uint32(40).uint64(message.warningId);
    }
    Object.entries(message.reputation).forEach(([key, value]) => {
      MemberActionRestoration_ReputationEntry.encode({
        key: key as any,
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.priorStatus !== 0) {
      writer.uint32(56).int32(message.priorStatus);
    }
    if (message.priorTrustLevel !== 0) {
      writer.uint32(64).int32(message.priorTrustLevel);
    }
    if (message.priorInvitationCredits !== 0) {
      writer.uint32(72).uint32(message.priorInvitationCredits);
    }
    if (message.burnedDream !== "") {
      writer.uint32(82).string(message.burnedDream);
    }
    if (message.zeroedCount !== 0) {
      writer.uint32(88).uint32(message.zeroedCount);
    }
    if (message.appealed === true) {
      writer.uint32(96).bool(message.appealed);
    }
    if (message.appealId !== BigInt(0)) {
      writer.uint32(104).uint64(message.appealId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberActionRestoration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberActionRestoration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.resolvedAt = reader.int64();
          break;
        case 4:
          message.season = reader.int64();
          break;
        case 5:
          message.warningId = reader.uint64();
          break;
        case 6:
          const entry6 = MemberActionRestoration_ReputationEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.reputation[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.priorStatus = reader.int32() as any;
          break;
        case 8:
          message.priorTrustLevel = reader.int32() as any;
          break;
        case 9:
          message.priorInvitationCredits = reader.uint32();
          break;
        case 10:
          message.burnedDream = reader.string();
          break;
        case 11:
          message.zeroedCount = reader.uint32();
          break;
        case 12:
          message.appealed = reader.bool();
          break;
        case 13:
          message.appealId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberActionRestoration>): MemberActionRestoration {
    const message = createBaseMemberActionRestoration();
    message.member = object.member ?? "";
    message.action = object.action ?? 0;
    message.resolvedAt = object.resolvedAt !== undefined && object.resolvedAt !== null ? BigInt(object.resolvedAt.toString()) : BigInt(0);
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.warningId = object.warningId !== undefined && object.warningId !== null ? BigInt(object.warningId.toString()) : BigInt(0);
    message.reputation = Object.entries(object.reputation ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.priorStatus = object.priorStatus ?? 0;
    message.priorTrustLevel = object.priorTrustLevel ?? 0;
    message.priorInvitationCredits = object.priorInvitationCredits ?? 0;
    message.burnedDream = object.burnedDream ?? "";
    message.zeroedCount = object.zeroedCount ?? 0;
    message.appealed = object.appealed ?? false;
    message.appealId = object.appealId !== undefined && object.appealId !== null ? BigInt(object.appealId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberActionRestorationAmino): MemberActionRestoration {
    const message = createBaseMemberActionRestoration();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.resolved_at !== undefined && object.resolved_at !== null) {
      message.resolvedAt = BigInt(object.resolved_at);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.warning_id !== undefined && object.warning_id !== null) {
      message.warningId = BigInt(object.warning_id);
    }
    message.reputation = Object.entries(object.reputation ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.prior_status !== undefined && object.prior_status !== null) {
      message.priorStatus = object.prior_status;
    }
    if (object.prior_trust_level !== undefined && object.prior_trust_level !== null) {
      message.priorTrustLevel = object.prior_trust_level;
    }
    if (object.prior_invitation_credits !== undefined && object.prior_invitation_credits !== null) {
      message.priorInvitationCredits = object.prior_invitation_credits;
    }
    if (object.burned_dream !== undefined && object.burned_dream !== null) {
      message.burnedDream = object.burned_dream;
    }
    if (object.zeroed_count !== undefined && object.zeroed_count !== null) {
      message.zeroedCount = object.zeroed_count;
    }
    if (object.appealed !== undefined && object.appealed !== null) {
      message.appealed = object.appealed;
    }
    if (object.appeal_id !== undefined && object.appeal_id !== null) {
      message.appealId = BigInt(object.appeal_id);
    }
    return message;
  },
  toAmino(message: MemberActionRestoration): MemberActionRestorationAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.action = message.action === 0 ? undefined : message.action;
    obj.resolved_at = message.resolvedAt !== BigInt(0) ? message.resolvedAt?.toString() : undefined;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.warning_id = message.warningId !== BigInt(0) ? message.warningId?.toString() : undefined;
    obj.reputation = {};
    if (message.reputation) {
      Object.entries(message.reputation).forEach(([k, v]) => {
        obj.reputation[k] = v;
      });
    }
    obj.prior_status = message.priorStatus === 0 ? undefined : message.priorStatus;
    obj.prior_trust_level = message.priorTrustLevel === 0 ? undefined : message.priorTrustLevel;
    obj.prior_invitation_credits = message.priorInvitationCredits === 0 ? undefined : message.priorInvitationCredits;
    obj.burned_dream = message.burnedDream === "" ? undefined : message.burnedDream;
    obj.zeroed_count = message.zeroedCount === 0 ? undefined : message.zeroedCount;
    obj.appealed = message.appealed === false ? undefined : message.appealed;
    obj.appeal_id = message.appealId !== BigInt(0) ? message.appealId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberActionRestorationAminoMsg): MemberActionRestoration {
    return MemberActionRestoration.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberActionRestorationProtoMsg): MemberActionRestoration {
    return MemberActionRestoration.decode(message.value);
  },
  toProto(message: MemberActionRestoration): Uint8Array {
    return MemberActionRestoration.encode(message).finish();
  },
  toProtoMsg(message: MemberActionRestoration): MemberActionRestorationProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MemberActionRestoration",
      value: MemberActionRestoration.encode(message).finish()
    };
  }
};