//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgExec is the universal guardian wrapper. Submitted by gov (or another
 * authorized account) to invoke a gated downstream msg through guardian's
 * filter chain.
 * @name MsgExec
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.MsgExec
 */
export interface MsgExec {
  /**
   * authority must equal the address gov uses for proposal execution
   * (or, more generally, the address configured as guardian's authority
   * at genesis).
   */
  authority: string;
  /**
   * inner is the target msg to route. Must be one of the allowlisted
   * msg types (see x/guardian/keeper for the registry). Inner's own
   * Authority field is overwritten by guardian's module address before
   * routing, so callers should leave it empty or it will be ignored.
   */
  inner?: Any | undefined;
}
export interface MsgExecProtoMsg {
  typeUrl: "/sparkdream.guardian.v1.MsgExec";
  value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "inner"> & {
  /**
   * inner is the target msg to route. Must be one of the allowlisted
   * msg types (see x/guardian/keeper for the registry). Inner's own
   * Authority field is overwritten by guardian's module address before
   * routing, so callers should leave it empty or it will be ignored.
   */
  inner?: AnyProtoMsg | undefined;
};
/**
 * MsgExec is the universal guardian wrapper. Submitted by gov (or another
 * authorized account) to invoke a gated downstream msg through guardian's
 * filter chain.
 * @name MsgExecAmino
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.MsgExec
 */
export interface MsgExecAmino {
  /**
   * authority must equal the address gov uses for proposal execution
   * (or, more generally, the address configured as guardian's authority
   * at genesis).
   */
  authority?: string;
  /**
   * inner is the target msg to route. Must be one of the allowlisted
   * msg types (see x/guardian/keeper for the registry). Inner's own
   * Authority field is overwritten by guardian's module address before
   * routing, so callers should leave it empty or it will be ignored.
   */
  inner?: AnyAmino;
}
export interface MsgExecAminoMsg {
  type: "sparkdream/x/guardian/MsgExec";
  value: MsgExecAmino;
}
/**
 * @name MsgExecResponse
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.MsgExecResponse
 */
export interface MsgExecResponse {
  /**
   * inner_response is the response from the routed inner msg, packed as Any.
   */
  innerResponse?: Any;
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/sparkdream.guardian.v1.MsgExecResponse";
  value: Uint8Array;
}
/**
 * @name MsgExecResponseAmino
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.MsgExecResponse
 */
export interface MsgExecResponseAmino {
  /**
   * inner_response is the response from the routed inner msg, packed as Any.
   */
  inner_response?: AnyAmino;
}
export interface MsgExecResponseAminoMsg {
  type: "/sparkdream.guardian.v1.MsgExecResponse";
  value: MsgExecResponseAmino;
}
function createBaseMsgExec(): MsgExec {
  return {
    authority: "",
    inner: undefined
  };
}
/**
 * MsgExec is the universal guardian wrapper. Submitted by gov (or another
 * authorized account) to invoke a gated downstream msg through guardian's
 * filter chain.
 * @name MsgExec
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.MsgExec
 */
export const MsgExec = {
  typeUrl: "/sparkdream.guardian.v1.MsgExec",
  aminoType: "sparkdream/x/guardian/MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.inner !== undefined) {
      Any.encode(message.inner as Any, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.inner = Cosmos_basev1beta1Msg_InterfaceDecoder(reader) as Any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.authority = object.authority ?? "";
    message.inner = object.inner !== undefined && object.inner !== null ? Any.fromPartial(object.inner) : undefined;
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.inner !== undefined && object.inner !== null) {
      message.inner = Cosmos_basev1beta1Msg_FromAmino(object.inner);
    }
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.inner = message.inner ? Cosmos_basev1beta1Msg_ToAmino(message.inner as Any) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "sparkdream/x/guardian/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/sparkdream.guardian.v1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    innerResponse: undefined
  };
}
/**
 * @name MsgExecResponse
 * @package sparkdream.guardian.v1
 * @see proto type: sparkdream.guardian.v1.MsgExecResponse
 */
export const MsgExecResponse = {
  typeUrl: "/sparkdream.guardian.v1.MsgExecResponse",
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.innerResponse !== undefined) {
      Any.encode(message.innerResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.innerResponse = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.innerResponse = object.innerResponse !== undefined && object.innerResponse !== null ? Any.fromPartial(object.innerResponse) : undefined;
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    if (object.inner_response !== undefined && object.inner_response !== null) {
      message.innerResponse = Any.fromAmino(object.inner_response);
    }
    return message;
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    obj.inner_response = message.innerResponse ? Any.toAmino(message.innerResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.guardian.v1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
export const Cosmos_basev1beta1Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_basev1beta1Msg_FromAmino = (content: AnyAmino): Any => {
  return Any.fromAmino(content);
};
export const Cosmos_basev1beta1Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};