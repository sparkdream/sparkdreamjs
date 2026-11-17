//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { RequestStatus, Backend, BackendAmino, ApprovedOperator, ApprovedOperatorAmino, ApprovedScanner, ApprovedScannerAmino, Counter, CounterAmino, Request, RequestAmino, RemovedHash, RemovedHashAmino, Source, SourceAmino } from "./storage";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryBackendRequest defines the QueryBackendRequest message.
 * @name QueryBackendRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendRequest
 */
export interface QueryBackendRequest {
  name: string;
}
export interface QueryBackendRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryBackendRequest";
  value: Uint8Array;
}
/**
 * QueryBackendRequest defines the QueryBackendRequest message.
 * @name QueryBackendRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendRequest
 */
export interface QueryBackendRequestAmino {
  name?: string;
}
export interface QueryBackendRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryBackendRequest";
  value: QueryBackendRequestAmino;
}
/**
 * QueryBackendResponse defines the QueryBackendResponse message.
 * @name QueryBackendResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendResponse
 */
export interface QueryBackendResponse {
  backend: Backend;
}
export interface QueryBackendResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryBackendResponse";
  value: Uint8Array;
}
/**
 * QueryBackendResponse defines the QueryBackendResponse message.
 * @name QueryBackendResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendResponse
 */
export interface QueryBackendResponseAmino {
  backend?: BackendAmino;
}
export interface QueryBackendResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryBackendResponse";
  value: QueryBackendResponseAmino;
}
/**
 * QueryBackendsRequest defines the QueryBackendsRequest message.
 * @name QueryBackendsRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendsRequest
 */
export interface QueryBackendsRequest {
  pagination?: PageRequest;
}
export interface QueryBackendsRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryBackendsRequest";
  value: Uint8Array;
}
/**
 * QueryBackendsRequest defines the QueryBackendsRequest message.
 * @name QueryBackendsRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendsRequest
 */
export interface QueryBackendsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryBackendsRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryBackendsRequest";
  value: QueryBackendsRequestAmino;
}
/**
 * QueryBackendsResponse defines the QueryBackendsResponse message.
 * @name QueryBackendsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendsResponse
 */
export interface QueryBackendsResponse {
  backends: Backend[];
  pagination?: PageResponse;
}
export interface QueryBackendsResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryBackendsResponse";
  value: Uint8Array;
}
/**
 * QueryBackendsResponse defines the QueryBackendsResponse message.
 * @name QueryBackendsResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendsResponse
 */
export interface QueryBackendsResponseAmino {
  backends?: BackendAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBackendsResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryBackendsResponse";
  value: QueryBackendsResponseAmino;
}
/**
 * QueryApprovedOperatorsRequest defines the QueryApprovedOperatorsRequest message.
 * @name QueryApprovedOperatorsRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedOperatorsRequest
 */
export interface QueryApprovedOperatorsRequest {
  backend: string;
  pagination?: PageRequest;
}
export interface QueryApprovedOperatorsRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedOperatorsRequest";
  value: Uint8Array;
}
/**
 * QueryApprovedOperatorsRequest defines the QueryApprovedOperatorsRequest message.
 * @name QueryApprovedOperatorsRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedOperatorsRequest
 */
export interface QueryApprovedOperatorsRequestAmino {
  backend?: string;
  pagination?: PageRequestAmino;
}
export interface QueryApprovedOperatorsRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryApprovedOperatorsRequest";
  value: QueryApprovedOperatorsRequestAmino;
}
/**
 * QueryApprovedOperatorsResponse defines the QueryApprovedOperatorsResponse message.
 * @name QueryApprovedOperatorsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedOperatorsResponse
 */
export interface QueryApprovedOperatorsResponse {
  operators: ApprovedOperator[];
  pagination?: PageResponse;
}
export interface QueryApprovedOperatorsResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryApprovedOperatorsResponse defines the QueryApprovedOperatorsResponse message.
 * @name QueryApprovedOperatorsResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedOperatorsResponse
 */
export interface QueryApprovedOperatorsResponseAmino {
  operators?: ApprovedOperatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryApprovedOperatorsResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryApprovedOperatorsResponse";
  value: QueryApprovedOperatorsResponseAmino;
}
/**
 * QueryApprovedScannersRequest defines the QueryApprovedScannersRequest message.
 * @name QueryApprovedScannersRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedScannersRequest
 */
export interface QueryApprovedScannersRequest {
  pagination?: PageRequest;
}
export interface QueryApprovedScannersRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedScannersRequest";
  value: Uint8Array;
}
/**
 * QueryApprovedScannersRequest defines the QueryApprovedScannersRequest message.
 * @name QueryApprovedScannersRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedScannersRequest
 */
export interface QueryApprovedScannersRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryApprovedScannersRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryApprovedScannersRequest";
  value: QueryApprovedScannersRequestAmino;
}
/**
 * QueryApprovedScannersResponse defines the QueryApprovedScannersResponse message.
 * @name QueryApprovedScannersResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedScannersResponse
 */
export interface QueryApprovedScannersResponse {
  scanners: ApprovedScanner[];
  pagination?: PageResponse;
}
export interface QueryApprovedScannersResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedScannersResponse";
  value: Uint8Array;
}
/**
 * QueryApprovedScannersResponse defines the QueryApprovedScannersResponse message.
 * @name QueryApprovedScannersResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedScannersResponse
 */
export interface QueryApprovedScannersResponseAmino {
  scanners?: ApprovedScannerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryApprovedScannersResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryApprovedScannersResponse";
  value: QueryApprovedScannersResponseAmino;
}
/**
 * QueryOperatorStandingRequest defines the QueryOperatorStandingRequest message.
 * @name QueryOperatorStandingRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryOperatorStandingRequest
 */
export interface QueryOperatorStandingRequest {
  backend: string;
  operator: string;
}
export interface QueryOperatorStandingRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryOperatorStandingRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorStandingRequest defines the QueryOperatorStandingRequest message.
 * @name QueryOperatorStandingRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryOperatorStandingRequest
 */
export interface QueryOperatorStandingRequestAmino {
  backend?: string;
  operator?: string;
}
export interface QueryOperatorStandingRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryOperatorStandingRequest";
  value: QueryOperatorStandingRequestAmino;
}
/**
 * QueryOperatorStandingResponse defines the QueryOperatorStandingResponse message.
 * @name QueryOperatorStandingResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryOperatorStandingResponse
 */
export interface QueryOperatorStandingResponse {
  approved: boolean;
  canClaim: boolean;
  reason: string;
  openClaims: number;
  lapses: Counter;
  mismatchDeclines: Counter;
  unreachableDeclines: Counter;
  completions: Counter;
}
export interface QueryOperatorStandingResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryOperatorStandingResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorStandingResponse defines the QueryOperatorStandingResponse message.
 * @name QueryOperatorStandingResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryOperatorStandingResponse
 */
export interface QueryOperatorStandingResponseAmino {
  approved?: boolean;
  can_claim?: boolean;
  reason?: string;
  open_claims?: number;
  lapses?: CounterAmino;
  mismatch_declines?: CounterAmino;
  unreachable_declines?: CounterAmino;
  completions?: CounterAmino;
}
export interface QueryOperatorStandingResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryOperatorStandingResponse";
  value: QueryOperatorStandingResponseAmino;
}
/**
 * QueryRequestRequest defines the QueryRequestRequest message.
 * @name QueryRequestRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestRequest
 */
export interface QueryRequestRequest {
  id: bigint;
}
export interface QueryRequestRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestRequest";
  value: Uint8Array;
}
/**
 * QueryRequestRequest defines the QueryRequestRequest message.
 * @name QueryRequestRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestRequest
 */
export interface QueryRequestRequestAmino {
  id?: string;
}
export interface QueryRequestRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestRequest";
  value: QueryRequestRequestAmino;
}
/**
 * QueryRequestResponse defines the QueryRequestResponse message.
 * @name QueryRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestResponse
 */
