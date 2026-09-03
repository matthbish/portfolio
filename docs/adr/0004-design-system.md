# ADR 0004: Component-based design system with CSS custom properties

- **Status:** Accepted
- **Date:** 2025-08-06
- **Deciders:** Matthew Bishop

## Context

The portfolio needs a minimalist, elegant, accessible design that supports dark mode (default) and a light-mode toggle. It must be easy to maintain and communicate intentional design choices. The previous version used Angular Material and CoreUI component libraries.

## Decision

Replace third-party UI libraries with a small, hand-built component library of reusable UI primitives (`ButtonComponent`, `CardComponent`, `BadgeComponent`, `SectionHeadingComponent`, `ProseComponent`, `LogoComponent`) built on CSS custom properties (design tokens).

The design system uses:
- A neutral charcoal + white palette with a subtle green accent.
- CSS custom properties for theming (`--color-*`, `--surface-*`, `--text-*`, etc.) that switch based on `[data-theme]`.
- Semantic HTML, ARIA, keyboard support, and reduced-motion awareness.

## Consequences

- **Positive:** Small bundle; no large third-party UI framework CSS shipped.
- **Positive:** Full control over visual design; no fighting a library's theming system.
- **Positive:** Demonstrates strong frontend architecture (tokens, primitives, composition).
- **Negative:** We are responsible for accessibility and cross-browser behavior of every primitive (testing mitigates this).
- **Negative:** More upfront design/implementation effort than dropping in a library.

## Alternatives considered

- **Angular Material styled to match:** Heavier runtime and CSS; theming fights remain.
- **CoreUI:** Was the original dependency; heavy and template-looking.
