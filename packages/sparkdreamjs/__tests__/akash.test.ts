import { Registry } from "@cosmjs/proto-signing";

import { akashAminoConverters, akashProtoRegistry } from "../src/akash/client";
import { MsgCreateCertificate } from "../src/akash/cert/v1/msg";
import { MsgCreateDeployment } from "../src/akash/deployment/v1beta4/deploymentmsg";
import { MsgCreateLease } from "../src/akash/market/v1beta5/leasemsg";

/** The message set the chain launcher signs (launcher design §9). */
const LAUNCHER_TYPE_URLS = [
  "/akash.cert.v1.MsgCreateCertificate",
  "/akash.deployment.v1beta4.MsgCreateDeployment",
  "/akash.deployment.v1beta4.MsgUpdateDeployment",
  "/akash.deployment.v1beta4.MsgCloseDeployment",
  "/akash.deployment.v1.MsgDepositDeployment",
  "/akash.market.v1beta5.MsgCreateLease",
];

it("registers every launcher message type", () => {
  const registry = new Registry(akashProtoRegistry as any);
  for (const url of LAUNCHER_TYPE_URLS) {
    expect(registry.lookupType(url)).toBeDefined();
  }
});

it("encodes and decodes MsgCreateLease", () => {
  const msg = MsgCreateLease.fromPartial({
    bidId: { owner: "akash1owner", dseq: 42n, gseq: 1, oseq: 1, provider: "akash1provider" },
  });
  const decoded = MsgCreateLease.decode(MsgCreateLease.encode(msg).finish());
  expect(decoded.bidId!.provider).toBe("akash1provider");
  expect(decoded.bidId!.dseq).toBe(42n);
});

it("encodes MsgCreateDeployment with version hash", () => {
  const msg = MsgCreateDeployment.fromPartial({
    id: { owner: "akash1owner", dseq: 7n },
    hash: new Uint8Array(32).fill(1),
  });
  const decoded = MsgCreateDeployment.decode(MsgCreateDeployment.encode(msg).finish());
  expect(decoded.id!.dseq).toBe(7n);
  expect(decoded.hash).toHaveLength(32);
});

it("encodes MsgCreateCertificate as Any via the registry", () => {
  const registry = new Registry(akashProtoRegistry as any);
  const value = MsgCreateCertificate.fromPartial({
    owner: "akash1owner",
    cert: new TextEncoder().encode("CERT-PEM"),
    pubkey: new TextEncoder().encode("PUB-PEM"),
  });
  const any = registry.encodeAsAny({ typeUrl: "/akash.cert.v1.MsgCreateCertificate", value });
  expect(any.typeUrl).toBe("/akash.cert.v1.MsgCreateCertificate");
  expect(any.value.length).toBeGreaterThan(0);
});

it("exposes amino converters for akash messages", () => {
  expect(Object.keys(akashAminoConverters).length).toBeGreaterThan(0);
});
