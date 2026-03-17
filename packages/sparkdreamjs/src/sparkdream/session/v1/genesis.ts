//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Session, SessionAmino } from "./session";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the session module's genesis state.
 * @name GenesisState
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * Active sessions (typically empty at genesis).
   */
  sessions: Session[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.session.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the session module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * Active sessions (typically empty at genesis).
   */
  sessions?: SessionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.session.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    sessions: []
  };
}
/**
 * GenesisState defines the session module's genesis state.
 * @name GenesisState
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.session.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.sessions.push(Session.decode(reader, reader.uint32()));
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
    message.sessions = object.sessions?.map(e => Session.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.sessions = object.sessions?.map(e => Session.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.sessions) {
      obj.sessions = message.sessions.map(e => e ? Session.toAmino(e) : undefined);
    } else {
      obj.sessions = message.sessions;
    }
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
      typeUrl: "/sparkdream.session.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};