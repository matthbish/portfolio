# ADR 0001: Adopt standalone components and drop NgModules

- **Status:** Accepted
- **Date:** 2025-08-06
- **Deciders:** Matthew Bishop (via AI-assisted engineering)

## Context

The original application was built on Angular 15 with the classic `NgModule`-based architecture. As the site is modernized, we want to align with current Angular best practices: smaller bundles, colocated dependencies, and simpler component authoring. `NgModule` also adds boilerplate and indirection that is unnecessary for a single-application portfolio.

## Decision

Convert the entire application to 100% standalone components and directives. Remove `AppModule` and bootstrap the application via `ApplicationConfig` in `src/main.ts` using `provideRouter` and `provideHttpClient`.

All feature components, shared UI primitives, and app-level components are declared `standalone: true` with explicit `imports` arrays.

## Consequences

- **Positive:** Colocated dependencies make components self-contained and easier to reason about.
- **Positive:** Removing `NgModule` reduces boilerplate and enables tree-shaking of unused code.
- **Positive:** Aligns with the Angular team's long-term direction; new Angular features assume standalone.
- **Negative:** Requires explicit imports in every component (no global declarations), but this is a one-time migration cost.
- **Negative:** Some older libraries assume `NgModule`; none of our current dependencies do.

## Alternatives considered

- **Keep NgModules:** Simpler migration but perpetuates an outdated pattern and misses the bundle-size and authoring benefits.
- **Hybrid:** Not worth the dual mental model for a single application.
