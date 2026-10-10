//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Class, ClassAmino, Token, TokenAmino, ContentStatus, InboxKind, TokenMetadata, TokenMetadataAmino, Listing, ListingAmino, ReceivePolicy, PendingClassOwner, PendingClassOwnerAmino, HideRecord, HideRecordAmino } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * ClassView is a class as served to clients. When withheld is true the
 * content fields have been blanked because the class is hidden.
 * @name ClassView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ClassView
 */
export interface ClassView {
  class: Class;
  withheld: boolean;
}
export interface ClassViewProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.ClassView";
  value: Uint8Array;
}
/**
 * ClassView is a class as served to clients. When withheld is true the
 * content fields have been blanked because the class is hidden.
 * @name ClassViewAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ClassView
 */
export interface ClassViewAmino {
  class?: ClassAmino;
  withheld?: boolean;
}
export interface ClassViewAminoMsg {
  type: "/sparkdream.artifact.v1.ClassView";
  value: ClassViewAmino;
}
/**
 * TokenView is a token as served to clients. When withheld is true the
 * metadata has been blanked because the token or its class is hidden.
 * @name TokenView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenView
 */
export interface TokenView {
  token: Token;
  withheld: boolean;
  metadataHash: string;
  classStatus: ContentStatus;
}
export interface TokenViewProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.TokenView";
  value: Uint8Array;
}
/**
 * TokenView is a token as served to clients. When withheld is true the
 * metadata has been blanked because the token or its class is hidden.
 * @name TokenViewAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenView
 */
export interface TokenViewAmino {
  token?: TokenAmino;
  withheld?: boolean;
  metadata_hash?: string;
  class_status?: ContentStatus;
}
export interface TokenViewAminoMsg {
  type: "/sparkdream.artifact.v1.TokenView";
  value: TokenViewAmino;
}
/**
 * InboxItem is one open pending transfer or pending mint.
 * @name InboxItem
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.InboxItem
 */
export interface InboxItem {
  kind: InboxKind;
  classId: bigint;
  tokenId: bigint;
  /**
   * Transfer sender, or minter.
   */
  from: string;
  to: string;
  createdAt: bigint;
  expiresAt: bigint;
  /**
   * Metadata the recipient will receive (blanked when withheld).
   */
  metadata: TokenMetadata;
  metadataHash: string;
  withheld: boolean;
}
export interface InboxItemProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.InboxItem";
  value: Uint8Array;
}
/**
 * InboxItem is one open pending transfer or pending mint.
 * @name InboxItemAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.InboxItem
 */
export interface InboxItemAmino {
  kind?: InboxKind;
  class_id?: string;
  token_id?: string;
  /**
   * Transfer sender, or minter.
   */
  from?: string;
  to?: string;
  created_at?: string;
  expires_at?: string;
  /**
   * Metadata the recipient will receive (blanked when withheld).
   */
  metadata?: TokenMetadataAmino;
  metadata_hash?: string;
  withheld?: boolean;
}
export interface InboxItemAminoMsg {
  type: "/sparkdream.artifact.v1.InboxItem";
  value: InboxItemAmino;
}
/**
 * QueryClassRequest defines the QueryClassRequest message.
 * @name QueryClassRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassRequest
 */
export interface QueryClassRequest {
  classId: bigint;
}
export interface QueryClassRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryClassRequest";
  value: Uint8Array;
}
/**
 * QueryClassRequest defines the QueryClassRequest message.
 * @name QueryClassRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassRequest
 */
export interface QueryClassRequestAmino {
  class_id?: string;
}
export interface QueryClassRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryClassRequest";
  value: QueryClassRequestAmino;
}
/**
 * QueryClassResponse defines the QueryClassResponse message.
 * @name QueryClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassResponse
 */
export interface QueryClassResponse {
  class: ClassView;
}
export interface QueryClassResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryClassResponse";
  value: Uint8Array;
}
/**
 * QueryClassResponse defines the QueryClassResponse message.
 * @name QueryClassResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassResponse
 */
export interface QueryClassResponseAmino {
  class?: ClassViewAmino;
}
export interface QueryClassResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryClassResponse";
  value: QueryClassResponseAmino;
}
/**
 * QueryClassesRequest defines the QueryClassesRequest message.
 * @name QueryClassesRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesRequest
 */
export interface QueryClassesRequest {
  pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesRequest";
  value: Uint8Array;
}
/**
 * QueryClassesRequest defines the QueryClassesRequest message.
 * @name QueryClassesRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesRequest
 */
export interface QueryClassesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryClassesRequest";
  value: QueryClassesRequestAmino;
}
/**
 * QueryClassesResponse defines the QueryClassesResponse message.
 * @name QueryClassesResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesResponse
 */
export interface QueryClassesResponse {
  classes: ClassView[];
  pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesResponse";
  value: Uint8Array;
}
/**
 * QueryClassesResponse defines the QueryClassesResponse message.
 * @name QueryClassesResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesResponse
 */
export interface QueryClassesResponseAmino {
  classes?: ClassViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryClassesResponse";
  value: QueryClassesResponseAmino;
}
/**
 * QueryClassesByOwnerRequest defines the QueryClassesByOwnerRequest message.
 * @name QueryClassesByOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesByOwnerRequest
 */
export interface QueryClassesByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryClassesByOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesByOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryClassesByOwnerRequest defines the QueryClassesByOwnerRequest message.
 * @name QueryClassesByOwnerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesByOwnerRequest
 */
export interface QueryClassesByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryClassesByOwnerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryClassesByOwnerRequest";
  value: QueryClassesByOwnerRequestAmino;
}
/**
 * QueryClassesByOwnerResponse defines the QueryClassesByOwnerResponse message.
 * @name QueryClassesByOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesByOwnerResponse
 */
export interface QueryClassesByOwnerResponse {
  classes: ClassView[];
  pagination?: PageResponse;
}
export interface QueryClassesByOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesByOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryClassesByOwnerResponse defines the QueryClassesByOwnerResponse message.
 * @name QueryClassesByOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesByOwnerResponse
 */
export interface QueryClassesByOwnerResponseAmino {
  classes?: ClassViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClassesByOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryClassesByOwnerResponse";
  value: QueryClassesByOwnerResponseAmino;
}
/**
 * QueryTokenRequest defines the QueryTokenRequest message.
 * @name QueryTokenRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokenRequest
 */
export interface QueryTokenRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryTokenRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryTokenRequest";
  value: Uint8Array;
}
/**
 * QueryTokenRequest defines the QueryTokenRequest message.
 * @name QueryTokenRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokenRequest
 */
export interface QueryTokenRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryTokenRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryTokenRequest";
  value: QueryTokenRequestAmino;
}
/**
 * QueryTokenResponse defines the QueryTokenResponse message.
 * @name QueryTokenResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokenResponse
 */
export interface QueryTokenResponse {
  token: TokenView;
  /**
   * Set when the token is listed.
   */
  listing?: Listing;
}
export interface QueryTokenResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryTokenResponse";
  value: Uint8Array;
}
/**
 * QueryTokenResponse defines the QueryTokenResponse message.
 * @name QueryTokenResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokenResponse
 */
export interface QueryTokenResponseAmino {
  token?: TokenViewAmino;
  /**
   * Set when the token is listed.
   */
  listing?: ListingAmino;
}
export interface QueryTokenResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryTokenResponse";
  value: QueryTokenResponseAmino;
}
/**
 * QueryTokensRequest defines the QueryTokensRequest message.
 * @name QueryTokensRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensRequest
 */
export interface QueryTokensRequest {
  classId: bigint;
  pagination?: PageRequest;
}
export interface QueryTokensRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensRequest";
  value: Uint8Array;
}
/**
 * QueryTokensRequest defines the QueryTokensRequest message.
 * @name QueryTokensRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensRequest
 */
export interface QueryTokensRequestAmino {
  class_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTokensRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryTokensRequest";
  value: QueryTokensRequestAmino;
}
/**
 * QueryTokensResponse defines the QueryTokensResponse message.
 * @name QueryTokensResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensResponse
 */
export interface QueryTokensResponse {
  tokens: TokenView[];
  pagination?: PageResponse;
}
export interface QueryTokensResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensResponse";
  value: Uint8Array;
}
/**
 * QueryTokensResponse defines the QueryTokensResponse message.
 * @name QueryTokensResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensResponse
 */
export interface QueryTokensResponseAmino {
  tokens?: TokenViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTokensResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryTokensResponse";
  value: QueryTokensResponseAmino;
}
/**
 * QueryTokensByOwnerRequest defines the QueryTokensByOwnerRequest message.
 * @name QueryTokensByOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensByOwnerRequest
 */
