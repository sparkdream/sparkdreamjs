//@ts-nocheck
import { VaultSigner, VaultSignerAmino } from "./vault_signer";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Vault is a shared account with a stable, keyless, module-derived address and
 * a rotatable weighted signer set. Signers propose and approve on chain with
 * ordinary single-signer txs; a proposal executes once the approving weight
 * reaches threshold (docs/x-vault-spec.md). A vault is never a member: it has
 * no personhood anywhere in x/rep.
 * @name Vault
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.Vault
 */
export interface Vault {
  vaultId: bigint;
  /**
   * address = sdkaddress.Module("vault", "vault/" || bigEndian(vault_id)); no key exists for it.
   */
  address: string;
  /**
   * Weighted signers; no duplicates, every weight in [1, MaxSignerWeight].
   */
  signers: VaultSigner[];
  /**
   * Sum of approving weights needed to execute; 1 <= threshold <= sum(weights).
   */
  threshold: bigint;
  /**
   * Bumped on every signer/threshold change; pending proposals created under an
   * older version are INVALIDATED (approvals never combine across signer sets).
   */
  configVersion: bigint;
  /**
   * Seconds a new proposal stays PENDING; MinProposalTTL <= proposal_ttl <= MaxProposalTTL.
   */
  proposalTtl: bigint;
  /**
   * Display only, <= MaxLabelLength chars.
   */
  label: string;
  /**
   * Block time (unix seconds) of creation.
   */
  createdAt: bigint;
}
export interface VaultProtoMsg {
  typeUrl: "/sparkdream.vault.v1.Vault";
  value: Uint8Array;
}
/**
 * Vault is a shared account with a stable, keyless, module-derived address and
 * a rotatable weighted signer set. Signers propose and approve on chain with
 * ordinary single-signer txs; a proposal executes once the approving weight
 * reaches threshold (docs/x-vault-spec.md). A vault is never a member: it has
 * no personhood anywhere in x/rep.
 * @name VaultAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.Vault
 */
export interface VaultAmino {
  vault_id?: string;
  /**
   * address = sdkaddress.Module("vault", "vault/" || bigEndian(vault_id)); no key exists for it.
   */
  address?: string;
  /**
   * Weighted signers; no duplicates, every weight in [1, MaxSignerWeight].
   */
  signers?: VaultSignerAmino[];
  /**
   * Sum of approving weights needed to execute; 1 <= threshold <= sum(weights).
   */
  threshold?: string;
  /**
   * Bumped on every signer/threshold change; pending proposals created under an
   * older version are INVALIDATED (approvals never combine across signer sets).
   */
  config_version?: string;
  /**
   * Seconds a new proposal stays PENDING; MinProposalTTL <= proposal_ttl <= MaxProposalTTL.
   */
  proposal_ttl?: string;
  /**
   * Display only, <= MaxLabelLength chars.
   */
  label?: string;
  /**
   * Block time (unix seconds) of creation.
   */
  created_at?: string;
}
export interface VaultAminoMsg {
  type: "/sparkdream.vault.v1.Vault";
  value: VaultAmino;
}
function createBaseVault(): Vault {
  return {
    vaultId: BigInt(0),
    address: "",
    signers: [],
    threshold: BigInt(0),
    configVersion: BigInt(0),
    proposalTtl: BigInt(0),
    label: "",
    createdAt: BigInt(0)
  };
}
/**
 * Vault is a shared account with a stable, keyless, module-derived address and
 * a rotatable weighted signer set. Signers propose and approve on chain with
 * ordinary single-signer txs; a proposal executes once the approving weight
 * reaches threshold (docs/x-vault-spec.md). A vault is never a member: it has
 * no personhood anywhere in x/rep.
 * @name Vault
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.Vault
 */
export const Vault = {
  typeUrl: "/sparkdream.vault.v1.Vault",
  encode(message: Vault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.signers) {
      VaultSigner.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(32).uint64(message.threshold);
    }
    if (message.configVersion !== BigInt(0)) {
      writer.uint32(40).uint64(message.configVersion);
    }
    if (message.proposalTtl !== BigInt(0)) {
      writer.uint32(48).int64(message.proposalTtl);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(64).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.signers.push(VaultSigner.decode(reader, reader.uint32()));
          break;
        case 4:
          message.threshold = reader.uint64();
          break;
        case 5:
          message.configVersion = reader.uint64();
          break;
        case 6:
          message.proposalTtl = reader.int64();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Vault>): Vault {
    const message = createBaseVault();
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? BigInt(object.vaultId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.signers = object.signers?.map(e => VaultSigner.fromPartial(e)) || [];
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.configVersion = object.configVersion !== undefined && object.configVersion !== null ? BigInt(object.configVersion.toString()) : BigInt(0);
    message.proposalTtl = object.proposalTtl !== undefined && object.proposalTtl !== null ? BigInt(object.proposalTtl.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VaultAmino): Vault {
    const message = createBaseVault();
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = BigInt(object.vault_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.signers = object.signers?.map(e => VaultSigner.fromAmino(e)) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.config_version !== undefined && object.config_version !== null) {
      message.configVersion = BigInt(object.config_version);
    }
    if (object.proposal_ttl !== undefined && object.proposal_ttl !== null) {
      message.proposalTtl = BigInt(object.proposal_ttl);
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Vault): VaultAmino {
    const obj: any = {};
    obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? VaultSigner.toAmino(e) : undefined);
    } else {
      obj.signers = message.signers;
    }
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.config_version = message.configVersion !== BigInt(0) ? message.configVersion?.toString() : undefined;
    obj.proposal_ttl = message.proposalTtl !== BigInt(0) ? message.proposalTtl?.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VaultAminoMsg): Vault {
    return Vault.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultProtoMsg): Vault {
    return Vault.decode(message.value);
  },
  toProto(message: Vault): Uint8Array {
    return Vault.encode(message).finish();
  },
  toProtoMsg(message: Vault): VaultProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.Vault",
      value: Vault.encode(message).finish()
    };
  }
};