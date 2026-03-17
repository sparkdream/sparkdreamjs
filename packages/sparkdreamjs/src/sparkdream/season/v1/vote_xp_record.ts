//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * VoteXpRecord defines the VoteXpRecord message.
 * @name VoteXpRecord
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.VoteXpRecord
 */
export interface VoteXpRecord {
  seasonMemberProposal: string;
  grantedBlock: bigint;
}
export interface VoteXpRecordProtoMsg {
  typeUrl: "/sparkdream.season.v1.VoteXpRecord";
  value: Uint8Array;
}
/**
 * VoteXpRecord defines the VoteXpRecord message.
 * @name VoteXpRecordAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.VoteXpRecord
 */
export interface VoteXpRecordAmino {
  season_member_proposal?: string;
  granted_block?: string;
}
export interface VoteXpRecordAminoMsg {
  type: "/sparkdream.season.v1.VoteXpRecord";
  value: VoteXpRecordAmino;
}
function createBaseVoteXpRecord(): VoteXpRecord {
  return {
    seasonMemberProposal: "",
    grantedBlock: BigInt(0)
  };
}
/**
 * VoteXpRecord defines the VoteXpRecord message.
 * @name VoteXpRecord
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.VoteXpRecord
 */
export const VoteXpRecord = {
  typeUrl: "/sparkdream.season.v1.VoteXpRecord",
  encode(message: VoteXpRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonMemberProposal !== "") {
      writer.uint32(10).string(message.seasonMemberProposal);
    }
    if (message.grantedBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.grantedBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteXpRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteXpRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonMemberProposal = reader.string();
          break;
        case 2:
          message.grantedBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VoteXpRecord>): VoteXpRecord {
    const message = createBaseVoteXpRecord();
    message.seasonMemberProposal = object.seasonMemberProposal ?? "";
    message.grantedBlock = object.grantedBlock !== undefined && object.grantedBlock !== null ? BigInt(object.grantedBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VoteXpRecordAmino): VoteXpRecord {
    const message = createBaseVoteXpRecord();
    if (object.season_member_proposal !== undefined && object.season_member_proposal !== null) {
      message.seasonMemberProposal = object.season_member_proposal;
    }
    if (object.granted_block !== undefined && object.granted_block !== null) {
      message.grantedBlock = BigInt(object.granted_block);
    }
    return message;
  },
  toAmino(message: VoteXpRecord): VoteXpRecordAmino {
    const obj: any = {};
    obj.season_member_proposal = message.seasonMemberProposal === "" ? undefined : message.seasonMemberProposal;
    obj.granted_block = message.grantedBlock !== BigInt(0) ? message.grantedBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteXpRecordAminoMsg): VoteXpRecord {
    return VoteXpRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteXpRecordProtoMsg): VoteXpRecord {
    return VoteXpRecord.decode(message.value);
  },
  toProto(message: VoteXpRecord): Uint8Array {
    return VoteXpRecord.encode(message).finish();
  },
  toProtoMsg(message: VoteXpRecord): VoteXpRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.VoteXpRecord",
      value: VoteXpRecord.encode(message).finish()
    };
  }
};