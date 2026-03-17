//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ContributionStatus defines the lifecycle status of a contribution. */
export enum ContributionStatus {
  CONTRIBUTION_STATUS_PROPOSED = 0,
  /** CONTRIBUTION_STATUS_IN_PROGRESS - set on approval; tranche 0 starts STAKING */
  CONTRIBUTION_STATUS_IN_PROGRESS = 1,
  CONTRIBUTION_STATUS_COMPLETED = 2,
  /** CONTRIBUTION_STATUS_CANCELLED - rejected, cancelled, or any tranche failed */
  CONTRIBUTION_STATUS_CANCELLED = 3,
  UNRECOGNIZED = -1,
}
export const ContributionStatusAmino = ContributionStatus;
export function contributionStatusFromJSON(object: any): ContributionStatus {
  switch (object) {
    case 0:
    case "CONTRIBUTION_STATUS_PROPOSED":
      return ContributionStatus.CONTRIBUTION_STATUS_PROPOSED;
    case 1:
    case "CONTRIBUTION_STATUS_IN_PROGRESS":
      return ContributionStatus.CONTRIBUTION_STATUS_IN_PROGRESS;
    case 2:
    case "CONTRIBUTION_STATUS_COMPLETED":
      return ContributionStatus.CONTRIBUTION_STATUS_COMPLETED;
    case 3:
    case "CONTRIBUTION_STATUS_CANCELLED":
      return ContributionStatus.CONTRIBUTION_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContributionStatus.UNRECOGNIZED;
  }
}
export function contributionStatusToJSON(object: ContributionStatus): string {
  switch (object) {
    case ContributionStatus.CONTRIBUTION_STATUS_PROPOSED:
      return "CONTRIBUTION_STATUS_PROPOSED";
    case ContributionStatus.CONTRIBUTION_STATUS_IN_PROGRESS:
      return "CONTRIBUTION_STATUS_IN_PROGRESS";
    case ContributionStatus.CONTRIBUTION_STATUS_COMPLETED:
      return "CONTRIBUTION_STATUS_COMPLETED";
    case ContributionStatus.CONTRIBUTION_STATUS_CANCELLED:
      return "CONTRIBUTION_STATUS_CANCELLED";
    case ContributionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TrancheStatus defines the lifecycle status of a tranche. */
export enum TrancheStatus {
  /** TRANCHE_STATUS_LOCKED - waiting for previous tranche to complete */
  TRANCHE_STATUS_LOCKED = 0,
  /** TRANCHE_STATUS_STAKING - open for conviction stakes */
  TRANCHE_STATUS_STAKING = 1,
  /** TRANCHE_STATUS_BACKED - dream_staked >= stake_threshold; awaiting reveal */
  TRANCHE_STATUS_BACKED = 2,
  /** TRANCHE_STATUS_REVEALED - code submitted; verification period active */
  TRANCHE_STATUS_REVEALED = 3,
  /** TRANCHE_STATUS_VERIFIED - verification passed; payout complete */
  TRANCHE_STATUS_VERIFIED = 4,
  /** TRANCHE_STATUS_DISPUTED - verification failed; routed to council */
  TRANCHE_STATUS_DISPUTED = 5,
  /** TRANCHE_STATUS_CANCELLED - stake deadline expired, or contribution cancelled */
  TRANCHE_STATUS_CANCELLED = 6,
  /** TRANCHE_STATUS_FAILED - dispute verdict: REJECT (or auto-REJECT on timeout) */
  TRANCHE_STATUS_FAILED = 7,
  UNRECOGNIZED = -1,
}
export const TrancheStatusAmino = TrancheStatus;
export function trancheStatusFromJSON(object: any): TrancheStatus {
  switch (object) {
    case 0:
    case "TRANCHE_STATUS_LOCKED":
      return TrancheStatus.TRANCHE_STATUS_LOCKED;
    case 1:
    case "TRANCHE_STATUS_STAKING":
      return TrancheStatus.TRANCHE_STATUS_STAKING;
    case 2:
    case "TRANCHE_STATUS_BACKED":
      return TrancheStatus.TRANCHE_STATUS_BACKED;
    case 3:
    case "TRANCHE_STATUS_REVEALED":
      return TrancheStatus.TRANCHE_STATUS_REVEALED;
    case 4:
    case "TRANCHE_STATUS_VERIFIED":
      return TrancheStatus.TRANCHE_STATUS_VERIFIED;
    case 5:
    case "TRANCHE_STATUS_DISPUTED":
      return TrancheStatus.TRANCHE_STATUS_DISPUTED;
    case 6:
    case "TRANCHE_STATUS_CANCELLED":
      return TrancheStatus.TRANCHE_STATUS_CANCELLED;
    case 7:
    case "TRANCHE_STATUS_FAILED":
      return TrancheStatus.TRANCHE_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrancheStatus.UNRECOGNIZED;
  }
}
export function trancheStatusToJSON(object: TrancheStatus): string {
  switch (object) {
    case TrancheStatus.TRANCHE_STATUS_LOCKED:
      return "TRANCHE_STATUS_LOCKED";
    case TrancheStatus.TRANCHE_STATUS_STAKING:
      return "TRANCHE_STATUS_STAKING";
    case TrancheStatus.TRANCHE_STATUS_BACKED:
      return "TRANCHE_STATUS_BACKED";
    case TrancheStatus.TRANCHE_STATUS_REVEALED:
      return "TRANCHE_STATUS_REVEALED";
    case TrancheStatus.TRANCHE_STATUS_VERIFIED:
      return "TRANCHE_STATUS_VERIFIED";
    case TrancheStatus.TRANCHE_STATUS_DISPUTED:
      return "TRANCHE_STATUS_DISPUTED";
    case TrancheStatus.TRANCHE_STATUS_CANCELLED:
      return "TRANCHE_STATUS_CANCELLED";
    case TrancheStatus.TRANCHE_STATUS_FAILED:
      return "TRANCHE_STATUS_FAILED";
    case TrancheStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DisputeVerdict defines the three-way outcome of a council dispute resolution. */
export enum DisputeVerdict {
  /** DISPUTE_VERDICT_UNSPECIFIED - proto default; rejected by message handler */
  DISPUTE_VERDICT_UNSPECIFIED = 0,
  /** DISPUTE_VERDICT_ACCEPT - code is acceptable; proceed to payout */
  DISPUTE_VERDICT_ACCEPT = 1,
  /** DISPUTE_VERDICT_IMPROVE - code has merit but needs work; contributor may re-reveal */
  DISPUTE_VERDICT_IMPROVE = 2,
  /** DISPUTE_VERDICT_REJECT - unacceptable or bad faith; hard fail */
  DISPUTE_VERDICT_REJECT = 3,
  UNRECOGNIZED = -1,
}
export const DisputeVerdictAmino = DisputeVerdict;
export function disputeVerdictFromJSON(object: any): DisputeVerdict {
  switch (object) {
    case 0:
    case "DISPUTE_VERDICT_UNSPECIFIED":
      return DisputeVerdict.DISPUTE_VERDICT_UNSPECIFIED;
    case 1:
    case "DISPUTE_VERDICT_ACCEPT":
      return DisputeVerdict.DISPUTE_VERDICT_ACCEPT;
    case 2:
    case "DISPUTE_VERDICT_IMPROVE":
      return DisputeVerdict.DISPUTE_VERDICT_IMPROVE;
    case 3:
    case "DISPUTE_VERDICT_REJECT":
      return DisputeVerdict.DISPUTE_VERDICT_REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DisputeVerdict.UNRECOGNIZED;
  }
}
export function disputeVerdictToJSON(object: DisputeVerdict): string {
  switch (object) {
    case DisputeVerdict.DISPUTE_VERDICT_UNSPECIFIED:
      return "DISPUTE_VERDICT_UNSPECIFIED";
    case DisputeVerdict.DISPUTE_VERDICT_ACCEPT:
      return "DISPUTE_VERDICT_ACCEPT";
    case DisputeVerdict.DISPUTE_VERDICT_IMPROVE:
      return "DISPUTE_VERDICT_IMPROVE";
    case DisputeVerdict.DISPUTE_VERDICT_REJECT:
      return "DISPUTE_VERDICT_REJECT";
    case DisputeVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Contribution represents a body of existing code being progressively revealed.
 * @name Contribution
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.Contribution
 */
export interface Contribution {
  id: bigint;
  contributor: string;
  projectName: string;
  description: string;
  tranches: RevealTranche[];
  currentTranche: number;
  totalValuation: string;
  /**
   * Bond posted by contributor at proposal time; slashed on failure to reveal
   */
  bondAmount: string;
  /**
   * Remaining bond after any partial slashes (starts equal to bond_amount)
   */
  bondRemaining: string;
  initialLicense: string;
  finalLicense: string;
  transitionedToProject: boolean;
  /**
   * x/rep Project ID after transition
   */
  projectId: bigint;
  status: ContributionStatus;
  /**
   * Commons Council that approved (used for project transition)
   */
  councilId: bigint;
  approvedBy: string;
  approvedAt: bigint;
  createdAt: bigint;
  /**
   * DREAM held back from tranche payouts until all tranches complete
   */
  holdbackAmount: string;
  /**
   * Epoch at which a rejected contributor may re-propose (0 if not rejected)
   */
  proposalEligibleAt: bigint;
}
export interface ContributionProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.Contribution";
  value: Uint8Array;
}
/**
 * Contribution represents a body of existing code being progressively revealed.
 * @name ContributionAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.Contribution
 */
export interface ContributionAmino {
  id?: string;
  contributor?: string;
  project_name?: string;
  description?: string;
  tranches?: RevealTrancheAmino[];
  current_tranche?: number;
  total_valuation?: string;
  /**
   * Bond posted by contributor at proposal time; slashed on failure to reveal
   */
  bond_amount?: string;
  /**
   * Remaining bond after any partial slashes (starts equal to bond_amount)
   */
  bond_remaining?: string;
  initial_license?: string;
  final_license?: string;
  transitioned_to_project?: boolean;
  /**
   * x/rep Project ID after transition
   */
  project_id?: string;
  status?: ContributionStatus;
  /**
   * Commons Council that approved (used for project transition)
   */
  council_id?: string;
  approved_by?: string;
  approved_at?: string;
  created_at?: string;
  /**
   * DREAM held back from tranche payouts until all tranches complete
   */
  holdback_amount?: string;
  /**
   * Epoch at which a rejected contributor may re-propose (0 if not rejected)
   */
  proposal_eligible_at?: string;
}
export interface ContributionAminoMsg {
  type: "/sparkdream.reveal.v1.Contribution";
  value: ContributionAmino;
}
/**
 * RevealTranche represents a discrete chunk of code to be backed, revealed, and verified.
 * @name RevealTranche
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.RevealTranche
 */
export interface RevealTranche {
  id: number;
  name: string;
  description: string;
  components: string[];
  /**
   * DREAM that must be staked to back this tranche; also the mint amount on payout
   * Invariant: sum(stake_threshold) across all tranches == contribution.total_valuation
   */
  stakeThreshold: string;
  dreamStaked: string;
  previewUri: string;
  /**
   * populated on reveal (e.g., IPFS CID)
   */
  codeUri: string;
  docsUri: string;
  /**
   * git commit hash for integrity verification
   */
  commitHash: string;
  /**
   * enforced by EndBlocker
   */
  stakeDeadline: bigint;
  revealDeadline: bigint;
  verificationDeadline: bigint;
  status: TrancheStatus;
  backedAt: bigint;
  revealedAt: bigint;
  verifiedAt: bigint;
}
export interface RevealTrancheProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.RevealTranche";
  value: Uint8Array;
}
/**
 * RevealTranche represents a discrete chunk of code to be backed, revealed, and verified.
 * @name RevealTrancheAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.RevealTranche
 */
export interface RevealTrancheAmino {
  id?: number;
  name?: string;
  description?: string;
  components?: string[];
  /**
   * DREAM that must be staked to back this tranche; also the mint amount on payout
   * Invariant: sum(stake_threshold) across all tranches == contribution.total_valuation
   */
  stake_threshold?: string;
  dream_staked?: string;
  preview_uri?: string;
  /**
   * populated on reveal (e.g., IPFS CID)
   */
  code_uri?: string;
  docs_uri?: string;
  /**
   * git commit hash for integrity verification
   */
  commit_hash?: string;
  /**
   * enforced by EndBlocker
   */
  stake_deadline?: string;
  reveal_deadline?: string;
  verification_deadline?: string;
  status?: TrancheStatus;
  backed_at?: string;
  revealed_at?: string;
  verified_at?: string;
}
export interface RevealTrancheAminoMsg {
  type: "/sparkdream.reveal.v1.RevealTranche";
  value: RevealTrancheAmino;
}
/**
 * RevealStake represents a community member's conviction stake toward a tranche.
 * @name RevealStake
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.RevealStake
 */
export interface RevealStake {
  id: bigint;
  staker: string;
  contributionId: bigint;
  trancheId: number;
  amount: string;
  stakedAt: bigint;
}
export interface RevealStakeProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.RevealStake";
  value: Uint8Array;
}
/**
 * RevealStake represents a community member's conviction stake toward a tranche.
 * @name RevealStakeAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.RevealStake
 */
export interface RevealStakeAmino {
  id?: string;
  staker?: string;
  contribution_id?: string;
  tranche_id?: number;
  amount?: string;
  staked_at?: string;
}
export interface RevealStakeAminoMsg {
  type: "/sparkdream.reveal.v1.RevealStake";
  value: RevealStakeAmino;
}
/**
 * VerificationVote represents a staker's vote on revealed code quality.
 * @name VerificationVote
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.VerificationVote
 */
export interface VerificationVote {
  voter: string;
  contributionId: bigint;
  trancheId: number;
  /**
   * does the code deliver what was promised?
   */
  valueConfirmed: boolean;
  /**
   * 1-5; used to calculate reputation granted to contributor
   */
  qualityRating: number;
  comments: string;
  stakeWeight: string;
  votedAt: bigint;
}
export interface VerificationVoteProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.VerificationVote";
  value: Uint8Array;
}
/**
 * VerificationVote represents a staker's vote on revealed code quality.
 * @name VerificationVoteAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.VerificationVote
 */
export interface VerificationVoteAmino {
  voter?: string;
  contribution_id?: string;
  tranche_id?: number;
  /**
   * does the code deliver what was promised?
   */
  value_confirmed?: boolean;
  /**
   * 1-5; used to calculate reputation granted to contributor
   */
  quality_rating?: number;
  comments?: string;
  stake_weight?: string;
  voted_at?: string;
}
export interface VerificationVoteAminoMsg {
  type: "/sparkdream.reveal.v1.VerificationVote";
  value: VerificationVoteAmino;
}
/**
 * TrancheDef is used in MsgPropose to define tranche structure.
 * @name TrancheDef
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.TrancheDef
 */
export interface TrancheDef {
  name: string;
  description: string;
  components: string[];
  /**
   * DREAM that must be staked to back this tranche; also the mint amount on payout
   */
  stakeThreshold: string;
  previewUri: string;
}
export interface TrancheDefProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.TrancheDef";
  value: Uint8Array;
}
/**
 * TrancheDef is used in MsgPropose to define tranche structure.
 * @name TrancheDefAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.TrancheDef
 */
export interface TrancheDefAmino {
  name?: string;
  description?: string;
  components?: string[];
  /**
   * DREAM that must be staked to back this tranche; also the mint amount on payout
   */
  stake_threshold?: string;
  preview_uri?: string;
}
export interface TrancheDefAminoMsg {
  type: "/sparkdream.reveal.v1.TrancheDef";
  value: TrancheDefAmino;
}
function createBaseContribution(): Contribution {
  return {
    id: BigInt(0),
    contributor: "",
    projectName: "",
    description: "",
    tranches: [],
    currentTranche: 0,
    totalValuation: "",
    bondAmount: "",
    bondRemaining: "",
    initialLicense: "",
    finalLicense: "",
    transitionedToProject: false,
    projectId: BigInt(0),
    status: 0,
    councilId: BigInt(0),
    approvedBy: "",
    approvedAt: BigInt(0),
    createdAt: BigInt(0),
    holdbackAmount: "",
    proposalEligibleAt: BigInt(0)
  };
}
/**
 * Contribution represents a body of existing code being progressively revealed.
 * @name Contribution
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.Contribution
 */
export const Contribution = {
  typeUrl: "/sparkdream.reveal.v1.Contribution",
  encode(message: Contribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.contributor !== "") {
      writer.uint32(18).string(message.contributor);
    }
    if (message.projectName !== "") {
      writer.uint32(26).string(message.projectName);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.tranches) {
      RevealTranche.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.currentTranche !== 0) {
      writer.uint32(48).uint32(message.currentTranche);
    }
    if (message.totalValuation !== "") {
      writer.uint32(58).string(message.totalValuation);
    }
    if (message.bondAmount !== "") {
      writer.uint32(66).string(message.bondAmount);
    }
    if (message.bondRemaining !== "") {
      writer.uint32(74).string(message.bondRemaining);
    }
    if (message.initialLicense !== "") {
      writer.uint32(82).string(message.initialLicense);
    }
    if (message.finalLicense !== "") {
      writer.uint32(90).string(message.finalLicense);
    }
    if (message.transitionedToProject === true) {
      writer.uint32(96).bool(message.transitionedToProject);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(104).uint64(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.councilId !== BigInt(0)) {
      writer.uint32(120).uint64(message.councilId);
    }
    if (message.approvedBy !== "") {
      writer.uint32(130).string(message.approvedBy);
    }
    if (message.approvedAt !== BigInt(0)) {
      writer.uint32(136).int64(message.approvedAt);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(144).int64(message.createdAt);
    }
    if (message.holdbackAmount !== "") {
      writer.uint32(154).string(message.holdbackAmount);
    }
    if (message.proposalEligibleAt !== BigInt(0)) {
      writer.uint32(160).int64(message.proposalEligibleAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.contributor = reader.string();
          break;
        case 3:
          message.projectName = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.tranches.push(RevealTranche.decode(reader, reader.uint32()));
          break;
        case 6:
          message.currentTranche = reader.uint32();
          break;
        case 7:
          message.totalValuation = reader.string();
          break;
        case 8:
          message.bondAmount = reader.string();
          break;
        case 9:
          message.bondRemaining = reader.string();
          break;
        case 10:
          message.initialLicense = reader.string();
          break;
        case 11:
          message.finalLicense = reader.string();
          break;
        case 12:
          message.transitionedToProject = reader.bool();
          break;
        case 13:
          message.projectId = reader.uint64();
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.councilId = reader.uint64();
          break;
        case 16:
          message.approvedBy = reader.string();
          break;
        case 17:
          message.approvedAt = reader.int64();
          break;
        case 18:
          message.createdAt = reader.int64();
          break;
        case 19:
          message.holdbackAmount = reader.string();
          break;
        case 20:
          message.proposalEligibleAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Contribution>): Contribution {
    const message = createBaseContribution();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.contributor = object.contributor ?? "";
    message.projectName = object.projectName ?? "";
    message.description = object.description ?? "";
    message.tranches = object.tranches?.map(e => RevealTranche.fromPartial(e)) || [];
    message.currentTranche = object.currentTranche ?? 0;
    message.totalValuation = object.totalValuation ?? "";
    message.bondAmount = object.bondAmount ?? "";
    message.bondRemaining = object.bondRemaining ?? "";
    message.initialLicense = object.initialLicense ?? "";
    message.finalLicense = object.finalLicense ?? "";
    message.transitionedToProject = object.transitionedToProject ?? false;
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.councilId = object.councilId !== undefined && object.councilId !== null ? BigInt(object.councilId.toString()) : BigInt(0);
    message.approvedBy = object.approvedBy ?? "";
    message.approvedAt = object.approvedAt !== undefined && object.approvedAt !== null ? BigInt(object.approvedAt.toString()) : BigInt(0);
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.holdbackAmount = object.holdbackAmount ?? "";
    message.proposalEligibleAt = object.proposalEligibleAt !== undefined && object.proposalEligibleAt !== null ? BigInt(object.proposalEligibleAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContributionAmino): Contribution {
    const message = createBaseContribution();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = object.contributor;
    }
    if (object.project_name !== undefined && object.project_name !== null) {
      message.projectName = object.project_name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.tranches = object.tranches?.map(e => RevealTranche.fromAmino(e)) || [];
    if (object.current_tranche !== undefined && object.current_tranche !== null) {
      message.currentTranche = object.current_tranche;
    }
    if (object.total_valuation !== undefined && object.total_valuation !== null) {
      message.totalValuation = object.total_valuation;
    }
    if (object.bond_amount !== undefined && object.bond_amount !== null) {
      message.bondAmount = object.bond_amount;
    }
    if (object.bond_remaining !== undefined && object.bond_remaining !== null) {
      message.bondRemaining = object.bond_remaining;
    }
    if (object.initial_license !== undefined && object.initial_license !== null) {
      message.initialLicense = object.initial_license;
    }
    if (object.final_license !== undefined && object.final_license !== null) {
      message.finalLicense = object.final_license;
    }
    if (object.transitioned_to_project !== undefined && object.transitioned_to_project !== null) {
      message.transitionedToProject = object.transitioned_to_project;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.council_id !== undefined && object.council_id !== null) {
      message.councilId = BigInt(object.council_id);
    }
    if (object.approved_by !== undefined && object.approved_by !== null) {
      message.approvedBy = object.approved_by;
    }
    if (object.approved_at !== undefined && object.approved_at !== null) {
      message.approvedAt = BigInt(object.approved_at);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.holdback_amount !== undefined && object.holdback_amount !== null) {
      message.holdbackAmount = object.holdback_amount;
    }
    if (object.proposal_eligible_at !== undefined && object.proposal_eligible_at !== null) {
      message.proposalEligibleAt = BigInt(object.proposal_eligible_at);
    }
    return message;
  },
  toAmino(message: Contribution): ContributionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.contributor = message.contributor === "" ? undefined : message.contributor;
    obj.project_name = message.projectName === "" ? undefined : message.projectName;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.tranches) {
      obj.tranches = message.tranches.map(e => e ? RevealTranche.toAmino(e) : undefined);
    } else {
      obj.tranches = message.tranches;
    }
    obj.current_tranche = message.currentTranche === 0 ? undefined : message.currentTranche;
    obj.total_valuation = message.totalValuation === "" ? undefined : message.totalValuation;
    obj.bond_amount = message.bondAmount === "" ? undefined : message.bondAmount;
    obj.bond_remaining = message.bondRemaining === "" ? undefined : message.bondRemaining;
    obj.initial_license = message.initialLicense === "" ? undefined : message.initialLicense;
    obj.final_license = message.finalLicense === "" ? undefined : message.finalLicense;
    obj.transitioned_to_project = message.transitionedToProject === false ? undefined : message.transitionedToProject;
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.council_id = message.councilId !== BigInt(0) ? message.councilId?.toString() : undefined;
    obj.approved_by = message.approvedBy === "" ? undefined : message.approvedBy;
    obj.approved_at = message.approvedAt !== BigInt(0) ? message.approvedAt?.toString() : undefined;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.holdback_amount = message.holdbackAmount === "" ? undefined : message.holdbackAmount;
    obj.proposal_eligible_at = message.proposalEligibleAt !== BigInt(0) ? message.proposalEligibleAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContributionAminoMsg): Contribution {
    return Contribution.fromAmino(object.value);
  },
  fromProtoMsg(message: ContributionProtoMsg): Contribution {
    return Contribution.decode(message.value);
  },
  toProto(message: Contribution): Uint8Array {
    return Contribution.encode(message).finish();
  },
  toProtoMsg(message: Contribution): ContributionProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.Contribution",
      value: Contribution.encode(message).finish()
    };
  }
};
function createBaseRevealTranche(): RevealTranche {
  return {
    id: 0,
    name: "",
    description: "",
    components: [],
    stakeThreshold: "",
    dreamStaked: "",
    previewUri: "",
    codeUri: "",
    docsUri: "",
    commitHash: "",
    stakeDeadline: BigInt(0),
    revealDeadline: BigInt(0),
    verificationDeadline: BigInt(0),
    status: 0,
    backedAt: BigInt(0),
    revealedAt: BigInt(0),
    verifiedAt: BigInt(0)
  };
}
/**
 * RevealTranche represents a discrete chunk of code to be backed, revealed, and verified.
 * @name RevealTranche
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.RevealTranche
 */
