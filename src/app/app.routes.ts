import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'resume',
    loadComponent: () => import('./features/resume/resume.component').then((m) => m.ResumeComponent)
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience.component').then((m) => m.ExperienceComponent)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/projects/project-detail.component').then((m) => m.ProjectDetailComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills.component').then((m) => m.SkillsComponent)
  },
  {
    path: 'ai-experience',
    loadComponent: () =>
      import('./features/ai-experience/ai-experience.component').then(
        (m) => m.AiExperienceComponent
      )
  },
  // Blog is built but disabled for now — re-add this route to bring it back.
  // {
  //   path: 'blog',
  //   loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent)
  // },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
