//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Operator, OperatorAmino } from "./operator";
import { ServiceTypeConfig, ServiceTypeConfigAmino } from "./service_type_config";
import { Report, ReportAmino } from "./report";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryOperatorRequest defines the QueryOperatorRequest message.
 * @name QueryOperatorRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorRequest
 */
export interface QueryOperatorRequest {
  address: string;
  serviceType: string;
}
export interface QueryOperatorRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorRequest defines the QueryOperatorRequest message.
 * @name QueryOperatorRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorRequest
 */
export interface QueryOperatorRequestAmino {
  address?: string;
  service_type?: string;
}
export interface QueryOperatorRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorRequest";
  value: QueryOperatorRequestAmino;
}
/**
 * QueryOperatorResponse defines the QueryOperatorResponse message.
 * @name QueryOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorResponse
 */
export interface QueryOperatorResponse {
  operator: Operator;
}
export interface QueryOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorResponse defines the QueryOperatorResponse message.
 * @name QueryOperatorResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorResponse
 */
export interface QueryOperatorResponseAmino {
  operator?: OperatorAmino;
}
export interface QueryOperatorResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorResponse";
  value: QueryOperatorResponseAmino;
}
/**
 * QueryServiceTypeRequest defines the QueryServiceTypeRequest message.
 * @name QueryServiceTypeRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypeRequest
 */
export interface QueryServiceTypeRequest {
  serviceType: string;
}
export interface QueryServiceTypeRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypeRequest";
  value: Uint8Array;
}
/**
 * QueryServiceTypeRequest defines the QueryServiceTypeRequest message.
 * @name QueryServiceTypeRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypeRequest
 */
export interface QueryServiceTypeRequestAmino {
  service_type?: string;
}
export interface QueryServiceTypeRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryServiceTypeRequest";
  value: QueryServiceTypeRequestAmino;
}
/**
 * QueryServiceTypeResponse defines the QueryServiceTypeResponse message.
 * @name QueryServiceTypeResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypeResponse
 */
export interface QueryServiceTypeResponse {
  config: ServiceTypeConfig;
}
export interface QueryServiceTypeResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypeResponse";
  value: Uint8Array;
}
/**
 * QueryServiceTypeResponse defines the QueryServiceTypeResponse message.
 * @name QueryServiceTypeResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypeResponse
 */
export interface QueryServiceTypeResponseAmino {
  config?: ServiceTypeConfigAmino;
}
export interface QueryServiceTypeResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryServiceTypeResponse";
  value: QueryServiceTypeResponseAmino;
}
/**
 * QueryServiceTypesRequest defines the QueryServiceTypesRequest message.
 * @name QueryServiceTypesRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypesRequest
 */
export interface QueryServiceTypesRequest {
  /**
   * If true, only enabled service types are returned.
   */
  enabledOnly: boolean;
  pagination?: PageRequest;
}
export interface QueryServiceTypesRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypesRequest";
  value: Uint8Array;
}
/**
 * QueryServiceTypesRequest defines the QueryServiceTypesRequest message.
 * @name QueryServiceTypesRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypesRequest
 */
export interface QueryServiceTypesRequestAmino {
  /**
   * If true, only enabled service types are returned.
   */
  enabled_only?: boolean;
  pagination?: PageRequestAmino;
}
export interface QueryServiceTypesRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryServiceTypesRequest";
  value: QueryServiceTypesRequestAmino;
}
/**
 * QueryServiceTypesResponse defines the QueryServiceTypesResponse message.
 * @name QueryServiceTypesResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypesResponse
 */
export interface QueryServiceTypesResponse {
  configs: ServiceTypeConfig[];
  pagination?: PageResponse;
}
export interface QueryServiceTypesResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypesResponse";
  value: Uint8Array;
}
/**
 * QueryServiceTypesResponse defines the QueryServiceTypesResponse message.
 * @name QueryServiceTypesResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypesResponse
 */
export interface QueryServiceTypesResponseAmino {
  configs?: ServiceTypeConfigAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryServiceTypesResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryServiceTypesResponse";
  value: QueryServiceTypesResponseAmino;
}
/**
 * QueryOperatorsRequest defines the QueryOperatorsRequest message.
 * @name QueryOperatorsRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsRequest
 */
export interface QueryOperatorsRequest {
  /**
   * status_filter, if non-empty, restricts results to operators with
   * that status. Valid values match the OperatorStatus enum names
   * (case-insensitive match against enum string).
   */
  statusFilter: string;
  pagination?: PageRequest;
}
export interface QueryOperatorsRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorsRequest defines the QueryOperatorsRequest message.
 * @name QueryOperatorsRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsRequest
 */
export interface QueryOperatorsRequestAmino {
  /**
   * status_filter, if non-empty, restricts results to operators with
   * that status. Valid values match the OperatorStatus enum names
   * (case-insensitive match against enum string).
   */
  status_filter?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOperatorsRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorsRequest";
  value: QueryOperatorsRequestAmino;
}
/**
 * QueryOperatorsResponse defines the QueryOperatorsResponse message.
 * @name QueryOperatorsResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsResponse
 */
