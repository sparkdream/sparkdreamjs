//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Vault, VaultAmino } from "./vault";
import { VaultProposal, VaultProposalAmino } from "./vault_proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the vault module's genesis state.
 * @name GenesisState
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  vaultMap: Vault[];
  vaultProposalMap: VaultProposal[];
  /**
   * Sequence values (last ID handed out). Executed and expired proposals are
   * pruned after ProposalRetention, so the highest live ID can be below the
   * sequence; importing without these would hand out used IDs again.
   */
  vaultSeq: bigint;
  proposalSeq: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.vault.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the vault module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  vault_map?: VaultAmino[];
  vault_proposal_map?: VaultProposalAmino[];
  /**
   * Sequence values (last ID handed out). Executed and expired proposals are
   * pruned after ProposalRetention, so the highest live ID can be below the
   * sequence; importing without these would hand out used IDs again.
   */
  vault_seq?: string;
  proposal_seq?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.vault.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    vaultMap: [],
    vaultProposalMap: [],
    vaultSeq: BigInt(0),
    proposalSeq: BigInt(0)
  };
}
/**
 * GenesisState defines the vault module's genesis state.
 * @name GenesisState
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.vault.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vaultMap) {
      Vault.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vaultProposalMap) {
      VaultProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.vaultSeq !== BigInt(0)) {
      writer.uint32(32).uint64(message.vaultSeq);
    }
    if (message.proposalSeq !== BigInt(0)) {
      writer.uint32(40).uint64(message.proposalSeq);
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.vaultMap.push(Vault.decode(reader, reader.uint32()));
          break;
        case 3:
          message.vaultProposalMap.push(VaultProposal.decode(reader, reader.uint32()));
          break;
        case 4:
          message.vaultSeq = reader.uint64();
          break;
        case 5:
          message.proposalSeq = reader.uint64();
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.vaultMap = object.vaultMap?.map(e => Vault.fromPartial(e)) || [];
    message.vaultProposalMap = object.vaultProposalMap?.map(e => VaultProposal.fromPartial(e)) || [];
    message.vaultSeq = object.vaultSeq !== undefined && object.vaultSeq !== null ? BigInt(object.vaultSeq.toString()) : BigInt(0);
    message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.vaultMap = object.vault_map?.map(e => Vault.fromAmino(e)) || [];
    message.vaultProposalMap = object.vault_proposal_map?.map(e => VaultProposal.fromAmino(e)) || [];
    if (object.vault_seq !== undefined && object.vault_seq !== null) {
      message.vaultSeq = BigInt(object.vault_seq);
    }
    if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
      message.proposalSeq = BigInt(object.proposal_seq);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.vaultMap) {
      obj.vault_map = message.vaultMap.map(e => e ? Vault.toAmino(e) : undefined);
    } else {
      obj.vault_map = message.vaultMap;
    }
    if (message.vaultProposalMap) {
      obj.vault_proposal_map = message.vaultProposalMap.map(e => e ? VaultProposal.toAmino(e) : undefined);
    } else {
      obj.vault_proposal_map = message.vaultProposalMap;
    }
    obj.vault_seq = message.vaultSeq !== BigInt(0) ? message.vaultSeq?.toString() : undefined;
    obj.proposal_seq = message.proposalSeq !== BigInt(0) ? message.proposalSeq?.toString() : undefined;
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
      typeUrl: "/sparkdream.vault.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};