//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMarketRequest, QueryGetMarketResponse, QueryAllMarketRequest, QueryAllMarketResponse, QueryGetMarketPriceRequest, QueryGetMarketPriceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ListMarket Queries a list of Market items. */
  getMarket(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
  /** ListMarket defines the ListMarket RPC. */
  listMarket(request?: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
  /** GetMarketPrice queries the current price for a market outcome. */
  getMarketPrice(request: QueryGetMarketPriceRequest): Promise<QueryGetMarketPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ListMarket Queries a list of Market items. */
  getMarket = async (request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> => {
    const data = QueryGetMarketRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Query", "GetMarket", data);
    return promise.then(data => QueryGetMarketResponse.decode(new BinaryReader(data)));
  };
  /* ListMarket defines the ListMarket RPC. */
  listMarket = async (request: QueryAllMarketRequest = {
    pagination: undefined
  }): Promise<QueryAllMarketResponse> => {
    const data = QueryAllMarketRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Query", "ListMarket", data);
    return promise.then(data => QueryAllMarketResponse.decode(new BinaryReader(data)));
  };
  /* GetMarketPrice queries the current price for a market outcome. */
  getMarketPrice = async (request: QueryGetMarketPriceRequest): Promise<QueryGetMarketPriceResponse> => {
    const data = QueryGetMarketPriceRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Query", "GetMarketPrice", data);
    return promise.then(data => QueryGetMarketPriceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getMarket(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
      return queryService.getMarket(request);
    },
    listMarket(request?: QueryAllMarketRequest): Promise<QueryAllMarketResponse> {
      return queryService.listMarket(request);
    },
    getMarketPrice(request: QueryGetMarketPriceRequest): Promise<QueryGetMarketPriceResponse> {
      return queryService.getMarketPrice(request);
    }
  };
};