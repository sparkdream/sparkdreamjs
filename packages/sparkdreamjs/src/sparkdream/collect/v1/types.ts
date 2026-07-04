//@ts-nocheck
import { FlagRecord, FlagRecordAmino } from "../../common/v1/flag_record";
import { ModerationReason } from "../../common/v1/moderation_reason";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/** CollectionType defines the kind of items a collection holds. */
export enum CollectionType {
  COLLECTION_TYPE_UNSPECIFIED = 0,
  COLLECTION_TYPE_NFT = 1,
  COLLECTION_TYPE_LINK = 2,
  COLLECTION_TYPE_ONCHAIN = 3,
  COLLECTION_TYPE_MIXED = 4,
  UNRECOGNIZED = -1,
}
export const CollectionTypeAmino = CollectionType;
export function collectionTypeFromJSON(object: any): CollectionType {
  switch (object) {
    case 0:
    case "COLLECTION_TYPE_UNSPECIFIED":
      return CollectionType.COLLECTION_TYPE_UNSPECIFIED;
    case 1:
    case "COLLECTION_TYPE_NFT":
      return CollectionType.COLLECTION_TYPE_NFT;
    case 2:
    case "COLLECTION_TYPE_LINK":
      return CollectionType.COLLECTION_TYPE_LINK;
    case 3:
    case "COLLECTION_TYPE_ONCHAIN":
      return CollectionType.COLLECTION_TYPE_ONCHAIN;
    case 4:
    case "COLLECTION_TYPE_MIXED":
      return CollectionType.COLLECTION_TYPE_MIXED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CollectionType.UNRECOGNIZED;
  }
}
export function collectionTypeToJSON(object: CollectionType): string {
  switch (object) {
    case CollectionType.COLLECTION_TYPE_UNSPECIFIED:
      return "COLLECTION_TYPE_UNSPECIFIED";
    case CollectionType.COLLECTION_TYPE_NFT:
      return "COLLECTION_TYPE_NFT";
    case CollectionType.COLLECTION_TYPE_LINK:
      return "COLLECTION_TYPE_LINK";
    case CollectionType.COLLECTION_TYPE_ONCHAIN:
      return "COLLECTION_TYPE_ONCHAIN";
    case CollectionType.COLLECTION_TYPE_MIXED:
      return "COLLECTION_TYPE_MIXED";
    case CollectionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Visibility defines whether a collection is publicly browsable or private. */
export enum Visibility {
  VISIBILITY_UNSPECIFIED = 0,
  VISIBILITY_PUBLIC = 1,
  VISIBILITY_PRIVATE = 2,
  UNRECOGNIZED = -1,
}
export const VisibilityAmino = Visibility;
export function visibilityFromJSON(object: any): Visibility {
  switch (object) {
    case 0:
    case "VISIBILITY_UNSPECIFIED":
      return Visibility.VISIBILITY_UNSPECIFIED;
    case 1:
    case "VISIBILITY_PUBLIC":
      return Visibility.VISIBILITY_PUBLIC;
    case 2:
    case "VISIBILITY_PRIVATE":
      return Visibility.VISIBILITY_PRIVATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Visibility.UNRECOGNIZED;
  }
}
export function visibilityToJSON(object: Visibility): string {
  switch (object) {
    case Visibility.VISIBILITY_UNSPECIFIED:
      return "VISIBILITY_UNSPECIFIED";
    case Visibility.VISIBILITY_PUBLIC:
      return "VISIBILITY_PUBLIC";
    case Visibility.VISIBILITY_PRIVATE:
      return "VISIBILITY_PRIVATE";
    case Visibility.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ReferenceType defines the kind of external reference an item points to. */
export enum ReferenceType {
  REFERENCE_TYPE_UNSPECIFIED = 0,
  REFERENCE_TYPE_NFT = 1,
  REFERENCE_TYPE_LINK = 2,
  REFERENCE_TYPE_ON_CHAIN = 3,
  REFERENCE_TYPE_CUSTOM = 4,
  UNRECOGNIZED = -1,
}
export const ReferenceTypeAmino = ReferenceType;
export function referenceTypeFromJSON(object: any): ReferenceType {
  switch (object) {
    case 0:
    case "REFERENCE_TYPE_UNSPECIFIED":
      return ReferenceType.REFERENCE_TYPE_UNSPECIFIED;
    case 1:
    case "REFERENCE_TYPE_NFT":
      return ReferenceType.REFERENCE_TYPE_NFT;
    case 2:
    case "REFERENCE_TYPE_LINK":
      return ReferenceType.REFERENCE_TYPE_LINK;
    case 3:
    case "REFERENCE_TYPE_ON_CHAIN":
      return ReferenceType.REFERENCE_TYPE_ON_CHAIN;
    case 4:
    case "REFERENCE_TYPE_CUSTOM":
      return ReferenceType.REFERENCE_TYPE_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReferenceType.UNRECOGNIZED;
  }
}
export function referenceTypeToJSON(object: ReferenceType): string {
  switch (object) {
    case ReferenceType.REFERENCE_TYPE_UNSPECIFIED:
      return "REFERENCE_TYPE_UNSPECIFIED";
    case ReferenceType.REFERENCE_TYPE_NFT:
      return "REFERENCE_TYPE_NFT";
    case ReferenceType.REFERENCE_TYPE_LINK:
      return "REFERENCE_TYPE_LINK";
    case ReferenceType.REFERENCE_TYPE_ON_CHAIN:
      return "REFERENCE_TYPE_ON_CHAIN";
    case ReferenceType.REFERENCE_TYPE_CUSTOM:
      return "REFERENCE_TYPE_CUSTOM";
    case ReferenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CollaboratorRole defines the permission level of a collection collaborator. */
export enum CollaboratorRole {
  COLLABORATOR_ROLE_UNSPECIFIED = 0,
  COLLABORATOR_ROLE_EDITOR = 1,
  COLLABORATOR_ROLE_ADMIN = 2,
  UNRECOGNIZED = -1,
}
export const CollaboratorRoleAmino = CollaboratorRole;
export function collaboratorRoleFromJSON(object: any): CollaboratorRole {
  switch (object) {
    case 0:
    case "COLLABORATOR_ROLE_UNSPECIFIED":
      return CollaboratorRole.COLLABORATOR_ROLE_UNSPECIFIED;
    case 1:
    case "COLLABORATOR_ROLE_EDITOR":
      return CollaboratorRole.COLLABORATOR_ROLE_EDITOR;
    case 2:
    case "COLLABORATOR_ROLE_ADMIN":
      return CollaboratorRole.COLLABORATOR_ROLE_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CollaboratorRole.UNRECOGNIZED;
  }
}
export function collaboratorRoleToJSON(object: CollaboratorRole): string {
  switch (object) {
    case CollaboratorRole.COLLABORATOR_ROLE_UNSPECIFIED:
      return "COLLABORATOR_ROLE_UNSPECIFIED";
    case CollaboratorRole.COLLABORATOR_ROLE_EDITOR:
      return "COLLABORATOR_ROLE_EDITOR";
    case CollaboratorRole.COLLABORATOR_ROLE_ADMIN:
      return "COLLABORATOR_ROLE_ADMIN";
    case CollaboratorRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CurationVerdict defines the outcome of a curator's review. */
export enum CurationVerdict {
  CURATION_VERDICT_UNSPECIFIED = 0,
  CURATION_VERDICT_UP = 1,
  CURATION_VERDICT_DOWN = 2,
  UNRECOGNIZED = -1,
}
export const CurationVerdictAmino = CurationVerdict;
export function curationVerdictFromJSON(object: any): CurationVerdict {
  switch (object) {
    case 0:
    case "CURATION_VERDICT_UNSPECIFIED":
      return CurationVerdict.CURATION_VERDICT_UNSPECIFIED;
    case 1:
    case "CURATION_VERDICT_UP":
      return CurationVerdict.CURATION_VERDICT_UP;
    case 2:
    case "CURATION_VERDICT_DOWN":
      return CurationVerdict.CURATION_VERDICT_DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CurationVerdict.UNRECOGNIZED;
  }
}
export function curationVerdictToJSON(object: CurationVerdict): string {
  switch (object) {
    case CurationVerdict.CURATION_VERDICT_UNSPECIFIED:
      return "CURATION_VERDICT_UNSPECIFIED";
    case CurationVerdict.CURATION_VERDICT_UP:
      return "CURATION_VERDICT_UP";
    case CurationVerdict.CURATION_VERDICT_DOWN:
      return "CURATION_VERDICT_DOWN";
    case CurationVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CollectionStatus defines the lifecycle state of a collection. */
export enum CollectionStatus {
  COLLECTION_STATUS_UNSPECIFIED = 0,
  COLLECTION_STATUS_ACTIVE = 1,
  COLLECTION_STATUS_PENDING = 2,
  COLLECTION_STATUS_HIDDEN = 3,
  UNRECOGNIZED = -1,
}
export const CollectionStatusAmino = CollectionStatus;
export function collectionStatusFromJSON(object: any): CollectionStatus {
  switch (object) {
    case 0:
    case "COLLECTION_STATUS_UNSPECIFIED":
      return CollectionStatus.COLLECTION_STATUS_UNSPECIFIED;
    case 1:
    case "COLLECTION_STATUS_ACTIVE":
      return CollectionStatus.COLLECTION_STATUS_ACTIVE;
    case 2:
    case "COLLECTION_STATUS_PENDING":
      return CollectionStatus.COLLECTION_STATUS_PENDING;
    case 3:
    case "COLLECTION_STATUS_HIDDEN":
      return CollectionStatus.COLLECTION_STATUS_HIDDEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CollectionStatus.UNRECOGNIZED;
  }
}
export function collectionStatusToJSON(object: CollectionStatus): string {
  switch (object) {
    case CollectionStatus.COLLECTION_STATUS_UNSPECIFIED:
      return "COLLECTION_STATUS_UNSPECIFIED";
    case CollectionStatus.COLLECTION_STATUS_ACTIVE:
      return "COLLECTION_STATUS_ACTIVE";
    case CollectionStatus.COLLECTION_STATUS_PENDING:
      return "COLLECTION_STATUS_PENDING";
    case CollectionStatus.COLLECTION_STATUS_HIDDEN:
      return "COLLECTION_STATUS_HIDDEN";
    case CollectionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ItemStatus defines the moderation state of an item. */
export enum ItemStatus {
  ITEM_STATUS_UNSPECIFIED = 0,
  ITEM_STATUS_ACTIVE = 1,
  ITEM_STATUS_HIDDEN = 2,
  UNRECOGNIZED = -1,
}
export const ItemStatusAmino = ItemStatus;
export function itemStatusFromJSON(object: any): ItemStatus {
  switch (object) {
    case 0:
    case "ITEM_STATUS_UNSPECIFIED":
      return ItemStatus.ITEM_STATUS_UNSPECIFIED;
    case 1:
    case "ITEM_STATUS_ACTIVE":
      return ItemStatus.ITEM_STATUS_ACTIVE;
    case 2:
    case "ITEM_STATUS_HIDDEN":
      return ItemStatus.ITEM_STATUS_HIDDEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ItemStatus.UNRECOGNIZED;
  }
}
export function itemStatusToJSON(object: ItemStatus): string {
  switch (object) {
    case ItemStatus.ITEM_STATUS_UNSPECIFIED:
      return "ITEM_STATUS_UNSPECIFIED";
    case ItemStatus.ITEM_STATUS_ACTIVE:
      return "ITEM_STATUS_ACTIVE";
    case ItemStatus.ITEM_STATUS_HIDDEN:
      return "ITEM_STATUS_HIDDEN";
    case ItemStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** FlagTargetType identifies whether a moderation action targets a collection or item. */
export enum FlagTargetType {
  FLAG_TARGET_TYPE_UNSPECIFIED = 0,
  FLAG_TARGET_TYPE_COLLECTION = 1,
  FLAG_TARGET_TYPE_ITEM = 2,
  UNRECOGNIZED = -1,
}
export const FlagTargetTypeAmino = FlagTargetType;
export function flagTargetTypeFromJSON(object: any): FlagTargetType {
  switch (object) {
    case 0:
    case "FLAG_TARGET_TYPE_UNSPECIFIED":
      return FlagTargetType.FLAG_TARGET_TYPE_UNSPECIFIED;
    case 1:
    case "FLAG_TARGET_TYPE_COLLECTION":
      return FlagTargetType.FLAG_TARGET_TYPE_COLLECTION;
    case 2:
    case "FLAG_TARGET_TYPE_ITEM":
      return FlagTargetType.FLAG_TARGET_TYPE_ITEM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FlagTargetType.UNRECOGNIZED;
  }
}
export function flagTargetTypeToJSON(object: FlagTargetType): string {
  switch (object) {
    case FlagTargetType.FLAG_TARGET_TYPE_UNSPECIFIED:
      return "FLAG_TARGET_TYPE_UNSPECIFIED";
    case FlagTargetType.FLAG_TARGET_TYPE_COLLECTION:
      return "FLAG_TARGET_TYPE_COLLECTION";
    case FlagTargetType.FLAG_TARGET_TYPE_ITEM:
      return "FLAG_TARGET_TYPE_ITEM";
    case FlagTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Collection represents a curated set of items owned by an address.
 * @name Collection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Collection
 */
export interface Collection {
  id: bigint;
  owner: string;
  name: string;
  description: string;
  coverUri: string;
  tags: string[];
  encryptedData: Uint8Array;
  type: CollectionType;
  visibility: Visibility;
  encrypted: boolean;
  itemCount: bigint;
  collaboratorCount: number;
  createdAt: bigint;
  updatedAt: bigint;
  expiresAt: bigint;
  depositAmount: string;
  itemDepositTotal: string;
  depositBurned: boolean;
  sponsoredBy: string;
  communityFeedbackEnabled: boolean;
  status: CollectionStatus;
  upvoteCount: bigint;
  downvoteCount: bigint;
  endorsedBy: string;
  seekingEndorsement: boolean;
  immutable: boolean;
  convictionSustained: boolean;
  initiativeId: bigint;
  /**
   * pinned is a display-only marker set by MsgPinCollection and cleared by
   * MsgUnpinCollection. Requires the collection to already be permanent
   * (expires_at == 0); does not affect lifecycle. The lifecycle change
   * (ephemeral → permanent + deposit burn) is owned by
   * MsgMakeCollectionPermanent.
   */
  pinned: boolean;
  /**
   * non_member_collaborator_count counts how many of `collaborator_count` are
   * non-members (stake-bearing collaborators). Maintained alongside the total
   * count; bounded by Params.max_non_member_collaborators_per_collection.
   */
  nonMemberCollaboratorCount: number;
}
export interface CollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.Collection";
  value: Uint8Array;
}
/**
 * Collection represents a curated set of items owned by an address.
 * @name CollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Collection
 */
export interface CollectionAmino {
  id?: string;
  owner?: string;
  name?: string;
  description?: string;
  cover_uri?: string;
  tags?: string[];
  encrypted_data?: string;
  type?: CollectionType;
  visibility?: Visibility;
  encrypted?: boolean;
  item_count?: string;
  collaborator_count?: number;
  created_at?: string;
  updated_at?: string;
  expires_at?: string;
  deposit_amount?: string;
  item_deposit_total?: string;
  deposit_burned?: boolean;
  sponsored_by?: string;
  community_feedback_enabled?: boolean;
  status?: CollectionStatus;
  upvote_count?: string;
  downvote_count?: string;
  endorsed_by?: string;
  seeking_endorsement?: boolean;
  immutable?: boolean;
  conviction_sustained?: boolean;
  initiative_id?: string;
  /**
   * pinned is a display-only marker set by MsgPinCollection and cleared by
   * MsgUnpinCollection. Requires the collection to already be permanent
   * (expires_at == 0); does not affect lifecycle. The lifecycle change
   * (ephemeral → permanent + deposit burn) is owned by
   * MsgMakeCollectionPermanent.
   */
  pinned?: boolean;
  /**
   * non_member_collaborator_count counts how many of `collaborator_count` are
   * non-members (stake-bearing collaborators). Maintained alongside the total
   * count; bounded by Params.max_non_member_collaborators_per_collection.
   */
  non_member_collaborator_count?: number;
}
export interface CollectionAminoMsg {
  type: "/sparkdream.collect.v1.Collection";
  value: CollectionAmino;
}
/**
 * Item represents a single entry within a collection.
 * @name Item
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Item
 */
export interface Item {
  id: bigint;
  collectionId: bigint;
  addedBy: string;
  title: string;
  description: string;
  imageUri: string;
  referenceType: ReferenceType;
  nft?: NftReference;
  link?: LinkReference;
  onChain?: OnChainReference;
  custom?: CustomReference;
  /**
   * proto3 does not support map in messages used as collection values easily,
   * so we use repeated KeyValuePair instead.
   */
  attributes: KeyValuePair[];
  encryptedData: Uint8Array;
  position: bigint;
  addedAt: bigint;
  status: ItemStatus;
  upvoteCount: bigint;
  downvoteCount: bigint;
}
export interface ItemProtoMsg {
  typeUrl: "/sparkdream.collect.v1.Item";
  value: Uint8Array;
}
/**
 * Item represents a single entry within a collection.
 * @name ItemAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Item
 */
export interface ItemAmino {
  id?: string;
  collection_id?: string;
  added_by?: string;
  title?: string;
  description?: string;
  image_uri?: string;
  reference_type?: ReferenceType;
  nft?: NftReferenceAmino;
  link?: LinkReferenceAmino;
  on_chain?: OnChainReferenceAmino;
  custom?: CustomReferenceAmino;
  /**
   * proto3 does not support map in messages used as collection values easily,
   * so we use repeated KeyValuePair instead.
   */
  attributes?: KeyValuePairAmino[];
  encrypted_data?: string;
  position?: string;
  added_at?: string;
  status?: ItemStatus;
  upvote_count?: string;
  downvote_count?: string;
}
export interface ItemAminoMsg {
  type: "/sparkdream.collect.v1.Item";
  value: ItemAmino;
}
/**
 * KeyValuePair is a generic key-value entry used for extensible attributes.
 * @name KeyValuePair
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.KeyValuePair
 */
export interface KeyValuePair {
  key: string;
  value: string;
}
export interface KeyValuePairProtoMsg {
  typeUrl: "/sparkdream.collect.v1.KeyValuePair";
  value: Uint8Array;
}
/**
 * KeyValuePair is a generic key-value entry used for extensible attributes.
 * @name KeyValuePairAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.KeyValuePair
 */
export interface KeyValuePairAmino {
  key?: string;
  value?: string;
}
export interface KeyValuePairAminoMsg {
  type: "/sparkdream.collect.v1.KeyValuePair";
  value: KeyValuePairAmino;
}
/**
 * NftReference points to an NFT on a specific chain and contract.
 * @name NftReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.NftReference
 */
export interface NftReference {
  chainId: string;
  contractAddress: string;
  tokenId: string;
  tokenStandard: string;
  tokenUri: string;
}
export interface NftReferenceProtoMsg {
  typeUrl: "/sparkdream.collect.v1.NftReference";
  value: Uint8Array;
}
/**
 * NftReference points to an NFT on a specific chain and contract.
 * @name NftReferenceAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.NftReference
 */
export interface NftReferenceAmino {
  chain_id?: string;
  contract_address?: string;
  token_id?: string;
  token_standard?: string;
  token_uri?: string;
}
export interface NftReferenceAminoMsg {
  type: "/sparkdream.collect.v1.NftReference";
  value: NftReferenceAmino;
}
/**
 * LinkReference points to an external URI with optional content integrity hash.
 * @name LinkReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.LinkReference
 */
export interface LinkReference {
  uri: string;
  contentHash: string;
  contentType: string;
}
export interface LinkReferenceProtoMsg {
  typeUrl: "/sparkdream.collect.v1.LinkReference";
  value: Uint8Array;
}
/**
 * LinkReference points to an external URI with optional content integrity hash.
 * @name LinkReferenceAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.LinkReference
 */
export interface LinkReferenceAmino {
  uri?: string;
  content_hash?: string;
  content_type?: string;
}
export interface LinkReferenceAminoMsg {
  type: "/sparkdream.collect.v1.LinkReference";
  value: LinkReferenceAmino;
}
/**
 * OnChainReference points to an entity within another on-chain module.
 * @name OnChainReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.OnChainReference
 */
export interface OnChainReference {
  module: string;
  entityType: string;
  entityId: string;
}
export interface OnChainReferenceProtoMsg {
  typeUrl: "/sparkdream.collect.v1.OnChainReference";
  value: Uint8Array;
}
/**
 * OnChainReference points to an entity within another on-chain module.
 * @name OnChainReferenceAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.OnChainReference
 */
export interface OnChainReferenceAmino {
  module?: string;
  entity_type?: string;
  entity_id?: string;
}
export interface OnChainReferenceAminoMsg {
  type: "/sparkdream.collect.v1.OnChainReference";
  value: OnChainReferenceAmino;
}
/**
 * CustomReference allows arbitrary typed references with extensible metadata.
 * @name CustomReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CustomReference
 */
export interface CustomReference {
  typeLabel: string;
  value: string;
  extra: KeyValuePair[];
}
export interface CustomReferenceProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CustomReference";
  value: Uint8Array;
}
/**
 * CustomReference allows arbitrary typed references with extensible metadata.
 * @name CustomReferenceAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CustomReference
 */
export interface CustomReferenceAmino {
  type_label?: string;
  value?: string;
  extra?: KeyValuePairAmino[];
}
export interface CustomReferenceAminoMsg {
  type: "/sparkdream.collect.v1.CustomReference";
  value: CustomReferenceAmino;
}
/**
 * Collaborator represents a user granted edit or admin access to a collection.
 * @name Collaborator
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Collaborator
 */
export interface Collaborator {
  collectionId: bigint;
  address: string;
  role: CollaboratorRole;
  addedAt: bigint;
  /**
   * inviter is the member who added this collaborator. Set only for non-member
   * collaborators (members invite themselves implicitly via the trust-level
   * gate). Used to identify the address whose DREAM stake is locked behind
   * this collaboration.
   */
  inviter: string;
  /**
   * dream_stake is the DREAM amount the inviter locked when the collaborator
   * was added. Zero for member collaborators. Released on RemoveCollaborator
   * when the collection is ACTIVE; a fraction (non_member_collab_burn_fraction)
   * is burned and the remainder refunded when the collection is HIDDEN at
   * removal/deletion time.
   */
  dreamStake: string;
}
export interface CollaboratorProtoMsg {
  typeUrl: "/sparkdream.collect.v1.Collaborator";
  value: Uint8Array;
}
/**
 * Collaborator represents a user granted edit or admin access to a collection.
 * @name CollaboratorAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Collaborator
 */
export interface CollaboratorAmino {
  collection_id?: string;
  address?: string;
  role?: CollaboratorRole;
  added_at?: string;
  /**
   * inviter is the member who added this collaborator. Set only for non-member
   * collaborators (members invite themselves implicitly via the trust-level
   * gate). Used to identify the address whose DREAM stake is locked behind
   * this collaboration.
   */
  inviter?: string;
  /**
   * dream_stake is the DREAM amount the inviter locked when the collaborator
   * was added. Zero for member collaborators. Released on RemoveCollaborator
   * when the collection is ACTIVE; a fraction (non_member_collab_burn_fraction)
   * is burned and the remainder refunded when the collection is HIDDEN at
   * removal/deletion time.
   */
  dream_stake?: string;
}
export interface CollaboratorAminoMsg {
  type: "/sparkdream.collect.v1.Collaborator";
  value: CollaboratorAmino;
}
/**
 * CurationReview records a curator's verdict on a collection.
 * @name CurationReview
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationReview
 */
export interface CurationReview {
  id: bigint;
  collectionId: bigint;
  curator: string;
  verdict: CurationVerdict;
  tags: string[];
  comment: string;
  createdAt: bigint;
  challenged: boolean;
  overturned: boolean;
  challenger: string;
  /**
   * committed_slash is the DREAM amount reserved against the curator's bonded
   * role (ROLE_TYPE_COLLECT_CURATOR) when the review was challenged. Set at
   * MsgChallengeReview time and consumed at resolution (SlashBond on uphold,
   * ReleaseBond on reject). Zero / empty when the review is not challenged.
   */
  committedSlash: string;
}
export interface CurationReviewProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CurationReview";
  value: Uint8Array;
}
/**
 * CurationReview records a curator's verdict on a collection.
 * @name CurationReviewAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationReview
 */
export interface CurationReviewAmino {
  id?: string;
  collection_id?: string;
  curator?: string;
  verdict?: CurationVerdict;
  tags?: string[];
  comment?: string;
  created_at?: string;
  challenged?: boolean;
  overturned?: boolean;
  challenger?: string;
  /**
   * committed_slash is the DREAM amount reserved against the curator's bonded
   * role (ROLE_TYPE_COLLECT_CURATOR) when the review was challenged. Set at
   * MsgChallengeReview time and consumed at resolution (SlashBond on uphold,
   * ReleaseBond on reject). Zero / empty when the review is not challenged.
   */
  committed_slash?: string;
}
export interface CurationReviewAminoMsg {
  type: "/sparkdream.collect.v1.CurationReview";
  value: CurationReviewAmino;
}
/**
 * CurationSummary aggregates curation activity for a collection.
 * @name CurationSummary
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationSummary
 */
export interface CurationSummary {
  collectionId: bigint;
  upCount: number;
  downCount: number;
  topTags: TagCount[];
  lastReviewedAt: bigint;
}
export interface CurationSummaryProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CurationSummary";
  value: Uint8Array;
}
/**
 * CurationSummary aggregates curation activity for a collection.
 * @name CurationSummaryAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationSummary
 */
export interface CurationSummaryAmino {
  collection_id?: string;
  up_count?: number;
  down_count?: number;
  top_tags?: TagCountAmino[];
  last_reviewed_at?: string;
}
export interface CurationSummaryAminoMsg {
  type: "/sparkdream.collect.v1.CurationSummary";
  value: CurationSummaryAmino;
}
/**
 * TagCount pairs a tag label with the number of times it has been applied.
 * @name TagCount
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.TagCount
 */
export interface TagCount {
  tag: string;
  count: number;
}
export interface TagCountProtoMsg {
  typeUrl: "/sparkdream.collect.v1.TagCount";
  value: Uint8Array;
}
/**
 * TagCount pairs a tag label with the number of times it has been applied.
 * @name TagCountAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.TagCount
 */
export interface TagCountAmino {
  tag?: string;
  count?: number;
}
export interface TagCountAminoMsg {
  type: "/sparkdream.collect.v1.TagCount";
  value: TagCountAmino;
}
/**
 * SponsorshipRequest represents a pending request for deposit sponsorship.
 * @name SponsorshipRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.SponsorshipRequest
 */
export interface SponsorshipRequest {
  collectionId: bigint;
  requester: string;
  collectionDeposit: string;
  itemDepositTotal: string;
  requestedAt: bigint;
  expiresAt: bigint;
}
export interface SponsorshipRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.SponsorshipRequest";
  value: Uint8Array;
}
/**
 * SponsorshipRequest represents a pending request for deposit sponsorship.
 * @name SponsorshipRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.SponsorshipRequest
 */
export interface SponsorshipRequestAmino {
  collection_id?: string;
  requester?: string;
  collection_deposit?: string;
  item_deposit_total?: string;
  requested_at?: string;
  expires_at?: string;
}
export interface SponsorshipRequestAminoMsg {
  type: "/sparkdream.collect.v1.SponsorshipRequest";
  value: SponsorshipRequestAmino;
}
/**
 * AddItemEntry is used in MsgAddItems to define a new item to add to a collection.
 * @name AddItemEntry
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.AddItemEntry
 */
export interface AddItemEntry {
  title: string;
  description: string;
  imageUri: string;
  referenceType: ReferenceType;
  nft?: NftReference;
  link?: LinkReference;
  onChain?: OnChainReference;
  custom?: CustomReference;
  attributes: KeyValuePair[];
  encryptedData: Uint8Array;
}
export interface AddItemEntryProtoMsg {
  typeUrl: "/sparkdream.collect.v1.AddItemEntry";
  value: Uint8Array;
}
/**
 * AddItemEntry is used in MsgAddItems to define a new item to add to a collection.
 * @name AddItemEntryAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.AddItemEntry
 */
export interface AddItemEntryAmino {
  title?: string;
  description?: string;
  image_uri?: string;
  reference_type?: ReferenceType;
  nft?: NftReferenceAmino;
  link?: LinkReferenceAmino;
  on_chain?: OnChainReferenceAmino;
  custom?: CustomReferenceAmino;
  attributes?: KeyValuePairAmino[];
  encrypted_data?: string;
}
export interface AddItemEntryAminoMsg {
  type: "/sparkdream.collect.v1.AddItemEntry";
  value: AddItemEntryAmino;
}
/**
 * CollectOperationalParams defines council-adjustable operational parameters for x/collect.
 * @name CollectOperationalParams
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CollectOperationalParams
 */
export interface CollectOperationalParams {
  baseCollectionDeposit: string;
  perItemDeposit: string;
  perItemSpamTax: string;
  sponsorFee: string;
  minSponsorTrustLevel: string;
  sponsorshipRequestTtlBlocks: bigint;
  minCuratorBond: string;
  minCuratorTrustLevel: string;
  minCuratorAgeBlocks: bigint;
  maxTagsPerReview: number;
  maxReviewCommentLength: number;
  maxReviewsPerCollection: number;
  curatorSlashFraction: string;
  challengeWindowBlocks: bigint;
  challengeDeposit: string;
  maxChallengeReasonLength: number;
  challengeRewardFraction: string;
  downvoteCost: string;
  maxUpvotesPerDay: number;
  maxDownvotesPerDay: number;
  flagReviewThreshold: number;
  maxFlagsPerDay: number;
  maxFlaggersPerTarget: number;
  flagExpirationBlocks: bigint;
  maxFlagReasonLength: number;
  sentinelCommitAmount: string;
  hideExpiryBlocks: bigint;
  appealFee: string;
  appealCooldownBlocks: bigint;
  appealDeadlineBlocks: bigint;
  endorsementCreationFee: string;
  endorsementDreamStake: string;
  endorsementStakeDuration: bigint;
  endorsementExpiryBlocks: bigint;
  endorsementFeeEndorserShare: string;
  endorsementDeletionBurnFraction: string;
  /**
   * --- Conviction renewal parameters — OPERATIONAL ---
   */
  convictionRenewalThreshold: string;
  convictionRenewalPeriod: bigint;
  /**
   * --- Pinning parameters — OPERATIONAL ---
   */
  pinMinTrustLevel: number;
  maxPinsPerDay: number;
  /**
   * --- Curator bonded-role config (flattened) — see Params for rationale ---
   */
  curatorDemotionCooldown: bigint;
  curatorDemotionThreshold: string;
  curatorOverturnDemotionStreak: bigint;
  curatorUnbondCooldown: bigint;
  /**
   * make_permanent_min_trust_level — see Params.make_permanent_min_trust_level.
   */
  makePermanentMinTrustLevel: number;
  /**
   * max_make_permanent_per_day — see Params.max_make_permanent_per_day.
   */
  maxMakePermanentPerDay: number;
  /**
   * non_member_collab_dream_stake is the DREAM amount the inviter locks when
   * adding a non-member as an EDITOR collaborator. Mirrors the endorsement
   * stake model but per-collaborator. See Params.non_member_collab_dream_stake.
   */
  nonMemberCollabDreamStake: string;
  /**
   * non_member_collab_burn_fraction is the fraction of the inviter's locked
   * DREAM that is burned when the collaborator is removed (or the collection
   * is deleted) while the collection's status is HIDDEN. See
   * Params.non_member_collab_burn_fraction.
   */
  nonMemberCollabBurnFraction: string;
  /**
   * Slash rep-penalty parameters — see Params for rationale.
   */
  endorserRepPenalty: string;
  collabInviterRepPenalty: string;
  authorRepPenalty: string;
  /**
   * sentinel_unhide_window_blocks — see Params.sentinel_unhide_window_blocks.
   */
  sentinelUnhideWindowBlocks: bigint;
  /**
   * max_hides_per_sentinel_per_day — see Params.max_hides_per_sentinel_per_day.
   */
  maxHidesPerSentinelPerDay: number;
}
export interface CollectOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CollectOperationalParams";
  value: Uint8Array;
}
/**
 * CollectOperationalParams defines council-adjustable operational parameters for x/collect.
 * @name CollectOperationalParamsAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CollectOperationalParams
 */
export interface CollectOperationalParamsAmino {
  base_collection_deposit?: string;
  per_item_deposit?: string;
  per_item_spam_tax?: string;
  sponsor_fee?: string;
  min_sponsor_trust_level?: string;
  sponsorship_request_ttl_blocks?: string;
  min_curator_bond?: string;
  min_curator_trust_level?: string;
  min_curator_age_blocks?: string;
  max_tags_per_review?: number;
  max_review_comment_length?: number;
  max_reviews_per_collection?: number;
  curator_slash_fraction?: string;
  challenge_window_blocks?: string;
  challenge_deposit?: string;
  max_challenge_reason_length?: number;
  challenge_reward_fraction?: string;
  downvote_cost?: string;
  max_upvotes_per_day?: number;
  max_downvotes_per_day?: number;
  flag_review_threshold?: number;
  max_flags_per_day?: number;
  max_flaggers_per_target?: number;
  flag_expiration_blocks?: string;
  max_flag_reason_length?: number;
  sentinel_commit_amount?: string;
  hide_expiry_blocks?: string;
  appeal_fee?: string;
  appeal_cooldown_blocks?: string;
  appeal_deadline_blocks?: string;
  endorsement_creation_fee?: string;
  endorsement_dream_stake?: string;
  endorsement_stake_duration?: string;
  endorsement_expiry_blocks?: string;
  endorsement_fee_endorser_share?: string;
  endorsement_deletion_burn_fraction?: string;
  /**
   * --- Conviction renewal parameters — OPERATIONAL ---
   */
  conviction_renewal_threshold?: string;
  conviction_renewal_period?: string;
  /**
   * --- Pinning parameters — OPERATIONAL ---
   */
  pin_min_trust_level?: number;
  max_pins_per_day?: number;
  /**
   * --- Curator bonded-role config (flattened) — see Params for rationale ---
   */
  curator_demotion_cooldown?: string;
  curator_demotion_threshold?: string;
  curator_overturn_demotion_streak?: string;
  curator_unbond_cooldown?: string;
  /**
   * make_permanent_min_trust_level — see Params.make_permanent_min_trust_level.
   */
  make_permanent_min_trust_level?: number;
  /**
   * max_make_permanent_per_day — see Params.max_make_permanent_per_day.
   */
  max_make_permanent_per_day?: number;
  /**
   * non_member_collab_dream_stake is the DREAM amount the inviter locks when
   * adding a non-member as an EDITOR collaborator. Mirrors the endorsement
   * stake model but per-collaborator. See Params.non_member_collab_dream_stake.
   */
  non_member_collab_dream_stake?: string;
  /**
   * non_member_collab_burn_fraction is the fraction of the inviter's locked
   * DREAM that is burned when the collaborator is removed (or the collection
   * is deleted) while the collection's status is HIDDEN. See
   * Params.non_member_collab_burn_fraction.
   */
  non_member_collab_burn_fraction?: string;
  /**
   * Slash rep-penalty parameters — see Params for rationale.
   */
  endorser_rep_penalty?: string;
  collab_inviter_rep_penalty?: string;
  author_rep_penalty?: string;
  /**
   * sentinel_unhide_window_blocks — see Params.sentinel_unhide_window_blocks.
   */
  sentinel_unhide_window_blocks?: string;
  /**
   * max_hides_per_sentinel_per_day — see Params.max_hides_per_sentinel_per_day.
   */
  max_hides_per_sentinel_per_day?: number;
}
export interface CollectOperationalParamsAminoMsg {
  type: "/sparkdream.collect.v1.CollectOperationalParams";
  value: CollectOperationalParamsAmino;
}
/**
 * CollectionFlag aggregates all flags on a single piece of content.
 * @name CollectionFlag
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CollectionFlag
 */
export interface CollectionFlag {
  targetId: bigint;
  targetType: FlagTargetType;
  flagRecords: FlagRecord[];
  totalWeight: string;
  firstFlagAt: bigint;
  lastFlagAt: bigint;
  inReviewQueue: boolean;
}
export interface CollectionFlagProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CollectionFlag";
  value: Uint8Array;
}
/**
 * CollectionFlag aggregates all flags on a single piece of content.
 * @name CollectionFlagAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CollectionFlag
 */
export interface CollectionFlagAmino {
  target_id?: string;
  target_type?: FlagTargetType;
  flag_records?: FlagRecordAmino[];
  total_weight?: string;
  first_flag_at?: string;
  last_flag_at?: string;
  in_review_queue?: boolean;
}
export interface CollectionFlagAminoMsg {
  type: "/sparkdream.collect.v1.CollectionFlag";
  value: CollectionFlagAmino;
}
/**
 * HideRecord tracks a sentinel's content hide action and its appeal status.
 * @name HideRecord
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.HideRecord
 */
export interface HideRecord {
  id: bigint;
  targetId: bigint;
  targetType: FlagTargetType;
  sentinel: string;
  hiddenAt: bigint;
  committedAmount: string;
  reasonCode: ModerationReason;
  reasonText: string;
  appealDeadline: bigint;
  appealed: boolean;
  resolved: boolean;
  /**
   * Set true when the hiding sentinel self-corrected via MsgUnhideContent.
   * The record is Resolved at that point, but the HideRecordExpiry entry
   * is retained so the EndBlocker releases the committed bond at the
   * original appeal_deadline (anti hide/unhide cycling).
   */
  selfCorrected: boolean;
  /**
   * Snapshot of the author bond amount slashed by MsgHideContent
   * (SlashAuthorBond), so a self-correct can mint it back. Zero if no
   * bond existed or the target is an item.
   */
  authorBondAmount: string;
  /**
   * Snapshot of the per-tag rep penalty PARAM at hide time (params may
   * change before unhide) and the tags it was applied to (collection tags
   * are owner-editable). Zero/empty when no deduction ran.
   */
  authorRepPenalty: string;
  repPenaltyTags: string[];
  /**
   * Per-tag ACTUAL deducted amounts (LegacyDec strings), aligned with
   * rep_penalty_tags. DeductReputation floors at zero, so the actual
   * deduction is min(current_score, author_rep_penalty) — restoring the
   * raw param instead would mint reputation from nothing on every
   * hide/reversal cycle for authors with less rep than the penalty.
   */
  repPenaltyAmounts: string[];
}
export interface HideRecordProtoMsg {
  typeUrl: "/sparkdream.collect.v1.HideRecord";
  value: Uint8Array;
}
/**
 * HideRecord tracks a sentinel's content hide action and its appeal status.
 * @name HideRecordAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.HideRecord
 */
export interface HideRecordAmino {
  id?: string;
  target_id?: string;
  target_type?: FlagTargetType;
  sentinel?: string;
  hidden_at?: string;
  committed_amount?: string;
  reason_code?: ModerationReason;
  reason_text?: string;
  appeal_deadline?: string;
  appealed?: boolean;
  resolved?: boolean;
  /**
   * Set true when the hiding sentinel self-corrected via MsgUnhideContent.
   * The record is Resolved at that point, but the HideRecordExpiry entry
   * is retained so the EndBlocker releases the committed bond at the
   * original appeal_deadline (anti hide/unhide cycling).
   */
  self_corrected?: boolean;
  /**
   * Snapshot of the author bond amount slashed by MsgHideContent
   * (SlashAuthorBond), so a self-correct can mint it back. Zero if no
   * bond existed or the target is an item.
   */
  author_bond_amount?: string;
  /**
   * Snapshot of the per-tag rep penalty PARAM at hide time (params may
   * change before unhide) and the tags it was applied to (collection tags
   * are owner-editable). Zero/empty when no deduction ran.
   */
  author_rep_penalty?: string;
  rep_penalty_tags?: string[];
  /**
   * Per-tag ACTUAL deducted amounts (LegacyDec strings), aligned with
   * rep_penalty_tags. DeductReputation floors at zero, so the actual
   * deduction is min(current_score, author_rep_penalty) — restoring the
   * raw param instead would mint reputation from nothing on every
   * hide/reversal cycle for authors with less rep than the penalty.
   */
  rep_penalty_amounts?: string[];
}
export interface HideRecordAminoMsg {
  type: "/sparkdream.collect.v1.HideRecord";
  value: HideRecordAmino;
}
/**
 * Endorsement records a member's endorsement of a non-member's collection.
 * @name Endorsement
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Endorsement
 */
export interface Endorsement {
  collectionId: bigint;
  endorser: string;
  dreamStake: string;
  endorsedAt: bigint;
  stakeReleaseAt: bigint;
  stakeReleased: boolean;
}
export interface EndorsementProtoMsg {
  typeUrl: "/sparkdream.collect.v1.Endorsement";
  value: Uint8Array;
}
/**
 * Endorsement records a member's endorsement of a non-member's collection.
 * @name EndorsementAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Endorsement
 */
export interface EndorsementAmino {
  collection_id?: string;
  endorser?: string;
  dream_stake?: string;
  endorsed_at?: string;
  stake_release_at?: string;
  stake_released?: boolean;
}
export interface EndorsementAminoMsg {
  type: "/sparkdream.collect.v1.Endorsement";
  value: EndorsementAmino;
}
function createBaseCollection(): Collection {
  return {
    id: BigInt(0),
    owner: "",
    name: "",
    description: "",
    coverUri: "",
    tags: [],
    encryptedData: new Uint8Array(),
    type: 0,
    visibility: 0,
    encrypted: false,
    itemCount: BigInt(0),
    collaboratorCount: 0,
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    expiresAt: BigInt(0),
    depositAmount: "",
    itemDepositTotal: "",
    depositBurned: false,
    sponsoredBy: "",
    communityFeedbackEnabled: false,
    status: 0,
    upvoteCount: BigInt(0),
    downvoteCount: BigInt(0),
    endorsedBy: "",
    seekingEndorsement: false,
    immutable: false,
    convictionSustained: false,
    initiativeId: BigInt(0),
    pinned: false,
    nonMemberCollaboratorCount: 0
  };
}
/**
 * Collection represents a curated set of items owned by an address.
 * @name Collection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Collection
 */
export const Collection = {
  typeUrl: "/sparkdream.collect.v1.Collection",
  encode(message: Collection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.coverUri !== "") {
      writer.uint32(42).string(message.coverUri);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(58).bytes(message.encryptedData);
    }
    if (message.type !== 0) {
      writer.uint32(64).int32(message.type);
    }
    if (message.visibility !== 0) {
      writer.uint32(72).int32(message.visibility);
    }
    if (message.encrypted === true) {
      writer.uint32(80).bool(message.encrypted);
    }
    if (message.itemCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.itemCount);
    }
    if (message.collaboratorCount !== 0) {
      writer.uint32(96).uint32(message.collaboratorCount);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(104).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.updatedAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(120).int64(message.expiresAt);
    }
    if (message.depositAmount !== "") {
      writer.uint32(130).string(message.depositAmount);
    }
    if (message.itemDepositTotal !== "") {
      writer.uint32(138).string(message.itemDepositTotal);
    }
    if (message.depositBurned === true) {
      writer.uint32(144).bool(message.depositBurned);
    }
    if (message.sponsoredBy !== "") {
      writer.uint32(154).string(message.sponsoredBy);
    }
    if (message.communityFeedbackEnabled === true) {
      writer.uint32(160).bool(message.communityFeedbackEnabled);
    }
    if (message.status !== 0) {
      writer.uint32(168).int32(message.status);
    }
    if (message.upvoteCount !== BigInt(0)) {
      writer.uint32(176).uint64(message.upvoteCount);
    }
    if (message.downvoteCount !== BigInt(0)) {
      writer.uint32(184).uint64(message.downvoteCount);
    }
    if (message.endorsedBy !== "") {
      writer.uint32(194).string(message.endorsedBy);
    }
    if (message.seekingEndorsement === true) {
      writer.uint32(200).bool(message.seekingEndorsement);
    }
    if (message.immutable === true) {
      writer.uint32(208).bool(message.immutable);
    }
    if (message.convictionSustained === true) {
      writer.uint32(216).bool(message.convictionSustained);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(224).uint64(message.initiativeId);
    }
    if (message.pinned === true) {
      writer.uint32(232).bool(message.pinned);
    }
    if (message.nonMemberCollaboratorCount !== 0) {
      writer.uint32(240).uint32(message.nonMemberCollaboratorCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Collection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.coverUri = reader.string();
          break;
        case 6:
          message.tags.push(reader.string());
          break;
        case 7:
          message.encryptedData = reader.bytes();
          break;
        case 8:
          message.type = reader.int32() as any;
          break;
        case 9:
          message.visibility = reader.int32() as any;
          break;
        case 10:
          message.encrypted = reader.bool();
          break;
        case 11:
          message.itemCount = reader.uint64();
          break;
        case 12:
          message.collaboratorCount = reader.uint32();
          break;
        case 13:
          message.createdAt = reader.int64();
          break;
        case 14:
          message.updatedAt = reader.int64();
          break;
        case 15:
          message.expiresAt = reader.int64();
          break;
        case 16:
          message.depositAmount = reader.string();
          break;
        case 17:
          message.itemDepositTotal = reader.string();
          break;
        case 18:
          message.depositBurned = reader.bool();
          break;
        case 19:
          message.sponsoredBy = reader.string();
          break;
        case 20:
          message.communityFeedbackEnabled = reader.bool();
          break;
        case 21:
          message.status = reader.int32() as any;
          break;
        case 22:
          message.upvoteCount = reader.uint64();
          break;
        case 23:
          message.downvoteCount = reader.uint64();
          break;
        case 24:
          message.endorsedBy = reader.string();
          break;
        case 25:
          message.seekingEndorsement = reader.bool();
          break;
        case 26:
          message.immutable = reader.bool();
          break;
        case 27:
          message.convictionSustained = reader.bool();
          break;
        case 28:
          message.initiativeId = reader.uint64();
          break;
        case 29:
          message.pinned = reader.bool();
          break;
        case 30:
          message.nonMemberCollaboratorCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = createBaseCollection();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.coverUri = object.coverUri ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.encryptedData = object.encryptedData ?? new Uint8Array();
    message.type = object.type ?? 0;
    message.visibility = object.visibility ?? 0;
    message.encrypted = object.encrypted ?? false;
    message.itemCount = object.itemCount !== undefined && object.itemCount !== null ? BigInt(object.itemCount.toString()) : BigInt(0);
    message.collaboratorCount = object.collaboratorCount ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.depositAmount = object.depositAmount ?? "";
    message.itemDepositTotal = object.itemDepositTotal ?? "";
    message.depositBurned = object.depositBurned ?? false;
    message.sponsoredBy = object.sponsoredBy ?? "";
    message.communityFeedbackEnabled = object.communityFeedbackEnabled ?? false;
    message.status = object.status ?? 0;
    message.upvoteCount = object.upvoteCount !== undefined && object.upvoteCount !== null ? BigInt(object.upvoteCount.toString()) : BigInt(0);
    message.downvoteCount = object.downvoteCount !== undefined && object.downvoteCount !== null ? BigInt(object.downvoteCount.toString()) : BigInt(0);
    message.endorsedBy = object.endorsedBy ?? "";
    message.seekingEndorsement = object.seekingEndorsement ?? false;
    message.immutable = object.immutable ?? false;
    message.convictionSustained = object.convictionSustained ?? false;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.pinned = object.pinned ?? false;
    message.nonMemberCollaboratorCount = object.nonMemberCollaboratorCount ?? 0;
    return message;
  },
  fromAmino(object: CollectionAmino): Collection {
    const message = createBaseCollection();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.cover_uri !== undefined && object.cover_uri !== null) {
      message.coverUri = object.cover_uri;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.encrypted_data !== undefined && object.encrypted_data !== null) {
      message.encryptedData = bytesFromBase64(object.encrypted_data);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.visibility !== undefined && object.visibility !== null) {
      message.visibility = object.visibility;
    }
    if (object.encrypted !== undefined && object.encrypted !== null) {
      message.encrypted = object.encrypted;
    }
    if (object.item_count !== undefined && object.item_count !== null) {
      message.itemCount = BigInt(object.item_count);
    }
    if (object.collaborator_count !== undefined && object.collaborator_count !== null) {
      message.collaboratorCount = object.collaborator_count;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = BigInt(object.updated_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.deposit_amount !== undefined && object.deposit_amount !== null) {
      message.depositAmount = object.deposit_amount;
    }
    if (object.item_deposit_total !== undefined && object.item_deposit_total !== null) {
      message.itemDepositTotal = object.item_deposit_total;
    }
    if (object.deposit_burned !== undefined && object.deposit_burned !== null) {
      message.depositBurned = object.deposit_burned;
    }
    if (object.sponsored_by !== undefined && object.sponsored_by !== null) {
      message.sponsoredBy = object.sponsored_by;
    }
    if (object.community_feedback_enabled !== undefined && object.community_feedback_enabled !== null) {
      message.communityFeedbackEnabled = object.community_feedback_enabled;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.upvote_count !== undefined && object.upvote_count !== null) {
      message.upvoteCount = BigInt(object.upvote_count);
    }
    if (object.downvote_count !== undefined && object.downvote_count !== null) {
      message.downvoteCount = BigInt(object.downvote_count);
    }
    if (object.endorsed_by !== undefined && object.endorsed_by !== null) {
      message.endorsedBy = object.endorsed_by;
    }
    if (object.seeking_endorsement !== undefined && object.seeking_endorsement !== null) {
      message.seekingEndorsement = object.seeking_endorsement;
    }
    if (object.immutable !== undefined && object.immutable !== null) {
      message.immutable = object.immutable;
    }
    if (object.conviction_sustained !== undefined && object.conviction_sustained !== null) {
      message.convictionSustained = object.conviction_sustained;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    if (object.non_member_collaborator_count !== undefined && object.non_member_collaborator_count !== null) {
      message.nonMemberCollaboratorCount = object.non_member_collaborator_count;
    }
    return message;
  },
  toAmino(message: Collection): CollectionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.cover_uri = message.coverUri === "" ? undefined : message.coverUri;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.visibility = message.visibility === 0 ? undefined : message.visibility;
    obj.encrypted = message.encrypted === false ? undefined : message.encrypted;
    obj.item_count = message.itemCount !== BigInt(0) ? message.itemCount?.toString() : undefined;
    obj.collaborator_count = message.collaboratorCount === 0 ? undefined : message.collaboratorCount;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.updated_at = message.updatedAt !== BigInt(0) ? message.updatedAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.deposit_amount = message.depositAmount === "" ? undefined : message.depositAmount;
    obj.item_deposit_total = message.itemDepositTotal === "" ? undefined : message.itemDepositTotal;
    obj.deposit_burned = message.depositBurned === false ? undefined : message.depositBurned;
    obj.sponsored_by = message.sponsoredBy === "" ? undefined : message.sponsoredBy;
    obj.community_feedback_enabled = message.communityFeedbackEnabled === false ? undefined : message.communityFeedbackEnabled;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.upvote_count = message.upvoteCount !== BigInt(0) ? message.upvoteCount?.toString() : undefined;
    obj.downvote_count = message.downvoteCount !== BigInt(0) ? message.downvoteCount?.toString() : undefined;
    obj.endorsed_by = message.endorsedBy === "" ? undefined : message.endorsedBy;
    obj.seeking_endorsement = message.seekingEndorsement === false ? undefined : message.seekingEndorsement;
    obj.immutable = message.immutable === false ? undefined : message.immutable;
    obj.conviction_sustained = message.convictionSustained === false ? undefined : message.convictionSustained;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.pinned = message.pinned === false ? undefined : message.pinned;
    obj.non_member_collaborator_count = message.nonMemberCollaboratorCount === 0 ? undefined : message.nonMemberCollaboratorCount;
    return obj;
  },
  fromAminoMsg(object: CollectionAminoMsg): Collection {
    return Collection.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionProtoMsg): Collection {
    return Collection.decode(message.value);
  },
  toProto(message: Collection): Uint8Array {
    return Collection.encode(message).finish();
  },
  toProtoMsg(message: Collection): CollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.Collection",
      value: Collection.encode(message).finish()
    };
  }
};
function createBaseItem(): Item {
  return {
    id: BigInt(0),
    collectionId: BigInt(0),
    addedBy: "",
    title: "",
    description: "",
    imageUri: "",
    referenceType: 0,
    nft: undefined,
    link: undefined,
    onChain: undefined,
    custom: undefined,
    attributes: [],
    encryptedData: new Uint8Array(),
    position: BigInt(0),
    addedAt: BigInt(0),
    status: 0,
    upvoteCount: BigInt(0),
    downvoteCount: BigInt(0)
  };
}
/**
 * Item represents a single entry within a collection.
 * @name Item
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Item
 */
export const Item = {
  typeUrl: "/sparkdream.collect.v1.Item",
  encode(message: Item, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.addedBy !== "") {
      writer.uint32(26).string(message.addedBy);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.imageUri !== "") {
      writer.uint32(50).string(message.imageUri);
    }
    if (message.referenceType !== 0) {
      writer.uint32(56).int32(message.referenceType);
    }
    if (message.nft !== undefined) {
      NftReference.encode(message.nft, writer.uint32(66).fork()).ldelim();
    }
    if (message.link !== undefined) {
      LinkReference.encode(message.link, writer.uint32(74).fork()).ldelim();
    }
    if (message.onChain !== undefined) {
      OnChainReference.encode(message.onChain, writer.uint32(82).fork()).ldelim();
    }
    if (message.custom !== undefined) {
      CustomReference.encode(message.custom, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.attributes) {
      KeyValuePair.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(106).bytes(message.encryptedData);
    }
    if (message.position !== BigInt(0)) {
      writer.uint32(112).uint64(message.position);
    }
    if (message.addedAt !== BigInt(0)) {
      writer.uint32(120).int64(message.addedAt);
    }
    if (message.status !== 0) {
      writer.uint32(128).int32(message.status);
    }
    if (message.upvoteCount !== BigInt(0)) {
      writer.uint32(136).uint64(message.upvoteCount);
    }
    if (message.downvoteCount !== BigInt(0)) {
      writer.uint32(144).uint64(message.downvoteCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Item {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.addedBy = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.imageUri = reader.string();
          break;
        case 7:
          message.referenceType = reader.int32() as any;
          break;
        case 8:
          message.nft = NftReference.decode(reader, reader.uint32());
          break;
        case 9:
          message.link = LinkReference.decode(reader, reader.uint32());
          break;
        case 10:
          message.onChain = OnChainReference.decode(reader, reader.uint32());
          break;
        case 11:
          message.custom = CustomReference.decode(reader, reader.uint32());
          break;
        case 12:
          message.attributes.push(KeyValuePair.decode(reader, reader.uint32()));
          break;
        case 13:
          message.encryptedData = reader.bytes();
          break;
        case 14:
          message.position = reader.uint64();
          break;
        case 15:
          message.addedAt = reader.int64();
          break;
        case 16:
          message.status = reader.int32() as any;
          break;
        case 17:
          message.upvoteCount = reader.uint64();
          break;
        case 18:
          message.downvoteCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.addedBy = object.addedBy ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.imageUri = object.imageUri ?? "";
    message.referenceType = object.referenceType ?? 0;
    message.nft = object.nft !== undefined && object.nft !== null ? NftReference.fromPartial(object.nft) : undefined;
    message.link = object.link !== undefined && object.link !== null ? LinkReference.fromPartial(object.link) : undefined;
    message.onChain = object.onChain !== undefined && object.onChain !== null ? OnChainReference.fromPartial(object.onChain) : undefined;
    message.custom = object.custom !== undefined && object.custom !== null ? CustomReference.fromPartial(object.custom) : undefined;
    message.attributes = object.attributes?.map(e => KeyValuePair.fromPartial(e)) || [];
    message.encryptedData = object.encryptedData ?? new Uint8Array();
    message.position = object.position !== undefined && object.position !== null ? BigInt(object.position.toString()) : BigInt(0);
    message.addedAt = object.addedAt !== undefined && object.addedAt !== null ? BigInt(object.addedAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.upvoteCount = object.upvoteCount !== undefined && object.upvoteCount !== null ? BigInt(object.upvoteCount.toString()) : BigInt(0);
    message.downvoteCount = object.downvoteCount !== undefined && object.downvoteCount !== null ? BigInt(object.downvoteCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ItemAmino): Item {
    const message = createBaseItem();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.added_by !== undefined && object.added_by !== null) {
      message.addedBy = object.added_by;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.image_uri !== undefined && object.image_uri !== null) {
      message.imageUri = object.image_uri;
    }
    if (object.reference_type !== undefined && object.reference_type !== null) {
      message.referenceType = object.reference_type;
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NftReference.fromAmino(object.nft);
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = LinkReference.fromAmino(object.link);
    }
    if (object.on_chain !== undefined && object.on_chain !== null) {
      message.onChain = OnChainReference.fromAmino(object.on_chain);
    }
    if (object.custom !== undefined && object.custom !== null) {
      message.custom = CustomReference.fromAmino(object.custom);
    }
    message.attributes = object.attributes?.map(e => KeyValuePair.fromAmino(e)) || [];
    if (object.encrypted_data !== undefined && object.encrypted_data !== null) {
      message.encryptedData = bytesFromBase64(object.encrypted_data);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = BigInt(object.position);
    }
    if (object.added_at !== undefined && object.added_at !== null) {
      message.addedAt = BigInt(object.added_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.upvote_count !== undefined && object.upvote_count !== null) {
      message.upvoteCount = BigInt(object.upvote_count);
    }
    if (object.downvote_count !== undefined && object.downvote_count !== null) {
      message.downvoteCount = BigInt(object.downvote_count);
    }
    return message;
  },
  toAmino(message: Item): ItemAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.added_by = message.addedBy === "" ? undefined : message.addedBy;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.image_uri = message.imageUri === "" ? undefined : message.imageUri;
    obj.reference_type = message.referenceType === 0 ? undefined : message.referenceType;
    obj.nft = message.nft ? NftReference.toAmino(message.nft) : undefined;
    obj.link = message.link ? LinkReference.toAmino(message.link) : undefined;
    obj.on_chain = message.onChain ? OnChainReference.toAmino(message.onChain) : undefined;
    obj.custom = message.custom ? CustomReference.toAmino(message.custom) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? KeyValuePair.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
    obj.position = message.position !== BigInt(0) ? message.position?.toString() : undefined;
    obj.added_at = message.addedAt !== BigInt(0) ? message.addedAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.upvote_count = message.upvoteCount !== BigInt(0) ? message.upvoteCount?.toString() : undefined;
    obj.downvote_count = message.downvoteCount !== BigInt(0) ? message.downvoteCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ItemAminoMsg): Item {
    return Item.fromAmino(object.value);
  },
  fromProtoMsg(message: ItemProtoMsg): Item {
    return Item.decode(message.value);
  },
  toProto(message: Item): Uint8Array {
    return Item.encode(message).finish();
  },
  toProtoMsg(message: Item): ItemProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.Item",
      value: Item.encode(message).finish()
    };
  }
};
function createBaseKeyValuePair(): KeyValuePair {
  return {
    key: "",
    value: ""
  };
}
/**
 * KeyValuePair is a generic key-value entry used for extensible attributes.
 * @name KeyValuePair
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.KeyValuePair
 */
export const KeyValuePair = {
  typeUrl: "/sparkdream.collect.v1.KeyValuePair",
  encode(message: KeyValuePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): KeyValuePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValuePair();
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
  fromPartial(object: DeepPartial<KeyValuePair>): KeyValuePair {
    const message = createBaseKeyValuePair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: KeyValuePairAmino): KeyValuePair {
    const message = createBaseKeyValuePair();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: KeyValuePair): KeyValuePairAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: KeyValuePairAminoMsg): KeyValuePair {
    return KeyValuePair.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyValuePairProtoMsg): KeyValuePair {
    return KeyValuePair.decode(message.value);
  },
  toProto(message: KeyValuePair): Uint8Array {
    return KeyValuePair.encode(message).finish();
  },
  toProtoMsg(message: KeyValuePair): KeyValuePairProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.KeyValuePair",
      value: KeyValuePair.encode(message).finish()
    };
  }
};
function createBaseNftReference(): NftReference {
  return {
    chainId: "",
    contractAddress: "",
    tokenId: "",
    tokenStandard: "",
    tokenUri: ""
  };
}
/**
 * NftReference points to an NFT on a specific chain and contract.
 * @name NftReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.NftReference
 */
export const NftReference = {
  typeUrl: "/sparkdream.collect.v1.NftReference",
  encode(message: NftReference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.tokenStandard !== "") {
      writer.uint32(34).string(message.tokenStandard);
    }
    if (message.tokenUri !== "") {
      writer.uint32(42).string(message.tokenUri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NftReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.tokenStandard = reader.string();
          break;
        case 5:
          message.tokenUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NftReference>): NftReference {
    const message = createBaseNftReference();
    message.chainId = object.chainId ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.tokenId = object.tokenId ?? "";
    message.tokenStandard = object.tokenStandard ?? "";
    message.tokenUri = object.tokenUri ?? "";
    return message;
  },
  fromAmino(object: NftReferenceAmino): NftReference {
    const message = createBaseNftReference();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.token_standard !== undefined && object.token_standard !== null) {
      message.tokenStandard = object.token_standard;
    }
    if (object.token_uri !== undefined && object.token_uri !== null) {
      message.tokenUri = object.token_uri;
    }
    return message;
  },
  toAmino(message: NftReference): NftReferenceAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.token_standard = message.tokenStandard === "" ? undefined : message.tokenStandard;
    obj.token_uri = message.tokenUri === "" ? undefined : message.tokenUri;
    return obj;
  },
  fromAminoMsg(object: NftReferenceAminoMsg): NftReference {
    return NftReference.fromAmino(object.value);
  },
  fromProtoMsg(message: NftReferenceProtoMsg): NftReference {
    return NftReference.decode(message.value);
  },
  toProto(message: NftReference): Uint8Array {
    return NftReference.encode(message).finish();
  },
  toProtoMsg(message: NftReference): NftReferenceProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.NftReference",
      value: NftReference.encode(message).finish()
    };
  }
};
function createBaseLinkReference(): LinkReference {
  return {
    uri: "",
    contentHash: "",
    contentType: ""
  };
}
/**
 * LinkReference points to an external URI with optional content integrity hash.
 * @name LinkReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.LinkReference
 */
export const LinkReference = {
  typeUrl: "/sparkdream.collect.v1.LinkReference",
  encode(message: LinkReference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.contentHash !== "") {
      writer.uint32(18).string(message.contentHash);
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LinkReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.contentHash = reader.string();
          break;
        case 3:
          message.contentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LinkReference>): LinkReference {
    const message = createBaseLinkReference();
    message.uri = object.uri ?? "";
    message.contentHash = object.contentHash ?? "";
    message.contentType = object.contentType ?? "";
    return message;
  },
  fromAmino(object: LinkReferenceAmino): LinkReference {
    const message = createBaseLinkReference();
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = object.content_hash;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    return message;
  },
  toAmino(message: LinkReference): LinkReferenceAmino {
    const obj: any = {};
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.content_hash = message.contentHash === "" ? undefined : message.contentHash;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    return obj;
  },
  fromAminoMsg(object: LinkReferenceAminoMsg): LinkReference {
    return LinkReference.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkReferenceProtoMsg): LinkReference {
    return LinkReference.decode(message.value);
  },
  toProto(message: LinkReference): Uint8Array {
    return LinkReference.encode(message).finish();
  },
  toProtoMsg(message: LinkReference): LinkReferenceProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.LinkReference",
      value: LinkReference.encode(message).finish()
    };
  }
};
function createBaseOnChainReference(): OnChainReference {
  return {
    module: "",
    entityType: "",
    entityId: ""
  };
}
/**
 * OnChainReference points to an entity within another on-chain module.
 * @name OnChainReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.OnChainReference
 */
export const OnChainReference = {
  typeUrl: "/sparkdream.collect.v1.OnChainReference",
  encode(message: OnChainReference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    if (message.entityId !== "") {
      writer.uint32(26).string(message.entityId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OnChainReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnChainReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.entityType = reader.string();
          break;
        case 3:
          message.entityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OnChainReference>): OnChainReference {
    const message = createBaseOnChainReference();
    message.module = object.module ?? "";
    message.entityType = object.entityType ?? "";
    message.entityId = object.entityId ?? "";
    return message;
  },
  fromAmino(object: OnChainReferenceAmino): OnChainReference {
    const message = createBaseOnChainReference();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.entity_type !== undefined && object.entity_type !== null) {
      message.entityType = object.entity_type;
    }
    if (object.entity_id !== undefined && object.entity_id !== null) {
      message.entityId = object.entity_id;
    }
    return message;
  },
  toAmino(message: OnChainReference): OnChainReferenceAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.entity_type = message.entityType === "" ? undefined : message.entityType;
    obj.entity_id = message.entityId === "" ? undefined : message.entityId;
    return obj;
  },
  fromAminoMsg(object: OnChainReferenceAminoMsg): OnChainReference {
    return OnChainReference.fromAmino(object.value);
  },
  fromProtoMsg(message: OnChainReferenceProtoMsg): OnChainReference {
    return OnChainReference.decode(message.value);
  },
  toProto(message: OnChainReference): Uint8Array {
    return OnChainReference.encode(message).finish();
  },
  toProtoMsg(message: OnChainReference): OnChainReferenceProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.OnChainReference",
      value: OnChainReference.encode(message).finish()
    };
  }
};
function createBaseCustomReference(): CustomReference {
  return {
    typeLabel: "",
    value: "",
    extra: []
  };
}
/**
 * CustomReference allows arbitrary typed references with extensible metadata.
 * @name CustomReference
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CustomReference
 */
