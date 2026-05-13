//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for the broader rationale.
//
// Telescope emits `[]` for empty repeated fields; aminojson on the chain omits
// them. In collect the offending messages are: MsgCreateCollection (tags),
// MsgUpdateCollection (tags), MsgAddItem (attributes), MsgAddItems (items),
// MsgUpdateItem (attributes), MsgRemoveItems (ids), MsgRateCollection (tags).

import {
  MsgUpdateParams, MsgCreateCollection, MsgUpdateCollection, MsgDeleteCollection,
  MsgAddItem, MsgAddItems, MsgUpdateItem, MsgRemoveItem, MsgRemoveItems,
  MsgReorderItem, MsgAddCollaborator, MsgRemoveCollaborator,
  MsgUpdateCollaboratorRole, MsgRateCollection, MsgChallengeReview,
  MsgRequestSponsorship, MsgCancelSponsorshipRequest, MsgSponsorCollection,
  MsgUpdateOperationalParams, MsgUpvoteContent, MsgDownvoteContent,
  MsgFlagContent, MsgHideContent, MsgAppealHide, MsgEndorseCollection,
  MsgSetSeekingEndorsement, MsgPinCollection,
} from "./tx";
import { NftReference, LinkReference, OnChainReference, CustomReference, KeyValuePair, AddItemEntry } from "./types";
import { base64FromBytes } from "../../../helpers";