export const RevealTranche = {
  typeUrl: "/sparkdream.reveal.v1.RevealTranche",
  encode(message: RevealTranche, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.components) {
      writer.uint32(34).string(v!);
    }
    if (message.stakeThreshold !== "") {
      writer.uint32(42).string(message.stakeThreshold);
    }
    if (message.dreamStaked !== "") {
      writer.uint32(50).string(message.dreamStaked);
    }
    if (message.previewUri !== "") {
      writer.uint32(58).string(message.previewUri);
    }
    if (message.codeUri !== "") {
      writer.uint32(66).string(message.codeUri);
    }
    if (message.docsUri !== "") {
      writer.uint32(74).string(message.docsUri);
    }
    if (message.commitHash !== "") {
      writer.uint32(82).string(message.commitHash);
    }
    if (message.stakeDeadline !== BigInt(0)) {
      writer.uint32(88).int64(message.stakeDeadline);
    }
    if (message.revealDeadline !== BigInt(0)) {
      writer.uint32(96).int64(message.revealDeadline);
    }
    if (message.verificationDeadline !== BigInt(0)) {
      writer.uint32(104).int64(message.verificationDeadline);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.backedAt !== BigInt(0)) {
      writer.uint32(120).int64(message.backedAt);
    }
    if (message.revealedAt !== BigInt(0)) {
      writer.uint32(128).int64(message.revealedAt);
    }
    if (message.verifiedAt !== BigInt(0)) {
      writer.uint32(136).int64(message.verifiedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevealTranche {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevealTranche();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.components.push(reader.string());
          break;
        case 5:
          message.stakeThreshold = reader.string();
          break;
        case 6:
          message.dreamStaked = reader.string();
          break;
        case 7:
          message.previewUri = reader.string();
          break;
        case 8:
          message.codeUri = reader.string();
          break;
        case 9:
          message.docsUri = reader.string();
          break;
        case 10:
          message.commitHash = reader.string();
          break;
        case 11:
          message.stakeDeadline = reader.int64();
          break;
        case 12:
          message.revealDeadline = reader.int64();
          break;
        case 13:
          message.verificationDeadline = reader.int64();
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.backedAt = reader.int64();
          break;
        case 16:
          message.revealedAt = reader.int64();
          break;
        case 17:
          message.verifiedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevealTranche>): RevealTranche {
    const message = createBaseRevealTranche();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.components = object.components?.map(e => e) || [];
    message.stakeThreshold = object.stakeThreshold ?? "";
    message.dreamStaked = object.dreamStaked ?? "";
    message.previewUri = object.previewUri ?? "";
    message.codeUri = object.codeUri ?? "";
    message.docsUri = object.docsUri ?? "";
    message.commitHash = object.commitHash ?? "";
    message.stakeDeadline = object.stakeDeadline !== undefined && object.stakeDeadline !== null ? BigInt(object.stakeDeadline.toString()) : BigInt(0);
    message.revealDeadline = object.revealDeadline !== undefined && object.revealDeadline !== null ? BigInt(object.revealDeadline.toString()) : BigInt(0);
    message.verificationDeadline = object.verificationDeadline !== undefined && object.verificationDeadline !== null ? BigInt(object.verificationDeadline.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.backedAt = object.backedAt !== undefined && object.backedAt !== null ? BigInt(object.backedAt.toString()) : BigInt(0);
    message.revealedAt = object.revealedAt !== undefined && object.revealedAt !== null ? BigInt(object.revealedAt.toString()) : BigInt(0);
    message.verifiedAt = object.verifiedAt !== undefined && object.verifiedAt !== null ? BigInt(object.verifiedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RevealTrancheAmino): RevealTranche {
    const message = createBaseRevealTranche();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.components = object.components?.map(e => e) || [];
    if (object.stake_threshold !== undefined && object.stake_threshold !== null) {
      message.stakeThreshold = object.stake_threshold;
    }
    if (object.dream_staked !== undefined && object.dream_staked !== null) {
      message.dreamStaked = object.dream_staked;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.code_uri !== undefined && object.code_uri !== null) {
      message.codeUri = object.code_uri;
    }
    if (object.docs_uri !== undefined && object.docs_uri !== null) {
      message.docsUri = object.docs_uri;
    }
    if (object.commit_hash !== undefined && object.commit_hash !== null) {
      message.commitHash = object.commit_hash;
    }
    if (object.stake_deadline !== undefined && object.stake_deadline !== null) {
      message.stakeDeadline = BigInt(object.stake_deadline);
    }
    if (object.reveal_deadline !== undefined && object.reveal_deadline !== null) {
      message.revealDeadline = BigInt(object.reveal_deadline);
    }
    if (object.verification_deadline !== undefined && object.verification_deadline !== null) {
      message.verificationDeadline = BigInt(object.verification_deadline);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.backed_at !== undefined && object.backed_at !== null) {
      message.backedAt = BigInt(object.backed_at);
    }
    if (object.revealed_at !== undefined && object.revealed_at !== null) {
      message.revealedAt = BigInt(object.revealed_at);
    }
    if (object.verified_at !== undefined && object.verified_at !== null) {
      message.verifiedAt = BigInt(object.verified_at);
    }
    return message;
  },
  toAmino(message: RevealTranche): RevealTrancheAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.components) {
      obj.components = message.components.map(e => e);
    } else {
      obj.components = message.components;
    }
    obj.stake_threshold = message.stakeThreshold === "" ? undefined : message.stakeThreshold;
    obj.dream_staked = message.dreamStaked === "" ? undefined : message.dreamStaked;
    obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
    obj.code_uri = message.codeUri === "" ? undefined : message.codeUri;
    obj.docs_uri = message.docsUri === "" ? undefined : message.docsUri;
    obj.commit_hash = message.commitHash === "" ? undefined : message.commitHash;
    obj.stake_deadline = message.stakeDeadline !== BigInt(0) ? message.stakeDeadline?.toString() : undefined;
    obj.reveal_deadline = message.revealDeadline !== BigInt(0) ? message.revealDeadline?.toString() : undefined;
    obj.verification_deadline = message.verificationDeadline !== BigInt(0) ? message.verificationDeadline?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.backed_at = message.backedAt !== BigInt(0) ? message.backedAt?.toString() : undefined;
    obj.revealed_at = message.revealedAt !== BigInt(0) ? message.revealedAt?.toString() : undefined;
    obj.verified_at = message.verifiedAt !== BigInt(0) ? message.verifiedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RevealTrancheAminoMsg): RevealTranche {
    return RevealTranche.fromAmino(object.value);
  },
  fromProtoMsg(message: RevealTrancheProtoMsg): RevealTranche {
    return RevealTranche.decode(message.value);
  },
  toProto(message: RevealTranche): Uint8Array {
    return RevealTranche.encode(message).finish();
  },
  toProtoMsg(message: RevealTranche): RevealTrancheProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.RevealTranche",
      value: RevealTranche.encode(message).finish()
    };
  }
};
function createBaseRevealStake(): RevealStake {
  return {
    id: BigInt(0),
    staker: "",
    contributionId: BigInt(0),
    trancheId: 0,
    amount: "",
    stakedAt: BigInt(0)
  };
}
/**
 * RevealStake represents a community member's conviction stake toward a tranche.
 * @name RevealStake
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.RevealStake
 */
