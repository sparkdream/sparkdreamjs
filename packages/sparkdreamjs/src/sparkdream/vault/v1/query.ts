//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { ProposalStatus, VaultProposal, VaultProposalAmino } from "./vault_proposal";
import { Params, ParamsAmino } from "./params";
import { Vault, VaultAmino } from "./vault";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryVaultByAddressRequest defines the QueryVaultByAddressRequest message.
 * @name QueryVaultByAddressRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultByAddressRequest
 */
export interface QueryVaultByAddressRequest {
  address: string;
}
export interface QueryVaultByAddressRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryVaultByAddressRequest";
  value: Uint8Array;
}
/**
 * QueryVaultByAddressRequest defines the QueryVaultByAddressRequest message.
 * @name QueryVaultByAddressRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultByAddressRequest
 */
export interface QueryVaultByAddressRequestAmino {
  address?: string;
}
export interface QueryVaultByAddressRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryVaultByAddressRequest";
  value: QueryVaultByAddressRequestAmino;
}
/**
 * QueryVaultByAddressResponse defines the QueryVaultByAddressResponse message.
 * @name QueryVaultByAddressResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultByAddressResponse
 */
export interface QueryVaultByAddressResponse {
  vault: Vault;
}
export interface QueryVaultByAddressResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryVaultByAddressResponse";
  value: Uint8Array;
}
/**
 * QueryVaultByAddressResponse defines the QueryVaultByAddressResponse message.
 * @name QueryVaultByAddressResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultByAddressResponse
 */
export interface QueryVaultByAddressResponseAmino {
  vault?: VaultAmino;
}
export interface QueryVaultByAddressResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryVaultByAddressResponse";
  value: QueryVaultByAddressResponseAmino;
}
/**
 * QueryVaultsBySignerRequest defines the QueryVaultsBySignerRequest message.
 * @name QueryVaultsBySignerRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultsBySignerRequest
 */
export interface QueryVaultsBySignerRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryVaultsBySignerRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryVaultsBySignerRequest";
  value: Uint8Array;
}
/**
 * QueryVaultsBySignerRequest defines the QueryVaultsBySignerRequest message.
 * @name QueryVaultsBySignerRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultsBySignerRequest
 */
export interface QueryVaultsBySignerRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryVaultsBySignerRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryVaultsBySignerRequest";
  value: QueryVaultsBySignerRequestAmino;
}
/**
 * QueryVaultsBySignerResponse lists the vaults the address (or any of its
 * x/rep alias addresses) is a signer of.
 * @name QueryVaultsBySignerResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultsBySignerResponse
 */
export interface QueryVaultsBySignerResponse {
  vaults: Vault[];
  pagination?: PageResponse;
}
export interface QueryVaultsBySignerResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryVaultsBySignerResponse";
  value: Uint8Array;
}
/**
 * QueryVaultsBySignerResponse lists the vaults the address (or any of its
 * x/rep alias addresses) is a signer of.
 * @name QueryVaultsBySignerResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultsBySignerResponse
 */
export interface QueryVaultsBySignerResponseAmino {
  vaults?: VaultAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryVaultsBySignerResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryVaultsBySignerResponse";
  value: QueryVaultsBySignerResponseAmino;
}
/**
 * QueryProposalsByVaultRequest defines the QueryProposalsByVaultRequest message.
 * @name QueryProposalsByVaultRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByVaultRequest
 */
export interface QueryProposalsByVaultRequest {
  vaultId: bigint;
  /**
   * Optional filter; UNSPECIFIED returns every status.
   */
  status: ProposalStatus;
  pagination?: PageRequest;
}
export interface QueryProposalsByVaultRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByVaultRequest";
  value: Uint8Array;
}
/**
 * QueryProposalsByVaultRequest defines the QueryProposalsByVaultRequest message.
 * @name QueryProposalsByVaultRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByVaultRequest
 */
export interface QueryProposalsByVaultRequestAmino {
  vault_id?: string;
  /**
   * Optional filter; UNSPECIFIED returns every status.
   */
  status?: ProposalStatus;
  pagination?: PageRequestAmino;
}
export interface QueryProposalsByVaultRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryProposalsByVaultRequest";
  value: QueryProposalsByVaultRequestAmino;
}
/**
 * QueryProposalsByVaultResponse defines the QueryProposalsByVaultResponse message.
 * @name QueryProposalsByVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByVaultResponse
 */
export interface QueryProposalsByVaultResponse {
  proposals: VaultProposal[];
  pagination?: PageResponse;
}
export interface QueryProposalsByVaultResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByVaultResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsByVaultResponse defines the QueryProposalsByVaultResponse message.
 * @name QueryProposalsByVaultResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByVaultResponse
 */
