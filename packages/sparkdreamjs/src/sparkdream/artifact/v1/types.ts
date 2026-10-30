//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { ModerationReason } from "../../common/v1/moderation_reason";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ContentStatus is the moderation status of a class or token. */
export enum ContentStatus {
  CONTENT_STATUS_UNSPECIFIED = 0,
  CONTENT_STATUS_ACTIVE = 1,
  CONTENT_STATUS_HIDDEN = 2,
  UNRECOGNIZED = -1,
}
export const ContentStatusAmino = ContentStatus;
export function contentStatusFromJSON(object: any): ContentStatus {
  switch (object) {
    case 0:
    case "CONTENT_STATUS_UNSPECIFIED":
      return ContentStatus.CONTENT_STATUS_UNSPECIFIED;
    case 1:
    case "CONTENT_STATUS_ACTIVE":
      return ContentStatus.CONTENT_STATUS_ACTIVE;
    case 2:
    case "CONTENT_STATUS_HIDDEN":
      return ContentStatus.CONTENT_STATUS_HIDDEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContentStatus.UNRECOGNIZED;
  }
}
export function contentStatusToJSON(object: ContentStatus): string {
  switch (object) {
    case ContentStatus.CONTENT_STATUS_UNSPECIFIED:
      return "CONTENT_STATUS_UNSPECIFIED";
    case ContentStatus.CONTENT_STATUS_ACTIVE:
      return "CONTENT_STATUS_ACTIVE";
    case ContentStatus.CONTENT_STATUS_HIDDEN:
      return "CONTENT_STATUS_HIDDEN";
    case ContentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TokenLock is the single lock a token can hold at a time. Every lock is
 * exclusive: a locked token cannot be transferred, listed, burned or take a
 * second lock (docs/x-artifact-spec.md §7.2, §16.2).
 */
export enum TokenLock {
  TOKEN_LOCK_NONE = 0,
  TOKEN_LOCK_LISTED = 1,
  TOKEN_LOCK_PENDING_TRANSFER = 2,
  /** TOKEN_LOCK_RENTED - A renter holds the token's user right until the rental ends. */
  TOKEN_LOCK_RENTED = 3,
  /** TOKEN_LOCK_NESTED - The token sits inside another token (Token.parent) and moves with it. */
  TOKEN_LOCK_NESTED = 4,
  /** TOKEN_LOCK_AUCTION - The token is up for an English auction (Auction). */
  TOKEN_LOCK_AUCTION = 5,
  UNRECOGNIZED = -1,
}
export const TokenLockAmino = TokenLock;
export function tokenLockFromJSON(object: any): TokenLock {
  switch (object) {
    case 0:
    case "TOKEN_LOCK_NONE":
      return TokenLock.TOKEN_LOCK_NONE;
    case 1:
    case "TOKEN_LOCK_LISTED":
      return TokenLock.TOKEN_LOCK_LISTED;
    case 2:
    case "TOKEN_LOCK_PENDING_TRANSFER":
      return TokenLock.TOKEN_LOCK_PENDING_TRANSFER;
    case 3:
    case "TOKEN_LOCK_RENTED":
      return TokenLock.TOKEN_LOCK_RENTED;
    case 4:
    case "TOKEN_LOCK_NESTED":
      return TokenLock.TOKEN_LOCK_NESTED;
    case 5:
    case "TOKEN_LOCK_AUCTION":
      return TokenLock.TOKEN_LOCK_AUCTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenLock.UNRECOGNIZED;
  }
}
export function tokenLockToJSON(object: TokenLock): string {
  switch (object) {
    case TokenLock.TOKEN_LOCK_NONE:
      return "TOKEN_LOCK_NONE";
    case TokenLock.TOKEN_LOCK_LISTED:
      return "TOKEN_LOCK_LISTED";
    case TokenLock.TOKEN_LOCK_PENDING_TRANSFER:
      return "TOKEN_LOCK_PENDING_TRANSFER";
    case TokenLock.TOKEN_LOCK_RENTED:
      return "TOKEN_LOCK_RENTED";
    case TokenLock.TOKEN_LOCK_NESTED:
      return "TOKEN_LOCK_NESTED";
    case TokenLock.TOKEN_LOCK_AUCTION:
      return "TOKEN_LOCK_AUCTION";
    case TokenLock.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ReceivePolicy controls whether incoming tokens are delivered directly or
 * held in the recipient's inbox until accepted.
 */
export enum ReceivePolicy {
  /** RECEIVE_POLICY_UNSPECIFIED - Use params.default_receive_policy. */
  RECEIVE_POLICY_UNSPECIFIED = 0,
  /** RECEIVE_POLICY_OPEN - Accept every incoming token immediately. */
  RECEIVE_POLICY_OPEN = 1,
  /**
   * RECEIVE_POLICY_MEMBERS - Accept immediately from trusted senders (active x/rep members and council
   * bodies); everything else goes to the inbox.
   */
  RECEIVE_POLICY_MEMBERS = 2,
  /** RECEIVE_POLICY_INBOX - Every incoming token goes to the inbox. */
  RECEIVE_POLICY_INBOX = 3,
  UNRECOGNIZED = -1,
}
export const ReceivePolicyAmino = ReceivePolicy;
export function receivePolicyFromJSON(object: any): ReceivePolicy {
  switch (object) {
    case 0:
    case "RECEIVE_POLICY_UNSPECIFIED":
      return ReceivePolicy.RECEIVE_POLICY_UNSPECIFIED;
    case 1:
    case "RECEIVE_POLICY_OPEN":
      return ReceivePolicy.RECEIVE_POLICY_OPEN;
    case 2:
    case "RECEIVE_POLICY_MEMBERS":
      return ReceivePolicy.RECEIVE_POLICY_MEMBERS;
    case 3:
    case "RECEIVE_POLICY_INBOX":
      return ReceivePolicy.RECEIVE_POLICY_INBOX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReceivePolicy.UNRECOGNIZED;
  }
}
export function receivePolicyToJSON(object: ReceivePolicy): string {
  switch (object) {
    case ReceivePolicy.RECEIVE_POLICY_UNSPECIFIED:
      return "RECEIVE_POLICY_UNSPECIFIED";
    case ReceivePolicy.RECEIVE_POLICY_OPEN:
      return "RECEIVE_POLICY_OPEN";
    case ReceivePolicy.RECEIVE_POLICY_MEMBERS:
      return "RECEIVE_POLICY_MEMBERS";
    case ReceivePolicy.RECEIVE_POLICY_INBOX:
      return "RECEIVE_POLICY_INBOX";
    case ReceivePolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** InboxKind distinguishes the two kinds of pending inbox items. */
export enum InboxKind {
  INBOX_KIND_UNSPECIFIED = 0,
  INBOX_KIND_TRANSFER = 1,
  INBOX_KIND_MINT = 2,
  /** INBOX_KIND_UNIT_TRANSFER - Edition units (PendingUnits); inbox ref (0, pending_id). */
  INBOX_KIND_UNIT_TRANSFER = 3,
  INBOX_KIND_UNIT_MINT = 4,
  UNRECOGNIZED = -1,
}
export const InboxKindAmino = InboxKind;
export function inboxKindFromJSON(object: any): InboxKind {
  switch (object) {
    case 0:
    case "INBOX_KIND_UNSPECIFIED":
      return InboxKind.INBOX_KIND_UNSPECIFIED;
    case 1:
    case "INBOX_KIND_TRANSFER":
      return InboxKind.INBOX_KIND_TRANSFER;
    case 2:
    case "INBOX_KIND_MINT":
      return InboxKind.INBOX_KIND_MINT;
    case 3:
    case "INBOX_KIND_UNIT_TRANSFER":
      return InboxKind.INBOX_KIND_UNIT_TRANSFER;
    case 4:
    case "INBOX_KIND_UNIT_MINT":
      return InboxKind.INBOX_KIND_UNIT_MINT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InboxKind.UNRECOGNIZED;
  }
}
export function inboxKindToJSON(object: InboxKind): string {
  switch (object) {
    case InboxKind.INBOX_KIND_UNSPECIFIED:
      return "INBOX_KIND_UNSPECIFIED";
    case InboxKind.INBOX_KIND_TRANSFER:
      return "INBOX_KIND_TRANSFER";
    case InboxKind.INBOX_KIND_MINT:
      return "INBOX_KIND_MINT";
    case InboxKind.INBOX_KIND_UNIT_TRANSFER:
      return "INBOX_KIND_UNIT_TRANSFER";
    case InboxKind.INBOX_KIND_UNIT_MINT:
      return "INBOX_KIND_UNIT_MINT";
    case InboxKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** HideTargetKind is what a hide record targets. */
export enum HideTargetKind {
  HIDE_TARGET_KIND_UNSPECIFIED = 0,
  HIDE_TARGET_KIND_CLASS = 1,
  HIDE_TARGET_KIND_TOKEN = 2,
  /** HIDE_TARGET_KIND_EDITION - An edition of an EDITIONS class; token_id is the edition id. */
  HIDE_TARGET_KIND_EDITION = 3,
  UNRECOGNIZED = -1,
}
export const HideTargetKindAmino = HideTargetKind;
export function hideTargetKindFromJSON(object: any): HideTargetKind {
  switch (object) {
    case 0:
    case "HIDE_TARGET_KIND_UNSPECIFIED":
      return HideTargetKind.HIDE_TARGET_KIND_UNSPECIFIED;
    case 1:
    case "HIDE_TARGET_KIND_CLASS":
      return HideTargetKind.HIDE_TARGET_KIND_CLASS;
    case 2:
    case "HIDE_TARGET_KIND_TOKEN":
      return HideTargetKind.HIDE_TARGET_KIND_TOKEN;
    case 3:
    case "HIDE_TARGET_KIND_EDITION":
      return HideTargetKind.HIDE_TARGET_KIND_EDITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HideTargetKind.UNRECOGNIZED;
  }
}
export function hideTargetKindToJSON(object: HideTargetKind): string {
  switch (object) {
    case HideTargetKind.HIDE_TARGET_KIND_UNSPECIFIED:
      return "HIDE_TARGET_KIND_UNSPECIFIED";
    case HideTargetKind.HIDE_TARGET_KIND_CLASS:
      return "HIDE_TARGET_KIND_CLASS";
    case HideTargetKind.HIDE_TARGET_KIND_TOKEN:
      return "HIDE_TARGET_KIND_TOKEN";
    case HideTargetKind.HIDE_TARGET_KIND_EDITION:
      return "HIDE_TARGET_KIND_EDITION";
    case HideTargetKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** HideOutcome is the lifecycle state of a hide record. */
export enum HideOutcome {
  HIDE_OUTCOME_UNSPECIFIED = 0,
  /** HIDE_OUTCOME_PENDING - Hidden; awaiting self-correct, appeal or expiry. */
  HIDE_OUTCOME_PENDING = 1,
  /** HIDE_OUTCOME_UNHIDDEN - Sentinel self-correct or council unhide. */
  HIDE_OUTCOME_UNHIDDEN = 2,
  /** HIDE_OUTCOME_OVERTURNED - Appeal won (x/rep verdict OVERTURNED); content restored. */
  HIDE_OUTCOME_OVERTURNED = 3,
  /** HIDE_OUTCOME_UPHELD - Hide upheld on appeal (x/rep verdict UPHELD); metadata scrubbed. */
  HIDE_OUTCOME_UPHELD = 4,
  /** HIDE_OUTCOME_EXPIRED - No appeal before hide expiry; metadata scrubbed. */
  HIDE_OUTCOME_EXPIRED = 5,
  /** HIDE_OUTCOME_APPEAL_TIMEOUT - x/rep appeal timed out without a verdict; content restored. */
  HIDE_OUTCOME_APPEAL_TIMEOUT = 6,
  /** HIDE_OUTCOME_TARGET_BURNED - The holder burned the token before resolution. */
  HIDE_OUTCOME_TARGET_BURNED = 7,
  UNRECOGNIZED = -1,
}
export const HideOutcomeAmino = HideOutcome;
export function hideOutcomeFromJSON(object: any): HideOutcome {
  switch (object) {
    case 0:
    case "HIDE_OUTCOME_UNSPECIFIED":
      return HideOutcome.HIDE_OUTCOME_UNSPECIFIED;
    case 1:
    case "HIDE_OUTCOME_PENDING":
      return HideOutcome.HIDE_OUTCOME_PENDING;
    case 2:
    case "HIDE_OUTCOME_UNHIDDEN":
      return HideOutcome.HIDE_OUTCOME_UNHIDDEN;
    case 3:
    case "HIDE_OUTCOME_OVERTURNED":
      return HideOutcome.HIDE_OUTCOME_OVERTURNED;
    case 4:
    case "HIDE_OUTCOME_UPHELD":
      return HideOutcome.HIDE_OUTCOME_UPHELD;
    case 5:
    case "HIDE_OUTCOME_EXPIRED":
      return HideOutcome.HIDE_OUTCOME_EXPIRED;
    case 6:
    case "HIDE_OUTCOME_APPEAL_TIMEOUT":
      return HideOutcome.HIDE_OUTCOME_APPEAL_TIMEOUT;
    case 7:
    case "HIDE_OUTCOME_TARGET_BURNED":
      return HideOutcome.HIDE_OUTCOME_TARGET_BURNED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HideOutcome.UNRECOGNIZED;
  }
}
export function hideOutcomeToJSON(object: HideOutcome): string {
  switch (object) {
    case HideOutcome.HIDE_OUTCOME_UNSPECIFIED:
      return "HIDE_OUTCOME_UNSPECIFIED";
    case HideOutcome.HIDE_OUTCOME_PENDING:
      return "HIDE_OUTCOME_PENDING";
    case HideOutcome.HIDE_OUTCOME_UNHIDDEN:
      return "HIDE_OUTCOME_UNHIDDEN";
    case HideOutcome.HIDE_OUTCOME_OVERTURNED:
      return "HIDE_OUTCOME_OVERTURNED";
    case HideOutcome.HIDE_OUTCOME_UPHELD:
      return "HIDE_OUTCOME_UPHELD";
    case HideOutcome.HIDE_OUTCOME_EXPIRED:
      return "HIDE_OUTCOME_EXPIRED";
    case HideOutcome.HIDE_OUTCOME_APPEAL_TIMEOUT:
      return "HIDE_OUTCOME_APPEAL_TIMEOUT";
    case HideOutcome.HIDE_OUTCOME_TARGET_BURNED:
      return "HIDE_OUTCOME_TARGET_BURNED";
    case HideOutcome.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BurnAuthorization says who may burn a class's tokens. The zero value is
 * holder-only, so a class that never sets it keeps the default behaviour.
 */
export enum BurnAuthorization {
  /** BURN_AUTHORIZATION_HOLDER - Only the holder may burn (MsgBurn). The default. */
  BURN_AUTHORIZATION_HOLDER = 0,
  /** BURN_AUTHORIZATION_ISSUER - Only the class owner may burn (MsgRevoke); the holder cannot. */
  BURN_AUTHORIZATION_ISSUER = 1,
  /** BURN_AUTHORIZATION_HOLDER_OR_ISSUER - Either the holder (MsgBurn) or the class owner (MsgRevoke), alone. */
  BURN_AUTHORIZATION_HOLDER_OR_ISSUER = 2,
  /**
   * BURN_AUTHORIZATION_NEITHER - Nobody: the token is permanent. Its deposit is burned as a fee, and it
   * reaches nobody without their acceptance.
   */
  BURN_AUTHORIZATION_NEITHER = 3,
  UNRECOGNIZED = -1,
}
export const BurnAuthorizationAmino = BurnAuthorization;
export function burnAuthorizationFromJSON(object: any): BurnAuthorization {
  switch (object) {
    case 0:
    case "BURN_AUTHORIZATION_HOLDER":
      return BurnAuthorization.BURN_AUTHORIZATION_HOLDER;
    case 1:
    case "BURN_AUTHORIZATION_ISSUER":
      return BurnAuthorization.BURN_AUTHORIZATION_ISSUER;
    case 2:
    case "BURN_AUTHORIZATION_HOLDER_OR_ISSUER":
      return BurnAuthorization.BURN_AUTHORIZATION_HOLDER_OR_ISSUER;
    case 3:
    case "BURN_AUTHORIZATION_NEITHER":
      return BurnAuthorization.BURN_AUTHORIZATION_NEITHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BurnAuthorization.UNRECOGNIZED;
  }
}
export function burnAuthorizationToJSON(object: BurnAuthorization): string {
  switch (object) {
    case BurnAuthorization.BURN_AUTHORIZATION_HOLDER:
      return "BURN_AUTHORIZATION_HOLDER";
    case BurnAuthorization.BURN_AUTHORIZATION_ISSUER:
      return "BURN_AUTHORIZATION_ISSUER";
    case BurnAuthorization.BURN_AUTHORIZATION_HOLDER_OR_ISSUER:
      return "BURN_AUTHORIZATION_HOLDER_OR_ISSUER";
    case BurnAuthorization.BURN_AUTHORIZATION_NEITHER:
      return "BURN_AUTHORIZATION_NEITHER";
    case BurnAuthorization.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ExpiryMode says what happens to a token whose expires_at has passed. */
export enum ExpiryMode {
  /** EXPIRY_MODE_NONE - Tokens never expire. The default. */
  EXPIRY_MODE_NONE = 0,
  /**
   * EXPIRY_MODE_MARK - The token stays with its holder, marked expired: it cannot be redeemed,
   * listed or bought until renewed, but may be held or given away.
   */
  EXPIRY_MODE_MARK = 1,
  /** EXPIRY_MODE_BURN - The EndBlocker burns the token and refunds its deposit to the holder. */
  EXPIRY_MODE_BURN = 2,
  UNRECOGNIZED = -1,
}
export const ExpiryModeAmino = ExpiryMode;
export function expiryModeFromJSON(object: any): ExpiryMode {
  switch (object) {
    case 0:
    case "EXPIRY_MODE_NONE":
      return ExpiryMode.EXPIRY_MODE_NONE;
    case 1:
    case "EXPIRY_MODE_MARK":
      return ExpiryMode.EXPIRY_MODE_MARK;
    case 2:
    case "EXPIRY_MODE_BURN":
      return ExpiryMode.EXPIRY_MODE_BURN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExpiryMode.UNRECOGNIZED;
  }
}
export function expiryModeToJSON(object: ExpiryMode): string {
  switch (object) {
    case ExpiryMode.EXPIRY_MODE_NONE:
      return "EXPIRY_MODE_NONE";
    case ExpiryMode.EXPIRY_MODE_MARK:
      return "EXPIRY_MODE_MARK";
    case ExpiryMode.EXPIRY_MODE_BURN:
      return "EXPIRY_MODE_BURN";
    case ExpiryMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MintPricing is how the public mint price is derived. */
export enum MintPricing {
  /** MINT_PRICING_FIXED - Every token costs mint_policy.price. */
  MINT_PRICING_FIXED = 0,
  /** MINT_PRICING_LINEAR_SUPPLY - The k-th public mint (0-based) costs price + k * price_step. */
  MINT_PRICING_LINEAR_SUPPLY = 1,
  /**
   * MINT_PRICING_DUTCH - Dutch auction: price falls linearly from price at start_time to
   * floor_price at end_time. Both times are required.
   */
  MINT_PRICING_DUTCH = 2,
  UNRECOGNIZED = -1,
}
export const MintPricingAmino = MintPricing;
export function mintPricingFromJSON(object: any): MintPricing {
  switch (object) {
    case 0:
    case "MINT_PRICING_FIXED":
      return MintPricing.MINT_PRICING_FIXED;
    case 1:
    case "MINT_PRICING_LINEAR_SUPPLY":
      return MintPricing.MINT_PRICING_LINEAR_SUPPLY;
    case 2:
    case "MINT_PRICING_DUTCH":
      return MintPricing.MINT_PRICING_DUTCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MintPricing.UNRECOGNIZED;
  }
}
export function mintPricingToJSON(object: MintPricing): string {
  switch (object) {
    case MintPricing.MINT_PRICING_FIXED:
      return "MINT_PRICING_FIXED";
    case MintPricing.MINT_PRICING_LINEAR_SUPPLY:
      return "MINT_PRICING_LINEAR_SUPPLY";
    case MintPricing.MINT_PRICING_DUTCH:
      return "MINT_PRICING_DUTCH";
    case MintPricing.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** RevealKind is the commit-reveal scheme a class uses. */
export enum RevealKind {
  /** REVEAL_KIND_NONE - Metadata is set at mint. The default. */
  REVEAL_KIND_NONE = 0,
  /**
   * REVEAL_KIND_BLIND_METADATA - Blind mint: every token's metadata is committed in a Merkle root at
   * class creation and revealed per token (MsgReveal).
   */
  REVEAL_KIND_BLIND_METADATA = 1,
  /**
   * REVEAL_KIND_GENERATIVE_SEED - Generative: the class commits SHA-256(seed) at creation and reveals the
   * seed once (MsgRevealSeed); each token's seed derives from it.
   */
  REVEAL_KIND_GENERATIVE_SEED = 2,
  UNRECOGNIZED = -1,
}
export const RevealKindAmino = RevealKind;
export function revealKindFromJSON(object: any): RevealKind {
  switch (object) {
    case 0:
    case "REVEAL_KIND_NONE":
      return RevealKind.REVEAL_KIND_NONE;
    case 1:
    case "REVEAL_KIND_BLIND_METADATA":
      return RevealKind.REVEAL_KIND_BLIND_METADATA;
    case 2:
    case "REVEAL_KIND_GENERATIVE_SEED":
      return RevealKind.REVEAL_KIND_GENERATIVE_SEED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RevealKind.UNRECOGNIZED;
  }
}
export function revealKindToJSON(object: RevealKind): string {
  switch (object) {
    case RevealKind.REVEAL_KIND_NONE:
      return "REVEAL_KIND_NONE";
    case RevealKind.REVEAL_KIND_BLIND_METADATA:
      return "REVEAL_KIND_BLIND_METADATA";
    case RevealKind.REVEAL_KIND_GENERATIVE_SEED:
      return "REVEAL_KIND_GENERATIVE_SEED";
    case RevealKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TokenModel is how a class holds its tokens. Fixed at creation. */
export enum TokenModel {
  /** TOKEN_MODEL_UNIQUE - One owner per token id (Token). The default. */
  TOKEN_MODEL_UNIQUE = 0,
  /**
   * TOKEN_MODEL_EDITIONS - Semi-fungible: the class issues editions, and each edition id is held
   * as per-address balances of identical units (Edition, Balance).
   */
  TOKEN_MODEL_EDITIONS = 1,
  UNRECOGNIZED = -1,
}
export const TokenModelAmino = TokenModel;
export function tokenModelFromJSON(object: any): TokenModel {
  switch (object) {
    case 0:
    case "TOKEN_MODEL_UNIQUE":
      return TokenModel.TOKEN_MODEL_UNIQUE;
    case 1:
    case "TOKEN_MODEL_EDITIONS":
      return TokenModel.TOKEN_MODEL_EDITIONS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenModel.UNRECOGNIZED;
  }
}
export function tokenModelToJSON(object: TokenModel): string {
  switch (object) {
    case TokenModel.TOKEN_MODEL_UNIQUE:
      return "TOKEN_MODEL_UNIQUE";
    case TokenModel.TOKEN_MODEL_EDITIONS:
      return "TOKEN_MODEL_EDITIONS";
    case TokenModel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ExpiryPolicy is a class's token expiry rule, fixed at creation.
 * @name ExpiryPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ExpiryPolicy
 */
export interface ExpiryPolicy {
  mode: ExpiryMode;
  /**
   * Seconds a token lives from mint (and per renewal). Required when mode
   * is not NONE.
   */
  term: bigint;
  /**
   * What a holder pays the class per renewal; denom must be the bond denom.
   * May be zero. Issuer renewals are free.
   */
  renewalPrice: Coin;
}
export interface ExpiryPolicyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.ExpiryPolicy";
  value: Uint8Array;
}
/**
 * ExpiryPolicy is a class's token expiry rule, fixed at creation.
 * @name ExpiryPolicyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ExpiryPolicy
 */
export interface ExpiryPolicyAmino {
  mode?: ExpiryMode;
  /**
   * Seconds a token lives from mint (and per renewal). Required when mode
   * is not NONE.
   */
  term?: string;
  /**
   * What a holder pays the class per renewal; denom must be the bond denom.
   * May be zero. Issuer renewals are free.
   */
  renewal_price: CoinAmino;
}
export interface ExpiryPolicyAminoMsg {
  type: "/sparkdream.artifact.v1.ExpiryPolicy";
  value: ExpiryPolicyAmino;
}
/**
 * RevealPolicy is a class's commit-reveal state.
 * @name RevealPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RevealPolicy
 */
export interface RevealPolicy {
  kind: RevealKind;
  /**
   * Lowercase hex SHA-256: the Merkle root (BLIND_METADATA) or the seed
   * hash (GENERATIVE_SEED). Fixed at creation.
   */
  commitment: string;
  /**
   * Unix seconds. After it, the holder of an unrevealed token may burn it
   * for a full refund of the mint price and deposit. Fixed at creation.
   */
  deadline: bigint;
  /**
   * GENERATIVE_SEED only: block time of MsgRevealSeed, 0 until revealed.
   */
  revealedAt: bigint;
  /**
   * GENERATIVE_SEED only: the revealed seed (lowercase hex).
   */
  seed: string;
}
export interface RevealPolicyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.RevealPolicy";
  value: Uint8Array;
}
/**
 * RevealPolicy is a class's commit-reveal state.
 * @name RevealPolicyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RevealPolicy
 */
export interface RevealPolicyAmino {
  kind?: RevealKind;
  /**
   * Lowercase hex SHA-256: the Merkle root (BLIND_METADATA) or the seed
   * hash (GENERATIVE_SEED). Fixed at creation.
   */
  commitment?: string;
  /**
   * Unix seconds. After it, the holder of an unrevealed token may burn it
   * for a full refund of the mint price and deposit. Fixed at creation.
   */
  deadline?: string;
  /**
   * GENERATIVE_SEED only: block time of MsgRevealSeed, 0 until revealed.
   */
  revealed_at?: string;
  /**
   * GENERATIVE_SEED only: the revealed seed (lowercase hex).
   */
  seed?: string;
}
export interface RevealPolicyAminoMsg {
  type: "/sparkdream.artifact.v1.RevealPolicy";
  value: RevealPolicyAmino;
}
/**
 * Renderer names the pure Gno package x/gnovm evaluates at query time to
 * produce a token's displayed metadata. Fixed at creation.
 * @name Renderer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Renderer
 */
export interface Renderer {
  /**
   * Pure package path (gno.land/p/...); "" = no renderer.
   */
  pkgPath: string;
  /**
   * Lowercase hex SHA-256 over the package's source files (see
   * RendererSourceHash); must match the stored package.
   */
  sourceHash: string;
  /**
   * 0 = Render(classID, tokenID, seed, blockTime, height); 1 or 2 =
   * RenderState with the token's state document of that version as a
   * sixth argument (v2 adds x/season state and the nested contents).
   */
  stateVersion: number;
}
export interface RendererProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Renderer";
  value: Uint8Array;
}
/**
 * Renderer names the pure Gno package x/gnovm evaluates at query time to
 * produce a token's displayed metadata. Fixed at creation.
 * @name RendererAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Renderer
 */
export interface RendererAmino {
  /**
   * Pure package path (gno.land/p/...); "" = no renderer.
   */
  pkg_path?: string;
  /**
   * Lowercase hex SHA-256 over the package's source files (see
   * RendererSourceHash); must match the stored package.
   */
  source_hash?: string;
  /**
   * 0 = Render(classID, tokenID, seed, blockTime, height); 1 or 2 =
   * RenderState with the token's state document of that version as a
   * sixth argument (v2 adds x/season state and the nested contents).
   */
  state_version?: number;
}
export interface RendererAminoMsg {
  type: "/sparkdream.artifact.v1.Renderer";
  value: RendererAmino;
}
/**
 * MetadataStage is one step of a token's metadata schedule.
 * @name MetadataStage
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MetadataStage
 */
export interface MetadataStage {
  /**
   * Unix seconds from which this stage is displayed.
   */
  fromTime: bigint;
  metadata: TokenMetadata;
}
export interface MetadataStageProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MetadataStage";
  value: Uint8Array;
}
/**
 * MetadataStage is one step of a token's metadata schedule.
 * @name MetadataStageAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MetadataStage
 */
export interface MetadataStageAmino {
  /**
   * Unix seconds from which this stage is displayed.
   */
  from_time?: string;
  metadata: TokenMetadataAmino;
}
export interface MetadataStageAminoMsg {
  type: "/sparkdream.artifact.v1.MetadataStage";
  value: MetadataStageAmino;
}
/**
 * MediaProposal is a media version the class owner offered a token's holder.
 * @name MediaProposal
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MediaProposal
 */
export interface MediaProposal {
  classId: bigint;
  tokenId: bigint;
  /**
   * Per token, from Token.next_media_proposal_id.
   */
  id: bigint;
  proposer: string;
  metadata: TokenMetadata;
  createdAt: bigint;
}
export interface MediaProposalProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MediaProposal";
  value: Uint8Array;
}
/**
 * MediaProposal is a media version the class owner offered a token's holder.
 * @name MediaProposalAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MediaProposal
 */
export interface MediaProposalAmino {
  class_id?: string;
  token_id?: string;
  /**
   * Per token, from Token.next_media_proposal_id.
   */
  id?: string;
  proposer?: string;
  metadata: TokenMetadataAmino;
  created_at?: string;
}
export interface MediaProposalAminoMsg {
  type: "/sparkdream.artifact.v1.MediaProposal";
  value: MediaProposalAmino;
}
/**
 * ClassFlags are fixed at class creation and never change.
 * @name ClassFlags
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ClassFlags
 */
export interface ClassFlags {
  /**
   * false = soulbound: no transfer, listing or pending transfer.
   */
  transferable: boolean;
  /**
   * Who may burn tokens. ISSUER and HOLDER_OR_ISSUER require
   * transferable == false.
   */
  burnAuthorization: BurnAuthorization;
  /**
   * true = the class owner may edit token metadata until frozen.
   */
  tokenMetadataMutable: boolean;
  /**
   * true = mutual attestation: every mint waits for the recipient's
   * acceptance and either party may burn. Requires
   * burn_authorization == HOLDER_OR_ISSUER (hence non-transferable) and a
   * recipient other than the minter.
   */
  mutual: boolean;
  /**
   * true = the class owner or a listed minter may redeem tokens (MsgRedeem).
   */
  redeemable: boolean;
  /**
   * true = redeemed tokens stay transferable as souvenirs; false = a
   * redeemed token can no longer be transferred or listed. Requires
   * redeemable and transferable.
   */
  redeemedTransferable: boolean;
}
export interface ClassFlagsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.ClassFlags";
  value: Uint8Array;
}
/**
 * ClassFlags are fixed at class creation and never change.
 * @name ClassFlagsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ClassFlags
 */
export interface ClassFlagsAmino {
  /**
   * false = soulbound: no transfer, listing or pending transfer.
   */
  transferable?: boolean;
  /**
   * Who may burn tokens. ISSUER and HOLDER_OR_ISSUER require
   * transferable == false.
   */
  burn_authorization?: BurnAuthorization;
  /**
   * true = the class owner may edit token metadata until frozen.
   */
  token_metadata_mutable?: boolean;
  /**
   * true = mutual attestation: every mint waits for the recipient's
   * acceptance and either party may burn. Requires
   * burn_authorization == HOLDER_OR_ISSUER (hence non-transferable) and a
   * recipient other than the minter.
   */
  mutual?: boolean;
  /**
   * true = the class owner or a listed minter may redeem tokens (MsgRedeem).
   */
  redeemable?: boolean;
  /**
   * true = redeemed tokens stay transferable as souvenirs; false = a
   * redeemed token can no longer be transferred or listed. Requires
   * redeemable and transferable.
   */
  redeemed_transferable?: boolean;
}
export interface ClassFlagsAminoMsg {
  type: "/sparkdream.artifact.v1.ClassFlags";
  value: ClassFlagsAmino;
}
/**
 * MintPolicy configures public minting (MsgPublicMint).
 * @name MintPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintPolicy
 */
export interface MintPolicy {
  publicMintEnabled: boolean;
  /**
   * Per-token price; denom must be the bond denom. May be zero.
   */
  price: Coin;
  /**
   * Unix seconds; 0 = immediately.
   */
  startTime: bigint;
  /**
   * Unix seconds; 0 = no end.
   */
  endTime: bigint;
  /**
   * 0 = unlimited; counted per (class, address) over the class's life.
   */
  perAddressLimit: number;
  /**
   * Price curve. Fixed once public minting has opened.
   */
  pricing: MintPricing;
  /**
   * LINEAR_SUPPLY: bond-denom amount added per public mint so far.
   */
  priceStep: string;
  /**
   * DUTCH: bond-denom amount the price falls to at end_time (<= price).
   */
  floorPrice: string;
}
export interface MintPolicyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MintPolicy";
  value: Uint8Array;
}
/**
 * MintPolicy configures public minting (MsgPublicMint).
 * @name MintPolicyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintPolicy
 */
export interface MintPolicyAmino {
  public_mint_enabled?: boolean;
  /**
   * Per-token price; denom must be the bond denom. May be zero.
   */
  price: CoinAmino;
  /**
   * Unix seconds; 0 = immediately.
   */
  start_time?: string;
  /**
   * Unix seconds; 0 = no end.
   */
  end_time?: string;
  /**
   * 0 = unlimited; counted per (class, address) over the class's life.
   */
  per_address_limit?: number;
  /**
   * Price curve. Fixed once public minting has opened.
   */
  pricing?: MintPricing;
  /**
   * LINEAR_SUPPLY: bond-denom amount added per public mint so far.
   */
  price_step?: string;
  /**
   * DUTCH: bond-denom amount the price falls to at end_time (<= price).
   */
  floor_price?: string;
}
export interface MintPolicyAminoMsg {
  type: "/sparkdream.artifact.v1.MintPolicy";
  value: MintPolicyAmino;
}
/**
 * Class groups tokens issued under one set of rules.
 * @name Class
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Class
 */
export interface Class {
  id: bigint;
  owner: string;
  creator: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  tokenUriBase: string;
  flags: ClassFlags;
  metadataFrozen: boolean;
  /**
   * 0 = unlimited. Counts tokens ever issued (live + burned + reserved).
   */
  maxSupply: bigint;
  mintingClosed: boolean;
  nextTokenId: bigint;
  supply: bigint;
  reservedSupply: bigint;
  burned: bigint;
  minters: string[];
  mintPolicy: MintPolicy;
  payoutAddress: string;
  royaltyBps: number;
  /**
   * How the royalty is divided; weights sum to 10000.
   */
  royaltyRecipients: RoyaltyShare[];
  status: ContentStatus;
  mediaFlags: number;
  mediaRulesVersion: number;
  createdAt: bigint;
  updatedAt: bigint;
  /**
   * Fixed at creation.
   */
  expiry: ExpiryPolicy;
  /**
   * Kind, commitment and deadline fixed at creation; seed set by reveal.
   */
  reveal: RevealPolicy;
  /**
   * Fixed at creation.
   */
  renderer: Renderer;
  /**
   * One-way: false -> true. Freezes royalty_bps and royalty_recipients.
   */
  royaltyLocked: boolean;
  /**
   * Tokens sold through MsgPublicMint so far; drives LINEAR_SUPPLY pricing.
   */
  publicMinted: bigint;
  /**
   * Fixed at creation.
   */
  tokenModel: TokenModel;
  /**
   * Fixed at creation; tax_bps_per_year 0 = plain class.
   */
  harberger: HarbergerPolicy;
  /**
   * Set by the first craft into the class: recipes can then only be
   * removed.
   */
  craftingLocked: boolean;
  /**
   * Last assigned recipe id.
   */
  nextRecipeId: bigint;
}
export interface ClassProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Class";
  value: Uint8Array;
}
/**
 * Class groups tokens issued under one set of rules.
 * @name ClassAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Class
 */
export interface ClassAmino {
  id?: string;
  owner?: string;
  creator?: string;
  name?: string;
  symbol?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  token_uri_base?: string;
  flags: ClassFlagsAmino;
  metadata_frozen?: boolean;
  /**
   * 0 = unlimited. Counts tokens ever issued (live + burned + reserved).
   */
  max_supply?: string;
  minting_closed?: boolean;
  next_token_id?: string;
  supply?: string;
  reserved_supply?: string;
  burned?: string;
  minters?: string[];
  mint_policy: MintPolicyAmino;
  payout_address?: string;
  royalty_bps?: number;
  /**
   * How the royalty is divided; weights sum to 10000.
   */
  royalty_recipients?: RoyaltyShareAmino[];
  status?: ContentStatus;
  media_flags?: number;
  media_rules_version?: number;
  created_at?: string;
  updated_at?: string;
  /**
   * Fixed at creation.
   */
  expiry: ExpiryPolicyAmino;
  /**
   * Kind, commitment and deadline fixed at creation; seed set by reveal.
   */
  reveal: RevealPolicyAmino;
  /**
   * Fixed at creation.
   */
  renderer: RendererAmino;
  /**
   * One-way: false -> true. Freezes royalty_bps and royalty_recipients.
   */
  royalty_locked?: boolean;
  /**
   * Tokens sold through MsgPublicMint so far; drives LINEAR_SUPPLY pricing.
   */
  public_minted?: string;
  /**
   * Fixed at creation.
   */
  token_model?: TokenModel;
  /**
   * Fixed at creation; tax_bps_per_year 0 = plain class.
   */
  harberger: HarbergerPolicyAmino;
  /**
   * Set by the first craft into the class: recipes can then only be
   * removed.
   */
  crafting_locked?: boolean;
  /**
   * Last assigned recipe id.
   */
  next_recipe_id?: string;
}
export interface ClassAminoMsg {
  type: "/sparkdream.artifact.v1.Class";
  value: ClassAmino;
}
/**
 * RoyaltyShare is one recipient's part of a class royalty.
 * @name RoyaltyShare
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RoyaltyShare
 */
export interface RoyaltyShare {
  address: string;
  /**
   * Share of the royalty in basis points; a class's weights sum to 10000.
   */
  weightBps: number;
}
export interface RoyaltyShareProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.RoyaltyShare";
  value: Uint8Array;
}
/**
 * RoyaltyShare is one recipient's part of a class royalty.
 * @name RoyaltyShareAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RoyaltyShare
 */
export interface RoyaltyShareAmino {
  address?: string;
  /**
   * Share of the royalty in basis points; a class's weights sum to 10000.
   */
  weight_bps?: number;
}
export interface RoyaltyShareAminoMsg {
  type: "/sparkdream.artifact.v1.RoyaltyShare";
  value: RoyaltyShareAmino;
}
/**
 * Attribute is one key/value trait of a token.
 * @name Attribute
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Attribute
 */
export interface Attribute {
  key: string;
  value: string;
}
export interface AttributeProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Attribute";
  value: Uint8Array;
}
/**
 * Attribute is one key/value trait of a token.
 * @name AttributeAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Attribute
 */
export interface AttributeAmino {
  key?: string;
  value?: string;
}
export interface AttributeAminoMsg {
  type: "/sparkdream.artifact.v1.Attribute";
  value: AttributeAmino;
}
/**
 * TokenMetadata is the editable on-chain content of a token.
 * @name TokenMetadata
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenMetadata
 */
export interface TokenMetadata {
  name: string;
  description: string;
  uri: string;
  uriHash: string;
  attributes: Attribute[];
}
export interface TokenMetadataProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.TokenMetadata";
  value: Uint8Array;
}
/**
 * TokenMetadata is the editable on-chain content of a token.
 * @name TokenMetadataAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenMetadata
 */
export interface TokenMetadataAmino {
  name?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  attributes: AttributeAmino[];
}
export interface TokenMetadataAminoMsg {
  type: "/sparkdream.artifact.v1.TokenMetadata";
  value: TokenMetadataAmino;
}
/**
 * Token is one non-fungible token.
 * @name Token
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Token
 */
export interface Token {
  classId: bigint;
  id: bigint;
  owner: string;
  minter: string;
  metadata: TokenMetadata;
  metadataFrozen: boolean;
  lock: TokenLock;
  /**
   * Monotonic per token; bumped on every list / listing update.
   */
  listingSeq: bigint;
  /**
   * Storage deposit in the bond denom, held in the module account.
   */
  deposit: string;
  status: ContentStatus;
  mediaFlags: number;
  mediaRulesVersion: number;
  mintedAt: bigint;
  /**
   * Unix seconds; 0 = never expires.
   */
  expiresAt: bigint;
  /**
   * Unix seconds of MsgRedeem; 0 = not redeemed.
   */
  redeemedAt: bigint;
  /**
   * Metadata schedule fixed at mint; metadata is the stage before the
   * first from_time.
   */
  schedule: MetadataStage[];
  /**
   * Media versions the holder accepted, in acceptance order.
   */
  mediaVersions: TokenMetadata[];
  /**
   * 0 = metadata (or schedule); n = media_versions[n-1].
   */
  displayedVersion: number;
  /**
   * true until a BLIND_METADATA class reveals this token.
   */
  unrevealed: boolean;
  /**
   * Public-mint price held in the module account until the class or token
   * is revealed; refunded with the deposit if the holder burns an
   * unrevealed token after the reveal deadline. 0 otherwise.
   */
  paid: string;
  nextMediaProposalId: bigint;
  /**
   * Harberger classes only: the self-assessment and tax status.
   */
  harberger?: HarbergerState;
  /**
   * Set while nested (lock = NESTED): the token this one sits in.
   */
  parent?: TokenRef;
  /**
   * Tokens nested under this one, at any depth.
   */
  descendants: number;
}
export interface TokenProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Token";
  value: Uint8Array;
}
/**
 * Token is one non-fungible token.
 * @name TokenAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Token
 */
export interface TokenAmino {
  class_id?: string;
  id?: string;
  owner?: string;
  minter?: string;
  metadata: TokenMetadataAmino;
  metadata_frozen?: boolean;
  lock?: TokenLock;
  /**
   * Monotonic per token; bumped on every list / listing update.
   */
  listing_seq?: string;
  /**
   * Storage deposit in the bond denom, held in the module account.
   */
  deposit?: string;
  status?: ContentStatus;
  media_flags?: number;
  media_rules_version?: number;
  minted_at?: string;
  /**
   * Unix seconds; 0 = never expires.
   */
  expires_at?: string;
  /**
   * Unix seconds of MsgRedeem; 0 = not redeemed.
   */
  redeemed_at?: string;
  /**
   * Metadata schedule fixed at mint; metadata is the stage before the
   * first from_time.
   */
  schedule?: MetadataStageAmino[];
  /**
   * Media versions the holder accepted, in acceptance order.
   */
  media_versions?: TokenMetadataAmino[];
  /**
   * 0 = metadata (or schedule); n = media_versions[n-1].
   */
  displayed_version?: number;
  /**
   * true until a BLIND_METADATA class reveals this token.
   */
  unrevealed?: boolean;
  /**
   * Public-mint price held in the module account until the class or token
   * is revealed; refunded with the deposit if the holder burns an
   * unrevealed token after the reveal deadline. 0 otherwise.
   */
  paid?: string;
  next_media_proposal_id?: string;
  /**
   * Harberger classes only: the self-assessment and tax status.
   */
  harberger?: HarbergerStateAmino;
  /**
   * Set while nested (lock = NESTED): the token this one sits in.
   */
  parent?: TokenRefAmino;
  /**
   * Tokens nested under this one, at any depth.
   */
  descendants?: number;
}
export interface TokenAminoMsg {
  type: "/sparkdream.artifact.v1.Token";
  value: TokenAmino;
}
/**
 * TokenRef addresses one token.
 * @name TokenRef
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenRef
 */
export interface TokenRef {
  classId: bigint;
  tokenId: bigint;
}
export interface TokenRefProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.TokenRef";
  value: Uint8Array;
}
/**
 * TokenRef addresses one token.
 * @name TokenRefAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenRef
 */
export interface TokenRefAmino {
  class_id?: string;
  token_id?: string;
}
export interface TokenRefAminoMsg {
  type: "/sparkdream.artifact.v1.TokenRef";
  value: TokenRefAmino;
}
/**
 * PendingTransfer is an existing token awaiting the recipient's acceptance.
 * @name PendingTransfer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingTransfer
 */
export interface PendingTransfer {
  classId: bigint;
  tokenId: bigint;
  from: string;
  to: string;
  createdAt: bigint;
  expiresAt: bigint;
}
export interface PendingTransferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.PendingTransfer";
  value: Uint8Array;
}
/**
 * PendingTransfer is an existing token awaiting the recipient's acceptance.
 * @name PendingTransferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingTransfer
 */
export interface PendingTransferAmino {
  class_id?: string;
  token_id?: string;
  from?: string;
  to?: string;
  created_at?: string;
  expires_at?: string;
}
export interface PendingTransferAminoMsg {
  type: "/sparkdream.artifact.v1.PendingTransfer";
  value: PendingTransferAmino;
}
/**
 * PendingMint is a mint awaiting the recipient's acceptance. The token id is
 * reserved and the deposit escrowed; no Token exists until acceptance.
 * @name PendingMint
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingMint
 */
export interface PendingMint {
  classId: bigint;
  tokenId: bigint;
  minter: string;
  to: string;
  metadata: TokenMetadata;
  deposit: string;
  createdAt: bigint;
  expiresAt: bigint;
  schedule: MetadataStage[];
  unrevealed: boolean;
}
export interface PendingMintProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.PendingMint";
  value: Uint8Array;
}
/**
 * PendingMint is a mint awaiting the recipient's acceptance. The token id is
 * reserved and the deposit escrowed; no Token exists until acceptance.
 * @name PendingMintAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingMint
 */
export interface PendingMintAmino {
  class_id?: string;
  token_id?: string;
  minter?: string;
  to?: string;
  metadata: TokenMetadataAmino;
  deposit?: string;
  created_at?: string;
  expires_at?: string;
  schedule?: MetadataStageAmino[];
  unrevealed?: boolean;
}
export interface PendingMintAminoMsg {
  type: "/sparkdream.artifact.v1.PendingMint";
  value: PendingMintAmino;
}
/**
 * Listing is a fixed-price offer to sell. Nothing is escrowed.
 * @name Listing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Listing
 */
export interface Listing {
  classId: bigint;
  tokenId: bigint;
  seller: string;
  price: Coin;
  createdAt: bigint;
  expiresAt: bigint;
  /**
   * Equals Token.listing_seq at the last list/update; MsgBuy must match it.
   */
  nonce: bigint;
}
export interface ListingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Listing";
  value: Uint8Array;
}
/**
 * Listing is a fixed-price offer to sell. Nothing is escrowed.
 * @name ListingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Listing
 */
export interface ListingAmino {
  class_id?: string;
  token_id?: string;
  seller?: string;
  price: CoinAmino;
  created_at?: string;
  expires_at?: string;
  /**
   * Equals Token.listing_seq at the last list/update; MsgBuy must match it.
   */
  nonce?: string;
}
export interface ListingAminoMsg {
  type: "/sparkdream.artifact.v1.Listing";
  value: ListingAmino;
}
/**
 * PendingClassOwner is a proposed class ownership handover.
 * @name PendingClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingClassOwner
 */
export interface PendingClassOwner {
  classId: bigint;
  proposedOwner: string;
  expiresAt: bigint;
}
export interface PendingClassOwnerProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.PendingClassOwner";
  value: Uint8Array;
}
/**
 * PendingClassOwner is a proposed class ownership handover.
 * @name PendingClassOwnerAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingClassOwner
 */
export interface PendingClassOwnerAmino {
  class_id?: string;
  proposed_owner?: string;
  expires_at?: string;
}
export interface PendingClassOwnerAminoMsg {
  type: "/sparkdream.artifact.v1.PendingClassOwner";
  value: PendingClassOwnerAmino;
}
/**
 * HideRecord is the moderation record for a hidden class or token.
 * @name HideRecord
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HideRecord
 */
export interface HideRecord {
  id: bigint;
  targetKind: HideTargetKind;
  classId: bigint;
  /**
   * 0 for CLASS targets.
   */
  tokenId: bigint;
  /**
   * "" for a council hide.
   */
  sentinel: string;
  /**
   * DREAM reserved on the sentinel's bond; 0 for council hides.
   */
  committedAmount: string;
  reason: ModerationReason;
  reasonText: string;
  /**
   * Block height.
   */
  hiddenAt: bigint;
  /**
   * Block height of the hide expiry (unappealed hides only).
   */
  appealDeadline: bigint;
  appellant: string;
  appealed: boolean;
  /**
   * The x/rep GovActionAppeal id (ARTIFACT_HIDE) once appealed. x/rep holds
   * the appeal bond, seats the jury and applies the verdict.
   */
  appealId: bigint;
  outcome: HideOutcome;
}
export interface HideRecordProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.HideRecord";
  value: Uint8Array;
}
/**
 * HideRecord is the moderation record for a hidden class or token.
 * @name HideRecordAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HideRecord
 */
export interface HideRecordAmino {
  id?: string;
  target_kind?: HideTargetKind;
  class_id?: string;
  /**
   * 0 for CLASS targets.
   */
  token_id?: string;
  /**
   * "" for a council hide.
   */
  sentinel?: string;
  /**
   * DREAM reserved on the sentinel's bond; 0 for council hides.
   */
  committed_amount?: string;
  reason?: ModerationReason;
  reason_text?: string;
  /**
   * Block height.
   */
  hidden_at?: string;
  /**
   * Block height of the hide expiry (unappealed hides only).
   */
  appeal_deadline?: string;
  appellant?: string;
  appealed?: boolean;
  /**
   * The x/rep GovActionAppeal id (ARTIFACT_HIDE) once appealed. x/rep holds
   * the appeal bond, seats the jury and applies the verdict.
   */
  appeal_id?: string;
  outcome?: HideOutcome;
}
export interface HideRecordAminoMsg {
  type: "/sparkdream.artifact.v1.HideRecord";
  value: HideRecordAmino;
}
/**
 * ReceivePolicyEntry is a genesis export entry.
 * @name ReceivePolicyEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ReceivePolicyEntry
 */
export interface ReceivePolicyEntry {
  address: string;
  policy: ReceivePolicy;
}
export interface ReceivePolicyEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.ReceivePolicyEntry";
  value: Uint8Array;
}
/**
 * ReceivePolicyEntry is a genesis export entry.
 * @name ReceivePolicyEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ReceivePolicyEntry
 */
export interface ReceivePolicyEntryAmino {
  address?: string;
  policy?: ReceivePolicy;
}
export interface ReceivePolicyEntryAminoMsg {
  type: "/sparkdream.artifact.v1.ReceivePolicyEntry";
  value: ReceivePolicyEntryAmino;
}
/**
 * PublicMintCountEntry is a genesis export entry.
 * @name PublicMintCountEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PublicMintCountEntry
 */
export interface PublicMintCountEntry {
  classId: bigint;
  address: string;
  count: number;
}
export interface PublicMintCountEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.PublicMintCountEntry";
  value: Uint8Array;
}
/**
 * PublicMintCountEntry is a genesis export entry.
 * @name PublicMintCountEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PublicMintCountEntry
 */
export interface PublicMintCountEntryAmino {
  class_id?: string;
  address?: string;
  count?: number;
}
export interface PublicMintCountEntryAminoMsg {
  type: "/sparkdream.artifact.v1.PublicMintCountEntry";
  value: PublicMintCountEntryAmino;
}
/**
 * QueueCursor is a class drain-queue cursor (genesis export entry).
 * @name QueueCursor
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueueCursor
 */
export interface QueueCursor {
  classId: bigint;
  cursor: bigint;
}
export interface QueueCursorProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueueCursor";
  value: Uint8Array;
}
/**
 * QueueCursor is a class drain-queue cursor (genesis export entry).
 * @name QueueCursorAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueueCursor
 */
export interface QueueCursorAmino {
  class_id?: string;
  cursor?: string;
}
export interface QueueCursorAminoMsg {
  type: "/sparkdream.artifact.v1.QueueCursor";
  value: QueueCursorAmino;
}
/**
 * SentinelDailyHideEntry is a genesis export entry.
 * @name SentinelDailyHideEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.SentinelDailyHideEntry
 */
export interface SentinelDailyHideEntry {
  sentinel: string;
  day: bigint;
  count: number;
}
export interface SentinelDailyHideEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.SentinelDailyHideEntry";
  value: Uint8Array;
}
/**
 * SentinelDailyHideEntry is a genesis export entry.
 * @name SentinelDailyHideEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.SentinelDailyHideEntry
 */
