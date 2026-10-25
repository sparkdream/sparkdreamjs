//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { VaultSigner, VaultSignerAmino } from "./vault_signer";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateParams
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
  typeUrl: "/sparkdream.vault.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateParams
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
  type: "sparkdream/x/vault/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgCreateVault creates a vault. Burns params.creation_fee from the creator,
 * who need not be a signer. Refused while params.creation_enabled is false.
 * @name MsgCreateVault
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCreateVault
 */
export interface MsgCreateVault {
  creator: string;
  signers: VaultSigner[];
  threshold: bigint;
  proposalTtl: bigint;
  label: string;
}
export interface MsgCreateVaultProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgCreateVault";
  value: Uint8Array;
}
/**
 * MsgCreateVault creates a vault. Burns params.creation_fee from the creator,
 * who need not be a signer. Refused while params.creation_enabled is false.
 * @name MsgCreateVaultAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCreateVault
 */
export interface MsgCreateVaultAmino {
  creator?: string;
  signers?: VaultSignerAmino[];
  threshold?: string;
  proposal_ttl?: string;
  label?: string;
}
export interface MsgCreateVaultAminoMsg {
  type: "sparkdream/x/vault/MsgCreateVault";
  value: MsgCreateVaultAmino;
}
/**
 * MsgCreateVaultResponse defines the MsgCreateVaultResponse message.
 * @name MsgCreateVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCreateVaultResponse
 */
export interface MsgCreateVaultResponse {
  vaultId: bigint;
  address: string;
}
export interface MsgCreateVaultResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgCreateVaultResponse";
  value: Uint8Array;
}
/**
 * MsgCreateVaultResponse defines the MsgCreateVaultResponse message.
 * @name MsgCreateVaultResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCreateVaultResponse
 */
export interface MsgCreateVaultResponseAmino {
  vault_id?: string;
  address?: string;
}
export interface MsgCreateVaultResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgCreateVaultResponse";
  value: MsgCreateVaultResponseAmino;
}
/**
 * MsgPropose opens a proposal on a vault. Signed by a current signer; records
 * the proposer's approval and executes at once when `execute` is set and the
 * threshold is already met (1-of-n vaults). Refused when the proposer has
 * MaxPendingProposalsPerProposer pending proposals in this vault; a proposal
 * whose only message is MsgUpdateVault counts against
 * MaxPendingUpdateProposalsPerProposer instead, so rotation is always possible.
 * @name MsgPropose
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgPropose
 */
export interface MsgPropose {
  signer: string;
  vaultId: bigint;
  messages: (Any)[] | Any[];
  memo: string;
  execute: boolean;
}
export interface MsgProposeProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgPropose";
  value: Uint8Array;
}
export type MsgProposeEncoded = Omit<MsgPropose, "messages"> & {
  messages: (AnyProtoMsg)[];
};
/**
 * MsgPropose opens a proposal on a vault. Signed by a current signer; records
 * the proposer's approval and executes at once when `execute` is set and the
 * threshold is already met (1-of-n vaults). Refused when the proposer has
 * MaxPendingProposalsPerProposer pending proposals in this vault; a proposal
 * whose only message is MsgUpdateVault counts against
 * MaxPendingUpdateProposalsPerProposer instead, so rotation is always possible.
 * @name MsgProposeAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgPropose
 */
export interface MsgProposeAmino {
  signer?: string;
  vault_id?: string;
  messages?: AnyAmino[];
  memo?: string;
  execute?: boolean;
}
export interface MsgProposeAminoMsg {
  type: "sparkdream/x/vault/MsgPropose";
  value: MsgProposeAmino;
}
/**
 * MsgProposeResponse defines the MsgProposeResponse message.
 * @name MsgProposeResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgProposeResponse
 */
export interface MsgProposeResponse {
  proposalId: bigint;
  executed: boolean;
}
export interface MsgProposeResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgProposeResponse";
  value: Uint8Array;
}
/**
 * MsgProposeResponse defines the MsgProposeResponse message.
 * @name MsgProposeResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgProposeResponse
 */
export interface MsgProposeResponseAmino {
  proposal_id?: string;
  executed?: boolean;
}
export interface MsgProposeResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgProposeResponse";
  value: MsgProposeResponseAmino;
}
/**
 * MsgApprove adds a current signer's approval. messages_hash must equal the
 * proposal's hash (wallets fill it, so a hardware wallet displays what is
 * approved). Executes at once when `execute` is set and the threshold is met.
 * @name MsgApprove
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgApprove
 */
