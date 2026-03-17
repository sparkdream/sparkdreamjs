//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { ShieldedOpRegistration, ShieldedOpRegistrationAmino, DayFunding, DayFundingAmino, ShieldEpochState, ShieldEpochStateAmino, PendingShieldedOp, PendingShieldedOpAmino, TLEKeySet, TLEKeySetAmino, VerificationKey, VerificationKeyAmino, ShieldDecryptionShare, ShieldDecryptionShareAmino, DKGState, DKGStateAmino, DKGContribution, DKGContributionAmino } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * @name QueryParamsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * @name QueryParamsRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * @name QueryParamsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QueryShieldedOpRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpRequest
 */
export interface QueryShieldedOpRequest {
  messageTypeUrl: string;
}
export interface QueryShieldedOpRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpRequest";
  value: Uint8Array;
}
/**
 * @name QueryShieldedOpRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpRequest
 */
export interface QueryShieldedOpRequestAmino {
  message_type_url?: string;
}
export interface QueryShieldedOpRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryShieldedOpRequest";
  value: QueryShieldedOpRequestAmino;
}
/**
 * @name QueryShieldedOpResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpResponse
 */
export interface QueryShieldedOpResponse {
  registration: ShieldedOpRegistration;
}
export interface QueryShieldedOpResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpResponse";
  value: Uint8Array;
}
/**
 * @name QueryShieldedOpResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpResponse
 */
export interface QueryShieldedOpResponseAmino {
  registration?: ShieldedOpRegistrationAmino;
}
export interface QueryShieldedOpResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryShieldedOpResponse";
  value: QueryShieldedOpResponseAmino;
}
/**
 * @name QueryShieldedOpsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpsRequest
 */
export interface QueryShieldedOpsRequest {
  pagination?: PageRequest;
}
export interface QueryShieldedOpsRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpsRequest";
  value: Uint8Array;
}
/**
 * @name QueryShieldedOpsRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpsRequest
 */
export interface QueryShieldedOpsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryShieldedOpsRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryShieldedOpsRequest";
  value: QueryShieldedOpsRequestAmino;
}
/**
 * @name QueryShieldedOpsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpsResponse
 */
export interface QueryShieldedOpsResponse {
  registrations: ShieldedOpRegistration[];
  pagination?: PageResponse;
}
export interface QueryShieldedOpsResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpsResponse";
  value: Uint8Array;
}
/**
 * @name QueryShieldedOpsResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpsResponse
 */
export interface QueryShieldedOpsResponseAmino {
  registrations?: ShieldedOpRegistrationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryShieldedOpsResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryShieldedOpsResponse";
  value: QueryShieldedOpsResponseAmino;
}
/**
 * @name QueryModuleBalanceRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryModuleBalanceRequest
 */
export interface QueryModuleBalanceRequest {}
export interface QueryModuleBalanceRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryModuleBalanceRequest";
  value: Uint8Array;
}
/**
 * @name QueryModuleBalanceRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryModuleBalanceRequest
 */
export interface QueryModuleBalanceRequestAmino {}
export interface QueryModuleBalanceRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryModuleBalanceRequest";
  value: QueryModuleBalanceRequestAmino;
}
/**
 * @name QueryModuleBalanceResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryModuleBalanceResponse
 */
export interface QueryModuleBalanceResponse {
  balance: Coin;
}
export interface QueryModuleBalanceResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryModuleBalanceResponse";
  value: Uint8Array;
}
/**
 * @name QueryModuleBalanceResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryModuleBalanceResponse
 */
export interface QueryModuleBalanceResponseAmino {
  balance?: CoinAmino;
}
export interface QueryModuleBalanceResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryModuleBalanceResponse";
  value: QueryModuleBalanceResponseAmino;
}
/**
 * @name QueryNullifierUsedRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryNullifierUsedRequest
 */
export interface QueryNullifierUsedRequest {
  domain: number;
  scope: bigint;
  nullifierHex: string;
}
export interface QueryNullifierUsedRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryNullifierUsedRequest";
  value: Uint8Array;
}
/**
 * @name QueryNullifierUsedRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryNullifierUsedRequest
 */
export interface QueryNullifierUsedRequestAmino {
  domain?: number;
  scope?: string;
  nullifier_hex?: string;
}
export interface QueryNullifierUsedRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryNullifierUsedRequest";
  value: QueryNullifierUsedRequestAmino;
}
/**
 * @name QueryNullifierUsedResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryNullifierUsedResponse
 */
export interface QueryNullifierUsedResponse {
  used: boolean;
  usedAtHeight: bigint;
}
export interface QueryNullifierUsedResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryNullifierUsedResponse";
  value: Uint8Array;
}
/**
 * @name QueryNullifierUsedResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryNullifierUsedResponse
 */
export interface QueryNullifierUsedResponseAmino {
  used?: boolean;
  used_at_height?: string;
}
export interface QueryNullifierUsedResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryNullifierUsedResponse";
  value: QueryNullifierUsedResponseAmino;
}
/**
 * @name QueryDayFundingRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDayFundingRequest
 */
export interface QueryDayFundingRequest {
  day: bigint;
}
export interface QueryDayFundingRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDayFundingRequest";
  value: Uint8Array;
}
/**
 * @name QueryDayFundingRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDayFundingRequest
 */
export interface QueryDayFundingRequestAmino {
  day?: string;
}
export interface QueryDayFundingRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryDayFundingRequest";
  value: QueryDayFundingRequestAmino;
}
/**
 * @name QueryDayFundingResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDayFundingResponse
 */
export interface QueryDayFundingResponse {
  dayFunding: DayFunding;
}
export interface QueryDayFundingResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDayFundingResponse";
  value: Uint8Array;
}
/**
 * @name QueryDayFundingResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDayFundingResponse
 */
export interface QueryDayFundingResponseAmino {
  day_funding?: DayFundingAmino;
}
export interface QueryDayFundingResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryDayFundingResponse";
  value: QueryDayFundingResponseAmino;
}
/**
 * @name QueryShieldEpochRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldEpochRequest
 */
export interface QueryShieldEpochRequest {}
export interface QueryShieldEpochRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryShieldEpochRequest";
  value: Uint8Array;
}
/**
 * @name QueryShieldEpochRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldEpochRequest
 */
export interface QueryShieldEpochRequestAmino {}
export interface QueryShieldEpochRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryShieldEpochRequest";
  value: QueryShieldEpochRequestAmino;
}
/**
 * @name QueryShieldEpochResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldEpochResponse
 */
export interface QueryShieldEpochResponse {
  epochState: ShieldEpochState;
}
export interface QueryShieldEpochResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryShieldEpochResponse";
  value: Uint8Array;
}
/**
 * @name QueryShieldEpochResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldEpochResponse
 */
export interface QueryShieldEpochResponseAmino {
  epoch_state?: ShieldEpochStateAmino;
}
export interface QueryShieldEpochResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryShieldEpochResponse";
  value: QueryShieldEpochResponseAmino;
}
/**
 * @name QueryPendingOpsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpsRequest
 */
export interface QueryPendingOpsRequest {
  /**
   * optional filter; 0 = all epochs
   */
  epoch: bigint;
  pagination?: PageRequest;
}
export interface QueryPendingOpsRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpsRequest";
  value: Uint8Array;
}
/**
 * @name QueryPendingOpsRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpsRequest
 */
export interface QueryPendingOpsRequestAmino {
  /**
   * optional filter; 0 = all epochs
   */
  epoch?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPendingOpsRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryPendingOpsRequest";
  value: QueryPendingOpsRequestAmino;
}
/**
 * @name QueryPendingOpsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpsResponse
 */
export interface QueryPendingOpsResponse {
  pendingOps: PendingShieldedOp[];
  pagination?: PageResponse;
}
export interface QueryPendingOpsResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpsResponse";
  value: Uint8Array;
}
/**
 * @name QueryPendingOpsResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpsResponse
 */
export interface QueryPendingOpsResponseAmino {
  pending_ops?: PendingShieldedOpAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPendingOpsResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryPendingOpsResponse";
  value: QueryPendingOpsResponseAmino;
}
/**
 * @name QueryPendingOpCountRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpCountRequest
 */
