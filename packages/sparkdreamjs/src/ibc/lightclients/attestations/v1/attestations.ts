//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * ClientState defines an attestor-based light client that tracks the current
 * consensus state and if the client is frozen.
 * @name ClientState
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.ClientState
 */
export interface ClientState {
  /**
   * trusted attestor set (EOA addresses)
   */
  attestorAddresses: string[];
  /**
   * quorum threshold (minimum number of unique attestor signatures required)
   */
  minRequiredSigs: number;
  /**
   * highest height that has been trusted
   */
  latestHeight: bigint;
  /**
   * when true, all verification and updates MUST fail
   */
  isFrozen: boolean;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.attestations.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState defines an attestor-based light client that tracks the current
 * consensus state and if the client is frozen.
 * @name ClientStateAmino
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.ClientState
 */
export interface ClientStateAmino {
  /**
   * trusted attestor set (EOA addresses)
   */
  attestor_addresses?: string[];
  /**
   * quorum threshold (minimum number of unique attestor signatures required)
   */
  min_required_sigs?: number;
  /**
   * highest height that has been trusted
   */
  latest_height?: string;
  /**
   * when true, all verification and updates MUST fail
   */
  is_frozen?: boolean;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * ConsensusState defines an attestor consensus state. The timestamp of a
 * consensus state is stored per height.
 * @name ConsensusState
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.ConsensusState
 */
export interface ConsensusState {
  /**
   * trusted UNIX timestamp (nanoseconds) for the height
   */
  timestamp: bigint;
}
export interface ConsensusStateProtoMsg {
  typeUrl: "/ibc.lightclients.attestations.v1.ConsensusState";
  value: Uint8Array;
}
/**
 * ConsensusState defines an attestor consensus state. The timestamp of a
 * consensus state is stored per height.
 * @name ConsensusStateAmino
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.ConsensusState
 */
export interface ConsensusStateAmino {
  /**
   * trusted UNIX timestamp (nanoseconds) for the height
   */
  timestamp?: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * AttestationProof is used for client updates and membership verification.
 * All attestor signatures cover sha256(attestationData).
 * @name AttestationProof
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.AttestationProof
 */
export interface AttestationProof {
  /**
   * the attestation data that was signed (ABI-encoded StateAttestation or PacketAttestation)
   */
  attestationData: Uint8Array;
  /**
   * array of 65-byte ECDSA signatures (r||s||v)
   */
  signatures: Uint8Array[];
}
export interface AttestationProofProtoMsg {
  typeUrl: "/ibc.lightclients.attestations.v1.AttestationProof";
  value: Uint8Array;
}
/**
 * AttestationProof is used for client updates and membership verification.
 * All attestor signatures cover sha256(attestationData).
 * @name AttestationProofAmino
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.AttestationProof
 */
export interface AttestationProofAmino {
  /**
   * the attestation data that was signed (ABI-encoded StateAttestation or PacketAttestation)
   */
  attestation_data?: string;
  /**
   * array of 65-byte ECDSA signatures (r||s||v)
   */
  signatures?: string[];
}
export interface AttestationProofAminoMsg {
  type: "cosmos-sdk/AttestationProof";
  value: AttestationProofAmino;
}
function createBaseClientState(): ClientState {
  return {
    attestorAddresses: [],
    minRequiredSigs: 0,
    latestHeight: BigInt(0),
    isFrozen: false
  };
}
/**
 * ClientState defines an attestor-based light client that tracks the current
 * consensus state and if the client is frozen.
 * @name ClientState
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.ClientState
 */
export const ClientState = {
  typeUrl: "/ibc.lightclients.attestations.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestorAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.minRequiredSigs !== 0) {
      writer.uint32(16).uint32(message.minRequiredSigs);
    }
    if (message.latestHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.latestHeight);
    }
    if (message.isFrozen === true) {
      writer.uint32(32).bool(message.isFrozen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestorAddresses.push(reader.string());
          break;
        case 2:
          message.minRequiredSigs = reader.uint32();
          break;
        case 3:
          message.latestHeight = reader.uint64();
          break;
        case 4:
          message.isFrozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.attestorAddresses = object.attestorAddresses?.map(e => e) || [];
    message.minRequiredSigs = object.minRequiredSigs ?? 0;
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? BigInt(object.latestHeight.toString()) : BigInt(0);
    message.isFrozen = object.isFrozen ?? false;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    message.attestorAddresses = object.attestor_addresses?.map(e => e) || [];
    if (object.min_required_sigs !== undefined && object.min_required_sigs !== null) {
      message.minRequiredSigs = object.min_required_sigs;
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = BigInt(object.latest_height);
    }
    if (object.is_frozen !== undefined && object.is_frozen !== null) {
      message.isFrozen = object.is_frozen;
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    if (message.attestorAddresses) {
      obj.attestor_addresses = message.attestorAddresses.map(e => e);
    } else {
      obj.attestor_addresses = message.attestorAddresses;
    }
    obj.min_required_sigs = message.minRequiredSigs === 0 ? undefined : message.minRequiredSigs;
    obj.latest_height = message.latestHeight !== BigInt(0) ? message.latestHeight?.toString() : undefined;
    obj.is_frozen = message.isFrozen === false ? undefined : message.isFrozen;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.attestations.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: BigInt(0)
  };
}
/**
 * ConsensusState defines an attestor consensus state. The timestamp of a
 * consensus state is stored per height.
 * @name ConsensusState
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.ConsensusState
 */
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.attestations.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.attestations.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseAttestationProof(): AttestationProof {
  return {
    attestationData: new Uint8Array(),
    signatures: []
  };
}
/**
 * AttestationProof is used for client updates and membership verification.
 * All attestor signatures cover sha256(attestationData).
 * @name AttestationProof
 * @package ibc.lightclients.attestations.v1
 * @see proto type: ibc.lightclients.attestations.v1.AttestationProof
 */
export const AttestationProof = {
  typeUrl: "/ibc.lightclients.attestations.v1.AttestationProof",
  aminoType: "cosmos-sdk/AttestationProof",
  encode(message: AttestationProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestationData.length !== 0) {
      writer.uint32(10).bytes(message.attestationData);
    }
    for (const v of message.signatures) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttestationProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestationData = reader.bytes();
          break;
        case 2:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttestationProof>): AttestationProof {
    const message = createBaseAttestationProof();
    message.attestationData = object.attestationData ?? new Uint8Array();
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AttestationProofAmino): AttestationProof {
    const message = createBaseAttestationProof();
    if (object.attestation_data !== undefined && object.attestation_data !== null) {
      message.attestationData = bytesFromBase64(object.attestation_data);
    }
    message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: AttestationProof): AttestationProofAmino {
    const obj: any = {};
    obj.attestation_data = message.attestationData ? base64FromBytes(message.attestationData) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: AttestationProofAminoMsg): AttestationProof {
    return AttestationProof.fromAmino(object.value);
  },
  toAminoMsg(message: AttestationProof): AttestationProofAminoMsg {
    return {
      type: "cosmos-sdk/AttestationProof",
      value: AttestationProof.toAmino(message)
    };
  },
  fromProtoMsg(message: AttestationProofProtoMsg): AttestationProof {
    return AttestationProof.decode(message.value);
  },
  toProto(message: AttestationProof): Uint8Array {
    return AttestationProof.encode(message).finish();
  },
  toProtoMsg(message: AttestationProof): AttestationProofProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.attestations.v1.AttestationProof",
      value: AttestationProof.encode(message).finish()
    };
  }
};