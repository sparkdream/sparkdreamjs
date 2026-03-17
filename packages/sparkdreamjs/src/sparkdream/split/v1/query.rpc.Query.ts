//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetShareRequest, QueryGetShareResponse, QueryAllShareRequest, QueryAllShareResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ListShare Queries a list of Share items. */
  getShare(request: QueryGetShareRequest): Promise<QueryGetShareResponse>;
  /** ListShare defines the ListShare RPC. */
  listShare(request?: QueryAllShareRequest): Promise<QueryAllShareResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.split.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ListShare Queries a list of Share items. */
  getShare = async (request: QueryGetShareRequest): Promise<QueryGetShareResponse> => {
    const data = QueryGetShareRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.split.v1.Query", "GetShare", data);
    return promise.then(data => QueryGetShareResponse.decode(new BinaryReader(data)));
  };
  /* ListShare defines the ListShare RPC. */
  listShare = async (request: QueryAllShareRequest = {
    pagination: undefined
  }): Promise<QueryAllShareResponse> => {
    const data = QueryAllShareRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.split.v1.Query", "ListShare", data);
    return promise.then(data => QueryAllShareResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getShare(request: QueryGetShareRequest): Promise<QueryGetShareResponse> {
      return queryService.getShare(request);
    },
    listShare(request?: QueryAllShareRequest): Promise<QueryAllShareResponse> {
      return queryService.listShare(request);
    }
  };
};