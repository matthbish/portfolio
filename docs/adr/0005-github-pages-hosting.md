# ADR 0005: Host on GitHub Pages with a custom-domain-ready setup

- **Status:** Accepted
- **Date:** 2025-08-06
- **Deciders:** Matthew Bishop

## Context

The portfolio must be publicly accessible and suitable for open-source hosting. The repository already has a GitHub remote. We want zero-cost hosting, straightforward CI/CD, and easy future custom-domain support.

## Decision

Host on **GitHub Pages** using the GitHub Actions `deploy-pages` workflow. The production build uses `baseHref: /portfolio/` to match the `matthbish.github.io/portfolio` project-page URL. A `public/404.html` SPA fallback redirects unknown paths into the Angular router.

Future custom-domain support:
- Add a `CNAME` file pointing to the custom domain.
- Change `baseHref` to `/` (or the subpath) in `angular.json`.
- Update the `sitemap.xml`, canonical URLs, and Open Graph URLs to the new domain.

## Consequences

- **Positive:** Free, reliable static hosting with a built-in CI/CD path.
- **Positive:** Public repo showcases the codebase to engineers reviewing the portfolio.
- **Positive:** Trivial to add a custom domain later.
- **Negative:** GitHub Pages is static-only; any serverless features (e.g., contact-form backend) must be external.
- **Negative:** SPA deep-linking requires the `404.html` fallback (hash-free routing + redirect).

## Alternatives considered

- **Firebase Hosting:** Was previously configured; paid beyond free tier and requires a separate deploy setup.
- **Netlify/Vercel:** Excellent, but adds an external service when GitHub Pages suffices.
