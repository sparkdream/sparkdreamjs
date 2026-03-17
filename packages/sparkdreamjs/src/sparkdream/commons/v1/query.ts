//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { PolicyPermissions, PolicyPermissionsAmino } from "./policy_permissions";
import { Group, GroupAmino, Member, MemberAmino, Proposal, ProposalAmino, Vote, VoteAmino, TallyResult, TallyResultAmino } from "./group";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetPolicyPermissionsRequest defines the QueryGetPolicyPermissionsRequest message.
 * @name QueryGetPolicyPermissionsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetPolicyPermissionsRequest
 */
export interface QueryGetPolicyPermissionsRequest {
  policyAddress: string;
}
export interface QueryGetPolicyPermissionsRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetPolicyPermissionsRequest";
  value: Uint8Array;
}
/**
 * QueryGetPolicyPermissionsRequest defines the QueryGetPolicyPermissionsRequest message.
 * @name QueryGetPolicyPermissionsRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetPolicyPermissionsRequest
 */
export interface QueryGetPolicyPermissionsRequestAmino {
  policy_address?: string;
}
export interface QueryGetPolicyPermissionsRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetPolicyPermissionsRequest";
  value: QueryGetPolicyPermissionsRequestAmino;
}
/**
 * QueryGetPolicyPermissionsResponse defines the QueryGetPolicyPermissionsResponse message.
 * @name QueryGetPolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetPolicyPermissionsResponse
 */
export interface QueryGetPolicyPermissionsResponse {
  policyPermissions: PolicyPermissions;
}
export interface QueryGetPolicyPermissionsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetPolicyPermissionsResponse";
  value: Uint8Array;
}
/**
 * QueryGetPolicyPermissionsResponse defines the QueryGetPolicyPermissionsResponse message.
 * @name QueryGetPolicyPermissionsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetPolicyPermissionsResponse
 */
export interface QueryGetPolicyPermissionsResponseAmino {
  policy_permissions?: PolicyPermissionsAmino;
}
export interface QueryGetPolicyPermissionsResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetPolicyPermissionsResponse";
  value: QueryGetPolicyPermissionsResponseAmino;
}
/**
 * QueryAllPolicyPermissionsRequest defines the QueryAllPolicyPermissionsRequest message.
 * @name QueryAllPolicyPermissionsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllPolicyPermissionsRequest
 */
export interface QueryAllPolicyPermissionsRequest {
  pagination?: PageRequest;
}
export interface QueryAllPolicyPermissionsRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryAllPolicyPermissionsRequest";
  value: Uint8Array;
}
/**
 * QueryAllPolicyPermissionsRequest defines the QueryAllPolicyPermissionsRequest message.
 * @name QueryAllPolicyPermissionsRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllPolicyPermissionsRequest
 */
export interface QueryAllPolicyPermissionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPolicyPermissionsRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryAllPolicyPermissionsRequest";
  value: QueryAllPolicyPermissionsRequestAmino;
}
/**
 * QueryAllPolicyPermissionsResponse defines the QueryAllPolicyPermissionsResponse message.
 * @name QueryAllPolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllPolicyPermissionsResponse
 */
export interface QueryAllPolicyPermissionsResponse {
  policyPermissions: PolicyPermissions[];
  pagination?: PageResponse;
}
export interface QueryAllPolicyPermissionsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryAllPolicyPermissionsResponse";
  value: Uint8Array;
}
/**
 * QueryAllPolicyPermissionsResponse defines the QueryAllPolicyPermissionsResponse message.
 * @name QueryAllPolicyPermissionsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllPolicyPermissionsResponse
 */
export interface QueryAllPolicyPermissionsResponseAmino {
  policy_permissions?: PolicyPermissionsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPolicyPermissionsResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryAllPolicyPermissionsResponse";
  value: QueryAllPolicyPermissionsResponseAmino;
}
/**
 * QueryGetGroupRequest queries a specific group by name.
 * @name QueryGetGroupRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetGroupRequest
 */
