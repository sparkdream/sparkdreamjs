//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * ProofDomain identifies which Merkle tree the ZK proof targets.
 * All anonymous operations use the trust tree (leaves = MiMC(zk_pub_key, trust_level)).
 * The unified ShieldCircuit hides the exact trust level — only proves >= minimum.
 */
export enum ProofDomain {
  PROOF_DOMAIN_UNSPECIFIED = 0,
  PROOF_DOMAIN_TRUST_TREE = 1,
  UNRECOGNIZED = -1,
}
export const ProofDomainAmino = ProofDomain;
export function proofDomainFromJSON(object: any): ProofDomain {
  switch (object) {
    case 0:
    case "PROOF_DOMAIN_UNSPECIFIED":
      return ProofDomain.PROOF_DOMAIN_UNSPECIFIED;
    case 1:
    case "PROOF_DOMAIN_TRUST_TREE":
      return ProofDomain.PROOF_DOMAIN_TRUST_TREE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProofDomain.UNRECOGNIZED;
  }
}
export function proofDomainToJSON(object: ProofDomain): string {
  switch (object) {
    case ProofDomain.PROOF_DOMAIN_UNSPECIFIED:
      return "PROOF_DOMAIN_UNSPECIFIED";
    case ProofDomain.PROOF_DOMAIN_TRUST_TREE:
      return "PROOF_DOMAIN_TRUST_TREE";
    case ProofDomain.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** NullifierScopeType determines nullifier uniqueness granularity. */
export enum NullifierScopeType {
  /** NULLIFIER_SCOPE_EPOCH - Scope = current epoch (one op per epoch) */
  NULLIFIER_SCOPE_EPOCH = 0,
  /** NULLIFIER_SCOPE_MESSAGE_FIELD - Scope = extracted from inner message (e.g. post_id for replies) */
  NULLIFIER_SCOPE_MESSAGE_FIELD = 1,
  /** NULLIFIER_SCOPE_GLOBAL - No scoping (nullifier is globally unique) */
  NULLIFIER_SCOPE_GLOBAL = 2,
  UNRECOGNIZED = -1,
}
export const NullifierScopeTypeAmino = NullifierScopeType;
export function nullifierScopeTypeFromJSON(object: any): NullifierScopeType {
  switch (object) {
    case 0:
    case "NULLIFIER_SCOPE_EPOCH":
      return NullifierScopeType.NULLIFIER_SCOPE_EPOCH;
    case 1:
    case "NULLIFIER_SCOPE_MESSAGE_FIELD":
      return NullifierScopeType.NULLIFIER_SCOPE_MESSAGE_FIELD;
    case 2:
    case "NULLIFIER_SCOPE_GLOBAL":
      return NullifierScopeType.NULLIFIER_SCOPE_GLOBAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullifierScopeType.UNRECOGNIZED;
  }
}
export function nullifierScopeTypeToJSON(object: NullifierScopeType): string {
  switch (object) {
    case NullifierScopeType.NULLIFIER_SCOPE_EPOCH:
      return "NULLIFIER_SCOPE_EPOCH";
    case NullifierScopeType.NULLIFIER_SCOPE_MESSAGE_FIELD:
      return "NULLIFIER_SCOPE_MESSAGE_FIELD";
    case NullifierScopeType.NULLIFIER_SCOPE_GLOBAL:
      return "NULLIFIER_SCOPE_GLOBAL";
    case NullifierScopeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ShieldBatchMode controls which execution modes an operation supports. */
export enum ShieldBatchMode {
  /** SHIELD_BATCH_MODE_IMMEDIATE_ONLY - Only immediate execution allowed */
  SHIELD_BATCH_MODE_IMMEDIATE_ONLY = 0,
  /** SHIELD_BATCH_MODE_ENCRYPTED_ONLY - Only encrypted batch execution allowed */
  SHIELD_BATCH_MODE_ENCRYPTED_ONLY = 1,
  /** SHIELD_BATCH_MODE_EITHER - User chooses per-submission */
  SHIELD_BATCH_MODE_EITHER = 2,
  UNRECOGNIZED = -1,
}
export const ShieldBatchModeAmino = ShieldBatchMode;
export function shieldBatchModeFromJSON(object: any): ShieldBatchMode {
  switch (object) {
    case 0:
    case "SHIELD_BATCH_MODE_IMMEDIATE_ONLY":
      return ShieldBatchMode.SHIELD_BATCH_MODE_IMMEDIATE_ONLY;
    case 1:
    case "SHIELD_BATCH_MODE_ENCRYPTED_ONLY":
      return ShieldBatchMode.SHIELD_BATCH_MODE_ENCRYPTED_ONLY;
    case 2:
    case "SHIELD_BATCH_MODE_EITHER":
      return ShieldBatchMode.SHIELD_BATCH_MODE_EITHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ShieldBatchMode.UNRECOGNIZED;
  }
}
export function shieldBatchModeToJSON(object: ShieldBatchMode): string {
  switch (object) {
    case ShieldBatchMode.SHIELD_BATCH_MODE_IMMEDIATE_ONLY:
      return "SHIELD_BATCH_MODE_IMMEDIATE_ONLY";
    case ShieldBatchMode.SHIELD_BATCH_MODE_ENCRYPTED_ONLY:
      return "SHIELD_BATCH_MODE_ENCRYPTED_ONLY";
    case ShieldBatchMode.SHIELD_BATCH_MODE_EITHER:
      return "SHIELD_BATCH_MODE_EITHER";
    case ShieldBatchMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ShieldExecMode selects the execution mode for a shielded operation. */
export enum ShieldExecMode {
  SHIELD_EXEC_IMMEDIATE = 0,
  SHIELD_EXEC_ENCRYPTED_BATCH = 1,
  UNRECOGNIZED = -1,
}
export const ShieldExecModeAmino = ShieldExecMode;
export function shieldExecModeFromJSON(object: any): ShieldExecMode {
  switch (object) {
    case 0:
    case "SHIELD_EXEC_IMMEDIATE":
      return ShieldExecMode.SHIELD_EXEC_IMMEDIATE;
    case 1:
    case "SHIELD_EXEC_ENCRYPTED_BATCH":
      return ShieldExecMode.SHIELD_EXEC_ENCRYPTED_BATCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ShieldExecMode.UNRECOGNIZED;
  }
}
export function shieldExecModeToJSON(object: ShieldExecMode): string {
  switch (object) {
    case ShieldExecMode.SHIELD_EXEC_IMMEDIATE:
      return "SHIELD_EXEC_IMMEDIATE";
    case ShieldExecMode.SHIELD_EXEC_ENCRYPTED_BATCH:
      return "SHIELD_EXEC_ENCRYPTED_BATCH";
    case ShieldExecMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DKGPhase tracks the current phase of the distributed key generation ceremony. */
export enum DKGPhase {
  /** DKG_PHASE_INACTIVE - No DKG running (not enough validators, or TLE not needed yet) */
  DKG_PHASE_INACTIVE = 0,
  /** DKG_PHASE_REGISTERING - Accepting BN256 G1 encryption key registrations from validators */
  DKG_PHASE_REGISTERING = 1,
  /** DKG_PHASE_CONTRIBUTING - Key registration closed; accepting Feldman DKG contributions */
  DKG_PHASE_CONTRIBUTING = 2,
  /** DKG_PHASE_ACTIVE - DKG complete, master key available, encrypted batch enabled */
  DKG_PHASE_ACTIVE = 3,
  UNRECOGNIZED = -1,
}
export const DKGPhaseAmino = DKGPhase;
export function dKGPhaseFromJSON(object: any): DKGPhase {
  switch (object) {
    case 0:
    case "DKG_PHASE_INACTIVE":
      return DKGPhase.DKG_PHASE_INACTIVE;
    case 1:
    case "DKG_PHASE_REGISTERING":
      return DKGPhase.DKG_PHASE_REGISTERING;
    case 2:
    case "DKG_PHASE_CONTRIBUTING":
      return DKGPhase.DKG_PHASE_CONTRIBUTING;
    case 3:
    case "DKG_PHASE_ACTIVE":
      return DKGPhase.DKG_PHASE_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DKGPhase.UNRECOGNIZED;
  }
}
export function dKGPhaseToJSON(object: DKGPhase): string {
  switch (object) {
    case DKGPhase.DKG_PHASE_INACTIVE:
      return "DKG_PHASE_INACTIVE";
    case DKGPhase.DKG_PHASE_REGISTERING:
      return "DKG_PHASE_REGISTERING";
    case DKGPhase.DKG_PHASE_CONTRIBUTING:
      return "DKG_PHASE_CONTRIBUTING";
    case DKGPhase.DKG_PHASE_ACTIVE:
      return "DKG_PHASE_ACTIVE";
    case DKGPhase.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ShieldedOpRegistration defines a registered shielded operation.
 * @name ShieldedOpRegistration
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldedOpRegistration
 */
export interface ShieldedOpRegistration {
  /**
   * Full protobuf message type URL (e.g. "/sparkdream.blog.v1.MsgCreatePost")
   */
  messageTypeUrl: string;
  /**
   * Which proof domain is required
   */
  proofDomain: ProofDomain;
  /**
   * Minimum trust level required (0 = any member)
   */
  minTrustLevel: number;
  /**
   * Nullifier domain (scopes nullifiers to prevent cross-operation reuse)
   */
  nullifierDomain: number;
  /**
   * How the nullifier scope is determined
   */
  nullifierScopeType: NullifierScopeType;
  /**
   * Whether this operation is currently active
   */
  active: boolean;
  /**
   * Which execution modes this operation supports
   */
  batchMode: ShieldBatchMode;
  /**
   * Proto field name for scope extraction when nullifier_scope_type = MESSAGE_FIELD
   * e.g. "post_id", "proposal_id", "collection_id"
   * Must refer to a uint64 field in the inner message
   */
  scopeFieldPath: string;
}
export interface ShieldedOpRegistrationProtoMsg {
  typeUrl: "/sparkdream.shield.v1.ShieldedOpRegistration";
  value: Uint8Array;
}
/**
 * ShieldedOpRegistration defines a registered shielded operation.
 * @name ShieldedOpRegistrationAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldedOpRegistration
 */
export interface ShieldedOpRegistrationAmino {
  /**
   * Full protobuf message type URL (e.g. "/sparkdream.blog.v1.MsgCreatePost")
   */
  message_type_url?: string;
  /**
   * Which proof domain is required
   */
  proof_domain?: ProofDomain;
  /**
   * Minimum trust level required (0 = any member)
   */
  min_trust_level?: number;
  /**
   * Nullifier domain (scopes nullifiers to prevent cross-operation reuse)
   */
  nullifier_domain?: number;
  /**
   * How the nullifier scope is determined
   */
  nullifier_scope_type?: NullifierScopeType;
  /**
   * Whether this operation is currently active
   */
  active?: boolean;
  /**
   * Which execution modes this operation supports
   */
  batch_mode?: ShieldBatchMode;
  /**
   * Proto field name for scope extraction when nullifier_scope_type = MESSAGE_FIELD
   * e.g. "post_id", "proposal_id", "collection_id"
   * Must refer to a uint64 field in the inner message
   */
  scope_field_path?: string;
}
export interface ShieldedOpRegistrationAminoMsg {
  type: "/sparkdream.shield.v1.ShieldedOpRegistration";
  value: ShieldedOpRegistrationAmino;
}
/**
 * UsedNullifier records a nullifier that has been consumed.
 * Key: domain (uint32) + scope (uint64) + nullifier_hex (string)
 * @name UsedNullifier
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.UsedNullifier
 */
export interface UsedNullifier {
  domain: number;
  scope: bigint;
  nullifierHex: string;
  usedAtHeight: bigint;
}
export interface UsedNullifierProtoMsg {
  typeUrl: "/sparkdream.shield.v1.UsedNullifier";
  value: Uint8Array;
}
/**
 * UsedNullifier records a nullifier that has been consumed.
 * Key: domain (uint32) + scope (uint64) + nullifier_hex (string)
 * @name UsedNullifierAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.UsedNullifier
 */
export interface UsedNullifierAmino {
  domain?: number;
  scope?: string;
  nullifier_hex?: string;
  used_at_height?: string;
}
export interface UsedNullifierAminoMsg {
  type: "/sparkdream.shield.v1.UsedNullifier";
  value: UsedNullifierAmino;
}
/**
 * DayFunding tracks funding per day to enforce the daily cap.
 * Day is calculated as block_height / 14400 (at 6s/block = 1 day).
 * @name DayFunding
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DayFunding
 */
export interface DayFunding {
  day: bigint;
  amountFunded: string;
}
export interface DayFundingProtoMsg {
  typeUrl: "/sparkdream.shield.v1.DayFunding";
  value: Uint8Array;
}
/**
 * DayFunding tracks funding per day to enforce the daily cap.
 * Day is calculated as block_height / 14400 (at 6s/block = 1 day).
 * @name DayFundingAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DayFunding
 */
export interface DayFundingAmino {
  day?: string;
  amount_funded?: string;
}
export interface DayFundingAminoMsg {
  type: "/sparkdream.shield.v1.DayFunding";
  value: DayFundingAmino;
}
/**
 * PendingShieldedOp is stored in queue until the shield epoch boundary triggers batch execution.
 * @name PendingShieldedOp
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.PendingShieldedOp
 */
export interface PendingShieldedOp {
  id: bigint;
  targetEpoch: bigint;
  nullifier: Uint8Array;
  merkleRoot: Uint8Array;
  proofDomain: ProofDomain;
  minTrustLevel: number;
  encryptedPayload: Uint8Array;
  submittedAtHeight: bigint;
  submittedAtEpoch: bigint;
}
export interface PendingShieldedOpProtoMsg {
  typeUrl: "/sparkdream.shield.v1.PendingShieldedOp";
  value: Uint8Array;
}
/**
 * PendingShieldedOp is stored in queue until the shield epoch boundary triggers batch execution.
 * @name PendingShieldedOpAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.PendingShieldedOp
 */
export interface PendingShieldedOpAmino {
  id?: string;
  target_epoch?: string;
  nullifier?: string;
  merkle_root?: string;
  proof_domain?: ProofDomain;
  min_trust_level?: number;
  encrypted_payload?: string;
  submitted_at_height?: string;
  submitted_at_epoch?: string;
}
export interface PendingShieldedOpAminoMsg {
  type: "/sparkdream.shield.v1.PendingShieldedOp";
  value: PendingShieldedOpAmino;
}
/**
 * ShieldEpochState tracks the current shield epoch and decryption key availability.
 * @name ShieldEpochState
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldEpochState
 */
export interface ShieldEpochState {
  currentEpoch: bigint;
  epochStartHeight: bigint;
  decryptionKeyAvailable: boolean;
}
export interface ShieldEpochStateProtoMsg {
  typeUrl: "/sparkdream.shield.v1.ShieldEpochState";
  value: Uint8Array;
}
/**
 * ShieldEpochState tracks the current shield epoch and decryption key availability.
 * @name ShieldEpochStateAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldEpochState
 */
export interface ShieldEpochStateAmino {
  current_epoch?: string;
  epoch_start_height?: string;
  decryption_key_available?: boolean;
}
export interface ShieldEpochStateAminoMsg {
  type: "/sparkdream.shield.v1.ShieldEpochState";
  value: ShieldEpochStateAmino;
}
/**
 * ShieldEpochDecryptionKey is the reconstructed epoch decryption key.
 * @name ShieldEpochDecryptionKey
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldEpochDecryptionKey
 */
export interface ShieldEpochDecryptionKey {
  epoch: bigint;
  /**
   * BN256 G1 point (reconstructed epoch secret)
   */
  decryptionKey: Uint8Array;
  reconstructedAtHeight: bigint;
}
export interface ShieldEpochDecryptionKeyProtoMsg {
  typeUrl: "/sparkdream.shield.v1.ShieldEpochDecryptionKey";
  value: Uint8Array;
}
/**
 * ShieldEpochDecryptionKey is the reconstructed epoch decryption key.
 * @name ShieldEpochDecryptionKeyAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldEpochDecryptionKey
 */
export interface ShieldEpochDecryptionKeyAmino {
  epoch?: string;
  /**
   * BN256 G1 point (reconstructed epoch secret)
   */
  decryption_key?: string;
  reconstructed_at_height?: string;
}
export interface ShieldEpochDecryptionKeyAminoMsg {
  type: "/sparkdream.shield.v1.ShieldEpochDecryptionKey";
  value: ShieldEpochDecryptionKeyAmino;
}
/**
 * ShieldDecryptionShare is a validator's decryption share for a shield epoch.
 * @name ShieldDecryptionShare
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldDecryptionShare
 */
export interface ShieldDecryptionShare {
  epoch: bigint;
  validator: string;
  /**
   * epoch-derived share: masterShare_i * H_to_G1(epoch)
   */
  share: Uint8Array;
}
export interface ShieldDecryptionShareProtoMsg {
  typeUrl: "/sparkdream.shield.v1.ShieldDecryptionShare";
  value: Uint8Array;
}
/**
 * ShieldDecryptionShare is a validator's decryption share for a shield epoch.
 * @name ShieldDecryptionShareAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldDecryptionShare
 */
export interface ShieldDecryptionShareAmino {
  epoch?: string;
  validator?: string;
  /**
   * epoch-derived share: masterShare_i * H_to_G1(epoch)
   */
  share?: string;
}
export interface ShieldDecryptionShareAminoMsg {
  type: "/sparkdream.shield.v1.ShieldDecryptionShare";
  value: ShieldDecryptionShareAmino;
}
/**
 * TLEKeySet stores the master public key and validator shares from the DKG ceremony.
 * @name TLEKeySet
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEKeySet
 */
export interface TLEKeySet {
  /**
   * BN256 G1 point
   */
  masterPublicKey: Uint8Array;
  /**
   * e.g. 2
   */
  thresholdNumerator: bigint;
  /**
   * e.g. 3 -> 2/3 threshold
   */
  thresholdDenominator: bigint;
  validatorShares: TLEValidatorPublicShare[];
  createdAtHeight: bigint;
}
export interface TLEKeySetProtoMsg {
  typeUrl: "/sparkdream.shield.v1.TLEKeySet";
  value: Uint8Array;
}
/**
 * TLEKeySet stores the master public key and validator shares from the DKG ceremony.
 * @name TLEKeySetAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEKeySet
 */
export interface TLEKeySetAmino {
  /**
   * BN256 G1 point
   */
  master_public_key?: string;
  /**
   * e.g. 2
   */
  threshold_numerator?: string;
  /**
   * e.g. 3 -> 2/3 threshold
   */
  threshold_denominator?: string;
  validator_shares?: TLEValidatorPublicShareAmino[];
  created_at_height?: string;
}
export interface TLEKeySetAminoMsg {
  type: "/sparkdream.shield.v1.TLEKeySet";
  value: TLEKeySetAmino;
}
/**
 * TLEValidatorPublicShare stores a validator's public key share from the DKG.
 * @name TLEValidatorPublicShare
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEValidatorPublicShare
 */
export interface TLEValidatorPublicShare {
  validatorAddress: string;
  /**
   * BN256 G1 point
   */
  publicShare: Uint8Array;
  /**
   * Shamir share index
   */
  shareIndex: number;
  /**
   * BN256 G2 point (for pairing-based decryption share verification)
   */
  publicShareG2: Uint8Array;
}
export interface TLEValidatorPublicShareProtoMsg {
  typeUrl: "/sparkdream.shield.v1.TLEValidatorPublicShare";
  value: Uint8Array;
}
/**
 * TLEValidatorPublicShare stores a validator's public key share from the DKG.
 * @name TLEValidatorPublicShareAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEValidatorPublicShare
 */
export interface TLEValidatorPublicShareAmino {
  validator_address?: string;
  /**
   * BN256 G1 point
   */
  public_share?: string;
  /**
   * Shamir share index
   */
  share_index?: number;
  /**
   * BN256 G2 point (for pairing-based decryption share verification)
   */
  public_share_g2?: string;
}
export interface TLEValidatorPublicShareAminoMsg {
  type: "/sparkdream.shield.v1.TLEValidatorPublicShare";
  value: TLEValidatorPublicShareAmino;
}
/**
 * DKGState tracks the current state of the on-chain Feldman DKG ceremony.
 * @name DKGState
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGState
 */
export interface DKGState {
  /**
   * Monotonically increasing round number (new round = new ceremony)
   */
  round: bigint;
  /**
   * Current phase of the DKG
   */
  phase: DKGPhase;
  /**
   * Block height when REGISTERING phase started
   */
  openAtHeight: bigint;
  /**
   * Block height when REGISTERING phase ends and CONTRIBUTING starts
   */
  registrationDeadline: bigint;
  /**
   * Block height when CONTRIBUTING phase ends
   */
  contributionDeadline: bigint;
  /**
   * Threshold ratio for this DKG round
   */
  thresholdNumerator: bigint;
  thresholdDenominator: bigint;
  /**
   * Snapshot of bonded validator addresses at DKG start
   */
  expectedValidators: string[];
  /**
   * Number of contributions received so far
   */
  contributionsReceived: bigint;
}
export interface DKGStateProtoMsg {
  typeUrl: "/sparkdream.shield.v1.DKGState";
  value: Uint8Array;
}
/**
 * DKGState tracks the current state of the on-chain Feldman DKG ceremony.
 * @name DKGStateAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGState
 */
export interface DKGStateAmino {
  /**
   * Monotonically increasing round number (new round = new ceremony)
   */
  round?: string;
  /**
   * Current phase of the DKG
   */
  phase?: DKGPhase;
  /**
   * Block height when REGISTERING phase started
   */
  open_at_height?: string;
  /**
   * Block height when REGISTERING phase ends and CONTRIBUTING starts
   */
  registration_deadline?: string;
  /**
   * Block height when CONTRIBUTING phase ends
   */
  contribution_deadline?: string;
  /**
   * Threshold ratio for this DKG round
   */
  threshold_numerator?: string;
  threshold_denominator?: string;
  /**
   * Snapshot of bonded validator addresses at DKG start
   */
  expected_validators?: string[];
  /**
   * Number of contributions received so far
   */
  contributions_received?: string;
}
export interface DKGStateAminoMsg {
  type: "/sparkdream.shield.v1.DKGState";
  value: DKGStateAmino;
}
/**
 * DKGContribution is a validator's Feldman DKG contribution.
 * @name DKGContribution
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGContribution
 */
export interface DKGContribution {
  /**
   * Validator who submitted this contribution
   */
  validatorAddress: string;
  /**
   * DKG round number (must match DKGState.round)
   */
  round: bigint;
  /**
   * Feldman commitments: [a₀*G, a₁*G, ..., a_{t-1}*G]
   * where a_k are the polynomial coefficients and G is the BN256 G1 generator.
   * Length must equal the threshold for this round.
   */
  feldmanCommitments: Uint8Array[];
  /**
   * ECIES-encrypted polynomial evaluations, one per other expected validator.
   * Target validator decrypts to get p_i(j) and verifies against commitments.
   */
  encryptedEvaluations: EncryptedEvaluation[];
  /**
   * Schnorr proof of possession over validator address using a₀ as the secret key.
   * Proves knowledge of the constant term (the validator's secret contribution).
   */
  proofOfPossession: Uint8Array;
  /**
   * G2 Feldman commitments: [a₀*G2, a₁*G2, ..., a_{t-1}*G2]
   * Dual representation for pairing-based decryption share verification.
   * Must have the same length as feldman_commitments and encode the same scalars.
   */
  feldmanCommitmentsG2: Uint8Array[];
}
export interface DKGContributionProtoMsg {
  typeUrl: "/sparkdream.shield.v1.DKGContribution";
  value: Uint8Array;
}
/**
 * DKGContribution is a validator's Feldman DKG contribution.
 * @name DKGContributionAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGContribution
 */
export interface DKGContributionAmino {
  /**
   * Validator who submitted this contribution
   */
  validator_address?: string;
  /**
   * DKG round number (must match DKGState.round)
   */
  round?: string;
  /**
   * Feldman commitments: [a₀*G, a₁*G, ..., a_{t-1}*G]
   * where a_k are the polynomial coefficients and G is the BN256 G1 generator.
   * Length must equal the threshold for this round.
   */
  feldman_commitments?: string[];
  /**
   * ECIES-encrypted polynomial evaluations, one per other expected validator.
   * Target validator decrypts to get p_i(j) and verifies against commitments.
   */
  encrypted_evaluations?: EncryptedEvaluationAmino[];
  /**
   * Schnorr proof of possession over validator address using a₀ as the secret key.
   * Proves knowledge of the constant term (the validator's secret contribution).
   */
  proof_of_possession?: string;
  /**
   * G2 Feldman commitments: [a₀*G2, a₁*G2, ..., a_{t-1}*G2]
   * Dual representation for pairing-based decryption share verification.
   * Must have the same length as feldman_commitments and encode the same scalars.
   */
  feldman_commitments_g2?: string[];
}
export interface DKGContributionAminoMsg {
  type: "/sparkdream.shield.v1.DKGContribution";
  value: DKGContributionAmino;
}
/**
 * EncryptedEvaluation is an ECIES-encrypted polynomial evaluation for a target validator.
 * @name EncryptedEvaluation
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.EncryptedEvaluation
 */
export interface EncryptedEvaluation {
  /**
   * 1-based index of the target validator in DKGState.expected_validators
   */
  targetIndex: number;
  /**
   * ECIES ciphertext: Enc(target_pub_key, p_i(target_index))
   */
  ciphertext: Uint8Array;
}
export interface EncryptedEvaluationProtoMsg {
  typeUrl: "/sparkdream.shield.v1.EncryptedEvaluation";
  value: Uint8Array;
}
/**
 * EncryptedEvaluation is an ECIES-encrypted polynomial evaluation for a target validator.
 * @name EncryptedEvaluationAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.EncryptedEvaluation
 */
export interface EncryptedEvaluationAmino {
  /**
   * 1-based index of the target validator in DKGState.expected_validators
   */
  target_index?: number;
  /**
   * ECIES ciphertext: Enc(target_pub_key, p_i(target_index))
   */
  ciphertext?: string;
}
export interface EncryptedEvaluationAminoMsg {
  type: "/sparkdream.shield.v1.EncryptedEvaluation";
  value: EncryptedEvaluationAmino;
}
/**
 * DKGContributionEntry is a genesis helper for exporting DKG contributions.
 * @name DKGContributionEntry
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGContributionEntry
 */
export interface DKGContributionEntry {
  validatorAddress: string;
  contribution: DKGContribution;
}
export interface DKGContributionEntryProtoMsg {
  typeUrl: "/sparkdream.shield.v1.DKGContributionEntry";
  value: Uint8Array;
}
/**
 * DKGContributionEntry is a genesis helper for exporting DKG contributions.
 * @name DKGContributionEntryAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGContributionEntry
 */
export interface DKGContributionEntryAmino {
  validator_address?: string;
  contribution?: DKGContributionAmino;
}
export interface DKGContributionEntryAminoMsg {
  type: "/sparkdream.shield.v1.DKGContributionEntry";
  value: DKGContributionEntryAmino;
}
/**
 * DKGVoteExtension is the payload validators embed in their vote extensions
 * during DKG ceremonies. The type field determines which data is present.
 * @name DKGVoteExtension
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGVoteExtension
 */
export interface DKGVoteExtension {
  /**
   * DKG round this extension relates to
   */
  round: bigint;
  /**
   * Which phase data this carries
   */
  phase: DKGPhase;
  /**
   * --- REGISTERING phase data ---
   * BN256 G1 public key for ECIES encryption of polynomial evaluations
   */
  registrationPubKey: Uint8Array;
  /**
   * Schnorr proof of possession over the validator address
   */
  registrationPop: Uint8Array;
  /**
   * --- CONTRIBUTING phase data ---
   * Feldman commitments: [a₀*G, a₁*G, ..., a_{t-1}*G]
   */
  feldmanCommitments: Uint8Array[];
  /**
   * ECIES-encrypted polynomial evaluations for other validators
   */
  encryptedEvaluations: EncryptedEvaluation[];
  /**
   * Schnorr proof of possession over validator address using a₀
   */
  contributionPop: Uint8Array;
  /**
   * G2 Feldman commitments (mirrors feldman_commitments on G2 for pairing checks)
   */
  feldmanCommitmentsG2: Uint8Array[];
  /**
   * --- Decryption share data (ACTIVE phase, when pending ops need decryption) ---
   * The epoch for which this decryption share was computed
   */
  decryptionEpoch: bigint;
  /**
   * Epoch decryption share: secret_share_i * H_to_G1(epoch)
   */
  decryptionShare: Uint8Array;
}
export interface DKGVoteExtensionProtoMsg {
  typeUrl: "/sparkdream.shield.v1.DKGVoteExtension";
  value: Uint8Array;
}
/**
 * DKGVoteExtension is the payload validators embed in their vote extensions
 * during DKG ceremonies. The type field determines which data is present.
 * @name DKGVoteExtensionAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGVoteExtension
 */
export interface DKGVoteExtensionAmino {
  /**
   * DKG round this extension relates to
   */
  round?: string;
  /**
   * Which phase data this carries
   */
  phase?: DKGPhase;
  /**
   * --- REGISTERING phase data ---
   * BN256 G1 public key for ECIES encryption of polynomial evaluations
   */
  registration_pub_key?: string;
  /**
   * Schnorr proof of possession over the validator address
   */
  registration_pop?: string;
  /**
   * --- CONTRIBUTING phase data ---
   * Feldman commitments: [a₀*G, a₁*G, ..., a_{t-1}*G]
   */
  feldman_commitments?: string[];
  /**
   * ECIES-encrypted polynomial evaluations for other validators
   */
  encrypted_evaluations?: EncryptedEvaluationAmino[];
  /**
   * Schnorr proof of possession over validator address using a₀
   */
  contribution_pop?: string;
  /**
   * G2 Feldman commitments (mirrors feldman_commitments on G2 for pairing checks)
   */
  feldman_commitments_g2?: string[];
  /**
   * --- Decryption share data (ACTIVE phase, when pending ops need decryption) ---
   * The epoch for which this decryption share was computed
   */
  decryption_epoch?: string;
  /**
   * Epoch decryption share: secret_share_i * H_to_G1(epoch)
   */
  decryption_share?: string;
}
export interface DKGVoteExtensionAminoMsg {
  type: "/sparkdream.shield.v1.DKGVoteExtension";
  value: DKGVoteExtensionAmino;
}
/**
 * InjectedDKGData is the aggregated shield data injected by the block proposer
 * as a pseudo-transaction at position 0 of the block.
 * Carries DKG ceremony data (during REGISTERING/CONTRIBUTING) and/or
 * epoch decryption shares (during ACTIVE phase with pending ops).
 * @name InjectedDKGData
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.InjectedDKGData
 */
export interface InjectedDKGData {
  /**
   * DKG round this injection relates to
   */
  round: bigint;
  /**
   * DKG phase at the time of injection
   */
  phase: DKGPhase;
  /**
   * Individual validator extensions (one per validator that provided data)
   */
  extensions: ValidatorDKGExtension[];
  /**
   * Decryption shares for epoch key reconstruction (populated during ACTIVE phase)
   */
  decryptionShares: InjectedDecryptionShare[];
}
export interface InjectedDKGDataProtoMsg {
  typeUrl: "/sparkdream.shield.v1.InjectedDKGData";
  value: Uint8Array;
}
/**
 * InjectedDKGData is the aggregated shield data injected by the block proposer
 * as a pseudo-transaction at position 0 of the block.
 * Carries DKG ceremony data (during REGISTERING/CONTRIBUTING) and/or
 * epoch decryption shares (during ACTIVE phase with pending ops).
 * @name InjectedDKGDataAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.InjectedDKGData
 */
export interface InjectedDKGDataAmino {
  /**
   * DKG round this injection relates to
   */
  round?: string;
  /**
   * DKG phase at the time of injection
   */
  phase?: DKGPhase;
  /**
   * Individual validator extensions (one per validator that provided data)
   */
  extensions?: ValidatorDKGExtensionAmino[];
  /**
   * Decryption shares for epoch key reconstruction (populated during ACTIVE phase)
   */
  decryption_shares?: InjectedDecryptionShareAmino[];
}
export interface InjectedDKGDataAminoMsg {
  type: "/sparkdream.shield.v1.InjectedDKGData";
  value: InjectedDKGDataAmino;
}
/**
 * InjectedDecryptionShare pairs a validator's consensus address with their
 * epoch decryption share for threshold reconstruction.
 * @name InjectedDecryptionShare
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.InjectedDecryptionShare
 */
export interface InjectedDecryptionShare {
  /**
   * CometBFT validator address (consensus address)
   */
  validatorAddress: Uint8Array;
  /**
   * The shield epoch this share decrypts
   */
  epoch: bigint;
  /**
   * The decryption share: secret_share_i * H_to_G1(epoch)
   */
  share: Uint8Array;
}
export interface InjectedDecryptionShareProtoMsg {
  typeUrl: "/sparkdream.shield.v1.InjectedDecryptionShare";
  value: Uint8Array;
}
/**
 * InjectedDecryptionShare pairs a validator's consensus address with their
 * epoch decryption share for threshold reconstruction.
 * @name InjectedDecryptionShareAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.InjectedDecryptionShare
 */
export interface InjectedDecryptionShareAmino {
  /**
   * CometBFT validator address (consensus address)
   */
  validator_address?: string;
  /**
   * The shield epoch this share decrypts
   */
  epoch?: string;
  /**
   * The decryption share: secret_share_i * H_to_G1(epoch)
   */
  share?: string;
}
export interface InjectedDecryptionShareAminoMsg {
  type: "/sparkdream.shield.v1.InjectedDecryptionShare";
  value: InjectedDecryptionShareAmino;
}
/**
 * ValidatorDKGExtension pairs a validator's consensus address with their DKG vote extension.
 * @name ValidatorDKGExtension
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ValidatorDKGExtension
 */
export interface ValidatorDKGExtension {
  /**
   * CometBFT validator address (consensus address, NOT operator address)
   */
  validatorAddress: Uint8Array;
  /**
   * The vote extension data from this validator
   */
  extension: DKGVoteExtension;
}
export interface ValidatorDKGExtensionProtoMsg {
  typeUrl: "/sparkdream.shield.v1.ValidatorDKGExtension";
  value: Uint8Array;
}
/**
 * ValidatorDKGExtension pairs a validator's consensus address with their DKG vote extension.
 * @name ValidatorDKGExtensionAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ValidatorDKGExtension
 */
export interface ValidatorDKGExtensionAmino {
  /**
   * CometBFT validator address (consensus address, NOT operator address)
   */
  validator_address?: string;
  /**
   * The vote extension data from this validator
   */
  extension?: DKGVoteExtensionAmino;
}
export interface ValidatorDKGExtensionAminoMsg {
  type: "/sparkdream.shield.v1.ValidatorDKGExtension";
  value: ValidatorDKGExtensionAmino;
}
/**
 * VerificationKey stores a ZK circuit verification key.
 * @name VerificationKey
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.VerificationKey
 */
export interface VerificationKey {
  /**
   * e.g. "shield_v1"
   */
  circuitId: string;
  /**
   * serialized Groth16/PLONK verification key
   */
  vkBytes: Uint8Array;
  description: string;
}
export interface VerificationKeyProtoMsg {
  typeUrl: "/sparkdream.shield.v1.VerificationKey";
  value: Uint8Array;
}
/**
 * VerificationKey stores a ZK circuit verification key.
 * @name VerificationKeyAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.VerificationKey
 */
export interface VerificationKeyAmino {
  /**
   * e.g. "shield_v1"
   */
  circuit_id?: string;
  /**
   * serialized Groth16/PLONK verification key
   */
  vk_bytes?: string;
  description?: string;
}
export interface VerificationKeyAminoMsg {
  type: "/sparkdream.shield.v1.VerificationKey";
  value: VerificationKeyAmino;
}
/**
 * IdentityRateLimitEntry is a genesis helper for exporting rate limit state.
 * @name IdentityRateLimitEntry
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.IdentityRateLimitEntry
 */
export interface IdentityRateLimitEntry {
  epoch: bigint;
  rateLimitNullifierHex: string;
  count: bigint;
}
export interface IdentityRateLimitEntryProtoMsg {
  typeUrl: "/sparkdream.shield.v1.IdentityRateLimitEntry";
  value: Uint8Array;
}
/**
 * IdentityRateLimitEntry is a genesis helper for exporting rate limit state.
 * @name IdentityRateLimitEntryAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.IdentityRateLimitEntry
 */
export interface IdentityRateLimitEntryAmino {
  epoch?: string;
  rate_limit_nullifier_hex?: string;
  count?: string;
}
export interface IdentityRateLimitEntryAminoMsg {
  type: "/sparkdream.shield.v1.IdentityRateLimitEntry";
  value: IdentityRateLimitEntryAmino;
}
/**
 * TLEMissCounterEntry is a genesis helper for exporting TLE miss counters.
 * @name TLEMissCounterEntry
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEMissCounterEntry
 */
export interface TLEMissCounterEntry {
  validatorAddress: string;
  missCount: bigint;
}
export interface TLEMissCounterEntryProtoMsg {
  typeUrl: "/sparkdream.shield.v1.TLEMissCounterEntry";
  value: Uint8Array;
}
/**
 * TLEMissCounterEntry is a genesis helper for exporting TLE miss counters.
 * @name TLEMissCounterEntryAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEMissCounterEntry
 */
export interface TLEMissCounterEntryAmino {
  validator_address?: string;
  miss_count?: string;
}
export interface TLEMissCounterEntryAminoMsg {
  type: "/sparkdream.shield.v1.TLEMissCounterEntry";
  value: TLEMissCounterEntryAmino;
}
function createBaseShieldedOpRegistration(): ShieldedOpRegistration {
  return {
    messageTypeUrl: "",
    proofDomain: 0,
    minTrustLevel: 0,
    nullifierDomain: 0,
    nullifierScopeType: 0,
    active: false,
    batchMode: 0,
    scopeFieldPath: ""
  };
}
/**
 * ShieldedOpRegistration defines a registered shielded operation.
 * @name ShieldedOpRegistration
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldedOpRegistration
 */
export const ShieldedOpRegistration = {
  typeUrl: "/sparkdream.shield.v1.ShieldedOpRegistration",
  encode(message: ShieldedOpRegistration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageTypeUrl !== "") {
      writer.uint32(10).string(message.messageTypeUrl);
    }
    if (message.proofDomain !== 0) {
      writer.uint32(16).int32(message.proofDomain);
    }
    if (message.minTrustLevel !== 0) {
      writer.uint32(24).uint32(message.minTrustLevel);
    }
    if (message.nullifierDomain !== 0) {
      writer.uint32(32).uint32(message.nullifierDomain);
    }
    if (message.nullifierScopeType !== 0) {
      writer.uint32(40).int32(message.nullifierScopeType);
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    if (message.batchMode !== 0) {
      writer.uint32(56).int32(message.batchMode);
    }
    if (message.scopeFieldPath !== "") {
      writer.uint32(66).string(message.scopeFieldPath);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShieldedOpRegistration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShieldedOpRegistration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageTypeUrl = reader.string();
          break;
        case 2:
          message.proofDomain = reader.int32() as any;
          break;
        case 3:
          message.minTrustLevel = reader.uint32();
          break;
        case 4:
          message.nullifierDomain = reader.uint32();
          break;
        case 5:
          message.nullifierScopeType = reader.int32() as any;
          break;
        case 6:
          message.active = reader.bool();
          break;
        case 7:
          message.batchMode = reader.int32() as any;
          break;
        case 8:
          message.scopeFieldPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ShieldedOpRegistration>): ShieldedOpRegistration {
    const message = createBaseShieldedOpRegistration();
    message.messageTypeUrl = object.messageTypeUrl ?? "";
    message.proofDomain = object.proofDomain ?? 0;
    message.minTrustLevel = object.minTrustLevel ?? 0;
    message.nullifierDomain = object.nullifierDomain ?? 0;
    message.nullifierScopeType = object.nullifierScopeType ?? 0;
    message.active = object.active ?? false;
    message.batchMode = object.batchMode ?? 0;
    message.scopeFieldPath = object.scopeFieldPath ?? "";
    return message;
  },
  fromAmino(object: ShieldedOpRegistrationAmino): ShieldedOpRegistration {
    const message = createBaseShieldedOpRegistration();
    if (object.message_type_url !== undefined && object.message_type_url !== null) {
      message.messageTypeUrl = object.message_type_url;
    }
    if (object.proof_domain !== undefined && object.proof_domain !== null) {
      message.proofDomain = object.proof_domain;
    }
    if (object.min_trust_level !== undefined && object.min_trust_level !== null) {
      message.minTrustLevel = object.min_trust_level;
    }
    if (object.nullifier_domain !== undefined && object.nullifier_domain !== null) {
      message.nullifierDomain = object.nullifier_domain;
    }
    if (object.nullifier_scope_type !== undefined && object.nullifier_scope_type !== null) {
      message.nullifierScopeType = object.nullifier_scope_type;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.batch_mode !== undefined && object.batch_mode !== null) {
      message.batchMode = object.batch_mode;
    }
    if (object.scope_field_path !== undefined && object.scope_field_path !== null) {
      message.scopeFieldPath = object.scope_field_path;
    }
    return message;
  },
  toAmino(message: ShieldedOpRegistration): ShieldedOpRegistrationAmino {
    const obj: any = {};
    obj.message_type_url = message.messageTypeUrl === "" ? undefined : message.messageTypeUrl;
    obj.proof_domain = message.proofDomain === 0 ? undefined : message.proofDomain;
    obj.min_trust_level = message.minTrustLevel === 0 ? undefined : message.minTrustLevel;
    obj.nullifier_domain = message.nullifierDomain === 0 ? undefined : message.nullifierDomain;
    obj.nullifier_scope_type = message.nullifierScopeType === 0 ? undefined : message.nullifierScopeType;
    obj.active = message.active === false ? undefined : message.active;
    obj.batch_mode = message.batchMode === 0 ? undefined : message.batchMode;
    obj.scope_field_path = message.scopeFieldPath === "" ? undefined : message.scopeFieldPath;
    return obj;
  },
  fromAminoMsg(object: ShieldedOpRegistrationAminoMsg): ShieldedOpRegistration {
    return ShieldedOpRegistration.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldedOpRegistrationProtoMsg): ShieldedOpRegistration {
    return ShieldedOpRegistration.decode(message.value);
  },
  toProto(message: ShieldedOpRegistration): Uint8Array {
    return ShieldedOpRegistration.encode(message).finish();
  },
  toProtoMsg(message: ShieldedOpRegistration): ShieldedOpRegistrationProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.ShieldedOpRegistration",
      value: ShieldedOpRegistration.encode(message).finish()
    };
  }
};
function createBaseUsedNullifier(): UsedNullifier {
  return {
    domain: 0,
    scope: BigInt(0),
    nullifierHex: "",
    usedAtHeight: BigInt(0)
  };
}
/**
 * UsedNullifier records a nullifier that has been consumed.
 * Key: domain (uint32) + scope (uint64) + nullifier_hex (string)
 * @name UsedNullifier
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.UsedNullifier
 */
export const UsedNullifier = {
  typeUrl: "/sparkdream.shield.v1.UsedNullifier",
  encode(message: UsedNullifier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== 0) {
      writer.uint32(8).uint32(message.domain);
    }
    if (message.scope !== BigInt(0)) {
      writer.uint32(16).uint64(message.scope);
    }
    if (message.nullifierHex !== "") {
      writer.uint32(26).string(message.nullifierHex);
    }
    if (message.usedAtHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.usedAtHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UsedNullifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsedNullifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.uint32();
          break;
        case 2:
          message.scope = reader.uint64();
          break;
        case 3:
          message.nullifierHex = reader.string();
          break;
        case 4:
          message.usedAtHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UsedNullifier>): UsedNullifier {
    const message = createBaseUsedNullifier();
    message.domain = object.domain ?? 0;
    message.scope = object.scope !== undefined && object.scope !== null ? BigInt(object.scope.toString()) : BigInt(0);
    message.nullifierHex = object.nullifierHex ?? "";
    message.usedAtHeight = object.usedAtHeight !== undefined && object.usedAtHeight !== null ? BigInt(object.usedAtHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UsedNullifierAmino): UsedNullifier {
    const message = createBaseUsedNullifier();
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = BigInt(object.scope);
    }
    if (object.nullifier_hex !== undefined && object.nullifier_hex !== null) {
      message.nullifierHex = object.nullifier_hex;
    }
    if (object.used_at_height !== undefined && object.used_at_height !== null) {
      message.usedAtHeight = BigInt(object.used_at_height);
    }
    return message;
  },
  toAmino(message: UsedNullifier): UsedNullifierAmino {
    const obj: any = {};
    obj.domain = message.domain === 0 ? undefined : message.domain;
    obj.scope = message.scope !== BigInt(0) ? message.scope?.toString() : undefined;
    obj.nullifier_hex = message.nullifierHex === "" ? undefined : message.nullifierHex;
    obj.used_at_height = message.usedAtHeight !== BigInt(0) ? message.usedAtHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UsedNullifierAminoMsg): UsedNullifier {
    return UsedNullifier.fromAmino(object.value);
  },
  fromProtoMsg(message: UsedNullifierProtoMsg): UsedNullifier {
    return UsedNullifier.decode(message.value);
  },
  toProto(message: UsedNullifier): Uint8Array {
    return UsedNullifier.encode(message).finish();
  },
  toProtoMsg(message: UsedNullifier): UsedNullifierProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.UsedNullifier",
      value: UsedNullifier.encode(message).finish()
    };
  }
};
function createBaseDayFunding(): DayFunding {
  return {
    day: BigInt(0),
    amountFunded: ""
  };
}
/**
 * DayFunding tracks funding per day to enforce the daily cap.
 * Day is calculated as block_height / 14400 (at 6s/block = 1 day).
 * @name DayFunding
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DayFunding
 */
export const DayFunding = {
  typeUrl: "/sparkdream.shield.v1.DayFunding",
  encode(message: DayFunding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.day !== BigInt(0)) {
      writer.uint32(8).uint64(message.day);
    }
    if (message.amountFunded !== "") {
      writer.uint32(18).string(message.amountFunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DayFunding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDayFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.day = reader.uint64();
          break;
        case 2:
          message.amountFunded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DayFunding>): DayFunding {
    const message = createBaseDayFunding();
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.amountFunded = object.amountFunded ?? "";
    return message;
  },
  fromAmino(object: DayFundingAmino): DayFunding {
    const message = createBaseDayFunding();
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.amount_funded !== undefined && object.amount_funded !== null) {
      message.amountFunded = object.amount_funded;
    }
    return message;
  },
  toAmino(message: DayFunding): DayFundingAmino {
    const obj: any = {};
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    obj.amount_funded = message.amountFunded === "" ? undefined : message.amountFunded;
    return obj;
  },
  fromAminoMsg(object: DayFundingAminoMsg): DayFunding {
    return DayFunding.fromAmino(object.value);
  },
  fromProtoMsg(message: DayFundingProtoMsg): DayFunding {
    return DayFunding.decode(message.value);
  },
  toProto(message: DayFunding): Uint8Array {
    return DayFunding.encode(message).finish();
  },
  toProtoMsg(message: DayFunding): DayFundingProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.DayFunding",
      value: DayFunding.encode(message).finish()
    };
  }
};
function createBasePendingShieldedOp(): PendingShieldedOp {
  return {
    id: BigInt(0),
    targetEpoch: BigInt(0),
    nullifier: new Uint8Array(),
    merkleRoot: new Uint8Array(),
    proofDomain: 0,
    minTrustLevel: 0,
    encryptedPayload: new Uint8Array(),
    submittedAtHeight: BigInt(0),
    submittedAtEpoch: BigInt(0)
  };
}
/**
 * PendingShieldedOp is stored in queue until the shield epoch boundary triggers batch execution.
 * @name PendingShieldedOp
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.PendingShieldedOp
 */
export const PendingShieldedOp = {
  typeUrl: "/sparkdream.shield.v1.PendingShieldedOp",
  encode(message: PendingShieldedOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.targetEpoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetEpoch);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(26).bytes(message.nullifier);
    }
    if (message.merkleRoot.length !== 0) {
      writer.uint32(34).bytes(message.merkleRoot);
    }
    if (message.proofDomain !== 0) {
      writer.uint32(40).int32(message.proofDomain);
    }
    if (message.minTrustLevel !== 0) {
      writer.uint32(48).uint32(message.minTrustLevel);
    }
    if (message.encryptedPayload.length !== 0) {
      writer.uint32(58).bytes(message.encryptedPayload);
    }
    if (message.submittedAtHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.submittedAtHeight);
    }
    if (message.submittedAtEpoch !== BigInt(0)) {
      writer.uint32(72).uint64(message.submittedAtEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingShieldedOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingShieldedOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.targetEpoch = reader.uint64();
          break;
        case 3:
          message.nullifier = reader.bytes();
          break;
        case 4:
          message.merkleRoot = reader.bytes();
          break;
        case 5:
          message.proofDomain = reader.int32() as any;
          break;
        case 6:
          message.minTrustLevel = reader.uint32();
          break;
        case 7:
          message.encryptedPayload = reader.bytes();
          break;
        case 8:
          message.submittedAtHeight = reader.int64();
          break;
        case 9:
          message.submittedAtEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingShieldedOp>): PendingShieldedOp {
    const message = createBasePendingShieldedOp();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.targetEpoch = object.targetEpoch !== undefined && object.targetEpoch !== null ? BigInt(object.targetEpoch.toString()) : BigInt(0);
    message.nullifier = object.nullifier ?? new Uint8Array();
    message.merkleRoot = object.merkleRoot ?? new Uint8Array();
    message.proofDomain = object.proofDomain ?? 0;
    message.minTrustLevel = object.minTrustLevel ?? 0;
    message.encryptedPayload = object.encryptedPayload ?? new Uint8Array();
    message.submittedAtHeight = object.submittedAtHeight !== undefined && object.submittedAtHeight !== null ? BigInt(object.submittedAtHeight.toString()) : BigInt(0);
    message.submittedAtEpoch = object.submittedAtEpoch !== undefined && object.submittedAtEpoch !== null ? BigInt(object.submittedAtEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingShieldedOpAmino): PendingShieldedOp {
    const message = createBasePendingShieldedOp();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.target_epoch !== undefined && object.target_epoch !== null) {
      message.targetEpoch = BigInt(object.target_epoch);
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = bytesFromBase64(object.nullifier);
    }
    if (object.merkle_root !== undefined && object.merkle_root !== null) {
      message.merkleRoot = bytesFromBase64(object.merkle_root);
    }
    if (object.proof_domain !== undefined && object.proof_domain !== null) {
      message.proofDomain = object.proof_domain;
    }
    if (object.min_trust_level !== undefined && object.min_trust_level !== null) {
      message.minTrustLevel = object.min_trust_level;
    }
    if (object.encrypted_payload !== undefined && object.encrypted_payload !== null) {
      message.encryptedPayload = bytesFromBase64(object.encrypted_payload);
    }
    if (object.submitted_at_height !== undefined && object.submitted_at_height !== null) {
      message.submittedAtHeight = BigInt(object.submitted_at_height);
    }
    if (object.submitted_at_epoch !== undefined && object.submitted_at_epoch !== null) {
      message.submittedAtEpoch = BigInt(object.submitted_at_epoch);
    }
    return message;
  },
  toAmino(message: PendingShieldedOp): PendingShieldedOpAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.target_epoch = message.targetEpoch !== BigInt(0) ? message.targetEpoch?.toString() : undefined;
    obj.nullifier = message.nullifier ? base64FromBytes(message.nullifier) : undefined;
    obj.merkle_root = message.merkleRoot ? base64FromBytes(message.merkleRoot) : undefined;
    obj.proof_domain = message.proofDomain === 0 ? undefined : message.proofDomain;
    obj.min_trust_level = message.minTrustLevel === 0 ? undefined : message.minTrustLevel;
    obj.encrypted_payload = message.encryptedPayload ? base64FromBytes(message.encryptedPayload) : undefined;
    obj.submitted_at_height = message.submittedAtHeight !== BigInt(0) ? message.submittedAtHeight?.toString() : undefined;
    obj.submitted_at_epoch = message.submittedAtEpoch !== BigInt(0) ? message.submittedAtEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingShieldedOpAminoMsg): PendingShieldedOp {
    return PendingShieldedOp.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingShieldedOpProtoMsg): PendingShieldedOp {
    return PendingShieldedOp.decode(message.value);
  },
  toProto(message: PendingShieldedOp): Uint8Array {
    return PendingShieldedOp.encode(message).finish();
  },
  toProtoMsg(message: PendingShieldedOp): PendingShieldedOpProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.PendingShieldedOp",
      value: PendingShieldedOp.encode(message).finish()
    };
  }
};
function createBaseShieldEpochState(): ShieldEpochState {
  return {
    currentEpoch: BigInt(0),
    epochStartHeight: BigInt(0),
    decryptionKeyAvailable: false
  };
}
/**
 * ShieldEpochState tracks the current shield epoch and decryption key availability.
 * @name ShieldEpochState
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldEpochState
 */
export const ShieldEpochState = {
  typeUrl: "/sparkdream.shield.v1.ShieldEpochState",
  encode(message: ShieldEpochState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.currentEpoch);
    }
    if (message.epochStartHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartHeight);
    }
    if (message.decryptionKeyAvailable === true) {
      writer.uint32(24).bool(message.decryptionKeyAvailable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShieldEpochState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShieldEpochState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.uint64();
          break;
        case 2:
          message.epochStartHeight = reader.int64();
          break;
        case 3:
          message.decryptionKeyAvailable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ShieldEpochState>): ShieldEpochState {
    const message = createBaseShieldEpochState();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.epochStartHeight = object.epochStartHeight !== undefined && object.epochStartHeight !== null ? BigInt(object.epochStartHeight.toString()) : BigInt(0);
    message.decryptionKeyAvailable = object.decryptionKeyAvailable ?? false;
    return message;
  },
  fromAmino(object: ShieldEpochStateAmino): ShieldEpochState {
    const message = createBaseShieldEpochState();
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    if (object.epoch_start_height !== undefined && object.epoch_start_height !== null) {
      message.epochStartHeight = BigInt(object.epoch_start_height);
    }
    if (object.decryption_key_available !== undefined && object.decryption_key_available !== null) {
      message.decryptionKeyAvailable = object.decryption_key_available;
    }
    return message;
  },
  toAmino(message: ShieldEpochState): ShieldEpochStateAmino {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    obj.epoch_start_height = message.epochStartHeight !== BigInt(0) ? message.epochStartHeight?.toString() : undefined;
    obj.decryption_key_available = message.decryptionKeyAvailable === false ? undefined : message.decryptionKeyAvailable;
    return obj;
  },
  fromAminoMsg(object: ShieldEpochStateAminoMsg): ShieldEpochState {
    return ShieldEpochState.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldEpochStateProtoMsg): ShieldEpochState {
    return ShieldEpochState.decode(message.value);
  },
  toProto(message: ShieldEpochState): Uint8Array {
    return ShieldEpochState.encode(message).finish();
  },
  toProtoMsg(message: ShieldEpochState): ShieldEpochStateProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.ShieldEpochState",
      value: ShieldEpochState.encode(message).finish()
    };
  }
};
function createBaseShieldEpochDecryptionKey(): ShieldEpochDecryptionKey {
  return {
    epoch: BigInt(0),
    decryptionKey: new Uint8Array(),
    reconstructedAtHeight: BigInt(0)
  };
}
/**
 * ShieldEpochDecryptionKey is the reconstructed epoch decryption key.
 * @name ShieldEpochDecryptionKey
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldEpochDecryptionKey
 */
