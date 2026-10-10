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
 * second lock. Future locks (rentals, nesting) are appended here; see
 * docs/x-artifact-spec.md §16.2.
 */
export enum TokenLock {
  TOKEN_LOCK_NONE = 0,
  TOKEN_LOCK_LISTED = 1,
  TOKEN_LOCK_PENDING_TRANSFER = 2,
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
    case BurnAuthorization.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
function createBaseClassFlags(): ClassFlags {
  return {
    transferable: false,
    burnAuthorization: 0,
    tokenMetadataMutable: false
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
    return message;
  },
  toAmino(message: ClassFlags): ClassFlagsAmino {
    const obj: any = {};
    obj.transferable = message.transferable === false ? undefined : message.transferable;
    obj.burn_authorization = message.burnAuthorization === 0 ? undefined : message.burnAuthorization;
    obj.token_metadata_mutable = message.tokenMetadataMutable === false ? undefined : message.tokenMetadataMutable;
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
    perAddressLimit: 0
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
    return message;
  },
  toAmino(message: MintPolicy): MintPolicyAmino {
    const obj: any = {};
    obj.public_mint_enabled = message.publicMintEnabled === false ? undefined : message.publicMintEnabled;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : undefined;
    obj.per_address_limit = message.perAddressLimit === 0 ? undefined : message.perAddressLimit;
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
    updatedAt: BigInt(0)
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
    mintedAt: BigInt(0)
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
    expiresAt: BigInt(0)
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