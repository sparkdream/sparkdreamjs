//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ClientInfo is the akash specific client info.
 * @name ClientInfo
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.ClientInfo
 */
export interface ClientInfo {
  /**
   * ApiVersion is the version of the API running on the client.
   */
  apiVersion: string;
}
export interface ClientInfoProtoMsg {
  typeUrl: "/akash.discovery.v1.ClientInfo";
  value: Uint8Array;
}
/**
 * ClientInfo is the akash specific client info.
 * @name ClientInfoAmino
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.ClientInfo
 */
export interface ClientInfoAmino {
  /**
   * ApiVersion is the version of the API running on the client.
   */
  api_version: string;
}
export interface ClientInfoAminoMsg {
  type: "/akash.discovery.v1.ClientInfo";
  value: ClientInfoAmino;
}
/**
 * ModuleVersion describes a single module and its API version.
 * @name ModuleVersion
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.ModuleVersion
 */
export interface ModuleVersion {
  /**
   * Module is the name of the module (e.g., "deployment", "market", "oracle").
   */
  module: string;
  /**
   * Version is the API version of the module (e.g., "v1beta4", "v1beta5", "v2").
   */
  version: string;
}
export interface ModuleVersionProtoMsg {
  typeUrl: "/akash.discovery.v1.ModuleVersion";
  value: Uint8Array;
}
/**
 * ModuleVersion describes a single module and its API version.
 * @name ModuleVersionAmino
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.ModuleVersion
 */
export interface ModuleVersionAmino {
  /**
   * Module is the name of the module (e.g., "deployment", "market", "oracle").
   */
  module: string;
  /**
   * Version is the API version of the module (e.g., "v1beta4", "v1beta5", "v2").
   */
  version: string;
}
export interface ModuleVersionAminoMsg {
  type: "/akash.discovery.v1.ModuleVersion";
  value: ModuleVersionAmino;
}
/**
 * VersionInfo describes a complete API version and its metadata.
 * @name VersionInfo
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.VersionInfo
 */
export interface VersionInfo {
  /**
   * ApiVersion is the composite API version identifier (e.g., "v1beta4").
   */
  apiVersion: string;
  /**
   * Modules lists the per-module versions included in this API version.
   */
  modules: ModuleVersion[];
  /**
   * Features lists optional feature flags supported by this API version.
   */
  features: string[];
}
export interface VersionInfoProtoMsg {
  typeUrl: "/akash.discovery.v1.VersionInfo";
  value: Uint8Array;
}
/**
 * VersionInfo describes a complete API version and its metadata.
 * @name VersionInfoAmino
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.VersionInfo
 */
export interface VersionInfoAmino {
  /**
   * ApiVersion is the composite API version identifier (e.g., "v1beta4").
   */
  api_version: string;
  /**
   * Modules lists the per-module versions included in this API version.
   */
  modules: ModuleVersionAmino[];
  /**
   * Features lists optional feature flags supported by this API version.
   */
  features: string[];
}
export interface VersionInfoAminoMsg {
  type: "/akash.discovery.v1.VersionInfo";
  value: VersionInfoAmino;
}
function createBaseClientInfo(): ClientInfo {
  return {
    apiVersion: ""
  };
}
/**
 * ClientInfo is the akash specific client info.
 * @name ClientInfo
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.ClientInfo
 */
