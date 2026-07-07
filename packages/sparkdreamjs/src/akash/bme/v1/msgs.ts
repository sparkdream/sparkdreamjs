//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { LedgerRecordID, LedgerRecordIDAmino, LedgerRecordStatus } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams defines the message for updating module parameters
 * @name MsgUpdateParams
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (governance)
   */
  authority: string;
  /**
   * params defines the updated parameters
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/akash.bme.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams defines the message for updating module parameters
 * @name MsgUpdateParamsAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (governance)
   */
  authority?: string;
  /**
   * params defines the updated parameters
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "akash/bme/v1/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse is the response type for MsgUpdateParams
 * @name MsgUpdateParamsResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/akash.bme.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse is the response type for MsgUpdateParams
 * @name MsgUpdateParamsResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/akash.bme.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgFundVault defines the message for funding the BME vault with AKT
 * This is used to provide an initial volatility buffer
 * @name MsgFundVault
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgFundVault
 */
export interface MsgFundVault {
  /**
   * authority is the address that controls the module (governance)
   */
  authority: string;
  /**
   * amount is the AKT amount to seed the vault with
   */
  amount: Coin;
  /**
   * source is the source of funds (e.g., community pool)
   */
  source: string;
}
export interface MsgFundVaultProtoMsg {
  typeUrl: "/akash.bme.v1.MsgFundVault";
  value: Uint8Array;
}
/**
 * MsgFundVault defines the message for funding the BME vault with AKT
 * This is used to provide an initial volatility buffer
 * @name MsgFundVaultAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgFundVault
 */
export interface MsgFundVaultAmino {
  /**
   * authority is the address that controls the module (governance)
   */
  authority?: string;
  /**
   * amount is the AKT amount to seed the vault with
   */
  amount?: CoinAmino;
  /**
   * source is the source of funds (e.g., community pool)
   */
  source?: string;
}
export interface MsgFundVaultAminoMsg {
  type: "akash/bme/v1/MsgFundVault";
  value: MsgFundVaultAmino;
}
/**
 * MsgFundVaultResponse is the response type for MsgFundVault
 * @name MsgFundVaultResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgFundVaultResponse
 */
export interface MsgFundVaultResponse {}
export interface MsgFundVaultResponseProtoMsg {
  typeUrl: "/akash.bme.v1.MsgFundVaultResponse";
  value: Uint8Array;
}
/**
 * MsgFundVaultResponse is the response type for MsgFundVault
 * @name MsgFundVaultResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgFundVaultResponse
 */
export interface MsgFundVaultResponseAmino {}
export interface MsgFundVaultResponseAminoMsg {
  type: "/akash.bme.v1.MsgFundVaultResponse";
  value: MsgFundVaultResponseAmino;
}
/**
 * MsgBurnMint defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgBurnMint
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnMint
 */
export interface MsgBurnMint {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * to destination of the minted coins.
   * if minted coin is ACT, "to" must be same as signer
   */
  to: string;
  /**
   * coins_to_burn
   */
  coinsToBurn: Coin;
  /**
   * denom_to_mint
   */
  denomToMint: string;
}
export interface MsgBurnMintProtoMsg {
  typeUrl: "/akash.bme.v1.MsgBurnMint";
  value: Uint8Array;
}
/**
 * MsgBurnMint defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgBurnMintAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnMint
 */
export interface MsgBurnMintAmino {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * to destination of the minted coins.
   * if minted coin is ACT, "to" must be same as signer
   */
  to: string;
  /**
   * coins_to_burn
   */
  coins_to_burn: CoinAmino;
  /**
   * denom_to_mint
   */
  denom_to_mint: string;
}
export interface MsgBurnMintAminoMsg {
  type: "akash/bme/v1/MsgBurnMint";
  value: MsgBurnMintAmino;
}
/**
 * MsgMintACT defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgMintACT
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgMintACT
 */
