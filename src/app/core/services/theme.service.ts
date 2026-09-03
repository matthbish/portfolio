import { Injectable, signal, computed } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'mb-theme';
const PREFERS_DARK = '(prefers-color-scheme: dark)';

/**
 * Manages dark/light theme state using Angular signals.
 * Persists preference to localStorage and applies it to the document root.
 * Prefers stored preference, falling back to the system color-scheme preference.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<Theme>(this.initialTheme());
  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    this.applyToDocument(this.themeSignal());
  }

  /** Toggle between dark and light. */
  toggle(): void {
    this.set(this.themeSignal() === 'dark' ? 'light' : 'dark');
  }

  /** Set an explicit theme. */
  set(theme: Theme): void {
    this.themeSignal.set(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage may be unavailable (e.g. private mode); persistence is best-effort.
    }
    this.applyToDocument(theme);
  }

  private applyToDocument(theme: Theme): void {
    document.documentElement.dataset['theme'] = theme;
  }

  private initialTheme(): Theme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch {
      // Ignore storage access errors and fall through to system preference.
    }
    return typeof window !== 'undefined' && window.matchMedia(PREFERS_DARK).matches
      ? 'dark'
      : 'light';
  }
}
