//@ts-nocheck
import { ChainIdentity, ChainIdentityAmino } from "./chain_identity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the identity module's genesis state.
 * @name GenesisState
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.GenesisState
 */
export interface GenesisState {
  /**
   * identity is the chain's immutable ChainIdentity, set at genesis.
   */
  identity: ChainIdentity;
  /**
   * allow_chain_id_mismatch bypasses the soft consistency check between
   * identity.chain_human_name and the consensus chain_id. Init-time only;
   * never persisted to state.
   */
  allowChainIdMismatch: boolean;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.identity.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the identity module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * identity is the chain's immutable ChainIdentity, set at genesis.
   */
  identity: ChainIdentityAmino;
  /**
   * allow_chain_id_mismatch bypasses the soft consistency check between
   * identity.chain_human_name and the consensus chain_id. Init-time only;
   * never persisted to state.
   */
  allow_chain_id_mismatch?: boolean;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.identity.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    identity: ChainIdentity.fromPartial({}),
    allowChainIdMismatch: false
  };
}
/**
 * GenesisState defines the identity module's genesis state.
 * @name GenesisState
 * @package sparkdream.identity.v1
 * @see proto type: sparkdream.identity.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.identity.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identity !== undefined) {
      ChainIdentity.encode(message.identity, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowChainIdMismatch === true) {
      writer.uint32(16).bool(message.allowChainIdMismatch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identity = ChainIdentity.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowChainIdMismatch = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identity = object.identity !== undefined && object.identity !== null ? ChainIdentity.fromPartial(object.identity) : undefined;
    message.allowChainIdMismatch = object.allowChainIdMismatch ?? false;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = ChainIdentity.fromAmino(object.identity);
    }
    if (object.allow_chain_id_mismatch !== undefined && object.allow_chain_id_mismatch !== null) {
      message.allowChainIdMismatch = object.allow_chain_id_mismatch;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.identity = message.identity ? ChainIdentity.toAmino(message.identity) : ChainIdentity.toAmino(ChainIdentity.fromPartial({}));
    obj.allow_chain_id_mismatch = message.allowChainIdMismatch === false ? undefined : message.allowChainIdMismatch;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.identity.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};