export interface QueryRequestResponse {
  request: Request;
  /**
   * withheld: the hash is flagged as removed content, so the request's source
   * addresses and locators are returned empty.
   */
  withheld: boolean;
}
export interface QueryRequestResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestResponse";
  value: Uint8Array;
}
/**
 * QueryRequestResponse defines the QueryRequestResponse message.
 * @name QueryRequestResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestResponse
 */
export interface QueryRequestResponseAmino {
  request?: RequestAmino;
  /**
   * withheld: the hash is flagged as removed content, so the request's source
   * addresses and locators are returned empty.
   */
  withheld?: boolean;
}
export interface QueryRequestResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestResponse";
  value: QueryRequestResponseAmino;
}
/**
 * QueryRequestByHashRequest defines the QueryRequestByHashRequest message.
 * @name QueryRequestByHashRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestByHashRequest
 */
export interface QueryRequestByHashRequest {
  backend: string;
  sha256: string;
}
export interface QueryRequestByHashRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestByHashRequest";
  value: Uint8Array;
}
/**
 * QueryRequestByHashRequest defines the QueryRequestByHashRequest message.
 * @name QueryRequestByHashRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestByHashRequest
 */
export interface QueryRequestByHashRequestAmino {
  backend?: string;
  sha256?: string;
}
export interface QueryRequestByHashRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestByHashRequest";
  value: QueryRequestByHashRequestAmino;
}
/**
 * QueryRequestByHashResponse defines the QueryRequestByHashResponse message.
 * @name QueryRequestByHashResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestByHashResponse
 */
export interface QueryRequestByHashResponse {
  request: Request;
  /**
   * withheld: the hash is flagged as removed content, so the request's source
   * addresses and locators are returned empty.
   */
  withheld: boolean;
}
export interface QueryRequestByHashResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestByHashResponse";
  value: Uint8Array;
}
/**
 * QueryRequestByHashResponse defines the QueryRequestByHashResponse message.
 * @name QueryRequestByHashResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestByHashResponse
 */
export interface QueryRequestByHashResponseAmino {
  request?: RequestAmino;
  /**
   * withheld: the hash is flagged as removed content, so the request's source
   * addresses and locators are returned empty.
   */
  withheld?: boolean;
}
export interface QueryRequestByHashResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestByHashResponse";
  value: QueryRequestByHashResponseAmino;
}
/**
 * QueryRequestsByStatusRequest defines the QueryRequestsByStatusRequest message.
 * @name QueryRequestsByStatusRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByStatusRequest
 */
export interface QueryRequestsByStatusRequest {
  backend: string;
  status: RequestStatus;
  pagination?: PageRequest;
}
export interface QueryRequestsByStatusRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByStatusRequest";
  value: Uint8Array;
}
/**
 * QueryRequestsByStatusRequest defines the QueryRequestsByStatusRequest message.
 * @name QueryRequestsByStatusRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByStatusRequest
 */
export interface QueryRequestsByStatusRequestAmino {
  backend?: string;
  status?: RequestStatus;
  pagination?: PageRequestAmino;
}
export interface QueryRequestsByStatusRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestsByStatusRequest";
  value: QueryRequestsByStatusRequestAmino;
}
/**
 * QueryRequestsByStatusResponse defines the QueryRequestsByStatusResponse message.
 * @name QueryRequestsByStatusResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByStatusResponse
 */
export interface QueryRequestsByStatusResponse {
  requests: Request[];
  pagination?: PageResponse;
  /**
   * withheld_ids lists the requests on this page whose hash is flagged as
   * removed content: their source addresses and locators are returned empty.
   */
  withheldIds: bigint[];
}
export interface QueryRequestsByStatusResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByStatusResponse";
  value: Uint8Array;
}
/**
 * QueryRequestsByStatusResponse defines the QueryRequestsByStatusResponse message.
 * @name QueryRequestsByStatusResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByStatusResponse
 */
export interface QueryRequestsByStatusResponseAmino {
  requests?: RequestAmino[];
  pagination?: PageResponseAmino;
  /**
   * withheld_ids lists the requests on this page whose hash is flagged as
   * removed content: their source addresses and locators are returned empty.
   */
  withheld_ids?: string[];
}
export interface QueryRequestsByStatusResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestsByStatusResponse";
  value: QueryRequestsByStatusResponseAmino;
}
/**
 * QueryRequestsByRequesterRequest defines the QueryRequestsByRequesterRequest message.
 * @name QueryRequestsByRequesterRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByRequesterRequest
 */
export interface QueryRequestsByRequesterRequest {
  requester: string;
  pagination?: PageRequest;
}
export interface QueryRequestsByRequesterRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByRequesterRequest";
  value: Uint8Array;
}
/**
 * QueryRequestsByRequesterRequest defines the QueryRequestsByRequesterRequest message.
 * @name QueryRequestsByRequesterRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByRequesterRequest
 */
export interface QueryRequestsByRequesterRequestAmino {
  requester?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRequestsByRequesterRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestsByRequesterRequest";
  value: QueryRequestsByRequesterRequestAmino;
}
/**
 * QueryRequestsByRequesterResponse defines the QueryRequestsByRequesterResponse message.
 * @name QueryRequestsByRequesterResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByRequesterResponse
 */
export interface QueryRequestsByRequesterResponse {
  requests: Request[];
  pagination?: PageResponse;
  /**
   * withheld_ids lists the requests on this page whose hash is flagged as
   * removed content: their source addresses and locators are returned empty.
   */
  withheldIds: bigint[];
}
export interface QueryRequestsByRequesterResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByRequesterResponse";
  value: Uint8Array;
}
/**
 * QueryRequestsByRequesterResponse defines the QueryRequestsByRequesterResponse message.
 * @name QueryRequestsByRequesterResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByRequesterResponse
 */
export interface QueryRequestsByRequesterResponseAmino {
  requests?: RequestAmino[];
  pagination?: PageResponseAmino;
  /**
   * withheld_ids lists the requests on this page whose hash is flagged as
   * removed content: their source addresses and locators are returned empty.
   */
  withheld_ids?: string[];
}
export interface QueryRequestsByRequesterResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestsByRequesterResponse";
  value: QueryRequestsByRequesterResponseAmino;
}
/**
 * QueryRequestsByOperatorRequest defines the QueryRequestsByOperatorRequest message.
 * @name QueryRequestsByOperatorRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByOperatorRequest
 */
export interface QueryRequestsByOperatorRequest {
  operator: string;
  pagination?: PageRequest;
}
export interface QueryRequestsByOperatorRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByOperatorRequest";
  value: Uint8Array;
}
/**
 * QueryRequestsByOperatorRequest defines the QueryRequestsByOperatorRequest message.
 * @name QueryRequestsByOperatorRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByOperatorRequest
 */
export interface QueryRequestsByOperatorRequestAmino {
  operator?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRequestsByOperatorRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestsByOperatorRequest";
  value: QueryRequestsByOperatorRequestAmino;
}
/**
 * QueryRequestsByOperatorResponse defines the QueryRequestsByOperatorResponse message.
 * @name QueryRequestsByOperatorResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByOperatorResponse
 */
export interface QueryRequestsByOperatorResponse {
  requests: Request[];
  pagination?: PageResponse;
  /**
   * withheld_ids lists the requests on this page whose hash is flagged as
   * removed content: their source addresses and locators are returned empty.
   */
  withheldIds: bigint[];
}
export interface QueryRequestsByOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByOperatorResponse";
  value: Uint8Array;
}
/**
 * QueryRequestsByOperatorResponse defines the QueryRequestsByOperatorResponse message.
 * @name QueryRequestsByOperatorResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByOperatorResponse
 */
export interface QueryRequestsByOperatorResponseAmino {
  requests?: RequestAmino[];
  pagination?: PageResponseAmino;
  /**
   * withheld_ids lists the requests on this page whose hash is flagged as
   * removed content: their source addresses and locators are returned empty.
   */
  withheld_ids?: string[];
}
export interface QueryRequestsByOperatorResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestsByOperatorResponse";
  value: QueryRequestsByOperatorResponseAmino;
}
/**
 * QueryRemovedHashRequest defines the QueryRemovedHashRequest message.
 * @name QueryRemovedHashRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRemovedHashRequest
 */
