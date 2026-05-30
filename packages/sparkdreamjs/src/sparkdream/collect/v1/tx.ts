//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { CollectionType, Visibility, ReferenceType, NftReference, NftReferenceAmino, LinkReference, LinkReferenceAmino, OnChainReference, OnChainReferenceAmino, CustomReference, CustomReferenceAmino, KeyValuePair, KeyValuePairAmino, AddItemEntry, AddItemEntryAmino, CollaboratorRole, CurationVerdict, CollectOperationalParams, CollectOperationalParamsAmino, FlagTargetType } from "./types";
import { ModerationReason } from "../../common/v1/moderation_reason";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/collect/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * @name MsgCreateCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCreateCollection
 */
export interface MsgCreateCollection {
  creator: string;
  type: CollectionType;
  visibility: Visibility;
  encrypted: boolean;
  expiresAt: bigint;
  name: string;
  description: string;
  coverUri: string;
  tags: string[];
  encryptedData: Uint8Array;
  /**
   * Optional DREAM amount to lock as author bond
   */
  authorBond?: string;
  /**
   * Optional x/rep initiative to link for conviction propagation
   */
  initiativeId: bigint;
}
export interface MsgCreateCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgCreateCollection";
  value: Uint8Array;
}
/**
 * @name MsgCreateCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCreateCollection
 */
export interface MsgCreateCollectionAmino {
  creator?: string;
  type?: CollectionType;
  visibility?: Visibility;
  encrypted?: boolean;
  expires_at?: string;
  name?: string;
  description?: string;
  cover_uri?: string;
  tags?: string[];
  encrypted_data?: string;
  /**
   * Optional DREAM amount to lock as author bond
   */
  author_bond?: string;
  /**
   * Optional x/rep initiative to link for conviction propagation
   */
  initiative_id?: string;
}
export interface MsgCreateCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgCreateCollection";
  value: MsgCreateCollectionAmino;
}
/**
 * @name MsgCreateCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCreateCollectionResponse
 */
export interface MsgCreateCollectionResponse {
  id: bigint;
}
export interface MsgCreateCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgCreateCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCreateCollectionResponse
 */
export interface MsgCreateCollectionResponseAmino {
  id?: string;
}
export interface MsgCreateCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgCreateCollectionResponse";
  value: MsgCreateCollectionResponseAmino;
}
/**
 * @name MsgUpdateCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollection
 */
export interface MsgUpdateCollection {
  creator: string;
  id: bigint;
  type: CollectionType;
  expiresAt: bigint;
  name: string;
  description: string;
  coverUri: string;
  tags: string[];
  encryptedData: Uint8Array;
  communityFeedbackEnabled: boolean;
  /**
   * true to apply community_feedback_enabled
   */
  updateCommunityFeedback: boolean;
}
export interface MsgUpdateCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollection";
  value: Uint8Array;
}
/**
 * @name MsgUpdateCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollection
 */
export interface MsgUpdateCollectionAmino {
  creator?: string;
  id?: string;
  type?: CollectionType;
  expires_at?: string;
  name?: string;
  description?: string;
  cover_uri?: string;
  tags?: string[];
  encrypted_data?: string;
  community_feedback_enabled?: boolean;
  /**
   * true to apply community_feedback_enabled
   */
  update_community_feedback?: boolean;
}
export interface MsgUpdateCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgUpdateCollection";
  value: MsgUpdateCollectionAmino;
}
/**
 * @name MsgUpdateCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollectionResponse
 */
export interface MsgUpdateCollectionResponse {}
export interface MsgUpdateCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollectionResponse
 */
export interface MsgUpdateCollectionResponseAmino {}
export interface MsgUpdateCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUpdateCollectionResponse";
  value: MsgUpdateCollectionResponseAmino;
}
/**
 * @name MsgDeleteCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDeleteCollection
 */
export interface MsgDeleteCollection {
  creator: string;
  id: bigint;
}
export interface MsgDeleteCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgDeleteCollection";
  value: Uint8Array;
}
/**
 * @name MsgDeleteCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDeleteCollection
 */
export interface MsgDeleteCollectionAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgDeleteCollection";
  value: MsgDeleteCollectionAmino;
}
/**
 * @name MsgDeleteCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDeleteCollectionResponse
 */
export interface MsgDeleteCollectionResponse {}
export interface MsgDeleteCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgDeleteCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeleteCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDeleteCollectionResponse
 */
export interface MsgDeleteCollectionResponseAmino {}
export interface MsgDeleteCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgDeleteCollectionResponse";
  value: MsgDeleteCollectionResponseAmino;
}
/**
 * @name MsgAddItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItem
 */
export interface MsgAddItem {
  creator: string;
  collectionId: bigint;
  position: bigint;
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
export interface MsgAddItemProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAddItem";
  value: Uint8Array;
}
/**
 * @name MsgAddItemAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItem
 */
export interface MsgAddItemAmino {
  creator?: string;
  collection_id?: string;
  position?: string;
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
export interface MsgAddItemAminoMsg {
  type: "sparkdream/x/collect/MsgAddItem";
  value: MsgAddItemAmino;
}
/**
 * @name MsgAddItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItemResponse
 */
export interface MsgAddItemResponse {
  id: bigint;
}
export interface MsgAddItemResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAddItemResponse";
  value: Uint8Array;
}
/**
 * @name MsgAddItemResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItemResponse
 */
export interface MsgAddItemResponseAmino {
  id?: string;
}
export interface MsgAddItemResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgAddItemResponse";
  value: MsgAddItemResponseAmino;
}
/**
 * @name MsgAddItems
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItems
 */
export interface MsgAddItems {
  creator: string;
  collectionId: bigint;
  items: AddItemEntry[];
}
export interface MsgAddItemsProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAddItems";
  value: Uint8Array;
}
/**
 * @name MsgAddItemsAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItems
 */
export interface MsgAddItemsAmino {
  creator?: string;
  collection_id?: string;
  items?: AddItemEntryAmino[];
}
export interface MsgAddItemsAminoMsg {
  type: "sparkdream/x/collect/MsgAddItems";
  value: MsgAddItemsAmino;
}
/**
 * @name MsgAddItemsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItemsResponse
 */
export interface MsgAddItemsResponse {
  ids: bigint[];
}
export interface MsgAddItemsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAddItemsResponse";
  value: Uint8Array;
}
/**
 * @name MsgAddItemsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItemsResponse
 */
export interface MsgAddItemsResponseAmino {
  ids?: string[];
}
export interface MsgAddItemsResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgAddItemsResponse";
  value: MsgAddItemsResponseAmino;
}
/**
 * @name MsgUpdateItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateItem
 */
export interface MsgUpdateItem {
  creator: string;
  id: bigint;
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
export interface MsgUpdateItemProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateItem";
  value: Uint8Array;
}
/**
 * @name MsgUpdateItemAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateItem
 */
export interface MsgUpdateItemAmino {
  creator?: string;
  id?: string;
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
export interface MsgUpdateItemAminoMsg {
  type: "sparkdream/x/collect/MsgUpdateItem";
  value: MsgUpdateItemAmino;
}
/**
 * @name MsgUpdateItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateItemResponse
 */
export interface MsgUpdateItemResponse {}
export interface MsgUpdateItemResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateItemResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateItemResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateItemResponse
 */
export interface MsgUpdateItemResponseAmino {}
export interface MsgUpdateItemResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUpdateItemResponse";
  value: MsgUpdateItemResponseAmino;
}
/**
 * @name MsgRemoveItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItem
 */
export interface MsgRemoveItem {
  creator: string;
  id: bigint;
}
export interface MsgRemoveItemProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItem";
  value: Uint8Array;
}
/**
 * @name MsgRemoveItemAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItem
 */
export interface MsgRemoveItemAmino {
  creator?: string;
  id?: string;
}
export interface MsgRemoveItemAminoMsg {
  type: "sparkdream/x/collect/MsgRemoveItem";
  value: MsgRemoveItemAmino;
}
/**
 * @name MsgRemoveItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItemResponse
 */
export interface MsgRemoveItemResponse {}
export interface MsgRemoveItemResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItemResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemoveItemResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItemResponse
 */
export interface MsgRemoveItemResponseAmino {}
export interface MsgRemoveItemResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgRemoveItemResponse";
  value: MsgRemoveItemResponseAmino;
}
/**
 * @name MsgRemoveItems
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItems
 */
export interface MsgRemoveItems {
  creator: string;
  ids: bigint[];
}
export interface MsgRemoveItemsProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItems";
  value: Uint8Array;
}
/**
 * @name MsgRemoveItemsAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItems
 */
export interface MsgRemoveItemsAmino {
  creator?: string;
  ids?: string[];
}
export interface MsgRemoveItemsAminoMsg {
  type: "sparkdream/x/collect/MsgRemoveItems";
  value: MsgRemoveItemsAmino;
}
/**
 * @name MsgRemoveItemsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItemsResponse
 */
export interface MsgRemoveItemsResponse {}
export interface MsgRemoveItemsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItemsResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemoveItemsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItemsResponse
 */
export interface MsgRemoveItemsResponseAmino {}
export interface MsgRemoveItemsResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgRemoveItemsResponse";
  value: MsgRemoveItemsResponseAmino;
}
/**
 * @name MsgReorderItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgReorderItem
 */
export interface MsgReorderItem {
  creator: string;
  id: bigint;
  newPosition: bigint;
}
export interface MsgReorderItemProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgReorderItem";
  value: Uint8Array;
}
/**
 * @name MsgReorderItemAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgReorderItem
 */
export interface MsgReorderItemAmino {
  creator?: string;
  id?: string;
  new_position?: string;
}
export interface MsgReorderItemAminoMsg {
  type: "sparkdream/x/collect/MsgReorderItem";
  value: MsgReorderItemAmino;
}
/**
 * @name MsgReorderItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgReorderItemResponse
 */
export interface MsgReorderItemResponse {}
export interface MsgReorderItemResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgReorderItemResponse";
  value: Uint8Array;
}
/**
 * @name MsgReorderItemResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgReorderItemResponse
 */
export interface MsgReorderItemResponseAmino {}
export interface MsgReorderItemResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgReorderItemResponse";
  value: MsgReorderItemResponseAmino;
}
/**
 * @name MsgAddCollaborator
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddCollaborator
 */
export interface MsgAddCollaborator {
  creator: string;
  collectionId: bigint;
  address: string;
  role: CollaboratorRole;
}
export interface MsgAddCollaboratorProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAddCollaborator";
  value: Uint8Array;
}
/**
 * @name MsgAddCollaboratorAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddCollaborator
 */
export interface MsgAddCollaboratorAmino {
  creator?: string;
  collection_id?: string;
  address?: string;
  role?: CollaboratorRole;
}
export interface MsgAddCollaboratorAminoMsg {
  type: "sparkdream/x/collect/MsgAddCollaborator";
  value: MsgAddCollaboratorAmino;
}
/**
 * @name MsgAddCollaboratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddCollaboratorResponse
 */
export interface MsgAddCollaboratorResponse {}
export interface MsgAddCollaboratorResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAddCollaboratorResponse";
  value: Uint8Array;
}
/**
 * @name MsgAddCollaboratorResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddCollaboratorResponse
 */
export interface MsgAddCollaboratorResponseAmino {}
export interface MsgAddCollaboratorResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgAddCollaboratorResponse";
  value: MsgAddCollaboratorResponseAmino;
}
/**
 * @name MsgRemoveCollaborator
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveCollaborator
 */
export interface MsgRemoveCollaborator {
  creator: string;
  collectionId: bigint;
  address: string;
}
export interface MsgRemoveCollaboratorProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaborator";
  value: Uint8Array;
}
/**
 * @name MsgRemoveCollaboratorAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveCollaborator
 */
export interface MsgRemoveCollaboratorAmino {
  creator?: string;
  collection_id?: string;
  address?: string;
}
export interface MsgRemoveCollaboratorAminoMsg {
  type: "sparkdream/x/collect/MsgRemoveCollaborator";
  value: MsgRemoveCollaboratorAmino;
}
/**
 * @name MsgRemoveCollaboratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveCollaboratorResponse
 */
export interface MsgRemoveCollaboratorResponse {}
export interface MsgRemoveCollaboratorResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaboratorResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemoveCollaboratorResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveCollaboratorResponse
 */
export interface MsgRemoveCollaboratorResponseAmino {}
export interface MsgRemoveCollaboratorResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgRemoveCollaboratorResponse";
  value: MsgRemoveCollaboratorResponseAmino;
}
/**
 * @name MsgUpdateCollaboratorRole
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollaboratorRole
 */
export interface MsgUpdateCollaboratorRole {
  creator: string;
  collectionId: bigint;
  address: string;
  role: CollaboratorRole;
}
export interface MsgUpdateCollaboratorRoleProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole";
  value: Uint8Array;
}
/**
 * @name MsgUpdateCollaboratorRoleAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollaboratorRole
 */
export interface MsgUpdateCollaboratorRoleAmino {
  creator?: string;
  collection_id?: string;
  address?: string;
  role?: CollaboratorRole;
}
export interface MsgUpdateCollaboratorRoleAminoMsg {
  type: "sparkdream/x/collect/MsgUpdateCollaboratorRole";
  value: MsgUpdateCollaboratorRoleAmino;
}
/**
 * @name MsgUpdateCollaboratorRoleResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse
 */
export interface MsgUpdateCollaboratorRoleResponse {}
export interface MsgUpdateCollaboratorRoleResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateCollaboratorRoleResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse
 */
