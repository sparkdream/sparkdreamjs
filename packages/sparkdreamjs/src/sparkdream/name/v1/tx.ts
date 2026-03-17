//@ts-nocheck
import { Params, ParamsAmino, NameOperationalParams, NameOperationalParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/name/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Commons Operations Committee member.
   */
  authority: string;
  /**
   * operational_params defines the operational parameters to update.
   * NOTE: All operational parameters must be supplied.
   */
  operationalParams: NameOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Commons Operations Committee member.
   */
  authority?: string;
  /**
   * operational_params defines the operational parameters to update.
   * NOTE: All operational parameters must be supplied.
   */
  operational_params: NameOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/name/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgRegisterName defines the MsgRegisterName message.
 * @name MsgRegisterName
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgRegisterName
 */
export interface MsgRegisterName {
  authority: string;
  name: string;
  data: string;
}
export interface MsgRegisterNameProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgRegisterName";
  value: Uint8Array;
}
/**
 * MsgRegisterName defines the MsgRegisterName message.
 * @name MsgRegisterNameAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgRegisterName
 */
export interface MsgRegisterNameAmino {
  authority?: string;
  name?: string;
  data?: string;
}
export interface MsgRegisterNameAminoMsg {
  type: "/sparkdream.name.v1.MsgRegisterName";
  value: MsgRegisterNameAmino;
}
/**
 * MsgRegisterNameResponse defines the MsgRegisterNameResponse message.
 * @name MsgRegisterNameResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgRegisterNameResponse
 */
export interface MsgRegisterNameResponse {}
export interface MsgRegisterNameResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgRegisterNameResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterNameResponse defines the MsgRegisterNameResponse message.
 * @name MsgRegisterNameResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgRegisterNameResponse
 */
export interface MsgRegisterNameResponseAmino {}
export interface MsgRegisterNameResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgRegisterNameResponse";
  value: MsgRegisterNameResponseAmino;
}
/**
 * MsgSetPrimary defines the MsgSetPrimary message.
 * @name MsgSetPrimary
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgSetPrimary
 */
export interface MsgSetPrimary {
  authority: string;
  name: string;
}
export interface MsgSetPrimaryProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgSetPrimary";
  value: Uint8Array;
}
/**
 * MsgSetPrimary defines the MsgSetPrimary message.
 * @name MsgSetPrimaryAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgSetPrimary
 */
export interface MsgSetPrimaryAmino {
  authority?: string;
  name?: string;
}
export interface MsgSetPrimaryAminoMsg {
  type: "/sparkdream.name.v1.MsgSetPrimary";
  value: MsgSetPrimaryAmino;
}
/**
 * MsgSetPrimaryResponse defines the MsgSetPrimaryResponse message.
 * @name MsgSetPrimaryResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgSetPrimaryResponse
 */
export interface MsgSetPrimaryResponse {}
export interface MsgSetPrimaryResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgSetPrimaryResponse";
  value: Uint8Array;
}
/**
 * MsgSetPrimaryResponse defines the MsgSetPrimaryResponse message.
 * @name MsgSetPrimaryResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgSetPrimaryResponse
 */
export interface MsgSetPrimaryResponseAmino {}
export interface MsgSetPrimaryResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgSetPrimaryResponse";
  value: MsgSetPrimaryResponseAmino;
}
/**
 * MsgFileDispute files a name dispute. The claimant stakes DREAM tokens.
 * @name MsgFileDispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgFileDispute
 */
export interface MsgFileDispute {
  authority: string;
  name: string;
  /**
   * Why the claimant believes they should own this name
   */
  reason: string;
}
export interface MsgFileDisputeProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgFileDispute";
  value: Uint8Array;
}
/**
 * MsgFileDispute files a name dispute. The claimant stakes DREAM tokens.
 * @name MsgFileDisputeAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgFileDispute
 */
export interface MsgFileDisputeAmino {
  authority?: string;
  name?: string;
  /**
   * Why the claimant believes they should own this name
   */
  reason?: string;
}
export interface MsgFileDisputeAminoMsg {
  type: "/sparkdream.name.v1.MsgFileDispute";
  value: MsgFileDisputeAmino;
}
/**
 * MsgFileDisputeResponse defines the MsgFileDisputeResponse message.
 * @name MsgFileDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgFileDisputeResponse
 */
