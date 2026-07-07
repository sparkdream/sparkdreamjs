//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as akashAuditV1ServiceRegistry from "./audit/v1/service.registry";
import * as akashAuditV1beta3AuditRegistry from "./audit/v1beta3/audit.registry";
import * as akashBmeV1ServiceRegistry from "./bme/v1/service.registry";
import * as akashCertV1ServiceRegistry from "./cert/v1/service.registry";
import * as akashCertV1beta3CertRegistry from "./cert/v1beta3/cert.registry";
import * as akashDeploymentV1beta3ServiceRegistry from "./deployment/v1beta3/service.registry";
import * as akashDeploymentV1beta4ServiceRegistry from "./deployment/v1beta4/service.registry";
import * as akashMarketV1beta4ServiceRegistry from "./market/v1beta4/service.registry";
import * as akashMarketV1beta5ServiceRegistry from "./market/v1beta5/service.registry";
import * as akashProviderV1beta3ProviderRegistry from "./provider/v1beta3/provider.registry";
import * as akashProviderV1beta4ServiceRegistry from "./provider/v1beta4/service.registry";
import * as akashTakeV1ServiceRegistry from "./take/v1/service.registry";
import * as akashAuditV1ServiceAmino from "./audit/v1/service.amino";
import * as akashAuditV1beta3AuditAmino from "./audit/v1beta3/audit.amino";
import * as akashBmeV1ServiceAmino from "./bme/v1/service.amino";
import * as akashCertV1ServiceAmino from "./cert/v1/service.amino";
import * as akashCertV1beta3CertAmino from "./cert/v1beta3/cert.amino";
import * as akashDeploymentV1beta3ServiceAmino from "./deployment/v1beta3/service.amino";
import * as akashDeploymentV1beta4ServiceAmino from "./deployment/v1beta4/service.amino";
import * as akashMarketV1beta4ServiceAmino from "./market/v1beta4/service.amino";
import * as akashMarketV1beta5ServiceAmino from "./market/v1beta5/service.amino";
import * as akashProviderV1beta3ProviderAmino from "./provider/v1beta3/provider.amino";
import * as akashProviderV1beta4ServiceAmino from "./provider/v1beta4/service.amino";
import * as akashTakeV1ServiceAmino from "./take/v1/service.amino";
export const akashAminoConverters = {
  ...akashAuditV1ServiceAmino.AminoConverter,
  ...akashAuditV1beta3AuditAmino.AminoConverter,
  ...akashBmeV1ServiceAmino.AminoConverter,
  ...akashCertV1ServiceAmino.AminoConverter,
  ...akashCertV1beta3CertAmino.AminoConverter,
  ...akashDeploymentV1beta3ServiceAmino.AminoConverter,
  ...akashDeploymentV1beta4ServiceAmino.AminoConverter,
  ...akashMarketV1beta4ServiceAmino.AminoConverter,
  ...akashMarketV1beta5ServiceAmino.AminoConverter,
  ...akashProviderV1beta3ProviderAmino.AminoConverter,
  ...akashProviderV1beta4ServiceAmino.AminoConverter,
  ...akashTakeV1ServiceAmino.AminoConverter
};
export const akashProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...akashAuditV1ServiceRegistry.registry, ...akashAuditV1beta3AuditRegistry.registry, ...akashBmeV1ServiceRegistry.registry, ...akashCertV1ServiceRegistry.registry, ...akashCertV1beta3CertRegistry.registry, ...akashDeploymentV1beta3ServiceRegistry.registry, ...akashDeploymentV1beta4ServiceRegistry.registry, ...akashMarketV1beta4ServiceRegistry.registry, ...akashMarketV1beta5ServiceRegistry.registry, ...akashProviderV1beta3ProviderRegistry.registry, ...akashProviderV1beta4ServiceRegistry.registry, ...akashTakeV1ServiceRegistry.registry];
export const getSigningAkashClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...akashProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...akashAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAkashClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAkashClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};