export const CustomReference = {
  typeUrl: "/sparkdream.collect.v1.CustomReference",
  encode(message: CustomReference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typeLabel !== "") {
      writer.uint32(10).string(message.typeLabel);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    for (const v of message.extra) {
      KeyValuePair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CustomReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeLabel = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.extra.push(KeyValuePair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CustomReference>): CustomReference {
    const message = createBaseCustomReference();
    message.typeLabel = object.typeLabel ?? "";
    message.value = object.value ?? "";
    message.extra = object.extra?.map(e => KeyValuePair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CustomReferenceAmino): CustomReference {
    const message = createBaseCustomReference();
    if (object.type_label !== undefined && object.type_label !== null) {
      message.typeLabel = object.type_label;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    message.extra = object.extra?.map(e => KeyValuePair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CustomReference): CustomReferenceAmino {
    const obj: any = {};
    obj.type_label = message.typeLabel === "" ? undefined : message.typeLabel;
    obj.value = message.value === "" ? undefined : message.value;
    if (message.extra) {
      obj.extra = message.extra.map(e => e ? KeyValuePair.toAmino(e) : undefined);
    } else {
      obj.extra = message.extra;
    }
    return obj;
  },
  fromAminoMsg(object: CustomReferenceAminoMsg): CustomReference {
    return CustomReference.fromAmino(object.value);
  },
  fromProtoMsg(message: CustomReferenceProtoMsg): CustomReference {
    return CustomReference.decode(message.value);
  },
  toProto(message: CustomReference): Uint8Array {
    return CustomReference.encode(message).finish();
  },
  toProtoMsg(message: CustomReference): CustomReferenceProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CustomReference",
      value: CustomReference.encode(message).finish()
    };
  }
};
function createBaseCollaborator(): Collaborator {
  return {
    collectionId: BigInt(0),
    address: "",
    role: 0,
    addedAt: BigInt(0),
    inviter: "",
    dreamStake: ""
  };
}
/**
 * Collaborator represents a user granted edit or admin access to a collection.
 * @name Collaborator
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Collaborator
 */
export const Collaborator = {
  typeUrl: "/sparkdream.collect.v1.Collaborator",
  encode(message: Collaborator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.role !== 0) {
      writer.uint32(24).int32(message.role);
    }
    if (message.addedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.addedAt);
    }
    if (message.inviter !== "") {
      writer.uint32(42).string(message.inviter);
    }
    if (message.dreamStake !== "") {
      writer.uint32(50).string(message.dreamStake);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Collaborator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollaborator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.role = reader.int32() as any;
          break;
        case 4:
          message.addedAt = reader.int64();
          break;
        case 5:
          message.inviter = reader.string();
          break;
        case 6:
          message.dreamStake = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Collaborator>): Collaborator {
    const message = createBaseCollaborator();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.role = object.role ?? 0;
    message.addedAt = object.addedAt !== undefined && object.addedAt !== null ? BigInt(object.addedAt.toString()) : BigInt(0);
    message.inviter = object.inviter ?? "";
    message.dreamStake = object.dreamStake ?? "";
    return message;
  },
  fromAmino(object: CollaboratorAmino): Collaborator {
    const message = createBaseCollaborator();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    if (object.added_at !== undefined && object.added_at !== null) {
      message.addedAt = BigInt(object.added_at);
    }
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    if (object.dream_stake !== undefined && object.dream_stake !== null) {
      message.dreamStake = object.dream_stake;
    }
    return message;
  },
  toAmino(message: Collaborator): CollaboratorAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.role = message.role === 0 ? undefined : message.role;
    obj.added_at = message.addedAt !== BigInt(0) ? message.addedAt?.toString() : undefined;
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    obj.dream_stake = message.dreamStake === "" ? undefined : message.dreamStake;
    return obj;
  },
  fromAminoMsg(object: CollaboratorAminoMsg): Collaborator {
    return Collaborator.fromAmino(object.value);
  },
  fromProtoMsg(message: CollaboratorProtoMsg): Collaborator {
    return Collaborator.decode(message.value);
  },
  toProto(message: Collaborator): Uint8Array {
    return Collaborator.encode(message).finish();
  },
  toProtoMsg(message: Collaborator): CollaboratorProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.Collaborator",
      value: Collaborator.encode(message).finish()
    };
  }
};
function createBaseCurationReview(): CurationReview {
  return {
    id: BigInt(0),
    collectionId: BigInt(0),
    curator: "",
    verdict: 0,
    tags: [],
    comment: "",
    createdAt: BigInt(0),
    challenged: false,
    overturned: false,
    challenger: "",
    committedSlash: ""
  };
}
/**
 * CurationReview records a curator's verdict on a collection.
 * @name CurationReview
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationReview
 */
