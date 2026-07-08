//@ts-nocheck
import { Source } from "../../../base/deposit/v1/deposit";
import { DecCoin, DecCoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Depositor stores state of a deposit.
 * @name Depositor
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Depositor
 */
export interface Depositor {
  /**
   * Owner is the bech32 address of the depositor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  owner: string;
  /**
   * Height blockchain height at which deposit was created
   */
  height: bigint;
  /**
   * Source indicated origination of the funds
   */
  source: Source;
  /**
   * Balance amount of funds available to spend in this deposit.
   */
  balance: DecCoin;
}
export interface DepositorProtoMsg {
  typeUrl: "/akash.escrow.types.v1.Depositor";
  value: Uint8Array;
}
/**
 * Depositor stores state of a deposit.
 * @name DepositorAmino
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Depositor
 */
export interface DepositorAmino {
  /**
   * Owner is the bech32 address of the depositor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  owner: string;
  /**
   * Height blockchain height at which deposit was created
   */
  height: string;
  /**
   * Source indicated origination of the funds
   */
  source: Source;
  /**
   * Balance amount of funds available to spend in this deposit.
   */
  balance: DecCoinAmino;
}
export interface DepositorAminoMsg {
  type: "/akash.escrow.types.v1.Depositor";
  value: DepositorAmino;
}
function createBaseDepositor(): Depositor {
  return {
    owner: "",
    height: BigInt(0),
    source: 0,
    balance: DecCoin.fromPartial({})
  };
}
/**
 * Depositor stores state of a deposit.
 * @name Depositor
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Depositor
 */
export const Depositor = {
  typeUrl: "/akash.escrow.types.v1.Depositor",
  encode(message: Depositor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Depositor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.source = reader.int32() as any;
          break;
        case 4:
          message.balance = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Depositor>): Depositor {
    const message = createBaseDepositor();
    message.owner = object.owner ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.source = object.source ?? 0;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: DepositorAmino): Depositor {
    const message = createBaseDepositor();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: Depositor): DepositorAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.height = message.height ? message.height?.toString() : "0";
    obj.source = message.source ?? 0;
    obj.balance = message.balance ? DecCoin.toAmino(message.balance) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DepositorAminoMsg): Depositor {
    return Depositor.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositorProtoMsg): Depositor {
    return Depositor.decode(message.value);
  },
  toProto(message: Depositor): Uint8Array {
    return Depositor.encode(message).finish();
  },
  toProtoMsg(message: Depositor): DepositorProtoMsg {
    return {
      typeUrl: "/akash.escrow.types.v1.Depositor",
      value: Depositor.encode(message).finish()
    };
  }
};