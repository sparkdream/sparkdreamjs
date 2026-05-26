//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { ServiceTypeConfig, ServiceTypeConfigAmino } from "./service_type_config";
import { ResolveVerdict, JuryVerdict, TransferVerdict } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgUpdateParams updates module-wide params. Authority = x/gov.
 * @name MsgUpdateParams
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  authority: string;
  /**
   * params defines the module parameters to update. All fields must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams updates module-wide params. Authority = x/gov.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  authority?: string;
  /**
   * params defines the module parameters to update. All fields must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/service/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateServiceTypeConfig creates, updates, or disables a
 * ServiceTypeConfig entry. Authority = x/gov. See §3.2 for validation.
 * @name MsgUpdateServiceTypeConfig
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateServiceTypeConfig
 */
export interface MsgUpdateServiceTypeConfig {
  authority: string;
  /**
   * config is the full ServiceTypeConfig to set. The service_type field
   * identifies which entry; an entry is created if missing or updated
   * in place if present. service_type itself is immutable post-creation.
   */
  config: ServiceTypeConfig;
}
export interface MsgUpdateServiceTypeConfigProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfig";
  value: Uint8Array;
}
/**
 * MsgUpdateServiceTypeConfig creates, updates, or disables a
 * ServiceTypeConfig entry. Authority = x/gov. See §3.2 for validation.
 * @name MsgUpdateServiceTypeConfigAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateServiceTypeConfig
 */
export interface MsgUpdateServiceTypeConfigAmino {
  authority?: string;
  /**
   * config is the full ServiceTypeConfig to set. The service_type field
   * identifies which entry; an entry is created if missing or updated
   * in place if present. service_type itself is immutable post-creation.
   */
  config: ServiceTypeConfigAmino;
}
export interface MsgUpdateServiceTypeConfigAminoMsg {
  type: "sparkdream/x/service/MsgUpdateServiceTypeConfig";
  value: MsgUpdateServiceTypeConfigAmino;
}
/**
 * @name MsgUpdateServiceTypeConfigResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse
 */
export interface MsgUpdateServiceTypeConfigResponse {}
export interface MsgUpdateServiceTypeConfigResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateServiceTypeConfigResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse
 */
export interface MsgUpdateServiceTypeConfigResponseAmino {}
export interface MsgUpdateServiceTypeConfigResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse";
  value: MsgUpdateServiceTypeConfigResponseAmino;
}
/**
 * MsgRegisterOperator creates a new operator record. MUST be signed by
 * `creator` directly (msg-server checks `creator == tx_signer[0]`); not
 * delegable via x/session or x/authz (§5.1).
 * @name MsgRegisterOperator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgRegisterOperator
 */
export interface MsgRegisterOperator {
  creator: string;
  serviceType: string;
  controller: string;
  /**
   * Bond amount in the chain's bond denom (resolved at runtime via x/identity).
   */
  bondAmount: string;
  metadata: Uint8Array;
}
export interface MsgRegisterOperatorProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgRegisterOperator";
  value: Uint8Array;
}
/**
 * MsgRegisterOperator creates a new operator record. MUST be signed by
 * `creator` directly (msg-server checks `creator == tx_signer[0]`); not
 * delegable via x/session or x/authz (§5.1).
 * @name MsgRegisterOperatorAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgRegisterOperator
 */
export interface MsgRegisterOperatorAmino {
  creator?: string;
  service_type?: string;
  controller?: string;
  /**
   * Bond amount in the chain's bond denom (resolved at runtime via x/identity).
   */
  bond_amount?: string;
  metadata?: string;
}
export interface MsgRegisterOperatorAminoMsg {
  type: "sparkdream/x/service/MsgRegisterOperator";
  value: MsgRegisterOperatorAmino;
}
/**
 * @name MsgRegisterOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgRegisterOperatorResponse
 */
export interface MsgRegisterOperatorResponse {}
export interface MsgRegisterOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgRegisterOperatorResponse";
  value: Uint8Array;
}
/**
 * @name MsgRegisterOperatorResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgRegisterOperatorResponse
 */
export interface MsgRegisterOperatorResponseAmino {}
export interface MsgRegisterOperatorResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgRegisterOperatorResponse";
  value: MsgRegisterOperatorResponseAmino;
}
/**
 * MsgUpdateMetadata updates the operator's opaque metadata blob.
 * @name MsgUpdateMetadata
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateMetadata
 */
export interface MsgUpdateMetadata {
  operator: string;
  serviceType: string;
  newMetadata: Uint8Array;
}
export interface MsgUpdateMetadataProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUpdateMetadata";
  value: Uint8Array;
}
/**
 * MsgUpdateMetadata updates the operator's opaque metadata blob.
 * @name MsgUpdateMetadataAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateMetadata
 */
export interface MsgUpdateMetadataAmino {
  operator?: string;
  service_type?: string;
  new_metadata?: string;
}
export interface MsgUpdateMetadataAminoMsg {
  type: "sparkdream/x/service/MsgUpdateMetadata";
  value: MsgUpdateMetadataAmino;
}
/**
 * @name MsgUpdateMetadataResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateMetadataResponse
 */
export interface MsgUpdateMetadataResponse {}
export interface MsgUpdateMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUpdateMetadataResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateMetadataResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateMetadataResponse
 */
export interface MsgUpdateMetadataResponseAmino {}
export interface MsgUpdateMetadataResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgUpdateMetadataResponse";
  value: MsgUpdateMetadataResponseAmino;
}
/**
 * MsgUnbondOperator transitions ACTIVE | UNDERFUNDED → UNBONDING and
 * starts the unbonding clock (§3.5). MUST be signed by `operator`
 * directly (not delegable).
 * @name MsgUnbondOperator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUnbondOperator
 */
export interface MsgUnbondOperator {
  operator: string;
  serviceType: string;
}
export interface MsgUnbondOperatorProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUnbondOperator";
  value: Uint8Array;
}
/**
 * MsgUnbondOperator transitions ACTIVE | UNDERFUNDED → UNBONDING and
 * starts the unbonding clock (§3.5). MUST be signed by `operator`
 * directly (not delegable).
 * @name MsgUnbondOperatorAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUnbondOperator
 */
export interface MsgUnbondOperatorAmino {
  operator?: string;
  service_type?: string;
}
export interface MsgUnbondOperatorAminoMsg {
  type: "sparkdream/x/service/MsgUnbondOperator";
  value: MsgUnbondOperatorAmino;
}
/**
 * @name MsgUnbondOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUnbondOperatorResponse
 */
export interface MsgUnbondOperatorResponse {}
export interface MsgUnbondOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgUnbondOperatorResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnbondOperatorResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUnbondOperatorResponse
 */
export interface MsgUnbondOperatorResponseAmino {}
export interface MsgUnbondOperatorResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgUnbondOperatorResponse";
  value: MsgUnbondOperatorResponseAmino;
}
/**
 * MsgClaimUnbondedBond completes unbonding, returns bond, and archives
 * the record as RETIRED (§3.5).
 * @name MsgClaimUnbondedBond
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgClaimUnbondedBond
 */
export interface MsgClaimUnbondedBond {
  operator: string;
  serviceType: string;
}
export interface MsgClaimUnbondedBondProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBond";
  value: Uint8Array;
}
/**
 * MsgClaimUnbondedBond completes unbonding, returns bond, and archives
 * the record as RETIRED (§3.5).
 * @name MsgClaimUnbondedBondAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgClaimUnbondedBond
 */
