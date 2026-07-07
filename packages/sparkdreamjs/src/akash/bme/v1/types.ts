//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/** MintStatus indicates the current state of mint */
export enum MintStatus {
  /** mint_status_unspecified - MINT_STATUS_UNSPECIFIED is the default value */
  mint_status_unspecified = 0,
  /** mint_status_healthy - MINT_STATUS_HEALTHY indicates normal operation (CR > warn threshold) */
  mint_status_healthy = 1,
  /** mint_status_warning - MINT_STATUS_WARNING indicates CR is below warning threshold */
  mint_status_warning = 2,
  /** mint_status_halt_cr - MINT_STATUS_HALT_CR indicates CR is below halt threshold, mints paused */
  mint_status_halt_cr = 3,
  /** mint_status_halt_oracle - MINT_STATUS_HALT_ORACLE indicates circuit breaker tripped due to unhealthy oracle price */
  mint_status_halt_oracle = 4,
  UNRECOGNIZED = -1,
}
export const MintStatusAmino = MintStatus;
export function mintStatusFromJSON(object: any): MintStatus {
  switch (object) {
    case 0:
    case "mint_status_unspecified":
      return MintStatus.mint_status_unspecified;
    case 1:
    case "mint_status_healthy":
      return MintStatus.mint_status_healthy;
    case 2:
    case "mint_status_warning":
      return MintStatus.mint_status_warning;
    case 3:
    case "mint_status_halt_cr":
      return MintStatus.mint_status_halt_cr;
    case 4:
    case "mint_status_halt_oracle":
      return MintStatus.mint_status_halt_oracle;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MintStatus.UNRECOGNIZED;
  }
}
export function mintStatusToJSON(object: MintStatus): string {
  switch (object) {
    case MintStatus.mint_status_unspecified:
      return "mint_status_unspecified";
    case MintStatus.mint_status_healthy:
      return "mint_status_healthy";
    case MintStatus.mint_status_warning:
      return "mint_status_warning";
    case MintStatus.mint_status_halt_cr:
      return "mint_status_halt_cr";
    case MintStatus.mint_status_halt_oracle:
      return "mint_status_halt_oracle";
    case MintStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LedgerRecordStatus indicates the current state of a burn/mint ledger record */
export enum LedgerRecordStatus {
  /**
   * ledger_record_status_invalid - LEDGER_RECORD_STATUS_INVALID is the default/uninitialized value
   * This status should never appear in a valid ledger record
   */
  ledger_record_status_invalid = 0,
  /**
   * ledger_record_status_pending - LEDGER_RECORD_STATUS_PENDING indicates a burn/mint operation has been initiated
   * but not yet executed (e.g., waiting for oracle price or circuit breaker clearance)
   */
  ledger_record_status_pending = 1,
  /**
   * ledger_record_status_executed - LEDGER_RECORD_STATUS_EXECUTED indicates the burn/mint operation has been
   * successfully completed and tokens have been burned and minted
   */
  ledger_record_status_executed = 2,
  /**
   * ledger_record_status_canceled - LEDGER_RECORD_STATUS_CANCELED indicates the burn/mint operation has encountered error and funds have been returned to the owner
   * successfully completed and tokens have been burned and minted
   */
  ledger_record_status_canceled = 3,
  UNRECOGNIZED = -1,
}
export const LedgerRecordStatusAmino = LedgerRecordStatus;
export function ledgerRecordStatusFromJSON(object: any): LedgerRecordStatus {
  switch (object) {
    case 0:
    case "ledger_record_status_invalid":
      return LedgerRecordStatus.ledger_record_status_invalid;
    case 1:
    case "ledger_record_status_pending":
      return LedgerRecordStatus.ledger_record_status_pending;
    case 2:
    case "ledger_record_status_executed":
      return LedgerRecordStatus.ledger_record_status_executed;
    case 3:
    case "ledger_record_status_canceled":
      return LedgerRecordStatus.ledger_record_status_canceled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LedgerRecordStatus.UNRECOGNIZED;
  }
}
export function ledgerRecordStatusToJSON(object: LedgerRecordStatus): string {
  switch (object) {
    case LedgerRecordStatus.ledger_record_status_invalid:
      return "ledger_record_status_invalid";
    case LedgerRecordStatus.ledger_record_status_pending:
      return "ledger_record_status_pending";
    case LedgerRecordStatus.ledger_record_status_executed:
      return "ledger_record_status_executed";
    case LedgerRecordStatus.ledger_record_status_canceled:
      return "ledger_record_status_canceled";
    case LedgerRecordStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BMCancelReason is an enum indicating reasons of failure for burn/mint request */
export enum LedgerCanceledRecord_BMCancelReason {
  /** unknown - Prefix should start with 0 in enum. So declaring dummy state. */
  unknown = 0,
  /** epsilon - BMCancelReasonEpsilon the result of conversion is below the smallest meaningful difference (10^-6) */
  epsilon = 1,
  /** zero_price - BMCancelReasonZeroPrice oracle price is zero */
  zero_price = 2,
  /** insufficient_funds - BMCancelReasonInsufficientFunds insufficient vault/supply funds */
  insufficient_funds = 3,
  /** invalid_denom - BMCancelReasonInvalidDenom denomination is not registered */
  invalid_denom = 4,
  /** invalid_amount - BMCancelReasonInvalidAmount zero or invalid burn amount */
  invalid_amount = 5,
  /** minimum_mint - BMCancelReasonMinimumMint mint output below minimum threshold */
  minimum_mint = 6,
  /** mint_failed - BMCancelReasonMintFailed bank MintCoins operation failed */
  mint_failed = 7,
  /** burn_failed - BMCancelReasonBurnFailed bank BurnCoins operation failed */
  burn_failed = 8,
  /** max_attempts - BMCancelReasonMaxAttempts exceeded maximum pending processing attempts */
  max_attempts = 9,
  UNRECOGNIZED = -1,
}
export const LedgerCanceledRecord_BMCancelReasonAmino = LedgerCanceledRecord_BMCancelReason;
export function ledgerCanceledRecord_BMCancelReasonFromJSON(object: any): LedgerCanceledRecord_BMCancelReason {
  switch (object) {
    case 0:
    case "unknown":
      return LedgerCanceledRecord_BMCancelReason.unknown;
    case 1:
    case "epsilon":
      return LedgerCanceledRecord_BMCancelReason.epsilon;
    case 2:
    case "zero_price":
      return LedgerCanceledRecord_BMCancelReason.zero_price;
    case 3:
    case "insufficient_funds":
      return LedgerCanceledRecord_BMCancelReason.insufficient_funds;
    case 4:
    case "invalid_denom":
      return LedgerCanceledRecord_BMCancelReason.invalid_denom;
    case 5:
    case "invalid_amount":
      return LedgerCanceledRecord_BMCancelReason.invalid_amount;
    case 6:
    case "minimum_mint":
      return LedgerCanceledRecord_BMCancelReason.minimum_mint;
    case 7:
    case "mint_failed":
      return LedgerCanceledRecord_BMCancelReason.mint_failed;
    case 8:
    case "burn_failed":
      return LedgerCanceledRecord_BMCancelReason.burn_failed;
    case 9:
    case "max_attempts":
      return LedgerCanceledRecord_BMCancelReason.max_attempts;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LedgerCanceledRecord_BMCancelReason.UNRECOGNIZED;
  }
}
export function ledgerCanceledRecord_BMCancelReasonToJSON(object: LedgerCanceledRecord_BMCancelReason): string {
  switch (object) {
    case LedgerCanceledRecord_BMCancelReason.unknown:
      return "unknown";
    case LedgerCanceledRecord_BMCancelReason.epsilon:
      return "epsilon";
    case LedgerCanceledRecord_BMCancelReason.zero_price:
      return "zero_price";
    case LedgerCanceledRecord_BMCancelReason.insufficient_funds:
      return "insufficient_funds";
    case LedgerCanceledRecord_BMCancelReason.invalid_denom:
      return "invalid_denom";
    case LedgerCanceledRecord_BMCancelReason.invalid_amount:
      return "invalid_amount";
    case LedgerCanceledRecord_BMCancelReason.minimum_mint:
      return "minimum_mint";
    case LedgerCanceledRecord_BMCancelReason.mint_failed:
      return "mint_failed";
    case LedgerCanceledRecord_BMCancelReason.burn_failed:
      return "burn_failed";
    case LedgerCanceledRecord_BMCancelReason.max_attempts:
      return "max_attempts";
    case LedgerCanceledRecord_BMCancelReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * LedgerID uniquely identifies a ledger entry by block height and sequence number
 * @name LedgerID
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerID
 */
export interface LedgerID {
  /**
   * height is the block height when the ledger entry was created
   */
  height: bigint;
  /**
   * sequence is the sequence number within the block (for ordering)
   */
  sequence: bigint;
}
export interface LedgerIDProtoMsg {
  typeUrl: "/akash.bme.v1.LedgerID";
  value: Uint8Array;
}
/**
 * LedgerID uniquely identifies a ledger entry by block height and sequence number
 * @name LedgerIDAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerID
 */
export interface LedgerIDAmino {
  /**
   * height is the block height when the ledger entry was created
   */
  height: string;
  /**
   * sequence is the sequence number within the block (for ordering)
   */
  sequence: string;
}
export interface LedgerIDAminoMsg {
  type: "/akash.bme.v1.LedgerID";
  value: LedgerIDAmino;
}
/**
 * CollateralRatio represents the current collateral ratio
 * @name CollateralRatio
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.CollateralRatio
 */
export interface CollateralRatio {
  /**
   * ratio is CR = (VaultAKT * Price) / OutstandingACT
   */
  ratio: string;
  /**
   * status indicates the current circuit breaker status
   */
  status: MintStatus;
  /**
   * reference_price is the price used to calculate CR
   */
  referencePrice: string;
}
export interface CollateralRatioProtoMsg {
  typeUrl: "/akash.bme.v1.CollateralRatio";
  value: Uint8Array;
}
/**
 * CollateralRatio represents the current collateral ratio
 * @name CollateralRatioAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.CollateralRatio
 */
export interface CollateralRatioAmino {
  /**
   * ratio is CR = (VaultAKT * Price) / OutstandingACT
   */
  ratio?: string;
  /**
   * status indicates the current circuit breaker status
   */
  status?: MintStatus;
  /**
   * reference_price is the price used to calculate CR
   */
  reference_price?: string;
}
export interface CollateralRatioAminoMsg {
  type: "/akash.bme.v1.CollateralRatio";
  value: CollateralRatioAmino;
}
/**
 * State tracks net burn metrics since BME start
 * @name State
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.State
 */
export interface State {
  /**
   * burned is the cumulative burn for tracked tokens
   */
  balances: Coin[];
  /**
   * burned is the cumulative burn for tracked tokens
   */
  totalBurned: Coin[];
  /**
   * minted is the cumulative mint back for tracked tokens
   */
  totalMinted: Coin[];
  /**
   * remint_credits tracks available credits for reminting tokens
   * (e.g., from previous burns that can be reminted without additional collateral)
   */
  remintCredits: Coin[];
}
export interface StateProtoMsg {
  typeUrl: "/akash.bme.v1.State";
  value: Uint8Array;
}
/**
 * State tracks net burn metrics since BME start
 * @name StateAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.State
 */
export interface StateAmino {
  /**
   * burned is the cumulative burn for tracked tokens
   */
  balances?: CoinAmino[];
  /**
   * burned is the cumulative burn for tracked tokens
   */
  total_burned?: CoinAmino[];
  /**
   * minted is the cumulative mint back for tracked tokens
   */
  total_minted?: CoinAmino[];
  /**
   * remint_credits tracks available credits for reminting tokens
   * (e.g., from previous burns that can be reminted without additional collateral)
   */
  remint_credits?: CoinAmino[];
}
export interface StateAminoMsg {
  type: "/akash.bme.v1.State";
  value: StateAmino;
}
/**
 * CoinPrice represents a coin amount with its associated oracle price at a specific point in time
 * @name CoinPrice
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.CoinPrice
 */
export interface CoinPrice {
  /**
   * coin is the token amount
   */
  coin: Coin;
  /**
   * price (at oracle) of the coin at burn/mint event
   */
  price: string;
}
export interface CoinPriceProtoMsg {
  typeUrl: "/akash.bme.v1.CoinPrice";
  value: Uint8Array;
}
/**
 * CoinPrice represents a coin amount with its associated oracle price at a specific point in time
 * @name CoinPriceAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.CoinPrice
 */
export interface CoinPriceAmino {
  /**
   * coin is the token amount
   */
  coin: CoinAmino;
  /**
   * price (at oracle) of the coin at burn/mint event
   */
  price: string;
}
export interface CoinPriceAminoMsg {
  type: "/akash.bme.v1.CoinPrice";
  value: CoinPriceAmino;
}
/**
 * BurnMintPair represents a pair of burn and mint operations with their respective prices
 * @name BurnMintPair
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.BurnMintPair
 */
export interface BurnMintPair {
  /**
   * burned is the coin burned
   */
  burned: CoinPrice;
  /**
   * minted is coin minted
   */
  minted: CoinPrice;
}
export interface BurnMintPairProtoMsg {
  typeUrl: "/akash.bme.v1.BurnMintPair";
  value: Uint8Array;
}
/**
 * BurnMintPair represents a pair of burn and mint operations with their respective prices
 * @name BurnMintPairAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.BurnMintPair
 */
export interface BurnMintPairAmino {
  /**
   * burned is the coin burned
   */
  burned: CoinPriceAmino;
  /**
   * minted is coin minted
   */
  minted: CoinPriceAmino;
}
export interface BurnMintPairAminoMsg {
  type: "/akash.bme.v1.BurnMintPair";
  value: BurnMintPairAmino;
}
/**
 * LedgerRecordID
 * @name LedgerRecordID
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecordID
 */
export interface LedgerRecordID {
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * to_denom is what denom swap to
   */
  toDenom: string;
  source: string;
  height: bigint;
  sequence: bigint;
}
export interface LedgerRecordIDProtoMsg {
  typeUrl: "/akash.bme.v1.LedgerRecordID";
  value: Uint8Array;
}
/**
 * LedgerRecordID
 * @name LedgerRecordIDAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecordID
 */
export interface LedgerRecordIDAmino {
  /**
   * denom is the asset denomination
   */
  denom: string;
  /**
   * to_denom is what denom swap to
   */
  to_denom: string;
  source: string;
  height?: string;
  sequence?: string;
}
export interface LedgerRecordIDAminoMsg {
  type: "/akash.bme.v1.LedgerRecordID";
  value: LedgerRecordIDAmino;
}
/**
 * LedgerPendingRecord
 * @name LedgerPendingRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerPendingRecord
 */
export interface LedgerPendingRecord {
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
  /**
   * attempts is the number of times this record has been processed and failed with a retriable error
   */
  attempts: number;
}
export interface LedgerPendingRecordProtoMsg {
  typeUrl: "/akash.bme.v1.LedgerPendingRecord";
  value: Uint8Array;
}
/**
 * LedgerPendingRecord
 * @name LedgerPendingRecordAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerPendingRecord
 */
export interface LedgerPendingRecordAmino {
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
  /**
   * attempts is the number of times this record has been processed and failed with a retriable error
   */
  attempts?: number;
}
export interface LedgerPendingRecordAminoMsg {
  type: "/akash.bme.v1.LedgerPendingRecord";
  value: LedgerPendingRecordAmino;
}
/**
 * LedgerCanceledRecord
 * @name LedgerCanceledRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerCanceledRecord
 */
export interface LedgerCanceledRecord {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * cancel_reason
   */
  cancelReason: LedgerCanceledRecord_BMCancelReason;
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
export interface LedgerCanceledRecordProtoMsg {
  typeUrl: "/akash.bme.v1.LedgerCanceledRecord";
  value: Uint8Array;
}
/**
 * LedgerCanceledRecord
 * @name LedgerCanceledRecordAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerCanceledRecord
 */
export interface LedgerCanceledRecordAmino {
  /**
   * owner source of the coins to be burned
   */
  owner: string;
  /**
   * cancel_reason
   */
  cancel_reason: LedgerCanceledRecord_BMCancelReason;
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
export interface LedgerCanceledRecordAminoMsg {
  type: "/akash.bme.v1.LedgerCanceledRecord";
  value: LedgerCanceledRecordAmino;
}
/**
 * LedgerRecord stores information of burn/mint event of token A burn to mint token B
 * @name LedgerRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecord
 */
export interface LedgerRecord {
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
export interface LedgerRecordProtoMsg {
  typeUrl: "/akash.bme.v1.LedgerRecord";
  value: Uint8Array;
}
/**
 * LedgerRecord stores information of burn/mint event of token A burn to mint token B
 * @name LedgerRecordAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecord
 */
export interface LedgerRecordAmino {
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
export interface LedgerRecordAminoMsg {
  type: "/akash.bme.v1.LedgerRecord";
  value: LedgerRecordAmino;
}
/**
 * Status stores status of mint operations
 * @name Status
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.Status
 */
export interface Status {
  status: MintStatus;
  previousStatus: MintStatus;
  epochHeightDiff: bigint;
}
export interface StatusProtoMsg {
  typeUrl: "/akash.bme.v1.Status";
  value: Uint8Array;
}
/**
 * Status stores status of mint operations
 * @name StatusAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.Status
 */
export interface StatusAmino {
  status?: MintStatus;
  previous_status?: MintStatus;
  epoch_height_diff?: string;
}
export interface StatusAminoMsg {
  type: "/akash.bme.v1.Status";
  value: StatusAmino;
}
function createBaseLedgerID(): LedgerID {
  return {
    height: BigInt(0),
    sequence: BigInt(0)
  };
}
/**
 * LedgerID uniquely identifies a ledger entry by block height and sequence number
 * @name LedgerID
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerID
 */
export const LedgerID = {
  typeUrl: "/akash.bme.v1.LedgerID",
  encode(message: LedgerID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).int64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LedgerID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.sequence = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LedgerID>): LedgerID {
    const message = createBaseLedgerID();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LedgerIDAmino): LedgerID {
    const message = createBaseLedgerID();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: LedgerID): LedgerIDAmino {
    const obj: any = {};
    obj.height = message.height ? message.height?.toString() : "0";
    obj.sequence = message.sequence ? message.sequence?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: LedgerIDAminoMsg): LedgerID {
    return LedgerID.fromAmino(object.value);
  },
  fromProtoMsg(message: LedgerIDProtoMsg): LedgerID {
    return LedgerID.decode(message.value);
  },
  toProto(message: LedgerID): Uint8Array {
    return LedgerID.encode(message).finish();
  },
  toProtoMsg(message: LedgerID): LedgerIDProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.LedgerID",
      value: LedgerID.encode(message).finish()
    };
  }
};
function createBaseCollateralRatio(): CollateralRatio {
  return {
    ratio: "",
    status: 0,
    referencePrice: ""
  };
}
/**
 * CollateralRatio represents the current collateral ratio
 * @name CollateralRatio
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.CollateralRatio
 */
export const CollateralRatio = {
  typeUrl: "/akash.bme.v1.CollateralRatio",
  encode(message: CollateralRatio, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ratio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.ratio, 18).atomics);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.referencePrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CollateralRatio {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralRatio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ratio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.referencePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CollateralRatio>): CollateralRatio {
    const message = createBaseCollateralRatio();
    message.ratio = object.ratio ?? "";
    message.status = object.status ?? 0;
    message.referencePrice = object.referencePrice ?? "";
    return message;
  },
  fromAmino(object: CollateralRatioAmino): CollateralRatio {
    const message = createBaseCollateralRatio();
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.reference_price !== undefined && object.reference_price !== null) {
      message.referencePrice = object.reference_price;
    }
    return message;
  },
  toAmino(message: CollateralRatio): CollateralRatioAmino {
    const obj: any = {};
    obj.ratio = message.ratio === "" ? undefined : message.ratio;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.reference_price = message.referencePrice === "" ? undefined : message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: CollateralRatioAminoMsg): CollateralRatio {
    return CollateralRatio.fromAmino(object.value);
  },
  fromProtoMsg(message: CollateralRatioProtoMsg): CollateralRatio {
    return CollateralRatio.decode(message.value);
  },
  toProto(message: CollateralRatio): Uint8Array {
    return CollateralRatio.encode(message).finish();
  },
  toProtoMsg(message: CollateralRatio): CollateralRatioProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.CollateralRatio",
      value: CollateralRatio.encode(message).finish()
    };
  }
};
function createBaseState(): State {
  return {
    balances: [],
    totalBurned: [],
    totalMinted: [],
    remintCredits: []
  };
}
/**
 * State tracks net burn metrics since BME start
 * @name State
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.State
 */
export const State = {
  typeUrl: "/akash.bme.v1.State",
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalBurned) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalMinted) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.remintCredits) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalBurned.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalMinted.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.remintCredits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<State>): State {
    const message = createBaseState();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.totalBurned = object.totalBurned?.map(e => Coin.fromPartial(e)) || [];
    message.totalMinted = object.totalMinted?.map(e => Coin.fromPartial(e)) || [];
    message.remintCredits = object.remintCredits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StateAmino): State {
    const message = createBaseState();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    message.totalBurned = object.total_burned?.map(e => Coin.fromAmino(e)) || [];
    message.totalMinted = object.total_minted?.map(e => Coin.fromAmino(e)) || [];
    message.remintCredits = object.remint_credits?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    if (message.totalBurned) {
      obj.total_burned = message.totalBurned.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_burned = message.totalBurned;
    }
    if (message.totalMinted) {
      obj.total_minted = message.totalMinted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_minted = message.totalMinted;
    }
    if (message.remintCredits) {
      obj.remint_credits = message.remintCredits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.remint_credits = message.remintCredits;
    }
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.State",
      value: State.encode(message).finish()
    };
  }
};
function createBaseCoinPrice(): CoinPrice {
  return {
    coin: Coin.fromPartial({}),
    price: ""
  };
}
/**
 * CoinPrice represents a coin amount with its associated oracle price at a specific point in time
 * @name CoinPrice
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.CoinPrice
 */
