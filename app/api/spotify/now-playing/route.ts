import { getAccessToken } from "@/lib/spotify";
import { MusicInfo } from "@/types";

export async function GET() {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (!res.body) {
    return Response.json({ isPlaying: false });
  }

  const data = await res.json();
  console.log(data);
  return Response.json({
    isPlaying: data.is_playing,
    title: data.item.name,
    artist: data.item.artists,
    url: data.item.external_urls.spotify,
    progress: data.progress_ms,
    duration: data.item.duration_ms,
  } satisfies MusicInfo);
}