export const RevealStake = {
  typeUrl: "/sparkdream.reveal.v1.RevealStake",
  encode(message: RevealStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(32).uint32(message.trancheId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.stakedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.stakedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevealStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevealStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.contributionId = reader.uint64();
          break;
        case 4:
          message.trancheId = reader.uint32();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.stakedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevealStake>): RevealStake {
    const message = createBaseRevealStake();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.amount = object.amount ?? "";
    message.stakedAt = object.stakedAt !== undefined && object.stakedAt !== null ? BigInt(object.stakedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RevealStakeAmino): RevealStake {
    const message = createBaseRevealStake();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.staked_at !== undefined && object.staked_at !== null) {
      message.stakedAt = BigInt(object.staked_at);
    }
    return message;
  },
  toAmino(message: RevealStake): RevealStakeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.staked_at = message.stakedAt !== BigInt(0) ? message.stakedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RevealStakeAminoMsg): RevealStake {
    return RevealStake.fromAmino(object.value);
  },
  fromProtoMsg(message: RevealStakeProtoMsg): RevealStake {
    return RevealStake.decode(message.value);
  },
  toProto(message: RevealStake): Uint8Array {
    return RevealStake.encode(message).finish();
  },
  toProtoMsg(message: RevealStake): RevealStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.RevealStake",
      value: RevealStake.encode(message).finish()
    };
  }
};
function createBaseVerificationVote(): VerificationVote {
  return {
    voter: "",
    contributionId: BigInt(0),
    trancheId: 0,
    valueConfirmed: false,
    qualityRating: 0,
    comments: "",
    stakeWeight: "",
    votedAt: BigInt(0)
  };
}
/**
 * VerificationVote represents a staker's vote on revealed code quality.
 * @name VerificationVote
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.VerificationVote
 */
