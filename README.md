# Cypress Test Suite for semabet.ug

This project contains a Cypress-based end-to-end (E2E) test suite for the website [semabet.ug](https://semabet.ug). The tests are written in TypeScript and cover common user interactions such as login, registration, password reset, and more. Selectors are maintained in a separate file for better maintainability and reusability.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/) (v12 or higher)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repo/intech.git
   ```

2. Navigate to the project directory:

   ```bash
   cd intech
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Update the credentials in the test file (`cypress/e2e/intech.cy.ts`) with the appropriate values:

```typescript
const credentials = {
	mobile: '+256777785468',
	password: 'Hello1234',
}
```

Ensure the base URL for the site is correctly set in `cypress.config.ts`:

```typescript
module.exports = {
	e2e: {
		baseUrl: 'https://semabet.ug',
	},
}
```

## Running Tests

### Open Cypress Test Runner

To open the Cypress Test Runner for an interactive test experience, run:

```bash
npx cypress open
```

### Run Tests in Headless Mode

To execute tests in headless mode, use:

```bash
npx cypress run
```

## Test Cases Covered

1. **Login**

   - Successful login
   - Login with wrong password

2. **Forgot Password**

   - Check if SMS is sent
   - Negative test case for incorrect code input

3. **Reset Password**

   - Reset password from the user profile

4. **Logout**

5. **Register**
   - Register with a new (non-existing) number
   - Attempt to register with an existing number

## Folder Structure

```
├── cypress
│   ├── e2e
│   │   └── intech.cy.ts  # Main test file
│   ├── support
│   │   └── auth.ts      # Selectors file
│   └── fixtures              # Placeholder for test data
├── node_modules              # Installed dependencies
├── README.md                 # Project documentation
├── cypress.config.ts         # Cypress configuration
└── package.json              # Project dependencies and scripts
```
