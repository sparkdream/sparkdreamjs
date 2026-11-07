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
import { PostConvictionStake, PostConvictionStakeAmino, ForumRepEpochCounter, ForumRepEpochCounterAmino } from "./types";
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
  /**
   * proposal_count_map persists the per-(thread, sentinel) accepted-reply
   * proposal counter that backs the per-sentinel-per-thread proposal cap. Not
   * derivable from other state (it is a historical tally), so it must round-trip
   * through genesis like sentinel_activity_map.
   */
  proposalCountMap: ProposalCountEntry[];
  /**
   * post_conviction_stake_list carries every PostConvictionStake (active and
   * released-but-not-GC'd). The staker's DREAM stays locked in x/rep while a
   * stake is active, so dropping the record would strand it.
   */
  postConvictionStakeList: PostConvictionStake[];
  /**
   * post_conviction_stake_count persists PostConvictionStakeSeq (next id).
   */
  postConvictionStakeCount: bigint;
  /**
   * post_vote_list persists the one-vote-per-(post, voter) dedup set.
   */
  postVoteList: PostVoteEntry[];
  /**
   * forum_rep_epoch_counter_list persists the per-(author, tag) epoch rep cap
   * counters so an export/import cannot reset the daily cap mid-epoch.
   */
  forumRepEpochCounterList: ForumRepEpochCounterEntry[];
  /**
   * pending_stake_slash_list persists the posts whose stood hide is still
   * being settled against their conviction stakes, a bounded batch per block.
   */
  pendingStakeSlashList: PendingStakeSlash[];
  /**
   * Members queued for eager promotion of their ephemeral content (admitted
   * after posting). Hook-driven, so carried verbatim with the enqueue height;
   * without it an import would leave that content to the lazy TTL-time path.
   */
  promotionQueue: PromotionQueueEntry[];
  /**
   * Tags x/rep removed from its registry whose references forum is still
   * stripping from posts, each with the next post id to scan. Not derivable
   * (the registry no longer knows the tag), so an import without it would
   * leave the tag on every post not yet scanned.
   */
  tagPruneQueue: TagPruneEntry[];
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
  /**
   * proposal_count_map persists the per-(thread, sentinel) accepted-reply
   * proposal counter that backs the per-sentinel-per-thread proposal cap. Not
   * derivable from other state (it is a historical tally), so it must round-trip
   * through genesis like sentinel_activity_map.
   */
  proposal_count_map?: ProposalCountEntryAmino[];
  /**
   * post_conviction_stake_list carries every PostConvictionStake (active and
   * released-but-not-GC'd). The staker's DREAM stays locked in x/rep while a
   * stake is active, so dropping the record would strand it.
   */
  post_conviction_stake_list?: PostConvictionStakeAmino[];
  /**
   * post_conviction_stake_count persists PostConvictionStakeSeq (next id).
   */
  post_conviction_stake_count?: string;
  /**
   * post_vote_list persists the one-vote-per-(post, voter) dedup set.
   */
  post_vote_list?: PostVoteEntryAmino[];
  /**
   * forum_rep_epoch_counter_list persists the per-(author, tag) epoch rep cap
   * counters so an export/import cannot reset the daily cap mid-epoch.
   */
  forum_rep_epoch_counter_list?: ForumRepEpochCounterEntryAmino[];
  /**
   * pending_stake_slash_list persists the posts whose stood hide is still
   * being settled against their conviction stakes, a bounded batch per block.
   */
  pending_stake_slash_list?: PendingStakeSlashAmino[];
  /**
   * Members queued for eager promotion of their ephemeral content (admitted
   * after posting). Hook-driven, so carried verbatim with the enqueue height;
   * without it an import would leave that content to the lazy TTL-time path.
   */
  promotion_queue?: PromotionQueueEntryAmino[];
  /**
   * Tags x/rep removed from its registry whose references forum is still
   * stripping from posts, each with the next post id to scan. Not derivable
   * (the registry no longer knows the tag), so an import without it would
   * leave the tag on every post not yet scanned.
   */
  tag_prune_queue?: TagPruneEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.forum.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * TagPruneEntry is one in-flight tag prune: the removed tag and the next
 * post id to scan.
 * @name TagPruneEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.TagPruneEntry
 */