export interface MsgMintACT {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * to destination of the minted coins.
   * if minted coin is ACT, "to" must be same as signer
   */
  to: string;
  /**
   * coins_to_burn
   */
  coinsToBurn: Coin;
}
export interface MsgMintACTProtoMsg {
  typeUrl: "/akash.bme.v1.MsgMintACT";
  value: Uint8Array;
}
/**
 * MsgMintACT defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgMintACTAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgMintACT
 */
export interface MsgMintACTAmino {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * to destination of the minted coins.
   * if minted coin is ACT, "to" must be same as signer
   */
  to: string;
  /**
   * coins_to_burn
   */
  coins_to_burn: CoinAmino;
}
export interface MsgMintACTAminoMsg {
  type: "akash/bme/v1/MsgMintACT";
  value: MsgMintACTAmino;
}
/**
 * MsgMintACT defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgBurnACT
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnACT
 */
export interface MsgBurnACT {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * to destination of the minted coins.
   * if minted coin is ACT, "to" must be same as signer
   */
  to: string;
  /**
   * coins_to_burn
   */
  coinsToBurn: Coin;
}
export interface MsgBurnACTProtoMsg {
  typeUrl: "/akash.bme.v1.MsgBurnACT";
  value: Uint8Array;
}
/**
 * MsgMintACT defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgBurnACTAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnACT
 */