export const AminoConverter = {
  "/sparkdream.collect.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/collect/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.collect.v1.MsgCreateCollection": {
    aminoType: "sparkdream/x/collect/MsgCreateCollection",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.type = message.type === 0 ? undefined : message.type;
      obj.visibility = message.visibility === 0 ? undefined : message.visibility;
      obj.encrypted = message.encrypted === false ? undefined : message.encrypted;
      obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
      obj.name = message.name === "" ? undefined : message.name;
      obj.description = message.description === "" ? undefined : message.description;
      obj.cover_uri = message.coverUri === "" ? undefined : message.coverUri;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
      obj.author_bond = message.authorBond === null ? undefined : message.authorBond;
      obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
      return obj;
    },
    fromAmino: MsgCreateCollection.fromAmino,
  },
  "/sparkdream.collect.v1.MsgUpdateCollection": {
    aminoType: "sparkdream/x/collect/MsgUpdateCollection",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
      obj.type = message.type === 0 ? undefined : message.type;
      obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
      obj.name = message.name === "" ? undefined : message.name;
      obj.description = message.description === "" ? undefined : message.description;
      obj.cover_uri = message.coverUri === "" ? undefined : message.coverUri;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
      obj.community_feedback_enabled = message.communityFeedbackEnabled === false ? undefined : message.communityFeedbackEnabled;
      obj.update_community_feedback = message.updateCommunityFeedback === false ? undefined : message.updateCommunityFeedback;
      return obj;
    },
    fromAmino: MsgUpdateCollection.fromAmino,
  },
  "/sparkdream.collect.v1.MsgDeleteCollection": {
    aminoType: "sparkdream/x/collect/MsgDeleteCollection",
    toAmino: MsgDeleteCollection.toAmino,
    fromAmino: MsgDeleteCollection.fromAmino,
  },
  "/sparkdream.collect.v1.MsgAddItem": {
    aminoType: "sparkdream/x/collect/MsgAddItem",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
      obj.position = message.position !== BigInt(0) ? message.position?.toString() : undefined;
      obj.title = message.title === "" ? undefined : message.title;
      obj.description = message.description === "" ? undefined : message.description;
      obj.image_uri = message.imageUri === "" ? undefined : message.imageUri;
      obj.reference_type = message.referenceType === 0 ? undefined : message.referenceType;
      obj.nft = message.nft ? NftReference.toAmino(message.nft) : undefined;
      obj.link = message.link ? LinkReference.toAmino(message.link) : undefined;
      obj.on_chain = message.onChain ? OnChainReference.toAmino(message.onChain) : undefined;
      obj.custom = message.custom ? CustomReference.toAmino(message.custom) : undefined;
      obj.attributes = (message.attributes?.length ?? 0) > 0
        ? message.attributes.map((e: any) => e ? KeyValuePair.toAmino(e) : undefined)
        : undefined;
      obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
      return obj;
    },
    fromAmino: MsgAddItem.fromAmino,
  },
  "/sparkdream.collect.v1.MsgAddItems": {
    aminoType: "sparkdream/x/collect/MsgAddItems",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
      obj.items = (message.items?.length ?? 0) > 0
        ? message.items.map((e: any) => e ? AddItemEntry.toAmino(e) : undefined)
        : undefined;
      return obj;
    },
    fromAmino: MsgAddItems.fromAmino,
  },
  "/sparkdream.collect.v1.MsgUpdateItem": {
    aminoType: "sparkdream/x/collect/MsgUpdateItem",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
      obj.title = message.title === "" ? undefined : message.title;
      obj.description = message.description === "" ? undefined : message.description;
      obj.image_uri = message.imageUri === "" ? undefined : message.imageUri;
      obj.reference_type = message.referenceType === 0 ? undefined : message.referenceType;
      obj.nft = message.nft ? NftReference.toAmino(message.nft) : undefined;
      obj.link = message.link ? LinkReference.toAmino(message.link) : undefined;
      obj.on_chain = message.onChain ? OnChainReference.toAmino(message.onChain) : undefined;
      obj.custom = message.custom ? CustomReference.toAmino(message.custom) : undefined;
      obj.attributes = (message.attributes?.length ?? 0) > 0
        ? message.attributes.map((e: any) => e ? KeyValuePair.toAmino(e) : undefined)
        : undefined;
      obj.encrypted_data = message.encryptedData ? base64FromBytes(message.encryptedData) : undefined;
      return obj;
    },
    fromAmino: MsgUpdateItem.fromAmino,
  },
  "/sparkdream.collect.v1.MsgRemoveItem": {
    aminoType: "sparkdream/x/collect/MsgRemoveItem",
    toAmino: MsgRemoveItem.toAmino,
    fromAmino: MsgRemoveItem.fromAmino,
  },
  "/sparkdream.collect.v1.MsgRemoveItems": {
    aminoType: "sparkdream/x/collect/MsgRemoveItems",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.ids = (message.ids?.length ?? 0) > 0
        ? message.ids.map((e: bigint) => e.toString())
        : undefined;
      return obj;
    },
    fromAmino: MsgRemoveItems.fromAmino,
  },
  "/sparkdream.collect.v1.MsgReorderItem": {
    aminoType: "sparkdream/x/collect/MsgReorderItem",
    toAmino: MsgReorderItem.toAmino,
    fromAmino: MsgReorderItem.fromAmino,
  },
  "/sparkdream.collect.v1.MsgAddCollaborator": {
    aminoType: "sparkdream/x/collect/MsgAddCollaborator",
    toAmino: MsgAddCollaborator.toAmino,
    fromAmino: MsgAddCollaborator.fromAmino,
  },
  "/sparkdream.collect.v1.MsgRemoveCollaborator": {
    aminoType: "sparkdream/x/collect/MsgRemoveCollaborator",
    toAmino: MsgRemoveCollaborator.toAmino,
    fromAmino: MsgRemoveCollaborator.fromAmino,
  },
  "/sparkdream.collect.v1.MsgUpdateCollaboratorRole": {
    aminoType: "sparkdream/x/collect/MsgUpdateCollaboratorRole",
    toAmino: MsgUpdateCollaboratorRole.toAmino,
    fromAmino: MsgUpdateCollaboratorRole.fromAmino,
  },
  "/sparkdream.collect.v1.MsgRateCollection": {
    aminoType: "sparkdream/x/collect/MsgRateCollection",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
      obj.verdict = message.verdict === 0 ? undefined : message.verdict;
      obj.tags = (message.tags?.length ?? 0) > 0
        ? message.tags.map((e: string) => e)
        : undefined;
      obj.comment = message.comment === "" ? undefined : message.comment;
      return obj;
    },
    fromAmino: MsgRateCollection.fromAmino,
  },
  "/sparkdream.collect.v1.MsgChallengeReview": {
    aminoType: "sparkdream/x/collect/MsgChallengeReview",
    toAmino: MsgChallengeReview.toAmino,
    fromAmino: MsgChallengeReview.fromAmino,
  },
  "/sparkdream.collect.v1.MsgRequestSponsorship": {
    aminoType: "sparkdream/x/collect/MsgRequestSponsorship",
    toAmino: MsgRequestSponsorship.toAmino,
    fromAmino: MsgRequestSponsorship.fromAmino,
  },
  "/sparkdream.collect.v1.MsgCancelSponsorshipRequest": {
    aminoType: "sparkdream/x/collect/MsgCancelSponsorshipRequest",
    toAmino: MsgCancelSponsorshipRequest.toAmino,
    fromAmino: MsgCancelSponsorshipRequest.fromAmino,
  },
  "/sparkdream.collect.v1.MsgSponsorCollection": {
    aminoType: "sparkdream/x/collect/MsgSponsorCollection",
    toAmino: MsgSponsorCollection.toAmino,
    fromAmino: MsgSponsorCollection.fromAmino,
  },
  "/sparkdream.collect.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/collect/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino,
  },
  "/sparkdream.collect.v1.MsgUpvoteContent": {
    aminoType: "sparkdream/x/collect/MsgUpvoteContent",
    toAmino: MsgUpvoteContent.toAmino,
    fromAmino: MsgUpvoteContent.fromAmino,
  },
  "/sparkdream.collect.v1.MsgDownvoteContent": {
    aminoType: "sparkdream/x/collect/MsgDownvoteContent",
    toAmino: MsgDownvoteContent.toAmino,
    fromAmino: MsgDownvoteContent.fromAmino,
  },
  "/sparkdream.collect.v1.MsgFlagContent": {
    aminoType: "sparkdream/x/collect/MsgFlagContent",
    toAmino: MsgFlagContent.toAmino,
    fromAmino: MsgFlagContent.fromAmino,
  },
  "/sparkdream.collect.v1.MsgHideContent": {
    aminoType: "sparkdream/x/collect/MsgHideContent",
    toAmino: MsgHideContent.toAmino,
    fromAmino: MsgHideContent.fromAmino,
  },
  "/sparkdream.collect.v1.MsgAppealHide": {
    aminoType: "sparkdream/x/collect/MsgAppealHide",
    toAmino: MsgAppealHide.toAmino,
    fromAmino: MsgAppealHide.fromAmino,
  },
  "/sparkdream.collect.v1.MsgEndorseCollection": {
    aminoType: "sparkdream/x/collect/MsgEndorseCollection",
    toAmino: MsgEndorseCollection.toAmino,
    fromAmino: MsgEndorseCollection.fromAmino,
  },
  "/sparkdream.collect.v1.MsgSetSeekingEndorsement": {
    aminoType: "sparkdream/x/collect/MsgSetSeekingEndorsement",
    toAmino: MsgSetSeekingEndorsement.toAmino,
    fromAmino: MsgSetSeekingEndorsement.fromAmino,
  },
  "/sparkdream.collect.v1.MsgPinCollection": {
    aminoType: "sparkdream/x/collect/MsgPinCollection",
    toAmino: MsgPinCollection.toAmino,
    fromAmino: MsgPinCollection.fromAmino,
  },
};
