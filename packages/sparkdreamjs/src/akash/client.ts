//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as akashAuditV1ServiceRegistry from "./audit/v1/service.registry";
import * as akashBmeV1ServiceRegistry from "./bme/v1/service.registry";
import * as akashCertV1ServiceRegistry from "./cert/v1/service.registry";
import * as akashDeploymentV1beta4ServiceRegistry from "./deployment/v1beta4/service.registry";
import * as akashDeploymentV1beta5ServiceRegistry from "./deployment/v1beta5/service.registry";
import * as akashEscrowV1ServiceRegistry from "./escrow/v1/service.registry";
import * as akashMarketV1beta5ServiceRegistry from "./market/v1beta5/service.registry";
import * as akashMarketV2beta1ServiceRegistry from "./market/v2beta1/service.registry";
import * as akashOracleV1ServiceRegistry from "./oracle/v1/service.registry";
import * as akashOracleV2ServiceRegistry from "./oracle/v2/service.registry";
import * as akashProviderV1beta4ServiceRegistry from "./provider/v1beta4/service.registry";
import * as akashTakeV1ServiceRegistry from "./take/v1/service.registry";
import * as akashWasmV1ServiceRegistry from "./wasm/v1/service.registry";
import * as akashAuditV1ServiceAmino from "./audit/v1/service.amino";
import * as akashBmeV1ServiceAmino from "./bme/v1/service.amino";
import * as akashCertV1ServiceAmino from "./cert/v1/service.amino";
import * as akashDeploymentV1beta4ServiceAmino from "./deployment/v1beta4/service.amino";
import * as akashDeploymentV1beta5ServiceAmino from "./deployment/v1beta5/service.amino";
import * as akashEscrowV1ServiceAmino from "./escrow/v1/service.amino";
import * as akashMarketV1beta5ServiceAmino from "./market/v1beta5/service.amino";
import * as akashMarketV2beta1ServiceAmino from "./market/v2beta1/service.amino";
import * as akashOracleV1ServiceAmino from "./oracle/v1/service.amino";
import * as akashOracleV2ServiceAmino from "./oracle/v2/service.amino";
import * as akashProviderV1beta4ServiceAmino from "./provider/v1beta4/service.amino";
import * as akashTakeV1ServiceAmino from "./take/v1/service.amino";
import * as akashWasmV1ServiceAmino from "./wasm/v1/service.amino";
export const akashAminoConverters = {
  ...akashAuditV1ServiceAmino.AminoConverter,
  ...akashBmeV1ServiceAmino.AminoConverter,
  ...akashCertV1ServiceAmino.AminoConverter,
  ...akashDeploymentV1beta4ServiceAmino.AminoConverter,
  ...akashDeploymentV1beta5ServiceAmino.AminoConverter,
  ...akashEscrowV1ServiceAmino.AminoConverter,
  ...akashMarketV1beta5ServiceAmino.AminoConverter,
  ...akashMarketV2beta1ServiceAmino.AminoConverter,
  ...akashOracleV1ServiceAmino.AminoConverter,
  ...akashOracleV2ServiceAmino.AminoConverter,
  ...akashProviderV1beta4ServiceAmino.AminoConverter,
  ...akashTakeV1ServiceAmino.AminoConverter,
  ...akashWasmV1ServiceAmino.AminoConverter
};
export const akashProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...akashAuditV1ServiceRegistry.registry, ...akashBmeV1ServiceRegistry.registry, ...akashCertV1ServiceRegistry.registry, ...akashDeploymentV1beta4ServiceRegistry.registry, ...akashDeploymentV1beta5ServiceRegistry.registry, ...akashEscrowV1ServiceRegistry.registry, ...akashMarketV1beta5ServiceRegistry.registry, ...akashMarketV2beta1ServiceRegistry.registry, ...akashOracleV1ServiceRegistry.registry, ...akashOracleV2ServiceRegistry.registry, ...akashProviderV1beta4ServiceRegistry.registry, ...akashTakeV1ServiceRegistry.registry, ...akashWasmV1ServiceRegistry.registry];
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