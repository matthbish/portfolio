import type { Education } from '../core/models/education.model';

export const EDUCATION: readonly Education[] = [
  {
    institution: 'Wentworth Institute of Technology',
    location: 'Boston, MA',
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Applied Mathematics',
    graduated: 'Apr 2022',
    gpa: '3.9 / 4.0',
    honors: ['Magna Cum Laude', "Dean's List"],
    activities: [
      'Wentworth Baseball — NCAA Division III, Commonwealth Coastal Conference',
      'Wentworth Accelerate (Innovation & Entrepreneurship Center)'
    ]
  }
];
