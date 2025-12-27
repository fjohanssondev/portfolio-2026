type ArtistType = "artist";

export interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

export interface MusicInfo {
  artist: Artist[];
  duration: number;
  isPlaying: boolean;
  progress: number;
  title: string;
  url: string;
}