export interface QueryTokensByOwnerRequest {
  owner: string;
  /**
   * Optional class filter (0 = all classes).
   */
  classId: bigint;
  pagination?: PageRequest;
}
export interface QueryTokensByOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensByOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryTokensByOwnerRequest defines the QueryTokensByOwnerRequest message.
 * @name QueryTokensByOwnerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensByOwnerRequest
 */
export interface QueryTokensByOwnerRequestAmino {
  owner?: string;
  /**
   * Optional class filter (0 = all classes).
   */
  class_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTokensByOwnerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryTokensByOwnerRequest";
  value: QueryTokensByOwnerRequestAmino;
}
/**
 * QueryTokensByOwnerResponse defines the QueryTokensByOwnerResponse message.
 * @name QueryTokensByOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensByOwnerResponse
 */
export interface QueryTokensByOwnerResponse {
  tokens: TokenView[];
  pagination?: PageResponse;
}
export interface QueryTokensByOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensByOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryTokensByOwnerResponse defines the QueryTokensByOwnerResponse message.
 * @name QueryTokensByOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensByOwnerResponse
 */
export interface QueryTokensByOwnerResponseAmino {
  tokens?: TokenViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTokensByOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryTokensByOwnerResponse";
  value: QueryTokensByOwnerResponseAmino;
}
/**
 * QueryOwnerRequest defines the QueryOwnerRequest message.
 * @name QueryOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOwnerRequest
 */
export interface QueryOwnerRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryOwnerRequest defines the QueryOwnerRequest message.
 * @name QueryOwnerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOwnerRequest
 */
export interface QueryOwnerRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryOwnerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOwnerRequest";
  value: QueryOwnerRequestAmino;
}
/**
 * QueryOwnerResponse defines the QueryOwnerResponse message.
 * @name QueryOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOwnerResponse
 */
export interface QueryOwnerResponse {
  owner: string;
}
export interface QueryOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryOwnerResponse defines the QueryOwnerResponse message.
 * @name QueryOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOwnerResponse
 */
export interface QueryOwnerResponseAmino {
  owner?: string;
}
export interface QueryOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOwnerResponse";
  value: QueryOwnerResponseAmino;
}
/**
 * QuerySupplyRequest defines the QuerySupplyRequest message.
 * @name QuerySupplyRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QuerySupplyRequest
 */
export interface QuerySupplyRequest {
  classId: bigint;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QuerySupplyRequest";
  value: Uint8Array;
}
/**
 * QuerySupplyRequest defines the QuerySupplyRequest message.
 * @name QuerySupplyRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QuerySupplyRequest
 */
export interface QuerySupplyRequestAmino {
  class_id?: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
/**
 * QuerySupplyResponse defines the QuerySupplyResponse message.
 * @name QuerySupplyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QuerySupplyResponse
 */
export interface QuerySupplyResponse {
  supply: bigint;
  burned: bigint;
  reservedSupply: bigint;
  maxSupply: bigint;
  mintingClosed: boolean;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QuerySupplyResponse";
  value: Uint8Array;
}
/**
 * QuerySupplyResponse defines the QuerySupplyResponse message.
 * @name QuerySupplyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QuerySupplyResponse
 */
export interface QuerySupplyResponseAmino {
  supply?: string;
  burned?: string;
  reserved_supply?: string;
  max_supply?: string;
  minting_closed?: boolean;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
/**
 * QueryListingRequest defines the QueryListingRequest message.
 * @name QueryListingRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingRequest
 */
export interface QueryListingRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryListingRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryListingRequest";
  value: Uint8Array;
}
/**
 * QueryListingRequest defines the QueryListingRequest message.
 * @name QueryListingRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingRequest
 */
export interface QueryListingRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryListingRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryListingRequest";
  value: QueryListingRequestAmino;
}
/**
 * QueryListingResponse defines the QueryListingResponse message.
 * @name QueryListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingResponse
 */
export interface QueryListingResponse {
  listing: Listing;
}
export interface QueryListingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryListingResponse";
  value: Uint8Array;
}
/**
 * QueryListingResponse defines the QueryListingResponse message.
 * @name QueryListingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingResponse
 */
export interface QueryListingResponseAmino {
  listing?: ListingAmino;
}
export interface QueryListingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryListingResponse";
  value: QueryListingResponseAmino;
}
/**
 * QueryListingsRequest defines the QueryListingsRequest message.
 * @name QueryListingsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsRequest
 */
export interface QueryListingsRequest {
  /**
   * Optional class filter (0 = all classes).
   */
  classId: bigint;
  pagination?: PageRequest;
}
export interface QueryListingsRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsRequest";
  value: Uint8Array;
}
/**
 * QueryListingsRequest defines the QueryListingsRequest message.
 * @name QueryListingsRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsRequest
 */
export interface QueryListingsRequestAmino {
  /**
   * Optional class filter (0 = all classes).
   */
  class_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryListingsRequest";
  value: QueryListingsRequestAmino;
}
/**
 * QueryListingsResponse defines the QueryListingsResponse message.
 * @name QueryListingsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsResponse
 */
export interface QueryListingsResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsResponse";
  value: Uint8Array;
}
/**
 * QueryListingsResponse defines the QueryListingsResponse message.
 * @name QueryListingsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsResponse
 */
export interface QueryListingsResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryListingsResponse";
  value: QueryListingsResponseAmino;
}
/**
 * QueryListingsBySellerRequest defines the QueryListingsBySellerRequest message.
 * @name QueryListingsBySellerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsBySellerRequest
 */
export interface QueryListingsBySellerRequest {
  seller: string;
  pagination?: PageRequest;
}
export interface QueryListingsBySellerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsBySellerRequest";
  value: Uint8Array;
}
/**
 * QueryListingsBySellerRequest defines the QueryListingsBySellerRequest message.
 * @name QueryListingsBySellerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsBySellerRequest
 */
export interface QueryListingsBySellerRequestAmino {
  seller?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListingsBySellerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryListingsBySellerRequest";
  value: QueryListingsBySellerRequestAmino;
}
/**
 * QueryListingsBySellerResponse defines the QueryListingsBySellerResponse message.
 * @name QueryListingsBySellerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsBySellerResponse
 */
export interface QueryListingsBySellerResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsBySellerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsBySellerResponse";
  value: Uint8Array;
}
/**
 * QueryListingsBySellerResponse defines the QueryListingsBySellerResponse message.
 * @name QueryListingsBySellerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsBySellerResponse
 */
export interface QueryListingsBySellerResponseAmino {
  listings?: ListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListingsBySellerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryListingsBySellerResponse";
  value: QueryListingsBySellerResponseAmino;
}
/**
 * QueryInboxRequest defines the QueryInboxRequest message.
 * @name QueryInboxRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryInboxRequest
 */
export interface QueryInboxRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryInboxRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryInboxRequest";
  value: Uint8Array;
}
/**
 * QueryInboxRequest defines the QueryInboxRequest message.
 * @name QueryInboxRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryInboxRequest
 */
export interface QueryInboxRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInboxRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryInboxRequest";
  value: QueryInboxRequestAmino;
}
/**
 * QueryInboxResponse defines the QueryInboxResponse message.
 * @name QueryInboxResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryInboxResponse
 */
export interface QueryInboxResponse {
  items: InboxItem[];
  inboxCount: number;
  pagination?: PageResponse;
}
export interface QueryInboxResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryInboxResponse";
  value: Uint8Array;
}
/**
 * QueryInboxResponse defines the QueryInboxResponse message.
 * @name QueryInboxResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryInboxResponse
 */
export interface QueryInboxResponseAmino {
  items?: InboxItemAmino[];
  inbox_count?: number;
  pagination?: PageResponseAmino;
}
export interface QueryInboxResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryInboxResponse";
  value: QueryInboxResponseAmino;
}
/**
 * QueryOutboxRequest defines the QueryOutboxRequest message.
 * @name QueryOutboxRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOutboxRequest
 */
export interface QueryOutboxRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryOutboxRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOutboxRequest";
  value: Uint8Array;
}
/**
 * QueryOutboxRequest defines the QueryOutboxRequest message.
 * @name QueryOutboxRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOutboxRequest
 */
export interface QueryOutboxRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOutboxRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOutboxRequest";
  value: QueryOutboxRequestAmino;
}
/**
 * QueryOutboxResponse defines the QueryOutboxResponse message.
 * @name QueryOutboxResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOutboxResponse
 */
export interface QueryOutboxResponse {
  items: InboxItem[];
  pagination?: PageResponse;
}
export interface QueryOutboxResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOutboxResponse";
  value: Uint8Array;
}
/**
 * QueryOutboxResponse defines the QueryOutboxResponse message.
 * @name QueryOutboxResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOutboxResponse
 */
