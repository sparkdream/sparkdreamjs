//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { PolicyPermissions, PolicyPermissionsAmino } from "./policy_permissions";
import { Group, GroupAmino, Proposal, ProposalAmino, Member, MemberAmino, DecisionPolicy, DecisionPolicyAmino, Vote, VoteAmino } from "./group";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the commons module's genesis state.
 * @name GenesisState
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  policyPermissionsMap: PolicyPermissions[];
  groupMap: Group[];
  /**
   * members stores all council members keyed by council_name
   */
  councilMembers: CouncilMembers[];
  /**
   * decision_policies stores decision policies keyed by policy_address
   */
  decisionPolicies: PolicyWithAddress[];
  /**
   * proposals stores all proposals
   */
  proposals: Proposal[];
  /**
   * next_proposal_id is the next auto-increment proposal ID
   */
  nextProposalId: bigint;
  /**
   * next_council_id is the next auto-increment council ID
   */
  nextCouncilId: bigint;
  /**
   * policy_versions stores the current version for each policy address
   */
  policyVersions: PolicyVersionEntry[];
  /**
   * votes stores all active votes
   */
  proposalVotes: ProposalVotes[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.commons.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the commons module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  policy_permissions_map?: PolicyPermissionsAmino[];
  group_map?: GroupAmino[];
  /**
   * members stores all council members keyed by council_name
   */
  council_members?: CouncilMembersAmino[];
  /**
   * decision_policies stores decision policies keyed by policy_address
   */
  decision_policies?: PolicyWithAddressAmino[];
  /**
   * proposals stores all proposals
   */
  proposals?: ProposalAmino[];
  /**
   * next_proposal_id is the next auto-increment proposal ID
   */
  next_proposal_id?: string;
  /**
   * next_council_id is the next auto-increment council ID
   */
  next_council_id?: string;
  /**
   * policy_versions stores the current version for each policy address
   */
  policy_versions?: PolicyVersionEntryAmino[];
  /**
   * votes stores all active votes
   */
  proposal_votes?: ProposalVotesAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.commons.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * CouncilMembers groups members by council name for genesis export.
 * @name CouncilMembers
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.CouncilMembers
 */
export interface CouncilMembers {
  councilName: string;
  members: Member[];
}
export interface CouncilMembersProtoMsg {
  typeUrl: "/sparkdream.commons.v1.CouncilMembers";
  value: Uint8Array;
}
/**
 * CouncilMembers groups members by council name for genesis export.
 * @name CouncilMembersAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.CouncilMembers
 */
export interface CouncilMembersAmino {
  council_name?: string;
  members?: MemberAmino[];
}
export interface CouncilMembersAminoMsg {
  type: "/sparkdream.commons.v1.CouncilMembers";
  value: CouncilMembersAmino;
}
/**
 * PolicyWithAddress pairs a policy address with its decision policy.
 * @name PolicyWithAddress
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyWithAddress
 */
export interface PolicyWithAddress {
  policyAddress: string;
  decisionPolicy: DecisionPolicy;
}
export interface PolicyWithAddressProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PolicyWithAddress";
  value: Uint8Array;
}
/**
 * PolicyWithAddress pairs a policy address with its decision policy.
 * @name PolicyWithAddressAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyWithAddress
 */
export interface PolicyWithAddressAmino {
  policy_address?: string;
  decision_policy?: DecisionPolicyAmino;
}
export interface PolicyWithAddressAminoMsg {
  type: "/sparkdream.commons.v1.PolicyWithAddress";
  value: PolicyWithAddressAmino;
}
/**
 * PolicyVersionEntry pairs a policy address with its current version.
 * @name PolicyVersionEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyVersionEntry
 */
export interface PolicyVersionEntry {
  policyAddress: string;
  version: bigint;
}
export interface PolicyVersionEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PolicyVersionEntry";
  value: Uint8Array;
}
/**
 * PolicyVersionEntry pairs a policy address with its current version.
 * @name PolicyVersionEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyVersionEntry
 */
export interface PolicyVersionEntryAmino {
  policy_address?: string;
  version?: string;
}
export interface PolicyVersionEntryAminoMsg {
  type: "/sparkdream.commons.v1.PolicyVersionEntry";
  value: PolicyVersionEntryAmino;
}
/**
 * ProposalVotes groups votes by proposal ID for genesis export.
 * @name ProposalVotes
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVotes
 */
export interface ProposalVotes {
  proposalId: bigint;
  votes: Vote[];
}
export interface ProposalVotesProtoMsg {
  typeUrl: "/sparkdream.commons.v1.ProposalVotes";
  value: Uint8Array;
}
/**
 * ProposalVotes groups votes by proposal ID for genesis export.
 * @name ProposalVotesAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVotes
 */
