//@ts-nocheck
import { MsgUpdateParams, MsgUpdateServiceTypeConfig, MsgRegisterOperator, MsgUpdateMetadata, MsgUnbondOperator, MsgClaimUnbondedBond, MsgTopUpBond, MsgReportOperator, MsgResolveReport, MsgContestSlash, MsgResolveReportByJury, MsgOpenControllerTransferCase, MsgFinalizeControllerTransfer } from "./tx";
export const AminoConverter = {
  "/sparkdream.service.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/service/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.service.v1.MsgUpdateServiceTypeConfig": {
    aminoType: "sparkdream/x/service/MsgUpdateServiceTypeConfig",
    toAmino: MsgUpdateServiceTypeConfig.toAmino,
    fromAmino: MsgUpdateServiceTypeConfig.fromAmino
  },
  "/sparkdream.service.v1.MsgRegisterOperator": {
    aminoType: "sparkdream/x/service/MsgRegisterOperator",
    toAmino: MsgRegisterOperator.toAmino,
    fromAmino: MsgRegisterOperator.fromAmino
  },
  "/sparkdream.service.v1.MsgUpdateMetadata": {
    aminoType: "sparkdream/x/service/MsgUpdateMetadata",
    toAmino: MsgUpdateMetadata.toAmino,
    fromAmino: MsgUpdateMetadata.fromAmino
  },
  "/sparkdream.service.v1.MsgUnbondOperator": {
    aminoType: "sparkdream/x/service/MsgUnbondOperator",
    toAmino: MsgUnbondOperator.toAmino,
    fromAmino: MsgUnbondOperator.fromAmino
  },
  "/sparkdream.service.v1.MsgClaimUnbondedBond": {
    aminoType: "sparkdream/x/service/MsgClaimUnbondedBond",
    toAmino: MsgClaimUnbondedBond.toAmino,
    fromAmino: MsgClaimUnbondedBond.fromAmino
  },
  "/sparkdream.service.v1.MsgTopUpBond": {
    aminoType: "sparkdream/x/service/MsgTopUpBond",
    toAmino: MsgTopUpBond.toAmino,
    fromAmino: MsgTopUpBond.fromAmino
  },
  "/sparkdream.service.v1.MsgReportOperator": {
    aminoType: "sparkdream/x/service/MsgReportOperator",
    toAmino: MsgReportOperator.toAmino,
    fromAmino: MsgReportOperator.fromAmino
  },
  "/sparkdream.service.v1.MsgResolveReport": {
    aminoType: "sparkdream/x/service/MsgResolveReport",
    toAmino: MsgResolveReport.toAmino,
    fromAmino: MsgResolveReport.fromAmino
  },
  "/sparkdream.service.v1.MsgContestSlash": {
    aminoType: "sparkdream/x/service/MsgContestSlash",
    toAmino: MsgContestSlash.toAmino,
    fromAmino: MsgContestSlash.fromAmino
  },
  "/sparkdream.service.v1.MsgResolveReportByJury": {
    aminoType: "sparkdream/x/service/MsgResolveReportByJury",
    toAmino: MsgResolveReportByJury.toAmino,
    fromAmino: MsgResolveReportByJury.fromAmino
  },
  "/sparkdream.service.v1.MsgOpenControllerTransferCase": {
    aminoType: "sparkdream/x/service/MsgOpenControllerTransferCase",
    toAmino: MsgOpenControllerTransferCase.toAmino,
    fromAmino: MsgOpenControllerTransferCase.fromAmino
  },
  "/sparkdream.service.v1.MsgFinalizeControllerTransfer": {
    aminoType: "sparkdream/x/service/MsgFinalizeControllerTransfer",
    toAmino: MsgFinalizeControllerTransfer.toAmino,
    fromAmino: MsgFinalizeControllerTransfer.fromAmino
  }
};