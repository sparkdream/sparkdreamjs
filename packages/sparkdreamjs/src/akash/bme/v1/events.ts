//@ts-nocheck
import { MintStatus, LedgerRecordID, LedgerRecordIDAmino, CoinPrice, CoinPriceAmino, LedgerCanceledRecord_BMCancelReason } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * EventCircuitBreakerStatusChange is emitted when circuit breaker status changes
 * @name EventMintStatusChange
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventMintStatusChange
 */
export interface EventMintStatusChange {
  /**
   * previous_status is the previous status
   */
  previousStatus: MintStatus;
  /**
   * new_status is the new status
   */
  newStatus: MintStatus;
  /**
   * collateral_ratio is the CR that triggered the change
   */
  collateralRatio: string;
}
export interface EventMintStatusChangeProtoMsg {
  typeUrl: "/akash.bme.v1.EventMintStatusChange";
  value: Uint8Array;
}
/**
 * EventCircuitBreakerStatusChange is emitted when circuit breaker status changes
 * @name EventMintStatusChangeAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventMintStatusChange
 */
export interface EventMintStatusChangeAmino {
  /**
   * previous_status is the previous status
   */
  previous_status?: MintStatus;
  /**
   * new_status is the new status
   */
  new_status?: MintStatus;
  /**
   * collateral_ratio is the CR that triggered the change
   */
  collateral_ratio?: string;
}
export interface EventMintStatusChangeAminoMsg {
  type: "/akash.bme.v1.EventMintStatusChange";
  value: EventMintStatusChangeAmino;
}
/**
 * EventVaultFunded is emitted when the vault is seeded with AKT
 * @name EventVaultFunded
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventVaultFunded
 */
export interface EventVaultFunded {
  /**
   * amount is the AKT amount added to vault
   */
  amount: Coin;
  /**
   * source is where the funds came from
   */
  source: string;
  /**
   * new_vault_balance is the new vault balance
   */
  newVaultBalance: Coin;
}
export interface EventVaultFundedProtoMsg {
  typeUrl: "/akash.bme.v1.EventVaultFunded";
  value: Uint8Array;
}
/**
 * EventVaultFunded is emitted when the vault is seeded with AKT
 * @name EventVaultFundedAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventVaultFunded
 */
export interface EventVaultFundedAmino {
  /**
   * amount is the AKT amount added to vault
   */
  amount?: CoinAmino;
  /**
   * source is where the funds came from
   */
  source?: string;
  /**
   * new_vault_balance is the new vault balance
   */
  new_vault_balance?: CoinAmino;
}
export interface EventVaultFundedAminoMsg {
  type: "/akash.bme.v1.EventVaultFunded";
  value: EventVaultFundedAmino;
}
/**
 * EventLedgerRecordExecuted emitted information of burn/mint event of token A burn to mint token B
 * @name EventLedgerRecordExecuted
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventLedgerRecordExecuted
 */
export interface EventLedgerRecordExecuted {
  /**
   * burned_from source address of the tokens burned
   */
  id: LedgerRecordID;
  /**
   * burned_from source address of the tokens burned
   */
  burnedFrom: string;
  /**
   * minted_to destination address of the tokens minted
   */
  mintedTo: string;
  /**
   * module is module account performing burn
   */
  burner: string;
  /**
   * module is module account performing mint
   */
  minter: string;
  /**
   * burned is the coin burned at price
   */
  burned?: CoinPrice;
  /**
   * minted is coin minted at price
   */
  minted?: CoinPrice;
  spread: Coin;
  remintCreditIssued?: CoinPrice;
  remintCreditAccrued?: CoinPrice;
}
export interface EventLedgerRecordExecutedProtoMsg {
  typeUrl: "/akash.bme.v1.EventLedgerRecordExecuted";
  value: Uint8Array;
}
/**
 * EventLedgerRecordExecuted emitted information of burn/mint event of token A burn to mint token B
 * @name EventLedgerRecordExecutedAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventLedgerRecordExecuted
 */
