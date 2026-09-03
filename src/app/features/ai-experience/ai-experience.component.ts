import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { AI_AREAS, AI_FUTURE_IDEAS } from '../../data/ai-experience.data';

/**
 * Dedicated AI experience page. Highlights how Matthew works
 * alongside AI as a force multiplier, with room for future projects.
 */
@Component({
  selector: 'app-ai-experience',
  templateUrl: './ai-experience.component.html',
  styleUrls: ['./ai-experience.component.scss'],
  standalone: true,
  imports: [SectionHeadingComponent, BadgeComponent, ButtonComponent]
})
export class AiExperienceComponent {
  readonly areas = AI_AREAS;
  readonly futureIdeas = AI_FUTURE_IDEAS;

  constructor() {
    inject(SeoService).set({
      title: 'AI Experience',
      description:
        'How Matthew Bishop works alongside AI — prompt engineering, coding agents, and architecture assistance.',
      canonicalUrl: `${SITE_URL}/ai-experience`
    });
  }
}
