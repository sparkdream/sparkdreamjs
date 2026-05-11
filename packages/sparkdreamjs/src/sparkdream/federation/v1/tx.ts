//@ts-nocheck
import { Params, ParamsAmino, FederationOperationalParams, FederationOperationalParamsAmino } from "./params";
import { PeerType, PeerPolicy, PeerPolicyAmino, FederatedContentStatus } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * @name MsgUpdateParams
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/federation/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * @name MsgRegisterPeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterPeer
 */
export interface MsgRegisterPeer {
  authority: string;
  peerId: string;
  displayName: string;
  type: PeerType;
  ibcChannelId: string;
  metadata: string;
}
export interface MsgRegisterPeerProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterPeer";
  value: Uint8Array;
}
/**
 * @name MsgRegisterPeerAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterPeer
 */
export interface MsgRegisterPeerAmino {
  authority?: string;
  peer_id?: string;
  display_name?: string;
  type?: PeerType;
  ibc_channel_id?: string;
  metadata?: string;
}
export interface MsgRegisterPeerAminoMsg {
  type: "sparkdream/x/federation/MsgRegisterPeer";
  value: MsgRegisterPeerAmino;
}
/**
 * @name MsgRegisterPeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterPeerResponse
 */
export interface MsgRegisterPeerResponse {}
export interface MsgRegisterPeerResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterPeerResponse";
  value: Uint8Array;
}
/**
 * @name MsgRegisterPeerResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterPeerResponse
 */
export interface MsgRegisterPeerResponseAmino {}
export interface MsgRegisterPeerResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgRegisterPeerResponse";
  value: MsgRegisterPeerResponseAmino;
}
/**
 * @name MsgRemovePeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRemovePeer
 */
export interface MsgRemovePeer {
  authority: string;
  peerId: string;
  reason: string;
}
export interface MsgRemovePeerProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRemovePeer";
  value: Uint8Array;
}
/**
 * @name MsgRemovePeerAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRemovePeer
 */
export interface MsgRemovePeerAmino {
  authority?: string;
  peer_id?: string;
  reason?: string;
}
export interface MsgRemovePeerAminoMsg {
  type: "sparkdream/x/federation/MsgRemovePeer";
  value: MsgRemovePeerAmino;
}
/**
 * @name MsgRemovePeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRemovePeerResponse
 */
export interface MsgRemovePeerResponse {}
export interface MsgRemovePeerResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRemovePeerResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemovePeerResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRemovePeerResponse
 */
export interface MsgRemovePeerResponseAmino {}
export interface MsgRemovePeerResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgRemovePeerResponse";
  value: MsgRemovePeerResponseAmino;
}
/**
 * @name MsgSuspendPeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSuspendPeer
 */
export interface MsgSuspendPeer {
  authority: string;
  peerId: string;
  reason: string;
}
export interface MsgSuspendPeerProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSuspendPeer";
  value: Uint8Array;
}
/**
 * @name MsgSuspendPeerAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSuspendPeer
 */
export interface MsgSuspendPeerAmino {
  authority?: string;
  peer_id?: string;
  reason?: string;
}
export interface MsgSuspendPeerAminoMsg {
  type: "sparkdream/x/federation/MsgSuspendPeer";
  value: MsgSuspendPeerAmino;
}
/**
 * @name MsgSuspendPeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSuspendPeerResponse
 */
export interface MsgSuspendPeerResponse {}
export interface MsgSuspendPeerResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSuspendPeerResponse";
  value: Uint8Array;
}
/**
 * @name MsgSuspendPeerResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSuspendPeerResponse
 */
export interface MsgSuspendPeerResponseAmino {}
export interface MsgSuspendPeerResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgSuspendPeerResponse";
  value: MsgSuspendPeerResponseAmino;
}
/**
 * @name MsgResumePeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgResumePeer
 */
export interface MsgResumePeer {
  authority: string;
  peerId: string;
}
export interface MsgResumePeerProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgResumePeer";
  value: Uint8Array;
}
/**
 * @name MsgResumePeerAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgResumePeer
 */
export interface MsgResumePeerAmino {
  authority?: string;
  peer_id?: string;
}
export interface MsgResumePeerAminoMsg {
  type: "sparkdream/x/federation/MsgResumePeer";
  value: MsgResumePeerAmino;
}
/**
 * @name MsgResumePeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgResumePeerResponse
 */
export interface MsgResumePeerResponse {}
export interface MsgResumePeerResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgResumePeerResponse";
  value: Uint8Array;
}
/**
 * @name MsgResumePeerResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgResumePeerResponse
 */
export interface MsgResumePeerResponseAmino {}
export interface MsgResumePeerResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgResumePeerResponse";
  value: MsgResumePeerResponseAmino;
}
/**
 * @name MsgUpdatePeerPolicy
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdatePeerPolicy
 */
export interface MsgUpdatePeerPolicy {
  authority: string;
  peerId: string;
  policy: PeerPolicy;
}
export interface MsgUpdatePeerPolicyProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicy";
  value: Uint8Array;
}
/**
 * @name MsgUpdatePeerPolicyAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdatePeerPolicy
 */
export interface MsgUpdatePeerPolicyAmino {
  authority?: string;
  peer_id?: string;
  policy?: PeerPolicyAmino;
}
export interface MsgUpdatePeerPolicyAminoMsg {
  type: "sparkdream/x/federation/MsgUpdatePeerPolicy";
  value: MsgUpdatePeerPolicyAmino;
}
/**
 * @name MsgUpdatePeerPolicyResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdatePeerPolicyResponse
 */
export interface MsgUpdatePeerPolicyResponse {}
export interface MsgUpdatePeerPolicyResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicyResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdatePeerPolicyResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdatePeerPolicyResponse
 */
export interface MsgUpdatePeerPolicyResponseAmino {}
export interface MsgUpdatePeerPolicyResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgUpdatePeerPolicyResponse";
  value: MsgUpdatePeerPolicyResponseAmino;
}
/**
 * @name MsgRegisterBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterBridge
 */
export interface MsgRegisterBridge {
  authority: string;
  operator: string;
  peerId: string;
  protocol: string;
  endpoint: string;
}
export interface MsgRegisterBridgeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterBridge";
  value: Uint8Array;
}
/**
 * @name MsgRegisterBridgeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterBridge
 */
export interface MsgRegisterBridgeAmino {
  authority?: string;
  operator?: string;
  peer_id?: string;
  protocol?: string;
  endpoint?: string;
}
export interface MsgRegisterBridgeAminoMsg {
  type: "sparkdream/x/federation/MsgRegisterBridge";
  value: MsgRegisterBridgeAmino;
}
/**
 * @name MsgRegisterBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterBridgeResponse
 */
export interface MsgRegisterBridgeResponse {}
export interface MsgRegisterBridgeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterBridgeResponse";
  value: Uint8Array;
}
/**
 * @name MsgRegisterBridgeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterBridgeResponse
 */
export interface MsgRegisterBridgeResponseAmino {}
export interface MsgRegisterBridgeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgRegisterBridgeResponse";
  value: MsgRegisterBridgeResponseAmino;
}
/**
 * @name MsgRevokeBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRevokeBridge
 */
export interface MsgRevokeBridge {
  authority: string;
  operator: string;
  peerId: string;
  reason: string;
}
export interface MsgRevokeBridgeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRevokeBridge";
  value: Uint8Array;
}
/**
 * @name MsgRevokeBridgeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRevokeBridge
 */
export interface MsgRevokeBridgeAmino {
  authority?: string;
  operator?: string;
  peer_id?: string;
  reason?: string;
}
export interface MsgRevokeBridgeAminoMsg {
  type: "sparkdream/x/federation/MsgRevokeBridge";
  value: MsgRevokeBridgeAmino;
}
/**
 * @name MsgRevokeBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRevokeBridgeResponse
 */
export interface MsgRevokeBridgeResponse {}
export interface MsgRevokeBridgeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRevokeBridgeResponse";
  value: Uint8Array;
}
/**
 * @name MsgRevokeBridgeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRevokeBridgeResponse
 */
export interface MsgRevokeBridgeResponseAmino {}
export interface MsgRevokeBridgeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgRevokeBridgeResponse";
  value: MsgRevokeBridgeResponseAmino;
}
/**
 * @name MsgSlashBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSlashBridge
 */
export interface MsgSlashBridge {
  authority: string;
  operator: string;
  peerId: string;
  amount: string;
  reason: string;
}
export interface MsgSlashBridgeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSlashBridge";
  value: Uint8Array;
}
/**
 * @name MsgSlashBridgeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSlashBridge
 */
export interface MsgSlashBridgeAmino {
  authority?: string;
  operator?: string;
  peer_id?: string;
  amount?: string;
  reason?: string;
}
export interface MsgSlashBridgeAminoMsg {
  type: "sparkdream/x/federation/MsgSlashBridge";
  value: MsgSlashBridgeAmino;
}
/**
 * @name MsgSlashBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSlashBridgeResponse
 */
export interface MsgSlashBridgeResponse {}
export interface MsgSlashBridgeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSlashBridgeResponse";
  value: Uint8Array;
}
/**
 * @name MsgSlashBridgeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSlashBridgeResponse
 */
export interface MsgSlashBridgeResponseAmino {}
export interface MsgSlashBridgeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgSlashBridgeResponse";
  value: MsgSlashBridgeResponseAmino;
}
/**
 * @name MsgUpdateBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateBridge
 */
export interface MsgUpdateBridge {
  authority: string;
  operator: string;
  peerId: string;
  endpoint: string;
}
export interface MsgUpdateBridgeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateBridge";
  value: Uint8Array;
}
/**
 * @name MsgUpdateBridgeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateBridge
 */
export interface MsgUpdateBridgeAmino {
  authority?: string;
  operator?: string;
  peer_id?: string;
  endpoint?: string;
}
export interface MsgUpdateBridgeAminoMsg {
  type: "sparkdream/x/federation/MsgUpdateBridge";
  value: MsgUpdateBridgeAmino;
}
/**
 * @name MsgUpdateBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateBridgeResponse
 */
export interface MsgUpdateBridgeResponse {}
export interface MsgUpdateBridgeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateBridgeResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateBridgeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateBridgeResponse
 */
export interface MsgUpdateBridgeResponseAmino {}
export interface MsgUpdateBridgeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgUpdateBridgeResponse";
  value: MsgUpdateBridgeResponseAmino;
}
/**
 * @name MsgUnbondBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnbondBridge
 */
export interface MsgUnbondBridge {
  operator: string;
  peerId: string;
}
export interface MsgUnbondBridgeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUnbondBridge";
  value: Uint8Array;
}
/**
 * @name MsgUnbondBridgeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnbondBridge
 */
export interface MsgUnbondBridgeAmino {
  operator?: string;
  peer_id?: string;
}
export interface MsgUnbondBridgeAminoMsg {
  type: "sparkdream/x/federation/MsgUnbondBridge";
  value: MsgUnbondBridgeAmino;
}
/**
 * @name MsgUnbondBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnbondBridgeResponse
 */
export interface MsgUnbondBridgeResponse {}
export interface MsgUnbondBridgeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUnbondBridgeResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnbondBridgeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnbondBridgeResponse
 */
export interface MsgUnbondBridgeResponseAmino {}
export interface MsgUnbondBridgeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgUnbondBridgeResponse";
  value: MsgUnbondBridgeResponseAmino;
}
/**
 * @name MsgTopUpBridgeStake
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgTopUpBridgeStake
 */
export interface MsgTopUpBridgeStake {
  operator: string;
  peerId: string;
  amount: Coin;
}
export interface MsgTopUpBridgeStakeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgTopUpBridgeStake";
  value: Uint8Array;
}
/**
 * @name MsgTopUpBridgeStakeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgTopUpBridgeStake
 */
export interface MsgTopUpBridgeStakeAmino {
  operator?: string;
  peer_id?: string;
  amount?: CoinAmino;
}
export interface MsgTopUpBridgeStakeAminoMsg {
  type: "sparkdream/x/federation/MsgTopUpBridgeStake";
  value: MsgTopUpBridgeStakeAmino;
}
/**
 * @name MsgTopUpBridgeStakeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgTopUpBridgeStakeResponse
 */