export interface MsgClaimUnbondedBondAmino {
  operator?: string;
  service_type?: string;
}
export interface MsgClaimUnbondedBondAminoMsg {
  type: "sparkdream/x/service/MsgClaimUnbondedBond";
  value: MsgClaimUnbondedBondAmino;
}
/**
 * @name MsgClaimUnbondedBondResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgClaimUnbondedBondResponse
 */
export interface MsgClaimUnbondedBondResponse {}
export interface MsgClaimUnbondedBondResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBondResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimUnbondedBondResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgClaimUnbondedBondResponse
 */
export interface MsgClaimUnbondedBondResponseAmino {}
export interface MsgClaimUnbondedBondResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgClaimUnbondedBondResponse";
  value: MsgClaimUnbondedBondResponseAmino;
}
/**
 * MsgTopUpBond adds SPARK to an operator's bond. Clears UNDERFUNDED if
 * the new bond ≥ min_bond.
 * @name MsgTopUpBond
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgTopUpBond
 */
export interface MsgTopUpBond {
  operator: string;
  serviceType: string;
  /**
   * Amount to top up in the chain's bond denom.
   */
  additionalBondAmount: string;
}
export interface MsgTopUpBondProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgTopUpBond";
  value: Uint8Array;
}
/**
 * MsgTopUpBond adds SPARK to an operator's bond. Clears UNDERFUNDED if
 * the new bond ≥ min_bond.
 * @name MsgTopUpBondAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgTopUpBond
 */
export interface MsgTopUpBondAmino {
  operator?: string;
  service_type?: string;
  /**
   * Amount to top up in the chain's bond denom.
   */
  additional_bond_amount?: string;
}
export interface MsgTopUpBondAminoMsg {
  type: "sparkdream/x/service/MsgTopUpBond";
  value: MsgTopUpBondAmino;
}
/**
 * @name MsgTopUpBondResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgTopUpBondResponse
 */
export interface MsgTopUpBondResponse {}
export interface MsgTopUpBondResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgTopUpBondResponse";
  value: Uint8Array;
}
/**
 * @name MsgTopUpBondResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgTopUpBondResponse
 */
export interface MsgTopUpBondResponseAmino {}
export interface MsgTopUpBondResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgTopUpBondResponse";
  value: MsgTopUpBondResponseAmino;
}
/**
 * MsgReportOperator files a new report. Reporter posts `report_deposit`
 * escrow at filing (§3.4.6). Rate-limited per
 * (reporter, operator, service_type).
 * @name MsgReportOperator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgReportOperator
 */
export interface MsgReportOperator {
  reporter: string;
  operator: string;
  serviceType: string;
  reason: string;
}
export interface MsgReportOperatorProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgReportOperator";
  value: Uint8Array;
}
/**
 * MsgReportOperator files a new report. Reporter posts `report_deposit`
 * escrow at filing (§3.4.6). Rate-limited per
 * (reporter, operator, service_type).
 * @name MsgReportOperatorAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgReportOperator
 */
export interface MsgReportOperatorAmino {
  reporter?: string;
  operator?: string;
  service_type?: string;
  reason?: string;
}
export interface MsgReportOperatorAminoMsg {
  type: "sparkdream/x/service/MsgReportOperator";
  value: MsgReportOperatorAmino;
}
/**
 * @name MsgReportOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgReportOperatorResponse
 */
export interface MsgReportOperatorResponse {
  reportId: bigint;
}
export interface MsgReportOperatorResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgReportOperatorResponse";
  value: Uint8Array;
}
/**
 * @name MsgReportOperatorResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgReportOperatorResponse
 */
export interface MsgReportOperatorResponseAmino {
  report_id?: string;
}
export interface MsgReportOperatorResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgReportOperatorResponse";
  value: MsgReportOperatorResponseAmino;
}
/**
 * MsgResolveReport is the controller's verdict on a PENDING report
 * (§5.2). For ESCALATE_TO_JURY, the controller's `slash_bps` is stored
 * as the report's `proposed_slash_bps` upper bound.
 * @name MsgResolveReport
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReport
 */
export interface MsgResolveReport {
  controller: string;
  reportId: bigint;
  verdict: ResolveVerdict;
  slashBps: number;
}
export interface MsgResolveReportProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgResolveReport";
  value: Uint8Array;
}
/**
 * MsgResolveReport is the controller's verdict on a PENDING report
 * (§5.2). For ESCALATE_TO_JURY, the controller's `slash_bps` is stored
 * as the report's `proposed_slash_bps` upper bound.
 * @name MsgResolveReportAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReport
 */
export interface MsgResolveReportAmino {
  controller?: string;
  report_id?: string;
  verdict?: ResolveVerdict;
  slash_bps?: number;
}
export interface MsgResolveReportAminoMsg {
  type: "sparkdream/x/service/MsgResolveReport";
  value: MsgResolveReportAmino;
}
/**
 * @name MsgResolveReportResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportResponse
 */
export interface MsgResolveReportResponse {}
export interface MsgResolveReportResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgResolveReportResponse";
  value: Uint8Array;
}
/**
 * @name MsgResolveReportResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportResponse
 */
export interface MsgResolveReportResponseAmino {}
export interface MsgResolveReportResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgResolveReportResponse";
  value: MsgResolveReportResponseAmino;
}
/**
 * MsgContestSlash escalates a RESOLVED_T1 report to the jury within
 * the contest window (§5.2). Escrow returns to bond eagerly.
 * @name MsgContestSlash
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgContestSlash
 */
export interface MsgContestSlash {
  operator: string;
  serviceType: string;
  reportId: bigint;
}
export interface MsgContestSlashProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgContestSlash";
  value: Uint8Array;
}
/**
 * MsgContestSlash escalates a RESOLVED_T1 report to the jury within
 * the contest window (§5.2). Escrow returns to bond eagerly.
 * @name MsgContestSlashAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgContestSlash
 */
export interface MsgContestSlashAmino {
  operator?: string;
  service_type?: string;
  report_id?: string;
}
export interface MsgContestSlashAminoMsg {
  type: "sparkdream/x/service/MsgContestSlash";
  value: MsgContestSlashAmino;
}
/**
 * @name MsgContestSlashResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgContestSlashResponse
 */
export interface MsgContestSlashResponse {}
export interface MsgContestSlashResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgContestSlashResponse";
  value: Uint8Array;
}
/**
 * @name MsgContestSlashResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgContestSlashResponse
 */
export interface MsgContestSlashResponseAmino {}
export interface MsgContestSlashResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgContestSlashResponse";
  value: MsgContestSlashResponseAmino;
}
/**
 * MsgResolveReportByJury is the only path to apply a tier-2 slash.
 * Signer is the x/rep module account (§5.2 + §6.2); rejected from any
 * other signer with ErrUnauthorizedJuryAuthority.
 * @name MsgResolveReportByJury
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportByJury
 */
export interface MsgResolveReportByJury {
  juryAuthority: string;
  reportId: bigint;
  verdict: JuryVerdict;
  slashBps: number;
  dissolve: boolean;
}
export interface MsgResolveReportByJuryProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgResolveReportByJury";
  value: Uint8Array;
}
/**
 * MsgResolveReportByJury is the only path to apply a tier-2 slash.
 * Signer is the x/rep module account (§5.2 + §6.2); rejected from any
 * other signer with ErrUnauthorizedJuryAuthority.
 * @name MsgResolveReportByJuryAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportByJury
 */
export interface MsgResolveReportByJuryAmino {
  jury_authority?: string;
  report_id?: string;
  verdict?: JuryVerdict;
  slash_bps?: number;
  dissolve?: boolean;
}
export interface MsgResolveReportByJuryAminoMsg {
  type: "sparkdream/x/service/MsgResolveReportByJury";
  value: MsgResolveReportByJuryAmino;
}
/**
 * @name MsgResolveReportByJuryResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportByJuryResponse
 */
