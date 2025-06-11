//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryEpochInfosRequest, QueryEpochInfosResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* EpochInfos provide running epochInfos */
  epochInfos = async (_params: QueryEpochInfosRequest = {}): Promise<QueryEpochInfosResponse> => {
    const endpoint = `cosmos/epochs/v1beta1/epochs`;
    return await this.req.get<QueryEpochInfosResponse>(endpoint);
  };
  /* CurrentEpoch provide current epoch of specified identifier */
  currentEpoch = async (params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }
    const endpoint = `cosmos/epochs/v1beta1/current_epoch`;
    return await this.req.get<QueryCurrentEpochResponse>(endpoint, options);
  };
}