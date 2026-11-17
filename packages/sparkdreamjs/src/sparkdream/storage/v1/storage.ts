//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BackendKind says what a backend offers. Only permanent copies exist today;
 * the field is kept so paid-by-the-period hosting can be added later.
 */
export enum BackendKind {
  BACKEND_KIND_UNSPECIFIED = 0,
  BACKEND_KIND_PERMANENT = 1,
  UNRECOGNIZED = -1,
}
export const BackendKindAmino = BackendKind;
export function backendKindFromJSON(object: any): BackendKind {
  switch (object) {
    case 0:
    case "BACKEND_KIND_UNSPECIFIED":
      return BackendKind.BACKEND_KIND_UNSPECIFIED;
    case 1:
    case "BACKEND_KIND_PERMANENT":
      return BackendKind.BACKEND_KIND_PERMANENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BackendKind.UNRECOGNIZED;
  }
}
export function backendKindToJSON(object: BackendKind): string {
  switch (object) {
    case BackendKind.BACKEND_KIND_UNSPECIFIED:
      return "BACKEND_KIND_UNSPECIFIED";
    case BackendKind.BACKEND_KIND_PERMANENT:
      return "BACKEND_KIND_PERMANENT";
    case BackendKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LocatorFormat is the shape of a copy's locator, checked by code. */
export enum LocatorFormat {
  LOCATOR_FORMAT_UNSPECIFIED = 0,
  /** LOCATOR_FORMAT_ARWEAVE_TX - 43 base64url characters: an Arweave transaction or bundled data item id. */
  LOCATOR_FORMAT_ARWEAVE_TX = 1,
  UNRECOGNIZED = -1,
}
export const LocatorFormatAmino = LocatorFormat;
export function locatorFormatFromJSON(object: any): LocatorFormat {
  switch (object) {
    case 0:
    case "LOCATOR_FORMAT_UNSPECIFIED":
      return LocatorFormat.LOCATOR_FORMAT_UNSPECIFIED;
    case 1:
    case "LOCATOR_FORMAT_ARWEAVE_TX":
      return LocatorFormat.LOCATOR_FORMAT_ARWEAVE_TX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LocatorFormat.UNRECOGNIZED;
  }
}
export function locatorFormatToJSON(object: LocatorFormat): string {
  switch (object) {
    case LocatorFormat.LOCATOR_FORMAT_UNSPECIFIED:
      return "LOCATOR_FORMAT_UNSPECIFIED";
    case LocatorFormat.LOCATOR_FORMAT_ARWEAVE_TX:
      return "LOCATOR_FORMAT_ARWEAVE_TX";
    case LocatorFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** RequestStatus is the lifecycle status of a request (spec section 3.2). */
export enum RequestStatus {
  REQUEST_STATUS_UNSPECIFIED = 0,
  REQUEST_STATUS_PENDING = 1,
  REQUEST_STATUS_CLAIMED = 2,
  REQUEST_STATUS_COMPLETED = 3,
  REQUEST_STATUS_SETTLED = 4,
  REQUEST_STATUS_REJECTED = 5,
  REQUEST_STATUS_EXPIRED = 6,
  REQUEST_STATUS_CANCELLED = 7,
  UNRECOGNIZED = -1,
}
export const RequestStatusAmino = RequestStatus;
export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "REQUEST_STATUS_UNSPECIFIED":
      return RequestStatus.REQUEST_STATUS_UNSPECIFIED;
    case 1:
    case "REQUEST_STATUS_PENDING":
      return RequestStatus.REQUEST_STATUS_PENDING;
    case 2:
    case "REQUEST_STATUS_CLAIMED":
      return RequestStatus.REQUEST_STATUS_CLAIMED;
    case 3:
    case "REQUEST_STATUS_COMPLETED":
      return RequestStatus.REQUEST_STATUS_COMPLETED;
    case 4:
    case "REQUEST_STATUS_SETTLED":
      return RequestStatus.REQUEST_STATUS_SETTLED;
    case 5:
    case "REQUEST_STATUS_REJECTED":
      return RequestStatus.REQUEST_STATUS_REJECTED;
    case 6:
    case "REQUEST_STATUS_EXPIRED":
      return RequestStatus.REQUEST_STATUS_EXPIRED;
    case 7:
    case "REQUEST_STATUS_CANCELLED":
      return RequestStatus.REQUEST_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}
export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.REQUEST_STATUS_UNSPECIFIED:
      return "REQUEST_STATUS_UNSPECIFIED";
    case RequestStatus.REQUEST_STATUS_PENDING:
      return "REQUEST_STATUS_PENDING";
    case RequestStatus.REQUEST_STATUS_CLAIMED:
      return "REQUEST_STATUS_CLAIMED";
    case RequestStatus.REQUEST_STATUS_COMPLETED:
      return "REQUEST_STATUS_COMPLETED";
    case RequestStatus.REQUEST_STATUS_SETTLED:
      return "REQUEST_STATUS_SETTLED";
    case RequestStatus.REQUEST_STATUS_REJECTED:
      return "REQUEST_STATUS_REJECTED";
    case RequestStatus.REQUEST_STATUS_EXPIRED:
      return "REQUEST_STATUS_EXPIRED";
    case RequestStatus.REQUEST_STATUS_CANCELLED:
      return "REQUEST_STATUS_CANCELLED";
    case RequestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ClosedReason says why a request reached a terminal status. */
export enum ClosedReason {
  CLOSED_REASON_UNSPECIFIED = 0,
  CLOSED_REASON_FLAGGED = 1,
  CLOSED_REASON_DECLINED = 2,
  CLOSED_REASON_VOIDED = 3,
  CLOSED_REASON_EXPIRED = 4,
  CLOSED_REASON_CANCELLED = 5,
  UNRECOGNIZED = -1,
}
export const ClosedReasonAmino = ClosedReason;
export function closedReasonFromJSON(object: any): ClosedReason {
  switch (object) {
    case 0:
    case "CLOSED_REASON_UNSPECIFIED":
      return ClosedReason.CLOSED_REASON_UNSPECIFIED;
    case 1:
    case "CLOSED_REASON_FLAGGED":
      return ClosedReason.CLOSED_REASON_FLAGGED;
    case 2:
    case "CLOSED_REASON_DECLINED":
      return ClosedReason.CLOSED_REASON_DECLINED;
    case 3:
    case "CLOSED_REASON_VOIDED":
      return ClosedReason.CLOSED_REASON_VOIDED;
    case 4:
    case "CLOSED_REASON_EXPIRED":
      return ClosedReason.CLOSED_REASON_EXPIRED;
    case 5:
    case "CLOSED_REASON_CANCELLED":
      return ClosedReason.CLOSED_REASON_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClosedReason.UNRECOGNIZED;
  }
}
export function closedReasonToJSON(object: ClosedReason): string {
  switch (object) {
    case ClosedReason.CLOSED_REASON_UNSPECIFIED:
      return "CLOSED_REASON_UNSPECIFIED";
    case ClosedReason.CLOSED_REASON_FLAGGED:
      return "CLOSED_REASON_FLAGGED";
    case ClosedReason.CLOSED_REASON_DECLINED:
      return "CLOSED_REASON_DECLINED";
    case ClosedReason.CLOSED_REASON_VOIDED:
      return "CLOSED_REASON_VOIDED";
    case ClosedReason.CLOSED_REASON_EXPIRED:
      return "CLOSED_REASON_EXPIRED";
    case ClosedReason.CLOSED_REASON_CANCELLED:
      return "CLOSED_REASON_CANCELLED";
    case ClosedReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DeclineReason is an operator's reason for not storing a file. */
export enum DeclineReason {
  DECLINE_REASON_UNSPECIFIED = 0,
  /** DECLINE_REASON_UNREACHABLE - No source served bytes with the declared hash. */
  DECLINE_REASON_UNREACHABLE = 1,
  /**
   * DECLINE_REASON_MISMATCH - Bytes with the declared hash are not the declared size or type, or fail
   * the file profile.
   */
  DECLINE_REASON_MISMATCH = 2,
  UNRECOGNIZED = -1,
}
export const DeclineReasonAmino = DeclineReason;
export function declineReasonFromJSON(object: any): DeclineReason {
  switch (object) {
    case 0:
    case "DECLINE_REASON_UNSPECIFIED":
      return DeclineReason.DECLINE_REASON_UNSPECIFIED;
    case 1:
    case "DECLINE_REASON_UNREACHABLE":
      return DeclineReason.DECLINE_REASON_UNREACHABLE;
    case 2:
    case "DECLINE_REASON_MISMATCH":
      return DeclineReason.DECLINE_REASON_MISMATCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeclineReason.UNRECOGNIZED;
  }
}
export function declineReasonToJSON(object: DeclineReason): string {
  switch (object) {
    case DeclineReason.DECLINE_REASON_UNSPECIFIED:
      return "DECLINE_REASON_UNSPECIFIED";
    case DeclineReason.DECLINE_REASON_UNREACHABLE:
      return "DECLINE_REASON_UNREACHABLE";
    case DeclineReason.DECLINE_REASON_MISMATCH:
      return "DECLINE_REASON_MISMATCH";
    case DeclineReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CounterKind names a per-address, per-window counter. */
export enum CounterKind {
  COUNTER_KIND_UNSPECIFIED = 0,
  COUNTER_KIND_LAPSE = 1,
  COUNTER_KIND_DECLINE_MISMATCH = 2,
  COUNTER_KIND_DECLINE_UNREACHABLE = 3,
  COUNTER_KIND_COMPLETION = 4,
  COUNTER_KIND_FLAG = 5,
  UNRECOGNIZED = -1,
}
export const CounterKindAmino = CounterKind;
export function counterKindFromJSON(object: any): CounterKind {
  switch (object) {
    case 0:
    case "COUNTER_KIND_UNSPECIFIED":
      return CounterKind.COUNTER_KIND_UNSPECIFIED;
    case 1:
    case "COUNTER_KIND_LAPSE":
      return CounterKind.COUNTER_KIND_LAPSE;
    case 2:
    case "COUNTER_KIND_DECLINE_MISMATCH":
      return CounterKind.COUNTER_KIND_DECLINE_MISMATCH;
    case 3:
    case "COUNTER_KIND_DECLINE_UNREACHABLE":
      return CounterKind.COUNTER_KIND_DECLINE_UNREACHABLE;
    case 4:
    case "COUNTER_KIND_COMPLETION":
      return CounterKind.COUNTER_KIND_COMPLETION;
    case 5:
    case "COUNTER_KIND_FLAG":
      return CounterKind.COUNTER_KIND_FLAG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CounterKind.UNRECOGNIZED;
  }
}
export function counterKindToJSON(object: CounterKind): string {
  switch (object) {
    case CounterKind.COUNTER_KIND_UNSPECIFIED:
      return "COUNTER_KIND_UNSPECIFIED";
    case CounterKind.COUNTER_KIND_LAPSE:
      return "COUNTER_KIND_LAPSE";
    case CounterKind.COUNTER_KIND_DECLINE_MISMATCH:
      return "COUNTER_KIND_DECLINE_MISMATCH";
    case CounterKind.COUNTER_KIND_DECLINE_UNREACHABLE:
      return "COUNTER_KIND_DECLINE_UNREACHABLE";
    case CounterKind.COUNTER_KIND_COMPLETION:
      return "COUNTER_KIND_COMPLETION";
    case CounterKind.COUNTER_KIND_FLAG:
      return "COUNTER_KIND_FLAG";
    case CounterKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BackendType is one content type a backend accepts.
 * @name BackendType
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.BackendType
 */
export interface BackendType {
  /**
   * content_type is a MIME type, for example "image/png".
   */
  contentType: string;
  /**
   * scanned: copied only with a clean verdict from approved scanners.
   */
  scanned: boolean;
  /**
   * max_size is the largest file of this type, in bytes.
   */
  maxSize: bigint;
}
export interface BackendTypeProtoMsg {
  typeUrl: "/sparkdream.storage.v1.BackendType";
  value: Uint8Array;
}
/**
 * BackendType is one content type a backend accepts.
 * @name BackendTypeAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.BackendType
 */
export interface BackendTypeAmino {
  /**
   * content_type is a MIME type, for example "image/png".
   */
  content_type?: string;
  /**
   * scanned: copied only with a clean verdict from approved scanners.
   */
  scanned?: boolean;
  /**
   * max_size is the largest file of this type, in bytes.
   */
  max_size?: string;
}
export interface BackendTypeAminoMsg {
  type: "/sparkdream.storage.v1.BackendType";
  value: BackendTypeAmino;
}
/**
 * Backend is one storage network (spec section 3.1).
 * @name Backend
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Backend
 */
export interface Backend {
  /**
   * name matches [a-z0-9-]{1,32}. Immutable.
   */
  name: string;
  /**
   * service_type is the x/service type whose operators serve it. Immutable.
   */
  serviceType: string;
  /**
   * kind is immutable.
   */
  kind: BackendKind;
  /**
   * locator_format is immutable.
   */
  locatorFormat: LocatorFormat;
  /**
   * enabled false refuses new requests; open ones run to their end.
   */
  enabled: boolean;
  /**
   * price_per_byte is in bond-denom micro-units.
   */
  pricePerByte: string;
  /**
   * min_fee is the floor for the copy fee.
   */
  minFee: string;
  /**
   * min_price_per_byte and max_price_per_byte bound price_per_byte.
   */
  minPricePerByte: string;
  maxPricePerByte: string;
  /**
   * min_min_fee and max_min_fee bound min_fee.
   */
  minMinFee: string;
  maxMinFee: string;
  /**
   * declines_to_close is how many different members must decline before a
   * request closes.
   */
  declinesToClose: number;
  /**
   * types lists the accepted content types.
   */
  types: BackendType[];
}
export interface BackendProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Backend";
  value: Uint8Array;
}
/**
 * Backend is one storage network (spec section 3.1).
 * @name BackendAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Backend
 */
export interface BackendAmino {
  /**
   * name matches [a-z0-9-]{1,32}. Immutable.
   */
  name?: string;
  /**
   * service_type is the x/service type whose operators serve it. Immutable.
   */
  service_type?: string;
  /**
   * kind is immutable.
   */
  kind?: BackendKind;
  /**
   * locator_format is immutable.
   */
  locator_format?: LocatorFormat;
  /**
   * enabled false refuses new requests; open ones run to their end.
   */
  enabled?: boolean;
  /**
   * price_per_byte is in bond-denom micro-units.
   */
  price_per_byte: string;
  /**
   * min_fee is the floor for the copy fee.
   */
  min_fee: string;
  /**
   * min_price_per_byte and max_price_per_byte bound price_per_byte.
   */
  min_price_per_byte: string;
  max_price_per_byte: string;
  /**
   * min_min_fee and max_min_fee bound min_fee.
   */
  min_min_fee: string;
  max_min_fee: string;
  /**
   * declines_to_close is how many different members must decline before a
   * request closes.
   */
  declines_to_close?: number;
  /**
   * types lists the accepted content types.
   */
  types: BackendTypeAmino[];
}
export interface BackendAminoMsg {
  type: "/sparkdream.storage.v1.Backend";
  value: BackendAmino;
}
/**
 * Approval is a controller's consent for an operator or scanner to act here.
 * @name Approval
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Approval
 */
export interface Approval {
  /**
   * controller is the council recorded when the approval was given.
   */
  controller: string;
  /**
   * height is the block the approval was given at.
   */
  height: bigint;
}
export interface ApprovalProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Approval";
  value: Uint8Array;
}
/**
 * Approval is a controller's consent for an operator or scanner to act here.
 * @name ApprovalAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Approval
 */
export interface ApprovalAmino {
  /**
   * controller is the council recorded when the approval was given.
   */
  controller?: string;
  /**
   * height is the block the approval was given at.
   */
  height?: string;
}
export interface ApprovalAminoMsg {
  type: "/sparkdream.storage.v1.Approval";
  value: ApprovalAmino;
}
/**
 * ApprovedOperator is an operator approval with its key (genesis, queries).
 * @name ApprovedOperator
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.ApprovedOperator
 */
export interface ApprovedOperator {
  backend: string;
  operator: string;
  controller: string;
  height: bigint;
  /**
   * stale is set in query responses when x/service no longer names the
   * recorded controller, so the approval does not count.
   */
  stale: boolean;
}
export interface ApprovedOperatorProtoMsg {
  typeUrl: "/sparkdream.storage.v1.ApprovedOperator";
  value: Uint8Array;
}
/**
 * ApprovedOperator is an operator approval with its key (genesis, queries).
 * @name ApprovedOperatorAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.ApprovedOperator
 */
export interface ApprovedOperatorAmino {
  backend?: string;
  operator?: string;
  controller?: string;
  height?: string;
  /**
   * stale is set in query responses when x/service no longer names the
   * recorded controller, so the approval does not count.
   */
  stale?: boolean;
}
export interface ApprovedOperatorAminoMsg {
  type: "/sparkdream.storage.v1.ApprovedOperator";
  value: ApprovedOperatorAmino;
}
/**
 * ApprovedScanner is a scanner approval with its key (genesis, queries).
 * @name ApprovedScanner
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.ApprovedScanner
 */
export interface ApprovedScanner {
  scanner: string;
  controller: string;
  height: bigint;
  /**
   * stale: see ApprovedOperator.
   */
  stale: boolean;
}
export interface ApprovedScannerProtoMsg {
  typeUrl: "/sparkdream.storage.v1.ApprovedScanner";
  value: Uint8Array;
}
/**
 * ApprovedScanner is a scanner approval with its key (genesis, queries).
 * @name ApprovedScannerAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.ApprovedScanner
 */
export interface ApprovedScannerAmino {
  scanner?: string;
  controller?: string;
  height?: string;
  /**
   * stale: see ApprovedOperator.
   */
  stale?: boolean;
}
export interface ApprovedScannerAminoMsg {
  type: "/sparkdream.storage.v1.ApprovedScanner";
  value: ApprovedScannerAmino;
}
/**
 * Source is one address a file can be fetched from.
 * @name Source
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Source
 */
export interface Source {
  url: string;
  addedBy: string;
  addedAt: bigint;
}
export interface SourceProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Source";
  value: Uint8Array;
}
/**
 * Source is one address a file can be fetched from.
 * @name SourceAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Source
 */
export interface SourceAmino {
  url?: string;
  added_by?: string;
  added_at?: string;
}
export interface SourceAminoMsg {
  type: "/sparkdream.storage.v1.Source";
  value: SourceAmino;
}
/**
 * Decline is one operator's decline of a request.
 * @name Decline
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Decline
 */
export interface Decline {
  operator: string;
  /**
   * member is the operator's canonical member when the decline was sent.
   */
  member: string;
  reason: DeclineReason;
}
export interface DeclineProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Decline";
  value: Uint8Array;
}
/**
 * Decline is one operator's decline of a request.
 * @name DeclineAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Decline
 */
export interface DeclineAmino {
  operator?: string;
  /**
   * member is the operator's canonical member when the decline was sent.
   */
  member?: string;
  reason?: DeclineReason;
}
export interface DeclineAminoMsg {
  type: "/sparkdream.storage.v1.Decline";
  value: DeclineAmino;
}
/**
 * Request is a request for a permanent copy (spec section 3.2).
 * @name Request
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Request
 */
export interface Request {
  id: bigint;
  requester: string;
  /**
   * requester_trust_level is the x/rep trust level (0-4) at creation.
   */
  requesterTrustLevel: number;
  backend: string;
  /**
   * sha256 of the exact file, 64 lowercase hex characters.
   */
  sha256: string;
  /**
   * size_bytes is the file's length as declared by the requester.
   */
  sizeBytes: bigint;
  contentType: string;
  /**
   * scanned is the content type's flag at creation.
   */
  scanned: boolean;
  sources: Source[];
  /**
   * copy_fee is what this request holds in escrow, in bond-denom micro-units.
   */
  copyFee: string;
  status: RequestStatus;
  closedReason: ClosedReason;
  createdAt: bigint;
  /**
   * opened_at is the start of the current attempt: creation, or the last
   * void or reopen. Verdicts scanned before it do not count.
   */
  openedAt: bigint;
  /**
   * deadline is the height after which a PENDING request expires.
   */
  deadline: bigint;
  /**
   * operator and controller are set by a claim.
   */
  operator: string;
  controller: string;
  claimedAt: bigint;
  claimExpiresAt: bigint;
  claimExtended: boolean;
  /**
   * required_attestations is the scanner quorum fixed by the claim.
   */
  requiredAttestations: number;
  /**
   * locator says where the copy is.
   */
  locator: string;
  /**
   * attestations are sha256 hashes (hex) of the clean verdicts relied on.
   */
  attestations: string[];
  /**
   * verdicts_locator says where those signed verdicts are published.
   */
  verdictsLocator: string;
  completedAt: bigint;
  settleAt: bigint;
  disputed: boolean;
  /**
   * paid_to and paid_amount are set at settlement. paid_to is empty when the
   * payout was redirected to the community pool.
   */
  paidTo: string;
  paidAmount: string;
  /**
   * closed_at is the height the request reached a terminal status.
   */
  closedAt: bigint;
  /**
   * forfeit_at is set while a flagged request's fee is held: when it burns.
   */
  forfeitAt: bigint;
  declinedBy: Decline[];
  /**
   * barred lists operators that may not claim this request.
   */
  barred: string[];
}
export interface RequestProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Request";
  value: Uint8Array;
}
/**
 * Request is a request for a permanent copy (spec section 3.2).
 * @name RequestAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Request
 */
export interface RequestAmino {
  id?: string;
  requester?: string;
  /**
   * requester_trust_level is the x/rep trust level (0-4) at creation.
   */
  requester_trust_level?: number;
  backend?: string;
  /**
   * sha256 of the exact file, 64 lowercase hex characters.
   */
  sha256?: string;
  /**
   * size_bytes is the file's length as declared by the requester.
   */
  size_bytes?: string;
  content_type?: string;
  /**
   * scanned is the content type's flag at creation.
   */
  scanned?: boolean;
  sources?: SourceAmino[];
  /**
   * copy_fee is what this request holds in escrow, in bond-denom micro-units.
   */
  copy_fee?: string;
  status?: RequestStatus;
  closed_reason?: ClosedReason;
  created_at?: string;
  /**
   * opened_at is the start of the current attempt: creation, or the last
   * void or reopen. Verdicts scanned before it do not count.
   */
  opened_at?: string;
  /**
   * deadline is the height after which a PENDING request expires.
   */
  deadline?: string;
  /**
   * operator and controller are set by a claim.
   */
  operator?: string;
  controller?: string;
  claimed_at?: string;
  claim_expires_at?: string;
  claim_extended?: boolean;
  /**
   * required_attestations is the scanner quorum fixed by the claim.
   */
  required_attestations?: number;
  /**
   * locator says where the copy is.
   */
  locator?: string;
  /**
   * attestations are sha256 hashes (hex) of the clean verdicts relied on.
   */
  attestations?: string[];
  /**
   * verdicts_locator says where those signed verdicts are published.
   */
  verdicts_locator?: string;
  completed_at?: string;
  settle_at?: string;
  disputed?: boolean;
  /**
   * paid_to and paid_amount are set at settlement. paid_to is empty when the
   * payout was redirected to the community pool.
   */
  paid_to?: string;
  paid_amount?: string;
  /**
   * closed_at is the height the request reached a terminal status.
   */
  closed_at?: string;
  /**
   * forfeit_at is set while a flagged request's fee is held: when it burns.
   */
  forfeit_at?: string;
  declined_by?: DeclineAmino[];
  /**
   * barred lists operators that may not claim this request.
   */
  barred?: string[];
}
export interface RequestAminoMsg {
  type: "/sparkdream.storage.v1.Request";
  value: RequestAmino;
}
/**
 * Flag is one scanner's flag on a hash.
 * @name Flag
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Flag
 */
export interface Flag {
  scanner: string;
  /**
   * attestation_hash is the sha256 (hex) of the scanner's signed verdict.
   */
  attestationHash: string;
  height: bigint;
}
export interface FlagProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Flag";
  value: Uint8Array;
}
/**
 * Flag is one scanner's flag on a hash.
 * @name FlagAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Flag
 */
export interface FlagAmino {
  scanner?: string;
  /**
   * attestation_hash is the sha256 (hex) of the scanner's signed verdict.
   */
  attestation_hash?: string;
  height?: string;
}
export interface FlagAminoMsg {
  type: "/sparkdream.storage.v1.Flag";
  value: FlagAmino;
}
/**
 * RemovedHash records the flags on a hash and the requests whose fee is held
 * because of them.
 * @name RemovedHash
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.RemovedHash
 */
export interface RemovedHash {
  sha256: string;
  flags: Flag[];
  /**
   * held lists requests closed after a claim, reopened if every flag is
   * lifted before their fee is burned.
   */
  held: bigint[];
}
export interface RemovedHashProtoMsg {
  typeUrl: "/sparkdream.storage.v1.RemovedHash";
  value: Uint8Array;
}
/**
 * RemovedHash records the flags on a hash and the requests whose fee is held
 * because of them.
 * @name RemovedHashAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.RemovedHash
 */
export interface RemovedHashAmino {
  sha256?: string;
  flags?: FlagAmino[];
  /**
   * held lists requests closed after a claim, reopened if every flag is
   * lifted before their fee is burned.
   */
  held?: string[];
}
export interface RemovedHashAminoMsg {
  type: "/sparkdream.storage.v1.RemovedHash";
  value: RemovedHashAmino;
}
/**
 * Counter is a per-window count.
 * @name Counter
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Counter
 */
export interface Counter {
  windowStart: bigint;
  count: bigint;
}
export interface CounterProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Counter";
  value: Uint8Array;
}
/**
 * Counter is a per-window count.
 * @name CounterAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Counter
 */
export interface CounterAmino {
  window_start?: string;
  count?: string;
}
export interface CounterAminoMsg {
  type: "/sparkdream.storage.v1.Counter";
  value: CounterAmino;
}
/**
 * CounterEntry is a counter with its key (genesis).
 * @name CounterEntry
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.CounterEntry
 */
export interface CounterEntry {
  address: string;
  kind: CounterKind;
  windowStart: bigint;
  count: bigint;
}
export interface CounterEntryProtoMsg {
  typeUrl: "/sparkdream.storage.v1.CounterEntry";
  value: Uint8Array;
}
/**
 * CounterEntry is a counter with its key (genesis).
 * @name CounterEntryAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.CounterEntry
 */
export interface CounterEntryAmino {
  address?: string;
  kind?: CounterKind;
  window_start?: string;
  count?: string;
}
export interface CounterEntryAminoMsg {
  type: "/sparkdream.storage.v1.CounterEntry";
  value: CounterEntryAmino;
}
function createBaseBackendType(): BackendType {
  return {
    contentType: "",
    scanned: false,
    maxSize: BigInt(0)
  };
}
/**
 * BackendType is one content type a backend accepts.
 * @name BackendType
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.BackendType
 */
export const BackendType = {
  typeUrl: "/sparkdream.storage.v1.BackendType",
  encode(message: BackendType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.scanned === true) {
      writer.uint32(16).bool(message.scanned);
    }
    if (message.maxSize !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BackendType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentType = reader.string();
          break;
        case 2:
          message.scanned = reader.bool();
          break;
        case 3:
          message.maxSize = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BackendType>): BackendType {
    const message = createBaseBackendType();
    message.contentType = object.contentType ?? "";
    message.scanned = object.scanned ?? false;
    message.maxSize = object.maxSize !== undefined && object.maxSize !== null ? BigInt(object.maxSize.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BackendTypeAmino): BackendType {
    const message = createBaseBackendType();
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.scanned !== undefined && object.scanned !== null) {
      message.scanned = object.scanned;
    }
    if (object.max_size !== undefined && object.max_size !== null) {
      message.maxSize = BigInt(object.max_size);
    }
    return message;
  },
  toAmino(message: BackendType): BackendTypeAmino {
    const obj: any = {};
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.scanned = message.scanned === false ? undefined : message.scanned;
    obj.max_size = message.maxSize !== BigInt(0) ? message.maxSize?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BackendTypeAminoMsg): BackendType {
    return BackendType.fromAmino(object.value);
  },
  fromProtoMsg(message: BackendTypeProtoMsg): BackendType {
    return BackendType.decode(message.value);
  },
  toProto(message: BackendType): Uint8Array {
    return BackendType.encode(message).finish();
  },
  toProtoMsg(message: BackendType): BackendTypeProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.BackendType",
      value: BackendType.encode(message).finish()
    };
  }
};
function createBaseBackend(): Backend {
  return {
    name: "",
    serviceType: "",
    kind: 0,
    locatorFormat: 0,
    enabled: false,
    pricePerByte: "",
    minFee: "",
    minPricePerByte: "",
    maxPricePerByte: "",
    minMinFee: "",
    maxMinFee: "",
    declinesToClose: 0,
    types: []
  };
}
/**
 * Backend is one storage network (spec section 3.1).
 * @name Backend
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Backend
 */
