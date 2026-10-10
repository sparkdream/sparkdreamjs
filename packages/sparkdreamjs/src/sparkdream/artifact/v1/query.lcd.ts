//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryClassesByOwnerRequest, QueryClassesByOwnerResponse, QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryTokensByOwnerRequest, QueryTokensByOwnerResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryListingRequest, QueryListingResponse, QueryListingsRequest, QueryListingsResponse, QueryListingsBySellerRequest, QueryListingsBySellerResponse, QueryInboxRequest, QueryInboxResponse, QueryOutboxRequest, QueryOutboxResponse, QueryReceivePolicyRequest, QueryReceivePolicyResponse, QueryPendingClassOwnerRequest, QueryPendingClassOwnerResponse, QueryHideRecordRequest, QueryHideRecordResponse, QueryHideRecordsByTargetRequest, QueryHideRecordsByTargetResponse, QueryPublicMintQuoteRequest, QueryPublicMintQuoteResponse } from "./query";
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
  /* PublicMintQuote prices a public mint. */
  publicMintQuote = async (params: QueryPublicMintQuoteRequest): Promise<QueryPublicMintQuoteResponse> => {
    const endpoint = `sparkdream/artifact/v1/public_mint_quote/${params.classId}/${params.buyer}/${params.quantity}`;
    return await this.req.get<QueryPublicMintQuoteResponse>(endpoint);
  };
}