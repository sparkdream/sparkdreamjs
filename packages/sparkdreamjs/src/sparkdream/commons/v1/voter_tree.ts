//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * VoterTree is the voter snapshot of a secret ballot: a Merkle tree (the
 * x/shield circuit's depth and hash) whose leaves are MiMC(zk_public_key, 0)
 * for each group member with a registered ZK key, in member-address order.
 * Its shape matches x/rep's trust_tree query, so a client proves against it
 * the same way (leaf metadata 0, min_trust_level 0).
 * @name VoterTree
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.VoterTree
 */
export interface VoterTree {
  root: Uint8Array;
  /**
   * depth is the tree depth (number of levels above the leaves).
   */
  depth: number;
  leaves: VoterTreeLeaf[];
  /**
   * member_count is the group's member count at the snapshot, members
   * without a ZK key included.
   */
  memberCount: bigint;
  /**
   * member_weight is the (equal) member weight at the snapshot.
   */
  memberWeight: string;
}
export interface VoterTreeProtoMsg {
  typeUrl: "/sparkdream.commons.v1.VoterTree";
  value: Uint8Array;
}
/**
 * VoterTree is the voter snapshot of a secret ballot: a Merkle tree (the
 * x/shield circuit's depth and hash) whose leaves are MiMC(zk_public_key, 0)
 * for each group member with a registered ZK key, in member-address order.
 * Its shape matches x/rep's trust_tree query, so a client proves against it
 * the same way (leaf metadata 0, min_trust_level 0).
 * @name VoterTreeAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.VoterTree
 */
export interface VoterTreeAmino {
  root?: string;
  /**
   * depth is the tree depth (number of levels above the leaves).
   */
  depth?: number;
  leaves?: VoterTreeLeafAmino[];
  /**
   * member_count is the group's member count at the snapshot, members
   * without a ZK key included.
   */
  member_count?: string;
  /**
   * member_weight is the (equal) member weight at the snapshot.
   */
  member_weight?: string;
}
export interface VoterTreeAminoMsg {
  type: "/sparkdream.commons.v1.VoterTree";
  value: VoterTreeAmino;
}
/**
 * VoterTreeLeaf is one occupied leaf slot.
 * @name VoterTreeLeaf
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.VoterTreeLeaf
 */
export interface VoterTreeLeaf {
  index: bigint;
  hash: Uint8Array;
}
export interface VoterTreeLeafProtoMsg {
  typeUrl: "/sparkdream.commons.v1.VoterTreeLeaf";
  value: Uint8Array;
}
/**
 * VoterTreeLeaf is one occupied leaf slot.
 * @name VoterTreeLeafAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.VoterTreeLeaf
 */
export interface VoterTreeLeafAmino {
  index?: string;
  hash?: string;
}
export interface VoterTreeLeafAminoMsg {
  type: "/sparkdream.commons.v1.VoterTreeLeaf";
  value: VoterTreeLeafAmino;
}
function createBaseVoterTree(): VoterTree {
  return {
    root: new Uint8Array(),
    depth: 0,
    leaves: [],
    memberCount: BigInt(0),
    memberWeight: ""
  };
}
/**
 * VoterTree is the voter snapshot of a secret ballot: a Merkle tree (the
 * x/shield circuit's depth and hash) whose leaves are MiMC(zk_public_key, 0)
 * for each group member with a registered ZK key, in member-address order.
 * Its shape matches x/rep's trust_tree query, so a client proves against it
 * the same way (leaf metadata 0, min_trust_level 0).
 * @name VoterTree
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.VoterTree
 */
