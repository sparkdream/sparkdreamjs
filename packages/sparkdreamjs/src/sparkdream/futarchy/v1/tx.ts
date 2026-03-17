//@ts-nocheck
import { Params, ParamsAmino, FutarchyOperationalParams, FutarchyOperationalParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateParams
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
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateParams
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
  type: "sparkdream/x/futarchy/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateOperationalParams
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
  operationalParams: FutarchyOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateOperationalParams
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
  operational_params: FutarchyOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/futarchy/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgCreateMarket defines the MsgCreateMarket message.
 * @name MsgCreateMarket
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCreateMarket
 */
export interface MsgCreateMarket {
  creator: string;
  symbol: string;
  initialLiquidity: string;
  question: string;
  endBlock: bigint;
}
export interface MsgCreateMarketProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarket";
  value: Uint8Array;
}
/**
 * MsgCreateMarket defines the MsgCreateMarket message.
 * @name MsgCreateMarketAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCreateMarket
 */
export interface MsgCreateMarketAmino {
  creator?: string;
  symbol?: string;
  initial_liquidity?: string;
  question?: string;
  end_block?: string;
}
export interface MsgCreateMarketAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgCreateMarket";
  value: MsgCreateMarketAmino;
}
/**
 * MsgCreateMarketResponse defines the MsgCreateMarketResponse message.
 * @name MsgCreateMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCreateMarketResponse
 */
export interface MsgCreateMarketResponse {
  marketId: bigint;
}
export interface MsgCreateMarketResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarketResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMarketResponse defines the MsgCreateMarketResponse message.
 * @name MsgCreateMarketResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCreateMarketResponse
 */
export interface MsgCreateMarketResponseAmino {
  market_id?: string;
}
export interface MsgCreateMarketResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgCreateMarketResponse";
  value: MsgCreateMarketResponseAmino;
}
/**
 * MsgTrade defines the MsgTrade message.
 * @name MsgTrade
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgTrade
 */
export interface MsgTrade {
  creator: string;
  marketId: bigint;
  isYes: boolean;
  amountIn: string;
}
export interface MsgTradeProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgTrade";
  value: Uint8Array;
}
/**
 * MsgTrade defines the MsgTrade message.
 * @name MsgTradeAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgTrade
 */
export interface MsgTradeAmino {
  creator?: string;
  market_id?: string;
  is_yes?: boolean;
  amount_in?: string;
}
export interface MsgTradeAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgTrade";
  value: MsgTradeAmino;
}
/**
 * MsgTradeResponse defines the MsgTradeResponse message.
 * @name MsgTradeResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgTradeResponse
 */
export interface MsgTradeResponse {
  sharesOut: string;
}
export interface MsgTradeResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgTradeResponse";
  value: Uint8Array;
}
/**
 * MsgTradeResponse defines the MsgTradeResponse message.
 * @name MsgTradeResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgTradeResponse
 */
export interface MsgTradeResponseAmino {
  shares_out?: string;
}
export interface MsgTradeResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgTradeResponse";
  value: MsgTradeResponseAmino;
}
/**
 * MsgRedeem defines the MsgRedeem message.
 * @name MsgRedeem
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgRedeem
 */
export interface MsgRedeem {
  creator: string;
  marketId: bigint;
}
export interface MsgRedeemProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgRedeem";
  value: Uint8Array;
}
/**
 * MsgRedeem defines the MsgRedeem message.
 * @name MsgRedeemAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgRedeem
 */
export interface MsgRedeemAmino {
  creator?: string;
  market_id?: string;
}
export interface MsgRedeemAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgRedeem";
  value: MsgRedeemAmino;
}
/**
 * MsgRedeemResponse defines the MsgRedeemResponse message.
 * @name MsgRedeemResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgRedeemResponse
 */
export interface MsgRedeemResponse {}
export interface MsgRedeemResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgRedeemResponse";
  value: Uint8Array;
}
/**
 * MsgRedeemResponse defines the MsgRedeemResponse message.
 * @name MsgRedeemResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgRedeemResponse
 */
