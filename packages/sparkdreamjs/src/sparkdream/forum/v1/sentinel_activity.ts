//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * AccuracyEpochBucket holds one reward-epoch's resolved-appeal tally for a
 * sentinel. Stored in a fixed-size ring on SentinelActivity (slot index =
 * epoch % SentinelAccuracyRingSize); the `epoch` stamp disambiguates a live
 * slot from a stale one left behind by an inactive epoch.
 * @name AccuracyEpochBucket
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.AccuracyEpochBucket
 */
export interface AccuracyEpochBucket {
  epoch: bigint;
  /**
   * upheld_hides + upheld_locks + upheld_moves resolved this epoch
   */
  upheld: bigint;
  /**
   * overturned_* resolved this epoch
   */
  overturned: bigint;
}
export interface AccuracyEpochBucketProtoMsg {
  typeUrl: "/sparkdream.forum.v1.AccuracyEpochBucket";
  value: Uint8Array;
}
/**
 * AccuracyEpochBucket holds one reward-epoch's resolved-appeal tally for a
 * sentinel. Stored in a fixed-size ring on SentinelActivity (slot index =
 * epoch % SentinelAccuracyRingSize); the `epoch` stamp disambiguates a live
 * slot from a stale one left behind by an inactive epoch.
 * @name AccuracyEpochBucketAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.AccuracyEpochBucket
 */
export interface AccuracyEpochBucketAmino {
  epoch?: string;
  /**
   * upheld_hides + upheld_locks + upheld_moves resolved this epoch
   */
  upheld?: string;
  /**
   * overturned_* resolved this epoch
   */
  overturned?: string;
}
export interface AccuracyEpochBucketAminoMsg {
  type: "/sparkdream.forum.v1.AccuracyEpochBucket";
  value: AccuracyEpochBucketAmino;
}
/**
 * SentinelActivity holds forum-specific action counters and local cooldowns
 * for a sentinel. The accountability record (bond, bond status, activity
 * stamps) lives in sparkdream.rep.v1.SentinelActivity.
 * STORAGE vs PROJECTION: the shared accountability record lives on
 * x/rep's RoleActivity (see docs/x-rep-spec.md); forum PERSISTS only the
 * forum-local fields — pending_hide_count, unchallenged_hides, and the
 * curation-proposal lifecycle counters (total/confirmed/rejected_proposals).
 * Every other field (per-action totals/upheld/overturned/epoch counters,
 * streaks, overturn_cooldown_until, accuracy_window, collect counters) is
 * PROJECTION-ONLY: sourced from x/rep's shared RoleActivity record at query
 * time by get-sentinel-activity so client field paths stay stable. Those
 * fields are zero in stored records and must not be written.
 * @name SentinelActivity
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.SentinelActivity
 */
