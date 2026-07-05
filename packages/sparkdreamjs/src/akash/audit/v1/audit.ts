//@ts-nocheck
import { Attribute, AttributeAmino } from "../../base/attributes/v1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * AuditedProvider stores owner, auditor and attributes details.
 * An AuditedProvider is a provider that has undergone a verification or auditing process to ensure that it meets certain standards or requirements by an auditor.
 * An auditor can be any valid account on-chain.
 * NOTE: There are certain teams providing auditing services, which should be accounted for when deploying.
 * @name AuditedProvider
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AuditedProvider
 */
export interface AuditedProvider {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account bech32 address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
  /**
   * Attributes holds a list of key-value pairs of provider attributes.
   * Attributes are arbitrary values that a provider exposes.
   */
  attributes: Attribute[];
}
export interface AuditedProviderProtoMsg {
  typeUrl: "/akash.audit.v1.AuditedProvider";
  value: Uint8Array;
}
/**
 * AuditedProvider stores owner, auditor and attributes details.
 * An AuditedProvider is a provider that has undergone a verification or auditing process to ensure that it meets certain standards or requirements by an auditor.
 * An auditor can be any valid account on-chain.
 * NOTE: There are certain teams providing auditing services, which should be accounted for when deploying.
 * @name AuditedProviderAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AuditedProvider
 */
export interface AuditedProviderAmino {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account bech32 address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
  /**
   * Attributes holds a list of key-value pairs of provider attributes.
   * Attributes are arbitrary values that a provider exposes.
   */
  attributes: AttributeAmino[];
}
export interface AuditedProviderAminoMsg {
  type: "/akash.audit.v1.AuditedProvider";
  value: AuditedProviderAmino;
}
/**
 * AuditedAttributesStore stores the audited attributes of the provider.
 * Attributes that have been audited are those that have been verified by an auditor.
 * @name AuditedAttributesStore
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AuditedAttributesStore
 */
export interface AuditedAttributesStore {
  /**
   * Attributes holds a list of key-value pairs of provider attributes.
   * Attributes are arbitrary values that a provider exposes.
   */
  attributes: Attribute[];
}
export interface AuditedAttributesStoreProtoMsg {
  typeUrl: "/akash.audit.v1.AuditedAttributesStore";
  value: Uint8Array;
}
/**
 * AuditedAttributesStore stores the audited attributes of the provider.
 * Attributes that have been audited are those that have been verified by an auditor.
 * @name AuditedAttributesStoreAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AuditedAttributesStore
 */
export interface AuditedAttributesStoreAmino {
  /**
   * Attributes holds a list of key-value pairs of provider attributes.
   * Attributes are arbitrary values that a provider exposes.
   */
  attributes: AttributeAmino[];
}
export interface AuditedAttributesStoreAminoMsg {
  type: "/akash.audit.v1.AuditedAttributesStore";
  value: AuditedAttributesStoreAmino;
}
/**
 * AttributesFilters defines attribute filters that can be used to filter deployments.
 * @name AttributesFilters
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AttributesFilters
 */
export interface AttributesFilters {
  /**
   * Auditors contains a list of auditor account bech32 addresses.
   */
  auditors: string[];
  /**
   * Owners contains a list of owner account bech32 addresses.
   */
  owners: string[];
}
export interface AttributesFiltersProtoMsg {
  typeUrl: "/akash.audit.v1.AttributesFilters";
  value: Uint8Array;
}
/**
 * AttributesFilters defines attribute filters that can be used to filter deployments.
 * @name AttributesFiltersAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AttributesFilters
 */
