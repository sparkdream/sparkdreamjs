//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { DeclineReason, Backend, BackendAmino } from "./storage";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/storage/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgRequestPermanentCopy asks for a permanent copy of an off-chain file. It burns the request fee and escrows the copy fee.
 * @name MsgRequestPermanentCopy
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRequestPermanentCopy
 */
export interface MsgRequestPermanentCopy {
  requester: string;
  /**
   * backend: the backend to store on
   */
  backend: string;
  /**
   * sha256: the sha256 of the exact file, 64 lowercase hex characters
   */
  sha256: string;
  /**
   * size_bytes: the file's length in bytes
   */
  sizeBytes: bigint;
  /**
   * content_type: must be listed by the backend
   */
  contentType: string;
  /**
   * url: an https address the file can be fetched from; public and permanent in history
   */
  url: string;
  /**
   * max_fee: the most the requester will pay in total (request fee plus copy fee)
   */
  maxFee: string;
}
export interface MsgRequestPermanentCopyProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopy";
  value: Uint8Array;
}
/**
 * MsgRequestPermanentCopy asks for a permanent copy of an off-chain file. It burns the request fee and escrows the copy fee.
 * @name MsgRequestPermanentCopyAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRequestPermanentCopy
 */
export interface MsgRequestPermanentCopyAmino {
  requester?: string;
  /**
   * backend: the backend to store on
   */
  backend?: string;
  /**
   * sha256: the sha256 of the exact file, 64 lowercase hex characters
   */
  sha256?: string;
  /**
   * size_bytes: the file's length in bytes
   */
  size_bytes?: string;
  /**
   * content_type: must be listed by the backend
   */
  content_type?: string;
  /**
   * url: an https address the file can be fetched from; public and permanent in history
   */
  url?: string;
  /**
   * max_fee: the most the requester will pay in total (request fee plus copy fee)
   */
  max_fee: string;
}
export interface MsgRequestPermanentCopyAminoMsg {
  type: "sparkdream/x/storage/MsgRequestPermanentCopy";
  value: MsgRequestPermanentCopyAmino;
}
/**
 * MsgRequestPermanentCopyResponse defines the MsgRequestPermanentCopyResponse message.
 * @name MsgRequestPermanentCopyResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRequestPermanentCopyResponse
 */
export interface MsgRequestPermanentCopyResponse {
  /**
   * request_id: the id of the new request
   */
  requestId: bigint;
}
export interface MsgRequestPermanentCopyResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopyResponse";
  value: Uint8Array;
}
/**
 * MsgRequestPermanentCopyResponse defines the MsgRequestPermanentCopyResponse message.
 * @name MsgRequestPermanentCopyResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRequestPermanentCopyResponse
 */
export interface MsgRequestPermanentCopyResponseAmino {
  /**
   * request_id: the id of the new request
   */
  request_id?: string;
}
export interface MsgRequestPermanentCopyResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgRequestPermanentCopyResponse";
  value: MsgRequestPermanentCopyResponseAmino;
}
/**
 * MsgAddSource adds another address a request's file can be fetched from. It burns the request fee.
 * @name MsgAddSource
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgAddSource
 */
export interface MsgAddSource {
  member: string;
  requestId: bigint;
  url: string;
  /**
   * max_fee: the most the member will pay
   */
  maxFee: string;
}
export interface MsgAddSourceProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgAddSource";
  value: Uint8Array;
}
/**
 * MsgAddSource adds another address a request's file can be fetched from. It burns the request fee.
 * @name MsgAddSourceAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgAddSource
 */
export interface MsgAddSourceAmino {
  member?: string;
  request_id?: string;
  url?: string;
  /**
   * max_fee: the most the member will pay
   */
  max_fee: string;
}
export interface MsgAddSourceAminoMsg {
  type: "sparkdream/x/storage/MsgAddSource";
  value: MsgAddSourceAmino;
}
/**
 * MsgAddSourceResponse defines the MsgAddSourceResponse message.
 * @name MsgAddSourceResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgAddSourceResponse
 */
export interface MsgAddSourceResponse {}
export interface MsgAddSourceResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgAddSourceResponse";
  value: Uint8Array;
}
/**
 * MsgAddSourceResponse defines the MsgAddSourceResponse message.
 * @name MsgAddSourceResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgAddSourceResponse
 */
export interface MsgAddSourceResponseAmino {}
export interface MsgAddSourceResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgAddSourceResponse";
  value: MsgAddSourceResponseAmino;
}
/**
 * MsgCancelRequest withdraws a request that is still pending and refunds its copy fee.
 * @name MsgCancelRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCancelRequest
 */
export interface MsgCancelRequest {
  requester: string;
  requestId: bigint;
}
export interface MsgCancelRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgCancelRequest";
  value: Uint8Array;
}
/**
 * MsgCancelRequest withdraws a request that is still pending and refunds its copy fee.
 * @name MsgCancelRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCancelRequest
 */
export interface MsgCancelRequestAmino {
  requester?: string;
  request_id?: string;
}
export interface MsgCancelRequestAminoMsg {
  type: "sparkdream/x/storage/MsgCancelRequest";
  value: MsgCancelRequestAmino;
}
/**
 * MsgCancelRequestResponse defines the MsgCancelRequestResponse message.
 * @name MsgCancelRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCancelRequestResponse
 */
export interface MsgCancelRequestResponse {}
export interface MsgCancelRequestResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgCancelRequestResponse";
  value: Uint8Array;
}
/**
 * MsgCancelRequestResponse defines the MsgCancelRequestResponse message.
 * @name MsgCancelRequestResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCancelRequestResponse
 */
export interface MsgCancelRequestResponseAmino {}
export interface MsgCancelRequestResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgCancelRequestResponse";
  value: MsgCancelRequestResponseAmino;
}
/**
 * MsgDisputeCompletion holds a completion's settlement for the dispute window. Free for the requester; any other eligible member burns the request fee.
 * @name MsgDisputeCompletion
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDisputeCompletion
 */
export interface MsgDisputeCompletion {
  member: string;
  requestId: bigint;
  /**
   * max_fee: the most a non-requester will pay
   */
  maxFee: string;
}
export interface MsgDisputeCompletionProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletion";
  value: Uint8Array;
}
/**
 * MsgDisputeCompletion holds a completion's settlement for the dispute window. Free for the requester; any other eligible member burns the request fee.
 * @name MsgDisputeCompletionAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDisputeCompletion
 */
export interface MsgDisputeCompletionAmino {
  member?: string;
  request_id?: string;
  /**
   * max_fee: the most a non-requester will pay
   */
  max_fee: string;
}
export interface MsgDisputeCompletionAminoMsg {
  type: "sparkdream/x/storage/MsgDisputeCompletion";
  value: MsgDisputeCompletionAmino;
}
/**
 * MsgDisputeCompletionResponse defines the MsgDisputeCompletionResponse message.
 * @name MsgDisputeCompletionResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDisputeCompletionResponse
 */
export interface MsgDisputeCompletionResponse {}
export interface MsgDisputeCompletionResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletionResponse";
  value: Uint8Array;
}
/**
 * MsgDisputeCompletionResponse defines the MsgDisputeCompletionResponse message.
 * @name MsgDisputeCompletionResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDisputeCompletionResponse
 */
export interface MsgDisputeCompletionResponseAmino {}
export interface MsgDisputeCompletionResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgDisputeCompletionResponse";
  value: MsgDisputeCompletionResponseAmino;
}
/**
 * MsgClaimRequest takes a pending request for the claim window.
 * @name MsgClaimRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgClaimRequest
 */
export interface MsgClaimRequest {
  operator: string;
  requestId: bigint;
}
export interface MsgClaimRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgClaimRequest";
  value: Uint8Array;
}
/**
 * MsgClaimRequest takes a pending request for the claim window.
 * @name MsgClaimRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgClaimRequest
 */
export interface MsgClaimRequestAmino {
  operator?: string;
  request_id?: string;
}
export interface MsgClaimRequestAminoMsg {
  type: "sparkdream/x/storage/MsgClaimRequest";
  value: MsgClaimRequestAmino;
}
/**
 * MsgClaimRequestResponse defines the MsgClaimRequestResponse message.
 * @name MsgClaimRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgClaimRequestResponse
 */
export interface MsgClaimRequestResponse {}
export interface MsgClaimRequestResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgClaimRequestResponse";
  value: Uint8Array;
}
/**
 * MsgClaimRequestResponse defines the MsgClaimRequestResponse message.
 * @name MsgClaimRequestResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgClaimRequestResponse
 */
export interface MsgClaimRequestResponseAmino {}
export interface MsgClaimRequestResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgClaimRequestResponse";
  value: MsgClaimRequestResponseAmino;
}
/**
 * MsgExtendClaim adds one claim window to a claim, once.
 * @name MsgExtendClaim
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgExtendClaim
 */
export interface MsgExtendClaim {
  operator: string;
  requestId: bigint;
}
export interface MsgExtendClaimProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgExtendClaim";
  value: Uint8Array;
}
/**
 * MsgExtendClaim adds one claim window to a claim, once.
 * @name MsgExtendClaimAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgExtendClaim
 */
export interface MsgExtendClaimAmino {
  operator?: string;
  request_id?: string;
}
export interface MsgExtendClaimAminoMsg {
  type: "sparkdream/x/storage/MsgExtendClaim";
  value: MsgExtendClaimAmino;
}
/**
 * MsgExtendClaimResponse defines the MsgExtendClaimResponse message.
 * @name MsgExtendClaimResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgExtendClaimResponse
 */
