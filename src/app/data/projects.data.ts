import type { Project } from '../core/models/project.model';

/**
 * Portfolio project data.
 *
 * Flagship projects (RRG, RTC) receive full case-study detail.
 * Smaller projects use a lighter subset of fields.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'portfolio',
    name: 'This Portfolio',
    tagline: 'A production-grade Angular showcase, built to be judged by engineers',
    summary:
      'This site itself — a from-scratch Angular 20 rewrite of my portfolio, built as a real software product rather than a template. Standalone components and a feature-oriented structure, backed by unit, accessibility, and end-to-end test suites.',
    flagship: true,
    demoUrl: 'https://matthbish.github.io/portfolio/',
    githubUrl: 'https://github.com/matthbish/portfolio',
    heroImage: '/assets/logo/logo.jpg',
    images: ['/assets/logo/logo.jpg'],
    techStack: [
      'Angular 20',
      'TypeScript',
      'RxJS',
      'SCSS',
      'Playwright',
      'Jasmine/Karma',
      'ESLint',
      'GitHub Pages'
    ],
    highlights: [
      'Standalone components and signals throughout — no NgModules, no legacy change detection patterns',
      'Command palette and keyboard-shortcut navigation for power users',
      'Unit tests (Jasmine/Karma), Playwright end-to-end tests, and automated accessibility audits',
      'Dark-mode-first design system with a minimal, content-first layout tuned for recruiters skimming in minutes'
    ],
    problem:
      'A portfolio meant to represent a senior software engineer needs to demonstrate engineering judgment, not just list projects. The previous version of this site was a dated template; it needed to become an artifact that could stand on its own as evidence of the work.',
    requirements: [
      'Rebuild on the latest stable Angular using standalone components',
      'Communicate who I am and what I value within minutes of landing on the site',
      'Give flagship projects full case-study treatment; keep smaller projects lightweight',
      'Cover the app with unit, accessibility, and end-to-end tests',
      'Ship on GitHub Pages with room to add a custom domain later'
    ],
    architecture:
      'Angular 20 single-page application organized by feature with shared UI primitives and core services for cross-cutting concerns like SEO, contact handling, and keyboard shortcuts. State is modeled with signals rather than manual subscriptions, and data (projects, experience, skills, credentials, education) lives in typed, plain-TypeScript modules that feed strongly-typed models.',
    decisions: [
      {
        title: 'Signals over RxJS for component state',
        detail:
          'Used Angular signals for local and derived component state to keep data flow simple and avoid manual subscription management, reaching for RxJS only where it genuinely fits (e.g. async streams).'
      },
      {
        title: 'Content as typed data modules',
        detail:
          'Projects, experience, skills, and credentials are authored as typed TypeScript data files rather than hard-coded into templates, keeping content changes low-risk and enabling reuse across pages (e.g. project cards vs. full case studies).'
      },
      {
        title: 'Test coverage as a design constraint',
        detail:
          'Unit tests, accessibility audits, and Playwright end-to-end tests were treated as part of the feature, not an afterthought, so the repository itself demonstrates the engineering practices the site talks about.'
      }
    ],
    challenges: [
      'Rewriting the entire application while keeping it deployable and testable at every milestone',
      'Balancing "tasteful engineering easter eggs" (command palette, keyboard shortcuts) against a clean, non-gimmicky recruiter experience',
      'Hitting accessibility and performance targets without sacrificing the design'
    ],
    lessons: [
      'A portfolio is itself a code sample — every architectural shortcut is visible to the people evaluating it'
    ],
    futureWork: [
      'Add a blog for technical articles and development logs',
      'Introduce CI/CD with GitHub Actions, Dependabot, and automated visual regression testing',
      'Add architecture decision records to the repository'
    ],
    year: '2025–present',
    status: 'active'
  },
  {
    slug: 'running-route-generator',
    name: 'Running Route Generator',
    tagline: 'Generate custom running routes from any location',
    summary:
      'An Android application that generates running, walking, and cycling routes from user-defined parameters — distance, elevation, direction, and location — with custom route drawing, run planning, and live GPS tracking.',
    flagship: true,
    githubUrl: 'https://github.com/matthbish/running-route-generator',
    heroImage: '/assets/rrg/graphic.jpg',
    images: [
      '/assets/rrg/generate-page.png',
      '/assets/rrg/map-page.png',
      '/assets/rrg/route-page.png',
      '/assets/rrg/saved-routes.png',
      '/assets/rrg/plan-page.png',
      '/assets/rrg/icon.png'
    ],
    techStack: ['Java', 'Kotlin', 'Android', 'Google Maps', 'Google Ads'],
    highlights: [
      'Algorithmically generates routes from distance, elevation, direction, and location inputs',
      'Custom route drawing with live distance and elevation measurement',
      'Run planner with saved-route filtering and sorting',
      'Live GPS tracking along saved routes',
      'Released on Google Play, later removed.'
    ],
    problem:
      'Runners often struggle to discover new routes that match their specific training needs — a particular distance, elevation profile, or starting location. Existing tools were either limited to pre-defined routes or lacked the flexibility to generate truly custom routes.',
    requirements: [
      'Generate routes from user-defined parameters (distance, elevation, direction, location)',
      'Support loops, segments, and out-and-back route types',
      'Allow custom route drawing with markers',
      'Measure distance, elevation gain, and elevation loss for all routes',
      'Provide a run planner with saved-route management',
      'Include live GPS tracking during runs'
    ],
    architecture:
      'Native Android application built with Java and Kotlin. The app integrates the Google Maps SDK for map rendering, route visualization, and geocoding. Route generation uses a custom algorithm that explores road networks within a search radius to construct routes matching user parameters. Firebase was used for backend services.',
    decisions: [
      {
        title: 'Native Android over cross-platform',
        detail:
          'Chose native Android (Java/Kotlin) for full access to the Google Maps SDK and offline-capable route generation, prioritizing performance and platform integration.'
      },
      {
        title: 'Custom route-generation algorithm',
        detail:
          'Built a custom algorithm rather than relying on third-party routing APIs to support the unique combination of distance, elevation, and direction constraints.'
      }
    ],
    challenges: [
      'Google API usage limits and policy changes ultimately required removal from Google Play',
      'Balancing route-generation speed with route quality across diverse road networks',
      'Handling elevation data efficiently for accurate gain/loss measurements'
    ],
    lessons: [
      'API cost and policy constraints must be considered early in the architecture',
      'A well-designed algorithm can differentiate a product in a crowded space'
    ],
    futureWork: [
      'Rebuild as a web application (v2) to eliminate Google API policy issues',
      'Add social features for sharing routes with the community'
    ],
    year: '2020',
    status: 'archived'
  },
  {
    slug: 'runners-training-center',
    name: "Runner's Training Center",
    tagline: 'Comprehensive training plans and pace analytics for runners',
    summary:
      'An Android application with 30+ built-in training plans, custom plan creation, pace calculations, coaching tips, cross-training information, and personalized statistics.',
    flagship: true,
    githubUrl: 'https://github.com/matthbish/runners-training-center',
    heroImage: '/assets/rtc/banner.jpg',
    images: [
      '/assets/rtc/my-training.png',
      '/assets/rtc/rating.png',
      '/assets/rtc/pace.png',
      '/assets/rtc/plans.png',
      '/assets/rtc/plan.png',
      '/assets/rtc/custom.png',
      '/assets/rtc/cross-training.png',
      '/assets/rtc/coaching.png',
      '/assets/rtc/icon.png'
    ],
    techStack: ['Java', 'Kotlin', 'Android', 'Google Firebase', 'Google Ads'],
    highlights: [
      '30+ built-in training plans covering a range of distances and goals',
      'Custom training plan creation',
      'Pace calculations and personalized statistics',
      'Coaching tips and cross-training guidance',
      'Released on Google Play, later removed.'
    ],
    problem:
      'Runners need structured training plans and analytics to improve consistently, but most training apps are either overly complex, expensive, or lack the flexibility to adapt to individual goals.',
    requirements: [
      'Provide a library of built-in training plans',
      'Support custom plan creation',
      'Track training progress with personalized statistics',
      'Include pace calculations and coaching tips',
      'Offer cross-training information'
    ],
    architecture:
      'Native Android application built with Java and Kotlin. Firebase provided authentication, data storage, and synchronization. The app featured a plan engine that could generate and adapt training schedules based on user goals and performance.',
    decisions: [
      {
        title: 'Firebase for backend services',
        detail:
          'Used Firebase for authentication, real-time data sync, and cloud storage, enabling a serverless architecture that minimized operational overhead.'
      }
    ],
    challenges: [
      'Designing a flexible plan engine that could handle both built-in and custom plans'
    ],
    lessons: [
      'Serverless architectures (Firebase) dramatically reduce operational complexity for solo developers',
      'A rich feature set must be balanced with onboarding simplicity'
    ],
    futureWork: [
      'Port to a web or cross-platform framework',
      'Add social training groups and challenges'
    ],
    year: '2021',
    status: 'archived'
  },
  {
    slug: 'running-route-generator-v2',
    name: 'Running Route Generator v2',
    tagline: 'Web-based rewrite of the route generator',
    summary:
      'An unfinished and archived Angular rewrite of the Running Route Generator, focused on simplifying the user experience and resolving the Google API usage issues that led to the decommissioning of v1.',
    flagship: false,
    heroImage: '/assets/rrg-v2/map.png',
    images: [
      '/assets/rrg-v2/map.png',
      '/assets/rrg-v2/route.png',
      '/assets/rrg-v2/save.png',
      '/assets/rrg-v2/list.png'
    ],
    techStack: [
      'Angular',
      'TypeScript',
      'HTML',
      'SCSS',
      'Google Maps',
      'Google Firebase',
      'Google Ads'
    ],
    highlights: [
      'Angular web application with a simplified user experience',
      'Route generation from distance, elevation, direction, and location',
      'Custom route drawing with live measurements'
    ],
    problem:
      'The original Running Route Generator was removed from Google Play due to Google API usage issues. A web-based rewrite eliminates the Play Store dependency, improves algorithms to minimize API usage, and simplifies the user experience.',
    requirements: [
      'Recreate core route-generation features in a web application',
      'Simplify the user experience',
      'Resolve Google API usage issues from v1'
    ],
    architecture:
      'Angular single-page application using the Google Maps JavaScript API for map rendering and route visualization. Firebase provides hosting and backend services.',
    decisions: [
      {
        title: 'Angular over native Android',
        detail:
          'Chose Angular for cross-platform reach, easier distribution, and to eliminate the Google Play policy constraints that affected v1.'
      }
    ],
    challenges: [
      'Time management — development halted due to constrains on free time for personal development'
    ],
    lessons: [
      'Web platforms offer greater distribution flexibility than native app stores',
      'Large personal projects are difficult to balance using only time available outside of professional work'
    ],
    year: '2022',
    status: 'archived'
  },
  {
    slug: 'convert2grams',
    name: 'Convert2Grams',
    tagline: 'Convert cooking measurements to grams',
    summary:
      'A simple React web application for converting cooking and baking ingredients from traditional measurements (cups, tablespoons) to grams. Hosted on Google Firebase.',
    flagship: false,
    demoUrl: 'https://convert2grams.web.app/',
    heroImage: '/assets/c2g/convert.png',
    images: ['/assets/c2g/convert.png'],
    techStack: ['Ionic', 'React', 'TypeScript', 'HTML', 'CSS', 'Google Firebase Hosting'],
    highlights: [
      'Converts cooking/baking measurements to grams',
      'Hosted on Google Firebase',
      'Built with React and TypeScript'
    ],
    problem:
      'Baking and cooking often require precise gram measurements, but many recipes use volume-based units. Convert2Grams provides a quick, simple conversion tool.',
    requirements: [
      'Convert common cooking measurements to grams',
      'Simple, focused user interface',
      'Free and accessible via the web'
    ],
    architecture:
      'React single-page application built with Ionic components, hosted on Google Firebase Hosting.',
    decisions: [
      {
        title: 'React + Ionic for rapid development',
        detail:
          'Chose React with Ionic to learn new technology and for fast iteration on a small, focused tool.'
      }
    ],
    lessons: ['Small, focused tools can be valuable portfolio pieces when polished'],
    futureWork: ['Recipe copy-paste parsing to convert all measurements at once'],
    year: '2022',
    status: 'active'
  },
  {
    slug: 'simple-focus',
    name: 'Simple Focus',
    tagline: 'Minimal focus-time tracker',
    summary:
      'The simplest possible Android application to track focus time on a daily and overall basis. Built with Kotlin.',
    flagship: false,
    heroImage: '/assets/simple-focus/banner.png',
    images: [
      '/assets/simple-focus/timer.png',
      '/assets/simple-focus/dialog.png',
      '/assets/simple-focus/banner.png'
    ],
    techStack: ['Kotlin', 'Android'],
    highlights: [
      'Track focus time daily and overall',
      'Minimal, distraction-free interface',
      'Built with Kotlin'
    ],
    problem:
      'Many focus-tracking apps are cluttered with features. Simple Focus provides the most minimal possible way to track focus time.',
    requirements: ['Track focus time', 'Minimal interface', 'Daily and overall statistics'],
    architecture: 'Native Android application built with Kotlin.',
    decisions: [
      {
        title: 'Kotlin for modern Android development',
        detail:
          'Used Kotlin to learn a new language and for concise, safe, and modern Android development.'
      }
    ],
    challenges: ['Google policy changes required removal from Google Play'],
    lessons: ['Simplicity is a feature — a focused product is easier to maintain and use'],
    futureWork: ['Potential cross-platform rewrite'],
    year: '2021',
    status: 'archived'
  },
  {
    slug: 'nutrition-label-reader',
    name: 'Nutrition Label Reader',
    tagline: 'Extract nutrition data from photos using image processing',
    summary:
      'A Matlab application developed for an Image Processing course that converts photos of nutrition labels to plain text using greyscale, flat field correction, contrast adjustments, top-hat filtering, binarization, and OCR. Also reads barcodes and fetches nutrition details via an API.',
    flagship: false,
    heroImage: '/assets/nutrition-label/ui.png',
    images: [
      '/assets/nutrition-label/ui.png',
      '/assets/nutrition-label/label-extract-1.png',
      '/assets/nutrition-label/label-extract-2.png',
      '/assets/nutrition-label/label-extract-3.png',
      '/assets/nutrition-label/extracted-text.png',
      '/assets/nutrition-label/user-flow.png'
    ],
    techStack: ['Matlab', 'Image Processing', 'OCR'],
    highlights: [
      'Converts photos of nutrition labels to plain text',
      'Image processing pipeline: greyscale, flat field correction, contrast, top-hat filtering, binarization, OCR',
      'Barcode reading with API-based nutrition lookup'
    ],
    problem:
      'Reading nutrition labels manually is tedious. This project automates extraction of nutrition data from photos using image processing techniques.',
    requirements: [
      'Extract text from nutrition label photos',
      'Handle varied lighting and image quality',
      'Read barcodes and fetch nutrition details via API'
    ],
    architecture:
      'Matlab application with a multi-stage image processing pipeline culminating in optical character recognition. A barcode reader integrates with an external API for nutrition data.',
    decisions: [
      {
        title: 'Matlab for image processing',
        detail:
          'Chose Matlab for its rich image processing toolbox, ideal for a course project requiring advanced techniques.'
      }
    ],
    challenges: [
      'Handling varied lighting conditions and image quality',
      'Accurate OCR on dense nutrition label layouts'
    ],
    lessons: [
      'A well-structured image processing pipeline can handle significant real-world variability'
    ],
    futureWork: ['Port to a modern web or mobile platform'],
    year: '2019',
    status: 'archived'
  }
];
