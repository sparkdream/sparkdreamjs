//@ts-nocheck
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ProposalStatus defines the possible states of a council proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED is the default value. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /** PROPOSAL_STATUS_SUBMITTED - PROPOSAL_STATUS_SUBMITTED means the proposal is open for voting. */
  PROPOSAL_STATUS_SUBMITTED = 1,
  /** PROPOSAL_STATUS_ACCEPTED - PROPOSAL_STATUS_ACCEPTED means the proposal passed the vote threshold. */
  PROPOSAL_STATUS_ACCEPTED = 2,
  /** PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED means the proposal did not reach the threshold. */
  PROPOSAL_STATUS_REJECTED = 3,
  /** PROPOSAL_STATUS_EXECUTED - PROPOSAL_STATUS_EXECUTED means the proposal was successfully executed. */
  PROPOSAL_STATUS_EXECUTED = 4,
  /** PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED means proposal execution failed. */
  PROPOSAL_STATUS_FAILED = 5,
  /** PROPOSAL_STATUS_VETOED - PROPOSAL_STATUS_VETOED means the proposal was invalidated by a veto. */
  PROPOSAL_STATUS_VETOED = 6,
  /** PROPOSAL_STATUS_EXPIRED - PROPOSAL_STATUS_EXPIRED means the proposal voting period ended without reaching threshold. */
  PROPOSAL_STATUS_EXPIRED = 7,
  UNRECOGNIZED = -1,
}
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 4:
    case "PROPOSAL_STATUS_EXECUTED":
      return ProposalStatus.PROPOSAL_STATUS_EXECUTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case 6:
    case "PROPOSAL_STATUS_VETOED":
      return ProposalStatus.PROPOSAL_STATUS_VETOED;
    case 7:
    case "PROPOSAL_STATUS_EXPIRED":
      return ProposalStatus.PROPOSAL_STATUS_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_EXECUTED:
      return "PROPOSAL_STATUS_EXECUTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.PROPOSAL_STATUS_VETOED:
      return "PROPOSAL_STATUS_VETOED";
    case ProposalStatus.PROPOSAL_STATUS_EXPIRED:
      return "PROPOSAL_STATUS_EXPIRED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** VoteOption defines the possible vote choices. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED is the default value. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES indicates approval. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO indicates rejection. */
  VOTE_OPTION_NO = 2,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN indicates abstention. */
  VOTE_OPTION_ABSTAIN = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO indicates strong rejection. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 3:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Group defines a governance group (council or committee) with its configuration.
 * @name Group
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Group
 */
export interface Group {
  index: string;
  groupId: bigint;
  policyAddress: string;
  parentPolicyAddress: string;
  electoralPolicyAddress: string;
  fundingWeight: bigint;
  maxSpendPerEpoch: string;
  updateCooldown: bigint;
  minMembers: bigint;
  maxMembers: bigint;
  termDuration: bigint;
  currentTermExpiration: bigint;
  activationTime: bigint;
  lastParentUpdate: bigint;
  futarchyEnabled: boolean;
  vetoPolicyAddress: string;
}
export interface GroupProtoMsg {
  typeUrl: "/sparkdream.commons.v1.Group";
  value: Uint8Array;
}
/**
 * Group defines a governance group (council or committee) with its configuration.
 * @name GroupAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Group
 */
export interface GroupAmino {
  index?: string;
  group_id?: string;
  policy_address?: string;
  parent_policy_address?: string;
  electoral_policy_address?: string;
  funding_weight?: string;
  max_spend_per_epoch?: string;
  update_cooldown?: string;
  min_members?: string;
  max_members?: string;
  term_duration?: string;
  current_term_expiration?: string;
  activation_time?: string;
  last_parent_update?: string;
  futarchy_enabled?: boolean;
  veto_policy_address?: string;
}
export interface GroupAminoMsg {
  type: "/sparkdream.commons.v1.Group";
  value: GroupAmino;
}
/**
 * Member represents a member of a council or committee.
 * @name Member
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Member
 */
