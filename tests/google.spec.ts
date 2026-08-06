
import { test, expect } from "@playwright/test";

test("verify google home page ", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google"); 

  await page.getByRole('button', { name: 'Search by voice' }).click();

  await page.waitForTimeout(5000);
});