export const Backend = {
  typeUrl: "/sparkdream.storage.v1.Backend",
  encode(message: Backend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.kind !== 0) {
      writer.uint32(24).int32(message.kind);
    }
    if (message.locatorFormat !== 0) {
      writer.uint32(32).int32(message.locatorFormat);
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
    }
    if (message.pricePerByte !== "") {
      writer.uint32(50).string(message.pricePerByte);
    }
    if (message.minFee !== "") {
      writer.uint32(58).string(message.minFee);
    }
    if (message.minPricePerByte !== "") {
      writer.uint32(66).string(message.minPricePerByte);
    }
    if (message.maxPricePerByte !== "") {
      writer.uint32(74).string(message.maxPricePerByte);
    }
    if (message.minMinFee !== "") {
      writer.uint32(82).string(message.minMinFee);
    }
    if (message.maxMinFee !== "") {
      writer.uint32(90).string(message.maxMinFee);
    }
    if (message.declinesToClose !== 0) {
      writer.uint32(96).uint32(message.declinesToClose);
    }
    for (const v of message.types) {
      BackendType.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Backend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.kind = reader.int32() as any;
          break;
        case 4:
          message.locatorFormat = reader.int32() as any;
          break;
        case 5:
          message.enabled = reader.bool();
          break;
        case 6:
          message.pricePerByte = reader.string();
          break;
        case 7:
          message.minFee = reader.string();
          break;
        case 8:
          message.minPricePerByte = reader.string();
          break;
        case 9:
          message.maxPricePerByte = reader.string();
          break;
        case 10:
          message.minMinFee = reader.string();
          break;
        case 11:
          message.maxMinFee = reader.string();
          break;
        case 12:
          message.declinesToClose = reader.uint32();
          break;
        case 13:
          message.types.push(BackendType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Backend>): Backend {
    const message = createBaseBackend();
    message.name = object.name ?? "";
    message.serviceType = object.serviceType ?? "";
    message.kind = object.kind ?? 0;
    message.locatorFormat = object.locatorFormat ?? 0;
    message.enabled = object.enabled ?? false;
    message.pricePerByte = object.pricePerByte ?? "";
    message.minFee = object.minFee ?? "";
    message.minPricePerByte = object.minPricePerByte ?? "";
    message.maxPricePerByte = object.maxPricePerByte ?? "";
    message.minMinFee = object.minMinFee ?? "";
    message.maxMinFee = object.maxMinFee ?? "";
    message.declinesToClose = object.declinesToClose ?? 0;
    message.types = object.types?.map(e => BackendType.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BackendAmino): Backend {
    const message = createBaseBackend();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.locator_format !== undefined && object.locator_format !== null) {
      message.locatorFormat = object.locator_format;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.price_per_byte !== undefined && object.price_per_byte !== null) {
      message.pricePerByte = object.price_per_byte;
    }
    if (object.min_fee !== undefined && object.min_fee !== null) {
      message.minFee = object.min_fee;
    }
    if (object.min_price_per_byte !== undefined && object.min_price_per_byte !== null) {
      message.minPricePerByte = object.min_price_per_byte;
    }
    if (object.max_price_per_byte !== undefined && object.max_price_per_byte !== null) {
      message.maxPricePerByte = object.max_price_per_byte;
    }
    if (object.min_min_fee !== undefined && object.min_min_fee !== null) {
      message.minMinFee = object.min_min_fee;
    }
    if (object.max_min_fee !== undefined && object.max_min_fee !== null) {
      message.maxMinFee = object.max_min_fee;
    }
    if (object.declines_to_close !== undefined && object.declines_to_close !== null) {
      message.declinesToClose = object.declines_to_close;
    }
    message.types = object.types?.map(e => BackendType.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Backend): BackendAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.locator_format = message.locatorFormat === 0 ? undefined : message.locatorFormat;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.price_per_byte = message.pricePerByte ?? "";
    obj.min_fee = message.minFee ?? "";
    obj.min_price_per_byte = message.minPricePerByte ?? "";
    obj.max_price_per_byte = message.maxPricePerByte ?? "";
    obj.min_min_fee = message.minMinFee ?? "";
    obj.max_min_fee = message.maxMinFee ?? "";
    obj.declines_to_close = message.declinesToClose === 0 ? undefined : message.declinesToClose;
    if (message.types) {
      obj.types = message.types.map(e => e ? BackendType.toAmino(e) : undefined);
    } else {
      obj.types = message.types;
    }
    return obj;
  },
  fromAminoMsg(object: BackendAminoMsg): Backend {
    return Backend.fromAmino(object.value);
  },
  fromProtoMsg(message: BackendProtoMsg): Backend {
    return Backend.decode(message.value);
  },
  toProto(message: Backend): Uint8Array {
    return Backend.encode(message).finish();
  },
  toProtoMsg(message: Backend): BackendProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Backend",
      value: Backend.encode(message).finish()
    };
  }
};
function createBaseApproval(): Approval {
  return {
    controller: "",
    height: BigInt(0)
  };
}
/**
 * Approval is a controller's consent for an operator or scanner to act here.
 * @name Approval
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Approval
 */
