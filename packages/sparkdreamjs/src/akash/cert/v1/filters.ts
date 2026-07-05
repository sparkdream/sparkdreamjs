//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * CertificateFilter defines filters used to filter certificates.
 * @name CertificateFilter
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.CertificateFilter
 */
export interface CertificateFilter {
  /**
   * Owner is the account address of the user who owns the certificate.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Serial is a sequence number for the certificate.
   */
  serial: string;
  /**
   * State is the state of the certificate.
   * CertificateValid denotes state for deployment active.
   * CertificateRevoked denotes state for deployment closed.
   */
  state: string;
}
export interface CertificateFilterProtoMsg {
  typeUrl: "/akash.cert.v1.CertificateFilter";
  value: Uint8Array;
}
/**
 * CertificateFilter defines filters used to filter certificates.
 * @name CertificateFilterAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.CertificateFilter
 */
export interface CertificateFilterAmino {
  /**
   * Owner is the account address of the user who owns the certificate.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Serial is a sequence number for the certificate.
   */
  serial: string;
  /**
   * State is the state of the certificate.
   * CertificateValid denotes state for deployment active.
   * CertificateRevoked denotes state for deployment closed.
   */
  state: string;
}
export interface CertificateFilterAminoMsg {
  type: "/akash.cert.v1.CertificateFilter";
  value: CertificateFilterAmino;
}
function createBaseCertificateFilter(): CertificateFilter {
  return {
    owner: "",
    serial: "",
    state: ""
  };
}
/**
 * CertificateFilter defines filters used to filter certificates.
 * @name CertificateFilter
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.CertificateFilter
 */
export const CertificateFilter = {
  typeUrl: "/akash.cert.v1.CertificateFilter",
  encode(message: CertificateFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CertificateFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CertificateFilter>): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: CertificateFilterAmino): CertificateFilter {
    const message = createBaseCertificateFilter();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: CertificateFilter): CertificateFilterAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.serial = message.serial ?? "";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: CertificateFilterAminoMsg): CertificateFilter {
    return CertificateFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateFilterProtoMsg): CertificateFilter {
    return CertificateFilter.decode(message.value);
  },
  toProto(message: CertificateFilter): Uint8Array {
    return CertificateFilter.encode(message).finish();
  },
  toProtoMsg(message: CertificateFilter): CertificateFilterProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.CertificateFilter",
      value: CertificateFilter.encode(message).finish()
    };
  }
};