export const CurationReview = {
  typeUrl: "/sparkdream.collect.v1.CurationReview",
  encode(message: CurationReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.curator !== "") {
      writer.uint32(26).string(message.curator);
    }
    if (message.verdict !== 0) {
      writer.uint32(32).int32(message.verdict);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.comment !== "") {
      writer.uint32(50).string(message.comment);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.challenged === true) {
      writer.uint32(64).bool(message.challenged);
    }
    if (message.overturned === true) {
      writer.uint32(72).bool(message.overturned);
    }
    if (message.challenger !== "") {
      writer.uint32(82).string(message.challenger);
    }
    if (message.committedSlash !== "") {
      writer.uint32(90).string(message.committedSlash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurationReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurationReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.curator = reader.string();
          break;
        case 4:
          message.verdict = reader.int32() as any;
          break;
        case 5:
          message.tags.push(reader.string());
          break;
        case 6:
          message.comment = reader.string();
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.challenged = reader.bool();
          break;
        case 9:
          message.overturned = reader.bool();
          break;
        case 10:
          message.challenger = reader.string();
          break;
        case 11:
          message.committedSlash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CurationReview>): CurationReview {
    const message = createBaseCurationReview();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.curator = object.curator ?? "";
    message.verdict = object.verdict ?? 0;
    message.tags = object.tags?.map(e => e) || [];
    message.comment = object.comment ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.challenged = object.challenged ?? false;
    message.overturned = object.overturned ?? false;
    message.challenger = object.challenger ?? "";
    message.committedSlash = object.committedSlash ?? "";
    return message;
  },
  fromAmino(object: CurationReviewAmino): CurationReview {
    const message = createBaseCurationReview();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = object.curator;
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.challenged !== undefined && object.challenged !== null) {
      message.challenged = object.challenged;
    }
    if (object.overturned !== undefined && object.overturned !== null) {
      message.overturned = object.overturned;
    }
    if (object.challenger !== undefined && object.challenger !== null) {
      message.challenger = object.challenger;
    }
    if (object.committed_slash !== undefined && object.committed_slash !== null) {
      message.committedSlash = object.committed_slash;
    }
    return message;
  },
  toAmino(message: CurationReview): CurationReviewAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.curator = message.curator === "" ? undefined : message.curator;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.comment = message.comment === "" ? undefined : message.comment;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.challenged = message.challenged === false ? undefined : message.challenged;
    obj.overturned = message.overturned === false ? undefined : message.overturned;
    obj.challenger = message.challenger === "" ? undefined : message.challenger;
    obj.committed_slash = message.committedSlash === "" ? undefined : message.committedSlash;
    return obj;
  },
  fromAminoMsg(object: CurationReviewAminoMsg): CurationReview {
    return CurationReview.fromAmino(object.value);
  },
  fromProtoMsg(message: CurationReviewProtoMsg): CurationReview {
    return CurationReview.decode(message.value);
  },
  toProto(message: CurationReview): Uint8Array {
    return CurationReview.encode(message).finish();
  },
  toProtoMsg(message: CurationReview): CurationReviewProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CurationReview",
      value: CurationReview.encode(message).finish()
    };
  }
};
function createBaseCurationSummary(): CurationSummary {
  return {
    collectionId: BigInt(0),
    upCount: 0,
    downCount: 0,
    topTags: [],
    lastReviewedAt: BigInt(0)
  };
}
/**
 * CurationSummary aggregates curation activity for a collection.
 * @name CurationSummary
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationSummary
 */
