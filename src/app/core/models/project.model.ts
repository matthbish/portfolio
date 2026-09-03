/**
 * Flagship project with full case-study detail.
 * Small/open-source projects use a lighter subset via `ProjectSummary`.
 */
export interface Project {
  /** Stable URL slug used for routing. */
  slug: string;
  /** Display name. */
  name: string;
  /** Short tagline shown on cards and hero. */
  tagline: string;
  /** One-paragraph executive summary for skimming. */
  summary: string;
  /** Whether this is a flagship project (gets full detail page & priority). */
  flagship: boolean;
  /** Optional external demo or live URL. */
  demoUrl?: string;
  /** Optional GitHub repository URL. */
  githubUrl?: string;
  /** Hero/banner image path. */
  heroImage?: string;
  /** Gallery/screenshot images. */
  images: string[];
  /** Technologies used, ordered most prominent first. */
  techStack: string[];
  /** Engineering highlights — bullet points for quick scanning. */
  highlights: string[];
  /** Problem statement. */
  problem?: string;
  /** Requirements / constraints. */
  requirements?: string[];
  /** Architecture description & optional diagram path. */
  architecture?: string;
  /** Architecture diagram image path. */
  architectureDiagram?: string;
  /** Key engineering decisions with rationale. */
  decisions?: { title: string; detail: string }[];
  /** Challenges faced. */
  challenges?: string[];
  /** Lessons learned. */
  lessons?: string[];
  /** Future improvements / roadmap. */
  futureWork?: string[];
  /** Year(s) of active work. */
  year?: string;
  /** Status badge: 'active' | 'archived' | 'experiment'. */
  status?: 'active' | 'archived' | 'experiment';
}
