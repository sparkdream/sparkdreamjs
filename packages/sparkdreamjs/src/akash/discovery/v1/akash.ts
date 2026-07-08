//@ts-nocheck
import { ClientInfo, ClientInfoAmino, VersionInfo, VersionInfoAmino } from "./client_info";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Akash akash specific RPC parameters.
 * @name Akash
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.Akash
 */
export interface Akash {
  /**
   * ClientInfo holds information about the client.
   * Kept for backward compatibility. New clients should use supported_versions.
   */
  clientInfo: ClientInfo;
  /**
   * SupportedVersions lists all API versions the node supports.
   * Clients should pick the best match from this list.
   */
  supportedVersions: VersionInfo[];
  /**
   * ChainID is the identifier of the blockchain network.
   */
  chainId: string;
  /**
   * NodeVersion is the software version of the node.
   */
  nodeVersion: string;
  /**
   * MinClientVersion is the minimum client version the node accepts.
   */
  minClientVersion: string;
}
export interface AkashProtoMsg {
  typeUrl: "/akash.discovery.v1.Akash";
  value: Uint8Array;
}
/**
 * Akash akash specific RPC parameters.
 * @name AkashAmino
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.Akash
 */
export interface AkashAmino {
  /**
   * ClientInfo holds information about the client.
   * Kept for backward compatibility. New clients should use supported_versions.
   */
  client_info: ClientInfoAmino;
  /**
   * SupportedVersions lists all API versions the node supports.
   * Clients should pick the best match from this list.
   */
  supported_versions: VersionInfoAmino[];
  /**
   * ChainID is the identifier of the blockchain network.
   */
  chain_id: string;
  /**
   * NodeVersion is the software version of the node.
   */
  node_version: string;
  /**
   * MinClientVersion is the minimum client version the node accepts.
   */
  min_client_version: string;
}
export interface AkashAminoMsg {
  type: "/akash.discovery.v1.Akash";
  value: AkashAmino;
}
function createBaseAkash(): Akash {
  return {
    clientInfo: ClientInfo.fromPartial({}),
    supportedVersions: [],
    chainId: "",
    nodeVersion: "",
    minClientVersion: ""
  };
}
/**
 * Akash akash specific RPC parameters.
 * @name Akash
 * @package akash.discovery.v1
 * @see proto type: akash.discovery.v1.Akash
 */
export const Akash = {
  typeUrl: "/akash.discovery.v1.Akash",
  encode(message: Akash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.supportedVersions) {
      VersionInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.nodeVersion !== "") {
      writer.uint32(34).string(message.nodeVersion);
    }
    if (message.minClientVersion !== "") {
      writer.uint32(42).string(message.minClientVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Akash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.supportedVersions.push(VersionInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.nodeVersion = reader.string();
          break;
        case 5:
          message.minClientVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Akash>): Akash {
    const message = createBaseAkash();
    message.clientInfo = object.clientInfo !== undefined && object.clientInfo !== null ? ClientInfo.fromPartial(object.clientInfo) : undefined;
    message.supportedVersions = object.supportedVersions?.map(e => VersionInfo.fromPartial(e)) || [];
    message.chainId = object.chainId ?? "";
    message.nodeVersion = object.nodeVersion ?? "";
    message.minClientVersion = object.minClientVersion ?? "";
    return message;
  },
  fromAmino(object: AkashAmino): Akash {
    const message = createBaseAkash();
    if (object.client_info !== undefined && object.client_info !== null) {
      message.clientInfo = ClientInfo.fromAmino(object.client_info);
    }
    message.supportedVersions = object.supported_versions?.map(e => VersionInfo.fromAmino(e)) || [];
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.node_version !== undefined && object.node_version !== null) {
      message.nodeVersion = object.node_version;
    }
    if (object.min_client_version !== undefined && object.min_client_version !== null) {
      message.minClientVersion = object.min_client_version;
    }
    return message;
  },
  toAmino(message: Akash): AkashAmino {
    const obj: any = {};
    obj.client_info = message.clientInfo ? ClientInfo.toAmino(message.clientInfo) : ClientInfo.toAmino(ClientInfo.fromPartial({}));
    if (message.supportedVersions) {
      obj.supported_versions = message.supportedVersions.map(e => e ? VersionInfo.toAmino(e) : undefined);
    } else {
      obj.supported_versions = message.supportedVersions;
    }
    obj.chain_id = message.chainId ?? "";
    obj.node_version = message.nodeVersion ?? "";
    obj.min_client_version = message.minClientVersion ?? "";
    return obj;
  },
  fromAminoMsg(object: AkashAminoMsg): Akash {
    return Akash.fromAmino(object.value);
  },
  fromProtoMsg(message: AkashProtoMsg): Akash {
    return Akash.decode(message.value);
  },
  toProto(message: Akash): Uint8Array {
    return Akash.encode(message).finish();
  },
  toProtoMsg(message: Akash): AkashProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.Akash",
      value: Akash.encode(message).finish()
    };
  }
};