export const ShieldEpochDecryptionKey = {
  typeUrl: "/sparkdream.shield.v1.ShieldEpochDecryptionKey",
  encode(message: ShieldEpochDecryptionKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.decryptionKey.length !== 0) {
      writer.uint32(18).bytes(message.decryptionKey);
    }
    if (message.reconstructedAtHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.reconstructedAtHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShieldEpochDecryptionKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShieldEpochDecryptionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.decryptionKey = reader.bytes();
          break;
        case 3:
          message.reconstructedAtHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ShieldEpochDecryptionKey>): ShieldEpochDecryptionKey {
    const message = createBaseShieldEpochDecryptionKey();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.decryptionKey = object.decryptionKey ?? new Uint8Array();
    message.reconstructedAtHeight = object.reconstructedAtHeight !== undefined && object.reconstructedAtHeight !== null ? BigInt(object.reconstructedAtHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ShieldEpochDecryptionKeyAmino): ShieldEpochDecryptionKey {
    const message = createBaseShieldEpochDecryptionKey();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.decryption_key !== undefined && object.decryption_key !== null) {
      message.decryptionKey = bytesFromBase64(object.decryption_key);
    }
    if (object.reconstructed_at_height !== undefined && object.reconstructed_at_height !== null) {
      message.reconstructedAtHeight = BigInt(object.reconstructed_at_height);
    }
    return message;
  },
  toAmino(message: ShieldEpochDecryptionKey): ShieldEpochDecryptionKeyAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.decryption_key = message.decryptionKey ? base64FromBytes(message.decryptionKey) : undefined;
    obj.reconstructed_at_height = message.reconstructedAtHeight !== BigInt(0) ? message.reconstructedAtHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ShieldEpochDecryptionKeyAminoMsg): ShieldEpochDecryptionKey {
    return ShieldEpochDecryptionKey.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldEpochDecryptionKeyProtoMsg): ShieldEpochDecryptionKey {
    return ShieldEpochDecryptionKey.decode(message.value);
  },
  toProto(message: ShieldEpochDecryptionKey): Uint8Array {
    return ShieldEpochDecryptionKey.encode(message).finish();
  },
  toProtoMsg(message: ShieldEpochDecryptionKey): ShieldEpochDecryptionKeyProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.ShieldEpochDecryptionKey",
      value: ShieldEpochDecryptionKey.encode(message).finish()
    };
  }
};
function createBaseShieldDecryptionShare(): ShieldDecryptionShare {
  return {
    epoch: BigInt(0),
    validator: "",
    share: new Uint8Array()
  };
}
/**
 * ShieldDecryptionShare is a validator's decryption share for a shield epoch.
 * @name ShieldDecryptionShare
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ShieldDecryptionShare
 */