export interface MsgApprove {
  signer: string;
  proposalId: bigint;
  messagesHash: Uint8Array;
  execute: boolean;
}
export interface MsgApproveProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgApprove";
  value: Uint8Array;
}
/**
 * MsgApprove adds a current signer's approval. messages_hash must equal the
 * proposal's hash (wallets fill it, so a hardware wallet displays what is
 * approved). Executes at once when `execute` is set and the threshold is met.
 * @name MsgApproveAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgApprove
 */
export interface MsgApproveAmino {
  signer?: string;
  proposal_id?: string;
  messages_hash?: string;
  execute?: boolean;
}
export interface MsgApproveAminoMsg {
  type: "sparkdream/x/vault/MsgApprove";
  value: MsgApproveAmino;
}
/**
 * MsgApproveResponse defines the MsgApproveResponse message.
 * @name MsgApproveResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgApproveResponse
 */
export interface MsgApproveResponse {
  executed: boolean;
}
export interface MsgApproveResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgApproveResponse";
  value: Uint8Array;
}
/**
 * MsgApproveResponse defines the MsgApproveResponse message.
 * @name MsgApproveResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgApproveResponse
 */
export interface MsgApproveResponseAmino {
  executed?: boolean;
}
export interface MsgApproveResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgApproveResponse";
  value: MsgApproveResponseAmino;
}
/**
 * MsgRevokeApproval withdraws the signer's approval from a PENDING proposal.
 * @name MsgRevokeApproval
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgRevokeApproval
 */
export interface MsgRevokeApproval {
  signer: string;
  proposalId: bigint;
}
export interface MsgRevokeApprovalProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgRevokeApproval";
  value: Uint8Array;
}
/**
 * MsgRevokeApproval withdraws the signer's approval from a PENDING proposal.
 * @name MsgRevokeApprovalAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgRevokeApproval
 */
export interface MsgRevokeApprovalAmino {
  signer?: string;
  proposal_id?: string;
}
export interface MsgRevokeApprovalAminoMsg {
  type: "sparkdream/x/vault/MsgRevokeApproval";
  value: MsgRevokeApprovalAmino;
}
/**
 * MsgRevokeApprovalResponse defines the MsgRevokeApprovalResponse message.
 * @name MsgRevokeApprovalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgRevokeApprovalResponse
 */
export interface MsgRevokeApprovalResponse {}
export interface MsgRevokeApprovalResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgRevokeApprovalResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeApprovalResponse defines the MsgRevokeApprovalResponse message.
 * @name MsgRevokeApprovalResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgRevokeApprovalResponse
 */
export interface MsgRevokeApprovalResponseAmino {}
export interface MsgRevokeApprovalResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgRevokeApprovalResponse";
  value: MsgRevokeApprovalResponseAmino;
}
/**
 * MsgExecute runs a PENDING proposal whose tally meets the threshold. Signed
 * by any current signer, who pays the gas. A failing inner message reverts the
 * whole tx and leaves the proposal PENDING for a retry until it expires.
 * @name MsgExecute
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgExecute
 */
export interface MsgExecute {
  signer: string;
  proposalId: bigint;
}
export interface MsgExecuteProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgExecute";
  value: Uint8Array;
}
/**
 * MsgExecute runs a PENDING proposal whose tally meets the threshold. Signed
 * by any current signer, who pays the gas. A failing inner message reverts the
 * whole tx and leaves the proposal PENDING for a retry until it expires.
 * @name MsgExecuteAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgExecute
 */
export interface MsgExecuteAmino {
  signer?: string;
  proposal_id?: string;
}
export interface MsgExecuteAminoMsg {
  type: "sparkdream/x/vault/MsgExecute";
  value: MsgExecuteAmino;
}
/**
 * MsgExecuteResponse defines the MsgExecuteResponse message.
 * @name MsgExecuteResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgExecuteResponse
 */
export interface MsgExecuteResponse {}
export interface MsgExecuteResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgExecuteResponse";
  value: Uint8Array;
}
/**
 * MsgExecuteResponse defines the MsgExecuteResponse message.
 * @name MsgExecuteResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgExecuteResponse
 */
export interface MsgExecuteResponseAmino {}
export interface MsgExecuteResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgExecuteResponse";
  value: MsgExecuteResponseAmino;
}
/**
 * MsgCancelProposal cancels a PENDING proposal. Signed by the proposer, or by
 * the vault address itself through an executed proposal (one of the two vault
 * messages allowed as an inner message, so a threshold of signers can clear a
 * proposal nobody wants).
 * @name MsgCancelProposal
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCancelProposal
 */
