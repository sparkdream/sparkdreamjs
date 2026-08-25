//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ReviewBounty is DREAM escrowed against one initiative to attract reviewer
 * attention to it.
 * 
 * The DREAM review fee pays for the act of reviewing at a rate fixed by the
 * budget. A bounty is how the people who actually want a particular initiative
 * looked at — its creator, its stakers, anyone — bid that attention up. Review
 * is the scarcest input in the system once the completion gate is mandatory,
 * and a flat fee cannot express "this one matters more".
 * 
 * Paid out per verdict filed and split across the round's reviewers, exactly
 * like the fee: outcome-blind. A bounty released on successful completion would
 * be a straightforward bribe to approve, which is the bias the reviewer role
 * exists to remove.
 * @name ReviewBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBounty
 */
export interface ReviewBounty {
  initiativeId: bigint;
  /**
   * Total DREAM currently escrowed and unpaid.
   */
  amount: string;
  /**
   * Per-funder contributions, so a reclaim or an end-without-verdict refund
   * returns each funder's own DREAM rather than a pro-rata approximation.
   */
  contributions: ReviewBountyContribution[];
  /**
   * True once any verdict has been filed against this initiative. Reclaim is
   * barred from that point: reviewers commit bond and do the reading on the
   * strength of the advertised bounty, so allowing a withdrawal afterwards
   * would make funding a bait-and-switch.
   */
  committed: boolean;
}
export interface ReviewBountyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ReviewBounty";
  value: Uint8Array;
}
/**
 * ReviewBounty is DREAM escrowed against one initiative to attract reviewer
 * attention to it.
 * 
 * The DREAM review fee pays for the act of reviewing at a rate fixed by the
 * budget. A bounty is how the people who actually want a particular initiative
 * looked at — its creator, its stakers, anyone — bid that attention up. Review
 * is the scarcest input in the system once the completion gate is mandatory,
 * and a flat fee cannot express "this one matters more".
 * 
 * Paid out per verdict filed and split across the round's reviewers, exactly
 * like the fee: outcome-blind. A bounty released on successful completion would
 * be a straightforward bribe to approve, which is the bias the reviewer role
 * exists to remove.
 * @name ReviewBountyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBounty
 */
export interface ReviewBountyAmino {
  initiative_id?: string;
  /**
   * Total DREAM currently escrowed and unpaid.
   */
  amount?: string;
  /**
   * Per-funder contributions, so a reclaim or an end-without-verdict refund
   * returns each funder's own DREAM rather than a pro-rata approximation.
   */
  contributions?: ReviewBountyContributionAmino[];
  /**
   * True once any verdict has been filed against this initiative. Reclaim is
   * barred from that point: reviewers commit bond and do the reading on the
   * strength of the advertised bounty, so allowing a withdrawal afterwards
   * would make funding a bait-and-switch.
   */
  committed?: boolean;
}
export interface ReviewBountyAminoMsg {
  type: "/sparkdream.rep.v1.ReviewBounty";
  value: ReviewBountyAmino;
}
/**
 * ReviewBountyContribution is one funder's stake in a bounty.
 * @name ReviewBountyContribution
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBountyContribution
 */
export interface ReviewBountyContribution {
  funder: string;
  amount: string;
  /**
   * Block height the contribution was made, for the reclaim delay.
   */
  fundedAt: bigint;
}
export interface ReviewBountyContributionProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ReviewBountyContribution";
  value: Uint8Array;
}
/**
 * ReviewBountyContribution is one funder's stake in a bounty.
 * @name ReviewBountyContributionAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBountyContribution
 */
export interface ReviewBountyContributionAmino {
  funder?: string;
  amount?: string;
  /**
   * Block height the contribution was made, for the reclaim delay.
   */
  funded_at?: string;
}
export interface ReviewBountyContributionAminoMsg {
  type: "/sparkdream.rep.v1.ReviewBountyContribution";
  value: ReviewBountyContributionAmino;
}
function createBaseReviewBounty(): ReviewBounty {
  return {
    initiativeId: BigInt(0),
    amount: "",
    contributions: [],
    committed: false
  };
}
/**
 * ReviewBounty is DREAM escrowed against one initiative to attract reviewer
 * attention to it.
 * 
 * The DREAM review fee pays for the act of reviewing at a rate fixed by the
 * budget. A bounty is how the people who actually want a particular initiative
 * looked at — its creator, its stakers, anyone — bid that attention up. Review
 * is the scarcest input in the system once the completion gate is mandatory,
 * and a flat fee cannot express "this one matters more".
 * 
 * Paid out per verdict filed and split across the round's reviewers, exactly
 * like the fee: outcome-blind. A bounty released on successful completion would
 * be a straightforward bribe to approve, which is the bias the reviewer role
 * exists to remove.
 * @name ReviewBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBounty
 */
