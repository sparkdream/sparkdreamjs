//@ts-nocheck
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.Params
 */
export interface Params {
  blockedNames: string[];
  minNameLength: bigint;
  maxNameLength: bigint;
  maxNamesPerAddress: bigint;
  expirationDuration: Duration;
  registrationFee: Coin;
  /**
   * DREAM tokens staked by claimant when filing a dispute (default 50)
   */
  disputeStakeDream: string;
  /**
   * Blocks before an uncontested dispute auto-resolves (~7 days = 100800)
   */
  disputeTimeoutBlocks: bigint;
  /**
   * DREAM tokens staked by owner when contesting a dispute (default 100)
   */
  contestStakeDream: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.name.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.Params
 */
export interface ParamsAmino {
  blocked_names?: string[];
  min_name_length?: string;
  max_name_length?: string;
  max_names_per_address?: string;
  expiration_duration?: DurationAmino;
  registration_fee: CoinAmino;
  /**
   * DREAM tokens staked by claimant when filing a dispute (default 50)
   */
  dispute_stake_dream?: string;
  /**
   * Blocks before an uncontested dispute auto-resolves (~7 days = 100800)
   */
  dispute_timeout_blocks?: string;
  /**
   * DREAM tokens staked by owner when contesting a dispute (default 100)
   */
  contest_stake_dream?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/name/Params";
  value: ParamsAmino;
}
/**
 * NameOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (blocked_names, min_name_length, max_name_length,
 * max_names_per_address) are excluded and can only be changed via MsgUpdateParams.
 * @name NameOperationalParams
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameOperationalParams
 */
export interface NameOperationalParams {
  expirationDuration: Duration;
  registrationFee: Coin;
  /**
   * DREAM tokens staked by claimant when filing a dispute (default 50)
   */
  disputeStakeDream: string;
  /**
   * Blocks before an uncontested dispute auto-resolves (~7 days = 100800)
   */
  disputeTimeoutBlocks: bigint;
  /**
   * DREAM tokens staked by owner when contesting a dispute (default 100)
   */
  contestStakeDream: string;
}
export interface NameOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.name.v1.NameOperationalParams";
  value: Uint8Array;
}
/**
 * NameOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (blocked_names, min_name_length, max_name_length,
 * max_names_per_address) are excluded and can only be changed via MsgUpdateParams.
 * @name NameOperationalParamsAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameOperationalParams
 */
