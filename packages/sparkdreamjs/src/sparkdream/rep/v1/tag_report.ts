//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * TagReport defines the TagReport message.
 * @name TagReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagReport
 */
export interface TagReport {
  tagName: string;
  totalBond: string;
  firstReportAt: bigint;
  underReview: boolean;
  reporters: string[];
}
export interface TagReportProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TagReport";
  value: Uint8Array;
}
/**
 * TagReport defines the TagReport message.
 * @name TagReportAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagReport
 */
export interface TagReportAmino {
  tag_name?: string;
  total_bond?: string;
  first_report_at?: string;
  under_review?: boolean;
  reporters?: string[];
}
export interface TagReportAminoMsg {
  type: "/sparkdream.rep.v1.TagReport";
  value: TagReportAmino;
}
function createBaseTagReport(): TagReport {
  return {
    tagName: "",
    totalBond: "",
    firstReportAt: BigInt(0),
    underReview: false,
    reporters: []
  };
}
/**
 * TagReport defines the TagReport message.
 * @name TagReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagReport
 */
export const TagReport = {
  typeUrl: "/sparkdream.rep.v1.TagReport",
  encode(message: TagReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    if (message.totalBond !== "") {
      writer.uint32(18).string(message.totalBond);
    }
    if (message.firstReportAt !== BigInt(0)) {
      writer.uint32(24).int64(message.firstReportAt);
    }
    if (message.underReview === true) {
      writer.uint32(32).bool(message.underReview);
    }
    for (const v of message.reporters) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        case 2:
          message.totalBond = reader.string();
          break;
        case 3:
          message.firstReportAt = reader.int64();
          break;
        case 4:
          message.underReview = reader.bool();
          break;
        case 10:
          message.reporters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagReport>): TagReport {
    const message = createBaseTagReport();
    message.tagName = object.tagName ?? "";
    message.totalBond = object.totalBond ?? "";
    message.firstReportAt = object.firstReportAt !== undefined && object.firstReportAt !== null ? BigInt(object.firstReportAt.toString()) : BigInt(0);
    message.underReview = object.underReview ?? false;
    message.reporters = object.reporters?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TagReportAmino): TagReport {
    const message = createBaseTagReport();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.total_bond !== undefined && object.total_bond !== null) {
      message.totalBond = object.total_bond;
    }
    if (object.first_report_at !== undefined && object.first_report_at !== null) {
      message.firstReportAt = BigInt(object.first_report_at);
    }
    if (object.under_review !== undefined && object.under_review !== null) {
      message.underReview = object.under_review;
    }
    message.reporters = object.reporters?.map(e => e) || [];
    return message;
  },
  toAmino(message: TagReport): TagReportAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.total_bond = message.totalBond === "" ? undefined : message.totalBond;
    obj.first_report_at = message.firstReportAt !== BigInt(0) ? message.firstReportAt?.toString() : undefined;
    obj.under_review = message.underReview === false ? undefined : message.underReview;
    if (message.reporters) {
      obj.reporters = message.reporters.map(e => e);
    } else {
      obj.reporters = message.reporters;
    }
    return obj;
  },
  fromAminoMsg(object: TagReportAminoMsg): TagReport {
    return TagReport.fromAmino(object.value);
  },
  fromProtoMsg(message: TagReportProtoMsg): TagReport {
    return TagReport.decode(message.value);
  },
  toProto(message: TagReport): Uint8Array {
    return TagReport.encode(message).finish();
  },
  toProtoMsg(message: TagReport): TagReportProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TagReport",
      value: TagReport.encode(message).finish()
    };
  }
};