export const ReviewBounty = {
  typeUrl: "/sparkdream.rep.v1.ReviewBounty",
  encode(message: ReviewBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.contributions) {
      ReviewBountyContribution.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.committed === true) {
      writer.uint32(32).bool(message.committed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReviewBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.contributions.push(ReviewBountyContribution.decode(reader, reader.uint32()));
          break;
        case 4:
          message.committed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReviewBounty>): ReviewBounty {
    const message = createBaseReviewBounty();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.contributions = object.contributions?.map(e => ReviewBountyContribution.fromPartial(e)) || [];
    message.committed = object.committed ?? false;
    return message;
  },
  fromAmino(object: ReviewBountyAmino): ReviewBounty {
    const message = createBaseReviewBounty();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.contributions = object.contributions?.map(e => ReviewBountyContribution.fromAmino(e)) || [];
    if (object.committed !== undefined && object.committed !== null) {
      message.committed = object.committed;
    }
    return message;
  },
  toAmino(message: ReviewBounty): ReviewBountyAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? ReviewBountyContribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    obj.committed = message.committed === false ? undefined : message.committed;
    return obj;
  },
  fromAminoMsg(object: ReviewBountyAminoMsg): ReviewBounty {
    return ReviewBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: ReviewBountyProtoMsg): ReviewBounty {
    return ReviewBounty.decode(message.value);
  },
  toProto(message: ReviewBounty): Uint8Array {
    return ReviewBounty.encode(message).finish();
  },
  toProtoMsg(message: ReviewBounty): ReviewBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ReviewBounty",
      value: ReviewBounty.encode(message).finish()
    };
  }
};
function createBaseReviewBountyContribution(): ReviewBountyContribution {
  return {
    funder: "",
    amount: "",
    fundedAt: BigInt(0)
  };
}
/**
 * ReviewBountyContribution is one funder's stake in a bounty.
 * @name ReviewBountyContribution
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBountyContribution
 */
export const ReviewBountyContribution = {
  typeUrl: "/sparkdream.rep.v1.ReviewBountyContribution",
  encode(message: ReviewBountyContribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.fundedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.fundedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReviewBountyContribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewBountyContribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funder = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.fundedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReviewBountyContribution>): ReviewBountyContribution {
    const message = createBaseReviewBountyContribution();
    message.funder = object.funder ?? "";
    message.amount = object.amount ?? "";
    message.fundedAt = object.fundedAt !== undefined && object.fundedAt !== null ? BigInt(object.fundedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReviewBountyContributionAmino): ReviewBountyContribution {
    const message = createBaseReviewBountyContribution();
    if (object.funder !== undefined && object.funder !== null) {
      message.funder = object.funder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.funded_at !== undefined && object.funded_at !== null) {
      message.fundedAt = BigInt(object.funded_at);
    }
    return message;
  },
  toAmino(message: ReviewBountyContribution): ReviewBountyContributionAmino {
    const obj: any = {};
    obj.funder = message.funder === "" ? undefined : message.funder;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.funded_at = message.fundedAt !== BigInt(0) ? message.fundedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReviewBountyContributionAminoMsg): ReviewBountyContribution {
    return ReviewBountyContribution.fromAmino(object.value);
  },
  fromProtoMsg(message: ReviewBountyContributionProtoMsg): ReviewBountyContribution {
    return ReviewBountyContribution.decode(message.value);
  },
  toProto(message: ReviewBountyContribution): Uint8Array {
    return ReviewBountyContribution.encode(message).finish();
  },
  toProtoMsg(message: ReviewBountyContribution): ReviewBountyContributionProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ReviewBountyContribution",
      value: ReviewBountyContribution.encode(message).finish()
    };
  }
};