export interface MsgTopUpBridgeStakeResponse {}
export interface MsgTopUpBridgeStakeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgTopUpBridgeStakeResponse";
  value: Uint8Array;
}
/**
 * @name MsgTopUpBridgeStakeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgTopUpBridgeStakeResponse
 */
export interface MsgTopUpBridgeStakeResponseAmino {}
export interface MsgTopUpBridgeStakeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgTopUpBridgeStakeResponse";
  value: MsgTopUpBridgeStakeResponseAmino;
}
/**
 * @name MsgSubmitFederatedContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitFederatedContent
 */
export interface MsgSubmitFederatedContent {
  operator: string;
  peerId: string;
  remoteContentId: string;
  contentType: string;
  creatorIdentity: string;
  creatorName: string;
  title: string;
  body: string;
  contentUri: string;
  protocolMetadata: Uint8Array;
  remoteCreatedAt: bigint;
  contentHash: Uint8Array;
}
export interface MsgSubmitFederatedContentProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContent";
  value: Uint8Array;
}
/**
 * @name MsgSubmitFederatedContentAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitFederatedContent
 */
export interface MsgSubmitFederatedContentAmino {
  operator?: string;
  peer_id?: string;
  remote_content_id?: string;
  content_type?: string;
  creator_identity?: string;
  creator_name?: string;
  title?: string;
  body?: string;
  content_uri?: string;
  protocol_metadata?: string;
  remote_created_at?: string;
  content_hash?: string;
}
export interface MsgSubmitFederatedContentAminoMsg {
  type: "sparkdream/x/federation/MsgSubmitFederatedContent";
  value: MsgSubmitFederatedContentAmino;
}
/**
 * @name MsgSubmitFederatedContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitFederatedContentResponse
 */
export interface MsgSubmitFederatedContentResponse {
  contentId: bigint;
}
export interface MsgSubmitFederatedContentResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContentResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitFederatedContentResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitFederatedContentResponse
 */
export interface MsgSubmitFederatedContentResponseAmino {
  content_id?: string;
}
export interface MsgSubmitFederatedContentResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgSubmitFederatedContentResponse";
  value: MsgSubmitFederatedContentResponseAmino;
}
/**
 * @name MsgFederateContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgFederateContent
 */
export interface MsgFederateContent {
  creator: string;
  peerId: string;
  contentType: string;
  localContentId: string;
  title: string;
  body: string;
  contentUri: string;
  contentHash: Uint8Array;
}
export interface MsgFederateContentProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgFederateContent";
  value: Uint8Array;
}
/**
 * @name MsgFederateContentAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgFederateContent
 */
export interface MsgFederateContentAmino {
  creator?: string;
  peer_id?: string;
  content_type?: string;
  local_content_id?: string;
  title?: string;
  body?: string;
  content_uri?: string;
  content_hash?: string;
}
export interface MsgFederateContentAminoMsg {
  type: "sparkdream/x/federation/MsgFederateContent";
  value: MsgFederateContentAmino;
}
/**
 * @name MsgFederateContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgFederateContentResponse
 */
export interface MsgFederateContentResponse {}
export interface MsgFederateContentResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgFederateContentResponse";
  value: Uint8Array;
}
/**
 * @name MsgFederateContentResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgFederateContentResponse
 */
export interface MsgFederateContentResponseAmino {}
export interface MsgFederateContentResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgFederateContentResponse";
  value: MsgFederateContentResponseAmino;
}
/**
 * @name MsgAttestOutbound
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgAttestOutbound
 */
export interface MsgAttestOutbound {
  operator: string;
  peerId: string;
  contentType: string;
  localContentId: string;
}
export interface MsgAttestOutboundProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgAttestOutbound";
  value: Uint8Array;
}
/**
 * @name MsgAttestOutboundAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgAttestOutbound
 */
export interface MsgAttestOutboundAmino {
  operator?: string;
  peer_id?: string;
  content_type?: string;
  local_content_id?: string;
}
export interface MsgAttestOutboundAminoMsg {
  type: "sparkdream/x/federation/MsgAttestOutbound";
  value: MsgAttestOutboundAmino;
}
/**
 * @name MsgAttestOutboundResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgAttestOutboundResponse
 */
export interface MsgAttestOutboundResponse {}
export interface MsgAttestOutboundResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgAttestOutboundResponse";
  value: Uint8Array;
}
/**
 * @name MsgAttestOutboundResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgAttestOutboundResponse
 */
export interface MsgAttestOutboundResponseAmino {}
export interface MsgAttestOutboundResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgAttestOutboundResponse";
  value: MsgAttestOutboundResponseAmino;
}
/**
 * @name MsgModerateContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgModerateContent
 */
export interface MsgModerateContent {
  authority: string;
  contentId: bigint;
  newStatus: FederatedContentStatus;
  reason: string;
}
export interface MsgModerateContentProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgModerateContent";
  value: Uint8Array;
}
/**
 * @name MsgModerateContentAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgModerateContent
 */
export interface MsgModerateContentAmino {
  authority?: string;
  content_id?: string;
  new_status?: FederatedContentStatus;
  reason?: string;
}
export interface MsgModerateContentAminoMsg {
  type: "sparkdream/x/federation/MsgModerateContent";
  value: MsgModerateContentAmino;
}
/**
 * @name MsgModerateContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgModerateContentResponse
 */
export interface MsgModerateContentResponse {}
export interface MsgModerateContentResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgModerateContentResponse";
  value: Uint8Array;
}
/**
 * @name MsgModerateContentResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgModerateContentResponse
 */
export interface MsgModerateContentResponseAmino {}
export interface MsgModerateContentResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgModerateContentResponse";
  value: MsgModerateContentResponseAmino;
}
/**
 * @name MsgLinkIdentity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgLinkIdentity
 */
export interface MsgLinkIdentity {
  creator: string;
  peerId: string;
  remoteIdentity: string;
}
export interface MsgLinkIdentityProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgLinkIdentity";
  value: Uint8Array;
}
/**
 * @name MsgLinkIdentityAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgLinkIdentity
 */
export interface MsgLinkIdentityAmino {
  creator?: string;
  peer_id?: string;
  remote_identity?: string;
}
export interface MsgLinkIdentityAminoMsg {
  type: "sparkdream/x/federation/MsgLinkIdentity";
  value: MsgLinkIdentityAmino;
}
/**
 * @name MsgLinkIdentityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgLinkIdentityResponse
 */
export interface MsgLinkIdentityResponse {}
export interface MsgLinkIdentityResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgLinkIdentityResponse";
  value: Uint8Array;
}
/**
 * @name MsgLinkIdentityResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgLinkIdentityResponse
 */
export interface MsgLinkIdentityResponseAmino {}
export interface MsgLinkIdentityResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgLinkIdentityResponse";
  value: MsgLinkIdentityResponseAmino;
}
/**
 * @name MsgUnlinkIdentity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnlinkIdentity
 */
export interface MsgUnlinkIdentity {
  creator: string;
  peerId: string;
}
export interface MsgUnlinkIdentityProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentity";
  value: Uint8Array;
}
/**
 * @name MsgUnlinkIdentityAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnlinkIdentity
 */
export interface MsgUnlinkIdentityAmino {
  creator?: string;
  peer_id?: string;
}
export interface MsgUnlinkIdentityAminoMsg {
  type: "sparkdream/x/federation/MsgUnlinkIdentity";
  value: MsgUnlinkIdentityAmino;
}
/**
 * @name MsgUnlinkIdentityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnlinkIdentityResponse
 */
export interface MsgUnlinkIdentityResponse {}
export interface MsgUnlinkIdentityResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentityResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnlinkIdentityResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnlinkIdentityResponse
 */
export interface MsgUnlinkIdentityResponseAmino {}
export interface MsgUnlinkIdentityResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgUnlinkIdentityResponse";
  value: MsgUnlinkIdentityResponseAmino;
}
/**
 * @name MsgConfirmIdentityLink
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgConfirmIdentityLink
 */
export interface MsgConfirmIdentityLink {
  creator: string;
  claimantChainPeerId: string;
}
export interface MsgConfirmIdentityLinkProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLink";
  value: Uint8Array;
}
/**
 * @name MsgConfirmIdentityLinkAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgConfirmIdentityLink
 */
export interface MsgConfirmIdentityLinkAmino {
  creator?: string;
  claimant_chain_peer_id?: string;
}
export interface MsgConfirmIdentityLinkAminoMsg {
  type: "sparkdream/x/federation/MsgConfirmIdentityLink";
  value: MsgConfirmIdentityLinkAmino;
}
/**
 * @name MsgConfirmIdentityLinkResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgConfirmIdentityLinkResponse
 */
export interface MsgConfirmIdentityLinkResponse {}
export interface MsgConfirmIdentityLinkResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLinkResponse";
  value: Uint8Array;
}
/**
 * @name MsgConfirmIdentityLinkResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgConfirmIdentityLinkResponse
 */
export interface MsgConfirmIdentityLinkResponseAmino {}
export interface MsgConfirmIdentityLinkResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgConfirmIdentityLinkResponse";
  value: MsgConfirmIdentityLinkResponseAmino;
}
/**
 * @name MsgRequestReputationAttestation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRequestReputationAttestation
 */
export interface MsgRequestReputationAttestation {
  creator: string;
  peerId: string;
  remoteAddress: string;
}
export interface MsgRequestReputationAttestationProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestation";
  value: Uint8Array;
}
/**
 * @name MsgRequestReputationAttestationAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRequestReputationAttestation
 */
export interface MsgRequestReputationAttestationAmino {
  creator?: string;
  peer_id?: string;
  remote_address?: string;
}
export interface MsgRequestReputationAttestationAminoMsg {
  type: "sparkdream/x/federation/MsgRequestReputationAttestation";
  value: MsgRequestReputationAttestationAmino;
}
/**
 * @name MsgRequestReputationAttestationResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRequestReputationAttestationResponse
 */
export interface MsgRequestReputationAttestationResponse {}
export interface MsgRequestReputationAttestationResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestationResponse";
  value: Uint8Array;
}
/**
 * @name MsgRequestReputationAttestationResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRequestReputationAttestationResponse
 */
export interface MsgRequestReputationAttestationResponseAmino {}
export interface MsgRequestReputationAttestationResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgRequestReputationAttestationResponse";
  value: MsgRequestReputationAttestationResponseAmino;
}
/**
 * @name MsgVerifyContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgVerifyContent
 */
export interface MsgVerifyContent {
  creator: string;
  contentId: bigint;
  contentHash: Uint8Array;
}
export interface MsgVerifyContentProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgVerifyContent";
  value: Uint8Array;
}
/**
 * @name MsgVerifyContentAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgVerifyContent
 */
export interface MsgVerifyContentAmino {
  creator?: string;
  content_id?: string;
  content_hash?: string;
}
export interface MsgVerifyContentAminoMsg {
  type: "sparkdream/x/federation/MsgVerifyContent";
  value: MsgVerifyContentAmino;
}
/**
 * @name MsgVerifyContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgVerifyContentResponse
 */
export interface MsgVerifyContentResponse {}
export interface MsgVerifyContentResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgVerifyContentResponse";
  value: Uint8Array;
}
/**
 * @name MsgVerifyContentResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgVerifyContentResponse
 */
export interface MsgVerifyContentResponseAmino {}
export interface MsgVerifyContentResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgVerifyContentResponse";
  value: MsgVerifyContentResponseAmino;
}
/**
 * @name MsgChallengeVerification
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgChallengeVerification
 */
export interface MsgChallengeVerification {
  creator: string;
  contentId: bigint;
  contentHash: Uint8Array;
  evidence: string;
}
export interface MsgChallengeVerificationProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgChallengeVerification";
  value: Uint8Array;
}
/**
 * @name MsgChallengeVerificationAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgChallengeVerification
 */
export interface MsgChallengeVerificationAmino {
  creator?: string;
  content_id?: string;
  content_hash?: string;
  evidence?: string;
}
export interface MsgChallengeVerificationAminoMsg {
  type: "sparkdream/x/federation/MsgChallengeVerification";
  value: MsgChallengeVerificationAmino;
}
/**
 * @name MsgChallengeVerificationResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgChallengeVerificationResponse
 */
