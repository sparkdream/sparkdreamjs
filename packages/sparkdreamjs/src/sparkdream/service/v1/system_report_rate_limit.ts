//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * SystemReportRateLimit tracks recent OpenSystemReport call heights for
 * a given allowlisted caller module (e.g. "federation"), implementing
 * the sliding-window per-caller cap from Phase 0 of the federation→
 * service migration plan.
 * 
 * The keeper admits a new system-report filing iff fewer than
 * `max_system_reports_per_caller_per_window` entries in
 * `recent_filing_heights` fall within
 * `[current_height - rate_limit_window_blocks, current_height]`.
 * 
 * Ring-buffer semantics: when at capacity, the oldest entry is
 * overwritten on each new filing. Idempotent re-calls (same dedupe_key
 * resolving to an existing report) do NOT update the ring buffer.
 * @name SystemReportRateLimit
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.SystemReportRateLimit
 */
export interface SystemReportRateLimit {
  /**
   * caller_module is the allowlisted caller name whose rate is being
   * tracked (e.g. "federation"). Resolved by forward-derive from the
   * address passed to OpenSystemReport.
   */
  callerModule: string;
  /**
   * recent_filing_heights is the ring buffer of recent filing heights
   * in insertion order. Length capped at
   * max_system_reports_per_caller_per_window + 1.
   */
  recentFilingHeights: bigint[];
}
export interface SystemReportRateLimitProtoMsg {
  typeUrl: "/sparkdream.service.v1.SystemReportRateLimit";
  value: Uint8Array;
}
/**
 * SystemReportRateLimit tracks recent OpenSystemReport call heights for
 * a given allowlisted caller module (e.g. "federation"), implementing
 * the sliding-window per-caller cap from Phase 0 of the federation→
 * service migration plan.
 * 
 * The keeper admits a new system-report filing iff fewer than
 * `max_system_reports_per_caller_per_window` entries in
 * `recent_filing_heights` fall within
 * `[current_height - rate_limit_window_blocks, current_height]`.
 * 
 * Ring-buffer semantics: when at capacity, the oldest entry is
 * overwritten on each new filing. Idempotent re-calls (same dedupe_key
 * resolving to an existing report) do NOT update the ring buffer.
 * @name SystemReportRateLimitAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.SystemReportRateLimit
 */
export interface SystemReportRateLimitAmino {
  /**
   * caller_module is the allowlisted caller name whose rate is being
   * tracked (e.g. "federation"). Resolved by forward-derive from the
   * address passed to OpenSystemReport.
   */
  caller_module?: string;
  /**
   * recent_filing_heights is the ring buffer of recent filing heights
   * in insertion order. Length capped at
   * max_system_reports_per_caller_per_window + 1.
   */
  recent_filing_heights?: string[];
}
export interface SystemReportRateLimitAminoMsg {
  type: "sparkdream/x/service/SystemReportRateLimit";
  value: SystemReportRateLimitAmino;
}
function createBaseSystemReportRateLimit(): SystemReportRateLimit {
  return {
    callerModule: "",
    recentFilingHeights: []
  };
}
/**
 * SystemReportRateLimit tracks recent OpenSystemReport call heights for
 * a given allowlisted caller module (e.g. "federation"), implementing
 * the sliding-window per-caller cap from Phase 0 of the federation→
 * service migration plan.
 * 
 * The keeper admits a new system-report filing iff fewer than
 * `max_system_reports_per_caller_per_window` entries in
 * `recent_filing_heights` fall within
 * `[current_height - rate_limit_window_blocks, current_height]`.
 * 
 * Ring-buffer semantics: when at capacity, the oldest entry is
 * overwritten on each new filing. Idempotent re-calls (same dedupe_key
 * resolving to an existing report) do NOT update the ring buffer.
 * @name SystemReportRateLimit
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.SystemReportRateLimit
 */
export const SystemReportRateLimit = {
  typeUrl: "/sparkdream.service.v1.SystemReportRateLimit",
  aminoType: "sparkdream/x/service/SystemReportRateLimit",
  encode(message: SystemReportRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callerModule !== "") {
      writer.uint32(10).string(message.callerModule);
    }
    writer.uint32(18).fork();
    for (const v of message.recentFilingHeights) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemReportRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemReportRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callerModule = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.recentFilingHeights.push(reader.int64());
            }
          } else {
            message.recentFilingHeights.push(reader.int64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SystemReportRateLimit>): SystemReportRateLimit {
    const message = createBaseSystemReportRateLimit();
    message.callerModule = object.callerModule ?? "";
    message.recentFilingHeights = object.recentFilingHeights?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: SystemReportRateLimitAmino): SystemReportRateLimit {
    const message = createBaseSystemReportRateLimit();
    if (object.caller_module !== undefined && object.caller_module !== null) {
      message.callerModule = object.caller_module;
    }
    message.recentFilingHeights = object.recent_filing_heights?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: SystemReportRateLimit): SystemReportRateLimitAmino {
    const obj: any = {};
    obj.caller_module = message.callerModule === "" ? undefined : message.callerModule;
    if (message.recentFilingHeights) {
      obj.recent_filing_heights = message.recentFilingHeights.map(e => e.toString());
    } else {
      obj.recent_filing_heights = message.recentFilingHeights;
    }
    return obj;
  },
  fromAminoMsg(object: SystemReportRateLimitAminoMsg): SystemReportRateLimit {
    return SystemReportRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: SystemReportRateLimit): SystemReportRateLimitAminoMsg {
    return {
      type: "sparkdream/x/service/SystemReportRateLimit",
      value: SystemReportRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: SystemReportRateLimitProtoMsg): SystemReportRateLimit {
    return SystemReportRateLimit.decode(message.value);
  },
  toProto(message: SystemReportRateLimit): Uint8Array {
    return SystemReportRateLimit.encode(message).finish();
  },
  toProtoMsg(message: SystemReportRateLimit): SystemReportRateLimitProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.SystemReportRateLimit",
      value: SystemReportRateLimit.encode(message).finish()
    };
  }
};