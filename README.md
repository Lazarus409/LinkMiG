# Link MiG Travel & Tour

Marketing site for Link MiG: travel & visa consultations, study abroad, work & live abroad, football agency, flight & hotel booking, and tours of Ghana's regions. Built with Next.js 15 (App Router), React 19, Tailwind CSS 3, Framer Motion and Swiper.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in SMTP credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

- `app/`: routes (`/`, `/about`, `/contact`, `/destinations`, `/services/*`) and `app/api/contact` (form handler)
- `Components/layout/`: page sections, grouped per page, plus `NavBar`, `Footer`, `SocialLinks`
- `Components/layout/DestinationsSection/regionsData.tsx`: regions, hero images and tourist sites
- `lib/site.ts`: business contact details (email, phone, WhatsApp, hours, social URLs) and the services list

## Contact form & newsletter

**Email is currently paused** (`emailEnabled: false` in `lib/site.ts`):

- The contact form validates the details, then opens WhatsApp with the booking pre-filled to `+233 56 098 5509`. The visitor taps Send.
- The newsletter section is hidden.

To turn email back on: fill in `.env.local` from `.env.example` (SMTP), then set `emailEnabled: true`. The form then emails bookings to `info@linkmig.com` via `POST /api/contact` and offers WhatsApp as a follow-up, and the newsletter reappears.

Change contact details in `lib/site.ts`. Fill in `site.socials` to show the Facebook/Instagram/Twitter icons (they're hidden while empty).

## Deploying

Set the same `SMTP_*` variables in your host's environment settings (e.g. Vercel → Project → Settings → Environment Variables).
