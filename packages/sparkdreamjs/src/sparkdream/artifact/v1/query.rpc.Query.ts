//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryClassesByOwnerRequest, QueryClassesByOwnerResponse, QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryTokensByOwnerRequest, QueryTokensByOwnerResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryListingRequest, QueryListingResponse, QueryListingsRequest, QueryListingsResponse, QueryListingsBySellerRequest, QueryListingsBySellerResponse, QueryInboxRequest, QueryInboxResponse, QueryOutboxRequest, QueryOutboxResponse, QueryReceivePolicyRequest, QueryReceivePolicyResponse, QueryPendingClassOwnerRequest, QueryPendingClassOwnerResponse, QueryHideRecordRequest, QueryHideRecordResponse, QueryHideRecordsByTargetRequest, QueryHideRecordsByTargetResponse, QueryMediaProposalsRequest, QueryMediaProposalsResponse, QueryPublicMintQuoteRequest, QueryPublicMintQuoteResponse, QueryEditionRequest, QueryEditionResponse, QueryEditionsRequest, QueryEditionsResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesByOwnerRequest, QueryBalancesByOwnerResponse, QueryEditionHoldersRequest, QueryEditionHoldersResponse, QueryUnitListingRequest, QueryUnitListingResponse, QueryUnitListingsRequest, QueryUnitListingsResponse, QueryCraftRecipesRequest, QueryCraftRecipesResponse, QueryRentalRequest, QueryRentalResponse, QueryRentalOfferRequest, QueryRentalOfferResponse, QueryRentalsByUserRequest, QueryRentalsByUserResponse, QueryChildrenRequest, QueryChildrenResponse, QueryHarbergerQuoteRequest, QueryHarbergerQuoteResponse, QueryOfferRequest, QueryOfferResponse, QueryOffersRequest, QueryOffersResponse, QueryOffersByBidderRequest, QueryOffersByBidderResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse, QueryAuctionsBySellerRequest, QueryAuctionsBySellerResponse, QueryRentalOffersRequest, QueryRentalOffersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Class returns one class. */
  class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes lists all classes. */
  classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
  /** ClassesByOwner lists the classes an address owns. */
  classesByOwner(request: QueryClassesByOwnerRequest): Promise<QueryClassesByOwnerResponse>;
  /** Token returns one token. */
  token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** Tokens lists the tokens of a class. */
  tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /** TokensByOwner lists the tokens an address owns. */
  tokensByOwner(request: QueryTokensByOwnerRequest): Promise<QueryTokensByOwnerResponse>;
  /** Owner returns a token's owner. */
  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Supply returns a class's supply counters. */
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Listing returns a token's active listing. */
  listing(request: QueryListingRequest): Promise<QueryListingResponse>;
  /** Listings lists active listings, optionally for one class. */
  listings(request: QueryListingsRequest): Promise<QueryListingsResponse>;
  /** ListingsBySeller lists a seller's active listings. */
  listingsBySeller(request: QueryListingsBySellerRequest): Promise<QueryListingsBySellerResponse>;
  /** Inbox lists an address's open incoming items. */
  inbox(request: QueryInboxRequest): Promise<QueryInboxResponse>;
  /** Outbox lists an address's open outgoing items. */
  outbox(request: QueryOutboxRequest): Promise<QueryOutboxResponse>;
  /** ReceivePolicy returns an address's effective receive policy. */
  receivePolicy(request: QueryReceivePolicyRequest): Promise<QueryReceivePolicyResponse>;
  /** PendingClassOwner returns a class's open handover proposal. */
  pendingClassOwner(request: QueryPendingClassOwnerRequest): Promise<QueryPendingClassOwnerResponse>;
  /** HideRecord returns one hide record. */
  hideRecord(request: QueryHideRecordRequest): Promise<QueryHideRecordResponse>;
  /** HideRecordsByTarget lists every hide record for a class (token_id 0) or token. */
  hideRecordsByTarget(request: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse>;
  /** MediaProposals lists the open media proposals of a token. */
  mediaProposals(request: QueryMediaProposalsRequest): Promise<QueryMediaProposalsResponse>;
  /** PublicMintQuote prices a public mint. */
  publicMintQuote(request: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse>;
  /** Edition shows one edition of an EDITIONS class. */
  edition(request: QueryEditionRequest): Promise<QueryEditionResponse>;
  /** Editions lists the editions of a class. */
  editions(request: QueryEditionsRequest): Promise<QueryEditionsResponse>;
  /**
   * Balance shows one address's units of an edition and its claimable
   * retro funding.
   */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** BalancesByOwner lists every edition balance an address holds. */
  balancesByOwner(request: QueryBalancesByOwnerRequest): Promise<QueryBalancesByOwnerResponse>;
  /** EditionHolders lists the balances of one edition. */
  editionHolders(request: QueryEditionHoldersRequest): Promise<QueryEditionHoldersResponse>;
  /** UnitListing shows one unit listing. */
  unitListing(request: QueryUnitListingRequest): Promise<QueryUnitListingResponse>;
  /** UnitListings lists the active unit listings of an edition. */
  unitListings(request: QueryUnitListingsRequest): Promise<QueryUnitListingsResponse>;
  /** CraftRecipes lists a class's crafting recipes. */
  craftRecipes(request: QueryCraftRecipesRequest): Promise<QueryCraftRecipesResponse>;
  /** Rental shows a token's active rental. */
  rental(request: QueryRentalRequest): Promise<QueryRentalResponse>;
  /** RentalOffer shows a token's open rental offer. */
  rentalOffer(request: QueryRentalOfferRequest): Promise<QueryRentalOfferResponse>;
  /** RentalsByUser lists the active rentals an address holds as renter. */
  rentalsByUser(request: QueryRentalsByUserRequest): Promise<QueryRentalsByUserResponse>;
  /**
   * Children lists the tokens nested directly in a token, with the
   * contents hash MsgBuy and MsgAcceptRental pin.
   */
  children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
  /** HarbergerQuote shows a Harberger token's current price and tax. */
  harbergerQuote(request: QueryHarbergerQuoteRequest): Promise<QueryHarbergerQuoteResponse>;
  /** Offer shows one escrowed offer. */
  offer(request: QueryOfferRequest): Promise<QueryOfferResponse>;
  /** Offers lists the open offers on a token (token_id 0 = collection offers). */
  offers(request: QueryOffersRequest): Promise<QueryOffersResponse>;
  /** OffersByBidder lists an address's open offers. */
  offersByBidder(request: QueryOffersByBidderRequest): Promise<QueryOffersByBidderResponse>;
  /** Auction shows one auction and the lowest bid it accepts now. */
  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  /** Auctions lists open auctions (class_id 0 = every class). */
  auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  /**
   * AuctionsBySeller lists the open auctions started by seller (and the
   * seller's predecessor addresses).
   */
  auctionsBySeller(request: QueryAuctionsBySellerRequest): Promise<QueryAuctionsBySellerResponse>;
  /**
   * RentalOffers lists unexpired rental offers. With user set, only the
   * offers addressed to that user (or a predecessor address); otherwise every
   * offer, including the open ones anyone may accept.
   */
  rentalOffers(request: QueryRentalOffersRequest): Promise<QueryRentalOffersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Class returns one class. */
  class = async (request: QueryClassRequest): Promise<QueryClassResponse> => {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Class", data);
    return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
  };
  /* Classes lists all classes. */
  classes = async (request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> => {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  };
  /* ClassesByOwner lists the classes an address owns. */
  classesByOwner = async (request: QueryClassesByOwnerRequest): Promise<QueryClassesByOwnerResponse> => {
    const data = QueryClassesByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "ClassesByOwner", data);
    return promise.then(data => QueryClassesByOwnerResponse.decode(new BinaryReader(data)));
  };
  /* Token returns one token. */
  token = async (request: QueryTokenRequest): Promise<QueryTokenResponse> => {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Token", data);
    return promise.then(data => QueryTokenResponse.decode(new BinaryReader(data)));
  };
  /* Tokens lists the tokens of a class. */
  tokens = async (request: QueryTokensRequest): Promise<QueryTokensResponse> => {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Tokens", data);
    return promise.then(data => QueryTokensResponse.decode(new BinaryReader(data)));
  };
  /* TokensByOwner lists the tokens an address owns. */
  tokensByOwner = async (request: QueryTokensByOwnerRequest): Promise<QueryTokensByOwnerResponse> => {
    const data = QueryTokensByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "TokensByOwner", data);
    return promise.then(data => QueryTokensByOwnerResponse.decode(new BinaryReader(data)));
  };
  /* Owner returns a token's owner. */
  owner = async (request: QueryOwnerRequest): Promise<QueryOwnerResponse> => {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new BinaryReader(data)));
  };
  /* Supply returns a class's supply counters. */
  supply = async (request: QuerySupplyRequest): Promise<QuerySupplyResponse> => {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  };
  /* Listing returns a token's active listing. */
  listing = async (request: QueryListingRequest): Promise<QueryListingResponse> => {
    const data = QueryListingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Listing", data);
    return promise.then(data => QueryListingResponse.decode(new BinaryReader(data)));
  };
  /* Listings lists active listings, optionally for one class. */
  listings = async (request: QueryListingsRequest): Promise<QueryListingsResponse> => {
    const data = QueryListingsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Listings", data);
    return promise.then(data => QueryListingsResponse.decode(new BinaryReader(data)));
  };
  /* ListingsBySeller lists a seller's active listings. */
  listingsBySeller = async (request: QueryListingsBySellerRequest): Promise<QueryListingsBySellerResponse> => {
    const data = QueryListingsBySellerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "ListingsBySeller", data);
    return promise.then(data => QueryListingsBySellerResponse.decode(new BinaryReader(data)));
  };
  /* Inbox lists an address's open incoming items. */
  inbox = async (request: QueryInboxRequest): Promise<QueryInboxResponse> => {
    const data = QueryInboxRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Inbox", data);
    return promise.then(data => QueryInboxResponse.decode(new BinaryReader(data)));
  };
  /* Outbox lists an address's open outgoing items. */
  outbox = async (request: QueryOutboxRequest): Promise<QueryOutboxResponse> => {
    const data = QueryOutboxRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Outbox", data);
    return promise.then(data => QueryOutboxResponse.decode(new BinaryReader(data)));
  };
  /* ReceivePolicy returns an address's effective receive policy. */
  receivePolicy = async (request: QueryReceivePolicyRequest): Promise<QueryReceivePolicyResponse> => {
    const data = QueryReceivePolicyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "ReceivePolicy", data);
    return promise.then(data => QueryReceivePolicyResponse.decode(new BinaryReader(data)));
  };
  /* PendingClassOwner returns a class's open handover proposal. */
  pendingClassOwner = async (request: QueryPendingClassOwnerRequest): Promise<QueryPendingClassOwnerResponse> => {
    const data = QueryPendingClassOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "PendingClassOwner", data);
    return promise.then(data => QueryPendingClassOwnerResponse.decode(new BinaryReader(data)));
  };
  /* HideRecord returns one hide record. */
  hideRecord = async (request: QueryHideRecordRequest): Promise<QueryHideRecordResponse> => {
    const data = QueryHideRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "HideRecord", data);
    return promise.then(data => QueryHideRecordResponse.decode(new BinaryReader(data)));
  };
  /* HideRecordsByTarget lists every hide record for a class (token_id 0) or token. */
  hideRecordsByTarget = async (request: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse> => {
    const data = QueryHideRecordsByTargetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "HideRecordsByTarget", data);
    return promise.then(data => QueryHideRecordsByTargetResponse.decode(new BinaryReader(data)));
  };
  /* MediaProposals lists the open media proposals of a token. */
  mediaProposals = async (request: QueryMediaProposalsRequest): Promise<QueryMediaProposalsResponse> => {
    const data = QueryMediaProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "MediaProposals", data);
    return promise.then(data => QueryMediaProposalsResponse.decode(new BinaryReader(data)));
  };
  /* PublicMintQuote prices a public mint. */
  publicMintQuote = async (request: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse> => {
    const data = QueryPublicMintQuoteRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "PublicMintQuote", data);
    return promise.then(data => QueryPublicMintQuoteResponse.decode(new BinaryReader(data)));
  };
  /* Edition shows one edition of an EDITIONS class. */
  edition = async (request: QueryEditionRequest): Promise<QueryEditionResponse> => {
    const data = QueryEditionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Edition", data);
    return promise.then(data => QueryEditionResponse.decode(new BinaryReader(data)));
  };
  /* Editions lists the editions of a class. */
  editions = async (request: QueryEditionsRequest): Promise<QueryEditionsResponse> => {
    const data = QueryEditionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Editions", data);
    return promise.then(data => QueryEditionsResponse.decode(new BinaryReader(data)));
  };
  /* Balance shows one address's units of an edition and its claimable
   retro funding. */
  balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* BalancesByOwner lists every edition balance an address holds. */
  balancesByOwner = async (request: QueryBalancesByOwnerRequest): Promise<QueryBalancesByOwnerResponse> => {
    const data = QueryBalancesByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "BalancesByOwner", data);
    return promise.then(data => QueryBalancesByOwnerResponse.decode(new BinaryReader(data)));
  };
  /* EditionHolders lists the balances of one edition. */
  editionHolders = async (request: QueryEditionHoldersRequest): Promise<QueryEditionHoldersResponse> => {
    const data = QueryEditionHoldersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "EditionHolders", data);
    return promise.then(data => QueryEditionHoldersResponse.decode(new BinaryReader(data)));
  };
  /* UnitListing shows one unit listing. */
  unitListing = async (request: QueryUnitListingRequest): Promise<QueryUnitListingResponse> => {
    const data = QueryUnitListingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "UnitListing", data);
    return promise.then(data => QueryUnitListingResponse.decode(new BinaryReader(data)));
  };
  /* UnitListings lists the active unit listings of an edition. */
  unitListings = async (request: QueryUnitListingsRequest): Promise<QueryUnitListingsResponse> => {
    const data = QueryUnitListingsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "UnitListings", data);
    return promise.then(data => QueryUnitListingsResponse.decode(new BinaryReader(data)));
  };
  /* CraftRecipes lists a class's crafting recipes. */
  craftRecipes = async (request: QueryCraftRecipesRequest): Promise<QueryCraftRecipesResponse> => {
    const data = QueryCraftRecipesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "CraftRecipes", data);
    return promise.then(data => QueryCraftRecipesResponse.decode(new BinaryReader(data)));
  };
  /* Rental shows a token's active rental. */
  rental = async (request: QueryRentalRequest): Promise<QueryRentalResponse> => {
    const data = QueryRentalRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Rental", data);
    return promise.then(data => QueryRentalResponse.decode(new BinaryReader(data)));
  };
  /* RentalOffer shows a token's open rental offer. */
  rentalOffer = async (request: QueryRentalOfferRequest): Promise<QueryRentalOfferResponse> => {
    const data = QueryRentalOfferRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "RentalOffer", data);
    return promise.then(data => QueryRentalOfferResponse.decode(new BinaryReader(data)));
  };
  /* RentalsByUser lists the active rentals an address holds as renter. */
  rentalsByUser = async (request: QueryRentalsByUserRequest): Promise<QueryRentalsByUserResponse> => {
    const data = QueryRentalsByUserRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "RentalsByUser", data);
    return promise.then(data => QueryRentalsByUserResponse.decode(new BinaryReader(data)));
  };
  /* Children lists the tokens nested directly in a token, with the
   contents hash MsgBuy and MsgAcceptRental pin. */
  children = async (request: QueryChildrenRequest): Promise<QueryChildrenResponse> => {
    const data = QueryChildrenRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Children", data);
    return promise.then(data => QueryChildrenResponse.decode(new BinaryReader(data)));
  };
  /* HarbergerQuote shows a Harberger token's current price and tax. */
  harbergerQuote = async (request: QueryHarbergerQuoteRequest): Promise<QueryHarbergerQuoteResponse> => {
    const data = QueryHarbergerQuoteRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "HarbergerQuote", data);
    return promise.then(data => QueryHarbergerQuoteResponse.decode(new BinaryReader(data)));
  };
  /* Offer shows one escrowed offer. */
  offer = async (request: QueryOfferRequest): Promise<QueryOfferResponse> => {
    const data = QueryOfferRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Offer", data);
    return promise.then(data => QueryOfferResponse.decode(new BinaryReader(data)));
  };
  /* Offers lists the open offers on a token (token_id 0 = collection offers). */
  offers = async (request: QueryOffersRequest): Promise<QueryOffersResponse> => {
    const data = QueryOffersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Offers", data);
    return promise.then(data => QueryOffersResponse.decode(new BinaryReader(data)));
  };
  /* OffersByBidder lists an address's open offers. */
  offersByBidder = async (request: QueryOffersByBidderRequest): Promise<QueryOffersByBidderResponse> => {
    const data = QueryOffersByBidderRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "OffersByBidder", data);
    return promise.then(data => QueryOffersByBidderResponse.decode(new BinaryReader(data)));
  };
  /* Auction shows one auction and the lowest bid it accepts now. */
  auction = async (request: QueryAuctionRequest): Promise<QueryAuctionResponse> => {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Auction", data);
    return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
  };
  /* Auctions lists open auctions (class_id 0 = every class). */
  auctions = async (request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> => {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "Auctions", data);
    return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
  };
  /* AuctionsBySeller lists the open auctions started by seller (and the
   seller's predecessor addresses). */
  auctionsBySeller = async (request: QueryAuctionsBySellerRequest): Promise<QueryAuctionsBySellerResponse> => {
    const data = QueryAuctionsBySellerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "AuctionsBySeller", data);
    return promise.then(data => QueryAuctionsBySellerResponse.decode(new BinaryReader(data)));
  };
  /* RentalOffers lists unexpired rental offers. With user set, only the
   offers addressed to that user (or a predecessor address); otherwise every
   offer, including the open ones anyone may accept. */
  rentalOffers = async (request: QueryRentalOffersRequest): Promise<QueryRentalOffersResponse> => {
    const data = QueryRentalOffersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "RentalOffers", data);
    return promise.then(data => QueryRentalOffersResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    class(request: QueryClassRequest): Promise<QueryClassResponse> {
      return queryService.class(request);
    },
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse> {
      return queryService.classes(request);
    },
    classesByOwner(request: QueryClassesByOwnerRequest): Promise<QueryClassesByOwnerResponse> {
      return queryService.classesByOwner(request);
    },
    token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
      return queryService.token(request);
    },
    tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
      return queryService.tokens(request);
    },
    tokensByOwner(request: QueryTokensByOwnerRequest): Promise<QueryTokensByOwnerResponse> {
      return queryService.tokensByOwner(request);
    },
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
      return queryService.owner(request);
    },
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },
    listing(request: QueryListingRequest): Promise<QueryListingResponse> {
      return queryService.listing(request);
    },
    listings(request: QueryListingsRequest): Promise<QueryListingsResponse> {
      return queryService.listings(request);
    },
    listingsBySeller(request: QueryListingsBySellerRequest): Promise<QueryListingsBySellerResponse> {
      return queryService.listingsBySeller(request);
    },
    inbox(request: QueryInboxRequest): Promise<QueryInboxResponse> {
      return queryService.inbox(request);
    },
    outbox(request: QueryOutboxRequest): Promise<QueryOutboxResponse> {
      return queryService.outbox(request);
    },
    receivePolicy(request: QueryReceivePolicyRequest): Promise<QueryReceivePolicyResponse> {
      return queryService.receivePolicy(request);
    },
    pendingClassOwner(request: QueryPendingClassOwnerRequest): Promise<QueryPendingClassOwnerResponse> {
      return queryService.pendingClassOwner(request);
    },
    hideRecord(request: QueryHideRecordRequest): Promise<QueryHideRecordResponse> {
      return queryService.hideRecord(request);
    },
    hideRecordsByTarget(request: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse> {
      return queryService.hideRecordsByTarget(request);
    },
    mediaProposals(request: QueryMediaProposalsRequest): Promise<QueryMediaProposalsResponse> {
      return queryService.mediaProposals(request);
    },
    publicMintQuote(request: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse> {
      return queryService.publicMintQuote(request);
    },
    edition(request: QueryEditionRequest): Promise<QueryEditionResponse> {
      return queryService.edition(request);
    },
    editions(request: QueryEditionsRequest): Promise<QueryEditionsResponse> {
      return queryService.editions(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    balancesByOwner(request: QueryBalancesByOwnerRequest): Promise<QueryBalancesByOwnerResponse> {
      return queryService.balancesByOwner(request);
    },
    editionHolders(request: QueryEditionHoldersRequest): Promise<QueryEditionHoldersResponse> {
      return queryService.editionHolders(request);
    },
    unitListing(request: QueryUnitListingRequest): Promise<QueryUnitListingResponse> {
      return queryService.unitListing(request);
    },
    unitListings(request: QueryUnitListingsRequest): Promise<QueryUnitListingsResponse> {
      return queryService.unitListings(request);
    },
    craftRecipes(request: QueryCraftRecipesRequest): Promise<QueryCraftRecipesResponse> {
      return queryService.craftRecipes(request);
    },
    rental(request: QueryRentalRequest): Promise<QueryRentalResponse> {
      return queryService.rental(request);
    },
    rentalOffer(request: QueryRentalOfferRequest): Promise<QueryRentalOfferResponse> {
      return queryService.rentalOffer(request);
    },
    rentalsByUser(request: QueryRentalsByUserRequest): Promise<QueryRentalsByUserResponse> {
      return queryService.rentalsByUser(request);
    },
    children(request: QueryChildrenRequest): Promise<QueryChildrenResponse> {
      return queryService.children(request);
    },
    harbergerQuote(request: QueryHarbergerQuoteRequest): Promise<QueryHarbergerQuoteResponse> {
      return queryService.harbergerQuote(request);
    },
    offer(request: QueryOfferRequest): Promise<QueryOfferResponse> {
      return queryService.offer(request);
    },
    offers(request: QueryOffersRequest): Promise<QueryOffersResponse> {
      return queryService.offers(request);
    },
    offersByBidder(request: QueryOffersByBidderRequest): Promise<QueryOffersByBidderResponse> {
      return queryService.offersByBidder(request);
    },
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
      return queryService.auction(request);
    },
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctions(request);
    },
    auctionsBySeller(request: QueryAuctionsBySellerRequest): Promise<QueryAuctionsBySellerResponse> {
      return queryService.auctionsBySeller(request);
    },
    rentalOffers(request: QueryRentalOffersRequest): Promise<QueryRentalOffersResponse> {
      return queryService.rentalOffers(request);
    }
  };
};