export interface QueryOutboxResponseAmino {
  items?: InboxItemAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOutboxResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOutboxResponse";
  value: QueryOutboxResponseAmino;
}
/**
 * QueryReceivePolicyRequest defines the QueryReceivePolicyRequest message.
 * @name QueryReceivePolicyRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryReceivePolicyRequest
 */
export interface QueryReceivePolicyRequest {
  address: string;
}
export interface QueryReceivePolicyRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryReceivePolicyRequest";
  value: Uint8Array;
}
/**
 * QueryReceivePolicyRequest defines the QueryReceivePolicyRequest message.
 * @name QueryReceivePolicyRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryReceivePolicyRequest
 */
export interface QueryReceivePolicyRequestAmino {
  address?: string;
}
export interface QueryReceivePolicyRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryReceivePolicyRequest";
  value: QueryReceivePolicyRequestAmino;
}
/**
 * QueryReceivePolicyResponse defines the QueryReceivePolicyResponse message.
 * @name QueryReceivePolicyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryReceivePolicyResponse
 */
export interface QueryReceivePolicyResponse {
  policy: ReceivePolicy;
  isDefault: boolean;
}
export interface QueryReceivePolicyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryReceivePolicyResponse";
  value: Uint8Array;
}
/**
 * QueryReceivePolicyResponse defines the QueryReceivePolicyResponse message.
 * @name QueryReceivePolicyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryReceivePolicyResponse
 */
export interface QueryReceivePolicyResponseAmino {
  policy?: ReceivePolicy;
  is_default?: boolean;
}
export interface QueryReceivePolicyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryReceivePolicyResponse";
  value: QueryReceivePolicyResponseAmino;
}
/**
 * QueryPendingClassOwnerRequest defines the QueryPendingClassOwnerRequest message.
 * @name QueryPendingClassOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPendingClassOwnerRequest
 */
export interface QueryPendingClassOwnerRequest {
  classId: bigint;
}
export interface QueryPendingClassOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryPendingClassOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryPendingClassOwnerRequest defines the QueryPendingClassOwnerRequest message.
 * @name QueryPendingClassOwnerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPendingClassOwnerRequest
 */
export interface QueryPendingClassOwnerRequestAmino {
  class_id?: string;
}
export interface QueryPendingClassOwnerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryPendingClassOwnerRequest";
  value: QueryPendingClassOwnerRequestAmino;
}
/**
 * QueryPendingClassOwnerResponse defines the QueryPendingClassOwnerResponse message.
 * @name QueryPendingClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPendingClassOwnerResponse
 */
export interface QueryPendingClassOwnerResponse {
  pending: PendingClassOwner;
}
export interface QueryPendingClassOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryPendingClassOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryPendingClassOwnerResponse defines the QueryPendingClassOwnerResponse message.
 * @name QueryPendingClassOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPendingClassOwnerResponse
 */
export interface QueryPendingClassOwnerResponseAmino {
  pending?: PendingClassOwnerAmino;
}
export interface QueryPendingClassOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryPendingClassOwnerResponse";
  value: QueryPendingClassOwnerResponseAmino;
}
/**
 * QueryHideRecordRequest defines the QueryHideRecordRequest message.
 * @name QueryHideRecordRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordRequest
 */
export interface QueryHideRecordRequest {
  hideId: bigint;
}
export interface QueryHideRecordRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordRequest";
  value: Uint8Array;
}
/**
 * QueryHideRecordRequest defines the QueryHideRecordRequest message.
 * @name QueryHideRecordRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordRequest
 */
export interface QueryHideRecordRequestAmino {
  hide_id?: string;
}
export interface QueryHideRecordRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryHideRecordRequest";
  value: QueryHideRecordRequestAmino;
}
/**
 * QueryHideRecordResponse defines the QueryHideRecordResponse message.
 * @name QueryHideRecordResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordResponse
 */
export interface QueryHideRecordResponse {
  record: HideRecord;
}
export interface QueryHideRecordResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordResponse";
  value: Uint8Array;
}
/**
 * QueryHideRecordResponse defines the QueryHideRecordResponse message.
 * @name QueryHideRecordResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordResponse
 */
export interface QueryHideRecordResponseAmino {
  record?: HideRecordAmino;
}
export interface QueryHideRecordResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryHideRecordResponse";
  value: QueryHideRecordResponseAmino;
}
/**
 * QueryHideRecordsByTargetRequest defines the QueryHideRecordsByTargetRequest message.
 * @name QueryHideRecordsByTargetRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordsByTargetRequest
 */
export interface QueryHideRecordsByTargetRequest {
  classId: bigint;
  /**
   * 0 = the class itself.
   */
  tokenId: bigint;
}
export interface QueryHideRecordsByTargetRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordsByTargetRequest";
  value: Uint8Array;
}
/**
 * QueryHideRecordsByTargetRequest defines the QueryHideRecordsByTargetRequest message.
 * @name QueryHideRecordsByTargetRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordsByTargetRequest
 */
export interface QueryHideRecordsByTargetRequestAmino {
  class_id?: string;
  /**
   * 0 = the class itself.
   */
  token_id?: string;
}
export interface QueryHideRecordsByTargetRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryHideRecordsByTargetRequest";
  value: QueryHideRecordsByTargetRequestAmino;
}
/**
 * QueryHideRecordsByTargetResponse defines the QueryHideRecordsByTargetResponse message.
 * @name QueryHideRecordsByTargetResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordsByTargetResponse
 */
export interface QueryHideRecordsByTargetResponse {
  records: HideRecord[];
}
export interface QueryHideRecordsByTargetResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordsByTargetResponse";
  value: Uint8Array;
}
/**
 * QueryHideRecordsByTargetResponse defines the QueryHideRecordsByTargetResponse message.
 * @name QueryHideRecordsByTargetResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordsByTargetResponse
 */
export interface QueryHideRecordsByTargetResponseAmino {
  records?: HideRecordAmino[];
}
export interface QueryHideRecordsByTargetResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryHideRecordsByTargetResponse";
  value: QueryHideRecordsByTargetResponseAmino;
}
/**
 * QueryPublicMintQuoteRequest defines the QueryPublicMintQuoteRequest message.
 * @name QueryPublicMintQuoteRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPublicMintQuoteRequest
 */
export interface QueryPublicMintQuoteRequest {
  classId: bigint;
  buyer: string;
  quantity: number;
}
export interface QueryPublicMintQuoteRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryPublicMintQuoteRequest";
  value: Uint8Array;
}
/**
 * QueryPublicMintQuoteRequest defines the QueryPublicMintQuoteRequest message.
 * @name QueryPublicMintQuoteRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPublicMintQuoteRequest
 */
export interface QueryPublicMintQuoteRequestAmino {
  class_id?: string;
  buyer?: string;
  quantity?: number;
}
export interface QueryPublicMintQuoteRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryPublicMintQuoteRequest";
  value: QueryPublicMintQuoteRequestAmino;
}
/**
 * QueryPublicMintQuoteResponse defines the QueryPublicMintQuoteResponse message.
 * @name QueryPublicMintQuoteResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPublicMintQuoteResponse
 */
export interface QueryPublicMintQuoteResponse {
  /**
   * quantity x price
   */
  totalPrice: Coin;
  /**
   * Part of total_price routed to the community pool.
   */
  fee: Coin;
  /**
   * quantity x token_deposit (refundable).
   */
  deposit: Coin;
  /**
   * Remaining per-address allowance; -1 = unlimited.
   */
  remainingAllowance: bigint;
  /**
   * true when a public mint of this quantity would currently succeed.
   */
  available: boolean;
  /**
   * Why not, when available is false.
   */
  reason: string;
}
export interface QueryPublicMintQuoteResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryPublicMintQuoteResponse";
  value: Uint8Array;
}
/**
 * QueryPublicMintQuoteResponse defines the QueryPublicMintQuoteResponse message.
 * @name QueryPublicMintQuoteResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPublicMintQuoteResponse
 */