export const Approval = {
  typeUrl: "/sparkdream.storage.v1.Approval",
  encode(message: Approval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Approval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApproval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controller = reader.string();
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Approval>): Approval {
    const message = createBaseApproval();
    message.controller = object.controller ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ApprovalAmino): Approval {
    const message = createBaseApproval();
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: Approval): ApprovalAmino {
    const obj: any = {};
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ApprovalAminoMsg): Approval {
    return Approval.fromAmino(object.value);
  },
  fromProtoMsg(message: ApprovalProtoMsg): Approval {
    return Approval.decode(message.value);
  },
  toProto(message: Approval): Uint8Array {
    return Approval.encode(message).finish();
  },
  toProtoMsg(message: Approval): ApprovalProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Approval",
      value: Approval.encode(message).finish()
    };
  }
};
function createBaseApprovedOperator(): ApprovedOperator {
  return {
    backend: "",
    operator: "",
    controller: "",
    height: BigInt(0),
    stale: false
  };
}
/**
 * ApprovedOperator is an operator approval with its key (genesis, queries).
 * @name ApprovedOperator
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.ApprovedOperator
 */
export const ApprovedOperator = {
  typeUrl: "/sparkdream.storage.v1.ApprovedOperator",
  encode(message: ApprovedOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.backend !== "") {
      writer.uint32(10).string(message.backend);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.stale === true) {
      writer.uint32(40).bool(message.stale);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApprovedOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApprovedOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.stale = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ApprovedOperator>): ApprovedOperator {
    const message = createBaseApprovedOperator();
    message.backend = object.backend ?? "";
    message.operator = object.operator ?? "";
    message.controller = object.controller ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.stale = object.stale ?? false;
    return message;
  },
  fromAmino(object: ApprovedOperatorAmino): ApprovedOperator {
    const message = createBaseApprovedOperator();
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = object.backend;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.stale !== undefined && object.stale !== null) {
      message.stale = object.stale;
    }
    return message;
  },
  toAmino(message: ApprovedOperator): ApprovedOperatorAmino {
    const obj: any = {};
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.stale = message.stale === false ? undefined : message.stale;
    return obj;
  },
  fromAminoMsg(object: ApprovedOperatorAminoMsg): ApprovedOperator {
    return ApprovedOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: ApprovedOperatorProtoMsg): ApprovedOperator {
    return ApprovedOperator.decode(message.value);
  },
  toProto(message: ApprovedOperator): Uint8Array {
    return ApprovedOperator.encode(message).finish();
  },
  toProtoMsg(message: ApprovedOperator): ApprovedOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.ApprovedOperator",
      value: ApprovedOperator.encode(message).finish()
    };
  }
};
function createBaseApprovedScanner(): ApprovedScanner {
  return {
    scanner: "",
    controller: "",
    height: BigInt(0),
    stale: false
  };
}
/**
 * ApprovedScanner is a scanner approval with its key (genesis, queries).
 * @name ApprovedScanner
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.ApprovedScanner
 */
