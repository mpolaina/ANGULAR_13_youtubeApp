export interface YoutubeResponse {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  items:         Item[];
  pageInfo:      PageInfo;
}

export interface Item {
  kind:    ItemKind;
  etag:    string;
  id:      string;
  snippet: Video;
}

export enum ItemKind {
  YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
  publishedAt:  Date;
  channelId:    ChannelID;
  title:        string;
  description:  string;
  thumbnails:   Thumbnails;
  channelTitle: ChannelTitle;
  playlistId:   PlaylistID;
  position:     number;
  resourceId:   ResourceID;
}

export enum ChannelID {
  UCpVm7Bg6PXKo1Pr6K5KxG9A = "UCpVm7bg6pXKo1Pr6k5kxG9A",
}

export enum ChannelTitle {
  NationalGeographic = "National Geographic",
}

export enum PlaylistID {
  PLivjPDlt6ApRiBHpsyXWG22G8RPNZ6Jlb = "PLivjPDlt6ApRiBHpsyXWG22G8RPNZ6jlb",
}

export interface ResourceID {
  kind:    ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres:   Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