export interface ProposalVotesAmino {
  proposal_id?: string;
  votes?: VoteAmino[];
}
export interface ProposalVotesAminoMsg {
  type: "/sparkdream.commons.v1.ProposalVotes";
  value: ProposalVotesAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    policyPermissionsMap: [],
    groupMap: [],
    councilMembers: [],
    decisionPolicies: [],
    proposals: [],
    nextProposalId: BigInt(0),
    nextCouncilId: BigInt(0),
    policyVersions: [],
    proposalVotes: []
  };
}
/**
 * GenesisState defines the commons module's genesis state.
 * @name GenesisState
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.commons.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.policyPermissionsMap) {
      PolicyPermissions.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMap) {
      Group.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.councilMembers) {
      CouncilMembers.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.decisionPolicies) {
      PolicyWithAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextProposalId !== BigInt(0)) {
      writer.uint32(56).uint64(message.nextProposalId);
    }
    if (message.nextCouncilId !== BigInt(0)) {
      writer.uint32(64).uint64(message.nextCouncilId);
    }
    for (const v of message.policyVersions) {
      PolicyVersionEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.proposalVotes) {
      ProposalVotes.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.policyPermissionsMap.push(PolicyPermissions.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMap.push(Group.decode(reader, reader.uint32()));
          break;
        case 4:
          message.councilMembers.push(CouncilMembers.decode(reader, reader.uint32()));
          break;
        case 5:
          message.decisionPolicies.push(PolicyWithAddress.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextProposalId = reader.uint64();
          break;
        case 8:
          message.nextCouncilId = reader.uint64();
          break;
        case 9:
          message.policyVersions.push(PolicyVersionEntry.decode(reader, reader.uint32()));
          break;
        case 10:
          message.proposalVotes.push(ProposalVotes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.policyPermissionsMap = object.policyPermissionsMap?.map(e => PolicyPermissions.fromPartial(e)) || [];
    message.groupMap = object.groupMap?.map(e => Group.fromPartial(e)) || [];
    message.councilMembers = object.councilMembers?.map(e => CouncilMembers.fromPartial(e)) || [];
    message.decisionPolicies = object.decisionPolicies?.map(e => PolicyWithAddress.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? BigInt(object.nextProposalId.toString()) : BigInt(0);
    message.nextCouncilId = object.nextCouncilId !== undefined && object.nextCouncilId !== null ? BigInt(object.nextCouncilId.toString()) : BigInt(0);
    message.policyVersions = object.policyVersions?.map(e => PolicyVersionEntry.fromPartial(e)) || [];
    message.proposalVotes = object.proposalVotes?.map(e => ProposalVotes.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.policyPermissionsMap = object.policy_permissions_map?.map(e => PolicyPermissions.fromAmino(e)) || [];
    message.groupMap = object.group_map?.map(e => Group.fromAmino(e)) || [];
    message.councilMembers = object.council_members?.map(e => CouncilMembers.fromAmino(e)) || [];
    message.decisionPolicies = object.decision_policies?.map(e => PolicyWithAddress.fromAmino(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.next_proposal_id !== undefined && object.next_proposal_id !== null) {
      message.nextProposalId = BigInt(object.next_proposal_id);
    }
    if (object.next_council_id !== undefined && object.next_council_id !== null) {
      message.nextCouncilId = BigInt(object.next_council_id);
    }
    message.policyVersions = object.policy_versions?.map(e => PolicyVersionEntry.fromAmino(e)) || [];
    message.proposalVotes = object.proposal_votes?.map(e => ProposalVotes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.policyPermissionsMap) {
      obj.policy_permissions_map = message.policyPermissionsMap.map(e => e ? PolicyPermissions.toAmino(e) : undefined);
    } else {
      obj.policy_permissions_map = message.policyPermissionsMap;
    }
    if (message.groupMap) {
      obj.group_map = message.groupMap.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.group_map = message.groupMap;
    }
    if (message.councilMembers) {
      obj.council_members = message.councilMembers.map(e => e ? CouncilMembers.toAmino(e) : undefined);
    } else {
      obj.council_members = message.councilMembers;
    }
    if (message.decisionPolicies) {
      obj.decision_policies = message.decisionPolicies.map(e => e ? PolicyWithAddress.toAmino(e) : undefined);
    } else {
      obj.decision_policies = message.decisionPolicies;
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.next_proposal_id = message.nextProposalId !== BigInt(0) ? message.nextProposalId?.toString() : undefined;
    obj.next_council_id = message.nextCouncilId !== BigInt(0) ? message.nextCouncilId?.toString() : undefined;
    if (message.policyVersions) {
      obj.policy_versions = message.policyVersions.map(e => e ? PolicyVersionEntry.toAmino(e) : undefined);
    } else {
      obj.policy_versions = message.policyVersions;
    }
    if (message.proposalVotes) {
      obj.proposal_votes = message.proposalVotes.map(e => e ? ProposalVotes.toAmino(e) : undefined);
    } else {
      obj.proposal_votes = message.proposalVotes;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseCouncilMembers(): CouncilMembers {
  return {
    councilName: "",
    members: []
  };
}
/**
 * CouncilMembers groups members by council name for genesis export.
 * @name CouncilMembers
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.CouncilMembers
 */
