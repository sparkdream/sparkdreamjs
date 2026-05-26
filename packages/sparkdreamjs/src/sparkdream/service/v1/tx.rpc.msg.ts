//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateServiceTypeConfig, MsgUpdateServiceTypeConfigResponse, MsgRegisterOperator, MsgRegisterOperatorResponse, MsgUpdateMetadata, MsgUpdateMetadataResponse, MsgUnbondOperator, MsgUnbondOperatorResponse, MsgClaimUnbondedBond, MsgClaimUnbondedBondResponse, MsgTopUpBond, MsgTopUpBondResponse, MsgReportOperator, MsgReportOperatorResponse, MsgResolveReport, MsgResolveReportResponse, MsgContestSlash, MsgContestSlashResponse, MsgResolveReportByJury, MsgResolveReportByJuryResponse, MsgOpenControllerTransferCase, MsgOpenControllerTransferCaseResponse, MsgFinalizeControllerTransfer, MsgFinalizeControllerTransferResponse } from "./tx";
/** Msg defines the Msg service for x/service. See x-service-spec.md §5. */
export interface Msg {
  /** UpdateParams updates module-wide params (§4.2). Authority = x/gov. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateServiceTypeConfig adds, updates, or disables a service-type
   * registry entry (§3.2). Authority = x/gov.
   */
  updateServiceTypeConfig(request: MsgUpdateServiceTypeConfig): Promise<MsgUpdateServiceTypeConfigResponse>;
  /**
   * RegisterOperator creates a new live operator record (§5.1). MUST be
   * signed by `creator` directly — not delegable via x/session or x/authz.
   */
  registerOperator(request: MsgRegisterOperator): Promise<MsgRegisterOperatorResponse>;
  /** UpdateMetadata updates the opaque service-specific metadata blob. */
  updateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
  /** UnbondOperator starts wind-down (§3.5). MUST be signed directly. */
  unbondOperator(request: MsgUnbondOperator): Promise<MsgUnbondOperatorResponse>;
  /**
   * ClaimUnbondedBond returns bond and archives the record as RETIRED
   * once the unbonding period has elapsed with no open reports/escrow.
   */
  claimUnbondedBond(request: MsgClaimUnbondedBond): Promise<MsgClaimUnbondedBondResponse>;
  /**
   * TopUpBond adds SPARK to an operator's bond; clears UNDERFUNDED if
   * applicable.
   */
  topUpBond(request: MsgTopUpBond): Promise<MsgTopUpBondResponse>;
  /**
   * ReportOperator files a new report; reporter posts `report_deposit`
   * escrow (§3.4.6).
   */
  reportOperator(request: MsgReportOperator): Promise<MsgReportOperatorResponse>;
  /**
   * ResolveReport is the controller's verdict on a PENDING report:
   * T1_SLASH, T1_DISMISS, or ESCALATE_TO_JURY (§5.2).
   */
  resolveReport(request: MsgResolveReport): Promise<MsgResolveReportResponse>;
  /**
   * ContestSlash escalates a tier-1 slash to the jury within
   * `report_contest_window_blocks` (§5.2). Escrow returns to bond.
   */
  contestSlash(request: MsgContestSlash): Promise<MsgContestSlashResponse>;
  /**
   * ResolveReportByJury is the jury verdict path; signer is the x/rep
   * module account (§5.2 + §6.2).
   */
  resolveReportByJury(request: MsgResolveReportByJury): Promise<MsgResolveReportByJuryResponse>;
  /**
   * OpenControllerTransferCase opens a jury case proposing to transfer
   * an operator's controller to a new x/commons Group (§5.4). Opener
   * posts `report_deposit` escrow.
   */
  openControllerTransferCase(request: MsgOpenControllerTransferCase): Promise<MsgOpenControllerTransferCaseResponse>;
  /**
   * FinalizeControllerTransfer is the jury verdict path for controller-
   * transfer cases; signer is the x/rep module account (§5.4 + §6.2).
   */
  finalizeControllerTransfer(request: MsgFinalizeControllerTransfer): Promise<MsgFinalizeControllerTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams updates module-wide params (§4.2). Authority = x/gov. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateServiceTypeConfig adds, updates, or disables a service-type
   registry entry (§3.2). Authority = x/gov. */
  updateServiceTypeConfig = async (request: MsgUpdateServiceTypeConfig): Promise<MsgUpdateServiceTypeConfigResponse> => {
    const data = MsgUpdateServiceTypeConfig.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "UpdateServiceTypeConfig", data);
    return promise.then(data => MsgUpdateServiceTypeConfigResponse.decode(new BinaryReader(data)));
  };
  /* RegisterOperator creates a new live operator record (§5.1). MUST be
   signed by `creator` directly — not delegable via x/session or x/authz. */
  registerOperator = async (request: MsgRegisterOperator): Promise<MsgRegisterOperatorResponse> => {
    const data = MsgRegisterOperator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "RegisterOperator", data);
    return promise.then(data => MsgRegisterOperatorResponse.decode(new BinaryReader(data)));
  };
  /* UpdateMetadata updates the opaque service-specific metadata blob. */
  updateMetadata = async (request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse> => {
    const data = MsgUpdateMetadata.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "UpdateMetadata", data);
    return promise.then(data => MsgUpdateMetadataResponse.decode(new BinaryReader(data)));
  };
  /* UnbondOperator starts wind-down (§3.5). MUST be signed directly. */
  unbondOperator = async (request: MsgUnbondOperator): Promise<MsgUnbondOperatorResponse> => {
    const data = MsgUnbondOperator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "UnbondOperator", data);
    return promise.then(data => MsgUnbondOperatorResponse.decode(new BinaryReader(data)));
  };
  /* ClaimUnbondedBond returns bond and archives the record as RETIRED
   once the unbonding period has elapsed with no open reports/escrow. */
  claimUnbondedBond = async (request: MsgClaimUnbondedBond): Promise<MsgClaimUnbondedBondResponse> => {
    const data = MsgClaimUnbondedBond.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "ClaimUnbondedBond", data);
    return promise.then(data => MsgClaimUnbondedBondResponse.decode(new BinaryReader(data)));
  };
  /* TopUpBond adds SPARK to an operator's bond; clears UNDERFUNDED if
   applicable. */
  topUpBond = async (request: MsgTopUpBond): Promise<MsgTopUpBondResponse> => {
    const data = MsgTopUpBond.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "TopUpBond", data);
    return promise.then(data => MsgTopUpBondResponse.decode(new BinaryReader(data)));
  };
  /* ReportOperator files a new report; reporter posts `report_deposit`
   escrow (§3.4.6). */
  reportOperator = async (request: MsgReportOperator): Promise<MsgReportOperatorResponse> => {
    const data = MsgReportOperator.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "ReportOperator", data);
    return promise.then(data => MsgReportOperatorResponse.decode(new BinaryReader(data)));
  };
  /* ResolveReport is the controller's verdict on a PENDING report:
   T1_SLASH, T1_DISMISS, or ESCALATE_TO_JURY (§5.2). */
  resolveReport = async (request: MsgResolveReport): Promise<MsgResolveReportResponse> => {
    const data = MsgResolveReport.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "ResolveReport", data);
    return promise.then(data => MsgResolveReportResponse.decode(new BinaryReader(data)));
  };
  /* ContestSlash escalates a tier-1 slash to the jury within
   `report_contest_window_blocks` (§5.2). Escrow returns to bond. */
  contestSlash = async (request: MsgContestSlash): Promise<MsgContestSlashResponse> => {
    const data = MsgContestSlash.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "ContestSlash", data);
    return promise.then(data => MsgContestSlashResponse.decode(new BinaryReader(data)));
  };
  /* ResolveReportByJury is the jury verdict path; signer is the x/rep
   module account (§5.2 + §6.2). */
  resolveReportByJury = async (request: MsgResolveReportByJury): Promise<MsgResolveReportByJuryResponse> => {
    const data = MsgResolveReportByJury.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "ResolveReportByJury", data);
    return promise.then(data => MsgResolveReportByJuryResponse.decode(new BinaryReader(data)));
  };
  /* OpenControllerTransferCase opens a jury case proposing to transfer
   an operator's controller to a new x/commons Group (§5.4). Opener
   posts `report_deposit` escrow. */
  openControllerTransferCase = async (request: MsgOpenControllerTransferCase): Promise<MsgOpenControllerTransferCaseResponse> => {
    const data = MsgOpenControllerTransferCase.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "OpenControllerTransferCase", data);
    return promise.then(data => MsgOpenControllerTransferCaseResponse.decode(new BinaryReader(data)));
  };
  /* FinalizeControllerTransfer is the jury verdict path for controller-
   transfer cases; signer is the x/rep module account (§5.4 + §6.2). */
  finalizeControllerTransfer = async (request: MsgFinalizeControllerTransfer): Promise<MsgFinalizeControllerTransferResponse> => {
    const data = MsgFinalizeControllerTransfer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.service.v1.Msg", "FinalizeControllerTransfer", data);
    return promise.then(data => MsgFinalizeControllerTransferResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};