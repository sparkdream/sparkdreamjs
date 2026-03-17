//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { ProofDomain, ShieldExecMode, ShieldedOpRegistration, ShieldedOpRegistrationAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/shield/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.shield.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgShieldedExec is the single entry point for all anonymous operations.
 * @name MsgShieldedExec
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgShieldedExec
 */
export interface MsgShieldedExec {
  /**
   * Any account — does not need funds, identity is irrelevant
   */
  submitter: string;
  /**
   * The operation to execute, encoded as Any.
   * The inner message's signer field MUST be set to the shield module account address.
   * REQUIRED for IMMEDIATE mode, EMPTY for ENCRYPTED_BATCH mode.
   */
  innerMessage?: Any;
  /**
   * ZK proof bytes (PLONK over BN254).
   * REQUIRED for IMMEDIATE mode, EMPTY for ENCRYPTED_BATCH mode.
   */
  proof: Uint8Array;
  /**
   * 32-byte nullifier (prevents replay)
   */
  nullifier: Uint8Array;
  /**
   * 32-byte rate-limit nullifier: H(secret, "rate_limit", epoch)
   */
  rateLimitNullifier: Uint8Array;
  /**
   * Merkle root the proof was generated against
   */
  merkleRoot: Uint8Array;
  /**
   * Proof domain (trust tree)
   */
  proofDomain: ProofDomain;
  /**
   * Minimum trust level being proven (0 = any member)
   */
  minTrustLevel: number;
  /**
   * --- Execution mode selection ---
   */
  execMode: ShieldExecMode;
  /**
   * IBE-encrypted payload containing (inner_message + proof)
   * REQUIRED for ENCRYPTED_BATCH mode, EMPTY for IMMEDIATE mode
   */
  encryptedPayload: Uint8Array;
  /**
   * Target shield epoch for batch execution
   */
  targetEpoch: bigint;
}
export interface MsgShieldedExecProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgShieldedExec";
  value: Uint8Array;
}
/**
 * MsgShieldedExec is the single entry point for all anonymous operations.
 * @name MsgShieldedExecAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgShieldedExec
 */
export interface MsgShieldedExecAmino {
  /**
   * Any account — does not need funds, identity is irrelevant
   */
  submitter?: string;
  /**
   * The operation to execute, encoded as Any.
   * The inner message's signer field MUST be set to the shield module account address.
   * REQUIRED for IMMEDIATE mode, EMPTY for ENCRYPTED_BATCH mode.
   */
  inner_message?: AnyAmino;
  /**
   * ZK proof bytes (PLONK over BN254).
   * REQUIRED for IMMEDIATE mode, EMPTY for ENCRYPTED_BATCH mode.
   */
  proof?: string;
  /**
   * 32-byte nullifier (prevents replay)
   */
  nullifier?: string;
  /**
   * 32-byte rate-limit nullifier: H(secret, "rate_limit", epoch)
   */
  rate_limit_nullifier?: string;
  /**
   * Merkle root the proof was generated against
   */
  merkle_root?: string;
  /**
   * Proof domain (trust tree)
   */
  proof_domain?: ProofDomain;
  /**
   * Minimum trust level being proven (0 = any member)
   */
  min_trust_level?: number;
  /**
   * --- Execution mode selection ---
   */
  exec_mode?: ShieldExecMode;
  /**
   * IBE-encrypted payload containing (inner_message + proof)
   * REQUIRED for ENCRYPTED_BATCH mode, EMPTY for IMMEDIATE mode
   */
  encrypted_payload?: string;
  /**
   * Target shield epoch for batch execution
   */
  target_epoch?: string;
}
export interface MsgShieldedExecAminoMsg {
  type: "/sparkdream.shield.v1.MsgShieldedExec";
  value: MsgShieldedExecAmino;
}
/**
 * @name MsgShieldedExecResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgShieldedExecResponse
 */
export interface MsgShieldedExecResponse {
  /**
   * For IMMEDIATE mode: the response from the inner message execution
   */
  innerResponse?: Any;
  /**
   * For ENCRYPTED_BATCH mode: the pending operation ID for tracking
   */
  pendingOpId: bigint;
}
export interface MsgShieldedExecResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgShieldedExecResponse";
  value: Uint8Array;
}
/**
 * @name MsgShieldedExecResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgShieldedExecResponse
 */
