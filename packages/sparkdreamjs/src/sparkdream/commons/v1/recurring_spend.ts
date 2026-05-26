//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** RecurringSpendStatus enumerates the lifecycle of a schedule. */
export enum RecurringSpendStatus {
  /** RECURRING_SPEND_STATUS_UNSPECIFIED - RECURRING_SPEND_STATUS_UNSPECIFIED is the zero value; reject on read. */
  RECURRING_SPEND_STATUS_UNSPECIFIED = 0,
  /**
   * RECURRING_SPEND_STATUS_ACTIVE - RECURRING_SPEND_STATUS_ACTIVE means the schedule is eligible to be
   * claimed when the window opens.
   */
  RECURRING_SPEND_STATUS_ACTIVE = 1,
  /**
   * RECURRING_SPEND_STATUS_RECIPIENT_DECLINED - RECURRING_SPEND_STATUS_RECIPIENT_DECLINED means the recipient
   * explicitly opted out via MsgDeclineRecurringSpend.
   */
  RECURRING_SPEND_STATUS_RECIPIENT_DECLINED = 2,
  /**
   * RECURRING_SPEND_STATUS_CANCELED - RECURRING_SPEND_STATUS_CANCELED means the council canceled the
   * schedule via MsgCancelRecurringSpend.
   */
  RECURRING_SPEND_STATUS_CANCELED = 3,
  /**
   * RECURRING_SPEND_STATUS_COMPLETED - RECURRING_SPEND_STATUS_COMPLETED means the schedule has exhausted its
   * window — last_claim_advance + period_seconds > end_time, or the final
   * claim has been made.
   */
  RECURRING_SPEND_STATUS_COMPLETED = 4,
  UNRECOGNIZED = -1,
}
export const RecurringSpendStatusAmino = RecurringSpendStatus;
export function recurringSpendStatusFromJSON(object: any): RecurringSpendStatus {
  switch (object) {
    case 0:
    case "RECURRING_SPEND_STATUS_UNSPECIFIED":
      return RecurringSpendStatus.RECURRING_SPEND_STATUS_UNSPECIFIED;
    case 1:
    case "RECURRING_SPEND_STATUS_ACTIVE":
      return RecurringSpendStatus.RECURRING_SPEND_STATUS_ACTIVE;
    case 2:
    case "RECURRING_SPEND_STATUS_RECIPIENT_DECLINED":
      return RecurringSpendStatus.RECURRING_SPEND_STATUS_RECIPIENT_DECLINED;
    case 3:
    case "RECURRING_SPEND_STATUS_CANCELED":
      return RecurringSpendStatus.RECURRING_SPEND_STATUS_CANCELED;
    case 4:
    case "RECURRING_SPEND_STATUS_COMPLETED":
      return RecurringSpendStatus.RECURRING_SPEND_STATUS_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecurringSpendStatus.UNRECOGNIZED;
  }
}
export function recurringSpendStatusToJSON(object: RecurringSpendStatus): string {
  switch (object) {
    case RecurringSpendStatus.RECURRING_SPEND_STATUS_UNSPECIFIED:
      return "RECURRING_SPEND_STATUS_UNSPECIFIED";
    case RecurringSpendStatus.RECURRING_SPEND_STATUS_ACTIVE:
      return "RECURRING_SPEND_STATUS_ACTIVE";
    case RecurringSpendStatus.RECURRING_SPEND_STATUS_RECIPIENT_DECLINED:
      return "RECURRING_SPEND_STATUS_RECIPIENT_DECLINED";
    case RecurringSpendStatus.RECURRING_SPEND_STATUS_CANCELED:
      return "RECURRING_SPEND_STATUS_CANCELED";
    case RecurringSpendStatus.RECURRING_SPEND_STATUS_COMPLETED:
      return "RECURRING_SPEND_STATUS_COMPLETED";
    case RecurringSpendStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * RecurringSpend represents a pre-approved schedule by which a council
 * (identified by its policy address) commits to disbursing
 * `amount_per_period` to `recipient` once per `period_seconds`, between
 * `start_time` and `end_time`.
 * 
 * Schedules are created via MsgScheduleRecurringSpend (wrapped in a council
 * proposal) and cancelled via MsgCancelRecurringSpend (also via proposal)
 * or MsgDeclineRecurringSpend (by the recipient).
 * 
 * Each disbursement is *pull-based*: the recipient submits
 * MsgClaimRecurringSpend once per elapsed period. Claims are gated by the
 * same activation/expiration/rate-limit checks as MsgSpendFromCommons —
 * meaning if the council's term expires the schedule auto-pauses, and
 * every claim still counts against `max_spend_per_epoch`.
 * @name RecurringSpend
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.RecurringSpend
 */
export interface RecurringSpend {
  /**
   * id is the auto-incrementing schedule identifier.
   */
  id: bigint;
  /**
   * authority is the council policy address that owns this schedule.
   */
  authority: string;
  /**
   * recipient is the address to be paid each period.
   */
  recipient: string;
  /**
   * amount_per_period is the disbursement each claim transfers.
   */
  amountPerPeriod: Coin[];
  /**
   * period_seconds is the minimum interval between two successive claims.
   * Must be >= Params.min_recurring_period_seconds.
   */
  periodSeconds: bigint;
  /**
   * start_time is the unix timestamp at which the first claim becomes
   * valid.
   */
  startTime: bigint;
  /**
   * end_time is the unix timestamp after which no further claims are
   * allowed. Must satisfy end_time <= start_time +
   * Params.max_recurring_duration_seconds.
   */
  endTime: bigint;
  /**
   * last_claim_advance tracks the schedule's logical clock. Each claim
   * advances it by exactly `period_seconds` (anchored to the schedule, not
   * to block time), so a recipient who skips a period can catch up by
   * submitting multiple claim transactions but each one is still
   * independently rate-limited.
   */
  lastClaimAdvance: bigint;
  /**
   * claims_made is the number of times this schedule has been claimed.
   */
  claimsMade: bigint;
  /**
   * status is the current lifecycle state.
   */
  status: RecurringSpendStatus;
  /**
   * created_via_proposal_id is the commons proposal that scheduled this
   * recurring spend. 0 if created outside the proposal flow (governance
   * bypass).
   */
  createdViaProposalId: bigint;
  /**
   * note is a short human-readable purpose, capped in length by the
   * handler.
   */
  note: string;
}
export interface RecurringSpendProtoMsg {
  typeUrl: "/sparkdream.commons.v1.RecurringSpend";
  value: Uint8Array;
}
/**
 * RecurringSpend represents a pre-approved schedule by which a council
 * (identified by its policy address) commits to disbursing
 * `amount_per_period` to `recipient` once per `period_seconds`, between
 * `start_time` and `end_time`.
 * 
 * Schedules are created via MsgScheduleRecurringSpend (wrapped in a council
 * proposal) and cancelled via MsgCancelRecurringSpend (also via proposal)
 * or MsgDeclineRecurringSpend (by the recipient).
 * 
 * Each disbursement is *pull-based*: the recipient submits
 * MsgClaimRecurringSpend once per elapsed period. Claims are gated by the
 * same activation/expiration/rate-limit checks as MsgSpendFromCommons —
 * meaning if the council's term expires the schedule auto-pauses, and
 * every claim still counts against `max_spend_per_epoch`.
 * @name RecurringSpendAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.RecurringSpend
 */
export interface RecurringSpendAmino {
  /**
   * id is the auto-incrementing schedule identifier.
   */
  id?: string;
  /**
   * authority is the council policy address that owns this schedule.
   */
  authority?: string;
  /**
   * recipient is the address to be paid each period.
   */
  recipient?: string;
  /**
   * amount_per_period is the disbursement each claim transfers.
   */
  amount_per_period?: CoinAmino[];
  /**
   * period_seconds is the minimum interval between two successive claims.
   * Must be >= Params.min_recurring_period_seconds.
   */
  period_seconds?: string;
  /**
   * start_time is the unix timestamp at which the first claim becomes
   * valid.
   */
  start_time?: string;
  /**
   * end_time is the unix timestamp after which no further claims are
   * allowed. Must satisfy end_time <= start_time +
   * Params.max_recurring_duration_seconds.
   */
  end_time?: string;
  /**
   * last_claim_advance tracks the schedule's logical clock. Each claim
   * advances it by exactly `period_seconds` (anchored to the schedule, not
   * to block time), so a recipient who skips a period can catch up by
   * submitting multiple claim transactions but each one is still
   * independently rate-limited.
   */
  last_claim_advance?: string;
  /**
   * claims_made is the number of times this schedule has been claimed.
   */
  claims_made?: string;
  /**
   * status is the current lifecycle state.
   */
  status?: RecurringSpendStatus;
  /**
   * created_via_proposal_id is the commons proposal that scheduled this
   * recurring spend. 0 if created outside the proposal flow (governance
   * bypass).
   */
  created_via_proposal_id?: string;
  /**
   * note is a short human-readable purpose, capped in length by the
   * handler.
   */
  note?: string;
}
export interface RecurringSpendAminoMsg {
  type: "sparkdream/x/commons/RecurringSpend";
  value: RecurringSpendAmino;
}
function createBaseRecurringSpend(): RecurringSpend {
  return {
    id: BigInt(0),
    authority: "",
    recipient: "",
    amountPerPeriod: [],
    periodSeconds: BigInt(0),
    startTime: BigInt(0),
    endTime: BigInt(0),
    lastClaimAdvance: BigInt(0),
    claimsMade: BigInt(0),
    status: 0,
    createdViaProposalId: BigInt(0),
    note: ""
  };
}
/**
 * RecurringSpend represents a pre-approved schedule by which a council
 * (identified by its policy address) commits to disbursing
 * `amount_per_period` to `recipient` once per `period_seconds`, between
 * `start_time` and `end_time`.
 * 
 * Schedules are created via MsgScheduleRecurringSpend (wrapped in a council
 * proposal) and cancelled via MsgCancelRecurringSpend (also via proposal)
 * or MsgDeclineRecurringSpend (by the recipient).
 * 
 * Each disbursement is *pull-based*: the recipient submits
 * MsgClaimRecurringSpend once per elapsed period. Claims are gated by the
 * same activation/expiration/rate-limit checks as MsgSpendFromCommons —
 * meaning if the council's term expires the schedule auto-pauses, and
 * every claim still counts against `max_spend_per_epoch`.
 * @name RecurringSpend
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.RecurringSpend
 */
export const RecurringSpend = {
  typeUrl: "/sparkdream.commons.v1.RecurringSpend",
  aminoType: "sparkdream/x/commons/RecurringSpend",
  encode(message: RecurringSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amountPerPeriod) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodSeconds !== BigInt(0)) {
      writer.uint32(40).int64(message.periodSeconds);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(48).int64(message.startTime);
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(56).int64(message.endTime);
    }
    if (message.lastClaimAdvance !== BigInt(0)) {
      writer.uint32(64).int64(message.lastClaimAdvance);
    }
    if (message.claimsMade !== BigInt(0)) {
      writer.uint32(72).uint64(message.claimsMade);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.createdViaProposalId !== BigInt(0)) {
      writer.uint32(88).uint64(message.createdViaProposalId);
    }
    if (message.note !== "") {
      writer.uint32(98).string(message.note);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecurringSpend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecurringSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amountPerPeriod.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodSeconds = reader.int64();
          break;
        case 6:
          message.startTime = reader.int64();
          break;
        case 7:
          message.endTime = reader.int64();
          break;
        case 8:
          message.lastClaimAdvance = reader.int64();
          break;
        case 9:
          message.claimsMade = reader.uint64();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.createdViaProposalId = reader.uint64();
          break;
        case 12:
          message.note = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecurringSpend>): RecurringSpend {
    const message = createBaseRecurringSpend();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amountPerPeriod = object.amountPerPeriod?.map(e => Coin.fromPartial(e)) || [];
    message.periodSeconds = object.periodSeconds !== undefined && object.periodSeconds !== null ? BigInt(object.periodSeconds.toString()) : BigInt(0);
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.lastClaimAdvance = object.lastClaimAdvance !== undefined && object.lastClaimAdvance !== null ? BigInt(object.lastClaimAdvance.toString()) : BigInt(0);
    message.claimsMade = object.claimsMade !== undefined && object.claimsMade !== null ? BigInt(object.claimsMade.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.createdViaProposalId = object.createdViaProposalId !== undefined && object.createdViaProposalId !== null ? BigInt(object.createdViaProposalId.toString()) : BigInt(0);
    message.note = object.note ?? "";
    return message;
  },
  fromAmino(object: RecurringSpendAmino): RecurringSpend {
    const message = createBaseRecurringSpend();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amountPerPeriod = object.amount_per_period?.map(e => Coin.fromAmino(e)) || [];
    if (object.period_seconds !== undefined && object.period_seconds !== null) {
      message.periodSeconds = BigInt(object.period_seconds);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    if (object.last_claim_advance !== undefined && object.last_claim_advance !== null) {
      message.lastClaimAdvance = BigInt(object.last_claim_advance);
    }
    if (object.claims_made !== undefined && object.claims_made !== null) {
      message.claimsMade = BigInt(object.claims_made);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_via_proposal_id !== undefined && object.created_via_proposal_id !== null) {
      message.createdViaProposalId = BigInt(object.created_via_proposal_id);
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    }
    return message;
  },
  toAmino(message: RecurringSpend): RecurringSpendAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.amountPerPeriod) {
      obj.amount_per_period = message.amountPerPeriod.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount_per_period = message.amountPerPeriod;
    }
    obj.period_seconds = message.periodSeconds !== BigInt(0) ? message.periodSeconds?.toString() : undefined;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : undefined;
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : undefined;
    obj.last_claim_advance = message.lastClaimAdvance !== BigInt(0) ? message.lastClaimAdvance?.toString() : undefined;
    obj.claims_made = message.claimsMade !== BigInt(0) ? message.claimsMade?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_via_proposal_id = message.createdViaProposalId !== BigInt(0) ? message.createdViaProposalId?.toString() : undefined;
    obj.note = message.note === "" ? undefined : message.note;
    return obj;
  },
  fromAminoMsg(object: RecurringSpendAminoMsg): RecurringSpend {
    return RecurringSpend.fromAmino(object.value);
  },
  toAminoMsg(message: RecurringSpend): RecurringSpendAminoMsg {
    return {
      type: "sparkdream/x/commons/RecurringSpend",
      value: RecurringSpend.toAmino(message)
    };
  },
  fromProtoMsg(message: RecurringSpendProtoMsg): RecurringSpend {
    return RecurringSpend.decode(message.value);
  },
  toProto(message: RecurringSpend): Uint8Array {
    return RecurringSpend.encode(message).finish();
  },
  toProtoMsg(message: RecurringSpend): RecurringSpendProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.RecurringSpend",
      value: RecurringSpend.encode(message).finish()
    };
  }
};