export interface AttributesFiltersAmino {
  /**
   * Auditors contains a list of auditor account bech32 addresses.
   */
  auditors: string[];
  /**
   * Owners contains a list of owner account bech32 addresses.
   */
  owners: string[];
}
export interface AttributesFiltersAminoMsg {
  type: "/akash.audit.v1.AttributesFilters";
  value: AttributesFiltersAmino;
}
function createBaseAuditedProvider(): AuditedProvider {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
/**
 * AuditedProvider stores owner, auditor and attributes details.
 * An AuditedProvider is a provider that has undergone a verification or auditing process to ensure that it meets certain standards or requirements by an auditor.
 * An auditor can be any valid account on-chain.
 * NOTE: There are certain teams providing auditing services, which should be accounted for when deploying.
 * @name AuditedProvider
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AuditedProvider
 */
export const AuditedProvider = {
  typeUrl: "/akash.audit.v1.AuditedProvider",
  encode(message: AuditedProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuditedProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditedProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuditedProvider>): AuditedProvider {
    const message = createBaseAuditedProvider();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AuditedProviderAmino): AuditedProvider {
    const message = createBaseAuditedProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuditedProvider): AuditedProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: AuditedProviderAminoMsg): AuditedProvider {
    return AuditedProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: AuditedProviderProtoMsg): AuditedProvider {
    return AuditedProvider.decode(message.value);
  },
  toProto(message: AuditedProvider): Uint8Array {
    return AuditedProvider.encode(message).finish();
  },
  toProtoMsg(message: AuditedProvider): AuditedProviderProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.AuditedProvider",
      value: AuditedProvider.encode(message).finish()
    };
  }
};
function createBaseAuditedAttributesStore(): AuditedAttributesStore {
  return {
    attributes: []
  };
}
/**
 * AuditedAttributesStore stores the audited attributes of the provider.
 * Attributes that have been audited are those that have been verified by an auditor.
 * @name AuditedAttributesStore
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AuditedAttributesStore
 */
export const AuditedAttributesStore = {
  typeUrl: "/akash.audit.v1.AuditedAttributesStore",
  encode(message: AuditedAttributesStore, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuditedAttributesStore {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditedAttributesStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuditedAttributesStore>): AuditedAttributesStore {
    const message = createBaseAuditedAttributesStore();
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AuditedAttributesStoreAmino): AuditedAttributesStore {
    const message = createBaseAuditedAttributesStore();
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuditedAttributesStore): AuditedAttributesStoreAmino {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: AuditedAttributesStoreAminoMsg): AuditedAttributesStore {
    return AuditedAttributesStore.fromAmino(object.value);
  },
  fromProtoMsg(message: AuditedAttributesStoreProtoMsg): AuditedAttributesStore {
    return AuditedAttributesStore.decode(message.value);
  },
  toProto(message: AuditedAttributesStore): Uint8Array {
    return AuditedAttributesStore.encode(message).finish();
  },
  toProtoMsg(message: AuditedAttributesStore): AuditedAttributesStoreProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.AuditedAttributesStore",
      value: AuditedAttributesStore.encode(message).finish()
    };
  }
};
function createBaseAttributesFilters(): AttributesFilters {
  return {
    auditors: [],
    owners: []
  };
}
/**
 * AttributesFilters defines attribute filters that can be used to filter deployments.
 * @name AttributesFilters
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.AttributesFilters
 */
export const AttributesFilters = {
  typeUrl: "/akash.audit.v1.AttributesFilters",
  encode(message: AttributesFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributesFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditors.push(reader.string());
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map(e => e) || [];
    message.owners = object.owners?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AttributesFiltersAmino): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map(e => e) || [];
    message.owners = object.owners?.map(e => e) || [];
    return message;
  },
  toAmino(message: AttributesFilters): AttributesFiltersAmino {
    const obj: any = {};
    if (message.auditors) {
      obj.auditors = message.auditors.map(e => e);
    } else {
      obj.auditors = message.auditors;
    }
    if (message.owners) {
      obj.owners = message.owners.map(e => e);
    } else {
      obj.owners = message.owners;
    }
    return obj;
  },
  fromAminoMsg(object: AttributesFiltersAminoMsg): AttributesFilters {
    return AttributesFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributesFiltersProtoMsg): AttributesFilters {
    return AttributesFilters.decode(message.value);
  },
  toProto(message: AttributesFilters): Uint8Array {
    return AttributesFilters.encode(message).finish();
  },
  toProtoMsg(message: AttributesFilters): AttributesFiltersProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.AttributesFilters",
      value: AttributesFilters.encode(message).finish()
    };
  }
};