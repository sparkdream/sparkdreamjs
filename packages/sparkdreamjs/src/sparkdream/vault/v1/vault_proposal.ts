//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** ProposalStatus is the lifecycle of a VaultProposal. */
export enum ProposalStatus {
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /** PROPOSAL_STATUS_PENDING - Collecting approvals; executable once the threshold is met. */
  PROPOSAL_STATUS_PENDING = 1,
  /** PROPOSAL_STATUS_EXECUTED - Every inner message ran successfully. */
  PROPOSAL_STATUS_EXECUTED = 2,
  /** PROPOSAL_STATUS_CANCELLED - Cancelled by the proposer or by the vault itself (executed MsgCancelProposal). */
  PROPOSAL_STATUS_CANCELLED = 3,
  /** PROPOSAL_STATUS_EXPIRED - expires_at passed before execution (EndBlocker). */
  PROPOSAL_STATUS_EXPIRED = 4,
  /** PROPOSAL_STATUS_INVALIDATED - The vault's signer set or threshold changed after creation. */
  PROPOSAL_STATUS_INVALIDATED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_PENDING":
      return ProposalStatus.PROPOSAL_STATUS_PENDING;
    case 2:
    case "PROPOSAL_STATUS_EXECUTED":
      return ProposalStatus.PROPOSAL_STATUS_EXECUTED;
    case 3:
    case "PROPOSAL_STATUS_CANCELLED":
      return ProposalStatus.PROPOSAL_STATUS_CANCELLED;
    case 4:
    case "PROPOSAL_STATUS_EXPIRED":
      return ProposalStatus.PROPOSAL_STATUS_EXPIRED;
    case 5:
    case "PROPOSAL_STATUS_INVALIDATED":
      return ProposalStatus.PROPOSAL_STATUS_INVALIDATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_PENDING:
      return "PROPOSAL_STATUS_PENDING";
    case ProposalStatus.PROPOSAL_STATUS_EXECUTED:
      return "PROPOSAL_STATUS_EXECUTED";
    case ProposalStatus.PROPOSAL_STATUS_CANCELLED:
      return "PROPOSAL_STATUS_CANCELLED";
    case ProposalStatus.PROPOSAL_STATUS_EXPIRED:
      return "PROPOSAL_STATUS_EXPIRED";
    case ProposalStatus.PROPOSAL_STATUS_INVALIDATED:
      return "PROPOSAL_STATUS_INVALIDATED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * VaultProposal is a batch of messages a vault's signers approve. Every inner
 * message is signed by the vault address and runs atomically through the msg
 * router when the approving weight reaches the vault's threshold.
 * @name VaultProposal
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultProposal
 */
export interface VaultProposal {
  proposalId: bigint;
  vaultId: bigint;
  /**
   * Canonical (x/rep alias) address of the proposer.
   */
  proposer: string;
  /**
   * Inner messages; each GetSigners() must be exactly [vault.address]; at most
   * MaxMessagesPerProposal; denylisted types (identity, shield exec, vault
   * recursion, session exec) are refused at propose and at execute.
   */
  messages: (Any)[] | Any[];
  /**
   * sha256 over the deterministic proto encoding of `messages`; MsgApprove must
   * repeat it so a hardware wallet shows what is being approved.
   */
  messagesHash: Uint8Array;
  /**
   * Vault config_version at creation; a mismatch means INVALIDATED.
   */
  configVersion: bigint;
  /**
   * Canonical addresses of approvers (the proposer approves implicitly). Only
   * approvers who are current signers count toward the tally.
   */
  approvals: string[];
  status: ProposalStatus;
  /**
   * Unix seconds after which a PENDING proposal becomes EXPIRED.
   */
  expiresAt: bigint;
  /**
   * Display only, <= MaxMemoLength chars.
   */
  memo: string;
  /**
   * Unix seconds when the proposal left PENDING; drives retention pruning.
   */
  resolvedAt: bigint;
}
export interface VaultProposalProtoMsg {
  typeUrl: "/sparkdream.vault.v1.VaultProposal";
  value: Uint8Array;
}
export type VaultProposalEncoded = Omit<VaultProposal, "messages"> & {
  /**
   * Inner messages; each GetSigners() must be exactly [vault.address]; at most
   * MaxMessagesPerProposal; denylisted types (identity, shield exec, vault
   * recursion, session exec) are refused at propose and at execute.
   */
  messages: (AnyProtoMsg)[];
};
/**
 * VaultProposal is a batch of messages a vault's signers approve. Every inner
 * message is signed by the vault address and runs atomically through the msg
 * router when the approving weight reaches the vault's threshold.
 * @name VaultProposalAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultProposal
 */
export interface VaultProposalAmino {
  proposal_id?: string;
  vault_id?: string;
  /**
   * Canonical (x/rep alias) address of the proposer.
   */
  proposer?: string;
  /**
   * Inner messages; each GetSigners() must be exactly [vault.address]; at most
   * MaxMessagesPerProposal; denylisted types (identity, shield exec, vault
   * recursion, session exec) are refused at propose and at execute.
   */
  messages?: AnyAmino[];
  /**
   * sha256 over the deterministic proto encoding of `messages`; MsgApprove must
   * repeat it so a hardware wallet shows what is being approved.
   */
  messages_hash?: string;
  /**
   * Vault config_version at creation; a mismatch means INVALIDATED.
   */
  config_version?: string;
  /**
   * Canonical addresses of approvers (the proposer approves implicitly). Only
   * approvers who are current signers count toward the tally.
   */
  approvals?: string[];
  status?: ProposalStatus;
  /**
   * Unix seconds after which a PENDING proposal becomes EXPIRED.
   */
  expires_at?: string;
  /**
   * Display only, <= MaxMemoLength chars.
   */
  memo?: string;
  /**
   * Unix seconds when the proposal left PENDING; drives retention pruning.
   */
  resolved_at?: string;
}
export interface VaultProposalAminoMsg {
  type: "/sparkdream.vault.v1.VaultProposal";
  value: VaultProposalAmino;
}
function createBaseVaultProposal(): VaultProposal {
  return {
    proposalId: BigInt(0),
    vaultId: BigInt(0),
    proposer: "",
    messages: [],
    messagesHash: new Uint8Array(),
    configVersion: BigInt(0),
    approvals: [],
    status: 0,
    expiresAt: BigInt(0),
    memo: "",
    resolvedAt: BigInt(0)
  };
}
/**
 * VaultProposal is a batch of messages a vault's signers approve. Every inner
 * message is signed by the vault address and runs atomically through the msg
 * router when the approving weight reaches the vault's threshold.
 * @name VaultProposal
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultProposal
 */
export const VaultProposal = {
  typeUrl: "/sparkdream.vault.v1.VaultProposal",
  encode(message: VaultProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.vaultId !== BigInt(0)) {
      writer.uint32(16).uint64(message.vaultId);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    for (const v of message.messages) {
      Any.encode(v! as Any, writer.uint32(34).fork()).ldelim();
    }
    if (message.messagesHash.length !== 0) {
      writer.uint32(42).bytes(message.messagesHash);
    }
    if (message.configVersion !== BigInt(0)) {
      writer.uint32(48).uint64(message.configVersion);
    }
    for (const v of message.approvals) {
      writer.uint32(58).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(72).int64(message.expiresAt);
    }
    if (message.memo !== "") {
      writer.uint32(82).string(message.memo);
    }
    if (message.resolvedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.resolvedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VaultProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.vaultId = reader.uint64();
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        case 5:
          message.messagesHash = reader.bytes();
          break;
        case 6:
          message.configVersion = reader.uint64();
          break;
        case 7:
          message.approvals.push(reader.string());
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.expiresAt = reader.int64();
          break;
        case 10:
          message.memo = reader.string();
          break;
        case 11:
          message.resolvedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VaultProposal>): VaultProposal {
    const message = createBaseVaultProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? BigInt(object.vaultId.toString()) : BigInt(0);
    message.proposer = object.proposer ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.messagesHash = object.messagesHash ?? new Uint8Array();
    message.configVersion = object.configVersion !== undefined && object.configVersion !== null ? BigInt(object.configVersion.toString()) : BigInt(0);
    message.approvals = object.approvals?.map(e => e) || [];
    message.status = object.status ?? 0;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.memo = object.memo ?? "";
    message.resolvedAt = object.resolvedAt !== undefined && object.resolvedAt !== null ? BigInt(object.resolvedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VaultProposalAmino): VaultProposal {
    const message = createBaseVaultProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = BigInt(object.vault_id);
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.messages = object.messages?.map(e => Cosmos_basev1beta1Msg_FromAmino(e)) || [];
    if (object.messages_hash !== undefined && object.messages_hash !== null) {
      message.messagesHash = bytesFromBase64(object.messages_hash);
    }
    if (object.config_version !== undefined && object.config_version !== null) {
      message.configVersion = BigInt(object.config_version);
    }
    message.approvals = object.approvals?.map(e => e) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.resolved_at !== undefined && object.resolved_at !== null) {
      message.resolvedAt = BigInt(object.resolved_at);
    }
    return message;
  },
  toAmino(message: VaultProposal): VaultProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Cosmos_basev1beta1Msg_ToAmino(e as Any) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.messages_hash = message.messagesHash ? base64FromBytes(message.messagesHash) : undefined;
    obj.config_version = message.configVersion !== BigInt(0) ? message.configVersion?.toString() : undefined;
    if (message.approvals) {
      obj.approvals = message.approvals.map(e => e);
    } else {
      obj.approvals = message.approvals;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.resolved_at = message.resolvedAt !== BigInt(0) ? message.resolvedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VaultProposalAminoMsg): VaultProposal {
    return VaultProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultProposalProtoMsg): VaultProposal {
    return VaultProposal.decode(message.value);
  },
  toProto(message: VaultProposal): Uint8Array {
    return VaultProposal.encode(message).finish();
  },
  toProtoMsg(message: VaultProposal): VaultProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.VaultProposal",
      value: VaultProposal.encode(message).finish()
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