export const CoinPrice = {
  typeUrl: "/akash.bme.v1.CoinPrice",
  encode(message: CoinPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CoinPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CoinPrice>): CoinPrice {
    const message = createBaseCoinPrice();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: CoinPriceAmino): CoinPrice {
    const message = createBaseCoinPrice();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: CoinPrice): CoinPriceAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : Coin.toAmino(Coin.fromPartial({}));
    obj.price = message.price ?? "";
    return obj;
  },
  fromAminoMsg(object: CoinPriceAminoMsg): CoinPrice {
    return CoinPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinPriceProtoMsg): CoinPrice {
    return CoinPrice.decode(message.value);
  },
  toProto(message: CoinPrice): Uint8Array {
    return CoinPrice.encode(message).finish();
  },
  toProtoMsg(message: CoinPrice): CoinPriceProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.CoinPrice",
      value: CoinPrice.encode(message).finish()
    };
  }
};
function createBaseBurnMintPair(): BurnMintPair {
  return {
    burned: CoinPrice.fromPartial({}),
    minted: CoinPrice.fromPartial({})
  };
}
/**
 * BurnMintPair represents a pair of burn and mint operations with their respective prices
 * @name BurnMintPair
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.BurnMintPair
 */
export const BurnMintPair = {
  typeUrl: "/akash.bme.v1.BurnMintPair",
  encode(message: BurnMintPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burned !== undefined) {
      CoinPrice.encode(message.burned, writer.uint32(10).fork()).ldelim();
    }
    if (message.minted !== undefined) {
      CoinPrice.encode(message.minted, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnMintPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnMintPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burned = CoinPrice.decode(reader, reader.uint32());
          break;
        case 3:
          message.minted = CoinPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BurnMintPair>): BurnMintPair {
    const message = createBaseBurnMintPair();
    message.burned = object.burned !== undefined && object.burned !== null ? CoinPrice.fromPartial(object.burned) : undefined;
    message.minted = object.minted !== undefined && object.minted !== null ? CoinPrice.fromPartial(object.minted) : undefined;
    return message;
  },
  fromAmino(object: BurnMintPairAmino): BurnMintPair {
    const message = createBaseBurnMintPair();
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = CoinPrice.fromAmino(object.burned);
    }
    if (object.minted !== undefined && object.minted !== null) {
      message.minted = CoinPrice.fromAmino(object.minted);
    }
    return message;
  },
  toAmino(message: BurnMintPair): BurnMintPairAmino {
    const obj: any = {};
    obj.burned = message.burned ? CoinPrice.toAmino(message.burned) : CoinPrice.toAmino(CoinPrice.fromPartial({}));
    obj.minted = message.minted ? CoinPrice.toAmino(message.minted) : CoinPrice.toAmino(CoinPrice.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: BurnMintPairAminoMsg): BurnMintPair {
    return BurnMintPair.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnMintPairProtoMsg): BurnMintPair {
    return BurnMintPair.decode(message.value);
  },
  toProto(message: BurnMintPair): Uint8Array {
    return BurnMintPair.encode(message).finish();
  },
  toProtoMsg(message: BurnMintPair): BurnMintPairProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.BurnMintPair",
      value: BurnMintPair.encode(message).finish()
    };
  }
};
function createBaseLedgerRecordID(): LedgerRecordID {
  return {
    denom: "",
    toDenom: "",
    source: "",
    height: BigInt(0),
    sequence: BigInt(0)
  };
}
/**
 * LedgerRecordID
 * @name LedgerRecordID
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecordID
 */
