//@ts-nocheck
import { MsgSendCall } from "./tx";
export const AminoConverter = {
  "/ibc.applications.gmp.v1.MsgSendCall": {
    aminoType: "cosmos-sdk/MsgSendCall",
    toAmino: MsgSendCall.toAmino,
    fromAmino: MsgSendCall.fromAmino
  }
};