export interface MsgFileDisputeResponse {}
export interface MsgFileDisputeResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgFileDisputeResponse";
  value: Uint8Array;
}
/**
 * MsgFileDisputeResponse defines the MsgFileDisputeResponse message.
 * @name MsgFileDisputeResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgFileDisputeResponse
 */
export interface MsgFileDisputeResponseAmino {}
export interface MsgFileDisputeResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgFileDisputeResponse";
  value: MsgFileDisputeResponseAmino;
}
/**
 * MsgContestDispute allows the current name owner to contest a dispute.
 * The owner stakes DREAM tokens and a jury review is triggered.
 * @name MsgContestDispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgContestDispute
 */
export interface MsgContestDispute {
  /**
   * Current owner
   */
  authority: string;
  name: string;
  /**
   * Why the dispute is invalid
   */
  reason: string;
}
export interface MsgContestDisputeProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgContestDispute";
  value: Uint8Array;
}
/**
 * MsgContestDispute allows the current name owner to contest a dispute.
 * The owner stakes DREAM tokens and a jury review is triggered.
 * @name MsgContestDisputeAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgContestDispute
 */
export interface MsgContestDisputeAmino {
  /**
   * Current owner
   */
  authority?: string;
  name?: string;
  /**
   * Why the dispute is invalid
   */
  reason?: string;
}
export interface MsgContestDisputeAminoMsg {
  type: "sparkdream/x/name/MsgContestDispute";
  value: MsgContestDisputeAmino;
}
/**
 * MsgContestDisputeResponse defines the response for MsgContestDispute.
 * @name MsgContestDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgContestDisputeResponse
 */
export interface MsgContestDisputeResponse {}
export interface MsgContestDisputeResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgContestDisputeResponse";
  value: Uint8Array;
}
/**
 * MsgContestDisputeResponse defines the response for MsgContestDispute.
 * @name MsgContestDisputeResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgContestDisputeResponse
 */
export interface MsgContestDisputeResponseAmino {}
export interface MsgContestDisputeResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgContestDisputeResponse";
  value: MsgContestDisputeResponseAmino;
}
/**
 * MsgResolveDispute resolves a name dispute.
 * Authorized: Commons Council, Operations Committee, governance authority, or x/rep jury callback.
 * @name MsgResolveDispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgResolveDispute
 */
export interface MsgResolveDispute {
  authority: string;
  name: string;
  /**
   * Only used if transfer_approved
   */
  newOwner: string;
  /**
   * true = name transfers to claimant, false = dismiss dispute
   */
  transferApproved: boolean;
}
export interface MsgResolveDisputeProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgResolveDispute";
  value: Uint8Array;
}
/**
 * MsgResolveDispute resolves a name dispute.
 * Authorized: Commons Council, Operations Committee, governance authority, or x/rep jury callback.
 * @name MsgResolveDisputeAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgResolveDispute
 */
export interface MsgResolveDisputeAmino {
  authority?: string;
  name?: string;
  /**
   * Only used if transfer_approved
   */
  new_owner?: string;
  /**
   * true = name transfers to claimant, false = dismiss dispute
   */
  transfer_approved?: boolean;
}
export interface MsgResolveDisputeAminoMsg {
  type: "/sparkdream.name.v1.MsgResolveDispute";
  value: MsgResolveDisputeAmino;
}
/**
 * MsgResolveDisputeResponse defines the MsgResolveDisputeResponse message.
 * @name MsgResolveDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgResolveDisputeResponse
 */
export interface MsgResolveDisputeResponse {}
export interface MsgResolveDisputeResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgResolveDisputeResponse";
  value: Uint8Array;
}
/**
 * MsgResolveDisputeResponse defines the MsgResolveDisputeResponse message.
 * @name MsgResolveDisputeResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgResolveDisputeResponse
 */
export interface MsgResolveDisputeResponseAmino {}
export interface MsgResolveDisputeResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgResolveDisputeResponse";
  value: MsgResolveDisputeResponseAmino;
}
/**
 * MsgUpdateName defines the MsgUpdateName message.
 * @name MsgUpdateName
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateName
 */