export const CurationSummary = {
  typeUrl: "/sparkdream.collect.v1.CurationSummary",
  encode(message: CurationSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.upCount !== 0) {
      writer.uint32(16).uint32(message.upCount);
    }
    if (message.downCount !== 0) {
      writer.uint32(24).uint32(message.downCount);
    }
    for (const v of message.topTags) {
      TagCount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastReviewedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.lastReviewedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurationSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurationSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        case 2:
          message.upCount = reader.uint32();
          break;
        case 3:
          message.downCount = reader.uint32();
          break;
        case 4:
          message.topTags.push(TagCount.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastReviewedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CurationSummary>): CurationSummary {
    const message = createBaseCurationSummary();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.upCount = object.upCount ?? 0;
    message.downCount = object.downCount ?? 0;
    message.topTags = object.topTags?.map(e => TagCount.fromPartial(e)) || [];
    message.lastReviewedAt = object.lastReviewedAt !== undefined && object.lastReviewedAt !== null ? BigInt(object.lastReviewedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CurationSummaryAmino): CurationSummary {
    const message = createBaseCurationSummary();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.up_count !== undefined && object.up_count !== null) {
      message.upCount = object.up_count;
    }
    if (object.down_count !== undefined && object.down_count !== null) {
      message.downCount = object.down_count;
    }
    message.topTags = object.top_tags?.map(e => TagCount.fromAmino(e)) || [];
    if (object.last_reviewed_at !== undefined && object.last_reviewed_at !== null) {
      message.lastReviewedAt = BigInt(object.last_reviewed_at);
    }
    return message;
  },
  toAmino(message: CurationSummary): CurationSummaryAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.up_count = message.upCount === 0 ? undefined : message.upCount;
    obj.down_count = message.downCount === 0 ? undefined : message.downCount;
    if (message.topTags) {
      obj.top_tags = message.topTags.map(e => e ? TagCount.toAmino(e) : undefined);
    } else {
      obj.top_tags = message.topTags;
    }
    obj.last_reviewed_at = message.lastReviewedAt !== BigInt(0) ? message.lastReviewedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CurationSummaryAminoMsg): CurationSummary {
    return CurationSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: CurationSummaryProtoMsg): CurationSummary {
    return CurationSummary.decode(message.value);
  },
  toProto(message: CurationSummary): Uint8Array {
    return CurationSummary.encode(message).finish();
  },
  toProtoMsg(message: CurationSummary): CurationSummaryProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CurationSummary",
      value: CurationSummary.encode(message).finish()
    };
  }
};
function createBaseTagCount(): TagCount {
  return {
    tag: "",
    count: 0
  };
}
/**
 * TagCount pairs a tag label with the number of times it has been applied.
 * @name TagCount
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.TagCount
 */
