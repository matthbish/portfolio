/** A categorized skill group. */
export interface SkillCategory {
  /** Category name, e.g. 'Languages', 'Backend', 'AI'. */
  readonly name: string;
  /** One-line description of the category. */
  readonly description: string;
  /** Technologies in this category. */
  readonly skills: readonly string[];
}