export interface MsgUpdateName {
  creator: string;
  name: string;
  data: string;
}
export interface MsgUpdateNameProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgUpdateName";
  value: Uint8Array;
}
/**
 * MsgUpdateName defines the MsgUpdateName message.
 * @name MsgUpdateNameAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateName
 */
export interface MsgUpdateNameAmino {
  creator?: string;
  name?: string;
  data?: string;
}
export interface MsgUpdateNameAminoMsg {
  type: "/sparkdream.name.v1.MsgUpdateName";
  value: MsgUpdateNameAmino;
}
/**
 * MsgUpdateNameResponse defines the MsgUpdateNameResponse message.
 * @name MsgUpdateNameResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateNameResponse
 */
export interface MsgUpdateNameResponse {
  name: string;
  owner: string;
}
export interface MsgUpdateNameResponseProtoMsg {
  typeUrl: "/sparkdream.name.v1.MsgUpdateNameResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateNameResponse defines the MsgUpdateNameResponse message.
 * @name MsgUpdateNameResponseAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateNameResponse
 */
export interface MsgUpdateNameResponseAmino {
  name?: string;
  owner?: string;
}
export interface MsgUpdateNameResponseAminoMsg {
  type: "/sparkdream.name.v1.MsgUpdateNameResponse";
  value: MsgUpdateNameResponseAmino;
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
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.name.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/name/MsgUpdateParams",
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
      type: "sparkdream/x/name/MsgUpdateParams",
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
      typeUrl: "/sparkdream.name.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.name.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.name.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: NameOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/name/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      NameOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = NameOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? NameOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = NameOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? NameOperationalParams.toAmino(message.operationalParams) : NameOperationalParams.toAmino(NameOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/name/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterName(): MsgRegisterName {
  return {
    authority: "",
    name: "",
    data: ""
  };
}
/**
 * MsgRegisterName defines the MsgRegisterName message.
 * @name MsgRegisterName
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgRegisterName
 */
export const MsgRegisterName = {
  typeUrl: "/sparkdream.name.v1.MsgRegisterName",
  encode(message: MsgRegisterName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterName {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterName>): MsgRegisterName {
    const message = createBaseMsgRegisterName();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterNameAmino): MsgRegisterName {
    const message = createBaseMsgRegisterName();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: MsgRegisterName): MsgRegisterNameAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterNameAminoMsg): MsgRegisterName {
    return MsgRegisterName.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterNameProtoMsg): MsgRegisterName {
    return MsgRegisterName.decode(message.value);
  },
  toProto(message: MsgRegisterName): Uint8Array {
    return MsgRegisterName.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterName): MsgRegisterNameProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgRegisterName",
      value: MsgRegisterName.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterNameResponse(): MsgRegisterNameResponse {
  return {};
}
/**
 * MsgRegisterNameResponse defines the MsgRegisterNameResponse message.
 * @name MsgRegisterNameResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgRegisterNameResponse
 */
export const MsgRegisterNameResponse = {
  typeUrl: "/sparkdream.name.v1.MsgRegisterNameResponse",
  encode(_: MsgRegisterNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNameResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterNameResponse>): MsgRegisterNameResponse {
    const message = createBaseMsgRegisterNameResponse();
    return message;
  },
  fromAmino(_: MsgRegisterNameResponseAmino): MsgRegisterNameResponse {
    const message = createBaseMsgRegisterNameResponse();
    return message;
  },
  toAmino(_: MsgRegisterNameResponse): MsgRegisterNameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterNameResponseAminoMsg): MsgRegisterNameResponse {
    return MsgRegisterNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterNameResponseProtoMsg): MsgRegisterNameResponse {
    return MsgRegisterNameResponse.decode(message.value);
  },
  toProto(message: MsgRegisterNameResponse): Uint8Array {
    return MsgRegisterNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterNameResponse): MsgRegisterNameResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgRegisterNameResponse",
      value: MsgRegisterNameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPrimary(): MsgSetPrimary {
  return {
    authority: "",
    name: ""
  };
}
/**
 * MsgSetPrimary defines the MsgSetPrimary message.
 * @name MsgSetPrimary
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgSetPrimary
 */
export const MsgSetPrimary = {
  typeUrl: "/sparkdream.name.v1.MsgSetPrimary",
  encode(message: MsgSetPrimary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPrimary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPrimary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetPrimary>): MsgSetPrimary {
    const message = createBaseMsgSetPrimary();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgSetPrimaryAmino): MsgSetPrimary {
    const message = createBaseMsgSetPrimary();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgSetPrimary): MsgSetPrimaryAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgSetPrimaryAminoMsg): MsgSetPrimary {
    return MsgSetPrimary.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPrimaryProtoMsg): MsgSetPrimary {
    return MsgSetPrimary.decode(message.value);
  },
  toProto(message: MsgSetPrimary): Uint8Array {
    return MsgSetPrimary.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPrimary): MsgSetPrimaryProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgSetPrimary",
      value: MsgSetPrimary.encode(message).finish()
    };
  }
};
function createBaseMsgSetPrimaryResponse(): MsgSetPrimaryResponse {
  return {};
}
/**
 * MsgSetPrimaryResponse defines the MsgSetPrimaryResponse message.
 * @name MsgSetPrimaryResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgSetPrimaryResponse
 */
