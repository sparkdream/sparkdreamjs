//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySessionRequest, QuerySessionResponse, QuerySessionsByGranterRequest, QuerySessionsByGranterResponse, QuerySessionsByGranteeRequest, QuerySessionsByGranteeResponse, QueryAllowedMsgTypesRequest, QueryAllowedMsgTypesResponse } from "./query";
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
  /* Session queries a single session by (granter, grantee). */
  session = async (params: QuerySessionRequest): Promise<QuerySessionResponse> => {
    const endpoint = `sparkdream/session/v1/session/${params.granter}/${params.grantee}`;
    return await this.req.get<QuerySessionResponse>(endpoint);
  };
  /* SessionsByGranter queries all active sessions for a granter. */
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
  /* SessionsByGrantee queries all active sessions for a grantee. */
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
  /* AllowedMsgTypes queries the ceiling and currently active message types. */
  allowedMsgTypes = async (_params: QueryAllowedMsgTypesRequest = {}): Promise<QueryAllowedMsgTypesResponse> => {
    const endpoint = `sparkdream/session/v1/allowed_msg_types`;
    return await this.req.get<QueryAllowedMsgTypesResponse>(endpoint);
  };
}