//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MigrationPath is how a member migration was authorized. Precedence is
 * RECOVERY > COUNCIL > KEY: opening a higher-precedence migration for a
 * member cancels any pending lower-precedence one.
 */
export enum MigrationPath {
  MIGRATION_PATH_UNSPECIFIED = 0,
  /**
   * MIGRATION_PATH_KEY - KEY: the old address signed the request. The cheap routine path, subject
   * to the cooldown, the rolling window cap and the open-report block. Can
   * be switched off by governance (key_path_enabled) if the account
   * signature scheme is considered broken.
   */
  MIGRATION_PATH_KEY = 1,
  /**
   * MIGRATION_PATH_RECOVERY - RECOVERY: a pre-registered SHA-256 commitment was revealed. Relies on
   * nothing signed by the old address, so it survives a signature-scheme
   * break and outranks a thief holding the old key.
   */
  MIGRATION_PATH_RECOVERY = 2,
  /**
   * MIGRATION_PATH_COUNCIL - COUNCIL: the Commons HR committee (or x/gov) forced the migration on
   * off-chain evidence; the old address may object to a jury.
   */
  MIGRATION_PATH_COUNCIL = 3,
  UNRECOGNIZED = -1,
}
export const MigrationPathAmino = MigrationPath;
export function migrationPathFromJSON(object: any): MigrationPath {
  switch (object) {
    case 0:
    case "MIGRATION_PATH_UNSPECIFIED":
      return MigrationPath.MIGRATION_PATH_UNSPECIFIED;
    case 1:
    case "MIGRATION_PATH_KEY":
      return MigrationPath.MIGRATION_PATH_KEY;
    case 2:
    case "MIGRATION_PATH_RECOVERY":
      return MigrationPath.MIGRATION_PATH_RECOVERY;
    case 3:
    case "MIGRATION_PATH_COUNCIL":
      return MigrationPath.MIGRATION_PATH_COUNCIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MigrationPath.UNRECOGNIZED;
  }
}
export function migrationPathToJSON(object: MigrationPath): string {
  switch (object) {
    case MigrationPath.MIGRATION_PATH_UNSPECIFIED:
      return "MIGRATION_PATH_UNSPECIFIED";
    case MigrationPath.MIGRATION_PATH_KEY:
      return "MIGRATION_PATH_KEY";
    case MigrationPath.MIGRATION_PATH_RECOVERY:
      return "MIGRATION_PATH_RECOVERY";
    case MigrationPath.MIGRATION_PATH_COUNCIL:
      return "MIGRATION_PATH_COUNCIL";
    case MigrationPath.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MigrationStatus is the lifecycle of a MemberMigration. */
export enum MigrationStatus {
  MIGRATION_STATUS_UNSPECIFIED = 0,
  /**
   * MIGRATION_STATUS_REQUESTED - REQUESTED: created, waiting for the new address to accept within
   * migration_accept_window.
   */
  MIGRATION_STATUS_REQUESTED = 1,
  /**
   * MIGRATION_STATUS_ACCEPTED - ACCEPTED: the new address accepted; executes_at is set and the
   * migration sits in the EndBlocker queue.
   */
  MIGRATION_STATUS_ACCEPTED = 2,
  /**
   * MIGRATION_STATUS_OBJECTED - OBJECTED: (COUNCIL path) the old address objected during the delay and
   * a jury review decides. The queue entry is removed until the verdict.
   */
  MIGRATION_STATUS_OBJECTED = 3,
  /** MIGRATION_STATUS_FINALIZED - FINALIZED: the identity moved; the old address is a tombstone. */
  MIGRATION_STATUS_FINALIZED = 4,
  /**
   * MIGRATION_STATUS_CANCELLED - CANCELLED: cancelled by a party, by precedence, by a jury verdict, or at
   * finalization because the member was zeroed during the delay.
   */
  MIGRATION_STATUS_CANCELLED = 5,
  /** MIGRATION_STATUS_EXPIRED - EXPIRED: the new address never accepted within the window. */
  MIGRATION_STATUS_EXPIRED = 6,
  /**
   * MIGRATION_STATUS_FAILED - FAILED: finalization raised an error (a hook veto or a re-key failure);
   * the chain did not halt and nothing moved. failure_reason says why.
   */
  MIGRATION_STATUS_FAILED = 7,
  UNRECOGNIZED = -1,
}
export const MigrationStatusAmino = MigrationStatus;
export function migrationStatusFromJSON(object: any): MigrationStatus {
  switch (object) {
    case 0:
    case "MIGRATION_STATUS_UNSPECIFIED":
      return MigrationStatus.MIGRATION_STATUS_UNSPECIFIED;
    case 1:
    case "MIGRATION_STATUS_REQUESTED":
      return MigrationStatus.MIGRATION_STATUS_REQUESTED;
    case 2:
    case "MIGRATION_STATUS_ACCEPTED":
      return MigrationStatus.MIGRATION_STATUS_ACCEPTED;
    case 3:
    case "MIGRATION_STATUS_OBJECTED":
      return MigrationStatus.MIGRATION_STATUS_OBJECTED;
    case 4:
    case "MIGRATION_STATUS_FINALIZED":
      return MigrationStatus.MIGRATION_STATUS_FINALIZED;
    case 5:
    case "MIGRATION_STATUS_CANCELLED":
      return MigrationStatus.MIGRATION_STATUS_CANCELLED;
    case 6:
    case "MIGRATION_STATUS_EXPIRED":
      return MigrationStatus.MIGRATION_STATUS_EXPIRED;
    case 7:
    case "MIGRATION_STATUS_FAILED":
      return MigrationStatus.MIGRATION_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MigrationStatus.UNRECOGNIZED;
  }
}
export function migrationStatusToJSON(object: MigrationStatus): string {
  switch (object) {
    case MigrationStatus.MIGRATION_STATUS_UNSPECIFIED:
      return "MIGRATION_STATUS_UNSPECIFIED";
    case MigrationStatus.MIGRATION_STATUS_REQUESTED:
      return "MIGRATION_STATUS_REQUESTED";
    case MigrationStatus.MIGRATION_STATUS_ACCEPTED:
      return "MIGRATION_STATUS_ACCEPTED";
    case MigrationStatus.MIGRATION_STATUS_OBJECTED:
      return "MIGRATION_STATUS_OBJECTED";
    case MigrationStatus.MIGRATION_STATUS_FINALIZED:
      return "MIGRATION_STATUS_FINALIZED";
    case MigrationStatus.MIGRATION_STATUS_CANCELLED:
      return "MIGRATION_STATUS_CANCELLED";
    case MigrationStatus.MIGRATION_STATUS_EXPIRED:
      return "MIGRATION_STATUS_EXPIRED";
    case MigrationStatus.MIGRATION_STATUS_FAILED:
      return "MIGRATION_STATUS_FAILED";
    case MigrationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MemberMigration moves a member identity from from_address to to_address.
 * @name MemberMigration
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberMigration
 */
export interface MemberMigration {
  id: bigint;
  fromAddress: string;
  toAddress: string;
  path: MigrationPath;
  status: MigrationStatus;
  /**
   * requested_at is the block time of the request / reveal / force.
   */
  requestedAt: bigint;
  /**
   * accepted_at is the block time of MsgAcceptMigration (0 until then).
   */
  acceptedAt: bigint;
  /**
   * executes_at = accepted_at + the path's delay. Set on accept.
   */
  executesAt: bigint;
  /**
   * jury_review_id is the x/rep jury review opened by an objection
   * (COUNCIL path only; 0 otherwise).
   */
  juryReviewId: bigint;
  /**
   * evidence_uri references the off-chain evidence a COUNCIL migration was
   * filed on (inviter attestation, guild officers' statements, ...).
   */
  evidenceUri: string;
  /**
   * objector is the address that posted the objection bond (COUNCIL path).
   */
  objector: string;
  /**
   * objection_bond is the SPARK bond held while the jury decides, as a
   * micro-denom integer string. Paid to to_address when the migration is
   * upheld, refunded to the objector otherwise; never burned.
   */
  objectionBond: string;
  /**
   * failure_reason is set when status is FAILED or CANCELLED by the chain.
   */
  failureReason: string;
  /**
   * finalized_at is the block time of finalization (0 until then).
   */
  finalizedAt: bigint;
}
export interface MemberMigrationProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MemberMigration";
  value: Uint8Array;
}
/**
 * MemberMigration moves a member identity from from_address to to_address.
 * @name MemberMigrationAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberMigration
 */
export interface MemberMigrationAmino {
  id?: string;
  from_address?: string;
  to_address?: string;
  path?: MigrationPath;
  status?: MigrationStatus;
  /**
   * requested_at is the block time of the request / reveal / force.
   */
  requested_at?: string;
  /**
   * accepted_at is the block time of MsgAcceptMigration (0 until then).
   */
  accepted_at?: string;
  /**
   * executes_at = accepted_at + the path's delay. Set on accept.
   */
  executes_at?: string;
  /**
   * jury_review_id is the x/rep jury review opened by an objection
   * (COUNCIL path only; 0 otherwise).
   */
  jury_review_id?: string;
  /**
   * evidence_uri references the off-chain evidence a COUNCIL migration was
   * filed on (inviter attestation, guild officers' statements, ...).
   */
  evidence_uri?: string;
  /**
   * objector is the address that posted the objection bond (COUNCIL path).
   */
  objector?: string;
  /**
   * objection_bond is the SPARK bond held while the jury decides, as a
   * micro-denom integer string. Paid to to_address when the migration is
   * upheld, refunded to the objector otherwise; never burned.
   */
  objection_bond?: string;
  /**
   * failure_reason is set when status is FAILED or CANCELLED by the chain.
   */
  failure_reason?: string;
  /**
   * finalized_at is the block time of finalization (0 until then).
   */
  finalized_at?: string;
}
export interface MemberMigrationAminoMsg {
  type: "/sparkdream.rep.v1.MemberMigration";
  value: MemberMigrationAmino;
}
/**
 * Tombstone is the forward alias left behind at from_address once a
 * migration finalizes. canonical always points at the CURRENT address: when
 * the canonical address migrates again, every predecessor is rewritten
 * (path compression), so one lookup is enough.
 * @name Tombstone
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Tombstone
 */
export interface Tombstone {
  /**
   * address is the tombstoned (old) address; the map key in state.
   */
  address: string;
  canonical: string;
  /**
   * path is the path of the migration that tombstoned this address. The
   * ante decorator reads it: a KEY tombstone may still MsgSend, a RECOVERY
   * or COUNCIL tombstone (presumed compromised) may not.
   */
  path: MigrationPath;
  migrationId: bigint;
  /**
   * finalized_epoch is the rep epoch in which this address stopped being
   * canonical. The dedup horizon (AliasDedupHorizonEpochs) is measured from
   * it, so it is never rewritten by a later path compression.
   */
  finalizedEpoch: bigint;
}
export interface TombstoneProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Tombstone";
  value: Uint8Array;
}
/**
 * Tombstone is the forward alias left behind at from_address once a
 * migration finalizes. canonical always points at the CURRENT address: when
 * the canonical address migrates again, every predecessor is rewritten
 * (path compression), so one lookup is enough.
 * @name TombstoneAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Tombstone
 */
export interface TombstoneAmino {
  /**
   * address is the tombstoned (old) address; the map key in state.
   */
  address?: string;
  canonical?: string;
  /**
   * path is the path of the migration that tombstoned this address. The
   * ante decorator reads it: a KEY tombstone may still MsgSend, a RECOVERY
   * or COUNCIL tombstone (presumed compromised) may not.
   */
  path?: MigrationPath;
  migration_id?: string;
  /**
   * finalized_epoch is the rep epoch in which this address stopped being
   * canonical. The dedup horizon (AliasDedupHorizonEpochs) is measured from
   * it, so it is never rewritten by a later path compression.
   */
  finalized_epoch?: string;
}
export interface TombstoneAminoMsg {
  type: "/sparkdream.rep.v1.Tombstone";
  value: TombstoneAmino;
}
/**
 * RecoveryCommitment is one SHA-256 commitment to a secret preimage. A reveal
 * of the preimage opens a RECOVERY migration without any signature from the
 * member's account key.
 * @name RecoveryCommitment
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitment
 */
export interface RecoveryCommitment {
  /**
   * commitment = SHA-256("sparkdream/recovery/commit/v1" || preimage).
   */
  commitment: Uint8Array;
  /**
   * effective_at is the block time from which the commitment is active;
   * 0 means active now. Every commitment set by an existing member waits out
   * recovery_change_delay; only the one carried by MsgAcceptInvitation at
   * onboarding is immediate.
   */
  effectiveAt: bigint;
}
export interface RecoveryCommitmentProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommitment";
  value: Uint8Array;
}
/**
 * RecoveryCommitment is one SHA-256 commitment to a secret preimage. A reveal
 * of the preimage opens a RECOVERY migration without any signature from the
 * member's account key.
 * @name RecoveryCommitmentAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitment
 */
export interface RecoveryCommitmentAmino {
  /**
   * commitment = SHA-256("sparkdream/recovery/commit/v1" || preimage).
   */
  commitment?: string;
  /**
   * effective_at is the block time from which the commitment is active;
   * 0 means active now. Every commitment set by an existing member waits out
   * recovery_change_delay; only the one carried by MsgAcceptInvitation at
   * onboarding is immediate.
   */
  effective_at?: string;
}
export interface RecoveryCommitmentAminoMsg {
  type: "/sparkdream.rep.v1.RecoveryCommitment";
  value: RecoveryCommitmentAmino;
}
/**
 * RecoveryCommitmentSet is a member's commitments, at most
 * MaxRecoveryCommitments, in no particular order. A failed reveal burns one
 * commitment, never the member's only recovery.
 * @name RecoveryCommitmentSet
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitmentSet
 */
export interface RecoveryCommitmentSet {
  commitments: RecoveryCommitment[];
  /**
   * pending_removals are commitments whose removal is waiting out
   * recovery_change_delay: the commitment stays active until removal_at.
   */
  pendingRemovals: PendingCommitmentRemoval[];
}
export interface RecoveryCommitmentSetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommitmentSet";
  value: Uint8Array;
}
/**
 * RecoveryCommitmentSet is a member's commitments, at most
 * MaxRecoveryCommitments, in no particular order. A failed reveal burns one
 * commitment, never the member's only recovery.
 * @name RecoveryCommitmentSetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitmentSet
 */
