//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryContinuousFundRequest, QueryContinuousFundResponse, QueryContinuousFundsRequest, QueryContinuousFundsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* CommunityPool queries the community pool coins. */
  communityPool = async (_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> => {
    const endpoint = `cosmos/protocolpool/v1/community_pool`;
    return await this.req.get<QueryCommunityPoolResponse>(endpoint);
  };
  /* ContinuousFund queries a continuous fund by the recipient is is associated with. */
  continuousFund = async (params: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse> => {
    const endpoint = `cosmos/protocolpool/v1/continuous_funds/${params.recipient}`;
    return await this.req.get<QueryContinuousFundResponse>(endpoint);
  };
  /* ContinuousFunds queries all continuous funds in the store. */
  continuousFunds = async (_params: QueryContinuousFundsRequest = {}): Promise<QueryContinuousFundsResponse> => {
    const endpoint = `cosmos/protocolpool/v1/continuous_funds`;
    return await this.req.get<QueryContinuousFundsResponse>(endpoint);
  };
  /* Params returns the total set of x/protocolpool parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/protocolpool/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
}