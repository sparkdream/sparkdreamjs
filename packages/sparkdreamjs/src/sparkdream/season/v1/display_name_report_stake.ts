//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DisplayNameReportStake stores a reporter's stake for a display name report.
 * @name DisplayNameReportStake
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameReportStake
 */
export interface DisplayNameReportStake {
  /**
   * Challenge ID
   */
  challengeId: string;
  /**
   * Reporter address
   */
  reporter: string;
  /**
   * Amount staked
   */
  amount: string;
}
export interface DisplayNameReportStakeProtoMsg {
  typeUrl: "/sparkdream.season.v1.DisplayNameReportStake";
  value: Uint8Array;
}
/**
 * DisplayNameReportStake stores a reporter's stake for a display name report.
 * @name DisplayNameReportStakeAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameReportStake
 */
export interface DisplayNameReportStakeAmino {
  /**
   * Challenge ID
   */
  challenge_id?: string;
  /**
   * Reporter address
   */
  reporter?: string;
  /**
   * Amount staked
   */
  amount?: string;
}
export interface DisplayNameReportStakeAminoMsg {
  type: "/sparkdream.season.v1.DisplayNameReportStake";
  value: DisplayNameReportStakeAmino;
}
function createBaseDisplayNameReportStake(): DisplayNameReportStake {
  return {
    challengeId: "",
    reporter: "",
    amount: ""
  };
}
/**
 * DisplayNameReportStake stores a reporter's stake for a display name report.
 * @name DisplayNameReportStake
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameReportStake
 */
export const DisplayNameReportStake = {
  typeUrl: "/sparkdream.season.v1.DisplayNameReportStake",
  encode(message: DisplayNameReportStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisplayNameReportStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayNameReportStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        case 2:
          message.reporter = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DisplayNameReportStake>): DisplayNameReportStake {
    const message = createBaseDisplayNameReportStake();
    message.challengeId = object.challengeId ?? "";
    message.reporter = object.reporter ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DisplayNameReportStakeAmino): DisplayNameReportStake {
    const message = createBaseDisplayNameReportStake();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DisplayNameReportStake): DisplayNameReportStakeAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DisplayNameReportStakeAminoMsg): DisplayNameReportStake {
    return DisplayNameReportStake.fromAmino(object.value);
  },
  fromProtoMsg(message: DisplayNameReportStakeProtoMsg): DisplayNameReportStake {
    return DisplayNameReportStake.decode(message.value);
  },
  toProto(message: DisplayNameReportStake): Uint8Array {
    return DisplayNameReportStake.encode(message).finish();
  },
  toProtoMsg(message: DisplayNameReportStake): DisplayNameReportStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.DisplayNameReportStake",
      value: DisplayNameReportStake.encode(message).finish()
    };
  }
};