export interface TagPruneEntry {
  tag: string;
  nextPostId: bigint;
}
export interface TagPruneEntryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.TagPruneEntry";
  value: Uint8Array;
}
/**
 * TagPruneEntry is one in-flight tag prune: the removed tag and the next
 * post id to scan.
 * @name TagPruneEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.TagPruneEntry
 */
export interface TagPruneEntryAmino {
  tag?: string;
  next_post_id?: string;
}
export interface TagPruneEntryAminoMsg {
  type: "/sparkdream.forum.v1.TagPruneEntry";
  value: TagPruneEntryAmino;
}
/**
 * PendingStakeSlash is a post whose conviction stakes are still to be
 * slashed, with the author the reputation is clawed back from (kept here
 * because the post itself may be pruned before the slash finishes).
 * @name PendingStakeSlash
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PendingStakeSlash
 */
export interface PendingStakeSlash {
  postId: bigint;
  author: string;
}
export interface PendingStakeSlashProtoMsg {
  typeUrl: "/sparkdream.forum.v1.PendingStakeSlash";
  value: Uint8Array;
}
/**
 * PendingStakeSlash is a post whose conviction stakes are still to be
 * slashed, with the author the reputation is clawed back from (kept here
 * because the post itself may be pruned before the slash finishes).
 * @name PendingStakeSlashAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PendingStakeSlash
 */
export interface PendingStakeSlashAmino {
  post_id?: string;
  author?: string;
}
export interface PendingStakeSlashAminoMsg {
  type: "/sparkdream.forum.v1.PendingStakeSlash";
  value: PendingStakeSlashAmino;
}
/**
 * PostVoteEntry is one (post_id, voter) dedup key of the PostVote set.
 * @name PostVoteEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostVoteEntry
 */
export interface PostVoteEntry {
  postId: bigint;
  voter: string;
}
export interface PostVoteEntryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.PostVoteEntry";
  value: Uint8Array;
}
/**
 * PostVoteEntry is one (post_id, voter) dedup key of the PostVote set.
 * @name PostVoteEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostVoteEntry
 */
export interface PostVoteEntryAmino {
  post_id?: string;
  voter?: string;
}
export interface PostVoteEntryAminoMsg {
  type: "/sparkdream.forum.v1.PostVoteEntry";
  value: PostVoteEntryAmino;
}
/**
 * ForumRepEpochCounterEntry is one (author, tag) -> ForumRepEpochCounter
 * tuple, flattened for genesis import/export.
 * @name ForumRepEpochCounterEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumRepEpochCounterEntry
 */
export interface ForumRepEpochCounterEntry {
  author: string;
  tag: string;
  counter: ForumRepEpochCounter;
}
export interface ForumRepEpochCounterEntryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ForumRepEpochCounterEntry";
  value: Uint8Array;
}
/**
 * ForumRepEpochCounterEntry is one (author, tag) -> ForumRepEpochCounter
 * tuple, flattened for genesis import/export.
 * @name ForumRepEpochCounterEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumRepEpochCounterEntry
 */
export interface ForumRepEpochCounterEntryAmino {
  author?: string;
  tag?: string;
  counter?: ForumRepEpochCounterAmino;
}
export interface ForumRepEpochCounterEntryAminoMsg {
  type: "/sparkdream.forum.v1.ForumRepEpochCounterEntry";
  value: ForumRepEpochCounterEntryAmino;
}
/**
 * ProposalCountEntry is one (thread_id, sentinel) -> count tuple of the
 * accepted-reply proposal cap counter, flattened for genesis import/export.
 * @name ProposalCountEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ProposalCountEntry
 */
export interface ProposalCountEntry {
  threadId: bigint;
  sentinel: string;
  count: bigint;
}
export interface ProposalCountEntryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ProposalCountEntry";
  value: Uint8Array;
}
/**
 * ProposalCountEntry is one (thread_id, sentinel) -> count tuple of the
 * accepted-reply proposal cap counter, flattened for genesis import/export.
 * @name ProposalCountEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ProposalCountEntry
 */
