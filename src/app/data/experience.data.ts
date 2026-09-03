import type { Experience } from '../core/models/experience.model';

/** Professional work history, most recent first — sourced from my current resume. */
export const ROLES: readonly Experience[] = [
  {
    company: 'Gnostech',
    title: 'Software Engineer',
    start: 'Jul 2023',
    current: true,
    location: 'Remote',
    summary:
      'Delivering full-stack features for the Automated Update Distribution Tool (AUDT), a system enabling sophisticated update administration for warfighter systems, while applying security best practices under an active TS/SCI clearance.',
    highlights: [
      'Delivered and maintained multiple critical features for AUDT, enabling sophisticated update administration for warfighter systems.',
      'Led technical analysis and full-stack development of major, complex AUDT features, ensuring seamless integration and optimal performance across the platform.',
      'Proactively mitigated cyber risks and ensured system compliance by leveraging CompTIA Security+ expertise and continuous security training, enhancing mission effectiveness.'
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MariaDB', 'RabbitMQ', 'Docker']
  },
  {
    company: 'UKG',
    title: 'Software Engineer',
    start: 'Sep 2021',
    end: 'Jul 2023',
    location: 'Atlanta, GA',
    summary:
      'Developed and maintained core features for the UKG Launch platform, the tool that accelerates onboarding for new UKG customers, while leading technical analysis on high-priority customer-facing initiatives.',
    highlights: [
      'Developed and maintained core features for the UKG Launch platform, significantly accelerating the seamless deployment process for new UKG customers.',
      'Led technical analysis and implemented development solutions for high-priority customer features.',
      'Leveraged continuous integration and continuous delivery (CI/CD) to efficiently provide value to customers.'
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MongoDB', 'REST', 'CI/CD']
  }
];