export interface QueryOperatorsResponse {
  operators: Operator[];
  pagination?: PageResponse;
}
export interface QueryOperatorsResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorsResponse defines the QueryOperatorsResponse message.
 * @name QueryOperatorsResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsResponse
 */
export interface QueryOperatorsResponseAmino {
  operators?: OperatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOperatorsResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorsResponse";
  value: QueryOperatorsResponseAmino;
}
/**
 * QueryOperatorsByControllerRequest defines the QueryOperatorsByControllerRequest message.
 * @name QueryOperatorsByControllerRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByControllerRequest
 */
export interface QueryOperatorsByControllerRequest {
  controller: string;
  statusFilter: string;
  pagination?: PageRequest;
}
export interface QueryOperatorsByControllerRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByControllerRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorsByControllerRequest defines the QueryOperatorsByControllerRequest message.
 * @name QueryOperatorsByControllerRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByControllerRequest
 */
export interface QueryOperatorsByControllerRequestAmino {
  controller?: string;
  status_filter?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOperatorsByControllerRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorsByControllerRequest";
  value: QueryOperatorsByControllerRequestAmino;
}
/**
 * QueryOperatorsByControllerResponse defines the QueryOperatorsByControllerResponse message.
 * @name QueryOperatorsByControllerResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByControllerResponse
 */
export interface QueryOperatorsByControllerResponse {
  operators: Operator[];
  pagination?: PageResponse;
}
export interface QueryOperatorsByControllerResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByControllerResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorsByControllerResponse defines the QueryOperatorsByControllerResponse message.
 * @name QueryOperatorsByControllerResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByControllerResponse
 */
export interface QueryOperatorsByControllerResponseAmino {
  operators?: OperatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOperatorsByControllerResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorsByControllerResponse";
  value: QueryOperatorsByControllerResponseAmino;
}
/**
 * QueryOperatorsByServiceTypeRequest defines the QueryOperatorsByServiceTypeRequest message.
 * @name QueryOperatorsByServiceTypeRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByServiceTypeRequest
 */
export interface QueryOperatorsByServiceTypeRequest {
  serviceType: string;
  statusFilter: string;
  pagination?: PageRequest;
}
export interface QueryOperatorsByServiceTypeRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByServiceTypeRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorsByServiceTypeRequest defines the QueryOperatorsByServiceTypeRequest message.
 * @name QueryOperatorsByServiceTypeRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByServiceTypeRequest
 */
export interface QueryOperatorsByServiceTypeRequestAmino {
  service_type?: string;
  status_filter?: string;
  pagination?: PageRequestAmino;
}
export interface QueryOperatorsByServiceTypeRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorsByServiceTypeRequest";
  value: QueryOperatorsByServiceTypeRequestAmino;
}
/**
 * QueryOperatorsByServiceTypeResponse defines the QueryOperatorsByServiceTypeResponse message.
 * @name QueryOperatorsByServiceTypeResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByServiceTypeResponse
 */
export interface QueryOperatorsByServiceTypeResponse {
  operators: Operator[];
  pagination?: PageResponse;
}
export interface QueryOperatorsByServiceTypeResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByServiceTypeResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorsByServiceTypeResponse defines the QueryOperatorsByServiceTypeResponse message.
 * @name QueryOperatorsByServiceTypeResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByServiceTypeResponse
 */
export interface QueryOperatorsByServiceTypeResponseAmino {
  operators?: OperatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOperatorsByServiceTypeResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorsByServiceTypeResponse";
  value: QueryOperatorsByServiceTypeResponseAmino;
}
/**
 * QueryReportRequest defines the QueryReportRequest message.
 * @name QueryReportRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportRequest
 */
export interface QueryReportRequest {
  reportId: bigint;
}
export interface QueryReportRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryReportRequest";
  value: Uint8Array;
}
/**
 * QueryReportRequest defines the QueryReportRequest message.
 * @name QueryReportRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportRequest
 */
export interface QueryReportRequestAmino {
  report_id?: string;
}
export interface QueryReportRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryReportRequest";
  value: QueryReportRequestAmino;
}
/**
 * QueryReportResponse defines the QueryReportResponse message.
 * @name QueryReportResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportResponse
 */
export interface QueryReportResponse {
  report: Report;
}
export interface QueryReportResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryReportResponse";
  value: Uint8Array;
}
/**
 * QueryReportResponse defines the QueryReportResponse message.
 * @name QueryReportResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportResponse
 */
export interface QueryReportResponseAmino {
  report?: ReportAmino;
}
export interface QueryReportResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryReportResponse";
  value: QueryReportResponseAmino;
}
/**
 * QueryReportsByOperatorRequest defines the QueryReportsByOperatorRequest message.
 * @name QueryReportsByOperatorRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportsByOperatorRequest
 */