export interface MsgCancelProposal {
  signer: string;
  proposalId: bigint;
}
export interface MsgCancelProposalProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgCancelProposal";
  value: Uint8Array;
}
/**
 * MsgCancelProposal cancels a PENDING proposal. Signed by the proposer, or by
 * the vault address itself through an executed proposal (one of the two vault
 * messages allowed as an inner message, so a threshold of signers can clear a
 * proposal nobody wants).
 * @name MsgCancelProposalAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCancelProposal
 */
export interface MsgCancelProposalAmino {
  signer?: string;
  proposal_id?: string;
}
export interface MsgCancelProposalAminoMsg {
  type: "sparkdream/x/vault/MsgCancelProposal";
  value: MsgCancelProposalAmino;
}
/**
 * MsgCancelProposalResponse defines the MsgCancelProposalResponse message.
 * @name MsgCancelProposalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCancelProposalResponse
 */
export interface MsgCancelProposalResponse {}
export interface MsgCancelProposalResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgCancelProposalResponse";
  value: Uint8Array;
}
/**
 * MsgCancelProposalResponse defines the MsgCancelProposalResponse message.
 * @name MsgCancelProposalResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCancelProposalResponse
 */
export interface MsgCancelProposalResponseAmino {}
export interface MsgCancelProposalResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgCancelProposalResponse";
  value: MsgCancelProposalResponseAmino;
}
/**
 * MsgUpdateVault replaces the signer set, threshold, proposal TTL and label.
 * Its signer is the vault address, so it only ever runs as an inner message of
 * an executed proposal. Bumps config_version and INVALIDATES every other
 * pending proposal of the vault (the executing one is marked EXECUTED first).
 * @name MsgUpdateVault
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateVault
 */
export interface MsgUpdateVault {
  vault: string;
  signers: VaultSigner[];
  threshold: bigint;
  proposalTtl: bigint;
  label: string;
}
export interface MsgUpdateVaultProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateVault";
  value: Uint8Array;
}
/**
 * MsgUpdateVault replaces the signer set, threshold, proposal TTL and label.
 * Its signer is the vault address, so it only ever runs as an inner message of
 * an executed proposal. Bumps config_version and INVALIDATES every other
 * pending proposal of the vault (the executing one is marked EXECUTED first).
 * @name MsgUpdateVaultAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateVault
 */
export interface MsgUpdateVaultAmino {
  vault?: string;
  signers?: VaultSignerAmino[];
  threshold?: string;
  proposal_ttl?: string;
  label?: string;
}
export interface MsgUpdateVaultAminoMsg {
  type: "sparkdream/x/vault/MsgUpdateVault";
  value: MsgUpdateVaultAmino;
}
/**
 * MsgUpdateVaultResponse defines the MsgUpdateVaultResponse message.
 * @name MsgUpdateVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateVaultResponse
 */
export interface MsgUpdateVaultResponse {}
export interface MsgUpdateVaultResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateVaultResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateVaultResponse defines the MsgUpdateVaultResponse message.
 * @name MsgUpdateVaultResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateVaultResponse
 */
