import { test, expect } from "@playwright/test";

test("verify amazon home page ", async ({ page }) => {
  await page.goto("https://www.amazon.com");
  await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");

  await page.locator(".icp-nav-flag").click();
  
  await page.waitForTimeout(5000);
});