export const MsgSetPrimaryResponse = {
  typeUrl: "/sparkdream.name.v1.MsgSetPrimaryResponse",
  encode(_: MsgSetPrimaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPrimaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPrimaryResponse();
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
  fromPartial(_: DeepPartial<MsgSetPrimaryResponse>): MsgSetPrimaryResponse {
    const message = createBaseMsgSetPrimaryResponse();
    return message;
  },
  fromAmino(_: MsgSetPrimaryResponseAmino): MsgSetPrimaryResponse {
    const message = createBaseMsgSetPrimaryResponse();
    return message;
  },
  toAmino(_: MsgSetPrimaryResponse): MsgSetPrimaryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPrimaryResponseAminoMsg): MsgSetPrimaryResponse {
    return MsgSetPrimaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPrimaryResponseProtoMsg): MsgSetPrimaryResponse {
    return MsgSetPrimaryResponse.decode(message.value);
  },
  toProto(message: MsgSetPrimaryResponse): Uint8Array {
    return MsgSetPrimaryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPrimaryResponse): MsgSetPrimaryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgSetPrimaryResponse",
      value: MsgSetPrimaryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFileDispute(): MsgFileDispute {
  return {
    authority: "",
    name: "",
    reason: ""
  };
}
/**
 * MsgFileDispute files a name dispute. The claimant stakes DREAM tokens.
 * @name MsgFileDispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgFileDispute
 */
export const MsgFileDispute = {
  typeUrl: "/sparkdream.name.v1.MsgFileDispute",
  encode(message: MsgFileDispute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFileDispute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFileDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFileDispute>): MsgFileDispute {
    const message = createBaseMsgFileDispute();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgFileDisputeAmino): MsgFileDispute {
    const message = createBaseMsgFileDispute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgFileDispute): MsgFileDisputeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgFileDisputeAminoMsg): MsgFileDispute {
    return MsgFileDispute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFileDisputeProtoMsg): MsgFileDispute {
    return MsgFileDispute.decode(message.value);
  },
  toProto(message: MsgFileDispute): Uint8Array {
    return MsgFileDispute.encode(message).finish();
  },
  toProtoMsg(message: MsgFileDispute): MsgFileDisputeProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgFileDispute",
      value: MsgFileDispute.encode(message).finish()
    };
  }
};
function createBaseMsgFileDisputeResponse(): MsgFileDisputeResponse {
  return {};
}
/**
 * MsgFileDisputeResponse defines the MsgFileDisputeResponse message.
 * @name MsgFileDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgFileDisputeResponse
 */