export interface QueryReportsByOperatorRequest {
  operatorAddress: string;
  serviceType: string;
  /**
   * status_filter, if non-empty, restricts to reports with that status
   * (matched against the ReportStatus enum string, case-insensitive).
   */
  statusFilter: string;
  pagination?: PageRequest;
}
export interface QueryReportsByOperatorRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryReportsByOperatorRequest";
  value: Uint8Array;
}
/**
 * QueryReportsByOperatorRequest defines the QueryReportsByOperatorRequest message.
 * @name QueryReportsByOperatorRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportsByOperatorRequest
 */
export interface QueryReportsByOperatorRequestAmino {
  operator_address?: string;
  service_type?: string;
  /**
   * status_filter, if non-empty, restricts to reports with that status
   * (matched against the ReportStatus enum string, case-insensitive).
   */
  status_filter?: string;
  pagination?: PageRequestAmino;
}
export interface QueryReportsByOperatorRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryReportsByOperatorRequest";
  value: QueryReportsByOperatorRequestAmino;
}
/**
 * QueryReportsByOperatorResponse defines the QueryReportsByOperatorResponse message.
 * @name QueryReportsByOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportsByOperatorResponse
 */
export interface QueryReportsByOperatorResponse {
  reports: Report[];
  pagination?: PageResponse;
}
export interface QueryReportsByOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryReportsByOperatorResponse";
  value: Uint8Array;
}
/**
 * QueryReportsByOperatorResponse defines the QueryReportsByOperatorResponse message.
 * @name QueryReportsByOperatorResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportsByOperatorResponse
 */
export interface QueryReportsByOperatorResponseAmino {
  reports?: ReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryReportsByOperatorResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryReportsByOperatorResponse";
  value: QueryReportsByOperatorResponseAmino;
}
/**
 * QueryOperatorReputationSnapshotRequest defines the QueryOperatorReputationSnapshotRequest message.
 * @name QueryOperatorReputationSnapshotRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorReputationSnapshotRequest
 */
export interface QueryOperatorReputationSnapshotRequest {
  address: string;
}
export interface QueryOperatorReputationSnapshotRequestProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorReputationSnapshotRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorReputationSnapshotRequest defines the QueryOperatorReputationSnapshotRequest message.
 * @name QueryOperatorReputationSnapshotRequestAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorReputationSnapshotRequest
 */
export interface QueryOperatorReputationSnapshotRequestAmino {
  address?: string;
}
export interface QueryOperatorReputationSnapshotRequestAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorReputationSnapshotRequest";
  value: QueryOperatorReputationSnapshotRequestAmino;
}
/**
 * QueryOperatorReputationSnapshotResponse returns aggregate bond-block
 * accrual for an address, settled at query time per §6.6.
 * @name QueryOperatorReputationSnapshotResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorReputationSnapshotResponse
 */
export interface QueryOperatorReputationSnapshotResponse {
  /**
   * total_bond_blocks summed across all live operator records for the
   * address (not capped by the anti-gaming rule — this is the raw
   * accrual).
   */
  totalBondBlocks: string;
  /**
   * effective_bond_blocks is the max single-operator bond-blocks for
   * this address — the value that would actually be granted at unbond
   * claim per the §6.6 anti-gaming cap.
   */
  effectiveBondBlocks: string;
}
export interface QueryOperatorReputationSnapshotResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.QueryOperatorReputationSnapshotResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorReputationSnapshotResponse returns aggregate bond-block
 * accrual for an address, settled at query time per §6.6.
 * @name QueryOperatorReputationSnapshotResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorReputationSnapshotResponse
 */
export interface QueryOperatorReputationSnapshotResponseAmino {
  /**
   * total_bond_blocks summed across all live operator records for the
   * address (not capped by the anti-gaming rule — this is the raw
   * accrual).
   */
  total_bond_blocks?: string;
  /**
   * effective_bond_blocks is the max single-operator bond-blocks for
   * this address — the value that would actually be granted at unbond
   * claim per the §6.6 anti-gaming cap.
   */
  effective_bond_blocks?: string;
}
export interface QueryOperatorReputationSnapshotResponseAminoMsg {
  type: "/sparkdream.service.v1.QueryOperatorReputationSnapshotResponse";
  value: QueryOperatorReputationSnapshotResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.service.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.service.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorRequest(): QueryOperatorRequest {
  return {
    address: "",
    serviceType: ""
  };
}
/**
 * QueryOperatorRequest defines the QueryOperatorRequest message.
 * @name QueryOperatorRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorRequest
 */
export const QueryOperatorRequest = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorRequest",
  encode(message: QueryOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorRequest>): QueryOperatorRequest {
    const message = createBaseQueryOperatorRequest();
    message.address = object.address ?? "";
    message.serviceType = object.serviceType ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorRequestAmino): QueryOperatorRequest {
    const message = createBaseQueryOperatorRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    return message;
  },
  toAmino(message: QueryOperatorRequest): QueryOperatorRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorRequestAminoMsg): QueryOperatorRequest {
    return QueryOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorRequestProtoMsg): QueryOperatorRequest {
    return QueryOperatorRequest.decode(message.value);
  },
  toProto(message: QueryOperatorRequest): Uint8Array {
    return QueryOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorRequest): QueryOperatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorRequest",
      value: QueryOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorResponse(): QueryOperatorResponse {
  return {
    operator: Operator.fromPartial({})
  };
}
/**
 * QueryOperatorResponse defines the QueryOperatorResponse message.
 * @name QueryOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorResponse
 */
