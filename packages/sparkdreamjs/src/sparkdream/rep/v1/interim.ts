//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export enum InterimType {
  /** INTERIM_TYPE_JURY_DUTY - Jury and dispute resolution */
  INTERIM_TYPE_JURY_DUTY = 0,
  INTERIM_TYPE_EXPERT_TESTIMONY = 1,
  INTERIM_TYPE_DISPUTE_MEDIATION = 2,
  /** INTERIM_TYPE_PROJECT_APPROVAL - Administrative reviews */
  INTERIM_TYPE_PROJECT_APPROVAL = 3,
  INTERIM_TYPE_BUDGET_REVIEW = 4,
  INTERIM_TYPE_CONTRIBUTION_REVIEW = 5,
  INTERIM_TYPE_EXCEPTION_REQUEST = 6,
  /** INTERIM_TYPE_TRANCHE_VERIFICATION - Verification */
  INTERIM_TYPE_TRANCHE_VERIFICATION = 7,
  /** INTERIM_TYPE_AUDIT - Future extensibility */
  INTERIM_TYPE_AUDIT = 8,
  INTERIM_TYPE_MODERATION = 9,
  INTERIM_TYPE_MENTORSHIP = 10,
  /** INTERIM_TYPE_ADJUDICATION - Inconclusive Verdict Escalation */
  INTERIM_TYPE_ADJUDICATION = 12,
  INTERIM_TYPE_OTHER = 11,
  UNRECOGNIZED = -1,
}
export const InterimTypeAmino = InterimType;
export function interimTypeFromJSON(object: any): InterimType {
  switch (object) {
    case 0:
    case "INTERIM_TYPE_JURY_DUTY":
      return InterimType.INTERIM_TYPE_JURY_DUTY;
    case 1:
    case "INTERIM_TYPE_EXPERT_TESTIMONY":
      return InterimType.INTERIM_TYPE_EXPERT_TESTIMONY;
    case 2:
    case "INTERIM_TYPE_DISPUTE_MEDIATION":
      return InterimType.INTERIM_TYPE_DISPUTE_MEDIATION;
    case 3:
    case "INTERIM_TYPE_PROJECT_APPROVAL":
      return InterimType.INTERIM_TYPE_PROJECT_APPROVAL;
    case 4:
    case "INTERIM_TYPE_BUDGET_REVIEW":
      return InterimType.INTERIM_TYPE_BUDGET_REVIEW;
    case 5:
    case "INTERIM_TYPE_CONTRIBUTION_REVIEW":
      return InterimType.INTERIM_TYPE_CONTRIBUTION_REVIEW;
    case 6:
    case "INTERIM_TYPE_EXCEPTION_REQUEST":
      return InterimType.INTERIM_TYPE_EXCEPTION_REQUEST;
    case 7:
    case "INTERIM_TYPE_TRANCHE_VERIFICATION":
      return InterimType.INTERIM_TYPE_TRANCHE_VERIFICATION;
    case 8:
    case "INTERIM_TYPE_AUDIT":
      return InterimType.INTERIM_TYPE_AUDIT;
    case 9:
    case "INTERIM_TYPE_MODERATION":
      return InterimType.INTERIM_TYPE_MODERATION;
    case 10:
    case "INTERIM_TYPE_MENTORSHIP":
      return InterimType.INTERIM_TYPE_MENTORSHIP;
    case 12:
    case "INTERIM_TYPE_ADJUDICATION":
      return InterimType.INTERIM_TYPE_ADJUDICATION;
    case 11:
    case "INTERIM_TYPE_OTHER":
      return InterimType.INTERIM_TYPE_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InterimType.UNRECOGNIZED;
  }
}
export function interimTypeToJSON(object: InterimType): string {
  switch (object) {
    case InterimType.INTERIM_TYPE_JURY_DUTY:
      return "INTERIM_TYPE_JURY_DUTY";
    case InterimType.INTERIM_TYPE_EXPERT_TESTIMONY:
      return "INTERIM_TYPE_EXPERT_TESTIMONY";
    case InterimType.INTERIM_TYPE_DISPUTE_MEDIATION:
      return "INTERIM_TYPE_DISPUTE_MEDIATION";
    case InterimType.INTERIM_TYPE_PROJECT_APPROVAL:
      return "INTERIM_TYPE_PROJECT_APPROVAL";
    case InterimType.INTERIM_TYPE_BUDGET_REVIEW:
      return "INTERIM_TYPE_BUDGET_REVIEW";
    case InterimType.INTERIM_TYPE_CONTRIBUTION_REVIEW:
      return "INTERIM_TYPE_CONTRIBUTION_REVIEW";
    case InterimType.INTERIM_TYPE_EXCEPTION_REQUEST:
      return "INTERIM_TYPE_EXCEPTION_REQUEST";
    case InterimType.INTERIM_TYPE_TRANCHE_VERIFICATION:
      return "INTERIM_TYPE_TRANCHE_VERIFICATION";
    case InterimType.INTERIM_TYPE_AUDIT:
      return "INTERIM_TYPE_AUDIT";
    case InterimType.INTERIM_TYPE_MODERATION:
      return "INTERIM_TYPE_MODERATION";
    case InterimType.INTERIM_TYPE_MENTORSHIP:
      return "INTERIM_TYPE_MENTORSHIP";
    case InterimType.INTERIM_TYPE_ADJUDICATION:
      return "INTERIM_TYPE_ADJUDICATION";
    case InterimType.INTERIM_TYPE_OTHER:
      return "INTERIM_TYPE_OTHER";
    case InterimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InterimComplexity {
  /** INTERIM_COMPLEXITY_SIMPLE - ~50 DREAM */
  INTERIM_COMPLEXITY_SIMPLE = 0,
  /** INTERIM_COMPLEXITY_STANDARD - ~150 DREAM */
  INTERIM_COMPLEXITY_STANDARD = 1,
  /** INTERIM_COMPLEXITY_COMPLEX - ~400 DREAM */
  INTERIM_COMPLEXITY_COMPLEX = 2,
  /** INTERIM_COMPLEXITY_EXPERT - ~1000 DREAM */
  INTERIM_COMPLEXITY_EXPERT = 3,
  /** INTERIM_COMPLEXITY_EPIC - ~2500 DREAM (for critical disputes) */
  INTERIM_COMPLEXITY_EPIC = 4,
  UNRECOGNIZED = -1,
}
export const InterimComplexityAmino = InterimComplexity;
export function interimComplexityFromJSON(object: any): InterimComplexity {
  switch (object) {
    case 0:
    case "INTERIM_COMPLEXITY_SIMPLE":
      return InterimComplexity.INTERIM_COMPLEXITY_SIMPLE;
    case 1:
    case "INTERIM_COMPLEXITY_STANDARD":
      return InterimComplexity.INTERIM_COMPLEXITY_STANDARD;
    case 2:
    case "INTERIM_COMPLEXITY_COMPLEX":
      return InterimComplexity.INTERIM_COMPLEXITY_COMPLEX;
    case 3:
    case "INTERIM_COMPLEXITY_EXPERT":
      return InterimComplexity.INTERIM_COMPLEXITY_EXPERT;
    case 4:
    case "INTERIM_COMPLEXITY_EPIC":
      return InterimComplexity.INTERIM_COMPLEXITY_EPIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InterimComplexity.UNRECOGNIZED;
  }
}
export function interimComplexityToJSON(object: InterimComplexity): string {
  switch (object) {
    case InterimComplexity.INTERIM_COMPLEXITY_SIMPLE:
      return "INTERIM_COMPLEXITY_SIMPLE";
    case InterimComplexity.INTERIM_COMPLEXITY_STANDARD:
      return "INTERIM_COMPLEXITY_STANDARD";
    case InterimComplexity.INTERIM_COMPLEXITY_COMPLEX:
      return "INTERIM_COMPLEXITY_COMPLEX";
    case InterimComplexity.INTERIM_COMPLEXITY_EXPERT:
      return "INTERIM_COMPLEXITY_EXPERT";
    case InterimComplexity.INTERIM_COMPLEXITY_EPIC:
      return "INTERIM_COMPLEXITY_EPIC";
    case InterimComplexity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InterimStatus {
  INTERIM_STATUS_PENDING = 0,
  INTERIM_STATUS_IN_PROGRESS = 1,
  INTERIM_STATUS_COMPLETED = 2,
  INTERIM_STATUS_EXPIRED = 3,
  INTERIM_STATUS_ESCALATED = 4,
  UNRECOGNIZED = -1,
}
export const InterimStatusAmino = InterimStatus;
export function interimStatusFromJSON(object: any): InterimStatus {
  switch (object) {
    case 0:
    case "INTERIM_STATUS_PENDING":
      return InterimStatus.INTERIM_STATUS_PENDING;
    case 1:
    case "INTERIM_STATUS_IN_PROGRESS":
      return InterimStatus.INTERIM_STATUS_IN_PROGRESS;
    case 2:
    case "INTERIM_STATUS_COMPLETED":
      return InterimStatus.INTERIM_STATUS_COMPLETED;
    case 3:
    case "INTERIM_STATUS_EXPIRED":
      return InterimStatus.INTERIM_STATUS_EXPIRED;
    case 4:
    case "INTERIM_STATUS_ESCALATED":
      return InterimStatus.INTERIM_STATUS_ESCALATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InterimStatus.UNRECOGNIZED;
  }
}
export function interimStatusToJSON(object: InterimStatus): string {
  switch (object) {
    case InterimStatus.INTERIM_STATUS_PENDING:
      return "INTERIM_STATUS_PENDING";
    case InterimStatus.INTERIM_STATUS_IN_PROGRESS:
      return "INTERIM_STATUS_IN_PROGRESS";
    case InterimStatus.INTERIM_STATUS_COMPLETED:
      return "INTERIM_STATUS_COMPLETED";
    case InterimStatus.INTERIM_STATUS_EXPIRED:
      return "INTERIM_STATUS_EXPIRED";
    case InterimStatus.INTERIM_STATUS_ESCALATED:
      return "INTERIM_STATUS_ESCALATED";
    case InterimStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Interim defines the Interim message.
 * @name Interim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Interim
 */
export interface Interim {
  id: bigint;
  type: InterimType;
  /**
   * Who is responsible
   */
  assignees: string[];
  /**
   * optional - for committee-level interims
   */
  committee: string;
  /**
   * Reference to related entity
   */
  referenceId: bigint;
  /**
   * "jury_review", "project", "contribution", etc.
   */
  referenceType: string;
  /**
   * Compensation
   */
  complexity: InterimComplexity;
  budget: string;
  /**
   * Timing
   */
  deadline: bigint;
  createdAt: bigint;
  completedAt: bigint;
  /**
   * Status
   */
  status: InterimStatus;
  completionNotes: string;
}
export interface InterimProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Interim";
  value: Uint8Array;
}
/**
 * Interim defines the Interim message.
 * @name InterimAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Interim
 */
export interface InterimAmino {
  id?: string;
  type?: InterimType;
  /**
   * Who is responsible
   */
  assignees?: string[];
  /**
   * optional - for committee-level interims
   */
  committee?: string;
  /**
   * Reference to related entity
   */
  reference_id?: string;
  /**
   * "jury_review", "project", "contribution", etc.
   */
  reference_type?: string;
  /**
   * Compensation
   */
  complexity?: InterimComplexity;
  budget?: string;
  /**
   * Timing
   */
  deadline?: string;
  created_at?: string;
  completed_at?: string;
  /**
   * Status
   */
  status?: InterimStatus;
  completion_notes?: string;
}
export interface InterimAminoMsg {
  type: "/sparkdream.rep.v1.Interim";
  value: InterimAmino;
}
function createBaseInterim(): Interim {
  return {
    id: BigInt(0),
    type: 0,
    assignees: [],
    committee: "",
    referenceId: BigInt(0),
    referenceType: "",
    complexity: 0,
    budget: "",
    deadline: BigInt(0),
    createdAt: BigInt(0),
    completedAt: BigInt(0),
    status: 0,
    completionNotes: ""
  };
}
/**
 * Interim defines the Interim message.
 * @name Interim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Interim
 */
export const Interim = {
  typeUrl: "/sparkdream.rep.v1.Interim",
  encode(message: Interim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    for (const v of message.assignees) {
      writer.uint32(26).string(v!);
    }
    if (message.committee !== "") {
      writer.uint32(34).string(message.committee);
    }
    if (message.referenceId !== BigInt(0)) {
      writer.uint32(40).uint64(message.referenceId);
    }
    if (message.referenceType !== "") {
      writer.uint32(50).string(message.referenceType);
    }
    if (message.complexity !== 0) {
      writer.uint32(56).int32(message.complexity);
    }
    if (message.budget !== "") {
      writer.uint32(66).string(message.budget);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(72).int64(message.deadline);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(80).int64(message.createdAt);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.completedAt);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    if (message.completionNotes !== "") {
      writer.uint32(106).string(message.completionNotes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Interim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.assignees.push(reader.string());
          break;
        case 4:
          message.committee = reader.string();
          break;
        case 5:
          message.referenceId = reader.uint64();
          break;
        case 6:
          message.referenceType = reader.string();
          break;
        case 7:
          message.complexity = reader.int32() as any;
          break;
        case 8:
          message.budget = reader.string();
          break;
        case 9:
          message.deadline = reader.int64();
          break;
        case 10:
          message.createdAt = reader.int64();
          break;
        case 11:
          message.completedAt = reader.int64();
          break;
        case 12:
          message.status = reader.int32() as any;
          break;
        case 13:
          message.completionNotes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Interim>): Interim {
    const message = createBaseInterim();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.type = object.type ?? 0;
    message.assignees = object.assignees?.map(e => e) || [];
    message.committee = object.committee ?? "";
    message.referenceId = object.referenceId !== undefined && object.referenceId !== null ? BigInt(object.referenceId.toString()) : BigInt(0);
    message.referenceType = object.referenceType ?? "";
    message.complexity = object.complexity ?? 0;
    message.budget = object.budget ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.completionNotes = object.completionNotes ?? "";
    return message;
  },
  fromAmino(object: InterimAmino): Interim {
    const message = createBaseInterim();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.assignees = object.assignees?.map(e => e) || [];
    if (object.committee !== undefined && object.committee !== null) {
      message.committee = object.committee;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = BigInt(object.reference_id);
    }
    if (object.reference_type !== undefined && object.reference_type !== null) {
      message.referenceType = object.reference_type;
    }
    if (object.complexity !== undefined && object.complexity !== null) {
      message.complexity = object.complexity;
    }
    if (object.budget !== undefined && object.budget !== null) {
      message.budget = object.budget;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.completion_notes !== undefined && object.completion_notes !== null) {
      message.completionNotes = object.completion_notes;
    }
    return message;
  },
  toAmino(message: Interim): InterimAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    obj.committee = message.committee === "" ? undefined : message.committee;
    obj.reference_id = message.referenceId !== BigInt(0) ? message.referenceId?.toString() : undefined;
    obj.reference_type = message.referenceType === "" ? undefined : message.referenceType;
    obj.complexity = message.complexity === 0 ? undefined : message.complexity;
    obj.budget = message.budget === "" ? undefined : message.budget;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.completed_at = message.completedAt !== BigInt(0) ? message.completedAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.completion_notes = message.completionNotes === "" ? undefined : message.completionNotes;
    return obj;
  },
  fromAminoMsg(object: InterimAminoMsg): Interim {
    return Interim.fromAmino(object.value);
  },
  fromProtoMsg(message: InterimProtoMsg): Interim {
    return Interim.decode(message.value);
  },
  toProto(message: Interim): Uint8Array {
    return Interim.encode(message).finish();
  },
  toProtoMsg(message: Interim): InterimProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Interim",
      value: Interim.encode(message).finish()
    };
  }
};