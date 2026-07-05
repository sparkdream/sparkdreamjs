//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * PubKey is an ML-DSA-65 (FIPS 204) public key for handling CometBFT keys in
 * the SDK. It is intended for validator-key use and must not be used in
 * application-level account contexts because it does not implement ADR-28
 * address derivation. If you want to use ML-DSA-65 at the user/account level,
 * define a new proto message and follow ADR-28 for address construction.
 * @name PubKey
 * @package cosmos.crypto.mldsa65
 * @see proto type: cosmos.crypto.mldsa65.PubKey
 */
export interface PubKey {
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.mldsa65.PubKey";
  value: Uint8Array;
}
/**
 * PubKey is an ML-DSA-65 (FIPS 204) public key for handling CometBFT keys in
 * the SDK. It is intended for validator-key use and must not be used in
 * application-level account contexts because it does not implement ADR-28
 * address derivation. If you want to use ML-DSA-65 at the user/account level,
 * define a new proto message and follow ADR-28 for address construction.
 * @name PubKeyAmino
 * @package cosmos.crypto.mldsa65
 * @see proto type: cosmos.crypto.mldsa65.PubKey
 */
export interface PubKeyAmino {
  key?: string;
}
export interface PubKeyAminoMsg {
  type: "cometbft/PubKeyMlDsa65";
  value: PubKeyAmino;
}
/**
 * PrivKey defines an ML-DSA-65 private key (FIPS 204 packed form).
 * @name PrivKey
 * @package cosmos.crypto.mldsa65
 * @see proto type: cosmos.crypto.mldsa65.PrivKey
 */
export interface PrivKey {
  key: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/cosmos.crypto.mldsa65.PrivKey";
  value: Uint8Array;
}
/**
 * PrivKey defines an ML-DSA-65 private key (FIPS 204 packed form).
 * @name PrivKeyAmino
 * @package cosmos.crypto.mldsa65
 * @see proto type: cosmos.crypto.mldsa65.PrivKey
 */
export interface PrivKeyAmino {
  key?: string;
}
export interface PrivKeyAminoMsg {
  type: "cometbft/PrivKeyMlDsa65";
  value: PrivKeyAmino;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
/**
 * PubKey is an ML-DSA-65 (FIPS 204) public key for handling CometBFT keys in
 * the SDK. It is intended for validator-key use and must not be used in
 * application-level account contexts because it does not implement ADR-28
 * address derivation. If you want to use ML-DSA-65 at the user/account level,
 * define a new proto message and follow ADR-28 for address construction.
 * @name PubKey
 * @package cosmos.crypto.mldsa65
 * @see proto type: cosmos.crypto.mldsa65.PubKey
 */
export const PubKey = {
  typeUrl: "/cosmos.crypto.mldsa65.PubKey",
  aminoType: "cometbft/PubKeyMlDsa65",
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    const message = createBasePubKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PubKey): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PubKeyAminoMsg): PubKey {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message: PubKey): PubKeyAminoMsg {
    return {
      type: "cometbft/PubKeyMlDsa65",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.mldsa65.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
function createBasePrivKey(): PrivKey {
  return {
    key: new Uint8Array()
  };
}
/**
 * PrivKey defines an ML-DSA-65 private key (FIPS 204 packed form).
 * @name PrivKey
 * @package cosmos.crypto.mldsa65
 * @see proto type: cosmos.crypto.mldsa65.PrivKey
 */
export const PrivKey = {
  typeUrl: "/cosmos.crypto.mldsa65.PrivKey",
  aminoType: "cometbft/PrivKeyMlDsa65",
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    const message = createBasePrivKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PrivKey): PrivKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivKeyAminoMsg): PrivKey {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message: PrivKey): PrivKeyAminoMsg {
    return {
      type: "cometbft/PrivKeyMlDsa65",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.mldsa65.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};