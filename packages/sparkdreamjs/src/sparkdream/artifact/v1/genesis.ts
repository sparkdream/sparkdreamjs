//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Class, ClassAmino, Token, TokenAmino, PublicMintCountEntry, PublicMintCountEntryAmino, ReceivePolicyEntry, ReceivePolicyEntryAmino, PendingTransfer, PendingTransferAmino, PendingMint, PendingMintAmino, Listing, ListingAmino, PendingClassOwner, PendingClassOwnerAmino, HideRecord, HideRecordAmino, QueueCursor, QueueCursorAmino, SentinelDailyHideEntry, SentinelDailyHideEntryAmino, MediaProposal, MediaProposalAmino, Edition, EditionAmino, Balance, BalanceAmino, PendingUnits, PendingUnitsAmino, UnitListing, UnitListingAmino, CraftRecipe, CraftRecipeAmino, Rental, RentalAmino, RentalOffer, RentalOfferAmino, Offer, OfferAmino, Auction, AuctionAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the artifact module's genesis state. Derived indexes
 * (owner indexes, inbox/outbox, counters, expiry indexes, the Children
 * index, Harberger due dates, initiative certificates) are rebuilt on
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
  mediaProposals: MediaProposal[];
  classReleaseQueue: QueueCursor[];
  editions: Edition[];
  balances: Balance[];
  pendingUnitSeq: bigint;
  pendingUnits: PendingUnits[];
  unitListingSeq: bigint;
  unitListings: UnitListing[];
  craftRecipes: CraftRecipe[];
  rentals: Rental[];
  rentalOffers: RentalOffer[];
  offerSeq: bigint;
  offers: Offer[];
  auctionSeq: bigint;
  auctions: Auction[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the artifact module's genesis state. Derived indexes
 * (owner indexes, inbox/outbox, counters, expiry indexes, the Children
 * index, Harberger due dates, initiative certificates) are rebuilt on
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
  media_proposals?: MediaProposalAmino[];
  class_release_queue?: QueueCursorAmino[];
  editions?: EditionAmino[];
  balances?: BalanceAmino[];
  pending_unit_seq?: string;
  pending_units?: PendingUnitsAmino[];
  unit_listing_seq?: string;
  unit_listings?: UnitListingAmino[];
  craft_recipes?: CraftRecipeAmino[];
  rentals?: RentalAmino[];
  rental_offers?: RentalOfferAmino[];
  offer_seq?: string;
  offers?: OfferAmino[];
  auction_seq?: string;
  auctions?: AuctionAmino[];
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
    sentinelDailyHides: [],
    mediaProposals: [],
    classReleaseQueue: [],
    editions: [],
    balances: [],
    pendingUnitSeq: BigInt(0),
    pendingUnits: [],
    unitListingSeq: BigInt(0),
    unitListings: [],
    craftRecipes: [],
    rentals: [],
    rentalOffers: [],
    offerSeq: BigInt(0),
    offers: [],
    auctionSeq: BigInt(0),
    auctions: []
  };
}
/**
 * GenesisState defines the artifact module's genesis state. Derived indexes
 * (owner indexes, inbox/outbox, counters, expiry indexes, the Children
 * index, Harberger due dates, initiative certificates) are rebuilt on
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
    for (const v of message.mediaProposals) {
      MediaProposal.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.classReleaseQueue) {
      QueueCursor.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.editions) {
      Edition.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.pendingUnitSeq !== BigInt(0)) {
      writer.uint32(160).uint64(message.pendingUnitSeq);
    }
    for (const v of message.pendingUnits) {
      PendingUnits.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.unitListingSeq !== BigInt(0)) {
      writer.uint32(176).uint64(message.unitListingSeq);
    }
    for (const v of message.unitListings) {
      UnitListing.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.craftRecipes) {
      CraftRecipe.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.rentals) {
      Rental.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.rentalOffers) {
      RentalOffer.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.offerSeq !== BigInt(0)) {
      writer.uint32(216).uint64(message.offerSeq);
    }
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(226).fork()).ldelim();
    }
    if (message.auctionSeq !== BigInt(0)) {
      writer.uint32(232).uint64(message.auctionSeq);
    }
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(242).fork()).ldelim();
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
        case 16:
          message.mediaProposals.push(MediaProposal.decode(reader, reader.uint32()));
          break;
        case 17:
          message.classReleaseQueue.push(QueueCursor.decode(reader, reader.uint32()));
          break;
        case 18:
          message.editions.push(Edition.decode(reader, reader.uint32()));
          break;
        case 19:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 20:
          message.pendingUnitSeq = reader.uint64();
          break;
        case 21:
          message.pendingUnits.push(PendingUnits.decode(reader, reader.uint32()));
          break;
        case 22:
          message.unitListingSeq = reader.uint64();
          break;
        case 23:
          message.unitListings.push(UnitListing.decode(reader, reader.uint32()));
          break;
        case 24:
          message.craftRecipes.push(CraftRecipe.decode(reader, reader.uint32()));
          break;
        case 25:
          message.rentals.push(Rental.decode(reader, reader.uint32()));
          break;
        case 26:
          message.rentalOffers.push(RentalOffer.decode(reader, reader.uint32()));
          break;
        case 27:
          message.offerSeq = reader.uint64();
          break;
        case 28:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;
        case 29:
          message.auctionSeq = reader.uint64();
          break;
        case 30:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
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
    message.mediaProposals = object.mediaProposals?.map(e => MediaProposal.fromPartial(e)) || [];
    message.classReleaseQueue = object.classReleaseQueue?.map(e => QueueCursor.fromPartial(e)) || [];
    message.editions = object.editions?.map(e => Edition.fromPartial(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.pendingUnitSeq = object.pendingUnitSeq !== undefined && object.pendingUnitSeq !== null ? BigInt(object.pendingUnitSeq.toString()) : BigInt(0);
    message.pendingUnits = object.pendingUnits?.map(e => PendingUnits.fromPartial(e)) || [];
    message.unitListingSeq = object.unitListingSeq !== undefined && object.unitListingSeq !== null ? BigInt(object.unitListingSeq.toString()) : BigInt(0);
    message.unitListings = object.unitListings?.map(e => UnitListing.fromPartial(e)) || [];
    message.craftRecipes = object.craftRecipes?.map(e => CraftRecipe.fromPartial(e)) || [];
    message.rentals = object.rentals?.map(e => Rental.fromPartial(e)) || [];
    message.rentalOffers = object.rentalOffers?.map(e => RentalOffer.fromPartial(e)) || [];
    message.offerSeq = object.offerSeq !== undefined && object.offerSeq !== null ? BigInt(object.offerSeq.toString()) : BigInt(0);
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.auctionSeq = object.auctionSeq !== undefined && object.auctionSeq !== null ? BigInt(object.auctionSeq.toString()) : BigInt(0);
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
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
    message.mediaProposals = object.media_proposals?.map(e => MediaProposal.fromAmino(e)) || [];
    message.classReleaseQueue = object.class_release_queue?.map(e => QueueCursor.fromAmino(e)) || [];
    message.editions = object.editions?.map(e => Edition.fromAmino(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
    if (object.pending_unit_seq !== undefined && object.pending_unit_seq !== null) {
      message.pendingUnitSeq = BigInt(object.pending_unit_seq);
    }
    message.pendingUnits = object.pending_units?.map(e => PendingUnits.fromAmino(e)) || [];
    if (object.unit_listing_seq !== undefined && object.unit_listing_seq !== null) {
      message.unitListingSeq = BigInt(object.unit_listing_seq);
    }
    message.unitListings = object.unit_listings?.map(e => UnitListing.fromAmino(e)) || [];
    message.craftRecipes = object.craft_recipes?.map(e => CraftRecipe.fromAmino(e)) || [];
    message.rentals = object.rentals?.map(e => Rental.fromAmino(e)) || [];
    message.rentalOffers = object.rental_offers?.map(e => RentalOffer.fromAmino(e)) || [];
    if (object.offer_seq !== undefined && object.offer_seq !== null) {
      message.offerSeq = BigInt(object.offer_seq);
    }
    message.offers = object.offers?.map(e => Offer.fromAmino(e)) || [];
    if (object.auction_seq !== undefined && object.auction_seq !== null) {
      message.auctionSeq = BigInt(object.auction_seq);
    }
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
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
    if (message.mediaProposals) {
      obj.media_proposals = message.mediaProposals.map(e => e ? MediaProposal.toAmino(e) : undefined);
    } else {
      obj.media_proposals = message.mediaProposals;
    }
    if (message.classReleaseQueue) {
      obj.class_release_queue = message.classReleaseQueue.map(e => e ? QueueCursor.toAmino(e) : undefined);
    } else {
      obj.class_release_queue = message.classReleaseQueue;
    }
    if (message.editions) {
      obj.editions = message.editions.map(e => e ? Edition.toAmino(e) : undefined);
    } else {
      obj.editions = message.editions;
    }
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pending_unit_seq = message.pendingUnitSeq !== BigInt(0) ? message.pendingUnitSeq?.toString() : undefined;
    if (message.pendingUnits) {
      obj.pending_units = message.pendingUnits.map(e => e ? PendingUnits.toAmino(e) : undefined);
    } else {
      obj.pending_units = message.pendingUnits;
    }
    obj.unit_listing_seq = message.unitListingSeq !== BigInt(0) ? message.unitListingSeq?.toString() : undefined;
    if (message.unitListings) {
      obj.unit_listings = message.unitListings.map(e => e ? UnitListing.toAmino(e) : undefined);
    } else {
      obj.unit_listings = message.unitListings;
    }
    if (message.craftRecipes) {
      obj.craft_recipes = message.craftRecipes.map(e => e ? CraftRecipe.toAmino(e) : undefined);
    } else {
      obj.craft_recipes = message.craftRecipes;
    }
    if (message.rentals) {
      obj.rentals = message.rentals.map(e => e ? Rental.toAmino(e) : undefined);
    } else {
      obj.rentals = message.rentals;
    }
    if (message.rentalOffers) {
      obj.rental_offers = message.rentalOffers.map(e => e ? RentalOffer.toAmino(e) : undefined);
    } else {
      obj.rental_offers = message.rentalOffers;
    }
    obj.offer_seq = message.offerSeq !== BigInt(0) ? message.offerSeq?.toString() : undefined;
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offers = message.offers;
    }
    obj.auction_seq = message.auctionSeq !== BigInt(0) ? message.auctionSeq?.toString() : undefined;
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = message.auctions;
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