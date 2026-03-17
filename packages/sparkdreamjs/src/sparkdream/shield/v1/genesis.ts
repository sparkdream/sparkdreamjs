//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { ShieldedOpRegistration, ShieldedOpRegistrationAmino, UsedNullifier, UsedNullifierAmino, DayFunding, DayFundingAmino, VerificationKey, VerificationKeyAmino, TLEKeySet, TLEKeySetAmino, PendingShieldedOp, PendingShieldedOpAmino, ShieldEpochState, ShieldEpochStateAmino, ShieldEpochDecryptionKey, ShieldEpochDecryptionKeyAmino, IdentityRateLimitEntry, IdentityRateLimitEntryAmino, ShieldDecryptionShare, ShieldDecryptionShareAmino, TLEMissCounterEntry, TLEMissCounterEntryAmino, DKGState, DKGStateAmino, DKGContributionEntry, DKGContributionEntryAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the shield module's genesis state.
 * @name GenesisState
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * Registered shielded operations
   */
  registeredOps: ShieldedOpRegistration[];
  /**
   * Used nullifiers
   */
  usedNullifiers: UsedNullifier[];
  /**
   * Day funding entries
   */
  dayFundings: DayFunding[];
  /**
   * ZK proof verification keys
   */
  verificationKeys: VerificationKey[];
  /**
   * TLE key set from DKG ceremony
   */
  tleKeySet: TLEKeySet;
  /**
   * Pending encrypted batch operations
   */
  pendingOps: PendingShieldedOp[];
  /**
   * Shield epoch state
   */
  shieldEpochState: ShieldEpochState;
  /**
   * Epoch decryption keys
   */
  decryptionKeys: ShieldEpochDecryptionKey[];
  /**
   * Next pending operation ID
   */
  nextPendingOpId: bigint;
  /**
   * Identity rate limit entries
   */
  identityRateLimits: IdentityRateLimitEntry[];
  /**
   * Pending nullifiers (hex strings)
   */
  pendingNullifiers: string[];
  /**
   * Decryption shares
   */
  decryptionShares: ShieldDecryptionShare[];
  /**
   * TLE miss counters
   */
  tleMissCounters: TLEMissCounterEntry[];
  /**
   * DKG ceremony state
   */
  dkgState: DKGState;
  /**
   * DKG contributions for the current round
   */
  dkgContributions: DKGContributionEntry[];
  /**
   * DKG registrations (pub keys from REGISTERING phase)
   */
  dkgRegistrations: DKGContributionEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.shield.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the shield module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * Registered shielded operations
   */
  registered_ops?: ShieldedOpRegistrationAmino[];
  /**
   * Used nullifiers
   */
  used_nullifiers?: UsedNullifierAmino[];
  /**
   * Day funding entries
   */
  day_fundings?: DayFundingAmino[];
  /**
   * ZK proof verification keys
   */
  verification_keys?: VerificationKeyAmino[];
  /**
   * TLE key set from DKG ceremony
   */
  tle_key_set?: TLEKeySetAmino;
  /**
   * Pending encrypted batch operations
   */
  pending_ops?: PendingShieldedOpAmino[];
  /**
   * Shield epoch state
   */
  shield_epoch_state?: ShieldEpochStateAmino;
  /**
   * Epoch decryption keys
   */
  decryption_keys?: ShieldEpochDecryptionKeyAmino[];
  /**
   * Next pending operation ID
   */
  next_pending_op_id?: string;
  /**
   * Identity rate limit entries
   */
  identity_rate_limits?: IdentityRateLimitEntryAmino[];
  /**
   * Pending nullifiers (hex strings)
   */
  pending_nullifiers?: string[];
  /**
   * Decryption shares
   */
  decryption_shares?: ShieldDecryptionShareAmino[];
  /**
   * TLE miss counters
   */
  tle_miss_counters?: TLEMissCounterEntryAmino[];
  /**
   * DKG ceremony state
   */
  dkg_state?: DKGStateAmino;
  /**
   * DKG contributions for the current round
   */
  dkg_contributions?: DKGContributionEntryAmino[];
  /**
   * DKG registrations (pub keys from REGISTERING phase)
   */
  dkg_registrations?: DKGContributionEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.shield.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registeredOps: [],
    usedNullifiers: [],
    dayFundings: [],
    verificationKeys: [],
    tleKeySet: TLEKeySet.fromPartial({}),
    pendingOps: [],
    shieldEpochState: ShieldEpochState.fromPartial({}),
    decryptionKeys: [],
    nextPendingOpId: BigInt(0),
    identityRateLimits: [],
    pendingNullifiers: [],
    decryptionShares: [],
    tleMissCounters: [],
    dkgState: DKGState.fromPartial({}),
    dkgContributions: [],
    dkgRegistrations: []
  };
}
/**
 * GenesisState defines the shield module's genesis state.
 * @name GenesisState
 * @package sparkdream.shield.v1
 * @see proto type: sparkdream.shield.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.shield.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredOps) {
      ShieldedOpRegistration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.usedNullifiers) {
      UsedNullifier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.dayFundings) {
      DayFunding.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.verificationKeys) {
      VerificationKey.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.tleKeySet !== undefined) {
      TLEKeySet.encode(message.tleKeySet, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.pendingOps) {
      PendingShieldedOp.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.shieldEpochState !== undefined) {
      ShieldEpochState.encode(message.shieldEpochState, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.decryptionKeys) {
      ShieldEpochDecryptionKey.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.nextPendingOpId !== BigInt(0)) {
      writer.uint32(80).uint64(message.nextPendingOpId);
    }
    for (const v of message.identityRateLimits) {
      IdentityRateLimitEntry.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.pendingNullifiers) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.decryptionShares) {
      ShieldDecryptionShare.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.tleMissCounters) {
      TLEMissCounterEntry.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.dkgState !== undefined) {
      DKGState.encode(message.dkgState, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.dkgContributions) {
      DKGContributionEntry.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.dkgRegistrations) {
      DKGContributionEntry.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.registeredOps.push(ShieldedOpRegistration.decode(reader, reader.uint32()));
          break;
        case 3:
          message.usedNullifiers.push(UsedNullifier.decode(reader, reader.uint32()));
          break;
        case 4:
          message.dayFundings.push(DayFunding.decode(reader, reader.uint32()));
          break;
        case 5:
          message.verificationKeys.push(VerificationKey.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tleKeySet = TLEKeySet.decode(reader, reader.uint32());
          break;
        case 7:
          message.pendingOps.push(PendingShieldedOp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.shieldEpochState = ShieldEpochState.decode(reader, reader.uint32());
          break;
        case 9:
          message.decryptionKeys.push(ShieldEpochDecryptionKey.decode(reader, reader.uint32()));
          break;
        case 10:
          message.nextPendingOpId = reader.uint64();
          break;
        case 11:
          message.identityRateLimits.push(IdentityRateLimitEntry.decode(reader, reader.uint32()));
          break;
        case 12:
          message.pendingNullifiers.push(reader.string());
          break;
        case 13:
          message.decryptionShares.push(ShieldDecryptionShare.decode(reader, reader.uint32()));
          break;
        case 14:
          message.tleMissCounters.push(TLEMissCounterEntry.decode(reader, reader.uint32()));
          break;
        case 15:
          message.dkgState = DKGState.decode(reader, reader.uint32());
          break;
        case 16:
          message.dkgContributions.push(DKGContributionEntry.decode(reader, reader.uint32()));
          break;
        case 17:
          message.dkgRegistrations.push(DKGContributionEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.registeredOps = object.registeredOps?.map(e => ShieldedOpRegistration.fromPartial(e)) || [];
    message.usedNullifiers = object.usedNullifiers?.map(e => UsedNullifier.fromPartial(e)) || [];
    message.dayFundings = object.dayFundings?.map(e => DayFunding.fromPartial(e)) || [];
    message.verificationKeys = object.verificationKeys?.map(e => VerificationKey.fromPartial(e)) || [];
    message.tleKeySet = object.tleKeySet !== undefined && object.tleKeySet !== null ? TLEKeySet.fromPartial(object.tleKeySet) : undefined;
    message.pendingOps = object.pendingOps?.map(e => PendingShieldedOp.fromPartial(e)) || [];
    message.shieldEpochState = object.shieldEpochState !== undefined && object.shieldEpochState !== null ? ShieldEpochState.fromPartial(object.shieldEpochState) : undefined;
    message.decryptionKeys = object.decryptionKeys?.map(e => ShieldEpochDecryptionKey.fromPartial(e)) || [];
    message.nextPendingOpId = object.nextPendingOpId !== undefined && object.nextPendingOpId !== null ? BigInt(object.nextPendingOpId.toString()) : BigInt(0);
    message.identityRateLimits = object.identityRateLimits?.map(e => IdentityRateLimitEntry.fromPartial(e)) || [];
    message.pendingNullifiers = object.pendingNullifiers?.map(e => e) || [];
    message.decryptionShares = object.decryptionShares?.map(e => ShieldDecryptionShare.fromPartial(e)) || [];
    message.tleMissCounters = object.tleMissCounters?.map(e => TLEMissCounterEntry.fromPartial(e)) || [];
    message.dkgState = object.dkgState !== undefined && object.dkgState !== null ? DKGState.fromPartial(object.dkgState) : undefined;
    message.dkgContributions = object.dkgContributions?.map(e => DKGContributionEntry.fromPartial(e)) || [];
    message.dkgRegistrations = object.dkgRegistrations?.map(e => DKGContributionEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.registeredOps = object.registered_ops?.map(e => ShieldedOpRegistration.fromAmino(e)) || [];
    message.usedNullifiers = object.used_nullifiers?.map(e => UsedNullifier.fromAmino(e)) || [];
    message.dayFundings = object.day_fundings?.map(e => DayFunding.fromAmino(e)) || [];
    message.verificationKeys = object.verification_keys?.map(e => VerificationKey.fromAmino(e)) || [];
    if (object.tle_key_set !== undefined && object.tle_key_set !== null) {
      message.tleKeySet = TLEKeySet.fromAmino(object.tle_key_set);
    }
    message.pendingOps = object.pending_ops?.map(e => PendingShieldedOp.fromAmino(e)) || [];
    if (object.shield_epoch_state !== undefined && object.shield_epoch_state !== null) {
      message.shieldEpochState = ShieldEpochState.fromAmino(object.shield_epoch_state);
    }
    message.decryptionKeys = object.decryption_keys?.map(e => ShieldEpochDecryptionKey.fromAmino(e)) || [];
    if (object.next_pending_op_id !== undefined && object.next_pending_op_id !== null) {
      message.nextPendingOpId = BigInt(object.next_pending_op_id);
    }
    message.identityRateLimits = object.identity_rate_limits?.map(e => IdentityRateLimitEntry.fromAmino(e)) || [];
    message.pendingNullifiers = object.pending_nullifiers?.map(e => e) || [];
    message.decryptionShares = object.decryption_shares?.map(e => ShieldDecryptionShare.fromAmino(e)) || [];
    message.tleMissCounters = object.tle_miss_counters?.map(e => TLEMissCounterEntry.fromAmino(e)) || [];
    if (object.dkg_state !== undefined && object.dkg_state !== null) {
      message.dkgState = DKGState.fromAmino(object.dkg_state);
    }
    message.dkgContributions = object.dkg_contributions?.map(e => DKGContributionEntry.fromAmino(e)) || [];
    message.dkgRegistrations = object.dkg_registrations?.map(e => DKGContributionEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.registeredOps) {
      obj.registered_ops = message.registeredOps.map(e => e ? ShieldedOpRegistration.toAmino(e) : undefined);
    } else {
      obj.registered_ops = message.registeredOps;
    }
    if (message.usedNullifiers) {
      obj.used_nullifiers = message.usedNullifiers.map(e => e ? UsedNullifier.toAmino(e) : undefined);
    } else {
      obj.used_nullifiers = message.usedNullifiers;
    }
    if (message.dayFundings) {
      obj.day_fundings = message.dayFundings.map(e => e ? DayFunding.toAmino(e) : undefined);
    } else {
      obj.day_fundings = message.dayFundings;
    }
    if (message.verificationKeys) {
      obj.verification_keys = message.verificationKeys.map(e => e ? VerificationKey.toAmino(e) : undefined);
    } else {
      obj.verification_keys = message.verificationKeys;
    }
    obj.tle_key_set = message.tleKeySet ? TLEKeySet.toAmino(message.tleKeySet) : undefined;
    if (message.pendingOps) {
      obj.pending_ops = message.pendingOps.map(e => e ? PendingShieldedOp.toAmino(e) : undefined);
    } else {
      obj.pending_ops = message.pendingOps;
    }
    obj.shield_epoch_state = message.shieldEpochState ? ShieldEpochState.toAmino(message.shieldEpochState) : undefined;
    if (message.decryptionKeys) {
      obj.decryption_keys = message.decryptionKeys.map(e => e ? ShieldEpochDecryptionKey.toAmino(e) : undefined);
    } else {
      obj.decryption_keys = message.decryptionKeys;
    }
    obj.next_pending_op_id = message.nextPendingOpId !== BigInt(0) ? message.nextPendingOpId?.toString() : undefined;
    if (message.identityRateLimits) {
      obj.identity_rate_limits = message.identityRateLimits.map(e => e ? IdentityRateLimitEntry.toAmino(e) : undefined);
    } else {
      obj.identity_rate_limits = message.identityRateLimits;
    }
    if (message.pendingNullifiers) {
      obj.pending_nullifiers = message.pendingNullifiers.map(e => e);
    } else {
      obj.pending_nullifiers = message.pendingNullifiers;
    }
    if (message.decryptionShares) {
      obj.decryption_shares = message.decryptionShares.map(e => e ? ShieldDecryptionShare.toAmino(e) : undefined);
    } else {
      obj.decryption_shares = message.decryptionShares;
    }
    if (message.tleMissCounters) {
      obj.tle_miss_counters = message.tleMissCounters.map(e => e ? TLEMissCounterEntry.toAmino(e) : undefined);
    } else {
      obj.tle_miss_counters = message.tleMissCounters;
    }
    obj.dkg_state = message.dkgState ? DKGState.toAmino(message.dkgState) : undefined;
    if (message.dkgContributions) {
      obj.dkg_contributions = message.dkgContributions.map(e => e ? DKGContributionEntry.toAmino(e) : undefined);
    } else {
      obj.dkg_contributions = message.dkgContributions;
    }
    if (message.dkgRegistrations) {
      obj.dkg_registrations = message.dkgRegistrations.map(e => e ? DKGContributionEntry.toAmino(e) : undefined);
    } else {
      obj.dkg_registrations = message.dkgRegistrations;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.shield.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};