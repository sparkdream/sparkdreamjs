//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryBackendRequest, QueryBackendResponse, QueryBackendsRequest, QueryBackendsResponse, QueryApprovedOperatorsRequest, QueryApprovedOperatorsResponse, QueryApprovedScannersRequest, QueryApprovedScannersResponse, QueryOperatorStandingRequest, QueryOperatorStandingResponse, QueryRequestRequest, QueryRequestResponse, QueryRequestByHashRequest, QueryRequestByHashResponse, QueryRequestsByStatusRequest, QueryRequestsByStatusResponse, QueryRequestsByRequesterRequest, QueryRequestsByRequesterResponse, QueryRequestsByOperatorRequest, QueryRequestsByOperatorResponse, QueryRemovedHashRequest, QueryRemovedHashResponse, QueryQuoteFeeRequest, QueryQuoteFeeResponse, QueryRequestLocationRequest, QueryRequestLocationResponse } from "./query";
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
    const endpoint = `sparkdream/storage/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Backend returns one backend. */
  backend = async (params: QueryBackendRequest): Promise<QueryBackendResponse> => {
    const endpoint = `sparkdream/storage/v1/backend/${params.name}`;
    return await this.req.get<QueryBackendResponse>(endpoint);
  };
  /* Backends lists the backends. */
  backends = async (params: QueryBackendsRequest = {
    pagination: undefined
  }): Promise<QueryBackendsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/storage/v1/backends`;
    return await this.req.get<QueryBackendsResponse>(endpoint, options);
  };
  /* ApprovedOperators lists a backend's approved operators. An entry is marked stale when x/service no longer names its recorded controller. */
  approvedOperators = async (params: QueryApprovedOperatorsRequest): Promise<QueryApprovedOperatorsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/storage/v1/approved_operators/${params.backend}`;
    return await this.req.get<QueryApprovedOperatorsResponse>(endpoint, options);
  };
  /* ApprovedScanners lists the approved scanners. */
  approvedScanners = async (params: QueryApprovedScannersRequest = {
    pagination: undefined
  }): Promise<QueryApprovedScannersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/storage/v1/approved_scanners`;
    return await this.req.get<QueryApprovedScannersResponse>(endpoint, options);
  };
  /* OperatorStanding says whether an operator could claim now and what it has left in this window. */
  operatorStanding = async (params: QueryOperatorStandingRequest): Promise<QueryOperatorStandingResponse> => {
    const endpoint = `sparkdream/storage/v1/operator_standing/${params.backend}/${params.operator}`;
    return await this.req.get<QueryOperatorStandingResponse>(endpoint);
  };
  /* Request returns one request. */
  request = async (params: QueryRequestRequest): Promise<QueryRequestResponse> => {
    const endpoint = `sparkdream/storage/v1/request/${params.id}`;
    return await this.req.get<QueryRequestResponse>(endpoint);
  };
  /* RequestByHash returns the one live or settled request for a file. */
  requestByHash = async (params: QueryRequestByHashRequest): Promise<QueryRequestByHashResponse> => {
    const endpoint = `sparkdream/storage/v1/request_by_hash/${params.backend}/${params.sha256}`;
    return await this.req.get<QueryRequestByHashResponse>(endpoint);
  };
  /* RequestsByStatus lists a backend's requests in one status. */
  requestsByStatus = async (params: QueryRequestsByStatusRequest): Promise<QueryRequestsByStatusResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/storage/v1/requests_by_status/${params.backend}/${params.status}`;
    return await this.req.get<QueryRequestsByStatusResponse>(endpoint, options);
  };
  /* RequestsByRequester lists a member's requests, under every address the member has used. */
  requestsByRequester = async (params: QueryRequestsByRequesterRequest): Promise<QueryRequestsByRequesterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/storage/v1/requests_by_requester/${params.requester}`;
    return await this.req.get<QueryRequestsByRequesterResponse>(endpoint, options);
  };
  /* RequestsByOperator lists an operator's open claims and unsettled completions. */
  requestsByOperator = async (params: QueryRequestsByOperatorRequest): Promise<QueryRequestsByOperatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/storage/v1/requests_by_operator/${params.operator}`;
    return await this.req.get<QueryRequestsByOperatorResponse>(endpoint, options);
  };
  /* RemovedHash returns the flags on a hash. */
  removedHash = async (params: QueryRemovedHashRequest): Promise<QueryRemovedHashResponse> => {
    const endpoint = `sparkdream/storage/v1/removed_hash/${params.sha256}`;
    return await this.req.get<QueryRemovedHashResponse>(endpoint);
  };
  /* QuoteFee returns what a request would cost now. */
  quoteFee = async (params: QueryQuoteFeeRequest): Promise<QueryQuoteFeeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.contentType !== "undefined") {
      options.params.content_type = params.contentType;
    }
    if (typeof params?.sizeBytes !== "undefined") {
      options.params.size_bytes = params.sizeBytes;
    }
    const endpoint = `sparkdream/storage/v1/quote_fee/${params.backend}`;
    return await this.req.get<QueryQuoteFeeResponse>(endpoint, options);
  };
  /* RequestLocation returns a request's source addresses and locators even when its hash is flagged, for scanners and reviewers. */
  requestLocation = async (params: QueryRequestLocationRequest): Promise<QueryRequestLocationResponse> => {
    const endpoint = `sparkdream/storage/v1/request_location/${params.id}`;
    return await this.req.get<QueryRequestLocationResponse>(endpoint);
  };
}