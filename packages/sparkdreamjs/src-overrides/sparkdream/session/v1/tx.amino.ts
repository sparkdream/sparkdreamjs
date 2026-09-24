//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for rationale.
//
// Because this file replaces the generated one wholesale, EVERY Msg in
// session/v1/tx.proto must have an entry here — a message added to the proto
// but not to this map ships in the registry with no amino converter, and
// Keplr/Ledger (amino-json) signing of it fails.
//
// Three shapes telescope gets wrong for this module:
//
//   1. MsgExecSession / OneshotExec carry google.protobuf.Any, which needs the
//      recursive conversion in ../../../nested-amino.
//   2. MsgCreateGrant.payload and ScheduledOneshotPayload.action are oneofs
//      with (amino.oneof_name). cosmossdk.io/x/tx/signing/aminojson renders a
//      set oneof member as
//
//        "<CamelCase oneof name>": {"type": "<oneof_name>", "value": {"<field>": {...}}}
//
//      e.g. "Payload": {"type": "sparkdream/session/RecurringPullPayload",
//                        "value": {"recurring_pull": {...}}}
//
//      while telescope emits the bare member ("recurring_pull": {...}).
//   3. Repeated fields must be omitted when empty (omitempty), never `[]`.
//
// cosmjs rebuilds the TxBody from fromAmino(signed msgs), so each fromAmino
// below must exactly invert its toAmino.
//
// 64-bit ints are coerced here rather than trusting callers to pass BigInt:
// cosmjs hands toAmino the caller's raw value (no fromPartial), and a Number
// 0 would otherwise sign a key the chain omits.

import {
  MsgUpdateParams, MsgUpdateOperationalParams,
  MsgCreateSession, MsgRevokeSession,
} from "./tx";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

const str = (v: any) => (v === "" || v === undefined || v === null ? undefined : v);
const int64 = (v: any) => {
  if (v === undefined || v === null || v === "") return undefined;
  const b = BigInt(v);
  return b === BigInt(0) ? undefined : b.toString();
};
const bool = (v: any) => (v ? true : undefined);
const list = (v: any) => ((v?.length ?? 0) > 0 ? v.map((e: any) => e) : undefined);
const coin = (v: any) => (v ? Coin.toAmino(Coin.fromPartial(v)) : undefined);
const time = (v: any) => (v ? Timestamp.toAmino(toTimestamp(v)) : undefined);

const toBig = (v: any) => (v === undefined || v === null ? BigInt(0) : BigInt(v));
const fromCoin = (v: any) => (v ? Coin.fromAmino(v) : undefined);
const fromTime = (v: any) => (v ? fromTimestamp(Timestamp.fromAmino(v)) : undefined);

// ── Payloads ────────────────────────────────────────────────────────────

const sessionKeyToAmino = (p: any) => ({
  allowed_msg_types: list(p.allowedMsgTypes),
  spend_limit: coin(p.spendLimit),
  spent: coin(p.spent),
  max_exec_count: int64(p.maxExecCount),
  exec_count: int64(p.execCount),
  last_used_at: time(p.lastUsedAt),
  allow_self_revoke: bool(p.allowSelfRevoke),
});
const sessionKeyFromAmino = (o: any) => ({
  allowedMsgTypes: o.allowed_msg_types ?? [],
  spendLimit: fromCoin(o.spend_limit),
  spent: fromCoin(o.spent),
  maxExecCount: toBig(o.max_exec_count),
  execCount: toBig(o.exec_count),
  lastUsedAt: fromTime(o.last_used_at),
  allowSelfRevoke: o.allow_self_revoke ?? false,
});