export interface QueryPublicMintQuoteResponseAmino {
  /**
   * quantity x price
   */
  total_price?: CoinAmino;
  /**
   * Part of total_price routed to the community pool.
   */
  fee?: CoinAmino;
  /**
   * quantity x token_deposit (refundable).
   */
  deposit?: CoinAmino;
  /**
   * Remaining per-address allowance; -1 = unlimited.
   */
  remaining_allowance?: string;
  /**
   * true when a public mint of this quantity would currently succeed.
   */
  available?: boolean;
  /**
   * Why not, when available is false.
   */
  reason?: string;
}
export interface QueryPublicMintQuoteResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryPublicMintQuoteResponse";
  value: QueryPublicMintQuoteResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.artifact.v1.QueryParamsRequest",
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
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
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
      typeUrl: "/sparkdream.artifact.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseClassView(): ClassView {
  return {
    class: Class.fromPartial({}),
    withheld: false
  };
}
/**
 * ClassView is a class as served to clients. When withheld is true the
 * content fields have been blanked because the class is hidden.
 * @name ClassView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.ClassView
 */
export const ClassView = {
  typeUrl: "/sparkdream.artifact.v1.ClassView",
  encode(message: ClassView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    if (message.withheld === true) {
      writer.uint32(16).bool(message.withheld);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        case 2:
          message.withheld = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClassView>): ClassView {
    const message = createBaseClassView();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    message.withheld = object.withheld ?? false;
    return message;
  },
  fromAmino(object: ClassViewAmino): ClassView {
    const message = createBaseClassView();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromAmino(object.class);
    }
    if (object.withheld !== undefined && object.withheld !== null) {
      message.withheld = object.withheld;
    }
    return message;
  },
  toAmino(message: ClassView): ClassViewAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    return obj;
  },
  fromAminoMsg(object: ClassViewAminoMsg): ClassView {
    return ClassView.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassViewProtoMsg): ClassView {
    return ClassView.decode(message.value);
  },
  toProto(message: ClassView): Uint8Array {
    return ClassView.encode(message).finish();
  },
  toProtoMsg(message: ClassView): ClassViewProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.ClassView",
      value: ClassView.encode(message).finish()
    };
  }
};
function createBaseTokenView(): TokenView {
  return {
    token: Token.fromPartial({}),
    withheld: false,
    metadataHash: "",
    classStatus: 0
  };
}
/**
 * TokenView is a token as served to clients. When withheld is true the
 * metadata has been blanked because the token or its class is hidden.
 * @name TokenView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TokenView
 */
export const TokenView = {
  typeUrl: "/sparkdream.artifact.v1.TokenView",
  encode(message: TokenView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.withheld === true) {
      writer.uint32(16).bool(message.withheld);
    }
    if (message.metadataHash !== "") {
      writer.uint32(26).string(message.metadataHash);
    }
    if (message.classStatus !== 0) {
      writer.uint32(32).int32(message.classStatus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        case 2:
          message.withheld = reader.bool();
          break;
        case 3:
          message.metadataHash = reader.string();
          break;
        case 4:
          message.classStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenView>): TokenView {
    const message = createBaseTokenView();
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    message.withheld = object.withheld ?? false;
    message.metadataHash = object.metadataHash ?? "";
    message.classStatus = object.classStatus ?? 0;
    return message;
  },
  fromAmino(object: TokenViewAmino): TokenView {
    const message = createBaseTokenView();
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    if (object.withheld !== undefined && object.withheld !== null) {
      message.withheld = object.withheld;
    }
    if (object.metadata_hash !== undefined && object.metadata_hash !== null) {
      message.metadataHash = object.metadata_hash;
    }
    if (object.class_status !== undefined && object.class_status !== null) {
      message.classStatus = object.class_status;
    }
    return message;
  },
  toAmino(message: TokenView): TokenViewAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    obj.metadata_hash = message.metadataHash === "" ? undefined : message.metadataHash;
    obj.class_status = message.classStatus === 0 ? undefined : message.classStatus;
    return obj;
  },
  fromAminoMsg(object: TokenViewAminoMsg): TokenView {
    return TokenView.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenViewProtoMsg): TokenView {
    return TokenView.decode(message.value);
  },
  toProto(message: TokenView): Uint8Array {
    return TokenView.encode(message).finish();
  },
  toProtoMsg(message: TokenView): TokenViewProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.TokenView",
      value: TokenView.encode(message).finish()
    };
  }
};
function createBaseInboxItem(): InboxItem {
  return {
    kind: 0,
    classId: BigInt(0),
    tokenId: BigInt(0),
    from: "",
    to: "",
    createdAt: BigInt(0),
    expiresAt: BigInt(0),
    metadata: TokenMetadata.fromPartial({}),
    metadataHash: "",
    withheld: false
  };
}
/**
 * InboxItem is one open pending transfer or pending mint.
 * @name InboxItem
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.InboxItem
 */
export const InboxItem = {
  typeUrl: "/sparkdream.artifact.v1.InboxItem",
  encode(message: InboxItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(56).int64(message.expiresAt);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(66).fork()).ldelim();
    }
    if (message.metadataHash !== "") {
      writer.uint32(74).string(message.metadataHash);
    }
    if (message.withheld === true) {
      writer.uint32(80).bool(message.withheld);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InboxItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInboxItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.from = reader.string();
          break;
        case 5:
          message.to = reader.string();
          break;
        case 6:
          message.createdAt = reader.int64();
          break;
        case 7:
          message.expiresAt = reader.int64();
          break;
        case 8:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 9:
          message.metadataHash = reader.string();
          break;
        case 10:
          message.withheld = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InboxItem>): InboxItem {
    const message = createBaseInboxItem();
    message.kind = object.kind ?? 0;
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.metadataHash = object.metadataHash ?? "";
    message.withheld = object.withheld ?? false;
    return message;
  },
  fromAmino(object: InboxItemAmino): InboxItem {
    const message = createBaseInboxItem();
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
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
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.metadata_hash !== undefined && object.metadata_hash !== null) {
      message.metadataHash = object.metadata_hash;
    }
    if (object.withheld !== undefined && object.withheld !== null) {
      message.withheld = object.withheld;
    }
    return message;
  },
  toAmino(message: InboxItem): InboxItemAmino {
    const obj: any = {};
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : undefined;
    obj.metadata_hash = message.metadataHash === "" ? undefined : message.metadataHash;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    return obj;
  },
  fromAminoMsg(object: InboxItemAminoMsg): InboxItem {
    return InboxItem.fromAmino(object.value);
  },
  fromProtoMsg(message: InboxItemProtoMsg): InboxItem {
    return InboxItem.decode(message.value);
  },
  toProto(message: InboxItem): Uint8Array {
    return InboxItem.encode(message).finish();
  },
  toProtoMsg(message: InboxItem): InboxItemProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.InboxItem",
      value: InboxItem.encode(message).finish()
    };
  }
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: BigInt(0)
  };
}
/**
 * QueryClassRequest defines the QueryClassRequest message.
 * @name QueryClassRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassRequest
 */
export const QueryClassRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryClassRequest",
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: ClassView.fromPartial({})
  };
}
/**
 * QueryClassResponse defines the QueryClassResponse message.
 * @name QueryClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassResponse
 */
export const QueryClassResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryClassResponse",
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      ClassView.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = ClassView.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? ClassView.fromPartial(object.class) : undefined;
    return message;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = ClassView.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? ClassView.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryClassesRequest defines the QueryClassesRequest message.
 * @name QueryClassesRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesRequest
 */
export const QueryClassesRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesRequest",
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
/**
 * QueryClassesResponse defines the QueryClassesResponse message.
 * @name QueryClassesResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesResponse
 */
export const QueryClassesResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesResponse",
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      ClassView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassView.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByOwnerRequest(): QueryClassesByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
/**
 * QueryClassesByOwnerRequest defines the QueryClassesByOwnerRequest message.
 * @name QueryClassesByOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesByOwnerRequest
 */
export const QueryClassesByOwnerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesByOwnerRequest",
  encode(message: QueryClassesByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByOwnerRequest();
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
  fromPartial(object: DeepPartial<QueryClassesByOwnerRequest>): QueryClassesByOwnerRequest {
    const message = createBaseQueryClassesByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByOwnerRequestAmino): QueryClassesByOwnerRequest {
    const message = createBaseQueryClassesByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByOwnerRequest): QueryClassesByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByOwnerRequestAminoMsg): QueryClassesByOwnerRequest {
    return QueryClassesByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByOwnerRequestProtoMsg): QueryClassesByOwnerRequest {
    return QueryClassesByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryClassesByOwnerRequest): Uint8Array {
    return QueryClassesByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByOwnerRequest): QueryClassesByOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryClassesByOwnerRequest",
      value: QueryClassesByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByOwnerResponse(): QueryClassesByOwnerResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
/**
 * QueryClassesByOwnerResponse defines the QueryClassesByOwnerResponse message.
 * @name QueryClassesByOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryClassesByOwnerResponse
 */
