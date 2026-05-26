//@ts-nocheck
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Params
 */
export interface Params {
  /**
   * Ceiling: the maximum set of message types that could ever be session-delegable.
   * Set at genesis. Only expandable via chain upgrade.
   */
  maxAllowedMsgTypes: string[];
  /**
   * Active allowlist: the currently delegable subset of max_allowed_msg_types.
   * Governance can remove types. Operations Committee can re-add from ceiling.
   */
  allowedMsgTypes: string[];
  /**
   * Maximum concurrent active sessions per granter.
   */
  maxSessionsPerGranter: bigint;
  /**
   * Maximum message types per individual session.
   */
  maxMsgTypesPerSession: bigint;
  /**
   * Maximum session duration.
   */
  maxExpiration: Duration;
  /**
   * Maximum gas budget per session, in bond-denom micro-units (the chain's
   * bond denom is resolved at runtime via x/identity).
   */
  maxSpendLimitAmount: string;
  /**
   * Maximum exec_count per session. Must be > 0; sessions must declare
   * a finite cap (1 <= session.max_exec_count <= params.max_exec_count).
   */
  maxExecCount: bigint;
  /**
   * --- RecurringPull (P3) ---
   * Minimum period_seconds on a RECURRING_PULL grant. Default 86_400 (1 day);
   * prevents abusive sub-second polling.
   */
  minRecurringPeriodSeconds: bigint;
  /**
   * Maximum (expires_at - start_time) on a RECURRING_PULL grant. Default
   * 31_536_000 (1 year); long-lived recurring authorizations need explicit
   * re-issuance.
   */
  maxRecurringDurationSeconds: bigint;
  /**
   * Maximum number of active RECURRING_PULL grants per granter. Default 50.
   */
  maxRecurringPullsPerGranter: number;
  /**
   * --- SpendingAllowance (P4) ---
   * Minimum period_seconds on a SPENDING_ALLOWANCE grant. Default 3_600
   * (1 hour); finer-grained than RecurringPull to support rolling burst
   * budgets.
   */
  minAllowancePeriodSeconds: bigint;
  /**
   * Maximum number of active SPENDING_ALLOWANCE grants per granter.
   * Default 20.
   */
  maxAllowancesPerGranter: number;
  /**
   * Maximum size of an allowed_recipients whitelist. Default 50. Prevents
   * state-bloat attacks by capping the per-grant list length.
   */
  maxAllowanceRecipientList: number;
  /**
   * Minimum amount per MsgPullAllowance call, as sdk.Int (string). Default
   * "1000" (1000 uspark / 0.001 SPARK). Closes the "1 utoken at a time to
   * bloat events / drain state" griefing pattern.
   */
  minPullAmount: string;
  /**
   * --- ScheduledOneshot (P5) ---
   * Minimum (fire_at - block_time) at creation. Default 60s; closes
   * front-running edge cases.
   */
  minScheduleDelaySeconds: bigint;
  /**
   * Maximum (fire_at - block_time) at creation. Default 31_536_000 (1 year).
   * Applies to fire_at only; max_grant_lifetime_seconds applies to expires_at.
   */
  maxScheduleHorizonSeconds: bigint;
  /**
   * Required buffer between fire_at and expires_at. Default 3600 (1h);
   * makes the EndBlocker fire-vs-expire race impossible.
   */
  fireToExpiryBufferSeconds: bigint;
  /**
   * Maximum active (non-paused) ScheduledOneshot grants per granter. Default 100.
   */
  maxPendingOneshotsPerGranter: number;
  /**
   * Maximum paused (PAUSED_INSUFFICIENT_FUNDS) ScheduledOneshot grants per
   * granter. Default 20. Separate from active cap so paused grants don't
   * pin slots indefinitely.
   */
  maxPausedOneshotsPerGranter: number;
  /**
   * Auto-revoke a paused oneshot after this many seconds. Default 604_800
   * (7 days). Deposit refunded on auto-revoke.
   */
  pausedOneshotTtlSeconds: bigint;
  /**
   * Minimum gas_limit allowed on OneshotExec. Default 30_000.
   */
  minOneshotExecGas: bigint;
  /**
   * Maximum gas_limit allowed on OneshotExec. Default 200_000.
   */
  maxOneshotExecGas: bigint;
  /**
   * Price per gas unit for OneshotExec deposit calculation, as sdk.Dec
   * string. Default "0.0025" (100x typical min_gas_price). Floor must be
   * >= chain's effective min_gas_price. Denominated in the chain's bond
   * denom (resolved at runtime via x/identity).
   */
  oneshotGasPrice: string;
  /**
   * Flat per-slot fee on every Oneshot grant creation (both Transfer and
   * Exec variants), in bond-denom micro-units. Default 1000 (0.001 SPARK).
   * Closes the "free state slot" hole.
   */
  oneshotCreationFee: bigint;
  /**
   * Hard floor on total deposit, in bond-denom micro-units. Default 1000.
   * Defeats `gas_limit=1` zero-deposit slot griefing.
   */
  minOneshotDeposit: bigint;
  /**
   * Per-EndBlocker pass cap on dispatches (fire, auto-revoke, expire each
   * get their own cap). Default 100.
   */
  maxEndblockerDispatchesPerPass: number;
  /**
   * --- Cross-type (P3) ---
   * Additional coins permitted as denom in RecurringPull / SpendingAllowance
   * / Oneshot grants. Default empty — the chain's bond denom is ALWAYS
   * allowed; this list adds additional permitted denoms (e.g. IBC vouchers).
   * DREAM is permanently excluded at the handler level regardless of
   * contents.
   */
  allowedDenoms: string[];
  /**
   * General cap on `expires_at - created_at` across all grant types. Default
   * 31_536_000 (1 year).
   */
  maxGrantLifetimeSeconds: bigint;
  /**
   * --- Module-bypass (P8) ---
   * Bech32 addresses of module accounts authorized to call
   * `CreateGrantOnBehalfOf` (the signature-bypass keeper entrypoint).
   * Default empty — no module may bypass signatures unless explicitly
   * gov-allowlisted.
   * 
   * The bypass exists to let trusted modules (e.g. x/commons for council
   * recurring spends) create grants for module-account granters that
   * can't sign a real tx. Each address listed here is a strict trust
   * grant; the bypass skips signature + sequence verification, so a
   * compromised or buggy allowlisted module could synthesize arbitrary
   * grants. Add only after a security review.
   */
  authorizedGrantCreators: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Params
 */
export interface ParamsAmino {
  /**
   * Ceiling: the maximum set of message types that could ever be session-delegable.
   * Set at genesis. Only expandable via chain upgrade.
   */
  max_allowed_msg_types?: string[];
  /**
   * Active allowlist: the currently delegable subset of max_allowed_msg_types.
   * Governance can remove types. Operations Committee can re-add from ceiling.
   */
  allowed_msg_types?: string[];
  /**
   * Maximum concurrent active sessions per granter.
   */
  max_sessions_per_granter?: string;
  /**
   * Maximum message types per individual session.
   */
  max_msg_types_per_session?: string;
  /**
   * Maximum session duration.
   */
  max_expiration?: DurationAmino;
  /**
   * Maximum gas budget per session, in bond-denom micro-units (the chain's
   * bond denom is resolved at runtime via x/identity).
   */
  max_spend_limit_amount?: string;
  /**
   * Maximum exec_count per session. Must be > 0; sessions must declare
   * a finite cap (1 <= session.max_exec_count <= params.max_exec_count).
   */
  max_exec_count?: string;
  /**
   * --- RecurringPull (P3) ---
   * Minimum period_seconds on a RECURRING_PULL grant. Default 86_400 (1 day);
   * prevents abusive sub-second polling.
   */
  min_recurring_period_seconds?: string;
  /**
   * Maximum (expires_at - start_time) on a RECURRING_PULL grant. Default
   * 31_536_000 (1 year); long-lived recurring authorizations need explicit
   * re-issuance.
   */
  max_recurring_duration_seconds?: string;
  /**
   * Maximum number of active RECURRING_PULL grants per granter. Default 50.
   */
  max_recurring_pulls_per_granter?: number;
  /**
   * --- SpendingAllowance (P4) ---
   * Minimum period_seconds on a SPENDING_ALLOWANCE grant. Default 3_600
   * (1 hour); finer-grained than RecurringPull to support rolling burst
   * budgets.
   */
  min_allowance_period_seconds?: string;
  /**
   * Maximum number of active SPENDING_ALLOWANCE grants per granter.
   * Default 20.
   */
  max_allowances_per_granter?: number;
  /**
   * Maximum size of an allowed_recipients whitelist. Default 50. Prevents
   * state-bloat attacks by capping the per-grant list length.
   */
  max_allowance_recipient_list?: number;
  /**
   * Minimum amount per MsgPullAllowance call, as sdk.Int (string). Default
   * "1000" (1000 uspark / 0.001 SPARK). Closes the "1 utoken at a time to
   * bloat events / drain state" griefing pattern.
   */
  min_pull_amount?: string;
  /**
   * --- ScheduledOneshot (P5) ---
   * Minimum (fire_at - block_time) at creation. Default 60s; closes
   * front-running edge cases.
   */
  min_schedule_delay_seconds?: string;
  /**
   * Maximum (fire_at - block_time) at creation. Default 31_536_000 (1 year).
   * Applies to fire_at only; max_grant_lifetime_seconds applies to expires_at.
   */
  max_schedule_horizon_seconds?: string;
  /**
   * Required buffer between fire_at and expires_at. Default 3600 (1h);
   * makes the EndBlocker fire-vs-expire race impossible.
   */
  fire_to_expiry_buffer_seconds?: string;
  /**
   * Maximum active (non-paused) ScheduledOneshot grants per granter. Default 100.
   */
  max_pending_oneshots_per_granter?: number;
  /**
   * Maximum paused (PAUSED_INSUFFICIENT_FUNDS) ScheduledOneshot grants per
   * granter. Default 20. Separate from active cap so paused grants don't
   * pin slots indefinitely.
   */
  max_paused_oneshots_per_granter?: number;
  /**
   * Auto-revoke a paused oneshot after this many seconds. Default 604_800
   * (7 days). Deposit refunded on auto-revoke.
   */
  paused_oneshot_ttl_seconds?: string;
  /**
   * Minimum gas_limit allowed on OneshotExec. Default 30_000.
   */
  min_oneshot_exec_gas?: string;
  /**
   * Maximum gas_limit allowed on OneshotExec. Default 200_000.
   */
  max_oneshot_exec_gas?: string;
  /**
   * Price per gas unit for OneshotExec deposit calculation, as sdk.Dec
   * string. Default "0.0025" (100x typical min_gas_price). Floor must be
   * >= chain's effective min_gas_price. Denominated in the chain's bond
   * denom (resolved at runtime via x/identity).
   */
  oneshot_gas_price?: string;
  /**
   * Flat per-slot fee on every Oneshot grant creation (both Transfer and
   * Exec variants), in bond-denom micro-units. Default 1000 (0.001 SPARK).
   * Closes the "free state slot" hole.
   */
  oneshot_creation_fee?: string;
  /**
   * Hard floor on total deposit, in bond-denom micro-units. Default 1000.
   * Defeats `gas_limit=1` zero-deposit slot griefing.
   */
  min_oneshot_deposit?: string;
  /**
   * Per-EndBlocker pass cap on dispatches (fire, auto-revoke, expire each
   * get their own cap). Default 100.
   */
  max_endblocker_dispatches_per_pass?: number;
  /**
   * --- Cross-type (P3) ---
   * Additional coins permitted as denom in RecurringPull / SpendingAllowance
   * / Oneshot grants. Default empty — the chain's bond denom is ALWAYS
   * allowed; this list adds additional permitted denoms (e.g. IBC vouchers).
   * DREAM is permanently excluded at the handler level regardless of
   * contents.
   */
  allowed_denoms?: string[];
  /**
   * General cap on `expires_at - created_at` across all grant types. Default
   * 31_536_000 (1 year).
   */
  max_grant_lifetime_seconds?: string;
  /**
   * --- Module-bypass (P8) ---
   * Bech32 addresses of module accounts authorized to call
   * `CreateGrantOnBehalfOf` (the signature-bypass keeper entrypoint).
   * Default empty — no module may bypass signatures unless explicitly
   * gov-allowlisted.
   * 
   * The bypass exists to let trusted modules (e.g. x/commons for council
   * recurring spends) create grants for module-account granters that
   * can't sign a real tx. Each address listed here is a strict trust
   * grant; the bypass skips signature + sequence verification, so a
   * compromised or buggy allowlisted module could synthesize arbitrary
   * grants. Add only after a security review.
   */
  authorized_grant_creators?: string[];
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/session/Params";
  value: ParamsAmino;
}
/**
 * SessionOperationalParams defines the operational parameters updateable by
 * the Commons Council Operations Committee without a full governance proposal.
 * max_allowed_msg_types (the ceiling) is excluded — only chain upgrades can expand it.
 * @name SessionOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionOperationalParams
 */
export interface SessionOperationalParams {
  /**
   * Operations Committee can re-add types to the active allowlist, but ONLY
   * from max_allowed_msg_types (the ceiling). Cannot expand beyond the ceiling.
   */
  allowedMsgTypes: string[];
  maxSessionsPerGranter: bigint;
  maxMsgTypesPerSession: bigint;
  maxExpiration: Duration;
  maxSpendLimitAmount: string;
  maxExecCount: bigint;
  /**
   * --- RecurringPull + cross-type (P3) ---
   */
  minRecurringPeriodSeconds: bigint;
  maxRecurringDurationSeconds: bigint;
  maxRecurringPullsPerGranter: number;
  /**
   * --- SpendingAllowance (P4) ---
   */
  minAllowancePeriodSeconds: bigint;
  maxAllowancesPerGranter: number;
  maxAllowanceRecipientList: number;
  minPullAmount: string;
  /**
   * --- ScheduledOneshot (P5) ---
   */
  minScheduleDelaySeconds: bigint;
  maxScheduleHorizonSeconds: bigint;
  fireToExpiryBufferSeconds: bigint;
  maxPendingOneshotsPerGranter: number;
  maxPausedOneshotsPerGranter: number;
  pausedOneshotTtlSeconds: bigint;
  minOneshotExecGas: bigint;
  maxOneshotExecGas: bigint;
  oneshotGasPrice: string;
  oneshotCreationFee: bigint;
  minOneshotDeposit: bigint;
  maxEndblockerDispatchesPerPass: number;
  /**
   * Note: allowed_denoms is add-only by ops (removing a denom strands existing
   * grants and is gov-only via MsgUpdateParams). Including it here so ops can
   * widen the set.
   */
  allowedDenoms: string[];
  maxGrantLifetimeSeconds: bigint;
}
export interface SessionOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.SessionOperationalParams";
  value: Uint8Array;
}
/**
 * SessionOperationalParams defines the operational parameters updateable by
 * the Commons Council Operations Committee without a full governance proposal.
 * max_allowed_msg_types (the ceiling) is excluded — only chain upgrades can expand it.
 * @name SessionOperationalParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionOperationalParams
 */
