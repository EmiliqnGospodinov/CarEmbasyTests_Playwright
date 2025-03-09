import { expect, test } from '@playwright/test';

test('test title of page', async ({ page }) => {
  await page.goto('/');

  // Check title page
  await expect(page).toHaveTitle("Car Embassy - Best Bulgarian Car Community Shop"); 

});