export const QueryClassesByOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryClassesByOwnerResponse",
  encode(message: QueryClassesByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      ClassView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryClassesByOwnerResponse>): QueryClassesByOwnerResponse {
    const message = createBaseQueryClassesByOwnerResponse();
    message.classes = object.classes?.map(e => ClassView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByOwnerResponseAmino): QueryClassesByOwnerResponse {
    const message = createBaseQueryClassesByOwnerResponse();
    message.classes = object.classes?.map(e => ClassView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByOwnerResponse): QueryClassesByOwnerResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassView.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByOwnerResponseAminoMsg): QueryClassesByOwnerResponse {
    return QueryClassesByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByOwnerResponseProtoMsg): QueryClassesByOwnerResponse {
    return QueryClassesByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryClassesByOwnerResponse): Uint8Array {
    return QueryClassesByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByOwnerResponse): QueryClassesByOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryClassesByOwnerResponse",
      value: QueryClassesByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenRequest(): QueryTokenRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryTokenRequest defines the QueryTokenRequest message.
 * @name QueryTokenRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokenRequest
 */
export const QueryTokenRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryTokenRequest",
  encode(message: QueryTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
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
  fromPartial(object: DeepPartial<QueryTokenRequest>): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTokenRequestAmino): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryTokenRequest): QueryTokenRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenRequestAminoMsg): QueryTokenRequest {
    return QueryTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenRequestProtoMsg): QueryTokenRequest {
    return QueryTokenRequest.decode(message.value);
  },
  toProto(message: QueryTokenRequest): Uint8Array {
    return QueryTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenRequest): QueryTokenRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryTokenRequest",
      value: QueryTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenResponse(): QueryTokenResponse {
  return {
    token: TokenView.fromPartial({}),
    listing: undefined
  };
}
/**
 * QueryTokenResponse defines the QueryTokenResponse message.
 * @name QueryTokenResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokenResponse
 */
export const QueryTokenResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryTokenResponse",
  encode(message: QueryTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      TokenView.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = TokenView.decode(reader, reader.uint32());
          break;
        case 2:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenResponse>): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token = object.token !== undefined && object.token !== null ? TokenView.fromPartial(object.token) : undefined;
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenResponseAmino): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    if (object.token !== undefined && object.token !== null) {
      message.token = TokenView.fromAmino(object.token);
    }
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromAmino(object.listing);
    }
    return message;
  },
  toAmino(message: QueryTokenResponse): QueryTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? TokenView.toAmino(message.token) : undefined;
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenResponseAminoMsg): QueryTokenResponse {
    return QueryTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenResponseProtoMsg): QueryTokenResponse {
    return QueryTokenResponse.decode(message.value);
  },
  toProto(message: QueryTokenResponse): Uint8Array {
    return QueryTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenResponse): QueryTokenResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryTokenResponse",
      value: QueryTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokensRequest(): QueryTokensRequest {
  return {
    classId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTokensRequest defines the QueryTokensRequest message.
 * @name QueryTokensRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensRequest
 */
export const QueryTokensRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensRequest",
  encode(message: QueryTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryTokensRequest>): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensRequestAmino): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensRequest): QueryTokensRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensRequestAminoMsg): QueryTokensRequest {
    return QueryTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensRequestProtoMsg): QueryTokensRequest {
    return QueryTokensRequest.decode(message.value);
  },
  toProto(message: QueryTokensRequest): Uint8Array {
    return QueryTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensRequest): QueryTokensRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryTokensRequest",
      value: QueryTokensRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokensResponse(): QueryTokensResponse {
  return {
    tokens: [],
    pagination: undefined
  };
}
/**
 * QueryTokensResponse defines the QueryTokensResponse message.
 * @name QueryTokensResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensResponse
 */
export const QueryTokensResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensResponse",
  encode(message: QueryTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      TokenView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(TokenView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryTokensResponse>): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map(e => TokenView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensResponseAmino): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map(e => TokenView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensResponse): QueryTokensResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenView.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensResponseAminoMsg): QueryTokensResponse {
    return QueryTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensResponseProtoMsg): QueryTokensResponse {
    return QueryTokensResponse.decode(message.value);
  },
  toProto(message: QueryTokensResponse): Uint8Array {
    return QueryTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensResponse): QueryTokensResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryTokensResponse",
      value: QueryTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokensByOwnerRequest(): QueryTokensByOwnerRequest {
  return {
    owner: "",
    classId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTokensByOwnerRequest defines the QueryTokensByOwnerRequest message.
 * @name QueryTokensByOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensByOwnerRequest
 */
export const QueryTokensByOwnerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensByOwnerRequest",
  encode(message: QueryTokensByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokensByOwnerRequest>): QueryTokensByOwnerRequest {
    const message = createBaseQueryTokensByOwnerRequest();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensByOwnerRequestAmino): QueryTokensByOwnerRequest {
    const message = createBaseQueryTokensByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensByOwnerRequest): QueryTokensByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensByOwnerRequestAminoMsg): QueryTokensByOwnerRequest {
    return QueryTokensByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensByOwnerRequestProtoMsg): QueryTokensByOwnerRequest {
    return QueryTokensByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryTokensByOwnerRequest): Uint8Array {
    return QueryTokensByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensByOwnerRequest): QueryTokensByOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryTokensByOwnerRequest",
      value: QueryTokensByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokensByOwnerResponse(): QueryTokensByOwnerResponse {
  return {
    tokens: [],
    pagination: undefined
  };
}
/**
 * QueryTokensByOwnerResponse defines the QueryTokensByOwnerResponse message.
 * @name QueryTokensByOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryTokensByOwnerResponse
 */
export const QueryTokensByOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryTokensByOwnerResponse",
  encode(message: QueryTokensByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      TokenView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(TokenView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryTokensByOwnerResponse>): QueryTokensByOwnerResponse {
    const message = createBaseQueryTokensByOwnerResponse();
    message.tokens = object.tokens?.map(e => TokenView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensByOwnerResponseAmino): QueryTokensByOwnerResponse {
    const message = createBaseQueryTokensByOwnerResponse();
    message.tokens = object.tokens?.map(e => TokenView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensByOwnerResponse): QueryTokensByOwnerResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? TokenView.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensByOwnerResponseAminoMsg): QueryTokensByOwnerResponse {
    return QueryTokensByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensByOwnerResponseProtoMsg): QueryTokensByOwnerResponse {
    return QueryTokensByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryTokensByOwnerResponse): Uint8Array {
    return QueryTokensByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensByOwnerResponse): QueryTokensByOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryTokensByOwnerResponse",
      value: QueryTokensByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryOwnerRequest defines the QueryOwnerRequest message.
 * @name QueryOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOwnerRequest
 */
export const QueryOwnerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryOwnerRequest",
  encode(message: QueryOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
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
  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto(message: QueryOwnerRequest): Uint8Array {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}
/**
 * QueryOwnerResponse defines the QueryOwnerResponse message.
 * @name QueryOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOwnerResponse
 */
export const QueryOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryOwnerResponse",
  encode(message: QueryOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto(message: QueryOwnerResponse): Uint8Array {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: BigInt(0)
  };
}
/**
 * QuerySupplyRequest defines the QuerySupplyRequest message.
 * @name QuerySupplyRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QuerySupplyRequest
 */
export const QuerySupplyRequest = {
  typeUrl: "/sparkdream.artifact.v1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    supply: BigInt(0),
    burned: BigInt(0),
    reservedSupply: BigInt(0),
    maxSupply: BigInt(0),
    mintingClosed: false
  };
}
/**
 * QuerySupplyResponse defines the QuerySupplyResponse message.
 * @name QuerySupplyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QuerySupplyResponse
 */
export const QuerySupplyResponse = {
  typeUrl: "/sparkdream.artifact.v1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supply !== BigInt(0)) {
      writer.uint32(8).uint64(message.supply);
    }
    if (message.burned !== BigInt(0)) {
      writer.uint32(16).uint64(message.burned);
    }
    if (message.reservedSupply !== BigInt(0)) {
      writer.uint32(24).uint64(message.reservedSupply);
    }
    if (message.maxSupply !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxSupply);
    }
    if (message.mintingClosed === true) {
      writer.uint32(40).bool(message.mintingClosed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = reader.uint64();
          break;
        case 2:
          message.burned = reader.uint64();
          break;
        case 3:
          message.reservedSupply = reader.uint64();
          break;
        case 4:
          message.maxSupply = reader.uint64();
          break;
        case 5:
          message.mintingClosed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.supply = object.supply !== undefined && object.supply !== null ? BigInt(object.supply.toString()) : BigInt(0);
    message.burned = object.burned !== undefined && object.burned !== null ? BigInt(object.burned.toString()) : BigInt(0);
    message.reservedSupply = object.reservedSupply !== undefined && object.reservedSupply !== null ? BigInt(object.reservedSupply.toString()) : BigInt(0);
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.mintingClosed = object.mintingClosed ?? false;
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = BigInt(object.supply);
    }
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = BigInt(object.burned);
    }
    if (object.reserved_supply !== undefined && object.reserved_supply !== null) {
      message.reservedSupply = BigInt(object.reserved_supply);
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = BigInt(object.max_supply);
    }
    if (object.minting_closed !== undefined && object.minting_closed !== null) {
      message.mintingClosed = object.minting_closed;
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.supply = message.supply !== BigInt(0) ? message.supply?.toString() : undefined;
    obj.burned = message.burned !== BigInt(0) ? message.burned?.toString() : undefined;
    obj.reserved_supply = message.reservedSupply !== BigInt(0) ? message.reservedSupply?.toString() : undefined;
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
    obj.minting_closed = message.mintingClosed === false ? undefined : message.mintingClosed;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryListingRequest defines the QueryListingRequest message.
 * @name QueryListingRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingRequest
 */
export const QueryListingRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryListingRequest",
  encode(message: QueryListingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingRequest();
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
  fromPartial(object: DeepPartial<QueryListingRequest>): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryListingRequestAmino): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryListingRequest): QueryListingRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingRequestAminoMsg): QueryListingRequest {
    return QueryListingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingRequestProtoMsg): QueryListingRequest {
    return QueryListingRequest.decode(message.value);
  },
  toProto(message: QueryListingRequest): Uint8Array {
    return QueryListingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingRequest): QueryListingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryListingRequest",
      value: QueryListingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: Listing.fromPartial({})
  };
}
/**
 * QueryListingResponse defines the QueryListingResponse message.
 * @name QueryListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingResponse
 */
