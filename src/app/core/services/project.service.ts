import { Injectable, computed, signal } from '@angular/core';
import type { Project } from '../models/project.model';
import { PROJECTS } from '../../data/projects.data';

/**
 * Provides read-only access to project data via signals.
 * Data is statically imported for performance and simplicity,
 * but the service centralizes access so it can be swapped for
 * an API/headless CMS later without touching components.
 */
@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly projectsSignal = signal<readonly Project[]>(PROJECTS);

  /** All projects, flagship first. */
  readonly projects = computed(() => {
    const all = this.projectsSignal();
    return [...all].sort((a, b) => Number(b.flagship) - Number(a.flagship));
  });

  /** Flagship projects only. */
  readonly flagshipProjects = computed(() => this.projectsSignal().filter((p) => p.flagship));

  /** Lookup a single project by slug. Returns undefined if not found. */
  bySlug(slug: string): Project | undefined {
    return this.projectsSignal().find((p) => p.slug === slug);
  }
}