export const VerificationVote = {
  typeUrl: "/sparkdream.reveal.v1.VerificationVote",
  encode(message: VerificationVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(24).uint32(message.trancheId);
    }
    if (message.valueConfirmed === true) {
      writer.uint32(32).bool(message.valueConfirmed);
    }
    if (message.qualityRating !== 0) {
      writer.uint32(40).uint32(message.qualityRating);
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    if (message.stakeWeight !== "") {
      writer.uint32(58).string(message.stakeWeight);
    }
    if (message.votedAt !== BigInt(0)) {
      writer.uint32(64).int64(message.votedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerificationVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.contributionId = reader.uint64();
          break;
        case 3:
          message.trancheId = reader.uint32();
          break;
        case 4:
          message.valueConfirmed = reader.bool();
          break;
        case 5:
          message.qualityRating = reader.uint32();
          break;
        case 6:
          message.comments = reader.string();
          break;
        case 7:
          message.stakeWeight = reader.string();
          break;
        case 8:
          message.votedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerificationVote>): VerificationVote {
    const message = createBaseVerificationVote();
    message.voter = object.voter ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.valueConfirmed = object.valueConfirmed ?? false;
    message.qualityRating = object.qualityRating ?? 0;
    message.comments = object.comments ?? "";
    message.stakeWeight = object.stakeWeight ?? "";
    message.votedAt = object.votedAt !== undefined && object.votedAt !== null ? BigInt(object.votedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VerificationVoteAmino): VerificationVote {
    const message = createBaseVerificationVote();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.value_confirmed !== undefined && object.value_confirmed !== null) {
      message.valueConfirmed = object.value_confirmed;
    }
    if (object.quality_rating !== undefined && object.quality_rating !== null) {
      message.qualityRating = object.quality_rating;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    if (object.stake_weight !== undefined && object.stake_weight !== null) {
      message.stakeWeight = object.stake_weight;
    }
    if (object.voted_at !== undefined && object.voted_at !== null) {
      message.votedAt = BigInt(object.voted_at);
    }
    return message;
  },
  toAmino(message: VerificationVote): VerificationVoteAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.value_confirmed = message.valueConfirmed === false ? undefined : message.valueConfirmed;
    obj.quality_rating = message.qualityRating === 0 ? undefined : message.qualityRating;
    obj.comments = message.comments === "" ? undefined : message.comments;
    obj.stake_weight = message.stakeWeight === "" ? undefined : message.stakeWeight;
    obj.voted_at = message.votedAt !== BigInt(0) ? message.votedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VerificationVoteAminoMsg): VerificationVote {
    return VerificationVote.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationVoteProtoMsg): VerificationVote {
    return VerificationVote.decode(message.value);
  },
  toProto(message: VerificationVote): Uint8Array {
    return VerificationVote.encode(message).finish();
  },
  toProtoMsg(message: VerificationVote): VerificationVoteProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.VerificationVote",
      value: VerificationVote.encode(message).finish()
    };
  }
};
function createBaseTrancheDef(): TrancheDef {
  return {
    name: "",
    description: "",
    components: [],
    stakeThreshold: "",
    previewUri: ""
  };
}
/**
 * TrancheDef is used in MsgPropose to define tranche structure.
 * @name TrancheDef
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.TrancheDef
 */