const recurringPullToAmino = (p: any) => ({
  amount_per_period: coin(p.amountPerPeriod),
  period_seconds: int64(p.periodSeconds),
  start_time: int64(p.startTime),
  last_claim_advance: int64(p.lastClaimAdvance),
  claims_made: int64(p.claimsMade),
  max_per_epoch: str(p.maxPerEpoch),
});
const recurringPullFromAmino = (o: any) => ({
  amountPerPeriod: fromCoin(o.amount_per_period),
  periodSeconds: toBig(o.period_seconds),
  startTime: toBig(o.start_time),
  lastClaimAdvance: toBig(o.last_claim_advance),
  claimsMade: toBig(o.claims_made),
  maxPerEpoch: o.max_per_epoch ?? "",
});

const spendingAllowanceToAmino = (p: any) => ({
  max_per_period: coin(p.maxPerPeriod),
  period_seconds: int64(p.periodSeconds),
  current_period_start: int64(p.currentPeriodStart),
  spent_in_current_period: coin(p.spentInCurrentPeriod),
  allowed_recipients: list(p.allowedRecipients),
  denom: str(p.denom),
});
const spendingAllowanceFromAmino = (o: any) => ({
  maxPerPeriod: fromCoin(o.max_per_period),
  periodSeconds: toBig(o.period_seconds),
  currentPeriodStart: toBig(o.current_period_start),
  spentInCurrentPeriod: fromCoin(o.spent_in_current_period),
  allowedRecipients: o.allowed_recipients ?? [],
  denom: o.denom ?? "",
});

const scheduledOneshotToAmino = (p: any) => {
  let action: any = undefined;
  if (p.transfer) {
    action = {
      type: "sparkdream/session/OneshotTransfer",
      value: { transfer: { recipient: str(p.transfer.recipient), amount: coin(p.transfer.amount) } },
    };
  } else if (p.exec) {
    action = {
      type: "sparkdream/session/OneshotExec",
      value: {
        exec: {
          msg: p.exec.msg ? anyToAmino(p.exec.msg) : undefined,
          gas_limit: int64(p.exec.gasLimit),
        },
      },
    };
  }
  return {
    // aminojson writes `null` for an unset oneof rather than omitting it.
    Action: action ?? null,
    fire_at: int64(p.fireAt),
    fire_error: str(p.fireError),
  };
};
const scheduledOneshotFromAmino = (o: any) => {
  const v = o.Action?.value ?? {};
  return {
    transfer: v.transfer
      ? { recipient: v.transfer.recipient ?? "", amount: fromCoin(v.transfer.amount) }
      : undefined,
    exec: v.exec
      ? { msg: v.exec.msg ? aminoToAny(v.exec.msg) : undefined, gasLimit: toBig(v.exec.gas_limit) }
      : undefined,
    fireAt: toBig(o.fire_at),
    fireError: o.fire_error ?? "",
  };
};

const PAYLOADS = [
  ["sessionKey", "session_key", "sparkdream/session/SessionKeyPayload", sessionKeyToAmino, sessionKeyFromAmino],
  ["recurringPull", "recurring_pull", "sparkdream/session/RecurringPullPayload", recurringPullToAmino, recurringPullFromAmino],
  ["spendingAllowance", "spending_allowance", "sparkdream/session/SpendingAllowancePayload", spendingAllowanceToAmino, spendingAllowanceFromAmino],
  ["scheduledOneshot", "scheduled_oneshot", "sparkdream/session/ScheduledOneshotPayload", scheduledOneshotToAmino, scheduledOneshotFromAmino],
] as const;

// ── Messages ────────────────────────────────────────────────────────────

// {<signer>, grant_id} messages; each signer field name is a single word, so
// the proto and amino spellings coincide.
const grantIdMsg = (signer: string) => ({
  toAmino: (m: any) => ({ [signer]: str(m[signer]), grant_id: int64(m.grantId) }),
  fromAmino: (o: any) => ({ [signer]: o[signer] ?? "", grantId: toBig(o.grant_id) }),
});