export const TagCount = {
  typeUrl: "/sparkdream.collect.v1.TagCount",
  encode(message: TagCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagCount>): TagCount {
    const message = createBaseTagCount();
    message.tag = object.tag ?? "";
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: TagCountAmino): TagCount {
    const message = createBaseTagCount();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: TagCount): TagCountAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.count = message.count === 0 ? undefined : message.count;
    return obj;
  },
  fromAminoMsg(object: TagCountAminoMsg): TagCount {
    return TagCount.fromAmino(object.value);
  },
  fromProtoMsg(message: TagCountProtoMsg): TagCount {
    return TagCount.decode(message.value);
  },
  toProto(message: TagCount): Uint8Array {
    return TagCount.encode(message).finish();
  },
  toProtoMsg(message: TagCount): TagCountProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.TagCount",
      value: TagCount.encode(message).finish()
    };
  }
};
function createBaseSponsorshipRequest(): SponsorshipRequest {
  return {
    collectionId: BigInt(0),
    requester: "",
    collectionDeposit: "",
    itemDepositTotal: "",
    requestedAt: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * SponsorshipRequest represents a pending request for deposit sponsorship.
 * @name SponsorshipRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.SponsorshipRequest
 */
export const SponsorshipRequest = {
  typeUrl: "/sparkdream.collect.v1.SponsorshipRequest",
  encode(message: SponsorshipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.requester !== "") {
      writer.uint32(18).string(message.requester);
    }
    if (message.collectionDeposit !== "") {
      writer.uint32(26).string(message.collectionDeposit);
    }
    if (message.itemDepositTotal !== "") {
      writer.uint32(34).string(message.itemDepositTotal);
    }
    if (message.requestedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.requestedAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(48).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SponsorshipRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSponsorshipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        case 2:
          message.requester = reader.string();
          break;
        case 3:
          message.collectionDeposit = reader.string();
          break;
        case 4:
          message.itemDepositTotal = reader.string();
          break;
        case 5:
          message.requestedAt = reader.int64();
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
  fromPartial(object: DeepPartial<SponsorshipRequest>): SponsorshipRequest {
    const message = createBaseSponsorshipRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.requester = object.requester ?? "";
    message.collectionDeposit = object.collectionDeposit ?? "";
    message.itemDepositTotal = object.itemDepositTotal ?? "";
    message.requestedAt = object.requestedAt !== undefined && object.requestedAt !== null ? BigInt(object.requestedAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SponsorshipRequestAmino): SponsorshipRequest {
    const message = createBaseSponsorshipRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.collection_deposit !== undefined && object.collection_deposit !== null) {
      message.collectionDeposit = object.collection_deposit;
    }
    if (object.item_deposit_total !== undefined && object.item_deposit_total !== null) {
      message.itemDepositTotal = object.item_deposit_total;
    }
    if (object.requested_at !== undefined && object.requested_at !== null) {
      message.requestedAt = BigInt(object.requested_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: SponsorshipRequest): SponsorshipRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.collection_deposit = message.collectionDeposit === "" ? undefined : message.collectionDeposit;
    obj.item_deposit_total = message.itemDepositTotal === "" ? undefined : message.itemDepositTotal;
    obj.requested_at = message.requestedAt !== BigInt(0) ? message.requestedAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SponsorshipRequestAminoMsg): SponsorshipRequest {
    return SponsorshipRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SponsorshipRequestProtoMsg): SponsorshipRequest {
    return SponsorshipRequest.decode(message.value);
  },
  toProto(message: SponsorshipRequest): Uint8Array {
    return SponsorshipRequest.encode(message).finish();
  },
  toProtoMsg(message: SponsorshipRequest): SponsorshipRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.SponsorshipRequest",
      value: SponsorshipRequest.encode(message).finish()
    };
  }
};
function createBaseAddItemEntry(): AddItemEntry {
  return {
    title: "",
    description: "",
    imageUri: "",
    referenceType: 0,
    nft: undefined,
    link: undefined,
    onChain: undefined,
    custom: undefined,
    attributes: [],
    encryptedData: new Uint8Array()
  };
}
/**
 * AddItemEntry is used in MsgAddItems to define a new item to add to a collection.
 * @name AddItemEntry
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.AddItemEntry
 */
export const AddItemEntry = {
  typeUrl: "/sparkdream.collect.v1.AddItemEntry",
  encode(message: AddItemEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.imageUri !== "") {
      writer.uint32(26).string(message.imageUri);
    }
    if (message.referenceType !== 0) {
      writer.uint32(32).int32(message.referenceType);
    }
    if (message.nft !== undefined) {
      NftReference.encode(message.nft, writer.uint32(42).fork()).ldelim();
    }
    if (message.link !== undefined) {
      LinkReference.encode(message.link, writer.uint32(50).fork()).ldelim();
    }
    if (message.onChain !== undefined) {
      OnChainReference.encode(message.onChain, writer.uint32(58).fork()).ldelim();
    }
    if (message.custom !== undefined) {
      CustomReference.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.attributes) {
      KeyValuePair.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(82).bytes(message.encryptedData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddItemEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddItemEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.imageUri = reader.string();
          break;
        case 4:
          message.referenceType = reader.int32() as any;
          break;
        case 5:
          message.nft = NftReference.decode(reader, reader.uint32());
          break;
        case 6:
          message.link = LinkReference.decode(reader, reader.uint32());
          break;
        case 7:
          message.onChain = OnChainReference.decode(reader, reader.uint32());
          break;
        case 8:
          message.custom = CustomReference.decode(reader, reader.uint32());
          break;
        case 9:
          message.attributes.push(KeyValuePair.decode(reader, reader.uint32()));
          break;
        case 10:
          message.encryptedData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AddItemEntry>): AddItemEntry {
    const message = createBaseAddItemEntry();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.imageUri = object.imageUri ?? "";
    message.referenceType = object.referenceType ?? 0;
    message.nft = object.nft !== undefined && object.nft !== null ? NftReference.fromPartial(object.nft) : undefined;
    message.link = object.link !== undefined && object.link !== null ? LinkReference.fromPartial(object.link) : undefined;
    message.onChain = object.onChain !== undefined && object.onChain !== null ? OnChainReference.fromPartial(object.onChain) : undefined;
    message.custom = object.custom !== undefined && object.custom !== null ? CustomReference.fromPartial(object.custom) : undefined;
    message.attributes = object.attributes?.map(e => KeyValuePair.fromPartial(e)) || [];
    message.encryptedData = object.encryptedData ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AddItemEntryAmino): AddItemEntry {
    const message = createBaseAddItemEntry();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.image_uri !== undefined && object.image_uri !== null) {
      message.imageUri = object.image_uri;
    }
    if (object.reference_type !== undefined && object.reference_type !== null) {
      message.referenceType = object.reference_type;
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NftReference.fromAmino(object.nft);
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = LinkReference.fromAmino(object.link);
    }
    if (object.on_chain !== undefined && object.on_chain !== null) {
      message.onChain = OnChainReference.fromAmino(object.on_chain);
    }
    if (object.custom !== undefined && object.custom !== null) {
      message.custom = CustomReference.fromAmino(object.custom);
    }
    message.attributes = object.attributes?.map(e => KeyValuePair.fromAmino(e)) || [];
    if (object.encrypted_data !== undefined && object.encrypted_data !== null) {
      message.encryptedData = bytesFromBase64(object.encrypted_data);
    }
    return message;
  },
  toAmino(message: AddItemEntry): AddItemEntryAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.image_uri = message.imageUri === "" ? undefined : message.imageUri;
    obj.reference_type = message.referenceType === 0 ? undefined : message.referenceType;
    obj.nft = message.nft ? NftReference.toAmino(message.nft) : undefined;
    obj.link = message.link ? LinkReference.toAmino(message.link) : undefined;
    obj.on_chain = message.onChain ? OnChainReference.toAmino(message.onChain) : undefined;
    obj.custom = message.custom ? CustomReference.toAmino(message.custom) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? KeyValuePair.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddItemEntryAminoMsg): AddItemEntry {
    return AddItemEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AddItemEntryProtoMsg): AddItemEntry {
    return AddItemEntry.decode(message.value);
  },
  toProto(message: AddItemEntry): Uint8Array {
    return AddItemEntry.encode(message).finish();
  },
  toProtoMsg(message: AddItemEntry): AddItemEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.AddItemEntry",
      value: AddItemEntry.encode(message).finish()
    };
  }
};
function createBaseCollectOperationalParams(): CollectOperationalParams {
  return {
    baseCollectionDeposit: "",
    perItemDeposit: "",
    perItemSpamTax: "",
    sponsorFee: "",
    minSponsorTrustLevel: "",
    sponsorshipRequestTtlBlocks: BigInt(0),
    minCuratorBond: "",
    minCuratorTrustLevel: "",
    minCuratorAgeBlocks: BigInt(0),
    maxTagsPerReview: 0,
    maxReviewCommentLength: 0,
    maxReviewsPerCollection: 0,
    curatorSlashFraction: "",
    challengeWindowBlocks: BigInt(0),
    challengeDeposit: "",
    maxChallengeReasonLength: 0,
    challengeRewardFraction: "",
    downvoteCost: "",
    maxUpvotesPerDay: 0,
    maxDownvotesPerDay: 0,
    flagReviewThreshold: 0,
    maxFlagsPerDay: 0,
    maxFlaggersPerTarget: 0,
    flagExpirationBlocks: BigInt(0),
    maxFlagReasonLength: 0,
    sentinelCommitAmount: "",
    hideExpiryBlocks: BigInt(0),
    appealFee: "",
    appealCooldownBlocks: BigInt(0),
    appealDeadlineBlocks: BigInt(0),
    endorsementCreationFee: "",
    endorsementDreamStake: "",
    endorsementStakeDuration: BigInt(0),
    endorsementExpiryBlocks: BigInt(0),
    endorsementFeeEndorserShare: "",
    endorsementDeletionBurnFraction: "",
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0),
    pinMinTrustLevel: 0,
    maxPinsPerDay: 0,
    curatorDemotionCooldown: BigInt(0),
    curatorDemotionThreshold: "",
    curatorOverturnDemotionStreak: BigInt(0),
    curatorUnbondCooldown: BigInt(0),
    makePermanentMinTrustLevel: 0,
    maxMakePermanentPerDay: 0,
    nonMemberCollabDreamStake: "",
    nonMemberCollabBurnFraction: "",
    endorserRepPenalty: "",
    collabInviterRepPenalty: "",
    authorRepPenalty: "",
    sentinelUnhideWindowBlocks: BigInt(0),
    maxHidesPerSentinelPerDay: 0
  };
}
/**
 * CollectOperationalParams defines council-adjustable operational parameters for x/collect.
 * @name CollectOperationalParams
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CollectOperationalParams
 */
