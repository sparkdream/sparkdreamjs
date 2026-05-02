//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgRegisterName, MsgRegisterNameResponse, MsgSetPrimary, MsgSetPrimaryResponse, MsgFileDispute, MsgFileDisputeResponse, MsgContestDispute, MsgContestDisputeResponse, MsgResolveDispute, MsgResolveDisputeResponse, MsgUpdateName, MsgUpdateNameResponse, MsgSetDisplayName, MsgSetDisplayNameResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateOperationalParams defines an operation for updating the module's
   * operational parameters. Authorized for Commons Council Operations Committee.
   */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** RegisterName defines the RegisterName RPC. */
  registerName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
  /** SetPrimary defines the SetPrimary RPC. */
  setPrimary(request: MsgSetPrimary): Promise<MsgSetPrimaryResponse>;
  /** FileDispute files a name ownership dispute with DREAM staking. */
  fileDispute(request: MsgFileDispute): Promise<MsgFileDisputeResponse>;
  /**
   * ContestDispute allows the current name owner to contest a filed dispute.
   * Triggers jury review via x/rep.
   */
  contestDispute(request: MsgContestDispute): Promise<MsgContestDisputeResponse>;
  /** ResolveDispute resolves a name dispute after jury verdict or governance decision. */
  resolveDispute(request: MsgResolveDispute): Promise<MsgResolveDisputeResponse>;
  /** UpdateName defines the UpdateName RPC. */
  updateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>;
  /**
   * SetDisplayName sets (or clears) the free-form display name on the
   * signer's OwnerInfo. Empty display_name clears the field.
   */
  setDisplayName(request: MsgSetDisplayName): Promise<MsgSetDisplayNameResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module's
   operational parameters. Authorized for Commons Council Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* RegisterName defines the RegisterName RPC. */
  registerName = async (request: MsgRegisterName): Promise<MsgRegisterNameResponse> => {
    const data = MsgRegisterName.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "RegisterName", data);
    return promise.then(data => MsgRegisterNameResponse.decode(new BinaryReader(data)));
  };
  /* SetPrimary defines the SetPrimary RPC. */
  setPrimary = async (request: MsgSetPrimary): Promise<MsgSetPrimaryResponse> => {
    const data = MsgSetPrimary.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "SetPrimary", data);
    return promise.then(data => MsgSetPrimaryResponse.decode(new BinaryReader(data)));
  };
  /* FileDispute files a name ownership dispute with DREAM staking. */
  fileDispute = async (request: MsgFileDispute): Promise<MsgFileDisputeResponse> => {
    const data = MsgFileDispute.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "FileDispute", data);
    return promise.then(data => MsgFileDisputeResponse.decode(new BinaryReader(data)));
  };
  /* ContestDispute allows the current name owner to contest a filed dispute.
   Triggers jury review via x/rep. */
  contestDispute = async (request: MsgContestDispute): Promise<MsgContestDisputeResponse> => {
    const data = MsgContestDispute.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "ContestDispute", data);
    return promise.then(data => MsgContestDisputeResponse.decode(new BinaryReader(data)));
  };
  /* ResolveDispute resolves a name dispute after jury verdict or governance decision. */
  resolveDispute = async (request: MsgResolveDispute): Promise<MsgResolveDisputeResponse> => {
    const data = MsgResolveDispute.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "ResolveDispute", data);
    return promise.then(data => MsgResolveDisputeResponse.decode(new BinaryReader(data)));
  };
  /* UpdateName defines the UpdateName RPC. */
  updateName = async (request: MsgUpdateName): Promise<MsgUpdateNameResponse> => {
    const data = MsgUpdateName.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "UpdateName", data);
    return promise.then(data => MsgUpdateNameResponse.decode(new BinaryReader(data)));
  };
  /* SetDisplayName sets (or clears) the free-form display name on the
   signer's OwnerInfo. Empty display_name clears the field. */
  setDisplayName = async (request: MsgSetDisplayName): Promise<MsgSetDisplayNameResponse> => {
    const data = MsgSetDisplayName.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Msg", "SetDisplayName", data);
    return promise.then(data => MsgSetDisplayNameResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};