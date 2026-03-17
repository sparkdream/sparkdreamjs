//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberProfile stores gamification data for a member.
 * @name MemberProfile
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberProfile
 */
export interface MemberProfile {
  /**
   * Member address (key)
   */
  address: string;
  /**
   * Display name (free-form, can be changed with cooldown)
   */
  displayName: string;
  /**
   * Username (unique, costs DREAM to set)
   */
  username: string;
  /**
   * Currently displayed title ID
   */
  displayTitle: string;
  /**
   * Current season XP
   */
  seasonXp: bigint;
  /**
   * Current season level
   */
  seasonLevel: bigint;
  /**
   * Lifetime XP accumulated across all seasons
   */
  lifetimeXp: bigint;
  /**
   * Current guild ID (0 = no guild)
   */
  guildId: bigint;
  /**
   * Epoch when display name was last changed
   */
  lastDisplayNameChangeEpoch: bigint;
  /**
   * Epoch when username was last changed
   */
  lastUsernameChangeEpoch: bigint;
  /**
   * Number of challenges won
   */
  challengesWon: bigint;
  /**
   * Number of jury duties completed
   */
  juryDutiesCompleted: bigint;
  /**
   * Number of votes cast
   */
  votesCast: bigint;
  /**
   * Number of forum posts marked helpful
   */
  forumHelpfulCount: bigint;
  /**
   * Number of successful invitations
   */
  invitationsSuccessful: bigint;
  /**
   * Epoch of last activity
   */
  lastActiveEpoch: bigint;
  /**
   * Unlocked titles (available to display)
   */
  unlockedTitles: string[];
  /**
   * Earned achievements
   */
  achievements: string[];
  /**
   * Archived seasonal titles from past seasons
   */
  archivedTitles: string[];
}
export interface MemberProfileProtoMsg {
  typeUrl: "/sparkdream.season.v1.MemberProfile";
  value: Uint8Array;
}
/**
 * MemberProfile stores gamification data for a member.
 * @name MemberProfileAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberProfile
 */
export interface MemberProfileAmino {
  /**
   * Member address (key)
   */
  address?: string;
  /**
   * Display name (free-form, can be changed with cooldown)
   */
  display_name?: string;
  /**
   * Username (unique, costs DREAM to set)
   */
  username?: string;
  /**
   * Currently displayed title ID
   */
  display_title?: string;
  /**
   * Current season XP
   */
  season_xp?: string;
  /**
   * Current season level
   */
  season_level?: string;
  /**
   * Lifetime XP accumulated across all seasons
   */
  lifetime_xp?: string;
  /**
   * Current guild ID (0 = no guild)
   */
  guild_id?: string;
  /**
   * Epoch when display name was last changed
   */
  last_display_name_change_epoch?: string;
  /**
   * Epoch when username was last changed
   */
  last_username_change_epoch?: string;
  /**
   * Number of challenges won
   */
  challenges_won?: string;
  /**
   * Number of jury duties completed
   */
  jury_duties_completed?: string;
  /**
   * Number of votes cast
   */
  votes_cast?: string;
  /**
   * Number of forum posts marked helpful
   */
  forum_helpful_count?: string;
  /**
   * Number of successful invitations
   */
  invitations_successful?: string;
  /**
   * Epoch of last activity
   */
  last_active_epoch?: string;
  /**
   * Unlocked titles (available to display)
   */
  unlocked_titles?: string[];
  /**
   * Earned achievements
   */
  achievements?: string[];
  /**
   * Archived seasonal titles from past seasons
   */
  archived_titles?: string[];
}
export interface MemberProfileAminoMsg {
  type: "/sparkdream.season.v1.MemberProfile";
  value: MemberProfileAmino;
}
function createBaseMemberProfile(): MemberProfile {
  return {
    address: "",
    displayName: "",
    username: "",
    displayTitle: "",
    seasonXp: BigInt(0),
    seasonLevel: BigInt(0),
    lifetimeXp: BigInt(0),
    guildId: BigInt(0),
    lastDisplayNameChangeEpoch: BigInt(0),
    lastUsernameChangeEpoch: BigInt(0),
    challengesWon: BigInt(0),
    juryDutiesCompleted: BigInt(0),
    votesCast: BigInt(0),
    forumHelpfulCount: BigInt(0),
    invitationsSuccessful: BigInt(0),
    lastActiveEpoch: BigInt(0),
    unlockedTitles: [],
    achievements: [],
    archivedTitles: []
  };
}
/**
 * MemberProfile stores gamification data for a member.
 * @name MemberProfile
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberProfile
 */