export interface MsgUpdateVaultResponseAmino {}
export interface MsgUpdateVaultResponseAminoMsg {
  type: "/sparkdream.vault.v1.MsgUpdateVaultResponse";
  value: MsgUpdateVaultResponseAmino;
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
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/vault/MsgUpdateParams",
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
      type: "sparkdream/x/vault/MsgUpdateParams",
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
      typeUrl: "/sparkdream.vault.v1.MsgUpdateParams",
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
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.vault.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVault(): MsgCreateVault {
  return {
    creator: "",
    signers: [],
    threshold: BigInt(0),
    proposalTtl: BigInt(0),
    label: ""
  };
}
/**
 * MsgCreateVault creates a vault. Burns params.creation_fee from the creator,
 * who need not be a signer. Refused while params.creation_enabled is false.
 * @name MsgCreateVault
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCreateVault
 */
export const MsgCreateVault = {
  typeUrl: "/sparkdream.vault.v1.MsgCreateVault",
  aminoType: "sparkdream/x/vault/MsgCreateVault",
  encode(message: MsgCreateVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.signers) {
      VaultSigner.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(24).uint64(message.threshold);
    }
    if (message.proposalTtl !== BigInt(0)) {
      writer.uint32(32).int64(message.proposalTtl);
    }
    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.signers.push(VaultSigner.decode(reader, reader.uint32()));
          break;
        case 3:
          message.threshold = reader.uint64();
          break;
        case 4:
          message.proposalTtl = reader.int64();
          break;
        case 5:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateVault>): MsgCreateVault {
    const message = createBaseMsgCreateVault();
    message.creator = object.creator ?? "";
    message.signers = object.signers?.map(e => VaultSigner.fromPartial(e)) || [];
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.proposalTtl = object.proposalTtl !== undefined && object.proposalTtl !== null ? BigInt(object.proposalTtl.toString()) : BigInt(0);
    message.label = object.label ?? "";
    return message;
  },
  fromAmino(object: MsgCreateVaultAmino): MsgCreateVault {
    const message = createBaseMsgCreateVault();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.signers = object.signers?.map(e => VaultSigner.fromAmino(e)) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.proposal_ttl !== undefined && object.proposal_ttl !== null) {
      message.proposalTtl = BigInt(object.proposal_ttl);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    return message;
  },
  toAmino(message: MsgCreateVault): MsgCreateVaultAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? VaultSigner.toAmino(e) : undefined);
    } else {
      obj.signers = message.signers;
    }
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.proposal_ttl = message.proposalTtl !== BigInt(0) ? message.proposalTtl?.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVaultAminoMsg): MsgCreateVault {
    return MsgCreateVault.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVault): MsgCreateVaultAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgCreateVault",
      value: MsgCreateVault.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVaultProtoMsg): MsgCreateVault {
    return MsgCreateVault.decode(message.value);
  },
  toProto(message: MsgCreateVault): Uint8Array {
    return MsgCreateVault.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVault): MsgCreateVaultProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgCreateVault",
      value: MsgCreateVault.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVaultResponse(): MsgCreateVaultResponse {
  return {
    vaultId: BigInt(0),
    address: ""
  };
}
/**
 * MsgCreateVaultResponse defines the MsgCreateVaultResponse message.
 * @name MsgCreateVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCreateVaultResponse
 */
export const MsgCreateVaultResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgCreateVaultResponse",
  encode(message: MsgCreateVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateVaultResponse>): MsgCreateVaultResponse {
    const message = createBaseMsgCreateVaultResponse();
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? BigInt(object.vaultId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateVaultResponseAmino): MsgCreateVaultResponse {
    const message = createBaseMsgCreateVaultResponse();
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = BigInt(object.vault_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateVaultResponse): MsgCreateVaultResponseAmino {
    const obj: any = {};
    obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVaultResponseAminoMsg): MsgCreateVaultResponse {
    return MsgCreateVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVaultResponseProtoMsg): MsgCreateVaultResponse {
    return MsgCreateVaultResponse.decode(message.value);
  },
  toProto(message: MsgCreateVaultResponse): Uint8Array {
    return MsgCreateVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVaultResponse): MsgCreateVaultResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgCreateVaultResponse",
      value: MsgCreateVaultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPropose(): MsgPropose {
  return {
    signer: "",
    vaultId: BigInt(0),
    messages: [],
    memo: "",
    execute: false
  };
}
/**
 * MsgPropose opens a proposal on a vault. Signed by a current signer; records
 * the proposer's approval and executes at once when `execute` is set and the
 * threshold is already met (1-of-n vaults). Refused when the proposer has
 * MaxPendingProposalsPerProposer pending proposals in this vault; a proposal
 * whose only message is MsgUpdateVault counts against
 * MaxPendingUpdateProposalsPerProposer instead, so rotation is always possible.
 * @name MsgPropose
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgPropose
 */
export const MsgPropose = {
  typeUrl: "/sparkdream.vault.v1.MsgPropose",
  aminoType: "sparkdream/x/vault/MsgPropose",
  encode(message: MsgPropose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.vaultId !== BigInt(0)) {
      writer.uint32(16).uint64(message.vaultId);
    }
    for (const v of message.messages) {
      Any.encode(v! as Any, writer.uint32(26).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (message.execute === true) {
      writer.uint32(40).bool(message.execute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPropose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPropose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.vaultId = reader.uint64();
          break;
        case 3:
          message.messages.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        case 4:
          message.memo = reader.string();
          break;
        case 5:
          message.execute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPropose>): MsgPropose {
    const message = createBaseMsgPropose();
    message.signer = object.signer ?? "";
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? BigInt(object.vaultId.toString()) : BigInt(0);
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.execute = object.execute ?? false;
    return message;
  },
  fromAmino(object: MsgProposeAmino): MsgPropose {
    const message = createBaseMsgPropose();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = BigInt(object.vault_id);
    }
    message.messages = object.messages?.map(e => Cosmos_basev1beta1Msg_FromAmino(e)) || [];
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.execute !== undefined && object.execute !== null) {
      message.execute = object.execute;
    }
    return message;
  },
  toAmino(message: MsgPropose): MsgProposeAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Cosmos_basev1beta1Msg_ToAmino(e as Any) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.execute = message.execute === false ? undefined : message.execute;
    return obj;
  },
  fromAminoMsg(object: MsgProposeAminoMsg): MsgPropose {
    return MsgPropose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPropose): MsgProposeAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgPropose",
      value: MsgPropose.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProposeProtoMsg): MsgPropose {
    return MsgPropose.decode(message.value);
  },
  toProto(message: MsgPropose): Uint8Array {
    return MsgPropose.encode(message).finish();
  },
  toProtoMsg(message: MsgPropose): MsgProposeProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgPropose",
      value: MsgPropose.encode(message).finish()
    };
  }
};
function createBaseMsgProposeResponse(): MsgProposeResponse {
  return {
    proposalId: BigInt(0),
    executed: false
  };
}
/**
 * MsgProposeResponse defines the MsgProposeResponse message.
 * @name MsgProposeResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgProposeResponse
 */
