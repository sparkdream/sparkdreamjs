//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMarketRequest, QueryGetMarketResponse, QueryAllMarketRequest, QueryAllMarketResponse, QueryGetMarketPriceRequest, QueryGetMarketPriceResponse } from "./query";
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
    const endpoint = `sparkdream/futarchy/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ListMarket Queries a list of Market items. */
  getMarket = async (params: QueryGetMarketRequest): Promise<QueryGetMarketResponse> => {
    const endpoint = `sparkdream/futarchy/v1/market/${params.index}`;
    return await this.req.get<QueryGetMarketResponse>(endpoint);
  };
  /* ListMarket defines the ListMarket RPC. */
  listMarket = async (params: QueryAllMarketRequest = {
    pagination: undefined
  }): Promise<QueryAllMarketResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/futarchy/v1/market`;
    return await this.req.get<QueryAllMarketResponse>(endpoint, options);
  };
  /* GetMarketPrice queries the current price for a market outcome. */
  getMarketPrice = async (params: QueryGetMarketPriceRequest): Promise<QueryGetMarketPriceResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.isYes !== "undefined") {
      options.params.is_yes = params.isYes;
    }
    if (typeof params?.amount !== "undefined") {
      options.params.amount = params.amount;
    }
    const endpoint = `sparkdream/futarchy/v1/market/${params.marketId}/price`;
    return await this.req.get<QueryGetMarketPriceResponse>(endpoint, options);
  };
}