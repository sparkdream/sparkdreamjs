//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateCollection, MsgUpdateCollection, MsgDeleteCollection, MsgAddItem, MsgAddItems, MsgUpdateItem, MsgRemoveItem, MsgRemoveItems, MsgReorderItem, MsgAddCollaborator, MsgRemoveCollaborator, MsgUpdateCollaboratorRole, MsgRateCollection, MsgChallengeReview, MsgRequestSponsorship, MsgCancelSponsorshipRequest, MsgSponsorCollection, MsgUpdateOperationalParams, MsgUpvoteContent, MsgDownvoteContent, MsgFlagContent, MsgHideContent, MsgAppealHide, MsgEndorseCollection, MsgSetSeekingEndorsement, MsgPinCollection, MsgUnpinCollection, MsgMakeCollectionPermanent } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.collect.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.collect.v1.MsgCreateCollection", MsgCreateCollection], ["/sparkdream.collect.v1.MsgUpdateCollection", MsgUpdateCollection], ["/sparkdream.collect.v1.MsgDeleteCollection", MsgDeleteCollection], ["/sparkdream.collect.v1.MsgAddItem", MsgAddItem], ["/sparkdream.collect.v1.MsgAddItems", MsgAddItems], ["/sparkdream.collect.v1.MsgUpdateItem", MsgUpdateItem], ["/sparkdream.collect.v1.MsgRemoveItem", MsgRemoveItem], ["/sparkdream.collect.v1.MsgRemoveItems", MsgRemoveItems], ["/sparkdream.collect.v1.MsgReorderItem", MsgReorderItem], ["/sparkdream.collect.v1.MsgAddCollaborator", MsgAddCollaborator], ["/sparkdream.collect.v1.MsgRemoveCollaborator", MsgRemoveCollaborator], ["/sparkdream.collect.v1.MsgUpdateCollaboratorRole", MsgUpdateCollaboratorRole], ["/sparkdream.collect.v1.MsgRateCollection", MsgRateCollection], ["/sparkdream.collect.v1.MsgChallengeReview", MsgChallengeReview], ["/sparkdream.collect.v1.MsgRequestSponsorship", MsgRequestSponsorship], ["/sparkdream.collect.v1.MsgCancelSponsorshipRequest", MsgCancelSponsorshipRequest], ["/sparkdream.collect.v1.MsgSponsorCollection", MsgSponsorCollection], ["/sparkdream.collect.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.collect.v1.MsgUpvoteContent", MsgUpvoteContent], ["/sparkdream.collect.v1.MsgDownvoteContent", MsgDownvoteContent], ["/sparkdream.collect.v1.MsgFlagContent", MsgFlagContent], ["/sparkdream.collect.v1.MsgHideContent", MsgHideContent], ["/sparkdream.collect.v1.MsgAppealHide", MsgAppealHide], ["/sparkdream.collect.v1.MsgEndorseCollection", MsgEndorseCollection], ["/sparkdream.collect.v1.MsgSetSeekingEndorsement", MsgSetSeekingEndorsement], ["/sparkdream.collect.v1.MsgPinCollection", MsgPinCollection], ["/sparkdream.collect.v1.MsgUnpinCollection", MsgUnpinCollection], ["/sparkdream.collect.v1.MsgMakeCollectionPermanent", MsgMakeCollectionPermanent]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createCollection(value: MsgCreateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgCreateCollection",
        value: MsgCreateCollection.encode(value).finish()
      };
    },
    updateCollection(value: MsgUpdateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateCollection",
        value: MsgUpdateCollection.encode(value).finish()
      };
    },
    deleteCollection(value: MsgDeleteCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgDeleteCollection",
        value: MsgDeleteCollection.encode(value).finish()
      };
    },
    addItem(value: MsgAddItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddItem",
        value: MsgAddItem.encode(value).finish()
      };
    },
    addItems(value: MsgAddItems) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddItems",
        value: MsgAddItems.encode(value).finish()
      };
    },
    updateItem(value: MsgUpdateItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateItem",
        value: MsgUpdateItem.encode(value).finish()
      };
    },
    removeItem(value: MsgRemoveItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveItem",
        value: MsgRemoveItem.encode(value).finish()
      };
    },
    removeItems(value: MsgRemoveItems) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveItems",
        value: MsgRemoveItems.encode(value).finish()
      };
    },
    reorderItem(value: MsgReorderItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgReorderItem",
        value: MsgReorderItem.encode(value).finish()
      };
    },
    addCollaborator(value: MsgAddCollaborator) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddCollaborator",
        value: MsgAddCollaborator.encode(value).finish()
      };
    },
    removeCollaborator(value: MsgRemoveCollaborator) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaborator",
        value: MsgRemoveCollaborator.encode(value).finish()
      };
    },
    updateCollaboratorRole(value: MsgUpdateCollaboratorRole) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole",
        value: MsgUpdateCollaboratorRole.encode(value).finish()
      };
    },
    rateCollection(value: MsgRateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRateCollection",
        value: MsgRateCollection.encode(value).finish()
      };
    },
    challengeReview(value: MsgChallengeReview) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgChallengeReview",
        value: MsgChallengeReview.encode(value).finish()
      };
    },
    requestSponsorship(value: MsgRequestSponsorship) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorship",
        value: MsgRequestSponsorship.encode(value).finish()
      };
    },
    cancelSponsorshipRequest(value: MsgCancelSponsorshipRequest) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest",
        value: MsgCancelSponsorshipRequest.encode(value).finish()
      };
    },
    sponsorCollection(value: MsgSponsorCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgSponsorCollection",
        value: MsgSponsorCollection.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    upvoteContent(value: MsgUpvoteContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpvoteContent",
        value: MsgUpvoteContent.encode(value).finish()
      };
    },
    downvoteContent(value: MsgDownvoteContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgDownvoteContent",
        value: MsgDownvoteContent.encode(value).finish()
      };
    },
    flagContent(value: MsgFlagContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgFlagContent",
        value: MsgFlagContent.encode(value).finish()
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgHideContent",
        value: MsgHideContent.encode(value).finish()
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAppealHide",
        value: MsgAppealHide.encode(value).finish()
      };
    },
    endorseCollection(value: MsgEndorseCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgEndorseCollection",
        value: MsgEndorseCollection.encode(value).finish()
      };
    },
    setSeekingEndorsement(value: MsgSetSeekingEndorsement) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsement",
        value: MsgSetSeekingEndorsement.encode(value).finish()
      };
    },
    pinCollection(value: MsgPinCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgPinCollection",
        value: MsgPinCollection.encode(value).finish()
      };
    },
    unpinCollection(value: MsgUnpinCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUnpinCollection",
        value: MsgUnpinCollection.encode(value).finish()
      };
    },
    makeCollectionPermanent(value: MsgMakeCollectionPermanent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanent",
        value: MsgMakeCollectionPermanent.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateParams",
        value
      };
    },
    createCollection(value: MsgCreateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgCreateCollection",
        value
      };
    },
    updateCollection(value: MsgUpdateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateCollection",
        value
      };
    },
    deleteCollection(value: MsgDeleteCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgDeleteCollection",
        value
      };
    },
    addItem(value: MsgAddItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddItem",
        value
      };
    },
    addItems(value: MsgAddItems) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddItems",
        value
      };
    },
    updateItem(value: MsgUpdateItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateItem",
        value
      };
    },
    removeItem(value: MsgRemoveItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveItem",
        value
      };
    },
    removeItems(value: MsgRemoveItems) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveItems",
        value
      };
    },
    reorderItem(value: MsgReorderItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgReorderItem",
        value
      };
    },
    addCollaborator(value: MsgAddCollaborator) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddCollaborator",
        value
      };
    },
    removeCollaborator(value: MsgRemoveCollaborator) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaborator",
        value
      };
    },
    updateCollaboratorRole(value: MsgUpdateCollaboratorRole) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole",
        value
      };
    },
    rateCollection(value: MsgRateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRateCollection",
        value
      };
    },
    challengeReview(value: MsgChallengeReview) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgChallengeReview",
        value
      };
    },
    requestSponsorship(value: MsgRequestSponsorship) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorship",
        value
      };
    },
    cancelSponsorshipRequest(value: MsgCancelSponsorshipRequest) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest",
        value
      };
    },
    sponsorCollection(value: MsgSponsorCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgSponsorCollection",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParams",
        value
      };
    },
    upvoteContent(value: MsgUpvoteContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpvoteContent",
        value
      };
    },
    downvoteContent(value: MsgDownvoteContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgDownvoteContent",
        value
      };
    },
    flagContent(value: MsgFlagContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgFlagContent",
        value
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgHideContent",
        value
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAppealHide",
        value
      };
    },
    endorseCollection(value: MsgEndorseCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgEndorseCollection",
        value
      };
    },
    setSeekingEndorsement(value: MsgSetSeekingEndorsement) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsement",
        value
      };
    },
    pinCollection(value: MsgPinCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgPinCollection",
        value
      };
    },
    unpinCollection(value: MsgUnpinCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUnpinCollection",
        value
      };
    },
    makeCollectionPermanent(value: MsgMakeCollectionPermanent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanent",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createCollection(value: MsgCreateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgCreateCollection",
        value: MsgCreateCollection.fromPartial(value)
      };
    },
    updateCollection(value: MsgUpdateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateCollection",
        value: MsgUpdateCollection.fromPartial(value)
      };
    },
    deleteCollection(value: MsgDeleteCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgDeleteCollection",
        value: MsgDeleteCollection.fromPartial(value)
      };
    },
    addItem(value: MsgAddItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddItem",
        value: MsgAddItem.fromPartial(value)
      };
    },
    addItems(value: MsgAddItems) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddItems",
        value: MsgAddItems.fromPartial(value)
      };
    },
    updateItem(value: MsgUpdateItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateItem",
        value: MsgUpdateItem.fromPartial(value)
      };
    },
    removeItem(value: MsgRemoveItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveItem",
        value: MsgRemoveItem.fromPartial(value)
      };
    },
    removeItems(value: MsgRemoveItems) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveItems",
        value: MsgRemoveItems.fromPartial(value)
      };
    },
    reorderItem(value: MsgReorderItem) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgReorderItem",
        value: MsgReorderItem.fromPartial(value)
      };
    },
    addCollaborator(value: MsgAddCollaborator) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAddCollaborator",
        value: MsgAddCollaborator.fromPartial(value)
      };
    },
    removeCollaborator(value: MsgRemoveCollaborator) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRemoveCollaborator",
        value: MsgRemoveCollaborator.fromPartial(value)
      };
    },
    updateCollaboratorRole(value: MsgUpdateCollaboratorRole) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole",
        value: MsgUpdateCollaboratorRole.fromPartial(value)
      };
    },
    rateCollection(value: MsgRateCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRateCollection",
        value: MsgRateCollection.fromPartial(value)
      };
    },
    challengeReview(value: MsgChallengeReview) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgChallengeReview",
        value: MsgChallengeReview.fromPartial(value)
      };
    },
    requestSponsorship(value: MsgRequestSponsorship) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgRequestSponsorship",
        value: MsgRequestSponsorship.fromPartial(value)
      };
    },
    cancelSponsorshipRequest(value: MsgCancelSponsorshipRequest) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest",
        value: MsgCancelSponsorshipRequest.fromPartial(value)
      };
    },
    sponsorCollection(value: MsgSponsorCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgSponsorCollection",
        value: MsgSponsorCollection.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    upvoteContent(value: MsgUpvoteContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUpvoteContent",
        value: MsgUpvoteContent.fromPartial(value)
      };
    },
    downvoteContent(value: MsgDownvoteContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgDownvoteContent",
        value: MsgDownvoteContent.fromPartial(value)
      };
    },
    flagContent(value: MsgFlagContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgFlagContent",
        value: MsgFlagContent.fromPartial(value)
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgHideContent",
        value: MsgHideContent.fromPartial(value)
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgAppealHide",
        value: MsgAppealHide.fromPartial(value)
      };
    },
    endorseCollection(value: MsgEndorseCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgEndorseCollection",
        value: MsgEndorseCollection.fromPartial(value)
      };
    },
    setSeekingEndorsement(value: MsgSetSeekingEndorsement) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgSetSeekingEndorsement",
        value: MsgSetSeekingEndorsement.fromPartial(value)
      };
    },
    pinCollection(value: MsgPinCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgPinCollection",
        value: MsgPinCollection.fromPartial(value)
      };
    },
    unpinCollection(value: MsgUnpinCollection) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgUnpinCollection",
        value: MsgUnpinCollection.fromPartial(value)
      };
    },
    makeCollectionPermanent(value: MsgMakeCollectionPermanent) {
      return {
        typeUrl: "/sparkdream.collect.v1.MsgMakeCollectionPermanent",
        value: MsgMakeCollectionPermanent.fromPartial(value)
      };
    }
  }
};