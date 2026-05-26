//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllowedMsgsRequest, QueryAllowedMsgsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * AllowedMsgs returns the list of inner msg type URLs that guardian
   * will route through MsgExec. The list is built into the binary; this
   * query exposes it for operator inspection.
   */
  allowedMsgs(request?: QueryAllowedMsgsRequest): Promise<QueryAllowedMsgsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AllowedMsgs returns the list of inner msg type URLs that guardian
   will route through MsgExec. The list is built into the binary; this
   query exposes it for operator inspection. */
  allowedMsgs = async (request: QueryAllowedMsgsRequest = {}): Promise<QueryAllowedMsgsResponse> => {
    const data = QueryAllowedMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.guardian.v1.Query", "AllowedMsgs", data);
    return promise.then(data => QueryAllowedMsgsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowedMsgs(request?: QueryAllowedMsgsRequest): Promise<QueryAllowedMsgsResponse> {
      return queryService.allowedMsgs(request);
    }
  };
};