export interface RecoveryCommitmentSetAmino {
  commitments?: RecoveryCommitmentAmino[];
  /**
   * pending_removals are commitments whose removal is waiting out
   * recovery_change_delay: the commitment stays active until removal_at.
   */
  pending_removals?: PendingCommitmentRemovalAmino[];
}
export interface RecoveryCommitmentSetAminoMsg {
  type: "/sparkdream.rep.v1.RecoveryCommitmentSet";
  value: RecoveryCommitmentSetAmino;
}
/**
 * PendingCommitmentRemoval schedules the removal of a commitment.
 * @name PendingCommitmentRemoval
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.PendingCommitmentRemoval
 */
export interface PendingCommitmentRemoval {
  commitment: Uint8Array;
  removalAt: bigint;
}
export interface PendingCommitmentRemovalProtoMsg {
  typeUrl: "/sparkdream.rep.v1.PendingCommitmentRemoval";
  value: Uint8Array;
}
/**
 * PendingCommitmentRemoval schedules the removal of a commitment.
 * @name PendingCommitmentRemovalAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.PendingCommitmentRemoval
 */
export interface PendingCommitmentRemovalAmino {
  commitment?: string;
  removal_at?: string;
}
export interface PendingCommitmentRemovalAminoMsg {
  type: "/sparkdream.rep.v1.PendingCommitmentRemoval";
  value: PendingCommitmentRemovalAmino;
}
/**
 * RecoveryCommit is the front-running guard for a reveal: a sealed hash of
 * (preimage, old address, new address) that must have aged
 * recovery_reveal_min_blocks before the reveal is accepted. Anyone can submit
 * one; it says nothing about the member, the preimage or the target.
 * @name RecoveryCommit
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommit
 */