export interface MsgExtendClaimResponse {}
export interface MsgExtendClaimResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgExtendClaimResponse";
  value: Uint8Array;
}
/**
 * MsgExtendClaimResponse defines the MsgExtendClaimResponse message.
 * @name MsgExtendClaimResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgExtendClaimResponse
 */
export interface MsgExtendClaimResponseAmino {}
export interface MsgExtendClaimResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgExtendClaimResponse";
  value: MsgExtendClaimResponseAmino;
}
/**
 * MsgCompleteRequest records where the copy is.
 * @name MsgCompleteRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCompleteRequest
 */
export interface MsgCompleteRequest {
  operator: string;
  requestId: bigint;
  /**
   * locator: where the copy is, in the backend's locator format
   */
  locator: string;
  /**
   * attestations: sha256 hashes (hex) of the signed clean verdicts relied on; required for a scanned request
   */
  attestations: string[];
  /**
   * verdicts_locator: where those signed verdicts are published; required for a scanned request
   */
  verdictsLocator: string;
}
export interface MsgCompleteRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgCompleteRequest";
  value: Uint8Array;
}
/**
 * MsgCompleteRequest records where the copy is.
 * @name MsgCompleteRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCompleteRequest
 */
export interface MsgCompleteRequestAmino {
  operator?: string;
  request_id?: string;
  /**
   * locator: where the copy is, in the backend's locator format
   */
  locator?: string;
  /**
   * attestations: sha256 hashes (hex) of the signed clean verdicts relied on; required for a scanned request
   */
  attestations?: string[];
  /**
   * verdicts_locator: where those signed verdicts are published; required for a scanned request
   */
  verdicts_locator?: string;
}
export interface MsgCompleteRequestAminoMsg {
  type: "sparkdream/x/storage/MsgCompleteRequest";
  value: MsgCompleteRequestAmino;
}
/**
 * MsgCompleteRequestResponse defines the MsgCompleteRequestResponse message.
 * @name MsgCompleteRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCompleteRequestResponse
 */
export interface MsgCompleteRequestResponse {}
export interface MsgCompleteRequestResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgCompleteRequestResponse";
  value: Uint8Array;
}
/**
 * MsgCompleteRequestResponse defines the MsgCompleteRequestResponse message.
 * @name MsgCompleteRequestResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCompleteRequestResponse
 */
export interface MsgCompleteRequestResponseAmino {}
export interface MsgCompleteRequestResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgCompleteRequestResponse";
  value: MsgCompleteRequestResponseAmino;
}
/**
 * MsgDeclineRequest says this operator cannot store the file.
 * @name MsgDeclineRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDeclineRequest
 */
export interface MsgDeclineRequest {
  operator: string;
  requestId: bigint;
  reason: DeclineReason;
}
export interface MsgDeclineRequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgDeclineRequest";
  value: Uint8Array;
}
/**
 * MsgDeclineRequest says this operator cannot store the file.
 * @name MsgDeclineRequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDeclineRequest
 */
export interface MsgDeclineRequestAmino {
  operator?: string;
  request_id?: string;
  reason?: DeclineReason;
}
export interface MsgDeclineRequestAminoMsg {
  type: "sparkdream/x/storage/MsgDeclineRequest";
  value: MsgDeclineRequestAmino;
}
/**
 * MsgDeclineRequestResponse defines the MsgDeclineRequestResponse message.
 * @name MsgDeclineRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDeclineRequestResponse
 */
export interface MsgDeclineRequestResponse {}
export interface MsgDeclineRequestResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgDeclineRequestResponse";
  value: Uint8Array;
}
/**
 * MsgDeclineRequestResponse defines the MsgDeclineRequestResponse message.
 * @name MsgDeclineRequestResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDeclineRequestResponse
 */
export interface MsgDeclineRequestResponseAmino {}
export interface MsgDeclineRequestResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgDeclineRequestResponse";
  value: MsgDeclineRequestResponseAmino;
}
/**
 * MsgFlagRemoved flags a hash as removed content.
 * @name MsgFlagRemoved
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgFlagRemoved
 */
export interface MsgFlagRemoved {
  scanner: string;
  /**
   * sha256: the flagged file's sha256, 64 lowercase hex characters
   */
  sha256: string;
  /**
   * attestation_hash: the sha256 (hex) of the scanner's signed removed verdict
   */
  attestationHash: string;
}
export interface MsgFlagRemovedProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgFlagRemoved";
  value: Uint8Array;
}
/**
 * MsgFlagRemoved flags a hash as removed content.
 * @name MsgFlagRemovedAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgFlagRemoved
 */
export interface MsgFlagRemovedAmino {
  scanner?: string;
  /**
   * sha256: the flagged file's sha256, 64 lowercase hex characters
   */
  sha256?: string;
  /**
   * attestation_hash: the sha256 (hex) of the scanner's signed removed verdict
   */
  attestation_hash?: string;
}
export interface MsgFlagRemovedAminoMsg {
  type: "sparkdream/x/storage/MsgFlagRemoved";
  value: MsgFlagRemovedAmino;
}
/**
 * MsgFlagRemovedResponse defines the MsgFlagRemovedResponse message.
 * @name MsgFlagRemovedResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgFlagRemovedResponse
 */
export interface MsgFlagRemovedResponse {}
export interface MsgFlagRemovedResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgFlagRemovedResponse";
  value: Uint8Array;
}
/**
 * MsgFlagRemovedResponse defines the MsgFlagRemovedResponse message.
 * @name MsgFlagRemovedResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgFlagRemovedResponse
 */
export interface MsgFlagRemovedResponseAmino {}
export interface MsgFlagRemovedResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgFlagRemovedResponse";
  value: MsgFlagRemovedResponseAmino;
}
/**
 * MsgUnflagRemoved lifts flags. A council lifts the flags of scanners it controls; governance lifts all.
 * @name MsgUnflagRemoved
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUnflagRemoved
 */
export interface MsgUnflagRemoved {
  authority: string;
  /**
   * hashes: the flagged hashes; the message fails as a whole if any is refused
   */
  hashes: string[];
}
export interface MsgUnflagRemovedProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUnflagRemoved";
  value: Uint8Array;
}
/**
 * MsgUnflagRemoved lifts flags. A council lifts the flags of scanners it controls; governance lifts all.
 * @name MsgUnflagRemovedAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUnflagRemoved
 */
export interface MsgUnflagRemovedAmino {
  authority?: string;
  /**
   * hashes: the flagged hashes; the message fails as a whole if any is refused
   */
  hashes?: string[];
}
export interface MsgUnflagRemovedAminoMsg {
  type: "sparkdream/x/storage/MsgUnflagRemoved";
  value: MsgUnflagRemovedAmino;
}
/**
 * MsgUnflagRemovedResponse defines the MsgUnflagRemovedResponse message.
 * @name MsgUnflagRemovedResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUnflagRemovedResponse
 */
export interface MsgUnflagRemovedResponse {}
export interface MsgUnflagRemovedResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUnflagRemovedResponse";
  value: Uint8Array;
}
/**
 * MsgUnflagRemovedResponse defines the MsgUnflagRemovedResponse message.
 * @name MsgUnflagRemovedResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUnflagRemovedResponse
 */
export interface MsgUnflagRemovedResponseAmino {}
export interface MsgUnflagRemovedResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgUnflagRemovedResponse";
  value: MsgUnflagRemovedResponseAmino;
}
/**
 * MsgVoidCompletion voids a completion whose copy is missing or wrong.
 * @name MsgVoidCompletion
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgVoidCompletion
 */
export interface MsgVoidCompletion {
  authority: string;
  requestId: bigint;
  /**
   * reason: free text for the record, length-capped
   */
  reason: string;
}
export interface MsgVoidCompletionProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgVoidCompletion";
  value: Uint8Array;
}
/**
 * MsgVoidCompletion voids a completion whose copy is missing or wrong.
 * @name MsgVoidCompletionAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgVoidCompletion
 */
export interface MsgVoidCompletionAmino {
  authority?: string;
  request_id?: string;
  /**
   * reason: free text for the record, length-capped
   */
  reason?: string;
}
export interface MsgVoidCompletionAminoMsg {
  type: "sparkdream/x/storage/MsgVoidCompletion";
  value: MsgVoidCompletionAmino;
}
/**
 * MsgVoidCompletionResponse defines the MsgVoidCompletionResponse message.
 * @name MsgVoidCompletionResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgVoidCompletionResponse
 */
export interface MsgVoidCompletionResponse {}
export interface MsgVoidCompletionResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgVoidCompletionResponse";
  value: Uint8Array;
}
/**
 * MsgVoidCompletionResponse defines the MsgVoidCompletionResponse message.
 * @name MsgVoidCompletionResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgVoidCompletionResponse
 */
export interface MsgVoidCompletionResponseAmino {}
export interface MsgVoidCompletionResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgVoidCompletionResponse";
  value: MsgVoidCompletionResponseAmino;
}
/**
 * MsgApproveOperator lets a storage operator act for a backend. Signed by the operator's controller or governance.
 * @name MsgApproveOperator
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveOperator
 */
