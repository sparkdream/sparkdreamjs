//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Class, ClassAmino, Token, TokenAmino, ContentStatus, TokenMetadata, TokenMetadataAmino, InboxKind, Listing, ListingAmino, Auction, AuctionAmino, ReceivePolicy, PendingClassOwner, PendingClassOwnerAmino, HideRecord, HideRecordAmino, MediaProposal, MediaProposalAmino, Edition, EditionAmino, Balance, BalanceAmino, UnitListing, UnitListingAmino, CraftRecipe, CraftRecipeAmino, Rental, RentalAmino, RentalOffer, RentalOfferAmino, TokenRef, TokenRefAmino, HarbergerState, HarbergerStateAmino, Offer, OfferAmino } from "./types";
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
  /**
   * What clients should show: the holder's displayed media version, the
   * renderer output, the schedule stage in effect, or the stored metadata.
   * Blank when withheld.
   */
  displayedMetadata: TokenMetadata;
  /**
   * "stored" | "schedule" | "media_version" | "renderer" | "unrevealed".
   */
  displaySource: string;
  /**
   * Why a renderer fell back to stored metadata, when it did.
   */
  renderError: string;
  /**
   * true when expires_at has passed.
   */
  expired: boolean;
  /**
   * GENERATIVE_SEED classes: the token seed (lowercase hex) once the class
   * seed is revealed.
   */
  seed: string;
  /**
   * Single-token query, for a token holding nested tokens: the hash
   * MsgBuy, MsgAcceptRental, offers and bids pin.
   */
  contentsHash: string;
  /**
   * Single-token query, while rented: the renter.
   */
  user: string;
  /**
   * Single-token query, Harberger tokens: what MsgForceBuy pays now.
   */
  harbergerPrice: string;
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
  /**
   * What clients should show: the holder's displayed media version, the
   * renderer output, the schedule stage in effect, or the stored metadata.
   * Blank when withheld.
   */
  displayed_metadata?: TokenMetadataAmino;
  /**
   * "stored" | "schedule" | "media_version" | "renderer" | "unrevealed".
   */
  display_source?: string;
  /**
   * Why a renderer fell back to stored metadata, when it did.
   */
  render_error?: string;
  /**
   * true when expires_at has passed.
   */
  expired?: boolean;
  /**
   * GENERATIVE_SEED classes: the token seed (lowercase hex) once the class
   * seed is revealed.
   */
  seed?: string;
  /**
   * Single-token query, for a token holding nested tokens: the hash
   * MsgBuy, MsgAcceptRental, offers and bids pin.
   */
  contents_hash?: string;
  /**
   * Single-token query, while rented: the renter.
   */
  user?: string;
  /**
   * Single-token query, Harberger tokens: what MsgForceBuy pays now.
   */
  harberger_price?: string;
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
  /**
   * Unit items (kind UNIT_*): class_id is 0 and token_id the pending id,
   * which is the ref to accept, reject or cancel; these name the edition.
   */
  unitClassId: bigint;
  editionId: bigint;
  amount: bigint;
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
  /**
   * Unit items (kind UNIT_*): class_id is 0 and token_id the pending id,
   * which is the ref to accept, reject or cancel; these name the edition.
   */
  unit_class_id?: string;
  edition_id?: string;
  amount?: string;
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
  /**
   * Set while the token is up for auction.
   */
  auction?: Auction;
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
  /**
   * Set while the token is up for auction.
   */
  auction?: AuctionAmino;
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
  /**
   * Price of the first token in this quote under the class price curve.
   */
  unitPrice: Coin;
  /**
   * Price of the most expensive token in this quote (what max_price must cover).
   */
  maxUnitPrice: Coin;
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
  /**
   * Price of the first token in this quote under the class price curve.
   */
  unit_price?: CoinAmino;
  /**
   * Price of the most expensive token in this quote (what max_price must cover).
   */
  max_unit_price?: CoinAmino;
}
export interface QueryPublicMintQuoteResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryPublicMintQuoteResponse";
  value: QueryPublicMintQuoteResponseAmino;
}
/**
 * QueryMediaProposalsRequest defines the QueryMediaProposalsRequest message.
 * @name QueryMediaProposalsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryMediaProposalsRequest
 */
export interface QueryMediaProposalsRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryMediaProposalsRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryMediaProposalsRequest";
  value: Uint8Array;
}
/**
 * QueryMediaProposalsRequest defines the QueryMediaProposalsRequest message.
 * @name QueryMediaProposalsRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryMediaProposalsRequest
 */
export interface QueryMediaProposalsRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryMediaProposalsRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryMediaProposalsRequest";
  value: QueryMediaProposalsRequestAmino;
}
/**
 * QueryMediaProposalsResponse defines the QueryMediaProposalsResponse message.
 * @name QueryMediaProposalsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryMediaProposalsResponse
 */
export interface QueryMediaProposalsResponse {
  proposals: MediaProposal[];
}
export interface QueryMediaProposalsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryMediaProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryMediaProposalsResponse defines the QueryMediaProposalsResponse message.
 * @name QueryMediaProposalsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryMediaProposalsResponse
 */
export interface QueryMediaProposalsResponseAmino {
  proposals?: MediaProposalAmino[];
}
export interface QueryMediaProposalsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryMediaProposalsResponse";
  value: QueryMediaProposalsResponseAmino;
}
/**
 * EditionView is an edition as served to clients. When withheld is true the
 * metadata and claim scope are blanked because the edition or its class is
 * hidden.
 * @name EditionView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.EditionView
 */
export interface EditionView {
  edition: Edition;
  withheld: boolean;
  metadataHash: string;
  classStatus: ContentStatus;
}
export interface EditionViewProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.EditionView";
  value: Uint8Array;
}
/**
 * EditionView is an edition as served to clients. When withheld is true the
 * metadata and claim scope are blanked because the edition or its class is
 * hidden.
 * @name EditionViewAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.EditionView
 */
export interface EditionViewAmino {
  edition?: EditionAmino;
  withheld?: boolean;
  metadata_hash?: string;
  class_status?: ContentStatus;
}
export interface EditionViewAminoMsg {
  type: "/sparkdream.artifact.v1.EditionView";
  value: EditionViewAmino;
}
/**
 * BalanceView is a balance with what its holder could claim now.
 * @name BalanceView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.BalanceView
 */
export interface BalanceView {
  balance: Balance;
  /**
   * unclaimed plus rewards accrued since the last settlement.
   */
  claimable: string;
}
export interface BalanceViewProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.BalanceView";
  value: Uint8Array;
}
/**
 * BalanceView is a balance with what its holder could claim now.
 * @name BalanceViewAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.BalanceView
 */
export interface BalanceViewAmino {
  balance?: BalanceAmino;
  /**
   * unclaimed plus rewards accrued since the last settlement.
   */
  claimable?: string;
}
export interface BalanceViewAminoMsg {
  type: "/sparkdream.artifact.v1.BalanceView";
  value: BalanceViewAmino;
}
/**
 * QueryEditionRequest defines the QueryEditionRequest message.
 * @name QueryEditionRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionRequest
 */
export interface QueryEditionRequest {
  classId: bigint;
  editionId: bigint;
}
export interface QueryEditionRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionRequest";
  value: Uint8Array;
}
/**
 * QueryEditionRequest defines the QueryEditionRequest message.
 * @name QueryEditionRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionRequest
 */
export interface QueryEditionRequestAmino {
  class_id?: string;
  edition_id?: string;
}
export interface QueryEditionRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryEditionRequest";
  value: QueryEditionRequestAmino;
}
/**
 * QueryEditionResponse defines the QueryEditionResponse message.
 * @name QueryEditionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionResponse
 */
export interface QueryEditionResponse {
  edition: EditionView;
}
export interface QueryEditionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionResponse";
  value: Uint8Array;
}
/**
 * QueryEditionResponse defines the QueryEditionResponse message.
 * @name QueryEditionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionResponse
 */
export interface QueryEditionResponseAmino {
  edition?: EditionViewAmino;
}
export interface QueryEditionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryEditionResponse";
  value: QueryEditionResponseAmino;
}
/**
 * QueryEditionsRequest defines the QueryEditionsRequest message.
 * @name QueryEditionsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionsRequest
 */
export interface QueryEditionsRequest {
  classId: bigint;
  pagination?: PageRequest;
}
export interface QueryEditionsRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionsRequest";
  value: Uint8Array;
}
/**
 * QueryEditionsRequest defines the QueryEditionsRequest message.
 * @name QueryEditionsRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionsRequest
 */
export interface QueryEditionsRequestAmino {
  class_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryEditionsRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryEditionsRequest";
  value: QueryEditionsRequestAmino;
}
/**
 * QueryEditionsResponse defines the QueryEditionsResponse message.
 * @name QueryEditionsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionsResponse
 */
export interface QueryEditionsResponse {
  editions: EditionView[];
  pagination?: PageResponse;
}
export interface QueryEditionsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionsResponse";
  value: Uint8Array;
}
/**
 * QueryEditionsResponse defines the QueryEditionsResponse message.
 * @name QueryEditionsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionsResponse
 */
export interface QueryEditionsResponseAmino {
  editions?: EditionViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEditionsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryEditionsResponse";
  value: QueryEditionsResponseAmino;
}
/**
 * QueryBalanceRequest defines the QueryBalanceRequest message.
 * @name QueryBalanceRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalanceRequest
 */
export interface QueryBalanceRequest {
  classId: bigint;
  editionId: bigint;
  owner: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryBalanceRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceRequest defines the QueryBalanceRequest message.
 * @name QueryBalanceRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalanceRequest
 */
export interface QueryBalanceRequestAmino {
  class_id?: string;
  edition_id?: string;
  owner?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/**
 * QueryBalanceResponse defines the QueryBalanceResponse message.
 * @name QueryBalanceResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalanceResponse
 */
export interface QueryBalanceResponse {
  balance: BalanceView;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceResponse defines the QueryBalanceResponse message.
 * @name QueryBalanceResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalanceResponse
 */
export interface QueryBalanceResponseAmino {
  balance?: BalanceViewAmino;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/**
 * QueryBalancesByOwnerRequest defines the QueryBalancesByOwnerRequest message.
 * @name QueryBalancesByOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalancesByOwnerRequest
 */
export interface QueryBalancesByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryBalancesByOwnerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryBalancesByOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryBalancesByOwnerRequest defines the QueryBalancesByOwnerRequest message.
 * @name QueryBalancesByOwnerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalancesByOwnerRequest
 */
export interface QueryBalancesByOwnerRequestAmino {
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBalancesByOwnerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryBalancesByOwnerRequest";
  value: QueryBalancesByOwnerRequestAmino;
}
/**
 * QueryBalancesByOwnerResponse defines the QueryBalancesByOwnerResponse message.
 * @name QueryBalancesByOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalancesByOwnerResponse
 */
export interface QueryBalancesByOwnerResponse {
  balances: BalanceView[];
  pagination?: PageResponse;
}
export interface QueryBalancesByOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryBalancesByOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryBalancesByOwnerResponse defines the QueryBalancesByOwnerResponse message.
 * @name QueryBalancesByOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalancesByOwnerResponse
 */
export interface QueryBalancesByOwnerResponseAmino {
  balances?: BalanceViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBalancesByOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryBalancesByOwnerResponse";
  value: QueryBalancesByOwnerResponseAmino;
}
/**
 * QueryEditionHoldersRequest defines the QueryEditionHoldersRequest message.
 * @name QueryEditionHoldersRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionHoldersRequest
 */
export interface QueryEditionHoldersRequest {
  classId: bigint;
  editionId: bigint;
  pagination?: PageRequest;
}
export interface QueryEditionHoldersRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionHoldersRequest";
  value: Uint8Array;
}
/**
 * QueryEditionHoldersRequest defines the QueryEditionHoldersRequest message.
 * @name QueryEditionHoldersRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionHoldersRequest
 */
export interface QueryEditionHoldersRequestAmino {
  class_id?: string;
  edition_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryEditionHoldersRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryEditionHoldersRequest";
  value: QueryEditionHoldersRequestAmino;
}
/**
 * QueryEditionHoldersResponse defines the QueryEditionHoldersResponse message.
 * @name QueryEditionHoldersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionHoldersResponse
 */
export interface QueryEditionHoldersResponse {
  balances: BalanceView[];
  pagination?: PageResponse;
}
export interface QueryEditionHoldersResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionHoldersResponse";
  value: Uint8Array;
}
/**
 * QueryEditionHoldersResponse defines the QueryEditionHoldersResponse message.
 * @name QueryEditionHoldersResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionHoldersResponse
 */
export interface QueryEditionHoldersResponseAmino {
  balances?: BalanceViewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEditionHoldersResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryEditionHoldersResponse";
  value: QueryEditionHoldersResponseAmino;
}
/**
 * QueryUnitListingRequest defines the QueryUnitListingRequest message.
 * @name QueryUnitListingRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingRequest
 */
export interface QueryUnitListingRequest {
  listingId: bigint;
}
export interface QueryUnitListingRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingRequest";
  value: Uint8Array;
}
/**
 * QueryUnitListingRequest defines the QueryUnitListingRequest message.
 * @name QueryUnitListingRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingRequest
 */
export interface QueryUnitListingRequestAmino {
  listing_id?: string;
}
export interface QueryUnitListingRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryUnitListingRequest";
  value: QueryUnitListingRequestAmino;
}
/**
 * QueryUnitListingResponse defines the QueryUnitListingResponse message.
 * @name QueryUnitListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingResponse
 */
