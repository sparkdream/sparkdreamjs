//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module (spec section 4.2).
 * @name Params
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Params
 */
export interface Params {
  /**
   * enabled false refuses new requests and nothing else.
   */
  enabled: boolean;
  /**
   * min_requester_trust_level is the x/rep trust level (0-4) a requester needs.
   */
  minRequesterTrustLevel: number;
  /**
   * request_fee is burned per request, added source and non-requester
   * dispute, in bond-denom micro-units.
   */
  requestFee: string;
  /**
   * request_ttl_blocks: a PENDING request expires this long after it opens.
   */
  requestTtlBlocks: bigint;
  /**
   * claim_window_blocks: how long a claim is exclusive.
   */
  claimWindowBlocks: bigint;
  /**
   * settle_window_blocks: from completion to settlement.
   */
  settleWindowBlocks: bigint;
  /**
   * dispute_window_blocks: how long a dispute holds settlement.
   */
  disputeWindowBlocks: bigint;
  /**
   * flag_hold_blocks: how long a flagged request's fee is held before it burns.
   */
  flagHoldBlocks: bigint;
  /**
   * min_unreachable_blocks: earliest unreachable decline after the newest source.
   */
  minUnreachableBlocks: bigint;
  /**
   * terminal_retention_blocks: how long a closed request is kept.
   */
  terminalRetentionBlocks: bigint;
  /**
   * counter_window_blocks: window for the per-address caps.
   */
  counterWindowBlocks: bigint;
  /**
   * deadline_retry_blocks: when a failed timer is tried again.
   */
  deadlineRetryBlocks: bigint;
  maxSourcesPerRequest: number;
  maxAttestationsPerCompletion: number;
  maxOperatorsPerBackend: number;
  maxApprovedScanners: number;
  maxOpenClaimsPerOperator: number;
  maxLapsesPerWindow: number;
  maxMismatchDeclinesPerOperatorPerWindow: number;
  maxUnreachableDeclinesPerOperatorPerWindow: number;
  maxCompletionsPerOperatorPerWindow: number;
  maxFlagsPerScannerPerWindow: number;
  maxFlagsPerHash: number;
  maxHashesPerUnflag: number;
  maxUrlBytes: number;
  maxReasonBytes: number;
  maxBarredPerRequest: number;
  maxOpenRequestsPerRequester: number;
  maxDeadlinesPerBlock: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.storage.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module (spec section 4.2).
 * @name ParamsAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Params
 */
export interface ParamsAmino {
  /**
   * enabled false refuses new requests and nothing else.
   */
  enabled?: boolean;
  /**
   * min_requester_trust_level is the x/rep trust level (0-4) a requester needs.
   */
  min_requester_trust_level?: number;
  /**
   * request_fee is burned per request, added source and non-requester
   * dispute, in bond-denom micro-units.
   */
  request_fee: string;
  /**
   * request_ttl_blocks: a PENDING request expires this long after it opens.
   */
  request_ttl_blocks?: string;
  /**
   * claim_window_blocks: how long a claim is exclusive.
   */
  claim_window_blocks?: string;
  /**
   * settle_window_blocks: from completion to settlement.
   */
  settle_window_blocks?: string;
  /**
   * dispute_window_blocks: how long a dispute holds settlement.
   */
  dispute_window_blocks?: string;
  /**
   * flag_hold_blocks: how long a flagged request's fee is held before it burns.
   */
  flag_hold_blocks?: string;
  /**
   * min_unreachable_blocks: earliest unreachable decline after the newest source.
   */
  min_unreachable_blocks?: string;
  /**
   * terminal_retention_blocks: how long a closed request is kept.
   */
  terminal_retention_blocks?: string;
  /**
   * counter_window_blocks: window for the per-address caps.
   */
  counter_window_blocks?: string;
  /**
   * deadline_retry_blocks: when a failed timer is tried again.
   */
  deadline_retry_blocks?: string;
  max_sources_per_request?: number;
  max_attestations_per_completion?: number;
  max_operators_per_backend?: number;
  max_approved_scanners?: number;
  max_open_claims_per_operator?: number;
  max_lapses_per_window?: number;
  max_mismatch_declines_per_operator_per_window?: number;
  max_unreachable_declines_per_operator_per_window?: number;
  max_completions_per_operator_per_window?: number;
  max_flags_per_scanner_per_window?: number;
  max_flags_per_hash?: number;
  max_hashes_per_unflag?: number;
  max_url_bytes?: number;
  max_reason_bytes?: number;
  max_barred_per_request?: number;
  max_open_requests_per_requester?: number;
  max_deadlines_per_block?: number;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/storage/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    minRequesterTrustLevel: 0,
    requestFee: "",
    requestTtlBlocks: BigInt(0),
    claimWindowBlocks: BigInt(0),
    settleWindowBlocks: BigInt(0),
    disputeWindowBlocks: BigInt(0),
    flagHoldBlocks: BigInt(0),
    minUnreachableBlocks: BigInt(0),
    terminalRetentionBlocks: BigInt(0),
    counterWindowBlocks: BigInt(0),
    deadlineRetryBlocks: BigInt(0),
    maxSourcesPerRequest: 0,
    maxAttestationsPerCompletion: 0,
    maxOperatorsPerBackend: 0,
    maxApprovedScanners: 0,
    maxOpenClaimsPerOperator: 0,
    maxLapsesPerWindow: 0,
    maxMismatchDeclinesPerOperatorPerWindow: 0,
    maxUnreachableDeclinesPerOperatorPerWindow: 0,
    maxCompletionsPerOperatorPerWindow: 0,
    maxFlagsPerScannerPerWindow: 0,
    maxFlagsPerHash: 0,
    maxHashesPerUnflag: 0,
    maxUrlBytes: 0,
    maxReasonBytes: 0,
    maxBarredPerRequest: 0,
    maxOpenRequestsPerRequester: 0,
    maxDeadlinesPerBlock: 0
  };
}
/**
 * Params defines the parameters for the module (spec section 4.2).
 * @name Params
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.storage.v1.Params",
  aminoType: "sparkdream/x/storage/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.minRequesterTrustLevel !== 0) {
      writer.uint32(16).uint32(message.minRequesterTrustLevel);
    }
    if (message.requestFee !== "") {
      writer.uint32(26).string(message.requestFee);
    }
    if (message.requestTtlBlocks !== BigInt(0)) {
      writer.uint32(32).int64(message.requestTtlBlocks);
    }
    if (message.claimWindowBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.claimWindowBlocks);
    }
    if (message.settleWindowBlocks !== BigInt(0)) {
      writer.uint32(48).int64(message.settleWindowBlocks);
    }
    if (message.disputeWindowBlocks !== BigInt(0)) {
      writer.uint32(56).int64(message.disputeWindowBlocks);
    }
    if (message.flagHoldBlocks !== BigInt(0)) {
      writer.uint32(64).int64(message.flagHoldBlocks);
    }
    if (message.minUnreachableBlocks !== BigInt(0)) {
      writer.uint32(72).int64(message.minUnreachableBlocks);
    }
    if (message.terminalRetentionBlocks !== BigInt(0)) {
      writer.uint32(80).int64(message.terminalRetentionBlocks);
    }
    if (message.counterWindowBlocks !== BigInt(0)) {
      writer.uint32(88).int64(message.counterWindowBlocks);
    }
    if (message.deadlineRetryBlocks !== BigInt(0)) {
      writer.uint32(96).int64(message.deadlineRetryBlocks);
    }
    if (message.maxSourcesPerRequest !== 0) {
      writer.uint32(104).uint32(message.maxSourcesPerRequest);
    }
    if (message.maxAttestationsPerCompletion !== 0) {
      writer.uint32(112).uint32(message.maxAttestationsPerCompletion);
    }
    if (message.maxOperatorsPerBackend !== 0) {
      writer.uint32(120).uint32(message.maxOperatorsPerBackend);
    }
    if (message.maxApprovedScanners !== 0) {
      writer.uint32(128).uint32(message.maxApprovedScanners);
    }
    if (message.maxOpenClaimsPerOperator !== 0) {
      writer.uint32(136).uint32(message.maxOpenClaimsPerOperator);
    }
    if (message.maxLapsesPerWindow !== 0) {
      writer.uint32(144).uint32(message.maxLapsesPerWindow);
    }
    if (message.maxMismatchDeclinesPerOperatorPerWindow !== 0) {
      writer.uint32(152).uint32(message.maxMismatchDeclinesPerOperatorPerWindow);
    }
    if (message.maxUnreachableDeclinesPerOperatorPerWindow !== 0) {
      writer.uint32(160).uint32(message.maxUnreachableDeclinesPerOperatorPerWindow);
    }
    if (message.maxCompletionsPerOperatorPerWindow !== 0) {
      writer.uint32(168).uint32(message.maxCompletionsPerOperatorPerWindow);
    }
    if (message.maxFlagsPerScannerPerWindow !== 0) {
      writer.uint32(176).uint32(message.maxFlagsPerScannerPerWindow);
    }
    if (message.maxFlagsPerHash !== 0) {
      writer.uint32(184).uint32(message.maxFlagsPerHash);
    }
    if (message.maxHashesPerUnflag !== 0) {
      writer.uint32(192).uint32(message.maxHashesPerUnflag);
    }
    if (message.maxUrlBytes !== 0) {
      writer.uint32(200).uint32(message.maxUrlBytes);
    }
    if (message.maxReasonBytes !== 0) {
      writer.uint32(208).uint32(message.maxReasonBytes);
    }
    if (message.maxBarredPerRequest !== 0) {
      writer.uint32(216).uint32(message.maxBarredPerRequest);
    }
    if (message.maxOpenRequestsPerRequester !== 0) {
      writer.uint32(224).uint32(message.maxOpenRequestsPerRequester);
    }
    if (message.maxDeadlinesPerBlock !== 0) {
      writer.uint32(232).uint32(message.maxDeadlinesPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.minRequesterTrustLevel = reader.uint32();
          break;
        case 3:
          message.requestFee = reader.string();
          break;
        case 4:
          message.requestTtlBlocks = reader.int64();
          break;
        case 5:
          message.claimWindowBlocks = reader.int64();
          break;
        case 6:
          message.settleWindowBlocks = reader.int64();
          break;
        case 7:
          message.disputeWindowBlocks = reader.int64();
          break;
        case 8:
          message.flagHoldBlocks = reader.int64();
          break;
        case 9:
          message.minUnreachableBlocks = reader.int64();
          break;
        case 10:
          message.terminalRetentionBlocks = reader.int64();
          break;
        case 11:
          message.counterWindowBlocks = reader.int64();
          break;
        case 12:
          message.deadlineRetryBlocks = reader.int64();
          break;
        case 13:
          message.maxSourcesPerRequest = reader.uint32();
          break;
        case 14:
          message.maxAttestationsPerCompletion = reader.uint32();
          break;
        case 15:
          message.maxOperatorsPerBackend = reader.uint32();
          break;
        case 16:
          message.maxApprovedScanners = reader.uint32();
          break;
        case 17:
          message.maxOpenClaimsPerOperator = reader.uint32();
          break;
        case 18:
          message.maxLapsesPerWindow = reader.uint32();
          break;
        case 19:
          message.maxMismatchDeclinesPerOperatorPerWindow = reader.uint32();
          break;
        case 20:
          message.maxUnreachableDeclinesPerOperatorPerWindow = reader.uint32();
          break;
        case 21:
          message.maxCompletionsPerOperatorPerWindow = reader.uint32();
          break;
        case 22:
          message.maxFlagsPerScannerPerWindow = reader.uint32();
          break;
        case 23:
          message.maxFlagsPerHash = reader.uint32();
          break;
        case 24:
          message.maxHashesPerUnflag = reader.uint32();
          break;
        case 25:
          message.maxUrlBytes = reader.uint32();
          break;
        case 26:
          message.maxReasonBytes = reader.uint32();
          break;
        case 27:
          message.maxBarredPerRequest = reader.uint32();
          break;
        case 28:
          message.maxOpenRequestsPerRequester = reader.uint32();
          break;
        case 29:
          message.maxDeadlinesPerBlock = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.minRequesterTrustLevel = object.minRequesterTrustLevel ?? 0;
    message.requestFee = object.requestFee ?? "";
    message.requestTtlBlocks = object.requestTtlBlocks !== undefined && object.requestTtlBlocks !== null ? BigInt(object.requestTtlBlocks.toString()) : BigInt(0);
    message.claimWindowBlocks = object.claimWindowBlocks !== undefined && object.claimWindowBlocks !== null ? BigInt(object.claimWindowBlocks.toString()) : BigInt(0);
    message.settleWindowBlocks = object.settleWindowBlocks !== undefined && object.settleWindowBlocks !== null ? BigInt(object.settleWindowBlocks.toString()) : BigInt(0);
    message.disputeWindowBlocks = object.disputeWindowBlocks !== undefined && object.disputeWindowBlocks !== null ? BigInt(object.disputeWindowBlocks.toString()) : BigInt(0);
    message.flagHoldBlocks = object.flagHoldBlocks !== undefined && object.flagHoldBlocks !== null ? BigInt(object.flagHoldBlocks.toString()) : BigInt(0);
    message.minUnreachableBlocks = object.minUnreachableBlocks !== undefined && object.minUnreachableBlocks !== null ? BigInt(object.minUnreachableBlocks.toString()) : BigInt(0);
    message.terminalRetentionBlocks = object.terminalRetentionBlocks !== undefined && object.terminalRetentionBlocks !== null ? BigInt(object.terminalRetentionBlocks.toString()) : BigInt(0);
    message.counterWindowBlocks = object.counterWindowBlocks !== undefined && object.counterWindowBlocks !== null ? BigInt(object.counterWindowBlocks.toString()) : BigInt(0);
    message.deadlineRetryBlocks = object.deadlineRetryBlocks !== undefined && object.deadlineRetryBlocks !== null ? BigInt(object.deadlineRetryBlocks.toString()) : BigInt(0);
    message.maxSourcesPerRequest = object.maxSourcesPerRequest ?? 0;
    message.maxAttestationsPerCompletion = object.maxAttestationsPerCompletion ?? 0;
    message.maxOperatorsPerBackend = object.maxOperatorsPerBackend ?? 0;
    message.maxApprovedScanners = object.maxApprovedScanners ?? 0;
    message.maxOpenClaimsPerOperator = object.maxOpenClaimsPerOperator ?? 0;
    message.maxLapsesPerWindow = object.maxLapsesPerWindow ?? 0;
    message.maxMismatchDeclinesPerOperatorPerWindow = object.maxMismatchDeclinesPerOperatorPerWindow ?? 0;
    message.maxUnreachableDeclinesPerOperatorPerWindow = object.maxUnreachableDeclinesPerOperatorPerWindow ?? 0;
    message.maxCompletionsPerOperatorPerWindow = object.maxCompletionsPerOperatorPerWindow ?? 0;
    message.maxFlagsPerScannerPerWindow = object.maxFlagsPerScannerPerWindow ?? 0;
    message.maxFlagsPerHash = object.maxFlagsPerHash ?? 0;
    message.maxHashesPerUnflag = object.maxHashesPerUnflag ?? 0;
    message.maxUrlBytes = object.maxUrlBytes ?? 0;
    message.maxReasonBytes = object.maxReasonBytes ?? 0;
    message.maxBarredPerRequest = object.maxBarredPerRequest ?? 0;
    message.maxOpenRequestsPerRequester = object.maxOpenRequestsPerRequester ?? 0;
    message.maxDeadlinesPerBlock = object.maxDeadlinesPerBlock ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.min_requester_trust_level !== undefined && object.min_requester_trust_level !== null) {
      message.minRequesterTrustLevel = object.min_requester_trust_level;
    }
    if (object.request_fee !== undefined && object.request_fee !== null) {
      message.requestFee = object.request_fee;
    }
    if (object.request_ttl_blocks !== undefined && object.request_ttl_blocks !== null) {
      message.requestTtlBlocks = BigInt(object.request_ttl_blocks);
    }
    if (object.claim_window_blocks !== undefined && object.claim_window_blocks !== null) {
      message.claimWindowBlocks = BigInt(object.claim_window_blocks);
    }
    if (object.settle_window_blocks !== undefined && object.settle_window_blocks !== null) {
      message.settleWindowBlocks = BigInt(object.settle_window_blocks);
    }
    if (object.dispute_window_blocks !== undefined && object.dispute_window_blocks !== null) {
      message.disputeWindowBlocks = BigInt(object.dispute_window_blocks);
    }
    if (object.flag_hold_blocks !== undefined && object.flag_hold_blocks !== null) {
      message.flagHoldBlocks = BigInt(object.flag_hold_blocks);
    }
    if (object.min_unreachable_blocks !== undefined && object.min_unreachable_blocks !== null) {
      message.minUnreachableBlocks = BigInt(object.min_unreachable_blocks);
    }
    if (object.terminal_retention_blocks !== undefined && object.terminal_retention_blocks !== null) {
      message.terminalRetentionBlocks = BigInt(object.terminal_retention_blocks);
    }
    if (object.counter_window_blocks !== undefined && object.counter_window_blocks !== null) {
      message.counterWindowBlocks = BigInt(object.counter_window_blocks);
    }
    if (object.deadline_retry_blocks !== undefined && object.deadline_retry_blocks !== null) {
      message.deadlineRetryBlocks = BigInt(object.deadline_retry_blocks);
    }
    if (object.max_sources_per_request !== undefined && object.max_sources_per_request !== null) {
      message.maxSourcesPerRequest = object.max_sources_per_request;
    }
    if (object.max_attestations_per_completion !== undefined && object.max_attestations_per_completion !== null) {
      message.maxAttestationsPerCompletion = object.max_attestations_per_completion;
    }
    if (object.max_operators_per_backend !== undefined && object.max_operators_per_backend !== null) {
      message.maxOperatorsPerBackend = object.max_operators_per_backend;
    }
    if (object.max_approved_scanners !== undefined && object.max_approved_scanners !== null) {
      message.maxApprovedScanners = object.max_approved_scanners;
    }
    if (object.max_open_claims_per_operator !== undefined && object.max_open_claims_per_operator !== null) {
      message.maxOpenClaimsPerOperator = object.max_open_claims_per_operator;
    }
    if (object.max_lapses_per_window !== undefined && object.max_lapses_per_window !== null) {
      message.maxLapsesPerWindow = object.max_lapses_per_window;
    }
    if (object.max_mismatch_declines_per_operator_per_window !== undefined && object.max_mismatch_declines_per_operator_per_window !== null) {
      message.maxMismatchDeclinesPerOperatorPerWindow = object.max_mismatch_declines_per_operator_per_window;
    }
    if (object.max_unreachable_declines_per_operator_per_window !== undefined && object.max_unreachable_declines_per_operator_per_window !== null) {
      message.maxUnreachableDeclinesPerOperatorPerWindow = object.max_unreachable_declines_per_operator_per_window;
    }
    if (object.max_completions_per_operator_per_window !== undefined && object.max_completions_per_operator_per_window !== null) {
      message.maxCompletionsPerOperatorPerWindow = object.max_completions_per_operator_per_window;
    }
    if (object.max_flags_per_scanner_per_window !== undefined && object.max_flags_per_scanner_per_window !== null) {
      message.maxFlagsPerScannerPerWindow = object.max_flags_per_scanner_per_window;
    }
    if (object.max_flags_per_hash !== undefined && object.max_flags_per_hash !== null) {
      message.maxFlagsPerHash = object.max_flags_per_hash;
    }
    if (object.max_hashes_per_unflag !== undefined && object.max_hashes_per_unflag !== null) {
      message.maxHashesPerUnflag = object.max_hashes_per_unflag;
    }
    if (object.max_url_bytes !== undefined && object.max_url_bytes !== null) {
      message.maxUrlBytes = object.max_url_bytes;
    }
    if (object.max_reason_bytes !== undefined && object.max_reason_bytes !== null) {
      message.maxReasonBytes = object.max_reason_bytes;
    }
    if (object.max_barred_per_request !== undefined && object.max_barred_per_request !== null) {
      message.maxBarredPerRequest = object.max_barred_per_request;
    }
    if (object.max_open_requests_per_requester !== undefined && object.max_open_requests_per_requester !== null) {
      message.maxOpenRequestsPerRequester = object.max_open_requests_per_requester;
    }
    if (object.max_deadlines_per_block !== undefined && object.max_deadlines_per_block !== null) {
      message.maxDeadlinesPerBlock = object.max_deadlines_per_block;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.min_requester_trust_level = message.minRequesterTrustLevel === 0 ? undefined : message.minRequesterTrustLevel;
    obj.request_fee = message.requestFee ?? "";
    obj.request_ttl_blocks = message.requestTtlBlocks !== BigInt(0) ? message.requestTtlBlocks?.toString() : undefined;
    obj.claim_window_blocks = message.claimWindowBlocks !== BigInt(0) ? message.claimWindowBlocks?.toString() : undefined;
    obj.settle_window_blocks = message.settleWindowBlocks !== BigInt(0) ? message.settleWindowBlocks?.toString() : undefined;
    obj.dispute_window_blocks = message.disputeWindowBlocks !== BigInt(0) ? message.disputeWindowBlocks?.toString() : undefined;
    obj.flag_hold_blocks = message.flagHoldBlocks !== BigInt(0) ? message.flagHoldBlocks?.toString() : undefined;
    obj.min_unreachable_blocks = message.minUnreachableBlocks !== BigInt(0) ? message.minUnreachableBlocks?.toString() : undefined;
    obj.terminal_retention_blocks = message.terminalRetentionBlocks !== BigInt(0) ? message.terminalRetentionBlocks?.toString() : undefined;
    obj.counter_window_blocks = message.counterWindowBlocks !== BigInt(0) ? message.counterWindowBlocks?.toString() : undefined;
    obj.deadline_retry_blocks = message.deadlineRetryBlocks !== BigInt(0) ? message.deadlineRetryBlocks?.toString() : undefined;
    obj.max_sources_per_request = message.maxSourcesPerRequest === 0 ? undefined : message.maxSourcesPerRequest;
    obj.max_attestations_per_completion = message.maxAttestationsPerCompletion === 0 ? undefined : message.maxAttestationsPerCompletion;
    obj.max_operators_per_backend = message.maxOperatorsPerBackend === 0 ? undefined : message.maxOperatorsPerBackend;
    obj.max_approved_scanners = message.maxApprovedScanners === 0 ? undefined : message.maxApprovedScanners;
    obj.max_open_claims_per_operator = message.maxOpenClaimsPerOperator === 0 ? undefined : message.maxOpenClaimsPerOperator;
    obj.max_lapses_per_window = message.maxLapsesPerWindow === 0 ? undefined : message.maxLapsesPerWindow;
    obj.max_mismatch_declines_per_operator_per_window = message.maxMismatchDeclinesPerOperatorPerWindow === 0 ? undefined : message.maxMismatchDeclinesPerOperatorPerWindow;
    obj.max_unreachable_declines_per_operator_per_window = message.maxUnreachableDeclinesPerOperatorPerWindow === 0 ? undefined : message.maxUnreachableDeclinesPerOperatorPerWindow;
    obj.max_completions_per_operator_per_window = message.maxCompletionsPerOperatorPerWindow === 0 ? undefined : message.maxCompletionsPerOperatorPerWindow;
    obj.max_flags_per_scanner_per_window = message.maxFlagsPerScannerPerWindow === 0 ? undefined : message.maxFlagsPerScannerPerWindow;
    obj.max_flags_per_hash = message.maxFlagsPerHash === 0 ? undefined : message.maxFlagsPerHash;
    obj.max_hashes_per_unflag = message.maxHashesPerUnflag === 0 ? undefined : message.maxHashesPerUnflag;
    obj.max_url_bytes = message.maxUrlBytes === 0 ? undefined : message.maxUrlBytes;
    obj.max_reason_bytes = message.maxReasonBytes === 0 ? undefined : message.maxReasonBytes;
    obj.max_barred_per_request = message.maxBarredPerRequest === 0 ? undefined : message.maxBarredPerRequest;
    obj.max_open_requests_per_requester = message.maxOpenRequestsPerRequester === 0 ? undefined : message.maxOpenRequestsPerRequester;
    obj.max_deadlines_per_block = message.maxDeadlinesPerBlock === 0 ? undefined : message.maxDeadlinesPerBlock;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/storage/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.storage.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};