export interface SentinelDailyHideEntryAmino {
  sentinel?: string;
  day?: string;
  count?: number;
}
export interface SentinelDailyHideEntryAminoMsg {
  type: "/sparkdream.artifact.v1.SentinelDailyHideEntry";
  value: SentinelDailyHideEntryAmino;
}
/**
 * HarbergerPolicy makes a class's tokens partially commonly owned: each
 * holder self-assesses a price, anyone may buy the token at that price at
 * any time, and the holder pays a yearly tax on it to the community pool
 * through an x/session RecurringPull. Fixed at creation; tax_bps_per_year 0
 * means a plain class.
 * @name HarbergerPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HarbergerPolicy
 */
export interface HarbergerPolicy {
  /**
   * Yearly tax on the assessed price, in basis points.
   */
  taxBpsPerYear: number;
  /**
   * Seconds between tax pulls; the RecurringPull period must equal it.
   */
  taxPeriod: bigint;
  /**
   * Seconds over which the price falls linearly to zero after a missed
   * payment (foreclosure).
   */
  foreclosureDuration: bigint;
}
export interface HarbergerPolicyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.HarbergerPolicy";
  value: Uint8Array;
}
/**
 * HarbergerPolicy makes a class's tokens partially commonly owned: each
 * holder self-assesses a price, anyone may buy the token at that price at
 * any time, and the holder pays a yearly tax on it to the community pool
 * through an x/session RecurringPull. Fixed at creation; tax_bps_per_year 0
 * means a plain class.
 * @name HarbergerPolicyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HarbergerPolicy
 */
