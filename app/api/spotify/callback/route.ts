import { NextResponse } from "next/server";

// Only used locally to obtain a refresh token, see README.
export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    }),
  });

  const data = await response.json();

  if (data.error) {
    return NextResponse.json(
      { error: data.error_description ?? data.error },
      { status: 400 },
    );
  }

  console.log(`\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);

  return new Response(
    "Done! The refresh token has been printed in the terminal running the dev server.",
  );
}