export const ShieldDecryptionShare = {
  typeUrl: "/sparkdream.shield.v1.ShieldDecryptionShare",
  encode(message: ShieldDecryptionShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.share.length !== 0) {
      writer.uint32(26).bytes(message.share);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShieldDecryptionShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShieldDecryptionShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.share = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ShieldDecryptionShare>): ShieldDecryptionShare {
    const message = createBaseShieldDecryptionShare();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    message.share = object.share ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ShieldDecryptionShareAmino): ShieldDecryptionShare {
    const message = createBaseShieldDecryptionShare();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.share !== undefined && object.share !== null) {
      message.share = bytesFromBase64(object.share);
    }
    return message;
  },
  toAmino(message: ShieldDecryptionShare): ShieldDecryptionShareAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.share = message.share ? base64FromBytes(message.share) : undefined;
    return obj;
  },
  fromAminoMsg(object: ShieldDecryptionShareAminoMsg): ShieldDecryptionShare {
    return ShieldDecryptionShare.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldDecryptionShareProtoMsg): ShieldDecryptionShare {
    return ShieldDecryptionShare.decode(message.value);
  },
  toProto(message: ShieldDecryptionShare): Uint8Array {
    return ShieldDecryptionShare.encode(message).finish();
  },
  toProtoMsg(message: ShieldDecryptionShare): ShieldDecryptionShareProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.ShieldDecryptionShare",
      value: ShieldDecryptionShare.encode(message).finish()
    };
  }
};
function createBaseTLEKeySet(): TLEKeySet {
  return {
    masterPublicKey: new Uint8Array(),
    thresholdNumerator: BigInt(0),
    thresholdDenominator: BigInt(0),
    validatorShares: [],
    createdAtHeight: BigInt(0)
  };
}
/**
 * TLEKeySet stores the master public key and validator shares from the DKG ceremony.
 * @name TLEKeySet
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEKeySet
 */
