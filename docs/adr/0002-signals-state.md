# ADR 0002: Use Angular signals for state management

- **Status:** Accepted
- **Date:** 2025-08-06
- **Deciders:** Matthew Bishop

## Context

The application needs client-side state for theming, projects, blog posts, and the command palette. State must be reactive, easily testable, and free of unnecessary external dependencies. The previous approach mixed `HttpClient` subscriptions and mutable component fields.

## Decision

Use Angular **signals** (`signal`, `computed`, `Effect`) as the primary reactive primitive for all shared state. Services expose read-only signals (`asReadonly()`) and computed selectors. No external state-management library is introduced.

Examples:
- `ThemeService` — `signal<Theme>` + `computed isDark`
- `ProjectService` — `signal<Project[]>` + computed `projects`, `flagshipProjects`, `summaries`
- `BlogService` — `signal<BlogPost[]>` + computed `posts`

## Consequences

- **Positive:** Signals are fine-grained, framework-integrated, and easy to reason about (no streams to subscribe/unsubscribe for simple state).
- **Positive:** Zero dependency cost; ships with Angular.
- **Positive:** `computed()` gives derived state with automatic dependency tracking.
- **Negative:** Signals are a newer API; requires staying current with Angular releases.
- **Negative:** For genuinely async/streamed data, RxJS remains the better tool; we use signals for synchronous UI state and RxJS only where needed.

## Alternatives considered

- **RxJS `BehaviorSubject` everywhere:** More verbose; signals are simpler for this scale.
- **NGXS / NgRx:** Heavyweight store libraries are overkill for a portfolio and add dependencies.
