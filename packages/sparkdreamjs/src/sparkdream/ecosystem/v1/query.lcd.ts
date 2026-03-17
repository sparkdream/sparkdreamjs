//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
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
    const endpoint = `sparkdream/ecosystem/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
}