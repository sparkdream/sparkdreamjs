//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryClassesByOwnerRequest, QueryClassesByOwnerResponse, QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryTokensByOwnerRequest, QueryTokensByOwnerResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryListingRequest, QueryListingResponse, QueryListingsRequest, QueryListingsResponse, QueryListingsBySellerRequest, QueryListingsBySellerResponse, QueryInboxRequest, QueryInboxResponse, QueryOutboxRequest, QueryOutboxResponse, QueryReceivePolicyRequest, QueryReceivePolicyResponse, QueryPendingClassOwnerRequest, QueryPendingClassOwnerResponse, QueryHideRecordRequest, QueryHideRecordResponse, QueryHideRecordsByTargetRequest, QueryHideRecordsByTargetResponse, QueryPublicMintQuoteRequest, QueryPublicMintQuoteResponse } from "./query";
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
  /** PublicMintQuote prices a public mint. */
  publicMintQuote(request: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse>;
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
  /* PublicMintQuote prices a public mint. */
  publicMintQuote = async (request: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse> => {
    const data = QueryPublicMintQuoteRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Query", "PublicMintQuote", data);
    return promise.then(data => QueryPublicMintQuoteResponse.decode(new BinaryReader(data)));
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
    publicMintQuote(request: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse> {
      return queryService.publicMintQuote(request);
    }
  };
};