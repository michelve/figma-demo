import { test, expect } from '@playwright/test';
import { downloadFigmaScreenshot } from './helpers/figma-helper.js';

/**
 * Visual comparison test between Figma design and implemented code
 * Figma Design: https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=109-1005
 */
test.describe('Figma Design vs Code Comparison', () => {
  
  test.beforeAll(async () => {
    // Download the Figma screenshot before running tests
    await downloadFigmaScreenshot();
  });

  test('Contact form should match Figma design', async ({ page }) => {
    // Navigate to the page
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot of the rendered component
    const contactForm = page.locator('form').first();
    await expect(contactForm).toBeVisible();
    
    // Take screenshot of the implemented form
    const screenshot = await contactForm.screenshot();
    
    // Compare with baseline (Figma design)
    // On first run, this will create a baseline
    // On subsequent runs, it will compare against it
    await expect(screenshot).toMatchSnapshot('contact-form.png', {
      maxDiffPixels: 100, // Allow small differences
      threshold: 0.2,     // 20% threshold for pixel differences
    });
  });

  test('Contact form layout structure', async ({ page }) => {
    await page.goto('/');
    
    // Verify all form elements are present
    await expect(page.getByLabel('Name')).toBeVisible();
    await expect(page.getByPlaceholder('Full Name')).toBeVisible();
    await expect(page.getByText('Enter your email address')).toBeVisible();
    
    await expect(page.getByLabel('Address')).toBeVisible();
    await expect(page.getByPlaceholder('Full Address')).toBeVisible();
    await expect(page.getByText('USA address only')).toBeVisible();
    
    await expect(page.getByLabel('Tel')).toBeVisible();
    await expect(page.getByPlaceholder('Phone Number')).toBeVisible();
    await expect(page.getByText('Format: 561-658-9865')).toBeVisible();
    
    await expect(page.getByLabel('Your message')).toBeVisible();
    await expect(page.getByPlaceholder('Type your message here')).toBeVisible();
    await expect(page.getByText('Your message will be copied to the support team')).toBeVisible();
    
    await expect(page.getByRole('button', { name: 'Send Form' })).toBeVisible();
  });

  test('Contact form spacing and layout', async ({ page }) => {
    await page.goto('/');
    
    const form = page.locator('form').first();
    const boundingBox = await form.boundingBox();
    
    // Check that form has reasonable dimensions
    expect(boundingBox.width).toBeGreaterThan(400);
    expect(boundingBox.height).toBeGreaterThan(400);
    
    // Check form background color (slate-200)
    const formContainer = page.locator('form > div').first();
    const bgColor = await formContainer.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // slate-200 is rgb(226, 232, 240)
    expect(bgColor).toBe('rgb(226, 232, 240)');
  });

  test('Full page visual comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      maxDiffPixels: 200,
      threshold: 0.2,
    });
  });
});

