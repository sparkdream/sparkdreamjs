//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { FlagTargetType, Collection, CollectionAmino, Item, ItemAmino, Collaborator, CollaboratorAmino, CurationSummary, CurationSummaryAmino, CurationReview, CurationReviewAmino, SponsorshipRequest, SponsorshipRequestAmino, CollectionFlag, CollectionFlagAmino, HideRecord, HideRecordAmino, Endorsement, EndorsementAmino } from "./types";
import { Params, ParamsAmino } from "./params";
import { CuratorActivity, CuratorActivityAmino } from "./curator_activity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * @name QueryParamsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * @name QueryParamsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * @name QueryParamsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QueryCollectionRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionRequest
 */
export interface QueryCollectionRequest {
  id: bigint;
}
export interface QueryCollectionRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionRequest";
  value: Uint8Array;
}
/**
 * @name QueryCollectionRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionRequest
 */
export interface QueryCollectionRequestAmino {
  id?: string;
}
export interface QueryCollectionRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionRequest";
  value: QueryCollectionRequestAmino;
}
/**
 * @name QueryCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionResponse
 */
export interface QueryCollectionResponse {
  collection: Collection;
}
export interface QueryCollectionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionResponse";
  value: Uint8Array;
}
/**
 * @name QueryCollectionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionResponse
 */
export interface QueryCollectionResponseAmino {
  collection?: CollectionAmino;
}
export interface QueryCollectionResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionResponse";
  value: QueryCollectionResponseAmino;
}
/**
 * @name QueryCollectionsByOwnerRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByOwnerRequest
 */
export interface QueryCollectionsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryCollectionsByOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByOwnerRequest";
  value: Uint8Array;
}
/**
 * @name QueryCollectionsByOwnerRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByOwnerRequest
 */
export interface QueryCollectionsByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCollectionsByOwnerRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionsByOwnerRequest";
  value: QueryCollectionsByOwnerRequestAmino;
}
/**
 * @name QueryCollectionsByOwnerResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByOwnerResponse
 */
export interface QueryCollectionsByOwnerResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryCollectionsByOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByOwnerResponse";
  value: Uint8Array;
}
/**
 * @name QueryCollectionsByOwnerResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByOwnerResponse
 */
export interface QueryCollectionsByOwnerResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCollectionsByOwnerResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionsByOwnerResponse";
  value: QueryCollectionsByOwnerResponseAmino;
}
/**
 * @name QueryPublicCollectionsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsRequest
 */
export interface QueryPublicCollectionsRequest {
  pagination?: PageRequest;
}
export interface QueryPublicCollectionsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsRequest";
  value: Uint8Array;
}
/**
 * @name QueryPublicCollectionsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsRequest
 */
export interface QueryPublicCollectionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPublicCollectionsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryPublicCollectionsRequest";
  value: QueryPublicCollectionsRequestAmino;
}
/**
 * @name QueryPublicCollectionsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsResponse
 */
export interface QueryPublicCollectionsResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryPublicCollectionsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsResponse";
  value: Uint8Array;
}
/**
 * @name QueryPublicCollectionsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsResponse
 */
export interface QueryPublicCollectionsResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPublicCollectionsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryPublicCollectionsResponse";
  value: QueryPublicCollectionsResponseAmino;
}
/**
 * @name QueryPublicCollectionsByTypeRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest
 */
export interface QueryPublicCollectionsByTypeRequest {
  collectionType: bigint;
  pagination?: PageRequest;
}
export interface QueryPublicCollectionsByTypeRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest";
  value: Uint8Array;
}
/**
 * @name QueryPublicCollectionsByTypeRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest
 */
export interface QueryPublicCollectionsByTypeRequestAmino {
  collection_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPublicCollectionsByTypeRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest";
  value: QueryPublicCollectionsByTypeRequestAmino;
}
/**
 * @name QueryPublicCollectionsByTypeResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse
 */
export interface QueryPublicCollectionsByTypeResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryPublicCollectionsByTypeResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse";
  value: Uint8Array;
}
/**
 * @name QueryPublicCollectionsByTypeResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse
 */
export interface QueryPublicCollectionsByTypeResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPublicCollectionsByTypeResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse";
  value: QueryPublicCollectionsByTypeResponseAmino;
}
/**
 * @name QueryCollectionsByCollaboratorRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest
 */
export interface QueryCollectionsByCollaboratorRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryCollectionsByCollaboratorRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest";
  value: Uint8Array;
}
/**
 * @name QueryCollectionsByCollaboratorRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest
 */
export interface QueryCollectionsByCollaboratorRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCollectionsByCollaboratorRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest";
  value: QueryCollectionsByCollaboratorRequestAmino;
}
/**
 * @name QueryCollectionsByCollaboratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse
 */
export interface QueryCollectionsByCollaboratorResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryCollectionsByCollaboratorResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse";
  value: Uint8Array;
}
/**
 * @name QueryCollectionsByCollaboratorResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse
 */
export interface QueryCollectionsByCollaboratorResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCollectionsByCollaboratorResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse";
  value: QueryCollectionsByCollaboratorResponseAmino;
}
/**
 * @name QueryItemRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemRequest
 */
export interface QueryItemRequest {
  id: bigint;
}
export interface QueryItemRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryItemRequest";
  value: Uint8Array;
}
/**
 * @name QueryItemRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemRequest
 */
export interface QueryItemRequestAmino {
  id?: string;
}
export interface QueryItemRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryItemRequest";
  value: QueryItemRequestAmino;
}
/**
 * @name QueryItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemResponse
 */
export interface QueryItemResponse {
  item: Item;
}
export interface QueryItemResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryItemResponse";
  value: Uint8Array;
}
/**
 * @name QueryItemResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemResponse
 */
export interface QueryItemResponseAmino {
  item?: ItemAmino;
}
export interface QueryItemResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryItemResponse";
  value: QueryItemResponseAmino;
}
/**
 * @name QueryItemsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsRequest
 */
export interface QueryItemsRequest {
  collectionId: bigint;
  pagination?: PageRequest;
}
export interface QueryItemsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryItemsRequest";
  value: Uint8Array;
}
/**
 * @name QueryItemsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsRequest
 */
export interface QueryItemsRequestAmino {
  collection_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryItemsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryItemsRequest";
  value: QueryItemsRequestAmino;
}
/**
 * @name QueryItemsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsResponse
 */
export interface QueryItemsResponse {
  items: Item[];
  pagination?: PageResponse;
}
export interface QueryItemsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryItemsResponse";
  value: Uint8Array;
}
/**
 * @name QueryItemsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsResponse
 */
export interface QueryItemsResponseAmino {
  items?: ItemAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryItemsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryItemsResponse";
  value: QueryItemsResponseAmino;
}
/**
 * @name QueryItemsByOwnerRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsByOwnerRequest
 */
export interface QueryItemsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryItemsByOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryItemsByOwnerRequest";
  value: Uint8Array;
}
/**
 * @name QueryItemsByOwnerRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsByOwnerRequest
 */
export interface QueryItemsByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryItemsByOwnerRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryItemsByOwnerRequest";
  value: QueryItemsByOwnerRequestAmino;
}
/**
 * @name QueryItemsByOwnerResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsByOwnerResponse
 */
export interface QueryItemsByOwnerResponse {
  items: Item[];
  pagination?: PageResponse;
}
export interface QueryItemsByOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryItemsByOwnerResponse";
  value: Uint8Array;
}
/**
 * @name QueryItemsByOwnerResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsByOwnerResponse
 */
export interface QueryItemsByOwnerResponseAmino {
  items?: ItemAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryItemsByOwnerResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryItemsByOwnerResponse";
  value: QueryItemsByOwnerResponseAmino;
}
/**
 * @name QueryCollaboratorsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollaboratorsRequest
 */
export interface QueryCollaboratorsRequest {
  collectionId: bigint;
}
export interface QueryCollaboratorsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollaboratorsRequest";
  value: Uint8Array;
}
/**
 * @name QueryCollaboratorsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollaboratorsRequest
 */
export interface QueryCollaboratorsRequestAmino {
  collection_id?: string;
}
export interface QueryCollaboratorsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollaboratorsRequest";
  value: QueryCollaboratorsRequestAmino;
}
/**
 * @name QueryCollaboratorsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollaboratorsResponse
 */
export interface QueryCollaboratorsResponse {
  collaborators: Collaborator[];
}
export interface QueryCollaboratorsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollaboratorsResponse";
  value: Uint8Array;
}
/**
 * @name QueryCollaboratorsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollaboratorsResponse
 */
export interface QueryCollaboratorsResponseAmino {
  collaborators?: CollaboratorAmino[];
}
export interface QueryCollaboratorsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollaboratorsResponse";
  value: QueryCollaboratorsResponseAmino;
}
/**
 * @name QueryCuratorActivityRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCuratorActivityRequest
 */
export interface QueryCuratorActivityRequest {
  address: string;
}
export interface QueryCuratorActivityRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCuratorActivityRequest";
  value: Uint8Array;
}
/**
 * @name QueryCuratorActivityRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCuratorActivityRequest
 */
export interface QueryCuratorActivityRequestAmino {
  address?: string;
}
export interface QueryCuratorActivityRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCuratorActivityRequest";
  value: QueryCuratorActivityRequestAmino;
}
/**
 * @name QueryCuratorActivityResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCuratorActivityResponse
 */
export interface QueryCuratorActivityResponse {
  activity: CuratorActivity;
}
export interface QueryCuratorActivityResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCuratorActivityResponse";
  value: Uint8Array;
}
/**
 * @name QueryCuratorActivityResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCuratorActivityResponse
 */
export interface QueryCuratorActivityResponseAmino {
  activity?: CuratorActivityAmino;
}
export interface QueryCuratorActivityResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCuratorActivityResponse";
  value: QueryCuratorActivityResponseAmino;
}
/**
 * @name QueryCurationSummaryRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationSummaryRequest
 */
export interface QueryCurationSummaryRequest {
  collectionId: bigint;
}
export interface QueryCurationSummaryRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCurationSummaryRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurationSummaryRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationSummaryRequest
 */
export interface QueryCurationSummaryRequestAmino {
  collection_id?: string;
}
export interface QueryCurationSummaryRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCurationSummaryRequest";
  value: QueryCurationSummaryRequestAmino;
}
/**
 * @name QueryCurationSummaryResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationSummaryResponse
 */
export interface QueryCurationSummaryResponse {
  summary: CurationSummary;
}
export interface QueryCurationSummaryResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCurationSummaryResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurationSummaryResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationSummaryResponse
 */
export interface QueryCurationSummaryResponseAmino {
  summary?: CurationSummaryAmino;
}
export interface QueryCurationSummaryResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCurationSummaryResponse";
  value: QueryCurationSummaryResponseAmino;
}
/**
 * @name QueryCurationReviewsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsRequest
 */
export interface QueryCurationReviewsRequest {
  collectionId: bigint;
  pagination?: PageRequest;
}
export interface QueryCurationReviewsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurationReviewsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsRequest
 */
export interface QueryCurationReviewsRequestAmino {
  collection_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCurationReviewsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCurationReviewsRequest";
  value: QueryCurationReviewsRequestAmino;
}
/**
 * @name QueryCurationReviewsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsResponse
 */
export interface QueryCurationReviewsResponse {
  reviews: CurationReview[];
  pagination?: PageResponse;
}
export interface QueryCurationReviewsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurationReviewsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsResponse
 */
