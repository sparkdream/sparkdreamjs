//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Params
 */
export interface Params {
  /**
   * Maximum length for post titles
   */
  maxTitleLength: bigint;
  /**
   * Maximum length for post bodies
   */
  maxBodyLength: bigint;
  /**
   * cost_per_byte charged for on-chain content storage (applies to all posts, burned)
   */
  costPerByte: Coin;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  costPerByteExempt: boolean;
  /**
   * Maximum reply body length in bytes
   */
  maxReplyLength: bigint;
  /**
   * Maximum nesting depth for replies
   */
  maxReplyDepth: number;
  /**
   * Flat fee per reaction
   */
  reactionFee: Coin;
  /**
   * Disable reaction fees
   */
  reactionFeeExempt: boolean;
  /**
   * Max posts per address per day
   */
  maxPostsPerDay: number;
  /**
   * Max replies per address per day
   */
  maxRepliesPerDay: number;
  /**
   * Max reactions per address per day
   */
  maxReactionsPerDay: number;
  /**
   * TTL in seconds for ephemeral content (default: 604800 = 7 days; 0 = no expiry)
   */
  ephemeralContentTtl: bigint;
  /**
   * Minimum trust level to pin ephemeral content (default: 2 = ESTABLISHED)
   */
  pinMinTrustLevel: number;
  /**
   * Max pins per address per day
   */
  maxPinsPerDay: number;
  /**
   * Governance-only floor for ephemeral_content_ttl (default: 86400 = 1 day)
   */
  minEphemeralContentTtl: bigint;
  /**
   * Governance-only ceiling for cost_per_byte
   */
  maxCostPerByte: Coin;
  /**
   * Governance-only ceiling for reaction_fee
   */
  maxReactionFee: Coin;
  /**
   * Min conviction score to renew anonymous content at TTL expiry (default: 100.0; 0 = disabled)
   */
  convictionRenewalThreshold: string;
  /**
   * Duration in seconds to extend TTL by when conviction-renewed (default: 604800 = 7 days)
   */
  convictionRenewalPeriod: bigint;
  /**
   * Maximum number of tags that may be attached to a post (default: 5)
   */
  maxTagsPerPost: number;
  /**
   * Maximum length in bytes of any single tag name (default: 32)
   */
  maxTagLength: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Params
 */
export interface ParamsAmino {
  /**
   * Maximum length for post titles
   */
  max_title_length?: string;
  /**
   * Maximum length for post bodies
   */
  max_body_length?: string;
  /**
   * cost_per_byte charged for on-chain content storage (applies to all posts, burned)
   */
  cost_per_byte?: CoinAmino;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  cost_per_byte_exempt?: boolean;
  /**
   * Maximum reply body length in bytes
   */
  max_reply_length?: string;
  /**
   * Maximum nesting depth for replies
   */
  max_reply_depth?: number;
  /**
   * Flat fee per reaction
   */
  reaction_fee?: CoinAmino;
  /**
   * Disable reaction fees
   */
  reaction_fee_exempt?: boolean;
  /**
   * Max posts per address per day
   */
  max_posts_per_day?: number;
  /**
   * Max replies per address per day
   */
  max_replies_per_day?: number;
  /**
   * Max reactions per address per day
   */
  max_reactions_per_day?: number;
  /**
   * TTL in seconds for ephemeral content (default: 604800 = 7 days; 0 = no expiry)
   */
  ephemeral_content_ttl?: string;
  /**
   * Minimum trust level to pin ephemeral content (default: 2 = ESTABLISHED)
   */
  pin_min_trust_level?: number;
  /**
   * Max pins per address per day
   */
  max_pins_per_day?: number;
  /**
   * Governance-only floor for ephemeral_content_ttl (default: 86400 = 1 day)
   */
  min_ephemeral_content_ttl?: string;
  /**
   * Governance-only ceiling for cost_per_byte
   */
  max_cost_per_byte?: CoinAmino;
  /**
   * Governance-only ceiling for reaction_fee
   */
  max_reaction_fee?: CoinAmino;
  /**
   * Min conviction score to renew anonymous content at TTL expiry (default: 100.0; 0 = disabled)
   */
  conviction_renewal_threshold?: string;
  /**
   * Duration in seconds to extend TTL by when conviction-renewed (default: 604800 = 7 days)
   */
  conviction_renewal_period?: string;
  /**
   * Maximum number of tags that may be attached to a post (default: 5)
   */
  max_tags_per_post?: number;
  /**
   * Maximum length in bytes of any single tag name (default: 32)
   */
  max_tag_length?: number;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/blog/Params";
  value: ParamsAmino;
}
/**
 * BlogOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * @name BlogOperationalParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.BlogOperationalParams
 */
export interface BlogOperationalParams {
  /**
   * cost_per_byte charged for on-chain content storage (applies to all posts, burned)
   */
  costPerByte: Coin;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  costPerByteExempt: boolean;
  /**
   * Flat fee per reaction
   */
  reactionFee: Coin;
  /**
   * Disable reaction fees
   */
  reactionFeeExempt: boolean;
  /**
   * Max posts per address per day
   */
  maxPostsPerDay: number;
  /**
   * Max replies per address per day
   */
  maxRepliesPerDay: number;
  /**
   * Max reactions per address per day
   */
  maxReactionsPerDay: number;
  /**
   * TTL for ephemeral content
   */
  ephemeralContentTtl: bigint;
  /**
   * Max pins per address per day
   */
  maxPinsPerDay: number;
  /**
   * Operations Committee can adjust conviction renewal threshold
   */
  convictionRenewalThreshold: string;
  /**
   * Operations Committee can adjust conviction renewal period
   */
  convictionRenewalPeriod: bigint;
}
export interface BlogOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.BlogOperationalParams";
  value: Uint8Array;
}
/**
 * BlogOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * @name BlogOperationalParamsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.BlogOperationalParams
 */
