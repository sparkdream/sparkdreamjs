//@ts-nocheck
import { Params, ParamsAmino, SessionOperationalParams, SessionOperationalParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { SessionKeyPayload, SessionKeyPayloadAmino, RecurringPullPayload, RecurringPullPayloadAmino, SpendingAllowancePayload, SpendingAllowancePayloadAmino, ScheduledOneshotPayload, ScheduledOneshotPayloadAmino } from "./grant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/session/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Operations Committee policy address.
   */
  authority: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operationalParams: SessionOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Operations Committee policy address.
   */
  authority?: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operational_params: SessionOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/session/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgCreateSession creates a new session key delegation. Signed by the granter.
 * @name MsgCreateSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSession
 */
export interface MsgCreateSession {
  granter: string;
  grantee: string;
  allowedMsgTypes: string[];
  spendLimit: Coin;
  expiration: Date;
  maxExecCount: bigint;
}
export interface MsgCreateSessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgCreateSession";
  value: Uint8Array;
}
/**
 * MsgCreateSession creates a new session key delegation. Signed by the granter.
 * @name MsgCreateSessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSession
 */
export interface MsgCreateSessionAmino {
  granter?: string;
  grantee?: string;
  allowed_msg_types?: string[];
  spend_limit?: CoinAmino;
  expiration?: string;
  max_exec_count?: string;
}
export interface MsgCreateSessionAminoMsg {
  type: "sparkdream/x/session/MsgCreateSession";
  value: MsgCreateSessionAmino;
}
/**
 * @name MsgCreateSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSessionResponse
 */
export interface MsgCreateSessionResponse {}
export interface MsgCreateSessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgCreateSessionResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateSessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSessionResponse
 */
export interface MsgCreateSessionResponseAmino {}
export interface MsgCreateSessionResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgCreateSessionResponse";
  value: MsgCreateSessionResponseAmino;
}
/**
 * MsgRevokeSession revokes an active session. Signed by the granter.
 * @name MsgRevokeSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSession
 */
export interface MsgRevokeSession {
  granter: string;
  grantee: string;
}
export interface MsgRevokeSessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSession";
  value: Uint8Array;
}
/**
 * MsgRevokeSession revokes an active session. Signed by the granter.
 * @name MsgRevokeSessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSession
 */
export interface MsgRevokeSessionAmino {
  granter?: string;
  grantee?: string;
}
export interface MsgRevokeSessionAminoMsg {
  type: "sparkdream/x/session/MsgRevokeSession";
  value: MsgRevokeSessionAmino;
}
/**
 * @name MsgRevokeSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSessionResponse
 */
export interface MsgRevokeSessionResponse {}
export interface MsgRevokeSessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSessionResponse";
  value: Uint8Array;
}
/**
 * @name MsgRevokeSessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSessionResponse
 */
export interface MsgRevokeSessionResponseAmino {}
export interface MsgRevokeSessionResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgRevokeSessionResponse";
  value: MsgRevokeSessionResponseAmino;
}
/**
 * MsgExecSession executes messages using a session key. Signed by the grantee.
 * @name MsgExecSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSession
 */
export interface MsgExecSession {
  grantee: string;
  granter: string;
  /**
   * Inner messages to execute on behalf of the granter (max 10).
   */
  msgs: Any[];
}
export interface MsgExecSessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgExecSession";
  value: Uint8Array;
}
/**
 * MsgExecSession executes messages using a session key. Signed by the grantee.
 * @name MsgExecSessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSession
 */
export interface MsgExecSessionAmino {
  grantee?: string;
  granter?: string;
  /**
   * Inner messages to execute on behalf of the granter (max 10).
   */
  msgs?: AnyAmino[];
}
export interface MsgExecSessionAminoMsg {
  type: "sparkdream/x/session/MsgExecSession";
  value: MsgExecSessionAmino;
}
/**
 * @name MsgExecSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSessionResponse
 */
export interface MsgExecSessionResponse {}
export interface MsgExecSessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgExecSessionResponse";
  value: Uint8Array;
}
/**
 * @name MsgExecSessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSessionResponse
 */
export interface MsgExecSessionResponseAmino {}
export interface MsgExecSessionResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgExecSessionResponse";
  value: MsgExecSessionResponseAmino;
}
/**
 * MsgCreateGrant is the unified entrypoint for creating any of the four
 * typed grants. The grant type is inferred from the payload oneof; the
 * handler dispatches to type-specific validation. Signed by the granter.
 * @name MsgCreateGrant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateGrant
 */
export interface MsgCreateGrant {
  granter: string;
  grantee: string;
  expiresAt: Date;
  /**
   * Optional human-readable purpose (256-char cap).
   */
  note: string;
  sessionKey?: SessionKeyPayload;
  recurringPull?: RecurringPullPayload;
  spendingAllowance?: SpendingAllowancePayload;
  scheduledOneshot?: ScheduledOneshotPayload;
}
export interface MsgCreateGrantProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgCreateGrant";
  value: Uint8Array;
}
/**
 * MsgCreateGrant is the unified entrypoint for creating any of the four
 * typed grants. The grant type is inferred from the payload oneof; the
 * handler dispatches to type-specific validation. Signed by the granter.
 * @name MsgCreateGrantAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateGrant
 */
export interface MsgCreateGrantAmino {
  granter?: string;
  grantee?: string;
  expires_at?: string;
  /**
   * Optional human-readable purpose (256-char cap).
   */
  note?: string;
  session_key?: SessionKeyPayloadAmino;
  recurring_pull?: RecurringPullPayloadAmino;
  spending_allowance?: SpendingAllowancePayloadAmino;
  scheduled_oneshot?: ScheduledOneshotPayloadAmino;
}
export interface MsgCreateGrantAminoMsg {
  type: "sparkdream/x/session/MsgCreateGrant";
  value: MsgCreateGrantAmino;
}
/**
 * @name MsgCreateGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateGrantResponse
 */
export interface MsgCreateGrantResponse {
  /**
   * Allocated grant id.
   */
  grantId: bigint;
}
export interface MsgCreateGrantResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgCreateGrantResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateGrantResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateGrantResponse
 */