export interface MsgShieldedExecResponseAmino {
  /**
   * For IMMEDIATE mode: the response from the inner message execution
   */
  inner_response?: AnyAmino;
  /**
   * For ENCRYPTED_BATCH mode: the pending operation ID for tracking
   */
  pending_op_id?: string;
}
export interface MsgShieldedExecResponseAminoMsg {
  type: "/sparkdream.shield.v1.MsgShieldedExecResponse";
  value: MsgShieldedExecResponseAmino;
}
/**
 * MsgTriggerDkg manually triggers a new DKG ceremony (governance-gated).
 * @name MsgTriggerDkg
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgTriggerDkg
 */
export interface MsgTriggerDkg {
  authority: string;
  thresholdNumerator: bigint;
  thresholdDenominator: bigint;
}
export interface MsgTriggerDkgProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgTriggerDkg";
  value: Uint8Array;
}
/**
 * MsgTriggerDkg manually triggers a new DKG ceremony (governance-gated).
 * @name MsgTriggerDkgAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgTriggerDkg
 */
export interface MsgTriggerDkgAmino {
  authority?: string;
  threshold_numerator?: string;
  threshold_denominator?: string;
}
export interface MsgTriggerDkgAminoMsg {
  type: "/sparkdream.shield.v1.MsgTriggerDkg";
  value: MsgTriggerDkgAmino;
}
/**
 * @name MsgTriggerDkgResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgTriggerDkgResponse
 */
export interface MsgTriggerDkgResponse {}
export interface MsgTriggerDkgResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgTriggerDkgResponse";
  value: Uint8Array;
}
/**
 * @name MsgTriggerDkgResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgTriggerDkgResponse
 */
export interface MsgTriggerDkgResponseAmino {}
export interface MsgTriggerDkgResponseAminoMsg {
  type: "/sparkdream.shield.v1.MsgTriggerDkgResponse";
  value: MsgTriggerDkgResponseAmino;
}
/**
 * MsgRegisterShieldedOp registers or updates a shielded operation (governance-gated).
 * @name MsgRegisterShieldedOp
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgRegisterShieldedOp
 */
export interface MsgRegisterShieldedOp {
  authority: string;
  registration: ShieldedOpRegistration;
}
export interface MsgRegisterShieldedOpProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOp";
  value: Uint8Array;
}
/**
 * MsgRegisterShieldedOp registers or updates a shielded operation (governance-gated).
 * @name MsgRegisterShieldedOpAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgRegisterShieldedOp
 */
export interface MsgRegisterShieldedOpAmino {
  authority?: string;
  registration?: ShieldedOpRegistrationAmino;
}
export interface MsgRegisterShieldedOpAminoMsg {
  type: "/sparkdream.shield.v1.MsgRegisterShieldedOp";
  value: MsgRegisterShieldedOpAmino;
}
/**
 * @name MsgRegisterShieldedOpResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgRegisterShieldedOpResponse
 */
export interface MsgRegisterShieldedOpResponse {}
export interface MsgRegisterShieldedOpResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOpResponse";
  value: Uint8Array;
}
/**
 * @name MsgRegisterShieldedOpResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgRegisterShieldedOpResponse
 */
export interface MsgRegisterShieldedOpResponseAmino {}
export interface MsgRegisterShieldedOpResponseAminoMsg {
  type: "/sparkdream.shield.v1.MsgRegisterShieldedOpResponse";
  value: MsgRegisterShieldedOpResponseAmino;
}
/**
 * MsgDeregisterShieldedOp fully removes a shielded operation registration (governance-gated).
 * @name MsgDeregisterShieldedOp
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgDeregisterShieldedOp
 */
export interface MsgDeregisterShieldedOp {
  authority: string;
  messageTypeUrl: string;
}
export interface MsgDeregisterShieldedOpProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOp";
  value: Uint8Array;
}
/**
 * MsgDeregisterShieldedOp fully removes a shielded operation registration (governance-gated).
 * @name MsgDeregisterShieldedOpAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgDeregisterShieldedOp
 */