export interface EventLedgerRecordExecutedAmino {
  /**
   * burned_from source address of the tokens burned
   */
  id: LedgerRecordIDAmino;
  /**
   * burned_from source address of the tokens burned
   */
  burned_from: string;
  /**
   * minted_to destination address of the tokens minted
   */
  minted_to: string;
  /**
   * module is module account performing burn
   */
  burner: string;
  /**
   * module is module account performing mint
   */
  minter: string;
  /**
   * burned is the coin burned at price
   */
  burned: CoinPriceAmino;
  /**
   * minted is coin minted at price
   */
  minted: CoinPriceAmino;
  spread: CoinAmino;
  remint_credit_issued: CoinPriceAmino;
  remint_credit_accrued: CoinPriceAmino;
}
export interface EventLedgerRecordExecutedAminoMsg {
  type: "/akash.bme.v1.EventLedgerRecordExecuted";
  value: EventLedgerRecordExecutedAmino;
}
/**
 * EventLedgerRecordCanceled emitted information of unsuccessful burn/mint event
 * @name EventLedgerRecordCanceled
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventLedgerRecordCanceled
 */
export interface EventLedgerRecordCanceled {
  /**
   * burned_from source address of the tokens burned
   */
  id: LedgerRecordID;
  /**
   * fail_reason
   */
  cancelReason: LedgerCanceledRecord_BMCancelReason;
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
export interface EventLedgerRecordCanceledProtoMsg {
  typeUrl: "/akash.bme.v1.EventLedgerRecordCanceled";
  value: Uint8Array;
}
/**
 * EventLedgerRecordCanceled emitted information of unsuccessful burn/mint event
 * @name EventLedgerRecordCanceledAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventLedgerRecordCanceled
 */
export interface EventLedgerRecordCanceledAmino {
  /**
   * burned_from source address of the tokens burned
   */
  id: LedgerRecordIDAmino;
  /**
   * fail_reason
   */
  cancel_reason: LedgerCanceledRecord_BMCancelReason;
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
export interface EventLedgerRecordCanceledAminoMsg {
  type: "/akash.bme.v1.EventLedgerRecordCanceled";
  value: EventLedgerRecordCanceledAmino;
}
function createBaseEventMintStatusChange(): EventMintStatusChange {
  return {
    previousStatus: 0,
    newStatus: 0,
    collateralRatio: ""
  };
}
/**
 * EventCircuitBreakerStatusChange is emitted when circuit breaker status changes
 * @name EventMintStatusChange
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventMintStatusChange
 */
export const EventMintStatusChange = {
  typeUrl: "/akash.bme.v1.EventMintStatusChange",
  encode(message: EventMintStatusChange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.previousStatus !== 0) {
      writer.uint32(8).int32(message.previousStatus);
    }
    if (message.newStatus !== 0) {
      writer.uint32(16).int32(message.newStatus);
    }
    if (message.collateralRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.collateralRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMintStatusChange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintStatusChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousStatus = reader.int32() as any;
          break;
        case 2:
          message.newStatus = reader.int32() as any;
          break;
        case 3:
          message.collateralRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMintStatusChange>): EventMintStatusChange {
    const message = createBaseEventMintStatusChange();
    message.previousStatus = object.previousStatus ?? 0;
    message.newStatus = object.newStatus ?? 0;
    message.collateralRatio = object.collateralRatio ?? "";
    return message;
  },
  fromAmino(object: EventMintStatusChangeAmino): EventMintStatusChange {
    const message = createBaseEventMintStatusChange();
    if (object.previous_status !== undefined && object.previous_status !== null) {
      message.previousStatus = object.previous_status;
    }
    if (object.new_status !== undefined && object.new_status !== null) {
      message.newStatus = object.new_status;
    }
    if (object.collateral_ratio !== undefined && object.collateral_ratio !== null) {
      message.collateralRatio = object.collateral_ratio;
    }
    return message;
  },
  toAmino(message: EventMintStatusChange): EventMintStatusChangeAmino {
    const obj: any = {};
    obj.previous_status = message.previousStatus === 0 ? undefined : message.previousStatus;
    obj.new_status = message.newStatus === 0 ? undefined : message.newStatus;
    obj.collateral_ratio = message.collateralRatio === "" ? undefined : message.collateralRatio;
    return obj;
  },
  fromAminoMsg(object: EventMintStatusChangeAminoMsg): EventMintStatusChange {
    return EventMintStatusChange.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintStatusChangeProtoMsg): EventMintStatusChange {
    return EventMintStatusChange.decode(message.value);
  },
  toProto(message: EventMintStatusChange): Uint8Array {
    return EventMintStatusChange.encode(message).finish();
  },
  toProtoMsg(message: EventMintStatusChange): EventMintStatusChangeProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.EventMintStatusChange",
      value: EventMintStatusChange.encode(message).finish()
    };
  }
};
function createBaseEventVaultFunded(): EventVaultFunded {
  return {
    amount: Coin.fromPartial({}),
    source: "",
    newVaultBalance: Coin.fromPartial({})
  };
}
/**
 * EventVaultFunded is emitted when the vault is seeded with AKT
 * @name EventVaultFunded
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventVaultFunded
 */