export interface Member {
  address: string;
  weight: string;
  metadata: string;
  addedAt: bigint;
}
export interface MemberProtoMsg {
  typeUrl: "/sparkdream.commons.v1.Member";
  value: Uint8Array;
}
/**
 * Member represents a member of a council or committee.
 * @name MemberAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Member
 */
export interface MemberAmino {
  address?: string;
  weight?: string;
  metadata?: string;
  added_at?: string;
}
export interface MemberAminoMsg {
  type: "/sparkdream.commons.v1.Member";
  value: MemberAmino;
}
/**
 * DecisionPolicy defines the voting rules for a council policy.
 * @name DecisionPolicy
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.DecisionPolicy
 */
export interface DecisionPolicy {
  /**
   * policy_type is "percentage" or "threshold"
   */
  policyType: string;
  /**
   * threshold is the vote threshold value (e.g., "0.51" for percentage, "3" for threshold)
   */
  threshold: string;
  /**
   * voting_period is the duration in seconds for which voting is open
   */
  votingPeriod: bigint;
  /**
   * min_execution_period is the minimum time after voting ends before execution
   */
  minExecutionPeriod: bigint;
}
export interface DecisionPolicyProtoMsg {
  typeUrl: "/sparkdream.commons.v1.DecisionPolicy";
  value: Uint8Array;
}
/**
 * DecisionPolicy defines the voting rules for a council policy.
 * @name DecisionPolicyAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.DecisionPolicy
 */
export interface DecisionPolicyAmino {
  /**
   * policy_type is "percentage" or "threshold"
   */
  policy_type?: string;
  /**
   * threshold is the vote threshold value (e.g., "0.51" for percentage, "3" for threshold)
   */
  threshold?: string;
  /**
   * voting_period is the duration in seconds for which voting is open
   */
  voting_period?: string;
  /**
   * min_execution_period is the minimum time after voting ends before execution
   */
  min_execution_period?: string;
}
export interface DecisionPolicyAminoMsg {
  type: "/sparkdream.commons.v1.DecisionPolicy";
  value: DecisionPolicyAmino;
}
/**
 * Vote represents a single vote on a proposal.
 * @name Vote
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Vote
 */
export interface Vote {
  voter: string;
  option: VoteOption;
  metadata: string;
  submitTime: bigint;
}
export interface VoteProtoMsg {
  typeUrl: "/sparkdream.commons.v1.Vote";
  value: Uint8Array;
}
/**
 * Vote represents a single vote on a proposal.
 * @name VoteAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Vote
 */
export interface VoteAmino {
  voter?: string;
  option?: VoteOption;
  metadata?: string;
  submit_time?: string;
}
export interface VoteAminoMsg {
  type: "/sparkdream.commons.v1.Vote";
  value: VoteAmino;
}
/**
 * Proposal represents a council governance proposal.
 * @name Proposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Proposal
 */
export interface Proposal {
  id: bigint;
  /**
   * council_name is the name of the council this proposal belongs to
   */
  councilName: string;
  /**
   * policy_address is the policy address (standard or veto) that this proposal targets
   */
  policyAddress: string;
  /**
   * proposer is the address that submitted the proposal
   */
  proposer: string;
  /**
   * messages are the messages to execute if the proposal passes
   */
  messages: Any[];
  /**
   * status is the current status of the proposal
   */
  status: ProposalStatus;
  /**
   * submit_time is the block time when the proposal was submitted
   */
  submitTime: bigint;
  /**
   * voting_deadline is the block time when voting ends
   */
  votingDeadline: bigint;
  /**
   * policy_version tracks the policy version at submission time for veto invalidation
   */
  policyVersion: bigint;
  /**
   * metadata is optional metadata about the proposal
   */
  metadata: string;
  /**
   * execution_time is the earliest time the proposal can be executed after acceptance
   */
  executionTime: bigint;
  /**
   * failed_reason stores the reason if execution failed
   */
  failedReason: string;
}
export interface ProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.Proposal";
  value: Uint8Array;
}
/**
 * Proposal represents a council governance proposal.
 * @name ProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Proposal
 */