export const TLEKeySet = {
  typeUrl: "/sparkdream.shield.v1.TLEKeySet",
  encode(message: TLEKeySet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterPublicKey.length !== 0) {
      writer.uint32(10).bytes(message.masterPublicKey);
    }
    if (message.thresholdNumerator !== BigInt(0)) {
      writer.uint32(16).uint64(message.thresholdNumerator);
    }
    if (message.thresholdDenominator !== BigInt(0)) {
      writer.uint32(24).uint64(message.thresholdDenominator);
    }
    for (const v of message.validatorShares) {
      TLEValidatorPublicShare.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAtHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TLEKeySet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLEKeySet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterPublicKey = reader.bytes();
          break;
        case 2:
          message.thresholdNumerator = reader.uint64();
          break;
        case 3:
          message.thresholdDenominator = reader.uint64();
          break;
        case 4:
          message.validatorShares.push(TLEValidatorPublicShare.decode(reader, reader.uint32()));
          break;
        case 5:
          message.createdAtHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TLEKeySet>): TLEKeySet {
    const message = createBaseTLEKeySet();
    message.masterPublicKey = object.masterPublicKey ?? new Uint8Array();
    message.thresholdNumerator = object.thresholdNumerator !== undefined && object.thresholdNumerator !== null ? BigInt(object.thresholdNumerator.toString()) : BigInt(0);
    message.thresholdDenominator = object.thresholdDenominator !== undefined && object.thresholdDenominator !== null ? BigInt(object.thresholdDenominator.toString()) : BigInt(0);
    message.validatorShares = object.validatorShares?.map(e => TLEValidatorPublicShare.fromPartial(e)) || [];
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TLEKeySetAmino): TLEKeySet {
    const message = createBaseTLEKeySet();
    if (object.master_public_key !== undefined && object.master_public_key !== null) {
      message.masterPublicKey = bytesFromBase64(object.master_public_key);
    }
    if (object.threshold_numerator !== undefined && object.threshold_numerator !== null) {
      message.thresholdNumerator = BigInt(object.threshold_numerator);
    }
    if (object.threshold_denominator !== undefined && object.threshold_denominator !== null) {
      message.thresholdDenominator = BigInt(object.threshold_denominator);
    }
    message.validatorShares = object.validator_shares?.map(e => TLEValidatorPublicShare.fromAmino(e)) || [];
    if (object.created_at_height !== undefined && object.created_at_height !== null) {
      message.createdAtHeight = BigInt(object.created_at_height);
    }
    return message;
  },
  toAmino(message: TLEKeySet): TLEKeySetAmino {
    const obj: any = {};
    obj.master_public_key = message.masterPublicKey ? base64FromBytes(message.masterPublicKey) : undefined;
    obj.threshold_numerator = message.thresholdNumerator !== BigInt(0) ? message.thresholdNumerator?.toString() : undefined;
    obj.threshold_denominator = message.thresholdDenominator !== BigInt(0) ? message.thresholdDenominator?.toString() : undefined;
    if (message.validatorShares) {
      obj.validator_shares = message.validatorShares.map(e => e ? TLEValidatorPublicShare.toAmino(e) : undefined);
    } else {
      obj.validator_shares = message.validatorShares;
    }
    obj.created_at_height = message.createdAtHeight !== BigInt(0) ? message.createdAtHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TLEKeySetAminoMsg): TLEKeySet {
    return TLEKeySet.fromAmino(object.value);
  },
  fromProtoMsg(message: TLEKeySetProtoMsg): TLEKeySet {
    return TLEKeySet.decode(message.value);
  },
  toProto(message: TLEKeySet): Uint8Array {
    return TLEKeySet.encode(message).finish();
  },
  toProtoMsg(message: TLEKeySet): TLEKeySetProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.TLEKeySet",
      value: TLEKeySet.encode(message).finish()
    };
  }
};
function createBaseTLEValidatorPublicShare(): TLEValidatorPublicShare {
  return {
    validatorAddress: "",
    publicShare: new Uint8Array(),
    shareIndex: 0,
    publicShareG2: new Uint8Array()
  };
}
/**
 * TLEValidatorPublicShare stores a validator's public key share from the DKG.
 * @name TLEValidatorPublicShare
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEValidatorPublicShare
 */
