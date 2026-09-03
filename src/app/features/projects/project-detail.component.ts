import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ProseComponent } from '../../shared/ui/prose/prose.component';

/**
 * Individual project case study. Loads the project by slug from
 * the route and renders the full engineering write-up.
 */
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [RouterLink, BadgeComponent, ButtonComponent, SectionHeadingComponent, ProseComponent]
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectService);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))));

  readonly project = computed(() => {
    const slug = this.slug();
    if (!slug) {
      return undefined;
    }
    return this.projectService.bySlug(slug);
  });

  readonly selectedImageIndex = signal(0);

  constructor() {
    const seo = inject(SeoService);
    effect(() => {
      const project = this.project();
      if (!project) {
        seo.set({ title: 'Project not found', noindex: true });
        return;
      }
      seo.set({
        title: project.name,
        description: project.tagline,
        canonicalUrl: `${SITE_URL}/projects/${project.slug}`,
        ogType: 'article',
        ogImage: project.heroImage ? `${SITE_URL}${project.heroImage}` : undefined
      });
    });

    // Reset back to the first image whenever the route lands on a different project.
    effect(() => {
      this.project();
      this.selectedImageIndex.set(0);
    });
  }

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  nextImage(imageCount: number): void {
    this.selectedImageIndex.update((index) => (index + 1) % imageCount);
  }

  previousImage(imageCount: number): void {
    this.selectedImageIndex.update((index) => (index - 1 + imageCount) % imageCount);
  }
}
