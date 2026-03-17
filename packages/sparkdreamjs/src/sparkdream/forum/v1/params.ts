//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Params
 */
export interface Params {
  /**
   * forum_paused stops all new posts when true
   */
  forumPaused: boolean;
  /**
   * moderation_paused stops all moderation actions when true
   */
  moderationPaused: boolean;
  /**
   * bounties_enabled allows bounty creation when true
   */
  bountiesEnabled: boolean;
  /**
   * reactions_enabled allows upvotes/downvotes when true
   */
  reactionsEnabled: boolean;
  /**
   * appeals_paused stops all appeals when true
   */
  appealsPaused: boolean;
  /**
   * editing_enabled allows post editing when true
   */
  editingEnabled: boolean;
  /**
   * spam_tax charged to non-members for posting
   */
  spamTax: Coin;
  /**
   * reaction_spam_tax charged to non-members for reactions
   */
  reactionSpamTax: Coin;
  /**
   * flag_spam_tax charged to non-members for flagging
   */
  flagSpamTax: Coin;
  /**
   * downvote_deposit burned when downvoting
   */
  downvoteDeposit: Coin;
  /**
   * appeal_fee charged for appeals
   */
  appealFee: Coin;
  /**
   * lock_appeal_fee charged for thread lock appeals
   */
  lockAppealFee: Coin;
  /**
   * move_appeal_fee charged for thread move appeals
   */
  moveAppealFee: Coin;
  /**
   * edit_fee charged for edits past grace period
   */
  editFee: Coin;
  /**
   * bounty_cancellation_fee_percent percentage of bounty taken on cancellation (0-100)
   */
  bountyCancellationFeePercent: bigint;
  /**
   * max_content_size in bytes
   */
  maxContentSize: bigint;
  /**
   * daily_post_limit per user
   */
  dailyPostLimit: bigint;
  /**
   * max_reply_depth for thread nesting
   */
  maxReplyDepth: number;
  /**
   * edit_grace_period in seconds (no fee during this time)
   */
  editGracePeriod: bigint;
  /**
   * edit_max_window in seconds (cannot edit after this time)
   */
  editMaxWindow: bigint;
  /**
   * max_follows_per_day per user
   */
  maxFollowsPerDay: bigint;
  /**
   * archive_threshold in seconds (thread must be inactive this long before archiving)
   */
  archiveThreshold: bigint;
  /**
   * unarchive_cooldown in seconds (must wait this long after archive before unarchiving)
   */
  unarchiveCooldown: bigint;
  /**
   * archive_cooldown in seconds (must wait this long after unarchive before re-archiving)
   */
  archiveCooldown: bigint;
  /**
   * hide_appeal_cooldown in seconds (must wait this long after hide before appeal)
   */
  hideAppealCooldown: bigint;
  /**
   * lock_appeal_cooldown in seconds (must wait this long after lock before appeal)
   */
  lockAppealCooldown: bigint;
  /**
   * move_appeal_cooldown in seconds (must wait this long after move before appeal)
   */
  moveAppealCooldown: bigint;
  /**
   * cost_per_byte charged for on-chain content storage (applies to all posts, burned)
   */
  costPerByte: Coin;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  costPerByteExempt: boolean;
  /**
   * ephemeral_ttl in seconds (TTL for non-member posts, default 86400 = 24h)
   */
  ephemeralTtl: bigint;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  convictionRenewalThreshold: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  convictionRenewalPeriod: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.forum.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Params
 */
export interface ParamsAmino {
  /**
   * forum_paused stops all new posts when true
   */
  forum_paused?: boolean;
  /**
   * moderation_paused stops all moderation actions when true
   */
  moderation_paused?: boolean;
  /**
   * bounties_enabled allows bounty creation when true
   */
  bounties_enabled?: boolean;
  /**
   * reactions_enabled allows upvotes/downvotes when true
   */
  reactions_enabled?: boolean;
  /**
   * appeals_paused stops all appeals when true
   */
  appeals_paused?: boolean;
  /**
   * editing_enabled allows post editing when true
   */
  editing_enabled?: boolean;
  /**
   * spam_tax charged to non-members for posting
   */
  spam_tax?: CoinAmino;
  /**
   * reaction_spam_tax charged to non-members for reactions
   */
  reaction_spam_tax?: CoinAmino;
  /**
   * flag_spam_tax charged to non-members for flagging
   */
  flag_spam_tax?: CoinAmino;
  /**
   * downvote_deposit burned when downvoting
   */
  downvote_deposit?: CoinAmino;
  /**
   * appeal_fee charged for appeals
   */
  appeal_fee?: CoinAmino;
  /**
   * lock_appeal_fee charged for thread lock appeals
   */
  lock_appeal_fee?: CoinAmino;
  /**
   * move_appeal_fee charged for thread move appeals
   */
  move_appeal_fee?: CoinAmino;
  /**
   * edit_fee charged for edits past grace period
   */
  edit_fee?: CoinAmino;
  /**
   * bounty_cancellation_fee_percent percentage of bounty taken on cancellation (0-100)
   */
  bounty_cancellation_fee_percent?: string;
  /**
   * max_content_size in bytes
   */
  max_content_size?: string;
  /**
   * daily_post_limit per user
   */
  daily_post_limit?: string;
  /**
   * max_reply_depth for thread nesting
   */
  max_reply_depth?: number;
  /**
   * edit_grace_period in seconds (no fee during this time)
   */
  edit_grace_period?: string;
  /**
   * edit_max_window in seconds (cannot edit after this time)
   */
  edit_max_window?: string;
  /**
   * max_follows_per_day per user
   */
  max_follows_per_day?: string;
  /**
   * archive_threshold in seconds (thread must be inactive this long before archiving)
   */
  archive_threshold?: string;
  /**
   * unarchive_cooldown in seconds (must wait this long after archive before unarchiving)
   */
  unarchive_cooldown?: string;
  /**
   * archive_cooldown in seconds (must wait this long after unarchive before re-archiving)
   */
  archive_cooldown?: string;
  /**
   * hide_appeal_cooldown in seconds (must wait this long after hide before appeal)
   */
  hide_appeal_cooldown?: string;
  /**
   * lock_appeal_cooldown in seconds (must wait this long after lock before appeal)
   */
  lock_appeal_cooldown?: string;
  /**
   * move_appeal_cooldown in seconds (must wait this long after move before appeal)
   */
  move_appeal_cooldown?: string;
  /**
   * cost_per_byte charged for on-chain content storage (applies to all posts, burned)
   */
  cost_per_byte?: CoinAmino;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  cost_per_byte_exempt?: boolean;
  /**
   * ephemeral_ttl in seconds (TTL for non-member posts, default 86400 = 24h)
   */
  ephemeral_ttl?: string;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  conviction_renewal_threshold?: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  conviction_renewal_period?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/forum/Params";
  value: ParamsAmino;
}
/**
 * ForumOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (forum_paused, moderation_paused, appeals_paused) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name ForumOperationalParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumOperationalParams
 */
export interface ForumOperationalParams {
  /**
   * Feature toggles
   */
  bountiesEnabled: boolean;
  reactionsEnabled: boolean;
  editingEnabled: boolean;
  /**
   * Fees
   */
  spamTax: Coin;
  reactionSpamTax: Coin;
  flagSpamTax: Coin;
  downvoteDeposit: Coin;
  appealFee: Coin;
  lockAppealFee: Coin;
  moveAppealFee: Coin;
  editFee: Coin;
  costPerByte: Coin;
  costPerByteExempt: boolean;
  /**
   * Limits
   */
  maxContentSize: bigint;
  dailyPostLimit: bigint;
  maxReplyDepth: number;
  maxFollowsPerDay: bigint;
  bountyCancellationFeePercent: bigint;
  /**
   * Time windows
   */
  editGracePeriod: bigint;
  editMaxWindow: bigint;
  archiveThreshold: bigint;
  unarchiveCooldown: bigint;
  archiveCooldown: bigint;
  hideAppealCooldown: bigint;
  lockAppealCooldown: bigint;
  moveAppealCooldown: bigint;
  ephemeralTtl: bigint;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  convictionRenewalThreshold: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  convictionRenewalPeriod: bigint;
}
export interface ForumOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ForumOperationalParams";
  value: Uint8Array;
}
/**
 * ForumOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (forum_paused, moderation_paused, appeals_paused) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name ForumOperationalParamsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumOperationalParams
 */
