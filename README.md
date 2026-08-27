# Darius Korir Pilakan — Portfolio

Personal portfolio for **Darius Korir Pilakan** — Data Scientist & Machine Learning Engineer | Full-Stack Developer.

Built with **React 18 + TypeScript (strict) + Vite + Tailwind CSS v4**, with subtle motion via **Framer Motion**. Fully responsive, dark-mode friendly, accessible, and optimized for fast loading.

## Tech Stack

- [Vite](https://vitejs.dev/) — fast dev server & build tool
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling via the `@tailwindcss/vite` plugin
- [Framer Motion](https://www.framer.com/motion/) — lightweight scroll-in & entrance animations (honors `prefers-reduced-motion`)

## Getting Started

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the Vite dev server with HMR            |
| `npm run build`    | Typecheck (`tsc -b`) then build for production |
| `npm run preview`  | Preview the production build locally          |
| `npm run typecheck`| Run the TypeScript typechecker only           |

## Project Structure

```
public/                 Static assets (favicon)
src/
  components/
    layout/             Navbar, Footer
    projects/           Feature + other project cards
    sections/           One component per section (Hero → Contact)
    ui/                 Reveal (motion), SectionHeading, icons
  data/content.ts       All site content (bio, projects, skills, certs, etc.)
  hooks/useTheme.ts     Light/dark theme (localStorage-persisted)
  App.tsx               Composes the page sections in order
  index.css             Tailwind v4 theme tokens, base & component styles
  main.tsx              React entry point
```

## Customization

Almost all text content lives in a single typed data file — **`src/data/content.ts`**. Edit that file to update your bio, experience, projects, skills, certifications, education, and contact links. The palette and fonts are defined as Tailwind v4 theme tokens in **`src/index.css`** (under `@theme`).

### Replacing screenshot placeholders

Featured project cards render an obvious **"Screenshot placeholder"** area. Swap them for real images by replacing the `ScreenshotPlaceholder` component in `src/components/projects/ProjectCard.tsx` — or run a dev build and inspect the rendered card markup.

## Deployment

```bash
npm run build
npm run preview   # verify locally
```

The production bundle is written to `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
