import { Component, input } from '@angular/core';

/**
 * Reusable card primitive for consistent surface styling.
 * Supports an optional title, subtitle, and content projection.
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent {
  readonly title = input<string>();
  readonly subtitle = input<string>();
  readonly interactive = input(false);
}
