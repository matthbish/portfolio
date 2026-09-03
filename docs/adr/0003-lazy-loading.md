# ADR 0003: Lazy-load feature routes

- **Status:** Accepted
- **Date:** 2025-08-06
- **Deciders:** Matthew Bishop

## Context

The application has multiple feature pages (home, projects, experience, skills, AI experience, blog, contact, 404). Loading all of them eagerly inflates the initial bundle and hurts Lighthouse performance, which is a hard requirement (target 100).

## Decision

Lazy-load every feature route using Angular's `loadComponent` in the route definitions. Each feature is code-split into its own chunk, loaded only when the corresponding route is visited.

## Consequences

- **Positive:** Small initial bundle (~306 kB raw / ~87 kB transfer) — well under the 350 kB warning budget.
- **Positive:** Faster initial load and time-to-interactive; only the feature the user visits is downloaded.
- **Positive:** Improves Core Web Vitals (LCP, TBT) and Lighthouse score.
- **Negative:** Slight delay on first navigation to a chunk (mitigated by predictable, small chunks).
- **Negative:** Requires discipline to keep shared code in the shared module so it is not duplicated across chunks.

## Alternatives considered

- **Eager loading:** Simpler but sacrifices the performance budget.
- **Single mega-chunk:** Bad for caching and initial load.
