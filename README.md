# Mediawind Website

Company website for [Mediawind](https://mediawind.co) — a digital product development studio based in Australia. Rebuilt from WordPress/Elementor as a Next.js app.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home (hero, services, clients, case study, why us, process, contact, blog teaser)
- `/services` — Services overview
- `/app-development`, `/web-development`, `/backend-development`, `/branding` — Service detail pages
- `/about` — Mission, approach, team
- `/blog` — Blog listing; posts live in `src/data/posts.ts`
- `/contact` — Contact form

The old WordPress post URL `/automation-in-it-a-new-era-of-operations` permanently redirects to `/blog/automation-in-it-a-new-era-of-operations` (see `next.config.ts`).

## Contact form email

The form posts to `/api/contact`, which sends email through [Resend](https://resend.com). Set these environment variables (in Vercel → Project → Settings → Environment Variables):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (required for delivery) |
| `CONTACT_TO` | Recipient address (defaults to femi.o@mediawind.co) |

Until `RESEND_API_KEY` is set, submissions return an error and the UI shows visitors a direct mailto link, so no enquiry is silently lost.

## Adding a blog post

Add an entry to `src/data/posts.ts` (slug, title, author, image in `public/images/`, excerpt, sections). The listing page and the post route pick it up automatically.

## Brand

Follows the Media Wind Brand Guide:

- Font: Rajdhani (the brand's sole typeface; it has no italic — emphasis uses color instead)
- Primary colors: white, sky `#98CBF1`, blue `#5488C7`, indigo `#3C3D96`
- Secondary: `#F1F1F1`, black, gray `#AFACAC`, deep navy `#031750` (the recommended background for the primary logo — used for the hero, clients strip, CTA bands, and footer)
- Logo assets extracted from the brand guide: `public/images/logo.png` (full lockup), `public/images/logo-mark.png` (wave mark alone — also the favicon)
- Tokens are defined in `src/app/globals.css` under `@theme`

Photography spots use the `ImagePlaceholder` component, with a caption describing the shot per the guide's photography direction ("people at ease with technology… happy smiles… hint of brand colors"). Replace each with a real image in `public/images` when ready.
