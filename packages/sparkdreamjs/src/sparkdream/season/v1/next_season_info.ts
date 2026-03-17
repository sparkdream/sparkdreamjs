//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * NextSeasonInfo defines the NextSeasonInfo message.
 * @name NextSeasonInfo
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.NextSeasonInfo
 */
export interface NextSeasonInfo {
  name: string;
  theme: string;
}
export interface NextSeasonInfoProtoMsg {
  typeUrl: "/sparkdream.season.v1.NextSeasonInfo";
  value: Uint8Array;
}
/**
 * NextSeasonInfo defines the NextSeasonInfo message.
 * @name NextSeasonInfoAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.NextSeasonInfo
 */
export interface NextSeasonInfoAmino {
  name?: string;
  theme?: string;
}
export interface NextSeasonInfoAminoMsg {
  type: "/sparkdream.season.v1.NextSeasonInfo";
  value: NextSeasonInfoAmino;
}
function createBaseNextSeasonInfo(): NextSeasonInfo {
  return {
    name: "",
    theme: ""
  };
}
/**
 * NextSeasonInfo defines the NextSeasonInfo message.
 * @name NextSeasonInfo
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.NextSeasonInfo
 */
export const NextSeasonInfo = {
  typeUrl: "/sparkdream.season.v1.NextSeasonInfo",
  encode(message: NextSeasonInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.theme !== "") {
      writer.uint32(18).string(message.theme);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NextSeasonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSeasonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.theme = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NextSeasonInfo>): NextSeasonInfo {
    const message = createBaseNextSeasonInfo();
    message.name = object.name ?? "";
    message.theme = object.theme ?? "";
    return message;
  },
  fromAmino(object: NextSeasonInfoAmino): NextSeasonInfo {
    const message = createBaseNextSeasonInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = object.theme;
    }
    return message;
  },
  toAmino(message: NextSeasonInfo): NextSeasonInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.theme = message.theme === "" ? undefined : message.theme;
    return obj;
  },
  fromAminoMsg(object: NextSeasonInfoAminoMsg): NextSeasonInfo {
    return NextSeasonInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: NextSeasonInfoProtoMsg): NextSeasonInfo {
    return NextSeasonInfo.decode(message.value);
  },
  toProto(message: NextSeasonInfo): Uint8Array {
    return NextSeasonInfo.encode(message).finish();
  },
  toProtoMsg(message: NextSeasonInfo): NextSeasonInfoProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.NextSeasonInfo",
      value: NextSeasonInfo.encode(message).finish()
    };
  }
};