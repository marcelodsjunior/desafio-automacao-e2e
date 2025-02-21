/// <reference types="cypress" />

// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '128076ed-9868-4e98-9cef-98dd8b705d75',
  e2e: {
    baseUrl: 'http://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois',
    chromeWebSecurity: false,
    defaultCommandTimeout: 45000,
    env: {
      urlNovosAnuncios: '/novos',
      grepFilterSpecs: true,
      grepOmitFiltered: true
    },
    setupNodeEvents (on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    }
  }
})
