import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('listitem').filter({ hasText: 'Guru shah' }).locator('i')).toBeVisible();
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Upgrade');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
});


// npx playwright codegen --help
// npx playwright codegen -o (or --output) <filename> (e.g. tests/codegen.spec.js)
