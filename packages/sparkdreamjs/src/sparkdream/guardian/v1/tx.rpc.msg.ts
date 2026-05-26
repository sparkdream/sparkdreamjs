//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgExec, MsgExecResponse } from "./tx";
/** Msg defines the guardian Msg service. */
export interface Msg {
  /**
   * Exec routes the inner msg to the appropriate target module, with the
   * guardian's module address substituted as the inner msg's `Authority`
   * field. Per-msg-type filters validate field constraints (e.g., reject
   * inflation_min changes on mint.MsgUpdateParams) before routing.
   * 
   * The outer `authority` field is the address authorized to call guardian
   * (the gov module account in production wiring). Unknown inner msg types
   * are rejected: guardian uses an allowlist, not a denylist.
   */
  exec(request: MsgExec): Promise<MsgExecResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Exec routes the inner msg to the appropriate target module, with the
   guardian's module address substituted as the inner msg's `Authority`
   field. Per-msg-type filters validate field constraints (e.g., reject
   inflation_min changes on mint.MsgUpdateParams) before routing.
  
   The outer `authority` field is the address authorized to call guardian
   (the gov module account in production wiring). Unknown inner msg types
   are rejected: guardian uses an allowlist, not a denylist. */
  exec = async (request: MsgExec): Promise<MsgExecResponse> => {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("sparkdream.guardian.v1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};