export const ApprovedScanner = {
  typeUrl: "/sparkdream.storage.v1.ApprovedScanner",
  encode(message: ApprovedScanner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scanner !== "") {
      writer.uint32(10).string(message.scanner);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.stale === true) {
      writer.uint32(32).bool(message.stale);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApprovedScanner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApprovedScanner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanner = reader.string();
          break;
        case 2:
          message.controller = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.stale = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ApprovedScanner>): ApprovedScanner {
    const message = createBaseApprovedScanner();
    message.scanner = object.scanner ?? "";
    message.controller = object.controller ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.stale = object.stale ?? false;
    return message;
  },
  fromAmino(object: ApprovedScannerAmino): ApprovedScanner {
    const message = createBaseApprovedScanner();
    if (object.scanner !== undefined && object.scanner !== null) {
      message.scanner = object.scanner;
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.stale !== undefined && object.stale !== null) {
      message.stale = object.stale;
    }
    return message;
  },
  toAmino(message: ApprovedScanner): ApprovedScannerAmino {
    const obj: any = {};
    obj.scanner = message.scanner === "" ? undefined : message.scanner;
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.stale = message.stale === false ? undefined : message.stale;
    return obj;
  },
  fromAminoMsg(object: ApprovedScannerAminoMsg): ApprovedScanner {
    return ApprovedScanner.fromAmino(object.value);
  },
  fromProtoMsg(message: ApprovedScannerProtoMsg): ApprovedScanner {
    return ApprovedScanner.decode(message.value);
  },
  toProto(message: ApprovedScanner): Uint8Array {
    return ApprovedScanner.encode(message).finish();
  },
  toProtoMsg(message: ApprovedScanner): ApprovedScannerProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.ApprovedScanner",
      value: ApprovedScanner.encode(message).finish()
    };
  }
};
function createBaseSource(): Source {
  return {
    url: "",
    addedBy: "",
    addedAt: BigInt(0)
  };
}
/**
 * Source is one address a file can be fetched from.
 * @name Source
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Source
 */