export interface QueryPendingOpCountRequest {}
export interface QueryPendingOpCountRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpCountRequest";
  value: Uint8Array;
}
/**
 * @name QueryPendingOpCountRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpCountRequest
 */
export interface QueryPendingOpCountRequestAmino {}
export interface QueryPendingOpCountRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryPendingOpCountRequest";
  value: QueryPendingOpCountRequestAmino;
}
/**
 * @name QueryPendingOpCountResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpCountResponse
 */
export interface QueryPendingOpCountResponse {
  count: bigint;
}
export interface QueryPendingOpCountResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpCountResponse";
  value: Uint8Array;
}
/**
 * @name QueryPendingOpCountResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpCountResponse
 */
export interface QueryPendingOpCountResponseAmino {
  count?: string;
}
export interface QueryPendingOpCountResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryPendingOpCountResponse";
  value: QueryPendingOpCountResponseAmino;
}
/**
 * @name QueryTLEMasterPublicKeyRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest
 */
export interface QueryTLEMasterPublicKeyRequest {}
export interface QueryTLEMasterPublicKeyRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest";
  value: Uint8Array;
}
/**
 * @name QueryTLEMasterPublicKeyRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest
 */
export interface QueryTLEMasterPublicKeyRequestAmino {}
export interface QueryTLEMasterPublicKeyRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest";
  value: QueryTLEMasterPublicKeyRequestAmino;
}
/**
 * @name QueryTLEMasterPublicKeyResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse
 */
export interface QueryTLEMasterPublicKeyResponse {
  masterPublicKey: Uint8Array;
}
export interface QueryTLEMasterPublicKeyResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse";
  value: Uint8Array;
}
/**
 * @name QueryTLEMasterPublicKeyResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse
 */
export interface QueryTLEMasterPublicKeyResponseAmino {
  master_public_key?: string;
}
export interface QueryTLEMasterPublicKeyResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse";
  value: QueryTLEMasterPublicKeyResponseAmino;
}
/**
 * @name QueryTLEKeySetRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEKeySetRequest
 */
export interface QueryTLEKeySetRequest {}
export interface QueryTLEKeySetRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryTLEKeySetRequest";
  value: Uint8Array;
}
/**
 * @name QueryTLEKeySetRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEKeySetRequest
 */
export interface QueryTLEKeySetRequestAmino {}
export interface QueryTLEKeySetRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryTLEKeySetRequest";
  value: QueryTLEKeySetRequestAmino;
}
/**
 * @name QueryTLEKeySetResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEKeySetResponse
 */
export interface QueryTLEKeySetResponse {
  keySet: TLEKeySet;
}
export interface QueryTLEKeySetResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryTLEKeySetResponse";
  value: Uint8Array;
}
/**
 * @name QueryTLEKeySetResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEKeySetResponse
 */
export interface QueryTLEKeySetResponseAmino {
  key_set?: TLEKeySetAmino;
}
export interface QueryTLEKeySetResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryTLEKeySetResponse";
  value: QueryTLEKeySetResponseAmino;
}
/**
 * @name QueryVerificationKeyRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryVerificationKeyRequest
 */
export interface QueryVerificationKeyRequest {
  circuitId: string;
}
export interface QueryVerificationKeyRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryVerificationKeyRequest";
  value: Uint8Array;
}
/**
 * @name QueryVerificationKeyRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryVerificationKeyRequest
 */
export interface QueryVerificationKeyRequestAmino {
  circuit_id?: string;
}
export interface QueryVerificationKeyRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryVerificationKeyRequest";
  value: QueryVerificationKeyRequestAmino;
}
/**
 * @name QueryVerificationKeyResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryVerificationKeyResponse
 */
export interface QueryVerificationKeyResponse {
  verificationKey: VerificationKey;
}
export interface QueryVerificationKeyResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryVerificationKeyResponse";
  value: Uint8Array;
}
/**
 * @name QueryVerificationKeyResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryVerificationKeyResponse
 */
export interface QueryVerificationKeyResponseAmino {
  verification_key?: VerificationKeyAmino;
}
export interface QueryVerificationKeyResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryVerificationKeyResponse";
  value: QueryVerificationKeyResponseAmino;
}
/**
 * @name QueryTLEMissCountRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMissCountRequest
 */
export interface QueryTLEMissCountRequest {
  validatorAddress: string;
}
export interface QueryTLEMissCountRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMissCountRequest";
  value: Uint8Array;
}
/**
 * @name QueryTLEMissCountRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMissCountRequest
 */
export interface QueryTLEMissCountRequestAmino {
  validator_address?: string;
}
export interface QueryTLEMissCountRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryTLEMissCountRequest";
  value: QueryTLEMissCountRequestAmino;
}
/**
 * @name QueryTLEMissCountResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMissCountResponse
 */
export interface QueryTLEMissCountResponse {
  missCount: bigint;
}
export interface QueryTLEMissCountResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMissCountResponse";
  value: Uint8Array;
}
/**
 * @name QueryTLEMissCountResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMissCountResponse
 */
export interface QueryTLEMissCountResponseAmino {
  miss_count?: string;
}
export interface QueryTLEMissCountResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryTLEMissCountResponse";
  value: QueryTLEMissCountResponseAmino;
}
/**
 * @name QueryDecryptionSharesRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDecryptionSharesRequest
 */
export interface QueryDecryptionSharesRequest {
  epoch: bigint;
}
export interface QueryDecryptionSharesRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDecryptionSharesRequest";
  value: Uint8Array;
}
/**
 * @name QueryDecryptionSharesRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDecryptionSharesRequest
 */
export interface QueryDecryptionSharesRequestAmino {
  epoch?: string;
}
export interface QueryDecryptionSharesRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryDecryptionSharesRequest";
  value: QueryDecryptionSharesRequestAmino;
}
/**
 * @name QueryDecryptionSharesResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDecryptionSharesResponse
 */
export interface QueryDecryptionSharesResponse {
  shares: ShieldDecryptionShare[];
}
export interface QueryDecryptionSharesResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDecryptionSharesResponse";
  value: Uint8Array;
}
/**
 * @name QueryDecryptionSharesResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDecryptionSharesResponse
 */
export interface QueryDecryptionSharesResponseAmino {
  shares?: ShieldDecryptionShareAmino[];
}
export interface QueryDecryptionSharesResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryDecryptionSharesResponse";
  value: QueryDecryptionSharesResponseAmino;
}
/**
 * @name QueryIdentityRateLimitRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryIdentityRateLimitRequest
 */
export interface QueryIdentityRateLimitRequest {
  rateLimitNullifierHex: string;
}
export interface QueryIdentityRateLimitRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryIdentityRateLimitRequest";
  value: Uint8Array;
}
/**
 * @name QueryIdentityRateLimitRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryIdentityRateLimitRequest
 */
export interface QueryIdentityRateLimitRequestAmino {
  rate_limit_nullifier_hex?: string;
}
export interface QueryIdentityRateLimitRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryIdentityRateLimitRequest";
  value: QueryIdentityRateLimitRequestAmino;
}
/**
 * @name QueryIdentityRateLimitResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryIdentityRateLimitResponse
 */
export interface QueryIdentityRateLimitResponse {
  usedCount: bigint;
  maxCount: bigint;
  remaining: bigint;
}
export interface QueryIdentityRateLimitResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryIdentityRateLimitResponse";
  value: Uint8Array;
}
/**
 * @name QueryIdentityRateLimitResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryIdentityRateLimitResponse
 */
export interface QueryIdentityRateLimitResponseAmino {
  used_count?: string;
  max_count?: string;
  remaining?: string;
}
export interface QueryIdentityRateLimitResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryIdentityRateLimitResponse";
  value: QueryIdentityRateLimitResponseAmino;
}
/**
 * @name QueryDKGStateRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGStateRequest
 */
export interface QueryDKGStateRequest {}
export interface QueryDKGStateRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDKGStateRequest";
  value: Uint8Array;
}
/**
 * @name QueryDKGStateRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGStateRequest
 */
export interface QueryDKGStateRequestAmino {}
export interface QueryDKGStateRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryDKGStateRequest";
  value: QueryDKGStateRequestAmino;
}
/**
 * @name QueryDKGStateResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGStateResponse
 */
