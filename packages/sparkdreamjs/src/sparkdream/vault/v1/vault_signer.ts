//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * VaultSigner is one weighted signer of a vault. The address is personal (never
 * a vault, module account, group policy or reserved address); a native multisig
 * address is allowed. An entry listed by someone else stays unaccepted until
 * the address accepts it (MsgAcceptVaultSigner).
 * @name VaultSigner
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultSigner
 */
export interface VaultSigner {
  address: string;
  weight: bigint;
  /**
   * Set by the chain, ignored on MsgCreateVault / MsgUpdateVault input. True
   * once the listed address consented: the creator's own entry at create, an
   * entry carried over from the previous accepted config by MsgUpdateVault, or
   * MsgAcceptVaultSigner. Only accepted entries carry weight in the tally, may
   * propose, approve or execute, and count toward MaxVaultsPerSigner.
   */
  accepted: boolean;
  /**
   * Set by the chain, ignored on input. Unix seconds after which an
   * unaccepted entry is removed by the EndBlocker (block time of the listing
   * + InviteTTL); 0 on an accepted entry, or on an unaccepted entry that is
   * the vault's only one (it never expires: removing it would leave no
   * signer). Removing an invitee whose weight the threshold still needed
   * clamps the threshold to the remaining reachable weight (§3.4).
   */
  inviteExpiresAt: bigint;
}
export interface VaultSignerProtoMsg {
  typeUrl: "/sparkdream.vault.v1.VaultSigner";
  value: Uint8Array;
}
/**
 * VaultSigner is one weighted signer of a vault. The address is personal (never
 * a vault, module account, group policy or reserved address); a native multisig
 * address is allowed. An entry listed by someone else stays unaccepted until
 * the address accepts it (MsgAcceptVaultSigner).
 * @name VaultSignerAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultSigner
 */
export interface VaultSignerAmino {
  address?: string;
  weight?: string;
  /**
   * Set by the chain, ignored on MsgCreateVault / MsgUpdateVault input. True
   * once the listed address consented: the creator's own entry at create, an
   * entry carried over from the previous accepted config by MsgUpdateVault, or
   * MsgAcceptVaultSigner. Only accepted entries carry weight in the tally, may
   * propose, approve or execute, and count toward MaxVaultsPerSigner.
   */
  accepted?: boolean;
  /**
   * Set by the chain, ignored on input. Unix seconds after which an
   * unaccepted entry is removed by the EndBlocker (block time of the listing
   * + InviteTTL); 0 on an accepted entry, or on an unaccepted entry that is
   * the vault's only one (it never expires: removing it would leave no
   * signer). Removing an invitee whose weight the threshold still needed
   * clamps the threshold to the remaining reachable weight (§3.4).
   */
  invite_expires_at?: string;
}
export interface VaultSignerAminoMsg {
  type: "/sparkdream.vault.v1.VaultSigner";
  value: VaultSignerAmino;
}
function createBaseVaultSigner(): VaultSigner {
  return {
    address: "",
    weight: BigInt(0),
    accepted: false,
    inviteExpiresAt: BigInt(0)
  };
}
/**
 * VaultSigner is one weighted signer of a vault. The address is personal (never
 * a vault, module account, group policy or reserved address); a native multisig
 * address is allowed. An entry listed by someone else stays unaccepted until
 * the address accepts it (MsgAcceptVaultSigner).
 * @name VaultSigner
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultSigner
 */
export const VaultSigner = {
  typeUrl: "/sparkdream.vault.v1.VaultSigner",
  encode(message: VaultSigner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(16).uint64(message.weight);
    }
    if (message.accepted === true) {
      writer.uint32(24).bool(message.accepted);
    }
    if (message.inviteExpiresAt !== BigInt(0)) {
      writer.uint32(32).int64(message.inviteExpiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VaultSigner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.uint64();
          break;
        case 3:
          message.accepted = reader.bool();
          break;
        case 4:
          message.inviteExpiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VaultSigner>): VaultSigner {
    const message = createBaseVaultSigner();
    message.address = object.address ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.accepted = object.accepted ?? false;
    message.inviteExpiresAt = object.inviteExpiresAt !== undefined && object.inviteExpiresAt !== null ? BigInt(object.inviteExpiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VaultSignerAmino): VaultSigner {
    const message = createBaseVaultSigner();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    if (object.accepted !== undefined && object.accepted !== null) {
      message.accepted = object.accepted;
    }
    if (object.invite_expires_at !== undefined && object.invite_expires_at !== null) {
      message.inviteExpiresAt = BigInt(object.invite_expires_at);
    }
    return message;
  },
  toAmino(message: VaultSigner): VaultSignerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight !== BigInt(0) ? message.weight?.toString() : undefined;
    obj.accepted = message.accepted === false ? undefined : message.accepted;
    obj.invite_expires_at = message.inviteExpiresAt !== BigInt(0) ? message.inviteExpiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VaultSignerAminoMsg): VaultSigner {
    return VaultSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultSignerProtoMsg): VaultSigner {
    return VaultSigner.decode(message.value);
  },
  toProto(message: VaultSigner): Uint8Array {
    return VaultSigner.encode(message).finish();
  },
  toProtoMsg(message: VaultSigner): VaultSignerProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.VaultSigner",
      value: VaultSigner.encode(message).finish()
    };
  }
};