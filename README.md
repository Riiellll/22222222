# Birthday site

Next.js (App Router) · TypeScript · no extra dependencies.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

Open Chrome DevTools → device toolbar → iPhone X to preview the main layout.

## Make it hers

Everything lives in **`app/data.ts`**: her name, your name, photos, the letter,
timeline, the 17 reasons, the "together since" date, the 6 rose promises.

- Put your photos in `public/photos/` and use `"/photos/my-pic.jpg"` paths.
- Square-ish photos work best for the gallery; portrait for the hero.
- Music: add `public/music/song.mp3`, then set `music: "/music/song.mp3"`.
  It starts when she taps the wax seal (browsers need a tap to allow sound).

## Deploy

Push to GitHub, import the repo on Vercel, and deploy. No env vars needed.
