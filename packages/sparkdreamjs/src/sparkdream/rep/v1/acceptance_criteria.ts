//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export enum CriteriaType {
  CRITERIA_TYPE_BINARY = 0,
  CRITERIA_TYPE_SCALE = 1,
  CRITERIA_TYPE_TEXT = 2,
  UNRECOGNIZED = -1,
}
export const CriteriaTypeAmino = CriteriaType;
export function criteriaTypeFromJSON(object: any): CriteriaType {
  switch (object) {
    case 0:
    case "CRITERIA_TYPE_BINARY":
      return CriteriaType.CRITERIA_TYPE_BINARY;
    case 1:
    case "CRITERIA_TYPE_SCALE":
      return CriteriaType.CRITERIA_TYPE_SCALE;
    case 2:
    case "CRITERIA_TYPE_TEXT":
      return CriteriaType.CRITERIA_TYPE_TEXT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CriteriaType.UNRECOGNIZED;
  }
}
export function criteriaTypeToJSON(object: CriteriaType): string {
  switch (object) {
    case CriteriaType.CRITERIA_TYPE_BINARY:
      return "CRITERIA_TYPE_BINARY";
    case CriteriaType.CRITERIA_TYPE_SCALE:
      return "CRITERIA_TYPE_SCALE";
    case CriteriaType.CRITERIA_TYPE_TEXT:
      return "CRITERIA_TYPE_TEXT";
    case CriteriaType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * A single item in an initiative's definition of done.
 * 
 * Declared on the initiative at creation and immutable afterwards, so the
 * standard is fixed before any work starts. Consumed by MsgCreateChallenge
 * (the challenger names the criterion the work fails) and by MsgSubmitJurorVote
 * (a juror's per-item verdicts must answer criteria the initiative actually
 * declared).
 * 
 * These types previously sat alongside an InterimTemplate registry, since
 * removed: no message ever created a template, all three networks shipped zero
 * of them, and Initiative.template_id resolved against nothing. Criteria are
 * declared per-initiative precisely because a template reference would have
 * been a pointer into an empty store.
 * @name VerificationCriteria
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.VerificationCriteria
 */
export interface VerificationCriteria {
  id: string;
  question: string;
  type: CriteriaType;
  required: boolean;
  howToVerify: string;
  evidence: string;
}
export interface VerificationCriteriaProtoMsg {
  typeUrl: "/sparkdream.rep.v1.VerificationCriteria";
  value: Uint8Array;
}
/**
 * A single item in an initiative's definition of done.
 * 
 * Declared on the initiative at creation and immutable afterwards, so the
 * standard is fixed before any work starts. Consumed by MsgCreateChallenge
 * (the challenger names the criterion the work fails) and by MsgSubmitJurorVote
 * (a juror's per-item verdicts must answer criteria the initiative actually
 * declared).
 * 
 * These types previously sat alongside an InterimTemplate registry, since
 * removed: no message ever created a template, all three networks shipped zero
 * of them, and Initiative.template_id resolved against nothing. Criteria are
 * declared per-initiative precisely because a template reference would have
 * been a pointer into an empty store.
 * @name VerificationCriteriaAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.VerificationCriteria
 */
export interface VerificationCriteriaAmino {
  id?: string;
  question?: string;
  type?: CriteriaType;
  required?: boolean;
  how_to_verify?: string;
  evidence?: string;
}
export interface VerificationCriteriaAminoMsg {
  type: "/sparkdream.rep.v1.VerificationCriteria";
  value: VerificationCriteriaAmino;
}
function createBaseVerificationCriteria(): VerificationCriteria {
  return {
    id: "",
    question: "",
    type: 0,
    required: false,
    howToVerify: "",
    evidence: ""
  };
}
/**
 * A single item in an initiative's definition of done.
 * 
 * Declared on the initiative at creation and immutable afterwards, so the
 * standard is fixed before any work starts. Consumed by MsgCreateChallenge
 * (the challenger names the criterion the work fails) and by MsgSubmitJurorVote
 * (a juror's per-item verdicts must answer criteria the initiative actually
 * declared).
 * 
 * These types previously sat alongside an InterimTemplate registry, since
 * removed: no message ever created a template, all three networks shipped zero
 * of them, and Initiative.template_id resolved against nothing. Criteria are
 * declared per-initiative precisely because a template reference would have
 * been a pointer into an empty store.
 * @name VerificationCriteria
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.VerificationCriteria
 */
export const VerificationCriteria = {
  typeUrl: "/sparkdream.rep.v1.VerificationCriteria",
  encode(message: VerificationCriteria, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.question !== "") {
      writer.uint32(18).string(message.question);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.required === true) {
      writer.uint32(32).bool(message.required);
    }
    if (message.howToVerify !== "") {
      writer.uint32(42).string(message.howToVerify);
    }
    if (message.evidence !== "") {
      writer.uint32(50).string(message.evidence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerificationCriteria {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.question = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.required = reader.bool();
          break;
        case 5:
          message.howToVerify = reader.string();
          break;
        case 6:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerificationCriteria>): VerificationCriteria {
    const message = createBaseVerificationCriteria();
    message.id = object.id ?? "";
    message.question = object.question ?? "";
    message.type = object.type ?? 0;
    message.required = object.required ?? false;
    message.howToVerify = object.howToVerify ?? "";
    message.evidence = object.evidence ?? "";
    return message;
  },
  fromAmino(object: VerificationCriteriaAmino): VerificationCriteria {
    const message = createBaseVerificationCriteria();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    }
    if (object.how_to_verify !== undefined && object.how_to_verify !== null) {
      message.howToVerify = object.how_to_verify;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    }
    return message;
  },
  toAmino(message: VerificationCriteria): VerificationCriteriaAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.question = message.question === "" ? undefined : message.question;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.required = message.required === false ? undefined : message.required;
    obj.how_to_verify = message.howToVerify === "" ? undefined : message.howToVerify;
    obj.evidence = message.evidence === "" ? undefined : message.evidence;
    return obj;
  },
  fromAminoMsg(object: VerificationCriteriaAminoMsg): VerificationCriteria {
    return VerificationCriteria.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationCriteriaProtoMsg): VerificationCriteria {
    return VerificationCriteria.decode(message.value);
  },
  toProto(message: VerificationCriteria): Uint8Array {
    return VerificationCriteria.encode(message).finish();
  },
  toProtoMsg(message: VerificationCriteria): VerificationCriteriaProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.VerificationCriteria",
      value: VerificationCriteria.encode(message).finish()
    };
  }
};