// @ts-ignore
import downloadProtos from '@cosmology/telescope/main/commands/download'
import { cpSync, existsSync, rmSync } from 'fs'
import { join } from 'path'

// The downloader cleans outDir, which would delete the protos that are
// maintained in-repo rather than downloaded. Stash and restore them around
// the download:
// - protos/sparkdream: our own chain's protos
// - protos/akash/bme: vendored from akash-network/chain-sdk main
//   (proto/node/akash/bme/v1 @ dae3bbc, 2026-04-14) — the BME burn-mint
//   module (MsgMintACT etc.) postdates the akash-api sdk-50 branch pinned
//   below, and akash-api itself is deprecated in favor of chain-sdk.
const VENDORED = [
  { dir: join(__dirname, '..', 'protos', 'sparkdream'), stash: join(__dirname, '..', '.sparkdream-protos-stash') },
  { dir: join(__dirname, '..', 'protos', 'akash', 'bme'), stash: join(__dirname, '..', '.akash-bme-protos-stash') },
]

const config = {
  repos: [
    { owner: "cosmos", repo: "cosmos-sdk", branch: "release/v0.53.x" },
    { owner: "cosmos", repo: "ibc-go" },
    // Akash node messages for the chain launcher (deployment/market/cert/escrow).
    // sdk-50 carries the current-generation protos (deployment v1beta4,
    // market v1beta5, cert/escrow v1) that the network and console run.
    { owner: "akash-network", repo: "akash-api", branch: "sdk-50" },
  ],
  protoDirMapping: {
    "gogo/protobuf/master": ".",
    "googleapis/googleapis/master": ".",
    "protocolbuffers/protobuf/main": "src",
    // akash-api keeps node protos under proto/node/akash/**
    "akash-network/akash-api/sdk-50": "proto/node"
  },
  outDir: "protos",
  ssh: false,
  tempRepoDir: "git-modules",
  targets: [
    "cosmos/**/*.proto",
    "ibc/**/*.proto",
    "akash/**/*.proto",
  ]
};

for (const { dir, stash } of VENDORED) {
  if (existsSync(dir)) {
    rmSync(stash, { recursive: true, force: true });
    cpSync(dir, stash, { recursive: true });
  }
}

downloadProtos(config)
  .then(() => {
    for (const { dir, stash } of VENDORED) {
      if (existsSync(stash)) {
        cpSync(stash, dir, { recursive: true });
        rmSync(stash, { recursive: true, force: true });
        console.log(`♻️  restored in-repo protos: ${dir}`);
      }
    }
    console.log('✅ Proto download completed');
  })
  // @ts-ignore
  .catch((error) => {
    console.error('❌ Proto download failed:', error);
    process.exit(1);
  });