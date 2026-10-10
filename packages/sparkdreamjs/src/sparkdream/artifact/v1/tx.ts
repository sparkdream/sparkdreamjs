//@ts-nocheck
import { Params, ParamsAmino, ArtifactOperationalParams, ArtifactOperationalParamsAmino } from "./params";
import { ClassFlags, ClassFlagsAmino, MintPolicy, MintPolicyAmino, RoyaltyShare, RoyaltyShareAmino, TokenRef, TokenRefAmino, ReceivePolicy, TokenMetadata, TokenMetadataAmino, HideTargetKind } from "./types";
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
    acceptedContentLicense: ""
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
    maxSupply: BigInt(0)
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
    return message;
  },
  toAmino(message: MsgSetMaxSupply): MsgSetMaxSupplyAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.class_id = message.classId !== BigInt(0) ? message.classId?.toString() : undefined;
    obj.max_supply = message.maxSupply !== BigInt(0) ? message.maxSupply?.toString() : undefined;
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
    metadata: TokenMetadata.fromPartial({})
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
    return message;
  },
  toAmino(message: MintEntry): MintEntryAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.metadata = message.metadata ? TokenMetadata.toAmino(message.metadata) : TokenMetadata.toAmino(TokenMetadata.fromPartial({}));
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
    expectedMetadataHash: ""
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