export const EventVaultFunded = {
  typeUrl: "/akash.bme.v1.EventVaultFunded",
  encode(message: EventVaultFunded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    if (message.newVaultBalance !== undefined) {
      Coin.encode(message.newVaultBalance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVaultFunded {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVaultFunded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.newVaultBalance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventVaultFunded>): EventVaultFunded {
    const message = createBaseEventVaultFunded();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.source = object.source ?? "";
    message.newVaultBalance = object.newVaultBalance !== undefined && object.newVaultBalance !== null ? Coin.fromPartial(object.newVaultBalance) : undefined;
    return message;
  },
  fromAmino(object: EventVaultFundedAmino): EventVaultFunded {
    const message = createBaseEventVaultFunded();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.new_vault_balance !== undefined && object.new_vault_balance !== null) {
      message.newVaultBalance = Coin.fromAmino(object.new_vault_balance);
    }
    return message;
  },
  toAmino(message: EventVaultFunded): EventVaultFundedAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.source = message.source === "" ? undefined : message.source;
    obj.new_vault_balance = message.newVaultBalance ? Coin.toAmino(message.newVaultBalance) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVaultFundedAminoMsg): EventVaultFunded {
    return EventVaultFunded.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVaultFundedProtoMsg): EventVaultFunded {
    return EventVaultFunded.decode(message.value);
  },
  toProto(message: EventVaultFunded): Uint8Array {
    return EventVaultFunded.encode(message).finish();
  },
  toProtoMsg(message: EventVaultFunded): EventVaultFundedProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.EventVaultFunded",
      value: EventVaultFunded.encode(message).finish()
    };
  }
};
function createBaseEventLedgerRecordExecuted(): EventLedgerRecordExecuted {
  return {
    id: LedgerRecordID.fromPartial({}),
    burnedFrom: "",
    mintedTo: "",
    burner: "",
    minter: "",
    burned: undefined,
    minted: undefined,
    spread: Coin.fromPartial({}),
    remintCreditIssued: undefined,
    remintCreditAccrued: undefined
  };
}
/**
 * EventLedgerRecordExecuted emitted information of burn/mint event of token A burn to mint token B
 * @name EventLedgerRecordExecuted
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventLedgerRecordExecuted
 */
