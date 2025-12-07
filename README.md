# ProspectRoute UI — React + TypeScript + Tailwind v3

A clean, componentized landing page mimicking the provided UI, built with:
- React + TypeScript
- Tailwind CSS v3
- Dynamic content loaded from `public/content.json`
- Modular sections and UI primitives

## Highlights

- Theme variables in a single `src/theme.ts` file
- UI primitives under `src/components/ui/` (Button, Card, StatRow)
- Page sections under `src/components/sections/` (Navbar, Hero, Section, Pricing, Footer)
- Content provided via JSON so marketing can update copy without code changes

## Project Structure

```text
.
├── index.html
├── public/
│   ├── content.json        # Dynamic page content
│   └── img/                # Optional illustrations
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── theme.ts            # Brand colors, radii, shadows
│   ├── types/
│   │   └── content.ts      # Strong typing for content.json
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   └── StatRow.tsx
│       └── sections/
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── Section.tsx
│           ├── Pricing.tsx
│           └── Footer.tsx
├── tailwind.config.js
├── package.json
└── tsconfig.json
```

## Prerequisites

- Node.js 18+ recommended
- Yarn (Classic) installed globally: `npm i -g yarn` (optional if you already have it)

## Installation

```bash
# Clone your project and enter directory
git clone <your-repo-url>.git
cd <your-project-directory>

# Install dependencies
yarn install
```

## Development

```bash
# Start the dev server
yarn dev
```

- The app expects `public/content.json` to exist.
- Open the app at the URL printed by the dev server (typically http://localhost:5173 for Vite).

## Build

```bash
yarn build
```

- Outputs production-ready assets to `dist/`.

## Preview Production Build

```bash
yarn preview
```

- Serves the built `dist/` locally for validation.

## Scripts Cheatsheet

```bash
yarn dev       # Run local development server
yarn build     # Production build
yarn preview   # Preview built app locally
yarn lint      # (optional) If ESLint is configured
yarn format    # (optional) If Prettier is configured
```

## Content Management

All page content is loaded from `public/content.json`. Update copy, CTA labels, and pricing without touching code.

Example schema (see full version in `public/content.json`):
```json
{
  "navbar": {
    "logoText": "PROSPECTROUTE",
    "links": [{ "label": "How it works", "href": "#how-it-works" }],
    "rightCtas": [{ "label": "Login", "href": "/login", "variant": "ghost" }],
    "trustBadge": { "text": "Trustpilot ★★★★☆" },
    "contactBar": { "label": "Talk to sales", "phone": "1 (888) 775-8687" }
  },
  "hero": {
    "eyebrow": "ProspectRoute",
    "title": "High volume, pristine, exclusive leads.",
    "subtitle": "Up to 50 leads per day. Zero returns and high quality.",
    "form": {
      "title": "Want to see pricing? We'll email it!",
      "fields": [
        { "name": "fullName", "label": "Full name", "type": "text", "required": true },
        { "name": "email", "label": "Email", "type": "email", "required": true },
        { "name": "phone", "label": "Phone", "type": "tel" },
        { "name": "agencyEmployees", "label": "Agency employees", "type": "select",
          "options": [{ "label": "1-3", "value": "1-3" }]
        }
      ],
      "submitLabel": "Send pricing!"
    },
    "ctas": [
      { "label": "Click to read this", "href": "#how-it-works", "variant": "secondary" },
      { "label": "See pricing", "href": "#pricing", "variant": "primary" }
    ]
  },
  "pricing": {
    "eyebrow": "Pricing",
    "title": "Choose your package",
    "subtitle": "No contracts. No commitments. Pay as you go each week.",
    "tiers": [
      {
        "title": "75-85",
        "subTitle": "Calls/Week",
        "stats": [{ "label": "Telemarketers", "value": "3" }],
        "price": { "amount": "$1,169", "cadence": "Per week" },
        "ctas": [{ "label": "Signup", "href": "/signup", "variant": "primary" }],
        "featured": true
      }
    ]
  }
}
```

TypeScript types for this JSON live in `src/types/content.ts`. They help ensure updates are safe and consistent.

## Theming and Design

- Primary brand colors and radii are defined in `src/theme.ts`.
- Tailwind extensions in `tailwind.config.js`:
  - `brand.yellow` and `brand.navy` colors
  - Extra shadows, rings, and border radii
- You can tweak Tailwind classes directly in components to adjust spacing and style.

## File-by-File Overview

- `src/components/ui/Button.tsx`: Variants `primary`, `secondary`, `ghost`
- `src/components/ui/Card.tsx`: Rounded, shadowed container
- `src/components/ui/StatRow.tsx`: Label/value rows for pricing tiers
- `src/components/sections/*`: Page sections composed using UI primitives
- `src/App.tsx`: Fetches `content.json`, composes sections in order:
  - Navbar → Hero → How it works → PR-CRM → Our Leads → Pricing → Footer

## Environment Notes

- The app fetches `content.json` from `/public`. Ensure the file exists before running.
- If deploying behind a subpath (e.g., `/prospectroute`), configure your bundler’s `base` (Vite’s `base` option) and ensure static assets paths are correct.

## Deployment

- Any static hosting (Netlify, Vercel, GitHub Pages) works:
  1. `yarn build`
  2. Deploy the `dist/` folder
- Make sure `public/content.json` is included. If content will change post-deploy, consider hosting the JSON from a CMS or remote URL and update the fetch path.

## Assets

- Replace `illustration` paths in `content.json` with your images under `public/img/`.
- Example: `"illustration": "/img/hero-illustration.svg"`

## Customization Tips

- Add new sections by:
  1. Extending `PageContent` in `src/types/content.ts`
  2. Creating a new component in `src/components/sections/`
  3. Adding content to `public/content.json`
  4. Rendering the section in `src/App.tsx`
- Add new button variants by updating `Button.tsx` and using Tailwind classes.

## Troubleshooting

- Blank page: Check the browser console; ensure `content.json` resolves (CORS or path issues).
- Styling mismatch: Verify Tailwind is scanning `src/**/*.{ts,tsx}` in `tailwind.config.js`.
- Type errors: Ensure `content.json` matches `src/types/content.ts`.

## License

Proprietary — adjust as needed for your project.

---
Need me to push this into your repo or open a PR? Share your repository `owner/name` and target branch, and I’ll wire everything up.