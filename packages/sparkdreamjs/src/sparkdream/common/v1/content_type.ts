//@ts-nocheck
/**
 * ContentType tells the frontend how to interpret post content.
 * On-chain text types (0-9) are human-readable strings.
 * On-chain compressed types (10-19) are base64-encoded binary strings.
 * Off-chain reference types (20+) are URI/hash strings.
 */
export enum ContentType {
  CONTENT_TYPE_UNSPECIFIED = 0,
  /** CONTENT_TYPE_TEXT - On-chain text formats (human-readable strings) */
  CONTENT_TYPE_TEXT = 1,
  /** CONTENT_TYPE_HTML - HTML content */
  CONTENT_TYPE_HTML = 2,
  /** CONTENT_TYPE_MARKDOWN - Markdown content */
  CONTENT_TYPE_MARKDOWN = 3,
  /** CONTENT_TYPE_GZIP - On-chain compressed formats (base64-encoded strings) */
  CONTENT_TYPE_GZIP = 10,
  /** CONTENT_TYPE_ZSTD - Zstandard-compressed (frontend decompresses) */
  CONTENT_TYPE_ZSTD = 11,
  /** CONTENT_TYPE_IPFS - Off-chain references (hash/CID strings) */
  CONTENT_TYPE_IPFS = 20,
  /** CONTENT_TYPE_ARWEAVE - Arweave TX ID (frontend fetches from Arweave gateway) */
  CONTENT_TYPE_ARWEAVE = 21,
  /** CONTENT_TYPE_FILECOIN - Filecoin CID (frontend fetches from Filecoin gateway) */
  CONTENT_TYPE_FILECOIN = 22,
  /** CONTENT_TYPE_JACKAL - Jackal FID (frontend fetches from Jackal gateway) */
  CONTENT_TYPE_JACKAL = 23,
  UNRECOGNIZED = -1,
}
export const ContentTypeAmino = ContentType;
export function contentTypeFromJSON(object: any): ContentType {
  switch (object) {
    case 0:
    case "CONTENT_TYPE_UNSPECIFIED":
      return ContentType.CONTENT_TYPE_UNSPECIFIED;
    case 1:
    case "CONTENT_TYPE_TEXT":
      return ContentType.CONTENT_TYPE_TEXT;
    case 2:
    case "CONTENT_TYPE_HTML":
      return ContentType.CONTENT_TYPE_HTML;
    case 3:
    case "CONTENT_TYPE_MARKDOWN":
      return ContentType.CONTENT_TYPE_MARKDOWN;
    case 10:
    case "CONTENT_TYPE_GZIP":
      return ContentType.CONTENT_TYPE_GZIP;
    case 11:
    case "CONTENT_TYPE_ZSTD":
      return ContentType.CONTENT_TYPE_ZSTD;
    case 20:
    case "CONTENT_TYPE_IPFS":
      return ContentType.CONTENT_TYPE_IPFS;
    case 21:
    case "CONTENT_TYPE_ARWEAVE":
      return ContentType.CONTENT_TYPE_ARWEAVE;
    case 22:
    case "CONTENT_TYPE_FILECOIN":
      return ContentType.CONTENT_TYPE_FILECOIN;
    case 23:
    case "CONTENT_TYPE_JACKAL":
      return ContentType.CONTENT_TYPE_JACKAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContentType.UNRECOGNIZED;
  }
}
export function contentTypeToJSON(object: ContentType): string {
  switch (object) {
    case ContentType.CONTENT_TYPE_UNSPECIFIED:
      return "CONTENT_TYPE_UNSPECIFIED";
    case ContentType.CONTENT_TYPE_TEXT:
      return "CONTENT_TYPE_TEXT";
    case ContentType.CONTENT_TYPE_HTML:
      return "CONTENT_TYPE_HTML";
    case ContentType.CONTENT_TYPE_MARKDOWN:
      return "CONTENT_TYPE_MARKDOWN";
    case ContentType.CONTENT_TYPE_GZIP:
      return "CONTENT_TYPE_GZIP";
    case ContentType.CONTENT_TYPE_ZSTD:
      return "CONTENT_TYPE_ZSTD";
    case ContentType.CONTENT_TYPE_IPFS:
      return "CONTENT_TYPE_IPFS";
    case ContentType.CONTENT_TYPE_ARWEAVE:
      return "CONTENT_TYPE_ARWEAVE";
    case ContentType.CONTENT_TYPE_FILECOIN:
      return "CONTENT_TYPE_FILECOIN";
    case ContentType.CONTENT_TYPE_JACKAL:
      return "CONTENT_TYPE_JACKAL";
    case ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}