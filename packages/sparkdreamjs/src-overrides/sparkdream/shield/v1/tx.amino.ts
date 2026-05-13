//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for the broader rationale.
//
// MsgShieldedExec wraps a single `google.protobuf.Any inner_message`. The
// auto-generated toAmino calls Any.toAmino directly, which attaches raw
// `{type, value: Uint8Array}` — JSON.stringify renders the Uint8Array as
// `{"0":N,"1":N,…}` (numeric, unsorted keys), breaking Ledger's amino-JSON
// validator and producing sign bytes the chain can't reconstruct. Same root
// cause as MsgSubmitProposal in commons; here we route the inner Any through
// the consumer-provided AminoTypes so it's expanded into the proper
// `{type: "<aminoType>", value: <amino-encoded fields>}` shape.

import {
  MsgUpdateParams, MsgShieldedExec, MsgTriggerDkg,
  MsgRegisterShieldedOp, MsgDeregisterShieldedOp,
} from "./tx";
import { base64FromBytes, bytesFromBase64 } from "../../../helpers";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

export const AminoConverter = {
  "/sparkdream.shield.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/shield/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.shield.v1.MsgShieldedExec": {
    aminoType: "sparkdream/x/shield/MsgShieldedExec",
    toAmino(message: any): any {
      const obj: any = {};
      obj.submitter = message.submitter === "" ? undefined : message.submitter;
      obj.inner_message = message.innerMessage ? anyToAmino(message.innerMessage) : undefined;
      obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
      obj.nullifier = message.nullifier ? base64FromBytes(message.nullifier) : undefined;
      obj.rate_limit_nullifier = message.rateLimitNullifier ? base64FromBytes(message.rateLimitNullifier) : undefined;
      obj.merkle_root = message.merkleRoot ? base64FromBytes(message.merkleRoot) : undefined;
      obj.proof_domain = message.proofDomain === 0 ? undefined : message.proofDomain;
      obj.min_trust_level = message.minTrustLevel === 0 ? undefined : message.minTrustLevel;
      obj.exec_mode = message.execMode === 0 ? undefined : message.execMode;
      obj.encrypted_payload = message.encryptedPayload ? base64FromBytes(message.encryptedPayload) : undefined;
      obj.target_epoch = message.targetEpoch !== BigInt(0) ? message.targetEpoch?.toString() : undefined;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        submitter: object.submitter ?? "",
        innerMessage: object.inner_message ? aminoToAny(object.inner_message) : undefined,
        proof: object.proof !== undefined && object.proof !== null
          ? bytesFromBase64(object.proof)
          : new Uint8Array(),
        nullifier: object.nullifier !== undefined && object.nullifier !== null
          ? bytesFromBase64(object.nullifier)
          : new Uint8Array(),
        rateLimitNullifier: object.rate_limit_nullifier !== undefined && object.rate_limit_nullifier !== null
          ? bytesFromBase64(object.rate_limit_nullifier)
          : new Uint8Array(),
        merkleRoot: object.merkle_root !== undefined && object.merkle_root !== null
          ? bytesFromBase64(object.merkle_root)
          : new Uint8Array(),
        proofDomain: object.proof_domain ?? 0,
        minTrustLevel: object.min_trust_level ?? 0,
        execMode: object.exec_mode ?? 0,
        encryptedPayload: object.encrypted_payload !== undefined && object.encrypted_payload !== null
          ? bytesFromBase64(object.encrypted_payload)
          : new Uint8Array(),
        targetEpoch: object.target_epoch !== undefined && object.target_epoch !== null
          ? BigInt(object.target_epoch)
          : BigInt(0),
      };
    },
  },
  "/sparkdream.shield.v1.MsgTriggerDkg": {
    aminoType: "sparkdream/x/shield/MsgTriggerDkg",
    toAmino: MsgTriggerDkg.toAmino,
    fromAmino: MsgTriggerDkg.fromAmino,
  },
  "/sparkdream.shield.v1.MsgRegisterShieldedOp": {
    aminoType: "sparkdream/x/shield/MsgRegisterShieldedOp",
    toAmino: MsgRegisterShieldedOp.toAmino,
    fromAmino: MsgRegisterShieldedOp.fromAmino,
  },
  "/sparkdream.shield.v1.MsgDeregisterShieldedOp": {
    aminoType: "sparkdream/x/shield/MsgDeregisterShieldedOp",
    toAmino: MsgDeregisterShieldedOp.toAmino,
    fromAmino: MsgDeregisterShieldedOp.fromAmino,
  },
};
