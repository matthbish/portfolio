import { InjectionToken } from '@angular/core';

/**
 * Injectable handle to the global `window`, so code that triggers browser
 * navigation (e.g. `open`) can be swapped for a fake in tests instead of
 * causing a real page navigation.
 */
export const WINDOW = new InjectionToken<Window>('WINDOW', {
  providedIn: 'root',
  factory: () => window
});
