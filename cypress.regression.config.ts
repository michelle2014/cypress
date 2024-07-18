import { defineConfig } from 'cypress'
import { CypressConfigEnv } from 'cypress-visual-regression/dist/command'
import { cypressConfigWithEnv } from './cypress.common.config'

const config: CypressConfigEnv = {
  visualRegressionType: 'regression'
}

export default defineConfig(cypressConfigWithEnv(config))
