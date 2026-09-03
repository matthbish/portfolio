/** A single work experience entry. */
export interface Experience {
  /** Company or organization name. */
  company: string;
  /** Job title. */
  title: string;
  /** Start period, e.g. '2021'. */
  start: string;
  /** End period, e.g. '2021'. Omit for a current role. */
  end?: string;
  /** Currently employed here. */
  current?: boolean;
  /** Short location string. */
  location?: string;
  /** One-paragraph summary of the role. */
  summary: string;
  /** Bullet points of responsibilities & achievements. */
  highlights: string[];
  /** Technologies used in this role. */
  techStack: string[];
}
