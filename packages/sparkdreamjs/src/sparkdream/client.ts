//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sparkdreamBlogV1TxRegistry from "./blog/v1/tx.registry";
import * as sparkdreamCollectV1TxRegistry from "./collect/v1/tx.registry";
import * as sparkdreamCommonsV1TxRegistry from "./commons/v1/tx.registry";
import * as sparkdreamEcosystemV1TxRegistry from "./ecosystem/v1/tx.registry";
import * as sparkdreamFederationV1TxRegistry from "./federation/v1/tx.registry";
import * as sparkdreamForumV1TxRegistry from "./forum/v1/tx.registry";
import * as sparkdreamFutarchyV1TxRegistry from "./futarchy/v1/tx.registry";
import * as sparkdreamNameV1TxRegistry from "./name/v1/tx.registry";
import * as sparkdreamRepV1TxRegistry from "./rep/v1/tx.registry";
import * as sparkdreamRevealV1TxRegistry from "./reveal/v1/tx.registry";
import * as sparkdreamSeasonV1TxRegistry from "./season/v1/tx.registry";
import * as sparkdreamSessionV1TxRegistry from "./session/v1/tx.registry";
import * as sparkdreamShieldV1TxRegistry from "./shield/v1/tx.registry";
import * as sparkdreamSparkdreamV1TxRegistry from "./sparkdream/v1/tx.registry";
import * as sparkdreamSplitV1TxRegistry from "./split/v1/tx.registry";
import * as sparkdreamBlogV1TxAmino from "./blog/v1/tx.amino";
import * as sparkdreamCollectV1TxAmino from "./collect/v1/tx.amino";
import * as sparkdreamCommonsV1TxAmino from "./commons/v1/tx.amino";
import * as sparkdreamEcosystemV1TxAmino from "./ecosystem/v1/tx.amino";
import * as sparkdreamFederationV1TxAmino from "./federation/v1/tx.amino";
import * as sparkdreamForumV1TxAmino from "./forum/v1/tx.amino";
import * as sparkdreamFutarchyV1TxAmino from "./futarchy/v1/tx.amino";
import * as sparkdreamNameV1TxAmino from "./name/v1/tx.amino";
import * as sparkdreamRepV1TxAmino from "./rep/v1/tx.amino";
import * as sparkdreamRevealV1TxAmino from "./reveal/v1/tx.amino";
import * as sparkdreamSeasonV1TxAmino from "./season/v1/tx.amino";
import * as sparkdreamSessionV1TxAmino from "./session/v1/tx.amino";
import * as sparkdreamShieldV1TxAmino from "./shield/v1/tx.amino";
import * as sparkdreamSparkdreamV1TxAmino from "./sparkdream/v1/tx.amino";
import * as sparkdreamSplitV1TxAmino from "./split/v1/tx.amino";
export const sparkdreamAminoConverters = {
  ...sparkdreamBlogV1TxAmino.AminoConverter,
  ...sparkdreamCollectV1TxAmino.AminoConverter,
  ...sparkdreamCommonsV1TxAmino.AminoConverter,
  ...sparkdreamEcosystemV1TxAmino.AminoConverter,
  ...sparkdreamFederationV1TxAmino.AminoConverter,
  ...sparkdreamForumV1TxAmino.AminoConverter,
  ...sparkdreamFutarchyV1TxAmino.AminoConverter,
  ...sparkdreamNameV1TxAmino.AminoConverter,
  ...sparkdreamRepV1TxAmino.AminoConverter,
  ...sparkdreamRevealV1TxAmino.AminoConverter,
  ...sparkdreamSeasonV1TxAmino.AminoConverter,
  ...sparkdreamSessionV1TxAmino.AminoConverter,
  ...sparkdreamShieldV1TxAmino.AminoConverter,
  ...sparkdreamSparkdreamV1TxAmino.AminoConverter,
  ...sparkdreamSplitV1TxAmino.AminoConverter
};
export const sparkdreamProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...sparkdreamBlogV1TxRegistry.registry, ...sparkdreamCollectV1TxRegistry.registry, ...sparkdreamCommonsV1TxRegistry.registry, ...sparkdreamEcosystemV1TxRegistry.registry, ...sparkdreamFederationV1TxRegistry.registry, ...sparkdreamForumV1TxRegistry.registry, ...sparkdreamFutarchyV1TxRegistry.registry, ...sparkdreamNameV1TxRegistry.registry, ...sparkdreamRepV1TxRegistry.registry, ...sparkdreamRevealV1TxRegistry.registry, ...sparkdreamSeasonV1TxRegistry.registry, ...sparkdreamSessionV1TxRegistry.registry, ...sparkdreamShieldV1TxRegistry.registry, ...sparkdreamSparkdreamV1TxRegistry.registry, ...sparkdreamSplitV1TxRegistry.registry];
export const getSigningSparkdreamClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...sparkdreamProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...sparkdreamAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningSparkdreamClient = async ({
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
  } = getSigningSparkdreamClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};