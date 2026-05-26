//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySessionRequest, QuerySessionResponse, QuerySessionsByGranterRequest, QuerySessionsByGranterResponse, QuerySessionsByGranteeRequest, QuerySessionsByGranteeResponse, QueryGrantRequest, QueryGrantResponse, QueryGrantsByGranterRequest, QueryGrantsByGranterResponse, QueryGrantsByGranteeRequest, QueryGrantsByGranteeResponse, QueryAllowedMsgTypesRequest, QueryAllowedMsgTypesResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the parameters of the module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/session/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Session queries a single session by (granter, grantee).
  
   Legacy compat: projects the underlying SESSION_KEY-type Grant back to
   the Session shape. New consumers should use the Grant queries below. */
  session = async (params: QuerySessionRequest): Promise<QuerySessionResponse> => {
    const endpoint = `sparkdream/session/v1/session/${params.granter}/${params.grantee}`;
    return await this.req.get<QuerySessionResponse>(endpoint);
  };
  /* SessionsByGranter queries all active sessions for a granter (legacy
   compat — projects SESSION_KEY grants only). */
  sessionsByGranter = async (params: QuerySessionsByGranterRequest): Promise<QuerySessionsByGranterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/session/v1/sessions_by_granter/${params.granter}`;
    return await this.req.get<QuerySessionsByGranterResponse>(endpoint, options);
  };
  /* SessionsByGrantee queries all active sessions for a grantee (legacy
   compat — projects SESSION_KEY grants only). */
  sessionsByGrantee = async (params: QuerySessionsByGranteeRequest): Promise<QuerySessionsByGranteeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/session/v1/sessions_by_grantee/${params.grantee}`;
    return await this.req.get<QuerySessionsByGranteeResponse>(endpoint, options);
  };
  /* Grant queries a single grant by id. */
  grant = async (params: QueryGrantRequest): Promise<QueryGrantResponse> => {
    const endpoint = `sparkdream/session/v1/grants/${params.id}`;
    return await this.req.get<QueryGrantResponse>(endpoint);
  };
  /* GrantsByGranter queries all active grants for a granter (any type). */
  grantsByGranter = async (params: QueryGrantsByGranterRequest): Promise<QueryGrantsByGranterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.type !== "undefined") {
      options.params.type = params.type;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/session/v1/grants/by_granter/${params.granter}`;
    return await this.req.get<QueryGrantsByGranterResponse>(endpoint, options);
  };
  /* GrantsByGrantee queries all active grants for a grantee (any type). */
  grantsByGrantee = async (params: QueryGrantsByGranteeRequest): Promise<QueryGrantsByGranteeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.type !== "undefined") {
      options.params.type = params.type;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/session/v1/grants/by_grantee/${params.grantee}`;
    return await this.req.get<QueryGrantsByGranteeResponse>(endpoint, options);
  };
  /* AllowedMsgTypes queries the ceiling and currently active message types. */
  allowedMsgTypes = async (_params: QueryAllowedMsgTypesRequest = {}): Promise<QueryAllowedMsgTypesResponse> => {
    const endpoint = `sparkdream/session/v1/allowed_msg_types`;
    return await this.req.get<QueryAllowedMsgTypesResponse>(endpoint);
  };
}