export const QueryListingResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryListingResponse",
  encode(message: QueryListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListingResponse>): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: QueryListingResponseAmino): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromAmino(object.listing);
    }
    return message;
  },
  toAmino(message: QueryListingResponse): QueryListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingResponseAminoMsg): QueryListingResponse {
    return QueryListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingResponseProtoMsg): QueryListingResponse {
    return QueryListingResponse.decode(message.value);
  },
  toProto(message: QueryListingResponse): Uint8Array {
    return QueryListingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingResponse): QueryListingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryListingResponse",
      value: QueryListingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingsRequest(): QueryListingsRequest {
  return {
    classId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryListingsRequest defines the QueryListingsRequest message.
 * @name QueryListingsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsRequest
 */
export const QueryListingsRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsRequest",
  encode(message: QueryListingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryListingsRequest>): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsRequestAmino): QueryListingsRequest {
    const message = createBaseQueryListingsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsRequest): QueryListingsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsRequestAminoMsg): QueryListingsRequest {
    return QueryListingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsRequestProtoMsg): QueryListingsRequest {
    return QueryListingsRequest.decode(message.value);
  },
  toProto(message: QueryListingsRequest): Uint8Array {
    return QueryListingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsRequest): QueryListingsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryListingsRequest",
      value: QueryListingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsResponse(): QueryListingsResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
/**
 * QueryListingsResponse defines the QueryListingsResponse message.
 * @name QueryListingsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsResponse
 */
export const QueryListingsResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsResponse",
  encode(message: QueryListingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListingsResponse>): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsResponseAmino): QueryListingsResponse {
    const message = createBaseQueryListingsResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsResponse): QueryListingsResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = message.listings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsResponseAminoMsg): QueryListingsResponse {
    return QueryListingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsResponseProtoMsg): QueryListingsResponse {
    return QueryListingsResponse.decode(message.value);
  },
  toProto(message: QueryListingsResponse): Uint8Array {
    return QueryListingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsResponse): QueryListingsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryListingsResponse",
      value: QueryListingsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingsBySellerRequest(): QueryListingsBySellerRequest {
  return {
    seller: "",
    pagination: undefined
  };
}
/**
 * QueryListingsBySellerRequest defines the QueryListingsBySellerRequest message.
 * @name QueryListingsBySellerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsBySellerRequest
 */
export const QueryListingsBySellerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsBySellerRequest",
  encode(message: QueryListingsBySellerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsBySellerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsBySellerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
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
  fromPartial(object: DeepPartial<QueryListingsBySellerRequest>): QueryListingsBySellerRequest {
    const message = createBaseQueryListingsBySellerRequest();
    message.seller = object.seller ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsBySellerRequestAmino): QueryListingsBySellerRequest {
    const message = createBaseQueryListingsBySellerRequest();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsBySellerRequest): QueryListingsBySellerRequestAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsBySellerRequestAminoMsg): QueryListingsBySellerRequest {
    return QueryListingsBySellerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsBySellerRequestProtoMsg): QueryListingsBySellerRequest {
    return QueryListingsBySellerRequest.decode(message.value);
  },
  toProto(message: QueryListingsBySellerRequest): Uint8Array {
    return QueryListingsBySellerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsBySellerRequest): QueryListingsBySellerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryListingsBySellerRequest",
      value: QueryListingsBySellerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsBySellerResponse(): QueryListingsBySellerResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
/**
 * QueryListingsBySellerResponse defines the QueryListingsBySellerResponse message.
 * @name QueryListingsBySellerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryListingsBySellerResponse
 */
export const QueryListingsBySellerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryListingsBySellerResponse",
  encode(message: QueryListingsBySellerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListingsBySellerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsBySellerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListingsBySellerResponse>): QueryListingsBySellerResponse {
    const message = createBaseQueryListingsBySellerResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsBySellerResponseAmino): QueryListingsBySellerResponse {
    const message = createBaseQueryListingsBySellerResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsBySellerResponse): QueryListingsBySellerResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = message.listings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsBySellerResponseAminoMsg): QueryListingsBySellerResponse {
    return QueryListingsBySellerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsBySellerResponseProtoMsg): QueryListingsBySellerResponse {
    return QueryListingsBySellerResponse.decode(message.value);
  },
  toProto(message: QueryListingsBySellerResponse): Uint8Array {
    return QueryListingsBySellerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsBySellerResponse): QueryListingsBySellerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryListingsBySellerResponse",
      value: QueryListingsBySellerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInboxRequest(): QueryInboxRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryInboxRequest defines the QueryInboxRequest message.
 * @name QueryInboxRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryInboxRequest
 */
export const QueryInboxRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryInboxRequest",
  encode(message: QueryInboxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInboxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInboxRequest();
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
  fromPartial(object: DeepPartial<QueryInboxRequest>): QueryInboxRequest {
    const message = createBaseQueryInboxRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInboxRequestAmino): QueryInboxRequest {
    const message = createBaseQueryInboxRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInboxRequest): QueryInboxRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInboxRequestAminoMsg): QueryInboxRequest {
    return QueryInboxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInboxRequestProtoMsg): QueryInboxRequest {
    return QueryInboxRequest.decode(message.value);
  },
  toProto(message: QueryInboxRequest): Uint8Array {
    return QueryInboxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInboxRequest): QueryInboxRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryInboxRequest",
      value: QueryInboxRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInboxResponse(): QueryInboxResponse {
  return {
    items: [],
    inboxCount: 0,
    pagination: undefined
  };
}
/**
 * QueryInboxResponse defines the QueryInboxResponse message.
 * @name QueryInboxResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryInboxResponse
 */
