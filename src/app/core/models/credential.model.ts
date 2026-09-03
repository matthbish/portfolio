/** A certification or security clearance. */
export interface Credential {
  /** Credential name, e.g. 'AWS Certified Developer - Associate'. */
  name: string;
  /** Issuing body, if worth showing separately from the name. */
  issuer?: string;
  /** Date obtained, e.g. 'Sep 2025'. */
  start: string;
  /** Still active/held. */
  current?: boolean;
}
