//@ts-nocheck
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgSendCall, MsgSendCallResponse } from "./tx";
/** Msg defines the ibc/gmp Msg service. */
export interface Msg {
  /** SendCall defines a rpc handler method for MsgSendCall. */
  sendCall(request: MsgSendCall): Promise<MsgSendCallResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SendCall defines a rpc handler method for MsgSendCall. */
  sendCall = async (request: MsgSendCall): Promise<MsgSendCallResponse> => {
    const data = MsgSendCall.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.gmp.v1.Msg", "SendCall", data);
    return promise.then(data => MsgSendCallResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};