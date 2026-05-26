//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ReporterRateLimit tracks recent filing heights for a given
 * (reporter, operator_address, service_type) tuple, implementing the
 * sliding-window per-reporter cap from §3.4.6.
 * 
 * The keeper admits a new filing iff fewer than
 * `max_reports_per_reporter_per_operator_per_window` entries in
 * `recent_filing_heights` fall within
 * `[current_height - reporter_rate_limit_window_blocks, current_height]`.
 * 
 * Ring-buffer semantics: when at capacity, the oldest entry is
 * overwritten on each new filing.
 * @name ReporterRateLimit
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ReporterRateLimit
 */
export interface ReporterRateLimit {
  /**
   * reporter is the bech32 address whose rate is being tracked.
   */
  reporter: string;
  /**
   * operator_address is the target operator.
   */
  operatorAddress: string;
  /**
   * service_type is the target operator record.
   */
  serviceType: string;
  /**
   * recent_filing_heights is the ring buffer of recent filing heights
   * (most-recent-first or in insertion order; the keeper documents
   * which). Length capped at max_reports + 1.
   */
  recentFilingHeights: bigint[];
}
export interface ReporterRateLimitProtoMsg {
  typeUrl: "/sparkdream.service.v1.ReporterRateLimit";
  value: Uint8Array;
}
/**
 * ReporterRateLimit tracks recent filing heights for a given
 * (reporter, operator_address, service_type) tuple, implementing the
 * sliding-window per-reporter cap from §3.4.6.
 * 
 * The keeper admits a new filing iff fewer than
 * `max_reports_per_reporter_per_operator_per_window` entries in
 * `recent_filing_heights` fall within
 * `[current_height - reporter_rate_limit_window_blocks, current_height]`.
 * 
 * Ring-buffer semantics: when at capacity, the oldest entry is
 * overwritten on each new filing.
 * @name ReporterRateLimitAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ReporterRateLimit
 */
export interface ReporterRateLimitAmino {
  /**
   * reporter is the bech32 address whose rate is being tracked.
   */
  reporter?: string;
  /**
   * operator_address is the target operator.
   */
  operator_address?: string;
  /**
   * service_type is the target operator record.
   */
  service_type?: string;
  /**
   * recent_filing_heights is the ring buffer of recent filing heights
   * (most-recent-first or in insertion order; the keeper documents
   * which). Length capped at max_reports + 1.
   */
  recent_filing_heights?: string[];
}
export interface ReporterRateLimitAminoMsg {
  type: "sparkdream/x/service/ReporterRateLimit";
  value: ReporterRateLimitAmino;
}
function createBaseReporterRateLimit(): ReporterRateLimit {
  return {
    reporter: "",
    operatorAddress: "",
    serviceType: "",
    recentFilingHeights: []
  };
}
/**
 * ReporterRateLimit tracks recent filing heights for a given
 * (reporter, operator_address, service_type) tuple, implementing the
 * sliding-window per-reporter cap from §3.4.6.
 * 
 * The keeper admits a new filing iff fewer than
 * `max_reports_per_reporter_per_operator_per_window` entries in
 * `recent_filing_heights` fall within
 * `[current_height - reporter_rate_limit_window_blocks, current_height]`.
 * 
 * Ring-buffer semantics: when at capacity, the oldest entry is
 * overwritten on each new filing.
 * @name ReporterRateLimit
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ReporterRateLimit
 */
export const ReporterRateLimit = {
  typeUrl: "/sparkdream.service.v1.ReporterRateLimit",
  aminoType: "sparkdream/x/service/ReporterRateLimit",
  encode(message: ReporterRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporter !== "") {
      writer.uint32(10).string(message.reporter);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    writer.uint32(34).fork();
    for (const v of message.recentFilingHeights) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReporterRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReporterRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporter = reader.string();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
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
  fromPartial(object: DeepPartial<ReporterRateLimit>): ReporterRateLimit {
    const message = createBaseReporterRateLimit();
    message.reporter = object.reporter ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.recentFilingHeights = object.recentFilingHeights?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ReporterRateLimitAmino): ReporterRateLimit {
    const message = createBaseReporterRateLimit();
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    message.recentFilingHeights = object.recent_filing_heights?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: ReporterRateLimit): ReporterRateLimitAmino {
    const obj: any = {};
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    if (message.recentFilingHeights) {
      obj.recent_filing_heights = message.recentFilingHeights.map(e => e.toString());
    } else {
      obj.recent_filing_heights = message.recentFilingHeights;
    }
    return obj;
  },
  fromAminoMsg(object: ReporterRateLimitAminoMsg): ReporterRateLimit {
    return ReporterRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: ReporterRateLimit): ReporterRateLimitAminoMsg {
    return {
      type: "sparkdream/x/service/ReporterRateLimit",
      value: ReporterRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: ReporterRateLimitProtoMsg): ReporterRateLimit {
    return ReporterRateLimit.decode(message.value);
  },
  toProto(message: ReporterRateLimit): Uint8Array {
    return ReporterRateLimit.encode(message).finish();
  },
  toProtoMsg(message: ReporterRateLimit): ReporterRateLimitProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.ReporterRateLimit",
      value: ReporterRateLimit.encode(message).finish()
    };
  }
};