export interface MsgChallengeVerificationResponse {}
export interface MsgChallengeVerificationResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgChallengeVerificationResponse";
  value: Uint8Array;
}
/**
 * @name MsgChallengeVerificationResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgChallengeVerificationResponse
 */
export interface MsgChallengeVerificationResponseAmino {}
export interface MsgChallengeVerificationResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgChallengeVerificationResponse";
  value: MsgChallengeVerificationResponseAmino;
}
/**
 * @name MsgSubmitArbiterHash
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitArbiterHash
 */
export interface MsgSubmitArbiterHash {
  creator: string;
  contentId: bigint;
  contentHash: Uint8Array;
}
export interface MsgSubmitArbiterHashProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHash";
  value: Uint8Array;
}
/**
 * @name MsgSubmitArbiterHashAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitArbiterHash
 */
export interface MsgSubmitArbiterHashAmino {
  creator?: string;
  content_id?: string;
  content_hash?: string;
}
export interface MsgSubmitArbiterHashAminoMsg {
  type: "sparkdream/x/federation/MsgSubmitArbiterHash";
  value: MsgSubmitArbiterHashAmino;
}
/**
 * @name MsgSubmitArbiterHashResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitArbiterHashResponse
 */
export interface MsgSubmitArbiterHashResponse {}
export interface MsgSubmitArbiterHashResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHashResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitArbiterHashResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitArbiterHashResponse
 */
export interface MsgSubmitArbiterHashResponseAmino {}
export interface MsgSubmitArbiterHashResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgSubmitArbiterHashResponse";
  value: MsgSubmitArbiterHashResponseAmino;
}
/**
 * @name MsgEscalateChallenge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgEscalateChallenge
 */
export interface MsgEscalateChallenge {
  creator: string;
  contentId: bigint;
}
export interface MsgEscalateChallengeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgEscalateChallenge";
  value: Uint8Array;
}
/**
 * @name MsgEscalateChallengeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgEscalateChallenge
 */
export interface MsgEscalateChallengeAmino {
  creator?: string;
  content_id?: string;
}
export interface MsgEscalateChallengeAminoMsg {
  type: "sparkdream/x/federation/MsgEscalateChallenge";
  value: MsgEscalateChallengeAmino;
}
/**
 * @name MsgEscalateChallengeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgEscalateChallengeResponse
 */
export interface MsgEscalateChallengeResponse {}
export interface MsgEscalateChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgEscalateChallengeResponse";
  value: Uint8Array;
}
/**
 * @name MsgEscalateChallengeResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgEscalateChallengeResponse
 */
export interface MsgEscalateChallengeResponseAmino {}
export interface MsgEscalateChallengeResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgEscalateChallengeResponse";
  value: MsgEscalateChallengeResponseAmino;
}
/**
 * @name MsgUpdateOperationalParams
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  authority: string;
  operationalParams: FederationOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  authority?: string;
  operational_params?: FederationOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/federation/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.federation.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * @name MsgUpdateParams
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/federation/MsgUpdateParams",
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
      type: "sparkdream/x/federation/MsgUpdateParams",
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
      typeUrl: "/sparkdream.federation.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.federation.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterPeer(): MsgRegisterPeer {
  return {
    authority: "",
    peerId: "",
    displayName: "",
    type: 0,
    ibcChannelId: "",
    metadata: ""
  };
}
/**
 * @name MsgRegisterPeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterPeer
 */
export const MsgRegisterPeer = {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterPeer",
  aminoType: "sparkdream/x/federation/MsgRegisterPeer",
  encode(message: MsgRegisterPeer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.ibcChannelId !== "") {
      writer.uint32(42).string(message.ibcChannelId);
    }
    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPeer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.ibcChannelId = reader.string();
          break;
        case 6:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterPeer>): MsgRegisterPeer {
    const message = createBaseMsgRegisterPeer();
    message.authority = object.authority ?? "";
    message.peerId = object.peerId ?? "";
    message.displayName = object.displayName ?? "";
    message.type = object.type ?? 0;
    message.ibcChannelId = object.ibcChannelId ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterPeerAmino): MsgRegisterPeer {
    const message = createBaseMsgRegisterPeer();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.ibc_channel_id !== undefined && object.ibc_channel_id !== null) {
      message.ibcChannelId = object.ibc_channel_id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgRegisterPeer): MsgRegisterPeerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.ibc_channel_id = message.ibcChannelId === "" ? undefined : message.ibcChannelId;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPeerAminoMsg): MsgRegisterPeer {
    return MsgRegisterPeer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPeer): MsgRegisterPeerAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgRegisterPeer",
      value: MsgRegisterPeer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterPeerProtoMsg): MsgRegisterPeer {
    return MsgRegisterPeer.decode(message.value);
  },
  toProto(message: MsgRegisterPeer): Uint8Array {
    return MsgRegisterPeer.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPeer): MsgRegisterPeerProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRegisterPeer",
      value: MsgRegisterPeer.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterPeerResponse(): MsgRegisterPeerResponse {
  return {};
}
/**
 * @name MsgRegisterPeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterPeerResponse
 */
export const MsgRegisterPeerResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterPeerResponse",
  encode(_: MsgRegisterPeerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPeerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPeerResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterPeerResponse>): MsgRegisterPeerResponse {
    const message = createBaseMsgRegisterPeerResponse();
    return message;
  },
  fromAmino(_: MsgRegisterPeerResponseAmino): MsgRegisterPeerResponse {
    const message = createBaseMsgRegisterPeerResponse();
    return message;
  },
  toAmino(_: MsgRegisterPeerResponse): MsgRegisterPeerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPeerResponseAminoMsg): MsgRegisterPeerResponse {
    return MsgRegisterPeerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterPeerResponseProtoMsg): MsgRegisterPeerResponse {
    return MsgRegisterPeerResponse.decode(message.value);
  },
  toProto(message: MsgRegisterPeerResponse): Uint8Array {
    return MsgRegisterPeerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterPeerResponse): MsgRegisterPeerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRegisterPeerResponse",
      value: MsgRegisterPeerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePeer(): MsgRemovePeer {
  return {
    authority: "",
    peerId: "",
    reason: ""
  };
}
/**
 * @name MsgRemovePeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRemovePeer
 */
export const MsgRemovePeer = {
  typeUrl: "/sparkdream.federation.v1.MsgRemovePeer",
  aminoType: "sparkdream/x/federation/MsgRemovePeer",
  encode(message: MsgRemovePeer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemovePeer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
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
  fromPartial(object: DeepPartial<MsgRemovePeer>): MsgRemovePeer {
    const message = createBaseMsgRemovePeer();
    message.authority = object.authority ?? "";
    message.peerId = object.peerId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRemovePeerAmino): MsgRemovePeer {
    const message = createBaseMsgRemovePeer();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRemovePeer): MsgRemovePeerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRemovePeerAminoMsg): MsgRemovePeer {
    return MsgRemovePeer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemovePeer): MsgRemovePeerAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgRemovePeer",
      value: MsgRemovePeer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemovePeerProtoMsg): MsgRemovePeer {
    return MsgRemovePeer.decode(message.value);
  },
  toProto(message: MsgRemovePeer): Uint8Array {
    return MsgRemovePeer.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePeer): MsgRemovePeerProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRemovePeer",
      value: MsgRemovePeer.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePeerResponse(): MsgRemovePeerResponse {
  return {};
}
/**
 * @name MsgRemovePeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRemovePeerResponse
 */
export const MsgRemovePeerResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgRemovePeerResponse",
  encode(_: MsgRemovePeerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemovePeerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePeerResponse();
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
  fromPartial(_: DeepPartial<MsgRemovePeerResponse>): MsgRemovePeerResponse {
    const message = createBaseMsgRemovePeerResponse();
    return message;
  },
  fromAmino(_: MsgRemovePeerResponseAmino): MsgRemovePeerResponse {
    const message = createBaseMsgRemovePeerResponse();
    return message;
  },
  toAmino(_: MsgRemovePeerResponse): MsgRemovePeerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePeerResponseAminoMsg): MsgRemovePeerResponse {
    return MsgRemovePeerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePeerResponseProtoMsg): MsgRemovePeerResponse {
    return MsgRemovePeerResponse.decode(message.value);
  },
  toProto(message: MsgRemovePeerResponse): Uint8Array {
    return MsgRemovePeerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePeerResponse): MsgRemovePeerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRemovePeerResponse",
      value: MsgRemovePeerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSuspendPeer(): MsgSuspendPeer {
  return {
    authority: "",
    peerId: "",
    reason: ""
  };
}
/**
 * @name MsgSuspendPeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSuspendPeer
 */
export const MsgSuspendPeer = {
  typeUrl: "/sparkdream.federation.v1.MsgSuspendPeer",
  aminoType: "sparkdream/x/federation/MsgSuspendPeer",
  encode(message: MsgSuspendPeer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuspendPeer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuspendPeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
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
  fromPartial(object: DeepPartial<MsgSuspendPeer>): MsgSuspendPeer {
    const message = createBaseMsgSuspendPeer();
    message.authority = object.authority ?? "";
    message.peerId = object.peerId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgSuspendPeerAmino): MsgSuspendPeer {
    const message = createBaseMsgSuspendPeer();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgSuspendPeer): MsgSuspendPeerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgSuspendPeerAminoMsg): MsgSuspendPeer {
    return MsgSuspendPeer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSuspendPeer): MsgSuspendPeerAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgSuspendPeer",
      value: MsgSuspendPeer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSuspendPeerProtoMsg): MsgSuspendPeer {
    return MsgSuspendPeer.decode(message.value);
  },
  toProto(message: MsgSuspendPeer): Uint8Array {
    return MsgSuspendPeer.encode(message).finish();
  },
  toProtoMsg(message: MsgSuspendPeer): MsgSuspendPeerProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSuspendPeer",
      value: MsgSuspendPeer.encode(message).finish()
    };
  }
};
function createBaseMsgSuspendPeerResponse(): MsgSuspendPeerResponse {
  return {};
}
/**
 * @name MsgSuspendPeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSuspendPeerResponse
 */
export const MsgSuspendPeerResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgSuspendPeerResponse",
  encode(_: MsgSuspendPeerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuspendPeerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuspendPeerResponse();
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
  fromPartial(_: DeepPartial<MsgSuspendPeerResponse>): MsgSuspendPeerResponse {
    const message = createBaseMsgSuspendPeerResponse();
    return message;
  },
  fromAmino(_: MsgSuspendPeerResponseAmino): MsgSuspendPeerResponse {
    const message = createBaseMsgSuspendPeerResponse();
    return message;
  },
  toAmino(_: MsgSuspendPeerResponse): MsgSuspendPeerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSuspendPeerResponseAminoMsg): MsgSuspendPeerResponse {
    return MsgSuspendPeerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSuspendPeerResponseProtoMsg): MsgSuspendPeerResponse {
    return MsgSuspendPeerResponse.decode(message.value);
  },
  toProto(message: MsgSuspendPeerResponse): Uint8Array {
    return MsgSuspendPeerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSuspendPeerResponse): MsgSuspendPeerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSuspendPeerResponse",
      value: MsgSuspendPeerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResumePeer(): MsgResumePeer {
  return {
    authority: "",
    peerId: ""
  };
}
/**
 * @name MsgResumePeer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgResumePeer
 */
