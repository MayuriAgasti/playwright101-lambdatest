import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const ltCaps = (browserName: string) =>
  encodeURIComponent(JSON.stringify({
    browserName,
    browserVersion: 'latest',
    'LT:Options': {
      platform: 'Windows 11',
      build: 'Playwright-Gitpod-Parallel',    // change per run to group sessions
      project: 'Playwright101',
      name: 'SeleniumPlayground Scenarios',   // test name appears in dashboard
      console: true,
      network: true,
      video: true,
      user: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
      tunnel: false
    }
  }));

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on',
    screenshot:'on',
    video:'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${ltCaps('Chrome')}`,
        },
      },

    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${ltCaps('Firefox')}`,
        },
      },
    },
    {
      name: 'webkit',
       use: {
        browserName: 'webkit',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${ltCaps('Safari')}`,
        },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