export interface NameOperationalParamsAmino {
  expiration_duration?: DurationAmino;
  registration_fee: CoinAmino;
  /**
   * DREAM tokens staked by claimant when filing a dispute (default 50)
   */
  dispute_stake_dream?: string;
  /**
   * Blocks before an uncontested dispute auto-resolves (~7 days = 100800)
   */
  dispute_timeout_blocks?: string;
  /**
   * DREAM tokens staked by owner when contesting a dispute (default 100)
   */
  contest_stake_dream?: string;
}
export interface NameOperationalParamsAminoMsg {
  type: "sparkdream/x/name/NameOperationalParams";
  value: NameOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    blockedNames: [],
    minNameLength: BigInt(0),
    maxNameLength: BigInt(0),
    maxNamesPerAddress: BigInt(0),
    expirationDuration: Duration.fromPartial({}),
    registrationFee: Coin.fromPartial({}),
    disputeStakeDream: "",
    disputeTimeoutBlocks: BigInt(0),
    contestStakeDream: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.name.v1.Params",
  aminoType: "sparkdream/x/name/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.blockedNames) {
      writer.uint32(10).string(v!);
    }
    if (message.minNameLength !== BigInt(0)) {
      writer.uint32(16).uint64(message.minNameLength);
    }
    if (message.maxNameLength !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxNameLength);
    }
    if (message.maxNamesPerAddress !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxNamesPerAddress);
    }
    if (message.expirationDuration !== undefined) {
      Duration.encode(message.expirationDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.registrationFee !== undefined) {
      Coin.encode(message.registrationFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.disputeStakeDream !== "") {
      writer.uint32(58).string(message.disputeStakeDream);
    }
    if (message.disputeTimeoutBlocks !== BigInt(0)) {
      writer.uint32(64).uint64(message.disputeTimeoutBlocks);
    }
    if (message.contestStakeDream !== "") {
      writer.uint32(74).string(message.contestStakeDream);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockedNames.push(reader.string());
          break;
        case 2:
          message.minNameLength = reader.uint64();
          break;
        case 3:
          message.maxNameLength = reader.uint64();
          break;
        case 4:
          message.maxNamesPerAddress = reader.uint64();
          break;
        case 5:
          message.expirationDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.registrationFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.disputeStakeDream = reader.string();
          break;
        case 8:
          message.disputeTimeoutBlocks = reader.uint64();
          break;
        case 9:
          message.contestStakeDream = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.blockedNames = object.blockedNames?.map(e => e) || [];
    message.minNameLength = object.minNameLength !== undefined && object.minNameLength !== null ? BigInt(object.minNameLength.toString()) : BigInt(0);
    message.maxNameLength = object.maxNameLength !== undefined && object.maxNameLength !== null ? BigInt(object.maxNameLength.toString()) : BigInt(0);
    message.maxNamesPerAddress = object.maxNamesPerAddress !== undefined && object.maxNamesPerAddress !== null ? BigInt(object.maxNamesPerAddress.toString()) : BigInt(0);
    message.expirationDuration = object.expirationDuration !== undefined && object.expirationDuration !== null ? Duration.fromPartial(object.expirationDuration) : undefined;
    message.registrationFee = object.registrationFee !== undefined && object.registrationFee !== null ? Coin.fromPartial(object.registrationFee) : undefined;
    message.disputeStakeDream = object.disputeStakeDream ?? "";
    message.disputeTimeoutBlocks = object.disputeTimeoutBlocks !== undefined && object.disputeTimeoutBlocks !== null ? BigInt(object.disputeTimeoutBlocks.toString()) : BigInt(0);
    message.contestStakeDream = object.contestStakeDream ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.blockedNames = object.blocked_names?.map(e => e) || [];
    if (object.min_name_length !== undefined && object.min_name_length !== null) {
      message.minNameLength = BigInt(object.min_name_length);
    }
    if (object.max_name_length !== undefined && object.max_name_length !== null) {
      message.maxNameLength = BigInt(object.max_name_length);
    }
    if (object.max_names_per_address !== undefined && object.max_names_per_address !== null) {
      message.maxNamesPerAddress = BigInt(object.max_names_per_address);
    }
    if (object.expiration_duration !== undefined && object.expiration_duration !== null) {
      message.expirationDuration = Duration.fromAmino(object.expiration_duration);
    }
    if (object.registration_fee !== undefined && object.registration_fee !== null) {
      message.registrationFee = Coin.fromAmino(object.registration_fee);
    }
    if (object.dispute_stake_dream !== undefined && object.dispute_stake_dream !== null) {
      message.disputeStakeDream = object.dispute_stake_dream;
    }
    if (object.dispute_timeout_blocks !== undefined && object.dispute_timeout_blocks !== null) {
      message.disputeTimeoutBlocks = BigInt(object.dispute_timeout_blocks);
    }
    if (object.contest_stake_dream !== undefined && object.contest_stake_dream !== null) {
      message.contestStakeDream = object.contest_stake_dream;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.blockedNames) {
      obj.blocked_names = message.blockedNames.map(e => e);
    } else {
      obj.blocked_names = message.blockedNames;
    }
    obj.min_name_length = message.minNameLength !== BigInt(0) ? message.minNameLength?.toString() : undefined;
    obj.max_name_length = message.maxNameLength !== BigInt(0) ? message.maxNameLength?.toString() : undefined;
    obj.max_names_per_address = message.maxNamesPerAddress !== BigInt(0) ? message.maxNamesPerAddress?.toString() : undefined;
    obj.expiration_duration = message.expirationDuration ? Duration.toAmino(message.expirationDuration) : undefined;
    obj.registration_fee = message.registrationFee ? Coin.toAmino(message.registrationFee) : Coin.toAmino(Coin.fromPartial({}));
    obj.dispute_stake_dream = message.disputeStakeDream === "" ? undefined : message.disputeStakeDream;
    obj.dispute_timeout_blocks = message.disputeTimeoutBlocks !== BigInt(0) ? message.disputeTimeoutBlocks?.toString() : undefined;
    obj.contest_stake_dream = message.contestStakeDream === "" ? undefined : message.contestStakeDream;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/name/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseNameOperationalParams(): NameOperationalParams {
  return {
    expirationDuration: Duration.fromPartial({}),
    registrationFee: Coin.fromPartial({}),
    disputeStakeDream: "",
    disputeTimeoutBlocks: BigInt(0),
    contestStakeDream: ""
  };
}
/**
 * NameOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (blocked_names, min_name_length, max_name_length,
 * max_names_per_address) are excluded and can only be changed via MsgUpdateParams.
 * @name NameOperationalParams
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameOperationalParams
 */
export const NameOperationalParams = {
  typeUrl: "/sparkdream.name.v1.NameOperationalParams",
  aminoType: "sparkdream/x/name/NameOperationalParams",
  encode(message: NameOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expirationDuration !== undefined) {
      Duration.encode(message.expirationDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.registrationFee !== undefined) {
      Coin.encode(message.registrationFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.disputeStakeDream !== "") {
      writer.uint32(26).string(message.disputeStakeDream);
    }
    if (message.disputeTimeoutBlocks !== BigInt(0)) {
      writer.uint32(32).uint64(message.disputeTimeoutBlocks);
    }
    if (message.contestStakeDream !== "") {
      writer.uint32(42).string(message.contestStakeDream);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NameOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationDuration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.registrationFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.disputeStakeDream = reader.string();
          break;
        case 4:
          message.disputeTimeoutBlocks = reader.uint64();
          break;
        case 5:
          message.contestStakeDream = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NameOperationalParams>): NameOperationalParams {
    const message = createBaseNameOperationalParams();
    message.expirationDuration = object.expirationDuration !== undefined && object.expirationDuration !== null ? Duration.fromPartial(object.expirationDuration) : undefined;
    message.registrationFee = object.registrationFee !== undefined && object.registrationFee !== null ? Coin.fromPartial(object.registrationFee) : undefined;
    message.disputeStakeDream = object.disputeStakeDream ?? "";
    message.disputeTimeoutBlocks = object.disputeTimeoutBlocks !== undefined && object.disputeTimeoutBlocks !== null ? BigInt(object.disputeTimeoutBlocks.toString()) : BigInt(0);
    message.contestStakeDream = object.contestStakeDream ?? "";
    return message;
  },
  fromAmino(object: NameOperationalParamsAmino): NameOperationalParams {
    const message = createBaseNameOperationalParams();
    if (object.expiration_duration !== undefined && object.expiration_duration !== null) {
      message.expirationDuration = Duration.fromAmino(object.expiration_duration);
    }
    if (object.registration_fee !== undefined && object.registration_fee !== null) {
      message.registrationFee = Coin.fromAmino(object.registration_fee);
    }
    if (object.dispute_stake_dream !== undefined && object.dispute_stake_dream !== null) {
      message.disputeStakeDream = object.dispute_stake_dream;
    }
    if (object.dispute_timeout_blocks !== undefined && object.dispute_timeout_blocks !== null) {
      message.disputeTimeoutBlocks = BigInt(object.dispute_timeout_blocks);
    }
    if (object.contest_stake_dream !== undefined && object.contest_stake_dream !== null) {
      message.contestStakeDream = object.contest_stake_dream;
    }
    return message;
  },
  toAmino(message: NameOperationalParams): NameOperationalParamsAmino {
    const obj: any = {};
    obj.expiration_duration = message.expirationDuration ? Duration.toAmino(message.expirationDuration) : undefined;
    obj.registration_fee = message.registrationFee ? Coin.toAmino(message.registrationFee) : Coin.toAmino(Coin.fromPartial({}));
    obj.dispute_stake_dream = message.disputeStakeDream === "" ? undefined : message.disputeStakeDream;
    obj.dispute_timeout_blocks = message.disputeTimeoutBlocks !== BigInt(0) ? message.disputeTimeoutBlocks?.toString() : undefined;
    obj.contest_stake_dream = message.contestStakeDream === "" ? undefined : message.contestStakeDream;
    return obj;
  },
  fromAminoMsg(object: NameOperationalParamsAminoMsg): NameOperationalParams {
    return NameOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: NameOperationalParams): NameOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/name/NameOperationalParams",
      value: NameOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: NameOperationalParamsProtoMsg): NameOperationalParams {
    return NameOperationalParams.decode(message.value);
  },
  toProto(message: NameOperationalParams): Uint8Array {
    return NameOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: NameOperationalParams): NameOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.NameOperationalParams",
      value: NameOperationalParams.encode(message).finish()
    };
  }
};