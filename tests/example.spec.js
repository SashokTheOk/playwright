// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.describe("longer test", () => {
  test("Click API docs", async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator("div[class*='navbar'] a").filter ({ hasText: 'API' }).click();
    await expect(page.url()).toContain("/docs/api/class-playwright");
    // await page.pause(); // Це для зупинки тесту для ручного перегляду. Можна вставити в будь-якому місці тесту.
  });
})