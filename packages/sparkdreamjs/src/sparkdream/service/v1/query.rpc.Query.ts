//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryOperatorRequest, QueryOperatorResponse, QueryServiceTypeRequest, QueryServiceTypeResponse, QueryServiceTypesRequest, QueryServiceTypesResponse, QueryOperatorsRequest, QueryOperatorsResponse, QueryOperatorsByControllerRequest, QueryOperatorsByControllerResponse, QueryOperatorsByServiceTypeRequest, QueryOperatorsByServiceTypeResponse, QueryReportRequest, QueryReportResponse, QueryReportsByOperatorRequest, QueryReportsByOperatorResponse, QueryOperatorReputationSnapshotRequest, QueryOperatorReputationSnapshotResponse } from "./query";
/** Query defines the gRPC querier service for x/service.
 See x-service-spec.md §8. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Operator returns the live operator record for (address, service_type). */
  operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
  /** ServiceType returns one service-type registry entry. */
  serviceType(request: QueryServiceTypeRequest): Promise<QueryServiceTypeResponse>;
  /** ServiceTypes returns all service-type registry entries (paginated). */
  serviceTypes(request: QueryServiceTypesRequest): Promise<QueryServiceTypesResponse>;
  /**
   * Operators returns all live operator records (paginated, optionally
   * filtered by status).
   */
  operators(request: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
  /**
   * OperatorsByController returns live operators whose controller is the
   * given address.
   */
  operatorsByController(request: QueryOperatorsByControllerRequest): Promise<QueryOperatorsByControllerResponse>;
  /** OperatorsByServiceType returns live operators of the given service type. */
  operatorsByServiceType(request: QueryOperatorsByServiceTypeRequest): Promise<QueryOperatorsByServiceTypeResponse>;
  /** Report returns a single report by id. */
  report(request: QueryReportRequest): Promise<QueryReportResponse>;
  /** ReportsByOperator returns reports against (operator_address, service_type). */
  reportsByOperator(request: QueryReportsByOperatorRequest): Promise<QueryReportsByOperatorResponse>;
  /**
   * OperatorReputationSnapshot returns bond-block totals for an address
   * (§6.6 lazy accrual visibility). Settles in-memory at query time; no
   * state write.
   */
  operatorReputationSnapshot(request: QueryOperatorReputationSnapshotRequest): Promise<QueryOperatorReputationSnapshotResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Operator returns the live operator record for (address, service_type). */
  operator = async (request: QueryOperatorRequest): Promise<QueryOperatorResponse> => {
    const data = QueryOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "Operator", data);
    return promise.then(data => QueryOperatorResponse.decode(new BinaryReader(data)));
  };
  /* ServiceType returns one service-type registry entry. */
  serviceType = async (request: QueryServiceTypeRequest): Promise<QueryServiceTypeResponse> => {
    const data = QueryServiceTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "ServiceType", data);
    return promise.then(data => QueryServiceTypeResponse.decode(new BinaryReader(data)));
  };
  /* ServiceTypes returns all service-type registry entries (paginated). */
  serviceTypes = async (request: QueryServiceTypesRequest): Promise<QueryServiceTypesResponse> => {
    const data = QueryServiceTypesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "ServiceTypes", data);
    return promise.then(data => QueryServiceTypesResponse.decode(new BinaryReader(data)));
  };
  /* Operators returns all live operator records (paginated, optionally
   filtered by status). */
  operators = async (request: QueryOperatorsRequest): Promise<QueryOperatorsResponse> => {
    const data = QueryOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "Operators", data);
    return promise.then(data => QueryOperatorsResponse.decode(new BinaryReader(data)));
  };
  /* OperatorsByController returns live operators whose controller is the
   given address. */
  operatorsByController = async (request: QueryOperatorsByControllerRequest): Promise<QueryOperatorsByControllerResponse> => {
    const data = QueryOperatorsByControllerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "OperatorsByController", data);
    return promise.then(data => QueryOperatorsByControllerResponse.decode(new BinaryReader(data)));
  };
  /* OperatorsByServiceType returns live operators of the given service type. */
  operatorsByServiceType = async (request: QueryOperatorsByServiceTypeRequest): Promise<QueryOperatorsByServiceTypeResponse> => {
    const data = QueryOperatorsByServiceTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "OperatorsByServiceType", data);
    return promise.then(data => QueryOperatorsByServiceTypeResponse.decode(new BinaryReader(data)));
  };
  /* Report returns a single report by id. */
  report = async (request: QueryReportRequest): Promise<QueryReportResponse> => {
    const data = QueryReportRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "Report", data);
    return promise.then(data => QueryReportResponse.decode(new BinaryReader(data)));
  };
  /* ReportsByOperator returns reports against (operator_address, service_type). */
  reportsByOperator = async (request: QueryReportsByOperatorRequest): Promise<QueryReportsByOperatorResponse> => {
    const data = QueryReportsByOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "ReportsByOperator", data);
    return promise.then(data => QueryReportsByOperatorResponse.decode(new BinaryReader(data)));
  };
  /* OperatorReputationSnapshot returns bond-block totals for an address
   (§6.6 lazy accrual visibility). Settles in-memory at query time; no
   state write. */
  operatorReputationSnapshot = async (request: QueryOperatorReputationSnapshotRequest): Promise<QueryOperatorReputationSnapshotResponse> => {
    const data = QueryOperatorReputationSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Query", "OperatorReputationSnapshot", data);
    return promise.then(data => QueryOperatorReputationSnapshotResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse> {
      return queryService.operator(request);
    },
    serviceType(request: QueryServiceTypeRequest): Promise<QueryServiceTypeResponse> {
      return queryService.serviceType(request);
    },
    serviceTypes(request: QueryServiceTypesRequest): Promise<QueryServiceTypesResponse> {
      return queryService.serviceTypes(request);
    },
    operators(request: QueryOperatorsRequest): Promise<QueryOperatorsResponse> {
      return queryService.operators(request);
    },
    operatorsByController(request: QueryOperatorsByControllerRequest): Promise<QueryOperatorsByControllerResponse> {
      return queryService.operatorsByController(request);
    },
    operatorsByServiceType(request: QueryOperatorsByServiceTypeRequest): Promise<QueryOperatorsByServiceTypeResponse> {
      return queryService.operatorsByServiceType(request);
    },
    report(request: QueryReportRequest): Promise<QueryReportResponse> {
      return queryService.report(request);
    },
    reportsByOperator(request: QueryReportsByOperatorRequest): Promise<QueryReportsByOperatorResponse> {
      return queryService.reportsByOperator(request);
    },
    operatorReputationSnapshot(request: QueryOperatorReputationSnapshotRequest): Promise<QueryOperatorReputationSnapshotResponse> {
      return queryService.operatorReputationSnapshot(request);
    }
  };
};