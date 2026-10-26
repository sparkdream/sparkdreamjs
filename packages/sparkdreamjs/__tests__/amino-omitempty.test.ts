// Spot checks of the schema-driven converters (src-overrides/chain-amino.ts)
// on values built the way an app builds them. amino-golden.test.ts checks
// every Msg against the chain's encoder; these pin a few shapes by hand:
// empty lists inside a nested message, and messages carrying
// google.protobuf.Any, which must render {type, value} (through the
// nested-amino registry for cosmos inner types) and round-trip through
// fromAmino.
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createDefaultAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { configureNestedAminoConverter } from "../src/nested-amino";
import * as federationTx from "../src/sparkdream/federation/v1/tx";
import { AminoConverter as federationAmino } from "../src/sparkdream/federation/v1/tx.amino";
import * as vaultTx from "../src/sparkdream/vault/v1/tx";
import { AminoConverter as vaultAmino } from "../src/sparkdream/vault/v1/tx.amino";
import { load as vaultLoad } from "../src/sparkdream/vault/v1/tx.registry";
import * as guardianTx from "../src/sparkdream/guardian/v1/tx";
import { AminoConverter as guardianAmino } from "../src/sparkdream/guardian/v1/tx.amino";
import { load as guardianLoad } from "../src/sparkdream/guardian/v1/tx.registry";

const ADDR = "sprkdrm1addr0000000000000000000000000000000";
const OTHER = "sprkdrm1other00000000000000000000000000000";

const roundTrip = (v: any) => JSON.parse(JSON.stringify(v));

describe("amino overrides", () => {
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
