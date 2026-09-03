import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Automated accessibility scans against all public routes.
 * Scopes to the main landmark to avoid noise from browser chrome.
 */
const ROUTES = [
  '/',
  '/resume',
  '/experience',
  '/skills',
  '/projects',
  '/ai-experience',
  '/contact'
];

test.describe('accessibility (axe)', () => {
  for (const route of ROUTES) {
    test(`has no WCAG AA violations on ${route === '/' ? 'home' : route.slice(1)}`, async ({ page }) => {
      await page.goto(route);
      await page.locator('#main-content').waitFor();

      // Wait for the route's interactive content to be fully rendered so
      // projected button/card text has attached before scanning (avoids
      // false 'link-name' / contrast findings on empty mid-render markup).
      await expect(page.locator('#main-content h1')).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
