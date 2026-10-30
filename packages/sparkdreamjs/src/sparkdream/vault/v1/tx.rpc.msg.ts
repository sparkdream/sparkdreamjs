//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateVault, MsgCreateVaultResponse, MsgPropose, MsgProposeResponse, MsgApprove, MsgApproveResponse, MsgRevokeApproval, MsgRevokeApprovalResponse, MsgExecute, MsgExecuteResponse, MsgCancelProposal, MsgCancelProposalResponse, MsgUpdateVault, MsgUpdateVaultResponse, MsgAcceptVaultSigner, MsgAcceptVaultSignerResponse, MsgLeaveVault, MsgLeaveVaultResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** CreateVault defines the CreateVault RPC. */
  createVault(request: MsgCreateVault): Promise<MsgCreateVaultResponse>;
  /** Propose defines the Propose RPC. */
  propose(request: MsgPropose): Promise<MsgProposeResponse>;
  /** Approve defines the Approve RPC. */
  approve(request: MsgApprove): Promise<MsgApproveResponse>;
  /** RevokeApproval defines the RevokeApproval RPC. */
  revokeApproval(request: MsgRevokeApproval): Promise<MsgRevokeApprovalResponse>;
  /** Execute defines the Execute RPC. */
  execute(request: MsgExecute): Promise<MsgExecuteResponse>;
  /** CancelProposal defines the CancelProposal RPC. */
  cancelProposal(request: MsgCancelProposal): Promise<MsgCancelProposalResponse>;
  /** UpdateVault defines the UpdateVault RPC. */
  updateVault(request: MsgUpdateVault): Promise<MsgUpdateVaultResponse>;
  /** AcceptVaultSigner accepts the signer's own listing in a vault. */
  acceptVaultSigner(request: MsgAcceptVaultSigner): Promise<MsgAcceptVaultSignerResponse>;
  /** LeaveVault removes the signer's own entry from a vault. */
  leaveVault(request: MsgLeaveVault): Promise<MsgLeaveVaultResponse>;
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
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateVault defines the CreateVault RPC. */
  createVault = async (request: MsgCreateVault): Promise<MsgCreateVaultResponse> => {
    const data = MsgCreateVault.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "CreateVault", data);
    return promise.then(data => MsgCreateVaultResponse.decode(new BinaryReader(data)));
  };
  /* Propose defines the Propose RPC. */
  propose = async (request: MsgPropose): Promise<MsgProposeResponse> => {
    const data = MsgPropose.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "Propose", data);
    return promise.then(data => MsgProposeResponse.decode(new BinaryReader(data)));
  };
  /* Approve defines the Approve RPC. */
  approve = async (request: MsgApprove): Promise<MsgApproveResponse> => {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "Approve", data);
    return promise.then(data => MsgApproveResponse.decode(new BinaryReader(data)));
  };
  /* RevokeApproval defines the RevokeApproval RPC. */
  revokeApproval = async (request: MsgRevokeApproval): Promise<MsgRevokeApprovalResponse> => {
    const data = MsgRevokeApproval.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "RevokeApproval", data);
    return promise.then(data => MsgRevokeApprovalResponse.decode(new BinaryReader(data)));
  };
  /* Execute defines the Execute RPC. */
  execute = async (request: MsgExecute): Promise<MsgExecuteResponse> => {
    const data = MsgExecute.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "Execute", data);
    return promise.then(data => MsgExecuteResponse.decode(new BinaryReader(data)));
  };
  /* CancelProposal defines the CancelProposal RPC. */
  cancelProposal = async (request: MsgCancelProposal): Promise<MsgCancelProposalResponse> => {
    const data = MsgCancelProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "CancelProposal", data);
    return promise.then(data => MsgCancelProposalResponse.decode(new BinaryReader(data)));
  };
  /* UpdateVault defines the UpdateVault RPC. */
  updateVault = async (request: MsgUpdateVault): Promise<MsgUpdateVaultResponse> => {
    const data = MsgUpdateVault.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "UpdateVault", data);
    return promise.then(data => MsgUpdateVaultResponse.decode(new BinaryReader(data)));
  };
  /* AcceptVaultSigner accepts the signer's own listing in a vault. */
  acceptVaultSigner = async (request: MsgAcceptVaultSigner): Promise<MsgAcceptVaultSignerResponse> => {
    const data = MsgAcceptVaultSigner.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "AcceptVaultSigner", data);
    return promise.then(data => MsgAcceptVaultSignerResponse.decode(new BinaryReader(data)));
  };
  /* LeaveVault removes the signer's own entry from a vault. */
  leaveVault = async (request: MsgLeaveVault): Promise<MsgLeaveVaultResponse> => {
    const data = MsgLeaveVault.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Msg", "LeaveVault", data);
    return promise.then(data => MsgLeaveVaultResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};