export interface QueryDKGStateResponse {
  dkgState: DKGState;
}
export interface QueryDKGStateResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDKGStateResponse";
  value: Uint8Array;
}
/**
 * @name QueryDKGStateResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGStateResponse
 */
export interface QueryDKGStateResponseAmino {
  dkg_state?: DKGStateAmino;
}
export interface QueryDKGStateResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryDKGStateResponse";
  value: QueryDKGStateResponseAmino;
}
/**
 * @name QueryDKGContributionsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGContributionsRequest
 */
export interface QueryDKGContributionsRequest {}
export interface QueryDKGContributionsRequestProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDKGContributionsRequest";
  value: Uint8Array;
}
/**
 * @name QueryDKGContributionsRequestAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGContributionsRequest
 */
export interface QueryDKGContributionsRequestAmino {}
export interface QueryDKGContributionsRequestAminoMsg {
  type: "/sparkdream.shield.v1.QueryDKGContributionsRequest";
  value: QueryDKGContributionsRequestAmino;
}
/**
 * @name QueryDKGContributionsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGContributionsResponse
 */
export interface QueryDKGContributionsResponse {
  contributions: DKGContribution[];
}
export interface QueryDKGContributionsResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.QueryDKGContributionsResponse";
  value: Uint8Array;
}
/**
 * @name QueryDKGContributionsResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGContributionsResponse
 */
