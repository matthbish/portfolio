import { Component, input } from '@angular/core';

export type BadgeVariant = 'accent' | 'neutral' | 'subtle';

/**
 * Inline badge primitive for tags, categories, and metadata.
 */
@Component({
  selector: 'app-badge',
  template: ` <span class="badge badge-{{ variant() }}"><ng-content></ng-content></span> `,
  styleUrls: ['./badge.component.scss'],
  standalone: true
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('accent');
}
