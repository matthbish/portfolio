import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { PROJECTS } from '../../data/projects.data';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    service = TestBed.inject(ProjectService);
  });

  it('sorts all projects with flagship projects first', () => {
    const projects = service.projects();
    const firstNonFlagshipIndex = projects.findIndex((p) => !p.flagship);
    const lastFlagshipIndex = projects.map((p) => p.flagship).lastIndexOf(true);
    expect(firstNonFlagshipIndex).toBeGreaterThan(lastFlagshipIndex);
    expect(projects.length).toBe(PROJECTS.length);
  });

  it('flagshipProjects only returns projects flagged as flagship', () => {
    const flagship = service.flagshipProjects();
    expect(flagship.length).toBeGreaterThan(0);
    expect(flagship.every((p) => p.flagship)).toBe(true);
  });

  it('bySlug finds an existing project and returns undefined for an unknown slug', () => {
    const known = PROJECTS[0];
    expect(service.bySlug(known.slug)?.name).toBe(known.name);
    expect(service.bySlug('does-not-exist')).toBeUndefined();
  });
});
