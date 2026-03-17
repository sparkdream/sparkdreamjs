//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Collection, CollectionAmino, Item, ItemAmino, Collaborator, CollaboratorAmino, Curator, CuratorAmino, CurationReview, CurationReviewAmino, CurationSummary, CurationSummaryAmino, SponsorshipRequest, SponsorshipRequestAmino, CollectionFlag, CollectionFlagAmino, HideRecord, HideRecordAmino, Endorsement, EndorsementAmino } from "./types";
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
  curators: Curator[];
  curationReviews: CurationReview[];
  curationReviewCount: bigint;
  curationSummaries: CurationSummary[];
  sponsorshipRequests: SponsorshipRequest[];
  flags: CollectionFlag[];
  hideRecords: HideRecord[];
  hideRecordCount: bigint;
  endorsements: Endorsement[];
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
  curators?: CuratorAmino[];
  curation_reviews?: CurationReviewAmino[];
  curation_review_count?: string;
  curation_summaries?: CurationSummaryAmino[];
  sponsorship_requests?: SponsorshipRequestAmino[];
  flags?: CollectionFlagAmino[];
  hide_records?: HideRecordAmino[];
  hide_record_count?: string;
  endorsements?: EndorsementAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.collect.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    collections: [],
    collectionCount: BigInt(0),
    items: [],
    itemCount: BigInt(0),
    collaborators: [],
    curators: [],
    curationReviews: [],
    curationReviewCount: BigInt(0),
    curationSummaries: [],
    sponsorshipRequests: [],
    flags: [],
    hideRecords: [],
    hideRecordCount: BigInt(0),
    endorsements: []
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
    for (const v of message.curators) {
      Curator.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.curators.push(Curator.decode(reader, reader.uint32()));
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
    message.curators = object.curators?.map(e => Curator.fromPartial(e)) || [];
    message.curationReviews = object.curationReviews?.map(e => CurationReview.fromPartial(e)) || [];
    message.curationReviewCount = object.curationReviewCount !== undefined && object.curationReviewCount !== null ? BigInt(object.curationReviewCount.toString()) : BigInt(0);
    message.curationSummaries = object.curationSummaries?.map(e => CurationSummary.fromPartial(e)) || [];
    message.sponsorshipRequests = object.sponsorshipRequests?.map(e => SponsorshipRequest.fromPartial(e)) || [];
    message.flags = object.flags?.map(e => CollectionFlag.fromPartial(e)) || [];
    message.hideRecords = object.hideRecords?.map(e => HideRecord.fromPartial(e)) || [];
    message.hideRecordCount = object.hideRecordCount !== undefined && object.hideRecordCount !== null ? BigInt(object.hideRecordCount.toString()) : BigInt(0);
    message.endorsements = object.endorsements?.map(e => Endorsement.fromPartial(e)) || [];
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
    message.curators = object.curators?.map(e => Curator.fromAmino(e)) || [];
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
    if (message.curators) {
      obj.curators = message.curators.map(e => e ? Curator.toAmino(e) : undefined);
    } else {
      obj.curators = message.curators;
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