import type { AiExperience } from '../core/models/ai-experience.model';

export const AI_AREAS: readonly AiExperience[] = [
  {
    title: 'Prompt engineering',
    description:
      'Designing precise, well-scoped prompts that produce reliable, maintainable output — treating LLMs as junior engineers who need crisp requirements.',
    tools: ['Claude', 'GPT', 'Structured prompts']
  },
  {
    title: 'Claude Code & coding agents',
    description:
      'Driving Claude Code and other coding agents to plan, implement, and refactor features across large codebases — reviewing their work the way I would a teammate’s.',
    tools: ['Claude Code', 'Gemini CLI']
  },
  {
    title: 'Architecture assistance',
    description:
      'Using AI as a thinking partner for architecture decisions, trade-off analysis, and design review — while owning the final judgment.',
    tools: ['LLM-assisted design']
  }
];

export const AI_FUTURE_IDEAS: readonly string[] = [
  'Ship a small AI-powered product end-to-end.',
  'Open-source a reusable AI tooling library.'
];
