//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * TitleGrant represents a title and its eligible recipients for a season.
 * @name TitleGrant
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.TitleGrant
 */
export interface TitleGrant {
  /**
   * Title ID
   */
  titleId: string;
  /**
   * Title name
   */
  titleName: string;
  /**
   * Members eligible for this title
   */
  eligibleMembers: string[];
}
export interface TitleGrantProtoMsg {
  typeUrl: "/sparkdream.season.v1.TitleGrant";
  value: Uint8Array;
}
/**
 * TitleGrant represents a title and its eligible recipients for a season.
 * @name TitleGrantAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.TitleGrant
 */
export interface TitleGrantAmino {
  /**
   * Title ID
   */
  title_id?: string;
  /**
   * Title name
   */
  title_name?: string;
  /**
   * Members eligible for this title
   */
  eligible_members?: string[];
}
export interface TitleGrantAminoMsg {
  type: "/sparkdream.season.v1.TitleGrant";
  value: TitleGrantAmino;
}
/**
 * SeasonTitleEligibility tracks title grants for a season.
 * @name SeasonTitleEligibility
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonTitleEligibility
 */
export interface SeasonTitleEligibility {
  /**
   * Key: season number
   */
  titleSeason: bigint;
  /**
   * Season number
   */
  season: bigint;
  /**
   * Title grants for this season
   */
  grants: TitleGrant[];
}
export interface SeasonTitleEligibilityProtoMsg {
  typeUrl: "/sparkdream.season.v1.SeasonTitleEligibility";
  value: Uint8Array;
}
/**
 * SeasonTitleEligibility tracks title grants for a season.
 * @name SeasonTitleEligibilityAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonTitleEligibility
 */
export interface SeasonTitleEligibilityAmino {
  /**
   * Key: season number
   */
  title_season?: string;
  /**
   * Season number
   */
  season?: string;
  /**
   * Title grants for this season
   */
  grants?: TitleGrantAmino[];
}
export interface SeasonTitleEligibilityAminoMsg {
  type: "/sparkdream.season.v1.SeasonTitleEligibility";
  value: SeasonTitleEligibilityAmino;
}
function createBaseTitleGrant(): TitleGrant {
  return {
    titleId: "",
    titleName: "",
    eligibleMembers: []
  };
}
/**
 * TitleGrant represents a title and its eligible recipients for a season.
 * @name TitleGrant
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.TitleGrant
 */
export const TitleGrant = {
  typeUrl: "/sparkdream.season.v1.TitleGrant",
  encode(message: TitleGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.titleId !== "") {
      writer.uint32(10).string(message.titleId);
    }
    if (message.titleName !== "") {
      writer.uint32(18).string(message.titleName);
    }
    for (const v of message.eligibleMembers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TitleGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTitleGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titleId = reader.string();
          break;
        case 2:
          message.titleName = reader.string();
          break;
        case 3:
          message.eligibleMembers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TitleGrant>): TitleGrant {
    const message = createBaseTitleGrant();
    message.titleId = object.titleId ?? "";
    message.titleName = object.titleName ?? "";
    message.eligibleMembers = object.eligibleMembers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TitleGrantAmino): TitleGrant {
    const message = createBaseTitleGrant();
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    if (object.title_name !== undefined && object.title_name !== null) {
      message.titleName = object.title_name;
    }
    message.eligibleMembers = object.eligible_members?.map(e => e) || [];
    return message;
  },
  toAmino(message: TitleGrant): TitleGrantAmino {
    const obj: any = {};
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    obj.title_name = message.titleName === "" ? undefined : message.titleName;
    if (message.eligibleMembers) {
      obj.eligible_members = message.eligibleMembers.map(e => e);
    } else {
      obj.eligible_members = message.eligibleMembers;
    }
    return obj;
  },
  fromAminoMsg(object: TitleGrantAminoMsg): TitleGrant {
    return TitleGrant.fromAmino(object.value);
  },
  fromProtoMsg(message: TitleGrantProtoMsg): TitleGrant {
    return TitleGrant.decode(message.value);
  },
  toProto(message: TitleGrant): Uint8Array {
    return TitleGrant.encode(message).finish();
  },
  toProtoMsg(message: TitleGrant): TitleGrantProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.TitleGrant",
      value: TitleGrant.encode(message).finish()
    };
  }
};
function createBaseSeasonTitleEligibility(): SeasonTitleEligibility {
  return {
    titleSeason: BigInt(0),
    season: BigInt(0),
    grants: []
  };
}
/**
 * SeasonTitleEligibility tracks title grants for a season.
 * @name SeasonTitleEligibility
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonTitleEligibility
 */
export const SeasonTitleEligibility = {
  typeUrl: "/sparkdream.season.v1.SeasonTitleEligibility",
  encode(message: SeasonTitleEligibility, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.titleSeason !== BigInt(0)) {
      writer.uint32(8).uint64(message.titleSeason);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(16).uint64(message.season);
    }
    for (const v of message.grants) {
      TitleGrant.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SeasonTitleEligibility {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonTitleEligibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titleSeason = reader.uint64();
          break;
        case 2:
          message.season = reader.uint64();
          break;
        case 3:
          message.grants.push(TitleGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SeasonTitleEligibility>): SeasonTitleEligibility {
    const message = createBaseSeasonTitleEligibility();
    message.titleSeason = object.titleSeason !== undefined && object.titleSeason !== null ? BigInt(object.titleSeason.toString()) : BigInt(0);
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.grants = object.grants?.map(e => TitleGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SeasonTitleEligibilityAmino): SeasonTitleEligibility {
    const message = createBaseSeasonTitleEligibility();
    if (object.title_season !== undefined && object.title_season !== null) {
      message.titleSeason = BigInt(object.title_season);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    message.grants = object.grants?.map(e => TitleGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SeasonTitleEligibility): SeasonTitleEligibilityAmino {
    const obj: any = {};
    obj.title_season = message.titleSeason !== BigInt(0) ? message.titleSeason?.toString() : undefined;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? TitleGrant.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object: SeasonTitleEligibilityAminoMsg): SeasonTitleEligibility {
    return SeasonTitleEligibility.fromAmino(object.value);
  },
  fromProtoMsg(message: SeasonTitleEligibilityProtoMsg): SeasonTitleEligibility {
    return SeasonTitleEligibility.decode(message.value);
  },
  toProto(message: SeasonTitleEligibility): Uint8Array {
    return SeasonTitleEligibility.encode(message).finish();
  },
  toProtoMsg(message: SeasonTitleEligibility): SeasonTitleEligibilityProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.SeasonTitleEligibility",
      value: SeasonTitleEligibility.encode(message).finish()
    };
  }
};