export const LedgerRecordID = {
  typeUrl: "/akash.bme.v1.LedgerRecordID",
  encode(message: LedgerRecordID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.toDenom !== "") {
      writer.uint32(18).string(message.toDenom);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).int64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LedgerRecordID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerRecordID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.toDenom = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.sequence = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LedgerRecordID>): LedgerRecordID {
    const message = createBaseLedgerRecordID();
    message.denom = object.denom ?? "";
    message.toDenom = object.toDenom ?? "";
    message.source = object.source ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LedgerRecordIDAmino): LedgerRecordID {
    const message = createBaseLedgerRecordID();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.to_denom !== undefined && object.to_denom !== null) {
      message.toDenom = object.to_denom;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: LedgerRecordID): LedgerRecordIDAmino {
    const obj: any = {};
    obj.denom = message.denom ?? "";
    obj.to_denom = message.toDenom ?? "";
    obj.source = message.source ?? "";
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LedgerRecordIDAminoMsg): LedgerRecordID {
    return LedgerRecordID.fromAmino(object.value);
  },
  fromProtoMsg(message: LedgerRecordIDProtoMsg): LedgerRecordID {
    return LedgerRecordID.decode(message.value);
  },
  toProto(message: LedgerRecordID): Uint8Array {
    return LedgerRecordID.encode(message).finish();
  },
  toProtoMsg(message: LedgerRecordID): LedgerRecordIDProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.LedgerRecordID",
      value: LedgerRecordID.encode(message).finish()
    };
  }
};
function createBaseLedgerPendingRecord(): LedgerPendingRecord {
  return {
    owner: "",
    to: "",
    coinsToBurn: Coin.fromPartial({}),
    denomToMint: "",
    attempts: 0
  };
}
/**
 * LedgerPendingRecord
 * @name LedgerPendingRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerPendingRecord
 */
