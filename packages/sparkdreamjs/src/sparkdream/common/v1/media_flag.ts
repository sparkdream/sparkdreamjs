//@ts-nocheck
/**
 * MediaFlag bits, OR-ed into a content record's media_flags. The chain sets
 * them at write time from information it already has plus one deterministic
 * data-URI scan of uncompressed text; it never decompresses bodies and never
 * parses or fetches links. Any non-zero media_flags withholds the body from
 * list and show queries until a client fetches it through the module's body
 * query. See docs/content-scanning.md.
 */
export enum MediaFlag {
  MEDIA_FLAG_NONE = 0,
  /** MEDIA_FLAG_INLINE_DATA - a text body contains a data URI */
  MEDIA_FLAG_INLINE_DATA = 1,
  /** MEDIA_FLAG_COMPRESSED - content_type is GZIP or ZSTD; never inspected */
  MEDIA_FLAG_COMPRESSED = 2,
  /** MEDIA_FLAG_OFFCHAIN_REF - content_type is IPFS / ARWEAVE / FILECOIN / JACKAL */
  MEDIA_FLAG_OFFCHAIN_REF = 4,
  /** MEDIA_FLAG_EXTERNAL_URI - a structured URI field is set */
  MEDIA_FLAG_EXTERNAL_URI = 8,
  UNRECOGNIZED = -1,
}
export const MediaFlagAmino = MediaFlag;
export function mediaFlagFromJSON(object: any): MediaFlag {
  switch (object) {
    case 0:
    case "MEDIA_FLAG_NONE":
      return MediaFlag.MEDIA_FLAG_NONE;
    case 1:
    case "MEDIA_FLAG_INLINE_DATA":
      return MediaFlag.MEDIA_FLAG_INLINE_DATA;
    case 2:
    case "MEDIA_FLAG_COMPRESSED":
      return MediaFlag.MEDIA_FLAG_COMPRESSED;
    case 4:
    case "MEDIA_FLAG_OFFCHAIN_REF":
      return MediaFlag.MEDIA_FLAG_OFFCHAIN_REF;
    case 8:
    case "MEDIA_FLAG_EXTERNAL_URI":
      return MediaFlag.MEDIA_FLAG_EXTERNAL_URI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MediaFlag.UNRECOGNIZED;
  }
}
export function mediaFlagToJSON(object: MediaFlag): string {
  switch (object) {
    case MediaFlag.MEDIA_FLAG_NONE:
      return "MEDIA_FLAG_NONE";
    case MediaFlag.MEDIA_FLAG_INLINE_DATA:
      return "MEDIA_FLAG_INLINE_DATA";
    case MediaFlag.MEDIA_FLAG_COMPRESSED:
      return "MEDIA_FLAG_COMPRESSED";
    case MediaFlag.MEDIA_FLAG_OFFCHAIN_REF:
      return "MEDIA_FLAG_OFFCHAIN_REF";
    case MediaFlag.MEDIA_FLAG_EXTERNAL_URI:
      return "MEDIA_FLAG_EXTERNAL_URI";
    case MediaFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}