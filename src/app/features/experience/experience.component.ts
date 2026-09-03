import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { ROLES } from '../../data/experience.data';
import { EDUCATION } from '../../data/education.data';
import { CREDENTIALS } from '../../data/credentials.data';

/**
 * Experience page — the résumé rendered as a page: work history,
 * education, and certifications/clearances, with a link to the
 * downloadable PDF. Personal projects live on their own page.
 */
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [SectionHeadingComponent, BadgeComponent, ButtonComponent]
})
export class ExperienceComponent {
  readonly roles = ROLES;
  readonly education = EDUCATION;
  readonly credentials = CREDENTIALS;
  readonly resumeUrl = '/assets/resume.pdf';
  readonly downloadFilename = 'Matthew-Bishop-Resume.pdf';

  constructor() {
    inject(SeoService).set({
      title: 'Experience',
      description:
        "Matthew Bishop's professional software engineering experience, education, and certifications.",
      canonicalUrl: `${SITE_URL}/experience`
    });
  }
}