export interface RecoveryCommit {
  /**
   * sealed = SHA-256("sparkdream/recovery/seal/v1" || preimage || A || B);
   * the map key in state.
   */
  sealed: Uint8Array;
  submitter: string;
  height: bigint;
  expiresAt: bigint;
  /**
   * deposit is the SPARK locked by the submitter, refunded when a reveal
   * consumes the seal and burned when the seal expires.
   */
  deposit: string;
}
export interface RecoveryCommitProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommit";
  value: Uint8Array;
}
/**
 * RecoveryCommit is the front-running guard for a reveal: a sealed hash of
 * (preimage, old address, new address) that must have aged
 * recovery_reveal_min_blocks before the reveal is accepted. Anyone can submit
 * one; it says nothing about the member, the preimage or the target.
 * @name RecoveryCommitAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommit
 */
export interface RecoveryCommitAmino {
  /**
   * sealed = SHA-256("sparkdream/recovery/seal/v1" || preimage || A || B);
   * the map key in state.
   */
  sealed?: string;
  submitter?: string;
  height?: string;
  expires_at?: string;
  /**
   * deposit is the SPARK locked by the submitter, refunded when a reveal
   * consumes the seal and burned when the seal expires.
   */
  deposit?: string;
}
export interface RecoveryCommitAminoMsg {
  type: "/sparkdream.rep.v1.RecoveryCommit";
  value: RecoveryCommitAmino;
}
/**
 * RecoveryCommitmentEntry is the genesis form of the RecoveryCommitments map.
 * @name RecoveryCommitmentEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitmentEntry
 */