export const QueryOperatorResponse = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorResponse",
  encode(message: QueryOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== undefined) {
      Operator.encode(message.operator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = Operator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorResponse>): QueryOperatorResponse {
    const message = createBaseQueryOperatorResponse();
    message.operator = object.operator !== undefined && object.operator !== null ? Operator.fromPartial(object.operator) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorResponseAmino): QueryOperatorResponse {
    const message = createBaseQueryOperatorResponse();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = Operator.fromAmino(object.operator);
    }
    return message;
  },
  toAmino(message: QueryOperatorResponse): QueryOperatorResponseAmino {
    const obj: any = {};
    obj.operator = message.operator ? Operator.toAmino(message.operator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorResponseAminoMsg): QueryOperatorResponse {
    return QueryOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorResponseProtoMsg): QueryOperatorResponse {
    return QueryOperatorResponse.decode(message.value);
  },
  toProto(message: QueryOperatorResponse): Uint8Array {
    return QueryOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorResponse): QueryOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorResponse",
      value: QueryOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceTypeRequest(): QueryServiceTypeRequest {
  return {
    serviceType: ""
  };
}
/**
 * QueryServiceTypeRequest defines the QueryServiceTypeRequest message.
 * @name QueryServiceTypeRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypeRequest
 */
export const QueryServiceTypeRequest = {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypeRequest",
  encode(message: QueryServiceTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceType !== "") {
      writer.uint32(10).string(message.serviceType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryServiceTypeRequest>): QueryServiceTypeRequest {
    const message = createBaseQueryServiceTypeRequest();
    message.serviceType = object.serviceType ?? "";
    return message;
  },
  fromAmino(object: QueryServiceTypeRequestAmino): QueryServiceTypeRequest {
    const message = createBaseQueryServiceTypeRequest();
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    return message;
  },
  toAmino(message: QueryServiceTypeRequest): QueryServiceTypeRequestAmino {
    const obj: any = {};
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    return obj;
  },
  fromAminoMsg(object: QueryServiceTypeRequestAminoMsg): QueryServiceTypeRequest {
    return QueryServiceTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceTypeRequestProtoMsg): QueryServiceTypeRequest {
    return QueryServiceTypeRequest.decode(message.value);
  },
  toProto(message: QueryServiceTypeRequest): Uint8Array {
    return QueryServiceTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceTypeRequest): QueryServiceTypeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryServiceTypeRequest",
      value: QueryServiceTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceTypeResponse(): QueryServiceTypeResponse {
  return {
    config: ServiceTypeConfig.fromPartial({})
  };
}
/**
 * QueryServiceTypeResponse defines the QueryServiceTypeResponse message.
 * @name QueryServiceTypeResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypeResponse
 */
export const QueryServiceTypeResponse = {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypeResponse",
  encode(message: QueryServiceTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      ServiceTypeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ServiceTypeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryServiceTypeResponse>): QueryServiceTypeResponse {
    const message = createBaseQueryServiceTypeResponse();
    message.config = object.config !== undefined && object.config !== null ? ServiceTypeConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceTypeResponseAmino): QueryServiceTypeResponse {
    const message = createBaseQueryServiceTypeResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = ServiceTypeConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryServiceTypeResponse): QueryServiceTypeResponseAmino {
    const obj: any = {};
    obj.config = message.config ? ServiceTypeConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceTypeResponseAminoMsg): QueryServiceTypeResponse {
    return QueryServiceTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceTypeResponseProtoMsg): QueryServiceTypeResponse {
    return QueryServiceTypeResponse.decode(message.value);
  },
  toProto(message: QueryServiceTypeResponse): Uint8Array {
    return QueryServiceTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceTypeResponse): QueryServiceTypeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryServiceTypeResponse",
      value: QueryServiceTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceTypesRequest(): QueryServiceTypesRequest {
  return {
    enabledOnly: false,
    pagination: undefined
  };
}
/**
 * QueryServiceTypesRequest defines the QueryServiceTypesRequest message.
 * @name QueryServiceTypesRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypesRequest
 */
export const QueryServiceTypesRequest = {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypesRequest",
  encode(message: QueryServiceTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabledOnly === true) {
      writer.uint32(8).bool(message.enabledOnly);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabledOnly = reader.bool();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryServiceTypesRequest>): QueryServiceTypesRequest {
    const message = createBaseQueryServiceTypesRequest();
    message.enabledOnly = object.enabledOnly ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceTypesRequestAmino): QueryServiceTypesRequest {
    const message = createBaseQueryServiceTypesRequest();
    if (object.enabled_only !== undefined && object.enabled_only !== null) {
      message.enabledOnly = object.enabled_only;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceTypesRequest): QueryServiceTypesRequestAmino {
    const obj: any = {};
    obj.enabled_only = message.enabledOnly === false ? undefined : message.enabledOnly;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceTypesRequestAminoMsg): QueryServiceTypesRequest {
    return QueryServiceTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceTypesRequestProtoMsg): QueryServiceTypesRequest {
    return QueryServiceTypesRequest.decode(message.value);
  },
  toProto(message: QueryServiceTypesRequest): Uint8Array {
    return QueryServiceTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceTypesRequest): QueryServiceTypesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryServiceTypesRequest",
      value: QueryServiceTypesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceTypesResponse(): QueryServiceTypesResponse {
  return {
    configs: [],
    pagination: undefined
  };
}
/**
 * QueryServiceTypesResponse defines the QueryServiceTypesResponse message.
 * @name QueryServiceTypesResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryServiceTypesResponse
 */
export const QueryServiceTypesResponse = {
  typeUrl: "/sparkdream.service.v1.QueryServiceTypesResponse",
  encode(message: QueryServiceTypesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.configs) {
      ServiceTypeConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceTypesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configs.push(ServiceTypeConfig.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryServiceTypesResponse>): QueryServiceTypesResponse {
    const message = createBaseQueryServiceTypesResponse();
    message.configs = object.configs?.map(e => ServiceTypeConfig.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceTypesResponseAmino): QueryServiceTypesResponse {
    const message = createBaseQueryServiceTypesResponse();
    message.configs = object.configs?.map(e => ServiceTypeConfig.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceTypesResponse): QueryServiceTypesResponseAmino {
    const obj: any = {};
    if (message.configs) {
      obj.configs = message.configs.map(e => e ? ServiceTypeConfig.toAmino(e) : undefined);
    } else {
      obj.configs = message.configs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceTypesResponseAminoMsg): QueryServiceTypesResponse {
    return QueryServiceTypesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceTypesResponseProtoMsg): QueryServiceTypesResponse {
    return QueryServiceTypesResponse.decode(message.value);
  },
  toProto(message: QueryServiceTypesResponse): Uint8Array {
    return QueryServiceTypesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceTypesResponse): QueryServiceTypesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryServiceTypesResponse",
      value: QueryServiceTypesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsRequest(): QueryOperatorsRequest {
  return {
    statusFilter: "",
    pagination: undefined
  };
}
/**
 * QueryOperatorsRequest defines the QueryOperatorsRequest message.
 * @name QueryOperatorsRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsRequest
 */
export const QueryOperatorsRequest = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsRequest",
  encode(message: QueryOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.statusFilter !== "") {
      writer.uint32(10).string(message.statusFilter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusFilter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorsRequest>): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    message.statusFilter = object.statusFilter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsRequestAmino): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    if (object.status_filter !== undefined && object.status_filter !== null) {
      message.statusFilter = object.status_filter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsRequest): QueryOperatorsRequestAmino {
    const obj: any = {};
    obj.status_filter = message.statusFilter === "" ? undefined : message.statusFilter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsRequestAminoMsg): QueryOperatorsRequest {
    return QueryOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsRequestProtoMsg): QueryOperatorsRequest {
    return QueryOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorsRequest): Uint8Array {
    return QueryOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsRequest): QueryOperatorsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorsRequest",
      value: QueryOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsResponse(): QueryOperatorsResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
/**
 * QueryOperatorsResponse defines the QueryOperatorsResponse message.
 * @name QueryOperatorsResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsResponse
 */
export const QueryOperatorsResponse = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsResponse",
  encode(message: QueryOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorsResponse>): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsResponseAmino): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsResponse): QueryOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsResponseAminoMsg): QueryOperatorsResponse {
    return QueryOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsResponseProtoMsg): QueryOperatorsResponse {
    return QueryOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorsResponse): Uint8Array {
    return QueryOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsResponse): QueryOperatorsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorsResponse",
      value: QueryOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsByControllerRequest(): QueryOperatorsByControllerRequest {
  return {
    controller: "",
    statusFilter: "",
    pagination: undefined
  };
}
/**
 * QueryOperatorsByControllerRequest defines the QueryOperatorsByControllerRequest message.
 * @name QueryOperatorsByControllerRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByControllerRequest
 */
export const QueryOperatorsByControllerRequest = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByControllerRequest",
  encode(message: QueryOperatorsByControllerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.statusFilter !== "") {
      writer.uint32(18).string(message.statusFilter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsByControllerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsByControllerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controller = reader.string();
          break;
        case 2:
          message.statusFilter = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorsByControllerRequest>): QueryOperatorsByControllerRequest {
    const message = createBaseQueryOperatorsByControllerRequest();
    message.controller = object.controller ?? "";
    message.statusFilter = object.statusFilter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsByControllerRequestAmino): QueryOperatorsByControllerRequest {
    const message = createBaseQueryOperatorsByControllerRequest();
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.status_filter !== undefined && object.status_filter !== null) {
      message.statusFilter = object.status_filter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsByControllerRequest): QueryOperatorsByControllerRequestAmino {
    const obj: any = {};
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.status_filter = message.statusFilter === "" ? undefined : message.statusFilter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsByControllerRequestAminoMsg): QueryOperatorsByControllerRequest {
    return QueryOperatorsByControllerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsByControllerRequestProtoMsg): QueryOperatorsByControllerRequest {
    return QueryOperatorsByControllerRequest.decode(message.value);
  },
  toProto(message: QueryOperatorsByControllerRequest): Uint8Array {
    return QueryOperatorsByControllerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsByControllerRequest): QueryOperatorsByControllerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorsByControllerRequest",
      value: QueryOperatorsByControllerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsByControllerResponse(): QueryOperatorsByControllerResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
/**
 * QueryOperatorsByControllerResponse defines the QueryOperatorsByControllerResponse message.
 * @name QueryOperatorsByControllerResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByControllerResponse
 */
export const QueryOperatorsByControllerResponse = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByControllerResponse",
  encode(message: QueryOperatorsByControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsByControllerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsByControllerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorsByControllerResponse>): QueryOperatorsByControllerResponse {
    const message = createBaseQueryOperatorsByControllerResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsByControllerResponseAmino): QueryOperatorsByControllerResponse {
    const message = createBaseQueryOperatorsByControllerResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsByControllerResponse): QueryOperatorsByControllerResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsByControllerResponseAminoMsg): QueryOperatorsByControllerResponse {
    return QueryOperatorsByControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsByControllerResponseProtoMsg): QueryOperatorsByControllerResponse {
    return QueryOperatorsByControllerResponse.decode(message.value);
  },
  toProto(message: QueryOperatorsByControllerResponse): Uint8Array {
    return QueryOperatorsByControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsByControllerResponse): QueryOperatorsByControllerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorsByControllerResponse",
      value: QueryOperatorsByControllerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsByServiceTypeRequest(): QueryOperatorsByServiceTypeRequest {
  return {
    serviceType: "",
    statusFilter: "",
    pagination: undefined
  };
}
/**
 * QueryOperatorsByServiceTypeRequest defines the QueryOperatorsByServiceTypeRequest message.
 * @name QueryOperatorsByServiceTypeRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByServiceTypeRequest
 */
export const QueryOperatorsByServiceTypeRequest = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByServiceTypeRequest",
  encode(message: QueryOperatorsByServiceTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceType !== "") {
      writer.uint32(10).string(message.serviceType);
    }
    if (message.statusFilter !== "") {
      writer.uint32(18).string(message.statusFilter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsByServiceTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsByServiceTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceType = reader.string();
          break;
        case 2:
          message.statusFilter = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorsByServiceTypeRequest>): QueryOperatorsByServiceTypeRequest {
    const message = createBaseQueryOperatorsByServiceTypeRequest();
    message.serviceType = object.serviceType ?? "";
    message.statusFilter = object.statusFilter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsByServiceTypeRequestAmino): QueryOperatorsByServiceTypeRequest {
    const message = createBaseQueryOperatorsByServiceTypeRequest();
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.status_filter !== undefined && object.status_filter !== null) {
      message.statusFilter = object.status_filter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsByServiceTypeRequest): QueryOperatorsByServiceTypeRequestAmino {
    const obj: any = {};
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.status_filter = message.statusFilter === "" ? undefined : message.statusFilter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsByServiceTypeRequestAminoMsg): QueryOperatorsByServiceTypeRequest {
    return QueryOperatorsByServiceTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsByServiceTypeRequestProtoMsg): QueryOperatorsByServiceTypeRequest {
    return QueryOperatorsByServiceTypeRequest.decode(message.value);
  },
  toProto(message: QueryOperatorsByServiceTypeRequest): Uint8Array {
    return QueryOperatorsByServiceTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsByServiceTypeRequest): QueryOperatorsByServiceTypeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorsByServiceTypeRequest",
      value: QueryOperatorsByServiceTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsByServiceTypeResponse(): QueryOperatorsByServiceTypeResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
/**
 * QueryOperatorsByServiceTypeResponse defines the QueryOperatorsByServiceTypeResponse message.
 * @name QueryOperatorsByServiceTypeResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorsByServiceTypeResponse
 */
export const QueryOperatorsByServiceTypeResponse = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorsByServiceTypeResponse",
  encode(message: QueryOperatorsByServiceTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsByServiceTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsByServiceTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorsByServiceTypeResponse>): QueryOperatorsByServiceTypeResponse {
    const message = createBaseQueryOperatorsByServiceTypeResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsByServiceTypeResponseAmino): QueryOperatorsByServiceTypeResponse {
    const message = createBaseQueryOperatorsByServiceTypeResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsByServiceTypeResponse): QueryOperatorsByServiceTypeResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsByServiceTypeResponseAminoMsg): QueryOperatorsByServiceTypeResponse {
    return QueryOperatorsByServiceTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsByServiceTypeResponseProtoMsg): QueryOperatorsByServiceTypeResponse {
    return QueryOperatorsByServiceTypeResponse.decode(message.value);
  },
  toProto(message: QueryOperatorsByServiceTypeResponse): Uint8Array {
    return QueryOperatorsByServiceTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsByServiceTypeResponse): QueryOperatorsByServiceTypeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorsByServiceTypeResponse",
      value: QueryOperatorsByServiceTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReportRequest(): QueryReportRequest {
  return {
    reportId: BigInt(0)
  };
}
/**
 * QueryReportRequest defines the QueryReportRequest message.
 * @name QueryReportRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportRequest
 */
export const QueryReportRequest = {
  typeUrl: "/sparkdream.service.v1.QueryReportRequest",
  encode(message: QueryReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reportId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reportId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReportRequest>): QueryReportRequest {
    const message = createBaseQueryReportRequest();
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryReportRequestAmino): QueryReportRequest {
    const message = createBaseQueryReportRequest();
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    return message;
  },
  toAmino(message: QueryReportRequest): QueryReportRequestAmino {
    const obj: any = {};
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportRequestAminoMsg): QueryReportRequest {
    return QueryReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportRequestProtoMsg): QueryReportRequest {
    return QueryReportRequest.decode(message.value);
  },
  toProto(message: QueryReportRequest): Uint8Array {
    return QueryReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReportRequest): QueryReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryReportRequest",
      value: QueryReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReportResponse(): QueryReportResponse {
  return {
    report: Report.fromPartial({})
  };
}
/**
 * QueryReportResponse defines the QueryReportResponse message.
 * @name QueryReportResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportResponse
 */
export const QueryReportResponse = {
  typeUrl: "/sparkdream.service.v1.QueryReportResponse",
  encode(message: QueryReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report = Report.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReportResponse>): QueryReportResponse {
    const message = createBaseQueryReportResponse();
    message.report = object.report !== undefined && object.report !== null ? Report.fromPartial(object.report) : undefined;
    return message;
  },
  fromAmino(object: QueryReportResponseAmino): QueryReportResponse {
    const message = createBaseQueryReportResponse();
    if (object.report !== undefined && object.report !== null) {
      message.report = Report.fromAmino(object.report);
    }
    return message;
  },
  toAmino(message: QueryReportResponse): QueryReportResponseAmino {
    const obj: any = {};
    obj.report = message.report ? Report.toAmino(message.report) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportResponseAminoMsg): QueryReportResponse {
    return QueryReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportResponseProtoMsg): QueryReportResponse {
    return QueryReportResponse.decode(message.value);
  },
  toProto(message: QueryReportResponse): Uint8Array {
    return QueryReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReportResponse): QueryReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryReportResponse",
      value: QueryReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReportsByOperatorRequest(): QueryReportsByOperatorRequest {
  return {
    operatorAddress: "",
    serviceType: "",
    statusFilter: "",
    pagination: undefined
  };
}
/**
 * QueryReportsByOperatorRequest defines the QueryReportsByOperatorRequest message.
 * @name QueryReportsByOperatorRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportsByOperatorRequest
 */
export const QueryReportsByOperatorRequest = {
  typeUrl: "/sparkdream.service.v1.QueryReportsByOperatorRequest",
  encode(message: QueryReportsByOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.statusFilter !== "") {
      writer.uint32(26).string(message.statusFilter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReportsByOperatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportsByOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.statusFilter = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReportsByOperatorRequest>): QueryReportsByOperatorRequest {
    const message = createBaseQueryReportsByOperatorRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.statusFilter = object.statusFilter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryReportsByOperatorRequestAmino): QueryReportsByOperatorRequest {
    const message = createBaseQueryReportsByOperatorRequest();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.status_filter !== undefined && object.status_filter !== null) {
      message.statusFilter = object.status_filter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryReportsByOperatorRequest): QueryReportsByOperatorRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.status_filter = message.statusFilter === "" ? undefined : message.statusFilter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportsByOperatorRequestAminoMsg): QueryReportsByOperatorRequest {
    return QueryReportsByOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportsByOperatorRequestProtoMsg): QueryReportsByOperatorRequest {
    return QueryReportsByOperatorRequest.decode(message.value);
  },
  toProto(message: QueryReportsByOperatorRequest): Uint8Array {
    return QueryReportsByOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReportsByOperatorRequest): QueryReportsByOperatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryReportsByOperatorRequest",
      value: QueryReportsByOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReportsByOperatorResponse(): QueryReportsByOperatorResponse {
  return {
    reports: [],
    pagination: undefined
  };
}
/**
 * QueryReportsByOperatorResponse defines the QueryReportsByOperatorResponse message.
 * @name QueryReportsByOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryReportsByOperatorResponse
 */
export const QueryReportsByOperatorResponse = {
  typeUrl: "/sparkdream.service.v1.QueryReportsByOperatorResponse",
  encode(message: QueryReportsByOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReportsByOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportsByOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReportsByOperatorResponse>): QueryReportsByOperatorResponse {
    const message = createBaseQueryReportsByOperatorResponse();
    message.reports = object.reports?.map(e => Report.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryReportsByOperatorResponseAmino): QueryReportsByOperatorResponse {
    const message = createBaseQueryReportsByOperatorResponse();
    message.reports = object.reports?.map(e => Report.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryReportsByOperatorResponse): QueryReportsByOperatorResponseAmino {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map(e => e ? Report.toAmino(e) : undefined);
    } else {
      obj.reports = message.reports;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportsByOperatorResponseAminoMsg): QueryReportsByOperatorResponse {
    return QueryReportsByOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportsByOperatorResponseProtoMsg): QueryReportsByOperatorResponse {
    return QueryReportsByOperatorResponse.decode(message.value);
  },
  toProto(message: QueryReportsByOperatorResponse): Uint8Array {
    return QueryReportsByOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReportsByOperatorResponse): QueryReportsByOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryReportsByOperatorResponse",
      value: QueryReportsByOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorReputationSnapshotRequest(): QueryOperatorReputationSnapshotRequest {
  return {
    address: ""
  };
}
/**
 * QueryOperatorReputationSnapshotRequest defines the QueryOperatorReputationSnapshotRequest message.
 * @name QueryOperatorReputationSnapshotRequest
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorReputationSnapshotRequest
 */
export const QueryOperatorReputationSnapshotRequest = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorReputationSnapshotRequest",
  encode(message: QueryOperatorReputationSnapshotRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorReputationSnapshotRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorReputationSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorReputationSnapshotRequest>): QueryOperatorReputationSnapshotRequest {
    const message = createBaseQueryOperatorReputationSnapshotRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorReputationSnapshotRequestAmino): QueryOperatorReputationSnapshotRequest {
    const message = createBaseQueryOperatorReputationSnapshotRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryOperatorReputationSnapshotRequest): QueryOperatorReputationSnapshotRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorReputationSnapshotRequestAminoMsg): QueryOperatorReputationSnapshotRequest {
    return QueryOperatorReputationSnapshotRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorReputationSnapshotRequestProtoMsg): QueryOperatorReputationSnapshotRequest {
    return QueryOperatorReputationSnapshotRequest.decode(message.value);
  },
  toProto(message: QueryOperatorReputationSnapshotRequest): Uint8Array {
    return QueryOperatorReputationSnapshotRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorReputationSnapshotRequest): QueryOperatorReputationSnapshotRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorReputationSnapshotRequest",
      value: QueryOperatorReputationSnapshotRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorReputationSnapshotResponse(): QueryOperatorReputationSnapshotResponse {
  return {
    totalBondBlocks: "",
    effectiveBondBlocks: ""
  };
}
/**
 * QueryOperatorReputationSnapshotResponse returns aggregate bond-block
 * accrual for an address, settled at query time per §6.6.
 * @name QueryOperatorReputationSnapshotResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.QueryOperatorReputationSnapshotResponse
 */
export const QueryOperatorReputationSnapshotResponse = {
  typeUrl: "/sparkdream.service.v1.QueryOperatorReputationSnapshotResponse",
  encode(message: QueryOperatorReputationSnapshotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBondBlocks !== "") {
      writer.uint32(10).string(message.totalBondBlocks);
    }
    if (message.effectiveBondBlocks !== "") {
      writer.uint32(18).string(message.effectiveBondBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorReputationSnapshotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorReputationSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBondBlocks = reader.string();
          break;
        case 2:
          message.effectiveBondBlocks = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorReputationSnapshotResponse>): QueryOperatorReputationSnapshotResponse {
    const message = createBaseQueryOperatorReputationSnapshotResponse();
    message.totalBondBlocks = object.totalBondBlocks ?? "";
    message.effectiveBondBlocks = object.effectiveBondBlocks ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorReputationSnapshotResponseAmino): QueryOperatorReputationSnapshotResponse {
    const message = createBaseQueryOperatorReputationSnapshotResponse();
    if (object.total_bond_blocks !== undefined && object.total_bond_blocks !== null) {
      message.totalBondBlocks = object.total_bond_blocks;
    }
    if (object.effective_bond_blocks !== undefined && object.effective_bond_blocks !== null) {
      message.effectiveBondBlocks = object.effective_bond_blocks;
    }
    return message;
  },
  toAmino(message: QueryOperatorReputationSnapshotResponse): QueryOperatorReputationSnapshotResponseAmino {
    const obj: any = {};
    obj.total_bond_blocks = message.totalBondBlocks === "" ? undefined : message.totalBondBlocks;
    obj.effective_bond_blocks = message.effectiveBondBlocks === "" ? undefined : message.effectiveBondBlocks;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorReputationSnapshotResponseAminoMsg): QueryOperatorReputationSnapshotResponse {
    return QueryOperatorReputationSnapshotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorReputationSnapshotResponseProtoMsg): QueryOperatorReputationSnapshotResponse {
    return QueryOperatorReputationSnapshotResponse.decode(message.value);
  },
  toProto(message: QueryOperatorReputationSnapshotResponse): Uint8Array {
    return QueryOperatorReputationSnapshotResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorReputationSnapshotResponse): QueryOperatorReputationSnapshotResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.QueryOperatorReputationSnapshotResponse",
      value: QueryOperatorReputationSnapshotResponse.encode(message).finish()
    };
  }
};