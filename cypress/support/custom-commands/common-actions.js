let loginDet
let data
let other

before(() => {
    cy.fixture('creds').then(cred => {
        loginDet = cred
    })
    cy.fixture('selectors').then(sel => {
        data = sel
        other = data.otherDetailsPage
    })
})

Cypress.Commands.add('clickSpecifiedElement', (text) => {
    cy.contains(text).should('exist').and('be.visible').click()
})

Cypress.Commands.add('typeAText', (field, text) => {
    cy.get(field).should('be.visible').and('exist').fill(text)
})

Cypress.Commands.add('Login', () => {
    cy.clickSpecifiedElement('Log in')
    cy.typeAText(other.emailField, loginDet.email)
    cy.typeAText(other.passwordField, loginDet.password)
    cy.clickSpecifiedElement('Login')
    cy.clickSpecifiedElement('Welcome back')
    cy.clickSpecifiedElement('Select a Plan')
})
