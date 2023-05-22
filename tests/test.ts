import { expect, test } from '@playwright/test';

test('index page has expected link to create form', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Create new event' })).toBeVisible();
});

test('edit form page has expected heading', async ({ page }) => {
  await page.goto('/edit-form');
  await expect(page.getByRole('heading', { name: 'Create new event' })).toBeVisible();
});