export interface QueryUnitListingResponse {
  listing: UnitListing;
}
export interface QueryUnitListingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingResponse";
  value: Uint8Array;
}
/**
 * QueryUnitListingResponse defines the QueryUnitListingResponse message.
 * @name QueryUnitListingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingResponse
 */
export interface QueryUnitListingResponseAmino {
  listing?: UnitListingAmino;
}
export interface QueryUnitListingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryUnitListingResponse";
  value: QueryUnitListingResponseAmino;
}
/**
 * QueryUnitListingsRequest defines the QueryUnitListingsRequest message.
 * @name QueryUnitListingsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingsRequest
 */
export interface QueryUnitListingsRequest {
  classId: bigint;
  editionId: bigint;
  pagination?: PageRequest;
}
export interface QueryUnitListingsRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingsRequest";
  value: Uint8Array;
}
/**
 * QueryUnitListingsRequest defines the QueryUnitListingsRequest message.
 * @name QueryUnitListingsRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingsRequest
 */
export interface QueryUnitListingsRequestAmino {
  class_id?: string;
  edition_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUnitListingsRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryUnitListingsRequest";
  value: QueryUnitListingsRequestAmino;
}
/**
 * QueryUnitListingsResponse defines the QueryUnitListingsResponse message.
 * @name QueryUnitListingsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingsResponse
 */
export interface QueryUnitListingsResponse {
  listings: UnitListing[];
  pagination?: PageResponse;
}
export interface QueryUnitListingsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingsResponse";
  value: Uint8Array;
}
/**
 * QueryUnitListingsResponse defines the QueryUnitListingsResponse message.
 * @name QueryUnitListingsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingsResponse
 */
export interface QueryUnitListingsResponseAmino {
  listings?: UnitListingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUnitListingsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryUnitListingsResponse";
  value: QueryUnitListingsResponseAmino;
}
/**
 * QueryCraftRecipesRequest defines the QueryCraftRecipesRequest message.
 * @name QueryCraftRecipesRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryCraftRecipesRequest
 */
export interface QueryCraftRecipesRequest {
  classId: bigint;
}
export interface QueryCraftRecipesRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryCraftRecipesRequest";
  value: Uint8Array;
}
/**
 * QueryCraftRecipesRequest defines the QueryCraftRecipesRequest message.
 * @name QueryCraftRecipesRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryCraftRecipesRequest
 */
export interface QueryCraftRecipesRequestAmino {
  class_id?: string;
}
export interface QueryCraftRecipesRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryCraftRecipesRequest";
  value: QueryCraftRecipesRequestAmino;
}
/**
 * QueryCraftRecipesResponse defines the QueryCraftRecipesResponse message.
 * @name QueryCraftRecipesResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryCraftRecipesResponse
 */
export interface QueryCraftRecipesResponse {
  recipes: CraftRecipe[];
  /**
   * true once the class has been crafted into: recipes can then only be
   * removed.
   */
  locked: boolean;
}
export interface QueryCraftRecipesResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryCraftRecipesResponse";
  value: Uint8Array;
}
/**
 * QueryCraftRecipesResponse defines the QueryCraftRecipesResponse message.
 * @name QueryCraftRecipesResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryCraftRecipesResponse
 */
export interface QueryCraftRecipesResponseAmino {
  recipes?: CraftRecipeAmino[];
  /**
   * true once the class has been crafted into: recipes can then only be
   * removed.
   */
  locked?: boolean;
}
export interface QueryCraftRecipesResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryCraftRecipesResponse";
  value: QueryCraftRecipesResponseAmino;
}
/**
 * QueryRentalRequest defines the QueryRentalRequest message.
 * @name QueryRentalRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalRequest
 */
export interface QueryRentalRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryRentalRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalRequest";
  value: Uint8Array;
}
/**
 * QueryRentalRequest defines the QueryRentalRequest message.
 * @name QueryRentalRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalRequest
 */
export interface QueryRentalRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryRentalRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalRequest";
  value: QueryRentalRequestAmino;
}
/**
 * QueryRentalResponse defines the QueryRentalResponse message.
 * @name QueryRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalResponse
 */
export interface QueryRentalResponse {
  rental: Rental;
}
export interface QueryRentalResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalResponse";
  value: Uint8Array;
}
/**
 * QueryRentalResponse defines the QueryRentalResponse message.
 * @name QueryRentalResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalResponse
 */
export interface QueryRentalResponseAmino {
  rental?: RentalAmino;
}
export interface QueryRentalResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalResponse";
  value: QueryRentalResponseAmino;
}
/**
 * QueryRentalOfferRequest defines the QueryRentalOfferRequest message.
 * @name QueryRentalOfferRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOfferRequest
 */
export interface QueryRentalOfferRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryRentalOfferRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOfferRequest";
  value: Uint8Array;
}
/**
 * QueryRentalOfferRequest defines the QueryRentalOfferRequest message.
 * @name QueryRentalOfferRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOfferRequest
 */
export interface QueryRentalOfferRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryRentalOfferRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalOfferRequest";
  value: QueryRentalOfferRequestAmino;
}
/**
 * QueryRentalOfferResponse defines the QueryRentalOfferResponse message.
 * @name QueryRentalOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOfferResponse
 */
export interface QueryRentalOfferResponse {
  offer: RentalOffer;
}
export interface QueryRentalOfferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOfferResponse";
  value: Uint8Array;
}
/**
 * QueryRentalOfferResponse defines the QueryRentalOfferResponse message.
 * @name QueryRentalOfferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOfferResponse
 */
export interface QueryRentalOfferResponseAmino {
  offer?: RentalOfferAmino;
}
export interface QueryRentalOfferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalOfferResponse";
  value: QueryRentalOfferResponseAmino;
}
/**
 * QueryRentalsByUserRequest defines the QueryRentalsByUserRequest message.
 * @name QueryRentalsByUserRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalsByUserRequest
 */
export interface QueryRentalsByUserRequest {
  user: string;
  pagination?: PageRequest;
}
export interface QueryRentalsByUserRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalsByUserRequest";
  value: Uint8Array;
}
/**
 * QueryRentalsByUserRequest defines the QueryRentalsByUserRequest message.
 * @name QueryRentalsByUserRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalsByUserRequest
 */
export interface QueryRentalsByUserRequestAmino {
  user?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRentalsByUserRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalsByUserRequest";
  value: QueryRentalsByUserRequestAmino;
}
/**
 * QueryRentalsByUserResponse defines the QueryRentalsByUserResponse message.
 * @name QueryRentalsByUserResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalsByUserResponse
 */
export interface QueryRentalsByUserResponse {
  rentals: Rental[];
  pagination?: PageResponse;
}
export interface QueryRentalsByUserResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalsByUserResponse";
  value: Uint8Array;
}
/**
 * QueryRentalsByUserResponse defines the QueryRentalsByUserResponse message.
 * @name QueryRentalsByUserResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalsByUserResponse
 */
export interface QueryRentalsByUserResponseAmino {
  rentals?: RentalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRentalsByUserResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalsByUserResponse";
  value: QueryRentalsByUserResponseAmino;
}
/**
 * QueryChildrenRequest defines the QueryChildrenRequest message.
 * @name QueryChildrenRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryChildrenRequest
 */
export interface QueryChildrenRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryChildrenRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryChildrenRequest";
  value: Uint8Array;
}
/**
 * QueryChildrenRequest defines the QueryChildrenRequest message.
 * @name QueryChildrenRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryChildrenRequest
 */
export interface QueryChildrenRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryChildrenRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryChildrenRequest";
  value: QueryChildrenRequestAmino;
}
/**
 * QueryChildrenResponse defines the QueryChildrenResponse message.
 * @name QueryChildrenResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryChildrenResponse
 */
export interface QueryChildrenResponse {
  /**
   * Direct children, in key order.
   */
  children: TokenRef[];
  /**
   * Hash over the whole tree under the token ("" when it holds nothing).
   */
  contentsHash: string;
  /**
   * Tokens nested under it at any depth.
   */
  descendants: number;
}
export interface QueryChildrenResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryChildrenResponse";
  value: Uint8Array;
}
/**
 * QueryChildrenResponse defines the QueryChildrenResponse message.
 * @name QueryChildrenResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryChildrenResponse
 */
export interface QueryChildrenResponseAmino {
  /**
   * Direct children, in key order.
   */
  children?: TokenRefAmino[];
  /**
   * Hash over the whole tree under the token ("" when it holds nothing).
   */
  contents_hash?: string;
  /**
   * Tokens nested under it at any depth.
   */
  descendants?: number;
}
export interface QueryChildrenResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryChildrenResponse";
  value: QueryChildrenResponseAmino;
}
/**
 * QueryHarbergerQuoteRequest defines the QueryHarbergerQuoteRequest message.
 * @name QueryHarbergerQuoteRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHarbergerQuoteRequest
 */
export interface QueryHarbergerQuoteRequest {
  classId: bigint;
  tokenId: bigint;
}
export interface QueryHarbergerQuoteRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryHarbergerQuoteRequest";
  value: Uint8Array;
}
/**
 * QueryHarbergerQuoteRequest defines the QueryHarbergerQuoteRequest message.
 * @name QueryHarbergerQuoteRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHarbergerQuoteRequest
 */
export interface QueryHarbergerQuoteRequestAmino {
  class_id?: string;
  token_id?: string;
}
export interface QueryHarbergerQuoteRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryHarbergerQuoteRequest";
  value: QueryHarbergerQuoteRequestAmino;
}
/**
 * QueryHarbergerQuoteResponse defines the QueryHarbergerQuoteResponse message.
 * @name QueryHarbergerQuoteResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHarbergerQuoteResponse
 */