export interface QueryProposalsByVaultResponseAmino {
  proposals?: VaultProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProposalsByVaultResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryProposalsByVaultResponse";
  value: QueryProposalsByVaultResponseAmino;
}
/**
 * QueryTallyRequest defines the QueryTallyRequest message.
 * @name QueryTallyRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryTallyRequest
 */
export interface QueryTallyRequest {
  proposalId: bigint;
}
export interface QueryTallyRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryTallyRequest";
  value: Uint8Array;
}
/**
 * QueryTallyRequest defines the QueryTallyRequest message.
 * @name QueryTallyRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryTallyRequest
 */
export interface QueryTallyRequestAmino {
  proposal_id?: string;
}
export interface QueryTallyRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryTallyRequest";
  value: QueryTallyRequestAmino;
}
/**
 * QueryTallyResponse is the live tally of a proposal: the summed weight of
 * approvers who are still current signers, the vault's threshold, and whether
 * the proposal would execute now.
 * @name QueryTallyResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryTallyResponse
 */
export interface QueryTallyResponse {
  approvedWeight: bigint;
  threshold: bigint;
  met: boolean;
}
export interface QueryTallyResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryTallyResponse";
  value: Uint8Array;
}
/**
 * QueryTallyResponse is the live tally of a proposal: the summed weight of
 * approvers who are still current signers, the vault's threshold, and whether
 * the proposal would execute now.
 * @name QueryTallyResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryTallyResponse
 */
export interface QueryTallyResponseAmino {
  approved_weight?: string;
  threshold?: string;
  met?: boolean;
}
export interface QueryTallyResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryTallyResponse";
  value: QueryTallyResponseAmino;
}
/**
 * QueryGetVaultRequest defines the QueryGetVaultRequest message.
 * @name QueryGetVaultRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultRequest
 */
export interface QueryGetVaultRequest {
  vaultId: bigint;
}
export interface QueryGetVaultRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultRequest";
  value: Uint8Array;
}
/**
 * QueryGetVaultRequest defines the QueryGetVaultRequest message.
 * @name QueryGetVaultRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultRequest
 */
export interface QueryGetVaultRequestAmino {
  vault_id?: string;
}
export interface QueryGetVaultRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryGetVaultRequest";
  value: QueryGetVaultRequestAmino;
}
/**
 * QueryGetVaultResponse defines the QueryGetVaultResponse message.
 * @name QueryGetVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultResponse
 */
export interface QueryGetVaultResponse {
  vault: Vault;
}
export interface QueryGetVaultResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultResponse";
  value: Uint8Array;
}
/**
 * QueryGetVaultResponse defines the QueryGetVaultResponse message.
 * @name QueryGetVaultResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultResponse
 */
export interface QueryGetVaultResponseAmino {
  vault?: VaultAmino;
}
export interface QueryGetVaultResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryGetVaultResponse";
  value: QueryGetVaultResponseAmino;
}
/**
 * QueryAllVaultRequest defines the QueryAllVaultRequest message.
 * @name QueryAllVaultRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultRequest
 */
export interface QueryAllVaultRequest {
  pagination?: PageRequest;
}
export interface QueryAllVaultRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultRequest";
  value: Uint8Array;
}
/**
 * QueryAllVaultRequest defines the QueryAllVaultRequest message.
 * @name QueryAllVaultRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultRequest
 */
export interface QueryAllVaultRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVaultRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryAllVaultRequest";
  value: QueryAllVaultRequestAmino;
}
/**
 * QueryAllVaultResponse defines the QueryAllVaultResponse message.
 * @name QueryAllVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultResponse
 */
export interface QueryAllVaultResponse {
  vault: Vault[];
  pagination?: PageResponse;
}
export interface QueryAllVaultResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultResponse";
  value: Uint8Array;
}
/**
 * QueryAllVaultResponse defines the QueryAllVaultResponse message.
 * @name QueryAllVaultResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultResponse
 */
export interface QueryAllVaultResponseAmino {
  vault?: VaultAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVaultResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryAllVaultResponse";
  value: QueryAllVaultResponseAmino;
}
/**
 * QueryGetVaultProposalRequest defines the QueryGetVaultProposalRequest message.
 * @name QueryGetVaultProposalRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultProposalRequest
 */
export interface QueryGetVaultProposalRequest {
  proposalId: bigint;
}
export interface QueryGetVaultProposalRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultProposalRequest";
  value: Uint8Array;
}
/**
 * QueryGetVaultProposalRequest defines the QueryGetVaultProposalRequest message.
 * @name QueryGetVaultProposalRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultProposalRequest
 */
export interface QueryGetVaultProposalRequestAmino {
  proposal_id?: string;
}
export interface QueryGetVaultProposalRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryGetVaultProposalRequest";
  value: QueryGetVaultProposalRequestAmino;
}
/**
 * QueryGetVaultProposalResponse defines the QueryGetVaultProposalResponse message.
 * @name QueryGetVaultProposalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultProposalResponse
 */
