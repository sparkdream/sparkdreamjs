//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { UserRateLimit, UserRateLimitAmino } from "./user_rate_limit";
import { UserReactionLimit, UserReactionLimitAmino } from "./user_reaction_limit";
import { SentinelActivity, SentinelActivityAmino } from "./sentinel_activity";
import { HideRecord, HideRecordAmino } from "./hide_record";
import { ThreadLockRecord, ThreadLockRecordAmino } from "./thread_lock_record";
import { ThreadMoveRecord, ThreadMoveRecordAmino } from "./thread_move_record";
import { PostFlag, PostFlagAmino } from "./post_flag";
import { Bounty, BountyAmino } from "./bounty";
import { ThreadMetadata, ThreadMetadataAmino } from "./thread_metadata";
import { ThreadFollow, ThreadFollowAmino } from "./thread_follow";
import { ThreadFollowCount, ThreadFollowCountAmino } from "./thread_follow_count";
import { ArchiveMetadata, ArchiveMetadataAmino } from "./archive_metadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the forum module's genesis state.
 * @name GenesisState
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  postMap: Post[];
  userRateLimitMap: UserRateLimit[];
  userReactionLimitMap: UserReactionLimit[];
  sentinelActivityMap: SentinelActivity[];
  hideRecordMap: HideRecord[];
  threadLockRecordMap: ThreadLockRecord[];
  threadMoveRecordMap: ThreadMoveRecord[];
  postFlagMap: PostFlag[];
  bountyList: Bounty[];
  bountyCount: bigint;
  threadMetadataMap: ThreadMetadata[];
  threadFollowMap: ThreadFollow[];
  threadFollowCountMap: ThreadFollowCount[];
  archiveMetadataMap: ArchiveMetadata[];
  /**
   * post_count persists the PostSeq counter (next post ID) across
   * export/import. Post IDs start at 1; 0 is reserved (parent_id=0 means
   * "no parent"). InitGenesis floors the restored value above every
   * imported post ID, so legacy exports without this field stay safe.
   */
  postCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.forum.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the forum module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  post_map?: PostAmino[];
  user_rate_limit_map?: UserRateLimitAmino[];
  user_reaction_limit_map?: UserReactionLimitAmino[];
  sentinel_activity_map?: SentinelActivityAmino[];
  hide_record_map?: HideRecordAmino[];
  thread_lock_record_map?: ThreadLockRecordAmino[];
  thread_move_record_map?: ThreadMoveRecordAmino[];
  post_flag_map?: PostFlagAmino[];
  bounty_list?: BountyAmino[];
  bounty_count?: string;
  thread_metadata_map?: ThreadMetadataAmino[];
  thread_follow_map?: ThreadFollowAmino[];
  thread_follow_count_map?: ThreadFollowCountAmino[];
  archive_metadata_map?: ArchiveMetadataAmino[];
  /**
   * post_count persists the PostSeq counter (next post ID) across
   * export/import. Post IDs start at 1; 0 is reserved (parent_id=0 means
   * "no parent"). InitGenesis floors the restored value above every
   * imported post ID, so legacy exports without this field stay safe.
   */
  post_count?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.forum.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    postMap: [],
    userRateLimitMap: [],
    userReactionLimitMap: [],
    sentinelActivityMap: [],
    hideRecordMap: [],
    threadLockRecordMap: [],
    threadMoveRecordMap: [],
    postFlagMap: [],
    bountyList: [],
    bountyCount: BigInt(0),
    threadMetadataMap: [],
    threadFollowMap: [],
    threadFollowCountMap: [],
    archiveMetadataMap: [],
    postCount: BigInt(0)
  };
}
/**
 * GenesisState defines the forum module's genesis state.
 * @name GenesisState
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.forum.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.postMap) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userRateLimitMap) {
      UserRateLimit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.userReactionLimitMap) {
      UserReactionLimit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sentinelActivityMap) {
      SentinelActivity.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.hideRecordMap) {
      HideRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.threadLockRecordMap) {
      ThreadLockRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.threadMoveRecordMap) {
      ThreadMoveRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.postFlagMap) {
      PostFlag.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.bountyList) {
      Bounty.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.bountyCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.bountyCount);
    }
    for (const v of message.threadMetadataMap) {
      ThreadMetadata.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.threadFollowMap) {
      ThreadFollow.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.threadFollowCountMap) {
      ThreadFollowCount.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.archiveMetadataMap) {
      ArchiveMetadata.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.postCount !== BigInt(0)) {
      writer.uint32(128).uint64(message.postCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.postMap.push(Post.decode(reader, reader.uint32()));
          break;
        case 3:
          message.userRateLimitMap.push(UserRateLimit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.userReactionLimitMap.push(UserReactionLimit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sentinelActivityMap.push(SentinelActivity.decode(reader, reader.uint32()));
          break;
        case 6:
          message.hideRecordMap.push(HideRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.threadLockRecordMap.push(ThreadLockRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.threadMoveRecordMap.push(ThreadMoveRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.postFlagMap.push(PostFlag.decode(reader, reader.uint32()));
          break;
        case 10:
          message.bountyList.push(Bounty.decode(reader, reader.uint32()));
          break;
        case 11:
          message.bountyCount = reader.uint64();
          break;
        case 12:
          message.threadMetadataMap.push(ThreadMetadata.decode(reader, reader.uint32()));
          break;
        case 13:
          message.threadFollowMap.push(ThreadFollow.decode(reader, reader.uint32()));
          break;
        case 14:
          message.threadFollowCountMap.push(ThreadFollowCount.decode(reader, reader.uint32()));
          break;
        case 15:
          message.archiveMetadataMap.push(ArchiveMetadata.decode(reader, reader.uint32()));
          break;
        case 16:
          message.postCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.postMap = object.postMap?.map(e => Post.fromPartial(e)) || [];
    message.userRateLimitMap = object.userRateLimitMap?.map(e => UserRateLimit.fromPartial(e)) || [];
    message.userReactionLimitMap = object.userReactionLimitMap?.map(e => UserReactionLimit.fromPartial(e)) || [];
    message.sentinelActivityMap = object.sentinelActivityMap?.map(e => SentinelActivity.fromPartial(e)) || [];
    message.hideRecordMap = object.hideRecordMap?.map(e => HideRecord.fromPartial(e)) || [];
    message.threadLockRecordMap = object.threadLockRecordMap?.map(e => ThreadLockRecord.fromPartial(e)) || [];
    message.threadMoveRecordMap = object.threadMoveRecordMap?.map(e => ThreadMoveRecord.fromPartial(e)) || [];
    message.postFlagMap = object.postFlagMap?.map(e => PostFlag.fromPartial(e)) || [];
    message.bountyList = object.bountyList?.map(e => Bounty.fromPartial(e)) || [];
    message.bountyCount = object.bountyCount !== undefined && object.bountyCount !== null ? BigInt(object.bountyCount.toString()) : BigInt(0);
    message.threadMetadataMap = object.threadMetadataMap?.map(e => ThreadMetadata.fromPartial(e)) || [];
    message.threadFollowMap = object.threadFollowMap?.map(e => ThreadFollow.fromPartial(e)) || [];
    message.threadFollowCountMap = object.threadFollowCountMap?.map(e => ThreadFollowCount.fromPartial(e)) || [];
    message.archiveMetadataMap = object.archiveMetadataMap?.map(e => ArchiveMetadata.fromPartial(e)) || [];
    message.postCount = object.postCount !== undefined && object.postCount !== null ? BigInt(object.postCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.postMap = object.post_map?.map(e => Post.fromAmino(e)) || [];
    message.userRateLimitMap = object.user_rate_limit_map?.map(e => UserRateLimit.fromAmino(e)) || [];
    message.userReactionLimitMap = object.user_reaction_limit_map?.map(e => UserReactionLimit.fromAmino(e)) || [];
    message.sentinelActivityMap = object.sentinel_activity_map?.map(e => SentinelActivity.fromAmino(e)) || [];
    message.hideRecordMap = object.hide_record_map?.map(e => HideRecord.fromAmino(e)) || [];
    message.threadLockRecordMap = object.thread_lock_record_map?.map(e => ThreadLockRecord.fromAmino(e)) || [];
    message.threadMoveRecordMap = object.thread_move_record_map?.map(e => ThreadMoveRecord.fromAmino(e)) || [];
    message.postFlagMap = object.post_flag_map?.map(e => PostFlag.fromAmino(e)) || [];
    message.bountyList = object.bounty_list?.map(e => Bounty.fromAmino(e)) || [];
    if (object.bounty_count !== undefined && object.bounty_count !== null) {
      message.bountyCount = BigInt(object.bounty_count);
    }
    message.threadMetadataMap = object.thread_metadata_map?.map(e => ThreadMetadata.fromAmino(e)) || [];
    message.threadFollowMap = object.thread_follow_map?.map(e => ThreadFollow.fromAmino(e)) || [];
    message.threadFollowCountMap = object.thread_follow_count_map?.map(e => ThreadFollowCount.fromAmino(e)) || [];
    message.archiveMetadataMap = object.archive_metadata_map?.map(e => ArchiveMetadata.fromAmino(e)) || [];
    if (object.post_count !== undefined && object.post_count !== null) {
      message.postCount = BigInt(object.post_count);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.postMap) {
      obj.post_map = message.postMap.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.post_map = message.postMap;
    }
    if (message.userRateLimitMap) {
      obj.user_rate_limit_map = message.userRateLimitMap.map(e => e ? UserRateLimit.toAmino(e) : undefined);
    } else {
      obj.user_rate_limit_map = message.userRateLimitMap;
    }
    if (message.userReactionLimitMap) {
      obj.user_reaction_limit_map = message.userReactionLimitMap.map(e => e ? UserReactionLimit.toAmino(e) : undefined);
    } else {
      obj.user_reaction_limit_map = message.userReactionLimitMap;
    }
    if (message.sentinelActivityMap) {
      obj.sentinel_activity_map = message.sentinelActivityMap.map(e => e ? SentinelActivity.toAmino(e) : undefined);
    } else {
      obj.sentinel_activity_map = message.sentinelActivityMap;
    }
    if (message.hideRecordMap) {
      obj.hide_record_map = message.hideRecordMap.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_record_map = message.hideRecordMap;
    }
    if (message.threadLockRecordMap) {
      obj.thread_lock_record_map = message.threadLockRecordMap.map(e => e ? ThreadLockRecord.toAmino(e) : undefined);
    } else {
      obj.thread_lock_record_map = message.threadLockRecordMap;
    }
    if (message.threadMoveRecordMap) {
      obj.thread_move_record_map = message.threadMoveRecordMap.map(e => e ? ThreadMoveRecord.toAmino(e) : undefined);
    } else {
      obj.thread_move_record_map = message.threadMoveRecordMap;
    }
    if (message.postFlagMap) {
      obj.post_flag_map = message.postFlagMap.map(e => e ? PostFlag.toAmino(e) : undefined);
    } else {
      obj.post_flag_map = message.postFlagMap;
    }
    if (message.bountyList) {
      obj.bounty_list = message.bountyList.map(e => e ? Bounty.toAmino(e) : undefined);
    } else {
      obj.bounty_list = message.bountyList;
    }
    obj.bounty_count = message.bountyCount !== BigInt(0) ? message.bountyCount?.toString() : undefined;
    if (message.threadMetadataMap) {
      obj.thread_metadata_map = message.threadMetadataMap.map(e => e ? ThreadMetadata.toAmino(e) : undefined);
    } else {
      obj.thread_metadata_map = message.threadMetadataMap;
    }
    if (message.threadFollowMap) {
      obj.thread_follow_map = message.threadFollowMap.map(e => e ? ThreadFollow.toAmino(e) : undefined);
    } else {
      obj.thread_follow_map = message.threadFollowMap;
    }
    if (message.threadFollowCountMap) {
      obj.thread_follow_count_map = message.threadFollowCountMap.map(e => e ? ThreadFollowCount.toAmino(e) : undefined);
    } else {
      obj.thread_follow_count_map = message.threadFollowCountMap;
    }
    if (message.archiveMetadataMap) {
      obj.archive_metadata_map = message.archiveMetadataMap.map(e => e ? ArchiveMetadata.toAmino(e) : undefined);
    } else {
      obj.archive_metadata_map = message.archiveMetadataMap;
    }
    obj.post_count = message.postCount !== BigInt(0) ? message.postCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};