export const MsgResumePeer = {
  typeUrl: "/sparkdream.federation.v1.MsgResumePeer",
  aminoType: "sparkdream/x/federation/MsgResumePeer",
  encode(message: MsgResumePeer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResumePeer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResumePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromPartial(object: DeepPartial<MsgResumePeer>): MsgResumePeer {
    const message = createBaseMsgResumePeer();
    message.authority = object.authority ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: MsgResumePeerAmino): MsgResumePeer {
    const message = createBaseMsgResumePeer();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: MsgResumePeer): MsgResumePeerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: MsgResumePeerAminoMsg): MsgResumePeer {
    return MsgResumePeer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResumePeer): MsgResumePeerAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgResumePeer",
      value: MsgResumePeer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResumePeerProtoMsg): MsgResumePeer {
    return MsgResumePeer.decode(message.value);
  },
  toProto(message: MsgResumePeer): Uint8Array {
    return MsgResumePeer.encode(message).finish();
  },
  toProtoMsg(message: MsgResumePeer): MsgResumePeerProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgResumePeer",
      value: MsgResumePeer.encode(message).finish()
    };
  }
};
function createBaseMsgResumePeerResponse(): MsgResumePeerResponse {
  return {};
}
/**
 * @name MsgResumePeerResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgResumePeerResponse
 */
export const MsgResumePeerResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgResumePeerResponse",
  encode(_: MsgResumePeerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResumePeerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResumePeerResponse();
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
  fromPartial(_: DeepPartial<MsgResumePeerResponse>): MsgResumePeerResponse {
    const message = createBaseMsgResumePeerResponse();
    return message;
  },
  fromAmino(_: MsgResumePeerResponseAmino): MsgResumePeerResponse {
    const message = createBaseMsgResumePeerResponse();
    return message;
  },
  toAmino(_: MsgResumePeerResponse): MsgResumePeerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResumePeerResponseAminoMsg): MsgResumePeerResponse {
    return MsgResumePeerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumePeerResponseProtoMsg): MsgResumePeerResponse {
    return MsgResumePeerResponse.decode(message.value);
  },
  toProto(message: MsgResumePeerResponse): Uint8Array {
    return MsgResumePeerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResumePeerResponse): MsgResumePeerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgResumePeerResponse",
      value: MsgResumePeerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePeerPolicy(): MsgUpdatePeerPolicy {
  return {
    authority: "",
    peerId: "",
    policy: PeerPolicy.fromPartial({})
  };
}
/**
 * @name MsgUpdatePeerPolicy
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdatePeerPolicy
 */
export const MsgUpdatePeerPolicy = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicy",
  aminoType: "sparkdream/x/federation/MsgUpdatePeerPolicy",
  encode(message: MsgUpdatePeerPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.policy !== undefined) {
      PeerPolicy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePeerPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePeerPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.policy = PeerPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdatePeerPolicy>): MsgUpdatePeerPolicy {
    const message = createBaseMsgUpdatePeerPolicy();
    message.authority = object.authority ?? "";
    message.peerId = object.peerId ?? "";
    message.policy = object.policy !== undefined && object.policy !== null ? PeerPolicy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdatePeerPolicyAmino): MsgUpdatePeerPolicy {
    const message = createBaseMsgUpdatePeerPolicy();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = PeerPolicy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: MsgUpdatePeerPolicy): MsgUpdatePeerPolicyAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.policy = message.policy ? PeerPolicy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePeerPolicyAminoMsg): MsgUpdatePeerPolicy {
    return MsgUpdatePeerPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdatePeerPolicy): MsgUpdatePeerPolicyAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgUpdatePeerPolicy",
      value: MsgUpdatePeerPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdatePeerPolicyProtoMsg): MsgUpdatePeerPolicy {
    return MsgUpdatePeerPolicy.decode(message.value);
  },
  toProto(message: MsgUpdatePeerPolicy): Uint8Array {
    return MsgUpdatePeerPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePeerPolicy): MsgUpdatePeerPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicy",
      value: MsgUpdatePeerPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePeerPolicyResponse(): MsgUpdatePeerPolicyResponse {
  return {};
}
/**
 * @name MsgUpdatePeerPolicyResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdatePeerPolicyResponse
 */
export const MsgUpdatePeerPolicyResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicyResponse",
  encode(_: MsgUpdatePeerPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePeerPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePeerPolicyResponse();
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
  fromPartial(_: DeepPartial<MsgUpdatePeerPolicyResponse>): MsgUpdatePeerPolicyResponse {
    const message = createBaseMsgUpdatePeerPolicyResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePeerPolicyResponseAmino): MsgUpdatePeerPolicyResponse {
    const message = createBaseMsgUpdatePeerPolicyResponse();
    return message;
  },
  toAmino(_: MsgUpdatePeerPolicyResponse): MsgUpdatePeerPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePeerPolicyResponseAminoMsg): MsgUpdatePeerPolicyResponse {
    return MsgUpdatePeerPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePeerPolicyResponseProtoMsg): MsgUpdatePeerPolicyResponse {
    return MsgUpdatePeerPolicyResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePeerPolicyResponse): Uint8Array {
    return MsgUpdatePeerPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePeerPolicyResponse): MsgUpdatePeerPolicyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicyResponse",
      value: MsgUpdatePeerPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterBridge(): MsgRegisterBridge {
  return {
    authority: "",
    operator: "",
    peerId: "",
    protocol: "",
    endpoint: ""
  };
}
/**
 * @name MsgRegisterBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterBridge
 */
export const MsgRegisterBridge = {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterBridge",
  aminoType: "sparkdream/x/federation/MsgRegisterBridge",
  encode(message: MsgRegisterBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(26).string(message.peerId);
    }
    if (message.protocol !== "") {
      writer.uint32(34).string(message.protocol);
    }
    if (message.endpoint !== "") {
      writer.uint32(42).string(message.endpoint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.peerId = reader.string();
          break;
        case 4:
          message.protocol = reader.string();
          break;
        case 5:
          message.endpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterBridge>): MsgRegisterBridge {
    const message = createBaseMsgRegisterBridge();
    message.authority = object.authority ?? "";
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.protocol = object.protocol ?? "";
    message.endpoint = object.endpoint ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterBridgeAmino): MsgRegisterBridge {
    const message = createBaseMsgRegisterBridge();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    }
    return message;
  },
  toAmino(message: MsgRegisterBridge): MsgRegisterBridgeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.protocol = message.protocol === "" ? undefined : message.protocol;
    obj.endpoint = message.endpoint === "" ? undefined : message.endpoint;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBridgeAminoMsg): MsgRegisterBridge {
    return MsgRegisterBridge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterBridge): MsgRegisterBridgeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgRegisterBridge",
      value: MsgRegisterBridge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterBridgeProtoMsg): MsgRegisterBridge {
    return MsgRegisterBridge.decode(message.value);
  },
  toProto(message: MsgRegisterBridge): Uint8Array {
    return MsgRegisterBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBridge): MsgRegisterBridgeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRegisterBridge",
      value: MsgRegisterBridge.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterBridgeResponse(): MsgRegisterBridgeResponse {
  return {};
}
/**
 * @name MsgRegisterBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRegisterBridgeResponse
 */
export const MsgRegisterBridgeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgRegisterBridgeResponse",
  encode(_: MsgRegisterBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBridgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBridgeResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterBridgeResponse>): MsgRegisterBridgeResponse {
    const message = createBaseMsgRegisterBridgeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterBridgeResponseAmino): MsgRegisterBridgeResponse {
    const message = createBaseMsgRegisterBridgeResponse();
    return message;
  },
  toAmino(_: MsgRegisterBridgeResponse): MsgRegisterBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBridgeResponseAminoMsg): MsgRegisterBridgeResponse {
    return MsgRegisterBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBridgeResponseProtoMsg): MsgRegisterBridgeResponse {
    return MsgRegisterBridgeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterBridgeResponse): Uint8Array {
    return MsgRegisterBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBridgeResponse): MsgRegisterBridgeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRegisterBridgeResponse",
      value: MsgRegisterBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeBridge(): MsgRevokeBridge {
  return {
    authority: "",
    operator: "",
    peerId: "",
    reason: ""
  };
}
/**
 * @name MsgRevokeBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRevokeBridge
 */
export const MsgRevokeBridge = {
  typeUrl: "/sparkdream.federation.v1.MsgRevokeBridge",
  aminoType: "sparkdream/x/federation/MsgRevokeBridge",
  encode(message: MsgRevokeBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(26).string(message.peerId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.peerId = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeBridge>): MsgRevokeBridge {
    const message = createBaseMsgRevokeBridge();
    message.authority = object.authority ?? "";
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeBridgeAmino): MsgRevokeBridge {
    const message = createBaseMsgRevokeBridge();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRevokeBridge): MsgRevokeBridgeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeBridgeAminoMsg): MsgRevokeBridge {
    return MsgRevokeBridge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeBridge): MsgRevokeBridgeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgRevokeBridge",
      value: MsgRevokeBridge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeBridgeProtoMsg): MsgRevokeBridge {
    return MsgRevokeBridge.decode(message.value);
  },
  toProto(message: MsgRevokeBridge): Uint8Array {
    return MsgRevokeBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeBridge): MsgRevokeBridgeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRevokeBridge",
      value: MsgRevokeBridge.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeBridgeResponse(): MsgRevokeBridgeResponse {
  return {};
}
/**
 * @name MsgRevokeBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRevokeBridgeResponse
 */
export const MsgRevokeBridgeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgRevokeBridgeResponse",
  encode(_: MsgRevokeBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeBridgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeBridgeResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeBridgeResponse>): MsgRevokeBridgeResponse {
    const message = createBaseMsgRevokeBridgeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeBridgeResponseAmino): MsgRevokeBridgeResponse {
    const message = createBaseMsgRevokeBridgeResponse();
    return message;
  },
  toAmino(_: MsgRevokeBridgeResponse): MsgRevokeBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeBridgeResponseAminoMsg): MsgRevokeBridgeResponse {
    return MsgRevokeBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeBridgeResponseProtoMsg): MsgRevokeBridgeResponse {
    return MsgRevokeBridgeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeBridgeResponse): Uint8Array {
    return MsgRevokeBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeBridgeResponse): MsgRevokeBridgeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRevokeBridgeResponse",
      value: MsgRevokeBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSlashBridge(): MsgSlashBridge {
  return {
    authority: "",
    operator: "",
    peerId: "",
    amount: "",
    reason: ""
  };
}
/**
 * @name MsgSlashBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSlashBridge
 */
export const MsgSlashBridge = {
  typeUrl: "/sparkdream.federation.v1.MsgSlashBridge",
  aminoType: "sparkdream/x/federation/MsgSlashBridge",
  encode(message: MsgSlashBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(26).string(message.peerId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSlashBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSlashBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.peerId = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSlashBridge>): MsgSlashBridge {
    const message = createBaseMsgSlashBridge();
    message.authority = object.authority ?? "";
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgSlashBridgeAmino): MsgSlashBridge {
    const message = createBaseMsgSlashBridge();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgSlashBridge): MsgSlashBridgeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgSlashBridgeAminoMsg): MsgSlashBridge {
    return MsgSlashBridge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSlashBridge): MsgSlashBridgeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgSlashBridge",
      value: MsgSlashBridge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSlashBridgeProtoMsg): MsgSlashBridge {
    return MsgSlashBridge.decode(message.value);
  },
  toProto(message: MsgSlashBridge): Uint8Array {
    return MsgSlashBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgSlashBridge): MsgSlashBridgeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSlashBridge",
      value: MsgSlashBridge.encode(message).finish()
    };
  }
};
function createBaseMsgSlashBridgeResponse(): MsgSlashBridgeResponse {
  return {};
}
/**
 * @name MsgSlashBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSlashBridgeResponse
 */
export const MsgSlashBridgeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgSlashBridgeResponse",
  encode(_: MsgSlashBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSlashBridgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSlashBridgeResponse();
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
  fromPartial(_: DeepPartial<MsgSlashBridgeResponse>): MsgSlashBridgeResponse {
    const message = createBaseMsgSlashBridgeResponse();
    return message;
  },
  fromAmino(_: MsgSlashBridgeResponseAmino): MsgSlashBridgeResponse {
    const message = createBaseMsgSlashBridgeResponse();
    return message;
  },
  toAmino(_: MsgSlashBridgeResponse): MsgSlashBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSlashBridgeResponseAminoMsg): MsgSlashBridgeResponse {
    return MsgSlashBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSlashBridgeResponseProtoMsg): MsgSlashBridgeResponse {
    return MsgSlashBridgeResponse.decode(message.value);
  },
  toProto(message: MsgSlashBridgeResponse): Uint8Array {
    return MsgSlashBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSlashBridgeResponse): MsgSlashBridgeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSlashBridgeResponse",
      value: MsgSlashBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBridge(): MsgUpdateBridge {
  return {
    authority: "",
    operator: "",
    peerId: "",
    endpoint: ""
  };
}
/**
 * @name MsgUpdateBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateBridge
 */