export const Source = {
  typeUrl: "/sparkdream.storage.v1.Source",
  encode(message: Source, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.addedBy !== "") {
      writer.uint32(18).string(message.addedBy);
    }
    if (message.addedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.addedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Source {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.addedBy = reader.string();
          break;
        case 3:
          message.addedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Source>): Source {
    const message = createBaseSource();
    message.url = object.url ?? "";
    message.addedBy = object.addedBy ?? "";
    message.addedAt = object.addedAt !== undefined && object.addedAt !== null ? BigInt(object.addedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SourceAmino): Source {
    const message = createBaseSource();
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.added_by !== undefined && object.added_by !== null) {
      message.addedBy = object.added_by;
    }
    if (object.added_at !== undefined && object.added_at !== null) {
      message.addedAt = BigInt(object.added_at);
    }
    return message;
  },
  toAmino(message: Source): SourceAmino {
    const obj: any = {};
    obj.url = message.url === "" ? undefined : message.url;
    obj.added_by = message.addedBy === "" ? undefined : message.addedBy;
    obj.added_at = message.addedAt !== BigInt(0) ? message.addedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SourceAminoMsg): Source {
    return Source.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceProtoMsg): Source {
    return Source.decode(message.value);
  },
  toProto(message: Source): Uint8Array {
    return Source.encode(message).finish();
  },
  toProtoMsg(message: Source): SourceProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Source",
      value: Source.encode(message).finish()
    };
  }
};
function createBaseDecline(): Decline {
  return {
    operator: "",
    member: "",
    reason: 0
  };
}
/**
 * Decline is one operator's decline of a request.
 * @name Decline
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Decline
 */