export interface MsgCreateGrantResponseAmino {
  /**
   * Allocated grant id.
   */
  grant_id?: string;
}
export interface MsgCreateGrantResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgCreateGrantResponse";
  value: MsgCreateGrantResponseAmino;
}
/**
 * MsgClaimRecurringPull disburses one period of a RECURRING_PULL grant.
 * Signed by the grantee on file.
 * @name MsgClaimRecurringPull
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgClaimRecurringPull
 */
export interface MsgClaimRecurringPull {
  grantee: string;
  grantId: bigint;
}
export interface MsgClaimRecurringPullProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPull";
  value: Uint8Array;
}
/**
 * MsgClaimRecurringPull disburses one period of a RECURRING_PULL grant.
 * Signed by the grantee on file.
 * @name MsgClaimRecurringPullAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgClaimRecurringPull
 */
export interface MsgClaimRecurringPullAmino {
  grantee?: string;
  grant_id?: string;
}
export interface MsgClaimRecurringPullAminoMsg {
  type: "sparkdream/x/session/MsgClaimRecurringPull";
  value: MsgClaimRecurringPullAmino;
}
/**
 * @name MsgClaimRecurringPullResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgClaimRecurringPullResponse
 */
export interface MsgClaimRecurringPullResponse {
  /**
   * Sequence number of this claim (1-indexed).
   */
  claimNumber: bigint;
  /**
   * Unix timestamp at which the next claim becomes eligible.
   */
  nextClaimTime: bigint;
}
export interface MsgClaimRecurringPullResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPullResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimRecurringPullResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgClaimRecurringPullResponse
 */
export interface MsgClaimRecurringPullResponseAmino {
  /**
   * Sequence number of this claim (1-indexed).
   */
  claim_number?: string;
  /**
   * Unix timestamp at which the next claim becomes eligible.
   */
  next_claim_time?: string;
}
export interface MsgClaimRecurringPullResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgClaimRecurringPullResponse";
  value: MsgClaimRecurringPullResponseAmino;
}
/**
 * MsgPullAllowance withdraws `amount` from a SPENDING_ALLOWANCE grant
 * budget to `recipient`. Signed by the grantee on file.
 * @name MsgPullAllowance
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgPullAllowance
 */
export interface MsgPullAllowance {
  grantee: string;
  grantId: bigint;
  recipient: string;
  amount: Coin;
}
export interface MsgPullAllowanceProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgPullAllowance";
  value: Uint8Array;
}
/**
 * MsgPullAllowance withdraws `amount` from a SPENDING_ALLOWANCE grant
 * budget to `recipient`. Signed by the grantee on file.
 * @name MsgPullAllowanceAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgPullAllowance
 */
export interface MsgPullAllowanceAmino {
  grantee?: string;
  grant_id?: string;
  recipient?: string;
  amount?: CoinAmino;
}
export interface MsgPullAllowanceAminoMsg {
  type: "sparkdream/x/session/MsgPullAllowance";
  value: MsgPullAllowanceAmino;
}
/**
 * @name MsgPullAllowanceResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgPullAllowanceResponse
 */
export interface MsgPullAllowanceResponse {
  /**
   * Amount actually transferred (= request amount, for now). Exposed
   * separately so future variants (e.g., partial fills) keep the wire
   * shape stable.
   */
  transferred: Coin;
  /**
   * Total spent in the current rolling-window period after this pull.
   */
  spentInPeriod: Coin;
}
export interface MsgPullAllowanceResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgPullAllowanceResponse";
  value: Uint8Array;
}
/**
 * @name MsgPullAllowanceResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgPullAllowanceResponse
 */
export interface MsgPullAllowanceResponseAmino {
  /**
   * Amount actually transferred (= request amount, for now). Exposed
   * separately so future variants (e.g., partial fills) keep the wire
   * shape stable.
   */
  transferred?: CoinAmino;
  /**
   * Total spent in the current rolling-window period after this pull.
   */
  spent_in_period?: CoinAmino;
}
export interface MsgPullAllowanceResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgPullAllowanceResponse";
  value: MsgPullAllowanceResponseAmino;
}
/**
 * MsgRetryScheduledOneshot flips a PAUSED_INSUFFICIENT_FUNDS oneshot
 * back to ACTIVE with fire_at = block_time. Caller must be either the
 * granter or the grantee on file.
 * @name MsgRetryScheduledOneshot
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRetryScheduledOneshot
 */
export interface MsgRetryScheduledOneshot {
  /**
   * caller is the address re-enqueueing the oneshot. Must match either
   * the grant's granter or its grantee.
   */
  caller: string;
  grantId: bigint;
}
export interface MsgRetryScheduledOneshotProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshot";
  value: Uint8Array;
}
/**
 * MsgRetryScheduledOneshot flips a PAUSED_INSUFFICIENT_FUNDS oneshot
 * back to ACTIVE with fire_at = block_time. Caller must be either the
 * granter or the grantee on file.
 * @name MsgRetryScheduledOneshotAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRetryScheduledOneshot
 */
export interface MsgRetryScheduledOneshotAmino {
  /**
   * caller is the address re-enqueueing the oneshot. Must match either
   * the grant's granter or its grantee.
   */
  caller?: string;
  grant_id?: string;
}
export interface MsgRetryScheduledOneshotAminoMsg {
  type: "sparkdream/x/session/MsgRetryScheduledOneshot";
  value: MsgRetryScheduledOneshotAmino;
}
/**
 * @name MsgRetryScheduledOneshotResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRetryScheduledOneshotResponse
 */
export interface MsgRetryScheduledOneshotResponse {
  /**
   * New fire_at unix timestamp (= block_time).
   */
  newFireAt: bigint;
}
export interface MsgRetryScheduledOneshotResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshotResponse";
  value: Uint8Array;
}
/**
 * @name MsgRetryScheduledOneshotResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRetryScheduledOneshotResponse
 */
