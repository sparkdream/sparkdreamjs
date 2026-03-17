//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgShieldedExec, MsgShieldedExecResponse, MsgTriggerDkg, MsgTriggerDkgResponse, MsgRegisterShieldedOp, MsgRegisterShieldedOpResponse, MsgDeregisterShieldedOp, MsgDeregisterShieldedOpResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** UpdateParams defines a (governance) operation for updating the module parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** ShieldedExec is the single entry point for all anonymous operations. */
  shieldedExec(request: MsgShieldedExec): Promise<MsgShieldedExecResponse>;
  /**
   * TriggerDKG manually triggers a new DKG ceremony (governance-gated).
   * Normally DKG is auto-triggered by BeginBlocker when validator count >= min_tle_validators.
   * Use this to force re-keying or restart a failed DKG.
   */
  triggerDKG(request: MsgTriggerDkg): Promise<MsgTriggerDkgResponse>;
  /** RegisterShieldedOp registers or updates a shielded operation (governance-gated). */
  registerShieldedOp(request: MsgRegisterShieldedOp): Promise<MsgRegisterShieldedOpResponse>;
  /** DeregisterShieldedOp fully removes a shielded operation registration (governance-gated). */
  deregisterShieldedOp(request: MsgDeregisterShieldedOp): Promise<MsgDeregisterShieldedOpResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module parameters. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* ShieldedExec is the single entry point for all anonymous operations. */
  shieldedExec = async (request: MsgShieldedExec): Promise<MsgShieldedExecResponse> => {
    const data = MsgShieldedExec.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Msg", "ShieldedExec", data);
    return promise.then(data => MsgShieldedExecResponse.decode(new BinaryReader(data)));
  };
  /* TriggerDKG manually triggers a new DKG ceremony (governance-gated).
   Normally DKG is auto-triggered by BeginBlocker when validator count >= min_tle_validators.
   Use this to force re-keying or restart a failed DKG. */
  triggerDKG = async (request: MsgTriggerDkg): Promise<MsgTriggerDkgResponse> => {
    const data = MsgTriggerDkg.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Msg", "TriggerDKG", data);
    return promise.then(data => MsgTriggerDkgResponse.decode(new BinaryReader(data)));
  };
  /* RegisterShieldedOp registers or updates a shielded operation (governance-gated). */
  registerShieldedOp = async (request: MsgRegisterShieldedOp): Promise<MsgRegisterShieldedOpResponse> => {
    const data = MsgRegisterShieldedOp.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Msg", "RegisterShieldedOp", data);
    return promise.then(data => MsgRegisterShieldedOpResponse.decode(new BinaryReader(data)));
  };
  /* DeregisterShieldedOp fully removes a shielded operation registration (governance-gated). */
  deregisterShieldedOp = async (request: MsgDeregisterShieldedOp): Promise<MsgDeregisterShieldedOpResponse> => {
    const data = MsgDeregisterShieldedOp.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Msg", "DeregisterShieldedOp", data);
    return promise.then(data => MsgDeregisterShieldedOpResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};