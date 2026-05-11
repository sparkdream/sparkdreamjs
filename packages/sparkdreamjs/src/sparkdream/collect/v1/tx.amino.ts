//@ts-nocheck
import { MsgUpdateParams, MsgCreateCollection, MsgUpdateCollection, MsgDeleteCollection, MsgAddItem, MsgAddItems, MsgUpdateItem, MsgRemoveItem, MsgRemoveItems, MsgReorderItem, MsgAddCollaborator, MsgRemoveCollaborator, MsgUpdateCollaboratorRole, MsgRateCollection, MsgChallengeReview, MsgRequestSponsorship, MsgCancelSponsorshipRequest, MsgSponsorCollection, MsgUpdateOperationalParams, MsgUpvoteContent, MsgDownvoteContent, MsgFlagContent, MsgHideContent, MsgAppealHide, MsgEndorseCollection, MsgSetSeekingEndorsement, MsgPinCollection } from "./tx";
export const AminoConverter = {
  "/sparkdream.collect.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/collect/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.collect.v1.MsgCreateCollection": {
    aminoType: "sparkdream/x/collect/MsgCreateCollection",
    toAmino: MsgCreateCollection.toAmino,
    fromAmino: MsgCreateCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateCollection": {
    aminoType: "sparkdream/x/collect/MsgUpdateCollection",
    toAmino: MsgUpdateCollection.toAmino,
    fromAmino: MsgUpdateCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgDeleteCollection": {
    aminoType: "sparkdream/x/collect/MsgDeleteCollection",
    toAmino: MsgDeleteCollection.toAmino,
    fromAmino: MsgDeleteCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgAddItem": {
    aminoType: "sparkdream/x/collect/MsgAddItem",
    toAmino: MsgAddItem.toAmino,
    fromAmino: MsgAddItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgAddItems": {
    aminoType: "sparkdream/x/collect/MsgAddItems",
    toAmino: MsgAddItems.toAmino,
    fromAmino: MsgAddItems.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateItem": {
    aminoType: "sparkdream/x/collect/MsgUpdateItem",
    toAmino: MsgUpdateItem.toAmino,
    fromAmino: MsgUpdateItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgRemoveItem": {
    aminoType: "sparkdream/x/collect/MsgRemoveItem",
    toAmino: MsgRemoveItem.toAmino,
    fromAmino: MsgRemoveItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgRemoveItems": {
    aminoType: "sparkdream/x/collect/MsgRemoveItems",
    toAmino: MsgRemoveItems.toAmino,
    fromAmino: MsgRemoveItems.fromAmino
  },
  "/sparkdream.collect.v1.MsgReorderItem": {
    aminoType: "sparkdream/x/collect/MsgReorderItem",
    toAmino: MsgReorderItem.toAmino,
    fromAmino: MsgReorderItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgAddCollaborator": {
    aminoType: "sparkdream/x/collect/MsgAddCollaborator",
    toAmino: MsgAddCollaborator.toAmino,
    fromAmino: MsgAddCollaborator.fromAmino
  },
  "/sparkdream.collect.v1.MsgRemoveCollaborator": {
    aminoType: "sparkdream/x/collect/MsgRemoveCollaborator",
    toAmino: MsgRemoveCollaborator.toAmino,
    fromAmino: MsgRemoveCollaborator.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateCollaboratorRole": {
    aminoType: "sparkdream/x/collect/MsgUpdateCollaboratorRole",
    toAmino: MsgUpdateCollaboratorRole.toAmino,
    fromAmino: MsgUpdateCollaboratorRole.fromAmino
  },
  "/sparkdream.collect.v1.MsgRateCollection": {
    aminoType: "sparkdream/x/collect/MsgRateCollection",
    toAmino: MsgRateCollection.toAmino,
    fromAmino: MsgRateCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgChallengeReview": {
    aminoType: "sparkdream/x/collect/MsgChallengeReview",
    toAmino: MsgChallengeReview.toAmino,
    fromAmino: MsgChallengeReview.fromAmino
  },
  "/sparkdream.collect.v1.MsgRequestSponsorship": {
    aminoType: "sparkdream/x/collect/MsgRequestSponsorship",
    toAmino: MsgRequestSponsorship.toAmino,
    fromAmino: MsgRequestSponsorship.fromAmino
  },
  "/sparkdream.collect.v1.MsgCancelSponsorshipRequest": {
    aminoType: "sparkdream/x/collect/MsgCancelSponsorshipRequest",
    toAmino: MsgCancelSponsorshipRequest.toAmino,
    fromAmino: MsgCancelSponsorshipRequest.fromAmino
  },
  "/sparkdream.collect.v1.MsgSponsorCollection": {
    aminoType: "sparkdream/x/collect/MsgSponsorCollection",
    toAmino: MsgSponsorCollection.toAmino,
    fromAmino: MsgSponsorCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/collect/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpvoteContent": {
    aminoType: "sparkdream/x/collect/MsgUpvoteContent",
    toAmino: MsgUpvoteContent.toAmino,
    fromAmino: MsgUpvoteContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgDownvoteContent": {
    aminoType: "sparkdream/x/collect/MsgDownvoteContent",
    toAmino: MsgDownvoteContent.toAmino,
    fromAmino: MsgDownvoteContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgFlagContent": {
    aminoType: "sparkdream/x/collect/MsgFlagContent",
    toAmino: MsgFlagContent.toAmino,
    fromAmino: MsgFlagContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgHideContent": {
    aminoType: "sparkdream/x/collect/MsgHideContent",
    toAmino: MsgHideContent.toAmino,
    fromAmino: MsgHideContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgAppealHide": {
    aminoType: "sparkdream/x/collect/MsgAppealHide",
    toAmino: MsgAppealHide.toAmino,
    fromAmino: MsgAppealHide.fromAmino
  },
  "/sparkdream.collect.v1.MsgEndorseCollection": {
    aminoType: "sparkdream/x/collect/MsgEndorseCollection",
    toAmino: MsgEndorseCollection.toAmino,
    fromAmino: MsgEndorseCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgSetSeekingEndorsement": {
    aminoType: "sparkdream/x/collect/MsgSetSeekingEndorsement",
    toAmino: MsgSetSeekingEndorsement.toAmino,
    fromAmino: MsgSetSeekingEndorsement.fromAmino
  },
  "/sparkdream.collect.v1.MsgPinCollection": {
    aminoType: "sparkdream/x/collect/MsgPinCollection",
    toAmino: MsgPinCollection.toAmino,
    fromAmino: MsgPinCollection.fromAmino
  }
};