/** A single navigable top-level page. */
export interface SitePage {
  label: string;
  route: string;
  hint: string;
}

/**
 * Canonical list of navigable pages, shared by the command palette and the
 * "g" keyboard-navigation shortcut so both stay in sync automatically —
 * add a page here and it appears in both without further wiring.
 */
export const SITE_PAGES: readonly SitePage[] = [
  { label: 'Home', route: '/', hint: 'Hero and value proposition' },
  { label: 'Resume', route: '/resume', hint: 'View and download the PDF' },
  { label: 'Experience', route: '/experience', hint: 'Work history, education, certifications' },
  { label: 'Skills', route: '/skills', hint: 'Categorized toolkit' },
  { label: 'Projects', route: '/projects', hint: 'Personal project case studies' },
  { label: 'AI Experience', route: '/ai-experience', hint: 'AI and agents' },
  // Blog is built but disabled for now — re-add this entry to bring it back.
  { label: 'Contact', route: '/contact', hint: 'Get in touch' }
];
