

import {test, expect} from '@playwright/test';

test('should have the correct title', async ({page}) => {
  await page.goto('https://www.mygreatlearning.com/blog/aws-interview-questions/');
  const title = await page.title();
  expect(title).toBe('Ace Your AWS Interview: 33+ Questions to Master');
  await page.waitForLoadState('networkidle');
})