export interface ProposalAmino {
  id?: string;
  /**
   * council_name is the name of the council this proposal belongs to
   */
  council_name?: string;
  /**
   * policy_address is the policy address (standard or veto) that this proposal targets
   */
  policy_address?: string;
  /**
   * proposer is the address that submitted the proposal
   */
  proposer?: string;
  /**
   * messages are the messages to execute if the proposal passes
   */
  messages?: AnyAmino[];
  /**
   * status is the current status of the proposal
   */
  status?: ProposalStatus;
  /**
   * submit_time is the block time when the proposal was submitted
   */
  submit_time?: string;
  /**
   * voting_deadline is the block time when voting ends
   */
  voting_deadline?: string;
  /**
   * policy_version tracks the policy version at submission time for veto invalidation
   */
  policy_version?: string;
  /**
   * metadata is optional metadata about the proposal
   */
  metadata?: string;
  /**
   * execution_time is the earliest time the proposal can be executed after acceptance
   */
  execution_time?: string;
  /**
   * failed_reason stores the reason if execution failed
   */
  failed_reason?: string;
}
export interface ProposalAminoMsg {
  type: "/sparkdream.commons.v1.Proposal";
  value: ProposalAmino;
}
/**
 * TallyResult contains the vote tally for a proposal.
 * @name TallyResult
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.TallyResult
 */
export interface TallyResult {
  yesWeight: string;
  noWeight: string;
  abstainWeight: string;
  noWithVetoWeight: string;
}
export interface TallyResultProtoMsg {
  typeUrl: "/sparkdream.commons.v1.TallyResult";
  value: Uint8Array;
}
/**
 * TallyResult contains the vote tally for a proposal.
 * @name TallyResultAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.TallyResult
 */
export interface TallyResultAmino {
  yes_weight?: string;
  no_weight?: string;
  abstain_weight?: string;
  no_with_veto_weight?: string;
}
export interface TallyResultAminoMsg {
  type: "/sparkdream.commons.v1.TallyResult";
  value: TallyResultAmino;
}
/**
 * AnonVoteTally stores the anonymous vote counts for a proposal.
 * Anonymous votes have uniform weight=1 and are tallied separately from
 * regular council member votes.
 * @name AnonVoteTally
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonVoteTally
 */
export interface AnonVoteTally {
  yesCount: bigint;
  noCount: bigint;
  abstainCount: bigint;
  noWithVetoCount: bigint;
}
export interface AnonVoteTallyProtoMsg {
  typeUrl: "/sparkdream.commons.v1.AnonVoteTally";
  value: Uint8Array;
}
/**
 * AnonVoteTally stores the anonymous vote counts for a proposal.
 * Anonymous votes have uniform weight=1 and are tallied separately from
 * regular council member votes.
 * @name AnonVoteTallyAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonVoteTally
 */
export interface AnonVoteTallyAmino {
  yes_count?: string;
  no_count?: string;
  abstain_count?: string;
  no_with_veto_count?: string;
}
export interface AnonVoteTallyAminoMsg {
  type: "/sparkdream.commons.v1.AnonVoteTally";
  value: AnonVoteTallyAmino;
}
function createBaseGroup(): Group {
  return {
    index: "",
    groupId: BigInt(0),
    policyAddress: "",
    parentPolicyAddress: "",
    electoralPolicyAddress: "",
    fundingWeight: BigInt(0),
    maxSpendPerEpoch: "",
    updateCooldown: BigInt(0),
    minMembers: BigInt(0),
    maxMembers: BigInt(0),
    termDuration: BigInt(0),
    currentTermExpiration: BigInt(0),
    activationTime: BigInt(0),
    lastParentUpdate: BigInt(0),
    futarchyEnabled: false,
    vetoPolicyAddress: ""
  };
}
/**
 * Group defines a governance group (council or committee) with its configuration.
 * @name Group
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Group
 */