export const Decline = {
  typeUrl: "/sparkdream.storage.v1.Decline",
  encode(message: Decline, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.reason !== 0) {
      writer.uint32(24).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Decline {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.member = reader.string();
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
  fromPartial(object: DeepPartial<Decline>): Decline {
    const message = createBaseDecline();
    message.operator = object.operator ?? "";
    message.member = object.member ?? "";
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: DeclineAmino): Decline {
    const message = createBaseDecline();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: Decline): DeclineAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.member = message.member === "" ? undefined : message.member;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: DeclineAminoMsg): Decline {
    return Decline.fromAmino(object.value);
  },
  fromProtoMsg(message: DeclineProtoMsg): Decline {
    return Decline.decode(message.value);
  },
  toProto(message: Decline): Uint8Array {
    return Decline.encode(message).finish();
  },
  toProtoMsg(message: Decline): DeclineProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Decline",
      value: Decline.encode(message).finish()
    };
  }
};
function createBaseRequest(): Request {
  return {
    id: BigInt(0),
    requester: "",
    requesterTrustLevel: 0,
    backend: "",
    sha256: "",
    sizeBytes: BigInt(0),
    contentType: "",
    scanned: false,
    sources: [],
    copyFee: "",
    status: 0,
    closedReason: 0,
    createdAt: BigInt(0),
    openedAt: BigInt(0),
    deadline: BigInt(0),
    operator: "",
    controller: "",
    claimedAt: BigInt(0),
    claimExpiresAt: BigInt(0),
    claimExtended: false,
    requiredAttestations: 0,
    locator: "",
    attestations: [],
    verdictsLocator: "",
    completedAt: BigInt(0),
    settleAt: BigInt(0),
    disputed: false,
    paidTo: "",
    paidAmount: "",
    closedAt: BigInt(0),
    forfeitAt: BigInt(0),
    declinedBy: [],
    barred: []
  };
}
/**
 * Request is a request for a permanent copy (spec section 3.2).
 * @name Request
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Request
 */
