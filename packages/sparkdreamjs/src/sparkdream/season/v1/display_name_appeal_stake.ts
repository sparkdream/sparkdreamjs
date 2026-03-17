//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DisplayNameAppealStake stores an appellant's stake for a display name appeal.
 * @name DisplayNameAppealStake
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameAppealStake
 */
export interface DisplayNameAppealStake {
  /**
   * Challenge ID
   */
  challengeId: string;
  /**
   * Appellant address
   */
  appellant: string;
  /**
   * Amount staked
   */
  amount: string;
}
export interface DisplayNameAppealStakeProtoMsg {
  typeUrl: "/sparkdream.season.v1.DisplayNameAppealStake";
  value: Uint8Array;
}
/**
 * DisplayNameAppealStake stores an appellant's stake for a display name appeal.
 * @name DisplayNameAppealStakeAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameAppealStake
 */
export interface DisplayNameAppealStakeAmino {
  /**
   * Challenge ID
   */
  challenge_id?: string;
  /**
   * Appellant address
   */
  appellant?: string;
  /**
   * Amount staked
   */
  amount?: string;
}
export interface DisplayNameAppealStakeAminoMsg {
  type: "/sparkdream.season.v1.DisplayNameAppealStake";
  value: DisplayNameAppealStakeAmino;
}
function createBaseDisplayNameAppealStake(): DisplayNameAppealStake {
  return {
    challengeId: "",
    appellant: "",
    amount: ""
  };
}
/**
 * DisplayNameAppealStake stores an appellant's stake for a display name appeal.
 * @name DisplayNameAppealStake
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameAppealStake
 */
export const DisplayNameAppealStake = {
  typeUrl: "/sparkdream.season.v1.DisplayNameAppealStake",
  encode(message: DisplayNameAppealStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    if (message.appellant !== "") {
      writer.uint32(18).string(message.appellant);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisplayNameAppealStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayNameAppealStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        case 2:
          message.appellant = reader.string();
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
  fromPartial(object: DeepPartial<DisplayNameAppealStake>): DisplayNameAppealStake {
    const message = createBaseDisplayNameAppealStake();
    message.challengeId = object.challengeId ?? "";
    message.appellant = object.appellant ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DisplayNameAppealStakeAmino): DisplayNameAppealStake {
    const message = createBaseDisplayNameAppealStake();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    if (object.appellant !== undefined && object.appellant !== null) {
      message.appellant = object.appellant;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DisplayNameAppealStake): DisplayNameAppealStakeAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    obj.appellant = message.appellant === "" ? undefined : message.appellant;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DisplayNameAppealStakeAminoMsg): DisplayNameAppealStake {
    return DisplayNameAppealStake.fromAmino(object.value);
  },
  fromProtoMsg(message: DisplayNameAppealStakeProtoMsg): DisplayNameAppealStake {
    return DisplayNameAppealStake.decode(message.value);
  },
  toProto(message: DisplayNameAppealStake): Uint8Array {
    return DisplayNameAppealStake.encode(message).finish();
  },
  toProtoMsg(message: DisplayNameAppealStake): DisplayNameAppealStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.DisplayNameAppealStake",
      value: DisplayNameAppealStake.encode(message).finish()
    };
  }
};