export const Group = {
  typeUrl: "/sparkdream.commons.v1.Group",
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.policyAddress !== "") {
      writer.uint32(26).string(message.policyAddress);
    }
    if (message.parentPolicyAddress !== "") {
      writer.uint32(34).string(message.parentPolicyAddress);
    }
    if (message.electoralPolicyAddress !== "") {
      writer.uint32(42).string(message.electoralPolicyAddress);
    }
    if (message.fundingWeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.fundingWeight);
    }
    if (message.maxSpendPerEpoch !== "") {
      writer.uint32(58).string(message.maxSpendPerEpoch);
    }
    if (message.updateCooldown !== BigInt(0)) {
      writer.uint32(64).int64(message.updateCooldown);
    }
    if (message.minMembers !== BigInt(0)) {
      writer.uint32(72).uint64(message.minMembers);
    }
    if (message.maxMembers !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxMembers);
    }
    if (message.termDuration !== BigInt(0)) {
      writer.uint32(88).int64(message.termDuration);
    }
    if (message.currentTermExpiration !== BigInt(0)) {
      writer.uint32(96).int64(message.currentTermExpiration);
    }
    if (message.activationTime !== BigInt(0)) {
      writer.uint32(104).int64(message.activationTime);
    }
    if (message.lastParentUpdate !== BigInt(0)) {
      writer.uint32(112).int64(message.lastParentUpdate);
    }
    if (message.futarchyEnabled === true) {
      writer.uint32(120).bool(message.futarchyEnabled);
    }
    if (message.vetoPolicyAddress !== "") {
      writer.uint32(130).string(message.vetoPolicyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.policyAddress = reader.string();
          break;
        case 4:
          message.parentPolicyAddress = reader.string();
          break;
        case 5:
          message.electoralPolicyAddress = reader.string();
          break;
        case 6:
          message.fundingWeight = reader.uint64();
          break;
        case 7:
          message.maxSpendPerEpoch = reader.string();
          break;
        case 8:
          message.updateCooldown = reader.int64();
          break;
        case 9:
          message.minMembers = reader.uint64();
          break;
        case 10:
          message.maxMembers = reader.uint64();
          break;
        case 11:
          message.termDuration = reader.int64();
          break;
        case 12:
          message.currentTermExpiration = reader.int64();
          break;
        case 13:
          message.activationTime = reader.int64();
          break;
        case 14:
          message.lastParentUpdate = reader.int64();
          break;
        case 15:
          message.futarchyEnabled = reader.bool();
          break;
        case 16:
          message.vetoPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    message.index = object.index ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.policyAddress = object.policyAddress ?? "";
    message.parentPolicyAddress = object.parentPolicyAddress ?? "";
    message.electoralPolicyAddress = object.electoralPolicyAddress ?? "";
    message.fundingWeight = object.fundingWeight !== undefined && object.fundingWeight !== null ? BigInt(object.fundingWeight.toString()) : BigInt(0);
    message.maxSpendPerEpoch = object.maxSpendPerEpoch ?? "";
    message.updateCooldown = object.updateCooldown !== undefined && object.updateCooldown !== null ? BigInt(object.updateCooldown.toString()) : BigInt(0);
    message.minMembers = object.minMembers !== undefined && object.minMembers !== null ? BigInt(object.minMembers.toString()) : BigInt(0);
    message.maxMembers = object.maxMembers !== undefined && object.maxMembers !== null ? BigInt(object.maxMembers.toString()) : BigInt(0);
    message.termDuration = object.termDuration !== undefined && object.termDuration !== null ? BigInt(object.termDuration.toString()) : BigInt(0);
    message.currentTermExpiration = object.currentTermExpiration !== undefined && object.currentTermExpiration !== null ? BigInt(object.currentTermExpiration.toString()) : BigInt(0);
    message.activationTime = object.activationTime !== undefined && object.activationTime !== null ? BigInt(object.activationTime.toString()) : BigInt(0);
    message.lastParentUpdate = object.lastParentUpdate !== undefined && object.lastParentUpdate !== null ? BigInt(object.lastParentUpdate.toString()) : BigInt(0);
    message.futarchyEnabled = object.futarchyEnabled ?? false;
    message.vetoPolicyAddress = object.vetoPolicyAddress ?? "";
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.parent_policy_address !== undefined && object.parent_policy_address !== null) {
      message.parentPolicyAddress = object.parent_policy_address;
    }
    if (object.electoral_policy_address !== undefined && object.electoral_policy_address !== null) {
      message.electoralPolicyAddress = object.electoral_policy_address;
    }
    if (object.funding_weight !== undefined && object.funding_weight !== null) {
      message.fundingWeight = BigInt(object.funding_weight);
    }
    if (object.max_spend_per_epoch !== undefined && object.max_spend_per_epoch !== null) {
      message.maxSpendPerEpoch = object.max_spend_per_epoch;
    }
    if (object.update_cooldown !== undefined && object.update_cooldown !== null) {
      message.updateCooldown = BigInt(object.update_cooldown);
    }
    if (object.min_members !== undefined && object.min_members !== null) {
      message.minMembers = BigInt(object.min_members);
    }
    if (object.max_members !== undefined && object.max_members !== null) {
      message.maxMembers = BigInt(object.max_members);
    }
    if (object.term_duration !== undefined && object.term_duration !== null) {
      message.termDuration = BigInt(object.term_duration);
    }
    if (object.current_term_expiration !== undefined && object.current_term_expiration !== null) {
      message.currentTermExpiration = BigInt(object.current_term_expiration);
    }
    if (object.activation_time !== undefined && object.activation_time !== null) {
      message.activationTime = BigInt(object.activation_time);
    }
    if (object.last_parent_update !== undefined && object.last_parent_update !== null) {
      message.lastParentUpdate = BigInt(object.last_parent_update);
    }
    if (object.futarchy_enabled !== undefined && object.futarchy_enabled !== null) {
      message.futarchyEnabled = object.futarchy_enabled;
    }
    if (object.veto_policy_address !== undefined && object.veto_policy_address !== null) {
      message.vetoPolicyAddress = object.veto_policy_address;
    }
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.parent_policy_address = message.parentPolicyAddress === "" ? undefined : message.parentPolicyAddress;
    obj.electoral_policy_address = message.electoralPolicyAddress === "" ? undefined : message.electoralPolicyAddress;
    obj.funding_weight = message.fundingWeight !== BigInt(0) ? message.fundingWeight?.toString() : undefined;
    obj.max_spend_per_epoch = message.maxSpendPerEpoch === "" ? undefined : message.maxSpendPerEpoch;
    obj.update_cooldown = message.updateCooldown !== BigInt(0) ? message.updateCooldown?.toString() : undefined;
    obj.min_members = message.minMembers !== BigInt(0) ? message.minMembers?.toString() : undefined;
    obj.max_members = message.maxMembers !== BigInt(0) ? message.maxMembers?.toString() : undefined;
    obj.term_duration = message.termDuration !== BigInt(0) ? message.termDuration?.toString() : undefined;
    obj.current_term_expiration = message.currentTermExpiration !== BigInt(0) ? message.currentTermExpiration?.toString() : undefined;
    obj.activation_time = message.activationTime !== BigInt(0) ? message.activationTime?.toString() : undefined;
    obj.last_parent_update = message.lastParentUpdate !== BigInt(0) ? message.lastParentUpdate?.toString() : undefined;
    obj.futarchy_enabled = message.futarchyEnabled === false ? undefined : message.futarchyEnabled;
    obj.veto_policy_address = message.vetoPolicyAddress === "" ? undefined : message.vetoPolicyAddress;
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.Group",
      value: Group.encode(message).finish()
    };
  }
};
function createBaseMember(): Member {
  return {
    address: "",
    weight: "",
    metadata: "",
    addedAt: BigInt(0)
  };
}
/**
 * Member represents a member of a council or committee.
 * @name Member
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Member
 */
