# Husain Najmi — Portfolio

My personal developer portfolio, built to showcase projects like [BizMate](https://mybizmate.vercel.app), UtilVerse, and my professional experience.

**Live site:** https://husain-najmi-53.github.io/husain-portfolio/

## Built with

- React + TypeScript + Vite
- Tailwind CSS v4
- Deployed on GitHub Pages via GitHub Actions

## Sections

- **About** — bio and current focus
- **Stack** — languages, frameworks, and tools I work with
- **Builds** — projects I've shipped, including BizMate, UtilVerse, and Autoinsure
- **Experience** — work history and education
- **Contact** — email, LinkedIn, GitHub

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Project structure
src/
components/   Nav, Hero, About, Stack, Builds, Log (experience), Contact, Footer
data/         content.ts — all editable copy: bio, skills, projects, timeline
lib/          paths.ts — base-path helper for GitHub Pages deployment
index.css     design tokens (colors, fonts) and animations

All portfolio content (bio, project descriptions, skills, work history) lives in
`src/data/content.ts` — update there without touching components.

## Deployment

Pushes to `main` automatically build and deploy via the workflow in
`.github/workflows/deploy.yml`, using GitHub Pages.