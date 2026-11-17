//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRequestPermanentCopy, MsgRequestPermanentCopyResponse, MsgAddSource, MsgAddSourceResponse, MsgCancelRequest, MsgCancelRequestResponse, MsgDisputeCompletion, MsgDisputeCompletionResponse, MsgClaimRequest, MsgClaimRequestResponse, MsgExtendClaim, MsgExtendClaimResponse, MsgCompleteRequest, MsgCompleteRequestResponse, MsgDeclineRequest, MsgDeclineRequestResponse, MsgFlagRemoved, MsgFlagRemovedResponse, MsgUnflagRemoved, MsgUnflagRemovedResponse, MsgVoidCompletion, MsgVoidCompletionResponse, MsgApproveOperator, MsgApproveOperatorResponse, MsgRemoveOperator, MsgRemoveOperatorResponse, MsgApproveScanner, MsgApproveScannerResponse, MsgRemoveScanner, MsgRemoveScannerResponse, MsgUpdateBackend, MsgUpdateBackendResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** RequestPermanentCopy asks for a permanent copy of an off-chain file. It burns the request fee and escrows the copy fee. */
  requestPermanentCopy(request: MsgRequestPermanentCopy): Promise<MsgRequestPermanentCopyResponse>;
  /** AddSource adds another address a request's file can be fetched from. It burns the request fee. */
  addSource(request: MsgAddSource): Promise<MsgAddSourceResponse>;
  /** CancelRequest withdraws a request that is still pending and refunds its copy fee. */
  cancelRequest(request: MsgCancelRequest): Promise<MsgCancelRequestResponse>;
  /** DisputeCompletion holds a completion's settlement for the dispute window. Free for the requester; any other eligible member burns the request fee. */
  disputeCompletion(request: MsgDisputeCompletion): Promise<MsgDisputeCompletionResponse>;
  /** ClaimRequest takes a pending request for the claim window. */
  claimRequest(request: MsgClaimRequest): Promise<MsgClaimRequestResponse>;
  /** ExtendClaim adds one claim window to a claim, once. */
  extendClaim(request: MsgExtendClaim): Promise<MsgExtendClaimResponse>;
  /** CompleteRequest records where the copy is. */
  completeRequest(request: MsgCompleteRequest): Promise<MsgCompleteRequestResponse>;
  /** DeclineRequest says this operator cannot store the file. */
  declineRequest(request: MsgDeclineRequest): Promise<MsgDeclineRequestResponse>;
  /** FlagRemoved flags a hash as removed content. */
  flagRemoved(request: MsgFlagRemoved): Promise<MsgFlagRemovedResponse>;
  /** UnflagRemoved lifts flags. A council lifts the flags of scanners it controls; governance lifts all. */
  unflagRemoved(request: MsgUnflagRemoved): Promise<MsgUnflagRemovedResponse>;
  /** VoidCompletion voids a completion whose copy is missing or wrong. */
  voidCompletion(request: MsgVoidCompletion): Promise<MsgVoidCompletionResponse>;
  /** ApproveOperator lets a storage operator act for a backend. Signed by the operator's controller or governance. */
  approveOperator(request: MsgApproveOperator): Promise<MsgApproveOperatorResponse>;
  /** RemoveOperator removes a storage operator's approval. */
  removeOperator(request: MsgRemoveOperator): Promise<MsgRemoveOperatorResponse>;
  /** ApproveScanner makes a content scanner's flags and verdicts count. Signed by the scanner's controller or governance. */
  approveScanner(request: MsgApproveScanner): Promise<MsgApproveScannerResponse>;
  /** RemoveScanner removes a content scanner's approval. Its flags stay. */
  removeScanner(request: MsgRemoveScanner): Promise<MsgRemoveScannerResponse>;
  /** UpdateBackend creates a backend when the name is new, and otherwise replaces its mutable fields. Governance only. */
  updateBackend(request: MsgUpdateBackend): Promise<MsgUpdateBackendResponse>;
  /** UpdateOperationalParams sets one backend's prices inside its governance bounds. Commons Operations Committee or governance. */
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
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* RequestPermanentCopy asks for a permanent copy of an off-chain file. It burns the request fee and escrows the copy fee. */
  requestPermanentCopy = async (request: MsgRequestPermanentCopy): Promise<MsgRequestPermanentCopyResponse> => {
    const data = MsgRequestPermanentCopy.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "RequestPermanentCopy", data);
    return promise.then(data => MsgRequestPermanentCopyResponse.decode(new BinaryReader(data)));
  };
  /* AddSource adds another address a request's file can be fetched from. It burns the request fee. */
  addSource = async (request: MsgAddSource): Promise<MsgAddSourceResponse> => {
    const data = MsgAddSource.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "AddSource", data);
    return promise.then(data => MsgAddSourceResponse.decode(new BinaryReader(data)));
  };
  /* CancelRequest withdraws a request that is still pending and refunds its copy fee. */
  cancelRequest = async (request: MsgCancelRequest): Promise<MsgCancelRequestResponse> => {
    const data = MsgCancelRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "CancelRequest", data);
    return promise.then(data => MsgCancelRequestResponse.decode(new BinaryReader(data)));
  };
  /* DisputeCompletion holds a completion's settlement for the dispute window. Free for the requester; any other eligible member burns the request fee. */
  disputeCompletion = async (request: MsgDisputeCompletion): Promise<MsgDisputeCompletionResponse> => {
    const data = MsgDisputeCompletion.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "DisputeCompletion", data);
    return promise.then(data => MsgDisputeCompletionResponse.decode(new BinaryReader(data)));
  };
  /* ClaimRequest takes a pending request for the claim window. */
  claimRequest = async (request: MsgClaimRequest): Promise<MsgClaimRequestResponse> => {
    const data = MsgClaimRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "ClaimRequest", data);
    return promise.then(data => MsgClaimRequestResponse.decode(new BinaryReader(data)));
  };
  /* ExtendClaim adds one claim window to a claim, once. */
  extendClaim = async (request: MsgExtendClaim): Promise<MsgExtendClaimResponse> => {
    const data = MsgExtendClaim.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "ExtendClaim", data);
    return promise.then(data => MsgExtendClaimResponse.decode(new BinaryReader(data)));
  };
  /* CompleteRequest records where the copy is. */
  completeRequest = async (request: MsgCompleteRequest): Promise<MsgCompleteRequestResponse> => {
    const data = MsgCompleteRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "CompleteRequest", data);
    return promise.then(data => MsgCompleteRequestResponse.decode(new BinaryReader(data)));
  };
  /* DeclineRequest says this operator cannot store the file. */
  declineRequest = async (request: MsgDeclineRequest): Promise<MsgDeclineRequestResponse> => {
    const data = MsgDeclineRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "DeclineRequest", data);
    return promise.then(data => MsgDeclineRequestResponse.decode(new BinaryReader(data)));
  };
  /* FlagRemoved flags a hash as removed content. */
  flagRemoved = async (request: MsgFlagRemoved): Promise<MsgFlagRemovedResponse> => {
    const data = MsgFlagRemoved.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "FlagRemoved", data);
    return promise.then(data => MsgFlagRemovedResponse.decode(new BinaryReader(data)));
  };
  /* UnflagRemoved lifts flags. A council lifts the flags of scanners it controls; governance lifts all. */
  unflagRemoved = async (request: MsgUnflagRemoved): Promise<MsgUnflagRemovedResponse> => {
    const data = MsgUnflagRemoved.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "UnflagRemoved", data);
    return promise.then(data => MsgUnflagRemovedResponse.decode(new BinaryReader(data)));
  };
  /* VoidCompletion voids a completion whose copy is missing or wrong. */
  voidCompletion = async (request: MsgVoidCompletion): Promise<MsgVoidCompletionResponse> => {
    const data = MsgVoidCompletion.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "VoidCompletion", data);
    return promise.then(data => MsgVoidCompletionResponse.decode(new BinaryReader(data)));
  };
  /* ApproveOperator lets a storage operator act for a backend. Signed by the operator's controller or governance. */
  approveOperator = async (request: MsgApproveOperator): Promise<MsgApproveOperatorResponse> => {
    const data = MsgApproveOperator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "ApproveOperator", data);
    return promise.then(data => MsgApproveOperatorResponse.decode(new BinaryReader(data)));
  };
  /* RemoveOperator removes a storage operator's approval. */
  removeOperator = async (request: MsgRemoveOperator): Promise<MsgRemoveOperatorResponse> => {
    const data = MsgRemoveOperator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "RemoveOperator", data);
    return promise.then(data => MsgRemoveOperatorResponse.decode(new BinaryReader(data)));
  };
  /* ApproveScanner makes a content scanner's flags and verdicts count. Signed by the scanner's controller or governance. */
  approveScanner = async (request: MsgApproveScanner): Promise<MsgApproveScannerResponse> => {
    const data = MsgApproveScanner.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "ApproveScanner", data);
    return promise.then(data => MsgApproveScannerResponse.decode(new BinaryReader(data)));
  };
  /* RemoveScanner removes a content scanner's approval. Its flags stay. */
  removeScanner = async (request: MsgRemoveScanner): Promise<MsgRemoveScannerResponse> => {
    const data = MsgRemoveScanner.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "RemoveScanner", data);
    return promise.then(data => MsgRemoveScannerResponse.decode(new BinaryReader(data)));
  };
  /* UpdateBackend creates a backend when the name is new, and otherwise replaces its mutable fields. Governance only. */
  updateBackend = async (request: MsgUpdateBackend): Promise<MsgUpdateBackendResponse> => {
    const data = MsgUpdateBackend.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "UpdateBackend", data);
    return promise.then(data => MsgUpdateBackendResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams sets one backend's prices inside its governance bounds. Commons Operations Committee or governance. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.storage.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};