export interface ProposalCountEntryAmino {
  thread_id?: string;
  sentinel?: string;
  count?: string;
}
export interface ProposalCountEntryAminoMsg {
  type: "/sparkdream.forum.v1.ProposalCountEntry";
  value: ProposalCountEntryAmino;
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PromotionQueueEntry
 */
export interface PromotionQueueEntry {
  address: string;
  enqueuedAt: bigint;
}
export interface PromotionQueueEntryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.PromotionQueueEntry";
  value: Uint8Array;
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PromotionQueueEntry
 */
export interface PromotionQueueEntryAmino {
  address?: string;
  enqueued_at?: string;
}
export interface PromotionQueueEntryAminoMsg {
  type: "/sparkdream.forum.v1.PromotionQueueEntry";
  value: PromotionQueueEntryAmino;
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
    postCount: BigInt(0),
    proposalCountMap: [],
    postConvictionStakeList: [],
    postConvictionStakeCount: BigInt(0),
    postVoteList: [],
    forumRepEpochCounterList: [],
    pendingStakeSlashList: [],
    promotionQueue: [],
    tagPruneQueue: []
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
    for (const v of message.proposalCountMap) {
      ProposalCountEntry.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.postConvictionStakeList) {
      PostConvictionStake.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.postConvictionStakeCount !== BigInt(0)) {
      writer.uint32(152).uint64(message.postConvictionStakeCount);
    }
    for (const v of message.postVoteList) {
      PostVoteEntry.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.forumRepEpochCounterList) {
      ForumRepEpochCounterEntry.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.pendingStakeSlashList) {
      PendingStakeSlash.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.promotionQueue) {
      PromotionQueueEntry.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.tagPruneQueue) {
      TagPruneEntry.encode(v!, writer.uint32(194).fork()).ldelim();
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
        case 17:
          message.proposalCountMap.push(ProposalCountEntry.decode(reader, reader.uint32()));
          break;
        case 18:
          message.postConvictionStakeList.push(PostConvictionStake.decode(reader, reader.uint32()));
          break;
        case 19:
          message.postConvictionStakeCount = reader.uint64();
          break;
        case 20:
          message.postVoteList.push(PostVoteEntry.decode(reader, reader.uint32()));
          break;
        case 21:
          message.forumRepEpochCounterList.push(ForumRepEpochCounterEntry.decode(reader, reader.uint32()));
          break;
        case 22:
          message.pendingStakeSlashList.push(PendingStakeSlash.decode(reader, reader.uint32()));
          break;
        case 23:
          message.promotionQueue.push(PromotionQueueEntry.decode(reader, reader.uint32()));
          break;
        case 24:
          message.tagPruneQueue.push(TagPruneEntry.decode(reader, reader.uint32()));
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
    message.proposalCountMap = object.proposalCountMap?.map(e => ProposalCountEntry.fromPartial(e)) || [];
    message.postConvictionStakeList = object.postConvictionStakeList?.map(e => PostConvictionStake.fromPartial(e)) || [];
    message.postConvictionStakeCount = object.postConvictionStakeCount !== undefined && object.postConvictionStakeCount !== null ? BigInt(object.postConvictionStakeCount.toString()) : BigInt(0);
    message.postVoteList = object.postVoteList?.map(e => PostVoteEntry.fromPartial(e)) || [];
    message.forumRepEpochCounterList = object.forumRepEpochCounterList?.map(e => ForumRepEpochCounterEntry.fromPartial(e)) || [];
    message.pendingStakeSlashList = object.pendingStakeSlashList?.map(e => PendingStakeSlash.fromPartial(e)) || [];
    message.promotionQueue = object.promotionQueue?.map(e => PromotionQueueEntry.fromPartial(e)) || [];
    message.tagPruneQueue = object.tagPruneQueue?.map(e => TagPruneEntry.fromPartial(e)) || [];
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
    message.proposalCountMap = object.proposal_count_map?.map(e => ProposalCountEntry.fromAmino(e)) || [];
    message.postConvictionStakeList = object.post_conviction_stake_list?.map(e => PostConvictionStake.fromAmino(e)) || [];
    if (object.post_conviction_stake_count !== undefined && object.post_conviction_stake_count !== null) {
      message.postConvictionStakeCount = BigInt(object.post_conviction_stake_count);
    }
    message.postVoteList = object.post_vote_list?.map(e => PostVoteEntry.fromAmino(e)) || [];
    message.forumRepEpochCounterList = object.forum_rep_epoch_counter_list?.map(e => ForumRepEpochCounterEntry.fromAmino(e)) || [];
    message.pendingStakeSlashList = object.pending_stake_slash_list?.map(e => PendingStakeSlash.fromAmino(e)) || [];
    message.promotionQueue = object.promotion_queue?.map(e => PromotionQueueEntry.fromAmino(e)) || [];
    message.tagPruneQueue = object.tag_prune_queue?.map(e => TagPruneEntry.fromAmino(e)) || [];
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
    if (message.proposalCountMap) {
      obj.proposal_count_map = message.proposalCountMap.map(e => e ? ProposalCountEntry.toAmino(e) : undefined);
    } else {
      obj.proposal_count_map = message.proposalCountMap;
    }
    if (message.postConvictionStakeList) {
      obj.post_conviction_stake_list = message.postConvictionStakeList.map(e => e ? PostConvictionStake.toAmino(e) : undefined);
    } else {
      obj.post_conviction_stake_list = message.postConvictionStakeList;
    }
    obj.post_conviction_stake_count = message.postConvictionStakeCount !== BigInt(0) ? message.postConvictionStakeCount?.toString() : undefined;
    if (message.postVoteList) {
      obj.post_vote_list = message.postVoteList.map(e => e ? PostVoteEntry.toAmino(e) : undefined);
    } else {
      obj.post_vote_list = message.postVoteList;
    }
    if (message.forumRepEpochCounterList) {
      obj.forum_rep_epoch_counter_list = message.forumRepEpochCounterList.map(e => e ? ForumRepEpochCounterEntry.toAmino(e) : undefined);
    } else {
      obj.forum_rep_epoch_counter_list = message.forumRepEpochCounterList;
    }
    if (message.pendingStakeSlashList) {
      obj.pending_stake_slash_list = message.pendingStakeSlashList.map(e => e ? PendingStakeSlash.toAmino(e) : undefined);
    } else {
      obj.pending_stake_slash_list = message.pendingStakeSlashList;
    }
    if (message.promotionQueue) {
      obj.promotion_queue = message.promotionQueue.map(e => e ? PromotionQueueEntry.toAmino(e) : undefined);
    } else {
      obj.promotion_queue = message.promotionQueue;
    }
    if (message.tagPruneQueue) {
      obj.tag_prune_queue = message.tagPruneQueue.map(e => e ? TagPruneEntry.toAmino(e) : undefined);
    } else {
      obj.tag_prune_queue = message.tagPruneQueue;
    }
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
function createBaseTagPruneEntry(): TagPruneEntry {
  return {
    tag: "",
    nextPostId: BigInt(0)
  };
}
/**
 * TagPruneEntry is one in-flight tag prune: the removed tag and the next
 * post id to scan.
 * @name TagPruneEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.TagPruneEntry
 */
export const TagPruneEntry = {
  typeUrl: "/sparkdream.forum.v1.TagPruneEntry",
  encode(message: TagPruneEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.nextPostId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPostId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagPruneEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagPruneEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.nextPostId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagPruneEntry>): TagPruneEntry {
    const message = createBaseTagPruneEntry();
    message.tag = object.tag ?? "";
    message.nextPostId = object.nextPostId !== undefined && object.nextPostId !== null ? BigInt(object.nextPostId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TagPruneEntryAmino): TagPruneEntry {
    const message = createBaseTagPruneEntry();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.next_post_id !== undefined && object.next_post_id !== null) {
      message.nextPostId = BigInt(object.next_post_id);
    }
    return message;
  },
  toAmino(message: TagPruneEntry): TagPruneEntryAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.next_post_id = message.nextPostId !== BigInt(0) ? message.nextPostId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TagPruneEntryAminoMsg): TagPruneEntry {
    return TagPruneEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: TagPruneEntryProtoMsg): TagPruneEntry {
    return TagPruneEntry.decode(message.value);
  },
  toProto(message: TagPruneEntry): Uint8Array {
    return TagPruneEntry.encode(message).finish();
  },
  toProtoMsg(message: TagPruneEntry): TagPruneEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.TagPruneEntry",
      value: TagPruneEntry.encode(message).finish()
    };
  }
};
function createBasePendingStakeSlash(): PendingStakeSlash {
  return {
    postId: BigInt(0),
    author: ""
  };
}
/**
 * PendingStakeSlash is a post whose conviction stakes are still to be
 * slashed, with the author the reputation is clawed back from (kept here
 * because the post itself may be pruned before the slash finishes).
 * @name PendingStakeSlash
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PendingStakeSlash
 */