export const CollectOperationalParams = {
  typeUrl: "/sparkdream.collect.v1.CollectOperationalParams",
  encode(message: CollectOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseCollectionDeposit !== "") {
      writer.uint32(10).string(message.baseCollectionDeposit);
    }
    if (message.perItemDeposit !== "") {
      writer.uint32(18).string(message.perItemDeposit);
    }
    if (message.perItemSpamTax !== "") {
      writer.uint32(26).string(message.perItemSpamTax);
    }
    if (message.sponsorFee !== "") {
      writer.uint32(42).string(message.sponsorFee);
    }
    if (message.minSponsorTrustLevel !== "") {
      writer.uint32(50).string(message.minSponsorTrustLevel);
    }
    if (message.sponsorshipRequestTtlBlocks !== BigInt(0)) {
      writer.uint32(56).int64(message.sponsorshipRequestTtlBlocks);
    }
    if (message.minCuratorBond !== "") {
      writer.uint32(66).string(message.minCuratorBond);
    }
    if (message.minCuratorTrustLevel !== "") {
      writer.uint32(74).string(message.minCuratorTrustLevel);
    }
    if (message.minCuratorAgeBlocks !== BigInt(0)) {
      writer.uint32(80).int64(message.minCuratorAgeBlocks);
    }
    if (message.maxTagsPerReview !== 0) {
      writer.uint32(88).uint32(message.maxTagsPerReview);
    }
    if (message.maxReviewCommentLength !== 0) {
      writer.uint32(96).uint32(message.maxReviewCommentLength);
    }
    if (message.maxReviewsPerCollection !== 0) {
      writer.uint32(104).uint32(message.maxReviewsPerCollection);
    }
    if (message.curatorSlashFraction !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.curatorSlashFraction, 18).atomics);
    }
    if (message.challengeWindowBlocks !== BigInt(0)) {
      writer.uint32(120).int64(message.challengeWindowBlocks);
    }
    if (message.challengeDeposit !== "") {
      writer.uint32(130).string(message.challengeDeposit);
    }
    if (message.maxChallengeReasonLength !== 0) {
      writer.uint32(136).uint32(message.maxChallengeReasonLength);
    }
    if (message.challengeRewardFraction !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.challengeRewardFraction, 18).atomics);
    }
    if (message.downvoteCost !== "") {
      writer.uint32(154).string(message.downvoteCost);
    }
    if (message.maxUpvotesPerDay !== 0) {
      writer.uint32(160).uint32(message.maxUpvotesPerDay);
    }
    if (message.maxDownvotesPerDay !== 0) {
      writer.uint32(168).uint32(message.maxDownvotesPerDay);
    }
    if (message.flagReviewThreshold !== 0) {
      writer.uint32(176).uint32(message.flagReviewThreshold);
    }
    if (message.maxFlagsPerDay !== 0) {
      writer.uint32(184).uint32(message.maxFlagsPerDay);
    }
    if (message.maxFlaggersPerTarget !== 0) {
      writer.uint32(192).uint32(message.maxFlaggersPerTarget);
    }
    if (message.flagExpirationBlocks !== BigInt(0)) {
      writer.uint32(200).int64(message.flagExpirationBlocks);
    }
    if (message.maxFlagReasonLength !== 0) {
      writer.uint32(208).uint32(message.maxFlagReasonLength);
    }
    if (message.sentinelCommitAmount !== "") {
      writer.uint32(218).string(message.sentinelCommitAmount);
    }
    if (message.hideExpiryBlocks !== BigInt(0)) {
      writer.uint32(224).int64(message.hideExpiryBlocks);
    }
    if (message.appealFee !== "") {
      writer.uint32(234).string(message.appealFee);
    }
    if (message.appealCooldownBlocks !== BigInt(0)) {
      writer.uint32(240).int64(message.appealCooldownBlocks);
    }
    if (message.appealDeadlineBlocks !== BigInt(0)) {
      writer.uint32(248).int64(message.appealDeadlineBlocks);
    }
    if (message.endorsementCreationFee !== "") {
      writer.uint32(258).string(message.endorsementCreationFee);
    }
    if (message.endorsementDreamStake !== "") {
      writer.uint32(266).string(message.endorsementDreamStake);
    }
    if (message.endorsementStakeDuration !== BigInt(0)) {
      writer.uint32(272).int64(message.endorsementStakeDuration);
    }
    if (message.endorsementExpiryBlocks !== BigInt(0)) {
      writer.uint32(280).int64(message.endorsementExpiryBlocks);
    }
    if (message.endorsementFeeEndorserShare !== "") {
      writer.uint32(290).string(Decimal.fromUserInput(message.endorsementFeeEndorserShare, 18).atomics);
    }
    if (message.endorsementDeletionBurnFraction !== "") {
      writer.uint32(298).string(Decimal.fromUserInput(message.endorsementDeletionBurnFraction, 18).atomics);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(306).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(312).int64(message.convictionRenewalPeriod);
    }
    if (message.pinMinTrustLevel !== 0) {
      writer.uint32(344).uint32(message.pinMinTrustLevel);
    }
    if (message.maxPinsPerDay !== 0) {
      writer.uint32(352).uint32(message.maxPinsPerDay);
    }
    if (message.curatorDemotionCooldown !== BigInt(0)) {
      writer.uint32(360).int64(message.curatorDemotionCooldown);
    }
    if (message.curatorDemotionThreshold !== "") {
      writer.uint32(370).string(message.curatorDemotionThreshold);
    }
    if (message.curatorOverturnDemotionStreak !== BigInt(0)) {
      writer.uint32(376).uint64(message.curatorOverturnDemotionStreak);
    }
    if (message.curatorUnbondCooldown !== BigInt(0)) {
      writer.uint32(384).int64(message.curatorUnbondCooldown);
    }
    if (message.makePermanentMinTrustLevel !== 0) {
      writer.uint32(392).uint32(message.makePermanentMinTrustLevel);
    }
    if (message.maxMakePermanentPerDay !== 0) {
      writer.uint32(440).uint32(message.maxMakePermanentPerDay);
    }
    if (message.nonMemberCollabDreamStake !== "") {
      writer.uint32(402).string(message.nonMemberCollabDreamStake);
    }
    if (message.nonMemberCollabBurnFraction !== "") {
      writer.uint32(410).string(Decimal.fromUserInput(message.nonMemberCollabBurnFraction, 18).atomics);
    }
    if (message.endorserRepPenalty !== "") {
      writer.uint32(418).string(Decimal.fromUserInput(message.endorserRepPenalty, 18).atomics);
    }
    if (message.collabInviterRepPenalty !== "") {
      writer.uint32(426).string(Decimal.fromUserInput(message.collabInviterRepPenalty, 18).atomics);
    }
    if (message.authorRepPenalty !== "") {
      writer.uint32(434).string(Decimal.fromUserInput(message.authorRepPenalty, 18).atomics);
    }
    if (message.sentinelUnhideWindowBlocks !== BigInt(0)) {
      writer.uint32(448).int64(message.sentinelUnhideWindowBlocks);
    }
    if (message.maxHidesPerSentinelPerDay !== 0) {
      writer.uint32(456).uint32(message.maxHidesPerSentinelPerDay);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CollectOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseCollectionDeposit = reader.string();
          break;
        case 2:
          message.perItemDeposit = reader.string();
          break;
        case 3:
          message.perItemSpamTax = reader.string();
          break;
        case 5:
          message.sponsorFee = reader.string();
          break;
        case 6:
          message.minSponsorTrustLevel = reader.string();
          break;
        case 7:
          message.sponsorshipRequestTtlBlocks = reader.int64();
          break;
        case 8:
          message.minCuratorBond = reader.string();
          break;
        case 9:
          message.minCuratorTrustLevel = reader.string();
          break;
        case 10:
          message.minCuratorAgeBlocks = reader.int64();
          break;
        case 11:
          message.maxTagsPerReview = reader.uint32();
          break;
        case 12:
          message.maxReviewCommentLength = reader.uint32();
          break;
        case 13:
          message.maxReviewsPerCollection = reader.uint32();
          break;
        case 14:
          message.curatorSlashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.challengeWindowBlocks = reader.int64();
          break;
        case 16:
          message.challengeDeposit = reader.string();
          break;
        case 17:
          message.maxChallengeReasonLength = reader.uint32();
          break;
        case 18:
          message.challengeRewardFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.downvoteCost = reader.string();
          break;
        case 20:
          message.maxUpvotesPerDay = reader.uint32();
          break;
        case 21:
          message.maxDownvotesPerDay = reader.uint32();
          break;
        case 22:
          message.flagReviewThreshold = reader.uint32();
          break;
        case 23:
          message.maxFlagsPerDay = reader.uint32();
          break;
        case 24:
          message.maxFlaggersPerTarget = reader.uint32();
          break;
        case 25:
          message.flagExpirationBlocks = reader.int64();
          break;
        case 26:
          message.maxFlagReasonLength = reader.uint32();
          break;
        case 27:
          message.sentinelCommitAmount = reader.string();
          break;
        case 28:
          message.hideExpiryBlocks = reader.int64();
          break;
        case 29:
          message.appealFee = reader.string();
          break;
        case 30:
          message.appealCooldownBlocks = reader.int64();
          break;
        case 31:
          message.appealDeadlineBlocks = reader.int64();
          break;
        case 32:
          message.endorsementCreationFee = reader.string();
          break;
        case 33:
          message.endorsementDreamStake = reader.string();
          break;
        case 34:
          message.endorsementStakeDuration = reader.int64();
          break;
        case 35:
          message.endorsementExpiryBlocks = reader.int64();
          break;
        case 36:
          message.endorsementFeeEndorserShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 37:
          message.endorsementDeletionBurnFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 38:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 39:
          message.convictionRenewalPeriod = reader.int64();
          break;
        case 43:
          message.pinMinTrustLevel = reader.uint32();
          break;
        case 44:
          message.maxPinsPerDay = reader.uint32();
          break;
        case 45:
          message.curatorDemotionCooldown = reader.int64();
          break;
        case 46:
          message.curatorDemotionThreshold = reader.string();
          break;
        case 47:
          message.curatorOverturnDemotionStreak = reader.uint64();
          break;
        case 48:
          message.curatorUnbondCooldown = reader.int64();
          break;
        case 49:
          message.makePermanentMinTrustLevel = reader.uint32();
          break;
        case 55:
          message.maxMakePermanentPerDay = reader.uint32();
          break;
        case 50:
          message.nonMemberCollabDreamStake = reader.string();
          break;
        case 51:
          message.nonMemberCollabBurnFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 52:
          message.endorserRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 53:
          message.collabInviterRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 54:
          message.authorRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 56:
          message.sentinelUnhideWindowBlocks = reader.int64();
          break;
        case 57:
          message.maxHidesPerSentinelPerDay = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CollectOperationalParams>): CollectOperationalParams {
    const message = createBaseCollectOperationalParams();
    message.baseCollectionDeposit = object.baseCollectionDeposit ?? "";
    message.perItemDeposit = object.perItemDeposit ?? "";
    message.perItemSpamTax = object.perItemSpamTax ?? "";
    message.sponsorFee = object.sponsorFee ?? "";
    message.minSponsorTrustLevel = object.minSponsorTrustLevel ?? "";
    message.sponsorshipRequestTtlBlocks = object.sponsorshipRequestTtlBlocks !== undefined && object.sponsorshipRequestTtlBlocks !== null ? BigInt(object.sponsorshipRequestTtlBlocks.toString()) : BigInt(0);
    message.minCuratorBond = object.minCuratorBond ?? "";
    message.minCuratorTrustLevel = object.minCuratorTrustLevel ?? "";
    message.minCuratorAgeBlocks = object.minCuratorAgeBlocks !== undefined && object.minCuratorAgeBlocks !== null ? BigInt(object.minCuratorAgeBlocks.toString()) : BigInt(0);
    message.maxTagsPerReview = object.maxTagsPerReview ?? 0;
    message.maxReviewCommentLength = object.maxReviewCommentLength ?? 0;
    message.maxReviewsPerCollection = object.maxReviewsPerCollection ?? 0;
    message.curatorSlashFraction = object.curatorSlashFraction ?? "";
    message.challengeWindowBlocks = object.challengeWindowBlocks !== undefined && object.challengeWindowBlocks !== null ? BigInt(object.challengeWindowBlocks.toString()) : BigInt(0);
    message.challengeDeposit = object.challengeDeposit ?? "";
    message.maxChallengeReasonLength = object.maxChallengeReasonLength ?? 0;
    message.challengeRewardFraction = object.challengeRewardFraction ?? "";
    message.downvoteCost = object.downvoteCost ?? "";
    message.maxUpvotesPerDay = object.maxUpvotesPerDay ?? 0;
    message.maxDownvotesPerDay = object.maxDownvotesPerDay ?? 0;
    message.flagReviewThreshold = object.flagReviewThreshold ?? 0;
    message.maxFlagsPerDay = object.maxFlagsPerDay ?? 0;
    message.maxFlaggersPerTarget = object.maxFlaggersPerTarget ?? 0;
    message.flagExpirationBlocks = object.flagExpirationBlocks !== undefined && object.flagExpirationBlocks !== null ? BigInt(object.flagExpirationBlocks.toString()) : BigInt(0);
    message.maxFlagReasonLength = object.maxFlagReasonLength ?? 0;
    message.sentinelCommitAmount = object.sentinelCommitAmount ?? "";
    message.hideExpiryBlocks = object.hideExpiryBlocks !== undefined && object.hideExpiryBlocks !== null ? BigInt(object.hideExpiryBlocks.toString()) : BigInt(0);
    message.appealFee = object.appealFee ?? "";
    message.appealCooldownBlocks = object.appealCooldownBlocks !== undefined && object.appealCooldownBlocks !== null ? BigInt(object.appealCooldownBlocks.toString()) : BigInt(0);
    message.appealDeadlineBlocks = object.appealDeadlineBlocks !== undefined && object.appealDeadlineBlocks !== null ? BigInt(object.appealDeadlineBlocks.toString()) : BigInt(0);
    message.endorsementCreationFee = object.endorsementCreationFee ?? "";
    message.endorsementDreamStake = object.endorsementDreamStake ?? "";
    message.endorsementStakeDuration = object.endorsementStakeDuration !== undefined && object.endorsementStakeDuration !== null ? BigInt(object.endorsementStakeDuration.toString()) : BigInt(0);
    message.endorsementExpiryBlocks = object.endorsementExpiryBlocks !== undefined && object.endorsementExpiryBlocks !== null ? BigInt(object.endorsementExpiryBlocks.toString()) : BigInt(0);
    message.endorsementFeeEndorserShare = object.endorsementFeeEndorserShare ?? "";
    message.endorsementDeletionBurnFraction = object.endorsementDeletionBurnFraction ?? "";
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    message.pinMinTrustLevel = object.pinMinTrustLevel ?? 0;
    message.maxPinsPerDay = object.maxPinsPerDay ?? 0;
    message.curatorDemotionCooldown = object.curatorDemotionCooldown !== undefined && object.curatorDemotionCooldown !== null ? BigInt(object.curatorDemotionCooldown.toString()) : BigInt(0);
    message.curatorDemotionThreshold = object.curatorDemotionThreshold ?? "";
    message.curatorOverturnDemotionStreak = object.curatorOverturnDemotionStreak !== undefined && object.curatorOverturnDemotionStreak !== null ? BigInt(object.curatorOverturnDemotionStreak.toString()) : BigInt(0);
    message.curatorUnbondCooldown = object.curatorUnbondCooldown !== undefined && object.curatorUnbondCooldown !== null ? BigInt(object.curatorUnbondCooldown.toString()) : BigInt(0);
    message.makePermanentMinTrustLevel = object.makePermanentMinTrustLevel ?? 0;
    message.maxMakePermanentPerDay = object.maxMakePermanentPerDay ?? 0;
    message.nonMemberCollabDreamStake = object.nonMemberCollabDreamStake ?? "";
    message.nonMemberCollabBurnFraction = object.nonMemberCollabBurnFraction ?? "";
    message.endorserRepPenalty = object.endorserRepPenalty ?? "";
    message.collabInviterRepPenalty = object.collabInviterRepPenalty ?? "";
    message.authorRepPenalty = object.authorRepPenalty ?? "";
    message.sentinelUnhideWindowBlocks = object.sentinelUnhideWindowBlocks !== undefined && object.sentinelUnhideWindowBlocks !== null ? BigInt(object.sentinelUnhideWindowBlocks.toString()) : BigInt(0);
    message.maxHidesPerSentinelPerDay = object.maxHidesPerSentinelPerDay ?? 0;
    return message;
  },
  fromAmino(object: CollectOperationalParamsAmino): CollectOperationalParams {
    const message = createBaseCollectOperationalParams();
    if (object.base_collection_deposit !== undefined && object.base_collection_deposit !== null) {
      message.baseCollectionDeposit = object.base_collection_deposit;
    }
    if (object.per_item_deposit !== undefined && object.per_item_deposit !== null) {
      message.perItemDeposit = object.per_item_deposit;
    }
    if (object.per_item_spam_tax !== undefined && object.per_item_spam_tax !== null) {
      message.perItemSpamTax = object.per_item_spam_tax;
    }
    if (object.sponsor_fee !== undefined && object.sponsor_fee !== null) {
      message.sponsorFee = object.sponsor_fee;
    }
    if (object.min_sponsor_trust_level !== undefined && object.min_sponsor_trust_level !== null) {
      message.minSponsorTrustLevel = object.min_sponsor_trust_level;
    }
    if (object.sponsorship_request_ttl_blocks !== undefined && object.sponsorship_request_ttl_blocks !== null) {
      message.sponsorshipRequestTtlBlocks = BigInt(object.sponsorship_request_ttl_blocks);
    }
    if (object.min_curator_bond !== undefined && object.min_curator_bond !== null) {
      message.minCuratorBond = object.min_curator_bond;
    }
    if (object.min_curator_trust_level !== undefined && object.min_curator_trust_level !== null) {
      message.minCuratorTrustLevel = object.min_curator_trust_level;
    }
    if (object.min_curator_age_blocks !== undefined && object.min_curator_age_blocks !== null) {
      message.minCuratorAgeBlocks = BigInt(object.min_curator_age_blocks);
    }
    if (object.max_tags_per_review !== undefined && object.max_tags_per_review !== null) {
      message.maxTagsPerReview = object.max_tags_per_review;
    }
    if (object.max_review_comment_length !== undefined && object.max_review_comment_length !== null) {
      message.maxReviewCommentLength = object.max_review_comment_length;
    }
    if (object.max_reviews_per_collection !== undefined && object.max_reviews_per_collection !== null) {
      message.maxReviewsPerCollection = object.max_reviews_per_collection;
    }
    if (object.curator_slash_fraction !== undefined && object.curator_slash_fraction !== null) {
      message.curatorSlashFraction = object.curator_slash_fraction;
    }
    if (object.challenge_window_blocks !== undefined && object.challenge_window_blocks !== null) {
      message.challengeWindowBlocks = BigInt(object.challenge_window_blocks);
    }
    if (object.challenge_deposit !== undefined && object.challenge_deposit !== null) {
      message.challengeDeposit = object.challenge_deposit;
    }
    if (object.max_challenge_reason_length !== undefined && object.max_challenge_reason_length !== null) {
      message.maxChallengeReasonLength = object.max_challenge_reason_length;
    }
    if (object.challenge_reward_fraction !== undefined && object.challenge_reward_fraction !== null) {
      message.challengeRewardFraction = object.challenge_reward_fraction;
    }
    if (object.downvote_cost !== undefined && object.downvote_cost !== null) {
      message.downvoteCost = object.downvote_cost;
    }
    if (object.max_upvotes_per_day !== undefined && object.max_upvotes_per_day !== null) {
      message.maxUpvotesPerDay = object.max_upvotes_per_day;
    }
    if (object.max_downvotes_per_day !== undefined && object.max_downvotes_per_day !== null) {
      message.maxDownvotesPerDay = object.max_downvotes_per_day;
    }
    if (object.flag_review_threshold !== undefined && object.flag_review_threshold !== null) {
      message.flagReviewThreshold = object.flag_review_threshold;
    }
    if (object.max_flags_per_day !== undefined && object.max_flags_per_day !== null) {
      message.maxFlagsPerDay = object.max_flags_per_day;
    }
    if (object.max_flaggers_per_target !== undefined && object.max_flaggers_per_target !== null) {
      message.maxFlaggersPerTarget = object.max_flaggers_per_target;
    }
    if (object.flag_expiration_blocks !== undefined && object.flag_expiration_blocks !== null) {
      message.flagExpirationBlocks = BigInt(object.flag_expiration_blocks);
    }
    if (object.max_flag_reason_length !== undefined && object.max_flag_reason_length !== null) {
      message.maxFlagReasonLength = object.max_flag_reason_length;
    }
    if (object.sentinel_commit_amount !== undefined && object.sentinel_commit_amount !== null) {
      message.sentinelCommitAmount = object.sentinel_commit_amount;
    }
    if (object.hide_expiry_blocks !== undefined && object.hide_expiry_blocks !== null) {
      message.hideExpiryBlocks = BigInt(object.hide_expiry_blocks);
    }
    if (object.appeal_fee !== undefined && object.appeal_fee !== null) {
      message.appealFee = object.appeal_fee;
    }
    if (object.appeal_cooldown_blocks !== undefined && object.appeal_cooldown_blocks !== null) {
      message.appealCooldownBlocks = BigInt(object.appeal_cooldown_blocks);
    }
    if (object.appeal_deadline_blocks !== undefined && object.appeal_deadline_blocks !== null) {
      message.appealDeadlineBlocks = BigInt(object.appeal_deadline_blocks);
    }
    if (object.endorsement_creation_fee !== undefined && object.endorsement_creation_fee !== null) {
      message.endorsementCreationFee = object.endorsement_creation_fee;
    }
    if (object.endorsement_dream_stake !== undefined && object.endorsement_dream_stake !== null) {
      message.endorsementDreamStake = object.endorsement_dream_stake;
    }
    if (object.endorsement_stake_duration !== undefined && object.endorsement_stake_duration !== null) {
      message.endorsementStakeDuration = BigInt(object.endorsement_stake_duration);
    }
    if (object.endorsement_expiry_blocks !== undefined && object.endorsement_expiry_blocks !== null) {
      message.endorsementExpiryBlocks = BigInt(object.endorsement_expiry_blocks);
    }
    if (object.endorsement_fee_endorser_share !== undefined && object.endorsement_fee_endorser_share !== null) {
      message.endorsementFeeEndorserShare = object.endorsement_fee_endorser_share;
    }
    if (object.endorsement_deletion_burn_fraction !== undefined && object.endorsement_deletion_burn_fraction !== null) {
      message.endorsementDeletionBurnFraction = object.endorsement_deletion_burn_fraction;
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    if (object.pin_min_trust_level !== undefined && object.pin_min_trust_level !== null) {
      message.pinMinTrustLevel = object.pin_min_trust_level;
    }
    if (object.max_pins_per_day !== undefined && object.max_pins_per_day !== null) {
      message.maxPinsPerDay = object.max_pins_per_day;
    }
    if (object.curator_demotion_cooldown !== undefined && object.curator_demotion_cooldown !== null) {
      message.curatorDemotionCooldown = BigInt(object.curator_demotion_cooldown);
    }
    if (object.curator_demotion_threshold !== undefined && object.curator_demotion_threshold !== null) {
      message.curatorDemotionThreshold = object.curator_demotion_threshold;
    }
    if (object.curator_overturn_demotion_streak !== undefined && object.curator_overturn_demotion_streak !== null) {
      message.curatorOverturnDemotionStreak = BigInt(object.curator_overturn_demotion_streak);
    }
    if (object.curator_unbond_cooldown !== undefined && object.curator_unbond_cooldown !== null) {
      message.curatorUnbondCooldown = BigInt(object.curator_unbond_cooldown);
    }
    if (object.make_permanent_min_trust_level !== undefined && object.make_permanent_min_trust_level !== null) {
      message.makePermanentMinTrustLevel = object.make_permanent_min_trust_level;
    }
    if (object.max_make_permanent_per_day !== undefined && object.max_make_permanent_per_day !== null) {
      message.maxMakePermanentPerDay = object.max_make_permanent_per_day;
    }
    if (object.non_member_collab_dream_stake !== undefined && object.non_member_collab_dream_stake !== null) {
      message.nonMemberCollabDreamStake = object.non_member_collab_dream_stake;
    }
    if (object.non_member_collab_burn_fraction !== undefined && object.non_member_collab_burn_fraction !== null) {
      message.nonMemberCollabBurnFraction = object.non_member_collab_burn_fraction;
    }
    if (object.endorser_rep_penalty !== undefined && object.endorser_rep_penalty !== null) {
      message.endorserRepPenalty = object.endorser_rep_penalty;
    }
    if (object.collab_inviter_rep_penalty !== undefined && object.collab_inviter_rep_penalty !== null) {
      message.collabInviterRepPenalty = object.collab_inviter_rep_penalty;
    }
    if (object.author_rep_penalty !== undefined && object.author_rep_penalty !== null) {
      message.authorRepPenalty = object.author_rep_penalty;
    }
    if (object.sentinel_unhide_window_blocks !== undefined && object.sentinel_unhide_window_blocks !== null) {
      message.sentinelUnhideWindowBlocks = BigInt(object.sentinel_unhide_window_blocks);
    }
    if (object.max_hides_per_sentinel_per_day !== undefined && object.max_hides_per_sentinel_per_day !== null) {
      message.maxHidesPerSentinelPerDay = object.max_hides_per_sentinel_per_day;
    }
    return message;
  },
  toAmino(message: CollectOperationalParams): CollectOperationalParamsAmino {
    const obj: any = {};
    obj.base_collection_deposit = message.baseCollectionDeposit === "" ? undefined : message.baseCollectionDeposit;
    obj.per_item_deposit = message.perItemDeposit === "" ? undefined : message.perItemDeposit;
    obj.per_item_spam_tax = message.perItemSpamTax === "" ? undefined : message.perItemSpamTax;
    obj.sponsor_fee = message.sponsorFee === "" ? undefined : message.sponsorFee;
    obj.min_sponsor_trust_level = message.minSponsorTrustLevel === "" ? undefined : message.minSponsorTrustLevel;
    obj.sponsorship_request_ttl_blocks = message.sponsorshipRequestTtlBlocks !== BigInt(0) ? message.sponsorshipRequestTtlBlocks?.toString() : undefined;
    obj.min_curator_bond = message.minCuratorBond === "" ? undefined : message.minCuratorBond;
    obj.min_curator_trust_level = message.minCuratorTrustLevel === "" ? undefined : message.minCuratorTrustLevel;
    obj.min_curator_age_blocks = message.minCuratorAgeBlocks !== BigInt(0) ? message.minCuratorAgeBlocks?.toString() : undefined;
    obj.max_tags_per_review = message.maxTagsPerReview === 0 ? undefined : message.maxTagsPerReview;
    obj.max_review_comment_length = message.maxReviewCommentLength === 0 ? undefined : message.maxReviewCommentLength;
    obj.max_reviews_per_collection = message.maxReviewsPerCollection === 0 ? undefined : message.maxReviewsPerCollection;
    obj.curator_slash_fraction = message.curatorSlashFraction === "" ? undefined : message.curatorSlashFraction;
    obj.challenge_window_blocks = message.challengeWindowBlocks !== BigInt(0) ? message.challengeWindowBlocks?.toString() : undefined;
    obj.challenge_deposit = message.challengeDeposit === "" ? undefined : message.challengeDeposit;
    obj.max_challenge_reason_length = message.maxChallengeReasonLength === 0 ? undefined : message.maxChallengeReasonLength;
    obj.challenge_reward_fraction = message.challengeRewardFraction === "" ? undefined : message.challengeRewardFraction;
    obj.downvote_cost = message.downvoteCost === "" ? undefined : message.downvoteCost;
    obj.max_upvotes_per_day = message.maxUpvotesPerDay === 0 ? undefined : message.maxUpvotesPerDay;
    obj.max_downvotes_per_day = message.maxDownvotesPerDay === 0 ? undefined : message.maxDownvotesPerDay;
    obj.flag_review_threshold = message.flagReviewThreshold === 0 ? undefined : message.flagReviewThreshold;
    obj.max_flags_per_day = message.maxFlagsPerDay === 0 ? undefined : message.maxFlagsPerDay;
    obj.max_flaggers_per_target = message.maxFlaggersPerTarget === 0 ? undefined : message.maxFlaggersPerTarget;
    obj.flag_expiration_blocks = message.flagExpirationBlocks !== BigInt(0) ? message.flagExpirationBlocks?.toString() : undefined;
    obj.max_flag_reason_length = message.maxFlagReasonLength === 0 ? undefined : message.maxFlagReasonLength;
    obj.sentinel_commit_amount = message.sentinelCommitAmount === "" ? undefined : message.sentinelCommitAmount;
    obj.hide_expiry_blocks = message.hideExpiryBlocks !== BigInt(0) ? message.hideExpiryBlocks?.toString() : undefined;
    obj.appeal_fee = message.appealFee === "" ? undefined : message.appealFee;
    obj.appeal_cooldown_blocks = message.appealCooldownBlocks !== BigInt(0) ? message.appealCooldownBlocks?.toString() : undefined;
    obj.appeal_deadline_blocks = message.appealDeadlineBlocks !== BigInt(0) ? message.appealDeadlineBlocks?.toString() : undefined;
    obj.endorsement_creation_fee = message.endorsementCreationFee === "" ? undefined : message.endorsementCreationFee;
    obj.endorsement_dream_stake = message.endorsementDreamStake === "" ? undefined : message.endorsementDreamStake;
    obj.endorsement_stake_duration = message.endorsementStakeDuration !== BigInt(0) ? message.endorsementStakeDuration?.toString() : undefined;
    obj.endorsement_expiry_blocks = message.endorsementExpiryBlocks !== BigInt(0) ? message.endorsementExpiryBlocks?.toString() : undefined;
    obj.endorsement_fee_endorser_share = message.endorsementFeeEndorserShare === "" ? undefined : message.endorsementFeeEndorserShare;
    obj.endorsement_deletion_burn_fraction = message.endorsementDeletionBurnFraction === "" ? undefined : message.endorsementDeletionBurnFraction;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    obj.pin_min_trust_level = message.pinMinTrustLevel === 0 ? undefined : message.pinMinTrustLevel;
    obj.max_pins_per_day = message.maxPinsPerDay === 0 ? undefined : message.maxPinsPerDay;
    obj.curator_demotion_cooldown = message.curatorDemotionCooldown !== BigInt(0) ? message.curatorDemotionCooldown?.toString() : undefined;
    obj.curator_demotion_threshold = message.curatorDemotionThreshold === "" ? undefined : message.curatorDemotionThreshold;
    obj.curator_overturn_demotion_streak = message.curatorOverturnDemotionStreak !== BigInt(0) ? message.curatorOverturnDemotionStreak?.toString() : undefined;
    obj.curator_unbond_cooldown = message.curatorUnbondCooldown !== BigInt(0) ? message.curatorUnbondCooldown?.toString() : undefined;
    obj.make_permanent_min_trust_level = message.makePermanentMinTrustLevel === 0 ? undefined : message.makePermanentMinTrustLevel;
    obj.max_make_permanent_per_day = message.maxMakePermanentPerDay === 0 ? undefined : message.maxMakePermanentPerDay;
    obj.non_member_collab_dream_stake = message.nonMemberCollabDreamStake === "" ? undefined : message.nonMemberCollabDreamStake;
    obj.non_member_collab_burn_fraction = message.nonMemberCollabBurnFraction === "" ? undefined : message.nonMemberCollabBurnFraction;
    obj.endorser_rep_penalty = message.endorserRepPenalty === "" ? undefined : message.endorserRepPenalty;
    obj.collab_inviter_rep_penalty = message.collabInviterRepPenalty === "" ? undefined : message.collabInviterRepPenalty;
    obj.author_rep_penalty = message.authorRepPenalty === "" ? undefined : message.authorRepPenalty;
    obj.sentinel_unhide_window_blocks = message.sentinelUnhideWindowBlocks !== BigInt(0) ? message.sentinelUnhideWindowBlocks?.toString() : undefined;
    obj.max_hides_per_sentinel_per_day = message.maxHidesPerSentinelPerDay === 0 ? undefined : message.maxHidesPerSentinelPerDay;
    return obj;
  },
  fromAminoMsg(object: CollectOperationalParamsAminoMsg): CollectOperationalParams {
    return CollectOperationalParams.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectOperationalParamsProtoMsg): CollectOperationalParams {
    return CollectOperationalParams.decode(message.value);
  },
  toProto(message: CollectOperationalParams): Uint8Array {
    return CollectOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: CollectOperationalParams): CollectOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CollectOperationalParams",
      value: CollectOperationalParams.encode(message).finish()
    };
  }
};
function createBaseCollectionFlag(): CollectionFlag {
  return {
    targetId: BigInt(0),
    targetType: 0,
    flagRecords: [],
    totalWeight: "",
    firstFlagAt: BigInt(0),
    lastFlagAt: BigInt(0),
    inReviewQueue: false
  };
}
/**
 * CollectionFlag aggregates all flags on a single piece of content.
 * @name CollectionFlag
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CollectionFlag
 */
