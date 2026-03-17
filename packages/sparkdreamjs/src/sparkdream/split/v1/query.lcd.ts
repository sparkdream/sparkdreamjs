//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetShareRequest, QueryGetShareResponse, QueryAllShareRequest, QueryAllShareResponse } from "./query";
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
    const endpoint = `sparkdream/split/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ListShare Queries a list of Share items. */
  getShare = async (params: QueryGetShareRequest): Promise<QueryGetShareResponse> => {
    const endpoint = `sparkdream/split/v1/share/${params.address}`;
    return await this.req.get<QueryGetShareResponse>(endpoint);
  };
  /* ListShare defines the ListShare RPC. */
  listShare = async (params: QueryAllShareRequest = {
    pagination: undefined
  }): Promise<QueryAllShareResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/split/v1/share`;
    return await this.req.get<QueryAllShareResponse>(endpoint, options);
  };
}