//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryOperatorRequest, QueryOperatorResponse, QueryServiceTypeRequest, QueryServiceTypeResponse, QueryServiceTypesRequest, QueryServiceTypesResponse, QueryOperatorsRequest, QueryOperatorsResponse, QueryOperatorsByControllerRequest, QueryOperatorsByControllerResponse, QueryOperatorsByServiceTypeRequest, QueryOperatorsByServiceTypeResponse, QueryReportRequest, QueryReportResponse, QueryReportsByOperatorRequest, QueryReportsByOperatorResponse, QueryOperatorReputationSnapshotRequest, QueryOperatorReputationSnapshotResponse } from "./query";
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
    const endpoint = `sparkdream/service/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Operator returns the live operator record for (address, service_type). */
  operator = async (params: QueryOperatorRequest): Promise<QueryOperatorResponse> => {
    const endpoint = `sparkdream/service/v1/operator/${params.address}/${params.serviceType}`;
    return await this.req.get<QueryOperatorResponse>(endpoint);
  };
  /* ServiceType returns one service-type registry entry. */
  serviceType = async (params: QueryServiceTypeRequest): Promise<QueryServiceTypeResponse> => {
    const endpoint = `sparkdream/service/v1/service_type/${params.serviceType}`;
    return await this.req.get<QueryServiceTypeResponse>(endpoint);
  };
  /* ServiceTypes returns all service-type registry entries (paginated). */
  serviceTypes = async (params: QueryServiceTypesRequest): Promise<QueryServiceTypesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.enabledOnly !== "undefined") {
      options.params.enabled_only = params.enabledOnly;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/service/v1/service_types`;
    return await this.req.get<QueryServiceTypesResponse>(endpoint, options);
  };
  /* Operators returns all live operator records (paginated, optionally
   filtered by status). */
  operators = async (params: QueryOperatorsRequest): Promise<QueryOperatorsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.statusFilter !== "undefined") {
      options.params.status_filter = params.statusFilter;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/service/v1/operators`;
    return await this.req.get<QueryOperatorsResponse>(endpoint, options);
  };
  /* OperatorsByController returns live operators whose controller is the
   given address. */
  operatorsByController = async (params: QueryOperatorsByControllerRequest): Promise<QueryOperatorsByControllerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.statusFilter !== "undefined") {
      options.params.status_filter = params.statusFilter;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/service/v1/operators_by_controller/${params.controller}`;
    return await this.req.get<QueryOperatorsByControllerResponse>(endpoint, options);
  };
  /* OperatorsByServiceType returns live operators of the given service type. */
  operatorsByServiceType = async (params: QueryOperatorsByServiceTypeRequest): Promise<QueryOperatorsByServiceTypeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.statusFilter !== "undefined") {
      options.params.status_filter = params.statusFilter;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/service/v1/operators_by_service_type/${params.serviceType}`;
    return await this.req.get<QueryOperatorsByServiceTypeResponse>(endpoint, options);
  };
  /* Report returns a single report by id. */
  report = async (params: QueryReportRequest): Promise<QueryReportResponse> => {
    const endpoint = `sparkdream/service/v1/report/${params.reportId}`;
    return await this.req.get<QueryReportResponse>(endpoint);
  };
  /* ReportsByOperator returns reports against (operator_address, service_type). */
  reportsByOperator = async (params: QueryReportsByOperatorRequest): Promise<QueryReportsByOperatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.statusFilter !== "undefined") {
      options.params.status_filter = params.statusFilter;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/service/v1/reports_by_operator/${params.operatorAddress}/${params.serviceType}`;
    return await this.req.get<QueryReportsByOperatorResponse>(endpoint, options);
  };
  /* OperatorReputationSnapshot returns bond-block totals for an address
   (§6.6 lazy accrual visibility). Settles in-memory at query time; no
   state write. */
  operatorReputationSnapshot = async (params: QueryOperatorReputationSnapshotRequest): Promise<QueryOperatorReputationSnapshotResponse> => {
    const endpoint = `sparkdream/service/v1/operator_reputation_snapshot/${params.address}`;
    return await this.req.get<QueryOperatorReputationSnapshotResponse>(endpoint);
  };
}