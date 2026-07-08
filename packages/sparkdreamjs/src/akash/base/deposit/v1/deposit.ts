//@ts-nocheck
import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Source is an enum which lists source of funds for deployment deposit. */
export enum Source {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** balance - SourceBalance denotes account balance as source of funds */
  balance = 1,
  /** grant - SourceGrant denotes authz grants as source of funds */
  grant = 2,
  UNRECOGNIZED = -1,
}
export const SourceAmino = Source;
export function sourceFromJSON(object: any): Source {
  switch (object) {
    case 0:
    case "invalid":
      return Source.invalid;
    case 1:
    case "balance":
      return Source.balance;
    case 2:
    case "grant":
      return Source.grant;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Source.UNRECOGNIZED;
  }
}
export function sourceToJSON(object: Source): string {
  switch (object) {
    case Source.invalid:
      return "invalid";
    case Source.balance:
      return "balance";
    case Source.grant:
      return "grant";
    case Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Deposit is a data type used by MsgCreateDeployment, MsgDepositDeployment and MsgCreateBid to indicate source of the deposit.
 * @name Deposit
 * @package akash.base.deposit.v1
 * @see proto type: akash.base.deposit.v1.Deposit
 */
export interface Deposit {
  /**
   * amount specifies the amount of coins to include in the deployment's first deposit.
   */
  amount: Coin;
  /**
   * Sources is the set of deposit sources, each entry must be unique.
   */
  sources: Source[];
}
export interface DepositProtoMsg {
  typeUrl: "/akash.base.deposit.v1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit is a data type used by MsgCreateDeployment, MsgDepositDeployment and MsgCreateBid to indicate source of the deposit.
 * @name DepositAmino
 * @package akash.base.deposit.v1
 * @see proto type: akash.base.deposit.v1.Deposit
 */
export interface DepositAmino {
  /**
   * amount specifies the amount of coins to include in the deployment's first deposit.
   */
  amount?: CoinAmino;
  /**
   * Sources is the set of deposit sources, each entry must be unique.
   */
  sources: Source[];
}
export interface DepositAminoMsg {
  type: "/akash.base.deposit.v1.Deposit";
  value: DepositAmino;
}
function createBaseDeposit(): Deposit {
  return {
    amount: Coin.fromPartial({}),
    sources: []
  };
}
/**
 * Deposit is a data type used by MsgCreateDeployment, MsgDepositDeployment and MsgCreateBid to indicate source of the deposit.
 * @name Deposit
 * @package akash.base.deposit.v1
 * @see proto type: akash.base.deposit.v1.Deposit
 */
export const Deposit = {
  typeUrl: "/akash.base.deposit.v1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.sources) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sources.push(reader.int32() as any);
            }
          } else {
            message.sources.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.sources = object.sources?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    message.sources = object.sources?.map(e => e) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.sources) {
      obj.sources = message.sources.map(e => e);
    } else {
      obj.sources = message.sources;
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/akash.base.deposit.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};