export interface MsgUpdateCollaboratorRoleResponseAmino {}
export interface MsgUpdateCollaboratorRoleResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse";
  value: MsgUpdateCollaboratorRoleResponseAmino;
}
/**
 * @name MsgRateCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRateCollection
 */
export interface MsgRateCollection {
  creator: string;
  collectionId: bigint;
  verdict: CurationVerdict;
  tags: string[];
  comment: string;
}
export interface MsgRateCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRateCollection";
  value: Uint8Array;
}
/**
 * @name MsgRateCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRateCollection
 */
export interface MsgRateCollectionAmino {
  creator?: string;
  collection_id?: string;
  verdict?: CurationVerdict;
  tags?: string[];
  comment?: string;
}
export interface MsgRateCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgRateCollection";
  value: MsgRateCollectionAmino;
}
/**
 * @name MsgRateCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRateCollectionResponse
 */
export interface MsgRateCollectionResponse {
  reviewId: bigint;
}
export interface MsgRateCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRateCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgRateCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRateCollectionResponse
 */
export interface MsgRateCollectionResponseAmino {
  review_id?: string;
}
export interface MsgRateCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgRateCollectionResponse";
  value: MsgRateCollectionResponseAmino;
}
/**
 * @name MsgChallengeReview
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgChallengeReview
 */
export interface MsgChallengeReview {
  creator: string;
  reviewId: bigint;
  reason: string;
}
export interface MsgChallengeReviewProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgChallengeReview";
  value: Uint8Array;
}
/**
 * @name MsgChallengeReviewAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgChallengeReview
 */
export interface MsgChallengeReviewAmino {
  creator?: string;
  review_id?: string;
  reason?: string;
}
export interface MsgChallengeReviewAminoMsg {
  type: "sparkdream/x/collect/MsgChallengeReview";
  value: MsgChallengeReviewAmino;
}
/**
 * @name MsgChallengeReviewResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgChallengeReviewResponse
 */
export interface MsgChallengeReviewResponse {}
export interface MsgChallengeReviewResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgChallengeReviewResponse";
  value: Uint8Array;
}
/**
 * @name MsgChallengeReviewResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgChallengeReviewResponse
 */
export interface MsgChallengeReviewResponseAmino {}
export interface MsgChallengeReviewResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgChallengeReviewResponse";
  value: MsgChallengeReviewResponseAmino;
}
/**
 * @name MsgRequestSponsorship
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRequestSponsorship
 */
export interface MsgRequestSponsorship {
  creator: string;
  collectionId: bigint;
}
export interface MsgRequestSponsorshipProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorship";
  value: Uint8Array;
}
/**
 * @name MsgRequestSponsorshipAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRequestSponsorship
 */
export interface MsgRequestSponsorshipAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgRequestSponsorshipAminoMsg {
  type: "sparkdream/x/collect/MsgRequestSponsorship";
  value: MsgRequestSponsorshipAmino;
}
/**
 * @name MsgRequestSponsorshipResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRequestSponsorshipResponse
 */
export interface MsgRequestSponsorshipResponse {}
export interface MsgRequestSponsorshipResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorshipResponse";
  value: Uint8Array;
}
/**
 * @name MsgRequestSponsorshipResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRequestSponsorshipResponse
 */
export interface MsgRequestSponsorshipResponseAmino {}
export interface MsgRequestSponsorshipResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgRequestSponsorshipResponse";
  value: MsgRequestSponsorshipResponseAmino;
}
/**
 * @name MsgCancelSponsorshipRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCancelSponsorshipRequest
 */
export interface MsgCancelSponsorshipRequest {
  creator: string;
  collectionId: bigint;
}
export interface MsgCancelSponsorshipRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest";
  value: Uint8Array;
}
/**
 * @name MsgCancelSponsorshipRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCancelSponsorshipRequest
 */
export interface MsgCancelSponsorshipRequestAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgCancelSponsorshipRequestAminoMsg {
  type: "sparkdream/x/collect/MsgCancelSponsorshipRequest";
  value: MsgCancelSponsorshipRequestAmino;
}
/**
 * @name MsgCancelSponsorshipRequestResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse
 */
export interface MsgCancelSponsorshipRequestResponse {}
export interface MsgCancelSponsorshipRequestResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelSponsorshipRequestResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse
 */
export interface MsgCancelSponsorshipRequestResponseAmino {}
export interface MsgCancelSponsorshipRequestResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse";
  value: MsgCancelSponsorshipRequestResponseAmino;
}
/**
 * @name MsgSponsorCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSponsorCollection
 */
export interface MsgSponsorCollection {
  creator: string;
  collectionId: bigint;
}
export interface MsgSponsorCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgSponsorCollection";
  value: Uint8Array;
}
/**
 * @name MsgSponsorCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSponsorCollection
 */
export interface MsgSponsorCollectionAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgSponsorCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgSponsorCollection";
  value: MsgSponsorCollectionAmino;
}
/**
 * @name MsgSponsorCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSponsorCollectionResponse
 */
export interface MsgSponsorCollectionResponse {}
export interface MsgSponsorCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgSponsorCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgSponsorCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSponsorCollectionResponse
 */
export interface MsgSponsorCollectionResponseAmino {}
export interface MsgSponsorCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgSponsorCollectionResponse";
  value: MsgSponsorCollectionResponseAmino;
}
/**
 * @name MsgUpdateOperationalParams
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  authority: string;
  operationalParams: CollectOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  authority?: string;
  operational_params: CollectOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/collect/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgUpvoteContent defines the MsgUpvoteContent message.
 * @name MsgUpvoteContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpvoteContent
 */
export interface MsgUpvoteContent {
  creator: string;
  targetId: bigint;
  targetType: FlagTargetType;
}
export interface MsgUpvoteContentProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpvoteContent";
  value: Uint8Array;
}
/**
 * MsgUpvoteContent defines the MsgUpvoteContent message.
 * @name MsgUpvoteContentAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpvoteContent
 */
export interface MsgUpvoteContentAmino {
  creator?: string;
  target_id?: string;
  target_type?: FlagTargetType;
}
export interface MsgUpvoteContentAminoMsg {
  type: "sparkdream/x/collect/MsgUpvoteContent";
  value: MsgUpvoteContentAmino;
}
/**
 * MsgUpvoteContentResponse defines the MsgUpvoteContentResponse message.
 * @name MsgUpvoteContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpvoteContentResponse
 */
export interface MsgUpvoteContentResponse {}
export interface MsgUpvoteContentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUpvoteContentResponse";
  value: Uint8Array;
}
/**
 * MsgUpvoteContentResponse defines the MsgUpvoteContentResponse message.
 * @name MsgUpvoteContentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpvoteContentResponse
 */
export interface MsgUpvoteContentResponseAmino {}
export interface MsgUpvoteContentResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUpvoteContentResponse";
  value: MsgUpvoteContentResponseAmino;
}
/**
 * MsgDownvoteContent defines the MsgDownvoteContent message.
 * @name MsgDownvoteContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDownvoteContent
 */
export interface MsgDownvoteContent {
  creator: string;
  targetId: bigint;
  targetType: FlagTargetType;
}
export interface MsgDownvoteContentProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgDownvoteContent";
  value: Uint8Array;
}
/**
 * MsgDownvoteContent defines the MsgDownvoteContent message.
 * @name MsgDownvoteContentAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDownvoteContent
 */
export interface MsgDownvoteContentAmino {
  creator?: string;
  target_id?: string;
  target_type?: FlagTargetType;
}
export interface MsgDownvoteContentAminoMsg {
  type: "sparkdream/x/collect/MsgDownvoteContent";
  value: MsgDownvoteContentAmino;
}
/**
 * MsgDownvoteContentResponse defines the MsgDownvoteContentResponse message.
 * @name MsgDownvoteContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDownvoteContentResponse
 */
export interface MsgDownvoteContentResponse {}
export interface MsgDownvoteContentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgDownvoteContentResponse";
  value: Uint8Array;
}
/**
 * MsgDownvoteContentResponse defines the MsgDownvoteContentResponse message.
 * @name MsgDownvoteContentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDownvoteContentResponse
 */
export interface MsgDownvoteContentResponseAmino {}
export interface MsgDownvoteContentResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgDownvoteContentResponse";
  value: MsgDownvoteContentResponseAmino;
}
/**
 * MsgFlagContent defines the MsgFlagContent message.
 * @name MsgFlagContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgFlagContent
 */
export interface MsgFlagContent {
  creator: string;
  targetId: bigint;
  targetType: FlagTargetType;
  reason: ModerationReason;
  reasonText: string;
}
export interface MsgFlagContentProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgFlagContent";
  value: Uint8Array;
}
/**
 * MsgFlagContent defines the MsgFlagContent message.
 * @name MsgFlagContentAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgFlagContent
 */
export interface MsgFlagContentAmino {
  creator?: string;
  target_id?: string;
  target_type?: FlagTargetType;
  reason?: ModerationReason;
  reason_text?: string;
}
export interface MsgFlagContentAminoMsg {
  type: "sparkdream/x/collect/MsgFlagContent";
  value: MsgFlagContentAmino;
}
/**
 * MsgFlagContentResponse defines the MsgFlagContentResponse message.
 * @name MsgFlagContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgFlagContentResponse
 */
export interface MsgFlagContentResponse {}
export interface MsgFlagContentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgFlagContentResponse";
  value: Uint8Array;
}
/**
 * MsgFlagContentResponse defines the MsgFlagContentResponse message.
 * @name MsgFlagContentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgFlagContentResponse
 */
export interface MsgFlagContentResponseAmino {}
export interface MsgFlagContentResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgFlagContentResponse";
  value: MsgFlagContentResponseAmino;
}
/**
 * MsgHideContent defines the MsgHideContent message.
 * @name MsgHideContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgHideContent
 */
export interface MsgHideContent {
  creator: string;
  targetId: bigint;
  targetType: FlagTargetType;
  reasonCode: ModerationReason;
  reasonText: string;
}
export interface MsgHideContentProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgHideContent";
  value: Uint8Array;
}
/**
 * MsgHideContent defines the MsgHideContent message.
 * @name MsgHideContentAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgHideContent
 */
export interface MsgHideContentAmino {
  creator?: string;
  target_id?: string;
  target_type?: FlagTargetType;
  reason_code?: ModerationReason;
  reason_text?: string;
}
export interface MsgHideContentAminoMsg {
  type: "sparkdream/x/collect/MsgHideContent";
  value: MsgHideContentAmino;
}
/**
 * MsgHideContentResponse defines the MsgHideContentResponse message.
 * @name MsgHideContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgHideContentResponse
 */
export interface MsgHideContentResponse {
  hideRecordId: bigint;
}
export interface MsgHideContentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgHideContentResponse";
  value: Uint8Array;
}
/**
 * MsgHideContentResponse defines the MsgHideContentResponse message.
 * @name MsgHideContentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgHideContentResponse
 */
export interface MsgHideContentResponseAmino {
  hide_record_id?: string;
}
export interface MsgHideContentResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgHideContentResponse";
  value: MsgHideContentResponseAmino;
}
/**
 * MsgAppealHide defines the MsgAppealHide message.
 * @name MsgAppealHide
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAppealHide
 */
export interface MsgAppealHide {
  creator: string;
  hideRecordId: bigint;
}
export interface MsgAppealHideProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAppealHide";
  value: Uint8Array;
}
/**
 * MsgAppealHide defines the MsgAppealHide message.
 * @name MsgAppealHideAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAppealHide
 */
export interface MsgAppealHideAmino {
  creator?: string;
  hide_record_id?: string;
}
export interface MsgAppealHideAminoMsg {
  type: "sparkdream/x/collect/MsgAppealHide";
  value: MsgAppealHideAmino;
}
/**
 * MsgAppealHideResponse defines the MsgAppealHideResponse message.
 * @name MsgAppealHideResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAppealHideResponse
 */
export interface MsgAppealHideResponse {}
export interface MsgAppealHideResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgAppealHideResponse";
  value: Uint8Array;
}
/**
 * MsgAppealHideResponse defines the MsgAppealHideResponse message.
 * @name MsgAppealHideResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAppealHideResponse
 */
export interface MsgAppealHideResponseAmino {}
export interface MsgAppealHideResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgAppealHideResponse";
  value: MsgAppealHideResponseAmino;
}
/**
 * MsgEndorseCollection defines the MsgEndorseCollection message.
 * @name MsgEndorseCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgEndorseCollection
 */
export interface MsgEndorseCollection {
  creator: string;
  collectionId: bigint;
}
export interface MsgEndorseCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgEndorseCollection";
  value: Uint8Array;
}
/**
 * MsgEndorseCollection defines the MsgEndorseCollection message.
 * @name MsgEndorseCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgEndorseCollection
 */
export interface MsgEndorseCollectionAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgEndorseCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgEndorseCollection";
  value: MsgEndorseCollectionAmino;
}
/**
 * MsgEndorseCollectionResponse defines the MsgEndorseCollectionResponse message.
 * @name MsgEndorseCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgEndorseCollectionResponse
 */
export interface MsgEndorseCollectionResponse {}
export interface MsgEndorseCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgEndorseCollectionResponse";
  value: Uint8Array;
}
/**
 * MsgEndorseCollectionResponse defines the MsgEndorseCollectionResponse message.
 * @name MsgEndorseCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgEndorseCollectionResponse
 */
export interface MsgEndorseCollectionResponseAmino {}
export interface MsgEndorseCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgEndorseCollectionResponse";
  value: MsgEndorseCollectionResponseAmino;
}
/**
 * MsgSetSeekingEndorsement defines the MsgSetSeekingEndorsement message.
 * @name MsgSetSeekingEndorsement
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSetSeekingEndorsement
 */