export const MsgUpdateBridge = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateBridge",
  aminoType: "sparkdream/x/federation/MsgUpdateBridge",
  encode(message: MsgUpdateBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(26).string(message.peerId);
    }
    if (message.endpoint !== "") {
      writer.uint32(34).string(message.endpoint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.peerId = reader.string();
          break;
        case 4:
          message.endpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateBridge>): MsgUpdateBridge {
    const message = createBaseMsgUpdateBridge();
    message.authority = object.authority ?? "";
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.endpoint = object.endpoint ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateBridgeAmino): MsgUpdateBridge {
    const message = createBaseMsgUpdateBridge();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    }
    return message;
  },
  toAmino(message: MsgUpdateBridge): MsgUpdateBridgeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.endpoint = message.endpoint === "" ? undefined : message.endpoint;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBridgeAminoMsg): MsgUpdateBridge {
    return MsgUpdateBridge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateBridge): MsgUpdateBridgeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgUpdateBridge",
      value: MsgUpdateBridge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateBridgeProtoMsg): MsgUpdateBridge {
    return MsgUpdateBridge.decode(message.value);
  },
  toProto(message: MsgUpdateBridge): Uint8Array {
    return MsgUpdateBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBridge): MsgUpdateBridgeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUpdateBridge",
      value: MsgUpdateBridge.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBridgeResponse(): MsgUpdateBridgeResponse {
  return {};
}
/**
 * @name MsgUpdateBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateBridgeResponse
 */
export const MsgUpdateBridgeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateBridgeResponse",
  encode(_: MsgUpdateBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBridgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBridgeResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateBridgeResponse>): MsgUpdateBridgeResponse {
    const message = createBaseMsgUpdateBridgeResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBridgeResponseAmino): MsgUpdateBridgeResponse {
    const message = createBaseMsgUpdateBridgeResponse();
    return message;
  },
  toAmino(_: MsgUpdateBridgeResponse): MsgUpdateBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBridgeResponseAminoMsg): MsgUpdateBridgeResponse {
    return MsgUpdateBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBridgeResponseProtoMsg): MsgUpdateBridgeResponse {
    return MsgUpdateBridgeResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBridgeResponse): Uint8Array {
    return MsgUpdateBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBridgeResponse): MsgUpdateBridgeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUpdateBridgeResponse",
      value: MsgUpdateBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondBridge(): MsgUnbondBridge {
  return {
    operator: "",
    peerId: ""
  };
}
/**
 * @name MsgUnbondBridge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnbondBridge
 */
export const MsgUnbondBridge = {
  typeUrl: "/sparkdream.federation.v1.MsgUnbondBridge",
  aminoType: "sparkdream/x/federation/MsgUnbondBridge",
  encode(message: MsgUnbondBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
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
  fromPartial(object: DeepPartial<MsgUnbondBridge>): MsgUnbondBridge {
    const message = createBaseMsgUnbondBridge();
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondBridgeAmino): MsgUnbondBridge {
    const message = createBaseMsgUnbondBridge();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: MsgUnbondBridge): MsgUnbondBridgeAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondBridgeAminoMsg): MsgUnbondBridge {
    return MsgUnbondBridge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondBridge): MsgUnbondBridgeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgUnbondBridge",
      value: MsgUnbondBridge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondBridgeProtoMsg): MsgUnbondBridge {
    return MsgUnbondBridge.decode(message.value);
  },
  toProto(message: MsgUnbondBridge): Uint8Array {
    return MsgUnbondBridge.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondBridge): MsgUnbondBridgeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUnbondBridge",
      value: MsgUnbondBridge.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondBridgeResponse(): MsgUnbondBridgeResponse {
  return {};
}
/**
 * @name MsgUnbondBridgeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnbondBridgeResponse
 */
export const MsgUnbondBridgeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgUnbondBridgeResponse",
  encode(_: MsgUnbondBridgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondBridgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondBridgeResponse();
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
  fromPartial(_: DeepPartial<MsgUnbondBridgeResponse>): MsgUnbondBridgeResponse {
    const message = createBaseMsgUnbondBridgeResponse();
    return message;
  },
  fromAmino(_: MsgUnbondBridgeResponseAmino): MsgUnbondBridgeResponse {
    const message = createBaseMsgUnbondBridgeResponse();
    return message;
  },
  toAmino(_: MsgUnbondBridgeResponse): MsgUnbondBridgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondBridgeResponseAminoMsg): MsgUnbondBridgeResponse {
    return MsgUnbondBridgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondBridgeResponseProtoMsg): MsgUnbondBridgeResponse {
    return MsgUnbondBridgeResponse.decode(message.value);
  },
  toProto(message: MsgUnbondBridgeResponse): Uint8Array {
    return MsgUnbondBridgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondBridgeResponse): MsgUnbondBridgeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUnbondBridgeResponse",
      value: MsgUnbondBridgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpBridgeStake(): MsgTopUpBridgeStake {
  return {
    operator: "",
    peerId: "",
    amount: Coin.fromPartial({})
  };
}
/**
 * @name MsgTopUpBridgeStake
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgTopUpBridgeStake
 */
export const MsgTopUpBridgeStake = {
  typeUrl: "/sparkdream.federation.v1.MsgTopUpBridgeStake",
  aminoType: "sparkdream/x/federation/MsgTopUpBridgeStake",
  encode(message: MsgTopUpBridgeStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpBridgeStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpBridgeStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTopUpBridgeStake>): MsgTopUpBridgeStake {
    const message = createBaseMsgTopUpBridgeStake();
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgTopUpBridgeStakeAmino): MsgTopUpBridgeStake {
    const message = createBaseMsgTopUpBridgeStake();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgTopUpBridgeStake): MsgTopUpBridgeStakeAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTopUpBridgeStakeAminoMsg): MsgTopUpBridgeStake {
    return MsgTopUpBridgeStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTopUpBridgeStake): MsgTopUpBridgeStakeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgTopUpBridgeStake",
      value: MsgTopUpBridgeStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTopUpBridgeStakeProtoMsg): MsgTopUpBridgeStake {
    return MsgTopUpBridgeStake.decode(message.value);
  },
  toProto(message: MsgTopUpBridgeStake): Uint8Array {
    return MsgTopUpBridgeStake.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpBridgeStake): MsgTopUpBridgeStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgTopUpBridgeStake",
      value: MsgTopUpBridgeStake.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpBridgeStakeResponse(): MsgTopUpBridgeStakeResponse {
  return {};
}
/**
 * @name MsgTopUpBridgeStakeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgTopUpBridgeStakeResponse
 */
export const MsgTopUpBridgeStakeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgTopUpBridgeStakeResponse",
  encode(_: MsgTopUpBridgeStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpBridgeStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpBridgeStakeResponse();
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
  fromPartial(_: DeepPartial<MsgTopUpBridgeStakeResponse>): MsgTopUpBridgeStakeResponse {
    const message = createBaseMsgTopUpBridgeStakeResponse();
    return message;
  },
  fromAmino(_: MsgTopUpBridgeStakeResponseAmino): MsgTopUpBridgeStakeResponse {
    const message = createBaseMsgTopUpBridgeStakeResponse();
    return message;
  },
  toAmino(_: MsgTopUpBridgeStakeResponse): MsgTopUpBridgeStakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTopUpBridgeStakeResponseAminoMsg): MsgTopUpBridgeStakeResponse {
    return MsgTopUpBridgeStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpBridgeStakeResponseProtoMsg): MsgTopUpBridgeStakeResponse {
    return MsgTopUpBridgeStakeResponse.decode(message.value);
  },
  toProto(message: MsgTopUpBridgeStakeResponse): Uint8Array {
    return MsgTopUpBridgeStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpBridgeStakeResponse): MsgTopUpBridgeStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgTopUpBridgeStakeResponse",
      value: MsgTopUpBridgeStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitFederatedContent(): MsgSubmitFederatedContent {
  return {
    operator: "",
    peerId: "",
    remoteContentId: "",
    contentType: "",
    creatorIdentity: "",
    creatorName: "",
    title: "",
    body: "",
    contentUri: "",
    protocolMetadata: new Uint8Array(),
    remoteCreatedAt: BigInt(0),
    contentHash: new Uint8Array()
  };
}
/**
 * @name MsgSubmitFederatedContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitFederatedContent
 */
export const MsgSubmitFederatedContent = {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContent",
  aminoType: "sparkdream/x/federation/MsgSubmitFederatedContent",
  encode(message: MsgSubmitFederatedContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.remoteContentId !== "") {
      writer.uint32(26).string(message.remoteContentId);
    }
    if (message.contentType !== "") {
      writer.uint32(34).string(message.contentType);
    }
    if (message.creatorIdentity !== "") {
      writer.uint32(42).string(message.creatorIdentity);
    }
    if (message.creatorName !== "") {
      writer.uint32(50).string(message.creatorName);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(66).string(message.body);
    }
    if (message.contentUri !== "") {
      writer.uint32(74).string(message.contentUri);
    }
    if (message.protocolMetadata.length !== 0) {
      writer.uint32(82).bytes(message.protocolMetadata);
    }
    if (message.remoteCreatedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.remoteCreatedAt);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(98).bytes(message.contentHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitFederatedContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitFederatedContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.remoteContentId = reader.string();
          break;
        case 4:
          message.contentType = reader.string();
          break;
        case 5:
          message.creatorIdentity = reader.string();
          break;
        case 6:
          message.creatorName = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.body = reader.string();
          break;
        case 9:
          message.contentUri = reader.string();
          break;
        case 10:
          message.protocolMetadata = reader.bytes();
          break;
        case 11:
          message.remoteCreatedAt = reader.int64();
          break;
        case 12:
          message.contentHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitFederatedContent>): MsgSubmitFederatedContent {
    const message = createBaseMsgSubmitFederatedContent();
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.remoteContentId = object.remoteContentId ?? "";
    message.contentType = object.contentType ?? "";
    message.creatorIdentity = object.creatorIdentity ?? "";
    message.creatorName = object.creatorName ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.contentUri = object.contentUri ?? "";
    message.protocolMetadata = object.protocolMetadata ?? new Uint8Array();
    message.remoteCreatedAt = object.remoteCreatedAt !== undefined && object.remoteCreatedAt !== null ? BigInt(object.remoteCreatedAt.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSubmitFederatedContentAmino): MsgSubmitFederatedContent {
    const message = createBaseMsgSubmitFederatedContent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_content_id !== undefined && object.remote_content_id !== null) {
      message.remoteContentId = object.remote_content_id;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.creator_identity !== undefined && object.creator_identity !== null) {
      message.creatorIdentity = object.creator_identity;
    }
    if (object.creator_name !== undefined && object.creator_name !== null) {
      message.creatorName = object.creator_name;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_uri !== undefined && object.content_uri !== null) {
      message.contentUri = object.content_uri;
    }
    if (object.protocol_metadata !== undefined && object.protocol_metadata !== null) {
      message.protocolMetadata = bytesFromBase64(object.protocol_metadata);
    }
    if (object.remote_created_at !== undefined && object.remote_created_at !== null) {
      message.remoteCreatedAt = BigInt(object.remote_created_at);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    return message;
  },
  toAmino(message: MsgSubmitFederatedContent): MsgSubmitFederatedContentAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_content_id = message.remoteContentId === "" ? undefined : message.remoteContentId;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.creator_identity = message.creatorIdentity === "" ? undefined : message.creatorIdentity;
    obj.creator_name = message.creatorName === "" ? undefined : message.creatorName;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_uri = message.contentUri === "" ? undefined : message.contentUri;
    obj.protocol_metadata = message.protocolMetadata ? base64FromBytes(message.protocolMetadata) : undefined;
    obj.remote_created_at = message.remoteCreatedAt !== BigInt(0) ? message.remoteCreatedAt?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitFederatedContentAminoMsg): MsgSubmitFederatedContent {
    return MsgSubmitFederatedContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitFederatedContent): MsgSubmitFederatedContentAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgSubmitFederatedContent",
      value: MsgSubmitFederatedContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitFederatedContentProtoMsg): MsgSubmitFederatedContent {
    return MsgSubmitFederatedContent.decode(message.value);
  },
  toProto(message: MsgSubmitFederatedContent): Uint8Array {
    return MsgSubmitFederatedContent.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitFederatedContent): MsgSubmitFederatedContentProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContent",
      value: MsgSubmitFederatedContent.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitFederatedContentResponse(): MsgSubmitFederatedContentResponse {
  return {
    contentId: BigInt(0)
  };
}
/**
 * @name MsgSubmitFederatedContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitFederatedContentResponse
 */
export const MsgSubmitFederatedContentResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContentResponse",
  encode(message: MsgSubmitFederatedContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitFederatedContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitFederatedContentResponse();
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
  fromPartial(object: DeepPartial<MsgSubmitFederatedContentResponse>): MsgSubmitFederatedContentResponse {
    const message = createBaseMsgSubmitFederatedContentResponse();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitFederatedContentResponseAmino): MsgSubmitFederatedContentResponse {
    const message = createBaseMsgSubmitFederatedContentResponse();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitFederatedContentResponse): MsgSubmitFederatedContentResponseAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitFederatedContentResponseAminoMsg): MsgSubmitFederatedContentResponse {
    return MsgSubmitFederatedContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitFederatedContentResponseProtoMsg): MsgSubmitFederatedContentResponse {
    return MsgSubmitFederatedContentResponse.decode(message.value);
  },
  toProto(message: MsgSubmitFederatedContentResponse): Uint8Array {
    return MsgSubmitFederatedContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitFederatedContentResponse): MsgSubmitFederatedContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContentResponse",
      value: MsgSubmitFederatedContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFederateContent(): MsgFederateContent {
  return {
    creator: "",
    peerId: "",
    contentType: "",
    localContentId: "",
    title: "",
    body: "",
    contentUri: "",
    contentHash: new Uint8Array()
  };
}
/**
 * @name MsgFederateContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgFederateContent
 */
export const MsgFederateContent = {
  typeUrl: "/sparkdream.federation.v1.MsgFederateContent",
  aminoType: "sparkdream/x/federation/MsgFederateContent",
  encode(message: MsgFederateContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    if (message.localContentId !== "") {
      writer.uint32(34).string(message.localContentId);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    if (message.contentUri !== "") {
      writer.uint32(58).string(message.contentUri);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(66).bytes(message.contentHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFederateContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFederateContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.contentType = reader.string();
          break;
        case 4:
          message.localContentId = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.body = reader.string();
          break;
        case 7:
          message.contentUri = reader.string();
          break;
        case 8:
          message.contentHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFederateContent>): MsgFederateContent {
    const message = createBaseMsgFederateContent();
    message.creator = object.creator ?? "";
    message.peerId = object.peerId ?? "";
    message.contentType = object.contentType ?? "";
    message.localContentId = object.localContentId ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.contentUri = object.contentUri ?? "";
    message.contentHash = object.contentHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgFederateContentAmino): MsgFederateContent {
    const message = createBaseMsgFederateContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.local_content_id !== undefined && object.local_content_id !== null) {
      message.localContentId = object.local_content_id;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_uri !== undefined && object.content_uri !== null) {
      message.contentUri = object.content_uri;
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    return message;
  },
  toAmino(message: MsgFederateContent): MsgFederateContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.local_content_id = message.localContentId === "" ? undefined : message.localContentId;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_uri = message.contentUri === "" ? undefined : message.contentUri;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFederateContentAminoMsg): MsgFederateContent {
    return MsgFederateContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFederateContent): MsgFederateContentAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgFederateContent",
      value: MsgFederateContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFederateContentProtoMsg): MsgFederateContent {
    return MsgFederateContent.decode(message.value);
  },
  toProto(message: MsgFederateContent): Uint8Array {
    return MsgFederateContent.encode(message).finish();
  },
  toProtoMsg(message: MsgFederateContent): MsgFederateContentProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgFederateContent",
      value: MsgFederateContent.encode(message).finish()
    };
  }
};
function createBaseMsgFederateContentResponse(): MsgFederateContentResponse {
  return {};
}
/**
 * @name MsgFederateContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgFederateContentResponse
 */
export const MsgFederateContentResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgFederateContentResponse",
  encode(_: MsgFederateContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFederateContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFederateContentResponse();
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
  fromPartial(_: DeepPartial<MsgFederateContentResponse>): MsgFederateContentResponse {
    const message = createBaseMsgFederateContentResponse();
    return message;
  },
  fromAmino(_: MsgFederateContentResponseAmino): MsgFederateContentResponse {
    const message = createBaseMsgFederateContentResponse();
    return message;
  },
  toAmino(_: MsgFederateContentResponse): MsgFederateContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFederateContentResponseAminoMsg): MsgFederateContentResponse {
    return MsgFederateContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFederateContentResponseProtoMsg): MsgFederateContentResponse {
    return MsgFederateContentResponse.decode(message.value);
  },
  toProto(message: MsgFederateContentResponse): Uint8Array {
    return MsgFederateContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFederateContentResponse): MsgFederateContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgFederateContentResponse",
      value: MsgFederateContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAttestOutbound(): MsgAttestOutbound {
  return {
    operator: "",
    peerId: "",
    contentType: "",
    localContentId: ""
  };
}
/**
 * @name MsgAttestOutbound
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgAttestOutbound
 */
export const MsgAttestOutbound = {
  typeUrl: "/sparkdream.federation.v1.MsgAttestOutbound",
  aminoType: "sparkdream/x/federation/MsgAttestOutbound",
  encode(message: MsgAttestOutbound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    if (message.localContentId !== "") {
      writer.uint32(34).string(message.localContentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAttestOutbound {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttestOutbound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.contentType = reader.string();
          break;
        case 4:
          message.localContentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAttestOutbound>): MsgAttestOutbound {
    const message = createBaseMsgAttestOutbound();
    message.operator = object.operator ?? "";
    message.peerId = object.peerId ?? "";
    message.contentType = object.contentType ?? "";
    message.localContentId = object.localContentId ?? "";
    return message;
  },
  fromAmino(object: MsgAttestOutboundAmino): MsgAttestOutbound {
    const message = createBaseMsgAttestOutbound();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.local_content_id !== undefined && object.local_content_id !== null) {
      message.localContentId = object.local_content_id;
    }
    return message;
  },
  toAmino(message: MsgAttestOutbound): MsgAttestOutboundAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.local_content_id = message.localContentId === "" ? undefined : message.localContentId;
    return obj;
  },
  fromAminoMsg(object: MsgAttestOutboundAminoMsg): MsgAttestOutbound {
    return MsgAttestOutbound.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAttestOutbound): MsgAttestOutboundAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgAttestOutbound",
      value: MsgAttestOutbound.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAttestOutboundProtoMsg): MsgAttestOutbound {
    return MsgAttestOutbound.decode(message.value);
  },
  toProto(message: MsgAttestOutbound): Uint8Array {
    return MsgAttestOutbound.encode(message).finish();
  },
  toProtoMsg(message: MsgAttestOutbound): MsgAttestOutboundProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgAttestOutbound",
      value: MsgAttestOutbound.encode(message).finish()
    };
  }
};
function createBaseMsgAttestOutboundResponse(): MsgAttestOutboundResponse {
  return {};
}
/**
 * @name MsgAttestOutboundResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgAttestOutboundResponse
 */
export const MsgAttestOutboundResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgAttestOutboundResponse",
  encode(_: MsgAttestOutboundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAttestOutboundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttestOutboundResponse();
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
  fromPartial(_: DeepPartial<MsgAttestOutboundResponse>): MsgAttestOutboundResponse {
    const message = createBaseMsgAttestOutboundResponse();
    return message;
  },
  fromAmino(_: MsgAttestOutboundResponseAmino): MsgAttestOutboundResponse {
    const message = createBaseMsgAttestOutboundResponse();
    return message;
  },
  toAmino(_: MsgAttestOutboundResponse): MsgAttestOutboundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAttestOutboundResponseAminoMsg): MsgAttestOutboundResponse {
    return MsgAttestOutboundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAttestOutboundResponseProtoMsg): MsgAttestOutboundResponse {
    return MsgAttestOutboundResponse.decode(message.value);
  },
  toProto(message: MsgAttestOutboundResponse): Uint8Array {
    return MsgAttestOutboundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAttestOutboundResponse): MsgAttestOutboundResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgAttestOutboundResponse",
      value: MsgAttestOutboundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgModerateContent(): MsgModerateContent {
  return {
    authority: "",
    contentId: BigInt(0),
    newStatus: 0,
    reason: ""
  };
}
/**
 * @name MsgModerateContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgModerateContent
 */
export const MsgModerateContent = {
  typeUrl: "/sparkdream.federation.v1.MsgModerateContent",
  aminoType: "sparkdream/x/federation/MsgModerateContent",
  encode(message: MsgModerateContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentId);
    }
    if (message.newStatus !== 0) {
      writer.uint32(24).int32(message.newStatus);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgModerateContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModerateContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contentId = reader.uint64();
          break;
        case 3:
          message.newStatus = reader.int32() as any;
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgModerateContent>): MsgModerateContent {
    const message = createBaseMsgModerateContent();
    message.authority = object.authority ?? "";
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.newStatus = object.newStatus ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgModerateContentAmino): MsgModerateContent {
    const message = createBaseMsgModerateContent();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.new_status !== undefined && object.new_status !== null) {
      message.newStatus = object.new_status;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgModerateContent): MsgModerateContentAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.new_status = message.newStatus === 0 ? undefined : message.newStatus;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgModerateContentAminoMsg): MsgModerateContent {
    return MsgModerateContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModerateContent): MsgModerateContentAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgModerateContent",
      value: MsgModerateContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgModerateContentProtoMsg): MsgModerateContent {
    return MsgModerateContent.decode(message.value);
  },
  toProto(message: MsgModerateContent): Uint8Array {
    return MsgModerateContent.encode(message).finish();
  },
  toProtoMsg(message: MsgModerateContent): MsgModerateContentProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgModerateContent",
      value: MsgModerateContent.encode(message).finish()
    };
  }
};
function createBaseMsgModerateContentResponse(): MsgModerateContentResponse {
  return {};
}
/**
 * @name MsgModerateContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgModerateContentResponse
 */
export const MsgModerateContentResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgModerateContentResponse",
  encode(_: MsgModerateContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgModerateContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModerateContentResponse();
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
  fromPartial(_: DeepPartial<MsgModerateContentResponse>): MsgModerateContentResponse {
    const message = createBaseMsgModerateContentResponse();
    return message;
  },
  fromAmino(_: MsgModerateContentResponseAmino): MsgModerateContentResponse {
    const message = createBaseMsgModerateContentResponse();
    return message;
  },
  toAmino(_: MsgModerateContentResponse): MsgModerateContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgModerateContentResponseAminoMsg): MsgModerateContentResponse {
    return MsgModerateContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgModerateContentResponseProtoMsg): MsgModerateContentResponse {
    return MsgModerateContentResponse.decode(message.value);
  },
  toProto(message: MsgModerateContentResponse): Uint8Array {
    return MsgModerateContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgModerateContentResponse): MsgModerateContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgModerateContentResponse",
      value: MsgModerateContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLinkIdentity(): MsgLinkIdentity {
  return {
    creator: "",
    peerId: "",
    remoteIdentity: ""
  };
}
/**
 * @name MsgLinkIdentity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgLinkIdentity
 */
