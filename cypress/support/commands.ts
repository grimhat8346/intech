// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'
import { AUTH_DATA } from './auth'

/// <reference types="cypress" />
declare global {
	namespace Cypress {
		interface Chainable {
			login(mobile: string, password: string): Chainable<void>
		}
	}
}

Cypress.Commands.add('login', (mobile: string, password: string) => {
	cy.visit('/')
	cy.contains('Login').click()
	cy.get(AUTH_DATA.selectors.login.mobileInput).type(mobile)
	cy.get(AUTH_DATA.selectors.login.passwordInput).type(password)
	cy.findByRole('button', {
		name: AUTH_DATA.selectors.login.loginButton,
	}).click({ force: true })
	cy.wait(2000)
})

export {}
