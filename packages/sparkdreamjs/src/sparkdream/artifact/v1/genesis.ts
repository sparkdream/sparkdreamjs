//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Class, ClassAmino, Token, TokenAmino, PublicMintCountEntry, PublicMintCountEntryAmino, ReceivePolicyEntry, ReceivePolicyEntryAmino, PendingTransfer, PendingTransferAmino, PendingMint, PendingMintAmino, Listing, ListingAmino, PendingClassOwner, PendingClassOwnerAmino, HideRecord, HideRecordAmino, QueueCursor, QueueCursorAmino, SentinelDailyHideEntry, SentinelDailyHideEntryAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the artifact module's genesis state. Derived indexes
 * (owner indexes, inbox/outbox, counters, expiry indexes) are rebuilt on
 * import and never exported.
 * @name GenesisState
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  classSeq: bigint;
  hideSeq: bigint;
  classes: Class[];
  tokens: Token[];
  publicMintCounts: PublicMintCountEntry[];
  receivePolicies: ReceivePolicyEntry[];
  pendingTransfers: PendingTransfer[];
  pendingMints: PendingMint[];
  listings: Listing[];
  pendingClassOwners: PendingClassOwner[];
  hideRecords: HideRecord[];
  classCancelQueue: QueueCursor[];
  classScrubQueue: QueueCursor[];
  sentinelDailyHides: SentinelDailyHideEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the artifact module's genesis state. Derived indexes
 * (owner indexes, inbox/outbox, counters, expiry indexes) are rebuilt on
 * import and never exported.
 * @name GenesisStateAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  class_seq?: string;
  hide_seq?: string;
  classes?: ClassAmino[];
  tokens?: TokenAmino[];
  public_mint_counts?: PublicMintCountEntryAmino[];
  receive_policies?: ReceivePolicyEntryAmino[];
  pending_transfers?: PendingTransferAmino[];
  pending_mints?: PendingMintAmino[];
  listings?: ListingAmino[];
  pending_class_owners?: PendingClassOwnerAmino[];
  hide_records?: HideRecordAmino[];
  class_cancel_queue?: QueueCursorAmino[];
  class_scrub_queue?: QueueCursorAmino[];
  sentinel_daily_hides?: SentinelDailyHideEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.artifact.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    classSeq: BigInt(0),
    hideSeq: BigInt(0),
    classes: [],
    tokens: [],
    publicMintCounts: [],
    receivePolicies: [],
    pendingTransfers: [],
    pendingMints: [],
    listings: [],
    pendingClassOwners: [],
    hideRecords: [],
    classCancelQueue: [],
    classScrubQueue: [],
    sentinelDailyHides: []
  };
}
/**
 * GenesisState defines the artifact module's genesis state. Derived indexes
 * (owner indexes, inbox/outbox, counters, expiry indexes) are rebuilt on
 * import and never exported.
 * @name GenesisState
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.artifact.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.classSeq !== BigInt(0)) {
      writer.uint32(16).uint64(message.classSeq);
    }
    if (message.hideSeq !== BigInt(0)) {
      writer.uint32(24).uint64(message.hideSeq);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.publicMintCounts) {
      PublicMintCountEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.receivePolicies) {
      ReceivePolicyEntry.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.pendingTransfers) {
      PendingTransfer.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pendingMints) {
      PendingMint.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.pendingClassOwners) {
      PendingClassOwner.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.hideRecords) {
      HideRecord.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.classCancelQueue) {
      QueueCursor.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.classScrubQueue) {
      QueueCursor.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.sentinelDailyHides) {
      SentinelDailyHideEntry.encode(v!, writer.uint32(122).fork()).ldelim();
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
          message.classSeq = reader.uint64();
          break;
        case 3:
          message.hideSeq = reader.uint64();
          break;
        case 4:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 6:
          message.publicMintCounts.push(PublicMintCountEntry.decode(reader, reader.uint32()));
          break;
        case 7:
          message.receivePolicies.push(ReceivePolicyEntry.decode(reader, reader.uint32()));
          break;
        case 8:
          message.pendingTransfers.push(PendingTransfer.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pendingMints.push(PendingMint.decode(reader, reader.uint32()));
          break;
        case 10:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;
        case 11:
          message.pendingClassOwners.push(PendingClassOwner.decode(reader, reader.uint32()));
          break;
        case 12:
          message.hideRecords.push(HideRecord.decode(reader, reader.uint32()));
          break;
        case 13:
          message.classCancelQueue.push(QueueCursor.decode(reader, reader.uint32()));
          break;
        case 14:
          message.classScrubQueue.push(QueueCursor.decode(reader, reader.uint32()));
          break;
        case 15:
          message.sentinelDailyHides.push(SentinelDailyHideEntry.decode(reader, reader.uint32()));
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
    message.classSeq = object.classSeq !== undefined && object.classSeq !== null ? BigInt(object.classSeq.toString()) : BigInt(0);
    message.hideSeq = object.hideSeq !== undefined && object.hideSeq !== null ? BigInt(object.hideSeq.toString()) : BigInt(0);
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.publicMintCounts = object.publicMintCounts?.map(e => PublicMintCountEntry.fromPartial(e)) || [];
    message.receivePolicies = object.receivePolicies?.map(e => ReceivePolicyEntry.fromPartial(e)) || [];
    message.pendingTransfers = object.pendingTransfers?.map(e => PendingTransfer.fromPartial(e)) || [];
    message.pendingMints = object.pendingMints?.map(e => PendingMint.fromPartial(e)) || [];
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pendingClassOwners = object.pendingClassOwners?.map(e => PendingClassOwner.fromPartial(e)) || [];
    message.hideRecords = object.hideRecords?.map(e => HideRecord.fromPartial(e)) || [];
    message.classCancelQueue = object.classCancelQueue?.map(e => QueueCursor.fromPartial(e)) || [];
    message.classScrubQueue = object.classScrubQueue?.map(e => QueueCursor.fromPartial(e)) || [];
    message.sentinelDailyHides = object.sentinelDailyHides?.map(e => SentinelDailyHideEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.class_seq !== undefined && object.class_seq !== null) {
      message.classSeq = BigInt(object.class_seq);
    }
    if (object.hide_seq !== undefined && object.hide_seq !== null) {
      message.hideSeq = BigInt(object.hide_seq);
    }
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    message.tokens = object.tokens?.map(e => Token.fromAmino(e)) || [];
    message.publicMintCounts = object.public_mint_counts?.map(e => PublicMintCountEntry.fromAmino(e)) || [];
    message.receivePolicies = object.receive_policies?.map(e => ReceivePolicyEntry.fromAmino(e)) || [];
    message.pendingTransfers = object.pending_transfers?.map(e => PendingTransfer.fromAmino(e)) || [];
    message.pendingMints = object.pending_mints?.map(e => PendingMint.fromAmino(e)) || [];
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    message.pendingClassOwners = object.pending_class_owners?.map(e => PendingClassOwner.fromAmino(e)) || [];
    message.hideRecords = object.hide_records?.map(e => HideRecord.fromAmino(e)) || [];
    message.classCancelQueue = object.class_cancel_queue?.map(e => QueueCursor.fromAmino(e)) || [];
    message.classScrubQueue = object.class_scrub_queue?.map(e => QueueCursor.fromAmino(e)) || [];
    message.sentinelDailyHides = object.sentinel_daily_hides?.map(e => SentinelDailyHideEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.class_seq = message.classSeq !== BigInt(0) ? message.classSeq?.toString() : undefined;
    obj.hide_seq = message.hideSeq !== BigInt(0) ? message.hideSeq?.toString() : undefined;
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    if (message.publicMintCounts) {
      obj.public_mint_counts = message.publicMintCounts.map(e => e ? PublicMintCountEntry.toAmino(e) : undefined);
    } else {
      obj.public_mint_counts = message.publicMintCounts;
    }
    if (message.receivePolicies) {
      obj.receive_policies = message.receivePolicies.map(e => e ? ReceivePolicyEntry.toAmino(e) : undefined);
    } else {
      obj.receive_policies = message.receivePolicies;
    }
    if (message.pendingTransfers) {
      obj.pending_transfers = message.pendingTransfers.map(e => e ? PendingTransfer.toAmino(e) : undefined);
    } else {
      obj.pending_transfers = message.pendingTransfers;
    }
    if (message.pendingMints) {
      obj.pending_mints = message.pendingMints.map(e => e ? PendingMint.toAmino(e) : undefined);
    } else {
      obj.pending_mints = message.pendingMints;
    }
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = message.listings;
    }
    if (message.pendingClassOwners) {
      obj.pending_class_owners = message.pendingClassOwners.map(e => e ? PendingClassOwner.toAmino(e) : undefined);
    } else {
      obj.pending_class_owners = message.pendingClassOwners;
    }
    if (message.hideRecords) {
      obj.hide_records = message.hideRecords.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_records = message.hideRecords;
    }
    if (message.classCancelQueue) {
      obj.class_cancel_queue = message.classCancelQueue.map(e => e ? QueueCursor.toAmino(e) : undefined);
    } else {
      obj.class_cancel_queue = message.classCancelQueue;
    }
    if (message.classScrubQueue) {
      obj.class_scrub_queue = message.classScrubQueue.map(e => e ? QueueCursor.toAmino(e) : undefined);
    } else {
      obj.class_scrub_queue = message.classScrubQueue;
    }
    if (message.sentinelDailyHides) {
      obj.sentinel_daily_hides = message.sentinelDailyHides.map(e => e ? SentinelDailyHideEntry.toAmino(e) : undefined);
    } else {
      obj.sentinel_daily_hides = message.sentinelDailyHides;
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
      typeUrl: "/sparkdream.artifact.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};