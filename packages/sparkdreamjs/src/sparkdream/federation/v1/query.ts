//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Peer, PeerAmino, PeerPolicy, PeerPolicyAmino, BridgeBinding, BridgeBindingAmino, FederatedContent, FederatedContentAmino, IdentityLink, IdentityLinkAmino, PendingIdentityChallenge, PendingIdentityChallengeAmino, ReputationAttestation, ReputationAttestationAmino, OutboundAttestation, OutboundAttestationAmino, VerificationRecord, VerificationRecordAmino, EscalatedChallenge, EscalatedChallengeAmino } from "./types";
import { VerifierActivity, VerifierActivityAmino } from "./verifier_activity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * --- Params ---
 * @name QueryParamsRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * --- Params ---
 * @name QueryParamsRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * @name QueryParamsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * --- Peer ---
 * @name QueryGetPeerRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerRequest
 */
export interface QueryGetPeerRequest {
  peerId: string;
}
export interface QueryGetPeerRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerRequest";
  value: Uint8Array;
}
/**
 * --- Peer ---
 * @name QueryGetPeerRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerRequest
 */
export interface QueryGetPeerRequestAmino {
  peer_id?: string;
}
export interface QueryGetPeerRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetPeerRequest";
  value: QueryGetPeerRequestAmino;
}
/**
 * @name QueryGetPeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerResponse
 */
export interface QueryGetPeerResponse {
  peer: Peer;
}
export interface QueryGetPeerResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetPeerResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerResponse
 */
export interface QueryGetPeerResponseAmino {
  peer?: PeerAmino;
}
export interface QueryGetPeerResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetPeerResponse";
  value: QueryGetPeerResponseAmino;
}
/**
 * @name QueryListPeersRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPeersRequest
 */
export interface QueryListPeersRequest {
  pagination?: PageRequest;
}
export interface QueryListPeersRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListPeersRequest";
  value: Uint8Array;
}
/**
 * @name QueryListPeersRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPeersRequest
 */
export interface QueryListPeersRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListPeersRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryListPeersRequest";
  value: QueryListPeersRequestAmino;
}
/**
 * @name QueryListPeersResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPeersResponse
 */
export interface QueryListPeersResponse {
  peers: Peer[];
  pagination?: PageResponse;
}
export interface QueryListPeersResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListPeersResponse";
  value: Uint8Array;
}
/**
 * @name QueryListPeersResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPeersResponse
 */
export interface QueryListPeersResponseAmino {
  peers?: PeerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListPeersResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryListPeersResponse";
  value: QueryListPeersResponseAmino;
}
/**
 * --- PeerPolicy ---
 * @name QueryGetPeerPolicyRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerPolicyRequest
 */
export interface QueryGetPeerPolicyRequest {
  peerId: string;
}
export interface QueryGetPeerPolicyRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerPolicyRequest";
  value: Uint8Array;
}
/**
 * --- PeerPolicy ---
 * @name QueryGetPeerPolicyRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerPolicyRequest
 */
export interface QueryGetPeerPolicyRequestAmino {
  peer_id?: string;
}
export interface QueryGetPeerPolicyRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetPeerPolicyRequest";
  value: QueryGetPeerPolicyRequestAmino;
}
/**
 * @name QueryGetPeerPolicyResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerPolicyResponse
 */
export interface QueryGetPeerPolicyResponse {
  policy: PeerPolicy;
}
export interface QueryGetPeerPolicyResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerPolicyResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetPeerPolicyResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerPolicyResponse
 */
export interface QueryGetPeerPolicyResponseAmino {
  policy?: PeerPolicyAmino;
}
export interface QueryGetPeerPolicyResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetPeerPolicyResponse";
  value: QueryGetPeerPolicyResponseAmino;
}
/**
 * --- BridgeBinding ---
 * Note: Phase 7 of the federation→service migration will enrich these
 * responses with joined service.Operator status (bond, status,
 * unbond_complete_at). For now the response carries only the federation-
 * side binding; callers wanting live economic state can query x/service
 * separately by (address, federation-bridge-<protocol>).
 * @name QueryGetBridgeBindingRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetBridgeBindingRequest
 */
export interface QueryGetBridgeBindingRequest {
  address: string;
  peerId: string;
}
export interface QueryGetBridgeBindingRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetBridgeBindingRequest";
  value: Uint8Array;
}
/**
 * --- BridgeBinding ---
 * Note: Phase 7 of the federation→service migration will enrich these
 * responses with joined service.Operator status (bond, status,
 * unbond_complete_at). For now the response carries only the federation-
 * side binding; callers wanting live economic state can query x/service
 * separately by (address, federation-bridge-<protocol>).
 * @name QueryGetBridgeBindingRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetBridgeBindingRequest
 */
export interface QueryGetBridgeBindingRequestAmino {
  address?: string;
  peer_id?: string;
}
export interface QueryGetBridgeBindingRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetBridgeBindingRequest";
  value: QueryGetBridgeBindingRequestAmino;
}
/**
 * @name QueryGetBridgeBindingResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetBridgeBindingResponse
 */
export interface QueryGetBridgeBindingResponse {
  bridgeBinding: BridgeBinding;
}
export interface QueryGetBridgeBindingResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetBridgeBindingResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetBridgeBindingResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetBridgeBindingResponse
 */
export interface QueryGetBridgeBindingResponseAmino {
  bridge_binding?: BridgeBindingAmino;
}
export interface QueryGetBridgeBindingResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetBridgeBindingResponse";
  value: QueryGetBridgeBindingResponseAmino;
}
/**
 * @name QueryListBridgeBindingsRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListBridgeBindingsRequest
 */
export interface QueryListBridgeBindingsRequest {
  pagination?: PageRequest;
}
export interface QueryListBridgeBindingsRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListBridgeBindingsRequest";
  value: Uint8Array;
}
/**
 * @name QueryListBridgeBindingsRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListBridgeBindingsRequest
 */
export interface QueryListBridgeBindingsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListBridgeBindingsRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryListBridgeBindingsRequest";
  value: QueryListBridgeBindingsRequestAmino;
}
/**
 * @name QueryListBridgeBindingsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListBridgeBindingsResponse
 */
export interface QueryListBridgeBindingsResponse {
  bridgeBindings: BridgeBinding[];
  pagination?: PageResponse;
}
export interface QueryListBridgeBindingsResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListBridgeBindingsResponse";
  value: Uint8Array;
}
/**
 * @name QueryListBridgeBindingsResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListBridgeBindingsResponse
 */
export interface QueryListBridgeBindingsResponseAmino {
  bridge_bindings?: BridgeBindingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListBridgeBindingsResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryListBridgeBindingsResponse";
  value: QueryListBridgeBindingsResponseAmino;
}
/**
 * --- FederatedContent ---
 * @name QueryGetFederatedContentRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetFederatedContentRequest
 */
export interface QueryGetFederatedContentRequest {
  id: bigint;
}
export interface QueryGetFederatedContentRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetFederatedContentRequest";
  value: Uint8Array;
}
/**
 * --- FederatedContent ---
 * @name QueryGetFederatedContentRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetFederatedContentRequest
 */
export interface QueryGetFederatedContentRequestAmino {
  id?: string;
}
export interface QueryGetFederatedContentRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetFederatedContentRequest";
  value: QueryGetFederatedContentRequestAmino;
}
/**
 * @name QueryGetFederatedContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetFederatedContentResponse
 */
export interface QueryGetFederatedContentResponse {
  content: FederatedContent;
}
export interface QueryGetFederatedContentResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetFederatedContentResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetFederatedContentResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetFederatedContentResponse
 */
export interface QueryGetFederatedContentResponseAmino {
  content?: FederatedContentAmino;
}
export interface QueryGetFederatedContentResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetFederatedContentResponse";
  value: QueryGetFederatedContentResponseAmino;
}
/**
 * @name QueryListFederatedContentRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListFederatedContentRequest
 */
export interface QueryListFederatedContentRequest {
  pagination?: PageRequest;
}
export interface QueryListFederatedContentRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListFederatedContentRequest";
  value: Uint8Array;
}
/**
 * @name QueryListFederatedContentRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListFederatedContentRequest
 */
export interface QueryListFederatedContentRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListFederatedContentRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryListFederatedContentRequest";
  value: QueryListFederatedContentRequestAmino;
}
/**
 * @name QueryListFederatedContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListFederatedContentResponse
 */
export interface QueryListFederatedContentResponse {
  content: FederatedContent[];
  pagination?: PageResponse;
}
export interface QueryListFederatedContentResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListFederatedContentResponse";
  value: Uint8Array;
}
/**
 * @name QueryListFederatedContentResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListFederatedContentResponse
 */
export interface QueryListFederatedContentResponseAmino {
  content?: FederatedContentAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListFederatedContentResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryListFederatedContentResponse";
  value: QueryListFederatedContentResponseAmino;
}
/**
 * --- IdentityLink ---
 * @name QueryGetIdentityLinkRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetIdentityLinkRequest
 */
export interface QueryGetIdentityLinkRequest {
  localAddress: string;
  peerId: string;
}
export interface QueryGetIdentityLinkRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetIdentityLinkRequest";
  value: Uint8Array;
}
/**
 * --- IdentityLink ---
 * @name QueryGetIdentityLinkRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetIdentityLinkRequest
 */