export const QueryInboxResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryInboxResponse",
  encode(message: QueryInboxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.items) {
      InboxItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.inboxCount !== 0) {
      writer.uint32(16).uint32(message.inboxCount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInboxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInboxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(InboxItem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.inboxCount = reader.uint32();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInboxResponse>): QueryInboxResponse {
    const message = createBaseQueryInboxResponse();
    message.items = object.items?.map(e => InboxItem.fromPartial(e)) || [];
    message.inboxCount = object.inboxCount ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInboxResponseAmino): QueryInboxResponse {
    const message = createBaseQueryInboxResponse();
    message.items = object.items?.map(e => InboxItem.fromAmino(e)) || [];
    if (object.inbox_count !== undefined && object.inbox_count !== null) {
      message.inboxCount = object.inbox_count;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInboxResponse): QueryInboxResponseAmino {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? InboxItem.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    obj.inbox_count = message.inboxCount === 0 ? undefined : message.inboxCount;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInboxResponseAminoMsg): QueryInboxResponse {
    return QueryInboxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInboxResponseProtoMsg): QueryInboxResponse {
    return QueryInboxResponse.decode(message.value);
  },
  toProto(message: QueryInboxResponse): Uint8Array {
    return QueryInboxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInboxResponse): QueryInboxResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryInboxResponse",
      value: QueryInboxResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutboxRequest(): QueryOutboxRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryOutboxRequest defines the QueryOutboxRequest message.
 * @name QueryOutboxRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOutboxRequest
 */
export const QueryOutboxRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryOutboxRequest",
  encode(message: QueryOutboxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutboxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutboxRequest();
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
  fromPartial(object: DeepPartial<QueryOutboxRequest>): QueryOutboxRequest {
    const message = createBaseQueryOutboxRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOutboxRequestAmino): QueryOutboxRequest {
    const message = createBaseQueryOutboxRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOutboxRequest): QueryOutboxRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOutboxRequestAminoMsg): QueryOutboxRequest {
    return QueryOutboxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutboxRequestProtoMsg): QueryOutboxRequest {
    return QueryOutboxRequest.decode(message.value);
  },
  toProto(message: QueryOutboxRequest): Uint8Array {
    return QueryOutboxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutboxRequest): QueryOutboxRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOutboxRequest",
      value: QueryOutboxRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutboxResponse(): QueryOutboxResponse {
  return {
    items: [],
    pagination: undefined
  };
}
/**
 * QueryOutboxResponse defines the QueryOutboxResponse message.
 * @name QueryOutboxResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOutboxResponse
 */
export const QueryOutboxResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryOutboxResponse",
  encode(message: QueryOutboxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.items) {
      InboxItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutboxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutboxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(InboxItem.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryOutboxResponse>): QueryOutboxResponse {
    const message = createBaseQueryOutboxResponse();
    message.items = object.items?.map(e => InboxItem.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOutboxResponseAmino): QueryOutboxResponse {
    const message = createBaseQueryOutboxResponse();
    message.items = object.items?.map(e => InboxItem.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOutboxResponse): QueryOutboxResponseAmino {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? InboxItem.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOutboxResponseAminoMsg): QueryOutboxResponse {
    return QueryOutboxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutboxResponseProtoMsg): QueryOutboxResponse {
    return QueryOutboxResponse.decode(message.value);
  },
  toProto(message: QueryOutboxResponse): Uint8Array {
    return QueryOutboxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutboxResponse): QueryOutboxResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOutboxResponse",
      value: QueryOutboxResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReceivePolicyRequest(): QueryReceivePolicyRequest {
  return {
    address: ""
  };
}
/**
 * QueryReceivePolicyRequest defines the QueryReceivePolicyRequest message.
 * @name QueryReceivePolicyRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryReceivePolicyRequest
 */
export const QueryReceivePolicyRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryReceivePolicyRequest",
  encode(message: QueryReceivePolicyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReceivePolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceivePolicyRequest();
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
  fromPartial(object: DeepPartial<QueryReceivePolicyRequest>): QueryReceivePolicyRequest {
    const message = createBaseQueryReceivePolicyRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryReceivePolicyRequestAmino): QueryReceivePolicyRequest {
    const message = createBaseQueryReceivePolicyRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryReceivePolicyRequest): QueryReceivePolicyRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryReceivePolicyRequestAminoMsg): QueryReceivePolicyRequest {
    return QueryReceivePolicyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReceivePolicyRequestProtoMsg): QueryReceivePolicyRequest {
    return QueryReceivePolicyRequest.decode(message.value);
  },
  toProto(message: QueryReceivePolicyRequest): Uint8Array {
    return QueryReceivePolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReceivePolicyRequest): QueryReceivePolicyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryReceivePolicyRequest",
      value: QueryReceivePolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReceivePolicyResponse(): QueryReceivePolicyResponse {
  return {
    policy: 0,
    isDefault: false
  };
}
/**
 * QueryReceivePolicyResponse defines the QueryReceivePolicyResponse message.
 * @name QueryReceivePolicyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryReceivePolicyResponse
 */
export const QueryReceivePolicyResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryReceivePolicyResponse",
  encode(message: QueryReceivePolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policy !== 0) {
      writer.uint32(8).int32(message.policy);
    }
    if (message.isDefault === true) {
      writer.uint32(16).bool(message.isDefault);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReceivePolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceivePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = reader.int32() as any;
          break;
        case 2:
          message.isDefault = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReceivePolicyResponse>): QueryReceivePolicyResponse {
    const message = createBaseQueryReceivePolicyResponse();
    message.policy = object.policy ?? 0;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
  fromAmino(object: QueryReceivePolicyResponseAmino): QueryReceivePolicyResponse {
    const message = createBaseQueryReceivePolicyResponse();
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = object.policy;
    }
    if (object.is_default !== undefined && object.is_default !== null) {
      message.isDefault = object.is_default;
    }
    return message;
  },
  toAmino(message: QueryReceivePolicyResponse): QueryReceivePolicyResponseAmino {
    const obj: any = {};
    obj.policy = message.policy === 0 ? undefined : message.policy;
    obj.is_default = message.isDefault === false ? undefined : message.isDefault;
    return obj;
  },
  fromAminoMsg(object: QueryReceivePolicyResponseAminoMsg): QueryReceivePolicyResponse {
    return QueryReceivePolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReceivePolicyResponseProtoMsg): QueryReceivePolicyResponse {
    return QueryReceivePolicyResponse.decode(message.value);
  },
  toProto(message: QueryReceivePolicyResponse): Uint8Array {
    return QueryReceivePolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReceivePolicyResponse): QueryReceivePolicyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryReceivePolicyResponse",
      value: QueryReceivePolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingClassOwnerRequest(): QueryPendingClassOwnerRequest {
  return {
    classId: BigInt(0)
  };
}
/**
 * QueryPendingClassOwnerRequest defines the QueryPendingClassOwnerRequest message.
 * @name QueryPendingClassOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPendingClassOwnerRequest
 */
export const QueryPendingClassOwnerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryPendingClassOwnerRequest",
  encode(message: QueryPendingClassOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingClassOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingClassOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingClassOwnerRequest>): QueryPendingClassOwnerRequest {
    const message = createBaseQueryPendingClassOwnerRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPendingClassOwnerRequestAmino): QueryPendingClassOwnerRequest {
    const message = createBaseQueryPendingClassOwnerRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: QueryPendingClassOwnerRequest): QueryPendingClassOwnerRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingClassOwnerRequestAminoMsg): QueryPendingClassOwnerRequest {
    return QueryPendingClassOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingClassOwnerRequestProtoMsg): QueryPendingClassOwnerRequest {
    return QueryPendingClassOwnerRequest.decode(message.value);
  },
  toProto(message: QueryPendingClassOwnerRequest): Uint8Array {
    return QueryPendingClassOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingClassOwnerRequest): QueryPendingClassOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryPendingClassOwnerRequest",
      value: QueryPendingClassOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingClassOwnerResponse(): QueryPendingClassOwnerResponse {
  return {
    pending: PendingClassOwner.fromPartial({})
  };
}
/**
 * QueryPendingClassOwnerResponse defines the QueryPendingClassOwnerResponse message.
 * @name QueryPendingClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPendingClassOwnerResponse
 */
export const QueryPendingClassOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryPendingClassOwnerResponse",
  encode(message: QueryPendingClassOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pending !== undefined) {
      PendingClassOwner.encode(message.pending, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingClassOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingClassOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending = PendingClassOwner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingClassOwnerResponse>): QueryPendingClassOwnerResponse {
    const message = createBaseQueryPendingClassOwnerResponse();
    message.pending = object.pending !== undefined && object.pending !== null ? PendingClassOwner.fromPartial(object.pending) : undefined;
    return message;
  },
  fromAmino(object: QueryPendingClassOwnerResponseAmino): QueryPendingClassOwnerResponse {
    const message = createBaseQueryPendingClassOwnerResponse();
    if (object.pending !== undefined && object.pending !== null) {
      message.pending = PendingClassOwner.fromAmino(object.pending);
    }
    return message;
  },
  toAmino(message: QueryPendingClassOwnerResponse): QueryPendingClassOwnerResponseAmino {
    const obj: any = {};
    obj.pending = message.pending ? PendingClassOwner.toAmino(message.pending) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingClassOwnerResponseAminoMsg): QueryPendingClassOwnerResponse {
    return QueryPendingClassOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingClassOwnerResponseProtoMsg): QueryPendingClassOwnerResponse {
    return QueryPendingClassOwnerResponse.decode(message.value);
  },
  toProto(message: QueryPendingClassOwnerResponse): Uint8Array {
    return QueryPendingClassOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingClassOwnerResponse): QueryPendingClassOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryPendingClassOwnerResponse",
      value: QueryPendingClassOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordRequest(): QueryHideRecordRequest {
  return {
    hideId: BigInt(0)
  };
}
/**
 * QueryHideRecordRequest defines the QueryHideRecordRequest message.
 * @name QueryHideRecordRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordRequest
 */
export const QueryHideRecordRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordRequest",
  encode(message: QueryHideRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hideId !== BigInt(0)) {
      writer.uint32(8).uint64(message.hideId);
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
          message.hideId = reader.uint64();
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
    message.hideId = object.hideId !== undefined && object.hideId !== null ? BigInt(object.hideId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHideRecordRequestAmino): QueryHideRecordRequest {
    const message = createBaseQueryHideRecordRequest();
    if (object.hide_id !== undefined && object.hide_id !== null) {
      message.hideId = BigInt(object.hide_id);
    }
    return message;
  },
  toAmino(message: QueryHideRecordRequest): QueryHideRecordRequestAmino {
    const obj: any = {};
    obj.hide_id = message.hideId !== BigInt(0) ? message.hideId?.toString() : undefined;
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
      typeUrl: "/sparkdream.artifact.v1.QueryHideRecordRequest",
      value: QueryHideRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordResponse(): QueryHideRecordResponse {
  return {
    record: HideRecord.fromPartial({})
  };
}
/**
 * QueryHideRecordResponse defines the QueryHideRecordResponse message.
 * @name QueryHideRecordResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordResponse
 */
export const QueryHideRecordResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordResponse",
  encode(message: QueryHideRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      HideRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
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
          message.record = HideRecord.decode(reader, reader.uint32());
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
    message.record = object.record !== undefined && object.record !== null ? HideRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryHideRecordResponseAmino): QueryHideRecordResponse {
    const message = createBaseQueryHideRecordResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = HideRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryHideRecordResponse): QueryHideRecordResponseAmino {
    const obj: any = {};
    obj.record = message.record ? HideRecord.toAmino(message.record) : undefined;
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
      typeUrl: "/sparkdream.artifact.v1.QueryHideRecordResponse",
      value: QueryHideRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordsByTargetRequest(): QueryHideRecordsByTargetRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryHideRecordsByTargetRequest defines the QueryHideRecordsByTargetRequest message.
 * @name QueryHideRecordsByTargetRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordsByTargetRequest
 */
export const QueryHideRecordsByTargetRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordsByTargetRequest",
  encode(message: QueryHideRecordsByTargetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
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
  fromPartial(object: DeepPartial<QueryHideRecordsByTargetRequest>): QueryHideRecordsByTargetRequest {
    const message = createBaseQueryHideRecordsByTargetRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHideRecordsByTargetRequestAmino): QueryHideRecordsByTargetRequest {
    const message = createBaseQueryHideRecordsByTargetRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryHideRecordsByTargetRequest): QueryHideRecordsByTargetRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
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
      typeUrl: "/sparkdream.artifact.v1.QueryHideRecordsByTargetRequest",
      value: QueryHideRecordsByTargetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHideRecordsByTargetResponse(): QueryHideRecordsByTargetResponse {
  return {
    records: []
  };
}
/**
 * QueryHideRecordsByTargetResponse defines the QueryHideRecordsByTargetResponse message.
 * @name QueryHideRecordsByTargetResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHideRecordsByTargetResponse
 */
export const QueryHideRecordsByTargetResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryHideRecordsByTargetResponse",
  encode(message: QueryHideRecordsByTargetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
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
          message.records.push(HideRecord.decode(reader, reader.uint32()));
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
    message.records = object.records?.map(e => HideRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHideRecordsByTargetResponseAmino): QueryHideRecordsByTargetResponse {
    const message = createBaseQueryHideRecordsByTargetResponse();
    message.records = object.records?.map(e => HideRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHideRecordsByTargetResponse): QueryHideRecordsByTargetResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
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
      typeUrl: "/sparkdream.artifact.v1.QueryHideRecordsByTargetResponse",
      value: QueryHideRecordsByTargetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublicMintQuoteRequest(): QueryPublicMintQuoteRequest {
  return {
    classId: BigInt(0),
    buyer: "",
    quantity: 0
  };
}
/**
 * QueryPublicMintQuoteRequest defines the QueryPublicMintQuoteRequest message.
 * @name QueryPublicMintQuoteRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPublicMintQuoteRequest
 */
export const QueryPublicMintQuoteRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryPublicMintQuoteRequest",
  encode(message: QueryPublicMintQuoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.buyer !== "") {
      writer.uint32(18).string(message.buyer);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublicMintQuoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublicMintQuoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.buyer = reader.string();
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPublicMintQuoteRequest>): QueryPublicMintQuoteRequest {
    const message = createBaseQueryPublicMintQuoteRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.buyer = object.buyer ?? "";
    message.quantity = object.quantity ?? 0;
    return message;
  },
  fromAmino(object: QueryPublicMintQuoteRequestAmino): QueryPublicMintQuoteRequest {
    const message = createBaseQueryPublicMintQuoteRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    return message;
  },
  toAmino(message: QueryPublicMintQuoteRequest): QueryPublicMintQuoteRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.quantity = message.quantity === 0 ? undefined : message.quantity;
    return obj;
  },
  fromAminoMsg(object: QueryPublicMintQuoteRequestAminoMsg): QueryPublicMintQuoteRequest {
    return QueryPublicMintQuoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublicMintQuoteRequestProtoMsg): QueryPublicMintQuoteRequest {
    return QueryPublicMintQuoteRequest.decode(message.value);
  },
  toProto(message: QueryPublicMintQuoteRequest): Uint8Array {
    return QueryPublicMintQuoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublicMintQuoteRequest): QueryPublicMintQuoteRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryPublicMintQuoteRequest",
      value: QueryPublicMintQuoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublicMintQuoteResponse(): QueryPublicMintQuoteResponse {
  return {
    totalPrice: Coin.fromPartial({}),
    fee: Coin.fromPartial({}),
    deposit: Coin.fromPartial({}),
    remainingAllowance: BigInt(0),
    available: false,
    reason: ""
  };
}
/**
 * QueryPublicMintQuoteResponse defines the QueryPublicMintQuoteResponse message.
 * @name QueryPublicMintQuoteResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryPublicMintQuoteResponse
 */
export const QueryPublicMintQuoteResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryPublicMintQuoteResponse",
  encode(message: QueryPublicMintQuoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalPrice !== undefined) {
      Coin.encode(message.totalPrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.remainingAllowance !== BigInt(0)) {
      writer.uint32(32).int64(message.remainingAllowance);
    }
    if (message.available === true) {
      writer.uint32(40).bool(message.available);
    }
    if (message.reason !== "") {
      writer.uint32(50).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublicMintQuoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublicMintQuoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.remainingAllowance = reader.int64();
          break;
        case 5:
          message.available = reader.bool();
          break;
        case 6:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPublicMintQuoteResponse>): QueryPublicMintQuoteResponse {
    const message = createBaseQueryPublicMintQuoteResponse();
    message.totalPrice = object.totalPrice !== undefined && object.totalPrice !== null ? Coin.fromPartial(object.totalPrice) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.remainingAllowance = object.remainingAllowance !== undefined && object.remainingAllowance !== null ? BigInt(object.remainingAllowance.toString()) : BigInt(0);
    message.available = object.available ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: QueryPublicMintQuoteResponseAmino): QueryPublicMintQuoteResponse {
    const message = createBaseQueryPublicMintQuoteResponse();
    if (object.total_price !== undefined && object.total_price !== null) {
      message.totalPrice = Coin.fromAmino(object.total_price);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.remaining_allowance !== undefined && object.remaining_allowance !== null) {
      message.remainingAllowance = BigInt(object.remaining_allowance);
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: QueryPublicMintQuoteResponse): QueryPublicMintQuoteResponseAmino {
    const obj: any = {};
    obj.total_price = message.totalPrice ? Coin.toAmino(message.totalPrice) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.remaining_allowance = message.remainingAllowance !== BigInt(0) ? message.remainingAllowance?.toString() : undefined;
    obj.available = message.available === false ? undefined : message.available;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: QueryPublicMintQuoteResponseAminoMsg): QueryPublicMintQuoteResponse {
    return QueryPublicMintQuoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublicMintQuoteResponseProtoMsg): QueryPublicMintQuoteResponse {
    return QueryPublicMintQuoteResponse.decode(message.value);
  },
  toProto(message: QueryPublicMintQuoteResponse): Uint8Array {
    return QueryPublicMintQuoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublicMintQuoteResponse): QueryPublicMintQuoteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryPublicMintQuoteResponse",
      value: QueryPublicMintQuoteResponse.encode(message).finish()
    };
  }
};