export const MsgProposeResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgProposeResponse",
  encode(message: MsgProposeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executed === true) {
      writer.uint32(16).bool(message.executed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.executed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeResponse>): MsgProposeResponse {
    const message = createBaseMsgProposeResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.executed = object.executed ?? false;
    return message;
  },
  fromAmino(object: MsgProposeResponseAmino): MsgProposeResponse {
    const message = createBaseMsgProposeResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    return message;
  },
  toAmino(message: MsgProposeResponse): MsgProposeResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.executed = message.executed === false ? undefined : message.executed;
    return obj;
  },
  fromAminoMsg(object: MsgProposeResponseAminoMsg): MsgProposeResponse {
    return MsgProposeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeResponseProtoMsg): MsgProposeResponse {
    return MsgProposeResponse.decode(message.value);
  },
  toProto(message: MsgProposeResponse): Uint8Array {
    return MsgProposeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeResponse): MsgProposeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgProposeResponse",
      value: MsgProposeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApprove(): MsgApprove {
  return {
    signer: "",
    proposalId: BigInt(0),
    messagesHash: new Uint8Array(),
    execute: false
  };
}
/**
 * MsgApprove adds a current signer's approval. messages_hash must equal the
 * proposal's hash (wallets fill it, so a hardware wallet displays what is
 * approved). Executes at once when `execute` is set and the threshold is met.
 * @name MsgApprove
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgApprove
 */
export const MsgApprove = {
  typeUrl: "/sparkdream.vault.v1.MsgApprove",
  aminoType: "sparkdream/x/vault/MsgApprove",
  encode(message: MsgApprove, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.messagesHash.length !== 0) {
      writer.uint32(26).bytes(message.messagesHash);
    }
    if (message.execute === true) {
      writer.uint32(32).bool(message.execute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.messagesHash = reader.bytes();
          break;
        case 4:
          message.execute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApprove>): MsgApprove {
    const message = createBaseMsgApprove();
    message.signer = object.signer ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.messagesHash = object.messagesHash ?? new Uint8Array();
    message.execute = object.execute ?? false;
    return message;
  },
  fromAmino(object: MsgApproveAmino): MsgApprove {
    const message = createBaseMsgApprove();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.messages_hash !== undefined && object.messages_hash !== null) {
      message.messagesHash = bytesFromBase64(object.messages_hash);
    }
    if (object.execute !== undefined && object.execute !== null) {
      message.execute = object.execute;
    }
    return message;
  },
  toAmino(message: MsgApprove): MsgApproveAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.messages_hash = message.messagesHash ? base64FromBytes(message.messagesHash) : undefined;
    obj.execute = message.execute === false ? undefined : message.execute;
    return obj;
  },
  fromAminoMsg(object: MsgApproveAminoMsg): MsgApprove {
    return MsgApprove.fromAmino(object.value);
  },
  toAminoMsg(message: MsgApprove): MsgApproveAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgApprove",
      value: MsgApprove.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgApproveProtoMsg): MsgApprove {
    return MsgApprove.decode(message.value);
  },
  toProto(message: MsgApprove): Uint8Array {
    return MsgApprove.encode(message).finish();
  },
  toProtoMsg(message: MsgApprove): MsgApproveProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgApprove",
      value: MsgApprove.encode(message).finish()
    };
  }
};
function createBaseMsgApproveResponse(): MsgApproveResponse {
  return {
    executed: false
  };
}
/**
 * MsgApproveResponse defines the MsgApproveResponse message.
 * @name MsgApproveResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgApproveResponse
 */
