//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryShowPostRequest, QueryShowPostResponseSDKType, QueryListPostRequest, QueryListPostResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.showPost = this.showPost.bind(this);
    this.listPost = this.listPost.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sparkdream/blog/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowPost items. */
  async showPost(params: QueryShowPostRequest): Promise<QueryShowPostResponseSDKType> {
    const endpoint = `sparkdream/blog/show_post/${params.id}`;
    return await this.req.get<QueryShowPostResponseSDKType>(endpoint);
  }
  /* Queries a list of ListPost items. */
  async listPost(params: QueryListPostRequest = {
    pagination: undefined
  }): Promise<QueryListPostResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/blog/list_post`;
    return await this.req.get<QueryListPostResponseSDKType>(endpoint, options);
  }
}