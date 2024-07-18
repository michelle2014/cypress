import { defineConfig } from 'cypress'
import { configureVisualRegression } from 'cypress-visual-regression'

export default defineConfig({
  e2e: {
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshots/base',
      visualRegressionDiffDirectory: 'cypress/snapshots/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureVisualRegression(on)
    },
  },
});