export interface MsgRetryScheduledOneshotResponseAmino {
  /**
   * New fire_at unix timestamp (= block_time).
   */
  new_fire_at?: string;
}
export interface MsgRetryScheduledOneshotResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgRetryScheduledOneshotResponse";
  value: MsgRetryScheduledOneshotResponseAmino;
}
/**
 * MsgRevokeGrant cancels any active grant by id. Signed by the granter
 * (or a session key with allow_self_revoke = true and same-granter
 * scope).
 * @name MsgRevokeGrant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeGrant
 */
export interface MsgRevokeGrant {
  /**
   * granter is the address invoking the revocation. Must match the
   * grant's granter field (no cross-granter revocation).
   */
  granter: string;
  grantId: bigint;
}
export interface MsgRevokeGrantProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRevokeGrant";
  value: Uint8Array;
}
/**
 * MsgRevokeGrant cancels any active grant by id. Signed by the granter
 * (or a session key with allow_self_revoke = true and same-granter
 * scope).
 * @name MsgRevokeGrantAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeGrant
 */
export interface MsgRevokeGrantAmino {
  /**
   * granter is the address invoking the revocation. Must match the
   * grant's granter field (no cross-granter revocation).
   */
  granter?: string;
  grant_id?: string;
}
export interface MsgRevokeGrantAminoMsg {
  type: "sparkdream/x/session/MsgRevokeGrant";
  value: MsgRevokeGrantAmino;
}
/**
 * @name MsgRevokeGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeGrantResponse
 */
export interface MsgRevokeGrantResponse {
  /**
   * refund_amount is the OneshotGasDeposit returned to the granter
   * (empty/zero for non-oneshot grants).
   */
  refundAmount: Coin;
}
export interface MsgRevokeGrantResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRevokeGrantResponse";
  value: Uint8Array;
}
/**
 * @name MsgRevokeGrantResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeGrantResponse
 */
export interface MsgRevokeGrantResponseAmino {
  /**
   * refund_amount is the OneshotGasDeposit returned to the granter
   * (empty/zero for non-oneshot grants).
   */
  refund_amount?: CoinAmino;
}
export interface MsgRevokeGrantResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgRevokeGrantResponse";
  value: MsgRevokeGrantResponseAmino;
}
/**
 * MsgDeclineGrant lets the grantee opt out of an active grant by id.
 * One-way; the granter must Revoke + CreateGrant to retry.
 * @name MsgDeclineGrant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgDeclineGrant
 */
export interface MsgDeclineGrant {
  grantee: string;
  grantId: bigint;
}
export interface MsgDeclineGrantProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgDeclineGrant";
  value: Uint8Array;
}
/**
 * MsgDeclineGrant lets the grantee opt out of an active grant by id.
 * One-way; the granter must Revoke + CreateGrant to retry.
 * @name MsgDeclineGrantAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgDeclineGrant
 */
export interface MsgDeclineGrantAmino {
  grantee?: string;
  grant_id?: string;
}
export interface MsgDeclineGrantAminoMsg {
  type: "sparkdream/x/session/MsgDeclineGrant";
  value: MsgDeclineGrantAmino;
}
/**
 * @name MsgDeclineGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgDeclineGrantResponse
 */
export interface MsgDeclineGrantResponse {
  /**
   * refund_amount is the OneshotGasDeposit returned to the granter
   * (empty/zero for non-oneshot grants).
   */
  refundAmount: Coin;
}
export interface MsgDeclineGrantResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgDeclineGrantResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeclineGrantResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgDeclineGrantResponse
 */