export interface QueryDKGContributionsResponseAmino {
  contributions?: DKGContributionAmino[];
}
export interface QueryDKGContributionsResponseAminoMsg {
  type: "/sparkdream.shield.v1.QueryDKGContributionsResponse";
  value: QueryDKGContributionsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * @name QueryParamsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * @name QueryParamsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShieldedOpRequest(): QueryShieldedOpRequest {
  return {
    messageTypeUrl: ""
  };
}
/**
 * @name QueryShieldedOpRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpRequest
 */
export const QueryShieldedOpRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpRequest",
  encode(message: QueryShieldedOpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageTypeUrl !== "") {
      writer.uint32(10).string(message.messageTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShieldedOpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShieldedOpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShieldedOpRequest>): QueryShieldedOpRequest {
    const message = createBaseQueryShieldedOpRequest();
    message.messageTypeUrl = object.messageTypeUrl ?? "";
    return message;
  },
  fromAmino(object: QueryShieldedOpRequestAmino): QueryShieldedOpRequest {
    const message = createBaseQueryShieldedOpRequest();
    if (object.message_type_url !== undefined && object.message_type_url !== null) {
      message.messageTypeUrl = object.message_type_url;
    }
    return message;
  },
  toAmino(message: QueryShieldedOpRequest): QueryShieldedOpRequestAmino {
    const obj: any = {};
    obj.message_type_url = message.messageTypeUrl === "" ? undefined : message.messageTypeUrl;
    return obj;
  },
  fromAminoMsg(object: QueryShieldedOpRequestAminoMsg): QueryShieldedOpRequest {
    return QueryShieldedOpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldedOpRequestProtoMsg): QueryShieldedOpRequest {
    return QueryShieldedOpRequest.decode(message.value);
  },
  toProto(message: QueryShieldedOpRequest): Uint8Array {
    return QueryShieldedOpRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldedOpRequest): QueryShieldedOpRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryShieldedOpRequest",
      value: QueryShieldedOpRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShieldedOpResponse(): QueryShieldedOpResponse {
  return {
    registration: ShieldedOpRegistration.fromPartial({})
  };
}
/**
 * @name QueryShieldedOpResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpResponse
 */
export const QueryShieldedOpResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpResponse",
  encode(message: QueryShieldedOpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registration !== undefined) {
      ShieldedOpRegistration.encode(message.registration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShieldedOpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShieldedOpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registration = ShieldedOpRegistration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShieldedOpResponse>): QueryShieldedOpResponse {
    const message = createBaseQueryShieldedOpResponse();
    message.registration = object.registration !== undefined && object.registration !== null ? ShieldedOpRegistration.fromPartial(object.registration) : undefined;
    return message;
  },
  fromAmino(object: QueryShieldedOpResponseAmino): QueryShieldedOpResponse {
    const message = createBaseQueryShieldedOpResponse();
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = ShieldedOpRegistration.fromAmino(object.registration);
    }
    return message;
  },
  toAmino(message: QueryShieldedOpResponse): QueryShieldedOpResponseAmino {
    const obj: any = {};
    obj.registration = message.registration ? ShieldedOpRegistration.toAmino(message.registration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShieldedOpResponseAminoMsg): QueryShieldedOpResponse {
    return QueryShieldedOpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldedOpResponseProtoMsg): QueryShieldedOpResponse {
    return QueryShieldedOpResponse.decode(message.value);
  },
  toProto(message: QueryShieldedOpResponse): Uint8Array {
    return QueryShieldedOpResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldedOpResponse): QueryShieldedOpResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryShieldedOpResponse",
      value: QueryShieldedOpResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShieldedOpsRequest(): QueryShieldedOpsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryShieldedOpsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpsRequest
 */
export const QueryShieldedOpsRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpsRequest",
  encode(message: QueryShieldedOpsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShieldedOpsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShieldedOpsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShieldedOpsRequest>): QueryShieldedOpsRequest {
    const message = createBaseQueryShieldedOpsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryShieldedOpsRequestAmino): QueryShieldedOpsRequest {
    const message = createBaseQueryShieldedOpsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryShieldedOpsRequest): QueryShieldedOpsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShieldedOpsRequestAminoMsg): QueryShieldedOpsRequest {
    return QueryShieldedOpsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldedOpsRequestProtoMsg): QueryShieldedOpsRequest {
    return QueryShieldedOpsRequest.decode(message.value);
  },
  toProto(message: QueryShieldedOpsRequest): Uint8Array {
    return QueryShieldedOpsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldedOpsRequest): QueryShieldedOpsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryShieldedOpsRequest",
      value: QueryShieldedOpsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShieldedOpsResponse(): QueryShieldedOpsResponse {
  return {
    registrations: [],
    pagination: undefined
  };
}
/**
 * @name QueryShieldedOpsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldedOpsResponse
 */
export const QueryShieldedOpsResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryShieldedOpsResponse",
  encode(message: QueryShieldedOpsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registrations) {
      ShieldedOpRegistration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShieldedOpsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShieldedOpsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registrations.push(ShieldedOpRegistration.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShieldedOpsResponse>): QueryShieldedOpsResponse {
    const message = createBaseQueryShieldedOpsResponse();
    message.registrations = object.registrations?.map(e => ShieldedOpRegistration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryShieldedOpsResponseAmino): QueryShieldedOpsResponse {
    const message = createBaseQueryShieldedOpsResponse();
    message.registrations = object.registrations?.map(e => ShieldedOpRegistration.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryShieldedOpsResponse): QueryShieldedOpsResponseAmino {
    const obj: any = {};
    if (message.registrations) {
      obj.registrations = message.registrations.map(e => e ? ShieldedOpRegistration.toAmino(e) : undefined);
    } else {
      obj.registrations = message.registrations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShieldedOpsResponseAminoMsg): QueryShieldedOpsResponse {
    return QueryShieldedOpsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldedOpsResponseProtoMsg): QueryShieldedOpsResponse {
    return QueryShieldedOpsResponse.decode(message.value);
  },
  toProto(message: QueryShieldedOpsResponse): Uint8Array {
    return QueryShieldedOpsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldedOpsResponse): QueryShieldedOpsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryShieldedOpsResponse",
      value: QueryShieldedOpsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleBalanceRequest(): QueryModuleBalanceRequest {
  return {};
}
/**
 * @name QueryModuleBalanceRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryModuleBalanceRequest
 */
export const QueryModuleBalanceRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryModuleBalanceRequest",
  encode(_: QueryModuleBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleBalanceRequest();
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
  fromPartial(_: DeepPartial<QueryModuleBalanceRequest>): QueryModuleBalanceRequest {
    const message = createBaseQueryModuleBalanceRequest();
    return message;
  },
  fromAmino(_: QueryModuleBalanceRequestAmino): QueryModuleBalanceRequest {
    const message = createBaseQueryModuleBalanceRequest();
    return message;
  },
  toAmino(_: QueryModuleBalanceRequest): QueryModuleBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleBalanceRequestAminoMsg): QueryModuleBalanceRequest {
    return QueryModuleBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleBalanceRequestProtoMsg): QueryModuleBalanceRequest {
    return QueryModuleBalanceRequest.decode(message.value);
  },
  toProto(message: QueryModuleBalanceRequest): Uint8Array {
    return QueryModuleBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleBalanceRequest): QueryModuleBalanceRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryModuleBalanceRequest",
      value: QueryModuleBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleBalanceResponse(): QueryModuleBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
/**
 * @name QueryModuleBalanceResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryModuleBalanceResponse
 */
export const QueryModuleBalanceResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryModuleBalanceResponse",
  encode(message: QueryModuleBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleBalanceResponse>): QueryModuleBalanceResponse {
    const message = createBaseQueryModuleBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleBalanceResponseAmino): QueryModuleBalanceResponse {
    const message = createBaseQueryModuleBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryModuleBalanceResponse): QueryModuleBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleBalanceResponseAminoMsg): QueryModuleBalanceResponse {
    return QueryModuleBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleBalanceResponseProtoMsg): QueryModuleBalanceResponse {
    return QueryModuleBalanceResponse.decode(message.value);
  },
  toProto(message: QueryModuleBalanceResponse): Uint8Array {
    return QueryModuleBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleBalanceResponse): QueryModuleBalanceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryModuleBalanceResponse",
      value: QueryModuleBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNullifierUsedRequest(): QueryNullifierUsedRequest {
  return {
    domain: 0,
    scope: BigInt(0),
    nullifierHex: ""
  };
}
/**
 * @name QueryNullifierUsedRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryNullifierUsedRequest
 */
export const QueryNullifierUsedRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryNullifierUsedRequest",
  encode(message: QueryNullifierUsedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== 0) {
      writer.uint32(8).uint32(message.domain);
    }
    if (message.scope !== BigInt(0)) {
      writer.uint32(16).uint64(message.scope);
    }
    if (message.nullifierHex !== "") {
      writer.uint32(26).string(message.nullifierHex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNullifierUsedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNullifierUsedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.uint32();
          break;
        case 2:
          message.scope = reader.uint64();
          break;
        case 3:
          message.nullifierHex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNullifierUsedRequest>): QueryNullifierUsedRequest {
    const message = createBaseQueryNullifierUsedRequest();
    message.domain = object.domain ?? 0;
    message.scope = object.scope !== undefined && object.scope !== null ? BigInt(object.scope.toString()) : BigInt(0);
    message.nullifierHex = object.nullifierHex ?? "";
    return message;
  },
  fromAmino(object: QueryNullifierUsedRequestAmino): QueryNullifierUsedRequest {
    const message = createBaseQueryNullifierUsedRequest();
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = BigInt(object.scope);
    }
    if (object.nullifier_hex !== undefined && object.nullifier_hex !== null) {
      message.nullifierHex = object.nullifier_hex;
    }
    return message;
  },
  toAmino(message: QueryNullifierUsedRequest): QueryNullifierUsedRequestAmino {
    const obj: any = {};
    obj.domain = message.domain === 0 ? undefined : message.domain;
    obj.scope = message.scope !== BigInt(0) ? message.scope?.toString() : undefined;
    obj.nullifier_hex = message.nullifierHex === "" ? undefined : message.nullifierHex;
    return obj;
  },
  fromAminoMsg(object: QueryNullifierUsedRequestAminoMsg): QueryNullifierUsedRequest {
    return QueryNullifierUsedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNullifierUsedRequestProtoMsg): QueryNullifierUsedRequest {
    return QueryNullifierUsedRequest.decode(message.value);
  },
  toProto(message: QueryNullifierUsedRequest): Uint8Array {
    return QueryNullifierUsedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNullifierUsedRequest): QueryNullifierUsedRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryNullifierUsedRequest",
      value: QueryNullifierUsedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNullifierUsedResponse(): QueryNullifierUsedResponse {
  return {
    used: false,
    usedAtHeight: BigInt(0)
  };
}
/**
 * @name QueryNullifierUsedResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryNullifierUsedResponse
 */
export const QueryNullifierUsedResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryNullifierUsedResponse",
  encode(message: QueryNullifierUsedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.used === true) {
      writer.uint32(8).bool(message.used);
    }
    if (message.usedAtHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.usedAtHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNullifierUsedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNullifierUsedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.used = reader.bool();
          break;
        case 2:
          message.usedAtHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNullifierUsedResponse>): QueryNullifierUsedResponse {
    const message = createBaseQueryNullifierUsedResponse();
    message.used = object.used ?? false;
    message.usedAtHeight = object.usedAtHeight !== undefined && object.usedAtHeight !== null ? BigInt(object.usedAtHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNullifierUsedResponseAmino): QueryNullifierUsedResponse {
    const message = createBaseQueryNullifierUsedResponse();
    if (object.used !== undefined && object.used !== null) {
      message.used = object.used;
    }
    if (object.used_at_height !== undefined && object.used_at_height !== null) {
      message.usedAtHeight = BigInt(object.used_at_height);
    }
    return message;
  },
  toAmino(message: QueryNullifierUsedResponse): QueryNullifierUsedResponseAmino {
    const obj: any = {};
    obj.used = message.used === false ? undefined : message.used;
    obj.used_at_height = message.usedAtHeight !== BigInt(0) ? message.usedAtHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNullifierUsedResponseAminoMsg): QueryNullifierUsedResponse {
    return QueryNullifierUsedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNullifierUsedResponseProtoMsg): QueryNullifierUsedResponse {
    return QueryNullifierUsedResponse.decode(message.value);
  },
  toProto(message: QueryNullifierUsedResponse): Uint8Array {
    return QueryNullifierUsedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNullifierUsedResponse): QueryNullifierUsedResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryNullifierUsedResponse",
      value: QueryNullifierUsedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDayFundingRequest(): QueryDayFundingRequest {
  return {
    day: BigInt(0)
  };
}
/**
 * @name QueryDayFundingRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDayFundingRequest
 */
export const QueryDayFundingRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryDayFundingRequest",
  encode(message: QueryDayFundingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.day !== BigInt(0)) {
      writer.uint32(8).uint64(message.day);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDayFundingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDayFundingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.day = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDayFundingRequest>): QueryDayFundingRequest {
    const message = createBaseQueryDayFundingRequest();
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDayFundingRequestAmino): QueryDayFundingRequest {
    const message = createBaseQueryDayFundingRequest();
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    return message;
  },
  toAmino(message: QueryDayFundingRequest): QueryDayFundingRequestAmino {
    const obj: any = {};
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDayFundingRequestAminoMsg): QueryDayFundingRequest {
    return QueryDayFundingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDayFundingRequestProtoMsg): QueryDayFundingRequest {
    return QueryDayFundingRequest.decode(message.value);
  },
  toProto(message: QueryDayFundingRequest): Uint8Array {
    return QueryDayFundingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDayFundingRequest): QueryDayFundingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDayFundingRequest",
      value: QueryDayFundingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDayFundingResponse(): QueryDayFundingResponse {
  return {
    dayFunding: DayFunding.fromPartial({})
  };
}
/**
 * @name QueryDayFundingResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDayFundingResponse
 */
export const QueryDayFundingResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryDayFundingResponse",
  encode(message: QueryDayFundingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dayFunding !== undefined) {
      DayFunding.encode(message.dayFunding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDayFundingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDayFundingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dayFunding = DayFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDayFundingResponse>): QueryDayFundingResponse {
    const message = createBaseQueryDayFundingResponse();
    message.dayFunding = object.dayFunding !== undefined && object.dayFunding !== null ? DayFunding.fromPartial(object.dayFunding) : undefined;
    return message;
  },
  fromAmino(object: QueryDayFundingResponseAmino): QueryDayFundingResponse {
    const message = createBaseQueryDayFundingResponse();
    if (object.day_funding !== undefined && object.day_funding !== null) {
      message.dayFunding = DayFunding.fromAmino(object.day_funding);
    }
    return message;
  },
  toAmino(message: QueryDayFundingResponse): QueryDayFundingResponseAmino {
    const obj: any = {};
    obj.day_funding = message.dayFunding ? DayFunding.toAmino(message.dayFunding) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDayFundingResponseAminoMsg): QueryDayFundingResponse {
    return QueryDayFundingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDayFundingResponseProtoMsg): QueryDayFundingResponse {
    return QueryDayFundingResponse.decode(message.value);
  },
  toProto(message: QueryDayFundingResponse): Uint8Array {
    return QueryDayFundingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDayFundingResponse): QueryDayFundingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDayFundingResponse",
      value: QueryDayFundingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShieldEpochRequest(): QueryShieldEpochRequest {
  return {};
}
/**
 * @name QueryShieldEpochRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldEpochRequest
 */
export const QueryShieldEpochRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryShieldEpochRequest",
  encode(_: QueryShieldEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShieldEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShieldEpochRequest();
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
  fromPartial(_: DeepPartial<QueryShieldEpochRequest>): QueryShieldEpochRequest {
    const message = createBaseQueryShieldEpochRequest();
    return message;
  },
  fromAmino(_: QueryShieldEpochRequestAmino): QueryShieldEpochRequest {
    const message = createBaseQueryShieldEpochRequest();
    return message;
  },
  toAmino(_: QueryShieldEpochRequest): QueryShieldEpochRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryShieldEpochRequestAminoMsg): QueryShieldEpochRequest {
    return QueryShieldEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldEpochRequestProtoMsg): QueryShieldEpochRequest {
    return QueryShieldEpochRequest.decode(message.value);
  },
  toProto(message: QueryShieldEpochRequest): Uint8Array {
    return QueryShieldEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldEpochRequest): QueryShieldEpochRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryShieldEpochRequest",
      value: QueryShieldEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShieldEpochResponse(): QueryShieldEpochResponse {
  return {
    epochState: ShieldEpochState.fromPartial({})
  };
}
/**
 * @name QueryShieldEpochResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryShieldEpochResponse
 */
export const QueryShieldEpochResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryShieldEpochResponse",
  encode(message: QueryShieldEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochState !== undefined) {
      ShieldEpochState.encode(message.epochState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShieldEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShieldEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochState = ShieldEpochState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShieldEpochResponse>): QueryShieldEpochResponse {
    const message = createBaseQueryShieldEpochResponse();
    message.epochState = object.epochState !== undefined && object.epochState !== null ? ShieldEpochState.fromPartial(object.epochState) : undefined;
    return message;
  },
  fromAmino(object: QueryShieldEpochResponseAmino): QueryShieldEpochResponse {
    const message = createBaseQueryShieldEpochResponse();
    if (object.epoch_state !== undefined && object.epoch_state !== null) {
      message.epochState = ShieldEpochState.fromAmino(object.epoch_state);
    }
    return message;
  },
  toAmino(message: QueryShieldEpochResponse): QueryShieldEpochResponseAmino {
    const obj: any = {};
    obj.epoch_state = message.epochState ? ShieldEpochState.toAmino(message.epochState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShieldEpochResponseAminoMsg): QueryShieldEpochResponse {
    return QueryShieldEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldEpochResponseProtoMsg): QueryShieldEpochResponse {
    return QueryShieldEpochResponse.decode(message.value);
  },
  toProto(message: QueryShieldEpochResponse): Uint8Array {
    return QueryShieldEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldEpochResponse): QueryShieldEpochResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryShieldEpochResponse",
      value: QueryShieldEpochResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingOpsRequest(): QueryPendingOpsRequest {
  return {
    epoch: BigInt(0),
    pagination: undefined
  };
}
/**
 * @name QueryPendingOpsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpsRequest
 */
export const QueryPendingOpsRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpsRequest",
  encode(message: QueryPendingOpsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingOpsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingOpsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingOpsRequest>): QueryPendingOpsRequest {
    const message = createBaseQueryPendingOpsRequest();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPendingOpsRequestAmino): QueryPendingOpsRequest {
    const message = createBaseQueryPendingOpsRequest();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPendingOpsRequest): QueryPendingOpsRequestAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingOpsRequestAminoMsg): QueryPendingOpsRequest {
    return QueryPendingOpsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingOpsRequestProtoMsg): QueryPendingOpsRequest {
    return QueryPendingOpsRequest.decode(message.value);
  },
  toProto(message: QueryPendingOpsRequest): Uint8Array {
    return QueryPendingOpsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingOpsRequest): QueryPendingOpsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryPendingOpsRequest",
      value: QueryPendingOpsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingOpsResponse(): QueryPendingOpsResponse {
  return {
    pendingOps: [],
    pagination: undefined
  };
}
/**
 * @name QueryPendingOpsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpsResponse
 */
export const QueryPendingOpsResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpsResponse",
  encode(message: QueryPendingOpsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingOps) {
      PendingShieldedOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingOpsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingOpsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingOps.push(PendingShieldedOp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingOpsResponse>): QueryPendingOpsResponse {
    const message = createBaseQueryPendingOpsResponse();
    message.pendingOps = object.pendingOps?.map(e => PendingShieldedOp.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPendingOpsResponseAmino): QueryPendingOpsResponse {
    const message = createBaseQueryPendingOpsResponse();
    message.pendingOps = object.pending_ops?.map(e => PendingShieldedOp.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPendingOpsResponse): QueryPendingOpsResponseAmino {
    const obj: any = {};
    if (message.pendingOps) {
      obj.pending_ops = message.pendingOps.map(e => e ? PendingShieldedOp.toAmino(e) : undefined);
    } else {
      obj.pending_ops = message.pendingOps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingOpsResponseAminoMsg): QueryPendingOpsResponse {
    return QueryPendingOpsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingOpsResponseProtoMsg): QueryPendingOpsResponse {
    return QueryPendingOpsResponse.decode(message.value);
  },
  toProto(message: QueryPendingOpsResponse): Uint8Array {
    return QueryPendingOpsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingOpsResponse): QueryPendingOpsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryPendingOpsResponse",
      value: QueryPendingOpsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingOpCountRequest(): QueryPendingOpCountRequest {
  return {};
}
/**
 * @name QueryPendingOpCountRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpCountRequest
 */
export const QueryPendingOpCountRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpCountRequest",
  encode(_: QueryPendingOpCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingOpCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingOpCountRequest();
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
  fromPartial(_: DeepPartial<QueryPendingOpCountRequest>): QueryPendingOpCountRequest {
    const message = createBaseQueryPendingOpCountRequest();
    return message;
  },
  fromAmino(_: QueryPendingOpCountRequestAmino): QueryPendingOpCountRequest {
    const message = createBaseQueryPendingOpCountRequest();
    return message;
  },
  toAmino(_: QueryPendingOpCountRequest): QueryPendingOpCountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPendingOpCountRequestAminoMsg): QueryPendingOpCountRequest {
    return QueryPendingOpCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingOpCountRequestProtoMsg): QueryPendingOpCountRequest {
    return QueryPendingOpCountRequest.decode(message.value);
  },
  toProto(message: QueryPendingOpCountRequest): Uint8Array {
    return QueryPendingOpCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingOpCountRequest): QueryPendingOpCountRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryPendingOpCountRequest",
      value: QueryPendingOpCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingOpCountResponse(): QueryPendingOpCountResponse {
  return {
    count: BigInt(0)
  };
}
/**
 * @name QueryPendingOpCountResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryPendingOpCountResponse
 */
export const QueryPendingOpCountResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryPendingOpCountResponse",
  encode(message: QueryPendingOpCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== BigInt(0)) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingOpCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingOpCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingOpCountResponse>): QueryPendingOpCountResponse {
    const message = createBaseQueryPendingOpCountResponse();
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPendingOpCountResponseAmino): QueryPendingOpCountResponse {
    const message = createBaseQueryPendingOpCountResponse();
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: QueryPendingOpCountResponse): QueryPendingOpCountResponseAmino {
    const obj: any = {};
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingOpCountResponseAminoMsg): QueryPendingOpCountResponse {
    return QueryPendingOpCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingOpCountResponseProtoMsg): QueryPendingOpCountResponse {
    return QueryPendingOpCountResponse.decode(message.value);
  },
  toProto(message: QueryPendingOpCountResponse): Uint8Array {
    return QueryPendingOpCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingOpCountResponse): QueryPendingOpCountResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryPendingOpCountResponse",
      value: QueryPendingOpCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTLEMasterPublicKeyRequest(): QueryTLEMasterPublicKeyRequest {
  return {};
}
/**
 * @name QueryTLEMasterPublicKeyRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest
 */
export const QueryTLEMasterPublicKeyRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest",
  encode(_: QueryTLEMasterPublicKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTLEMasterPublicKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTLEMasterPublicKeyRequest();
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
  fromPartial(_: DeepPartial<QueryTLEMasterPublicKeyRequest>): QueryTLEMasterPublicKeyRequest {
    const message = createBaseQueryTLEMasterPublicKeyRequest();
    return message;
  },
  fromAmino(_: QueryTLEMasterPublicKeyRequestAmino): QueryTLEMasterPublicKeyRequest {
    const message = createBaseQueryTLEMasterPublicKeyRequest();
    return message;
  },
  toAmino(_: QueryTLEMasterPublicKeyRequest): QueryTLEMasterPublicKeyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTLEMasterPublicKeyRequestAminoMsg): QueryTLEMasterPublicKeyRequest {
    return QueryTLEMasterPublicKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTLEMasterPublicKeyRequestProtoMsg): QueryTLEMasterPublicKeyRequest {
    return QueryTLEMasterPublicKeyRequest.decode(message.value);
  },
  toProto(message: QueryTLEMasterPublicKeyRequest): Uint8Array {
    return QueryTLEMasterPublicKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTLEMasterPublicKeyRequest): QueryTLEMasterPublicKeyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyRequest",
      value: QueryTLEMasterPublicKeyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTLEMasterPublicKeyResponse(): QueryTLEMasterPublicKeyResponse {
  return {
    masterPublicKey: new Uint8Array()
  };
}
/**
 * @name QueryTLEMasterPublicKeyResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse
 */
export const QueryTLEMasterPublicKeyResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse",
  encode(message: QueryTLEMasterPublicKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterPublicKey.length !== 0) {
      writer.uint32(10).bytes(message.masterPublicKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTLEMasterPublicKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTLEMasterPublicKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterPublicKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTLEMasterPublicKeyResponse>): QueryTLEMasterPublicKeyResponse {
    const message = createBaseQueryTLEMasterPublicKeyResponse();
    message.masterPublicKey = object.masterPublicKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTLEMasterPublicKeyResponseAmino): QueryTLEMasterPublicKeyResponse {
    const message = createBaseQueryTLEMasterPublicKeyResponse();
    if (object.master_public_key !== undefined && object.master_public_key !== null) {
      message.masterPublicKey = bytesFromBase64(object.master_public_key);
    }
    return message;
  },
  toAmino(message: QueryTLEMasterPublicKeyResponse): QueryTLEMasterPublicKeyResponseAmino {
    const obj: any = {};
    obj.master_public_key = message.masterPublicKey ? base64FromBytes(message.masterPublicKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTLEMasterPublicKeyResponseAminoMsg): QueryTLEMasterPublicKeyResponse {
    return QueryTLEMasterPublicKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTLEMasterPublicKeyResponseProtoMsg): QueryTLEMasterPublicKeyResponse {
    return QueryTLEMasterPublicKeyResponse.decode(message.value);
  },
  toProto(message: QueryTLEMasterPublicKeyResponse): Uint8Array {
    return QueryTLEMasterPublicKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTLEMasterPublicKeyResponse): QueryTLEMasterPublicKeyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryTLEMasterPublicKeyResponse",
      value: QueryTLEMasterPublicKeyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTLEKeySetRequest(): QueryTLEKeySetRequest {
  return {};
}
/**
 * @name QueryTLEKeySetRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEKeySetRequest
 */
export const QueryTLEKeySetRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryTLEKeySetRequest",
  encode(_: QueryTLEKeySetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTLEKeySetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTLEKeySetRequest();
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
  fromPartial(_: DeepPartial<QueryTLEKeySetRequest>): QueryTLEKeySetRequest {
    const message = createBaseQueryTLEKeySetRequest();
    return message;
  },
  fromAmino(_: QueryTLEKeySetRequestAmino): QueryTLEKeySetRequest {
    const message = createBaseQueryTLEKeySetRequest();
    return message;
  },
  toAmino(_: QueryTLEKeySetRequest): QueryTLEKeySetRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTLEKeySetRequestAminoMsg): QueryTLEKeySetRequest {
    return QueryTLEKeySetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTLEKeySetRequestProtoMsg): QueryTLEKeySetRequest {
    return QueryTLEKeySetRequest.decode(message.value);
  },
  toProto(message: QueryTLEKeySetRequest): Uint8Array {
    return QueryTLEKeySetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTLEKeySetRequest): QueryTLEKeySetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryTLEKeySetRequest",
      value: QueryTLEKeySetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTLEKeySetResponse(): QueryTLEKeySetResponse {
  return {
    keySet: TLEKeySet.fromPartial({})
  };
}
/**
 * @name QueryTLEKeySetResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEKeySetResponse
 */
export const QueryTLEKeySetResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryTLEKeySetResponse",
  encode(message: QueryTLEKeySetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keySet !== undefined) {
      TLEKeySet.encode(message.keySet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTLEKeySetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTLEKeySetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keySet = TLEKeySet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTLEKeySetResponse>): QueryTLEKeySetResponse {
    const message = createBaseQueryTLEKeySetResponse();
    message.keySet = object.keySet !== undefined && object.keySet !== null ? TLEKeySet.fromPartial(object.keySet) : undefined;
    return message;
  },
  fromAmino(object: QueryTLEKeySetResponseAmino): QueryTLEKeySetResponse {
    const message = createBaseQueryTLEKeySetResponse();
    if (object.key_set !== undefined && object.key_set !== null) {
      message.keySet = TLEKeySet.fromAmino(object.key_set);
    }
    return message;
  },
  toAmino(message: QueryTLEKeySetResponse): QueryTLEKeySetResponseAmino {
    const obj: any = {};
    obj.key_set = message.keySet ? TLEKeySet.toAmino(message.keySet) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTLEKeySetResponseAminoMsg): QueryTLEKeySetResponse {
    return QueryTLEKeySetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTLEKeySetResponseProtoMsg): QueryTLEKeySetResponse {
    return QueryTLEKeySetResponse.decode(message.value);
  },
  toProto(message: QueryTLEKeySetResponse): Uint8Array {
    return QueryTLEKeySetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTLEKeySetResponse): QueryTLEKeySetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryTLEKeySetResponse",
      value: QueryTLEKeySetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVerificationKeyRequest(): QueryVerificationKeyRequest {
  return {
    circuitId: ""
  };
}
/**
 * @name QueryVerificationKeyRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryVerificationKeyRequest
 */
export const QueryVerificationKeyRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryVerificationKeyRequest",
  encode(message: QueryVerificationKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.circuitId !== "") {
      writer.uint32(10).string(message.circuitId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerificationKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerificationKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circuitId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVerificationKeyRequest>): QueryVerificationKeyRequest {
    const message = createBaseQueryVerificationKeyRequest();
    message.circuitId = object.circuitId ?? "";
    return message;
  },
  fromAmino(object: QueryVerificationKeyRequestAmino): QueryVerificationKeyRequest {
    const message = createBaseQueryVerificationKeyRequest();
    if (object.circuit_id !== undefined && object.circuit_id !== null) {
      message.circuitId = object.circuit_id;
    }
    return message;
  },
  toAmino(message: QueryVerificationKeyRequest): QueryVerificationKeyRequestAmino {
    const obj: any = {};
    obj.circuit_id = message.circuitId === "" ? undefined : message.circuitId;
    return obj;
  },
  fromAminoMsg(object: QueryVerificationKeyRequestAminoMsg): QueryVerificationKeyRequest {
    return QueryVerificationKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerificationKeyRequestProtoMsg): QueryVerificationKeyRequest {
    return QueryVerificationKeyRequest.decode(message.value);
  },
  toProto(message: QueryVerificationKeyRequest): Uint8Array {
    return QueryVerificationKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerificationKeyRequest): QueryVerificationKeyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryVerificationKeyRequest",
      value: QueryVerificationKeyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVerificationKeyResponse(): QueryVerificationKeyResponse {
  return {
    verificationKey: VerificationKey.fromPartial({})
  };
}
/**
 * @name QueryVerificationKeyResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryVerificationKeyResponse
 */
export const QueryVerificationKeyResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryVerificationKeyResponse",
  encode(message: QueryVerificationKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.verificationKey !== undefined) {
      VerificationKey.encode(message.verificationKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerificationKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerificationKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verificationKey = VerificationKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVerificationKeyResponse>): QueryVerificationKeyResponse {
    const message = createBaseQueryVerificationKeyResponse();
    message.verificationKey = object.verificationKey !== undefined && object.verificationKey !== null ? VerificationKey.fromPartial(object.verificationKey) : undefined;
    return message;
  },
  fromAmino(object: QueryVerificationKeyResponseAmino): QueryVerificationKeyResponse {
    const message = createBaseQueryVerificationKeyResponse();
    if (object.verification_key !== undefined && object.verification_key !== null) {
      message.verificationKey = VerificationKey.fromAmino(object.verification_key);
    }
    return message;
  },
  toAmino(message: QueryVerificationKeyResponse): QueryVerificationKeyResponseAmino {
    const obj: any = {};
    obj.verification_key = message.verificationKey ? VerificationKey.toAmino(message.verificationKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVerificationKeyResponseAminoMsg): QueryVerificationKeyResponse {
    return QueryVerificationKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerificationKeyResponseProtoMsg): QueryVerificationKeyResponse {
    return QueryVerificationKeyResponse.decode(message.value);
  },
  toProto(message: QueryVerificationKeyResponse): Uint8Array {
    return QueryVerificationKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerificationKeyResponse): QueryVerificationKeyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryVerificationKeyResponse",
      value: QueryVerificationKeyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTLEMissCountRequest(): QueryTLEMissCountRequest {
  return {
    validatorAddress: ""
  };
}
/**
 * @name QueryTLEMissCountRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMissCountRequest
 */
export const QueryTLEMissCountRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMissCountRequest",
  encode(message: QueryTLEMissCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTLEMissCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTLEMissCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTLEMissCountRequest>): QueryTLEMissCountRequest {
    const message = createBaseQueryTLEMissCountRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryTLEMissCountRequestAmino): QueryTLEMissCountRequest {
    const message = createBaseQueryTLEMissCountRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryTLEMissCountRequest): QueryTLEMissCountRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryTLEMissCountRequestAminoMsg): QueryTLEMissCountRequest {
    return QueryTLEMissCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTLEMissCountRequestProtoMsg): QueryTLEMissCountRequest {
    return QueryTLEMissCountRequest.decode(message.value);
  },
  toProto(message: QueryTLEMissCountRequest): Uint8Array {
    return QueryTLEMissCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTLEMissCountRequest): QueryTLEMissCountRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryTLEMissCountRequest",
      value: QueryTLEMissCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTLEMissCountResponse(): QueryTLEMissCountResponse {
  return {
    missCount: BigInt(0)
  };
}
/**
 * @name QueryTLEMissCountResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryTLEMissCountResponse
 */
export const QueryTLEMissCountResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryTLEMissCountResponse",
  encode(message: QueryTLEMissCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.missCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.missCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTLEMissCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTLEMissCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTLEMissCountResponse>): QueryTLEMissCountResponse {
    const message = createBaseQueryTLEMissCountResponse();
    message.missCount = object.missCount !== undefined && object.missCount !== null ? BigInt(object.missCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTLEMissCountResponseAmino): QueryTLEMissCountResponse {
    const message = createBaseQueryTLEMissCountResponse();
    if (object.miss_count !== undefined && object.miss_count !== null) {
      message.missCount = BigInt(object.miss_count);
    }
    return message;
  },
  toAmino(message: QueryTLEMissCountResponse): QueryTLEMissCountResponseAmino {
    const obj: any = {};
    obj.miss_count = message.missCount !== BigInt(0) ? message.missCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTLEMissCountResponseAminoMsg): QueryTLEMissCountResponse {
    return QueryTLEMissCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTLEMissCountResponseProtoMsg): QueryTLEMissCountResponse {
    return QueryTLEMissCountResponse.decode(message.value);
  },
  toProto(message: QueryTLEMissCountResponse): Uint8Array {
    return QueryTLEMissCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTLEMissCountResponse): QueryTLEMissCountResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryTLEMissCountResponse",
      value: QueryTLEMissCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDecryptionSharesRequest(): QueryDecryptionSharesRequest {
  return {
    epoch: BigInt(0)
  };
}
/**
 * @name QueryDecryptionSharesRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDecryptionSharesRequest
 */
export const QueryDecryptionSharesRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryDecryptionSharesRequest",
  encode(message: QueryDecryptionSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDecryptionSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptionSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDecryptionSharesRequest>): QueryDecryptionSharesRequest {
    const message = createBaseQueryDecryptionSharesRequest();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDecryptionSharesRequestAmino): QueryDecryptionSharesRequest {
    const message = createBaseQueryDecryptionSharesRequest();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    return message;
  },
  toAmino(message: QueryDecryptionSharesRequest): QueryDecryptionSharesRequestAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDecryptionSharesRequestAminoMsg): QueryDecryptionSharesRequest {
    return QueryDecryptionSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDecryptionSharesRequestProtoMsg): QueryDecryptionSharesRequest {
    return QueryDecryptionSharesRequest.decode(message.value);
  },
  toProto(message: QueryDecryptionSharesRequest): Uint8Array {
    return QueryDecryptionSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDecryptionSharesRequest): QueryDecryptionSharesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDecryptionSharesRequest",
      value: QueryDecryptionSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDecryptionSharesResponse(): QueryDecryptionSharesResponse {
  return {
    shares: []
  };
}
/**
 * @name QueryDecryptionSharesResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDecryptionSharesResponse
 */
export const QueryDecryptionSharesResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryDecryptionSharesResponse",
  encode(message: QueryDecryptionSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.shares) {
      ShieldDecryptionShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDecryptionSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptionSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shares.push(ShieldDecryptionShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDecryptionSharesResponse>): QueryDecryptionSharesResponse {
    const message = createBaseQueryDecryptionSharesResponse();
    message.shares = object.shares?.map(e => ShieldDecryptionShare.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDecryptionSharesResponseAmino): QueryDecryptionSharesResponse {
    const message = createBaseQueryDecryptionSharesResponse();
    message.shares = object.shares?.map(e => ShieldDecryptionShare.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDecryptionSharesResponse): QueryDecryptionSharesResponseAmino {
    const obj: any = {};
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? ShieldDecryptionShare.toAmino(e) : undefined);
    } else {
      obj.shares = message.shares;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDecryptionSharesResponseAminoMsg): QueryDecryptionSharesResponse {
    return QueryDecryptionSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDecryptionSharesResponseProtoMsg): QueryDecryptionSharesResponse {
    return QueryDecryptionSharesResponse.decode(message.value);
  },
  toProto(message: QueryDecryptionSharesResponse): Uint8Array {
    return QueryDecryptionSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDecryptionSharesResponse): QueryDecryptionSharesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDecryptionSharesResponse",
      value: QueryDecryptionSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIdentityRateLimitRequest(): QueryIdentityRateLimitRequest {
  return {
    rateLimitNullifierHex: ""
  };
}
/**
 * @name QueryIdentityRateLimitRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryIdentityRateLimitRequest
 */
export const QueryIdentityRateLimitRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryIdentityRateLimitRequest",
  encode(message: QueryIdentityRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateLimitNullifierHex !== "") {
      writer.uint32(10).string(message.rateLimitNullifierHex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIdentityRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdentityRateLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimitNullifierHex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIdentityRateLimitRequest>): QueryIdentityRateLimitRequest {
    const message = createBaseQueryIdentityRateLimitRequest();
    message.rateLimitNullifierHex = object.rateLimitNullifierHex ?? "";
    return message;
  },
  fromAmino(object: QueryIdentityRateLimitRequestAmino): QueryIdentityRateLimitRequest {
    const message = createBaseQueryIdentityRateLimitRequest();
    if (object.rate_limit_nullifier_hex !== undefined && object.rate_limit_nullifier_hex !== null) {
      message.rateLimitNullifierHex = object.rate_limit_nullifier_hex;
    }
    return message;
  },
  toAmino(message: QueryIdentityRateLimitRequest): QueryIdentityRateLimitRequestAmino {
    const obj: any = {};
    obj.rate_limit_nullifier_hex = message.rateLimitNullifierHex === "" ? undefined : message.rateLimitNullifierHex;
    return obj;
  },
  fromAminoMsg(object: QueryIdentityRateLimitRequestAminoMsg): QueryIdentityRateLimitRequest {
    return QueryIdentityRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIdentityRateLimitRequestProtoMsg): QueryIdentityRateLimitRequest {
    return QueryIdentityRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryIdentityRateLimitRequest): Uint8Array {
    return QueryIdentityRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIdentityRateLimitRequest): QueryIdentityRateLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryIdentityRateLimitRequest",
      value: QueryIdentityRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIdentityRateLimitResponse(): QueryIdentityRateLimitResponse {
  return {
    usedCount: BigInt(0),
    maxCount: BigInt(0),
    remaining: BigInt(0)
  };
}
/**
 * @name QueryIdentityRateLimitResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryIdentityRateLimitResponse
 */
export const QueryIdentityRateLimitResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryIdentityRateLimitResponse",
  encode(message: QueryIdentityRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.usedCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.usedCount);
    }
    if (message.maxCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCount);
    }
    if (message.remaining !== BigInt(0)) {
      writer.uint32(24).uint64(message.remaining);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIdentityRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdentityRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usedCount = reader.uint64();
          break;
        case 2:
          message.maxCount = reader.uint64();
          break;
        case 3:
          message.remaining = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIdentityRateLimitResponse>): QueryIdentityRateLimitResponse {
    const message = createBaseQueryIdentityRateLimitResponse();
    message.usedCount = object.usedCount !== undefined && object.usedCount !== null ? BigInt(object.usedCount.toString()) : BigInt(0);
    message.maxCount = object.maxCount !== undefined && object.maxCount !== null ? BigInt(object.maxCount.toString()) : BigInt(0);
    message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIdentityRateLimitResponseAmino): QueryIdentityRateLimitResponse {
    const message = createBaseQueryIdentityRateLimitResponse();
    if (object.used_count !== undefined && object.used_count !== null) {
      message.usedCount = BigInt(object.used_count);
    }
    if (object.max_count !== undefined && object.max_count !== null) {
      message.maxCount = BigInt(object.max_count);
    }
    if (object.remaining !== undefined && object.remaining !== null) {
      message.remaining = BigInt(object.remaining);
    }
    return message;
  },
  toAmino(message: QueryIdentityRateLimitResponse): QueryIdentityRateLimitResponseAmino {
    const obj: any = {};
    obj.used_count = message.usedCount !== BigInt(0) ? message.usedCount?.toString() : undefined;
    obj.max_count = message.maxCount !== BigInt(0) ? message.maxCount?.toString() : undefined;
    obj.remaining = message.remaining !== BigInt(0) ? message.remaining?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIdentityRateLimitResponseAminoMsg): QueryIdentityRateLimitResponse {
    return QueryIdentityRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIdentityRateLimitResponseProtoMsg): QueryIdentityRateLimitResponse {
    return QueryIdentityRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryIdentityRateLimitResponse): Uint8Array {
    return QueryIdentityRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIdentityRateLimitResponse): QueryIdentityRateLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryIdentityRateLimitResponse",
      value: QueryIdentityRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDKGStateRequest(): QueryDKGStateRequest {
  return {};
}
/**
 * @name QueryDKGStateRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGStateRequest
 */
export const QueryDKGStateRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryDKGStateRequest",
  encode(_: QueryDKGStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDKGStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDKGStateRequest();
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
  fromPartial(_: DeepPartial<QueryDKGStateRequest>): QueryDKGStateRequest {
    const message = createBaseQueryDKGStateRequest();
    return message;
  },
  fromAmino(_: QueryDKGStateRequestAmino): QueryDKGStateRequest {
    const message = createBaseQueryDKGStateRequest();
    return message;
  },
  toAmino(_: QueryDKGStateRequest): QueryDKGStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDKGStateRequestAminoMsg): QueryDKGStateRequest {
    return QueryDKGStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDKGStateRequestProtoMsg): QueryDKGStateRequest {
    return QueryDKGStateRequest.decode(message.value);
  },
  toProto(message: QueryDKGStateRequest): Uint8Array {
    return QueryDKGStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDKGStateRequest): QueryDKGStateRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDKGStateRequest",
      value: QueryDKGStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDKGStateResponse(): QueryDKGStateResponse {
  return {
    dkgState: DKGState.fromPartial({})
  };
}
/**
 * @name QueryDKGStateResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGStateResponse
 */
export const QueryDKGStateResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryDKGStateResponse",
  encode(message: QueryDKGStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dkgState !== undefined) {
      DKGState.encode(message.dkgState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDKGStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDKGStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dkgState = DKGState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDKGStateResponse>): QueryDKGStateResponse {
    const message = createBaseQueryDKGStateResponse();
    message.dkgState = object.dkgState !== undefined && object.dkgState !== null ? DKGState.fromPartial(object.dkgState) : undefined;
    return message;
  },
  fromAmino(object: QueryDKGStateResponseAmino): QueryDKGStateResponse {
    const message = createBaseQueryDKGStateResponse();
    if (object.dkg_state !== undefined && object.dkg_state !== null) {
      message.dkgState = DKGState.fromAmino(object.dkg_state);
    }
    return message;
  },
  toAmino(message: QueryDKGStateResponse): QueryDKGStateResponseAmino {
    const obj: any = {};
    obj.dkg_state = message.dkgState ? DKGState.toAmino(message.dkgState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDKGStateResponseAminoMsg): QueryDKGStateResponse {
    return QueryDKGStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDKGStateResponseProtoMsg): QueryDKGStateResponse {
    return QueryDKGStateResponse.decode(message.value);
  },
  toProto(message: QueryDKGStateResponse): Uint8Array {
    return QueryDKGStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDKGStateResponse): QueryDKGStateResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDKGStateResponse",
      value: QueryDKGStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDKGContributionsRequest(): QueryDKGContributionsRequest {
  return {};
}
/**
 * @name QueryDKGContributionsRequest
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGContributionsRequest
 */
export const QueryDKGContributionsRequest = {
  typeUrl: "/sparkdream.shield.v1.QueryDKGContributionsRequest",
  encode(_: QueryDKGContributionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDKGContributionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDKGContributionsRequest();
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
  fromPartial(_: DeepPartial<QueryDKGContributionsRequest>): QueryDKGContributionsRequest {
    const message = createBaseQueryDKGContributionsRequest();
    return message;
  },
  fromAmino(_: QueryDKGContributionsRequestAmino): QueryDKGContributionsRequest {
    const message = createBaseQueryDKGContributionsRequest();
    return message;
  },
  toAmino(_: QueryDKGContributionsRequest): QueryDKGContributionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDKGContributionsRequestAminoMsg): QueryDKGContributionsRequest {
    return QueryDKGContributionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDKGContributionsRequestProtoMsg): QueryDKGContributionsRequest {
    return QueryDKGContributionsRequest.decode(message.value);
  },
  toProto(message: QueryDKGContributionsRequest): Uint8Array {
    return QueryDKGContributionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDKGContributionsRequest): QueryDKGContributionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDKGContributionsRequest",
      value: QueryDKGContributionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDKGContributionsResponse(): QueryDKGContributionsResponse {
  return {
    contributions: []
  };
}
/**
 * @name QueryDKGContributionsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.QueryDKGContributionsResponse
 */
export const QueryDKGContributionsResponse = {
  typeUrl: "/sparkdream.shield.v1.QueryDKGContributionsResponse",
  encode(message: QueryDKGContributionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contributions) {
      DKGContribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDKGContributionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDKGContributionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributions.push(DKGContribution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDKGContributionsResponse>): QueryDKGContributionsResponse {
    const message = createBaseQueryDKGContributionsResponse();
    message.contributions = object.contributions?.map(e => DKGContribution.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDKGContributionsResponseAmino): QueryDKGContributionsResponse {
    const message = createBaseQueryDKGContributionsResponse();
    message.contributions = object.contributions?.map(e => DKGContribution.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDKGContributionsResponse): QueryDKGContributionsResponseAmino {
    const obj: any = {};
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? DKGContribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDKGContributionsResponseAminoMsg): QueryDKGContributionsResponse {
    return QueryDKGContributionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDKGContributionsResponseProtoMsg): QueryDKGContributionsResponse {
    return QueryDKGContributionsResponse.decode(message.value);
  },
  toProto(message: QueryDKGContributionsResponse): Uint8Array {
    return QueryDKGContributionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDKGContributionsResponse): QueryDKGContributionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.QueryDKGContributionsResponse",
      value: QueryDKGContributionsResponse.encode(message).finish()
    };
  }
};