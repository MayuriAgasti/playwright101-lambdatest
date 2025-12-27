import { test, expect } from '@playwright/test';

test.describe('LambdaTest Selenium Playground Scenarios', () => {
  test('Scenario 1 - Simple Form Demo - validate message input/output', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.click('text=Simple Form Demo');
    await expect(page).toHaveURL(/.*simple-form-demo/);
    const message = "Welcome to LambdaTest";
    await page.fill('#user-message', message);
    await page.waitForTimeout(5000);
    await page.click('#showInput');
    await page.waitForTimeout(5000);
    const output = await page.textContent('#message');
    expect(output).toBe(message);
  });

  test('Scenario 2 - Drag & Drop Sliders - set value to 95', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.click('text=Drag & Drop Sliders');
    const slider = page.locator('input[type="range"][value="15"]');
    await slider.focus();
    for (let i = 0; i < 200; i++) {
        const val = await page.textContent('#rangeSuccess');
        if (val?.trim() === '95') break;
        await page.keyboard.press('ArrowRight');
    }
    await expect(page.locator('#rangeSuccess')).toHaveText('95');
  });
 test('Scenario 3-validate error and success messages', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.click('text=Input Form Submit');
    await page.waitForTimeout(5000);
    await page.fill('#name', 'John Doe');
    await page.fill('#inputEmail4', 'john.doe@example.com');
    await page.fill('#inputPassword4', 'Password123');
    await page.fill('#company', 'LambdaTest');
    await page.fill('#websitename', 'https://www.example.com');
    await page.selectOption('select[name="country"]', { label: 'United States' });
    await page.fill('#inputCity', 'New York');
    await page.fill('#inputAddress1', '123 Main Street');
    await page.fill('#inputAddress2', 'Suite 100');
    await page.fill('#inputState', 'NY');
    await page.fill('#inputZip', '10001');
    await page.locator('//*[@id="seleniumform"]/div[6]/button').click();
    const successMessage = await page.textContent('.success-msg');
    expect(successMessage).toContain("Thanks for contacting us, we will get back to you shortly.");
  });
});