export interface MsgResolveReportByJuryResponse {}
export interface MsgResolveReportByJuryResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgResolveReportByJuryResponse";
  value: Uint8Array;
}
/**
 * @name MsgResolveReportByJuryResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportByJuryResponse
 */
export interface MsgResolveReportByJuryResponseAmino {}
export interface MsgResolveReportByJuryResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgResolveReportByJuryResponse";
  value: MsgResolveReportByJuryResponseAmino;
}
/**
 * MsgOpenControllerTransferCase opens a jury case to transfer the
 * operator's controller to a new x/commons Group (§5.4). At most one
 * open case per (operator, service_type).
 * @name MsgOpenControllerTransferCase
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgOpenControllerTransferCase
 */
export interface MsgOpenControllerTransferCase {
  opener: string;
  operator: string;
  serviceType: string;
  proposedNewController: string;
  reason: string;
}
export interface MsgOpenControllerTransferCaseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCase";
  value: Uint8Array;
}
/**
 * MsgOpenControllerTransferCase opens a jury case to transfer the
 * operator's controller to a new x/commons Group (§5.4). At most one
 * open case per (operator, service_type).
 * @name MsgOpenControllerTransferCaseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgOpenControllerTransferCase
 */
export interface MsgOpenControllerTransferCaseAmino {
  opener?: string;
  operator?: string;
  service_type?: string;
  proposed_new_controller?: string;
  reason?: string;
}
export interface MsgOpenControllerTransferCaseAminoMsg {
  type: "sparkdream/x/service/MsgOpenControllerTransferCase";
  value: MsgOpenControllerTransferCaseAmino;
}
/**
 * @name MsgOpenControllerTransferCaseResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgOpenControllerTransferCaseResponse
 */
export interface MsgOpenControllerTransferCaseResponse {
  juryCaseId: bigint;
}
export interface MsgOpenControllerTransferCaseResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCaseResponse";
  value: Uint8Array;
}
/**
 * @name MsgOpenControllerTransferCaseResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgOpenControllerTransferCaseResponse
 */
export interface MsgOpenControllerTransferCaseResponseAmino {
  jury_case_id?: string;
}
export interface MsgOpenControllerTransferCaseResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgOpenControllerTransferCaseResponse";
  value: MsgOpenControllerTransferCaseResponseAmino;
}
/**
 * MsgFinalizeControllerTransfer applies the jury verdict (ACCEPT or
 * REJECT) on a controller-transfer case. Signer is the x/rep module
 * account (§5.4 + §6.2). Re-checks Group eligibility at apply time.
 * @name MsgFinalizeControllerTransfer
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgFinalizeControllerTransfer
 */
export interface MsgFinalizeControllerTransfer {
  juryAuthority: string;
  juryCaseId: bigint;
  verdict: TransferVerdict;
  /**
   * new_controller is set on ACCEPT, ignored on REJECT.
   */
  newController: string;
}
export interface MsgFinalizeControllerTransferProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransfer";
  value: Uint8Array;
}
/**
 * MsgFinalizeControllerTransfer applies the jury verdict (ACCEPT or
 * REJECT) on a controller-transfer case. Signer is the x/rep module
 * account (§5.4 + §6.2). Re-checks Group eligibility at apply time.
 * @name MsgFinalizeControllerTransferAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgFinalizeControllerTransfer
 */
export interface MsgFinalizeControllerTransferAmino {
  jury_authority?: string;
  jury_case_id?: string;
  verdict?: TransferVerdict;
  /**
   * new_controller is set on ACCEPT, ignored on REJECT.
   */
  new_controller?: string;
}
export interface MsgFinalizeControllerTransferAminoMsg {
  type: "sparkdream/x/service/MsgFinalizeControllerTransfer";
  value: MsgFinalizeControllerTransferAmino;
}
/**
 * @name MsgFinalizeControllerTransferResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgFinalizeControllerTransferResponse
 */
export interface MsgFinalizeControllerTransferResponse {}
export interface MsgFinalizeControllerTransferResponseProtoMsg {
  typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransferResponse";
  value: Uint8Array;
}
/**
 * @name MsgFinalizeControllerTransferResponseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgFinalizeControllerTransferResponse
 */