export interface RecoveryCommitmentEntry {
  member: string;
  set: RecoveryCommitmentSet;
}
export interface RecoveryCommitmentEntryProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommitmentEntry";
  value: Uint8Array;
}
/**
 * RecoveryCommitmentEntry is the genesis form of the RecoveryCommitments map.
 * @name RecoveryCommitmentEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitmentEntry
 */
export interface RecoveryCommitmentEntryAmino {
  member?: string;
  set?: RecoveryCommitmentSetAmino;
}
export interface RecoveryCommitmentEntryAminoMsg {
  type: "/sparkdream.rep.v1.RecoveryCommitmentEntry";
  value: RecoveryCommitmentEntryAmino;
}
function createBaseMemberMigration(): MemberMigration {
  return {
    id: BigInt(0),
    fromAddress: "",
    toAddress: "",
    path: 0,
    status: 0,
    requestedAt: BigInt(0),
    acceptedAt: BigInt(0),
    executesAt: BigInt(0),
    juryReviewId: BigInt(0),
    evidenceUri: "",
    objector: "",
    objectionBond: "",
    failureReason: "",
    finalizedAt: BigInt(0)
  };
}
/**
 * MemberMigration moves a member identity from from_address to to_address.
 * @name MemberMigration
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberMigration
 */