export const MsgFileDisputeResponse = {
  typeUrl: "/sparkdream.name.v1.MsgFileDisputeResponse",
  encode(_: MsgFileDisputeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFileDisputeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFileDisputeResponse();
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
  fromPartial(_: DeepPartial<MsgFileDisputeResponse>): MsgFileDisputeResponse {
    const message = createBaseMsgFileDisputeResponse();
    return message;
  },
  fromAmino(_: MsgFileDisputeResponseAmino): MsgFileDisputeResponse {
    const message = createBaseMsgFileDisputeResponse();
    return message;
  },
  toAmino(_: MsgFileDisputeResponse): MsgFileDisputeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFileDisputeResponseAminoMsg): MsgFileDisputeResponse {
    return MsgFileDisputeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFileDisputeResponseProtoMsg): MsgFileDisputeResponse {
    return MsgFileDisputeResponse.decode(message.value);
  },
  toProto(message: MsgFileDisputeResponse): Uint8Array {
    return MsgFileDisputeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFileDisputeResponse): MsgFileDisputeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgFileDisputeResponse",
      value: MsgFileDisputeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgContestDispute(): MsgContestDispute {
  return {
    authority: "",
    name: "",
    reason: ""
  };
}
/**
 * MsgContestDispute allows the current name owner to contest a dispute.
 * The owner stakes DREAM tokens and a jury review is triggered.
 * @name MsgContestDispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgContestDispute
 */
export const MsgContestDispute = {
  typeUrl: "/sparkdream.name.v1.MsgContestDispute",
  aminoType: "sparkdream/x/name/MsgContestDispute",
  encode(message: MsgContestDispute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgContestDispute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgContestDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgContestDispute>): MsgContestDispute {
    const message = createBaseMsgContestDispute();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgContestDisputeAmino): MsgContestDispute {
    const message = createBaseMsgContestDispute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgContestDispute): MsgContestDisputeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgContestDisputeAminoMsg): MsgContestDispute {
    return MsgContestDispute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgContestDispute): MsgContestDisputeAminoMsg {
    return {
      type: "sparkdream/x/name/MsgContestDispute",
      value: MsgContestDispute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgContestDisputeProtoMsg): MsgContestDispute {
    return MsgContestDispute.decode(message.value);
  },
  toProto(message: MsgContestDispute): Uint8Array {
    return MsgContestDispute.encode(message).finish();
  },
  toProtoMsg(message: MsgContestDispute): MsgContestDisputeProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgContestDispute",
      value: MsgContestDispute.encode(message).finish()
    };
  }
};
function createBaseMsgContestDisputeResponse(): MsgContestDisputeResponse {
  return {};
}
/**
 * MsgContestDisputeResponse defines the response for MsgContestDispute.
 * @name MsgContestDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgContestDisputeResponse
 */
export const MsgContestDisputeResponse = {
  typeUrl: "/sparkdream.name.v1.MsgContestDisputeResponse",
  encode(_: MsgContestDisputeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgContestDisputeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgContestDisputeResponse();
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
  fromPartial(_: DeepPartial<MsgContestDisputeResponse>): MsgContestDisputeResponse {
    const message = createBaseMsgContestDisputeResponse();
    return message;
  },
  fromAmino(_: MsgContestDisputeResponseAmino): MsgContestDisputeResponse {
    const message = createBaseMsgContestDisputeResponse();
    return message;
  },
  toAmino(_: MsgContestDisputeResponse): MsgContestDisputeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgContestDisputeResponseAminoMsg): MsgContestDisputeResponse {
    return MsgContestDisputeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgContestDisputeResponseProtoMsg): MsgContestDisputeResponse {
    return MsgContestDisputeResponse.decode(message.value);
  },
  toProto(message: MsgContestDisputeResponse): Uint8Array {
    return MsgContestDisputeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgContestDisputeResponse): MsgContestDisputeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgContestDisputeResponse",
      value: MsgContestDisputeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveDispute(): MsgResolveDispute {
  return {
    authority: "",
    name: "",
    newOwner: "",
    transferApproved: false
  };
}
/**
 * MsgResolveDispute resolves a name dispute.
 * Authorized: Commons Council, Operations Committee, governance authority, or x/rep jury callback.
 * @name MsgResolveDispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgResolveDispute
 */
export const MsgResolveDispute = {
  typeUrl: "/sparkdream.name.v1.MsgResolveDispute",
  encode(message: MsgResolveDispute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    if (message.transferApproved === true) {
      writer.uint32(32).bool(message.transferApproved);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveDispute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        case 4:
          message.transferApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveDispute>): MsgResolveDispute {
    const message = createBaseMsgResolveDispute();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.newOwner = object.newOwner ?? "";
    message.transferApproved = object.transferApproved ?? false;
    return message;
  },
  fromAmino(object: MsgResolveDisputeAmino): MsgResolveDispute {
    const message = createBaseMsgResolveDispute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.transfer_approved !== undefined && object.transfer_approved !== null) {
      message.transferApproved = object.transfer_approved;
    }
    return message;
  },
  toAmino(message: MsgResolveDispute): MsgResolveDisputeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.transfer_approved = message.transferApproved === false ? undefined : message.transferApproved;
    return obj;
  },
  fromAminoMsg(object: MsgResolveDisputeAminoMsg): MsgResolveDispute {
    return MsgResolveDispute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveDisputeProtoMsg): MsgResolveDispute {
    return MsgResolveDispute.decode(message.value);
  },
  toProto(message: MsgResolveDispute): Uint8Array {
    return MsgResolveDispute.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveDispute): MsgResolveDisputeProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgResolveDispute",
      value: MsgResolveDispute.encode(message).finish()
    };
  }
};
function createBaseMsgResolveDisputeResponse(): MsgResolveDisputeResponse {
  return {};
}
/**
 * MsgResolveDisputeResponse defines the MsgResolveDisputeResponse message.
 * @name MsgResolveDisputeResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgResolveDisputeResponse
 */
