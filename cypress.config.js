// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: 'intech',
	viewportWidth: 1280,
	viewportHeight: 720,
	e2e: {
		setupNodeEvents(on, config) {
			return config
		},
		baseUrl: 'https://semabet.ug',
		supportFile: 'cypress/support/e2e.ts',
		specPattern: 'cypress/e2e/**/*.cy.ts',
		defaultCommandTimeout: 10000,
		chromeWebSecurity: false,
		video: false,
		screenshotOnRunFailure: true,
		retries: {
			runMode: 2,
			openMode: 0,
		},
	},
})
