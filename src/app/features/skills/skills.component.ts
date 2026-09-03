import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { SKILL_CATEGORIES } from '../../data/skills.data';

/**
 * Skills page. Technologies are categorized rather than rated
 * with bars/percentages/stars — a deliberate signal of engineering
 * maturity over self-aggrandizement.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [SectionHeadingComponent, BadgeComponent]
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;

  /** HTML-id-safe slug for aria-labelledby wiring. */
  slug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  constructor() {
    inject(SeoService).set({
      title: 'Skills',
      description: "Matthew Bishop's technical skills, categorized across the stack.",
      canonicalUrl: `${SITE_URL}/skills`
    });
  }
}
