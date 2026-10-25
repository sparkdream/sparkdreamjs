//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryClassesByOwnerRequest, QueryClassesByOwnerResponse, QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryTokensByOwnerRequest, QueryTokensByOwnerResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryListingRequest, QueryListingResponse, QueryListingsRequest, QueryListingsResponse, QueryListingsBySellerRequest, QueryListingsBySellerResponse, QueryInboxRequest, QueryInboxResponse, QueryOutboxRequest, QueryOutboxResponse, QueryReceivePolicyRequest, QueryReceivePolicyResponse, QueryPendingClassOwnerRequest, QueryPendingClassOwnerResponse, QueryHideRecordRequest, QueryHideRecordResponse, QueryHideRecordsByTargetRequest, QueryHideRecordsByTargetResponse, QueryMediaProposalsRequest, QueryMediaProposalsResponse, QueryPublicMintQuoteRequest, QueryPublicMintQuoteResponse, QueryEditionRequest, QueryEditionResponse, QueryEditionsRequest, QueryEditionsResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesByOwnerRequest, QueryBalancesByOwnerResponse, QueryEditionHoldersRequest, QueryEditionHoldersResponse, QueryUnitListingRequest, QueryUnitListingResponse, QueryUnitListingsRequest, QueryUnitListingsResponse, QueryCraftRecipesRequest, QueryCraftRecipesResponse, QueryRentalRequest, QueryRentalResponse, QueryRentalOfferRequest, QueryRentalOfferResponse, QueryRentalsByUserRequest, QueryRentalsByUserResponse, QueryChildrenRequest, QueryChildrenResponse, QueryHarbergerQuoteRequest, QueryHarbergerQuoteResponse, QueryOfferRequest, QueryOfferResponse, QueryOffersRequest, QueryOffersResponse, QueryOffersByBidderRequest, QueryOffersByBidderResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse, QueryAuctionsBySellerRequest, QueryAuctionsBySellerResponse, QueryRentalOffersRequest, QueryRentalOffersResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Parameters queries the parameters of the module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/artifact/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Class returns one class. */
  class = async (params: QueryClassRequest): Promise<QueryClassResponse> => {
    const endpoint = `sparkdream/artifact/v1/class/${params.classId}`;
    return await this.req.get<QueryClassResponse>(endpoint);
  };
  /* Classes lists all classes. */
  classes = async (params: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/classes`;
    return await this.req.get<QueryClassesResponse>(endpoint, options);
  };
  /* ClassesByOwner lists the classes an address owns. */
  classesByOwner = async (params: QueryClassesByOwnerRequest): Promise<QueryClassesByOwnerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/classes_by_owner/${params.owner}`;
    return await this.req.get<QueryClassesByOwnerResponse>(endpoint, options);
  };
  /* Token returns one token. */
  token = async (params: QueryTokenRequest): Promise<QueryTokenResponse> => {
    const endpoint = `sparkdream/artifact/v1/token/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryTokenResponse>(endpoint);
  };
  /* Tokens lists the tokens of a class. */
  tokens = async (params: QueryTokensRequest): Promise<QueryTokensResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/tokens/${params.classId}`;
    return await this.req.get<QueryTokensResponse>(endpoint, options);
  };
  /* TokensByOwner lists the tokens an address owns. */
  tokensByOwner = async (params: QueryTokensByOwnerRequest): Promise<QueryTokensByOwnerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/tokens_by_owner/${params.owner}`;
    return await this.req.get<QueryTokensByOwnerResponse>(endpoint, options);
  };
  /* Owner returns a token's owner. */
  owner = async (params: QueryOwnerRequest): Promise<QueryOwnerResponse> => {
    const endpoint = `sparkdream/artifact/v1/owner/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryOwnerResponse>(endpoint);
  };
  /* Supply returns a class's supply counters. */
  supply = async (params: QuerySupplyRequest): Promise<QuerySupplyResponse> => {
    const endpoint = `sparkdream/artifact/v1/supply/${params.classId}`;
    return await this.req.get<QuerySupplyResponse>(endpoint);
  };
  /* Listing returns a token's active listing. */
  listing = async (params: QueryListingRequest): Promise<QueryListingResponse> => {
    const endpoint = `sparkdream/artifact/v1/listing/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryListingResponse>(endpoint);
  };
  /* Listings lists active listings, optionally for one class. */
  listings = async (params: QueryListingsRequest): Promise<QueryListingsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.classId !== "undefined") {
      options.params.class_id = params.classId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/listings`;
    return await this.req.get<QueryListingsResponse>(endpoint, options);
  };
  /* ListingsBySeller lists a seller's active listings. */
  listingsBySeller = async (params: QueryListingsBySellerRequest): Promise<QueryListingsBySellerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/listings_by_seller/${params.seller}`;
    return await this.req.get<QueryListingsBySellerResponse>(endpoint, options);
  };
  /* Inbox lists an address's open incoming items. */
  inbox = async (params: QueryInboxRequest): Promise<QueryInboxResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/inbox/${params.address}`;
    return await this.req.get<QueryInboxResponse>(endpoint, options);
  };
  /* Outbox lists an address's open outgoing items. */
  outbox = async (params: QueryOutboxRequest): Promise<QueryOutboxResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/outbox/${params.address}`;
    return await this.req.get<QueryOutboxResponse>(endpoint, options);
  };
  /* ReceivePolicy returns an address's effective receive policy. */
  receivePolicy = async (params: QueryReceivePolicyRequest): Promise<QueryReceivePolicyResponse> => {
    const endpoint = `sparkdream/artifact/v1/receive_policy/${params.address}`;
    return await this.req.get<QueryReceivePolicyResponse>(endpoint);
  };
  /* PendingClassOwner returns a class's open handover proposal. */
  pendingClassOwner = async (params: QueryPendingClassOwnerRequest): Promise<QueryPendingClassOwnerResponse> => {
    const endpoint = `sparkdream/artifact/v1/pending_class_owner/${params.classId}`;
    return await this.req.get<QueryPendingClassOwnerResponse>(endpoint);
  };
  /* HideRecord returns one hide record. */
  hideRecord = async (params: QueryHideRecordRequest): Promise<QueryHideRecordResponse> => {
    const endpoint = `sparkdream/artifact/v1/hide_record/${params.hideId}`;
    return await this.req.get<QueryHideRecordResponse>(endpoint);
  };
  /* HideRecordsByTarget lists every hide record for a class (token_id 0) or token. */
  hideRecordsByTarget = async (params: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse> => {
    const endpoint = `sparkdream/artifact/v1/hide_records_by_target/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryHideRecordsByTargetResponse>(endpoint);
  };
  /* MediaProposals lists the open media proposals of a token. */
  mediaProposals = async (params: QueryMediaProposalsRequest): Promise<QueryMediaProposalsResponse> => {
    const endpoint = `sparkdream/artifact/v1/media_proposals/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryMediaProposalsResponse>(endpoint);
  };
  /* PublicMintQuote prices a public mint. */
  publicMintQuote = async (params: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse> => {
    const endpoint = `sparkdream/artifact/v1/public_mint_quote/${params.classId}/${params.buyer}/${params.quantity}`;
    return await this.req.get<QueryPublicMintQuoteResponse>(endpoint);
  };
  /* Edition shows one edition of an EDITIONS class. */
  edition = async (params: QueryEditionRequest): Promise<QueryEditionResponse> => {
    const endpoint = `sparkdream/artifact/v1/edition/${params.classId}/${params.editionId}`;
    return await this.req.get<QueryEditionResponse>(endpoint);
  };
  /* Editions lists the editions of a class. */
  editions = async (params: QueryEditionsRequest): Promise<QueryEditionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/editions/${params.classId}`;
    return await this.req.get<QueryEditionsResponse>(endpoint, options);
  };
  /* Balance shows one address's units of an edition and its claimable
   retro funding. */
  balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const endpoint = `sparkdream/artifact/v1/balance/${params.classId}/${params.editionId}/${params.owner}`;
    return await this.req.get<QueryBalanceResponse>(endpoint);
  };
  /* BalancesByOwner lists every edition balance an address holds. */
  balancesByOwner = async (params: QueryBalancesByOwnerRequest): Promise<QueryBalancesByOwnerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/balances_by_owner/${params.owner}`;
    return await this.req.get<QueryBalancesByOwnerResponse>(endpoint, options);
  };
  /* EditionHolders lists the balances of one edition. */
  editionHolders = async (params: QueryEditionHoldersRequest): Promise<QueryEditionHoldersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/edition_holders/${params.classId}/${params.editionId}`;
    return await this.req.get<QueryEditionHoldersResponse>(endpoint, options);
  };
  /* UnitListing shows one unit listing. */
  unitListing = async (params: QueryUnitListingRequest): Promise<QueryUnitListingResponse> => {
    const endpoint = `sparkdream/artifact/v1/unit_listing/${params.listingId}`;
    return await this.req.get<QueryUnitListingResponse>(endpoint);
  };
  /* UnitListings lists the active unit listings of an edition. */
  unitListings = async (params: QueryUnitListingsRequest): Promise<QueryUnitListingsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/unit_listings/${params.classId}/${params.editionId}`;
    return await this.req.get<QueryUnitListingsResponse>(endpoint, options);
  };
  /* CraftRecipes lists a class's crafting recipes. */
  craftRecipes = async (params: QueryCraftRecipesRequest): Promise<QueryCraftRecipesResponse> => {
    const endpoint = `sparkdream/artifact/v1/craft_recipes/${params.classId}`;
    return await this.req.get<QueryCraftRecipesResponse>(endpoint);
  };
  /* Rental shows a token's active rental. */
  rental = async (params: QueryRentalRequest): Promise<QueryRentalResponse> => {
    const endpoint = `sparkdream/artifact/v1/rental/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryRentalResponse>(endpoint);
  };
  /* RentalOffer shows a token's open rental offer. */
  rentalOffer = async (params: QueryRentalOfferRequest): Promise<QueryRentalOfferResponse> => {
    const endpoint = `sparkdream/artifact/v1/rental_offer/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryRentalOfferResponse>(endpoint);
  };
  /* RentalsByUser lists the active rentals an address holds as renter. */
  rentalsByUser = async (params: QueryRentalsByUserRequest): Promise<QueryRentalsByUserResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/rentals_by_user/${params.user}`;
    return await this.req.get<QueryRentalsByUserResponse>(endpoint, options);
  };
  /* Children lists the tokens nested directly in a token, with the
   contents hash MsgBuy and MsgAcceptRental pin. */
  children = async (params: QueryChildrenRequest): Promise<QueryChildrenResponse> => {
    const endpoint = `sparkdream/artifact/v1/children/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryChildrenResponse>(endpoint);
  };
  /* HarbergerQuote shows a Harberger token's current price and tax. */
  harbergerQuote = async (params: QueryHarbergerQuoteRequest): Promise<QueryHarbergerQuoteResponse> => {
    const endpoint = `sparkdream/artifact/v1/harberger_quote/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryHarbergerQuoteResponse>(endpoint);
  };
  /* Offer shows one escrowed offer. */
  offer = async (params: QueryOfferRequest): Promise<QueryOfferResponse> => {
    const endpoint = `sparkdream/artifact/v1/offer/${params.offerId}`;
    return await this.req.get<QueryOfferResponse>(endpoint);
  };
  /* Offers lists the open offers on a token (token_id 0 = collection offers). */
  offers = async (params: QueryOffersRequest): Promise<QueryOffersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/offers/${params.classId}/${params.tokenId}`;
    return await this.req.get<QueryOffersResponse>(endpoint, options);
  };
  /* OffersByBidder lists an address's open offers. */
  offersByBidder = async (params: QueryOffersByBidderRequest): Promise<QueryOffersByBidderResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/offers_by_bidder/${params.bidder}`;
    return await this.req.get<QueryOffersByBidderResponse>(endpoint, options);
  };
  /* Auction shows one auction and the lowest bid it accepts now. */
  auction = async (params: QueryAuctionRequest): Promise<QueryAuctionResponse> => {
    const endpoint = `sparkdream/artifact/v1/auction/${params.auctionId}`;
    return await this.req.get<QueryAuctionResponse>(endpoint);
  };
  /* Auctions lists open auctions (class_id 0 = every class). */
  auctions = async (params: QueryAuctionsRequest): Promise<QueryAuctionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/auctions/${params.classId}`;
    return await this.req.get<QueryAuctionsResponse>(endpoint, options);
  };
  /* AuctionsBySeller lists the open auctions started by seller (and the
   seller's predecessor addresses). */
  auctionsBySeller = async (params: QueryAuctionsBySellerRequest): Promise<QueryAuctionsBySellerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/auctions_by_seller/${params.seller}`;
    return await this.req.get<QueryAuctionsBySellerResponse>(endpoint, options);
  };
  /* RentalOffers lists unexpired rental offers. With user set, only the
   offers addressed to that user (or a predecessor address); otherwise every
   offer, including the open ones anyone may accept. */
  rentalOffers = async (params: QueryRentalOffersRequest): Promise<QueryRentalOffersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.user !== "undefined") {
      options.params.user = params.user;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/artifact/v1/rental_offers`;
    return await this.req.get<QueryRentalOffersResponse>(endpoint, options);
  };
}