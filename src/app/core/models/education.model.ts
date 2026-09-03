/** A single formal education entry. */
export interface Education {
  /** School or institution name. */
  institution: string;
  /** City/state or similar short location string. */
  location?: string;
  /** Degree earned, e.g. 'Bachelor of Science in Computer Science'. */
  degree: string;
  /** Minor, if any. */
  minor?: string;
  /** Graduation period, e.g. 'Apr 2022'. */
  graduated: string;
  /** GPA, if worth listing. */
  gpa?: string;
  /** Honors, e.g. 'Magna Cum Laude', "Dean's List". */
  honors?: string[];
  /** Notable activities or organizations. */
  activities?: string[];
}
