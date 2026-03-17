//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
export enum ProjectCategory {
  PROJECT_CATEGORY_INFRASTRUCTURE = 0,
  PROJECT_CATEGORY_ECOSYSTEM = 1,
  PROJECT_CATEGORY_CREATIVE = 2,
  PROJECT_CATEGORY_RESEARCH = 3,
  PROJECT_CATEGORY_OPERATIONS = 4,
  UNRECOGNIZED = -1,
}
export const ProjectCategoryAmino = ProjectCategory;
export function projectCategoryFromJSON(object: any): ProjectCategory {
  switch (object) {
    case 0:
    case "PROJECT_CATEGORY_INFRASTRUCTURE":
      return ProjectCategory.PROJECT_CATEGORY_INFRASTRUCTURE;
    case 1:
    case "PROJECT_CATEGORY_ECOSYSTEM":
      return ProjectCategory.PROJECT_CATEGORY_ECOSYSTEM;
    case 2:
    case "PROJECT_CATEGORY_CREATIVE":
      return ProjectCategory.PROJECT_CATEGORY_CREATIVE;
    case 3:
    case "PROJECT_CATEGORY_RESEARCH":
      return ProjectCategory.PROJECT_CATEGORY_RESEARCH;
    case 4:
    case "PROJECT_CATEGORY_OPERATIONS":
      return ProjectCategory.PROJECT_CATEGORY_OPERATIONS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectCategory.UNRECOGNIZED;
  }
}
export function projectCategoryToJSON(object: ProjectCategory): string {
  switch (object) {
    case ProjectCategory.PROJECT_CATEGORY_INFRASTRUCTURE:
      return "PROJECT_CATEGORY_INFRASTRUCTURE";
    case ProjectCategory.PROJECT_CATEGORY_ECOSYSTEM:
      return "PROJECT_CATEGORY_ECOSYSTEM";
    case ProjectCategory.PROJECT_CATEGORY_CREATIVE:
      return "PROJECT_CATEGORY_CREATIVE";
    case ProjectCategory.PROJECT_CATEGORY_RESEARCH:
      return "PROJECT_CATEGORY_RESEARCH";
    case ProjectCategory.PROJECT_CATEGORY_OPERATIONS:
      return "PROJECT_CATEGORY_OPERATIONS";
    case ProjectCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ProjectStatus {
  PROJECT_STATUS_PROPOSED = 0,
  PROJECT_STATUS_ACTIVE = 1,
  PROJECT_STATUS_COMPLETED = 2,
  PROJECT_STATUS_CANCELLED = 3,
  UNRECOGNIZED = -1,
}
export const ProjectStatusAmino = ProjectStatus;
export function projectStatusFromJSON(object: any): ProjectStatus {
  switch (object) {
    case 0:
    case "PROJECT_STATUS_PROPOSED":
      return ProjectStatus.PROJECT_STATUS_PROPOSED;
    case 1:
    case "PROJECT_STATUS_ACTIVE":
      return ProjectStatus.PROJECT_STATUS_ACTIVE;
    case 2:
    case "PROJECT_STATUS_COMPLETED":
      return ProjectStatus.PROJECT_STATUS_COMPLETED;
    case 3:
    case "PROJECT_STATUS_CANCELLED":
      return ProjectStatus.PROJECT_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectStatus.UNRECOGNIZED;
  }
}
export function projectStatusToJSON(object: ProjectStatus): string {
  switch (object) {
    case ProjectStatus.PROJECT_STATUS_PROPOSED:
      return "PROJECT_STATUS_PROPOSED";
    case ProjectStatus.PROJECT_STATUS_ACTIVE:
      return "PROJECT_STATUS_ACTIVE";
    case ProjectStatus.PROJECT_STATUS_COMPLETED:
      return "PROJECT_STATUS_COMPLETED";
    case ProjectStatus.PROJECT_STATUS_CANCELLED:
      return "PROJECT_STATUS_CANCELLED";
    case ProjectStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ReviewProcess {
  REVIEW_PROCESS_CONVICTION_ONLY = 0,
  REVIEW_PROCESS_CREATOR_APPROVAL = 1,
  REVIEW_PROCESS_PEER_REVIEW = 2,
  REVIEW_PROCESS_COMMITTEE_REVIEW = 3,
  UNRECOGNIZED = -1,
}
export const ReviewProcessAmino = ReviewProcess;
export function reviewProcessFromJSON(object: any): ReviewProcess {
  switch (object) {
    case 0:
    case "REVIEW_PROCESS_CONVICTION_ONLY":
      return ReviewProcess.REVIEW_PROCESS_CONVICTION_ONLY;
    case 1:
    case "REVIEW_PROCESS_CREATOR_APPROVAL":
      return ReviewProcess.REVIEW_PROCESS_CREATOR_APPROVAL;
    case 2:
    case "REVIEW_PROCESS_PEER_REVIEW":
      return ReviewProcess.REVIEW_PROCESS_PEER_REVIEW;
    case 3:
    case "REVIEW_PROCESS_COMMITTEE_REVIEW":
      return ReviewProcess.REVIEW_PROCESS_COMMITTEE_REVIEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReviewProcess.UNRECOGNIZED;
  }
}
export function reviewProcessToJSON(object: ReviewProcess): string {
  switch (object) {
    case ReviewProcess.REVIEW_PROCESS_CONVICTION_ONLY:
      return "REVIEW_PROCESS_CONVICTION_ONLY";
    case ReviewProcess.REVIEW_PROCESS_CREATOR_APPROVAL:
      return "REVIEW_PROCESS_CREATOR_APPROVAL";
    case ReviewProcess.REVIEW_PROCESS_PEER_REVIEW:
      return "REVIEW_PROCESS_PEER_REVIEW";
    case ReviewProcess.REVIEW_PROCESS_COMMITTEE_REVIEW:
      return "REVIEW_PROCESS_COMMITTEE_REVIEW";
    case ReviewProcess.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Project defines the Project message.
 * @name Project
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Project
 */
export interface Project {
  id: bigint;
  name: string;
  description: string;
  creator: string;
  tags: string[];
  category: ProjectCategory;
  council: string;
  approvedBudget: string;
  allocatedBudget: string;
  spentBudget: string;
  approvedSpark: string;
  spentSpark: string;
  verificationPolicy?: VerificationPolicy;
  status: ProjectStatus;
  approvedBy: string;
  approvedAt: bigint;
  completedAt: bigint;
}
export interface ProjectProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Project";
  value: Uint8Array;
}
/**
 * Project defines the Project message.
 * @name ProjectAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Project
 */
export interface ProjectAmino {
  id?: string;
  name?: string;
  description?: string;
  creator?: string;
  tags?: string[];
  category?: ProjectCategory;
  council?: string;
  approved_budget?: string;
  allocated_budget?: string;
  spent_budget?: string;
  approved_spark?: string;
  spent_spark?: string;
  verification_policy?: VerificationPolicyAmino;
  status?: ProjectStatus;
  approved_by?: string;
  approved_at?: string;
  completed_at?: string;
}
export interface ProjectAminoMsg {
  type: "/sparkdream.rep.v1.Project";
  value: ProjectAmino;
}
/**
 * @name VerificationPolicy
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.VerificationPolicy
 */
export interface VerificationPolicy {
  defaultReview: ReviewProcess;
  requiresDomainRep: boolean;
  minVerifierReputation: string;
  minVerifierCount: number;
  reviewPeriodEpochs: bigint;
  challengePeriodEpochs: bigint;
  requiresCreatorApproval: boolean;
}
export interface VerificationPolicyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.VerificationPolicy";
  value: Uint8Array;
}
/**
 * @name VerificationPolicyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.VerificationPolicy
 */
export interface VerificationPolicyAmino {
  default_review?: ReviewProcess;
  requires_domain_rep?: boolean;
  min_verifier_reputation?: string;
  min_verifier_count?: number;
  review_period_epochs?: string;
  challenge_period_epochs?: string;
  requires_creator_approval?: boolean;
}
export interface VerificationPolicyAminoMsg {
  type: "/sparkdream.rep.v1.VerificationPolicy";
  value: VerificationPolicyAmino;
}
function createBaseProject(): Project {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    creator: "",
    tags: [],
    category: 0,
    council: "",
    approvedBudget: "",
    allocatedBudget: "",
    spentBudget: "",
    approvedSpark: "",
    spentSpark: "",
    verificationPolicy: undefined,
    status: 0,
    approvedBy: "",
    approvedAt: BigInt(0),
    completedAt: BigInt(0)
  };
}
/**
 * Project defines the Project message.
 * @name Project
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Project
 */
export const Project = {
  typeUrl: "/sparkdream.rep.v1.Project",
  encode(message: Project, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.category !== 0) {
      writer.uint32(48).int32(message.category);
    }
    if (message.council !== "") {
      writer.uint32(58).string(message.council);
    }
    if (message.approvedBudget !== "") {
      writer.uint32(66).string(message.approvedBudget);
    }
    if (message.allocatedBudget !== "") {
      writer.uint32(74).string(message.allocatedBudget);
    }
    if (message.spentBudget !== "") {
      writer.uint32(82).string(message.spentBudget);
    }
    if (message.approvedSpark !== "") {
      writer.uint32(90).string(message.approvedSpark);
    }
    if (message.spentSpark !== "") {
      writer.uint32(98).string(message.spentSpark);
    }
    if (message.verificationPolicy !== undefined) {
      VerificationPolicy.encode(message.verificationPolicy, writer.uint32(106).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.approvedBy !== "") {
      writer.uint32(122).string(message.approvedBy);
    }
    if (message.approvedAt !== BigInt(0)) {
      writer.uint32(128).int64(message.approvedAt);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(136).int64(message.completedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Project {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.tags.push(reader.string());
          break;
        case 6:
          message.category = reader.int32() as any;
          break;
        case 7:
          message.council = reader.string();
          break;
        case 8:
          message.approvedBudget = reader.string();
          break;
        case 9:
          message.allocatedBudget = reader.string();
          break;
        case 10:
          message.spentBudget = reader.string();
          break;
        case 11:
          message.approvedSpark = reader.string();
          break;
        case 12:
          message.spentSpark = reader.string();
          break;
        case 13:
          message.verificationPolicy = VerificationPolicy.decode(reader, reader.uint32());
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.approvedBy = reader.string();
          break;
        case 16:
          message.approvedAt = reader.int64();
          break;
        case 17:
          message.completedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.creator = object.creator ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.category = object.category ?? 0;
    message.council = object.council ?? "";
    message.approvedBudget = object.approvedBudget ?? "";
    message.allocatedBudget = object.allocatedBudget ?? "";
    message.spentBudget = object.spentBudget ?? "";
    message.approvedSpark = object.approvedSpark ?? "";
    message.spentSpark = object.spentSpark ?? "";
    message.verificationPolicy = object.verificationPolicy !== undefined && object.verificationPolicy !== null ? VerificationPolicy.fromPartial(object.verificationPolicy) : undefined;
    message.status = object.status ?? 0;
    message.approvedBy = object.approvedBy ?? "";
    message.approvedAt = object.approvedAt !== undefined && object.approvedAt !== null ? BigInt(object.approvedAt.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProjectAmino): Project {
    const message = createBaseProject();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    }
    if (object.council !== undefined && object.council !== null) {
      message.council = object.council;
    }
    if (object.approved_budget !== undefined && object.approved_budget !== null) {
      message.approvedBudget = object.approved_budget;
    }
    if (object.allocated_budget !== undefined && object.allocated_budget !== null) {
      message.allocatedBudget = object.allocated_budget;
    }
    if (object.spent_budget !== undefined && object.spent_budget !== null) {
      message.spentBudget = object.spent_budget;
    }
    if (object.approved_spark !== undefined && object.approved_spark !== null) {
      message.approvedSpark = object.approved_spark;
    }
    if (object.spent_spark !== undefined && object.spent_spark !== null) {
      message.spentSpark = object.spent_spark;
    }
    if (object.verification_policy !== undefined && object.verification_policy !== null) {
      message.verificationPolicy = VerificationPolicy.fromAmino(object.verification_policy);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.approved_by !== undefined && object.approved_by !== null) {
      message.approvedBy = object.approved_by;
    }
    if (object.approved_at !== undefined && object.approved_at !== null) {
      message.approvedAt = BigInt(object.approved_at);
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    return message;
  },
  toAmino(message: Project): ProjectAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.category = message.category === 0 ? undefined : message.category;
    obj.council = message.council === "" ? undefined : message.council;
    obj.approved_budget = message.approvedBudget === "" ? undefined : message.approvedBudget;
    obj.allocated_budget = message.allocatedBudget === "" ? undefined : message.allocatedBudget;
    obj.spent_budget = message.spentBudget === "" ? undefined : message.spentBudget;
    obj.approved_spark = message.approvedSpark === "" ? undefined : message.approvedSpark;
    obj.spent_spark = message.spentSpark === "" ? undefined : message.spentSpark;
    obj.verification_policy = message.verificationPolicy ? VerificationPolicy.toAmino(message.verificationPolicy) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.approved_by = message.approvedBy === "" ? undefined : message.approvedBy;
    obj.approved_at = message.approvedAt !== BigInt(0) ? message.approvedAt?.toString() : undefined;
    obj.completed_at = message.completedAt !== BigInt(0) ? message.completedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectAminoMsg): Project {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectProtoMsg): Project {
    return Project.decode(message.value);
  },
  toProto(message: Project): Uint8Array {
    return Project.encode(message).finish();
  },
  toProtoMsg(message: Project): ProjectProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Project",
      value: Project.encode(message).finish()
    };
  }
};
function createBaseVerificationPolicy(): VerificationPolicy {
  return {
    defaultReview: 0,
    requiresDomainRep: false,
    minVerifierReputation: "",
    minVerifierCount: 0,
    reviewPeriodEpochs: BigInt(0),
    challengePeriodEpochs: BigInt(0),
    requiresCreatorApproval: false
  };
}
/**
 * @name VerificationPolicy
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.VerificationPolicy
 */
export const VerificationPolicy = {
  typeUrl: "/sparkdream.rep.v1.VerificationPolicy",
  encode(message: VerificationPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultReview !== 0) {
      writer.uint32(8).int32(message.defaultReview);
    }
    if (message.requiresDomainRep === true) {
      writer.uint32(16).bool(message.requiresDomainRep);
    }
    if (message.minVerifierReputation !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.minVerifierReputation, 18).atomics);
    }
    if (message.minVerifierCount !== 0) {
      writer.uint32(32).uint32(message.minVerifierCount);
    }
    if (message.reviewPeriodEpochs !== BigInt(0)) {
      writer.uint32(40).int64(message.reviewPeriodEpochs);
    }
    if (message.challengePeriodEpochs !== BigInt(0)) {
      writer.uint32(48).int64(message.challengePeriodEpochs);
    }
    if (message.requiresCreatorApproval === true) {
      writer.uint32(56).bool(message.requiresCreatorApproval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerificationPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultReview = reader.int32() as any;
          break;
        case 2:
          message.requiresDomainRep = reader.bool();
          break;
        case 3:
          message.minVerifierReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.minVerifierCount = reader.uint32();
          break;
        case 5:
          message.reviewPeriodEpochs = reader.int64();
          break;
        case 6:
          message.challengePeriodEpochs = reader.int64();
          break;
        case 7:
          message.requiresCreatorApproval = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerificationPolicy>): VerificationPolicy {
    const message = createBaseVerificationPolicy();
    message.defaultReview = object.defaultReview ?? 0;
    message.requiresDomainRep = object.requiresDomainRep ?? false;
    message.minVerifierReputation = object.minVerifierReputation ?? "";
    message.minVerifierCount = object.minVerifierCount ?? 0;
    message.reviewPeriodEpochs = object.reviewPeriodEpochs !== undefined && object.reviewPeriodEpochs !== null ? BigInt(object.reviewPeriodEpochs.toString()) : BigInt(0);
    message.challengePeriodEpochs = object.challengePeriodEpochs !== undefined && object.challengePeriodEpochs !== null ? BigInt(object.challengePeriodEpochs.toString()) : BigInt(0);
    message.requiresCreatorApproval = object.requiresCreatorApproval ?? false;
    return message;
  },
  fromAmino(object: VerificationPolicyAmino): VerificationPolicy {
    const message = createBaseVerificationPolicy();
    if (object.default_review !== undefined && object.default_review !== null) {
      message.defaultReview = object.default_review;
    }
    if (object.requires_domain_rep !== undefined && object.requires_domain_rep !== null) {
      message.requiresDomainRep = object.requires_domain_rep;
    }
    if (object.min_verifier_reputation !== undefined && object.min_verifier_reputation !== null) {
      message.minVerifierReputation = object.min_verifier_reputation;
    }
    if (object.min_verifier_count !== undefined && object.min_verifier_count !== null) {
      message.minVerifierCount = object.min_verifier_count;
    }
    if (object.review_period_epochs !== undefined && object.review_period_epochs !== null) {
      message.reviewPeriodEpochs = BigInt(object.review_period_epochs);
    }
    if (object.challenge_period_epochs !== undefined && object.challenge_period_epochs !== null) {
      message.challengePeriodEpochs = BigInt(object.challenge_period_epochs);
    }
    if (object.requires_creator_approval !== undefined && object.requires_creator_approval !== null) {
      message.requiresCreatorApproval = object.requires_creator_approval;
    }
    return message;
  },
  toAmino(message: VerificationPolicy): VerificationPolicyAmino {
    const obj: any = {};
    obj.default_review = message.defaultReview === 0 ? undefined : message.defaultReview;
    obj.requires_domain_rep = message.requiresDomainRep === false ? undefined : message.requiresDomainRep;
    obj.min_verifier_reputation = message.minVerifierReputation === "" ? undefined : message.minVerifierReputation;
    obj.min_verifier_count = message.minVerifierCount === 0 ? undefined : message.minVerifierCount;
    obj.review_period_epochs = message.reviewPeriodEpochs !== BigInt(0) ? message.reviewPeriodEpochs?.toString() : undefined;
    obj.challenge_period_epochs = message.challengePeriodEpochs !== BigInt(0) ? message.challengePeriodEpochs?.toString() : undefined;
    obj.requires_creator_approval = message.requiresCreatorApproval === false ? undefined : message.requiresCreatorApproval;
    return obj;
  },
  fromAminoMsg(object: VerificationPolicyAminoMsg): VerificationPolicy {
    return VerificationPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationPolicyProtoMsg): VerificationPolicy {
    return VerificationPolicy.decode(message.value);
  },
  toProto(message: VerificationPolicy): Uint8Array {
    return VerificationPolicy.encode(message).finish();
  },
  toProtoMsg(message: VerificationPolicy): VerificationPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.VerificationPolicy",
      value: VerificationPolicy.encode(message).finish()
    };
  }
};