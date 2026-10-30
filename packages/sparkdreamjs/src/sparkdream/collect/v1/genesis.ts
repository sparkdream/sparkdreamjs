//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Collection, CollectionAmino, Item, ItemAmino, Collaborator, CollaboratorAmino, CurationReview, CurationReviewAmino, CurationSummary, CurationSummaryAmino, SponsorshipRequest, SponsorshipRequestAmino, CollectionFlag, CollectionFlagAmino, HideRecord, HideRecordAmino, Endorsement, EndorsementAmino } from "./types";
import { CuratorActivity, CuratorActivityAmino } from "./curator_activity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the collect module's genesis state.
 * @name GenesisState
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  collections: Collection[];
  collectionCount: bigint;
  items: Item[];
  itemCount: bigint;
  collaborators: Collaborator[];
  curatorActivities: CuratorActivity[];
  curationReviews: CurationReview[];
  curationReviewCount: bigint;
  curationSummaries: CurationSummary[];
  sponsorshipRequests: SponsorshipRequest[];
  flags: CollectionFlag[];
  hideRecords: HideRecord[];
  hideRecordCount: bigint;
  endorsements: Endorsement[];
  /**
   * reaction_dedups persists the per-(voter, target) reaction marker
   * (1 = upvote, 2 = downvote) so a voter cannot react again after import.
   */
  reactionDedups: ReactionCounterEntry[];
  /**
   * reaction_limits persists the per-(address, day, category) daily counters.
   */
  reactionLimits: ReactionCounterEntry[];
  /**
   * Not-adjudicated timeout schedule of the pending curation challenges.
   * A pending challenge without an entry gets the latest possible deadline
   * (review creation + challenge window + resolution timeout).
   */
  curationChallengeDeadlines: CurationChallengeDeadline[];
  /**
   * Members queued for eager promotion of their ephemeral content (admitted
   * after posting). Hook-driven, so carried verbatim with the enqueue height;
   * without it an import would leave that content to the lazy TTL-time path.
   */
  promotionQueue: PromotionQueueEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.collect.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the collect module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  collections?: CollectionAmino[];
  collection_count?: string;
  items?: ItemAmino[];
  item_count?: string;
  collaborators?: CollaboratorAmino[];
  curator_activities?: CuratorActivityAmino[];
  curation_reviews?: CurationReviewAmino[];
  curation_review_count?: string;
  curation_summaries?: CurationSummaryAmino[];
  sponsorship_requests?: SponsorshipRequestAmino[];
  flags?: CollectionFlagAmino[];
  hide_records?: HideRecordAmino[];
  hide_record_count?: string;
  endorsements?: EndorsementAmino[];
  /**
   * reaction_dedups persists the per-(voter, target) reaction marker
   * (1 = upvote, 2 = downvote) so a voter cannot react again after import.
   */
  reaction_dedups?: ReactionCounterEntryAmino[];
  /**
   * reaction_limits persists the per-(address, day, category) daily counters.
   */
  reaction_limits?: ReactionCounterEntryAmino[];
  /**
   * Not-adjudicated timeout schedule of the pending curation challenges.
   * A pending challenge without an entry gets the latest possible deadline
   * (review creation + challenge window + resolution timeout).
   */
  curation_challenge_deadlines?: CurationChallengeDeadlineAmino[];
  /**
   * Members queued for eager promotion of their ephemeral content (admitted
   * after posting). Hook-driven, so carried verbatim with the enqueue height;
   * without it an import would leave that content to the lazy TTL-time path.
   */
  promotion_queue?: PromotionQueueEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.collect.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * CurationChallengeDeadline is the block height at which the pending
 * challenge on review_id resolves as not adjudicated.
 * @name CurationChallengeDeadline
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationChallengeDeadline
 */
export interface CurationChallengeDeadline {
  deadline: bigint;
  reviewId: bigint;
}
export interface CurationChallengeDeadlineProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CurationChallengeDeadline";
  value: Uint8Array;
}
/**
 * CurationChallengeDeadline is the block height at which the pending
 * challenge on review_id resolves as not adjudicated.
 * @name CurationChallengeDeadlineAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationChallengeDeadline
 */