export interface MsgRedeemResponseAmino {}
export interface MsgRedeemResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgRedeemResponse";
  value: MsgRedeemResponseAmino;
}
/**
 * MsgCancelMarket defines the MsgCancelMarket message.
 * @name MsgCancelMarket
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCancelMarket
 */
export interface MsgCancelMarket {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  marketId: bigint;
  reason: string;
}
export interface MsgCancelMarketProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarket";
  value: Uint8Array;
}
/**
 * MsgCancelMarket defines the MsgCancelMarket message.
 * @name MsgCancelMarketAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCancelMarket
 */
export interface MsgCancelMarketAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  market_id?: string;
  reason?: string;
}
export interface MsgCancelMarketAminoMsg {
  type: "sparkdream/x/futarchy/MsgCancelMarket";
  value: MsgCancelMarketAmino;
}
/**
 * MsgCancelMarketResponse defines the MsgCancelMarketResponse message.
 * @name MsgCancelMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCancelMarketResponse
 */
export interface MsgCancelMarketResponse {}
export interface MsgCancelMarketResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarketResponse";
  value: Uint8Array;
}
/**
 * MsgCancelMarketResponse defines the MsgCancelMarketResponse message.
 * @name MsgCancelMarketResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCancelMarketResponse
 */
export interface MsgCancelMarketResponseAmino {}
export interface MsgCancelMarketResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgCancelMarketResponse";
  value: MsgCancelMarketResponseAmino;
}
/**
 * MsgWithdrawLiquidity defines the MsgWithdrawLiquidity message.
 * @name MsgWithdrawLiquidity
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgWithdrawLiquidity
 */
export interface MsgWithdrawLiquidity {
  creator: string;
  marketId: bigint;
}
export interface MsgWithdrawLiquidityProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity";
  value: Uint8Array;
}
/**
 * MsgWithdrawLiquidity defines the MsgWithdrawLiquidity message.
 * @name MsgWithdrawLiquidityAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgWithdrawLiquidity
 */
export interface MsgWithdrawLiquidityAmino {
  creator?: string;
  market_id?: string;
}
export interface MsgWithdrawLiquidityAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity";
  value: MsgWithdrawLiquidityAmino;
}
/**
 * MsgWithdrawLiquidityResponse defines the MsgWithdrawLiquidityResponse message.
 * @name MsgWithdrawLiquidityResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse
 */