export const TrancheDef = {
  typeUrl: "/sparkdream.reveal.v1.TrancheDef",
  encode(message: TrancheDef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.components) {
      writer.uint32(26).string(v!);
    }
    if (message.stakeThreshold !== "") {
      writer.uint32(34).string(message.stakeThreshold);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrancheDef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrancheDef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.components.push(reader.string());
          break;
        case 4:
          message.stakeThreshold = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TrancheDef>): TrancheDef {
    const message = createBaseTrancheDef();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.components = object.components?.map(e => e) || [];
    message.stakeThreshold = object.stakeThreshold ?? "";
    message.previewUri = object.previewUri ?? "";
    return message;
  },
  fromAmino(object: TrancheDefAmino): TrancheDef {
    const message = createBaseTrancheDef();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.components = object.components?.map(e => e) || [];
    if (object.stake_threshold !== undefined && object.stake_threshold !== null) {
      message.stakeThreshold = object.stake_threshold;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    return message;
  },
  toAmino(message: TrancheDef): TrancheDefAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.components) {
      obj.components = message.components.map(e => e);
    } else {
      obj.components = message.components;
    }
    obj.stake_threshold = message.stakeThreshold === "" ? undefined : message.stakeThreshold;
    obj.preview_uri = message.previewUri === "" ? undefined : message.previewUri;
    return obj;
  },
  fromAminoMsg(object: TrancheDefAminoMsg): TrancheDef {
    return TrancheDef.fromAmino(object.value);
  },
  fromProtoMsg(message: TrancheDefProtoMsg): TrancheDef {
    return TrancheDef.decode(message.value);
  },
  toProto(message: TrancheDef): Uint8Array {
    return TrancheDef.encode(message).finish();
  },
  toProtoMsg(message: TrancheDef): TrancheDefProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.TrancheDef",
      value: TrancheDef.encode(message).finish()
    };
  }
};