export const LedgerPendingRecord = {
  typeUrl: "/akash.bme.v1.LedgerPendingRecord",
  encode(message: LedgerPendingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.attempts !== 0) {
      writer.uint32(40).uint32(message.attempts);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LedgerPendingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerPendingRecord();
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
        case 5:
          message.attempts = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LedgerPendingRecord>): LedgerPendingRecord {
    const message = createBaseLedgerPendingRecord();
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.coinsToBurn = object.coinsToBurn !== undefined && object.coinsToBurn !== null ? Coin.fromPartial(object.coinsToBurn) : undefined;
    message.denomToMint = object.denomToMint ?? "";
    message.attempts = object.attempts ?? 0;
    return message;
  },
  fromAmino(object: LedgerPendingRecordAmino): LedgerPendingRecord {
    const message = createBaseLedgerPendingRecord();
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
    if (object.attempts !== undefined && object.attempts !== null) {
      message.attempts = object.attempts;
    }
    return message;
  },
  toAmino(message: LedgerPendingRecord): LedgerPendingRecordAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.to = message.to ?? "";
    obj.coins_to_burn = message.coinsToBurn ? Coin.toAmino(message.coinsToBurn) : Coin.toAmino(Coin.fromPartial({}));
    obj.denom_to_mint = message.denomToMint ?? "";
    obj.attempts = message.attempts === 0 ? undefined : message.attempts;
    return obj;
  },
  fromAminoMsg(object: LedgerPendingRecordAminoMsg): LedgerPendingRecord {
    return LedgerPendingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: LedgerPendingRecordProtoMsg): LedgerPendingRecord {
    return LedgerPendingRecord.decode(message.value);
  },
  toProto(message: LedgerPendingRecord): Uint8Array {
    return LedgerPendingRecord.encode(message).finish();
  },
  toProtoMsg(message: LedgerPendingRecord): LedgerPendingRecordProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.LedgerPendingRecord",
      value: LedgerPendingRecord.encode(message).finish()
    };
  }
};
function createBaseLedgerCanceledRecord(): LedgerCanceledRecord {
  return {
    owner: "",
    cancelReason: 0,
    to: "",
    coinsToBurn: Coin.fromPartial({}),
    denomToMint: ""
  };
}
/**
 * LedgerCanceledRecord
 * @name LedgerCanceledRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerCanceledRecord
 */
