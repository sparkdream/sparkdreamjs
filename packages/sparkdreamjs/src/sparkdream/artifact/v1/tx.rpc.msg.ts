//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateClass, MsgCreateClassResponse, MsgUpdateClass, MsgUpdateClassResponse, MsgFreezeClassMetadata, MsgFreezeClassMetadataResponse, MsgSetMintPolicy, MsgSetMintPolicyResponse, MsgSetMinters, MsgSetMintersResponse, MsgSetMaxSupply, MsgSetMaxSupplyResponse, MsgCloseMinting, MsgCloseMintingResponse, MsgProposeClassOwner, MsgProposeClassOwnerResponse, MsgAcceptClassOwner, MsgAcceptClassOwnerResponse, MsgCancelClassOwner, MsgCancelClassOwnerResponse, MsgDeleteClass, MsgDeleteClassResponse, MsgMint, MsgMintResponse, MsgPublicMint, MsgPublicMintResponse, MsgTransfer, MsgTransferResponse, MsgAcceptIncoming, MsgAcceptIncomingResponse, MsgRejectIncoming, MsgRejectIncomingResponse, MsgCancelOutgoing, MsgCancelOutgoingResponse, MsgSetReceivePolicy, MsgSetReceivePolicyResponse, MsgBurn, MsgBurnResponse, MsgRevoke, MsgRevokeResponse, MsgUpdateToken, MsgUpdateTokenResponse, MsgFreezeTokenMetadata, MsgFreezeTokenMetadataResponse, MsgList, MsgListResponse, MsgUpdateListing, MsgUpdateListingResponse, MsgDelist, MsgDelistResponse, MsgBuy, MsgBuyResponse, MsgHideContent, MsgHideContentResponse, MsgUnhideContent, MsgUnhideContentResponse, MsgAppealHide, MsgAppealHideResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse } from "./tx";
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
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};