export interface QueryRemovedHashRequest {
  sha256: string;
}
export interface QueryRemovedHashRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRemovedHashRequest";
  value: Uint8Array;
}
/**
 * QueryRemovedHashRequest defines the QueryRemovedHashRequest message.
 * @name QueryRemovedHashRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRemovedHashRequest
 */
export interface QueryRemovedHashRequestAmino {
  sha256?: string;
}
export interface QueryRemovedHashRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRemovedHashRequest";
  value: QueryRemovedHashRequestAmino;
}
/**
 * QueryRemovedHashResponse defines the QueryRemovedHashResponse message.
 * @name QueryRemovedHashResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRemovedHashResponse
 */
export interface QueryRemovedHashResponse {
  removedHash: RemovedHash;
}
export interface QueryRemovedHashResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRemovedHashResponse";
  value: Uint8Array;
}
/**
 * QueryRemovedHashResponse defines the QueryRemovedHashResponse message.
 * @name QueryRemovedHashResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRemovedHashResponse
 */
export interface QueryRemovedHashResponseAmino {
  removed_hash?: RemovedHashAmino;
}
export interface QueryRemovedHashResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRemovedHashResponse";
  value: QueryRemovedHashResponseAmino;
}
/**
 * QueryQuoteFeeRequest defines the QueryQuoteFeeRequest message.
 * @name QueryQuoteFeeRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryQuoteFeeRequest
 */
export interface QueryQuoteFeeRequest {
  backend: string;
  contentType: string;
  sizeBytes: bigint;
}
export interface QueryQuoteFeeRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryQuoteFeeRequest";
  value: Uint8Array;
}
/**
 * QueryQuoteFeeRequest defines the QueryQuoteFeeRequest message.
 * @name QueryQuoteFeeRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryQuoteFeeRequest
 */
export interface QueryQuoteFeeRequestAmino {
  backend?: string;
  content_type?: string;
  size_bytes?: string;
}
export interface QueryQuoteFeeRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryQuoteFeeRequest";
  value: QueryQuoteFeeRequestAmino;
}
/**
 * QueryQuoteFeeResponse defines the QueryQuoteFeeResponse message.
 * @name QueryQuoteFeeResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryQuoteFeeResponse
 */
export interface QueryQuoteFeeResponse {
  copyFee: string;
  requestFee: string;
  total: string;
}
export interface QueryQuoteFeeResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryQuoteFeeResponse";
  value: Uint8Array;
}
/**
 * QueryQuoteFeeResponse defines the QueryQuoteFeeResponse message.
 * @name QueryQuoteFeeResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryQuoteFeeResponse
 */
export interface QueryQuoteFeeResponseAmino {
  copy_fee?: string;
  request_fee?: string;
  total?: string;
}
export interface QueryQuoteFeeResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryQuoteFeeResponse";
  value: QueryQuoteFeeResponseAmino;
}
/**
 * QueryRequestLocationRequest defines the QueryRequestLocationRequest message.
 * @name QueryRequestLocationRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestLocationRequest
 */
export interface QueryRequestLocationRequest {
  id: bigint;
}
export interface QueryRequestLocationRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestLocationRequest";
  value: Uint8Array;
}
/**
 * QueryRequestLocationRequest defines the QueryRequestLocationRequest message.
 * @name QueryRequestLocationRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestLocationRequest
 */
export interface QueryRequestLocationRequestAmino {
  id?: string;
}
export interface QueryRequestLocationRequestAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestLocationRequest";
  value: QueryRequestLocationRequestAmino;
}
/**
 * QueryRequestLocationResponse defines the QueryRequestLocationResponse message.
 * @name QueryRequestLocationResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestLocationResponse
 */
export interface QueryRequestLocationResponse {
  sources: Source[];
  locator: string;
  verdictsLocator: string;
  flagged: boolean;
}
export interface QueryRequestLocationResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.QueryRequestLocationResponse";
  value: Uint8Array;
}
/**
 * QueryRequestLocationResponse defines the QueryRequestLocationResponse message.
 * @name QueryRequestLocationResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestLocationResponse
 */
export interface QueryRequestLocationResponseAmino {
  sources?: SourceAmino[];
  locator?: string;
  verdicts_locator?: string;
  flagged?: boolean;
}
export interface QueryRequestLocationResponseAminoMsg {
  type: "/sparkdream.storage.v1.QueryRequestLocationResponse";
  value: QueryRequestLocationResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.storage.v1.QueryParamsRequest",
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
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.storage.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBackendRequest(): QueryBackendRequest {
  return {
    name: ""
  };
}
/**
 * QueryBackendRequest defines the QueryBackendRequest message.
 * @name QueryBackendRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendRequest
 */
export const QueryBackendRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryBackendRequest",
  encode(message: QueryBackendRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBackendRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBackendRequest>): QueryBackendRequest {
    const message = createBaseQueryBackendRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryBackendRequestAmino): QueryBackendRequest {
    const message = createBaseQueryBackendRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryBackendRequest): QueryBackendRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryBackendRequestAminoMsg): QueryBackendRequest {
    return QueryBackendRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBackendRequestProtoMsg): QueryBackendRequest {
    return QueryBackendRequest.decode(message.value);
  },
  toProto(message: QueryBackendRequest): Uint8Array {
    return QueryBackendRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBackendRequest): QueryBackendRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryBackendRequest",
      value: QueryBackendRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBackendResponse(): QueryBackendResponse {
  return {
    backend: Backend.fromPartial({})
  };
}
/**
 * QueryBackendResponse defines the QueryBackendResponse message.
 * @name QueryBackendResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendResponse
 */
export const QueryBackendResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryBackendResponse",
  encode(message: QueryBackendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBackendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBackendResponse>): QueryBackendResponse {
    const message = createBaseQueryBackendResponse();
    message.backend = object.backend !== undefined && object.backend !== null ? Backend.fromPartial(object.backend) : undefined;
    return message;
  },
  fromAmino(object: QueryBackendResponseAmino): QueryBackendResponse {
    const message = createBaseQueryBackendResponse();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = Backend.fromAmino(object.backend);
    }
    return message;
  },
  toAmino(message: QueryBackendResponse): QueryBackendResponseAmino {
    const obj: any = {};
    obj.backend = message.backend ? Backend.toAmino(message.backend) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBackendResponseAminoMsg): QueryBackendResponse {
    return QueryBackendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBackendResponseProtoMsg): QueryBackendResponse {
    return QueryBackendResponse.decode(message.value);
  },
  toProto(message: QueryBackendResponse): Uint8Array {
    return QueryBackendResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBackendResponse): QueryBackendResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryBackendResponse",
      value: QueryBackendResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBackendsRequest(): QueryBackendsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryBackendsRequest defines the QueryBackendsRequest message.
 * @name QueryBackendsRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendsRequest
 */
export const QueryBackendsRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryBackendsRequest",
  encode(message: QueryBackendsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBackendsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackendsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBackendsRequest>): QueryBackendsRequest {
    const message = createBaseQueryBackendsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBackendsRequestAmino): QueryBackendsRequest {
    const message = createBaseQueryBackendsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBackendsRequest): QueryBackendsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBackendsRequestAminoMsg): QueryBackendsRequest {
    return QueryBackendsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBackendsRequestProtoMsg): QueryBackendsRequest {
    return QueryBackendsRequest.decode(message.value);
  },
  toProto(message: QueryBackendsRequest): Uint8Array {
    return QueryBackendsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBackendsRequest): QueryBackendsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryBackendsRequest",
      value: QueryBackendsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBackendsResponse(): QueryBackendsResponse {
  return {
    backends: [],
    pagination: undefined
  };
}
/**
 * QueryBackendsResponse defines the QueryBackendsResponse message.
 * @name QueryBackendsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryBackendsResponse
 */
