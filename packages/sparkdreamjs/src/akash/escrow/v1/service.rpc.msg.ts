//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgAccountDeposit, MsgAccountDepositResponse } from "./msg";
/** Msg defines the x/deployment Msg service. */
export interface Msg {
  /** AccountDeposit deposits more funds into the escrow account. */
  accountDeposit(request: MsgAccountDeposit): Promise<MsgAccountDepositResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AccountDeposit deposits more funds into the escrow account. */
  accountDeposit = async (request: MsgAccountDeposit): Promise<MsgAccountDepositResponse> => {
    const data = MsgAccountDeposit.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1.Msg", "AccountDeposit", data);
    return promise.then(data => MsgAccountDepositResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};