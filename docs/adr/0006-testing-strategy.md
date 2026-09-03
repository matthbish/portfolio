# ADR 0006: Layered testing strategy (unit, E2E, accessibility)

- **Status:** Accepted
- **Date:** 2025-08-06
- **Deciders:** Matthew Bishop

## Context

The repository must demonstrate excellent engineering practices. Automated verification is a core signal of engineering quality. We want coverage at the unit, integration/E2E, and accessibility levels without over-engineering.

## Decision

Adopt a layered testing stack:

1. **Unit + component tests** — Karma + Jasmine (kept from the Angular toolchain) for services, components, and pipes. Run headless in CI.
2. **E2E smoke tests** — Playwright across all public routes, verifying the app shell and primary content render.
3. **Accessibility scans** — `@axe-core/playwright` running WCAG 2 A/AA rules against every route.
4. **CI** — A GitHub Actions workflow lints, runs unit tests, builds, and runs E2E/a11y on every push and PR.

## Consequences

- **Positive:** Multiple layers catch different failure classes (logic, rendering, accessibility).
- **Positive:** Playwright + axe gives automated accessibility coverage, supporting the WCAG AA target.
- **Positive:** CI enforces quality before merge.
- **Negative:** E2E adds CI runtime; kept lean with a focused smoke suite.
- **Negative:** Karma + Playwright is two test runtimes, but each is well-suited to its layer.

## Alternatives considered

- **Only Karma unit tests:** Misses real-browser rendering and accessibility issues.
- **Only Playwright:** Slower feedback for pure unit logic.