export const TLEValidatorPublicShare = {
  typeUrl: "/sparkdream.shield.v1.TLEValidatorPublicShare",
  encode(message: TLEValidatorPublicShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.publicShare.length !== 0) {
      writer.uint32(18).bytes(message.publicShare);
    }
    if (message.shareIndex !== 0) {
      writer.uint32(24).uint32(message.shareIndex);
    }
    if (message.publicShareG2.length !== 0) {
      writer.uint32(34).bytes(message.publicShareG2);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TLEValidatorPublicShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLEValidatorPublicShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.publicShare = reader.bytes();
          break;
        case 3:
          message.shareIndex = reader.uint32();
          break;
        case 4:
          message.publicShareG2 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TLEValidatorPublicShare>): TLEValidatorPublicShare {
    const message = createBaseTLEValidatorPublicShare();
    message.validatorAddress = object.validatorAddress ?? "";
    message.publicShare = object.publicShare ?? new Uint8Array();
    message.shareIndex = object.shareIndex ?? 0;
    message.publicShareG2 = object.publicShareG2 ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TLEValidatorPublicShareAmino): TLEValidatorPublicShare {
    const message = createBaseTLEValidatorPublicShare();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.public_share !== undefined && object.public_share !== null) {
      message.publicShare = bytesFromBase64(object.public_share);
    }
    if (object.share_index !== undefined && object.share_index !== null) {
      message.shareIndex = object.share_index;
    }
    if (object.public_share_g2 !== undefined && object.public_share_g2 !== null) {
      message.publicShareG2 = bytesFromBase64(object.public_share_g2);
    }
    return message;
  },
  toAmino(message: TLEValidatorPublicShare): TLEValidatorPublicShareAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.public_share = message.publicShare ? base64FromBytes(message.publicShare) : undefined;
    obj.share_index = message.shareIndex === 0 ? undefined : message.shareIndex;
    obj.public_share_g2 = message.publicShareG2 ? base64FromBytes(message.publicShareG2) : undefined;
    return obj;
  },
  fromAminoMsg(object: TLEValidatorPublicShareAminoMsg): TLEValidatorPublicShare {
    return TLEValidatorPublicShare.fromAmino(object.value);
  },
  fromProtoMsg(message: TLEValidatorPublicShareProtoMsg): TLEValidatorPublicShare {
    return TLEValidatorPublicShare.decode(message.value);
  },
  toProto(message: TLEValidatorPublicShare): Uint8Array {
    return TLEValidatorPublicShare.encode(message).finish();
  },
  toProtoMsg(message: TLEValidatorPublicShare): TLEValidatorPublicShareProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.TLEValidatorPublicShare",
      value: TLEValidatorPublicShare.encode(message).finish()
    };
  }
};
function createBaseDKGState(): DKGState {
  return {
    round: BigInt(0),
    phase: 0,
    openAtHeight: BigInt(0),
    registrationDeadline: BigInt(0),
    contributionDeadline: BigInt(0),
    thresholdNumerator: BigInt(0),
    thresholdDenominator: BigInt(0),
    expectedValidators: [],
    contributionsReceived: BigInt(0)
  };
}
/**
 * DKGState tracks the current state of the on-chain Feldman DKG ceremony.
 * @name DKGState
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGState
 */
