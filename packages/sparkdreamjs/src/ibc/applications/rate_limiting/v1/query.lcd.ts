//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIDRequest, QueryRateLimitsByChainIDResponse, QueryRateLimitsByChannelOrClientIDRequest, QueryRateLimitsByChannelOrClientIDResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Queries all rate limits */
  allRateLimits = async (_params: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponse> => {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimits`;
    return await this.req.get<QueryAllRateLimitsResponse>(endpoint);
  };
  /* Queries a specific rate limit by channel ID and denom
   Ex:
    - /ratelimit/{channel_or_client_id}/by_denom?denom={denom} */
  rateLimit = async (params: QueryRateLimitRequest): Promise<QueryRateLimitResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/ratelimit/${params.channelOrClientId}/by_denom`;
    return await this.req.get<QueryRateLimitResponse>(endpoint, options);
  };
  /* Queries all the rate limits for a given chain */
  rateLimitsByChainID = async (params: QueryRateLimitsByChainIDRequest): Promise<QueryRateLimitsByChainIDResponse> => {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/ratelimits/${params.chainId}`;
    return await this.req.get<QueryRateLimitsByChainIDResponse>(endpoint);
  };
  /* Queries all the rate limits for a given channel ID */
  rateLimitsByChannelOrClientID = async (params: QueryRateLimitsByChannelOrClientIDRequest): Promise<QueryRateLimitsByChannelOrClientIDResponse> => {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/ratelimits/${params.channelOrClientId}`;
    return await this.req.get<QueryRateLimitsByChannelOrClientIDResponse>(endpoint);
  };
  /* Queries all blacklisted denoms */
  allBlacklistedDenoms = async (_params: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponse> => {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/blacklisted_denoms`;
    return await this.req.get<QueryAllBlacklistedDenomsResponse>(endpoint);
  };
  /* Queries all whitelisted address pairs */
  allWhitelistedAddresses = async (_params: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponse> => {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/whitelisted_addresses`;
    return await this.req.get<QueryAllWhitelistedAddressesResponse>(endpoint);
  };
}