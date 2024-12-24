export const AUTH_DATA = {
	credentials: {
		valid: {
			mobile: '+777785468',
			password: 'Hello1234',
		},
		invalid: {
			mobile: '+256777785400',
			password: 'WrongPass123',
		},
	},
	newRegistration: {
		mobile: '777785469',
		password: 'NewPass123',
		message: 'We have just sent you a verify code',
	},
	passwordReset: {
		newPassword: 'Hello12344',
		invalidCode: '000000',
	},
	messages: {
		errors: {
			invalidCredentials: 'Invalid login or password!',
			invalidCode: 'Incorrect code, please check it!',
			mobileExists: 'This phone number already exists!',
		},
		success: {
			smsCodeSent: 'The code expires shortly, so please enter it soon!',
			passwordUpdated: 'Password changed successfully!',
		},
	},
	selectors: {
		login: {
			mobileInput: '[name="phoneNumberField"]',
			passwordInput: '[name="passwordField"]',
			loginButton: 'Login',
			forgotPasswordLink: 'Forgot Password?',
		},
		registration: {
			button: 'Register',
			mobileInput: '#phoneNumberField',
			passwordInput: '#passwordField',
			registerButton: 'Next',
		},
		passwordReset: {
			mobileInput: '#phoneNumberField',
			sendCodeButton: 'Reset',
			codeInput: '#0',
		},
		profile: {
			userMenu: 'div.c-PJLV.c-jPMMwY',
			userDetails: 'Details',
			userAccountSettings: 'Account settings',
			userOldPassword: 'Input your current password',
			userProfile: 'Deposit',
			changePasswordButton: 'Change password',
			buttonClose: 'div.parent-class > button[aria-label="Close"]',
			newPassword: 'Create your new password',
			logoutButton: 'Logout',
		},
		common: {
			errorMessage: 'Invalid login or password!',
			registrationErrorMessage: 'This phone number already exists!',
			successMessage: 'The code expires shortly, so please enter it soon!',
			invalidCodeMessage: 'Incorrect code, please check it!',
			passwordUpdatedMessage: 'Password changed successfully!',
		},
	},
}