export const MemberMigration = {
  typeUrl: "/sparkdream.rep.v1.MemberMigration",
  encode(message: MemberMigration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.fromAddress !== "") {
      writer.uint32(18).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    if (message.path !== 0) {
      writer.uint32(32).int32(message.path);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.requestedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.requestedAt);
    }
    if (message.acceptedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.acceptedAt);
    }
    if (message.executesAt !== BigInt(0)) {
      writer.uint32(64).int64(message.executesAt);
    }
    if (message.juryReviewId !== BigInt(0)) {
      writer.uint32(72).uint64(message.juryReviewId);
    }
    if (message.evidenceUri !== "") {
      writer.uint32(82).string(message.evidenceUri);
    }
    if (message.objector !== "") {
      writer.uint32(90).string(message.objector);
    }
    if (message.objectionBond !== "") {
      writer.uint32(98).string(message.objectionBond);
    }
    if (message.failureReason !== "") {
      writer.uint32(106).string(message.failureReason);
    }
    if (message.finalizedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.finalizedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberMigration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberMigration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.fromAddress = reader.string();
          break;
        case 3:
          message.toAddress = reader.string();
          break;
        case 4:
          message.path = reader.int32() as any;
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.requestedAt = reader.int64();
          break;
        case 7:
          message.acceptedAt = reader.int64();
          break;
        case 8:
          message.executesAt = reader.int64();
          break;
        case 9:
          message.juryReviewId = reader.uint64();
          break;
        case 10:
          message.evidenceUri = reader.string();
          break;
        case 11:
          message.objector = reader.string();
          break;
        case 12:
          message.objectionBond = reader.string();
          break;
        case 13:
          message.failureReason = reader.string();
          break;
        case 14:
          message.finalizedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberMigration>): MemberMigration {
    const message = createBaseMemberMigration();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.path = object.path ?? 0;
    message.status = object.status ?? 0;
    message.requestedAt = object.requestedAt !== undefined && object.requestedAt !== null ? BigInt(object.requestedAt.toString()) : BigInt(0);
    message.acceptedAt = object.acceptedAt !== undefined && object.acceptedAt !== null ? BigInt(object.acceptedAt.toString()) : BigInt(0);
    message.executesAt = object.executesAt !== undefined && object.executesAt !== null ? BigInt(object.executesAt.toString()) : BigInt(0);
    message.juryReviewId = object.juryReviewId !== undefined && object.juryReviewId !== null ? BigInt(object.juryReviewId.toString()) : BigInt(0);
    message.evidenceUri = object.evidenceUri ?? "";
    message.objector = object.objector ?? "";
    message.objectionBond = object.objectionBond ?? "";
    message.failureReason = object.failureReason ?? "";
    message.finalizedAt = object.finalizedAt !== undefined && object.finalizedAt !== null ? BigInt(object.finalizedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberMigrationAmino): MemberMigration {
    const message = createBaseMemberMigration();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.requested_at !== undefined && object.requested_at !== null) {
      message.requestedAt = BigInt(object.requested_at);
    }
    if (object.accepted_at !== undefined && object.accepted_at !== null) {
      message.acceptedAt = BigInt(object.accepted_at);
    }
    if (object.executes_at !== undefined && object.executes_at !== null) {
      message.executesAt = BigInt(object.executes_at);
    }
    if (object.jury_review_id !== undefined && object.jury_review_id !== null) {
      message.juryReviewId = BigInt(object.jury_review_id);
    }
    if (object.evidence_uri !== undefined && object.evidence_uri !== null) {
      message.evidenceUri = object.evidence_uri;
    }
    if (object.objector !== undefined && object.objector !== null) {
      message.objector = object.objector;
    }
    if (object.objection_bond !== undefined && object.objection_bond !== null) {
      message.objectionBond = object.objection_bond;
    }
    if (object.failure_reason !== undefined && object.failure_reason !== null) {
      message.failureReason = object.failure_reason;
    }
    if (object.finalized_at !== undefined && object.finalized_at !== null) {
      message.finalizedAt = BigInt(object.finalized_at);
    }
    return message;
  },
  toAmino(message: MemberMigration): MemberMigrationAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    obj.path = message.path === 0 ? undefined : message.path;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.requested_at = message.requestedAt !== BigInt(0) ? message.requestedAt?.toString() : undefined;
    obj.accepted_at = message.acceptedAt !== BigInt(0) ? message.acceptedAt?.toString() : undefined;
    obj.executes_at = message.executesAt !== BigInt(0) ? message.executesAt?.toString() : undefined;
    obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
    obj.evidence_uri = message.evidenceUri === "" ? undefined : message.evidenceUri;
    obj.objector = message.objector === "" ? undefined : message.objector;
    obj.objection_bond = message.objectionBond === "" ? undefined : message.objectionBond;
    obj.failure_reason = message.failureReason === "" ? undefined : message.failureReason;
    obj.finalized_at = message.finalizedAt !== BigInt(0) ? message.finalizedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberMigrationAminoMsg): MemberMigration {
    return MemberMigration.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberMigrationProtoMsg): MemberMigration {
    return MemberMigration.decode(message.value);
  },
  toProto(message: MemberMigration): Uint8Array {
    return MemberMigration.encode(message).finish();
  },
  toProtoMsg(message: MemberMigration): MemberMigrationProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MemberMigration",
      value: MemberMigration.encode(message).finish()
    };
  }
};
function createBaseTombstone(): Tombstone {
  return {
    address: "",
    canonical: "",
    path: 0,
    migrationId: BigInt(0),
    finalizedEpoch: BigInt(0)
  };
}
/**
 * Tombstone is the forward alias left behind at from_address once a
 * migration finalizes. canonical always points at the CURRENT address: when
 * the canonical address migrates again, every predecessor is rewritten
 * (path compression), so one lookup is enough.
 * @name Tombstone
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Tombstone
 */
