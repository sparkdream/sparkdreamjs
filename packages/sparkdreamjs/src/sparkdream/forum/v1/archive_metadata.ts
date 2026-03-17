//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ArchiveMetadata defines the ArchiveMetadata message.
 * @name ArchiveMetadata
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ArchiveMetadata
 */
export interface ArchiveMetadata {
  rootId: bigint;
  archiveCount: bigint;
  firstArchivedAt: bigint;
  lastArchivedAt: bigint;
  hrOverrideRequired: boolean;
}
export interface ArchiveMetadataProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ArchiveMetadata";
  value: Uint8Array;
}
/**
 * ArchiveMetadata defines the ArchiveMetadata message.
 * @name ArchiveMetadataAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ArchiveMetadata
 */
export interface ArchiveMetadataAmino {
  root_id?: string;
  archive_count?: string;
  first_archived_at?: string;
  last_archived_at?: string;
  hr_override_required?: boolean;
}
export interface ArchiveMetadataAminoMsg {
  type: "/sparkdream.forum.v1.ArchiveMetadata";
  value: ArchiveMetadataAmino;
}
function createBaseArchiveMetadata(): ArchiveMetadata {
  return {
    rootId: BigInt(0),
    archiveCount: BigInt(0),
    firstArchivedAt: BigInt(0),
    lastArchivedAt: BigInt(0),
    hrOverrideRequired: false
  };
}
/**
 * ArchiveMetadata defines the ArchiveMetadata message.
 * @name ArchiveMetadata
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ArchiveMetadata
 */
export const ArchiveMetadata = {
  typeUrl: "/sparkdream.forum.v1.ArchiveMetadata",
  encode(message: ArchiveMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.archiveCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.archiveCount);
    }
    if (message.firstArchivedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.firstArchivedAt);
    }
    if (message.lastArchivedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.lastArchivedAt);
    }
    if (message.hrOverrideRequired === true) {
      writer.uint32(40).bool(message.hrOverrideRequired);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArchiveMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        case 2:
          message.archiveCount = reader.uint64();
          break;
        case 3:
          message.firstArchivedAt = reader.int64();
          break;
        case 4:
          message.lastArchivedAt = reader.int64();
          break;
        case 5:
          message.hrOverrideRequired = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ArchiveMetadata>): ArchiveMetadata {
    const message = createBaseArchiveMetadata();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.archiveCount = object.archiveCount !== undefined && object.archiveCount !== null ? BigInt(object.archiveCount.toString()) : BigInt(0);
    message.firstArchivedAt = object.firstArchivedAt !== undefined && object.firstArchivedAt !== null ? BigInt(object.firstArchivedAt.toString()) : BigInt(0);
    message.lastArchivedAt = object.lastArchivedAt !== undefined && object.lastArchivedAt !== null ? BigInt(object.lastArchivedAt.toString()) : BigInt(0);
    message.hrOverrideRequired = object.hrOverrideRequired ?? false;
    return message;
  },
  fromAmino(object: ArchiveMetadataAmino): ArchiveMetadata {
    const message = createBaseArchiveMetadata();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.archive_count !== undefined && object.archive_count !== null) {
      message.archiveCount = BigInt(object.archive_count);
    }
    if (object.first_archived_at !== undefined && object.first_archived_at !== null) {
      message.firstArchivedAt = BigInt(object.first_archived_at);
    }
    if (object.last_archived_at !== undefined && object.last_archived_at !== null) {
      message.lastArchivedAt = BigInt(object.last_archived_at);
    }
    if (object.hr_override_required !== undefined && object.hr_override_required !== null) {
      message.hrOverrideRequired = object.hr_override_required;
    }
    return message;
  },
  toAmino(message: ArchiveMetadata): ArchiveMetadataAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.archive_count = message.archiveCount !== BigInt(0) ? message.archiveCount?.toString() : undefined;
    obj.first_archived_at = message.firstArchivedAt !== BigInt(0) ? message.firstArchivedAt?.toString() : undefined;
    obj.last_archived_at = message.lastArchivedAt !== BigInt(0) ? message.lastArchivedAt?.toString() : undefined;
    obj.hr_override_required = message.hrOverrideRequired === false ? undefined : message.hrOverrideRequired;
    return obj;
  },
  fromAminoMsg(object: ArchiveMetadataAminoMsg): ArchiveMetadata {
    return ArchiveMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ArchiveMetadataProtoMsg): ArchiveMetadata {
    return ArchiveMetadata.decode(message.value);
  },
  toProto(message: ArchiveMetadata): Uint8Array {
    return ArchiveMetadata.encode(message).finish();
  },
  toProtoMsg(message: ArchiveMetadata): ArchiveMetadataProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ArchiveMetadata",
      value: ArchiveMetadata.encode(message).finish()
    };
  }
};