export interface MsgSetSeekingEndorsement {
  creator: string;
  collectionId: bigint;
  seeking: boolean;
}
export interface MsgSetSeekingEndorsementProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsement";
  value: Uint8Array;
}
/**
 * MsgSetSeekingEndorsement defines the MsgSetSeekingEndorsement message.
 * @name MsgSetSeekingEndorsementAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSetSeekingEndorsement
 */
export interface MsgSetSeekingEndorsementAmino {
  creator?: string;
  collection_id?: string;
  seeking?: boolean;
}
export interface MsgSetSeekingEndorsementAminoMsg {
  type: "sparkdream/x/collect/MsgSetSeekingEndorsement";
  value: MsgSetSeekingEndorsementAmino;
}
/**
 * MsgSetSeekingEndorsementResponse defines the MsgSetSeekingEndorsementResponse message.
 * @name MsgSetSeekingEndorsementResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSetSeekingEndorsementResponse
 */
export interface MsgSetSeekingEndorsementResponse {}
export interface MsgSetSeekingEndorsementResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsementResponse";
  value: Uint8Array;
}
/**
 * MsgSetSeekingEndorsementResponse defines the MsgSetSeekingEndorsementResponse message.
 * @name MsgSetSeekingEndorsementResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSetSeekingEndorsementResponse
 */
export interface MsgSetSeekingEndorsementResponseAmino {}
export interface MsgSetSeekingEndorsementResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgSetSeekingEndorsementResponse";
  value: MsgSetSeekingEndorsementResponseAmino;
}
/**
 * MsgPinCollection sets the display-only pinned marker on a permanent
 * collection. Rejects ephemeral targets with ErrCannotPinEphemeral —
 * callers must promote via MsgMakeCollectionPermanent first.
 * @name MsgPinCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgPinCollection
 */
export interface MsgPinCollection {
  creator: string;
  collectionId: bigint;
}
export interface MsgPinCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgPinCollection";
  value: Uint8Array;
}
/**
 * MsgPinCollection sets the display-only pinned marker on a permanent
 * collection. Rejects ephemeral targets with ErrCannotPinEphemeral —
 * callers must promote via MsgMakeCollectionPermanent first.
 * @name MsgPinCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgPinCollection
 */
export interface MsgPinCollectionAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgPinCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgPinCollection";
  value: MsgPinCollectionAmino;
}
/**
 * @name MsgPinCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgPinCollectionResponse
 */
export interface MsgPinCollectionResponse {}
export interface MsgPinCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgPinCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgPinCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgPinCollectionResponse
 */
export interface MsgPinCollectionResponseAmino {}
export interface MsgPinCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgPinCollectionResponse";
  value: MsgPinCollectionResponseAmino;
}
/**
 * MsgUnpinCollection clears the display-only pinned marker. Idempotent on
 * already-unpinned collections.
 * @name MsgUnpinCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUnpinCollection
 */
export interface MsgUnpinCollection {
  creator: string;
  collectionId: bigint;
}
export interface MsgUnpinCollectionProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUnpinCollection";
  value: Uint8Array;
}
/**
 * MsgUnpinCollection clears the display-only pinned marker. Idempotent on
 * already-unpinned collections.
 * @name MsgUnpinCollectionAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUnpinCollection
 */
export interface MsgUnpinCollectionAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgUnpinCollectionAminoMsg {
  type: "sparkdream/x/collect/MsgUnpinCollection";
  value: MsgUnpinCollectionAmino;
}
/**
 * @name MsgUnpinCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUnpinCollectionResponse
 */
export interface MsgUnpinCollectionResponse {}
export interface MsgUnpinCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgUnpinCollectionResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnpinCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUnpinCollectionResponse
 */
export interface MsgUnpinCollectionResponseAmino {}
export interface MsgUnpinCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgUnpinCollectionResponse";
  value: MsgUnpinCollectionResponseAmino;
}
/**
 * MsgMakeCollectionPermanent promotes an ephemeral collection to permanent
 * by burning the escrowed collection + item deposits. Gated on
 * params.make_permanent_min_trust_level. Idempotent on already-permanent
 * collections.
 * @name MsgMakeCollectionPermanent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgMakeCollectionPermanent
 */
export interface MsgMakeCollectionPermanent {
  creator: string;
  collectionId: bigint;
}
export interface MsgMakeCollectionPermanentProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanent";
  value: Uint8Array;
}
/**
 * MsgMakeCollectionPermanent promotes an ephemeral collection to permanent
 * by burning the escrowed collection + item deposits. Gated on
 * params.make_permanent_min_trust_level. Idempotent on already-permanent
 * collections.
 * @name MsgMakeCollectionPermanentAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgMakeCollectionPermanent
 */
export interface MsgMakeCollectionPermanentAmino {
  creator?: string;
  collection_id?: string;
}
export interface MsgMakeCollectionPermanentAminoMsg {
  type: "sparkdream/x/collect/MsgMakeCollectionPermanent";
  value: MsgMakeCollectionPermanentAmino;
}
/**
 * @name MsgMakeCollectionPermanentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgMakeCollectionPermanentResponse
 */
export interface MsgMakeCollectionPermanentResponse {}
export interface MsgMakeCollectionPermanentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanentResponse";
  value: Uint8Array;
}
/**
 * @name MsgMakeCollectionPermanentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgMakeCollectionPermanentResponse
 */
export interface MsgMakeCollectionPermanentResponseAmino {}
export interface MsgMakeCollectionPermanentResponseAminoMsg {
  type: "/sparkdream.collect.v1.MsgMakeCollectionPermanentResponse";
  value: MsgMakeCollectionPermanentResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/collect/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCollection(): MsgCreateCollection {
  return {
    creator: "",
    type: 0,
    visibility: 0,
    encrypted: false,
    expiresAt: BigInt(0),
    name: "",
    description: "",
    coverUri: "",
    tags: [],
    encryptedData: new Uint8Array(),
    authorBond: undefined,
    initiativeId: BigInt(0)
  };
}
/**
 * @name MsgCreateCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCreateCollection
 */
export const MsgCreateCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgCreateCollection",
  aminoType: "sparkdream/x/collect/MsgCreateCollection",
  encode(message: MsgCreateCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.visibility !== 0) {
      writer.uint32(24).int32(message.visibility);
    }
    if (message.encrypted === true) {
      writer.uint32(32).bool(message.encrypted);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(40).int64(message.expiresAt);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.coverUri !== "") {
      writer.uint32(66).string(message.coverUri);
    }
    for (const v of message.tags) {
      writer.uint32(74).string(v!);
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(82).bytes(message.encryptedData);
    }
    if (message.authorBond !== undefined) {
      writer.uint32(90).string(message.authorBond);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(96).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.visibility = reader.int32() as any;
          break;
        case 4:
          message.encrypted = reader.bool();
          break;
        case 5:
          message.expiresAt = reader.int64();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.coverUri = reader.string();
          break;
        case 9:
          message.tags.push(reader.string());
          break;
        case 10:
          message.encryptedData = reader.bytes();
          break;
        case 11:
          message.authorBond = reader.string();
          break;
        case 12:
          message.initiativeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCollection>): MsgCreateCollection {
    const message = createBaseMsgCreateCollection();
    message.creator = object.creator ?? "";
    message.type = object.type ?? 0;
    message.visibility = object.visibility ?? 0;
    message.encrypted = object.encrypted ?? false;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.coverUri = object.coverUri ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.encryptedData = object.encryptedData ?? new Uint8Array();
    message.authorBond = object.authorBond ?? undefined;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCollectionAmino): MsgCreateCollection {
    const message = createBaseMsgCreateCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
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
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
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
    if (object.author_bond !== undefined && object.author_bond !== null) {
      message.authorBond = object.author_bond;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: MsgCreateCollection): MsgCreateCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.visibility = message.visibility === 0 ? undefined : message.visibility;
    obj.encrypted = message.encrypted === false ? undefined : message.encrypted;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.cover_uri = message.coverUri === "" ? undefined : message.coverUri;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
    obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCollectionAminoMsg): MsgCreateCollection {
    return MsgCreateCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateCollection): MsgCreateCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgCreateCollection",
      value: MsgCreateCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateCollectionProtoMsg): MsgCreateCollection {
    return MsgCreateCollection.decode(message.value);
  },
  toProto(message: MsgCreateCollection): Uint8Array {
    return MsgCreateCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCollection): MsgCreateCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgCreateCollection",
      value: MsgCreateCollection.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCollectionResponse(): MsgCreateCollectionResponse {
  return {
    id: BigInt(0)
  };
}
/**
 * @name MsgCreateCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCreateCollectionResponse
 */
export const MsgCreateCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgCreateCollectionResponse",
  encode(message: MsgCreateCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCollectionResponse>): MsgCreateCollectionResponse {
    const message = createBaseMsgCreateCollectionResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCollectionResponseAmino): MsgCreateCollectionResponse {
    const message = createBaseMsgCreateCollectionResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateCollectionResponse): MsgCreateCollectionResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCollectionResponseAminoMsg): MsgCreateCollectionResponse {
    return MsgCreateCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCollectionResponseProtoMsg): MsgCreateCollectionResponse {
    return MsgCreateCollectionResponse.decode(message.value);
  },
  toProto(message: MsgCreateCollectionResponse): Uint8Array {
    return MsgCreateCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCollectionResponse): MsgCreateCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgCreateCollectionResponse",
      value: MsgCreateCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCollection(): MsgUpdateCollection {
  return {
    creator: "",
    id: BigInt(0),
    type: 0,
    expiresAt: BigInt(0),
    name: "",
    description: "",
    coverUri: "",
    tags: [],
    encryptedData: new Uint8Array(),
    communityFeedbackEnabled: false,
    updateCommunityFeedback: false
  };
}
/**
 * @name MsgUpdateCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollection
 */
export const MsgUpdateCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollection",
  aminoType: "sparkdream/x/collect/MsgUpdateCollection",
  encode(message: MsgUpdateCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(32).int64(message.expiresAt);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.coverUri !== "") {
      writer.uint32(58).string(message.coverUri);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(74).bytes(message.encryptedData);
    }
    if (message.communityFeedbackEnabled === true) {
      writer.uint32(80).bool(message.communityFeedbackEnabled);
    }
    if (message.updateCommunityFeedback === true) {
      writer.uint32(88).bool(message.updateCommunityFeedback);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.expiresAt = reader.int64();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.coverUri = reader.string();
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        case 9:
          message.encryptedData = reader.bytes();
          break;
        case 10:
          message.communityFeedbackEnabled = reader.bool();
          break;
        case 11:
          message.updateCommunityFeedback = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateCollection>): MsgUpdateCollection {
    const message = createBaseMsgUpdateCollection();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.type = object.type ?? 0;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.coverUri = object.coverUri ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.encryptedData = object.encryptedData ?? new Uint8Array();
    message.communityFeedbackEnabled = object.communityFeedbackEnabled ?? false;
    message.updateCommunityFeedback = object.updateCommunityFeedback ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateCollectionAmino): MsgUpdateCollection {
    const message = createBaseMsgUpdateCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
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
    if (object.community_feedback_enabled !== undefined && object.community_feedback_enabled !== null) {
      message.communityFeedbackEnabled = object.community_feedback_enabled;
    }
    if (object.update_community_feedback !== undefined && object.update_community_feedback !== null) {
      message.updateCommunityFeedback = object.update_community_feedback;
    }
    return message;
  },
  toAmino(message: MsgUpdateCollection): MsgUpdateCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.cover_uri = message.coverUri === "" ? undefined : message.coverUri;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
    obj.community_feedback_enabled = message.communityFeedbackEnabled === false ? undefined : message.communityFeedbackEnabled;
    obj.update_community_feedback = message.updateCommunityFeedback === false ? undefined : message.updateCommunityFeedback;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCollectionAminoMsg): MsgUpdateCollection {
    return MsgUpdateCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateCollection): MsgUpdateCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUpdateCollection",
      value: MsgUpdateCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateCollectionProtoMsg): MsgUpdateCollection {
    return MsgUpdateCollection.decode(message.value);
  },
  toProto(message: MsgUpdateCollection): Uint8Array {
    return MsgUpdateCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCollection): MsgUpdateCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateCollection",
      value: MsgUpdateCollection.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCollectionResponse(): MsgUpdateCollectionResponse {
  return {};
}
/**
 * @name MsgUpdateCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollectionResponse
 */
export const MsgUpdateCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollectionResponse",
  encode(_: MsgUpdateCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateCollectionResponse>): MsgUpdateCollectionResponse {
    const message = createBaseMsgUpdateCollectionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateCollectionResponseAmino): MsgUpdateCollectionResponse {
    const message = createBaseMsgUpdateCollectionResponse();
    return message;
  },
  toAmino(_: MsgUpdateCollectionResponse): MsgUpdateCollectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCollectionResponseAminoMsg): MsgUpdateCollectionResponse {
    return MsgUpdateCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCollectionResponseProtoMsg): MsgUpdateCollectionResponse {
    return MsgUpdateCollectionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateCollectionResponse): Uint8Array {
    return MsgUpdateCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCollectionResponse): MsgUpdateCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateCollectionResponse",
      value: MsgUpdateCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteCollection(): MsgDeleteCollection {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * @name MsgDeleteCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDeleteCollection
 */
export const MsgDeleteCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgDeleteCollection",
  aminoType: "sparkdream/x/collect/MsgDeleteCollection",
  encode(message: MsgDeleteCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteCollection>): MsgDeleteCollection {
    const message = createBaseMsgDeleteCollection();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteCollectionAmino): MsgDeleteCollection {
    const message = createBaseMsgDeleteCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteCollection): MsgDeleteCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteCollectionAminoMsg): MsgDeleteCollection {
    return MsgDeleteCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteCollection): MsgDeleteCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgDeleteCollection",
      value: MsgDeleteCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteCollectionProtoMsg): MsgDeleteCollection {
    return MsgDeleteCollection.decode(message.value);
  },
  toProto(message: MsgDeleteCollection): Uint8Array {
    return MsgDeleteCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteCollection): MsgDeleteCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgDeleteCollection",
      value: MsgDeleteCollection.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteCollectionResponse(): MsgDeleteCollectionResponse {
  return {};
}
/**
 * @name MsgDeleteCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDeleteCollectionResponse
 */
