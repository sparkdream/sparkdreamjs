//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCollectionRequest, QueryCollectionResponse, QueryCollectionsByOwnerRequest, QueryCollectionsByOwnerResponse, QueryPublicCollectionsRequest, QueryPublicCollectionsResponse, QueryPublicCollectionsByTypeRequest, QueryPublicCollectionsByTypeResponse, QueryCollectionsByCollaboratorRequest, QueryCollectionsByCollaboratorResponse, QueryItemRequest, QueryItemResponse, QueryItemsRequest, QueryItemsResponse, QueryItemsByOwnerRequest, QueryItemsByOwnerResponse, QueryCollaboratorsRequest, QueryCollaboratorsResponse, QueryCuratorRequest, QueryCuratorResponse, QueryActiveCuratorsRequest, QueryActiveCuratorsResponse, QueryCurationSummaryRequest, QueryCurationSummaryResponse, QueryCurationReviewsRequest, QueryCurationReviewsResponse, QueryCurationReviewsByCuratorRequest, QueryCurationReviewsByCuratorResponse, QuerySponsorshipRequestRequest, QuerySponsorshipRequestResponse, QuerySponsorshipRequestsRequest, QuerySponsorshipRequestsResponse, QueryContentFlagRequest, QueryContentFlagResponse, QueryFlaggedContentRequest, QueryFlaggedContentResponse, QueryHideRecordRequest, QueryHideRecordResponse, QueryHideRecordsByTargetRequest, QueryHideRecordsByTargetResponse, QueryPendingCollectionsRequest, QueryPendingCollectionsResponse, QueryEndorsementRequest, QueryEndorsementResponse, QueryCollectionsByContentRequest, QueryCollectionsByContentResponse, QueryCollectionConvictionRequest, QueryCollectionConvictionResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  collectionsByOwner(request: QueryCollectionsByOwnerRequest): Promise<QueryCollectionsByOwnerResponse>;
  publicCollections(request?: QueryPublicCollectionsRequest): Promise<QueryPublicCollectionsResponse>;
  publicCollectionsByType(request: QueryPublicCollectionsByTypeRequest): Promise<QueryPublicCollectionsByTypeResponse>;
  collectionsByCollaborator(request: QueryCollectionsByCollaboratorRequest): Promise<QueryCollectionsByCollaboratorResponse>;
  item(request: QueryItemRequest): Promise<QueryItemResponse>;
  items(request: QueryItemsRequest): Promise<QueryItemsResponse>;
  itemsByOwner(request: QueryItemsByOwnerRequest): Promise<QueryItemsByOwnerResponse>;
  collaborators(request: QueryCollaboratorsRequest): Promise<QueryCollaboratorsResponse>;
  curator(request: QueryCuratorRequest): Promise<QueryCuratorResponse>;
  activeCurators(request?: QueryActiveCuratorsRequest): Promise<QueryActiveCuratorsResponse>;
  curationSummary(request: QueryCurationSummaryRequest): Promise<QueryCurationSummaryResponse>;
  curationReviews(request: QueryCurationReviewsRequest): Promise<QueryCurationReviewsResponse>;
  curationReviewsByCurator(request: QueryCurationReviewsByCuratorRequest): Promise<QueryCurationReviewsByCuratorResponse>;
  sponsorshipRequest(request: QuerySponsorshipRequestRequest): Promise<QuerySponsorshipRequestResponse>;
  sponsorshipRequests(request?: QuerySponsorshipRequestsRequest): Promise<QuerySponsorshipRequestsResponse>;
  /** ContentFlag Queries a list of ContentFlag items. */
  contentFlag(request: QueryContentFlagRequest): Promise<QueryContentFlagResponse>;
  /** FlaggedContent Queries a list of FlaggedContent items. */
  flaggedContent(request?: QueryFlaggedContentRequest): Promise<QueryFlaggedContentResponse>;
  /** HideRecord Queries a list of HideRecord items. */
  hideRecord(request: QueryHideRecordRequest): Promise<QueryHideRecordResponse>;
  /** HideRecordsByTarget Queries a list of HideRecordsByTarget items. */
  hideRecordsByTarget(request: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse>;
  /** PendingCollections Queries a list of PendingCollections items. */
  pendingCollections(request?: QueryPendingCollectionsRequest): Promise<QueryPendingCollectionsResponse>;
  /** Endorsement Queries a list of Endorsement items. */
  endorsement(request: QueryEndorsementRequest): Promise<QueryEndorsementResponse>;
  /**
   * CollectionsByContent returns collections that reference a specific on-chain entity
   * (e.g., a blog post or forum thread) via OnChainReference items.
   */
  collectionsByContent(request: QueryCollectionsByContentRequest): Promise<QueryCollectionsByContentResponse>;
  /**
   * CollectionConviction returns the current conviction score, stake count, total staked,
   * and author bond for a collection (delegates to x/rep).
   */
  collectionConviction(request: QueryCollectionConvictionRequest): Promise<QueryCollectionConvictionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Collection */
  collection = async (request: QueryCollectionRequest): Promise<QueryCollectionResponse> => {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Collection", data);
    return promise.then(data => QueryCollectionResponse.decode(new BinaryReader(data)));
  };
  /* CollectionsByOwner */
  collectionsByOwner = async (request: QueryCollectionsByOwnerRequest): Promise<QueryCollectionsByOwnerResponse> => {
    const data = QueryCollectionsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CollectionsByOwner", data);
    return promise.then(data => QueryCollectionsByOwnerResponse.decode(new BinaryReader(data)));
  };
  /* PublicCollections */
  publicCollections = async (request: QueryPublicCollectionsRequest = {
    pagination: undefined
  }): Promise<QueryPublicCollectionsResponse> => {
    const data = QueryPublicCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "PublicCollections", data);
    return promise.then(data => QueryPublicCollectionsResponse.decode(new BinaryReader(data)));
  };
  /* PublicCollectionsByType */
  publicCollectionsByType = async (request: QueryPublicCollectionsByTypeRequest): Promise<QueryPublicCollectionsByTypeResponse> => {
    const data = QueryPublicCollectionsByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "PublicCollectionsByType", data);
    return promise.then(data => QueryPublicCollectionsByTypeResponse.decode(new BinaryReader(data)));
  };
  /* CollectionsByCollaborator */
  collectionsByCollaborator = async (request: QueryCollectionsByCollaboratorRequest): Promise<QueryCollectionsByCollaboratorResponse> => {
    const data = QueryCollectionsByCollaboratorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CollectionsByCollaborator", data);
    return promise.then(data => QueryCollectionsByCollaboratorResponse.decode(new BinaryReader(data)));
  };
  /* Item */
  item = async (request: QueryItemRequest): Promise<QueryItemResponse> => {
    const data = QueryItemRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Item", data);
    return promise.then(data => QueryItemResponse.decode(new BinaryReader(data)));
  };
  /* Items */
  items = async (request: QueryItemsRequest): Promise<QueryItemsResponse> => {
    const data = QueryItemsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Items", data);
    return promise.then(data => QueryItemsResponse.decode(new BinaryReader(data)));
  };
  /* ItemsByOwner */
  itemsByOwner = async (request: QueryItemsByOwnerRequest): Promise<QueryItemsByOwnerResponse> => {
    const data = QueryItemsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "ItemsByOwner", data);
    return promise.then(data => QueryItemsByOwnerResponse.decode(new BinaryReader(data)));
  };
  /* Collaborators */
  collaborators = async (request: QueryCollaboratorsRequest): Promise<QueryCollaboratorsResponse> => {
    const data = QueryCollaboratorsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Collaborators", data);
    return promise.then(data => QueryCollaboratorsResponse.decode(new BinaryReader(data)));
  };
  /* Curator */
  curator = async (request: QueryCuratorRequest): Promise<QueryCuratorResponse> => {
    const data = QueryCuratorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Curator", data);
    return promise.then(data => QueryCuratorResponse.decode(new BinaryReader(data)));
  };
  /* ActiveCurators */
  activeCurators = async (request: QueryActiveCuratorsRequest = {
    pagination: undefined
  }): Promise<QueryActiveCuratorsResponse> => {
    const data = QueryActiveCuratorsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "ActiveCurators", data);
    return promise.then(data => QueryActiveCuratorsResponse.decode(new BinaryReader(data)));
  };
  /* CurationSummary */
  curationSummary = async (request: QueryCurationSummaryRequest): Promise<QueryCurationSummaryResponse> => {
    const data = QueryCurationSummaryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CurationSummary", data);
    return promise.then(data => QueryCurationSummaryResponse.decode(new BinaryReader(data)));
  };
  /* CurationReviews */
  curationReviews = async (request: QueryCurationReviewsRequest): Promise<QueryCurationReviewsResponse> => {
    const data = QueryCurationReviewsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CurationReviews", data);
    return promise.then(data => QueryCurationReviewsResponse.decode(new BinaryReader(data)));
  };
  /* CurationReviewsByCurator */
  curationReviewsByCurator = async (request: QueryCurationReviewsByCuratorRequest): Promise<QueryCurationReviewsByCuratorResponse> => {
    const data = QueryCurationReviewsByCuratorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CurationReviewsByCurator", data);
    return promise.then(data => QueryCurationReviewsByCuratorResponse.decode(new BinaryReader(data)));
  };
  /* SponsorshipRequest */
  sponsorshipRequest = async (request: QuerySponsorshipRequestRequest): Promise<QuerySponsorshipRequestResponse> => {
    const data = QuerySponsorshipRequestRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "SponsorshipRequest", data);
    return promise.then(data => QuerySponsorshipRequestResponse.decode(new BinaryReader(data)));
  };
  /* SponsorshipRequests */
  sponsorshipRequests = async (request: QuerySponsorshipRequestsRequest = {
    pagination: undefined
  }): Promise<QuerySponsorshipRequestsResponse> => {
    const data = QuerySponsorshipRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "SponsorshipRequests", data);
    return promise.then(data => QuerySponsorshipRequestsResponse.decode(new BinaryReader(data)));
  };
  /* ContentFlag Queries a list of ContentFlag items. */
  contentFlag = async (request: QueryContentFlagRequest): Promise<QueryContentFlagResponse> => {
    const data = QueryContentFlagRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "ContentFlag", data);
    return promise.then(data => QueryContentFlagResponse.decode(new BinaryReader(data)));
  };
  /* FlaggedContent Queries a list of FlaggedContent items. */
  flaggedContent = async (request: QueryFlaggedContentRequest = {
    pagination: undefined
  }): Promise<QueryFlaggedContentResponse> => {
    const data = QueryFlaggedContentRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "FlaggedContent", data);
    return promise.then(data => QueryFlaggedContentResponse.decode(new BinaryReader(data)));
  };
  /* HideRecord Queries a list of HideRecord items. */
  hideRecord = async (request: QueryHideRecordRequest): Promise<QueryHideRecordResponse> => {
    const data = QueryHideRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "HideRecord", data);
    return promise.then(data => QueryHideRecordResponse.decode(new BinaryReader(data)));
  };
  /* HideRecordsByTarget Queries a list of HideRecordsByTarget items. */
  hideRecordsByTarget = async (request: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse> => {
    const data = QueryHideRecordsByTargetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "HideRecordsByTarget", data);
    return promise.then(data => QueryHideRecordsByTargetResponse.decode(new BinaryReader(data)));
  };
  /* PendingCollections Queries a list of PendingCollections items. */
  pendingCollections = async (request: QueryPendingCollectionsRequest = {
    pagination: undefined
  }): Promise<QueryPendingCollectionsResponse> => {
    const data = QueryPendingCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "PendingCollections", data);
    return promise.then(data => QueryPendingCollectionsResponse.decode(new BinaryReader(data)));
  };
  /* Endorsement Queries a list of Endorsement items. */
  endorsement = async (request: QueryEndorsementRequest): Promise<QueryEndorsementResponse> => {
    const data = QueryEndorsementRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "Endorsement", data);
    return promise.then(data => QueryEndorsementResponse.decode(new BinaryReader(data)));
  };
  /* CollectionsByContent returns collections that reference a specific on-chain entity
   (e.g., a blog post or forum thread) via OnChainReference items. */
  collectionsByContent = async (request: QueryCollectionsByContentRequest): Promise<QueryCollectionsByContentResponse> => {
    const data = QueryCollectionsByContentRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CollectionsByContent", data);
    return promise.then(data => QueryCollectionsByContentResponse.decode(new BinaryReader(data)));
  };
  /* CollectionConviction returns the current conviction score, stake count, total staked,
   and author bond for a collection (delegates to x/rep). */
  collectionConviction = async (request: QueryCollectionConvictionRequest): Promise<QueryCollectionConvictionResponse> => {
    const data = QueryCollectionConvictionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Query", "CollectionConviction", data);
    return promise.then(data => QueryCollectionConvictionResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
      return queryService.collection(request);
    },
    collectionsByOwner(request: QueryCollectionsByOwnerRequest): Promise<QueryCollectionsByOwnerResponse> {
      return queryService.collectionsByOwner(request);
    },
    publicCollections(request?: QueryPublicCollectionsRequest): Promise<QueryPublicCollectionsResponse> {
      return queryService.publicCollections(request);
    },
    publicCollectionsByType(request: QueryPublicCollectionsByTypeRequest): Promise<QueryPublicCollectionsByTypeResponse> {
      return queryService.publicCollectionsByType(request);
    },
    collectionsByCollaborator(request: QueryCollectionsByCollaboratorRequest): Promise<QueryCollectionsByCollaboratorResponse> {
      return queryService.collectionsByCollaborator(request);
    },
    item(request: QueryItemRequest): Promise<QueryItemResponse> {
      return queryService.item(request);
    },
    items(request: QueryItemsRequest): Promise<QueryItemsResponse> {
      return queryService.items(request);
    },
    itemsByOwner(request: QueryItemsByOwnerRequest): Promise<QueryItemsByOwnerResponse> {
      return queryService.itemsByOwner(request);
    },
    collaborators(request: QueryCollaboratorsRequest): Promise<QueryCollaboratorsResponse> {
      return queryService.collaborators(request);
    },
    curator(request: QueryCuratorRequest): Promise<QueryCuratorResponse> {
      return queryService.curator(request);
    },
    activeCurators(request?: QueryActiveCuratorsRequest): Promise<QueryActiveCuratorsResponse> {
      return queryService.activeCurators(request);
    },
    curationSummary(request: QueryCurationSummaryRequest): Promise<QueryCurationSummaryResponse> {
      return queryService.curationSummary(request);
    },
    curationReviews(request: QueryCurationReviewsRequest): Promise<QueryCurationReviewsResponse> {
      return queryService.curationReviews(request);
    },
    curationReviewsByCurator(request: QueryCurationReviewsByCuratorRequest): Promise<QueryCurationReviewsByCuratorResponse> {
      return queryService.curationReviewsByCurator(request);
    },
    sponsorshipRequest(request: QuerySponsorshipRequestRequest): Promise<QuerySponsorshipRequestResponse> {
      return queryService.sponsorshipRequest(request);
    },
    sponsorshipRequests(request?: QuerySponsorshipRequestsRequest): Promise<QuerySponsorshipRequestsResponse> {
      return queryService.sponsorshipRequests(request);
    },
    contentFlag(request: QueryContentFlagRequest): Promise<QueryContentFlagResponse> {
      return queryService.contentFlag(request);
    },
    flaggedContent(request?: QueryFlaggedContentRequest): Promise<QueryFlaggedContentResponse> {
      return queryService.flaggedContent(request);
    },
    hideRecord(request: QueryHideRecordRequest): Promise<QueryHideRecordResponse> {
      return queryService.hideRecord(request);
    },
    hideRecordsByTarget(request: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse> {
      return queryService.hideRecordsByTarget(request);
    },
    pendingCollections(request?: QueryPendingCollectionsRequest): Promise<QueryPendingCollectionsResponse> {
      return queryService.pendingCollections(request);
    },
    endorsement(request: QueryEndorsementRequest): Promise<QueryEndorsementResponse> {
      return queryService.endorsement(request);
    },
    collectionsByContent(request: QueryCollectionsByContentRequest): Promise<QueryCollectionsByContentResponse> {
      return queryService.collectionsByContent(request);
    },
    collectionConviction(request: QueryCollectionConvictionRequest): Promise<QueryCollectionConvictionResponse> {
      return queryService.collectionConviction(request);
    }
  };
};