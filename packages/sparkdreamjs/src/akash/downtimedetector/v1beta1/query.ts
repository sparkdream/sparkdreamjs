//@ts-nocheck
import { Downtime } from "./downtime_duration";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * RecoveredSinceDowntimeOfLengthRequest is the request type for querying if the chain
 * has been operational for at least the specified recovery duration since experiencing
 * downtime of the specified length
 * @name RecoveredSinceDowntimeOfLengthRequest
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
  /**
   * downtime is the downtime duration to check against
   */
  downtime: Downtime;
  /**
   * recovery is the minimum recovery duration required since the downtime
   */
  recovery: Duration;
}
export interface RecoveredSinceDowntimeOfLengthRequestProtoMsg {
  typeUrl: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest";
  value: Uint8Array;
}
/**
 * RecoveredSinceDowntimeOfLengthRequest is the request type for querying if the chain
 * has been operational for at least the specified recovery duration since experiencing
 * downtime of the specified length
 * @name RecoveredSinceDowntimeOfLengthRequestAmino
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest
 */
export interface RecoveredSinceDowntimeOfLengthRequestAmino {
  /**
   * downtime is the downtime duration to check against
   */
  downtime?: Downtime;
  /**
   * recovery is the minimum recovery duration required since the downtime
   */
  recovery?: DurationAmino;
}
export interface RecoveredSinceDowntimeOfLengthRequestAminoMsg {
  type: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest";
  value: RecoveredSinceDowntimeOfLengthRequestAmino;
}
/**
 * RecoveredSinceDowntimeOfLengthResponse is the response type for the recovery query
 * @name RecoveredSinceDowntimeOfLengthResponse
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse
 */
export interface RecoveredSinceDowntimeOfLengthResponse {
  /**
   * succesfully_recovered indicates if the chain has been up for at least the recovery
   * duration since the last downtime of the specified length
   */
  succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseProtoMsg {
  typeUrl: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse";
  value: Uint8Array;
}
/**
 * RecoveredSinceDowntimeOfLengthResponse is the response type for the recovery query
 * @name RecoveredSinceDowntimeOfLengthResponseAmino
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse
 */
export interface RecoveredSinceDowntimeOfLengthResponseAmino {
  /**
   * succesfully_recovered indicates if the chain has been up for at least the recovery
   * duration since the last downtime of the specified length
   */
  succesfully_recovered?: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseAminoMsg {
  type: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse";
  value: RecoveredSinceDowntimeOfLengthResponseAmino;
}
function createBaseRecoveredSinceDowntimeOfLengthRequest(): RecoveredSinceDowntimeOfLengthRequest {
  return {
    downtime: 0,
    recovery: Duration.fromPartial({})
  };
}
/**
 * RecoveredSinceDowntimeOfLengthRequest is the request type for querying if the chain
 * has been operational for at least the specified recovery duration since experiencing
 * downtime of the specified length
 * @name RecoveredSinceDowntimeOfLengthRequest
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest
 */
export const RecoveredSinceDowntimeOfLengthRequest = {
  typeUrl: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
  encode(message: RecoveredSinceDowntimeOfLengthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.downtime !== 0) {
      writer.uint32(8).int32(message.downtime);
    }
    if (message.recovery !== undefined) {
      Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtime = reader.int32() as any;
          break;
        case 2:
          message.recovery = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest {
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    message.downtime = object.downtime ?? 0;
    message.recovery = object.recovery !== undefined && object.recovery !== null ? Duration.fromPartial(object.recovery) : undefined;
    return message;
  },
  fromAmino(object: RecoveredSinceDowntimeOfLengthRequestAmino): RecoveredSinceDowntimeOfLengthRequest {
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    if (object.downtime !== undefined && object.downtime !== null) {
      message.downtime = object.downtime;
    }
    if (object.recovery !== undefined && object.recovery !== null) {
      message.recovery = Duration.fromAmino(object.recovery);
    }
    return message;
  },
  toAmino(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAmino {
    const obj: any = {};
    obj.downtime = message.downtime === 0 ? undefined : message.downtime;
    obj.recovery = message.recovery ? Duration.toAmino(message.recovery) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecoveredSinceDowntimeOfLengthRequestAminoMsg): RecoveredSinceDowntimeOfLengthRequest {
    return RecoveredSinceDowntimeOfLengthRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoveredSinceDowntimeOfLengthRequestProtoMsg): RecoveredSinceDowntimeOfLengthRequest {
    return RecoveredSinceDowntimeOfLengthRequest.decode(message.value);
  },
  toProto(message: RecoveredSinceDowntimeOfLengthRequest): Uint8Array {
    return RecoveredSinceDowntimeOfLengthRequest.encode(message).finish();
  },
  toProtoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestProtoMsg {
    return {
      typeUrl: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
      value: RecoveredSinceDowntimeOfLengthRequest.encode(message).finish()
    };
  }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse(): RecoveredSinceDowntimeOfLengthResponse {
  return {
    succesfullyRecovered: false
  };
}
/**
 * RecoveredSinceDowntimeOfLengthResponse is the response type for the recovery query
 * @name RecoveredSinceDowntimeOfLengthResponse
 * @package akash.downtimedetector.v1beta1
 * @see proto type: akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse
 */
export const RecoveredSinceDowntimeOfLengthResponse = {
  typeUrl: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
  encode(message: RecoveredSinceDowntimeOfLengthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.succesfullyRecovered === true) {
      writer.uint32(8).bool(message.succesfullyRecovered);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.succesfullyRecovered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse {
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    message.succesfullyRecovered = object.succesfullyRecovered ?? false;
    return message;
  },
  fromAmino(object: RecoveredSinceDowntimeOfLengthResponseAmino): RecoveredSinceDowntimeOfLengthResponse {
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    if (object.succesfully_recovered !== undefined && object.succesfully_recovered !== null) {
      message.succesfullyRecovered = object.succesfully_recovered;
    }
    return message;
  },
  toAmino(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAmino {
    const obj: any = {};
    obj.succesfully_recovered = message.succesfullyRecovered === false ? undefined : message.succesfullyRecovered;
    return obj;
  },
  fromAminoMsg(object: RecoveredSinceDowntimeOfLengthResponseAminoMsg): RecoveredSinceDowntimeOfLengthResponse {
    return RecoveredSinceDowntimeOfLengthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoveredSinceDowntimeOfLengthResponseProtoMsg): RecoveredSinceDowntimeOfLengthResponse {
    return RecoveredSinceDowntimeOfLengthResponse.decode(message.value);
  },
  toProto(message: RecoveredSinceDowntimeOfLengthResponse): Uint8Array {
    return RecoveredSinceDowntimeOfLengthResponse.encode(message).finish();
  },
  toProtoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseProtoMsg {
    return {
      typeUrl: "/akash.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
      value: RecoveredSinceDowntimeOfLengthResponse.encode(message).finish()
    };
  }
};