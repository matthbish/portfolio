import { Component, input } from '@angular/core';

/**
 * Section heading primitive with optional eyebrow/kicker and title.
 * Renders semantic h2/h3 based on `level`.
 */
@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
  standalone: true
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>();
  readonly title = input<string>();
  readonly description = input<string>();
  readonly level = input<'h1' | 'h2' | 'h3'>('h2');
  readonly fullWidthDescription = input(false);
}
