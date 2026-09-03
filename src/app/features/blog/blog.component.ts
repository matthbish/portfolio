import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { BlogService } from '../../core/services/blog.service';
import { SeoService, SITE_URL } from '../../core/services/seo.service';

/**
 * Blog page. Supports technical articles and development logs.
 * Content is currently empty but the data model, service, and
 * rendering are ready for posts to be added.
 */
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [SectionHeadingComponent, BadgeComponent]
})
export class BlogComponent {
  private readonly blogService = inject(BlogService);

  readonly posts = this.blogService.posts;

  constructor() {
    inject(SeoService).set({
      title: 'Blog',
      description: 'Technical articles and development logs by Matthew Bishop.',
      canonicalUrl: `${SITE_URL}/blog`
    });
  }
}