export interface QueryHarbergerQuoteResponse {
  state: HarbergerState;
  /**
   * What MsgForceBuy would pay now (falls during foreclosure).
   */
  currentPrice: string;
  /**
   * Tax per period on the assessed price.
   */
  taxPerPeriod: string;
  foreclosed: boolean;
  /**
   * false while the token cannot be bought (a zero price inside the grace
   * period, or a hidden token or class).
   */
  forSale: boolean;
}
export interface QueryHarbergerQuoteResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryHarbergerQuoteResponse";
  value: Uint8Array;
}
/**
 * QueryHarbergerQuoteResponse defines the QueryHarbergerQuoteResponse message.
 * @name QueryHarbergerQuoteResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHarbergerQuoteResponse
 */
export interface QueryHarbergerQuoteResponseAmino {
  state?: HarbergerStateAmino;
  /**
   * What MsgForceBuy would pay now (falls during foreclosure).
   */
  current_price?: string;
  /**
   * Tax per period on the assessed price.
   */
  tax_per_period?: string;
  foreclosed?: boolean;
  /**
   * false while the token cannot be bought (a zero price inside the grace
   * period, or a hidden token or class).
   */
  for_sale?: boolean;
}
export interface QueryHarbergerQuoteResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryHarbergerQuoteResponse";
  value: QueryHarbergerQuoteResponseAmino;
}
/**
 * QueryOfferRequest defines the QueryOfferRequest message.
 * @name QueryOfferRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOfferRequest
 */
export interface QueryOfferRequest {
  offerId: bigint;
}
export interface QueryOfferRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOfferRequest";
  value: Uint8Array;
}
/**
 * QueryOfferRequest defines the QueryOfferRequest message.
 * @name QueryOfferRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOfferRequest
 */
export interface QueryOfferRequestAmino {
  offer_id?: string;
}
export interface QueryOfferRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOfferRequest";
  value: QueryOfferRequestAmino;
}
/**
 * QueryOfferResponse defines the QueryOfferResponse message.
 * @name QueryOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOfferResponse
 */
export interface QueryOfferResponse {
  offer: Offer;
}
export interface QueryOfferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOfferResponse";
  value: Uint8Array;
}
/**
 * QueryOfferResponse defines the QueryOfferResponse message.
 * @name QueryOfferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOfferResponse
 */
export interface QueryOfferResponseAmino {
  offer?: OfferAmino;
}
export interface QueryOfferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOfferResponse";
  value: QueryOfferResponseAmino;
}
/**
 * QueryOffersRequest lists the open offers on a token, or (token_id 0) the
 * collection offers on a class.
 * @name QueryOffersRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersRequest
 */
export interface QueryOffersRequest {
  classId: bigint;
  tokenId: bigint;
  pagination?: PageRequest;
}
export interface QueryOffersRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersRequest";
  value: Uint8Array;
}
/**
 * QueryOffersRequest lists the open offers on a token, or (token_id 0) the
 * collection offers on a class.
 * @name QueryOffersRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersRequest
 */
export interface QueryOffersRequestAmino {
  class_id?: string;
  token_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOffersRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOffersRequest";
  value: QueryOffersRequestAmino;
}
/**
 * QueryOffersResponse defines the QueryOffersResponse message.
 * @name QueryOffersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersResponse
 */
export interface QueryOffersResponse {
  offers: Offer[];
  pagination?: PageResponse;
}
export interface QueryOffersResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersResponse";
  value: Uint8Array;
}
/**
 * QueryOffersResponse defines the QueryOffersResponse message.
 * @name QueryOffersResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersResponse
 */
export interface QueryOffersResponseAmino {
  offers?: OfferAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOffersResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOffersResponse";
  value: QueryOffersResponseAmino;
}
/**
 * QueryOffersByBidderRequest defines the QueryOffersByBidderRequest message.
 * @name QueryOffersByBidderRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersByBidderRequest
 */
export interface QueryOffersByBidderRequest {
  bidder: string;
  pagination?: PageRequest;
}
export interface QueryOffersByBidderRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersByBidderRequest";
  value: Uint8Array;
}
/**
 * QueryOffersByBidderRequest defines the QueryOffersByBidderRequest message.
 * @name QueryOffersByBidderRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersByBidderRequest
 */
export interface QueryOffersByBidderRequestAmino {
  bidder?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOffersByBidderRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOffersByBidderRequest";
  value: QueryOffersByBidderRequestAmino;
}
/**
 * QueryOffersByBidderResponse defines the QueryOffersByBidderResponse message.
 * @name QueryOffersByBidderResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersByBidderResponse
 */
export interface QueryOffersByBidderResponse {
  offers: Offer[];
  pagination?: PageResponse;
}
export interface QueryOffersByBidderResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersByBidderResponse";
  value: Uint8Array;
}
/**
 * QueryOffersByBidderResponse defines the QueryOffersByBidderResponse message.
 * @name QueryOffersByBidderResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersByBidderResponse
 */
export interface QueryOffersByBidderResponseAmino {
  offers?: OfferAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOffersByBidderResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryOffersByBidderResponse";
  value: QueryOffersByBidderResponseAmino;
}
/**
 * QueryAuctionRequest defines the QueryAuctionRequest message.
 * @name QueryAuctionRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionRequest
 */
export interface QueryAuctionRequest {
  auctionId: bigint;
}
export interface QueryAuctionRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionRequest";
  value: Uint8Array;
}
/**
 * QueryAuctionRequest defines the QueryAuctionRequest message.
 * @name QueryAuctionRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionRequest
 */
export interface QueryAuctionRequestAmino {
  auction_id?: string;
}
export interface QueryAuctionRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryAuctionRequest";
  value: QueryAuctionRequestAmino;
}
/**
 * QueryAuctionResponse defines the QueryAuctionResponse message.
 * @name QueryAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionResponse
 */
export interface QueryAuctionResponse {
  auction: Auction;
  /**
   * The lowest bid MsgBid accepts now.
   */
  minNextBid: string;
}
export interface QueryAuctionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionResponse";
  value: Uint8Array;
}
/**
 * QueryAuctionResponse defines the QueryAuctionResponse message.
 * @name QueryAuctionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionResponse
 */
export interface QueryAuctionResponseAmino {
  auction?: AuctionAmino;
  /**
   * The lowest bid MsgBid accepts now.
   */
  min_next_bid?: string;
}
export interface QueryAuctionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryAuctionResponse";
  value: QueryAuctionResponseAmino;
}
/**
 * QueryAuctionsRequest lists open auctions (class_id 0 = every class).
 * @name QueryAuctionsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsRequest
 */
export interface QueryAuctionsRequest {
  classId: bigint;
  pagination?: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsRequest";
  value: Uint8Array;
}
/**
 * QueryAuctionsRequest lists open auctions (class_id 0 = every class).
 * @name QueryAuctionsRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsRequest
 */
export interface QueryAuctionsRequestAmino {
  class_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryAuctionsRequest";
  value: QueryAuctionsRequestAmino;
}
/**
 * QueryAuctionsResponse defines the QueryAuctionsResponse message.
 * @name QueryAuctionsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsResponse
 */
export interface QueryAuctionsResponse {
  auctions: Auction[];
  pagination?: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsResponse";
  value: Uint8Array;
}
/**
 * QueryAuctionsResponse defines the QueryAuctionsResponse message.
 * @name QueryAuctionsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsResponse
 */
export interface QueryAuctionsResponseAmino {
  auctions?: AuctionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryAuctionsResponse";
  value: QueryAuctionsResponseAmino;
}
/**
 * QueryAuctionsBySellerRequest defines the QueryAuctionsBySellerRequest message.
 * @name QueryAuctionsBySellerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsBySellerRequest
 */
export interface QueryAuctionsBySellerRequest {
  seller: string;
  pagination?: PageRequest;
}
export interface QueryAuctionsBySellerRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsBySellerRequest";
  value: Uint8Array;
}
/**
 * QueryAuctionsBySellerRequest defines the QueryAuctionsBySellerRequest message.
 * @name QueryAuctionsBySellerRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsBySellerRequest
 */
export interface QueryAuctionsBySellerRequestAmino {
  seller?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsBySellerRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryAuctionsBySellerRequest";
  value: QueryAuctionsBySellerRequestAmino;
}
/**
 * QueryAuctionsBySellerResponse defines the QueryAuctionsBySellerResponse message.
 * @name QueryAuctionsBySellerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsBySellerResponse
 */
export interface QueryAuctionsBySellerResponse {
  auctions: Auction[];
  pagination?: PageResponse;
}
export interface QueryAuctionsBySellerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsBySellerResponse";
  value: Uint8Array;
}
/**
 * QueryAuctionsBySellerResponse defines the QueryAuctionsBySellerResponse message.
 * @name QueryAuctionsBySellerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsBySellerResponse
 */
export interface QueryAuctionsBySellerResponseAmino {
  auctions?: AuctionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAuctionsBySellerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryAuctionsBySellerResponse";
  value: QueryAuctionsBySellerResponseAmino;
}
/**
 * QueryRentalOffersRequest defines the QueryRentalOffersRequest message.
 * @name QueryRentalOffersRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOffersRequest
 */
export interface QueryRentalOffersRequest {
  /**
   * Optional; empty lists every unexpired offer.
   */
  user: string;
  pagination?: PageRequest;
}
export interface QueryRentalOffersRequestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOffersRequest";
  value: Uint8Array;
}
/**
 * QueryRentalOffersRequest defines the QueryRentalOffersRequest message.
 * @name QueryRentalOffersRequestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOffersRequest
 */
export interface QueryRentalOffersRequestAmino {
  /**
   * Optional; empty lists every unexpired offer.
   */
  user?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRentalOffersRequestAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalOffersRequest";
  value: QueryRentalOffersRequestAmino;
}
/**
 * QueryRentalOffersResponse defines the QueryRentalOffersResponse message.
 * @name QueryRentalOffersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOffersResponse
 */
export interface QueryRentalOffersResponse {
  offers: RentalOffer[];
  pagination?: PageResponse;
}
export interface QueryRentalOffersResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOffersResponse";
  value: Uint8Array;
}
/**
 * QueryRentalOffersResponse defines the QueryRentalOffersResponse message.
 * @name QueryRentalOffersResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOffersResponse
 */
