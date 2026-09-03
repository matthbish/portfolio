import type { Credential } from '../core/models/credential.model';

/** Certifications and active security clearances. */
export const CREDENTIALS: readonly Credential[] = [
  { name: 'AWS Certified Developer - Associate', start: 'Sep 2025', current: true },
  { name: 'CompTIA Security+ Certification', start: 'Jan 2024', current: true },
  {
    name: 'Top Secret/Sensitive Compartmented Information (TS/SCI) Security Clearance',
    start: 'Oct 2023',
    current: true
  }
];