export interface QueryGetIdentityLinkRequestAmino {
  local_address?: string;
  peer_id?: string;
}
export interface QueryGetIdentityLinkRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetIdentityLinkRequest";
  value: QueryGetIdentityLinkRequestAmino;
}
/**
 * @name QueryGetIdentityLinkResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetIdentityLinkResponse
 */
export interface QueryGetIdentityLinkResponse {
  link: IdentityLink;
}
export interface QueryGetIdentityLinkResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetIdentityLinkResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetIdentityLinkResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetIdentityLinkResponse
 */
export interface QueryGetIdentityLinkResponseAmino {
  link?: IdentityLinkAmino;
}
export interface QueryGetIdentityLinkResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetIdentityLinkResponse";
  value: QueryGetIdentityLinkResponseAmino;
}
/**
 * @name QueryListIdentityLinksRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListIdentityLinksRequest
 */
export interface QueryListIdentityLinksRequest {
  pagination?: PageRequest;
}
export interface QueryListIdentityLinksRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListIdentityLinksRequest";
  value: Uint8Array;
}
/**
 * @name QueryListIdentityLinksRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListIdentityLinksRequest
 */
export interface QueryListIdentityLinksRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListIdentityLinksRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryListIdentityLinksRequest";
  value: QueryListIdentityLinksRequestAmino;
}
/**
 * @name QueryListIdentityLinksResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListIdentityLinksResponse
 */
export interface QueryListIdentityLinksResponse {
  links: IdentityLink[];
  pagination?: PageResponse;
}
export interface QueryListIdentityLinksResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListIdentityLinksResponse";
  value: Uint8Array;
}
/**
 * @name QueryListIdentityLinksResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListIdentityLinksResponse
 */
export interface QueryListIdentityLinksResponseAmino {
  links?: IdentityLinkAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListIdentityLinksResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryListIdentityLinksResponse";
  value: QueryListIdentityLinksResponseAmino;
}
/**
 * --- ResolveRemoteIdentity ---
 * @name QueryResolveRemoteIdentityRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryResolveRemoteIdentityRequest
 */
export interface QueryResolveRemoteIdentityRequest {
  peerId: string;
  remoteIdentity: string;
}
export interface QueryResolveRemoteIdentityRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryResolveRemoteIdentityRequest";
  value: Uint8Array;
}
/**
 * --- ResolveRemoteIdentity ---
 * @name QueryResolveRemoteIdentityRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryResolveRemoteIdentityRequest
 */
export interface QueryResolveRemoteIdentityRequestAmino {
  peer_id?: string;
  remote_identity?: string;
}
export interface QueryResolveRemoteIdentityRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryResolveRemoteIdentityRequest";
  value: QueryResolveRemoteIdentityRequestAmino;
}
/**
 * @name QueryResolveRemoteIdentityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryResolveRemoteIdentityResponse
 */
export interface QueryResolveRemoteIdentityResponse {
  localAddress: string;
}
export interface QueryResolveRemoteIdentityResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryResolveRemoteIdentityResponse";
  value: Uint8Array;
}
/**
 * @name QueryResolveRemoteIdentityResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryResolveRemoteIdentityResponse
 */
export interface QueryResolveRemoteIdentityResponseAmino {
  local_address?: string;
}
export interface QueryResolveRemoteIdentityResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryResolveRemoteIdentityResponse";
  value: QueryResolveRemoteIdentityResponseAmino;
}
/**
 * --- PendingIdentityChallenge ---
 * @name QueryGetPendingIdentityChallengeRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest
 */
export interface QueryGetPendingIdentityChallengeRequest {
  claimedAddress: string;
  peerId: string;
}
export interface QueryGetPendingIdentityChallengeRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest";
  value: Uint8Array;
}
/**
 * --- PendingIdentityChallenge ---
 * @name QueryGetPendingIdentityChallengeRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest
 */
export interface QueryGetPendingIdentityChallengeRequestAmino {
  claimed_address?: string;
  peer_id?: string;
}
export interface QueryGetPendingIdentityChallengeRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest";
  value: QueryGetPendingIdentityChallengeRequestAmino;
}
/**
 * @name QueryGetPendingIdentityChallengeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse
 */
export interface QueryGetPendingIdentityChallengeResponse {
  challenge: PendingIdentityChallenge;
}
export interface QueryGetPendingIdentityChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetPendingIdentityChallengeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse
 */
export interface QueryGetPendingIdentityChallengeResponseAmino {
  challenge?: PendingIdentityChallengeAmino;
}
export interface QueryGetPendingIdentityChallengeResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse";
  value: QueryGetPendingIdentityChallengeResponseAmino;
}
/**
 * @name QueryListPendingIdentityChallengesRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest
 */
export interface QueryListPendingIdentityChallengesRequest {
  claimedAddress: string;
  pagination?: PageRequest;
}
export interface QueryListPendingIdentityChallengesRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest";
  value: Uint8Array;
}
/**
 * @name QueryListPendingIdentityChallengesRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest
 */
export interface QueryListPendingIdentityChallengesRequestAmino {
  claimed_address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListPendingIdentityChallengesRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest";
  value: QueryListPendingIdentityChallengesRequestAmino;
}
/**
 * @name QueryListPendingIdentityChallengesResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse
 */
export interface QueryListPendingIdentityChallengesResponse {
  challenges: PendingIdentityChallenge[];
  pagination?: PageResponse;
}
export interface QueryListPendingIdentityChallengesResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse";
  value: Uint8Array;
}
/**
 * @name QueryListPendingIdentityChallengesResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse
 */
export interface QueryListPendingIdentityChallengesResponseAmino {
  challenges?: PendingIdentityChallengeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListPendingIdentityChallengesResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse";
  value: QueryListPendingIdentityChallengesResponseAmino;
}
/**
 * --- ReputationAttestation ---
 * @name QueryGetReputationAttestationRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetReputationAttestationRequest
 */
export interface QueryGetReputationAttestationRequest {
  localAddress: string;
  peerId: string;
}
export interface QueryGetReputationAttestationRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetReputationAttestationRequest";
  value: Uint8Array;
}
/**
 * --- ReputationAttestation ---
 * @name QueryGetReputationAttestationRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetReputationAttestationRequest
 */
export interface QueryGetReputationAttestationRequestAmino {
  local_address?: string;
  peer_id?: string;
}
export interface QueryGetReputationAttestationRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetReputationAttestationRequest";
  value: QueryGetReputationAttestationRequestAmino;
}
/**
 * @name QueryGetReputationAttestationResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetReputationAttestationResponse
 */
export interface QueryGetReputationAttestationResponse {
  attestation: ReputationAttestation;
}
export interface QueryGetReputationAttestationResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetReputationAttestationResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetReputationAttestationResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetReputationAttestationResponse
 */
export interface QueryGetReputationAttestationResponseAmino {
  attestation?: ReputationAttestationAmino;
}
export interface QueryGetReputationAttestationResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetReputationAttestationResponse";
  value: QueryGetReputationAttestationResponseAmino;
}
/**
 * --- OutboundAttestation ---
 * @name QueryListOutboundAttestationsRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListOutboundAttestationsRequest
 */
export interface QueryListOutboundAttestationsRequest {
  pagination?: PageRequest;
}
export interface QueryListOutboundAttestationsRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListOutboundAttestationsRequest";
  value: Uint8Array;
}
/**
 * --- OutboundAttestation ---
 * @name QueryListOutboundAttestationsRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListOutboundAttestationsRequest
 */
export interface QueryListOutboundAttestationsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListOutboundAttestationsRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryListOutboundAttestationsRequest";
  value: QueryListOutboundAttestationsRequestAmino;
}
/**
 * @name QueryListOutboundAttestationsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListOutboundAttestationsResponse
 */
export interface QueryListOutboundAttestationsResponse {
  attestations: OutboundAttestation[];
  pagination?: PageResponse;
}
export interface QueryListOutboundAttestationsResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryListOutboundAttestationsResponse";
  value: Uint8Array;
}
/**
 * @name QueryListOutboundAttestationsResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListOutboundAttestationsResponse
 */
export interface QueryListOutboundAttestationsResponseAmino {
  attestations?: OutboundAttestationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListOutboundAttestationsResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryListOutboundAttestationsResponse";
  value: QueryListOutboundAttestationsResponseAmino;
}
/**
 * --- Verifier (bond state lives in x/rep BondedRole) ---
 * @name QueryVerifierActivityRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryVerifierActivityRequest
 */
export interface QueryVerifierActivityRequest {
  address: string;
}
export interface QueryVerifierActivityRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryVerifierActivityRequest";
  value: Uint8Array;
}
/**
 * --- Verifier (bond state lives in x/rep BondedRole) ---
 * @name QueryVerifierActivityRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryVerifierActivityRequest
 */
export interface QueryVerifierActivityRequestAmino {
  address?: string;
}
export interface QueryVerifierActivityRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryVerifierActivityRequest";
  value: QueryVerifierActivityRequestAmino;
}
/**
 * @name QueryVerifierActivityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryVerifierActivityResponse
 */
export interface QueryVerifierActivityResponse {
  activity: VerifierActivity;
}
export interface QueryVerifierActivityResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryVerifierActivityResponse";
  value: Uint8Array;
}
/**
 * @name QueryVerifierActivityResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryVerifierActivityResponse
 */
