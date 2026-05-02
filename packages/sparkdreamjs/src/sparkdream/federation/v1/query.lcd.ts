//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPeerRequest, QueryGetPeerResponse, QueryListPeersRequest, QueryListPeersResponse, QueryGetPeerPolicyRequest, QueryGetPeerPolicyResponse, QueryGetBridgeOperatorRequest, QueryGetBridgeOperatorResponse, QueryListBridgeOperatorsRequest, QueryListBridgeOperatorsResponse, QueryGetFederatedContentRequest, QueryGetFederatedContentResponse, QueryListFederatedContentRequest, QueryListFederatedContentResponse, QueryGetIdentityLinkRequest, QueryGetIdentityLinkResponse, QueryListIdentityLinksRequest, QueryListIdentityLinksResponse, QueryResolveRemoteIdentityRequest, QueryResolveRemoteIdentityResponse, QueryGetPendingIdentityChallengeRequest, QueryGetPendingIdentityChallengeResponse, QueryListPendingIdentityChallengesRequest, QueryListPendingIdentityChallengesResponse, QueryGetReputationAttestationRequest, QueryGetReputationAttestationResponse, QueryListOutboundAttestationsRequest, QueryListOutboundAttestationsResponse, QueryVerifierActivityRequest, QueryVerifierActivityResponse, QueryGetVerificationRecordRequest, QueryGetVerificationRecordResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/federation/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* GetPeer */
  getPeer = async (params: QueryGetPeerRequest): Promise<QueryGetPeerResponse> => {
    const endpoint = `sparkdream/federation/v1/get_peer/${params.peerId}`;
    return await this.req.get<QueryGetPeerResponse>(endpoint);
  };
  /* ListPeers */
  listPeers = async (params: QueryListPeersRequest = {
    pagination: undefined
  }): Promise<QueryListPeersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/federation/v1/list_peers`;
    return await this.req.get<QueryListPeersResponse>(endpoint, options);
  };
  /* GetPeerPolicy */
  getPeerPolicy = async (params: QueryGetPeerPolicyRequest): Promise<QueryGetPeerPolicyResponse> => {
    const endpoint = `sparkdream/federation/v1/get_peer_policy/${params.peerId}`;
    return await this.req.get<QueryGetPeerPolicyResponse>(endpoint);
  };
  /* GetBridgeOperator */
  getBridgeOperator = async (params: QueryGetBridgeOperatorRequest): Promise<QueryGetBridgeOperatorResponse> => {
    const endpoint = `sparkdream/federation/v1/get_bridge_operator/${params.address}/${params.peerId}`;
    return await this.req.get<QueryGetBridgeOperatorResponse>(endpoint);
  };
  /* ListBridgeOperators */
  listBridgeOperators = async (params: QueryListBridgeOperatorsRequest = {
    pagination: undefined
  }): Promise<QueryListBridgeOperatorsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/federation/v1/list_bridge_operators`;
    return await this.req.get<QueryListBridgeOperatorsResponse>(endpoint, options);
  };
  /* GetFederatedContent */
  getFederatedContent = async (params: QueryGetFederatedContentRequest): Promise<QueryGetFederatedContentResponse> => {
    const endpoint = `sparkdream/federation/v1/get_federated_content/${params.id}`;
    return await this.req.get<QueryGetFederatedContentResponse>(endpoint);
  };
  /* ListFederatedContent */
  listFederatedContent = async (params: QueryListFederatedContentRequest = {
    pagination: undefined
  }): Promise<QueryListFederatedContentResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/federation/v1/list_federated_content`;
    return await this.req.get<QueryListFederatedContentResponse>(endpoint, options);
  };
  /* GetIdentityLink */
  getIdentityLink = async (params: QueryGetIdentityLinkRequest): Promise<QueryGetIdentityLinkResponse> => {
    const endpoint = `sparkdream/federation/v1/get_identity_link/${params.localAddress}/${params.peerId}`;
    return await this.req.get<QueryGetIdentityLinkResponse>(endpoint);
  };
  /* ListIdentityLinks */
  listIdentityLinks = async (params: QueryListIdentityLinksRequest = {
    pagination: undefined
  }): Promise<QueryListIdentityLinksResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/federation/v1/list_identity_links`;
    return await this.req.get<QueryListIdentityLinksResponse>(endpoint, options);
  };
  /* ResolveRemoteIdentity */
  resolveRemoteIdentity = async (params: QueryResolveRemoteIdentityRequest): Promise<QueryResolveRemoteIdentityResponse> => {
    const endpoint = `sparkdream/federation/v1/resolve_remote_identity/${params.peerId}/${params.remoteIdentity}`;
    return await this.req.get<QueryResolveRemoteIdentityResponse>(endpoint);
  };
  /* GetPendingIdentityChallenge */
  getPendingIdentityChallenge = async (params: QueryGetPendingIdentityChallengeRequest): Promise<QueryGetPendingIdentityChallengeResponse> => {
    const endpoint = `sparkdream/federation/v1/get_pending_identity_challenge/${params.claimedAddress}/${params.peerId}`;
    return await this.req.get<QueryGetPendingIdentityChallengeResponse>(endpoint);
  };
  /* ListPendingIdentityChallenges */
  listPendingIdentityChallenges = async (params: QueryListPendingIdentityChallengesRequest): Promise<QueryListPendingIdentityChallengesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/federation/v1/list_pending_identity_challenges/${params.claimedAddress}`;
    return await this.req.get<QueryListPendingIdentityChallengesResponse>(endpoint, options);
  };
  /* GetReputationAttestation */
  getReputationAttestation = async (params: QueryGetReputationAttestationRequest): Promise<QueryGetReputationAttestationResponse> => {
    const endpoint = `sparkdream/federation/v1/get_reputation_attestation/${params.localAddress}/${params.peerId}`;
    return await this.req.get<QueryGetReputationAttestationResponse>(endpoint);
  };
  /* ListOutboundAttestations */
  listOutboundAttestations = async (params: QueryListOutboundAttestationsRequest = {
    pagination: undefined
  }): Promise<QueryListOutboundAttestationsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/federation/v1/list_outbound_attestations`;
    return await this.req.get<QueryListOutboundAttestationsResponse>(endpoint, options);
  };
  /* VerifierActivity returns federation-specific per-verifier counters
   (verifications, upheld, overturned, consecutive streaks). The generic
   bond/status record lives in x/rep under
   BondedRole(ROLE_TYPE_FEDERATION_VERIFIER, addr). */
  verifierActivity = async (params: QueryVerifierActivityRequest): Promise<QueryVerifierActivityResponse> => {
    const endpoint = `sparkdream/federation/v1/verifier_activity/${params.address}`;
    return await this.req.get<QueryVerifierActivityResponse>(endpoint);
  };
  /* GetVerificationRecord */
  getVerificationRecord = async (params: QueryGetVerificationRecordRequest): Promise<QueryGetVerificationRecordResponse> => {
    const endpoint = `sparkdream/federation/v1/get_verification_record/${params.contentId}`;
    return await this.req.get<QueryGetVerificationRecordResponse>(endpoint);
  };
}