export interface QueryRentalOffersResponseAmino {
  offers?: RentalOfferAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRentalOffersResponseAminoMsg {
  type: "/sparkdream.artifact.v1.QueryRentalOffersResponse";
  value: QueryRentalOffersResponseAmino;
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
    classStatus: 0,
    displayedMetadata: TokenMetadata.fromPartial({}),
    displaySource: "",
    renderError: "",
    expired: false,
    seed: "",
    contentsHash: "",
    user: "",
    harbergerPrice: ""
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
    if (message.displayedMetadata !== undefined) {
      TokenMetadata.encode(message.displayedMetadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.displaySource !== "") {
      writer.uint32(50).string(message.displaySource);
    }
    if (message.renderError !== "") {
      writer.uint32(58).string(message.renderError);
    }
    if (message.expired === true) {
      writer.uint32(64).bool(message.expired);
    }
    if (message.seed !== "") {
      writer.uint32(74).string(message.seed);
    }
    if (message.contentsHash !== "") {
      writer.uint32(82).string(message.contentsHash);
    }
    if (message.user !== "") {
      writer.uint32(90).string(message.user);
    }
    if (message.harbergerPrice !== "") {
      writer.uint32(98).string(message.harbergerPrice);
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
        case 5:
          message.displayedMetadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.displaySource = reader.string();
          break;
        case 7:
          message.renderError = reader.string();
          break;
        case 8:
          message.expired = reader.bool();
          break;
        case 9:
          message.seed = reader.string();
          break;
        case 10:
          message.contentsHash = reader.string();
          break;
        case 11:
          message.user = reader.string();
          break;
        case 12:
          message.harbergerPrice = reader.string();
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
    message.displayedMetadata = object.displayedMetadata !== undefined && object.displayedMetadata !== null ? TokenMetadata.fromPartial(object.displayedMetadata) : undefined;
    message.displaySource = object.displaySource ?? "";
    message.renderError = object.renderError ?? "";
    message.expired = object.expired ?? false;
    message.seed = object.seed ?? "";
    message.contentsHash = object.contentsHash ?? "";
    message.user = object.user ?? "";
    message.harbergerPrice = object.harbergerPrice ?? "";
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
    if (object.displayed_metadata !== undefined && object.displayed_metadata !== null) {
      message.displayedMetadata = TokenMetadata.fromAmino(object.displayed_metadata);
    }
    if (object.display_source !== undefined && object.display_source !== null) {
      message.displaySource = object.display_source;
    }
    if (object.render_error !== undefined && object.render_error !== null) {
      message.renderError = object.render_error;
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = object.expired;
    }
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = object.seed;
    }
    if (object.contents_hash !== undefined && object.contents_hash !== null) {
      message.contentsHash = object.contents_hash;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.harberger_price !== undefined && object.harberger_price !== null) {
      message.harbergerPrice = object.harberger_price;
    }
    return message;
  },
  toAmino(message: TokenView): TokenViewAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    obj.metadata_hash = message.metadataHash === "" ? undefined : message.metadataHash;
    obj.class_status = message.classStatus === 0 ? undefined : message.classStatus;
    obj.displayed_metadata = message.displayedMetadata ? TokenMetadata.toAmino(message.displayedMetadata) : undefined;
    obj.display_source = message.displaySource === "" ? undefined : message.displaySource;
    obj.render_error = message.renderError === "" ? undefined : message.renderError;
    obj.expired = message.expired === false ? undefined : message.expired;
    obj.seed = message.seed === "" ? undefined : message.seed;
    obj.contents_hash = message.contentsHash === "" ? undefined : message.contentsHash;
    obj.user = message.user === "" ? undefined : message.user;
    obj.harberger_price = message.harbergerPrice === "" ? undefined : message.harbergerPrice;
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
    withheld: false,
    unitClassId: BigInt(0),
    editionId: BigInt(0),
    amount: BigInt(0)
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
    if (message.unitClassId !== BigInt(0)) {
      writer.uint32(88).uint64(message.unitClassId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(96).uint64(message.editionId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(104).uint64(message.amount);
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
        case 11:
          message.unitClassId = reader.uint64();
          break;
        case 12:
          message.editionId = reader.uint64();
          break;
        case 13:
          message.amount = reader.uint64();
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
    message.unitClassId = object.unitClassId !== undefined && object.unitClassId !== null ? BigInt(object.unitClassId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
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
    if (object.unit_class_id !== undefined && object.unit_class_id !== null) {
      message.unitClassId = BigInt(object.unit_class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
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
    obj.unit_class_id = message.unitClassId !== BigInt(0) ? message.unitClassId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
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
    listing: undefined,
    auction: undefined
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
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.auction = Auction.decode(reader, reader.uint32());
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
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
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
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryTokenResponse): QueryTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? TokenView.toAmino(message.token) : undefined;
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
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
    reason: "",
    unitPrice: Coin.fromPartial({}),
    maxUnitPrice: Coin.fromPartial({})
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
    if (message.unitPrice !== undefined) {
      Coin.encode(message.unitPrice, writer.uint32(58).fork()).ldelim();
    }
    if (message.maxUnitPrice !== undefined) {
      Coin.encode(message.maxUnitPrice, writer.uint32(66).fork()).ldelim();
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
        case 7:
          message.unitPrice = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.maxUnitPrice = Coin.decode(reader, reader.uint32());
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
    message.unitPrice = object.unitPrice !== undefined && object.unitPrice !== null ? Coin.fromPartial(object.unitPrice) : undefined;
    message.maxUnitPrice = object.maxUnitPrice !== undefined && object.maxUnitPrice !== null ? Coin.fromPartial(object.maxUnitPrice) : undefined;
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
    if (object.unit_price !== undefined && object.unit_price !== null) {
      message.unitPrice = Coin.fromAmino(object.unit_price);
    }
    if (object.max_unit_price !== undefined && object.max_unit_price !== null) {
      message.maxUnitPrice = Coin.fromAmino(object.max_unit_price);
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
    obj.unit_price = message.unitPrice ? Coin.toAmino(message.unitPrice) : undefined;
    obj.max_unit_price = message.maxUnitPrice ? Coin.toAmino(message.maxUnitPrice) : undefined;
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
function createBaseQueryMediaProposalsRequest(): QueryMediaProposalsRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryMediaProposalsRequest defines the QueryMediaProposalsRequest message.
 * @name QueryMediaProposalsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryMediaProposalsRequest
 */
export const QueryMediaProposalsRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryMediaProposalsRequest",
  encode(message: QueryMediaProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMediaProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMediaProposalsRequest();
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
  fromPartial(object: DeepPartial<QueryMediaProposalsRequest>): QueryMediaProposalsRequest {
    const message = createBaseQueryMediaProposalsRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMediaProposalsRequestAmino): QueryMediaProposalsRequest {
    const message = createBaseQueryMediaProposalsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryMediaProposalsRequest): QueryMediaProposalsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMediaProposalsRequestAminoMsg): QueryMediaProposalsRequest {
    return QueryMediaProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMediaProposalsRequestProtoMsg): QueryMediaProposalsRequest {
    return QueryMediaProposalsRequest.decode(message.value);
  },
  toProto(message: QueryMediaProposalsRequest): Uint8Array {
    return QueryMediaProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMediaProposalsRequest): QueryMediaProposalsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryMediaProposalsRequest",
      value: QueryMediaProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMediaProposalsResponse(): QueryMediaProposalsResponse {
  return {
    proposals: []
  };
}
/**
 * QueryMediaProposalsResponse defines the QueryMediaProposalsResponse message.
 * @name QueryMediaProposalsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryMediaProposalsResponse
 */
export const QueryMediaProposalsResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryMediaProposalsResponse",
  encode(message: QueryMediaProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      MediaProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMediaProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMediaProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(MediaProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMediaProposalsResponse>): QueryMediaProposalsResponse {
    const message = createBaseQueryMediaProposalsResponse();
    message.proposals = object.proposals?.map(e => MediaProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMediaProposalsResponseAmino): QueryMediaProposalsResponse {
    const message = createBaseQueryMediaProposalsResponse();
    message.proposals = object.proposals?.map(e => MediaProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMediaProposalsResponse): QueryMediaProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? MediaProposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMediaProposalsResponseAminoMsg): QueryMediaProposalsResponse {
    return QueryMediaProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMediaProposalsResponseProtoMsg): QueryMediaProposalsResponse {
    return QueryMediaProposalsResponse.decode(message.value);
  },
  toProto(message: QueryMediaProposalsResponse): Uint8Array {
    return QueryMediaProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMediaProposalsResponse): QueryMediaProposalsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryMediaProposalsResponse",
      value: QueryMediaProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseEditionView(): EditionView {
  return {
    edition: Edition.fromPartial({}),
    withheld: false,
    metadataHash: "",
    classStatus: 0
  };
}
/**
 * EditionView is an edition as served to clients. When withheld is true the
 * metadata and claim scope are blanked because the edition or its class is
 * hidden.
 * @name EditionView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.EditionView
 */
export const EditionView = {
  typeUrl: "/sparkdream.artifact.v1.EditionView",
  encode(message: EditionView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edition !== undefined) {
      Edition.encode(message.edition, writer.uint32(10).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): EditionView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditionView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edition = Edition.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<EditionView>): EditionView {
    const message = createBaseEditionView();
    message.edition = object.edition !== undefined && object.edition !== null ? Edition.fromPartial(object.edition) : undefined;
    message.withheld = object.withheld ?? false;
    message.metadataHash = object.metadataHash ?? "";
    message.classStatus = object.classStatus ?? 0;
    return message;
  },
  fromAmino(object: EditionViewAmino): EditionView {
    const message = createBaseEditionView();
    if (object.edition !== undefined && object.edition !== null) {
      message.edition = Edition.fromAmino(object.edition);
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
  toAmino(message: EditionView): EditionViewAmino {
    const obj: any = {};
    obj.edition = message.edition ? Edition.toAmino(message.edition) : undefined;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    obj.metadata_hash = message.metadataHash === "" ? undefined : message.metadataHash;
    obj.class_status = message.classStatus === 0 ? undefined : message.classStatus;
    return obj;
  },
  fromAminoMsg(object: EditionViewAminoMsg): EditionView {
    return EditionView.fromAmino(object.value);
  },
  fromProtoMsg(message: EditionViewProtoMsg): EditionView {
    return EditionView.decode(message.value);
  },
  toProto(message: EditionView): Uint8Array {
    return EditionView.encode(message).finish();
  },
  toProtoMsg(message: EditionView): EditionViewProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.EditionView",
      value: EditionView.encode(message).finish()
    };
  }
};
function createBaseBalanceView(): BalanceView {
  return {
    balance: Balance.fromPartial({}),
    claimable: ""
  };
}
/**
 * BalanceView is a balance with what its holder could claim now.
 * @name BalanceView
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.BalanceView
 */
export const BalanceView = {
  typeUrl: "/sparkdream.artifact.v1.BalanceView",
  encode(message: BalanceView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Balance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimable !== "") {
      writer.uint32(18).string(message.claimable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Balance.decode(reader, reader.uint32());
          break;
        case 2:
          message.claimable = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BalanceView>): BalanceView {
    const message = createBaseBalanceView();
    message.balance = object.balance !== undefined && object.balance !== null ? Balance.fromPartial(object.balance) : undefined;
    message.claimable = object.claimable ?? "";
    return message;
  },
  fromAmino(object: BalanceViewAmino): BalanceView {
    const message = createBaseBalanceView();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Balance.fromAmino(object.balance);
    }
    if (object.claimable !== undefined && object.claimable !== null) {
      message.claimable = object.claimable;
    }
    return message;
  },
  toAmino(message: BalanceView): BalanceViewAmino {
    const obj: any = {};
    obj.balance = message.balance ? Balance.toAmino(message.balance) : undefined;
    obj.claimable = message.claimable === "" ? undefined : message.claimable;
    return obj;
  },
  fromAminoMsg(object: BalanceViewAminoMsg): BalanceView {
    return BalanceView.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceViewProtoMsg): BalanceView {
    return BalanceView.decode(message.value);
  },
  toProto(message: BalanceView): Uint8Array {
    return BalanceView.encode(message).finish();
  },
  toProtoMsg(message: BalanceView): BalanceViewProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.BalanceView",
      value: BalanceView.encode(message).finish()
    };
  }
};
function createBaseQueryEditionRequest(): QueryEditionRequest {
  return {
    classId: BigInt(0),
    editionId: BigInt(0)
  };
}
/**
 * QueryEditionRequest defines the QueryEditionRequest message.
 * @name QueryEditionRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionRequest
 */
export const QueryEditionRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionRequest",
  encode(message: QueryEditionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEditionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEditionRequest();
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
  fromPartial(object: DeepPartial<QueryEditionRequest>): QueryEditionRequest {
    const message = createBaseQueryEditionRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEditionRequestAmino): QueryEditionRequest {
    const message = createBaseQueryEditionRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    return message;
  },
  toAmino(message: QueryEditionRequest): QueryEditionRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEditionRequestAminoMsg): QueryEditionRequest {
    return QueryEditionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEditionRequestProtoMsg): QueryEditionRequest {
    return QueryEditionRequest.decode(message.value);
  },
  toProto(message: QueryEditionRequest): Uint8Array {
    return QueryEditionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEditionRequest): QueryEditionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryEditionRequest",
      value: QueryEditionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEditionResponse(): QueryEditionResponse {
  return {
    edition: EditionView.fromPartial({})
  };
}
/**
 * QueryEditionResponse defines the QueryEditionResponse message.
 * @name QueryEditionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionResponse
 */
export const QueryEditionResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionResponse",
  encode(message: QueryEditionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edition !== undefined) {
      EditionView.encode(message.edition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEditionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEditionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edition = EditionView.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEditionResponse>): QueryEditionResponse {
    const message = createBaseQueryEditionResponse();
    message.edition = object.edition !== undefined && object.edition !== null ? EditionView.fromPartial(object.edition) : undefined;
    return message;
  },
  fromAmino(object: QueryEditionResponseAmino): QueryEditionResponse {
    const message = createBaseQueryEditionResponse();
    if (object.edition !== undefined && object.edition !== null) {
      message.edition = EditionView.fromAmino(object.edition);
    }
    return message;
  },
  toAmino(message: QueryEditionResponse): QueryEditionResponseAmino {
    const obj: any = {};
    obj.edition = message.edition ? EditionView.toAmino(message.edition) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEditionResponseAminoMsg): QueryEditionResponse {
    return QueryEditionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEditionResponseProtoMsg): QueryEditionResponse {
    return QueryEditionResponse.decode(message.value);
  },
  toProto(message: QueryEditionResponse): Uint8Array {
    return QueryEditionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEditionResponse): QueryEditionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryEditionResponse",
      value: QueryEditionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEditionsRequest(): QueryEditionsRequest {
  return {
    classId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryEditionsRequest defines the QueryEditionsRequest message.
 * @name QueryEditionsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionsRequest
 */
export const QueryEditionsRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionsRequest",
  encode(message: QueryEditionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEditionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEditionsRequest();
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
  fromPartial(object: DeepPartial<QueryEditionsRequest>): QueryEditionsRequest {
    const message = createBaseQueryEditionsRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEditionsRequestAmino): QueryEditionsRequest {
    const message = createBaseQueryEditionsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEditionsRequest): QueryEditionsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEditionsRequestAminoMsg): QueryEditionsRequest {
    return QueryEditionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEditionsRequestProtoMsg): QueryEditionsRequest {
    return QueryEditionsRequest.decode(message.value);
  },
  toProto(message: QueryEditionsRequest): Uint8Array {
    return QueryEditionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEditionsRequest): QueryEditionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryEditionsRequest",
      value: QueryEditionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEditionsResponse(): QueryEditionsResponse {
  return {
    editions: [],
    pagination: undefined
  };
}
/**
 * QueryEditionsResponse defines the QueryEditionsResponse message.
 * @name QueryEditionsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionsResponse
 */
export const QueryEditionsResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionsResponse",
  encode(message: QueryEditionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.editions) {
      EditionView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEditionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEditionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.editions.push(EditionView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryEditionsResponse>): QueryEditionsResponse {
    const message = createBaseQueryEditionsResponse();
    message.editions = object.editions?.map(e => EditionView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEditionsResponseAmino): QueryEditionsResponse {
    const message = createBaseQueryEditionsResponse();
    message.editions = object.editions?.map(e => EditionView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEditionsResponse): QueryEditionsResponseAmino {
    const obj: any = {};
    if (message.editions) {
      obj.editions = message.editions.map(e => e ? EditionView.toAmino(e) : undefined);
    } else {
      obj.editions = message.editions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEditionsResponseAminoMsg): QueryEditionsResponse {
    return QueryEditionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEditionsResponseProtoMsg): QueryEditionsResponse {
    return QueryEditionsResponse.decode(message.value);
  },
  toProto(message: QueryEditionsResponse): Uint8Array {
    return QueryEditionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEditionsResponse): QueryEditionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryEditionsResponse",
      value: QueryEditionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: BigInt(0),
    editionId: BigInt(0),
    owner: ""
  };
}
/**
 * QueryBalanceRequest defines the QueryBalanceRequest message.
 * @name QueryBalanceRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalanceRequest
 */
export const QueryBalanceRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: BalanceView.fromPartial({})
  };
}
/**
 * QueryBalanceResponse defines the QueryBalanceResponse message.
 * @name QueryBalanceResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalanceResponse
 */
export const QueryBalanceResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      BalanceView.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = BalanceView.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? BalanceView.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = BalanceView.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? BalanceView.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalancesByOwnerRequest(): QueryBalancesByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
/**
 * QueryBalancesByOwnerRequest defines the QueryBalancesByOwnerRequest message.
 * @name QueryBalancesByOwnerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalancesByOwnerRequest
 */
export const QueryBalancesByOwnerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryBalancesByOwnerRequest",
  encode(message: QueryBalancesByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesByOwnerRequest();
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
  fromPartial(object: DeepPartial<QueryBalancesByOwnerRequest>): QueryBalancesByOwnerRequest {
    const message = createBaseQueryBalancesByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBalancesByOwnerRequestAmino): QueryBalancesByOwnerRequest {
    const message = createBaseQueryBalancesByOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBalancesByOwnerRequest): QueryBalancesByOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalancesByOwnerRequestAminoMsg): QueryBalancesByOwnerRequest {
    return QueryBalancesByOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesByOwnerRequestProtoMsg): QueryBalancesByOwnerRequest {
    return QueryBalancesByOwnerRequest.decode(message.value);
  },
  toProto(message: QueryBalancesByOwnerRequest): Uint8Array {
    return QueryBalancesByOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesByOwnerRequest): QueryBalancesByOwnerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryBalancesByOwnerRequest",
      value: QueryBalancesByOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalancesByOwnerResponse(): QueryBalancesByOwnerResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
/**
 * QueryBalancesByOwnerResponse defines the QueryBalancesByOwnerResponse message.
 * @name QueryBalancesByOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryBalancesByOwnerResponse
 */
export const QueryBalancesByOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryBalancesByOwnerResponse",
  encode(message: QueryBalancesByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      BalanceView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(BalanceView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryBalancesByOwnerResponse>): QueryBalancesByOwnerResponse {
    const message = createBaseQueryBalancesByOwnerResponse();
    message.balances = object.balances?.map(e => BalanceView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBalancesByOwnerResponseAmino): QueryBalancesByOwnerResponse {
    const message = createBaseQueryBalancesByOwnerResponse();
    message.balances = object.balances?.map(e => BalanceView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBalancesByOwnerResponse): QueryBalancesByOwnerResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BalanceView.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalancesByOwnerResponseAminoMsg): QueryBalancesByOwnerResponse {
    return QueryBalancesByOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesByOwnerResponseProtoMsg): QueryBalancesByOwnerResponse {
    return QueryBalancesByOwnerResponse.decode(message.value);
  },
  toProto(message: QueryBalancesByOwnerResponse): Uint8Array {
    return QueryBalancesByOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesByOwnerResponse): QueryBalancesByOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryBalancesByOwnerResponse",
      value: QueryBalancesByOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEditionHoldersRequest(): QueryEditionHoldersRequest {
  return {
    classId: BigInt(0),
    editionId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryEditionHoldersRequest defines the QueryEditionHoldersRequest message.
 * @name QueryEditionHoldersRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionHoldersRequest
 */
export const QueryEditionHoldersRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionHoldersRequest",
  encode(message: QueryEditionHoldersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEditionHoldersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEditionHoldersRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEditionHoldersRequest>): QueryEditionHoldersRequest {
    const message = createBaseQueryEditionHoldersRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEditionHoldersRequestAmino): QueryEditionHoldersRequest {
    const message = createBaseQueryEditionHoldersRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEditionHoldersRequest): QueryEditionHoldersRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEditionHoldersRequestAminoMsg): QueryEditionHoldersRequest {
    return QueryEditionHoldersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEditionHoldersRequestProtoMsg): QueryEditionHoldersRequest {
    return QueryEditionHoldersRequest.decode(message.value);
  },
  toProto(message: QueryEditionHoldersRequest): Uint8Array {
    return QueryEditionHoldersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEditionHoldersRequest): QueryEditionHoldersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryEditionHoldersRequest",
      value: QueryEditionHoldersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEditionHoldersResponse(): QueryEditionHoldersResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
/**
 * QueryEditionHoldersResponse defines the QueryEditionHoldersResponse message.
 * @name QueryEditionHoldersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryEditionHoldersResponse
 */
export const QueryEditionHoldersResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryEditionHoldersResponse",
  encode(message: QueryEditionHoldersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      BalanceView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEditionHoldersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEditionHoldersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(BalanceView.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryEditionHoldersResponse>): QueryEditionHoldersResponse {
    const message = createBaseQueryEditionHoldersResponse();
    message.balances = object.balances?.map(e => BalanceView.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEditionHoldersResponseAmino): QueryEditionHoldersResponse {
    const message = createBaseQueryEditionHoldersResponse();
    message.balances = object.balances?.map(e => BalanceView.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEditionHoldersResponse): QueryEditionHoldersResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BalanceView.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEditionHoldersResponseAminoMsg): QueryEditionHoldersResponse {
    return QueryEditionHoldersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEditionHoldersResponseProtoMsg): QueryEditionHoldersResponse {
    return QueryEditionHoldersResponse.decode(message.value);
  },
  toProto(message: QueryEditionHoldersResponse): Uint8Array {
    return QueryEditionHoldersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEditionHoldersResponse): QueryEditionHoldersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryEditionHoldersResponse",
      value: QueryEditionHoldersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnitListingRequest(): QueryUnitListingRequest {
  return {
    listingId: BigInt(0)
  };
}
/**
 * QueryUnitListingRequest defines the QueryUnitListingRequest message.
 * @name QueryUnitListingRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingRequest
 */
export const QueryUnitListingRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingRequest",
  encode(message: QueryUnitListingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.listingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnitListingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnitListingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnitListingRequest>): QueryUnitListingRequest {
    const message = createBaseQueryUnitListingRequest();
    message.listingId = object.listingId !== undefined && object.listingId !== null ? BigInt(object.listingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryUnitListingRequestAmino): QueryUnitListingRequest {
    const message = createBaseQueryUnitListingRequest();
    if (object.listing_id !== undefined && object.listing_id !== null) {
      message.listingId = BigInt(object.listing_id);
    }
    return message;
  },
  toAmino(message: QueryUnitListingRequest): QueryUnitListingRequestAmino {
    const obj: any = {};
    obj.listing_id = message.listingId !== BigInt(0) ? message.listingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnitListingRequestAminoMsg): QueryUnitListingRequest {
    return QueryUnitListingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnitListingRequestProtoMsg): QueryUnitListingRequest {
    return QueryUnitListingRequest.decode(message.value);
  },
  toProto(message: QueryUnitListingRequest): Uint8Array {
    return QueryUnitListingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnitListingRequest): QueryUnitListingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryUnitListingRequest",
      value: QueryUnitListingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnitListingResponse(): QueryUnitListingResponse {
  return {
    listing: UnitListing.fromPartial({})
  };
}
/**
 * QueryUnitListingResponse defines the QueryUnitListingResponse message.
 * @name QueryUnitListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingResponse
 */
export const QueryUnitListingResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingResponse",
  encode(message: QueryUnitListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      UnitListing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnitListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnitListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = UnitListing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnitListingResponse>): QueryUnitListingResponse {
    const message = createBaseQueryUnitListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? UnitListing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: QueryUnitListingResponseAmino): QueryUnitListingResponse {
    const message = createBaseQueryUnitListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = UnitListing.fromAmino(object.listing);
    }
    return message;
  },
  toAmino(message: QueryUnitListingResponse): QueryUnitListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? UnitListing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnitListingResponseAminoMsg): QueryUnitListingResponse {
    return QueryUnitListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnitListingResponseProtoMsg): QueryUnitListingResponse {
    return QueryUnitListingResponse.decode(message.value);
  },
  toProto(message: QueryUnitListingResponse): Uint8Array {
    return QueryUnitListingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnitListingResponse): QueryUnitListingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryUnitListingResponse",
      value: QueryUnitListingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnitListingsRequest(): QueryUnitListingsRequest {
  return {
    classId: BigInt(0),
    editionId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryUnitListingsRequest defines the QueryUnitListingsRequest message.
 * @name QueryUnitListingsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingsRequest
 */
export const QueryUnitListingsRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingsRequest",
  encode(message: QueryUnitListingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnitListingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnitListingsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnitListingsRequest>): QueryUnitListingsRequest {
    const message = createBaseQueryUnitListingsRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnitListingsRequestAmino): QueryUnitListingsRequest {
    const message = createBaseQueryUnitListingsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnitListingsRequest): QueryUnitListingsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnitListingsRequestAminoMsg): QueryUnitListingsRequest {
    return QueryUnitListingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnitListingsRequestProtoMsg): QueryUnitListingsRequest {
    return QueryUnitListingsRequest.decode(message.value);
  },
  toProto(message: QueryUnitListingsRequest): Uint8Array {
    return QueryUnitListingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnitListingsRequest): QueryUnitListingsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryUnitListingsRequest",
      value: QueryUnitListingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnitListingsResponse(): QueryUnitListingsResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
/**
 * QueryUnitListingsResponse defines the QueryUnitListingsResponse message.
 * @name QueryUnitListingsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryUnitListingsResponse
 */
export const QueryUnitListingsResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryUnitListingsResponse",
  encode(message: QueryUnitListingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      UnitListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnitListingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnitListingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listings.push(UnitListing.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryUnitListingsResponse>): QueryUnitListingsResponse {
    const message = createBaseQueryUnitListingsResponse();
    message.listings = object.listings?.map(e => UnitListing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnitListingsResponseAmino): QueryUnitListingsResponse {
    const message = createBaseQueryUnitListingsResponse();
    message.listings = object.listings?.map(e => UnitListing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnitListingsResponse): QueryUnitListingsResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? UnitListing.toAmino(e) : undefined);
    } else {
      obj.listings = message.listings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnitListingsResponseAminoMsg): QueryUnitListingsResponse {
    return QueryUnitListingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnitListingsResponseProtoMsg): QueryUnitListingsResponse {
    return QueryUnitListingsResponse.decode(message.value);
  },
  toProto(message: QueryUnitListingsResponse): Uint8Array {
    return QueryUnitListingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnitListingsResponse): QueryUnitListingsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryUnitListingsResponse",
      value: QueryUnitListingsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCraftRecipesRequest(): QueryCraftRecipesRequest {
  return {
    classId: BigInt(0)
  };
}
/**
 * QueryCraftRecipesRequest defines the QueryCraftRecipesRequest message.
 * @name QueryCraftRecipesRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryCraftRecipesRequest
 */
export const QueryCraftRecipesRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryCraftRecipesRequest",
  encode(message: QueryCraftRecipesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCraftRecipesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCraftRecipesRequest();
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
  fromPartial(object: DeepPartial<QueryCraftRecipesRequest>): QueryCraftRecipesRequest {
    const message = createBaseQueryCraftRecipesRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCraftRecipesRequestAmino): QueryCraftRecipesRequest {
    const message = createBaseQueryCraftRecipesRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: QueryCraftRecipesRequest): QueryCraftRecipesRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCraftRecipesRequestAminoMsg): QueryCraftRecipesRequest {
    return QueryCraftRecipesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCraftRecipesRequestProtoMsg): QueryCraftRecipesRequest {
    return QueryCraftRecipesRequest.decode(message.value);
  },
  toProto(message: QueryCraftRecipesRequest): Uint8Array {
    return QueryCraftRecipesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCraftRecipesRequest): QueryCraftRecipesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryCraftRecipesRequest",
      value: QueryCraftRecipesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCraftRecipesResponse(): QueryCraftRecipesResponse {
  return {
    recipes: [],
    locked: false
  };
}
/**
 * QueryCraftRecipesResponse defines the QueryCraftRecipesResponse message.
 * @name QueryCraftRecipesResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryCraftRecipesResponse
 */
export const QueryCraftRecipesResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryCraftRecipesResponse",
  encode(message: QueryCraftRecipesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recipes) {
      CraftRecipe.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.locked === true) {
      writer.uint32(16).bool(message.locked);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCraftRecipesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCraftRecipesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipes.push(CraftRecipe.decode(reader, reader.uint32()));
          break;
        case 2:
          message.locked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCraftRecipesResponse>): QueryCraftRecipesResponse {
    const message = createBaseQueryCraftRecipesResponse();
    message.recipes = object.recipes?.map(e => CraftRecipe.fromPartial(e)) || [];
    message.locked = object.locked ?? false;
    return message;
  },
  fromAmino(object: QueryCraftRecipesResponseAmino): QueryCraftRecipesResponse {
    const message = createBaseQueryCraftRecipesResponse();
    message.recipes = object.recipes?.map(e => CraftRecipe.fromAmino(e)) || [];
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = object.locked;
    }
    return message;
  },
  toAmino(message: QueryCraftRecipesResponse): QueryCraftRecipesResponseAmino {
    const obj: any = {};
    if (message.recipes) {
      obj.recipes = message.recipes.map(e => e ? CraftRecipe.toAmino(e) : undefined);
    } else {
      obj.recipes = message.recipes;
    }
    obj.locked = message.locked === false ? undefined : message.locked;
    return obj;
  },
  fromAminoMsg(object: QueryCraftRecipesResponseAminoMsg): QueryCraftRecipesResponse {
    return QueryCraftRecipesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCraftRecipesResponseProtoMsg): QueryCraftRecipesResponse {
    return QueryCraftRecipesResponse.decode(message.value);
  },
  toProto(message: QueryCraftRecipesResponse): Uint8Array {
    return QueryCraftRecipesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCraftRecipesResponse): QueryCraftRecipesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryCraftRecipesResponse",
      value: QueryCraftRecipesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRentalRequest(): QueryRentalRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryRentalRequest defines the QueryRentalRequest message.
 * @name QueryRentalRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalRequest
 */
export const QueryRentalRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalRequest",
  encode(message: QueryRentalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalRequest();
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
  fromPartial(object: DeepPartial<QueryRentalRequest>): QueryRentalRequest {
    const message = createBaseQueryRentalRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRentalRequestAmino): QueryRentalRequest {
    const message = createBaseQueryRentalRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryRentalRequest): QueryRentalRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalRequestAminoMsg): QueryRentalRequest {
    return QueryRentalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalRequestProtoMsg): QueryRentalRequest {
    return QueryRentalRequest.decode(message.value);
  },
  toProto(message: QueryRentalRequest): Uint8Array {
    return QueryRentalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalRequest): QueryRentalRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalRequest",
      value: QueryRentalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRentalResponse(): QueryRentalResponse {
  return {
    rental: Rental.fromPartial({})
  };
}
/**
 * QueryRentalResponse defines the QueryRentalResponse message.
 * @name QueryRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalResponse
 */
export const QueryRentalResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalResponse",
  encode(message: QueryRentalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rental !== undefined) {
      Rental.encode(message.rental, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rental = Rental.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRentalResponse>): QueryRentalResponse {
    const message = createBaseQueryRentalResponse();
    message.rental = object.rental !== undefined && object.rental !== null ? Rental.fromPartial(object.rental) : undefined;
    return message;
  },
  fromAmino(object: QueryRentalResponseAmino): QueryRentalResponse {
    const message = createBaseQueryRentalResponse();
    if (object.rental !== undefined && object.rental !== null) {
      message.rental = Rental.fromAmino(object.rental);
    }
    return message;
  },
  toAmino(message: QueryRentalResponse): QueryRentalResponseAmino {
    const obj: any = {};
    obj.rental = message.rental ? Rental.toAmino(message.rental) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalResponseAminoMsg): QueryRentalResponse {
    return QueryRentalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalResponseProtoMsg): QueryRentalResponse {
    return QueryRentalResponse.decode(message.value);
  },
  toProto(message: QueryRentalResponse): Uint8Array {
    return QueryRentalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalResponse): QueryRentalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalResponse",
      value: QueryRentalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRentalOfferRequest(): QueryRentalOfferRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryRentalOfferRequest defines the QueryRentalOfferRequest message.
 * @name QueryRentalOfferRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOfferRequest
 */
export const QueryRentalOfferRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOfferRequest",
  encode(message: QueryRentalOfferRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalOfferRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalOfferRequest();
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
  fromPartial(object: DeepPartial<QueryRentalOfferRequest>): QueryRentalOfferRequest {
    const message = createBaseQueryRentalOfferRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRentalOfferRequestAmino): QueryRentalOfferRequest {
    const message = createBaseQueryRentalOfferRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryRentalOfferRequest): QueryRentalOfferRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalOfferRequestAminoMsg): QueryRentalOfferRequest {
    return QueryRentalOfferRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalOfferRequestProtoMsg): QueryRentalOfferRequest {
    return QueryRentalOfferRequest.decode(message.value);
  },
  toProto(message: QueryRentalOfferRequest): Uint8Array {
    return QueryRentalOfferRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalOfferRequest): QueryRentalOfferRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalOfferRequest",
      value: QueryRentalOfferRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRentalOfferResponse(): QueryRentalOfferResponse {
  return {
    offer: RentalOffer.fromPartial({})
  };
}
/**
 * QueryRentalOfferResponse defines the QueryRentalOfferResponse message.
 * @name QueryRentalOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOfferResponse
 */
export const QueryRentalOfferResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOfferResponse",
  encode(message: QueryRentalOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offer !== undefined) {
      RentalOffer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offer = RentalOffer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRentalOfferResponse>): QueryRentalOfferResponse {
    const message = createBaseQueryRentalOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? RentalOffer.fromPartial(object.offer) : undefined;
    return message;
  },
  fromAmino(object: QueryRentalOfferResponseAmino): QueryRentalOfferResponse {
    const message = createBaseQueryRentalOfferResponse();
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = RentalOffer.fromAmino(object.offer);
    }
    return message;
  },
  toAmino(message: QueryRentalOfferResponse): QueryRentalOfferResponseAmino {
    const obj: any = {};
    obj.offer = message.offer ? RentalOffer.toAmino(message.offer) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalOfferResponseAminoMsg): QueryRentalOfferResponse {
    return QueryRentalOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalOfferResponseProtoMsg): QueryRentalOfferResponse {
    return QueryRentalOfferResponse.decode(message.value);
  },
  toProto(message: QueryRentalOfferResponse): Uint8Array {
    return QueryRentalOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalOfferResponse): QueryRentalOfferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalOfferResponse",
      value: QueryRentalOfferResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRentalsByUserRequest(): QueryRentalsByUserRequest {
  return {
    user: "",
    pagination: undefined
  };
}
/**
 * QueryRentalsByUserRequest defines the QueryRentalsByUserRequest message.
 * @name QueryRentalsByUserRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalsByUserRequest
 */
export const QueryRentalsByUserRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalsByUserRequest",
  encode(message: QueryRentalsByUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalsByUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalsByUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
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
  fromPartial(object: DeepPartial<QueryRentalsByUserRequest>): QueryRentalsByUserRequest {
    const message = createBaseQueryRentalsByUserRequest();
    message.user = object.user ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRentalsByUserRequestAmino): QueryRentalsByUserRequest {
    const message = createBaseQueryRentalsByUserRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRentalsByUserRequest): QueryRentalsByUserRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalsByUserRequestAminoMsg): QueryRentalsByUserRequest {
    return QueryRentalsByUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalsByUserRequestProtoMsg): QueryRentalsByUserRequest {
    return QueryRentalsByUserRequest.decode(message.value);
  },
  toProto(message: QueryRentalsByUserRequest): Uint8Array {
    return QueryRentalsByUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalsByUserRequest): QueryRentalsByUserRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalsByUserRequest",
      value: QueryRentalsByUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRentalsByUserResponse(): QueryRentalsByUserResponse {
  return {
    rentals: [],
    pagination: undefined
  };
}
/**
 * QueryRentalsByUserResponse defines the QueryRentalsByUserResponse message.
 * @name QueryRentalsByUserResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalsByUserResponse
 */
export const QueryRentalsByUserResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalsByUserResponse",
  encode(message: QueryRentalsByUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rentals) {
      Rental.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalsByUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalsByUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rentals.push(Rental.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryRentalsByUserResponse>): QueryRentalsByUserResponse {
    const message = createBaseQueryRentalsByUserResponse();
    message.rentals = object.rentals?.map(e => Rental.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRentalsByUserResponseAmino): QueryRentalsByUserResponse {
    const message = createBaseQueryRentalsByUserResponse();
    message.rentals = object.rentals?.map(e => Rental.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRentalsByUserResponse): QueryRentalsByUserResponseAmino {
    const obj: any = {};
    if (message.rentals) {
      obj.rentals = message.rentals.map(e => e ? Rental.toAmino(e) : undefined);
    } else {
      obj.rentals = message.rentals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalsByUserResponseAminoMsg): QueryRentalsByUserResponse {
    return QueryRentalsByUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalsByUserResponseProtoMsg): QueryRentalsByUserResponse {
    return QueryRentalsByUserResponse.decode(message.value);
  },
  toProto(message: QueryRentalsByUserResponse): Uint8Array {
    return QueryRentalsByUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalsByUserResponse): QueryRentalsByUserResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalsByUserResponse",
      value: QueryRentalsByUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChildrenRequest(): QueryChildrenRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryChildrenRequest defines the QueryChildrenRequest message.
 * @name QueryChildrenRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryChildrenRequest
 */
export const QueryChildrenRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryChildrenRequest",
  encode(message: QueryChildrenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChildrenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChildrenRequest();
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
  fromPartial(object: DeepPartial<QueryChildrenRequest>): QueryChildrenRequest {
    const message = createBaseQueryChildrenRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryChildrenRequestAmino): QueryChildrenRequest {
    const message = createBaseQueryChildrenRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryChildrenRequest): QueryChildrenRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChildrenRequestAminoMsg): QueryChildrenRequest {
    return QueryChildrenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChildrenRequestProtoMsg): QueryChildrenRequest {
    return QueryChildrenRequest.decode(message.value);
  },
  toProto(message: QueryChildrenRequest): Uint8Array {
    return QueryChildrenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChildrenRequest): QueryChildrenRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryChildrenRequest",
      value: QueryChildrenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChildrenResponse(): QueryChildrenResponse {
  return {
    children: [],
    contentsHash: "",
    descendants: 0
  };
}
/**
 * QueryChildrenResponse defines the QueryChildrenResponse message.
 * @name QueryChildrenResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryChildrenResponse
 */
export const QueryChildrenResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryChildrenResponse",
  encode(message: QueryChildrenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.children) {
      TokenRef.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.contentsHash !== "") {
      writer.uint32(18).string(message.contentsHash);
    }
    if (message.descendants !== 0) {
      writer.uint32(24).uint32(message.descendants);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChildrenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChildrenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(TokenRef.decode(reader, reader.uint32()));
          break;
        case 2:
          message.contentsHash = reader.string();
          break;
        case 3:
          message.descendants = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChildrenResponse>): QueryChildrenResponse {
    const message = createBaseQueryChildrenResponse();
    message.children = object.children?.map(e => TokenRef.fromPartial(e)) || [];
    message.contentsHash = object.contentsHash ?? "";
    message.descendants = object.descendants ?? 0;
    return message;
  },
  fromAmino(object: QueryChildrenResponseAmino): QueryChildrenResponse {
    const message = createBaseQueryChildrenResponse();
    message.children = object.children?.map(e => TokenRef.fromAmino(e)) || [];
    if (object.contents_hash !== undefined && object.contents_hash !== null) {
      message.contentsHash = object.contents_hash;
    }
    if (object.descendants !== undefined && object.descendants !== null) {
      message.descendants = object.descendants;
    }
    return message;
  },
  toAmino(message: QueryChildrenResponse): QueryChildrenResponseAmino {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? TokenRef.toAmino(e) : undefined);
    } else {
      obj.children = message.children;
    }
    obj.contents_hash = message.contentsHash === "" ? undefined : message.contentsHash;
    obj.descendants = message.descendants === 0 ? undefined : message.descendants;
    return obj;
  },
  fromAminoMsg(object: QueryChildrenResponseAminoMsg): QueryChildrenResponse {
    return QueryChildrenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChildrenResponseProtoMsg): QueryChildrenResponse {
    return QueryChildrenResponse.decode(message.value);
  },
  toProto(message: QueryChildrenResponse): Uint8Array {
    return QueryChildrenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChildrenResponse): QueryChildrenResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryChildrenResponse",
      value: QueryChildrenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHarbergerQuoteRequest(): QueryHarbergerQuoteRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * QueryHarbergerQuoteRequest defines the QueryHarbergerQuoteRequest message.
 * @name QueryHarbergerQuoteRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHarbergerQuoteRequest
 */
export const QueryHarbergerQuoteRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryHarbergerQuoteRequest",
  encode(message: QueryHarbergerQuoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHarbergerQuoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHarbergerQuoteRequest();
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
  fromPartial(object: DeepPartial<QueryHarbergerQuoteRequest>): QueryHarbergerQuoteRequest {
    const message = createBaseQueryHarbergerQuoteRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHarbergerQuoteRequestAmino): QueryHarbergerQuoteRequest {
    const message = createBaseQueryHarbergerQuoteRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: QueryHarbergerQuoteRequest): QueryHarbergerQuoteRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHarbergerQuoteRequestAminoMsg): QueryHarbergerQuoteRequest {
    return QueryHarbergerQuoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHarbergerQuoteRequestProtoMsg): QueryHarbergerQuoteRequest {
    return QueryHarbergerQuoteRequest.decode(message.value);
  },
  toProto(message: QueryHarbergerQuoteRequest): Uint8Array {
    return QueryHarbergerQuoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHarbergerQuoteRequest): QueryHarbergerQuoteRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryHarbergerQuoteRequest",
      value: QueryHarbergerQuoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHarbergerQuoteResponse(): QueryHarbergerQuoteResponse {
  return {
    state: HarbergerState.fromPartial({}),
    currentPrice: "",
    taxPerPeriod: "",
    foreclosed: false,
    forSale: false
  };
}
/**
 * QueryHarbergerQuoteResponse defines the QueryHarbergerQuoteResponse message.
 * @name QueryHarbergerQuoteResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryHarbergerQuoteResponse
 */
export const QueryHarbergerQuoteResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryHarbergerQuoteResponse",
  encode(message: QueryHarbergerQuoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      HarbergerState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentPrice !== "") {
      writer.uint32(18).string(message.currentPrice);
    }
    if (message.taxPerPeriod !== "") {
      writer.uint32(26).string(message.taxPerPeriod);
    }
    if (message.foreclosed === true) {
      writer.uint32(32).bool(message.foreclosed);
    }
    if (message.forSale === true) {
      writer.uint32(40).bool(message.forSale);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHarbergerQuoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHarbergerQuoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = HarbergerState.decode(reader, reader.uint32());
          break;
        case 2:
          message.currentPrice = reader.string();
          break;
        case 3:
          message.taxPerPeriod = reader.string();
          break;
        case 4:
          message.foreclosed = reader.bool();
          break;
        case 5:
          message.forSale = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHarbergerQuoteResponse>): QueryHarbergerQuoteResponse {
    const message = createBaseQueryHarbergerQuoteResponse();
    message.state = object.state !== undefined && object.state !== null ? HarbergerState.fromPartial(object.state) : undefined;
    message.currentPrice = object.currentPrice ?? "";
    message.taxPerPeriod = object.taxPerPeriod ?? "";
    message.foreclosed = object.foreclosed ?? false;
    message.forSale = object.forSale ?? false;
    return message;
  },
  fromAmino(object: QueryHarbergerQuoteResponseAmino): QueryHarbergerQuoteResponse {
    const message = createBaseQueryHarbergerQuoteResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = HarbergerState.fromAmino(object.state);
    }
    if (object.current_price !== undefined && object.current_price !== null) {
      message.currentPrice = object.current_price;
    }
    if (object.tax_per_period !== undefined && object.tax_per_period !== null) {
      message.taxPerPeriod = object.tax_per_period;
    }
    if (object.foreclosed !== undefined && object.foreclosed !== null) {
      message.foreclosed = object.foreclosed;
    }
    if (object.for_sale !== undefined && object.for_sale !== null) {
      message.forSale = object.for_sale;
    }
    return message;
  },
  toAmino(message: QueryHarbergerQuoteResponse): QueryHarbergerQuoteResponseAmino {
    const obj: any = {};
    obj.state = message.state ? HarbergerState.toAmino(message.state) : undefined;
    obj.current_price = message.currentPrice === "" ? undefined : message.currentPrice;
    obj.tax_per_period = message.taxPerPeriod === "" ? undefined : message.taxPerPeriod;
    obj.foreclosed = message.foreclosed === false ? undefined : message.foreclosed;
    obj.for_sale = message.forSale === false ? undefined : message.forSale;
    return obj;
  },
  fromAminoMsg(object: QueryHarbergerQuoteResponseAminoMsg): QueryHarbergerQuoteResponse {
    return QueryHarbergerQuoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHarbergerQuoteResponseProtoMsg): QueryHarbergerQuoteResponse {
    return QueryHarbergerQuoteResponse.decode(message.value);
  },
  toProto(message: QueryHarbergerQuoteResponse): Uint8Array {
    return QueryHarbergerQuoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHarbergerQuoteResponse): QueryHarbergerQuoteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryHarbergerQuoteResponse",
      value: QueryHarbergerQuoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOfferRequest(): QueryOfferRequest {
  return {
    offerId: BigInt(0)
  };
}
/**
 * QueryOfferRequest defines the QueryOfferRequest message.
 * @name QueryOfferRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOfferRequest
 */
export const QueryOfferRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryOfferRequest",
  encode(message: QueryOfferRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offerId !== BigInt(0)) {
      writer.uint32(8).uint64(message.offerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOfferRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOfferRequest>): QueryOfferRequest {
    const message = createBaseQueryOfferRequest();
    message.offerId = object.offerId !== undefined && object.offerId !== null ? BigInt(object.offerId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryOfferRequestAmino): QueryOfferRequest {
    const message = createBaseQueryOfferRequest();
    if (object.offer_id !== undefined && object.offer_id !== null) {
      message.offerId = BigInt(object.offer_id);
    }
    return message;
  },
  toAmino(message: QueryOfferRequest): QueryOfferRequestAmino {
    const obj: any = {};
    obj.offer_id = message.offerId !== BigInt(0) ? message.offerId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOfferRequestAminoMsg): QueryOfferRequest {
    return QueryOfferRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOfferRequestProtoMsg): QueryOfferRequest {
    return QueryOfferRequest.decode(message.value);
  },
  toProto(message: QueryOfferRequest): Uint8Array {
    return QueryOfferRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOfferRequest): QueryOfferRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOfferRequest",
      value: QueryOfferRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOfferResponse(): QueryOfferResponse {
  return {
    offer: Offer.fromPartial({})
  };
}
/**
 * QueryOfferResponse defines the QueryOfferResponse message.
 * @name QueryOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOfferResponse
 */
export const QueryOfferResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryOfferResponse",
  encode(message: QueryOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offer = Offer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOfferResponse>): QueryOfferResponse {
    const message = createBaseQueryOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  },
  fromAmino(object: QueryOfferResponseAmino): QueryOfferResponse {
    const message = createBaseQueryOfferResponse();
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromAmino(object.offer);
    }
    return message;
  },
  toAmino(message: QueryOfferResponse): QueryOfferResponseAmino {
    const obj: any = {};
    obj.offer = message.offer ? Offer.toAmino(message.offer) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOfferResponseAminoMsg): QueryOfferResponse {
    return QueryOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOfferResponseProtoMsg): QueryOfferResponse {
    return QueryOfferResponse.decode(message.value);
  },
  toProto(message: QueryOfferResponse): Uint8Array {
    return QueryOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOfferResponse): QueryOfferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOfferResponse",
      value: QueryOfferResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOffersRequest(): QueryOffersRequest {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryOffersRequest lists the open offers on a token, or (token_id 0) the
 * collection offers on a class.
 * @name QueryOffersRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersRequest
 */
export const QueryOffersRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersRequest",
  encode(message: QueryOffersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOffersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOffersRequest>): QueryOffersRequest {
    const message = createBaseQueryOffersRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersRequestAmino): QueryOffersRequest {
    const message = createBaseQueryOffersRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersRequest): QueryOffersRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersRequestAminoMsg): QueryOffersRequest {
    return QueryOffersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersRequestProtoMsg): QueryOffersRequest {
    return QueryOffersRequest.decode(message.value);
  },
  toProto(message: QueryOffersRequest): Uint8Array {
    return QueryOffersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersRequest): QueryOffersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOffersRequest",
      value: QueryOffersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOffersResponse(): QueryOffersResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
/**
 * QueryOffersResponse defines the QueryOffersResponse message.
 * @name QueryOffersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersResponse
 */
export const QueryOffersResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersResponse",
  encode(message: QueryOffersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOffersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryOffersResponse>): QueryOffersResponse {
    const message = createBaseQueryOffersResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersResponseAmino): QueryOffersResponse {
    const message = createBaseQueryOffersResponse();
    message.offers = object.offers?.map(e => Offer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersResponse): QueryOffersResponseAmino {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offers = message.offers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersResponseAminoMsg): QueryOffersResponse {
    return QueryOffersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersResponseProtoMsg): QueryOffersResponse {
    return QueryOffersResponse.decode(message.value);
  },
  toProto(message: QueryOffersResponse): Uint8Array {
    return QueryOffersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersResponse): QueryOffersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOffersResponse",
      value: QueryOffersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOffersByBidderRequest(): QueryOffersByBidderRequest {
  return {
    bidder: "",
    pagination: undefined
  };
}
/**
 * QueryOffersByBidderRequest defines the QueryOffersByBidderRequest message.
 * @name QueryOffersByBidderRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersByBidderRequest
 */
export const QueryOffersByBidderRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersByBidderRequest",
  encode(message: QueryOffersByBidderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOffersByBidderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersByBidderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
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
  fromPartial(object: DeepPartial<QueryOffersByBidderRequest>): QueryOffersByBidderRequest {
    const message = createBaseQueryOffersByBidderRequest();
    message.bidder = object.bidder ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersByBidderRequestAmino): QueryOffersByBidderRequest {
    const message = createBaseQueryOffersByBidderRequest();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersByBidderRequest): QueryOffersByBidderRequestAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersByBidderRequestAminoMsg): QueryOffersByBidderRequest {
    return QueryOffersByBidderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersByBidderRequestProtoMsg): QueryOffersByBidderRequest {
    return QueryOffersByBidderRequest.decode(message.value);
  },
  toProto(message: QueryOffersByBidderRequest): Uint8Array {
    return QueryOffersByBidderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersByBidderRequest): QueryOffersByBidderRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOffersByBidderRequest",
      value: QueryOffersByBidderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOffersByBidderResponse(): QueryOffersByBidderResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
/**
 * QueryOffersByBidderResponse defines the QueryOffersByBidderResponse message.
 * @name QueryOffersByBidderResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryOffersByBidderResponse
 */
export const QueryOffersByBidderResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryOffersByBidderResponse",
  encode(message: QueryOffersByBidderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOffersByBidderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersByBidderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryOffersByBidderResponse>): QueryOffersByBidderResponse {
    const message = createBaseQueryOffersByBidderResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersByBidderResponseAmino): QueryOffersByBidderResponse {
    const message = createBaseQueryOffersByBidderResponse();
    message.offers = object.offers?.map(e => Offer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersByBidderResponse): QueryOffersByBidderResponseAmino {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offers = message.offers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersByBidderResponseAminoMsg): QueryOffersByBidderResponse {
    return QueryOffersByBidderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersByBidderResponseProtoMsg): QueryOffersByBidderResponse {
    return QueryOffersByBidderResponse.decode(message.value);
  },
  toProto(message: QueryOffersByBidderResponse): Uint8Array {
    return QueryOffersByBidderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersByBidderResponse): QueryOffersByBidderResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryOffersByBidderResponse",
      value: QueryOffersByBidderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    auctionId: BigInt(0)
  };
}
/**
 * QueryAuctionRequest defines the QueryAuctionRequest message.
 * @name QueryAuctionRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionRequest
 */
export const QueryAuctionRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionRequest",
  encode(message: QueryAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    return message;
  },
  toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.decode(message.value);
  },
  toProto(message: QueryAuctionRequest): Uint8Array {
    return QueryAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryAuctionRequest",
      value: QueryAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: Auction.fromPartial({}),
    minNextBid: ""
  };
}
/**
 * QueryAuctionResponse defines the QueryAuctionResponse message.
 * @name QueryAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionResponse
 */
export const QueryAuctionResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionResponse",
  encode(message: QueryAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    if (message.minNextBid !== "") {
      writer.uint32(18).string(message.minNextBid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        case 2:
          message.minNextBid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionResponse>): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    message.minNextBid = object.minNextBid ?? "";
    return message;
  },
  fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    if (object.min_next_bid !== undefined && object.min_next_bid !== null) {
      message.minNextBid = object.min_next_bid;
    }
    return message;
  },
  toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
    obj.min_next_bid = message.minNextBid === "" ? undefined : message.minNextBid;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.decode(message.value);
  },
  toProto(message: QueryAuctionResponse): Uint8Array {
    return QueryAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryAuctionResponse",
      value: QueryAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    classId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryAuctionsRequest lists open auctions (class_id 0 = every class).
 * @name QueryAuctionsRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsRequest
 */
export const QueryAuctionsRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsRequest",
  encode(message: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
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
  fromPartial(object: DeepPartial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsRequest): Uint8Array {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}
/**
 * QueryAuctionsResponse defines the QueryAuctionsResponse message.
 * @name QueryAuctionsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsResponse
 */
export const QueryAuctionsResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = message.auctions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsResponse): Uint8Array {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsBySellerRequest(): QueryAuctionsBySellerRequest {
  return {
    seller: "",
    pagination: undefined
  };
}
/**
 * QueryAuctionsBySellerRequest defines the QueryAuctionsBySellerRequest message.
 * @name QueryAuctionsBySellerRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsBySellerRequest
 */
export const QueryAuctionsBySellerRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsBySellerRequest",
  encode(message: QueryAuctionsBySellerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsBySellerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsBySellerRequest();
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
  fromPartial(object: DeepPartial<QueryAuctionsBySellerRequest>): QueryAuctionsBySellerRequest {
    const message = createBaseQueryAuctionsBySellerRequest();
    message.seller = object.seller ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsBySellerRequestAmino): QueryAuctionsBySellerRequest {
    const message = createBaseQueryAuctionsBySellerRequest();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsBySellerRequest): QueryAuctionsBySellerRequestAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsBySellerRequestAminoMsg): QueryAuctionsBySellerRequest {
    return QueryAuctionsBySellerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsBySellerRequestProtoMsg): QueryAuctionsBySellerRequest {
    return QueryAuctionsBySellerRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsBySellerRequest): Uint8Array {
    return QueryAuctionsBySellerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsBySellerRequest): QueryAuctionsBySellerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryAuctionsBySellerRequest",
      value: QueryAuctionsBySellerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsBySellerResponse(): QueryAuctionsBySellerResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}
/**
 * QueryAuctionsBySellerResponse defines the QueryAuctionsBySellerResponse message.
 * @name QueryAuctionsBySellerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryAuctionsBySellerResponse
 */
export const QueryAuctionsBySellerResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryAuctionsBySellerResponse",
  encode(message: QueryAuctionsBySellerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsBySellerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsBySellerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAuctionsBySellerResponse>): QueryAuctionsBySellerResponse {
    const message = createBaseQueryAuctionsBySellerResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsBySellerResponseAmino): QueryAuctionsBySellerResponse {
    const message = createBaseQueryAuctionsBySellerResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsBySellerResponse): QueryAuctionsBySellerResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = message.auctions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsBySellerResponseAminoMsg): QueryAuctionsBySellerResponse {
    return QueryAuctionsBySellerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsBySellerResponseProtoMsg): QueryAuctionsBySellerResponse {
    return QueryAuctionsBySellerResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsBySellerResponse): Uint8Array {
    return QueryAuctionsBySellerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsBySellerResponse): QueryAuctionsBySellerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryAuctionsBySellerResponse",
      value: QueryAuctionsBySellerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRentalOffersRequest(): QueryRentalOffersRequest {
  return {
    user: "",
    pagination: undefined
  };
}
/**
 * QueryRentalOffersRequest defines the QueryRentalOffersRequest message.
 * @name QueryRentalOffersRequest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOffersRequest
 */
export const QueryRentalOffersRequest = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOffersRequest",
  encode(message: QueryRentalOffersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalOffersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalOffersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
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
  fromPartial(object: DeepPartial<QueryRentalOffersRequest>): QueryRentalOffersRequest {
    const message = createBaseQueryRentalOffersRequest();
    message.user = object.user ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRentalOffersRequestAmino): QueryRentalOffersRequest {
    const message = createBaseQueryRentalOffersRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRentalOffersRequest): QueryRentalOffersRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalOffersRequestAminoMsg): QueryRentalOffersRequest {
    return QueryRentalOffersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalOffersRequestProtoMsg): QueryRentalOffersRequest {
    return QueryRentalOffersRequest.decode(message.value);
  },
  toProto(message: QueryRentalOffersRequest): Uint8Array {
    return QueryRentalOffersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalOffersRequest): QueryRentalOffersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalOffersRequest",
      value: QueryRentalOffersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRentalOffersResponse(): QueryRentalOffersResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
/**
 * QueryRentalOffersResponse defines the QueryRentalOffersResponse message.
 * @name QueryRentalOffersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.QueryRentalOffersResponse
 */
export const QueryRentalOffersResponse = {
  typeUrl: "/sparkdream.artifact.v1.QueryRentalOffersResponse",
  encode(message: QueryRentalOffersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.offers) {
      RentalOffer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRentalOffersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRentalOffersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offers.push(RentalOffer.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryRentalOffersResponse>): QueryRentalOffersResponse {
    const message = createBaseQueryRentalOffersResponse();
    message.offers = object.offers?.map(e => RentalOffer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRentalOffersResponseAmino): QueryRentalOffersResponse {
    const message = createBaseQueryRentalOffersResponse();
    message.offers = object.offers?.map(e => RentalOffer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRentalOffersResponse): QueryRentalOffersResponseAmino {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? RentalOffer.toAmino(e) : undefined);
    } else {
      obj.offers = message.offers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRentalOffersResponseAminoMsg): QueryRentalOffersResponse {
    return QueryRentalOffersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRentalOffersResponseProtoMsg): QueryRentalOffersResponse {
    return QueryRentalOffersResponse.decode(message.value);
  },
  toProto(message: QueryRentalOffersResponse): Uint8Array {
    return QueryRentalOffersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRentalOffersResponse): QueryRentalOffersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.QueryRentalOffersResponse",
      value: QueryRentalOffersResponse.encode(message).finish()
    };
  }
};