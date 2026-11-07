//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySessionRequest, QuerySessionResponse, QuerySessionsByGranterRequest, QuerySessionsByGranterResponse, QuerySessionsByGranteeRequest, QuerySessionsByGranteeResponse, QueryGrantRequest, QueryGrantResponse, QueryGrantsByGranterRequest, QueryGrantsByGranterResponse, QueryGrantsByGranteeRequest, QueryGrantsByGranteeResponse, QueryAllowedMsgTypesRequest, QueryAllowedMsgTypesResponse, QueryAllowedGrantersRequest, QueryAllowedGrantersResponse, QueryPendingGrantsForGranteeRequest, QueryPendingGrantsForGranteeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * Session queries a single session by (granter, grantee).
   * 
   * Legacy compat: projects the underlying SESSION_KEY-type Grant back to
   * the Session shape. New consumers should use the Grant queries below.
   */
  session(request: QuerySessionRequest): Promise<QuerySessionResponse>;
  /**
   * SessionsByGranter queries all active sessions for a granter (legacy
   * compat — projects SESSION_KEY grants only).
   */
  sessionsByGranter(request: QuerySessionsByGranterRequest): Promise<QuerySessionsByGranterResponse>;
  /**
   * SessionsByGrantee queries all active sessions for a grantee (legacy
   * compat — projects SESSION_KEY grants only).
   */
  sessionsByGrantee(request: QuerySessionsByGranteeRequest): Promise<QuerySessionsByGranteeResponse>;
  /** Grant queries a single grant by id. */
  grant(request: QueryGrantRequest): Promise<QueryGrantResponse>;
  /** GrantsByGranter queries all active grants for a granter (any type). */
  grantsByGranter(request: QueryGrantsByGranterRequest): Promise<QueryGrantsByGranterResponse>;
  /** GrantsByGrantee queries all active grants for a grantee (any type). */
  grantsByGrantee(request: QueryGrantsByGranteeRequest): Promise<QueryGrantsByGranteeResponse>;
  /** AllowedMsgTypes queries the ceiling and currently active message types. */
  allowedMsgTypes(request?: QueryAllowedMsgTypesRequest): Promise<QueryAllowedMsgTypesResponse>;
  /**
   * AllowedGranters lists the granters a grantee has allowed: their
   * access-class grants (session keys, sign-ins) are ACTIVE at creation
   * instead of waiting as PENDING for the grantee's acceptance.
   */
  allowedGranters(request: QueryAllowedGrantersRequest): Promise<QueryAllowedGrantersResponse>;
  /**
   * PendingGrantsForGrantee lists the PENDING access-class grants (session
   * keys, sign-ins) that name a grantee and await its acceptance (spec
   * §31.6). These grants are on no other grantee-keyed index, so this is
   * the grantee's discovery path to the grant id MsgAcceptGrant or
   * MsgDeclineGrant needs. Query-only: no on-chain consumer walks it.
   */
  pendingGrantsForGrantee(request: QueryPendingGrantsForGranteeRequest): Promise<QueryPendingGrantsForGranteeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Session queries a single session by (granter, grantee).
  
   Legacy compat: projects the underlying SESSION_KEY-type Grant back to
   the Session shape. New consumers should use the Grant queries below. */
  session = async (request: QuerySessionRequest): Promise<QuerySessionResponse> => {
    const data = QuerySessionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "Session", data);
    return promise.then(data => QuerySessionResponse.decode(new BinaryReader(data)));
  };
  /* SessionsByGranter queries all active sessions for a granter (legacy
   compat — projects SESSION_KEY grants only). */
  sessionsByGranter = async (request: QuerySessionsByGranterRequest): Promise<QuerySessionsByGranterResponse> => {
    const data = QuerySessionsByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "SessionsByGranter", data);
    return promise.then(data => QuerySessionsByGranterResponse.decode(new BinaryReader(data)));
  };
  /* SessionsByGrantee queries all active sessions for a grantee (legacy
   compat — projects SESSION_KEY grants only). */
  sessionsByGrantee = async (request: QuerySessionsByGranteeRequest): Promise<QuerySessionsByGranteeResponse> => {
    const data = QuerySessionsByGranteeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "SessionsByGrantee", data);
    return promise.then(data => QuerySessionsByGranteeResponse.decode(new BinaryReader(data)));
  };
  /* Grant queries a single grant by id. */
  grant = async (request: QueryGrantRequest): Promise<QueryGrantResponse> => {
    const data = QueryGrantRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "Grant", data);
    return promise.then(data => QueryGrantResponse.decode(new BinaryReader(data)));
  };
  /* GrantsByGranter queries all active grants for a granter (any type). */
  grantsByGranter = async (request: QueryGrantsByGranterRequest): Promise<QueryGrantsByGranterResponse> => {
    const data = QueryGrantsByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "GrantsByGranter", data);
    return promise.then(data => QueryGrantsByGranterResponse.decode(new BinaryReader(data)));
  };
  /* GrantsByGrantee queries all active grants for a grantee (any type). */
  grantsByGrantee = async (request: QueryGrantsByGranteeRequest): Promise<QueryGrantsByGranteeResponse> => {
    const data = QueryGrantsByGranteeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "GrantsByGrantee", data);
    return promise.then(data => QueryGrantsByGranteeResponse.decode(new BinaryReader(data)));
  };
  /* AllowedMsgTypes queries the ceiling and currently active message types. */
  allowedMsgTypes = async (request: QueryAllowedMsgTypesRequest = {}): Promise<QueryAllowedMsgTypesResponse> => {
    const data = QueryAllowedMsgTypesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "AllowedMsgTypes", data);
    return promise.then(data => QueryAllowedMsgTypesResponse.decode(new BinaryReader(data)));
  };
  /* AllowedGranters lists the granters a grantee has allowed: their
   access-class grants (session keys, sign-ins) are ACTIVE at creation
   instead of waiting as PENDING for the grantee's acceptance. */
  allowedGranters = async (request: QueryAllowedGrantersRequest): Promise<QueryAllowedGrantersResponse> => {
    const data = QueryAllowedGrantersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "AllowedGranters", data);
    return promise.then(data => QueryAllowedGrantersResponse.decode(new BinaryReader(data)));
  };
  /* PendingGrantsForGrantee lists the PENDING access-class grants (session
   keys, sign-ins) that name a grantee and await its acceptance (spec
   §31.6). These grants are on no other grantee-keyed index, so this is
   the grantee's discovery path to the grant id MsgAcceptGrant or
   MsgDeclineGrant needs. Query-only: no on-chain consumer walks it. */
  pendingGrantsForGrantee = async (request: QueryPendingGrantsForGranteeRequest): Promise<QueryPendingGrantsForGranteeResponse> => {
    const data = QueryPendingGrantsForGranteeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Query", "PendingGrantsForGrantee", data);
    return promise.then(data => QueryPendingGrantsForGranteeResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    session(request: QuerySessionRequest): Promise<QuerySessionResponse> {
      return queryService.session(request);
    },
    sessionsByGranter(request: QuerySessionsByGranterRequest): Promise<QuerySessionsByGranterResponse> {
      return queryService.sessionsByGranter(request);
    },
    sessionsByGrantee(request: QuerySessionsByGranteeRequest): Promise<QuerySessionsByGranteeResponse> {
      return queryService.sessionsByGrantee(request);
    },
    grant(request: QueryGrantRequest): Promise<QueryGrantResponse> {
      return queryService.grant(request);
    },
    grantsByGranter(request: QueryGrantsByGranterRequest): Promise<QueryGrantsByGranterResponse> {
      return queryService.grantsByGranter(request);
    },
    grantsByGrantee(request: QueryGrantsByGranteeRequest): Promise<QueryGrantsByGranteeResponse> {
      return queryService.grantsByGrantee(request);
    },
    allowedMsgTypes(request?: QueryAllowedMsgTypesRequest): Promise<QueryAllowedMsgTypesResponse> {
      return queryService.allowedMsgTypes(request);
    },
    allowedGranters(request: QueryAllowedGrantersRequest): Promise<QueryAllowedGrantersResponse> {
      return queryService.allowedGranters(request);
    },
    pendingGrantsForGrantee(request: QueryPendingGrantsForGranteeRequest): Promise<QueryPendingGrantsForGranteeResponse> {
      return queryService.pendingGrantsForGrantee(request);
    }
  };
};