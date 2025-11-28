# SauceDemo UI Automation – Cypress
This repository contains automated UI tests for the SauceDemo login functionality, created as part of a QA Analyst technical assessment.

## Project Overview
The goal of this automation task is to validate the login flow of https://www.saucedemo.com/ using Cypress, covering:
- Successful login with valid credentials
- Failed login with locked_out_user
- UI assertions
- Selector strategies and good automation practices

## Tests Included
### Successful Login (standard_user)
- Logs in with valid credentials
- Verifies redirection to the Products page
- Confirms the title “Products” is visible

### Failed Login (locked_out_user)
- Attempts login
- Verifies the correct error message is displayed
- Ensures the user remains on the login page

## Project Structure
```
cypress/
 ├─ e2e/
 │   └─ login.cy.js
 ├─ fixtures/
 └─ support/
cypress.config.js
package.json
package-lock.json
.gitignore
README.md
```

## How to Install & Run the Tests
1. Clonar repositorio
git clone https://github.com/Roadgar/saucedemo-ui-automation
cd saucedemo-ui-automation
2. Install dependencies:
npm install
3. Open Cypress:
npx cypress open
4. Select:
**E2E Testing → choose a browser → run login.cy.js**

## Tech Stack
- Cypress 13+
- JavaScript
- Node.js
- Chrome / Edge

## Author
Automated UI tests by **Rossy Garcia Orocua** for a QA Analyst Technical Assessment.