export interface QueryGetGroupRequest {
  index: string;
}
export interface QueryGetGroupRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetGroupRequest";
  value: Uint8Array;
}
/**
 * QueryGetGroupRequest queries a specific group by name.
 * @name QueryGetGroupRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetGroupRequest
 */
export interface QueryGetGroupRequestAmino {
  index?: string;
}
export interface QueryGetGroupRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetGroupRequest";
  value: QueryGetGroupRequestAmino;
}
/**
 * QueryGetGroupResponse returns a group.
 * @name QueryGetGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetGroupResponse
 */
export interface QueryGetGroupResponse {
  group: Group;
}
export interface QueryGetGroupResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetGroupResponse";
  value: Uint8Array;
}
/**
 * QueryGetGroupResponse returns a group.
 * @name QueryGetGroupResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetGroupResponse
 */
export interface QueryGetGroupResponseAmino {
  group?: GroupAmino;
}
export interface QueryGetGroupResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetGroupResponse";
  value: QueryGetGroupResponseAmino;
}
/**
 * QueryAllGroupRequest queries all groups.
 * @name QueryAllGroupRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllGroupRequest
 */
export interface QueryAllGroupRequest {
  pagination?: PageRequest;
}
export interface QueryAllGroupRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryAllGroupRequest";
  value: Uint8Array;
}
/**
 * QueryAllGroupRequest queries all groups.
 * @name QueryAllGroupRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllGroupRequest
 */
export interface QueryAllGroupRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGroupRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryAllGroupRequest";
  value: QueryAllGroupRequestAmino;
}
/**
 * QueryAllGroupResponse returns all groups.
 * @name QueryAllGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllGroupResponse
 */
export interface QueryAllGroupResponse {
  group: Group[];
  pagination?: PageResponse;
}
export interface QueryAllGroupResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryAllGroupResponse";
  value: Uint8Array;
}
/**
 * QueryAllGroupResponse returns all groups.
 * @name QueryAllGroupResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllGroupResponse
 */
export interface QueryAllGroupResponseAmino {
  group?: GroupAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGroupResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryAllGroupResponse";
  value: QueryAllGroupResponseAmino;
}
/**
 * QueryGetCouncilMembersRequest queries the members of a council.
 * @name QueryGetCouncilMembersRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetCouncilMembersRequest
 */
export interface QueryGetCouncilMembersRequest {
  councilName: string;
}
export interface QueryGetCouncilMembersRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetCouncilMembersRequest";
  value: Uint8Array;
}
/**
 * QueryGetCouncilMembersRequest queries the members of a council.
 * @name QueryGetCouncilMembersRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetCouncilMembersRequest
 */
export interface QueryGetCouncilMembersRequestAmino {
  council_name?: string;
}
export interface QueryGetCouncilMembersRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetCouncilMembersRequest";
  value: QueryGetCouncilMembersRequestAmino;
}
/**
 * QueryGetCouncilMembersResponse returns the members of a council.
 * @name QueryGetCouncilMembersResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetCouncilMembersResponse
 */
export interface QueryGetCouncilMembersResponse {
  members: Member[];
}
export interface QueryGetCouncilMembersResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetCouncilMembersResponse";
  value: Uint8Array;
}
/**
 * QueryGetCouncilMembersResponse returns the members of a council.
 * @name QueryGetCouncilMembersResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetCouncilMembersResponse
 */
export interface QueryGetCouncilMembersResponseAmino {
  members?: MemberAmino[];
}
export interface QueryGetCouncilMembersResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetCouncilMembersResponse";
  value: QueryGetCouncilMembersResponseAmino;
}
/**
 * QueryGetProposalRequest queries a specific proposal.
 * @name QueryGetProposalRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalRequest
 */
export interface QueryGetProposalRequest {
  proposalId: bigint;
}
export interface QueryGetProposalRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalRequest";
  value: Uint8Array;
}
/**
 * QueryGetProposalRequest queries a specific proposal.
 * @name QueryGetProposalRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalRequest
 */