export interface MsgApproveOperator {
  authority: string;
  backend: string;
  operator: string;
}
export interface MsgApproveOperatorProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgApproveOperator";
  value: Uint8Array;
}
/**
 * MsgApproveOperator lets a storage operator act for a backend. Signed by the operator's controller or governance.
 * @name MsgApproveOperatorAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveOperator
 */
export interface MsgApproveOperatorAmino {
  authority?: string;
  backend?: string;
  operator?: string;
}
export interface MsgApproveOperatorAminoMsg {
  type: "sparkdream/x/storage/MsgApproveOperator";
  value: MsgApproveOperatorAmino;
}
/**
 * MsgApproveOperatorResponse defines the MsgApproveOperatorResponse message.
 * @name MsgApproveOperatorResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveOperatorResponse
 */
export interface MsgApproveOperatorResponse {}
export interface MsgApproveOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgApproveOperatorResponse";
  value: Uint8Array;
}
/**
 * MsgApproveOperatorResponse defines the MsgApproveOperatorResponse message.
 * @name MsgApproveOperatorResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveOperatorResponse
 */
export interface MsgApproveOperatorResponseAmino {}
export interface MsgApproveOperatorResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgApproveOperatorResponse";
  value: MsgApproveOperatorResponseAmino;
}
/**
 * MsgRemoveOperator removes a storage operator's approval.
 * @name MsgRemoveOperator
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveOperator
 */
export interface MsgRemoveOperator {
  authority: string;
  backend: string;
  operator: string;
}
export interface MsgRemoveOperatorProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveOperator";
  value: Uint8Array;
}
/**
 * MsgRemoveOperator removes a storage operator's approval.
 * @name MsgRemoveOperatorAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveOperator
 */
export interface MsgRemoveOperatorAmino {
  authority?: string;
  backend?: string;
  operator?: string;
}
export interface MsgRemoveOperatorAminoMsg {
  type: "sparkdream/x/storage/MsgRemoveOperator";
  value: MsgRemoveOperatorAmino;
}
/**
 * MsgRemoveOperatorResponse defines the MsgRemoveOperatorResponse message.
 * @name MsgRemoveOperatorResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveOperatorResponse
 */
export interface MsgRemoveOperatorResponse {}
export interface MsgRemoveOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveOperatorResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveOperatorResponse defines the MsgRemoveOperatorResponse message.
 * @name MsgRemoveOperatorResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveOperatorResponse
 */
export interface MsgRemoveOperatorResponseAmino {}
export interface MsgRemoveOperatorResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgRemoveOperatorResponse";
  value: MsgRemoveOperatorResponseAmino;
}
/**
 * MsgApproveScanner makes a content scanner's flags and verdicts count. Signed by the scanner's controller or governance.
 * @name MsgApproveScanner
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveScanner
 */
export interface MsgApproveScanner {
  authority: string;
  scanner: string;
}
export interface MsgApproveScannerProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgApproveScanner";
  value: Uint8Array;
}
/**
 * MsgApproveScanner makes a content scanner's flags and verdicts count. Signed by the scanner's controller or governance.
 * @name MsgApproveScannerAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveScanner
 */
export interface MsgApproveScannerAmino {
  authority?: string;
  scanner?: string;
}
export interface MsgApproveScannerAminoMsg {
  type: "sparkdream/x/storage/MsgApproveScanner";
  value: MsgApproveScannerAmino;
}
/**
 * MsgApproveScannerResponse defines the MsgApproveScannerResponse message.
 * @name MsgApproveScannerResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveScannerResponse
 */
export interface MsgApproveScannerResponse {}
export interface MsgApproveScannerResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgApproveScannerResponse";
  value: Uint8Array;
}
/**
 * MsgApproveScannerResponse defines the MsgApproveScannerResponse message.
 * @name MsgApproveScannerResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveScannerResponse
 */
export interface MsgApproveScannerResponseAmino {}
export interface MsgApproveScannerResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgApproveScannerResponse";
  value: MsgApproveScannerResponseAmino;
}
/**
 * MsgRemoveScanner removes a content scanner's approval. Its flags stay.
 * @name MsgRemoveScanner
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveScanner
 */
export interface MsgRemoveScanner {
  authority: string;
  scanner: string;
}
export interface MsgRemoveScannerProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveScanner";
  value: Uint8Array;
}
/**
 * MsgRemoveScanner removes a content scanner's approval. Its flags stay.
 * @name MsgRemoveScannerAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveScanner
 */
export interface MsgRemoveScannerAmino {
  authority?: string;
  scanner?: string;
}
export interface MsgRemoveScannerAminoMsg {
  type: "sparkdream/x/storage/MsgRemoveScanner";
  value: MsgRemoveScannerAmino;
}
/**
 * MsgRemoveScannerResponse defines the MsgRemoveScannerResponse message.
 * @name MsgRemoveScannerResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveScannerResponse
 */
export interface MsgRemoveScannerResponse {}
export interface MsgRemoveScannerResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveScannerResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveScannerResponse defines the MsgRemoveScannerResponse message.
 * @name MsgRemoveScannerResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveScannerResponse
 */
export interface MsgRemoveScannerResponseAmino {}
export interface MsgRemoveScannerResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgRemoveScannerResponse";
  value: MsgRemoveScannerResponseAmino;
}
/**
 * MsgUpdateBackend creates a backend when the name is new, and otherwise replaces its mutable fields. Governance only.
 * @name MsgUpdateBackend
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateBackend
 */
export interface MsgUpdateBackend {
  authority: string;
  /**
   * backend: every field must be supplied
   */
  backend: Backend;
}
export interface MsgUpdateBackendProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateBackend";
  value: Uint8Array;
}
/**
 * MsgUpdateBackend creates a backend when the name is new, and otherwise replaces its mutable fields. Governance only.
 * @name MsgUpdateBackendAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateBackend
 */
export interface MsgUpdateBackendAmino {
  authority?: string;
  /**
   * backend: every field must be supplied
   */
  backend: BackendAmino;
}
export interface MsgUpdateBackendAminoMsg {
  type: "sparkdream/x/storage/MsgUpdateBackend";
  value: MsgUpdateBackendAmino;
}
/**
 * MsgUpdateBackendResponse defines the MsgUpdateBackendResponse message.
 * @name MsgUpdateBackendResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateBackendResponse
 */
export interface MsgUpdateBackendResponse {}
export interface MsgUpdateBackendResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateBackendResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateBackendResponse defines the MsgUpdateBackendResponse message.
 * @name MsgUpdateBackendResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateBackendResponse
 */
export interface MsgUpdateBackendResponseAmino {}
export interface MsgUpdateBackendResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgUpdateBackendResponse";
  value: MsgUpdateBackendResponseAmino;
}
/**
 * MsgUpdateOperationalParams sets one backend's prices inside its governance bounds. Commons Operations Committee or governance.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  authority: string;
  backend: string;
  pricePerByte: string;
  minFee: string;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams sets one backend's prices inside its governance bounds. Commons Operations Committee or governance.
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  authority?: string;
  backend?: string;
  price_per_byte: string;
  min_fee: string;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/storage/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the MsgUpdateOperationalParamsResponse message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the MsgUpdateOperationalParamsResponse message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.storage.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/storage/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestPermanentCopy(): MsgRequestPermanentCopy {
  return {
    requester: "",
    backend: "",
    sha256: "",
    sizeBytes: BigInt(0),
    contentType: "",
    url: "",
    maxFee: ""
  };
}
/**
 * MsgRequestPermanentCopy asks for a permanent copy of an off-chain file. It burns the request fee and escrows the copy fee.
 * @name MsgRequestPermanentCopy
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRequestPermanentCopy
 */
export const MsgRequestPermanentCopy = {
  typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopy",
  aminoType: "sparkdream/x/storage/MsgRequestPermanentCopy",
  encode(message: MsgRequestPermanentCopy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.backend !== "") {
      writer.uint32(18).string(message.backend);
    }
    if (message.sha256 !== "") {
      writer.uint32(26).string(message.sha256);
    }
    if (message.sizeBytes !== BigInt(0)) {
      writer.uint32(32).uint64(message.sizeBytes);
    }
    if (message.contentType !== "") {
      writer.uint32(42).string(message.contentType);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.maxFee !== "") {
      writer.uint32(58).string(message.maxFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestPermanentCopy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestPermanentCopy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.backend = reader.string();
          break;
        case 3:
          message.sha256 = reader.string();
          break;
        case 4:
          message.sizeBytes = reader.uint64();
          break;
        case 5:
          message.contentType = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.maxFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestPermanentCopy>): MsgRequestPermanentCopy {
    const message = createBaseMsgRequestPermanentCopy();
    message.requester = object.requester ?? "";
    message.backend = object.backend ?? "";
    message.sha256 = object.sha256 ?? "";
    message.sizeBytes = object.sizeBytes !== undefined && object.sizeBytes !== null ? BigInt(object.sizeBytes.toString()) : BigInt(0);
    message.contentType = object.contentType ?? "";
    message.url = object.url ?? "";
    message.maxFee = object.maxFee ?? "";
    return message;
  },
  fromAmino(object: MsgRequestPermanentCopyAmino): MsgRequestPermanentCopy {
    const message = createBaseMsgRequestPermanentCopy();
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.sha256 !== undefined && object.sha256 !== null) {
      message.sha256 = object.sha256;
    }
    if (object.size_bytes !== undefined && object.size_bytes !== null) {
      message.sizeBytes = BigInt(object.size_bytes);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.max_fee !== undefined && object.max_fee !== null) {
      message.maxFee = object.max_fee;
    }
    return message;
  },
  toAmino(message: MsgRequestPermanentCopy): MsgRequestPermanentCopyAmino {
    const obj: any = {};
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.sha256 = message.sha256 === "" ? undefined : message.sha256;
    obj.size_bytes = message.sizeBytes !== BigInt(0) ? message.sizeBytes?.toString() : undefined;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.url = message.url === "" ? undefined : message.url;
    obj.max_fee = message.maxFee ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgRequestPermanentCopyAminoMsg): MsgRequestPermanentCopy {
    return MsgRequestPermanentCopy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRequestPermanentCopy): MsgRequestPermanentCopyAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgRequestPermanentCopy",
      value: MsgRequestPermanentCopy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRequestPermanentCopyProtoMsg): MsgRequestPermanentCopy {
    return MsgRequestPermanentCopy.decode(message.value);
  },
  toProto(message: MsgRequestPermanentCopy): Uint8Array {
    return MsgRequestPermanentCopy.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestPermanentCopy): MsgRequestPermanentCopyProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopy",
      value: MsgRequestPermanentCopy.encode(message).finish()
    };
  }
};
function createBaseMsgRequestPermanentCopyResponse(): MsgRequestPermanentCopyResponse {
  return {
    requestId: BigInt(0)
  };
}
/**
 * MsgRequestPermanentCopyResponse defines the MsgRequestPermanentCopyResponse message.
 * @name MsgRequestPermanentCopyResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRequestPermanentCopyResponse
 */
export const MsgRequestPermanentCopyResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopyResponse",
  encode(message: MsgRequestPermanentCopyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestPermanentCopyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestPermanentCopyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestPermanentCopyResponse>): MsgRequestPermanentCopyResponse {
    const message = createBaseMsgRequestPermanentCopyResponse();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRequestPermanentCopyResponseAmino): MsgRequestPermanentCopyResponse {
    const message = createBaseMsgRequestPermanentCopyResponse();
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: MsgRequestPermanentCopyResponse): MsgRequestPermanentCopyResponseAmino {
    const obj: any = {};
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestPermanentCopyResponseAminoMsg): MsgRequestPermanentCopyResponse {
    return MsgRequestPermanentCopyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestPermanentCopyResponseProtoMsg): MsgRequestPermanentCopyResponse {
    return MsgRequestPermanentCopyResponse.decode(message.value);
  },
  toProto(message: MsgRequestPermanentCopyResponse): Uint8Array {
    return MsgRequestPermanentCopyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestPermanentCopyResponse): MsgRequestPermanentCopyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopyResponse",
      value: MsgRequestPermanentCopyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddSource(): MsgAddSource {
  return {
    member: "",
    requestId: BigInt(0),
    url: "",
    maxFee: ""
  };
}
/**
 * MsgAddSource adds another address a request's file can be fetched from. It burns the request fee.
 * @name MsgAddSource
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgAddSource
 */
export const MsgAddSource = {
  typeUrl: "/sparkdream.storage.v1.MsgAddSource",
  aminoType: "sparkdream/x/storage/MsgAddSource",
  encode(message: MsgAddSource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.maxFee !== "") {
      writer.uint32(34).string(message.maxFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.maxFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddSource>): MsgAddSource {
    const message = createBaseMsgAddSource();
    message.member = object.member ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.url = object.url ?? "";
    message.maxFee = object.maxFee ?? "";
    return message;
  },
  fromAmino(object: MsgAddSourceAmino): MsgAddSource {
    const message = createBaseMsgAddSource();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.max_fee !== undefined && object.max_fee !== null) {
      message.maxFee = object.max_fee;
    }
    return message;
  },
  toAmino(message: MsgAddSource): MsgAddSourceAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.url = message.url === "" ? undefined : message.url;
    obj.max_fee = message.maxFee ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgAddSourceAminoMsg): MsgAddSource {
    return MsgAddSource.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddSource): MsgAddSourceAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgAddSource",
      value: MsgAddSource.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddSourceProtoMsg): MsgAddSource {
    return MsgAddSource.decode(message.value);
  },
  toProto(message: MsgAddSource): Uint8Array {
    return MsgAddSource.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSource): MsgAddSourceProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgAddSource",
      value: MsgAddSource.encode(message).finish()
    };
  }
};
function createBaseMsgAddSourceResponse(): MsgAddSourceResponse {
  return {};
}
/**
 * MsgAddSourceResponse defines the MsgAddSourceResponse message.
 * @name MsgAddSourceResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgAddSourceResponse
 */
export const MsgAddSourceResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgAddSourceResponse",
  encode(_: MsgAddSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAddSourceResponse>): MsgAddSourceResponse {
    const message = createBaseMsgAddSourceResponse();
    return message;
  },
  fromAmino(_: MsgAddSourceResponseAmino): MsgAddSourceResponse {
    const message = createBaseMsgAddSourceResponse();
    return message;
  },
  toAmino(_: MsgAddSourceResponse): MsgAddSourceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddSourceResponseAminoMsg): MsgAddSourceResponse {
    return MsgAddSourceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSourceResponseProtoMsg): MsgAddSourceResponse {
    return MsgAddSourceResponse.decode(message.value);
  },
  toProto(message: MsgAddSourceResponse): Uint8Array {
    return MsgAddSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSourceResponse): MsgAddSourceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgAddSourceResponse",
      value: MsgAddSourceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRequest(): MsgCancelRequest {
  return {
    requester: "",
    requestId: BigInt(0)
  };
}
/**
 * MsgCancelRequest withdraws a request that is still pending and refunds its copy fee.
 * @name MsgCancelRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCancelRequest
 */
export const MsgCancelRequest = {
  typeUrl: "/sparkdream.storage.v1.MsgCancelRequest",
  aminoType: "sparkdream/x/storage/MsgCancelRequest",
  encode(message: MsgCancelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelRequest>): MsgCancelRequest {
    const message = createBaseMsgCancelRequest();
    message.requester = object.requester ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelRequestAmino): MsgCancelRequest {
    const message = createBaseMsgCancelRequest();
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: MsgCancelRequest): MsgCancelRequestAmino {
    const obj: any = {};
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelRequestAminoMsg): MsgCancelRequest {
    return MsgCancelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelRequest): MsgCancelRequestAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgCancelRequest",
      value: MsgCancelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelRequestProtoMsg): MsgCancelRequest {
    return MsgCancelRequest.decode(message.value);
  },
  toProto(message: MsgCancelRequest): Uint8Array {
    return MsgCancelRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRequest): MsgCancelRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgCancelRequest",
      value: MsgCancelRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRequestResponse(): MsgCancelRequestResponse {
  return {};
}
/**
 * MsgCancelRequestResponse defines the MsgCancelRequestResponse message.
 * @name MsgCancelRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCancelRequestResponse
 */
export const MsgCancelRequestResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgCancelRequestResponse",
  encode(_: MsgCancelRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCancelRequestResponse>): MsgCancelRequestResponse {
    const message = createBaseMsgCancelRequestResponse();
    return message;
  },
  fromAmino(_: MsgCancelRequestResponseAmino): MsgCancelRequestResponse {
    const message = createBaseMsgCancelRequestResponse();
    return message;
  },
  toAmino(_: MsgCancelRequestResponse): MsgCancelRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelRequestResponseAminoMsg): MsgCancelRequestResponse {
    return MsgCancelRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRequestResponseProtoMsg): MsgCancelRequestResponse {
    return MsgCancelRequestResponse.decode(message.value);
  },
  toProto(message: MsgCancelRequestResponse): Uint8Array {
    return MsgCancelRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRequestResponse): MsgCancelRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgCancelRequestResponse",
      value: MsgCancelRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisputeCompletion(): MsgDisputeCompletion {
  return {
    member: "",
    requestId: BigInt(0),
    maxFee: ""
  };
}
/**
 * MsgDisputeCompletion holds a completion's settlement for the dispute window. Free for the requester; any other eligible member burns the request fee.
 * @name MsgDisputeCompletion
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDisputeCompletion
 */
export const MsgDisputeCompletion = {
  typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletion",
  aminoType: "sparkdream/x/storage/MsgDisputeCompletion",
  encode(message: MsgDisputeCompletion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    if (message.maxFee !== "") {
      writer.uint32(26).string(message.maxFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisputeCompletion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisputeCompletion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        case 3:
          message.maxFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDisputeCompletion>): MsgDisputeCompletion {
    const message = createBaseMsgDisputeCompletion();
    message.member = object.member ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.maxFee = object.maxFee ?? "";
    return message;
  },
  fromAmino(object: MsgDisputeCompletionAmino): MsgDisputeCompletion {
    const message = createBaseMsgDisputeCompletion();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.max_fee !== undefined && object.max_fee !== null) {
      message.maxFee = object.max_fee;
    }
    return message;
  },
  toAmino(message: MsgDisputeCompletion): MsgDisputeCompletionAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.max_fee = message.maxFee ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgDisputeCompletionAminoMsg): MsgDisputeCompletion {
    return MsgDisputeCompletion.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisputeCompletion): MsgDisputeCompletionAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgDisputeCompletion",
      value: MsgDisputeCompletion.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisputeCompletionProtoMsg): MsgDisputeCompletion {
    return MsgDisputeCompletion.decode(message.value);
  },
  toProto(message: MsgDisputeCompletion): Uint8Array {
    return MsgDisputeCompletion.encode(message).finish();
  },
  toProtoMsg(message: MsgDisputeCompletion): MsgDisputeCompletionProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletion",
      value: MsgDisputeCompletion.encode(message).finish()
    };
  }
};
function createBaseMsgDisputeCompletionResponse(): MsgDisputeCompletionResponse {
  return {};
}
/**
 * MsgDisputeCompletionResponse defines the MsgDisputeCompletionResponse message.
 * @name MsgDisputeCompletionResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDisputeCompletionResponse
 */