export interface QueryCurationReviewsResponseAmino {
  reviews?: CurationReviewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCurationReviewsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCurationReviewsResponse";
  value: QueryCurationReviewsResponseAmino;
}
/**
 * @name QueryCurationReviewsByCuratorRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest
 */
export interface QueryCurationReviewsByCuratorRequest {
  curator: string;
  pagination?: PageRequest;
}
export interface QueryCurationReviewsByCuratorRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurationReviewsByCuratorRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest
 */
export interface QueryCurationReviewsByCuratorRequestAmino {
  curator?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCurationReviewsByCuratorRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest";
  value: QueryCurationReviewsByCuratorRequestAmino;
}
/**
 * @name QueryCurationReviewsByCuratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse
 */
export interface QueryCurationReviewsByCuratorResponse {
  reviews: CurationReview[];
  pagination?: PageResponse;
}
export interface QueryCurationReviewsByCuratorResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurationReviewsByCuratorResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse
 */
export interface QueryCurationReviewsByCuratorResponseAmino {
  reviews?: CurationReviewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCurationReviewsByCuratorResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse";
  value: QueryCurationReviewsByCuratorResponseAmino;
}
/**
 * @name QuerySponsorshipRequestRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestRequest
 */
export interface QuerySponsorshipRequestRequest {
  collectionId: bigint;
}
export interface QuerySponsorshipRequestRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestRequest";
  value: Uint8Array;
}
/**
 * @name QuerySponsorshipRequestRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestRequest
 */
export interface QuerySponsorshipRequestRequestAmino {
  collection_id?: string;
}
export interface QuerySponsorshipRequestRequestAminoMsg {
  type: "/sparkdream.collect.v1.QuerySponsorshipRequestRequest";
  value: QuerySponsorshipRequestRequestAmino;
}
/**
 * @name QuerySponsorshipRequestResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestResponse
 */
export interface QuerySponsorshipRequestResponse {
  sponsorshipRequest: SponsorshipRequest;
}
export interface QuerySponsorshipRequestResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestResponse";
  value: Uint8Array;
}
/**
 * @name QuerySponsorshipRequestResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestResponse
 */
export interface QuerySponsorshipRequestResponseAmino {
  sponsorship_request?: SponsorshipRequestAmino;
}
export interface QuerySponsorshipRequestResponseAminoMsg {
  type: "/sparkdream.collect.v1.QuerySponsorshipRequestResponse";
  value: QuerySponsorshipRequestResponseAmino;
}
/**
 * @name QuerySponsorshipRequestsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestsRequest
 */
export interface QuerySponsorshipRequestsRequest {
  pagination?: PageRequest;
}
export interface QuerySponsorshipRequestsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestsRequest";
  value: Uint8Array;
}
/**
 * @name QuerySponsorshipRequestsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestsRequest
 */
export interface QuerySponsorshipRequestsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QuerySponsorshipRequestsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QuerySponsorshipRequestsRequest";
  value: QuerySponsorshipRequestsRequestAmino;
}
/**
 * @name QuerySponsorshipRequestsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestsResponse
 */
export interface QuerySponsorshipRequestsResponse {
  sponsorshipRequests: SponsorshipRequest[];
  pagination?: PageResponse;
}
export interface QuerySponsorshipRequestsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestsResponse";
  value: Uint8Array;
}
/**
 * @name QuerySponsorshipRequestsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestsResponse
 */
export interface QuerySponsorshipRequestsResponseAmino {
  sponsorship_requests?: SponsorshipRequestAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySponsorshipRequestsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QuerySponsorshipRequestsResponse";
  value: QuerySponsorshipRequestsResponseAmino;
}
/**
 * QueryContentFlagRequest defines the QueryContentFlagRequest message.
 * @name QueryContentFlagRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryContentFlagRequest
 */
export interface QueryContentFlagRequest {
  targetId: bigint;
  targetType: FlagTargetType;
}
export interface QueryContentFlagRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryContentFlagRequest";
  value: Uint8Array;
}
/**
 * QueryContentFlagRequest defines the QueryContentFlagRequest message.
 * @name QueryContentFlagRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryContentFlagRequest
 */
export interface QueryContentFlagRequestAmino {
  target_id?: string;
  target_type?: FlagTargetType;
}
export interface QueryContentFlagRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryContentFlagRequest";
  value: QueryContentFlagRequestAmino;
}
/**
 * QueryContentFlagResponse defines the QueryContentFlagResponse message.
 * @name QueryContentFlagResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryContentFlagResponse
 */
export interface QueryContentFlagResponse {
  collectionFlag: CollectionFlag;
}
export interface QueryContentFlagResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryContentFlagResponse";
  value: Uint8Array;
}
/**
 * QueryContentFlagResponse defines the QueryContentFlagResponse message.
 * @name QueryContentFlagResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryContentFlagResponse
 */
export interface QueryContentFlagResponseAmino {
  collection_flag?: CollectionFlagAmino;
}
export interface QueryContentFlagResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryContentFlagResponse";
  value: QueryContentFlagResponseAmino;
}
/**
 * QueryFlaggedContentRequest defines the QueryFlaggedContentRequest message.
 * @name QueryFlaggedContentRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryFlaggedContentRequest
 */
export interface QueryFlaggedContentRequest {
  pagination?: PageRequest;
}
export interface QueryFlaggedContentRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryFlaggedContentRequest";
  value: Uint8Array;
}
/**
 * QueryFlaggedContentRequest defines the QueryFlaggedContentRequest message.
 * @name QueryFlaggedContentRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryFlaggedContentRequest
 */
export interface QueryFlaggedContentRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryFlaggedContentRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryFlaggedContentRequest";
  value: QueryFlaggedContentRequestAmino;
}
/**
 * QueryFlaggedContentResponse defines the QueryFlaggedContentResponse message.
 * @name QueryFlaggedContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryFlaggedContentResponse
 */
export interface QueryFlaggedContentResponse {
  collectionFlags: CollectionFlag[];
  pagination?: PageResponse;
}
export interface QueryFlaggedContentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryFlaggedContentResponse";
  value: Uint8Array;
}
/**
 * QueryFlaggedContentResponse defines the QueryFlaggedContentResponse message.
 * @name QueryFlaggedContentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryFlaggedContentResponse
 */
export interface QueryFlaggedContentResponseAmino {
  collection_flags?: CollectionFlagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryFlaggedContentResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryFlaggedContentResponse";
  value: QueryFlaggedContentResponseAmino;
}
/**
 * QueryHideRecordRequest defines the QueryHideRecordRequest message.
 * @name QueryHideRecordRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordRequest
 */
export interface QueryHideRecordRequest {
  id: bigint;
}
export interface QueryHideRecordRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordRequest";
  value: Uint8Array;
}
/**
 * QueryHideRecordRequest defines the QueryHideRecordRequest message.
 * @name QueryHideRecordRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordRequest
 */
export interface QueryHideRecordRequestAmino {
  id?: string;
}
export interface QueryHideRecordRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryHideRecordRequest";
  value: QueryHideRecordRequestAmino;
}
/**
 * QueryHideRecordResponse defines the QueryHideRecordResponse message.
 * @name QueryHideRecordResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordResponse
 */
export interface QueryHideRecordResponse {
  hideRecord: HideRecord;
}
export interface QueryHideRecordResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordResponse";
  value: Uint8Array;
}
/**
 * QueryHideRecordResponse defines the QueryHideRecordResponse message.
 * @name QueryHideRecordResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordResponse
 */
export interface QueryHideRecordResponseAmino {
  hide_record?: HideRecordAmino;
}
export interface QueryHideRecordResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryHideRecordResponse";
  value: QueryHideRecordResponseAmino;
}
/**
 * QueryHideRecordsByTargetRequest defines the QueryHideRecordsByTargetRequest message.
 * @name QueryHideRecordsByTargetRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordsByTargetRequest
 */
export interface QueryHideRecordsByTargetRequest {
  targetId: bigint;
  targetType: FlagTargetType;
}
export interface QueryHideRecordsByTargetRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordsByTargetRequest";
  value: Uint8Array;
}
/**
 * QueryHideRecordsByTargetRequest defines the QueryHideRecordsByTargetRequest message.
 * @name QueryHideRecordsByTargetRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordsByTargetRequest
 */
export interface QueryHideRecordsByTargetRequestAmino {
  target_id?: string;
  target_type?: FlagTargetType;
}
export interface QueryHideRecordsByTargetRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryHideRecordsByTargetRequest";
  value: QueryHideRecordsByTargetRequestAmino;
}
/**
 * QueryHideRecordsByTargetResponse defines the QueryHideRecordsByTargetResponse message.
 * @name QueryHideRecordsByTargetResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordsByTargetResponse
 */
export interface QueryHideRecordsByTargetResponse {
  hideRecords: HideRecord[];
}
export interface QueryHideRecordsByTargetResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordsByTargetResponse";
  value: Uint8Array;
}
/**
 * QueryHideRecordsByTargetResponse defines the QueryHideRecordsByTargetResponse message.
 * @name QueryHideRecordsByTargetResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordsByTargetResponse
 */
export interface QueryHideRecordsByTargetResponseAmino {
  hide_records?: HideRecordAmino[];
}
export interface QueryHideRecordsByTargetResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryHideRecordsByTargetResponse";
  value: QueryHideRecordsByTargetResponseAmino;
}
/**
 * QueryPendingCollectionsRequest defines the QueryPendingCollectionsRequest message.
 * @name QueryPendingCollectionsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPendingCollectionsRequest
 */
export interface QueryPendingCollectionsRequest {
  pagination?: PageRequest;
}
export interface QueryPendingCollectionsRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryPendingCollectionsRequest";
  value: Uint8Array;
}
/**
 * QueryPendingCollectionsRequest defines the QueryPendingCollectionsRequest message.
 * @name QueryPendingCollectionsRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPendingCollectionsRequest
 */
export interface QueryPendingCollectionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPendingCollectionsRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryPendingCollectionsRequest";
  value: QueryPendingCollectionsRequestAmino;
}
/**
 * QueryPendingCollectionsResponse defines the QueryPendingCollectionsResponse message.
 * @name QueryPendingCollectionsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPendingCollectionsResponse
 */
export interface QueryPendingCollectionsResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryPendingCollectionsResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryPendingCollectionsResponse";
  value: Uint8Array;
}
/**
 * QueryPendingCollectionsResponse defines the QueryPendingCollectionsResponse message.
 * @name QueryPendingCollectionsResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPendingCollectionsResponse
 */
export interface QueryPendingCollectionsResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPendingCollectionsResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryPendingCollectionsResponse";
  value: QueryPendingCollectionsResponseAmino;
}
/**
 * QueryEndorsementRequest defines the QueryEndorsementRequest message.
 * @name QueryEndorsementRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryEndorsementRequest
 */
export interface QueryEndorsementRequest {
  collectionId: bigint;
}
export interface QueryEndorsementRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryEndorsementRequest";
  value: Uint8Array;
}
/**
 * QueryEndorsementRequest defines the QueryEndorsementRequest message.
 * @name QueryEndorsementRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryEndorsementRequest
 */
export interface QueryEndorsementRequestAmino {
  collection_id?: string;
}
export interface QueryEndorsementRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryEndorsementRequest";
  value: QueryEndorsementRequestAmino;
}
/**
 * QueryEndorsementResponse defines the QueryEndorsementResponse message.
 * @name QueryEndorsementResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryEndorsementResponse
 */