export const VoterTree = {
  typeUrl: "/sparkdream.commons.v1.VoterTree",
  encode(message: VoterTree, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.root.length !== 0) {
      writer.uint32(10).bytes(message.root);
    }
    if (message.depth !== 0) {
      writer.uint32(16).uint32(message.depth);
    }
    for (const v of message.leaves) {
      VoterTreeLeaf.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.memberCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.memberCount);
    }
    if (message.memberWeight !== "") {
      writer.uint32(42).string(message.memberWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoterTree {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoterTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.root = reader.bytes();
          break;
        case 2:
          message.depth = reader.uint32();
          break;
        case 3:
          message.leaves.push(VoterTreeLeaf.decode(reader, reader.uint32()));
          break;
        case 4:
          message.memberCount = reader.uint64();
          break;
        case 5:
          message.memberWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VoterTree>): VoterTree {
    const message = createBaseVoterTree();
    message.root = object.root ?? new Uint8Array();
    message.depth = object.depth ?? 0;
    message.leaves = object.leaves?.map(e => VoterTreeLeaf.fromPartial(e)) || [];
    message.memberCount = object.memberCount !== undefined && object.memberCount !== null ? BigInt(object.memberCount.toString()) : BigInt(0);
    message.memberWeight = object.memberWeight ?? "";
    return message;
  },
  fromAmino(object: VoterTreeAmino): VoterTree {
    const message = createBaseVoterTree();
    if (object.root !== undefined && object.root !== null) {
      message.root = bytesFromBase64(object.root);
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    }
    message.leaves = object.leaves?.map(e => VoterTreeLeaf.fromAmino(e)) || [];
    if (object.member_count !== undefined && object.member_count !== null) {
      message.memberCount = BigInt(object.member_count);
    }
    if (object.member_weight !== undefined && object.member_weight !== null) {
      message.memberWeight = object.member_weight;
    }
    return message;
  },
  toAmino(message: VoterTree): VoterTreeAmino {
    const obj: any = {};
    obj.root = message.root ? base64FromBytes(message.root) : undefined;
    obj.depth = message.depth === 0 ? undefined : message.depth;
    if (message.leaves) {
      obj.leaves = message.leaves.map(e => e ? VoterTreeLeaf.toAmino(e) : undefined);
    } else {
      obj.leaves = message.leaves;
    }
    obj.member_count = message.memberCount !== BigInt(0) ? message.memberCount?.toString() : undefined;
    obj.member_weight = message.memberWeight === "" ? undefined : message.memberWeight;
    return obj;
  },
  fromAminoMsg(object: VoterTreeAminoMsg): VoterTree {
    return VoterTree.fromAmino(object.value);
  },
  fromProtoMsg(message: VoterTreeProtoMsg): VoterTree {
    return VoterTree.decode(message.value);
  },
  toProto(message: VoterTree): Uint8Array {
    return VoterTree.encode(message).finish();
  },
  toProtoMsg(message: VoterTree): VoterTreeProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.VoterTree",
      value: VoterTree.encode(message).finish()
    };
  }
};
function createBaseVoterTreeLeaf(): VoterTreeLeaf {
  return {
    index: BigInt(0),
    hash: new Uint8Array()
  };
}
/**
 * VoterTreeLeaf is one occupied leaf slot.
 * @name VoterTreeLeaf
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.VoterTreeLeaf
 */
export const VoterTreeLeaf = {
  typeUrl: "/sparkdream.commons.v1.VoterTreeLeaf",
  encode(message: VoterTreeLeaf, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoterTreeLeaf {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoterTreeLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VoterTreeLeaf>): VoterTreeLeaf {
    const message = createBaseVoterTreeLeaf();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: VoterTreeLeafAmino): VoterTreeLeaf {
    const message = createBaseVoterTreeLeaf();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: VoterTreeLeaf): VoterTreeLeafAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: VoterTreeLeafAminoMsg): VoterTreeLeaf {
    return VoterTreeLeaf.fromAmino(object.value);
  },
  fromProtoMsg(message: VoterTreeLeafProtoMsg): VoterTreeLeaf {
    return VoterTreeLeaf.decode(message.value);
  },
  toProto(message: VoterTreeLeaf): Uint8Array {
    return VoterTreeLeaf.encode(message).finish();
  },
  toProtoMsg(message: VoterTreeLeaf): VoterTreeLeafProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.VoterTreeLeaf",
      value: VoterTreeLeaf.encode(message).finish()
    };
  }
};