export const EventLedgerRecordExecuted = {
  typeUrl: "/akash.bme.v1.EventLedgerRecordExecuted",
  encode(message: EventLedgerRecordExecuted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.burnedFrom !== "") {
      writer.uint32(18).string(message.burnedFrom);
    }
    if (message.mintedTo !== "") {
      writer.uint32(26).string(message.mintedTo);
    }
    if (message.burner !== "") {
      writer.uint32(34).string(message.burner);
    }
    if (message.minter !== "") {
      writer.uint32(42).string(message.minter);
    }
    if (message.burned !== undefined) {
      CoinPrice.encode(message.burned, writer.uint32(50).fork()).ldelim();
    }
    if (message.minted !== undefined) {
      CoinPrice.encode(message.minted, writer.uint32(58).fork()).ldelim();
    }
    if (message.spread !== undefined) {
      Coin.encode(message.spread, writer.uint32(66).fork()).ldelim();
    }
    if (message.remintCreditIssued !== undefined) {
      CoinPrice.encode(message.remintCreditIssued, writer.uint32(74).fork()).ldelim();
    }
    if (message.remintCreditAccrued !== undefined) {
      CoinPrice.encode(message.remintCreditAccrued, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLedgerRecordExecuted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLedgerRecordExecuted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.burnedFrom = reader.string();
          break;
        case 3:
          message.mintedTo = reader.string();
          break;
        case 4:
          message.burner = reader.string();
          break;
        case 5:
          message.minter = reader.string();
          break;
        case 6:
          message.burned = CoinPrice.decode(reader, reader.uint32());
          break;
        case 7:
          message.minted = CoinPrice.decode(reader, reader.uint32());
          break;
        case 8:
          message.spread = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.remintCreditIssued = CoinPrice.decode(reader, reader.uint32());
          break;
        case 10:
          message.remintCreditAccrued = CoinPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventLedgerRecordExecuted>): EventLedgerRecordExecuted {
    const message = createBaseEventLedgerRecordExecuted();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.burnedFrom = object.burnedFrom ?? "";
    message.mintedTo = object.mintedTo ?? "";
    message.burner = object.burner ?? "";
    message.minter = object.minter ?? "";
    message.burned = object.burned !== undefined && object.burned !== null ? CoinPrice.fromPartial(object.burned) : undefined;
    message.minted = object.minted !== undefined && object.minted !== null ? CoinPrice.fromPartial(object.minted) : undefined;
    message.spread = object.spread !== undefined && object.spread !== null ? Coin.fromPartial(object.spread) : undefined;
    message.remintCreditIssued = object.remintCreditIssued !== undefined && object.remintCreditIssued !== null ? CoinPrice.fromPartial(object.remintCreditIssued) : undefined;
    message.remintCreditAccrued = object.remintCreditAccrued !== undefined && object.remintCreditAccrued !== null ? CoinPrice.fromPartial(object.remintCreditAccrued) : undefined;
    return message;
  },
  fromAmino(object: EventLedgerRecordExecutedAmino): EventLedgerRecordExecuted {
    const message = createBaseEventLedgerRecordExecuted();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.burned_from !== undefined && object.burned_from !== null) {
      message.burnedFrom = object.burned_from;
    }
    if (object.minted_to !== undefined && object.minted_to !== null) {
      message.mintedTo = object.minted_to;
    }
    if (object.burner !== undefined && object.burner !== null) {
      message.burner = object.burner;
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = CoinPrice.fromAmino(object.burned);
    }
    if (object.minted !== undefined && object.minted !== null) {
      message.minted = CoinPrice.fromAmino(object.minted);
    }
    if (object.spread !== undefined && object.spread !== null) {
      message.spread = Coin.fromAmino(object.spread);
    }
    if (object.remint_credit_issued !== undefined && object.remint_credit_issued !== null) {
      message.remintCreditIssued = CoinPrice.fromAmino(object.remint_credit_issued);
    }
    if (object.remint_credit_accrued !== undefined && object.remint_credit_accrued !== null) {
      message.remintCreditAccrued = CoinPrice.fromAmino(object.remint_credit_accrued);
    }
    return message;
  },
  toAmino(message: EventLedgerRecordExecuted): EventLedgerRecordExecutedAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.burned_from = message.burnedFrom ?? "";
    obj.minted_to = message.mintedTo ?? "";
    obj.burner = message.burner ?? "";
    obj.minter = message.minter ?? "";
    obj.burned = message.burned ? CoinPrice.toAmino(message.burned) : CoinPrice.toAmino(CoinPrice.fromPartial({}));
    obj.minted = message.minted ? CoinPrice.toAmino(message.minted) : CoinPrice.toAmino(CoinPrice.fromPartial({}));
    obj.spread = message.spread ? Coin.toAmino(message.spread) : Coin.toAmino(Coin.fromPartial({}));
    obj.remint_credit_issued = message.remintCreditIssued ? CoinPrice.toAmino(message.remintCreditIssued) : CoinPrice.toAmino(CoinPrice.fromPartial({}));
    obj.remint_credit_accrued = message.remintCreditAccrued ? CoinPrice.toAmino(message.remintCreditAccrued) : CoinPrice.toAmino(CoinPrice.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventLedgerRecordExecutedAminoMsg): EventLedgerRecordExecuted {
    return EventLedgerRecordExecuted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLedgerRecordExecutedProtoMsg): EventLedgerRecordExecuted {
    return EventLedgerRecordExecuted.decode(message.value);
  },
  toProto(message: EventLedgerRecordExecuted): Uint8Array {
    return EventLedgerRecordExecuted.encode(message).finish();
  },
  toProtoMsg(message: EventLedgerRecordExecuted): EventLedgerRecordExecutedProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.EventLedgerRecordExecuted",
      value: EventLedgerRecordExecuted.encode(message).finish()
    };
  }
};
function createBaseEventLedgerRecordCanceled(): EventLedgerRecordCanceled {
  return {
    id: LedgerRecordID.fromPartial({}),
    cancelReason: 0,
    owner: "",
    to: "",
    coinsToBurn: Coin.fromPartial({}),
    denomToMint: ""
  };
}
/**
 * EventLedgerRecordCanceled emitted information of unsuccessful burn/mint event
 * @name EventLedgerRecordCanceled
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.EventLedgerRecordCanceled
 */
