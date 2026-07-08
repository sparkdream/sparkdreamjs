//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./paramsmsg";
/** Msg defines the wasm Msg service */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/wasm module
   * parameters. The authority is hard-coded to the x/gov module account.
   * 
   * Since: akash v2.0.0
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a governance operation for updating the x/wasm module
   parameters. The authority is hard-coded to the x/gov module account.
  
   Since: akash v2.0.0 */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("akash.wasm.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};