export const MsgLinkIdentity = {
  typeUrl: "/sparkdream.federation.v1.MsgLinkIdentity",
  aminoType: "sparkdream/x/federation/MsgLinkIdentity",
  encode(message: MsgLinkIdentity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.remoteIdentity !== "") {
      writer.uint32(26).string(message.remoteIdentity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkIdentity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.remoteIdentity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLinkIdentity>): MsgLinkIdentity {
    const message = createBaseMsgLinkIdentity();
    message.creator = object.creator ?? "";
    message.peerId = object.peerId ?? "";
    message.remoteIdentity = object.remoteIdentity ?? "";
    return message;
  },
  fromAmino(object: MsgLinkIdentityAmino): MsgLinkIdentity {
    const message = createBaseMsgLinkIdentity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_identity !== undefined && object.remote_identity !== null) {
      message.remoteIdentity = object.remote_identity;
    }
    return message;
  },
  toAmino(message: MsgLinkIdentity): MsgLinkIdentityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_identity = message.remoteIdentity === "" ? undefined : message.remoteIdentity;
    return obj;
  },
  fromAminoMsg(object: MsgLinkIdentityAminoMsg): MsgLinkIdentity {
    return MsgLinkIdentity.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLinkIdentity): MsgLinkIdentityAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgLinkIdentity",
      value: MsgLinkIdentity.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLinkIdentityProtoMsg): MsgLinkIdentity {
    return MsgLinkIdentity.decode(message.value);
  },
  toProto(message: MsgLinkIdentity): Uint8Array {
    return MsgLinkIdentity.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkIdentity): MsgLinkIdentityProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgLinkIdentity",
      value: MsgLinkIdentity.encode(message).finish()
    };
  }
};
function createBaseMsgLinkIdentityResponse(): MsgLinkIdentityResponse {
  return {};
}
/**
 * @name MsgLinkIdentityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgLinkIdentityResponse
 */
export const MsgLinkIdentityResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgLinkIdentityResponse",
  encode(_: MsgLinkIdentityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkIdentityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkIdentityResponse();
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
  fromPartial(_: DeepPartial<MsgLinkIdentityResponse>): MsgLinkIdentityResponse {
    const message = createBaseMsgLinkIdentityResponse();
    return message;
  },
  fromAmino(_: MsgLinkIdentityResponseAmino): MsgLinkIdentityResponse {
    const message = createBaseMsgLinkIdentityResponse();
    return message;
  },
  toAmino(_: MsgLinkIdentityResponse): MsgLinkIdentityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLinkIdentityResponseAminoMsg): MsgLinkIdentityResponse {
    return MsgLinkIdentityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkIdentityResponseProtoMsg): MsgLinkIdentityResponse {
    return MsgLinkIdentityResponse.decode(message.value);
  },
  toProto(message: MsgLinkIdentityResponse): Uint8Array {
    return MsgLinkIdentityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkIdentityResponse): MsgLinkIdentityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgLinkIdentityResponse",
      value: MsgLinkIdentityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnlinkIdentity(): MsgUnlinkIdentity {
  return {
    creator: "",
    peerId: ""
  };
}
/**
 * @name MsgUnlinkIdentity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnlinkIdentity
 */
export const MsgUnlinkIdentity = {
  typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentity",
  aminoType: "sparkdream/x/federation/MsgUnlinkIdentity",
  encode(message: MsgUnlinkIdentity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlinkIdentity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
  fromPartial(object: DeepPartial<MsgUnlinkIdentity>): MsgUnlinkIdentity {
    const message = createBaseMsgUnlinkIdentity();
    message.creator = object.creator ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: MsgUnlinkIdentityAmino): MsgUnlinkIdentity {
    const message = createBaseMsgUnlinkIdentity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    return message;
  },
  toAmino(message: MsgUnlinkIdentity): MsgUnlinkIdentityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkIdentityAminoMsg): MsgUnlinkIdentity {
    return MsgUnlinkIdentity.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnlinkIdentity): MsgUnlinkIdentityAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgUnlinkIdentity",
      value: MsgUnlinkIdentity.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnlinkIdentityProtoMsg): MsgUnlinkIdentity {
    return MsgUnlinkIdentity.decode(message.value);
  },
  toProto(message: MsgUnlinkIdentity): Uint8Array {
    return MsgUnlinkIdentity.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkIdentity): MsgUnlinkIdentityProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentity",
      value: MsgUnlinkIdentity.encode(message).finish()
    };
  }
};
function createBaseMsgUnlinkIdentityResponse(): MsgUnlinkIdentityResponse {
  return {};
}
/**
 * @name MsgUnlinkIdentityResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUnlinkIdentityResponse
 */
export const MsgUnlinkIdentityResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentityResponse",
  encode(_: MsgUnlinkIdentityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlinkIdentityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkIdentityResponse();
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
  fromPartial(_: DeepPartial<MsgUnlinkIdentityResponse>): MsgUnlinkIdentityResponse {
    const message = createBaseMsgUnlinkIdentityResponse();
    return message;
  },
  fromAmino(_: MsgUnlinkIdentityResponseAmino): MsgUnlinkIdentityResponse {
    const message = createBaseMsgUnlinkIdentityResponse();
    return message;
  },
  toAmino(_: MsgUnlinkIdentityResponse): MsgUnlinkIdentityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkIdentityResponseAminoMsg): MsgUnlinkIdentityResponse {
    return MsgUnlinkIdentityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkIdentityResponseProtoMsg): MsgUnlinkIdentityResponse {
    return MsgUnlinkIdentityResponse.decode(message.value);
  },
  toProto(message: MsgUnlinkIdentityResponse): Uint8Array {
    return MsgUnlinkIdentityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkIdentityResponse): MsgUnlinkIdentityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentityResponse",
      value: MsgUnlinkIdentityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmIdentityLink(): MsgConfirmIdentityLink {
  return {
    creator: "",
    claimantChainPeerId: ""
  };
}
/**
 * @name MsgConfirmIdentityLink
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgConfirmIdentityLink
 */
export const MsgConfirmIdentityLink = {
  typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLink",
  aminoType: "sparkdream/x/federation/MsgConfirmIdentityLink",
  encode(message: MsgConfirmIdentityLink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.claimantChainPeerId !== "") {
      writer.uint32(18).string(message.claimantChainPeerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmIdentityLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmIdentityLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.claimantChainPeerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConfirmIdentityLink>): MsgConfirmIdentityLink {
    const message = createBaseMsgConfirmIdentityLink();
    message.creator = object.creator ?? "";
    message.claimantChainPeerId = object.claimantChainPeerId ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmIdentityLinkAmino): MsgConfirmIdentityLink {
    const message = createBaseMsgConfirmIdentityLink();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.claimant_chain_peer_id !== undefined && object.claimant_chain_peer_id !== null) {
      message.claimantChainPeerId = object.claimant_chain_peer_id;
    }
    return message;
  },
  toAmino(message: MsgConfirmIdentityLink): MsgConfirmIdentityLinkAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.claimant_chain_peer_id = message.claimantChainPeerId === "" ? undefined : message.claimantChainPeerId;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmIdentityLinkAminoMsg): MsgConfirmIdentityLink {
    return MsgConfirmIdentityLink.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConfirmIdentityLink): MsgConfirmIdentityLinkAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgConfirmIdentityLink",
      value: MsgConfirmIdentityLink.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConfirmIdentityLinkProtoMsg): MsgConfirmIdentityLink {
    return MsgConfirmIdentityLink.decode(message.value);
  },
  toProto(message: MsgConfirmIdentityLink): Uint8Array {
    return MsgConfirmIdentityLink.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmIdentityLink): MsgConfirmIdentityLinkProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLink",
      value: MsgConfirmIdentityLink.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmIdentityLinkResponse(): MsgConfirmIdentityLinkResponse {
  return {};
}
/**
 * @name MsgConfirmIdentityLinkResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgConfirmIdentityLinkResponse
 */
export const MsgConfirmIdentityLinkResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLinkResponse",
  encode(_: MsgConfirmIdentityLinkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmIdentityLinkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmIdentityLinkResponse();
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
  fromPartial(_: DeepPartial<MsgConfirmIdentityLinkResponse>): MsgConfirmIdentityLinkResponse {
    const message = createBaseMsgConfirmIdentityLinkResponse();
    return message;
  },
  fromAmino(_: MsgConfirmIdentityLinkResponseAmino): MsgConfirmIdentityLinkResponse {
    const message = createBaseMsgConfirmIdentityLinkResponse();
    return message;
  },
  toAmino(_: MsgConfirmIdentityLinkResponse): MsgConfirmIdentityLinkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmIdentityLinkResponseAminoMsg): MsgConfirmIdentityLinkResponse {
    return MsgConfirmIdentityLinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmIdentityLinkResponseProtoMsg): MsgConfirmIdentityLinkResponse {
    return MsgConfirmIdentityLinkResponse.decode(message.value);
  },
  toProto(message: MsgConfirmIdentityLinkResponse): Uint8Array {
    return MsgConfirmIdentityLinkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmIdentityLinkResponse): MsgConfirmIdentityLinkResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLinkResponse",
      value: MsgConfirmIdentityLinkResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestReputationAttestation(): MsgRequestReputationAttestation {
  return {
    creator: "",
    peerId: "",
    remoteAddress: ""
  };
}
/**
 * @name MsgRequestReputationAttestation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRequestReputationAttestation
 */
export const MsgRequestReputationAttestation = {
  typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestation",
  aminoType: "sparkdream/x/federation/MsgRequestReputationAttestation",
  encode(message: MsgRequestReputationAttestation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.remoteAddress !== "") {
      writer.uint32(26).string(message.remoteAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestReputationAttestation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestReputationAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.remoteAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestReputationAttestation>): MsgRequestReputationAttestation {
    const message = createBaseMsgRequestReputationAttestation();
    message.creator = object.creator ?? "";
    message.peerId = object.peerId ?? "";
    message.remoteAddress = object.remoteAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRequestReputationAttestationAmino): MsgRequestReputationAttestation {
    const message = createBaseMsgRequestReputationAttestation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_address !== undefined && object.remote_address !== null) {
      message.remoteAddress = object.remote_address;
    }
    return message;
  },
  toAmino(message: MsgRequestReputationAttestation): MsgRequestReputationAttestationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_address = message.remoteAddress === "" ? undefined : message.remoteAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRequestReputationAttestationAminoMsg): MsgRequestReputationAttestation {
    return MsgRequestReputationAttestation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRequestReputationAttestation): MsgRequestReputationAttestationAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgRequestReputationAttestation",
      value: MsgRequestReputationAttestation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRequestReputationAttestationProtoMsg): MsgRequestReputationAttestation {
    return MsgRequestReputationAttestation.decode(message.value);
  },
  toProto(message: MsgRequestReputationAttestation): Uint8Array {
    return MsgRequestReputationAttestation.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestReputationAttestation): MsgRequestReputationAttestationProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestation",
      value: MsgRequestReputationAttestation.encode(message).finish()
    };
  }
};
function createBaseMsgRequestReputationAttestationResponse(): MsgRequestReputationAttestationResponse {
  return {};
}
/**
 * @name MsgRequestReputationAttestationResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgRequestReputationAttestationResponse
 */
export const MsgRequestReputationAttestationResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestationResponse",
  encode(_: MsgRequestReputationAttestationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestReputationAttestationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestReputationAttestationResponse();
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
  fromPartial(_: DeepPartial<MsgRequestReputationAttestationResponse>): MsgRequestReputationAttestationResponse {
    const message = createBaseMsgRequestReputationAttestationResponse();
    return message;
  },
  fromAmino(_: MsgRequestReputationAttestationResponseAmino): MsgRequestReputationAttestationResponse {
    const message = createBaseMsgRequestReputationAttestationResponse();
    return message;
  },
  toAmino(_: MsgRequestReputationAttestationResponse): MsgRequestReputationAttestationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestReputationAttestationResponseAminoMsg): MsgRequestReputationAttestationResponse {
    return MsgRequestReputationAttestationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestReputationAttestationResponseProtoMsg): MsgRequestReputationAttestationResponse {
    return MsgRequestReputationAttestationResponse.decode(message.value);
  },
  toProto(message: MsgRequestReputationAttestationResponse): Uint8Array {
    return MsgRequestReputationAttestationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestReputationAttestationResponse): MsgRequestReputationAttestationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestationResponse",
      value: MsgRequestReputationAttestationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVerifyContent(): MsgVerifyContent {
  return {
    creator: "",
    contentId: BigInt(0),
    contentHash: new Uint8Array()
  };
}
/**
 * @name MsgVerifyContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgVerifyContent
 */
