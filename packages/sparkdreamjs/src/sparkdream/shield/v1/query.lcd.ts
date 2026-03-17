//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryShieldedOpRequest, QueryShieldedOpResponse, QueryShieldedOpsRequest, QueryShieldedOpsResponse, QueryModuleBalanceRequest, QueryModuleBalanceResponse, QueryNullifierUsedRequest, QueryNullifierUsedResponse, QueryDayFundingRequest, QueryDayFundingResponse, QueryShieldEpochRequest, QueryShieldEpochResponse, QueryPendingOpsRequest, QueryPendingOpsResponse, QueryPendingOpCountRequest, QueryPendingOpCountResponse, QueryTLEMasterPublicKeyRequest, QueryTLEMasterPublicKeyResponse, QueryTLEKeySetRequest, QueryTLEKeySetResponse, QueryVerificationKeyRequest, QueryVerificationKeyResponse, QueryTLEMissCountRequest, QueryTLEMissCountResponse, QueryDecryptionSharesRequest, QueryDecryptionSharesResponse, QueryIdentityRateLimitRequest, QueryIdentityRateLimitResponse, QueryDKGStateRequest, QueryDKGStateResponse, QueryDKGContributionsRequest, QueryDKGContributionsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params returns module parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/shield/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ShieldedOp returns the registration for a specific message type. */
  shieldedOp = async (params: QueryShieldedOpRequest): Promise<QueryShieldedOpResponse> => {
    const endpoint = `sparkdream/shield/v1/shielded_op/${params.messageTypeUrl}`;
    return await this.req.get<QueryShieldedOpResponse>(endpoint);
  };
  /* ShieldedOps returns all registered shielded operations. */
  shieldedOps = async (params: QueryShieldedOpsRequest = {
    pagination: undefined
  }): Promise<QueryShieldedOpsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/shield/v1/shielded_ops`;
    return await this.req.get<QueryShieldedOpsResponse>(endpoint, options);
  };
  /* ModuleBalance returns the shield module account's current balance. */
  moduleBalance = async (_params: QueryModuleBalanceRequest = {}): Promise<QueryModuleBalanceResponse> => {
    const endpoint = `sparkdream/shield/v1/module_balance`;
    return await this.req.get<QueryModuleBalanceResponse>(endpoint);
  };
  /* NullifierUsed checks if a nullifier has been used in a given domain+scope. */
  nullifierUsed = async (params: QueryNullifierUsedRequest): Promise<QueryNullifierUsedResponse> => {
    const endpoint = `sparkdream/shield/v1/nullifier_used/${params.domain}/${params.scope}/${params.nullifierHex}`;
    return await this.req.get<QueryNullifierUsedResponse>(endpoint);
  };
  /* DayFunding returns the amount funded from community pool for a given day. */
  dayFunding = async (params: QueryDayFundingRequest): Promise<QueryDayFundingResponse> => {
    const endpoint = `sparkdream/shield/v1/day_funding/${params.day}`;
    return await this.req.get<QueryDayFundingResponse>(endpoint);
  };
  /* ShieldEpoch returns the current shield epoch state. */
  shieldEpoch = async (_params: QueryShieldEpochRequest = {}): Promise<QueryShieldEpochResponse> => {
    const endpoint = `sparkdream/shield/v1/shield_epoch`;
    return await this.req.get<QueryShieldEpochResponse>(endpoint);
  };
  /* PendingOps returns pending shielded operations (optionally filtered by epoch). */
  pendingOps = async (params: QueryPendingOpsRequest): Promise<QueryPendingOpsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.epoch !== "undefined") {
      options.params.epoch = params.epoch;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/shield/v1/pending_ops`;
    return await this.req.get<QueryPendingOpsResponse>(endpoint, options);
  };
  /* PendingOpCount returns the count of pending operations. */
  pendingOpCount = async (_params: QueryPendingOpCountRequest = {}): Promise<QueryPendingOpCountResponse> => {
    const endpoint = `sparkdream/shield/v1/pending_op_count`;
    return await this.req.get<QueryPendingOpCountResponse>(endpoint);
  };
  /* TLEMasterPublicKey returns the TLE master public key (for client encryption). */
  tLEMasterPublicKey = async (_params: QueryTLEMasterPublicKeyRequest = {}): Promise<QueryTLEMasterPublicKeyResponse> => {
    const endpoint = `sparkdream/shield/v1/tle_master_public_key`;
    return await this.req.get<QueryTLEMasterPublicKeyResponse>(endpoint);
  };
  /* TLEKeySet returns the full TLE key set (master key + validator shares). */
  tLEKeySet = async (_params: QueryTLEKeySetRequest = {}): Promise<QueryTLEKeySetResponse> => {
    const endpoint = `sparkdream/shield/v1/tle_key_set`;
    return await this.req.get<QueryTLEKeySetResponse>(endpoint);
  };
  /* VerificationKey returns a ZK verification key by circuit ID. */
  verificationKey = async (params: QueryVerificationKeyRequest): Promise<QueryVerificationKeyResponse> => {
    const endpoint = `sparkdream/shield/v1/verification_key/${params.circuitId}`;
    return await this.req.get<QueryVerificationKeyResponse>(endpoint);
  };
  /* TLEMissCount returns a validator's current TLE miss count. */
  tLEMissCount = async (params: QueryTLEMissCountRequest): Promise<QueryTLEMissCountResponse> => {
    const endpoint = `sparkdream/shield/v1/tle_miss_count/${params.validatorAddress}`;
    return await this.req.get<QueryTLEMissCountResponse>(endpoint);
  };
  /* DecryptionShares returns the decryption shares submitted for a given epoch. */
  decryptionShares = async (params: QueryDecryptionSharesRequest): Promise<QueryDecryptionSharesResponse> => {
    const endpoint = `sparkdream/shield/v1/decryption_shares/${params.epoch}`;
    return await this.req.get<QueryDecryptionSharesResponse>(endpoint);
  };
  /* IdentityRateLimit returns the remaining rate limit for a given rate-limit nullifier. */
  identityRateLimit = async (params: QueryIdentityRateLimitRequest): Promise<QueryIdentityRateLimitResponse> => {
    const endpoint = `sparkdream/shield/v1/identity_rate_limit/${params.rateLimitNullifierHex}`;
    return await this.req.get<QueryIdentityRateLimitResponse>(endpoint);
  };
  /* DKGState returns the current DKG ceremony state. */
  dKGState = async (_params: QueryDKGStateRequest = {}): Promise<QueryDKGStateResponse> => {
    const endpoint = `sparkdream/shield/v1/dkg_state`;
    return await this.req.get<QueryDKGStateResponse>(endpoint);
  };
  /* DKGContributions returns all DKG contributions for the current round. */
  dKGContributions = async (_params: QueryDKGContributionsRequest = {}): Promise<QueryDKGContributionsResponse> => {
    const endpoint = `sparkdream/shield/v1/dkg_contributions`;
    return await this.req.get<QueryDKGContributionsResponse>(endpoint);
  };
}