export const CollectionFlag = {
  typeUrl: "/sparkdream.collect.v1.CollectionFlag",
  encode(message: CollectionFlag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    for (const v of message.flagRecords) {
      FlagRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(34).string(message.totalWeight);
    }
    if (message.firstFlagAt !== BigInt(0)) {
      writer.uint32(40).int64(message.firstFlagAt);
    }
    if (message.lastFlagAt !== BigInt(0)) {
      writer.uint32(48).int64(message.lastFlagAt);
    }
    if (message.inReviewQueue === true) {
      writer.uint32(56).bool(message.inReviewQueue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CollectionFlag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.uint64();
          break;
        case 2:
          message.targetType = reader.int32() as any;
          break;
        case 3:
          message.flagRecords.push(FlagRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalWeight = reader.string();
          break;
        case 5:
          message.firstFlagAt = reader.int64();
          break;
        case 6:
          message.lastFlagAt = reader.int64();
          break;
        case 7:
          message.inReviewQueue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CollectionFlag>): CollectionFlag {
    const message = createBaseCollectionFlag();
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    message.flagRecords = object.flagRecords?.map(e => FlagRecord.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    message.firstFlagAt = object.firstFlagAt !== undefined && object.firstFlagAt !== null ? BigInt(object.firstFlagAt.toString()) : BigInt(0);
    message.lastFlagAt = object.lastFlagAt !== undefined && object.lastFlagAt !== null ? BigInt(object.lastFlagAt.toString()) : BigInt(0);
    message.inReviewQueue = object.inReviewQueue ?? false;
    return message;
  },
  fromAmino(object: CollectionFlagAmino): CollectionFlag {
    const message = createBaseCollectionFlag();
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    message.flagRecords = object.flag_records?.map(e => FlagRecord.fromAmino(e)) || [];
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.first_flag_at !== undefined && object.first_flag_at !== null) {
      message.firstFlagAt = BigInt(object.first_flag_at);
    }
    if (object.last_flag_at !== undefined && object.last_flag_at !== null) {
      message.lastFlagAt = BigInt(object.last_flag_at);
    }
    if (object.in_review_queue !== undefined && object.in_review_queue !== null) {
      message.inReviewQueue = object.in_review_queue;
    }
    return message;
  },
  toAmino(message: CollectionFlag): CollectionFlagAmino {
    const obj: any = {};
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    if (message.flagRecords) {
      obj.flag_records = message.flagRecords.map(e => e ? FlagRecord.toAmino(e) : undefined);
    } else {
      obj.flag_records = message.flagRecords;
    }
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.first_flag_at = message.firstFlagAt !== BigInt(0) ? message.firstFlagAt?.toString() : undefined;
    obj.last_flag_at = message.lastFlagAt !== BigInt(0) ? message.lastFlagAt?.toString() : undefined;
    obj.in_review_queue = message.inReviewQueue === false ? undefined : message.inReviewQueue;
    return obj;
  },
  fromAminoMsg(object: CollectionFlagAminoMsg): CollectionFlag {
    return CollectionFlag.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionFlagProtoMsg): CollectionFlag {
    return CollectionFlag.decode(message.value);
  },
  toProto(message: CollectionFlag): Uint8Array {
    return CollectionFlag.encode(message).finish();
  },
  toProtoMsg(message: CollectionFlag): CollectionFlagProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CollectionFlag",
      value: CollectionFlag.encode(message).finish()
    };
  }
};
function createBaseHideRecord(): HideRecord {
  return {
    id: BigInt(0),
    targetId: BigInt(0),
    targetType: 0,
    sentinel: "",
    hiddenAt: BigInt(0),
    committedAmount: "",
    reasonCode: 0,
    reasonText: "",
    appealDeadline: BigInt(0),
    appealed: false,
    resolved: false,
    selfCorrected: false,
    authorBondAmount: "",
    authorRepPenalty: "",
    repPenaltyTags: [],
    repPenaltyAmounts: []
  };
}
/**
 * HideRecord tracks a sentinel's content hide action and its appeal status.
 * @name HideRecord
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.HideRecord
 */
export const HideRecord = {
  typeUrl: "/sparkdream.collect.v1.HideRecord",
  encode(message: HideRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    if (message.sentinel !== "") {
      writer.uint32(34).string(message.sentinel);
    }
    if (message.hiddenAt !== BigInt(0)) {
      writer.uint32(40).int64(message.hiddenAt);
    }
    if (message.committedAmount !== "") {
      writer.uint32(50).string(message.committedAmount);
    }
    if (message.reasonCode !== 0) {
      writer.uint32(56).int32(message.reasonCode);
    }
    if (message.reasonText !== "") {
      writer.uint32(66).string(message.reasonText);
    }
    if (message.appealDeadline !== BigInt(0)) {
      writer.uint32(72).int64(message.appealDeadline);
    }
    if (message.appealed === true) {
      writer.uint32(80).bool(message.appealed);
    }
    if (message.resolved === true) {
      writer.uint32(88).bool(message.resolved);
    }
    if (message.selfCorrected === true) {
      writer.uint32(96).bool(message.selfCorrected);
    }
    if (message.authorBondAmount !== "") {
      writer.uint32(106).string(message.authorBondAmount);
    }
    if (message.authorRepPenalty !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.authorRepPenalty, 18).atomics);
    }
    for (const v of message.repPenaltyTags) {
      writer.uint32(122).string(v!);
    }
    for (const v of message.repPenaltyAmounts) {
      writer.uint32(130).string(v!);
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
          message.targetId = reader.uint64();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        case 4:
          message.sentinel = reader.string();
          break;
        case 5:
          message.hiddenAt = reader.int64();
          break;
        case 6:
          message.committedAmount = reader.string();
          break;
        case 7:
          message.reasonCode = reader.int32() as any;
          break;
        case 8:
          message.reasonText = reader.string();
          break;
        case 9:
          message.appealDeadline = reader.int64();
          break;
        case 10:
          message.appealed = reader.bool();
          break;
        case 11:
          message.resolved = reader.bool();
          break;
        case 12:
          message.selfCorrected = reader.bool();
          break;
        case 13:
          message.authorBondAmount = reader.string();
          break;
        case 14:
          message.authorRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.repPenaltyTags.push(reader.string());
          break;
        case 16:
          message.repPenaltyAmounts.push(reader.string());
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
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    message.sentinel = object.sentinel ?? "";
    message.hiddenAt = object.hiddenAt !== undefined && object.hiddenAt !== null ? BigInt(object.hiddenAt.toString()) : BigInt(0);
    message.committedAmount = object.committedAmount ?? "";
    message.reasonCode = object.reasonCode ?? 0;
    message.reasonText = object.reasonText ?? "";
    message.appealDeadline = object.appealDeadline !== undefined && object.appealDeadline !== null ? BigInt(object.appealDeadline.toString()) : BigInt(0);
    message.appealed = object.appealed ?? false;
    message.resolved = object.resolved ?? false;
    message.selfCorrected = object.selfCorrected ?? false;
    message.authorBondAmount = object.authorBondAmount ?? "";
    message.authorRepPenalty = object.authorRepPenalty ?? "";
    message.repPenaltyTags = object.repPenaltyTags?.map(e => e) || [];
    message.repPenaltyAmounts = object.repPenaltyAmounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: HideRecordAmino): HideRecord {
    const message = createBaseHideRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.hidden_at !== undefined && object.hidden_at !== null) {
      message.hiddenAt = BigInt(object.hidden_at);
    }
    if (object.committed_amount !== undefined && object.committed_amount !== null) {
      message.committedAmount = object.committed_amount;
    }
    if (object.reason_code !== undefined && object.reason_code !== null) {
      message.reasonCode = object.reason_code;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    if (object.appeal_deadline !== undefined && object.appeal_deadline !== null) {
      message.appealDeadline = BigInt(object.appeal_deadline);
    }
    if (object.appealed !== undefined && object.appealed !== null) {
      message.appealed = object.appealed;
    }
    if (object.resolved !== undefined && object.resolved !== null) {
      message.resolved = object.resolved;
    }
    if (object.self_corrected !== undefined && object.self_corrected !== null) {
      message.selfCorrected = object.self_corrected;
    }
    if (object.author_bond_amount !== undefined && object.author_bond_amount !== null) {
      message.authorBondAmount = object.author_bond_amount;
    }
    if (object.author_rep_penalty !== undefined && object.author_rep_penalty !== null) {
      message.authorRepPenalty = object.author_rep_penalty;
    }
    message.repPenaltyTags = object.rep_penalty_tags?.map(e => e) || [];
    message.repPenaltyAmounts = object.rep_penalty_amounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: HideRecord): HideRecordAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.hidden_at = message.hiddenAt !== BigInt(0) ? message.hiddenAt?.toString() : undefined;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    obj.reason_code = message.reasonCode === 0 ? undefined : message.reasonCode;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    obj.appeal_deadline = message.appealDeadline !== BigInt(0) ? message.appealDeadline?.toString() : undefined;
    obj.appealed = message.appealed === false ? undefined : message.appealed;
    obj.resolved = message.resolved === false ? undefined : message.resolved;
    obj.self_corrected = message.selfCorrected === false ? undefined : message.selfCorrected;
    obj.author_bond_amount = message.authorBondAmount === "" ? undefined : message.authorBondAmount;
    obj.author_rep_penalty = message.authorRepPenalty === "" ? undefined : message.authorRepPenalty;
    if (message.repPenaltyTags) {
      obj.rep_penalty_tags = message.repPenaltyTags.map(e => e);
    } else {
      obj.rep_penalty_tags = message.repPenaltyTags;
    }
    if (message.repPenaltyAmounts) {
      obj.rep_penalty_amounts = message.repPenaltyAmounts.map(e => e);
    } else {
      obj.rep_penalty_amounts = message.repPenaltyAmounts;
    }
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
      typeUrl: "/sparkdream.collect.v1.HideRecord",
      value: HideRecord.encode(message).finish()
    };
  }
};
function createBaseEndorsement(): Endorsement {
  return {
    collectionId: BigInt(0),
    endorser: "",
    dreamStake: "",
    endorsedAt: BigInt(0),
    stakeReleaseAt: BigInt(0),
    stakeReleased: false
  };
}
/**
 * Endorsement records a member's endorsement of a non-member's collection.
 * @name Endorsement
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Endorsement
 */
