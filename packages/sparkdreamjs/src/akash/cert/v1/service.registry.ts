//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./msg";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.cert.v1.MsgCreateCertificate", MsgCreateCertificate], ["/akash.cert.v1.MsgRevokeCertificate", MsgRevokeCertificate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1.MsgCreateCertificate",
        value: MsgCreateCertificate.encode(value).finish()
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1.MsgRevokeCertificate",
        value: MsgRevokeCertificate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1.MsgCreateCertificate",
        value
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1.MsgRevokeCertificate",
        value
      };
    }
  },
  fromPartial: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1.MsgCreateCertificate",
        value: MsgCreateCertificate.fromPartial(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromPartial(value)
      };
    }
  }
};