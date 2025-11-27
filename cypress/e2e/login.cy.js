describe('SauceDemo - Login Tests', () => {

  const URL = 'https://www.saucedemo.com/'

  beforeEach(() => {
    cy.visit(URL)
  })

  it('Successful login with valid credentials (standard_user)', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('Login fails with locked_out_user', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })
})
