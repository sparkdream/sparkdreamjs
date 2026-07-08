//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Scope defines the types of deposit operations that can be authorized.
 * This enum is used to restrict the authorization to specific deposit contexts,
 * allowing fine-grained permission control within the authz system.
 */
export enum DepositAuthorization_Scope {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** deployment - DepositScopeDeployment allows deposits for deployment-related operations. */
  deployment = 1,
  /** bid - DepositScopeBid allows deposits for bid-related operations. */
  bid = 2,
  UNRECOGNIZED = -1,
}
export const DepositAuthorization_ScopeAmino = DepositAuthorization_Scope;
export function depositAuthorization_ScopeFromJSON(object: any): DepositAuthorization_Scope {
  switch (object) {
    case 0:
    case "invalid":
      return DepositAuthorization_Scope.invalid;
    case 1:
    case "deployment":
      return DepositAuthorization_Scope.deployment;
    case 2:
    case "bid":
      return DepositAuthorization_Scope.bid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositAuthorization_Scope.UNRECOGNIZED;
  }
}
export function depositAuthorization_ScopeToJSON(object: DepositAuthorization_Scope): string {
  switch (object) {
    case DepositAuthorization_Scope.invalid:
      return "invalid";
    case DepositAuthorization_Scope.deployment:
      return "deployment";
    case DepositAuthorization_Scope.bid:
      return "bid";
    case DepositAuthorization_Scope.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * DepositAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for Akash deployments and bids. This authorization is used
 * within the Cosmos SDK authz module to grant scoped permissions for deposit operations.
 * The authorization can be restricted to specific scopes (deployment or bid) to limit
 * what types of deposits the grantee is authorized to make on behalf of the granter.
 * @name DepositAuthorization
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.DepositAuthorization
 */
export interface DepositAuthorization {
  /**
   * SpendLimit is the maximum amount the grantee is authorized to spend from the granter's account.
   * This limit applies cumulatively across all deposit operations within the authorized scopes.
   * Once this limit is reached, the authorization becomes invalid and no further deposits can be made.
   * Deprecated: use spend_limits instead
   */
  spendLimit: Coin;
  /**
   * Scopes defines the specific types of deposit operations this authorization permits.
   * This provides fine-grained control over what operations
   * the grantee can perform using the granter's funds.
   */
  scopes: DepositAuthorization_Scope[];
  /**
   * SpendLimits specifies the maximum amount per denomination the grantee is authorized to spend.
   * Each entry represents the limit for a specific denomination, enforced independently.
   * Once an individual denomination's limit is exhausted, no further deposits can be made in that denomination.
   */
  spendLimits: Coin[];
}
export interface DepositAuthorizationProtoMsg {
  typeUrl: "/akash.escrow.v1.DepositAuthorization";
  value: Uint8Array;
}
/**
 * DepositAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for Akash deployments and bids. This authorization is used
 * within the Cosmos SDK authz module to grant scoped permissions for deposit operations.
 * The authorization can be restricted to specific scopes (deployment or bid) to limit
 * what types of deposits the grantee is authorized to make on behalf of the granter.
 * @name DepositAuthorizationAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.DepositAuthorization
 */
export interface DepositAuthorizationAmino {
  /**
   * SpendLimit is the maximum amount the grantee is authorized to spend from the granter's account.
   * This limit applies cumulatively across all deposit operations within the authorized scopes.
   * Once this limit is reached, the authorization becomes invalid and no further deposits can be made.
   * Deprecated: use spend_limits instead
   */
  spend_limit: CoinAmino;
  /**
   * Scopes defines the specific types of deposit operations this authorization permits.
   * This provides fine-grained control over what operations
   * the grantee can perform using the granter's funds.
   */
  scopes: DepositAuthorization_Scope[];
  /**
   * SpendLimits specifies the maximum amount per denomination the grantee is authorized to spend.
   * Each entry represents the limit for a specific denomination, enforced independently.
   * Once an individual denomination's limit is exhausted, no further deposits can be made in that denomination.
   */
  spend_limits: CoinAmino[];
}
export interface DepositAuthorizationAminoMsg {
  type: "akash/DepositAuthorization";
  value: DepositAuthorizationAmino;
}
function createBaseDepositAuthorization(): DepositAuthorization {
  return {
    spendLimit: Coin.fromPartial({}),
    scopes: [],
    spendLimits: []
  };
}
/**
 * DepositAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for Akash deployments and bids. This authorization is used
 * within the Cosmos SDK authz module to grant scoped permissions for deposit operations.
 * The authorization can be restricted to specific scopes (deployment or bid) to limit
 * what types of deposits the grantee is authorized to make on behalf of the granter.
 * @name DepositAuthorization
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.DepositAuthorization
 */
export const DepositAuthorization = {
  typeUrl: "/akash.escrow.v1.DepositAuthorization",
  aminoType: "akash/DepositAuthorization",
  encode(message: DepositAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.scopes) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.spendLimits) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scopes.push(reader.int32() as any);
            }
          } else {
            message.scopes.push(reader.int32() as any);
          }
          break;
        case 3:
          message.spendLimits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DepositAuthorization>): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    message.scopes = object.scopes?.map(e => e) || [];
    message.spendLimits = object.spendLimits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAuthorizationAmino): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    message.scopes = object.scopes?.map(e => e) || [];
    message.spendLimits = object.spend_limits?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DepositAuthorization): DepositAuthorizationAmino {
    const obj: any = {};
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : Coin.toAmino(Coin.fromPartial({}));
    if (message.scopes) {
      obj.scopes = message.scopes.map(e => e);
    } else {
      obj.scopes = message.scopes;
    }
    if (message.spendLimits) {
      obj.spend_limits = message.spendLimits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limits = message.spendLimits;
    }
    return obj;
  },
  fromAminoMsg(object: DepositAuthorizationAminoMsg): DepositAuthorization {
    return DepositAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: DepositAuthorization): DepositAuthorizationAminoMsg {
    return {
      type: "akash/DepositAuthorization",
      value: DepositAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositAuthorizationProtoMsg): DepositAuthorization {
    return DepositAuthorization.decode(message.value);
  },
  toProto(message: DepositAuthorization): Uint8Array {
    return DepositAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DepositAuthorization): DepositAuthorizationProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.DepositAuthorization",
      value: DepositAuthorization.encode(message).finish()
    };
  }
};