export interface HarbergerPolicyAmino {
  /**
   * Yearly tax on the assessed price, in basis points.
   */
  tax_bps_per_year?: number;
  /**
   * Seconds between tax pulls; the RecurringPull period must equal it.
   */
  tax_period?: string;
  /**
   * Seconds over which the price falls linearly to zero after a missed
   * payment (foreclosure).
   */
  foreclosure_duration?: string;
}
export interface HarbergerPolicyAminoMsg {
  type: "/sparkdream.artifact.v1.HarbergerPolicy";
  value: HarbergerPolicyAmino;
}
/**
 * HarbergerState is a Harberger token's self-assessment and tax status.
 * @name HarbergerState
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HarbergerState
 */
export interface HarbergerState {
  /**
   * The self-assessed price buyers pay (bond denom).
   */
  price: string;
  /**
   * The x/session RecurringPull that pays the tax; 0 = none.
   */
  grantId: bigint;
  /**
   * Unix seconds of the next tax pull; 0 when no grant is set.
   */
  nextDue: bigint;
  /**
   * Unix seconds until which a holder without a grant is not foreclosed
   * (one tax period after the token arrived).
   */
  graceUntil: bigint;
  /**
   * Unix seconds from which the price falls; 0 = not foreclosed.
   */
  foreclosedAt: bigint;
  /**
   * Tax paid by the current holder so far.
   */
  taxPaid: string;
}
export interface HarbergerStateProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.HarbergerState";
  value: Uint8Array;
}
/**
 * HarbergerState is a Harberger token's self-assessment and tax status.
 * @name HarbergerStateAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HarbergerState
 */
export interface HarbergerStateAmino {
  /**
   * The self-assessed price buyers pay (bond denom).
   */
  price?: string;
  /**
   * The x/session RecurringPull that pays the tax; 0 = none.
   */
  grant_id?: string;
  /**
   * Unix seconds of the next tax pull; 0 when no grant is set.
   */
  next_due?: string;
  /**
   * Unix seconds until which a holder without a grant is not foreclosed
   * (one tax period after the token arrived).
   */
  grace_until?: string;
  /**
   * Unix seconds from which the price falls; 0 = not foreclosed.
   */
  foreclosed_at?: string;
  /**
   * Tax paid by the current holder so far.
   */
  tax_paid?: string;
}
export interface HarbergerStateAminoMsg {
  type: "/sparkdream.artifact.v1.HarbergerState";
  value: HarbergerStateAmino;
}
/**
 * Rental is an active time-limited user right on one token. The token is
 * RENTED-locked: it cannot move, be listed, burned or nested until the
 * rental ends.
 * @name Rental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Rental
 */
export interface Rental {
  classId: bigint;
  tokenId: bigint;
  owner: string;
  /**
   * The renter.
   */
  user: string;
  startedAt: bigint;
  expiresAt: bigint;
  /**
   * Whether the owner may end the rental before expires_at.
   */
  ownerMayEnd: boolean;
  price: Coin;
}
export interface RentalProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Rental";
  value: Uint8Array;
}
/**
 * Rental is an active time-limited user right on one token. The token is
 * RENTED-locked: it cannot move, be listed, burned or nested until the
 * rental ends.
 * @name RentalAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Rental
 */
export interface RentalAmino {
  class_id?: string;
  token_id?: string;
  owner?: string;
  /**
   * The renter.
   */
  user?: string;
  started_at?: string;
  expires_at?: string;
  /**
   * Whether the owner may end the rental before expires_at.
   */
  owner_may_end?: boolean;
  price: CoinAmino;
}
export interface RentalAminoMsg {
  type: "/sparkdream.artifact.v1.Rental";
  value: RentalAmino;
}
/**
 * RentalOffer is an owner's standing offer to rent a token out. Nothing is
 * locked or escrowed; MsgAcceptRental settles it atomically.
 * @name RentalOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RentalOffer
 */
export interface RentalOffer {
  classId: bigint;
  tokenId: bigint;
  owner: string;
  /**
   * Who may accept; "" = anyone.
   */
  user: string;
  /**
   * Paid by the renter at acceptance; may be zero.
   */
  price: Coin;
  /**
   * Seconds the rental lasts from acceptance.
   */
  duration: bigint;
  ownerMayEnd: boolean;
  createdAt: bigint;
  expiresAt: bigint;
  /**
   * Equals Token.listing_seq when the offer was made; MsgAcceptRental must
   * match it.
   */
  nonce: bigint;
}
export interface RentalOfferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.RentalOffer";
  value: Uint8Array;
}
/**
 * RentalOffer is an owner's standing offer to rent a token out. Nothing is
 * locked or escrowed; MsgAcceptRental settles it atomically.
 * @name RentalOfferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RentalOffer
 */
export interface RentalOfferAmino {
  class_id?: string;
  token_id?: string;
  owner?: string;
  /**
   * Who may accept; "" = anyone.
   */
  user?: string;
  /**
   * Paid by the renter at acceptance; may be zero.
   */
  price: CoinAmino;
  /**
   * Seconds the rental lasts from acceptance.
   */
  duration?: string;
  owner_may_end?: boolean;
  created_at?: string;
  expires_at?: string;
  /**
   * Equals Token.listing_seq when the offer was made; MsgAcceptRental must
   * match it.
   */
  nonce?: string;
}
export interface RentalOfferAminoMsg {
  type: "/sparkdream.artifact.v1.RentalOffer";
  value: RentalOfferAmino;
}
/**
 * ImpactClaim describes a piece of work an edition certifies (an impact
 * certificate). Holders of the edition's units share whatever retroactive
 * funders pay to it (MsgFundEdition); DREAM never touches a certificate.
 * @name ImpactClaim
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ImpactClaim
 */
export interface ImpactClaim {
  /**
   * What was done.
   */
  scope: string;
  /**
   * Who did it; at most MaxImpactContributors addresses.
   */
  contributors: string[];
  /**
   * Unix seconds; 0 = unset. work_start <= work_end when both are set.
   */
  workStart: bigint;
  workEnd: bigint;
  /**
   * A completed x/rep initiative this certificate is for; 0 = none. The
   * initiative's assignee issues it, at most once per initiative.
   */
  initiativeId: bigint;
}
export interface ImpactClaimProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.ImpactClaim";
  value: Uint8Array;
}
/**
 * ImpactClaim describes a piece of work an edition certifies (an impact
 * certificate). Holders of the edition's units share whatever retroactive
 * funders pay to it (MsgFundEdition); DREAM never touches a certificate.
 * @name ImpactClaimAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ImpactClaim
 */
export interface ImpactClaimAmino {
  /**
   * What was done.
   */
  scope?: string;
  /**
   * Who did it; at most MaxImpactContributors addresses.
   */
  contributors?: string[];
  /**
   * Unix seconds; 0 = unset. work_start <= work_end when both are set.
   */
  work_start?: string;
  work_end?: string;
  /**
   * A completed x/rep initiative this certificate is for; 0 = none. The
   * initiative's assignee issues it, at most once per initiative.
   */
  initiative_id?: string;
}
export interface ImpactClaimAminoMsg {
  type: "/sparkdream.artifact.v1.ImpactClaim";
  value: ImpactClaimAmino;
}
/**
 * Edition is one semi-fungible token id of an EDITIONS class: identical
 * units held as per-address balances.
 * @name Edition
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Edition
 */
export interface Edition {
  classId: bigint;
  /**
   * From Class.next_token_id (editions and tokens share the id space).
   */
  id: bigint;
  creator: string;
  metadata: TokenMetadata;
  metadataFrozen: boolean;
  /**
   * 0 = unlimited. Counts units ever issued (supply + burned + reserved);
   * may only be lowered.
   */
  maxSupply: bigint;
  /**
   * Units in balances (free or locked in listings and pending transfers).
   */
  supply: bigint;
  burned: bigint;
  /**
   * Units in pending mints.
   */
  reserved: bigint;
  status: ContentStatus;
  mediaFlags: number;
  mediaRulesVersion: number;
  createdAt: bigint;
  claim: ImpactClaim;
  /**
   * Retro-funding accumulator: SPARK per unit, scaled by RewardScale.
   */
  rewardPerUnit: string;
  /**
   * Lifetime SPARK paid to the edition's holders by retro funders.
   */
  rewardsFunded: string;
  /**
   * Addresses holding a balance record.
   */
  holders: bigint;
}
export interface EditionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Edition";
  value: Uint8Array;
}
/**
 * Edition is one semi-fungible token id of an EDITIONS class: identical
 * units held as per-address balances.
 * @name EditionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Edition
 */
export interface EditionAmino {
  class_id?: string;
  /**
   * From Class.next_token_id (editions and tokens share the id space).
   */
  id?: string;
  creator?: string;
  metadata: TokenMetadataAmino;
  metadata_frozen?: boolean;
  /**
   * 0 = unlimited. Counts units ever issued (supply + burned + reserved);
   * may only be lowered.
   */
  max_supply?: string;
  /**
   * Units in balances (free or locked in listings and pending transfers).
   */
  supply?: string;
  burned?: string;
  /**
   * Units in pending mints.
   */
  reserved?: string;
  status?: ContentStatus;
  media_flags?: number;
  media_rules_version?: number;
  created_at?: string;
  claim: ImpactClaimAmino;
  /**
   * Retro-funding accumulator: SPARK per unit, scaled by RewardScale.
   */
  reward_per_unit?: string;
  /**
   * Lifetime SPARK paid to the edition's holders by retro funders.
   */
  rewards_funded?: string;
  /**
   * Addresses holding a balance record.
   */
  holders?: string;
}
export interface EditionAminoMsg {
  type: "/sparkdream.artifact.v1.Edition";
  value: EditionAmino;
}
/**
 * Balance is one address's units of one edition.
 * @name Balance
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Balance
 */
export interface Balance {
  classId: bigint;
  editionId: bigint;
  owner: string;
  /**
   * Units free to move.
   */
  amount: bigint;
  /**
   * Units locked in listings and pending transfers.
   */
  locked: bigint;
  /**
   * Storage deposit for this record, refunded to the holder who empties it.
   */
  deposit: string;
  /**
   * Edition.reward_per_unit when the record was last settled.
   */
  rewardDebt: string;
  /**
   * Settled retro-funding rewards not yet claimed (bond denom).
   */
  unclaimed: string;
}
export interface BalanceProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Balance";
  value: Uint8Array;
}
/**
 * Balance is one address's units of one edition.
 * @name BalanceAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Balance
 */
export interface BalanceAmino {
  class_id?: string;
  edition_id?: string;
  owner?: string;
  /**
   * Units free to move.
   */
  amount?: string;
  /**
   * Units locked in listings and pending transfers.
   */
  locked?: string;
  /**
   * Storage deposit for this record, refunded to the holder who empties it.
   */
  deposit?: string;
  /**
   * Edition.reward_per_unit when the record was last settled.
   */
  reward_debt?: string;
  /**
   * Settled retro-funding rewards not yet claimed (bond denom).
   */
  unclaimed?: string;
}
export interface BalanceAminoMsg {
  type: "/sparkdream.artifact.v1.Balance";
  value: BalanceAmino;
}
/**
 * EditionRef addresses one edition.
 * @name EditionRef
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.EditionRef
 */
export interface EditionRef {
  classId: bigint;
  editionId: bigint;
}
export interface EditionRefProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.EditionRef";
  value: Uint8Array;
}
/**
 * EditionRef addresses one edition.
 * @name EditionRefAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.EditionRef
 */
export interface EditionRefAmino {
  class_id?: string;
  edition_id?: string;
}
export interface EditionRefAminoMsg {
  type: "/sparkdream.artifact.v1.EditionRef";
  value: EditionRefAmino;
}
/**
 * PendingUnits is a unit transfer or mint awaiting the recipient. Its inbox
 * ref is (class_id 0, token_id = id): class 0 is never a real class.
 * @name PendingUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingUnits
 */