export interface QueryGetProposalRequestAmino {
  proposal_id?: string;
}
export interface QueryGetProposalRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetProposalRequest";
  value: QueryGetProposalRequestAmino;
}
/**
 * QueryGetProposalResponse returns a proposal.
 * @name QueryGetProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalResponse
 */
export interface QueryGetProposalResponse {
  proposal: Proposal;
  votes: Vote[];
  tally: TallyResult;
}
export interface QueryGetProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalResponse";
  value: Uint8Array;
}
/**
 * QueryGetProposalResponse returns a proposal.
 * @name QueryGetProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalResponse
 */
export interface QueryGetProposalResponseAmino {
  proposal?: ProposalAmino;
  votes?: VoteAmino[];
  tally?: TallyResultAmino;
}
export interface QueryGetProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetProposalResponse";
  value: QueryGetProposalResponseAmino;
}
/**
 * QueryListProposalsRequest queries all proposals with optional council filter.
 * @name QueryListProposalsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryListProposalsRequest
 */
export interface QueryListProposalsRequest {
  /**
   * Optional filter by council name
   */
  councilName: string;
  pagination?: PageRequest;
}
export interface QueryListProposalsRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryListProposalsRequest";
  value: Uint8Array;
}
/**
 * QueryListProposalsRequest queries all proposals with optional council filter.
 * @name QueryListProposalsRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryListProposalsRequest
 */
export interface QueryListProposalsRequestAmino {
  /**
   * Optional filter by council name
   */
  council_name?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListProposalsRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryListProposalsRequest";
  value: QueryListProposalsRequestAmino;
}
/**
 * QueryListProposalsResponse returns a list of proposals.
 * @name QueryListProposalsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryListProposalsResponse
 */
export interface QueryListProposalsResponse {
  proposals: Proposal[];
  pagination?: PageResponse;
}
export interface QueryListProposalsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryListProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryListProposalsResponse returns a list of proposals.
 * @name QueryListProposalsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryListProposalsResponse
 */
export interface QueryListProposalsResponseAmino {
  proposals?: ProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListProposalsResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryListProposalsResponse";
  value: QueryListProposalsResponseAmino;
}
/**
 * QueryGetProposalVotesRequest queries votes for a proposal.
 * @name QueryGetProposalVotesRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalVotesRequest
 */
export interface QueryGetProposalVotesRequest {
  proposalId: bigint;
}
export interface QueryGetProposalVotesRequestProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalVotesRequest";
  value: Uint8Array;
}
/**
 * QueryGetProposalVotesRequest queries votes for a proposal.
 * @name QueryGetProposalVotesRequestAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalVotesRequest
 */
export interface QueryGetProposalVotesRequestAmino {
  proposal_id?: string;
}
export interface QueryGetProposalVotesRequestAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetProposalVotesRequest";
  value: QueryGetProposalVotesRequestAmino;
}
/**
 * QueryGetProposalVotesResponse returns votes for a proposal.
 * @name QueryGetProposalVotesResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalVotesResponse
 */
export interface QueryGetProposalVotesResponse {
  votes: Vote[];
  tally: TallyResult;
}
export interface QueryGetProposalVotesResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalVotesResponse";
  value: Uint8Array;
}
/**
 * QueryGetProposalVotesResponse returns votes for a proposal.
 * @name QueryGetProposalVotesResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalVotesResponse
 */
