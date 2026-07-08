//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgAddPriceEntry, MsgAddPriceEntryResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./msgs";
/** Msg defines the oracle Msg service for managing price feeds */
export interface Msg {
  /** AddPriceEntry adds a new price entry for a denomination from an authorized source */
  addPriceEntry(request: MsgAddPriceEntry): Promise<MsgAddPriceEntryResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/oracle module
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
  /* AddPriceEntry adds a new price entry for a denomination from an authorized source */
  addPriceEntry = async (request: MsgAddPriceEntry): Promise<MsgAddPriceEntryResponse> => {
    const data = MsgAddPriceEntry.encode(request).finish();
    const promise = this.rpc.request("akash.oracle.v2.Msg", "AddPriceEntry", data);
    return promise.then(data => MsgAddPriceEntryResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams defines a governance operation for updating the x/oracle module
   parameters. The authority is hard-coded to the x/gov module account.
  
   Since: akash v2.0.0 */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("akash.oracle.v2.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};