export const Request = {
  typeUrl: "/sparkdream.storage.v1.Request",
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.requester !== "") {
      writer.uint32(18).string(message.requester);
    }
    if (message.requesterTrustLevel !== 0) {
      writer.uint32(24).uint32(message.requesterTrustLevel);
    }
    if (message.backend !== "") {
      writer.uint32(34).string(message.backend);
    }
    if (message.sha256 !== "") {
      writer.uint32(42).string(message.sha256);
    }
    if (message.sizeBytes !== BigInt(0)) {
      writer.uint32(48).uint64(message.sizeBytes);
    }
    if (message.contentType !== "") {
      writer.uint32(58).string(message.contentType);
    }
    if (message.scanned === true) {
      writer.uint32(64).bool(message.scanned);
    }
    for (const v of message.sources) {
      Source.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.copyFee !== "") {
      writer.uint32(82).string(message.copyFee);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.closedReason !== 0) {
      writer.uint32(96).int32(message.closedReason);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(104).int64(message.createdAt);
    }
    if (message.openedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.openedAt);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(120).int64(message.deadline);
    }
    if (message.operator !== "") {
      writer.uint32(130).string(message.operator);
    }
    if (message.controller !== "") {
      writer.uint32(138).string(message.controller);
    }
    if (message.claimedAt !== BigInt(0)) {
      writer.uint32(144).int64(message.claimedAt);
    }
    if (message.claimExpiresAt !== BigInt(0)) {
      writer.uint32(152).int64(message.claimExpiresAt);
    }
    if (message.claimExtended === true) {
      writer.uint32(160).bool(message.claimExtended);
    }
    if (message.requiredAttestations !== 0) {
      writer.uint32(168).uint32(message.requiredAttestations);
    }
    if (message.locator !== "") {
      writer.uint32(178).string(message.locator);
    }
    for (const v of message.attestations) {
      writer.uint32(186).string(v!);
    }
    if (message.verdictsLocator !== "") {
      writer.uint32(194).string(message.verdictsLocator);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(200).int64(message.completedAt);
    }
    if (message.settleAt !== BigInt(0)) {
      writer.uint32(208).int64(message.settleAt);
    }
    if (message.disputed === true) {
      writer.uint32(216).bool(message.disputed);
    }
    if (message.paidTo !== "") {
      writer.uint32(226).string(message.paidTo);
    }
    if (message.paidAmount !== "") {
      writer.uint32(234).string(message.paidAmount);
    }
    if (message.closedAt !== BigInt(0)) {
      writer.uint32(240).int64(message.closedAt);
    }
    if (message.forfeitAt !== BigInt(0)) {
      writer.uint32(248).int64(message.forfeitAt);
    }
    for (const v of message.declinedBy) {
      Decline.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    for (const v of message.barred) {
      writer.uint32(266).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.requester = reader.string();
          break;
        case 3:
          message.requesterTrustLevel = reader.uint32();
          break;
        case 4:
          message.backend = reader.string();
          break;
        case 5:
          message.sha256 = reader.string();
          break;
        case 6:
          message.sizeBytes = reader.uint64();
          break;
        case 7:
          message.contentType = reader.string();
          break;
        case 8:
          message.scanned = reader.bool();
          break;
        case 9:
          message.sources.push(Source.decode(reader, reader.uint32()));
          break;
        case 10:
          message.copyFee = reader.string();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.closedReason = reader.int32() as any;
          break;
        case 13:
          message.createdAt = reader.int64();
          break;
        case 14:
          message.openedAt = reader.int64();
          break;
        case 15:
          message.deadline = reader.int64();
          break;
        case 16:
          message.operator = reader.string();
          break;
        case 17:
          message.controller = reader.string();
          break;
        case 18:
          message.claimedAt = reader.int64();
          break;
        case 19:
          message.claimExpiresAt = reader.int64();
          break;
        case 20:
          message.claimExtended = reader.bool();
          break;
        case 21:
          message.requiredAttestations = reader.uint32();
          break;
        case 22:
          message.locator = reader.string();
          break;
        case 23:
          message.attestations.push(reader.string());
          break;
        case 24:
          message.verdictsLocator = reader.string();
          break;
        case 25:
          message.completedAt = reader.int64();
          break;
        case 26:
          message.settleAt = reader.int64();
          break;
        case 27:
          message.disputed = reader.bool();
          break;
        case 28:
          message.paidTo = reader.string();
          break;
        case 29:
          message.paidAmount = reader.string();
          break;
        case 30:
          message.closedAt = reader.int64();
          break;
        case 31:
          message.forfeitAt = reader.int64();
          break;
        case 32:
          message.declinedBy.push(Decline.decode(reader, reader.uint32()));
          break;
        case 33:
          message.barred.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Request>): Request {
    const message = createBaseRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.requester = object.requester ?? "";
    message.requesterTrustLevel = object.requesterTrustLevel ?? 0;
    message.backend = object.backend ?? "";
    message.sha256 = object.sha256 ?? "";
    message.sizeBytes = object.sizeBytes !== undefined && object.sizeBytes !== null ? BigInt(object.sizeBytes.toString()) : BigInt(0);
    message.contentType = object.contentType ?? "";
    message.scanned = object.scanned ?? false;
    message.sources = object.sources?.map(e => Source.fromPartial(e)) || [];
    message.copyFee = object.copyFee ?? "";
    message.status = object.status ?? 0;
    message.closedReason = object.closedReason ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.openedAt = object.openedAt !== undefined && object.openedAt !== null ? BigInt(object.openedAt.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.operator = object.operator ?? "";
    message.controller = object.controller ?? "";
    message.claimedAt = object.claimedAt !== undefined && object.claimedAt !== null ? BigInt(object.claimedAt.toString()) : BigInt(0);
    message.claimExpiresAt = object.claimExpiresAt !== undefined && object.claimExpiresAt !== null ? BigInt(object.claimExpiresAt.toString()) : BigInt(0);
    message.claimExtended = object.claimExtended ?? false;
    message.requiredAttestations = object.requiredAttestations ?? 0;
    message.locator = object.locator ?? "";
    message.attestations = object.attestations?.map(e => e) || [];
    message.verdictsLocator = object.verdictsLocator ?? "";
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.settleAt = object.settleAt !== undefined && object.settleAt !== null ? BigInt(object.settleAt.toString()) : BigInt(0);
    message.disputed = object.disputed ?? false;
    message.paidTo = object.paidTo ?? "";
    message.paidAmount = object.paidAmount ?? "";
    message.closedAt = object.closedAt !== undefined && object.closedAt !== null ? BigInt(object.closedAt.toString()) : BigInt(0);
    message.forfeitAt = object.forfeitAt !== undefined && object.forfeitAt !== null ? BigInt(object.forfeitAt.toString()) : BigInt(0);
    message.declinedBy = object.declinedBy?.map(e => Decline.fromPartial(e)) || [];
    message.barred = object.barred?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RequestAmino): Request {
    const message = createBaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.requester_trust_level !== undefined && object.requester_trust_level !== null) {
      message.requesterTrustLevel = object.requester_trust_level;
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
    if (object.scanned !== undefined && object.scanned !== null) {
      message.scanned = object.scanned;
    }
    message.sources = object.sources?.map(e => Source.fromAmino(e)) || [];
    if (object.copy_fee !== undefined && object.copy_fee !== null) {
      message.copyFee = object.copy_fee;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.closed_reason !== undefined && object.closed_reason !== null) {
      message.closedReason = object.closed_reason;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.opened_at !== undefined && object.opened_at !== null) {
      message.openedAt = BigInt(object.opened_at);
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.claimed_at !== undefined && object.claimed_at !== null) {
      message.claimedAt = BigInt(object.claimed_at);
    }
    if (object.claim_expires_at !== undefined && object.claim_expires_at !== null) {
      message.claimExpiresAt = BigInt(object.claim_expires_at);
    }
    if (object.claim_extended !== undefined && object.claim_extended !== null) {
      message.claimExtended = object.claim_extended;
    }
    if (object.required_attestations !== undefined && object.required_attestations !== null) {
      message.requiredAttestations = object.required_attestations;
    }
    if (object.locator !== undefined && object.locator !== null) {
      message.locator = object.locator;
    }
    message.attestations = object.attestations?.map(e => e) || [];
    if (object.verdicts_locator !== undefined && object.verdicts_locator !== null) {
      message.verdictsLocator = object.verdicts_locator;
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    if (object.settle_at !== undefined && object.settle_at !== null) {
      message.settleAt = BigInt(object.settle_at);
    }
    if (object.disputed !== undefined && object.disputed !== null) {
      message.disputed = object.disputed;
    }
    if (object.paid_to !== undefined && object.paid_to !== null) {
      message.paidTo = object.paid_to;
    }
    if (object.paid_amount !== undefined && object.paid_amount !== null) {
      message.paidAmount = object.paid_amount;
    }
    if (object.closed_at !== undefined && object.closed_at !== null) {
      message.closedAt = BigInt(object.closed_at);
    }
    if (object.forfeit_at !== undefined && object.forfeit_at !== null) {
      message.forfeitAt = BigInt(object.forfeit_at);
    }
    message.declinedBy = object.declined_by?.map(e => Decline.fromAmino(e)) || [];
    message.barred = object.barred?.map(e => e) || [];
    return message;
  },
  toAmino(message: Request): RequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.requester_trust_level = message.requesterTrustLevel === 0 ? undefined : message.requesterTrustLevel;
    obj.backend = message.backend === "" ? undefined : message.backend;
    obj.sha256 = message.sha256 === "" ? undefined : message.sha256;
    obj.size_bytes = message.sizeBytes !== BigInt(0) ? message.sizeBytes?.toString() : undefined;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.scanned = message.scanned === false ? undefined : message.scanned;
    if (message.sources) {
      obj.sources = message.sources.map(e => e ? Source.toAmino(e) : undefined);
    } else {
      obj.sources = message.sources;
    }
    obj.copy_fee = message.copyFee === "" ? undefined : message.copyFee;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.closed_reason = message.closedReason === 0 ? undefined : message.closedReason;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.opened_at = message.openedAt !== BigInt(0) ? message.openedAt?.toString() : undefined;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.claimed_at = message.claimedAt !== BigInt(0) ? message.claimedAt?.toString() : undefined;
    obj.claim_expires_at = message.claimExpiresAt !== BigInt(0) ? message.claimExpiresAt?.toString() : undefined;
    obj.claim_extended = message.claimExtended === false ? undefined : message.claimExtended;
    obj.required_attestations = message.requiredAttestations === 0 ? undefined : message.requiredAttestations;
    obj.locator = message.locator === "" ? undefined : message.locator;
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e);
    } else {
      obj.attestations = message.attestations;
    }
    obj.verdicts_locator = message.verdictsLocator === "" ? undefined : message.verdictsLocator;
    obj.completed_at = message.completedAt !== BigInt(0) ? message.completedAt?.toString() : undefined;
    obj.settle_at = message.settleAt !== BigInt(0) ? message.settleAt?.toString() : undefined;
    obj.disputed = message.disputed === false ? undefined : message.disputed;
    obj.paid_to = message.paidTo === "" ? undefined : message.paidTo;
    obj.paid_amount = message.paidAmount === "" ? undefined : message.paidAmount;
    obj.closed_at = message.closedAt !== BigInt(0) ? message.closedAt?.toString() : undefined;
    obj.forfeit_at = message.forfeitAt !== BigInt(0) ? message.forfeitAt?.toString() : undefined;
    if (message.declinedBy) {
      obj.declined_by = message.declinedBy.map(e => e ? Decline.toAmino(e) : undefined);
    } else {
      obj.declined_by = message.declinedBy;
    }
    if (message.barred) {
      obj.barred = message.barred.map(e => e);
    } else {
      obj.barred = message.barred;
    }
    return obj;
  },
  fromAminoMsg(object: RequestAminoMsg): Request {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProtoMsg): Request {
    return Request.decode(message.value);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Request",
      value: Request.encode(message).finish()
    };
  }
};
function createBaseFlag(): Flag {
  return {
    scanner: "",
    attestationHash: "",
    height: BigInt(0)
  };
}
/**
 * Flag is one scanner's flag on a hash.
 * @name Flag
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Flag
 */
