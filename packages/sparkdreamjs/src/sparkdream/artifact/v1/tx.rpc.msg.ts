//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateClass, MsgCreateClassResponse, MsgUpdateClass, MsgUpdateClassResponse, MsgFreezeClassMetadata, MsgFreezeClassMetadataResponse, MsgSetMintPolicy, MsgSetMintPolicyResponse, MsgSetMinters, MsgSetMintersResponse, MsgSetMaxSupply, MsgSetMaxSupplyResponse, MsgCloseMinting, MsgCloseMintingResponse, MsgProposeClassOwner, MsgProposeClassOwnerResponse, MsgAcceptClassOwner, MsgAcceptClassOwnerResponse, MsgCancelClassOwner, MsgCancelClassOwnerResponse, MsgDeleteClass, MsgDeleteClassResponse, MsgMint, MsgMintResponse, MsgPublicMint, MsgPublicMintResponse, MsgTransfer, MsgTransferResponse, MsgAcceptIncoming, MsgAcceptIncomingResponse, MsgRejectIncoming, MsgRejectIncomingResponse, MsgCancelOutgoing, MsgCancelOutgoingResponse, MsgSetReceivePolicy, MsgSetReceivePolicyResponse, MsgBurn, MsgBurnResponse, MsgRevoke, MsgRevokeResponse, MsgUpdateToken, MsgUpdateTokenResponse, MsgFreezeTokenMetadata, MsgFreezeTokenMetadataResponse, MsgList, MsgListResponse, MsgUpdateListing, MsgUpdateListingResponse, MsgDelist, MsgDelistResponse, MsgBuy, MsgBuyResponse, MsgHideContent, MsgHideContentResponse, MsgUnhideContent, MsgUnhideContentResponse, MsgAppealHide, MsgAppealHideResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgIssue, MsgIssueResponse, MsgRenew, MsgRenewResponse, MsgRedeem, MsgRedeemResponse, MsgLockRoyalty, MsgLockRoyaltyResponse, MsgReveal, MsgRevealResponse, MsgRevealSeed, MsgRevealSeedResponse, MsgProposeMedia, MsgProposeMediaResponse, MsgAcceptMedia, MsgAcceptMediaResponse, MsgRejectMedia, MsgRejectMediaResponse, MsgSetDisplayedMedia, MsgSetDisplayedMediaResponse, MsgCreateEdition, MsgCreateEditionResponse, MsgMintUnits, MsgMintUnitsResponse, MsgTransferUnits, MsgTransferUnitsResponse, MsgBurnUnits, MsgBurnUnitsResponse, MsgRevokeUnits, MsgRevokeUnitsResponse, MsgListUnits, MsgListUnitsResponse, MsgDelistUnits, MsgDelistUnitsResponse, MsgBuyUnits, MsgBuyUnitsResponse, MsgFundEdition, MsgFundEditionResponse, MsgClaimEditionRewards, MsgClaimEditionRewardsResponse, MsgAddCraftRecipe, MsgAddCraftRecipeResponse, MsgRemoveCraftRecipe, MsgRemoveCraftRecipeResponse, MsgCraft, MsgCraftResponse, MsgOfferRental, MsgOfferRentalResponse, MsgCancelRentalOffer, MsgCancelRentalOfferResponse, MsgAcceptRental, MsgAcceptRentalResponse, MsgEndRental, MsgEndRentalResponse, MsgNest, MsgNestResponse, MsgDetach, MsgDetachResponse, MsgSetHarbergerPrice, MsgSetHarbergerPriceResponse, MsgForceBuy, MsgForceBuyResponse, MsgUpdateUnitListing, MsgUpdateUnitListingResponse, MsgMakeOffer, MsgMakeOfferResponse, MsgCancelOffer, MsgCancelOfferResponse, MsgAcceptOffer, MsgAcceptOfferResponse, MsgStartAuction, MsgStartAuctionResponse, MsgBid, MsgBidResponse, MsgSettleAuction, MsgSettleAuctionResponse, MsgCancelAuction, MsgCancelAuctionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** CreateClass creates a new class (member- or council-gated, fee burned). */
  createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
  /** UpdateClass edits class metadata and payment routing. */
  updateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
  /** FreezeClassMetadata freezes class and token metadata (one-way). */
  freezeClassMetadata(request: MsgFreezeClassMetadata): Promise<MsgFreezeClassMetadataResponse>;
  /** SetMintPolicy replaces the public mint policy. */
  setMintPolicy(request: MsgSetMintPolicy): Promise<MsgSetMintPolicyResponse>;
  /** SetMinters adds and removes class minters. */
  setMinters(request: MsgSetMinters): Promise<MsgSetMintersResponse>;
  /** SetMaxSupply lowers (or first sets) the class supply cap. */
  setMaxSupply(request: MsgSetMaxSupply): Promise<MsgSetMaxSupplyResponse>;
  /** CloseMinting permanently stops minting. */
  closeMinting(request: MsgCloseMinting): Promise<MsgCloseMintingResponse>;
  /** ProposeClassOwner proposes a class ownership handover. */
  proposeClassOwner(request: MsgProposeClassOwner): Promise<MsgProposeClassOwnerResponse>;
  /** AcceptClassOwner accepts a proposed handover. */
  acceptClassOwner(request: MsgAcceptClassOwner): Promise<MsgAcceptClassOwnerResponse>;
  /** CancelClassOwner withdraws a proposed handover. */
  cancelClassOwner(request: MsgCancelClassOwner): Promise<MsgCancelClassOwnerResponse>;
  /** DeleteClass deletes an empty class. */
  deleteClass(request: MsgDeleteClass): Promise<MsgDeleteClassResponse>;
  /** Mint mints tokens as the class owner or a listed minter. */
  mint(request: MsgMint): Promise<MsgMintResponse>;
  /** PublicMint buys tokens under the class's public mint policy. */
  publicMint(request: MsgPublicMint): Promise<MsgPublicMintResponse>;
  /** Transfer moves tokens to recipients (or their inboxes). */
  transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
  /** AcceptIncoming accepts inbox items. */
  acceptIncoming(request: MsgAcceptIncoming): Promise<MsgAcceptIncomingResponse>;
  /** RejectIncoming rejects inbox items. */
  rejectIncoming(request: MsgRejectIncoming): Promise<MsgRejectIncomingResponse>;
  /** CancelOutgoing withdraws pending items the signer sent. */
  cancelOutgoing(request: MsgCancelOutgoing): Promise<MsgCancelOutgoingResponse>;
  /** SetReceivePolicy sets the signer's receive policy. */
  setReceivePolicy(request: MsgSetReceivePolicy): Promise<MsgSetReceivePolicyResponse>;
  /** Burn destroys tokens and refunds their deposits to the burner. */
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /**
   * Revoke burns tokens as the class owner, when the class's
   * burn_authorization allows the issuer.
   */
  revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
  /** UpdateToken replaces a token's metadata (mutable classes only). */
  updateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  /** FreezeTokenMetadata freezes token metadata (class owner or holder). */
  freezeTokenMetadata(request: MsgFreezeTokenMetadata): Promise<MsgFreezeTokenMetadataResponse>;
  /** List offers a token for sale at a fixed SPARK price. */
  list(request: MsgList): Promise<MsgListResponse>;
  /** UpdateListing changes a listing's price or duration. */
  updateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
  /** Delist cancels a listing. */
  delist(request: MsgDelist): Promise<MsgDelistResponse>;
  /** Buy purchases a listed token. */
  buy(request: MsgBuy): Promise<MsgBuyResponse>;
  /** HideContent hides a class or token (sentinel or council). */
  hideContent(request: MsgHideContent): Promise<MsgHideContentResponse>;
  /** UnhideContent reverses a hide before appeal. */
  unhideContent(request: MsgUnhideContent): Promise<MsgUnhideContentResponse>;
  /** AppealHide appeals a hide through the x/rep jury (ARTIFACT_HIDE). */
  appealHide(request: MsgAppealHide): Promise<MsgAppealHideResponse>;
  /** UpdateOperationalParams updates the operational parameter subset. */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /**
   * Issue mints one shared metadata to many recipients (attendance and
   * participation badges). Cheaper than MsgMint for large batches.
   */
  issue(request: MsgIssue): Promise<MsgIssueResponse>;
  /**
   * Renew extends an expiring token's term, by the holder (paying the
   * class) or by the class owner or a listed minter (free).
   */
  renew(request: MsgRenew): Promise<MsgRenewResponse>;
  /** Redeem marks tokens of a redeemable class as redeemed (one-way). */
  redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
  /** LockRoyalty freezes the class royalty split (irreversible). */
  lockRoyalty(request: MsgLockRoyalty): Promise<MsgLockRoyaltyResponse>;
  /**
   * Reveal discloses a blind-minted token's metadata against the class
   * commitment.
   */
  reveal(request: MsgReveal): Promise<MsgRevealResponse>;
  /** RevealSeed discloses a generative class's seed secret. */
  revealSeed(request: MsgRevealSeed): Promise<MsgRevealSeedResponse>;
  /** ProposeMedia offers the holder an additional media version of a token. */
  proposeMedia(request: MsgProposeMedia): Promise<MsgProposeMediaResponse>;
  /** AcceptMedia adds a proposed media version to the token. */
  acceptMedia(request: MsgAcceptMedia): Promise<MsgAcceptMediaResponse>;
  /** RejectMedia discards a media proposal (holder or class owner). */
  rejectMedia(request: MsgRejectMedia): Promise<MsgRejectMediaResponse>;
  /** SetDisplayedMedia picks which accepted version the token shows. */
  setDisplayedMedia(request: MsgSetDisplayedMedia): Promise<MsgSetDisplayedMediaResponse>;
  /**
   * CreateEdition adds an edition to an EDITIONS class; with a claim it is
   * an impact certificate.
   */
  createEdition(request: MsgCreateEdition): Promise<MsgCreateEditionResponse>;
  /** MintUnits mints units of an edition. */
  mintUnits(request: MsgMintUnits): Promise<MsgMintUnitsResponse>;
  /** TransferUnits moves edition units to recipients (or their inboxes). */
  transferUnits(request: MsgTransferUnits): Promise<MsgTransferUnitsResponse>;
  /** BurnUnits burns units the signer holds. */
  burnUnits(request: MsgBurnUnits): Promise<MsgBurnUnitsResponse>;
  /**
   * RevokeUnits burns a holder's units as the class owner, when the class
   * lets the issuer burn.
   */
  revokeUnits(request: MsgRevokeUnits): Promise<MsgRevokeUnitsResponse>;
  /** ListUnits offers edition units at a fixed per-unit price. */
  listUnits(request: MsgListUnits): Promise<MsgListUnitsResponse>;
  /** DelistUnits cancels a unit listing. */
  delistUnits(request: MsgDelistUnits): Promise<MsgDelistUnitsResponse>;
  /** BuyUnits buys some or all of a unit listing. */
  buyUnits(request: MsgBuyUnits): Promise<MsgBuyUnitsResponse>;
  /**
   * FundEdition pays SPARK to an edition's holders, pro rata (retroactive
   * funding of an impact certificate).
   */
  fundEdition(request: MsgFundEdition): Promise<MsgFundEditionResponse>;
  /** ClaimEditionRewards pays out accrued retro funding. */
  claimEditionRewards(request: MsgClaimEditionRewards): Promise<MsgClaimEditionRewardsResponse>;
  /** AddCraftRecipe adds a crafting recipe to a class (until its first craft). */
  addCraftRecipe(request: MsgAddCraftRecipe): Promise<MsgAddCraftRecipeResponse>;
  /** RemoveCraftRecipe removes a crafting recipe. */
  removeCraftRecipe(request: MsgRemoveCraftRecipe): Promise<MsgRemoveCraftRecipeResponse>;
  /** Craft burns a recipe's inputs and mints its output to the crafter. */
  craft(request: MsgCraft): Promise<MsgCraftResponse>;
  /** OfferRental offers a token's user right for rent. */
  offerRental(request: MsgOfferRental): Promise<MsgOfferRentalResponse>;
  /** CancelRentalOffer withdraws a rental offer. */
  cancelRentalOffer(request: MsgCancelRentalOffer): Promise<MsgCancelRentalOfferResponse>;
  /** AcceptRental rents a token, paying the offer's price. */
  acceptRental(request: MsgAcceptRental): Promise<MsgAcceptRentalResponse>;
  /** EndRental ends a rental. */
  endRental(request: MsgEndRental): Promise<MsgEndRentalResponse>;
  /** Nest places a token inside another token the signer owns. */
  nest(request: MsgNest): Promise<MsgNestResponse>;
  /** Detach takes a nested token out of its parent. */
  detach(request: MsgDetach): Promise<MsgDetachResponse>;
  /** SetHarbergerPrice self-assesses a Harberger token's price. */
  setHarbergerPrice(request: MsgSetHarbergerPrice): Promise<MsgSetHarbergerPriceResponse>;
  /** ForceBuy buys a Harberger token at its current price. */
  forceBuy(request: MsgForceBuy): Promise<MsgForceBuyResponse>;
  /** UpdateUnitListing changes a unit listing's quantity, price and duration. */
  updateUnitListing(request: MsgUpdateUnitListing): Promise<MsgUpdateUnitListingResponse>;
  /** MakeOffer escrows a SPARK offer for a token or any token of a class. */
  makeOffer(request: MsgMakeOffer): Promise<MsgMakeOfferResponse>;
  /** CancelOffer withdraws an offer and refunds its escrow. */
  cancelOffer(request: MsgCancelOffer): Promise<MsgCancelOfferResponse>;
  /** AcceptOffer sells a token to an offer's bidder. */
  acceptOffer(request: MsgAcceptOffer): Promise<MsgAcceptOfferResponse>;
  /** StartAuction puts a token up for an English auction. */
  startAuction(request: MsgStartAuction): Promise<MsgStartAuctionResponse>;
  /** Bid places an escrowed bid on an auction. */
  bid(request: MsgBid): Promise<MsgBidResponse>;
  /** SettleAuction settles an ended auction (anyone may sign). */
  settleAuction(request: MsgSettleAuction): Promise<MsgSettleAuctionResponse>;
  /** CancelAuction withdraws an auction nobody has bid on. */
  cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateClass creates a new class (member- or council-gated, fee burned). */
  createClass = async (request: MsgCreateClass): Promise<MsgCreateClassResponse> => {
    const data = MsgCreateClass.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CreateClass", data);
    return promise.then(data => MsgCreateClassResponse.decode(new BinaryReader(data)));
  };
  /* UpdateClass edits class metadata and payment routing. */
  updateClass = async (request: MsgUpdateClass): Promise<MsgUpdateClassResponse> => {
    const data = MsgUpdateClass.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UpdateClass", data);
    return promise.then(data => MsgUpdateClassResponse.decode(new BinaryReader(data)));
  };
  /* FreezeClassMetadata freezes class and token metadata (one-way). */
  freezeClassMetadata = async (request: MsgFreezeClassMetadata): Promise<MsgFreezeClassMetadataResponse> => {
    const data = MsgFreezeClassMetadata.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "FreezeClassMetadata", data);
    return promise.then(data => MsgFreezeClassMetadataResponse.decode(new BinaryReader(data)));
  };
  /* SetMintPolicy replaces the public mint policy. */
  setMintPolicy = async (request: MsgSetMintPolicy): Promise<MsgSetMintPolicyResponse> => {
    const data = MsgSetMintPolicy.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SetMintPolicy", data);
    return promise.then(data => MsgSetMintPolicyResponse.decode(new BinaryReader(data)));
  };
  /* SetMinters adds and removes class minters. */
  setMinters = async (request: MsgSetMinters): Promise<MsgSetMintersResponse> => {
    const data = MsgSetMinters.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SetMinters", data);
    return promise.then(data => MsgSetMintersResponse.decode(new BinaryReader(data)));
  };
  /* SetMaxSupply lowers (or first sets) the class supply cap. */
  setMaxSupply = async (request: MsgSetMaxSupply): Promise<MsgSetMaxSupplyResponse> => {
    const data = MsgSetMaxSupply.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SetMaxSupply", data);
    return promise.then(data => MsgSetMaxSupplyResponse.decode(new BinaryReader(data)));
  };
  /* CloseMinting permanently stops minting. */
  closeMinting = async (request: MsgCloseMinting): Promise<MsgCloseMintingResponse> => {
    const data = MsgCloseMinting.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CloseMinting", data);
    return promise.then(data => MsgCloseMintingResponse.decode(new BinaryReader(data)));
  };
  /* ProposeClassOwner proposes a class ownership handover. */
  proposeClassOwner = async (request: MsgProposeClassOwner): Promise<MsgProposeClassOwnerResponse> => {
    const data = MsgProposeClassOwner.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "ProposeClassOwner", data);
    return promise.then(data => MsgProposeClassOwnerResponse.decode(new BinaryReader(data)));
  };
  /* AcceptClassOwner accepts a proposed handover. */
  acceptClassOwner = async (request: MsgAcceptClassOwner): Promise<MsgAcceptClassOwnerResponse> => {
    const data = MsgAcceptClassOwner.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AcceptClassOwner", data);
    return promise.then(data => MsgAcceptClassOwnerResponse.decode(new BinaryReader(data)));
  };
  /* CancelClassOwner withdraws a proposed handover. */
  cancelClassOwner = async (request: MsgCancelClassOwner): Promise<MsgCancelClassOwnerResponse> => {
    const data = MsgCancelClassOwner.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CancelClassOwner", data);
    return promise.then(data => MsgCancelClassOwnerResponse.decode(new BinaryReader(data)));
  };
  /* DeleteClass deletes an empty class. */
  deleteClass = async (request: MsgDeleteClass): Promise<MsgDeleteClassResponse> => {
    const data = MsgDeleteClass.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "DeleteClass", data);
    return promise.then(data => MsgDeleteClassResponse.decode(new BinaryReader(data)));
  };
  /* Mint mints tokens as the class owner or a listed minter. */
  mint = async (request: MsgMint): Promise<MsgMintResponse> => {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
  };
  /* PublicMint buys tokens under the class's public mint policy. */
  publicMint = async (request: MsgPublicMint): Promise<MsgPublicMintResponse> => {
    const data = MsgPublicMint.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "PublicMint", data);
    return promise.then(data => MsgPublicMintResponse.decode(new BinaryReader(data)));
  };
  /* Transfer moves tokens to recipients (or their inboxes). */
  transfer = async (request: MsgTransfer): Promise<MsgTransferResponse> => {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Transfer", data);
    return promise.then(data => MsgTransferResponse.decode(new BinaryReader(data)));
  };
  /* AcceptIncoming accepts inbox items. */
  acceptIncoming = async (request: MsgAcceptIncoming): Promise<MsgAcceptIncomingResponse> => {
    const data = MsgAcceptIncoming.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AcceptIncoming", data);
    return promise.then(data => MsgAcceptIncomingResponse.decode(new BinaryReader(data)));
  };
  /* RejectIncoming rejects inbox items. */
  rejectIncoming = async (request: MsgRejectIncoming): Promise<MsgRejectIncomingResponse> => {
    const data = MsgRejectIncoming.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "RejectIncoming", data);
    return promise.then(data => MsgRejectIncomingResponse.decode(new BinaryReader(data)));
  };
  /* CancelOutgoing withdraws pending items the signer sent. */
  cancelOutgoing = async (request: MsgCancelOutgoing): Promise<MsgCancelOutgoingResponse> => {
    const data = MsgCancelOutgoing.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CancelOutgoing", data);
    return promise.then(data => MsgCancelOutgoingResponse.decode(new BinaryReader(data)));
  };
  /* SetReceivePolicy sets the signer's receive policy. */
  setReceivePolicy = async (request: MsgSetReceivePolicy): Promise<MsgSetReceivePolicyResponse> => {
    const data = MsgSetReceivePolicy.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SetReceivePolicy", data);
    return promise.then(data => MsgSetReceivePolicyResponse.decode(new BinaryReader(data)));
  };
  /* Burn destroys tokens and refunds their deposits to the burner. */
  burn = async (request: MsgBurn): Promise<MsgBurnResponse> => {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  };
  /* Revoke burns tokens as the class owner, when the class's
   burn_authorization allows the issuer. */
  revoke = async (request: MsgRevoke): Promise<MsgRevokeResponse> => {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Revoke", data);
    return promise.then(data => MsgRevokeResponse.decode(new BinaryReader(data)));
  };
  /* UpdateToken replaces a token's metadata (mutable classes only). */
  updateToken = async (request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> => {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UpdateToken", data);
    return promise.then(data => MsgUpdateTokenResponse.decode(new BinaryReader(data)));
  };
  /* FreezeTokenMetadata freezes token metadata (class owner or holder). */
  freezeTokenMetadata = async (request: MsgFreezeTokenMetadata): Promise<MsgFreezeTokenMetadataResponse> => {
    const data = MsgFreezeTokenMetadata.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "FreezeTokenMetadata", data);
    return promise.then(data => MsgFreezeTokenMetadataResponse.decode(new BinaryReader(data)));
  };
  /* List offers a token for sale at a fixed SPARK price. */
  list = async (request: MsgList): Promise<MsgListResponse> => {
    const data = MsgList.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "List", data);
    return promise.then(data => MsgListResponse.decode(new BinaryReader(data)));
  };
  /* UpdateListing changes a listing's price or duration. */
  updateListing = async (request: MsgUpdateListing): Promise<MsgUpdateListingResponse> => {
    const data = MsgUpdateListing.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UpdateListing", data);
    return promise.then(data => MsgUpdateListingResponse.decode(new BinaryReader(data)));
  };
  /* Delist cancels a listing. */
  delist = async (request: MsgDelist): Promise<MsgDelistResponse> => {
    const data = MsgDelist.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Delist", data);
    return promise.then(data => MsgDelistResponse.decode(new BinaryReader(data)));
  };
  /* Buy purchases a listed token. */
  buy = async (request: MsgBuy): Promise<MsgBuyResponse> => {
    const data = MsgBuy.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Buy", data);
    return promise.then(data => MsgBuyResponse.decode(new BinaryReader(data)));
  };
  /* HideContent hides a class or token (sentinel or council). */
  hideContent = async (request: MsgHideContent): Promise<MsgHideContentResponse> => {
    const data = MsgHideContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "HideContent", data);
    return promise.then(data => MsgHideContentResponse.decode(new BinaryReader(data)));
  };
  /* UnhideContent reverses a hide before appeal. */
  unhideContent = async (request: MsgUnhideContent): Promise<MsgUnhideContentResponse> => {
    const data = MsgUnhideContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UnhideContent", data);
    return promise.then(data => MsgUnhideContentResponse.decode(new BinaryReader(data)));
  };
  /* AppealHide appeals a hide through the x/rep jury (ARTIFACT_HIDE). */
  appealHide = async (request: MsgAppealHide): Promise<MsgAppealHideResponse> => {
    const data = MsgAppealHide.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AppealHide", data);
    return promise.then(data => MsgAppealHideResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams updates the operational parameter subset. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* Issue mints one shared metadata to many recipients (attendance and
   participation badges). Cheaper than MsgMint for large batches. */
  issue = async (request: MsgIssue): Promise<MsgIssueResponse> => {
    const data = MsgIssue.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Issue", data);
    return promise.then(data => MsgIssueResponse.decode(new BinaryReader(data)));
  };
  /* Renew extends an expiring token's term, by the holder (paying the
   class) or by the class owner or a listed minter (free). */
  renew = async (request: MsgRenew): Promise<MsgRenewResponse> => {
    const data = MsgRenew.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Renew", data);
    return promise.then(data => MsgRenewResponse.decode(new BinaryReader(data)));
  };
  /* Redeem marks tokens of a redeemable class as redeemed (one-way). */
  redeem = async (request: MsgRedeem): Promise<MsgRedeemResponse> => {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Redeem", data);
    return promise.then(data => MsgRedeemResponse.decode(new BinaryReader(data)));
  };
  /* LockRoyalty freezes the class royalty split (irreversible). */
  lockRoyalty = async (request: MsgLockRoyalty): Promise<MsgLockRoyaltyResponse> => {
    const data = MsgLockRoyalty.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "LockRoyalty", data);
    return promise.then(data => MsgLockRoyaltyResponse.decode(new BinaryReader(data)));
  };
  /* Reveal discloses a blind-minted token's metadata against the class
   commitment. */
  reveal = async (request: MsgReveal): Promise<MsgRevealResponse> => {
    const data = MsgReveal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Reveal", data);
    return promise.then(data => MsgRevealResponse.decode(new BinaryReader(data)));
  };
  /* RevealSeed discloses a generative class's seed secret. */
  revealSeed = async (request: MsgRevealSeed): Promise<MsgRevealSeedResponse> => {
    const data = MsgRevealSeed.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "RevealSeed", data);
    return promise.then(data => MsgRevealSeedResponse.decode(new BinaryReader(data)));
  };
  /* ProposeMedia offers the holder an additional media version of a token. */
  proposeMedia = async (request: MsgProposeMedia): Promise<MsgProposeMediaResponse> => {
    const data = MsgProposeMedia.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "ProposeMedia", data);
    return promise.then(data => MsgProposeMediaResponse.decode(new BinaryReader(data)));
  };
  /* AcceptMedia adds a proposed media version to the token. */
  acceptMedia = async (request: MsgAcceptMedia): Promise<MsgAcceptMediaResponse> => {
    const data = MsgAcceptMedia.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AcceptMedia", data);
    return promise.then(data => MsgAcceptMediaResponse.decode(new BinaryReader(data)));
  };
  /* RejectMedia discards a media proposal (holder or class owner). */
  rejectMedia = async (request: MsgRejectMedia): Promise<MsgRejectMediaResponse> => {
    const data = MsgRejectMedia.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "RejectMedia", data);
    return promise.then(data => MsgRejectMediaResponse.decode(new BinaryReader(data)));
  };
  /* SetDisplayedMedia picks which accepted version the token shows. */
  setDisplayedMedia = async (request: MsgSetDisplayedMedia): Promise<MsgSetDisplayedMediaResponse> => {
    const data = MsgSetDisplayedMedia.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SetDisplayedMedia", data);
    return promise.then(data => MsgSetDisplayedMediaResponse.decode(new BinaryReader(data)));
  };
  /* CreateEdition adds an edition to an EDITIONS class; with a claim it is
   an impact certificate. */
  createEdition = async (request: MsgCreateEdition): Promise<MsgCreateEditionResponse> => {
    const data = MsgCreateEdition.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CreateEdition", data);
    return promise.then(data => MsgCreateEditionResponse.decode(new BinaryReader(data)));
  };
  /* MintUnits mints units of an edition. */
  mintUnits = async (request: MsgMintUnits): Promise<MsgMintUnitsResponse> => {
    const data = MsgMintUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "MintUnits", data);
    return promise.then(data => MsgMintUnitsResponse.decode(new BinaryReader(data)));
  };
  /* TransferUnits moves edition units to recipients (or their inboxes). */
  transferUnits = async (request: MsgTransferUnits): Promise<MsgTransferUnitsResponse> => {
    const data = MsgTransferUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "TransferUnits", data);
    return promise.then(data => MsgTransferUnitsResponse.decode(new BinaryReader(data)));
  };
  /* BurnUnits burns units the signer holds. */
  burnUnits = async (request: MsgBurnUnits): Promise<MsgBurnUnitsResponse> => {
    const data = MsgBurnUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "BurnUnits", data);
    return promise.then(data => MsgBurnUnitsResponse.decode(new BinaryReader(data)));
  };
  /* RevokeUnits burns a holder's units as the class owner, when the class
   lets the issuer burn. */
  revokeUnits = async (request: MsgRevokeUnits): Promise<MsgRevokeUnitsResponse> => {
    const data = MsgRevokeUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "RevokeUnits", data);
    return promise.then(data => MsgRevokeUnitsResponse.decode(new BinaryReader(data)));
  };
  /* ListUnits offers edition units at a fixed per-unit price. */
  listUnits = async (request: MsgListUnits): Promise<MsgListUnitsResponse> => {
    const data = MsgListUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "ListUnits", data);
    return promise.then(data => MsgListUnitsResponse.decode(new BinaryReader(data)));
  };
  /* DelistUnits cancels a unit listing. */
  delistUnits = async (request: MsgDelistUnits): Promise<MsgDelistUnitsResponse> => {
    const data = MsgDelistUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "DelistUnits", data);
    return promise.then(data => MsgDelistUnitsResponse.decode(new BinaryReader(data)));
  };
  /* BuyUnits buys some or all of a unit listing. */
  buyUnits = async (request: MsgBuyUnits): Promise<MsgBuyUnitsResponse> => {
    const data = MsgBuyUnits.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "BuyUnits", data);
    return promise.then(data => MsgBuyUnitsResponse.decode(new BinaryReader(data)));
  };
  /* FundEdition pays SPARK to an edition's holders, pro rata (retroactive
   funding of an impact certificate). */
  fundEdition = async (request: MsgFundEdition): Promise<MsgFundEditionResponse> => {
    const data = MsgFundEdition.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "FundEdition", data);
    return promise.then(data => MsgFundEditionResponse.decode(new BinaryReader(data)));
  };
  /* ClaimEditionRewards pays out accrued retro funding. */
  claimEditionRewards = async (request: MsgClaimEditionRewards): Promise<MsgClaimEditionRewardsResponse> => {
    const data = MsgClaimEditionRewards.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "ClaimEditionRewards", data);
    return promise.then(data => MsgClaimEditionRewardsResponse.decode(new BinaryReader(data)));
  };
  /* AddCraftRecipe adds a crafting recipe to a class (until its first craft). */
  addCraftRecipe = async (request: MsgAddCraftRecipe): Promise<MsgAddCraftRecipeResponse> => {
    const data = MsgAddCraftRecipe.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AddCraftRecipe", data);
    return promise.then(data => MsgAddCraftRecipeResponse.decode(new BinaryReader(data)));
  };
  /* RemoveCraftRecipe removes a crafting recipe. */
  removeCraftRecipe = async (request: MsgRemoveCraftRecipe): Promise<MsgRemoveCraftRecipeResponse> => {
    const data = MsgRemoveCraftRecipe.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "RemoveCraftRecipe", data);
    return promise.then(data => MsgRemoveCraftRecipeResponse.decode(new BinaryReader(data)));
  };
  /* Craft burns a recipe's inputs and mints its output to the crafter. */
  craft = async (request: MsgCraft): Promise<MsgCraftResponse> => {
    const data = MsgCraft.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Craft", data);
    return promise.then(data => MsgCraftResponse.decode(new BinaryReader(data)));
  };
  /* OfferRental offers a token's user right for rent. */
  offerRental = async (request: MsgOfferRental): Promise<MsgOfferRentalResponse> => {
    const data = MsgOfferRental.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "OfferRental", data);
    return promise.then(data => MsgOfferRentalResponse.decode(new BinaryReader(data)));
  };
  /* CancelRentalOffer withdraws a rental offer. */
  cancelRentalOffer = async (request: MsgCancelRentalOffer): Promise<MsgCancelRentalOfferResponse> => {
    const data = MsgCancelRentalOffer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CancelRentalOffer", data);
    return promise.then(data => MsgCancelRentalOfferResponse.decode(new BinaryReader(data)));
  };
  /* AcceptRental rents a token, paying the offer's price. */
  acceptRental = async (request: MsgAcceptRental): Promise<MsgAcceptRentalResponse> => {
    const data = MsgAcceptRental.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AcceptRental", data);
    return promise.then(data => MsgAcceptRentalResponse.decode(new BinaryReader(data)));
  };
  /* EndRental ends a rental. */
  endRental = async (request: MsgEndRental): Promise<MsgEndRentalResponse> => {
    const data = MsgEndRental.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "EndRental", data);
    return promise.then(data => MsgEndRentalResponse.decode(new BinaryReader(data)));
  };
  /* Nest places a token inside another token the signer owns. */
  nest = async (request: MsgNest): Promise<MsgNestResponse> => {
    const data = MsgNest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Nest", data);
    return promise.then(data => MsgNestResponse.decode(new BinaryReader(data)));
  };
  /* Detach takes a nested token out of its parent. */
  detach = async (request: MsgDetach): Promise<MsgDetachResponse> => {
    const data = MsgDetach.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Detach", data);
    return promise.then(data => MsgDetachResponse.decode(new BinaryReader(data)));
  };
  /* SetHarbergerPrice self-assesses a Harberger token's price. */
  setHarbergerPrice = async (request: MsgSetHarbergerPrice): Promise<MsgSetHarbergerPriceResponse> => {
    const data = MsgSetHarbergerPrice.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SetHarbergerPrice", data);
    return promise.then(data => MsgSetHarbergerPriceResponse.decode(new BinaryReader(data)));
  };
  /* ForceBuy buys a Harberger token at its current price. */
  forceBuy = async (request: MsgForceBuy): Promise<MsgForceBuyResponse> => {
    const data = MsgForceBuy.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "ForceBuy", data);
    return promise.then(data => MsgForceBuyResponse.decode(new BinaryReader(data)));
  };
  /* UpdateUnitListing changes a unit listing's quantity, price and duration. */
  updateUnitListing = async (request: MsgUpdateUnitListing): Promise<MsgUpdateUnitListingResponse> => {
    const data = MsgUpdateUnitListing.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "UpdateUnitListing", data);
    return promise.then(data => MsgUpdateUnitListingResponse.decode(new BinaryReader(data)));
  };
  /* MakeOffer escrows a SPARK offer for a token or any token of a class. */
  makeOffer = async (request: MsgMakeOffer): Promise<MsgMakeOfferResponse> => {
    const data = MsgMakeOffer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "MakeOffer", data);
    return promise.then(data => MsgMakeOfferResponse.decode(new BinaryReader(data)));
  };
  /* CancelOffer withdraws an offer and refunds its escrow. */
  cancelOffer = async (request: MsgCancelOffer): Promise<MsgCancelOfferResponse> => {
    const data = MsgCancelOffer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CancelOffer", data);
    return promise.then(data => MsgCancelOfferResponse.decode(new BinaryReader(data)));
  };
  /* AcceptOffer sells a token to an offer's bidder. */
  acceptOffer = async (request: MsgAcceptOffer): Promise<MsgAcceptOfferResponse> => {
    const data = MsgAcceptOffer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "AcceptOffer", data);
    return promise.then(data => MsgAcceptOfferResponse.decode(new BinaryReader(data)));
  };
  /* StartAuction puts a token up for an English auction. */
  startAuction = async (request: MsgStartAuction): Promise<MsgStartAuctionResponse> => {
    const data = MsgStartAuction.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "StartAuction", data);
    return promise.then(data => MsgStartAuctionResponse.decode(new BinaryReader(data)));
  };
  /* Bid places an escrowed bid on an auction. */
  bid = async (request: MsgBid): Promise<MsgBidResponse> => {
    const data = MsgBid.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "Bid", data);
    return promise.then(data => MsgBidResponse.decode(new BinaryReader(data)));
  };
  /* SettleAuction settles an ended auction (anyone may sign). */
  settleAuction = async (request: MsgSettleAuction): Promise<MsgSettleAuctionResponse> => {
    const data = MsgSettleAuction.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "SettleAuction", data);
    return promise.then(data => MsgSettleAuctionResponse.decode(new BinaryReader(data)));
  };
  /* CancelAuction withdraws an auction nobody has bid on. */
  cancelAuction = async (request: MsgCancelAuction): Promise<MsgCancelAuctionResponse> => {
    const data = MsgCancelAuction.encode(request).finish();
    const promise = this.rpc.request("sparkdream.artifact.v1.Msg", "CancelAuction", data);
    return promise.then(data => MsgCancelAuctionResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};