export interface SentinelActivity {
  address: string;
  totalHides: bigint;
  upheldHides: bigint;
  overturnedHides: bigint;
  /**
   * unchallenged_hides counts hides that expired without ever being appealed
   * (the hide stood by default). Written by the hide-expiry EndBlocker. Excluded
   * from accuracy/reward math by design — it is a display/audit metric only, so
   * a sentinel cannot game rewards by spam-hiding low-visibility content.
   */
  unchallengedHides: bigint;
  epochHides: bigint;
  epochAppealsResolved: bigint;
  overturnCooldownUntil: bigint;
  consecutiveOverturns: bigint;
  pendingHideCount: bigint;
  consecutiveUpheld: bigint;
  epochAppealsFiled: bigint;
  totalLocks: bigint;
  upheldLocks: bigint;
  overturnedLocks: bigint;
  epochLocks: bigint;
  totalMoves: bigint;
  upheldMoves: bigint;
  overturnedMoves: bigint;
  epochMoves: bigint;
  totalPins: bigint;
  upheldPins: bigint;
  overturnedPins: bigint;
  epochPins: bigint;
  /**
   * Curation-proposal tracking. A sentinel may propose a reply as a thread's
   * accepted answer (MsgMarkAcceptedReply on someone else's thread); the author
   * confirms/rejects or it auto-confirms after a timeout.
   *   total_proposals     — lifetime proposals created (incremented at propose).
   *   confirmed_proposals — lifetime proposals confirmed (author confirm or
   *                         auto-confirm); credited to the proposing sentinel.
   *   rejected_proposals  — lifetime proposals rejected by the author.
   *   epoch_curations     — confirmed proposals in the current reward epoch.
   *                         Feeds the sentinel reward score; reset each epoch.
   *                         Incremented on CONFIRM (success), not on propose, so
   *                         it cannot be farmed by spamming unconfirmed proposals.
   */
  totalProposals: bigint;
  confirmedProposals: bigint;
  rejectedProposals: bigint;
  epochCurations: bigint;
  /**
   * Rolling-window accuracy ring. Fixed length SentinelAccuracyRingSize once
   * first written; slot e % C holds reward-epoch e's resolved-appeal tally.
   * x/rep's reward distribution computes accuracy over the last
   * SentinelAccuracyWindowEpochs slots from this ring. The lifetime
   * upheld_*\/overturned_* counters above are retained for display/audit and are
   * NO LONGER used for reward accuracy. Append-only field — empty on records
   * written before this field existed (no migration needed; an empty ring reads
   * as zero decided appeals).
   */
  accuracyWindow: AccuracyEpochBucket[];
  /**
   * Cross-module (x/collect) hide counters. Collect moderation is performed
   * by the same shared CONTENT_SENTINEL corps; collect reports hide actions
   * and jury outcomes into this record so streak demotion, the overturn
   * cooldown, the accuracy ring (outcomes land in accuracy_window like forum
   * ones), and reward-epoch activity all see collect behavior. Kept as
   * separate counters (not folded into total/epoch_hides) so forum's own
   * max_hides_per_epoch budget is not consumed by collect actions.
   */
  totalCollectHides: bigint;
  upheldCollectHides: bigint;
  overturnedCollectHides: bigint;
  epochCollectHides: bigint;
}
export interface SentinelActivityProtoMsg {
  typeUrl: "/sparkdream.forum.v1.SentinelActivity";
  value: Uint8Array;
}
/**
 * SentinelActivity holds forum-specific action counters and local cooldowns
 * for a sentinel. The accountability record (bond, bond status, activity
 * stamps) lives in sparkdream.rep.v1.SentinelActivity.
 * STORAGE vs PROJECTION: the shared accountability record lives on
 * x/rep's RoleActivity (see docs/x-rep-spec.md); forum PERSISTS only the
 * forum-local fields — pending_hide_count, unchallenged_hides, and the
 * curation-proposal lifecycle counters (total/confirmed/rejected_proposals).
 * Every other field (per-action totals/upheld/overturned/epoch counters,
 * streaks, overturn_cooldown_until, accuracy_window, collect counters) is
 * PROJECTION-ONLY: sourced from x/rep's shared RoleActivity record at query
 * time by get-sentinel-activity so client field paths stay stable. Those
 * fields are zero in stored records and must not be written.
 * @name SentinelActivityAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.SentinelActivity
 */
export interface SentinelActivityAmino {
  address?: string;
  total_hides?: string;
  upheld_hides?: string;
  overturned_hides?: string;
  /**
   * unchallenged_hides counts hides that expired without ever being appealed
   * (the hide stood by default). Written by the hide-expiry EndBlocker. Excluded
   * from accuracy/reward math by design — it is a display/audit metric only, so
   * a sentinel cannot game rewards by spam-hiding low-visibility content.
   */
  unchallenged_hides?: string;
  epoch_hides?: string;
  epoch_appeals_resolved?: string;
  overturn_cooldown_until?: string;
  consecutive_overturns?: string;
  pending_hide_count?: string;
  consecutive_upheld?: string;
  epoch_appeals_filed?: string;
  total_locks?: string;
  upheld_locks?: string;
  overturned_locks?: string;
  epoch_locks?: string;
  total_moves?: string;
  upheld_moves?: string;
  overturned_moves?: string;
  epoch_moves?: string;
  total_pins?: string;
  upheld_pins?: string;
  overturned_pins?: string;
  epoch_pins?: string;
  /**
   * Curation-proposal tracking. A sentinel may propose a reply as a thread's
   * accepted answer (MsgMarkAcceptedReply on someone else's thread); the author
   * confirms/rejects or it auto-confirms after a timeout.
   *   total_proposals     — lifetime proposals created (incremented at propose).
   *   confirmed_proposals — lifetime proposals confirmed (author confirm or
   *                         auto-confirm); credited to the proposing sentinel.
   *   rejected_proposals  — lifetime proposals rejected by the author.
   *   epoch_curations     — confirmed proposals in the current reward epoch.
   *                         Feeds the sentinel reward score; reset each epoch.
   *                         Incremented on CONFIRM (success), not on propose, so
   *                         it cannot be farmed by spamming unconfirmed proposals.
   */
  total_proposals?: string;
  confirmed_proposals?: string;
  rejected_proposals?: string;
  epoch_curations?: string;
  /**
   * Rolling-window accuracy ring. Fixed length SentinelAccuracyRingSize once
   * first written; slot e % C holds reward-epoch e's resolved-appeal tally.
   * x/rep's reward distribution computes accuracy over the last
   * SentinelAccuracyWindowEpochs slots from this ring. The lifetime
   * upheld_*\/overturned_* counters above are retained for display/audit and are
   * NO LONGER used for reward accuracy. Append-only field — empty on records
   * written before this field existed (no migration needed; an empty ring reads
   * as zero decided appeals).
   */
  accuracy_window?: AccuracyEpochBucketAmino[];
  /**
   * Cross-module (x/collect) hide counters. Collect moderation is performed
   * by the same shared CONTENT_SENTINEL corps; collect reports hide actions
   * and jury outcomes into this record so streak demotion, the overturn
   * cooldown, the accuracy ring (outcomes land in accuracy_window like forum
   * ones), and reward-epoch activity all see collect behavior. Kept as
   * separate counters (not folded into total/epoch_hides) so forum's own
   * max_hides_per_epoch budget is not consumed by collect actions.
   */
  total_collect_hides?: string;
  upheld_collect_hides?: string;
  overturned_collect_hides?: string;
  epoch_collect_hides?: string;
}
export interface SentinelActivityAminoMsg {
  type: "/sparkdream.forum.v1.SentinelActivity";
  value: SentinelActivityAmino;
}
function createBaseAccuracyEpochBucket(): AccuracyEpochBucket {
  return {
    epoch: BigInt(0),
    upheld: BigInt(0),
    overturned: BigInt(0)
  };
}
/**
 * AccuracyEpochBucket holds one reward-epoch's resolved-appeal tally for a
 * sentinel. Stored in a fixed-size ring on SentinelActivity (slot index =
 * epoch % SentinelAccuracyRingSize); the `epoch` stamp disambiguates a live
 * slot from a stale one left behind by an inactive epoch.
 * @name AccuracyEpochBucket
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.AccuracyEpochBucket
 */