export interface BlogOperationalParamsAmino {
  /**
   * cost_per_byte charged for on-chain content storage (applies to all posts, burned)
   */
  cost_per_byte?: CoinAmino;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  cost_per_byte_exempt?: boolean;
  /**
   * Flat fee per reaction
   */
  reaction_fee?: CoinAmino;
  /**
   * Disable reaction fees
   */
  reaction_fee_exempt?: boolean;
  /**
   * Max posts per address per day
   */
  max_posts_per_day?: number;
  /**
   * Max replies per address per day
   */
  max_replies_per_day?: number;
  /**
   * Max reactions per address per day
   */
  max_reactions_per_day?: number;
  /**
   * TTL for ephemeral content
   */
  ephemeral_content_ttl?: string;
  /**
   * Max pins per address per day
   */
  max_pins_per_day?: number;
  /**
   * Operations Committee can adjust conviction renewal threshold
   */
  conviction_renewal_threshold?: string;
  /**
   * Operations Committee can adjust conviction renewal period
   */
  conviction_renewal_period?: string;
}
export interface BlogOperationalParamsAminoMsg {
  type: "sparkdream/x/blog/BlogOperationalParams";
  value: BlogOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    maxTitleLength: BigInt(0),
    maxBodyLength: BigInt(0),
    costPerByte: Coin.fromPartial({}),
    costPerByteExempt: false,
    maxReplyLength: BigInt(0),
    maxReplyDepth: 0,
    reactionFee: Coin.fromPartial({}),
    reactionFeeExempt: false,
    maxPostsPerDay: 0,
    maxRepliesPerDay: 0,
    maxReactionsPerDay: 0,
    ephemeralContentTtl: BigInt(0),
    pinMinTrustLevel: 0,
    maxPinsPerDay: 0,
    minEphemeralContentTtl: BigInt(0),
    maxCostPerByte: Coin.fromPartial({}),
    maxReactionFee: Coin.fromPartial({}),
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0),
    maxTagsPerPost: 0,
    maxTagLength: 0
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.blog.v1.Params",
  aminoType: "sparkdream/x/blog/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxTitleLength !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxTitleLength);
    }
    if (message.maxBodyLength !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBodyLength);
    }
    if (message.costPerByte !== undefined) {
      Coin.encode(message.costPerByte, writer.uint32(26).fork()).ldelim();
    }
    if (message.costPerByteExempt === true) {
      writer.uint32(32).bool(message.costPerByteExempt);
    }
    if (message.maxReplyLength !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxReplyLength);
    }
    if (message.maxReplyDepth !== 0) {
      writer.uint32(48).uint32(message.maxReplyDepth);
    }
    if (message.reactionFee !== undefined) {
      Coin.encode(message.reactionFee, writer.uint32(58).fork()).ldelim();
    }
    if (message.reactionFeeExempt === true) {
      writer.uint32(64).bool(message.reactionFeeExempt);
    }
    if (message.maxPostsPerDay !== 0) {
      writer.uint32(72).uint32(message.maxPostsPerDay);
    }
    if (message.maxRepliesPerDay !== 0) {
      writer.uint32(80).uint32(message.maxRepliesPerDay);
    }
    if (message.maxReactionsPerDay !== 0) {
      writer.uint32(88).uint32(message.maxReactionsPerDay);
    }
    if (message.ephemeralContentTtl !== BigInt(0)) {
      writer.uint32(136).int64(message.ephemeralContentTtl);
    }
    if (message.pinMinTrustLevel !== 0) {
      writer.uint32(144).uint32(message.pinMinTrustLevel);
    }
    if (message.maxPinsPerDay !== 0) {
      writer.uint32(152).uint32(message.maxPinsPerDay);
    }
    if (message.minEphemeralContentTtl !== BigInt(0)) {
      writer.uint32(160).int64(message.minEphemeralContentTtl);
    }
    if (message.maxCostPerByte !== undefined) {
      Coin.encode(message.maxCostPerByte, writer.uint32(170).fork()).ldelim();
    }
    if (message.maxReactionFee !== undefined) {
      Coin.encode(message.maxReactionFee, writer.uint32(178).fork()).ldelim();
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(192).int64(message.convictionRenewalPeriod);
    }
    if (message.maxTagsPerPost !== 0) {
      writer.uint32(200).uint32(message.maxTagsPerPost);
    }
    if (message.maxTagLength !== 0) {
      writer.uint32(208).uint32(message.maxTagLength);
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
          message.maxTitleLength = reader.uint64();
          break;
        case 2:
          message.maxBodyLength = reader.uint64();
          break;
        case 3:
          message.costPerByte = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.costPerByteExempt = reader.bool();
          break;
        case 5:
          message.maxReplyLength = reader.uint64();
          break;
        case 6:
          message.maxReplyDepth = reader.uint32();
          break;
        case 7:
          message.reactionFee = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.reactionFeeExempt = reader.bool();
          break;
        case 9:
          message.maxPostsPerDay = reader.uint32();
          break;
        case 10:
          message.maxRepliesPerDay = reader.uint32();
          break;
        case 11:
          message.maxReactionsPerDay = reader.uint32();
          break;
        case 17:
          message.ephemeralContentTtl = reader.int64();
          break;
        case 18:
          message.pinMinTrustLevel = reader.uint32();
          break;
        case 19:
          message.maxPinsPerDay = reader.uint32();
          break;
        case 20:
          message.minEphemeralContentTtl = reader.int64();
          break;
        case 21:
          message.maxCostPerByte = Coin.decode(reader, reader.uint32());
          break;
        case 22:
          message.maxReactionFee = Coin.decode(reader, reader.uint32());
          break;
        case 23:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 24:
          message.convictionRenewalPeriod = reader.int64();
          break;
        case 25:
          message.maxTagsPerPost = reader.uint32();
          break;
        case 26:
          message.maxTagLength = reader.uint32();
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
    message.maxTitleLength = object.maxTitleLength !== undefined && object.maxTitleLength !== null ? BigInt(object.maxTitleLength.toString()) : BigInt(0);
    message.maxBodyLength = object.maxBodyLength !== undefined && object.maxBodyLength !== null ? BigInt(object.maxBodyLength.toString()) : BigInt(0);
    message.costPerByte = object.costPerByte !== undefined && object.costPerByte !== null ? Coin.fromPartial(object.costPerByte) : undefined;
    message.costPerByteExempt = object.costPerByteExempt ?? false;
    message.maxReplyLength = object.maxReplyLength !== undefined && object.maxReplyLength !== null ? BigInt(object.maxReplyLength.toString()) : BigInt(0);
    message.maxReplyDepth = object.maxReplyDepth ?? 0;
    message.reactionFee = object.reactionFee !== undefined && object.reactionFee !== null ? Coin.fromPartial(object.reactionFee) : undefined;
    message.reactionFeeExempt = object.reactionFeeExempt ?? false;
    message.maxPostsPerDay = object.maxPostsPerDay ?? 0;
    message.maxRepliesPerDay = object.maxRepliesPerDay ?? 0;
    message.maxReactionsPerDay = object.maxReactionsPerDay ?? 0;
    message.ephemeralContentTtl = object.ephemeralContentTtl !== undefined && object.ephemeralContentTtl !== null ? BigInt(object.ephemeralContentTtl.toString()) : BigInt(0);
    message.pinMinTrustLevel = object.pinMinTrustLevel ?? 0;
    message.maxPinsPerDay = object.maxPinsPerDay ?? 0;
    message.minEphemeralContentTtl = object.minEphemeralContentTtl !== undefined && object.minEphemeralContentTtl !== null ? BigInt(object.minEphemeralContentTtl.toString()) : BigInt(0);
    message.maxCostPerByte = object.maxCostPerByte !== undefined && object.maxCostPerByte !== null ? Coin.fromPartial(object.maxCostPerByte) : undefined;
    message.maxReactionFee = object.maxReactionFee !== undefined && object.maxReactionFee !== null ? Coin.fromPartial(object.maxReactionFee) : undefined;
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    message.maxTagsPerPost = object.maxTagsPerPost ?? 0;
    message.maxTagLength = object.maxTagLength ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_title_length !== undefined && object.max_title_length !== null) {
      message.maxTitleLength = BigInt(object.max_title_length);
    }
    if (object.max_body_length !== undefined && object.max_body_length !== null) {
      message.maxBodyLength = BigInt(object.max_body_length);
    }
    if (object.cost_per_byte !== undefined && object.cost_per_byte !== null) {
      message.costPerByte = Coin.fromAmino(object.cost_per_byte);
    }
    if (object.cost_per_byte_exempt !== undefined && object.cost_per_byte_exempt !== null) {
      message.costPerByteExempt = object.cost_per_byte_exempt;
    }
    if (object.max_reply_length !== undefined && object.max_reply_length !== null) {
      message.maxReplyLength = BigInt(object.max_reply_length);
    }
    if (object.max_reply_depth !== undefined && object.max_reply_depth !== null) {
      message.maxReplyDepth = object.max_reply_depth;
    }
    if (object.reaction_fee !== undefined && object.reaction_fee !== null) {
      message.reactionFee = Coin.fromAmino(object.reaction_fee);
    }
    if (object.reaction_fee_exempt !== undefined && object.reaction_fee_exempt !== null) {
      message.reactionFeeExempt = object.reaction_fee_exempt;
    }
    if (object.max_posts_per_day !== undefined && object.max_posts_per_day !== null) {
      message.maxPostsPerDay = object.max_posts_per_day;
    }
    if (object.max_replies_per_day !== undefined && object.max_replies_per_day !== null) {
      message.maxRepliesPerDay = object.max_replies_per_day;
    }
    if (object.max_reactions_per_day !== undefined && object.max_reactions_per_day !== null) {
      message.maxReactionsPerDay = object.max_reactions_per_day;
    }
    if (object.ephemeral_content_ttl !== undefined && object.ephemeral_content_ttl !== null) {
      message.ephemeralContentTtl = BigInt(object.ephemeral_content_ttl);
    }
    if (object.pin_min_trust_level !== undefined && object.pin_min_trust_level !== null) {
      message.pinMinTrustLevel = object.pin_min_trust_level;
    }
    if (object.max_pins_per_day !== undefined && object.max_pins_per_day !== null) {
      message.maxPinsPerDay = object.max_pins_per_day;
    }
    if (object.min_ephemeral_content_ttl !== undefined && object.min_ephemeral_content_ttl !== null) {
      message.minEphemeralContentTtl = BigInt(object.min_ephemeral_content_ttl);
    }
    if (object.max_cost_per_byte !== undefined && object.max_cost_per_byte !== null) {
      message.maxCostPerByte = Coin.fromAmino(object.max_cost_per_byte);
    }
    if (object.max_reaction_fee !== undefined && object.max_reaction_fee !== null) {
      message.maxReactionFee = Coin.fromAmino(object.max_reaction_fee);
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    if (object.max_tags_per_post !== undefined && object.max_tags_per_post !== null) {
      message.maxTagsPerPost = object.max_tags_per_post;
    }
    if (object.max_tag_length !== undefined && object.max_tag_length !== null) {
      message.maxTagLength = object.max_tag_length;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_title_length = message.maxTitleLength !== BigInt(0) ? message.maxTitleLength?.toString() : undefined;
    obj.max_body_length = message.maxBodyLength !== BigInt(0) ? message.maxBodyLength?.toString() : undefined;
    obj.cost_per_byte = message.costPerByte ? Coin.toAmino(message.costPerByte) : undefined;
    obj.cost_per_byte_exempt = message.costPerByteExempt === false ? undefined : message.costPerByteExempt;
    obj.max_reply_length = message.maxReplyLength !== BigInt(0) ? message.maxReplyLength?.toString() : undefined;
    obj.max_reply_depth = message.maxReplyDepth === 0 ? undefined : message.maxReplyDepth;
    obj.reaction_fee = message.reactionFee ? Coin.toAmino(message.reactionFee) : undefined;
    obj.reaction_fee_exempt = message.reactionFeeExempt === false ? undefined : message.reactionFeeExempt;
    obj.max_posts_per_day = message.maxPostsPerDay === 0 ? undefined : message.maxPostsPerDay;
    obj.max_replies_per_day = message.maxRepliesPerDay === 0 ? undefined : message.maxRepliesPerDay;
    obj.max_reactions_per_day = message.maxReactionsPerDay === 0 ? undefined : message.maxReactionsPerDay;
    obj.ephemeral_content_ttl = message.ephemeralContentTtl !== BigInt(0) ? message.ephemeralContentTtl?.toString() : undefined;
    obj.pin_min_trust_level = message.pinMinTrustLevel === 0 ? undefined : message.pinMinTrustLevel;
    obj.max_pins_per_day = message.maxPinsPerDay === 0 ? undefined : message.maxPinsPerDay;
    obj.min_ephemeral_content_ttl = message.minEphemeralContentTtl !== BigInt(0) ? message.minEphemeralContentTtl?.toString() : undefined;
    obj.max_cost_per_byte = message.maxCostPerByte ? Coin.toAmino(message.maxCostPerByte) : undefined;
    obj.max_reaction_fee = message.maxReactionFee ? Coin.toAmino(message.maxReactionFee) : undefined;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    obj.max_tags_per_post = message.maxTagsPerPost === 0 ? undefined : message.maxTagsPerPost;
    obj.max_tag_length = message.maxTagLength === 0 ? undefined : message.maxTagLength;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/blog/Params",
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
      typeUrl: "/sparkdream.blog.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseBlogOperationalParams(): BlogOperationalParams {
  return {
    costPerByte: Coin.fromPartial({}),
    costPerByteExempt: false,
    reactionFee: Coin.fromPartial({}),
    reactionFeeExempt: false,
    maxPostsPerDay: 0,
    maxRepliesPerDay: 0,
    maxReactionsPerDay: 0,
    ephemeralContentTtl: BigInt(0),
    maxPinsPerDay: 0,
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0)
  };
}
/**
 * BlogOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * @name BlogOperationalParams
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.BlogOperationalParams
 */
