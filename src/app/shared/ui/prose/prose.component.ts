import { Component } from '@angular/core';

/**
 * Prose container for rich text content (case studies, blog posts).
 * Applies consistent typography, spacing, and responsive sizing.
 */
@Component({
  selector: 'app-prose',
  template: '<div class="prose"><ng-content></ng-content></div>',
  styleUrls: ['./prose.component.scss'],
  standalone: true
})
export class ProseComponent {}
