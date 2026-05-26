//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      circuit: {
        v1: new (await import("../cosmos/circuit/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      epochs: {
        v1beta1: new (await import("../cosmos/epochs/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      protocolpool: {
        v1: new (await import("../cosmos/protocolpool/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    sparkdream: {
      blog: {
        v1: new (await import("./blog/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      collect: {
        v1: new (await import("./collect/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      commons: {
        v1: new (await import("./commons/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      ecosystem: {
        v1: new (await import("./ecosystem/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      federation: {
        v1: new (await import("./federation/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      forum: {
        v1: new (await import("./forum/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      futarchy: {
        v1: new (await import("./futarchy/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      guardian: {
        v1: new (await import("./guardian/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      identity: {
        v1: new (await import("./identity/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      name: {
        v1: new (await import("./name/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      rep: {
        v1: new (await import("./rep/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      reveal: {
        v1: new (await import("./reveal/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      season: {
        v1: new (await import("./season/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      service: {
        v1: new (await import("./service/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      session: {
        v1: new (await import("./session/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      shield: {
        v1: new (await import("./shield/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      sparkdream: {
        v1: new (await import("./sparkdream/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      split: {
        v1: new (await import("./split/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};