export interface QueryVerifierActivityResponseAmino {
  activity?: VerifierActivityAmino;
}
export interface QueryVerifierActivityResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryVerifierActivityResponse";
  value: QueryVerifierActivityResponseAmino;
}
/**
 * --- VerificationRecord ---
 * @name QueryGetVerificationRecordRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetVerificationRecordRequest
 */
export interface QueryGetVerificationRecordRequest {
  contentId: bigint;
}
export interface QueryGetVerificationRecordRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetVerificationRecordRequest";
  value: Uint8Array;
}
/**
 * --- VerificationRecord ---
 * @name QueryGetVerificationRecordRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetVerificationRecordRequest
 */
export interface QueryGetVerificationRecordRequestAmino {
  content_id?: string;
}
export interface QueryGetVerificationRecordRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetVerificationRecordRequest";
  value: QueryGetVerificationRecordRequestAmino;
}
/**
 * @name QueryGetVerificationRecordResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetVerificationRecordResponse
 */
export interface QueryGetVerificationRecordResponse {
  record: VerificationRecord;
}
export interface QueryGetVerificationRecordResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetVerificationRecordResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetVerificationRecordResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetVerificationRecordResponse
 */
export interface QueryGetVerificationRecordResponseAmino {
  record?: VerificationRecordAmino;
}
export interface QueryGetVerificationRecordResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetVerificationRecordResponse";
  value: QueryGetVerificationRecordResponseAmino;
}
/**
 * EscalatedChallenge lookup. Returns the Phase 2 (jury) lifecycle
 * record for a content_id whose challenge has been escalated past the
 * auto-resolution window. Returns NotFound when no jury lifecycle is
 * currently open.
 * @name QueryGetEscalatedChallengeRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetEscalatedChallengeRequest
 */
export interface QueryGetEscalatedChallengeRequest {
  contentId: bigint;
}
export interface QueryGetEscalatedChallengeRequestProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetEscalatedChallengeRequest";
  value: Uint8Array;
}
/**
 * EscalatedChallenge lookup. Returns the Phase 2 (jury) lifecycle
 * record for a content_id whose challenge has been escalated past the
 * auto-resolution window. Returns NotFound when no jury lifecycle is
 * currently open.
 * @name QueryGetEscalatedChallengeRequestAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetEscalatedChallengeRequest
 */
export interface QueryGetEscalatedChallengeRequestAmino {
  content_id?: string;
}
export interface QueryGetEscalatedChallengeRequestAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetEscalatedChallengeRequest";
  value: QueryGetEscalatedChallengeRequestAmino;
}
/**
 * @name QueryGetEscalatedChallengeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetEscalatedChallengeResponse
 */
export interface QueryGetEscalatedChallengeResponse {
  escalated: EscalatedChallenge;
}
export interface QueryGetEscalatedChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.QueryGetEscalatedChallengeResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetEscalatedChallengeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetEscalatedChallengeResponse
 */
export interface QueryGetEscalatedChallengeResponseAmino {
  escalated?: EscalatedChallengeAmino;
}
export interface QueryGetEscalatedChallengeResponseAminoMsg {
  type: "/sparkdream.federation.v1.QueryGetEscalatedChallengeResponse";
  value: QueryGetEscalatedChallengeResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * --- Params ---
 * @name QueryParamsRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.federation.v1.QueryParamsRequest",
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
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.federation.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPeerRequest(): QueryGetPeerRequest {
  return {
    peerId: ""
  };
}
/**
 * --- Peer ---
 * @name QueryGetPeerRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerRequest
 */
export const QueryGetPeerRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerRequest",
  encode(message: QueryGetPeerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peerId !== "") {
      writer.uint32(10).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPeerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPeerRequest>): QueryGetPeerRequest {
    const message = createBaseQueryGetPeerRequest();
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: QueryGetPeerRequestAmino): QueryGetPeerRequest {
    const message = createBaseQueryGetPeerRequest();
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: QueryGetPeerRequest): QueryGetPeerRequestAmino {
    const obj: any = {};
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: QueryGetPeerRequestAminoMsg): QueryGetPeerRequest {
    return QueryGetPeerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPeerRequestProtoMsg): QueryGetPeerRequest {
    return QueryGetPeerRequest.decode(message.value);
  },
  toProto(message: QueryGetPeerRequest): Uint8Array {
    return QueryGetPeerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPeerRequest): QueryGetPeerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetPeerRequest",
      value: QueryGetPeerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPeerResponse(): QueryGetPeerResponse {
  return {
    peer: Peer.fromPartial({})
  };
}
/**
 * @name QueryGetPeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerResponse
 */
export const QueryGetPeerResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerResponse",
  encode(message: QueryGetPeerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPeerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPeerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPeerResponse>): QueryGetPeerResponse {
    const message = createBaseQueryGetPeerResponse();
    message.peer = object.peer !== undefined && object.peer !== null ? Peer.fromPartial(object.peer) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPeerResponseAmino): QueryGetPeerResponse {
    const message = createBaseQueryGetPeerResponse();
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromAmino(object.peer);
    }
    return message;
  },
  toAmino(message: QueryGetPeerResponse): QueryGetPeerResponseAmino {
    const obj: any = {};
    obj.peer = message.peer ? Peer.toAmino(message.peer) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPeerResponseAminoMsg): QueryGetPeerResponse {
    return QueryGetPeerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPeerResponseProtoMsg): QueryGetPeerResponse {
    return QueryGetPeerResponse.decode(message.value);
  },
  toProto(message: QueryGetPeerResponse): Uint8Array {
    return QueryGetPeerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPeerResponse): QueryGetPeerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetPeerResponse",
      value: QueryGetPeerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPeersRequest(): QueryListPeersRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryListPeersRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPeersRequest
 */
export const QueryListPeersRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryListPeersRequest",
  encode(message: QueryListPeersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPeersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPeersRequest();
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
  fromPartial(object: DeepPartial<QueryListPeersRequest>): QueryListPeersRequest {
    const message = createBaseQueryListPeersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPeersRequestAmino): QueryListPeersRequest {
    const message = createBaseQueryListPeersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPeersRequest): QueryListPeersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPeersRequestAminoMsg): QueryListPeersRequest {
    return QueryListPeersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPeersRequestProtoMsg): QueryListPeersRequest {
    return QueryListPeersRequest.decode(message.value);
  },
  toProto(message: QueryListPeersRequest): Uint8Array {
    return QueryListPeersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPeersRequest): QueryListPeersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListPeersRequest",
      value: QueryListPeersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPeersResponse(): QueryListPeersResponse {
  return {
    peers: [],
    pagination: undefined
  };
}
/**
 * @name QueryListPeersResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPeersResponse
 */
