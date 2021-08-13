describe('login',function()
{
    it('login test',function()
    {
        cy.visit('https://instavalprod.azureedge.net/')

        cy.get(':nth-child(5) > .header-login-txt').click()

        cy.get('#emailInputId').type('testinvest1452@gmail.com')

        cy.get('#mat-input-1').type('654321')

        cy.get('.login-to-your-acc > .mat-focus-indicator').click()
    })
})