import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoOptions {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SITE_NAME = 'Matthew Bishop — Software Engineer';
const DEFAULT_DESCRIPTION =
  'Matthew Bishop is a software engineer specializing in modern web and mobile applications.';

/** Canonical production origin + base path, used to build absolute per-page URLs. */
export const SITE_URL = 'https://matthbish.github.io/portfolio';

/**
 * Lightweight SEO helper that keeps document metadata in sync.
 * Uses Angular's platform-browser Title & Meta services.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  /** Set page title, meta description, canonical, and Open Graph tags. */
  set(options: SeoOptions): void {
    const title = options.title ? `${options.title} | Matthew Bishop` : SITE_NAME;

    this.titleService.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: options.description ?? DEFAULT_DESCRIPTION
    });
    this.meta.updateTag({ property: 'og:title', content: options.title ?? SITE_NAME });
    this.meta.updateTag({
      property: 'og:description',
      content: options.description ?? DEFAULT_DESCRIPTION
    });
    this.meta.updateTag({ property: 'og:type', content: options.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });

    if (options.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: options.ogImage });
    }

    if (options.canonicalUrl) {
      this.meta.updateTag({ property: 'og:url', content: options.canonicalUrl });
      this.setCanonical(options.canonicalUrl);
    }

    if (options.noindex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.meta.removeTag('name="robots"');
    }
  }

  private setCanonical(url: string): void {
    const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}
