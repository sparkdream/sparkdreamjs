//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope's auto-generated toAmino emits `[]` for empty repeated fields
// (the `if (message.field)` check is truthy for `[]` in JS), but
// cosmossdk.io/x/tx/signing/aminojson on the chain side omits them per
// `omitempty`. Whenever a repeated field happens to be empty, the JS side signs
// `"field":[]` and the chain reconstructs without the key — sign bytes differ,
// surfacing as "signature verification failed" / "unauthorized".
//
// Every artifact message with a repeated field not marked
// `(amino.dont_omitempty) = true` is patched here to mirror aminojson's
// omitempty (return `undefined` when empty). The rest of the converters pass
// straight through to the auto-generated toAmino/fromAmino.
//
// MAINTENANCE: this map REPLACES the generated one wholesale, so it must list
// every message in tx.proto. A message added to the proto but not added here
// ends up with no amino converter at all, and amino (Ledger) signing for it
// fails at runtime. When syncing protos, diff the message list in
// protos/sparkdream/artifact/v1/tx.proto against the keys below.

import { MsgUpdateParams, MsgCreateClass, MsgUpdateClass, MsgFreezeClassMetadata, MsgSetMintPolicy, MsgSetMinters, MsgSetMaxSupply, MsgCloseMinting, MsgProposeClassOwner, MsgAcceptClassOwner, MsgCancelClassOwner, MsgDeleteClass, MsgMint, MsgPublicMint, MsgTransfer, MsgAcceptIncoming, MsgRejectIncoming, MsgCancelOutgoing, MsgSetReceivePolicy, MsgBurn, MsgRevoke, MsgUpdateToken, MsgFreezeTokenMetadata, MsgList, MsgUpdateListing, MsgDelist, MsgBuy, MsgHideContent, MsgUnhideContent, MsgAppealHide, MsgUpdateOperationalParams, MsgIssue, MsgRenew, MsgRedeem, MsgLockRoyalty, MsgReveal, MsgRevealSeed, MsgProposeMedia, MsgAcceptMedia, MsgRejectMedia, MsgSetDisplayedMedia, MsgCreateEdition, MsgMintUnits, MsgTransferUnits, MsgBurnUnits, MsgRevokeUnits, MsgListUnits, MsgDelistUnits, MsgBuyUnits, MsgFundEdition, MsgClaimEditionRewards, MsgAddCraftRecipe, MsgRemoveCraftRecipe, MsgCraft, MsgOfferRental, MsgCancelRentalOffer, MsgAcceptRental, MsgEndRental, MsgNest, MsgDetach, MsgSetHarbergerPrice, MsgForceBuy, MsgUpdateUnitListing, MsgMakeOffer, MsgCancelOffer, MsgAcceptOffer, MsgStartAuction, MsgBid, MsgSettleAuction, MsgCancelAuction } from "./tx";
import {
  ClassFlags, ExpiryPolicy, HarbergerPolicy, MintPolicy, Renderer, RevealPolicy,
  RoyaltyShare, TokenMetadata, TokenRef,
} from "./types";
export const AminoConverter = {
  "/sparkdream.artifact.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/artifact/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCreateClass": {
    aminoType: "sparkdream/x/artifact/MsgCreateClass",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.name = message.name === "" ? undefined : message.name;
      obj.symbol = message.symbol === "" ? undefined : message.symbol;
      obj.description = message.description === "" ? undefined : message.description;
      obj.uri = message.uri === "" ? undefined : message.uri;
      obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
      obj.token_uri_base = message.tokenUriBase === "" ? undefined : message.tokenUriBase;
      obj.flags = message.flags ? ClassFlags.toAmino(message.flags) : ClassFlags.toAmino(ClassFlags.fromPartial({}));
      obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
      obj.mint_policy = message.mintPolicy ? MintPolicy.toAmino(message.mintPolicy) : MintPolicy.toAmino(MintPolicy.fromPartial({}));
      obj.payout_address = message.payoutAddress === "" ? undefined : message.payoutAddress;
      obj.royalty_bps = message.royaltyBps === 0 ? undefined : message.royaltyBps;
      obj.royalty_recipients = (message.royaltyRecipients?.length ?? 0) > 0
        ? message.royaltyRecipients.map((e: any) => e ? RoyaltyShare.toAmino(e) : undefined)
        : undefined;
      obj.minters = (message.minters?.length ?? 0) > 0
        ? message.minters.map((e: any) => e)
        : undefined;
      obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
      obj.expiry = message.expiry ? ExpiryPolicy.toAmino(message.expiry) : ExpiryPolicy.toAmino(ExpiryPolicy.fromPartial({}));
      obj.reveal = message.reveal ? RevealPolicy.toAmino(message.reveal) : RevealPolicy.toAmino(RevealPolicy.fromPartial({}));
      obj.renderer = message.renderer ? Renderer.toAmino(message.renderer) : Renderer.toAmino(Renderer.fromPartial({}));
      obj.token_model = message.tokenModel === 0 ? undefined : message.tokenModel;
      obj.harberger = message.harberger ? HarbergerPolicy.toAmino(message.harberger) : HarbergerPolicy.toAmino(HarbergerPolicy.fromPartial({}));
      return obj;
    },
    fromAmino: MsgCreateClass.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateClass": {
    aminoType: "sparkdream/x/artifact/MsgUpdateClass",
    toAmino(message: any): any {
      const obj: any = {};
      obj.owner = message.owner === "" ? undefined : message.owner;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.name = message.name === "" ? undefined : message.name;
      obj.description = message.description === "" ? undefined : message.description;
      obj.uri = message.uri === "" ? undefined : message.uri;
      obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
      obj.token_uri_base = message.tokenUriBase === "" ? undefined : message.tokenUriBase;
      obj.payout_address = message.payoutAddress === "" ? undefined : message.payoutAddress;
      obj.royalty_recipients = (message.royaltyRecipients?.length ?? 0) > 0
        ? message.royaltyRecipients.map((e: any) => e ? RoyaltyShare.toAmino(e) : undefined)
        : undefined;
      obj.royalty_bps = message.royaltyBps === 0 ? undefined : message.royaltyBps;
      obj.update_mask = (message.updateMask?.length ?? 0) > 0
        ? message.updateMask.map((e: any) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgUpdateClass.fromAmino
  },
  "/sparkdream.artifact.v1.MsgFreezeClassMetadata": {
    aminoType: "sparkdream/x/artifact/MsgFreezeClassMetadata",
    toAmino: MsgFreezeClassMetadata.toAmino,
    fromAmino: MsgFreezeClassMetadata.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetMintPolicy": {
    aminoType: "sparkdream/x/artifact/MsgSetMintPolicy",
    toAmino: MsgSetMintPolicy.toAmino,
    fromAmino: MsgSetMintPolicy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetMinters": {
    aminoType: "sparkdream/x/artifact/MsgSetMinters",
    toAmino(message: any): any {
      const obj: any = {};
      obj.owner = message.owner === "" ? undefined : message.owner;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.add = (message.add?.length ?? 0) > 0
        ? message.add.map((e: any) => e)
        : undefined;
      obj.remove = (message.remove?.length ?? 0) > 0
        ? message.remove.map((e: any) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgSetMinters.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetMaxSupply": {
    aminoType: "sparkdream/x/artifact/MsgSetMaxSupply",
    toAmino: MsgSetMaxSupply.toAmino,
    fromAmino: MsgSetMaxSupply.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCloseMinting": {
    aminoType: "sparkdream/x/artifact/MsgCloseMinting",
    toAmino: MsgCloseMinting.toAmino,
    fromAmino: MsgCloseMinting.fromAmino
  },
  "/sparkdream.artifact.v1.MsgProposeClassOwner": {
    aminoType: "sparkdream/x/artifact/MsgProposeClassOwner",
    toAmino: MsgProposeClassOwner.toAmino,
    fromAmino: MsgProposeClassOwner.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptClassOwner": {
    aminoType: "sparkdream/x/artifact/MsgAcceptClassOwner",
    toAmino: MsgAcceptClassOwner.toAmino,
    fromAmino: MsgAcceptClassOwner.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelClassOwner": {
    aminoType: "sparkdream/x/artifact/MsgCancelClassOwner",
    toAmino: MsgCancelClassOwner.toAmino,
    fromAmino: MsgCancelClassOwner.fromAmino
  },
  "/sparkdream.artifact.v1.MsgDeleteClass": {
    aminoType: "sparkdream/x/artifact/MsgDeleteClass",
    toAmino: MsgDeleteClass.toAmino,
    fromAmino: MsgDeleteClass.fromAmino
  },
  "/sparkdream.artifact.v1.MsgMint": {
    aminoType: "sparkdream/x/artifact/MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/sparkdream.artifact.v1.MsgPublicMint": {
    aminoType: "sparkdream/x/artifact/MsgPublicMint",
    toAmino: MsgPublicMint.toAmino,
    fromAmino: MsgPublicMint.fromAmino
  },
  "/sparkdream.artifact.v1.MsgTransfer": {
    aminoType: "sparkdream/x/artifact/MsgTransfer",
    toAmino: MsgTransfer.toAmino,
    fromAmino: MsgTransfer.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptIncoming": {
    aminoType: "sparkdream/x/artifact/MsgAcceptIncoming",
    toAmino: MsgAcceptIncoming.toAmino,
    fromAmino: MsgAcceptIncoming.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRejectIncoming": {
    aminoType: "sparkdream/x/artifact/MsgRejectIncoming",
    toAmino: MsgRejectIncoming.toAmino,
    fromAmino: MsgRejectIncoming.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelOutgoing": {
    aminoType: "sparkdream/x/artifact/MsgCancelOutgoing",
    toAmino: MsgCancelOutgoing.toAmino,
    fromAmino: MsgCancelOutgoing.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetReceivePolicy": {
    aminoType: "sparkdream/x/artifact/MsgSetReceivePolicy",
    toAmino: MsgSetReceivePolicy.toAmino,
    fromAmino: MsgSetReceivePolicy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBurn": {
    aminoType: "sparkdream/x/artifact/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRevoke": {
    aminoType: "sparkdream/x/artifact/MsgRevoke",
    toAmino(message: any): any {
      const obj: any = {};
      obj.owner = message.owner === "" ? undefined : message.owner;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.token_ids = (message.tokenIds?.length ?? 0) > 0
        ? message.tokenIds.map((e: any) => e.toString())
        : undefined;
      obj.reason = message.reason === "" ? undefined : message.reason;
      return obj;
    },
    fromAmino: MsgRevoke.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateToken": {
    aminoType: "sparkdream/x/artifact/MsgUpdateToken",
    toAmino: MsgUpdateToken.toAmino,
    fromAmino: MsgUpdateToken.fromAmino
  },
  "/sparkdream.artifact.v1.MsgFreezeTokenMetadata": {
    aminoType: "sparkdream/x/artifact/MsgFreezeTokenMetadata",
    toAmino: MsgFreezeTokenMetadata.toAmino,
    fromAmino: MsgFreezeTokenMetadata.fromAmino
  },
  "/sparkdream.artifact.v1.MsgList": {
    aminoType: "sparkdream/x/artifact/MsgList",
    toAmino: MsgList.toAmino,
    fromAmino: MsgList.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateListing": {
    aminoType: "sparkdream/x/artifact/MsgUpdateListing",
    toAmino: MsgUpdateListing.toAmino,
    fromAmino: MsgUpdateListing.fromAmino
  },
  "/sparkdream.artifact.v1.MsgDelist": {
    aminoType: "sparkdream/x/artifact/MsgDelist",
    toAmino: MsgDelist.toAmino,
    fromAmino: MsgDelist.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBuy": {
    aminoType: "sparkdream/x/artifact/MsgBuy",
    toAmino: MsgBuy.toAmino,
    fromAmino: MsgBuy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgHideContent": {
    aminoType: "sparkdream/x/artifact/MsgHideContent",
    toAmino: MsgHideContent.toAmino,
    fromAmino: MsgHideContent.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUnhideContent": {
    aminoType: "sparkdream/x/artifact/MsgUnhideContent",
    toAmino: MsgUnhideContent.toAmino,
    fromAmino: MsgUnhideContent.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAppealHide": {
    aminoType: "sparkdream/x/artifact/MsgAppealHide",
    toAmino: MsgAppealHide.toAmino,
    fromAmino: MsgAppealHide.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/artifact/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.artifact.v1.MsgIssue": {
    aminoType: "sparkdream/x/artifact/MsgIssue",
    toAmino(message: any): any {
      const obj: any = {};
      obj.minter = message.minter === "" ? undefined : message.minter;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.recipients = (message.recipients?.length ?? 0) > 0
        ? message.recipients.map((e: any) => e)
        : undefined;
      obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
      obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
      return obj;
    },
    fromAmino: MsgIssue.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRenew": {
    aminoType: "sparkdream/x/artifact/MsgRenew",
    toAmino: MsgRenew.toAmino,
    fromAmino: MsgRenew.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRedeem": {
    aminoType: "sparkdream/x/artifact/MsgRedeem",
    toAmino(message: any): any {
      const obj: any = {};
      obj.signer = message.signer === "" ? undefined : message.signer;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.token_ids = (message.tokenIds?.length ?? 0) > 0
        ? message.tokenIds.map((e: any) => e.toString())
        : undefined;
      return obj;
    },
    fromAmino: MsgRedeem.fromAmino
  },
  "/sparkdream.artifact.v1.MsgLockRoyalty": {
    aminoType: "sparkdream/x/artifact/MsgLockRoyalty",
    toAmino: MsgLockRoyalty.toAmino,
    fromAmino: MsgLockRoyalty.fromAmino
  },
  "/sparkdream.artifact.v1.MsgReveal": {
    aminoType: "sparkdream/x/artifact/MsgReveal",
    toAmino(message: any): any {
      const obj: any = {};
      obj.signer = message.signer === "" ? undefined : message.signer;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
      obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
      obj.salt = message.salt === "" ? undefined : message.salt;
      obj.proof = (message.proof?.length ?? 0) > 0
        ? message.proof.map((e: any) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgReveal.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRevealSeed": {
    aminoType: "sparkdream/x/artifact/MsgRevealSeed",
    toAmino: MsgRevealSeed.toAmino,
    fromAmino: MsgRevealSeed.fromAmino
  },
  "/sparkdream.artifact.v1.MsgProposeMedia": {
    aminoType: "sparkdream/x/artifact/MsgProposeMedia",
    toAmino: MsgProposeMedia.toAmino,
    fromAmino: MsgProposeMedia.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptMedia": {
    aminoType: "sparkdream/x/artifact/MsgAcceptMedia",
    toAmino: MsgAcceptMedia.toAmino,
    fromAmino: MsgAcceptMedia.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRejectMedia": {
    aminoType: "sparkdream/x/artifact/MsgRejectMedia",
    toAmino: MsgRejectMedia.toAmino,
    fromAmino: MsgRejectMedia.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetDisplayedMedia": {
    aminoType: "sparkdream/x/artifact/MsgSetDisplayedMedia",
    toAmino: MsgSetDisplayedMedia.toAmino,
    fromAmino: MsgSetDisplayedMedia.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCreateEdition": {
    aminoType: "sparkdream/x/artifact/MsgCreateEdition",
    toAmino: MsgCreateEdition.toAmino,
    fromAmino: MsgCreateEdition.fromAmino
  },
  "/sparkdream.artifact.v1.MsgMintUnits": {
    aminoType: "sparkdream/x/artifact/MsgMintUnits",
    toAmino: MsgMintUnits.toAmino,
    fromAmino: MsgMintUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgTransferUnits": {
    aminoType: "sparkdream/x/artifact/MsgTransferUnits",
    toAmino: MsgTransferUnits.toAmino,
    fromAmino: MsgTransferUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBurnUnits": {
    aminoType: "sparkdream/x/artifact/MsgBurnUnits",
    toAmino: MsgBurnUnits.toAmino,
    fromAmino: MsgBurnUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRevokeUnits": {
    aminoType: "sparkdream/x/artifact/MsgRevokeUnits",
    toAmino: MsgRevokeUnits.toAmino,
    fromAmino: MsgRevokeUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgListUnits": {
    aminoType: "sparkdream/x/artifact/MsgListUnits",
    toAmino: MsgListUnits.toAmino,
    fromAmino: MsgListUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgDelistUnits": {
    aminoType: "sparkdream/x/artifact/MsgDelistUnits",
    toAmino: MsgDelistUnits.toAmino,
    fromAmino: MsgDelistUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBuyUnits": {
    aminoType: "sparkdream/x/artifact/MsgBuyUnits",
    toAmino: MsgBuyUnits.toAmino,
    fromAmino: MsgBuyUnits.fromAmino
  },
  "/sparkdream.artifact.v1.MsgFundEdition": {
    aminoType: "sparkdream/x/artifact/MsgFundEdition",
    toAmino: MsgFundEdition.toAmino,
    fromAmino: MsgFundEdition.fromAmino
  },
  "/sparkdream.artifact.v1.MsgClaimEditionRewards": {
    aminoType: "sparkdream/x/artifact/MsgClaimEditionRewards",
    toAmino: MsgClaimEditionRewards.toAmino,
    fromAmino: MsgClaimEditionRewards.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAddCraftRecipe": {
    aminoType: "sparkdream/x/artifact/MsgAddCraftRecipe",
    toAmino: MsgAddCraftRecipe.toAmino,
    fromAmino: MsgAddCraftRecipe.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRemoveCraftRecipe": {
    aminoType: "sparkdream/x/artifact/MsgRemoveCraftRecipe",
    toAmino: MsgRemoveCraftRecipe.toAmino,
    fromAmino: MsgRemoveCraftRecipe.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCraft": {
    aminoType: "sparkdream/x/artifact/MsgCraft",
    toAmino(message: any): any {
      const obj: any = {};
      obj.crafter = message.crafter === "" ? undefined : message.crafter;
      obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
      obj.recipe_id = message.recipeId !== BigInt(0) ? message.recipeId?.toString() : undefined;
      obj.input_tokens = (message.inputTokens?.length ?? 0) > 0
        ? message.inputTokens.map((e: any) => e ? TokenRef.toAmino(e) : undefined)
        : undefined;
      return obj;
    },
    fromAmino: MsgCraft.fromAmino
  },
  "/sparkdream.artifact.v1.MsgOfferRental": {
    aminoType: "sparkdream/x/artifact/MsgOfferRental",
    toAmino: MsgOfferRental.toAmino,
    fromAmino: MsgOfferRental.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelRentalOffer": {
    aminoType: "sparkdream/x/artifact/MsgCancelRentalOffer",
    toAmino: MsgCancelRentalOffer.toAmino,
    fromAmino: MsgCancelRentalOffer.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptRental": {
    aminoType: "sparkdream/x/artifact/MsgAcceptRental",
    toAmino: MsgAcceptRental.toAmino,
    fromAmino: MsgAcceptRental.fromAmino
  },
  "/sparkdream.artifact.v1.MsgEndRental": {
    aminoType: "sparkdream/x/artifact/MsgEndRental",
    toAmino: MsgEndRental.toAmino,
    fromAmino: MsgEndRental.fromAmino
  },
  "/sparkdream.artifact.v1.MsgNest": {
    aminoType: "sparkdream/x/artifact/MsgNest",
    toAmino: MsgNest.toAmino,
    fromAmino: MsgNest.fromAmino
  },
  "/sparkdream.artifact.v1.MsgDetach": {
    aminoType: "sparkdream/x/artifact/MsgDetach",
    toAmino: MsgDetach.toAmino,
    fromAmino: MsgDetach.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetHarbergerPrice": {
    aminoType: "sparkdream/x/artifact/MsgSetHarbergerPrice",
    toAmino: MsgSetHarbergerPrice.toAmino,
    fromAmino: MsgSetHarbergerPrice.fromAmino
  },
  "/sparkdream.artifact.v1.MsgForceBuy": {
    aminoType: "sparkdream/x/artifact/MsgForceBuy",
    toAmino: MsgForceBuy.toAmino,
    fromAmino: MsgForceBuy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateUnitListing": {
    aminoType: "sparkdream/x/artifact/MsgUpdateUnitListing",
    toAmino: MsgUpdateUnitListing.toAmino,
    fromAmino: MsgUpdateUnitListing.fromAmino
  },
  "/sparkdream.artifact.v1.MsgMakeOffer": {
    aminoType: "sparkdream/x/artifact/MsgMakeOffer",
    toAmino: MsgMakeOffer.toAmino,
    fromAmino: MsgMakeOffer.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelOffer": {
    aminoType: "sparkdream/x/artifact/MsgCancelOffer",
    toAmino: MsgCancelOffer.toAmino,
    fromAmino: MsgCancelOffer.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptOffer": {
    aminoType: "sparkdream/x/artifact/MsgAcceptOffer",
    toAmino: MsgAcceptOffer.toAmino,
    fromAmino: MsgAcceptOffer.fromAmino
  },
  "/sparkdream.artifact.v1.MsgStartAuction": {
    aminoType: "sparkdream/x/artifact/MsgStartAuction",
    toAmino: MsgStartAuction.toAmino,
    fromAmino: MsgStartAuction.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBid": {
    aminoType: "sparkdream/x/artifact/MsgBid",
    toAmino: MsgBid.toAmino,
    fromAmino: MsgBid.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSettleAuction": {
    aminoType: "sparkdream/x/artifact/MsgSettleAuction",
    toAmino: MsgSettleAuction.toAmino,
    fromAmino: MsgSettleAuction.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelAuction": {
    aminoType: "sparkdream/x/artifact/MsgCancelAuction",
    toAmino: MsgCancelAuction.toAmino,
    fromAmino: MsgCancelAuction.fromAmino
  }
};
