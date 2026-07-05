//@ts-nocheck
import { MsgCreateCertificate, MsgRevokeCertificate } from "./msg";
export const AminoConverter = {
  "/akash.cert.v1.MsgCreateCertificate": {
    aminoType: "/akash.cert.v1.MsgCreateCertificate",
    toAmino: MsgCreateCertificate.toAmino,
    fromAmino: MsgCreateCertificate.fromAmino
  },
  "/akash.cert.v1.MsgRevokeCertificate": {
    aminoType: "/akash.cert.v1.MsgRevokeCertificate",
    toAmino: MsgRevokeCertificate.toAmino,
    fromAmino: MsgRevokeCertificate.fromAmino
  }
};