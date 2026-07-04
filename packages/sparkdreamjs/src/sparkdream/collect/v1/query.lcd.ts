//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryCollectionRequest, QueryCollectionResponse, QueryCollectionsByOwnerRequest, QueryCollectionsByOwnerResponse, QueryPublicCollectionsRequest, QueryPublicCollectionsResponse, QueryPublicCollectionsByTypeRequest, QueryPublicCollectionsByTypeResponse, QueryCollectionsByCollaboratorRequest, QueryCollectionsByCollaboratorResponse, QueryItemRequest, QueryItemResponse, QueryItemsRequest, QueryItemsResponse, QueryItemsByOwnerRequest, QueryItemsByOwnerResponse, QueryCollaboratorsRequest, QueryCollaboratorsResponse, QueryCuratorActivityRequest, QueryCuratorActivityResponse, QueryCurationSummaryRequest, QueryCurationSummaryResponse, QueryCurationReviewsRequest, QueryCurationReviewsResponse, QueryCurationReviewsByCuratorRequest, QueryCurationReviewsByCuratorResponse, QuerySponsorshipRequestRequest, QuerySponsorshipRequestResponse, QuerySponsorshipRequestsRequest, QuerySponsorshipRequestsResponse, QueryContentFlagRequest, QueryContentFlagResponse, QueryFlaggedContentRequest, QueryFlaggedContentResponse, QueryHideRecordRequest, QueryHideRecordResponse, QueryHideRecordsByTargetRequest, QueryHideRecordsByTargetResponse, QueryHideRecordsBySentinelRequest, QueryHideRecordsBySentinelResponse, QueryPendingCollectionsRequest, QueryPendingCollectionsResponse, QueryEndorsementRequest, QueryEndorsementResponse, QueryCollectionsByContentRequest, QueryCollectionsByContentResponse, QueryCollectionConvictionRequest, QueryCollectionConvictionResponse, QueryListCollectionsByTagRequest, QueryListCollectionsByTagResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/collect/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Collection */
  collection = async (params: QueryCollectionRequest): Promise<QueryCollectionResponse> => {
    const endpoint = `sparkdream/collect/v1/collection/${params.id}`;
    return await this.req.get<QueryCollectionResponse>(endpoint);
  };
  /* CollectionsByOwner */
  collectionsByOwner = async (params: QueryCollectionsByOwnerRequest): Promise<QueryCollectionsByOwnerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/collections_by_owner/${params.owner}`;
    return await this.req.get<QueryCollectionsByOwnerResponse>(endpoint, options);
  };
  /* PublicCollections */
  publicCollections = async (params: QueryPublicCollectionsRequest = {
    pagination: undefined
  }): Promise<QueryPublicCollectionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/public_collections`;
    return await this.req.get<QueryPublicCollectionsResponse>(endpoint, options);
  };
  /* PublicCollectionsByType */
  publicCollectionsByType = async (params: QueryPublicCollectionsByTypeRequest): Promise<QueryPublicCollectionsByTypeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/public_collections_by_type/${params.collectionType}`;
    return await this.req.get<QueryPublicCollectionsByTypeResponse>(endpoint, options);
  };
  /* CollectionsByCollaborator */
  collectionsByCollaborator = async (params: QueryCollectionsByCollaboratorRequest): Promise<QueryCollectionsByCollaboratorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/collections_by_collaborator/${params.address}`;
    return await this.req.get<QueryCollectionsByCollaboratorResponse>(endpoint, options);
  };
  /* Item */
  item = async (params: QueryItemRequest): Promise<QueryItemResponse> => {
    const endpoint = `sparkdream/collect/v1/item/${params.id}`;
    return await this.req.get<QueryItemResponse>(endpoint);
  };
  /* Items */
  items = async (params: QueryItemsRequest): Promise<QueryItemsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/items/${params.collectionId}`;
    return await this.req.get<QueryItemsResponse>(endpoint, options);
  };
  /* ItemsByOwner */
  itemsByOwner = async (params: QueryItemsByOwnerRequest): Promise<QueryItemsByOwnerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/items_by_owner/${params.owner}`;
    return await this.req.get<QueryItemsByOwnerResponse>(endpoint, options);
  };
  /* Collaborators */
  collaborators = async (params: QueryCollaboratorsRequest): Promise<QueryCollaboratorsResponse> => {
    const endpoint = `sparkdream/collect/v1/collaborators/${params.collectionId}`;
    return await this.req.get<QueryCollaboratorsResponse>(endpoint);
  };
  /* CuratorActivity returns collect-specific per-curator counters (reviews,
   challenged, upheld, overturned). The generic bond/status record lives in
   x/rep under BondedRole(ROLE_TYPE_COLLECT_CURATOR, addr). */
  curatorActivity = async (params: QueryCuratorActivityRequest): Promise<QueryCuratorActivityResponse> => {
    const endpoint = `sparkdream/collect/v1/curator_activity/${params.address}`;
    return await this.req.get<QueryCuratorActivityResponse>(endpoint);
  };
  /* CurationSummary */
  curationSummary = async (params: QueryCurationSummaryRequest): Promise<QueryCurationSummaryResponse> => {
    const endpoint = `sparkdream/collect/v1/curation_summary/${params.collectionId}`;
    return await this.req.get<QueryCurationSummaryResponse>(endpoint);
  };
  /* CurationReviews */
  curationReviews = async (params: QueryCurationReviewsRequest): Promise<QueryCurationReviewsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/curation_reviews/${params.collectionId}`;
    return await this.req.get<QueryCurationReviewsResponse>(endpoint, options);
  };
  /* CurationReviewsByCurator */
  curationReviewsByCurator = async (params: QueryCurationReviewsByCuratorRequest): Promise<QueryCurationReviewsByCuratorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/curation_reviews_by_curator/${params.curator}`;
    return await this.req.get<QueryCurationReviewsByCuratorResponse>(endpoint, options);
  };
  /* SponsorshipRequest */
  sponsorshipRequest = async (params: QuerySponsorshipRequestRequest): Promise<QuerySponsorshipRequestResponse> => {
    const endpoint = `sparkdream/collect/v1/sponsorship_request/${params.collectionId}`;
    return await this.req.get<QuerySponsorshipRequestResponse>(endpoint);
  };
  /* SponsorshipRequests */
  sponsorshipRequests = async (params: QuerySponsorshipRequestsRequest = {
    pagination: undefined
  }): Promise<QuerySponsorshipRequestsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/sponsorship_requests`;
    return await this.req.get<QuerySponsorshipRequestsResponse>(endpoint, options);
  };
  /* ContentFlag Queries a list of ContentFlag items. */
  contentFlag = async (params: QueryContentFlagRequest): Promise<QueryContentFlagResponse> => {
    const endpoint = `sparkdream/collect/v1/content_flag/${params.targetId}/${params.targetType}`;
    return await this.req.get<QueryContentFlagResponse>(endpoint);
  };
  /* FlaggedContent Queries a list of FlaggedContent items. */
  flaggedContent = async (params: QueryFlaggedContentRequest = {
    pagination: undefined
  }): Promise<QueryFlaggedContentResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/flagged_content`;
    return await this.req.get<QueryFlaggedContentResponse>(endpoint, options);
  };
  /* HideRecord Queries a list of HideRecord items. */
  hideRecord = async (params: QueryHideRecordRequest): Promise<QueryHideRecordResponse> => {
    const endpoint = `sparkdream/collect/v1/hide_record/${params.id}`;
    return await this.req.get<QueryHideRecordResponse>(endpoint);
  };
  /* HideRecordsByTarget Queries a list of HideRecordsByTarget items. */
  hideRecordsByTarget = async (params: QueryHideRecordsByTargetRequest): Promise<QueryHideRecordsByTargetResponse> => {
    const endpoint = `sparkdream/collect/v1/hide_records_by_target/${params.targetId}/${params.targetType}`;
    return await this.req.get<QueryHideRecordsByTargetResponse>(endpoint);
  };
  /* HideRecordsBySentinel Queries hide records created by a given sentinel. */
  hideRecordsBySentinel = async (params: QueryHideRecordsBySentinelRequest): Promise<QueryHideRecordsBySentinelResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/hide_records_by_sentinel/${params.sentinel}`;
    return await this.req.get<QueryHideRecordsBySentinelResponse>(endpoint, options);
  };
  /* PendingCollections Queries a list of PendingCollections items. */
  pendingCollections = async (params: QueryPendingCollectionsRequest = {
    pagination: undefined
  }): Promise<QueryPendingCollectionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/pending_collections`;
    return await this.req.get<QueryPendingCollectionsResponse>(endpoint, options);
  };
  /* Endorsement Queries a list of Endorsement items. */
  endorsement = async (params: QueryEndorsementRequest): Promise<QueryEndorsementResponse> => {
    const endpoint = `sparkdream/collect/v1/endorsement/${params.collectionId}`;
    return await this.req.get<QueryEndorsementResponse>(endpoint);
  };
  /* CollectionsByContent returns collections that reference a specific on-chain entity
   (e.g., a blog post or forum thread) via OnChainReference items. */
  collectionsByContent = async (params: QueryCollectionsByContentRequest): Promise<QueryCollectionsByContentResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/collections_by_content/${params.module}/${params.entityType}/${params.entityId}`;
    return await this.req.get<QueryCollectionsByContentResponse>(endpoint, options);
  };
  /* CollectionConviction returns the current conviction score, stake count, total staked,
   and author bond for a collection (delegates to x/rep). */
  collectionConviction = async (params: QueryCollectionConvictionRequest): Promise<QueryCollectionConvictionResponse> => {
    const endpoint = `sparkdream/collect/v1/collection_conviction/${params.collectionId}`;
    return await this.req.get<QueryCollectionConvictionResponse>(endpoint);
  };
  /* ListCollectionsByTag returns paginated collections that carry a given tag. */
  listCollectionsByTag = async (params: QueryListCollectionsByTagRequest): Promise<QueryListCollectionsByTagResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/collect/v1/list_collections_by_tag/${params.tag}`;
    return await this.req.get<QueryListCollectionsByTagResponse>(endpoint, options);
  };
}