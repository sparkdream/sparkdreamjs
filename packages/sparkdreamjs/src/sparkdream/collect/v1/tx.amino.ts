//@ts-nocheck
import { MsgUpdateParams, MsgCreateCollection, MsgUpdateCollection, MsgDeleteCollection, MsgAddItem, MsgAddItems, MsgUpdateItem, MsgRemoveItem, MsgRemoveItems, MsgReorderItem, MsgAddCollaborator, MsgRemoveCollaborator, MsgUpdateCollaboratorRole, MsgRegisterCurator, MsgUnregisterCurator, MsgRateCollection, MsgChallengeReview, MsgRequestSponsorship, MsgCancelSponsorshipRequest, MsgSponsorCollection, MsgUpdateOperationalParams, MsgUpvoteContent, MsgDownvoteContent, MsgFlagContent, MsgHideContent, MsgAppealHide, MsgEndorseCollection, MsgSetSeekingEndorsement, MsgPinCollection } from "./tx";
export const AminoConverter = {
  "/sparkdream.collect.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/collect/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.collect.v1.MsgCreateCollection": {
    aminoType: "/sparkdream.collect.v1.MsgCreateCollection",
    toAmino: MsgCreateCollection.toAmino,
    fromAmino: MsgCreateCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateCollection": {
    aminoType: "/sparkdream.collect.v1.MsgUpdateCollection",
    toAmino: MsgUpdateCollection.toAmino,
    fromAmino: MsgUpdateCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgDeleteCollection": {
    aminoType: "/sparkdream.collect.v1.MsgDeleteCollection",
    toAmino: MsgDeleteCollection.toAmino,
    fromAmino: MsgDeleteCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgAddItem": {
    aminoType: "/sparkdream.collect.v1.MsgAddItem",
    toAmino: MsgAddItem.toAmino,
    fromAmino: MsgAddItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgAddItems": {
    aminoType: "/sparkdream.collect.v1.MsgAddItems",
    toAmino: MsgAddItems.toAmino,
    fromAmino: MsgAddItems.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateItem": {
    aminoType: "/sparkdream.collect.v1.MsgUpdateItem",
    toAmino: MsgUpdateItem.toAmino,
    fromAmino: MsgUpdateItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgRemoveItem": {
    aminoType: "/sparkdream.collect.v1.MsgRemoveItem",
    toAmino: MsgRemoveItem.toAmino,
    fromAmino: MsgRemoveItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgRemoveItems": {
    aminoType: "/sparkdream.collect.v1.MsgRemoveItems",
    toAmino: MsgRemoveItems.toAmino,
    fromAmino: MsgRemoveItems.fromAmino
  },
  "/sparkdream.collect.v1.MsgReorderItem": {
    aminoType: "/sparkdream.collect.v1.MsgReorderItem",
    toAmino: MsgReorderItem.toAmino,
    fromAmino: MsgReorderItem.fromAmino
  },
  "/sparkdream.collect.v1.MsgAddCollaborator": {
    aminoType: "/sparkdream.collect.v1.MsgAddCollaborator",
    toAmino: MsgAddCollaborator.toAmino,
    fromAmino: MsgAddCollaborator.fromAmino
  },
  "/sparkdream.collect.v1.MsgRemoveCollaborator": {
    aminoType: "/sparkdream.collect.v1.MsgRemoveCollaborator",
    toAmino: MsgRemoveCollaborator.toAmino,
    fromAmino: MsgRemoveCollaborator.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateCollaboratorRole": {
    aminoType: "/sparkdream.collect.v1.MsgUpdateCollaboratorRole",
    toAmino: MsgUpdateCollaboratorRole.toAmino,
    fromAmino: MsgUpdateCollaboratorRole.fromAmino
  },
  "/sparkdream.collect.v1.MsgRegisterCurator": {
    aminoType: "/sparkdream.collect.v1.MsgRegisterCurator",
    toAmino: MsgRegisterCurator.toAmino,
    fromAmino: MsgRegisterCurator.fromAmino
  },
  "/sparkdream.collect.v1.MsgUnregisterCurator": {
    aminoType: "/sparkdream.collect.v1.MsgUnregisterCurator",
    toAmino: MsgUnregisterCurator.toAmino,
    fromAmino: MsgUnregisterCurator.fromAmino
  },
  "/sparkdream.collect.v1.MsgRateCollection": {
    aminoType: "/sparkdream.collect.v1.MsgRateCollection",
    toAmino: MsgRateCollection.toAmino,
    fromAmino: MsgRateCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgChallengeReview": {
    aminoType: "/sparkdream.collect.v1.MsgChallengeReview",
    toAmino: MsgChallengeReview.toAmino,
    fromAmino: MsgChallengeReview.fromAmino
  },
  "/sparkdream.collect.v1.MsgRequestSponsorship": {
    aminoType: "/sparkdream.collect.v1.MsgRequestSponsorship",
    toAmino: MsgRequestSponsorship.toAmino,
    fromAmino: MsgRequestSponsorship.fromAmino
  },
  "/sparkdream.collect.v1.MsgCancelSponsorshipRequest": {
    aminoType: "/sparkdream.collect.v1.MsgCancelSponsorshipRequest",
    toAmino: MsgCancelSponsorshipRequest.toAmino,
    fromAmino: MsgCancelSponsorshipRequest.fromAmino
  },
  "/sparkdream.collect.v1.MsgSponsorCollection": {
    aminoType: "/sparkdream.collect.v1.MsgSponsorCollection",
    toAmino: MsgSponsorCollection.toAmino,
    fromAmino: MsgSponsorCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/collect/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.collect.v1.MsgUpvoteContent": {
    aminoType: "/sparkdream.collect.v1.MsgUpvoteContent",
    toAmino: MsgUpvoteContent.toAmino,
    fromAmino: MsgUpvoteContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgDownvoteContent": {
    aminoType: "/sparkdream.collect.v1.MsgDownvoteContent",
    toAmino: MsgDownvoteContent.toAmino,
    fromAmino: MsgDownvoteContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgFlagContent": {
    aminoType: "/sparkdream.collect.v1.MsgFlagContent",
    toAmino: MsgFlagContent.toAmino,
    fromAmino: MsgFlagContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgHideContent": {
    aminoType: "/sparkdream.collect.v1.MsgHideContent",
    toAmino: MsgHideContent.toAmino,
    fromAmino: MsgHideContent.fromAmino
  },
  "/sparkdream.collect.v1.MsgAppealHide": {
    aminoType: "/sparkdream.collect.v1.MsgAppealHide",
    toAmino: MsgAppealHide.toAmino,
    fromAmino: MsgAppealHide.fromAmino
  },
  "/sparkdream.collect.v1.MsgEndorseCollection": {
    aminoType: "/sparkdream.collect.v1.MsgEndorseCollection",
    toAmino: MsgEndorseCollection.toAmino,
    fromAmino: MsgEndorseCollection.fromAmino
  },
  "/sparkdream.collect.v1.MsgSetSeekingEndorsement": {
    aminoType: "/sparkdream.collect.v1.MsgSetSeekingEndorsement",
    toAmino: MsgSetSeekingEndorsement.toAmino,
    fromAmino: MsgSetSeekingEndorsement.fromAmino
  },
  "/sparkdream.collect.v1.MsgPinCollection": {
    aminoType: "/sparkdream.collect.v1.MsgPinCollection",
    toAmino: MsgPinCollection.toAmino,
    fromAmino: MsgPinCollection.fromAmino
  }
};