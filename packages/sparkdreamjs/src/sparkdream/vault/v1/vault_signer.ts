//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * VaultSigner is one weighted signer of a vault. The address is personal (never
 * a vault, module account, group policy or reserved address); a native multisig
 * address is allowed.
 * @name VaultSigner
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultSigner
 */
export interface VaultSigner {
  address: string;
  weight: bigint;
}
export interface VaultSignerProtoMsg {
  typeUrl: "/sparkdream.vault.v1.VaultSigner";
  value: Uint8Array;
}
/**
 * VaultSigner is one weighted signer of a vault. The address is personal (never
 * a vault, module account, group policy or reserved address); a native multisig
 * address is allowed.
 * @name VaultSignerAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.VaultSigner
 */
export interface VaultSignerAmino {
  address?: string;
  weight?: string;
}
export interface VaultSignerAminoMsg {
  type: "/sparkdream.vault.v1.VaultSigner";
  value: VaultSignerAmino;
}
function createBaseVaultSigner(): VaultSigner {
  return {
    address: "",
    weight: BigInt(0)
  };
}
/**
 * VaultSigner is one weighted signer of a vault. The address is personal (never
 * a vault, module account, group policy or reserved address); a native multisig
 * address is allowed.
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
    return message;
  },
  toAmino(message: VaultSigner): VaultSignerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight !== BigInt(0) ? message.weight?.toString() : undefined;
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