export const Member = {
  typeUrl: "/sparkdream.commons.v1.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.addedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.addedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.addedAt = object.addedAt !== undefined && object.addedAt !== null ? BigInt(object.addedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.added_at !== undefined && object.added_at !== null) {
      message.addedAt = BigInt(object.added_at);
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight === "" ? undefined : message.weight;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.added_at = message.addedAt !== BigInt(0) ? message.addedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseDecisionPolicy(): DecisionPolicy {
  return {
    policyType: "",
    threshold: "",
    votingPeriod: BigInt(0),
    minExecutionPeriod: BigInt(0)
  };
}
/**
 * DecisionPolicy defines the voting rules for a council policy.
 * @name DecisionPolicy
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.DecisionPolicy
 */
export const DecisionPolicy = {
  typeUrl: "/sparkdream.commons.v1.DecisionPolicy",
  encode(message: DecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyType !== "") {
      writer.uint32(10).string(message.policyType);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.votingPeriod !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPeriod);
    }
    if (message.minExecutionPeriod !== BigInt(0)) {
      writer.uint32(32).int64(message.minExecutionPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyType = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.votingPeriod = reader.int64();
          break;
        case 4:
          message.minExecutionPeriod = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DecisionPolicy>): DecisionPolicy {
    const message = createBaseDecisionPolicy();
    message.policyType = object.policyType ?? "";
    message.threshold = object.threshold ?? "";
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? BigInt(object.votingPeriod.toString()) : BigInt(0);
    message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? BigInt(object.minExecutionPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DecisionPolicyAmino): DecisionPolicy {
    const message = createBaseDecisionPolicy();
    if (object.policy_type !== undefined && object.policy_type !== null) {
      message.policyType = object.policy_type;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = BigInt(object.voting_period);
    }
    if (object.min_execution_period !== undefined && object.min_execution_period !== null) {
      message.minExecutionPeriod = BigInt(object.min_execution_period);
    }
    return message;
  },
  toAmino(message: DecisionPolicy): DecisionPolicyAmino {
    const obj: any = {};
    obj.policy_type = message.policyType === "" ? undefined : message.policyType;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.voting_period = message.votingPeriod !== BigInt(0) ? message.votingPeriod?.toString() : undefined;
    obj.min_execution_period = message.minExecutionPeriod !== BigInt(0) ? message.minExecutionPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DecisionPolicyAminoMsg): DecisionPolicy {
    return DecisionPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: DecisionPolicyProtoMsg): DecisionPolicy {
    return DecisionPolicy.decode(message.value);
  },
  toProto(message: DecisionPolicy): Uint8Array {
    return DecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: DecisionPolicy): DecisionPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.DecisionPolicy",
      value: DecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    voter: "",
    option: 0,
    metadata: "",
    submitTime: BigInt(0)
  };
}
/**
 * Vote represents a single vote on a proposal.
 * @name Vote
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Vote
 */
export const Vote = {
  typeUrl: "/sparkdream.commons.v1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(16).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(32).int64(message.submitTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.option = reader.int32() as any;
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.submitTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = BigInt(object.submit_time);
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.submit_time = message.submitTime !== BigInt(0) ? message.submitTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    councilName: "",
    policyAddress: "",
    proposer: "",
    messages: [],
    status: 0,
    submitTime: BigInt(0),
    votingDeadline: BigInt(0),
    policyVersion: BigInt(0),
    metadata: "",
    executionTime: BigInt(0),
    failedReason: ""
  };
}
/**
 * Proposal represents a council governance proposal.
 * @name Proposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Proposal
 */
