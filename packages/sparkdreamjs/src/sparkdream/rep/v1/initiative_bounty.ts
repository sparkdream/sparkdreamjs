//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * InitiativeBounty is DREAM escrowed against one initiative by members who
 * want the work done, paid to the assignee only if the initiative completes.
 * 
 * The budget is minted; a bounty moves DREAM that already exists, so it is the
 * non-inflationary way to signal demand. Because it is contingent on completion
 * it is also a route for DREAM between members, which is why it is capped
 * against the budget and per funder, barred to anyone affiliated with the work,
 * taxed on release, and counted against the assignee's recipient-side transfer
 * limits. Distinct from ReviewBounty, which pays reviewers per verdict filed
 * and is never contingent on approval.
 * @name InitiativeBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeBounty
 */
export interface InitiativeBounty {
  initiativeId: bigint;
  /**
   * Total DREAM currently escrowed and unpaid.
   */
  amount: string;
  /**
   * Per-funder contributions, so refunds return each funder's own DREAM.
   */
  contributions: InitiativeBountyContribution[];
}
export interface InitiativeBountyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.InitiativeBounty";
  value: Uint8Array;
}
/**
 * InitiativeBounty is DREAM escrowed against one initiative by members who
 * want the work done, paid to the assignee only if the initiative completes.
 * 
 * The budget is minted; a bounty moves DREAM that already exists, so it is the
 * non-inflationary way to signal demand. Because it is contingent on completion
 * it is also a route for DREAM between members, which is why it is capped
 * against the budget and per funder, barred to anyone affiliated with the work,
 * taxed on release, and counted against the assignee's recipient-side transfer
 * limits. Distinct from ReviewBounty, which pays reviewers per verdict filed
 * and is never contingent on approval.
 * @name InitiativeBountyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeBounty
 */
export interface InitiativeBountyAmino {
  initiative_id?: string;
  /**
   * Total DREAM currently escrowed and unpaid.
   */
  amount?: string;
  /**
   * Per-funder contributions, so refunds return each funder's own DREAM.
   */
  contributions?: InitiativeBountyContributionAmino[];
}
export interface InitiativeBountyAminoMsg {
  type: "/sparkdream.rep.v1.InitiativeBounty";
  value: InitiativeBountyAmino;
}
/**
 * InitiativeBountyContribution is one funder's stake in an initiative bounty.
 * @name InitiativeBountyContribution
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeBountyContribution
 */
export interface InitiativeBountyContribution {
  funder: string;
  amount: string;
  /**
   * Block height, for initiative_bounty_reclaim_delay.
   */
  fundedAt: bigint;
}
export interface InitiativeBountyContributionProtoMsg {
  typeUrl: "/sparkdream.rep.v1.InitiativeBountyContribution";
  value: Uint8Array;
}
/**
 * InitiativeBountyContribution is one funder's stake in an initiative bounty.
 * @name InitiativeBountyContributionAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeBountyContribution
 */
export interface InitiativeBountyContributionAmino {
  funder?: string;
  amount?: string;
  /**
   * Block height, for initiative_bounty_reclaim_delay.
   */
  funded_at?: string;
}
export interface InitiativeBountyContributionAminoMsg {
  type: "/sparkdream.rep.v1.InitiativeBountyContribution";
  value: InitiativeBountyContributionAmino;
}
function createBaseInitiativeBounty(): InitiativeBounty {
  return {
    initiativeId: BigInt(0),
    amount: "",
    contributions: []
  };
}
/**
 * InitiativeBounty is DREAM escrowed against one initiative by members who
 * want the work done, paid to the assignee only if the initiative completes.
 * 
 * The budget is minted; a bounty moves DREAM that already exists, so it is the
 * non-inflationary way to signal demand. Because it is contingent on completion
 * it is also a route for DREAM between members, which is why it is capped
 * against the budget and per funder, barred to anyone affiliated with the work,
 * taxed on release, and counted against the assignee's recipient-side transfer
 * limits. Distinct from ReviewBounty, which pays reviewers per verdict filed
 * and is never contingent on approval.
 * @name InitiativeBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeBounty
 */
export const InitiativeBounty = {
  typeUrl: "/sparkdream.rep.v1.InitiativeBounty",
  encode(message: InitiativeBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.contributions) {
      InitiativeBountyContribution.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InitiativeBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitiativeBounty();
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
          message.contributions.push(InitiativeBountyContribution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InitiativeBounty>): InitiativeBounty {
    const message = createBaseInitiativeBounty();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.contributions = object.contributions?.map(e => InitiativeBountyContribution.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InitiativeBountyAmino): InitiativeBounty {
    const message = createBaseInitiativeBounty();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.contributions = object.contributions?.map(e => InitiativeBountyContribution.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InitiativeBounty): InitiativeBountyAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? InitiativeBountyContribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    return obj;
  },
  fromAminoMsg(object: InitiativeBountyAminoMsg): InitiativeBounty {
    return InitiativeBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: InitiativeBountyProtoMsg): InitiativeBounty {
    return InitiativeBounty.decode(message.value);
  },
  toProto(message: InitiativeBounty): Uint8Array {
    return InitiativeBounty.encode(message).finish();
  },
  toProtoMsg(message: InitiativeBounty): InitiativeBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.InitiativeBounty",
      value: InitiativeBounty.encode(message).finish()
    };
  }
};
function createBaseInitiativeBountyContribution(): InitiativeBountyContribution {
  return {
    funder: "",
    amount: "",
    fundedAt: BigInt(0)
  };
}
/**
 * InitiativeBountyContribution is one funder's stake in an initiative bounty.
 * @name InitiativeBountyContribution
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeBountyContribution
 */
export const InitiativeBountyContribution = {
  typeUrl: "/sparkdream.rep.v1.InitiativeBountyContribution",
  encode(message: InitiativeBountyContribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): InitiativeBountyContribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitiativeBountyContribution();
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
  fromPartial(object: DeepPartial<InitiativeBountyContribution>): InitiativeBountyContribution {
    const message = createBaseInitiativeBountyContribution();
    message.funder = object.funder ?? "";
    message.amount = object.amount ?? "";
    message.fundedAt = object.fundedAt !== undefined && object.fundedAt !== null ? BigInt(object.fundedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: InitiativeBountyContributionAmino): InitiativeBountyContribution {
    const message = createBaseInitiativeBountyContribution();
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
  toAmino(message: InitiativeBountyContribution): InitiativeBountyContributionAmino {
    const obj: any = {};
    obj.funder = message.funder === "" ? undefined : message.funder;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.funded_at = message.fundedAt !== BigInt(0) ? message.fundedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InitiativeBountyContributionAminoMsg): InitiativeBountyContribution {
    return InitiativeBountyContribution.fromAmino(object.value);
  },
  fromProtoMsg(message: InitiativeBountyContributionProtoMsg): InitiativeBountyContribution {
    return InitiativeBountyContribution.decode(message.value);
  },
  toProto(message: InitiativeBountyContribution): Uint8Array {
    return InitiativeBountyContribution.encode(message).finish();
  },
  toProtoMsg(message: InitiativeBountyContribution): InitiativeBountyContributionProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.InitiativeBountyContribution",
      value: InitiativeBountyContribution.encode(message).finish()
    };
  }
};