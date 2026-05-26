//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Module is the config object for the guardian module.
 * 
 * guardian is a generic authority-gating module. It owns the authority
 * addresses for one or more downstream modules (bank, mint, staking by
 * default) and exposes a single MsgExec wrapper that gov can call to
 * invoke msg-type-specific proxies. Per-msg-type filters reject changes
 * to fields the chain has decided are immutable (e.g., mint inflation
 * parameters, bank native-denom Symbol/Display).
 * 
 * See docs/x-identity-spec.md §14.6 for the identity-protection use
 * case, and the implementation-decisions doc for the broader rationale.
 * @name Module
 * @package sparkdream.guardian.module.v1
 * @see proto type: sparkdream.guardian.module.v1.Module
 */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/sparkdream.guardian.module.v1.Module";
  value: Uint8Array;
}
/**
 * Module is the config object for the guardian module.
 * 
 * guardian is a generic authority-gating module. It owns the authority
 * addresses for one or more downstream modules (bank, mint, staking by
 * default) and exposes a single MsgExec wrapper that gov can call to
 * invoke msg-type-specific proxies. Per-msg-type filters reject changes
 * to fields the chain has decided are immutable (e.g., mint inflation
 * parameters, bank native-denom Symbol/Display).
 * 
 * See docs/x-identity-spec.md §14.6 for the identity-protection use
 * case, and the implementation-decisions doc for the broader rationale.
 * @name ModuleAmino
 * @package sparkdream.guardian.module.v1
 * @see proto type: sparkdream.guardian.module.v1.Module
 */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "/sparkdream.guardian.module.v1.Module";
  value: ModuleAmino;
}
function createBaseModule(): Module {
  return {};
}
/**
 * Module is the config object for the guardian module.
 * 
 * guardian is a generic authority-gating module. It owns the authority
 * addresses for one or more downstream modules (bank, mint, staking by
 * default) and exposes a single MsgExec wrapper that gov can call to
 * invoke msg-type-specific proxies. Per-msg-type filters reject changes
 * to fields the chain has decided are immutable (e.g., mint inflation
 * parameters, bank native-denom Symbol/Display).
 * 
 * See docs/x-identity-spec.md §14.6 for the identity-protection use
 * case, and the implementation-decisions doc for the broader rationale.
 * @name Module
 * @package sparkdream.guardian.module.v1
 * @see proto type: sparkdream.guardian.module.v1.Module
 */
export const Module = {
  typeUrl: "/sparkdream.guardian.module.v1.Module",
  encode(_: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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
  fromPartial(_: DeepPartial<Module>): Module {
    const message = createBaseModule();
    return message;
  },
  fromAmino(_: ModuleAmino): Module {
    const message = createBaseModule();
    return message;
  },
  toAmino(_: Module): ModuleAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/sparkdream.guardian.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};