export interface PendingUnits {
  id: bigint;
  /**
   * INBOX_KIND_UNIT_TRANSFER or INBOX_KIND_UNIT_MINT.
   */
  kind: InboxKind;
  classId: bigint;
  editionId: bigint;
  /**
   * Transfer sender, or minter.
   */
  from: string;
  to: string;
  amount: bigint;
  /**
   * Record deposit escrowed for the recipient; refunded to from if the
   * recipient already holds a record at acceptance, or on rejection.
   */
  deposit: string;
  createdAt: bigint;
  expiresAt: bigint;
}
export interface PendingUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.PendingUnits";
  value: Uint8Array;
}
/**
 * PendingUnits is a unit transfer or mint awaiting the recipient. Its inbox
 * ref is (class_id 0, token_id = id): class 0 is never a real class.
 * @name PendingUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingUnits
 */
export interface PendingUnitsAmino {
  id?: string;
  /**
   * INBOX_KIND_UNIT_TRANSFER or INBOX_KIND_UNIT_MINT.
   */
  kind?: InboxKind;
  class_id?: string;
  edition_id?: string;
  /**
   * Transfer sender, or minter.
   */
  from?: string;
  to?: string;
  amount?: string;
  /**
   * Record deposit escrowed for the recipient; refunded to from if the
   * recipient already holds a record at acceptance, or on rejection.
   */
  deposit?: string;
  created_at?: string;
  expires_at?: string;
}
export interface PendingUnitsAminoMsg {
  type: "/sparkdream.artifact.v1.PendingUnits";
  value: PendingUnitsAmino;
}
/**
 * UnitListing offers units of an edition at a fixed per-unit price. The
 * listed units are locked in the seller's balance; buyers may take part.
 * @name UnitListing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitListing
 */
export interface UnitListing {
  id: bigint;
  classId: bigint;
  editionId: bigint;
  seller: string;
  /**
   * Units still for sale.
   */
  quantity: bigint;
  unitPrice: Coin;
  createdAt: bigint;
  expiresAt: bigint;
}
export interface UnitListingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.UnitListing";
  value: Uint8Array;
}
/**
 * UnitListing offers units of an edition at a fixed per-unit price. The
 * listed units are locked in the seller's balance; buyers may take part.
 * @name UnitListingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitListing
 */
export interface UnitListingAmino {
  id?: string;
  class_id?: string;
  edition_id?: string;
  seller?: string;
  /**
   * Units still for sale.
   */
  quantity?: string;
  unit_price: CoinAmino;
  created_at?: string;
  expires_at?: string;
}
export interface UnitListingAminoMsg {
  type: "/sparkdream.artifact.v1.UnitListing";
  value: UnitListingAmino;
}
/**
 * CraftInput is one ingredient of a recipe: quantity tokens of a UNIQUE
 * class (edition_id 0), or quantity units of an edition.
 * @name CraftInput
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.CraftInput
 */
export interface CraftInput {
  classId: bigint;
  editionId: bigint;
  quantity: bigint;
}
export interface CraftInputProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.CraftInput";
  value: Uint8Array;
}
/**
 * CraftInput is one ingredient of a recipe: quantity tokens of a UNIQUE
 * class (edition_id 0), or quantity units of an edition.
 * @name CraftInputAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.CraftInput
 */
export interface CraftInputAmino {
  class_id?: string;
  edition_id?: string;
  quantity?: string;
}
export interface CraftInputAminoMsg {
  type: "/sparkdream.artifact.v1.CraftInput";
  value: CraftInputAmino;
}
/**
 * CraftRecipe burns its inputs to mint into the class it belongs to.
 * Recipes can be removed at any time but none can be added after the
 * class's first craft.
 * @name CraftRecipe
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.CraftRecipe
 */
export interface CraftRecipe {
  classId: bigint;
  id: bigint;
  inputs: CraftInput[];
  /**
   * UNIQUE target: the crafted token's metadata.
   */
  outputMetadata: TokenMetadata;
  /**
   * EDITIONS target: the edition and units crafted.
   */
  outputEditionId: bigint;
  outputQuantity: bigint;
  /**
   * Times crafted.
   */
  crafts: bigint;
}
export interface CraftRecipeProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.CraftRecipe";
  value: Uint8Array;
}
/**
 * CraftRecipe burns its inputs to mint into the class it belongs to.
 * Recipes can be removed at any time but none can be added after the
 * class's first craft.
 * @name CraftRecipeAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.CraftRecipe
 */
export interface CraftRecipeAmino {
  class_id?: string;
  id?: string;
  inputs?: CraftInputAmino[];
  /**
   * UNIQUE target: the crafted token's metadata.
   */
  output_metadata: TokenMetadataAmino;
  /**
   * EDITIONS target: the edition and units crafted.
   */
  output_edition_id?: string;
  output_quantity?: string;
  /**
   * Times crafted.
   */
  crafts?: string;
}
export interface CraftRecipeAminoMsg {
  type: "/sparkdream.artifact.v1.CraftRecipe";
  value: CraftRecipeAmino;
}
/**
 * Offer is an escrowed SPARK bid to buy a token (token_id set) or any
 * token of a class (token_id 0, a collection offer). The price waits in the
 * module account until the offer is accepted, cancelled or expires.
 * @name Offer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Offer
 */
export interface Offer {
  id: bigint;
  bidder: string;
  classId: bigint;
  /**
   * 0 = any token of the class.
   */
  tokenId: bigint;
  price: Coin;
  createdAt: bigint;
  expiresAt: bigint;
  /**
   * Token offers only, optional: the stored metadata the bidder saw.
   */
  expectedMetadataHash: string;
  /**
   * Token offers only: the contents hash of a token holding nested
   * tokens. A collection offer never buys a token holding anything.
   */
  expectedContentsHash: string;
}
export interface OfferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Offer";
  value: Uint8Array;
}
/**
 * Offer is an escrowed SPARK bid to buy a token (token_id set) or any
 * token of a class (token_id 0, a collection offer). The price waits in the
 * module account until the offer is accepted, cancelled or expires.
 * @name OfferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Offer
 */
export interface OfferAmino {
  id?: string;
  bidder?: string;
  class_id?: string;
  /**
   * 0 = any token of the class.
   */
  token_id?: string;
  price: CoinAmino;
  created_at?: string;
  expires_at?: string;
  /**
   * Token offers only, optional: the stored metadata the bidder saw.
   */
  expected_metadata_hash?: string;
  /**
   * Token offers only: the contents hash of a token holding nested
   * tokens. A collection offer never buys a token holding anything.
   */
  expected_contents_hash?: string;
}
export interface OfferAminoMsg {
  type: "/sparkdream.artifact.v1.Offer";
  value: OfferAmino;
}
/**
 * Auction is an English auction of one token: SPARK bids escrowed in the
 * module, each outbidding the last by min_increment_bps, the highest bid
 * settled at ends_at. A bid near the end extends it (anti-sniping).
 * @name Auction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Auction
 */
export interface Auction {
  id: bigint;
  classId: bigint;
  tokenId: bigint;
  seller: string;
  /**
   * The lowest acceptable first bid.
   */
  reservePrice: Coin;
  /**
   * Each bid must beat the current one by at least this much.
   */
  minIncrementBps: number;
  createdAt: bigint;
  endsAt: bigint;
  /**
   * "" until the first bid.
   */
  highBidder: string;
  highBid: string;
  bids: number;
  /**
   * The high bid's optional pins (MsgBid expected_metadata_hash /
   * expected_contents_hash). Settlement re-checks them and refunds the bid
   * instead of selling when the token no longer matches.
   */
  highBidMetadataHash: string;
  highBidContentsHash: string;
}
export interface AuctionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.Auction";
  value: Uint8Array;
}
/**
 * Auction is an English auction of one token: SPARK bids escrowed in the
 * module, each outbidding the last by min_increment_bps, the highest bid
 * settled at ends_at. A bid near the end extends it (anti-sniping).
 * @name AuctionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Auction
 */
export interface AuctionAmino {
  id?: string;
  class_id?: string;
  token_id?: string;
  seller?: string;
  /**
   * The lowest acceptable first bid.
   */
  reserve_price: CoinAmino;
  /**
   * Each bid must beat the current one by at least this much.
   */
  min_increment_bps?: number;
  created_at?: string;
  ends_at?: string;
  /**
   * "" until the first bid.
   */
  high_bidder?: string;
  high_bid?: string;
  bids?: number;
  /**
   * The high bid's optional pins (MsgBid expected_metadata_hash /
   * expected_contents_hash). Settlement re-checks them and refunds the bid
   * instead of selling when the token no longer matches.
   */
  high_bid_metadata_hash?: string;
  high_bid_contents_hash?: string;
}
export interface AuctionAminoMsg {
  type: "/sparkdream.artifact.v1.Auction";
  value: AuctionAmino;
}
function createBaseExpiryPolicy(): ExpiryPolicy {
  return {
    mode: 0,
    term: BigInt(0),
    renewalPrice: Coin.fromPartial({})
  };
}
/**
 * ExpiryPolicy is a class's token expiry rule, fixed at creation.
 * @name ExpiryPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ExpiryPolicy
 */
export const ExpiryPolicy = {
  typeUrl: "/sparkdream.artifact.v1.ExpiryPolicy",
  encode(message: ExpiryPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.term !== BigInt(0)) {
      writer.uint32(16).int64(message.term);
    }
    if (message.renewalPrice !== undefined) {
      Coin.encode(message.renewalPrice, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExpiryPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.term = reader.int64();
          break;
        case 3:
          message.renewalPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExpiryPolicy>): ExpiryPolicy {
    const message = createBaseExpiryPolicy();
    message.mode = object.mode ?? 0;
    message.term = object.term !== undefined && object.term !== null ? BigInt(object.term.toString()) : BigInt(0);
    message.renewalPrice = object.renewalPrice !== undefined && object.renewalPrice !== null ? Coin.fromPartial(object.renewalPrice) : undefined;
    return message;
  },
  fromAmino(object: ExpiryPolicyAmino): ExpiryPolicy {
    const message = createBaseExpiryPolicy();
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    if (object.term !== undefined && object.term !== null) {
      message.term = BigInt(object.term);
    }
    if (object.renewal_price !== undefined && object.renewal_price !== null) {
      message.renewalPrice = Coin.fromAmino(object.renewal_price);
    }
    return message;
  },
  toAmino(message: ExpiryPolicy): ExpiryPolicyAmino {
    const obj: any = {};
    obj.mode = message.mode === 0 ? undefined : message.mode;
    obj.term = message.term !== BigInt(0) ? message.term?.toString() : undefined;
    obj.renewal_price = message.renewalPrice ? Coin.toAmino(message.renewalPrice) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ExpiryPolicyAminoMsg): ExpiryPolicy {
    return ExpiryPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiryPolicyProtoMsg): ExpiryPolicy {
    return ExpiryPolicy.decode(message.value);
  },
  toProto(message: ExpiryPolicy): Uint8Array {
    return ExpiryPolicy.encode(message).finish();
  },
  toProtoMsg(message: ExpiryPolicy): ExpiryPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.ExpiryPolicy",
      value: ExpiryPolicy.encode(message).finish()
    };
  }
};
function createBaseRevealPolicy(): RevealPolicy {
  return {
    kind: 0,
    commitment: "",
    deadline: BigInt(0),
    revealedAt: BigInt(0),
    seed: ""
  };
}
/**
 * RevealPolicy is a class's commit-reveal state.
 * @name RevealPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RevealPolicy
 */
export const RevealPolicy = {
  typeUrl: "/sparkdream.artifact.v1.RevealPolicy",
  encode(message: RevealPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.commitment !== "") {
      writer.uint32(18).string(message.commitment);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(24).int64(message.deadline);
    }
    if (message.revealedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.revealedAt);
    }
    if (message.seed !== "") {
      writer.uint32(42).string(message.seed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevealPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevealPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.commitment = reader.string();
          break;
        case 3:
          message.deadline = reader.int64();
          break;
        case 4:
          message.revealedAt = reader.int64();
          break;
        case 5:
          message.seed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevealPolicy>): RevealPolicy {
    const message = createBaseRevealPolicy();
    message.kind = object.kind ?? 0;
    message.commitment = object.commitment ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.revealedAt = object.revealedAt !== undefined && object.revealedAt !== null ? BigInt(object.revealedAt.toString()) : BigInt(0);
    message.seed = object.seed ?? "";
    return message;
  },
  fromAmino(object: RevealPolicyAmino): RevealPolicy {
    const message = createBaseRevealPolicy();
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = object.commitment;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.revealed_at !== undefined && object.revealed_at !== null) {
      message.revealedAt = BigInt(object.revealed_at);
    }
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = object.seed;
    }
    return message;
  },
  toAmino(message: RevealPolicy): RevealPolicyAmino {
    const obj: any = {};
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.commitment = message.commitment === "" ? undefined : message.commitment;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.revealed_at = message.revealedAt !== BigInt(0) ? message.revealedAt?.toString() : undefined;
    obj.seed = message.seed === "" ? undefined : message.seed;
    return obj;
  },
  fromAminoMsg(object: RevealPolicyAminoMsg): RevealPolicy {
    return RevealPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: RevealPolicyProtoMsg): RevealPolicy {
    return RevealPolicy.decode(message.value);
  },
  toProto(message: RevealPolicy): Uint8Array {
    return RevealPolicy.encode(message).finish();
  },
  toProtoMsg(message: RevealPolicy): RevealPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.RevealPolicy",
      value: RevealPolicy.encode(message).finish()
    };
  }
};
function createBaseRenderer(): Renderer {
  return {
    pkgPath: "",
    sourceHash: "",
    stateVersion: 0
  };
}
/**
 * Renderer names the pure Gno package x/gnovm evaluates at query time to
 * produce a token's displayed metadata. Fixed at creation.
 * @name Renderer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Renderer
 */
export const Renderer = {
  typeUrl: "/sparkdream.artifact.v1.Renderer",
  encode(message: Renderer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pkgPath !== "") {
      writer.uint32(10).string(message.pkgPath);
    }
    if (message.sourceHash !== "") {
      writer.uint32(18).string(message.sourceHash);
    }
    if (message.stateVersion !== 0) {
      writer.uint32(24).uint32(message.stateVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Renderer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pkgPath = reader.string();
          break;
        case 2:
          message.sourceHash = reader.string();
          break;
        case 3:
          message.stateVersion = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Renderer>): Renderer {
    const message = createBaseRenderer();
    message.pkgPath = object.pkgPath ?? "";
    message.sourceHash = object.sourceHash ?? "";
    message.stateVersion = object.stateVersion ?? 0;
    return message;
  },
  fromAmino(object: RendererAmino): Renderer {
    const message = createBaseRenderer();
    if (object.pkg_path !== undefined && object.pkg_path !== null) {
      message.pkgPath = object.pkg_path;
    }
    if (object.source_hash !== undefined && object.source_hash !== null) {
      message.sourceHash = object.source_hash;
    }
    if (object.state_version !== undefined && object.state_version !== null) {
      message.stateVersion = object.state_version;
    }
    return message;
  },
  toAmino(message: Renderer): RendererAmino {
    const obj: any = {};
    obj.pkg_path = message.pkgPath === "" ? undefined : message.pkgPath;
    obj.source_hash = message.sourceHash === "" ? undefined : message.sourceHash;
    obj.state_version = message.stateVersion === 0 ? undefined : message.stateVersion;
    return obj;
  },
  fromAminoMsg(object: RendererAminoMsg): Renderer {
    return Renderer.fromAmino(object.value);
  },
  fromProtoMsg(message: RendererProtoMsg): Renderer {
    return Renderer.decode(message.value);
  },
  toProto(message: Renderer): Uint8Array {
    return Renderer.encode(message).finish();
  },
  toProtoMsg(message: Renderer): RendererProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Renderer",
      value: Renderer.encode(message).finish()
    };
  }
};
function createBaseMetadataStage(): MetadataStage {
  return {
    fromTime: BigInt(0),
    metadata: TokenMetadata.fromPartial({})
  };
}
/**
 * MetadataStage is one step of a token's metadata schedule.
 * @name MetadataStage
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MetadataStage
 */
export const MetadataStage = {
  typeUrl: "/sparkdream.artifact.v1.MetadataStage",
  encode(message: MetadataStage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromTime !== BigInt(0)) {
      writer.uint32(8).int64(message.fromTime);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetadataStage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataStage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromTime = reader.int64();
          break;
        case 2:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MetadataStage>): MetadataStage {
    const message = createBaseMetadataStage();
    message.fromTime = object.fromTime !== undefined && object.fromTime !== null ? BigInt(object.fromTime.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MetadataStageAmino): MetadataStage {
    const message = createBaseMetadataStage();
    if (object.from_time !== undefined && object.from_time !== null) {
      message.fromTime = BigInt(object.from_time);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MetadataStage): MetadataStageAmino {
    const obj: any = {};
    obj.from_time = message.fromTime !== BigInt(0) ? message.fromTime?.toString() : undefined;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MetadataStageAminoMsg): MetadataStage {
    return MetadataStage.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataStageProtoMsg): MetadataStage {
    return MetadataStage.decode(message.value);
  },
  toProto(message: MetadataStage): Uint8Array {
    return MetadataStage.encode(message).finish();
  },
  toProtoMsg(message: MetadataStage): MetadataStageProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MetadataStage",
      value: MetadataStage.encode(message).finish()
    };
  }
};
function createBaseMediaProposal(): MediaProposal {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    id: BigInt(0),
    proposer: "",
    metadata: TokenMetadata.fromPartial({}),
    createdAt: BigInt(0)
  };
}
/**
 * MediaProposal is a media version the class owner offered a token's holder.
 * @name MediaProposal
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MediaProposal
 */
export const MediaProposal = {
  typeUrl: "/sparkdream.artifact.v1.MediaProposal",
  encode(message: MediaProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.proposer !== "") {
      writer.uint32(34).string(message.proposer);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(48).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MediaProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.id = reader.uint64();
          break;
        case 4:
          message.proposer = reader.string();
          break;
        case 5:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MediaProposal>): MediaProposal {
    const message = createBaseMediaProposal();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MediaProposalAmino): MediaProposal {
    const message = createBaseMediaProposal();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: MediaProposal): MediaProposalAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MediaProposalAminoMsg): MediaProposal {
    return MediaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MediaProposalProtoMsg): MediaProposal {
    return MediaProposal.decode(message.value);
  },
  toProto(message: MediaProposal): Uint8Array {
    return MediaProposal.encode(message).finish();
  },
  toProtoMsg(message: MediaProposal): MediaProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MediaProposal",
      value: MediaProposal.encode(message).finish()
    };
  }
};
function createBaseClassFlags(): ClassFlags {
  return {
    transferable: false,
    burnAuthorization: 0,
    tokenMetadataMutable: false,
    mutual: false,
    redeemable: false,
    redeemedTransferable: false
  };
}
/**
 * ClassFlags are fixed at class creation and never change.
 * @name ClassFlags
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ClassFlags
 */
export const ClassFlags = {
  typeUrl: "/sparkdream.artifact.v1.ClassFlags",
  encode(message: ClassFlags, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferable === true) {
      writer.uint32(8).bool(message.transferable);
    }
    if (message.burnAuthorization !== 0) {
      writer.uint32(16).int32(message.burnAuthorization);
    }
    if (message.tokenMetadataMutable === true) {
      writer.uint32(24).bool(message.tokenMetadataMutable);
    }
    if (message.mutual === true) {
      writer.uint32(32).bool(message.mutual);
    }
    if (message.redeemable === true) {
      writer.uint32(40).bool(message.redeemable);
    }
    if (message.redeemedTransferable === true) {
      writer.uint32(48).bool(message.redeemedTransferable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassFlags {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferable = reader.bool();
          break;
        case 2:
          message.burnAuthorization = reader.int32() as any;
          break;
        case 3:
          message.tokenMetadataMutable = reader.bool();
          break;
        case 4:
          message.mutual = reader.bool();
          break;
        case 5:
          message.redeemable = reader.bool();
          break;
        case 6:
          message.redeemedTransferable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClassFlags>): ClassFlags {
    const message = createBaseClassFlags();
    message.transferable = object.transferable ?? false;
    message.burnAuthorization = object.burnAuthorization ?? 0;
    message.tokenMetadataMutable = object.tokenMetadataMutable ?? false;
    message.mutual = object.mutual ?? false;
    message.redeemable = object.redeemable ?? false;
    message.redeemedTransferable = object.redeemedTransferable ?? false;
    return message;
  },
  fromAmino(object: ClassFlagsAmino): ClassFlags {
    const message = createBaseClassFlags();
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    }
    if (object.burn_authorization !== undefined && object.burn_authorization !== null) {
      message.burnAuthorization = object.burn_authorization;
    }
    if (object.token_metadata_mutable !== undefined && object.token_metadata_mutable !== null) {
      message.tokenMetadataMutable = object.token_metadata_mutable;
    }
    if (object.mutual !== undefined && object.mutual !== null) {
      message.mutual = object.mutual;
    }
    if (object.redeemable !== undefined && object.redeemable !== null) {
      message.redeemable = object.redeemable;
    }
    if (object.redeemed_transferable !== undefined && object.redeemed_transferable !== null) {
      message.redeemedTransferable = object.redeemed_transferable;
    }
    return message;
  },
  toAmino(message: ClassFlags): ClassFlagsAmino {
    const obj: any = {};
    obj.transferable = message.transferable === false ? undefined : message.transferable;
    obj.burn_authorization = message.burnAuthorization === 0 ? undefined : message.burnAuthorization;
    obj.token_metadata_mutable = message.tokenMetadataMutable === false ? undefined : message.tokenMetadataMutable;
    obj.mutual = message.mutual === false ? undefined : message.mutual;
    obj.redeemable = message.redeemable === false ? undefined : message.redeemable;
    obj.redeemed_transferable = message.redeemedTransferable === false ? undefined : message.redeemedTransferable;
    return obj;
  },
  fromAminoMsg(object: ClassFlagsAminoMsg): ClassFlags {
    return ClassFlags.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassFlagsProtoMsg): ClassFlags {
    return ClassFlags.decode(message.value);
  },
  toProto(message: ClassFlags): Uint8Array {
    return ClassFlags.encode(message).finish();
  },
  toProtoMsg(message: ClassFlags): ClassFlagsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.ClassFlags",
      value: ClassFlags.encode(message).finish()
    };
  }
};
function createBaseMintPolicy(): MintPolicy {
  return {
    publicMintEnabled: false,
    price: Coin.fromPartial({}),
    startTime: BigInt(0),
    endTime: BigInt(0),
    perAddressLimit: 0,
    pricing: 0,
    priceStep: "",
    floorPrice: ""
  };
}
/**
 * MintPolicy configures public minting (MsgPublicMint).
 * @name MintPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintPolicy
 */
