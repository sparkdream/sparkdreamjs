//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * Checkpoint is an operator's latest progress claim for its off-chain work
 * under one service type (MsgSubmitCheckpoint). Service-agnostic: for
 * content scanners `height` is the block height scanned up to and `root` the
 * merkle root of the operator's signed verdict feed up to that point
 * (docs/content-scanning.md §8.2). One record per (service_type, operator);
 * each submission replaces the previous one and must advance `height`.
 * @name Checkpoint
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Checkpoint
 */
export interface Checkpoint {
  operator: string;
  serviceType: string;
  /**
   * height is how far the operator's work has progressed, in block height.
   * Strictly increasing per operator; never above the block it lands in.
   */
  height: bigint;
  /**
   * root commits to the operator's off-chain output up to `height`
   * (32 bytes). Makes the output tamper-evident: a later feed that does not
   * reproduce an earlier root has been rewritten.
   */
  root: Uint8Array;
  /**
   * submitted_at is the block height the checkpoint landed in.
   */
  submittedAt: bigint;
}
export interface CheckpointProtoMsg {
  typeUrl: "/sparkdream.service.v1.Checkpoint";
  value: Uint8Array;
}
/**
 * Checkpoint is an operator's latest progress claim for its off-chain work
 * under one service type (MsgSubmitCheckpoint). Service-agnostic: for
 * content scanners `height` is the block height scanned up to and `root` the
 * merkle root of the operator's signed verdict feed up to that point
 * (docs/content-scanning.md §8.2). One record per (service_type, operator);
 * each submission replaces the previous one and must advance `height`.
 * @name CheckpointAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Checkpoint
 */
export interface CheckpointAmino {
  operator?: string;
  service_type?: string;
  /**
   * height is how far the operator's work has progressed, in block height.
   * Strictly increasing per operator; never above the block it lands in.
   */
  height?: string;
  /**
   * root commits to the operator's off-chain output up to `height`
   * (32 bytes). Makes the output tamper-evident: a later feed that does not
   * reproduce an earlier root has been rewritten.
   */
  root?: string;
  /**
   * submitted_at is the block height the checkpoint landed in.
   */
  submitted_at?: string;
}
export interface CheckpointAminoMsg {
  type: "/sparkdream.service.v1.Checkpoint";
  value: CheckpointAmino;
}
function createBaseCheckpoint(): Checkpoint {
  return {
    operator: "",
    serviceType: "",
    height: BigInt(0),
    root: new Uint8Array(),
    submittedAt: BigInt(0)
  };
}
/**
 * Checkpoint is an operator's latest progress claim for its off-chain work
 * under one service type (MsgSubmitCheckpoint). Service-agnostic: for
 * content scanners `height` is the block height scanned up to and `root` the
 * merkle root of the operator's signed verdict feed up to that point
 * (docs/content-scanning.md §8.2). One record per (service_type, operator);
 * each submission replaces the previous one and must advance `height`.
 * @name Checkpoint
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Checkpoint
 */
export const Checkpoint = {
  typeUrl: "/sparkdream.service.v1.Checkpoint",
  encode(message: Checkpoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.root.length !== 0) {
      writer.uint32(34).bytes(message.root);
    }
    if (message.submittedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.submittedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Checkpoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.root = reader.bytes();
          break;
        case 5:
          message.submittedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Checkpoint>): Checkpoint {
    const message = createBaseCheckpoint();
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.root = object.root ?? new Uint8Array();
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? BigInt(object.submittedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CheckpointAmino): Checkpoint {
    const message = createBaseCheckpoint();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = bytesFromBase64(object.root);
    }
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = BigInt(object.submitted_at);
    }
    return message;
  },
  toAmino(message: Checkpoint): CheckpointAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.root = message.root ? base64FromBytes(message.root) : undefined;
    obj.submitted_at = message.submittedAt !== BigInt(0) ? message.submittedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CheckpointAminoMsg): Checkpoint {
    return Checkpoint.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckpointProtoMsg): Checkpoint {
    return Checkpoint.decode(message.value);
  },
  toProto(message: Checkpoint): Uint8Array {
    return Checkpoint.encode(message).finish();
  },
  toProtoMsg(message: Checkpoint): CheckpointProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.Checkpoint",
      value: Checkpoint.encode(message).finish()
    };
  }
};