export interface QueryGetVaultProposalResponse {
  vaultProposal: VaultProposal;
}
export interface QueryGetVaultProposalResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultProposalResponse";
  value: Uint8Array;
}
/**
 * QueryGetVaultProposalResponse defines the QueryGetVaultProposalResponse message.
 * @name QueryGetVaultProposalResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultProposalResponse
 */
export interface QueryGetVaultProposalResponseAmino {
  vault_proposal?: VaultProposalAmino;
}
export interface QueryGetVaultProposalResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryGetVaultProposalResponse";
  value: QueryGetVaultProposalResponseAmino;
}
/**
 * QueryAllVaultProposalRequest defines the QueryAllVaultProposalRequest message.
 * @name QueryAllVaultProposalRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultProposalRequest
 */
export interface QueryAllVaultProposalRequest {
  pagination?: PageRequest;
}
export interface QueryAllVaultProposalRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultProposalRequest";
  value: Uint8Array;
}
/**
 * QueryAllVaultProposalRequest defines the QueryAllVaultProposalRequest message.
 * @name QueryAllVaultProposalRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultProposalRequest
 */
export interface QueryAllVaultProposalRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVaultProposalRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryAllVaultProposalRequest";
  value: QueryAllVaultProposalRequestAmino;
}
/**
 * QueryAllVaultProposalResponse defines the QueryAllVaultProposalResponse message.
 * @name QueryAllVaultProposalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultProposalResponse
 */
export interface QueryAllVaultProposalResponse {
  vaultProposal: VaultProposal[];
  pagination?: PageResponse;
}
export interface QueryAllVaultProposalResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultProposalResponse";
  value: Uint8Array;
}
/**
 * QueryAllVaultProposalResponse defines the QueryAllVaultProposalResponse message.
 * @name QueryAllVaultProposalResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultProposalResponse
 */
export interface QueryAllVaultProposalResponseAmino {
  vault_proposal?: VaultProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVaultProposalResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryAllVaultProposalResponse";
  value: QueryAllVaultProposalResponseAmino;
}
/**
 * QueryProposalsByProposerRequest defines the QueryProposalsByProposerRequest message.
 * @name QueryProposalsByProposerRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByProposerRequest
 */
export interface QueryProposalsByProposerRequest {
  proposer: string;
  /**
   * Optional filter; UNSPECIFIED returns every status.
   */
  status: ProposalStatus;
  pagination?: PageRequest;
}
export interface QueryProposalsByProposerRequestProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByProposerRequest";
  value: Uint8Array;
}
/**
 * QueryProposalsByProposerRequest defines the QueryProposalsByProposerRequest message.
 * @name QueryProposalsByProposerRequestAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByProposerRequest
 */
export interface QueryProposalsByProposerRequestAmino {
  proposer?: string;
  /**
   * Optional filter; UNSPECIFIED returns every status.
   */
  status?: ProposalStatus;
  pagination?: PageRequestAmino;
}
export interface QueryProposalsByProposerRequestAminoMsg {
  type: "/sparkdream.vault.v1.QueryProposalsByProposerRequest";
  value: QueryProposalsByProposerRequestAmino;
}
/**
 * QueryProposalsByProposerResponse defines the QueryProposalsByProposerResponse message.
 * @name QueryProposalsByProposerResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByProposerResponse
 */