export const MsgDisputeCompletionResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletionResponse",
  encode(_: MsgDisputeCompletionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisputeCompletionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisputeCompletionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDisputeCompletionResponse>): MsgDisputeCompletionResponse {
    const message = createBaseMsgDisputeCompletionResponse();
    return message;
  },
  fromAmino(_: MsgDisputeCompletionResponseAmino): MsgDisputeCompletionResponse {
    const message = createBaseMsgDisputeCompletionResponse();
    return message;
  },
  toAmino(_: MsgDisputeCompletionResponse): MsgDisputeCompletionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisputeCompletionResponseAminoMsg): MsgDisputeCompletionResponse {
    return MsgDisputeCompletionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisputeCompletionResponseProtoMsg): MsgDisputeCompletionResponse {
    return MsgDisputeCompletionResponse.decode(message.value);
  },
  toProto(message: MsgDisputeCompletionResponse): Uint8Array {
    return MsgDisputeCompletionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisputeCompletionResponse): MsgDisputeCompletionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletionResponse",
      value: MsgDisputeCompletionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRequest(): MsgClaimRequest {
  return {
    operator: "",
    requestId: BigInt(0)
  };
}
/**
 * MsgClaimRequest takes a pending request for the claim window.
 * @name MsgClaimRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgClaimRequest
 */
export const MsgClaimRequest = {
  typeUrl: "/sparkdream.storage.v1.MsgClaimRequest",
  aminoType: "sparkdream/x/storage/MsgClaimRequest",
  encode(message: MsgClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimRequest>): MsgClaimRequest {
    const message = createBaseMsgClaimRequest();
    message.operator = object.operator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimRequestAmino): MsgClaimRequest {
    const message = createBaseMsgClaimRequest();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: MsgClaimRequest): MsgClaimRequestAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRequestAminoMsg): MsgClaimRequest {
    return MsgClaimRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimRequest): MsgClaimRequestAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgClaimRequest",
      value: MsgClaimRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimRequestProtoMsg): MsgClaimRequest {
    return MsgClaimRequest.decode(message.value);
  },
  toProto(message: MsgClaimRequest): Uint8Array {
    return MsgClaimRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRequest): MsgClaimRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgClaimRequest",
      value: MsgClaimRequest.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRequestResponse(): MsgClaimRequestResponse {
  return {};
}
/**
 * MsgClaimRequestResponse defines the MsgClaimRequestResponse message.
 * @name MsgClaimRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgClaimRequestResponse
 */
export const MsgClaimRequestResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgClaimRequestResponse",
  encode(_: MsgClaimRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgClaimRequestResponse>): MsgClaimRequestResponse {
    const message = createBaseMsgClaimRequestResponse();
    return message;
  },
  fromAmino(_: MsgClaimRequestResponseAmino): MsgClaimRequestResponse {
    const message = createBaseMsgClaimRequestResponse();
    return message;
  },
  toAmino(_: MsgClaimRequestResponse): MsgClaimRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimRequestResponseAminoMsg): MsgClaimRequestResponse {
    return MsgClaimRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRequestResponseProtoMsg): MsgClaimRequestResponse {
    return MsgClaimRequestResponse.decode(message.value);
  },
  toProto(message: MsgClaimRequestResponse): Uint8Array {
    return MsgClaimRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRequestResponse): MsgClaimRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgClaimRequestResponse",
      value: MsgClaimRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExtendClaim(): MsgExtendClaim {
  return {
    operator: "",
    requestId: BigInt(0)
  };
}
/**
 * MsgExtendClaim adds one claim window to a claim, once.
 * @name MsgExtendClaim
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgExtendClaim
 */
export const MsgExtendClaim = {
  typeUrl: "/sparkdream.storage.v1.MsgExtendClaim",
  aminoType: "sparkdream/x/storage/MsgExtendClaim",
  encode(message: MsgExtendClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExtendClaim>): MsgExtendClaim {
    const message = createBaseMsgExtendClaim();
    message.operator = object.operator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgExtendClaimAmino): MsgExtendClaim {
    const message = createBaseMsgExtendClaim();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: MsgExtendClaim): MsgExtendClaimAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExtendClaimAminoMsg): MsgExtendClaim {
    return MsgExtendClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendClaim): MsgExtendClaimAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgExtendClaim",
      value: MsgExtendClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendClaimProtoMsg): MsgExtendClaim {
    return MsgExtendClaim.decode(message.value);
  },
  toProto(message: MsgExtendClaim): Uint8Array {
    return MsgExtendClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendClaim): MsgExtendClaimProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgExtendClaim",
      value: MsgExtendClaim.encode(message).finish()
    };
  }
};
function createBaseMsgExtendClaimResponse(): MsgExtendClaimResponse {
  return {};
}
/**
 * MsgExtendClaimResponse defines the MsgExtendClaimResponse message.
 * @name MsgExtendClaimResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgExtendClaimResponse
 */
export const MsgExtendClaimResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgExtendClaimResponse",
  encode(_: MsgExtendClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgExtendClaimResponse>): MsgExtendClaimResponse {
    const message = createBaseMsgExtendClaimResponse();
    return message;
  },
  fromAmino(_: MsgExtendClaimResponseAmino): MsgExtendClaimResponse {
    const message = createBaseMsgExtendClaimResponse();
    return message;
  },
  toAmino(_: MsgExtendClaimResponse): MsgExtendClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExtendClaimResponseAminoMsg): MsgExtendClaimResponse {
    return MsgExtendClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExtendClaimResponseProtoMsg): MsgExtendClaimResponse {
    return MsgExtendClaimResponse.decode(message.value);
  },
  toProto(message: MsgExtendClaimResponse): Uint8Array {
    return MsgExtendClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendClaimResponse): MsgExtendClaimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgExtendClaimResponse",
      value: MsgExtendClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteRequest(): MsgCompleteRequest {
  return {
    operator: "",
    requestId: BigInt(0),
    locator: "",
    attestations: [],
    verdictsLocator: ""
  };
}
/**
 * MsgCompleteRequest records where the copy is.
 * @name MsgCompleteRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCompleteRequest
 */
export const MsgCompleteRequest = {
  typeUrl: "/sparkdream.storage.v1.MsgCompleteRequest",
  aminoType: "sparkdream/x/storage/MsgCompleteRequest",
  encode(message: MsgCompleteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    if (message.locator !== "") {
      writer.uint32(26).string(message.locator);
    }
    for (const v of message.attestations) {
      writer.uint32(34).string(v!);
    }
    if (message.verdictsLocator !== "") {
      writer.uint32(42).string(message.verdictsLocator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        case 3:
          message.locator = reader.string();
          break;
        case 4:
          message.attestations.push(reader.string());
          break;
        case 5:
          message.verdictsLocator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCompleteRequest>): MsgCompleteRequest {
    const message = createBaseMsgCompleteRequest();
    message.operator = object.operator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.locator = object.locator ?? "";
    message.attestations = object.attestations?.map(e => e) || [];
    message.verdictsLocator = object.verdictsLocator ?? "";
    return message;
  },
  fromAmino(object: MsgCompleteRequestAmino): MsgCompleteRequest {
    const message = createBaseMsgCompleteRequest();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.locator !== undefined && object.locator !== null) {
      message.locator = object.locator;
    }
    message.attestations = object.attestations?.map(e => e) || [];
    if (object.verdicts_locator !== undefined && object.verdicts_locator !== null) {
      message.verdictsLocator = object.verdicts_locator;
    }
    return message;
  },
  toAmino(message: MsgCompleteRequest): MsgCompleteRequestAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.locator = message.locator === "" ? undefined : message.locator;
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e);
    } else {
      obj.attestations = message.attestations;
    }
    obj.verdicts_locator = message.verdictsLocator === "" ? undefined : message.verdictsLocator;
    return obj;
  },
  fromAminoMsg(object: MsgCompleteRequestAminoMsg): MsgCompleteRequest {
    return MsgCompleteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCompleteRequest): MsgCompleteRequestAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgCompleteRequest",
      value: MsgCompleteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCompleteRequestProtoMsg): MsgCompleteRequest {
    return MsgCompleteRequest.decode(message.value);
  },
  toProto(message: MsgCompleteRequest): Uint8Array {
    return MsgCompleteRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteRequest): MsgCompleteRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgCompleteRequest",
      value: MsgCompleteRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteRequestResponse(): MsgCompleteRequestResponse {
  return {};
}
/**
 * MsgCompleteRequestResponse defines the MsgCompleteRequestResponse message.
 * @name MsgCompleteRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgCompleteRequestResponse
 */
