//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryShowPostRequest, QueryShowPostResponse, QueryListPostRequest, QueryListPostResponse } from "./query";
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
    const endpoint = `sparkdream/blog/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Queries a list of ShowPost items. */
  showPost = async (params: QueryShowPostRequest): Promise<QueryShowPostResponse> => {
    const endpoint = `sparkdream/blog/show_post/${params.id}`;
    return await this.req.get<QueryShowPostResponse>(endpoint);
  };
  /* Queries a list of ListPost items. */
  listPost = async (params: QueryListPostRequest = {
    pagination: undefined
  }): Promise<QueryListPostResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/blog/list_post`;
    return await this.req.get<QueryListPostResponse>(endpoint, options);
  };
}