export const EventLedgerRecordCanceled = {
  typeUrl: "/akash.bme.v1.EventLedgerRecordCanceled",
  encode(message: EventLedgerRecordCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.cancelReason !== 0) {
      writer.uint32(16).int32(message.cancelReason);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.coinsToBurn !== undefined) {
      Coin.encode(message.coinsToBurn, writer.uint32(42).fork()).ldelim();
    }
    if (message.denomToMint !== "") {
      writer.uint32(50).string(message.denomToMint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLedgerRecordCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLedgerRecordCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.cancelReason = reader.int32() as any;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.coinsToBurn = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.denomToMint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventLedgerRecordCanceled>): EventLedgerRecordCanceled {
    const message = createBaseEventLedgerRecordCanceled();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.cancelReason = object.cancelReason ?? 0;
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.coinsToBurn = object.coinsToBurn !== undefined && object.coinsToBurn !== null ? Coin.fromPartial(object.coinsToBurn) : undefined;
    message.denomToMint = object.denomToMint ?? "";
    return message;
  },
  fromAmino(object: EventLedgerRecordCanceledAmino): EventLedgerRecordCanceled {
    const message = createBaseEventLedgerRecordCanceled();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.cancel_reason !== undefined && object.cancel_reason !== null) {
      message.cancelReason = object.cancel_reason;
    }
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
  toAmino(message: EventLedgerRecordCanceled): EventLedgerRecordCanceledAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.cancel_reason = message.cancelReason ?? 0;
    obj.owner = message.owner ?? "";
    obj.to = message.to ?? "";
    obj.coins_to_burn = message.coinsToBurn ? Coin.toAmino(message.coinsToBurn) : Coin.toAmino(Coin.fromPartial({}));
    obj.denom_to_mint = message.denomToMint ?? "";
    return obj;
  },
  fromAminoMsg(object: EventLedgerRecordCanceledAminoMsg): EventLedgerRecordCanceled {
    return EventLedgerRecordCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLedgerRecordCanceledProtoMsg): EventLedgerRecordCanceled {
    return EventLedgerRecordCanceled.decode(message.value);
  },
  toProto(message: EventLedgerRecordCanceled): Uint8Array {
    return EventLedgerRecordCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventLedgerRecordCanceled): EventLedgerRecordCanceledProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.EventLedgerRecordCanceled",
      value: EventLedgerRecordCanceled.encode(message).finish()
    };
  }
};