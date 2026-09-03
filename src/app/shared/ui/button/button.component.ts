import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Reusable button primitive.
 * Renders an `<a>` when `href` is provided, otherwise a `<button>`.
 *
 * An `href` starting with `/` is treated as an internal route and navigated
 * client-side via `routerLink` (avoiding a full page reload); anything else
 * (e.g. `https://...`, `mailto:...`) renders as a plain anchor.
 *
 * Projected content is captured once via a single `<ng-content>` inside a
 * template and rendered through `NgTemplateOutlet` in whichever branch is
 * active. This avoids the known limitation where `<ng-content>` placed
 * directly inside `@if`/`@else` branches drops the projected content.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink]
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly href = input<string | undefined>();
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
  readonly ariaLabel = input<string | undefined>();
  /** Filename to save as. Forces a plain `<a download>` (never client-side routed), even for a `/`-prefixed href. */
  readonly download = input<string | undefined>();

  readonly isInternalLink = computed(
    () => !this.download() && (this.href()?.startsWith('/') ?? false)
  );
}