export const DKGState = {
  typeUrl: "/sparkdream.shield.v1.DKGState",
  encode(message: DKGState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== BigInt(0)) {
      writer.uint32(8).uint64(message.round);
    }
    if (message.phase !== 0) {
      writer.uint32(16).int32(message.phase);
    }
    if (message.openAtHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.openAtHeight);
    }
    if (message.registrationDeadline !== BigInt(0)) {
      writer.uint32(32).int64(message.registrationDeadline);
    }
    if (message.contributionDeadline !== BigInt(0)) {
      writer.uint32(40).int64(message.contributionDeadline);
    }
    if (message.thresholdNumerator !== BigInt(0)) {
      writer.uint32(48).uint64(message.thresholdNumerator);
    }
    if (message.thresholdDenominator !== BigInt(0)) {
      writer.uint32(56).uint64(message.thresholdDenominator);
    }
    for (const v of message.expectedValidators) {
      writer.uint32(66).string(v!);
    }
    if (message.contributionsReceived !== BigInt(0)) {
      writer.uint32(72).uint64(message.contributionsReceived);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DKGState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDKGState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64();
          break;
        case 2:
          message.phase = reader.int32() as any;
          break;
        case 3:
          message.openAtHeight = reader.int64();
          break;
        case 4:
          message.registrationDeadline = reader.int64();
          break;
        case 5:
          message.contributionDeadline = reader.int64();
          break;
        case 6:
          message.thresholdNumerator = reader.uint64();
          break;
        case 7:
          message.thresholdDenominator = reader.uint64();
          break;
        case 8:
          message.expectedValidators.push(reader.string());
          break;
        case 9:
          message.contributionsReceived = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DKGState>): DKGState {
    const message = createBaseDKGState();
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.phase = object.phase ?? 0;
    message.openAtHeight = object.openAtHeight !== undefined && object.openAtHeight !== null ? BigInt(object.openAtHeight.toString()) : BigInt(0);
    message.registrationDeadline = object.registrationDeadline !== undefined && object.registrationDeadline !== null ? BigInt(object.registrationDeadline.toString()) : BigInt(0);
    message.contributionDeadline = object.contributionDeadline !== undefined && object.contributionDeadline !== null ? BigInt(object.contributionDeadline.toString()) : BigInt(0);
    message.thresholdNumerator = object.thresholdNumerator !== undefined && object.thresholdNumerator !== null ? BigInt(object.thresholdNumerator.toString()) : BigInt(0);
    message.thresholdDenominator = object.thresholdDenominator !== undefined && object.thresholdDenominator !== null ? BigInt(object.thresholdDenominator.toString()) : BigInt(0);
    message.expectedValidators = object.expectedValidators?.map(e => e) || [];
    message.contributionsReceived = object.contributionsReceived !== undefined && object.contributionsReceived !== null ? BigInt(object.contributionsReceived.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DKGStateAmino): DKGState {
    const message = createBaseDKGState();
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    }
    if (object.open_at_height !== undefined && object.open_at_height !== null) {
      message.openAtHeight = BigInt(object.open_at_height);
    }
    if (object.registration_deadline !== undefined && object.registration_deadline !== null) {
      message.registrationDeadline = BigInt(object.registration_deadline);
    }
    if (object.contribution_deadline !== undefined && object.contribution_deadline !== null) {
      message.contributionDeadline = BigInt(object.contribution_deadline);
    }
    if (object.threshold_numerator !== undefined && object.threshold_numerator !== null) {
      message.thresholdNumerator = BigInt(object.threshold_numerator);
    }
    if (object.threshold_denominator !== undefined && object.threshold_denominator !== null) {
      message.thresholdDenominator = BigInt(object.threshold_denominator);
    }
    message.expectedValidators = object.expected_validators?.map(e => e) || [];
    if (object.contributions_received !== undefined && object.contributions_received !== null) {
      message.contributionsReceived = BigInt(object.contributions_received);
    }
    return message;
  },
  toAmino(message: DKGState): DKGStateAmino {
    const obj: any = {};
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    obj.phase = message.phase === 0 ? undefined : message.phase;
    obj.open_at_height = message.openAtHeight !== BigInt(0) ? message.openAtHeight?.toString() : undefined;
    obj.registration_deadline = message.registrationDeadline !== BigInt(0) ? message.registrationDeadline?.toString() : undefined;
    obj.contribution_deadline = message.contributionDeadline !== BigInt(0) ? message.contributionDeadline?.toString() : undefined;
    obj.threshold_numerator = message.thresholdNumerator !== BigInt(0) ? message.thresholdNumerator?.toString() : undefined;
    obj.threshold_denominator = message.thresholdDenominator !== BigInt(0) ? message.thresholdDenominator?.toString() : undefined;
    if (message.expectedValidators) {
      obj.expected_validators = message.expectedValidators.map(e => e);
    } else {
      obj.expected_validators = message.expectedValidators;
    }
    obj.contributions_received = message.contributionsReceived !== BigInt(0) ? message.contributionsReceived?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DKGStateAminoMsg): DKGState {
    return DKGState.fromAmino(object.value);
  },
  fromProtoMsg(message: DKGStateProtoMsg): DKGState {
    return DKGState.decode(message.value);
  },
  toProto(message: DKGState): Uint8Array {
    return DKGState.encode(message).finish();
  },
  toProtoMsg(message: DKGState): DKGStateProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.DKGState",
      value: DKGState.encode(message).finish()
    };
  }
};
function createBaseDKGContribution(): DKGContribution {
  return {
    validatorAddress: "",
    round: BigInt(0),
    feldmanCommitments: [],
    encryptedEvaluations: [],
    proofOfPossession: new Uint8Array(),
    feldmanCommitmentsG2: []
  };
}
/**
 * DKGContribution is a validator's Feldman DKG contribution.
 * @name DKGContribution
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGContribution
 */
export const DKGContribution = {
  typeUrl: "/sparkdream.shield.v1.DKGContribution",
  encode(message: DKGContribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(16).uint64(message.round);
    }
    for (const v of message.feldmanCommitments) {
      writer.uint32(26).bytes(v!);
    }
    for (const v of message.encryptedEvaluations) {
      EncryptedEvaluation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofOfPossession.length !== 0) {
      writer.uint32(42).bytes(message.proofOfPossession);
    }
    for (const v of message.feldmanCommitmentsG2) {
      writer.uint32(50).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DKGContribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDKGContribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.round = reader.uint64();
          break;
        case 3:
          message.feldmanCommitments.push(reader.bytes());
          break;
        case 4:
          message.encryptedEvaluations.push(EncryptedEvaluation.decode(reader, reader.uint32()));
          break;
        case 5:
          message.proofOfPossession = reader.bytes();
          break;
        case 6:
          message.feldmanCommitmentsG2.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DKGContribution>): DKGContribution {
    const message = createBaseDKGContribution();
    message.validatorAddress = object.validatorAddress ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.feldmanCommitments = object.feldmanCommitments?.map(e => e) || [];
    message.encryptedEvaluations = object.encryptedEvaluations?.map(e => EncryptedEvaluation.fromPartial(e)) || [];
    message.proofOfPossession = object.proofOfPossession ?? new Uint8Array();
    message.feldmanCommitmentsG2 = object.feldmanCommitmentsG2?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DKGContributionAmino): DKGContribution {
    const message = createBaseDKGContribution();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    message.feldmanCommitments = object.feldman_commitments?.map(e => bytesFromBase64(e)) || [];
    message.encryptedEvaluations = object.encrypted_evaluations?.map(e => EncryptedEvaluation.fromAmino(e)) || [];
    if (object.proof_of_possession !== undefined && object.proof_of_possession !== null) {
      message.proofOfPossession = bytesFromBase64(object.proof_of_possession);
    }
    message.feldmanCommitmentsG2 = object.feldman_commitments_g2?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: DKGContribution): DKGContributionAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    if (message.feldmanCommitments) {
      obj.feldman_commitments = message.feldmanCommitments.map(e => base64FromBytes(e));
    } else {
      obj.feldman_commitments = message.feldmanCommitments;
    }
    if (message.encryptedEvaluations) {
      obj.encrypted_evaluations = message.encryptedEvaluations.map(e => e ? EncryptedEvaluation.toAmino(e) : undefined);
    } else {
      obj.encrypted_evaluations = message.encryptedEvaluations;
    }
    obj.proof_of_possession = message.proofOfPossession ? base64FromBytes(message.proofOfPossession) : undefined;
    if (message.feldmanCommitmentsG2) {
      obj.feldman_commitments_g2 = message.feldmanCommitmentsG2.map(e => base64FromBytes(e));
    } else {
      obj.feldman_commitments_g2 = message.feldmanCommitmentsG2;
    }
    return obj;
  },
  fromAminoMsg(object: DKGContributionAminoMsg): DKGContribution {
    return DKGContribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DKGContributionProtoMsg): DKGContribution {
    return DKGContribution.decode(message.value);
  },
  toProto(message: DKGContribution): Uint8Array {
    return DKGContribution.encode(message).finish();
  },
  toProtoMsg(message: DKGContribution): DKGContributionProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.DKGContribution",
      value: DKGContribution.encode(message).finish()
    };
  }
};
function createBaseEncryptedEvaluation(): EncryptedEvaluation {
  return {
    targetIndex: 0,
    ciphertext: new Uint8Array()
  };
}
/**
 * EncryptedEvaluation is an ECIES-encrypted polynomial evaluation for a target validator.
 * @name EncryptedEvaluation
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.EncryptedEvaluation
 */
