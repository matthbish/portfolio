import type { SkillCategory } from '../core/models/skill.model';

/**
 * Skill categories, ordered to lead with the professional stack I use
 * daily as a full-time engineer, then the broader toolkit, then the
 * technologies from personal/side projects.
 */
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    name: 'Core Full-Stack',
    description: 'The languages and frameworks I build production systems with daily.',
    skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'JavaFX', 'HTML', 'CSS/SCSS']
  },
  {
    name: 'Databases & Messaging',
    description: 'Storing, querying, and moving data reliably.',
    skills: ['MariaDB', 'MongoDB', 'SQL', 'RabbitMQ', 'REST', 'CQRS']
  },
  {
    name: 'DevOps & Tools',
    description: 'The daily drivers of a professional engineering workflow.',
    skills: [
      'JIRA',
      'GitLab',
      'GitHub',
      'VS Code',
      'IntelliJ',
      'Docker',
      'Postman',
      'Fortify',
      'Claude Code'
    ]
  },
  {
    name: 'Security & Cloud',
    description: 'Backed by an active clearance and industry certifications.',
    skills: ['TS/SCI Clearance', 'CompTIA Security+', 'AWS Certified Developer - Associate']
  },
  {
    name: 'Operating Systems',
    description: 'Environments I build and deploy on.',
    skills: ['Windows', 'Linux', 'RHEL']
  },
  {
    name: 'Frontend Engineering',
    description: 'Depth in the Angular ecosystem beyond the framework basics.',
    skills: ['RxJS', 'Signals', 'Accessibility (a11y)', 'React']
  },
  {
    name: 'Testing',
    description: 'Confidence through automated verification.',
    skills: ['Jasmine', 'Karma', 'Jest', 'Playwright', 'Cypress', 'Selenium']
  },
  {
    name: 'Personal Project Stack',
    description: 'What I reach for on nights-and-weekends projects outside of work.',
    skills: ['Kotlin', 'Android', 'Firebase', 'Ionic', 'Node.js']
  }
];
