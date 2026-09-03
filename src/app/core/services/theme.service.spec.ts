import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  const STORAGE_KEY = 'mb-theme';

  afterEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    delete document.documentElement.dataset['theme'];
  });

  function create(): ThemeService {
    TestBed.resetTestingModule();
    return TestBed.inject(ThemeService);
  }

  it('falls back to the system preference when nothing is stored', () => {
    localStorage.removeItem(STORAGE_KEY);
    const service = create();
    expect(['dark', 'light']).toContain(service.theme());
  });

  it('prefers a previously stored theme over the system preference', () => {
    localStorage.setItem(STORAGE_KEY, 'light');
    const service = create();
    expect(service.theme()).toBe('light');
    expect(service.isDark()).toBe(false);
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem(STORAGE_KEY, 'not-a-theme');
    const service = create();
    expect(['dark', 'light']).toContain(service.theme());
  });

  it('toggle() flips between dark and light and persists the choice', () => {
    const service = create();
    service.set('dark');
    service.toggle();
    expect(service.theme()).toBe('light');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
    service.toggle();
    expect(service.theme()).toBe('dark');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
  });

  it('set() writes the theme to the document root for CSS to key off', () => {
    const service = create();
    service.set('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    service.set('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
});
