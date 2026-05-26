//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryAllowedMsgsRequest, QueryAllowedMsgsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* AllowedMsgs returns the list of inner msg type URLs that guardian
   will route through MsgExec. The list is built into the binary; this
   query exposes it for operator inspection. */
  allowedMsgs = async (_params: QueryAllowedMsgsRequest = {}): Promise<QueryAllowedMsgsResponse> => {
    const endpoint = `sparkdream/guardian/v1/allowed_msgs`;
    return await this.req.get<QueryAllowedMsgsResponse>(endpoint);
  };
}