export interface QueryEndorsementResponse {
  endorsement: Endorsement;
}
export interface QueryEndorsementResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryEndorsementResponse";
  value: Uint8Array;
}
/**
 * QueryEndorsementResponse defines the QueryEndorsementResponse message.
 * @name QueryEndorsementResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryEndorsementResponse
 */
export interface QueryEndorsementResponseAmino {
  endorsement?: EndorsementAmino;
}
export interface QueryEndorsementResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryEndorsementResponse";
  value: QueryEndorsementResponseAmino;
}
/**
 * QueryCollectionsByContentRequest returns collections referencing on-chain content.
 * @name QueryCollectionsByContentRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByContentRequest
 */
export interface QueryCollectionsByContentRequest {
  module: string;
  entityType: string;
  entityId: string;
  pagination?: PageRequest;
}
export interface QueryCollectionsByContentRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByContentRequest";
  value: Uint8Array;
}
/**
 * QueryCollectionsByContentRequest returns collections referencing on-chain content.
 * @name QueryCollectionsByContentRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByContentRequest
 */
export interface QueryCollectionsByContentRequestAmino {
  module?: string;
  entity_type?: string;
  entity_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryCollectionsByContentRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionsByContentRequest";
  value: QueryCollectionsByContentRequestAmino;
}
/**
 * QueryCollectionsByContentResponse is the response for CollectionsByContent.
 * @name QueryCollectionsByContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByContentResponse
 */
export interface QueryCollectionsByContentResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryCollectionsByContentResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByContentResponse";
  value: Uint8Array;
}
/**
 * QueryCollectionsByContentResponse is the response for CollectionsByContent.
 * @name QueryCollectionsByContentResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByContentResponse
 */
export interface QueryCollectionsByContentResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCollectionsByContentResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionsByContentResponse";
  value: QueryCollectionsByContentResponseAmino;
}
/**
 * QueryCollectionConvictionRequest defines the QueryCollectionConviction request.
 * @name QueryCollectionConvictionRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionConvictionRequest
 */
export interface QueryCollectionConvictionRequest {
  collectionId: bigint;
}
export interface QueryCollectionConvictionRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionConvictionRequest";
  value: Uint8Array;
}
/**
 * QueryCollectionConvictionRequest defines the QueryCollectionConviction request.
 * @name QueryCollectionConvictionRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionConvictionRequest
 */
export interface QueryCollectionConvictionRequestAmino {
  collection_id?: string;
}
export interface QueryCollectionConvictionRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionConvictionRequest";
  value: QueryCollectionConvictionRequestAmino;
}
/**
 * QueryCollectionConvictionResponse defines the QueryCollectionConviction response.
 * @name QueryCollectionConvictionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionConvictionResponse
 */
export interface QueryCollectionConvictionResponse {
  convictionScore: string;
  stakeCount: number;
  totalStaked: string;
  authorBond: string;
}
export interface QueryCollectionConvictionResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionConvictionResponse";
  value: Uint8Array;
}
/**
 * QueryCollectionConvictionResponse defines the QueryCollectionConviction response.
 * @name QueryCollectionConvictionResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionConvictionResponse
 */
export interface QueryCollectionConvictionResponseAmino {
  conviction_score?: string;
  stake_count?: number;
  total_staked?: string;
  author_bond?: string;
}
export interface QueryCollectionConvictionResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryCollectionConvictionResponse";
  value: QueryCollectionConvictionResponseAmino;
}
/**
 * QueryListCollectionsByTagRequest defines the QueryListCollectionsByTag request.
 * @name QueryListCollectionsByTagRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryListCollectionsByTagRequest
 */
export interface QueryListCollectionsByTagRequest {
  tag: string;
  pagination?: PageRequest;
}
export interface QueryListCollectionsByTagRequestProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryListCollectionsByTagRequest";
  value: Uint8Array;
}
/**
 * QueryListCollectionsByTagRequest defines the QueryListCollectionsByTag request.
 * @name QueryListCollectionsByTagRequestAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryListCollectionsByTagRequest
 */
export interface QueryListCollectionsByTagRequestAmino {
  tag?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListCollectionsByTagRequestAminoMsg {
  type: "/sparkdream.collect.v1.QueryListCollectionsByTagRequest";
  value: QueryListCollectionsByTagRequestAmino;
}
/**
 * QueryListCollectionsByTagResponse defines the QueryListCollectionsByTag response.
 * @name QueryListCollectionsByTagResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryListCollectionsByTagResponse
 */
export interface QueryListCollectionsByTagResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryListCollectionsByTagResponseProtoMsg {
  typeUrl: "/sparkdream.collect.v1.QueryListCollectionsByTagResponse";
  value: Uint8Array;
}
/**
 * QueryListCollectionsByTagResponse defines the QueryListCollectionsByTag response.
 * @name QueryListCollectionsByTagResponseAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryListCollectionsByTagResponse
 */
export interface QueryListCollectionsByTagResponseAmino {
  collections?: CollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListCollectionsByTagResponseAminoMsg {
  type: "/sparkdream.collect.v1.QueryListCollectionsByTagResponse";
  value: QueryListCollectionsByTagResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * @name QueryParamsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * @name QueryParamsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * @name QueryCollectionRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionRequest
 */
export const QueryCollectionRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionRequest",
  encode(message: QueryCollectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
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
  fromPartial(object: DeepPartial<QueryCollectionRequest>): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCollectionRequestAmino): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryCollectionRequest): QueryCollectionRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionRequestAminoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionRequestProtoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.decode(message.value);
  },
  toProto(message: QueryCollectionRequest): Uint8Array {
    return QueryCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionRequest): QueryCollectionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionRequest",
      value: QueryCollectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: Collection.fromPartial({})
  };
}
/**
 * @name QueryCollectionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionResponse
 */
export const QueryCollectionResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionResponse",
  encode(message: QueryCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionResponse>): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionResponseAmino): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromAmino(object.collection);
    }
    return message;
  },
  toAmino(message: QueryCollectionResponse): QueryCollectionResponseAmino {
    const obj: any = {};
    obj.collection = message.collection ? Collection.toAmino(message.collection) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionResponseAminoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionResponseProtoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.decode(message.value);
  },
  toProto(message: QueryCollectionResponse): Uint8Array {
    return QueryCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionResponse): QueryCollectionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionResponse",
      value: QueryCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionsByOwnerRequest(): QueryCollectionsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
/**
 * @name QueryCollectionsByOwnerRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByOwnerRequest
 */
export const QueryCollectionsByOwnerRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByOwnerRequest",
  encode(message: QueryCollectionsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionsByOwnerRequest>): QueryCollectionsByOwnerRequest {
    const message = createBaseQueryCollectionsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionsByOwnerRequestAmino): QueryCollectionsByOwnerRequest {
    const message = createBaseQueryCollectionsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionsByOwnerRequest): QueryCollectionsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionsByOwnerRequestAminoMsg): QueryCollectionsByOwnerRequest {
    return QueryCollectionsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionsByOwnerRequestProtoMsg): QueryCollectionsByOwnerRequest {
    return QueryCollectionsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryCollectionsByOwnerRequest): Uint8Array {
    return QueryCollectionsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionsByOwnerRequest): QueryCollectionsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionsByOwnerRequest",
      value: QueryCollectionsByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionsByOwnerResponse(): QueryCollectionsByOwnerResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * @name QueryCollectionsByOwnerResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByOwnerResponse
 */
export const QueryCollectionsByOwnerResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByOwnerResponse",
  encode(message: QueryCollectionsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionsByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionsByOwnerResponse>): QueryCollectionsByOwnerResponse {
    const message = createBaseQueryCollectionsByOwnerResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionsByOwnerResponseAmino): QueryCollectionsByOwnerResponse {
    const message = createBaseQueryCollectionsByOwnerResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionsByOwnerResponse): QueryCollectionsByOwnerResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionsByOwnerResponseAminoMsg): QueryCollectionsByOwnerResponse {
    return QueryCollectionsByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionsByOwnerResponseProtoMsg): QueryCollectionsByOwnerResponse {
    return QueryCollectionsByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryCollectionsByOwnerResponse): Uint8Array {
    return QueryCollectionsByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionsByOwnerResponse): QueryCollectionsByOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionsByOwnerResponse",
      value: QueryCollectionsByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublicCollectionsRequest(): QueryPublicCollectionsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryPublicCollectionsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsRequest
 */
export const QueryPublicCollectionsRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsRequest",
  encode(message: QueryPublicCollectionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublicCollectionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublicCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPublicCollectionsRequest>): QueryPublicCollectionsRequest {
    const message = createBaseQueryPublicCollectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPublicCollectionsRequestAmino): QueryPublicCollectionsRequest {
    const message = createBaseQueryPublicCollectionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPublicCollectionsRequest): QueryPublicCollectionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublicCollectionsRequestAminoMsg): QueryPublicCollectionsRequest {
    return QueryPublicCollectionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublicCollectionsRequestProtoMsg): QueryPublicCollectionsRequest {
    return QueryPublicCollectionsRequest.decode(message.value);
  },
  toProto(message: QueryPublicCollectionsRequest): Uint8Array {
    return QueryPublicCollectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublicCollectionsRequest): QueryPublicCollectionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsRequest",
      value: QueryPublicCollectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublicCollectionsResponse(): QueryPublicCollectionsResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * @name QueryPublicCollectionsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsResponse
 */
export const QueryPublicCollectionsResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsResponse",
  encode(message: QueryPublicCollectionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublicCollectionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublicCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPublicCollectionsResponse>): QueryPublicCollectionsResponse {
    const message = createBaseQueryPublicCollectionsResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPublicCollectionsResponseAmino): QueryPublicCollectionsResponse {
    const message = createBaseQueryPublicCollectionsResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPublicCollectionsResponse): QueryPublicCollectionsResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublicCollectionsResponseAminoMsg): QueryPublicCollectionsResponse {
    return QueryPublicCollectionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublicCollectionsResponseProtoMsg): QueryPublicCollectionsResponse {
    return QueryPublicCollectionsResponse.decode(message.value);
  },
  toProto(message: QueryPublicCollectionsResponse): Uint8Array {
    return QueryPublicCollectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublicCollectionsResponse): QueryPublicCollectionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsResponse",
      value: QueryPublicCollectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublicCollectionsByTypeRequest(): QueryPublicCollectionsByTypeRequest {
  return {
    collectionType: BigInt(0),
    pagination: undefined
  };
}
/**
 * @name QueryPublicCollectionsByTypeRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest
 */
export const QueryPublicCollectionsByTypeRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest",
  encode(message: QueryPublicCollectionsByTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionType !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublicCollectionsByTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublicCollectionsByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionType = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPublicCollectionsByTypeRequest>): QueryPublicCollectionsByTypeRequest {
    const message = createBaseQueryPublicCollectionsByTypeRequest();
    message.collectionType = object.collectionType !== undefined && object.collectionType !== null ? BigInt(object.collectionType.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPublicCollectionsByTypeRequestAmino): QueryPublicCollectionsByTypeRequest {
    const message = createBaseQueryPublicCollectionsByTypeRequest();
    if (object.collection_type !== undefined && object.collection_type !== null) {
      message.collectionType = BigInt(object.collection_type);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPublicCollectionsByTypeRequest): QueryPublicCollectionsByTypeRequestAmino {
    const obj: any = {};
    obj.collection_type = message.collectionType !== BigInt(0) ? message.collectionType?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublicCollectionsByTypeRequestAminoMsg): QueryPublicCollectionsByTypeRequest {
    return QueryPublicCollectionsByTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublicCollectionsByTypeRequestProtoMsg): QueryPublicCollectionsByTypeRequest {
    return QueryPublicCollectionsByTypeRequest.decode(message.value);
  },
  toProto(message: QueryPublicCollectionsByTypeRequest): Uint8Array {
    return QueryPublicCollectionsByTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublicCollectionsByTypeRequest): QueryPublicCollectionsByTypeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeRequest",
      value: QueryPublicCollectionsByTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublicCollectionsByTypeResponse(): QueryPublicCollectionsByTypeResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * @name QueryPublicCollectionsByTypeResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse
 */
export const QueryPublicCollectionsByTypeResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse",
  encode(message: QueryPublicCollectionsByTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublicCollectionsByTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublicCollectionsByTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPublicCollectionsByTypeResponse>): QueryPublicCollectionsByTypeResponse {
    const message = createBaseQueryPublicCollectionsByTypeResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPublicCollectionsByTypeResponseAmino): QueryPublicCollectionsByTypeResponse {
    const message = createBaseQueryPublicCollectionsByTypeResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPublicCollectionsByTypeResponse): QueryPublicCollectionsByTypeResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublicCollectionsByTypeResponseAminoMsg): QueryPublicCollectionsByTypeResponse {
    return QueryPublicCollectionsByTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublicCollectionsByTypeResponseProtoMsg): QueryPublicCollectionsByTypeResponse {
    return QueryPublicCollectionsByTypeResponse.decode(message.value);
  },
  toProto(message: QueryPublicCollectionsByTypeResponse): Uint8Array {
    return QueryPublicCollectionsByTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublicCollectionsByTypeResponse): QueryPublicCollectionsByTypeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryPublicCollectionsByTypeResponse",
      value: QueryPublicCollectionsByTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionsByCollaboratorRequest(): QueryCollectionsByCollaboratorRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * @name QueryCollectionsByCollaboratorRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest
 */
export const QueryCollectionsByCollaboratorRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest",
  encode(message: QueryCollectionsByCollaboratorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionsByCollaboratorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByCollaboratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionsByCollaboratorRequest>): QueryCollectionsByCollaboratorRequest {
    const message = createBaseQueryCollectionsByCollaboratorRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionsByCollaboratorRequestAmino): QueryCollectionsByCollaboratorRequest {
    const message = createBaseQueryCollectionsByCollaboratorRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionsByCollaboratorRequest): QueryCollectionsByCollaboratorRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionsByCollaboratorRequestAminoMsg): QueryCollectionsByCollaboratorRequest {
    return QueryCollectionsByCollaboratorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionsByCollaboratorRequestProtoMsg): QueryCollectionsByCollaboratorRequest {
    return QueryCollectionsByCollaboratorRequest.decode(message.value);
  },
  toProto(message: QueryCollectionsByCollaboratorRequest): Uint8Array {
    return QueryCollectionsByCollaboratorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionsByCollaboratorRequest): QueryCollectionsByCollaboratorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorRequest",
      value: QueryCollectionsByCollaboratorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionsByCollaboratorResponse(): QueryCollectionsByCollaboratorResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * @name QueryCollectionsByCollaboratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse
 */
export const QueryCollectionsByCollaboratorResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse",
  encode(message: QueryCollectionsByCollaboratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionsByCollaboratorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByCollaboratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionsByCollaboratorResponse>): QueryCollectionsByCollaboratorResponse {
    const message = createBaseQueryCollectionsByCollaboratorResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionsByCollaboratorResponseAmino): QueryCollectionsByCollaboratorResponse {
    const message = createBaseQueryCollectionsByCollaboratorResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionsByCollaboratorResponse): QueryCollectionsByCollaboratorResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionsByCollaboratorResponseAminoMsg): QueryCollectionsByCollaboratorResponse {
    return QueryCollectionsByCollaboratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionsByCollaboratorResponseProtoMsg): QueryCollectionsByCollaboratorResponse {
    return QueryCollectionsByCollaboratorResponse.decode(message.value);
  },
  toProto(message: QueryCollectionsByCollaboratorResponse): Uint8Array {
    return QueryCollectionsByCollaboratorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionsByCollaboratorResponse): QueryCollectionsByCollaboratorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionsByCollaboratorResponse",
      value: QueryCollectionsByCollaboratorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryItemRequest(): QueryItemRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * @name QueryItemRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemRequest
 */
export const QueryItemRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryItemRequest",
  encode(message: QueryItemRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryItemRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryItemRequest();
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
  fromPartial(object: DeepPartial<QueryItemRequest>): QueryItemRequest {
    const message = createBaseQueryItemRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryItemRequestAmino): QueryItemRequest {
    const message = createBaseQueryItemRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryItemRequest): QueryItemRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryItemRequestAminoMsg): QueryItemRequest {
    return QueryItemRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryItemRequestProtoMsg): QueryItemRequest {
    return QueryItemRequest.decode(message.value);
  },
  toProto(message: QueryItemRequest): Uint8Array {
    return QueryItemRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryItemRequest): QueryItemRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryItemRequest",
      value: QueryItemRequest.encode(message).finish()
    };
  }
};
function createBaseQueryItemResponse(): QueryItemResponse {
  return {
    item: Item.fromPartial({})
  };
}
/**
 * @name QueryItemResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemResponse
 */
export const QueryItemResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryItemResponse",
  encode(message: QueryItemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryItemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = Item.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryItemResponse>): QueryItemResponse {
    const message = createBaseQueryItemResponse();
    message.item = object.item !== undefined && object.item !== null ? Item.fromPartial(object.item) : undefined;
    return message;
  },
  fromAmino(object: QueryItemResponseAmino): QueryItemResponse {
    const message = createBaseQueryItemResponse();
    if (object.item !== undefined && object.item !== null) {
      message.item = Item.fromAmino(object.item);
    }
    return message;
  },
  toAmino(message: QueryItemResponse): QueryItemResponseAmino {
    const obj: any = {};
    obj.item = message.item ? Item.toAmino(message.item) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryItemResponseAminoMsg): QueryItemResponse {
    return QueryItemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryItemResponseProtoMsg): QueryItemResponse {
    return QueryItemResponse.decode(message.value);
  },
  toProto(message: QueryItemResponse): Uint8Array {
    return QueryItemResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryItemResponse): QueryItemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryItemResponse",
      value: QueryItemResponse.encode(message).finish()
    };
  }
};
function createBaseQueryItemsRequest(): QueryItemsRequest {
  return {
    collectionId: BigInt(0),
    pagination: undefined
  };
}
/**
 * @name QueryItemsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsRequest
 */
export const QueryItemsRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryItemsRequest",
  encode(message: QueryItemsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryItemsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryItemsRequest>): QueryItemsRequest {
    const message = createBaseQueryItemsRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryItemsRequestAmino): QueryItemsRequest {
    const message = createBaseQueryItemsRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryItemsRequest): QueryItemsRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryItemsRequestAminoMsg): QueryItemsRequest {
    return QueryItemsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryItemsRequestProtoMsg): QueryItemsRequest {
    return QueryItemsRequest.decode(message.value);
  },
  toProto(message: QueryItemsRequest): Uint8Array {
    return QueryItemsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryItemsRequest): QueryItemsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryItemsRequest",
      value: QueryItemsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryItemsResponse(): QueryItemsResponse {
  return {
    items: [],
    pagination: undefined
  };
}
/**
 * @name QueryItemsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsResponse
 */