export const MsgCompleteRequestResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgCompleteRequestResponse",
  encode(_: MsgCompleteRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCompleteRequestResponse>): MsgCompleteRequestResponse {
    const message = createBaseMsgCompleteRequestResponse();
    return message;
  },
  fromAmino(_: MsgCompleteRequestResponseAmino): MsgCompleteRequestResponse {
    const message = createBaseMsgCompleteRequestResponse();
    return message;
  },
  toAmino(_: MsgCompleteRequestResponse): MsgCompleteRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteRequestResponseAminoMsg): MsgCompleteRequestResponse {
    return MsgCompleteRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteRequestResponseProtoMsg): MsgCompleteRequestResponse {
    return MsgCompleteRequestResponse.decode(message.value);
  },
  toProto(message: MsgCompleteRequestResponse): Uint8Array {
    return MsgCompleteRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteRequestResponse): MsgCompleteRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgCompleteRequestResponse",
      value: MsgCompleteRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeclineRequest(): MsgDeclineRequest {
  return {
    operator: "",
    requestId: BigInt(0),
    reason: 0
  };
}
/**
 * MsgDeclineRequest says this operator cannot store the file.
 * @name MsgDeclineRequest
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDeclineRequest
 */
export const MsgDeclineRequest = {
  typeUrl: "/sparkdream.storage.v1.MsgDeclineRequest",
  aminoType: "sparkdream/x/storage/MsgDeclineRequest",
  encode(message: MsgDeclineRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    if (message.reason !== 0) {
      writer.uint32(24).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeclineRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeclineRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        case 3:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeclineRequest>): MsgDeclineRequest {
    const message = createBaseMsgDeclineRequest();
    message.operator = object.operator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: MsgDeclineRequestAmino): MsgDeclineRequest {
    const message = createBaseMsgDeclineRequest();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgDeclineRequest): MsgDeclineRequestAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgDeclineRequestAminoMsg): MsgDeclineRequest {
    return MsgDeclineRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeclineRequest): MsgDeclineRequestAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgDeclineRequest",
      value: MsgDeclineRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeclineRequestProtoMsg): MsgDeclineRequest {
    return MsgDeclineRequest.decode(message.value);
  },
  toProto(message: MsgDeclineRequest): Uint8Array {
    return MsgDeclineRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgDeclineRequest): MsgDeclineRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgDeclineRequest",
      value: MsgDeclineRequest.encode(message).finish()
    };
  }
};
function createBaseMsgDeclineRequestResponse(): MsgDeclineRequestResponse {
  return {};
}
/**
 * MsgDeclineRequestResponse defines the MsgDeclineRequestResponse message.
 * @name MsgDeclineRequestResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgDeclineRequestResponse
 */
export const MsgDeclineRequestResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgDeclineRequestResponse",
  encode(_: MsgDeclineRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeclineRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeclineRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDeclineRequestResponse>): MsgDeclineRequestResponse {
    const message = createBaseMsgDeclineRequestResponse();
    return message;
  },
  fromAmino(_: MsgDeclineRequestResponseAmino): MsgDeclineRequestResponse {
    const message = createBaseMsgDeclineRequestResponse();
    return message;
  },
  toAmino(_: MsgDeclineRequestResponse): MsgDeclineRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeclineRequestResponseAminoMsg): MsgDeclineRequestResponse {
    return MsgDeclineRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeclineRequestResponseProtoMsg): MsgDeclineRequestResponse {
    return MsgDeclineRequestResponse.decode(message.value);
  },
  toProto(message: MsgDeclineRequestResponse): Uint8Array {
    return MsgDeclineRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeclineRequestResponse): MsgDeclineRequestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgDeclineRequestResponse",
      value: MsgDeclineRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFlagRemoved(): MsgFlagRemoved {
  return {
    scanner: "",
    sha256: "",
    attestationHash: ""
  };
}
/**
 * MsgFlagRemoved flags a hash as removed content.
 * @name MsgFlagRemoved
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgFlagRemoved
 */
export const MsgFlagRemoved = {
  typeUrl: "/sparkdream.storage.v1.MsgFlagRemoved",
  aminoType: "sparkdream/x/storage/MsgFlagRemoved",
  encode(message: MsgFlagRemoved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scanner !== "") {
      writer.uint32(10).string(message.scanner);
    }
    if (message.sha256 !== "") {
      writer.uint32(18).string(message.sha256);
    }
    if (message.attestationHash !== "") {
      writer.uint32(26).string(message.attestationHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFlagRemoved {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFlagRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanner = reader.string();
          break;
        case 2:
          message.sha256 = reader.string();
          break;
        case 3:
          message.attestationHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFlagRemoved>): MsgFlagRemoved {
    const message = createBaseMsgFlagRemoved();
    message.scanner = object.scanner ?? "";
    message.sha256 = object.sha256 ?? "";
    message.attestationHash = object.attestationHash ?? "";
    return message;
  },
  fromAmino(object: MsgFlagRemovedAmino): MsgFlagRemoved {
    const message = createBaseMsgFlagRemoved();
    if (object.scanner !== undefined && object.scanner !== null) {
      message.scanner = object.scanner;
    }
    if (object.sha256 !== undefined && object.sha256 !== null) {
      message.sha256 = object.sha256;
    }
    if (object.attestation_hash !== undefined && object.attestation_hash !== null) {
      message.attestationHash = object.attestation_hash;
    }
    return message;
  },
  toAmino(message: MsgFlagRemoved): MsgFlagRemovedAmino {
    const obj: any = {};
    obj.scanner = message.scanner === "" ? undefined : message.scanner;
    obj.sha256 = message.sha256 === "" ? undefined : message.sha256;
    obj.attestation_hash = message.attestationHash === "" ? undefined : message.attestationHash;
    return obj;
  },
  fromAminoMsg(object: MsgFlagRemovedAminoMsg): MsgFlagRemoved {
    return MsgFlagRemoved.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFlagRemoved): MsgFlagRemovedAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgFlagRemoved",
      value: MsgFlagRemoved.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFlagRemovedProtoMsg): MsgFlagRemoved {
    return MsgFlagRemoved.decode(message.value);
  },
  toProto(message: MsgFlagRemoved): Uint8Array {
    return MsgFlagRemoved.encode(message).finish();
  },
  toProtoMsg(message: MsgFlagRemoved): MsgFlagRemovedProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgFlagRemoved",
      value: MsgFlagRemoved.encode(message).finish()
    };
  }
};
function createBaseMsgFlagRemovedResponse(): MsgFlagRemovedResponse {
  return {};
}
/**
 * MsgFlagRemovedResponse defines the MsgFlagRemovedResponse message.
 * @name MsgFlagRemovedResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgFlagRemovedResponse
 */
export const MsgFlagRemovedResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgFlagRemovedResponse",
  encode(_: MsgFlagRemovedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFlagRemovedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFlagRemovedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgFlagRemovedResponse>): MsgFlagRemovedResponse {
    const message = createBaseMsgFlagRemovedResponse();
    return message;
  },
  fromAmino(_: MsgFlagRemovedResponseAmino): MsgFlagRemovedResponse {
    const message = createBaseMsgFlagRemovedResponse();
    return message;
  },
  toAmino(_: MsgFlagRemovedResponse): MsgFlagRemovedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFlagRemovedResponseAminoMsg): MsgFlagRemovedResponse {
    return MsgFlagRemovedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFlagRemovedResponseProtoMsg): MsgFlagRemovedResponse {
    return MsgFlagRemovedResponse.decode(message.value);
  },
  toProto(message: MsgFlagRemovedResponse): Uint8Array {
    return MsgFlagRemovedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFlagRemovedResponse): MsgFlagRemovedResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgFlagRemovedResponse",
      value: MsgFlagRemovedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnflagRemoved(): MsgUnflagRemoved {
  return {
    authority: "",
    hashes: []
  };
}
/**
 * MsgUnflagRemoved lifts flags. A council lifts the flags of scanners it controls; governance lifts all.
 * @name MsgUnflagRemoved
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUnflagRemoved
 */
export const MsgUnflagRemoved = {
  typeUrl: "/sparkdream.storage.v1.MsgUnflagRemoved",
  aminoType: "sparkdream/x/storage/MsgUnflagRemoved",
  encode(message: MsgUnflagRemoved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.hashes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnflagRemoved {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnflagRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnflagRemoved>): MsgUnflagRemoved {
    const message = createBaseMsgUnflagRemoved();
    message.authority = object.authority ?? "";
    message.hashes = object.hashes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUnflagRemovedAmino): MsgUnflagRemoved {
    const message = createBaseMsgUnflagRemoved();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.hashes = object.hashes?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUnflagRemoved): MsgUnflagRemovedAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.hashes) {
      obj.hashes = message.hashes.map(e => e);
    } else {
      obj.hashes = message.hashes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnflagRemovedAminoMsg): MsgUnflagRemoved {
    return MsgUnflagRemoved.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnflagRemoved): MsgUnflagRemovedAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgUnflagRemoved",
      value: MsgUnflagRemoved.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnflagRemovedProtoMsg): MsgUnflagRemoved {
    return MsgUnflagRemoved.decode(message.value);
  },
  toProto(message: MsgUnflagRemoved): Uint8Array {
    return MsgUnflagRemoved.encode(message).finish();
  },
  toProtoMsg(message: MsgUnflagRemoved): MsgUnflagRemovedProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUnflagRemoved",
      value: MsgUnflagRemoved.encode(message).finish()
    };
  }
};
function createBaseMsgUnflagRemovedResponse(): MsgUnflagRemovedResponse {
  return {};
}
/**
 * MsgUnflagRemovedResponse defines the MsgUnflagRemovedResponse message.
 * @name MsgUnflagRemovedResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUnflagRemovedResponse
 */
