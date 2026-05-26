//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgCreateSession, MsgCreateSessionResponse, MsgRevokeSession, MsgRevokeSessionResponse, MsgExecSession, MsgExecSessionResponse, MsgCreateGrant, MsgCreateGrantResponse, MsgClaimRecurringPull, MsgClaimRecurringPullResponse, MsgPullAllowance, MsgPullAllowanceResponse, MsgRetryScheduledOneshot, MsgRetryScheduledOneshotResponse, MsgRevokeGrant, MsgRevokeGrantResponse, MsgDeclineGrant, MsgDeclineGrantResponse } from "./tx";
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
  /**
   * CreateSession creates a new session key delegation.
   * 
   * DEPRECATED in favor of `CreateGrant` with a SessionKeyPayload; kept for
   * pre-launch backward compatibility and removed at P6.
   */
  createSession(request: MsgCreateSession): Promise<MsgCreateSessionResponse>;
  /**
   * RevokeSession revokes an active session.
   * 
   * DEPRECATED in favor of `RevokeGrant` (P6); kept for pre-launch backward
   * compatibility.
   */
  revokeSession(request: MsgRevokeSession): Promise<MsgRevokeSessionResponse>;
  /** ExecSession executes messages using a session key. */
  execSession(request: MsgExecSession): Promise<MsgExecSessionResponse>;
  /**
   * CreateGrant is the unified entrypoint that creates any of the four typed
   * grants. Type is inferred from the payload oneof.
   */
  createGrant(request: MsgCreateGrant): Promise<MsgCreateGrantResponse>;
  /**
   * ClaimRecurringPull disburses one period of a RECURRING_PULL grant from
   * the granter to the grantee. Logical-clock advances; catch-up requires
   * multiple txs.
   */
  claimRecurringPull(request: MsgClaimRecurringPull): Promise<MsgClaimRecurringPullResponse>;
  /**
   * PullAllowance withdraws an amount from a SPENDING_ALLOWANCE grant
   * budget to a chosen recipient (constrained by the optional whitelist
   * and the per-period cap). The grantee picks the recipient and amount
   * per call within the rolling-window budget.
   */
  pullAllowance(request: MsgPullAllowance): Promise<MsgPullAllowanceResponse>;
  /**
   * RetryScheduledOneshot re-enqueues a PAUSED_INSUFFICIENT_FUNDS
   * ScheduledOneshot for firing. Either the granter or the grantee may
   * call (no additional authorization needed — the granter already
   * authorized the underlying action at creation time). Sets
   * fire_at = block_time on success.
   */
  retryScheduledOneshot(request: MsgRetryScheduledOneshot): Promise<MsgRetryScheduledOneshotResponse>;
  /**
   * RevokeGrant cancels any active grant by id. Signed by the granter
   * on file. Refunds any held OneshotGasDeposit for SCHEDULED_ONESHOT
   * grants. A session-key holder may invoke this only when the session
   * key's SessionKeyPayload.allow_self_revoke = true AND the targeted
   * grant's granter matches the session-key granter (anti
   * cross-granter-revoke).
   */
  revokeGrant(request: MsgRevokeGrant): Promise<MsgRevokeGrantResponse>;
  /**
   * DeclineGrant lets the grantee opt out of any active grant by id.
   * Applies uniformly across all four grant types. For ScheduledOneshot
   * this is a pre-fire veto: the grant transitions to DECLINED, the
   * EndBlocker skips it, and the held deposit is refunded to the
   * granter. Decline is one-way — the granter must Revoke + CreateGrant
   * to retry.
   */
  declineGrant(request: MsgDeclineGrant): Promise<MsgDeclineGrantResponse>;
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
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module's
   operational parameters. Authorized for Commons Council Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateSession creates a new session key delegation.
  
   DEPRECATED in favor of `CreateGrant` with a SessionKeyPayload; kept for
   pre-launch backward compatibility and removed at P6. */
  createSession = async (request: MsgCreateSession): Promise<MsgCreateSessionResponse> => {
    const data = MsgCreateSession.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "CreateSession", data);
    return promise.then(data => MsgCreateSessionResponse.decode(new BinaryReader(data)));
  };
  /* RevokeSession revokes an active session.
  
   DEPRECATED in favor of `RevokeGrant` (P6); kept for pre-launch backward
   compatibility. */
  revokeSession = async (request: MsgRevokeSession): Promise<MsgRevokeSessionResponse> => {
    const data = MsgRevokeSession.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "RevokeSession", data);
    return promise.then(data => MsgRevokeSessionResponse.decode(new BinaryReader(data)));
  };
  /* ExecSession executes messages using a session key. */
  execSession = async (request: MsgExecSession): Promise<MsgExecSessionResponse> => {
    const data = MsgExecSession.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "ExecSession", data);
    return promise.then(data => MsgExecSessionResponse.decode(new BinaryReader(data)));
  };
  /* CreateGrant is the unified entrypoint that creates any of the four typed
   grants. Type is inferred from the payload oneof. */
  createGrant = async (request: MsgCreateGrant): Promise<MsgCreateGrantResponse> => {
    const data = MsgCreateGrant.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "CreateGrant", data);
    return promise.then(data => MsgCreateGrantResponse.decode(new BinaryReader(data)));
  };
  /* ClaimRecurringPull disburses one period of a RECURRING_PULL grant from
   the granter to the grantee. Logical-clock advances; catch-up requires
   multiple txs. */
  claimRecurringPull = async (request: MsgClaimRecurringPull): Promise<MsgClaimRecurringPullResponse> => {
    const data = MsgClaimRecurringPull.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "ClaimRecurringPull", data);
    return promise.then(data => MsgClaimRecurringPullResponse.decode(new BinaryReader(data)));
  };
  /* PullAllowance withdraws an amount from a SPENDING_ALLOWANCE grant
   budget to a chosen recipient (constrained by the optional whitelist
   and the per-period cap). The grantee picks the recipient and amount
   per call within the rolling-window budget. */
  pullAllowance = async (request: MsgPullAllowance): Promise<MsgPullAllowanceResponse> => {
    const data = MsgPullAllowance.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "PullAllowance", data);
    return promise.then(data => MsgPullAllowanceResponse.decode(new BinaryReader(data)));
  };
  /* RetryScheduledOneshot re-enqueues a PAUSED_INSUFFICIENT_FUNDS
   ScheduledOneshot for firing. Either the granter or the grantee may
   call (no additional authorization needed — the granter already
   authorized the underlying action at creation time). Sets
   fire_at = block_time on success. */
  retryScheduledOneshot = async (request: MsgRetryScheduledOneshot): Promise<MsgRetryScheduledOneshotResponse> => {
    const data = MsgRetryScheduledOneshot.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "RetryScheduledOneshot", data);
    return promise.then(data => MsgRetryScheduledOneshotResponse.decode(new BinaryReader(data)));
  };
  /* RevokeGrant cancels any active grant by id. Signed by the granter
   on file. Refunds any held OneshotGasDeposit for SCHEDULED_ONESHOT
   grants. A session-key holder may invoke this only when the session
   key's SessionKeyPayload.allow_self_revoke = true AND the targeted
   grant's granter matches the session-key granter (anti
   cross-granter-revoke). */
  revokeGrant = async (request: MsgRevokeGrant): Promise<MsgRevokeGrantResponse> => {
    const data = MsgRevokeGrant.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "RevokeGrant", data);
    return promise.then(data => MsgRevokeGrantResponse.decode(new BinaryReader(data)));
  };
  /* DeclineGrant lets the grantee opt out of any active grant by id.
   Applies uniformly across all four grant types. For ScheduledOneshot
   this is a pre-fire veto: the grant transitions to DECLINED, the
   EndBlocker skips it, and the held deposit is refunded to the
   granter. Decline is one-way — the granter must Revoke + CreateGrant
   to retry. */
  declineGrant = async (request: MsgDeclineGrant): Promise<MsgDeclineGrantResponse> => {
    const data = MsgDeclineGrant.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "DeclineGrant", data);
    return promise.then(data => MsgDeclineGrantResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};