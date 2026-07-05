//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** State is an enum which refers to state of the certificate. */
export enum State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** valid - CertificateValid denotes state for deployment active. */
  valid = 1,
  /** revoked - CertificateRevoked denotes state for deployment closed. */
  revoked = 2,
  UNRECOGNIZED = -1,
}
export const StateAmino = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "invalid":
      return State.invalid;
    case 1:
    case "valid":
      return State.valid;
    case 2:
    case "revoked":
      return State.revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.invalid:
      return "invalid";
    case State.valid:
      return "valid";
    case State.revoked:
      return "revoked";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ID stores owner and sequence number.
 * @name ID
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.ID
 */
export interface ID {
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
}
export interface IDProtoMsg {
  typeUrl: "/akash.cert.v1.ID";
  value: Uint8Array;
}
/**
 * ID stores owner and sequence number.
 * @name IDAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.ID
 */
export interface IDAmino {
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
}
export interface IDAminoMsg {
  type: "/akash.cert.v1.ID";
  value: IDAmino;
}
/**
 * Certificate stores state, certificate and it's public key.
 * The certificate is required for several transactions including deployment of a workload to verify the identity of the tenant and secure the deployment.
 * @name Certificate
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.Certificate
 */
export interface Certificate {
  /**
   * State is the state of the certificate.
   * CertificateValid denotes state for deployment active.
   * CertificateRevoked denotes state for deployment closed.
   */
  state: State;
  /**
   * Cert holds the bytes of the certificate.
   */
  cert: Uint8Array;
  /**
   * PubKey holds the public key of the certificate.
   */
  pubkey: Uint8Array;
}
export interface CertificateProtoMsg {
  typeUrl: "/akash.cert.v1.Certificate";
  value: Uint8Array;
}
/**
 * Certificate stores state, certificate and it's public key.
 * The certificate is required for several transactions including deployment of a workload to verify the identity of the tenant and secure the deployment.
 * @name CertificateAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.Certificate
 */
export interface CertificateAmino {
  /**
   * State is the state of the certificate.
   * CertificateValid denotes state for deployment active.
   * CertificateRevoked denotes state for deployment closed.
   */
  state: State;
  /**
   * Cert holds the bytes of the certificate.
   */
  cert: string;
  /**
   * PubKey holds the public key of the certificate.
   */
  pubkey: string;
}
export interface CertificateAminoMsg {
  type: "/akash.cert.v1.Certificate";
  value: CertificateAmino;
}
function createBaseID(): ID {
  return {
    owner: "",
    serial: ""
  };
}
/**
 * ID stores owner and sequence number.
 * @name ID
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.ID
 */
export const ID = {
  typeUrl: "/akash.cert.v1.ID",
  encode(message: ID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ID>): ID {
    const message = createBaseID();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    return message;
  },
  fromAmino(object: IDAmino): ID {
    const message = createBaseID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    return message;
  },
  toAmino(message: ID): IDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.serial = message.serial ?? "";
    return obj;
  },
  fromAminoMsg(object: IDAminoMsg): ID {
    return ID.fromAmino(object.value);
  },
  fromProtoMsg(message: IDProtoMsg): ID {
    return ID.decode(message.value);
  },
  toProto(message: ID): Uint8Array {
    return ID.encode(message).finish();
  },
  toProtoMsg(message: ID): IDProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.ID",
      value: ID.encode(message).finish()
    };
  }
};
function createBaseCertificate(): Certificate {
  return {
    state: 0,
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
/**
 * Certificate stores state, certificate and it's public key.
 * The certificate is required for several transactions including deployment of a workload to verify the identity of the tenant and secure the deployment.
 * @name Certificate
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.Certificate
 */
export const Certificate = {
  typeUrl: "/akash.cert.v1.Certificate",
  encode(message: Certificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.cert = reader.bytes();
          break;
        case 4:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CertificateAmino): Certificate {
    const message = createBaseCertificate();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },
  toAmino(message: Certificate): CertificateAmino {
    const obj: any = {};
    obj.state = message.state ?? 0;
    obj.cert = message.cert ? base64FromBytes(message.cert) : "";
    obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : "";
    return obj;
  },
  fromAminoMsg(object: CertificateAminoMsg): Certificate {
    return Certificate.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateProtoMsg): Certificate {
    return Certificate.decode(message.value);
  },
  toProto(message: Certificate): Uint8Array {
    return Certificate.encode(message).finish();
  },
  toProtoMsg(message: Certificate): CertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.Certificate",
      value: Certificate.encode(message).finish()
    };
  }
};