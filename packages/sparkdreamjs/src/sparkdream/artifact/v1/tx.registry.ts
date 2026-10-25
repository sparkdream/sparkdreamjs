//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateClass, MsgUpdateClass, MsgFreezeClassMetadata, MsgSetMintPolicy, MsgSetMinters, MsgSetMaxSupply, MsgCloseMinting, MsgProposeClassOwner, MsgAcceptClassOwner, MsgCancelClassOwner, MsgDeleteClass, MsgMint, MsgPublicMint, MsgTransfer, MsgAcceptIncoming, MsgRejectIncoming, MsgCancelOutgoing, MsgSetReceivePolicy, MsgBurn, MsgRevoke, MsgUpdateToken, MsgFreezeTokenMetadata, MsgList, MsgUpdateListing, MsgDelist, MsgBuy, MsgHideContent, MsgUnhideContent, MsgAppealHide, MsgUpdateOperationalParams, MsgIssue, MsgRenew, MsgRedeem, MsgLockRoyalty, MsgReveal, MsgRevealSeed, MsgProposeMedia, MsgAcceptMedia, MsgRejectMedia, MsgSetDisplayedMedia, MsgCreateEdition, MsgMintUnits, MsgTransferUnits, MsgBurnUnits, MsgRevokeUnits, MsgListUnits, MsgDelistUnits, MsgBuyUnits, MsgFundEdition, MsgClaimEditionRewards, MsgAddCraftRecipe, MsgRemoveCraftRecipe, MsgCraft, MsgOfferRental, MsgCancelRentalOffer, MsgAcceptRental, MsgEndRental, MsgNest, MsgDetach, MsgSetHarbergerPrice, MsgForceBuy, MsgUpdateUnitListing, MsgMakeOffer, MsgCancelOffer, MsgAcceptOffer, MsgStartAuction, MsgBid, MsgSettleAuction, MsgCancelAuction } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.artifact.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.artifact.v1.MsgCreateClass", MsgCreateClass], ["/sparkdream.artifact.v1.MsgUpdateClass", MsgUpdateClass], ["/sparkdream.artifact.v1.MsgFreezeClassMetadata", MsgFreezeClassMetadata], ["/sparkdream.artifact.v1.MsgSetMintPolicy", MsgSetMintPolicy], ["/sparkdream.artifact.v1.MsgSetMinters", MsgSetMinters], ["/sparkdream.artifact.v1.MsgSetMaxSupply", MsgSetMaxSupply], ["/sparkdream.artifact.v1.MsgCloseMinting", MsgCloseMinting], ["/sparkdream.artifact.v1.MsgProposeClassOwner", MsgProposeClassOwner], ["/sparkdream.artifact.v1.MsgAcceptClassOwner", MsgAcceptClassOwner], ["/sparkdream.artifact.v1.MsgCancelClassOwner", MsgCancelClassOwner], ["/sparkdream.artifact.v1.MsgDeleteClass", MsgDeleteClass], ["/sparkdream.artifact.v1.MsgMint", MsgMint], ["/sparkdream.artifact.v1.MsgPublicMint", MsgPublicMint], ["/sparkdream.artifact.v1.MsgTransfer", MsgTransfer], ["/sparkdream.artifact.v1.MsgAcceptIncoming", MsgAcceptIncoming], ["/sparkdream.artifact.v1.MsgRejectIncoming", MsgRejectIncoming], ["/sparkdream.artifact.v1.MsgCancelOutgoing", MsgCancelOutgoing], ["/sparkdream.artifact.v1.MsgSetReceivePolicy", MsgSetReceivePolicy], ["/sparkdream.artifact.v1.MsgBurn", MsgBurn], ["/sparkdream.artifact.v1.MsgRevoke", MsgRevoke], ["/sparkdream.artifact.v1.MsgUpdateToken", MsgUpdateToken], ["/sparkdream.artifact.v1.MsgFreezeTokenMetadata", MsgFreezeTokenMetadata], ["/sparkdream.artifact.v1.MsgList", MsgList], ["/sparkdream.artifact.v1.MsgUpdateListing", MsgUpdateListing], ["/sparkdream.artifact.v1.MsgDelist", MsgDelist], ["/sparkdream.artifact.v1.MsgBuy", MsgBuy], ["/sparkdream.artifact.v1.MsgHideContent", MsgHideContent], ["/sparkdream.artifact.v1.MsgUnhideContent", MsgUnhideContent], ["/sparkdream.artifact.v1.MsgAppealHide", MsgAppealHide], ["/sparkdream.artifact.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.artifact.v1.MsgIssue", MsgIssue], ["/sparkdream.artifact.v1.MsgRenew", MsgRenew], ["/sparkdream.artifact.v1.MsgRedeem", MsgRedeem], ["/sparkdream.artifact.v1.MsgLockRoyalty", MsgLockRoyalty], ["/sparkdream.artifact.v1.MsgReveal", MsgReveal], ["/sparkdream.artifact.v1.MsgRevealSeed", MsgRevealSeed], ["/sparkdream.artifact.v1.MsgProposeMedia", MsgProposeMedia], ["/sparkdream.artifact.v1.MsgAcceptMedia", MsgAcceptMedia], ["/sparkdream.artifact.v1.MsgRejectMedia", MsgRejectMedia], ["/sparkdream.artifact.v1.MsgSetDisplayedMedia", MsgSetDisplayedMedia], ["/sparkdream.artifact.v1.MsgCreateEdition", MsgCreateEdition], ["/sparkdream.artifact.v1.MsgMintUnits", MsgMintUnits], ["/sparkdream.artifact.v1.MsgTransferUnits", MsgTransferUnits], ["/sparkdream.artifact.v1.MsgBurnUnits", MsgBurnUnits], ["/sparkdream.artifact.v1.MsgRevokeUnits", MsgRevokeUnits], ["/sparkdream.artifact.v1.MsgListUnits", MsgListUnits], ["/sparkdream.artifact.v1.MsgDelistUnits", MsgDelistUnits], ["/sparkdream.artifact.v1.MsgBuyUnits", MsgBuyUnits], ["/sparkdream.artifact.v1.MsgFundEdition", MsgFundEdition], ["/sparkdream.artifact.v1.MsgClaimEditionRewards", MsgClaimEditionRewards], ["/sparkdream.artifact.v1.MsgAddCraftRecipe", MsgAddCraftRecipe], ["/sparkdream.artifact.v1.MsgRemoveCraftRecipe", MsgRemoveCraftRecipe], ["/sparkdream.artifact.v1.MsgCraft", MsgCraft], ["/sparkdream.artifact.v1.MsgOfferRental", MsgOfferRental], ["/sparkdream.artifact.v1.MsgCancelRentalOffer", MsgCancelRentalOffer], ["/sparkdream.artifact.v1.MsgAcceptRental", MsgAcceptRental], ["/sparkdream.artifact.v1.MsgEndRental", MsgEndRental], ["/sparkdream.artifact.v1.MsgNest", MsgNest], ["/sparkdream.artifact.v1.MsgDetach", MsgDetach], ["/sparkdream.artifact.v1.MsgSetHarbergerPrice", MsgSetHarbergerPrice], ["/sparkdream.artifact.v1.MsgForceBuy", MsgForceBuy], ["/sparkdream.artifact.v1.MsgUpdateUnitListing", MsgUpdateUnitListing], ["/sparkdream.artifact.v1.MsgMakeOffer", MsgMakeOffer], ["/sparkdream.artifact.v1.MsgCancelOffer", MsgCancelOffer], ["/sparkdream.artifact.v1.MsgAcceptOffer", MsgAcceptOffer], ["/sparkdream.artifact.v1.MsgStartAuction", MsgStartAuction], ["/sparkdream.artifact.v1.MsgBid", MsgBid], ["/sparkdream.artifact.v1.MsgSettleAuction", MsgSettleAuction], ["/sparkdream.artifact.v1.MsgCancelAuction", MsgCancelAuction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
        value: MsgCreateClass.encode(value).finish()
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
        value: MsgUpdateClass.encode(value).finish()
      };
    },
    freezeClassMetadata(value: MsgFreezeClassMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
        value: MsgFreezeClassMetadata.encode(value).finish()
      };
    },
    setMintPolicy(value: MsgSetMintPolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
        value: MsgSetMintPolicy.encode(value).finish()
      };
    },
    setMinters(value: MsgSetMinters) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
        value: MsgSetMinters.encode(value).finish()
      };
    },
    setMaxSupply(value: MsgSetMaxSupply) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
        value: MsgSetMaxSupply.encode(value).finish()
      };
    },
    closeMinting(value: MsgCloseMinting) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
        value: MsgCloseMinting.encode(value).finish()
      };
    },
    proposeClassOwner(value: MsgProposeClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
        value: MsgProposeClassOwner.encode(value).finish()
      };
    },
    acceptClassOwner(value: MsgAcceptClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
        value: MsgAcceptClassOwner.encode(value).finish()
      };
    },
    cancelClassOwner(value: MsgCancelClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
        value: MsgCancelClassOwner.encode(value).finish()
      };
    },
    deleteClass(value: MsgDeleteClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
        value: MsgDeleteClass.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    publicMint(value: MsgPublicMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
        value: MsgPublicMint.encode(value).finish()
      };
    },
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
        value: MsgTransfer.encode(value).finish()
      };
    },
    acceptIncoming(value: MsgAcceptIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
        value: MsgAcceptIncoming.encode(value).finish()
      };
    },
    rejectIncoming(value: MsgRejectIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
        value: MsgRejectIncoming.encode(value).finish()
      };
    },
    cancelOutgoing(value: MsgCancelOutgoing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
        value: MsgCancelOutgoing.encode(value).finish()
      };
    },
    setReceivePolicy(value: MsgSetReceivePolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
        value: MsgSetReceivePolicy.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    revoke(value: MsgRevoke) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
        value: MsgRevoke.encode(value).finish()
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
        value: MsgUpdateToken.encode(value).finish()
      };
    },
    freezeTokenMetadata(value: MsgFreezeTokenMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
        value: MsgFreezeTokenMetadata.encode(value).finish()
      };
    },
    list(value: MsgList) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgList",
        value: MsgList.encode(value).finish()
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
        value: MsgUpdateListing.encode(value).finish()
      };
    },
    delist(value: MsgDelist) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelist",
        value: MsgDelist.encode(value).finish()
      };
    },
    buy(value: MsgBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuy",
        value: MsgBuy.encode(value).finish()
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
        value: MsgHideContent.encode(value).finish()
      };
    },
    unhideContent(value: MsgUnhideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
        value: MsgUnhideContent.encode(value).finish()
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
        value: MsgAppealHide.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    issue(value: MsgIssue) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgIssue",
        value: MsgIssue.encode(value).finish()
      };
    },
    renew(value: MsgRenew) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRenew",
        value: MsgRenew.encode(value).finish()
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRedeem",
        value: MsgRedeem.encode(value).finish()
      };
    },
    lockRoyalty(value: MsgLockRoyalty) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgLockRoyalty",
        value: MsgLockRoyalty.encode(value).finish()
      };
    },
    reveal(value: MsgReveal) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgReveal",
        value: MsgReveal.encode(value).finish()
      };
    },
    revealSeed(value: MsgRevealSeed) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevealSeed",
        value: MsgRevealSeed.encode(value).finish()
      };
    },
    proposeMedia(value: MsgProposeMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeMedia",
        value: MsgProposeMedia.encode(value).finish()
      };
    },
    acceptMedia(value: MsgAcceptMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptMedia",
        value: MsgAcceptMedia.encode(value).finish()
      };
    },
    rejectMedia(value: MsgRejectMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectMedia",
        value: MsgRejectMedia.encode(value).finish()
      };
    },
    setDisplayedMedia(value: MsgSetDisplayedMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMedia",
        value: MsgSetDisplayedMedia.encode(value).finish()
      };
    },
    createEdition(value: MsgCreateEdition) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateEdition",
        value: MsgCreateEdition.encode(value).finish()
      };
    },
    mintUnits(value: MsgMintUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMintUnits",
        value: MsgMintUnits.encode(value).finish()
      };
    },
    transferUnits(value: MsgTransferUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransferUnits",
        value: MsgTransferUnits.encode(value).finish()
      };
    },
    burnUnits(value: MsgBurnUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurnUnits",
        value: MsgBurnUnits.encode(value).finish()
      };
    },
    revokeUnits(value: MsgRevokeUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnits",
        value: MsgRevokeUnits.encode(value).finish()
      };
    },
    listUnits(value: MsgListUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgListUnits",
        value: MsgListUnits.encode(value).finish()
      };
    },
    delistUnits(value: MsgDelistUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelistUnits",
        value: MsgDelistUnits.encode(value).finish()
      };
    },
    buyUnits(value: MsgBuyUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuyUnits",
        value: MsgBuyUnits.encode(value).finish()
      };
    },
    fundEdition(value: MsgFundEdition) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFundEdition",
        value: MsgFundEdition.encode(value).finish()
      };
    },
    claimEditionRewards(value: MsgClaimEditionRewards) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewards",
        value: MsgClaimEditionRewards.encode(value).finish()
      };
    },
    addCraftRecipe(value: MsgAddCraftRecipe) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipe",
        value: MsgAddCraftRecipe.encode(value).finish()
      };
    },
    removeCraftRecipe(value: MsgRemoveCraftRecipe) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipe",
        value: MsgRemoveCraftRecipe.encode(value).finish()
      };
    },
    craft(value: MsgCraft) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCraft",
        value: MsgCraft.encode(value).finish()
      };
    },
    offerRental(value: MsgOfferRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgOfferRental",
        value: MsgOfferRental.encode(value).finish()
      };
    },
    cancelRentalOffer(value: MsgCancelRentalOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOffer",
        value: MsgCancelRentalOffer.encode(value).finish()
      };
    },
    acceptRental(value: MsgAcceptRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptRental",
        value: MsgAcceptRental.encode(value).finish()
      };
    },
    endRental(value: MsgEndRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgEndRental",
        value: MsgEndRental.encode(value).finish()
      };
    },
    nest(value: MsgNest) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgNest",
        value: MsgNest.encode(value).finish()
      };
    },
    detach(value: MsgDetach) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDetach",
        value: MsgDetach.encode(value).finish()
      };
    },
    setHarbergerPrice(value: MsgSetHarbergerPrice) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPrice",
        value: MsgSetHarbergerPrice.encode(value).finish()
      };
    },
    forceBuy(value: MsgForceBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgForceBuy",
        value: MsgForceBuy.encode(value).finish()
      };
    },
    updateUnitListing(value: MsgUpdateUnitListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListing",
        value: MsgUpdateUnitListing.encode(value).finish()
      };
    },
    makeOffer(value: MsgMakeOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMakeOffer",
        value: MsgMakeOffer.encode(value).finish()
      };
    },
    cancelOffer(value: MsgCancelOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOffer",
        value: MsgCancelOffer.encode(value).finish()
      };
    },
    acceptOffer(value: MsgAcceptOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptOffer",
        value: MsgAcceptOffer.encode(value).finish()
      };
    },
    startAuction(value: MsgStartAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgStartAuction",
        value: MsgStartAuction.encode(value).finish()
      };
    },
    bid(value: MsgBid) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBid",
        value: MsgBid.encode(value).finish()
      };
    },
    settleAuction(value: MsgSettleAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSettleAuction",
        value: MsgSettleAuction.encode(value).finish()
      };
    },
    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelAuction",
        value: MsgCancelAuction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
        value
      };
    },
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
        value
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
        value
      };
    },
    freezeClassMetadata(value: MsgFreezeClassMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
        value
      };
    },
    setMintPolicy(value: MsgSetMintPolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
        value
      };
    },
    setMinters(value: MsgSetMinters) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
        value
      };
    },
    setMaxSupply(value: MsgSetMaxSupply) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
        value
      };
    },
    closeMinting(value: MsgCloseMinting) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
        value
      };
    },
    proposeClassOwner(value: MsgProposeClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
        value
      };
    },
    acceptClassOwner(value: MsgAcceptClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
        value
      };
    },
    cancelClassOwner(value: MsgCancelClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
        value
      };
    },
    deleteClass(value: MsgDeleteClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMint",
        value
      };
    },
    publicMint(value: MsgPublicMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
        value
      };
    },
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
        value
      };
    },
    acceptIncoming(value: MsgAcceptIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
        value
      };
    },
    rejectIncoming(value: MsgRejectIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
        value
      };
    },
    cancelOutgoing(value: MsgCancelOutgoing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
        value
      };
    },
    setReceivePolicy(value: MsgSetReceivePolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurn",
        value
      };
    },
    revoke(value: MsgRevoke) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
        value
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
        value
      };
    },
    freezeTokenMetadata(value: MsgFreezeTokenMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
        value
      };
    },
    list(value: MsgList) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgList",
        value
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
        value
      };
    },
    delist(value: MsgDelist) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelist",
        value
      };
    },
    buy(value: MsgBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuy",
        value
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
        value
      };
    },
    unhideContent(value: MsgUnhideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
        value
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
        value
      };
    },
    issue(value: MsgIssue) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgIssue",
        value
      };
    },
    renew(value: MsgRenew) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRenew",
        value
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRedeem",
        value
      };
    },
    lockRoyalty(value: MsgLockRoyalty) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgLockRoyalty",
        value
      };
    },
    reveal(value: MsgReveal) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgReveal",
        value
      };
    },
    revealSeed(value: MsgRevealSeed) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevealSeed",
        value
      };
    },
    proposeMedia(value: MsgProposeMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeMedia",
        value
      };
    },
    acceptMedia(value: MsgAcceptMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptMedia",
        value
      };
    },
    rejectMedia(value: MsgRejectMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectMedia",
        value
      };
    },
    setDisplayedMedia(value: MsgSetDisplayedMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMedia",
        value
      };
    },
    createEdition(value: MsgCreateEdition) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateEdition",
        value
      };
    },
    mintUnits(value: MsgMintUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMintUnits",
        value
      };
    },
    transferUnits(value: MsgTransferUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransferUnits",
        value
      };
    },
    burnUnits(value: MsgBurnUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurnUnits",
        value
      };
    },
    revokeUnits(value: MsgRevokeUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnits",
        value
      };
    },
    listUnits(value: MsgListUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgListUnits",
        value
      };
    },
    delistUnits(value: MsgDelistUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelistUnits",
        value
      };
    },
    buyUnits(value: MsgBuyUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuyUnits",
        value
      };
    },
    fundEdition(value: MsgFundEdition) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFundEdition",
        value
      };
    },
    claimEditionRewards(value: MsgClaimEditionRewards) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewards",
        value
      };
    },
    addCraftRecipe(value: MsgAddCraftRecipe) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipe",
        value
      };
    },
    removeCraftRecipe(value: MsgRemoveCraftRecipe) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipe",
        value
      };
    },
    craft(value: MsgCraft) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCraft",
        value
      };
    },
    offerRental(value: MsgOfferRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgOfferRental",
        value
      };
    },
    cancelRentalOffer(value: MsgCancelRentalOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOffer",
        value
      };
    },
    acceptRental(value: MsgAcceptRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptRental",
        value
      };
    },
    endRental(value: MsgEndRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgEndRental",
        value
      };
    },
    nest(value: MsgNest) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgNest",
        value
      };
    },
    detach(value: MsgDetach) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDetach",
        value
      };
    },
    setHarbergerPrice(value: MsgSetHarbergerPrice) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPrice",
        value
      };
    },
    forceBuy(value: MsgForceBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgForceBuy",
        value
      };
    },
    updateUnitListing(value: MsgUpdateUnitListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListing",
        value
      };
    },
    makeOffer(value: MsgMakeOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMakeOffer",
        value
      };
    },
    cancelOffer(value: MsgCancelOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOffer",
        value
      };
    },
    acceptOffer(value: MsgAcceptOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptOffer",
        value
      };
    },
    startAuction(value: MsgStartAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgStartAuction",
        value
      };
    },
    bid(value: MsgBid) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBid",
        value
      };
    },
    settleAuction(value: MsgSettleAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSettleAuction",
        value
      };
    },
    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelAuction",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
        value: MsgCreateClass.fromPartial(value)
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
        value: MsgUpdateClass.fromPartial(value)
      };
    },
    freezeClassMetadata(value: MsgFreezeClassMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
        value: MsgFreezeClassMetadata.fromPartial(value)
      };
    },
    setMintPolicy(value: MsgSetMintPolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
        value: MsgSetMintPolicy.fromPartial(value)
      };
    },
    setMinters(value: MsgSetMinters) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
        value: MsgSetMinters.fromPartial(value)
      };
    },
    setMaxSupply(value: MsgSetMaxSupply) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
        value: MsgSetMaxSupply.fromPartial(value)
      };
    },
    closeMinting(value: MsgCloseMinting) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
        value: MsgCloseMinting.fromPartial(value)
      };
    },
    proposeClassOwner(value: MsgProposeClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
        value: MsgProposeClassOwner.fromPartial(value)
      };
    },
    acceptClassOwner(value: MsgAcceptClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
        value: MsgAcceptClassOwner.fromPartial(value)
      };
    },
    cancelClassOwner(value: MsgCancelClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
        value: MsgCancelClassOwner.fromPartial(value)
      };
    },
    deleteClass(value: MsgDeleteClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
        value: MsgDeleteClass.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    publicMint(value: MsgPublicMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
        value: MsgPublicMint.fromPartial(value)
      };
    },
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(value)
      };
    },
    acceptIncoming(value: MsgAcceptIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
        value: MsgAcceptIncoming.fromPartial(value)
      };
    },
    rejectIncoming(value: MsgRejectIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
        value: MsgRejectIncoming.fromPartial(value)
      };
    },
    cancelOutgoing(value: MsgCancelOutgoing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
        value: MsgCancelOutgoing.fromPartial(value)
      };
    },
    setReceivePolicy(value: MsgSetReceivePolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
        value: MsgSetReceivePolicy.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    revoke(value: MsgRevoke) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
        value: MsgRevoke.fromPartial(value)
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
        value: MsgUpdateToken.fromPartial(value)
      };
    },
    freezeTokenMetadata(value: MsgFreezeTokenMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
        value: MsgFreezeTokenMetadata.fromPartial(value)
      };
    },
    list(value: MsgList) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgList",
        value: MsgList.fromPartial(value)
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
        value: MsgUpdateListing.fromPartial(value)
      };
    },
    delist(value: MsgDelist) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelist",
        value: MsgDelist.fromPartial(value)
      };
    },
    buy(value: MsgBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuy",
        value: MsgBuy.fromPartial(value)
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
        value: MsgHideContent.fromPartial(value)
      };
    },
    unhideContent(value: MsgUnhideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
        value: MsgUnhideContent.fromPartial(value)
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
        value: MsgAppealHide.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    issue(value: MsgIssue) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgIssue",
        value: MsgIssue.fromPartial(value)
      };
    },
    renew(value: MsgRenew) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRenew",
        value: MsgRenew.fromPartial(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRedeem",
        value: MsgRedeem.fromPartial(value)
      };
    },
    lockRoyalty(value: MsgLockRoyalty) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgLockRoyalty",
        value: MsgLockRoyalty.fromPartial(value)
      };
    },
    reveal(value: MsgReveal) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgReveal",
        value: MsgReveal.fromPartial(value)
      };
    },
    revealSeed(value: MsgRevealSeed) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevealSeed",
        value: MsgRevealSeed.fromPartial(value)
      };
    },
    proposeMedia(value: MsgProposeMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeMedia",
        value: MsgProposeMedia.fromPartial(value)
      };
    },
    acceptMedia(value: MsgAcceptMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptMedia",
        value: MsgAcceptMedia.fromPartial(value)
      };
    },
    rejectMedia(value: MsgRejectMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectMedia",
        value: MsgRejectMedia.fromPartial(value)
      };
    },
    setDisplayedMedia(value: MsgSetDisplayedMedia) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMedia",
        value: MsgSetDisplayedMedia.fromPartial(value)
      };
    },
    createEdition(value: MsgCreateEdition) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateEdition",
        value: MsgCreateEdition.fromPartial(value)
      };
    },
    mintUnits(value: MsgMintUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMintUnits",
        value: MsgMintUnits.fromPartial(value)
      };
    },
    transferUnits(value: MsgTransferUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransferUnits",
        value: MsgTransferUnits.fromPartial(value)
      };
    },
    burnUnits(value: MsgBurnUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurnUnits",
        value: MsgBurnUnits.fromPartial(value)
      };
    },
    revokeUnits(value: MsgRevokeUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnits",
        value: MsgRevokeUnits.fromPartial(value)
      };
    },
    listUnits(value: MsgListUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgListUnits",
        value: MsgListUnits.fromPartial(value)
      };
    },
    delistUnits(value: MsgDelistUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelistUnits",
        value: MsgDelistUnits.fromPartial(value)
      };
    },
    buyUnits(value: MsgBuyUnits) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuyUnits",
        value: MsgBuyUnits.fromPartial(value)
      };
    },
    fundEdition(value: MsgFundEdition) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFundEdition",
        value: MsgFundEdition.fromPartial(value)
      };
    },
    claimEditionRewards(value: MsgClaimEditionRewards) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewards",
        value: MsgClaimEditionRewards.fromPartial(value)
      };
    },
    addCraftRecipe(value: MsgAddCraftRecipe) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipe",
        value: MsgAddCraftRecipe.fromPartial(value)
      };
    },
    removeCraftRecipe(value: MsgRemoveCraftRecipe) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipe",
        value: MsgRemoveCraftRecipe.fromPartial(value)
      };
    },
    craft(value: MsgCraft) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCraft",
        value: MsgCraft.fromPartial(value)
      };
    },
    offerRental(value: MsgOfferRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgOfferRental",
        value: MsgOfferRental.fromPartial(value)
      };
    },
    cancelRentalOffer(value: MsgCancelRentalOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOffer",
        value: MsgCancelRentalOffer.fromPartial(value)
      };
    },
    acceptRental(value: MsgAcceptRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptRental",
        value: MsgAcceptRental.fromPartial(value)
      };
    },
    endRental(value: MsgEndRental) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgEndRental",
        value: MsgEndRental.fromPartial(value)
      };
    },
    nest(value: MsgNest) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgNest",
        value: MsgNest.fromPartial(value)
      };
    },
    detach(value: MsgDetach) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDetach",
        value: MsgDetach.fromPartial(value)
      };
    },
    setHarbergerPrice(value: MsgSetHarbergerPrice) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPrice",
        value: MsgSetHarbergerPrice.fromPartial(value)
      };
    },
    forceBuy(value: MsgForceBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgForceBuy",
        value: MsgForceBuy.fromPartial(value)
      };
    },
    updateUnitListing(value: MsgUpdateUnitListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListing",
        value: MsgUpdateUnitListing.fromPartial(value)
      };
    },
    makeOffer(value: MsgMakeOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMakeOffer",
        value: MsgMakeOffer.fromPartial(value)
      };
    },
    cancelOffer(value: MsgCancelOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOffer",
        value: MsgCancelOffer.fromPartial(value)
      };
    },
    acceptOffer(value: MsgAcceptOffer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptOffer",
        value: MsgAcceptOffer.fromPartial(value)
      };
    },
    startAuction(value: MsgStartAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgStartAuction",
        value: MsgStartAuction.fromPartial(value)
      };
    },
    bid(value: MsgBid) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBid",
        value: MsgBid.fromPartial(value)
      };
    },
    settleAuction(value: MsgSettleAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSettleAuction",
        value: MsgSettleAuction.fromPartial(value)
      };
    },
    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelAuction",
        value: MsgCancelAuction.fromPartial(value)
      };
    }
  }
};