export const Tombstone = {
  typeUrl: "/sparkdream.rep.v1.Tombstone",
  encode(message: Tombstone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.canonical !== "") {
      writer.uint32(18).string(message.canonical);
    }
    if (message.path !== 0) {
      writer.uint32(24).int32(message.path);
    }
    if (message.migrationId !== BigInt(0)) {
      writer.uint32(32).uint64(message.migrationId);
    }
    if (message.finalizedEpoch !== BigInt(0)) {
      writer.uint32(40).int64(message.finalizedEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tombstone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTombstone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.canonical = reader.string();
          break;
        case 3:
          message.path = reader.int32() as any;
          break;
        case 4:
          message.migrationId = reader.uint64();
          break;
        case 5:
          message.finalizedEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tombstone>): Tombstone {
    const message = createBaseTombstone();
    message.address = object.address ?? "";
    message.canonical = object.canonical ?? "";
    message.path = object.path ?? 0;
    message.migrationId = object.migrationId !== undefined && object.migrationId !== null ? BigInt(object.migrationId.toString()) : BigInt(0);
    message.finalizedEpoch = object.finalizedEpoch !== undefined && object.finalizedEpoch !== null ? BigInt(object.finalizedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TombstoneAmino): Tombstone {
    const message = createBaseTombstone();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.canonical !== undefined && object.canonical !== null) {
      message.canonical = object.canonical;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.migration_id !== undefined && object.migration_id !== null) {
      message.migrationId = BigInt(object.migration_id);
    }
    if (object.finalized_epoch !== undefined && object.finalized_epoch !== null) {
      message.finalizedEpoch = BigInt(object.finalized_epoch);
    }
    return message;
  },
  toAmino(message: Tombstone): TombstoneAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.canonical = message.canonical === "" ? undefined : message.canonical;
    obj.path = message.path === 0 ? undefined : message.path;
    obj.migration_id = message.migrationId !== BigInt(0) ? message.migrationId?.toString() : undefined;
    obj.finalized_epoch = message.finalizedEpoch !== BigInt(0) ? message.finalizedEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TombstoneAminoMsg): Tombstone {
    return Tombstone.fromAmino(object.value);
  },
  fromProtoMsg(message: TombstoneProtoMsg): Tombstone {
    return Tombstone.decode(message.value);
  },
  toProto(message: Tombstone): Uint8Array {
    return Tombstone.encode(message).finish();
  },
  toProtoMsg(message: Tombstone): TombstoneProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Tombstone",
      value: Tombstone.encode(message).finish()
    };
  }
};
function createBaseRecoveryCommitment(): RecoveryCommitment {
  return {
    commitment: new Uint8Array(),
    effectiveAt: BigInt(0)
  };
}
/**
 * RecoveryCommitment is one SHA-256 commitment to a secret preimage. A reveal
 * of the preimage opens a RECOVERY migration without any signature from the
 * member's account key.
 * @name RecoveryCommitment
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitment
 */