export const MsgDeleteCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgDeleteCollectionResponse",
  encode(_: MsgDeleteCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDeleteCollectionResponse>): MsgDeleteCollectionResponse {
    const message = createBaseMsgDeleteCollectionResponse();
    return message;
  },
  fromAmino(_: MsgDeleteCollectionResponseAmino): MsgDeleteCollectionResponse {
    const message = createBaseMsgDeleteCollectionResponse();
    return message;
  },
  toAmino(_: MsgDeleteCollectionResponse): MsgDeleteCollectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteCollectionResponseAminoMsg): MsgDeleteCollectionResponse {
    return MsgDeleteCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteCollectionResponseProtoMsg): MsgDeleteCollectionResponse {
    return MsgDeleteCollectionResponse.decode(message.value);
  },
  toProto(message: MsgDeleteCollectionResponse): Uint8Array {
    return MsgDeleteCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteCollectionResponse): MsgDeleteCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgDeleteCollectionResponse",
      value: MsgDeleteCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddItem(): MsgAddItem {
  return {
    creator: "",
    collectionId: BigInt(0),
    position: BigInt(0),
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
 * @name MsgAddItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItem
 */
export const MsgAddItem = {
  typeUrl: "/sparkdream.collect.v1.MsgAddItem",
  aminoType: "sparkdream/x/collect/MsgAddItem",
  encode(message: MsgAddItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.position !== BigInt(0)) {
      writer.uint32(24).uint64(message.position);
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.position = reader.uint64();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddItem>): MsgAddItem {
    const message = createBaseMsgAddItem();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.position = object.position !== undefined && object.position !== null ? BigInt(object.position.toString()) : BigInt(0);
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
  fromAmino(object: MsgAddItemAmino): MsgAddItem {
    const message = createBaseMsgAddItem();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = BigInt(object.position);
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
    return message;
  },
  toAmino(message: MsgAddItem): MsgAddItemAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.position = message.position !== BigInt(0) ? message.position?.toString() : undefined;
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
  fromAminoMsg(object: MsgAddItemAminoMsg): MsgAddItem {
    return MsgAddItem.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddItem): MsgAddItemAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgAddItem",
      value: MsgAddItem.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddItemProtoMsg): MsgAddItem {
    return MsgAddItem.decode(message.value);
  },
  toProto(message: MsgAddItem): Uint8Array {
    return MsgAddItem.encode(message).finish();
  },
  toProtoMsg(message: MsgAddItem): MsgAddItemProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAddItem",
      value: MsgAddItem.encode(message).finish()
    };
  }
};
function createBaseMsgAddItemResponse(): MsgAddItemResponse {
  return {
    id: BigInt(0)
  };
}
/**
 * @name MsgAddItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItemResponse
 */
export const MsgAddItemResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgAddItemResponse",
  encode(message: MsgAddItemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddItemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddItemResponse>): MsgAddItemResponse {
    const message = createBaseMsgAddItemResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddItemResponseAmino): MsgAddItemResponse {
    const message = createBaseMsgAddItemResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgAddItemResponse): MsgAddItemResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddItemResponseAminoMsg): MsgAddItemResponse {
    return MsgAddItemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddItemResponseProtoMsg): MsgAddItemResponse {
    return MsgAddItemResponse.decode(message.value);
  },
  toProto(message: MsgAddItemResponse): Uint8Array {
    return MsgAddItemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddItemResponse): MsgAddItemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAddItemResponse",
      value: MsgAddItemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddItems(): MsgAddItems {
  return {
    creator: "",
    collectionId: BigInt(0),
    items: []
  };
}
/**
 * @name MsgAddItems
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItems
 */
export const MsgAddItems = {
  typeUrl: "/sparkdream.collect.v1.MsgAddItems",
  aminoType: "sparkdream/x/collect/MsgAddItems",
  encode(message: MsgAddItems, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    for (const v of message.items) {
      AddItemEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddItems {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.items.push(AddItemEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddItems>): MsgAddItems {
    const message = createBaseMsgAddItems();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.items = object.items?.map(e => AddItemEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddItemsAmino): MsgAddItems {
    const message = createBaseMsgAddItems();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    message.items = object.items?.map(e => AddItemEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddItems): MsgAddItemsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    if (message.items) {
      obj.items = message.items.map(e => e ? AddItemEntry.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddItemsAminoMsg): MsgAddItems {
    return MsgAddItems.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddItems): MsgAddItemsAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgAddItems",
      value: MsgAddItems.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddItemsProtoMsg): MsgAddItems {
    return MsgAddItems.decode(message.value);
  },
  toProto(message: MsgAddItems): Uint8Array {
    return MsgAddItems.encode(message).finish();
  },
  toProtoMsg(message: MsgAddItems): MsgAddItemsProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAddItems",
      value: MsgAddItems.encode(message).finish()
    };
  }
};
function createBaseMsgAddItemsResponse(): MsgAddItemsResponse {
  return {
    ids: []
  };
}
/**
 * @name MsgAddItemsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddItemsResponse
 */
export const MsgAddItemsResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgAddItemsResponse",
  encode(message: MsgAddItemsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddItemsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddItemsResponse>): MsgAddItemsResponse {
    const message = createBaseMsgAddItemsResponse();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgAddItemsResponseAmino): MsgAddItemsResponse {
    const message = createBaseMsgAddItemsResponse();
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgAddItemsResponse): MsgAddItemsResponseAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddItemsResponseAminoMsg): MsgAddItemsResponse {
    return MsgAddItemsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddItemsResponseProtoMsg): MsgAddItemsResponse {
    return MsgAddItemsResponse.decode(message.value);
  },
  toProto(message: MsgAddItemsResponse): Uint8Array {
    return MsgAddItemsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddItemsResponse): MsgAddItemsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAddItemsResponse",
      value: MsgAddItemsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateItem(): MsgUpdateItem {
  return {
    creator: "",
    id: BigInt(0),
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
 * @name MsgUpdateItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateItem
 */
export const MsgUpdateItem = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateItem",
  aminoType: "sparkdream/x/collect/MsgUpdateItem",
  encode(message: MsgUpdateItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.imageUri !== "") {
      writer.uint32(42).string(message.imageUri);
    }
    if (message.referenceType !== 0) {
      writer.uint32(48).int32(message.referenceType);
    }
    if (message.nft !== undefined) {
      NftReference.encode(message.nft, writer.uint32(58).fork()).ldelim();
    }
    if (message.link !== undefined) {
      LinkReference.encode(message.link, writer.uint32(66).fork()).ldelim();
    }
    if (message.onChain !== undefined) {
      OnChainReference.encode(message.onChain, writer.uint32(74).fork()).ldelim();
    }
    if (message.custom !== undefined) {
      CustomReference.encode(message.custom, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.attributes) {
      KeyValuePair.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.encryptedData.length !== 0) {
      writer.uint32(98).bytes(message.encryptedData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.imageUri = reader.string();
          break;
        case 6:
          message.referenceType = reader.int32() as any;
          break;
        case 7:
          message.nft = NftReference.decode(reader, reader.uint32());
          break;
        case 8:
          message.link = LinkReference.decode(reader, reader.uint32());
          break;
        case 9:
          message.onChain = OnChainReference.decode(reader, reader.uint32());
          break;
        case 10:
          message.custom = CustomReference.decode(reader, reader.uint32());
          break;
        case 11:
          message.attributes.push(KeyValuePair.decode(reader, reader.uint32()));
          break;
        case 12:
          message.encryptedData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateItem>): MsgUpdateItem {
    const message = createBaseMsgUpdateItem();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
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
  fromAmino(object: MsgUpdateItemAmino): MsgUpdateItem {
    const message = createBaseMsgUpdateItem();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
    return message;
  },
  toAmino(message: MsgUpdateItem): MsgUpdateItemAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
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
  fromAminoMsg(object: MsgUpdateItemAminoMsg): MsgUpdateItem {
    return MsgUpdateItem.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateItem): MsgUpdateItemAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUpdateItem",
      value: MsgUpdateItem.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateItemProtoMsg): MsgUpdateItem {
    return MsgUpdateItem.decode(message.value);
  },
  toProto(message: MsgUpdateItem): Uint8Array {
    return MsgUpdateItem.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateItem): MsgUpdateItemProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateItem",
      value: MsgUpdateItem.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateItemResponse(): MsgUpdateItemResponse {
  return {};
}
/**
 * @name MsgUpdateItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateItemResponse
 */
export const MsgUpdateItemResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateItemResponse",
  encode(_: MsgUpdateItemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateItemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateItemResponse>): MsgUpdateItemResponse {
    const message = createBaseMsgUpdateItemResponse();
    return message;
  },
  fromAmino(_: MsgUpdateItemResponseAmino): MsgUpdateItemResponse {
    const message = createBaseMsgUpdateItemResponse();
    return message;
  },
  toAmino(_: MsgUpdateItemResponse): MsgUpdateItemResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateItemResponseAminoMsg): MsgUpdateItemResponse {
    return MsgUpdateItemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateItemResponseProtoMsg): MsgUpdateItemResponse {
    return MsgUpdateItemResponse.decode(message.value);
  },
  toProto(message: MsgUpdateItemResponse): Uint8Array {
    return MsgUpdateItemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateItemResponse): MsgUpdateItemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateItemResponse",
      value: MsgUpdateItemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveItem(): MsgRemoveItem {
  return {
    creator: "",
    id: BigInt(0)
  };
}
/**
 * @name MsgRemoveItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItem
 */
export const MsgRemoveItem = {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItem",
  aminoType: "sparkdream/x/collect/MsgRemoveItem",
  encode(message: MsgRemoveItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveItem>): MsgRemoveItem {
    const message = createBaseMsgRemoveItem();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveItemAmino): MsgRemoveItem {
    const message = createBaseMsgRemoveItem();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgRemoveItem): MsgRemoveItemAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveItemAminoMsg): MsgRemoveItem {
    return MsgRemoveItem.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveItem): MsgRemoveItemAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgRemoveItem",
      value: MsgRemoveItem.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveItemProtoMsg): MsgRemoveItem {
    return MsgRemoveItem.decode(message.value);
  },
  toProto(message: MsgRemoveItem): Uint8Array {
    return MsgRemoveItem.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveItem): MsgRemoveItemProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRemoveItem",
      value: MsgRemoveItem.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveItemResponse(): MsgRemoveItemResponse {
  return {};
}
/**
 * @name MsgRemoveItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItemResponse
 */
export const MsgRemoveItemResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItemResponse",
  encode(_: MsgRemoveItemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveItemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRemoveItemResponse>): MsgRemoveItemResponse {
    const message = createBaseMsgRemoveItemResponse();
    return message;
  },
  fromAmino(_: MsgRemoveItemResponseAmino): MsgRemoveItemResponse {
    const message = createBaseMsgRemoveItemResponse();
    return message;
  },
  toAmino(_: MsgRemoveItemResponse): MsgRemoveItemResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveItemResponseAminoMsg): MsgRemoveItemResponse {
    return MsgRemoveItemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveItemResponseProtoMsg): MsgRemoveItemResponse {
    return MsgRemoveItemResponse.decode(message.value);
  },
  toProto(message: MsgRemoveItemResponse): Uint8Array {
    return MsgRemoveItemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveItemResponse): MsgRemoveItemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRemoveItemResponse",
      value: MsgRemoveItemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveItems(): MsgRemoveItems {
  return {
    creator: "",
    ids: []
  };
}
/**
 * @name MsgRemoveItems
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItems
 */
export const MsgRemoveItems = {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItems",
  aminoType: "sparkdream/x/collect/MsgRemoveItems",
  encode(message: MsgRemoveItems, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveItems {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveItems>): MsgRemoveItems {
    const message = createBaseMsgRemoveItems();
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRemoveItemsAmino): MsgRemoveItems {
    const message = createBaseMsgRemoveItems();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgRemoveItems): MsgRemoveItemsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemoveItemsAminoMsg): MsgRemoveItems {
    return MsgRemoveItems.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveItems): MsgRemoveItemsAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgRemoveItems",
      value: MsgRemoveItems.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveItemsProtoMsg): MsgRemoveItems {
    return MsgRemoveItems.decode(message.value);
  },
  toProto(message: MsgRemoveItems): Uint8Array {
    return MsgRemoveItems.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveItems): MsgRemoveItemsProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRemoveItems",
      value: MsgRemoveItems.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveItemsResponse(): MsgRemoveItemsResponse {
  return {};
}
/**
 * @name MsgRemoveItemsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveItemsResponse
 */
export const MsgRemoveItemsResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveItemsResponse",
  encode(_: MsgRemoveItemsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveItemsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRemoveItemsResponse>): MsgRemoveItemsResponse {
    const message = createBaseMsgRemoveItemsResponse();
    return message;
  },
  fromAmino(_: MsgRemoveItemsResponseAmino): MsgRemoveItemsResponse {
    const message = createBaseMsgRemoveItemsResponse();
    return message;
  },
  toAmino(_: MsgRemoveItemsResponse): MsgRemoveItemsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveItemsResponseAminoMsg): MsgRemoveItemsResponse {
    return MsgRemoveItemsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveItemsResponseProtoMsg): MsgRemoveItemsResponse {
    return MsgRemoveItemsResponse.decode(message.value);
  },
  toProto(message: MsgRemoveItemsResponse): Uint8Array {
    return MsgRemoveItemsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveItemsResponse): MsgRemoveItemsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRemoveItemsResponse",
      value: MsgRemoveItemsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReorderItem(): MsgReorderItem {
  return {
    creator: "",
    id: BigInt(0),
    newPosition: BigInt(0)
  };
}
/**
 * @name MsgReorderItem
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgReorderItem
 */
export const MsgReorderItem = {
  typeUrl: "/sparkdream.collect.v1.MsgReorderItem",
  aminoType: "sparkdream/x/collect/MsgReorderItem",
  encode(message: MsgReorderItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.newPosition !== BigInt(0)) {
      writer.uint32(24).uint64(message.newPosition);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReorderItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReorderItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.newPosition = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReorderItem>): MsgReorderItem {
    const message = createBaseMsgReorderItem();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.newPosition = object.newPosition !== undefined && object.newPosition !== null ? BigInt(object.newPosition.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgReorderItemAmino): MsgReorderItem {
    const message = createBaseMsgReorderItem();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.new_position !== undefined && object.new_position !== null) {
      message.newPosition = BigInt(object.new_position);
    }
    return message;
  },
  toAmino(message: MsgReorderItem): MsgReorderItemAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.new_position = message.newPosition !== BigInt(0) ? message.newPosition?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgReorderItemAminoMsg): MsgReorderItem {
    return MsgReorderItem.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReorderItem): MsgReorderItemAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgReorderItem",
      value: MsgReorderItem.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReorderItemProtoMsg): MsgReorderItem {
    return MsgReorderItem.decode(message.value);
  },
  toProto(message: MsgReorderItem): Uint8Array {
    return MsgReorderItem.encode(message).finish();
  },
  toProtoMsg(message: MsgReorderItem): MsgReorderItemProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgReorderItem",
      value: MsgReorderItem.encode(message).finish()
    };
  }
};
function createBaseMsgReorderItemResponse(): MsgReorderItemResponse {
  return {};
}
/**
 * @name MsgReorderItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgReorderItemResponse
 */
