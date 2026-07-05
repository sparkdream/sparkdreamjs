//@ts-nocheck
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./msg";
export const AminoConverter = {
  "/akash.audit.v1.MsgSignProviderAttributes": {
    aminoType: "/akash.audit.v1.MsgSignProviderAttributes",
    toAmino: MsgSignProviderAttributes.toAmino,
    fromAmino: MsgSignProviderAttributes.fromAmino
  },
  "/akash.audit.v1.MsgDeleteProviderAttributes": {
    aminoType: "/akash.audit.v1.MsgDeleteProviderAttributes",
    toAmino: MsgDeleteProviderAttributes.toAmino,
    fromAmino: MsgDeleteProviderAttributes.fromAmino
  }
};