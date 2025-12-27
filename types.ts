import { z } from "zod";
import { formSchema } from "@/schema";

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

export type FormState = {
  values: z.infer<typeof formSchema>;
  errors: null | Partial<Record<keyof z.infer<typeof formSchema>, string[]>>;
  success: boolean;
};