export const LedgerCanceledRecord = {
  typeUrl: "/akash.bme.v1.LedgerCanceledRecord",
  encode(message: LedgerCanceledRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.cancelReason !== 0) {
      writer.uint32(16).int32(message.cancelReason);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.coinsToBurn !== undefined) {
      Coin.encode(message.coinsToBurn, writer.uint32(34).fork()).ldelim();
    }
    if (message.denomToMint !== "") {
      writer.uint32(42).string(message.denomToMint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LedgerCanceledRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerCanceledRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.cancelReason = reader.int32() as any;
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.coinsToBurn = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.denomToMint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LedgerCanceledRecord>): LedgerCanceledRecord {
    const message = createBaseLedgerCanceledRecord();
    message.owner = object.owner ?? "";
    message.cancelReason = object.cancelReason ?? 0;
    message.to = object.to ?? "";
    message.coinsToBurn = object.coinsToBurn !== undefined && object.coinsToBurn !== null ? Coin.fromPartial(object.coinsToBurn) : undefined;
    message.denomToMint = object.denomToMint ?? "";
    return message;
  },
  fromAmino(object: LedgerCanceledRecordAmino): LedgerCanceledRecord {
    const message = createBaseLedgerCanceledRecord();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.cancel_reason !== undefined && object.cancel_reason !== null) {
      message.cancelReason = object.cancel_reason;
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
  toAmino(message: LedgerCanceledRecord): LedgerCanceledRecordAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.cancel_reason = message.cancelReason ?? 0;
    obj.to = message.to ?? "";
    obj.coins_to_burn = message.coinsToBurn ? Coin.toAmino(message.coinsToBurn) : Coin.toAmino(Coin.fromPartial({}));
    obj.denom_to_mint = message.denomToMint ?? "";
    return obj;
  },
  fromAminoMsg(object: LedgerCanceledRecordAminoMsg): LedgerCanceledRecord {
    return LedgerCanceledRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: LedgerCanceledRecordProtoMsg): LedgerCanceledRecord {
    return LedgerCanceledRecord.decode(message.value);
  },
  toProto(message: LedgerCanceledRecord): Uint8Array {
    return LedgerCanceledRecord.encode(message).finish();
  },
  toProtoMsg(message: LedgerCanceledRecord): LedgerCanceledRecordProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.LedgerCanceledRecord",
      value: LedgerCanceledRecord.encode(message).finish()
    };
  }
};
function createBaseLedgerRecord(): LedgerRecord {
  return {
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
 * LedgerRecord stores information of burn/mint event of token A burn to mint token B
 * @name LedgerRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecord
 */
export const LedgerRecord = {
  typeUrl: "/akash.bme.v1.LedgerRecord",
  encode(message: LedgerRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burnedFrom !== "") {
      writer.uint32(10).string(message.burnedFrom);
    }
    if (message.mintedTo !== "") {
      writer.uint32(18).string(message.mintedTo);
    }
    if (message.burner !== "") {
      writer.uint32(26).string(message.burner);
    }
    if (message.minter !== "") {
      writer.uint32(34).string(message.minter);
    }
    if (message.burned !== undefined) {
      CoinPrice.encode(message.burned, writer.uint32(42).fork()).ldelim();
    }
    if (message.minted !== undefined) {
      CoinPrice.encode(message.minted, writer.uint32(50).fork()).ldelim();
    }
    if (message.spread !== undefined) {
      Coin.encode(message.spread, writer.uint32(58).fork()).ldelim();
    }
    if (message.remintCreditIssued !== undefined) {
      CoinPrice.encode(message.remintCreditIssued, writer.uint32(66).fork()).ldelim();
    }
    if (message.remintCreditAccrued !== undefined) {
      CoinPrice.encode(message.remintCreditAccrued, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LedgerRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnedFrom = reader.string();
          break;
        case 2:
          message.mintedTo = reader.string();
          break;
        case 3:
          message.burner = reader.string();
          break;
        case 4:
          message.minter = reader.string();
          break;
        case 5:
          message.burned = CoinPrice.decode(reader, reader.uint32());
          break;
        case 6:
          message.minted = CoinPrice.decode(reader, reader.uint32());
          break;
        case 7:
          message.spread = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.remintCreditIssued = CoinPrice.decode(reader, reader.uint32());
          break;
        case 9:
          message.remintCreditAccrued = CoinPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LedgerRecord>): LedgerRecord {
    const message = createBaseLedgerRecord();
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
  fromAmino(object: LedgerRecordAmino): LedgerRecord {
    const message = createBaseLedgerRecord();
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
  toAmino(message: LedgerRecord): LedgerRecordAmino {
    const obj: any = {};
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
  fromAminoMsg(object: LedgerRecordAminoMsg): LedgerRecord {
    return LedgerRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: LedgerRecordProtoMsg): LedgerRecord {
    return LedgerRecord.decode(message.value);
  },
  toProto(message: LedgerRecord): Uint8Array {
    return LedgerRecord.encode(message).finish();
  },
  toProtoMsg(message: LedgerRecord): LedgerRecordProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.LedgerRecord",
      value: LedgerRecord.encode(message).finish()
    };
  }
};
function createBaseStatus(): Status {
  return {
    status: 0,
    previousStatus: 0,
    epochHeightDiff: BigInt(0)
  };
}
/**
 * Status stores status of mint operations
 * @name Status
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.Status
 */
export const Status = {
  typeUrl: "/akash.bme.v1.Status",
  encode(message: Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.previousStatus !== 0) {
      writer.uint32(16).int32(message.previousStatus);
    }
    if (message.epochHeightDiff !== BigInt(0)) {
      writer.uint32(24).int64(message.epochHeightDiff);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Status {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.previousStatus = reader.int32() as any;
          break;
        case 3:
          message.epochHeightDiff = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.status = object.status ?? 0;
    message.previousStatus = object.previousStatus ?? 0;
    message.epochHeightDiff = object.epochHeightDiff !== undefined && object.epochHeightDiff !== null ? BigInt(object.epochHeightDiff.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    const message = createBaseStatus();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.previous_status !== undefined && object.previous_status !== null) {
      message.previousStatus = object.previous_status;
    }
    if (object.epoch_height_diff !== undefined && object.epoch_height_diff !== null) {
      message.epochHeightDiff = BigInt(object.epoch_height_diff);
    }
    return message;
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.previous_status = message.previousStatus === 0 ? undefined : message.previousStatus;
    obj.epoch_height_diff = message.epochHeightDiff !== BigInt(0) ? message.epochHeightDiff?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusAminoMsg): Status {
    return Status.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusProtoMsg): Status {
    return Status.decode(message.value);
  },
  toProto(message: Status): Uint8Array {
    return Status.encode(message).finish();
  },
  toProtoMsg(message: Status): StatusProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.Status",
      value: Status.encode(message).finish()
    };
  }
};