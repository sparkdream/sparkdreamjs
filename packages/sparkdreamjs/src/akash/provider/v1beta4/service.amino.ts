//@ts-nocheck
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./msg";
export const AminoConverter = {
  "/akash.provider.v1beta4.MsgCreateProvider": {
    aminoType: "/akash.provider.v1beta4.MsgCreateProvider",
    toAmino: MsgCreateProvider.toAmino,
    fromAmino: MsgCreateProvider.fromAmino
  },
  "/akash.provider.v1beta4.MsgUpdateProvider": {
    aminoType: "/akash.provider.v1beta4.MsgUpdateProvider",
    toAmino: MsgUpdateProvider.toAmino,
    fromAmino: MsgUpdateProvider.fromAmino
  },
  "/akash.provider.v1beta4.MsgDeleteProvider": {
    aminoType: "/akash.provider.v1beta4.MsgDeleteProvider",
    toAmino: MsgDeleteProvider.toAmino,
    fromAmino: MsgDeleteProvider.fromAmino
  }
};