export const QueryBackendsResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryBackendsResponse",
  encode(message: QueryBackendsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.backends) {
      Backend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBackendsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backends.push(Backend.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryBackendsResponse>): QueryBackendsResponse {
    const message = createBaseQueryBackendsResponse();
    message.backends = object.backends?.map(e => Backend.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBackendsResponseAmino): QueryBackendsResponse {
    const message = createBaseQueryBackendsResponse();
    message.backends = object.backends?.map(e => Backend.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBackendsResponse): QueryBackendsResponseAmino {
    const obj: any = {};
    if (message.backends) {
      obj.backends = message.backends.map(e => e ? Backend.toAmino(e) : undefined);
    } else {
      obj.backends = message.backends;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBackendsResponseAminoMsg): QueryBackendsResponse {
    return QueryBackendsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBackendsResponseProtoMsg): QueryBackendsResponse {
    return QueryBackendsResponse.decode(message.value);
  },
  toProto(message: QueryBackendsResponse): Uint8Array {
    return QueryBackendsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBackendsResponse): QueryBackendsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryBackendsResponse",
      value: QueryBackendsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryApprovedOperatorsRequest(): QueryApprovedOperatorsRequest {
  return {
    backend: "",
    pagination: undefined
  };
}
/**
 * QueryApprovedOperatorsRequest defines the QueryApprovedOperatorsRequest message.
 * @name QueryApprovedOperatorsRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedOperatorsRequest
 */
export const QueryApprovedOperatorsRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedOperatorsRequest",
  encode(message: QueryApprovedOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== "") {
      writer.uint32(10).string(message.backend);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryApprovedOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovedOperatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = reader.string();
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
  fromPartial(object: DeepPartial<QueryApprovedOperatorsRequest>): QueryApprovedOperatorsRequest {
    const message = createBaseQueryApprovedOperatorsRequest();
    message.backend = object.backend ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryApprovedOperatorsRequestAmino): QueryApprovedOperatorsRequest {
    const message = createBaseQueryApprovedOperatorsRequest();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryApprovedOperatorsRequest): QueryApprovedOperatorsRequestAmino {
    const obj: any = {};
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryApprovedOperatorsRequestAminoMsg): QueryApprovedOperatorsRequest {
    return QueryApprovedOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryApprovedOperatorsRequestProtoMsg): QueryApprovedOperatorsRequest {
    return QueryApprovedOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryApprovedOperatorsRequest): Uint8Array {
    return QueryApprovedOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryApprovedOperatorsRequest): QueryApprovedOperatorsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryApprovedOperatorsRequest",
      value: QueryApprovedOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryApprovedOperatorsResponse(): QueryApprovedOperatorsResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
/**
 * QueryApprovedOperatorsResponse defines the QueryApprovedOperatorsResponse message.
 * @name QueryApprovedOperatorsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedOperatorsResponse
 */
export const QueryApprovedOperatorsResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedOperatorsResponse",
  encode(message: QueryApprovedOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      ApprovedOperator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryApprovedOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovedOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(ApprovedOperator.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryApprovedOperatorsResponse>): QueryApprovedOperatorsResponse {
    const message = createBaseQueryApprovedOperatorsResponse();
    message.operators = object.operators?.map(e => ApprovedOperator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryApprovedOperatorsResponseAmino): QueryApprovedOperatorsResponse {
    const message = createBaseQueryApprovedOperatorsResponse();
    message.operators = object.operators?.map(e => ApprovedOperator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryApprovedOperatorsResponse): QueryApprovedOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? ApprovedOperator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryApprovedOperatorsResponseAminoMsg): QueryApprovedOperatorsResponse {
    return QueryApprovedOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryApprovedOperatorsResponseProtoMsg): QueryApprovedOperatorsResponse {
    return QueryApprovedOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryApprovedOperatorsResponse): Uint8Array {
    return QueryApprovedOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryApprovedOperatorsResponse): QueryApprovedOperatorsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryApprovedOperatorsResponse",
      value: QueryApprovedOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryApprovedScannersRequest(): QueryApprovedScannersRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryApprovedScannersRequest defines the QueryApprovedScannersRequest message.
 * @name QueryApprovedScannersRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedScannersRequest
 */
export const QueryApprovedScannersRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedScannersRequest",
  encode(message: QueryApprovedScannersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryApprovedScannersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovedScannersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryApprovedScannersRequest>): QueryApprovedScannersRequest {
    const message = createBaseQueryApprovedScannersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryApprovedScannersRequestAmino): QueryApprovedScannersRequest {
    const message = createBaseQueryApprovedScannersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryApprovedScannersRequest): QueryApprovedScannersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryApprovedScannersRequestAminoMsg): QueryApprovedScannersRequest {
    return QueryApprovedScannersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryApprovedScannersRequestProtoMsg): QueryApprovedScannersRequest {
    return QueryApprovedScannersRequest.decode(message.value);
  },
  toProto(message: QueryApprovedScannersRequest): Uint8Array {
    return QueryApprovedScannersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryApprovedScannersRequest): QueryApprovedScannersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryApprovedScannersRequest",
      value: QueryApprovedScannersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryApprovedScannersResponse(): QueryApprovedScannersResponse {
  return {
    scanners: [],
    pagination: undefined
  };
}
/**
 * QueryApprovedScannersResponse defines the QueryApprovedScannersResponse message.
 * @name QueryApprovedScannersResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryApprovedScannersResponse
 */
export const QueryApprovedScannersResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryApprovedScannersResponse",
  encode(message: QueryApprovedScannersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scanners) {
      ApprovedScanner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryApprovedScannersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovedScannersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanners.push(ApprovedScanner.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryApprovedScannersResponse>): QueryApprovedScannersResponse {
    const message = createBaseQueryApprovedScannersResponse();
    message.scanners = object.scanners?.map(e => ApprovedScanner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryApprovedScannersResponseAmino): QueryApprovedScannersResponse {
    const message = createBaseQueryApprovedScannersResponse();
    message.scanners = object.scanners?.map(e => ApprovedScanner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryApprovedScannersResponse): QueryApprovedScannersResponseAmino {
    const obj: any = {};
    if (message.scanners) {
      obj.scanners = message.scanners.map(e => e ? ApprovedScanner.toAmino(e) : undefined);
    } else {
      obj.scanners = message.scanners;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryApprovedScannersResponseAminoMsg): QueryApprovedScannersResponse {
    return QueryApprovedScannersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryApprovedScannersResponseProtoMsg): QueryApprovedScannersResponse {
    return QueryApprovedScannersResponse.decode(message.value);
  },
  toProto(message: QueryApprovedScannersResponse): Uint8Array {
    return QueryApprovedScannersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryApprovedScannersResponse): QueryApprovedScannersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryApprovedScannersResponse",
      value: QueryApprovedScannersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorStandingRequest(): QueryOperatorStandingRequest {
  return {
    backend: "",
    operator: ""
  };
}
/**
 * QueryOperatorStandingRequest defines the QueryOperatorStandingRequest message.
 * @name QueryOperatorStandingRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryOperatorStandingRequest
 */
export const QueryOperatorStandingRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryOperatorStandingRequest",
  encode(message: QueryOperatorStandingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== "") {
      writer.uint32(10).string(message.backend);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorStandingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorStandingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorStandingRequest>): QueryOperatorStandingRequest {
    const message = createBaseQueryOperatorStandingRequest();
    message.backend = object.backend ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorStandingRequestAmino): QueryOperatorStandingRequest {
    const message = createBaseQueryOperatorStandingRequest();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: QueryOperatorStandingRequest): QueryOperatorStandingRequestAmino {
    const obj: any = {};
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorStandingRequestAminoMsg): QueryOperatorStandingRequest {
    return QueryOperatorStandingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorStandingRequestProtoMsg): QueryOperatorStandingRequest {
    return QueryOperatorStandingRequest.decode(message.value);
  },
  toProto(message: QueryOperatorStandingRequest): Uint8Array {
    return QueryOperatorStandingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorStandingRequest): QueryOperatorStandingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryOperatorStandingRequest",
      value: QueryOperatorStandingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorStandingResponse(): QueryOperatorStandingResponse {
  return {
    approved: false,
    canClaim: false,
    reason: "",
    openClaims: 0,
    lapses: Counter.fromPartial({}),
    mismatchDeclines: Counter.fromPartial({}),
    unreachableDeclines: Counter.fromPartial({}),
    completions: Counter.fromPartial({})
  };
}
/**
 * QueryOperatorStandingResponse defines the QueryOperatorStandingResponse message.
 * @name QueryOperatorStandingResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryOperatorStandingResponse
 */
export const QueryOperatorStandingResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryOperatorStandingResponse",
  encode(message: QueryOperatorStandingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.approved === true) {
      writer.uint32(8).bool(message.approved);
    }
    if (message.canClaim === true) {
      writer.uint32(16).bool(message.canClaim);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.openClaims !== 0) {
      writer.uint32(32).uint32(message.openClaims);
    }
    if (message.lapses !== undefined) {
      Counter.encode(message.lapses, writer.uint32(42).fork()).ldelim();
    }
    if (message.mismatchDeclines !== undefined) {
      Counter.encode(message.mismatchDeclines, writer.uint32(50).fork()).ldelim();
    }
    if (message.unreachableDeclines !== undefined) {
      Counter.encode(message.unreachableDeclines, writer.uint32(58).fork()).ldelim();
    }
    if (message.completions !== undefined) {
      Counter.encode(message.completions, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorStandingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorStandingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approved = reader.bool();
          break;
        case 2:
          message.canClaim = reader.bool();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.openClaims = reader.uint32();
          break;
        case 5:
          message.lapses = Counter.decode(reader, reader.uint32());
          break;
        case 6:
          message.mismatchDeclines = Counter.decode(reader, reader.uint32());
          break;
        case 7:
          message.unreachableDeclines = Counter.decode(reader, reader.uint32());
          break;
        case 8:
          message.completions = Counter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOperatorStandingResponse>): QueryOperatorStandingResponse {
    const message = createBaseQueryOperatorStandingResponse();
    message.approved = object.approved ?? false;
    message.canClaim = object.canClaim ?? false;
    message.reason = object.reason ?? "";
    message.openClaims = object.openClaims ?? 0;
    message.lapses = object.lapses !== undefined && object.lapses !== null ? Counter.fromPartial(object.lapses) : undefined;
    message.mismatchDeclines = object.mismatchDeclines !== undefined && object.mismatchDeclines !== null ? Counter.fromPartial(object.mismatchDeclines) : undefined;
    message.unreachableDeclines = object.unreachableDeclines !== undefined && object.unreachableDeclines !== null ? Counter.fromPartial(object.unreachableDeclines) : undefined;
    message.completions = object.completions !== undefined && object.completions !== null ? Counter.fromPartial(object.completions) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorStandingResponseAmino): QueryOperatorStandingResponse {
    const message = createBaseQueryOperatorStandingResponse();
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    if (object.can_claim !== undefined && object.can_claim !== null) {
      message.canClaim = object.can_claim;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.open_claims !== undefined && object.open_claims !== null) {
      message.openClaims = object.open_claims;
    }
    if (object.lapses !== undefined && object.lapses !== null) {
      message.lapses = Counter.fromAmino(object.lapses);
    }
    if (object.mismatch_declines !== undefined && object.mismatch_declines !== null) {
      message.mismatchDeclines = Counter.fromAmino(object.mismatch_declines);
    }
    if (object.unreachable_declines !== undefined && object.unreachable_declines !== null) {
      message.unreachableDeclines = Counter.fromAmino(object.unreachable_declines);
    }
    if (object.completions !== undefined && object.completions !== null) {
      message.completions = Counter.fromAmino(object.completions);
    }
    return message;
  },
  toAmino(message: QueryOperatorStandingResponse): QueryOperatorStandingResponseAmino {
    const obj: any = {};
    obj.approved = message.approved === false ? undefined : message.approved;
    obj.can_claim = message.canClaim === false ? undefined : message.canClaim;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.open_claims = message.openClaims === 0 ? undefined : message.openClaims;
    obj.lapses = message.lapses ? Counter.toAmino(message.lapses) : undefined;
    obj.mismatch_declines = message.mismatchDeclines ? Counter.toAmino(message.mismatchDeclines) : undefined;
    obj.unreachable_declines = message.unreachableDeclines ? Counter.toAmino(message.unreachableDeclines) : undefined;
    obj.completions = message.completions ? Counter.toAmino(message.completions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorStandingResponseAminoMsg): QueryOperatorStandingResponse {
    return QueryOperatorStandingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorStandingResponseProtoMsg): QueryOperatorStandingResponse {
    return QueryOperatorStandingResponse.decode(message.value);
  },
  toProto(message: QueryOperatorStandingResponse): Uint8Array {
    return QueryOperatorStandingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorStandingResponse): QueryOperatorStandingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryOperatorStandingResponse",
      value: QueryOperatorStandingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestRequest(): QueryRequestRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryRequestRequest defines the QueryRequestRequest message.
 * @name QueryRequestRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestRequest
 */
export const QueryRequestRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestRequest",
  encode(message: QueryRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestRequest>): QueryRequestRequest {
    const message = createBaseQueryRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRequestRequestAmino): QueryRequestRequest {
    const message = createBaseQueryRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryRequestRequest): QueryRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestRequestAminoMsg): QueryRequestRequest {
    return QueryRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestRequestProtoMsg): QueryRequestRequest {
    return QueryRequestRequest.decode(message.value);
  },
  toProto(message: QueryRequestRequest): Uint8Array {
    return QueryRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestRequest): QueryRequestRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestRequest",
      value: QueryRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestResponse(): QueryRequestResponse {
  return {
    request: Request.fromPartial({}),
    withheld: false
  };
}
/**
 * QueryRequestResponse defines the QueryRequestResponse message.
 * @name QueryRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestResponse
 */
export const QueryRequestResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestResponse",
  encode(message: QueryRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.withheld === true) {
      writer.uint32(16).bool(message.withheld);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 2:
          message.withheld = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestResponse>): QueryRequestResponse {
    const message = createBaseQueryRequestResponse();
    message.request = object.request !== undefined && object.request !== null ? Request.fromPartial(object.request) : undefined;
    message.withheld = object.withheld ?? false;
    return message;
  },
  fromAmino(object: QueryRequestResponseAmino): QueryRequestResponse {
    const message = createBaseQueryRequestResponse();
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromAmino(object.request);
    }
    if (object.withheld !== undefined && object.withheld !== null) {
      message.withheld = object.withheld;
    }
    return message;
  },
  toAmino(message: QueryRequestResponse): QueryRequestResponseAmino {
    const obj: any = {};
    obj.request = message.request ? Request.toAmino(message.request) : undefined;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    return obj;
  },
  fromAminoMsg(object: QueryRequestResponseAminoMsg): QueryRequestResponse {
    return QueryRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestResponseProtoMsg): QueryRequestResponse {
    return QueryRequestResponse.decode(message.value);
  },
  toProto(message: QueryRequestResponse): Uint8Array {
    return QueryRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestResponse): QueryRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestResponse",
      value: QueryRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestByHashRequest(): QueryRequestByHashRequest {
  return {
    backend: "",
    sha256: ""
  };
}
/**
 * QueryRequestByHashRequest defines the QueryRequestByHashRequest message.
 * @name QueryRequestByHashRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestByHashRequest
 */
export const QueryRequestByHashRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestByHashRequest",
  encode(message: QueryRequestByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== "") {
      writer.uint32(10).string(message.backend);
    }
    if (message.sha256 !== "") {
      writer.uint32(18).string(message.sha256);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = reader.string();
          break;
        case 2:
          message.sha256 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestByHashRequest>): QueryRequestByHashRequest {
    const message = createBaseQueryRequestByHashRequest();
    message.backend = object.backend ?? "";
    message.sha256 = object.sha256 ?? "";
    return message;
  },
  fromAmino(object: QueryRequestByHashRequestAmino): QueryRequestByHashRequest {
    const message = createBaseQueryRequestByHashRequest();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.sha256 !== undefined && object.sha256 !== null) {
      message.sha256 = object.sha256;
    }
    return message;
  },
  toAmino(message: QueryRequestByHashRequest): QueryRequestByHashRequestAmino {
    const obj: any = {};
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.sha256 = message.sha256 === "" ? undefined : message.sha256;
    return obj;
  },
  fromAminoMsg(object: QueryRequestByHashRequestAminoMsg): QueryRequestByHashRequest {
    return QueryRequestByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestByHashRequestProtoMsg): QueryRequestByHashRequest {
    return QueryRequestByHashRequest.decode(message.value);
  },
  toProto(message: QueryRequestByHashRequest): Uint8Array {
    return QueryRequestByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestByHashRequest): QueryRequestByHashRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestByHashRequest",
      value: QueryRequestByHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestByHashResponse(): QueryRequestByHashResponse {
  return {
    request: Request.fromPartial({}),
    withheld: false
  };
}
/**
 * QueryRequestByHashResponse defines the QueryRequestByHashResponse message.
 * @name QueryRequestByHashResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestByHashResponse
 */
export const QueryRequestByHashResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestByHashResponse",
  encode(message: QueryRequestByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.withheld === true) {
      writer.uint32(16).bool(message.withheld);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 2:
          message.withheld = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestByHashResponse>): QueryRequestByHashResponse {
    const message = createBaseQueryRequestByHashResponse();
    message.request = object.request !== undefined && object.request !== null ? Request.fromPartial(object.request) : undefined;
    message.withheld = object.withheld ?? false;
    return message;
  },
  fromAmino(object: QueryRequestByHashResponseAmino): QueryRequestByHashResponse {
    const message = createBaseQueryRequestByHashResponse();
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromAmino(object.request);
    }
    if (object.withheld !== undefined && object.withheld !== null) {
      message.withheld = object.withheld;
    }
    return message;
  },
  toAmino(message: QueryRequestByHashResponse): QueryRequestByHashResponseAmino {
    const obj: any = {};
    obj.request = message.request ? Request.toAmino(message.request) : undefined;
    obj.withheld = message.withheld === false ? undefined : message.withheld;
    return obj;
  },
  fromAminoMsg(object: QueryRequestByHashResponseAminoMsg): QueryRequestByHashResponse {
    return QueryRequestByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestByHashResponseProtoMsg): QueryRequestByHashResponse {
    return QueryRequestByHashResponse.decode(message.value);
  },
  toProto(message: QueryRequestByHashResponse): Uint8Array {
    return QueryRequestByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestByHashResponse): QueryRequestByHashResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestByHashResponse",
      value: QueryRequestByHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsByStatusRequest(): QueryRequestsByStatusRequest {
  return {
    backend: "",
    status: 0,
    pagination: undefined
  };
}
/**
 * QueryRequestsByStatusRequest defines the QueryRequestsByStatusRequest message.
 * @name QueryRequestsByStatusRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByStatusRequest
 */
export const QueryRequestsByStatusRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByStatusRequest",
  encode(message: QueryRequestsByStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== "") {
      writer.uint32(10).string(message.backend);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestsByStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
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
  fromPartial(object: DeepPartial<QueryRequestsByStatusRequest>): QueryRequestsByStatusRequest {
    const message = createBaseQueryRequestsByStatusRequest();
    message.backend = object.backend ?? "";
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestsByStatusRequestAmino): QueryRequestsByStatusRequest {
    const message = createBaseQueryRequestsByStatusRequest();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRequestsByStatusRequest): QueryRequestsByStatusRequestAmino {
    const obj: any = {};
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsByStatusRequestAminoMsg): QueryRequestsByStatusRequest {
    return QueryRequestsByStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsByStatusRequestProtoMsg): QueryRequestsByStatusRequest {
    return QueryRequestsByStatusRequest.decode(message.value);
  },
  toProto(message: QueryRequestsByStatusRequest): Uint8Array {
    return QueryRequestsByStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsByStatusRequest): QueryRequestsByStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestsByStatusRequest",
      value: QueryRequestsByStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsByStatusResponse(): QueryRequestsByStatusResponse {
  return {
    requests: [],
    pagination: undefined,
    withheldIds: []
  };
}
/**
 * QueryRequestsByStatusResponse defines the QueryRequestsByStatusResponse message.
 * @name QueryRequestsByStatusResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByStatusResponse
 */
export const QueryRequestsByStatusResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByStatusResponse",
  encode(message: QueryRequestsByStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.withheldIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestsByStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.withheldIds.push(reader.uint64());
            }
          } else {
            message.withheldIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestsByStatusResponse>): QueryRequestsByStatusResponse {
    const message = createBaseQueryRequestsByStatusResponse();
    message.requests = object.requests?.map(e => Request.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.withheldIds = object.withheldIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryRequestsByStatusResponseAmino): QueryRequestsByStatusResponse {
    const message = createBaseQueryRequestsByStatusResponse();
    message.requests = object.requests?.map(e => Request.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.withheldIds = object.withheld_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryRequestsByStatusResponse): QueryRequestsByStatusResponseAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? Request.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.withheldIds) {
      obj.withheld_ids = message.withheldIds.map(e => e.toString());
    } else {
      obj.withheld_ids = message.withheldIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRequestsByStatusResponseAminoMsg): QueryRequestsByStatusResponse {
    return QueryRequestsByStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsByStatusResponseProtoMsg): QueryRequestsByStatusResponse {
    return QueryRequestsByStatusResponse.decode(message.value);
  },
  toProto(message: QueryRequestsByStatusResponse): Uint8Array {
    return QueryRequestsByStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsByStatusResponse): QueryRequestsByStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestsByStatusResponse",
      value: QueryRequestsByStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsByRequesterRequest(): QueryRequestsByRequesterRequest {
  return {
    requester: "",
    pagination: undefined
  };
}
/**
 * QueryRequestsByRequesterRequest defines the QueryRequestsByRequesterRequest message.
 * @name QueryRequestsByRequesterRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByRequesterRequest
 */
export const QueryRequestsByRequesterRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByRequesterRequest",
  encode(message: QueryRequestsByRequesterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestsByRequesterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByRequesterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
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
  fromPartial(object: DeepPartial<QueryRequestsByRequesterRequest>): QueryRequestsByRequesterRequest {
    const message = createBaseQueryRequestsByRequesterRequest();
    message.requester = object.requester ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestsByRequesterRequestAmino): QueryRequestsByRequesterRequest {
    const message = createBaseQueryRequestsByRequesterRequest();
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRequestsByRequesterRequest): QueryRequestsByRequesterRequestAmino {
    const obj: any = {};
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsByRequesterRequestAminoMsg): QueryRequestsByRequesterRequest {
    return QueryRequestsByRequesterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsByRequesterRequestProtoMsg): QueryRequestsByRequesterRequest {
    return QueryRequestsByRequesterRequest.decode(message.value);
  },
  toProto(message: QueryRequestsByRequesterRequest): Uint8Array {
    return QueryRequestsByRequesterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsByRequesterRequest): QueryRequestsByRequesterRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestsByRequesterRequest",
      value: QueryRequestsByRequesterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsByRequesterResponse(): QueryRequestsByRequesterResponse {
  return {
    requests: [],
    pagination: undefined,
    withheldIds: []
  };
}
/**
 * QueryRequestsByRequesterResponse defines the QueryRequestsByRequesterResponse message.
 * @name QueryRequestsByRequesterResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByRequesterResponse
 */
export const QueryRequestsByRequesterResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByRequesterResponse",
  encode(message: QueryRequestsByRequesterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.withheldIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestsByRequesterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByRequesterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.withheldIds.push(reader.uint64());
            }
          } else {
            message.withheldIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestsByRequesterResponse>): QueryRequestsByRequesterResponse {
    const message = createBaseQueryRequestsByRequesterResponse();
    message.requests = object.requests?.map(e => Request.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.withheldIds = object.withheldIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryRequestsByRequesterResponseAmino): QueryRequestsByRequesterResponse {
    const message = createBaseQueryRequestsByRequesterResponse();
    message.requests = object.requests?.map(e => Request.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.withheldIds = object.withheld_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryRequestsByRequesterResponse): QueryRequestsByRequesterResponseAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? Request.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.withheldIds) {
      obj.withheld_ids = message.withheldIds.map(e => e.toString());
    } else {
      obj.withheld_ids = message.withheldIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRequestsByRequesterResponseAminoMsg): QueryRequestsByRequesterResponse {
    return QueryRequestsByRequesterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsByRequesterResponseProtoMsg): QueryRequestsByRequesterResponse {
    return QueryRequestsByRequesterResponse.decode(message.value);
  },
  toProto(message: QueryRequestsByRequesterResponse): Uint8Array {
    return QueryRequestsByRequesterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsByRequesterResponse): QueryRequestsByRequesterResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestsByRequesterResponse",
      value: QueryRequestsByRequesterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsByOperatorRequest(): QueryRequestsByOperatorRequest {
  return {
    operator: "",
    pagination: undefined
  };
}
/**
 * QueryRequestsByOperatorRequest defines the QueryRequestsByOperatorRequest message.
 * @name QueryRequestsByOperatorRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByOperatorRequest
 */
export const QueryRequestsByOperatorRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByOperatorRequest",
  encode(message: QueryRequestsByOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestsByOperatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
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
  fromPartial(object: DeepPartial<QueryRequestsByOperatorRequest>): QueryRequestsByOperatorRequest {
    const message = createBaseQueryRequestsByOperatorRequest();
    message.operator = object.operator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestsByOperatorRequestAmino): QueryRequestsByOperatorRequest {
    const message = createBaseQueryRequestsByOperatorRequest();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRequestsByOperatorRequest): QueryRequestsByOperatorRequestAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsByOperatorRequestAminoMsg): QueryRequestsByOperatorRequest {
    return QueryRequestsByOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsByOperatorRequestProtoMsg): QueryRequestsByOperatorRequest {
    return QueryRequestsByOperatorRequest.decode(message.value);
  },
  toProto(message: QueryRequestsByOperatorRequest): Uint8Array {
    return QueryRequestsByOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsByOperatorRequest): QueryRequestsByOperatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestsByOperatorRequest",
      value: QueryRequestsByOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsByOperatorResponse(): QueryRequestsByOperatorResponse {
  return {
    requests: [],
    pagination: undefined,
    withheldIds: []
  };
}
/**
 * QueryRequestsByOperatorResponse defines the QueryRequestsByOperatorResponse message.
 * @name QueryRequestsByOperatorResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestsByOperatorResponse
 */
export const QueryRequestsByOperatorResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestsByOperatorResponse",
  encode(message: QueryRequestsByOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.withheldIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestsByOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestsByOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.withheldIds.push(reader.uint64());
            }
          } else {
            message.withheldIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestsByOperatorResponse>): QueryRequestsByOperatorResponse {
    const message = createBaseQueryRequestsByOperatorResponse();
    message.requests = object.requests?.map(e => Request.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.withheldIds = object.withheldIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryRequestsByOperatorResponseAmino): QueryRequestsByOperatorResponse {
    const message = createBaseQueryRequestsByOperatorResponse();
    message.requests = object.requests?.map(e => Request.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.withheldIds = object.withheld_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryRequestsByOperatorResponse): QueryRequestsByOperatorResponseAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? Request.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.withheldIds) {
      obj.withheld_ids = message.withheldIds.map(e => e.toString());
    } else {
      obj.withheld_ids = message.withheldIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRequestsByOperatorResponseAminoMsg): QueryRequestsByOperatorResponse {
    return QueryRequestsByOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsByOperatorResponseProtoMsg): QueryRequestsByOperatorResponse {
    return QueryRequestsByOperatorResponse.decode(message.value);
  },
  toProto(message: QueryRequestsByOperatorResponse): Uint8Array {
    return QueryRequestsByOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsByOperatorResponse): QueryRequestsByOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestsByOperatorResponse",
      value: QueryRequestsByOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRemovedHashRequest(): QueryRemovedHashRequest {
  return {
    sha256: ""
  };
}
/**
 * QueryRemovedHashRequest defines the QueryRemovedHashRequest message.
 * @name QueryRemovedHashRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRemovedHashRequest
 */
export const QueryRemovedHashRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRemovedHashRequest",
  encode(message: QueryRemovedHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sha256 !== "") {
      writer.uint32(10).string(message.sha256);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRemovedHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemovedHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sha256 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRemovedHashRequest>): QueryRemovedHashRequest {
    const message = createBaseQueryRemovedHashRequest();
    message.sha256 = object.sha256 ?? "";
    return message;
  },
  fromAmino(object: QueryRemovedHashRequestAmino): QueryRemovedHashRequest {
    const message = createBaseQueryRemovedHashRequest();
    if (object.sha256 !== undefined && object.sha256 !== null) {
      message.sha256 = object.sha256;
    }
    return message;
  },
  toAmino(message: QueryRemovedHashRequest): QueryRemovedHashRequestAmino {
    const obj: any = {};
    obj.sha256 = message.sha256 === "" ? undefined : message.sha256;
    return obj;
  },
  fromAminoMsg(object: QueryRemovedHashRequestAminoMsg): QueryRemovedHashRequest {
    return QueryRemovedHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRemovedHashRequestProtoMsg): QueryRemovedHashRequest {
    return QueryRemovedHashRequest.decode(message.value);
  },
  toProto(message: QueryRemovedHashRequest): Uint8Array {
    return QueryRemovedHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRemovedHashRequest): QueryRemovedHashRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRemovedHashRequest",
      value: QueryRemovedHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRemovedHashResponse(): QueryRemovedHashResponse {
  return {
    removedHash: RemovedHash.fromPartial({})
  };
}
/**
 * QueryRemovedHashResponse defines the QueryRemovedHashResponse message.
 * @name QueryRemovedHashResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRemovedHashResponse
 */
export const QueryRemovedHashResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRemovedHashResponse",
  encode(message: QueryRemovedHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.removedHash !== undefined) {
      RemovedHash.encode(message.removedHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRemovedHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemovedHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removedHash = RemovedHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRemovedHashResponse>): QueryRemovedHashResponse {
    const message = createBaseQueryRemovedHashResponse();
    message.removedHash = object.removedHash !== undefined && object.removedHash !== null ? RemovedHash.fromPartial(object.removedHash) : undefined;
    return message;
  },
  fromAmino(object: QueryRemovedHashResponseAmino): QueryRemovedHashResponse {
    const message = createBaseQueryRemovedHashResponse();
    if (object.removed_hash !== undefined && object.removed_hash !== null) {
      message.removedHash = RemovedHash.fromAmino(object.removed_hash);
    }
    return message;
  },
  toAmino(message: QueryRemovedHashResponse): QueryRemovedHashResponseAmino {
    const obj: any = {};
    obj.removed_hash = message.removedHash ? RemovedHash.toAmino(message.removedHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRemovedHashResponseAminoMsg): QueryRemovedHashResponse {
    return QueryRemovedHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRemovedHashResponseProtoMsg): QueryRemovedHashResponse {
    return QueryRemovedHashResponse.decode(message.value);
  },
  toProto(message: QueryRemovedHashResponse): Uint8Array {
    return QueryRemovedHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRemovedHashResponse): QueryRemovedHashResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRemovedHashResponse",
      value: QueryRemovedHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQuoteFeeRequest(): QueryQuoteFeeRequest {
  return {
    backend: "",
    contentType: "",
    sizeBytes: BigInt(0)
  };
}
/**
 * QueryQuoteFeeRequest defines the QueryQuoteFeeRequest message.
 * @name QueryQuoteFeeRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryQuoteFeeRequest
 */
export const QueryQuoteFeeRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryQuoteFeeRequest",
  encode(message: QueryQuoteFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== "") {
      writer.uint32(10).string(message.backend);
    }
    if (message.contentType !== "") {
      writer.uint32(18).string(message.contentType);
    }
    if (message.sizeBytes !== BigInt(0)) {
      writer.uint32(24).uint64(message.sizeBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuoteFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = reader.string();
          break;
        case 2:
          message.contentType = reader.string();
          break;
        case 3:
          message.sizeBytes = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteFeeRequest>): QueryQuoteFeeRequest {
    const message = createBaseQueryQuoteFeeRequest();
    message.backend = object.backend ?? "";
    message.contentType = object.contentType ?? "";
    message.sizeBytes = object.sizeBytes !== undefined && object.sizeBytes !== null ? BigInt(object.sizeBytes.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryQuoteFeeRequestAmino): QueryQuoteFeeRequest {
    const message = createBaseQueryQuoteFeeRequest();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.size_bytes !== undefined && object.size_bytes !== null) {
      message.sizeBytes = BigInt(object.size_bytes);
    }
    return message;
  },
  toAmino(message: QueryQuoteFeeRequest): QueryQuoteFeeRequestAmino {
    const obj: any = {};
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.size_bytes = message.sizeBytes !== BigInt(0) ? message.sizeBytes?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteFeeRequestAminoMsg): QueryQuoteFeeRequest {
    return QueryQuoteFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteFeeRequestProtoMsg): QueryQuoteFeeRequest {
    return QueryQuoteFeeRequest.decode(message.value);
  },
  toProto(message: QueryQuoteFeeRequest): Uint8Array {
    return QueryQuoteFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteFeeRequest): QueryQuoteFeeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryQuoteFeeRequest",
      value: QueryQuoteFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQuoteFeeResponse(): QueryQuoteFeeResponse {
  return {
    copyFee: "",
    requestFee: "",
    total: ""
  };
}
/**
 * QueryQuoteFeeResponse defines the QueryQuoteFeeResponse message.
 * @name QueryQuoteFeeResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryQuoteFeeResponse
 */
export const QueryQuoteFeeResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryQuoteFeeResponse",
  encode(message: QueryQuoteFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.copyFee !== "") {
      writer.uint32(10).string(message.copyFee);
    }
    if (message.requestFee !== "") {
      writer.uint32(18).string(message.requestFee);
    }
    if (message.total !== "") {
      writer.uint32(26).string(message.total);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuoteFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.copyFee = reader.string();
          break;
        case 2:
          message.requestFee = reader.string();
          break;
        case 3:
          message.total = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteFeeResponse>): QueryQuoteFeeResponse {
    const message = createBaseQueryQuoteFeeResponse();
    message.copyFee = object.copyFee ?? "";
    message.requestFee = object.requestFee ?? "";
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: QueryQuoteFeeResponseAmino): QueryQuoteFeeResponse {
    const message = createBaseQueryQuoteFeeResponse();
    if (object.copy_fee !== undefined && object.copy_fee !== null) {
      message.copyFee = object.copy_fee;
    }
    if (object.request_fee !== undefined && object.request_fee !== null) {
      message.requestFee = object.request_fee;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: QueryQuoteFeeResponse): QueryQuoteFeeResponseAmino {
    const obj: any = {};
    obj.copy_fee = message.copyFee === "" ? undefined : message.copyFee;
    obj.request_fee = message.requestFee === "" ? undefined : message.requestFee;
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteFeeResponseAminoMsg): QueryQuoteFeeResponse {
    return QueryQuoteFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteFeeResponseProtoMsg): QueryQuoteFeeResponse {
    return QueryQuoteFeeResponse.decode(message.value);
  },
  toProto(message: QueryQuoteFeeResponse): Uint8Array {
    return QueryQuoteFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteFeeResponse): QueryQuoteFeeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryQuoteFeeResponse",
      value: QueryQuoteFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestLocationRequest(): QueryRequestLocationRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryRequestLocationRequest defines the QueryRequestLocationRequest message.
 * @name QueryRequestLocationRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestLocationRequest
 */
export const QueryRequestLocationRequest = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestLocationRequest",
  encode(message: QueryRequestLocationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestLocationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestLocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestLocationRequest>): QueryRequestLocationRequest {
    const message = createBaseQueryRequestLocationRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRequestLocationRequestAmino): QueryRequestLocationRequest {
    const message = createBaseQueryRequestLocationRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryRequestLocationRequest): QueryRequestLocationRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestLocationRequestAminoMsg): QueryRequestLocationRequest {
    return QueryRequestLocationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestLocationRequestProtoMsg): QueryRequestLocationRequest {
    return QueryRequestLocationRequest.decode(message.value);
  },
  toProto(message: QueryRequestLocationRequest): Uint8Array {
    return QueryRequestLocationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestLocationRequest): QueryRequestLocationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestLocationRequest",
      value: QueryRequestLocationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestLocationResponse(): QueryRequestLocationResponse {
  return {
    sources: [],
    locator: "",
    verdictsLocator: "",
    flagged: false
  };
}
/**
 * QueryRequestLocationResponse defines the QueryRequestLocationResponse message.
 * @name QueryRequestLocationResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.QueryRequestLocationResponse
 */
export const QueryRequestLocationResponse = {
  typeUrl: "/sparkdream.storage.v1.QueryRequestLocationResponse",
  encode(message: QueryRequestLocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sources) {
      Source.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.locator !== "") {
      writer.uint32(18).string(message.locator);
    }
    if (message.verdictsLocator !== "") {
      writer.uint32(26).string(message.verdictsLocator);
    }
    if (message.flagged === true) {
      writer.uint32(32).bool(message.flagged);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestLocationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sources.push(Source.decode(reader, reader.uint32()));
          break;
        case 2:
          message.locator = reader.string();
          break;
        case 3:
          message.verdictsLocator = reader.string();
          break;
        case 4:
          message.flagged = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequestLocationResponse>): QueryRequestLocationResponse {
    const message = createBaseQueryRequestLocationResponse();
    message.sources = object.sources?.map(e => Source.fromPartial(e)) || [];
    message.locator = object.locator ?? "";
    message.verdictsLocator = object.verdictsLocator ?? "";
    message.flagged = object.flagged ?? false;
    return message;
  },
  fromAmino(object: QueryRequestLocationResponseAmino): QueryRequestLocationResponse {
    const message = createBaseQueryRequestLocationResponse();
    message.sources = object.sources?.map(e => Source.fromAmino(e)) || [];
    if (object.locator !== undefined && object.locator !== null) {
      message.locator = object.locator;
    }
    if (object.verdicts_locator !== undefined && object.verdicts_locator !== null) {
      message.verdictsLocator = object.verdicts_locator;
    }
    if (object.flagged !== undefined && object.flagged !== null) {
      message.flagged = object.flagged;
    }
    return message;
  },
  toAmino(message: QueryRequestLocationResponse): QueryRequestLocationResponseAmino {
    const obj: any = {};
    if (message.sources) {
      obj.sources = message.sources.map(e => e ? Source.toAmino(e) : undefined);
    } else {
      obj.sources = message.sources;
    }
    obj.locator = message.locator === "" ? undefined : message.locator;
    obj.verdicts_locator = message.verdictsLocator === "" ? undefined : message.verdictsLocator;
    obj.flagged = message.flagged === false ? undefined : message.flagged;
    return obj;
  },
  fromAminoMsg(object: QueryRequestLocationResponseAminoMsg): QueryRequestLocationResponse {
    return QueryRequestLocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestLocationResponseProtoMsg): QueryRequestLocationResponse {
    return QueryRequestLocationResponse.decode(message.value);
  },
  toProto(message: QueryRequestLocationResponse): Uint8Array {
    return QueryRequestLocationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestLocationResponse): QueryRequestLocationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.QueryRequestLocationResponse",
      value: QueryRequestLocationResponse.encode(message).finish()
    };
  }
};