export const MintPolicy = {
  typeUrl: "/sparkdream.artifact.v1.MintPolicy",
  encode(message: MintPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publicMintEnabled === true) {
      writer.uint32(8).bool(message.publicMintEnabled);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.perAddressLimit !== 0) {
      writer.uint32(40).uint32(message.perAddressLimit);
    }
    if (message.pricing !== 0) {
      writer.uint32(48).int32(message.pricing);
    }
    if (message.priceStep !== "") {
      writer.uint32(58).string(message.priceStep);
    }
    if (message.floorPrice !== "") {
      writer.uint32(66).string(message.floorPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicMintEnabled = reader.bool();
          break;
        case 2:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.startTime = reader.int64();
          break;
        case 4:
          message.endTime = reader.int64();
          break;
        case 5:
          message.perAddressLimit = reader.uint32();
          break;
        case 6:
          message.pricing = reader.int32() as any;
          break;
        case 7:
          message.priceStep = reader.string();
          break;
        case 8:
          message.floorPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MintPolicy>): MintPolicy {
    const message = createBaseMintPolicy();
    message.publicMintEnabled = object.publicMintEnabled ?? false;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.perAddressLimit = object.perAddressLimit ?? 0;
    message.pricing = object.pricing ?? 0;
    message.priceStep = object.priceStep ?? "";
    message.floorPrice = object.floorPrice ?? "";
    return message;
  },
  fromAmino(object: MintPolicyAmino): MintPolicy {
    const message = createBaseMintPolicy();
    if (object.public_mint_enabled !== undefined && object.public_mint_enabled !== null) {
      message.publicMintEnabled = object.public_mint_enabled;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    if (object.per_address_limit !== undefined && object.per_address_limit !== null) {
      message.perAddressLimit = object.per_address_limit;
    }
    if (object.pricing !== undefined && object.pricing !== null) {
      message.pricing = object.pricing;
    }
    if (object.price_step !== undefined && object.price_step !== null) {
      message.priceStep = object.price_step;
    }
    if (object.floor_price !== undefined && object.floor_price !== null) {
      message.floorPrice = object.floor_price;
    }
    return message;
  },
  toAmino(message: MintPolicy): MintPolicyAmino {
    const obj: any = {};
    obj.public_mint_enabled = message.publicMintEnabled === false ? undefined : message.publicMintEnabled;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : undefined;
    obj.per_address_limit = message.perAddressLimit === 0 ? undefined : message.perAddressLimit;
    obj.pricing = message.pricing === 0 ? undefined : message.pricing;
    obj.price_step = message.priceStep === "" ? undefined : message.priceStep;
    obj.floor_price = message.floorPrice === "" ? undefined : message.floorPrice;
    return obj;
  },
  fromAminoMsg(object: MintPolicyAminoMsg): MintPolicy {
    return MintPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MintPolicyProtoMsg): MintPolicy {
    return MintPolicy.decode(message.value);
  },
  toProto(message: MintPolicy): Uint8Array {
    return MintPolicy.encode(message).finish();
  },
  toProtoMsg(message: MintPolicy): MintPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MintPolicy",
      value: MintPolicy.encode(message).finish()
    };
  }
};
function createBaseClass(): Class {
  return {
    id: BigInt(0),
    owner: "",
    creator: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    tokenUriBase: "",
    flags: ClassFlags.fromPartial({}),
    metadataFrozen: false,
    maxSupply: BigInt(0),
    mintingClosed: false,
    nextTokenId: BigInt(0),
    supply: BigInt(0),
    reservedSupply: BigInt(0),
    burned: BigInt(0),
    minters: [],
    mintPolicy: MintPolicy.fromPartial({}),
    payoutAddress: "",
    royaltyBps: 0,
    royaltyRecipients: [],
    status: 0,
    mediaFlags: 0,
    mediaRulesVersion: 0,
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    expiry: ExpiryPolicy.fromPartial({}),
    reveal: RevealPolicy.fromPartial({}),
    renderer: Renderer.fromPartial({}),
    royaltyLocked: false,
    publicMinted: BigInt(0),
    tokenModel: 0,
    harberger: HarbergerPolicy.fromPartial({}),
    craftingLocked: false,
    nextRecipeId: BigInt(0)
  };
}
/**
 * Class groups tokens issued under one set of rules.
 * @name Class
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Class
 */
export const Class = {
  typeUrl: "/sparkdream.artifact.v1.Class",
  encode(message: Class, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    if (message.tokenUriBase !== "") {
      writer.uint32(74).string(message.tokenUriBase);
    }
    if (message.flags !== undefined) {
      ClassFlags.encode(message.flags, writer.uint32(82).fork()).ldelim();
    }
    if (message.metadataFrozen === true) {
      writer.uint32(88).bool(message.metadataFrozen);
    }
    if (message.maxSupply !== BigInt(0)) {
      writer.uint32(96).uint64(message.maxSupply);
    }
    if (message.mintingClosed === true) {
      writer.uint32(104).bool(message.mintingClosed);
    }
    if (message.nextTokenId !== BigInt(0)) {
      writer.uint32(112).uint64(message.nextTokenId);
    }
    if (message.supply !== BigInt(0)) {
      writer.uint32(120).uint64(message.supply);
    }
    if (message.reservedSupply !== BigInt(0)) {
      writer.uint32(128).uint64(message.reservedSupply);
    }
    if (message.burned !== BigInt(0)) {
      writer.uint32(136).uint64(message.burned);
    }
    for (const v of message.minters) {
      writer.uint32(146).string(v!);
    }
    if (message.mintPolicy !== undefined) {
      MintPolicy.encode(message.mintPolicy, writer.uint32(154).fork()).ldelim();
    }
    if (message.payoutAddress !== "") {
      writer.uint32(162).string(message.payoutAddress);
    }
    if (message.royaltyBps !== 0) {
      writer.uint32(168).uint32(message.royaltyBps);
    }
    for (const v of message.royaltyRecipients) {
      RoyaltyShare.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(184).int32(message.status);
    }
    if (message.mediaFlags !== 0) {
      writer.uint32(192).uint32(message.mediaFlags);
    }
    if (message.mediaRulesVersion !== 0) {
      writer.uint32(200).uint32(message.mediaRulesVersion);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(208).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(216).int64(message.updatedAt);
    }
    if (message.expiry !== undefined) {
      ExpiryPolicy.encode(message.expiry, writer.uint32(226).fork()).ldelim();
    }
    if (message.reveal !== undefined) {
      RevealPolicy.encode(message.reveal, writer.uint32(234).fork()).ldelim();
    }
    if (message.renderer !== undefined) {
      Renderer.encode(message.renderer, writer.uint32(242).fork()).ldelim();
    }
    if (message.royaltyLocked === true) {
      writer.uint32(248).bool(message.royaltyLocked);
    }
    if (message.publicMinted !== BigInt(0)) {
      writer.uint32(256).uint64(message.publicMinted);
    }
    if (message.tokenModel !== 0) {
      writer.uint32(264).int32(message.tokenModel);
    }
    if (message.harberger !== undefined) {
      HarbergerPolicy.encode(message.harberger, writer.uint32(274).fork()).ldelim();
    }
    if (message.craftingLocked === true) {
      writer.uint32(280).bool(message.craftingLocked);
    }
    if (message.nextRecipeId !== BigInt(0)) {
      writer.uint32(288).uint64(message.nextRecipeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Class {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.uri = reader.string();
          break;
        case 8:
          message.uriHash = reader.string();
          break;
        case 9:
          message.tokenUriBase = reader.string();
          break;
        case 10:
          message.flags = ClassFlags.decode(reader, reader.uint32());
          break;
        case 11:
          message.metadataFrozen = reader.bool();
          break;
        case 12:
          message.maxSupply = reader.uint64();
          break;
        case 13:
          message.mintingClosed = reader.bool();
          break;
        case 14:
          message.nextTokenId = reader.uint64();
          break;
        case 15:
          message.supply = reader.uint64();
          break;
        case 16:
          message.reservedSupply = reader.uint64();
          break;
        case 17:
          message.burned = reader.uint64();
          break;
        case 18:
          message.minters.push(reader.string());
          break;
        case 19:
          message.mintPolicy = MintPolicy.decode(reader, reader.uint32());
          break;
        case 20:
          message.payoutAddress = reader.string();
          break;
        case 21:
          message.royaltyBps = reader.uint32();
          break;
        case 22:
          message.royaltyRecipients.push(RoyaltyShare.decode(reader, reader.uint32()));
          break;
        case 23:
          message.status = reader.int32() as any;
          break;
        case 24:
          message.mediaFlags = reader.uint32();
          break;
        case 25:
          message.mediaRulesVersion = reader.uint32();
          break;
        case 26:
          message.createdAt = reader.int64();
          break;
        case 27:
          message.updatedAt = reader.int64();
          break;
        case 28:
          message.expiry = ExpiryPolicy.decode(reader, reader.uint32());
          break;
        case 29:
          message.reveal = RevealPolicy.decode(reader, reader.uint32());
          break;
        case 30:
          message.renderer = Renderer.decode(reader, reader.uint32());
          break;
        case 31:
          message.royaltyLocked = reader.bool();
          break;
        case 32:
          message.publicMinted = reader.uint64();
          break;
        case 33:
          message.tokenModel = reader.int32() as any;
          break;
        case 34:
          message.harberger = HarbergerPolicy.decode(reader, reader.uint32());
          break;
        case 35:
          message.craftingLocked = reader.bool();
          break;
        case 36:
          message.nextRecipeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Class>): Class {
    const message = createBaseClass();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.tokenUriBase = object.tokenUriBase ?? "";
    message.flags = object.flags !== undefined && object.flags !== null ? ClassFlags.fromPartial(object.flags) : undefined;
    message.metadataFrozen = object.metadataFrozen ?? false;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.mintingClosed = object.mintingClosed ?? false;
    message.nextTokenId = object.nextTokenId !== undefined && object.nextTokenId !== null ? BigInt(object.nextTokenId.toString()) : BigInt(0);
    message.supply = object.supply !== undefined && object.supply !== null ? BigInt(object.supply.toString()) : BigInt(0);
    message.reservedSupply = object.reservedSupply !== undefined && object.reservedSupply !== null ? BigInt(object.reservedSupply.toString()) : BigInt(0);
    message.burned = object.burned !== undefined && object.burned !== null ? BigInt(object.burned.toString()) : BigInt(0);
    message.minters = object.minters?.map(e => e) || [];
    message.mintPolicy = object.mintPolicy !== undefined && object.mintPolicy !== null ? MintPolicy.fromPartial(object.mintPolicy) : undefined;
    message.payoutAddress = object.payoutAddress ?? "";
    message.royaltyBps = object.royaltyBps ?? 0;
    message.royaltyRecipients = object.royaltyRecipients?.map(e => RoyaltyShare.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.mediaFlags = object.mediaFlags ?? 0;
    message.mediaRulesVersion = object.mediaRulesVersion ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.expiry = object.expiry !== undefined && object.expiry !== null ? ExpiryPolicy.fromPartial(object.expiry) : undefined;
    message.reveal = object.reveal !== undefined && object.reveal !== null ? RevealPolicy.fromPartial(object.reveal) : undefined;
    message.renderer = object.renderer !== undefined && object.renderer !== null ? Renderer.fromPartial(object.renderer) : undefined;
    message.royaltyLocked = object.royaltyLocked ?? false;
    message.publicMinted = object.publicMinted !== undefined && object.publicMinted !== null ? BigInt(object.publicMinted.toString()) : BigInt(0);
    message.tokenModel = object.tokenModel ?? 0;
    message.harberger = object.harberger !== undefined && object.harberger !== null ? HarbergerPolicy.fromPartial(object.harberger) : undefined;
    message.craftingLocked = object.craftingLocked ?? false;
    message.nextRecipeId = object.nextRecipeId !== undefined && object.nextRecipeId !== null ? BigInt(object.nextRecipeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClassAmino): Class {
    const message = createBaseClass();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.token_uri_base !== undefined && object.token_uri_base !== null) {
      message.tokenUriBase = object.token_uri_base;
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = ClassFlags.fromAmino(object.flags);
    }
    if (object.metadata_frozen !== undefined && object.metadata_frozen !== null) {
      message.metadataFrozen = object.metadata_frozen;
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = BigInt(object.max_supply);
    }
    if (object.minting_closed !== undefined && object.minting_closed !== null) {
      message.mintingClosed = object.minting_closed;
    }
    if (object.next_token_id !== undefined && object.next_token_id !== null) {
      message.nextTokenId = BigInt(object.next_token_id);
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = BigInt(object.supply);
    }
    if (object.reserved_supply !== undefined && object.reserved_supply !== null) {
      message.reservedSupply = BigInt(object.reserved_supply);
    }
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = BigInt(object.burned);
    }
    message.minters = object.minters?.map(e => e) || [];
    if (object.mint_policy !== undefined && object.mint_policy !== null) {
      message.mintPolicy = MintPolicy.fromAmino(object.mint_policy);
    }
    if (object.payout_address !== undefined && object.payout_address !== null) {
      message.payoutAddress = object.payout_address;
    }
    if (object.royalty_bps !== undefined && object.royalty_bps !== null) {
      message.royaltyBps = object.royalty_bps;
    }
    message.royaltyRecipients = object.royalty_recipients?.map(e => RoyaltyShare.fromAmino(e)) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.media_flags !== undefined && object.media_flags !== null) {
      message.mediaFlags = object.media_flags;
    }
    if (object.media_rules_version !== undefined && object.media_rules_version !== null) {
      message.mediaRulesVersion = object.media_rules_version;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = BigInt(object.updated_at);
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = ExpiryPolicy.fromAmino(object.expiry);
    }
    if (object.reveal !== undefined && object.reveal !== null) {
      message.reveal = RevealPolicy.fromAmino(object.reveal);
    }
    if (object.renderer !== undefined && object.renderer !== null) {
      message.renderer = Renderer.fromAmino(object.renderer);
    }
    if (object.royalty_locked !== undefined && object.royalty_locked !== null) {
      message.royaltyLocked = object.royalty_locked;
    }
    if (object.public_minted !== undefined && object.public_minted !== null) {
      message.publicMinted = BigInt(object.public_minted);
    }
    if (object.token_model !== undefined && object.token_model !== null) {
      message.tokenModel = object.token_model;
    }
    if (object.harberger !== undefined && object.harberger !== null) {
      message.harberger = HarbergerPolicy.fromAmino(object.harberger);
    }
    if (object.crafting_locked !== undefined && object.crafting_locked !== null) {
      message.craftingLocked = object.crafting_locked;
    }
    if (object.next_recipe_id !== undefined && object.next_recipe_id !== null) {
      message.nextRecipeId = BigInt(object.next_recipe_id);
    }
    return message;
  },
  toAmino(message: Class): ClassAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.token_uri_base = message.tokenUriBase === "" ? undefined : message.tokenUriBase;
    obj.flags = message.flags ? ClassFlags.toAmino(message.flags) : ClassFlags.toAmino(ClassFlags.fromPartial({}));
    obj.metadata_frozen = message.metadataFrozen === false ? undefined : message.metadataFrozen;
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
    obj.minting_closed = message.mintingClosed === false ? undefined : message.mintingClosed;
    obj.next_token_id = message.nextTokenId !== BigInt(0) ? message.nextTokenId?.toString() : undefined;
    obj.supply = message.supply !== BigInt(0) ? message.supply?.toString() : undefined;
    obj.reserved_supply = message.reservedSupply !== BigInt(0) ? message.reservedSupply?.toString() : undefined;
    obj.burned = message.burned !== BigInt(0) ? message.burned?.toString() : undefined;
    if (message.minters) {
      obj.minters = message.minters.map(e => e);
    } else {
      obj.minters = message.minters;
    }
    obj.mint_policy = message.mintPolicy ? MintPolicy.toAmino(message.mintPolicy) : MintPolicy.toAmino(MintPolicy.fromPartial({}));
    obj.payout_address = message.payoutAddress === "" ? undefined : message.payoutAddress;
    obj.royalty_bps = message.royaltyBps === 0 ? undefined : message.royaltyBps;
    if (message.royaltyRecipients) {
      obj.royalty_recipients = message.royaltyRecipients.map(e => e ? RoyaltyShare.toAmino(e) : undefined);
    } else {
      obj.royalty_recipients = message.royaltyRecipients;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.media_flags = message.mediaFlags === 0 ? undefined : message.mediaFlags;
    obj.media_rules_version = message.mediaRulesVersion === 0 ? undefined : message.mediaRulesVersion;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.updated_at = message.updatedAt !== BigInt(0) ? message.updatedAt?.toString() : undefined;
    obj.expiry = message.expiry ? ExpiryPolicy.toAmino(message.expiry) : ExpiryPolicy.toAmino(ExpiryPolicy.fromPartial({}));
    obj.reveal = message.reveal ? RevealPolicy.toAmino(message.reveal) : RevealPolicy.toAmino(RevealPolicy.fromPartial({}));
    obj.renderer = message.renderer ? Renderer.toAmino(message.renderer) : Renderer.toAmino(Renderer.fromPartial({}));
    obj.royalty_locked = message.royaltyLocked === false ? undefined : message.royaltyLocked;
    obj.public_minted = message.publicMinted !== BigInt(0) ? message.publicMinted?.toString() : undefined;
    obj.token_model = message.tokenModel === 0 ? undefined : message.tokenModel;
    obj.harberger = message.harberger ? HarbergerPolicy.toAmino(message.harberger) : HarbergerPolicy.toAmino(HarbergerPolicy.fromPartial({}));
    obj.crafting_locked = message.craftingLocked === false ? undefined : message.craftingLocked;
    obj.next_recipe_id = message.nextRecipeId !== BigInt(0) ? message.nextRecipeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassAminoMsg): Class {
    return Class.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassProtoMsg): Class {
    return Class.decode(message.value);
  },
  toProto(message: Class): Uint8Array {
    return Class.encode(message).finish();
  },
  toProtoMsg(message: Class): ClassProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Class",
      value: Class.encode(message).finish()
    };
  }
};
function createBaseRoyaltyShare(): RoyaltyShare {
  return {
    address: "",
    weightBps: 0
  };
}
/**
 * RoyaltyShare is one recipient's part of a class royalty.
 * @name RoyaltyShare
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RoyaltyShare
 */
export const RoyaltyShare = {
  typeUrl: "/sparkdream.artifact.v1.RoyaltyShare",
  encode(message: RoyaltyShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weightBps !== 0) {
      writer.uint32(16).uint32(message.weightBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoyaltyShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weightBps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoyaltyShare>): RoyaltyShare {
    const message = createBaseRoyaltyShare();
    message.address = object.address ?? "";
    message.weightBps = object.weightBps ?? 0;
    return message;
  },
  fromAmino(object: RoyaltyShareAmino): RoyaltyShare {
    const message = createBaseRoyaltyShare();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight_bps !== undefined && object.weight_bps !== null) {
      message.weightBps = object.weight_bps;
    }
    return message;
  },
  toAmino(message: RoyaltyShare): RoyaltyShareAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight_bps = message.weightBps === 0 ? undefined : message.weightBps;
    return obj;
  },
  fromAminoMsg(object: RoyaltyShareAminoMsg): RoyaltyShare {
    return RoyaltyShare.fromAmino(object.value);
  },
  fromProtoMsg(message: RoyaltyShareProtoMsg): RoyaltyShare {
    return RoyaltyShare.decode(message.value);
  },
  toProto(message: RoyaltyShare): Uint8Array {
    return RoyaltyShare.encode(message).finish();
  },
  toProtoMsg(message: RoyaltyShare): RoyaltyShareProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.RoyaltyShare",
      value: RoyaltyShare.encode(message).finish()
    };
  }
};
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
/**
 * Attribute is one key/value trait of a token.
 * @name Attribute
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Attribute
 */
export const Attribute = {
  typeUrl: "/sparkdream.artifact.v1.Attribute",
  encode(message: Attribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
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
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: AttributeAmino): Attribute {
    const message = createBaseAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Attribute): AttributeAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeAminoMsg): Attribute {
    return Attribute.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeProtoMsg): Attribute {
    return Attribute.decode(message.value);
  },
  toProto(message: Attribute): Uint8Array {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message: Attribute): AttributeProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
function createBaseTokenMetadata(): TokenMetadata {
  return {
    name: "",
    description: "",
    uri: "",
    uriHash: "",
    attributes: []
  };
}
/**
 * TokenMetadata is the editable on-chain content of a token.
 * @name TokenMetadata
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenMetadata
 */
export const TokenMetadata = {
  typeUrl: "/sparkdream.artifact.v1.TokenMetadata",
  encode(message: TokenMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.uriHash = reader.string();
          break;
        case 5:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenMetadata>): TokenMetadata {
    const message = createBaseTokenMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TokenMetadataAmino): TokenMetadata {
    const message = createBaseTokenMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TokenMetadata): TokenMetadataAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: TokenMetadataAminoMsg): TokenMetadata {
    return TokenMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenMetadataProtoMsg): TokenMetadata {
    return TokenMetadata.decode(message.value);
  },
  toProto(message: TokenMetadata): Uint8Array {
    return TokenMetadata.encode(message).finish();
  },
  toProtoMsg(message: TokenMetadata): TokenMetadataProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.TokenMetadata",
      value: TokenMetadata.encode(message).finish()
    };
  }
};
function createBaseToken(): Token {
  return {
    classId: BigInt(0),
    id: BigInt(0),
    owner: "",
    minter: "",
    metadata: TokenMetadata.fromPartial({}),
    metadataFrozen: false,
    lock: 0,
    listingSeq: BigInt(0),
    deposit: "",
    status: 0,
    mediaFlags: 0,
    mediaRulesVersion: 0,
    mintedAt: BigInt(0),
    expiresAt: BigInt(0),
    redeemedAt: BigInt(0),
    schedule: [],
    mediaVersions: [],
    displayedVersion: 0,
    unrevealed: false,
    paid: "",
    nextMediaProposalId: BigInt(0),
    harberger: undefined,
    parent: undefined,
    descendants: 0
  };
}
/**
 * Token is one non-fungible token.
 * @name Token
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Token
 */