export const MsgUnflagRemovedResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgUnflagRemovedResponse",
  encode(_: MsgUnflagRemovedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnflagRemovedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnflagRemovedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUnflagRemovedResponse>): MsgUnflagRemovedResponse {
    const message = createBaseMsgUnflagRemovedResponse();
    return message;
  },
  fromAmino(_: MsgUnflagRemovedResponseAmino): MsgUnflagRemovedResponse {
    const message = createBaseMsgUnflagRemovedResponse();
    return message;
  },
  toAmino(_: MsgUnflagRemovedResponse): MsgUnflagRemovedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnflagRemovedResponseAminoMsg): MsgUnflagRemovedResponse {
    return MsgUnflagRemovedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnflagRemovedResponseProtoMsg): MsgUnflagRemovedResponse {
    return MsgUnflagRemovedResponse.decode(message.value);
  },
  toProto(message: MsgUnflagRemovedResponse): Uint8Array {
    return MsgUnflagRemovedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnflagRemovedResponse): MsgUnflagRemovedResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUnflagRemovedResponse",
      value: MsgUnflagRemovedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoidCompletion(): MsgVoidCompletion {
  return {
    authority: "",
    requestId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgVoidCompletion voids a completion whose copy is missing or wrong.
 * @name MsgVoidCompletion
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgVoidCompletion
 */
export const MsgVoidCompletion = {
  typeUrl: "/sparkdream.storage.v1.MsgVoidCompletion",
  aminoType: "sparkdream/x/storage/MsgVoidCompletion",
  encode(message: MsgVoidCompletion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoidCompletion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoidCompletion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVoidCompletion>): MsgVoidCompletion {
    const message = createBaseMsgVoidCompletion();
    message.authority = object.authority ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgVoidCompletionAmino): MsgVoidCompletion {
    const message = createBaseMsgVoidCompletion();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgVoidCompletion): MsgVoidCompletionAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgVoidCompletionAminoMsg): MsgVoidCompletion {
    return MsgVoidCompletion.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoidCompletion): MsgVoidCompletionAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgVoidCompletion",
      value: MsgVoidCompletion.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoidCompletionProtoMsg): MsgVoidCompletion {
    return MsgVoidCompletion.decode(message.value);
  },
  toProto(message: MsgVoidCompletion): Uint8Array {
    return MsgVoidCompletion.encode(message).finish();
  },
  toProtoMsg(message: MsgVoidCompletion): MsgVoidCompletionProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgVoidCompletion",
      value: MsgVoidCompletion.encode(message).finish()
    };
  }
};
function createBaseMsgVoidCompletionResponse(): MsgVoidCompletionResponse {
  return {};
}
/**
 * MsgVoidCompletionResponse defines the MsgVoidCompletionResponse message.
 * @name MsgVoidCompletionResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgVoidCompletionResponse
 */
export const MsgVoidCompletionResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgVoidCompletionResponse",
  encode(_: MsgVoidCompletionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoidCompletionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoidCompletionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgVoidCompletionResponse>): MsgVoidCompletionResponse {
    const message = createBaseMsgVoidCompletionResponse();
    return message;
  },
  fromAmino(_: MsgVoidCompletionResponseAmino): MsgVoidCompletionResponse {
    const message = createBaseMsgVoidCompletionResponse();
    return message;
  },
  toAmino(_: MsgVoidCompletionResponse): MsgVoidCompletionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoidCompletionResponseAminoMsg): MsgVoidCompletionResponse {
    return MsgVoidCompletionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoidCompletionResponseProtoMsg): MsgVoidCompletionResponse {
    return MsgVoidCompletionResponse.decode(message.value);
  },
  toProto(message: MsgVoidCompletionResponse): Uint8Array {
    return MsgVoidCompletionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoidCompletionResponse): MsgVoidCompletionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgVoidCompletionResponse",
      value: MsgVoidCompletionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApproveOperator(): MsgApproveOperator {
  return {
    authority: "",
    backend: "",
    operator: ""
  };
}
/**
 * MsgApproveOperator lets a storage operator act for a backend. Signed by the operator's controller or governance.
 * @name MsgApproveOperator
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveOperator
 */
export const MsgApproveOperator = {
  typeUrl: "/sparkdream.storage.v1.MsgApproveOperator",
  aminoType: "sparkdream/x/storage/MsgApproveOperator",
  encode(message: MsgApproveOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.backend !== "") {
      writer.uint32(18).string(message.backend);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.backend = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApproveOperator>): MsgApproveOperator {
    const message = createBaseMsgApproveOperator();
    message.authority = object.authority ?? "";
    message.backend = object.backend ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgApproveOperatorAmino): MsgApproveOperator {
    const message = createBaseMsgApproveOperator();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgApproveOperator): MsgApproveOperatorAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgApproveOperatorAminoMsg): MsgApproveOperator {
    return MsgApproveOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgApproveOperator): MsgApproveOperatorAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgApproveOperator",
      value: MsgApproveOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgApproveOperatorProtoMsg): MsgApproveOperator {
    return MsgApproveOperator.decode(message.value);
  },
  toProto(message: MsgApproveOperator): Uint8Array {
    return MsgApproveOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveOperator): MsgApproveOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgApproveOperator",
      value: MsgApproveOperator.encode(message).finish()
    };
  }
};
function createBaseMsgApproveOperatorResponse(): MsgApproveOperatorResponse {
  return {};
}
/**
 * MsgApproveOperatorResponse defines the MsgApproveOperatorResponse message.
 * @name MsgApproveOperatorResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveOperatorResponse
 */
export const MsgApproveOperatorResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgApproveOperatorResponse",
  encode(_: MsgApproveOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgApproveOperatorResponse>): MsgApproveOperatorResponse {
    const message = createBaseMsgApproveOperatorResponse();
    return message;
  },
  fromAmino(_: MsgApproveOperatorResponseAmino): MsgApproveOperatorResponse {
    const message = createBaseMsgApproveOperatorResponse();
    return message;
  },
  toAmino(_: MsgApproveOperatorResponse): MsgApproveOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgApproveOperatorResponseAminoMsg): MsgApproveOperatorResponse {
    return MsgApproveOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveOperatorResponseProtoMsg): MsgApproveOperatorResponse {
    return MsgApproveOperatorResponse.decode(message.value);
  },
  toProto(message: MsgApproveOperatorResponse): Uint8Array {
    return MsgApproveOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveOperatorResponse): MsgApproveOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgApproveOperatorResponse",
      value: MsgApproveOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperator(): MsgRemoveOperator {
  return {
    authority: "",
    backend: "",
    operator: ""
  };
}
/**
 * MsgRemoveOperator removes a storage operator's approval.
 * @name MsgRemoveOperator
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveOperator
 */
export const MsgRemoveOperator = {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveOperator",
  aminoType: "sparkdream/x/storage/MsgRemoveOperator",
  encode(message: MsgRemoveOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.backend !== "") {
      writer.uint32(18).string(message.backend);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.backend = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveOperator>): MsgRemoveOperator {
    const message = createBaseMsgRemoveOperator();
    message.authority = object.authority ?? "";
    message.backend = object.backend ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveOperatorAmino): MsgRemoveOperator {
    const message = createBaseMsgRemoveOperator();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgRemoveOperator): MsgRemoveOperatorAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorAminoMsg): MsgRemoveOperator {
    return MsgRemoveOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveOperator): MsgRemoveOperatorAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgRemoveOperator",
      value: MsgRemoveOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveOperatorProtoMsg): MsgRemoveOperator {
    return MsgRemoveOperator.decode(message.value);
  },
  toProto(message: MsgRemoveOperator): Uint8Array {
    return MsgRemoveOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperator): MsgRemoveOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgRemoveOperator",
      value: MsgRemoveOperator.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperatorResponse(): MsgRemoveOperatorResponse {
  return {};
}
/**
 * MsgRemoveOperatorResponse defines the MsgRemoveOperatorResponse message.
 * @name MsgRemoveOperatorResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveOperatorResponse
 */
export const MsgRemoveOperatorResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveOperatorResponse",
  encode(_: MsgRemoveOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRemoveOperatorResponse>): MsgRemoveOperatorResponse {
    const message = createBaseMsgRemoveOperatorResponse();
    return message;
  },
  fromAmino(_: MsgRemoveOperatorResponseAmino): MsgRemoveOperatorResponse {
    const message = createBaseMsgRemoveOperatorResponse();
    return message;
  },
  toAmino(_: MsgRemoveOperatorResponse): MsgRemoveOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorResponseAminoMsg): MsgRemoveOperatorResponse {
    return MsgRemoveOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOperatorResponseProtoMsg): MsgRemoveOperatorResponse {
    return MsgRemoveOperatorResponse.decode(message.value);
  },
  toProto(message: MsgRemoveOperatorResponse): Uint8Array {
    return MsgRemoveOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperatorResponse): MsgRemoveOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgRemoveOperatorResponse",
      value: MsgRemoveOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApproveScanner(): MsgApproveScanner {
  return {
    authority: "",
    scanner: ""
  };
}
/**
 * MsgApproveScanner makes a content scanner's flags and verdicts count. Signed by the scanner's controller or governance.
 * @name MsgApproveScanner
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveScanner
 */