export const AccuracyEpochBucket = {
  typeUrl: "/sparkdream.forum.v1.AccuracyEpochBucket",
  encode(message: AccuracyEpochBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.upheld !== BigInt(0)) {
      writer.uint32(16).uint64(message.upheld);
    }
    if (message.overturned !== BigInt(0)) {
      writer.uint32(24).uint64(message.overturned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccuracyEpochBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccuracyEpochBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.upheld = reader.uint64();
          break;
        case 3:
          message.overturned = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AccuracyEpochBucket>): AccuracyEpochBucket {
    const message = createBaseAccuracyEpochBucket();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.upheld = object.upheld !== undefined && object.upheld !== null ? BigInt(object.upheld.toString()) : BigInt(0);
    message.overturned = object.overturned !== undefined && object.overturned !== null ? BigInt(object.overturned.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AccuracyEpochBucketAmino): AccuracyEpochBucket {
    const message = createBaseAccuracyEpochBucket();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.upheld !== undefined && object.upheld !== null) {
      message.upheld = BigInt(object.upheld);
    }
    if (object.overturned !== undefined && object.overturned !== null) {
      message.overturned = BigInt(object.overturned);
    }
    return message;
  },
  toAmino(message: AccuracyEpochBucket): AccuracyEpochBucketAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.upheld = message.upheld !== BigInt(0) ? message.upheld?.toString() : undefined;
    obj.overturned = message.overturned !== BigInt(0) ? message.overturned?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AccuracyEpochBucketAminoMsg): AccuracyEpochBucket {
    return AccuracyEpochBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: AccuracyEpochBucketProtoMsg): AccuracyEpochBucket {
    return AccuracyEpochBucket.decode(message.value);
  },
  toProto(message: AccuracyEpochBucket): Uint8Array {
    return AccuracyEpochBucket.encode(message).finish();
  },
  toProtoMsg(message: AccuracyEpochBucket): AccuracyEpochBucketProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.AccuracyEpochBucket",
      value: AccuracyEpochBucket.encode(message).finish()
    };
  }
};
function createBaseSentinelActivity(): SentinelActivity {
  return {
    address: "",
    totalHides: BigInt(0),
    upheldHides: BigInt(0),
    overturnedHides: BigInt(0),
    unchallengedHides: BigInt(0),
    epochHides: BigInt(0),
    epochAppealsResolved: BigInt(0),
    overturnCooldownUntil: BigInt(0),
    consecutiveOverturns: BigInt(0),
    pendingHideCount: BigInt(0),
    consecutiveUpheld: BigInt(0),
    epochAppealsFiled: BigInt(0),
    totalLocks: BigInt(0),
    upheldLocks: BigInt(0),
    overturnedLocks: BigInt(0),
    epochLocks: BigInt(0),
    totalMoves: BigInt(0),
    upheldMoves: BigInt(0),
    overturnedMoves: BigInt(0),
    epochMoves: BigInt(0),
    totalPins: BigInt(0),
    upheldPins: BigInt(0),
    overturnedPins: BigInt(0),
    epochPins: BigInt(0),
    totalProposals: BigInt(0),
    confirmedProposals: BigInt(0),
    rejectedProposals: BigInt(0),
    epochCurations: BigInt(0),
    accuracyWindow: [],
    totalCollectHides: BigInt(0),
    upheldCollectHides: BigInt(0),
    overturnedCollectHides: BigInt(0),
    epochCollectHides: BigInt(0)
  };
}
/**
 * SentinelActivity holds forum-specific action counters and local cooldowns
 * for a sentinel. The accountability record (bond, bond status, activity
 * stamps) lives in sparkdream.rep.v1.SentinelActivity.
 * STORAGE vs PROJECTION: the shared accountability record lives on
 * x/rep's RoleActivity (see docs/x-rep-spec.md); forum PERSISTS only the
 * forum-local fields — pending_hide_count, unchallenged_hides, and the
 * curation-proposal lifecycle counters (total/confirmed/rejected_proposals).
 * Every other field (per-action totals/upheld/overturned/epoch counters,
 * streaks, overturn_cooldown_until, accuracy_window, collect counters) is
 * PROJECTION-ONLY: sourced from x/rep's shared RoleActivity record at query
 * time by get-sentinel-activity so client field paths stay stable. Those
 * fields are zero in stored records and must not be written.
 * @name SentinelActivity
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.SentinelActivity
 */