export const PendingStakeSlash = {
  typeUrl: "/sparkdream.forum.v1.PendingStakeSlash",
  encode(message: PendingStakeSlash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.author !== "") {
      writer.uint32(18).string(message.author);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingStakeSlash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingStakeSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.author = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingStakeSlash>): PendingStakeSlash {
    const message = createBasePendingStakeSlash();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.author = object.author ?? "";
    return message;
  },
  fromAmino(object: PendingStakeSlashAmino): PendingStakeSlash {
    const message = createBasePendingStakeSlash();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    return message;
  },
  toAmino(message: PendingStakeSlash): PendingStakeSlashAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.author = message.author === "" ? undefined : message.author;
    return obj;
  },
  fromAminoMsg(object: PendingStakeSlashAminoMsg): PendingStakeSlash {
    return PendingStakeSlash.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingStakeSlashProtoMsg): PendingStakeSlash {
    return PendingStakeSlash.decode(message.value);
  },
  toProto(message: PendingStakeSlash): Uint8Array {
    return PendingStakeSlash.encode(message).finish();
  },
  toProtoMsg(message: PendingStakeSlash): PendingStakeSlashProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.PendingStakeSlash",
      value: PendingStakeSlash.encode(message).finish()
    };
  }
};
function createBasePostVoteEntry(): PostVoteEntry {
  return {
    postId: BigInt(0),
    voter: ""
  };
}
/**
 * PostVoteEntry is one (post_id, voter) dedup key of the PostVote set.
 * @name PostVoteEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostVoteEntry
 */
