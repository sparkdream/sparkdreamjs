//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GuildMembership defines the GuildMembership message.
 * @name GuildMembership
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GuildMembership
 */
export interface GuildMembership {
  member: string;
  guildId: bigint;
  joinedEpoch: bigint;
  leftEpoch: bigint;
  guildsJoinedThisSeason: bigint;
}
export interface GuildMembershipProtoMsg {
  typeUrl: "/sparkdream.season.v1.GuildMembership";
  value: Uint8Array;
}
/**
 * GuildMembership defines the GuildMembership message.
 * @name GuildMembershipAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GuildMembership
 */
export interface GuildMembershipAmino {
  member?: string;
  guild_id?: string;
  joined_epoch?: string;
  left_epoch?: string;
  guilds_joined_this_season?: string;
}
export interface GuildMembershipAminoMsg {
  type: "/sparkdream.season.v1.GuildMembership";
  value: GuildMembershipAmino;
}
function createBaseGuildMembership(): GuildMembership {
  return {
    member: "",
    guildId: BigInt(0),
    joinedEpoch: BigInt(0),
    leftEpoch: BigInt(0),
    guildsJoinedThisSeason: BigInt(0)
  };
}
/**
 * GuildMembership defines the GuildMembership message.
 * @name GuildMembership
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GuildMembership
 */
export const GuildMembership = {
  typeUrl: "/sparkdream.season.v1.GuildMembership",
  encode(message: GuildMembership, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.joinedEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.joinedEpoch);
    }
    if (message.leftEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.leftEpoch);
    }
    if (message.guildsJoinedThisSeason !== BigInt(0)) {
      writer.uint32(40).uint64(message.guildsJoinedThisSeason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GuildMembership {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuildMembership();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.joinedEpoch = reader.int64();
          break;
        case 4:
          message.leftEpoch = reader.int64();
          break;
        case 5:
          message.guildsJoinedThisSeason = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GuildMembership>): GuildMembership {
    const message = createBaseGuildMembership();
    message.member = object.member ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.joinedEpoch = object.joinedEpoch !== undefined && object.joinedEpoch !== null ? BigInt(object.joinedEpoch.toString()) : BigInt(0);
    message.leftEpoch = object.leftEpoch !== undefined && object.leftEpoch !== null ? BigInt(object.leftEpoch.toString()) : BigInt(0);
    message.guildsJoinedThisSeason = object.guildsJoinedThisSeason !== undefined && object.guildsJoinedThisSeason !== null ? BigInt(object.guildsJoinedThisSeason.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GuildMembershipAmino): GuildMembership {
    const message = createBaseGuildMembership();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.joined_epoch !== undefined && object.joined_epoch !== null) {
      message.joinedEpoch = BigInt(object.joined_epoch);
    }
    if (object.left_epoch !== undefined && object.left_epoch !== null) {
      message.leftEpoch = BigInt(object.left_epoch);
    }
    if (object.guilds_joined_this_season !== undefined && object.guilds_joined_this_season !== null) {
      message.guildsJoinedThisSeason = BigInt(object.guilds_joined_this_season);
    }
    return message;
  },
  toAmino(message: GuildMembership): GuildMembershipAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.joined_epoch = message.joinedEpoch !== BigInt(0) ? message.joinedEpoch?.toString() : undefined;
    obj.left_epoch = message.leftEpoch !== BigInt(0) ? message.leftEpoch?.toString() : undefined;
    obj.guilds_joined_this_season = message.guildsJoinedThisSeason !== BigInt(0) ? message.guildsJoinedThisSeason?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GuildMembershipAminoMsg): GuildMembership {
    return GuildMembership.fromAmino(object.value);
  },
  fromProtoMsg(message: GuildMembershipProtoMsg): GuildMembership {
    return GuildMembership.decode(message.value);
  },
  toProto(message: GuildMembership): Uint8Array {
    return GuildMembership.encode(message).finish();
  },
  toProtoMsg(message: GuildMembership): GuildMembershipProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.GuildMembership",
      value: GuildMembership.encode(message).finish()
    };
  }
};