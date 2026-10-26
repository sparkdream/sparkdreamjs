//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope's generated converters (and the per-message overrides that
// used to patch them) disagree with the chain's aminojson on empty lists,
// empty bytes, Dec strings, oneofs and non-nullable messages, and went stale
// whenever a proto changed. Every Msg of x/ecosystem is converted by the
// schema-driven engine in chain-amino.ts instead, which renders amino JSON
// from the protobuf bytes exactly as the chain does.
//
// MAINTENANCE: none per message. The schema (amino-schema.ts, regenerated from
// the chain on every proto sync) lists every Msg; __tests__/amino-golden.test.ts
// checks them all against the chain's encoder.
import * as tx from "./tx";
import { chainAminoConverters } from "../../../chain-amino";

export const AminoConverter = chainAminoConverters("sparkdream.ecosystem.v1", tx);