export const MsgApproveResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgApproveResponse",
  encode(message: MsgApproveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.executed === true) {
      writer.uint32(8).bool(message.executed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApproveResponse>): MsgApproveResponse {
    const message = createBaseMsgApproveResponse();
    message.executed = object.executed ?? false;
    return message;
  },
  fromAmino(object: MsgApproveResponseAmino): MsgApproveResponse {
    const message = createBaseMsgApproveResponse();
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    return message;
  },
  toAmino(message: MsgApproveResponse): MsgApproveResponseAmino {
    const obj: any = {};
    obj.executed = message.executed === false ? undefined : message.executed;
    return obj;
  },
  fromAminoMsg(object: MsgApproveResponseAminoMsg): MsgApproveResponse {
    return MsgApproveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveResponseProtoMsg): MsgApproveResponse {
    return MsgApproveResponse.decode(message.value);
  },
  toProto(message: MsgApproveResponse): Uint8Array {
    return MsgApproveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveResponse): MsgApproveResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgApproveResponse",
      value: MsgApproveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeApproval(): MsgRevokeApproval {
  return {
    signer: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgRevokeApproval withdraws the signer's approval from a PENDING proposal.
 * @name MsgRevokeApproval
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgRevokeApproval
 */
export const MsgRevokeApproval = {
  typeUrl: "/sparkdream.vault.v1.MsgRevokeApproval",
  aminoType: "sparkdream/x/vault/MsgRevokeApproval",
  encode(message: MsgRevokeApproval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeApproval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeApproval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeApproval>): MsgRevokeApproval {
    const message = createBaseMsgRevokeApproval();
    message.signer = object.signer ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRevokeApprovalAmino): MsgRevokeApproval {
    const message = createBaseMsgRevokeApproval();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgRevokeApproval): MsgRevokeApprovalAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeApprovalAminoMsg): MsgRevokeApproval {
    return MsgRevokeApproval.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeApproval): MsgRevokeApprovalAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgRevokeApproval",
      value: MsgRevokeApproval.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeApprovalProtoMsg): MsgRevokeApproval {
    return MsgRevokeApproval.decode(message.value);
  },
  toProto(message: MsgRevokeApproval): Uint8Array {
    return MsgRevokeApproval.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeApproval): MsgRevokeApprovalProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgRevokeApproval",
      value: MsgRevokeApproval.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeApprovalResponse(): MsgRevokeApprovalResponse {
  return {};
}
/**
 * MsgRevokeApprovalResponse defines the MsgRevokeApprovalResponse message.
 * @name MsgRevokeApprovalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgRevokeApprovalResponse
 */
export const MsgRevokeApprovalResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgRevokeApprovalResponse",
  encode(_: MsgRevokeApprovalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeApprovalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeApprovalResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeApprovalResponse>): MsgRevokeApprovalResponse {
    const message = createBaseMsgRevokeApprovalResponse();
    return message;
  },
  fromAmino(_: MsgRevokeApprovalResponseAmino): MsgRevokeApprovalResponse {
    const message = createBaseMsgRevokeApprovalResponse();
    return message;
  },
  toAmino(_: MsgRevokeApprovalResponse): MsgRevokeApprovalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeApprovalResponseAminoMsg): MsgRevokeApprovalResponse {
    return MsgRevokeApprovalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeApprovalResponseProtoMsg): MsgRevokeApprovalResponse {
    return MsgRevokeApprovalResponse.decode(message.value);
  },
  toProto(message: MsgRevokeApprovalResponse): Uint8Array {
    return MsgRevokeApprovalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeApprovalResponse): MsgRevokeApprovalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgRevokeApprovalResponse",
      value: MsgRevokeApprovalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecute(): MsgExecute {
  return {
    signer: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgExecute runs a PENDING proposal whose tally meets the threshold. Signed
 * by any current signer, who pays the gas. A failing inner message reverts the
 * whole tx and leaves the proposal PENDING for a retry until it expires.
 * @name MsgExecute
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgExecute
 */
export const MsgExecute = {
  typeUrl: "/sparkdream.vault.v1.MsgExecute",
  aminoType: "sparkdream/x/vault/MsgExecute",
  encode(message: MsgExecute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecute>): MsgExecute {
    const message = createBaseMsgExecute();
    message.signer = object.signer ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgExecuteAmino): MsgExecute {
    const message = createBaseMsgExecute();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgExecute): MsgExecuteAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteAminoMsg): MsgExecute {
    return MsgExecute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecute): MsgExecuteAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgExecute",
      value: MsgExecute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteProtoMsg): MsgExecute {
    return MsgExecute.decode(message.value);
  },
  toProto(message: MsgExecute): Uint8Array {
    return MsgExecute.encode(message).finish();
  },
  toProtoMsg(message: MsgExecute): MsgExecuteProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgExecute",
      value: MsgExecute.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteResponse(): MsgExecuteResponse {
  return {};
}
/**
 * MsgExecuteResponse defines the MsgExecuteResponse message.
 * @name MsgExecuteResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgExecuteResponse
 */
export const MsgExecuteResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgExecuteResponse",
  encode(_: MsgExecuteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteResponse();
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
  fromPartial(_: DeepPartial<MsgExecuteResponse>): MsgExecuteResponse {
    const message = createBaseMsgExecuteResponse();
    return message;
  },
  fromAmino(_: MsgExecuteResponseAmino): MsgExecuteResponse {
    const message = createBaseMsgExecuteResponse();
    return message;
  },
  toAmino(_: MsgExecuteResponse): MsgExecuteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecuteResponseAminoMsg): MsgExecuteResponse {
    return MsgExecuteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteResponseProtoMsg): MsgExecuteResponse {
    return MsgExecuteResponse.decode(message.value);
  },
  toProto(message: MsgExecuteResponse): Uint8Array {
    return MsgExecuteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteResponse): MsgExecuteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgExecuteResponse",
      value: MsgExecuteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelProposal(): MsgCancelProposal {
  return {
    signer: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgCancelProposal cancels a PENDING proposal. Signed by the proposer, or by
 * the vault address itself through an executed proposal (one of the two vault
 * messages allowed as an inner message, so a threshold of signers can clear a
 * proposal nobody wants).
 * @name MsgCancelProposal
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCancelProposal
 */
export const MsgCancelProposal = {
  typeUrl: "/sparkdream.vault.v1.MsgCancelProposal",
  aminoType: "sparkdream/x/vault/MsgCancelProposal",
  encode(message: MsgCancelProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelProposal>): MsgCancelProposal {
    const message = createBaseMsgCancelProposal();
    message.signer = object.signer ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelProposalAmino): MsgCancelProposal {
    const message = createBaseMsgCancelProposal();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgCancelProposal): MsgCancelProposalAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelProposalAminoMsg): MsgCancelProposal {
    return MsgCancelProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelProposal): MsgCancelProposalAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgCancelProposal",
      value: MsgCancelProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelProposalProtoMsg): MsgCancelProposal {
    return MsgCancelProposal.decode(message.value);
  },
  toProto(message: MsgCancelProposal): Uint8Array {
    return MsgCancelProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelProposal): MsgCancelProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgCancelProposal",
      value: MsgCancelProposal.encode(message).finish()
    };
  }
};
function createBaseMsgCancelProposalResponse(): MsgCancelProposalResponse {
  return {};
}
/**
 * MsgCancelProposalResponse defines the MsgCancelProposalResponse message.
 * @name MsgCancelProposalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgCancelProposalResponse
 */