export const MsgReorderItemResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgReorderItemResponse",
  encode(_: MsgReorderItemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReorderItemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReorderItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgReorderItemResponse>): MsgReorderItemResponse {
    const message = createBaseMsgReorderItemResponse();
    return message;
  },
  fromAmino(_: MsgReorderItemResponseAmino): MsgReorderItemResponse {
    const message = createBaseMsgReorderItemResponse();
    return message;
  },
  toAmino(_: MsgReorderItemResponse): MsgReorderItemResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReorderItemResponseAminoMsg): MsgReorderItemResponse {
    return MsgReorderItemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReorderItemResponseProtoMsg): MsgReorderItemResponse {
    return MsgReorderItemResponse.decode(message.value);
  },
  toProto(message: MsgReorderItemResponse): Uint8Array {
    return MsgReorderItemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReorderItemResponse): MsgReorderItemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgReorderItemResponse",
      value: MsgReorderItemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddCollaborator(): MsgAddCollaborator {
  return {
    creator: "",
    collectionId: BigInt(0),
    address: "",
    role: 0
  };
}
/**
 * @name MsgAddCollaborator
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddCollaborator
 */
export const MsgAddCollaborator = {
  typeUrl: "/sparkdream.collect.v1.MsgAddCollaborator",
  aminoType: "sparkdream/x/collect/MsgAddCollaborator",
  encode(message: MsgAddCollaborator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCollaborator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCollaborator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddCollaborator>): MsgAddCollaborator {
    const message = createBaseMsgAddCollaborator();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.role = object.role ?? 0;
    return message;
  },
  fromAmino(object: MsgAddCollaboratorAmino): MsgAddCollaborator {
    const message = createBaseMsgAddCollaborator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: MsgAddCollaborator): MsgAddCollaboratorAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.role = message.role === 0 ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: MsgAddCollaboratorAminoMsg): MsgAddCollaborator {
    return MsgAddCollaborator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddCollaborator): MsgAddCollaboratorAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgAddCollaborator",
      value: MsgAddCollaborator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddCollaboratorProtoMsg): MsgAddCollaborator {
    return MsgAddCollaborator.decode(message.value);
  },
  toProto(message: MsgAddCollaborator): Uint8Array {
    return MsgAddCollaborator.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCollaborator): MsgAddCollaboratorProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAddCollaborator",
      value: MsgAddCollaborator.encode(message).finish()
    };
  }
};
function createBaseMsgAddCollaboratorResponse(): MsgAddCollaboratorResponse {
  return {};
}
/**
 * @name MsgAddCollaboratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAddCollaboratorResponse
 */
export const MsgAddCollaboratorResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgAddCollaboratorResponse",
  encode(_: MsgAddCollaboratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCollaboratorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCollaboratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAddCollaboratorResponse>): MsgAddCollaboratorResponse {
    const message = createBaseMsgAddCollaboratorResponse();
    return message;
  },
  fromAmino(_: MsgAddCollaboratorResponseAmino): MsgAddCollaboratorResponse {
    const message = createBaseMsgAddCollaboratorResponse();
    return message;
  },
  toAmino(_: MsgAddCollaboratorResponse): MsgAddCollaboratorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddCollaboratorResponseAminoMsg): MsgAddCollaboratorResponse {
    return MsgAddCollaboratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddCollaboratorResponseProtoMsg): MsgAddCollaboratorResponse {
    return MsgAddCollaboratorResponse.decode(message.value);
  },
  toProto(message: MsgAddCollaboratorResponse): Uint8Array {
    return MsgAddCollaboratorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCollaboratorResponse): MsgAddCollaboratorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAddCollaboratorResponse",
      value: MsgAddCollaboratorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveCollaborator(): MsgRemoveCollaborator {
  return {
    creator: "",
    collectionId: BigInt(0),
    address: ""
  };
}
/**
 * @name MsgRemoveCollaborator
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveCollaborator
 */
export const MsgRemoveCollaborator = {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaborator",
  aminoType: "sparkdream/x/collect/MsgRemoveCollaborator",
  encode(message: MsgRemoveCollaborator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCollaborator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCollaborator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveCollaborator>): MsgRemoveCollaborator {
    const message = createBaseMsgRemoveCollaborator();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveCollaboratorAmino): MsgRemoveCollaborator {
    const message = createBaseMsgRemoveCollaborator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgRemoveCollaborator): MsgRemoveCollaboratorAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveCollaboratorAminoMsg): MsgRemoveCollaborator {
    return MsgRemoveCollaborator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveCollaborator): MsgRemoveCollaboratorAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgRemoveCollaborator",
      value: MsgRemoveCollaborator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveCollaboratorProtoMsg): MsgRemoveCollaborator {
    return MsgRemoveCollaborator.decode(message.value);
  },
  toProto(message: MsgRemoveCollaborator): Uint8Array {
    return MsgRemoveCollaborator.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveCollaborator): MsgRemoveCollaboratorProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaborator",
      value: MsgRemoveCollaborator.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveCollaboratorResponse(): MsgRemoveCollaboratorResponse {
  return {};
}
/**
 * @name MsgRemoveCollaboratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRemoveCollaboratorResponse
 */
export const MsgRemoveCollaboratorResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaboratorResponse",
  encode(_: MsgRemoveCollaboratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCollaboratorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCollaboratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRemoveCollaboratorResponse>): MsgRemoveCollaboratorResponse {
    const message = createBaseMsgRemoveCollaboratorResponse();
    return message;
  },
  fromAmino(_: MsgRemoveCollaboratorResponseAmino): MsgRemoveCollaboratorResponse {
    const message = createBaseMsgRemoveCollaboratorResponse();
    return message;
  },
  toAmino(_: MsgRemoveCollaboratorResponse): MsgRemoveCollaboratorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveCollaboratorResponseAminoMsg): MsgRemoveCollaboratorResponse {
    return MsgRemoveCollaboratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveCollaboratorResponseProtoMsg): MsgRemoveCollaboratorResponse {
    return MsgRemoveCollaboratorResponse.decode(message.value);
  },
  toProto(message: MsgRemoveCollaboratorResponse): Uint8Array {
    return MsgRemoveCollaboratorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveCollaboratorResponse): MsgRemoveCollaboratorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaboratorResponse",
      value: MsgRemoveCollaboratorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCollaboratorRole(): MsgUpdateCollaboratorRole {
  return {
    creator: "",
    collectionId: BigInt(0),
    address: "",
    role: 0
  };
}
/**
 * @name MsgUpdateCollaboratorRole
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollaboratorRole
 */
export const MsgUpdateCollaboratorRole = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole",
  aminoType: "sparkdream/x/collect/MsgUpdateCollaboratorRole",
  encode(message: MsgUpdateCollaboratorRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateCollaboratorRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCollaboratorRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateCollaboratorRole>): MsgUpdateCollaboratorRole {
    const message = createBaseMsgUpdateCollaboratorRole();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.role = object.role ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateCollaboratorRoleAmino): MsgUpdateCollaboratorRole {
    const message = createBaseMsgUpdateCollaboratorRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: MsgUpdateCollaboratorRole): MsgUpdateCollaboratorRoleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.role = message.role === 0 ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCollaboratorRoleAminoMsg): MsgUpdateCollaboratorRole {
    return MsgUpdateCollaboratorRole.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateCollaboratorRole): MsgUpdateCollaboratorRoleAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUpdateCollaboratorRole",
      value: MsgUpdateCollaboratorRole.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateCollaboratorRoleProtoMsg): MsgUpdateCollaboratorRole {
    return MsgUpdateCollaboratorRole.decode(message.value);
  },
  toProto(message: MsgUpdateCollaboratorRole): Uint8Array {
    return MsgUpdateCollaboratorRole.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCollaboratorRole): MsgUpdateCollaboratorRoleProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole",
      value: MsgUpdateCollaboratorRole.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCollaboratorRoleResponse(): MsgUpdateCollaboratorRoleResponse {
  return {};
}
/**
 * @name MsgUpdateCollaboratorRoleResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse
 */
export const MsgUpdateCollaboratorRoleResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse",
  encode(_: MsgUpdateCollaboratorRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateCollaboratorRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCollaboratorRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateCollaboratorRoleResponse>): MsgUpdateCollaboratorRoleResponse {
    const message = createBaseMsgUpdateCollaboratorRoleResponse();
    return message;
  },
  fromAmino(_: MsgUpdateCollaboratorRoleResponseAmino): MsgUpdateCollaboratorRoleResponse {
    const message = createBaseMsgUpdateCollaboratorRoleResponse();
    return message;
  },
  toAmino(_: MsgUpdateCollaboratorRoleResponse): MsgUpdateCollaboratorRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCollaboratorRoleResponseAminoMsg): MsgUpdateCollaboratorRoleResponse {
    return MsgUpdateCollaboratorRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCollaboratorRoleResponseProtoMsg): MsgUpdateCollaboratorRoleResponse {
    return MsgUpdateCollaboratorRoleResponse.decode(message.value);
  },
  toProto(message: MsgUpdateCollaboratorRoleResponse): Uint8Array {
    return MsgUpdateCollaboratorRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCollaboratorRoleResponse): MsgUpdateCollaboratorRoleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRoleResponse",
      value: MsgUpdateCollaboratorRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRateCollection(): MsgRateCollection {
  return {
    creator: "",
    collectionId: BigInt(0),
    verdict: 0,
    tags: [],
    comment: ""
  };
}
/**
 * @name MsgRateCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRateCollection
 */
export const MsgRateCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgRateCollection",
  aminoType: "sparkdream/x/collect/MsgRateCollection",
  encode(message: MsgRateCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.verdict !== 0) {
      writer.uint32(24).int32(message.verdict);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.comment !== "") {
      writer.uint32(42).string(message.comment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRateCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRateCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.verdict = reader.int32() as any;
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          message.comment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRateCollection>): MsgRateCollection {
    const message = createBaseMsgRateCollection();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.verdict = object.verdict ?? 0;
    message.tags = object.tags?.map(e => e) || [];
    message.comment = object.comment ?? "";
    return message;
  },
  fromAmino(object: MsgRateCollectionAmino): MsgRateCollection {
    const message = createBaseMsgRateCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    }
    return message;
  },
  toAmino(message: MsgRateCollection): MsgRateCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.comment = message.comment === "" ? undefined : message.comment;
    return obj;
  },
  fromAminoMsg(object: MsgRateCollectionAminoMsg): MsgRateCollection {
    return MsgRateCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRateCollection): MsgRateCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgRateCollection",
      value: MsgRateCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRateCollectionProtoMsg): MsgRateCollection {
    return MsgRateCollection.decode(message.value);
  },
  toProto(message: MsgRateCollection): Uint8Array {
    return MsgRateCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgRateCollection): MsgRateCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRateCollection",
      value: MsgRateCollection.encode(message).finish()
    };
  }
};
function createBaseMsgRateCollectionResponse(): MsgRateCollectionResponse {
  return {
    reviewId: BigInt(0)
  };
}
/**
 * @name MsgRateCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRateCollectionResponse
 */