export interface MsgWithdrawLiquidityResponse {
  amount: string;
}
export interface MsgWithdrawLiquidityResponseProtoMsg {
  typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawLiquidityResponse defines the MsgWithdrawLiquidityResponse message.
 * @name MsgWithdrawLiquidityResponseAmino
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse
 */
export interface MsgWithdrawLiquidityResponseAmino {
  amount?: string;
}
export interface MsgWithdrawLiquidityResponseAminoMsg {
  type: "/sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse";
  value: MsgWithdrawLiquidityResponseAmino;
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
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/futarchy/MsgUpdateParams",
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
      type: "sparkdream/x/futarchy/MsgUpdateParams",
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
      typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParams",
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
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: FutarchyOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/futarchy/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      FutarchyOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
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
          message.operationalParams = FutarchyOperationalParams.decode(reader, reader.uint32());
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
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? FutarchyOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = FutarchyOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? FutarchyOperationalParams.toAmino(message.operationalParams) : FutarchyOperationalParams.toAmino(FutarchyOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/futarchy/MsgUpdateOperationalParams",
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
      typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParams",
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
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse",
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
      typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMarket(): MsgCreateMarket {
  return {
    creator: "",
    symbol: "",
    initialLiquidity: "",
    question: "",
    endBlock: BigInt(0)
  };
}
/**
 * MsgCreateMarket defines the MsgCreateMarket message.
 * @name MsgCreateMarket
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCreateMarket
 */
export const MsgCreateMarket = {
  typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarket",
  encode(message: MsgCreateMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.initialLiquidity !== "") {
      writer.uint32(26).string(message.initialLiquidity);
    }
    if (message.question !== "") {
      writer.uint32(34).string(message.question);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.endBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.initialLiquidity = reader.string();
          break;
        case 4:
          message.question = reader.string();
          break;
        case 5:
          message.endBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = createBaseMsgCreateMarket();
    message.creator = object.creator ?? "";
    message.symbol = object.symbol ?? "";
    message.initialLiquidity = object.initialLiquidity ?? "";
    message.question = object.question ?? "";
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateMarketAmino): MsgCreateMarket {
    const message = createBaseMsgCreateMarket();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.initial_liquidity !== undefined && object.initial_liquidity !== null) {
      message.initialLiquidity = object.initial_liquidity;
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question;
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    return message;
  },
  toAmino(message: MsgCreateMarket): MsgCreateMarketAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.initial_liquidity = message.initialLiquidity === "" ? undefined : message.initialLiquidity;
    obj.question = message.question === "" ? undefined : message.question;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMarketAminoMsg): MsgCreateMarket {
    return MsgCreateMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMarketProtoMsg): MsgCreateMarket {
    return MsgCreateMarket.decode(message.value);
  },
  toProto(message: MsgCreateMarket): Uint8Array {
    return MsgCreateMarket.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMarket): MsgCreateMarketProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarket",
      value: MsgCreateMarket.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMarketResponse(): MsgCreateMarketResponse {
  return {
    marketId: BigInt(0)
  };
}
/**
 * MsgCreateMarketResponse defines the MsgCreateMarketResponse message.
 * @name MsgCreateMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCreateMarketResponse
 */
export const MsgCreateMarketResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarketResponse",
  encode(message: MsgCreateMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== BigInt(0)) {
      writer.uint32(8).uint64(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse {
    const message = createBaseMsgCreateMarketResponse();
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateMarketResponseAmino): MsgCreateMarketResponse {
    const message = createBaseMsgCreateMarketResponse();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    return message;
  },
  toAmino(message: MsgCreateMarketResponse): MsgCreateMarketResponseAmino {
    const obj: any = {};
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMarketResponseAminoMsg): MsgCreateMarketResponse {
    return MsgCreateMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMarketResponseProtoMsg): MsgCreateMarketResponse {
    return MsgCreateMarketResponse.decode(message.value);
  },
  toProto(message: MsgCreateMarketResponse): Uint8Array {
    return MsgCreateMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMarketResponse): MsgCreateMarketResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarketResponse",
      value: MsgCreateMarketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTrade(): MsgTrade {
  return {
    creator: "",
    marketId: BigInt(0),
    isYes: false,
    amountIn: ""
  };
}
/**
 * MsgTrade defines the MsgTrade message.
 * @name MsgTrade
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgTrade
 */
export const MsgTrade = {
  typeUrl: "/sparkdream.futarchy.v1.MsgTrade",
  encode(message: MsgTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== BigInt(0)) {
      writer.uint32(16).uint64(message.marketId);
    }
    if (message.isYes === true) {
      writer.uint32(24).bool(message.isYes);
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.uint64();
          break;
        case 3:
          message.isYes = reader.bool();
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTrade>): MsgTrade {
    const message = createBaseMsgTrade();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    message.isYes = object.isYes ?? false;
    message.amountIn = object.amountIn ?? "";
    return message;
  },
  fromAmino(object: MsgTradeAmino): MsgTrade {
    const message = createBaseMsgTrade();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    if (object.is_yes !== undefined && object.is_yes !== null) {
      message.isYes = object.is_yes;
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = object.amount_in;
    }
    return message;
  },
  toAmino(message: MsgTrade): MsgTradeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    obj.is_yes = message.isYes === false ? undefined : message.isYes;
    obj.amount_in = message.amountIn === "" ? undefined : message.amountIn;
    return obj;
  },
  fromAminoMsg(object: MsgTradeAminoMsg): MsgTrade {
    return MsgTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTradeProtoMsg): MsgTrade {
    return MsgTrade.decode(message.value);
  },
  toProto(message: MsgTrade): Uint8Array {
    return MsgTrade.encode(message).finish();
  },
  toProtoMsg(message: MsgTrade): MsgTradeProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgTrade",
      value: MsgTrade.encode(message).finish()
    };
  }
};
function createBaseMsgTradeResponse(): MsgTradeResponse {
  return {
    sharesOut: ""
  };
}
/**
 * MsgTradeResponse defines the MsgTradeResponse message.
 * @name MsgTradeResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgTradeResponse
 */
export const MsgTradeResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgTradeResponse",
  encode(message: MsgTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sharesOut !== "") {
      writer.uint32(10).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTradeResponse>): MsgTradeResponse {
    const message = createBaseMsgTradeResponse();
    message.sharesOut = object.sharesOut ?? "";
    return message;
  },
  fromAmino(object: MsgTradeResponseAmino): MsgTradeResponse {
    const message = createBaseMsgTradeResponse();
    if (object.shares_out !== undefined && object.shares_out !== null) {
      message.sharesOut = object.shares_out;
    }
    return message;
  },
  toAmino(message: MsgTradeResponse): MsgTradeResponseAmino {
    const obj: any = {};
    obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
    return obj;
  },
  fromAminoMsg(object: MsgTradeResponseAminoMsg): MsgTradeResponse {
    return MsgTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTradeResponseProtoMsg): MsgTradeResponse {
    return MsgTradeResponse.decode(message.value);
  },
  toProto(message: MsgTradeResponse): Uint8Array {
    return MsgTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTradeResponse): MsgTradeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgTradeResponse",
      value: MsgTradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    creator: "",
    marketId: BigInt(0)
  };
}
/**
 * MsgRedeem defines the MsgRedeem message.
 * @name MsgRedeem
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgRedeem
 */