export const BlogOperationalParams = {
  typeUrl: "/sparkdream.blog.v1.BlogOperationalParams",
  aminoType: "sparkdream/x/blog/BlogOperationalParams",
  encode(message: BlogOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.costPerByte !== undefined) {
      Coin.encode(message.costPerByte, writer.uint32(10).fork()).ldelim();
    }
    if (message.costPerByteExempt === true) {
      writer.uint32(16).bool(message.costPerByteExempt);
    }
    if (message.reactionFee !== undefined) {
      Coin.encode(message.reactionFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.reactionFeeExempt === true) {
      writer.uint32(32).bool(message.reactionFeeExempt);
    }
    if (message.maxPostsPerDay !== 0) {
      writer.uint32(40).uint32(message.maxPostsPerDay);
    }
    if (message.maxRepliesPerDay !== 0) {
      writer.uint32(48).uint32(message.maxRepliesPerDay);
    }
    if (message.maxReactionsPerDay !== 0) {
      writer.uint32(56).uint32(message.maxReactionsPerDay);
    }
    if (message.ephemeralContentTtl !== BigInt(0)) {
      writer.uint32(96).int64(message.ephemeralContentTtl);
    }
    if (message.maxPinsPerDay !== 0) {
      writer.uint32(104).uint32(message.maxPinsPerDay);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(120).int64(message.convictionRenewalPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlogOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlogOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.costPerByte = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.costPerByteExempt = reader.bool();
          break;
        case 3:
          message.reactionFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.reactionFeeExempt = reader.bool();
          break;
        case 5:
          message.maxPostsPerDay = reader.uint32();
          break;
        case 6:
          message.maxRepliesPerDay = reader.uint32();
          break;
        case 7:
          message.maxReactionsPerDay = reader.uint32();
          break;
        case 12:
          message.ephemeralContentTtl = reader.int64();
          break;
        case 13:
          message.maxPinsPerDay = reader.uint32();
          break;
        case 14:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.convictionRenewalPeriod = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BlogOperationalParams>): BlogOperationalParams {
    const message = createBaseBlogOperationalParams();
    message.costPerByte = object.costPerByte !== undefined && object.costPerByte !== null ? Coin.fromPartial(object.costPerByte) : undefined;
    message.costPerByteExempt = object.costPerByteExempt ?? false;
    message.reactionFee = object.reactionFee !== undefined && object.reactionFee !== null ? Coin.fromPartial(object.reactionFee) : undefined;
    message.reactionFeeExempt = object.reactionFeeExempt ?? false;
    message.maxPostsPerDay = object.maxPostsPerDay ?? 0;
    message.maxRepliesPerDay = object.maxRepliesPerDay ?? 0;
    message.maxReactionsPerDay = object.maxReactionsPerDay ?? 0;
    message.ephemeralContentTtl = object.ephemeralContentTtl !== undefined && object.ephemeralContentTtl !== null ? BigInt(object.ephemeralContentTtl.toString()) : BigInt(0);
    message.maxPinsPerDay = object.maxPinsPerDay ?? 0;
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlogOperationalParamsAmino): BlogOperationalParams {
    const message = createBaseBlogOperationalParams();
    if (object.cost_per_byte !== undefined && object.cost_per_byte !== null) {
      message.costPerByte = Coin.fromAmino(object.cost_per_byte);
    }
    if (object.cost_per_byte_exempt !== undefined && object.cost_per_byte_exempt !== null) {
      message.costPerByteExempt = object.cost_per_byte_exempt;
    }
    if (object.reaction_fee !== undefined && object.reaction_fee !== null) {
      message.reactionFee = Coin.fromAmino(object.reaction_fee);
    }
    if (object.reaction_fee_exempt !== undefined && object.reaction_fee_exempt !== null) {
      message.reactionFeeExempt = object.reaction_fee_exempt;
    }
    if (object.max_posts_per_day !== undefined && object.max_posts_per_day !== null) {
      message.maxPostsPerDay = object.max_posts_per_day;
    }
    if (object.max_replies_per_day !== undefined && object.max_replies_per_day !== null) {
      message.maxRepliesPerDay = object.max_replies_per_day;
    }
    if (object.max_reactions_per_day !== undefined && object.max_reactions_per_day !== null) {
      message.maxReactionsPerDay = object.max_reactions_per_day;
    }
    if (object.ephemeral_content_ttl !== undefined && object.ephemeral_content_ttl !== null) {
      message.ephemeralContentTtl = BigInt(object.ephemeral_content_ttl);
    }
    if (object.max_pins_per_day !== undefined && object.max_pins_per_day !== null) {
      message.maxPinsPerDay = object.max_pins_per_day;
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    return message;
  },
  toAmino(message: BlogOperationalParams): BlogOperationalParamsAmino {
    const obj: any = {};
    obj.cost_per_byte = message.costPerByte ? Coin.toAmino(message.costPerByte) : undefined;
    obj.cost_per_byte_exempt = message.costPerByteExempt === false ? undefined : message.costPerByteExempt;
    obj.reaction_fee = message.reactionFee ? Coin.toAmino(message.reactionFee) : undefined;
    obj.reaction_fee_exempt = message.reactionFeeExempt === false ? undefined : message.reactionFeeExempt;
    obj.max_posts_per_day = message.maxPostsPerDay === 0 ? undefined : message.maxPostsPerDay;
    obj.max_replies_per_day = message.maxRepliesPerDay === 0 ? undefined : message.maxRepliesPerDay;
    obj.max_reactions_per_day = message.maxReactionsPerDay === 0 ? undefined : message.maxReactionsPerDay;
    obj.ephemeral_content_ttl = message.ephemeralContentTtl !== BigInt(0) ? message.ephemeralContentTtl?.toString() : undefined;
    obj.max_pins_per_day = message.maxPinsPerDay === 0 ? undefined : message.maxPinsPerDay;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlogOperationalParamsAminoMsg): BlogOperationalParams {
    return BlogOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: BlogOperationalParams): BlogOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/blog/BlogOperationalParams",
      value: BlogOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: BlogOperationalParamsProtoMsg): BlogOperationalParams {
    return BlogOperationalParams.decode(message.value);
  },
  toProto(message: BlogOperationalParams): Uint8Array {
    return BlogOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: BlogOperationalParams): BlogOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.BlogOperationalParams",
      value: BlogOperationalParams.encode(message).finish()
    };
  }
};