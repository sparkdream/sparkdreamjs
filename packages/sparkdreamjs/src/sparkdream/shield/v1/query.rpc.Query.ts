//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShieldedOpRequest, QueryShieldedOpResponse, QueryShieldedOpsRequest, QueryShieldedOpsResponse, QueryModuleBalanceRequest, QueryModuleBalanceResponse, QueryNullifierUsedRequest, QueryNullifierUsedResponse, QueryDayFundingRequest, QueryDayFundingResponse, QueryShieldEpochRequest, QueryShieldEpochResponse, QueryPendingOpsRequest, QueryPendingOpsResponse, QueryPendingOpCountRequest, QueryPendingOpCountResponse, QueryTLEMasterPublicKeyRequest, QueryTLEMasterPublicKeyResponse, QueryTLEKeySetRequest, QueryTLEKeySetResponse, QueryVerificationKeyRequest, QueryVerificationKeyResponse, QueryTLEMissCountRequest, QueryTLEMissCountResponse, QueryDecryptionSharesRequest, QueryDecryptionSharesResponse, QueryIdentityRateLimitRequest, QueryIdentityRateLimitResponse, QueryDKGStateRequest, QueryDKGStateResponse, QueryDKGContributionsRequest, QueryDKGContributionsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns module parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ShieldedOp returns the registration for a specific message type. */
  shieldedOp(request: QueryShieldedOpRequest): Promise<QueryShieldedOpResponse>;
  /** ShieldedOps returns all registered shielded operations. */
  shieldedOps(request?: QueryShieldedOpsRequest): Promise<QueryShieldedOpsResponse>;
  /** ModuleBalance returns the shield module account's current balance. */
  moduleBalance(request?: QueryModuleBalanceRequest): Promise<QueryModuleBalanceResponse>;
  /** NullifierUsed checks if a nullifier has been used in a given domain+scope. */
  nullifierUsed(request: QueryNullifierUsedRequest): Promise<QueryNullifierUsedResponse>;
  /** DayFunding returns the amount funded from community pool for a given day. */
  dayFunding(request: QueryDayFundingRequest): Promise<QueryDayFundingResponse>;
  /** ShieldEpoch returns the current shield epoch state. */
  shieldEpoch(request?: QueryShieldEpochRequest): Promise<QueryShieldEpochResponse>;
  /** PendingOps returns pending shielded operations (optionally filtered by epoch). */
  pendingOps(request: QueryPendingOpsRequest): Promise<QueryPendingOpsResponse>;
  /** PendingOpCount returns the count of pending operations. */
  pendingOpCount(request?: QueryPendingOpCountRequest): Promise<QueryPendingOpCountResponse>;
  /** TLEMasterPublicKey returns the TLE master public key (for client encryption). */
  tLEMasterPublicKey(request?: QueryTLEMasterPublicKeyRequest): Promise<QueryTLEMasterPublicKeyResponse>;
  /** TLEKeySet returns the full TLE key set (master key + validator shares). */
  tLEKeySet(request?: QueryTLEKeySetRequest): Promise<QueryTLEKeySetResponse>;
  /** VerificationKey returns a ZK verification key by circuit ID. */
  verificationKey(request: QueryVerificationKeyRequest): Promise<QueryVerificationKeyResponse>;
  /** TLEMissCount returns a validator's current TLE miss count. */
  tLEMissCount(request: QueryTLEMissCountRequest): Promise<QueryTLEMissCountResponse>;
  /** DecryptionShares returns the decryption shares submitted for a given epoch. */
  decryptionShares(request: QueryDecryptionSharesRequest): Promise<QueryDecryptionSharesResponse>;
  /** IdentityRateLimit returns the remaining rate limit for a given rate-limit nullifier. */
  identityRateLimit(request: QueryIdentityRateLimitRequest): Promise<QueryIdentityRateLimitResponse>;
  /** DKGState returns the current DKG ceremony state. */
  dKGState(request?: QueryDKGStateRequest): Promise<QueryDKGStateResponse>;
  /** DKGContributions returns all DKG contributions for the current round. */
  dKGContributions(request?: QueryDKGContributionsRequest): Promise<QueryDKGContributionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params returns module parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ShieldedOp returns the registration for a specific message type. */
  shieldedOp = async (request: QueryShieldedOpRequest): Promise<QueryShieldedOpResponse> => {
    const data = QueryShieldedOpRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "ShieldedOp", data);
    return promise.then(data => QueryShieldedOpResponse.decode(new BinaryReader(data)));
  };
  /* ShieldedOps returns all registered shielded operations. */
  shieldedOps = async (request: QueryShieldedOpsRequest = {
    pagination: undefined
  }): Promise<QueryShieldedOpsResponse> => {
    const data = QueryShieldedOpsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "ShieldedOps", data);
    return promise.then(data => QueryShieldedOpsResponse.decode(new BinaryReader(data)));
  };
  /* ModuleBalance returns the shield module account's current balance. */
  moduleBalance = async (request: QueryModuleBalanceRequest = {}): Promise<QueryModuleBalanceResponse> => {
    const data = QueryModuleBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "ModuleBalance", data);
    return promise.then(data => QueryModuleBalanceResponse.decode(new BinaryReader(data)));
  };
  /* NullifierUsed checks if a nullifier has been used in a given domain+scope. */
  nullifierUsed = async (request: QueryNullifierUsedRequest): Promise<QueryNullifierUsedResponse> => {
    const data = QueryNullifierUsedRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "NullifierUsed", data);
    return promise.then(data => QueryNullifierUsedResponse.decode(new BinaryReader(data)));
  };
  /* DayFunding returns the amount funded from community pool for a given day. */
  dayFunding = async (request: QueryDayFundingRequest): Promise<QueryDayFundingResponse> => {
    const data = QueryDayFundingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "DayFunding", data);
    return promise.then(data => QueryDayFundingResponse.decode(new BinaryReader(data)));
  };
  /* ShieldEpoch returns the current shield epoch state. */
  shieldEpoch = async (request: QueryShieldEpochRequest = {}): Promise<QueryShieldEpochResponse> => {
    const data = QueryShieldEpochRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "ShieldEpoch", data);
    return promise.then(data => QueryShieldEpochResponse.decode(new BinaryReader(data)));
  };
  /* PendingOps returns pending shielded operations (optionally filtered by epoch). */
  pendingOps = async (request: QueryPendingOpsRequest): Promise<QueryPendingOpsResponse> => {
    const data = QueryPendingOpsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "PendingOps", data);
    return promise.then(data => QueryPendingOpsResponse.decode(new BinaryReader(data)));
  };
  /* PendingOpCount returns the count of pending operations. */
  pendingOpCount = async (request: QueryPendingOpCountRequest = {}): Promise<QueryPendingOpCountResponse> => {
    const data = QueryPendingOpCountRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "PendingOpCount", data);
    return promise.then(data => QueryPendingOpCountResponse.decode(new BinaryReader(data)));
  };
  /* TLEMasterPublicKey returns the TLE master public key (for client encryption). */
  tLEMasterPublicKey = async (request: QueryTLEMasterPublicKeyRequest = {}): Promise<QueryTLEMasterPublicKeyResponse> => {
    const data = QueryTLEMasterPublicKeyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "TLEMasterPublicKey", data);
    return promise.then(data => QueryTLEMasterPublicKeyResponse.decode(new BinaryReader(data)));
  };
  /* TLEKeySet returns the full TLE key set (master key + validator shares). */
  tLEKeySet = async (request: QueryTLEKeySetRequest = {}): Promise<QueryTLEKeySetResponse> => {
    const data = QueryTLEKeySetRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "TLEKeySet", data);
    return promise.then(data => QueryTLEKeySetResponse.decode(new BinaryReader(data)));
  };
  /* VerificationKey returns a ZK verification key by circuit ID. */
  verificationKey = async (request: QueryVerificationKeyRequest): Promise<QueryVerificationKeyResponse> => {
    const data = QueryVerificationKeyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "VerificationKey", data);
    return promise.then(data => QueryVerificationKeyResponse.decode(new BinaryReader(data)));
  };
  /* TLEMissCount returns a validator's current TLE miss count. */
  tLEMissCount = async (request: QueryTLEMissCountRequest): Promise<QueryTLEMissCountResponse> => {
    const data = QueryTLEMissCountRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "TLEMissCount", data);
    return promise.then(data => QueryTLEMissCountResponse.decode(new BinaryReader(data)));
  };
  /* DecryptionShares returns the decryption shares submitted for a given epoch. */
  decryptionShares = async (request: QueryDecryptionSharesRequest): Promise<QueryDecryptionSharesResponse> => {
    const data = QueryDecryptionSharesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "DecryptionShares", data);
    return promise.then(data => QueryDecryptionSharesResponse.decode(new BinaryReader(data)));
  };
  /* IdentityRateLimit returns the remaining rate limit for a given rate-limit nullifier. */
  identityRateLimit = async (request: QueryIdentityRateLimitRequest): Promise<QueryIdentityRateLimitResponse> => {
    const data = QueryIdentityRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "IdentityRateLimit", data);
    return promise.then(data => QueryIdentityRateLimitResponse.decode(new BinaryReader(data)));
  };
  /* DKGState returns the current DKG ceremony state. */
  dKGState = async (request: QueryDKGStateRequest = {}): Promise<QueryDKGStateResponse> => {
    const data = QueryDKGStateRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "DKGState", data);
    return promise.then(data => QueryDKGStateResponse.decode(new BinaryReader(data)));
  };
  /* DKGContributions returns all DKG contributions for the current round. */
  dKGContributions = async (request: QueryDKGContributionsRequest = {}): Promise<QueryDKGContributionsResponse> => {
    const data = QueryDKGContributionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.shield.v1.Query", "DKGContributions", data);
    return promise.then(data => QueryDKGContributionsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    shieldedOp(request: QueryShieldedOpRequest): Promise<QueryShieldedOpResponse> {
      return queryService.shieldedOp(request);
    },
    shieldedOps(request?: QueryShieldedOpsRequest): Promise<QueryShieldedOpsResponse> {
      return queryService.shieldedOps(request);
    },
    moduleBalance(request?: QueryModuleBalanceRequest): Promise<QueryModuleBalanceResponse> {
      return queryService.moduleBalance(request);
    },
    nullifierUsed(request: QueryNullifierUsedRequest): Promise<QueryNullifierUsedResponse> {
      return queryService.nullifierUsed(request);
    },
    dayFunding(request: QueryDayFundingRequest): Promise<QueryDayFundingResponse> {
      return queryService.dayFunding(request);
    },
    shieldEpoch(request?: QueryShieldEpochRequest): Promise<QueryShieldEpochResponse> {
      return queryService.shieldEpoch(request);
    },
    pendingOps(request: QueryPendingOpsRequest): Promise<QueryPendingOpsResponse> {
      return queryService.pendingOps(request);
    },
    pendingOpCount(request?: QueryPendingOpCountRequest): Promise<QueryPendingOpCountResponse> {
      return queryService.pendingOpCount(request);
    },
    tLEMasterPublicKey(request?: QueryTLEMasterPublicKeyRequest): Promise<QueryTLEMasterPublicKeyResponse> {
      return queryService.tLEMasterPublicKey(request);
    },
    tLEKeySet(request?: QueryTLEKeySetRequest): Promise<QueryTLEKeySetResponse> {
      return queryService.tLEKeySet(request);
    },
    verificationKey(request: QueryVerificationKeyRequest): Promise<QueryVerificationKeyResponse> {
      return queryService.verificationKey(request);
    },
    tLEMissCount(request: QueryTLEMissCountRequest): Promise<QueryTLEMissCountResponse> {
      return queryService.tLEMissCount(request);
    },
    decryptionShares(request: QueryDecryptionSharesRequest): Promise<QueryDecryptionSharesResponse> {
      return queryService.decryptionShares(request);
    },
    identityRateLimit(request: QueryIdentityRateLimitRequest): Promise<QueryIdentityRateLimitResponse> {
      return queryService.identityRateLimit(request);
    },
    dKGState(request?: QueryDKGStateRequest): Promise<QueryDKGStateResponse> {
      return queryService.dKGState(request);
    },
    dKGContributions(request?: QueryDKGContributionsRequest): Promise<QueryDKGContributionsResponse> {
      return queryService.dKGContributions(request);
    }
  };
};