export const AminoConverter = {
  "/sparkdream.session.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/session/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.session.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/session/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino,
  },
  // `allowed_msg_types` is the repeated string field that gets emitted as `[]`
  // when a session is created with no type allowlist (i.e. allow-all).
  "/sparkdream.session.v1.MsgCreateSession": {
    aminoType: "sparkdream/x/session/MsgCreateSession",
    toAmino(message: any): any {
      const obj: any = {};
      obj.granter = message.granter === "" ? undefined : message.granter;
      obj.grantee = message.grantee === "" ? undefined : message.grantee;
      obj.allowed_msg_types = (message.allowedMsgTypes?.length ?? 0) > 0
        ? message.allowedMsgTypes.map((e: string) => e)
        : undefined;
      obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
      obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
      obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
      return obj;
    },
    fromAmino: MsgCreateSession.fromAmino,
  },
  "/sparkdream.session.v1.MsgRevokeSession": {
    aminoType: "sparkdream/x/session/MsgRevokeSession",
    toAmino: MsgRevokeSession.toAmino,
    fromAmino: MsgRevokeSession.fromAmino,
  },
  "/sparkdream.session.v1.MsgExecSession": {
    aminoType: "sparkdream/x/session/MsgExecSession",
    toAmino(message: any): any {
      const obj: any = {};
      obj.grantee = message.grantee === "" ? undefined : message.grantee;
      obj.granter = message.granter === "" ? undefined : message.granter;
      // Omit when empty to match the chain's aminojson default for
      // repeated fields.
      obj.msgs = (message.msgs?.length ?? 0) > 0
        ? message.msgs.map((a: any) => anyToAmino(a))
        : undefined;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        grantee: object.grantee ?? "",
        granter: object.granter ?? "",
        msgs: (object.msgs ?? []).map((e: any) => aminoToAny(e)),
      };
    },
  },
  "/sparkdream.session.v1.MsgCreateGrant": {
    aminoType: "sparkdream/x/session/MsgCreateGrant",
    toAmino(message: any): any {
      const set = PAYLOADS.find(([key]) => message[key]);
      return {
        granter: str(message.granter),
        grantee: str(message.grantee),
        expires_at: time(message.expiresAt),
        note: str(message.note),
        Payload: set
          ? { type: set[2], value: { [set[1]]: set[3](message[set[0]]) } }
          : null,
      };
    },
    fromAmino(object: any): any {
      const out: any = {
        granter: object.granter ?? "",
        grantee: object.grantee ?? "",
        expiresAt: fromTime(object.expires_at),
        note: object.note ?? "",
      };
      const inner = object.Payload?.value ?? {};
      for (const [key, field, , , fromAmino] of PAYLOADS) {
        if (inner[field]) out[key] = fromAmino(inner[field]);
      }
      return out;
    },
  },
  "/sparkdream.session.v1.MsgClaimRecurringPull": {
    aminoType: "sparkdream/x/session/MsgClaimRecurringPull",
    ...grantIdMsg("grantee"),
  },
  "/sparkdream.session.v1.MsgPullAllowance": {
    aminoType: "sparkdream/x/session/MsgPullAllowance",
    toAmino: (m: any) => ({
      grantee: str(m.grantee),
      grant_id: int64(m.grantId),
      recipient: str(m.recipient),
      amount: coin(m.amount),
    }),
    fromAmino: (o: any) => ({
      grantee: o.grantee ?? "",
      grantId: toBig(o.grant_id),
      recipient: o.recipient ?? "",
      amount: fromCoin(o.amount),
    }),
  },
  "/sparkdream.session.v1.MsgRetryScheduledOneshot": {
    aminoType: "sparkdream/x/session/MsgRetryScheduledOneshot",
    ...grantIdMsg("caller"),
  },
  "/sparkdream.session.v1.MsgRevokeGrant": {
    aminoType: "sparkdream/x/session/MsgRevokeGrant",
    ...grantIdMsg("granter"),
  },
  "/sparkdream.session.v1.MsgDeclineGrant": {
    aminoType: "sparkdream/x/session/MsgDeclineGrant",
    ...grantIdMsg("grantee"),
  },
};
