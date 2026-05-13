//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope emits a flat AminoConverter that hands each entry's toAmino
// straight through to the message's auto-generated toAmino. For
// MsgSubmitProposal and MsgSubmitAnonymousProposal (both have
// `repeated google.protobuf.Any messages`), the auto-generated toAmino calls
// Any.toAmino which just attaches the raw Uint8Array bytes — Ledger rejects
// the resulting JSON ("Dictionaries are not sorted") and the chain produces
// different sign bytes ("signature verification failed").
//
// This override delegates the inner Any conversion to a consumer-supplied
// proto registry + AminoTypes via `configureNestedAminoConverter`. The rest of
// the converters are unchanged.

import {
  MsgUpdateParams, MsgSpendFromCommons, MsgEmergencyCancelGovProposal,
  MsgCreatePolicyPermissions, MsgUpdatePolicyPermissions, MsgDeletePolicyPermissions,
  MsgRegisterGroup, MsgRenewGroup, MsgUpdateGroupMembers, MsgUpdateGroupConfig,
  MsgForceUpgrade, MsgDeleteGroup, MsgVetoGroupProposals,
  MsgSubmitProposal, MsgVoteProposal, MsgExecuteProposal,
  MsgSubmitAnonymousProposal, MsgAnonymousVoteProposal,
  MsgCreateCategory, MsgDeleteCategory,
} from "./tx";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

export { configureNestedAminoConverter } from "../../../nested-amino";

// Both proposal-submission messages share the same shape, so they share a
// converter factory.
function buildProposalConverter(aminoType: string) {
  return {
    aminoType,
    toAmino(message: any): any {
      const obj: any = {};
      obj.proposer = message.proposer === "" ? undefined : message.proposer;
      obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
      // Mirror cosmossdk.io/x/tx/signing/aminojson's omitempty default for
      // repeated fields: omit when empty rather than emitting `[]`. Otherwise
      // the JS side signs `"messages":[]` and the chain reconstructs without
      // the key, causing signature verification to fail.
      obj.messages = (message.messages?.length ?? 0) > 0
        ? message.messages.map((a: any) => anyToAmino(a))
        : undefined;
      obj.metadata = message.metadata === "" ? undefined : message.metadata;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        proposer: object.proposer ?? "",
        policyAddress: object.policy_address ?? "",
        messages: (object.messages ?? []).map((e: any) => aminoToAny(e)),
        metadata: object.metadata ?? "",
      };
    },
  };
}

