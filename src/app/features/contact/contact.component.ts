import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { ContactService } from '../../core/services/contact.service';
import { SeoService, SITE_URL } from '../../core/services/seo.service';
import { SOCIAL_LINKS } from '../../data/social-links.data';

/**
 * Contact page with an accessible form and direct links.
 * Uses reactive forms for robust validation and testing.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeadingComponent, ButtonComponent]
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  readonly contactService = inject(ContactService);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.maxLength(2000)]]
  });

  readonly socials = SOCIAL_LINKS;

  constructor() {
    inject(SeoService).set({
      title: 'Contact',
      description: 'Get in touch with Matthew Bishop.',
      canonicalUrl: `${SITE_URL}/contact`
    });
  }

  get submitState() {
    return this.contactService.submitState;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.contactService.submit(this.form.getRawValue());
  }
}