export interface MsgFinalizeControllerTransferResponseAmino {}
export interface MsgFinalizeControllerTransferResponseAminoMsg {
  type: "/sparkdream.service.v1.MsgFinalizeControllerTransferResponse";
  value: MsgFinalizeControllerTransferResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams updates module-wide params. Authority = x/gov.
 * @name MsgUpdateParams
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.service.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/service/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/service/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.service.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateServiceTypeConfig(): MsgUpdateServiceTypeConfig {
  return {
    authority: "",
    config: ServiceTypeConfig.fromPartial({})
  };
}
/**
 * MsgUpdateServiceTypeConfig creates, updates, or disables a
 * ServiceTypeConfig entry. Authority = x/gov. See §3.2 for validation.
 * @name MsgUpdateServiceTypeConfig
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateServiceTypeConfig
 */
export const MsgUpdateServiceTypeConfig = {
  typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfig",
  aminoType: "sparkdream/x/service/MsgUpdateServiceTypeConfig",
  encode(message: MsgUpdateServiceTypeConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.config !== undefined) {
      ServiceTypeConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateServiceTypeConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateServiceTypeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.config = ServiceTypeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateServiceTypeConfig>): MsgUpdateServiceTypeConfig {
    const message = createBaseMsgUpdateServiceTypeConfig();
    message.authority = object.authority ?? "";
    message.config = object.config !== undefined && object.config !== null ? ServiceTypeConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateServiceTypeConfigAmino): MsgUpdateServiceTypeConfig {
    const message = createBaseMsgUpdateServiceTypeConfig();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ServiceTypeConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: MsgUpdateServiceTypeConfig): MsgUpdateServiceTypeConfigAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.config = message.config ? ServiceTypeConfig.toAmino(message.config) : ServiceTypeConfig.toAmino(ServiceTypeConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateServiceTypeConfigAminoMsg): MsgUpdateServiceTypeConfig {
    return MsgUpdateServiceTypeConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateServiceTypeConfig): MsgUpdateServiceTypeConfigAminoMsg {
    return {
      type: "sparkdream/x/service/MsgUpdateServiceTypeConfig",
      value: MsgUpdateServiceTypeConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateServiceTypeConfigProtoMsg): MsgUpdateServiceTypeConfig {
    return MsgUpdateServiceTypeConfig.decode(message.value);
  },
  toProto(message: MsgUpdateServiceTypeConfig): Uint8Array {
    return MsgUpdateServiceTypeConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateServiceTypeConfig): MsgUpdateServiceTypeConfigProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfig",
      value: MsgUpdateServiceTypeConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateServiceTypeConfigResponse(): MsgUpdateServiceTypeConfigResponse {
  return {};
}
/**
 * @name MsgUpdateServiceTypeConfigResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse
 */
export const MsgUpdateServiceTypeConfigResponse = {
  typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse",
  encode(_: MsgUpdateServiceTypeConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateServiceTypeConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateServiceTypeConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateServiceTypeConfigResponse>): MsgUpdateServiceTypeConfigResponse {
    const message = createBaseMsgUpdateServiceTypeConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateServiceTypeConfigResponseAmino): MsgUpdateServiceTypeConfigResponse {
    const message = createBaseMsgUpdateServiceTypeConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateServiceTypeConfigResponse): MsgUpdateServiceTypeConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateServiceTypeConfigResponseAminoMsg): MsgUpdateServiceTypeConfigResponse {
    return MsgUpdateServiceTypeConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateServiceTypeConfigResponseProtoMsg): MsgUpdateServiceTypeConfigResponse {
    return MsgUpdateServiceTypeConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateServiceTypeConfigResponse): Uint8Array {
    return MsgUpdateServiceTypeConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateServiceTypeConfigResponse): MsgUpdateServiceTypeConfigResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUpdateServiceTypeConfigResponse",
      value: MsgUpdateServiceTypeConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterOperator(): MsgRegisterOperator {
  return {
    creator: "",
    serviceType: "",
    controller: "",
    bondAmount: "",
    metadata: new Uint8Array()
  };
}
/**
 * MsgRegisterOperator creates a new operator record. MUST be signed by
 * `creator` directly (msg-server checks `creator == tx_signer[0]`); not
 * delegable via x/session or x/authz (§5.1).
 * @name MsgRegisterOperator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgRegisterOperator
 */
export const MsgRegisterOperator = {
  typeUrl: "/sparkdream.service.v1.MsgRegisterOperator",
  aminoType: "sparkdream/x/service/MsgRegisterOperator",
  encode(message: MsgRegisterOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    if (message.bondAmount !== "") {
      writer.uint32(34).string(message.bondAmount);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.bondAmount = reader.string();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterOperator>): MsgRegisterOperator {
    const message = createBaseMsgRegisterOperator();
    message.creator = object.creator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.controller = object.controller ?? "";
    message.bondAmount = object.bondAmount ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRegisterOperatorAmino): MsgRegisterOperator {
    const message = createBaseMsgRegisterOperator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.bond_amount !== undefined && object.bond_amount !== null) {
      message.bondAmount = object.bond_amount;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgRegisterOperator): MsgRegisterOperatorAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.bond_amount = message.bondAmount === "" ? undefined : message.bondAmount;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterOperatorAminoMsg): MsgRegisterOperator {
    return MsgRegisterOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterOperator): MsgRegisterOperatorAminoMsg {
    return {
      type: "sparkdream/x/service/MsgRegisterOperator",
      value: MsgRegisterOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterOperatorProtoMsg): MsgRegisterOperator {
    return MsgRegisterOperator.decode(message.value);
  },
  toProto(message: MsgRegisterOperator): Uint8Array {
    return MsgRegisterOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterOperator): MsgRegisterOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgRegisterOperator",
      value: MsgRegisterOperator.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterOperatorResponse(): MsgRegisterOperatorResponse {
  return {};
}
/**
 * @name MsgRegisterOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgRegisterOperatorResponse
 */
export const MsgRegisterOperatorResponse = {
  typeUrl: "/sparkdream.service.v1.MsgRegisterOperatorResponse",
  encode(_: MsgRegisterOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRegisterOperatorResponse>): MsgRegisterOperatorResponse {
    const message = createBaseMsgRegisterOperatorResponse();
    return message;
  },
  fromAmino(_: MsgRegisterOperatorResponseAmino): MsgRegisterOperatorResponse {
    const message = createBaseMsgRegisterOperatorResponse();
    return message;
  },
  toAmino(_: MsgRegisterOperatorResponse): MsgRegisterOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterOperatorResponseAminoMsg): MsgRegisterOperatorResponse {
    return MsgRegisterOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterOperatorResponseProtoMsg): MsgRegisterOperatorResponse {
    return MsgRegisterOperatorResponse.decode(message.value);
  },
  toProto(message: MsgRegisterOperatorResponse): Uint8Array {
    return MsgRegisterOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterOperatorResponse): MsgRegisterOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgRegisterOperatorResponse",
      value: MsgRegisterOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return {
    operator: "",
    serviceType: "",
    newMetadata: new Uint8Array()
  };
}
/**
 * MsgUpdateMetadata updates the operator's opaque metadata blob.
 * @name MsgUpdateMetadata
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateMetadata
 */
export const MsgUpdateMetadata = {
  typeUrl: "/sparkdream.service.v1.MsgUpdateMetadata",
  aminoType: "sparkdream/x/service/MsgUpdateMetadata",
  encode(message: MsgUpdateMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.newMetadata.length !== 0) {
      writer.uint32(26).bytes(message.newMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.newMetadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateMetadata>): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.newMetadata = object.newMetadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgUpdateMetadataAmino): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.new_metadata !== undefined && object.new_metadata !== null) {
      message.newMetadata = bytesFromBase64(object.new_metadata);
    }
    return message;
  },
  toAmino(message: MsgUpdateMetadata): MsgUpdateMetadataAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.new_metadata = message.newMetadata ? base64FromBytes(message.newMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMetadataAminoMsg): MsgUpdateMetadata {
    return MsgUpdateMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMetadata): MsgUpdateMetadataAminoMsg {
    return {
      type: "sparkdream/x/service/MsgUpdateMetadata",
      value: MsgUpdateMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMetadataProtoMsg): MsgUpdateMetadata {
    return MsgUpdateMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateMetadata): Uint8Array {
    return MsgUpdateMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMetadata): MsgUpdateMetadataProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUpdateMetadata",
      value: MsgUpdateMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return {};
}
/**
 * @name MsgUpdateMetadataResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUpdateMetadataResponse
 */
export const MsgUpdateMetadataResponse = {
  typeUrl: "/sparkdream.service.v1.MsgUpdateMetadataResponse",
  encode(_: MsgUpdateMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateMetadataResponse>): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMetadataResponseAmino): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMetadataResponseAminoMsg): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMetadataResponseProtoMsg): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMetadataResponse): Uint8Array {
    return MsgUpdateMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUpdateMetadataResponse",
      value: MsgUpdateMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondOperator(): MsgUnbondOperator {
  return {
    operator: "",
    serviceType: ""
  };
}
/**
 * MsgUnbondOperator transitions ACTIVE | UNDERFUNDED → UNBONDING and
 * starts the unbonding clock (§3.5). MUST be signed by `operator`
 * directly (not delegable).
 * @name MsgUnbondOperator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUnbondOperator
 */
export const MsgUnbondOperator = {
  typeUrl: "/sparkdream.service.v1.MsgUnbondOperator",
  aminoType: "sparkdream/x/service/MsgUnbondOperator",
  encode(message: MsgUnbondOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnbondOperator>): MsgUnbondOperator {
    const message = createBaseMsgUnbondOperator();
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondOperatorAmino): MsgUnbondOperator {
    const message = createBaseMsgUnbondOperator();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    return message;
  },
  toAmino(message: MsgUnbondOperator): MsgUnbondOperatorAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondOperatorAminoMsg): MsgUnbondOperator {
    return MsgUnbondOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondOperator): MsgUnbondOperatorAminoMsg {
    return {
      type: "sparkdream/x/service/MsgUnbondOperator",
      value: MsgUnbondOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondOperatorProtoMsg): MsgUnbondOperator {
    return MsgUnbondOperator.decode(message.value);
  },
  toProto(message: MsgUnbondOperator): Uint8Array {
    return MsgUnbondOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondOperator): MsgUnbondOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUnbondOperator",
      value: MsgUnbondOperator.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondOperatorResponse(): MsgUnbondOperatorResponse {
  return {};
}
/**
 * @name MsgUnbondOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgUnbondOperatorResponse
 */
export const MsgUnbondOperatorResponse = {
  typeUrl: "/sparkdream.service.v1.MsgUnbondOperatorResponse",
  encode(_: MsgUnbondOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUnbondOperatorResponse>): MsgUnbondOperatorResponse {
    const message = createBaseMsgUnbondOperatorResponse();
    return message;
  },
  fromAmino(_: MsgUnbondOperatorResponseAmino): MsgUnbondOperatorResponse {
    const message = createBaseMsgUnbondOperatorResponse();
    return message;
  },
  toAmino(_: MsgUnbondOperatorResponse): MsgUnbondOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondOperatorResponseAminoMsg): MsgUnbondOperatorResponse {
    return MsgUnbondOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondOperatorResponseProtoMsg): MsgUnbondOperatorResponse {
    return MsgUnbondOperatorResponse.decode(message.value);
  },
  toProto(message: MsgUnbondOperatorResponse): Uint8Array {
    return MsgUnbondOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondOperatorResponse): MsgUnbondOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgUnbondOperatorResponse",
      value: MsgUnbondOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUnbondedBond(): MsgClaimUnbondedBond {
  return {
    operator: "",
    serviceType: ""
  };
}
/**
 * MsgClaimUnbondedBond completes unbonding, returns bond, and archives
 * the record as RETIRED (§3.5).
 * @name MsgClaimUnbondedBond
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgClaimUnbondedBond
 */
export const MsgClaimUnbondedBond = {
  typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBond",
  aminoType: "sparkdream/x/service/MsgClaimUnbondedBond",
  encode(message: MsgClaimUnbondedBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimUnbondedBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnbondedBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimUnbondedBond>): MsgClaimUnbondedBond {
    const message = createBaseMsgClaimUnbondedBond();
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    return message;
  },
  fromAmino(object: MsgClaimUnbondedBondAmino): MsgClaimUnbondedBond {
    const message = createBaseMsgClaimUnbondedBond();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    return message;
  },
  toAmino(message: MsgClaimUnbondedBond): MsgClaimUnbondedBondAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUnbondedBondAminoMsg): MsgClaimUnbondedBond {
    return MsgClaimUnbondedBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimUnbondedBond): MsgClaimUnbondedBondAminoMsg {
    return {
      type: "sparkdream/x/service/MsgClaimUnbondedBond",
      value: MsgClaimUnbondedBond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimUnbondedBondProtoMsg): MsgClaimUnbondedBond {
    return MsgClaimUnbondedBond.decode(message.value);
  },
  toProto(message: MsgClaimUnbondedBond): Uint8Array {
    return MsgClaimUnbondedBond.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUnbondedBond): MsgClaimUnbondedBondProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBond",
      value: MsgClaimUnbondedBond.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUnbondedBondResponse(): MsgClaimUnbondedBondResponse {
  return {};
}
/**
 * @name MsgClaimUnbondedBondResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgClaimUnbondedBondResponse
 */
export const MsgClaimUnbondedBondResponse = {
  typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBondResponse",
  encode(_: MsgClaimUnbondedBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimUnbondedBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnbondedBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgClaimUnbondedBondResponse>): MsgClaimUnbondedBondResponse {
    const message = createBaseMsgClaimUnbondedBondResponse();
    return message;
  },
  fromAmino(_: MsgClaimUnbondedBondResponseAmino): MsgClaimUnbondedBondResponse {
    const message = createBaseMsgClaimUnbondedBondResponse();
    return message;
  },
  toAmino(_: MsgClaimUnbondedBondResponse): MsgClaimUnbondedBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimUnbondedBondResponseAminoMsg): MsgClaimUnbondedBondResponse {
    return MsgClaimUnbondedBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUnbondedBondResponseProtoMsg): MsgClaimUnbondedBondResponse {
    return MsgClaimUnbondedBondResponse.decode(message.value);
  },
  toProto(message: MsgClaimUnbondedBondResponse): Uint8Array {
    return MsgClaimUnbondedBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUnbondedBondResponse): MsgClaimUnbondedBondResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgClaimUnbondedBondResponse",
      value: MsgClaimUnbondedBondResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpBond(): MsgTopUpBond {
  return {
    operator: "",
    serviceType: "",
    additionalBondAmount: ""
  };
}
/**
 * MsgTopUpBond adds SPARK to an operator's bond. Clears UNDERFUNDED if
 * the new bond ≥ min_bond.
 * @name MsgTopUpBond
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgTopUpBond
 */
export const MsgTopUpBond = {
  typeUrl: "/sparkdream.service.v1.MsgTopUpBond",
  aminoType: "sparkdream/x/service/MsgTopUpBond",
  encode(message: MsgTopUpBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.additionalBondAmount !== "") {
      writer.uint32(26).string(message.additionalBondAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.additionalBondAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTopUpBond>): MsgTopUpBond {
    const message = createBaseMsgTopUpBond();
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.additionalBondAmount = object.additionalBondAmount ?? "";
    return message;
  },
  fromAmino(object: MsgTopUpBondAmino): MsgTopUpBond {
    const message = createBaseMsgTopUpBond();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.additional_bond_amount !== undefined && object.additional_bond_amount !== null) {
      message.additionalBondAmount = object.additional_bond_amount;
    }
    return message;
  },
  toAmino(message: MsgTopUpBond): MsgTopUpBondAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.additional_bond_amount = message.additionalBondAmount === "" ? undefined : message.additionalBondAmount;
    return obj;
  },
  fromAminoMsg(object: MsgTopUpBondAminoMsg): MsgTopUpBond {
    return MsgTopUpBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTopUpBond): MsgTopUpBondAminoMsg {
    return {
      type: "sparkdream/x/service/MsgTopUpBond",
      value: MsgTopUpBond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTopUpBondProtoMsg): MsgTopUpBond {
    return MsgTopUpBond.decode(message.value);
  },
  toProto(message: MsgTopUpBond): Uint8Array {
    return MsgTopUpBond.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpBond): MsgTopUpBondProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgTopUpBond",
      value: MsgTopUpBond.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpBondResponse(): MsgTopUpBondResponse {
  return {};
}
/**
 * @name MsgTopUpBondResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgTopUpBondResponse
 */
export const MsgTopUpBondResponse = {
  typeUrl: "/sparkdream.service.v1.MsgTopUpBondResponse",
  encode(_: MsgTopUpBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTopUpBondResponse>): MsgTopUpBondResponse {
    const message = createBaseMsgTopUpBondResponse();
    return message;
  },
  fromAmino(_: MsgTopUpBondResponseAmino): MsgTopUpBondResponse {
    const message = createBaseMsgTopUpBondResponse();
    return message;
  },
  toAmino(_: MsgTopUpBondResponse): MsgTopUpBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTopUpBondResponseAminoMsg): MsgTopUpBondResponse {
    return MsgTopUpBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpBondResponseProtoMsg): MsgTopUpBondResponse {
    return MsgTopUpBondResponse.decode(message.value);
  },
  toProto(message: MsgTopUpBondResponse): Uint8Array {
    return MsgTopUpBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpBondResponse): MsgTopUpBondResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgTopUpBondResponse",
      value: MsgTopUpBondResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportOperator(): MsgReportOperator {
  return {
    reporter: "",
    operator: "",
    serviceType: "",
    reason: ""
  };
}
/**
 * MsgReportOperator files a new report. Reporter posts `report_deposit`
 * escrow at filing (§3.4.6). Rate-limited per
 * (reporter, operator, service_type).
 * @name MsgReportOperator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgReportOperator
 */
export const MsgReportOperator = {
  typeUrl: "/sparkdream.service.v1.MsgReportOperator",
  aminoType: "sparkdream/x/service/MsgReportOperator",
  encode(message: MsgReportOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporter !== "") {
      writer.uint32(10).string(message.reporter);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporter = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReportOperator>): MsgReportOperator {
    const message = createBaseMsgReportOperator();
    message.reporter = object.reporter ?? "";
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgReportOperatorAmino): MsgReportOperator {
    const message = createBaseMsgReportOperator();
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgReportOperator): MsgReportOperatorAmino {
    const obj: any = {};
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgReportOperatorAminoMsg): MsgReportOperator {
    return MsgReportOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReportOperator): MsgReportOperatorAminoMsg {
    return {
      type: "sparkdream/x/service/MsgReportOperator",
      value: MsgReportOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReportOperatorProtoMsg): MsgReportOperator {
    return MsgReportOperator.decode(message.value);
  },
  toProto(message: MsgReportOperator): Uint8Array {
    return MsgReportOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgReportOperator): MsgReportOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgReportOperator",
      value: MsgReportOperator.encode(message).finish()
    };
  }
};
function createBaseMsgReportOperatorResponse(): MsgReportOperatorResponse {
  return {
    reportId: BigInt(0)
  };
}
/**
 * @name MsgReportOperatorResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgReportOperatorResponse
 */
export const MsgReportOperatorResponse = {
  typeUrl: "/sparkdream.service.v1.MsgReportOperatorResponse",
  encode(message: MsgReportOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reportId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reportId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReportOperatorResponse>): MsgReportOperatorResponse {
    const message = createBaseMsgReportOperatorResponse();
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgReportOperatorResponseAmino): MsgReportOperatorResponse {
    const message = createBaseMsgReportOperatorResponse();
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    return message;
  },
  toAmino(message: MsgReportOperatorResponse): MsgReportOperatorResponseAmino {
    const obj: any = {};
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgReportOperatorResponseAminoMsg): MsgReportOperatorResponse {
    return MsgReportOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportOperatorResponseProtoMsg): MsgReportOperatorResponse {
    return MsgReportOperatorResponse.decode(message.value);
  },
  toProto(message: MsgReportOperatorResponse): Uint8Array {
    return MsgReportOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportOperatorResponse): MsgReportOperatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgReportOperatorResponse",
      value: MsgReportOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveReport(): MsgResolveReport {
  return {
    controller: "",
    reportId: BigInt(0),
    verdict: 0,
    slashBps: 0
  };
}
/**
 * MsgResolveReport is the controller's verdict on a PENDING report
 * (§5.2). For ESCALATE_TO_JURY, the controller's `slash_bps` is stored
 * as the report's `proposed_slash_bps` upper bound.
 * @name MsgResolveReport
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReport
 */
export const MsgResolveReport = {
  typeUrl: "/sparkdream.service.v1.MsgResolveReport",
  aminoType: "sparkdream/x/service/MsgResolveReport",
  encode(message: MsgResolveReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.reportId !== BigInt(0)) {
      writer.uint32(16).uint64(message.reportId);
    }
    if (message.verdict !== 0) {
      writer.uint32(24).int32(message.verdict);
    }
    if (message.slashBps !== 0) {
      writer.uint32(32).uint32(message.slashBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controller = reader.string();
          break;
        case 2:
          message.reportId = reader.uint64();
          break;
        case 3:
          message.verdict = reader.int32() as any;
          break;
        case 4:
          message.slashBps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveReport>): MsgResolveReport {
    const message = createBaseMsgResolveReport();
    message.controller = object.controller ?? "";
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    message.verdict = object.verdict ?? 0;
    message.slashBps = object.slashBps ?? 0;
    return message;
  },
  fromAmino(object: MsgResolveReportAmino): MsgResolveReport {
    const message = createBaseMsgResolveReport();
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.slash_bps !== undefined && object.slash_bps !== null) {
      message.slashBps = object.slash_bps;
    }
    return message;
  },
  toAmino(message: MsgResolveReport): MsgResolveReportAmino {
    const obj: any = {};
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.slash_bps = message.slashBps === 0 ? undefined : message.slashBps;
    return obj;
  },
  fromAminoMsg(object: MsgResolveReportAminoMsg): MsgResolveReport {
    return MsgResolveReport.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveReport): MsgResolveReportAminoMsg {
    return {
      type: "sparkdream/x/service/MsgResolveReport",
      value: MsgResolveReport.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveReportProtoMsg): MsgResolveReport {
    return MsgResolveReport.decode(message.value);
  },
  toProto(message: MsgResolveReport): Uint8Array {
    return MsgResolveReport.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveReport): MsgResolveReportProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgResolveReport",
      value: MsgResolveReport.encode(message).finish()
    };
  }
};
function createBaseMsgResolveReportResponse(): MsgResolveReportResponse {
  return {};
}
/**
 * @name MsgResolveReportResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportResponse
 */
export const MsgResolveReportResponse = {
  typeUrl: "/sparkdream.service.v1.MsgResolveReportResponse",
  encode(_: MsgResolveReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgResolveReportResponse>): MsgResolveReportResponse {
    const message = createBaseMsgResolveReportResponse();
    return message;
  },
  fromAmino(_: MsgResolveReportResponseAmino): MsgResolveReportResponse {
    const message = createBaseMsgResolveReportResponse();
    return message;
  },
  toAmino(_: MsgResolveReportResponse): MsgResolveReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveReportResponseAminoMsg): MsgResolveReportResponse {
    return MsgResolveReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveReportResponseProtoMsg): MsgResolveReportResponse {
    return MsgResolveReportResponse.decode(message.value);
  },
  toProto(message: MsgResolveReportResponse): Uint8Array {
    return MsgResolveReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveReportResponse): MsgResolveReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgResolveReportResponse",
      value: MsgResolveReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgContestSlash(): MsgContestSlash {
  return {
    operator: "",
    serviceType: "",
    reportId: BigInt(0)
  };
}
/**
 * MsgContestSlash escalates a RESOLVED_T1 report to the jury within
 * the contest window (§5.2). Escrow returns to bond eagerly.
 * @name MsgContestSlash
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgContestSlash
 */
export const MsgContestSlash = {
  typeUrl: "/sparkdream.service.v1.MsgContestSlash",
  aminoType: "sparkdream/x/service/MsgContestSlash",
  encode(message: MsgContestSlash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.reportId !== BigInt(0)) {
      writer.uint32(24).uint64(message.reportId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgContestSlash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgContestSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.reportId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgContestSlash>): MsgContestSlash {
    const message = createBaseMsgContestSlash();
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgContestSlashAmino): MsgContestSlash {
    const message = createBaseMsgContestSlash();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    return message;
  },
  toAmino(message: MsgContestSlash): MsgContestSlashAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgContestSlashAminoMsg): MsgContestSlash {
    return MsgContestSlash.fromAmino(object.value);
  },
  toAminoMsg(message: MsgContestSlash): MsgContestSlashAminoMsg {
    return {
      type: "sparkdream/x/service/MsgContestSlash",
      value: MsgContestSlash.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgContestSlashProtoMsg): MsgContestSlash {
    return MsgContestSlash.decode(message.value);
  },
  toProto(message: MsgContestSlash): Uint8Array {
    return MsgContestSlash.encode(message).finish();
  },
  toProtoMsg(message: MsgContestSlash): MsgContestSlashProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgContestSlash",
      value: MsgContestSlash.encode(message).finish()
    };
  }
};
function createBaseMsgContestSlashResponse(): MsgContestSlashResponse {
  return {};
}
/**
 * @name MsgContestSlashResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgContestSlashResponse
 */
export const MsgContestSlashResponse = {
  typeUrl: "/sparkdream.service.v1.MsgContestSlashResponse",
  encode(_: MsgContestSlashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgContestSlashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgContestSlashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgContestSlashResponse>): MsgContestSlashResponse {
    const message = createBaseMsgContestSlashResponse();
    return message;
  },
  fromAmino(_: MsgContestSlashResponseAmino): MsgContestSlashResponse {
    const message = createBaseMsgContestSlashResponse();
    return message;
  },
  toAmino(_: MsgContestSlashResponse): MsgContestSlashResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgContestSlashResponseAminoMsg): MsgContestSlashResponse {
    return MsgContestSlashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgContestSlashResponseProtoMsg): MsgContestSlashResponse {
    return MsgContestSlashResponse.decode(message.value);
  },
  toProto(message: MsgContestSlashResponse): Uint8Array {
    return MsgContestSlashResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgContestSlashResponse): MsgContestSlashResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgContestSlashResponse",
      value: MsgContestSlashResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveReportByJury(): MsgResolveReportByJury {
  return {
    juryAuthority: "",
    reportId: BigInt(0),
    verdict: 0,
    slashBps: 0,
    dissolve: false
  };
}
/**
 * MsgResolveReportByJury is the only path to apply a tier-2 slash.
 * Signer is the x/rep module account (§5.2 + §6.2); rejected from any
 * other signer with ErrUnauthorizedJuryAuthority.
 * @name MsgResolveReportByJury
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportByJury
 */
export const MsgResolveReportByJury = {
  typeUrl: "/sparkdream.service.v1.MsgResolveReportByJury",
  aminoType: "sparkdream/x/service/MsgResolveReportByJury",
  encode(message: MsgResolveReportByJury, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryAuthority !== "") {
      writer.uint32(10).string(message.juryAuthority);
    }
    if (message.reportId !== BigInt(0)) {
      writer.uint32(16).uint64(message.reportId);
    }
    if (message.verdict !== 0) {
      writer.uint32(24).int32(message.verdict);
    }
    if (message.slashBps !== 0) {
      writer.uint32(32).uint32(message.slashBps);
    }
    if (message.dissolve === true) {
      writer.uint32(40).bool(message.dissolve);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveReportByJury {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveReportByJury();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryAuthority = reader.string();
          break;
        case 2:
          message.reportId = reader.uint64();
          break;
        case 3:
          message.verdict = reader.int32() as any;
          break;
        case 4:
          message.slashBps = reader.uint32();
          break;
        case 5:
          message.dissolve = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveReportByJury>): MsgResolveReportByJury {
    const message = createBaseMsgResolveReportByJury();
    message.juryAuthority = object.juryAuthority ?? "";
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    message.verdict = object.verdict ?? 0;
    message.slashBps = object.slashBps ?? 0;
    message.dissolve = object.dissolve ?? false;
    return message;
  },
  fromAmino(object: MsgResolveReportByJuryAmino): MsgResolveReportByJury {
    const message = createBaseMsgResolveReportByJury();
    if (object.jury_authority !== undefined && object.jury_authority !== null) {
      message.juryAuthority = object.jury_authority;
    }
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.slash_bps !== undefined && object.slash_bps !== null) {
      message.slashBps = object.slash_bps;
    }
    if (object.dissolve !== undefined && object.dissolve !== null) {
      message.dissolve = object.dissolve;
    }
    return message;
  },
  toAmino(message: MsgResolveReportByJury): MsgResolveReportByJuryAmino {
    const obj: any = {};
    obj.jury_authority = message.juryAuthority === "" ? undefined : message.juryAuthority;
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.slash_bps = message.slashBps === 0 ? undefined : message.slashBps;
    obj.dissolve = message.dissolve === false ? undefined : message.dissolve;
    return obj;
  },
  fromAminoMsg(object: MsgResolveReportByJuryAminoMsg): MsgResolveReportByJury {
    return MsgResolveReportByJury.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveReportByJury): MsgResolveReportByJuryAminoMsg {
    return {
      type: "sparkdream/x/service/MsgResolveReportByJury",
      value: MsgResolveReportByJury.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveReportByJuryProtoMsg): MsgResolveReportByJury {
    return MsgResolveReportByJury.decode(message.value);
  },
  toProto(message: MsgResolveReportByJury): Uint8Array {
    return MsgResolveReportByJury.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveReportByJury): MsgResolveReportByJuryProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgResolveReportByJury",
      value: MsgResolveReportByJury.encode(message).finish()
    };
  }
};
function createBaseMsgResolveReportByJuryResponse(): MsgResolveReportByJuryResponse {
  return {};
}
/**
 * @name MsgResolveReportByJuryResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgResolveReportByJuryResponse
 */
export const MsgResolveReportByJuryResponse = {
  typeUrl: "/sparkdream.service.v1.MsgResolveReportByJuryResponse",
  encode(_: MsgResolveReportByJuryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveReportByJuryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveReportByJuryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgResolveReportByJuryResponse>): MsgResolveReportByJuryResponse {
    const message = createBaseMsgResolveReportByJuryResponse();
    return message;
  },
  fromAmino(_: MsgResolveReportByJuryResponseAmino): MsgResolveReportByJuryResponse {
    const message = createBaseMsgResolveReportByJuryResponse();
    return message;
  },
  toAmino(_: MsgResolveReportByJuryResponse): MsgResolveReportByJuryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveReportByJuryResponseAminoMsg): MsgResolveReportByJuryResponse {
    return MsgResolveReportByJuryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveReportByJuryResponseProtoMsg): MsgResolveReportByJuryResponse {
    return MsgResolveReportByJuryResponse.decode(message.value);
  },
  toProto(message: MsgResolveReportByJuryResponse): Uint8Array {
    return MsgResolveReportByJuryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveReportByJuryResponse): MsgResolveReportByJuryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgResolveReportByJuryResponse",
      value: MsgResolveReportByJuryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOpenControllerTransferCase(): MsgOpenControllerTransferCase {
  return {
    opener: "",
    operator: "",
    serviceType: "",
    proposedNewController: "",
    reason: ""
  };
}
/**
 * MsgOpenControllerTransferCase opens a jury case to transfer the
 * operator's controller to a new x/commons Group (§5.4). At most one
 * open case per (operator, service_type).
 * @name MsgOpenControllerTransferCase
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgOpenControllerTransferCase
 */
export const MsgOpenControllerTransferCase = {
  typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCase",
  aminoType: "sparkdream/x/service/MsgOpenControllerTransferCase",
  encode(message: MsgOpenControllerTransferCase, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.opener !== "") {
      writer.uint32(10).string(message.opener);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    if (message.proposedNewController !== "") {
      writer.uint32(34).string(message.proposedNewController);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOpenControllerTransferCase {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenControllerTransferCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opener = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
          message.proposedNewController = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgOpenControllerTransferCase>): MsgOpenControllerTransferCase {
    const message = createBaseMsgOpenControllerTransferCase();
    message.opener = object.opener ?? "";
    message.operator = object.operator ?? "";
    message.serviceType = object.serviceType ?? "";
    message.proposedNewController = object.proposedNewController ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgOpenControllerTransferCaseAmino): MsgOpenControllerTransferCase {
    const message = createBaseMsgOpenControllerTransferCase();
    if (object.opener !== undefined && object.opener !== null) {
      message.opener = object.opener;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.proposed_new_controller !== undefined && object.proposed_new_controller !== null) {
      message.proposedNewController = object.proposed_new_controller;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgOpenControllerTransferCase): MsgOpenControllerTransferCaseAmino {
    const obj: any = {};
    obj.opener = message.opener === "" ? undefined : message.opener;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.proposed_new_controller = message.proposedNewController === "" ? undefined : message.proposedNewController;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgOpenControllerTransferCaseAminoMsg): MsgOpenControllerTransferCase {
    return MsgOpenControllerTransferCase.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOpenControllerTransferCase): MsgOpenControllerTransferCaseAminoMsg {
    return {
      type: "sparkdream/x/service/MsgOpenControllerTransferCase",
      value: MsgOpenControllerTransferCase.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOpenControllerTransferCaseProtoMsg): MsgOpenControllerTransferCase {
    return MsgOpenControllerTransferCase.decode(message.value);
  },
  toProto(message: MsgOpenControllerTransferCase): Uint8Array {
    return MsgOpenControllerTransferCase.encode(message).finish();
  },
  toProtoMsg(message: MsgOpenControllerTransferCase): MsgOpenControllerTransferCaseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCase",
      value: MsgOpenControllerTransferCase.encode(message).finish()
    };
  }
};
function createBaseMsgOpenControllerTransferCaseResponse(): MsgOpenControllerTransferCaseResponse {
  return {
    juryCaseId: BigInt(0)
  };
}
/**
 * @name MsgOpenControllerTransferCaseResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgOpenControllerTransferCaseResponse
 */
export const MsgOpenControllerTransferCaseResponse = {
  typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCaseResponse",
  encode(message: MsgOpenControllerTransferCaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryCaseId !== BigInt(0)) {
      writer.uint32(8).uint64(message.juryCaseId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOpenControllerTransferCaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenControllerTransferCaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryCaseId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgOpenControllerTransferCaseResponse>): MsgOpenControllerTransferCaseResponse {
    const message = createBaseMsgOpenControllerTransferCaseResponse();
    message.juryCaseId = object.juryCaseId !== undefined && object.juryCaseId !== null ? BigInt(object.juryCaseId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgOpenControllerTransferCaseResponseAmino): MsgOpenControllerTransferCaseResponse {
    const message = createBaseMsgOpenControllerTransferCaseResponse();
    if (object.jury_case_id !== undefined && object.jury_case_id !== null) {
      message.juryCaseId = BigInt(object.jury_case_id);
    }
    return message;
  },
  toAmino(message: MsgOpenControllerTransferCaseResponse): MsgOpenControllerTransferCaseResponseAmino {
    const obj: any = {};
    obj.jury_case_id = message.juryCaseId !== BigInt(0) ? message.juryCaseId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOpenControllerTransferCaseResponseAminoMsg): MsgOpenControllerTransferCaseResponse {
    return MsgOpenControllerTransferCaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenControllerTransferCaseResponseProtoMsg): MsgOpenControllerTransferCaseResponse {
    return MsgOpenControllerTransferCaseResponse.decode(message.value);
  },
  toProto(message: MsgOpenControllerTransferCaseResponse): Uint8Array {
    return MsgOpenControllerTransferCaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOpenControllerTransferCaseResponse): MsgOpenControllerTransferCaseResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgOpenControllerTransferCaseResponse",
      value: MsgOpenControllerTransferCaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFinalizeControllerTransfer(): MsgFinalizeControllerTransfer {
  return {
    juryAuthority: "",
    juryCaseId: BigInt(0),
    verdict: 0,
    newController: ""
  };
}
/**
 * MsgFinalizeControllerTransfer applies the jury verdict (ACCEPT or
 * REJECT) on a controller-transfer case. Signer is the x/rep module
 * account (§5.4 + §6.2). Re-checks Group eligibility at apply time.
 * @name MsgFinalizeControllerTransfer
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgFinalizeControllerTransfer
 */
export const MsgFinalizeControllerTransfer = {
  typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransfer",
  aminoType: "sparkdream/x/service/MsgFinalizeControllerTransfer",
  encode(message: MsgFinalizeControllerTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryAuthority !== "") {
      writer.uint32(10).string(message.juryAuthority);
    }
    if (message.juryCaseId !== BigInt(0)) {
      writer.uint32(16).uint64(message.juryCaseId);
    }
    if (message.verdict !== 0) {
      writer.uint32(24).int32(message.verdict);
    }
    if (message.newController !== "") {
      writer.uint32(34).string(message.newController);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFinalizeControllerTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeControllerTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryAuthority = reader.string();
          break;
        case 2:
          message.juryCaseId = reader.uint64();
          break;
        case 3:
          message.verdict = reader.int32() as any;
          break;
        case 4:
          message.newController = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFinalizeControllerTransfer>): MsgFinalizeControllerTransfer {
    const message = createBaseMsgFinalizeControllerTransfer();
    message.juryAuthority = object.juryAuthority ?? "";
    message.juryCaseId = object.juryCaseId !== undefined && object.juryCaseId !== null ? BigInt(object.juryCaseId.toString()) : BigInt(0);
    message.verdict = object.verdict ?? 0;
    message.newController = object.newController ?? "";
    return message;
  },
  fromAmino(object: MsgFinalizeControllerTransferAmino): MsgFinalizeControllerTransfer {
    const message = createBaseMsgFinalizeControllerTransfer();
    if (object.jury_authority !== undefined && object.jury_authority !== null) {
      message.juryAuthority = object.jury_authority;
    }
    if (object.jury_case_id !== undefined && object.jury_case_id !== null) {
      message.juryCaseId = BigInt(object.jury_case_id);
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.new_controller !== undefined && object.new_controller !== null) {
      message.newController = object.new_controller;
    }
    return message;
  },
  toAmino(message: MsgFinalizeControllerTransfer): MsgFinalizeControllerTransferAmino {
    const obj: any = {};
    obj.jury_authority = message.juryAuthority === "" ? undefined : message.juryAuthority;
    obj.jury_case_id = message.juryCaseId !== BigInt(0) ? message.juryCaseId?.toString() : undefined;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.new_controller = message.newController === "" ? undefined : message.newController;
    return obj;
  },
  fromAminoMsg(object: MsgFinalizeControllerTransferAminoMsg): MsgFinalizeControllerTransfer {
    return MsgFinalizeControllerTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFinalizeControllerTransfer): MsgFinalizeControllerTransferAminoMsg {
    return {
      type: "sparkdream/x/service/MsgFinalizeControllerTransfer",
      value: MsgFinalizeControllerTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFinalizeControllerTransferProtoMsg): MsgFinalizeControllerTransfer {
    return MsgFinalizeControllerTransfer.decode(message.value);
  },
  toProto(message: MsgFinalizeControllerTransfer): Uint8Array {
    return MsgFinalizeControllerTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgFinalizeControllerTransfer): MsgFinalizeControllerTransferProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransfer",
      value: MsgFinalizeControllerTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgFinalizeControllerTransferResponse(): MsgFinalizeControllerTransferResponse {
  return {};
}
/**
 * @name MsgFinalizeControllerTransferResponse
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.MsgFinalizeControllerTransferResponse
 */
export const MsgFinalizeControllerTransferResponse = {
  typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransferResponse",
  encode(_: MsgFinalizeControllerTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFinalizeControllerTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeControllerTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgFinalizeControllerTransferResponse>): MsgFinalizeControllerTransferResponse {
    const message = createBaseMsgFinalizeControllerTransferResponse();
    return message;
  },
  fromAmino(_: MsgFinalizeControllerTransferResponseAmino): MsgFinalizeControllerTransferResponse {
    const message = createBaseMsgFinalizeControllerTransferResponse();
    return message;
  },
  toAmino(_: MsgFinalizeControllerTransferResponse): MsgFinalizeControllerTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFinalizeControllerTransferResponseAminoMsg): MsgFinalizeControllerTransferResponse {
    return MsgFinalizeControllerTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFinalizeControllerTransferResponseProtoMsg): MsgFinalizeControllerTransferResponse {
    return MsgFinalizeControllerTransferResponse.decode(message.value);
  },
  toProto(message: MsgFinalizeControllerTransferResponse): Uint8Array {
    return MsgFinalizeControllerTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFinalizeControllerTransferResponse): MsgFinalizeControllerTransferResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.MsgFinalizeControllerTransferResponse",
      value: MsgFinalizeControllerTransferResponse.encode(message).finish()
    };
  }
};