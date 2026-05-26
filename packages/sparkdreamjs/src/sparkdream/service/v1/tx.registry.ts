//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateServiceTypeConfig, MsgRegisterOperator, MsgUpdateMetadata, MsgUnbondOperator, MsgClaimUnbondedBond, MsgTopUpBond, MsgReportOperator, MsgResolveReport, MsgContestSlash, MsgResolveReportByJury, MsgOpenControllerTransferCase, MsgFinalizeControllerTransfer } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.service.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.service.v1.MsgUpdateServiceTypeConfig", MsgUpdateServiceTypeConfig], ["/sparkdream.service.v1.MsgRegisterOperator", MsgRegisterOperator], ["/sparkdream.service.v1.MsgUpdateMetadata", MsgUpdateMetadata], ["/sparkdream.service.v1.MsgUnbondOperator", MsgUnbondOperator], ["/sparkdream.service.v1.MsgClaimUnbondedBond", MsgClaimUnbondedBond], ["/sparkdream.service.v1.MsgTopUpBond", MsgTopUpBond], ["/sparkdream.service.v1.MsgReportOperator", MsgReportOperator], ["/sparkdream.service.v1.MsgResolveReport", MsgResolveReport], ["/sparkdream.service.v1.MsgContestSlash", MsgContestSlash], ["/sparkdream.service.v1.MsgResolveReportByJury", MsgResolveReportByJury], ["/sparkdream.service.v1.MsgOpenControllerTransferCase", MsgOpenControllerTransferCase], ["/sparkdream.service.v1.MsgFinalizeControllerTransfer", MsgFinalizeControllerTransfer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateServiceTypeConfig(value: MsgUpdateServiceTypeConfig) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfig",
        value: MsgUpdateServiceTypeConfig.encode(value).finish()
      };
    },
    registerOperator(value: MsgRegisterOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgRegisterOperator",
        value: MsgRegisterOperator.encode(value).finish()
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateMetadata",
        value: MsgUpdateMetadata.encode(value).finish()
      };
    },
    unbondOperator(value: MsgUnbondOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUnbondOperator",
        value: MsgUnbondOperator.encode(value).finish()
      };
    },
    claimUnbondedBond(value: MsgClaimUnbondedBond) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBond",
        value: MsgClaimUnbondedBond.encode(value).finish()
      };
    },
    topUpBond(value: MsgTopUpBond) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgTopUpBond",
        value: MsgTopUpBond.encode(value).finish()
      };
    },
    reportOperator(value: MsgReportOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgReportOperator",
        value: MsgReportOperator.encode(value).finish()
      };
    },
    resolveReport(value: MsgResolveReport) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgResolveReport",
        value: MsgResolveReport.encode(value).finish()
      };
    },
    contestSlash(value: MsgContestSlash) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgContestSlash",
        value: MsgContestSlash.encode(value).finish()
      };
    },
    resolveReportByJury(value: MsgResolveReportByJury) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgResolveReportByJury",
        value: MsgResolveReportByJury.encode(value).finish()
      };
    },
    openControllerTransferCase(value: MsgOpenControllerTransferCase) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCase",
        value: MsgOpenControllerTransferCase.encode(value).finish()
      };
    },
    finalizeControllerTransfer(value: MsgFinalizeControllerTransfer) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransfer",
        value: MsgFinalizeControllerTransfer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateParams",
        value
      };
    },
    updateServiceTypeConfig(value: MsgUpdateServiceTypeConfig) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfig",
        value
      };
    },
    registerOperator(value: MsgRegisterOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgRegisterOperator",
        value
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateMetadata",
        value
      };
    },
    unbondOperator(value: MsgUnbondOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUnbondOperator",
        value
      };
    },
    claimUnbondedBond(value: MsgClaimUnbondedBond) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBond",
        value
      };
    },
    topUpBond(value: MsgTopUpBond) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgTopUpBond",
        value
      };
    },
    reportOperator(value: MsgReportOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgReportOperator",
        value
      };
    },
    resolveReport(value: MsgResolveReport) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgResolveReport",
        value
      };
    },
    contestSlash(value: MsgContestSlash) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgContestSlash",
        value
      };
    },
    resolveReportByJury(value: MsgResolveReportByJury) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgResolveReportByJury",
        value
      };
    },
    openControllerTransferCase(value: MsgOpenControllerTransferCase) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCase",
        value
      };
    },
    finalizeControllerTransfer(value: MsgFinalizeControllerTransfer) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransfer",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateServiceTypeConfig(value: MsgUpdateServiceTypeConfig) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfig",
        value: MsgUpdateServiceTypeConfig.fromPartial(value)
      };
    },
    registerOperator(value: MsgRegisterOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgRegisterOperator",
        value: MsgRegisterOperator.fromPartial(value)
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUpdateMetadata",
        value: MsgUpdateMetadata.fromPartial(value)
      };
    },
    unbondOperator(value: MsgUnbondOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgUnbondOperator",
        value: MsgUnbondOperator.fromPartial(value)
      };
    },
    claimUnbondedBond(value: MsgClaimUnbondedBond) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBond",
        value: MsgClaimUnbondedBond.fromPartial(value)
      };
    },
    topUpBond(value: MsgTopUpBond) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgTopUpBond",
        value: MsgTopUpBond.fromPartial(value)
      };
    },
    reportOperator(value: MsgReportOperator) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgReportOperator",
        value: MsgReportOperator.fromPartial(value)
      };
    },
    resolveReport(value: MsgResolveReport) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgResolveReport",
        value: MsgResolveReport.fromPartial(value)
      };
    },
    contestSlash(value: MsgContestSlash) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgContestSlash",
        value: MsgContestSlash.fromPartial(value)
      };
    },
    resolveReportByJury(value: MsgResolveReportByJury) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgResolveReportByJury",
        value: MsgResolveReportByJury.fromPartial(value)
      };
    },
    openControllerTransferCase(value: MsgOpenControllerTransferCase) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCase",
        value: MsgOpenControllerTransferCase.fromPartial(value)
      };
    },
    finalizeControllerTransfer(value: MsgFinalizeControllerTransfer) {
      return {
        typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransfer",
        value: MsgFinalizeControllerTransfer.fromPartial(value)
      };
    }
  }
};