export interface MsgDeregisterShieldedOpAmino {
  authority?: string;
  message_type_url?: string;
}
export interface MsgDeregisterShieldedOpAminoMsg {
  type: "/sparkdream.shield.v1.MsgDeregisterShieldedOp";
  value: MsgDeregisterShieldedOpAmino;
}
/**
 * @name MsgDeregisterShieldedOpResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgDeregisterShieldedOpResponse
 */
export interface MsgDeregisterShieldedOpResponse {}
export interface MsgDeregisterShieldedOpResponseProtoMsg {
  typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOpResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeregisterShieldedOpResponseAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgDeregisterShieldedOpResponse
 */
export interface MsgDeregisterShieldedOpResponseAmino {}
export interface MsgDeregisterShieldedOpResponseAminoMsg {
  type: "/sparkdream.shield.v1.MsgDeregisterShieldedOpResponse";
  value: MsgDeregisterShieldedOpResponseAmino;
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
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.shield.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/shield/MsgUpdateParams",
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
      type: "sparkdream/x/shield/MsgUpdateParams",
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
      typeUrl: "/sparkdream.shield.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.shield.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.shield.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgShieldedExec(): MsgShieldedExec {
  return {
    submitter: "",
    innerMessage: undefined,
    proof: new Uint8Array(),
    nullifier: new Uint8Array(),
    rateLimitNullifier: new Uint8Array(),
    merkleRoot: new Uint8Array(),
    proofDomain: 0,
    minTrustLevel: 0,
    execMode: 0,
    encryptedPayload: new Uint8Array(),
    targetEpoch: BigInt(0)
  };
}
/**
 * MsgShieldedExec is the single entry point for all anonymous operations.
 * @name MsgShieldedExec
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgShieldedExec
 */
export const MsgShieldedExec = {
  typeUrl: "/sparkdream.shield.v1.MsgShieldedExec",
  encode(message: MsgShieldedExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.innerMessage !== undefined) {
      Any.encode(message.innerMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(34).bytes(message.nullifier);
    }
    if (message.rateLimitNullifier.length !== 0) {
      writer.uint32(42).bytes(message.rateLimitNullifier);
    }
    if (message.merkleRoot.length !== 0) {
      writer.uint32(50).bytes(message.merkleRoot);
    }
    if (message.proofDomain !== 0) {
      writer.uint32(56).int32(message.proofDomain);
    }
    if (message.minTrustLevel !== 0) {
      writer.uint32(64).uint32(message.minTrustLevel);
    }
    if (message.execMode !== 0) {
      writer.uint32(72).int32(message.execMode);
    }
    if (message.encryptedPayload.length !== 0) {
      writer.uint32(82).bytes(message.encryptedPayload);
    }
    if (message.targetEpoch !== BigInt(0)) {
      writer.uint32(88).uint64(message.targetEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgShieldedExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShieldedExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.innerMessage = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.nullifier = reader.bytes();
          break;
        case 5:
          message.rateLimitNullifier = reader.bytes();
          break;
        case 6:
          message.merkleRoot = reader.bytes();
          break;
        case 7:
          message.proofDomain = reader.int32() as any;
          break;
        case 8:
          message.minTrustLevel = reader.uint32();
          break;
        case 9:
          message.execMode = reader.int32() as any;
          break;
        case 10:
          message.encryptedPayload = reader.bytes();
          break;
        case 11:
          message.targetEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgShieldedExec>): MsgShieldedExec {
    const message = createBaseMsgShieldedExec();
    message.submitter = object.submitter ?? "";
    message.innerMessage = object.innerMessage !== undefined && object.innerMessage !== null ? Any.fromPartial(object.innerMessage) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.nullifier = object.nullifier ?? new Uint8Array();
    message.rateLimitNullifier = object.rateLimitNullifier ?? new Uint8Array();
    message.merkleRoot = object.merkleRoot ?? new Uint8Array();
    message.proofDomain = object.proofDomain ?? 0;
    message.minTrustLevel = object.minTrustLevel ?? 0;
    message.execMode = object.execMode ?? 0;
    message.encryptedPayload = object.encryptedPayload ?? new Uint8Array();
    message.targetEpoch = object.targetEpoch !== undefined && object.targetEpoch !== null ? BigInt(object.targetEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgShieldedExecAmino): MsgShieldedExec {
    const message = createBaseMsgShieldedExec();
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    }
    if (object.inner_message !== undefined && object.inner_message !== null) {
      message.innerMessage = Any.fromAmino(object.inner_message);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = bytesFromBase64(object.nullifier);
    }
    if (object.rate_limit_nullifier !== undefined && object.rate_limit_nullifier !== null) {
      message.rateLimitNullifier = bytesFromBase64(object.rate_limit_nullifier);
    }
    if (object.merkle_root !== undefined && object.merkle_root !== null) {
      message.merkleRoot = bytesFromBase64(object.merkle_root);
    }
    if (object.proof_domain !== undefined && object.proof_domain !== null) {
      message.proofDomain = object.proof_domain;
    }
    if (object.min_trust_level !== undefined && object.min_trust_level !== null) {
      message.minTrustLevel = object.min_trust_level;
    }
    if (object.exec_mode !== undefined && object.exec_mode !== null) {
      message.execMode = object.exec_mode;
    }
    if (object.encrypted_payload !== undefined && object.encrypted_payload !== null) {
      message.encryptedPayload = bytesFromBase64(object.encrypted_payload);
    }
    if (object.target_epoch !== undefined && object.target_epoch !== null) {
      message.targetEpoch = BigInt(object.target_epoch);
    }
    return message;
  },
  toAmino(message: MsgShieldedExec): MsgShieldedExecAmino {
    const obj: any = {};
    obj.submitter = message.submitter === "" ? undefined : message.submitter;
    obj.inner_message = message.innerMessage ? Any.toAmino(message.innerMessage) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.nullifier = message.nullifier ? base64FromBytes(message.nullifier) : undefined;
    obj.rate_limit_nullifier = message.rateLimitNullifier ? base64FromBytes(message.rateLimitNullifier) : undefined;
    obj.merkle_root = message.merkleRoot ? base64FromBytes(message.merkleRoot) : undefined;
    obj.proof_domain = message.proofDomain === 0 ? undefined : message.proofDomain;
    obj.min_trust_level = message.minTrustLevel === 0 ? undefined : message.minTrustLevel;
    obj.exec_mode = message.execMode === 0 ? undefined : message.execMode;
    obj.encrypted_payload = message.encryptedPayload ? base64FromBytes(message.encryptedPayload) : undefined;
    obj.target_epoch = message.targetEpoch !== BigInt(0) ? message.targetEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgShieldedExecAminoMsg): MsgShieldedExec {
    return MsgShieldedExec.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgShieldedExecProtoMsg): MsgShieldedExec {
    return MsgShieldedExec.decode(message.value);
  },
  toProto(message: MsgShieldedExec): Uint8Array {
    return MsgShieldedExec.encode(message).finish();
  },
  toProtoMsg(message: MsgShieldedExec): MsgShieldedExecProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgShieldedExec",
      value: MsgShieldedExec.encode(message).finish()
    };
  }
};
function createBaseMsgShieldedExecResponse(): MsgShieldedExecResponse {
  return {
    innerResponse: undefined,
    pendingOpId: BigInt(0)
  };
}
/**
 * @name MsgShieldedExecResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgShieldedExecResponse
 */
export const MsgShieldedExecResponse = {
  typeUrl: "/sparkdream.shield.v1.MsgShieldedExecResponse",
  encode(message: MsgShieldedExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.innerResponse !== undefined) {
      Any.encode(message.innerResponse, writer.uint32(10).fork()).ldelim();
    }
    if (message.pendingOpId !== BigInt(0)) {
      writer.uint32(16).uint64(message.pendingOpId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgShieldedExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShieldedExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.innerResponse = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.pendingOpId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgShieldedExecResponse>): MsgShieldedExecResponse {
    const message = createBaseMsgShieldedExecResponse();
    message.innerResponse = object.innerResponse !== undefined && object.innerResponse !== null ? Any.fromPartial(object.innerResponse) : undefined;
    message.pendingOpId = object.pendingOpId !== undefined && object.pendingOpId !== null ? BigInt(object.pendingOpId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgShieldedExecResponseAmino): MsgShieldedExecResponse {
    const message = createBaseMsgShieldedExecResponse();
    if (object.inner_response !== undefined && object.inner_response !== null) {
      message.innerResponse = Any.fromAmino(object.inner_response);
    }
    if (object.pending_op_id !== undefined && object.pending_op_id !== null) {
      message.pendingOpId = BigInt(object.pending_op_id);
    }
    return message;
  },
  toAmino(message: MsgShieldedExecResponse): MsgShieldedExecResponseAmino {
    const obj: any = {};
    obj.inner_response = message.innerResponse ? Any.toAmino(message.innerResponse) : undefined;
    obj.pending_op_id = message.pendingOpId !== BigInt(0) ? message.pendingOpId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgShieldedExecResponseAminoMsg): MsgShieldedExecResponse {
    return MsgShieldedExecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgShieldedExecResponseProtoMsg): MsgShieldedExecResponse {
    return MsgShieldedExecResponse.decode(message.value);
  },
  toProto(message: MsgShieldedExecResponse): Uint8Array {
    return MsgShieldedExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgShieldedExecResponse): MsgShieldedExecResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgShieldedExecResponse",
      value: MsgShieldedExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTriggerDkg(): MsgTriggerDkg {
  return {
    authority: "",
    thresholdNumerator: BigInt(0),
    thresholdDenominator: BigInt(0)
  };
}
/**
 * MsgTriggerDkg manually triggers a new DKG ceremony (governance-gated).
 * @name MsgTriggerDkg
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgTriggerDkg
 */
export const MsgTriggerDkg = {
  typeUrl: "/sparkdream.shield.v1.MsgTriggerDkg",
  encode(message: MsgTriggerDkg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.thresholdNumerator !== BigInt(0)) {
      writer.uint32(16).uint64(message.thresholdNumerator);
    }
    if (message.thresholdDenominator !== BigInt(0)) {
      writer.uint32(24).uint64(message.thresholdDenominator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTriggerDkg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTriggerDkg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.thresholdNumerator = reader.uint64();
          break;
        case 3:
          message.thresholdDenominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTriggerDkg>): MsgTriggerDkg {
    const message = createBaseMsgTriggerDkg();
    message.authority = object.authority ?? "";
    message.thresholdNumerator = object.thresholdNumerator !== undefined && object.thresholdNumerator !== null ? BigInt(object.thresholdNumerator.toString()) : BigInt(0);
    message.thresholdDenominator = object.thresholdDenominator !== undefined && object.thresholdDenominator !== null ? BigInt(object.thresholdDenominator.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgTriggerDkgAmino): MsgTriggerDkg {
    const message = createBaseMsgTriggerDkg();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.threshold_numerator !== undefined && object.threshold_numerator !== null) {
      message.thresholdNumerator = BigInt(object.threshold_numerator);
    }
    if (object.threshold_denominator !== undefined && object.threshold_denominator !== null) {
      message.thresholdDenominator = BigInt(object.threshold_denominator);
    }
    return message;
  },
  toAmino(message: MsgTriggerDkg): MsgTriggerDkgAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.threshold_numerator = message.thresholdNumerator !== BigInt(0) ? message.thresholdNumerator?.toString() : undefined;
    obj.threshold_denominator = message.thresholdDenominator !== BigInt(0) ? message.thresholdDenominator?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTriggerDkgAminoMsg): MsgTriggerDkg {
    return MsgTriggerDkg.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTriggerDkgProtoMsg): MsgTriggerDkg {
    return MsgTriggerDkg.decode(message.value);
  },
  toProto(message: MsgTriggerDkg): Uint8Array {
    return MsgTriggerDkg.encode(message).finish();
  },
  toProtoMsg(message: MsgTriggerDkg): MsgTriggerDkgProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgTriggerDkg",
      value: MsgTriggerDkg.encode(message).finish()
    };
  }
};
function createBaseMsgTriggerDkgResponse(): MsgTriggerDkgResponse {
  return {};
}
/**
 * @name MsgTriggerDkgResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgTriggerDkgResponse
 */
export const MsgTriggerDkgResponse = {
  typeUrl: "/sparkdream.shield.v1.MsgTriggerDkgResponse",
  encode(_: MsgTriggerDkgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTriggerDkgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTriggerDkgResponse();
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
  fromPartial(_: DeepPartial<MsgTriggerDkgResponse>): MsgTriggerDkgResponse {
    const message = createBaseMsgTriggerDkgResponse();
    return message;
  },
  fromAmino(_: MsgTriggerDkgResponseAmino): MsgTriggerDkgResponse {
    const message = createBaseMsgTriggerDkgResponse();
    return message;
  },
  toAmino(_: MsgTriggerDkgResponse): MsgTriggerDkgResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTriggerDkgResponseAminoMsg): MsgTriggerDkgResponse {
    return MsgTriggerDkgResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTriggerDkgResponseProtoMsg): MsgTriggerDkgResponse {
    return MsgTriggerDkgResponse.decode(message.value);
  },
  toProto(message: MsgTriggerDkgResponse): Uint8Array {
    return MsgTriggerDkgResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTriggerDkgResponse): MsgTriggerDkgResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgTriggerDkgResponse",
      value: MsgTriggerDkgResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterShieldedOp(): MsgRegisterShieldedOp {
  return {
    authority: "",
    registration: ShieldedOpRegistration.fromPartial({})
  };
}
/**
 * MsgRegisterShieldedOp registers or updates a shielded operation (governance-gated).
 * @name MsgRegisterShieldedOp
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgRegisterShieldedOp
 */
export const MsgRegisterShieldedOp = {
  typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOp",
  encode(message: MsgRegisterShieldedOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.registration !== undefined) {
      ShieldedOpRegistration.encode(message.registration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterShieldedOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterShieldedOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.registration = ShieldedOpRegistration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterShieldedOp>): MsgRegisterShieldedOp {
    const message = createBaseMsgRegisterShieldedOp();
    message.authority = object.authority ?? "";
    message.registration = object.registration !== undefined && object.registration !== null ? ShieldedOpRegistration.fromPartial(object.registration) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterShieldedOpAmino): MsgRegisterShieldedOp {
    const message = createBaseMsgRegisterShieldedOp();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = ShieldedOpRegistration.fromAmino(object.registration);
    }
    return message;
  },
  toAmino(message: MsgRegisterShieldedOp): MsgRegisterShieldedOpAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.registration = message.registration ? ShieldedOpRegistration.toAmino(message.registration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterShieldedOpAminoMsg): MsgRegisterShieldedOp {
    return MsgRegisterShieldedOp.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterShieldedOpProtoMsg): MsgRegisterShieldedOp {
    return MsgRegisterShieldedOp.decode(message.value);
  },
  toProto(message: MsgRegisterShieldedOp): Uint8Array {
    return MsgRegisterShieldedOp.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterShieldedOp): MsgRegisterShieldedOpProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOp",
      value: MsgRegisterShieldedOp.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterShieldedOpResponse(): MsgRegisterShieldedOpResponse {
  return {};
}
/**
 * @name MsgRegisterShieldedOpResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgRegisterShieldedOpResponse
 */
export const MsgRegisterShieldedOpResponse = {
  typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOpResponse",
  encode(_: MsgRegisterShieldedOpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterShieldedOpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterShieldedOpResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterShieldedOpResponse>): MsgRegisterShieldedOpResponse {
    const message = createBaseMsgRegisterShieldedOpResponse();
    return message;
  },
  fromAmino(_: MsgRegisterShieldedOpResponseAmino): MsgRegisterShieldedOpResponse {
    const message = createBaseMsgRegisterShieldedOpResponse();
    return message;
  },
  toAmino(_: MsgRegisterShieldedOpResponse): MsgRegisterShieldedOpResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterShieldedOpResponseAminoMsg): MsgRegisterShieldedOpResponse {
    return MsgRegisterShieldedOpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterShieldedOpResponseProtoMsg): MsgRegisterShieldedOpResponse {
    return MsgRegisterShieldedOpResponse.decode(message.value);
  },
  toProto(message: MsgRegisterShieldedOpResponse): Uint8Array {
    return MsgRegisterShieldedOpResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterShieldedOpResponse): MsgRegisterShieldedOpResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOpResponse",
      value: MsgRegisterShieldedOpResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeregisterShieldedOp(): MsgDeregisterShieldedOp {
  return {
    authority: "",
    messageTypeUrl: ""
  };
}
/**
 * MsgDeregisterShieldedOp fully removes a shielded operation registration (governance-gated).
 * @name MsgDeregisterShieldedOp
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgDeregisterShieldedOp
 */
export const MsgDeregisterShieldedOp = {
  typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOp",
  encode(message: MsgDeregisterShieldedOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.messageTypeUrl !== "") {
      writer.uint32(18).string(message.messageTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeregisterShieldedOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterShieldedOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.messageTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeregisterShieldedOp>): MsgDeregisterShieldedOp {
    const message = createBaseMsgDeregisterShieldedOp();
    message.authority = object.authority ?? "";
    message.messageTypeUrl = object.messageTypeUrl ?? "";
    return message;
  },
  fromAmino(object: MsgDeregisterShieldedOpAmino): MsgDeregisterShieldedOp {
    const message = createBaseMsgDeregisterShieldedOp();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.message_type_url !== undefined && object.message_type_url !== null) {
      message.messageTypeUrl = object.message_type_url;
    }
    return message;
  },
  toAmino(message: MsgDeregisterShieldedOp): MsgDeregisterShieldedOpAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.message_type_url = message.messageTypeUrl === "" ? undefined : message.messageTypeUrl;
    return obj;
  },
  fromAminoMsg(object: MsgDeregisterShieldedOpAminoMsg): MsgDeregisterShieldedOp {
    return MsgDeregisterShieldedOp.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeregisterShieldedOpProtoMsg): MsgDeregisterShieldedOp {
    return MsgDeregisterShieldedOp.decode(message.value);
  },
  toProto(message: MsgDeregisterShieldedOp): Uint8Array {
    return MsgDeregisterShieldedOp.encode(message).finish();
  },
  toProtoMsg(message: MsgDeregisterShieldedOp): MsgDeregisterShieldedOpProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOp",
      value: MsgDeregisterShieldedOp.encode(message).finish()
    };
  }
};
function createBaseMsgDeregisterShieldedOpResponse(): MsgDeregisterShieldedOpResponse {
  return {};
}
/**
 * @name MsgDeregisterShieldedOpResponse
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.MsgDeregisterShieldedOpResponse
 */
export const MsgDeregisterShieldedOpResponse = {
  typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOpResponse",
  encode(_: MsgDeregisterShieldedOpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeregisterShieldedOpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterShieldedOpResponse();
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
  fromPartial(_: DeepPartial<MsgDeregisterShieldedOpResponse>): MsgDeregisterShieldedOpResponse {
    const message = createBaseMsgDeregisterShieldedOpResponse();
    return message;
  },
  fromAmino(_: MsgDeregisterShieldedOpResponseAmino): MsgDeregisterShieldedOpResponse {
    const message = createBaseMsgDeregisterShieldedOpResponse();
    return message;
  },
  toAmino(_: MsgDeregisterShieldedOpResponse): MsgDeregisterShieldedOpResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeregisterShieldedOpResponseAminoMsg): MsgDeregisterShieldedOpResponse {
    return MsgDeregisterShieldedOpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeregisterShieldedOpResponseProtoMsg): MsgDeregisterShieldedOpResponse {
    return MsgDeregisterShieldedOpResponse.decode(message.value);
  },
  toProto(message: MsgDeregisterShieldedOpResponse): Uint8Array {
    return MsgDeregisterShieldedOpResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeregisterShieldedOpResponse): MsgDeregisterShieldedOpResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOpResponse",
      value: MsgDeregisterShieldedOpResponse.encode(message).finish()
    };
  }
};