// Amino sign-byte parity for x/session. The golden file holds what the chain's
// cosmossdk.io/x/tx/signing/aminojson renders from the proto bytes of each
// fixture below; regenerate it with the chain-side test described in
// session-amino.golden.json's "_source" key whenever session/v1 protos change.
//
// Each fixture is passed exactly as an app would hand it to cosmjs (plain
// objects, Dates, some Numbers where BigInt is expected), because cosmjs calls
// toAmino on the raw value without fromPartial.
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createDefaultAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { load, registry as sessionRegistry } from "../src/sparkdream/session/v1/tx.registry";
import { AminoConverter } from "../src/sparkdream/session/v1/tx.amino";
import { configureNestedAminoConverter } from "../src/nested-amino";

const GRANTER = "sprkdrm1granter000000000000000000000000000";
const GRANTEE = "sprkdrm1grantee000000000000000000000000000";
const OTHER = "sprkdrm1other00000000000000000000000000000";
const EXPIRES = new Date("2026-12-31T00:00:00Z");

const registry = new Registry(defaultRegistryTypes);
load(registry);
const aminoTypes = new AminoTypes({ ...createDefaultAminoConverters(), ...AminoConverter });
configureNestedAminoConverter({ registry: registry as any, aminoTypes: aminoTypes as any });

const S = "/sparkdream.session.v1.";
const fixtures: Record<string, { typeUrl: string; value: any }> = {
  create_recurring_pull: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES, note: "rent",
      recurringPull: {
        amountPerPeriod: { denom: "uspark", amount: "5000000" },
        periodSeconds: 604800, startTime: BigInt(1790000000), maxPerEpoch: "",
      },
    },
  },
  create_spending_allowance_open: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES, note: "",
      spendingAllowance: {
        maxPerPeriod: { denom: "uspark", amount: "1000000" },
        periodSeconds: BigInt(86400), allowedRecipients: [], denom: "uspark",
      },
    },
  },
  create_spending_allowance_whitelist: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES,
      spendingAllowance: {
        maxPerPeriod: { denom: "uspark", amount: "1000000" },
        periodSeconds: BigInt(86400), allowedRecipients: [OTHER, GRANTEE], denom: "uspark",
      },
    },
  },
  create_scheduled_transfer: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES, note: "gift",
      scheduledOneshot: {
        transfer: { recipient: GRANTEE, amount: { denom: "uspark", amount: "250000" } },
        fireAt: BigInt(1795000000),
      },
    },
  },
  create_scheduled_exec: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES,
      scheduledOneshot: {
        exec: {
          msg: registry.encodeAsAny({
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: { fromAddress: GRANTER, toAddress: OTHER, amount: [{ denom: "uspark", amount: "7" }] },
          }),
          gasLimit: BigInt(200000),
        },
        fireAt: BigInt(1795000000),
      },
    },
  },
  create_session_key: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES,
      sessionKey: {
        allowedMsgTypes: ["/sparkdream.blog.v1.MsgCreatePost"],
        spendLimit: { denom: "uspark", amount: "3000000" },
        maxExecCount: BigInt(100), allowSelfRevoke: true,
      },
    },
  },
  create_sign_in: {
    typeUrl: S + "MsgCreateGrant",
    value: {
      granter: GRANTER, grantee: GRANTEE, expiresAt: EXPIRES, note: "post from my desktop",
      signIn: { service: "mstdn.sparkdream.io" },
    },
  },
  claim_recurring_pull: { typeUrl: S + "MsgClaimRecurringPull", value: { grantee: GRANTEE, grantId: BigInt(7) } },
  pull_allowance: {
    typeUrl: S + "MsgPullAllowance",
    value: { grantee: GRANTEE, grantId: 8, recipient: OTHER, amount: { denom: "uspark", amount: "42" } },
  },
  retry_scheduled_oneshot: { typeUrl: S + "MsgRetryScheduledOneshot", value: { caller: GRANTER, grantId: BigInt(9) } },
  revoke_grant: { typeUrl: S + "MsgRevokeGrant", value: { granter: GRANTER, grantId: BigInt(10) } },
  decline_grant: { typeUrl: S + "MsgDeclineGrant", value: { grantee: GRANTEE, grantId: BigInt(11) } },
};

// Mirrors @cosmjs/amino's sortedJsonStringify (what actually gets signed).
function sortedJson(v: any): string {
  return JSON.stringify(v, (_k, val) =>
    val && typeof val === "object" && !Array.isArray(val)
      ? Object.fromEntries(Object.keys(val).sort().map((k) => [k, val[k]]))
      : val
  );
}

function protoHex(msg: { typeUrl: string; value: any }): string {
  return Buffer.from(registry.encode(msg)).toString("hex");
}

const goldenPath = join(__dirname, "session-amino.golden.json");
const golden = existsSync(goldenPath) ? JSON.parse(readFileSync(goldenPath, "utf8")) : null;

// SESSION_AMINO_DUMP=<path> writes the proto bytes the chain-side test renders.
if (process.env.SESSION_AMINO_DUMP) {
  const out: Record<string, { type_url: string; proto_hex: string }> = {};
  for (const [name, msg] of Object.entries(fixtures)) out[name] = { type_url: msg.typeUrl, proto_hex: protoHex(msg) };
  writeFileSync(process.env.SESSION_AMINO_DUMP, JSON.stringify(out, null, 2));
}

describe("x/session amino converters", () => {
  // The override replaces the generated map wholesale, so a Msg added to the
  // proto is silently unsignable over amino until it is added there too.
  it("has a converter for every registered session Msg", () => {
    const missing = sessionRegistry.map(([url]) => url).filter((url) => !(url in AminoConverter));
    expect(missing).toEqual([]);
  });

  for (const [name, msg] of Object.entries(fixtures)) {
    describe(name, () => {
      it("round-trips through fromAmino to identical proto bytes", () => {
        const back = aminoTypes.fromAmino(aminoTypes.toAmino(msg));
        expect(back.typeUrl).toBe(msg.typeUrl);
        expect(protoHex(back)).toBe(protoHex(msg));
      });

      it("matches the chain's aminojson rendering", () => {
        if (!golden) throw new Error("session-amino.golden.json missing");
        const g = golden.fixtures[name];
        expect(g).toBeDefined();
        // Guard against a stale golden: it must have been rendered from these bytes.
        expect(g.proto_hex).toBe(protoHex(msg));
        expect(sortedJson(aminoTypes.toAmino(msg))).toBe(g.amino);
      });
    });
  }
});