export const PostVoteEntry = {
  typeUrl: "/sparkdream.forum.v1.PostVoteEntry",
  encode(message: PostVoteEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PostVoteEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostVoteEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PostVoteEntry>): PostVoteEntry {
    const message = createBasePostVoteEntry();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: PostVoteEntryAmino): PostVoteEntry {
    const message = createBasePostVoteEntry();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: PostVoteEntry): PostVoteEntryAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: PostVoteEntryAminoMsg): PostVoteEntry {
    return PostVoteEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PostVoteEntryProtoMsg): PostVoteEntry {
    return PostVoteEntry.decode(message.value);
  },
  toProto(message: PostVoteEntry): Uint8Array {
    return PostVoteEntry.encode(message).finish();
  },
  toProtoMsg(message: PostVoteEntry): PostVoteEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.PostVoteEntry",
      value: PostVoteEntry.encode(message).finish()
    };
  }
};
function createBaseForumRepEpochCounterEntry(): ForumRepEpochCounterEntry {
  return {
    author: "",
    tag: "",
    counter: ForumRepEpochCounter.fromPartial({})
  };
}
/**
 * ForumRepEpochCounterEntry is one (author, tag) -> ForumRepEpochCounter
 * tuple, flattened for genesis import/export.
 * @name ForumRepEpochCounterEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumRepEpochCounterEntry
 */