export const MsgRateCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgRateCollectionResponse",
  encode(message: MsgRateCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reviewId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reviewId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRateCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRateCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRateCollectionResponse>): MsgRateCollectionResponse {
    const message = createBaseMsgRateCollectionResponse();
    message.reviewId = object.reviewId !== undefined && object.reviewId !== null ? BigInt(object.reviewId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRateCollectionResponseAmino): MsgRateCollectionResponse {
    const message = createBaseMsgRateCollectionResponse();
    if (object.review_id !== undefined && object.review_id !== null) {
      message.reviewId = BigInt(object.review_id);
    }
    return message;
  },
  toAmino(message: MsgRateCollectionResponse): MsgRateCollectionResponseAmino {
    const obj: any = {};
    obj.review_id = message.reviewId !== BigInt(0) ? message.reviewId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRateCollectionResponseAminoMsg): MsgRateCollectionResponse {
    return MsgRateCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRateCollectionResponseProtoMsg): MsgRateCollectionResponse {
    return MsgRateCollectionResponse.decode(message.value);
  },
  toProto(message: MsgRateCollectionResponse): Uint8Array {
    return MsgRateCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRateCollectionResponse): MsgRateCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRateCollectionResponse",
      value: MsgRateCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChallengeReview(): MsgChallengeReview {
  return {
    creator: "",
    reviewId: BigInt(0),
    reason: ""
  };
}
/**
 * @name MsgChallengeReview
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgChallengeReview
 */
export const MsgChallengeReview = {
  typeUrl: "/sparkdream.collect.v1.MsgChallengeReview",
  aminoType: "sparkdream/x/collect/MsgChallengeReview",
  encode(message: MsgChallengeReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reviewId !== BigInt(0)) {
      writer.uint32(16).uint64(message.reviewId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reviewId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgChallengeReview>): MsgChallengeReview {
    const message = createBaseMsgChallengeReview();
    message.creator = object.creator ?? "";
    message.reviewId = object.reviewId !== undefined && object.reviewId !== null ? BigInt(object.reviewId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgChallengeReviewAmino): MsgChallengeReview {
    const message = createBaseMsgChallengeReview();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.review_id !== undefined && object.review_id !== null) {
      message.reviewId = BigInt(object.review_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgChallengeReview): MsgChallengeReviewAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.review_id = message.reviewId !== BigInt(0) ? message.reviewId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgChallengeReviewAminoMsg): MsgChallengeReview {
    return MsgChallengeReview.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChallengeReview): MsgChallengeReviewAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgChallengeReview",
      value: MsgChallengeReview.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChallengeReviewProtoMsg): MsgChallengeReview {
    return MsgChallengeReview.decode(message.value);
  },
  toProto(message: MsgChallengeReview): Uint8Array {
    return MsgChallengeReview.encode(message).finish();
  },
  toProtoMsg(message: MsgChallengeReview): MsgChallengeReviewProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgChallengeReview",
      value: MsgChallengeReview.encode(message).finish()
    };
  }
};
function createBaseMsgChallengeReviewResponse(): MsgChallengeReviewResponse {
  return {};
}
/**
 * @name MsgChallengeReviewResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgChallengeReviewResponse
 */
export const MsgChallengeReviewResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgChallengeReviewResponse",
  encode(_: MsgChallengeReviewResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeReviewResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgChallengeReviewResponse>): MsgChallengeReviewResponse {
    const message = createBaseMsgChallengeReviewResponse();
    return message;
  },
  fromAmino(_: MsgChallengeReviewResponseAmino): MsgChallengeReviewResponse {
    const message = createBaseMsgChallengeReviewResponse();
    return message;
  },
  toAmino(_: MsgChallengeReviewResponse): MsgChallengeReviewResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChallengeReviewResponseAminoMsg): MsgChallengeReviewResponse {
    return MsgChallengeReviewResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChallengeReviewResponseProtoMsg): MsgChallengeReviewResponse {
    return MsgChallengeReviewResponse.decode(message.value);
  },
  toProto(message: MsgChallengeReviewResponse): Uint8Array {
    return MsgChallengeReviewResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChallengeReviewResponse): MsgChallengeReviewResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgChallengeReviewResponse",
      value: MsgChallengeReviewResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestSponsorship(): MsgRequestSponsorship {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * @name MsgRequestSponsorship
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRequestSponsorship
 */
export const MsgRequestSponsorship = {
  typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorship",
  aminoType: "sparkdream/x/collect/MsgRequestSponsorship",
  encode(message: MsgRequestSponsorship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestSponsorship {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestSponsorship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestSponsorship>): MsgRequestSponsorship {
    const message = createBaseMsgRequestSponsorship();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRequestSponsorshipAmino): MsgRequestSponsorship {
    const message = createBaseMsgRequestSponsorship();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgRequestSponsorship): MsgRequestSponsorshipAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestSponsorshipAminoMsg): MsgRequestSponsorship {
    return MsgRequestSponsorship.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRequestSponsorship): MsgRequestSponsorshipAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgRequestSponsorship",
      value: MsgRequestSponsorship.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRequestSponsorshipProtoMsg): MsgRequestSponsorship {
    return MsgRequestSponsorship.decode(message.value);
  },
  toProto(message: MsgRequestSponsorship): Uint8Array {
    return MsgRequestSponsorship.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestSponsorship): MsgRequestSponsorshipProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorship",
      value: MsgRequestSponsorship.encode(message).finish()
    };
  }
};
function createBaseMsgRequestSponsorshipResponse(): MsgRequestSponsorshipResponse {
  return {};
}
/**
 * @name MsgRequestSponsorshipResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgRequestSponsorshipResponse
 */
export const MsgRequestSponsorshipResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorshipResponse",
  encode(_: MsgRequestSponsorshipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestSponsorshipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestSponsorshipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRequestSponsorshipResponse>): MsgRequestSponsorshipResponse {
    const message = createBaseMsgRequestSponsorshipResponse();
    return message;
  },
  fromAmino(_: MsgRequestSponsorshipResponseAmino): MsgRequestSponsorshipResponse {
    const message = createBaseMsgRequestSponsorshipResponse();
    return message;
  },
  toAmino(_: MsgRequestSponsorshipResponse): MsgRequestSponsorshipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestSponsorshipResponseAminoMsg): MsgRequestSponsorshipResponse {
    return MsgRequestSponsorshipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestSponsorshipResponseProtoMsg): MsgRequestSponsorshipResponse {
    return MsgRequestSponsorshipResponse.decode(message.value);
  },
  toProto(message: MsgRequestSponsorshipResponse): Uint8Array {
    return MsgRequestSponsorshipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestSponsorshipResponse): MsgRequestSponsorshipResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorshipResponse",
      value: MsgRequestSponsorshipResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSponsorshipRequest(): MsgCancelSponsorshipRequest {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * @name MsgCancelSponsorshipRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCancelSponsorshipRequest
 */
export const MsgCancelSponsorshipRequest = {
  typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest",
  aminoType: "sparkdream/x/collect/MsgCancelSponsorshipRequest",
  encode(message: MsgCancelSponsorshipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSponsorshipRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSponsorshipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelSponsorshipRequest>): MsgCancelSponsorshipRequest {
    const message = createBaseMsgCancelSponsorshipRequest();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelSponsorshipRequestAmino): MsgCancelSponsorshipRequest {
    const message = createBaseMsgCancelSponsorshipRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgCancelSponsorshipRequest): MsgCancelSponsorshipRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSponsorshipRequestAminoMsg): MsgCancelSponsorshipRequest {
    return MsgCancelSponsorshipRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelSponsorshipRequest): MsgCancelSponsorshipRequestAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgCancelSponsorshipRequest",
      value: MsgCancelSponsorshipRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelSponsorshipRequestProtoMsg): MsgCancelSponsorshipRequest {
    return MsgCancelSponsorshipRequest.decode(message.value);
  },
  toProto(message: MsgCancelSponsorshipRequest): Uint8Array {
    return MsgCancelSponsorshipRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSponsorshipRequest): MsgCancelSponsorshipRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest",
      value: MsgCancelSponsorshipRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSponsorshipRequestResponse(): MsgCancelSponsorshipRequestResponse {
  return {};
}
/**
 * @name MsgCancelSponsorshipRequestResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse
 */
export const MsgCancelSponsorshipRequestResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse",
  encode(_: MsgCancelSponsorshipRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSponsorshipRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSponsorshipRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCancelSponsorshipRequestResponse>): MsgCancelSponsorshipRequestResponse {
    const message = createBaseMsgCancelSponsorshipRequestResponse();
    return message;
  },
  fromAmino(_: MsgCancelSponsorshipRequestResponseAmino): MsgCancelSponsorshipRequestResponse {
    const message = createBaseMsgCancelSponsorshipRequestResponse();
    return message;
  },
  toAmino(_: MsgCancelSponsorshipRequestResponse): MsgCancelSponsorshipRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSponsorshipRequestResponseAminoMsg): MsgCancelSponsorshipRequestResponse {
    return MsgCancelSponsorshipRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSponsorshipRequestResponseProtoMsg): MsgCancelSponsorshipRequestResponse {
    return MsgCancelSponsorshipRequestResponse.decode(message.value);
  },
  toProto(message: MsgCancelSponsorshipRequestResponse): Uint8Array {
    return MsgCancelSponsorshipRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSponsorshipRequestResponse): MsgCancelSponsorshipRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequestResponse",
      value: MsgCancelSponsorshipRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSponsorCollection(): MsgSponsorCollection {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * @name MsgSponsorCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSponsorCollection
 */
export const MsgSponsorCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgSponsorCollection",
  aminoType: "sparkdream/x/collect/MsgSponsorCollection",
  encode(message: MsgSponsorCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSponsorCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSponsorCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSponsorCollection>): MsgSponsorCollection {
    const message = createBaseMsgSponsorCollection();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSponsorCollectionAmino): MsgSponsorCollection {
    const message = createBaseMsgSponsorCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgSponsorCollection): MsgSponsorCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSponsorCollectionAminoMsg): MsgSponsorCollection {
    return MsgSponsorCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSponsorCollection): MsgSponsorCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgSponsorCollection",
      value: MsgSponsorCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSponsorCollectionProtoMsg): MsgSponsorCollection {
    return MsgSponsorCollection.decode(message.value);
  },
  toProto(message: MsgSponsorCollection): Uint8Array {
    return MsgSponsorCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgSponsorCollection): MsgSponsorCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgSponsorCollection",
      value: MsgSponsorCollection.encode(message).finish()
    };
  }
};
function createBaseMsgSponsorCollectionResponse(): MsgSponsorCollectionResponse {
  return {};
}
/**
 * @name MsgSponsorCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSponsorCollectionResponse
 */
export const MsgSponsorCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgSponsorCollectionResponse",
  encode(_: MsgSponsorCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSponsorCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSponsorCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSponsorCollectionResponse>): MsgSponsorCollectionResponse {
    const message = createBaseMsgSponsorCollectionResponse();
    return message;
  },
  fromAmino(_: MsgSponsorCollectionResponseAmino): MsgSponsorCollectionResponse {
    const message = createBaseMsgSponsorCollectionResponse();
    return message;
  },
  toAmino(_: MsgSponsorCollectionResponse): MsgSponsorCollectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSponsorCollectionResponseAminoMsg): MsgSponsorCollectionResponse {
    return MsgSponsorCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSponsorCollectionResponseProtoMsg): MsgSponsorCollectionResponse {
    return MsgSponsorCollectionResponse.decode(message.value);
  },
  toProto(message: MsgSponsorCollectionResponse): Uint8Array {
    return MsgSponsorCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSponsorCollectionResponse): MsgSponsorCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgSponsorCollectionResponse",
      value: MsgSponsorCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: CollectOperationalParams.fromPartial({})
  };
}
/**
 * @name MsgUpdateOperationalParams
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/collect/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      CollectOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = CollectOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? CollectOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = CollectOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? CollectOperationalParams.toAmino(message.operationalParams) : CollectOperationalParams.toAmino(CollectOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpvoteContent(): MsgUpvoteContent {
  return {
    creator: "",
    targetId: BigInt(0),
    targetType: 0
  };
}
/**
 * MsgUpvoteContent defines the MsgUpvoteContent message.
 * @name MsgUpvoteContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpvoteContent
 */
export const MsgUpvoteContent = {
  typeUrl: "/sparkdream.collect.v1.MsgUpvoteContent",
  aminoType: "sparkdream/x/collect/MsgUpvoteContent",
  encode(message: MsgUpvoteContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpvoteContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpvoteContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpvoteContent>): MsgUpvoteContent {
    const message = createBaseMsgUpvoteContent();
    message.creator = object.creator ?? "";
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    return message;
  },
  fromAmino(object: MsgUpvoteContentAmino): MsgUpvoteContent {
    const message = createBaseMsgUpvoteContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    return message;
  },
  toAmino(message: MsgUpvoteContent): MsgUpvoteContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    return obj;
  },
  fromAminoMsg(object: MsgUpvoteContentAminoMsg): MsgUpvoteContent {
    return MsgUpvoteContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpvoteContent): MsgUpvoteContentAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUpvoteContent",
      value: MsgUpvoteContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpvoteContentProtoMsg): MsgUpvoteContent {
    return MsgUpvoteContent.decode(message.value);
  },
  toProto(message: MsgUpvoteContent): Uint8Array {
    return MsgUpvoteContent.encode(message).finish();
  },
  toProtoMsg(message: MsgUpvoteContent): MsgUpvoteContentProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpvoteContent",
      value: MsgUpvoteContent.encode(message).finish()
    };
  }
};
function createBaseMsgUpvoteContentResponse(): MsgUpvoteContentResponse {
  return {};
}
/**
 * MsgUpvoteContentResponse defines the MsgUpvoteContentResponse message.
 * @name MsgUpvoteContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUpvoteContentResponse
 */