export const CouncilMembers = {
  typeUrl: "/sparkdream.commons.v1.CouncilMembers",
  encode(message: CouncilMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.councilName !== "") {
      writer.uint32(10).string(message.councilName);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CouncilMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCouncilMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.councilName = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CouncilMembers>): CouncilMembers {
    const message = createBaseCouncilMembers();
    message.councilName = object.councilName ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CouncilMembersAmino): CouncilMembers {
    const message = createBaseCouncilMembers();
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CouncilMembers): CouncilMembersAmino {
    const obj: any = {};
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    return obj;
  },
  fromAminoMsg(object: CouncilMembersAminoMsg): CouncilMembers {
    return CouncilMembers.fromAmino(object.value);
  },
  fromProtoMsg(message: CouncilMembersProtoMsg): CouncilMembers {
    return CouncilMembers.decode(message.value);
  },
  toProto(message: CouncilMembers): Uint8Array {
    return CouncilMembers.encode(message).finish();
  },
  toProtoMsg(message: CouncilMembers): CouncilMembersProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.CouncilMembers",
      value: CouncilMembers.encode(message).finish()
    };
  }
};
function createBasePolicyWithAddress(): PolicyWithAddress {
  return {
    policyAddress: "",
    decisionPolicy: DecisionPolicy.fromPartial({})
  };
}
/**
 * PolicyWithAddress pairs a policy address with its decision policy.
 * @name PolicyWithAddress
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyWithAddress
 */
export const PolicyWithAddress = {
  typeUrl: "/sparkdream.commons.v1.PolicyWithAddress",
  encode(message: PolicyWithAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    if (message.decisionPolicy !== undefined) {
      DecisionPolicy.encode(message.decisionPolicy, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyWithAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyWithAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.decisionPolicy = DecisionPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyWithAddress>): PolicyWithAddress {
    const message = createBasePolicyWithAddress();
    message.policyAddress = object.policyAddress ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? DecisionPolicy.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object: PolicyWithAddressAmino): PolicyWithAddress {
    const message = createBasePolicyWithAddress();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = DecisionPolicy.fromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message: PolicyWithAddress): PolicyWithAddressAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.decision_policy = message.decisionPolicy ? DecisionPolicy.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: PolicyWithAddressAminoMsg): PolicyWithAddress {
    return PolicyWithAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyWithAddressProtoMsg): PolicyWithAddress {
    return PolicyWithAddress.decode(message.value);
  },
  toProto(message: PolicyWithAddress): Uint8Array {
    return PolicyWithAddress.encode(message).finish();
  },
  toProtoMsg(message: PolicyWithAddress): PolicyWithAddressProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PolicyWithAddress",
      value: PolicyWithAddress.encode(message).finish()
    };
  }
};
function createBasePolicyVersionEntry(): PolicyVersionEntry {
  return {
    policyAddress: "",
    version: BigInt(0)
  };
}
/**
 * PolicyVersionEntry pairs a policy address with its current version.
 * @name PolicyVersionEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyVersionEntry
 */
export const PolicyVersionEntry = {
  typeUrl: "/sparkdream.commons.v1.PolicyVersionEntry",
  encode(message: PolicyVersionEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyVersionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyVersionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.version = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyVersionEntry>): PolicyVersionEntry {
    const message = createBasePolicyVersionEntry();
    message.policyAddress = object.policyAddress ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PolicyVersionEntryAmino): PolicyVersionEntry {
    const message = createBasePolicyVersionEntry();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    return message;
  },
  toAmino(message: PolicyVersionEntry): PolicyVersionEntryAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PolicyVersionEntryAminoMsg): PolicyVersionEntry {
    return PolicyVersionEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyVersionEntryProtoMsg): PolicyVersionEntry {
    return PolicyVersionEntry.decode(message.value);
  },
  toProto(message: PolicyVersionEntry): Uint8Array {
    return PolicyVersionEntry.encode(message).finish();
  },
  toProtoMsg(message: PolicyVersionEntry): PolicyVersionEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PolicyVersionEntry",
      value: PolicyVersionEntry.encode(message).finish()
    };
  }
};
function createBaseProposalVotes(): ProposalVotes {
  return {
    proposalId: BigInt(0),
    votes: []
  };
}
/**
 * ProposalVotes groups votes by proposal ID for genesis export.
 * @name ProposalVotes
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVotes
 */
export const ProposalVotes = {
  typeUrl: "/sparkdream.commons.v1.ProposalVotes",
  encode(message: ProposalVotes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalVotes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVotes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProposalVotes>): ProposalVotes {
    const message = createBaseProposalVotes();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalVotesAmino): ProposalVotes {
    const message = createBaseProposalVotes();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalVotes): ProposalVotesAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: ProposalVotesAminoMsg): ProposalVotes {
    return ProposalVotes.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalVotesProtoMsg): ProposalVotes {
    return ProposalVotes.decode(message.value);
  },
  toProto(message: ProposalVotes): Uint8Array {
    return ProposalVotes.encode(message).finish();
  },
  toProtoMsg(message: ProposalVotes): ProposalVotesProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.ProposalVotes",
      value: ProposalVotes.encode(message).finish()
    };
  }
};