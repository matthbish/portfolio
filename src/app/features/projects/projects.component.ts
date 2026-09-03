import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import type { Project } from '../../core/models/project.model';

/**
 * Projects index. Flagship projects are featured first with
 * full case-study links; smaller projects receive lighter emphasis.
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [RouterLink, BadgeComponent, ButtonComponent, SectionHeadingComponent]
})
export class ProjectsComponent {
  readonly projectService = inject(ProjectService);

  constructor() {
    inject(SeoService).set({
      title: 'Projects',
      description: 'Flagship case studies and smaller engineering projects by Matthew Bishop.',
      canonicalUrl: `${SITE_URL}/projects`
    });
  }

  readonly flagshipProjects = this.projectService.flagshipProjects;

  /** Non-flagship projects, shown with lighter emphasis. */
  readonly smallerProjects = computed<readonly Project[]>(() =>
    this.projectService.projects().filter((p) => !p.flagship)
  );

  readonly hasSmallerProjects = computed(() => this.smallerProjects().length > 0);
}
