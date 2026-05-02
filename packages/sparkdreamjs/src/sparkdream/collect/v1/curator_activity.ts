//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * CuratorActivity holds collect-specific per-curator counters. The generic
 * bond/status/activity record lives in x/rep as BondedRole
 * (ROLE_TYPE_COLLECT_CURATOR) — this proto only tracks what's collect-specific:
 * review counts and dispute outcomes.
 * @name CuratorActivity
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CuratorActivity
 */
export interface CuratorActivity {
  address: string;
  /**
   * total_reviews is the lifetime count of reviews the curator has submitted.
   */
  totalReviews: bigint;
  /**
   * challenged_reviews is the lifetime count of the curator's reviews that
   * have been challenged (regardless of outcome).
   */
  challengedReviews: bigint;
  /**
   * upheld_reviews is the lifetime count of challenged reviews that were
   * ultimately upheld in the curator's favor.
   */
  upheldReviews: bigint;
  /**
   * overturned_reviews is the lifetime count of challenged reviews that were
   * overturned against the curator.
   */
  overturnedReviews: bigint;
  /**
   * consecutive_overturns tracks the current streak of overturned-against
   * reviews since the last upheld one. Used to trigger demotion via
   * SetBondStatus(DEMOTED) when it crosses the threshold.
   */
  consecutiveOverturns: bigint;
  /**
   * consecutive_upheld tracks the current streak of upheld reviews.
   */
  consecutiveUpheld: bigint;
  /**
   * epoch_reviews counts reviews submitted in the current sentinel-style
   * reward epoch (reserved for future per-epoch accounting; zero for now).
   */
  epochReviews: bigint;
}
export interface CuratorActivityProtoMsg {
  typeUrl: "/sparkdream.collect.v1.CuratorActivity";
  value: Uint8Array;
}
/**
 * CuratorActivity holds collect-specific per-curator counters. The generic
 * bond/status/activity record lives in x/rep as BondedRole
 * (ROLE_TYPE_COLLECT_CURATOR) — this proto only tracks what's collect-specific:
 * review counts and dispute outcomes.
 * @name CuratorActivityAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CuratorActivity
 */
export interface CuratorActivityAmino {
  address?: string;
  /**
   * total_reviews is the lifetime count of reviews the curator has submitted.
   */
  total_reviews?: string;
  /**
   * challenged_reviews is the lifetime count of the curator's reviews that
   * have been challenged (regardless of outcome).
   */
  challenged_reviews?: string;
  /**
   * upheld_reviews is the lifetime count of challenged reviews that were
   * ultimately upheld in the curator's favor.
   */
  upheld_reviews?: string;
  /**
   * overturned_reviews is the lifetime count of challenged reviews that were
   * overturned against the curator.
   */
  overturned_reviews?: string;
  /**
   * consecutive_overturns tracks the current streak of overturned-against
   * reviews since the last upheld one. Used to trigger demotion via
   * SetBondStatus(DEMOTED) when it crosses the threshold.
   */
  consecutive_overturns?: string;
  /**
   * consecutive_upheld tracks the current streak of upheld reviews.
   */
  consecutive_upheld?: string;
  /**
   * epoch_reviews counts reviews submitted in the current sentinel-style
   * reward epoch (reserved for future per-epoch accounting; zero for now).
   */
  epoch_reviews?: string;
}
export interface CuratorActivityAminoMsg {
  type: "/sparkdream.collect.v1.CuratorActivity";
  value: CuratorActivityAmino;
}
function createBaseCuratorActivity(): CuratorActivity {
  return {
    address: "",
    totalReviews: BigInt(0),
    challengedReviews: BigInt(0),
    upheldReviews: BigInt(0),
    overturnedReviews: BigInt(0),
    consecutiveOverturns: BigInt(0),
    consecutiveUpheld: BigInt(0),
    epochReviews: BigInt(0)
  };
}
/**
 * CuratorActivity holds collect-specific per-curator counters. The generic
 * bond/status/activity record lives in x/rep as BondedRole
 * (ROLE_TYPE_COLLECT_CURATOR) — this proto only tracks what's collect-specific:
 * review counts and dispute outcomes.
 * @name CuratorActivity
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.CuratorActivity
 */