export const RecoveryCommitment = {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommitment",
  encode(message: RecoveryCommitment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.effectiveAt !== BigInt(0)) {
      writer.uint32(16).int64(message.effectiveAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveryCommitment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveryCommitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.effectiveAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecoveryCommitment>): RecoveryCommitment {
    const message = createBaseRecoveryCommitment();
    message.commitment = object.commitment ?? new Uint8Array();
    message.effectiveAt = object.effectiveAt !== undefined && object.effectiveAt !== null ? BigInt(object.effectiveAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RecoveryCommitmentAmino): RecoveryCommitment {
    const message = createBaseRecoveryCommitment();
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    if (object.effective_at !== undefined && object.effective_at !== null) {
      message.effectiveAt = BigInt(object.effective_at);
    }
    return message;
  },
  toAmino(message: RecoveryCommitment): RecoveryCommitmentAmino {
    const obj: any = {};
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    obj.effective_at = message.effectiveAt !== BigInt(0) ? message.effectiveAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RecoveryCommitmentAminoMsg): RecoveryCommitment {
    return RecoveryCommitment.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoveryCommitmentProtoMsg): RecoveryCommitment {
    return RecoveryCommitment.decode(message.value);
  },
  toProto(message: RecoveryCommitment): Uint8Array {
    return RecoveryCommitment.encode(message).finish();
  },
  toProtoMsg(message: RecoveryCommitment): RecoveryCommitmentProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RecoveryCommitment",
      value: RecoveryCommitment.encode(message).finish()
    };
  }
};
function createBaseRecoveryCommitmentSet(): RecoveryCommitmentSet {
  return {
    commitments: [],
    pendingRemovals: []
  };
}
/**
 * RecoveryCommitmentSet is a member's commitments, at most
 * MaxRecoveryCommitments, in no particular order. A failed reveal burns one
 * commitment, never the member's only recovery.
 * @name RecoveryCommitmentSet
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitmentSet
 */
export const RecoveryCommitmentSet = {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommitmentSet",
  encode(message: RecoveryCommitmentSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commitments) {
      RecoveryCommitment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pendingRemovals) {
      PendingCommitmentRemoval.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveryCommitmentSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveryCommitmentSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(RecoveryCommitment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pendingRemovals.push(PendingCommitmentRemoval.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecoveryCommitmentSet>): RecoveryCommitmentSet {
    const message = createBaseRecoveryCommitmentSet();
    message.commitments = object.commitments?.map(e => RecoveryCommitment.fromPartial(e)) || [];
    message.pendingRemovals = object.pendingRemovals?.map(e => PendingCommitmentRemoval.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RecoveryCommitmentSetAmino): RecoveryCommitmentSet {
    const message = createBaseRecoveryCommitmentSet();
    message.commitments = object.commitments?.map(e => RecoveryCommitment.fromAmino(e)) || [];
    message.pendingRemovals = object.pending_removals?.map(e => PendingCommitmentRemoval.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RecoveryCommitmentSet): RecoveryCommitmentSetAmino {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? RecoveryCommitment.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.pendingRemovals) {
      obj.pending_removals = message.pendingRemovals.map(e => e ? PendingCommitmentRemoval.toAmino(e) : undefined);
    } else {
      obj.pending_removals = message.pendingRemovals;
    }
    return obj;
  },
  fromAminoMsg(object: RecoveryCommitmentSetAminoMsg): RecoveryCommitmentSet {
    return RecoveryCommitmentSet.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoveryCommitmentSetProtoMsg): RecoveryCommitmentSet {
    return RecoveryCommitmentSet.decode(message.value);
  },
  toProto(message: RecoveryCommitmentSet): Uint8Array {
    return RecoveryCommitmentSet.encode(message).finish();
  },
  toProtoMsg(message: RecoveryCommitmentSet): RecoveryCommitmentSetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RecoveryCommitmentSet",
      value: RecoveryCommitmentSet.encode(message).finish()
    };
  }
};
function createBasePendingCommitmentRemoval(): PendingCommitmentRemoval {
  return {
    commitment: new Uint8Array(),
    removalAt: BigInt(0)
  };
}
/**
 * PendingCommitmentRemoval schedules the removal of a commitment.
 * @name PendingCommitmentRemoval
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.PendingCommitmentRemoval
 */
export const PendingCommitmentRemoval = {
  typeUrl: "/sparkdream.rep.v1.PendingCommitmentRemoval",
  encode(message: PendingCommitmentRemoval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.removalAt !== BigInt(0)) {
      writer.uint32(16).int64(message.removalAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingCommitmentRemoval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingCommitmentRemoval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.removalAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingCommitmentRemoval>): PendingCommitmentRemoval {
    const message = createBasePendingCommitmentRemoval();
    message.commitment = object.commitment ?? new Uint8Array();
    message.removalAt = object.removalAt !== undefined && object.removalAt !== null ? BigInt(object.removalAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingCommitmentRemovalAmino): PendingCommitmentRemoval {
    const message = createBasePendingCommitmentRemoval();
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    if (object.removal_at !== undefined && object.removal_at !== null) {
      message.removalAt = BigInt(object.removal_at);
    }
    return message;
  },
  toAmino(message: PendingCommitmentRemoval): PendingCommitmentRemovalAmino {
    const obj: any = {};
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    obj.removal_at = message.removalAt !== BigInt(0) ? message.removalAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingCommitmentRemovalAminoMsg): PendingCommitmentRemoval {
    return PendingCommitmentRemoval.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingCommitmentRemovalProtoMsg): PendingCommitmentRemoval {
    return PendingCommitmentRemoval.decode(message.value);
  },
  toProto(message: PendingCommitmentRemoval): Uint8Array {
    return PendingCommitmentRemoval.encode(message).finish();
  },
  toProtoMsg(message: PendingCommitmentRemoval): PendingCommitmentRemovalProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.PendingCommitmentRemoval",
      value: PendingCommitmentRemoval.encode(message).finish()
    };
  }
};
function createBaseRecoveryCommit(): RecoveryCommit {
  return {
    sealed: new Uint8Array(),
    submitter: "",
    height: BigInt(0),
    expiresAt: BigInt(0),
    deposit: ""
  };
}
/**
 * RecoveryCommit is the front-running guard for a reveal: a sealed hash of
 * (preimage, old address, new address) that must have aged
 * recovery_reveal_min_blocks before the reveal is accepted. Anyone can submit
 * one; it says nothing about the member, the preimage or the target.
 * @name RecoveryCommit
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommit
 */
export const RecoveryCommit = {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommit",
  encode(message: RecoveryCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sealed.length !== 0) {
      writer.uint32(10).bytes(message.sealed);
    }
    if (message.submitter !== "") {
      writer.uint32(18).string(message.submitter);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(32).int64(message.expiresAt);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveryCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveryCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sealed = reader.bytes();
          break;
        case 2:
          message.submitter = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.expiresAt = reader.int64();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecoveryCommit>): RecoveryCommit {
    const message = createBaseRecoveryCommit();
    message.sealed = object.sealed ?? new Uint8Array();
    message.submitter = object.submitter ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RecoveryCommitAmino): RecoveryCommit {
    const message = createBaseRecoveryCommit();
    if (object.sealed !== undefined && object.sealed !== null) {
      message.sealed = bytesFromBase64(object.sealed);
    }
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RecoveryCommit): RecoveryCommitAmino {
    const obj: any = {};
    obj.sealed = message.sealed ? base64FromBytes(message.sealed) : undefined;
    obj.submitter = message.submitter === "" ? undefined : message.submitter;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    return obj;
  },
  fromAminoMsg(object: RecoveryCommitAminoMsg): RecoveryCommit {
    return RecoveryCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoveryCommitProtoMsg): RecoveryCommit {
    return RecoveryCommit.decode(message.value);
  },
  toProto(message: RecoveryCommit): Uint8Array {
    return RecoveryCommit.encode(message).finish();
  },
  toProtoMsg(message: RecoveryCommit): RecoveryCommitProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RecoveryCommit",
      value: RecoveryCommit.encode(message).finish()
    };
  }
};
function createBaseRecoveryCommitmentEntry(): RecoveryCommitmentEntry {
  return {
    member: "",
    set: RecoveryCommitmentSet.fromPartial({})
  };
}
/**
 * RecoveryCommitmentEntry is the genesis form of the RecoveryCommitments map.
 * @name RecoveryCommitmentEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RecoveryCommitmentEntry
 */
