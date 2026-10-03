const scopes = "user-read-currently-playing user-read-playback-state";

const params = new URLSearchParams({
  client_id: process.env.SPOTIFY_CLIENT_ID!,
  response_type: "code",
  redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
  scope: scopes,
});

// Only used locally to obtain a refresh token, see README.
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }

  return Response.redirect(`https://accounts.spotify.com/authorize?${params}`);
}