export const MemberProfile = {
  typeUrl: "/sparkdream.season.v1.MemberProfile",
  encode(message: MemberProfile, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.displayTitle !== "") {
      writer.uint32(34).string(message.displayTitle);
    }
    if (message.seasonXp !== BigInt(0)) {
      writer.uint32(40).uint64(message.seasonXp);
    }
    if (message.seasonLevel !== BigInt(0)) {
      writer.uint32(48).uint64(message.seasonLevel);
    }
    if (message.lifetimeXp !== BigInt(0)) {
      writer.uint32(56).uint64(message.lifetimeXp);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(64).uint64(message.guildId);
    }
    if (message.lastDisplayNameChangeEpoch !== BigInt(0)) {
      writer.uint32(72).int64(message.lastDisplayNameChangeEpoch);
    }
    if (message.lastUsernameChangeEpoch !== BigInt(0)) {
      writer.uint32(80).int64(message.lastUsernameChangeEpoch);
    }
    if (message.challengesWon !== BigInt(0)) {
      writer.uint32(88).uint64(message.challengesWon);
    }
    if (message.juryDutiesCompleted !== BigInt(0)) {
      writer.uint32(96).uint64(message.juryDutiesCompleted);
    }
    if (message.votesCast !== BigInt(0)) {
      writer.uint32(104).uint64(message.votesCast);
    }
    if (message.forumHelpfulCount !== BigInt(0)) {
      writer.uint32(112).uint64(message.forumHelpfulCount);
    }
    if (message.invitationsSuccessful !== BigInt(0)) {
      writer.uint32(120).uint64(message.invitationsSuccessful);
    }
    if (message.lastActiveEpoch !== BigInt(0)) {
      writer.uint32(128).int64(message.lastActiveEpoch);
    }
    for (const v of message.unlockedTitles) {
      writer.uint32(138).string(v!);
    }
    for (const v of message.achievements) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.archivedTitles) {
      writer.uint32(154).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberProfile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.username = reader.string();
          break;
        case 4:
          message.displayTitle = reader.string();
          break;
        case 5:
          message.seasonXp = reader.uint64();
          break;
        case 6:
          message.seasonLevel = reader.uint64();
          break;
        case 7:
          message.lifetimeXp = reader.uint64();
          break;
        case 8:
          message.guildId = reader.uint64();
          break;
        case 9:
          message.lastDisplayNameChangeEpoch = reader.int64();
          break;
        case 10:
          message.lastUsernameChangeEpoch = reader.int64();
          break;
        case 11:
          message.challengesWon = reader.uint64();
          break;
        case 12:
          message.juryDutiesCompleted = reader.uint64();
          break;
        case 13:
          message.votesCast = reader.uint64();
          break;
        case 14:
          message.forumHelpfulCount = reader.uint64();
          break;
        case 15:
          message.invitationsSuccessful = reader.uint64();
          break;
        case 16:
          message.lastActiveEpoch = reader.int64();
          break;
        case 17:
          message.unlockedTitles.push(reader.string());
          break;
        case 18:
          message.achievements.push(reader.string());
          break;
        case 19:
          message.archivedTitles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberProfile>): MemberProfile {
    const message = createBaseMemberProfile();
    message.address = object.address ?? "";
    message.displayName = object.displayName ?? "";
    message.username = object.username ?? "";
    message.displayTitle = object.displayTitle ?? "";
    message.seasonXp = object.seasonXp !== undefined && object.seasonXp !== null ? BigInt(object.seasonXp.toString()) : BigInt(0);
    message.seasonLevel = object.seasonLevel !== undefined && object.seasonLevel !== null ? BigInt(object.seasonLevel.toString()) : BigInt(0);
    message.lifetimeXp = object.lifetimeXp !== undefined && object.lifetimeXp !== null ? BigInt(object.lifetimeXp.toString()) : BigInt(0);
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.lastDisplayNameChangeEpoch = object.lastDisplayNameChangeEpoch !== undefined && object.lastDisplayNameChangeEpoch !== null ? BigInt(object.lastDisplayNameChangeEpoch.toString()) : BigInt(0);
    message.lastUsernameChangeEpoch = object.lastUsernameChangeEpoch !== undefined && object.lastUsernameChangeEpoch !== null ? BigInt(object.lastUsernameChangeEpoch.toString()) : BigInt(0);
    message.challengesWon = object.challengesWon !== undefined && object.challengesWon !== null ? BigInt(object.challengesWon.toString()) : BigInt(0);
    message.juryDutiesCompleted = object.juryDutiesCompleted !== undefined && object.juryDutiesCompleted !== null ? BigInt(object.juryDutiesCompleted.toString()) : BigInt(0);
    message.votesCast = object.votesCast !== undefined && object.votesCast !== null ? BigInt(object.votesCast.toString()) : BigInt(0);
    message.forumHelpfulCount = object.forumHelpfulCount !== undefined && object.forumHelpfulCount !== null ? BigInt(object.forumHelpfulCount.toString()) : BigInt(0);
    message.invitationsSuccessful = object.invitationsSuccessful !== undefined && object.invitationsSuccessful !== null ? BigInt(object.invitationsSuccessful.toString()) : BigInt(0);
    message.lastActiveEpoch = object.lastActiveEpoch !== undefined && object.lastActiveEpoch !== null ? BigInt(object.lastActiveEpoch.toString()) : BigInt(0);
    message.unlockedTitles = object.unlockedTitles?.map(e => e) || [];
    message.achievements = object.achievements?.map(e => e) || [];
    message.archivedTitles = object.archivedTitles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MemberProfileAmino): MemberProfile {
    const message = createBaseMemberProfile();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    if (object.display_title !== undefined && object.display_title !== null) {
      message.displayTitle = object.display_title;
    }
    if (object.season_xp !== undefined && object.season_xp !== null) {
      message.seasonXp = BigInt(object.season_xp);
    }
    if (object.season_level !== undefined && object.season_level !== null) {
      message.seasonLevel = BigInt(object.season_level);
    }
    if (object.lifetime_xp !== undefined && object.lifetime_xp !== null) {
      message.lifetimeXp = BigInt(object.lifetime_xp);
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.last_display_name_change_epoch !== undefined && object.last_display_name_change_epoch !== null) {
      message.lastDisplayNameChangeEpoch = BigInt(object.last_display_name_change_epoch);
    }
    if (object.last_username_change_epoch !== undefined && object.last_username_change_epoch !== null) {
      message.lastUsernameChangeEpoch = BigInt(object.last_username_change_epoch);
    }
    if (object.challenges_won !== undefined && object.challenges_won !== null) {
      message.challengesWon = BigInt(object.challenges_won);
    }
    if (object.jury_duties_completed !== undefined && object.jury_duties_completed !== null) {
      message.juryDutiesCompleted = BigInt(object.jury_duties_completed);
    }
    if (object.votes_cast !== undefined && object.votes_cast !== null) {
      message.votesCast = BigInt(object.votes_cast);
    }
    if (object.forum_helpful_count !== undefined && object.forum_helpful_count !== null) {
      message.forumHelpfulCount = BigInt(object.forum_helpful_count);
    }
    if (object.invitations_successful !== undefined && object.invitations_successful !== null) {
      message.invitationsSuccessful = BigInt(object.invitations_successful);
    }
    if (object.last_active_epoch !== undefined && object.last_active_epoch !== null) {
      message.lastActiveEpoch = BigInt(object.last_active_epoch);
    }
    message.unlockedTitles = object.unlocked_titles?.map(e => e) || [];
    message.achievements = object.achievements?.map(e => e) || [];
    message.archivedTitles = object.archived_titles?.map(e => e) || [];
    return message;
  },
  toAmino(message: MemberProfile): MemberProfileAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    obj.username = message.username === "" ? undefined : message.username;
    obj.display_title = message.displayTitle === "" ? undefined : message.displayTitle;
    obj.season_xp = message.seasonXp !== BigInt(0) ? message.seasonXp?.toString() : undefined;
    obj.season_level = message.seasonLevel !== BigInt(0) ? message.seasonLevel?.toString() : undefined;
    obj.lifetime_xp = message.lifetimeXp !== BigInt(0) ? message.lifetimeXp?.toString() : undefined;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.last_display_name_change_epoch = message.lastDisplayNameChangeEpoch !== BigInt(0) ? message.lastDisplayNameChangeEpoch?.toString() : undefined;
    obj.last_username_change_epoch = message.lastUsernameChangeEpoch !== BigInt(0) ? message.lastUsernameChangeEpoch?.toString() : undefined;
    obj.challenges_won = message.challengesWon !== BigInt(0) ? message.challengesWon?.toString() : undefined;
    obj.jury_duties_completed = message.juryDutiesCompleted !== BigInt(0) ? message.juryDutiesCompleted?.toString() : undefined;
    obj.votes_cast = message.votesCast !== BigInt(0) ? message.votesCast?.toString() : undefined;
    obj.forum_helpful_count = message.forumHelpfulCount !== BigInt(0) ? message.forumHelpfulCount?.toString() : undefined;
    obj.invitations_successful = message.invitationsSuccessful !== BigInt(0) ? message.invitationsSuccessful?.toString() : undefined;
    obj.last_active_epoch = message.lastActiveEpoch !== BigInt(0) ? message.lastActiveEpoch?.toString() : undefined;
    if (message.unlockedTitles) {
      obj.unlocked_titles = message.unlockedTitles.map(e => e);
    } else {
      obj.unlocked_titles = message.unlockedTitles;
    }
    if (message.achievements) {
      obj.achievements = message.achievements.map(e => e);
    } else {
      obj.achievements = message.achievements;
    }
    if (message.archivedTitles) {
      obj.archived_titles = message.archivedTitles.map(e => e);
    } else {
      obj.archived_titles = message.archivedTitles;
    }
    return obj;
  },
  fromAminoMsg(object: MemberProfileAminoMsg): MemberProfile {
    return MemberProfile.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProfileProtoMsg): MemberProfile {
    return MemberProfile.decode(message.value);
  },
  toProto(message: MemberProfile): Uint8Array {
    return MemberProfile.encode(message).finish();
  },
  toProtoMsg(message: MemberProfile): MemberProfileProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MemberProfile",
      value: MemberProfile.encode(message).finish()
    };
  }
};