export const Endorsement = {
  typeUrl: "/sparkdream.collect.v1.Endorsement",
  encode(message: Endorsement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.endorser !== "") {
      writer.uint32(18).string(message.endorser);
    }
    if (message.dreamStake !== "") {
      writer.uint32(26).string(message.dreamStake);
    }
    if (message.endorsedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.endorsedAt);
    }
    if (message.stakeReleaseAt !== BigInt(0)) {
      writer.uint32(40).int64(message.stakeReleaseAt);
    }
    if (message.stakeReleased === true) {
      writer.uint32(48).bool(message.stakeReleased);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Endorsement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndorsement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        case 2:
          message.endorser = reader.string();
          break;
        case 3:
          message.dreamStake = reader.string();
          break;
        case 4:
          message.endorsedAt = reader.int64();
          break;
        case 5:
          message.stakeReleaseAt = reader.int64();
          break;
        case 6:
          message.stakeReleased = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Endorsement>): Endorsement {
    const message = createBaseEndorsement();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.endorser = object.endorser ?? "";
    message.dreamStake = object.dreamStake ?? "";
    message.endorsedAt = object.endorsedAt !== undefined && object.endorsedAt !== null ? BigInt(object.endorsedAt.toString()) : BigInt(0);
    message.stakeReleaseAt = object.stakeReleaseAt !== undefined && object.stakeReleaseAt !== null ? BigInt(object.stakeReleaseAt.toString()) : BigInt(0);
    message.stakeReleased = object.stakeReleased ?? false;
    return message;
  },
  fromAmino(object: EndorsementAmino): Endorsement {
    const message = createBaseEndorsement();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.endorser !== undefined && object.endorser !== null) {
      message.endorser = object.endorser;
    }
    if (object.dream_stake !== undefined && object.dream_stake !== null) {
      message.dreamStake = object.dream_stake;
    }
    if (object.endorsed_at !== undefined && object.endorsed_at !== null) {
      message.endorsedAt = BigInt(object.endorsed_at);
    }
    if (object.stake_release_at !== undefined && object.stake_release_at !== null) {
      message.stakeReleaseAt = BigInt(object.stake_release_at);
    }
    if (object.stake_released !== undefined && object.stake_released !== null) {
      message.stakeReleased = object.stake_released;
    }
    return message;
  },
  toAmino(message: Endorsement): EndorsementAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.endorser = message.endorser === "" ? undefined : message.endorser;
    obj.dream_stake = message.dreamStake === "" ? undefined : message.dreamStake;
    obj.endorsed_at = message.endorsedAt !== BigInt(0) ? message.endorsedAt?.toString() : undefined;
    obj.stake_release_at = message.stakeReleaseAt !== BigInt(0) ? message.stakeReleaseAt?.toString() : undefined;
    obj.stake_released = message.stakeReleased === false ? undefined : message.stakeReleased;
    return obj;
  },
  fromAminoMsg(object: EndorsementAminoMsg): Endorsement {
    return Endorsement.fromAmino(object.value);
  },
  fromProtoMsg(message: EndorsementProtoMsg): Endorsement {
    return Endorsement.decode(message.value);
  },
  toProto(message: Endorsement): Uint8Array {
    return Endorsement.encode(message).finish();
  },
  toProtoMsg(message: Endorsement): EndorsementProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.Endorsement",
      value: Endorsement.encode(message).finish()
    };
  }
};