export const MsgUpvoteContentResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUpvoteContentResponse",
  encode(_: MsgUpvoteContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpvoteContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpvoteContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpvoteContentResponse>): MsgUpvoteContentResponse {
    const message = createBaseMsgUpvoteContentResponse();
    return message;
  },
  fromAmino(_: MsgUpvoteContentResponseAmino): MsgUpvoteContentResponse {
    const message = createBaseMsgUpvoteContentResponse();
    return message;
  },
  toAmino(_: MsgUpvoteContentResponse): MsgUpvoteContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpvoteContentResponseAminoMsg): MsgUpvoteContentResponse {
    return MsgUpvoteContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpvoteContentResponseProtoMsg): MsgUpvoteContentResponse {
    return MsgUpvoteContentResponse.decode(message.value);
  },
  toProto(message: MsgUpvoteContentResponse): Uint8Array {
    return MsgUpvoteContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpvoteContentResponse): MsgUpvoteContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUpvoteContentResponse",
      value: MsgUpvoteContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDownvoteContent(): MsgDownvoteContent {
  return {
    creator: "",
    targetId: BigInt(0),
    targetType: 0
  };
}
/**
 * MsgDownvoteContent defines the MsgDownvoteContent message.
 * @name MsgDownvoteContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDownvoteContent
 */
export const MsgDownvoteContent = {
  typeUrl: "/sparkdream.collect.v1.MsgDownvoteContent",
  aminoType: "sparkdream/x/collect/MsgDownvoteContent",
  encode(message: MsgDownvoteContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDownvoteContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDownvoteContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDownvoteContent>): MsgDownvoteContent {
    const message = createBaseMsgDownvoteContent();
    message.creator = object.creator ?? "";
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    return message;
  },
  fromAmino(object: MsgDownvoteContentAmino): MsgDownvoteContent {
    const message = createBaseMsgDownvoteContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    return message;
  },
  toAmino(message: MsgDownvoteContent): MsgDownvoteContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    return obj;
  },
  fromAminoMsg(object: MsgDownvoteContentAminoMsg): MsgDownvoteContent {
    return MsgDownvoteContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDownvoteContent): MsgDownvoteContentAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgDownvoteContent",
      value: MsgDownvoteContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDownvoteContentProtoMsg): MsgDownvoteContent {
    return MsgDownvoteContent.decode(message.value);
  },
  toProto(message: MsgDownvoteContent): Uint8Array {
    return MsgDownvoteContent.encode(message).finish();
  },
  toProtoMsg(message: MsgDownvoteContent): MsgDownvoteContentProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgDownvoteContent",
      value: MsgDownvoteContent.encode(message).finish()
    };
  }
};
function createBaseMsgDownvoteContentResponse(): MsgDownvoteContentResponse {
  return {};
}
/**
 * MsgDownvoteContentResponse defines the MsgDownvoteContentResponse message.
 * @name MsgDownvoteContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgDownvoteContentResponse
 */
export const MsgDownvoteContentResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgDownvoteContentResponse",
  encode(_: MsgDownvoteContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDownvoteContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDownvoteContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDownvoteContentResponse>): MsgDownvoteContentResponse {
    const message = createBaseMsgDownvoteContentResponse();
    return message;
  },
  fromAmino(_: MsgDownvoteContentResponseAmino): MsgDownvoteContentResponse {
    const message = createBaseMsgDownvoteContentResponse();
    return message;
  },
  toAmino(_: MsgDownvoteContentResponse): MsgDownvoteContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDownvoteContentResponseAminoMsg): MsgDownvoteContentResponse {
    return MsgDownvoteContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDownvoteContentResponseProtoMsg): MsgDownvoteContentResponse {
    return MsgDownvoteContentResponse.decode(message.value);
  },
  toProto(message: MsgDownvoteContentResponse): Uint8Array {
    return MsgDownvoteContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDownvoteContentResponse): MsgDownvoteContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgDownvoteContentResponse",
      value: MsgDownvoteContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFlagContent(): MsgFlagContent {
  return {
    creator: "",
    targetId: BigInt(0),
    targetType: 0,
    reason: 0,
    reasonText: ""
  };
}
/**
 * MsgFlagContent defines the MsgFlagContent message.
 * @name MsgFlagContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgFlagContent
 */
export const MsgFlagContent = {
  typeUrl: "/sparkdream.collect.v1.MsgFlagContent",
  aminoType: "sparkdream/x/collect/MsgFlagContent",
  encode(message: MsgFlagContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    if (message.reason !== 0) {
      writer.uint32(32).int32(message.reason);
    }
    if (message.reasonText !== "") {
      writer.uint32(42).string(message.reasonText);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFlagContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFlagContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        case 4:
          message.reason = reader.int32() as any;
          break;
        case 5:
          message.reasonText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFlagContent>): MsgFlagContent {
    const message = createBaseMsgFlagContent();
    message.creator = object.creator ?? "";
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    message.reason = object.reason ?? 0;
    message.reasonText = object.reasonText ?? "";
    return message;
  },
  fromAmino(object: MsgFlagContentAmino): MsgFlagContent {
    const message = createBaseMsgFlagContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    return message;
  },
  toAmino(message: MsgFlagContent): MsgFlagContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    return obj;
  },
  fromAminoMsg(object: MsgFlagContentAminoMsg): MsgFlagContent {
    return MsgFlagContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFlagContent): MsgFlagContentAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgFlagContent",
      value: MsgFlagContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFlagContentProtoMsg): MsgFlagContent {
    return MsgFlagContent.decode(message.value);
  },
  toProto(message: MsgFlagContent): Uint8Array {
    return MsgFlagContent.encode(message).finish();
  },
  toProtoMsg(message: MsgFlagContent): MsgFlagContentProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgFlagContent",
      value: MsgFlagContent.encode(message).finish()
    };
  }
};
function createBaseMsgFlagContentResponse(): MsgFlagContentResponse {
  return {};
}
/**
 * MsgFlagContentResponse defines the MsgFlagContentResponse message.
 * @name MsgFlagContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgFlagContentResponse
 */
export const MsgFlagContentResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgFlagContentResponse",
  encode(_: MsgFlagContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFlagContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFlagContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgFlagContentResponse>): MsgFlagContentResponse {
    const message = createBaseMsgFlagContentResponse();
    return message;
  },
  fromAmino(_: MsgFlagContentResponseAmino): MsgFlagContentResponse {
    const message = createBaseMsgFlagContentResponse();
    return message;
  },
  toAmino(_: MsgFlagContentResponse): MsgFlagContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFlagContentResponseAminoMsg): MsgFlagContentResponse {
    return MsgFlagContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFlagContentResponseProtoMsg): MsgFlagContentResponse {
    return MsgFlagContentResponse.decode(message.value);
  },
  toProto(message: MsgFlagContentResponse): Uint8Array {
    return MsgFlagContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFlagContentResponse): MsgFlagContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgFlagContentResponse",
      value: MsgFlagContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgHideContent(): MsgHideContent {
  return {
    creator: "",
    targetId: BigInt(0),
    targetType: 0,
    reasonCode: 0,
    reasonText: ""
  };
}
/**
 * MsgHideContent defines the MsgHideContent message.
 * @name MsgHideContent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgHideContent
 */
export const MsgHideContent = {
  typeUrl: "/sparkdream.collect.v1.MsgHideContent",
  aminoType: "sparkdream/x/collect/MsgHideContent",
  encode(message: MsgHideContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    if (message.reasonCode !== 0) {
      writer.uint32(32).int32(message.reasonCode);
    }
    if (message.reasonText !== "") {
      writer.uint32(42).string(message.reasonText);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHideContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHideContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        case 4:
          message.reasonCode = reader.int32() as any;
          break;
        case 5:
          message.reasonText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgHideContent>): MsgHideContent {
    const message = createBaseMsgHideContent();
    message.creator = object.creator ?? "";
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    message.reasonCode = object.reasonCode ?? 0;
    message.reasonText = object.reasonText ?? "";
    return message;
  },
  fromAmino(object: MsgHideContentAmino): MsgHideContent {
    const message = createBaseMsgHideContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.reason_code !== undefined && object.reason_code !== null) {
      message.reasonCode = object.reason_code;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    return message;
  },
  toAmino(message: MsgHideContent): MsgHideContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.reason_code = message.reasonCode === 0 ? undefined : message.reasonCode;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    return obj;
  },
  fromAminoMsg(object: MsgHideContentAminoMsg): MsgHideContent {
    return MsgHideContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHideContent): MsgHideContentAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgHideContent",
      value: MsgHideContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgHideContentProtoMsg): MsgHideContent {
    return MsgHideContent.decode(message.value);
  },
  toProto(message: MsgHideContent): Uint8Array {
    return MsgHideContent.encode(message).finish();
  },
  toProtoMsg(message: MsgHideContent): MsgHideContentProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgHideContent",
      value: MsgHideContent.encode(message).finish()
    };
  }
};
function createBaseMsgHideContentResponse(): MsgHideContentResponse {
  return {
    hideRecordId: BigInt(0)
  };
}
/**
 * MsgHideContentResponse defines the MsgHideContentResponse message.
 * @name MsgHideContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgHideContentResponse
 */
export const MsgHideContentResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgHideContentResponse",
  encode(message: MsgHideContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hideRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.hideRecordId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHideContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHideContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgHideContentResponse>): MsgHideContentResponse {
    const message = createBaseMsgHideContentResponse();
    message.hideRecordId = object.hideRecordId !== undefined && object.hideRecordId !== null ? BigInt(object.hideRecordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgHideContentResponseAmino): MsgHideContentResponse {
    const message = createBaseMsgHideContentResponse();
    if (object.hide_record_id !== undefined && object.hide_record_id !== null) {
      message.hideRecordId = BigInt(object.hide_record_id);
    }
    return message;
  },
  toAmino(message: MsgHideContentResponse): MsgHideContentResponseAmino {
    const obj: any = {};
    obj.hide_record_id = message.hideRecordId !== BigInt(0) ? message.hideRecordId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgHideContentResponseAminoMsg): MsgHideContentResponse {
    return MsgHideContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHideContentResponseProtoMsg): MsgHideContentResponse {
    return MsgHideContentResponse.decode(message.value);
  },
  toProto(message: MsgHideContentResponse): Uint8Array {
    return MsgHideContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgHideContentResponse): MsgHideContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgHideContentResponse",
      value: MsgHideContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealHide(): MsgAppealHide {
  return {
    creator: "",
    hideRecordId: BigInt(0)
  };
}
/**
 * MsgAppealHide defines the MsgAppealHide message.
 * @name MsgAppealHide
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAppealHide
 */
export const MsgAppealHide = {
  typeUrl: "/sparkdream.collect.v1.MsgAppealHide",
  aminoType: "sparkdream/x/collect/MsgAppealHide",
  encode(message: MsgAppealHide, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hideRecordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.hideRecordId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealHide {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealHide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hideRecordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealHide>): MsgAppealHide {
    const message = createBaseMsgAppealHide();
    message.creator = object.creator ?? "";
    message.hideRecordId = object.hideRecordId !== undefined && object.hideRecordId !== null ? BigInt(object.hideRecordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAppealHideAmino): MsgAppealHide {
    const message = createBaseMsgAppealHide();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.hide_record_id !== undefined && object.hide_record_id !== null) {
      message.hideRecordId = BigInt(object.hide_record_id);
    }
    return message;
  },
  toAmino(message: MsgAppealHide): MsgAppealHideAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.hide_record_id = message.hideRecordId !== BigInt(0) ? message.hideRecordId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAppealHideAminoMsg): MsgAppealHide {
    return MsgAppealHide.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAppealHide): MsgAppealHideAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgAppealHide",
      value: MsgAppealHide.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAppealHideProtoMsg): MsgAppealHide {
    return MsgAppealHide.decode(message.value);
  },
  toProto(message: MsgAppealHide): Uint8Array {
    return MsgAppealHide.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealHide): MsgAppealHideProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAppealHide",
      value: MsgAppealHide.encode(message).finish()
    };
  }
};
function createBaseMsgAppealHideResponse(): MsgAppealHideResponse {
  return {};
}
/**
 * MsgAppealHideResponse defines the MsgAppealHideResponse message.
 * @name MsgAppealHideResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgAppealHideResponse
 */
export const MsgAppealHideResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgAppealHideResponse",
  encode(_: MsgAppealHideResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealHideResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealHideResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAppealHideResponse>): MsgAppealHideResponse {
    const message = createBaseMsgAppealHideResponse();
    return message;
  },
  fromAmino(_: MsgAppealHideResponseAmino): MsgAppealHideResponse {
    const message = createBaseMsgAppealHideResponse();
    return message;
  },
  toAmino(_: MsgAppealHideResponse): MsgAppealHideResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealHideResponseAminoMsg): MsgAppealHideResponse {
    return MsgAppealHideResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealHideResponseProtoMsg): MsgAppealHideResponse {
    return MsgAppealHideResponse.decode(message.value);
  },
  toProto(message: MsgAppealHideResponse): Uint8Array {
    return MsgAppealHideResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealHideResponse): MsgAppealHideResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgAppealHideResponse",
      value: MsgAppealHideResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEndorseCollection(): MsgEndorseCollection {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * MsgEndorseCollection defines the MsgEndorseCollection message.
 * @name MsgEndorseCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgEndorseCollection
 */
export const MsgEndorseCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgEndorseCollection",
  aminoType: "sparkdream/x/collect/MsgEndorseCollection",
  encode(message: MsgEndorseCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEndorseCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndorseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEndorseCollection>): MsgEndorseCollection {
    const message = createBaseMsgEndorseCollection();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEndorseCollectionAmino): MsgEndorseCollection {
    const message = createBaseMsgEndorseCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgEndorseCollection): MsgEndorseCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEndorseCollectionAminoMsg): MsgEndorseCollection {
    return MsgEndorseCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEndorseCollection): MsgEndorseCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgEndorseCollection",
      value: MsgEndorseCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEndorseCollectionProtoMsg): MsgEndorseCollection {
    return MsgEndorseCollection.decode(message.value);
  },
  toProto(message: MsgEndorseCollection): Uint8Array {
    return MsgEndorseCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgEndorseCollection): MsgEndorseCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgEndorseCollection",
      value: MsgEndorseCollection.encode(message).finish()
    };
  }
};
function createBaseMsgEndorseCollectionResponse(): MsgEndorseCollectionResponse {
  return {};
}
/**
 * MsgEndorseCollectionResponse defines the MsgEndorseCollectionResponse message.
 * @name MsgEndorseCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgEndorseCollectionResponse
 */
