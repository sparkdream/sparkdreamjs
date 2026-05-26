//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/**
 * GrantType enumerates the four typed payload variants of the unified grant
 * registry. The session-key variant preserves the legacy x/session model;
 * the other three are introduced by the delegated-authorization-registry
 * refactor and ship in subsequent phases (P3 RecurringPull, P4
 * SpendingAllowance, P5 ScheduledOneshot).
 */
export enum GrantType {
  GRANT_TYPE_UNSPECIFIED = 0,
  GRANT_TYPE_SESSION_KEY = 1,
  GRANT_TYPE_RECURRING_PULL = 2,
  GRANT_TYPE_SPENDING_ALLOWANCE = 3,
  GRANT_TYPE_SCHEDULED_ONESHOT = 4,
  UNRECOGNIZED = -1,
}
export const GrantTypeAmino = GrantType;
export function grantTypeFromJSON(object: any): GrantType {
  switch (object) {
    case 0:
    case "GRANT_TYPE_UNSPECIFIED":
      return GrantType.GRANT_TYPE_UNSPECIFIED;
    case 1:
    case "GRANT_TYPE_SESSION_KEY":
      return GrantType.GRANT_TYPE_SESSION_KEY;
    case 2:
    case "GRANT_TYPE_RECURRING_PULL":
      return GrantType.GRANT_TYPE_RECURRING_PULL;
    case 3:
    case "GRANT_TYPE_SPENDING_ALLOWANCE":
      return GrantType.GRANT_TYPE_SPENDING_ALLOWANCE;
    case 4:
    case "GRANT_TYPE_SCHEDULED_ONESHOT":
      return GrantType.GRANT_TYPE_SCHEDULED_ONESHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GrantType.UNRECOGNIZED;
  }
}
export function grantTypeToJSON(object: GrantType): string {
  switch (object) {
    case GrantType.GRANT_TYPE_UNSPECIFIED:
      return "GRANT_TYPE_UNSPECIFIED";
    case GrantType.GRANT_TYPE_SESSION_KEY:
      return "GRANT_TYPE_SESSION_KEY";
    case GrantType.GRANT_TYPE_RECURRING_PULL:
      return "GRANT_TYPE_RECURRING_PULL";
    case GrantType.GRANT_TYPE_SPENDING_ALLOWANCE:
      return "GRANT_TYPE_SPENDING_ALLOWANCE";
    case GrantType.GRANT_TYPE_SCHEDULED_ONESHOT:
      return "GRANT_TYPE_SCHEDULED_ONESHOT";
    case GrantType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GrantStatus is the state-machine label for a grant. Terminal states
 * (REVOKED, DECLINED, COMPLETED, FIRED) are absorbing — once entered, the
 * grant is never re-activated; the granter must create a new grant.
 */
export enum GrantStatus {
  GRANT_STATUS_UNSPECIFIED = 0,
  GRANT_STATUS_ACTIVE = 1,
  GRANT_STATUS_PAUSED_INSUFFICIENT_FUNDS = 2,
  GRANT_STATUS_DECLINED = 3,
  GRANT_STATUS_REVOKED = 4,
  GRANT_STATUS_COMPLETED = 5,
  GRANT_STATUS_FIRED = 6,
  UNRECOGNIZED = -1,
}
export const GrantStatusAmino = GrantStatus;
export function grantStatusFromJSON(object: any): GrantStatus {
  switch (object) {
    case 0:
    case "GRANT_STATUS_UNSPECIFIED":
      return GrantStatus.GRANT_STATUS_UNSPECIFIED;
    case 1:
    case "GRANT_STATUS_ACTIVE":
      return GrantStatus.GRANT_STATUS_ACTIVE;
    case 2:
    case "GRANT_STATUS_PAUSED_INSUFFICIENT_FUNDS":
      return GrantStatus.GRANT_STATUS_PAUSED_INSUFFICIENT_FUNDS;
    case 3:
    case "GRANT_STATUS_DECLINED":
      return GrantStatus.GRANT_STATUS_DECLINED;
    case 4:
    case "GRANT_STATUS_REVOKED":
      return GrantStatus.GRANT_STATUS_REVOKED;
    case 5:
    case "GRANT_STATUS_COMPLETED":
      return GrantStatus.GRANT_STATUS_COMPLETED;
    case 6:
    case "GRANT_STATUS_FIRED":
      return GrantStatus.GRANT_STATUS_FIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GrantStatus.UNRECOGNIZED;
  }
}
export function grantStatusToJSON(object: GrantStatus): string {
  switch (object) {
    case GrantStatus.GRANT_STATUS_UNSPECIFIED:
      return "GRANT_STATUS_UNSPECIFIED";
    case GrantStatus.GRANT_STATUS_ACTIVE:
      return "GRANT_STATUS_ACTIVE";
    case GrantStatus.GRANT_STATUS_PAUSED_INSUFFICIENT_FUNDS:
      return "GRANT_STATUS_PAUSED_INSUFFICIENT_FUNDS";
    case GrantStatus.GRANT_STATUS_DECLINED:
      return "GRANT_STATUS_DECLINED";
    case GrantStatus.GRANT_STATUS_REVOKED:
      return "GRANT_STATUS_REVOKED";
    case GrantStatus.GRANT_STATUS_COMPLETED:
      return "GRANT_STATUS_COMPLETED";
    case GrantStatus.GRANT_STATUS_FIRED:
      return "GRANT_STATUS_FIRED";
    case GrantStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Grant is the unified record for every delegated-authorization primitive
 * in x/session. One record carries the shared lifecycle fields (id,
 * granter, grantee, status, expires_at, note) and exactly one of the four
 * typed payloads.
 * @name Grant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Grant
 */
export interface Grant {
  id: bigint;
  granter: string;
  grantee: string;
  type: GrantType;
  status: GrantStatus;
  createdAt: Date;
  expiresAt: Date;
  /**
   * Human-readable purpose (256-char cap enforced at validation time).
   */
  note: string;
  sessionKey?: SessionKeyPayload;
  recurringPull?: RecurringPullPayload;
  spendingAllowance?: SpendingAllowancePayload;
  scheduledOneshot?: ScheduledOneshotPayload;
}
export interface GrantProtoMsg {
  typeUrl: "/sparkdream.session.v1.Grant";
  value: Uint8Array;
}
/**
 * Grant is the unified record for every delegated-authorization primitive
 * in x/session. One record carries the shared lifecycle fields (id,
 * granter, grantee, status, expires_at, note) and exactly one of the four
 * typed payloads.
 * @name GrantAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Grant
 */
export interface GrantAmino {
  id?: string;
  granter?: string;
  grantee?: string;
  type?: GrantType;
  status?: GrantStatus;
  created_at?: string;
  expires_at?: string;
  /**
   * Human-readable purpose (256-char cap enforced at validation time).
   */
  note?: string;
  session_key?: SessionKeyPayloadAmino;
  recurring_pull?: RecurringPullPayloadAmino;
  spending_allowance?: SpendingAllowancePayloadAmino;
  scheduled_oneshot?: ScheduledOneshotPayloadAmino;
}
export interface GrantAminoMsg {
  type: "/sparkdream.session.v1.Grant";
  value: GrantAmino;
}
/**
 * SessionKeyPayload preserves the current x/session model: a scoped
 * message-type allowlist with a SPARK spend-limit budget, an exec-count
 * cap, and the per-session usage counters.
 * @name SessionKeyPayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionKeyPayload
 */
export interface SessionKeyPayload {
  allowedMsgTypes: string[];
  spendLimit: Coin;
  spent: Coin;
  maxExecCount: bigint;
  execCount: bigint;
  lastUsedAt: Date;
  /**
   * If true, this session key may include MsgRevokeGrant in
   * allowed_msg_types, scoped to grants owned by the same granter. Default
   * false. Lands with P6's universal MsgRevokeGrant; reserved here so the
   * proto wire shape is locked at P1.
   */
  allowSelfRevoke: boolean;
}
export interface SessionKeyPayloadProtoMsg {
  typeUrl: "/sparkdream.session.v1.SessionKeyPayload";
  value: Uint8Array;
}
/**
 * SessionKeyPayload preserves the current x/session model: a scoped
 * message-type allowlist with a SPARK spend-limit budget, an exec-count
 * cap, and the per-session usage counters.
 * @name SessionKeyPayloadAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionKeyPayload
 */
export interface SessionKeyPayloadAmino {
  allowed_msg_types?: string[];
  spend_limit?: CoinAmino;
  spent?: CoinAmino;
  max_exec_count?: string;
  exec_count?: string;
  last_used_at?: string;
  /**
   * If true, this session key may include MsgRevokeGrant in
   * allowed_msg_types, scoped to grants owned by the same granter. Default
   * false. Lands with P6's universal MsgRevokeGrant; reserved here so the
   * proto wire shape is locked at P1.
   */
  allow_self_revoke?: boolean;
}
export interface SessionKeyPayloadAminoMsg {
  type: "/sparkdream.session.v1.SessionKeyPayload";
  value: SessionKeyPayloadAmino;
}
/**
 * RecurringPullPayload — a granter-authorized periodic SendCoins to a
 * grantee. The grantee invokes MsgClaimRecurringPull each period.
 * int64 unix timestamps (start_time, last_claim_advance) mirror the
 * existing x/commons RecurringSpend record shape to enable a future
 * straight-shot keeper port. The msg server lands in P3.
 * @name RecurringPullPayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.RecurringPullPayload
 */
export interface RecurringPullPayload {
  amountPerPeriod: Coin;
  periodSeconds: bigint;
  startTime: bigint;
  lastClaimAdvance: bigint;
  claimsMade: bigint;
  /**
   * User-declared per-epoch ceiling (sdk.Int as string), denominated in
   * the same denom as amount_per_period. Epoch = UTC calendar day,
   * computed as floor(block_time.Unix() / 86400).
   */
  maxPerEpoch: string;
}
export interface RecurringPullPayloadProtoMsg {
  typeUrl: "/sparkdream.session.v1.RecurringPullPayload";
  value: Uint8Array;
}
/**
 * RecurringPullPayload — a granter-authorized periodic SendCoins to a
 * grantee. The grantee invokes MsgClaimRecurringPull each period.
 * int64 unix timestamps (start_time, last_claim_advance) mirror the
 * existing x/commons RecurringSpend record shape to enable a future
 * straight-shot keeper port. The msg server lands in P3.
 * @name RecurringPullPayloadAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.RecurringPullPayload
 */
export interface RecurringPullPayloadAmino {
  amount_per_period?: CoinAmino;
  period_seconds?: string;
  start_time?: string;
  last_claim_advance?: string;
  claims_made?: string;
  /**
   * User-declared per-epoch ceiling (sdk.Int as string), denominated in
   * the same denom as amount_per_period. Epoch = UTC calendar day,
   * computed as floor(block_time.Unix() / 86400).
   */
  max_per_epoch?: string;
}
export interface RecurringPullPayloadAminoMsg {
  type: "/sparkdream.session.v1.RecurringPullPayload";
  value: RecurringPullPayloadAmino;
}
/**
 * SpendingAllowancePayload — a refilling per-period cap; the grantee picks
 * the recipient and amount of each pull within the cap and (optional)
 * whitelist. The msg server lands in P4.
 * @name SpendingAllowancePayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SpendingAllowancePayload
 */
export interface SpendingAllowancePayload {
  maxPerPeriod: Coin;
  periodSeconds: bigint;
  currentPeriodStart: bigint;
  spentInCurrentPeriod: Coin;
  /**
   * Empty = unrestricted; non-empty = whitelist.
   */
  allowedRecipients: string[];
  /**
   * Locks denom for the grant; mismatches rejected at pull time.
   */
  denom: string;
}
export interface SpendingAllowancePayloadProtoMsg {
  typeUrl: "/sparkdream.session.v1.SpendingAllowancePayload";
  value: Uint8Array;
}
/**
 * SpendingAllowancePayload — a refilling per-period cap; the grantee picks
 * the recipient and amount of each pull within the cap and (optional)
 * whitelist. The msg server lands in P4.
 * @name SpendingAllowancePayloadAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SpendingAllowancePayload
 */
export interface SpendingAllowancePayloadAmino {
  max_per_period?: CoinAmino;
  period_seconds?: string;
  current_period_start?: string;
  spent_in_current_period?: CoinAmino;
  /**
   * Empty = unrestricted; non-empty = whitelist.
   */
  allowed_recipients?: string[];
  /**
   * Locks denom for the grant; mismatches rejected at pull time.
   */
  denom?: string;
}
export interface SpendingAllowancePayloadAminoMsg {
  type: "/sparkdream.session.v1.SpendingAllowancePayload";
  value: SpendingAllowancePayloadAmino;
}
/**
 * ScheduledOneshotPayload — fires once at fire_at, EndBlocker-driven. The
 * msg server, EndBlocker fire pass, gas-deposit escrow, and retry path
 * land in P5.
 * @name ScheduledOneshotPayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.ScheduledOneshotPayload
 */
export interface ScheduledOneshotPayload {
  transfer?: OneshotTransfer;
  exec?: OneshotExec;
  fireAt: bigint;
  /**
   * Captured failure reason if execution failed at fire time (Exec only).
   */
  fireError: string;
}
export interface ScheduledOneshotPayloadProtoMsg {
  typeUrl: "/sparkdream.session.v1.ScheduledOneshotPayload";
  value: Uint8Array;
}
/**
 * ScheduledOneshotPayload — fires once at fire_at, EndBlocker-driven. The
 * msg server, EndBlocker fire pass, gas-deposit escrow, and retry path
 * land in P5.
 * @name ScheduledOneshotPayloadAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.ScheduledOneshotPayload
 */
export interface ScheduledOneshotPayloadAmino {
  transfer?: OneshotTransferAmino;
  exec?: OneshotExecAmino;
  fire_at?: string;
  /**
   * Captured failure reason if execution failed at fire time (Exec only).
   */
  fire_error?: string;
}
export interface ScheduledOneshotPayloadAminoMsg {
  type: "/sparkdream.session.v1.ScheduledOneshotPayload";
  value: ScheduledOneshotPayloadAmino;
}
/**
 * OneshotTransfer dispatches a simple bank SendCoins(granter, recipient,
 * amount) at fire time.
 * @name OneshotTransfer
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotTransfer
 */
export interface OneshotTransfer {
  recipient: string;
  amount: Coin;
}
export interface OneshotTransferProtoMsg {
  typeUrl: "/sparkdream.session.v1.OneshotTransfer";
  value: Uint8Array;
}
/**
 * OneshotTransfer dispatches a simple bank SendCoins(granter, recipient,
 * amount) at fire time.
 * @name OneshotTransferAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotTransfer
 */
export interface OneshotTransferAmino {
  recipient?: string;
  amount?: CoinAmino;
}
export interface OneshotTransferAminoMsg {
  type: "/sparkdream.session.v1.OneshotTransfer";
  value: OneshotTransferAmino;
}
/**
 * OneshotExec dispatches an arbitrary message at fire time, executed as
 * if signed by the granter. Subject to the same allowed_msg_types
 * whitelist as session keys and the same NonDelegableSessionMsgs
 * anti-recursion denylist, both at creation and at fire time.
 * @name OneshotExec
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotExec
 */
export interface OneshotExec {
  msg?: Any;
  /**
   * Per-fire gas cap; the granter pre-funds gas_limit * oneshot_gas_price
   * SPARK at MsgCreateGrant time.
   */
  gasLimit: bigint;
}
export interface OneshotExecProtoMsg {
  typeUrl: "/sparkdream.session.v1.OneshotExec";
  value: Uint8Array;
}
/**
 * OneshotExec dispatches an arbitrary message at fire time, executed as
 * if signed by the granter. Subject to the same allowed_msg_types
 * whitelist as session keys and the same NonDelegableSessionMsgs
 * anti-recursion denylist, both at creation and at fire time.
 * @name OneshotExecAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotExec
 */
export interface OneshotExecAmino {
  msg?: AnyAmino;
  /**
   * Per-fire gas cap; the granter pre-funds gas_limit * oneshot_gas_price
   * SPARK at MsgCreateGrant time.
   */
  gas_limit?: string;
}
export interface OneshotExecAminoMsg {
  type: "/sparkdream.session.v1.OneshotExec";
  value: OneshotExecAmino;
}
function createBaseGrant(): Grant {
  return {
    id: BigInt(0),
    granter: "",
    grantee: "",
    type: 0,
    status: 0,
    createdAt: new Date(),
    expiresAt: new Date(),
    note: "",
    sessionKey: undefined,
    recurringPull: undefined,
    spendingAllowance: undefined,
    scheduledOneshot: undefined
  };
}
/**
 * Grant is the unified record for every delegated-authorization primitive
 * in x/session. One record carries the shared lifecycle fields (id,
 * granter, grantee, status, expires_at, note) and exactly one of the four
 * typed payloads.
 * @name Grant
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Grant
 */
export const Grant = {
  typeUrl: "/sparkdream.session.v1.Grant",
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.note !== "") {
      writer.uint32(74).string(message.note);
    }
    if (message.sessionKey !== undefined) {
      SessionKeyPayload.encode(message.sessionKey, writer.uint32(162).fork()).ldelim();
    }
    if (message.recurringPull !== undefined) {
      RecurringPullPayload.encode(message.recurringPull, writer.uint32(170).fork()).ldelim();
    }
    if (message.spendingAllowance !== undefined) {
      SpendingAllowancePayload.encode(message.spendingAllowance, writer.uint32(178).fork()).ldelim();
    }
    if (message.scheduledOneshot !== undefined) {
      ScheduledOneshotPayload.encode(message.scheduledOneshot, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.note = reader.string();
          break;
        case 20:
          message.sessionKey = SessionKeyPayload.decode(reader, reader.uint32());
          break;
        case 21:
          message.recurringPull = RecurringPullPayload.decode(reader, reader.uint32());
          break;
        case 22:
          message.spendingAllowance = SpendingAllowancePayload.decode(reader, reader.uint32());
          break;
        case 23:
          message.scheduledOneshot = ScheduledOneshotPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.type = object.type ?? 0;
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.expiresAt = object.expiresAt ?? undefined;
    message.note = object.note ?? "";
    message.sessionKey = object.sessionKey !== undefined && object.sessionKey !== null ? SessionKeyPayload.fromPartial(object.sessionKey) : undefined;
    message.recurringPull = object.recurringPull !== undefined && object.recurringPull !== null ? RecurringPullPayload.fromPartial(object.recurringPull) : undefined;
    message.spendingAllowance = object.spendingAllowance !== undefined && object.spendingAllowance !== null ? SpendingAllowancePayload.fromPartial(object.spendingAllowance) : undefined;
    message.scheduledOneshot = object.scheduledOneshot !== undefined && object.scheduledOneshot !== null ? ScheduledOneshotPayload.fromPartial(object.scheduledOneshot) : undefined;
    return message;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
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
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.expires_at = message.expiresAt ? Timestamp.toAmino(toTimestamp(message.expiresAt)) : undefined;
    obj.note = message.note === "" ? undefined : message.note;
    obj.session_key = message.sessionKey ? SessionKeyPayload.toAmino(message.sessionKey) : undefined;
    obj.recurring_pull = message.recurringPull ? RecurringPullPayload.toAmino(message.recurringPull) : undefined;
    obj.spending_allowance = message.spendingAllowance ? SpendingAllowancePayload.toAmino(message.spendingAllowance) : undefined;
    obj.scheduled_oneshot = message.scheduledOneshot ? ScheduledOneshotPayload.toAmino(message.scheduledOneshot) : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
function createBaseSessionKeyPayload(): SessionKeyPayload {
  return {
    allowedMsgTypes: [],
    spendLimit: Coin.fromPartial({}),
    spent: Coin.fromPartial({}),
    maxExecCount: BigInt(0),
    execCount: BigInt(0),
    lastUsedAt: new Date(),
    allowSelfRevoke: false
  };
}
/**
 * SessionKeyPayload preserves the current x/session model: a scoped
 * message-type allowlist with a SPARK spend-limit budget, an exec-count
 * cap, and the per-session usage counters.
 * @name SessionKeyPayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionKeyPayload
 */
export const SessionKeyPayload = {
  typeUrl: "/sparkdream.session.v1.SessionKeyPayload",
  encode(message: SessionKeyPayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedMsgTypes) {
      writer.uint32(10).string(v!);
    }
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(18).fork()).ldelim();
    }
    if (message.spent !== undefined) {
      Coin.encode(message.spent, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxExecCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxExecCount);
    }
    if (message.execCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.execCount);
    }
    if (message.lastUsedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUsedAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.allowSelfRevoke === true) {
      writer.uint32(56).bool(message.allowSelfRevoke);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SessionKeyPayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionKeyPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 2:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.spent = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxExecCount = reader.uint64();
          break;
        case 5:
          message.execCount = reader.uint64();
          break;
        case 6:
          message.lastUsedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.allowSelfRevoke = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SessionKeyPayload>): SessionKeyPayload {
    const message = createBaseSessionKeyPayload();
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    message.spent = object.spent !== undefined && object.spent !== null ? Coin.fromPartial(object.spent) : undefined;
    message.maxExecCount = object.maxExecCount !== undefined && object.maxExecCount !== null ? BigInt(object.maxExecCount.toString()) : BigInt(0);
    message.execCount = object.execCount !== undefined && object.execCount !== null ? BigInt(object.execCount.toString()) : BigInt(0);
    message.lastUsedAt = object.lastUsedAt ?? undefined;
    message.allowSelfRevoke = object.allowSelfRevoke ?? false;
    return message;
  },
  fromAmino(object: SessionKeyPayloadAmino): SessionKeyPayload {
    const message = createBaseSessionKeyPayload();
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    if (object.spent !== undefined && object.spent !== null) {
      message.spent = Coin.fromAmino(object.spent);
    }
    if (object.max_exec_count !== undefined && object.max_exec_count !== null) {
      message.maxExecCount = BigInt(object.max_exec_count);
    }
    if (object.exec_count !== undefined && object.exec_count !== null) {
      message.execCount = BigInt(object.exec_count);
    }
    if (object.last_used_at !== undefined && object.last_used_at !== null) {
      message.lastUsedAt = fromTimestamp(Timestamp.fromAmino(object.last_used_at));
    }
    if (object.allow_self_revoke !== undefined && object.allow_self_revoke !== null) {
      message.allowSelfRevoke = object.allow_self_revoke;
    }
    return message;
  },
  toAmino(message: SessionKeyPayload): SessionKeyPayloadAmino {
    const obj: any = {};
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
    obj.spent = message.spent ? Coin.toAmino(message.spent) : undefined;
    obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
    obj.exec_count = message.execCount !== BigInt(0) ? message.execCount?.toString() : undefined;
    obj.last_used_at = message.lastUsedAt ? Timestamp.toAmino(toTimestamp(message.lastUsedAt)) : undefined;
    obj.allow_self_revoke = message.allowSelfRevoke === false ? undefined : message.allowSelfRevoke;
    return obj;
  },
  fromAminoMsg(object: SessionKeyPayloadAminoMsg): SessionKeyPayload {
    return SessionKeyPayload.fromAmino(object.value);
  },
  fromProtoMsg(message: SessionKeyPayloadProtoMsg): SessionKeyPayload {
    return SessionKeyPayload.decode(message.value);
  },
  toProto(message: SessionKeyPayload): Uint8Array {
    return SessionKeyPayload.encode(message).finish();
  },
  toProtoMsg(message: SessionKeyPayload): SessionKeyPayloadProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.SessionKeyPayload",
      value: SessionKeyPayload.encode(message).finish()
    };
  }
};
function createBaseRecurringPullPayload(): RecurringPullPayload {
  return {
    amountPerPeriod: Coin.fromPartial({}),
    periodSeconds: BigInt(0),
    startTime: BigInt(0),
    lastClaimAdvance: BigInt(0),
    claimsMade: BigInt(0),
    maxPerEpoch: ""
  };
}
/**
 * RecurringPullPayload — a granter-authorized periodic SendCoins to a
 * grantee. The grantee invokes MsgClaimRecurringPull each period.
 * int64 unix timestamps (start_time, last_claim_advance) mirror the
 * existing x/commons RecurringSpend record shape to enable a future
 * straight-shot keeper port. The msg server lands in P3.
 * @name RecurringPullPayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.RecurringPullPayload
 */
export const RecurringPullPayload = {
  typeUrl: "/sparkdream.session.v1.RecurringPullPayload",
  encode(message: RecurringPullPayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountPerPeriod !== undefined) {
      Coin.encode(message.amountPerPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.periodSeconds !== BigInt(0)) {
      writer.uint32(16).int64(message.periodSeconds);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    if (message.lastClaimAdvance !== BigInt(0)) {
      writer.uint32(32).int64(message.lastClaimAdvance);
    }
    if (message.claimsMade !== BigInt(0)) {
      writer.uint32(40).uint64(message.claimsMade);
    }
    if (message.maxPerEpoch !== "") {
      writer.uint32(50).string(message.maxPerEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecurringPullPayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecurringPullPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountPerPeriod = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.periodSeconds = reader.int64();
          break;
        case 3:
          message.startTime = reader.int64();
          break;
        case 4:
          message.lastClaimAdvance = reader.int64();
          break;
        case 5:
          message.claimsMade = reader.uint64();
          break;
        case 6:
          message.maxPerEpoch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecurringPullPayload>): RecurringPullPayload {
    const message = createBaseRecurringPullPayload();
    message.amountPerPeriod = object.amountPerPeriod !== undefined && object.amountPerPeriod !== null ? Coin.fromPartial(object.amountPerPeriod) : undefined;
    message.periodSeconds = object.periodSeconds !== undefined && object.periodSeconds !== null ? BigInt(object.periodSeconds.toString()) : BigInt(0);
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.lastClaimAdvance = object.lastClaimAdvance !== undefined && object.lastClaimAdvance !== null ? BigInt(object.lastClaimAdvance.toString()) : BigInt(0);
    message.claimsMade = object.claimsMade !== undefined && object.claimsMade !== null ? BigInt(object.claimsMade.toString()) : BigInt(0);
    message.maxPerEpoch = object.maxPerEpoch ?? "";
    return message;
  },
  fromAmino(object: RecurringPullPayloadAmino): RecurringPullPayload {
    const message = createBaseRecurringPullPayload();
    if (object.amount_per_period !== undefined && object.amount_per_period !== null) {
      message.amountPerPeriod = Coin.fromAmino(object.amount_per_period);
    }
    if (object.period_seconds !== undefined && object.period_seconds !== null) {
      message.periodSeconds = BigInt(object.period_seconds);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.last_claim_advance !== undefined && object.last_claim_advance !== null) {
      message.lastClaimAdvance = BigInt(object.last_claim_advance);
    }
    if (object.claims_made !== undefined && object.claims_made !== null) {
      message.claimsMade = BigInt(object.claims_made);
    }
    if (object.max_per_epoch !== undefined && object.max_per_epoch !== null) {
      message.maxPerEpoch = object.max_per_epoch;
    }
    return message;
  },
  toAmino(message: RecurringPullPayload): RecurringPullPayloadAmino {
    const obj: any = {};
    obj.amount_per_period = message.amountPerPeriod ? Coin.toAmino(message.amountPerPeriod) : undefined;
    obj.period_seconds = message.periodSeconds !== BigInt(0) ? message.periodSeconds?.toString() : undefined;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    obj.last_claim_advance = message.lastClaimAdvance !== BigInt(0) ? message.lastClaimAdvance?.toString() : undefined;
    obj.claims_made = message.claimsMade !== BigInt(0) ? message.claimsMade?.toString() : undefined;
    obj.max_per_epoch = message.maxPerEpoch === "" ? undefined : message.maxPerEpoch;
    return obj;
  },
  fromAminoMsg(object: RecurringPullPayloadAminoMsg): RecurringPullPayload {
    return RecurringPullPayload.fromAmino(object.value);
  },
  fromProtoMsg(message: RecurringPullPayloadProtoMsg): RecurringPullPayload {
    return RecurringPullPayload.decode(message.value);
  },
  toProto(message: RecurringPullPayload): Uint8Array {
    return RecurringPullPayload.encode(message).finish();
  },
  toProtoMsg(message: RecurringPullPayload): RecurringPullPayloadProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.RecurringPullPayload",
      value: RecurringPullPayload.encode(message).finish()
    };
  }
};
function createBaseSpendingAllowancePayload(): SpendingAllowancePayload {
  return {
    maxPerPeriod: Coin.fromPartial({}),
    periodSeconds: BigInt(0),
    currentPeriodStart: BigInt(0),
    spentInCurrentPeriod: Coin.fromPartial({}),
    allowedRecipients: [],
    denom: ""
  };
}
/**
 * SpendingAllowancePayload — a refilling per-period cap; the grantee picks
 * the recipient and amount of each pull within the cap and (optional)
 * whitelist. The msg server lands in P4.
 * @name SpendingAllowancePayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SpendingAllowancePayload
 */
export const SpendingAllowancePayload = {
  typeUrl: "/sparkdream.session.v1.SpendingAllowancePayload",
  encode(message: SpendingAllowancePayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPerPeriod !== undefined) {
      Coin.encode(message.maxPerPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.periodSeconds !== BigInt(0)) {
      writer.uint32(16).int64(message.periodSeconds);
    }
    if (message.currentPeriodStart !== BigInt(0)) {
      writer.uint32(24).int64(message.currentPeriodStart);
    }
    if (message.spentInCurrentPeriod !== undefined) {
      Coin.encode(message.spentInCurrentPeriod, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.allowedRecipients) {
      writer.uint32(42).string(v!);
    }
    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpendingAllowancePayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpendingAllowancePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPerPeriod = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.periodSeconds = reader.int64();
          break;
        case 3:
          message.currentPeriodStart = reader.int64();
          break;
        case 4:
          message.spentInCurrentPeriod = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.allowedRecipients.push(reader.string());
          break;
        case 6:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpendingAllowancePayload>): SpendingAllowancePayload {
    const message = createBaseSpendingAllowancePayload();
    message.maxPerPeriod = object.maxPerPeriod !== undefined && object.maxPerPeriod !== null ? Coin.fromPartial(object.maxPerPeriod) : undefined;
    message.periodSeconds = object.periodSeconds !== undefined && object.periodSeconds !== null ? BigInt(object.periodSeconds.toString()) : BigInt(0);
    message.currentPeriodStart = object.currentPeriodStart !== undefined && object.currentPeriodStart !== null ? BigInt(object.currentPeriodStart.toString()) : BigInt(0);
    message.spentInCurrentPeriod = object.spentInCurrentPeriod !== undefined && object.spentInCurrentPeriod !== null ? Coin.fromPartial(object.spentInCurrentPeriod) : undefined;
    message.allowedRecipients = object.allowedRecipients?.map(e => e) || [];
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: SpendingAllowancePayloadAmino): SpendingAllowancePayload {
    const message = createBaseSpendingAllowancePayload();
    if (object.max_per_period !== undefined && object.max_per_period !== null) {
      message.maxPerPeriod = Coin.fromAmino(object.max_per_period);
    }
    if (object.period_seconds !== undefined && object.period_seconds !== null) {
      message.periodSeconds = BigInt(object.period_seconds);
    }
    if (object.current_period_start !== undefined && object.current_period_start !== null) {
      message.currentPeriodStart = BigInt(object.current_period_start);
    }
    if (object.spent_in_current_period !== undefined && object.spent_in_current_period !== null) {
      message.spentInCurrentPeriod = Coin.fromAmino(object.spent_in_current_period);
    }
    message.allowedRecipients = object.allowed_recipients?.map(e => e) || [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: SpendingAllowancePayload): SpendingAllowancePayloadAmino {
    const obj: any = {};
    obj.max_per_period = message.maxPerPeriod ? Coin.toAmino(message.maxPerPeriod) : undefined;
    obj.period_seconds = message.periodSeconds !== BigInt(0) ? message.periodSeconds?.toString() : undefined;
    obj.current_period_start = message.currentPeriodStart !== BigInt(0) ? message.currentPeriodStart?.toString() : undefined;
    obj.spent_in_current_period = message.spentInCurrentPeriod ? Coin.toAmino(message.spentInCurrentPeriod) : undefined;
    if (message.allowedRecipients) {
      obj.allowed_recipients = message.allowedRecipients.map(e => e);
    } else {
      obj.allowed_recipients = message.allowedRecipients;
    }
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: SpendingAllowancePayloadAminoMsg): SpendingAllowancePayload {
    return SpendingAllowancePayload.fromAmino(object.value);
  },
  fromProtoMsg(message: SpendingAllowancePayloadProtoMsg): SpendingAllowancePayload {
    return SpendingAllowancePayload.decode(message.value);
  },
  toProto(message: SpendingAllowancePayload): Uint8Array {
    return SpendingAllowancePayload.encode(message).finish();
  },
  toProtoMsg(message: SpendingAllowancePayload): SpendingAllowancePayloadProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.SpendingAllowancePayload",
      value: SpendingAllowancePayload.encode(message).finish()
    };
  }
};
function createBaseScheduledOneshotPayload(): ScheduledOneshotPayload {
  return {
    transfer: undefined,
    exec: undefined,
    fireAt: BigInt(0),
    fireError: ""
  };
}
/**
 * ScheduledOneshotPayload — fires once at fire_at, EndBlocker-driven. The
 * msg server, EndBlocker fire pass, gas-deposit escrow, and retry path
 * land in P5.
 * @name ScheduledOneshotPayload
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.ScheduledOneshotPayload
 */
export const ScheduledOneshotPayload = {
  typeUrl: "/sparkdream.session.v1.ScheduledOneshotPayload",
  encode(message: ScheduledOneshotPayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transfer !== undefined) {
      OneshotTransfer.encode(message.transfer, writer.uint32(10).fork()).ldelim();
    }
    if (message.exec !== undefined) {
      OneshotExec.encode(message.exec, writer.uint32(18).fork()).ldelim();
    }
    if (message.fireAt !== BigInt(0)) {
      writer.uint32(80).int64(message.fireAt);
    }
    if (message.fireError !== "") {
      writer.uint32(90).string(message.fireError);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ScheduledOneshotPayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledOneshotPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfer = OneshotTransfer.decode(reader, reader.uint32());
          break;
        case 2:
          message.exec = OneshotExec.decode(reader, reader.uint32());
          break;
        case 10:
          message.fireAt = reader.int64();
          break;
        case 11:
          message.fireError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ScheduledOneshotPayload>): ScheduledOneshotPayload {
    const message = createBaseScheduledOneshotPayload();
    message.transfer = object.transfer !== undefined && object.transfer !== null ? OneshotTransfer.fromPartial(object.transfer) : undefined;
    message.exec = object.exec !== undefined && object.exec !== null ? OneshotExec.fromPartial(object.exec) : undefined;
    message.fireAt = object.fireAt !== undefined && object.fireAt !== null ? BigInt(object.fireAt.toString()) : BigInt(0);
    message.fireError = object.fireError ?? "";
    return message;
  },
  fromAmino(object: ScheduledOneshotPayloadAmino): ScheduledOneshotPayload {
    const message = createBaseScheduledOneshotPayload();
    if (object.transfer !== undefined && object.transfer !== null) {
      message.transfer = OneshotTransfer.fromAmino(object.transfer);
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = OneshotExec.fromAmino(object.exec);
    }
    if (object.fire_at !== undefined && object.fire_at !== null) {
      message.fireAt = BigInt(object.fire_at);
    }
    if (object.fire_error !== undefined && object.fire_error !== null) {
      message.fireError = object.fire_error;
    }
    return message;
  },
  toAmino(message: ScheduledOneshotPayload): ScheduledOneshotPayloadAmino {
    const obj: any = {};
    obj.transfer = message.transfer ? OneshotTransfer.toAmino(message.transfer) : undefined;
    obj.exec = message.exec ? OneshotExec.toAmino(message.exec) : undefined;
    obj.fire_at = message.fireAt !== BigInt(0) ? message.fireAt?.toString() : undefined;
    obj.fire_error = message.fireError === "" ? undefined : message.fireError;
    return obj;
  },
  fromAminoMsg(object: ScheduledOneshotPayloadAminoMsg): ScheduledOneshotPayload {
    return ScheduledOneshotPayload.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledOneshotPayloadProtoMsg): ScheduledOneshotPayload {
    return ScheduledOneshotPayload.decode(message.value);
  },
  toProto(message: ScheduledOneshotPayload): Uint8Array {
    return ScheduledOneshotPayload.encode(message).finish();
  },
  toProtoMsg(message: ScheduledOneshotPayload): ScheduledOneshotPayloadProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.ScheduledOneshotPayload",
      value: ScheduledOneshotPayload.encode(message).finish()
    };
  }
};
function createBaseOneshotTransfer(): OneshotTransfer {
  return {
    recipient: "",
    amount: Coin.fromPartial({})
  };
}
/**
 * OneshotTransfer dispatches a simple bank SendCoins(granter, recipient,
 * amount) at fire time.
 * @name OneshotTransfer
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotTransfer
 */