export interface ForumOperationalParamsAmino {
  /**
   * Feature toggles
   */
  bounties_enabled?: boolean;
  reactions_enabled?: boolean;
  editing_enabled?: boolean;
  /**
   * Fees
   */
  spam_tax?: CoinAmino;
  reaction_spam_tax?: CoinAmino;
  flag_spam_tax?: CoinAmino;
  downvote_deposit?: CoinAmino;
  appeal_fee?: CoinAmino;
  lock_appeal_fee?: CoinAmino;
  move_appeal_fee?: CoinAmino;
  edit_fee?: CoinAmino;
  cost_per_byte?: CoinAmino;
  cost_per_byte_exempt?: boolean;
  /**
   * Limits
   */
  max_content_size?: string;
  daily_post_limit?: string;
  max_reply_depth?: number;
  max_follows_per_day?: string;
  bounty_cancellation_fee_percent?: string;
  /**
   * Time windows
   */
  edit_grace_period?: string;
  edit_max_window?: string;
  archive_threshold?: string;
  unarchive_cooldown?: string;
  archive_cooldown?: string;
  hide_appeal_cooldown?: string;
  lock_appeal_cooldown?: string;
  move_appeal_cooldown?: string;
  ephemeral_ttl?: string;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  conviction_renewal_threshold?: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  conviction_renewal_period?: string;
}
export interface ForumOperationalParamsAminoMsg {
  type: "sparkdream/x/forum/ForumOperationalParams";
  value: ForumOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    forumPaused: false,
    moderationPaused: false,
    bountiesEnabled: false,
    reactionsEnabled: false,
    appealsPaused: false,
    editingEnabled: false,
    spamTax: Coin.fromPartial({}),
    reactionSpamTax: Coin.fromPartial({}),
    flagSpamTax: Coin.fromPartial({}),
    downvoteDeposit: Coin.fromPartial({}),
    appealFee: Coin.fromPartial({}),
    lockAppealFee: Coin.fromPartial({}),
    moveAppealFee: Coin.fromPartial({}),
    editFee: Coin.fromPartial({}),
    bountyCancellationFeePercent: BigInt(0),
    maxContentSize: BigInt(0),
    dailyPostLimit: BigInt(0),
    maxReplyDepth: 0,
    editGracePeriod: BigInt(0),
    editMaxWindow: BigInt(0),
    maxFollowsPerDay: BigInt(0),
    archiveThreshold: BigInt(0),
    unarchiveCooldown: BigInt(0),
    archiveCooldown: BigInt(0),
    hideAppealCooldown: BigInt(0),
    lockAppealCooldown: BigInt(0),
    moveAppealCooldown: BigInt(0),
    costPerByte: Coin.fromPartial({}),
    costPerByteExempt: false,
    ephemeralTtl: BigInt(0),
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.forum.v1.Params",
  aminoType: "sparkdream/x/forum/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forumPaused === true) {
      writer.uint32(8).bool(message.forumPaused);
    }
    if (message.moderationPaused === true) {
      writer.uint32(16).bool(message.moderationPaused);
    }
    if (message.bountiesEnabled === true) {
      writer.uint32(24).bool(message.bountiesEnabled);
    }
    if (message.reactionsEnabled === true) {
      writer.uint32(32).bool(message.reactionsEnabled);
    }
    if (message.appealsPaused === true) {
      writer.uint32(40).bool(message.appealsPaused);
    }
    if (message.editingEnabled === true) {
      writer.uint32(48).bool(message.editingEnabled);
    }
    if (message.spamTax !== undefined) {
      Coin.encode(message.spamTax, writer.uint32(58).fork()).ldelim();
    }
    if (message.reactionSpamTax !== undefined) {
      Coin.encode(message.reactionSpamTax, writer.uint32(66).fork()).ldelim();
    }
    if (message.flagSpamTax !== undefined) {
      Coin.encode(message.flagSpamTax, writer.uint32(74).fork()).ldelim();
    }
    if (message.downvoteDeposit !== undefined) {
      Coin.encode(message.downvoteDeposit, writer.uint32(82).fork()).ldelim();
    }
    if (message.appealFee !== undefined) {
      Coin.encode(message.appealFee, writer.uint32(90).fork()).ldelim();
    }
    if (message.lockAppealFee !== undefined) {
      Coin.encode(message.lockAppealFee, writer.uint32(98).fork()).ldelim();
    }
    if (message.moveAppealFee !== undefined) {
      Coin.encode(message.moveAppealFee, writer.uint32(106).fork()).ldelim();
    }
    if (message.editFee !== undefined) {
      Coin.encode(message.editFee, writer.uint32(114).fork()).ldelim();
    }
    if (message.bountyCancellationFeePercent !== BigInt(0)) {
      writer.uint32(120).uint64(message.bountyCancellationFeePercent);
    }
    if (message.maxContentSize !== BigInt(0)) {
      writer.uint32(128).uint64(message.maxContentSize);
    }
    if (message.dailyPostLimit !== BigInt(0)) {
      writer.uint32(136).uint64(message.dailyPostLimit);
    }
    if (message.maxReplyDepth !== 0) {
      writer.uint32(144).uint32(message.maxReplyDepth);
    }
    if (message.editGracePeriod !== BigInt(0)) {
      writer.uint32(152).int64(message.editGracePeriod);
    }
    if (message.editMaxWindow !== BigInt(0)) {
      writer.uint32(160).int64(message.editMaxWindow);
    }
    if (message.maxFollowsPerDay !== BigInt(0)) {
      writer.uint32(168).uint64(message.maxFollowsPerDay);
    }
    if (message.archiveThreshold !== BigInt(0)) {
      writer.uint32(176).int64(message.archiveThreshold);
    }
    if (message.unarchiveCooldown !== BigInt(0)) {
      writer.uint32(184).int64(message.unarchiveCooldown);
    }
    if (message.archiveCooldown !== BigInt(0)) {
      writer.uint32(192).int64(message.archiveCooldown);
    }
    if (message.hideAppealCooldown !== BigInt(0)) {
      writer.uint32(200).int64(message.hideAppealCooldown);
    }
    if (message.lockAppealCooldown !== BigInt(0)) {
      writer.uint32(208).int64(message.lockAppealCooldown);
    }
    if (message.moveAppealCooldown !== BigInt(0)) {
      writer.uint32(216).int64(message.moveAppealCooldown);
    }
    if (message.costPerByte !== undefined) {
      Coin.encode(message.costPerByte, writer.uint32(226).fork()).ldelim();
    }
    if (message.costPerByteExempt === true) {
      writer.uint32(232).bool(message.costPerByteExempt);
    }
    if (message.ephemeralTtl !== BigInt(0)) {
      writer.uint32(240).int64(message.ephemeralTtl);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(298).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(304).int64(message.convictionRenewalPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forumPaused = reader.bool();
          break;
        case 2:
          message.moderationPaused = reader.bool();
          break;
        case 3:
          message.bountiesEnabled = reader.bool();
          break;
        case 4:
          message.reactionsEnabled = reader.bool();
          break;
        case 5:
          message.appealsPaused = reader.bool();
          break;
        case 6:
          message.editingEnabled = reader.bool();
          break;
        case 7:
          message.spamTax = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.reactionSpamTax = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.flagSpamTax = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.downvoteDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.appealFee = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.lockAppealFee = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.moveAppealFee = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.editFee = Coin.decode(reader, reader.uint32());
          break;
        case 15:
          message.bountyCancellationFeePercent = reader.uint64();
          break;
        case 16:
          message.maxContentSize = reader.uint64();
          break;
        case 17:
          message.dailyPostLimit = reader.uint64();
          break;
        case 18:
          message.maxReplyDepth = reader.uint32();
          break;
        case 19:
          message.editGracePeriod = reader.int64();
          break;
        case 20:
          message.editMaxWindow = reader.int64();
          break;
        case 21:
          message.maxFollowsPerDay = reader.uint64();
          break;
        case 22:
          message.archiveThreshold = reader.int64();
          break;
        case 23:
          message.unarchiveCooldown = reader.int64();
          break;
        case 24:
          message.archiveCooldown = reader.int64();
          break;
        case 25:
          message.hideAppealCooldown = reader.int64();
          break;
        case 26:
          message.lockAppealCooldown = reader.int64();
          break;
        case 27:
          message.moveAppealCooldown = reader.int64();
          break;
        case 28:
          message.costPerByte = Coin.decode(reader, reader.uint32());
          break;
        case 29:
          message.costPerByteExempt = reader.bool();
          break;
        case 30:
          message.ephemeralTtl = reader.int64();
          break;
        case 37:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 38:
          message.convictionRenewalPeriod = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.forumPaused = object.forumPaused ?? false;
    message.moderationPaused = object.moderationPaused ?? false;
    message.bountiesEnabled = object.bountiesEnabled ?? false;
    message.reactionsEnabled = object.reactionsEnabled ?? false;
    message.appealsPaused = object.appealsPaused ?? false;
    message.editingEnabled = object.editingEnabled ?? false;
    message.spamTax = object.spamTax !== undefined && object.spamTax !== null ? Coin.fromPartial(object.spamTax) : undefined;
    message.reactionSpamTax = object.reactionSpamTax !== undefined && object.reactionSpamTax !== null ? Coin.fromPartial(object.reactionSpamTax) : undefined;
    message.flagSpamTax = object.flagSpamTax !== undefined && object.flagSpamTax !== null ? Coin.fromPartial(object.flagSpamTax) : undefined;
    message.downvoteDeposit = object.downvoteDeposit !== undefined && object.downvoteDeposit !== null ? Coin.fromPartial(object.downvoteDeposit) : undefined;
    message.appealFee = object.appealFee !== undefined && object.appealFee !== null ? Coin.fromPartial(object.appealFee) : undefined;
    message.lockAppealFee = object.lockAppealFee !== undefined && object.lockAppealFee !== null ? Coin.fromPartial(object.lockAppealFee) : undefined;
    message.moveAppealFee = object.moveAppealFee !== undefined && object.moveAppealFee !== null ? Coin.fromPartial(object.moveAppealFee) : undefined;
    message.editFee = object.editFee !== undefined && object.editFee !== null ? Coin.fromPartial(object.editFee) : undefined;
    message.bountyCancellationFeePercent = object.bountyCancellationFeePercent !== undefined && object.bountyCancellationFeePercent !== null ? BigInt(object.bountyCancellationFeePercent.toString()) : BigInt(0);
    message.maxContentSize = object.maxContentSize !== undefined && object.maxContentSize !== null ? BigInt(object.maxContentSize.toString()) : BigInt(0);
    message.dailyPostLimit = object.dailyPostLimit !== undefined && object.dailyPostLimit !== null ? BigInt(object.dailyPostLimit.toString()) : BigInt(0);
    message.maxReplyDepth = object.maxReplyDepth ?? 0;
    message.editGracePeriod = object.editGracePeriod !== undefined && object.editGracePeriod !== null ? BigInt(object.editGracePeriod.toString()) : BigInt(0);
    message.editMaxWindow = object.editMaxWindow !== undefined && object.editMaxWindow !== null ? BigInt(object.editMaxWindow.toString()) : BigInt(0);
    message.maxFollowsPerDay = object.maxFollowsPerDay !== undefined && object.maxFollowsPerDay !== null ? BigInt(object.maxFollowsPerDay.toString()) : BigInt(0);
    message.archiveThreshold = object.archiveThreshold !== undefined && object.archiveThreshold !== null ? BigInt(object.archiveThreshold.toString()) : BigInt(0);
    message.unarchiveCooldown = object.unarchiveCooldown !== undefined && object.unarchiveCooldown !== null ? BigInt(object.unarchiveCooldown.toString()) : BigInt(0);
    message.archiveCooldown = object.archiveCooldown !== undefined && object.archiveCooldown !== null ? BigInt(object.archiveCooldown.toString()) : BigInt(0);
    message.hideAppealCooldown = object.hideAppealCooldown !== undefined && object.hideAppealCooldown !== null ? BigInt(object.hideAppealCooldown.toString()) : BigInt(0);
    message.lockAppealCooldown = object.lockAppealCooldown !== undefined && object.lockAppealCooldown !== null ? BigInt(object.lockAppealCooldown.toString()) : BigInt(0);
    message.moveAppealCooldown = object.moveAppealCooldown !== undefined && object.moveAppealCooldown !== null ? BigInt(object.moveAppealCooldown.toString()) : BigInt(0);
    message.costPerByte = object.costPerByte !== undefined && object.costPerByte !== null ? Coin.fromPartial(object.costPerByte) : undefined;
    message.costPerByteExempt = object.costPerByteExempt ?? false;
    message.ephemeralTtl = object.ephemeralTtl !== undefined && object.ephemeralTtl !== null ? BigInt(object.ephemeralTtl.toString()) : BigInt(0);
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.forum_paused !== undefined && object.forum_paused !== null) {
      message.forumPaused = object.forum_paused;
    }
    if (object.moderation_paused !== undefined && object.moderation_paused !== null) {
      message.moderationPaused = object.moderation_paused;
    }
    if (object.bounties_enabled !== undefined && object.bounties_enabled !== null) {
      message.bountiesEnabled = object.bounties_enabled;
    }
    if (object.reactions_enabled !== undefined && object.reactions_enabled !== null) {
      message.reactionsEnabled = object.reactions_enabled;
    }
    if (object.appeals_paused !== undefined && object.appeals_paused !== null) {
      message.appealsPaused = object.appeals_paused;
    }
    if (object.editing_enabled !== undefined && object.editing_enabled !== null) {
      message.editingEnabled = object.editing_enabled;
    }
    if (object.spam_tax !== undefined && object.spam_tax !== null) {
      message.spamTax = Coin.fromAmino(object.spam_tax);
    }
    if (object.reaction_spam_tax !== undefined && object.reaction_spam_tax !== null) {
      message.reactionSpamTax = Coin.fromAmino(object.reaction_spam_tax);
    }
    if (object.flag_spam_tax !== undefined && object.flag_spam_tax !== null) {
      message.flagSpamTax = Coin.fromAmino(object.flag_spam_tax);
    }
    if (object.downvote_deposit !== undefined && object.downvote_deposit !== null) {
      message.downvoteDeposit = Coin.fromAmino(object.downvote_deposit);
    }
    if (object.appeal_fee !== undefined && object.appeal_fee !== null) {
      message.appealFee = Coin.fromAmino(object.appeal_fee);
    }
    if (object.lock_appeal_fee !== undefined && object.lock_appeal_fee !== null) {
      message.lockAppealFee = Coin.fromAmino(object.lock_appeal_fee);
    }
    if (object.move_appeal_fee !== undefined && object.move_appeal_fee !== null) {
      message.moveAppealFee = Coin.fromAmino(object.move_appeal_fee);
    }
    if (object.edit_fee !== undefined && object.edit_fee !== null) {
      message.editFee = Coin.fromAmino(object.edit_fee);
    }
    if (object.bounty_cancellation_fee_percent !== undefined && object.bounty_cancellation_fee_percent !== null) {
      message.bountyCancellationFeePercent = BigInt(object.bounty_cancellation_fee_percent);
    }
    if (object.max_content_size !== undefined && object.max_content_size !== null) {
      message.maxContentSize = BigInt(object.max_content_size);
    }
    if (object.daily_post_limit !== undefined && object.daily_post_limit !== null) {
      message.dailyPostLimit = BigInt(object.daily_post_limit);
    }
    if (object.max_reply_depth !== undefined && object.max_reply_depth !== null) {
      message.maxReplyDepth = object.max_reply_depth;
    }
    if (object.edit_grace_period !== undefined && object.edit_grace_period !== null) {
      message.editGracePeriod = BigInt(object.edit_grace_period);
    }
    if (object.edit_max_window !== undefined && object.edit_max_window !== null) {
      message.editMaxWindow = BigInt(object.edit_max_window);
    }
    if (object.max_follows_per_day !== undefined && object.max_follows_per_day !== null) {
      message.maxFollowsPerDay = BigInt(object.max_follows_per_day);
    }
    if (object.archive_threshold !== undefined && object.archive_threshold !== null) {
      message.archiveThreshold = BigInt(object.archive_threshold);
    }
    if (object.unarchive_cooldown !== undefined && object.unarchive_cooldown !== null) {
      message.unarchiveCooldown = BigInt(object.unarchive_cooldown);
    }
    if (object.archive_cooldown !== undefined && object.archive_cooldown !== null) {
      message.archiveCooldown = BigInt(object.archive_cooldown);
    }
    if (object.hide_appeal_cooldown !== undefined && object.hide_appeal_cooldown !== null) {
      message.hideAppealCooldown = BigInt(object.hide_appeal_cooldown);
    }
    if (object.lock_appeal_cooldown !== undefined && object.lock_appeal_cooldown !== null) {
      message.lockAppealCooldown = BigInt(object.lock_appeal_cooldown);
    }
    if (object.move_appeal_cooldown !== undefined && object.move_appeal_cooldown !== null) {
      message.moveAppealCooldown = BigInt(object.move_appeal_cooldown);
    }
    if (object.cost_per_byte !== undefined && object.cost_per_byte !== null) {
      message.costPerByte = Coin.fromAmino(object.cost_per_byte);
    }
    if (object.cost_per_byte_exempt !== undefined && object.cost_per_byte_exempt !== null) {
      message.costPerByteExempt = object.cost_per_byte_exempt;
    }
    if (object.ephemeral_ttl !== undefined && object.ephemeral_ttl !== null) {
      message.ephemeralTtl = BigInt(object.ephemeral_ttl);
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.forum_paused = message.forumPaused === false ? undefined : message.forumPaused;
    obj.moderation_paused = message.moderationPaused === false ? undefined : message.moderationPaused;
    obj.bounties_enabled = message.bountiesEnabled === false ? undefined : message.bountiesEnabled;
    obj.reactions_enabled = message.reactionsEnabled === false ? undefined : message.reactionsEnabled;
    obj.appeals_paused = message.appealsPaused === false ? undefined : message.appealsPaused;
    obj.editing_enabled = message.editingEnabled === false ? undefined : message.editingEnabled;
    obj.spam_tax = message.spamTax ? Coin.toAmino(message.spamTax) : undefined;
    obj.reaction_spam_tax = message.reactionSpamTax ? Coin.toAmino(message.reactionSpamTax) : undefined;
    obj.flag_spam_tax = message.flagSpamTax ? Coin.toAmino(message.flagSpamTax) : undefined;
    obj.downvote_deposit = message.downvoteDeposit ? Coin.toAmino(message.downvoteDeposit) : undefined;
    obj.appeal_fee = message.appealFee ? Coin.toAmino(message.appealFee) : undefined;
    obj.lock_appeal_fee = message.lockAppealFee ? Coin.toAmino(message.lockAppealFee) : undefined;
    obj.move_appeal_fee = message.moveAppealFee ? Coin.toAmino(message.moveAppealFee) : undefined;
    obj.edit_fee = message.editFee ? Coin.toAmino(message.editFee) : undefined;
    obj.bounty_cancellation_fee_percent = message.bountyCancellationFeePercent !== BigInt(0) ? message.bountyCancellationFeePercent?.toString() : undefined;
    obj.max_content_size = message.maxContentSize !== BigInt(0) ? message.maxContentSize?.toString() : undefined;
    obj.daily_post_limit = message.dailyPostLimit !== BigInt(0) ? message.dailyPostLimit?.toString() : undefined;
    obj.max_reply_depth = message.maxReplyDepth === 0 ? undefined : message.maxReplyDepth;
    obj.edit_grace_period = message.editGracePeriod !== BigInt(0) ? message.editGracePeriod?.toString() : undefined;
    obj.edit_max_window = message.editMaxWindow !== BigInt(0) ? message.editMaxWindow?.toString() : undefined;
    obj.max_follows_per_day = message.maxFollowsPerDay !== BigInt(0) ? message.maxFollowsPerDay?.toString() : undefined;
    obj.archive_threshold = message.archiveThreshold !== BigInt(0) ? message.archiveThreshold?.toString() : undefined;
    obj.unarchive_cooldown = message.unarchiveCooldown !== BigInt(0) ? message.unarchiveCooldown?.toString() : undefined;
    obj.archive_cooldown = message.archiveCooldown !== BigInt(0) ? message.archiveCooldown?.toString() : undefined;
    obj.hide_appeal_cooldown = message.hideAppealCooldown !== BigInt(0) ? message.hideAppealCooldown?.toString() : undefined;
    obj.lock_appeal_cooldown = message.lockAppealCooldown !== BigInt(0) ? message.lockAppealCooldown?.toString() : undefined;
    obj.move_appeal_cooldown = message.moveAppealCooldown !== BigInt(0) ? message.moveAppealCooldown?.toString() : undefined;
    obj.cost_per_byte = message.costPerByte ? Coin.toAmino(message.costPerByte) : undefined;
    obj.cost_per_byte_exempt = message.costPerByteExempt === false ? undefined : message.costPerByteExempt;
    obj.ephemeral_ttl = message.ephemeralTtl !== BigInt(0) ? message.ephemeralTtl?.toString() : undefined;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/forum/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseForumOperationalParams(): ForumOperationalParams {
  return {
    bountiesEnabled: false,
    reactionsEnabled: false,
    editingEnabled: false,
    spamTax: Coin.fromPartial({}),
    reactionSpamTax: Coin.fromPartial({}),
    flagSpamTax: Coin.fromPartial({}),
    downvoteDeposit: Coin.fromPartial({}),
    appealFee: Coin.fromPartial({}),
    lockAppealFee: Coin.fromPartial({}),
    moveAppealFee: Coin.fromPartial({}),
    editFee: Coin.fromPartial({}),
    costPerByte: Coin.fromPartial({}),
    costPerByteExempt: false,
    maxContentSize: BigInt(0),
    dailyPostLimit: BigInt(0),
    maxReplyDepth: 0,
    maxFollowsPerDay: BigInt(0),
    bountyCancellationFeePercent: BigInt(0),
    editGracePeriod: BigInt(0),
    editMaxWindow: BigInt(0),
    archiveThreshold: BigInt(0),
    unarchiveCooldown: BigInt(0),
    archiveCooldown: BigInt(0),
    hideAppealCooldown: BigInt(0),
    lockAppealCooldown: BigInt(0),
    moveAppealCooldown: BigInt(0),
    ephemeralTtl: BigInt(0),
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0)
  };
}
/**
 * ForumOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (forum_paused, moderation_paused, appeals_paused) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name ForumOperationalParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumOperationalParams
 */
export const ForumOperationalParams = {
  typeUrl: "/sparkdream.forum.v1.ForumOperationalParams",
  aminoType: "sparkdream/x/forum/ForumOperationalParams",
  encode(message: ForumOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountiesEnabled === true) {
      writer.uint32(8).bool(message.bountiesEnabled);
    }
    if (message.reactionsEnabled === true) {
      writer.uint32(16).bool(message.reactionsEnabled);
    }
    if (message.editingEnabled === true) {
      writer.uint32(24).bool(message.editingEnabled);
    }
    if (message.spamTax !== undefined) {
      Coin.encode(message.spamTax, writer.uint32(34).fork()).ldelim();
    }
    if (message.reactionSpamTax !== undefined) {
      Coin.encode(message.reactionSpamTax, writer.uint32(42).fork()).ldelim();
    }
    if (message.flagSpamTax !== undefined) {
      Coin.encode(message.flagSpamTax, writer.uint32(50).fork()).ldelim();
    }
    if (message.downvoteDeposit !== undefined) {
      Coin.encode(message.downvoteDeposit, writer.uint32(58).fork()).ldelim();
    }
    if (message.appealFee !== undefined) {
      Coin.encode(message.appealFee, writer.uint32(66).fork()).ldelim();
    }
    if (message.lockAppealFee !== undefined) {
      Coin.encode(message.lockAppealFee, writer.uint32(74).fork()).ldelim();
    }
    if (message.moveAppealFee !== undefined) {
      Coin.encode(message.moveAppealFee, writer.uint32(82).fork()).ldelim();
    }
    if (message.editFee !== undefined) {
      Coin.encode(message.editFee, writer.uint32(90).fork()).ldelim();
    }
    if (message.costPerByte !== undefined) {
      Coin.encode(message.costPerByte, writer.uint32(98).fork()).ldelim();
    }
    if (message.costPerByteExempt === true) {
      writer.uint32(104).bool(message.costPerByteExempt);
    }
    if (message.maxContentSize !== BigInt(0)) {
      writer.uint32(112).uint64(message.maxContentSize);
    }
    if (message.dailyPostLimit !== BigInt(0)) {
      writer.uint32(120).uint64(message.dailyPostLimit);
    }
    if (message.maxReplyDepth !== 0) {
      writer.uint32(128).uint32(message.maxReplyDepth);
    }
    if (message.maxFollowsPerDay !== BigInt(0)) {
      writer.uint32(136).uint64(message.maxFollowsPerDay);
    }
    if (message.bountyCancellationFeePercent !== BigInt(0)) {
      writer.uint32(144).uint64(message.bountyCancellationFeePercent);
    }
    if (message.editGracePeriod !== BigInt(0)) {
      writer.uint32(152).int64(message.editGracePeriod);
    }
    if (message.editMaxWindow !== BigInt(0)) {
      writer.uint32(160).int64(message.editMaxWindow);
    }
    if (message.archiveThreshold !== BigInt(0)) {
      writer.uint32(168).int64(message.archiveThreshold);
    }
    if (message.unarchiveCooldown !== BigInt(0)) {
      writer.uint32(176).int64(message.unarchiveCooldown);
    }
    if (message.archiveCooldown !== BigInt(0)) {
      writer.uint32(184).int64(message.archiveCooldown);
    }
    if (message.hideAppealCooldown !== BigInt(0)) {
      writer.uint32(192).int64(message.hideAppealCooldown);
    }
    if (message.lockAppealCooldown !== BigInt(0)) {
      writer.uint32(200).int64(message.lockAppealCooldown);
    }
    if (message.moveAppealCooldown !== BigInt(0)) {
      writer.uint32(208).int64(message.moveAppealCooldown);
    }
    if (message.ephemeralTtl !== BigInt(0)) {
      writer.uint32(216).int64(message.ephemeralTtl);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(250).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(256).int64(message.convictionRenewalPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForumOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForumOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountiesEnabled = reader.bool();
          break;
        case 2:
          message.reactionsEnabled = reader.bool();
          break;
        case 3:
          message.editingEnabled = reader.bool();
          break;
        case 4:
          message.spamTax = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.reactionSpamTax = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.flagSpamTax = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.downvoteDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.appealFee = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.lockAppealFee = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.moveAppealFee = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.editFee = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.costPerByte = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.costPerByteExempt = reader.bool();
          break;
        case 14:
          message.maxContentSize = reader.uint64();
          break;
        case 15:
          message.dailyPostLimit = reader.uint64();
          break;
        case 16:
          message.maxReplyDepth = reader.uint32();
          break;
        case 17:
          message.maxFollowsPerDay = reader.uint64();
          break;
        case 18:
          message.bountyCancellationFeePercent = reader.uint64();
          break;
        case 19:
          message.editGracePeriod = reader.int64();
          break;
        case 20:
          message.editMaxWindow = reader.int64();
          break;
        case 21:
          message.archiveThreshold = reader.int64();
          break;
        case 22:
          message.unarchiveCooldown = reader.int64();
          break;
        case 23:
          message.archiveCooldown = reader.int64();
          break;
        case 24:
          message.hideAppealCooldown = reader.int64();
          break;
        case 25:
          message.lockAppealCooldown = reader.int64();
          break;
        case 26:
          message.moveAppealCooldown = reader.int64();
          break;
        case 27:
          message.ephemeralTtl = reader.int64();
          break;
        case 31:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 32:
          message.convictionRenewalPeriod = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForumOperationalParams>): ForumOperationalParams {
    const message = createBaseForumOperationalParams();
    message.bountiesEnabled = object.bountiesEnabled ?? false;
    message.reactionsEnabled = object.reactionsEnabled ?? false;
    message.editingEnabled = object.editingEnabled ?? false;
    message.spamTax = object.spamTax !== undefined && object.spamTax !== null ? Coin.fromPartial(object.spamTax) : undefined;
    message.reactionSpamTax = object.reactionSpamTax !== undefined && object.reactionSpamTax !== null ? Coin.fromPartial(object.reactionSpamTax) : undefined;
    message.flagSpamTax = object.flagSpamTax !== undefined && object.flagSpamTax !== null ? Coin.fromPartial(object.flagSpamTax) : undefined;
    message.downvoteDeposit = object.downvoteDeposit !== undefined && object.downvoteDeposit !== null ? Coin.fromPartial(object.downvoteDeposit) : undefined;
    message.appealFee = object.appealFee !== undefined && object.appealFee !== null ? Coin.fromPartial(object.appealFee) : undefined;
    message.lockAppealFee = object.lockAppealFee !== undefined && object.lockAppealFee !== null ? Coin.fromPartial(object.lockAppealFee) : undefined;
    message.moveAppealFee = object.moveAppealFee !== undefined && object.moveAppealFee !== null ? Coin.fromPartial(object.moveAppealFee) : undefined;
    message.editFee = object.editFee !== undefined && object.editFee !== null ? Coin.fromPartial(object.editFee) : undefined;
    message.costPerByte = object.costPerByte !== undefined && object.costPerByte !== null ? Coin.fromPartial(object.costPerByte) : undefined;
    message.costPerByteExempt = object.costPerByteExempt ?? false;
    message.maxContentSize = object.maxContentSize !== undefined && object.maxContentSize !== null ? BigInt(object.maxContentSize.toString()) : BigInt(0);
    message.dailyPostLimit = object.dailyPostLimit !== undefined && object.dailyPostLimit !== null ? BigInt(object.dailyPostLimit.toString()) : BigInt(0);
    message.maxReplyDepth = object.maxReplyDepth ?? 0;
    message.maxFollowsPerDay = object.maxFollowsPerDay !== undefined && object.maxFollowsPerDay !== null ? BigInt(object.maxFollowsPerDay.toString()) : BigInt(0);
    message.bountyCancellationFeePercent = object.bountyCancellationFeePercent !== undefined && object.bountyCancellationFeePercent !== null ? BigInt(object.bountyCancellationFeePercent.toString()) : BigInt(0);
    message.editGracePeriod = object.editGracePeriod !== undefined && object.editGracePeriod !== null ? BigInt(object.editGracePeriod.toString()) : BigInt(0);
    message.editMaxWindow = object.editMaxWindow !== undefined && object.editMaxWindow !== null ? BigInt(object.editMaxWindow.toString()) : BigInt(0);
    message.archiveThreshold = object.archiveThreshold !== undefined && object.archiveThreshold !== null ? BigInt(object.archiveThreshold.toString()) : BigInt(0);
    message.unarchiveCooldown = object.unarchiveCooldown !== undefined && object.unarchiveCooldown !== null ? BigInt(object.unarchiveCooldown.toString()) : BigInt(0);
    message.archiveCooldown = object.archiveCooldown !== undefined && object.archiveCooldown !== null ? BigInt(object.archiveCooldown.toString()) : BigInt(0);
    message.hideAppealCooldown = object.hideAppealCooldown !== undefined && object.hideAppealCooldown !== null ? BigInt(object.hideAppealCooldown.toString()) : BigInt(0);
    message.lockAppealCooldown = object.lockAppealCooldown !== undefined && object.lockAppealCooldown !== null ? BigInt(object.lockAppealCooldown.toString()) : BigInt(0);
    message.moveAppealCooldown = object.moveAppealCooldown !== undefined && object.moveAppealCooldown !== null ? BigInt(object.moveAppealCooldown.toString()) : BigInt(0);
    message.ephemeralTtl = object.ephemeralTtl !== undefined && object.ephemeralTtl !== null ? BigInt(object.ephemeralTtl.toString()) : BigInt(0);
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ForumOperationalParamsAmino): ForumOperationalParams {
    const message = createBaseForumOperationalParams();
    if (object.bounties_enabled !== undefined && object.bounties_enabled !== null) {
      message.bountiesEnabled = object.bounties_enabled;
    }
    if (object.reactions_enabled !== undefined && object.reactions_enabled !== null) {
      message.reactionsEnabled = object.reactions_enabled;
    }
    if (object.editing_enabled !== undefined && object.editing_enabled !== null) {
      message.editingEnabled = object.editing_enabled;
    }
    if (object.spam_tax !== undefined && object.spam_tax !== null) {
      message.spamTax = Coin.fromAmino(object.spam_tax);
    }
    if (object.reaction_spam_tax !== undefined && object.reaction_spam_tax !== null) {
      message.reactionSpamTax = Coin.fromAmino(object.reaction_spam_tax);
    }
    if (object.flag_spam_tax !== undefined && object.flag_spam_tax !== null) {
      message.flagSpamTax = Coin.fromAmino(object.flag_spam_tax);
    }
    if (object.downvote_deposit !== undefined && object.downvote_deposit !== null) {
      message.downvoteDeposit = Coin.fromAmino(object.downvote_deposit);
    }
    if (object.appeal_fee !== undefined && object.appeal_fee !== null) {
      message.appealFee = Coin.fromAmino(object.appeal_fee);
    }
    if (object.lock_appeal_fee !== undefined && object.lock_appeal_fee !== null) {
      message.lockAppealFee = Coin.fromAmino(object.lock_appeal_fee);
    }
    if (object.move_appeal_fee !== undefined && object.move_appeal_fee !== null) {
      message.moveAppealFee = Coin.fromAmino(object.move_appeal_fee);
    }
    if (object.edit_fee !== undefined && object.edit_fee !== null) {
      message.editFee = Coin.fromAmino(object.edit_fee);
    }
    if (object.cost_per_byte !== undefined && object.cost_per_byte !== null) {
      message.costPerByte = Coin.fromAmino(object.cost_per_byte);
    }
    if (object.cost_per_byte_exempt !== undefined && object.cost_per_byte_exempt !== null) {
      message.costPerByteExempt = object.cost_per_byte_exempt;
    }
    if (object.max_content_size !== undefined && object.max_content_size !== null) {
      message.maxContentSize = BigInt(object.max_content_size);
    }
    if (object.daily_post_limit !== undefined && object.daily_post_limit !== null) {
      message.dailyPostLimit = BigInt(object.daily_post_limit);
    }
    if (object.max_reply_depth !== undefined && object.max_reply_depth !== null) {
      message.maxReplyDepth = object.max_reply_depth;
    }
    if (object.max_follows_per_day !== undefined && object.max_follows_per_day !== null) {
      message.maxFollowsPerDay = BigInt(object.max_follows_per_day);
    }
    if (object.bounty_cancellation_fee_percent !== undefined && object.bounty_cancellation_fee_percent !== null) {
      message.bountyCancellationFeePercent = BigInt(object.bounty_cancellation_fee_percent);
    }
    if (object.edit_grace_period !== undefined && object.edit_grace_period !== null) {
      message.editGracePeriod = BigInt(object.edit_grace_period);
    }
    if (object.edit_max_window !== undefined && object.edit_max_window !== null) {
      message.editMaxWindow = BigInt(object.edit_max_window);
    }
    if (object.archive_threshold !== undefined && object.archive_threshold !== null) {
      message.archiveThreshold = BigInt(object.archive_threshold);
    }
    if (object.unarchive_cooldown !== undefined && object.unarchive_cooldown !== null) {
      message.unarchiveCooldown = BigInt(object.unarchive_cooldown);
    }
    if (object.archive_cooldown !== undefined && object.archive_cooldown !== null) {
      message.archiveCooldown = BigInt(object.archive_cooldown);
    }
    if (object.hide_appeal_cooldown !== undefined && object.hide_appeal_cooldown !== null) {
      message.hideAppealCooldown = BigInt(object.hide_appeal_cooldown);
    }
    if (object.lock_appeal_cooldown !== undefined && object.lock_appeal_cooldown !== null) {
      message.lockAppealCooldown = BigInt(object.lock_appeal_cooldown);
    }
    if (object.move_appeal_cooldown !== undefined && object.move_appeal_cooldown !== null) {
      message.moveAppealCooldown = BigInt(object.move_appeal_cooldown);
    }
    if (object.ephemeral_ttl !== undefined && object.ephemeral_ttl !== null) {
      message.ephemeralTtl = BigInt(object.ephemeral_ttl);
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    return message;
  },
  toAmino(message: ForumOperationalParams): ForumOperationalParamsAmino {
    const obj: any = {};
    obj.bounties_enabled = message.bountiesEnabled === false ? undefined : message.bountiesEnabled;
    obj.reactions_enabled = message.reactionsEnabled === false ? undefined : message.reactionsEnabled;
    obj.editing_enabled = message.editingEnabled === false ? undefined : message.editingEnabled;
    obj.spam_tax = message.spamTax ? Coin.toAmino(message.spamTax) : undefined;
    obj.reaction_spam_tax = message.reactionSpamTax ? Coin.toAmino(message.reactionSpamTax) : undefined;
    obj.flag_spam_tax = message.flagSpamTax ? Coin.toAmino(message.flagSpamTax) : undefined;
    obj.downvote_deposit = message.downvoteDeposit ? Coin.toAmino(message.downvoteDeposit) : undefined;
    obj.appeal_fee = message.appealFee ? Coin.toAmino(message.appealFee) : undefined;
    obj.lock_appeal_fee = message.lockAppealFee ? Coin.toAmino(message.lockAppealFee) : undefined;
    obj.move_appeal_fee = message.moveAppealFee ? Coin.toAmino(message.moveAppealFee) : undefined;
    obj.edit_fee = message.editFee ? Coin.toAmino(message.editFee) : undefined;
    obj.cost_per_byte = message.costPerByte ? Coin.toAmino(message.costPerByte) : undefined;
    obj.cost_per_byte_exempt = message.costPerByteExempt === false ? undefined : message.costPerByteExempt;
    obj.max_content_size = message.maxContentSize !== BigInt(0) ? message.maxContentSize?.toString() : undefined;
    obj.daily_post_limit = message.dailyPostLimit !== BigInt(0) ? message.dailyPostLimit?.toString() : undefined;
    obj.max_reply_depth = message.maxReplyDepth === 0 ? undefined : message.maxReplyDepth;
    obj.max_follows_per_day = message.maxFollowsPerDay !== BigInt(0) ? message.maxFollowsPerDay?.toString() : undefined;
    obj.bounty_cancellation_fee_percent = message.bountyCancellationFeePercent !== BigInt(0) ? message.bountyCancellationFeePercent?.toString() : undefined;
    obj.edit_grace_period = message.editGracePeriod !== BigInt(0) ? message.editGracePeriod?.toString() : undefined;
    obj.edit_max_window = message.editMaxWindow !== BigInt(0) ? message.editMaxWindow?.toString() : undefined;
    obj.archive_threshold = message.archiveThreshold !== BigInt(0) ? message.archiveThreshold?.toString() : undefined;
    obj.unarchive_cooldown = message.unarchiveCooldown !== BigInt(0) ? message.unarchiveCooldown?.toString() : undefined;
    obj.archive_cooldown = message.archiveCooldown !== BigInt(0) ? message.archiveCooldown?.toString() : undefined;
    obj.hide_appeal_cooldown = message.hideAppealCooldown !== BigInt(0) ? message.hideAppealCooldown?.toString() : undefined;
    obj.lock_appeal_cooldown = message.lockAppealCooldown !== BigInt(0) ? message.lockAppealCooldown?.toString() : undefined;
    obj.move_appeal_cooldown = message.moveAppealCooldown !== BigInt(0) ? message.moveAppealCooldown?.toString() : undefined;
    obj.ephemeral_ttl = message.ephemeralTtl !== BigInt(0) ? message.ephemeralTtl?.toString() : undefined;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ForumOperationalParamsAminoMsg): ForumOperationalParams {
    return ForumOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: ForumOperationalParams): ForumOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/forum/ForumOperationalParams",
      value: ForumOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: ForumOperationalParamsProtoMsg): ForumOperationalParams {
    return ForumOperationalParams.decode(message.value);
  },
  toProto(message: ForumOperationalParams): Uint8Array {
    return ForumOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: ForumOperationalParams): ForumOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ForumOperationalParams",
      value: ForumOperationalParams.encode(message).finish()
    };
  }
};