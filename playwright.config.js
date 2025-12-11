// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout:60*1000,
  expect : {
    timeout: 6*1000,
  },
  reporter : 'html',
  
  
  use: {
    browserName : 'chromium',
    // channel : 'chrome',  // forcefully set which chromium browser should be used
    headless : false,
    screenshot: 'on',
    trace : 'on'

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    
  },

 
});
module.exports = config


