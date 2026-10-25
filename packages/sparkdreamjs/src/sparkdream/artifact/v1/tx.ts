//@ts-nocheck
import { Params, ParamsAmino, ArtifactOperationalParams, ArtifactOperationalParamsAmino } from "./params";
import { ClassFlags, ClassFlagsAmino, MintPolicy, MintPolicyAmino, RoyaltyShare, RoyaltyShareAmino, ExpiryPolicy, ExpiryPolicyAmino, RevealPolicy, RevealPolicyAmino, Renderer, RendererAmino, TokenModel, HarbergerPolicy, HarbergerPolicyAmino, TokenRef, TokenRefAmino, ReceivePolicy, TokenMetadata, TokenMetadataAmino, HideTargetKind, ImpactClaim, ImpactClaimAmino, EditionRef, EditionRefAmino, CraftInput, CraftInputAmino, MetadataStage, MetadataStageAmino } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { ModerationReason } from "../../common/v1/moderation_reason";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateParams
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
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateParams
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
  type: "sparkdream/x/artifact/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgCreateClass creates a class.
 * @name MsgCreateClass
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateClass
 */
export interface MsgCreateClass {
  creator: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  tokenUriBase: string;
  flags: ClassFlags;
  maxSupply: bigint;
  mintPolicy: MintPolicy;
  /**
   * Empty = creator.
   */
  payoutAddress: string;
  royaltyBps: number;
  /**
   * Empty = the creator takes the whole royalty.
   */
  royaltyRecipients: RoyaltyShare[];
  minters: string[];
  /**
   * Must equal "CC0-1.0".
   */
  acceptedContentLicense: string;
  /**
   * Token expiry rules; fixed for the life of the class (mode NONE = never).
   */
  expiry: ExpiryPolicy;
  /**
   * Blind-mint or generative commit-reveal; fixed at creation (kind NONE =
   * plain class). Only kind, commitment and deadline may be set.
   */
  reveal: RevealPolicy;
  /**
   * Query-time renderer; fixed at creation (empty pkg_path = none).
   */
  renderer: Renderer;
  /**
   * UNIQUE (default) or EDITIONS; fixed at creation.
   */
  tokenModel: TokenModel;
  /**
   * Harberger tokens; fixed at creation (tax_bps_per_year 0 = none).
   */
  harberger: HarbergerPolicy;
}
export interface MsgCreateClassProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateClass";
  value: Uint8Array;
}
/**
 * MsgCreateClass creates a class.
 * @name MsgCreateClassAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateClass
 */
export interface MsgCreateClassAmino {
  creator?: string;
  name?: string;
  symbol?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  token_uri_base?: string;
  flags: ClassFlagsAmino;
  max_supply?: string;
  mint_policy: MintPolicyAmino;
  /**
   * Empty = creator.
   */
  payout_address?: string;
  royalty_bps?: number;
  /**
   * Empty = the creator takes the whole royalty.
   */
  royalty_recipients?: RoyaltyShareAmino[];
  minters?: string[];
  /**
   * Must equal "CC0-1.0".
   */
  accepted_content_license?: string;
  /**
   * Token expiry rules; fixed for the life of the class (mode NONE = never).
   */
  expiry: ExpiryPolicyAmino;
  /**
   * Blind-mint or generative commit-reveal; fixed at creation (kind NONE =
   * plain class). Only kind, commitment and deadline may be set.
   */
  reveal: RevealPolicyAmino;
  /**
   * Query-time renderer; fixed at creation (empty pkg_path = none).
   */
  renderer: RendererAmino;
  /**
   * UNIQUE (default) or EDITIONS; fixed at creation.
   */
  token_model?: TokenModel;
  /**
   * Harberger tokens; fixed at creation (tax_bps_per_year 0 = none).
   */
  harberger: HarbergerPolicyAmino;
}
export interface MsgCreateClassAminoMsg {
  type: "sparkdream/x/artifact/MsgCreateClass";
  value: MsgCreateClassAmino;
}
/**
 * MsgCreateClassResponse returns the new class id.
 * @name MsgCreateClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateClassResponse
 */
export interface MsgCreateClassResponse {
  classId: bigint;
}
export interface MsgCreateClassResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateClassResponse";
  value: Uint8Array;
}
/**
 * MsgCreateClassResponse returns the new class id.
 * @name MsgCreateClassResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateClassResponse
 */
export interface MsgCreateClassResponseAmino {
  class_id?: string;
}
export interface MsgCreateClassResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCreateClassResponse";
  value: MsgCreateClassResponseAmino;
}
/**
 * MsgUpdateClass edits the fields named in update_mask.
 * @name MsgUpdateClass
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateClass
 */
export interface MsgUpdateClass {
  owner: string;
  classId: bigint;
  name: string;
  description: string;
  uri: string;
  uriHash: string;
  tokenUriBase: string;
  payoutAddress: string;
  royaltyRecipients: RoyaltyShare[];
  royaltyBps: number;
  /**
   * Field names to update: name, description, uri, uri_hash, token_uri_base,
   * payout_address, royalty_recipients, royalty_bps.
   */
  updateMask: string[];
}
export interface MsgUpdateClassProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass";
  value: Uint8Array;
}
/**
 * MsgUpdateClass edits the fields named in update_mask.
 * @name MsgUpdateClassAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateClass
 */
export interface MsgUpdateClassAmino {
  owner?: string;
  class_id?: string;
  name?: string;
  description?: string;
  uri?: string;
  uri_hash?: string;
  token_uri_base?: string;
  payout_address?: string;
  royalty_recipients?: RoyaltyShareAmino[];
  royalty_bps?: number;
  /**
   * Field names to update: name, description, uri, uri_hash, token_uri_base,
   * payout_address, royalty_recipients, royalty_bps.
   */
  update_mask?: string[];
}
export interface MsgUpdateClassAminoMsg {
  type: "sparkdream/x/artifact/MsgUpdateClass";
  value: MsgUpdateClassAmino;
}
/**
 * MsgUpdateClassResponse is empty.
 * @name MsgUpdateClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateClassResponse
 */
export interface MsgUpdateClassResponse {}
export interface MsgUpdateClassResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateClassResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateClassResponse is empty.
 * @name MsgUpdateClassResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateClassResponse
 */
export interface MsgUpdateClassResponseAmino {}
export interface MsgUpdateClassResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUpdateClassResponse";
  value: MsgUpdateClassResponseAmino;
}
/**
 * MsgFreezeClassMetadata freezes class (and all token) metadata.
 * @name MsgFreezeClassMetadata
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeClassMetadata
 */
export interface MsgFreezeClassMetadata {
  owner: string;
  classId: bigint;
}
export interface MsgFreezeClassMetadataProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata";
  value: Uint8Array;
}
/**
 * MsgFreezeClassMetadata freezes class (and all token) metadata.
 * @name MsgFreezeClassMetadataAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeClassMetadata
 */
export interface MsgFreezeClassMetadataAmino {
  owner?: string;
  class_id?: string;
}
export interface MsgFreezeClassMetadataAminoMsg {
  type: "sparkdream/x/artifact/MsgFreezeClassMetadata";
  value: MsgFreezeClassMetadataAmino;
}
/**
 * MsgFreezeClassMetadataResponse is empty.
 * @name MsgFreezeClassMetadataResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeClassMetadataResponse
 */
export interface MsgFreezeClassMetadataResponse {}
export interface MsgFreezeClassMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgFreezeClassMetadataResponse is empty.
 * @name MsgFreezeClassMetadataResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeClassMetadataResponse
 */
export interface MsgFreezeClassMetadataResponseAmino {}
export interface MsgFreezeClassMetadataResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgFreezeClassMetadataResponse";
  value: MsgFreezeClassMetadataResponseAmino;
}
/**
 * MsgSetMintPolicy replaces the class mint policy.
 * @name MsgSetMintPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintPolicy
 */
export interface MsgSetMintPolicy {
  owner: string;
  classId: bigint;
  mintPolicy: MintPolicy;
}
export interface MsgSetMintPolicyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy";
  value: Uint8Array;
}
/**
 * MsgSetMintPolicy replaces the class mint policy.
 * @name MsgSetMintPolicyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintPolicy
 */
export interface MsgSetMintPolicyAmino {
  owner?: string;
  class_id?: string;
  mint_policy: MintPolicyAmino;
}
export interface MsgSetMintPolicyAminoMsg {
  type: "sparkdream/x/artifact/MsgSetMintPolicy";
  value: MsgSetMintPolicyAmino;
}
/**
 * MsgSetMintPolicyResponse is empty.
 * @name MsgSetMintPolicyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintPolicyResponse
 */
export interface MsgSetMintPolicyResponse {}
export interface MsgSetMintPolicyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicyResponse";
  value: Uint8Array;
}
/**
 * MsgSetMintPolicyResponse is empty.
 * @name MsgSetMintPolicyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintPolicyResponse
 */
export interface MsgSetMintPolicyResponseAmino {}
export interface MsgSetMintPolicyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSetMintPolicyResponse";
  value: MsgSetMintPolicyResponseAmino;
}
/**
 * MsgSetMinters adds and removes minters atomically.
 * @name MsgSetMinters
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMinters
 */
export interface MsgSetMinters {
  owner: string;
  classId: bigint;
  add: string[];
  remove: string[];
}
export interface MsgSetMintersProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMinters";
  value: Uint8Array;
}
/**
 * MsgSetMinters adds and removes minters atomically.
 * @name MsgSetMintersAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMinters
 */
export interface MsgSetMintersAmino {
  owner?: string;
  class_id?: string;
  add?: string[];
  remove?: string[];
}
export interface MsgSetMintersAminoMsg {
  type: "sparkdream/x/artifact/MsgSetMinters";
  value: MsgSetMintersAmino;
}
/**
 * MsgSetMintersResponse is empty.
 * @name MsgSetMintersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintersResponse
 */
export interface MsgSetMintersResponse {}
export interface MsgSetMintersResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMintersResponse";
  value: Uint8Array;
}
/**
 * MsgSetMintersResponse is empty.
 * @name MsgSetMintersResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintersResponse
 */
export interface MsgSetMintersResponseAmino {}
export interface MsgSetMintersResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSetMintersResponse";
  value: MsgSetMintersResponseAmino;
}
/**
 * MsgSetMaxSupply lowers the supply cap or caps an unlimited class.
 * @name MsgSetMaxSupply
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMaxSupply
 */
export interface MsgSetMaxSupply {
  owner: string;
  classId: bigint;
  maxSupply: bigint;
  /**
   * 0 = the class cap; otherwise the unit cap of that edition.
   */
  editionId: bigint;
}
export interface MsgSetMaxSupplyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply";
  value: Uint8Array;
}
/**
 * MsgSetMaxSupply lowers the supply cap or caps an unlimited class.
 * @name MsgSetMaxSupplyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMaxSupply
 */
export interface MsgSetMaxSupplyAmino {
  owner?: string;
  class_id?: string;
  max_supply?: string;
  /**
   * 0 = the class cap; otherwise the unit cap of that edition.
   */
  edition_id?: string;
}
export interface MsgSetMaxSupplyAminoMsg {
  type: "sparkdream/x/artifact/MsgSetMaxSupply";
  value: MsgSetMaxSupplyAmino;
}
/**
 * MsgSetMaxSupplyResponse is empty.
 * @name MsgSetMaxSupplyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMaxSupplyResponse
 */
export interface MsgSetMaxSupplyResponse {}
export interface MsgSetMaxSupplyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupplyResponse";
  value: Uint8Array;
}
/**
 * MsgSetMaxSupplyResponse is empty.
 * @name MsgSetMaxSupplyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMaxSupplyResponse
 */
export interface MsgSetMaxSupplyResponseAmino {}
export interface MsgSetMaxSupplyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSetMaxSupplyResponse";
  value: MsgSetMaxSupplyResponseAmino;
}
/**
 * MsgCloseMinting permanently closes minting.
 * @name MsgCloseMinting
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCloseMinting
 */
export interface MsgCloseMinting {
  owner: string;
  classId: bigint;
}
export interface MsgCloseMintingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting";
  value: Uint8Array;
}
/**
 * MsgCloseMinting permanently closes minting.
 * @name MsgCloseMintingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCloseMinting
 */
export interface MsgCloseMintingAmino {
  owner?: string;
  class_id?: string;
}
export interface MsgCloseMintingAminoMsg {
  type: "sparkdream/x/artifact/MsgCloseMinting";
  value: MsgCloseMintingAmino;
}
/**
 * MsgCloseMintingResponse is empty.
 * @name MsgCloseMintingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCloseMintingResponse
 */
export interface MsgCloseMintingResponse {}
export interface MsgCloseMintingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCloseMintingResponse";
  value: Uint8Array;
}
/**
 * MsgCloseMintingResponse is empty.
 * @name MsgCloseMintingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCloseMintingResponse
 */
export interface MsgCloseMintingResponseAmino {}
export interface MsgCloseMintingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCloseMintingResponse";
  value: MsgCloseMintingResponseAmino;
}
/**
 * MsgProposeClassOwner proposes a handover.
 * @name MsgProposeClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeClassOwner
 */
export interface MsgProposeClassOwner {
  owner: string;
  classId: bigint;
  proposedOwner: string;
}
export interface MsgProposeClassOwnerProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner";
  value: Uint8Array;
}
/**
 * MsgProposeClassOwner proposes a handover.
 * @name MsgProposeClassOwnerAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeClassOwner
 */
export interface MsgProposeClassOwnerAmino {
  owner?: string;
  class_id?: string;
  proposed_owner?: string;
}
export interface MsgProposeClassOwnerAminoMsg {
  type: "sparkdream/x/artifact/MsgProposeClassOwner";
  value: MsgProposeClassOwnerAmino;
}
/**
 * MsgProposeClassOwnerResponse is empty.
 * @name MsgProposeClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeClassOwnerResponse
 */
export interface MsgProposeClassOwnerResponse {}
export interface MsgProposeClassOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwnerResponse";
  value: Uint8Array;
}
/**
 * MsgProposeClassOwnerResponse is empty.
 * @name MsgProposeClassOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeClassOwnerResponse
 */
export interface MsgProposeClassOwnerResponseAmino {}
export interface MsgProposeClassOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgProposeClassOwnerResponse";
  value: MsgProposeClassOwnerResponseAmino;
}
/**
 * MsgAcceptClassOwner accepts a handover.
 * @name MsgAcceptClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptClassOwner
 */
export interface MsgAcceptClassOwner {
  proposedOwner: string;
  classId: bigint;
}
export interface MsgAcceptClassOwnerProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner";
  value: Uint8Array;
}
/**
 * MsgAcceptClassOwner accepts a handover.
 * @name MsgAcceptClassOwnerAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptClassOwner
 */
export interface MsgAcceptClassOwnerAmino {
  proposed_owner?: string;
  class_id?: string;
}
export interface MsgAcceptClassOwnerAminoMsg {
  type: "sparkdream/x/artifact/MsgAcceptClassOwner";
  value: MsgAcceptClassOwnerAmino;
}
/**
 * MsgAcceptClassOwnerResponse is empty.
 * @name MsgAcceptClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptClassOwnerResponse
 */
export interface MsgAcceptClassOwnerResponse {}
export interface MsgAcceptClassOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwnerResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptClassOwnerResponse is empty.
 * @name MsgAcceptClassOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptClassOwnerResponse
 */
export interface MsgAcceptClassOwnerResponseAmino {}
export interface MsgAcceptClassOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAcceptClassOwnerResponse";
  value: MsgAcceptClassOwnerResponseAmino;
}
/**
 * MsgCancelClassOwner withdraws a handover proposal.
 * @name MsgCancelClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelClassOwner
 */
export interface MsgCancelClassOwner {
  owner: string;
  classId: bigint;
}
export interface MsgCancelClassOwnerProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner";
  value: Uint8Array;
}
/**
 * MsgCancelClassOwner withdraws a handover proposal.
 * @name MsgCancelClassOwnerAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelClassOwner
 */
export interface MsgCancelClassOwnerAmino {
  owner?: string;
  class_id?: string;
}
export interface MsgCancelClassOwnerAminoMsg {
  type: "sparkdream/x/artifact/MsgCancelClassOwner";
  value: MsgCancelClassOwnerAmino;
}
/**
 * MsgCancelClassOwnerResponse is empty.
 * @name MsgCancelClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelClassOwnerResponse
 */
export interface MsgCancelClassOwnerResponse {}
export interface MsgCancelClassOwnerResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwnerResponse";
  value: Uint8Array;
}
/**
 * MsgCancelClassOwnerResponse is empty.
 * @name MsgCancelClassOwnerResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelClassOwnerResponse
 */
export interface MsgCancelClassOwnerResponseAmino {}
export interface MsgCancelClassOwnerResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCancelClassOwnerResponse";
  value: MsgCancelClassOwnerResponseAmino;
}
/**
 * MsgDeleteClass deletes an empty class.
 * @name MsgDeleteClass
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDeleteClass
 */
export interface MsgDeleteClass {
  owner: string;
  classId: bigint;
}
export interface MsgDeleteClassProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass";
  value: Uint8Array;
}
/**
 * MsgDeleteClass deletes an empty class.
 * @name MsgDeleteClassAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDeleteClass
 */
export interface MsgDeleteClassAmino {
  owner?: string;
  class_id?: string;
}
export interface MsgDeleteClassAminoMsg {
  type: "sparkdream/x/artifact/MsgDeleteClass";
  value: MsgDeleteClassAmino;
}
/**
 * MsgDeleteClassResponse is empty.
 * @name MsgDeleteClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDeleteClassResponse
 */
export interface MsgDeleteClassResponse {}
export interface MsgDeleteClassResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDeleteClassResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteClassResponse is empty.
 * @name MsgDeleteClassResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDeleteClassResponse
 */
export interface MsgDeleteClassResponseAmino {}
export interface MsgDeleteClassResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgDeleteClassResponse";
  value: MsgDeleteClassResponseAmino;
}
/**
 * MintEntry is one token to mint.
 * @name MintEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintEntry
 */
export interface MintEntry {
  /**
   * Empty = the minter.
   */
  recipient: string;
  metadata: TokenMetadata;
  /**
   * Optional metadata schedule: later stages shown from from_time on.
   * Strictly increasing from_time, all in the future, at most
   * params.max_schedule_stages. Fixed at mint.
   */
  schedule: MetadataStage[];
}
export interface MintEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MintEntry";
  value: Uint8Array;
}
/**
 * MintEntry is one token to mint.
 * @name MintEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintEntry
 */
export interface MintEntryAmino {
  /**
   * Empty = the minter.
   */
  recipient?: string;
  metadata: TokenMetadataAmino;
  /**
   * Optional metadata schedule: later stages shown from from_time on.
   * Strictly increasing from_time, all in the future, at most
   * params.max_schedule_stages. Fixed at mint.
   */
  schedule: MetadataStageAmino[];
}
export interface MintEntryAminoMsg {
  type: "/sparkdream.artifact.v1.MintEntry";
  value: MintEntryAmino;
}
/**
 * MintResult reports one minted token.
 * @name MintResult
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintResult
 */
export interface MintResult {
  tokenId: bigint;
  /**
   * true = delivered; false = waiting in the recipient's inbox.
   */
  live: boolean;
}
export interface MintResultProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MintResult";
  value: Uint8Array;
}
/**
 * MintResult reports one minted token.
 * @name MintResultAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintResult
 */
export interface MintResultAmino {
  token_id?: string;
  /**
   * true = delivered; false = waiting in the recipient's inbox.
   */
  live?: boolean;
}
export interface MintResultAminoMsg {
  type: "/sparkdream.artifact.v1.MintResult";
  value: MintResultAmino;
}
/**
 * MsgMint mints tokens as the class owner or a listed minter.
 * @name MsgMint
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMint
 */
export interface MsgMint {
  minter: string;
  classId: bigint;
  entries: MintEntry[];
  /**
   * Must equal "CC0-1.0".
   */
  acceptedContentLicense: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgMint";
  value: Uint8Array;
}
/**
 * MsgMint mints tokens as the class owner or a listed minter.
 * @name MsgMintAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMint
 */
export interface MsgMintAmino {
  minter?: string;
  class_id?: string;
  entries: MintEntryAmino[];
  /**
   * Must equal "CC0-1.0".
   */
  accepted_content_license?: string;
}
export interface MsgMintAminoMsg {
  type: "sparkdream/x/artifact/MsgMint";
  value: MsgMintAmino;
}
/**
 * MsgMintResponse lists the minted tokens.
 * @name MsgMintResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintResponse
 */
export interface MsgMintResponse {
  results: MintResult[];
}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgMintResponse";
  value: Uint8Array;
}
/**
 * MsgMintResponse lists the minted tokens.
 * @name MsgMintResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintResponse
 */
export interface MsgMintResponseAmino {
  results?: MintResultAmino[];
}
export interface MsgMintResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgMintResponse";
  value: MsgMintResponseAmino;
}
/**
 * MsgPublicMint buys tokens under the public mint policy.
 * @name MsgPublicMint
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgPublicMint
 */
export interface MsgPublicMint {
  buyer: string;
  classId: bigint;
  quantity: number;
  /**
   * Per-token maximum; rejected if the current price is higher.
   */
  maxPrice: Coin;
}
export interface MsgPublicMintProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgPublicMint";
  value: Uint8Array;
}
/**
 * MsgPublicMint buys tokens under the public mint policy.
 * @name MsgPublicMintAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgPublicMint
 */
export interface MsgPublicMintAmino {
  buyer?: string;
  class_id?: string;
  quantity?: number;
  /**
   * Per-token maximum; rejected if the current price is higher.
   */
  max_price: CoinAmino;
}
export interface MsgPublicMintAminoMsg {
  type: "sparkdream/x/artifact/MsgPublicMint";
  value: MsgPublicMintAmino;
}
/**
 * MsgPublicMintResponse lists the minted token ids.
 * @name MsgPublicMintResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgPublicMintResponse
 */
export interface MsgPublicMintResponse {
  tokenIds: bigint[];
}
export interface MsgPublicMintResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgPublicMintResponse";
  value: Uint8Array;
}
/**
 * MsgPublicMintResponse lists the minted token ids.
 * @name MsgPublicMintResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgPublicMintResponse
 */
export interface MsgPublicMintResponseAmino {
  token_ids?: string[];
}
export interface MsgPublicMintResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgPublicMintResponse";
  value: MsgPublicMintResponseAmino;
}
/**
 * TransferEntry is one token transfer.
 * @name TransferEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TransferEntry
 */
export interface TransferEntry {
  classId: bigint;
  tokenId: bigint;
  recipient: string;
}
export interface TransferEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.TransferEntry";
  value: Uint8Array;
}
/**
 * TransferEntry is one token transfer.
 * @name TransferEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TransferEntry
 */
export interface TransferEntryAmino {
  class_id?: string;
  token_id?: string;
  recipient?: string;
}
export interface TransferEntryAminoMsg {
  type: "/sparkdream.artifact.v1.TransferEntry";
  value: TransferEntryAmino;
}
/**
 * MsgTransfer transfers tokens.
 * @name MsgTransfer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransfer
 */
export interface MsgTransfer {
  sender: string;
  entries: TransferEntry[];
}
export interface MsgTransferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgTransfer";
  value: Uint8Array;
}
/**
 * MsgTransfer transfers tokens.
 * @name MsgTransferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransfer
 */
export interface MsgTransferAmino {
  sender?: string;
  entries: TransferEntryAmino[];
}
export interface MsgTransferAminoMsg {
  type: "sparkdream/x/artifact/MsgTransfer";
  value: MsgTransferAmino;
}
/**
 * TransferResult reports one transfer.
 * @name TransferResult
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TransferResult
 */
export interface TransferResult {
  classId: bigint;
  tokenId: bigint;
  /**
   * true = delivered; false = waiting in the recipient's inbox.
   */
  delivered: boolean;
}
export interface TransferResultProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.TransferResult";
  value: Uint8Array;
}
/**
 * TransferResult reports one transfer.
 * @name TransferResultAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TransferResult
 */
export interface TransferResultAmino {
  class_id?: string;
  token_id?: string;
  /**
   * true = delivered; false = waiting in the recipient's inbox.
   */
  delivered?: boolean;
}
export interface TransferResultAminoMsg {
  type: "/sparkdream.artifact.v1.TransferResult";
  value: TransferResultAmino;
}
/**
 * MsgTransferResponse lists the transfer outcomes.
 * @name MsgTransferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferResponse
 */
export interface MsgTransferResponse {
  results: TransferResult[];
}
export interface MsgTransferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgTransferResponse";
  value: Uint8Array;
}
/**
 * MsgTransferResponse lists the transfer outcomes.
 * @name MsgTransferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferResponse
 */
export interface MsgTransferResponseAmino {
  results?: TransferResultAmino[];
}
export interface MsgTransferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgTransferResponse";
  value: MsgTransferResponseAmino;
}
/**
 * AcceptEntry is one inbox item to accept.
 * @name AcceptEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.AcceptEntry
 */
export interface AcceptEntry {
  classId: bigint;
  tokenId: bigint;
  /**
   * Optional; if set, must equal the item's current metadata hash.
   */
  expectedMetadataHash: string;
}
export interface AcceptEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.AcceptEntry";
  value: Uint8Array;
}
/**
 * AcceptEntry is one inbox item to accept.
 * @name AcceptEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.AcceptEntry
 */
export interface AcceptEntryAmino {
  class_id?: string;
  token_id?: string;
  /**
   * Optional; if set, must equal the item's current metadata hash.
   */
  expected_metadata_hash?: string;
}
export interface AcceptEntryAminoMsg {
  type: "/sparkdream.artifact.v1.AcceptEntry";
  value: AcceptEntryAmino;
}
/**
 * MsgAcceptIncoming accepts inbox items.
 * @name MsgAcceptIncoming
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptIncoming
 */
export interface MsgAcceptIncoming {
  recipient: string;
  entries: AcceptEntry[];
}
export interface MsgAcceptIncomingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming";
  value: Uint8Array;
}
/**
 * MsgAcceptIncoming accepts inbox items.
 * @name MsgAcceptIncomingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptIncoming
 */
export interface MsgAcceptIncomingAmino {
  recipient?: string;
  entries: AcceptEntryAmino[];
}
export interface MsgAcceptIncomingAminoMsg {
  type: "sparkdream/x/artifact/MsgAcceptIncoming";
  value: MsgAcceptIncomingAmino;
}
/**
 * MsgAcceptIncomingResponse is empty.
 * @name MsgAcceptIncomingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptIncomingResponse
 */
export interface MsgAcceptIncomingResponse {}
export interface MsgAcceptIncomingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncomingResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptIncomingResponse is empty.
 * @name MsgAcceptIncomingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptIncomingResponse
 */
export interface MsgAcceptIncomingResponseAmino {}
export interface MsgAcceptIncomingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAcceptIncomingResponse";
  value: MsgAcceptIncomingResponseAmino;
}
/**
 * MsgRejectIncoming rejects inbox items.
 * @name MsgRejectIncoming
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectIncoming
 */
export interface MsgRejectIncoming {
  recipient: string;
  refs: TokenRef[];
}
export interface MsgRejectIncomingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming";
  value: Uint8Array;
}
/**
 * MsgRejectIncoming rejects inbox items.
 * @name MsgRejectIncomingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectIncoming
 */
export interface MsgRejectIncomingAmino {
  recipient?: string;
  refs: TokenRefAmino[];
}
export interface MsgRejectIncomingAminoMsg {
  type: "sparkdream/x/artifact/MsgRejectIncoming";
  value: MsgRejectIncomingAmino;
}
/**
 * MsgRejectIncomingResponse is empty.
 * @name MsgRejectIncomingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectIncomingResponse
 */
export interface MsgRejectIncomingResponse {}
export interface MsgRejectIncomingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectIncomingResponse";
  value: Uint8Array;
}
/**
 * MsgRejectIncomingResponse is empty.
 * @name MsgRejectIncomingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectIncomingResponse
 */
export interface MsgRejectIncomingResponseAmino {}
export interface MsgRejectIncomingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRejectIncomingResponse";
  value: MsgRejectIncomingResponseAmino;
}
/**
 * MsgCancelOutgoing withdraws pending items.
 * @name MsgCancelOutgoing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOutgoing
 */
export interface MsgCancelOutgoing {
  signer: string;
  refs: TokenRef[];
}
export interface MsgCancelOutgoingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing";
  value: Uint8Array;
}
/**
 * MsgCancelOutgoing withdraws pending items.
 * @name MsgCancelOutgoingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOutgoing
 */
export interface MsgCancelOutgoingAmino {
  signer?: string;
  refs: TokenRefAmino[];
}
export interface MsgCancelOutgoingAminoMsg {
  type: "sparkdream/x/artifact/MsgCancelOutgoing";
  value: MsgCancelOutgoingAmino;
}
/**
 * MsgCancelOutgoingResponse is empty.
 * @name MsgCancelOutgoingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOutgoingResponse
 */
export interface MsgCancelOutgoingResponse {}
export interface MsgCancelOutgoingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoingResponse";
  value: Uint8Array;
}
/**
 * MsgCancelOutgoingResponse is empty.
 * @name MsgCancelOutgoingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOutgoingResponse
 */
export interface MsgCancelOutgoingResponseAmino {}
export interface MsgCancelOutgoingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCancelOutgoingResponse";
  value: MsgCancelOutgoingResponseAmino;
}
/**
 * MsgSetReceivePolicy sets the signer's receive policy.
 * @name MsgSetReceivePolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetReceivePolicy
 */
export interface MsgSetReceivePolicy {
  owner: string;
  policy: ReceivePolicy;
}
export interface MsgSetReceivePolicyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy";
  value: Uint8Array;
}
/**
 * MsgSetReceivePolicy sets the signer's receive policy.
 * @name MsgSetReceivePolicyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetReceivePolicy
 */
export interface MsgSetReceivePolicyAmino {
  owner?: string;
  policy?: ReceivePolicy;
}
export interface MsgSetReceivePolicyAminoMsg {
  type: "sparkdream/x/artifact/MsgSetReceivePolicy";
  value: MsgSetReceivePolicyAmino;
}
/**
 * MsgSetReceivePolicyResponse is empty.
 * @name MsgSetReceivePolicyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetReceivePolicyResponse
 */
export interface MsgSetReceivePolicyResponse {}
export interface MsgSetReceivePolicyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicyResponse";
  value: Uint8Array;
}
/**
 * MsgSetReceivePolicyResponse is empty.
 * @name MsgSetReceivePolicyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetReceivePolicyResponse
 */
export interface MsgSetReceivePolicyResponseAmino {}
export interface MsgSetReceivePolicyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSetReceivePolicyResponse";
  value: MsgSetReceivePolicyResponseAmino;
}
/**
 * MsgBurn burns tokens the signer owns.
 * @name MsgBurn
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurn
 */
export interface MsgBurn {
  owner: string;
  refs: TokenRef[];
}
export interface MsgBurnProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn burns tokens the signer owns.
 * @name MsgBurnAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurn
 */
export interface MsgBurnAmino {
  owner?: string;
  refs: TokenRefAmino[];
}
export interface MsgBurnAminoMsg {
  type: "sparkdream/x/artifact/MsgBurn";
  value: MsgBurnAmino;
}
/**
 * MsgBurnResponse is empty.
 * @name MsgBurnResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnResponse
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * MsgBurnResponse is empty.
 * @name MsgBurnResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
/**
 * MsgRevoke burns tokens as the class owner, when the class's
 * burn_authorization allows the issuer.
 * @name MsgRevoke
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevoke
 */
export interface MsgRevoke {
  owner: string;
  classId: bigint;
  tokenIds: bigint[];
  reason: string;
}
export interface MsgRevokeProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke burns tokens as the class owner, when the class's
 * burn_authorization allows the issuer.
 * @name MsgRevokeAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevoke
 */
export interface MsgRevokeAmino {
  owner?: string;
  class_id?: string;
  token_ids?: string[];
  reason?: string;
}
export interface MsgRevokeAminoMsg {
  type: "sparkdream/x/artifact/MsgRevoke";
  value: MsgRevokeAmino;
}
/**
 * MsgRevokeResponse is empty.
 * @name MsgRevokeResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeResponse
 */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevokeResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeResponse is empty.
 * @name MsgRevokeResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeResponse
 */
export interface MsgRevokeResponseAmino {}
export interface MsgRevokeResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRevokeResponse";
  value: MsgRevokeResponseAmino;
}
/**
 * MsgUpdateToken replaces a token's metadata.
 * @name MsgUpdateToken
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateToken
 */
export interface MsgUpdateToken {
  owner: string;
  classId: bigint;
  tokenId: bigint;
  metadata: TokenMetadata;
}
export interface MsgUpdateTokenProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken";
  value: Uint8Array;
}
/**
 * MsgUpdateToken replaces a token's metadata.
 * @name MsgUpdateTokenAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateToken
 */
export interface MsgUpdateTokenAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
  metadata: TokenMetadataAmino;
}
export interface MsgUpdateTokenAminoMsg {
  type: "sparkdream/x/artifact/MsgUpdateToken";
  value: MsgUpdateTokenAmino;
}
/**
 * MsgUpdateTokenResponse returns the new metadata hash.
 * @name MsgUpdateTokenResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateTokenResponse
 */
export interface MsgUpdateTokenResponse {
  metadataHash: string;
}
export interface MsgUpdateTokenResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateTokenResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateTokenResponse returns the new metadata hash.
 * @name MsgUpdateTokenResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateTokenResponse
 */
export interface MsgUpdateTokenResponseAmino {
  metadata_hash?: string;
}
export interface MsgUpdateTokenResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUpdateTokenResponse";
  value: MsgUpdateTokenResponseAmino;
}
/**
 * MsgFreezeTokenMetadata freezes token metadata.
 * @name MsgFreezeTokenMetadata
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeTokenMetadata
 */
export interface MsgFreezeTokenMetadata {
  signer: string;
  refs: TokenRef[];
}
export interface MsgFreezeTokenMetadataProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata";
  value: Uint8Array;
}
/**
 * MsgFreezeTokenMetadata freezes token metadata.
 * @name MsgFreezeTokenMetadataAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeTokenMetadata
 */
export interface MsgFreezeTokenMetadataAmino {
  signer?: string;
  refs: TokenRefAmino[];
}
export interface MsgFreezeTokenMetadataAminoMsg {
  type: "sparkdream/x/artifact/MsgFreezeTokenMetadata";
  value: MsgFreezeTokenMetadataAmino;
}
/**
 * MsgFreezeTokenMetadataResponse is empty.
 * @name MsgFreezeTokenMetadataResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse
 */
export interface MsgFreezeTokenMetadataResponse {}
export interface MsgFreezeTokenMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgFreezeTokenMetadataResponse is empty.
 * @name MsgFreezeTokenMetadataResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse
 */
export interface MsgFreezeTokenMetadataResponseAmino {}
export interface MsgFreezeTokenMetadataResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse";
  value: MsgFreezeTokenMetadataResponseAmino;
}
/**
 * MsgList lists a token for sale.
 * @name MsgList
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgList
 */
export interface MsgList {
  seller: string;
  classId: bigint;
  tokenId: bigint;
  price: Coin;
  /**
   * Seconds.
   */
  duration: bigint;
}
export interface MsgListProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgList";
  value: Uint8Array;
}
/**
 * MsgList lists a token for sale.
 * @name MsgListAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgList
 */
export interface MsgListAmino {
  seller?: string;
  class_id?: string;
  token_id?: string;
  price: CoinAmino;
  /**
   * Seconds.
   */
  duration?: string;
}
export interface MsgListAminoMsg {
  type: "sparkdream/x/artifact/MsgList";
  value: MsgListAmino;
}
/**
 * MsgListResponse returns the listing nonce.
 * @name MsgListResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListResponse
 */
export interface MsgListResponse {
  nonce: bigint;
}
export interface MsgListResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgListResponse";
  value: Uint8Array;
}
/**
 * MsgListResponse returns the listing nonce.
 * @name MsgListResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListResponse
 */
export interface MsgListResponseAmino {
  nonce?: string;
}
export interface MsgListResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgListResponse";
  value: MsgListResponseAmino;
}
/**
 * MsgUpdateListing changes price and/or duration.
 * @name MsgUpdateListing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateListing
 */
export interface MsgUpdateListing {
  seller: string;
  classId: bigint;
  tokenId: bigint;
  price: Coin;
  /**
   * Seconds from now.
   */
  duration: bigint;
}
export interface MsgUpdateListingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing";
  value: Uint8Array;
}
/**
 * MsgUpdateListing changes price and/or duration.
 * @name MsgUpdateListingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateListing
 */
export interface MsgUpdateListingAmino {
  seller?: string;
  class_id?: string;
  token_id?: string;
  price: CoinAmino;
  /**
   * Seconds from now.
   */
  duration?: string;
}
export interface MsgUpdateListingAminoMsg {
  type: "sparkdream/x/artifact/MsgUpdateListing";
  value: MsgUpdateListingAmino;
}
/**
 * MsgUpdateListingResponse returns the new nonce.
 * @name MsgUpdateListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateListingResponse
 */
export interface MsgUpdateListingResponse {
  nonce: bigint;
}
export interface MsgUpdateListingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateListingResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateListingResponse returns the new nonce.
 * @name MsgUpdateListingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateListingResponse
 */
export interface MsgUpdateListingResponseAmino {
  nonce?: string;
}
export interface MsgUpdateListingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUpdateListingResponse";
  value: MsgUpdateListingResponseAmino;
}
/**
 * MsgDelist cancels a listing.
 * @name MsgDelist
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelist
 */
export interface MsgDelist {
  seller: string;
  classId: bigint;
  tokenId: bigint;
}
export interface MsgDelistProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDelist";
  value: Uint8Array;
}
/**
 * MsgDelist cancels a listing.
 * @name MsgDelistAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelist
 */
export interface MsgDelistAmino {
  seller?: string;
  class_id?: string;
  token_id?: string;
}
export interface MsgDelistAminoMsg {
  type: "sparkdream/x/artifact/MsgDelist";
  value: MsgDelistAmino;
}
/**
 * MsgDelistResponse is empty.
 * @name MsgDelistResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistResponse
 */
export interface MsgDelistResponse {}
export interface MsgDelistResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDelistResponse";
  value: Uint8Array;
}
/**
 * MsgDelistResponse is empty.
 * @name MsgDelistResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistResponse
 */
export interface MsgDelistResponseAmino {}
export interface MsgDelistResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgDelistResponse";
  value: MsgDelistResponseAmino;
}
/**
 * MsgBuy buys a listed token.
 * @name MsgBuy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuy
 */
export interface MsgBuy {
  buyer: string;
  classId: bigint;
  tokenId: bigint;
  expectedPrice: Coin;
  expectedNonce: bigint;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expectedMetadataHash: string;
  /**
   * Required when the token holds nested tokens; must equal its contents
   * hash (Children query).
   */
  expectedContentsHash: string;
}
export interface MsgBuyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBuy";
  value: Uint8Array;
}
/**
 * MsgBuy buys a listed token.
 * @name MsgBuyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuy
 */
export interface MsgBuyAmino {
  buyer?: string;
  class_id?: string;
  token_id?: string;
  expected_price: CoinAmino;
  expected_nonce?: string;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expected_metadata_hash?: string;
  /**
   * Required when the token holds nested tokens; must equal its contents
   * hash (Children query).
   */
  expected_contents_hash?: string;
}
export interface MsgBuyAminoMsg {
  type: "sparkdream/x/artifact/MsgBuy";
  value: MsgBuyAmino;
}
/**
 * MsgBuyResponse reports the settlement split.
 * @name MsgBuyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyResponse
 */
export interface MsgBuyResponse {
  fee: string;
  royalty: string;
  proceeds: string;
}
export interface MsgBuyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBuyResponse";
  value: Uint8Array;
}
/**
 * MsgBuyResponse reports the settlement split.
 * @name MsgBuyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyResponse
 */
export interface MsgBuyResponseAmino {
  fee?: string;
  royalty?: string;
  proceeds?: string;
}
export interface MsgBuyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgBuyResponse";
  value: MsgBuyResponseAmino;
}
/**
 * MsgHideContent hides a class or token.
 * @name MsgHideContent
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgHideContent
 */
export interface MsgHideContent {
  authority: string;
  targetKind: HideTargetKind;
  classId: bigint;
  tokenId: bigint;
  reason: ModerationReason;
  reasonText: string;
}
export interface MsgHideContentProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgHideContent";
  value: Uint8Array;
}
/**
 * MsgHideContent hides a class or token.
 * @name MsgHideContentAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgHideContent
 */
export interface MsgHideContentAmino {
  authority?: string;
  target_kind?: HideTargetKind;
  class_id?: string;
  token_id?: string;
  reason?: ModerationReason;
  reason_text?: string;
}
export interface MsgHideContentAminoMsg {
  type: "sparkdream/x/artifact/MsgHideContent";
  value: MsgHideContentAmino;
}
/**
 * MsgHideContentResponse returns the hide record id.
 * @name MsgHideContentResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgHideContentResponse
 */
export interface MsgHideContentResponse {
  hideId: bigint;
}
export interface MsgHideContentResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgHideContentResponse";
  value: Uint8Array;
}
/**
 * MsgHideContentResponse returns the hide record id.
 * @name MsgHideContentResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgHideContentResponse
 */
export interface MsgHideContentResponseAmino {
  hide_id?: string;
}
export interface MsgHideContentResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgHideContentResponse";
  value: MsgHideContentResponseAmino;
}
/**
 * MsgUnhideContent reverses a hide before appeal.
 * @name MsgUnhideContent
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUnhideContent
 */
export interface MsgUnhideContent {
  authority: string;
  hideId: bigint;
}
export interface MsgUnhideContentProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent";
  value: Uint8Array;
}
/**
 * MsgUnhideContent reverses a hide before appeal.
 * @name MsgUnhideContentAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUnhideContent
 */
export interface MsgUnhideContentAmino {
  authority?: string;
  hide_id?: string;
}
export interface MsgUnhideContentAminoMsg {
  type: "sparkdream/x/artifact/MsgUnhideContent";
  value: MsgUnhideContentAmino;
}
/**
 * MsgUnhideContentResponse is empty.
 * @name MsgUnhideContentResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUnhideContentResponse
 */
export interface MsgUnhideContentResponse {}
export interface MsgUnhideContentResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUnhideContentResponse";
  value: Uint8Array;
}
/**
 * MsgUnhideContentResponse is empty.
 * @name MsgUnhideContentResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUnhideContentResponse
 */
export interface MsgUnhideContentResponseAmino {}
export interface MsgUnhideContentResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUnhideContentResponse";
  value: MsgUnhideContentResponseAmino;
}
/**
 * MsgAppealHide appeals a hide. The appeal is opened in x/rep (which charges
 * its standard appeal bond and seats a jury); the verdict comes back through
 * x/rep's ModerationAppealTarget callbacks.
 * @name MsgAppealHide
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAppealHide
 */
export interface MsgAppealHide {
  appellant: string;
  hideId: bigint;
  reason: string;
}
export interface MsgAppealHideProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAppealHide";
  value: Uint8Array;
}
/**
 * MsgAppealHide appeals a hide. The appeal is opened in x/rep (which charges
 * its standard appeal bond and seats a jury); the verdict comes back through
 * x/rep's ModerationAppealTarget callbacks.
 * @name MsgAppealHideAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAppealHide
 */
export interface MsgAppealHideAmino {
  appellant?: string;
  hide_id?: string;
  reason?: string;
}
export interface MsgAppealHideAminoMsg {
  type: "sparkdream/x/artifact/MsgAppealHide";
  value: MsgAppealHideAmino;
}
/**
 * MsgAppealHideResponse returns the x/rep appeal id.
 * @name MsgAppealHideResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAppealHideResponse
 */
export interface MsgAppealHideResponse {
  appealId: bigint;
}
export interface MsgAppealHideResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAppealHideResponse";
  value: Uint8Array;
}
/**
 * MsgAppealHideResponse returns the x/rep appeal id.
 * @name MsgAppealHideResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAppealHideResponse
 */
export interface MsgAppealHideResponseAmino {
  appeal_id?: string;
}
export interface MsgAppealHideResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAppealHideResponse";
  value: MsgAppealHideResponseAmino;
}
/**
 * MsgUpdateOperationalParams updates the operational parameter subset.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  authority: string;
  /**
   * NOTE: All operational parameters must be supplied.
   */
  operationalParams: ArtifactOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams updates the operational parameter subset.
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  authority?: string;
  /**
   * NOTE: All operational parameters must be supplied.
   */
  operational_params: ArtifactOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/artifact/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse is empty.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse is empty.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgIssue mints one shared metadata to a list of recipients as the class
 * owner or a listed minter. Each recipient gets its own token under the
 * usual receive-policy, inbox and deposit rules.
 * @name MsgIssue
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgIssue
 */
export interface MsgIssue {
  minter: string;
  classId: bigint;
  /**
   * 1..max_issue_batch_size distinct recipients.
   */
  recipients: string[];
  /**
   * Metadata every issued token carries.
   */
  metadata: TokenMetadata;
  /**
   * Must equal "CC0-1.0".
   */
  acceptedContentLicense: string;
}
export interface MsgIssueProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgIssue";
  value: Uint8Array;
}
/**
 * MsgIssue mints one shared metadata to a list of recipients as the class
 * owner or a listed minter. Each recipient gets its own token under the
 * usual receive-policy, inbox and deposit rules.
 * @name MsgIssueAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgIssue
 */
export interface MsgIssueAmino {
  minter?: string;
  class_id?: string;
  /**
   * 1..max_issue_batch_size distinct recipients.
   */
  recipients?: string[];
  /**
   * Metadata every issued token carries.
   */
  metadata: TokenMetadataAmino;
  /**
   * Must equal "CC0-1.0".
   */
  accepted_content_license?: string;
}
export interface MsgIssueAminoMsg {
  type: "sparkdream/x/artifact/MsgIssue";
  value: MsgIssueAmino;
}
/**
 * MsgIssueResponse lists the issued tokens in recipient order.
 * @name MsgIssueResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgIssueResponse
 */
export interface MsgIssueResponse {
  results: MintResult[];
}
export interface MsgIssueResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgIssueResponse";
  value: Uint8Array;
}
/**
 * MsgIssueResponse lists the issued tokens in recipient order.
 * @name MsgIssueResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgIssueResponse
 */
export interface MsgIssueResponseAmino {
  results?: MintResultAmino[];
}
export interface MsgIssueResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgIssueResponse";
  value: MsgIssueResponseAmino;
}
/**
 * MsgRenew extends an expiring token by the class term.
 * @name MsgRenew
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRenew
 */
export interface MsgRenew {
  /**
   * The holder (pays renewal_price to the class) or the class owner or a
   * listed minter (free).
   */
  signer: string;
  classId: bigint;
  tokenId: bigint;
  /**
   * Holder renewals: rejected if the class renewal_price is higher.
   */
  maxPrice: Coin;
}
export interface MsgRenewProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRenew";
  value: Uint8Array;
}
/**
 * MsgRenew extends an expiring token by the class term.
 * @name MsgRenewAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRenew
 */
export interface MsgRenewAmino {
  /**
   * The holder (pays renewal_price to the class) or the class owner or a
   * listed minter (free).
   */
  signer?: string;
  class_id?: string;
  token_id?: string;
  /**
   * Holder renewals: rejected if the class renewal_price is higher.
   */
  max_price: CoinAmino;
}
export interface MsgRenewAminoMsg {
  type: "sparkdream/x/artifact/MsgRenew";
  value: MsgRenewAmino;
}
/**
 * MsgRenewResponse carries the new expiry.
 * @name MsgRenewResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRenewResponse
 */
export interface MsgRenewResponse {
  expiresAt: bigint;
}
export interface MsgRenewResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRenewResponse";
  value: Uint8Array;
}
/**
 * MsgRenewResponse carries the new expiry.
 * @name MsgRenewResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRenewResponse
 */
export interface MsgRenewResponseAmino {
  expires_at?: string;
}
export interface MsgRenewResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRenewResponse";
  value: MsgRenewResponseAmino;
}
/**
 * MsgRedeem marks tokens as redeemed. Signed by the class owner or a
 * listed minter (the venue). Never moves ownership.
 * @name MsgRedeem
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRedeem
 */
export interface MsgRedeem {
  signer: string;
  classId: bigint;
  tokenIds: bigint[];
}
export interface MsgRedeemProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRedeem";
  value: Uint8Array;
}
/**
 * MsgRedeem marks tokens as redeemed. Signed by the class owner or a
 * listed minter (the venue). Never moves ownership.
 * @name MsgRedeemAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRedeem
 */
export interface MsgRedeemAmino {
  signer?: string;
  class_id?: string;
  token_ids?: string[];
}
export interface MsgRedeemAminoMsg {
  type: "sparkdream/x/artifact/MsgRedeem";
  value: MsgRedeemAmino;
}
/**
 * MsgRedeemResponse is empty.
 * @name MsgRedeemResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRedeemResponse
 */
export interface MsgRedeemResponse {}
export interface MsgRedeemResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRedeemResponse";
  value: Uint8Array;
}
/**
 * MsgRedeemResponse is empty.
 * @name MsgRedeemResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRedeemResponse
 */
export interface MsgRedeemResponseAmino {}
export interface MsgRedeemResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRedeemResponse";
  value: MsgRedeemResponseAmino;
}
/**
 * MsgLockRoyalty freezes royalty_bps and royalty_recipients forever.
 * @name MsgLockRoyalty
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgLockRoyalty
 */
export interface MsgLockRoyalty {
  owner: string;
  classId: bigint;
}
export interface MsgLockRoyaltyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgLockRoyalty";
  value: Uint8Array;
}
/**
 * MsgLockRoyalty freezes royalty_bps and royalty_recipients forever.
 * @name MsgLockRoyaltyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgLockRoyalty
 */
export interface MsgLockRoyaltyAmino {
  owner?: string;
  class_id?: string;
}
export interface MsgLockRoyaltyAminoMsg {
  type: "sparkdream/x/artifact/MsgLockRoyalty";
  value: MsgLockRoyaltyAmino;
}
/**
 * MsgLockRoyaltyResponse is empty.
 * @name MsgLockRoyaltyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgLockRoyaltyResponse
 */
export interface MsgLockRoyaltyResponse {}
export interface MsgLockRoyaltyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgLockRoyaltyResponse";
  value: Uint8Array;
}
/**
 * MsgLockRoyaltyResponse is empty.
 * @name MsgLockRoyaltyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgLockRoyaltyResponse
 */
export interface MsgLockRoyaltyResponseAmino {}
export interface MsgLockRoyaltyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgLockRoyaltyResponse";
  value: MsgLockRoyaltyResponseAmino;
}
/**
 * MsgReveal sets a blind-minted token's metadata. Signed by the class owner
 * or a listed minter; the leaf built from (class, token, salt, metadata)
 * must prove into the class commitment.
 * @name MsgReveal
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgReveal
 */
export interface MsgReveal {
  signer: string;
  classId: bigint;
  tokenId: bigint;
  metadata: TokenMetadata;
  /**
   * Lowercase hex, 1..64 bytes.
   */
  salt: string;
  /**
   * Sibling hashes from the leaf up, lowercase hex, at most 32.
   */
  proof: string[];
}
export interface MsgRevealProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgReveal";
  value: Uint8Array;
}
/**
 * MsgReveal sets a blind-minted token's metadata. Signed by the class owner
 * or a listed minter; the leaf built from (class, token, salt, metadata)
 * must prove into the class commitment.
 * @name MsgRevealAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgReveal
 */
export interface MsgRevealAmino {
  signer?: string;
  class_id?: string;
  token_id?: string;
  metadata: TokenMetadataAmino;
  /**
   * Lowercase hex, 1..64 bytes.
   */
  salt?: string;
  /**
   * Sibling hashes from the leaf up, lowercase hex, at most 32.
   */
  proof?: string[];
}
export interface MsgRevealAminoMsg {
  type: "sparkdream/x/artifact/MsgReveal";
  value: MsgRevealAmino;
}
/**
 * MsgRevealResponse carries the revealed metadata hash.
 * @name MsgRevealResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealResponse
 */
export interface MsgRevealResponse {
  metadataHash: string;
}
export interface MsgRevealResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevealResponse";
  value: Uint8Array;
}
/**
 * MsgRevealResponse carries the revealed metadata hash.
 * @name MsgRevealResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealResponse
 */
export interface MsgRevealResponseAmino {
  metadata_hash?: string;
}
export interface MsgRevealResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRevealResponse";
  value: MsgRevealResponseAmino;
}
/**
 * MsgRevealSeed discloses the seed secret committed at class creation.
 * @name MsgRevealSeed
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealSeed
 */
export interface MsgRevealSeed {
  owner: string;
  classId: bigint;
  /**
   * Lowercase hex, 1..64 bytes; SHA-256 must equal the commitment.
   */
  seed: string;
}
export interface MsgRevealSeedProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevealSeed";
  value: Uint8Array;
}
/**
 * MsgRevealSeed discloses the seed secret committed at class creation.
 * @name MsgRevealSeedAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealSeed
 */
export interface MsgRevealSeedAmino {
  owner?: string;
  class_id?: string;
  /**
   * Lowercase hex, 1..64 bytes; SHA-256 must equal the commitment.
   */
  seed?: string;
}
export interface MsgRevealSeedAminoMsg {
  type: "sparkdream/x/artifact/MsgRevealSeed";
  value: MsgRevealSeedAmino;
}
/**
 * MsgRevealSeedResponse is empty.
 * @name MsgRevealSeedResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealSeedResponse
 */
export interface MsgRevealSeedResponse {}
export interface MsgRevealSeedResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevealSeedResponse";
  value: Uint8Array;
}
/**
 * MsgRevealSeedResponse is empty.
 * @name MsgRevealSeedResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealSeedResponse
 */
export interface MsgRevealSeedResponseAmino {}
export interface MsgRevealSeedResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRevealSeedResponse";
  value: MsgRevealSeedResponseAmino;
}
/**
 * MsgProposeMedia offers the holder an additional media version.
 * @name MsgProposeMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeMedia
 */
export interface MsgProposeMedia {
  owner: string;
  classId: bigint;
  tokenId: bigint;
  metadata: TokenMetadata;
}
export interface MsgProposeMediaProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeMedia";
  value: Uint8Array;
}
/**
 * MsgProposeMedia offers the holder an additional media version.
 * @name MsgProposeMediaAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeMedia
 */
export interface MsgProposeMediaAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
  metadata: TokenMetadataAmino;
}
export interface MsgProposeMediaAminoMsg {
  type: "sparkdream/x/artifact/MsgProposeMedia";
  value: MsgProposeMediaAmino;
}
/**
 * MsgProposeMediaResponse carries the proposal id.
 * @name MsgProposeMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeMediaResponse
 */
export interface MsgProposeMediaResponse {
  proposalId: bigint;
}
export interface MsgProposeMediaResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeMediaResponse";
  value: Uint8Array;
}
/**
 * MsgProposeMediaResponse carries the proposal id.
 * @name MsgProposeMediaResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeMediaResponse
 */
export interface MsgProposeMediaResponseAmino {
  proposal_id?: string;
}
export interface MsgProposeMediaResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgProposeMediaResponse";
  value: MsgProposeMediaResponseAmino;
}
/**
 * MsgAcceptMedia moves a proposal into the token's accepted versions.
 * @name MsgAcceptMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptMedia
 */
export interface MsgAcceptMedia {
  owner: string;
  classId: bigint;
  tokenId: bigint;
  proposalId: bigint;
  /**
   * true = also make it the displayed version.
   */
  display: boolean;
}
export interface MsgAcceptMediaProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptMedia";
  value: Uint8Array;
}
/**
 * MsgAcceptMedia moves a proposal into the token's accepted versions.
 * @name MsgAcceptMediaAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptMedia
 */
export interface MsgAcceptMediaAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
  proposal_id?: string;
  /**
   * true = also make it the displayed version.
   */
  display?: boolean;
}
export interface MsgAcceptMediaAminoMsg {
  type: "sparkdream/x/artifact/MsgAcceptMedia";
  value: MsgAcceptMediaAmino;
}
/**
 * MsgAcceptMediaResponse carries the new version number (1-based).
 * @name MsgAcceptMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptMediaResponse
 */
export interface MsgAcceptMediaResponse {
  version: number;
}
export interface MsgAcceptMediaResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptMediaResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptMediaResponse carries the new version number (1-based).
 * @name MsgAcceptMediaResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptMediaResponse
 */
export interface MsgAcceptMediaResponseAmino {
  version?: number;
}
export interface MsgAcceptMediaResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAcceptMediaResponse";
  value: MsgAcceptMediaResponseAmino;
}
/**
 * MsgRejectMedia discards a proposal (holder) or withdraws it (class owner).
 * @name MsgRejectMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectMedia
 */
export interface MsgRejectMedia {
  signer: string;
  classId: bigint;
  tokenId: bigint;
  proposalId: bigint;
}
export interface MsgRejectMediaProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectMedia";
  value: Uint8Array;
}
/**
 * MsgRejectMedia discards a proposal (holder) or withdraws it (class owner).
 * @name MsgRejectMediaAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectMedia
 */
export interface MsgRejectMediaAmino {
  signer?: string;
  class_id?: string;
  token_id?: string;
  proposal_id?: string;
}
export interface MsgRejectMediaAminoMsg {
  type: "sparkdream/x/artifact/MsgRejectMedia";
  value: MsgRejectMediaAmino;
}
/**
 * MsgRejectMediaResponse is empty.
 * @name MsgRejectMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectMediaResponse
 */
export interface MsgRejectMediaResponse {}
export interface MsgRejectMediaResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectMediaResponse";
  value: Uint8Array;
}
/**
 * MsgRejectMediaResponse is empty.
 * @name MsgRejectMediaResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectMediaResponse
 */
export interface MsgRejectMediaResponseAmino {}
export interface MsgRejectMediaResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRejectMediaResponse";
  value: MsgRejectMediaResponseAmino;
}
/**
 * MsgSetDisplayedMedia picks the displayed version: 0 = the stored
 * metadata, n = media_versions[n-1].
 * @name MsgSetDisplayedMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetDisplayedMedia
 */
export interface MsgSetDisplayedMedia {
  owner: string;
  classId: bigint;
  tokenId: bigint;
  version: number;
}
export interface MsgSetDisplayedMediaProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMedia";
  value: Uint8Array;
}
/**
 * MsgSetDisplayedMedia picks the displayed version: 0 = the stored
 * metadata, n = media_versions[n-1].
 * @name MsgSetDisplayedMediaAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetDisplayedMedia
 */
export interface MsgSetDisplayedMediaAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
  version?: number;
}
export interface MsgSetDisplayedMediaAminoMsg {
  type: "sparkdream/x/artifact/MsgSetDisplayedMedia";
  value: MsgSetDisplayedMediaAmino;
}
/**
 * MsgSetDisplayedMediaResponse is empty.
 * @name MsgSetDisplayedMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetDisplayedMediaResponse
 */
export interface MsgSetDisplayedMediaResponse {}
export interface MsgSetDisplayedMediaResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMediaResponse";
  value: Uint8Array;
}
/**
 * MsgSetDisplayedMediaResponse is empty.
 * @name MsgSetDisplayedMediaResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetDisplayedMediaResponse
 */
export interface MsgSetDisplayedMediaResponseAmino {}
export interface MsgSetDisplayedMediaResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSetDisplayedMediaResponse";
  value: MsgSetDisplayedMediaResponseAmino;
}
/**
 * MsgCreateEdition creates an edition of an EDITIONS class (class owner or
 * listed minter). With a claim it is an impact certificate.
 * @name MsgCreateEdition
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateEdition
 */
export interface MsgCreateEdition {
  minter: string;
  classId: bigint;
  metadata: TokenMetadata;
  /**
   * 0 = unlimited units.
   */
  maxSupply: bigint;
  /**
   * Optional impact claim (scope, contributors, period, initiative).
   */
  claim: ImpactClaim;
  /**
   * Must equal "CC0-1.0".
   */
  acceptedContentLicense: string;
}
export interface MsgCreateEditionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateEdition";
  value: Uint8Array;
}
/**
 * MsgCreateEdition creates an edition of an EDITIONS class (class owner or
 * listed minter). With a claim it is an impact certificate.
 * @name MsgCreateEditionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateEdition
 */
export interface MsgCreateEditionAmino {
  minter?: string;
  class_id?: string;
  metadata: TokenMetadataAmino;
  /**
   * 0 = unlimited units.
   */
  max_supply?: string;
  /**
   * Optional impact claim (scope, contributors, period, initiative).
   */
  claim: ImpactClaimAmino;
  /**
   * Must equal "CC0-1.0".
   */
  accepted_content_license?: string;
}
export interface MsgCreateEditionAminoMsg {
  type: "sparkdream/x/artifact/MsgCreateEdition";
  value: MsgCreateEditionAmino;
}
/**
 * MsgCreateEditionResponse returns the new edition id.
 * @name MsgCreateEditionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateEditionResponse
 */
export interface MsgCreateEditionResponse {
  editionId: bigint;
}
export interface MsgCreateEditionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateEditionResponse";
  value: Uint8Array;
}
/**
 * MsgCreateEditionResponse returns the new edition id.
 * @name MsgCreateEditionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateEditionResponse
 */
export interface MsgCreateEditionResponseAmino {
  edition_id?: string;
}
export interface MsgCreateEditionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCreateEditionResponse";
  value: MsgCreateEditionResponseAmino;
}
/**
 * UnitMintEntry is one recipient of a unit mint.
 * @name UnitMintEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitMintEntry
 */
export interface UnitMintEntry {
  /**
   * Empty = the minter.
   */
  recipient: string;
  amount: bigint;
}
export interface UnitMintEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.UnitMintEntry";
  value: Uint8Array;
}
/**
 * UnitMintEntry is one recipient of a unit mint.
 * @name UnitMintEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitMintEntry
 */
export interface UnitMintEntryAmino {
  /**
   * Empty = the minter.
   */
  recipient?: string;
  amount?: string;
}
export interface UnitMintEntryAminoMsg {
  type: "/sparkdream.artifact.v1.UnitMintEntry";
  value: UnitMintEntryAmino;
}
/**
 * UnitResult reports one unit delivery: delivered directly, or parked in
 * the recipient's inbox as pending_id (inbox ref (0, pending_id)).
 * @name UnitResult
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitResult
 */
export interface UnitResult {
  recipient: string;
  amount: bigint;
  delivered: boolean;
  pendingId: bigint;
}
export interface UnitResultProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.UnitResult";
  value: Uint8Array;
}
/**
 * UnitResult reports one unit delivery: delivered directly, or parked in
 * the recipient's inbox as pending_id (inbox ref (0, pending_id)).
 * @name UnitResultAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitResult
 */
export interface UnitResultAmino {
  recipient?: string;
  amount?: string;
  delivered?: boolean;
  pending_id?: string;
}
export interface UnitResultAminoMsg {
  type: "/sparkdream.artifact.v1.UnitResult";
  value: UnitResultAmino;
}
/**
 * MsgMintUnits mints units of an edition (class owner or listed minter).
 * @name MsgMintUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintUnits
 */
export interface MsgMintUnits {
  minter: string;
  classId: bigint;
  editionId: bigint;
  entries: UnitMintEntry[];
}
export interface MsgMintUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgMintUnits";
  value: Uint8Array;
}
/**
 * MsgMintUnits mints units of an edition (class owner or listed minter).
 * @name MsgMintUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintUnits
 */
export interface MsgMintUnitsAmino {
  minter?: string;
  class_id?: string;
  edition_id?: string;
  entries: UnitMintEntryAmino[];
}
export interface MsgMintUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgMintUnits";
  value: MsgMintUnitsAmino;
}
/**
 * MsgMintUnitsResponse reports each entry.
 * @name MsgMintUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintUnitsResponse
 */
export interface MsgMintUnitsResponse {
  results: UnitResult[];
}
export interface MsgMintUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgMintUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgMintUnitsResponse reports each entry.
 * @name MsgMintUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintUnitsResponse
 */
export interface MsgMintUnitsResponseAmino {
  results?: UnitResultAmino[];
}
export interface MsgMintUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgMintUnitsResponse";
  value: MsgMintUnitsResponseAmino;
}
/**
 * UnitTransferEntry moves units of one edition to one recipient.
 * @name UnitTransferEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitTransferEntry
 */
export interface UnitTransferEntry {
  classId: bigint;
  editionId: bigint;
  recipient: string;
  amount: bigint;
}
export interface UnitTransferEntryProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.UnitTransferEntry";
  value: Uint8Array;
}
/**
 * UnitTransferEntry moves units of one edition to one recipient.
 * @name UnitTransferEntryAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitTransferEntry
 */
export interface UnitTransferEntryAmino {
  class_id?: string;
  edition_id?: string;
  recipient?: string;
  amount?: string;
}
export interface UnitTransferEntryAminoMsg {
  type: "/sparkdream.artifact.v1.UnitTransferEntry";
  value: UnitTransferEntryAmino;
}
/**
 * MsgTransferUnits moves units to recipients (or their inboxes).
 * @name MsgTransferUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferUnits
 */
export interface MsgTransferUnits {
  sender: string;
  entries: UnitTransferEntry[];
}
export interface MsgTransferUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgTransferUnits";
  value: Uint8Array;
}
/**
 * MsgTransferUnits moves units to recipients (or their inboxes).
 * @name MsgTransferUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferUnits
 */
export interface MsgTransferUnitsAmino {
  sender?: string;
  entries: UnitTransferEntryAmino[];
}
export interface MsgTransferUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgTransferUnits";
  value: MsgTransferUnitsAmino;
}
/**
 * MsgTransferUnitsResponse reports each entry.
 * @name MsgTransferUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferUnitsResponse
 */
export interface MsgTransferUnitsResponse {
  results: UnitResult[];
}
export interface MsgTransferUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgTransferUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgTransferUnitsResponse reports each entry.
 * @name MsgTransferUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferUnitsResponse
 */
export interface MsgTransferUnitsResponseAmino {
  results?: UnitResultAmino[];
}
export interface MsgTransferUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgTransferUnitsResponse";
  value: MsgTransferUnitsResponseAmino;
}
/**
 * MsgBurnUnits burns free units the signer holds.
 * @name MsgBurnUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnUnits
 */
export interface MsgBurnUnits {
  owner: string;
  classId: bigint;
  editionId: bigint;
  amount: bigint;
}
export interface MsgBurnUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBurnUnits";
  value: Uint8Array;
}
/**
 * MsgBurnUnits burns free units the signer holds.
 * @name MsgBurnUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnUnits
 */
export interface MsgBurnUnitsAmino {
  owner?: string;
  class_id?: string;
  edition_id?: string;
  amount?: string;
}
export interface MsgBurnUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgBurnUnits";
  value: MsgBurnUnitsAmino;
}
/**
 * MsgBurnUnitsResponse is empty.
 * @name MsgBurnUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnUnitsResponse
 */
export interface MsgBurnUnitsResponse {}
export interface MsgBurnUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBurnUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgBurnUnitsResponse is empty.
 * @name MsgBurnUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnUnitsResponse
 */
export interface MsgBurnUnitsResponseAmino {}
export interface MsgBurnUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgBurnUnitsResponse";
  value: MsgBurnUnitsResponseAmino;
}
/**
 * MsgRevokeUnits burns a holder's units as the class owner, when the
 * class's burn_authorization allows the issuer.
 * @name MsgRevokeUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeUnits
 */
export interface MsgRevokeUnits {
  owner: string;
  classId: bigint;
  editionId: bigint;
  holder: string;
  amount: bigint;
  reason: string;
}
export interface MsgRevokeUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnits";
  value: Uint8Array;
}
/**
 * MsgRevokeUnits burns a holder's units as the class owner, when the
 * class's burn_authorization allows the issuer.
 * @name MsgRevokeUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeUnits
 */
export interface MsgRevokeUnitsAmino {
  owner?: string;
  class_id?: string;
  edition_id?: string;
  holder?: string;
  amount?: string;
  reason?: string;
}
export interface MsgRevokeUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgRevokeUnits";
  value: MsgRevokeUnitsAmino;
}
/**
 * MsgRevokeUnitsResponse is empty.
 * @name MsgRevokeUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeUnitsResponse
 */
export interface MsgRevokeUnitsResponse {}
export interface MsgRevokeUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeUnitsResponse is empty.
 * @name MsgRevokeUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeUnitsResponse
 */
export interface MsgRevokeUnitsResponseAmino {}
export interface MsgRevokeUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRevokeUnitsResponse";
  value: MsgRevokeUnitsResponseAmino;
}
/**
 * MsgListUnits offers units at a fixed per-unit SPARK price.
 * @name MsgListUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListUnits
 */
export interface MsgListUnits {
  seller: string;
  classId: bigint;
  editionId: bigint;
  quantity: bigint;
  unitPrice: Coin;
  /**
   * Seconds.
   */
  duration: bigint;
}
export interface MsgListUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgListUnits";
  value: Uint8Array;
}
/**
 * MsgListUnits offers units at a fixed per-unit SPARK price.
 * @name MsgListUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListUnits
 */
export interface MsgListUnitsAmino {
  seller?: string;
  class_id?: string;
  edition_id?: string;
  quantity?: string;
  unit_price: CoinAmino;
  /**
   * Seconds.
   */
  duration?: string;
}
export interface MsgListUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgListUnits";
  value: MsgListUnitsAmino;
}
/**
 * MsgListUnitsResponse returns the listing id.
 * @name MsgListUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListUnitsResponse
 */
export interface MsgListUnitsResponse {
  listingId: bigint;
}
export interface MsgListUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgListUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgListUnitsResponse returns the listing id.
 * @name MsgListUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListUnitsResponse
 */
export interface MsgListUnitsResponseAmino {
  listing_id?: string;
}
export interface MsgListUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgListUnitsResponse";
  value: MsgListUnitsResponseAmino;
}
/**
 * MsgDelistUnits cancels a unit listing and unlocks its units.
 * @name MsgDelistUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistUnits
 */
export interface MsgDelistUnits {
  seller: string;
  listingId: bigint;
}
export interface MsgDelistUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDelistUnits";
  value: Uint8Array;
}
/**
 * MsgDelistUnits cancels a unit listing and unlocks its units.
 * @name MsgDelistUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistUnits
 */
export interface MsgDelistUnitsAmino {
  seller?: string;
  listing_id?: string;
}
export interface MsgDelistUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgDelistUnits";
  value: MsgDelistUnitsAmino;
}
/**
 * MsgDelistUnitsResponse is empty.
 * @name MsgDelistUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistUnitsResponse
 */
export interface MsgDelistUnitsResponse {}
export interface MsgDelistUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDelistUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgDelistUnitsResponse is empty.
 * @name MsgDelistUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistUnitsResponse
 */
export interface MsgDelistUnitsResponseAmino {}
export interface MsgDelistUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgDelistUnitsResponse";
  value: MsgDelistUnitsResponseAmino;
}
/**
 * MsgBuyUnits buys some or all of a unit listing.
 * @name MsgBuyUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyUnits
 */
export interface MsgBuyUnits {
  buyer: string;
  listingId: bigint;
  quantity: bigint;
  /**
   * Must equal the listing's unit price exactly.
   */
  expectedUnitPrice: Coin;
  /**
   * Optional; must equal the edition's current metadata hash if set.
   */
  expectedMetadataHash: string;
}
export interface MsgBuyUnitsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBuyUnits";
  value: Uint8Array;
}
/**
 * MsgBuyUnits buys some or all of a unit listing.
 * @name MsgBuyUnitsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyUnits
 */
export interface MsgBuyUnitsAmino {
  buyer?: string;
  listing_id?: string;
  quantity?: string;
  /**
   * Must equal the listing's unit price exactly.
   */
  expected_unit_price: CoinAmino;
  /**
   * Optional; must equal the edition's current metadata hash if set.
   */
  expected_metadata_hash?: string;
}
export interface MsgBuyUnitsAminoMsg {
  type: "sparkdream/x/artifact/MsgBuyUnits";
  value: MsgBuyUnitsAmino;
}
/**
 * MsgBuyUnitsResponse reports the settlement split.
 * @name MsgBuyUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyUnitsResponse
 */
export interface MsgBuyUnitsResponse {
  fee: string;
  royalty: string;
  proceeds: string;
}
export interface MsgBuyUnitsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBuyUnitsResponse";
  value: Uint8Array;
}
/**
 * MsgBuyUnitsResponse reports the settlement split.
 * @name MsgBuyUnitsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyUnitsResponse
 */
export interface MsgBuyUnitsResponseAmino {
  fee?: string;
  royalty?: string;
  proceeds?: string;
}
export interface MsgBuyUnitsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgBuyUnitsResponse";
  value: MsgBuyUnitsResponseAmino;
}
/**
 * MsgFundEdition pays SPARK to an edition's current holders, pro rata to
 * the units they hold (retroactive funding of an impact certificate).
 * @name MsgFundEdition
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFundEdition
 */
export interface MsgFundEdition {
  funder: string;
  classId: bigint;
  editionId: bigint;
  amount: Coin;
}
export interface MsgFundEditionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgFundEdition";
  value: Uint8Array;
}
/**
 * MsgFundEdition pays SPARK to an edition's current holders, pro rata to
 * the units they hold (retroactive funding of an impact certificate).
 * @name MsgFundEditionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFundEdition
 */
export interface MsgFundEditionAmino {
  funder?: string;
  class_id?: string;
  edition_id?: string;
  amount: CoinAmino;
}
export interface MsgFundEditionAminoMsg {
  type: "sparkdream/x/artifact/MsgFundEdition";
  value: MsgFundEditionAmino;
}
/**
 * MsgFundEditionResponse is empty.
 * @name MsgFundEditionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFundEditionResponse
 */
export interface MsgFundEditionResponse {}
export interface MsgFundEditionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgFundEditionResponse";
  value: Uint8Array;
}
/**
 * MsgFundEditionResponse is empty.
 * @name MsgFundEditionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFundEditionResponse
 */
export interface MsgFundEditionResponseAmino {}
export interface MsgFundEditionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgFundEditionResponse";
  value: MsgFundEditionResponseAmino;
}
/**
 * MsgClaimEditionRewards pays out the signer's accrued retro funding.
 * @name MsgClaimEditionRewards
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgClaimEditionRewards
 */
export interface MsgClaimEditionRewards {
  holder: string;
  refs: EditionRef[];
}
export interface MsgClaimEditionRewardsProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewards";
  value: Uint8Array;
}
/**
 * MsgClaimEditionRewards pays out the signer's accrued retro funding.
 * @name MsgClaimEditionRewardsAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgClaimEditionRewards
 */
export interface MsgClaimEditionRewardsAmino {
  holder?: string;
  refs: EditionRefAmino[];
}
export interface MsgClaimEditionRewardsAminoMsg {
  type: "sparkdream/x/artifact/MsgClaimEditionRewards";
  value: MsgClaimEditionRewardsAmino;
}
/**
 * MsgClaimEditionRewardsResponse returns the total paid.
 * @name MsgClaimEditionRewardsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgClaimEditionRewardsResponse
 */
export interface MsgClaimEditionRewardsResponse {
  claimed: string;
}
export interface MsgClaimEditionRewardsResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewardsResponse";
  value: Uint8Array;
}
/**
 * MsgClaimEditionRewardsResponse returns the total paid.
 * @name MsgClaimEditionRewardsResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgClaimEditionRewardsResponse
 */
export interface MsgClaimEditionRewardsResponseAmino {
  claimed?: string;
}
export interface MsgClaimEditionRewardsResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgClaimEditionRewardsResponse";
  value: MsgClaimEditionRewardsResponseAmino;
}
/**
 * MsgAddCraftRecipe adds a crafting recipe to a class (owner only, until
 * the class's first craft).
 * @name MsgAddCraftRecipe
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAddCraftRecipe
 */
export interface MsgAddCraftRecipe {
  owner: string;
  classId: bigint;
  inputs: CraftInput[];
  outputMetadata: TokenMetadata;
  outputEditionId: bigint;
  outputQuantity: bigint;
  /**
   * Must equal "CC0-1.0" (the recipe carries the crafted token's content).
   */
  acceptedContentLicense: string;
}
export interface MsgAddCraftRecipeProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipe";
  value: Uint8Array;
}
/**
 * MsgAddCraftRecipe adds a crafting recipe to a class (owner only, until
 * the class's first craft).
 * @name MsgAddCraftRecipeAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAddCraftRecipe
 */
export interface MsgAddCraftRecipeAmino {
  owner?: string;
  class_id?: string;
  inputs: CraftInputAmino[];
  output_metadata: TokenMetadataAmino;
  output_edition_id?: string;
  output_quantity?: string;
  /**
   * Must equal "CC0-1.0" (the recipe carries the crafted token's content).
   */
  accepted_content_license?: string;
}
export interface MsgAddCraftRecipeAminoMsg {
  type: "sparkdream/x/artifact/MsgAddCraftRecipe";
  value: MsgAddCraftRecipeAmino;
}
/**
 * MsgAddCraftRecipeResponse returns the recipe id.
 * @name MsgAddCraftRecipeResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAddCraftRecipeResponse
 */
export interface MsgAddCraftRecipeResponse {
  recipeId: bigint;
}
export interface MsgAddCraftRecipeResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipeResponse";
  value: Uint8Array;
}
/**
 * MsgAddCraftRecipeResponse returns the recipe id.
 * @name MsgAddCraftRecipeResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAddCraftRecipeResponse
 */
export interface MsgAddCraftRecipeResponseAmino {
  recipe_id?: string;
}
export interface MsgAddCraftRecipeResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAddCraftRecipeResponse";
  value: MsgAddCraftRecipeResponseAmino;
}
/**
 * MsgRemoveCraftRecipe removes a recipe (owner only, at any time).
 * @name MsgRemoveCraftRecipe
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRemoveCraftRecipe
 */
export interface MsgRemoveCraftRecipe {
  owner: string;
  classId: bigint;
  recipeId: bigint;
}
export interface MsgRemoveCraftRecipeProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipe";
  value: Uint8Array;
}
/**
 * MsgRemoveCraftRecipe removes a recipe (owner only, at any time).
 * @name MsgRemoveCraftRecipeAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRemoveCraftRecipe
 */
export interface MsgRemoveCraftRecipeAmino {
  owner?: string;
  class_id?: string;
  recipe_id?: string;
}
export interface MsgRemoveCraftRecipeAminoMsg {
  type: "sparkdream/x/artifact/MsgRemoveCraftRecipe";
  value: MsgRemoveCraftRecipeAmino;
}
/**
 * MsgRemoveCraftRecipeResponse is empty.
 * @name MsgRemoveCraftRecipeResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse
 */
export interface MsgRemoveCraftRecipeResponse {}
export interface MsgRemoveCraftRecipeResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveCraftRecipeResponse is empty.
 * @name MsgRemoveCraftRecipeResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse
 */
export interface MsgRemoveCraftRecipeResponseAmino {}
export interface MsgRemoveCraftRecipeResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse";
  value: MsgRemoveCraftRecipeResponseAmino;
}
/**
 * MsgCraft burns a recipe's inputs and mints its output to the crafter.
 * @name MsgCraft
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCraft
 */
export interface MsgCraft {
  crafter: string;
  classId: bigint;
  recipeId: bigint;
  /**
   * The UNIQUE-class inputs, matching the recipe's quantities per class.
   */
  inputTokens: TokenRef[];
}
export interface MsgCraftProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCraft";
  value: Uint8Array;
}
/**
 * MsgCraft burns a recipe's inputs and mints its output to the crafter.
 * @name MsgCraftAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCraft
 */
export interface MsgCraftAmino {
  crafter?: string;
  class_id?: string;
  recipe_id?: string;
  /**
   * The UNIQUE-class inputs, matching the recipe's quantities per class.
   */
  input_tokens?: TokenRefAmino[];
}
export interface MsgCraftAminoMsg {
  type: "sparkdream/x/artifact/MsgCraft";
  value: MsgCraftAmino;
}
/**
 * MsgCraftResponse reports the output: the new token id (UNIQUE target) or
 * the units credited (EDITIONS target).
 * @name MsgCraftResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCraftResponse
 */
export interface MsgCraftResponse {
  tokenId: bigint;
  editionId: bigint;
  amount: bigint;
}
export interface MsgCraftResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCraftResponse";
  value: Uint8Array;
}
/**
 * MsgCraftResponse reports the output: the new token id (UNIQUE target) or
 * the units credited (EDITIONS target).
 * @name MsgCraftResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCraftResponse
 */
export interface MsgCraftResponseAmino {
  token_id?: string;
  edition_id?: string;
  amount?: string;
}
export interface MsgCraftResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCraftResponse";
  value: MsgCraftResponseAmino;
}
/**
 * MsgOfferRental offers a token's user right for a period.
 * @name MsgOfferRental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgOfferRental
 */
export interface MsgOfferRental {
  owner: string;
  classId: bigint;
  tokenId: bigint;
  /**
   * Who may accept; empty = anyone.
   */
  user: string;
  price: Coin;
  /**
   * Seconds the rental lasts once accepted.
   */
  duration: bigint;
  /**
   * Whether the owner may end the rental early.
   */
  ownerMayEnd: boolean;
  /**
   * Seconds the offer stays open.
   */
  offerDuration: bigint;
}
export interface MsgOfferRentalProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgOfferRental";
  value: Uint8Array;
}
/**
 * MsgOfferRental offers a token's user right for a period.
 * @name MsgOfferRentalAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgOfferRental
 */
export interface MsgOfferRentalAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
  /**
   * Who may accept; empty = anyone.
   */
  user?: string;
  price: CoinAmino;
  /**
   * Seconds the rental lasts once accepted.
   */
  duration?: string;
  /**
   * Whether the owner may end the rental early.
   */
  owner_may_end?: boolean;
  /**
   * Seconds the offer stays open.
   */
  offer_duration?: string;
}
export interface MsgOfferRentalAminoMsg {
  type: "sparkdream/x/artifact/MsgOfferRental";
  value: MsgOfferRentalAmino;
}
/**
 * MsgOfferRentalResponse returns the offer nonce.
 * @name MsgOfferRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgOfferRentalResponse
 */
export interface MsgOfferRentalResponse {
  nonce: bigint;
}
export interface MsgOfferRentalResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgOfferRentalResponse";
  value: Uint8Array;
}
/**
 * MsgOfferRentalResponse returns the offer nonce.
 * @name MsgOfferRentalResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgOfferRentalResponse
 */
export interface MsgOfferRentalResponseAmino {
  nonce?: string;
}
export interface MsgOfferRentalResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgOfferRentalResponse";
  value: MsgOfferRentalResponseAmino;
}
/**
 * MsgCancelRentalOffer withdraws a rental offer.
 * @name MsgCancelRentalOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelRentalOffer
 */
export interface MsgCancelRentalOffer {
  owner: string;
  classId: bigint;
  tokenId: bigint;
}
export interface MsgCancelRentalOfferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOffer";
  value: Uint8Array;
}
/**
 * MsgCancelRentalOffer withdraws a rental offer.
 * @name MsgCancelRentalOfferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelRentalOffer
 */
export interface MsgCancelRentalOfferAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
}
export interface MsgCancelRentalOfferAminoMsg {
  type: "sparkdream/x/artifact/MsgCancelRentalOffer";
  value: MsgCancelRentalOfferAmino;
}
/**
 * MsgCancelRentalOfferResponse is empty.
 * @name MsgCancelRentalOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelRentalOfferResponse
 */
export interface MsgCancelRentalOfferResponse {}
export interface MsgCancelRentalOfferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOfferResponse";
  value: Uint8Array;
}
/**
 * MsgCancelRentalOfferResponse is empty.
 * @name MsgCancelRentalOfferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelRentalOfferResponse
 */
export interface MsgCancelRentalOfferResponseAmino {}
export interface MsgCancelRentalOfferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCancelRentalOfferResponse";
  value: MsgCancelRentalOfferResponseAmino;
}
/**
 * MsgAcceptRental accepts a rental offer, paying its price.
 * @name MsgAcceptRental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptRental
 */
export interface MsgAcceptRental {
  renter: string;
  classId: bigint;
  tokenId: bigint;
  expectedPrice: Coin;
  expectedNonce: bigint;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expectedMetadataHash: string;
  /**
   * Required when the token holds nested tokens; must equal its
   * contents hash.
   */
  expectedContentsHash: string;
}
export interface MsgAcceptRentalProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptRental";
  value: Uint8Array;
}
/**
 * MsgAcceptRental accepts a rental offer, paying its price.
 * @name MsgAcceptRentalAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptRental
 */
export interface MsgAcceptRentalAmino {
  renter?: string;
  class_id?: string;
  token_id?: string;
  expected_price: CoinAmino;
  expected_nonce?: string;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expected_metadata_hash?: string;
  /**
   * Required when the token holds nested tokens; must equal its
   * contents hash.
   */
  expected_contents_hash?: string;
}
export interface MsgAcceptRentalAminoMsg {
  type: "sparkdream/x/artifact/MsgAcceptRental";
  value: MsgAcceptRentalAmino;
}
/**
 * MsgAcceptRentalResponse returns the rental end.
 * @name MsgAcceptRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptRentalResponse
 */
export interface MsgAcceptRentalResponse {
  expiresAt: bigint;
}
export interface MsgAcceptRentalResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptRentalResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptRentalResponse returns the rental end.
 * @name MsgAcceptRentalResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptRentalResponse
 */
export interface MsgAcceptRentalResponseAmino {
  expires_at?: string;
}
export interface MsgAcceptRentalResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAcceptRentalResponse";
  value: MsgAcceptRentalResponseAmino;
}
/**
 * MsgEndRental ends a rental: the renter at any time, the owner when the
 * offer allowed it or once it has expired.
 * @name MsgEndRental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgEndRental
 */
export interface MsgEndRental {
  signer: string;
  classId: bigint;
  tokenId: bigint;
}
export interface MsgEndRentalProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgEndRental";
  value: Uint8Array;
}
/**
 * MsgEndRental ends a rental: the renter at any time, the owner when the
 * offer allowed it or once it has expired.
 * @name MsgEndRentalAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgEndRental
 */
export interface MsgEndRentalAmino {
  signer?: string;
  class_id?: string;
  token_id?: string;
}
export interface MsgEndRentalAminoMsg {
  type: "sparkdream/x/artifact/MsgEndRental";
  value: MsgEndRentalAmino;
}
/**
 * MsgEndRentalResponse is empty.
 * @name MsgEndRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgEndRentalResponse
 */
export interface MsgEndRentalResponse {}
export interface MsgEndRentalResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgEndRentalResponse";
  value: Uint8Array;
}
/**
 * MsgEndRentalResponse is empty.
 * @name MsgEndRentalResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgEndRentalResponse
 */
export interface MsgEndRentalResponseAmino {}
export interface MsgEndRentalResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgEndRentalResponse";
  value: MsgEndRentalResponseAmino;
}
/**
 * MsgNest places a token (with anything nested in it) inside another token
 * the signer owns. The child is NESTED-locked and moves with its parent.
 * @name MsgNest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgNest
 */
export interface MsgNest {
  owner: string;
  child: TokenRef;
  parent: TokenRef;
}
export interface MsgNestProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgNest";
  value: Uint8Array;
}
/**
 * MsgNest places a token (with anything nested in it) inside another token
 * the signer owns. The child is NESTED-locked and moves with its parent.
 * @name MsgNestAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgNest
 */
export interface MsgNestAmino {
  owner?: string;
  child?: TokenRefAmino;
  parent?: TokenRefAmino;
}
export interface MsgNestAminoMsg {
  type: "sparkdream/x/artifact/MsgNest";
  value: MsgNestAmino;
}
/**
 * MsgNestResponse is empty.
 * @name MsgNestResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgNestResponse
 */
export interface MsgNestResponse {}
export interface MsgNestResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgNestResponse";
  value: Uint8Array;
}
/**
 * MsgNestResponse is empty.
 * @name MsgNestResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgNestResponse
 */
export interface MsgNestResponseAmino {}
export interface MsgNestResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgNestResponse";
  value: MsgNestResponseAmino;
}
/**
 * MsgDetach takes a nested token (and its own children) out of its parent.
 * @name MsgDetach
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDetach
 */
export interface MsgDetach {
  owner: string;
  child: TokenRef;
}
export interface MsgDetachProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDetach";
  value: Uint8Array;
}
/**
 * MsgDetach takes a nested token (and its own children) out of its parent.
 * @name MsgDetachAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDetach
 */
export interface MsgDetachAmino {
  owner?: string;
  child?: TokenRefAmino;
}
export interface MsgDetachAminoMsg {
  type: "sparkdream/x/artifact/MsgDetach";
  value: MsgDetachAmino;
}
/**
 * MsgDetachResponse is empty.
 * @name MsgDetachResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDetachResponse
 */
export interface MsgDetachResponse {}
export interface MsgDetachResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgDetachResponse";
  value: Uint8Array;
}
/**
 * MsgDetachResponse is empty.
 * @name MsgDetachResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDetachResponse
 */
export interface MsgDetachResponseAmino {}
export interface MsgDetachResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgDetachResponse";
  value: MsgDetachResponseAmino;
}
/**
 * MsgSetHarbergerPrice self-assesses a Harberger token's price and names
 * the x/session RecurringPull that pays its tax.
 * @name MsgSetHarbergerPrice
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetHarbergerPrice
 */
export interface MsgSetHarbergerPrice {
  owner: string;
  classId: bigint;
  tokenId: bigint;
  /**
   * Bond denom; 0 abandons the token (anyone may take it for free).
   */
  price: string;
  /**
   * RecurringPull granted by the owner to the artifact module address,
   * paying at least the tax per period; 0 with a zero price.
   */
  grantId: bigint;
}
export interface MsgSetHarbergerPriceProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPrice";
  value: Uint8Array;
}
/**
 * MsgSetHarbergerPrice self-assesses a Harberger token's price and names
 * the x/session RecurringPull that pays its tax.
 * @name MsgSetHarbergerPriceAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetHarbergerPrice
 */
export interface MsgSetHarbergerPriceAmino {
  owner?: string;
  class_id?: string;
  token_id?: string;
  /**
   * Bond denom; 0 abandons the token (anyone may take it for free).
   */
  price?: string;
  /**
   * RecurringPull granted by the owner to the artifact module address,
   * paying at least the tax per period; 0 with a zero price.
   */
  grant_id?: string;
}
export interface MsgSetHarbergerPriceAminoMsg {
  type: "sparkdream/x/artifact/MsgSetHarbergerPrice";
  value: MsgSetHarbergerPriceAmino;
}
/**
 * MsgSetHarbergerPriceResponse returns the tax per period.
 * @name MsgSetHarbergerPriceResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetHarbergerPriceResponse
 */
export interface MsgSetHarbergerPriceResponse {
  taxPerPeriod: string;
}
export interface MsgSetHarbergerPriceResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPriceResponse";
  value: Uint8Array;
}
/**
 * MsgSetHarbergerPriceResponse returns the tax per period.
 * @name MsgSetHarbergerPriceResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetHarbergerPriceResponse
 */
export interface MsgSetHarbergerPriceResponseAmino {
  tax_per_period?: string;
}
export interface MsgSetHarbergerPriceResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSetHarbergerPriceResponse";
  value: MsgSetHarbergerPriceResponseAmino;
}
/**
 * MsgForceBuy buys a Harberger token at its current price, with or without
 * the holder's consent.
 * @name MsgForceBuy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgForceBuy
 */
export interface MsgForceBuy {
  buyer: string;
  classId: bigint;
  tokenId: bigint;
  /**
   * Reject if the current price is higher.
   */
  maxPrice: Coin;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expectedMetadataHash: string;
}
export interface MsgForceBuyProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgForceBuy";
  value: Uint8Array;
}
/**
 * MsgForceBuy buys a Harberger token at its current price, with or without
 * the holder's consent.
 * @name MsgForceBuyAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgForceBuy
 */
export interface MsgForceBuyAmino {
  buyer?: string;
  class_id?: string;
  token_id?: string;
  /**
   * Reject if the current price is higher.
   */
  max_price: CoinAmino;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expected_metadata_hash?: string;
}
export interface MsgForceBuyAminoMsg {
  type: "sparkdream/x/artifact/MsgForceBuy";
  value: MsgForceBuyAmino;
}
/**
 * MsgForceBuyResponse reports the settlement split.
 * @name MsgForceBuyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgForceBuyResponse
 */
export interface MsgForceBuyResponse {
  price: string;
  fee: string;
  royalty: string;
  proceeds: string;
}
export interface MsgForceBuyResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgForceBuyResponse";
  value: Uint8Array;
}
/**
 * MsgForceBuyResponse reports the settlement split.
 * @name MsgForceBuyResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgForceBuyResponse
 */
export interface MsgForceBuyResponseAmino {
  price?: string;
  fee?: string;
  royalty?: string;
  proceeds?: string;
}
export interface MsgForceBuyResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgForceBuyResponse";
  value: MsgForceBuyResponseAmino;
}
/**
 * MsgUpdateUnitListing changes a unit listing's price, quantity and
 * duration. The listed units are re-locked to the new quantity.
 * @name MsgUpdateUnitListing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateUnitListing
 */
export interface MsgUpdateUnitListing {
  seller: string;
  listingId: bigint;
  quantity: bigint;
  unitPrice: Coin;
  /**
   * Seconds from now.
   */
  duration: bigint;
}
export interface MsgUpdateUnitListingProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListing";
  value: Uint8Array;
}
/**
 * MsgUpdateUnitListing changes a unit listing's price, quantity and
 * duration. The listed units are re-locked to the new quantity.
 * @name MsgUpdateUnitListingAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateUnitListing
 */
export interface MsgUpdateUnitListingAmino {
  seller?: string;
  listing_id?: string;
  quantity?: string;
  unit_price: CoinAmino;
  /**
   * Seconds from now.
   */
  duration?: string;
}
export interface MsgUpdateUnitListingAminoMsg {
  type: "sparkdream/x/artifact/MsgUpdateUnitListing";
  value: MsgUpdateUnitListingAmino;
}
/**
 * MsgUpdateUnitListingResponse is empty.
 * @name MsgUpdateUnitListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateUnitListingResponse
 */
export interface MsgUpdateUnitListingResponse {}
export interface MsgUpdateUnitListingResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListingResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateUnitListingResponse is empty.
 * @name MsgUpdateUnitListingResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateUnitListingResponse
 */
export interface MsgUpdateUnitListingResponseAmino {}
export interface MsgUpdateUnitListingResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgUpdateUnitListingResponse";
  value: MsgUpdateUnitListingResponseAmino;
}
/**
 * MsgMakeOffer escrows a SPARK offer for a token (token_id set) or for any
 * token of a class (token_id 0).
 * @name MsgMakeOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMakeOffer
 */
export interface MsgMakeOffer {
  bidder: string;
  classId: bigint;
  /**
   * 0 = a collection offer: any token of the class.
   */
  tokenId: bigint;
  price: Coin;
  /**
   * Seconds the offer stays open.
   */
  duration: bigint;
  /**
   * Token offers only, optional.
   */
  expectedMetadataHash: string;
  /**
   * Token offers only: required when the token holds nested tokens.
   */
  expectedContentsHash: string;
}
export interface MsgMakeOfferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgMakeOffer";
  value: Uint8Array;
}
/**
 * MsgMakeOffer escrows a SPARK offer for a token (token_id set) or for any
 * token of a class (token_id 0).
 * @name MsgMakeOfferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMakeOffer
 */
export interface MsgMakeOfferAmino {
  bidder?: string;
  class_id?: string;
  /**
   * 0 = a collection offer: any token of the class.
   */
  token_id?: string;
  price: CoinAmino;
  /**
   * Seconds the offer stays open.
   */
  duration?: string;
  /**
   * Token offers only, optional.
   */
  expected_metadata_hash?: string;
  /**
   * Token offers only: required when the token holds nested tokens.
   */
  expected_contents_hash?: string;
}
export interface MsgMakeOfferAminoMsg {
  type: "sparkdream/x/artifact/MsgMakeOffer";
  value: MsgMakeOfferAmino;
}
/**
 * MsgMakeOfferResponse returns the offer id.
 * @name MsgMakeOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMakeOfferResponse
 */
export interface MsgMakeOfferResponse {
  offerId: bigint;
}
export interface MsgMakeOfferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgMakeOfferResponse";
  value: Uint8Array;
}
/**
 * MsgMakeOfferResponse returns the offer id.
 * @name MsgMakeOfferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMakeOfferResponse
 */
export interface MsgMakeOfferResponseAmino {
  offer_id?: string;
}
export interface MsgMakeOfferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgMakeOfferResponse";
  value: MsgMakeOfferResponseAmino;
}
/**
 * MsgCancelOffer withdraws an offer and refunds its escrow.
 * @name MsgCancelOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOffer
 */
export interface MsgCancelOffer {
  bidder: string;
  offerId: bigint;
}
export interface MsgCancelOfferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOffer";
  value: Uint8Array;
}
/**
 * MsgCancelOffer withdraws an offer and refunds its escrow.
 * @name MsgCancelOfferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOffer
 */
export interface MsgCancelOfferAmino {
  bidder?: string;
  offer_id?: string;
}
export interface MsgCancelOfferAminoMsg {
  type: "sparkdream/x/artifact/MsgCancelOffer";
  value: MsgCancelOfferAmino;
}
/**
 * MsgCancelOfferResponse is empty.
 * @name MsgCancelOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOfferResponse
 */
export interface MsgCancelOfferResponse {}
export interface MsgCancelOfferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOfferResponse";
  value: Uint8Array;
}
/**
 * MsgCancelOfferResponse is empty.
 * @name MsgCancelOfferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOfferResponse
 */
export interface MsgCancelOfferResponseAmino {}
export interface MsgCancelOfferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCancelOfferResponse";
  value: MsgCancelOfferResponseAmino;
}
/**
 * MsgAcceptOffer sells a token the signer holds to an offer's bidder.
 * @name MsgAcceptOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptOffer
 */
export interface MsgAcceptOffer {
  seller: string;
  offerId: bigint;
  /**
   * The token sold; required for a collection offer, and must match a
   * token offer's token.
   */
  tokenId: bigint;
  /**
   * Must equal the offer's price exactly.
   */
  expectedPrice: Coin;
}
export interface MsgAcceptOfferProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptOffer";
  value: Uint8Array;
}
/**
 * MsgAcceptOffer sells a token the signer holds to an offer's bidder.
 * @name MsgAcceptOfferAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptOffer
 */
export interface MsgAcceptOfferAmino {
  seller?: string;
  offer_id?: string;
  /**
   * The token sold; required for a collection offer, and must match a
   * token offer's token.
   */
  token_id?: string;
  /**
   * Must equal the offer's price exactly.
   */
  expected_price: CoinAmino;
}
export interface MsgAcceptOfferAminoMsg {
  type: "sparkdream/x/artifact/MsgAcceptOffer";
  value: MsgAcceptOfferAmino;
}
/**
 * MsgAcceptOfferResponse reports the settlement split.
 * @name MsgAcceptOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptOfferResponse
 */
export interface MsgAcceptOfferResponse {
  fee: string;
  royalty: string;
  proceeds: string;
}
export interface MsgAcceptOfferResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptOfferResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptOfferResponse reports the settlement split.
 * @name MsgAcceptOfferResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptOfferResponse
 */
export interface MsgAcceptOfferResponseAmino {
  fee?: string;
  royalty?: string;
  proceeds?: string;
}
export interface MsgAcceptOfferResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgAcceptOfferResponse";
  value: MsgAcceptOfferResponseAmino;
}
/**
 * MsgStartAuction puts a token up for an English auction.
 * @name MsgStartAuction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgStartAuction
 */
export interface MsgStartAuction {
  seller: string;
  classId: bigint;
  tokenId: bigint;
  reservePrice: Coin;
  /**
   * Basis points each bid must beat the last by; 0 = any higher bid.
   */
  minIncrementBps: number;
  /**
   * Seconds.
   */
  duration: bigint;
}
export interface MsgStartAuctionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgStartAuction";
  value: Uint8Array;
}
/**
 * MsgStartAuction puts a token up for an English auction.
 * @name MsgStartAuctionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgStartAuction
 */
export interface MsgStartAuctionAmino {
  seller?: string;
  class_id?: string;
  token_id?: string;
  reserve_price: CoinAmino;
  /**
   * Basis points each bid must beat the last by; 0 = any higher bid.
   */
  min_increment_bps?: number;
  /**
   * Seconds.
   */
  duration?: string;
}
export interface MsgStartAuctionAminoMsg {
  type: "sparkdream/x/artifact/MsgStartAuction";
  value: MsgStartAuctionAmino;
}
/**
 * MsgStartAuctionResponse returns the auction id.
 * @name MsgStartAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgStartAuctionResponse
 */
export interface MsgStartAuctionResponse {
  auctionId: bigint;
}
export interface MsgStartAuctionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgStartAuctionResponse";
  value: Uint8Array;
}
/**
 * MsgStartAuctionResponse returns the auction id.
 * @name MsgStartAuctionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgStartAuctionResponse
 */
export interface MsgStartAuctionResponseAmino {
  auction_id?: string;
}
export interface MsgStartAuctionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgStartAuctionResponse";
  value: MsgStartAuctionResponseAmino;
}
/**
 * MsgBid places an escrowed bid; the previous high bid is refunded.
 * @name MsgBid
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBid
 */
export interface MsgBid {
  bidder: string;
  auctionId: bigint;
  amount: Coin;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expectedMetadataHash: string;
  /**
   * Required when the token holds nested tokens.
   */
  expectedContentsHash: string;
}
export interface MsgBidProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBid";
  value: Uint8Array;
}
/**
 * MsgBid places an escrowed bid; the previous high bid is refunded.
 * @name MsgBidAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBid
 */
export interface MsgBidAmino {
  bidder?: string;
  auction_id?: string;
  amount: CoinAmino;
  /**
   * Optional; must equal the token's current metadata hash if set.
   */
  expected_metadata_hash?: string;
  /**
   * Required when the token holds nested tokens.
   */
  expected_contents_hash?: string;
}
export interface MsgBidAminoMsg {
  type: "sparkdream/x/artifact/MsgBid";
  value: MsgBidAmino;
}
/**
 * MsgBidResponse returns when the auction now ends.
 * @name MsgBidResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBidResponse
 */
export interface MsgBidResponse {
  endsAt: bigint;
}
export interface MsgBidResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgBidResponse";
  value: Uint8Array;
}
/**
 * MsgBidResponse returns when the auction now ends.
 * @name MsgBidResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBidResponse
 */
export interface MsgBidResponseAmino {
  ends_at?: string;
}
export interface MsgBidResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgBidResponse";
  value: MsgBidResponseAmino;
}
/**
 * MsgSettleAuction settles an ended auction (anyone may sign).
 * @name MsgSettleAuction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSettleAuction
 */
export interface MsgSettleAuction {
  signer: string;
  auctionId: bigint;
}
export interface MsgSettleAuctionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSettleAuction";
  value: Uint8Array;
}
/**
 * MsgSettleAuction settles an ended auction (anyone may sign).
 * @name MsgSettleAuctionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSettleAuction
 */
export interface MsgSettleAuctionAmino {
  signer?: string;
  auction_id?: string;
}
export interface MsgSettleAuctionAminoMsg {
  type: "sparkdream/x/artifact/MsgSettleAuction";
  value: MsgSettleAuctionAmino;
}
/**
 * MsgSettleAuctionResponse reports whether the token was sold.
 * @name MsgSettleAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSettleAuctionResponse
 */
export interface MsgSettleAuctionResponse {
  sold: boolean;
}
export interface MsgSettleAuctionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgSettleAuctionResponse";
  value: Uint8Array;
}
/**
 * MsgSettleAuctionResponse reports whether the token was sold.
 * @name MsgSettleAuctionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSettleAuctionResponse
 */
export interface MsgSettleAuctionResponseAmino {
  sold?: boolean;
}
export interface MsgSettleAuctionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgSettleAuctionResponse";
  value: MsgSettleAuctionResponseAmino;
}
/**
 * MsgCancelAuction withdraws an auction that has no bids.
 * @name MsgCancelAuction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelAuction
 */
export interface MsgCancelAuction {
  seller: string;
  auctionId: bigint;
}
export interface MsgCancelAuctionProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelAuction";
  value: Uint8Array;
}
/**
 * MsgCancelAuction withdraws an auction that has no bids.
 * @name MsgCancelAuctionAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelAuction
 */
export interface MsgCancelAuctionAmino {
  seller?: string;
  auction_id?: string;
}
export interface MsgCancelAuctionAminoMsg {
  type: "sparkdream/x/artifact/MsgCancelAuction";
  value: MsgCancelAuctionAmino;
}
/**
 * MsgCancelAuctionResponse is empty.
 * @name MsgCancelAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelAuctionResponse
 */
export interface MsgCancelAuctionResponse {}
export interface MsgCancelAuctionResponseProtoMsg {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelAuctionResponse";
  value: Uint8Array;
}
/**
 * MsgCancelAuctionResponse is empty.
 * @name MsgCancelAuctionResponseAmino
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelAuctionResponse
 */
export interface MsgCancelAuctionResponseAmino {}
export interface MsgCancelAuctionResponseAminoMsg {
  type: "/sparkdream.artifact.v1.MsgCancelAuctionResponse";
  value: MsgCancelAuctionResponseAmino;
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
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/artifact/MsgUpdateParams",
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
      type: "sparkdream/x/artifact/MsgUpdateParams",
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
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
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
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    creator: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    tokenUriBase: "",
    flags: ClassFlags.fromPartial({}),
    maxSupply: BigInt(0),
    mintPolicy: MintPolicy.fromPartial({}),
    payoutAddress: "",
    royaltyBps: 0,
    royaltyRecipients: [],
    minters: [],
    acceptedContentLicense: "",
    expiry: ExpiryPolicy.fromPartial({}),
    reveal: RevealPolicy.fromPartial({}),
    renderer: Renderer.fromPartial({}),
    tokenModel: 0,
    harberger: HarbergerPolicy.fromPartial({})
  };
}
/**
 * MsgCreateClass creates a class.
 * @name MsgCreateClass
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateClass
 */
export const MsgCreateClass = {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
  aminoType: "sparkdream/x/artifact/MsgCreateClass",
  encode(message: MsgCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.tokenUriBase !== "") {
      writer.uint32(58).string(message.tokenUriBase);
    }
    if (message.flags !== undefined) {
      ClassFlags.encode(message.flags, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxSupply !== BigInt(0)) {
      writer.uint32(72).uint64(message.maxSupply);
    }
    if (message.mintPolicy !== undefined) {
      MintPolicy.encode(message.mintPolicy, writer.uint32(82).fork()).ldelim();
    }
    if (message.payoutAddress !== "") {
      writer.uint32(90).string(message.payoutAddress);
    }
    if (message.royaltyBps !== 0) {
      writer.uint32(96).uint32(message.royaltyBps);
    }
    for (const v of message.royaltyRecipients) {
      RoyaltyShare.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.minters) {
      writer.uint32(114).string(v!);
    }
    if (message.acceptedContentLicense !== "") {
      writer.uint32(122).string(message.acceptedContentLicense);
    }
    if (message.expiry !== undefined) {
      ExpiryPolicy.encode(message.expiry, writer.uint32(130).fork()).ldelim();
    }
    if (message.reveal !== undefined) {
      RevealPolicy.encode(message.reveal, writer.uint32(138).fork()).ldelim();
    }
    if (message.renderer !== undefined) {
      Renderer.encode(message.renderer, writer.uint32(146).fork()).ldelim();
    }
    if (message.tokenModel !== 0) {
      writer.uint32(152).int32(message.tokenModel);
    }
    if (message.harberger !== undefined) {
      HarbergerPolicy.encode(message.harberger, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.tokenUriBase = reader.string();
          break;
        case 8:
          message.flags = ClassFlags.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxSupply = reader.uint64();
          break;
        case 10:
          message.mintPolicy = MintPolicy.decode(reader, reader.uint32());
          break;
        case 11:
          message.payoutAddress = reader.string();
          break;
        case 12:
          message.royaltyBps = reader.uint32();
          break;
        case 13:
          message.royaltyRecipients.push(RoyaltyShare.decode(reader, reader.uint32()));
          break;
        case 14:
          message.minters.push(reader.string());
          break;
        case 15:
          message.acceptedContentLicense = reader.string();
          break;
        case 16:
          message.expiry = ExpiryPolicy.decode(reader, reader.uint32());
          break;
        case 17:
          message.reveal = RevealPolicy.decode(reader, reader.uint32());
          break;
        case 18:
          message.renderer = Renderer.decode(reader, reader.uint32());
          break;
        case 19:
          message.tokenModel = reader.int32() as any;
          break;
        case 20:
          message.harberger = HarbergerPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.tokenUriBase = object.tokenUriBase ?? "";
    message.flags = object.flags !== undefined && object.flags !== null ? ClassFlags.fromPartial(object.flags) : undefined;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.mintPolicy = object.mintPolicy !== undefined && object.mintPolicy !== null ? MintPolicy.fromPartial(object.mintPolicy) : undefined;
    message.payoutAddress = object.payoutAddress ?? "";
    message.royaltyBps = object.royaltyBps ?? 0;
    message.royaltyRecipients = object.royaltyRecipients?.map(e => RoyaltyShare.fromPartial(e)) || [];
    message.minters = object.minters?.map(e => e) || [];
    message.acceptedContentLicense = object.acceptedContentLicense ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? ExpiryPolicy.fromPartial(object.expiry) : undefined;
    message.reveal = object.reveal !== undefined && object.reveal !== null ? RevealPolicy.fromPartial(object.reveal) : undefined;
    message.renderer = object.renderer !== undefined && object.renderer !== null ? Renderer.fromPartial(object.renderer) : undefined;
    message.tokenModel = object.tokenModel ?? 0;
    message.harberger = object.harberger !== undefined && object.harberger !== null ? HarbergerPolicy.fromPartial(object.harberger) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateClassAmino): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.token_uri_base !== undefined && object.token_uri_base !== null) {
      message.tokenUriBase = object.token_uri_base;
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = ClassFlags.fromAmino(object.flags);
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = BigInt(object.max_supply);
    }
    if (object.mint_policy !== undefined && object.mint_policy !== null) {
      message.mintPolicy = MintPolicy.fromAmino(object.mint_policy);
    }
    if (object.payout_address !== undefined && object.payout_address !== null) {
      message.payoutAddress = object.payout_address;
    }
    if (object.royalty_bps !== undefined && object.royalty_bps !== null) {
      message.royaltyBps = object.royalty_bps;
    }
    message.royaltyRecipients = object.royalty_recipients?.map(e => RoyaltyShare.fromAmino(e)) || [];
    message.minters = object.minters?.map(e => e) || [];
    if (object.accepted_content_license !== undefined && object.accepted_content_license !== null) {
      message.acceptedContentLicense = object.accepted_content_license;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = ExpiryPolicy.fromAmino(object.expiry);
    }
    if (object.reveal !== undefined && object.reveal !== null) {
      message.reveal = RevealPolicy.fromAmino(object.reveal);
    }
    if (object.renderer !== undefined && object.renderer !== null) {
      message.renderer = Renderer.fromAmino(object.renderer);
    }
    if (object.token_model !== undefined && object.token_model !== null) {
      message.tokenModel = object.token_model;
    }
    if (object.harberger !== undefined && object.harberger !== null) {
      message.harberger = HarbergerPolicy.fromAmino(object.harberger);
    }
    return message;
  },
  toAmino(message: MsgCreateClass): MsgCreateClassAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.token_uri_base = message.tokenUriBase === "" ? undefined : message.tokenUriBase;
    obj.flags = message.flags ? ClassFlags.toAmino(message.flags) : ClassFlags.toAmino(ClassFlags.fromPartial({}));
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
    obj.mint_policy = message.mintPolicy ? MintPolicy.toAmino(message.mintPolicy) : MintPolicy.toAmino(MintPolicy.fromPartial({}));
    obj.payout_address = message.payoutAddress === "" ? undefined : message.payoutAddress;
    obj.royalty_bps = message.royaltyBps === 0 ? undefined : message.royaltyBps;
    if (message.royaltyRecipients) {
      obj.royalty_recipients = message.royaltyRecipients.map(e => e ? RoyaltyShare.toAmino(e) : undefined);
    } else {
      obj.royalty_recipients = message.royaltyRecipients;
    }
    if (message.minters) {
      obj.minters = message.minters.map(e => e);
    } else {
      obj.minters = message.minters;
    }
    obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
    obj.expiry = message.expiry ? ExpiryPolicy.toAmino(message.expiry) : ExpiryPolicy.toAmino(ExpiryPolicy.fromPartial({}));
    obj.reveal = message.reveal ? RevealPolicy.toAmino(message.reveal) : RevealPolicy.toAmino(RevealPolicy.fromPartial({}));
    obj.renderer = message.renderer ? Renderer.toAmino(message.renderer) : Renderer.toAmino(Renderer.fromPartial({}));
    obj.token_model = message.tokenModel === 0 ? undefined : message.tokenModel;
    obj.harberger = message.harberger ? HarbergerPolicy.toAmino(message.harberger) : HarbergerPolicy.toAmino(HarbergerPolicy.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass {
    return MsgCreateClass.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClass): MsgCreateClassAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCreateClass",
      value: MsgCreateClass.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass {
    return MsgCreateClass.decode(message.value);
  },
  toProto(message: MsgCreateClass): Uint8Array {
    return MsgCreateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
      value: MsgCreateClass.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    classId: BigInt(0)
  };
}
/**
 * MsgCreateClassResponse returns the new class id.
 * @name MsgCreateClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateClassResponse
 */
export const MsgCreateClassResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateClassResponse",
  encode(message: MsgCreateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.decode(message.value);
  },
  toProto(message: MsgCreateClassResponse): Uint8Array {
    return MsgCreateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCreateClassResponse",
      value: MsgCreateClassResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClass(): MsgUpdateClass {
  return {
    owner: "",
    classId: BigInt(0),
    name: "",
    description: "",
    uri: "",
    uriHash: "",
    tokenUriBase: "",
    payoutAddress: "",
    royaltyRecipients: [],
    royaltyBps: 0,
    updateMask: []
  };
}
/**
 * MsgUpdateClass edits the fields named in update_mask.
 * @name MsgUpdateClass
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateClass
 */
export const MsgUpdateClass = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
  aminoType: "sparkdream/x/artifact/MsgUpdateClass",
  encode(message: MsgUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.tokenUriBase !== "") {
      writer.uint32(58).string(message.tokenUriBase);
    }
    if (message.payoutAddress !== "") {
      writer.uint32(66).string(message.payoutAddress);
    }
    for (const v of message.royaltyRecipients) {
      RoyaltyShare.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.royaltyBps !== 0) {
      writer.uint32(80).uint32(message.royaltyBps);
    }
    for (const v of message.updateMask) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.tokenUriBase = reader.string();
          break;
        case 8:
          message.payoutAddress = reader.string();
          break;
        case 9:
          message.royaltyRecipients.push(RoyaltyShare.decode(reader, reader.uint32()));
          break;
        case 10:
          message.royaltyBps = reader.uint32();
          break;
        case 11:
          message.updateMask.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.tokenUriBase = object.tokenUriBase ?? "";
    message.payoutAddress = object.payoutAddress ?? "";
    message.royaltyRecipients = object.royaltyRecipients?.map(e => RoyaltyShare.fromPartial(e)) || [];
    message.royaltyBps = object.royaltyBps ?? 0;
    message.updateMask = object.updateMask?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateClassAmino): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.token_uri_base !== undefined && object.token_uri_base !== null) {
      message.tokenUriBase = object.token_uri_base;
    }
    if (object.payout_address !== undefined && object.payout_address !== null) {
      message.payoutAddress = object.payout_address;
    }
    message.royaltyRecipients = object.royalty_recipients?.map(e => RoyaltyShare.fromAmino(e)) || [];
    if (object.royalty_bps !== undefined && object.royalty_bps !== null) {
      message.royaltyBps = object.royalty_bps;
    }
    message.updateMask = object.update_mask?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateClass): MsgUpdateClassAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.token_uri_base = message.tokenUriBase === "" ? undefined : message.tokenUriBase;
    obj.payout_address = message.payoutAddress === "" ? undefined : message.payoutAddress;
    if (message.royaltyRecipients) {
      obj.royalty_recipients = message.royaltyRecipients.map(e => e ? RoyaltyShare.toAmino(e) : undefined);
    } else {
      obj.royalty_recipients = message.royaltyRecipients;
    }
    obj.royalty_bps = message.royaltyBps === 0 ? undefined : message.royaltyBps;
    if (message.updateMask) {
      obj.update_mask = message.updateMask.map(e => e);
    } else {
      obj.update_mask = message.updateMask;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAminoMsg): MsgUpdateClass {
    return MsgUpdateClass.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClass): MsgUpdateClassAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgUpdateClass",
      value: MsgUpdateClass.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClassProtoMsg): MsgUpdateClass {
    return MsgUpdateClass.decode(message.value);
  },
  toProto(message: MsgUpdateClass): Uint8Array {
    return MsgUpdateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClass): MsgUpdateClassProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
      value: MsgUpdateClass.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassResponse(): MsgUpdateClassResponse {
  return {};
}
/**
 * MsgUpdateClassResponse is empty.
 * @name MsgUpdateClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateClassResponse
 */
export const MsgUpdateClassResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateClassResponse",
  encode(_: MsgUpdateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateClassResponse>): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassResponseAmino): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassResponse): MsgUpdateClassResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassResponseAminoMsg): MsgUpdateClassResponse {
    return MsgUpdateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassResponseProtoMsg): MsgUpdateClassResponse {
    return MsgUpdateClassResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassResponse): Uint8Array {
    return MsgUpdateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassResponse): MsgUpdateClassResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateClassResponse",
      value: MsgUpdateClassResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeClassMetadata(): MsgFreezeClassMetadata {
  return {
    owner: "",
    classId: BigInt(0)
  };
}
/**
 * MsgFreezeClassMetadata freezes class (and all token) metadata.
 * @name MsgFreezeClassMetadata
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeClassMetadata
 */
export const MsgFreezeClassMetadata = {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
  aminoType: "sparkdream/x/artifact/MsgFreezeClassMetadata",
  encode(message: MsgFreezeClassMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeClassMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeClassMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFreezeClassMetadata>): MsgFreezeClassMetadata {
    const message = createBaseMsgFreezeClassMetadata();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgFreezeClassMetadataAmino): MsgFreezeClassMetadata {
    const message = createBaseMsgFreezeClassMetadata();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgFreezeClassMetadata): MsgFreezeClassMetadataAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFreezeClassMetadataAminoMsg): MsgFreezeClassMetadata {
    return MsgFreezeClassMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFreezeClassMetadata): MsgFreezeClassMetadataAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgFreezeClassMetadata",
      value: MsgFreezeClassMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFreezeClassMetadataProtoMsg): MsgFreezeClassMetadata {
    return MsgFreezeClassMetadata.decode(message.value);
  },
  toProto(message: MsgFreezeClassMetadata): Uint8Array {
    return MsgFreezeClassMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeClassMetadata): MsgFreezeClassMetadataProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
      value: MsgFreezeClassMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeClassMetadataResponse(): MsgFreezeClassMetadataResponse {
  return {};
}
/**
 * MsgFreezeClassMetadataResponse is empty.
 * @name MsgFreezeClassMetadataResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeClassMetadataResponse
 */
export const MsgFreezeClassMetadataResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadataResponse",
  encode(_: MsgFreezeClassMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeClassMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeClassMetadataResponse();
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
  fromPartial(_: DeepPartial<MsgFreezeClassMetadataResponse>): MsgFreezeClassMetadataResponse {
    const message = createBaseMsgFreezeClassMetadataResponse();
    return message;
  },
  fromAmino(_: MsgFreezeClassMetadataResponseAmino): MsgFreezeClassMetadataResponse {
    const message = createBaseMsgFreezeClassMetadataResponse();
    return message;
  },
  toAmino(_: MsgFreezeClassMetadataResponse): MsgFreezeClassMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFreezeClassMetadataResponseAminoMsg): MsgFreezeClassMetadataResponse {
    return MsgFreezeClassMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeClassMetadataResponseProtoMsg): MsgFreezeClassMetadataResponse {
    return MsgFreezeClassMetadataResponse.decode(message.value);
  },
  toProto(message: MsgFreezeClassMetadataResponse): Uint8Array {
    return MsgFreezeClassMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeClassMetadataResponse): MsgFreezeClassMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadataResponse",
      value: MsgFreezeClassMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintPolicy(): MsgSetMintPolicy {
  return {
    owner: "",
    classId: BigInt(0),
    mintPolicy: MintPolicy.fromPartial({})
  };
}
/**
 * MsgSetMintPolicy replaces the class mint policy.
 * @name MsgSetMintPolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintPolicy
 */
export const MsgSetMintPolicy = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
  aminoType: "sparkdream/x/artifact/MsgSetMintPolicy",
  encode(message: MsgSetMintPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.mintPolicy !== undefined) {
      MintPolicy.encode(message.mintPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMintPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.mintPolicy = MintPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetMintPolicy>): MsgSetMintPolicy {
    const message = createBaseMsgSetMintPolicy();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.mintPolicy = object.mintPolicy !== undefined && object.mintPolicy !== null ? MintPolicy.fromPartial(object.mintPolicy) : undefined;
    return message;
  },
  fromAmino(object: MsgSetMintPolicyAmino): MsgSetMintPolicy {
    const message = createBaseMsgSetMintPolicy();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.mint_policy !== undefined && object.mint_policy !== null) {
      message.mintPolicy = MintPolicy.fromAmino(object.mint_policy);
    }
    return message;
  },
  toAmino(message: MsgSetMintPolicy): MsgSetMintPolicyAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.mint_policy = message.mintPolicy ? MintPolicy.toAmino(message.mintPolicy) : MintPolicy.toAmino(MintPolicy.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgSetMintPolicyAminoMsg): MsgSetMintPolicy {
    return MsgSetMintPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMintPolicy): MsgSetMintPolicyAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSetMintPolicy",
      value: MsgSetMintPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMintPolicyProtoMsg): MsgSetMintPolicy {
    return MsgSetMintPolicy.decode(message.value);
  },
  toProto(message: MsgSetMintPolicy): Uint8Array {
    return MsgSetMintPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintPolicy): MsgSetMintPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
      value: MsgSetMintPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintPolicyResponse(): MsgSetMintPolicyResponse {
  return {};
}
/**
 * MsgSetMintPolicyResponse is empty.
 * @name MsgSetMintPolicyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintPolicyResponse
 */
export const MsgSetMintPolicyResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicyResponse",
  encode(_: MsgSetMintPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMintPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintPolicyResponse();
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
  fromPartial(_: DeepPartial<MsgSetMintPolicyResponse>): MsgSetMintPolicyResponse {
    const message = createBaseMsgSetMintPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetMintPolicyResponseAmino): MsgSetMintPolicyResponse {
    const message = createBaseMsgSetMintPolicyResponse();
    return message;
  },
  toAmino(_: MsgSetMintPolicyResponse): MsgSetMintPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMintPolicyResponseAminoMsg): MsgSetMintPolicyResponse {
    return MsgSetMintPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMintPolicyResponseProtoMsg): MsgSetMintPolicyResponse {
    return MsgSetMintPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetMintPolicyResponse): Uint8Array {
    return MsgSetMintPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintPolicyResponse): MsgSetMintPolicyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicyResponse",
      value: MsgSetMintPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMinters(): MsgSetMinters {
  return {
    owner: "",
    classId: BigInt(0),
    add: [],
    remove: []
  };
}
/**
 * MsgSetMinters adds and removes minters atomically.
 * @name MsgSetMinters
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMinters
 */
export const MsgSetMinters = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
  aminoType: "sparkdream/x/artifact/MsgSetMinters",
  encode(message: MsgSetMinters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    for (const v of message.add) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.remove) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMinters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.add.push(reader.string());
          break;
        case 4:
          message.remove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetMinters>): MsgSetMinters {
    const message = createBaseMsgSetMinters();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.add = object.add?.map(e => e) || [];
    message.remove = object.remove?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetMintersAmino): MsgSetMinters {
    const message = createBaseMsgSetMinters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    message.add = object.add?.map(e => e) || [];
    message.remove = object.remove?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetMinters): MsgSetMintersAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    if (message.add) {
      obj.add = message.add.map(e => e);
    } else {
      obj.add = message.add;
    }
    if (message.remove) {
      obj.remove = message.remove.map(e => e);
    } else {
      obj.remove = message.remove;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetMintersAminoMsg): MsgSetMinters {
    return MsgSetMinters.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMinters): MsgSetMintersAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSetMinters",
      value: MsgSetMinters.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMintersProtoMsg): MsgSetMinters {
    return MsgSetMinters.decode(message.value);
  },
  toProto(message: MsgSetMinters): Uint8Array {
    return MsgSetMinters.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinters): MsgSetMintersProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
      value: MsgSetMinters.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintersResponse(): MsgSetMintersResponse {
  return {};
}
/**
 * MsgSetMintersResponse is empty.
 * @name MsgSetMintersResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMintersResponse
 */
export const MsgSetMintersResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMintersResponse",
  encode(_: MsgSetMintersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMintersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintersResponse();
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
  fromPartial(_: DeepPartial<MsgSetMintersResponse>): MsgSetMintersResponse {
    const message = createBaseMsgSetMintersResponse();
    return message;
  },
  fromAmino(_: MsgSetMintersResponseAmino): MsgSetMintersResponse {
    const message = createBaseMsgSetMintersResponse();
    return message;
  },
  toAmino(_: MsgSetMintersResponse): MsgSetMintersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMintersResponseAminoMsg): MsgSetMintersResponse {
    return MsgSetMintersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMintersResponseProtoMsg): MsgSetMintersResponse {
    return MsgSetMintersResponse.decode(message.value);
  },
  toProto(message: MsgSetMintersResponse): Uint8Array {
    return MsgSetMintersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintersResponse): MsgSetMintersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetMintersResponse",
      value: MsgSetMintersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMaxSupply(): MsgSetMaxSupply {
  return {
    owner: "",
    classId: BigInt(0),
    maxSupply: BigInt(0),
    editionId: BigInt(0)
  };
}
/**
 * MsgSetMaxSupply lowers the supply cap or caps an unlimited class.
 * @name MsgSetMaxSupply
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMaxSupply
 */
export const MsgSetMaxSupply = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
  aminoType: "sparkdream/x/artifact/MsgSetMaxSupply",
  encode(message: MsgSetMaxSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.maxSupply !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxSupply);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(32).uint64(message.editionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.maxSupply = reader.uint64();
          break;
        case 4:
          message.editionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetMaxSupply>): MsgSetMaxSupply {
    const message = createBaseMsgSetMaxSupply();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetMaxSupplyAmino): MsgSetMaxSupply {
    const message = createBaseMsgSetMaxSupply();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = BigInt(object.max_supply);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    return message;
  },
  toAmino(message: MsgSetMaxSupply): MsgSetMaxSupplyAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxSupplyAminoMsg): MsgSetMaxSupply {
    return MsgSetMaxSupply.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMaxSupply): MsgSetMaxSupplyAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSetMaxSupply",
      value: MsgSetMaxSupply.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMaxSupplyProtoMsg): MsgSetMaxSupply {
    return MsgSetMaxSupply.decode(message.value);
  },
  toProto(message: MsgSetMaxSupply): Uint8Array {
    return MsgSetMaxSupply.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxSupply): MsgSetMaxSupplyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
      value: MsgSetMaxSupply.encode(message).finish()
    };
  }
};
function createBaseMsgSetMaxSupplyResponse(): MsgSetMaxSupplyResponse {
  return {};
}
/**
 * MsgSetMaxSupplyResponse is empty.
 * @name MsgSetMaxSupplyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetMaxSupplyResponse
 */
export const MsgSetMaxSupplyResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupplyResponse",
  encode(_: MsgSetMaxSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxSupplyResponse();
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
  fromPartial(_: DeepPartial<MsgSetMaxSupplyResponse>): MsgSetMaxSupplyResponse {
    const message = createBaseMsgSetMaxSupplyResponse();
    return message;
  },
  fromAmino(_: MsgSetMaxSupplyResponseAmino): MsgSetMaxSupplyResponse {
    const message = createBaseMsgSetMaxSupplyResponse();
    return message;
  },
  toAmino(_: MsgSetMaxSupplyResponse): MsgSetMaxSupplyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMaxSupplyResponseAminoMsg): MsgSetMaxSupplyResponse {
    return MsgSetMaxSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMaxSupplyResponseProtoMsg): MsgSetMaxSupplyResponse {
    return MsgSetMaxSupplyResponse.decode(message.value);
  },
  toProto(message: MsgSetMaxSupplyResponse): Uint8Array {
    return MsgSetMaxSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMaxSupplyResponse): MsgSetMaxSupplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupplyResponse",
      value: MsgSetMaxSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseMinting(): MsgCloseMinting {
  return {
    owner: "",
    classId: BigInt(0)
  };
}
/**
 * MsgCloseMinting permanently closes minting.
 * @name MsgCloseMinting
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCloseMinting
 */
export const MsgCloseMinting = {
  typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
  aminoType: "sparkdream/x/artifact/MsgCloseMinting",
  encode(message: MsgCloseMinting, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseMinting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseMinting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCloseMinting>): MsgCloseMinting {
    const message = createBaseMsgCloseMinting();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCloseMintingAmino): MsgCloseMinting {
    const message = createBaseMsgCloseMinting();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgCloseMinting): MsgCloseMintingAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseMintingAminoMsg): MsgCloseMinting {
    return MsgCloseMinting.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseMinting): MsgCloseMintingAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCloseMinting",
      value: MsgCloseMinting.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseMintingProtoMsg): MsgCloseMinting {
    return MsgCloseMinting.decode(message.value);
  },
  toProto(message: MsgCloseMinting): Uint8Array {
    return MsgCloseMinting.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseMinting): MsgCloseMintingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
      value: MsgCloseMinting.encode(message).finish()
    };
  }
};
function createBaseMsgCloseMintingResponse(): MsgCloseMintingResponse {
  return {};
}
/**
 * MsgCloseMintingResponse is empty.
 * @name MsgCloseMintingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCloseMintingResponse
 */
export const MsgCloseMintingResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCloseMintingResponse",
  encode(_: MsgCloseMintingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseMintingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseMintingResponse();
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
  fromPartial(_: DeepPartial<MsgCloseMintingResponse>): MsgCloseMintingResponse {
    const message = createBaseMsgCloseMintingResponse();
    return message;
  },
  fromAmino(_: MsgCloseMintingResponseAmino): MsgCloseMintingResponse {
    const message = createBaseMsgCloseMintingResponse();
    return message;
  },
  toAmino(_: MsgCloseMintingResponse): MsgCloseMintingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseMintingResponseAminoMsg): MsgCloseMintingResponse {
    return MsgCloseMintingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseMintingResponseProtoMsg): MsgCloseMintingResponse {
    return MsgCloseMintingResponse.decode(message.value);
  },
  toProto(message: MsgCloseMintingResponse): Uint8Array {
    return MsgCloseMintingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseMintingResponse): MsgCloseMintingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCloseMintingResponse",
      value: MsgCloseMintingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProposeClassOwner(): MsgProposeClassOwner {
  return {
    owner: "",
    classId: BigInt(0),
    proposedOwner: ""
  };
}
/**
 * MsgProposeClassOwner proposes a handover.
 * @name MsgProposeClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeClassOwner
 */
export const MsgProposeClassOwner = {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
  aminoType: "sparkdream/x/artifact/MsgProposeClassOwner",
  encode(message: MsgProposeClassOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.proposedOwner !== "") {
      writer.uint32(26).string(message.proposedOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeClassOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeClassOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.proposedOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeClassOwner>): MsgProposeClassOwner {
    const message = createBaseMsgProposeClassOwner();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.proposedOwner = object.proposedOwner ?? "";
    return message;
  },
  fromAmino(object: MsgProposeClassOwnerAmino): MsgProposeClassOwner {
    const message = createBaseMsgProposeClassOwner();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.proposed_owner !== undefined && object.proposed_owner !== null) {
      message.proposedOwner = object.proposed_owner;
    }
    return message;
  },
  toAmino(message: MsgProposeClassOwner): MsgProposeClassOwnerAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.proposed_owner = message.proposedOwner === "" ? undefined : message.proposedOwner;
    return obj;
  },
  fromAminoMsg(object: MsgProposeClassOwnerAminoMsg): MsgProposeClassOwner {
    return MsgProposeClassOwner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeClassOwner): MsgProposeClassOwnerAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgProposeClassOwner",
      value: MsgProposeClassOwner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProposeClassOwnerProtoMsg): MsgProposeClassOwner {
    return MsgProposeClassOwner.decode(message.value);
  },
  toProto(message: MsgProposeClassOwner): Uint8Array {
    return MsgProposeClassOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeClassOwner): MsgProposeClassOwnerProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
      value: MsgProposeClassOwner.encode(message).finish()
    };
  }
};
function createBaseMsgProposeClassOwnerResponse(): MsgProposeClassOwnerResponse {
  return {};
}
/**
 * MsgProposeClassOwnerResponse is empty.
 * @name MsgProposeClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeClassOwnerResponse
 */
export const MsgProposeClassOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwnerResponse",
  encode(_: MsgProposeClassOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeClassOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeClassOwnerResponse();
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
  fromPartial(_: DeepPartial<MsgProposeClassOwnerResponse>): MsgProposeClassOwnerResponse {
    const message = createBaseMsgProposeClassOwnerResponse();
    return message;
  },
  fromAmino(_: MsgProposeClassOwnerResponseAmino): MsgProposeClassOwnerResponse {
    const message = createBaseMsgProposeClassOwnerResponse();
    return message;
  },
  toAmino(_: MsgProposeClassOwnerResponse): MsgProposeClassOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProposeClassOwnerResponseAminoMsg): MsgProposeClassOwnerResponse {
    return MsgProposeClassOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeClassOwnerResponseProtoMsg): MsgProposeClassOwnerResponse {
    return MsgProposeClassOwnerResponse.decode(message.value);
  },
  toProto(message: MsgProposeClassOwnerResponse): Uint8Array {
    return MsgProposeClassOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeClassOwnerResponse): MsgProposeClassOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwnerResponse",
      value: MsgProposeClassOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptClassOwner(): MsgAcceptClassOwner {
  return {
    proposedOwner: "",
    classId: BigInt(0)
  };
}
/**
 * MsgAcceptClassOwner accepts a handover.
 * @name MsgAcceptClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptClassOwner
 */
export const MsgAcceptClassOwner = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
  aminoType: "sparkdream/x/artifact/MsgAcceptClassOwner",
  encode(message: MsgAcceptClassOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposedOwner !== "") {
      writer.uint32(10).string(message.proposedOwner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptClassOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptClassOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposedOwner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptClassOwner>): MsgAcceptClassOwner {
    const message = createBaseMsgAcceptClassOwner();
    message.proposedOwner = object.proposedOwner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAcceptClassOwnerAmino): MsgAcceptClassOwner {
    const message = createBaseMsgAcceptClassOwner();
    if (object.proposed_owner !== undefined && object.proposed_owner !== null) {
      message.proposedOwner = object.proposed_owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgAcceptClassOwner): MsgAcceptClassOwnerAmino {
    const obj: any = {};
    obj.proposed_owner = message.proposedOwner === "" ? undefined : message.proposedOwner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptClassOwnerAminoMsg): MsgAcceptClassOwner {
    return MsgAcceptClassOwner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptClassOwner): MsgAcceptClassOwnerAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAcceptClassOwner",
      value: MsgAcceptClassOwner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptClassOwnerProtoMsg): MsgAcceptClassOwner {
    return MsgAcceptClassOwner.decode(message.value);
  },
  toProto(message: MsgAcceptClassOwner): Uint8Array {
    return MsgAcceptClassOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptClassOwner): MsgAcceptClassOwnerProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
      value: MsgAcceptClassOwner.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptClassOwnerResponse(): MsgAcceptClassOwnerResponse {
  return {};
}
/**
 * MsgAcceptClassOwnerResponse is empty.
 * @name MsgAcceptClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptClassOwnerResponse
 */
export const MsgAcceptClassOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwnerResponse",
  encode(_: MsgAcceptClassOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptClassOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptClassOwnerResponse();
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
  fromPartial(_: DeepPartial<MsgAcceptClassOwnerResponse>): MsgAcceptClassOwnerResponse {
    const message = createBaseMsgAcceptClassOwnerResponse();
    return message;
  },
  fromAmino(_: MsgAcceptClassOwnerResponseAmino): MsgAcceptClassOwnerResponse {
    const message = createBaseMsgAcceptClassOwnerResponse();
    return message;
  },
  toAmino(_: MsgAcceptClassOwnerResponse): MsgAcceptClassOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptClassOwnerResponseAminoMsg): MsgAcceptClassOwnerResponse {
    return MsgAcceptClassOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptClassOwnerResponseProtoMsg): MsgAcceptClassOwnerResponse {
    return MsgAcceptClassOwnerResponse.decode(message.value);
  },
  toProto(message: MsgAcceptClassOwnerResponse): Uint8Array {
    return MsgAcceptClassOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptClassOwnerResponse): MsgAcceptClassOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwnerResponse",
      value: MsgAcceptClassOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelClassOwner(): MsgCancelClassOwner {
  return {
    owner: "",
    classId: BigInt(0)
  };
}
/**
 * MsgCancelClassOwner withdraws a handover proposal.
 * @name MsgCancelClassOwner
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelClassOwner
 */
export const MsgCancelClassOwner = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
  aminoType: "sparkdream/x/artifact/MsgCancelClassOwner",
  encode(message: MsgCancelClassOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelClassOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelClassOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelClassOwner>): MsgCancelClassOwner {
    const message = createBaseMsgCancelClassOwner();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelClassOwnerAmino): MsgCancelClassOwner {
    const message = createBaseMsgCancelClassOwner();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgCancelClassOwner): MsgCancelClassOwnerAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelClassOwnerAminoMsg): MsgCancelClassOwner {
    return MsgCancelClassOwner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelClassOwner): MsgCancelClassOwnerAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCancelClassOwner",
      value: MsgCancelClassOwner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelClassOwnerProtoMsg): MsgCancelClassOwner {
    return MsgCancelClassOwner.decode(message.value);
  },
  toProto(message: MsgCancelClassOwner): Uint8Array {
    return MsgCancelClassOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelClassOwner): MsgCancelClassOwnerProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
      value: MsgCancelClassOwner.encode(message).finish()
    };
  }
};
function createBaseMsgCancelClassOwnerResponse(): MsgCancelClassOwnerResponse {
  return {};
}
/**
 * MsgCancelClassOwnerResponse is empty.
 * @name MsgCancelClassOwnerResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelClassOwnerResponse
 */
export const MsgCancelClassOwnerResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwnerResponse",
  encode(_: MsgCancelClassOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelClassOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelClassOwnerResponse();
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
  fromPartial(_: DeepPartial<MsgCancelClassOwnerResponse>): MsgCancelClassOwnerResponse {
    const message = createBaseMsgCancelClassOwnerResponse();
    return message;
  },
  fromAmino(_: MsgCancelClassOwnerResponseAmino): MsgCancelClassOwnerResponse {
    const message = createBaseMsgCancelClassOwnerResponse();
    return message;
  },
  toAmino(_: MsgCancelClassOwnerResponse): MsgCancelClassOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelClassOwnerResponseAminoMsg): MsgCancelClassOwnerResponse {
    return MsgCancelClassOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelClassOwnerResponseProtoMsg): MsgCancelClassOwnerResponse {
    return MsgCancelClassOwnerResponse.decode(message.value);
  },
  toProto(message: MsgCancelClassOwnerResponse): Uint8Array {
    return MsgCancelClassOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelClassOwnerResponse): MsgCancelClassOwnerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwnerResponse",
      value: MsgCancelClassOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteClass(): MsgDeleteClass {
  return {
    owner: "",
    classId: BigInt(0)
  };
}
/**
 * MsgDeleteClass deletes an empty class.
 * @name MsgDeleteClass
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDeleteClass
 */
export const MsgDeleteClass = {
  typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
  aminoType: "sparkdream/x/artifact/MsgDeleteClass",
  encode(message: MsgDeleteClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteClass>): MsgDeleteClass {
    const message = createBaseMsgDeleteClass();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteClassAmino): MsgDeleteClass {
    const message = createBaseMsgDeleteClass();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgDeleteClass): MsgDeleteClassAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteClassAminoMsg): MsgDeleteClass {
    return MsgDeleteClass.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteClass): MsgDeleteClassAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgDeleteClass",
      value: MsgDeleteClass.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteClassProtoMsg): MsgDeleteClass {
    return MsgDeleteClass.decode(message.value);
  },
  toProto(message: MsgDeleteClass): Uint8Array {
    return MsgDeleteClass.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteClass): MsgDeleteClassProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
      value: MsgDeleteClass.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteClassResponse(): MsgDeleteClassResponse {
  return {};
}
/**
 * MsgDeleteClassResponse is empty.
 * @name MsgDeleteClassResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDeleteClassResponse
 */
export const MsgDeleteClassResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgDeleteClassResponse",
  encode(_: MsgDeleteClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteClassResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteClassResponse>): MsgDeleteClassResponse {
    const message = createBaseMsgDeleteClassResponse();
    return message;
  },
  fromAmino(_: MsgDeleteClassResponseAmino): MsgDeleteClassResponse {
    const message = createBaseMsgDeleteClassResponse();
    return message;
  },
  toAmino(_: MsgDeleteClassResponse): MsgDeleteClassResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteClassResponseAminoMsg): MsgDeleteClassResponse {
    return MsgDeleteClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteClassResponseProtoMsg): MsgDeleteClassResponse {
    return MsgDeleteClassResponse.decode(message.value);
  },
  toProto(message: MsgDeleteClassResponse): Uint8Array {
    return MsgDeleteClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteClassResponse): MsgDeleteClassResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDeleteClassResponse",
      value: MsgDeleteClassResponse.encode(message).finish()
    };
  }
};
function createBaseMintEntry(): MintEntry {
  return {
    recipient: "",
    metadata: TokenMetadata.fromPartial({}),
    schedule: []
  };
}
/**
 * MintEntry is one token to mint.
 * @name MintEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintEntry
 */
export const MintEntry = {
  typeUrl: "/sparkdream.artifact.v1.MintEntry",
  encode(message: MintEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.schedule) {
      MetadataStage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.schedule.push(MetadataStage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MintEntry>): MintEntry {
    const message = createBaseMintEntry();
    message.recipient = object.recipient ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.schedule = object.schedule?.map(e => MetadataStage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MintEntryAmino): MintEntry {
    const message = createBaseMintEntry();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    message.schedule = object.schedule?.map(e => MetadataStage.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MintEntry): MintEntryAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    if (message.schedule) {
      obj.schedule = message.schedule.map(e => e ? MetadataStage.toAmino(e) : undefined);
    } else {
      obj.schedule = message.schedule;
    }
    return obj;
  },
  fromAminoMsg(object: MintEntryAminoMsg): MintEntry {
    return MintEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MintEntryProtoMsg): MintEntry {
    return MintEntry.decode(message.value);
  },
  toProto(message: MintEntry): Uint8Array {
    return MintEntry.encode(message).finish();
  },
  toProtoMsg(message: MintEntry): MintEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MintEntry",
      value: MintEntry.encode(message).finish()
    };
  }
};
function createBaseMintResult(): MintResult {
  return {
    tokenId: BigInt(0),
    live: false
  };
}
/**
 * MintResult reports one minted token.
 * @name MintResult
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MintResult
 */
export const MintResult = {
  typeUrl: "/sparkdream.artifact.v1.MintResult",
  encode(message: MintResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenId);
    }
    if (message.live === true) {
      writer.uint32(16).bool(message.live);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.uint64();
          break;
        case 2:
          message.live = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MintResult>): MintResult {
    const message = createBaseMintResult();
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.live = object.live ?? false;
    return message;
  },
  fromAmino(object: MintResultAmino): MintResult {
    const message = createBaseMintResult();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.live !== undefined && object.live !== null) {
      message.live = object.live;
    }
    return message;
  },
  toAmino(message: MintResult): MintResultAmino {
    const obj: any = {};
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.live = message.live === false ? undefined : message.live;
    return obj;
  },
  fromAminoMsg(object: MintResultAminoMsg): MintResult {
    return MintResult.fromAmino(object.value);
  },
  fromProtoMsg(message: MintResultProtoMsg): MintResult {
    return MintResult.decode(message.value);
  },
  toProto(message: MintResult): Uint8Array {
    return MintResult.encode(message).finish();
  },
  toProtoMsg(message: MintResult): MintResultProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MintResult",
      value: MintResult.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    minter: "",
    classId: BigInt(0),
    entries: [],
    acceptedContentLicense: ""
  };
}
/**
 * MsgMint mints tokens as the class owner or a listed minter.
 * @name MsgMint
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMint
 */
export const MsgMint = {
  typeUrl: "/sparkdream.artifact.v1.MsgMint",
  aminoType: "sparkdream/x/artifact/MsgMint",
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    for (const v of message.entries) {
      MintEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.acceptedContentLicense !== "") {
      writer.uint32(34).string(message.acceptedContentLicense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.entries.push(MintEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.acceptedContentLicense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.minter = object.minter ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.entries = object.entries?.map(e => MintEntry.fromPartial(e)) || [];
    message.acceptedContentLicense = object.acceptedContentLicense ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    message.entries = object.entries?.map(e => MintEntry.fromAmino(e)) || [];
    if (object.accepted_content_license !== undefined && object.accepted_content_license !== null) {
      message.acceptedContentLicense = object.accepted_content_license;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? MintEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMint): MsgMintAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgMint",
      value: MsgMint.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {
    results: []
  };
}
/**
 * MsgMintResponse lists the minted tokens.
 * @name MsgMintResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintResponse
 */
export const MsgMintResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgMintResponse",
  encode(message: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      MintResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(MintResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.results = object.results?.map(e => MintResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.results = object.results?.map(e => MintResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? MintResult.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPublicMint(): MsgPublicMint {
  return {
    buyer: "",
    classId: BigInt(0),
    quantity: 0,
    maxPrice: Coin.fromPartial({})
  };
}
/**
 * MsgPublicMint buys tokens under the public mint policy.
 * @name MsgPublicMint
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgPublicMint
 */
export const MsgPublicMint = {
  typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
  aminoType: "sparkdream/x/artifact/MsgPublicMint",
  encode(message: MsgPublicMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.maxPrice !== undefined) {
      Coin.encode(message.maxPrice, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPublicMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublicMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        case 4:
          message.maxPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPublicMint>): MsgPublicMint {
    const message = createBaseMsgPublicMint();
    message.buyer = object.buyer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.quantity = object.quantity ?? 0;
    message.maxPrice = object.maxPrice !== undefined && object.maxPrice !== null ? Coin.fromPartial(object.maxPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgPublicMintAmino): MsgPublicMint {
    const message = createBaseMsgPublicMint();
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = Coin.fromAmino(object.max_price);
    }
    return message;
  },
  toAmino(message: MsgPublicMint): MsgPublicMintAmino {
    const obj: any = {};
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.quantity = message.quantity === 0 ? undefined : message.quantity;
    obj.max_price = message.maxPrice ? Coin.toAmino(message.maxPrice) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgPublicMintAminoMsg): MsgPublicMint {
    return MsgPublicMint.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPublicMint): MsgPublicMintAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgPublicMint",
      value: MsgPublicMint.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPublicMintProtoMsg): MsgPublicMint {
    return MsgPublicMint.decode(message.value);
  },
  toProto(message: MsgPublicMint): Uint8Array {
    return MsgPublicMint.encode(message).finish();
  },
  toProtoMsg(message: MsgPublicMint): MsgPublicMintProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
      value: MsgPublicMint.encode(message).finish()
    };
  }
};
function createBaseMsgPublicMintResponse(): MsgPublicMintResponse {
  return {
    tokenIds: []
  };
}
/**
 * MsgPublicMintResponse lists the minted token ids.
 * @name MsgPublicMintResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgPublicMintResponse
 */
export const MsgPublicMintResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgPublicMintResponse",
  encode(message: MsgPublicMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.tokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPublicMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublicMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tokenIds.push(reader.uint64());
            }
          } else {
            message.tokenIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPublicMintResponse>): MsgPublicMintResponse {
    const message = createBaseMsgPublicMintResponse();
    message.tokenIds = object.tokenIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgPublicMintResponseAmino): MsgPublicMintResponse {
    const message = createBaseMsgPublicMintResponse();
    message.tokenIds = object.token_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgPublicMintResponse): MsgPublicMintResponseAmino {
    const obj: any = {};
    if (message.tokenIds) {
      obj.token_ids = message.tokenIds.map(e => e.toString());
    } else {
      obj.token_ids = message.tokenIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPublicMintResponseAminoMsg): MsgPublicMintResponse {
    return MsgPublicMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPublicMintResponseProtoMsg): MsgPublicMintResponse {
    return MsgPublicMintResponse.decode(message.value);
  },
  toProto(message: MsgPublicMintResponse): Uint8Array {
    return MsgPublicMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPublicMintResponse): MsgPublicMintResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgPublicMintResponse",
      value: MsgPublicMintResponse.encode(message).finish()
    };
  }
};
function createBaseTransferEntry(): TransferEntry {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    recipient: ""
  };
}
/**
 * TransferEntry is one token transfer.
 * @name TransferEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TransferEntry
 */
export const TransferEntry = {
  typeUrl: "/sparkdream.artifact.v1.TransferEntry",
  encode(message: TransferEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferEntry>): TransferEntry {
    const message = createBaseTransferEntry();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: TransferEntryAmino): TransferEntry {
    const message = createBaseTransferEntry();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: TransferEntry): TransferEntryAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: TransferEntryAminoMsg): TransferEntry {
    return TransferEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferEntryProtoMsg): TransferEntry {
    return TransferEntry.decode(message.value);
  },
  toProto(message: TransferEntry): Uint8Array {
    return TransferEntry.encode(message).finish();
  },
  toProtoMsg(message: TransferEntry): TransferEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.TransferEntry",
      value: TransferEntry.encode(message).finish()
    };
  }
};
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sender: "",
    entries: []
  };
}
/**
 * MsgTransfer transfers tokens.
 * @name MsgTransfer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransfer
 */
export const MsgTransfer = {
  typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
  aminoType: "sparkdream/x/artifact/MsgTransfer",
  encode(message: MsgTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.entries) {
      TransferEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.entries.push(TransferEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sender = object.sender ?? "";
    message.entries = object.entries?.map(e => TransferEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgTransferAmino): MsgTransfer {
    const message = createBaseMsgTransfer();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.entries = object.entries?.map(e => TransferEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgTransfer): MsgTransferAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? TransferEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
    return MsgTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransfer): MsgTransferAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgTransfer",
      value: MsgTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
    return MsgTransfer.decode(message.value);
  },
  toProto(message: MsgTransfer): Uint8Array {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  }
};
function createBaseTransferResult(): TransferResult {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    delivered: false
  };
}
/**
 * TransferResult reports one transfer.
 * @name TransferResult
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.TransferResult
 */
export const TransferResult = {
  typeUrl: "/sparkdream.artifact.v1.TransferResult",
  encode(message: TransferResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.delivered === true) {
      writer.uint32(24).bool(message.delivered);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.delivered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferResult>): TransferResult {
    const message = createBaseTransferResult();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.delivered = object.delivered ?? false;
    return message;
  },
  fromAmino(object: TransferResultAmino): TransferResult {
    const message = createBaseTransferResult();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.delivered !== undefined && object.delivered !== null) {
      message.delivered = object.delivered;
    }
    return message;
  },
  toAmino(message: TransferResult): TransferResultAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.delivered = message.delivered === false ? undefined : message.delivered;
    return obj;
  },
  fromAminoMsg(object: TransferResultAminoMsg): TransferResult {
    return TransferResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferResultProtoMsg): TransferResult {
    return TransferResult.decode(message.value);
  },
  toProto(message: TransferResult): Uint8Array {
    return TransferResult.encode(message).finish();
  },
  toProtoMsg(message: TransferResult): TransferResultProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.TransferResult",
      value: TransferResult.encode(message).finish()
    };
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {
    results: []
  };
}
/**
 * MsgTransferResponse lists the transfer outcomes.
 * @name MsgTransferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferResponse
 */
export const MsgTransferResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgTransferResponse",
  encode(message: MsgTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      TransferResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(TransferResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.results = object.results?.map(e => TransferResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgTransferResponseAmino): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.results = object.results?.map(e => TransferResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgTransferResponse): MsgTransferResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? TransferResult.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
    return MsgTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message: MsgTransferResponse): Uint8Array {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  }
};
function createBaseAcceptEntry(): AcceptEntry {
  return {
    classId: BigInt(0),
    tokenId: BigInt(0),
    expectedMetadataHash: ""
  };
}
/**
 * AcceptEntry is one inbox item to accept.
 * @name AcceptEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.AcceptEntry
 */
export const AcceptEntry = {
  typeUrl: "/sparkdream.artifact.v1.AcceptEntry",
  encode(message: AcceptEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tokenId);
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(26).string(message.expectedMetadataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.tokenId = reader.uint64();
          break;
        case 3:
          message.expectedMetadataHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AcceptEntry>): AcceptEntry {
    const message = createBaseAcceptEntry();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    return message;
  },
  fromAmino(object: AcceptEntryAmino): AcceptEntry {
    const message = createBaseAcceptEntry();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    return message;
  },
  toAmino(message: AcceptEntry): AcceptEntryAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    return obj;
  },
  fromAminoMsg(object: AcceptEntryAminoMsg): AcceptEntry {
    return AcceptEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AcceptEntryProtoMsg): AcceptEntry {
    return AcceptEntry.decode(message.value);
  },
  toProto(message: AcceptEntry): Uint8Array {
    return AcceptEntry.encode(message).finish();
  },
  toProtoMsg(message: AcceptEntry): AcceptEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.AcceptEntry",
      value: AcceptEntry.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptIncoming(): MsgAcceptIncoming {
  return {
    recipient: "",
    entries: []
  };
}
/**
 * MsgAcceptIncoming accepts inbox items.
 * @name MsgAcceptIncoming
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptIncoming
 */
export const MsgAcceptIncoming = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
  aminoType: "sparkdream/x/artifact/MsgAcceptIncoming",
  encode(message: MsgAcceptIncoming, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    for (const v of message.entries) {
      AcceptEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptIncoming {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptIncoming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.entries.push(AcceptEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptIncoming>): MsgAcceptIncoming {
    const message = createBaseMsgAcceptIncoming();
    message.recipient = object.recipient ?? "";
    message.entries = object.entries?.map(e => AcceptEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAcceptIncomingAmino): MsgAcceptIncoming {
    const message = createBaseMsgAcceptIncoming();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.entries = object.entries?.map(e => AcceptEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAcceptIncoming): MsgAcceptIncomingAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? AcceptEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAcceptIncomingAminoMsg): MsgAcceptIncoming {
    return MsgAcceptIncoming.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptIncoming): MsgAcceptIncomingAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAcceptIncoming",
      value: MsgAcceptIncoming.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptIncomingProtoMsg): MsgAcceptIncoming {
    return MsgAcceptIncoming.decode(message.value);
  },
  toProto(message: MsgAcceptIncoming): Uint8Array {
    return MsgAcceptIncoming.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptIncoming): MsgAcceptIncomingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
      value: MsgAcceptIncoming.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptIncomingResponse(): MsgAcceptIncomingResponse {
  return {};
}
/**
 * MsgAcceptIncomingResponse is empty.
 * @name MsgAcceptIncomingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptIncomingResponse
 */
export const MsgAcceptIncomingResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncomingResponse",
  encode(_: MsgAcceptIncomingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptIncomingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptIncomingResponse();
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
  fromPartial(_: DeepPartial<MsgAcceptIncomingResponse>): MsgAcceptIncomingResponse {
    const message = createBaseMsgAcceptIncomingResponse();
    return message;
  },
  fromAmino(_: MsgAcceptIncomingResponseAmino): MsgAcceptIncomingResponse {
    const message = createBaseMsgAcceptIncomingResponse();
    return message;
  },
  toAmino(_: MsgAcceptIncomingResponse): MsgAcceptIncomingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptIncomingResponseAminoMsg): MsgAcceptIncomingResponse {
    return MsgAcceptIncomingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptIncomingResponseProtoMsg): MsgAcceptIncomingResponse {
    return MsgAcceptIncomingResponse.decode(message.value);
  },
  toProto(message: MsgAcceptIncomingResponse): Uint8Array {
    return MsgAcceptIncomingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptIncomingResponse): MsgAcceptIncomingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncomingResponse",
      value: MsgAcceptIncomingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRejectIncoming(): MsgRejectIncoming {
  return {
    recipient: "",
    refs: []
  };
}
/**
 * MsgRejectIncoming rejects inbox items.
 * @name MsgRejectIncoming
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectIncoming
 */
export const MsgRejectIncoming = {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
  aminoType: "sparkdream/x/artifact/MsgRejectIncoming",
  encode(message: MsgRejectIncoming, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    for (const v of message.refs) {
      TokenRef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectIncoming {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectIncoming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.refs.push(TokenRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRejectIncoming>): MsgRejectIncoming {
    const message = createBaseMsgRejectIncoming();
    message.recipient = object.recipient ?? "";
    message.refs = object.refs?.map(e => TokenRef.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRejectIncomingAmino): MsgRejectIncoming {
    const message = createBaseMsgRejectIncoming();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.refs = object.refs?.map(e => TokenRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRejectIncoming): MsgRejectIncomingAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.refs) {
      obj.refs = message.refs.map(e => e ? TokenRef.toAmino(e) : undefined);
    } else {
      obj.refs = message.refs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRejectIncomingAminoMsg): MsgRejectIncoming {
    return MsgRejectIncoming.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRejectIncoming): MsgRejectIncomingAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRejectIncoming",
      value: MsgRejectIncoming.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRejectIncomingProtoMsg): MsgRejectIncoming {
    return MsgRejectIncoming.decode(message.value);
  },
  toProto(message: MsgRejectIncoming): Uint8Array {
    return MsgRejectIncoming.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectIncoming): MsgRejectIncomingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
      value: MsgRejectIncoming.encode(message).finish()
    };
  }
};
function createBaseMsgRejectIncomingResponse(): MsgRejectIncomingResponse {
  return {};
}
/**
 * MsgRejectIncomingResponse is empty.
 * @name MsgRejectIncomingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectIncomingResponse
 */
export const MsgRejectIncomingResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectIncomingResponse",
  encode(_: MsgRejectIncomingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectIncomingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectIncomingResponse();
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
  fromPartial(_: DeepPartial<MsgRejectIncomingResponse>): MsgRejectIncomingResponse {
    const message = createBaseMsgRejectIncomingResponse();
    return message;
  },
  fromAmino(_: MsgRejectIncomingResponseAmino): MsgRejectIncomingResponse {
    const message = createBaseMsgRejectIncomingResponse();
    return message;
  },
  toAmino(_: MsgRejectIncomingResponse): MsgRejectIncomingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRejectIncomingResponseAminoMsg): MsgRejectIncomingResponse {
    return MsgRejectIncomingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectIncomingResponseProtoMsg): MsgRejectIncomingResponse {
    return MsgRejectIncomingResponse.decode(message.value);
  },
  toProto(message: MsgRejectIncomingResponse): Uint8Array {
    return MsgRejectIncomingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectIncomingResponse): MsgRejectIncomingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRejectIncomingResponse",
      value: MsgRejectIncomingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOutgoing(): MsgCancelOutgoing {
  return {
    signer: "",
    refs: []
  };
}
/**
 * MsgCancelOutgoing withdraws pending items.
 * @name MsgCancelOutgoing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOutgoing
 */
export const MsgCancelOutgoing = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
  aminoType: "sparkdream/x/artifact/MsgCancelOutgoing",
  encode(message: MsgCancelOutgoing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.refs) {
      TokenRef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOutgoing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOutgoing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.refs.push(TokenRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelOutgoing>): MsgCancelOutgoing {
    const message = createBaseMsgCancelOutgoing();
    message.signer = object.signer ?? "";
    message.refs = object.refs?.map(e => TokenRef.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCancelOutgoingAmino): MsgCancelOutgoing {
    const message = createBaseMsgCancelOutgoing();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.refs = object.refs?.map(e => TokenRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCancelOutgoing): MsgCancelOutgoingAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.refs) {
      obj.refs = message.refs.map(e => e ? TokenRef.toAmino(e) : undefined);
    } else {
      obj.refs = message.refs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCancelOutgoingAminoMsg): MsgCancelOutgoing {
    return MsgCancelOutgoing.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelOutgoing): MsgCancelOutgoingAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCancelOutgoing",
      value: MsgCancelOutgoing.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelOutgoingProtoMsg): MsgCancelOutgoing {
    return MsgCancelOutgoing.decode(message.value);
  },
  toProto(message: MsgCancelOutgoing): Uint8Array {
    return MsgCancelOutgoing.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOutgoing): MsgCancelOutgoingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
      value: MsgCancelOutgoing.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOutgoingResponse(): MsgCancelOutgoingResponse {
  return {};
}
/**
 * MsgCancelOutgoingResponse is empty.
 * @name MsgCancelOutgoingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOutgoingResponse
 */
export const MsgCancelOutgoingResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoingResponse",
  encode(_: MsgCancelOutgoingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOutgoingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOutgoingResponse();
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
  fromPartial(_: DeepPartial<MsgCancelOutgoingResponse>): MsgCancelOutgoingResponse {
    const message = createBaseMsgCancelOutgoingResponse();
    return message;
  },
  fromAmino(_: MsgCancelOutgoingResponseAmino): MsgCancelOutgoingResponse {
    const message = createBaseMsgCancelOutgoingResponse();
    return message;
  },
  toAmino(_: MsgCancelOutgoingResponse): MsgCancelOutgoingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelOutgoingResponseAminoMsg): MsgCancelOutgoingResponse {
    return MsgCancelOutgoingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOutgoingResponseProtoMsg): MsgCancelOutgoingResponse {
    return MsgCancelOutgoingResponse.decode(message.value);
  },
  toProto(message: MsgCancelOutgoingResponse): Uint8Array {
    return MsgCancelOutgoingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOutgoingResponse): MsgCancelOutgoingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoingResponse",
      value: MsgCancelOutgoingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetReceivePolicy(): MsgSetReceivePolicy {
  return {
    owner: "",
    policy: 0
  };
}
/**
 * MsgSetReceivePolicy sets the signer's receive policy.
 * @name MsgSetReceivePolicy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetReceivePolicy
 */
export const MsgSetReceivePolicy = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
  aminoType: "sparkdream/x/artifact/MsgSetReceivePolicy",
  encode(message: MsgSetReceivePolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.policy !== 0) {
      writer.uint32(16).int32(message.policy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetReceivePolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReceivePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.policy = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetReceivePolicy>): MsgSetReceivePolicy {
    const message = createBaseMsgSetReceivePolicy();
    message.owner = object.owner ?? "";
    message.policy = object.policy ?? 0;
    return message;
  },
  fromAmino(object: MsgSetReceivePolicyAmino): MsgSetReceivePolicy {
    const message = createBaseMsgSetReceivePolicy();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = object.policy;
    }
    return message;
  },
  toAmino(message: MsgSetReceivePolicy): MsgSetReceivePolicyAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.policy = message.policy === 0 ? undefined : message.policy;
    return obj;
  },
  fromAminoMsg(object: MsgSetReceivePolicyAminoMsg): MsgSetReceivePolicy {
    return MsgSetReceivePolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetReceivePolicy): MsgSetReceivePolicyAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSetReceivePolicy",
      value: MsgSetReceivePolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetReceivePolicyProtoMsg): MsgSetReceivePolicy {
    return MsgSetReceivePolicy.decode(message.value);
  },
  toProto(message: MsgSetReceivePolicy): Uint8Array {
    return MsgSetReceivePolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetReceivePolicy): MsgSetReceivePolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
      value: MsgSetReceivePolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetReceivePolicyResponse(): MsgSetReceivePolicyResponse {
  return {};
}
/**
 * MsgSetReceivePolicyResponse is empty.
 * @name MsgSetReceivePolicyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetReceivePolicyResponse
 */
export const MsgSetReceivePolicyResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicyResponse",
  encode(_: MsgSetReceivePolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetReceivePolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReceivePolicyResponse();
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
  fromPartial(_: DeepPartial<MsgSetReceivePolicyResponse>): MsgSetReceivePolicyResponse {
    const message = createBaseMsgSetReceivePolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetReceivePolicyResponseAmino): MsgSetReceivePolicyResponse {
    const message = createBaseMsgSetReceivePolicyResponse();
    return message;
  },
  toAmino(_: MsgSetReceivePolicyResponse): MsgSetReceivePolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetReceivePolicyResponseAminoMsg): MsgSetReceivePolicyResponse {
    return MsgSetReceivePolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetReceivePolicyResponseProtoMsg): MsgSetReceivePolicyResponse {
    return MsgSetReceivePolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetReceivePolicyResponse): Uint8Array {
    return MsgSetReceivePolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetReceivePolicyResponse): MsgSetReceivePolicyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicyResponse",
      value: MsgSetReceivePolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    owner: "",
    refs: []
  };
}
/**
 * MsgBurn burns tokens the signer owns.
 * @name MsgBurn
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurn
 */
export const MsgBurn = {
  typeUrl: "/sparkdream.artifact.v1.MsgBurn",
  aminoType: "sparkdream/x/artifact/MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.refs) {
      TokenRef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.refs.push(TokenRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.owner = object.owner ?? "";
    message.refs = object.refs?.map(e => TokenRef.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.refs = object.refs?.map(e => TokenRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.refs) {
      obj.refs = message.refs.map(e => e ? TokenRef.toAmino(e) : undefined);
    } else {
      obj.refs = message.refs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgBurn",
      value: MsgBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
/**
 * MsgBurnResponse is empty.
 * @name MsgBurnResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnResponse
 */
export const MsgBurnResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgBurnResponse",
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevoke(): MsgRevoke {
  return {
    owner: "",
    classId: BigInt(0),
    tokenIds: [],
    reason: ""
  };
}
/**
 * MsgRevoke burns tokens as the class owner, when the class's
 * burn_authorization allows the issuer.
 * @name MsgRevoke
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevoke
 */
export const MsgRevoke = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
  aminoType: "sparkdream/x/artifact/MsgRevoke",
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    writer.uint32(26).fork();
    for (const v of message.tokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tokenIds.push(reader.uint64());
            }
          } else {
            message.tokenIds.push(reader.uint64());
          }
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
  fromPartial(object: DeepPartial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenIds = object.tokenIds?.map(e => BigInt(e.toString())) || [];
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    const message = createBaseMsgRevoke();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    message.tokenIds = object.token_ids?.map(e => BigInt(e)) || [];
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    if (message.tokenIds) {
      obj.token_ids = message.tokenIds.map(e => e.toString());
    } else {
      obj.token_ids = message.tokenIds;
    }
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRevoke",
      value: MsgRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke {
    return MsgRevoke.decode(message.value);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
/**
 * MsgRevokeResponse is empty.
 * @name MsgRevokeResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeResponse
 */
export const MsgRevokeResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevokeResponse",
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateToken(): MsgUpdateToken {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    metadata: TokenMetadata.fromPartial({})
  };
}
/**
 * MsgUpdateToken replaces a token's metadata.
 * @name MsgUpdateToken
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateToken
 */
export const MsgUpdateToken = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
  aminoType: "sparkdream/x/artifact/MsgUpdateToken",
  encode(message: MsgUpdateToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateTokenAmino): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgUpdateToken): MsgUpdateTokenAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTokenAminoMsg): MsgUpdateToken {
    return MsgUpdateToken.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateToken): MsgUpdateTokenAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgUpdateToken",
      value: MsgUpdateToken.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTokenProtoMsg): MsgUpdateToken {
    return MsgUpdateToken.decode(message.value);
  },
  toProto(message: MsgUpdateToken): Uint8Array {
    return MsgUpdateToken.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateToken): MsgUpdateTokenProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
      value: MsgUpdateToken.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTokenResponse(): MsgUpdateTokenResponse {
  return {
    metadataHash: ""
  };
}
/**
 * MsgUpdateTokenResponse returns the new metadata hash.
 * @name MsgUpdateTokenResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateTokenResponse
 */
export const MsgUpdateTokenResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateTokenResponse",
  encode(message: MsgUpdateTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadataHash !== "") {
      writer.uint32(10).string(message.metadataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    message.metadataHash = object.metadataHash ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateTokenResponseAmino): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    if (object.metadata_hash !== undefined && object.metadata_hash !== null) {
      message.metadataHash = object.metadata_hash;
    }
    return message;
  },
  toAmino(message: MsgUpdateTokenResponse): MsgUpdateTokenResponseAmino {
    const obj: any = {};
    obj.metadata_hash = message.metadataHash === "" ? undefined : message.metadataHash;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTokenResponseAminoMsg): MsgUpdateTokenResponse {
    return MsgUpdateTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTokenResponseProtoMsg): MsgUpdateTokenResponse {
    return MsgUpdateTokenResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTokenResponse): Uint8Array {
    return MsgUpdateTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTokenResponse): MsgUpdateTokenResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateTokenResponse",
      value: MsgUpdateTokenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeTokenMetadata(): MsgFreezeTokenMetadata {
  return {
    signer: "",
    refs: []
  };
}
/**
 * MsgFreezeTokenMetadata freezes token metadata.
 * @name MsgFreezeTokenMetadata
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeTokenMetadata
 */
export const MsgFreezeTokenMetadata = {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
  aminoType: "sparkdream/x/artifact/MsgFreezeTokenMetadata",
  encode(message: MsgFreezeTokenMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.refs) {
      TokenRef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeTokenMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeTokenMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.refs.push(TokenRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFreezeTokenMetadata>): MsgFreezeTokenMetadata {
    const message = createBaseMsgFreezeTokenMetadata();
    message.signer = object.signer ?? "";
    message.refs = object.refs?.map(e => TokenRef.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFreezeTokenMetadataAmino): MsgFreezeTokenMetadata {
    const message = createBaseMsgFreezeTokenMetadata();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.refs = object.refs?.map(e => TokenRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFreezeTokenMetadata): MsgFreezeTokenMetadataAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.refs) {
      obj.refs = message.refs.map(e => e ? TokenRef.toAmino(e) : undefined);
    } else {
      obj.refs = message.refs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFreezeTokenMetadataAminoMsg): MsgFreezeTokenMetadata {
    return MsgFreezeTokenMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFreezeTokenMetadata): MsgFreezeTokenMetadataAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgFreezeTokenMetadata",
      value: MsgFreezeTokenMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFreezeTokenMetadataProtoMsg): MsgFreezeTokenMetadata {
    return MsgFreezeTokenMetadata.decode(message.value);
  },
  toProto(message: MsgFreezeTokenMetadata): Uint8Array {
    return MsgFreezeTokenMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeTokenMetadata): MsgFreezeTokenMetadataProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
      value: MsgFreezeTokenMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeTokenMetadataResponse(): MsgFreezeTokenMetadataResponse {
  return {};
}
/**
 * MsgFreezeTokenMetadataResponse is empty.
 * @name MsgFreezeTokenMetadataResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse
 */
export const MsgFreezeTokenMetadataResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse",
  encode(_: MsgFreezeTokenMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeTokenMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeTokenMetadataResponse();
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
  fromPartial(_: DeepPartial<MsgFreezeTokenMetadataResponse>): MsgFreezeTokenMetadataResponse {
    const message = createBaseMsgFreezeTokenMetadataResponse();
    return message;
  },
  fromAmino(_: MsgFreezeTokenMetadataResponseAmino): MsgFreezeTokenMetadataResponse {
    const message = createBaseMsgFreezeTokenMetadataResponse();
    return message;
  },
  toAmino(_: MsgFreezeTokenMetadataResponse): MsgFreezeTokenMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFreezeTokenMetadataResponseAminoMsg): MsgFreezeTokenMetadataResponse {
    return MsgFreezeTokenMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeTokenMetadataResponseProtoMsg): MsgFreezeTokenMetadataResponse {
    return MsgFreezeTokenMetadataResponse.decode(message.value);
  },
  toProto(message: MsgFreezeTokenMetadataResponse): Uint8Array {
    return MsgFreezeTokenMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeTokenMetadataResponse): MsgFreezeTokenMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadataResponse",
      value: MsgFreezeTokenMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgList(): MsgList {
  return {
    seller: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    price: Coin.fromPartial({}),
    duration: BigInt(0)
  };
}
/**
 * MsgList lists a token for sale.
 * @name MsgList
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgList
 */
export const MsgList = {
  typeUrl: "/sparkdream.artifact.v1.MsgList",
  aminoType: "sparkdream/x/artifact/MsgList",
  encode(message: MsgList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(40).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgList>): MsgList {
    const message = createBaseMsgList();
    message.seller = object.seller ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgListAmino): MsgList {
    const message = createBaseMsgList();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: MsgList): MsgListAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgListAminoMsg): MsgList {
    return MsgList.fromAmino(object.value);
  },
  toAminoMsg(message: MsgList): MsgListAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgList",
      value: MsgList.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgListProtoMsg): MsgList {
    return MsgList.decode(message.value);
  },
  toProto(message: MsgList): Uint8Array {
    return MsgList.encode(message).finish();
  },
  toProtoMsg(message: MsgList): MsgListProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgList",
      value: MsgList.encode(message).finish()
    };
  }
};
function createBaseMsgListResponse(): MsgListResponse {
  return {
    nonce: BigInt(0)
  };
}
/**
 * MsgListResponse returns the listing nonce.
 * @name MsgListResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListResponse
 */
export const MsgListResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgListResponse",
  encode(message: MsgListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgListResponse>): MsgListResponse {
    const message = createBaseMsgListResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgListResponseAmino): MsgListResponse {
    const message = createBaseMsgListResponse();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: MsgListResponse): MsgListResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgListResponseAminoMsg): MsgListResponse {
    return MsgListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgListResponseProtoMsg): MsgListResponse {
    return MsgListResponse.decode(message.value);
  },
  toProto(message: MsgListResponse): Uint8Array {
    return MsgListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgListResponse): MsgListResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgListResponse",
      value: MsgListResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateListing(): MsgUpdateListing {
  return {
    seller: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    price: Coin.fromPartial({}),
    duration: BigInt(0)
  };
}
/**
 * MsgUpdateListing changes price and/or duration.
 * @name MsgUpdateListing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateListing
 */
export const MsgUpdateListing = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
  aminoType: "sparkdream/x/artifact/MsgUpdateListing",
  encode(message: MsgUpdateListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(40).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing {
    const message = createBaseMsgUpdateListing();
    message.seller = object.seller ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateListingAmino): MsgUpdateListing {
    const message = createBaseMsgUpdateListing();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: MsgUpdateListing): MsgUpdateListingAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateListingAminoMsg): MsgUpdateListing {
    return MsgUpdateListing.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateListing): MsgUpdateListingAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgUpdateListing",
      value: MsgUpdateListing.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateListingProtoMsg): MsgUpdateListing {
    return MsgUpdateListing.decode(message.value);
  },
  toProto(message: MsgUpdateListing): Uint8Array {
    return MsgUpdateListing.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateListing): MsgUpdateListingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
      value: MsgUpdateListing.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateListingResponse(): MsgUpdateListingResponse {
  return {
    nonce: BigInt(0)
  };
}
/**
 * MsgUpdateListingResponse returns the new nonce.
 * @name MsgUpdateListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateListingResponse
 */
export const MsgUpdateListingResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateListingResponse",
  encode(message: MsgUpdateListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateListingResponse>): MsgUpdateListingResponse {
    const message = createBaseMsgUpdateListingResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateListingResponseAmino): MsgUpdateListingResponse {
    const message = createBaseMsgUpdateListingResponse();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: MsgUpdateListingResponse): MsgUpdateListingResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateListingResponseAminoMsg): MsgUpdateListingResponse {
    return MsgUpdateListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateListingResponseProtoMsg): MsgUpdateListingResponse {
    return MsgUpdateListingResponse.decode(message.value);
  },
  toProto(message: MsgUpdateListingResponse): Uint8Array {
    return MsgUpdateListingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateListingResponse): MsgUpdateListingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateListingResponse",
      value: MsgUpdateListingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelist(): MsgDelist {
  return {
    seller: "",
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * MsgDelist cancels a listing.
 * @name MsgDelist
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelist
 */
export const MsgDelist = {
  typeUrl: "/sparkdream.artifact.v1.MsgDelist",
  aminoType: "sparkdream/x/artifact/MsgDelist",
  encode(message: MsgDelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDelist>): MsgDelist {
    const message = createBaseMsgDelist();
    message.seller = object.seller ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDelistAmino): MsgDelist {
    const message = createBaseMsgDelist();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: MsgDelist): MsgDelistAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelistAminoMsg): MsgDelist {
    return MsgDelist.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelist): MsgDelistAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgDelist",
      value: MsgDelist.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelistProtoMsg): MsgDelist {
    return MsgDelist.decode(message.value);
  },
  toProto(message: MsgDelist): Uint8Array {
    return MsgDelist.encode(message).finish();
  },
  toProtoMsg(message: MsgDelist): MsgDelistProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDelist",
      value: MsgDelist.encode(message).finish()
    };
  }
};
function createBaseMsgDelistResponse(): MsgDelistResponse {
  return {};
}
/**
 * MsgDelistResponse is empty.
 * @name MsgDelistResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistResponse
 */
export const MsgDelistResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgDelistResponse",
  encode(_: MsgDelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistResponse();
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
  fromPartial(_: DeepPartial<MsgDelistResponse>): MsgDelistResponse {
    const message = createBaseMsgDelistResponse();
    return message;
  },
  fromAmino(_: MsgDelistResponseAmino): MsgDelistResponse {
    const message = createBaseMsgDelistResponse();
    return message;
  },
  toAmino(_: MsgDelistResponse): MsgDelistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelistResponseAminoMsg): MsgDelistResponse {
    return MsgDelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelistResponseProtoMsg): MsgDelistResponse {
    return MsgDelistResponse.decode(message.value);
  },
  toProto(message: MsgDelistResponse): Uint8Array {
    return MsgDelistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelistResponse): MsgDelistResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDelistResponse",
      value: MsgDelistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBuy(): MsgBuy {
  return {
    buyer: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    expectedPrice: Coin.fromPartial({}),
    expectedNonce: BigInt(0),
    expectedMetadataHash: "",
    expectedContentsHash: ""
  };
}
/**
 * MsgBuy buys a listed token.
 * @name MsgBuy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuy
 */
export const MsgBuy = {
  typeUrl: "/sparkdream.artifact.v1.MsgBuy",
  aminoType: "sparkdream/x/artifact/MsgBuy",
  encode(message: MsgBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.expectedPrice !== undefined) {
      Coin.encode(message.expectedPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.expectedNonce !== BigInt(0)) {
      writer.uint32(40).uint64(message.expectedNonce);
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(50).string(message.expectedMetadataHash);
    }
    if (message.expectedContentsHash !== "") {
      writer.uint32(58).string(message.expectedContentsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.expectedPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expectedNonce = reader.uint64();
          break;
        case 6:
          message.expectedMetadataHash = reader.string();
          break;
        case 7:
          message.expectedContentsHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBuy>): MsgBuy {
    const message = createBaseMsgBuy();
    message.buyer = object.buyer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.expectedPrice = object.expectedPrice !== undefined && object.expectedPrice !== null ? Coin.fromPartial(object.expectedPrice) : undefined;
    message.expectedNonce = object.expectedNonce !== undefined && object.expectedNonce !== null ? BigInt(object.expectedNonce.toString()) : BigInt(0);
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    message.expectedContentsHash = object.expectedContentsHash ?? "";
    return message;
  },
  fromAmino(object: MsgBuyAmino): MsgBuy {
    const message = createBaseMsgBuy();
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.expected_price !== undefined && object.expected_price !== null) {
      message.expectedPrice = Coin.fromAmino(object.expected_price);
    }
    if (object.expected_nonce !== undefined && object.expected_nonce !== null) {
      message.expectedNonce = BigInt(object.expected_nonce);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    if (object.expected_contents_hash !== undefined && object.expected_contents_hash !== null) {
      message.expectedContentsHash = object.expected_contents_hash;
    }
    return message;
  },
  toAmino(message: MsgBuy): MsgBuyAmino {
    const obj: any = {};
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.expected_price = message.expectedPrice ? Coin.toAmino(message.expectedPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.expected_nonce = message.expectedNonce !== BigInt(0) ? message.expectedNonce?.toString() : undefined;
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    obj.expected_contents_hash = message.expectedContentsHash === "" ? undefined : message.expectedContentsHash;
    return obj;
  },
  fromAminoMsg(object: MsgBuyAminoMsg): MsgBuy {
    return MsgBuy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBuy): MsgBuyAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgBuy",
      value: MsgBuy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBuyProtoMsg): MsgBuy {
    return MsgBuy.decode(message.value);
  },
  toProto(message: MsgBuy): Uint8Array {
    return MsgBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgBuy): MsgBuyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBuy",
      value: MsgBuy.encode(message).finish()
    };
  }
};
function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {
    fee: "",
    royalty: "",
    proceeds: ""
  };
}
/**
 * MsgBuyResponse reports the settlement split.
 * @name MsgBuyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyResponse
 */
export const MsgBuyResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgBuyResponse",
  encode(message: MsgBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== "") {
      writer.uint32(10).string(message.fee);
    }
    if (message.royalty !== "") {
      writer.uint32(18).string(message.royalty);
    }
    if (message.proceeds !== "") {
      writer.uint32(26).string(message.proceeds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.string();
          break;
        case 2:
          message.royalty = reader.string();
          break;
        case 3:
          message.proceeds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBuyResponse>): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    message.fee = object.fee ?? "";
    message.royalty = object.royalty ?? "";
    message.proceeds = object.proceeds ?? "";
    return message;
  },
  fromAmino(object: MsgBuyResponseAmino): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.royalty !== undefined && object.royalty !== null) {
      message.royalty = object.royalty;
    }
    if (object.proceeds !== undefined && object.proceeds !== null) {
      message.proceeds = object.proceeds;
    }
    return message;
  },
  toAmino(message: MsgBuyResponse): MsgBuyResponseAmino {
    const obj: any = {};
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.royalty = message.royalty === "" ? undefined : message.royalty;
    obj.proceeds = message.proceeds === "" ? undefined : message.proceeds;
    return obj;
  },
  fromAminoMsg(object: MsgBuyResponseAminoMsg): MsgBuyResponse {
    return MsgBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyResponseProtoMsg): MsgBuyResponse {
    return MsgBuyResponse.decode(message.value);
  },
  toProto(message: MsgBuyResponse): Uint8Array {
    return MsgBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyResponse): MsgBuyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBuyResponse",
      value: MsgBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgHideContent(): MsgHideContent {
  return {
    authority: "",
    targetKind: 0,
    classId: BigInt(0),
    tokenId: BigInt(0),
    reason: 0,
    reasonText: ""
  };
}
/**
 * MsgHideContent hides a class or token.
 * @name MsgHideContent
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgHideContent
 */
export const MsgHideContent = {
  typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
  aminoType: "sparkdream/x/artifact/MsgHideContent",
  encode(message: MsgHideContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.targetKind !== 0) {
      writer.uint32(16).int32(message.targetKind);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(24).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(32).uint64(message.tokenId);
    }
    if (message.reason !== 0) {
      writer.uint32(40).int32(message.reason);
    }
    if (message.reasonText !== "") {
      writer.uint32(50).string(message.reasonText);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHideContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHideContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.targetKind = reader.int32() as any;
          break;
        case 3:
          message.classId = reader.uint64();
          break;
        case 4:
          message.tokenId = reader.uint64();
          break;
        case 5:
          message.reason = reader.int32() as any;
          break;
        case 6:
          message.reasonText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgHideContent>): MsgHideContent {
    const message = createBaseMsgHideContent();
    message.authority = object.authority ?? "";
    message.targetKind = object.targetKind ?? 0;
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.reason = object.reason ?? 0;
    message.reasonText = object.reasonText ?? "";
    return message;
  },
  fromAmino(object: MsgHideContentAmino): MsgHideContent {
    const message = createBaseMsgHideContent();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.target_kind !== undefined && object.target_kind !== null) {
      message.targetKind = object.target_kind;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    return message;
  },
  toAmino(message: MsgHideContent): MsgHideContentAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.target_kind = message.targetKind === 0 ? undefined : message.targetKind;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    return obj;
  },
  fromAminoMsg(object: MsgHideContentAminoMsg): MsgHideContent {
    return MsgHideContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHideContent): MsgHideContentAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgHideContent",
      value: MsgHideContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgHideContentProtoMsg): MsgHideContent {
    return MsgHideContent.decode(message.value);
  },
  toProto(message: MsgHideContent): Uint8Array {
    return MsgHideContent.encode(message).finish();
  },
  toProtoMsg(message: MsgHideContent): MsgHideContentProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
      value: MsgHideContent.encode(message).finish()
    };
  }
};
function createBaseMsgHideContentResponse(): MsgHideContentResponse {
  return {
    hideId: BigInt(0)
  };
}
/**
 * MsgHideContentResponse returns the hide record id.
 * @name MsgHideContentResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgHideContentResponse
 */
export const MsgHideContentResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgHideContentResponse",
  encode(message: MsgHideContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hideId !== BigInt(0)) {
      writer.uint32(8).uint64(message.hideId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHideContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHideContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgHideContentResponse>): MsgHideContentResponse {
    const message = createBaseMsgHideContentResponse();
    message.hideId = object.hideId !== undefined && object.hideId !== null ? BigInt(object.hideId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgHideContentResponseAmino): MsgHideContentResponse {
    const message = createBaseMsgHideContentResponse();
    if (object.hide_id !== undefined && object.hide_id !== null) {
      message.hideId = BigInt(object.hide_id);
    }
    return message;
  },
  toAmino(message: MsgHideContentResponse): MsgHideContentResponseAmino {
    const obj: any = {};
    obj.hide_id = message.hideId !== BigInt(0) ? message.hideId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgHideContentResponseAminoMsg): MsgHideContentResponse {
    return MsgHideContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHideContentResponseProtoMsg): MsgHideContentResponse {
    return MsgHideContentResponse.decode(message.value);
  },
  toProto(message: MsgHideContentResponse): Uint8Array {
    return MsgHideContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgHideContentResponse): MsgHideContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgHideContentResponse",
      value: MsgHideContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnhideContent(): MsgUnhideContent {
  return {
    authority: "",
    hideId: BigInt(0)
  };
}
/**
 * MsgUnhideContent reverses a hide before appeal.
 * @name MsgUnhideContent
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUnhideContent
 */
export const MsgUnhideContent = {
  typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
  aminoType: "sparkdream/x/artifact/MsgUnhideContent",
  encode(message: MsgUnhideContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hideId !== BigInt(0)) {
      writer.uint32(16).uint64(message.hideId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnhideContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnhideContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hideId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnhideContent>): MsgUnhideContent {
    const message = createBaseMsgUnhideContent();
    message.authority = object.authority ?? "";
    message.hideId = object.hideId !== undefined && object.hideId !== null ? BigInt(object.hideId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnhideContentAmino): MsgUnhideContent {
    const message = createBaseMsgUnhideContent();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.hide_id !== undefined && object.hide_id !== null) {
      message.hideId = BigInt(object.hide_id);
    }
    return message;
  },
  toAmino(message: MsgUnhideContent): MsgUnhideContentAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.hide_id = message.hideId !== BigInt(0) ? message.hideId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnhideContentAminoMsg): MsgUnhideContent {
    return MsgUnhideContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnhideContent): MsgUnhideContentAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgUnhideContent",
      value: MsgUnhideContent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnhideContentProtoMsg): MsgUnhideContent {
    return MsgUnhideContent.decode(message.value);
  },
  toProto(message: MsgUnhideContent): Uint8Array {
    return MsgUnhideContent.encode(message).finish();
  },
  toProtoMsg(message: MsgUnhideContent): MsgUnhideContentProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
      value: MsgUnhideContent.encode(message).finish()
    };
  }
};
function createBaseMsgUnhideContentResponse(): MsgUnhideContentResponse {
  return {};
}
/**
 * MsgUnhideContentResponse is empty.
 * @name MsgUnhideContentResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUnhideContentResponse
 */
export const MsgUnhideContentResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUnhideContentResponse",
  encode(_: MsgUnhideContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnhideContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnhideContentResponse();
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
  fromPartial(_: DeepPartial<MsgUnhideContentResponse>): MsgUnhideContentResponse {
    const message = createBaseMsgUnhideContentResponse();
    return message;
  },
  fromAmino(_: MsgUnhideContentResponseAmino): MsgUnhideContentResponse {
    const message = createBaseMsgUnhideContentResponse();
    return message;
  },
  toAmino(_: MsgUnhideContentResponse): MsgUnhideContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnhideContentResponseAminoMsg): MsgUnhideContentResponse {
    return MsgUnhideContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnhideContentResponseProtoMsg): MsgUnhideContentResponse {
    return MsgUnhideContentResponse.decode(message.value);
  },
  toProto(message: MsgUnhideContentResponse): Uint8Array {
    return MsgUnhideContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnhideContentResponse): MsgUnhideContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUnhideContentResponse",
      value: MsgUnhideContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealHide(): MsgAppealHide {
  return {
    appellant: "",
    hideId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgAppealHide appeals a hide. The appeal is opened in x/rep (which charges
 * its standard appeal bond and seats a jury); the verdict comes back through
 * x/rep's ModerationAppealTarget callbacks.
 * @name MsgAppealHide
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAppealHide
 */
export const MsgAppealHide = {
  typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
  aminoType: "sparkdream/x/artifact/MsgAppealHide",
  encode(message: MsgAppealHide, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appellant !== "") {
      writer.uint32(10).string(message.appellant);
    }
    if (message.hideId !== BigInt(0)) {
      writer.uint32(16).uint64(message.hideId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealHide {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealHide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appellant = reader.string();
          break;
        case 2:
          message.hideId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgAppealHide>): MsgAppealHide {
    const message = createBaseMsgAppealHide();
    message.appellant = object.appellant ?? "";
    message.hideId = object.hideId !== undefined && object.hideId !== null ? BigInt(object.hideId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAppealHideAmino): MsgAppealHide {
    const message = createBaseMsgAppealHide();
    if (object.appellant !== undefined && object.appellant !== null) {
      message.appellant = object.appellant;
    }
    if (object.hide_id !== undefined && object.hide_id !== null) {
      message.hideId = BigInt(object.hide_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAppealHide): MsgAppealHideAmino {
    const obj: any = {};
    obj.appellant = message.appellant === "" ? undefined : message.appellant;
    obj.hide_id = message.hideId !== BigInt(0) ? message.hideId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAppealHideAminoMsg): MsgAppealHide {
    return MsgAppealHide.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAppealHide): MsgAppealHideAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAppealHide",
      value: MsgAppealHide.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAppealHideProtoMsg): MsgAppealHide {
    return MsgAppealHide.decode(message.value);
  },
  toProto(message: MsgAppealHide): Uint8Array {
    return MsgAppealHide.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealHide): MsgAppealHideProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
      value: MsgAppealHide.encode(message).finish()
    };
  }
};
function createBaseMsgAppealHideResponse(): MsgAppealHideResponse {
  return {
    appealId: BigInt(0)
  };
}
/**
 * MsgAppealHideResponse returns the x/rep appeal id.
 * @name MsgAppealHideResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAppealHideResponse
 */
export const MsgAppealHideResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAppealHideResponse",
  encode(message: MsgAppealHideResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appealId !== BigInt(0)) {
      writer.uint32(8).uint64(message.appealId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealHideResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealHideResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appealId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealHideResponse>): MsgAppealHideResponse {
    const message = createBaseMsgAppealHideResponse();
    message.appealId = object.appealId !== undefined && object.appealId !== null ? BigInt(object.appealId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAppealHideResponseAmino): MsgAppealHideResponse {
    const message = createBaseMsgAppealHideResponse();
    if (object.appeal_id !== undefined && object.appeal_id !== null) {
      message.appealId = BigInt(object.appeal_id);
    }
    return message;
  },
  toAmino(message: MsgAppealHideResponse): MsgAppealHideResponseAmino {
    const obj: any = {};
    obj.appeal_id = message.appealId !== BigInt(0) ? message.appealId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAppealHideResponseAminoMsg): MsgAppealHideResponse {
    return MsgAppealHideResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealHideResponseProtoMsg): MsgAppealHideResponse {
    return MsgAppealHideResponse.decode(message.value);
  },
  toProto(message: MsgAppealHideResponse): Uint8Array {
    return MsgAppealHideResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealHideResponse): MsgAppealHideResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAppealHideResponse",
      value: MsgAppealHideResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: ArtifactOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams updates the operational parameter subset.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/artifact/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      ArtifactOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
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
          message.operationalParams = ArtifactOperationalParams.decode(reader, reader.uint32());
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
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? ArtifactOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = ArtifactOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? ArtifactOperationalParams.toAmino(message.operationalParams) : ArtifactOperationalParams.toAmino(ArtifactOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgUpdateOperationalParams",
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
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * MsgUpdateOperationalParamsResponse is empty.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse",
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
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIssue(): MsgIssue {
  return {
    minter: "",
    classId: BigInt(0),
    recipients: [],
    metadata: TokenMetadata.fromPartial({}),
    acceptedContentLicense: ""
  };
}
/**
 * MsgIssue mints one shared metadata to a list of recipients as the class
 * owner or a listed minter. Each recipient gets its own token under the
 * usual receive-policy, inbox and deposit rules.
 * @name MsgIssue
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgIssue
 */
export const MsgIssue = {
  typeUrl: "/sparkdream.artifact.v1.MsgIssue",
  aminoType: "sparkdream/x/artifact/MsgIssue",
  encode(message: MsgIssue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    for (const v of message.recipients) {
      writer.uint32(26).string(v!);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.acceptedContentLicense !== "") {
      writer.uint32(42).string(message.acceptedContentLicense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.recipients.push(reader.string());
          break;
        case 4:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.acceptedContentLicense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIssue>): MsgIssue {
    const message = createBaseMsgIssue();
    message.minter = object.minter ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.recipients = object.recipients?.map(e => e) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.acceptedContentLicense = object.acceptedContentLicense ?? "";
    return message;
  },
  fromAmino(object: MsgIssueAmino): MsgIssue {
    const message = createBaseMsgIssue();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    message.recipients = object.recipients?.map(e => e) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.accepted_content_license !== undefined && object.accepted_content_license !== null) {
      message.acceptedContentLicense = object.accepted_content_license;
    }
    return message;
  },
  toAmino(message: MsgIssue): MsgIssueAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    if (message.recipients) {
      obj.recipients = message.recipients.map(e => e);
    } else {
      obj.recipients = message.recipients;
    }
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
    return obj;
  },
  fromAminoMsg(object: MsgIssueAminoMsg): MsgIssue {
    return MsgIssue.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIssue): MsgIssueAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgIssue",
      value: MsgIssue.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIssueProtoMsg): MsgIssue {
    return MsgIssue.decode(message.value);
  },
  toProto(message: MsgIssue): Uint8Array {
    return MsgIssue.encode(message).finish();
  },
  toProtoMsg(message: MsgIssue): MsgIssueProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgIssue",
      value: MsgIssue.encode(message).finish()
    };
  }
};
function createBaseMsgIssueResponse(): MsgIssueResponse {
  return {
    results: []
  };
}
/**
 * MsgIssueResponse lists the issued tokens in recipient order.
 * @name MsgIssueResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgIssueResponse
 */
export const MsgIssueResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgIssueResponse",
  encode(message: MsgIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      MintResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(MintResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIssueResponse>): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    message.results = object.results?.map(e => MintResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgIssueResponseAmino): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    message.results = object.results?.map(e => MintResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgIssueResponse): MsgIssueResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? MintResult.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgIssueResponseAminoMsg): MsgIssueResponse {
    return MsgIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueResponseProtoMsg): MsgIssueResponse {
    return MsgIssueResponse.decode(message.value);
  },
  toProto(message: MsgIssueResponse): Uint8Array {
    return MsgIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueResponse): MsgIssueResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgIssueResponse",
      value: MsgIssueResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenew(): MsgRenew {
  return {
    signer: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    maxPrice: Coin.fromPartial({})
  };
}
/**
 * MsgRenew extends an expiring token by the class term.
 * @name MsgRenew
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRenew
 */
export const MsgRenew = {
  typeUrl: "/sparkdream.artifact.v1.MsgRenew",
  aminoType: "sparkdream/x/artifact/MsgRenew",
  encode(message: MsgRenew, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.maxPrice !== undefined) {
      Coin.encode(message.maxPrice, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRenew {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenew();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.maxPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRenew>): MsgRenew {
    const message = createBaseMsgRenew();
    message.signer = object.signer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.maxPrice = object.maxPrice !== undefined && object.maxPrice !== null ? Coin.fromPartial(object.maxPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgRenewAmino): MsgRenew {
    const message = createBaseMsgRenew();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = Coin.fromAmino(object.max_price);
    }
    return message;
  },
  toAmino(message: MsgRenew): MsgRenewAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.max_price = message.maxPrice ? Coin.toAmino(message.maxPrice) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgRenewAminoMsg): MsgRenew {
    return MsgRenew.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRenew): MsgRenewAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRenew",
      value: MsgRenew.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRenewProtoMsg): MsgRenew {
    return MsgRenew.decode(message.value);
  },
  toProto(message: MsgRenew): Uint8Array {
    return MsgRenew.encode(message).finish();
  },
  toProtoMsg(message: MsgRenew): MsgRenewProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRenew",
      value: MsgRenew.encode(message).finish()
    };
  }
};
function createBaseMsgRenewResponse(): MsgRenewResponse {
  return {
    expiresAt: BigInt(0)
  };
}
/**
 * MsgRenewResponse carries the new expiry.
 * @name MsgRenewResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRenewResponse
 */
export const MsgRenewResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRenewResponse",
  encode(message: MsgRenewResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(8).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRenewResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRenewResponse>): MsgRenewResponse {
    const message = createBaseMsgRenewResponse();
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRenewResponseAmino): MsgRenewResponse {
    const message = createBaseMsgRenewResponse();
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: MsgRenewResponse): MsgRenewResponseAmino {
    const obj: any = {};
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRenewResponseAminoMsg): MsgRenewResponse {
    return MsgRenewResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewResponseProtoMsg): MsgRenewResponse {
    return MsgRenewResponse.decode(message.value);
  },
  toProto(message: MsgRenewResponse): Uint8Array {
    return MsgRenewResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewResponse): MsgRenewResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRenewResponse",
      value: MsgRenewResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    signer: "",
    classId: BigInt(0),
    tokenIds: []
  };
}
/**
 * MsgRedeem marks tokens as redeemed. Signed by the class owner or a
 * listed minter (the venue). Never moves ownership.
 * @name MsgRedeem
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRedeem
 */
export const MsgRedeem = {
  typeUrl: "/sparkdream.artifact.v1.MsgRedeem",
  aminoType: "sparkdream/x/artifact/MsgRedeem",
  encode(message: MsgRedeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    writer.uint32(26).fork();
    for (const v of message.tokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tokenIds.push(reader.uint64());
            }
          } else {
            message.tokenIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRedeem>): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.signer = object.signer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenIds = object.tokenIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRedeemAmino): MsgRedeem {
    const message = createBaseMsgRedeem();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    message.tokenIds = object.token_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgRedeem): MsgRedeemAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    if (message.tokenIds) {
      obj.token_ids = message.tokenIds.map(e => e.toString());
    } else {
      obj.token_ids = message.tokenIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRedeemAminoMsg): MsgRedeem {
    return MsgRedeem.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeem): MsgRedeemAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRedeem",
      value: MsgRedeem.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemProtoMsg): MsgRedeem {
    return MsgRedeem.decode(message.value);
  },
  toProto(message: MsgRedeem): Uint8Array {
    return MsgRedeem.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeem): MsgRedeemProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRedeem",
      value: MsgRedeem.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {};
}
/**
 * MsgRedeemResponse is empty.
 * @name MsgRedeemResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRedeemResponse
 */
export const MsgRedeemResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRedeemResponse",
  encode(_: MsgRedeemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemResponse();
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
  fromPartial(_: DeepPartial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    return message;
  },
  fromAmino(_: MsgRedeemResponseAmino): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    return message;
  },
  toAmino(_: MsgRedeemResponse): MsgRedeemResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedeemResponseAminoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemResponseProtoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.decode(message.value);
  },
  toProto(message: MsgRedeemResponse): Uint8Array {
    return MsgRedeemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemResponse): MsgRedeemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRedeemResponse",
      value: MsgRedeemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLockRoyalty(): MsgLockRoyalty {
  return {
    owner: "",
    classId: BigInt(0)
  };
}
/**
 * MsgLockRoyalty freezes royalty_bps and royalty_recipients forever.
 * @name MsgLockRoyalty
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgLockRoyalty
 */
export const MsgLockRoyalty = {
  typeUrl: "/sparkdream.artifact.v1.MsgLockRoyalty",
  aminoType: "sparkdream/x/artifact/MsgLockRoyalty",
  encode(message: MsgLockRoyalty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockRoyalty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockRoyalty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLockRoyalty>): MsgLockRoyalty {
    const message = createBaseMsgLockRoyalty();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLockRoyaltyAmino): MsgLockRoyalty {
    const message = createBaseMsgLockRoyalty();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    return message;
  },
  toAmino(message: MsgLockRoyalty): MsgLockRoyaltyAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLockRoyaltyAminoMsg): MsgLockRoyalty {
    return MsgLockRoyalty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockRoyalty): MsgLockRoyaltyAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgLockRoyalty",
      value: MsgLockRoyalty.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockRoyaltyProtoMsg): MsgLockRoyalty {
    return MsgLockRoyalty.decode(message.value);
  },
  toProto(message: MsgLockRoyalty): Uint8Array {
    return MsgLockRoyalty.encode(message).finish();
  },
  toProtoMsg(message: MsgLockRoyalty): MsgLockRoyaltyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgLockRoyalty",
      value: MsgLockRoyalty.encode(message).finish()
    };
  }
};
function createBaseMsgLockRoyaltyResponse(): MsgLockRoyaltyResponse {
  return {};
}
/**
 * MsgLockRoyaltyResponse is empty.
 * @name MsgLockRoyaltyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgLockRoyaltyResponse
 */
export const MsgLockRoyaltyResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgLockRoyaltyResponse",
  encode(_: MsgLockRoyaltyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockRoyaltyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockRoyaltyResponse();
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
  fromPartial(_: DeepPartial<MsgLockRoyaltyResponse>): MsgLockRoyaltyResponse {
    const message = createBaseMsgLockRoyaltyResponse();
    return message;
  },
  fromAmino(_: MsgLockRoyaltyResponseAmino): MsgLockRoyaltyResponse {
    const message = createBaseMsgLockRoyaltyResponse();
    return message;
  },
  toAmino(_: MsgLockRoyaltyResponse): MsgLockRoyaltyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLockRoyaltyResponseAminoMsg): MsgLockRoyaltyResponse {
    return MsgLockRoyaltyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockRoyaltyResponseProtoMsg): MsgLockRoyaltyResponse {
    return MsgLockRoyaltyResponse.decode(message.value);
  },
  toProto(message: MsgLockRoyaltyResponse): Uint8Array {
    return MsgLockRoyaltyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockRoyaltyResponse): MsgLockRoyaltyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgLockRoyaltyResponse",
      value: MsgLockRoyaltyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReveal(): MsgReveal {
  return {
    signer: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    metadata: TokenMetadata.fromPartial({}),
    salt: "",
    proof: []
  };
}
/**
 * MsgReveal sets a blind-minted token's metadata. Signed by the class owner
 * or a listed minter; the leaf built from (class, token, salt, metadata)
 * must prove into the class commitment.
 * @name MsgReveal
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgReveal
 */
export const MsgReveal = {
  typeUrl: "/sparkdream.artifact.v1.MsgReveal",
  aminoType: "sparkdream/x/artifact/MsgReveal",
  encode(message: MsgReveal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.salt !== "") {
      writer.uint32(42).string(message.salt);
    }
    for (const v of message.proof) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReveal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReveal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.salt = reader.string();
          break;
        case 6:
          message.proof.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReveal>): MsgReveal {
    const message = createBaseMsgReveal();
    message.signer = object.signer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.salt = object.salt ?? "";
    message.proof = object.proof?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRevealAmino): MsgReveal {
    const message = createBaseMsgReveal();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    }
    message.proof = object.proof?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgReveal): MsgRevealAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.salt = message.salt === "" ? undefined : message.salt;
    if (message.proof) {
      obj.proof = message.proof.map(e => e);
    } else {
      obj.proof = message.proof;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRevealAminoMsg): MsgReveal {
    return MsgReveal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReveal): MsgRevealAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgReveal",
      value: MsgReveal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevealProtoMsg): MsgReveal {
    return MsgReveal.decode(message.value);
  },
  toProto(message: MsgReveal): Uint8Array {
    return MsgReveal.encode(message).finish();
  },
  toProtoMsg(message: MsgReveal): MsgRevealProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgReveal",
      value: MsgReveal.encode(message).finish()
    };
  }
};
function createBaseMsgRevealResponse(): MsgRevealResponse {
  return {
    metadataHash: ""
  };
}
/**
 * MsgRevealResponse carries the revealed metadata hash.
 * @name MsgRevealResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealResponse
 */
export const MsgRevealResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevealResponse",
  encode(message: MsgRevealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadataHash !== "") {
      writer.uint32(10).string(message.metadataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevealResponse>): MsgRevealResponse {
    const message = createBaseMsgRevealResponse();
    message.metadataHash = object.metadataHash ?? "";
    return message;
  },
  fromAmino(object: MsgRevealResponseAmino): MsgRevealResponse {
    const message = createBaseMsgRevealResponse();
    if (object.metadata_hash !== undefined && object.metadata_hash !== null) {
      message.metadataHash = object.metadata_hash;
    }
    return message;
  },
  toAmino(message: MsgRevealResponse): MsgRevealResponseAmino {
    const obj: any = {};
    obj.metadata_hash = message.metadataHash === "" ? undefined : message.metadataHash;
    return obj;
  },
  fromAminoMsg(object: MsgRevealResponseAminoMsg): MsgRevealResponse {
    return MsgRevealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevealResponseProtoMsg): MsgRevealResponse {
    return MsgRevealResponse.decode(message.value);
  },
  toProto(message: MsgRevealResponse): Uint8Array {
    return MsgRevealResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevealResponse): MsgRevealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevealResponse",
      value: MsgRevealResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevealSeed(): MsgRevealSeed {
  return {
    owner: "",
    classId: BigInt(0),
    seed: ""
  };
}
/**
 * MsgRevealSeed discloses the seed secret committed at class creation.
 * @name MsgRevealSeed
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealSeed
 */
export const MsgRevealSeed = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevealSeed",
  aminoType: "sparkdream/x/artifact/MsgRevealSeed",
  encode(message: MsgRevealSeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.seed !== "") {
      writer.uint32(26).string(message.seed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevealSeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevealSeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.seed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevealSeed>): MsgRevealSeed {
    const message = createBaseMsgRevealSeed();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.seed = object.seed ?? "";
    return message;
  },
  fromAmino(object: MsgRevealSeedAmino): MsgRevealSeed {
    const message = createBaseMsgRevealSeed();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = object.seed;
    }
    return message;
  },
  toAmino(message: MsgRevealSeed): MsgRevealSeedAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.seed = message.seed === "" ? undefined : message.seed;
    return obj;
  },
  fromAminoMsg(object: MsgRevealSeedAminoMsg): MsgRevealSeed {
    return MsgRevealSeed.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevealSeed): MsgRevealSeedAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRevealSeed",
      value: MsgRevealSeed.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevealSeedProtoMsg): MsgRevealSeed {
    return MsgRevealSeed.decode(message.value);
  },
  toProto(message: MsgRevealSeed): Uint8Array {
    return MsgRevealSeed.encode(message).finish();
  },
  toProtoMsg(message: MsgRevealSeed): MsgRevealSeedProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevealSeed",
      value: MsgRevealSeed.encode(message).finish()
    };
  }
};
function createBaseMsgRevealSeedResponse(): MsgRevealSeedResponse {
  return {};
}
/**
 * MsgRevealSeedResponse is empty.
 * @name MsgRevealSeedResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevealSeedResponse
 */
export const MsgRevealSeedResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevealSeedResponse",
  encode(_: MsgRevealSeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevealSeedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevealSeedResponse();
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
  fromPartial(_: DeepPartial<MsgRevealSeedResponse>): MsgRevealSeedResponse {
    const message = createBaseMsgRevealSeedResponse();
    return message;
  },
  fromAmino(_: MsgRevealSeedResponseAmino): MsgRevealSeedResponse {
    const message = createBaseMsgRevealSeedResponse();
    return message;
  },
  toAmino(_: MsgRevealSeedResponse): MsgRevealSeedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevealSeedResponseAminoMsg): MsgRevealSeedResponse {
    return MsgRevealSeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevealSeedResponseProtoMsg): MsgRevealSeedResponse {
    return MsgRevealSeedResponse.decode(message.value);
  },
  toProto(message: MsgRevealSeedResponse): Uint8Array {
    return MsgRevealSeedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevealSeedResponse): MsgRevealSeedResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevealSeedResponse",
      value: MsgRevealSeedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProposeMedia(): MsgProposeMedia {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    metadata: TokenMetadata.fromPartial({})
  };
}
/**
 * MsgProposeMedia offers the holder an additional media version.
 * @name MsgProposeMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeMedia
 */
export const MsgProposeMedia = {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeMedia",
  aminoType: "sparkdream/x/artifact/MsgProposeMedia",
  encode(message: MsgProposeMedia, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeMedia {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeMedia>): MsgProposeMedia {
    const message = createBaseMsgProposeMedia();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MsgProposeMediaAmino): MsgProposeMedia {
    const message = createBaseMsgProposeMedia();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgProposeMedia): MsgProposeMediaAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgProposeMediaAminoMsg): MsgProposeMedia {
    return MsgProposeMedia.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeMedia): MsgProposeMediaAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgProposeMedia",
      value: MsgProposeMedia.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProposeMediaProtoMsg): MsgProposeMedia {
    return MsgProposeMedia.decode(message.value);
  },
  toProto(message: MsgProposeMedia): Uint8Array {
    return MsgProposeMedia.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMedia): MsgProposeMediaProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgProposeMedia",
      value: MsgProposeMedia.encode(message).finish()
    };
  }
};
function createBaseMsgProposeMediaResponse(): MsgProposeMediaResponse {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * MsgProposeMediaResponse carries the proposal id.
 * @name MsgProposeMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgProposeMediaResponse
 */
export const MsgProposeMediaResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgProposeMediaResponse",
  encode(message: MsgProposeMediaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeMediaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMediaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeMediaResponse>): MsgProposeMediaResponse {
    const message = createBaseMsgProposeMediaResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgProposeMediaResponseAmino): MsgProposeMediaResponse {
    const message = createBaseMsgProposeMediaResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgProposeMediaResponse): MsgProposeMediaResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgProposeMediaResponseAminoMsg): MsgProposeMediaResponse {
    return MsgProposeMediaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeMediaResponseProtoMsg): MsgProposeMediaResponse {
    return MsgProposeMediaResponse.decode(message.value);
  },
  toProto(message: MsgProposeMediaResponse): Uint8Array {
    return MsgProposeMediaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMediaResponse): MsgProposeMediaResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgProposeMediaResponse",
      value: MsgProposeMediaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptMedia(): MsgAcceptMedia {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    proposalId: BigInt(0),
    display: false
  };
}
/**
 * MsgAcceptMedia moves a proposal into the token's accepted versions.
 * @name MsgAcceptMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptMedia
 */
export const MsgAcceptMedia = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptMedia",
  aminoType: "sparkdream/x/artifact/MsgAcceptMedia",
  encode(message: MsgAcceptMedia, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(32).uint64(message.proposalId);
    }
    if (message.display === true) {
      writer.uint32(40).bool(message.display);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptMedia {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.proposalId = reader.uint64();
          break;
        case 5:
          message.display = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptMedia>): MsgAcceptMedia {
    const message = createBaseMsgAcceptMedia();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.display = object.display ?? false;
    return message;
  },
  fromAmino(object: MsgAcceptMediaAmino): MsgAcceptMedia {
    const message = createBaseMsgAcceptMedia();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = object.display;
    }
    return message;
  },
  toAmino(message: MsgAcceptMedia): MsgAcceptMediaAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.display = message.display === false ? undefined : message.display;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptMediaAminoMsg): MsgAcceptMedia {
    return MsgAcceptMedia.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptMedia): MsgAcceptMediaAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAcceptMedia",
      value: MsgAcceptMedia.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptMediaProtoMsg): MsgAcceptMedia {
    return MsgAcceptMedia.decode(message.value);
  },
  toProto(message: MsgAcceptMedia): Uint8Array {
    return MsgAcceptMedia.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptMedia): MsgAcceptMediaProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptMedia",
      value: MsgAcceptMedia.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptMediaResponse(): MsgAcceptMediaResponse {
  return {
    version: 0
  };
}
/**
 * MsgAcceptMediaResponse carries the new version number (1-based).
 * @name MsgAcceptMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptMediaResponse
 */
export const MsgAcceptMediaResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptMediaResponse",
  encode(message: MsgAcceptMediaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptMediaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptMediaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptMediaResponse>): MsgAcceptMediaResponse {
    const message = createBaseMsgAcceptMediaResponse();
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: MsgAcceptMediaResponseAmino): MsgAcceptMediaResponse {
    const message = createBaseMsgAcceptMediaResponse();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: MsgAcceptMediaResponse): MsgAcceptMediaResponseAmino {
    const obj: any = {};
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptMediaResponseAminoMsg): MsgAcceptMediaResponse {
    return MsgAcceptMediaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptMediaResponseProtoMsg): MsgAcceptMediaResponse {
    return MsgAcceptMediaResponse.decode(message.value);
  },
  toProto(message: MsgAcceptMediaResponse): Uint8Array {
    return MsgAcceptMediaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptMediaResponse): MsgAcceptMediaResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptMediaResponse",
      value: MsgAcceptMediaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRejectMedia(): MsgRejectMedia {
  return {
    signer: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    proposalId: BigInt(0)
  };
}
/**
 * MsgRejectMedia discards a proposal (holder) or withdraws it (class owner).
 * @name MsgRejectMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectMedia
 */
export const MsgRejectMedia = {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectMedia",
  aminoType: "sparkdream/x/artifact/MsgRejectMedia",
  encode(message: MsgRejectMedia, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(32).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectMedia {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRejectMedia>): MsgRejectMedia {
    const message = createBaseMsgRejectMedia();
    message.signer = object.signer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRejectMediaAmino): MsgRejectMedia {
    const message = createBaseMsgRejectMedia();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgRejectMedia): MsgRejectMediaAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRejectMediaAminoMsg): MsgRejectMedia {
    return MsgRejectMedia.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRejectMedia): MsgRejectMediaAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRejectMedia",
      value: MsgRejectMedia.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRejectMediaProtoMsg): MsgRejectMedia {
    return MsgRejectMedia.decode(message.value);
  },
  toProto(message: MsgRejectMedia): Uint8Array {
    return MsgRejectMedia.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectMedia): MsgRejectMediaProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRejectMedia",
      value: MsgRejectMedia.encode(message).finish()
    };
  }
};
function createBaseMsgRejectMediaResponse(): MsgRejectMediaResponse {
  return {};
}
/**
 * MsgRejectMediaResponse is empty.
 * @name MsgRejectMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRejectMediaResponse
 */
export const MsgRejectMediaResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRejectMediaResponse",
  encode(_: MsgRejectMediaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectMediaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectMediaResponse();
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
  fromPartial(_: DeepPartial<MsgRejectMediaResponse>): MsgRejectMediaResponse {
    const message = createBaseMsgRejectMediaResponse();
    return message;
  },
  fromAmino(_: MsgRejectMediaResponseAmino): MsgRejectMediaResponse {
    const message = createBaseMsgRejectMediaResponse();
    return message;
  },
  toAmino(_: MsgRejectMediaResponse): MsgRejectMediaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRejectMediaResponseAminoMsg): MsgRejectMediaResponse {
    return MsgRejectMediaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectMediaResponseProtoMsg): MsgRejectMediaResponse {
    return MsgRejectMediaResponse.decode(message.value);
  },
  toProto(message: MsgRejectMediaResponse): Uint8Array {
    return MsgRejectMediaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectMediaResponse): MsgRejectMediaResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRejectMediaResponse",
      value: MsgRejectMediaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDisplayedMedia(): MsgSetDisplayedMedia {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    version: 0
  };
}
/**
 * MsgSetDisplayedMedia picks the displayed version: 0 = the stored
 * metadata, n = media_versions[n-1].
 * @name MsgSetDisplayedMedia
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetDisplayedMedia
 */
export const MsgSetDisplayedMedia = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMedia",
  aminoType: "sparkdream/x/artifact/MsgSetDisplayedMedia",
  encode(message: MsgSetDisplayedMedia, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.version !== 0) {
      writer.uint32(32).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDisplayedMedia {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDisplayedMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetDisplayedMedia>): MsgSetDisplayedMedia {
    const message = createBaseMsgSetDisplayedMedia();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: MsgSetDisplayedMediaAmino): MsgSetDisplayedMedia {
    const message = createBaseMsgSetDisplayedMedia();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: MsgSetDisplayedMedia): MsgSetDisplayedMediaAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: MsgSetDisplayedMediaAminoMsg): MsgSetDisplayedMedia {
    return MsgSetDisplayedMedia.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDisplayedMedia): MsgSetDisplayedMediaAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSetDisplayedMedia",
      value: MsgSetDisplayedMedia.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDisplayedMediaProtoMsg): MsgSetDisplayedMedia {
    return MsgSetDisplayedMedia.decode(message.value);
  },
  toProto(message: MsgSetDisplayedMedia): Uint8Array {
    return MsgSetDisplayedMedia.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDisplayedMedia): MsgSetDisplayedMediaProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMedia",
      value: MsgSetDisplayedMedia.encode(message).finish()
    };
  }
};
function createBaseMsgSetDisplayedMediaResponse(): MsgSetDisplayedMediaResponse {
  return {};
}
/**
 * MsgSetDisplayedMediaResponse is empty.
 * @name MsgSetDisplayedMediaResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetDisplayedMediaResponse
 */
export const MsgSetDisplayedMediaResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMediaResponse",
  encode(_: MsgSetDisplayedMediaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDisplayedMediaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDisplayedMediaResponse();
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
  fromPartial(_: DeepPartial<MsgSetDisplayedMediaResponse>): MsgSetDisplayedMediaResponse {
    const message = createBaseMsgSetDisplayedMediaResponse();
    return message;
  },
  fromAmino(_: MsgSetDisplayedMediaResponseAmino): MsgSetDisplayedMediaResponse {
    const message = createBaseMsgSetDisplayedMediaResponse();
    return message;
  },
  toAmino(_: MsgSetDisplayedMediaResponse): MsgSetDisplayedMediaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDisplayedMediaResponseAminoMsg): MsgSetDisplayedMediaResponse {
    return MsgSetDisplayedMediaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDisplayedMediaResponseProtoMsg): MsgSetDisplayedMediaResponse {
    return MsgSetDisplayedMediaResponse.decode(message.value);
  },
  toProto(message: MsgSetDisplayedMediaResponse): Uint8Array {
    return MsgSetDisplayedMediaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDisplayedMediaResponse): MsgSetDisplayedMediaResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetDisplayedMediaResponse",
      value: MsgSetDisplayedMediaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEdition(): MsgCreateEdition {
  return {
    minter: "",
    classId: BigInt(0),
    metadata: TokenMetadata.fromPartial({}),
    maxSupply: BigInt(0),
    claim: ImpactClaim.fromPartial({}),
    acceptedContentLicense: ""
  };
}
/**
 * MsgCreateEdition creates an edition of an EDITIONS class (class owner or
 * listed minter). With a claim it is an impact certificate.
 * @name MsgCreateEdition
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateEdition
 */
export const MsgCreateEdition = {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateEdition",
  aminoType: "sparkdream/x/artifact/MsgCreateEdition",
  encode(message: MsgCreateEdition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.metadata !== undefined) {
      TokenMetadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxSupply !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxSupply);
    }
    if (message.claim !== undefined) {
      ImpactClaim.encode(message.claim, writer.uint32(42).fork()).ldelim();
    }
    if (message.acceptedContentLicense !== "") {
      writer.uint32(50).string(message.acceptedContentLicense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateEdition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEdition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.metadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxSupply = reader.uint64();
          break;
        case 5:
          message.claim = ImpactClaim.decode(reader, reader.uint32());
          break;
        case 6:
          message.acceptedContentLicense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateEdition>): MsgCreateEdition {
    const message = createBaseMsgCreateEdition();
    message.minter = object.minter ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? TokenMetadata.fromPartial(object.metadata) : undefined;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.claim = object.claim !== undefined && object.claim !== null ? ImpactClaim.fromPartial(object.claim) : undefined;
    message.acceptedContentLicense = object.acceptedContentLicense ?? "";
    return message;
  },
  fromAmino(object: MsgCreateEditionAmino): MsgCreateEdition {
    const message = createBaseMsgCreateEdition();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = TokenMetadata.fromAmino(object.metadata);
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = BigInt(object.max_supply);
    }
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = ImpactClaim.fromAmino(object.claim);
    }
    if (object.accepted_content_license !== undefined && object.accepted_content_license !== null) {
      message.acceptedContentLicense = object.accepted_content_license;
    }
    return message;
  },
  toAmino(message: MsgCreateEdition): MsgCreateEditionAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
    obj.claim = message.claim ? ImpactClaim.toAmino(message.claim) : ImpactClaim.toAmino(ImpactClaim.fromPartial({}));
    obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEditionAminoMsg): MsgCreateEdition {
    return MsgCreateEdition.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateEdition): MsgCreateEditionAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCreateEdition",
      value: MsgCreateEdition.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateEditionProtoMsg): MsgCreateEdition {
    return MsgCreateEdition.decode(message.value);
  },
  toProto(message: MsgCreateEdition): Uint8Array {
    return MsgCreateEdition.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEdition): MsgCreateEditionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCreateEdition",
      value: MsgCreateEdition.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEditionResponse(): MsgCreateEditionResponse {
  return {
    editionId: BigInt(0)
  };
}
/**
 * MsgCreateEditionResponse returns the new edition id.
 * @name MsgCreateEditionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCreateEditionResponse
 */
export const MsgCreateEditionResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCreateEditionResponse",
  encode(message: MsgCreateEditionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.editionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.editionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateEditionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEditionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.editionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateEditionResponse>): MsgCreateEditionResponse {
    const message = createBaseMsgCreateEditionResponse();
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateEditionResponseAmino): MsgCreateEditionResponse {
    const message = createBaseMsgCreateEditionResponse();
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    return message;
  },
  toAmino(message: MsgCreateEditionResponse): MsgCreateEditionResponseAmino {
    const obj: any = {};
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEditionResponseAminoMsg): MsgCreateEditionResponse {
    return MsgCreateEditionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEditionResponseProtoMsg): MsgCreateEditionResponse {
    return MsgCreateEditionResponse.decode(message.value);
  },
  toProto(message: MsgCreateEditionResponse): Uint8Array {
    return MsgCreateEditionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEditionResponse): MsgCreateEditionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCreateEditionResponse",
      value: MsgCreateEditionResponse.encode(message).finish()
    };
  }
};
function createBaseUnitMintEntry(): UnitMintEntry {
  return {
    recipient: "",
    amount: BigInt(0)
  };
}
/**
 * UnitMintEntry is one recipient of a unit mint.
 * @name UnitMintEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitMintEntry
 */
export const UnitMintEntry = {
  typeUrl: "/sparkdream.artifact.v1.UnitMintEntry",
  encode(message: UnitMintEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnitMintEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitMintEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnitMintEntry>): UnitMintEntry {
    const message = createBaseUnitMintEntry();
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnitMintEntryAmino): UnitMintEntry {
    const message = createBaseUnitMintEntry();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: UnitMintEntry): UnitMintEntryAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnitMintEntryAminoMsg): UnitMintEntry {
    return UnitMintEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UnitMintEntryProtoMsg): UnitMintEntry {
    return UnitMintEntry.decode(message.value);
  },
  toProto(message: UnitMintEntry): Uint8Array {
    return UnitMintEntry.encode(message).finish();
  },
  toProtoMsg(message: UnitMintEntry): UnitMintEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.UnitMintEntry",
      value: UnitMintEntry.encode(message).finish()
    };
  }
};
function createBaseUnitResult(): UnitResult {
  return {
    recipient: "",
    amount: BigInt(0),
    delivered: false,
    pendingId: BigInt(0)
  };
}
/**
 * UnitResult reports one unit delivery: delivered directly, or parked in
 * the recipient's inbox as pending_id (inbox ref (0, pending_id)).
 * @name UnitResult
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitResult
 */
export const UnitResult = {
  typeUrl: "/sparkdream.artifact.v1.UnitResult",
  encode(message: UnitResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.delivered === true) {
      writer.uint32(24).bool(message.delivered);
    }
    if (message.pendingId !== BigInt(0)) {
      writer.uint32(32).uint64(message.pendingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnitResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.amount = reader.uint64();
          break;
        case 3:
          message.delivered = reader.bool();
          break;
        case 4:
          message.pendingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnitResult>): UnitResult {
    const message = createBaseUnitResult();
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.delivered = object.delivered ?? false;
    message.pendingId = object.pendingId !== undefined && object.pendingId !== null ? BigInt(object.pendingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnitResultAmino): UnitResult {
    const message = createBaseUnitResult();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.delivered !== undefined && object.delivered !== null) {
      message.delivered = object.delivered;
    }
    if (object.pending_id !== undefined && object.pending_id !== null) {
      message.pendingId = BigInt(object.pending_id);
    }
    return message;
  },
  toAmino(message: UnitResult): UnitResultAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.delivered = message.delivered === false ? undefined : message.delivered;
    obj.pending_id = message.pendingId !== BigInt(0) ? message.pendingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnitResultAminoMsg): UnitResult {
    return UnitResult.fromAmino(object.value);
  },
  fromProtoMsg(message: UnitResultProtoMsg): UnitResult {
    return UnitResult.decode(message.value);
  },
  toProto(message: UnitResult): Uint8Array {
    return UnitResult.encode(message).finish();
  },
  toProtoMsg(message: UnitResult): UnitResultProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.UnitResult",
      value: UnitResult.encode(message).finish()
    };
  }
};
function createBaseMsgMintUnits(): MsgMintUnits {
  return {
    minter: "",
    classId: BigInt(0),
    editionId: BigInt(0),
    entries: []
  };
}
/**
 * MsgMintUnits mints units of an edition (class owner or listed minter).
 * @name MsgMintUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintUnits
 */
export const MsgMintUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgMintUnits",
  aminoType: "sparkdream/x/artifact/MsgMintUnits",
  encode(message: MsgMintUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.editionId);
    }
    for (const v of message.entries) {
      UnitMintEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.editionId = reader.uint64();
          break;
        case 4:
          message.entries.push(UnitMintEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintUnits>): MsgMintUnits {
    const message = createBaseMsgMintUnits();
    message.minter = object.minter ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.entries = object.entries?.map(e => UnitMintEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMintUnitsAmino): MsgMintUnits {
    const message = createBaseMsgMintUnits();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    message.entries = object.entries?.map(e => UnitMintEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMintUnits): MsgMintUnitsAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnitMintEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMintUnitsAminoMsg): MsgMintUnits {
    return MsgMintUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintUnits): MsgMintUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgMintUnits",
      value: MsgMintUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintUnitsProtoMsg): MsgMintUnits {
    return MsgMintUnits.decode(message.value);
  },
  toProto(message: MsgMintUnits): Uint8Array {
    return MsgMintUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgMintUnits): MsgMintUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgMintUnits",
      value: MsgMintUnits.encode(message).finish()
    };
  }
};
function createBaseMsgMintUnitsResponse(): MsgMintUnitsResponse {
  return {
    results: []
  };
}
/**
 * MsgMintUnitsResponse reports each entry.
 * @name MsgMintUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMintUnitsResponse
 */
export const MsgMintUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgMintUnitsResponse",
  encode(message: MsgMintUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      UnitResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintUnitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(UnitResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintUnitsResponse>): MsgMintUnitsResponse {
    const message = createBaseMsgMintUnitsResponse();
    message.results = object.results?.map(e => UnitResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMintUnitsResponseAmino): MsgMintUnitsResponse {
    const message = createBaseMsgMintUnitsResponse();
    message.results = object.results?.map(e => UnitResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMintUnitsResponse): MsgMintUnitsResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? UnitResult.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMintUnitsResponseAminoMsg): MsgMintUnitsResponse {
    return MsgMintUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintUnitsResponseProtoMsg): MsgMintUnitsResponse {
    return MsgMintUnitsResponse.decode(message.value);
  },
  toProto(message: MsgMintUnitsResponse): Uint8Array {
    return MsgMintUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintUnitsResponse): MsgMintUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgMintUnitsResponse",
      value: MsgMintUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseUnitTransferEntry(): UnitTransferEntry {
  return {
    classId: BigInt(0),
    editionId: BigInt(0),
    recipient: "",
    amount: BigInt(0)
  };
}
/**
 * UnitTransferEntry moves units of one edition to one recipient.
 * @name UnitTransferEntry
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.UnitTransferEntry
 */
export const UnitTransferEntry = {
  typeUrl: "/sparkdream.artifact.v1.UnitTransferEntry",
  encode(message: UnitTransferEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== BigInt(0)) {
      writer.uint32(8).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnitTransferEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitTransferEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.uint64();
          break;
        case 2:
          message.editionId = reader.uint64();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnitTransferEntry>): UnitTransferEntry {
    const message = createBaseUnitTransferEntry();
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnitTransferEntryAmino): UnitTransferEntry {
    const message = createBaseUnitTransferEntry();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: UnitTransferEntry): UnitTransferEntryAmino {
    const obj: any = {};
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnitTransferEntryAminoMsg): UnitTransferEntry {
    return UnitTransferEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UnitTransferEntryProtoMsg): UnitTransferEntry {
    return UnitTransferEntry.decode(message.value);
  },
  toProto(message: UnitTransferEntry): Uint8Array {
    return UnitTransferEntry.encode(message).finish();
  },
  toProtoMsg(message: UnitTransferEntry): UnitTransferEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.UnitTransferEntry",
      value: UnitTransferEntry.encode(message).finish()
    };
  }
};
function createBaseMsgTransferUnits(): MsgTransferUnits {
  return {
    sender: "",
    entries: []
  };
}
/**
 * MsgTransferUnits moves units to recipients (or their inboxes).
 * @name MsgTransferUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferUnits
 */
export const MsgTransferUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgTransferUnits",
  aminoType: "sparkdream/x/artifact/MsgTransferUnits",
  encode(message: MsgTransferUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.entries) {
      UnitTransferEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.entries.push(UnitTransferEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferUnits>): MsgTransferUnits {
    const message = createBaseMsgTransferUnits();
    message.sender = object.sender ?? "";
    message.entries = object.entries?.map(e => UnitTransferEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgTransferUnitsAmino): MsgTransferUnits {
    const message = createBaseMsgTransferUnits();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.entries = object.entries?.map(e => UnitTransferEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgTransferUnits): MsgTransferUnitsAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnitTransferEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransferUnitsAminoMsg): MsgTransferUnits {
    return MsgTransferUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferUnits): MsgTransferUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgTransferUnits",
      value: MsgTransferUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferUnitsProtoMsg): MsgTransferUnits {
    return MsgTransferUnits.decode(message.value);
  },
  toProto(message: MsgTransferUnits): Uint8Array {
    return MsgTransferUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferUnits): MsgTransferUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgTransferUnits",
      value: MsgTransferUnits.encode(message).finish()
    };
  }
};
function createBaseMsgTransferUnitsResponse(): MsgTransferUnitsResponse {
  return {
    results: []
  };
}
/**
 * MsgTransferUnitsResponse reports each entry.
 * @name MsgTransferUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgTransferUnitsResponse
 */
export const MsgTransferUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgTransferUnitsResponse",
  encode(message: MsgTransferUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      UnitResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferUnitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(UnitResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferUnitsResponse>): MsgTransferUnitsResponse {
    const message = createBaseMsgTransferUnitsResponse();
    message.results = object.results?.map(e => UnitResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgTransferUnitsResponseAmino): MsgTransferUnitsResponse {
    const message = createBaseMsgTransferUnitsResponse();
    message.results = object.results?.map(e => UnitResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgTransferUnitsResponse): MsgTransferUnitsResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? UnitResult.toAmino(e) : undefined);
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransferUnitsResponseAminoMsg): MsgTransferUnitsResponse {
    return MsgTransferUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferUnitsResponseProtoMsg): MsgTransferUnitsResponse {
    return MsgTransferUnitsResponse.decode(message.value);
  },
  toProto(message: MsgTransferUnitsResponse): Uint8Array {
    return MsgTransferUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferUnitsResponse): MsgTransferUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgTransferUnitsResponse",
      value: MsgTransferUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnUnits(): MsgBurnUnits {
  return {
    owner: "",
    classId: BigInt(0),
    editionId: BigInt(0),
    amount: BigInt(0)
  };
}
/**
 * MsgBurnUnits burns free units the signer holds.
 * @name MsgBurnUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnUnits
 */
export const MsgBurnUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgBurnUnits",
  aminoType: "sparkdream/x/artifact/MsgBurnUnits",
  encode(message: MsgBurnUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.editionId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.editionId = reader.uint64();
          break;
        case 4:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnUnits>): MsgBurnUnits {
    const message = createBaseMsgBurnUnits();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBurnUnitsAmino): MsgBurnUnits {
    const message = createBaseMsgBurnUnits();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBurnUnits): MsgBurnUnitsAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnUnitsAminoMsg): MsgBurnUnits {
    return MsgBurnUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurnUnits): MsgBurnUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgBurnUnits",
      value: MsgBurnUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnUnitsProtoMsg): MsgBurnUnits {
    return MsgBurnUnits.decode(message.value);
  },
  toProto(message: MsgBurnUnits): Uint8Array {
    return MsgBurnUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnUnits): MsgBurnUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBurnUnits",
      value: MsgBurnUnits.encode(message).finish()
    };
  }
};
function createBaseMsgBurnUnitsResponse(): MsgBurnUnitsResponse {
  return {};
}
/**
 * MsgBurnUnitsResponse is empty.
 * @name MsgBurnUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBurnUnitsResponse
 */
export const MsgBurnUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgBurnUnitsResponse",
  encode(_: MsgBurnUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnUnitsResponse();
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
  fromPartial(_: DeepPartial<MsgBurnUnitsResponse>): MsgBurnUnitsResponse {
    const message = createBaseMsgBurnUnitsResponse();
    return message;
  },
  fromAmino(_: MsgBurnUnitsResponseAmino): MsgBurnUnitsResponse {
    const message = createBaseMsgBurnUnitsResponse();
    return message;
  },
  toAmino(_: MsgBurnUnitsResponse): MsgBurnUnitsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnUnitsResponseAminoMsg): MsgBurnUnitsResponse {
    return MsgBurnUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnUnitsResponseProtoMsg): MsgBurnUnitsResponse {
    return MsgBurnUnitsResponse.decode(message.value);
  },
  toProto(message: MsgBurnUnitsResponse): Uint8Array {
    return MsgBurnUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnUnitsResponse): MsgBurnUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBurnUnitsResponse",
      value: MsgBurnUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeUnits(): MsgRevokeUnits {
  return {
    owner: "",
    classId: BigInt(0),
    editionId: BigInt(0),
    holder: "",
    amount: BigInt(0),
    reason: ""
  };
}
/**
 * MsgRevokeUnits burns a holder's units as the class owner, when the
 * class's burn_authorization allows the issuer.
 * @name MsgRevokeUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeUnits
 */
export const MsgRevokeUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnits",
  aminoType: "sparkdream/x/artifact/MsgRevokeUnits",
  encode(message: MsgRevokeUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.editionId);
    }
    if (message.holder !== "") {
      writer.uint32(34).string(message.holder);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(40).uint64(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(50).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.editionId = reader.uint64();
          break;
        case 4:
          message.holder = reader.string();
          break;
        case 5:
          message.amount = reader.uint64();
          break;
        case 6:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeUnits>): MsgRevokeUnits {
    const message = createBaseMsgRevokeUnits();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.holder = object.holder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeUnitsAmino): MsgRevokeUnits {
    const message = createBaseMsgRevokeUnits();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.holder !== undefined && object.holder !== null) {
      message.holder = object.holder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgRevokeUnits): MsgRevokeUnitsAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.holder = message.holder === "" ? undefined : message.holder;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeUnitsAminoMsg): MsgRevokeUnits {
    return MsgRevokeUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeUnits): MsgRevokeUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRevokeUnits",
      value: MsgRevokeUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeUnitsProtoMsg): MsgRevokeUnits {
    return MsgRevokeUnits.decode(message.value);
  },
  toProto(message: MsgRevokeUnits): Uint8Array {
    return MsgRevokeUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeUnits): MsgRevokeUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnits",
      value: MsgRevokeUnits.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeUnitsResponse(): MsgRevokeUnitsResponse {
  return {};
}
/**
 * MsgRevokeUnitsResponse is empty.
 * @name MsgRevokeUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRevokeUnitsResponse
 */
export const MsgRevokeUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnitsResponse",
  encode(_: MsgRevokeUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeUnitsResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeUnitsResponse>): MsgRevokeUnitsResponse {
    const message = createBaseMsgRevokeUnitsResponse();
    return message;
  },
  fromAmino(_: MsgRevokeUnitsResponseAmino): MsgRevokeUnitsResponse {
    const message = createBaseMsgRevokeUnitsResponse();
    return message;
  },
  toAmino(_: MsgRevokeUnitsResponse): MsgRevokeUnitsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeUnitsResponseAminoMsg): MsgRevokeUnitsResponse {
    return MsgRevokeUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeUnitsResponseProtoMsg): MsgRevokeUnitsResponse {
    return MsgRevokeUnitsResponse.decode(message.value);
  },
  toProto(message: MsgRevokeUnitsResponse): Uint8Array {
    return MsgRevokeUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeUnitsResponse): MsgRevokeUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRevokeUnitsResponse",
      value: MsgRevokeUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgListUnits(): MsgListUnits {
  return {
    seller: "",
    classId: BigInt(0),
    editionId: BigInt(0),
    quantity: BigInt(0),
    unitPrice: Coin.fromPartial({}),
    duration: BigInt(0)
  };
}
/**
 * MsgListUnits offers units at a fixed per-unit SPARK price.
 * @name MsgListUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListUnits
 */
export const MsgListUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgListUnits",
  aminoType: "sparkdream/x/artifact/MsgListUnits",
  encode(message: MsgListUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.editionId);
    }
    if (message.quantity !== BigInt(0)) {
      writer.uint32(32).uint64(message.quantity);
    }
    if (message.unitPrice !== undefined) {
      Coin.encode(message.unitPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(48).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgListUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.editionId = reader.uint64();
          break;
        case 4:
          message.quantity = reader.uint64();
          break;
        case 5:
          message.unitPrice = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgListUnits>): MsgListUnits {
    const message = createBaseMsgListUnits();
    message.seller = object.seller ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.quantity = object.quantity !== undefined && object.quantity !== null ? BigInt(object.quantity.toString()) : BigInt(0);
    message.unitPrice = object.unitPrice !== undefined && object.unitPrice !== null ? Coin.fromPartial(object.unitPrice) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgListUnitsAmino): MsgListUnits {
    const message = createBaseMsgListUnits();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = BigInt(object.quantity);
    }
    if (object.unit_price !== undefined && object.unit_price !== null) {
      message.unitPrice = Coin.fromAmino(object.unit_price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: MsgListUnits): MsgListUnitsAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.quantity = message.quantity !== BigInt(0) ? message.quantity?.toString() : undefined;
    obj.unit_price = message.unitPrice ? Coin.toAmino(message.unitPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgListUnitsAminoMsg): MsgListUnits {
    return MsgListUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgListUnits): MsgListUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgListUnits",
      value: MsgListUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgListUnitsProtoMsg): MsgListUnits {
    return MsgListUnits.decode(message.value);
  },
  toProto(message: MsgListUnits): Uint8Array {
    return MsgListUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgListUnits): MsgListUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgListUnits",
      value: MsgListUnits.encode(message).finish()
    };
  }
};
function createBaseMsgListUnitsResponse(): MsgListUnitsResponse {
  return {
    listingId: BigInt(0)
  };
}
/**
 * MsgListUnitsResponse returns the listing id.
 * @name MsgListUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgListUnitsResponse
 */
export const MsgListUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgListUnitsResponse",
  encode(message: MsgListUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.listingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgListUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListUnitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgListUnitsResponse>): MsgListUnitsResponse {
    const message = createBaseMsgListUnitsResponse();
    message.listingId = object.listingId !== undefined && object.listingId !== null ? BigInt(object.listingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgListUnitsResponseAmino): MsgListUnitsResponse {
    const message = createBaseMsgListUnitsResponse();
    if (object.listing_id !== undefined && object.listing_id !== null) {
      message.listingId = BigInt(object.listing_id);
    }
    return message;
  },
  toAmino(message: MsgListUnitsResponse): MsgListUnitsResponseAmino {
    const obj: any = {};
    obj.listing_id = message.listingId !== BigInt(0) ? message.listingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgListUnitsResponseAminoMsg): MsgListUnitsResponse {
    return MsgListUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgListUnitsResponseProtoMsg): MsgListUnitsResponse {
    return MsgListUnitsResponse.decode(message.value);
  },
  toProto(message: MsgListUnitsResponse): Uint8Array {
    return MsgListUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgListUnitsResponse): MsgListUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgListUnitsResponse",
      value: MsgListUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelistUnits(): MsgDelistUnits {
  return {
    seller: "",
    listingId: BigInt(0)
  };
}
/**
 * MsgDelistUnits cancels a unit listing and unlocks its units.
 * @name MsgDelistUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistUnits
 */
export const MsgDelistUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgDelistUnits",
  aminoType: "sparkdream/x/artifact/MsgDelistUnits",
  encode(message: MsgDelistUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.listingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.listingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelistUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.listingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDelistUnits>): MsgDelistUnits {
    const message = createBaseMsgDelistUnits();
    message.seller = object.seller ?? "";
    message.listingId = object.listingId !== undefined && object.listingId !== null ? BigInt(object.listingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDelistUnitsAmino): MsgDelistUnits {
    const message = createBaseMsgDelistUnits();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.listing_id !== undefined && object.listing_id !== null) {
      message.listingId = BigInt(object.listing_id);
    }
    return message;
  },
  toAmino(message: MsgDelistUnits): MsgDelistUnitsAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.listing_id = message.listingId !== BigInt(0) ? message.listingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelistUnitsAminoMsg): MsgDelistUnits {
    return MsgDelistUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelistUnits): MsgDelistUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgDelistUnits",
      value: MsgDelistUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelistUnitsProtoMsg): MsgDelistUnits {
    return MsgDelistUnits.decode(message.value);
  },
  toProto(message: MsgDelistUnits): Uint8Array {
    return MsgDelistUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgDelistUnits): MsgDelistUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDelistUnits",
      value: MsgDelistUnits.encode(message).finish()
    };
  }
};
function createBaseMsgDelistUnitsResponse(): MsgDelistUnitsResponse {
  return {};
}
/**
 * MsgDelistUnitsResponse is empty.
 * @name MsgDelistUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDelistUnitsResponse
 */
export const MsgDelistUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgDelistUnitsResponse",
  encode(_: MsgDelistUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelistUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistUnitsResponse();
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
  fromPartial(_: DeepPartial<MsgDelistUnitsResponse>): MsgDelistUnitsResponse {
    const message = createBaseMsgDelistUnitsResponse();
    return message;
  },
  fromAmino(_: MsgDelistUnitsResponseAmino): MsgDelistUnitsResponse {
    const message = createBaseMsgDelistUnitsResponse();
    return message;
  },
  toAmino(_: MsgDelistUnitsResponse): MsgDelistUnitsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelistUnitsResponseAminoMsg): MsgDelistUnitsResponse {
    return MsgDelistUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelistUnitsResponseProtoMsg): MsgDelistUnitsResponse {
    return MsgDelistUnitsResponse.decode(message.value);
  },
  toProto(message: MsgDelistUnitsResponse): Uint8Array {
    return MsgDelistUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelistUnitsResponse): MsgDelistUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDelistUnitsResponse",
      value: MsgDelistUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBuyUnits(): MsgBuyUnits {
  return {
    buyer: "",
    listingId: BigInt(0),
    quantity: BigInt(0),
    expectedUnitPrice: Coin.fromPartial({}),
    expectedMetadataHash: ""
  };
}
/**
 * MsgBuyUnits buys some or all of a unit listing.
 * @name MsgBuyUnits
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyUnits
 */
export const MsgBuyUnits = {
  typeUrl: "/sparkdream.artifact.v1.MsgBuyUnits",
  aminoType: "sparkdream/x/artifact/MsgBuyUnits",
  encode(message: MsgBuyUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.listingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.listingId);
    }
    if (message.quantity !== BigInt(0)) {
      writer.uint32(24).uint64(message.quantity);
    }
    if (message.expectedUnitPrice !== undefined) {
      Coin.encode(message.expectedUnitPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(42).string(message.expectedMetadataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.listingId = reader.uint64();
          break;
        case 3:
          message.quantity = reader.uint64();
          break;
        case 4:
          message.expectedUnitPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expectedMetadataHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBuyUnits>): MsgBuyUnits {
    const message = createBaseMsgBuyUnits();
    message.buyer = object.buyer ?? "";
    message.listingId = object.listingId !== undefined && object.listingId !== null ? BigInt(object.listingId.toString()) : BigInt(0);
    message.quantity = object.quantity !== undefined && object.quantity !== null ? BigInt(object.quantity.toString()) : BigInt(0);
    message.expectedUnitPrice = object.expectedUnitPrice !== undefined && object.expectedUnitPrice !== null ? Coin.fromPartial(object.expectedUnitPrice) : undefined;
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    return message;
  },
  fromAmino(object: MsgBuyUnitsAmino): MsgBuyUnits {
    const message = createBaseMsgBuyUnits();
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.listing_id !== undefined && object.listing_id !== null) {
      message.listingId = BigInt(object.listing_id);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = BigInt(object.quantity);
    }
    if (object.expected_unit_price !== undefined && object.expected_unit_price !== null) {
      message.expectedUnitPrice = Coin.fromAmino(object.expected_unit_price);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    return message;
  },
  toAmino(message: MsgBuyUnits): MsgBuyUnitsAmino {
    const obj: any = {};
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.listing_id = message.listingId !== BigInt(0) ? message.listingId?.toString() : undefined;
    obj.quantity = message.quantity !== BigInt(0) ? message.quantity?.toString() : undefined;
    obj.expected_unit_price = message.expectedUnitPrice ? Coin.toAmino(message.expectedUnitPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    return obj;
  },
  fromAminoMsg(object: MsgBuyUnitsAminoMsg): MsgBuyUnits {
    return MsgBuyUnits.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBuyUnits): MsgBuyUnitsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgBuyUnits",
      value: MsgBuyUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBuyUnitsProtoMsg): MsgBuyUnits {
    return MsgBuyUnits.decode(message.value);
  },
  toProto(message: MsgBuyUnits): Uint8Array {
    return MsgBuyUnits.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyUnits): MsgBuyUnitsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBuyUnits",
      value: MsgBuyUnits.encode(message).finish()
    };
  }
};
function createBaseMsgBuyUnitsResponse(): MsgBuyUnitsResponse {
  return {
    fee: "",
    royalty: "",
    proceeds: ""
  };
}
/**
 * MsgBuyUnitsResponse reports the settlement split.
 * @name MsgBuyUnitsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBuyUnitsResponse
 */
export const MsgBuyUnitsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgBuyUnitsResponse",
  encode(message: MsgBuyUnitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== "") {
      writer.uint32(10).string(message.fee);
    }
    if (message.royalty !== "") {
      writer.uint32(18).string(message.royalty);
    }
    if (message.proceeds !== "") {
      writer.uint32(26).string(message.proceeds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyUnitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyUnitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.string();
          break;
        case 2:
          message.royalty = reader.string();
          break;
        case 3:
          message.proceeds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBuyUnitsResponse>): MsgBuyUnitsResponse {
    const message = createBaseMsgBuyUnitsResponse();
    message.fee = object.fee ?? "";
    message.royalty = object.royalty ?? "";
    message.proceeds = object.proceeds ?? "";
    return message;
  },
  fromAmino(object: MsgBuyUnitsResponseAmino): MsgBuyUnitsResponse {
    const message = createBaseMsgBuyUnitsResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.royalty !== undefined && object.royalty !== null) {
      message.royalty = object.royalty;
    }
    if (object.proceeds !== undefined && object.proceeds !== null) {
      message.proceeds = object.proceeds;
    }
    return message;
  },
  toAmino(message: MsgBuyUnitsResponse): MsgBuyUnitsResponseAmino {
    const obj: any = {};
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.royalty = message.royalty === "" ? undefined : message.royalty;
    obj.proceeds = message.proceeds === "" ? undefined : message.proceeds;
    return obj;
  },
  fromAminoMsg(object: MsgBuyUnitsResponseAminoMsg): MsgBuyUnitsResponse {
    return MsgBuyUnitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyUnitsResponseProtoMsg): MsgBuyUnitsResponse {
    return MsgBuyUnitsResponse.decode(message.value);
  },
  toProto(message: MsgBuyUnitsResponse): Uint8Array {
    return MsgBuyUnitsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyUnitsResponse): MsgBuyUnitsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBuyUnitsResponse",
      value: MsgBuyUnitsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundEdition(): MsgFundEdition {
  return {
    funder: "",
    classId: BigInt(0),
    editionId: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
/**
 * MsgFundEdition pays SPARK to an edition's current holders, pro rata to
 * the units they hold (retroactive funding of an impact certificate).
 * @name MsgFundEdition
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFundEdition
 */
export const MsgFundEdition = {
  typeUrl: "/sparkdream.artifact.v1.MsgFundEdition",
  aminoType: "sparkdream/x/artifact/MsgFundEdition",
  encode(message: MsgFundEdition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.editionId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundEdition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundEdition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funder = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.editionId = reader.uint64();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundEdition>): MsgFundEdition {
    const message = createBaseMsgFundEdition();
    message.funder = object.funder ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgFundEditionAmino): MsgFundEdition {
    const message = createBaseMsgFundEdition();
    if (object.funder !== undefined && object.funder !== null) {
      message.funder = object.funder;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgFundEdition): MsgFundEditionAmino {
    const obj: any = {};
    obj.funder = message.funder === "" ? undefined : message.funder;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgFundEditionAminoMsg): MsgFundEdition {
    return MsgFundEdition.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundEdition): MsgFundEditionAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgFundEdition",
      value: MsgFundEdition.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundEditionProtoMsg): MsgFundEdition {
    return MsgFundEdition.decode(message.value);
  },
  toProto(message: MsgFundEdition): Uint8Array {
    return MsgFundEdition.encode(message).finish();
  },
  toProtoMsg(message: MsgFundEdition): MsgFundEditionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgFundEdition",
      value: MsgFundEdition.encode(message).finish()
    };
  }
};
function createBaseMsgFundEditionResponse(): MsgFundEditionResponse {
  return {};
}
/**
 * MsgFundEditionResponse is empty.
 * @name MsgFundEditionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgFundEditionResponse
 */
export const MsgFundEditionResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgFundEditionResponse",
  encode(_: MsgFundEditionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundEditionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundEditionResponse();
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
  fromPartial(_: DeepPartial<MsgFundEditionResponse>): MsgFundEditionResponse {
    const message = createBaseMsgFundEditionResponse();
    return message;
  },
  fromAmino(_: MsgFundEditionResponseAmino): MsgFundEditionResponse {
    const message = createBaseMsgFundEditionResponse();
    return message;
  },
  toAmino(_: MsgFundEditionResponse): MsgFundEditionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundEditionResponseAminoMsg): MsgFundEditionResponse {
    return MsgFundEditionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundEditionResponseProtoMsg): MsgFundEditionResponse {
    return MsgFundEditionResponse.decode(message.value);
  },
  toProto(message: MsgFundEditionResponse): Uint8Array {
    return MsgFundEditionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundEditionResponse): MsgFundEditionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgFundEditionResponse",
      value: MsgFundEditionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEditionRewards(): MsgClaimEditionRewards {
  return {
    holder: "",
    refs: []
  };
}
/**
 * MsgClaimEditionRewards pays out the signer's accrued retro funding.
 * @name MsgClaimEditionRewards
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgClaimEditionRewards
 */
export const MsgClaimEditionRewards = {
  typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewards",
  aminoType: "sparkdream/x/artifact/MsgClaimEditionRewards",
  encode(message: MsgClaimEditionRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    for (const v of message.refs) {
      EditionRef.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimEditionRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEditionRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.refs.push(EditionRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimEditionRewards>): MsgClaimEditionRewards {
    const message = createBaseMsgClaimEditionRewards();
    message.holder = object.holder ?? "";
    message.refs = object.refs?.map(e => EditionRef.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimEditionRewardsAmino): MsgClaimEditionRewards {
    const message = createBaseMsgClaimEditionRewards();
    if (object.holder !== undefined && object.holder !== null) {
      message.holder = object.holder;
    }
    message.refs = object.refs?.map(e => EditionRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimEditionRewards): MsgClaimEditionRewardsAmino {
    const obj: any = {};
    obj.holder = message.holder === "" ? undefined : message.holder;
    if (message.refs) {
      obj.refs = message.refs.map(e => e ? EditionRef.toAmino(e) : undefined);
    } else {
      obj.refs = message.refs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimEditionRewardsAminoMsg): MsgClaimEditionRewards {
    return MsgClaimEditionRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimEditionRewards): MsgClaimEditionRewardsAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgClaimEditionRewards",
      value: MsgClaimEditionRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimEditionRewardsProtoMsg): MsgClaimEditionRewards {
    return MsgClaimEditionRewards.decode(message.value);
  },
  toProto(message: MsgClaimEditionRewards): Uint8Array {
    return MsgClaimEditionRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimEditionRewards): MsgClaimEditionRewardsProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewards",
      value: MsgClaimEditionRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEditionRewardsResponse(): MsgClaimEditionRewardsResponse {
  return {
    claimed: ""
  };
}
/**
 * MsgClaimEditionRewardsResponse returns the total paid.
 * @name MsgClaimEditionRewardsResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgClaimEditionRewardsResponse
 */
export const MsgClaimEditionRewardsResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewardsResponse",
  encode(message: MsgClaimEditionRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimed !== "") {
      writer.uint32(10).string(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimEditionRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEditionRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimEditionRewardsResponse>): MsgClaimEditionRewardsResponse {
    const message = createBaseMsgClaimEditionRewardsResponse();
    message.claimed = object.claimed ?? "";
    return message;
  },
  fromAmino(object: MsgClaimEditionRewardsResponseAmino): MsgClaimEditionRewardsResponse {
    const message = createBaseMsgClaimEditionRewardsResponse();
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: MsgClaimEditionRewardsResponse): MsgClaimEditionRewardsResponseAmino {
    const obj: any = {};
    obj.claimed = message.claimed === "" ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: MsgClaimEditionRewardsResponseAminoMsg): MsgClaimEditionRewardsResponse {
    return MsgClaimEditionRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimEditionRewardsResponseProtoMsg): MsgClaimEditionRewardsResponse {
    return MsgClaimEditionRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimEditionRewardsResponse): Uint8Array {
    return MsgClaimEditionRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimEditionRewardsResponse): MsgClaimEditionRewardsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgClaimEditionRewardsResponse",
      value: MsgClaimEditionRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddCraftRecipe(): MsgAddCraftRecipe {
  return {
    owner: "",
    classId: BigInt(0),
    inputs: [],
    outputMetadata: TokenMetadata.fromPartial({}),
    outputEditionId: BigInt(0),
    outputQuantity: BigInt(0),
    acceptedContentLicense: ""
  };
}
/**
 * MsgAddCraftRecipe adds a crafting recipe to a class (owner only, until
 * the class's first craft).
 * @name MsgAddCraftRecipe
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAddCraftRecipe
 */
export const MsgAddCraftRecipe = {
  typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipe",
  aminoType: "sparkdream/x/artifact/MsgAddCraftRecipe",
  encode(message: MsgAddCraftRecipe, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    for (const v of message.inputs) {
      CraftInput.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.outputMetadata !== undefined) {
      TokenMetadata.encode(message.outputMetadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.outputEditionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.outputEditionId);
    }
    if (message.outputQuantity !== BigInt(0)) {
      writer.uint32(48).uint64(message.outputQuantity);
    }
    if (message.acceptedContentLicense !== "") {
      writer.uint32(58).string(message.acceptedContentLicense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCraftRecipe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCraftRecipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.inputs.push(CraftInput.decode(reader, reader.uint32()));
          break;
        case 4:
          message.outputMetadata = TokenMetadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.outputEditionId = reader.uint64();
          break;
        case 6:
          message.outputQuantity = reader.uint64();
          break;
        case 7:
          message.acceptedContentLicense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddCraftRecipe>): MsgAddCraftRecipe {
    const message = createBaseMsgAddCraftRecipe();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.inputs = object.inputs?.map(e => CraftInput.fromPartial(e)) || [];
    message.outputMetadata = object.outputMetadata !== undefined && object.outputMetadata !== null ? TokenMetadata.fromPartial(object.outputMetadata) : undefined;
    message.outputEditionId = object.outputEditionId !== undefined && object.outputEditionId !== null ? BigInt(object.outputEditionId.toString()) : BigInt(0);
    message.outputQuantity = object.outputQuantity !== undefined && object.outputQuantity !== null ? BigInt(object.outputQuantity.toString()) : BigInt(0);
    message.acceptedContentLicense = object.acceptedContentLicense ?? "";
    return message;
  },
  fromAmino(object: MsgAddCraftRecipeAmino): MsgAddCraftRecipe {
    const message = createBaseMsgAddCraftRecipe();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    message.inputs = object.inputs?.map(e => CraftInput.fromAmino(e)) || [];
    if (object.output_metadata !== undefined && object.output_metadata !== null) {
      message.outputMetadata = TokenMetadata.fromAmino(object.output_metadata);
    }
    if (object.output_edition_id !== undefined && object.output_edition_id !== null) {
      message.outputEditionId = BigInt(object.output_edition_id);
    }
    if (object.output_quantity !== undefined && object.output_quantity !== null) {
      message.outputQuantity = BigInt(object.output_quantity);
    }
    if (object.accepted_content_license !== undefined && object.accepted_content_license !== null) {
      message.acceptedContentLicense = object.accepted_content_license;
    }
    return message;
  },
  toAmino(message: MsgAddCraftRecipe): MsgAddCraftRecipeAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? CraftInput.toAmino(e) : undefined);
    } else {
      obj.inputs = message.inputs;
    }
    obj.output_metadata = message.outputMetadata ? TokenMetadata.toAmino(message.outputMetadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
    obj.output_edition_id = message.outputEditionId !== BigInt(0) ? message.outputEditionId?.toString() : undefined;
    obj.output_quantity = message.outputQuantity !== BigInt(0) ? message.outputQuantity?.toString() : undefined;
    obj.accepted_content_license = message.acceptedContentLicense === "" ? undefined : message.acceptedContentLicense;
    return obj;
  },
  fromAminoMsg(object: MsgAddCraftRecipeAminoMsg): MsgAddCraftRecipe {
    return MsgAddCraftRecipe.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddCraftRecipe): MsgAddCraftRecipeAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAddCraftRecipe",
      value: MsgAddCraftRecipe.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddCraftRecipeProtoMsg): MsgAddCraftRecipe {
    return MsgAddCraftRecipe.decode(message.value);
  },
  toProto(message: MsgAddCraftRecipe): Uint8Array {
    return MsgAddCraftRecipe.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCraftRecipe): MsgAddCraftRecipeProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipe",
      value: MsgAddCraftRecipe.encode(message).finish()
    };
  }
};
function createBaseMsgAddCraftRecipeResponse(): MsgAddCraftRecipeResponse {
  return {
    recipeId: BigInt(0)
  };
}
/**
 * MsgAddCraftRecipeResponse returns the recipe id.
 * @name MsgAddCraftRecipeResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAddCraftRecipeResponse
 */
export const MsgAddCraftRecipeResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipeResponse",
  encode(message: MsgAddCraftRecipeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.recipeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCraftRecipeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCraftRecipeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddCraftRecipeResponse>): MsgAddCraftRecipeResponse {
    const message = createBaseMsgAddCraftRecipeResponse();
    message.recipeId = object.recipeId !== undefined && object.recipeId !== null ? BigInt(object.recipeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddCraftRecipeResponseAmino): MsgAddCraftRecipeResponse {
    const message = createBaseMsgAddCraftRecipeResponse();
    if (object.recipe_id !== undefined && object.recipe_id !== null) {
      message.recipeId = BigInt(object.recipe_id);
    }
    return message;
  },
  toAmino(message: MsgAddCraftRecipeResponse): MsgAddCraftRecipeResponseAmino {
    const obj: any = {};
    obj.recipe_id = message.recipeId !== BigInt(0) ? message.recipeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddCraftRecipeResponseAminoMsg): MsgAddCraftRecipeResponse {
    return MsgAddCraftRecipeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddCraftRecipeResponseProtoMsg): MsgAddCraftRecipeResponse {
    return MsgAddCraftRecipeResponse.decode(message.value);
  },
  toProto(message: MsgAddCraftRecipeResponse): Uint8Array {
    return MsgAddCraftRecipeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCraftRecipeResponse): MsgAddCraftRecipeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAddCraftRecipeResponse",
      value: MsgAddCraftRecipeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveCraftRecipe(): MsgRemoveCraftRecipe {
  return {
    owner: "",
    classId: BigInt(0),
    recipeId: BigInt(0)
  };
}
/**
 * MsgRemoveCraftRecipe removes a recipe (owner only, at any time).
 * @name MsgRemoveCraftRecipe
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRemoveCraftRecipe
 */
export const MsgRemoveCraftRecipe = {
  typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipe",
  aminoType: "sparkdream/x/artifact/MsgRemoveCraftRecipe",
  encode(message: MsgRemoveCraftRecipe, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.recipeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.recipeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCraftRecipe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCraftRecipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.recipeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveCraftRecipe>): MsgRemoveCraftRecipe {
    const message = createBaseMsgRemoveCraftRecipe();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.recipeId = object.recipeId !== undefined && object.recipeId !== null ? BigInt(object.recipeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveCraftRecipeAmino): MsgRemoveCraftRecipe {
    const message = createBaseMsgRemoveCraftRecipe();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.recipe_id !== undefined && object.recipe_id !== null) {
      message.recipeId = BigInt(object.recipe_id);
    }
    return message;
  },
  toAmino(message: MsgRemoveCraftRecipe): MsgRemoveCraftRecipeAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.recipe_id = message.recipeId !== BigInt(0) ? message.recipeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveCraftRecipeAminoMsg): MsgRemoveCraftRecipe {
    return MsgRemoveCraftRecipe.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveCraftRecipe): MsgRemoveCraftRecipeAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgRemoveCraftRecipe",
      value: MsgRemoveCraftRecipe.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveCraftRecipeProtoMsg): MsgRemoveCraftRecipe {
    return MsgRemoveCraftRecipe.decode(message.value);
  },
  toProto(message: MsgRemoveCraftRecipe): Uint8Array {
    return MsgRemoveCraftRecipe.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveCraftRecipe): MsgRemoveCraftRecipeProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipe",
      value: MsgRemoveCraftRecipe.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveCraftRecipeResponse(): MsgRemoveCraftRecipeResponse {
  return {};
}
/**
 * MsgRemoveCraftRecipeResponse is empty.
 * @name MsgRemoveCraftRecipeResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse
 */
export const MsgRemoveCraftRecipeResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse",
  encode(_: MsgRemoveCraftRecipeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCraftRecipeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCraftRecipeResponse();
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
  fromPartial(_: DeepPartial<MsgRemoveCraftRecipeResponse>): MsgRemoveCraftRecipeResponse {
    const message = createBaseMsgRemoveCraftRecipeResponse();
    return message;
  },
  fromAmino(_: MsgRemoveCraftRecipeResponseAmino): MsgRemoveCraftRecipeResponse {
    const message = createBaseMsgRemoveCraftRecipeResponse();
    return message;
  },
  toAmino(_: MsgRemoveCraftRecipeResponse): MsgRemoveCraftRecipeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveCraftRecipeResponseAminoMsg): MsgRemoveCraftRecipeResponse {
    return MsgRemoveCraftRecipeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveCraftRecipeResponseProtoMsg): MsgRemoveCraftRecipeResponse {
    return MsgRemoveCraftRecipeResponse.decode(message.value);
  },
  toProto(message: MsgRemoveCraftRecipeResponse): Uint8Array {
    return MsgRemoveCraftRecipeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveCraftRecipeResponse): MsgRemoveCraftRecipeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgRemoveCraftRecipeResponse",
      value: MsgRemoveCraftRecipeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCraft(): MsgCraft {
  return {
    crafter: "",
    classId: BigInt(0),
    recipeId: BigInt(0),
    inputTokens: []
  };
}
/**
 * MsgCraft burns a recipe's inputs and mints its output to the crafter.
 * @name MsgCraft
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCraft
 */
export const MsgCraft = {
  typeUrl: "/sparkdream.artifact.v1.MsgCraft",
  aminoType: "sparkdream/x/artifact/MsgCraft",
  encode(message: MsgCraft, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.crafter !== "") {
      writer.uint32(10).string(message.crafter);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.recipeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.recipeId);
    }
    for (const v of message.inputTokens) {
      TokenRef.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCraft {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCraft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crafter = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.recipeId = reader.uint64();
          break;
        case 4:
          message.inputTokens.push(TokenRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCraft>): MsgCraft {
    const message = createBaseMsgCraft();
    message.crafter = object.crafter ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.recipeId = object.recipeId !== undefined && object.recipeId !== null ? BigInt(object.recipeId.toString()) : BigInt(0);
    message.inputTokens = object.inputTokens?.map(e => TokenRef.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCraftAmino): MsgCraft {
    const message = createBaseMsgCraft();
    if (object.crafter !== undefined && object.crafter !== null) {
      message.crafter = object.crafter;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.recipe_id !== undefined && object.recipe_id !== null) {
      message.recipeId = BigInt(object.recipe_id);
    }
    message.inputTokens = object.input_tokens?.map(e => TokenRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCraft): MsgCraftAmino {
    const obj: any = {};
    obj.crafter = message.crafter === "" ? undefined : message.crafter;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.recipe_id = message.recipeId !== BigInt(0) ? message.recipeId?.toString() : undefined;
    if (message.inputTokens) {
      obj.input_tokens = message.inputTokens.map(e => e ? TokenRef.toAmino(e) : undefined);
    } else {
      obj.input_tokens = message.inputTokens;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCraftAminoMsg): MsgCraft {
    return MsgCraft.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCraft): MsgCraftAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCraft",
      value: MsgCraft.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCraftProtoMsg): MsgCraft {
    return MsgCraft.decode(message.value);
  },
  toProto(message: MsgCraft): Uint8Array {
    return MsgCraft.encode(message).finish();
  },
  toProtoMsg(message: MsgCraft): MsgCraftProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCraft",
      value: MsgCraft.encode(message).finish()
    };
  }
};
function createBaseMsgCraftResponse(): MsgCraftResponse {
  return {
    tokenId: BigInt(0),
    editionId: BigInt(0),
    amount: BigInt(0)
  };
}
/**
 * MsgCraftResponse reports the output: the new token id (UNIQUE target) or
 * the units credited (EDITIONS target).
 * @name MsgCraftResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCraftResponse
 */
export const MsgCraftResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCraftResponse",
  encode(message: MsgCraftResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenId);
    }
    if (message.editionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.editionId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCraftResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCraftResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.uint64();
          break;
        case 2:
          message.editionId = reader.uint64();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCraftResponse>): MsgCraftResponse {
    const message = createBaseMsgCraftResponse();
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.editionId = object.editionId !== undefined && object.editionId !== null ? BigInt(object.editionId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCraftResponseAmino): MsgCraftResponse {
    const message = createBaseMsgCraftResponse();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.edition_id !== undefined && object.edition_id !== null) {
      message.editionId = BigInt(object.edition_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: MsgCraftResponse): MsgCraftResponseAmino {
    const obj: any = {};
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.edition_id = message.editionId !== BigInt(0) ? message.editionId?.toString() : undefined;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCraftResponseAminoMsg): MsgCraftResponse {
    return MsgCraftResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCraftResponseProtoMsg): MsgCraftResponse {
    return MsgCraftResponse.decode(message.value);
  },
  toProto(message: MsgCraftResponse): Uint8Array {
    return MsgCraftResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCraftResponse): MsgCraftResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCraftResponse",
      value: MsgCraftResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOfferRental(): MsgOfferRental {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    user: "",
    price: Coin.fromPartial({}),
    duration: BigInt(0),
    ownerMayEnd: false,
    offerDuration: BigInt(0)
  };
}
/**
 * MsgOfferRental offers a token's user right for a period.
 * @name MsgOfferRental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgOfferRental
 */
export const MsgOfferRental = {
  typeUrl: "/sparkdream.artifact.v1.MsgOfferRental",
  aminoType: "sparkdream/x/artifact/MsgOfferRental",
  encode(message: MsgOfferRental, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(48).int64(message.duration);
    }
    if (message.ownerMayEnd === true) {
      writer.uint32(56).bool(message.ownerMayEnd);
    }
    if (message.offerDuration !== BigInt(0)) {
      writer.uint32(64).int64(message.offerDuration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOfferRental {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOfferRental();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.duration = reader.int64();
          break;
        case 7:
          message.ownerMayEnd = reader.bool();
          break;
        case 8:
          message.offerDuration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgOfferRental>): MsgOfferRental {
    const message = createBaseMsgOfferRental();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.ownerMayEnd = object.ownerMayEnd ?? false;
    message.offerDuration = object.offerDuration !== undefined && object.offerDuration !== null ? BigInt(object.offerDuration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgOfferRentalAmino): MsgOfferRental {
    const message = createBaseMsgOfferRental();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.owner_may_end !== undefined && object.owner_may_end !== null) {
      message.ownerMayEnd = object.owner_may_end;
    }
    if (object.offer_duration !== undefined && object.offer_duration !== null) {
      message.offerDuration = BigInt(object.offer_duration);
    }
    return message;
  },
  toAmino(message: MsgOfferRental): MsgOfferRentalAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    obj.owner_may_end = message.ownerMayEnd === false ? undefined : message.ownerMayEnd;
    obj.offer_duration = message.offerDuration !== BigInt(0) ? message.offerDuration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOfferRentalAminoMsg): MsgOfferRental {
    return MsgOfferRental.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOfferRental): MsgOfferRentalAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgOfferRental",
      value: MsgOfferRental.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOfferRentalProtoMsg): MsgOfferRental {
    return MsgOfferRental.decode(message.value);
  },
  toProto(message: MsgOfferRental): Uint8Array {
    return MsgOfferRental.encode(message).finish();
  },
  toProtoMsg(message: MsgOfferRental): MsgOfferRentalProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgOfferRental",
      value: MsgOfferRental.encode(message).finish()
    };
  }
};
function createBaseMsgOfferRentalResponse(): MsgOfferRentalResponse {
  return {
    nonce: BigInt(0)
  };
}
/**
 * MsgOfferRentalResponse returns the offer nonce.
 * @name MsgOfferRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgOfferRentalResponse
 */
export const MsgOfferRentalResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgOfferRentalResponse",
  encode(message: MsgOfferRentalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOfferRentalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOfferRentalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgOfferRentalResponse>): MsgOfferRentalResponse {
    const message = createBaseMsgOfferRentalResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgOfferRentalResponseAmino): MsgOfferRentalResponse {
    const message = createBaseMsgOfferRentalResponse();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: MsgOfferRentalResponse): MsgOfferRentalResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOfferRentalResponseAminoMsg): MsgOfferRentalResponse {
    return MsgOfferRentalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOfferRentalResponseProtoMsg): MsgOfferRentalResponse {
    return MsgOfferRentalResponse.decode(message.value);
  },
  toProto(message: MsgOfferRentalResponse): Uint8Array {
    return MsgOfferRentalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOfferRentalResponse): MsgOfferRentalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgOfferRentalResponse",
      value: MsgOfferRentalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRentalOffer(): MsgCancelRentalOffer {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * MsgCancelRentalOffer withdraws a rental offer.
 * @name MsgCancelRentalOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelRentalOffer
 */
export const MsgCancelRentalOffer = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOffer",
  aminoType: "sparkdream/x/artifact/MsgCancelRentalOffer",
  encode(message: MsgCancelRentalOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelRentalOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRentalOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelRentalOffer>): MsgCancelRentalOffer {
    const message = createBaseMsgCancelRentalOffer();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelRentalOfferAmino): MsgCancelRentalOffer {
    const message = createBaseMsgCancelRentalOffer();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: MsgCancelRentalOffer): MsgCancelRentalOfferAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelRentalOfferAminoMsg): MsgCancelRentalOffer {
    return MsgCancelRentalOffer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelRentalOffer): MsgCancelRentalOfferAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCancelRentalOffer",
      value: MsgCancelRentalOffer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelRentalOfferProtoMsg): MsgCancelRentalOffer {
    return MsgCancelRentalOffer.decode(message.value);
  },
  toProto(message: MsgCancelRentalOffer): Uint8Array {
    return MsgCancelRentalOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRentalOffer): MsgCancelRentalOfferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOffer",
      value: MsgCancelRentalOffer.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRentalOfferResponse(): MsgCancelRentalOfferResponse {
  return {};
}
/**
 * MsgCancelRentalOfferResponse is empty.
 * @name MsgCancelRentalOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelRentalOfferResponse
 */
export const MsgCancelRentalOfferResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOfferResponse",
  encode(_: MsgCancelRentalOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelRentalOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRentalOfferResponse();
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
  fromPartial(_: DeepPartial<MsgCancelRentalOfferResponse>): MsgCancelRentalOfferResponse {
    const message = createBaseMsgCancelRentalOfferResponse();
    return message;
  },
  fromAmino(_: MsgCancelRentalOfferResponseAmino): MsgCancelRentalOfferResponse {
    const message = createBaseMsgCancelRentalOfferResponse();
    return message;
  },
  toAmino(_: MsgCancelRentalOfferResponse): MsgCancelRentalOfferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelRentalOfferResponseAminoMsg): MsgCancelRentalOfferResponse {
    return MsgCancelRentalOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRentalOfferResponseProtoMsg): MsgCancelRentalOfferResponse {
    return MsgCancelRentalOfferResponse.decode(message.value);
  },
  toProto(message: MsgCancelRentalOfferResponse): Uint8Array {
    return MsgCancelRentalOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRentalOfferResponse): MsgCancelRentalOfferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelRentalOfferResponse",
      value: MsgCancelRentalOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptRental(): MsgAcceptRental {
  return {
    renter: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    expectedPrice: Coin.fromPartial({}),
    expectedNonce: BigInt(0),
    expectedMetadataHash: "",
    expectedContentsHash: ""
  };
}
/**
 * MsgAcceptRental accepts a rental offer, paying its price.
 * @name MsgAcceptRental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptRental
 */
export const MsgAcceptRental = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptRental",
  aminoType: "sparkdream/x/artifact/MsgAcceptRental",
  encode(message: MsgAcceptRental, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.renter !== "") {
      writer.uint32(10).string(message.renter);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.expectedPrice !== undefined) {
      Coin.encode(message.expectedPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.expectedNonce !== BigInt(0)) {
      writer.uint32(40).uint64(message.expectedNonce);
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(50).string(message.expectedMetadataHash);
    }
    if (message.expectedContentsHash !== "") {
      writer.uint32(58).string(message.expectedContentsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptRental {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptRental();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.renter = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.expectedPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expectedNonce = reader.uint64();
          break;
        case 6:
          message.expectedMetadataHash = reader.string();
          break;
        case 7:
          message.expectedContentsHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptRental>): MsgAcceptRental {
    const message = createBaseMsgAcceptRental();
    message.renter = object.renter ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.expectedPrice = object.expectedPrice !== undefined && object.expectedPrice !== null ? Coin.fromPartial(object.expectedPrice) : undefined;
    message.expectedNonce = object.expectedNonce !== undefined && object.expectedNonce !== null ? BigInt(object.expectedNonce.toString()) : BigInt(0);
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    message.expectedContentsHash = object.expectedContentsHash ?? "";
    return message;
  },
  fromAmino(object: MsgAcceptRentalAmino): MsgAcceptRental {
    const message = createBaseMsgAcceptRental();
    if (object.renter !== undefined && object.renter !== null) {
      message.renter = object.renter;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.expected_price !== undefined && object.expected_price !== null) {
      message.expectedPrice = Coin.fromAmino(object.expected_price);
    }
    if (object.expected_nonce !== undefined && object.expected_nonce !== null) {
      message.expectedNonce = BigInt(object.expected_nonce);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    if (object.expected_contents_hash !== undefined && object.expected_contents_hash !== null) {
      message.expectedContentsHash = object.expected_contents_hash;
    }
    return message;
  },
  toAmino(message: MsgAcceptRental): MsgAcceptRentalAmino {
    const obj: any = {};
    obj.renter = message.renter === "" ? undefined : message.renter;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.expected_price = message.expectedPrice ? Coin.toAmino(message.expectedPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.expected_nonce = message.expectedNonce !== BigInt(0) ? message.expectedNonce?.toString() : undefined;
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    obj.expected_contents_hash = message.expectedContentsHash === "" ? undefined : message.expectedContentsHash;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptRentalAminoMsg): MsgAcceptRental {
    return MsgAcceptRental.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptRental): MsgAcceptRentalAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAcceptRental",
      value: MsgAcceptRental.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptRentalProtoMsg): MsgAcceptRental {
    return MsgAcceptRental.decode(message.value);
  },
  toProto(message: MsgAcceptRental): Uint8Array {
    return MsgAcceptRental.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptRental): MsgAcceptRentalProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptRental",
      value: MsgAcceptRental.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptRentalResponse(): MsgAcceptRentalResponse {
  return {
    expiresAt: BigInt(0)
  };
}
/**
 * MsgAcceptRentalResponse returns the rental end.
 * @name MsgAcceptRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptRentalResponse
 */
export const MsgAcceptRentalResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptRentalResponse",
  encode(message: MsgAcceptRentalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(8).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptRentalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptRentalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptRentalResponse>): MsgAcceptRentalResponse {
    const message = createBaseMsgAcceptRentalResponse();
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAcceptRentalResponseAmino): MsgAcceptRentalResponse {
    const message = createBaseMsgAcceptRentalResponse();
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: MsgAcceptRentalResponse): MsgAcceptRentalResponseAmino {
    const obj: any = {};
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptRentalResponseAminoMsg): MsgAcceptRentalResponse {
    return MsgAcceptRentalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptRentalResponseProtoMsg): MsgAcceptRentalResponse {
    return MsgAcceptRentalResponse.decode(message.value);
  },
  toProto(message: MsgAcceptRentalResponse): Uint8Array {
    return MsgAcceptRentalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptRentalResponse): MsgAcceptRentalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptRentalResponse",
      value: MsgAcceptRentalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEndRental(): MsgEndRental {
  return {
    signer: "",
    classId: BigInt(0),
    tokenId: BigInt(0)
  };
}
/**
 * MsgEndRental ends a rental: the renter at any time, the owner when the
 * offer allowed it or once it has expired.
 * @name MsgEndRental
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgEndRental
 */
export const MsgEndRental = {
  typeUrl: "/sparkdream.artifact.v1.MsgEndRental",
  aminoType: "sparkdream/x/artifact/MsgEndRental",
  encode(message: MsgEndRental, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEndRental {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndRental();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEndRental>): MsgEndRental {
    const message = createBaseMsgEndRental();
    message.signer = object.signer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEndRentalAmino): MsgEndRental {
    const message = createBaseMsgEndRental();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    return message;
  },
  toAmino(message: MsgEndRental): MsgEndRentalAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEndRentalAminoMsg): MsgEndRental {
    return MsgEndRental.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEndRental): MsgEndRentalAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgEndRental",
      value: MsgEndRental.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEndRentalProtoMsg): MsgEndRental {
    return MsgEndRental.decode(message.value);
  },
  toProto(message: MsgEndRental): Uint8Array {
    return MsgEndRental.encode(message).finish();
  },
  toProtoMsg(message: MsgEndRental): MsgEndRentalProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgEndRental",
      value: MsgEndRental.encode(message).finish()
    };
  }
};
function createBaseMsgEndRentalResponse(): MsgEndRentalResponse {
  return {};
}
/**
 * MsgEndRentalResponse is empty.
 * @name MsgEndRentalResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgEndRentalResponse
 */
export const MsgEndRentalResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgEndRentalResponse",
  encode(_: MsgEndRentalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEndRentalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndRentalResponse();
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
  fromPartial(_: DeepPartial<MsgEndRentalResponse>): MsgEndRentalResponse {
    const message = createBaseMsgEndRentalResponse();
    return message;
  },
  fromAmino(_: MsgEndRentalResponseAmino): MsgEndRentalResponse {
    const message = createBaseMsgEndRentalResponse();
    return message;
  },
  toAmino(_: MsgEndRentalResponse): MsgEndRentalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEndRentalResponseAminoMsg): MsgEndRentalResponse {
    return MsgEndRentalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEndRentalResponseProtoMsg): MsgEndRentalResponse {
    return MsgEndRentalResponse.decode(message.value);
  },
  toProto(message: MsgEndRentalResponse): Uint8Array {
    return MsgEndRentalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEndRentalResponse): MsgEndRentalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgEndRentalResponse",
      value: MsgEndRentalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgNest(): MsgNest {
  return {
    owner: "",
    child: TokenRef.fromPartial({}),
    parent: TokenRef.fromPartial({})
  };
}
/**
 * MsgNest places a token (with anything nested in it) inside another token
 * the signer owns. The child is NESTED-locked and moves with its parent.
 * @name MsgNest
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgNest
 */
export const MsgNest = {
  typeUrl: "/sparkdream.artifact.v1.MsgNest",
  aminoType: "sparkdream/x/artifact/MsgNest",
  encode(message: MsgNest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.child !== undefined) {
      TokenRef.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    if (message.parent !== undefined) {
      TokenRef.encode(message.parent, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgNest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.child = TokenRef.decode(reader, reader.uint32());
          break;
        case 3:
          message.parent = TokenRef.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgNest>): MsgNest {
    const message = createBaseMsgNest();
    message.owner = object.owner ?? "";
    message.child = object.child !== undefined && object.child !== null ? TokenRef.fromPartial(object.child) : undefined;
    message.parent = object.parent !== undefined && object.parent !== null ? TokenRef.fromPartial(object.parent) : undefined;
    return message;
  },
  fromAmino(object: MsgNestAmino): MsgNest {
    const message = createBaseMsgNest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.child !== undefined && object.child !== null) {
      message.child = TokenRef.fromAmino(object.child);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = TokenRef.fromAmino(object.parent);
    }
    return message;
  },
  toAmino(message: MsgNest): MsgNestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.child = message.child ? TokenRef.toAmino(message.child) : undefined;
    obj.parent = message.parent ? TokenRef.toAmino(message.parent) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgNestAminoMsg): MsgNest {
    return MsgNest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgNest): MsgNestAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgNest",
      value: MsgNest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgNestProtoMsg): MsgNest {
    return MsgNest.decode(message.value);
  },
  toProto(message: MsgNest): Uint8Array {
    return MsgNest.encode(message).finish();
  },
  toProtoMsg(message: MsgNest): MsgNestProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgNest",
      value: MsgNest.encode(message).finish()
    };
  }
};
function createBaseMsgNestResponse(): MsgNestResponse {
  return {};
}
/**
 * MsgNestResponse is empty.
 * @name MsgNestResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgNestResponse
 */
export const MsgNestResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgNestResponse",
  encode(_: MsgNestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgNestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNestResponse();
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
  fromPartial(_: DeepPartial<MsgNestResponse>): MsgNestResponse {
    const message = createBaseMsgNestResponse();
    return message;
  },
  fromAmino(_: MsgNestResponseAmino): MsgNestResponse {
    const message = createBaseMsgNestResponse();
    return message;
  },
  toAmino(_: MsgNestResponse): MsgNestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgNestResponseAminoMsg): MsgNestResponse {
    return MsgNestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgNestResponseProtoMsg): MsgNestResponse {
    return MsgNestResponse.decode(message.value);
  },
  toProto(message: MsgNestResponse): Uint8Array {
    return MsgNestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgNestResponse): MsgNestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgNestResponse",
      value: MsgNestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDetach(): MsgDetach {
  return {
    owner: "",
    child: TokenRef.fromPartial({})
  };
}
/**
 * MsgDetach takes a nested token (and its own children) out of its parent.
 * @name MsgDetach
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDetach
 */
export const MsgDetach = {
  typeUrl: "/sparkdream.artifact.v1.MsgDetach",
  aminoType: "sparkdream/x/artifact/MsgDetach",
  encode(message: MsgDetach, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.child !== undefined) {
      TokenRef.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDetach {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.child = TokenRef.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDetach>): MsgDetach {
    const message = createBaseMsgDetach();
    message.owner = object.owner ?? "";
    message.child = object.child !== undefined && object.child !== null ? TokenRef.fromPartial(object.child) : undefined;
    return message;
  },
  fromAmino(object: MsgDetachAmino): MsgDetach {
    const message = createBaseMsgDetach();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.child !== undefined && object.child !== null) {
      message.child = TokenRef.fromAmino(object.child);
    }
    return message;
  },
  toAmino(message: MsgDetach): MsgDetachAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.child = message.child ? TokenRef.toAmino(message.child) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDetachAminoMsg): MsgDetach {
    return MsgDetach.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDetach): MsgDetachAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgDetach",
      value: MsgDetach.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDetachProtoMsg): MsgDetach {
    return MsgDetach.decode(message.value);
  },
  toProto(message: MsgDetach): Uint8Array {
    return MsgDetach.encode(message).finish();
  },
  toProtoMsg(message: MsgDetach): MsgDetachProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDetach",
      value: MsgDetach.encode(message).finish()
    };
  }
};
function createBaseMsgDetachResponse(): MsgDetachResponse {
  return {};
}
/**
 * MsgDetachResponse is empty.
 * @name MsgDetachResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgDetachResponse
 */
export const MsgDetachResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgDetachResponse",
  encode(_: MsgDetachResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDetachResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachResponse();
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
  fromPartial(_: DeepPartial<MsgDetachResponse>): MsgDetachResponse {
    const message = createBaseMsgDetachResponse();
    return message;
  },
  fromAmino(_: MsgDetachResponseAmino): MsgDetachResponse {
    const message = createBaseMsgDetachResponse();
    return message;
  },
  toAmino(_: MsgDetachResponse): MsgDetachResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDetachResponseAminoMsg): MsgDetachResponse {
    return MsgDetachResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDetachResponseProtoMsg): MsgDetachResponse {
    return MsgDetachResponse.decode(message.value);
  },
  toProto(message: MsgDetachResponse): Uint8Array {
    return MsgDetachResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDetachResponse): MsgDetachResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgDetachResponse",
      value: MsgDetachResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetHarbergerPrice(): MsgSetHarbergerPrice {
  return {
    owner: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    price: "",
    grantId: BigInt(0)
  };
}
/**
 * MsgSetHarbergerPrice self-assesses a Harberger token's price and names
 * the x/session RecurringPull that pays its tax.
 * @name MsgSetHarbergerPrice
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetHarbergerPrice
 */
export const MsgSetHarbergerPrice = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPrice",
  aminoType: "sparkdream/x/artifact/MsgSetHarbergerPrice",
  encode(message: MsgSetHarbergerPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.grantId !== BigInt(0)) {
      writer.uint32(40).uint64(message.grantId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHarbergerPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHarbergerPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.grantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetHarbergerPrice>): MsgSetHarbergerPrice {
    const message = createBaseMsgSetHarbergerPrice();
    message.owner = object.owner ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.price = object.price ?? "";
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetHarbergerPriceAmino): MsgSetHarbergerPrice {
    const message = createBaseMsgSetHarbergerPrice();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    return message;
  },
  toAmino(message: MsgSetHarbergerPrice): MsgSetHarbergerPriceAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.price = message.price === "" ? undefined : message.price;
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetHarbergerPriceAminoMsg): MsgSetHarbergerPrice {
    return MsgSetHarbergerPrice.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHarbergerPrice): MsgSetHarbergerPriceAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSetHarbergerPrice",
      value: MsgSetHarbergerPrice.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHarbergerPriceProtoMsg): MsgSetHarbergerPrice {
    return MsgSetHarbergerPrice.decode(message.value);
  },
  toProto(message: MsgSetHarbergerPrice): Uint8Array {
    return MsgSetHarbergerPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHarbergerPrice): MsgSetHarbergerPriceProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPrice",
      value: MsgSetHarbergerPrice.encode(message).finish()
    };
  }
};
function createBaseMsgSetHarbergerPriceResponse(): MsgSetHarbergerPriceResponse {
  return {
    taxPerPeriod: ""
  };
}
/**
 * MsgSetHarbergerPriceResponse returns the tax per period.
 * @name MsgSetHarbergerPriceResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSetHarbergerPriceResponse
 */
export const MsgSetHarbergerPriceResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPriceResponse",
  encode(message: MsgSetHarbergerPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.taxPerPeriod !== "") {
      writer.uint32(10).string(message.taxPerPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHarbergerPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHarbergerPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxPerPeriod = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetHarbergerPriceResponse>): MsgSetHarbergerPriceResponse {
    const message = createBaseMsgSetHarbergerPriceResponse();
    message.taxPerPeriod = object.taxPerPeriod ?? "";
    return message;
  },
  fromAmino(object: MsgSetHarbergerPriceResponseAmino): MsgSetHarbergerPriceResponse {
    const message = createBaseMsgSetHarbergerPriceResponse();
    if (object.tax_per_period !== undefined && object.tax_per_period !== null) {
      message.taxPerPeriod = object.tax_per_period;
    }
    return message;
  },
  toAmino(message: MsgSetHarbergerPriceResponse): MsgSetHarbergerPriceResponseAmino {
    const obj: any = {};
    obj.tax_per_period = message.taxPerPeriod === "" ? undefined : message.taxPerPeriod;
    return obj;
  },
  fromAminoMsg(object: MsgSetHarbergerPriceResponseAminoMsg): MsgSetHarbergerPriceResponse {
    return MsgSetHarbergerPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetHarbergerPriceResponseProtoMsg): MsgSetHarbergerPriceResponse {
    return MsgSetHarbergerPriceResponse.decode(message.value);
  },
  toProto(message: MsgSetHarbergerPriceResponse): Uint8Array {
    return MsgSetHarbergerPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHarbergerPriceResponse): MsgSetHarbergerPriceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSetHarbergerPriceResponse",
      value: MsgSetHarbergerPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceBuy(): MsgForceBuy {
  return {
    buyer: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    maxPrice: Coin.fromPartial({}),
    expectedMetadataHash: ""
  };
}
/**
 * MsgForceBuy buys a Harberger token at its current price, with or without
 * the holder's consent.
 * @name MsgForceBuy
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgForceBuy
 */
export const MsgForceBuy = {
  typeUrl: "/sparkdream.artifact.v1.MsgForceBuy",
  aminoType: "sparkdream/x/artifact/MsgForceBuy",
  encode(message: MsgForceBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.maxPrice !== undefined) {
      Coin.encode(message.maxPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(42).string(message.expectedMetadataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceBuy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.maxPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expectedMetadataHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgForceBuy>): MsgForceBuy {
    const message = createBaseMsgForceBuy();
    message.buyer = object.buyer ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.maxPrice = object.maxPrice !== undefined && object.maxPrice !== null ? Coin.fromPartial(object.maxPrice) : undefined;
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    return message;
  },
  fromAmino(object: MsgForceBuyAmino): MsgForceBuy {
    const message = createBaseMsgForceBuy();
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = Coin.fromAmino(object.max_price);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    return message;
  },
  toAmino(message: MsgForceBuy): MsgForceBuyAmino {
    const obj: any = {};
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.max_price = message.maxPrice ? Coin.toAmino(message.maxPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    return obj;
  },
  fromAminoMsg(object: MsgForceBuyAminoMsg): MsgForceBuy {
    return MsgForceBuy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceBuy): MsgForceBuyAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgForceBuy",
      value: MsgForceBuy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceBuyProtoMsg): MsgForceBuy {
    return MsgForceBuy.decode(message.value);
  },
  toProto(message: MsgForceBuy): Uint8Array {
    return MsgForceBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgForceBuy): MsgForceBuyProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgForceBuy",
      value: MsgForceBuy.encode(message).finish()
    };
  }
};
function createBaseMsgForceBuyResponse(): MsgForceBuyResponse {
  return {
    price: "",
    fee: "",
    royalty: "",
    proceeds: ""
  };
}
/**
 * MsgForceBuyResponse reports the settlement split.
 * @name MsgForceBuyResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgForceBuyResponse
 */
export const MsgForceBuyResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgForceBuyResponse",
  encode(message: MsgForceBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    if (message.royalty !== "") {
      writer.uint32(26).string(message.royalty);
    }
    if (message.proceeds !== "") {
      writer.uint32(34).string(message.proceeds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceBuyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceBuyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        case 3:
          message.royalty = reader.string();
          break;
        case 4:
          message.proceeds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgForceBuyResponse>): MsgForceBuyResponse {
    const message = createBaseMsgForceBuyResponse();
    message.price = object.price ?? "";
    message.fee = object.fee ?? "";
    message.royalty = object.royalty ?? "";
    message.proceeds = object.proceeds ?? "";
    return message;
  },
  fromAmino(object: MsgForceBuyResponseAmino): MsgForceBuyResponse {
    const message = createBaseMsgForceBuyResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.royalty !== undefined && object.royalty !== null) {
      message.royalty = object.royalty;
    }
    if (object.proceeds !== undefined && object.proceeds !== null) {
      message.proceeds = object.proceeds;
    }
    return message;
  },
  toAmino(message: MsgForceBuyResponse): MsgForceBuyResponseAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.royalty = message.royalty === "" ? undefined : message.royalty;
    obj.proceeds = message.proceeds === "" ? undefined : message.proceeds;
    return obj;
  },
  fromAminoMsg(object: MsgForceBuyResponseAminoMsg): MsgForceBuyResponse {
    return MsgForceBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceBuyResponseProtoMsg): MsgForceBuyResponse {
    return MsgForceBuyResponse.decode(message.value);
  },
  toProto(message: MsgForceBuyResponse): Uint8Array {
    return MsgForceBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceBuyResponse): MsgForceBuyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgForceBuyResponse",
      value: MsgForceBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUnitListing(): MsgUpdateUnitListing {
  return {
    seller: "",
    listingId: BigInt(0),
    quantity: BigInt(0),
    unitPrice: Coin.fromPartial({}),
    duration: BigInt(0)
  };
}
/**
 * MsgUpdateUnitListing changes a unit listing's price, quantity and
 * duration. The listed units are re-locked to the new quantity.
 * @name MsgUpdateUnitListing
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateUnitListing
 */
export const MsgUpdateUnitListing = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListing",
  aminoType: "sparkdream/x/artifact/MsgUpdateUnitListing",
  encode(message: MsgUpdateUnitListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.listingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.listingId);
    }
    if (message.quantity !== BigInt(0)) {
      writer.uint32(24).uint64(message.quantity);
    }
    if (message.unitPrice !== undefined) {
      Coin.encode(message.unitPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(40).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUnitListing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUnitListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.listingId = reader.uint64();
          break;
        case 3:
          message.quantity = reader.uint64();
          break;
        case 4:
          message.unitPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateUnitListing>): MsgUpdateUnitListing {
    const message = createBaseMsgUpdateUnitListing();
    message.seller = object.seller ?? "";
    message.listingId = object.listingId !== undefined && object.listingId !== null ? BigInt(object.listingId.toString()) : BigInt(0);
    message.quantity = object.quantity !== undefined && object.quantity !== null ? BigInt(object.quantity.toString()) : BigInt(0);
    message.unitPrice = object.unitPrice !== undefined && object.unitPrice !== null ? Coin.fromPartial(object.unitPrice) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateUnitListingAmino): MsgUpdateUnitListing {
    const message = createBaseMsgUpdateUnitListing();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.listing_id !== undefined && object.listing_id !== null) {
      message.listingId = BigInt(object.listing_id);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = BigInt(object.quantity);
    }
    if (object.unit_price !== undefined && object.unit_price !== null) {
      message.unitPrice = Coin.fromAmino(object.unit_price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: MsgUpdateUnitListing): MsgUpdateUnitListingAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.listing_id = message.listingId !== BigInt(0) ? message.listingId?.toString() : undefined;
    obj.quantity = message.quantity !== BigInt(0) ? message.quantity?.toString() : undefined;
    obj.unit_price = message.unitPrice ? Coin.toAmino(message.unitPrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUnitListingAminoMsg): MsgUpdateUnitListing {
    return MsgUpdateUnitListing.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateUnitListing): MsgUpdateUnitListingAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgUpdateUnitListing",
      value: MsgUpdateUnitListing.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateUnitListingProtoMsg): MsgUpdateUnitListing {
    return MsgUpdateUnitListing.decode(message.value);
  },
  toProto(message: MsgUpdateUnitListing): Uint8Array {
    return MsgUpdateUnitListing.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUnitListing): MsgUpdateUnitListingProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListing",
      value: MsgUpdateUnitListing.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUnitListingResponse(): MsgUpdateUnitListingResponse {
  return {};
}
/**
 * MsgUpdateUnitListingResponse is empty.
 * @name MsgUpdateUnitListingResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgUpdateUnitListingResponse
 */
export const MsgUpdateUnitListingResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListingResponse",
  encode(_: MsgUpdateUnitListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUnitListingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUnitListingResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateUnitListingResponse>): MsgUpdateUnitListingResponse {
    const message = createBaseMsgUpdateUnitListingResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUnitListingResponseAmino): MsgUpdateUnitListingResponse {
    const message = createBaseMsgUpdateUnitListingResponse();
    return message;
  },
  toAmino(_: MsgUpdateUnitListingResponse): MsgUpdateUnitListingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUnitListingResponseAminoMsg): MsgUpdateUnitListingResponse {
    return MsgUpdateUnitListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUnitListingResponseProtoMsg): MsgUpdateUnitListingResponse {
    return MsgUpdateUnitListingResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUnitListingResponse): Uint8Array {
    return MsgUpdateUnitListingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUnitListingResponse): MsgUpdateUnitListingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgUpdateUnitListingResponse",
      value: MsgUpdateUnitListingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMakeOffer(): MsgMakeOffer {
  return {
    bidder: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    price: Coin.fromPartial({}),
    duration: BigInt(0),
    expectedMetadataHash: "",
    expectedContentsHash: ""
  };
}
/**
 * MsgMakeOffer escrows a SPARK offer for a token (token_id set) or for any
 * token of a class (token_id 0).
 * @name MsgMakeOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMakeOffer
 */
export const MsgMakeOffer = {
  typeUrl: "/sparkdream.artifact.v1.MsgMakeOffer",
  aminoType: "sparkdream/x/artifact/MsgMakeOffer",
  encode(message: MsgMakeOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(40).int64(message.duration);
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(50).string(message.expectedMetadataHash);
    }
    if (message.expectedContentsHash !== "") {
      writer.uint32(58).string(message.expectedContentsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakeOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.duration = reader.int64();
          break;
        case 6:
          message.expectedMetadataHash = reader.string();
          break;
        case 7:
          message.expectedContentsHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMakeOffer>): MsgMakeOffer {
    const message = createBaseMsgMakeOffer();
    message.bidder = object.bidder ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    message.expectedContentsHash = object.expectedContentsHash ?? "";
    return message;
  },
  fromAmino(object: MsgMakeOfferAmino): MsgMakeOffer {
    const message = createBaseMsgMakeOffer();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    if (object.expected_contents_hash !== undefined && object.expected_contents_hash !== null) {
      message.expectedContentsHash = object.expected_contents_hash;
    }
    return message;
  },
  toAmino(message: MsgMakeOffer): MsgMakeOfferAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    obj.expected_contents_hash = message.expectedContentsHash === "" ? undefined : message.expectedContentsHash;
    return obj;
  },
  fromAminoMsg(object: MsgMakeOfferAminoMsg): MsgMakeOffer {
    return MsgMakeOffer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMakeOffer): MsgMakeOfferAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgMakeOffer",
      value: MsgMakeOffer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMakeOfferProtoMsg): MsgMakeOffer {
    return MsgMakeOffer.decode(message.value);
  },
  toProto(message: MsgMakeOffer): Uint8Array {
    return MsgMakeOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgMakeOffer): MsgMakeOfferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgMakeOffer",
      value: MsgMakeOffer.encode(message).finish()
    };
  }
};
function createBaseMsgMakeOfferResponse(): MsgMakeOfferResponse {
  return {
    offerId: BigInt(0)
  };
}
/**
 * MsgMakeOfferResponse returns the offer id.
 * @name MsgMakeOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgMakeOfferResponse
 */
export const MsgMakeOfferResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgMakeOfferResponse",
  encode(message: MsgMakeOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offerId !== BigInt(0)) {
      writer.uint32(8).uint64(message.offerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMakeOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMakeOfferResponse>): MsgMakeOfferResponse {
    const message = createBaseMsgMakeOfferResponse();
    message.offerId = object.offerId !== undefined && object.offerId !== null ? BigInt(object.offerId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMakeOfferResponseAmino): MsgMakeOfferResponse {
    const message = createBaseMsgMakeOfferResponse();
    if (object.offer_id !== undefined && object.offer_id !== null) {
      message.offerId = BigInt(object.offer_id);
    }
    return message;
  },
  toAmino(message: MsgMakeOfferResponse): MsgMakeOfferResponseAmino {
    const obj: any = {};
    obj.offer_id = message.offerId !== BigInt(0) ? message.offerId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMakeOfferResponseAminoMsg): MsgMakeOfferResponse {
    return MsgMakeOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMakeOfferResponseProtoMsg): MsgMakeOfferResponse {
    return MsgMakeOfferResponse.decode(message.value);
  },
  toProto(message: MsgMakeOfferResponse): Uint8Array {
    return MsgMakeOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMakeOfferResponse): MsgMakeOfferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgMakeOfferResponse",
      value: MsgMakeOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOffer(): MsgCancelOffer {
  return {
    bidder: "",
    offerId: BigInt(0)
  };
}
/**
 * MsgCancelOffer withdraws an offer and refunds its escrow.
 * @name MsgCancelOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOffer
 */
export const MsgCancelOffer = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOffer",
  aminoType: "sparkdream/x/artifact/MsgCancelOffer",
  encode(message: MsgCancelOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.offerId !== BigInt(0)) {
      writer.uint32(16).uint64(message.offerId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.offerId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelOffer>): MsgCancelOffer {
    const message = createBaseMsgCancelOffer();
    message.bidder = object.bidder ?? "";
    message.offerId = object.offerId !== undefined && object.offerId !== null ? BigInt(object.offerId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelOfferAmino): MsgCancelOffer {
    const message = createBaseMsgCancelOffer();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.offer_id !== undefined && object.offer_id !== null) {
      message.offerId = BigInt(object.offer_id);
    }
    return message;
  },
  toAmino(message: MsgCancelOffer): MsgCancelOfferAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.offer_id = message.offerId !== BigInt(0) ? message.offerId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOfferAminoMsg): MsgCancelOffer {
    return MsgCancelOffer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelOffer): MsgCancelOfferAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCancelOffer",
      value: MsgCancelOffer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelOfferProtoMsg): MsgCancelOffer {
    return MsgCancelOffer.decode(message.value);
  },
  toProto(message: MsgCancelOffer): Uint8Array {
    return MsgCancelOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOffer): MsgCancelOfferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelOffer",
      value: MsgCancelOffer.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOfferResponse(): MsgCancelOfferResponse {
  return {};
}
/**
 * MsgCancelOfferResponse is empty.
 * @name MsgCancelOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelOfferResponse
 */
export const MsgCancelOfferResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelOfferResponse",
  encode(_: MsgCancelOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOfferResponse();
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
  fromPartial(_: DeepPartial<MsgCancelOfferResponse>): MsgCancelOfferResponse {
    const message = createBaseMsgCancelOfferResponse();
    return message;
  },
  fromAmino(_: MsgCancelOfferResponseAmino): MsgCancelOfferResponse {
    const message = createBaseMsgCancelOfferResponse();
    return message;
  },
  toAmino(_: MsgCancelOfferResponse): MsgCancelOfferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelOfferResponseAminoMsg): MsgCancelOfferResponse {
    return MsgCancelOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOfferResponseProtoMsg): MsgCancelOfferResponse {
    return MsgCancelOfferResponse.decode(message.value);
  },
  toProto(message: MsgCancelOfferResponse): Uint8Array {
    return MsgCancelOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOfferResponse): MsgCancelOfferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelOfferResponse",
      value: MsgCancelOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptOffer(): MsgAcceptOffer {
  return {
    seller: "",
    offerId: BigInt(0),
    tokenId: BigInt(0),
    expectedPrice: Coin.fromPartial({})
  };
}
/**
 * MsgAcceptOffer sells a token the signer holds to an offer's bidder.
 * @name MsgAcceptOffer
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptOffer
 */
export const MsgAcceptOffer = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptOffer",
  aminoType: "sparkdream/x/artifact/MsgAcceptOffer",
  encode(message: MsgAcceptOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.offerId !== BigInt(0)) {
      writer.uint32(16).uint64(message.offerId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.expectedPrice !== undefined) {
      Coin.encode(message.expectedPrice, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.offerId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.expectedPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptOffer>): MsgAcceptOffer {
    const message = createBaseMsgAcceptOffer();
    message.seller = object.seller ?? "";
    message.offerId = object.offerId !== undefined && object.offerId !== null ? BigInt(object.offerId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.expectedPrice = object.expectedPrice !== undefined && object.expectedPrice !== null ? Coin.fromPartial(object.expectedPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgAcceptOfferAmino): MsgAcceptOffer {
    const message = createBaseMsgAcceptOffer();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.offer_id !== undefined && object.offer_id !== null) {
      message.offerId = BigInt(object.offer_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.expected_price !== undefined && object.expected_price !== null) {
      message.expectedPrice = Coin.fromAmino(object.expected_price);
    }
    return message;
  },
  toAmino(message: MsgAcceptOffer): MsgAcceptOfferAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.offer_id = message.offerId !== BigInt(0) ? message.offerId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.expected_price = message.expectedPrice ? Coin.toAmino(message.expectedPrice) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgAcceptOfferAminoMsg): MsgAcceptOffer {
    return MsgAcceptOffer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptOffer): MsgAcceptOfferAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgAcceptOffer",
      value: MsgAcceptOffer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptOfferProtoMsg): MsgAcceptOffer {
    return MsgAcceptOffer.decode(message.value);
  },
  toProto(message: MsgAcceptOffer): Uint8Array {
    return MsgAcceptOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptOffer): MsgAcceptOfferProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptOffer",
      value: MsgAcceptOffer.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptOfferResponse(): MsgAcceptOfferResponse {
  return {
    fee: "",
    royalty: "",
    proceeds: ""
  };
}
/**
 * MsgAcceptOfferResponse reports the settlement split.
 * @name MsgAcceptOfferResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgAcceptOfferResponse
 */
export const MsgAcceptOfferResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgAcceptOfferResponse",
  encode(message: MsgAcceptOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== "") {
      writer.uint32(10).string(message.fee);
    }
    if (message.royalty !== "") {
      writer.uint32(18).string(message.royalty);
    }
    if (message.proceeds !== "") {
      writer.uint32(26).string(message.proceeds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.string();
          break;
        case 2:
          message.royalty = reader.string();
          break;
        case 3:
          message.proceeds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptOfferResponse>): MsgAcceptOfferResponse {
    const message = createBaseMsgAcceptOfferResponse();
    message.fee = object.fee ?? "";
    message.royalty = object.royalty ?? "";
    message.proceeds = object.proceeds ?? "";
    return message;
  },
  fromAmino(object: MsgAcceptOfferResponseAmino): MsgAcceptOfferResponse {
    const message = createBaseMsgAcceptOfferResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.royalty !== undefined && object.royalty !== null) {
      message.royalty = object.royalty;
    }
    if (object.proceeds !== undefined && object.proceeds !== null) {
      message.proceeds = object.proceeds;
    }
    return message;
  },
  toAmino(message: MsgAcceptOfferResponse): MsgAcceptOfferResponseAmino {
    const obj: any = {};
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.royalty = message.royalty === "" ? undefined : message.royalty;
    obj.proceeds = message.proceeds === "" ? undefined : message.proceeds;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptOfferResponseAminoMsg): MsgAcceptOfferResponse {
    return MsgAcceptOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptOfferResponseProtoMsg): MsgAcceptOfferResponse {
    return MsgAcceptOfferResponse.decode(message.value);
  },
  toProto(message: MsgAcceptOfferResponse): Uint8Array {
    return MsgAcceptOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptOfferResponse): MsgAcceptOfferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgAcceptOfferResponse",
      value: MsgAcceptOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStartAuction(): MsgStartAuction {
  return {
    seller: "",
    classId: BigInt(0),
    tokenId: BigInt(0),
    reservePrice: Coin.fromPartial({}),
    minIncrementBps: 0,
    duration: BigInt(0)
  };
}
/**
 * MsgStartAuction puts a token up for an English auction.
 * @name MsgStartAuction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgStartAuction
 */
export const MsgStartAuction = {
  typeUrl: "/sparkdream.artifact.v1.MsgStartAuction",
  aminoType: "sparkdream/x/artifact/MsgStartAuction",
  encode(message: MsgStartAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.classId !== BigInt(0)) {
      writer.uint32(16).uint64(message.classId);
    }
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenId);
    }
    if (message.reservePrice !== undefined) {
      Coin.encode(message.reservePrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.minIncrementBps !== 0) {
      writer.uint32(40).uint32(message.minIncrementBps);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(48).int64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.classId = reader.uint64();
          break;
        case 3:
          message.tokenId = reader.uint64();
          break;
        case 4:
          message.reservePrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.minIncrementBps = reader.uint32();
          break;
        case 6:
          message.duration = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStartAuction>): MsgStartAuction {
    const message = createBaseMsgStartAuction();
    message.seller = object.seller ?? "";
    message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.reservePrice = object.reservePrice !== undefined && object.reservePrice !== null ? Coin.fromPartial(object.reservePrice) : undefined;
    message.minIncrementBps = object.minIncrementBps ?? 0;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgStartAuctionAmino): MsgStartAuction {
    const message = createBaseMsgStartAuction();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = BigInt(object.class_id);
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.reserve_price !== undefined && object.reserve_price !== null) {
      message.reservePrice = Coin.fromAmino(object.reserve_price);
    }
    if (object.min_increment_bps !== undefined && object.min_increment_bps !== null) {
      message.minIncrementBps = object.min_increment_bps;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: MsgStartAuction): MsgStartAuctionAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.reserve_price = message.reservePrice ? Coin.toAmino(message.reservePrice) : Coin.toAmino(Coin.fromPartial({}));
    obj.min_increment_bps = message.minIncrementBps === 0 ? undefined : message.minIncrementBps;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStartAuctionAminoMsg): MsgStartAuction {
    return MsgStartAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStartAuction): MsgStartAuctionAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgStartAuction",
      value: MsgStartAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStartAuctionProtoMsg): MsgStartAuction {
    return MsgStartAuction.decode(message.value);
  },
  toProto(message: MsgStartAuction): Uint8Array {
    return MsgStartAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgStartAuction): MsgStartAuctionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgStartAuction",
      value: MsgStartAuction.encode(message).finish()
    };
  }
};
function createBaseMsgStartAuctionResponse(): MsgStartAuctionResponse {
  return {
    auctionId: BigInt(0)
  };
}
/**
 * MsgStartAuctionResponse returns the auction id.
 * @name MsgStartAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgStartAuctionResponse
 */
export const MsgStartAuctionResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgStartAuctionResponse",
  encode(message: MsgStartAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStartAuctionResponse>): MsgStartAuctionResponse {
    const message = createBaseMsgStartAuctionResponse();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgStartAuctionResponseAmino): MsgStartAuctionResponse {
    const message = createBaseMsgStartAuctionResponse();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    return message;
  },
  toAmino(message: MsgStartAuctionResponse): MsgStartAuctionResponseAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStartAuctionResponseAminoMsg): MsgStartAuctionResponse {
    return MsgStartAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartAuctionResponseProtoMsg): MsgStartAuctionResponse {
    return MsgStartAuctionResponse.decode(message.value);
  },
  toProto(message: MsgStartAuctionResponse): Uint8Array {
    return MsgStartAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartAuctionResponse): MsgStartAuctionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgStartAuctionResponse",
      value: MsgStartAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBid(): MsgBid {
  return {
    bidder: "",
    auctionId: BigInt(0),
    amount: Coin.fromPartial({}),
    expectedMetadataHash: "",
    expectedContentsHash: ""
  };
}
/**
 * MsgBid places an escrowed bid; the previous high bid is refunded.
 * @name MsgBid
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBid
 */
export const MsgBid = {
  typeUrl: "/sparkdream.artifact.v1.MsgBid",
  aminoType: "sparkdream/x/artifact/MsgBid",
  encode(message: MsgBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.expectedMetadataHash !== "") {
      writer.uint32(34).string(message.expectedMetadataHash);
    }
    if (message.expectedContentsHash !== "") {
      writer.uint32(42).string(message.expectedContentsHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.expectedMetadataHash = reader.string();
          break;
        case 5:
          message.expectedContentsHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.bidder = object.bidder ?? "";
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.expectedMetadataHash = object.expectedMetadataHash ?? "";
    message.expectedContentsHash = object.expectedContentsHash ?? "";
    return message;
  },
  fromAmino(object: MsgBidAmino): MsgBid {
    const message = createBaseMsgBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.expected_metadata_hash !== undefined && object.expected_metadata_hash !== null) {
      message.expectedMetadataHash = object.expected_metadata_hash;
    }
    if (object.expected_contents_hash !== undefined && object.expected_contents_hash !== null) {
      message.expectedContentsHash = object.expected_contents_hash;
    }
    return message;
  },
  toAmino(message: MsgBid): MsgBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    obj.expected_metadata_hash = message.expectedMetadataHash === "" ? undefined : message.expectedMetadataHash;
    obj.expected_contents_hash = message.expectedContentsHash === "" ? undefined : message.expectedContentsHash;
    return obj;
  },
  fromAminoMsg(object: MsgBidAminoMsg): MsgBid {
    return MsgBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBid): MsgBidAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgBid",
      value: MsgBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBidProtoMsg): MsgBid {
    return MsgBid.decode(message.value);
  },
  toProto(message: MsgBid): Uint8Array {
    return MsgBid.encode(message).finish();
  },
  toProtoMsg(message: MsgBid): MsgBidProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBid",
      value: MsgBid.encode(message).finish()
    };
  }
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {
    endsAt: BigInt(0)
  };
}
/**
 * MsgBidResponse returns when the auction now ends.
 * @name MsgBidResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgBidResponse
 */
export const MsgBidResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgBidResponse",
  encode(message: MsgBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.endsAt !== BigInt(0)) {
      writer.uint32(8).int64(message.endsAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endsAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    message.endsAt = object.endsAt !== undefined && object.endsAt !== null ? BigInt(object.endsAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBidResponseAmino): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    if (object.ends_at !== undefined && object.ends_at !== null) {
      message.endsAt = BigInt(object.ends_at);
    }
    return message;
  },
  toAmino(message: MsgBidResponse): MsgBidResponseAmino {
    const obj: any = {};
    obj.ends_at = message.endsAt !== BigInt(0) ? message.endsAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBidResponseAminoMsg): MsgBidResponse {
    return MsgBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBidResponseProtoMsg): MsgBidResponse {
    return MsgBidResponse.decode(message.value);
  },
  toProto(message: MsgBidResponse): Uint8Array {
    return MsgBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBidResponse): MsgBidResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgBidResponse",
      value: MsgBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSettleAuction(): MsgSettleAuction {
  return {
    signer: "",
    auctionId: BigInt(0)
  };
}
/**
 * MsgSettleAuction settles an ended auction (anyone may sign).
 * @name MsgSettleAuction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSettleAuction
 */
export const MsgSettleAuction = {
  typeUrl: "/sparkdream.artifact.v1.MsgSettleAuction",
  aminoType: "sparkdream/x/artifact/MsgSettleAuction",
  encode(message: MsgSettleAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSettleAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSettleAuction>): MsgSettleAuction {
    const message = createBaseMsgSettleAuction();
    message.signer = object.signer ?? "";
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSettleAuctionAmino): MsgSettleAuction {
    const message = createBaseMsgSettleAuction();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    return message;
  },
  toAmino(message: MsgSettleAuction): MsgSettleAuctionAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSettleAuctionAminoMsg): MsgSettleAuction {
    return MsgSettleAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSettleAuction): MsgSettleAuctionAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgSettleAuction",
      value: MsgSettleAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSettleAuctionProtoMsg): MsgSettleAuction {
    return MsgSettleAuction.decode(message.value);
  },
  toProto(message: MsgSettleAuction): Uint8Array {
    return MsgSettleAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgSettleAuction): MsgSettleAuctionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSettleAuction",
      value: MsgSettleAuction.encode(message).finish()
    };
  }
};
function createBaseMsgSettleAuctionResponse(): MsgSettleAuctionResponse {
  return {
    sold: false
  };
}
/**
 * MsgSettleAuctionResponse reports whether the token was sold.
 * @name MsgSettleAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgSettleAuctionResponse
 */
export const MsgSettleAuctionResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgSettleAuctionResponse",
  encode(message: MsgSettleAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sold === true) {
      writer.uint32(8).bool(message.sold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSettleAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sold = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSettleAuctionResponse>): MsgSettleAuctionResponse {
    const message = createBaseMsgSettleAuctionResponse();
    message.sold = object.sold ?? false;
    return message;
  },
  fromAmino(object: MsgSettleAuctionResponseAmino): MsgSettleAuctionResponse {
    const message = createBaseMsgSettleAuctionResponse();
    if (object.sold !== undefined && object.sold !== null) {
      message.sold = object.sold;
    }
    return message;
  },
  toAmino(message: MsgSettleAuctionResponse): MsgSettleAuctionResponseAmino {
    const obj: any = {};
    obj.sold = message.sold === false ? undefined : message.sold;
    return obj;
  },
  fromAminoMsg(object: MsgSettleAuctionResponseAminoMsg): MsgSettleAuctionResponse {
    return MsgSettleAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSettleAuctionResponseProtoMsg): MsgSettleAuctionResponse {
    return MsgSettleAuctionResponse.decode(message.value);
  },
  toProto(message: MsgSettleAuctionResponse): Uint8Array {
    return MsgSettleAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSettleAuctionResponse): MsgSettleAuctionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgSettleAuctionResponse",
      value: MsgSettleAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelAuction(): MsgCancelAuction {
  return {
    seller: "",
    auctionId: BigInt(0)
  };
}
/**
 * MsgCancelAuction withdraws an auction that has no bids.
 * @name MsgCancelAuction
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelAuction
 */
export const MsgCancelAuction = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelAuction",
  aminoType: "sparkdream/x/artifact/MsgCancelAuction",
  encode(message: MsgCancelAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelAuction>): MsgCancelAuction {
    const message = createBaseMsgCancelAuction();
    message.seller = object.seller ?? "";
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelAuctionAmino): MsgCancelAuction {
    const message = createBaseMsgCancelAuction();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    return message;
  },
  toAmino(message: MsgCancelAuction): MsgCancelAuctionAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.auction_id = message.auctionId !== BigInt(0) ? message.auctionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelAuctionAminoMsg): MsgCancelAuction {
    return MsgCancelAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelAuction): MsgCancelAuctionAminoMsg {
    return {
      type: "sparkdream/x/artifact/MsgCancelAuction",
      value: MsgCancelAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelAuctionProtoMsg): MsgCancelAuction {
    return MsgCancelAuction.decode(message.value);
  },
  toProto(message: MsgCancelAuction): Uint8Array {
    return MsgCancelAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelAuction): MsgCancelAuctionProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelAuction",
      value: MsgCancelAuction.encode(message).finish()
    };
  }
};
function createBaseMsgCancelAuctionResponse(): MsgCancelAuctionResponse {
  return {};
}
/**
 * MsgCancelAuctionResponse is empty.
 * @name MsgCancelAuctionResponse
 * @package sparkdream.artifact.v1
 * @see proto type: sparkdream.artifact.v1.MsgCancelAuctionResponse
 */
export const MsgCancelAuctionResponse = {
  typeUrl: "/sparkdream.artifact.v1.MsgCancelAuctionResponse",
  encode(_: MsgCancelAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAuctionResponse();
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
  fromPartial(_: DeepPartial<MsgCancelAuctionResponse>): MsgCancelAuctionResponse {
    const message = createBaseMsgCancelAuctionResponse();
    return message;
  },
  fromAmino(_: MsgCancelAuctionResponseAmino): MsgCancelAuctionResponse {
    const message = createBaseMsgCancelAuctionResponse();
    return message;
  },
  toAmino(_: MsgCancelAuctionResponse): MsgCancelAuctionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelAuctionResponseAminoMsg): MsgCancelAuctionResponse {
    return MsgCancelAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelAuctionResponseProtoMsg): MsgCancelAuctionResponse {
    return MsgCancelAuctionResponse.decode(message.value);
  },
  toProto(message: MsgCancelAuctionResponse): Uint8Array {
    return MsgCancelAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelAuctionResponse): MsgCancelAuctionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.artifact.v1.MsgCancelAuctionResponse",
      value: MsgCancelAuctionResponse.encode(message).finish()
    };
  }
};