//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      circuit: {
        v1: (await import("../cosmos/circuit/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      counter: {
        v1: (await import("../cosmos/counter/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      epochs: {
        v1beta1: (await import("../cosmos/epochs/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      protocolpool: {
        v1: (await import("../cosmos/protocolpool/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    sparkdream: {
      blog: {
        v1: (await import("./blog/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      collect: {
        v1: (await import("./collect/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      commons: {
        v1: (await import("./commons/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      ecosystem: {
        v1: (await import("./ecosystem/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      federation: {
        v1: (await import("./federation/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      forum: {
        v1: (await import("./forum/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      futarchy: {
        v1: (await import("./futarchy/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      name: {
        v1: (await import("./name/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      rep: {
        v1: (await import("./rep/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      reveal: {
        v1: (await import("./reveal/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      season: {
        v1: (await import("./season/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      session: {
        v1: (await import("./session/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      shield: {
        v1: (await import("./shield/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      sparkdream: {
        v1: (await import("./sparkdream/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      split: {
        v1: (await import("./split/v1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};