export const EncryptedEvaluation = {
  typeUrl: "/sparkdream.shield.v1.EncryptedEvaluation",
  encode(message: EncryptedEvaluation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetIndex !== 0) {
      writer.uint32(8).uint32(message.targetIndex);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(18).bytes(message.ciphertext);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EncryptedEvaluation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedEvaluation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetIndex = reader.uint32();
          break;
        case 2:
          message.ciphertext = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EncryptedEvaluation>): EncryptedEvaluation {
    const message = createBaseEncryptedEvaluation();
    message.targetIndex = object.targetIndex ?? 0;
    message.ciphertext = object.ciphertext ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EncryptedEvaluationAmino): EncryptedEvaluation {
    const message = createBaseEncryptedEvaluation();
    if (object.target_index !== undefined && object.target_index !== null) {
      message.targetIndex = object.target_index;
    }
    if (object.ciphertext !== undefined && object.ciphertext !== null) {
      message.ciphertext = bytesFromBase64(object.ciphertext);
    }
    return message;
  },
  toAmino(message: EncryptedEvaluation): EncryptedEvaluationAmino {
    const obj: any = {};
    obj.target_index = message.targetIndex === 0 ? undefined : message.targetIndex;
    obj.ciphertext = message.ciphertext ? base64FromBytes(message.ciphertext) : undefined;
    return obj;
  },
  fromAminoMsg(object: EncryptedEvaluationAminoMsg): EncryptedEvaluation {
    return EncryptedEvaluation.fromAmino(object.value);
  },
  fromProtoMsg(message: EncryptedEvaluationProtoMsg): EncryptedEvaluation {
    return EncryptedEvaluation.decode(message.value);
  },
  toProto(message: EncryptedEvaluation): Uint8Array {
    return EncryptedEvaluation.encode(message).finish();
  },
  toProtoMsg(message: EncryptedEvaluation): EncryptedEvaluationProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.EncryptedEvaluation",
      value: EncryptedEvaluation.encode(message).finish()
    };
  }
};
function createBaseDKGContributionEntry(): DKGContributionEntry {
  return {
    validatorAddress: "",
    contribution: DKGContribution.fromPartial({})
  };
}
/**
 * DKGContributionEntry is a genesis helper for exporting DKG contributions.
 * @name DKGContributionEntry
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGContributionEntry
 */
export const DKGContributionEntry = {
  typeUrl: "/sparkdream.shield.v1.DKGContributionEntry",
  encode(message: DKGContributionEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.contribution !== undefined) {
      DKGContribution.encode(message.contribution, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DKGContributionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDKGContributionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.contribution = DKGContribution.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DKGContributionEntry>): DKGContributionEntry {
    const message = createBaseDKGContributionEntry();
    message.validatorAddress = object.validatorAddress ?? "";
    message.contribution = object.contribution !== undefined && object.contribution !== null ? DKGContribution.fromPartial(object.contribution) : undefined;
    return message;
  },
  fromAmino(object: DKGContributionEntryAmino): DKGContributionEntry {
    const message = createBaseDKGContributionEntry();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.contribution !== undefined && object.contribution !== null) {
      message.contribution = DKGContribution.fromAmino(object.contribution);
    }
    return message;
  },
  toAmino(message: DKGContributionEntry): DKGContributionEntryAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.contribution = message.contribution ? DKGContribution.toAmino(message.contribution) : undefined;
    return obj;
  },
  fromAminoMsg(object: DKGContributionEntryAminoMsg): DKGContributionEntry {
    return DKGContributionEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: DKGContributionEntryProtoMsg): DKGContributionEntry {
    return DKGContributionEntry.decode(message.value);
  },
  toProto(message: DKGContributionEntry): Uint8Array {
    return DKGContributionEntry.encode(message).finish();
  },
  toProtoMsg(message: DKGContributionEntry): DKGContributionEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.DKGContributionEntry",
      value: DKGContributionEntry.encode(message).finish()
    };
  }
};
function createBaseDKGVoteExtension(): DKGVoteExtension {
  return {
    round: BigInt(0),
    phase: 0,
    registrationPubKey: new Uint8Array(),
    registrationPop: new Uint8Array(),
    feldmanCommitments: [],
    encryptedEvaluations: [],
    contributionPop: new Uint8Array(),
    feldmanCommitmentsG2: [],
    decryptionEpoch: BigInt(0),
    decryptionShare: new Uint8Array()
  };
}
/**
 * DKGVoteExtension is the payload validators embed in their vote extensions
 * during DKG ceremonies. The type field determines which data is present.
 * @name DKGVoteExtension
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.DKGVoteExtension
 */
export const DKGVoteExtension = {
  typeUrl: "/sparkdream.shield.v1.DKGVoteExtension",
  encode(message: DKGVoteExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== BigInt(0)) {
      writer.uint32(8).uint64(message.round);
    }
    if (message.phase !== 0) {
      writer.uint32(16).int32(message.phase);
    }
    if (message.registrationPubKey.length !== 0) {
      writer.uint32(26).bytes(message.registrationPubKey);
    }
    if (message.registrationPop.length !== 0) {
      writer.uint32(34).bytes(message.registrationPop);
    }
    for (const v of message.feldmanCommitments) {
      writer.uint32(42).bytes(v!);
    }
    for (const v of message.encryptedEvaluations) {
      EncryptedEvaluation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.contributionPop.length !== 0) {
      writer.uint32(58).bytes(message.contributionPop);
    }
    for (const v of message.feldmanCommitmentsG2) {
      writer.uint32(66).bytes(v!);
    }
    if (message.decryptionEpoch !== BigInt(0)) {
      writer.uint32(72).uint64(message.decryptionEpoch);
    }
    if (message.decryptionShare.length !== 0) {
      writer.uint32(82).bytes(message.decryptionShare);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DKGVoteExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDKGVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64();
          break;
        case 2:
          message.phase = reader.int32() as any;
          break;
        case 3:
          message.registrationPubKey = reader.bytes();
          break;
        case 4:
          message.registrationPop = reader.bytes();
          break;
        case 5:
          message.feldmanCommitments.push(reader.bytes());
          break;
        case 6:
          message.encryptedEvaluations.push(EncryptedEvaluation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.contributionPop = reader.bytes();
          break;
        case 8:
          message.feldmanCommitmentsG2.push(reader.bytes());
          break;
        case 9:
          message.decryptionEpoch = reader.uint64();
          break;
        case 10:
          message.decryptionShare = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DKGVoteExtension>): DKGVoteExtension {
    const message = createBaseDKGVoteExtension();
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.phase = object.phase ?? 0;
    message.registrationPubKey = object.registrationPubKey ?? new Uint8Array();
    message.registrationPop = object.registrationPop ?? new Uint8Array();
    message.feldmanCommitments = object.feldmanCommitments?.map(e => e) || [];
    message.encryptedEvaluations = object.encryptedEvaluations?.map(e => EncryptedEvaluation.fromPartial(e)) || [];
    message.contributionPop = object.contributionPop ?? new Uint8Array();
    message.feldmanCommitmentsG2 = object.feldmanCommitmentsG2?.map(e => e) || [];
    message.decryptionEpoch = object.decryptionEpoch !== undefined && object.decryptionEpoch !== null ? BigInt(object.decryptionEpoch.toString()) : BigInt(0);
    message.decryptionShare = object.decryptionShare ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DKGVoteExtensionAmino): DKGVoteExtension {
    const message = createBaseDKGVoteExtension();
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    }
    if (object.registration_pub_key !== undefined && object.registration_pub_key !== null) {
      message.registrationPubKey = bytesFromBase64(object.registration_pub_key);
    }
    if (object.registration_pop !== undefined && object.registration_pop !== null) {
      message.registrationPop = bytesFromBase64(object.registration_pop);
    }
    message.feldmanCommitments = object.feldman_commitments?.map(e => bytesFromBase64(e)) || [];
    message.encryptedEvaluations = object.encrypted_evaluations?.map(e => EncryptedEvaluation.fromAmino(e)) || [];
    if (object.contribution_pop !== undefined && object.contribution_pop !== null) {
      message.contributionPop = bytesFromBase64(object.contribution_pop);
    }
    message.feldmanCommitmentsG2 = object.feldman_commitments_g2?.map(e => bytesFromBase64(e)) || [];
    if (object.decryption_epoch !== undefined && object.decryption_epoch !== null) {
      message.decryptionEpoch = BigInt(object.decryption_epoch);
    }
    if (object.decryption_share !== undefined && object.decryption_share !== null) {
      message.decryptionShare = bytesFromBase64(object.decryption_share);
    }
    return message;
  },
  toAmino(message: DKGVoteExtension): DKGVoteExtensionAmino {
    const obj: any = {};
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    obj.phase = message.phase === 0 ? undefined : message.phase;
    obj.registration_pub_key = message.registrationPubKey ? base64FromBytes(message.registrationPubKey) : undefined;
    obj.registration_pop = message.registrationPop ? base64FromBytes(message.registrationPop) : undefined;
    if (message.feldmanCommitments) {
      obj.feldman_commitments = message.feldmanCommitments.map(e => base64FromBytes(e));
    } else {
      obj.feldman_commitments = message.feldmanCommitments;
    }
    if (message.encryptedEvaluations) {
      obj.encrypted_evaluations = message.encryptedEvaluations.map(e => e ? EncryptedEvaluation.toAmino(e) : undefined);
    } else {
      obj.encrypted_evaluations = message.encryptedEvaluations;
    }
    obj.contribution_pop = message.contributionPop ? base64FromBytes(message.contributionPop) : undefined;
    if (message.feldmanCommitmentsG2) {
      obj.feldman_commitments_g2 = message.feldmanCommitmentsG2.map(e => base64FromBytes(e));
    } else {
      obj.feldman_commitments_g2 = message.feldmanCommitmentsG2;
    }
    obj.decryption_epoch = message.decryptionEpoch !== BigInt(0) ? message.decryptionEpoch?.toString() : undefined;
    obj.decryption_share = message.decryptionShare ? base64FromBytes(message.decryptionShare) : undefined;
    return obj;
  },
  fromAminoMsg(object: DKGVoteExtensionAminoMsg): DKGVoteExtension {
    return DKGVoteExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: DKGVoteExtensionProtoMsg): DKGVoteExtension {
    return DKGVoteExtension.decode(message.value);
  },
  toProto(message: DKGVoteExtension): Uint8Array {
    return DKGVoteExtension.encode(message).finish();
  },
  toProtoMsg(message: DKGVoteExtension): DKGVoteExtensionProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.DKGVoteExtension",
      value: DKGVoteExtension.encode(message).finish()
    };
  }
};
function createBaseInjectedDKGData(): InjectedDKGData {
  return {
    round: BigInt(0),
    phase: 0,
    extensions: [],
    decryptionShares: []
  };
}
/**
 * InjectedDKGData is the aggregated shield data injected by the block proposer
 * as a pseudo-transaction at position 0 of the block.
 * Carries DKG ceremony data (during REGISTERING/CONTRIBUTING) and/or
 * epoch decryption shares (during ACTIVE phase with pending ops).
 * @name InjectedDKGData
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.InjectedDKGData
 */