export const AminoConverter = {
  "/sparkdream.commons.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/commons/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.commons.v1.MsgSpendFromCommons": {
    aminoType: "sparkdream/x/commons/MsgSpendFromCommons",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.recipient = message.recipient === "" ? undefined : message.recipient;
      obj.amount = (message.amount?.length ?? 0) > 0
        ? message.amount.map((e: any) => e ? Coin.toAmino(e) : undefined)
        : undefined;
      return obj;
    },
    fromAmino: MsgSpendFromCommons.fromAmino,
  },
  "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal": {
    aminoType: "sparkdream/x/commons/MsgEmergencyCancelGovProposal",
    toAmino: MsgEmergencyCancelGovProposal.toAmino,
    fromAmino: MsgEmergencyCancelGovProposal.fromAmino,
  },
  "/sparkdream.commons.v1.MsgCreatePolicyPermissions": {
    aminoType: "sparkdream/x/commons/MsgCreatePolicyPermissions",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
      obj.allowed_messages = (message.allowedMessages?.length ?? 0) > 0
        ? message.allowedMessages.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgCreatePolicyPermissions.fromAmino,
  },
  "/sparkdream.commons.v1.MsgUpdatePolicyPermissions": {
    aminoType: "sparkdream/x/commons/MsgUpdatePolicyPermissions",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
      obj.allowed_messages = (message.allowedMessages?.length ?? 0) > 0
        ? message.allowedMessages.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgUpdatePolicyPermissions.fromAmino,
  },
  "/sparkdream.commons.v1.MsgDeletePolicyPermissions": {
    aminoType: "sparkdream/x/commons/MsgDeletePolicyPermissions",
    toAmino: MsgDeletePolicyPermissions.toAmino,
    fromAmino: MsgDeletePolicyPermissions.fromAmino,
  },
  "/sparkdream.commons.v1.MsgRegisterGroup": {
    aminoType: "sparkdream/x/commons/MsgRegisterGroup",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.name = message.name === "" ? undefined : message.name;
      obj.description = message.description === "" ? undefined : message.description;
      obj.members = (message.members?.length ?? 0) > 0
        ? message.members.map((e: string) => e)
        : undefined;
      obj.member_weights = (message.memberWeights?.length ?? 0) > 0
        ? message.memberWeights.map((e: string) => e)
        : undefined;
      obj.funding_weight = message.fundingWeight !== BigInt(0) ? message.fundingWeight?.toString() : undefined;
      obj.max_spend_per_epoch = message.maxSpendPerEpoch === "" ? undefined : message.maxSpendPerEpoch;
      obj.update_cooldown = message.updateCooldown !== BigInt(0) ? message.updateCooldown?.toString() : undefined;
      obj.intended_parent_address = message.intendedParentAddress === "" ? undefined : message.intendedParentAddress;
      obj.min_members = message.minMembers !== BigInt(0) ? message.minMembers?.toString() : undefined;
      obj.max_members = message.maxMembers !== BigInt(0) ? message.maxMembers?.toString() : undefined;
      obj.term_duration = message.termDuration !== BigInt(0) ? message.termDuration?.toString() : undefined;
      obj.activation_time = message.activationTime !== BigInt(0) ? message.activationTime?.toString() : undefined;
      obj.voting_period = message.votingPeriod !== BigInt(0) ? message.votingPeriod?.toString() : undefined;
      obj.min_execution_period = message.minExecutionPeriod !== BigInt(0) ? message.minExecutionPeriod?.toString() : undefined;
      obj.futarchy_enabled = message.futarchyEnabled === false ? undefined : message.futarchyEnabled;
      obj.vote_threshold = message.voteThreshold === "" ? undefined : message.voteThreshold;
      obj.policy_type = message.policyType === "" ? undefined : message.policyType;
      obj.allowed_messages = (message.allowedMessages?.length ?? 0) > 0
        ? message.allowedMessages.map((e: string) => e)
        : undefined;
      obj.electoral_policy_address = message.electoralPolicyAddress === "" ? undefined : message.electoralPolicyAddress;
      return obj;
    },
    fromAmino: MsgRegisterGroup.fromAmino,
  },
  "/sparkdream.commons.v1.MsgRenewGroup": {
    aminoType: "sparkdream/x/commons/MsgRenewGroup",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.group_name = message.groupName === "" ? undefined : message.groupName;
      obj.new_members = (message.newMembers?.length ?? 0) > 0
        ? message.newMembers.map((e: string) => e)
        : undefined;
      obj.new_member_weights = (message.newMemberWeights?.length ?? 0) > 0
        ? message.newMemberWeights.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgRenewGroup.fromAmino,
  },
  // Telescope's auto-generated toAmino emits `[]` for empty repeated fields
  // (the `if (message.membersToAdd)` check is truthy for `[]` in JS), but
  // aminojson on the chain side omits them. An invite has empty
  // `members_to_remove`, a remove has empty `members_to_add`/`weights_to_add`,
  // and either combination produces sign-bytes that don't match what the
  // chain reconstructs — surfacing as "signature verification failed" /
  // "unauthorized". Mirror the omitempty pattern used by the proposal
  // converter above.
  "/sparkdream.commons.v1.MsgUpdateGroupMembers": {
    aminoType: "sparkdream/x/commons/MsgUpdateGroupMembers",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.group_policy_address = message.groupPolicyAddress === ""
        ? undefined
        : message.groupPolicyAddress;
      obj.members_to_add = (message.membersToAdd?.length ?? 0) > 0
        ? message.membersToAdd.map((e: string) => e)
        : undefined;
      obj.weights_to_add = (message.weightsToAdd?.length ?? 0) > 0
        ? message.weightsToAdd.map((e: string) => e)
        : undefined;
      obj.members_to_remove = (message.membersToRemove?.length ?? 0) > 0
        ? message.membersToRemove.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgUpdateGroupMembers.fromAmino,
  },
  "/sparkdream.commons.v1.MsgUpdateGroupConfig": {
    aminoType: "sparkdream/x/commons/MsgUpdateGroupConfig",
    toAmino: MsgUpdateGroupConfig.toAmino,
    fromAmino: MsgUpdateGroupConfig.fromAmino,
  },
  "/sparkdream.commons.v1.MsgForceUpgrade": {
    aminoType: "sparkdream/x/commons/MsgForceUpgrade",
    toAmino: MsgForceUpgrade.toAmino,
    fromAmino: MsgForceUpgrade.fromAmino,
  },
  "/sparkdream.commons.v1.MsgDeleteGroup": {
    aminoType: "sparkdream/x/commons/MsgDeleteGroup",
    toAmino: MsgDeleteGroup.toAmino,
    fromAmino: MsgDeleteGroup.fromAmino,
  },
  "/sparkdream.commons.v1.MsgVetoGroupProposals": {
    aminoType: "sparkdream/x/commons/MsgVetoGroupProposals",
    toAmino: MsgVetoGroupProposals.toAmino,
    fromAmino: MsgVetoGroupProposals.fromAmino,
  },
  // Recursive Any handling — see top-of-file comment.
  "/sparkdream.commons.v1.MsgSubmitProposal": buildProposalConverter(
    "sparkdream/x/commons/MsgSubmitProposal"
  ),
  "/sparkdream.commons.v1.MsgVoteProposal": {
    aminoType: "sparkdream/x/commons/MsgVoteProposal",
    toAmino: MsgVoteProposal.toAmino,
    fromAmino: MsgVoteProposal.fromAmino,
  },
  "/sparkdream.commons.v1.MsgExecuteProposal": {
    aminoType: "sparkdream/x/commons/MsgExecuteProposal",
    toAmino: MsgExecuteProposal.toAmino,
    fromAmino: MsgExecuteProposal.fromAmino,
  },
  // Recursive Any handling — see top-of-file comment.
  "/sparkdream.commons.v1.MsgSubmitAnonymousProposal": buildProposalConverter(
    "sparkdream/x/commons/MsgSubmitAnonymousProposal"
  ),
  "/sparkdream.commons.v1.MsgAnonymousVoteProposal": {
    aminoType: "sparkdream/x/commons/MsgAnonymousVoteProposal",
    toAmino: MsgAnonymousVoteProposal.toAmino,
    fromAmino: MsgAnonymousVoteProposal.fromAmino,
  },
  "/sparkdream.commons.v1.MsgCreateCategory": {
    aminoType: "sparkdream/x/commons/MsgCreateCategory",
    toAmino: MsgCreateCategory.toAmino,
    fromAmino: MsgCreateCategory.fromAmino,
  },
  "/sparkdream.commons.v1.MsgDeleteCategory": {
    aminoType: "sparkdream/x/commons/MsgDeleteCategory",
    toAmino: MsgDeleteCategory.toAmino,
    fromAmino: MsgDeleteCategory.fromAmino,
  },
};