export const MsgRedeem = {
  typeUrl: "/sparkdream.futarchy.v1.MsgRedeem",
  encode(message: MsgRedeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== BigInt(0)) {
      writer.uint32(16).uint64(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRedeem>): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRedeemAmino): MsgRedeem {
    const message = createBaseMsgRedeem();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    return message;
  },
  toAmino(message: MsgRedeem): MsgRedeemAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemAminoMsg): MsgRedeem {
    return MsgRedeem.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemProtoMsg): MsgRedeem {
    return MsgRedeem.decode(message.value);
  },
  toProto(message: MsgRedeem): Uint8Array {
    return MsgRedeem.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeem): MsgRedeemProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgRedeem",
      value: MsgRedeem.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {};
}
/**
 * MsgRedeemResponse defines the MsgRedeemResponse message.
 * @name MsgRedeemResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgRedeemResponse
 */
export const MsgRedeemResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgRedeemResponse",
  encode(_: MsgRedeemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemResponse();
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
  fromPartial(_: DeepPartial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    return message;
  },
  fromAmino(_: MsgRedeemResponseAmino): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    return message;
  },
  toAmino(_: MsgRedeemResponse): MsgRedeemResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedeemResponseAminoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemResponseProtoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.decode(message.value);
  },
  toProto(message: MsgRedeemResponse): Uint8Array {
    return MsgRedeemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemResponse): MsgRedeemResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgRedeemResponse",
      value: MsgRedeemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelMarket(): MsgCancelMarket {
  return {
    authority: "",
    marketId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgCancelMarket defines the MsgCancelMarket message.
 * @name MsgCancelMarket
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCancelMarket
 */
export const MsgCancelMarket = {
  typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarket",
  aminoType: "sparkdream/x/futarchy/MsgCancelMarket",
  encode(message: MsgCancelMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.marketId !== BigInt(0)) {
      writer.uint32(16).uint64(message.marketId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.marketId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgCancelMarket>): MsgCancelMarket {
    const message = createBaseMsgCancelMarket();
    message.authority = object.authority ?? "";
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgCancelMarketAmino): MsgCancelMarket {
    const message = createBaseMsgCancelMarket();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgCancelMarket): MsgCancelMarketAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgCancelMarketAminoMsg): MsgCancelMarket {
    return MsgCancelMarket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelMarket): MsgCancelMarketAminoMsg {
    return {
      type: "sparkdream/x/futarchy/MsgCancelMarket",
      value: MsgCancelMarket.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelMarketProtoMsg): MsgCancelMarket {
    return MsgCancelMarket.decode(message.value);
  },
  toProto(message: MsgCancelMarket): Uint8Array {
    return MsgCancelMarket.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelMarket): MsgCancelMarketProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarket",
      value: MsgCancelMarket.encode(message).finish()
    };
  }
};
function createBaseMsgCancelMarketResponse(): MsgCancelMarketResponse {
  return {};
}
/**
 * MsgCancelMarketResponse defines the MsgCancelMarketResponse message.
 * @name MsgCancelMarketResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgCancelMarketResponse
 */
export const MsgCancelMarketResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarketResponse",
  encode(_: MsgCancelMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelMarketResponse();
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
  fromPartial(_: DeepPartial<MsgCancelMarketResponse>): MsgCancelMarketResponse {
    const message = createBaseMsgCancelMarketResponse();
    return message;
  },
  fromAmino(_: MsgCancelMarketResponseAmino): MsgCancelMarketResponse {
    const message = createBaseMsgCancelMarketResponse();
    return message;
  },
  toAmino(_: MsgCancelMarketResponse): MsgCancelMarketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelMarketResponseAminoMsg): MsgCancelMarketResponse {
    return MsgCancelMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelMarketResponseProtoMsg): MsgCancelMarketResponse {
    return MsgCancelMarketResponse.decode(message.value);
  },
  toProto(message: MsgCancelMarketResponse): Uint8Array {
    return MsgCancelMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelMarketResponse): MsgCancelMarketResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarketResponse",
      value: MsgCancelMarketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLiquidity(): MsgWithdrawLiquidity {
  return {
    creator: "",
    marketId: BigInt(0)
  };
}
/**
 * MsgWithdrawLiquidity defines the MsgWithdrawLiquidity message.
 * @name MsgWithdrawLiquidity
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgWithdrawLiquidity
 */
export const MsgWithdrawLiquidity = {
  typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity",
  encode(message: MsgWithdrawLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== BigInt(0)) {
      writer.uint32(16).uint64(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawLiquidity>): MsgWithdrawLiquidity {
    const message = createBaseMsgWithdrawLiquidity();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawLiquidityAmino): MsgWithdrawLiquidity {
    const message = createBaseMsgWithdrawLiquidity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawLiquidity): MsgWithdrawLiquidityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawLiquidityAminoMsg): MsgWithdrawLiquidity {
    return MsgWithdrawLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawLiquidityProtoMsg): MsgWithdrawLiquidity {
    return MsgWithdrawLiquidity.decode(message.value);
  },
  toProto(message: MsgWithdrawLiquidity): Uint8Array {
    return MsgWithdrawLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLiquidity): MsgWithdrawLiquidityProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity",
      value: MsgWithdrawLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLiquidityResponse(): MsgWithdrawLiquidityResponse {
  return {
    amount: ""
  };
}
/**
 * MsgWithdrawLiquidityResponse defines the MsgWithdrawLiquidityResponse message.
 * @name MsgWithdrawLiquidityResponse
 * @package sparkdream.futarchy.v1
 * @see proto type: sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse
 */
export const MsgWithdrawLiquidityResponse = {
  typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse",
  encode(message: MsgWithdrawLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawLiquidityResponse>): MsgWithdrawLiquidityResponse {
    const message = createBaseMsgWithdrawLiquidityResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawLiquidityResponseAmino): MsgWithdrawLiquidityResponse {
    const message = createBaseMsgWithdrawLiquidityResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgWithdrawLiquidityResponse): MsgWithdrawLiquidityResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawLiquidityResponseAminoMsg): MsgWithdrawLiquidityResponse {
    return MsgWithdrawLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawLiquidityResponseProtoMsg): MsgWithdrawLiquidityResponse {
    return MsgWithdrawLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawLiquidityResponse): Uint8Array {
    return MsgWithdrawLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLiquidityResponse): MsgWithdrawLiquidityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidityResponse",
      value: MsgWithdrawLiquidityResponse.encode(message).finish()
    };
  }
};