export const MsgEndorseCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgEndorseCollectionResponse",
  encode(_: MsgEndorseCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEndorseCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndorseCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgEndorseCollectionResponse>): MsgEndorseCollectionResponse {
    const message = createBaseMsgEndorseCollectionResponse();
    return message;
  },
  fromAmino(_: MsgEndorseCollectionResponseAmino): MsgEndorseCollectionResponse {
    const message = createBaseMsgEndorseCollectionResponse();
    return message;
  },
  toAmino(_: MsgEndorseCollectionResponse): MsgEndorseCollectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEndorseCollectionResponseAminoMsg): MsgEndorseCollectionResponse {
    return MsgEndorseCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEndorseCollectionResponseProtoMsg): MsgEndorseCollectionResponse {
    return MsgEndorseCollectionResponse.decode(message.value);
  },
  toProto(message: MsgEndorseCollectionResponse): Uint8Array {
    return MsgEndorseCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEndorseCollectionResponse): MsgEndorseCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgEndorseCollectionResponse",
      value: MsgEndorseCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetSeekingEndorsement(): MsgSetSeekingEndorsement {
  return {
    creator: "",
    collectionId: BigInt(0),
    seeking: false
  };
}
/**
 * MsgSetSeekingEndorsement defines the MsgSetSeekingEndorsement message.
 * @name MsgSetSeekingEndorsement
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSetSeekingEndorsement
 */
export const MsgSetSeekingEndorsement = {
  typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsement",
  aminoType: "sparkdream/x/collect/MsgSetSeekingEndorsement",
  encode(message: MsgSetSeekingEndorsement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.seeking === true) {
      writer.uint32(24).bool(message.seeking);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSeekingEndorsement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSeekingEndorsement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        case 3:
          message.seeking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetSeekingEndorsement>): MsgSetSeekingEndorsement {
    const message = createBaseMsgSetSeekingEndorsement();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.seeking = object.seeking ?? false;
    return message;
  },
  fromAmino(object: MsgSetSeekingEndorsementAmino): MsgSetSeekingEndorsement {
    const message = createBaseMsgSetSeekingEndorsement();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.seeking !== undefined && object.seeking !== null) {
      message.seeking = object.seeking;
    }
    return message;
  },
  toAmino(message: MsgSetSeekingEndorsement): MsgSetSeekingEndorsementAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.seeking = message.seeking === false ? undefined : message.seeking;
    return obj;
  },
  fromAminoMsg(object: MsgSetSeekingEndorsementAminoMsg): MsgSetSeekingEndorsement {
    return MsgSetSeekingEndorsement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetSeekingEndorsement): MsgSetSeekingEndorsementAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgSetSeekingEndorsement",
      value: MsgSetSeekingEndorsement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetSeekingEndorsementProtoMsg): MsgSetSeekingEndorsement {
    return MsgSetSeekingEndorsement.decode(message.value);
  },
  toProto(message: MsgSetSeekingEndorsement): Uint8Array {
    return MsgSetSeekingEndorsement.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSeekingEndorsement): MsgSetSeekingEndorsementProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsement",
      value: MsgSetSeekingEndorsement.encode(message).finish()
    };
  }
};
function createBaseMsgSetSeekingEndorsementResponse(): MsgSetSeekingEndorsementResponse {
  return {};
}
/**
 * MsgSetSeekingEndorsementResponse defines the MsgSetSeekingEndorsementResponse message.
 * @name MsgSetSeekingEndorsementResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgSetSeekingEndorsementResponse
 */
export const MsgSetSeekingEndorsementResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsementResponse",
  encode(_: MsgSetSeekingEndorsementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSeekingEndorsementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSeekingEndorsementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSetSeekingEndorsementResponse>): MsgSetSeekingEndorsementResponse {
    const message = createBaseMsgSetSeekingEndorsementResponse();
    return message;
  },
  fromAmino(_: MsgSetSeekingEndorsementResponseAmino): MsgSetSeekingEndorsementResponse {
    const message = createBaseMsgSetSeekingEndorsementResponse();
    return message;
  },
  toAmino(_: MsgSetSeekingEndorsementResponse): MsgSetSeekingEndorsementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSeekingEndorsementResponseAminoMsg): MsgSetSeekingEndorsementResponse {
    return MsgSetSeekingEndorsementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSeekingEndorsementResponseProtoMsg): MsgSetSeekingEndorsementResponse {
    return MsgSetSeekingEndorsementResponse.decode(message.value);
  },
  toProto(message: MsgSetSeekingEndorsementResponse): Uint8Array {
    return MsgSetSeekingEndorsementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSeekingEndorsementResponse): MsgSetSeekingEndorsementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsementResponse",
      value: MsgSetSeekingEndorsementResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinCollection(): MsgPinCollection {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * MsgPinCollection sets the display-only pinned marker on a permanent
 * collection. Rejects ephemeral targets with ErrCannotPinEphemeral —
 * callers must promote via MsgMakeCollectionPermanent first.
 * @name MsgPinCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgPinCollection
 */
export const MsgPinCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgPinCollection",
  aminoType: "sparkdream/x/collect/MsgPinCollection",
  encode(message: MsgPinCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPinCollection>): MsgPinCollection {
    const message = createBaseMsgPinCollection();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPinCollectionAmino): MsgPinCollection {
    const message = createBaseMsgPinCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgPinCollection): MsgPinCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPinCollectionAminoMsg): MsgPinCollection {
    return MsgPinCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPinCollection): MsgPinCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgPinCollection",
      value: MsgPinCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPinCollectionProtoMsg): MsgPinCollection {
    return MsgPinCollection.decode(message.value);
  },
  toProto(message: MsgPinCollection): Uint8Array {
    return MsgPinCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgPinCollection): MsgPinCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgPinCollection",
      value: MsgPinCollection.encode(message).finish()
    };
  }
};
function createBaseMsgPinCollectionResponse(): MsgPinCollectionResponse {
  return {};
}
/**
 * @name MsgPinCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgPinCollectionResponse
 */
export const MsgPinCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgPinCollectionResponse",
  encode(_: MsgPinCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPinCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgPinCollectionResponse>): MsgPinCollectionResponse {
    const message = createBaseMsgPinCollectionResponse();
    return message;
  },
  fromAmino(_: MsgPinCollectionResponseAmino): MsgPinCollectionResponse {
    const message = createBaseMsgPinCollectionResponse();
    return message;
  },
  toAmino(_: MsgPinCollectionResponse): MsgPinCollectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPinCollectionResponseAminoMsg): MsgPinCollectionResponse {
    return MsgPinCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPinCollectionResponseProtoMsg): MsgPinCollectionResponse {
    return MsgPinCollectionResponse.decode(message.value);
  },
  toProto(message: MsgPinCollectionResponse): Uint8Array {
    return MsgPinCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPinCollectionResponse): MsgPinCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgPinCollectionResponse",
      value: MsgPinCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinCollection(): MsgUnpinCollection {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * MsgUnpinCollection clears the display-only pinned marker. Idempotent on
 * already-unpinned collections.
 * @name MsgUnpinCollection
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUnpinCollection
 */
export const MsgUnpinCollection = {
  typeUrl: "/sparkdream.collect.v1.MsgUnpinCollection",
  aminoType: "sparkdream/x/collect/MsgUnpinCollection",
  encode(message: MsgUnpinCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnpinCollection>): MsgUnpinCollection {
    const message = createBaseMsgUnpinCollection();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnpinCollectionAmino): MsgUnpinCollection {
    const message = createBaseMsgUnpinCollection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgUnpinCollection): MsgUnpinCollectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnpinCollectionAminoMsg): MsgUnpinCollection {
    return MsgUnpinCollection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnpinCollection): MsgUnpinCollectionAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgUnpinCollection",
      value: MsgUnpinCollection.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnpinCollectionProtoMsg): MsgUnpinCollection {
    return MsgUnpinCollection.decode(message.value);
  },
  toProto(message: MsgUnpinCollection): Uint8Array {
    return MsgUnpinCollection.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinCollection): MsgUnpinCollectionProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUnpinCollection",
      value: MsgUnpinCollection.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinCollectionResponse(): MsgUnpinCollectionResponse {
  return {};
}
/**
 * @name MsgUnpinCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgUnpinCollectionResponse
 */
export const MsgUnpinCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgUnpinCollectionResponse",
  encode(_: MsgUnpinCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUnpinCollectionResponse>): MsgUnpinCollectionResponse {
    const message = createBaseMsgUnpinCollectionResponse();
    return message;
  },
  fromAmino(_: MsgUnpinCollectionResponseAmino): MsgUnpinCollectionResponse {
    const message = createBaseMsgUnpinCollectionResponse();
    return message;
  },
  toAmino(_: MsgUnpinCollectionResponse): MsgUnpinCollectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnpinCollectionResponseAminoMsg): MsgUnpinCollectionResponse {
    return MsgUnpinCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpinCollectionResponseProtoMsg): MsgUnpinCollectionResponse {
    return MsgUnpinCollectionResponse.decode(message.value);
  },
  toProto(message: MsgUnpinCollectionResponse): Uint8Array {
    return MsgUnpinCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpinCollectionResponse): MsgUnpinCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgUnpinCollectionResponse",
      value: MsgUnpinCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMakeCollectionPermanent(): MsgMakeCollectionPermanent {
  return {
    creator: "",
    collectionId: BigInt(0)
  };
}
/**
 * MsgMakeCollectionPermanent promotes an ephemeral collection to permanent
 * by burning the escrowed collection + item deposits. Gated on
 * params.make_permanent_min_trust_level. Idempotent on already-permanent
 * collections.
 * @name MsgMakeCollectionPermanent
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgMakeCollectionPermanent
 */
export const MsgMakeCollectionPermanent = {
  typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanent",
  aminoType: "sparkdream/x/collect/MsgMakeCollectionPermanent",
  encode(message: MsgMakeCollectionPermanent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakeCollectionPermanent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeCollectionPermanent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMakeCollectionPermanent>): MsgMakeCollectionPermanent {
    const message = createBaseMsgMakeCollectionPermanent();
    message.creator = object.creator ?? "";
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMakeCollectionPermanentAmino): MsgMakeCollectionPermanent {
    const message = createBaseMsgMakeCollectionPermanent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: MsgMakeCollectionPermanent): MsgMakeCollectionPermanentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMakeCollectionPermanentAminoMsg): MsgMakeCollectionPermanent {
    return MsgMakeCollectionPermanent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMakeCollectionPermanent): MsgMakeCollectionPermanentAminoMsg {
    return {
      type: "sparkdream/x/collect/MsgMakeCollectionPermanent",
      value: MsgMakeCollectionPermanent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMakeCollectionPermanentProtoMsg): MsgMakeCollectionPermanent {
    return MsgMakeCollectionPermanent.decode(message.value);
  },
  toProto(message: MsgMakeCollectionPermanent): Uint8Array {
    return MsgMakeCollectionPermanent.encode(message).finish();
  },
  toProtoMsg(message: MsgMakeCollectionPermanent): MsgMakeCollectionPermanentProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanent",
      value: MsgMakeCollectionPermanent.encode(message).finish()
    };
  }
};
function createBaseMsgMakeCollectionPermanentResponse(): MsgMakeCollectionPermanentResponse {
  return {};
}
/**
 * @name MsgMakeCollectionPermanentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.MsgMakeCollectionPermanentResponse
 */
export const MsgMakeCollectionPermanentResponse = {
  typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanentResponse",
  encode(_: MsgMakeCollectionPermanentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakeCollectionPermanentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeCollectionPermanentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgMakeCollectionPermanentResponse>): MsgMakeCollectionPermanentResponse {
    const message = createBaseMsgMakeCollectionPermanentResponse();
    return message;
  },
  fromAmino(_: MsgMakeCollectionPermanentResponseAmino): MsgMakeCollectionPermanentResponse {
    const message = createBaseMsgMakeCollectionPermanentResponse();
    return message;
  },
  toAmino(_: MsgMakeCollectionPermanentResponse): MsgMakeCollectionPermanentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMakeCollectionPermanentResponseAminoMsg): MsgMakeCollectionPermanentResponse {
    return MsgMakeCollectionPermanentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMakeCollectionPermanentResponseProtoMsg): MsgMakeCollectionPermanentResponse {
    return MsgMakeCollectionPermanentResponse.decode(message.value);
  },
  toProto(message: MsgMakeCollectionPermanentResponse): Uint8Array {
    return MsgMakeCollectionPermanentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMakeCollectionPermanentResponse): MsgMakeCollectionPermanentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanentResponse",
      value: MsgMakeCollectionPermanentResponse.encode(message).finish()
    };
  }
};