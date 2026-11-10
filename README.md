# TeMan: Terapi Mandiri — Landing Page

Single-page marketing site for the TeMan iPad app (the app's source is the `Itera` repository). Built with Next.js (App Router), Tailwind CSS v4, and Plus Jakarta Sans, the same typeface as the app.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Before launch

- Set the real contact inbox in `src/config.ts` (`CONTACT_EMAIL`). It is currently a placeholder.
- When the app is on the App Store, replace the "coming soon" `StoreBadge` in `src/components/Hero.tsx` with a link.
- Have the Privacy Policy (`/privasi`) and Terms and Conditions (`/ketentuan`) reviewed by a legal advisor. Their text lives in `src/i18n/legal.ts`; update the "last updated" date there whenever it changes, and revise the policy if the app ever adds analytics, accounts, or cloud sync. Use `https://<domain>/privasi` as the App Store Connect privacy policy URL.

## Structure

- `src/app/page.tsx` composes the sections in `src/components/`.
- All copy lives in `src/i18n/dictionary.ts` (`id` is the default, `en` is selectable via the ID/EN toggle and remembered in `localStorage`).
- Brand colours are Tailwind theme tokens in `src/app/globals.css`, taken from the app's design system.
- `public/hands/` and `public/plans/` are the app's own 3D hand renders and exercise illustrations; `src/app/icon.png` is the app icon.

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project**, import the repository, and keep the detected Next.js defaults.
3. Deploy. No environment variables are required; the canonical URL for metadata, `robots.txt`, and `sitemap.xml` comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`.

Alternatively run `npx vercel` (preview) or `npx vercel --prod` from this folder.
