//@ts-nocheck
import { ReceivePolicy } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module. Fields 16-29 are the
 * operational subset (ArtifactOperationalParams). Every field is clamped by
 * the compiled hard bounds in x/artifact/types/params.go.
 * @name Params
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Params
 */
export interface Params {
  /**
   * --- Gates (governance) ---
   * Minimum x/rep trust level (TrustLevel enum value) to create a class.
   */
  minTrustLevelCreateClass: number;
  maxClassesPerCreator: number;
  defaultReceivePolicy: ReceivePolicy;
  /**
   * --- Size limits (governance) ---
   */
  maxNameLength: number;
  maxSymbolLength: number;
  maxDescriptionLength: number;
  maxUriLength: number;
  maxAttributes: number;
  maxAttributeKeyLength: number;
  maxAttributeValueLength: number;
  maxMintersPerClass: number;
  maxBatchSize: number;
  allowedUriSchemes: string[];
  /**
   * --- Market bounds (governance) ---
   */
  maxRoyaltyBps: number;
  saleFeeBps: number;
  /**
   * --- Operational ---
   * SPARK burned on class creation.
   */
  classCreationFee: string;
  /**
   * SPARK held per token, refunded on burn/revoke.
   */
  tokenDeposit: string;
  /**
   * SPARK burned per inbox item created.
   */
  inboxFee: string;
  /**
   * Seconds an inbox item / class-owner proposal stays open.
   */
  pendingTtl: bigint;
  /**
   * Maximum listing duration in seconds.
   */
  maxListingDuration: bigint;
  maxPendingPerPair: number;
  maxInboxPerRecipient: number;
  maxExpirationsPerBlock: number;
  marketEnabled: boolean;
  publicMintEnabled: boolean;
  /**
   * --- Moderation (operational; block heights) ---
   */
  maxHidesPerSentinelPerDay: number;
  sentinelUnhideWindowBlocks: bigint;
  hideExpiryBlocks: bigint;
  /**
   * DREAM reserved on the sentinel bond per hide.
   */
  sentinelHideCommitDream: string;
  /**
   * Recipients per MsgIssue.
   */
  maxIssueBatchSize: number;
  /**
   * Stages per token metadata schedule (0 disables schedules).
   */
  maxScheduleStages: number;
  /**
   * Open media proposals per token (0 disables proposals).
   */
  maxMediaProposalsPerToken: number;
  /**
   * Accepted media versions per token.
   */
  maxMediaVersionsPerToken: number;
  /**
   * Query-time renderer evaluation switch (operational).
   */
  renderersEnabled: boolean;
  /**
   * --- Waves 3 and 4 (governance) ---
   * Levels a nested tree may have below its root.
   */
  maxNestDepth: number;
  /**
   * Tokens a nested tree may hold under its root.
   */
  maxNestedTokens: number;
  /**
   * Longest rental, in seconds.
   */
  maxRentalDuration: bigint;
  /**
   * Crafting recipes per class.
   */
  maxCraftRecipesPerClass: number;
  /**
   * Open escrowed offers per bidder.
   */
  maxOffersPerBidder: number;
  /**
   * Seconds a late bid pushes an auction's end out to (anti-sniping).
   */
  auctionExtension: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module. Fields 16-29 are the
 * operational subset (ArtifactOperationalParams). Every field is clamped by
 * the compiled hard bounds in x/artifact/types/params.go.
 * @name ParamsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Params
 */
export interface ParamsAmino {
  /**
   * --- Gates (governance) ---
   * Minimum x/rep trust level (TrustLevel enum value) to create a class.
   */
  min_trust_level_create_class?: number;
  max_classes_per_creator?: number;
  default_receive_policy?: ReceivePolicy;
  /**
   * --- Size limits (governance) ---
   */
  max_name_length?: number;
  max_symbol_length?: number;
  max_description_length?: number;
  max_uri_length?: number;
  max_attributes?: number;
  max_attribute_key_length?: number;
  max_attribute_value_length?: number;
  max_minters_per_class?: number;
  max_batch_size?: number;
  allowed_uri_schemes?: string[];
  /**
   * --- Market bounds (governance) ---
   */
  max_royalty_bps?: number;
  sale_fee_bps?: number;
  /**
   * --- Operational ---
   * SPARK burned on class creation.
   */
  class_creation_fee?: string;
  /**
   * SPARK held per token, refunded on burn/revoke.
   */
  token_deposit?: string;
  /**
   * SPARK burned per inbox item created.
   */
  inbox_fee?: string;
  /**
   * Seconds an inbox item / class-owner proposal stays open.
   */
  pending_ttl?: string;
  /**
   * Maximum listing duration in seconds.
   */
  max_listing_duration?: string;
  max_pending_per_pair?: number;
  max_inbox_per_recipient?: number;
  max_expirations_per_block?: number;
  market_enabled?: boolean;
  public_mint_enabled?: boolean;
  /**
   * --- Moderation (operational; block heights) ---
   */
  max_hides_per_sentinel_per_day?: number;
  sentinel_unhide_window_blocks?: string;
  hide_expiry_blocks?: string;
  /**
   * DREAM reserved on the sentinel bond per hide.
   */
  sentinel_hide_commit_dream?: string;
  /**
   * Recipients per MsgIssue.
   */
  max_issue_batch_size?: number;
  /**
   * Stages per token metadata schedule (0 disables schedules).
   */
  max_schedule_stages?: number;
  /**
   * Open media proposals per token (0 disables proposals).
   */
  max_media_proposals_per_token?: number;
  /**
   * Accepted media versions per token.
   */
  max_media_versions_per_token?: number;
  /**
   * Query-time renderer evaluation switch (operational).
   */
  renderers_enabled?: boolean;
  /**
   * --- Waves 3 and 4 (governance) ---
   * Levels a nested tree may have below its root.
   */
  max_nest_depth?: number;
  /**
   * Tokens a nested tree may hold under its root.
   */
  max_nested_tokens?: number;
  /**
   * Longest rental, in seconds.
   */
  max_rental_duration?: string;
  /**
   * Crafting recipes per class.
   */
  max_craft_recipes_per_class?: number;
  /**
   * Open escrowed offers per bidder.
   */
  max_offers_per_bidder?: number;
  /**
   * Seconds a late bid pushes an auction's end out to (anti-sniping).
   */
  auction_extension?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/artifact/Params";
  value: ParamsAmino;
}
/**
 * ArtifactOperationalParams is the subset of Params the Commons Operations
 * Committee may update (MsgUpdateOperationalParams). Full replacement: every
 * field must be supplied.
 * @name ArtifactOperationalParams
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ArtifactOperationalParams
 */
export interface ArtifactOperationalParams {
  classCreationFee: string;
  tokenDeposit: string;
  inboxFee: string;
  pendingTtl: bigint;
  maxListingDuration: bigint;
  maxPendingPerPair: number;
  maxInboxPerRecipient: number;
  maxExpirationsPerBlock: number;
  marketEnabled: boolean;
  publicMintEnabled: boolean;
  maxHidesPerSentinelPerDay: number;
  sentinelUnhideWindowBlocks: bigint;
  hideExpiryBlocks: bigint;
  sentinelHideCommitDream: string;
  renderersEnabled: boolean;
}
export interface ArtifactOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.ArtifactOperationalParams";
  value: Uint8Array;
}
/**
 * ArtifactOperationalParams is the subset of Params the Commons Operations
 * Committee may update (MsgUpdateOperationalParams). Full replacement: every
 * field must be supplied.
 * @name ArtifactOperationalParamsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ArtifactOperationalParams
 */