export interface MsgDeclineGrantResponseAmino {
  /**
   * refund_amount is the OneshotGasDeposit returned to the granter
   * (empty/zero for non-oneshot grants).
   */
  refund_amount?: CoinAmino;
}
export interface MsgDeclineGrantResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgDeclineGrantResponse";
  value: MsgDeclineGrantResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/session/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/session/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: SessionOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/session/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      SessionOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = SessionOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? SessionOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = SessionOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? SessionOperationalParams.toAmino(message.operationalParams) : SessionOperationalParams.toAmino(SessionOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/session/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSession(): MsgCreateSession {
  return {
    granter: "",
    grantee: "",
    allowedMsgTypes: [],
    spendLimit: Coin.fromPartial({}),
    expiration: new Date(),
    maxExecCount: BigInt(0)
  };
}
/**
 * MsgCreateSession creates a new session key delegation. Signed by the granter.
 * @name MsgCreateSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSession
 */
export const MsgCreateSession = {
  typeUrl: "/sparkdream.session.v1.MsgCreateSession",
  aminoType: "sparkdream/x/session/MsgCreateSession",
  encode(message: MsgCreateSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    for (const v of message.allowedMsgTypes) {
      writer.uint32(26).string(v!);
    }
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(34).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }
    if (message.maxExecCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxExecCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 4:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.maxExecCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateSession>): MsgCreateSession {
    const message = createBaseMsgCreateSession();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    message.expiration = object.expiration ?? undefined;
    message.maxExecCount = object.maxExecCount !== undefined && object.maxExecCount !== null ? BigInt(object.maxExecCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateSessionAmino): MsgCreateSession {
    const message = createBaseMsgCreateSession();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    if (object.max_exec_count !== undefined && object.max_exec_count !== null) {
      message.maxExecCount = BigInt(object.max_exec_count);
    }
    return message;
  },
  toAmino(message: MsgCreateSession): MsgCreateSessionAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSessionAminoMsg): MsgCreateSession {
    return MsgCreateSession.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateSession): MsgCreateSessionAminoMsg {
    return {
      type: "sparkdream/x/session/MsgCreateSession",
      value: MsgCreateSession.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateSessionProtoMsg): MsgCreateSession {
    return MsgCreateSession.decode(message.value);
  },
  toProto(message: MsgCreateSession): Uint8Array {
    return MsgCreateSession.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSession): MsgCreateSessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgCreateSession",
      value: MsgCreateSession.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSessionResponse(): MsgCreateSessionResponse {
  return {};
}
/**
 * @name MsgCreateSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSessionResponse
 */
export const MsgCreateSessionResponse = {
  typeUrl: "/sparkdream.session.v1.MsgCreateSessionResponse",
  encode(_: MsgCreateSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateSessionResponse>): MsgCreateSessionResponse {
    const message = createBaseMsgCreateSessionResponse();
    return message;
  },
  fromAmino(_: MsgCreateSessionResponseAmino): MsgCreateSessionResponse {
    const message = createBaseMsgCreateSessionResponse();
    return message;
  },
  toAmino(_: MsgCreateSessionResponse): MsgCreateSessionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateSessionResponseAminoMsg): MsgCreateSessionResponse {
    return MsgCreateSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSessionResponseProtoMsg): MsgCreateSessionResponse {
    return MsgCreateSessionResponse.decode(message.value);
  },
  toProto(message: MsgCreateSessionResponse): Uint8Array {
    return MsgCreateSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSessionResponse): MsgCreateSessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgCreateSessionResponse",
      value: MsgCreateSessionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeSession(): MsgRevokeSession {
  return {
    granter: "",
    grantee: ""
  };
}
/**
 * MsgRevokeSession revokes an active session. Signed by the granter.
 * @name MsgRevokeSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSession
 */
export const MsgRevokeSession = {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
  aminoType: "sparkdream/x/session/MsgRevokeSession",
  encode(message: MsgRevokeSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeSession>): MsgRevokeSession {
    const message = createBaseMsgRevokeSession();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeSessionAmino): MsgRevokeSession {
    const message = createBaseMsgRevokeSession();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgRevokeSession): MsgRevokeSessionAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeSessionAminoMsg): MsgRevokeSession {
    return MsgRevokeSession.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeSession): MsgRevokeSessionAminoMsg {
    return {
      type: "sparkdream/x/session/MsgRevokeSession",
      value: MsgRevokeSession.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeSessionProtoMsg): MsgRevokeSession {
    return MsgRevokeSession.decode(message.value);
  },
  toProto(message: MsgRevokeSession): Uint8Array {
    return MsgRevokeSession.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeSession): MsgRevokeSessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
      value: MsgRevokeSession.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeSessionResponse(): MsgRevokeSessionResponse {
  return {};
}
/**
 * @name MsgRevokeSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSessionResponse
 */
export const MsgRevokeSessionResponse = {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSessionResponse",
  encode(_: MsgRevokeSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRevokeSessionResponse>): MsgRevokeSessionResponse {
    const message = createBaseMsgRevokeSessionResponse();
    return message;
  },
  fromAmino(_: MsgRevokeSessionResponseAmino): MsgRevokeSessionResponse {
    const message = createBaseMsgRevokeSessionResponse();
    return message;
  },
  toAmino(_: MsgRevokeSessionResponse): MsgRevokeSessionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeSessionResponseAminoMsg): MsgRevokeSessionResponse {
    return MsgRevokeSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeSessionResponseProtoMsg): MsgRevokeSessionResponse {
    return MsgRevokeSessionResponse.decode(message.value);
  },
  toProto(message: MsgRevokeSessionResponse): Uint8Array {
    return MsgRevokeSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeSessionResponse): MsgRevokeSessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRevokeSessionResponse",
      value: MsgRevokeSessionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecSession(): MsgExecSession {
  return {
    grantee: "",
    granter: "",
    msgs: []
  };
}
/**
 * MsgExecSession executes messages using a session key. Signed by the grantee.
 * @name MsgExecSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSession
 */
export const MsgExecSession = {
  typeUrl: "/sparkdream.session.v1.MsgExecSession",
  aminoType: "sparkdream/x/session/MsgExecSession",
  encode(message: MsgExecSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecSession>): MsgExecSession {
    const message = createBaseMsgExecSession();
    message.grantee = object.grantee ?? "";
    message.granter = object.granter ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecSessionAmino): MsgExecSession {
    const message = createBaseMsgExecSession();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExecSession): MsgExecSessionAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.granter = message.granter === "" ? undefined : message.granter;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecSessionAminoMsg): MsgExecSession {
    return MsgExecSession.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecSession): MsgExecSessionAminoMsg {
    return {
      type: "sparkdream/x/session/MsgExecSession",
      value: MsgExecSession.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecSessionProtoMsg): MsgExecSession {
    return MsgExecSession.decode(message.value);
  },
  toProto(message: MsgExecSession): Uint8Array {
    return MsgExecSession.encode(message).finish();
  },
  toProtoMsg(message: MsgExecSession): MsgExecSessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgExecSession",
      value: MsgExecSession.encode(message).finish()
    };
  }
};
function createBaseMsgExecSessionResponse(): MsgExecSessionResponse {
  return {};
}
/**
 * @name MsgExecSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSessionResponse
 */
export const MsgExecSessionResponse = {
  typeUrl: "/sparkdream.session.v1.MsgExecSessionResponse",
  encode(_: MsgExecSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgExecSessionResponse>): MsgExecSessionResponse {
    const message = createBaseMsgExecSessionResponse();
    return message;
  },
  fromAmino(_: MsgExecSessionResponseAmino): MsgExecSessionResponse {
    const message = createBaseMsgExecSessionResponse();
    return message;
  },
  toAmino(_: MsgExecSessionResponse): MsgExecSessionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecSessionResponseAminoMsg): MsgExecSessionResponse {
    return MsgExecSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecSessionResponseProtoMsg): MsgExecSessionResponse {
    return MsgExecSessionResponse.decode(message.value);
  },
  toProto(message: MsgExecSessionResponse): Uint8Array {
    return MsgExecSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecSessionResponse): MsgExecSessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgExecSessionResponse",
      value: MsgExecSessionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGrant(): MsgCreateGrant {
  return {
    granter: "",
    grantee: "",
    expiresAt: new Date(),
    note: "",
    sessionKey: undefined,
    recurringPull: undefined,
    spendingAllowance: undefined,
    scheduledOneshot: undefined
  };
}
/**
 * MsgCreateGrant is the unified entrypoint for creating any of the four
 * typed grants. The grant type is inferred from the payload oneof; the
 * handler dispatches to type-specific validation. Signed by the granter.
 * @name MsgCreateGrant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateGrant
 */
export const MsgCreateGrant = {
  typeUrl: "/sparkdream.session.v1.MsgCreateGrant",
  aminoType: "sparkdream/x/session/MsgCreateGrant",
  encode(message: MsgCreateGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.note !== "") {
      writer.uint32(34).string(message.note);
    }
    if (message.sessionKey !== undefined) {
      SessionKeyPayload.encode(message.sessionKey, writer.uint32(82).fork()).ldelim();
    }
    if (message.recurringPull !== undefined) {
      RecurringPullPayload.encode(message.recurringPull, writer.uint32(90).fork()).ldelim();
    }
    if (message.spendingAllowance !== undefined) {
      SpendingAllowancePayload.encode(message.spendingAllowance, writer.uint32(98).fork()).ldelim();
    }
    if (message.scheduledOneshot !== undefined) {
      ScheduledOneshotPayload.encode(message.scheduledOneshot, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.note = reader.string();
          break;
        case 10:
          message.sessionKey = SessionKeyPayload.decode(reader, reader.uint32());
          break;
        case 11:
          message.recurringPull = RecurringPullPayload.decode(reader, reader.uint32());
          break;
        case 12:
          message.spendingAllowance = SpendingAllowancePayload.decode(reader, reader.uint32());
          break;
        case 13:
          message.scheduledOneshot = ScheduledOneshotPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateGrant>): MsgCreateGrant {
    const message = createBaseMsgCreateGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.expiresAt = object.expiresAt ?? undefined;
    message.note = object.note ?? "";
    message.sessionKey = object.sessionKey !== undefined && object.sessionKey !== null ? SessionKeyPayload.fromPartial(object.sessionKey) : undefined;
    message.recurringPull = object.recurringPull !== undefined && object.recurringPull !== null ? RecurringPullPayload.fromPartial(object.recurringPull) : undefined;
    message.spendingAllowance = object.spendingAllowance !== undefined && object.spendingAllowance !== null ? SpendingAllowancePayload.fromPartial(object.spendingAllowance) : undefined;
    message.scheduledOneshot = object.scheduledOneshot !== undefined && object.scheduledOneshot !== null ? ScheduledOneshotPayload.fromPartial(object.scheduledOneshot) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateGrantAmino): MsgCreateGrant {
    const message = createBaseMsgCreateGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = fromTimestamp(Timestamp.fromAmino(object.expires_at));
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    }
    if (object.session_key !== undefined && object.session_key !== null) {
      message.sessionKey = SessionKeyPayload.fromAmino(object.session_key);
    }
    if (object.recurring_pull !== undefined && object.recurring_pull !== null) {
      message.recurringPull = RecurringPullPayload.fromAmino(object.recurring_pull);
    }
    if (object.spending_allowance !== undefined && object.spending_allowance !== null) {
      message.spendingAllowance = SpendingAllowancePayload.fromAmino(object.spending_allowance);
    }
    if (object.scheduled_oneshot !== undefined && object.scheduled_oneshot !== null) {
      message.scheduledOneshot = ScheduledOneshotPayload.fromAmino(object.scheduled_oneshot);
    }
    return message;
  },
  toAmino(message: MsgCreateGrant): MsgCreateGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.expires_at = message.expiresAt ? Timestamp.toAmino(toTimestamp(message.expiresAt)) : undefined;
    obj.note = message.note === "" ? undefined : message.note;
    obj.session_key = message.sessionKey ? SessionKeyPayload.toAmino(message.sessionKey) : undefined;
    obj.recurring_pull = message.recurringPull ? RecurringPullPayload.toAmino(message.recurringPull) : undefined;
    obj.spending_allowance = message.spendingAllowance ? SpendingAllowancePayload.toAmino(message.spendingAllowance) : undefined;
    obj.scheduled_oneshot = message.scheduledOneshot ? ScheduledOneshotPayload.toAmino(message.scheduledOneshot) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGrantAminoMsg): MsgCreateGrant {
    return MsgCreateGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGrant): MsgCreateGrantAminoMsg {
    return {
      type: "sparkdream/x/session/MsgCreateGrant",
      value: MsgCreateGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGrantProtoMsg): MsgCreateGrant {
    return MsgCreateGrant.decode(message.value);
  },
  toProto(message: MsgCreateGrant): Uint8Array {
    return MsgCreateGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGrant): MsgCreateGrantProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgCreateGrant",
      value: MsgCreateGrant.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGrantResponse(): MsgCreateGrantResponse {
  return {
    grantId: BigInt(0)
  };
}
/**
 * @name MsgCreateGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateGrantResponse
 */
export const MsgCreateGrantResponse = {
  typeUrl: "/sparkdream.session.v1.MsgCreateGrantResponse",
  encode(message: MsgCreateGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantId !== BigInt(0)) {
      writer.uint32(8).uint64(message.grantId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateGrantResponse>): MsgCreateGrantResponse {
    const message = createBaseMsgCreateGrantResponse();
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateGrantResponseAmino): MsgCreateGrantResponse {
    const message = createBaseMsgCreateGrantResponse();
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    return message;
  },
  toAmino(message: MsgCreateGrantResponse): MsgCreateGrantResponseAmino {
    const obj: any = {};
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGrantResponseAminoMsg): MsgCreateGrantResponse {
    return MsgCreateGrantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGrantResponseProtoMsg): MsgCreateGrantResponse {
    return MsgCreateGrantResponse.decode(message.value);
  },
  toProto(message: MsgCreateGrantResponse): Uint8Array {
    return MsgCreateGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGrantResponse): MsgCreateGrantResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgCreateGrantResponse",
      value: MsgCreateGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRecurringPull(): MsgClaimRecurringPull {
  return {
    grantee: "",
    grantId: BigInt(0)
  };
}
/**
 * MsgClaimRecurringPull disburses one period of a RECURRING_PULL grant.
 * Signed by the grantee on file.
 * @name MsgClaimRecurringPull
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgClaimRecurringPull
 */
export const MsgClaimRecurringPull = {
  typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPull",
  aminoType: "sparkdream/x/session/MsgClaimRecurringPull",
  encode(message: MsgClaimRecurringPull, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(16).uint64(message.grantId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRecurringPull {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRecurringPull();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.grantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimRecurringPull>): MsgClaimRecurringPull {
    const message = createBaseMsgClaimRecurringPull();
    message.grantee = object.grantee ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimRecurringPullAmino): MsgClaimRecurringPull {
    const message = createBaseMsgClaimRecurringPull();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    return message;
  },
  toAmino(message: MsgClaimRecurringPull): MsgClaimRecurringPullAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRecurringPullAminoMsg): MsgClaimRecurringPull {
    return MsgClaimRecurringPull.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimRecurringPull): MsgClaimRecurringPullAminoMsg {
    return {
      type: "sparkdream/x/session/MsgClaimRecurringPull",
      value: MsgClaimRecurringPull.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimRecurringPullProtoMsg): MsgClaimRecurringPull {
    return MsgClaimRecurringPull.decode(message.value);
  },
  toProto(message: MsgClaimRecurringPull): Uint8Array {
    return MsgClaimRecurringPull.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRecurringPull): MsgClaimRecurringPullProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPull",
      value: MsgClaimRecurringPull.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRecurringPullResponse(): MsgClaimRecurringPullResponse {
  return {
    claimNumber: BigInt(0),
    nextClaimTime: BigInt(0)
  };
}
/**
 * @name MsgClaimRecurringPullResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgClaimRecurringPullResponse
 */
export const MsgClaimRecurringPullResponse = {
  typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPullResponse",
  encode(message: MsgClaimRecurringPullResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.claimNumber);
    }
    if (message.nextClaimTime !== BigInt(0)) {
      writer.uint32(16).int64(message.nextClaimTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRecurringPullResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRecurringPullResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimNumber = reader.uint64();
          break;
        case 2:
          message.nextClaimTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimRecurringPullResponse>): MsgClaimRecurringPullResponse {
    const message = createBaseMsgClaimRecurringPullResponse();
    message.claimNumber = object.claimNumber !== undefined && object.claimNumber !== null ? BigInt(object.claimNumber.toString()) : BigInt(0);
    message.nextClaimTime = object.nextClaimTime !== undefined && object.nextClaimTime !== null ? BigInt(object.nextClaimTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimRecurringPullResponseAmino): MsgClaimRecurringPullResponse {
    const message = createBaseMsgClaimRecurringPullResponse();
    if (object.claim_number !== undefined && object.claim_number !== null) {
      message.claimNumber = BigInt(object.claim_number);
    }
    if (object.next_claim_time !== undefined && object.next_claim_time !== null) {
      message.nextClaimTime = BigInt(object.next_claim_time);
    }
    return message;
  },
  toAmino(message: MsgClaimRecurringPullResponse): MsgClaimRecurringPullResponseAmino {
    const obj: any = {};
    obj.claim_number = message.claimNumber !== BigInt(0) ? message.claimNumber?.toString() : undefined;
    obj.next_claim_time = message.nextClaimTime !== BigInt(0) ? message.nextClaimTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRecurringPullResponseAminoMsg): MsgClaimRecurringPullResponse {
    return MsgClaimRecurringPullResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRecurringPullResponseProtoMsg): MsgClaimRecurringPullResponse {
    return MsgClaimRecurringPullResponse.decode(message.value);
  },
  toProto(message: MsgClaimRecurringPullResponse): Uint8Array {
    return MsgClaimRecurringPullResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRecurringPullResponse): MsgClaimRecurringPullResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPullResponse",
      value: MsgClaimRecurringPullResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPullAllowance(): MsgPullAllowance {
  return {
    grantee: "",
    grantId: BigInt(0),
    recipient: "",
    amount: Coin.fromPartial({})
  };
}
/**
 * MsgPullAllowance withdraws `amount` from a SPENDING_ALLOWANCE grant
 * budget to `recipient`. Signed by the grantee on file.
 * @name MsgPullAllowance
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgPullAllowance
 */
export const MsgPullAllowance = {
  typeUrl: "/sparkdream.session.v1.MsgPullAllowance",
  aminoType: "sparkdream/x/session/MsgPullAllowance",
  encode(message: MsgPullAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(16).uint64(message.grantId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPullAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPullAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.grantId = reader.uint64();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPullAllowance>): MsgPullAllowance {
    const message = createBaseMsgPullAllowance();
    message.grantee = object.grantee ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgPullAllowanceAmino): MsgPullAllowance {
    const message = createBaseMsgPullAllowance();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgPullAllowance): MsgPullAllowanceAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPullAllowanceAminoMsg): MsgPullAllowance {
    return MsgPullAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPullAllowance): MsgPullAllowanceAminoMsg {
    return {
      type: "sparkdream/x/session/MsgPullAllowance",
      value: MsgPullAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPullAllowanceProtoMsg): MsgPullAllowance {
    return MsgPullAllowance.decode(message.value);
  },
  toProto(message: MsgPullAllowance): Uint8Array {
    return MsgPullAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgPullAllowance): MsgPullAllowanceProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgPullAllowance",
      value: MsgPullAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgPullAllowanceResponse(): MsgPullAllowanceResponse {
  return {
    transferred: Coin.fromPartial({}),
    spentInPeriod: Coin.fromPartial({})
  };
}
/**
 * @name MsgPullAllowanceResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgPullAllowanceResponse
 */
export const MsgPullAllowanceResponse = {
  typeUrl: "/sparkdream.session.v1.MsgPullAllowanceResponse",
  encode(message: MsgPullAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferred !== undefined) {
      Coin.encode(message.transferred, writer.uint32(10).fork()).ldelim();
    }
    if (message.spentInPeriod !== undefined) {
      Coin.encode(message.spentInPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPullAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPullAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferred = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.spentInPeriod = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPullAllowanceResponse>): MsgPullAllowanceResponse {
    const message = createBaseMsgPullAllowanceResponse();
    message.transferred = object.transferred !== undefined && object.transferred !== null ? Coin.fromPartial(object.transferred) : undefined;
    message.spentInPeriod = object.spentInPeriod !== undefined && object.spentInPeriod !== null ? Coin.fromPartial(object.spentInPeriod) : undefined;
    return message;
  },
  fromAmino(object: MsgPullAllowanceResponseAmino): MsgPullAllowanceResponse {
    const message = createBaseMsgPullAllowanceResponse();
    if (object.transferred !== undefined && object.transferred !== null) {
      message.transferred = Coin.fromAmino(object.transferred);
    }
    if (object.spent_in_period !== undefined && object.spent_in_period !== null) {
      message.spentInPeriod = Coin.fromAmino(object.spent_in_period);
    }
    return message;
  },
  toAmino(message: MsgPullAllowanceResponse): MsgPullAllowanceResponseAmino {
    const obj: any = {};
    obj.transferred = message.transferred ? Coin.toAmino(message.transferred) : undefined;
    obj.spent_in_period = message.spentInPeriod ? Coin.toAmino(message.spentInPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPullAllowanceResponseAminoMsg): MsgPullAllowanceResponse {
    return MsgPullAllowanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPullAllowanceResponseProtoMsg): MsgPullAllowanceResponse {
    return MsgPullAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgPullAllowanceResponse): Uint8Array {
    return MsgPullAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPullAllowanceResponse): MsgPullAllowanceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgPullAllowanceResponse",
      value: MsgPullAllowanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRetryScheduledOneshot(): MsgRetryScheduledOneshot {
  return {
    caller: "",
    grantId: BigInt(0)
  };
}
/**
 * MsgRetryScheduledOneshot flips a PAUSED_INSUFFICIENT_FUNDS oneshot
 * back to ACTIVE with fire_at = block_time. Caller must be either the
 * granter or the grantee on file.
 * @name MsgRetryScheduledOneshot
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRetryScheduledOneshot
 */
export const MsgRetryScheduledOneshot = {
  typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshot",
  aminoType: "sparkdream/x/session/MsgRetryScheduledOneshot",
  encode(message: MsgRetryScheduledOneshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(16).uint64(message.grantId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetryScheduledOneshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryScheduledOneshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caller = reader.string();
          break;
        case 2:
          message.grantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRetryScheduledOneshot>): MsgRetryScheduledOneshot {
    const message = createBaseMsgRetryScheduledOneshot();
    message.caller = object.caller ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRetryScheduledOneshotAmino): MsgRetryScheduledOneshot {
    const message = createBaseMsgRetryScheduledOneshot();
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    return message;
  },
  toAmino(message: MsgRetryScheduledOneshot): MsgRetryScheduledOneshotAmino {
    const obj: any = {};
    obj.caller = message.caller === "" ? undefined : message.caller;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRetryScheduledOneshotAminoMsg): MsgRetryScheduledOneshot {
    return MsgRetryScheduledOneshot.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRetryScheduledOneshot): MsgRetryScheduledOneshotAminoMsg {
    return {
      type: "sparkdream/x/session/MsgRetryScheduledOneshot",
      value: MsgRetryScheduledOneshot.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRetryScheduledOneshotProtoMsg): MsgRetryScheduledOneshot {
    return MsgRetryScheduledOneshot.decode(message.value);
  },
  toProto(message: MsgRetryScheduledOneshot): Uint8Array {
    return MsgRetryScheduledOneshot.encode(message).finish();
  },
  toProtoMsg(message: MsgRetryScheduledOneshot): MsgRetryScheduledOneshotProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshot",
      value: MsgRetryScheduledOneshot.encode(message).finish()
    };
  }
};
function createBaseMsgRetryScheduledOneshotResponse(): MsgRetryScheduledOneshotResponse {
  return {
    newFireAt: BigInt(0)
  };
}
/**
 * @name MsgRetryScheduledOneshotResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRetryScheduledOneshotResponse
 */
export const MsgRetryScheduledOneshotResponse = {
  typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshotResponse",
  encode(message: MsgRetryScheduledOneshotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newFireAt !== BigInt(0)) {
      writer.uint32(8).int64(message.newFireAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetryScheduledOneshotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryScheduledOneshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newFireAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRetryScheduledOneshotResponse>): MsgRetryScheduledOneshotResponse {
    const message = createBaseMsgRetryScheduledOneshotResponse();
    message.newFireAt = object.newFireAt !== undefined && object.newFireAt !== null ? BigInt(object.newFireAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRetryScheduledOneshotResponseAmino): MsgRetryScheduledOneshotResponse {
    const message = createBaseMsgRetryScheduledOneshotResponse();
    if (object.new_fire_at !== undefined && object.new_fire_at !== null) {
      message.newFireAt = BigInt(object.new_fire_at);
    }
    return message;
  },
  toAmino(message: MsgRetryScheduledOneshotResponse): MsgRetryScheduledOneshotResponseAmino {
    const obj: any = {};
    obj.new_fire_at = message.newFireAt !== BigInt(0) ? message.newFireAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRetryScheduledOneshotResponseAminoMsg): MsgRetryScheduledOneshotResponse {
    return MsgRetryScheduledOneshotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetryScheduledOneshotResponseProtoMsg): MsgRetryScheduledOneshotResponse {
    return MsgRetryScheduledOneshotResponse.decode(message.value);
  },
  toProto(message: MsgRetryScheduledOneshotResponse): Uint8Array {
    return MsgRetryScheduledOneshotResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetryScheduledOneshotResponse): MsgRetryScheduledOneshotResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshotResponse",
      value: MsgRetryScheduledOneshotResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeGrant(): MsgRevokeGrant {
  return {
    granter: "",
    grantId: BigInt(0)
  };
}
/**
 * MsgRevokeGrant cancels any active grant by id. Signed by the granter
 * (or a session key with allow_self_revoke = true and same-granter
 * scope).
 * @name MsgRevokeGrant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeGrant
 */
export const MsgRevokeGrant = {
  typeUrl: "/sparkdream.session.v1.MsgRevokeGrant",
  aminoType: "sparkdream/x/session/MsgRevokeGrant",
  encode(message: MsgRevokeGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(16).uint64(message.grantId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeGrant>): MsgRevokeGrant {
    const message = createBaseMsgRevokeGrant();
    message.granter = object.granter ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRevokeGrantAmino): MsgRevokeGrant {
    const message = createBaseMsgRevokeGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    return message;
  },
  toAmino(message: MsgRevokeGrant): MsgRevokeGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeGrantAminoMsg): MsgRevokeGrant {
    return MsgRevokeGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeGrant): MsgRevokeGrantAminoMsg {
    return {
      type: "sparkdream/x/session/MsgRevokeGrant",
      value: MsgRevokeGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeGrantProtoMsg): MsgRevokeGrant {
    return MsgRevokeGrant.decode(message.value);
  },
  toProto(message: MsgRevokeGrant): Uint8Array {
    return MsgRevokeGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeGrant): MsgRevokeGrantProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRevokeGrant",
      value: MsgRevokeGrant.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeGrantResponse(): MsgRevokeGrantResponse {
  return {
    refundAmount: Coin.fromPartial({})
  };
}
/**
 * @name MsgRevokeGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeGrantResponse
 */
export const MsgRevokeGrantResponse = {
  typeUrl: "/sparkdream.session.v1.MsgRevokeGrantResponse",
  encode(message: MsgRevokeGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.refundAmount !== undefined) {
      Coin.encode(message.refundAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refundAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeGrantResponse>): MsgRevokeGrantResponse {
    const message = createBaseMsgRevokeGrantResponse();
    message.refundAmount = object.refundAmount !== undefined && object.refundAmount !== null ? Coin.fromPartial(object.refundAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgRevokeGrantResponseAmino): MsgRevokeGrantResponse {
    const message = createBaseMsgRevokeGrantResponse();
    if (object.refund_amount !== undefined && object.refund_amount !== null) {
      message.refundAmount = Coin.fromAmino(object.refund_amount);
    }
    return message;
  },
  toAmino(message: MsgRevokeGrantResponse): MsgRevokeGrantResponseAmino {
    const obj: any = {};
    obj.refund_amount = message.refundAmount ? Coin.toAmino(message.refundAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeGrantResponseAminoMsg): MsgRevokeGrantResponse {
    return MsgRevokeGrantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeGrantResponseProtoMsg): MsgRevokeGrantResponse {
    return MsgRevokeGrantResponse.decode(message.value);
  },
  toProto(message: MsgRevokeGrantResponse): Uint8Array {
    return MsgRevokeGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeGrantResponse): MsgRevokeGrantResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRevokeGrantResponse",
      value: MsgRevokeGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeclineGrant(): MsgDeclineGrant {
  return {
    grantee: "",
    grantId: BigInt(0)
  };
}
/**
 * MsgDeclineGrant lets the grantee opt out of an active grant by id.
 * One-way; the granter must Revoke + CreateGrant to retry.
 * @name MsgDeclineGrant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgDeclineGrant
 */
export const MsgDeclineGrant = {
  typeUrl: "/sparkdream.session.v1.MsgDeclineGrant",
  aminoType: "sparkdream/x/session/MsgDeclineGrant",
  encode(message: MsgDeclineGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(16).uint64(message.grantId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeclineGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeclineGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.grantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeclineGrant>): MsgDeclineGrant {
    const message = createBaseMsgDeclineGrant();
    message.grantee = object.grantee ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeclineGrantAmino): MsgDeclineGrant {
    const message = createBaseMsgDeclineGrant();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    return message;
  },
  toAmino(message: MsgDeclineGrant): MsgDeclineGrantAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeclineGrantAminoMsg): MsgDeclineGrant {
    return MsgDeclineGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeclineGrant): MsgDeclineGrantAminoMsg {
    return {
      type: "sparkdream/x/session/MsgDeclineGrant",
      value: MsgDeclineGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeclineGrantProtoMsg): MsgDeclineGrant {
    return MsgDeclineGrant.decode(message.value);
  },
  toProto(message: MsgDeclineGrant): Uint8Array {
    return MsgDeclineGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgDeclineGrant): MsgDeclineGrantProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgDeclineGrant",
      value: MsgDeclineGrant.encode(message).finish()
    };
  }
};
function createBaseMsgDeclineGrantResponse(): MsgDeclineGrantResponse {
  return {
    refundAmount: Coin.fromPartial({})
  };
}
/**
 * @name MsgDeclineGrantResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgDeclineGrantResponse
 */
export const MsgDeclineGrantResponse = {
  typeUrl: "/sparkdream.session.v1.MsgDeclineGrantResponse",
  encode(message: MsgDeclineGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.refundAmount !== undefined) {
      Coin.encode(message.refundAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeclineGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeclineGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refundAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeclineGrantResponse>): MsgDeclineGrantResponse {
    const message = createBaseMsgDeclineGrantResponse();
    message.refundAmount = object.refundAmount !== undefined && object.refundAmount !== null ? Coin.fromPartial(object.refundAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgDeclineGrantResponseAmino): MsgDeclineGrantResponse {
    const message = createBaseMsgDeclineGrantResponse();
    if (object.refund_amount !== undefined && object.refund_amount !== null) {
      message.refundAmount = Coin.fromAmino(object.refund_amount);
    }
    return message;
  },
  toAmino(message: MsgDeclineGrantResponse): MsgDeclineGrantResponseAmino {
    const obj: any = {};
    obj.refund_amount = message.refundAmount ? Coin.toAmino(message.refundAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeclineGrantResponseAminoMsg): MsgDeclineGrantResponse {
    return MsgDeclineGrantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeclineGrantResponseProtoMsg): MsgDeclineGrantResponse {
    return MsgDeclineGrantResponse.decode(message.value);
  },
  toProto(message: MsgDeclineGrantResponse): Uint8Array {
    return MsgDeclineGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeclineGrantResponse): MsgDeclineGrantResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgDeclineGrantResponse",
      value: MsgDeclineGrantResponse.encode(message).finish()
    };
  }
};