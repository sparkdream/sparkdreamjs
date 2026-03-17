//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgPropose, MsgProposeResponse, MsgApprove, MsgApproveResponse, MsgReject, MsgRejectResponse, MsgStake, MsgStakeResponse, MsgWithdraw, MsgWithdrawResponse, MsgReveal, MsgRevealResponse, MsgVerify, MsgVerifyResponse, MsgCancel, MsgCancelResponse, MsgResolveDispute, MsgResolveDisputeResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** Propose creates a new contribution proposal with bond. */
  propose(request: MsgPropose): Promise<MsgProposeResponse>;
  /** Approve approves a contribution (routed as Commons Council proposal). */
  approve(request: MsgApprove): Promise<MsgApproveResponse>;
  /** Reject rejects a contribution (routed as Commons Council proposal). */
  reject(request: MsgReject): Promise<MsgRejectResponse>;
  /** Stake locks DREAM toward a tranche to show conviction. */
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  /** Withdraw withdraws a stake (only allowed before verification period). */
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** Reveal submits code for a backed tranche. */
  reveal(request: MsgReveal): Promise<MsgRevealResponse>;
  /** Verify casts a verification vote on revealed code. */
  verify(request: MsgVerify): Promise<MsgVerifyResponse>;
  /** Cancel cancels a contribution. */
  cancel(request: MsgCancel): Promise<MsgCancelResponse>;
  /** ResolveDispute resolves a tranche dispute (routed as Commons Council proposal). */
  resolveDispute(request: MsgResolveDispute): Promise<MsgResolveDisputeResponse>;
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
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* Propose creates a new contribution proposal with bond. */
  propose = async (request: MsgPropose): Promise<MsgProposeResponse> => {
    const data = MsgPropose.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Propose", data);
    return promise.then(data => MsgProposeResponse.decode(new BinaryReader(data)));
  };
  /* Approve approves a contribution (routed as Commons Council proposal). */
  approve = async (request: MsgApprove): Promise<MsgApproveResponse> => {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Approve", data);
    return promise.then(data => MsgApproveResponse.decode(new BinaryReader(data)));
  };
  /* Reject rejects a contribution (routed as Commons Council proposal). */
  reject = async (request: MsgReject): Promise<MsgRejectResponse> => {
    const data = MsgReject.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Reject", data);
    return promise.then(data => MsgRejectResponse.decode(new BinaryReader(data)));
  };
  /* Stake locks DREAM toward a tranche to show conviction. */
  stake = async (request: MsgStake): Promise<MsgStakeResponse> => {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new BinaryReader(data)));
  };
  /* Withdraw withdraws a stake (only allowed before verification period). */
  withdraw = async (request: MsgWithdraw): Promise<MsgWithdrawResponse> => {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  };
  /* Reveal submits code for a backed tranche. */
  reveal = async (request: MsgReveal): Promise<MsgRevealResponse> => {
    const data = MsgReveal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Reveal", data);
    return promise.then(data => MsgRevealResponse.decode(new BinaryReader(data)));
  };
  /* Verify casts a verification vote on revealed code. */
  verify = async (request: MsgVerify): Promise<MsgVerifyResponse> => {
    const data = MsgVerify.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Verify", data);
    return promise.then(data => MsgVerifyResponse.decode(new BinaryReader(data)));
  };
  /* Cancel cancels a contribution. */
  cancel = async (request: MsgCancel): Promise<MsgCancelResponse> => {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "Cancel", data);
    return promise.then(data => MsgCancelResponse.decode(new BinaryReader(data)));
  };
  /* ResolveDispute resolves a tranche dispute (routed as Commons Council proposal). */
  resolveDispute = async (request: MsgResolveDispute): Promise<MsgResolveDisputeResponse> => {
    const data = MsgResolveDispute.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Msg", "ResolveDispute", data);
    return promise.then(data => MsgResolveDisputeResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};