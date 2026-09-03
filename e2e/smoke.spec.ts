import { test, expect } from '@playwright/test';

/**
 * Cross-route smoke tests. Verifies that every public route
 * renders its primary content and the app shell (skip link,
 * navigation footer) is present.
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

test.describe('app shell', () => {
  test('always renders skip link and main landmark', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a.skip-link')).toBeVisible();
    await expect(page.locator('#main-content')).toBeVisible();
  });
});

test.describe('routes render', () => {
  for (const route of ROUTES) {
    test(`renders ${route === '/' ? 'home' : route.slice(1)}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('#main-content')).toBeVisible();
      // The document should have a meaningful title.
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
    });
  }
});

test.describe('home page', () => {
  test('shows name and CTA toward projects', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Matthew Bishop', { exact: false }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /projects/i }).first()).toBeVisible();
  });
});

test.describe('projects page', () => {
  test('lists flagship projects', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText('Running Route Generator').first()).toBeVisible();
  });
});

test.describe('404 page', () => {
  test('renders for unknown routes', async ({ page }) => {
    await page.goto('/this-route-does-not-exist');
    await expect(page.locator('#main-content')).toBeVisible();
  });
});

test.describe('project case study navigation', () => {
  test('clicking a project card navigates client-side and loads its images', async ({ page }) => {
    const failedRequests: string[] = [];
    page.on('response', (res) => {
      if (!res.ok() && res.url().includes('/assets/')) {
        failedRequests.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto('/projects');
    // A full page reload would tear down this marker; asserting it survives
    // confirms the link used client-side (Router) navigation, not a plain <a href>.
    await page.evaluate(() => { (window as { __smoke?: boolean }).__smoke = true; });

    await page
      .locator('article', { hasText: 'Running Route Generator' })
      .getByRole('link', { name: 'Read case study' })
      .click();
    await expect(page).toHaveURL(/\/projects\/running-route-generator$/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Running Route Generator');
    expect(await page.evaluate(() => (window as { __smoke?: boolean }).__smoke)).toBe(true);

    // Wait for the gallery images to finish requesting before asserting.
    await expect(page.locator('.gallery-thumb').first()).toBeVisible();
    expect(failedRequests).toEqual([]);
  });
});
