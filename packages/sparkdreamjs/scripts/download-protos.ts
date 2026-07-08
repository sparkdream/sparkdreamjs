// @ts-ignore
import downloadProtos from '@cosmology/telescope/main/commands/download'
import { cpSync, existsSync, rmSync } from 'fs'
import { join } from 'path'

// The downloader cleans outDir, which would delete the protos that are
// maintained in-repo rather than downloaded. Stash and restore them around
// the download:
// - protos/sparkdream: our own chain's protos
const VENDORED = [
  { dir: join(__dirname, '..', 'protos', 'sparkdream'), stash: join(__dirname, '..', '.sparkdream-protos-stash') },
]

const config = {
  repos: [
    { owner: "cosmos", repo: "cosmos-sdk", branch: "release/v0.53.x" },
    { owner: "cosmos", repo: "ibc-go" },
    // Akash node messages for the chain launcher (deployment/market/cert/
    // escrow/bme). chain-sdk is the successor of the deprecated akash-api
    // repo and carries the protos mainnet actually runs (Deposit-typed
    // deployment deposits, escrow MsgAccountDeposit, BME mint module).
    { owner: "akash-network", repo: "chain-sdk", branch: "main" },
  ],
  protoDirMapping: {
    "gogo/protobuf/master": ".",
    "googleapis/googleapis/master": ".",
    "protocolbuffers/protobuf/main": "src",
    // chain-sdk keeps node protos under proto/node/akash/**
    "akash-network/chain-sdk/main": "proto/node"
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