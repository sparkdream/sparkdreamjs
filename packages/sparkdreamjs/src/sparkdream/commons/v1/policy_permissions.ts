//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * PolicyPermissions defines the PolicyPermissions message.
 * @name PolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyPermissions
 */
export interface PolicyPermissions {
  policyAddress: string;
  allowedMessages: string[];
}
export interface PolicyPermissionsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PolicyPermissions";
  value: Uint8Array;
}
/**
 * PolicyPermissions defines the PolicyPermissions message.
 * @name PolicyPermissionsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyPermissions
 */
export interface PolicyPermissionsAmino {
  policy_address?: string;
  allowed_messages?: string[];
}
export interface PolicyPermissionsAminoMsg {
  type: "/sparkdream.commons.v1.PolicyPermissions";
  value: PolicyPermissionsAmino;
}
function createBasePolicyPermissions(): PolicyPermissions {
  return {
    policyAddress: "",
    allowedMessages: []
  };
}
/**
 * PolicyPermissions defines the PolicyPermissions message.
 * @name PolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyPermissions
 */
export const PolicyPermissions = {
  typeUrl: "/sparkdream.commons.v1.PolicyPermissions",
  encode(message: PolicyPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyPermissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyPermissions>): PolicyPermissions {
    const message = createBasePolicyPermissions();
    message.policyAddress = object.policyAddress ?? "";
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PolicyPermissionsAmino): PolicyPermissions {
    const message = createBasePolicyPermissions();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    message.allowedMessages = object.allowed_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: PolicyPermissions): PolicyPermissionsAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    return obj;
  },
  fromAminoMsg(object: PolicyPermissionsAminoMsg): PolicyPermissions {
    return PolicyPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyPermissionsProtoMsg): PolicyPermissions {
    return PolicyPermissions.decode(message.value);
  },
  toProto(message: PolicyPermissions): Uint8Array {
    return PolicyPermissions.encode(message).finish();
  },
  toProtoMsg(message: PolicyPermissions): PolicyPermissionsProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PolicyPermissions",
      value: PolicyPermissions.encode(message).finish()
    };
  }
};