//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBackendRequest, QueryBackendResponse, QueryBackendsRequest, QueryBackendsResponse, QueryApprovedOperatorsRequest, QueryApprovedOperatorsResponse, QueryApprovedScannersRequest, QueryApprovedScannersResponse, QueryOperatorStandingRequest, QueryOperatorStandingResponse, QueryRequestRequest, QueryRequestResponse, QueryRequestByHashRequest, QueryRequestByHashResponse, QueryRequestsByStatusRequest, QueryRequestsByStatusResponse, QueryRequestsByRequesterRequest, QueryRequestsByRequesterResponse, QueryRequestsByOperatorRequest, QueryRequestsByOperatorResponse, QueryRemovedHashRequest, QueryRemovedHashResponse, QueryQuoteFeeRequest, QueryQuoteFeeResponse, QueryRequestLocationRequest, QueryRequestLocationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Backend returns one backend. */
  backend(request: QueryBackendRequest): Promise<QueryBackendResponse>;
  /** Backends lists the backends. */
  backends(request?: QueryBackendsRequest): Promise<QueryBackendsResponse>;
  /** ApprovedOperators lists a backend's approved operators. An entry is marked stale when x/service no longer names its recorded controller. */
  approvedOperators(request: QueryApprovedOperatorsRequest): Promise<QueryApprovedOperatorsResponse>;
  /** ApprovedScanners lists the approved scanners. */
  approvedScanners(request?: QueryApprovedScannersRequest): Promise<QueryApprovedScannersResponse>;
  /** OperatorStanding says whether an operator could claim now and what it has left in this window. */
  operatorStanding(request: QueryOperatorStandingRequest): Promise<QueryOperatorStandingResponse>;
  /** Request returns one request. */
  request(request: QueryRequestRequest): Promise<QueryRequestResponse>;
  /** RequestByHash returns the one live or settled request for a file. */
  requestByHash(request: QueryRequestByHashRequest): Promise<QueryRequestByHashResponse>;
  /** RequestsByStatus lists a backend's requests in one status. */
  requestsByStatus(request: QueryRequestsByStatusRequest): Promise<QueryRequestsByStatusResponse>;
  /** RequestsByRequester lists a member's requests, under every address the member has used. */
  requestsByRequester(request: QueryRequestsByRequesterRequest): Promise<QueryRequestsByRequesterResponse>;
  /** RequestsByOperator lists an operator's open claims and unsettled completions. */
  requestsByOperator(request: QueryRequestsByOperatorRequest): Promise<QueryRequestsByOperatorResponse>;
  /** RemovedHash returns the flags on a hash. */
  removedHash(request: QueryRemovedHashRequest): Promise<QueryRemovedHashResponse>;
  /** QuoteFee returns what a request would cost now. */
  quoteFee(request: QueryQuoteFeeRequest): Promise<QueryQuoteFeeResponse>;
  /** RequestLocation returns a request's source addresses and locators even when its hash is flagged, for scanners and reviewers. */
  requestLocation(request: QueryRequestLocationRequest): Promise<QueryRequestLocationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Backend returns one backend. */
  backend = async (request: QueryBackendRequest): Promise<QueryBackendResponse> => {
    const data = QueryBackendRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "Backend", data);
    return promise.then(data => QueryBackendResponse.decode(new BinaryReader(data)));
  };
  /* Backends lists the backends. */
  backends = async (request: QueryBackendsRequest = {
    pagination: undefined
  }): Promise<QueryBackendsResponse> => {
    const data = QueryBackendsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "Backends", data);
    return promise.then(data => QueryBackendsResponse.decode(new BinaryReader(data)));
  };
  /* ApprovedOperators lists a backend's approved operators. An entry is marked stale when x/service no longer names its recorded controller. */
  approvedOperators = async (request: QueryApprovedOperatorsRequest): Promise<QueryApprovedOperatorsResponse> => {
    const data = QueryApprovedOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "ApprovedOperators", data);
    return promise.then(data => QueryApprovedOperatorsResponse.decode(new BinaryReader(data)));
  };
  /* ApprovedScanners lists the approved scanners. */
  approvedScanners = async (request: QueryApprovedScannersRequest = {
    pagination: undefined
  }): Promise<QueryApprovedScannersResponse> => {
    const data = QueryApprovedScannersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "ApprovedScanners", data);
    return promise.then(data => QueryApprovedScannersResponse.decode(new BinaryReader(data)));
  };
  /* OperatorStanding says whether an operator could claim now and what it has left in this window. */
  operatorStanding = async (request: QueryOperatorStandingRequest): Promise<QueryOperatorStandingResponse> => {
    const data = QueryOperatorStandingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "OperatorStanding", data);
    return promise.then(data => QueryOperatorStandingResponse.decode(new BinaryReader(data)));
  };
  /* Request returns one request. */
  request = async (request: QueryRequestRequest): Promise<QueryRequestResponse> => {
    const data = QueryRequestRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "Request", data);
    return promise.then(data => QueryRequestResponse.decode(new BinaryReader(data)));
  };
  /* RequestByHash returns the one live or settled request for a file. */
  requestByHash = async (request: QueryRequestByHashRequest): Promise<QueryRequestByHashResponse> => {
    const data = QueryRequestByHashRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "RequestByHash", data);
    return promise.then(data => QueryRequestByHashResponse.decode(new BinaryReader(data)));
  };
  /* RequestsByStatus lists a backend's requests in one status. */
  requestsByStatus = async (request: QueryRequestsByStatusRequest): Promise<QueryRequestsByStatusResponse> => {
    const data = QueryRequestsByStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "RequestsByStatus", data);
    return promise.then(data => QueryRequestsByStatusResponse.decode(new BinaryReader(data)));
  };
  /* RequestsByRequester lists a member's requests, under every address the member has used. */
  requestsByRequester = async (request: QueryRequestsByRequesterRequest): Promise<QueryRequestsByRequesterResponse> => {
    const data = QueryRequestsByRequesterRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "RequestsByRequester", data);
    return promise.then(data => QueryRequestsByRequesterResponse.decode(new BinaryReader(data)));
  };
  /* RequestsByOperator lists an operator's open claims and unsettled completions. */
  requestsByOperator = async (request: QueryRequestsByOperatorRequest): Promise<QueryRequestsByOperatorResponse> => {
    const data = QueryRequestsByOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "RequestsByOperator", data);
    return promise.then(data => QueryRequestsByOperatorResponse.decode(new BinaryReader(data)));
  };
  /* RemovedHash returns the flags on a hash. */
  removedHash = async (request: QueryRemovedHashRequest): Promise<QueryRemovedHashResponse> => {
    const data = QueryRemovedHashRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "RemovedHash", data);
    return promise.then(data => QueryRemovedHashResponse.decode(new BinaryReader(data)));
  };
  /* QuoteFee returns what a request would cost now. */
  quoteFee = async (request: QueryQuoteFeeRequest): Promise<QueryQuoteFeeResponse> => {
    const data = QueryQuoteFeeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "QuoteFee", data);
    return promise.then(data => QueryQuoteFeeResponse.decode(new BinaryReader(data)));
  };
  /* RequestLocation returns a request's source addresses and locators even when its hash is flagged, for scanners and reviewers. */
  requestLocation = async (request: QueryRequestLocationRequest): Promise<QueryRequestLocationResponse> => {
    const data = QueryRequestLocationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Query", "RequestLocation", data);
    return promise.then(data => QueryRequestLocationResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    backend(request: QueryBackendRequest): Promise<QueryBackendResponse> {
      return queryService.backend(request);
    },
    backends(request?: QueryBackendsRequest): Promise<QueryBackendsResponse> {
      return queryService.backends(request);
    },
    approvedOperators(request: QueryApprovedOperatorsRequest): Promise<QueryApprovedOperatorsResponse> {
      return queryService.approvedOperators(request);
    },
    approvedScanners(request?: QueryApprovedScannersRequest): Promise<QueryApprovedScannersResponse> {
      return queryService.approvedScanners(request);
    },
    operatorStanding(request: QueryOperatorStandingRequest): Promise<QueryOperatorStandingResponse> {
      return queryService.operatorStanding(request);
    },
    request(request: QueryRequestRequest): Promise<QueryRequestResponse> {
      return queryService.request(request);
    },
    requestByHash(request: QueryRequestByHashRequest): Promise<QueryRequestByHashResponse> {
      return queryService.requestByHash(request);
    },
    requestsByStatus(request: QueryRequestsByStatusRequest): Promise<QueryRequestsByStatusResponse> {
      return queryService.requestsByStatus(request);
    },
    requestsByRequester(request: QueryRequestsByRequesterRequest): Promise<QueryRequestsByRequesterResponse> {
      return queryService.requestsByRequester(request);
    },
    requestsByOperator(request: QueryRequestsByOperatorRequest): Promise<QueryRequestsByOperatorResponse> {
      return queryService.requestsByOperator(request);
    },
    removedHash(request: QueryRemovedHashRequest): Promise<QueryRemovedHashResponse> {
      return queryService.removedHash(request);
    },
    quoteFee(request: QueryQuoteFeeRequest): Promise<QueryQuoteFeeResponse> {
      return queryService.quoteFee(request);
    },
    requestLocation(request: QueryRequestLocationRequest): Promise<QueryRequestLocationResponse> {
      return queryService.requestLocation(request);
    }
  };
};