export interface SessionOperationalParamsAmino {
  /**
   * Operations Committee can re-add types to the active allowlist, but ONLY
   * from max_allowed_msg_types (the ceiling). Cannot expand beyond the ceiling.
   */
  allowed_msg_types?: string[];
  max_sessions_per_granter?: string;
  max_msg_types_per_session?: string;
  max_expiration?: DurationAmino;
  max_spend_limit_amount?: string;
  max_exec_count?: string;
  /**
   * --- RecurringPull + cross-type (P3) ---
   */
  min_recurring_period_seconds?: string;
  max_recurring_duration_seconds?: string;
  max_recurring_pulls_per_granter?: number;
  /**
   * --- SpendingAllowance (P4) ---
   */
  min_allowance_period_seconds?: string;
  max_allowances_per_granter?: number;
  max_allowance_recipient_list?: number;
  min_pull_amount?: string;
  /**
   * --- ScheduledOneshot (P5) ---
   */
  min_schedule_delay_seconds?: string;
  max_schedule_horizon_seconds?: string;
  fire_to_expiry_buffer_seconds?: string;
  max_pending_oneshots_per_granter?: number;
  max_paused_oneshots_per_granter?: number;
  paused_oneshot_ttl_seconds?: string;
  min_oneshot_exec_gas?: string;
  max_oneshot_exec_gas?: string;
  oneshot_gas_price?: string;
  oneshot_creation_fee?: string;
  min_oneshot_deposit?: string;
  max_endblocker_dispatches_per_pass?: number;
  /**
   * Note: allowed_denoms is add-only by ops (removing a denom strands existing
   * grants and is gov-only via MsgUpdateParams). Including it here so ops can
   * widen the set.
   */
  allowed_denoms?: string[];
  max_grant_lifetime_seconds?: string;
}
export interface SessionOperationalParamsAminoMsg {
  type: "sparkdream/x/session/SessionOperationalParams";
  value: SessionOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    maxAllowedMsgTypes: [],
    allowedMsgTypes: [],
    maxSessionsPerGranter: BigInt(0),
    maxMsgTypesPerSession: BigInt(0),
    maxExpiration: Duration.fromPartial({}),
    maxSpendLimitAmount: "",
    maxExecCount: BigInt(0),
    minRecurringPeriodSeconds: BigInt(0),
    maxRecurringDurationSeconds: BigInt(0),
    maxRecurringPullsPerGranter: 0,
    minAllowancePeriodSeconds: BigInt(0),
    maxAllowancesPerGranter: 0,
    maxAllowanceRecipientList: 0,
    minPullAmount: "",
    minScheduleDelaySeconds: BigInt(0),
    maxScheduleHorizonSeconds: BigInt(0),
    fireToExpiryBufferSeconds: BigInt(0),
    maxPendingOneshotsPerGranter: 0,
    maxPausedOneshotsPerGranter: 0,
    pausedOneshotTtlSeconds: BigInt(0),
    minOneshotExecGas: BigInt(0),
    maxOneshotExecGas: BigInt(0),
    oneshotGasPrice: "",
    oneshotCreationFee: BigInt(0),
    minOneshotDeposit: BigInt(0),
    maxEndblockerDispatchesPerPass: 0,
    allowedDenoms: [],
    maxGrantLifetimeSeconds: BigInt(0),
    authorizedGrantCreators: []
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.session.v1.Params",
  aminoType: "sparkdream/x/session/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.maxAllowedMsgTypes) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.allowedMsgTypes) {
      writer.uint32(18).string(v!);
    }
    if (message.maxSessionsPerGranter !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxSessionsPerGranter);
    }
    if (message.maxMsgTypesPerSession !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxMsgTypesPerSession);
    }
    if (message.maxExpiration !== undefined) {
      Duration.encode(message.maxExpiration, writer.uint32(42).fork()).ldelim();
    }
    if (message.maxSpendLimitAmount !== "") {
      writer.uint32(50).string(message.maxSpendLimitAmount);
    }
    if (message.maxExecCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxExecCount);
    }
    if (message.minRecurringPeriodSeconds !== BigInt(0)) {
      writer.uint32(80).int64(message.minRecurringPeriodSeconds);
    }
    if (message.maxRecurringDurationSeconds !== BigInt(0)) {
      writer.uint32(88).int64(message.maxRecurringDurationSeconds);
    }
    if (message.maxRecurringPullsPerGranter !== 0) {
      writer.uint32(96).uint32(message.maxRecurringPullsPerGranter);
    }
    if (message.minAllowancePeriodSeconds !== BigInt(0)) {
      writer.uint32(160).int64(message.minAllowancePeriodSeconds);
    }
    if (message.maxAllowancesPerGranter !== 0) {
      writer.uint32(168).uint32(message.maxAllowancesPerGranter);
    }
    if (message.maxAllowanceRecipientList !== 0) {
      writer.uint32(176).uint32(message.maxAllowanceRecipientList);
    }
    if (message.minPullAmount !== "") {
      writer.uint32(186).string(message.minPullAmount);
    }
    if (message.minScheduleDelaySeconds !== BigInt(0)) {
      writer.uint32(240).int64(message.minScheduleDelaySeconds);
    }
    if (message.maxScheduleHorizonSeconds !== BigInt(0)) {
      writer.uint32(248).int64(message.maxScheduleHorizonSeconds);
    }
    if (message.fireToExpiryBufferSeconds !== BigInt(0)) {
      writer.uint32(256).int64(message.fireToExpiryBufferSeconds);
    }
    if (message.maxPendingOneshotsPerGranter !== 0) {
      writer.uint32(264).uint32(message.maxPendingOneshotsPerGranter);
    }
    if (message.maxPausedOneshotsPerGranter !== 0) {
      writer.uint32(272).uint32(message.maxPausedOneshotsPerGranter);
    }
    if (message.pausedOneshotTtlSeconds !== BigInt(0)) {
      writer.uint32(280).int64(message.pausedOneshotTtlSeconds);
    }
    if (message.minOneshotExecGas !== BigInt(0)) {
      writer.uint32(288).uint64(message.minOneshotExecGas);
    }
    if (message.maxOneshotExecGas !== BigInt(0)) {
      writer.uint32(296).uint64(message.maxOneshotExecGas);
    }
    if (message.oneshotGasPrice !== "") {
      writer.uint32(306).string(message.oneshotGasPrice);
    }
    if (message.oneshotCreationFee !== BigInt(0)) {
      writer.uint32(312).uint64(message.oneshotCreationFee);
    }
    if (message.minOneshotDeposit !== BigInt(0)) {
      writer.uint32(320).uint64(message.minOneshotDeposit);
    }
    if (message.maxEndblockerDispatchesPerPass !== 0) {
      writer.uint32(328).uint32(message.maxEndblockerDispatchesPerPass);
    }
    for (const v of message.allowedDenoms) {
      writer.uint32(402).string(v!);
    }
    if (message.maxGrantLifetimeSeconds !== BigInt(0)) {
      writer.uint32(408).int64(message.maxGrantLifetimeSeconds);
    }
    for (const v of message.authorizedGrantCreators) {
      writer.uint32(482).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAllowedMsgTypes.push(reader.string());
          break;
        case 2:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 3:
          message.maxSessionsPerGranter = reader.uint64();
          break;
        case 4:
          message.maxMsgTypesPerSession = reader.uint64();
          break;
        case 5:
          message.maxExpiration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxSpendLimitAmount = reader.string();
          break;
        case 7:
          message.maxExecCount = reader.uint64();
          break;
        case 10:
          message.minRecurringPeriodSeconds = reader.int64();
          break;
        case 11:
          message.maxRecurringDurationSeconds = reader.int64();
          break;
        case 12:
          message.maxRecurringPullsPerGranter = reader.uint32();
          break;
        case 20:
          message.minAllowancePeriodSeconds = reader.int64();
          break;
        case 21:
          message.maxAllowancesPerGranter = reader.uint32();
          break;
        case 22:
          message.maxAllowanceRecipientList = reader.uint32();
          break;
        case 23:
          message.minPullAmount = reader.string();
          break;
        case 30:
          message.minScheduleDelaySeconds = reader.int64();
          break;
        case 31:
          message.maxScheduleHorizonSeconds = reader.int64();
          break;
        case 32:
          message.fireToExpiryBufferSeconds = reader.int64();
          break;
        case 33:
          message.maxPendingOneshotsPerGranter = reader.uint32();
          break;
        case 34:
          message.maxPausedOneshotsPerGranter = reader.uint32();
          break;
        case 35:
          message.pausedOneshotTtlSeconds = reader.int64();
          break;
        case 36:
          message.minOneshotExecGas = reader.uint64();
          break;
        case 37:
          message.maxOneshotExecGas = reader.uint64();
          break;
        case 38:
          message.oneshotGasPrice = reader.string();
          break;
        case 39:
          message.oneshotCreationFee = reader.uint64();
          break;
        case 40:
          message.minOneshotDeposit = reader.uint64();
          break;
        case 41:
          message.maxEndblockerDispatchesPerPass = reader.uint32();
          break;
        case 50:
          message.allowedDenoms.push(reader.string());
          break;
        case 51:
          message.maxGrantLifetimeSeconds = reader.int64();
          break;
        case 60:
          message.authorizedGrantCreators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxAllowedMsgTypes = object.maxAllowedMsgTypes?.map(e => e) || [];
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.maxSessionsPerGranter = object.maxSessionsPerGranter !== undefined && object.maxSessionsPerGranter !== null ? BigInt(object.maxSessionsPerGranter.toString()) : BigInt(0);
    message.maxMsgTypesPerSession = object.maxMsgTypesPerSession !== undefined && object.maxMsgTypesPerSession !== null ? BigInt(object.maxMsgTypesPerSession.toString()) : BigInt(0);
    message.maxExpiration = object.maxExpiration !== undefined && object.maxExpiration !== null ? Duration.fromPartial(object.maxExpiration) : undefined;
    message.maxSpendLimitAmount = object.maxSpendLimitAmount ?? "";
    message.maxExecCount = object.maxExecCount !== undefined && object.maxExecCount !== null ? BigInt(object.maxExecCount.toString()) : BigInt(0);
    message.minRecurringPeriodSeconds = object.minRecurringPeriodSeconds !== undefined && object.minRecurringPeriodSeconds !== null ? BigInt(object.minRecurringPeriodSeconds.toString()) : BigInt(0);
    message.maxRecurringDurationSeconds = object.maxRecurringDurationSeconds !== undefined && object.maxRecurringDurationSeconds !== null ? BigInt(object.maxRecurringDurationSeconds.toString()) : BigInt(0);
    message.maxRecurringPullsPerGranter = object.maxRecurringPullsPerGranter ?? 0;
    message.minAllowancePeriodSeconds = object.minAllowancePeriodSeconds !== undefined && object.minAllowancePeriodSeconds !== null ? BigInt(object.minAllowancePeriodSeconds.toString()) : BigInt(0);
    message.maxAllowancesPerGranter = object.maxAllowancesPerGranter ?? 0;
    message.maxAllowanceRecipientList = object.maxAllowanceRecipientList ?? 0;
    message.minPullAmount = object.minPullAmount ?? "";
    message.minScheduleDelaySeconds = object.minScheduleDelaySeconds !== undefined && object.minScheduleDelaySeconds !== null ? BigInt(object.minScheduleDelaySeconds.toString()) : BigInt(0);
    message.maxScheduleHorizonSeconds = object.maxScheduleHorizonSeconds !== undefined && object.maxScheduleHorizonSeconds !== null ? BigInt(object.maxScheduleHorizonSeconds.toString()) : BigInt(0);
    message.fireToExpiryBufferSeconds = object.fireToExpiryBufferSeconds !== undefined && object.fireToExpiryBufferSeconds !== null ? BigInt(object.fireToExpiryBufferSeconds.toString()) : BigInt(0);
    message.maxPendingOneshotsPerGranter = object.maxPendingOneshotsPerGranter ?? 0;
    message.maxPausedOneshotsPerGranter = object.maxPausedOneshotsPerGranter ?? 0;
    message.pausedOneshotTtlSeconds = object.pausedOneshotTtlSeconds !== undefined && object.pausedOneshotTtlSeconds !== null ? BigInt(object.pausedOneshotTtlSeconds.toString()) : BigInt(0);
    message.minOneshotExecGas = object.minOneshotExecGas !== undefined && object.minOneshotExecGas !== null ? BigInt(object.minOneshotExecGas.toString()) : BigInt(0);
    message.maxOneshotExecGas = object.maxOneshotExecGas !== undefined && object.maxOneshotExecGas !== null ? BigInt(object.maxOneshotExecGas.toString()) : BigInt(0);
    message.oneshotGasPrice = object.oneshotGasPrice ?? "";
    message.oneshotCreationFee = object.oneshotCreationFee !== undefined && object.oneshotCreationFee !== null ? BigInt(object.oneshotCreationFee.toString()) : BigInt(0);
    message.minOneshotDeposit = object.minOneshotDeposit !== undefined && object.minOneshotDeposit !== null ? BigInt(object.minOneshotDeposit.toString()) : BigInt(0);
    message.maxEndblockerDispatchesPerPass = object.maxEndblockerDispatchesPerPass ?? 0;
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    message.maxGrantLifetimeSeconds = object.maxGrantLifetimeSeconds !== undefined && object.maxGrantLifetimeSeconds !== null ? BigInt(object.maxGrantLifetimeSeconds.toString()) : BigInt(0);
    message.authorizedGrantCreators = object.authorizedGrantCreators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.maxAllowedMsgTypes = object.max_allowed_msg_types?.map(e => e) || [];
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.max_sessions_per_granter !== undefined && object.max_sessions_per_granter !== null) {
      message.maxSessionsPerGranter = BigInt(object.max_sessions_per_granter);
    }
    if (object.max_msg_types_per_session !== undefined && object.max_msg_types_per_session !== null) {
      message.maxMsgTypesPerSession = BigInt(object.max_msg_types_per_session);
    }
    if (object.max_expiration !== undefined && object.max_expiration !== null) {
      message.maxExpiration = Duration.fromAmino(object.max_expiration);
    }
    if (object.max_spend_limit_amount !== undefined && object.max_spend_limit_amount !== null) {
      message.maxSpendLimitAmount = object.max_spend_limit_amount;
    }
    if (object.max_exec_count !== undefined && object.max_exec_count !== null) {
      message.maxExecCount = BigInt(object.max_exec_count);
    }
    if (object.min_recurring_period_seconds !== undefined && object.min_recurring_period_seconds !== null) {
      message.minRecurringPeriodSeconds = BigInt(object.min_recurring_period_seconds);
    }
    if (object.max_recurring_duration_seconds !== undefined && object.max_recurring_duration_seconds !== null) {
      message.maxRecurringDurationSeconds = BigInt(object.max_recurring_duration_seconds);
    }
    if (object.max_recurring_pulls_per_granter !== undefined && object.max_recurring_pulls_per_granter !== null) {
      message.maxRecurringPullsPerGranter = object.max_recurring_pulls_per_granter;
    }
    if (object.min_allowance_period_seconds !== undefined && object.min_allowance_period_seconds !== null) {
      message.minAllowancePeriodSeconds = BigInt(object.min_allowance_period_seconds);
    }
    if (object.max_allowances_per_granter !== undefined && object.max_allowances_per_granter !== null) {
      message.maxAllowancesPerGranter = object.max_allowances_per_granter;
    }
    if (object.max_allowance_recipient_list !== undefined && object.max_allowance_recipient_list !== null) {
      message.maxAllowanceRecipientList = object.max_allowance_recipient_list;
    }
    if (object.min_pull_amount !== undefined && object.min_pull_amount !== null) {
      message.minPullAmount = object.min_pull_amount;
    }
    if (object.min_schedule_delay_seconds !== undefined && object.min_schedule_delay_seconds !== null) {
      message.minScheduleDelaySeconds = BigInt(object.min_schedule_delay_seconds);
    }
    if (object.max_schedule_horizon_seconds !== undefined && object.max_schedule_horizon_seconds !== null) {
      message.maxScheduleHorizonSeconds = BigInt(object.max_schedule_horizon_seconds);
    }
    if (object.fire_to_expiry_buffer_seconds !== undefined && object.fire_to_expiry_buffer_seconds !== null) {
      message.fireToExpiryBufferSeconds = BigInt(object.fire_to_expiry_buffer_seconds);
    }
    if (object.max_pending_oneshots_per_granter !== undefined && object.max_pending_oneshots_per_granter !== null) {
      message.maxPendingOneshotsPerGranter = object.max_pending_oneshots_per_granter;
    }
    if (object.max_paused_oneshots_per_granter !== undefined && object.max_paused_oneshots_per_granter !== null) {
      message.maxPausedOneshotsPerGranter = object.max_paused_oneshots_per_granter;
    }
    if (object.paused_oneshot_ttl_seconds !== undefined && object.paused_oneshot_ttl_seconds !== null) {
      message.pausedOneshotTtlSeconds = BigInt(object.paused_oneshot_ttl_seconds);
    }
    if (object.min_oneshot_exec_gas !== undefined && object.min_oneshot_exec_gas !== null) {
      message.minOneshotExecGas = BigInt(object.min_oneshot_exec_gas);
    }
    if (object.max_oneshot_exec_gas !== undefined && object.max_oneshot_exec_gas !== null) {
      message.maxOneshotExecGas = BigInt(object.max_oneshot_exec_gas);
    }
    if (object.oneshot_gas_price !== undefined && object.oneshot_gas_price !== null) {
      message.oneshotGasPrice = object.oneshot_gas_price;
    }
    if (object.oneshot_creation_fee !== undefined && object.oneshot_creation_fee !== null) {
      message.oneshotCreationFee = BigInt(object.oneshot_creation_fee);
    }
    if (object.min_oneshot_deposit !== undefined && object.min_oneshot_deposit !== null) {
      message.minOneshotDeposit = BigInt(object.min_oneshot_deposit);
    }
    if (object.max_endblocker_dispatches_per_pass !== undefined && object.max_endblocker_dispatches_per_pass !== null) {
      message.maxEndblockerDispatchesPerPass = object.max_endblocker_dispatches_per_pass;
    }
    message.allowedDenoms = object.allowed_denoms?.map(e => e) || [];
    if (object.max_grant_lifetime_seconds !== undefined && object.max_grant_lifetime_seconds !== null) {
      message.maxGrantLifetimeSeconds = BigInt(object.max_grant_lifetime_seconds);
    }
    message.authorizedGrantCreators = object.authorized_grant_creators?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.maxAllowedMsgTypes) {
      obj.max_allowed_msg_types = message.maxAllowedMsgTypes.map(e => e);
    } else {
      obj.max_allowed_msg_types = message.maxAllowedMsgTypes;
    }
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.max_sessions_per_granter = message.maxSessionsPerGranter !== BigInt(0) ? message.maxSessionsPerGranter?.toString() : undefined;
    obj.max_msg_types_per_session = message.maxMsgTypesPerSession !== BigInt(0) ? message.maxMsgTypesPerSession?.toString() : undefined;
    obj.max_expiration = message.maxExpiration ? Duration.toAmino(message.maxExpiration) : undefined;
    obj.max_spend_limit_amount = message.maxSpendLimitAmount === "" ? undefined : message.maxSpendLimitAmount;
    obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
    obj.min_recurring_period_seconds = message.minRecurringPeriodSeconds !== BigInt(0) ? message.minRecurringPeriodSeconds?.toString() : undefined;
    obj.max_recurring_duration_seconds = message.maxRecurringDurationSeconds !== BigInt(0) ? message.maxRecurringDurationSeconds?.toString() : undefined;
    obj.max_recurring_pulls_per_granter = message.maxRecurringPullsPerGranter === 0 ? undefined : message.maxRecurringPullsPerGranter;
    obj.min_allowance_period_seconds = message.minAllowancePeriodSeconds !== BigInt(0) ? message.minAllowancePeriodSeconds?.toString() : undefined;
    obj.max_allowances_per_granter = message.maxAllowancesPerGranter === 0 ? undefined : message.maxAllowancesPerGranter;
    obj.max_allowance_recipient_list = message.maxAllowanceRecipientList === 0 ? undefined : message.maxAllowanceRecipientList;
    obj.min_pull_amount = message.minPullAmount === "" ? undefined : message.minPullAmount;
    obj.min_schedule_delay_seconds = message.minScheduleDelaySeconds !== BigInt(0) ? message.minScheduleDelaySeconds?.toString() : undefined;
    obj.max_schedule_horizon_seconds = message.maxScheduleHorizonSeconds !== BigInt(0) ? message.maxScheduleHorizonSeconds?.toString() : undefined;
    obj.fire_to_expiry_buffer_seconds = message.fireToExpiryBufferSeconds !== BigInt(0) ? message.fireToExpiryBufferSeconds?.toString() : undefined;
    obj.max_pending_oneshots_per_granter = message.maxPendingOneshotsPerGranter === 0 ? undefined : message.maxPendingOneshotsPerGranter;
    obj.max_paused_oneshots_per_granter = message.maxPausedOneshotsPerGranter === 0 ? undefined : message.maxPausedOneshotsPerGranter;
    obj.paused_oneshot_ttl_seconds = message.pausedOneshotTtlSeconds !== BigInt(0) ? message.pausedOneshotTtlSeconds?.toString() : undefined;
    obj.min_oneshot_exec_gas = message.minOneshotExecGas !== BigInt(0) ? message.minOneshotExecGas?.toString() : undefined;
    obj.max_oneshot_exec_gas = message.maxOneshotExecGas !== BigInt(0) ? message.maxOneshotExecGas?.toString() : undefined;
    obj.oneshot_gas_price = message.oneshotGasPrice === "" ? undefined : message.oneshotGasPrice;
    obj.oneshot_creation_fee = message.oneshotCreationFee !== BigInt(0) ? message.oneshotCreationFee?.toString() : undefined;
    obj.min_oneshot_deposit = message.minOneshotDeposit !== BigInt(0) ? message.minOneshotDeposit?.toString() : undefined;
    obj.max_endblocker_dispatches_per_pass = message.maxEndblockerDispatchesPerPass === 0 ? undefined : message.maxEndblockerDispatchesPerPass;
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e);
    } else {
      obj.allowed_denoms = message.allowedDenoms;
    }
    obj.max_grant_lifetime_seconds = message.maxGrantLifetimeSeconds !== BigInt(0) ? message.maxGrantLifetimeSeconds?.toString() : undefined;
    if (message.authorizedGrantCreators) {
      obj.authorized_grant_creators = message.authorizedGrantCreators.map(e => e);
    } else {
      obj.authorized_grant_creators = message.authorizedGrantCreators;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/session/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseSessionOperationalParams(): SessionOperationalParams {
  return {
    allowedMsgTypes: [],
    maxSessionsPerGranter: BigInt(0),
    maxMsgTypesPerSession: BigInt(0),
    maxExpiration: Duration.fromPartial({}),
    maxSpendLimitAmount: "",
    maxExecCount: BigInt(0),
    minRecurringPeriodSeconds: BigInt(0),
    maxRecurringDurationSeconds: BigInt(0),
    maxRecurringPullsPerGranter: 0,
    minAllowancePeriodSeconds: BigInt(0),
    maxAllowancesPerGranter: 0,
    maxAllowanceRecipientList: 0,
    minPullAmount: "",
    minScheduleDelaySeconds: BigInt(0),
    maxScheduleHorizonSeconds: BigInt(0),
    fireToExpiryBufferSeconds: BigInt(0),
    maxPendingOneshotsPerGranter: 0,
    maxPausedOneshotsPerGranter: 0,
    pausedOneshotTtlSeconds: BigInt(0),
    minOneshotExecGas: BigInt(0),
    maxOneshotExecGas: BigInt(0),
    oneshotGasPrice: "",
    oneshotCreationFee: BigInt(0),
    minOneshotDeposit: BigInt(0),
    maxEndblockerDispatchesPerPass: 0,
    allowedDenoms: [],
    maxGrantLifetimeSeconds: BigInt(0)
  };
}
/**
 * SessionOperationalParams defines the operational parameters updateable by
 * the Commons Council Operations Committee without a full governance proposal.
 * max_allowed_msg_types (the ceiling) is excluded — only chain upgrades can expand it.
 * @name SessionOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionOperationalParams
 */
export const SessionOperationalParams = {
  typeUrl: "/sparkdream.session.v1.SessionOperationalParams",
  aminoType: "sparkdream/x/session/SessionOperationalParams",
  encode(message: SessionOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedMsgTypes) {
      writer.uint32(10).string(v!);
    }
    if (message.maxSessionsPerGranter !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxSessionsPerGranter);
    }
    if (message.maxMsgTypesPerSession !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxMsgTypesPerSession);
    }
    if (message.maxExpiration !== undefined) {
      Duration.encode(message.maxExpiration, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxSpendLimitAmount !== "") {
      writer.uint32(42).string(message.maxSpendLimitAmount);
    }
    if (message.maxExecCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxExecCount);
    }
    if (message.minRecurringPeriodSeconds !== BigInt(0)) {
      writer.uint32(80).int64(message.minRecurringPeriodSeconds);
    }
    if (message.maxRecurringDurationSeconds !== BigInt(0)) {
      writer.uint32(88).int64(message.maxRecurringDurationSeconds);
    }
    if (message.maxRecurringPullsPerGranter !== 0) {
      writer.uint32(96).uint32(message.maxRecurringPullsPerGranter);
    }
    if (message.minAllowancePeriodSeconds !== BigInt(0)) {
      writer.uint32(160).int64(message.minAllowancePeriodSeconds);
    }
    if (message.maxAllowancesPerGranter !== 0) {
      writer.uint32(168).uint32(message.maxAllowancesPerGranter);
    }
    if (message.maxAllowanceRecipientList !== 0) {
      writer.uint32(176).uint32(message.maxAllowanceRecipientList);
    }
    if (message.minPullAmount !== "") {
      writer.uint32(186).string(message.minPullAmount);
    }
    if (message.minScheduleDelaySeconds !== BigInt(0)) {
      writer.uint32(240).int64(message.minScheduleDelaySeconds);
    }
    if (message.maxScheduleHorizonSeconds !== BigInt(0)) {
      writer.uint32(248).int64(message.maxScheduleHorizonSeconds);
    }
    if (message.fireToExpiryBufferSeconds !== BigInt(0)) {
      writer.uint32(256).int64(message.fireToExpiryBufferSeconds);
    }
    if (message.maxPendingOneshotsPerGranter !== 0) {
      writer.uint32(264).uint32(message.maxPendingOneshotsPerGranter);
    }
    if (message.maxPausedOneshotsPerGranter !== 0) {
      writer.uint32(272).uint32(message.maxPausedOneshotsPerGranter);
    }
    if (message.pausedOneshotTtlSeconds !== BigInt(0)) {
      writer.uint32(280).int64(message.pausedOneshotTtlSeconds);
    }
    if (message.minOneshotExecGas !== BigInt(0)) {
      writer.uint32(288).uint64(message.minOneshotExecGas);
    }
    if (message.maxOneshotExecGas !== BigInt(0)) {
      writer.uint32(296).uint64(message.maxOneshotExecGas);
    }
    if (message.oneshotGasPrice !== "") {
      writer.uint32(306).string(message.oneshotGasPrice);
    }
    if (message.oneshotCreationFee !== BigInt(0)) {
      writer.uint32(312).uint64(message.oneshotCreationFee);
    }
    if (message.minOneshotDeposit !== BigInt(0)) {
      writer.uint32(320).uint64(message.minOneshotDeposit);
    }
    if (message.maxEndblockerDispatchesPerPass !== 0) {
      writer.uint32(328).uint32(message.maxEndblockerDispatchesPerPass);
    }
    for (const v of message.allowedDenoms) {
      writer.uint32(402).string(v!);
    }
    if (message.maxGrantLifetimeSeconds !== BigInt(0)) {
      writer.uint32(408).int64(message.maxGrantLifetimeSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SessionOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 2:
          message.maxSessionsPerGranter = reader.uint64();
          break;
        case 3:
          message.maxMsgTypesPerSession = reader.uint64();
          break;
        case 4:
          message.maxExpiration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxSpendLimitAmount = reader.string();
          break;
        case 6:
          message.maxExecCount = reader.uint64();
          break;
        case 10:
          message.minRecurringPeriodSeconds = reader.int64();
          break;
        case 11:
          message.maxRecurringDurationSeconds = reader.int64();
          break;
        case 12:
          message.maxRecurringPullsPerGranter = reader.uint32();
          break;
        case 20:
          message.minAllowancePeriodSeconds = reader.int64();
          break;
        case 21:
          message.maxAllowancesPerGranter = reader.uint32();
          break;
        case 22:
          message.maxAllowanceRecipientList = reader.uint32();
          break;
        case 23:
          message.minPullAmount = reader.string();
          break;
        case 30:
          message.minScheduleDelaySeconds = reader.int64();
          break;
        case 31:
          message.maxScheduleHorizonSeconds = reader.int64();
          break;
        case 32:
          message.fireToExpiryBufferSeconds = reader.int64();
          break;
        case 33:
          message.maxPendingOneshotsPerGranter = reader.uint32();
          break;
        case 34:
          message.maxPausedOneshotsPerGranter = reader.uint32();
          break;
        case 35:
          message.pausedOneshotTtlSeconds = reader.int64();
          break;
        case 36:
          message.minOneshotExecGas = reader.uint64();
          break;
        case 37:
          message.maxOneshotExecGas = reader.uint64();
          break;
        case 38:
          message.oneshotGasPrice = reader.string();
          break;
        case 39:
          message.oneshotCreationFee = reader.uint64();
          break;
        case 40:
          message.minOneshotDeposit = reader.uint64();
          break;
        case 41:
          message.maxEndblockerDispatchesPerPass = reader.uint32();
          break;
        case 50:
          message.allowedDenoms.push(reader.string());
          break;
        case 51:
          message.maxGrantLifetimeSeconds = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SessionOperationalParams>): SessionOperationalParams {
    const message = createBaseSessionOperationalParams();
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.maxSessionsPerGranter = object.maxSessionsPerGranter !== undefined && object.maxSessionsPerGranter !== null ? BigInt(object.maxSessionsPerGranter.toString()) : BigInt(0);
    message.maxMsgTypesPerSession = object.maxMsgTypesPerSession !== undefined && object.maxMsgTypesPerSession !== null ? BigInt(object.maxMsgTypesPerSession.toString()) : BigInt(0);
    message.maxExpiration = object.maxExpiration !== undefined && object.maxExpiration !== null ? Duration.fromPartial(object.maxExpiration) : undefined;
    message.maxSpendLimitAmount = object.maxSpendLimitAmount ?? "";
    message.maxExecCount = object.maxExecCount !== undefined && object.maxExecCount !== null ? BigInt(object.maxExecCount.toString()) : BigInt(0);
    message.minRecurringPeriodSeconds = object.minRecurringPeriodSeconds !== undefined && object.minRecurringPeriodSeconds !== null ? BigInt(object.minRecurringPeriodSeconds.toString()) : BigInt(0);
    message.maxRecurringDurationSeconds = object.maxRecurringDurationSeconds !== undefined && object.maxRecurringDurationSeconds !== null ? BigInt(object.maxRecurringDurationSeconds.toString()) : BigInt(0);
    message.maxRecurringPullsPerGranter = object.maxRecurringPullsPerGranter ?? 0;
    message.minAllowancePeriodSeconds = object.minAllowancePeriodSeconds !== undefined && object.minAllowancePeriodSeconds !== null ? BigInt(object.minAllowancePeriodSeconds.toString()) : BigInt(0);
    message.maxAllowancesPerGranter = object.maxAllowancesPerGranter ?? 0;
    message.maxAllowanceRecipientList = object.maxAllowanceRecipientList ?? 0;
    message.minPullAmount = object.minPullAmount ?? "";
    message.minScheduleDelaySeconds = object.minScheduleDelaySeconds !== undefined && object.minScheduleDelaySeconds !== null ? BigInt(object.minScheduleDelaySeconds.toString()) : BigInt(0);
    message.maxScheduleHorizonSeconds = object.maxScheduleHorizonSeconds !== undefined && object.maxScheduleHorizonSeconds !== null ? BigInt(object.maxScheduleHorizonSeconds.toString()) : BigInt(0);
    message.fireToExpiryBufferSeconds = object.fireToExpiryBufferSeconds !== undefined && object.fireToExpiryBufferSeconds !== null ? BigInt(object.fireToExpiryBufferSeconds.toString()) : BigInt(0);
    message.maxPendingOneshotsPerGranter = object.maxPendingOneshotsPerGranter ?? 0;
    message.maxPausedOneshotsPerGranter = object.maxPausedOneshotsPerGranter ?? 0;
    message.pausedOneshotTtlSeconds = object.pausedOneshotTtlSeconds !== undefined && object.pausedOneshotTtlSeconds !== null ? BigInt(object.pausedOneshotTtlSeconds.toString()) : BigInt(0);
    message.minOneshotExecGas = object.minOneshotExecGas !== undefined && object.minOneshotExecGas !== null ? BigInt(object.minOneshotExecGas.toString()) : BigInt(0);
    message.maxOneshotExecGas = object.maxOneshotExecGas !== undefined && object.maxOneshotExecGas !== null ? BigInt(object.maxOneshotExecGas.toString()) : BigInt(0);
    message.oneshotGasPrice = object.oneshotGasPrice ?? "";
    message.oneshotCreationFee = object.oneshotCreationFee !== undefined && object.oneshotCreationFee !== null ? BigInt(object.oneshotCreationFee.toString()) : BigInt(0);
    message.minOneshotDeposit = object.minOneshotDeposit !== undefined && object.minOneshotDeposit !== null ? BigInt(object.minOneshotDeposit.toString()) : BigInt(0);
    message.maxEndblockerDispatchesPerPass = object.maxEndblockerDispatchesPerPass ?? 0;
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    message.maxGrantLifetimeSeconds = object.maxGrantLifetimeSeconds !== undefined && object.maxGrantLifetimeSeconds !== null ? BigInt(object.maxGrantLifetimeSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SessionOperationalParamsAmino): SessionOperationalParams {
    const message = createBaseSessionOperationalParams();
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.max_sessions_per_granter !== undefined && object.max_sessions_per_granter !== null) {
      message.maxSessionsPerGranter = BigInt(object.max_sessions_per_granter);
    }
    if (object.max_msg_types_per_session !== undefined && object.max_msg_types_per_session !== null) {
      message.maxMsgTypesPerSession = BigInt(object.max_msg_types_per_session);
    }
    if (object.max_expiration !== undefined && object.max_expiration !== null) {
      message.maxExpiration = Duration.fromAmino(object.max_expiration);
    }
    if (object.max_spend_limit_amount !== undefined && object.max_spend_limit_amount !== null) {
      message.maxSpendLimitAmount = object.max_spend_limit_amount;
    }
    if (object.max_exec_count !== undefined && object.max_exec_count !== null) {
      message.maxExecCount = BigInt(object.max_exec_count);
    }
    if (object.min_recurring_period_seconds !== undefined && object.min_recurring_period_seconds !== null) {
      message.minRecurringPeriodSeconds = BigInt(object.min_recurring_period_seconds);
    }
    if (object.max_recurring_duration_seconds !== undefined && object.max_recurring_duration_seconds !== null) {
      message.maxRecurringDurationSeconds = BigInt(object.max_recurring_duration_seconds);
    }
    if (object.max_recurring_pulls_per_granter !== undefined && object.max_recurring_pulls_per_granter !== null) {
      message.maxRecurringPullsPerGranter = object.max_recurring_pulls_per_granter;
    }
    if (object.min_allowance_period_seconds !== undefined && object.min_allowance_period_seconds !== null) {
      message.minAllowancePeriodSeconds = BigInt(object.min_allowance_period_seconds);
    }
    if (object.max_allowances_per_granter !== undefined && object.max_allowances_per_granter !== null) {
      message.maxAllowancesPerGranter = object.max_allowances_per_granter;
    }
    if (object.max_allowance_recipient_list !== undefined && object.max_allowance_recipient_list !== null) {
      message.maxAllowanceRecipientList = object.max_allowance_recipient_list;
    }
    if (object.min_pull_amount !== undefined && object.min_pull_amount !== null) {
      message.minPullAmount = object.min_pull_amount;
    }
    if (object.min_schedule_delay_seconds !== undefined && object.min_schedule_delay_seconds !== null) {
      message.minScheduleDelaySeconds = BigInt(object.min_schedule_delay_seconds);
    }
    if (object.max_schedule_horizon_seconds !== undefined && object.max_schedule_horizon_seconds !== null) {
      message.maxScheduleHorizonSeconds = BigInt(object.max_schedule_horizon_seconds);
    }
    if (object.fire_to_expiry_buffer_seconds !== undefined && object.fire_to_expiry_buffer_seconds !== null) {
      message.fireToExpiryBufferSeconds = BigInt(object.fire_to_expiry_buffer_seconds);
    }
    if (object.max_pending_oneshots_per_granter !== undefined && object.max_pending_oneshots_per_granter !== null) {
      message.maxPendingOneshotsPerGranter = object.max_pending_oneshots_per_granter;
    }
    if (object.max_paused_oneshots_per_granter !== undefined && object.max_paused_oneshots_per_granter !== null) {
      message.maxPausedOneshotsPerGranter = object.max_paused_oneshots_per_granter;
    }
    if (object.paused_oneshot_ttl_seconds !== undefined && object.paused_oneshot_ttl_seconds !== null) {
      message.pausedOneshotTtlSeconds = BigInt(object.paused_oneshot_ttl_seconds);
    }
    if (object.min_oneshot_exec_gas !== undefined && object.min_oneshot_exec_gas !== null) {
      message.minOneshotExecGas = BigInt(object.min_oneshot_exec_gas);
    }
    if (object.max_oneshot_exec_gas !== undefined && object.max_oneshot_exec_gas !== null) {
      message.maxOneshotExecGas = BigInt(object.max_oneshot_exec_gas);
    }
    if (object.oneshot_gas_price !== undefined && object.oneshot_gas_price !== null) {
      message.oneshotGasPrice = object.oneshot_gas_price;
    }
    if (object.oneshot_creation_fee !== undefined && object.oneshot_creation_fee !== null) {
      message.oneshotCreationFee = BigInt(object.oneshot_creation_fee);
    }
    if (object.min_oneshot_deposit !== undefined && object.min_oneshot_deposit !== null) {
      message.minOneshotDeposit = BigInt(object.min_oneshot_deposit);
    }
    if (object.max_endblocker_dispatches_per_pass !== undefined && object.max_endblocker_dispatches_per_pass !== null) {
      message.maxEndblockerDispatchesPerPass = object.max_endblocker_dispatches_per_pass;
    }
    message.allowedDenoms = object.allowed_denoms?.map(e => e) || [];
    if (object.max_grant_lifetime_seconds !== undefined && object.max_grant_lifetime_seconds !== null) {
      message.maxGrantLifetimeSeconds = BigInt(object.max_grant_lifetime_seconds);
    }
    return message;
  },
  toAmino(message: SessionOperationalParams): SessionOperationalParamsAmino {
    const obj: any = {};
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.max_sessions_per_granter = message.maxSessionsPerGranter !== BigInt(0) ? message.maxSessionsPerGranter?.toString() : undefined;
    obj.max_msg_types_per_session = message.maxMsgTypesPerSession !== BigInt(0) ? message.maxMsgTypesPerSession?.toString() : undefined;
    obj.max_expiration = message.maxExpiration ? Duration.toAmino(message.maxExpiration) : undefined;
    obj.max_spend_limit_amount = message.maxSpendLimitAmount === "" ? undefined : message.maxSpendLimitAmount;
    obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
    obj.min_recurring_period_seconds = message.minRecurringPeriodSeconds !== BigInt(0) ? message.minRecurringPeriodSeconds?.toString() : undefined;
    obj.max_recurring_duration_seconds = message.maxRecurringDurationSeconds !== BigInt(0) ? message.maxRecurringDurationSeconds?.toString() : undefined;
    obj.max_recurring_pulls_per_granter = message.maxRecurringPullsPerGranter === 0 ? undefined : message.maxRecurringPullsPerGranter;
    obj.min_allowance_period_seconds = message.minAllowancePeriodSeconds !== BigInt(0) ? message.minAllowancePeriodSeconds?.toString() : undefined;
    obj.max_allowances_per_granter = message.maxAllowancesPerGranter === 0 ? undefined : message.maxAllowancesPerGranter;
    obj.max_allowance_recipient_list = message.maxAllowanceRecipientList === 0 ? undefined : message.maxAllowanceRecipientList;
    obj.min_pull_amount = message.minPullAmount === "" ? undefined : message.minPullAmount;
    obj.min_schedule_delay_seconds = message.minScheduleDelaySeconds !== BigInt(0) ? message.minScheduleDelaySeconds?.toString() : undefined;
    obj.max_schedule_horizon_seconds = message.maxScheduleHorizonSeconds !== BigInt(0) ? message.maxScheduleHorizonSeconds?.toString() : undefined;
    obj.fire_to_expiry_buffer_seconds = message.fireToExpiryBufferSeconds !== BigInt(0) ? message.fireToExpiryBufferSeconds?.toString() : undefined;
    obj.max_pending_oneshots_per_granter = message.maxPendingOneshotsPerGranter === 0 ? undefined : message.maxPendingOneshotsPerGranter;
    obj.max_paused_oneshots_per_granter = message.maxPausedOneshotsPerGranter === 0 ? undefined : message.maxPausedOneshotsPerGranter;
    obj.paused_oneshot_ttl_seconds = message.pausedOneshotTtlSeconds !== BigInt(0) ? message.pausedOneshotTtlSeconds?.toString() : undefined;
    obj.min_oneshot_exec_gas = message.minOneshotExecGas !== BigInt(0) ? message.minOneshotExecGas?.toString() : undefined;
    obj.max_oneshot_exec_gas = message.maxOneshotExecGas !== BigInt(0) ? message.maxOneshotExecGas?.toString() : undefined;
    obj.oneshot_gas_price = message.oneshotGasPrice === "" ? undefined : message.oneshotGasPrice;
    obj.oneshot_creation_fee = message.oneshotCreationFee !== BigInt(0) ? message.oneshotCreationFee?.toString() : undefined;
    obj.min_oneshot_deposit = message.minOneshotDeposit !== BigInt(0) ? message.minOneshotDeposit?.toString() : undefined;
    obj.max_endblocker_dispatches_per_pass = message.maxEndblockerDispatchesPerPass === 0 ? undefined : message.maxEndblockerDispatchesPerPass;
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e);
    } else {
      obj.allowed_denoms = message.allowedDenoms;
    }
    obj.max_grant_lifetime_seconds = message.maxGrantLifetimeSeconds !== BigInt(0) ? message.maxGrantLifetimeSeconds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SessionOperationalParamsAminoMsg): SessionOperationalParams {
    return SessionOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: SessionOperationalParams): SessionOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/session/SessionOperationalParams",
      value: SessionOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: SessionOperationalParamsProtoMsg): SessionOperationalParams {
    return SessionOperationalParams.decode(message.value);
  },
  toProto(message: SessionOperationalParams): Uint8Array {
    return SessionOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: SessionOperationalParams): SessionOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.SessionOperationalParams",
      value: SessionOperationalParams.encode(message).finish()
    };
  }
};