export const Proposal = {
  typeUrl: "/sparkdream.commons.v1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.councilName !== "") {
      writer.uint32(18).string(message.councilName);
    }
    if (message.policyAddress !== "") {
      writer.uint32(26).string(message.policyAddress);
    }
    if (message.proposer !== "") {
      writer.uint32(34).string(message.proposer);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(56).int64(message.submitTime);
    }
    if (message.votingDeadline !== BigInt(0)) {
      writer.uint32(64).int64(message.votingDeadline);
    }
    if (message.policyVersion !== BigInt(0)) {
      writer.uint32(72).uint64(message.policyVersion);
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.executionTime !== BigInt(0)) {
      writer.uint32(88).int64(message.executionTime);
    }
    if (message.failedReason !== "") {
      writer.uint32(98).string(message.failedReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.councilName = reader.string();
          break;
        case 3:
          message.policyAddress = reader.string();
          break;
        case 4:
          message.proposer = reader.string();
          break;
        case 5:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.submitTime = reader.int64();
          break;
        case 8:
          message.votingDeadline = reader.int64();
          break;
        case 9:
          message.policyVersion = reader.uint64();
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.executionTime = reader.int64();
          break;
        case 12:
          message.failedReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.councilName = object.councilName ?? "";
    message.policyAddress = object.policyAddress ?? "";
    message.proposer = object.proposer ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
    message.votingDeadline = object.votingDeadline !== undefined && object.votingDeadline !== null ? BigInt(object.votingDeadline.toString()) : BigInt(0);
    message.policyVersion = object.policyVersion !== undefined && object.policyVersion !== null ? BigInt(object.policyVersion.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    message.executionTime = object.executionTime !== undefined && object.executionTime !== null ? BigInt(object.executionTime.toString()) : BigInt(0);
    message.failedReason = object.failedReason ?? "";
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = BigInt(object.submit_time);
    }
    if (object.voting_deadline !== undefined && object.voting_deadline !== null) {
      message.votingDeadline = BigInt(object.voting_deadline);
    }
    if (object.policy_version !== undefined && object.policy_version !== null) {
      message.policyVersion = BigInt(object.policy_version);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.execution_time !== undefined && object.execution_time !== null) {
      message.executionTime = BigInt(object.execution_time);
    }
    if (object.failed_reason !== undefined && object.failed_reason !== null) {
      message.failedReason = object.failed_reason;
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.submit_time = message.submitTime !== BigInt(0) ? message.submitTime?.toString() : undefined;
    obj.voting_deadline = message.votingDeadline !== BigInt(0) ? message.votingDeadline?.toString() : undefined;
    obj.policy_version = message.policyVersion !== BigInt(0) ? message.policyVersion?.toString() : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.execution_time = message.executionTime !== BigInt(0) ? message.executionTime?.toString() : undefined;
    obj.failed_reason = message.failedReason === "" ? undefined : message.failedReason;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTallyResult(): TallyResult {
  return {
    yesWeight: "",
    noWeight: "",
    abstainWeight: "",
    noWithVetoWeight: ""
  };
}
/**
 * TallyResult contains the vote tally for a proposal.
 * @name TallyResult
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.TallyResult
 */
export const TallyResult = {
  typeUrl: "/sparkdream.commons.v1.TallyResult",
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesWeight !== "") {
      writer.uint32(10).string(message.yesWeight);
    }
    if (message.noWeight !== "") {
      writer.uint32(18).string(message.noWeight);
    }
    if (message.abstainWeight !== "") {
      writer.uint32(26).string(message.abstainWeight);
    }
    if (message.noWithVetoWeight !== "") {
      writer.uint32(34).string(message.noWithVetoWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesWeight = reader.string();
          break;
        case 2:
          message.noWeight = reader.string();
          break;
        case 3:
          message.abstainWeight = reader.string();
          break;
        case 4:
          message.noWithVetoWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesWeight = object.yesWeight ?? "";
    message.noWeight = object.noWeight ?? "";
    message.abstainWeight = object.abstainWeight ?? "";
    message.noWithVetoWeight = object.noWithVetoWeight ?? "";
    return message;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes_weight !== undefined && object.yes_weight !== null) {
      message.yesWeight = object.yes_weight;
    }
    if (object.no_weight !== undefined && object.no_weight !== null) {
      message.noWeight = object.no_weight;
    }
    if (object.abstain_weight !== undefined && object.abstain_weight !== null) {
      message.abstainWeight = object.abstain_weight;
    }
    if (object.no_with_veto_weight !== undefined && object.no_with_veto_weight !== null) {
      message.noWithVetoWeight = object.no_with_veto_weight;
    }
    return message;
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes_weight = message.yesWeight === "" ? undefined : message.yesWeight;
    obj.no_weight = message.noWeight === "" ? undefined : message.noWeight;
    obj.abstain_weight = message.abstainWeight === "" ? undefined : message.abstainWeight;
    obj.no_with_veto_weight = message.noWithVetoWeight === "" ? undefined : message.noWithVetoWeight;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseAnonVoteTally(): AnonVoteTally {
  return {
    yesCount: BigInt(0),
    noCount: BigInt(0),
    abstainCount: BigInt(0),
    noWithVetoCount: BigInt(0)
  };
}
/**
 * AnonVoteTally stores the anonymous vote counts for a proposal.
 * Anonymous votes have uniform weight=1 and are tallied separately from
 * regular council member votes.
 * @name AnonVoteTally
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonVoteTally
 */
export const AnonVoteTally = {
  typeUrl: "/sparkdream.commons.v1.AnonVoteTally",
  encode(message: AnonVoteTally, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.yesCount);
    }
    if (message.noCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.noCount);
    }
    if (message.abstainCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.abstainCount);
    }
    if (message.noWithVetoCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.noWithVetoCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnonVoteTally {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnonVoteTally();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.uint64();
          break;
        case 2:
          message.noCount = reader.uint64();
          break;
        case 3:
          message.abstainCount = reader.uint64();
          break;
        case 4:
          message.noWithVetoCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AnonVoteTally>): AnonVoteTally {
    const message = createBaseAnonVoteTally();
    message.yesCount = object.yesCount !== undefined && object.yesCount !== null ? BigInt(object.yesCount.toString()) : BigInt(0);
    message.noCount = object.noCount !== undefined && object.noCount !== null ? BigInt(object.noCount.toString()) : BigInt(0);
    message.abstainCount = object.abstainCount !== undefined && object.abstainCount !== null ? BigInt(object.abstainCount.toString()) : BigInt(0);
    message.noWithVetoCount = object.noWithVetoCount !== undefined && object.noWithVetoCount !== null ? BigInt(object.noWithVetoCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AnonVoteTallyAmino): AnonVoteTally {
    const message = createBaseAnonVoteTally();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = BigInt(object.yes_count);
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = BigInt(object.no_count);
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = BigInt(object.abstain_count);
    }
    if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
      message.noWithVetoCount = BigInt(object.no_with_veto_count);
    }
    return message;
  },
  toAmino(message: AnonVoteTally): AnonVoteTallyAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount !== BigInt(0) ? message.yesCount?.toString() : undefined;
    obj.no_count = message.noCount !== BigInt(0) ? message.noCount?.toString() : undefined;
    obj.abstain_count = message.abstainCount !== BigInt(0) ? message.abstainCount?.toString() : undefined;
    obj.no_with_veto_count = message.noWithVetoCount !== BigInt(0) ? message.noWithVetoCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AnonVoteTallyAminoMsg): AnonVoteTally {
    return AnonVoteTally.fromAmino(object.value);
  },
  fromProtoMsg(message: AnonVoteTallyProtoMsg): AnonVoteTally {
    return AnonVoteTally.decode(message.value);
  },
  toProto(message: AnonVoteTally): Uint8Array {
    return AnonVoteTally.encode(message).finish();
  },
  toProtoMsg(message: AnonVoteTally): AnonVoteTallyProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.AnonVoteTally",
      value: AnonVoteTally.encode(message).finish()
    };
  }
};