export const MsgResolveDisputeResponse = {
  typeUrl: "/sparkdream.name.v1.MsgResolveDisputeResponse",
  encode(_: MsgResolveDisputeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveDisputeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveDisputeResponse();
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
  fromPartial(_: DeepPartial<MsgResolveDisputeResponse>): MsgResolveDisputeResponse {
    const message = createBaseMsgResolveDisputeResponse();
    return message;
  },
  fromAmino(_: MsgResolveDisputeResponseAmino): MsgResolveDisputeResponse {
    const message = createBaseMsgResolveDisputeResponse();
    return message;
  },
  toAmino(_: MsgResolveDisputeResponse): MsgResolveDisputeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveDisputeResponseAminoMsg): MsgResolveDisputeResponse {
    return MsgResolveDisputeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveDisputeResponseProtoMsg): MsgResolveDisputeResponse {
    return MsgResolveDisputeResponse.decode(message.value);
  },
  toProto(message: MsgResolveDisputeResponse): Uint8Array {
    return MsgResolveDisputeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveDisputeResponse): MsgResolveDisputeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgResolveDisputeResponse",
      value: MsgResolveDisputeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateName(): MsgUpdateName {
  return {
    creator: "",
    name: "",
    data: ""
  };
}
/**
 * MsgUpdateName defines the MsgUpdateName message.
 * @name MsgUpdateName
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateName
 */
export const MsgUpdateName = {
  typeUrl: "/sparkdream.name.v1.MsgUpdateName",
  encode(message: MsgUpdateName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateName {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateName>): MsgUpdateName {
    const message = createBaseMsgUpdateName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateNameAmino): MsgUpdateName {
    const message = createBaseMsgUpdateName();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: MsgUpdateName): MsgUpdateNameAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNameAminoMsg): MsgUpdateName {
    return MsgUpdateName.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNameProtoMsg): MsgUpdateName {
    return MsgUpdateName.decode(message.value);
  },
  toProto(message: MsgUpdateName): Uint8Array {
    return MsgUpdateName.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateName): MsgUpdateNameProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgUpdateName",
      value: MsgUpdateName.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateNameResponse(): MsgUpdateNameResponse {
  return {
    name: "",
    owner: ""
  };
}
/**
 * MsgUpdateNameResponse defines the MsgUpdateNameResponse message.
 * @name MsgUpdateNameResponse
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.MsgUpdateNameResponse
 */
export const MsgUpdateNameResponse = {
  typeUrl: "/sparkdream.name.v1.MsgUpdateNameResponse",
  encode(message: MsgUpdateNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNameResponse>): MsgUpdateNameResponse {
    const message = createBaseMsgUpdateNameResponse();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateNameResponseAmino): MsgUpdateNameResponse {
    const message = createBaseMsgUpdateNameResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgUpdateNameResponse): MsgUpdateNameResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNameResponseAminoMsg): MsgUpdateNameResponse {
    return MsgUpdateNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNameResponseProtoMsg): MsgUpdateNameResponse {
    return MsgUpdateNameResponse.decode(message.value);
  },
  toProto(message: MsgUpdateNameResponse): Uint8Array {
    return MsgUpdateNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNameResponse): MsgUpdateNameResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.MsgUpdateNameResponse",
      value: MsgUpdateNameResponse.encode(message).finish()
    };
  }
};