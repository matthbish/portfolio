/** A single external or contact link. */
export interface SocialLink {
  label: string;
  url: string;
  note: string;
  external: boolean;
}

/**
 * Canonical list of social/contact links, shared by the footer and
 * contact page so they never drift out of sync.
 */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/matthbish',
    note: 'Code, open source, and experiments.',
    external: true
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matthbish/',
    note: 'Professional background and network.',
    external: true
  },
  {
    label: 'Email',
    url: 'mailto:matthbish@gmail.com',
    note: 'Direct and reliable.',
    external: false
  }
];