export const QueryListPeersResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryListPeersResponse",
  encode(message: QueryListPeersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.peers) {
      Peer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPeersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPeersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peers.push(Peer.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListPeersResponse>): QueryListPeersResponse {
    const message = createBaseQueryListPeersResponse();
    message.peers = object.peers?.map(e => Peer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPeersResponseAmino): QueryListPeersResponse {
    const message = createBaseQueryListPeersResponse();
    message.peers = object.peers?.map(e => Peer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPeersResponse): QueryListPeersResponseAmino {
    const obj: any = {};
    if (message.peers) {
      obj.peers = message.peers.map(e => e ? Peer.toAmino(e) : undefined);
    } else {
      obj.peers = message.peers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPeersResponseAminoMsg): QueryListPeersResponse {
    return QueryListPeersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPeersResponseProtoMsg): QueryListPeersResponse {
    return QueryListPeersResponse.decode(message.value);
  },
  toProto(message: QueryListPeersResponse): Uint8Array {
    return QueryListPeersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPeersResponse): QueryListPeersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListPeersResponse",
      value: QueryListPeersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPeerPolicyRequest(): QueryGetPeerPolicyRequest {
  return {
    peerId: ""
  };
}
/**
 * --- PeerPolicy ---
 * @name QueryGetPeerPolicyRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerPolicyRequest
 */
export const QueryGetPeerPolicyRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerPolicyRequest",
  encode(message: QueryGetPeerPolicyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peerId !== "") {
      writer.uint32(10).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPeerPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPeerPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPeerPolicyRequest>): QueryGetPeerPolicyRequest {
    const message = createBaseQueryGetPeerPolicyRequest();
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: QueryGetPeerPolicyRequestAmino): QueryGetPeerPolicyRequest {
    const message = createBaseQueryGetPeerPolicyRequest();
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: QueryGetPeerPolicyRequest): QueryGetPeerPolicyRequestAmino {
    const obj: any = {};
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: QueryGetPeerPolicyRequestAminoMsg): QueryGetPeerPolicyRequest {
    return QueryGetPeerPolicyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPeerPolicyRequestProtoMsg): QueryGetPeerPolicyRequest {
    return QueryGetPeerPolicyRequest.decode(message.value);
  },
  toProto(message: QueryGetPeerPolicyRequest): Uint8Array {
    return QueryGetPeerPolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPeerPolicyRequest): QueryGetPeerPolicyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetPeerPolicyRequest",
      value: QueryGetPeerPolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPeerPolicyResponse(): QueryGetPeerPolicyResponse {
  return {
    policy: PeerPolicy.fromPartial({})
  };
}
/**
 * @name QueryGetPeerPolicyResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPeerPolicyResponse
 */
export const QueryGetPeerPolicyResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetPeerPolicyResponse",
  encode(message: QueryGetPeerPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policy !== undefined) {
      PeerPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPeerPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPeerPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = PeerPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPeerPolicyResponse>): QueryGetPeerPolicyResponse {
    const message = createBaseQueryGetPeerPolicyResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? PeerPolicy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPeerPolicyResponseAmino): QueryGetPeerPolicyResponse {
    const message = createBaseQueryGetPeerPolicyResponse();
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = PeerPolicy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: QueryGetPeerPolicyResponse): QueryGetPeerPolicyResponseAmino {
    const obj: any = {};
    obj.policy = message.policy ? PeerPolicy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPeerPolicyResponseAminoMsg): QueryGetPeerPolicyResponse {
    return QueryGetPeerPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPeerPolicyResponseProtoMsg): QueryGetPeerPolicyResponse {
    return QueryGetPeerPolicyResponse.decode(message.value);
  },
  toProto(message: QueryGetPeerPolicyResponse): Uint8Array {
    return QueryGetPeerPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPeerPolicyResponse): QueryGetPeerPolicyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetPeerPolicyResponse",
      value: QueryGetPeerPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBridgeBindingRequest(): QueryGetBridgeBindingRequest {
  return {
    address: "",
    peerId: ""
  };
}
/**
 * --- BridgeBinding ---
 * Note: Phase 7 of the federation→service migration will enrich these
 * responses with joined service.Operator status (bond, status,
 * unbond_complete_at). For now the response carries only the federation-
 * side binding; callers wanting live economic state can query x/service
 * separately by (address, federation-bridge-<protocol>).
 * @name QueryGetBridgeBindingRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetBridgeBindingRequest
 */
export const QueryGetBridgeBindingRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetBridgeBindingRequest",
  encode(message: QueryGetBridgeBindingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBridgeBindingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBridgeBindingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBridgeBindingRequest>): QueryGetBridgeBindingRequest {
    const message = createBaseQueryGetBridgeBindingRequest();
    message.address = object.address ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: QueryGetBridgeBindingRequestAmino): QueryGetBridgeBindingRequest {
    const message = createBaseQueryGetBridgeBindingRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: QueryGetBridgeBindingRequest): QueryGetBridgeBindingRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: QueryGetBridgeBindingRequestAminoMsg): QueryGetBridgeBindingRequest {
    return QueryGetBridgeBindingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBridgeBindingRequestProtoMsg): QueryGetBridgeBindingRequest {
    return QueryGetBridgeBindingRequest.decode(message.value);
  },
  toProto(message: QueryGetBridgeBindingRequest): Uint8Array {
    return QueryGetBridgeBindingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBridgeBindingRequest): QueryGetBridgeBindingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetBridgeBindingRequest",
      value: QueryGetBridgeBindingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBridgeBindingResponse(): QueryGetBridgeBindingResponse {
  return {
    bridgeBinding: BridgeBinding.fromPartial({})
  };
}
/**
 * @name QueryGetBridgeBindingResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetBridgeBindingResponse
 */
export const QueryGetBridgeBindingResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetBridgeBindingResponse",
  encode(message: QueryGetBridgeBindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeBinding !== undefined) {
      BridgeBinding.encode(message.bridgeBinding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBridgeBindingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBridgeBindingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeBinding = BridgeBinding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBridgeBindingResponse>): QueryGetBridgeBindingResponse {
    const message = createBaseQueryGetBridgeBindingResponse();
    message.bridgeBinding = object.bridgeBinding !== undefined && object.bridgeBinding !== null ? BridgeBinding.fromPartial(object.bridgeBinding) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBridgeBindingResponseAmino): QueryGetBridgeBindingResponse {
    const message = createBaseQueryGetBridgeBindingResponse();
    if (object.bridge_binding !== undefined && object.bridge_binding !== null) {
      message.bridgeBinding = BridgeBinding.fromAmino(object.bridge_binding);
    }
    return message;
  },
  toAmino(message: QueryGetBridgeBindingResponse): QueryGetBridgeBindingResponseAmino {
    const obj: any = {};
    obj.bridge_binding = message.bridgeBinding ? BridgeBinding.toAmino(message.bridgeBinding) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBridgeBindingResponseAminoMsg): QueryGetBridgeBindingResponse {
    return QueryGetBridgeBindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBridgeBindingResponseProtoMsg): QueryGetBridgeBindingResponse {
    return QueryGetBridgeBindingResponse.decode(message.value);
  },
  toProto(message: QueryGetBridgeBindingResponse): Uint8Array {
    return QueryGetBridgeBindingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBridgeBindingResponse): QueryGetBridgeBindingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetBridgeBindingResponse",
      value: QueryGetBridgeBindingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListBridgeBindingsRequest(): QueryListBridgeBindingsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryListBridgeBindingsRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListBridgeBindingsRequest
 */
export const QueryListBridgeBindingsRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryListBridgeBindingsRequest",
  encode(message: QueryListBridgeBindingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListBridgeBindingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListBridgeBindingsRequest();
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
  fromPartial(object: DeepPartial<QueryListBridgeBindingsRequest>): QueryListBridgeBindingsRequest {
    const message = createBaseQueryListBridgeBindingsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListBridgeBindingsRequestAmino): QueryListBridgeBindingsRequest {
    const message = createBaseQueryListBridgeBindingsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListBridgeBindingsRequest): QueryListBridgeBindingsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListBridgeBindingsRequestAminoMsg): QueryListBridgeBindingsRequest {
    return QueryListBridgeBindingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListBridgeBindingsRequestProtoMsg): QueryListBridgeBindingsRequest {
    return QueryListBridgeBindingsRequest.decode(message.value);
  },
  toProto(message: QueryListBridgeBindingsRequest): Uint8Array {
    return QueryListBridgeBindingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListBridgeBindingsRequest): QueryListBridgeBindingsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListBridgeBindingsRequest",
      value: QueryListBridgeBindingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListBridgeBindingsResponse(): QueryListBridgeBindingsResponse {
  return {
    bridgeBindings: [],
    pagination: undefined
  };
}
/**
 * @name QueryListBridgeBindingsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListBridgeBindingsResponse
 */
export const QueryListBridgeBindingsResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryListBridgeBindingsResponse",
  encode(message: QueryListBridgeBindingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bridgeBindings) {
      BridgeBinding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListBridgeBindingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListBridgeBindingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeBindings.push(BridgeBinding.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListBridgeBindingsResponse>): QueryListBridgeBindingsResponse {
    const message = createBaseQueryListBridgeBindingsResponse();
    message.bridgeBindings = object.bridgeBindings?.map(e => BridgeBinding.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListBridgeBindingsResponseAmino): QueryListBridgeBindingsResponse {
    const message = createBaseQueryListBridgeBindingsResponse();
    message.bridgeBindings = object.bridge_bindings?.map(e => BridgeBinding.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListBridgeBindingsResponse): QueryListBridgeBindingsResponseAmino {
    const obj: any = {};
    if (message.bridgeBindings) {
      obj.bridge_bindings = message.bridgeBindings.map(e => e ? BridgeBinding.toAmino(e) : undefined);
    } else {
      obj.bridge_bindings = message.bridgeBindings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListBridgeBindingsResponseAminoMsg): QueryListBridgeBindingsResponse {
    return QueryListBridgeBindingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListBridgeBindingsResponseProtoMsg): QueryListBridgeBindingsResponse {
    return QueryListBridgeBindingsResponse.decode(message.value);
  },
  toProto(message: QueryListBridgeBindingsResponse): Uint8Array {
    return QueryListBridgeBindingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListBridgeBindingsResponse): QueryListBridgeBindingsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListBridgeBindingsResponse",
      value: QueryListBridgeBindingsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetFederatedContentRequest(): QueryGetFederatedContentRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * --- FederatedContent ---
 * @name QueryGetFederatedContentRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetFederatedContentRequest
 */
export const QueryGetFederatedContentRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetFederatedContentRequest",
  encode(message: QueryGetFederatedContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFederatedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFederatedContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetFederatedContentRequest>): QueryGetFederatedContentRequest {
    const message = createBaseQueryGetFederatedContentRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetFederatedContentRequestAmino): QueryGetFederatedContentRequest {
    const message = createBaseQueryGetFederatedContentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetFederatedContentRequest): QueryGetFederatedContentRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFederatedContentRequestAminoMsg): QueryGetFederatedContentRequest {
    return QueryGetFederatedContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFederatedContentRequestProtoMsg): QueryGetFederatedContentRequest {
    return QueryGetFederatedContentRequest.decode(message.value);
  },
  toProto(message: QueryGetFederatedContentRequest): Uint8Array {
    return QueryGetFederatedContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFederatedContentRequest): QueryGetFederatedContentRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetFederatedContentRequest",
      value: QueryGetFederatedContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetFederatedContentResponse(): QueryGetFederatedContentResponse {
  return {
    content: FederatedContent.fromPartial({})
  };
}
/**
 * @name QueryGetFederatedContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetFederatedContentResponse
 */
export const QueryGetFederatedContentResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetFederatedContentResponse",
  encode(message: QueryGetFederatedContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      FederatedContent.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFederatedContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFederatedContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = FederatedContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetFederatedContentResponse>): QueryGetFederatedContentResponse {
    const message = createBaseQueryGetFederatedContentResponse();
    message.content = object.content !== undefined && object.content !== null ? FederatedContent.fromPartial(object.content) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFederatedContentResponseAmino): QueryGetFederatedContentResponse {
    const message = createBaseQueryGetFederatedContentResponse();
    if (object.content !== undefined && object.content !== null) {
      message.content = FederatedContent.fromAmino(object.content);
    }
    return message;
  },
  toAmino(message: QueryGetFederatedContentResponse): QueryGetFederatedContentResponseAmino {
    const obj: any = {};
    obj.content = message.content ? FederatedContent.toAmino(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFederatedContentResponseAminoMsg): QueryGetFederatedContentResponse {
    return QueryGetFederatedContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFederatedContentResponseProtoMsg): QueryGetFederatedContentResponse {
    return QueryGetFederatedContentResponse.decode(message.value);
  },
  toProto(message: QueryGetFederatedContentResponse): Uint8Array {
    return QueryGetFederatedContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFederatedContentResponse): QueryGetFederatedContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetFederatedContentResponse",
      value: QueryGetFederatedContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListFederatedContentRequest(): QueryListFederatedContentRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryListFederatedContentRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListFederatedContentRequest
 */
export const QueryListFederatedContentRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryListFederatedContentRequest",
  encode(message: QueryListFederatedContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListFederatedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListFederatedContentRequest();
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
  fromPartial(object: DeepPartial<QueryListFederatedContentRequest>): QueryListFederatedContentRequest {
    const message = createBaseQueryListFederatedContentRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListFederatedContentRequestAmino): QueryListFederatedContentRequest {
    const message = createBaseQueryListFederatedContentRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListFederatedContentRequest): QueryListFederatedContentRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListFederatedContentRequestAminoMsg): QueryListFederatedContentRequest {
    return QueryListFederatedContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListFederatedContentRequestProtoMsg): QueryListFederatedContentRequest {
    return QueryListFederatedContentRequest.decode(message.value);
  },
  toProto(message: QueryListFederatedContentRequest): Uint8Array {
    return QueryListFederatedContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListFederatedContentRequest): QueryListFederatedContentRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListFederatedContentRequest",
      value: QueryListFederatedContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListFederatedContentResponse(): QueryListFederatedContentResponse {
  return {
    content: [],
    pagination: undefined
  };
}
/**
 * @name QueryListFederatedContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListFederatedContentResponse
 */
export const QueryListFederatedContentResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryListFederatedContentResponse",
  encode(message: QueryListFederatedContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.content) {
      FederatedContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListFederatedContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListFederatedContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content.push(FederatedContent.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListFederatedContentResponse>): QueryListFederatedContentResponse {
    const message = createBaseQueryListFederatedContentResponse();
    message.content = object.content?.map(e => FederatedContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListFederatedContentResponseAmino): QueryListFederatedContentResponse {
    const message = createBaseQueryListFederatedContentResponse();
    message.content = object.content?.map(e => FederatedContent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListFederatedContentResponse): QueryListFederatedContentResponseAmino {
    const obj: any = {};
    if (message.content) {
      obj.content = message.content.map(e => e ? FederatedContent.toAmino(e) : undefined);
    } else {
      obj.content = message.content;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListFederatedContentResponseAminoMsg): QueryListFederatedContentResponse {
    return QueryListFederatedContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListFederatedContentResponseProtoMsg): QueryListFederatedContentResponse {
    return QueryListFederatedContentResponse.decode(message.value);
  },
  toProto(message: QueryListFederatedContentResponse): Uint8Array {
    return QueryListFederatedContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListFederatedContentResponse): QueryListFederatedContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListFederatedContentResponse",
      value: QueryListFederatedContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetIdentityLinkRequest(): QueryGetIdentityLinkRequest {
  return {
    localAddress: "",
    peerId: ""
  };
}
/**
 * --- IdentityLink ---
 * @name QueryGetIdentityLinkRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetIdentityLinkRequest
 */
export const QueryGetIdentityLinkRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetIdentityLinkRequest",
  encode(message: QueryGetIdentityLinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.localAddress !== "") {
      writer.uint32(10).string(message.localAddress);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetIdentityLinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIdentityLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localAddress = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetIdentityLinkRequest>): QueryGetIdentityLinkRequest {
    const message = createBaseQueryGetIdentityLinkRequest();
    message.localAddress = object.localAddress ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: QueryGetIdentityLinkRequestAmino): QueryGetIdentityLinkRequest {
    const message = createBaseQueryGetIdentityLinkRequest();
    if (object.local_address !== undefined && object.local_address !== null) {
      message.localAddress = object.local_address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: QueryGetIdentityLinkRequest): QueryGetIdentityLinkRequestAmino {
    const obj: any = {};
    obj.local_address = message.localAddress === "" ? undefined : message.localAddress;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: QueryGetIdentityLinkRequestAminoMsg): QueryGetIdentityLinkRequest {
    return QueryGetIdentityLinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIdentityLinkRequestProtoMsg): QueryGetIdentityLinkRequest {
    return QueryGetIdentityLinkRequest.decode(message.value);
  },
  toProto(message: QueryGetIdentityLinkRequest): Uint8Array {
    return QueryGetIdentityLinkRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIdentityLinkRequest): QueryGetIdentityLinkRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetIdentityLinkRequest",
      value: QueryGetIdentityLinkRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetIdentityLinkResponse(): QueryGetIdentityLinkResponse {
  return {
    link: IdentityLink.fromPartial({})
  };
}
/**
 * @name QueryGetIdentityLinkResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetIdentityLinkResponse
 */
export const QueryGetIdentityLinkResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetIdentityLinkResponse",
  encode(message: QueryGetIdentityLinkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.link !== undefined) {
      IdentityLink.encode(message.link, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetIdentityLinkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIdentityLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.link = IdentityLink.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetIdentityLinkResponse>): QueryGetIdentityLinkResponse {
    const message = createBaseQueryGetIdentityLinkResponse();
    message.link = object.link !== undefined && object.link !== null ? IdentityLink.fromPartial(object.link) : undefined;
    return message;
  },
  fromAmino(object: QueryGetIdentityLinkResponseAmino): QueryGetIdentityLinkResponse {
    const message = createBaseQueryGetIdentityLinkResponse();
    if (object.link !== undefined && object.link !== null) {
      message.link = IdentityLink.fromAmino(object.link);
    }
    return message;
  },
  toAmino(message: QueryGetIdentityLinkResponse): QueryGetIdentityLinkResponseAmino {
    const obj: any = {};
    obj.link = message.link ? IdentityLink.toAmino(message.link) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetIdentityLinkResponseAminoMsg): QueryGetIdentityLinkResponse {
    return QueryGetIdentityLinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIdentityLinkResponseProtoMsg): QueryGetIdentityLinkResponse {
    return QueryGetIdentityLinkResponse.decode(message.value);
  },
  toProto(message: QueryGetIdentityLinkResponse): Uint8Array {
    return QueryGetIdentityLinkResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIdentityLinkResponse): QueryGetIdentityLinkResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetIdentityLinkResponse",
      value: QueryGetIdentityLinkResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListIdentityLinksRequest(): QueryListIdentityLinksRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryListIdentityLinksRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListIdentityLinksRequest
 */
export const QueryListIdentityLinksRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryListIdentityLinksRequest",
  encode(message: QueryListIdentityLinksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListIdentityLinksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListIdentityLinksRequest();
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
  fromPartial(object: DeepPartial<QueryListIdentityLinksRequest>): QueryListIdentityLinksRequest {
    const message = createBaseQueryListIdentityLinksRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListIdentityLinksRequestAmino): QueryListIdentityLinksRequest {
    const message = createBaseQueryListIdentityLinksRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListIdentityLinksRequest): QueryListIdentityLinksRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListIdentityLinksRequestAminoMsg): QueryListIdentityLinksRequest {
    return QueryListIdentityLinksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListIdentityLinksRequestProtoMsg): QueryListIdentityLinksRequest {
    return QueryListIdentityLinksRequest.decode(message.value);
  },
  toProto(message: QueryListIdentityLinksRequest): Uint8Array {
    return QueryListIdentityLinksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListIdentityLinksRequest): QueryListIdentityLinksRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListIdentityLinksRequest",
      value: QueryListIdentityLinksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListIdentityLinksResponse(): QueryListIdentityLinksResponse {
  return {
    links: [],
    pagination: undefined
  };
}
/**
 * @name QueryListIdentityLinksResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListIdentityLinksResponse
 */
export const QueryListIdentityLinksResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryListIdentityLinksResponse",
  encode(message: QueryListIdentityLinksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.links) {
      IdentityLink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListIdentityLinksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListIdentityLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(IdentityLink.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListIdentityLinksResponse>): QueryListIdentityLinksResponse {
    const message = createBaseQueryListIdentityLinksResponse();
    message.links = object.links?.map(e => IdentityLink.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListIdentityLinksResponseAmino): QueryListIdentityLinksResponse {
    const message = createBaseQueryListIdentityLinksResponse();
    message.links = object.links?.map(e => IdentityLink.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListIdentityLinksResponse): QueryListIdentityLinksResponseAmino {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map(e => e ? IdentityLink.toAmino(e) : undefined);
    } else {
      obj.links = message.links;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListIdentityLinksResponseAminoMsg): QueryListIdentityLinksResponse {
    return QueryListIdentityLinksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListIdentityLinksResponseProtoMsg): QueryListIdentityLinksResponse {
    return QueryListIdentityLinksResponse.decode(message.value);
  },
  toProto(message: QueryListIdentityLinksResponse): Uint8Array {
    return QueryListIdentityLinksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListIdentityLinksResponse): QueryListIdentityLinksResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListIdentityLinksResponse",
      value: QueryListIdentityLinksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResolveRemoteIdentityRequest(): QueryResolveRemoteIdentityRequest {
  return {
    peerId: "",
    remoteIdentity: ""
  };
}
/**
 * --- ResolveRemoteIdentity ---
 * @name QueryResolveRemoteIdentityRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryResolveRemoteIdentityRequest
 */
export const QueryResolveRemoteIdentityRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryResolveRemoteIdentityRequest",
  encode(message: QueryResolveRemoteIdentityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peerId !== "") {
      writer.uint32(10).string(message.peerId);
    }
    if (message.remoteIdentity !== "") {
      writer.uint32(18).string(message.remoteIdentity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolveRemoteIdentityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveRemoteIdentityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerId = reader.string();
          break;
        case 2:
          message.remoteIdentity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryResolveRemoteIdentityRequest>): QueryResolveRemoteIdentityRequest {
    const message = createBaseQueryResolveRemoteIdentityRequest();
    message.peerId = object.peerId ?? "";
    message.remoteIdentity = object.remoteIdentity ?? "";
    return message;
  },
  fromAmino(object: QueryResolveRemoteIdentityRequestAmino): QueryResolveRemoteIdentityRequest {
    const message = createBaseQueryResolveRemoteIdentityRequest();
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_identity !== undefined && object.remote_identity !== null) {
      message.remoteIdentity = object.remote_identity;
    }
    return message;
  },
  toAmino(message: QueryResolveRemoteIdentityRequest): QueryResolveRemoteIdentityRequestAmino {
    const obj: any = {};
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_identity = message.remoteIdentity === "" ? undefined : message.remoteIdentity;
    return obj;
  },
  fromAminoMsg(object: QueryResolveRemoteIdentityRequestAminoMsg): QueryResolveRemoteIdentityRequest {
    return QueryResolveRemoteIdentityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolveRemoteIdentityRequestProtoMsg): QueryResolveRemoteIdentityRequest {
    return QueryResolveRemoteIdentityRequest.decode(message.value);
  },
  toProto(message: QueryResolveRemoteIdentityRequest): Uint8Array {
    return QueryResolveRemoteIdentityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResolveRemoteIdentityRequest): QueryResolveRemoteIdentityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryResolveRemoteIdentityRequest",
      value: QueryResolveRemoteIdentityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResolveRemoteIdentityResponse(): QueryResolveRemoteIdentityResponse {
  return {
    localAddress: ""
  };
}
/**
 * @name QueryResolveRemoteIdentityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryResolveRemoteIdentityResponse
 */
export const QueryResolveRemoteIdentityResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryResolveRemoteIdentityResponse",
  encode(message: QueryResolveRemoteIdentityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.localAddress !== "") {
      writer.uint32(10).string(message.localAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolveRemoteIdentityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveRemoteIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryResolveRemoteIdentityResponse>): QueryResolveRemoteIdentityResponse {
    const message = createBaseQueryResolveRemoteIdentityResponse();
    message.localAddress = object.localAddress ?? "";
    return message;
  },
  fromAmino(object: QueryResolveRemoteIdentityResponseAmino): QueryResolveRemoteIdentityResponse {
    const message = createBaseQueryResolveRemoteIdentityResponse();
    if (object.local_address !== undefined && object.local_address !== null) {
      message.localAddress = object.local_address;
    }
    return message;
  },
  toAmino(message: QueryResolveRemoteIdentityResponse): QueryResolveRemoteIdentityResponseAmino {
    const obj: any = {};
    obj.local_address = message.localAddress === "" ? undefined : message.localAddress;
    return obj;
  },
  fromAminoMsg(object: QueryResolveRemoteIdentityResponseAminoMsg): QueryResolveRemoteIdentityResponse {
    return QueryResolveRemoteIdentityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolveRemoteIdentityResponseProtoMsg): QueryResolveRemoteIdentityResponse {
    return QueryResolveRemoteIdentityResponse.decode(message.value);
  },
  toProto(message: QueryResolveRemoteIdentityResponse): Uint8Array {
    return QueryResolveRemoteIdentityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResolveRemoteIdentityResponse): QueryResolveRemoteIdentityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryResolveRemoteIdentityResponse",
      value: QueryResolveRemoteIdentityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingIdentityChallengeRequest(): QueryGetPendingIdentityChallengeRequest {
  return {
    claimedAddress: "",
    peerId: ""
  };
}
/**
 * --- PendingIdentityChallenge ---
 * @name QueryGetPendingIdentityChallengeRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest
 */
export const QueryGetPendingIdentityChallengeRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest",
  encode(message: QueryGetPendingIdentityChallengeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAddress !== "") {
      writer.uint32(10).string(message.claimedAddress);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingIdentityChallengeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingIdentityChallengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAddress = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPendingIdentityChallengeRequest>): QueryGetPendingIdentityChallengeRequest {
    const message = createBaseQueryGetPendingIdentityChallengeRequest();
    message.claimedAddress = object.claimedAddress ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: QueryGetPendingIdentityChallengeRequestAmino): QueryGetPendingIdentityChallengeRequest {
    const message = createBaseQueryGetPendingIdentityChallengeRequest();
    if (object.claimed_address !== undefined && object.claimed_address !== null) {
      message.claimedAddress = object.claimed_address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: QueryGetPendingIdentityChallengeRequest): QueryGetPendingIdentityChallengeRequestAmino {
    const obj: any = {};
    obj.claimed_address = message.claimedAddress === "" ? undefined : message.claimedAddress;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingIdentityChallengeRequestAminoMsg): QueryGetPendingIdentityChallengeRequest {
    return QueryGetPendingIdentityChallengeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingIdentityChallengeRequestProtoMsg): QueryGetPendingIdentityChallengeRequest {
    return QueryGetPendingIdentityChallengeRequest.decode(message.value);
  },
  toProto(message: QueryGetPendingIdentityChallengeRequest): Uint8Array {
    return QueryGetPendingIdentityChallengeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingIdentityChallengeRequest): QueryGetPendingIdentityChallengeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeRequest",
      value: QueryGetPendingIdentityChallengeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingIdentityChallengeResponse(): QueryGetPendingIdentityChallengeResponse {
  return {
    challenge: PendingIdentityChallenge.fromPartial({})
  };
}
/**
 * @name QueryGetPendingIdentityChallengeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse
 */
export const QueryGetPendingIdentityChallengeResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse",
  encode(message: QueryGetPendingIdentityChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challenge !== undefined) {
      PendingIdentityChallenge.encode(message.challenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingIdentityChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingIdentityChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge = PendingIdentityChallenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPendingIdentityChallengeResponse>): QueryGetPendingIdentityChallengeResponse {
    const message = createBaseQueryGetPendingIdentityChallengeResponse();
    message.challenge = object.challenge !== undefined && object.challenge !== null ? PendingIdentityChallenge.fromPartial(object.challenge) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPendingIdentityChallengeResponseAmino): QueryGetPendingIdentityChallengeResponse {
    const message = createBaseQueryGetPendingIdentityChallengeResponse();
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = PendingIdentityChallenge.fromAmino(object.challenge);
    }
    return message;
  },
  toAmino(message: QueryGetPendingIdentityChallengeResponse): QueryGetPendingIdentityChallengeResponseAmino {
    const obj: any = {};
    obj.challenge = message.challenge ? PendingIdentityChallenge.toAmino(message.challenge) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingIdentityChallengeResponseAminoMsg): QueryGetPendingIdentityChallengeResponse {
    return QueryGetPendingIdentityChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingIdentityChallengeResponseProtoMsg): QueryGetPendingIdentityChallengeResponse {
    return QueryGetPendingIdentityChallengeResponse.decode(message.value);
  },
  toProto(message: QueryGetPendingIdentityChallengeResponse): Uint8Array {
    return QueryGetPendingIdentityChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingIdentityChallengeResponse): QueryGetPendingIdentityChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetPendingIdentityChallengeResponse",
      value: QueryGetPendingIdentityChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPendingIdentityChallengesRequest(): QueryListPendingIdentityChallengesRequest {
  return {
    claimedAddress: "",
    pagination: undefined
  };
}
/**
 * @name QueryListPendingIdentityChallengesRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest
 */
export const QueryListPendingIdentityChallengesRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest",
  encode(message: QueryListPendingIdentityChallengesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAddress !== "") {
      writer.uint32(10).string(message.claimedAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPendingIdentityChallengesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPendingIdentityChallengesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAddress = reader.string();
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
  fromPartial(object: DeepPartial<QueryListPendingIdentityChallengesRequest>): QueryListPendingIdentityChallengesRequest {
    const message = createBaseQueryListPendingIdentityChallengesRequest();
    message.claimedAddress = object.claimedAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPendingIdentityChallengesRequestAmino): QueryListPendingIdentityChallengesRequest {
    const message = createBaseQueryListPendingIdentityChallengesRequest();
    if (object.claimed_address !== undefined && object.claimed_address !== null) {
      message.claimedAddress = object.claimed_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPendingIdentityChallengesRequest): QueryListPendingIdentityChallengesRequestAmino {
    const obj: any = {};
    obj.claimed_address = message.claimedAddress === "" ? undefined : message.claimedAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPendingIdentityChallengesRequestAminoMsg): QueryListPendingIdentityChallengesRequest {
    return QueryListPendingIdentityChallengesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPendingIdentityChallengesRequestProtoMsg): QueryListPendingIdentityChallengesRequest {
    return QueryListPendingIdentityChallengesRequest.decode(message.value);
  },
  toProto(message: QueryListPendingIdentityChallengesRequest): Uint8Array {
    return QueryListPendingIdentityChallengesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPendingIdentityChallengesRequest): QueryListPendingIdentityChallengesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesRequest",
      value: QueryListPendingIdentityChallengesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPendingIdentityChallengesResponse(): QueryListPendingIdentityChallengesResponse {
  return {
    challenges: [],
    pagination: undefined
  };
}
/**
 * @name QueryListPendingIdentityChallengesResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse
 */
export const QueryListPendingIdentityChallengesResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse",
  encode(message: QueryListPendingIdentityChallengesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.challenges) {
      PendingIdentityChallenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPendingIdentityChallengesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPendingIdentityChallengesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenges.push(PendingIdentityChallenge.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListPendingIdentityChallengesResponse>): QueryListPendingIdentityChallengesResponse {
    const message = createBaseQueryListPendingIdentityChallengesResponse();
    message.challenges = object.challenges?.map(e => PendingIdentityChallenge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPendingIdentityChallengesResponseAmino): QueryListPendingIdentityChallengesResponse {
    const message = createBaseQueryListPendingIdentityChallengesResponse();
    message.challenges = object.challenges?.map(e => PendingIdentityChallenge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPendingIdentityChallengesResponse): QueryListPendingIdentityChallengesResponseAmino {
    const obj: any = {};
    if (message.challenges) {
      obj.challenges = message.challenges.map(e => e ? PendingIdentityChallenge.toAmino(e) : undefined);
    } else {
      obj.challenges = message.challenges;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPendingIdentityChallengesResponseAminoMsg): QueryListPendingIdentityChallengesResponse {
    return QueryListPendingIdentityChallengesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPendingIdentityChallengesResponseProtoMsg): QueryListPendingIdentityChallengesResponse {
    return QueryListPendingIdentityChallengesResponse.decode(message.value);
  },
  toProto(message: QueryListPendingIdentityChallengesResponse): Uint8Array {
    return QueryListPendingIdentityChallengesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPendingIdentityChallengesResponse): QueryListPendingIdentityChallengesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListPendingIdentityChallengesResponse",
      value: QueryListPendingIdentityChallengesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetReputationAttestationRequest(): QueryGetReputationAttestationRequest {
  return {
    localAddress: "",
    peerId: ""
  };
}
/**
 * --- ReputationAttestation ---
 * @name QueryGetReputationAttestationRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetReputationAttestationRequest
 */
export const QueryGetReputationAttestationRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetReputationAttestationRequest",
  encode(message: QueryGetReputationAttestationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.localAddress !== "") {
      writer.uint32(10).string(message.localAddress);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetReputationAttestationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReputationAttestationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localAddress = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetReputationAttestationRequest>): QueryGetReputationAttestationRequest {
    const message = createBaseQueryGetReputationAttestationRequest();
    message.localAddress = object.localAddress ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: QueryGetReputationAttestationRequestAmino): QueryGetReputationAttestationRequest {
    const message = createBaseQueryGetReputationAttestationRequest();
    if (object.local_address !== undefined && object.local_address !== null) {
      message.localAddress = object.local_address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: QueryGetReputationAttestationRequest): QueryGetReputationAttestationRequestAmino {
    const obj: any = {};
    obj.local_address = message.localAddress === "" ? undefined : message.localAddress;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: QueryGetReputationAttestationRequestAminoMsg): QueryGetReputationAttestationRequest {
    return QueryGetReputationAttestationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReputationAttestationRequestProtoMsg): QueryGetReputationAttestationRequest {
    return QueryGetReputationAttestationRequest.decode(message.value);
  },
  toProto(message: QueryGetReputationAttestationRequest): Uint8Array {
    return QueryGetReputationAttestationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReputationAttestationRequest): QueryGetReputationAttestationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetReputationAttestationRequest",
      value: QueryGetReputationAttestationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetReputationAttestationResponse(): QueryGetReputationAttestationResponse {
  return {
    attestation: ReputationAttestation.fromPartial({})
  };
}
/**
 * @name QueryGetReputationAttestationResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetReputationAttestationResponse
 */
export const QueryGetReputationAttestationResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetReputationAttestationResponse",
  encode(message: QueryGetReputationAttestationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestation !== undefined) {
      ReputationAttestation.encode(message.attestation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetReputationAttestationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReputationAttestationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestation = ReputationAttestation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetReputationAttestationResponse>): QueryGetReputationAttestationResponse {
    const message = createBaseQueryGetReputationAttestationResponse();
    message.attestation = object.attestation !== undefined && object.attestation !== null ? ReputationAttestation.fromPartial(object.attestation) : undefined;
    return message;
  },
  fromAmino(object: QueryGetReputationAttestationResponseAmino): QueryGetReputationAttestationResponse {
    const message = createBaseQueryGetReputationAttestationResponse();
    if (object.attestation !== undefined && object.attestation !== null) {
      message.attestation = ReputationAttestation.fromAmino(object.attestation);
    }
    return message;
  },
  toAmino(message: QueryGetReputationAttestationResponse): QueryGetReputationAttestationResponseAmino {
    const obj: any = {};
    obj.attestation = message.attestation ? ReputationAttestation.toAmino(message.attestation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetReputationAttestationResponseAminoMsg): QueryGetReputationAttestationResponse {
    return QueryGetReputationAttestationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReputationAttestationResponseProtoMsg): QueryGetReputationAttestationResponse {
    return QueryGetReputationAttestationResponse.decode(message.value);
  },
  toProto(message: QueryGetReputationAttestationResponse): Uint8Array {
    return QueryGetReputationAttestationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReputationAttestationResponse): QueryGetReputationAttestationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetReputationAttestationResponse",
      value: QueryGetReputationAttestationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListOutboundAttestationsRequest(): QueryListOutboundAttestationsRequest {
  return {
    pagination: undefined
  };
}
/**
 * --- OutboundAttestation ---
 * @name QueryListOutboundAttestationsRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListOutboundAttestationsRequest
 */
export const QueryListOutboundAttestationsRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryListOutboundAttestationsRequest",
  encode(message: QueryListOutboundAttestationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListOutboundAttestationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListOutboundAttestationsRequest();
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
  fromPartial(object: DeepPartial<QueryListOutboundAttestationsRequest>): QueryListOutboundAttestationsRequest {
    const message = createBaseQueryListOutboundAttestationsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListOutboundAttestationsRequestAmino): QueryListOutboundAttestationsRequest {
    const message = createBaseQueryListOutboundAttestationsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListOutboundAttestationsRequest): QueryListOutboundAttestationsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListOutboundAttestationsRequestAminoMsg): QueryListOutboundAttestationsRequest {
    return QueryListOutboundAttestationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListOutboundAttestationsRequestProtoMsg): QueryListOutboundAttestationsRequest {
    return QueryListOutboundAttestationsRequest.decode(message.value);
  },
  toProto(message: QueryListOutboundAttestationsRequest): Uint8Array {
    return QueryListOutboundAttestationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListOutboundAttestationsRequest): QueryListOutboundAttestationsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListOutboundAttestationsRequest",
      value: QueryListOutboundAttestationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListOutboundAttestationsResponse(): QueryListOutboundAttestationsResponse {
  return {
    attestations: [],
    pagination: undefined
  };
}
/**
 * @name QueryListOutboundAttestationsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryListOutboundAttestationsResponse
 */
export const QueryListOutboundAttestationsResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryListOutboundAttestationsResponse",
  encode(message: QueryListOutboundAttestationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestations) {
      OutboundAttestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListOutboundAttestationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListOutboundAttestationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(OutboundAttestation.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListOutboundAttestationsResponse>): QueryListOutboundAttestationsResponse {
    const message = createBaseQueryListOutboundAttestationsResponse();
    message.attestations = object.attestations?.map(e => OutboundAttestation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListOutboundAttestationsResponseAmino): QueryListOutboundAttestationsResponse {
    const message = createBaseQueryListOutboundAttestationsResponse();
    message.attestations = object.attestations?.map(e => OutboundAttestation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListOutboundAttestationsResponse): QueryListOutboundAttestationsResponseAmino {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? OutboundAttestation.toAmino(e) : undefined);
    } else {
      obj.attestations = message.attestations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListOutboundAttestationsResponseAminoMsg): QueryListOutboundAttestationsResponse {
    return QueryListOutboundAttestationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListOutboundAttestationsResponseProtoMsg): QueryListOutboundAttestationsResponse {
    return QueryListOutboundAttestationsResponse.decode(message.value);
  },
  toProto(message: QueryListOutboundAttestationsResponse): Uint8Array {
    return QueryListOutboundAttestationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListOutboundAttestationsResponse): QueryListOutboundAttestationsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryListOutboundAttestationsResponse",
      value: QueryListOutboundAttestationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVerifierActivityRequest(): QueryVerifierActivityRequest {
  return {
    address: ""
  };
}
/**
 * --- Verifier (bond state lives in x/rep BondedRole) ---
 * @name QueryVerifierActivityRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryVerifierActivityRequest
 */
export const QueryVerifierActivityRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryVerifierActivityRequest",
  encode(message: QueryVerifierActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifierActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifierActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVerifierActivityRequest>): QueryVerifierActivityRequest {
    const message = createBaseQueryVerifierActivityRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVerifierActivityRequestAmino): QueryVerifierActivityRequest {
    const message = createBaseQueryVerifierActivityRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryVerifierActivityRequest): QueryVerifierActivityRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVerifierActivityRequestAminoMsg): QueryVerifierActivityRequest {
    return QueryVerifierActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifierActivityRequestProtoMsg): QueryVerifierActivityRequest {
    return QueryVerifierActivityRequest.decode(message.value);
  },
  toProto(message: QueryVerifierActivityRequest): Uint8Array {
    return QueryVerifierActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifierActivityRequest): QueryVerifierActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryVerifierActivityRequest",
      value: QueryVerifierActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVerifierActivityResponse(): QueryVerifierActivityResponse {
  return {
    activity: VerifierActivity.fromPartial({})
  };
}
/**
 * @name QueryVerifierActivityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryVerifierActivityResponse
 */
export const QueryVerifierActivityResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryVerifierActivityResponse",
  encode(message: QueryVerifierActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.activity !== undefined) {
      VerifierActivity.encode(message.activity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifierActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifierActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activity = VerifierActivity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVerifierActivityResponse>): QueryVerifierActivityResponse {
    const message = createBaseQueryVerifierActivityResponse();
    message.activity = object.activity !== undefined && object.activity !== null ? VerifierActivity.fromPartial(object.activity) : undefined;
    return message;
  },
  fromAmino(object: QueryVerifierActivityResponseAmino): QueryVerifierActivityResponse {
    const message = createBaseQueryVerifierActivityResponse();
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = VerifierActivity.fromAmino(object.activity);
    }
    return message;
  },
  toAmino(message: QueryVerifierActivityResponse): QueryVerifierActivityResponseAmino {
    const obj: any = {};
    obj.activity = message.activity ? VerifierActivity.toAmino(message.activity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVerifierActivityResponseAminoMsg): QueryVerifierActivityResponse {
    return QueryVerifierActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifierActivityResponseProtoMsg): QueryVerifierActivityResponse {
    return QueryVerifierActivityResponse.decode(message.value);
  },
  toProto(message: QueryVerifierActivityResponse): Uint8Array {
    return QueryVerifierActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifierActivityResponse): QueryVerifierActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryVerifierActivityResponse",
      value: QueryVerifierActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVerificationRecordRequest(): QueryGetVerificationRecordRequest {
  return {
    contentId: BigInt(0)
  };
}
/**
 * --- VerificationRecord ---
 * @name QueryGetVerificationRecordRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetVerificationRecordRequest
 */
export const QueryGetVerificationRecordRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetVerificationRecordRequest",
  encode(message: QueryGetVerificationRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVerificationRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVerificationRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVerificationRecordRequest>): QueryGetVerificationRecordRequest {
    const message = createBaseQueryGetVerificationRecordRequest();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetVerificationRecordRequestAmino): QueryGetVerificationRecordRequest {
    const message = createBaseQueryGetVerificationRecordRequest();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    return message;
  },
  toAmino(message: QueryGetVerificationRecordRequest): QueryGetVerificationRecordRequestAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVerificationRecordRequestAminoMsg): QueryGetVerificationRecordRequest {
    return QueryGetVerificationRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVerificationRecordRequestProtoMsg): QueryGetVerificationRecordRequest {
    return QueryGetVerificationRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetVerificationRecordRequest): Uint8Array {
    return QueryGetVerificationRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVerificationRecordRequest): QueryGetVerificationRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetVerificationRecordRequest",
      value: QueryGetVerificationRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVerificationRecordResponse(): QueryGetVerificationRecordResponse {
  return {
    record: VerificationRecord.fromPartial({})
  };
}
/**
 * @name QueryGetVerificationRecordResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetVerificationRecordResponse
 */
export const QueryGetVerificationRecordResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetVerificationRecordResponse",
  encode(message: QueryGetVerificationRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      VerificationRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVerificationRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVerificationRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = VerificationRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVerificationRecordResponse>): QueryGetVerificationRecordResponse {
    const message = createBaseQueryGetVerificationRecordResponse();
    message.record = object.record !== undefined && object.record !== null ? VerificationRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVerificationRecordResponseAmino): QueryGetVerificationRecordResponse {
    const message = createBaseQueryGetVerificationRecordResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = VerificationRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryGetVerificationRecordResponse): QueryGetVerificationRecordResponseAmino {
    const obj: any = {};
    obj.record = message.record ? VerificationRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVerificationRecordResponseAminoMsg): QueryGetVerificationRecordResponse {
    return QueryGetVerificationRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVerificationRecordResponseProtoMsg): QueryGetVerificationRecordResponse {
    return QueryGetVerificationRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetVerificationRecordResponse): Uint8Array {
    return QueryGetVerificationRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVerificationRecordResponse): QueryGetVerificationRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetVerificationRecordResponse",
      value: QueryGetVerificationRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEscalatedChallengeRequest(): QueryGetEscalatedChallengeRequest {
  return {
    contentId: BigInt(0)
  };
}
/**
 * EscalatedChallenge lookup. Returns the Phase 2 (jury) lifecycle
 * record for a content_id whose challenge has been escalated past the
 * auto-resolution window. Returns NotFound when no jury lifecycle is
 * currently open.
 * @name QueryGetEscalatedChallengeRequest
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetEscalatedChallengeRequest
 */
export const QueryGetEscalatedChallengeRequest = {
  typeUrl: "/sparkdream.federation.v1.QueryGetEscalatedChallengeRequest",
  encode(message: QueryGetEscalatedChallengeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEscalatedChallengeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEscalatedChallengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetEscalatedChallengeRequest>): QueryGetEscalatedChallengeRequest {
    const message = createBaseQueryGetEscalatedChallengeRequest();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetEscalatedChallengeRequestAmino): QueryGetEscalatedChallengeRequest {
    const message = createBaseQueryGetEscalatedChallengeRequest();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    return message;
  },
  toAmino(message: QueryGetEscalatedChallengeRequest): QueryGetEscalatedChallengeRequestAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEscalatedChallengeRequestAminoMsg): QueryGetEscalatedChallengeRequest {
    return QueryGetEscalatedChallengeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEscalatedChallengeRequestProtoMsg): QueryGetEscalatedChallengeRequest {
    return QueryGetEscalatedChallengeRequest.decode(message.value);
  },
  toProto(message: QueryGetEscalatedChallengeRequest): Uint8Array {
    return QueryGetEscalatedChallengeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEscalatedChallengeRequest): QueryGetEscalatedChallengeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetEscalatedChallengeRequest",
      value: QueryGetEscalatedChallengeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEscalatedChallengeResponse(): QueryGetEscalatedChallengeResponse {
  return {
    escalated: EscalatedChallenge.fromPartial({})
  };
}
/**
 * @name QueryGetEscalatedChallengeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.QueryGetEscalatedChallengeResponse
 */
export const QueryGetEscalatedChallengeResponse = {
  typeUrl: "/sparkdream.federation.v1.QueryGetEscalatedChallengeResponse",
  encode(message: QueryGetEscalatedChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.escalated !== undefined) {
      EscalatedChallenge.encode(message.escalated, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEscalatedChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEscalatedChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escalated = EscalatedChallenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetEscalatedChallengeResponse>): QueryGetEscalatedChallengeResponse {
    const message = createBaseQueryGetEscalatedChallengeResponse();
    message.escalated = object.escalated !== undefined && object.escalated !== null ? EscalatedChallenge.fromPartial(object.escalated) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEscalatedChallengeResponseAmino): QueryGetEscalatedChallengeResponse {
    const message = createBaseQueryGetEscalatedChallengeResponse();
    if (object.escalated !== undefined && object.escalated !== null) {
      message.escalated = EscalatedChallenge.fromAmino(object.escalated);
    }
    return message;
  },
  toAmino(message: QueryGetEscalatedChallengeResponse): QueryGetEscalatedChallengeResponseAmino {
    const obj: any = {};
    obj.escalated = message.escalated ? EscalatedChallenge.toAmino(message.escalated) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEscalatedChallengeResponseAminoMsg): QueryGetEscalatedChallengeResponse {
    return QueryGetEscalatedChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEscalatedChallengeResponseProtoMsg): QueryGetEscalatedChallengeResponse {
    return QueryGetEscalatedChallengeResponse.decode(message.value);
  },
  toProto(message: QueryGetEscalatedChallengeResponse): Uint8Array {
    return QueryGetEscalatedChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEscalatedChallengeResponse): QueryGetEscalatedChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.QueryGetEscalatedChallengeResponse",
      value: QueryGetEscalatedChallengeResponse.encode(message).finish()
    };
  }
};