export const MsgVerifyContent = {
  typeUrl: "/sparkdream.federation.v1.MsgVerifyContent",
  aminoType: "sparkdream/x/federation/MsgVerifyContent",
  encode(message: MsgVerifyContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(26).bytes(message.contentHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contentId = reader.uint64();
          break;
        case 3:
          message.contentHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVerifyContent>): MsgVerifyContent {
    const message = createBaseMsgVerifyContent();
    message.creator = object.creator ?? "";
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgVerifyContentAmino): MsgVerifyContent {
    const message = createBaseMsgVerifyContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    return message;
  },
  toAmino(message: MsgVerifyContent): MsgVerifyContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgVerifyContentAminoMsg): MsgVerifyContent {
    return MsgVerifyContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVerifyContent): MsgVerifyContentAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgVerifyContent",
      value: MsgVerifyContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVerifyContentProtoMsg): MsgVerifyContent {
    return MsgVerifyContent.decode(message.value);
  },
  toProto(message: MsgVerifyContent): Uint8Array {
    return MsgVerifyContent.encode(message).finish();
  },
  toProtoMsg(message: MsgVerifyContent): MsgVerifyContentProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgVerifyContent",
      value: MsgVerifyContent.encode(message).finish()
    };
  }
};
function createBaseMsgVerifyContentResponse(): MsgVerifyContentResponse {
  return {};
}
/**
 * @name MsgVerifyContentResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgVerifyContentResponse
 */
export const MsgVerifyContentResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgVerifyContentResponse",
  encode(_: MsgVerifyContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyContentResponse();
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
  fromPartial(_: DeepPartial<MsgVerifyContentResponse>): MsgVerifyContentResponse {
    const message = createBaseMsgVerifyContentResponse();
    return message;
  },
  fromAmino(_: MsgVerifyContentResponseAmino): MsgVerifyContentResponse {
    const message = createBaseMsgVerifyContentResponse();
    return message;
  },
  toAmino(_: MsgVerifyContentResponse): MsgVerifyContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVerifyContentResponseAminoMsg): MsgVerifyContentResponse {
    return MsgVerifyContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVerifyContentResponseProtoMsg): MsgVerifyContentResponse {
    return MsgVerifyContentResponse.decode(message.value);
  },
  toProto(message: MsgVerifyContentResponse): Uint8Array {
    return MsgVerifyContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVerifyContentResponse): MsgVerifyContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgVerifyContentResponse",
      value: MsgVerifyContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChallengeVerification(): MsgChallengeVerification {
  return {
    creator: "",
    contentId: BigInt(0),
    contentHash: new Uint8Array(),
    evidence: ""
  };
}
/**
 * @name MsgChallengeVerification
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgChallengeVerification
 */
export const MsgChallengeVerification = {
  typeUrl: "/sparkdream.federation.v1.MsgChallengeVerification",
  aminoType: "sparkdream/x/federation/MsgChallengeVerification",
  encode(message: MsgChallengeVerification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(26).bytes(message.contentHash);
    }
    if (message.evidence !== "") {
      writer.uint32(34).string(message.evidence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeVerification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contentId = reader.uint64();
          break;
        case 3:
          message.contentHash = reader.bytes();
          break;
        case 4:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgChallengeVerification>): MsgChallengeVerification {
    const message = createBaseMsgChallengeVerification();
    message.creator = object.creator ?? "";
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.evidence = object.evidence ?? "";
    return message;
  },
  fromAmino(object: MsgChallengeVerificationAmino): MsgChallengeVerification {
    const message = createBaseMsgChallengeVerification();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    }
    return message;
  },
  toAmino(message: MsgChallengeVerification): MsgChallengeVerificationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    obj.evidence = message.evidence === "" ? undefined : message.evidence;
    return obj;
  },
  fromAminoMsg(object: MsgChallengeVerificationAminoMsg): MsgChallengeVerification {
    return MsgChallengeVerification.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChallengeVerification): MsgChallengeVerificationAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgChallengeVerification",
      value: MsgChallengeVerification.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChallengeVerificationProtoMsg): MsgChallengeVerification {
    return MsgChallengeVerification.decode(message.value);
  },
  toProto(message: MsgChallengeVerification): Uint8Array {
    return MsgChallengeVerification.encode(message).finish();
  },
  toProtoMsg(message: MsgChallengeVerification): MsgChallengeVerificationProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgChallengeVerification",
      value: MsgChallengeVerification.encode(message).finish()
    };
  }
};
function createBaseMsgChallengeVerificationResponse(): MsgChallengeVerificationResponse {
  return {};
}
/**
 * @name MsgChallengeVerificationResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgChallengeVerificationResponse
 */
export const MsgChallengeVerificationResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgChallengeVerificationResponse",
  encode(_: MsgChallengeVerificationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeVerificationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeVerificationResponse();
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
  fromPartial(_: DeepPartial<MsgChallengeVerificationResponse>): MsgChallengeVerificationResponse {
    const message = createBaseMsgChallengeVerificationResponse();
    return message;
  },
  fromAmino(_: MsgChallengeVerificationResponseAmino): MsgChallengeVerificationResponse {
    const message = createBaseMsgChallengeVerificationResponse();
    return message;
  },
  toAmino(_: MsgChallengeVerificationResponse): MsgChallengeVerificationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChallengeVerificationResponseAminoMsg): MsgChallengeVerificationResponse {
    return MsgChallengeVerificationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChallengeVerificationResponseProtoMsg): MsgChallengeVerificationResponse {
    return MsgChallengeVerificationResponse.decode(message.value);
  },
  toProto(message: MsgChallengeVerificationResponse): Uint8Array {
    return MsgChallengeVerificationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChallengeVerificationResponse): MsgChallengeVerificationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgChallengeVerificationResponse",
      value: MsgChallengeVerificationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitArbiterHash(): MsgSubmitArbiterHash {
  return {
    creator: "",
    contentId: BigInt(0),
    contentHash: new Uint8Array()
  };
}
/**
 * @name MsgSubmitArbiterHash
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitArbiterHash
 */
export const MsgSubmitArbiterHash = {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHash",
  aminoType: "sparkdream/x/federation/MsgSubmitArbiterHash",
  encode(message: MsgSubmitArbiterHash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(26).bytes(message.contentHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitArbiterHash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitArbiterHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contentId = reader.uint64();
          break;
        case 3:
          message.contentHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitArbiterHash>): MsgSubmitArbiterHash {
    const message = createBaseMsgSubmitArbiterHash();
    message.creator = object.creator ?? "";
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSubmitArbiterHashAmino): MsgSubmitArbiterHash {
    const message = createBaseMsgSubmitArbiterHash();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    return message;
  },
  toAmino(message: MsgSubmitArbiterHash): MsgSubmitArbiterHashAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitArbiterHashAminoMsg): MsgSubmitArbiterHash {
    return MsgSubmitArbiterHash.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitArbiterHash): MsgSubmitArbiterHashAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgSubmitArbiterHash",
      value: MsgSubmitArbiterHash.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitArbiterHashProtoMsg): MsgSubmitArbiterHash {
    return MsgSubmitArbiterHash.decode(message.value);
  },
  toProto(message: MsgSubmitArbiterHash): Uint8Array {
    return MsgSubmitArbiterHash.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitArbiterHash): MsgSubmitArbiterHashProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHash",
      value: MsgSubmitArbiterHash.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitArbiterHashResponse(): MsgSubmitArbiterHashResponse {
  return {};
}
/**
 * @name MsgSubmitArbiterHashResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgSubmitArbiterHashResponse
 */
export const MsgSubmitArbiterHashResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHashResponse",
  encode(_: MsgSubmitArbiterHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitArbiterHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitArbiterHashResponse();
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
  fromPartial(_: DeepPartial<MsgSubmitArbiterHashResponse>): MsgSubmitArbiterHashResponse {
    const message = createBaseMsgSubmitArbiterHashResponse();
    return message;
  },
  fromAmino(_: MsgSubmitArbiterHashResponseAmino): MsgSubmitArbiterHashResponse {
    const message = createBaseMsgSubmitArbiterHashResponse();
    return message;
  },
  toAmino(_: MsgSubmitArbiterHashResponse): MsgSubmitArbiterHashResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitArbiterHashResponseAminoMsg): MsgSubmitArbiterHashResponse {
    return MsgSubmitArbiterHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitArbiterHashResponseProtoMsg): MsgSubmitArbiterHashResponse {
    return MsgSubmitArbiterHashResponse.decode(message.value);
  },
  toProto(message: MsgSubmitArbiterHashResponse): Uint8Array {
    return MsgSubmitArbiterHashResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitArbiterHashResponse): MsgSubmitArbiterHashResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHashResponse",
      value: MsgSubmitArbiterHashResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEscalateChallenge(): MsgEscalateChallenge {
  return {
    creator: "",
    contentId: BigInt(0)
  };
}
/**
 * @name MsgEscalateChallenge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgEscalateChallenge
 */
export const MsgEscalateChallenge = {
  typeUrl: "/sparkdream.federation.v1.MsgEscalateChallenge",
  aminoType: "sparkdream/x/federation/MsgEscalateChallenge",
  encode(message: MsgEscalateChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEscalateChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEscalateChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEscalateChallenge>): MsgEscalateChallenge {
    const message = createBaseMsgEscalateChallenge();
    message.creator = object.creator ?? "";
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEscalateChallengeAmino): MsgEscalateChallenge {
    const message = createBaseMsgEscalateChallenge();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    return message;
  },
  toAmino(message: MsgEscalateChallenge): MsgEscalateChallengeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEscalateChallengeAminoMsg): MsgEscalateChallenge {
    return MsgEscalateChallenge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEscalateChallenge): MsgEscalateChallengeAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgEscalateChallenge",
      value: MsgEscalateChallenge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEscalateChallengeProtoMsg): MsgEscalateChallenge {
    return MsgEscalateChallenge.decode(message.value);
  },
  toProto(message: MsgEscalateChallenge): Uint8Array {
    return MsgEscalateChallenge.encode(message).finish();
  },
  toProtoMsg(message: MsgEscalateChallenge): MsgEscalateChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgEscalateChallenge",
      value: MsgEscalateChallenge.encode(message).finish()
    };
  }
};
function createBaseMsgEscalateChallengeResponse(): MsgEscalateChallengeResponse {
  return {};
}
/**
 * @name MsgEscalateChallengeResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgEscalateChallengeResponse
 */
export const MsgEscalateChallengeResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgEscalateChallengeResponse",
  encode(_: MsgEscalateChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEscalateChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEscalateChallengeResponse();
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
  fromPartial(_: DeepPartial<MsgEscalateChallengeResponse>): MsgEscalateChallengeResponse {
    const message = createBaseMsgEscalateChallengeResponse();
    return message;
  },
  fromAmino(_: MsgEscalateChallengeResponseAmino): MsgEscalateChallengeResponse {
    const message = createBaseMsgEscalateChallengeResponse();
    return message;
  },
  toAmino(_: MsgEscalateChallengeResponse): MsgEscalateChallengeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEscalateChallengeResponseAminoMsg): MsgEscalateChallengeResponse {
    return MsgEscalateChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEscalateChallengeResponseProtoMsg): MsgEscalateChallengeResponse {
    return MsgEscalateChallengeResponse.decode(message.value);
  },
  toProto(message: MsgEscalateChallengeResponse): Uint8Array {
    return MsgEscalateChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEscalateChallengeResponse): MsgEscalateChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.MsgEscalateChallengeResponse",
      value: MsgEscalateChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: FederationOperationalParams.fromPartial({})
  };
}
/**
 * @name MsgUpdateOperationalParams
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/federation/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      FederationOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
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
          message.operationalParams = FederationOperationalParams.decode(reader, reader.uint32());
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
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? FederationOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = FederationOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? FederationOperationalParams.toAmino(message.operationalParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/federation/MsgUpdateOperationalParams",
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
      typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParamsResponse",
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
      typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};