export const Token = {
  typeUrl: "/sparkdream.artifact.v1.Token",
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.minter !== "") {
      writer.uint32(34).string(message.minter);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadataFrozen === true) {
      writer.uint32(48).bool(message.metadataFrozen);
    }
    if (message.lock !== 0) {
      writer.uint32(56).int32(message.lock);
    }
    if (message.listingSeq !== BigInt(0)) {
      writer.uint32(64).uint64(message.listingSeq);
    }
    if (message.deposit !== "") {
      writer.uint32(74).string(message.deposit);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.mediaFlags !== 0) {
      writer.uint32(88).uint32(message.mediaFlags);
    }
    if (message.mediaRulesVersion !== 0) {
      writer.uint32(96).uint32(message.mediaRulesVersion);
    }
    if (message.mintedAt !== BigInt(0)) {
      writer.uint32(104).int64(message.mintedAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(112).int64(message.expiresAt);
    }
    if (message.redeemedAt !== BigInt(0)) {
      writer.uint32(120).int64(message.redeemedAt);
    }
    for (const v of message.schedule) {
      MetadataStage.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.mediaVersions) {
      TokenMetadata.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.displayedVersion !== 0) {
      writer.uint32(144).uint32(message.displayedVersion);
    }
    if (message.unrevealed === true) {
      writer.uint32(152).bool(message.unrevealed);
    }
    if (message.paid !== "") {
      writer.uint32(162).string(message.paid);
    }
    if (message.nextMediaProposalId !== BigInt(0)) {
      writer.uint32(168).uint64(message.nextMediaProposalId);
    }
    if (message.harberger !== undefined) {
      HarbergerState.encode(message.harberger, writer.uint32(178).fork()).ldelim();
    }
    if (message.parent !== undefined) {
      TokenRef.encode(message.parent, writer.uint32(186).fork()).ldelim();
    }
    if (message.descendants !== 0) {
      writer.uint32(192).uint32(message.descendants);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.minter = reader.string();
          break;
        case 5:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.metadataFrozen = reader.bool();
          break;
        case 7:
          message.lock = reader.int32() as any;
          break;
        case 8:
          message.listingSeq = reader.uint64();
          break;
        case 9:
          message.deposit = reader.string();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.mediaFlags = reader.uint32();
          break;
        case 12:
          message.mediaRulesVersion = reader.uint32();
          break;
        case 13:
          message.mintedAt = reader.int64();
          break;
        case 14:
          message.expiresAt = reader.int64();
          break;
        case 15:
          message.redeemedAt = reader.int64();
          break;
        case 16:
          message.schedule.push(MetadataStage.decode(reader, reader.uint32()));
          break;
        case 17:
          message.mediaVersions.push(TokenMetadata.decode(reader, reader.uint32()));
          break;
        case 18:
          message.displayedVersion = reader.uint32();
          break;
        case 19:
          message.unrevealed = reader.bool();
          break;
        case 20:
          message.paid = reader.string();
          break;
        case 21:
          message.nextMediaProposalId = reader.uint64();
          break;
        case 22:
          message.harberger = HarbergerState.decode(reader, reader.uint32());
          break;
        case 23:
          message.parent = TokenRef.decode(reader, reader.uint32());
          break;
        case 24:
          message.descendants = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.minter = object.minter ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.metadataFrozen = object.metadataFrozen ?? false;
    message.lock = object.lock ?? 0;
    message.listingSeq = object.listingSeq !== undefined && object.listingSeq !== null ? BigInt(object.listingSeq.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    message.status = object.status ?? 0;
    message.mediaFlags = object.mediaFlags ?? 0;
    message.mediaRulesVersion = object.mediaRulesVersion ?? 0;
    message.mintedAt = object.mintedAt !== undefined && object.mintedAt !== null ? BigInt(object.mintedAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.redeemedAt = object.redeemedAt !== undefined && object.redeemedAt !== null ? BigInt(object.redeemedAt.toString()) : BigInt(0);
    message.schedule = object.schedule?.map(e => MetadataStage.fromPartial(e)) || [];
    message.mediaVersions = object.mediaVersions?.map(e => TokenMetadata.fromPartial(e)) || [];
    message.displayedVersion = object.displayedVersion ?? 0;
    message.unrevealed = object.unrevealed ?? false;
    message.paid = object.paid ?? "";
    message.nextMediaProposalId = object.nextMediaProposalId !== undefined && object.nextMediaProposalId !== null ? BigInt(object.nextMediaProposalId.toString()) : BigInt(0);
    message.harberger = object.harberger !== undefined && object.harberger !== null ? HarbergerState.fromPartial(object.harberger) : undefined;
    message.parent = object.parent !== undefined && object.parent !== null ? TokenRef.fromPartial(object.parent) : undefined;
    message.descendants = object.descendants ?? 0;
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.metadata_frozen !== undefined && object.metadata_frozen !== null) {
      message.metadataFrozen = object.metadata_frozen;
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock;
    }
    if (object.listing_seq !== undefined && object.listing_seq !== null) {
      message.listingSeq = BigInt(object.listing_seq);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.media_flags !== undefined && object.media_flags !== null) {
      message.mediaFlags = object.media_flags;
    }
    if (object.media_rules_version !== undefined && object.media_rules_version !== null) {
      message.mediaRulesVersion = object.media_rules_version;
    }
    if (object.minted_at !== undefined && object.minted_at !== null) {
      message.mintedAt = BigInt(object.minted_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.redeemed_at !== undefined && object.redeemed_at !== null) {
      message.redeemedAt = BigInt(object.redeemed_at);
    }
    message.schedule = object.schedule?.map(e => MetadataStage.fromAmino(e)) || [];
    message.mediaVersions = object.media_versions?.map(e => TokenMetadata.fromAmino(e)) || [];
    if (object.displayed_version !== undefined && object.displayed_version !== null) {
      message.displayedVersion = object.displayed_version;
    }
    if (object.unrevealed !== undefined && object.unrevealed !== null) {
      message.unrevealed = object.unrevealed;
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid;
    }
    if (object.next_media_proposal_id !== undefined && object.next_media_proposal_id !== null) {
      message.nextMediaProposalId = BigInt(object.next_media_proposal_id);
    }
    if (object.harberger !== undefined && object.harberger !== null) {
      message.harberger = HarbergerState.fromAmino(object.harberger);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = TokenRef.fromAmino(object.parent);
    }
    if (object.descendants !== undefined && object.descendants !== null) {
      message.descendants = object.descendants;
    }
    return message;
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.metadata_frozen = message.metadataFrozen === false ? undefined : message.metadataFrozen;
    obj.lock = message.lock === 0 ? undefined : message.lock;
    obj.listing_seq = message.listingSeq !== BigInt(0) ? message.listingSeq?.toString() : undefined;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.media_flags = message.mediaFlags === 0 ? undefined : message.mediaFlags;
    obj.media_rules_version = message.mediaRulesVersion === 0 ? undefined : message.mediaRulesVersion;
    obj.minted_at = message.mintedAt !== BigInt(0) ? message.mintedAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.redeemed_at = message.redeemedAt !== BigInt(0) ? message.redeemedAt?.toString() : undefined;
    if (message.schedule) {
      obj.schedule = message.schedule.map(e => e ? MetadataStage.toAmino(e) : undefined);
    } else {
      obj.schedule = message.schedule;
    }
    if (message.mediaVersions) {
      obj.media_versions = message.mediaVersions.map(e => e ? TokenMetadata.toAmino(e) : undefined);
    } else {
      obj.media_versions = message.mediaVersions;
    }
    obj.displayed_version = message.displayedVersion === 0 ? undefined : message.displayedVersion;
    obj.unrevealed = message.unrevealed === false ? undefined : message.unrevealed;
    obj.paid = message.paid === "" ? undefined : message.paid;
    obj.next_media_proposal_id = message.nextMediaProposalId !== BigInt(0) ? message.nextMediaProposalId?.toString() : undefined;
    obj.harberger = message.harberger ? HarbergerState.toAmino(message.harberger) : undefined;
    obj.parent = message.parent ? TokenRef.toAmino(message.parent) : undefined;
    obj.descendants = message.descendants === 0 ? undefined : message.descendants;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Token",
      value: Token.encode(message).finish()
    };
  }
};
function createBaseTokenRef(): TokenRef {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * TokenRef addresses one token.
 * @name TokenRef
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenRef
 */
export const TokenRef = {
  typeUrl: "/sparkdream.artifact.v1.TokenRef",
  encode(message: TokenRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenRef>): TokenRef {
    const message = createBaseTokenRef();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TokenRefAmino): TokenRef {
    const message = createBaseTokenRef();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: TokenRef): TokenRefAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenRefAminoMsg): TokenRef {
    return TokenRef.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenRefProtoMsg): TokenRef {
    return TokenRef.decode(message.value);
  },
  toProto(message: TokenRef): Uint8Array {
    return TokenRef.encode(message).finish();
  },
  toProtoMsg(message: TokenRef): TokenRefProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.TokenRef",
      value: TokenRef.encode(message).finish()
    };
  }
};
function createBasePendingTransfer(): PendingTransfer {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    from: "",
    to: "",
    createdAt: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * PendingTransfer is an existing token awaiting the recipient's acceptance.
 * @name PendingTransfer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingTransfer
 */
export const PendingTransfer = {
  typeUrl: "/sparkdream.artifact.v1.PendingTransfer",
  encode(message: PendingTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(48).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.createdAt = reader.int64();
          break;
        case 6:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingTransfer>): PendingTransfer {
    const message = createBasePendingTransfer();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingTransferAmino): PendingTransfer {
    const message = createBasePendingTransfer();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: PendingTransfer): PendingTransferAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingTransferAminoMsg): PendingTransfer {
    return PendingTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingTransferProtoMsg): PendingTransfer {
    return PendingTransfer.decode(message.value);
  },
  toProto(message: PendingTransfer): Uint8Array {
    return PendingTransfer.encode(message).finish();
  },
  toProtoMsg(message: PendingTransfer): PendingTransferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.PendingTransfer",
      value: PendingTransfer.encode(message).finish()
    };
  }
};
function createBasePendingMint(): PendingMint {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    minter: "",
    to: "",
    metadata: TokenMetadata.fromPartial({}),
    deposit: "",
    createdAt: BigInt(0),
    expiresAt: BigInt(0),
    schedule: [],
    unrevealed: false
  };
}
/**
 * PendingMint is a mint awaiting the recipient's acceptance. The token id is
 * reserved and the deposit escrowed; no Token exists until acceptance.
 * @name PendingMint
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingMint
 */
export const PendingMint = {
  typeUrl: "/sparkdream.artifact.v1.PendingMint",
  encode(message: PendingMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.minter !== "") {
      writer.uint32(26).string(message.minter);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(64).int64(message.expiresAt);
    }
    for (const v of message.schedule) {
      MetadataStage.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.unrevealed === true) {
      writer.uint32(80).bool(message.unrevealed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.minter = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.deposit = reader.string();
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.expiresAt = reader.int64();
          break;
        case 9:
          message.schedule.push(MetadataStage.decode(reader, reader.uint32()));
          break;
        case 10:
          message.unrevealed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingMint>): PendingMint {
    const message = createBasePendingMint();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.minter = object.minter ?? "";
    message.to = object.to ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.deposit = object.deposit ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.schedule = object.schedule?.map(e => MetadataStage.fromPartial(e)) || [];
    message.unrevealed = object.unrevealed ?? false;
    return message;
  },
  fromAmino(object: PendingMintAmino): PendingMint {
    const message = createBasePendingMint();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    message.schedule = object.schedule?.map(e => MetadataStage.fromAmino(e)) || [];
    if (object.unrevealed !== undefined && object.unrevealed !== null) {
      message.unrevealed = object.unrevealed;
    }
    return message;
  },
  toAmino(message: PendingMint): PendingMintAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.to = message.to === "" ? undefined : message.to;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    if (message.schedule) {
      obj.schedule = message.schedule.map(e => e ? MetadataStage.toAmino(e) : undefined);
    } else {
      obj.schedule = message.schedule;
    }
    obj.unrevealed = message.unrevealed === false ? undefined : message.unrevealed;
    return obj;
  },
  fromAminoMsg(object: PendingMintAminoMsg): PendingMint {
    return PendingMint.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingMintProtoMsg): PendingMint {
    return PendingMint.decode(message.value);
  },
  toProto(message: PendingMint): Uint8Array {
    return PendingMint.encode(message).finish();
  },
  toProtoMsg(message: PendingMint): PendingMintProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.PendingMint",
      value: PendingMint.encode(message).finish()
    };
  }
};
function createBaseListing(): Listing {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    seller: "",
    price: Coin.fromPartial({}),
    createdAt: BigInt(0),
    expiresAt: BigInt(0),
    nonce: BigInt(0)
  };
}
/**
 * Listing is a fixed-price offer to sell. Nothing is escrowed.
 * @name Listing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Listing
 */
export const Listing = {
  typeUrl: "/sparkdream.artifact.v1.Listing",
  encode(message: Listing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(48).int64(message.expiresAt);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(56).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Listing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.seller = reader.string();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.createdAt = reader.int64();
          break;
        case 6:
          message.expiresAt = reader.int64();
          break;
        case 7:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Listing>): Listing {
    const message = createBaseListing();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ListingAmino): Listing {
    const message = createBaseListing();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: Listing): ListingAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ListingAminoMsg): Listing {
    return Listing.fromAmino(object.value);
  },
  fromProtoMsg(message: ListingProtoMsg): Listing {
    return Listing.decode(message.value);
  },
  toProto(message: Listing): Uint8Array {
    return Listing.encode(message).finish();
  },
  toProtoMsg(message: Listing): ListingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Listing",
      value: Listing.encode(message).finish()
    };
  }
};
function createBasePendingClassOwner(): PendingClassOwner {
  return {
    classId: BigInt(0),
    proposedOwner: "",
    expiresAt: BigInt(0)
  };
}
/**
 * PendingClassOwner is a proposed class ownership handover.
 * @name PendingClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingClassOwner
 */
export const PendingClassOwner = {
  typeUrl: "/sparkdream.artifact.v1.PendingClassOwner",
  encode(message: PendingClassOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.proposedOwner !== "") {
      writer.uint32(18).string(message.proposedOwner);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(24).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingClassOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingClassOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.proposedOwner = reader.string();
          break;
        case 3:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingClassOwner>): PendingClassOwner {
    const message = createBasePendingClassOwner();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.proposedOwner = object.proposedOwner ?? "";
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingClassOwnerAmino): PendingClassOwner {
    const message = createBasePendingClassOwner();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.proposed_owner !== undefined && object.proposed_owner !== null) {
      message.proposedOwner = object.proposed_owner;
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: PendingClassOwner): PendingClassOwnerAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.proposed_owner = message.proposedOwner === "" ? undefined : message.proposedOwner;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingClassOwnerAminoMsg): PendingClassOwner {
    return PendingClassOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingClassOwnerProtoMsg): PendingClassOwner {
    return PendingClassOwner.decode(message.value);
  },
  toProto(message: PendingClassOwner): Uint8Array {
    return PendingClassOwner.encode(message).finish();
  },
  toProtoMsg(message: PendingClassOwner): PendingClassOwnerProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.PendingClassOwner",
      value: PendingClassOwner.encode(message).finish()
    };
  }
};
function createBaseHideRecord(): HideRecord {
  return {
    id: BigInt(0),
    targetKind: 0,
    classId: BigInt(0),
    tokenId: BigInt(0),
    sentinel: "",
    committedAmount: "",
    reason: 0,
    reasonText: "",
    hiddenAt: BigInt(0),
    appealDeadline: BigInt(0),
    appellant: "",
    appealed: false,
    appealId: BigInt(0),
    outcome: 0
  };
}
/**
 * HideRecord is the moderation record for a hidden class or token.
 * @name HideRecord
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HideRecord
 */
export const HideRecord = {
  typeUrl: "/sparkdream.artifact.v1.HideRecord",
  encode(message: HideRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.targetKind !== 0) {
      writer.uint32(16).int32(message.targetKind);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(24).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(32).uint64(message.tokenId);
    }
    if (message.sentinel !== "") {
      writer.uint32(42).string(message.sentinel);
    }
    if (message.committedAmount !== "") {
      writer.uint32(50).string(message.committedAmount);
    }
    if (message.reason !== 0) {
      writer.uint32(56).int32(message.reason);
    }
    if (message.reasonText !== "") {
      writer.uint32(66).string(message.reasonText);
    }
    if (message.hiddenAt !== BigInt(0)) {
      writer.uint32(72).int64(message.hiddenAt);
    }
    if (message.appealDeadline !== BigInt(0)) {
      writer.uint32(80).int64(message.appealDeadline);
    }
    if (message.appellant !== "") {
      writer.uint32(90).string(message.appellant);
    }
    if (message.appealed === true) {
      writer.uint32(96).bool(message.appealed);
    }
    if (message.appealId !== BigInt(0)) {
      writer.uint32(104).uint64(message.appealId);
    }
    if (message.outcome !== 0) {
      writer.uint32(112).int32(message.outcome);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HideRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHideRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.targetKind = reader.int32() as any;
          break;
        case 3:
          message.classId = reader.uint64();
          break;
        case 4:
          message.tokenId = reader.uint64();
          break;
        case 5:
          message.sentinel = reader.string();
          break;
        case 6:
          message.committedAmount = reader.string();
          break;
        case 7:
          message.reason = reader.int32() as any;
          break;
        case 8:
          message.reasonText = reader.string();
          break;
        case 9:
          message.hiddenAt = reader.int64();
          break;
        case 10:
          message.appealDeadline = reader.int64();
          break;
        case 11:
          message.appellant = reader.string();
          break;
        case 12:
          message.appealed = reader.bool();
          break;
        case 13:
          message.appealId = reader.uint64();
          break;
        case 14:
          message.outcome = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HideRecord>): HideRecord {
    const message = createBaseHideRecord();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.targetKind = object.targetKind ?? 0;
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.sentinel = object.sentinel ?? "";
    message.committedAmount = object.committedAmount ?? "";
    message.reason = object.reason ?? 0;
    message.reasonText = object.reasonText ?? "";
    message.hiddenAt = object.hiddenAt !== undefined && object.hiddenAt !== null ? BigInt(object.hiddenAt.toString()) : BigInt(0);
    message.appealDeadline = object.appealDeadline !== undefined && object.appealDeadline !== null ? BigInt(object.appealDeadline.toString()) : BigInt(0);
    message.appellant = object.appellant ?? "";
    message.appealed = object.appealed ?? false;
    message.appealId = object.appealId !== undefined && object.appealId !== null ? BigInt(object.appealId.toString()) : BigInt(0);
    message.outcome = object.outcome ?? 0;
    return message;
  },
  fromAmino(object: HideRecordAmino): HideRecord {
    const message = createBaseHideRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.target_kind !== undefined && object.target_kind !== null) {
      message.targetKind = object.target_kind;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.committed_amount !== undefined && object.committed_amount !== null) {
      message.committedAmount = object.committed_amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    if (object.hidden_at !== undefined && object.hidden_at !== null) {
      message.hiddenAt = BigInt(object.hidden_at);
    }
    if (object.appeal_deadline !== undefined && object.appeal_deadline !== null) {
      message.appealDeadline = BigInt(object.appeal_deadline);
    }
    if (object.appellant !== undefined && object.appellant !== null) {
      message.appellant = object.appellant;
    }
    if (object.appealed !== undefined && object.appealed !== null) {
      message.appealed = object.appealed;
    }
    if (object.appeal_id !== undefined && object.appeal_id !== null) {
      message.appealId = BigInt(object.appeal_id);
    }
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    return message;
  },
  toAmino(message: HideRecord): HideRecordAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.target_kind = message.targetKind === 0 ? undefined : message.targetKind;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    obj.hidden_at = message.hiddenAt !== BigInt(0) ? message.hiddenAt?.toString() : undefined;
    obj.appeal_deadline = message.appealDeadline !== BigInt(0) ? message.appealDeadline?.toString() : undefined;
    obj.appellant = message.appellant === "" ? undefined : message.appellant;
    obj.appealed = message.appealed === false ? undefined : message.appealed;
    obj.appeal_id = message.appealId !== BigInt(0) ? message.appealId?.toString() : undefined;
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    return obj;
  },
  fromAminoMsg(object: HideRecordAminoMsg): HideRecord {
    return HideRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: HideRecordProtoMsg): HideRecord {
    return HideRecord.decode(message.value);
  },
  toProto(message: HideRecord): Uint8Array {
    return HideRecord.encode(message).finish();
  },
  toProtoMsg(message: HideRecord): HideRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.HideRecord",
      value: HideRecord.encode(message).finish()
    };
  }
};
function createBaseReceivePolicyEntry(): ReceivePolicyEntry {
  return {
    address: "",
    policy: 0
  };
}
/**
 * ReceivePolicyEntry is a genesis export entry.
 * @name ReceivePolicyEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ReceivePolicyEntry
 */
export const ReceivePolicyEntry = {
  typeUrl: "/sparkdream.artifact.v1.ReceivePolicyEntry",
  encode(message: ReceivePolicyEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.policy !== 0) {
      writer.uint32(16).int32(message.policy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReceivePolicyEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceivePolicyEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.policy = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReceivePolicyEntry>): ReceivePolicyEntry {
    const message = createBaseReceivePolicyEntry();
    message.address = object.address ?? "";
    message.policy = object.policy ?? 0;
    return message;
  },
  fromAmino(object: ReceivePolicyEntryAmino): ReceivePolicyEntry {
    const message = createBaseReceivePolicyEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = object.policy;
    }
    return message;
  },
  toAmino(message: ReceivePolicyEntry): ReceivePolicyEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.policy = message.policy === 0 ? undefined : message.policy;
    return obj;
  },
  fromAminoMsg(object: ReceivePolicyEntryAminoMsg): ReceivePolicyEntry {
    return ReceivePolicyEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ReceivePolicyEntryProtoMsg): ReceivePolicyEntry {
    return ReceivePolicyEntry.decode(message.value);
  },
  toProto(message: ReceivePolicyEntry): Uint8Array {
    return ReceivePolicyEntry.encode(message).finish();
  },
  toProtoMsg(message: ReceivePolicyEntry): ReceivePolicyEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.ReceivePolicyEntry",
      value: ReceivePolicyEntry.encode(message).finish()
    };
  }
};
function createBasePublicMintCountEntry(): PublicMintCountEntry {
  return {
    classId: BigInt(0),
    address: "",
    count: 0
  };
}
/**
 * PublicMintCountEntry is a genesis export entry.
 * @name PublicMintCountEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PublicMintCountEntry
 */
