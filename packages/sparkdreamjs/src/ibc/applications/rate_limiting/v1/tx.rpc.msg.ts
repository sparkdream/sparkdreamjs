//@ts-nocheck
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgAddRateLimit, MsgAddRateLimitResponse, MsgUpdateRateLimit, MsgUpdateRateLimitResponse, MsgRemoveRateLimit, MsgRemoveRateLimitResponse, MsgResetRateLimit, MsgResetRateLimitResponse } from "./tx";
/** Msg service for rate limit txs */
export interface Msg {
  /** Gov tx to add a new rate limit */
  addRateLimit(request: MsgAddRateLimit): Promise<MsgAddRateLimitResponse>;
  /** Gov tx to update an existing rate limit */
  updateRateLimit(request: MsgUpdateRateLimit): Promise<MsgUpdateRateLimitResponse>;
  /** Gov tx to remove a rate limit */
  removeRateLimit(request: MsgRemoveRateLimit): Promise<MsgRemoveRateLimitResponse>;
  /** Gov tx to reset the flow on a rate limit */
  resetRateLimit(request: MsgResetRateLimit): Promise<MsgResetRateLimitResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Gov tx to add a new rate limit */
  addRateLimit = async (request: MsgAddRateLimit): Promise<MsgAddRateLimitResponse> => {
    const data = MsgAddRateLimit.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Msg", "AddRateLimit", data);
    return promise.then(data => MsgAddRateLimitResponse.decode(new BinaryReader(data)));
  };
  /* Gov tx to update an existing rate limit */
  updateRateLimit = async (request: MsgUpdateRateLimit): Promise<MsgUpdateRateLimitResponse> => {
    const data = MsgUpdateRateLimit.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Msg", "UpdateRateLimit", data);
    return promise.then(data => MsgUpdateRateLimitResponse.decode(new BinaryReader(data)));
  };
  /* Gov tx to remove a rate limit */
  removeRateLimit = async (request: MsgRemoveRateLimit): Promise<MsgRemoveRateLimitResponse> => {
    const data = MsgRemoveRateLimit.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Msg", "RemoveRateLimit", data);
    return promise.then(data => MsgRemoveRateLimitResponse.decode(new BinaryReader(data)));
  };
  /* Gov tx to reset the flow on a rate limit */
  resetRateLimit = async (request: MsgResetRateLimit): Promise<MsgResetRateLimitResponse> => {
    const data = MsgResetRateLimit.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Msg", "ResetRateLimit", data);
    return promise.then(data => MsgResetRateLimitResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};