export const MsgCancelProposalResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgCancelProposalResponse",
  encode(_: MsgCancelProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProposalResponse();
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
  fromPartial(_: DeepPartial<MsgCancelProposalResponse>): MsgCancelProposalResponse {
    const message = createBaseMsgCancelProposalResponse();
    return message;
  },
  fromAmino(_: MsgCancelProposalResponseAmino): MsgCancelProposalResponse {
    const message = createBaseMsgCancelProposalResponse();
    return message;
  },
  toAmino(_: MsgCancelProposalResponse): MsgCancelProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelProposalResponseAminoMsg): MsgCancelProposalResponse {
    return MsgCancelProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelProposalResponseProtoMsg): MsgCancelProposalResponse {
    return MsgCancelProposalResponse.decode(message.value);
  },
  toProto(message: MsgCancelProposalResponse): Uint8Array {
    return MsgCancelProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelProposalResponse): MsgCancelProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgCancelProposalResponse",
      value: MsgCancelProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVault(): MsgUpdateVault {
  return {
    vault: "",
    signers: [],
    threshold: BigInt(0),
    proposalTtl: BigInt(0),
    label: ""
  };
}
/**
 * MsgUpdateVault replaces the signer set, threshold, proposal TTL and label.
 * Its signer is the vault address, so it only ever runs as an inner message of
 * an executed proposal. Bumps config_version and INVALIDATES every other
 * pending proposal of the vault (the executing one is marked EXECUTED first).
 * @name MsgUpdateVault
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateVault
 */