export const ClientInfo = {
  typeUrl: "/akash.discovery.v1.ClientInfo",
  encode(message: ClientInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientInfo>): ClientInfo {
    const message = createBaseClientInfo();
    message.apiVersion = object.apiVersion ?? "";
    return message;
  },
  fromAmino(object: ClientInfoAmino): ClientInfo {
    const message = createBaseClientInfo();
    if (object.api_version !== undefined && object.api_version !== null) {
      message.apiVersion = object.api_version;
    }
    return message;
  },
  toAmino(message: ClientInfo): ClientInfoAmino {
    const obj: any = {};
    obj.api_version = message.apiVersion ?? "";
    return obj;
  },
  fromAminoMsg(object: ClientInfoAminoMsg): ClientInfo {
    return ClientInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ClientInfoProtoMsg): ClientInfo {
    return ClientInfo.decode(message.value);
  },
  toProto(message: ClientInfo): Uint8Array {
    return ClientInfo.encode(message).finish();
  },
  toProtoMsg(message: ClientInfo): ClientInfoProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.ClientInfo",
      value: ClientInfo.encode(message).finish()
    };
  }
};
function createBaseModuleVersion(): ModuleVersion {
  return {
    module: "",
    version: ""
  };
}
/**
 * ModuleVersion describes a single module and its API version.
 * @name ModuleVersion
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.ModuleVersion
 */
export const ModuleVersion = {
  typeUrl: "/akash.discovery.v1.ModuleVersion",
  encode(message: ModuleVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModuleVersion>): ModuleVersion {
    const message = createBaseModuleVersion();
    message.module = object.module ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: ModuleVersionAmino): ModuleVersion {
    const message = createBaseModuleVersion();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: ModuleVersion): ModuleVersionAmino {
    const obj: any = {};
    obj.module = message.module ?? "";
    obj.version = message.version ?? "";
    return obj;
  },
  fromAminoMsg(object: ModuleVersionAminoMsg): ModuleVersion {
    return ModuleVersion.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleVersionProtoMsg): ModuleVersion {
    return ModuleVersion.decode(message.value);
  },
  toProto(message: ModuleVersion): Uint8Array {
    return ModuleVersion.encode(message).finish();
  },
  toProtoMsg(message: ModuleVersion): ModuleVersionProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.ModuleVersion",
      value: ModuleVersion.encode(message).finish()
    };
  }
};
function createBaseVersionInfo(): VersionInfo {
  return {
    apiVersion: "",
    modules: [],
    features: []
  };
}
/**
 * VersionInfo describes a complete API version and its metadata.
 * @name VersionInfo
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.VersionInfo
 */
export const VersionInfo = {
  typeUrl: "/akash.discovery.v1.VersionInfo",
  encode(message: VersionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    for (const v of message.modules) {
      ModuleVersion.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.features) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiVersion = reader.string();
          break;
        case 2:
          message.modules.push(ModuleVersion.decode(reader, reader.uint32()));
          break;
        case 3:
          message.features.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo {
    const message = createBaseVersionInfo();
    message.apiVersion = object.apiVersion ?? "";
    message.modules = object.modules?.map(e => ModuleVersion.fromPartial(e)) || [];
    message.features = object.features?.map(e => e) || [];
    return message;
  },
  fromAmino(object: VersionInfoAmino): VersionInfo {
    const message = createBaseVersionInfo();
    if (object.api_version !== undefined && object.api_version !== null) {
      message.apiVersion = object.api_version;
    }
    message.modules = object.modules?.map(e => ModuleVersion.fromAmino(e)) || [];
    message.features = object.features?.map(e => e) || [];
    return message;
  },
  toAmino(message: VersionInfo): VersionInfoAmino {
    const obj: any = {};
    obj.api_version = message.apiVersion ?? "";
    if (message.modules) {
      obj.modules = message.modules.map(e => e ? ModuleVersion.toAmino(e) : undefined);
    } else {
      obj.modules = message.modules;
    }
    if (message.features) {
      obj.features = message.features.map(e => e);
    } else {
      obj.features = message.features;
    }
    return obj;
  },
  fromAminoMsg(object: VersionInfoAminoMsg): VersionInfo {
    return VersionInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionInfoProtoMsg): VersionInfo {
    return VersionInfo.decode(message.value);
  },
  toProto(message: VersionInfo): Uint8Array {
    return VersionInfo.encode(message).finish();
  },
  toProtoMsg(message: VersionInfo): VersionInfoProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.VersionInfo",
      value: VersionInfo.encode(message).finish()
    };
  }
};