export interface MsgBurnACTAmino {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * to destination of the minted coins.
   * if minted coin is ACT, "to" must be same as signer
   */
  to: string;
  /**
   * coins_to_burn
   */
  coins_to_burn: CoinAmino;
}
export interface MsgBurnACTAminoMsg {
  type: "akash/bme/v1/MsgBurnACT";
  value: MsgBurnACTAmino;
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgBurnMintResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnMintResponse
 */
export interface MsgBurnMintResponse {
  id: LedgerRecordID;
  status: LedgerRecordStatus;
}
export interface MsgBurnMintResponseProtoMsg {
  typeUrl: "/akash.bme.v1.MsgBurnMintResponse";
  value: Uint8Array;
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgBurnMintResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnMintResponse
 */
export interface MsgBurnMintResponseAmino {
  id: LedgerRecordIDAmino;
  status?: LedgerRecordStatus;
}
export interface MsgBurnMintResponseAminoMsg {
  type: "/akash.bme.v1.MsgBurnMintResponse";
  value: MsgBurnMintResponseAmino;
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgMintACTResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgMintACTResponse
 */
export interface MsgMintACTResponse {
  id: LedgerRecordID;
  status: LedgerRecordStatus;
}
export interface MsgMintACTResponseProtoMsg {
  typeUrl: "/akash.bme.v1.MsgMintACTResponse";
  value: Uint8Array;
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgMintACTResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgMintACTResponse
 */
export interface MsgMintACTResponseAmino {
  id: LedgerRecordIDAmino;
  status?: LedgerRecordStatus;
}
export interface MsgMintACTResponseAminoMsg {
  type: "/akash.bme.v1.MsgMintACTResponse";
  value: MsgMintACTResponseAmino;
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgBurnACTResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnACTResponse
 */
export interface MsgBurnACTResponse {
  id: LedgerRecordID;
  status: LedgerRecordStatus;
}
export interface MsgBurnACTResponseProtoMsg {
  typeUrl: "/akash.bme.v1.MsgBurnACTResponse";
  value: Uint8Array;
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgBurnACTResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnACTResponse
 */
export interface MsgBurnACTResponseAmino {
  id: LedgerRecordIDAmino;
  status?: LedgerRecordStatus;
}
export interface MsgBurnACTResponseAminoMsg {
  type: "/akash.bme.v1.MsgBurnACTResponse";
  value: MsgBurnACTResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams defines the message for updating module parameters
 * @name MsgUpdateParams
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/akash.bme.v1.MsgUpdateParams",
  aminoType: "akash/bme/v1/MsgUpdateParams",
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "akash/bme/v1/MsgUpdateParams",
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
      typeUrl: "/akash.bme.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse is the response type for MsgUpdateParams
 * @name MsgUpdateParamsResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/akash.bme.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/akash.bme.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundVault(): MsgFundVault {
  return {
    authority: "",
    amount: Coin.fromPartial({}),
    source: ""
  };
}
/**
 * MsgFundVault defines the message for funding the BME vault with AKT
 * This is used to provide an initial volatility buffer
 * @name MsgFundVault
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgFundVault
 */
export const MsgFundVault = {
  typeUrl: "/akash.bme.v1.MsgFundVault",
  aminoType: "akash/bme/v1/MsgFundVault",
  encode(message: MsgFundVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundVault>): MsgFundVault {
    const message = createBaseMsgFundVault();
    message.authority = object.authority ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.source = object.source ?? "";
    return message;
  },
  fromAmino(object: MsgFundVaultAmino): MsgFundVault {
    const message = createBaseMsgFundVault();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: MsgFundVault): MsgFundVaultAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.source = message.source === "" ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: MsgFundVaultAminoMsg): MsgFundVault {
    return MsgFundVault.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundVault): MsgFundVaultAminoMsg {
    return {
      type: "akash/bme/v1/MsgFundVault",
      value: MsgFundVault.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundVaultProtoMsg): MsgFundVault {
    return MsgFundVault.decode(message.value);
  },
  toProto(message: MsgFundVault): Uint8Array {
    return MsgFundVault.encode(message).finish();
  },
  toProtoMsg(message: MsgFundVault): MsgFundVaultProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgFundVault",
      value: MsgFundVault.encode(message).finish()
    };
  }
};
function createBaseMsgFundVaultResponse(): MsgFundVaultResponse {
  return {};
}
/**
 * MsgFundVaultResponse is the response type for MsgFundVault
 * @name MsgFundVaultResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgFundVaultResponse
 */
export const MsgFundVaultResponse = {
  typeUrl: "/akash.bme.v1.MsgFundVaultResponse",
  encode(_: MsgFundVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundVaultResponse();
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
  fromPartial(_: DeepPartial<MsgFundVaultResponse>): MsgFundVaultResponse {
    const message = createBaseMsgFundVaultResponse();
    return message;
  },
  fromAmino(_: MsgFundVaultResponseAmino): MsgFundVaultResponse {
    const message = createBaseMsgFundVaultResponse();
    return message;
  },
  toAmino(_: MsgFundVaultResponse): MsgFundVaultResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundVaultResponseAminoMsg): MsgFundVaultResponse {
    return MsgFundVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundVaultResponseProtoMsg): MsgFundVaultResponse {
    return MsgFundVaultResponse.decode(message.value);
  },
  toProto(message: MsgFundVaultResponse): Uint8Array {
    return MsgFundVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundVaultResponse): MsgFundVaultResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgFundVaultResponse",
      value: MsgFundVaultResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnMint(): MsgBurnMint {
  return {
    owner: "",
    to: "",
    coinsToBurn: Coin.fromPartial({}),
    denomToMint: ""
  };
}
/**
 * MsgBurnMint defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgBurnMint
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnMint
 */
export const MsgBurnMint = {
  typeUrl: "/akash.bme.v1.MsgBurnMint",
  aminoType: "akash/bme/v1/MsgBurnMint",
  encode(message: MsgBurnMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.coinsToBurn !== undefined) {
      Coin.encode(message.coinsToBurn, writer.uint32(26).fork()).ldelim();
    }
    if (message.denomToMint !== "") {
      writer.uint32(34).string(message.denomToMint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.coinsToBurn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.denomToMint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnMint>): MsgBurnMint {
    const message = createBaseMsgBurnMint();
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.coinsToBurn = object.coinsToBurn !== undefined && object.coinsToBurn !== null ? Coin.fromPartial(object.coinsToBurn) : undefined;
    message.denomToMint = object.denomToMint ?? "";
    return message;
  },
  fromAmino(object: MsgBurnMintAmino): MsgBurnMint {
    const message = createBaseMsgBurnMint();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.coins_to_burn !== undefined && object.coins_to_burn !== null) {
      message.coinsToBurn = Coin.fromAmino(object.coins_to_burn);
    }
    if (object.denom_to_mint !== undefined && object.denom_to_mint !== null) {
      message.denomToMint = object.denom_to_mint;
    }
    return message;
  },
  toAmino(message: MsgBurnMint): MsgBurnMintAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.to = message.to ?? "";
    obj.coins_to_burn = message.coinsToBurn ? Coin.toAmino(message.coinsToBurn) : Coin.toAmino(Coin.fromPartial({}));
    obj.denom_to_mint = message.denomToMint ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgBurnMintAminoMsg): MsgBurnMint {
    return MsgBurnMint.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurnMint): MsgBurnMintAminoMsg {
    return {
      type: "akash/bme/v1/MsgBurnMint",
      value: MsgBurnMint.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnMintProtoMsg): MsgBurnMint {
    return MsgBurnMint.decode(message.value);
  },
  toProto(message: MsgBurnMint): Uint8Array {
    return MsgBurnMint.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnMint): MsgBurnMintProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgBurnMint",
      value: MsgBurnMint.encode(message).finish()
    };
  }
};
function createBaseMsgMintACT(): MsgMintACT {
  return {
    owner: "",
    to: "",
    coinsToBurn: Coin.fromPartial({})
  };
}
/**
 * MsgMintACT defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgMintACT
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgMintACT
 */
export const MsgMintACT = {
  typeUrl: "/akash.bme.v1.MsgMintACT",
  aminoType: "akash/bme/v1/MsgMintACT",
  encode(message: MsgMintACT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.coinsToBurn !== undefined) {
      Coin.encode(message.coinsToBurn, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintACT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintACT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.coinsToBurn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintACT>): MsgMintACT {
    const message = createBaseMsgMintACT();
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.coinsToBurn = object.coinsToBurn !== undefined && object.coinsToBurn !== null ? Coin.fromPartial(object.coinsToBurn) : undefined;
    return message;
  },
  fromAmino(object: MsgMintACTAmino): MsgMintACT {
    const message = createBaseMsgMintACT();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.coins_to_burn !== undefined && object.coins_to_burn !== null) {
      message.coinsToBurn = Coin.fromAmino(object.coins_to_burn);
    }
    return message;
  },
  toAmino(message: MsgMintACT): MsgMintACTAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.to = message.to ?? "";
    obj.coins_to_burn = message.coinsToBurn ? Coin.toAmino(message.coinsToBurn) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgMintACTAminoMsg): MsgMintACT {
    return MsgMintACT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintACT): MsgMintACTAminoMsg {
    return {
      type: "akash/bme/v1/MsgMintACT",
      value: MsgMintACT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintACTProtoMsg): MsgMintACT {
    return MsgMintACT.decode(message.value);
  },
  toProto(message: MsgMintACT): Uint8Array {
    return MsgMintACT.encode(message).finish();
  },
  toProtoMsg(message: MsgMintACT): MsgMintACTProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgMintACT",
      value: MsgMintACT.encode(message).finish()
    };
  }
};
function createBaseMsgBurnACT(): MsgBurnACT {
  return {
    owner: "",
    to: "",
    coinsToBurn: Coin.fromPartial({})
  };
}
/**
 * MsgMintACT defines the message for burning one token to mint another
 * Allows burning AKT to mint ACT, or burning unused ACT back to AKT
 * @name MsgBurnACT
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnACT
 */
export const MsgBurnACT = {
  typeUrl: "/akash.bme.v1.MsgBurnACT",
  aminoType: "akash/bme/v1/MsgBurnACT",
  encode(message: MsgBurnACT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.coinsToBurn !== undefined) {
      Coin.encode(message.coinsToBurn, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnACT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnACT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.coinsToBurn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnACT>): MsgBurnACT {
    const message = createBaseMsgBurnACT();
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.coinsToBurn = object.coinsToBurn !== undefined && object.coinsToBurn !== null ? Coin.fromPartial(object.coinsToBurn) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnACTAmino): MsgBurnACT {
    const message = createBaseMsgBurnACT();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.coins_to_burn !== undefined && object.coins_to_burn !== null) {
      message.coinsToBurn = Coin.fromAmino(object.coins_to_burn);
    }
    return message;
  },
  toAmino(message: MsgBurnACT): MsgBurnACTAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.to = message.to ?? "";
    obj.coins_to_burn = message.coinsToBurn ? Coin.toAmino(message.coinsToBurn) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgBurnACTAminoMsg): MsgBurnACT {
    return MsgBurnACT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurnACT): MsgBurnACTAminoMsg {
    return {
      type: "akash/bme/v1/MsgBurnACT",
      value: MsgBurnACT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnACTProtoMsg): MsgBurnACT {
    return MsgBurnACT.decode(message.value);
  },
  toProto(message: MsgBurnACT): Uint8Array {
    return MsgBurnACT.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnACT): MsgBurnACTProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgBurnACT",
      value: MsgBurnACT.encode(message).finish()
    };
  }
};
function createBaseMsgBurnMintResponse(): MsgBurnMintResponse {
  return {
    id: LedgerRecordID.fromPartial({}),
    status: 0
  };
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgBurnMintResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnMintResponse
 */
export const MsgBurnMintResponse = {
  typeUrl: "/akash.bme.v1.MsgBurnMintResponse",
  encode(message: MsgBurnMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnMintResponse>): MsgBurnMintResponse {
    const message = createBaseMsgBurnMintResponse();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgBurnMintResponseAmino): MsgBurnMintResponse {
    const message = createBaseMsgBurnMintResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgBurnMintResponse): MsgBurnMintResponseAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgBurnMintResponseAminoMsg): MsgBurnMintResponse {
    return MsgBurnMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnMintResponseProtoMsg): MsgBurnMintResponse {
    return MsgBurnMintResponse.decode(message.value);
  },
  toProto(message: MsgBurnMintResponse): Uint8Array {
    return MsgBurnMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnMintResponse): MsgBurnMintResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgBurnMintResponse",
      value: MsgBurnMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintACTResponse(): MsgMintACTResponse {
  return {
    id: LedgerRecordID.fromPartial({}),
    status: 0
  };
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgMintACTResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgMintACTResponse
 */
export const MsgMintACTResponse = {
  typeUrl: "/akash.bme.v1.MsgMintACTResponse",
  encode(message: MsgMintACTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintACTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintACTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintACTResponse>): MsgMintACTResponse {
    const message = createBaseMsgMintACTResponse();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgMintACTResponseAmino): MsgMintACTResponse {
    const message = createBaseMsgMintACTResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgMintACTResponse): MsgMintACTResponseAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgMintACTResponseAminoMsg): MsgMintACTResponse {
    return MsgMintACTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintACTResponseProtoMsg): MsgMintACTResponse {
    return MsgMintACTResponse.decode(message.value);
  },
  toProto(message: MsgMintACTResponse): Uint8Array {
    return MsgMintACTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintACTResponse): MsgMintACTResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgMintACTResponse",
      value: MsgMintACTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnACTResponse(): MsgBurnACTResponse {
  return {
    id: LedgerRecordID.fromPartial({}),
    status: 0
  };
}
/**
 * MsgBurnMintResponse is the response type for MsgBurnMint
 * @name MsgBurnACTResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.MsgBurnACTResponse
 */
export const MsgBurnACTResponse = {
  typeUrl: "/akash.bme.v1.MsgBurnACTResponse",
  encode(message: MsgBurnACTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnACTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnACTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnACTResponse>): MsgBurnACTResponse {
    const message = createBaseMsgBurnACTResponse();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgBurnACTResponseAmino): MsgBurnACTResponse {
    const message = createBaseMsgBurnACTResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgBurnACTResponse): MsgBurnACTResponseAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgBurnACTResponseAminoMsg): MsgBurnACTResponse {
    return MsgBurnACTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnACTResponseProtoMsg): MsgBurnACTResponse {
    return MsgBurnACTResponse.decode(message.value);
  },
  toProto(message: MsgBurnACTResponse): Uint8Array {
    return MsgBurnACTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnACTResponse): MsgBurnACTResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.MsgBurnACTResponse",
      value: MsgBurnACTResponse.encode(message).finish()
    };
  }
};