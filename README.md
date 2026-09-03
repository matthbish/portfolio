<div align="center">

# Matthew Bishop — Portfolio

**A modern, production-grade software engineering portfolio.**

Dark-mode-first • Minimalist • Accessible • Lighthouse-focused

[![CI](https://github.com/matthbish/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/matthbish/portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/matthbish/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/matthbish/portfolio/actions/workflows/deploy.yml)
[![Angular v20](https://img.shields.io/badge/Angular-v20-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

A flagship portfolio designed to demonstrate polished, maintainable, production-quality software engineering. Built with modern Angular best practices — standalone components, signals, strict typing, lazy loading, and a hand-built accessible design system.

## ✨ Features

- **Modern Angular 20** — standalone components, signals, strict mode, feature-based structure.
- **Lazy-loaded routes** — small initial bundle (~87 kB transfer), each feature is its own chunk.
- **Hand-built design system** — CSS custom properties, dark/light theme, reusable UI primitives.
- **Accessible by default** — WCAG AA target, semantic HTML, ARIA, keyboard navigation, reduced-motion support.
- **Engineering showcase** — unit tests, E2E tests, accessibility scans, CI/CD, ADRs, conventional commits.
- **Subtle touches** — command palette (Ctrl+K), keyboard shortcuts, persisted theme, Konami code, build info.

## 🧱 Tech Stack

| Area | Technology |
|------|------------|
| Framework | Angular 20 |
| Language | TypeScript (strict) |
| State | Angular signals |
| Styling | SCSS + CSS custom properties |
| Testing | Karma + Jasmine (unit), Playwright (E2E), axe (a11y) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

## 📁 Project Structure

```
src/
├─ app/
│  ├─ core/          # Services, models, data
│  ├─ features/      # Lazy-loaded feature pages
│  ├─ shared/        # Reusable UI primitives & components
│  └─ app.routes.ts  # Route definitions
├─ assets/           # Static assets
├─ index.html        # App shell + SEO metadata
└─ styles.scss       # Global design tokens & base styles
docs/adr/            # Architecture Decision Records
e2e/                 # Playwright E2E + accessibility tests
public/              # Static files copied to build (robots.txt, sitemap, 404)
.github/             # CI/CD workflows, Dependabot
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Install

```bash
npm install
```

### Development server

```bash
npm start
# Navigate to http://localhost:4200
```

### Build

```bash
npm run build
# Output in dist/portfolio
```

### Unit tests

```bash
npm run test        # watch mode
npm run test:ci     # headless, single run
```

### E2E + accessibility tests

```bash
npm run e2e         # run Playwright suite (starts dev server automatically)
```

> First run requires `npx playwright install chromium` to download the browser.

### Lint

```bash
npm run lint
```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run the dev server |
| `npm run build` | Production build (GitHub Pages ready) |
| `npm test` | Unit tests (watch) |
| `npm run test:ci` | Unit tests (headless, single run) |
| `npm run lint` | ESLint across `src` |
| `npm run e2e` | Playwright E2E + accessibility suite |
| `npm run commitlint` | Validate the last commit message |

## ☁️ Deployment

Deploys to **GitHub Pages** automatically via the [`deploy.yml`](.github/workflows/deploy.yml) workflow on pushes to `main`. The production build uses `baseHref: /portfolio/`.

### Manual deploy

```bash
npm run build
# Push dist/portfolio to gh-pages, or use the GitHub Actions workflow
```

### Custom domain

1. Add a `CNAME` file with your domain.
2. Set `baseHref` to `/` in `angular.json`.
3. Update URLs in `src/index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## 🧪 Quality & Engineering

- **Unit tests** — Karma + Jasmine for services & components.
- **E2E tests** — Playwright smoke tests across all routes.
- **Accessibility** — `@axe-core/playwright` scans all routes for WCAG 2 A/AA.
- **CI** — Lint, test, build, and E2E/a11y run on every push and PR.
- **ADRs** — Key architectural decisions documented in [`docs/adr/`](docs/adr).
- **Conventional commits** — Enforced via commitlint.
- **Dependabot** — Keeps npm and GitHub Actions dependencies current.

### Performance budgets

The production build enforces a **350 kB** initial bundle warning and **500 kB** error budget, plus per-component style budgets.

## 📄 License

MIT © Matthew Bishop. See [LICENSE](LICENSE).
