//@ts-nocheck
import { Attribute, AttributeAmino } from "../../base/attributes/v1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Info contains information on the provider.
 * @name Info
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.Info
 */
export interface Info {
  /**
   * Email is the email address to contact the provider.
   */
  email: string;
  /**
   * Website is the URL to the landing page or socials of the provider.
   */
  website: string;
}
export interface InfoProtoMsg {
  typeUrl: "/akash.provider.v1beta4.Info";
  value: Uint8Array;
}
/**
 * Info contains information on the provider.
 * @name InfoAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.Info
 */
export interface InfoAmino {
  /**
   * Email is the email address to contact the provider.
   */
  email: string;
  /**
   * Website is the URL to the landing page or socials of the provider.
   */
  website: string;
}
export interface InfoAminoMsg {
  type: "/akash.provider.v1beta4.Info";
  value: InfoAmino;
}
/**
 * Provider stores owner and host details.
 * Akash providers are entities that contribute computing resources to the network.
 * They can be individuals or organizations with underutilized computing resources, such as data centers or personal servers.
 * Providers participate in the network by running the Akash node software and setting the price for their services.
 * Users can then choose a provider based on factors such as cost, performance, and location.
 * @name Provider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.Provider
 */
export interface Provider {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * HostURI is the Uniform Resource Identifier for provider connection.
   * This URI is used to directly connect to the provider to perform tasks such as sending the manifest.
   */
  hostUri: string;
  /**
   * Attributes is a list of arbitrary attribute key-value pairs.
   */
  attributes: Attribute[];
  /**
   * Info contains additional provider information.
   */
  info: Info;
}
export interface ProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta4.Provider";
  value: Uint8Array;
}
/**
 * Provider stores owner and host details.
 * Akash providers are entities that contribute computing resources to the network.
 * They can be individuals or organizations with underutilized computing resources, such as data centers or personal servers.
 * Providers participate in the network by running the Akash node software and setting the price for their services.
 * Users can then choose a provider based on factors such as cost, performance, and location.
 * @name ProviderAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.Provider
 */
export interface ProviderAmino {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * HostURI is the Uniform Resource Identifier for provider connection.
   * This URI is used to directly connect to the provider to perform tasks such as sending the manifest.
   */
  host_uri: string;
  /**
   * Attributes is a list of arbitrary attribute key-value pairs.
   */
  attributes: AttributeAmino[];
  /**
   * Info contains additional provider information.
   */
  info: InfoAmino;
}
export interface ProviderAminoMsg {
  type: "/akash.provider.v1beta4.Provider";
  value: ProviderAmino;
}
function createBaseInfo(): Info {
  return {
    email: "",
    website: ""
  };
}
/**
 * Info contains information on the provider.
 * @name Info
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.Info
 */
export const Info = {
  typeUrl: "/akash.provider.v1beta4.Info",
  encode(message: Info, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Info {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Info>): Info {
    const message = createBaseInfo();
    message.email = object.email ?? "";
    message.website = object.website ?? "";
    return message;
  },
  fromAmino(object: InfoAmino): Info {
    const message = createBaseInfo();
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    return message;
  },
  toAmino(message: Info): InfoAmino {
    const obj: any = {};
    obj.email = message.email ?? "";
    obj.website = message.website ?? "";
    return obj;
  },
  fromAminoMsg(object: InfoAminoMsg): Info {
    return Info.fromAmino(object.value);
  },
  fromProtoMsg(message: InfoProtoMsg): Info {
    return Info.decode(message.value);
  },
  toProto(message: Info): Uint8Array {
    return Info.encode(message).finish();
  },
  toProtoMsg(message: Info): InfoProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.Info",
      value: Info.encode(message).finish()
    };
  }
};
function createBaseProvider(): Provider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: Info.fromPartial({})
  };
}
/**
 * Provider stores owner and host details.
 * Akash providers are entities that contribute computing resources to the network.
 * They can be individuals or organizations with underutilized computing resources, such as data centers or personal servers.
 * Providers participate in the network by running the Akash node software and setting the price for their services.
 * Users can then choose a provider based on factors such as cost, performance, and location.
 * @name Provider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.Provider
 */
export const Provider = {
  typeUrl: "/akash.provider.v1beta4.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = Info.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? Info.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.host_uri !== undefined && object.host_uri !== null) {
      message.hostUri = object.host_uri;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = Info.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.host_uri = message.hostUri ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.info = message.info ? Info.toAmino(message.info) : Info.toAmino(Info.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.Provider",
      value: Provider.encode(message).finish()
    };
  }
};