export const InjectedDKGData = {
  typeUrl: "/sparkdream.shield.v1.InjectedDKGData",
  encode(message: InjectedDKGData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== BigInt(0)) {
      writer.uint32(8).uint64(message.round);
    }
    if (message.phase !== 0) {
      writer.uint32(16).int32(message.phase);
    }
    for (const v of message.extensions) {
      ValidatorDKGExtension.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.decryptionShares) {
      InjectedDecryptionShare.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InjectedDKGData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInjectedDKGData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64();
          break;
        case 2:
          message.phase = reader.int32() as any;
          break;
        case 3:
          message.extensions.push(ValidatorDKGExtension.decode(reader, reader.uint32()));
          break;
        case 4:
          message.decryptionShares.push(InjectedDecryptionShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InjectedDKGData>): InjectedDKGData {
    const message = createBaseInjectedDKGData();
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.phase = object.phase ?? 0;
    message.extensions = object.extensions?.map(e => ValidatorDKGExtension.fromPartial(e)) || [];
    message.decryptionShares = object.decryptionShares?.map(e => InjectedDecryptionShare.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InjectedDKGDataAmino): InjectedDKGData {
    const message = createBaseInjectedDKGData();
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    }
    message.extensions = object.extensions?.map(e => ValidatorDKGExtension.fromAmino(e)) || [];
    message.decryptionShares = object.decryption_shares?.map(e => InjectedDecryptionShare.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InjectedDKGData): InjectedDKGDataAmino {
    const obj: any = {};
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    obj.phase = message.phase === 0 ? undefined : message.phase;
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? ValidatorDKGExtension.toAmino(e) : undefined);
    } else {
      obj.extensions = message.extensions;
    }
    if (message.decryptionShares) {
      obj.decryption_shares = message.decryptionShares.map(e => e ? InjectedDecryptionShare.toAmino(e) : undefined);
    } else {
      obj.decryption_shares = message.decryptionShares;
    }
    return obj;
  },
  fromAminoMsg(object: InjectedDKGDataAminoMsg): InjectedDKGData {
    return InjectedDKGData.fromAmino(object.value);
  },
  fromProtoMsg(message: InjectedDKGDataProtoMsg): InjectedDKGData {
    return InjectedDKGData.decode(message.value);
  },
  toProto(message: InjectedDKGData): Uint8Array {
    return InjectedDKGData.encode(message).finish();
  },
  toProtoMsg(message: InjectedDKGData): InjectedDKGDataProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.InjectedDKGData",
      value: InjectedDKGData.encode(message).finish()
    };
  }
};
function createBaseInjectedDecryptionShare(): InjectedDecryptionShare {
  return {
    validatorAddress: new Uint8Array(),
    epoch: BigInt(0),
    share: new Uint8Array()
  };
}
/**
 * InjectedDecryptionShare pairs a validator's consensus address with their
 * epoch decryption share for threshold reconstruction.
 * @name InjectedDecryptionShare
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.InjectedDecryptionShare
 */
export const InjectedDecryptionShare = {
  typeUrl: "/sparkdream.shield.v1.InjectedDecryptionShare",
  encode(message: InjectedDecryptionShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress.length !== 0) {
      writer.uint32(10).bytes(message.validatorAddress);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.share.length !== 0) {
      writer.uint32(26).bytes(message.share);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InjectedDecryptionShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInjectedDecryptionShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.bytes();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.share = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InjectedDecryptionShare>): InjectedDecryptionShare {
    const message = createBaseInjectedDecryptionShare();
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.share = object.share ?? new Uint8Array();
    return message;
  },
  fromAmino(object: InjectedDecryptionShareAmino): InjectedDecryptionShare {
    const message = createBaseInjectedDecryptionShare();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = bytesFromBase64(object.validator_address);
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.share !== undefined && object.share !== null) {
      message.share = bytesFromBase64(object.share);
    }
    return message;
  },
  toAmino(message: InjectedDecryptionShare): InjectedDecryptionShareAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress ? base64FromBytes(message.validatorAddress) : undefined;
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.share = message.share ? base64FromBytes(message.share) : undefined;
    return obj;
  },
  fromAminoMsg(object: InjectedDecryptionShareAminoMsg): InjectedDecryptionShare {
    return InjectedDecryptionShare.fromAmino(object.value);
  },
  fromProtoMsg(message: InjectedDecryptionShareProtoMsg): InjectedDecryptionShare {
    return InjectedDecryptionShare.decode(message.value);
  },
  toProto(message: InjectedDecryptionShare): Uint8Array {
    return InjectedDecryptionShare.encode(message).finish();
  },
  toProtoMsg(message: InjectedDecryptionShare): InjectedDecryptionShareProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.InjectedDecryptionShare",
      value: InjectedDecryptionShare.encode(message).finish()
    };
  }
};
function createBaseValidatorDKGExtension(): ValidatorDKGExtension {
  return {
    validatorAddress: new Uint8Array(),
    extension: DKGVoteExtension.fromPartial({})
  };
}
/**
 * ValidatorDKGExtension pairs a validator's consensus address with their DKG vote extension.
 * @name ValidatorDKGExtension
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.ValidatorDKGExtension
 */
export const ValidatorDKGExtension = {
  typeUrl: "/sparkdream.shield.v1.ValidatorDKGExtension",
  encode(message: ValidatorDKGExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress.length !== 0) {
      writer.uint32(10).bytes(message.validatorAddress);
    }
    if (message.extension !== undefined) {
      DKGVoteExtension.encode(message.extension, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorDKGExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorDKGExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.bytes();
          break;
        case 2:
          message.extension = DKGVoteExtension.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorDKGExtension>): ValidatorDKGExtension {
    const message = createBaseValidatorDKGExtension();
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.extension = object.extension !== undefined && object.extension !== null ? DKGVoteExtension.fromPartial(object.extension) : undefined;
    return message;
  },
  fromAmino(object: ValidatorDKGExtensionAmino): ValidatorDKGExtension {
    const message = createBaseValidatorDKGExtension();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = bytesFromBase64(object.validator_address);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = DKGVoteExtension.fromAmino(object.extension);
    }
    return message;
  },
  toAmino(message: ValidatorDKGExtension): ValidatorDKGExtensionAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress ? base64FromBytes(message.validatorAddress) : undefined;
    obj.extension = message.extension ? DKGVoteExtension.toAmino(message.extension) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorDKGExtensionAminoMsg): ValidatorDKGExtension {
    return ValidatorDKGExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorDKGExtensionProtoMsg): ValidatorDKGExtension {
    return ValidatorDKGExtension.decode(message.value);
  },
  toProto(message: ValidatorDKGExtension): Uint8Array {
    return ValidatorDKGExtension.encode(message).finish();
  },
  toProtoMsg(message: ValidatorDKGExtension): ValidatorDKGExtensionProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.ValidatorDKGExtension",
      value: ValidatorDKGExtension.encode(message).finish()
    };
  }
};
function createBaseVerificationKey(): VerificationKey {
  return {
    circuitId: "",
    vkBytes: new Uint8Array(),
    description: ""
  };
}
/**
 * VerificationKey stores a ZK circuit verification key.
 * @name VerificationKey
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.VerificationKey
 */
export const VerificationKey = {
  typeUrl: "/sparkdream.shield.v1.VerificationKey",
  encode(message: VerificationKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.circuitId !== "") {
      writer.uint32(10).string(message.circuitId);
    }
    if (message.vkBytes.length !== 0) {
      writer.uint32(18).bytes(message.vkBytes);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerificationKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circuitId = reader.string();
          break;
        case 2:
          message.vkBytes = reader.bytes();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerificationKey>): VerificationKey {
    const message = createBaseVerificationKey();
    message.circuitId = object.circuitId ?? "";
    message.vkBytes = object.vkBytes ?? new Uint8Array();
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: VerificationKeyAmino): VerificationKey {
    const message = createBaseVerificationKey();
    if (object.circuit_id !== undefined && object.circuit_id !== null) {
      message.circuitId = object.circuit_id;
    }
    if (object.vk_bytes !== undefined && object.vk_bytes !== null) {
      message.vkBytes = bytesFromBase64(object.vk_bytes);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: VerificationKey): VerificationKeyAmino {
    const obj: any = {};
    obj.circuit_id = message.circuitId === "" ? undefined : message.circuitId;
    obj.vk_bytes = message.vkBytes ? base64FromBytes(message.vkBytes) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: VerificationKeyAminoMsg): VerificationKey {
    return VerificationKey.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationKeyProtoMsg): VerificationKey {
    return VerificationKey.decode(message.value);
  },
  toProto(message: VerificationKey): Uint8Array {
    return VerificationKey.encode(message).finish();
  },
  toProtoMsg(message: VerificationKey): VerificationKeyProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.VerificationKey",
      value: VerificationKey.encode(message).finish()
    };
  }
};
function createBaseIdentityRateLimitEntry(): IdentityRateLimitEntry {
  return {
    epoch: BigInt(0),
    rateLimitNullifierHex: "",
    count: BigInt(0)
  };
}
/**
 * IdentityRateLimitEntry is a genesis helper for exporting rate limit state.
 * @name IdentityRateLimitEntry
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.IdentityRateLimitEntry
 */
export const IdentityRateLimitEntry = {
  typeUrl: "/sparkdream.shield.v1.IdentityRateLimitEntry",
  encode(message: IdentityRateLimitEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.rateLimitNullifierHex !== "") {
      writer.uint32(18).string(message.rateLimitNullifierHex);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityRateLimitEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityRateLimitEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.rateLimitNullifierHex = reader.string();
          break;
        case 3:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentityRateLimitEntry>): IdentityRateLimitEntry {
    const message = createBaseIdentityRateLimitEntry();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.rateLimitNullifierHex = object.rateLimitNullifierHex ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IdentityRateLimitEntryAmino): IdentityRateLimitEntry {
    const message = createBaseIdentityRateLimitEntry();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.rate_limit_nullifier_hex !== undefined && object.rate_limit_nullifier_hex !== null) {
      message.rateLimitNullifierHex = object.rate_limit_nullifier_hex;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: IdentityRateLimitEntry): IdentityRateLimitEntryAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.rate_limit_nullifier_hex = message.rateLimitNullifierHex === "" ? undefined : message.rateLimitNullifierHex;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentityRateLimitEntryAminoMsg): IdentityRateLimitEntry {
    return IdentityRateLimitEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityRateLimitEntryProtoMsg): IdentityRateLimitEntry {
    return IdentityRateLimitEntry.decode(message.value);
  },
  toProto(message: IdentityRateLimitEntry): Uint8Array {
    return IdentityRateLimitEntry.encode(message).finish();
  },
  toProtoMsg(message: IdentityRateLimitEntry): IdentityRateLimitEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.IdentityRateLimitEntry",
      value: IdentityRateLimitEntry.encode(message).finish()
    };
  }
};
function createBaseTLEMissCounterEntry(): TLEMissCounterEntry {
  return {
    validatorAddress: "",
    missCount: BigInt(0)
  };
}
/**
 * TLEMissCounterEntry is a genesis helper for exporting TLE miss counters.
 * @name TLEMissCounterEntry
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.TLEMissCounterEntry
 */
export const TLEMissCounterEntry = {
  typeUrl: "/sparkdream.shield.v1.TLEMissCounterEntry",
  encode(message: TLEMissCounterEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.missCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.missCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TLEMissCounterEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTLEMissCounterEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.missCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TLEMissCounterEntry>): TLEMissCounterEntry {
    const message = createBaseTLEMissCounterEntry();
    message.validatorAddress = object.validatorAddress ?? "";
    message.missCount = object.missCount !== undefined && object.missCount !== null ? BigInt(object.missCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TLEMissCounterEntryAmino): TLEMissCounterEntry {
    const message = createBaseTLEMissCounterEntry();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.miss_count !== undefined && object.miss_count !== null) {
      message.missCount = BigInt(object.miss_count);
    }
    return message;
  },
  toAmino(message: TLEMissCounterEntry): TLEMissCounterEntryAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.miss_count = message.missCount !== BigInt(0) ? message.missCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TLEMissCounterEntryAminoMsg): TLEMissCounterEntry {
    return TLEMissCounterEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: TLEMissCounterEntryProtoMsg): TLEMissCounterEntry {
    return TLEMissCounterEntry.decode(message.value);
  },
  toProto(message: TLEMissCounterEntry): Uint8Array {
    return TLEMissCounterEntry.encode(message).finish();
  },
  toProtoMsg(message: TLEMissCounterEntry): TLEMissCounterEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.TLEMissCounterEntry",
      value: TLEMissCounterEntry.encode(message).finish()
    };
  }
};