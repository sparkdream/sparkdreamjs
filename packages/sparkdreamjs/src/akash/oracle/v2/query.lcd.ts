//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryPricesRequest, QueryPricesResponse, QueryParamsRequest, QueryParamsResponse, QueryAggregatedPriceRequest, QueryAggregatedPriceResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Prices query prices for specific denom */
  prices = async (params: QueryPricesRequest): Promise<QueryPricesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/oracle/v2/prices`;
    return await this.req.get<QueryPricesResponse>(endpoint, options);
  };
  /* Params returns the total set of oracle parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `akash/oracle/v2/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* AggregatedPrice queries the aggregated price for a given denom. */
  aggregatedPrice = async (params: QueryAggregatedPriceRequest): Promise<QueryAggregatedPriceResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `akash/oracle/v2/aggregated_price/${params.denom}`;
    return await this.req.get<QueryAggregatedPriceResponse>(endpoint, options);
  };
}