export const ForumRepEpochCounterEntry = {
  typeUrl: "/sparkdream.forum.v1.ForumRepEpochCounterEntry",
  encode(message: ForumRepEpochCounterEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.author !== "") {
      writer.uint32(10).string(message.author);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.counter !== undefined) {
      ForumRepEpochCounter.encode(message.counter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForumRepEpochCounterEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForumRepEpochCounterEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.counter = ForumRepEpochCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForumRepEpochCounterEntry>): ForumRepEpochCounterEntry {
    const message = createBaseForumRepEpochCounterEntry();
    message.author = object.author ?? "";
    message.tag = object.tag ?? "";
    message.counter = object.counter !== undefined && object.counter !== null ? ForumRepEpochCounter.fromPartial(object.counter) : undefined;
    return message;
  },
  fromAmino(object: ForumRepEpochCounterEntryAmino): ForumRepEpochCounterEntry {
    const message = createBaseForumRepEpochCounterEntry();
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = ForumRepEpochCounter.fromAmino(object.counter);
    }
    return message;
  },
  toAmino(message: ForumRepEpochCounterEntry): ForumRepEpochCounterEntryAmino {
    const obj: any = {};
    obj.author = message.author === "" ? undefined : message.author;
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.counter = message.counter ? ForumRepEpochCounter.toAmino(message.counter) : undefined;
    return obj;
  },
  fromAminoMsg(object: ForumRepEpochCounterEntryAminoMsg): ForumRepEpochCounterEntry {
    return ForumRepEpochCounterEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ForumRepEpochCounterEntryProtoMsg): ForumRepEpochCounterEntry {
    return ForumRepEpochCounterEntry.decode(message.value);
  },
  toProto(message: ForumRepEpochCounterEntry): Uint8Array {
    return ForumRepEpochCounterEntry.encode(message).finish();
  },
  toProtoMsg(message: ForumRepEpochCounterEntry): ForumRepEpochCounterEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ForumRepEpochCounterEntry",
      value: ForumRepEpochCounterEntry.encode(message).finish()
    };
  }
};
function createBaseProposalCountEntry(): ProposalCountEntry {
  return {
    threadId: BigInt(0),
    sentinel: "",
    count: BigInt(0)
  };
}
/**
 * ProposalCountEntry is one (thread_id, sentinel) -> count tuple of the
 * accepted-reply proposal cap counter, flattened for genesis import/export.
 * @name ProposalCountEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ProposalCountEntry
 */
export const ProposalCountEntry = {
  typeUrl: "/sparkdream.forum.v1.ProposalCountEntry",
  encode(message: ProposalCountEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.sentinel !== "") {
      writer.uint32(18).string(message.sentinel);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalCountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.sentinel = reader.string();
          break;
        case 3:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProposalCountEntry>): ProposalCountEntry {
    const message = createBaseProposalCountEntry();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.sentinel = object.sentinel ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProposalCountEntryAmino): ProposalCountEntry {
    const message = createBaseProposalCountEntry();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: ProposalCountEntry): ProposalCountEntryAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalCountEntryAminoMsg): ProposalCountEntry {
    return ProposalCountEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalCountEntryProtoMsg): ProposalCountEntry {
    return ProposalCountEntry.decode(message.value);
  },
  toProto(message: ProposalCountEntry): Uint8Array {
    return ProposalCountEntry.encode(message).finish();
  },
  toProtoMsg(message: ProposalCountEntry): ProposalCountEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ProposalCountEntry",
      value: ProposalCountEntry.encode(message).finish()
    };
  }
};
function createBasePromotionQueueEntry(): PromotionQueueEntry {
  return {
    address: "",
    enqueuedAt: BigInt(0)
  };
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PromotionQueueEntry
 */
export const PromotionQueueEntry = {
  typeUrl: "/sparkdream.forum.v1.PromotionQueueEntry",
  encode(message: PromotionQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.enqueuedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.enqueuedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PromotionQueueEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromotionQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.enqueuedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PromotionQueueEntry>): PromotionQueueEntry {
    const message = createBasePromotionQueueEntry();
    message.address = object.address ?? "";
    message.enqueuedAt = object.enqueuedAt !== undefined && object.enqueuedAt !== null ? BigInt(object.enqueuedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PromotionQueueEntryAmino): PromotionQueueEntry {
    const message = createBasePromotionQueueEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.enqueued_at !== undefined && object.enqueued_at !== null) {
      message.enqueuedAt = BigInt(object.enqueued_at);
    }
    return message;
  },
  toAmino(message: PromotionQueueEntry): PromotionQueueEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.enqueued_at = message.enqueuedAt !== BigInt(0) ? message.enqueuedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PromotionQueueEntryAminoMsg): PromotionQueueEntry {
    return PromotionQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PromotionQueueEntryProtoMsg): PromotionQueueEntry {
    return PromotionQueueEntry.decode(message.value);
  },
  toProto(message: PromotionQueueEntry): Uint8Array {
    return PromotionQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: PromotionQueueEntry): PromotionQueueEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.PromotionQueueEntry",
      value: PromotionQueueEntry.encode(message).finish()
    };
  }
};