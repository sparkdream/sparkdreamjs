//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryResolveRequest, QueryResolveResponse, QueryReverseResolveRequest, QueryReverseResolveResponse, QueryNamesRequest, QueryNamesResponse, QueryGetDisputeRequest, QueryGetDisputeResponse, QueryAllDisputeRequest, QueryAllDisputeResponse } from "./query";
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
    const endpoint = `sparkdream/name/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Resolve Queries a list of Resolve items. */
  resolve = async (params: QueryResolveRequest): Promise<QueryResolveResponse> => {
    const endpoint = `sparkdream/name/v1/resolve/${params.name}`;
    return await this.req.get<QueryResolveResponse>(endpoint);
  };
  /* ReverseResolve Queries a list of ReverseResolve items. */
  reverseResolve = async (params: QueryReverseResolveRequest): Promise<QueryReverseResolveResponse> => {
    const endpoint = `sparkdream/name/v1/reverse_resolve/${params.address}`;
    return await this.req.get<QueryReverseResolveResponse>(endpoint);
  };
  /* Names Queries a list of Names items. */
  names = async (params: QueryNamesRequest): Promise<QueryNamesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/name/v1/names/${params.address}`;
    return await this.req.get<QueryNamesResponse>(endpoint, options);
  };
  /* ListDispute Queries a list of Dispute items. */
  getDispute = async (params: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse> => {
    const endpoint = `sparkdream/name/v1/dispute/${params.name}`;
    return await this.req.get<QueryGetDisputeResponse>(endpoint);
  };
  /* ListDispute defines the ListDispute RPC. */
  listDispute = async (params: QueryAllDisputeRequest = {
    pagination: undefined
  }): Promise<QueryAllDisputeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/name/v1/dispute`;
    return await this.req.get<QueryAllDisputeResponse>(endpoint, options);
  };
}