export const PublicMintCountEntry = {
  typeUrl: "/sparkdream.artifact.v1.PublicMintCountEntry",
  encode(message: PublicMintCountEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublicMintCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicMintCountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PublicMintCountEntry>): PublicMintCountEntry {
    const message = createBasePublicMintCountEntry();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: PublicMintCountEntryAmino): PublicMintCountEntry {
    const message = createBasePublicMintCountEntry();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: PublicMintCountEntry): PublicMintCountEntryAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.count = message.count === 0 ? undefined : message.count;
    return obj;
  },
  fromAminoMsg(object: PublicMintCountEntryAminoMsg): PublicMintCountEntry {
    return PublicMintCountEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PublicMintCountEntryProtoMsg): PublicMintCountEntry {
    return PublicMintCountEntry.decode(message.value);
  },
  toProto(message: PublicMintCountEntry): Uint8Array {
    return PublicMintCountEntry.encode(message).finish();
  },
  toProtoMsg(message: PublicMintCountEntry): PublicMintCountEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.PublicMintCountEntry",
      value: PublicMintCountEntry.encode(message).finish()
    };
  }
};
function createBaseQueueCursor(): QueueCursor {
  return {
    classId: BigInt(0),
    cursor: BigInt(0)
  };
}
/**
 * QueueCursor is a class drain-queue cursor (genesis export entry).
 * @name QueueCursor
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueueCursor
 */
export const QueueCursor = {
  typeUrl: "/sparkdream.artifact.v1.QueueCursor",
  encode(message: QueueCursor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.cursor !== BigInt(0)) {
      writer.uint32(16).uint64(message.cursor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueueCursor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueCursor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.cursor = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueueCursor>): QueueCursor {
    const message = createBaseQueueCursor();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.cursor = object.cursor !== undefined && object.cursor !== null ? BigInt(object.cursor.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueueCursorAmino): QueueCursor {
    const message = createBaseQueueCursor();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.cursor !== undefined && object.cursor !== null) {
      message.cursor = BigInt(object.cursor);
    }
    return message;
  },
  toAmino(message: QueueCursor): QueueCursorAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.cursor = message.cursor !== BigInt(0) ? message.cursor?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueueCursorAminoMsg): QueueCursor {
    return QueueCursor.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueCursorProtoMsg): QueueCursor {
    return QueueCursor.decode(message.value);
  },
  toProto(message: QueueCursor): Uint8Array {
    return QueueCursor.encode(message).finish();
  },
  toProtoMsg(message: QueueCursor): QueueCursorProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueueCursor",
      value: QueueCursor.encode(message).finish()
    };
  }
};
function createBaseSentinelDailyHideEntry(): SentinelDailyHideEntry {
  return {
    sentinel: "",
    day: BigInt(0),
    count: 0
  };
}
/**
 * SentinelDailyHideEntry is a genesis export entry.
 * @name SentinelDailyHideEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.SentinelDailyHideEntry
 */
export const SentinelDailyHideEntry = {
  typeUrl: "/sparkdream.artifact.v1.SentinelDailyHideEntry",
  encode(message: SentinelDailyHideEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sentinel !== "") {
      writer.uint32(10).string(message.sentinel);
    }
    if (message.day !== BigInt(0)) {
      writer.uint32(16).int64(message.day);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SentinelDailyHideEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSentinelDailyHideEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sentinel = reader.string();
          break;
        case 2:
          message.day = reader.int64();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SentinelDailyHideEntry>): SentinelDailyHideEntry {
    const message = createBaseSentinelDailyHideEntry();
    message.sentinel = object.sentinel ?? "";
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: SentinelDailyHideEntryAmino): SentinelDailyHideEntry {
    const message = createBaseSentinelDailyHideEntry();
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: SentinelDailyHideEntry): SentinelDailyHideEntryAmino {
    const obj: any = {};
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    obj.count = message.count === 0 ? undefined : message.count;
    return obj;
  },
  fromAminoMsg(object: SentinelDailyHideEntryAminoMsg): SentinelDailyHideEntry {
    return SentinelDailyHideEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SentinelDailyHideEntryProtoMsg): SentinelDailyHideEntry {
    return SentinelDailyHideEntry.decode(message.value);
  },
  toProto(message: SentinelDailyHideEntry): Uint8Array {
    return SentinelDailyHideEntry.encode(message).finish();
  },
  toProtoMsg(message: SentinelDailyHideEntry): SentinelDailyHideEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.SentinelDailyHideEntry",
      value: SentinelDailyHideEntry.encode(message).finish()
    };
  }
};
function createBaseHarbergerPolicy(): HarbergerPolicy {
  return {
    taxBpsPerYear: 0,
    taxPeriod: BigInt(0),
    foreclosureDuration: BigInt(0)
  };
}
/**
 * HarbergerPolicy makes a class's tokens partially commonly owned: each
 * holder self-assesses a price, anyone may buy the token at that price at
 * any time, and the holder pays a yearly tax on it to the community pool
 * through an x/session RecurringPull. Fixed at creation; tax_bps_per_year 0
 * means a plain class.
 * @name HarbergerPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HarbergerPolicy
 */
export const HarbergerPolicy = {
  typeUrl: "/sparkdream.artifact.v1.HarbergerPolicy",
  encode(message: HarbergerPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.taxBpsPerYear !== 0) {
      writer.uint32(8).uint32(message.taxBpsPerYear);
    }
    if (message.taxPeriod !== BigInt(0)) {
      writer.uint32(16).int64(message.taxPeriod);
    }
    if (message.foreclosureDuration !== BigInt(0)) {
      writer.uint32(24).int64(message.foreclosureDuration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HarbergerPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHarbergerPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxBpsPerYear = reader.uint32();
          break;
        case 2:
          message.taxPeriod = reader.int64();
          break;
        case 3:
          message.foreclosureDuration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HarbergerPolicy>): HarbergerPolicy {
    const message = createBaseHarbergerPolicy();
    message.taxBpsPerYear = object.taxBpsPerYear ?? 0;
    message.taxPeriod = object.taxPeriod !== undefined && object.taxPeriod !== null ? BigInt(object.taxPeriod.toString()) : BigInt(0);
    message.foreclosureDuration = object.foreclosureDuration !== undefined && object.foreclosureDuration !== null ? BigInt(object.foreclosureDuration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HarbergerPolicyAmino): HarbergerPolicy {
    const message = createBaseHarbergerPolicy();
    if (object.tax_bps_per_year !== undefined && object.tax_bps_per_year !== null) {
      message.taxBpsPerYear = object.tax_bps_per_year;
    }
    if (object.tax_period !== undefined && object.tax_period !== null) {
      message.taxPeriod = BigInt(object.tax_period);
    }
    if (object.foreclosure_duration !== undefined && object.foreclosure_duration !== null) {
      message.foreclosureDuration = BigInt(object.foreclosure_duration);
    }
    return message;
  },
  toAmino(message: HarbergerPolicy): HarbergerPolicyAmino {
    const obj: any = {};
    obj.tax_bps_per_year = message.taxBpsPerYear === 0 ? undefined : message.taxBpsPerYear;
    obj.tax_period = message.taxPeriod !== BigInt(0) ? message.taxPeriod?.toString() : undefined;
    obj.foreclosure_duration = message.foreclosureDuration !== BigInt(0) ? message.foreclosureDuration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HarbergerPolicyAminoMsg): HarbergerPolicy {
    return HarbergerPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: HarbergerPolicyProtoMsg): HarbergerPolicy {
    return HarbergerPolicy.decode(message.value);
  },
  toProto(message: HarbergerPolicy): Uint8Array {
    return HarbergerPolicy.encode(message).finish();
  },
  toProtoMsg(message: HarbergerPolicy): HarbergerPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.HarbergerPolicy",
      value: HarbergerPolicy.encode(message).finish()
    };
  }
};
function createBaseHarbergerState(): HarbergerState {
  return {
    price: "",
    grantId: BigInt(0),
    nextDue: BigInt(0),
    graceUntil: BigInt(0),
    foreclosedAt: BigInt(0),
    taxPaid: ""
  };
}
/**
 * HarbergerState is a Harberger token's self-assessment and tax status.
 * @name HarbergerState
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.HarbergerState
 */
export const HarbergerState = {
  typeUrl: "/sparkdream.artifact.v1.HarbergerState",
  encode(message: HarbergerState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(16).uint64(message.grantId);
    }
    if (message.nextDue !== BigInt(0)) {
      writer.uint32(24).int64(message.nextDue);
    }
    if (message.graceUntil !== BigInt(0)) {
      writer.uint32(32).int64(message.graceUntil);
    }
    if (message.foreclosedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.foreclosedAt);
    }
    if (message.taxPaid !== "") {
      writer.uint32(50).string(message.taxPaid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HarbergerState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHarbergerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.grantId = reader.uint64();
          break;
        case 3:
          message.nextDue = reader.int64();
          break;
        case 4:
          message.graceUntil = reader.int64();
          break;
        case 5:
          message.foreclosedAt = reader.int64();
          break;
        case 6:
          message.taxPaid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HarbergerState>): HarbergerState {
    const message = createBaseHarbergerState();
    message.price = object.price ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    message.nextDue = object.nextDue !== undefined && object.nextDue !== null ? BigInt(object.nextDue.toString()) : BigInt(0);
    message.graceUntil = object.graceUntil !== undefined && object.graceUntil !== null ? BigInt(object.graceUntil.toString()) : BigInt(0);
    message.foreclosedAt = object.foreclosedAt !== undefined && object.foreclosedAt !== null ? BigInt(object.foreclosedAt.toString()) : BigInt(0);
    message.taxPaid = object.taxPaid ?? "";
    return message;
  },
  fromAmino(object: HarbergerStateAmino): HarbergerState {
    const message = createBaseHarbergerState();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    if (object.next_due !== undefined && object.next_due !== null) {
      message.nextDue = BigInt(object.next_due);
    }
    if (object.grace_until !== undefined && object.grace_until !== null) {
      message.graceUntil = BigInt(object.grace_until);
    }
    if (object.foreclosed_at !== undefined && object.foreclosed_at !== null) {
      message.foreclosedAt = BigInt(object.foreclosed_at);
    }
    if (object.tax_paid !== undefined && object.tax_paid !== null) {
      message.taxPaid = object.tax_paid;
    }
    return message;
  },
  toAmino(message: HarbergerState): HarbergerStateAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    obj.next_due = message.nextDue !== BigInt(0) ? message.nextDue?.toString() : undefined;
    obj.grace_until = message.graceUntil !== BigInt(0) ? message.graceUntil?.toString() : undefined;
    obj.foreclosed_at = message.foreclosedAt !== BigInt(0) ? message.foreclosedAt?.toString() : undefined;
    obj.tax_paid = message.taxPaid === "" ? undefined : message.taxPaid;
    return obj;
  },
  fromAminoMsg(object: HarbergerStateAminoMsg): HarbergerState {
    return HarbergerState.fromAmino(object.value);
  },
  fromProtoMsg(message: HarbergerStateProtoMsg): HarbergerState {
    return HarbergerState.decode(message.value);
  },
  toProto(message: HarbergerState): Uint8Array {
    return HarbergerState.encode(message).finish();
  },
  toProtoMsg(message: HarbergerState): HarbergerStateProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.HarbergerState",
      value: HarbergerState.encode(message).finish()
    };
  }
};
function createBaseRental(): Rental {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    owner: "",
    user: "",
    startedAt: BigInt(0),
    expiresAt: BigInt(0),
    ownerMayEnd: false,
    price: Coin.fromPartial({})
  };
}
/**
 * Rental is an active time-limited user right on one token. The token is
 * RENTED-locked: it cannot move, be listed, burned or nested until the
 * rental ends.
 * @name Rental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Rental
 */
export const Rental = {
  typeUrl: "/sparkdream.artifact.v1.Rental",
  encode(message: Rental, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.startedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.startedAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(48).int64(message.expiresAt);
    }
    if (message.ownerMayEnd === true) {
      writer.uint32(56).bool(message.ownerMayEnd);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Rental {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRental();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.startedAt = reader.int64();
          break;
        case 6:
          message.expiresAt = reader.int64();
          break;
        case 7:
          message.ownerMayEnd = reader.bool();
          break;
        case 8:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Rental>): Rental {
    const message = createBaseRental();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.user = object.user ?? "";
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? BigInt(object.startedAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.ownerMayEnd = object.ownerMayEnd ?? false;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: RentalAmino): Rental {
    const message = createBaseRental();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.started_at !== undefined && object.started_at !== null) {
      message.startedAt = BigInt(object.started_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.owner_may_end !== undefined && object.owner_may_end !== null) {
      message.ownerMayEnd = object.owner_may_end;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: Rental): RentalAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.user = message.user === "" ? undefined : message.user;
    obj.started_at = message.startedAt !== BigInt(0) ? message.startedAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.owner_may_end = message.ownerMayEnd === false ? undefined : message.ownerMayEnd;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: RentalAminoMsg): Rental {
    return Rental.fromAmino(object.value);
  },
  fromProtoMsg(message: RentalProtoMsg): Rental {
    return Rental.decode(message.value);
  },
  toProto(message: Rental): Uint8Array {
    return Rental.encode(message).finish();
  },
  toProtoMsg(message: Rental): RentalProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Rental",
      value: Rental.encode(message).finish()
    };
  }
};
function createBaseRentalOffer(): RentalOffer {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    owner: "",
    user: "",
    price: Coin.fromPartial({}),
    duration: BigInt(0),
    ownerMayEnd: false,
    createdAt: BigInt(0),
    expiresAt: BigInt(0),
    nonce: BigInt(0)
  };
}
/**
 * RentalOffer is an owner's standing offer to rent a token out. Nothing is
 * locked or escrowed; MsgAcceptRental settles it atomically.
 * @name RentalOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.RentalOffer
 */
export const RentalOffer = {
  typeUrl: "/sparkdream.artifact.v1.RentalOffer",
  encode(message: RentalOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(48).int64(message.duration);
    }
    if (message.ownerMayEnd === true) {
      writer.uint32(56).bool(message.ownerMayEnd);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(64).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(72).int64(message.expiresAt);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(80).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RentalOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRentalOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.duration = reader.int64();
          break;
        case 7:
          message.ownerMayEnd = reader.bool();
          break;
        case 8:
          message.createdAt = reader.int64();
          break;
        case 9:
          message.expiresAt = reader.int64();
          break;
        case 10:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RentalOffer>): RentalOffer {
    const message = createBaseRentalOffer();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.user = object.user ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.ownerMayEnd = object.ownerMayEnd ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RentalOfferAmino): RentalOffer {
    const message = createBaseRentalOffer();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.owner_may_end !== undefined && object.owner_may_end !== null) {
      message.ownerMayEnd = object.owner_may_end;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: RentalOffer): RentalOfferAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.user = message.user === "" ? undefined : message.user;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    obj.owner_may_end = message.ownerMayEnd === false ? undefined : message.ownerMayEnd;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RentalOfferAminoMsg): RentalOffer {
    return RentalOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: RentalOfferProtoMsg): RentalOffer {
    return RentalOffer.decode(message.value);
  },
  toProto(message: RentalOffer): Uint8Array {
    return RentalOffer.encode(message).finish();
  },
  toProtoMsg(message: RentalOffer): RentalOfferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.RentalOffer",
      value: RentalOffer.encode(message).finish()
    };
  }
};
function createBaseImpactClaim(): ImpactClaim {
  return {
    scope: "",
    contributors: [],
    workStart: BigInt(0),
    workEnd: BigInt(0),
    initiativeId: BigInt(0)
  };
}
/**
 * ImpactClaim describes a piece of work an edition certifies (an impact
 * certificate). Holders of the edition's units share whatever retroactive
 * funders pay to it (MsgFundEdition); DREAM never touches a certificate.
 * @name ImpactClaim
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ImpactClaim
 */
export const ImpactClaim = {
  typeUrl: "/sparkdream.artifact.v1.ImpactClaim",
  encode(message: ImpactClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    for (const v of message.contributors) {
      writer.uint32(18).string(v!);
    }
    if (message.workStart !== BigInt(0)) {
      writer.uint32(24).int64(message.workStart);
    }
    if (message.workEnd !== BigInt(0)) {
      writer.uint32(32).int64(message.workEnd);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImpactClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImpactClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.contributors.push(reader.string());
          break;
        case 3:
          message.workStart = reader.int64();
          break;
        case 4:
          message.workEnd = reader.int64();
          break;
        case 5:
          message.initiativeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ImpactClaim>): ImpactClaim {
    const message = createBaseImpactClaim();
    message.scope = object.scope ?? "";
    message.contributors = object.contributors?.map(e => e) || [];
    message.workStart = object.workStart !== undefined && object.workStart !== null ? BigInt(object.workStart.toString()) : BigInt(0);
    message.workEnd = object.workEnd !== undefined && object.workEnd !== null ? BigInt(object.workEnd.toString()) : BigInt(0);
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ImpactClaimAmino): ImpactClaim {
    const message = createBaseImpactClaim();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    message.contributors = object.contributors?.map(e => e) || [];
    if (object.work_start !== undefined && object.work_start !== null) {
      message.workStart = BigInt(object.work_start);
    }
    if (object.work_end !== undefined && object.work_end !== null) {
      message.workEnd = BigInt(object.work_end);
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: ImpactClaim): ImpactClaimAmino {
    const obj: any = {};
    obj.scope = message.scope === "" ? undefined : message.scope;
    if (message.contributors) {
      obj.contributors = message.contributors.map(e => e);
    } else {
      obj.contributors = message.contributors;
    }
    obj.work_start = message.workStart !== BigInt(0) ? message.workStart?.toString() : undefined;
    obj.work_end = message.workEnd !== BigInt(0) ? message.workEnd?.toString() : undefined;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ImpactClaimAminoMsg): ImpactClaim {
    return ImpactClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: ImpactClaimProtoMsg): ImpactClaim {
    return ImpactClaim.decode(message.value);
  },
  toProto(message: ImpactClaim): Uint8Array {
    return ImpactClaim.encode(message).finish();
  },
  toProtoMsg(message: ImpactClaim): ImpactClaimProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.ImpactClaim",
      value: ImpactClaim.encode(message).finish()
    };
  }
};
function createBaseEdition(): Edition {
  return {
    classId: BigInt(0),
    id: BigInt(0),
    creator: "",
    metadata: TokenMetadata.fromPartial({}),
    metadataFrozen: false,
    maxSupply: BigInt(0),
    supply: BigInt(0),
    burned: BigInt(0),
    reserved: BigInt(0),
    status: 0,
    mediaFlags: 0,
    mediaRulesVersion: 0,
    createdAt: BigInt(0),
    claim: ImpactClaim.fromPartial({}),
    rewardPerUnit: "",
    rewardsFunded: "",
    holders: BigInt(0)
  };
}
/**
 * Edition is one semi-fungible token id of an EDITIONS class: identical
 * units held as per-address balances.
 * @name Edition
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Edition
 */
