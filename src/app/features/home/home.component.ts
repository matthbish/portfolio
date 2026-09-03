import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ROLES } from '../../data/experience.data';

/**
 * Landing page. As a full-time engineer, my professional experience is
 * where the vast majority of my engineering time goes — so it leads here,
 * with personal projects shown further down as a smaller, secondary section.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ButtonComponent, CardComponent, BadgeComponent, SectionHeadingComponent]
})
export class HomeComponent {
  readonly projectService = inject(ProjectService);

  constructor() {
    inject(SeoService).set({ canonicalUrl: `${SITE_URL}/` });
  }

  readonly flagshipProjects = this.projectService.flagshipProjects;

  readonly roles = ROLES;

  readonly snapshot = [
    { label: 'Years of professional experience', value: '5+' },
    { label: 'Active clearance', value: 'TS/SCI' },
    { label: 'Certifications', value: 'AWS · Security+' },
    { label: 'Education', value: 'B.S. Computer Science' }
  ];

  readonly values = [
    {
      title: 'Attention to detail',
      description:
        'The small things — edge cases, naming, pixel alignment — are where quality actually lives.'
    },
    {
      title: 'Clean code',
      description: 'Systems that are easy to reason about, extend, and hand off.'
    },
    {
      title: 'Thorough quality assurance',
      description:
        'Tests and manual verification aren’t optional — code isn’t done until it’s proven correct.'
    },
    {
      title: 'Maintainability',
      description:
        'Write it so the next engineer — often future me — can change it with confidence.'
    },
    {
      title: 'Scalability',
      description: 'Design for the load and complexity the system will actually grow into.'
    },
    {
      title: 'Problem solving',
      description:
        'Understand the root cause, not just the symptom, and build solutions that address the actual problem.'
    },

    {
      title: 'Reliability',
      description:
        'Software should behave predictably under failure, unexpected input, and real-world conditions.'
    },

    {
      title: 'Pragmatism',
      description:
        'Use the right level of complexity for the problem — robust engineering without unnecessary abstraction.'
    }
  ];
}
