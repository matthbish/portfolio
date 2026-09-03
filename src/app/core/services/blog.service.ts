import { Injectable, computed, signal } from '@angular/core';
import type { BlogPost } from '../models/blog-post.model';

/**
 * Provides read-only access to blog posts via signals.
 * Content is currently empty by design; add posts to the
 * `postsSignal` (or back it with a CMS/API) to publish.
 */
@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly postsSignal = signal<readonly BlogPost[]>([]);

  /** All posts, most recent first. */
  readonly posts = computed(() =>
    [...this.postsSignal()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  );

  /** Lookup a single post by slug. */
  bySlug(slug: string): BlogPost | undefined {
    return this.postsSignal().find((p) => p.slug === slug);
  }
}