export interface QueryProposalsByProposerResponse {
  proposals: VaultProposal[];
  pagination?: PageResponse;
}
export interface QueryProposalsByProposerResponseProtoMsg {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByProposerResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsByProposerResponse defines the QueryProposalsByProposerResponse message.
 * @name QueryProposalsByProposerResponseAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByProposerResponse
 */
export interface QueryProposalsByProposerResponseAmino {
  proposals?: VaultProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProposalsByProposerResponseAminoMsg {
  type: "/sparkdream.vault.v1.QueryProposalsByProposerResponse";
  value: QueryProposalsByProposerResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.vault.v1.QueryParamsRequest",
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
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.vault.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultByAddressRequest(): QueryVaultByAddressRequest {
  return {
    address: ""
  };
}
/**
 * QueryVaultByAddressRequest defines the QueryVaultByAddressRequest message.
 * @name QueryVaultByAddressRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultByAddressRequest
 */
export const QueryVaultByAddressRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryVaultByAddressRequest",
  encode(message: QueryVaultByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVaultByAddressRequest>): QueryVaultByAddressRequest {
    const message = createBaseQueryVaultByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVaultByAddressRequestAmino): QueryVaultByAddressRequest {
    const message = createBaseQueryVaultByAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryVaultByAddressRequest): QueryVaultByAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVaultByAddressRequestAminoMsg): QueryVaultByAddressRequest {
    return QueryVaultByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultByAddressRequestProtoMsg): QueryVaultByAddressRequest {
    return QueryVaultByAddressRequest.decode(message.value);
  },
  toProto(message: QueryVaultByAddressRequest): Uint8Array {
    return QueryVaultByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultByAddressRequest): QueryVaultByAddressRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryVaultByAddressRequest",
      value: QueryVaultByAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultByAddressResponse(): QueryVaultByAddressResponse {
  return {
    vault: Vault.fromPartial({})
  };
}
/**
 * QueryVaultByAddressResponse defines the QueryVaultByAddressResponse message.
 * @name QueryVaultByAddressResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultByAddressResponse
 */
export const QueryVaultByAddressResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryVaultByAddressResponse",
  encode(message: QueryVaultByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vault !== undefined) {
      Vault.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = Vault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVaultByAddressResponse>): QueryVaultByAddressResponse {
    const message = createBaseQueryVaultByAddressResponse();
    message.vault = object.vault !== undefined && object.vault !== null ? Vault.fromPartial(object.vault) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultByAddressResponseAmino): QueryVaultByAddressResponse {
    const message = createBaseQueryVaultByAddressResponse();
    if (object.vault !== undefined && object.vault !== null) {
      message.vault = Vault.fromAmino(object.vault);
    }
    return message;
  },
  toAmino(message: QueryVaultByAddressResponse): QueryVaultByAddressResponseAmino {
    const obj: any = {};
    obj.vault = message.vault ? Vault.toAmino(message.vault) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultByAddressResponseAminoMsg): QueryVaultByAddressResponse {
    return QueryVaultByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultByAddressResponseProtoMsg): QueryVaultByAddressResponse {
    return QueryVaultByAddressResponse.decode(message.value);
  },
  toProto(message: QueryVaultByAddressResponse): Uint8Array {
    return QueryVaultByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultByAddressResponse): QueryVaultByAddressResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryVaultByAddressResponse",
      value: QueryVaultByAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsBySignerRequest(): QueryVaultsBySignerRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryVaultsBySignerRequest defines the QueryVaultsBySignerRequest message.
 * @name QueryVaultsBySignerRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultsBySignerRequest
 */
export const QueryVaultsBySignerRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryVaultsBySignerRequest",
  encode(message: QueryVaultsBySignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsBySignerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsBySignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryVaultsBySignerRequest>): QueryVaultsBySignerRequest {
    const message = createBaseQueryVaultsBySignerRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultsBySignerRequestAmino): QueryVaultsBySignerRequest {
    const message = createBaseQueryVaultsBySignerRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVaultsBySignerRequest): QueryVaultsBySignerRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultsBySignerRequestAminoMsg): QueryVaultsBySignerRequest {
    return QueryVaultsBySignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsBySignerRequestProtoMsg): QueryVaultsBySignerRequest {
    return QueryVaultsBySignerRequest.decode(message.value);
  },
  toProto(message: QueryVaultsBySignerRequest): Uint8Array {
    return QueryVaultsBySignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsBySignerRequest): QueryVaultsBySignerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryVaultsBySignerRequest",
      value: QueryVaultsBySignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsBySignerResponse(): QueryVaultsBySignerResponse {
  return {
    vaults: [],
    pagination: undefined
  };
}
/**
 * QueryVaultsBySignerResponse lists the vaults the address (or any of its
 * x/rep alias addresses) is a signer of.
 * @name QueryVaultsBySignerResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryVaultsBySignerResponse
 */
export const QueryVaultsBySignerResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryVaultsBySignerResponse",
  encode(message: QueryVaultsBySignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsBySignerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsBySignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaults.push(Vault.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryVaultsBySignerResponse>): QueryVaultsBySignerResponse {
    const message = createBaseQueryVaultsBySignerResponse();
    message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultsBySignerResponseAmino): QueryVaultsBySignerResponse {
    const message = createBaseQueryVaultsBySignerResponse();
    message.vaults = object.vaults?.map(e => Vault.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVaultsBySignerResponse): QueryVaultsBySignerResponseAmino {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? Vault.toAmino(e) : undefined);
    } else {
      obj.vaults = message.vaults;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultsBySignerResponseAminoMsg): QueryVaultsBySignerResponse {
    return QueryVaultsBySignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsBySignerResponseProtoMsg): QueryVaultsBySignerResponse {
    return QueryVaultsBySignerResponse.decode(message.value);
  },
  toProto(message: QueryVaultsBySignerResponse): Uint8Array {
    return QueryVaultsBySignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsBySignerResponse): QueryVaultsBySignerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryVaultsBySignerResponse",
      value: QueryVaultsBySignerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByVaultRequest(): QueryProposalsByVaultRequest {
  return {
    vaultId: BigInt(0),
    status: 0,
    pagination: undefined
  };
}
/**
 * QueryProposalsByVaultRequest defines the QueryProposalsByVaultRequest message.
 * @name QueryProposalsByVaultRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByVaultRequest
 */
export const QueryProposalsByVaultRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByVaultRequest",
  encode(message: QueryProposalsByVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalsByVaultRequest>): QueryProposalsByVaultRequest {
    const message = createBaseQueryProposalsByVaultRequest();
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? BigInt(object.vaultId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByVaultRequestAmino): QueryProposalsByVaultRequest {
    const message = createBaseQueryProposalsByVaultRequest();
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = BigInt(object.vault_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByVaultRequest): QueryProposalsByVaultRequestAmino {
    const obj: any = {};
    obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByVaultRequestAminoMsg): QueryProposalsByVaultRequest {
    return QueryProposalsByVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsByVaultRequestProtoMsg): QueryProposalsByVaultRequest {
    return QueryProposalsByVaultRequest.decode(message.value);
  },
  toProto(message: QueryProposalsByVaultRequest): Uint8Array {
    return QueryProposalsByVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByVaultRequest): QueryProposalsByVaultRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryProposalsByVaultRequest",
      value: QueryProposalsByVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByVaultResponse(): QueryProposalsByVaultResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
/**
 * QueryProposalsByVaultResponse defines the QueryProposalsByVaultResponse message.
 * @name QueryProposalsByVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByVaultResponse
 */
export const QueryProposalsByVaultResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByVaultResponse",
  encode(message: QueryProposalsByVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      VaultProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(VaultProposal.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryProposalsByVaultResponse>): QueryProposalsByVaultResponse {
    const message = createBaseQueryProposalsByVaultResponse();
    message.proposals = object.proposals?.map(e => VaultProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByVaultResponseAmino): QueryProposalsByVaultResponse {
    const message = createBaseQueryProposalsByVaultResponse();
    message.proposals = object.proposals?.map(e => VaultProposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByVaultResponse): QueryProposalsByVaultResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? VaultProposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByVaultResponseAminoMsg): QueryProposalsByVaultResponse {
    return QueryProposalsByVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsByVaultResponseProtoMsg): QueryProposalsByVaultResponse {
    return QueryProposalsByVaultResponse.decode(message.value);
  },
  toProto(message: QueryProposalsByVaultResponse): Uint8Array {
    return QueryProposalsByVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByVaultResponse): QueryProposalsByVaultResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryProposalsByVaultResponse",
      value: QueryProposalsByVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyRequest(): QueryTallyRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryTallyRequest defines the QueryTallyRequest message.
 * @name QueryTallyRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryTallyRequest
 */
export const QueryTallyRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryTallyRequest",
  encode(message: QueryTallyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyRequest();
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
  fromPartial(object: DeepPartial<QueryTallyRequest>): QueryTallyRequest {
    const message = createBaseQueryTallyRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTallyRequestAmino): QueryTallyRequest {
    const message = createBaseQueryTallyRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyRequest): QueryTallyRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyRequestAminoMsg): QueryTallyRequest {
    return QueryTallyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTallyRequestProtoMsg): QueryTallyRequest {
    return QueryTallyRequest.decode(message.value);
  },
  toProto(message: QueryTallyRequest): Uint8Array {
    return QueryTallyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyRequest): QueryTallyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryTallyRequest",
      value: QueryTallyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResponse(): QueryTallyResponse {
  return {
    approvedWeight: BigInt(0),
    threshold: BigInt(0),
    met: false
  };
}
/**
 * QueryTallyResponse is the live tally of a proposal: the summed weight of
 * approvers who are still current signers, the vault's threshold, and whether
 * the proposal would execute now.
 * @name QueryTallyResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryTallyResponse
 */
export const QueryTallyResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryTallyResponse",
  encode(message: QueryTallyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.approvedWeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.approvedWeight);
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(16).uint64(message.threshold);
    }
    if (message.met === true) {
      writer.uint32(24).bool(message.met);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvedWeight = reader.uint64();
          break;
        case 2:
          message.threshold = reader.uint64();
          break;
        case 3:
          message.met = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTallyResponse>): QueryTallyResponse {
    const message = createBaseQueryTallyResponse();
    message.approvedWeight = object.approvedWeight !== undefined && object.approvedWeight !== null ? BigInt(object.approvedWeight.toString()) : BigInt(0);
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.met = object.met ?? false;
    return message;
  },
  fromAmino(object: QueryTallyResponseAmino): QueryTallyResponse {
    const message = createBaseQueryTallyResponse();
    if (object.approved_weight !== undefined && object.approved_weight !== null) {
      message.approvedWeight = BigInt(object.approved_weight);
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.met !== undefined && object.met !== null) {
      message.met = object.met;
    }
    return message;
  },
  toAmino(message: QueryTallyResponse): QueryTallyResponseAmino {
    const obj: any = {};
    obj.approved_weight = message.approvedWeight !== BigInt(0) ? message.approvedWeight?.toString() : undefined;
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.met = message.met === false ? undefined : message.met;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResponseAminoMsg): QueryTallyResponse {
    return QueryTallyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTallyResponseProtoMsg): QueryTallyResponse {
    return QueryTallyResponse.decode(message.value);
  },
  toProto(message: QueryTallyResponse): Uint8Array {
    return QueryTallyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResponse): QueryTallyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryTallyResponse",
      value: QueryTallyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVaultRequest(): QueryGetVaultRequest {
  return {
    vaultId: BigInt(0)
  };
}
/**
 * QueryGetVaultRequest defines the QueryGetVaultRequest message.
 * @name QueryGetVaultRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultRequest
 */
export const QueryGetVaultRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultRequest",
  encode(message: QueryGetVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vaultId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVaultRequest>): QueryGetVaultRequest {
    const message = createBaseQueryGetVaultRequest();
    message.vaultId = object.vaultId !== undefined && object.vaultId !== null ? BigInt(object.vaultId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetVaultRequestAmino): QueryGetVaultRequest {
    const message = createBaseQueryGetVaultRequest();
    if (object.vault_id !== undefined && object.vault_id !== null) {
      message.vaultId = BigInt(object.vault_id);
    }
    return message;
  },
  toAmino(message: QueryGetVaultRequest): QueryGetVaultRequestAmino {
    const obj: any = {};
    obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVaultRequestAminoMsg): QueryGetVaultRequest {
    return QueryGetVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVaultRequestProtoMsg): QueryGetVaultRequest {
    return QueryGetVaultRequest.decode(message.value);
  },
  toProto(message: QueryGetVaultRequest): Uint8Array {
    return QueryGetVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVaultRequest): QueryGetVaultRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryGetVaultRequest",
      value: QueryGetVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVaultResponse(): QueryGetVaultResponse {
  return {
    vault: Vault.fromPartial({})
  };
}
/**
 * QueryGetVaultResponse defines the QueryGetVaultResponse message.
 * @name QueryGetVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultResponse
 */
export const QueryGetVaultResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultResponse",
  encode(message: QueryGetVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vault !== undefined) {
      Vault.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = Vault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVaultResponse>): QueryGetVaultResponse {
    const message = createBaseQueryGetVaultResponse();
    message.vault = object.vault !== undefined && object.vault !== null ? Vault.fromPartial(object.vault) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVaultResponseAmino): QueryGetVaultResponse {
    const message = createBaseQueryGetVaultResponse();
    if (object.vault !== undefined && object.vault !== null) {
      message.vault = Vault.fromAmino(object.vault);
    }
    return message;
  },
  toAmino(message: QueryGetVaultResponse): QueryGetVaultResponseAmino {
    const obj: any = {};
    obj.vault = message.vault ? Vault.toAmino(message.vault) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVaultResponseAminoMsg): QueryGetVaultResponse {
    return QueryGetVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVaultResponseProtoMsg): QueryGetVaultResponse {
    return QueryGetVaultResponse.decode(message.value);
  },
  toProto(message: QueryGetVaultResponse): Uint8Array {
    return QueryGetVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVaultResponse): QueryGetVaultResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryGetVaultResponse",
      value: QueryGetVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVaultRequest(): QueryAllVaultRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllVaultRequest defines the QueryAllVaultRequest message.
 * @name QueryAllVaultRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultRequest
 */
export const QueryAllVaultRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultRequest",
  encode(message: QueryAllVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultRequest();
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
  fromPartial(object: DeepPartial<QueryAllVaultRequest>): QueryAllVaultRequest {
    const message = createBaseQueryAllVaultRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVaultRequestAmino): QueryAllVaultRequest {
    const message = createBaseQueryAllVaultRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVaultRequest): QueryAllVaultRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVaultRequestAminoMsg): QueryAllVaultRequest {
    return QueryAllVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVaultRequestProtoMsg): QueryAllVaultRequest {
    return QueryAllVaultRequest.decode(message.value);
  },
  toProto(message: QueryAllVaultRequest): Uint8Array {
    return QueryAllVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVaultRequest): QueryAllVaultRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryAllVaultRequest",
      value: QueryAllVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVaultResponse(): QueryAllVaultResponse {
  return {
    vault: [],
    pagination: undefined
  };
}
/**
 * QueryAllVaultResponse defines the QueryAllVaultResponse message.
 * @name QueryAllVaultResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultResponse
 */
export const QueryAllVaultResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultResponse",
  encode(message: QueryAllVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vault) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault.push(Vault.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllVaultResponse>): QueryAllVaultResponse {
    const message = createBaseQueryAllVaultResponse();
    message.vault = object.vault?.map(e => Vault.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVaultResponseAmino): QueryAllVaultResponse {
    const message = createBaseQueryAllVaultResponse();
    message.vault = object.vault?.map(e => Vault.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVaultResponse): QueryAllVaultResponseAmino {
    const obj: any = {};
    if (message.vault) {
      obj.vault = message.vault.map(e => e ? Vault.toAmino(e) : undefined);
    } else {
      obj.vault = message.vault;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVaultResponseAminoMsg): QueryAllVaultResponse {
    return QueryAllVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVaultResponseProtoMsg): QueryAllVaultResponse {
    return QueryAllVaultResponse.decode(message.value);
  },
  toProto(message: QueryAllVaultResponse): Uint8Array {
    return QueryAllVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVaultResponse): QueryAllVaultResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryAllVaultResponse",
      value: QueryAllVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVaultProposalRequest(): QueryGetVaultProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryGetVaultProposalRequest defines the QueryGetVaultProposalRequest message.
 * @name QueryGetVaultProposalRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultProposalRequest
 */
export const QueryGetVaultProposalRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultProposalRequest",
  encode(message: QueryGetVaultProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVaultProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVaultProposalRequest();
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
  fromPartial(object: DeepPartial<QueryGetVaultProposalRequest>): QueryGetVaultProposalRequest {
    const message = createBaseQueryGetVaultProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetVaultProposalRequestAmino): QueryGetVaultProposalRequest {
    const message = createBaseQueryGetVaultProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryGetVaultProposalRequest): QueryGetVaultProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVaultProposalRequestAminoMsg): QueryGetVaultProposalRequest {
    return QueryGetVaultProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVaultProposalRequestProtoMsg): QueryGetVaultProposalRequest {
    return QueryGetVaultProposalRequest.decode(message.value);
  },
  toProto(message: QueryGetVaultProposalRequest): Uint8Array {
    return QueryGetVaultProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVaultProposalRequest): QueryGetVaultProposalRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryGetVaultProposalRequest",
      value: QueryGetVaultProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVaultProposalResponse(): QueryGetVaultProposalResponse {
  return {
    vaultProposal: VaultProposal.fromPartial({})
  };
}
/**
 * QueryGetVaultProposalResponse defines the QueryGetVaultProposalResponse message.
 * @name QueryGetVaultProposalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryGetVaultProposalResponse
 */
export const QueryGetVaultProposalResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryGetVaultProposalResponse",
  encode(message: QueryGetVaultProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultProposal !== undefined) {
      VaultProposal.encode(message.vaultProposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVaultProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVaultProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultProposal = VaultProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVaultProposalResponse>): QueryGetVaultProposalResponse {
    const message = createBaseQueryGetVaultProposalResponse();
    message.vaultProposal = object.vaultProposal !== undefined && object.vaultProposal !== null ? VaultProposal.fromPartial(object.vaultProposal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVaultProposalResponseAmino): QueryGetVaultProposalResponse {
    const message = createBaseQueryGetVaultProposalResponse();
    if (object.vault_proposal !== undefined && object.vault_proposal !== null) {
      message.vaultProposal = VaultProposal.fromAmino(object.vault_proposal);
    }
    return message;
  },
  toAmino(message: QueryGetVaultProposalResponse): QueryGetVaultProposalResponseAmino {
    const obj: any = {};
    obj.vault_proposal = message.vaultProposal ? VaultProposal.toAmino(message.vaultProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVaultProposalResponseAminoMsg): QueryGetVaultProposalResponse {
    return QueryGetVaultProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVaultProposalResponseProtoMsg): QueryGetVaultProposalResponse {
    return QueryGetVaultProposalResponse.decode(message.value);
  },
  toProto(message: QueryGetVaultProposalResponse): Uint8Array {
    return QueryGetVaultProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVaultProposalResponse): QueryGetVaultProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryGetVaultProposalResponse",
      value: QueryGetVaultProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVaultProposalRequest(): QueryAllVaultProposalRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllVaultProposalRequest defines the QueryAllVaultProposalRequest message.
 * @name QueryAllVaultProposalRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultProposalRequest
 */
export const QueryAllVaultProposalRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultProposalRequest",
  encode(message: QueryAllVaultProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultProposalRequest();
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
  fromPartial(object: DeepPartial<QueryAllVaultProposalRequest>): QueryAllVaultProposalRequest {
    const message = createBaseQueryAllVaultProposalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVaultProposalRequestAmino): QueryAllVaultProposalRequest {
    const message = createBaseQueryAllVaultProposalRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVaultProposalRequest): QueryAllVaultProposalRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVaultProposalRequestAminoMsg): QueryAllVaultProposalRequest {
    return QueryAllVaultProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVaultProposalRequestProtoMsg): QueryAllVaultProposalRequest {
    return QueryAllVaultProposalRequest.decode(message.value);
  },
  toProto(message: QueryAllVaultProposalRequest): Uint8Array {
    return QueryAllVaultProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVaultProposalRequest): QueryAllVaultProposalRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryAllVaultProposalRequest",
      value: QueryAllVaultProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVaultProposalResponse(): QueryAllVaultProposalResponse {
  return {
    vaultProposal: [],
    pagination: undefined
  };
}
/**
 * QueryAllVaultProposalResponse defines the QueryAllVaultProposalResponse message.
 * @name QueryAllVaultProposalResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryAllVaultProposalResponse
 */
export const QueryAllVaultProposalResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryAllVaultProposalResponse",
  encode(message: QueryAllVaultProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaultProposal) {
      VaultProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultProposal.push(VaultProposal.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllVaultProposalResponse>): QueryAllVaultProposalResponse {
    const message = createBaseQueryAllVaultProposalResponse();
    message.vaultProposal = object.vaultProposal?.map(e => VaultProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVaultProposalResponseAmino): QueryAllVaultProposalResponse {
    const message = createBaseQueryAllVaultProposalResponse();
    message.vaultProposal = object.vault_proposal?.map(e => VaultProposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVaultProposalResponse): QueryAllVaultProposalResponseAmino {
    const obj: any = {};
    if (message.vaultProposal) {
      obj.vault_proposal = message.vaultProposal.map(e => e ? VaultProposal.toAmino(e) : undefined);
    } else {
      obj.vault_proposal = message.vaultProposal;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVaultProposalResponseAminoMsg): QueryAllVaultProposalResponse {
    return QueryAllVaultProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVaultProposalResponseProtoMsg): QueryAllVaultProposalResponse {
    return QueryAllVaultProposalResponse.decode(message.value);
  },
  toProto(message: QueryAllVaultProposalResponse): Uint8Array {
    return QueryAllVaultProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVaultProposalResponse): QueryAllVaultProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryAllVaultProposalResponse",
      value: QueryAllVaultProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByProposerRequest(): QueryProposalsByProposerRequest {
  return {
    proposer: "",
    status: 0,
    pagination: undefined
  };
}
/**
 * QueryProposalsByProposerRequest defines the QueryProposalsByProposerRequest message.
 * @name QueryProposalsByProposerRequest
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByProposerRequest
 */
export const QueryProposalsByProposerRequest = {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByProposerRequest",
  encode(message: QueryProposalsByProposerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByProposerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByProposerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalsByProposerRequest>): QueryProposalsByProposerRequest {
    const message = createBaseQueryProposalsByProposerRequest();
    message.proposer = object.proposer ?? "";
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByProposerRequestAmino): QueryProposalsByProposerRequest {
    const message = createBaseQueryProposalsByProposerRequest();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByProposerRequest): QueryProposalsByProposerRequestAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByProposerRequestAminoMsg): QueryProposalsByProposerRequest {
    return QueryProposalsByProposerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsByProposerRequestProtoMsg): QueryProposalsByProposerRequest {
    return QueryProposalsByProposerRequest.decode(message.value);
  },
  toProto(message: QueryProposalsByProposerRequest): Uint8Array {
    return QueryProposalsByProposerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByProposerRequest): QueryProposalsByProposerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryProposalsByProposerRequest",
      value: QueryProposalsByProposerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByProposerResponse(): QueryProposalsByProposerResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
/**
 * QueryProposalsByProposerResponse defines the QueryProposalsByProposerResponse message.
 * @name QueryProposalsByProposerResponse
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.QueryProposalsByProposerResponse
 */
export const QueryProposalsByProposerResponse = {
  typeUrl: "/sparkdream.vault.v1.QueryProposalsByProposerResponse",
  encode(message: QueryProposalsByProposerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      VaultProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsByProposerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByProposerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(VaultProposal.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryProposalsByProposerResponse>): QueryProposalsByProposerResponse {
    const message = createBaseQueryProposalsByProposerResponse();
    message.proposals = object.proposals?.map(e => VaultProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsByProposerResponseAmino): QueryProposalsByProposerResponse {
    const message = createBaseQueryProposalsByProposerResponse();
    message.proposals = object.proposals?.map(e => VaultProposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsByProposerResponse): QueryProposalsByProposerResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? VaultProposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsByProposerResponseAminoMsg): QueryProposalsByProposerResponse {
    return QueryProposalsByProposerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsByProposerResponseProtoMsg): QueryProposalsByProposerResponse {
    return QueryProposalsByProposerResponse.decode(message.value);
  },
  toProto(message: QueryProposalsByProposerResponse): Uint8Array {
    return QueryProposalsByProposerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsByProposerResponse): QueryProposalsByProposerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.QueryProposalsByProposerResponse",
      value: QueryProposalsByProposerResponse.encode(message).finish()
    };
  }
};