export const QueryItemsResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryItemsResponse",
  encode(message: QueryItemsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryItemsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryItemsResponse>): QueryItemsResponse {
    const message = createBaseQueryItemsResponse();
    message.items = object.items?.map(e => Item.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryItemsResponseAmino): QueryItemsResponse {
    const message = createBaseQueryItemsResponse();
    message.items = object.items?.map(e => Item.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryItemsResponse): QueryItemsResponseAmino {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryItemsResponseAminoMsg): QueryItemsResponse {
    return QueryItemsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryItemsResponseProtoMsg): QueryItemsResponse {
    return QueryItemsResponse.decode(message.value);
  },
  toProto(message: QueryItemsResponse): Uint8Array {
    return QueryItemsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryItemsResponse): QueryItemsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryItemsResponse",
      value: QueryItemsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryItemsByOwnerRequest(): QueryItemsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
/**
 * @name QueryItemsByOwnerRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsByOwnerRequest
 */
export const QueryItemsByOwnerRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryItemsByOwnerRequest",
  encode(message: QueryItemsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryItemsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryItemsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryItemsByOwnerRequest>): QueryItemsByOwnerRequest {
    const message = createBaseQueryItemsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryItemsByOwnerRequestAmino): QueryItemsByOwnerRequest {
    const message = createBaseQueryItemsByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryItemsByOwnerRequest): QueryItemsByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryItemsByOwnerRequestAminoMsg): QueryItemsByOwnerRequest {
    return QueryItemsByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryItemsByOwnerRequestProtoMsg): QueryItemsByOwnerRequest {
    return QueryItemsByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryItemsByOwnerRequest): Uint8Array {
    return QueryItemsByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryItemsByOwnerRequest): QueryItemsByOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryItemsByOwnerRequest",
      value: QueryItemsByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryItemsByOwnerResponse(): QueryItemsByOwnerResponse {
  return {
    items: [],
    pagination: undefined
  };
}
/**
 * @name QueryItemsByOwnerResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryItemsByOwnerResponse
 */
export const QueryItemsByOwnerResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryItemsByOwnerResponse",
  encode(message: QueryItemsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryItemsByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryItemsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryItemsByOwnerResponse>): QueryItemsByOwnerResponse {
    const message = createBaseQueryItemsByOwnerResponse();
    message.items = object.items?.map(e => Item.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryItemsByOwnerResponseAmino): QueryItemsByOwnerResponse {
    const message = createBaseQueryItemsByOwnerResponse();
    message.items = object.items?.map(e => Item.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryItemsByOwnerResponse): QueryItemsByOwnerResponseAmino {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryItemsByOwnerResponseAminoMsg): QueryItemsByOwnerResponse {
    return QueryItemsByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryItemsByOwnerResponseProtoMsg): QueryItemsByOwnerResponse {
    return QueryItemsByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryItemsByOwnerResponse): Uint8Array {
    return QueryItemsByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryItemsByOwnerResponse): QueryItemsByOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryItemsByOwnerResponse",
      value: QueryItemsByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollaboratorsRequest(): QueryCollaboratorsRequest {
  return {
    collectionId: BigInt(0)
  };
}
/**
 * @name QueryCollaboratorsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollaboratorsRequest
 */
export const QueryCollaboratorsRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCollaboratorsRequest",
  encode(message: QueryCollaboratorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollaboratorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollaboratorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollaboratorsRequest>): QueryCollaboratorsRequest {
    const message = createBaseQueryCollaboratorsRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCollaboratorsRequestAmino): QueryCollaboratorsRequest {
    const message = createBaseQueryCollaboratorsRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: QueryCollaboratorsRequest): QueryCollaboratorsRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollaboratorsRequestAminoMsg): QueryCollaboratorsRequest {
    return QueryCollaboratorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollaboratorsRequestProtoMsg): QueryCollaboratorsRequest {
    return QueryCollaboratorsRequest.decode(message.value);
  },
  toProto(message: QueryCollaboratorsRequest): Uint8Array {
    return QueryCollaboratorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollaboratorsRequest): QueryCollaboratorsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollaboratorsRequest",
      value: QueryCollaboratorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollaboratorsResponse(): QueryCollaboratorsResponse {
  return {
    collaborators: []
  };
}
/**
 * @name QueryCollaboratorsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollaboratorsResponse
 */
export const QueryCollaboratorsResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCollaboratorsResponse",
  encode(message: QueryCollaboratorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collaborators) {
      Collaborator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollaboratorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollaboratorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collaborators.push(Collaborator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollaboratorsResponse>): QueryCollaboratorsResponse {
    const message = createBaseQueryCollaboratorsResponse();
    message.collaborators = object.collaborators?.map(e => Collaborator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCollaboratorsResponseAmino): QueryCollaboratorsResponse {
    const message = createBaseQueryCollaboratorsResponse();
    message.collaborators = object.collaborators?.map(e => Collaborator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCollaboratorsResponse): QueryCollaboratorsResponseAmino {
    const obj: any = {};
    if (message.collaborators) {
      obj.collaborators = message.collaborators.map(e => e ? Collaborator.toAmino(e) : undefined);
    } else {
      obj.collaborators = message.collaborators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCollaboratorsResponseAminoMsg): QueryCollaboratorsResponse {
    return QueryCollaboratorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollaboratorsResponseProtoMsg): QueryCollaboratorsResponse {
    return QueryCollaboratorsResponse.decode(message.value);
  },
  toProto(message: QueryCollaboratorsResponse): Uint8Array {
    return QueryCollaboratorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollaboratorsResponse): QueryCollaboratorsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollaboratorsResponse",
      value: QueryCollaboratorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCuratorActivityRequest(): QueryCuratorActivityRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryCuratorActivityRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCuratorActivityRequest
 */
export const QueryCuratorActivityRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCuratorActivityRequest",
  encode(message: QueryCuratorActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCuratorActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCuratorActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCuratorActivityRequest>): QueryCuratorActivityRequest {
    const message = createBaseQueryCuratorActivityRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCuratorActivityRequestAmino): QueryCuratorActivityRequest {
    const message = createBaseQueryCuratorActivityRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCuratorActivityRequest): QueryCuratorActivityRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCuratorActivityRequestAminoMsg): QueryCuratorActivityRequest {
    return QueryCuratorActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCuratorActivityRequestProtoMsg): QueryCuratorActivityRequest {
    return QueryCuratorActivityRequest.decode(message.value);
  },
  toProto(message: QueryCuratorActivityRequest): Uint8Array {
    return QueryCuratorActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCuratorActivityRequest): QueryCuratorActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCuratorActivityRequest",
      value: QueryCuratorActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCuratorActivityResponse(): QueryCuratorActivityResponse {
  return {
    activity: CuratorActivity.fromPartial({})
  };
}
/**
 * @name QueryCuratorActivityResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCuratorActivityResponse
 */
export const QueryCuratorActivityResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCuratorActivityResponse",
  encode(message: QueryCuratorActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.activity !== undefined) {
      CuratorActivity.encode(message.activity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCuratorActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCuratorActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activity = CuratorActivity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCuratorActivityResponse>): QueryCuratorActivityResponse {
    const message = createBaseQueryCuratorActivityResponse();
    message.activity = object.activity !== undefined && object.activity !== null ? CuratorActivity.fromPartial(object.activity) : undefined;
    return message;
  },
  fromAmino(object: QueryCuratorActivityResponseAmino): QueryCuratorActivityResponse {
    const message = createBaseQueryCuratorActivityResponse();
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = CuratorActivity.fromAmino(object.activity);
    }
    return message;
  },
  toAmino(message: QueryCuratorActivityResponse): QueryCuratorActivityResponseAmino {
    const obj: any = {};
    obj.activity = message.activity ? CuratorActivity.toAmino(message.activity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCuratorActivityResponseAminoMsg): QueryCuratorActivityResponse {
    return QueryCuratorActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCuratorActivityResponseProtoMsg): QueryCuratorActivityResponse {
    return QueryCuratorActivityResponse.decode(message.value);
  },
  toProto(message: QueryCuratorActivityResponse): Uint8Array {
    return QueryCuratorActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCuratorActivityResponse): QueryCuratorActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCuratorActivityResponse",
      value: QueryCuratorActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurationSummaryRequest(): QueryCurationSummaryRequest {
  return {
    collectionId: BigInt(0)
  };
}
/**
 * @name QueryCurationSummaryRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationSummaryRequest
 */
export const QueryCurationSummaryRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCurationSummaryRequest",
  encode(message: QueryCurationSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurationSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurationSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurationSummaryRequest>): QueryCurationSummaryRequest {
    const message = createBaseQueryCurationSummaryRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurationSummaryRequestAmino): QueryCurationSummaryRequest {
    const message = createBaseQueryCurationSummaryRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: QueryCurationSummaryRequest): QueryCurationSummaryRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurationSummaryRequestAminoMsg): QueryCurationSummaryRequest {
    return QueryCurationSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurationSummaryRequestProtoMsg): QueryCurationSummaryRequest {
    return QueryCurationSummaryRequest.decode(message.value);
  },
  toProto(message: QueryCurationSummaryRequest): Uint8Array {
    return QueryCurationSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurationSummaryRequest): QueryCurationSummaryRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCurationSummaryRequest",
      value: QueryCurationSummaryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurationSummaryResponse(): QueryCurationSummaryResponse {
  return {
    summary: CurationSummary.fromPartial({})
  };
}
/**
 * @name QueryCurationSummaryResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationSummaryResponse
 */
export const QueryCurationSummaryResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCurationSummaryResponse",
  encode(message: QueryCurationSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.summary !== undefined) {
      CurationSummary.encode(message.summary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurationSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurationSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summary = CurationSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurationSummaryResponse>): QueryCurationSummaryResponse {
    const message = createBaseQueryCurationSummaryResponse();
    message.summary = object.summary !== undefined && object.summary !== null ? CurationSummary.fromPartial(object.summary) : undefined;
    return message;
  },
  fromAmino(object: QueryCurationSummaryResponseAmino): QueryCurationSummaryResponse {
    const message = createBaseQueryCurationSummaryResponse();
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = CurationSummary.fromAmino(object.summary);
    }
    return message;
  },
  toAmino(message: QueryCurationSummaryResponse): QueryCurationSummaryResponseAmino {
    const obj: any = {};
    obj.summary = message.summary ? CurationSummary.toAmino(message.summary) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurationSummaryResponseAminoMsg): QueryCurationSummaryResponse {
    return QueryCurationSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurationSummaryResponseProtoMsg): QueryCurationSummaryResponse {
    return QueryCurationSummaryResponse.decode(message.value);
  },
  toProto(message: QueryCurationSummaryResponse): Uint8Array {
    return QueryCurationSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurationSummaryResponse): QueryCurationSummaryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCurationSummaryResponse",
      value: QueryCurationSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurationReviewsRequest(): QueryCurationReviewsRequest {
  return {
    collectionId: BigInt(0),
    pagination: undefined
  };
}
/**
 * @name QueryCurationReviewsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsRequest
 */
export const QueryCurationReviewsRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsRequest",
  encode(message: QueryCurationReviewsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurationReviewsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurationReviewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurationReviewsRequest>): QueryCurationReviewsRequest {
    const message = createBaseQueryCurationReviewsRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCurationReviewsRequestAmino): QueryCurationReviewsRequest {
    const message = createBaseQueryCurationReviewsRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCurationReviewsRequest): QueryCurationReviewsRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurationReviewsRequestAminoMsg): QueryCurationReviewsRequest {
    return QueryCurationReviewsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurationReviewsRequestProtoMsg): QueryCurationReviewsRequest {
    return QueryCurationReviewsRequest.decode(message.value);
  },
  toProto(message: QueryCurationReviewsRequest): Uint8Array {
    return QueryCurationReviewsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurationReviewsRequest): QueryCurationReviewsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsRequest",
      value: QueryCurationReviewsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurationReviewsResponse(): QueryCurationReviewsResponse {
  return {
    reviews: [],
    pagination: undefined
  };
}
/**
 * @name QueryCurationReviewsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsResponse
 */
export const QueryCurationReviewsResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsResponse",
  encode(message: QueryCurationReviewsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reviews) {
      CurationReview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurationReviewsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurationReviewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviews.push(CurationReview.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurationReviewsResponse>): QueryCurationReviewsResponse {
    const message = createBaseQueryCurationReviewsResponse();
    message.reviews = object.reviews?.map(e => CurationReview.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCurationReviewsResponseAmino): QueryCurationReviewsResponse {
    const message = createBaseQueryCurationReviewsResponse();
    message.reviews = object.reviews?.map(e => CurationReview.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCurationReviewsResponse): QueryCurationReviewsResponseAmino {
    const obj: any = {};
    if (message.reviews) {
      obj.reviews = message.reviews.map(e => e ? CurationReview.toAmino(e) : undefined);
    } else {
      obj.reviews = message.reviews;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurationReviewsResponseAminoMsg): QueryCurationReviewsResponse {
    return QueryCurationReviewsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurationReviewsResponseProtoMsg): QueryCurationReviewsResponse {
    return QueryCurationReviewsResponse.decode(message.value);
  },
  toProto(message: QueryCurationReviewsResponse): Uint8Array {
    return QueryCurationReviewsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurationReviewsResponse): QueryCurationReviewsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsResponse",
      value: QueryCurationReviewsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurationReviewsByCuratorRequest(): QueryCurationReviewsByCuratorRequest {
  return {
    curator: "",
    pagination: undefined
  };
}
/**
 * @name QueryCurationReviewsByCuratorRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest
 */
export const QueryCurationReviewsByCuratorRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest",
  encode(message: QueryCurationReviewsByCuratorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.curator !== "") {
      writer.uint32(10).string(message.curator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurationReviewsByCuratorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurationReviewsByCuratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.curator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurationReviewsByCuratorRequest>): QueryCurationReviewsByCuratorRequest {
    const message = createBaseQueryCurationReviewsByCuratorRequest();
    message.curator = object.curator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCurationReviewsByCuratorRequestAmino): QueryCurationReviewsByCuratorRequest {
    const message = createBaseQueryCurationReviewsByCuratorRequest();
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = object.curator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCurationReviewsByCuratorRequest): QueryCurationReviewsByCuratorRequestAmino {
    const obj: any = {};
    obj.curator = message.curator === "" ? undefined : message.curator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurationReviewsByCuratorRequestAminoMsg): QueryCurationReviewsByCuratorRequest {
    return QueryCurationReviewsByCuratorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurationReviewsByCuratorRequestProtoMsg): QueryCurationReviewsByCuratorRequest {
    return QueryCurationReviewsByCuratorRequest.decode(message.value);
  },
  toProto(message: QueryCurationReviewsByCuratorRequest): Uint8Array {
    return QueryCurationReviewsByCuratorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurationReviewsByCuratorRequest): QueryCurationReviewsByCuratorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorRequest",
      value: QueryCurationReviewsByCuratorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurationReviewsByCuratorResponse(): QueryCurationReviewsByCuratorResponse {
  return {
    reviews: [],
    pagination: undefined
  };
}
/**
 * @name QueryCurationReviewsByCuratorResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse
 */
export const QueryCurationReviewsByCuratorResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse",
  encode(message: QueryCurationReviewsByCuratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reviews) {
      CurationReview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurationReviewsByCuratorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurationReviewsByCuratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviews.push(CurationReview.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurationReviewsByCuratorResponse>): QueryCurationReviewsByCuratorResponse {
    const message = createBaseQueryCurationReviewsByCuratorResponse();
    message.reviews = object.reviews?.map(e => CurationReview.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCurationReviewsByCuratorResponseAmino): QueryCurationReviewsByCuratorResponse {
    const message = createBaseQueryCurationReviewsByCuratorResponse();
    message.reviews = object.reviews?.map(e => CurationReview.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCurationReviewsByCuratorResponse): QueryCurationReviewsByCuratorResponseAmino {
    const obj: any = {};
    if (message.reviews) {
      obj.reviews = message.reviews.map(e => e ? CurationReview.toAmino(e) : undefined);
    } else {
      obj.reviews = message.reviews;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurationReviewsByCuratorResponseAminoMsg): QueryCurationReviewsByCuratorResponse {
    return QueryCurationReviewsByCuratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurationReviewsByCuratorResponseProtoMsg): QueryCurationReviewsByCuratorResponse {
    return QueryCurationReviewsByCuratorResponse.decode(message.value);
  },
  toProto(message: QueryCurationReviewsByCuratorResponse): Uint8Array {
    return QueryCurationReviewsByCuratorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurationReviewsByCuratorResponse): QueryCurationReviewsByCuratorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCurationReviewsByCuratorResponse",
      value: QueryCurationReviewsByCuratorResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySponsorshipRequestRequest(): QuerySponsorshipRequestRequest {
  return {
    collectionId: BigInt(0)
  };
}
/**
 * @name QuerySponsorshipRequestRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestRequest
 */
export const QuerySponsorshipRequestRequest = {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestRequest",
  encode(message: QuerySponsorshipRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySponsorshipRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySponsorshipRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySponsorshipRequestRequest>): QuerySponsorshipRequestRequest {
    const message = createBaseQuerySponsorshipRequestRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySponsorshipRequestRequestAmino): QuerySponsorshipRequestRequest {
    const message = createBaseQuerySponsorshipRequestRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: QuerySponsorshipRequestRequest): QuerySponsorshipRequestRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySponsorshipRequestRequestAminoMsg): QuerySponsorshipRequestRequest {
    return QuerySponsorshipRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySponsorshipRequestRequestProtoMsg): QuerySponsorshipRequestRequest {
    return QuerySponsorshipRequestRequest.decode(message.value);
  },
  toProto(message: QuerySponsorshipRequestRequest): Uint8Array {
    return QuerySponsorshipRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySponsorshipRequestRequest): QuerySponsorshipRequestRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestRequest",
      value: QuerySponsorshipRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySponsorshipRequestResponse(): QuerySponsorshipRequestResponse {
  return {
    sponsorshipRequest: SponsorshipRequest.fromPartial({})
  };
}
/**
 * @name QuerySponsorshipRequestResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestResponse
 */
export const QuerySponsorshipRequestResponse = {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestResponse",
  encode(message: QuerySponsorshipRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sponsorshipRequest !== undefined) {
      SponsorshipRequest.encode(message.sponsorshipRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySponsorshipRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySponsorshipRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sponsorshipRequest = SponsorshipRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySponsorshipRequestResponse>): QuerySponsorshipRequestResponse {
    const message = createBaseQuerySponsorshipRequestResponse();
    message.sponsorshipRequest = object.sponsorshipRequest !== undefined && object.sponsorshipRequest !== null ? SponsorshipRequest.fromPartial(object.sponsorshipRequest) : undefined;
    return message;
  },
  fromAmino(object: QuerySponsorshipRequestResponseAmino): QuerySponsorshipRequestResponse {
    const message = createBaseQuerySponsorshipRequestResponse();
    if (object.sponsorship_request !== undefined && object.sponsorship_request !== null) {
      message.sponsorshipRequest = SponsorshipRequest.fromAmino(object.sponsorship_request);
    }
    return message;
  },
  toAmino(message: QuerySponsorshipRequestResponse): QuerySponsorshipRequestResponseAmino {
    const obj: any = {};
    obj.sponsorship_request = message.sponsorshipRequest ? SponsorshipRequest.toAmino(message.sponsorshipRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySponsorshipRequestResponseAminoMsg): QuerySponsorshipRequestResponse {
    return QuerySponsorshipRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySponsorshipRequestResponseProtoMsg): QuerySponsorshipRequestResponse {
    return QuerySponsorshipRequestResponse.decode(message.value);
  },
  toProto(message: QuerySponsorshipRequestResponse): Uint8Array {
    return QuerySponsorshipRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySponsorshipRequestResponse): QuerySponsorshipRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestResponse",
      value: QuerySponsorshipRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySponsorshipRequestsRequest(): QuerySponsorshipRequestsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QuerySponsorshipRequestsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestsRequest
 */
export const QuerySponsorshipRequestsRequest = {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestsRequest",
  encode(message: QuerySponsorshipRequestsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySponsorshipRequestsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySponsorshipRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySponsorshipRequestsRequest>): QuerySponsorshipRequestsRequest {
    const message = createBaseQuerySponsorshipRequestsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySponsorshipRequestsRequestAmino): QuerySponsorshipRequestsRequest {
    const message = createBaseQuerySponsorshipRequestsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySponsorshipRequestsRequest): QuerySponsorshipRequestsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySponsorshipRequestsRequestAminoMsg): QuerySponsorshipRequestsRequest {
    return QuerySponsorshipRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySponsorshipRequestsRequestProtoMsg): QuerySponsorshipRequestsRequest {
    return QuerySponsorshipRequestsRequest.decode(message.value);
  },
  toProto(message: QuerySponsorshipRequestsRequest): Uint8Array {
    return QuerySponsorshipRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySponsorshipRequestsRequest): QuerySponsorshipRequestsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestsRequest",
      value: QuerySponsorshipRequestsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySponsorshipRequestsResponse(): QuerySponsorshipRequestsResponse {
  return {
    sponsorshipRequests: [],
    pagination: undefined
  };
}
/**
 * @name QuerySponsorshipRequestsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QuerySponsorshipRequestsResponse
 */
export const QuerySponsorshipRequestsResponse = {
  typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestsResponse",
  encode(message: QuerySponsorshipRequestsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sponsorshipRequests) {
      SponsorshipRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySponsorshipRequestsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySponsorshipRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sponsorshipRequests.push(SponsorshipRequest.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySponsorshipRequestsResponse>): QuerySponsorshipRequestsResponse {
    const message = createBaseQuerySponsorshipRequestsResponse();
    message.sponsorshipRequests = object.sponsorshipRequests?.map(e => SponsorshipRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySponsorshipRequestsResponseAmino): QuerySponsorshipRequestsResponse {
    const message = createBaseQuerySponsorshipRequestsResponse();
    message.sponsorshipRequests = object.sponsorship_requests?.map(e => SponsorshipRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySponsorshipRequestsResponse): QuerySponsorshipRequestsResponseAmino {
    const obj: any = {};
    if (message.sponsorshipRequests) {
      obj.sponsorship_requests = message.sponsorshipRequests.map(e => e ? SponsorshipRequest.toAmino(e) : undefined);
    } else {
      obj.sponsorship_requests = message.sponsorshipRequests;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySponsorshipRequestsResponseAminoMsg): QuerySponsorshipRequestsResponse {
    return QuerySponsorshipRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySponsorshipRequestsResponseProtoMsg): QuerySponsorshipRequestsResponse {
    return QuerySponsorshipRequestsResponse.decode(message.value);
  },
  toProto(message: QuerySponsorshipRequestsResponse): Uint8Array {
    return QuerySponsorshipRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySponsorshipRequestsResponse): QuerySponsorshipRequestsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QuerySponsorshipRequestsResponse",
      value: QuerySponsorshipRequestsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContentFlagRequest(): QueryContentFlagRequest {
  return {
    targetId: BigInt(0),
    targetType: 0
  };
}
/**
 * QueryContentFlagRequest defines the QueryContentFlagRequest message.
 * @name QueryContentFlagRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryContentFlagRequest
 */
export const QueryContentFlagRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryContentFlagRequest",
  encode(message: QueryContentFlagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentFlagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentFlagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.uint64();
          break;
        case 2:
          message.targetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentFlagRequest>): QueryContentFlagRequest {
    const message = createBaseQueryContentFlagRequest();
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    return message;
  },
  fromAmino(object: QueryContentFlagRequestAmino): QueryContentFlagRequest {
    const message = createBaseQueryContentFlagRequest();
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    return message;
  },
  toAmino(message: QueryContentFlagRequest): QueryContentFlagRequestAmino {
    const obj: any = {};
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    return obj;
  },
  fromAminoMsg(object: QueryContentFlagRequestAminoMsg): QueryContentFlagRequest {
    return QueryContentFlagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentFlagRequestProtoMsg): QueryContentFlagRequest {
    return QueryContentFlagRequest.decode(message.value);
  },
  toProto(message: QueryContentFlagRequest): Uint8Array {
    return QueryContentFlagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContentFlagRequest): QueryContentFlagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryContentFlagRequest",
      value: QueryContentFlagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContentFlagResponse(): QueryContentFlagResponse {
  return {
    collectionFlag: CollectionFlag.fromPartial({})
  };
}
/**
 * QueryContentFlagResponse defines the QueryContentFlagResponse message.
 * @name QueryContentFlagResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryContentFlagResponse
 */
export const QueryContentFlagResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryContentFlagResponse",
  encode(message: QueryContentFlagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionFlag !== undefined) {
      CollectionFlag.encode(message.collectionFlag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentFlagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionFlag = CollectionFlag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentFlagResponse>): QueryContentFlagResponse {
    const message = createBaseQueryContentFlagResponse();
    message.collectionFlag = object.collectionFlag !== undefined && object.collectionFlag !== null ? CollectionFlag.fromPartial(object.collectionFlag) : undefined;
    return message;
  },
  fromAmino(object: QueryContentFlagResponseAmino): QueryContentFlagResponse {
    const message = createBaseQueryContentFlagResponse();
    if (object.collection_flag !== undefined && object.collection_flag !== null) {
      message.collectionFlag = CollectionFlag.fromAmino(object.collection_flag);
    }
    return message;
  },
  toAmino(message: QueryContentFlagResponse): QueryContentFlagResponseAmino {
    const obj: any = {};
    obj.collection_flag = message.collectionFlag ? CollectionFlag.toAmino(message.collectionFlag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContentFlagResponseAminoMsg): QueryContentFlagResponse {
    return QueryContentFlagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentFlagResponseProtoMsg): QueryContentFlagResponse {
    return QueryContentFlagResponse.decode(message.value);
  },
  toProto(message: QueryContentFlagResponse): Uint8Array {
    return QueryContentFlagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContentFlagResponse): QueryContentFlagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryContentFlagResponse",
      value: QueryContentFlagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFlaggedContentRequest(): QueryFlaggedContentRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryFlaggedContentRequest defines the QueryFlaggedContentRequest message.
 * @name QueryFlaggedContentRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryFlaggedContentRequest
 */
export const QueryFlaggedContentRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryFlaggedContentRequest",
  encode(message: QueryFlaggedContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlaggedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlaggedContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFlaggedContentRequest>): QueryFlaggedContentRequest {
    const message = createBaseQueryFlaggedContentRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlaggedContentRequestAmino): QueryFlaggedContentRequest {
    const message = createBaseQueryFlaggedContentRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlaggedContentRequest): QueryFlaggedContentRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlaggedContentRequestAminoMsg): QueryFlaggedContentRequest {
    return QueryFlaggedContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlaggedContentRequestProtoMsg): QueryFlaggedContentRequest {
    return QueryFlaggedContentRequest.decode(message.value);
  },
  toProto(message: QueryFlaggedContentRequest): Uint8Array {
    return QueryFlaggedContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlaggedContentRequest): QueryFlaggedContentRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryFlaggedContentRequest",
      value: QueryFlaggedContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlaggedContentResponse(): QueryFlaggedContentResponse {
  return {
    collectionFlags: [],
    pagination: undefined
  };
}
/**
 * QueryFlaggedContentResponse defines the QueryFlaggedContentResponse message.
 * @name QueryFlaggedContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryFlaggedContentResponse
 */
export const QueryFlaggedContentResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryFlaggedContentResponse",
  encode(message: QueryFlaggedContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collectionFlags) {
      CollectionFlag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlaggedContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlaggedContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionFlags.push(CollectionFlag.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFlaggedContentResponse>): QueryFlaggedContentResponse {
    const message = createBaseQueryFlaggedContentResponse();
    message.collectionFlags = object.collectionFlags?.map(e => CollectionFlag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlaggedContentResponseAmino): QueryFlaggedContentResponse {
    const message = createBaseQueryFlaggedContentResponse();
    message.collectionFlags = object.collection_flags?.map(e => CollectionFlag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlaggedContentResponse): QueryFlaggedContentResponseAmino {
    const obj: any = {};
    if (message.collectionFlags) {
      obj.collection_flags = message.collectionFlags.map(e => e ? CollectionFlag.toAmino(e) : undefined);
    } else {
      obj.collection_flags = message.collectionFlags;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlaggedContentResponseAminoMsg): QueryFlaggedContentResponse {
    return QueryFlaggedContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlaggedContentResponseProtoMsg): QueryFlaggedContentResponse {
    return QueryFlaggedContentResponse.decode(message.value);
  },
  toProto(message: QueryFlaggedContentResponse): Uint8Array {
    return QueryFlaggedContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlaggedContentResponse): QueryFlaggedContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryFlaggedContentResponse",
      value: QueryFlaggedContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordRequest(): QueryHideRecordRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryHideRecordRequest defines the QueryHideRecordRequest message.
 * @name QueryHideRecordRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordRequest
 */
export const QueryHideRecordRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordRequest",
  encode(message: QueryHideRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHideRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHideRecordRequest();
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
  fromPartial(object: DeepPartial<QueryHideRecordRequest>): QueryHideRecordRequest {
    const message = createBaseQueryHideRecordRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHideRecordRequestAmino): QueryHideRecordRequest {
    const message = createBaseQueryHideRecordRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryHideRecordRequest): QueryHideRecordRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHideRecordRequestAminoMsg): QueryHideRecordRequest {
    return QueryHideRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHideRecordRequestProtoMsg): QueryHideRecordRequest {
    return QueryHideRecordRequest.decode(message.value);
  },
  toProto(message: QueryHideRecordRequest): Uint8Array {
    return QueryHideRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHideRecordRequest): QueryHideRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryHideRecordRequest",
      value: QueryHideRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordResponse(): QueryHideRecordResponse {
  return {
    hideRecord: HideRecord.fromPartial({})
  };
}
/**
 * QueryHideRecordResponse defines the QueryHideRecordResponse message.
 * @name QueryHideRecordResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordResponse
 */
export const QueryHideRecordResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordResponse",
  encode(message: QueryHideRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hideRecord !== undefined) {
      HideRecord.encode(message.hideRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHideRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHideRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecord = HideRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHideRecordResponse>): QueryHideRecordResponse {
    const message = createBaseQueryHideRecordResponse();
    message.hideRecord = object.hideRecord !== undefined && object.hideRecord !== null ? HideRecord.fromPartial(object.hideRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryHideRecordResponseAmino): QueryHideRecordResponse {
    const message = createBaseQueryHideRecordResponse();
    if (object.hide_record !== undefined && object.hide_record !== null) {
      message.hideRecord = HideRecord.fromAmino(object.hide_record);
    }
    return message;
  },
  toAmino(message: QueryHideRecordResponse): QueryHideRecordResponseAmino {
    const obj: any = {};
    obj.hide_record = message.hideRecord ? HideRecord.toAmino(message.hideRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHideRecordResponseAminoMsg): QueryHideRecordResponse {
    return QueryHideRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHideRecordResponseProtoMsg): QueryHideRecordResponse {
    return QueryHideRecordResponse.decode(message.value);
  },
  toProto(message: QueryHideRecordResponse): Uint8Array {
    return QueryHideRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHideRecordResponse): QueryHideRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryHideRecordResponse",
      value: QueryHideRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordsByTargetRequest(): QueryHideRecordsByTargetRequest {
  return {
    targetId: BigInt(0),
    targetType: 0
  };
}
/**
 * QueryHideRecordsByTargetRequest defines the QueryHideRecordsByTargetRequest message.
 * @name QueryHideRecordsByTargetRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordsByTargetRequest
 */
export const QueryHideRecordsByTargetRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordsByTargetRequest",
  encode(message: QueryHideRecordsByTargetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetId);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHideRecordsByTargetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHideRecordsByTargetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetId = reader.uint64();
          break;
        case 2:
          message.targetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHideRecordsByTargetRequest>): QueryHideRecordsByTargetRequest {
    const message = createBaseQueryHideRecordsByTargetRequest();
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    return message;
  },
  fromAmino(object: QueryHideRecordsByTargetRequestAmino): QueryHideRecordsByTargetRequest {
    const message = createBaseQueryHideRecordsByTargetRequest();
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    return message;
  },
  toAmino(message: QueryHideRecordsByTargetRequest): QueryHideRecordsByTargetRequestAmino {
    const obj: any = {};
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    return obj;
  },
  fromAminoMsg(object: QueryHideRecordsByTargetRequestAminoMsg): QueryHideRecordsByTargetRequest {
    return QueryHideRecordsByTargetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHideRecordsByTargetRequestProtoMsg): QueryHideRecordsByTargetRequest {
    return QueryHideRecordsByTargetRequest.decode(message.value);
  },
  toProto(message: QueryHideRecordsByTargetRequest): Uint8Array {
    return QueryHideRecordsByTargetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHideRecordsByTargetRequest): QueryHideRecordsByTargetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryHideRecordsByTargetRequest",
      value: QueryHideRecordsByTargetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordsByTargetResponse(): QueryHideRecordsByTargetResponse {
  return {
    hideRecords: []
  };
}
/**
 * QueryHideRecordsByTargetResponse defines the QueryHideRecordsByTargetResponse message.
 * @name QueryHideRecordsByTargetResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryHideRecordsByTargetResponse
 */
export const QueryHideRecordsByTargetResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryHideRecordsByTargetResponse",
  encode(message: QueryHideRecordsByTargetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hideRecords) {
      HideRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHideRecordsByTargetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHideRecordsByTargetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecords.push(HideRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHideRecordsByTargetResponse>): QueryHideRecordsByTargetResponse {
    const message = createBaseQueryHideRecordsByTargetResponse();
    message.hideRecords = object.hideRecords?.map(e => HideRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHideRecordsByTargetResponseAmino): QueryHideRecordsByTargetResponse {
    const message = createBaseQueryHideRecordsByTargetResponse();
    message.hideRecords = object.hide_records?.map(e => HideRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHideRecordsByTargetResponse): QueryHideRecordsByTargetResponseAmino {
    const obj: any = {};
    if (message.hideRecords) {
      obj.hide_records = message.hideRecords.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_records = message.hideRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHideRecordsByTargetResponseAminoMsg): QueryHideRecordsByTargetResponse {
    return QueryHideRecordsByTargetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHideRecordsByTargetResponseProtoMsg): QueryHideRecordsByTargetResponse {
    return QueryHideRecordsByTargetResponse.decode(message.value);
  },
  toProto(message: QueryHideRecordsByTargetResponse): Uint8Array {
    return QueryHideRecordsByTargetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHideRecordsByTargetResponse): QueryHideRecordsByTargetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryHideRecordsByTargetResponse",
      value: QueryHideRecordsByTargetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingCollectionsRequest(): QueryPendingCollectionsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryPendingCollectionsRequest defines the QueryPendingCollectionsRequest message.
 * @name QueryPendingCollectionsRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPendingCollectionsRequest
 */
export const QueryPendingCollectionsRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryPendingCollectionsRequest",
  encode(message: QueryPendingCollectionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingCollectionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingCollectionsRequest>): QueryPendingCollectionsRequest {
    const message = createBaseQueryPendingCollectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPendingCollectionsRequestAmino): QueryPendingCollectionsRequest {
    const message = createBaseQueryPendingCollectionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPendingCollectionsRequest): QueryPendingCollectionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingCollectionsRequestAminoMsg): QueryPendingCollectionsRequest {
    return QueryPendingCollectionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingCollectionsRequestProtoMsg): QueryPendingCollectionsRequest {
    return QueryPendingCollectionsRequest.decode(message.value);
  },
  toProto(message: QueryPendingCollectionsRequest): Uint8Array {
    return QueryPendingCollectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingCollectionsRequest): QueryPendingCollectionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryPendingCollectionsRequest",
      value: QueryPendingCollectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingCollectionsResponse(): QueryPendingCollectionsResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * QueryPendingCollectionsResponse defines the QueryPendingCollectionsResponse message.
 * @name QueryPendingCollectionsResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryPendingCollectionsResponse
 */
export const QueryPendingCollectionsResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryPendingCollectionsResponse",
  encode(message: QueryPendingCollectionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingCollectionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingCollectionsResponse>): QueryPendingCollectionsResponse {
    const message = createBaseQueryPendingCollectionsResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPendingCollectionsResponseAmino): QueryPendingCollectionsResponse {
    const message = createBaseQueryPendingCollectionsResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPendingCollectionsResponse): QueryPendingCollectionsResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingCollectionsResponseAminoMsg): QueryPendingCollectionsResponse {
    return QueryPendingCollectionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingCollectionsResponseProtoMsg): QueryPendingCollectionsResponse {
    return QueryPendingCollectionsResponse.decode(message.value);
  },
  toProto(message: QueryPendingCollectionsResponse): Uint8Array {
    return QueryPendingCollectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingCollectionsResponse): QueryPendingCollectionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryPendingCollectionsResponse",
      value: QueryPendingCollectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEndorsementRequest(): QueryEndorsementRequest {
  return {
    collectionId: BigInt(0)
  };
}
/**
 * QueryEndorsementRequest defines the QueryEndorsementRequest message.
 * @name QueryEndorsementRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryEndorsementRequest
 */
export const QueryEndorsementRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryEndorsementRequest",
  encode(message: QueryEndorsementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEndorsementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEndorsementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEndorsementRequest>): QueryEndorsementRequest {
    const message = createBaseQueryEndorsementRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEndorsementRequestAmino): QueryEndorsementRequest {
    const message = createBaseQueryEndorsementRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: QueryEndorsementRequest): QueryEndorsementRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEndorsementRequestAminoMsg): QueryEndorsementRequest {
    return QueryEndorsementRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEndorsementRequestProtoMsg): QueryEndorsementRequest {
    return QueryEndorsementRequest.decode(message.value);
  },
  toProto(message: QueryEndorsementRequest): Uint8Array {
    return QueryEndorsementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEndorsementRequest): QueryEndorsementRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryEndorsementRequest",
      value: QueryEndorsementRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEndorsementResponse(): QueryEndorsementResponse {
  return {
    endorsement: Endorsement.fromPartial({})
  };
}
/**
 * QueryEndorsementResponse defines the QueryEndorsementResponse message.
 * @name QueryEndorsementResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryEndorsementResponse
 */
export const QueryEndorsementResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryEndorsementResponse",
  encode(message: QueryEndorsementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.endorsement !== undefined) {
      Endorsement.encode(message.endorsement, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEndorsementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEndorsementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endorsement = Endorsement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEndorsementResponse>): QueryEndorsementResponse {
    const message = createBaseQueryEndorsementResponse();
    message.endorsement = object.endorsement !== undefined && object.endorsement !== null ? Endorsement.fromPartial(object.endorsement) : undefined;
    return message;
  },
  fromAmino(object: QueryEndorsementResponseAmino): QueryEndorsementResponse {
    const message = createBaseQueryEndorsementResponse();
    if (object.endorsement !== undefined && object.endorsement !== null) {
      message.endorsement = Endorsement.fromAmino(object.endorsement);
    }
    return message;
  },
  toAmino(message: QueryEndorsementResponse): QueryEndorsementResponseAmino {
    const obj: any = {};
    obj.endorsement = message.endorsement ? Endorsement.toAmino(message.endorsement) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEndorsementResponseAminoMsg): QueryEndorsementResponse {
    return QueryEndorsementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEndorsementResponseProtoMsg): QueryEndorsementResponse {
    return QueryEndorsementResponse.decode(message.value);
  },
  toProto(message: QueryEndorsementResponse): Uint8Array {
    return QueryEndorsementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEndorsementResponse): QueryEndorsementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryEndorsementResponse",
      value: QueryEndorsementResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionsByContentRequest(): QueryCollectionsByContentRequest {
  return {
    module: "",
    entityType: "",
    entityId: "",
    pagination: undefined
  };
}
/**
 * QueryCollectionsByContentRequest returns collections referencing on-chain content.
 * @name QueryCollectionsByContentRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByContentRequest
 */
export const QueryCollectionsByContentRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByContentRequest",
  encode(message: QueryCollectionsByContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    if (message.entityId !== "") {
      writer.uint32(26).string(message.entityId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionsByContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByContentRequest();
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
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionsByContentRequest>): QueryCollectionsByContentRequest {
    const message = createBaseQueryCollectionsByContentRequest();
    message.module = object.module ?? "";
    message.entityType = object.entityType ?? "";
    message.entityId = object.entityId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionsByContentRequestAmino): QueryCollectionsByContentRequest {
    const message = createBaseQueryCollectionsByContentRequest();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.entity_type !== undefined && object.entity_type !== null) {
      message.entityType = object.entity_type;
    }
    if (object.entity_id !== undefined && object.entity_id !== null) {
      message.entityId = object.entity_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionsByContentRequest): QueryCollectionsByContentRequestAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.entity_type = message.entityType === "" ? undefined : message.entityType;
    obj.entity_id = message.entityId === "" ? undefined : message.entityId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionsByContentRequestAminoMsg): QueryCollectionsByContentRequest {
    return QueryCollectionsByContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionsByContentRequestProtoMsg): QueryCollectionsByContentRequest {
    return QueryCollectionsByContentRequest.decode(message.value);
  },
  toProto(message: QueryCollectionsByContentRequest): Uint8Array {
    return QueryCollectionsByContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionsByContentRequest): QueryCollectionsByContentRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionsByContentRequest",
      value: QueryCollectionsByContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionsByContentResponse(): QueryCollectionsByContentResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * QueryCollectionsByContentResponse is the response for CollectionsByContent.
 * @name QueryCollectionsByContentResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionsByContentResponse
 */
export const QueryCollectionsByContentResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionsByContentResponse",
  encode(message: QueryCollectionsByContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionsByContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionsByContentResponse>): QueryCollectionsByContentResponse {
    const message = createBaseQueryCollectionsByContentResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionsByContentResponseAmino): QueryCollectionsByContentResponse {
    const message = createBaseQueryCollectionsByContentResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCollectionsByContentResponse): QueryCollectionsByContentResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionsByContentResponseAminoMsg): QueryCollectionsByContentResponse {
    return QueryCollectionsByContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionsByContentResponseProtoMsg): QueryCollectionsByContentResponse {
    return QueryCollectionsByContentResponse.decode(message.value);
  },
  toProto(message: QueryCollectionsByContentResponse): Uint8Array {
    return QueryCollectionsByContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionsByContentResponse): QueryCollectionsByContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionsByContentResponse",
      value: QueryCollectionsByContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionConvictionRequest(): QueryCollectionConvictionRequest {
  return {
    collectionId: BigInt(0)
  };
}
/**
 * QueryCollectionConvictionRequest defines the QueryCollectionConviction request.
 * @name QueryCollectionConvictionRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionConvictionRequest
 */
export const QueryCollectionConvictionRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionConvictionRequest",
  encode(message: QueryCollectionConvictionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionConvictionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionConvictionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionConvictionRequest>): QueryCollectionConvictionRequest {
    const message = createBaseQueryCollectionConvictionRequest();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCollectionConvictionRequestAmino): QueryCollectionConvictionRequest {
    const message = createBaseQueryCollectionConvictionRequest();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: QueryCollectionConvictionRequest): QueryCollectionConvictionRequestAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionConvictionRequestAminoMsg): QueryCollectionConvictionRequest {
    return QueryCollectionConvictionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionConvictionRequestProtoMsg): QueryCollectionConvictionRequest {
    return QueryCollectionConvictionRequest.decode(message.value);
  },
  toProto(message: QueryCollectionConvictionRequest): Uint8Array {
    return QueryCollectionConvictionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionConvictionRequest): QueryCollectionConvictionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionConvictionRequest",
      value: QueryCollectionConvictionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionConvictionResponse(): QueryCollectionConvictionResponse {
  return {
    convictionScore: "",
    stakeCount: 0,
    totalStaked: "",
    authorBond: ""
  };
}
/**
 * QueryCollectionConvictionResponse defines the QueryCollectionConviction response.
 * @name QueryCollectionConvictionResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryCollectionConvictionResponse
 */
export const QueryCollectionConvictionResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryCollectionConvictionResponse",
  encode(message: QueryCollectionConvictionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.convictionScore !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.convictionScore, 18).atomics);
    }
    if (message.stakeCount !== 0) {
      writer.uint32(16).uint32(message.stakeCount);
    }
    if (message.totalStaked !== "") {
      writer.uint32(26).string(message.totalStaked);
    }
    if (message.authorBond !== "") {
      writer.uint32(34).string(message.authorBond);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCollectionConvictionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionConvictionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convictionScore = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.stakeCount = reader.uint32();
          break;
        case 3:
          message.totalStaked = reader.string();
          break;
        case 4:
          message.authorBond = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionConvictionResponse>): QueryCollectionConvictionResponse {
    const message = createBaseQueryCollectionConvictionResponse();
    message.convictionScore = object.convictionScore ?? "";
    message.stakeCount = object.stakeCount ?? 0;
    message.totalStaked = object.totalStaked ?? "";
    message.authorBond = object.authorBond ?? "";
    return message;
  },
  fromAmino(object: QueryCollectionConvictionResponseAmino): QueryCollectionConvictionResponse {
    const message = createBaseQueryCollectionConvictionResponse();
    if (object.conviction_score !== undefined && object.conviction_score !== null) {
      message.convictionScore = object.conviction_score;
    }
    if (object.stake_count !== undefined && object.stake_count !== null) {
      message.stakeCount = object.stake_count;
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.author_bond !== undefined && object.author_bond !== null) {
      message.authorBond = object.author_bond;
    }
    return message;
  },
  toAmino(message: QueryCollectionConvictionResponse): QueryCollectionConvictionResponseAmino {
    const obj: any = {};
    obj.conviction_score = message.convictionScore === "" ? undefined : message.convictionScore;
    obj.stake_count = message.stakeCount === 0 ? undefined : message.stakeCount;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.author_bond = message.authorBond === "" ? undefined : message.authorBond;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionConvictionResponseAminoMsg): QueryCollectionConvictionResponse {
    return QueryCollectionConvictionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionConvictionResponseProtoMsg): QueryCollectionConvictionResponse {
    return QueryCollectionConvictionResponse.decode(message.value);
  },
  toProto(message: QueryCollectionConvictionResponse): Uint8Array {
    return QueryCollectionConvictionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionConvictionResponse): QueryCollectionConvictionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryCollectionConvictionResponse",
      value: QueryCollectionConvictionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListCollectionsByTagRequest(): QueryListCollectionsByTagRequest {
  return {
    tag: "",
    pagination: undefined
  };
}
/**
 * QueryListCollectionsByTagRequest defines the QueryListCollectionsByTag request.
 * @name QueryListCollectionsByTagRequest
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryListCollectionsByTagRequest
 */
export const QueryListCollectionsByTagRequest = {
  typeUrl: "/sparkdream.collect.v1.QueryListCollectionsByTagRequest",
  encode(message: QueryListCollectionsByTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListCollectionsByTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCollectionsByTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListCollectionsByTagRequest>): QueryListCollectionsByTagRequest {
    const message = createBaseQueryListCollectionsByTagRequest();
    message.tag = object.tag ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListCollectionsByTagRequestAmino): QueryListCollectionsByTagRequest {
    const message = createBaseQueryListCollectionsByTagRequest();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListCollectionsByTagRequest): QueryListCollectionsByTagRequestAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListCollectionsByTagRequestAminoMsg): QueryListCollectionsByTagRequest {
    return QueryListCollectionsByTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListCollectionsByTagRequestProtoMsg): QueryListCollectionsByTagRequest {
    return QueryListCollectionsByTagRequest.decode(message.value);
  },
  toProto(message: QueryListCollectionsByTagRequest): Uint8Array {
    return QueryListCollectionsByTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListCollectionsByTagRequest): QueryListCollectionsByTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryListCollectionsByTagRequest",
      value: QueryListCollectionsByTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListCollectionsByTagResponse(): QueryListCollectionsByTagResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
/**
 * QueryListCollectionsByTagResponse defines the QueryListCollectionsByTag response.
 * @name QueryListCollectionsByTagResponse
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.QueryListCollectionsByTagResponse
 */
export const QueryListCollectionsByTagResponse = {
  typeUrl: "/sparkdream.collect.v1.QueryListCollectionsByTagResponse",
  encode(message: QueryListCollectionsByTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListCollectionsByTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCollectionsByTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListCollectionsByTagResponse>): QueryListCollectionsByTagResponse {
    const message = createBaseQueryListCollectionsByTagResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListCollectionsByTagResponseAmino): QueryListCollectionsByTagResponse {
    const message = createBaseQueryListCollectionsByTagResponse();
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListCollectionsByTagResponse): QueryListCollectionsByTagResponseAmino {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListCollectionsByTagResponseAminoMsg): QueryListCollectionsByTagResponse {
    return QueryListCollectionsByTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListCollectionsByTagResponseProtoMsg): QueryListCollectionsByTagResponse {
    return QueryListCollectionsByTagResponse.decode(message.value);
  },
  toProto(message: QueryListCollectionsByTagResponse): Uint8Array {
    return QueryListCollectionsByTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListCollectionsByTagResponse): QueryListCollectionsByTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.QueryListCollectionsByTagResponse",
      value: QueryListCollectionsByTagResponse.encode(message).finish()
    };
  }
};