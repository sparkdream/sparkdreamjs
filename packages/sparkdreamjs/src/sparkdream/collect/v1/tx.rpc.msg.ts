//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateCollection, MsgCreateCollectionResponse, MsgUpdateCollection, MsgUpdateCollectionResponse, MsgDeleteCollection, MsgDeleteCollectionResponse, MsgAddItem, MsgAddItemResponse, MsgAddItems, MsgAddItemsResponse, MsgUpdateItem, MsgUpdateItemResponse, MsgRemoveItem, MsgRemoveItemResponse, MsgRemoveItems, MsgRemoveItemsResponse, MsgReorderItem, MsgReorderItemResponse, MsgAddCollaborator, MsgAddCollaboratorResponse, MsgRemoveCollaborator, MsgRemoveCollaboratorResponse, MsgUpdateCollaboratorRole, MsgUpdateCollaboratorRoleResponse, MsgRegisterCurator, MsgRegisterCuratorResponse, MsgUnregisterCurator, MsgUnregisterCuratorResponse, MsgRateCollection, MsgRateCollectionResponse, MsgChallengeReview, MsgChallengeReviewResponse, MsgRequestSponsorship, MsgRequestSponsorshipResponse, MsgCancelSponsorshipRequest, MsgCancelSponsorshipRequestResponse, MsgSponsorCollection, MsgSponsorCollectionResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgUpvoteContent, MsgUpvoteContentResponse, MsgDownvoteContent, MsgDownvoteContentResponse, MsgFlagContent, MsgFlagContentResponse, MsgHideContent, MsgHideContentResponse, MsgAppealHide, MsgAppealHideResponse, MsgEndorseCollection, MsgEndorseCollectionResponse, MsgSetSeekingEndorsement, MsgSetSeekingEndorsementResponse, MsgPinCollection, MsgPinCollectionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createCollection(request: MsgCreateCollection): Promise<MsgCreateCollectionResponse>;
  updateCollection(request: MsgUpdateCollection): Promise<MsgUpdateCollectionResponse>;
  deleteCollection(request: MsgDeleteCollection): Promise<MsgDeleteCollectionResponse>;
  addItem(request: MsgAddItem): Promise<MsgAddItemResponse>;
  addItems(request: MsgAddItems): Promise<MsgAddItemsResponse>;
  updateItem(request: MsgUpdateItem): Promise<MsgUpdateItemResponse>;
  removeItem(request: MsgRemoveItem): Promise<MsgRemoveItemResponse>;
  removeItems(request: MsgRemoveItems): Promise<MsgRemoveItemsResponse>;
  reorderItem(request: MsgReorderItem): Promise<MsgReorderItemResponse>;
  addCollaborator(request: MsgAddCollaborator): Promise<MsgAddCollaboratorResponse>;
  removeCollaborator(request: MsgRemoveCollaborator): Promise<MsgRemoveCollaboratorResponse>;
  updateCollaboratorRole(request: MsgUpdateCollaboratorRole): Promise<MsgUpdateCollaboratorRoleResponse>;
  registerCurator(request: MsgRegisterCurator): Promise<MsgRegisterCuratorResponse>;
  unregisterCurator(request: MsgUnregisterCurator): Promise<MsgUnregisterCuratorResponse>;
  rateCollection(request: MsgRateCollection): Promise<MsgRateCollectionResponse>;
  challengeReview(request: MsgChallengeReview): Promise<MsgChallengeReviewResponse>;
  requestSponsorship(request: MsgRequestSponsorship): Promise<MsgRequestSponsorshipResponse>;
  cancelSponsorshipRequest(request: MsgCancelSponsorshipRequest): Promise<MsgCancelSponsorshipRequestResponse>;
  sponsorCollection(request: MsgSponsorCollection): Promise<MsgSponsorCollectionResponse>;
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** UpvoteContent defines the UpvoteContent RPC. */
  upvoteContent(request: MsgUpvoteContent): Promise<MsgUpvoteContentResponse>;
  /** DownvoteContent defines the DownvoteContent RPC. */
  downvoteContent(request: MsgDownvoteContent): Promise<MsgDownvoteContentResponse>;
  /** FlagContent defines the FlagContent RPC. */
  flagContent(request: MsgFlagContent): Promise<MsgFlagContentResponse>;
  /** HideContent defines the HideContent RPC. */
  hideContent(request: MsgHideContent): Promise<MsgHideContentResponse>;
  /** AppealHide defines the AppealHide RPC. */
  appealHide(request: MsgAppealHide): Promise<MsgAppealHideResponse>;
  /** EndorseCollection defines the EndorseCollection RPC. */
  endorseCollection(request: MsgEndorseCollection): Promise<MsgEndorseCollectionResponse>;
  /** SetSeekingEndorsement defines the SetSeekingEndorsement RPC. */
  setSeekingEndorsement(request: MsgSetSeekingEndorsement): Promise<MsgSetSeekingEndorsementResponse>;
  /** PinCollection makes an ephemeral collection permanent by burning its deposits. */
  pinCollection(request: MsgPinCollection): Promise<MsgPinCollectionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateCollection */
  createCollection = async (request: MsgCreateCollection): Promise<MsgCreateCollectionResponse> => {
    const data = MsgCreateCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "CreateCollection", data);
    return promise.then(data => MsgCreateCollectionResponse.decode(new BinaryReader(data)));
  };
  /* UpdateCollection */
  updateCollection = async (request: MsgUpdateCollection): Promise<MsgUpdateCollectionResponse> => {
    const data = MsgUpdateCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UpdateCollection", data);
    return promise.then(data => MsgUpdateCollectionResponse.decode(new BinaryReader(data)));
  };
  /* DeleteCollection */
  deleteCollection = async (request: MsgDeleteCollection): Promise<MsgDeleteCollectionResponse> => {
    const data = MsgDeleteCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "DeleteCollection", data);
    return promise.then(data => MsgDeleteCollectionResponse.decode(new BinaryReader(data)));
  };
  /* AddItem */
  addItem = async (request: MsgAddItem): Promise<MsgAddItemResponse> => {
    const data = MsgAddItem.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "AddItem", data);
    return promise.then(data => MsgAddItemResponse.decode(new BinaryReader(data)));
  };
  /* AddItems */
  addItems = async (request: MsgAddItems): Promise<MsgAddItemsResponse> => {
    const data = MsgAddItems.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "AddItems", data);
    return promise.then(data => MsgAddItemsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateItem */
  updateItem = async (request: MsgUpdateItem): Promise<MsgUpdateItemResponse> => {
    const data = MsgUpdateItem.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UpdateItem", data);
    return promise.then(data => MsgUpdateItemResponse.decode(new BinaryReader(data)));
  };
  /* RemoveItem */
  removeItem = async (request: MsgRemoveItem): Promise<MsgRemoveItemResponse> => {
    const data = MsgRemoveItem.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "RemoveItem", data);
    return promise.then(data => MsgRemoveItemResponse.decode(new BinaryReader(data)));
  };
  /* RemoveItems */
  removeItems = async (request: MsgRemoveItems): Promise<MsgRemoveItemsResponse> => {
    const data = MsgRemoveItems.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "RemoveItems", data);
    return promise.then(data => MsgRemoveItemsResponse.decode(new BinaryReader(data)));
  };
  /* ReorderItem */
  reorderItem = async (request: MsgReorderItem): Promise<MsgReorderItemResponse> => {
    const data = MsgReorderItem.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "ReorderItem", data);
    return promise.then(data => MsgReorderItemResponse.decode(new BinaryReader(data)));
  };
  /* AddCollaborator */
  addCollaborator = async (request: MsgAddCollaborator): Promise<MsgAddCollaboratorResponse> => {
    const data = MsgAddCollaborator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "AddCollaborator", data);
    return promise.then(data => MsgAddCollaboratorResponse.decode(new BinaryReader(data)));
  };
  /* RemoveCollaborator */
  removeCollaborator = async (request: MsgRemoveCollaborator): Promise<MsgRemoveCollaboratorResponse> => {
    const data = MsgRemoveCollaborator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "RemoveCollaborator", data);
    return promise.then(data => MsgRemoveCollaboratorResponse.decode(new BinaryReader(data)));
  };
  /* UpdateCollaboratorRole */
  updateCollaboratorRole = async (request: MsgUpdateCollaboratorRole): Promise<MsgUpdateCollaboratorRoleResponse> => {
    const data = MsgUpdateCollaboratorRole.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UpdateCollaboratorRole", data);
    return promise.then(data => MsgUpdateCollaboratorRoleResponse.decode(new BinaryReader(data)));
  };
  /* RegisterCurator */
  registerCurator = async (request: MsgRegisterCurator): Promise<MsgRegisterCuratorResponse> => {
    const data = MsgRegisterCurator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "RegisterCurator", data);
    return promise.then(data => MsgRegisterCuratorResponse.decode(new BinaryReader(data)));
  };
  /* UnregisterCurator */
  unregisterCurator = async (request: MsgUnregisterCurator): Promise<MsgUnregisterCuratorResponse> => {
    const data = MsgUnregisterCurator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UnregisterCurator", data);
    return promise.then(data => MsgUnregisterCuratorResponse.decode(new BinaryReader(data)));
  };
  /* RateCollection */
  rateCollection = async (request: MsgRateCollection): Promise<MsgRateCollectionResponse> => {
    const data = MsgRateCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "RateCollection", data);
    return promise.then(data => MsgRateCollectionResponse.decode(new BinaryReader(data)));
  };
  /* ChallengeReview */
  challengeReview = async (request: MsgChallengeReview): Promise<MsgChallengeReviewResponse> => {
    const data = MsgChallengeReview.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "ChallengeReview", data);
    return promise.then(data => MsgChallengeReviewResponse.decode(new BinaryReader(data)));
  };
  /* RequestSponsorship */
  requestSponsorship = async (request: MsgRequestSponsorship): Promise<MsgRequestSponsorshipResponse> => {
    const data = MsgRequestSponsorship.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "RequestSponsorship", data);
    return promise.then(data => MsgRequestSponsorshipResponse.decode(new BinaryReader(data)));
  };
  /* CancelSponsorshipRequest */
  cancelSponsorshipRequest = async (request: MsgCancelSponsorshipRequest): Promise<MsgCancelSponsorshipRequestResponse> => {
    const data = MsgCancelSponsorshipRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "CancelSponsorshipRequest", data);
    return promise.then(data => MsgCancelSponsorshipRequestResponse.decode(new BinaryReader(data)));
  };
  /* SponsorCollection */
  sponsorCollection = async (request: MsgSponsorCollection): Promise<MsgSponsorCollectionResponse> => {
    const data = MsgSponsorCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "SponsorCollection", data);
    return promise.then(data => MsgSponsorCollectionResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpvoteContent defines the UpvoteContent RPC. */
  upvoteContent = async (request: MsgUpvoteContent): Promise<MsgUpvoteContentResponse> => {
    const data = MsgUpvoteContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "UpvoteContent", data);
    return promise.then(data => MsgUpvoteContentResponse.decode(new BinaryReader(data)));
  };
  /* DownvoteContent defines the DownvoteContent RPC. */
  downvoteContent = async (request: MsgDownvoteContent): Promise<MsgDownvoteContentResponse> => {
    const data = MsgDownvoteContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "DownvoteContent", data);
    return promise.then(data => MsgDownvoteContentResponse.decode(new BinaryReader(data)));
  };
  /* FlagContent defines the FlagContent RPC. */
  flagContent = async (request: MsgFlagContent): Promise<MsgFlagContentResponse> => {
    const data = MsgFlagContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "FlagContent", data);
    return promise.then(data => MsgFlagContentResponse.decode(new BinaryReader(data)));
  };
  /* HideContent defines the HideContent RPC. */
  hideContent = async (request: MsgHideContent): Promise<MsgHideContentResponse> => {
    const data = MsgHideContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "HideContent", data);
    return promise.then(data => MsgHideContentResponse.decode(new BinaryReader(data)));
  };
  /* AppealHide defines the AppealHide RPC. */
  appealHide = async (request: MsgAppealHide): Promise<MsgAppealHideResponse> => {
    const data = MsgAppealHide.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "AppealHide", data);
    return promise.then(data => MsgAppealHideResponse.decode(new BinaryReader(data)));
  };
  /* EndorseCollection defines the EndorseCollection RPC. */
  endorseCollection = async (request: MsgEndorseCollection): Promise<MsgEndorseCollectionResponse> => {
    const data = MsgEndorseCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "EndorseCollection", data);
    return promise.then(data => MsgEndorseCollectionResponse.decode(new BinaryReader(data)));
  };
  /* SetSeekingEndorsement defines the SetSeekingEndorsement RPC. */
  setSeekingEndorsement = async (request: MsgSetSeekingEndorsement): Promise<MsgSetSeekingEndorsementResponse> => {
    const data = MsgSetSeekingEndorsement.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "SetSeekingEndorsement", data);
    return promise.then(data => MsgSetSeekingEndorsementResponse.decode(new BinaryReader(data)));
  };
  /* PinCollection makes an ephemeral collection permanent by burning its deposits. */
  pinCollection = async (request: MsgPinCollection): Promise<MsgPinCollectionResponse> => {
    const data = MsgPinCollection.encode(request).finish();
    const promise = this.rpc.request("sparkdream.collect.v1.Msg", "PinCollection", data);
    return promise.then(data => MsgPinCollectionResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};