/**
 * A blog post — either a technical article or a development log.
 */
export interface BlogPost {
  /** Stable URL slug. */
  slug: string;
  /** Post title. */
  title: string;
  /** Short excerpt shown in listings. */
  excerpt: string;
  /** Publication date (ISO). */
  publishedAt: string;
  /** Updated date (ISO), if revised. */
  updatedAt?: string;
  /** Category: 'article' | 'dev-log'. */
  kind: 'article' | 'dev-log';
  /** Tags for filtering/metadata. */
  tags: string[];
  /** Estimated read time in minutes. */
  readingMinutes: number;
}