export interface ArtifactOperationalParamsAmino {
  class_creation_fee?: string;
  token_deposit?: string;
  inbox_fee?: string;
  pending_ttl?: string;
  max_listing_duration?: string;
  max_pending_per_pair?: number;
  max_inbox_per_recipient?: number;
  max_expirations_per_block?: number;
  market_enabled?: boolean;
  public_mint_enabled?: boolean;
  max_hides_per_sentinel_per_day?: number;
  sentinel_unhide_window_blocks?: string;
  hide_expiry_blocks?: string;
  sentinel_hide_commit_dream?: string;
  renderers_enabled?: boolean;
}
export interface ArtifactOperationalParamsAminoMsg {
  type: "/sparkdream.artifact.v1.ArtifactOperationalParams";
  value: ArtifactOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    minTrustLevelCreateClass: 0,
    maxClassesPerCreator: 0,
    defaultReceivePolicy: 0,
    maxNameLength: 0,
    maxSymbolLength: 0,
    maxDescriptionLength: 0,
    maxUriLength: 0,
    maxAttributes: 0,
    maxAttributeKeyLength: 0,
    maxAttributeValueLength: 0,
    maxMintersPerClass: 0,
    maxBatchSize: 0,
    allowedUriSchemes: [],
    maxRoyaltyBps: 0,
    saleFeeBps: 0,
    classCreationFee: "",
    tokenDeposit: "",
    inboxFee: "",
    pendingTtl: BigInt(0),
    maxListingDuration: BigInt(0),
    maxPendingPerPair: 0,
    maxInboxPerRecipient: 0,
    maxExpirationsPerBlock: 0,
    marketEnabled: false,
    publicMintEnabled: false,
    maxHidesPerSentinelPerDay: 0,
    sentinelUnhideWindowBlocks: BigInt(0),
    hideExpiryBlocks: BigInt(0),
    sentinelHideCommitDream: "",
    maxIssueBatchSize: 0,
    maxScheduleStages: 0,
    maxMediaProposalsPerToken: 0,
    maxMediaVersionsPerToken: 0,
    renderersEnabled: false,
    maxNestDepth: 0,
    maxNestedTokens: 0,
    maxRentalDuration: BigInt(0),
    maxCraftRecipesPerClass: 0,
    maxOffersPerBidder: 0,
    auctionExtension: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module. Fields 16-29 are the
 * operational subset (ArtifactOperationalParams). Every field is clamped by
 * the compiled hard bounds in x/artifact/types/params.go.
 * @name Params
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.artifact.v1.Params",
  aminoType: "sparkdream/x/artifact/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minTrustLevelCreateClass !== 0) {
      writer.uint32(8).uint32(message.minTrustLevelCreateClass);
    }
    if (message.maxClassesPerCreator !== 0) {
      writer.uint32(16).uint32(message.maxClassesPerCreator);
    }
    if (message.defaultReceivePolicy !== 0) {
      writer.uint32(24).int32(message.defaultReceivePolicy);
    }
    if (message.maxNameLength !== 0) {
      writer.uint32(32).uint32(message.maxNameLength);
    }
    if (message.maxSymbolLength !== 0) {
      writer.uint32(40).uint32(message.maxSymbolLength);
    }
    if (message.maxDescriptionLength !== 0) {
      writer.uint32(48).uint32(message.maxDescriptionLength);
    }
    if (message.maxUriLength !== 0) {
      writer.uint32(56).uint32(message.maxUriLength);
    }
    if (message.maxAttributes !== 0) {
      writer.uint32(64).uint32(message.maxAttributes);
    }
    if (message.maxAttributeKeyLength !== 0) {
      writer.uint32(72).uint32(message.maxAttributeKeyLength);
    }
    if (message.maxAttributeValueLength !== 0) {
      writer.uint32(80).uint32(message.maxAttributeValueLength);
    }
    if (message.maxMintersPerClass !== 0) {
      writer.uint32(88).uint32(message.maxMintersPerClass);
    }
    if (message.maxBatchSize !== 0) {
      writer.uint32(96).uint32(message.maxBatchSize);
    }
    for (const v of message.allowedUriSchemes) {
      writer.uint32(106).string(v!);
    }
    if (message.maxRoyaltyBps !== 0) {
      writer.uint32(112).uint32(message.maxRoyaltyBps);
    }
    if (message.saleFeeBps !== 0) {
      writer.uint32(120).uint32(message.saleFeeBps);
    }
    if (message.classCreationFee !== "") {
      writer.uint32(130).string(message.classCreationFee);
    }
    if (message.tokenDeposit !== "") {
      writer.uint32(138).string(message.tokenDeposit);
    }
    if (message.inboxFee !== "") {
      writer.uint32(146).string(message.inboxFee);
    }
    if (message.pendingTtl !== BigInt(0)) {
      writer.uint32(152).int64(message.pendingTtl);
    }
    if (message.maxListingDuration !== BigInt(0)) {
      writer.uint32(160).int64(message.maxListingDuration);
    }
    if (message.maxPendingPerPair !== 0) {
      writer.uint32(168).uint32(message.maxPendingPerPair);
    }
    if (message.maxInboxPerRecipient !== 0) {
      writer.uint32(176).uint32(message.maxInboxPerRecipient);
    }
    if (message.maxExpirationsPerBlock !== 0) {
      writer.uint32(184).uint32(message.maxExpirationsPerBlock);
    }
    if (message.marketEnabled === true) {
      writer.uint32(192).bool(message.marketEnabled);
    }
    if (message.publicMintEnabled === true) {
      writer.uint32(200).bool(message.publicMintEnabled);
    }
    if (message.maxHidesPerSentinelPerDay !== 0) {
      writer.uint32(208).uint32(message.maxHidesPerSentinelPerDay);
    }
    if (message.sentinelUnhideWindowBlocks !== BigInt(0)) {
      writer.uint32(216).int64(message.sentinelUnhideWindowBlocks);
    }
    if (message.hideExpiryBlocks !== BigInt(0)) {
      writer.uint32(224).int64(message.hideExpiryBlocks);
    }
    if (message.sentinelHideCommitDream !== "") {
      writer.uint32(234).string(message.sentinelHideCommitDream);
    }
    if (message.maxIssueBatchSize !== 0) {
      writer.uint32(240).uint32(message.maxIssueBatchSize);
    }
    if (message.maxScheduleStages !== 0) {
      writer.uint32(248).uint32(message.maxScheduleStages);
    }
    if (message.maxMediaProposalsPerToken !== 0) {
      writer.uint32(256).uint32(message.maxMediaProposalsPerToken);
    }
    if (message.maxMediaVersionsPerToken !== 0) {
      writer.uint32(264).uint32(message.maxMediaVersionsPerToken);
    }
    if (message.renderersEnabled === true) {
      writer.uint32(272).bool(message.renderersEnabled);
    }
    if (message.maxNestDepth !== 0) {
      writer.uint32(280).uint32(message.maxNestDepth);
    }
    if (message.maxNestedTokens !== 0) {
      writer.uint32(288).uint32(message.maxNestedTokens);
    }
    if (message.maxRentalDuration !== BigInt(0)) {
      writer.uint32(296).int64(message.maxRentalDuration);
    }
    if (message.maxCraftRecipesPerClass !== 0) {
      writer.uint32(304).uint32(message.maxCraftRecipesPerClass);
    }
    if (message.maxOffersPerBidder !== 0) {
      writer.uint32(312).uint32(message.maxOffersPerBidder);
    }
    if (message.auctionExtension !== BigInt(0)) {
      writer.uint32(320).int64(message.auctionExtension);
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
          message.minTrustLevelCreateClass = reader.uint32();
          break;
        case 2:
          message.maxClassesPerCreator = reader.uint32();
          break;
        case 3:
          message.defaultReceivePolicy = reader.int32() as any;
          break;
        case 4:
          message.maxNameLength = reader.uint32();
          break;
        case 5:
          message.maxSymbolLength = reader.uint32();
          break;
        case 6:
          message.maxDescriptionLength = reader.uint32();
          break;
        case 7:
          message.maxUriLength = reader.uint32();
          break;
        case 8:
          message.maxAttributes = reader.uint32();
          break;
        case 9:
          message.maxAttributeKeyLength = reader.uint32();
          break;
        case 10:
          message.maxAttributeValueLength = reader.uint32();
          break;
        case 11:
          message.maxMintersPerClass = reader.uint32();
          break;
        case 12:
          message.maxBatchSize = reader.uint32();
          break;
        case 13:
          message.allowedUriSchemes.push(reader.string());
          break;
        case 14:
          message.maxRoyaltyBps = reader.uint32();
          break;
        case 15:
          message.saleFeeBps = reader.uint32();
          break;
        case 16:
          message.classCreationFee = reader.string();
          break;
        case 17:
          message.tokenDeposit = reader.string();
          break;
        case 18:
          message.inboxFee = reader.string();
          break;
        case 19:
          message.pendingTtl = reader.int64();
          break;
        case 20:
          message.maxListingDuration = reader.int64();
          break;
        case 21:
          message.maxPendingPerPair = reader.uint32();
          break;
        case 22:
          message.maxInboxPerRecipient = reader.uint32();
          break;
        case 23:
          message.maxExpirationsPerBlock = reader.uint32();
          break;
        case 24:
          message.marketEnabled = reader.bool();
          break;
        case 25:
          message.publicMintEnabled = reader.bool();
          break;
        case 26:
          message.maxHidesPerSentinelPerDay = reader.uint32();
          break;
        case 27:
          message.sentinelUnhideWindowBlocks = reader.int64();
          break;
        case 28:
          message.hideExpiryBlocks = reader.int64();
          break;
        case 29:
          message.sentinelHideCommitDream = reader.string();
          break;
        case 30:
          message.maxIssueBatchSize = reader.uint32();
          break;
        case 31:
          message.maxScheduleStages = reader.uint32();
          break;
        case 32:
          message.maxMediaProposalsPerToken = reader.uint32();
          break;
        case 33:
          message.maxMediaVersionsPerToken = reader.uint32();
          break;
        case 34:
          message.renderersEnabled = reader.bool();
          break;
        case 35:
          message.maxNestDepth = reader.uint32();
          break;
        case 36:
          message.maxNestedTokens = reader.uint32();
          break;
        case 37:
          message.maxRentalDuration = reader.int64();
          break;
        case 38:
          message.maxCraftRecipesPerClass = reader.uint32();
          break;
        case 39:
          message.maxOffersPerBidder = reader.uint32();
          break;
        case 40:
          message.auctionExtension = reader.int64();
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
    message.minTrustLevelCreateClass = object.minTrustLevelCreateClass ?? 0;
    message.maxClassesPerCreator = object.maxClassesPerCreator ?? 0;
    message.defaultReceivePolicy = object.defaultReceivePolicy ?? 0;
    message.maxNameLength = object.maxNameLength ?? 0;
    message.maxSymbolLength = object.maxSymbolLength ?? 0;
    message.maxDescriptionLength = object.maxDescriptionLength ?? 0;
    message.maxUriLength = object.maxUriLength ?? 0;
    message.maxAttributes = object.maxAttributes ?? 0;
    message.maxAttributeKeyLength = object.maxAttributeKeyLength ?? 0;
    message.maxAttributeValueLength = object.maxAttributeValueLength ?? 0;
    message.maxMintersPerClass = object.maxMintersPerClass ?? 0;
    message.maxBatchSize = object.maxBatchSize ?? 0;
    message.allowedUriSchemes = object.allowedUriSchemes?.map(e => e) || [];
    message.maxRoyaltyBps = object.maxRoyaltyBps ?? 0;
    message.saleFeeBps = object.saleFeeBps ?? 0;
    message.classCreationFee = object.classCreationFee ?? "";
    message.tokenDeposit = object.tokenDeposit ?? "";
    message.inboxFee = object.inboxFee ?? "";
    message.pendingTtl = object.pendingTtl !== undefined && object.pendingTtl !== null ? BigInt(object.pendingTtl.toString()) : BigInt(0);
    message.maxListingDuration = object.maxListingDuration !== undefined && object.maxListingDuration !== null ? BigInt(object.maxListingDuration.toString()) : BigInt(0);
    message.maxPendingPerPair = object.maxPendingPerPair ?? 0;
    message.maxInboxPerRecipient = object.maxInboxPerRecipient ?? 0;
    message.maxExpirationsPerBlock = object.maxExpirationsPerBlock ?? 0;
    message.marketEnabled = object.marketEnabled ?? false;
    message.publicMintEnabled = object.publicMintEnabled ?? false;
    message.maxHidesPerSentinelPerDay = object.maxHidesPerSentinelPerDay ?? 0;
    message.sentinelUnhideWindowBlocks = object.sentinelUnhideWindowBlocks !== undefined && object.sentinelUnhideWindowBlocks !== null ? BigInt(object.sentinelUnhideWindowBlocks.toString()) : BigInt(0);
    message.hideExpiryBlocks = object.hideExpiryBlocks !== undefined && object.hideExpiryBlocks !== null ? BigInt(object.hideExpiryBlocks.toString()) : BigInt(0);
    message.sentinelHideCommitDream = object.sentinelHideCommitDream ?? "";
    message.maxIssueBatchSize = object.maxIssueBatchSize ?? 0;
    message.maxScheduleStages = object.maxScheduleStages ?? 0;
    message.maxMediaProposalsPerToken = object.maxMediaProposalsPerToken ?? 0;
    message.maxMediaVersionsPerToken = object.maxMediaVersionsPerToken ?? 0;
    message.renderersEnabled = object.renderersEnabled ?? false;
    message.maxNestDepth = object.maxNestDepth ?? 0;
    message.maxNestedTokens = object.maxNestedTokens ?? 0;
    message.maxRentalDuration = object.maxRentalDuration !== undefined && object.maxRentalDuration !== null ? BigInt(object.maxRentalDuration.toString()) : BigInt(0);
    message.maxCraftRecipesPerClass = object.maxCraftRecipesPerClass ?? 0;
    message.maxOffersPerBidder = object.maxOffersPerBidder ?? 0;
    message.auctionExtension = object.auctionExtension !== undefined && object.auctionExtension !== null ? BigInt(object.auctionExtension.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_trust_level_create_class !== undefined && object.min_trust_level_create_class !== null) {
      message.minTrustLevelCreateClass = object.min_trust_level_create_class;
    }
    if (object.max_classes_per_creator !== undefined && object.max_classes_per_creator !== null) {
      message.maxClassesPerCreator = object.max_classes_per_creator;
    }
    if (object.default_receive_policy !== undefined && object.default_receive_policy !== null) {
      message.defaultReceivePolicy = object.default_receive_policy;
    }
    if (object.max_name_length !== undefined && object.max_name_length !== null) {
      message.maxNameLength = object.max_name_length;
    }
    if (object.max_symbol_length !== undefined && object.max_symbol_length !== null) {
      message.maxSymbolLength = object.max_symbol_length;
    }
    if (object.max_description_length !== undefined && object.max_description_length !== null) {
      message.maxDescriptionLength = object.max_description_length;
    }
    if (object.max_uri_length !== undefined && object.max_uri_length !== null) {
      message.maxUriLength = object.max_uri_length;
    }
    if (object.max_attributes !== undefined && object.max_attributes !== null) {
      message.maxAttributes = object.max_attributes;
    }
    if (object.max_attribute_key_length !== undefined && object.max_attribute_key_length !== null) {
      message.maxAttributeKeyLength = object.max_attribute_key_length;
    }
    if (object.max_attribute_value_length !== undefined && object.max_attribute_value_length !== null) {
      message.maxAttributeValueLength = object.max_attribute_value_length;
    }
    if (object.max_minters_per_class !== undefined && object.max_minters_per_class !== null) {
      message.maxMintersPerClass = object.max_minters_per_class;
    }
    if (object.max_batch_size !== undefined && object.max_batch_size !== null) {
      message.maxBatchSize = object.max_batch_size;
    }
    message.allowedUriSchemes = object.allowed_uri_schemes?.map(e => e) || [];
    if (object.max_royalty_bps !== undefined && object.max_royalty_bps !== null) {
      message.maxRoyaltyBps = object.max_royalty_bps;
    }
    if (object.sale_fee_bps !== undefined && object.sale_fee_bps !== null) {
      message.saleFeeBps = object.sale_fee_bps;
    }
    if (object.class_creation_fee !== undefined && object.class_creation_fee !== null) {
      message.classCreationFee = object.class_creation_fee;
    }
    if (object.token_deposit !== undefined && object.token_deposit !== null) {
      message.tokenDeposit = object.token_deposit;
    }
    if (object.inbox_fee !== undefined && object.inbox_fee !== null) {
      message.inboxFee = object.inbox_fee;
    }
    if (object.pending_ttl !== undefined && object.pending_ttl !== null) {
      message.pendingTtl = BigInt(object.pending_ttl);
    }
    if (object.max_listing_duration !== undefined && object.max_listing_duration !== null) {
      message.maxListingDuration = BigInt(object.max_listing_duration);
    }
    if (object.max_pending_per_pair !== undefined && object.max_pending_per_pair !== null) {
      message.maxPendingPerPair = object.max_pending_per_pair;
    }
    if (object.max_inbox_per_recipient !== undefined && object.max_inbox_per_recipient !== null) {
      message.maxInboxPerRecipient = object.max_inbox_per_recipient;
    }
    if (object.max_expirations_per_block !== undefined && object.max_expirations_per_block !== null) {
      message.maxExpirationsPerBlock = object.max_expirations_per_block;
    }
    if (object.market_enabled !== undefined && object.market_enabled !== null) {
      message.marketEnabled = object.market_enabled;
    }
    if (object.public_mint_enabled !== undefined && object.public_mint_enabled !== null) {
      message.publicMintEnabled = object.public_mint_enabled;
    }
    if (object.max_hides_per_sentinel_per_day !== undefined && object.max_hides_per_sentinel_per_day !== null) {
      message.maxHidesPerSentinelPerDay = object.max_hides_per_sentinel_per_day;
    }
    if (object.sentinel_unhide_window_blocks !== undefined && object.sentinel_unhide_window_blocks !== null) {
      message.sentinelUnhideWindowBlocks = BigInt(object.sentinel_unhide_window_blocks);
    }
    if (object.hide_expiry_blocks !== undefined && object.hide_expiry_blocks !== null) {
      message.hideExpiryBlocks = BigInt(object.hide_expiry_blocks);
    }
    if (object.sentinel_hide_commit_dream !== undefined && object.sentinel_hide_commit_dream !== null) {
      message.sentinelHideCommitDream = object.sentinel_hide_commit_dream;
    }
    if (object.max_issue_batch_size !== undefined && object.max_issue_batch_size !== null) {
      message.maxIssueBatchSize = object.max_issue_batch_size;
    }
    if (object.max_schedule_stages !== undefined && object.max_schedule_stages !== null) {
      message.maxScheduleStages = object.max_schedule_stages;
    }
    if (object.max_media_proposals_per_token !== undefined && object.max_media_proposals_per_token !== null) {
      message.maxMediaProposalsPerToken = object.max_media_proposals_per_token;
    }
    if (object.max_media_versions_per_token !== undefined && object.max_media_versions_per_token !== null) {
      message.maxMediaVersionsPerToken = object.max_media_versions_per_token;
    }
    if (object.renderers_enabled !== undefined && object.renderers_enabled !== null) {
      message.renderersEnabled = object.renderers_enabled;
    }
    if (object.max_nest_depth !== undefined && object.max_nest_depth !== null) {
      message.maxNestDepth = object.max_nest_depth;
    }
    if (object.max_nested_tokens !== undefined && object.max_nested_tokens !== null) {
      message.maxNestedTokens = object.max_nested_tokens;
    }
    if (object.max_rental_duration !== undefined && object.max_rental_duration !== null) {
      message.maxRentalDuration = BigInt(object.max_rental_duration);
    }
    if (object.max_craft_recipes_per_class !== undefined && object.max_craft_recipes_per_class !== null) {
      message.maxCraftRecipesPerClass = object.max_craft_recipes_per_class;
    }
    if (object.max_offers_per_bidder !== undefined && object.max_offers_per_bidder !== null) {
      message.maxOffersPerBidder = object.max_offers_per_bidder;
    }
    if (object.auction_extension !== undefined && object.auction_extension !== null) {
      message.auctionExtension = BigInt(object.auction_extension);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_trust_level_create_class = message.minTrustLevelCreateClass === 0 ? undefined : message.minTrustLevelCreateClass;
    obj.max_classes_per_creator = message.maxClassesPerCreator === 0 ? undefined : message.maxClassesPerCreator;
    obj.default_receive_policy = message.defaultReceivePolicy === 0 ? undefined : message.defaultReceivePolicy;
    obj.max_name_length = message.maxNameLength === 0 ? undefined : message.maxNameLength;
    obj.max_symbol_length = message.maxSymbolLength === 0 ? undefined : message.maxSymbolLength;
    obj.max_description_length = message.maxDescriptionLength === 0 ? undefined : message.maxDescriptionLength;
    obj.max_uri_length = message.maxUriLength === 0 ? undefined : message.maxUriLength;
    obj.max_attributes = message.maxAttributes === 0 ? undefined : message.maxAttributes;
    obj.max_attribute_key_length = message.maxAttributeKeyLength === 0 ? undefined : message.maxAttributeKeyLength;
    obj.max_attribute_value_length = message.maxAttributeValueLength === 0 ? undefined : message.maxAttributeValueLength;
    obj.max_minters_per_class = message.maxMintersPerClass === 0 ? undefined : message.maxMintersPerClass;
    obj.max_batch_size = message.maxBatchSize === 0 ? undefined : message.maxBatchSize;
    if (message.allowedUriSchemes) {
      obj.allowed_uri_schemes = message.allowedUriSchemes.map(e => e);
    } else {
      obj.allowed_uri_schemes = message.allowedUriSchemes;
    }
    obj.max_royalty_bps = message.maxRoyaltyBps === 0 ? undefined : message.maxRoyaltyBps;
    obj.sale_fee_bps = message.saleFeeBps === 0 ? undefined : message.saleFeeBps;
    obj.class_creation_fee = message.classCreationFee === "" ? undefined : message.classCreationFee;
    obj.token_deposit = message.tokenDeposit === "" ? undefined : message.tokenDeposit;
    obj.inbox_fee = message.inboxFee === "" ? undefined : message.inboxFee;
    obj.pending_ttl = message.pendingTtl !== BigInt(0) ? message.pendingTtl?.toString() : undefined;
    obj.max_listing_duration = message.maxListingDuration !== BigInt(0) ? message.maxListingDuration?.toString() : undefined;
    obj.max_pending_per_pair = message.maxPendingPerPair === 0 ? undefined : message.maxPendingPerPair;
    obj.max_inbox_per_recipient = message.maxInboxPerRecipient === 0 ? undefined : message.maxInboxPerRecipient;
    obj.max_expirations_per_block = message.maxExpirationsPerBlock === 0 ? undefined : message.maxExpirationsPerBlock;
    obj.market_enabled = message.marketEnabled === false ? undefined : message.marketEnabled;
    obj.public_mint_enabled = message.publicMintEnabled === false ? undefined : message.publicMintEnabled;
    obj.max_hides_per_sentinel_per_day = message.maxHidesPerSentinelPerDay === 0 ? undefined : message.maxHidesPerSentinelPerDay;
    obj.sentinel_unhide_window_blocks = message.sentinelUnhideWindowBlocks !== BigInt(0) ? message.sentinelUnhideWindowBlocks?.toString() : undefined;
    obj.hide_expiry_blocks = message.hideExpiryBlocks !== BigInt(0) ? message.hideExpiryBlocks?.toString() : undefined;
    obj.sentinel_hide_commit_dream = message.sentinelHideCommitDream === "" ? undefined : message.sentinelHideCommitDream;
    obj.max_issue_batch_size = message.maxIssueBatchSize === 0 ? undefined : message.maxIssueBatchSize;
    obj.max_schedule_stages = message.maxScheduleStages === 0 ? undefined : message.maxScheduleStages;
    obj.max_media_proposals_per_token = message.maxMediaProposalsPerToken === 0 ? undefined : message.maxMediaProposalsPerToken;
    obj.max_media_versions_per_token = message.maxMediaVersionsPerToken === 0 ? undefined : message.maxMediaVersionsPerToken;
    obj.renderers_enabled = message.renderersEnabled === false ? undefined : message.renderersEnabled;
    obj.max_nest_depth = message.maxNestDepth === 0 ? undefined : message.maxNestDepth;
    obj.max_nested_tokens = message.maxNestedTokens === 0 ? undefined : message.maxNestedTokens;
    obj.max_rental_duration = message.maxRentalDuration !== BigInt(0) ? message.maxRentalDuration?.toString() : undefined;
    obj.max_craft_recipes_per_class = message.maxCraftRecipesPerClass === 0 ? undefined : message.maxCraftRecipesPerClass;
    obj.max_offers_per_bidder = message.maxOffersPerBidder === 0 ? undefined : message.maxOffersPerBidder;
    obj.auction_extension = message.auctionExtension !== BigInt(0) ? message.auctionExtension?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/artifact/Params",
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
      typeUrl: "/sparkdream.artifact.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseArtifactOperationalParams(): ArtifactOperationalParams {
  return {
    classCreationFee: "",
    tokenDeposit: "",
    inboxFee: "",
    pendingTtl: BigInt(0),
    maxListingDuration: BigInt(0),
    maxPendingPerPair: 0,
    maxInboxPerRecipient: 0,
    maxExpirationsPerBlock: 0,
    marketEnabled: false,
    publicMintEnabled: false,
    maxHidesPerSentinelPerDay: 0,
    sentinelUnhideWindowBlocks: BigInt(0),
    hideExpiryBlocks: BigInt(0),
    sentinelHideCommitDream: "",
    renderersEnabled: false
  };
}
/**
 * ArtifactOperationalParams is the subset of Params the Commons Operations
 * Committee may update (MsgUpdateOperationalParams). Full replacement: every
 * field must be supplied.
 * @name ArtifactOperationalParams
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ArtifactOperationalParams
 */
export const ArtifactOperationalParams = {
  typeUrl: "/sparkdream.artifact.v1.ArtifactOperationalParams",
  encode(message: ArtifactOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classCreationFee !== "") {
      writer.uint32(10).string(message.classCreationFee);
    }
    if (message.tokenDeposit !== "") {
      writer.uint32(18).string(message.tokenDeposit);
    }
    if (message.inboxFee !== "") {
      writer.uint32(26).string(message.inboxFee);
    }
    if (message.pendingTtl !== BigInt(0)) {
      writer.uint32(32).int64(message.pendingTtl);
    }
    if (message.maxListingDuration !== BigInt(0)) {
      writer.uint32(40).int64(message.maxListingDuration);
    }
    if (message.maxPendingPerPair !== 0) {
      writer.uint32(48).uint32(message.maxPendingPerPair);
    }
    if (message.maxInboxPerRecipient !== 0) {
      writer.uint32(56).uint32(message.maxInboxPerRecipient);
    }
    if (message.maxExpirationsPerBlock !== 0) {
      writer.uint32(64).uint32(message.maxExpirationsPerBlock);
    }
    if (message.marketEnabled === true) {
      writer.uint32(72).bool(message.marketEnabled);
    }
    if (message.publicMintEnabled === true) {
      writer.uint32(80).bool(message.publicMintEnabled);
    }
    if (message.maxHidesPerSentinelPerDay !== 0) {
      writer.uint32(88).uint32(message.maxHidesPerSentinelPerDay);
    }
    if (message.sentinelUnhideWindowBlocks !== BigInt(0)) {
      writer.uint32(96).int64(message.sentinelUnhideWindowBlocks);
    }
    if (message.hideExpiryBlocks !== BigInt(0)) {
      writer.uint32(104).int64(message.hideExpiryBlocks);
    }
    if (message.sentinelHideCommitDream !== "") {
      writer.uint32(114).string(message.sentinelHideCommitDream);
    }
    if (message.renderersEnabled === true) {
      writer.uint32(120).bool(message.renderersEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArtifactOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtifactOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classCreationFee = reader.string();
          break;
        case 2:
          message.tokenDeposit = reader.string();
          break;
        case 3:
          message.inboxFee = reader.string();
          break;
        case 4:
          message.pendingTtl = reader.int64();
          break;
        case 5:
          message.maxListingDuration = reader.int64();
          break;
        case 6:
          message.maxPendingPerPair = reader.uint32();
          break;
        case 7:
          message.maxInboxPerRecipient = reader.uint32();
          break;
        case 8:
          message.maxExpirationsPerBlock = reader.uint32();
          break;
        case 9:
          message.marketEnabled = reader.bool();
          break;
        case 10:
          message.publicMintEnabled = reader.bool();
          break;
        case 11:
          message.maxHidesPerSentinelPerDay = reader.uint32();
          break;
        case 12:
          message.sentinelUnhideWindowBlocks = reader.int64();
          break;
        case 13:
          message.hideExpiryBlocks = reader.int64();
          break;
        case 14:
          message.sentinelHideCommitDream = reader.string();
          break;
        case 15:
          message.renderersEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ArtifactOperationalParams>): ArtifactOperationalParams {
    const message = createBaseArtifactOperationalParams();
    message.classCreationFee = object.classCreationFee ?? "";
    message.tokenDeposit = object.tokenDeposit ?? "";
    message.inboxFee = object.inboxFee ?? "";
    message.pendingTtl = object.pendingTtl !== undefined && object.pendingTtl !== null ? BigInt(object.pendingTtl.toString()) : BigInt(0);
    message.maxListingDuration = object.maxListingDuration !== undefined && object.maxListingDuration !== null ? BigInt(object.maxListingDuration.toString()) : BigInt(0);
    message.maxPendingPerPair = object.maxPendingPerPair ?? 0;
    message.maxInboxPerRecipient = object.maxInboxPerRecipient ?? 0;
    message.maxExpirationsPerBlock = object.maxExpirationsPerBlock ?? 0;
    message.marketEnabled = object.marketEnabled ?? false;
    message.publicMintEnabled = object.publicMintEnabled ?? false;
    message.maxHidesPerSentinelPerDay = object.maxHidesPerSentinelPerDay ?? 0;
    message.sentinelUnhideWindowBlocks = object.sentinelUnhideWindowBlocks !== undefined && object.sentinelUnhideWindowBlocks !== null ? BigInt(object.sentinelUnhideWindowBlocks.toString()) : BigInt(0);
    message.hideExpiryBlocks = object.hideExpiryBlocks !== undefined && object.hideExpiryBlocks !== null ? BigInt(object.hideExpiryBlocks.toString()) : BigInt(0);
    message.sentinelHideCommitDream = object.sentinelHideCommitDream ?? "";
    message.renderersEnabled = object.renderersEnabled ?? false;
    return message;
  },
  fromAmino(object: ArtifactOperationalParamsAmino): ArtifactOperationalParams {
    const message = createBaseArtifactOperationalParams();
    if (object.class_creation_fee !== undefined && object.class_creation_fee !== null) {
      message.classCreationFee = object.class_creation_fee;
    }
    if (object.token_deposit !== undefined && object.token_deposit !== null) {
      message.tokenDeposit = object.token_deposit;
    }
    if (object.inbox_fee !== undefined && object.inbox_fee !== null) {
      message.inboxFee = object.inbox_fee;
    }
    if (object.pending_ttl !== undefined && object.pending_ttl !== null) {
      message.pendingTtl = BigInt(object.pending_ttl);
    }
    if (object.max_listing_duration !== undefined && object.max_listing_duration !== null) {
      message.maxListingDuration = BigInt(object.max_listing_duration);
    }
    if (object.max_pending_per_pair !== undefined && object.max_pending_per_pair !== null) {
      message.maxPendingPerPair = object.max_pending_per_pair;
    }
    if (object.max_inbox_per_recipient !== undefined && object.max_inbox_per_recipient !== null) {
      message.maxInboxPerRecipient = object.max_inbox_per_recipient;
    }
    if (object.max_expirations_per_block !== undefined && object.max_expirations_per_block !== null) {
      message.maxExpirationsPerBlock = object.max_expirations_per_block;
    }
    if (object.market_enabled !== undefined && object.market_enabled !== null) {
      message.marketEnabled = object.market_enabled;
    }
    if (object.public_mint_enabled !== undefined && object.public_mint_enabled !== null) {
      message.publicMintEnabled = object.public_mint_enabled;
    }
    if (object.max_hides_per_sentinel_per_day !== undefined && object.max_hides_per_sentinel_per_day !== null) {
      message.maxHidesPerSentinelPerDay = object.max_hides_per_sentinel_per_day;
    }
    if (object.sentinel_unhide_window_blocks !== undefined && object.sentinel_unhide_window_blocks !== null) {
      message.sentinelUnhideWindowBlocks = BigInt(object.sentinel_unhide_window_blocks);
    }
    if (object.hide_expiry_blocks !== undefined && object.hide_expiry_blocks !== null) {
      message.hideExpiryBlocks = BigInt(object.hide_expiry_blocks);
    }
    if (object.sentinel_hide_commit_dream !== undefined && object.sentinel_hide_commit_dream !== null) {
      message.sentinelHideCommitDream = object.sentinel_hide_commit_dream;
    }
    if (object.renderers_enabled !== undefined && object.renderers_enabled !== null) {
      message.renderersEnabled = object.renderers_enabled;
    }
    return message;
  },
  toAmino(message: ArtifactOperationalParams): ArtifactOperationalParamsAmino {
    const obj: any = {};
    obj.class_creation_fee = message.classCreationFee === "" ? undefined : message.classCreationFee;
    obj.token_deposit = message.tokenDeposit === "" ? undefined : message.tokenDeposit;
    obj.inbox_fee = message.inboxFee === "" ? undefined : message.inboxFee;
    obj.pending_ttl = message.pendingTtl !== BigInt(0) ? message.pendingTtl?.toString() : undefined;
    obj.max_listing_duration = message.maxListingDuration !== BigInt(0) ? message.maxListingDuration?.toString() : undefined;
    obj.max_pending_per_pair = message.maxPendingPerPair === 0 ? undefined : message.maxPendingPerPair;
    obj.max_inbox_per_recipient = message.maxInboxPerRecipient === 0 ? undefined : message.maxInboxPerRecipient;
    obj.max_expirations_per_block = message.maxExpirationsPerBlock === 0 ? undefined : message.maxExpirationsPerBlock;
    obj.market_enabled = message.marketEnabled === false ? undefined : message.marketEnabled;
    obj.public_mint_enabled = message.publicMintEnabled === false ? undefined : message.publicMintEnabled;
    obj.max_hides_per_sentinel_per_day = message.maxHidesPerSentinelPerDay === 0 ? undefined : message.maxHidesPerSentinelPerDay;
    obj.sentinel_unhide_window_blocks = message.sentinelUnhideWindowBlocks !== BigInt(0) ? message.sentinelUnhideWindowBlocks?.toString() : undefined;
    obj.hide_expiry_blocks = message.hideExpiryBlocks !== BigInt(0) ? message.hideExpiryBlocks?.toString() : undefined;
    obj.sentinel_hide_commit_dream = message.sentinelHideCommitDream === "" ? undefined : message.sentinelHideCommitDream;
    obj.renderers_enabled = message.renderersEnabled === false ? undefined : message.renderersEnabled;
    return obj;
  },
  fromAminoMsg(object: ArtifactOperationalParamsAminoMsg): ArtifactOperationalParams {
    return ArtifactOperationalParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ArtifactOperationalParamsProtoMsg): ArtifactOperationalParams {
    return ArtifactOperationalParams.decode(message.value);
  },
  toProto(message: ArtifactOperationalParams): Uint8Array {
    return ArtifactOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: ArtifactOperationalParams): ArtifactOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.ArtifactOperationalParams",
      value: ArtifactOperationalParams.encode(message).finish()
    };
  }
};