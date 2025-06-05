//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sparkdreamBlogTxRegistry from "./blog/tx.registry";
import * as sparkdreamSparkdreamTxRegistry from "./sparkdream/tx.registry";
import * as sparkdreamBlogTxAmino from "./blog/tx.amino";
import * as sparkdreamSparkdreamTxAmino from "./sparkdream/tx.amino";
export const sparkdreamAminoConverters = {
  ...sparkdreamBlogTxAmino.AminoConverter,
  ...sparkdreamSparkdreamTxAmino.AminoConverter
};
export const sparkdreamProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...sparkdreamBlogTxRegistry.registry, ...sparkdreamSparkdreamTxRegistry.registry];
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