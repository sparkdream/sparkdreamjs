//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPeerRequest, QueryGetPeerResponse, QueryListPeersRequest, QueryListPeersResponse, QueryGetPeerPolicyRequest, QueryGetPeerPolicyResponse, QueryGetBridgeBindingRequest, QueryGetBridgeBindingResponse, QueryListBridgeBindingsRequest, QueryListBridgeBindingsResponse, QueryGetFederatedContentRequest, QueryGetFederatedContentResponse, QueryListFederatedContentRequest, QueryListFederatedContentResponse, QueryGetIdentityLinkRequest, QueryGetIdentityLinkResponse, QueryListIdentityLinksRequest, QueryListIdentityLinksResponse, QueryResolveRemoteIdentityRequest, QueryResolveRemoteIdentityResponse, QueryGetPendingIdentityChallengeRequest, QueryGetPendingIdentityChallengeResponse, QueryListPendingIdentityChallengesRequest, QueryListPendingIdentityChallengesResponse, QueryGetReputationAttestationRequest, QueryGetReputationAttestationResponse, QueryListOutboundAttestationsRequest, QueryListOutboundAttestationsResponse, QueryVerifierActivityRequest, QueryVerifierActivityResponse, QueryOperatorRewardPoolRequest, QueryOperatorRewardPoolResponse, QueryGetVerificationRecordRequest, QueryGetVerificationRecordResponse, QueryGetEscalatedChallengeRequest, QueryGetEscalatedChallengeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  getPeer(request: QueryGetPeerRequest): Promise<QueryGetPeerResponse>;
  listPeers(request?: QueryListPeersRequest): Promise<QueryListPeersResponse>;
  getPeerPolicy(request: QueryGetPeerPolicyRequest): Promise<QueryGetPeerPolicyResponse>;
  getBridgeBinding(request: QueryGetBridgeBindingRequest): Promise<QueryGetBridgeBindingResponse>;
  listBridgeBindings(request?: QueryListBridgeBindingsRequest): Promise<QueryListBridgeBindingsResponse>;
  getFederatedContent(request: QueryGetFederatedContentRequest): Promise<QueryGetFederatedContentResponse>;
  listFederatedContent(request?: QueryListFederatedContentRequest): Promise<QueryListFederatedContentResponse>;
  getIdentityLink(request: QueryGetIdentityLinkRequest): Promise<QueryGetIdentityLinkResponse>;
  listIdentityLinks(request?: QueryListIdentityLinksRequest): Promise<QueryListIdentityLinksResponse>;
  resolveRemoteIdentity(request: QueryResolveRemoteIdentityRequest): Promise<QueryResolveRemoteIdentityResponse>;
  getPendingIdentityChallenge(request: QueryGetPendingIdentityChallengeRequest): Promise<QueryGetPendingIdentityChallengeResponse>;
  listPendingIdentityChallenges(request: QueryListPendingIdentityChallengesRequest): Promise<QueryListPendingIdentityChallengesResponse>;
  getReputationAttestation(request: QueryGetReputationAttestationRequest): Promise<QueryGetReputationAttestationResponse>;
  listOutboundAttestations(request?: QueryListOutboundAttestationsRequest): Promise<QueryListOutboundAttestationsResponse>;
  /**
   * VerifierActivity returns the per-verifier counter view: federation's
   * slim stored record (unchallenged verifications) overlaid with the
   * shared accountability state x/rep owns on RoleActivity -- per-kind
   * verification counts, verdict streaks, overturn cooldown. The generic
   * bond/status record lives in x/rep under
   * BondedRole(ROLE_TYPE_FEDERATION_VERIFIER, addr).
   */
  verifierActivity(request: QueryVerifierActivityRequest): Promise<QueryVerifierActivityResponse>;
  /**
   * OperatorRewardPool reports the bridge-operator SPARK pool's balance, cap
   * and today's draw against the daily allowance. Without it "why was I not
   * paid this epoch" has no on-chain answer.
   */
  operatorRewardPool(request?: QueryOperatorRewardPoolRequest): Promise<QueryOperatorRewardPoolResponse>;
  getVerificationRecord(request: QueryGetVerificationRecordRequest): Promise<QueryGetVerificationRecordResponse>;
  getEscalatedChallenge(request: QueryGetEscalatedChallengeRequest): Promise<QueryGetEscalatedChallengeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* GetPeer */
  getPeer = async (request: QueryGetPeerRequest): Promise<QueryGetPeerResponse> => {
    const data = QueryGetPeerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetPeer", data);
    return promise.then(data => QueryGetPeerResponse.decode(new BinaryReader(data)));
  };
  /* ListPeers */
  listPeers = async (request: QueryListPeersRequest = {
    pagination: undefined
  }): Promise<QueryListPeersResponse> => {
    const data = QueryListPeersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ListPeers", data);
    return promise.then(data => QueryListPeersResponse.decode(new BinaryReader(data)));
  };
  /* GetPeerPolicy */
  getPeerPolicy = async (request: QueryGetPeerPolicyRequest): Promise<QueryGetPeerPolicyResponse> => {
    const data = QueryGetPeerPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetPeerPolicy", data);
    return promise.then(data => QueryGetPeerPolicyResponse.decode(new BinaryReader(data)));
  };
  /* GetBridgeBinding */
  getBridgeBinding = async (request: QueryGetBridgeBindingRequest): Promise<QueryGetBridgeBindingResponse> => {
    const data = QueryGetBridgeBindingRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetBridgeBinding", data);
    return promise.then(data => QueryGetBridgeBindingResponse.decode(new BinaryReader(data)));
  };
  /* ListBridgeBindings */
  listBridgeBindings = async (request: QueryListBridgeBindingsRequest = {
    pagination: undefined
  }): Promise<QueryListBridgeBindingsResponse> => {
    const data = QueryListBridgeBindingsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ListBridgeBindings", data);
    return promise.then(data => QueryListBridgeBindingsResponse.decode(new BinaryReader(data)));
  };
  /* GetFederatedContent */
  getFederatedContent = async (request: QueryGetFederatedContentRequest): Promise<QueryGetFederatedContentResponse> => {
    const data = QueryGetFederatedContentRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetFederatedContent", data);
    return promise.then(data => QueryGetFederatedContentResponse.decode(new BinaryReader(data)));
  };
  /* ListFederatedContent */
  listFederatedContent = async (request: QueryListFederatedContentRequest = {
    pagination: undefined
  }): Promise<QueryListFederatedContentResponse> => {
    const data = QueryListFederatedContentRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ListFederatedContent", data);
    return promise.then(data => QueryListFederatedContentResponse.decode(new BinaryReader(data)));
  };
  /* GetIdentityLink */
  getIdentityLink = async (request: QueryGetIdentityLinkRequest): Promise<QueryGetIdentityLinkResponse> => {
    const data = QueryGetIdentityLinkRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetIdentityLink", data);
    return promise.then(data => QueryGetIdentityLinkResponse.decode(new BinaryReader(data)));
  };
  /* ListIdentityLinks */
  listIdentityLinks = async (request: QueryListIdentityLinksRequest = {
    pagination: undefined
  }): Promise<QueryListIdentityLinksResponse> => {
    const data = QueryListIdentityLinksRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ListIdentityLinks", data);
    return promise.then(data => QueryListIdentityLinksResponse.decode(new BinaryReader(data)));
  };
  /* ResolveRemoteIdentity */
  resolveRemoteIdentity = async (request: QueryResolveRemoteIdentityRequest): Promise<QueryResolveRemoteIdentityResponse> => {
    const data = QueryResolveRemoteIdentityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ResolveRemoteIdentity", data);
    return promise.then(data => QueryResolveRemoteIdentityResponse.decode(new BinaryReader(data)));
  };
  /* GetPendingIdentityChallenge */
  getPendingIdentityChallenge = async (request: QueryGetPendingIdentityChallengeRequest): Promise<QueryGetPendingIdentityChallengeResponse> => {
    const data = QueryGetPendingIdentityChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetPendingIdentityChallenge", data);
    return promise.then(data => QueryGetPendingIdentityChallengeResponse.decode(new BinaryReader(data)));
  };
  /* ListPendingIdentityChallenges */
  listPendingIdentityChallenges = async (request: QueryListPendingIdentityChallengesRequest): Promise<QueryListPendingIdentityChallengesResponse> => {
    const data = QueryListPendingIdentityChallengesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ListPendingIdentityChallenges", data);
    return promise.then(data => QueryListPendingIdentityChallengesResponse.decode(new BinaryReader(data)));
  };
  /* GetReputationAttestation */
  getReputationAttestation = async (request: QueryGetReputationAttestationRequest): Promise<QueryGetReputationAttestationResponse> => {
    const data = QueryGetReputationAttestationRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetReputationAttestation", data);
    return promise.then(data => QueryGetReputationAttestationResponse.decode(new BinaryReader(data)));
  };
  /* ListOutboundAttestations */
  listOutboundAttestations = async (request: QueryListOutboundAttestationsRequest = {
    pagination: undefined
  }): Promise<QueryListOutboundAttestationsResponse> => {
    const data = QueryListOutboundAttestationsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "ListOutboundAttestations", data);
    return promise.then(data => QueryListOutboundAttestationsResponse.decode(new BinaryReader(data)));
  };
  /* VerifierActivity returns the per-verifier counter view: federation's
   slim stored record (unchallenged verifications) overlaid with the
   shared accountability state x/rep owns on RoleActivity -- per-kind
   verification counts, verdict streaks, overturn cooldown. The generic
   bond/status record lives in x/rep under
   BondedRole(ROLE_TYPE_FEDERATION_VERIFIER, addr). */
  verifierActivity = async (request: QueryVerifierActivityRequest): Promise<QueryVerifierActivityResponse> => {
    const data = QueryVerifierActivityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "VerifierActivity", data);
    return promise.then(data => QueryVerifierActivityResponse.decode(new BinaryReader(data)));
  };
  /* OperatorRewardPool reports the bridge-operator SPARK pool's balance, cap
   and today's draw against the daily allowance. Without it "why was I not
   paid this epoch" has no on-chain answer. */
  operatorRewardPool = async (request: QueryOperatorRewardPoolRequest = {}): Promise<QueryOperatorRewardPoolResponse> => {
    const data = QueryOperatorRewardPoolRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "OperatorRewardPool", data);
    return promise.then(data => QueryOperatorRewardPoolResponse.decode(new BinaryReader(data)));
  };
  /* GetVerificationRecord */
  getVerificationRecord = async (request: QueryGetVerificationRecordRequest): Promise<QueryGetVerificationRecordResponse> => {
    const data = QueryGetVerificationRecordRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetVerificationRecord", data);
    return promise.then(data => QueryGetVerificationRecordResponse.decode(new BinaryReader(data)));
  };
  /* GetEscalatedChallenge */
  getEscalatedChallenge = async (request: QueryGetEscalatedChallengeRequest): Promise<QueryGetEscalatedChallengeResponse> => {
    const data = QueryGetEscalatedChallengeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Query", "GetEscalatedChallenge", data);
    return promise.then(data => QueryGetEscalatedChallengeResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getPeer(request: QueryGetPeerRequest): Promise<QueryGetPeerResponse> {
      return queryService.getPeer(request);
    },
    listPeers(request?: QueryListPeersRequest): Promise<QueryListPeersResponse> {
      return queryService.listPeers(request);
    },
    getPeerPolicy(request: QueryGetPeerPolicyRequest): Promise<QueryGetPeerPolicyResponse> {
      return queryService.getPeerPolicy(request);
    },
    getBridgeBinding(request: QueryGetBridgeBindingRequest): Promise<QueryGetBridgeBindingResponse> {
      return queryService.getBridgeBinding(request);
    },
    listBridgeBindings(request?: QueryListBridgeBindingsRequest): Promise<QueryListBridgeBindingsResponse> {
      return queryService.listBridgeBindings(request);
    },
    getFederatedContent(request: QueryGetFederatedContentRequest): Promise<QueryGetFederatedContentResponse> {
      return queryService.getFederatedContent(request);
    },
    listFederatedContent(request?: QueryListFederatedContentRequest): Promise<QueryListFederatedContentResponse> {
      return queryService.listFederatedContent(request);
    },
    getIdentityLink(request: QueryGetIdentityLinkRequest): Promise<QueryGetIdentityLinkResponse> {
      return queryService.getIdentityLink(request);
    },
    listIdentityLinks(request?: QueryListIdentityLinksRequest): Promise<QueryListIdentityLinksResponse> {
      return queryService.listIdentityLinks(request);
    },
    resolveRemoteIdentity(request: QueryResolveRemoteIdentityRequest): Promise<QueryResolveRemoteIdentityResponse> {
      return queryService.resolveRemoteIdentity(request);
    },
    getPendingIdentityChallenge(request: QueryGetPendingIdentityChallengeRequest): Promise<QueryGetPendingIdentityChallengeResponse> {
      return queryService.getPendingIdentityChallenge(request);
    },
    listPendingIdentityChallenges(request: QueryListPendingIdentityChallengesRequest): Promise<QueryListPendingIdentityChallengesResponse> {
      return queryService.listPendingIdentityChallenges(request);
    },
    getReputationAttestation(request: QueryGetReputationAttestationRequest): Promise<QueryGetReputationAttestationResponse> {
      return queryService.getReputationAttestation(request);
    },
    listOutboundAttestations(request?: QueryListOutboundAttestationsRequest): Promise<QueryListOutboundAttestationsResponse> {
      return queryService.listOutboundAttestations(request);
    },
    verifierActivity(request: QueryVerifierActivityRequest): Promise<QueryVerifierActivityResponse> {
      return queryService.verifierActivity(request);
    },
    operatorRewardPool(request?: QueryOperatorRewardPoolRequest): Promise<QueryOperatorRewardPoolResponse> {
      return queryService.operatorRewardPool(request);
    },
    getVerificationRecord(request: QueryGetVerificationRecordRequest): Promise<QueryGetVerificationRecordResponse> {
      return queryService.getVerificationRecord(request);
    },
    getEscalatedChallenge(request: QueryGetEscalatedChallengeRequest): Promise<QueryGetEscalatedChallengeResponse> {
      return queryService.getEscalatedChallenge(request);
    }
  };
};