export const RecoveryCommitmentEntry = {
  typeUrl: "/sparkdream.rep.v1.RecoveryCommitmentEntry",
  encode(message: RecoveryCommitmentEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.set !== undefined) {
      RecoveryCommitmentSet.encode(message.set, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveryCommitmentEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveryCommitmentEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.set = RecoveryCommitmentSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecoveryCommitmentEntry>): RecoveryCommitmentEntry {
    const message = createBaseRecoveryCommitmentEntry();
    message.member = object.member ?? "";
    message.set = object.set !== undefined && object.set !== null ? RecoveryCommitmentSet.fromPartial(object.set) : undefined;
    return message;
  },
  fromAmino(object: RecoveryCommitmentEntryAmino): RecoveryCommitmentEntry {
    const message = createBaseRecoveryCommitmentEntry();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.set !== undefined && object.set !== null) {
      message.set = RecoveryCommitmentSet.fromAmino(object.set);
    }
    return message;
  },
  toAmino(message: RecoveryCommitmentEntry): RecoveryCommitmentEntryAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.set = message.set ? RecoveryCommitmentSet.toAmino(message.set) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecoveryCommitmentEntryAminoMsg): RecoveryCommitmentEntry {
    return RecoveryCommitmentEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoveryCommitmentEntryProtoMsg): RecoveryCommitmentEntry {
    return RecoveryCommitmentEntry.decode(message.value);
  },
  toProto(message: RecoveryCommitmentEntry): Uint8Array {
    return RecoveryCommitmentEntry.encode(message).finish();
  },
  toProtoMsg(message: RecoveryCommitmentEntry): RecoveryCommitmentEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RecoveryCommitmentEntry",
      value: RecoveryCommitmentEntry.encode(message).finish()
    };
  }
};