export const MsgUpdateVault = {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateVault",
  aminoType: "sparkdream/x/vault/MsgUpdateVault",
  encode(message: MsgUpdateVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vault !== "") {
      writer.uint32(10).string(message.vault);
    }
    for (const v of message.signers) {
      VaultSigner.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(24).uint64(message.threshold);
    }
    if (message.proposalTtl !== BigInt(0)) {
      writer.uint32(32).int64(message.proposalTtl);
    }
    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = reader.string();
          break;
        case 2:
          message.signers.push(VaultSigner.decode(reader, reader.uint32()));
          break;
        case 3:
          message.threshold = reader.uint64();
          break;
        case 4:
          message.proposalTtl = reader.int64();
          break;
        case 5:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateVault>): MsgUpdateVault {
    const message = createBaseMsgUpdateVault();
    message.vault = object.vault ?? "";
    message.signers = object.signers?.map(e => VaultSigner.fromPartial(e)) || [];
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.proposalTtl = object.proposalTtl !== undefined && object.proposalTtl !== null ? BigInt(object.proposalTtl.toString()) : BigInt(0);
    message.label = object.label ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateVaultAmino): MsgUpdateVault {
    const message = createBaseMsgUpdateVault();
    if (object.vault !== undefined && object.vault !== null) {
      message.vault = object.vault;
    }
    message.signers = object.signers?.map(e => VaultSigner.fromAmino(e)) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.proposal_ttl !== undefined && object.proposal_ttl !== null) {
      message.proposalTtl = BigInt(object.proposal_ttl);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    return message;
  },
  toAmino(message: MsgUpdateVault): MsgUpdateVaultAmino {
    const obj: any = {};
    obj.vault = message.vault === "" ? undefined : message.vault;
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? VaultSigner.toAmino(e) : undefined);
    } else {
      obj.signers = message.signers;
    }
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.proposal_ttl = message.proposalTtl !== BigInt(0) ? message.proposalTtl?.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVaultAminoMsg): MsgUpdateVault {
    return MsgUpdateVault.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateVault): MsgUpdateVaultAminoMsg {
    return {
      type: "sparkdream/x/vault/MsgUpdateVault",
      value: MsgUpdateVault.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateVaultProtoMsg): MsgUpdateVault {
    return MsgUpdateVault.decode(message.value);
  },
  toProto(message: MsgUpdateVault): Uint8Array {
    return MsgUpdateVault.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVault): MsgUpdateVaultProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgUpdateVault",
      value: MsgUpdateVault.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVaultResponse(): MsgUpdateVaultResponse {
  return {};
}
/**
 * MsgUpdateVaultResponse defines the MsgUpdateVaultResponse message.
 * @name MsgUpdateVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.MsgUpdateVaultResponse
 */
export const MsgUpdateVaultResponse = {
  typeUrl: "/sparkdream.vault.v1.MsgUpdateVaultResponse",
  encode(_: MsgUpdateVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVaultResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateVaultResponse>): MsgUpdateVaultResponse {
    const message = createBaseMsgUpdateVaultResponse();
    return message;
  },
  fromAmino(_: MsgUpdateVaultResponseAmino): MsgUpdateVaultResponse {
    const message = createBaseMsgUpdateVaultResponse();
    return message;
  },
  toAmino(_: MsgUpdateVaultResponse): MsgUpdateVaultResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVaultResponseAminoMsg): MsgUpdateVaultResponse {
    return MsgUpdateVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVaultResponseProtoMsg): MsgUpdateVaultResponse {
    return MsgUpdateVaultResponse.decode(message.value);
  },
  toProto(message: MsgUpdateVaultResponse): Uint8Array {
    return MsgUpdateVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVaultResponse): MsgUpdateVaultResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.MsgUpdateVaultResponse",
      value: MsgUpdateVaultResponse.encode(message).finish()
    };
  }
};
export const Cosmos_basev1beta1Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_basev1beta1Msg_FromAmino = (content: AnyAmino): Any => {
  return Any.fromAmino(content);
};
export const Cosmos_basev1beta1Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};