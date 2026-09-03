import { Component, inject } from '@angular/core';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { SeoService, SITE_URL } from '../../core/services/seo.service';

/**
 * Résumé page — embeds the PDF at `resumeUrl` and offers it as a download.
 * To publish a new résumé, replace `src/assets/resume.pdf` with the new
 * file (same filename); this page, the header link, and the home page
 * all pick it up automatically with no code changes.
 */
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  standalone: true,
  imports: [ButtonComponent, SectionHeadingComponent]
})
export class ResumeComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly resumeUrl = 'assets/resume.pdf';
  readonly downloadFilename = 'Matthew-Bishop-Resume.pdf';
  /** iframe[src] requires an explicitly-trusted resource URL, unlike plain <a href>. */
  readonly resumeEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.resumeUrl
  );

  constructor() {
    inject(SeoService).set({
      title: 'Resume',
      description:
        "Matthew Bishop's résumé — professional experience, education, certifications, and technical skills.",
      canonicalUrl: `${SITE_URL}/resume`
    });
  }
}