export const SentinelActivity = {
  typeUrl: "/sparkdream.forum.v1.SentinelActivity",
  encode(message: SentinelActivity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.totalHides !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalHides);
    }
    if (message.upheldHides !== BigInt(0)) {
      writer.uint32(24).uint64(message.upheldHides);
    }
    if (message.overturnedHides !== BigInt(0)) {
      writer.uint32(32).uint64(message.overturnedHides);
    }
    if (message.unchallengedHides !== BigInt(0)) {
      writer.uint32(40).uint64(message.unchallengedHides);
    }
    if (message.epochHides !== BigInt(0)) {
      writer.uint32(48).uint64(message.epochHides);
    }
    if (message.epochAppealsResolved !== BigInt(0)) {
      writer.uint32(56).uint64(message.epochAppealsResolved);
    }
    if (message.overturnCooldownUntil !== BigInt(0)) {
      writer.uint32(64).int64(message.overturnCooldownUntil);
    }
    if (message.consecutiveOverturns !== BigInt(0)) {
      writer.uint32(72).uint64(message.consecutiveOverturns);
    }
    if (message.pendingHideCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.pendingHideCount);
    }
    if (message.consecutiveUpheld !== BigInt(0)) {
      writer.uint32(88).uint64(message.consecutiveUpheld);
    }
    if (message.epochAppealsFiled !== BigInt(0)) {
      writer.uint32(96).uint64(message.epochAppealsFiled);
    }
    if (message.totalLocks !== BigInt(0)) {
      writer.uint32(104).uint64(message.totalLocks);
    }
    if (message.upheldLocks !== BigInt(0)) {
      writer.uint32(112).uint64(message.upheldLocks);
    }
    if (message.overturnedLocks !== BigInt(0)) {
      writer.uint32(120).uint64(message.overturnedLocks);
    }
    if (message.epochLocks !== BigInt(0)) {
      writer.uint32(128).uint64(message.epochLocks);
    }
    if (message.totalMoves !== BigInt(0)) {
      writer.uint32(136).uint64(message.totalMoves);
    }
    if (message.upheldMoves !== BigInt(0)) {
      writer.uint32(144).uint64(message.upheldMoves);
    }
    if (message.overturnedMoves !== BigInt(0)) {
      writer.uint32(152).uint64(message.overturnedMoves);
    }
    if (message.epochMoves !== BigInt(0)) {
      writer.uint32(160).uint64(message.epochMoves);
    }
    if (message.totalPins !== BigInt(0)) {
      writer.uint32(168).uint64(message.totalPins);
    }
    if (message.upheldPins !== BigInt(0)) {
      writer.uint32(176).uint64(message.upheldPins);
    }
    if (message.overturnedPins !== BigInt(0)) {
      writer.uint32(184).uint64(message.overturnedPins);
    }
    if (message.epochPins !== BigInt(0)) {
      writer.uint32(192).uint64(message.epochPins);
    }
    if (message.totalProposals !== BigInt(0)) {
      writer.uint32(200).uint64(message.totalProposals);
    }
    if (message.confirmedProposals !== BigInt(0)) {
      writer.uint32(208).uint64(message.confirmedProposals);
    }
    if (message.rejectedProposals !== BigInt(0)) {
      writer.uint32(216).uint64(message.rejectedProposals);
    }
    if (message.epochCurations !== BigInt(0)) {
      writer.uint32(224).uint64(message.epochCurations);
    }
    for (const v of message.accuracyWindow) {
      AccuracyEpochBucket.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    if (message.totalCollectHides !== BigInt(0)) {
      writer.uint32(240).uint64(message.totalCollectHides);
    }
    if (message.upheldCollectHides !== BigInt(0)) {
      writer.uint32(248).uint64(message.upheldCollectHides);
    }
    if (message.overturnedCollectHides !== BigInt(0)) {
      writer.uint32(256).uint64(message.overturnedCollectHides);
    }
    if (message.epochCollectHides !== BigInt(0)) {
      writer.uint32(264).uint64(message.epochCollectHides);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SentinelActivity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentinelActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.totalHides = reader.uint64();
          break;
        case 3:
          message.upheldHides = reader.uint64();
          break;
        case 4:
          message.overturnedHides = reader.uint64();
          break;
        case 5:
          message.unchallengedHides = reader.uint64();
          break;
        case 6:
          message.epochHides = reader.uint64();
          break;
        case 7:
          message.epochAppealsResolved = reader.uint64();
          break;
        case 8:
          message.overturnCooldownUntil = reader.int64();
          break;
        case 9:
          message.consecutiveOverturns = reader.uint64();
          break;
        case 10:
          message.pendingHideCount = reader.uint64();
          break;
        case 11:
          message.consecutiveUpheld = reader.uint64();
          break;
        case 12:
          message.epochAppealsFiled = reader.uint64();
          break;
        case 13:
          message.totalLocks = reader.uint64();
          break;
        case 14:
          message.upheldLocks = reader.uint64();
          break;
        case 15:
          message.overturnedLocks = reader.uint64();
          break;
        case 16:
          message.epochLocks = reader.uint64();
          break;
        case 17:
          message.totalMoves = reader.uint64();
          break;
        case 18:
          message.upheldMoves = reader.uint64();
          break;
        case 19:
          message.overturnedMoves = reader.uint64();
          break;
        case 20:
          message.epochMoves = reader.uint64();
          break;
        case 21:
          message.totalPins = reader.uint64();
          break;
        case 22:
          message.upheldPins = reader.uint64();
          break;
        case 23:
          message.overturnedPins = reader.uint64();
          break;
        case 24:
          message.epochPins = reader.uint64();
          break;
        case 25:
          message.totalProposals = reader.uint64();
          break;
        case 26:
          message.confirmedProposals = reader.uint64();
          break;
        case 27:
          message.rejectedProposals = reader.uint64();
          break;
        case 28:
          message.epochCurations = reader.uint64();
          break;
        case 29:
          message.accuracyWindow.push(AccuracyEpochBucket.decode(reader, reader.uint32()));
          break;
        case 30:
          message.totalCollectHides = reader.uint64();
          break;
        case 31:
          message.upheldCollectHides = reader.uint64();
          break;
        case 32:
          message.overturnedCollectHides = reader.uint64();
          break;
        case 33:
          message.epochCollectHides = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SentinelActivity>): SentinelActivity {
    const message = createBaseSentinelActivity();
    message.address = object.address ?? "";
    message.totalHides = object.totalHides !== undefined && object.totalHides !== null ? BigInt(object.totalHides.toString()) : BigInt(0);
    message.upheldHides = object.upheldHides !== undefined && object.upheldHides !== null ? BigInt(object.upheldHides.toString()) : BigInt(0);
    message.overturnedHides = object.overturnedHides !== undefined && object.overturnedHides !== null ? BigInt(object.overturnedHides.toString()) : BigInt(0);
    message.unchallengedHides = object.unchallengedHides !== undefined && object.unchallengedHides !== null ? BigInt(object.unchallengedHides.toString()) : BigInt(0);
    message.epochHides = object.epochHides !== undefined && object.epochHides !== null ? BigInt(object.epochHides.toString()) : BigInt(0);
    message.epochAppealsResolved = object.epochAppealsResolved !== undefined && object.epochAppealsResolved !== null ? BigInt(object.epochAppealsResolved.toString()) : BigInt(0);
    message.overturnCooldownUntil = object.overturnCooldownUntil !== undefined && object.overturnCooldownUntil !== null ? BigInt(object.overturnCooldownUntil.toString()) : BigInt(0);
    message.consecutiveOverturns = object.consecutiveOverturns !== undefined && object.consecutiveOverturns !== null ? BigInt(object.consecutiveOverturns.toString()) : BigInt(0);
    message.pendingHideCount = object.pendingHideCount !== undefined && object.pendingHideCount !== null ? BigInt(object.pendingHideCount.toString()) : BigInt(0);
    message.consecutiveUpheld = object.consecutiveUpheld !== undefined && object.consecutiveUpheld !== null ? BigInt(object.consecutiveUpheld.toString()) : BigInt(0);
    message.epochAppealsFiled = object.epochAppealsFiled !== undefined && object.epochAppealsFiled !== null ? BigInt(object.epochAppealsFiled.toString()) : BigInt(0);
    message.totalLocks = object.totalLocks !== undefined && object.totalLocks !== null ? BigInt(object.totalLocks.toString()) : BigInt(0);
    message.upheldLocks = object.upheldLocks !== undefined && object.upheldLocks !== null ? BigInt(object.upheldLocks.toString()) : BigInt(0);
    message.overturnedLocks = object.overturnedLocks !== undefined && object.overturnedLocks !== null ? BigInt(object.overturnedLocks.toString()) : BigInt(0);
    message.epochLocks = object.epochLocks !== undefined && object.epochLocks !== null ? BigInt(object.epochLocks.toString()) : BigInt(0);
    message.totalMoves = object.totalMoves !== undefined && object.totalMoves !== null ? BigInt(object.totalMoves.toString()) : BigInt(0);
    message.upheldMoves = object.upheldMoves !== undefined && object.upheldMoves !== null ? BigInt(object.upheldMoves.toString()) : BigInt(0);
    message.overturnedMoves = object.overturnedMoves !== undefined && object.overturnedMoves !== null ? BigInt(object.overturnedMoves.toString()) : BigInt(0);
    message.epochMoves = object.epochMoves !== undefined && object.epochMoves !== null ? BigInt(object.epochMoves.toString()) : BigInt(0);
    message.totalPins = object.totalPins !== undefined && object.totalPins !== null ? BigInt(object.totalPins.toString()) : BigInt(0);
    message.upheldPins = object.upheldPins !== undefined && object.upheldPins !== null ? BigInt(object.upheldPins.toString()) : BigInt(0);
    message.overturnedPins = object.overturnedPins !== undefined && object.overturnedPins !== null ? BigInt(object.overturnedPins.toString()) : BigInt(0);
    message.epochPins = object.epochPins !== undefined && object.epochPins !== null ? BigInt(object.epochPins.toString()) : BigInt(0);
    message.totalProposals = object.totalProposals !== undefined && object.totalProposals !== null ? BigInt(object.totalProposals.toString()) : BigInt(0);
    message.confirmedProposals = object.confirmedProposals !== undefined && object.confirmedProposals !== null ? BigInt(object.confirmedProposals.toString()) : BigInt(0);
    message.rejectedProposals = object.rejectedProposals !== undefined && object.rejectedProposals !== null ? BigInt(object.rejectedProposals.toString()) : BigInt(0);
    message.epochCurations = object.epochCurations !== undefined && object.epochCurations !== null ? BigInt(object.epochCurations.toString()) : BigInt(0);
    message.accuracyWindow = object.accuracyWindow?.map(e => AccuracyEpochBucket.fromPartial(e)) || [];
    message.totalCollectHides = object.totalCollectHides !== undefined && object.totalCollectHides !== null ? BigInt(object.totalCollectHides.toString()) : BigInt(0);
    message.upheldCollectHides = object.upheldCollectHides !== undefined && object.upheldCollectHides !== null ? BigInt(object.upheldCollectHides.toString()) : BigInt(0);
    message.overturnedCollectHides = object.overturnedCollectHides !== undefined && object.overturnedCollectHides !== null ? BigInt(object.overturnedCollectHides.toString()) : BigInt(0);
    message.epochCollectHides = object.epochCollectHides !== undefined && object.epochCollectHides !== null ? BigInt(object.epochCollectHides.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SentinelActivityAmino): SentinelActivity {
    const message = createBaseSentinelActivity();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.total_hides !== undefined && object.total_hides !== null) {
      message.totalHides = BigInt(object.total_hides);
    }
    if (object.upheld_hides !== undefined && object.upheld_hides !== null) {
      message.upheldHides = BigInt(object.upheld_hides);
    }
    if (object.overturned_hides !== undefined && object.overturned_hides !== null) {
      message.overturnedHides = BigInt(object.overturned_hides);
    }
    if (object.unchallenged_hides !== undefined && object.unchallenged_hides !== null) {
      message.unchallengedHides = BigInt(object.unchallenged_hides);
    }
    if (object.epoch_hides !== undefined && object.epoch_hides !== null) {
      message.epochHides = BigInt(object.epoch_hides);
    }
    if (object.epoch_appeals_resolved !== undefined && object.epoch_appeals_resolved !== null) {
      message.epochAppealsResolved = BigInt(object.epoch_appeals_resolved);
    }
    if (object.overturn_cooldown_until !== undefined && object.overturn_cooldown_until !== null) {
      message.overturnCooldownUntil = BigInt(object.overturn_cooldown_until);
    }
    if (object.consecutive_overturns !== undefined && object.consecutive_overturns !== null) {
      message.consecutiveOverturns = BigInt(object.consecutive_overturns);
    }
    if (object.pending_hide_count !== undefined && object.pending_hide_count !== null) {
      message.pendingHideCount = BigInt(object.pending_hide_count);
    }
    if (object.consecutive_upheld !== undefined && object.consecutive_upheld !== null) {
      message.consecutiveUpheld = BigInt(object.consecutive_upheld);
    }
    if (object.epoch_appeals_filed !== undefined && object.epoch_appeals_filed !== null) {
      message.epochAppealsFiled = BigInt(object.epoch_appeals_filed);
    }
    if (object.total_locks !== undefined && object.total_locks !== null) {
      message.totalLocks = BigInt(object.total_locks);
    }
    if (object.upheld_locks !== undefined && object.upheld_locks !== null) {
      message.upheldLocks = BigInt(object.upheld_locks);
    }
    if (object.overturned_locks !== undefined && object.overturned_locks !== null) {
      message.overturnedLocks = BigInt(object.overturned_locks);
    }
    if (object.epoch_locks !== undefined && object.epoch_locks !== null) {
      message.epochLocks = BigInt(object.epoch_locks);
    }
    if (object.total_moves !== undefined && object.total_moves !== null) {
      message.totalMoves = BigInt(object.total_moves);
    }
    if (object.upheld_moves !== undefined && object.upheld_moves !== null) {
      message.upheldMoves = BigInt(object.upheld_moves);
    }
    if (object.overturned_moves !== undefined && object.overturned_moves !== null) {
      message.overturnedMoves = BigInt(object.overturned_moves);
    }
    if (object.epoch_moves !== undefined && object.epoch_moves !== null) {
      message.epochMoves = BigInt(object.epoch_moves);
    }
    if (object.total_pins !== undefined && object.total_pins !== null) {
      message.totalPins = BigInt(object.total_pins);
    }
    if (object.upheld_pins !== undefined && object.upheld_pins !== null) {
      message.upheldPins = BigInt(object.upheld_pins);
    }
    if (object.overturned_pins !== undefined && object.overturned_pins !== null) {
      message.overturnedPins = BigInt(object.overturned_pins);
    }
    if (object.epoch_pins !== undefined && object.epoch_pins !== null) {
      message.epochPins = BigInt(object.epoch_pins);
    }
    if (object.total_proposals !== undefined && object.total_proposals !== null) {
      message.totalProposals = BigInt(object.total_proposals);
    }
    if (object.confirmed_proposals !== undefined && object.confirmed_proposals !== null) {
      message.confirmedProposals = BigInt(object.confirmed_proposals);
    }
    if (object.rejected_proposals !== undefined && object.rejected_proposals !== null) {
      message.rejectedProposals = BigInt(object.rejected_proposals);
    }
    if (object.epoch_curations !== undefined && object.epoch_curations !== null) {
      message.epochCurations = BigInt(object.epoch_curations);
    }
    message.accuracyWindow = object.accuracy_window?.map(e => AccuracyEpochBucket.fromAmino(e)) || [];
    if (object.total_collect_hides !== undefined && object.total_collect_hides !== null) {
      message.totalCollectHides = BigInt(object.total_collect_hides);
    }
    if (object.upheld_collect_hides !== undefined && object.upheld_collect_hides !== null) {
      message.upheldCollectHides = BigInt(object.upheld_collect_hides);
    }
    if (object.overturned_collect_hides !== undefined && object.overturned_collect_hides !== null) {
      message.overturnedCollectHides = BigInt(object.overturned_collect_hides);
    }
    if (object.epoch_collect_hides !== undefined && object.epoch_collect_hides !== null) {
      message.epochCollectHides = BigInt(object.epoch_collect_hides);
    }
    return message;
  },
  toAmino(message: SentinelActivity): SentinelActivityAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.total_hides = message.totalHides !== BigInt(0) ? message.totalHides?.toString() : undefined;
    obj.upheld_hides = message.upheldHides !== BigInt(0) ? message.upheldHides?.toString() : undefined;
    obj.overturned_hides = message.overturnedHides !== BigInt(0) ? message.overturnedHides?.toString() : undefined;
    obj.unchallenged_hides = message.unchallengedHides !== BigInt(0) ? message.unchallengedHides?.toString() : undefined;
    obj.epoch_hides = message.epochHides !== BigInt(0) ? message.epochHides?.toString() : undefined;
    obj.epoch_appeals_resolved = message.epochAppealsResolved !== BigInt(0) ? message.epochAppealsResolved?.toString() : undefined;
    obj.overturn_cooldown_until = message.overturnCooldownUntil !== BigInt(0) ? message.overturnCooldownUntil?.toString() : undefined;
    obj.consecutive_overturns = message.consecutiveOverturns !== BigInt(0) ? message.consecutiveOverturns?.toString() : undefined;
    obj.pending_hide_count = message.pendingHideCount !== BigInt(0) ? message.pendingHideCount?.toString() : undefined;
    obj.consecutive_upheld = message.consecutiveUpheld !== BigInt(0) ? message.consecutiveUpheld?.toString() : undefined;
    obj.epoch_appeals_filed = message.epochAppealsFiled !== BigInt(0) ? message.epochAppealsFiled?.toString() : undefined;
    obj.total_locks = message.totalLocks !== BigInt(0) ? message.totalLocks?.toString() : undefined;
    obj.upheld_locks = message.upheldLocks !== BigInt(0) ? message.upheldLocks?.toString() : undefined;
    obj.overturned_locks = message.overturnedLocks !== BigInt(0) ? message.overturnedLocks?.toString() : undefined;
    obj.epoch_locks = message.epochLocks !== BigInt(0) ? message.epochLocks?.toString() : undefined;
    obj.total_moves = message.totalMoves !== BigInt(0) ? message.totalMoves?.toString() : undefined;
    obj.upheld_moves = message.upheldMoves !== BigInt(0) ? message.upheldMoves?.toString() : undefined;
    obj.overturned_moves = message.overturnedMoves !== BigInt(0) ? message.overturnedMoves?.toString() : undefined;
    obj.epoch_moves = message.epochMoves !== BigInt(0) ? message.epochMoves?.toString() : undefined;
    obj.total_pins = message.totalPins !== BigInt(0) ? message.totalPins?.toString() : undefined;
    obj.upheld_pins = message.upheldPins !== BigInt(0) ? message.upheldPins?.toString() : undefined;
    obj.overturned_pins = message.overturnedPins !== BigInt(0) ? message.overturnedPins?.toString() : undefined;
    obj.epoch_pins = message.epochPins !== BigInt(0) ? message.epochPins?.toString() : undefined;
    obj.total_proposals = message.totalProposals !== BigInt(0) ? message.totalProposals?.toString() : undefined;
    obj.confirmed_proposals = message.confirmedProposals !== BigInt(0) ? message.confirmedProposals?.toString() : undefined;
    obj.rejected_proposals = message.rejectedProposals !== BigInt(0) ? message.rejectedProposals?.toString() : undefined;
    obj.epoch_curations = message.epochCurations !== BigInt(0) ? message.epochCurations?.toString() : undefined;
    if (message.accuracyWindow) {
      obj.accuracy_window = message.accuracyWindow.map(e => e ? AccuracyEpochBucket.toAmino(e) : undefined);
    } else {
      obj.accuracy_window = message.accuracyWindow;
    }
    obj.total_collect_hides = message.totalCollectHides !== BigInt(0) ? message.totalCollectHides?.toString() : undefined;
    obj.upheld_collect_hides = message.upheldCollectHides !== BigInt(0) ? message.upheldCollectHides?.toString() : undefined;
    obj.overturned_collect_hides = message.overturnedCollectHides !== BigInt(0) ? message.overturnedCollectHides?.toString() : undefined;
    obj.epoch_collect_hides = message.epochCollectHides !== BigInt(0) ? message.epochCollectHides?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SentinelActivityAminoMsg): SentinelActivity {
    return SentinelActivity.fromAmino(object.value);
  },
  fromProtoMsg(message: SentinelActivityProtoMsg): SentinelActivity {
    return SentinelActivity.decode(message.value);
  },
  toProto(message: SentinelActivity): Uint8Array {
    return SentinelActivity.encode(message).finish();
  },
  toProtoMsg(message: SentinelActivity): SentinelActivityProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.SentinelActivity",
      value: SentinelActivity.encode(message).finish()
    };
  }
};