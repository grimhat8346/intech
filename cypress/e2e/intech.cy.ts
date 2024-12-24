import { AUTH_DATA } from '../support/auth'

describe('Authentication Tests', () => {
	beforeEach(() => {
		cy.visit('https://semabet.ug')
	})

	describe('Login Tests', () => {
		it('should login successfully with valid credentials', () => {
			cy.contains('Login').click()
			cy.get(AUTH_DATA.selectors.login.mobileInput).type(
				AUTH_DATA.credentials.valid.mobile
			)
			cy.get(AUTH_DATA.selectors.login.passwordInput).type(
				AUTH_DATA.credentials.valid.password
			)
			cy.findAllByRole('button', {
				name: AUTH_DATA.selectors.login.loginButton,
			}).click({ force: true })
			cy.contains(AUTH_DATA.selectors.profile.userProfile).should('be.visible')
		})

		it('should show error with wrong password', () => {
			cy.contains('Login').click()
			cy.get(AUTH_DATA.selectors.login.mobileInput).type(
				AUTH_DATA.credentials.valid.mobile
			)
			cy.get(AUTH_DATA.selectors.login.passwordInput).type(
				AUTH_DATA.credentials.invalid.password
			)
			cy.findAllByRole('button', {
				name: AUTH_DATA.selectors.login.loginButton,
			}).click({ force: true })
			cy.contains(AUTH_DATA.selectors.common.errorMessage)
				.should('be.visible')
				.and('contain', AUTH_DATA.messages.errors.invalidCredentials)
		})
	})

	describe('Forgot Password Tests', () => {
		beforeEach(() => {
			cy.contains('Login').click()
			cy.contains(AUTH_DATA.selectors.login.forgotPasswordLink).click()
		})

		it('should send SMS code successfully', () => {
			cy.get(AUTH_DATA.selectors.passwordReset.mobileInput).type(
				AUTH_DATA.credentials.valid.mobile
			)
			cy.findByRole('button', {
				name: AUTH_DATA.selectors.passwordReset.sendCodeButton,
			}).click()

			cy.contains(AUTH_DATA.selectors.common.successMessage)
				.should('be.visible')
				.and('contain', AUTH_DATA.messages.success.smsCodeSent)
		})

		it('should show error for invalid SMS code', () => {
			cy.get(AUTH_DATA.selectors.passwordReset.mobileInput).type(
				AUTH_DATA.credentials.valid.mobile
			)
			cy.findByRole('button', {
				name: AUTH_DATA.selectors.passwordReset.sendCodeButton,
			}).click()

			cy.get(AUTH_DATA.selectors.passwordReset.codeInput).type(
				AUTH_DATA.passwordReset.invalidCode
			)
			cy.wait(1000)
			cy.contains(AUTH_DATA.selectors.common.invalidCodeMessage)
				.should('be.visible')
				.and('contain', AUTH_DATA.messages.errors.invalidCode)
		})
	})

	describe('Profile Password Reset Test', () => {
		it('should reset password from profile', () => {
			cy.login(
				AUTH_DATA.credentials.valid.mobile,
				AUTH_DATA.credentials.valid.password
			)

			cy.get(AUTH_DATA.selectors.profile.userMenu).eq(0).click()
			cy.contains(AUTH_DATA.selectors.profile.userDetails).click()
			cy.contains(AUTH_DATA.selectors.profile.userAccountSettings).click()
			cy.findByPlaceholderText(
				AUTH_DATA.selectors.profile.userOldPassword
			).type(AUTH_DATA.credentials.valid.password)
			cy.findByPlaceholderText(AUTH_DATA.selectors.profile.newPassword).type(
				AUTH_DATA.passwordReset.newPassword
			)
			cy.findAllByRole('button', {
				name: AUTH_DATA.selectors.profile.changePasswordButton,
			}).click()

			cy.contains(AUTH_DATA.selectors.common.passwordUpdatedMessage)
				.should('be.visible')
				.and('contain', AUTH_DATA.messages.success.passwordUpdated)

			// Change back to original password
			cy.visit('/')
			cy.get(AUTH_DATA.selectors.profile.userMenu).eq(0).click()
			cy.contains(AUTH_DATA.selectors.profile.userDetails).click()
			cy.contains(AUTH_DATA.selectors.profile.userAccountSettings).click()
			cy.findByPlaceholderText(
				AUTH_DATA.selectors.profile.userOldPassword
			).type(AUTH_DATA.passwordReset.newPassword)
			cy.findByPlaceholderText(AUTH_DATA.selectors.profile.newPassword).type(
				AUTH_DATA.credentials.valid.password
			)
			cy.findAllByRole('button', {
				name: AUTH_DATA.selectors.profile.changePasswordButton,
			}).click()
			cy.contains(AUTH_DATA.selectors.common.passwordUpdatedMessage)
				.should('be.visible')
				.and('contain', AUTH_DATA.messages.success.passwordUpdated)
		})
	})

	describe('Logout Test', () => {
		it('should logout successfully', () => {
			cy.login(
				AUTH_DATA.credentials.valid.mobile,
				AUTH_DATA.credentials.valid.password
			)
			cy.get(AUTH_DATA.selectors.profile.userMenu).eq(0).click()
			cy.contains(AUTH_DATA.selectors.profile.logoutButton).click()

			cy.contains(AUTH_DATA.selectors.login.loginButton).should('be.visible')
		})
	})

	describe('Registration Tests', () => {
		beforeEach(() => {
			cy.findByRole('button', {
				name: AUTH_DATA.selectors.registration.button,
			}).click()
		})

		it('should show error for existing mobile number', () => {
			cy.get(AUTH_DATA.selectors.registration.mobileInput).type(
				AUTH_DATA.credentials.valid.mobile
			)
			cy.get(AUTH_DATA.selectors.registration.passwordInput).type(
				AUTH_DATA.credentials.valid.password
			)
			cy.findByRole('button', {
				name: AUTH_DATA.selectors.registration.registerButton,
			}).click({ force: true })

			cy.wait(1000)

			cy.contains(AUTH_DATA.selectors.common.registrationErrorMessage)
				.should('be.visible')
				.and('contain', AUTH_DATA.messages.errors.mobileExists)
		})

		it('should register successfully with new mobile number', () => {
			cy.get(AUTH_DATA.selectors.registration.mobileInput).type(
				AUTH_DATA.newRegistration.mobile
			)
			cy.get(AUTH_DATA.selectors.registration.passwordInput).type(
				AUTH_DATA.newRegistration.password
			)
			cy.findByRole('button', {
				name: AUTH_DATA.selectors.registration.registerButton,
			}).click({ force: true })

			cy.wait(1000)
			cy.contains(AUTH_DATA.newRegistration.message).should('be.visible')
		})
	})
})