export const CuratorActivity = {
  typeUrl: "/sparkdream.collect.v1.CuratorActivity",
  encode(message: CuratorActivity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.totalReviews !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalReviews);
    }
    if (message.challengedReviews !== BigInt(0)) {
      writer.uint32(24).uint64(message.challengedReviews);
    }
    if (message.upheldReviews !== BigInt(0)) {
      writer.uint32(32).uint64(message.upheldReviews);
    }
    if (message.overturnedReviews !== BigInt(0)) {
      writer.uint32(40).uint64(message.overturnedReviews);
    }
    if (message.consecutiveOverturns !== BigInt(0)) {
      writer.uint32(48).uint64(message.consecutiveOverturns);
    }
    if (message.consecutiveUpheld !== BigInt(0)) {
      writer.uint32(56).uint64(message.consecutiveUpheld);
    }
    if (message.epochReviews !== BigInt(0)) {
      writer.uint32(64).uint64(message.epochReviews);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CuratorActivity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCuratorActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.totalReviews = reader.uint64();
          break;
        case 3:
          message.challengedReviews = reader.uint64();
          break;
        case 4:
          message.upheldReviews = reader.uint64();
          break;
        case 5:
          message.overturnedReviews = reader.uint64();
          break;
        case 6:
          message.consecutiveOverturns = reader.uint64();
          break;
        case 7:
          message.consecutiveUpheld = reader.uint64();
          break;
        case 8:
          message.epochReviews = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CuratorActivity>): CuratorActivity {
    const message = createBaseCuratorActivity();
    message.address = object.address ?? "";
    message.totalReviews = object.totalReviews !== undefined && object.totalReviews !== null ? BigInt(object.totalReviews.toString()) : BigInt(0);
    message.challengedReviews = object.challengedReviews !== undefined && object.challengedReviews !== null ? BigInt(object.challengedReviews.toString()) : BigInt(0);
    message.upheldReviews = object.upheldReviews !== undefined && object.upheldReviews !== null ? BigInt(object.upheldReviews.toString()) : BigInt(0);
    message.overturnedReviews = object.overturnedReviews !== undefined && object.overturnedReviews !== null ? BigInt(object.overturnedReviews.toString()) : BigInt(0);
    message.consecutiveOverturns = object.consecutiveOverturns !== undefined && object.consecutiveOverturns !== null ? BigInt(object.consecutiveOverturns.toString()) : BigInt(0);
    message.consecutiveUpheld = object.consecutiveUpheld !== undefined && object.consecutiveUpheld !== null ? BigInt(object.consecutiveUpheld.toString()) : BigInt(0);
    message.epochReviews = object.epochReviews !== undefined && object.epochReviews !== null ? BigInt(object.epochReviews.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CuratorActivityAmino): CuratorActivity {
    const message = createBaseCuratorActivity();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.total_reviews !== undefined && object.total_reviews !== null) {
      message.totalReviews = BigInt(object.total_reviews);
    }
    if (object.challenged_reviews !== undefined && object.challenged_reviews !== null) {
      message.challengedReviews = BigInt(object.challenged_reviews);
    }
    if (object.upheld_reviews !== undefined && object.upheld_reviews !== null) {
      message.upheldReviews = BigInt(object.upheld_reviews);
    }
    if (object.overturned_reviews !== undefined && object.overturned_reviews !== null) {
      message.overturnedReviews = BigInt(object.overturned_reviews);
    }
    if (object.consecutive_overturns !== undefined && object.consecutive_overturns !== null) {
      message.consecutiveOverturns = BigInt(object.consecutive_overturns);
    }
    if (object.consecutive_upheld !== undefined && object.consecutive_upheld !== null) {
      message.consecutiveUpheld = BigInt(object.consecutive_upheld);
    }
    if (object.epoch_reviews !== undefined && object.epoch_reviews !== null) {
      message.epochReviews = BigInt(object.epoch_reviews);
    }
    return message;
  },
  toAmino(message: CuratorActivity): CuratorActivityAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.total_reviews = message.totalReviews !== BigInt(0) ? message.totalReviews?.toString() : undefined;
    obj.challenged_reviews = message.challengedReviews !== BigInt(0) ? message.challengedReviews?.toString() : undefined;
    obj.upheld_reviews = message.upheldReviews !== BigInt(0) ? message.upheldReviews?.toString() : undefined;
    obj.overturned_reviews = message.overturnedReviews !== BigInt(0) ? message.overturnedReviews?.toString() : undefined;
    obj.consecutive_overturns = message.consecutiveOverturns !== BigInt(0) ? message.consecutiveOverturns?.toString() : undefined;
    obj.consecutive_upheld = message.consecutiveUpheld !== BigInt(0) ? message.consecutiveUpheld?.toString() : undefined;
    obj.epoch_reviews = message.epochReviews !== BigInt(0) ? message.epochReviews?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CuratorActivityAminoMsg): CuratorActivity {
    return CuratorActivity.fromAmino(object.value);
  },
  fromProtoMsg(message: CuratorActivityProtoMsg): CuratorActivity {
    return CuratorActivity.decode(message.value);
  },
  toProto(message: CuratorActivity): Uint8Array {
    return CuratorActivity.encode(message).finish();
  },
  toProtoMsg(message: CuratorActivity): CuratorActivityProtoMsg {
    return {
      typeUrl: "/sparkdream.collect.v1.CuratorActivity",
      value: CuratorActivity.encode(message).finish()
    };
  }
};