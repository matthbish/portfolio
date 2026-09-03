import { provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      // Fetch every lazy route's chunk in the background right after the app
      // boots, so g-shortcuts, the command palette, and nav links all
      // navigate instantly instead of waiting on a network round trip.
      withPreloading(PreloadAllModules)
    )
  ]
};
