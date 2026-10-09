# Kristýna Zouzalová — Portfolio

Modern media-kit portfolio for a fitness & travel content creator, rebuilt with Astro for performance and maintainability.

**Live:** [https://Ston3tom.github.io/KZ_Portfolio](https://Ston3tom.github.io/KZ_Portfolio)

## Stack

- **Astro** — static output, minimal JS, excellent Core Web Vitals
- **Tailwind CSS v4** — design tokens and responsive layout
- **React islands** — video gallery modal only where interactivity is needed
- **GitHub Pages** — deployed from `dist/` via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # Sections + video gallery island
  data/site.ts  # Copy, nav, videos, audience stats
  layouts/      # Shared HTML shell + SEO
  pages/        # Routes
  styles/       # Global design system
public/
  images/       # Thumbnails + profile photo
  videos/       # MP4 content
```

## Contact

- Email: kristynazouzalova@gmail.com
- Phone: (+420) 777 545 666
- Instagram: [@zouzalova.tyna](https://instagram.com/zouzalova.tyna)
- Location: Prague, Czech Republic