export const MsgApproveScanner = {
  typeUrl: "/sparkdream.storage.v1.MsgApproveScanner",
  aminoType: "sparkdream/x/storage/MsgApproveScanner",
  encode(message: MsgApproveScanner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.scanner !== "") {
      writer.uint32(18).string(message.scanner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveScanner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveScanner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.scanner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApproveScanner>): MsgApproveScanner {
    const message = createBaseMsgApproveScanner();
    message.authority = object.authority ?? "";
    message.scanner = object.scanner ?? "";
    return message;
  },
  fromAmino(object: MsgApproveScannerAmino): MsgApproveScanner {
    const message = createBaseMsgApproveScanner();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.scanner !== undefined && object.scanner !== null) {
      message.scanner = object.scanner;
    }
    return message;
  },
  toAmino(message: MsgApproveScanner): MsgApproveScannerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.scanner = message.scanner === "" ? undefined : message.scanner;
    return obj;
  },
  fromAminoMsg(object: MsgApproveScannerAminoMsg): MsgApproveScanner {
    return MsgApproveScanner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgApproveScanner): MsgApproveScannerAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgApproveScanner",
      value: MsgApproveScanner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgApproveScannerProtoMsg): MsgApproveScanner {
    return MsgApproveScanner.decode(message.value);
  },
  toProto(message: MsgApproveScanner): Uint8Array {
    return MsgApproveScanner.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveScanner): MsgApproveScannerProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgApproveScanner",
      value: MsgApproveScanner.encode(message).finish()
    };
  }
};
function createBaseMsgApproveScannerResponse(): MsgApproveScannerResponse {
  return {};
}
/**
 * MsgApproveScannerResponse defines the MsgApproveScannerResponse message.
 * @name MsgApproveScannerResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgApproveScannerResponse
 */
export const MsgApproveScannerResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgApproveScannerResponse",
  encode(_: MsgApproveScannerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveScannerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveScannerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgApproveScannerResponse>): MsgApproveScannerResponse {
    const message = createBaseMsgApproveScannerResponse();
    return message;
  },
  fromAmino(_: MsgApproveScannerResponseAmino): MsgApproveScannerResponse {
    const message = createBaseMsgApproveScannerResponse();
    return message;
  },
  toAmino(_: MsgApproveScannerResponse): MsgApproveScannerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgApproveScannerResponseAminoMsg): MsgApproveScannerResponse {
    return MsgApproveScannerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveScannerResponseProtoMsg): MsgApproveScannerResponse {
    return MsgApproveScannerResponse.decode(message.value);
  },
  toProto(message: MsgApproveScannerResponse): Uint8Array {
    return MsgApproveScannerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveScannerResponse): MsgApproveScannerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgApproveScannerResponse",
      value: MsgApproveScannerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveScanner(): MsgRemoveScanner {
  return {
    authority: "",
    scanner: ""
  };
}
/**
 * MsgRemoveScanner removes a content scanner's approval. Its flags stay.
 * @name MsgRemoveScanner
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveScanner
 */
export const MsgRemoveScanner = {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveScanner",
  aminoType: "sparkdream/x/storage/MsgRemoveScanner",
  encode(message: MsgRemoveScanner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.scanner !== "") {
      writer.uint32(18).string(message.scanner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveScanner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveScanner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.scanner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveScanner>): MsgRemoveScanner {
    const message = createBaseMsgRemoveScanner();
    message.authority = object.authority ?? "";
    message.scanner = object.scanner ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveScannerAmino): MsgRemoveScanner {
    const message = createBaseMsgRemoveScanner();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.scanner !== undefined && object.scanner !== null) {
      message.scanner = object.scanner;
    }
    return message;
  },
  toAmino(message: MsgRemoveScanner): MsgRemoveScannerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.scanner = message.scanner === "" ? undefined : message.scanner;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveScannerAminoMsg): MsgRemoveScanner {
    return MsgRemoveScanner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveScanner): MsgRemoveScannerAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgRemoveScanner",
      value: MsgRemoveScanner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveScannerProtoMsg): MsgRemoveScanner {
    return MsgRemoveScanner.decode(message.value);
  },
  toProto(message: MsgRemoveScanner): Uint8Array {
    return MsgRemoveScanner.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveScanner): MsgRemoveScannerProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgRemoveScanner",
      value: MsgRemoveScanner.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveScannerResponse(): MsgRemoveScannerResponse {
  return {};
}
/**
 * MsgRemoveScannerResponse defines the MsgRemoveScannerResponse message.
 * @name MsgRemoveScannerResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgRemoveScannerResponse
 */
export const MsgRemoveScannerResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgRemoveScannerResponse",
  encode(_: MsgRemoveScannerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveScannerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveScannerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRemoveScannerResponse>): MsgRemoveScannerResponse {
    const message = createBaseMsgRemoveScannerResponse();
    return message;
  },
  fromAmino(_: MsgRemoveScannerResponseAmino): MsgRemoveScannerResponse {
    const message = createBaseMsgRemoveScannerResponse();
    return message;
  },
  toAmino(_: MsgRemoveScannerResponse): MsgRemoveScannerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveScannerResponseAminoMsg): MsgRemoveScannerResponse {
    return MsgRemoveScannerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveScannerResponseProtoMsg): MsgRemoveScannerResponse {
    return MsgRemoveScannerResponse.decode(message.value);
  },
  toProto(message: MsgRemoveScannerResponse): Uint8Array {
    return MsgRemoveScannerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveScannerResponse): MsgRemoveScannerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgRemoveScannerResponse",
      value: MsgRemoveScannerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBackend(): MsgUpdateBackend {
  return {
    authority: "",
    backend: Backend.fromPartial({})
  };
}
/**
 * MsgUpdateBackend creates a backend when the name is new, and otherwise replaces its mutable fields. Governance only.
 * @name MsgUpdateBackend
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateBackend
 */
export const MsgUpdateBackend = {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateBackend",
  aminoType: "sparkdream/x/storage/MsgUpdateBackend",
  encode(message: MsgUpdateBackend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBackend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateBackend>): MsgUpdateBackend {
    const message = createBaseMsgUpdateBackend();
    message.authority = object.authority ?? "";
    message.backend = object.backend !== undefined && object.backend !== null ? Backend.fromPartial(object.backend) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateBackendAmino): MsgUpdateBackend {
    const message = createBaseMsgUpdateBackend();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = Backend.fromAmino(object.backend);
    }
    return message;
  },
  toAmino(message: MsgUpdateBackend): MsgUpdateBackendAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.backend = message.backend ? Backend.toAmino(message.backend) : Backend.toAmino(Backend.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBackendAminoMsg): MsgUpdateBackend {
    return MsgUpdateBackend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateBackend): MsgUpdateBackendAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgUpdateBackend",
      value: MsgUpdateBackend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateBackendProtoMsg): MsgUpdateBackend {
    return MsgUpdateBackend.decode(message.value);
  },
  toProto(message: MsgUpdateBackend): Uint8Array {
    return MsgUpdateBackend.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBackend): MsgUpdateBackendProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUpdateBackend",
      value: MsgUpdateBackend.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBackendResponse(): MsgUpdateBackendResponse {
  return {};
}
/**
 * MsgUpdateBackendResponse defines the MsgUpdateBackendResponse message.
 * @name MsgUpdateBackendResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateBackendResponse
 */
export const MsgUpdateBackendResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateBackendResponse",
  encode(_: MsgUpdateBackendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBackendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBackendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateBackendResponse>): MsgUpdateBackendResponse {
    const message = createBaseMsgUpdateBackendResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBackendResponseAmino): MsgUpdateBackendResponse {
    const message = createBaseMsgUpdateBackendResponse();
    return message;
  },
  toAmino(_: MsgUpdateBackendResponse): MsgUpdateBackendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBackendResponseAminoMsg): MsgUpdateBackendResponse {
    return MsgUpdateBackendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBackendResponseProtoMsg): MsgUpdateBackendResponse {
    return MsgUpdateBackendResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBackendResponse): Uint8Array {
    return MsgUpdateBackendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBackendResponse): MsgUpdateBackendResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUpdateBackendResponse",
      value: MsgUpdateBackendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    backend: "",
    pricePerByte: "",
    minFee: ""
  };
}
/**
 * MsgUpdateOperationalParams sets one backend's prices inside its governance bounds. Commons Operations Committee or governance.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/storage/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.backend !== "") {
      writer.uint32(18).string(message.backend);
    }
    if (message.pricePerByte !== "") {
      writer.uint32(26).string(message.pricePerByte);
    }
    if (message.minFee !== "") {
      writer.uint32(34).string(message.minFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.backend = reader.string();
          break;
        case 3:
          message.pricePerByte = reader.string();
          break;
        case 4:
          message.minFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.backend = object.backend ?? "";
    message.pricePerByte = object.pricePerByte ?? "";
    message.minFee = object.minFee ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.price_per_byte !== undefined && object.price_per_byte !== null) {
      message.pricePerByte = object.price_per_byte;
    }
    if (object.min_fee !== undefined && object.min_fee !== null) {
      message.minFee = object.min_fee;
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.price_per_byte = message.pricePerByte ?? "";
    obj.min_fee = message.minFee ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/storage/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * MsgUpdateOperationalParamsResponse defines the MsgUpdateOperationalParamsResponse message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};