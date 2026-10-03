# fjohansson.dev

My personal portfolio, built with Next.js, TypeScript, Tailwind CSS and MDX.

## Getting started

```bash
bun install
cp .env.example .env.local
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

| Path               | What it is                                              |
| ------------------ | ------------------------------------------------------- |
| `app/`             | Pages and API routes (App Router)                       |
| `content/cases/`   | Case studies written in MDX                             |
| `lib/cases.ts`     | Loads and sorts the case studies                        |
| `lib/cv.ts`        | Experience, education and certificates shown on `/cv`   |
| `mdx-components.tsx` | Styling for elements rendered from MDX               |
| `actions/`         | Server actions, e.g. the contact form                   |
| `public/`          | Static assets such as images                            |

## Adding a case

Create a new file in `content/cases/`. The file name becomes the URL, so
`my-project.mdx` is served at `/cases/my-project`.

```mdx
export const metadata = {
  title: "My Project",
  description: "One sentence about the project.",
  date: "2026-01-01",
  tags: ["Next.js", "TypeScript"],
  image: "/cases/my-project/desktop.png",
  url: "https://example.com", // optional
};

## Background

Write the case here.
```

Put screenshots in `public/cases/<slug>/`. Cases are sorted by `date`, newest first.

## Environment variables

See `.env.example`.

| Variable                | Used for                                         |
| ----------------------- | ------------------------------------------------ |
| `RESEND_API_KEY`        | Sending emails from the contact form             |
| `SPOTIFY_CLIENT_ID`     | Spotify app credentials                          |
| `SPOTIFY_CLIENT_SECRET` | Spotify app credentials                          |
| `SPOTIFY_REFRESH_TOKEN` | Fetching what I'm currently listening to         |
| `SPOTIFY_REDIRECT_URI`  | Only needed locally to get a new refresh token   |

The contact form sends from `hello@fjohansson.dev`, so that domain has to be
verified in Resend.

### Getting a Spotify refresh token

The login and callback routes only work in development and return 404 in production.

1. Create an app in the [Spotify developer dashboard](https://developer.spotify.com/dashboard)
   and add `http://127.0.0.1:3000/api/spotify/callback` as a redirect URI.
2. Add the client id, client secret and redirect URI to `.env.local`.
3. Run `bun dev` and open [http://127.0.0.1:3000/api/spotify/login](http://127.0.0.1:3000/api/spotify/login).
4. After approving, the refresh token is printed in the terminal running the dev server.
5. Add it as `SPOTIFY_REFRESH_TOKEN` in `.env.local` and in your hosting provider.

## Scripts

| Command     | Description                  |
| ----------- | ---------------------------- |
| `bun dev`   | Start the development server |
| `bun run build` | Build for production     |
| `bun start` | Start the production build   |
| `bun lint`  | Run ESLint                   |