export interface QueryGetProposalVotesResponseAmino {
  votes?: VoteAmino[];
  tally?: TallyResultAmino;
}
export interface QueryGetProposalVotesResponseAminoMsg {
  type: "/sparkdream.commons.v1.QueryGetProposalVotesResponse";
  value: QueryGetProposalVotesResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPolicyPermissionsRequest(): QueryGetPolicyPermissionsRequest {
  return {
    policyAddress: ""
  };
}
/**
 * QueryGetPolicyPermissionsRequest defines the QueryGetPolicyPermissionsRequest message.
 * @name QueryGetPolicyPermissionsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetPolicyPermissionsRequest
 */
export const QueryGetPolicyPermissionsRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryGetPolicyPermissionsRequest",
  encode(message: QueryGetPolicyPermissionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPolicyPermissionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPolicyPermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPolicyPermissionsRequest>): QueryGetPolicyPermissionsRequest {
    const message = createBaseQueryGetPolicyPermissionsRequest();
    message.policyAddress = object.policyAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetPolicyPermissionsRequestAmino): QueryGetPolicyPermissionsRequest {
    const message = createBaseQueryGetPolicyPermissionsRequest();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    return message;
  },
  toAmino(message: QueryGetPolicyPermissionsRequest): QueryGetPolicyPermissionsRequestAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetPolicyPermissionsRequestAminoMsg): QueryGetPolicyPermissionsRequest {
    return QueryGetPolicyPermissionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPolicyPermissionsRequestProtoMsg): QueryGetPolicyPermissionsRequest {
    return QueryGetPolicyPermissionsRequest.decode(message.value);
  },
  toProto(message: QueryGetPolicyPermissionsRequest): Uint8Array {
    return QueryGetPolicyPermissionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPolicyPermissionsRequest): QueryGetPolicyPermissionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetPolicyPermissionsRequest",
      value: QueryGetPolicyPermissionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPolicyPermissionsResponse(): QueryGetPolicyPermissionsResponse {
  return {
    policyPermissions: PolicyPermissions.fromPartial({})
  };
}
/**
 * QueryGetPolicyPermissionsResponse defines the QueryGetPolicyPermissionsResponse message.
 * @name QueryGetPolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetPolicyPermissionsResponse
 */
export const QueryGetPolicyPermissionsResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryGetPolicyPermissionsResponse",
  encode(message: QueryGetPolicyPermissionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyPermissions !== undefined) {
      PolicyPermissions.encode(message.policyPermissions, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPolicyPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPolicyPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyPermissions = PolicyPermissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPolicyPermissionsResponse>): QueryGetPolicyPermissionsResponse {
    const message = createBaseQueryGetPolicyPermissionsResponse();
    message.policyPermissions = object.policyPermissions !== undefined && object.policyPermissions !== null ? PolicyPermissions.fromPartial(object.policyPermissions) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPolicyPermissionsResponseAmino): QueryGetPolicyPermissionsResponse {
    const message = createBaseQueryGetPolicyPermissionsResponse();
    if (object.policy_permissions !== undefined && object.policy_permissions !== null) {
      message.policyPermissions = PolicyPermissions.fromAmino(object.policy_permissions);
    }
    return message;
  },
  toAmino(message: QueryGetPolicyPermissionsResponse): QueryGetPolicyPermissionsResponseAmino {
    const obj: any = {};
    obj.policy_permissions = message.policyPermissions ? PolicyPermissions.toAmino(message.policyPermissions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPolicyPermissionsResponseAminoMsg): QueryGetPolicyPermissionsResponse {
    return QueryGetPolicyPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPolicyPermissionsResponseProtoMsg): QueryGetPolicyPermissionsResponse {
    return QueryGetPolicyPermissionsResponse.decode(message.value);
  },
  toProto(message: QueryGetPolicyPermissionsResponse): Uint8Array {
    return QueryGetPolicyPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPolicyPermissionsResponse): QueryGetPolicyPermissionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetPolicyPermissionsResponse",
      value: QueryGetPolicyPermissionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPolicyPermissionsRequest(): QueryAllPolicyPermissionsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllPolicyPermissionsRequest defines the QueryAllPolicyPermissionsRequest message.
 * @name QueryAllPolicyPermissionsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllPolicyPermissionsRequest
 */
export const QueryAllPolicyPermissionsRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryAllPolicyPermissionsRequest",
  encode(message: QueryAllPolicyPermissionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPolicyPermissionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPolicyPermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPolicyPermissionsRequest>): QueryAllPolicyPermissionsRequest {
    const message = createBaseQueryAllPolicyPermissionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPolicyPermissionsRequestAmino): QueryAllPolicyPermissionsRequest {
    const message = createBaseQueryAllPolicyPermissionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPolicyPermissionsRequest): QueryAllPolicyPermissionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPolicyPermissionsRequestAminoMsg): QueryAllPolicyPermissionsRequest {
    return QueryAllPolicyPermissionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPolicyPermissionsRequestProtoMsg): QueryAllPolicyPermissionsRequest {
    return QueryAllPolicyPermissionsRequest.decode(message.value);
  },
  toProto(message: QueryAllPolicyPermissionsRequest): Uint8Array {
    return QueryAllPolicyPermissionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPolicyPermissionsRequest): QueryAllPolicyPermissionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryAllPolicyPermissionsRequest",
      value: QueryAllPolicyPermissionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPolicyPermissionsResponse(): QueryAllPolicyPermissionsResponse {
  return {
    policyPermissions: [],
    pagination: undefined
  };
}
/**
 * QueryAllPolicyPermissionsResponse defines the QueryAllPolicyPermissionsResponse message.
 * @name QueryAllPolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllPolicyPermissionsResponse
 */
export const QueryAllPolicyPermissionsResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryAllPolicyPermissionsResponse",
  encode(message: QueryAllPolicyPermissionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.policyPermissions) {
      PolicyPermissions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPolicyPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPolicyPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyPermissions.push(PolicyPermissions.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPolicyPermissionsResponse>): QueryAllPolicyPermissionsResponse {
    const message = createBaseQueryAllPolicyPermissionsResponse();
    message.policyPermissions = object.policyPermissions?.map(e => PolicyPermissions.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPolicyPermissionsResponseAmino): QueryAllPolicyPermissionsResponse {
    const message = createBaseQueryAllPolicyPermissionsResponse();
    message.policyPermissions = object.policy_permissions?.map(e => PolicyPermissions.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPolicyPermissionsResponse): QueryAllPolicyPermissionsResponseAmino {
    const obj: any = {};
    if (message.policyPermissions) {
      obj.policy_permissions = message.policyPermissions.map(e => e ? PolicyPermissions.toAmino(e) : undefined);
    } else {
      obj.policy_permissions = message.policyPermissions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPolicyPermissionsResponseAminoMsg): QueryAllPolicyPermissionsResponse {
    return QueryAllPolicyPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPolicyPermissionsResponseProtoMsg): QueryAllPolicyPermissionsResponse {
    return QueryAllPolicyPermissionsResponse.decode(message.value);
  },
  toProto(message: QueryAllPolicyPermissionsResponse): Uint8Array {
    return QueryAllPolicyPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPolicyPermissionsResponse): QueryAllPolicyPermissionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryAllPolicyPermissionsResponse",
      value: QueryAllPolicyPermissionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGroupRequest(): QueryGetGroupRequest {
  return {
    index: ""
  };
}
/**
 * QueryGetGroupRequest queries a specific group by name.
 * @name QueryGetGroupRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetGroupRequest
 */
export const QueryGetGroupRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryGetGroupRequest",
  encode(message: QueryGetGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGroupRequest>): QueryGetGroupRequest {
    const message = createBaseQueryGetGroupRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetGroupRequestAmino): QueryGetGroupRequest {
    const message = createBaseQueryGetGroupRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetGroupRequest): QueryGetGroupRequestAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetGroupRequestAminoMsg): QueryGetGroupRequest {
    return QueryGetGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGroupRequestProtoMsg): QueryGetGroupRequest {
    return QueryGetGroupRequest.decode(message.value);
  },
  toProto(message: QueryGetGroupRequest): Uint8Array {
    return QueryGetGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGroupRequest): QueryGetGroupRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetGroupRequest",
      value: QueryGetGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGroupResponse(): QueryGetGroupResponse {
  return {
    group: Group.fromPartial({})
  };
}
/**
 * QueryGetGroupResponse returns a group.
 * @name QueryGetGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetGroupResponse
 */
export const QueryGetGroupResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryGetGroupResponse",
  encode(message: QueryGetGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGroupResponse>): QueryGetGroupResponse {
    const message = createBaseQueryGetGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGroupResponseAmino): QueryGetGroupResponse {
    const message = createBaseQueryGetGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    return message;
  },
  toAmino(message: QueryGetGroupResponse): QueryGetGroupResponseAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGroupResponseAminoMsg): QueryGetGroupResponse {
    return QueryGetGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGroupResponseProtoMsg): QueryGetGroupResponse {
    return QueryGetGroupResponse.decode(message.value);
  },
  toProto(message: QueryGetGroupResponse): Uint8Array {
    return QueryGetGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGroupResponse): QueryGetGroupResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetGroupResponse",
      value: QueryGetGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGroupRequest(): QueryAllGroupRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllGroupRequest queries all groups.
 * @name QueryAllGroupRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllGroupRequest
 */
export const QueryAllGroupRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryAllGroupRequest",
  encode(message: QueryAllGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllGroupRequest>): QueryAllGroupRequest {
    const message = createBaseQueryAllGroupRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGroupRequestAmino): QueryAllGroupRequest {
    const message = createBaseQueryAllGroupRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGroupRequest): QueryAllGroupRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupRequestAminoMsg): QueryAllGroupRequest {
    return QueryAllGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGroupRequestProtoMsg): QueryAllGroupRequest {
    return QueryAllGroupRequest.decode(message.value);
  },
  toProto(message: QueryAllGroupRequest): Uint8Array {
    return QueryAllGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupRequest): QueryAllGroupRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryAllGroupRequest",
      value: QueryAllGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGroupResponse(): QueryAllGroupResponse {
  return {
    group: [],
    pagination: undefined
  };
}
/**
 * QueryAllGroupResponse returns all groups.
 * @name QueryAllGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryAllGroupResponse
 */
export const QueryAllGroupResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryAllGroupResponse",
  encode(message: QueryAllGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.group) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group.push(Group.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllGroupResponse>): QueryAllGroupResponse {
    const message = createBaseQueryAllGroupResponse();
    message.group = object.group?.map(e => Group.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGroupResponseAmino): QueryAllGroupResponse {
    const message = createBaseQueryAllGroupResponse();
    message.group = object.group?.map(e => Group.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGroupResponse): QueryAllGroupResponseAmino {
    const obj: any = {};
    if (message.group) {
      obj.group = message.group.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.group = message.group;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupResponseAminoMsg): QueryAllGroupResponse {
    return QueryAllGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGroupResponseProtoMsg): QueryAllGroupResponse {
    return QueryAllGroupResponse.decode(message.value);
  },
  toProto(message: QueryAllGroupResponse): Uint8Array {
    return QueryAllGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupResponse): QueryAllGroupResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryAllGroupResponse",
      value: QueryAllGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCouncilMembersRequest(): QueryGetCouncilMembersRequest {
  return {
    councilName: ""
  };
}
/**
 * QueryGetCouncilMembersRequest queries the members of a council.
 * @name QueryGetCouncilMembersRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetCouncilMembersRequest
 */
export const QueryGetCouncilMembersRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryGetCouncilMembersRequest",
  encode(message: QueryGetCouncilMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.councilName !== "") {
      writer.uint32(10).string(message.councilName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCouncilMembersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCouncilMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.councilName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetCouncilMembersRequest>): QueryGetCouncilMembersRequest {
    const message = createBaseQueryGetCouncilMembersRequest();
    message.councilName = object.councilName ?? "";
    return message;
  },
  fromAmino(object: QueryGetCouncilMembersRequestAmino): QueryGetCouncilMembersRequest {
    const message = createBaseQueryGetCouncilMembersRequest();
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    return message;
  },
  toAmino(message: QueryGetCouncilMembersRequest): QueryGetCouncilMembersRequestAmino {
    const obj: any = {};
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    return obj;
  },
  fromAminoMsg(object: QueryGetCouncilMembersRequestAminoMsg): QueryGetCouncilMembersRequest {
    return QueryGetCouncilMembersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCouncilMembersRequestProtoMsg): QueryGetCouncilMembersRequest {
    return QueryGetCouncilMembersRequest.decode(message.value);
  },
  toProto(message: QueryGetCouncilMembersRequest): Uint8Array {
    return QueryGetCouncilMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCouncilMembersRequest): QueryGetCouncilMembersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetCouncilMembersRequest",
      value: QueryGetCouncilMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCouncilMembersResponse(): QueryGetCouncilMembersResponse {
  return {
    members: []
  };
}
/**
 * QueryGetCouncilMembersResponse returns the members of a council.
 * @name QueryGetCouncilMembersResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetCouncilMembersResponse
 */
export const QueryGetCouncilMembersResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryGetCouncilMembersResponse",
  encode(message: QueryGetCouncilMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCouncilMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCouncilMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetCouncilMembersResponse>): QueryGetCouncilMembersResponse {
    const message = createBaseQueryGetCouncilMembersResponse();
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetCouncilMembersResponseAmino): QueryGetCouncilMembersResponse {
    const message = createBaseQueryGetCouncilMembersResponse();
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetCouncilMembersResponse): QueryGetCouncilMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetCouncilMembersResponseAminoMsg): QueryGetCouncilMembersResponse {
    return QueryGetCouncilMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCouncilMembersResponseProtoMsg): QueryGetCouncilMembersResponse {
    return QueryGetCouncilMembersResponse.decode(message.value);
  },
  toProto(message: QueryGetCouncilMembersResponse): Uint8Array {
    return QueryGetCouncilMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCouncilMembersResponse): QueryGetCouncilMembersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetCouncilMembersResponse",
      value: QueryGetCouncilMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProposalRequest(): QueryGetProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryGetProposalRequest queries a specific proposal.
 * @name QueryGetProposalRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalRequest
 */
export const QueryGetProposalRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalRequest",
  encode(message: QueryGetProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProposalRequest>): QueryGetProposalRequest {
    const message = createBaseQueryGetProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProposalRequestAmino): QueryGetProposalRequest {
    const message = createBaseQueryGetProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryGetProposalRequest): QueryGetProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProposalRequestAminoMsg): QueryGetProposalRequest {
    return QueryGetProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProposalRequestProtoMsg): QueryGetProposalRequest {
    return QueryGetProposalRequest.decode(message.value);
  },
  toProto(message: QueryGetProposalRequest): Uint8Array {
    return QueryGetProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProposalRequest): QueryGetProposalRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetProposalRequest",
      value: QueryGetProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProposalResponse(): QueryGetProposalResponse {
  return {
    proposal: Proposal.fromPartial({}),
    votes: [],
    tally: TallyResult.fromPartial({})
  };
}
/**
 * QueryGetProposalResponse returns a proposal.
 * @name QueryGetProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalResponse
 */
export const QueryGetProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalResponse",
  encode(message: QueryGetProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProposalResponse>): QueryGetProposalResponse {
    const message = createBaseQueryGetProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProposalResponseAmino): QueryGetProposalResponse {
    const message = createBaseQueryGetProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryGetProposalResponse): QueryGetProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProposalResponseAminoMsg): QueryGetProposalResponse {
    return QueryGetProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProposalResponseProtoMsg): QueryGetProposalResponse {
    return QueryGetProposalResponse.decode(message.value);
  },
  toProto(message: QueryGetProposalResponse): Uint8Array {
    return QueryGetProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProposalResponse): QueryGetProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetProposalResponse",
      value: QueryGetProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListProposalsRequest(): QueryListProposalsRequest {
  return {
    councilName: "",
    pagination: undefined
  };
}
/**
 * QueryListProposalsRequest queries all proposals with optional council filter.
 * @name QueryListProposalsRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryListProposalsRequest
 */
export const QueryListProposalsRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryListProposalsRequest",
  encode(message: QueryListProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.councilName !== "") {
      writer.uint32(10).string(message.councilName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.councilName = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListProposalsRequest>): QueryListProposalsRequest {
    const message = createBaseQueryListProposalsRequest();
    message.councilName = object.councilName ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListProposalsRequestAmino): QueryListProposalsRequest {
    const message = createBaseQueryListProposalsRequest();
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListProposalsRequest): QueryListProposalsRequestAmino {
    const obj: any = {};
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListProposalsRequestAminoMsg): QueryListProposalsRequest {
    return QueryListProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProposalsRequestProtoMsg): QueryListProposalsRequest {
    return QueryListProposalsRequest.decode(message.value);
  },
  toProto(message: QueryListProposalsRequest): Uint8Array {
    return QueryListProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListProposalsRequest): QueryListProposalsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryListProposalsRequest",
      value: QueryListProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListProposalsResponse(): QueryListProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
/**
 * QueryListProposalsResponse returns a list of proposals.
 * @name QueryListProposalsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryListProposalsResponse
 */
export const QueryListProposalsResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryListProposalsResponse",
  encode(message: QueryListProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListProposalsResponse>): QueryListProposalsResponse {
    const message = createBaseQueryListProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListProposalsResponseAmino): QueryListProposalsResponse {
    const message = createBaseQueryListProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListProposalsResponse): QueryListProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListProposalsResponseAminoMsg): QueryListProposalsResponse {
    return QueryListProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProposalsResponseProtoMsg): QueryListProposalsResponse {
    return QueryListProposalsResponse.decode(message.value);
  },
  toProto(message: QueryListProposalsResponse): Uint8Array {
    return QueryListProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListProposalsResponse): QueryListProposalsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryListProposalsResponse",
      value: QueryListProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProposalVotesRequest(): QueryGetProposalVotesRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryGetProposalVotesRequest queries votes for a proposal.
 * @name QueryGetProposalVotesRequest
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalVotesRequest
 */
export const QueryGetProposalVotesRequest = {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalVotesRequest",
  encode(message: QueryGetProposalVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProposalVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProposalVotesRequest>): QueryGetProposalVotesRequest {
    const message = createBaseQueryGetProposalVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProposalVotesRequestAmino): QueryGetProposalVotesRequest {
    const message = createBaseQueryGetProposalVotesRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryGetProposalVotesRequest): QueryGetProposalVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProposalVotesRequestAminoMsg): QueryGetProposalVotesRequest {
    return QueryGetProposalVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProposalVotesRequestProtoMsg): QueryGetProposalVotesRequest {
    return QueryGetProposalVotesRequest.decode(message.value);
  },
  toProto(message: QueryGetProposalVotesRequest): Uint8Array {
    return QueryGetProposalVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProposalVotesRequest): QueryGetProposalVotesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetProposalVotesRequest",
      value: QueryGetProposalVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProposalVotesResponse(): QueryGetProposalVotesResponse {
  return {
    votes: [],
    tally: TallyResult.fromPartial({})
  };
}
/**
 * QueryGetProposalVotesResponse returns votes for a proposal.
 * @name QueryGetProposalVotesResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.QueryGetProposalVotesResponse
 */
export const QueryGetProposalVotesResponse = {
  typeUrl: "/sparkdream.commons.v1.QueryGetProposalVotesResponse",
  encode(message: QueryGetProposalVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProposalVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposalVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProposalVotesResponse>): QueryGetProposalVotesResponse {
    const message = createBaseQueryGetProposalVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProposalVotesResponseAmino): QueryGetProposalVotesResponse {
    const message = createBaseQueryGetProposalVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryGetProposalVotesResponse): QueryGetProposalVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProposalVotesResponseAminoMsg): QueryGetProposalVotesResponse {
    return QueryGetProposalVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProposalVotesResponseProtoMsg): QueryGetProposalVotesResponse {
    return QueryGetProposalVotesResponse.decode(message.value);
  },
  toProto(message: QueryGetProposalVotesResponse): Uint8Array {
    return QueryGetProposalVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProposalVotesResponse): QueryGetProposalVotesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.QueryGetProposalVotesResponse",
      value: QueryGetProposalVotesResponse.encode(message).finish()
    };
  }
};