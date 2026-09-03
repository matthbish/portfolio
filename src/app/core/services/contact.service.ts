import { Injectable, inject, signal } from '@angular/core';
import { WINDOW } from './window.token';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SubmitState = 'idle' | 'success';

const CONTACT_EMAIL = 'matthbish@gmail.com';

/** Builds a `mailto:` URL that pre-fills the recipient's mail client. */
export function buildContactMailto(message: ContactMessage): string {
  const body = `${message.message}\n\n— ${message.name} (${message.email})`;
  const query = `subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${CONTACT_EMAIL}?${query}`;
}

/**
 * Hands a contact form submission off to the visitor's own email client
 * via a `mailto:` link. This site is static (GitHub Pages) with no backend
 * to send mail through, so this is the only transport that can guarantee
 * delivery without a third-party form service.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly window = inject(WINDOW);
  private readonly submitStateSignal = signal<SubmitState>('idle');

  readonly submitState = this.submitStateSignal.asReadonly();

  submit(message: ContactMessage): void {
    this.window.open(buildContactMailto(message), '_blank', 'noopener');
    this.submitStateSignal.set('success');
  }

  reset(): void {
    this.submitStateSignal.set('idle');
  }
}