export const OneshotTransfer = {
  typeUrl: "/sparkdream.session.v1.OneshotTransfer",
  encode(message: OneshotTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneshotTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneshotTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OneshotTransfer>): OneshotTransfer {
    const message = createBaseOneshotTransfer();
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: OneshotTransferAmino): OneshotTransfer {
    const message = createBaseOneshotTransfer();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: OneshotTransfer): OneshotTransferAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: OneshotTransferAminoMsg): OneshotTransfer {
    return OneshotTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: OneshotTransferProtoMsg): OneshotTransfer {
    return OneshotTransfer.decode(message.value);
  },
  toProto(message: OneshotTransfer): Uint8Array {
    return OneshotTransfer.encode(message).finish();
  },
  toProtoMsg(message: OneshotTransfer): OneshotTransferProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.OneshotTransfer",
      value: OneshotTransfer.encode(message).finish()
    };
  }
};
function createBaseOneshotExec(): OneshotExec {
  return {
    msg: undefined,
    gasLimit: BigInt(0)
  };
}
/**
 * OneshotExec dispatches an arbitrary message at fire time, executed as
 * if signed by the granter. Subject to the same allowed_msg_types
 * whitelist as session keys and the same NonDelegableSessionMsgs
 * anti-recursion denylist, both at creation and at fire time.
 * @name OneshotExec
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotExec
 */
export const OneshotExec = {
  typeUrl: "/sparkdream.session.v1.OneshotExec",
  encode(message: OneshotExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneshotExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneshotExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.gasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OneshotExec>): OneshotExec {
    const message = createBaseOneshotExec();
    message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OneshotExecAmino): OneshotExec {
    const message = createBaseOneshotExec();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Any.fromAmino(object.msg);
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = BigInt(object.gas_limit);
    }
    return message;
  },
  toAmino(message: OneshotExec): OneshotExecAmino {
    const obj: any = {};
    obj.msg = message.msg ? Any.toAmino(message.msg) : undefined;
    obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OneshotExecAminoMsg): OneshotExec {
    return OneshotExec.fromAmino(object.value);
  },
  fromProtoMsg(message: OneshotExecProtoMsg): OneshotExec {
    return OneshotExec.decode(message.value);
  },
  toProto(message: OneshotExec): Uint8Array {
    return OneshotExec.encode(message).finish();
  },
  toProtoMsg(message: OneshotExec): OneshotExecProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.OneshotExec",
      value: OneshotExec.encode(message).finish()
    };
  }
};