export interface CurationChallengeDeadlineAmino {
  deadline?: string;
  review_id?: string;
}
export interface CurationChallengeDeadlineAminoMsg {
  type: "/sparkdream.collect.v1.CurationChallengeDeadline";
  value: CurationChallengeDeadlineAmino;
}
/**
 * ReactionCounterEntry is one string-keyed uint32 counter (ReactionDedup or
 * ReactionLimit), flattened for genesis import/export.
 * @name ReactionCounterEntry
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.ReactionCounterEntry
 */
export interface ReactionCounterEntry {
  key: string;
  value: number;
}
export interface ReactionCounterEntryProtoMsg {
  typeUrl: "/sparkdream.collect.v1.ReactionCounterEntry";
  value: Uint8Array;
}
/**
 * ReactionCounterEntry is one string-keyed uint32 counter (ReactionDedup or
 * ReactionLimit), flattened for genesis import/export.
 * @name ReactionCounterEntryAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.ReactionCounterEntry
 */
export interface ReactionCounterEntryAmino {
  key?: string;
  value?: number;
}
export interface ReactionCounterEntryAminoMsg {
  type: "/sparkdream.collect.v1.ReactionCounterEntry";
  value: ReactionCounterEntryAmino;
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntry
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.PromotionQueueEntry
 */
export interface PromotionQueueEntry {
  address: string;
  enqueuedAt: bigint;
}
export interface PromotionQueueEntryProtoMsg {
  typeUrl: "/sparkdream.collect.v1.PromotionQueueEntry";
  value: Uint8Array;
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntryAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.PromotionQueueEntry
 */
export interface PromotionQueueEntryAmino {
  address?: string;
  enqueued_at?: string;
}
export interface PromotionQueueEntryAminoMsg {
  type: "/sparkdream.collect.v1.PromotionQueueEntry";
  value: PromotionQueueEntryAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    collections: [],
    collectionCount: BigInt(0),
    items: [],
    itemCount: BigInt(0),
    collaborators: [],
    curatorActivities: [],
    curationReviews: [],
    curationReviewCount: BigInt(0),
    curationSummaries: [],
    sponsorshipRequests: [],
    flags: [],
    hideRecords: [],
    hideRecordCount: BigInt(0),
    endorsements: [],
    reactionDedups: [],
    reactionLimits: [],
    curationChallengeDeadlines: [],
    promotionQueue: []
  };
}
/**
 * GenesisState defines the collect module's genesis state.
 * @name GenesisState
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.collect.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.collectionCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.collectionCount);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.itemCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.itemCount);
    }
    for (const v of message.collaborators) {
      Collaborator.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.curatorActivities) {
      CuratorActivity.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.curationReviews) {
      CurationReview.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.curationReviewCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.curationReviewCount);
    }
    for (const v of message.curationSummaries) {
      CurationSummary.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.sponsorshipRequests) {
      SponsorshipRequest.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.flags) {
      CollectionFlag.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.hideRecords) {
      HideRecord.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.hideRecordCount !== BigInt(0)) {
      writer.uint32(112).uint64(message.hideRecordCount);
    }
    for (const v of message.endorsements) {
      Endorsement.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.reactionDedups) {
      ReactionCounterEntry.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.reactionLimits) {
      ReactionCounterEntry.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.curationChallengeDeadlines) {
      CurationChallengeDeadline.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.promotionQueue) {
      PromotionQueueEntry.encode(v!, writer.uint32(154).fork()).ldelim();
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
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 3:
          message.collectionCount = reader.uint64();
          break;
        case 4:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 5:
          message.itemCount = reader.uint64();
          break;
        case 6:
          message.collaborators.push(Collaborator.decode(reader, reader.uint32()));
          break;
        case 7:
          message.curatorActivities.push(CuratorActivity.decode(reader, reader.uint32()));
          break;
        case 8:
          message.curationReviews.push(CurationReview.decode(reader, reader.uint32()));
          break;
        case 9:
          message.curationReviewCount = reader.uint64();
          break;
        case 10:
          message.curationSummaries.push(CurationSummary.decode(reader, reader.uint32()));
          break;
        case 11:
          message.sponsorshipRequests.push(SponsorshipRequest.decode(reader, reader.uint32()));
          break;
        case 12:
          message.flags.push(CollectionFlag.decode(reader, reader.uint32()));
          break;
        case 13:
          message.hideRecords.push(HideRecord.decode(reader, reader.uint32()));
          break;
        case 14:
          message.hideRecordCount = reader.uint64();
          break;
        case 15:
          message.endorsements.push(Endorsement.decode(reader, reader.uint32()));
          break;
        case 16:
          message.reactionDedups.push(ReactionCounterEntry.decode(reader, reader.uint32()));
          break;
        case 17:
          message.reactionLimits.push(ReactionCounterEntry.decode(reader, reader.uint32()));
          break;
        case 18:
          message.curationChallengeDeadlines.push(CurationChallengeDeadline.decode(reader, reader.uint32()));
          break;
        case 19:
          message.promotionQueue.push(PromotionQueueEntry.decode(reader, reader.uint32()));
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
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.collectionCount = object.collectionCount !== undefined && object.collectionCount !== null ? BigInt(object.collectionCount.toString()) : BigInt(0);
    message.items = object.items?.map(e => Item.fromPartial(e)) || [];
    message.itemCount = object.itemCount !== undefined && object.itemCount !== null ? BigInt(object.itemCount.toString()) : BigInt(0);
    message.collaborators = object.collaborators?.map(e => Collaborator.fromPartial(e)) || [];
    message.curatorActivities = object.curatorActivities?.map(e => CuratorActivity.fromPartial(e)) || [];
    message.curationReviews = object.curationReviews?.map(e => CurationReview.fromPartial(e)) || [];
    message.curationReviewCount = object.curationReviewCount !== undefined && object.curationReviewCount !== null ? BigInt(object.curationReviewCount.toString()) : BigInt(0);
    message.curationSummaries = object.curationSummaries?.map(e => CurationSummary.fromPartial(e)) || [];
    message.sponsorshipRequests = object.sponsorshipRequests?.map(e => SponsorshipRequest.fromPartial(e)) || [];
    message.flags = object.flags?.map(e => CollectionFlag.fromPartial(e)) || [];
    message.hideRecords = object.hideRecords?.map(e => HideRecord.fromPartial(e)) || [];
    message.hideRecordCount = object.hideRecordCount !== undefined && object.hideRecordCount !== null ? BigInt(object.hideRecordCount.toString()) : BigInt(0);
    message.endorsements = object.endorsements?.map(e => Endorsement.fromPartial(e)) || [];
    message.reactionDedups = object.reactionDedups?.map(e => ReactionCounterEntry.fromPartial(e)) || [];
    message.reactionLimits = object.reactionLimits?.map(e => ReactionCounterEntry.fromPartial(e)) || [];
    message.curationChallengeDeadlines = object.curationChallengeDeadlines?.map(e => CurationChallengeDeadline.fromPartial(e)) || [];
    message.promotionQueue = object.promotionQueue?.map(e => PromotionQueueEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
    if (object.collection_count !== undefined && object.collection_count !== null) {
      message.collectionCount = BigInt(object.collection_count);
    }
    message.items = object.items?.map(e => Item.fromAmino(e)) || [];
    if (object.item_count !== undefined && object.item_count !== null) {
      message.itemCount = BigInt(object.item_count);
    }
    message.collaborators = object.collaborators?.map(e => Collaborator.fromAmino(e)) || [];
    message.curatorActivities = object.curator_activities?.map(e => CuratorActivity.fromAmino(e)) || [];
    message.curationReviews = object.curation_reviews?.map(e => CurationReview.fromAmino(e)) || [];
    if (object.curation_review_count !== undefined && object.curation_review_count !== null) {
      message.curationReviewCount = BigInt(object.curation_review_count);
    }
    message.curationSummaries = object.curation_summaries?.map(e => CurationSummary.fromAmino(e)) || [];
    message.sponsorshipRequests = object.sponsorship_requests?.map(e => SponsorshipRequest.fromAmino(e)) || [];
    message.flags = object.flags?.map(e => CollectionFlag.fromAmino(e)) || [];
    message.hideRecords = object.hide_records?.map(e => HideRecord.fromAmino(e)) || [];
    if (object.hide_record_count !== undefined && object.hide_record_count !== null) {
      message.hideRecordCount = BigInt(object.hide_record_count);
    }
    message.endorsements = object.endorsements?.map(e => Endorsement.fromAmino(e)) || [];
    message.reactionDedups = object.reaction_dedups?.map(e => ReactionCounterEntry.fromAmino(e)) || [];
    message.reactionLimits = object.reaction_limits?.map(e => ReactionCounterEntry.fromAmino(e)) || [];
    message.curationChallengeDeadlines = object.curation_challenge_deadlines?.map(e => CurationChallengeDeadline.fromAmino(e)) || [];
    message.promotionQueue = object.promotion_queue?.map(e => PromotionQueueEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
    } else {
      obj.collections = message.collections;
    }
    obj.collection_count = message.collectionCount !== BigInt(0) ? message.collectionCount?.toString() : undefined;
    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    obj.item_count = message.itemCount !== BigInt(0) ? message.itemCount?.toString() : undefined;
    if (message.collaborators) {
      obj.collaborators = message.collaborators.map(e => e ? Collaborator.toAmino(e) : undefined);
    } else {
      obj.collaborators = message.collaborators;
    }
    if (message.curatorActivities) {
      obj.curator_activities = message.curatorActivities.map(e => e ? CuratorActivity.toAmino(e) : undefined);
    } else {
      obj.curator_activities = message.curatorActivities;
    }
    if (message.curationReviews) {
      obj.curation_reviews = message.curationReviews.map(e => e ? CurationReview.toAmino(e) : undefined);
    } else {
      obj.curation_reviews = message.curationReviews;
    }
    obj.curation_review_count = message.curationReviewCount !== BigInt(0) ? message.curationReviewCount?.toString() : undefined;
    if (message.curationSummaries) {
      obj.curation_summaries = message.curationSummaries.map(e => e ? CurationSummary.toAmino(e) : undefined);
    } else {
      obj.curation_summaries = message.curationSummaries;
    }
    if (message.sponsorshipRequests) {
      obj.sponsorship_requests = message.sponsorshipRequests.map(e => e ? SponsorshipRequest.toAmino(e) : undefined);
    } else {
      obj.sponsorship_requests = message.sponsorshipRequests;
    }
    if (message.flags) {
      obj.flags = message.flags.map(e => e ? CollectionFlag.toAmino(e) : undefined);
    } else {
      obj.flags = message.flags;
    }
    if (message.hideRecords) {
      obj.hide_records = message.hideRecords.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_records = message.hideRecords;
    }
    obj.hide_record_count = message.hideRecordCount !== BigInt(0) ? message.hideRecordCount?.toString() : undefined;
    if (message.endorsements) {
      obj.endorsements = message.endorsements.map(e => e ? Endorsement.toAmino(e) : undefined);
    } else {
      obj.endorsements = message.endorsements;
    }
    if (message.reactionDedups) {
      obj.reaction_dedups = message.reactionDedups.map(e => e ? ReactionCounterEntry.toAmino(e) : undefined);
    } else {
      obj.reaction_dedups = message.reactionDedups;
    }
    if (message.reactionLimits) {
      obj.reaction_limits = message.reactionLimits.map(e => e ? ReactionCounterEntry.toAmino(e) : undefined);
    } else {
      obj.reaction_limits = message.reactionLimits;
    }
    if (message.curationChallengeDeadlines) {
      obj.curation_challenge_deadlines = message.curationChallengeDeadlines.map(e => e ? CurationChallengeDeadline.toAmino(e) : undefined);
    } else {
      obj.curation_challenge_deadlines = message.curationChallengeDeadlines;
    }
    if (message.promotionQueue) {
      obj.promotion_queue = message.promotionQueue.map(e => e ? PromotionQueueEntry.toAmino(e) : undefined);
    } else {
      obj.promotion_queue = message.promotionQueue;
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
      typeUrl: "/sparkdream.collect.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseCurationChallengeDeadline(): CurationChallengeDeadline {
  return {
    deadline: BigInt(0),
    reviewId: BigInt(0)
  };
}
/**
 * CurationChallengeDeadline is the block height at which the pending
 * challenge on review_id resolves as not adjudicated.
 * @name CurationChallengeDeadline
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CurationChallengeDeadline
 */
export const CurationChallengeDeadline = {
  typeUrl: "/sparkdream.collect.v1.CurationChallengeDeadline",
  encode(message: CurationChallengeDeadline, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deadline !== BigInt(0)) {
      writer.uint32(8).int64(message.deadline);
    }
    if (message.reviewId !== BigInt(0)) {
      writer.uint32(16).uint64(message.reviewId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurationChallengeDeadline {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurationChallengeDeadline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deadline = reader.int64();
          break;
        case 2:
          message.reviewId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CurationChallengeDeadline>): CurationChallengeDeadline {
    const message = createBaseCurationChallengeDeadline();
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.reviewId = object.reviewId !== undefined && object.reviewId !== null ? BigInt(object.reviewId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CurationChallengeDeadlineAmino): CurationChallengeDeadline {
    const message = createBaseCurationChallengeDeadline();
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.review_id !== undefined && object.review_id !== null) {
      message.reviewId = BigInt(object.review_id);
    }
    return message;
  },
  toAmino(message: CurationChallengeDeadline): CurationChallengeDeadlineAmino {
    const obj: any = {};
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.review_id = message.reviewId !== BigInt(0) ? message.reviewId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CurationChallengeDeadlineAminoMsg): CurationChallengeDeadline {
    return CurationChallengeDeadline.fromAmino(object.value);
  },
  fromProtoMsg(message: CurationChallengeDeadlineProtoMsg): CurationChallengeDeadline {
    return CurationChallengeDeadline.decode(message.value);
  },
  toProto(message: CurationChallengeDeadline): Uint8Array {
    return CurationChallengeDeadline.encode(message).finish();
  },
  toProtoMsg(message: CurationChallengeDeadline): CurationChallengeDeadlineProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CurationChallengeDeadline",
      value: CurationChallengeDeadline.encode(message).finish()
    };
  }
};
function createBaseReactionCounterEntry(): ReactionCounterEntry {
  return {
    key: "",
    value: 0
  };
}
/**
 * ReactionCounterEntry is one string-keyed uint32 counter (ReactionDedup or
 * ReactionLimit), flattened for genesis import/export.
 * @name ReactionCounterEntry
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.ReactionCounterEntry
 */
export const ReactionCounterEntry = {
  typeUrl: "/sparkdream.collect.v1.ReactionCounterEntry",
  encode(message: ReactionCounterEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReactionCounterEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReactionCounterEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReactionCounterEntry>): ReactionCounterEntry {
    const message = createBaseReactionCounterEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object: ReactionCounterEntryAmino): ReactionCounterEntry {
    const message = createBaseReactionCounterEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ReactionCounterEntry): ReactionCounterEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ReactionCounterEntryAminoMsg): ReactionCounterEntry {
    return ReactionCounterEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ReactionCounterEntryProtoMsg): ReactionCounterEntry {
    return ReactionCounterEntry.decode(message.value);
  },
  toProto(message: ReactionCounterEntry): Uint8Array {
    return ReactionCounterEntry.encode(message).finish();
  },
  toProtoMsg(message: ReactionCounterEntry): ReactionCounterEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.ReactionCounterEntry",
      value: ReactionCounterEntry.encode(message).finish()
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
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.PromotionQueueEntry
 */
export const PromotionQueueEntry = {
  typeUrl: "/sparkdream.collect.v1.PromotionQueueEntry",
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
      typeUrl: "/sparkdream.collect.v1.PromotionQueueEntry",
      value: PromotionQueueEntry.encode(message).finish()
    };
  }
};