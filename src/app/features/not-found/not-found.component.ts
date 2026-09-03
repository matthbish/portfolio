import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SeoService } from '../../core/services/seo.service';

/**
 * 404 page rendered for unmatched routes.
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [SectionHeadingComponent, ButtonComponent]
})
export class NotFoundComponent {
  constructor() {
    inject(SeoService).set({ title: 'Page not found', noindex: true });
  }
}
