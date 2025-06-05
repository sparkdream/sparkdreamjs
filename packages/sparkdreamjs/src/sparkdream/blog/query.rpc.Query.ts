//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowPostRequest, QueryShowPostResponse, QueryListPostRequest, QueryListPostResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowPost items. */
  showPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse>;
  /** Queries a list of ListPost items. */
  listPost(request?: QueryListPostRequest): Promise<QueryListPostResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.showPost = this.showPost.bind(this);
    this.listPost = this.listPost.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  showPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse> {
    const data = QueryShowPostRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.Query", "ShowPost", data);
    return promise.then(data => QueryShowPostResponse.decode(new BinaryReader(data)));
  }
  listPost(request: QueryListPostRequest = {
    pagination: undefined
  }): Promise<QueryListPostResponse> {
    const data = QueryListPostRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.blog.Query", "ListPost", data);
    return promise.then(data => QueryListPostResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    showPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse> {
      return queryService.showPost(request);
    },
    listPost(request?: QueryListPostRequest): Promise<QueryListPostResponse> {
      return queryService.listPost(request);
    }
  };
};