export const Edition = {
  typeUrl: "/sparkdream.artifact.v1.Edition",
  encode(message: Edition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadataFrozen === true) {
      writer.uint32(40).bool(message.metadataFrozen);
    }
    if (message.maxSupply !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxSupply);
    }
    if (message.supply !== BigInt(0)) {
      writer.uint32(56).uint64(message.supply);
    }
    if (message.burned !== BigInt(0)) {
      writer.uint32(64).uint64(message.burned);
    }
    if (message.reserved !== BigInt(0)) {
      writer.uint32(72).uint64(message.reserved);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.mediaFlags !== 0) {
      writer.uint32(88).uint32(message.mediaFlags);
    }
    if (message.mediaRulesVersion !== 0) {
      writer.uint32(96).uint32(message.mediaRulesVersion);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(104).int64(message.createdAt);
    }
    if (message.claim !== undefined) {
      ImpactClaim.encode(message.claim, writer.uint32(114).fork()).ldelim();
    }
    if (message.rewardPerUnit !== "") {
      writer.uint32(122).string(message.rewardPerUnit);
    }
    if (message.rewardsFunded !== "") {
      writer.uint32(130).string(message.rewardsFunded);
    }
    if (message.holders !== BigInt(0)) {
      writer.uint32(136).uint64(message.holders);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Edition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.metadataFrozen = reader.bool();
          break;
        case 6:
          message.maxSupply = reader.uint64();
          break;
        case 7:
          message.supply = reader.uint64();
          break;
        case 8:
          message.burned = reader.uint64();
          break;
        case 9:
          message.reserved = reader.uint64();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.mediaFlags = reader.uint32();
          break;
        case 12:
          message.mediaRulesVersion = reader.uint32();
          break;
        case 13:
          message.createdAt = reader.int64();
          break;
        case 14:
          message.claim = ImpactClaim.decode(reader, reader.uint32());
          break;
        case 15:
          message.rewardPerUnit = reader.string();
          break;
        case 16:
          message.rewardsFunded = reader.string();
          break;
        case 17:
          message.holders = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Edition>): Edition {
    const message = createBaseEdition();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.metadataFrozen = object.metadataFrozen ?? false;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.supply = object.supply !== undefined && object.supply !== null ? BigInt(object.supply.toString()) : BigInt(0);
    message.burned = object.burned !== undefined && object.burned !== null ? BigInt(object.burned.toString()) : BigInt(0);
    message.reserved = object.reserved !== undefined && object.reserved !== null ? BigInt(object.reserved.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.mediaFlags = object.mediaFlags ?? 0;
    message.mediaRulesVersion = object.mediaRulesVersion ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.claim = object.claim !== undefined && object.claim !== null ? ImpactClaim.fromPartial(object.claim) : undefined;
    message.rewardPerUnit = object.rewardPerUnit ?? "";
    message.rewardsFunded = object.rewardsFunded ?? "";
    message.holders = object.holders !== undefined && object.holders !== null ? BigInt(object.holders.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EditionAmino): Edition {
    const message = createBaseEdition();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.metadata_frozen !== undefined && object.metadata_frozen !== null) {
      message.metadataFrozen = object.metadata_frozen;
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = BigInt(object.max_supply);
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = BigInt(object.supply);
    }
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = BigInt(object.burned);
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = BigInt(object.reserved);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.media_flags !== undefined && object.media_flags !== null) {
      message.mediaFlags = object.media_flags;
    }
    if (object.media_rules_version !== undefined && object.media_rules_version !== null) {
      message.mediaRulesVersion = object.media_rules_version;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = ImpactClaim.fromAmino(object.claim);
    }
    if (object.reward_per_unit !== undefined && object.reward_per_unit !== null) {
      message.rewardPerUnit = object.reward_per_unit;
    }
    if (object.rewards_funded !== undefined && object.rewards_funded !== null) {
      message.rewardsFunded = object.rewards_funded;
    }
    if (object.holders !== undefined && object.holders !== null) {
      message.holders = BigInt(object.holders);
    }
    return message;
  },
  toAmino(message: Edition): EditionAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.metadata_frozen = message.metadataFrozen === false ? undefined : message.metadataFrozen;
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
    obj.supply = message.supply !== BigInt(0) ? message.supply?.toString() : undefined;
    obj.burned = message.burned !== BigInt(0) ? message.burned?.toString() : undefined;
    obj.reserved = message.reserved !== BigInt(0) ? message.reserved?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.media_flags = message.mediaFlags === 0 ? undefined : message.mediaFlags;
    obj.media_rules_version = message.mediaRulesVersion === 0 ? undefined : message.mediaRulesVersion;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.claim = message.claim ? ImpactClaim.toAmino(message.claim) : ImpactClaim.toAmino(ImpactClaim.fromPartial({}));
    obj.reward_per_unit = message.rewardPerUnit === "" ? undefined : message.rewardPerUnit;
    obj.rewards_funded = message.rewardsFunded === "" ? undefined : message.rewardsFunded;
    obj.holders = message.holders !== BigInt(0) ? message.holders?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EditionAminoMsg): Edition {
    return Edition.fromAmino(object.value);
  },
  fromProtoMsg(message: EditionProtoMsg): Edition {
    return Edition.decode(message.value);
  },
  toProto(message: Edition): Uint8Array {
    return Edition.encode(message).finish();
  },
  toProtoMsg(message: Edition): EditionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Edition",
      value: Edition.encode(message).finish()
    };
  }
};
function createBaseBalance(): Balance {
  return {
    classId: BigInt(0),
    editionId: BigInt(0),
    owner: "",
    amount: BigInt(0),
    locked: BigInt(0),
    deposit: "",
    rewardDebt: "",
    unclaimed: ""
  };
}
/**
 * Balance is one address's units of one edition.
 * @name Balance
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Balance
 */
export const Balance = {
  typeUrl: "/sparkdream.artifact.v1.Balance",
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.locked !== BigInt(0)) {
      writer.uint32(40).uint64(message.locked);
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    if (message.rewardDebt !== "") {
      writer.uint32(58).string(message.rewardDebt);
    }
    if (message.unclaimed !== "") {
      writer.uint32(66).string(message.unclaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Balance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.editionId = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.amount = reader.uint64();
          break;
        case 5:
          message.locked = reader.uint64();
          break;
        case 6:
          message.deposit = reader.string();
          break;
        case 7:
          message.rewardDebt = reader.string();
          break;
        case 8:
          message.unclaimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.locked = object.locked !== undefined && object.locked !== null ? BigInt(object.locked.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    message.rewardDebt = object.rewardDebt ?? "";
    message.unclaimed = object.unclaimed ?? "";
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    const message = createBaseBalance();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = BigInt(object.locked);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.reward_debt !== undefined && object.reward_debt !== null) {
      message.rewardDebt = object.reward_debt;
    }
    if (object.unclaimed !== undefined && object.unclaimed !== null) {
      message.unclaimed = object.unclaimed;
    }
    return message;
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.locked = message.locked !== BigInt(0) ? message.locked?.toString() : undefined;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    obj.reward_debt = message.rewardDebt === "" ? undefined : message.rewardDebt;
    obj.unclaimed = message.unclaimed === "" ? undefined : message.unclaimed;
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};
function createBaseEditionRef(): EditionRef {
  return {
    classId: BigInt(0),
    editionId: BigInt(0)
  };
}
/**
 * EditionRef addresses one edition.
 * @name EditionRef
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.EditionRef
 */
export const EditionRef = {
  typeUrl: "/sparkdream.artifact.v1.EditionRef",
  encode(message: EditionRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EditionRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditionRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.editionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EditionRef>): EditionRef {
    const message = createBaseEditionRef();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EditionRefAmino): EditionRef {
    const message = createBaseEditionRef();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    return message;
  },
  toAmino(message: EditionRef): EditionRefAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EditionRefAminoMsg): EditionRef {
    return EditionRef.fromAmino(object.value);
  },
  fromProtoMsg(message: EditionRefProtoMsg): EditionRef {
    return EditionRef.decode(message.value);
  },
  toProto(message: EditionRef): Uint8Array {
    return EditionRef.encode(message).finish();
  },
  toProtoMsg(message: EditionRef): EditionRefProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.EditionRef",
      value: EditionRef.encode(message).finish()
    };
  }
};
function createBasePendingUnits(): PendingUnits {
  return {
    id: BigInt(0),
    kind: 0,
    classId: BigInt(0),
    editionId: BigInt(0),
    from: "",
    to: "",
    amount: BigInt(0),
    deposit: "",
    createdAt: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * PendingUnits is a unit transfer or mint awaiting the recipient. Its inbox
 * ref is (class_id 0, token_id = id): class 0 is never a real class.
 * @name PendingUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.PendingUnits
 */
export const PendingUnits = {
  typeUrl: "/sparkdream.artifact.v1.PendingUnits",
  encode(message: PendingUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(24).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(32).uint64(message.editionId);
    }
    if (message.from !== "") {
      writer.uint32(42).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(56).uint64(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(72).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(80).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.kind = reader.int32() as any;
          break;
        case 3:
          message.classId = reader.uint64();
          break;
        case 4:
          message.editionId = reader.uint64();
          break;
        case 5:
          message.from = reader.string();
          break;
        case 6:
          message.to = reader.string();
          break;
        case 7:
          message.amount = reader.uint64();
          break;
        case 8:
          message.deposit = reader.string();
          break;
        case 9:
          message.createdAt = reader.int64();
          break;
        case 10:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingUnits>): PendingUnits {
    const message = createBasePendingUnits();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.kind = object.kind ?? 0;
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingUnitsAmino): PendingUnits {
    const message = createBasePendingUnits();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: PendingUnits): PendingUnitsAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingUnitsAminoMsg): PendingUnits {
    return PendingUnits.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingUnitsProtoMsg): PendingUnits {
    return PendingUnits.decode(message.value);
  },
  toProto(message: PendingUnits): Uint8Array {
    return PendingUnits.encode(message).finish();
  },
  toProtoMsg(message: PendingUnits): PendingUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.PendingUnits",
      value: PendingUnits.encode(message).finish()
    };
  }
};
function createBaseUnitListing(): UnitListing {
  return {
    id: BigInt(0),
    classId: BigInt(0),
    editionId: BigInt(0),
    seller: "",
    quantity: BigInt(0),
    unitPrice: Coin.fromPartial({}),
    createdAt: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * UnitListing offers units of an edition at a fixed per-unit price. The
 * listed units are locked in the seller's balance; buyers may take part.
 * @name UnitListing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitListing
 */
export const UnitListing = {
  typeUrl: "/sparkdream.artifact.v1.UnitListing",
  encode(message: UnitListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.editionId);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    if (message.quantity !== BigInt(0)) {
      writer.uint32(40).uint64(message.quantity);
    }
    if (message.unitPrice !== undefined) {
      Coin.encode(message.unitPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(64).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnitListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.editionId = reader.uint64();
          break;
        case 4:
          message.seller = reader.string();
          break;
        case 5:
          message.quantity = reader.uint64();
          break;
        case 6:
          message.unitPrice = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnitListing>): UnitListing {
    const message = createBaseUnitListing();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.seller = object.seller ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? BigInt(object.quantity.toString()) : BigInt(0);
    message.unitPrice = object.unitPrice !== undefined && object.unitPrice !== null ? Coin.fromPartial(object.unitPrice) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnitListingAmino): UnitListing {
    const message = createBaseUnitListing();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = BigInt(object.quantity);
    }
    if (object.unit_price !== undefined && object.unit_price !== null) {
      message.unitPrice = Coin.fromAmino(object.unit_price);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: UnitListing): UnitListingAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.quantity = message.quantity !== BigInt(0) ? message.quantity?.toString() : undefined;
    obj.unit_price = message.unitPrice ? Coin.toAmino(message.unitPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnitListingAminoMsg): UnitListing {
    return UnitListing.fromAmino(object.value);
  },
  fromProtoMsg(message: UnitListingProtoMsg): UnitListing {
    return UnitListing.decode(message.value);
  },
  toProto(message: UnitListing): Uint8Array {
    return UnitListing.encode(message).finish();
  },
  toProtoMsg(message: UnitListing): UnitListingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.UnitListing",
      value: UnitListing.encode(message).finish()
    };
  }
};
function createBaseCraftInput(): CraftInput {
  return {
    classId: BigInt(0),
    editionId: BigInt(0),
    quantity: BigInt(0)
  };
}
/**
 * CraftInput is one ingredient of a recipe: quantity tokens of a UNIQUE
 * class (edition_id 0), or quantity units of an edition.
 * @name CraftInput
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.CraftInput
 */
export const CraftInput = {
  typeUrl: "/sparkdream.artifact.v1.CraftInput",
  encode(message: CraftInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.quantity !== BigInt(0)) {
      writer.uint32(24).uint64(message.quantity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CraftInput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCraftInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.editionId = reader.uint64();
          break;
        case 3:
          message.quantity = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CraftInput>): CraftInput {
    const message = createBaseCraftInput();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.quantity = object.quantity !== undefined && object.quantity !== null ? BigInt(object.quantity.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CraftInputAmino): CraftInput {
    const message = createBaseCraftInput();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = BigInt(object.quantity);
    }
    return message;
  },
  toAmino(message: CraftInput): CraftInputAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.quantity = message.quantity !== BigInt(0) ? message.quantity?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CraftInputAminoMsg): CraftInput {
    return CraftInput.fromAmino(object.value);
  },
  fromProtoMsg(message: CraftInputProtoMsg): CraftInput {
    return CraftInput.decode(message.value);
  },
  toProto(message: CraftInput): Uint8Array {
    return CraftInput.encode(message).finish();
  },
  toProtoMsg(message: CraftInput): CraftInputProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.CraftInput",
      value: CraftInput.encode(message).finish()
    };
  }
};
function createBaseCraftRecipe(): CraftRecipe {
  return {
    classId: BigInt(0),
    id: BigInt(0),
    inputs: [],
    outputMetadata: TokenMetadata.fromPartial({}),
    outputEditionId: BigInt(0),
    outputQuantity: BigInt(0),
    crafts: BigInt(0)
  };
}
/**
 * CraftRecipe burns its inputs to mint into the class it belongs to.
 * Recipes can be removed at any time but none can be added after the
 * class's first craft.
 * @name CraftRecipe
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.CraftRecipe
 */
export const CraftRecipe = {
  typeUrl: "/sparkdream.artifact.v1.CraftRecipe",
  encode(message: CraftRecipe, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    for (const v of message.inputs) {
      CraftInput.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.outputMetadata !== undefined) {
      TokenMetadata.encode(message.outputMetadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.outputEditionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.outputEditionId);
    }
    if (message.outputQuantity !== BigInt(0)) {
      writer.uint32(48).uint64(message.outputQuantity);
    }
    if (message.crafts !== BigInt(0)) {
      writer.uint32(56).uint64(message.crafts);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CraftRecipe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCraftRecipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.inputs.push(CraftInput.decode(reader, reader.uint32()));
          break;
        case 4:
          message.outputMetadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.outputEditionId = reader.uint64();
          break;
        case 6:
          message.outputQuantity = reader.uint64();
          break;
        case 7:
          message.crafts = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CraftRecipe>): CraftRecipe {
    const message = createBaseCraftRecipe();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.inputs = object.inputs?.map(e => CraftInput.fromPartial(e)) || [];
    message.outputMetadata = object.outputMetadata !== undefined && object.outputMetadata !== null ? TokenMetadata.fromPartial(object.outputMetadata) : undefined;
    message.outputEditionId = object.outputEditionId !== undefined && object.outputEditionId !== null ? BigInt(object.outputEditionId.toString()) : BigInt(0);
    message.outputQuantity = object.outputQuantity !== undefined && object.outputQuantity !== null ? BigInt(object.outputQuantity.toString()) : BigInt(0);
    message.crafts = object.crafts !== undefined && object.crafts !== null ? BigInt(object.crafts.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CraftRecipeAmino): CraftRecipe {
    const message = createBaseCraftRecipe();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.inputs = object.inputs?.map(e => CraftInput.fromAmino(e)) || [];
    if (object.output_metadata !== undefined && object.output_metadata !== null) {
      message.outputMetadata = TokenMetadata.fromAmino(object.output_metadata);
    }
    if (object.output_edition_id !== undefined && object.output_edition_id !== null) {
      message.outputEditionId = BigInt(object.output_edition_id);
    }
    if (object.output_quantity !== undefined && object.output_quantity !== null) {
      message.outputQuantity = BigInt(object.output_quantity);
    }
    if (object.crafts !== undefined && object.crafts !== null) {
      message.crafts = BigInt(object.crafts);
    }
    return message;
  },
  toAmino(message: CraftRecipe): CraftRecipeAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? CraftInput.toAmino(e) : undefined);
    } else {
      obj.inputs = message.inputs;
    }
    obj.output_metadata = message.outputMetadata ? TokenMetadata.toAmino(message.outputMetadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.output_edition_id = message.outputEditionId !== BigInt(0) ? message.outputEditionId?.toString() : undefined;
    obj.output_quantity = message.outputQuantity !== BigInt(0) ? message.outputQuantity?.toString() : undefined;
    obj.crafts = message.crafts !== BigInt(0) ? message.crafts?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CraftRecipeAminoMsg): CraftRecipe {
    return CraftRecipe.fromAmino(object.value);
  },
  fromProtoMsg(message: CraftRecipeProtoMsg): CraftRecipe {
    return CraftRecipe.decode(message.value);
  },
  toProto(message: CraftRecipe): Uint8Array {
    return CraftRecipe.encode(message).finish();
  },
  toProtoMsg(message: CraftRecipe): CraftRecipeProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.CraftRecipe",
      value: CraftRecipe.encode(message).finish()
    };
  }
};
function createBaseOffer(): Offer {
  return {
    id: BigInt(0),
    bidder: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    price: Coin.fromPartial({}),
    createdAt: BigInt(0),
    expiresAt: BigInt(0),
    expectedMetadataHash: "",
    expectedContentsHash: ""
  };
}
/**
 * Offer is an escrowed SPARK bid to buy a token (token_id set) or any
 * token of a class (token_id 0, a collection offer). The price waits in the
 * module account until the offer is accepted, cancelled or expires.
 * @name Offer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Offer
 */
export const Offer = {
  typeUrl: "/sparkdream.artifact.v1.Offer",
  encode(message: Offer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(24).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(32).uint64(message.tokenId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(56).int64(message.expiresAt);
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(66).string(message.expectedMetadataHash);
    }
    if (message.expectedContentsHash !== "") {
      writer.uint32(74).string(message.expectedContentsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Offer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.classId = reader.uint64();
          break;
        case 4:
          message.tokenId = reader.uint64();
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = reader.int64();
          break;
        case 7:
          message.expiresAt = reader.int64();
          break;
        case 8:
          message.expectedMetadataHash = reader.string();
          break;
        case 9:
          message.expectedContentsHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Offer>): Offer {
    const message = createBaseOffer();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.bidder = object.bidder ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    message.expectedContentsHash = object.expectedContentsHash ?? "";
    return message;
  },
  fromAmino(object: OfferAmino): Offer {
    const message = createBaseOffer();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    if (object.expected_contents_hash !== undefined && object.expected_contents_hash !== null) {
      message.expectedContentsHash = object.expected_contents_hash;
    }
    return message;
  },
  toAmino(message: Offer): OfferAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    obj.expected_contents_hash = message.expectedContentsHash === "" ? undefined : message.expectedContentsHash;
    return obj;
  },
  fromAminoMsg(object: OfferAminoMsg): Offer {
    return Offer.fromAmino(object.value);
  },
  fromProtoMsg(message: OfferProtoMsg): Offer {
    return Offer.decode(message.value);
  },
  toProto(message: Offer): Uint8Array {
    return Offer.encode(message).finish();
  },
  toProtoMsg(message: Offer): OfferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Offer",
      value: Offer.encode(message).finish()
    };
  }
};
function createBaseAuction(): Auction {
  return {
    id: BigInt(0),
    classId: BigInt(0),
    tokenId: BigInt(0),
    seller: "",
    reservePrice: Coin.fromPartial({}),
    minIncrementBps: 0,
    createdAt: BigInt(0),
    endsAt: BigInt(0),
    highBidder: "",
    highBid: "",
    bids: 0,
    highBidMetadataHash: "",
    highBidContentsHash: ""
  };
}
/**
 * Auction is an English auction of one token: SPARK bids escrowed in the
 * module, each outbidding the last by min_increment_bps, the highest bid
 * settled at ends_at. A bid near the end extends it (anti-sniping).
 * @name Auction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.Auction
 */
export const Auction = {
  typeUrl: "/sparkdream.artifact.v1.Auction",
  encode(message: Auction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    if (message.reservePrice !== undefined) {
      Coin.encode(message.reservePrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.minIncrementBps !== 0) {
      writer.uint32(48).uint32(message.minIncrementBps);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.endsAt !== BigInt(0)) {
      writer.uint32(64).int64(message.endsAt);
    }
    if (message.highBidder !== "") {
      writer.uint32(74).string(message.highBidder);
    }
    if (message.highBid !== "") {
      writer.uint32(82).string(message.highBid);
    }
    if (message.bids !== 0) {
      writer.uint32(88).uint32(message.bids);
    }
    if (message.highBidMetadataHash !== "") {
      writer.uint32(98).string(message.highBidMetadataHash);
    }
    if (message.highBidContentsHash !== "") {
      writer.uint32(106).string(message.highBidContentsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Auction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.seller = reader.string();
          break;
        case 5:
          message.reservePrice = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.minIncrementBps = reader.uint32();
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.endsAt = reader.int64();
          break;
        case 9:
          message.highBidder = reader.string();
          break;
        case 10:
          message.highBid = reader.string();
          break;
        case 11:
          message.bids = reader.uint32();
          break;
        case 12:
          message.highBidMetadataHash = reader.string();
          break;
        case 13:
          message.highBidContentsHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Auction>): Auction {
    const message = createBaseAuction();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.seller = object.seller ?? "";
    message.reservePrice = object.reservePrice !== undefined && object.reservePrice !== null ? Coin.fromPartial(object.reservePrice) : undefined;
    message.minIncrementBps = object.minIncrementBps ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.endsAt = object.endsAt !== undefined && object.endsAt !== null ? BigInt(object.endsAt.toString()) : BigInt(0);
    message.highBidder = object.highBidder ?? "";
    message.highBid = object.highBid ?? "";
    message.bids = object.bids ?? 0;
    message.highBidMetadataHash = object.highBidMetadataHash ?? "";
    message.highBidContentsHash = object.highBidContentsHash ?? "";
    return message;
  },
  fromAmino(object: AuctionAmino): Auction {
    const message = createBaseAuction();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.reserve_price !== undefined && object.reserve_price !== null) {
      message.reservePrice = Coin.fromAmino(object.reserve_price);
    }
    if (object.min_increment_bps !== undefined && object.min_increment_bps !== null) {
      message.minIncrementBps = object.min_increment_bps;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.ends_at !== undefined && object.ends_at !== null) {
      message.endsAt = BigInt(object.ends_at);
    }
    if (object.high_bidder !== undefined && object.high_bidder !== null) {
      message.highBidder = object.high_bidder;
    }
    if (object.high_bid !== undefined && object.high_bid !== null) {
      message.highBid = object.high_bid;
    }
    if (object.bids !== undefined && object.bids !== null) {
      message.bids = object.bids;
    }
    if (object.high_bid_metadata_hash !== undefined && object.high_bid_metadata_hash !== null) {
      message.highBidMetadataHash = object.high_bid_metadata_hash;
    }
    if (object.high_bid_contents_hash !== undefined && object.high_bid_contents_hash !== null) {
      message.highBidContentsHash = object.high_bid_contents_hash;
    }
    return message;
  },
  toAmino(message: Auction): AuctionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.reserve_price = message.reservePrice ? Coin.toAmino(message.reservePrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.min_increment_bps = message.minIncrementBps === 0 ? undefined : message.minIncrementBps;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.ends_at = message.endsAt !== BigInt(0) ? message.endsAt?.toString() : undefined;
    obj.high_bidder = message.highBidder === "" ? undefined : message.highBidder;
    obj.high_bid = message.highBid === "" ? undefined : message.highBid;
    obj.bids = message.bids === 0 ? undefined : message.bids;
    obj.high_bid_metadata_hash = message.highBidMetadataHash === "" ? undefined : message.highBidMetadataHash;
    obj.high_bid_contents_hash = message.highBidContentsHash === "" ? undefined : message.highBidContentsHash;
    return obj;
  },
  fromAminoMsg(object: AuctionAminoMsg): Auction {
    return Auction.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionProtoMsg): Auction {
    return Auction.decode(message.value);
  },
  toProto(message: Auction): Uint8Array {
    return Auction.encode(message).finish();
  },
  toProtoMsg(message: Auction): AuctionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.Auction",
      value: Auction.encode(message).finish()
    };
  }
};