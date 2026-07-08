//@ts-nocheck
import { QueryPricesRequest, QueryPricesResponse } from "./prices";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAggregatedPriceRequest, QueryAggregatedPriceResponse } from "./query";
/** Query defines the gRPC querier service of the oracle package. */
export interface Query {
  /** Prices query prices for specific denom */
  prices(request: QueryPricesRequest): Promise<QueryPricesResponse>;
  /** Params returns the total set of oracle parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** AggregatedPrice queries the aggregated price for a given denom. */
  aggregatedPrice(request: QueryAggregatedPriceRequest): Promise<QueryAggregatedPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Prices query prices for specific denom */
  prices = async (request: QueryPricesRequest): Promise<QueryPricesResponse> => {
    const data = QueryPricesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.oracle.v1.Query", "Prices", data);
    return promise.then(data => QueryPricesResponse.decode(new BinaryReader(data)));
  };
  /* Params returns the total set of oracle parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* AggregatedPrice queries the aggregated price for a given denom. */
  aggregatedPrice = async (request: QueryAggregatedPriceRequest): Promise<QueryAggregatedPriceResponse> => {
    const data = QueryAggregatedPriceRequest.encode(request).finish();
    const promise = this.rpc.request("akash.oracle.v1.Query", "AggregatedPrice", data);
    return promise.then(data => QueryAggregatedPriceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    prices(request: QueryPricesRequest): Promise<QueryPricesResponse> {
      return queryService.prices(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    aggregatedPrice(request: QueryAggregatedPriceRequest): Promise<QueryAggregatedPriceResponse> {
      return queryService.aggregatedPrice(request);
    }
  };
};