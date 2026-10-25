// Runtime checks for the hand-written amino overrides that patch Telescope's
// generated toAmino (src-overrides/sparkdream/<mod>/v1/tx.amino.ts). The
// overrides are @ts-nocheck, so a wrong import or field name only shows up here.
//
// For every patched message:
//   - with every repeated field populated, the override must render exactly
//     what the generated toAmino renders (the patch only changes empty lists);
//   - with every repeated field empty, those keys must be absent, matching
//     cosmossdk.io/x/tx/signing/aminojson's omitempty.
// Messages carrying google.protobuf.Any must render {type, value} via the
// nested-amino registry and round-trip through fromAmino.
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createDefaultAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { configureNestedAminoConverter } from "../src/nested-amino";
import * as artifactTx from "../src/sparkdream/artifact/v1/tx";
import { AminoConverter as artifactAmino } from "../src/sparkdream/artifact/v1/tx.amino";
import * as federationTx from "../src/sparkdream/federation/v1/tx";
import { AminoConverter as federationAmino } from "../src/sparkdream/federation/v1/tx.amino";
import * as seasonTx from "../src/sparkdream/season/v1/tx";
import { AminoConverter as seasonAmino } from "../src/sparkdream/season/v1/tx.amino";
import * as vaultTx from "../src/sparkdream/vault/v1/tx";
import { AminoConverter as vaultAmino } from "../src/sparkdream/vault/v1/tx.amino";
import { load as vaultLoad } from "../src/sparkdream/vault/v1/tx.registry";
import * as guardianTx from "../src/sparkdream/guardian/v1/tx";
import { AminoConverter as guardianAmino } from "../src/sparkdream/guardian/v1/tx.amino";
import { load as guardianLoad } from "../src/sparkdream/guardian/v1/tx.registry";

const ADDR = "sprkdrm1addr0000000000000000000000000000000";
const OTHER = "sprkdrm1other00000000000000000000000000000";

const roundTrip = (v: any) => JSON.parse(JSON.stringify(v));

// [module tx, amino map, message name, populated value, repeated amino keys]
const cases: [any, any, string, any, string[]][] = [
  [artifactTx, artifactAmino, "MsgCreateClass", {
    creator: ADDR, name: "c", symbol: "C", maxSupply: BigInt(10),
    royaltyRecipients: [{ address: OTHER, weightBps: 100 }], minters: [OTHER],
  }, ["royalty_recipients", "minters"]],
  [artifactTx, artifactAmino, "MsgUpdateClass", {
    owner: ADDR, classId: BigInt(1), royaltyRecipients: [{ address: OTHER, weightBps: 100 }],
    updateMask: ["name"],
  }, ["royalty_recipients", "update_mask"]],
  [artifactTx, artifactAmino, "MsgSetMinters", {
    owner: ADDR, classId: BigInt(1), add: [OTHER], remove: [ADDR],
  }, ["add", "remove"]],
  [artifactTx, artifactAmino, "MsgRevoke", {
    owner: ADDR, classId: BigInt(1), tokenIds: [BigInt(1), BigInt(2)], reason: "r",
  }, ["token_ids"]],
  [artifactTx, artifactAmino, "MsgIssue", {
    minter: ADDR, classId: BigInt(1), recipients: [OTHER], metadata: { name: "n" },
  }, ["recipients"]],
  [artifactTx, artifactAmino, "MsgRedeem", {
    signer: ADDR, classId: BigInt(1), tokenIds: [BigInt(3)],
  }, ["token_ids"]],
  [artifactTx, artifactAmino, "MsgReveal", {
    signer: ADDR, classId: BigInt(1), tokenId: BigInt(1), salt: "s", proof: ["ab"],
  }, ["proof"]],
  [artifactTx, artifactAmino, "MsgCraft", {
    crafter: ADDR, classId: BigInt(1), recipeId: BigInt(2),
    inputTokens: [{ classId: BigInt(1), tokenId: BigInt(5) }],
  }, ["input_tokens"]],
  [seasonTx, seasonAmino, "MsgCreateQuest", {
    authority: ADDR, questId: "q", name: "n", xpReward: BigInt(5),
    objectives: [{ description: "o", target: BigInt(1) }],
  }, ["objectives"]],
  [seasonTx, seasonAmino, "MsgUpdateQuest", {
    authority: ADDR, questId: "q", active: true,
    objectives: [{ description: "o", target: BigInt(1) }],
  }, ["objectives"]],
  [vaultTx, vaultAmino, "MsgCreateVault", {
    creator: ADDR, signers: [{ address: OTHER, weight: BigInt(1) }], threshold: BigInt(1), label: "v",
  }, ["signers"]],
  [vaultTx, vaultAmino, "MsgUpdateVault", {
    vault: ADDR, signers: [{ address: OTHER, weight: BigInt(1) }], threshold: BigInt(1),
  }, ["signers"]],
];

