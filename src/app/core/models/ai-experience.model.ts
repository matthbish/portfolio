/** A single AI experience entry. */
export interface AiExperience {
  /** Title of the experience, e.g. 'Prompt Engineering'. */
  title: string;
  /** Short description. */
  description: string;
  /** Tools/technologies involved. */
  tools: string[];
  /** Year(s) of experience. */
  year?: string;
}