export const Flag = {
  typeUrl: "/sparkdream.storage.v1.Flag",
  encode(message: Flag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scanner !== "") {
      writer.uint32(10).string(message.scanner);
    }
    if (message.attestationHash !== "") {
      writer.uint32(18).string(message.attestationHash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Flag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanner = reader.string();
          break;
        case 2:
          message.attestationHash = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Flag>): Flag {
    const message = createBaseFlag();
    message.scanner = object.scanner ?? "";
    message.attestationHash = object.attestationHash ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FlagAmino): Flag {
    const message = createBaseFlag();
    if (object.scanner !== undefined && object.scanner !== null) {
      message.scanner = object.scanner;
    }
    if (object.attestation_hash !== undefined && object.attestation_hash !== null) {
      message.attestationHash = object.attestation_hash;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: Flag): FlagAmino {
    const obj: any = {};
    obj.scanner = message.scanner === "" ? undefined : message.scanner;
    obj.attestation_hash = message.attestationHash === "" ? undefined : message.attestationHash;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FlagAminoMsg): Flag {
    return Flag.fromAmino(object.value);
  },
  fromProtoMsg(message: FlagProtoMsg): Flag {
    return Flag.decode(message.value);
  },
  toProto(message: Flag): Uint8Array {
    return Flag.encode(message).finish();
  },
  toProtoMsg(message: Flag): FlagProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Flag",
      value: Flag.encode(message).finish()
    };
  }
};
function createBaseRemovedHash(): RemovedHash {
  return {
    sha256: "",
    flags: [],
    held: []
  };
}
/**
 * RemovedHash records the flags on a hash and the requests whose fee is held
 * because of them.
 * @name RemovedHash
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.RemovedHash
 */
export const RemovedHash = {
  typeUrl: "/sparkdream.storage.v1.RemovedHash",
  encode(message: RemovedHash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sha256 !== "") {
      writer.uint32(10).string(message.sha256);
    }
    for (const v of message.flags) {
      Flag.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.held) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RemovedHash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovedHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sha256 = reader.string();
          break;
        case 2:
          message.flags.push(Flag.decode(reader, reader.uint32()));
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.held.push(reader.uint64());
            }
          } else {
            message.held.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RemovedHash>): RemovedHash {
    const message = createBaseRemovedHash();
    message.sha256 = object.sha256 ?? "";
    message.flags = object.flags?.map(e => Flag.fromPartial(e)) || [];
    message.held = object.held?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: RemovedHashAmino): RemovedHash {
    const message = createBaseRemovedHash();
    if (object.sha256 !== undefined && object.sha256 !== null) {
      message.sha256 = object.sha256;
    }
    message.flags = object.flags?.map(e => Flag.fromAmino(e)) || [];
    message.held = object.held?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: RemovedHash): RemovedHashAmino {
    const obj: any = {};
    obj.sha256 = message.sha256 === "" ? undefined : message.sha256;
    if (message.flags) {
      obj.flags = message.flags.map(e => e ? Flag.toAmino(e) : undefined);
    } else {
      obj.flags = message.flags;
    }
    if (message.held) {
      obj.held = message.held.map(e => e.toString());
    } else {
      obj.held = message.held;
    }
    return obj;
  },
  fromAminoMsg(object: RemovedHashAminoMsg): RemovedHash {
    return RemovedHash.fromAmino(object.value);
  },
  fromProtoMsg(message: RemovedHashProtoMsg): RemovedHash {
    return RemovedHash.decode(message.value);
  },
  toProto(message: RemovedHash): Uint8Array {
    return RemovedHash.encode(message).finish();
  },
  toProtoMsg(message: RemovedHash): RemovedHashProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.RemovedHash",
      value: RemovedHash.encode(message).finish()
    };
  }
};
function createBaseCounter(): Counter {
  return {
    windowStart: BigInt(0),
    count: BigInt(0)
  };
}
/**
 * Counter is a per-window count.
 * @name Counter
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Counter
 */
export const Counter = {
  typeUrl: "/sparkdream.storage.v1.Counter",
  encode(message: Counter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.windowStart !== BigInt(0)) {
      writer.uint32(8).int64(message.windowStart);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Counter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windowStart = reader.int64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Counter>): Counter {
    const message = createBaseCounter();
    message.windowStart = object.windowStart !== undefined && object.windowStart !== null ? BigInt(object.windowStart.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CounterAmino): Counter {
    const message = createBaseCounter();
    if (object.window_start !== undefined && object.window_start !== null) {
      message.windowStart = BigInt(object.window_start);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: Counter): CounterAmino {
    const obj: any = {};
    obj.window_start = message.windowStart !== BigInt(0) ? message.windowStart?.toString() : undefined;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CounterAminoMsg): Counter {
    return Counter.fromAmino(object.value);
  },
  fromProtoMsg(message: CounterProtoMsg): Counter {
    return Counter.decode(message.value);
  },
  toProto(message: Counter): Uint8Array {
    return Counter.encode(message).finish();
  },
  toProtoMsg(message: Counter): CounterProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Counter",
      value: Counter.encode(message).finish()
    };
  }
};
function createBaseCounterEntry(): CounterEntry {
  return {
    address: "",
    kind: 0,
    windowStart: BigInt(0),
    count: BigInt(0)
  };
}
/**
 * CounterEntry is a counter with its key (genesis).
 * @name CounterEntry
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.CounterEntry
 */
export const CounterEntry = {
  typeUrl: "/sparkdream.storage.v1.CounterEntry",
  encode(message: CounterEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.windowStart !== BigInt(0)) {
      writer.uint32(24).int64(message.windowStart);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(32).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CounterEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.kind = reader.int32() as any;
          break;
        case 3:
          message.windowStart = reader.int64();
          break;
        case 4:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CounterEntry>): CounterEntry {
    const message = createBaseCounterEntry();
    message.address = object.address ?? "";
    message.kind = object.kind ?? 0;
    message.windowStart = object.windowStart !== undefined && object.windowStart !== null ? BigInt(object.windowStart.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CounterEntryAmino): CounterEntry {
    const message = createBaseCounterEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.window_start !== undefined && object.window_start !== null) {
      message.windowStart = BigInt(object.window_start);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: CounterEntry): CounterEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.window_start = message.windowStart !== BigInt(0) ? message.windowStart?.toString() : undefined;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CounterEntryAminoMsg): CounterEntry {
    return CounterEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CounterEntryProtoMsg): CounterEntry {
    return CounterEntry.decode(message.value);
  },
  toProto(message: CounterEntry): Uint8Array {
    return CounterEntry.encode(message).finish();
  },
  toProtoMsg(message: CounterEntry): CounterEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.CounterEntry",
      value: CounterEntry.encode(message).finish()
    };
  }
};