describe("amino omitempty overrides", () => {
  for (const [tx, amino, name, value, keys] of cases) {
    const conv = amino[tx[name].typeUrl];
    const msg = tx[name].fromPartial(value);
    const empty = tx[name].fromPartial({ ...value, ...Object.fromEntries(
      Object.entries(value).filter(([, v]) => Array.isArray(v)).map(([k]): [string, any[]] => [k, []])) });

    it(`${name}: populated matches generated toAmino`, () => {
      const out = roundTrip(conv.toAmino(msg));
      for (const k of keys) expect(out[k]?.length).toBeGreaterThan(0);
      expect(out).toEqual(roundTrip(tx[name].toAmino(msg)));
    });

    it(`${name}: empty repeated fields are omitted`, () => {
      const out = roundTrip(conv.toAmino(empty));
      for (const k of keys) expect(out).not.toHaveProperty(k);
      const generated = roundTrip(tx[name].toAmino(empty));
      for (const k of keys) delete generated[k];
      expect(out).toEqual(generated);
    });
  }

  it("federation MsgUpdatePeerPolicy omits empty lists inside policy", () => {
    const conv = federationAmino["/sparkdream.federation.v1.MsgUpdatePeerPolicy"];
    const full = federationTx.MsgUpdatePeerPolicy.fromPartial({
      authority: ADDR, peerId: "p",
      policy: {
        peerId: "p", outboundContentTypes: ["a"], inboundContentTypes: ["b"],
        blockedIdentities: ["c"], contentHosts: ["d"], allowedIdentities: ["e"],
        requireReview: true, inboundRateLimitPerEpoch: BigInt(3), curation: { collectionId: BigInt(9) },
      },
    });
    expect(roundTrip(conv.toAmino(full))).toEqual(roundTrip(federationTx.MsgUpdatePeerPolicy.toAmino(full)));

    const empty = federationTx.MsgUpdatePeerPolicy.fromPartial({
      authority: ADDR, peerId: "p", policy: { peerId: "p", requireReview: true },
    });
    expect(roundTrip(conv.toAmino(empty))).toEqual({
      authority: ADDR, peer_id: "p", policy: { peer_id: "p", require_review: true },
    });
  });
});

describe("Any-carrying overrides", () => {
  const registry = new Registry(defaultRegistryTypes);
  vaultLoad(registry);
  guardianLoad(registry);
  const aminoTypes = new AminoTypes({
    ...createDefaultAminoConverters(), ...vaultAmino, ...guardianAmino,
  });
  configureNestedAminoConverter({ registry: registry as any, aminoTypes: aminoTypes as any });

  const send = registry.encodeAsAny({
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: { fromAddress: ADDR, toAddress: OTHER, amount: [{ denom: "uspark", amount: "7" }] },
  });
  const sendAmino = {
    type: "cosmos-sdk/MsgSend",
    value: { from_address: ADDR, to_address: OTHER, amount: [{ denom: "uspark", amount: "7" }] },
  };

  it("vault MsgPropose renders inner msgs as amino and round-trips", () => {
    const value = vaultTx.MsgPropose.fromPartial({ signer: ADDR, vaultId: BigInt(4), messages: [send], memo: "m" });
    const signed = aminoTypes.toAmino({ typeUrl: "/sparkdream.vault.v1.MsgPropose", value });
    expect(roundTrip(signed)).toEqual({
      type: "sparkdream/x/vault/MsgPropose",
      value: { signer: ADDR, vault_id: "4", messages: [sendAmino], memo: "m" },
    });
    const back = aminoTypes.fromAmino(signed);
    expect(vaultTx.MsgPropose.encode(back.value).finish()).toEqual(vaultTx.MsgPropose.encode(value).finish());
  });

  it("vault MsgPropose omits empty messages", () => {
    const value = vaultTx.MsgPropose.fromPartial({ signer: ADDR, vaultId: BigInt(4) });
    expect(roundTrip(aminoTypes.toAmino({ typeUrl: "/sparkdream.vault.v1.MsgPropose", value })).value)
      .toEqual({ signer: ADDR, vault_id: "4" });
  });

  it("guardian MsgExec renders inner as amino and round-trips", () => {
    const value = guardianTx.MsgExec.fromPartial({ authority: ADDR, inner: send });
    const signed = aminoTypes.toAmino({ typeUrl: "/sparkdream.guardian.v1.MsgExec", value });
    expect(roundTrip(signed)).toEqual({
      type: "sparkdream/x/guardian/MsgExec",
      value: { authority: ADDR, inner: sendAmino },
    });
    const back = aminoTypes.fromAmino(signed);
    expect(guardianTx.MsgExec.encode(back.value).finish()).toEqual(guardianTx.MsgExec.encode(value).finish());
  });
});
