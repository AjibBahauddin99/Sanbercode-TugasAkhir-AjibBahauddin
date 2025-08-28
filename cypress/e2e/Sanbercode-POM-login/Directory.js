describe("Testing Website OrangeHRM - Directory Menu - POM and Intercept",  () => {
   it("MDI_001 - Successfully search employee by name  ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('dashboard')
    cy.get('.oxd-button').click()   
    cy.wait('@dashboard').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200)
        expect(intercept.response.body).to.exist
    })
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')      
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Peter')
    cy.contains('.oxd-autocomplete-option', 'Peter Mac Anderson').click()
    cy.get('.oxd-button--secondary').click()

      }) 

    it("MDI_002 - Successfully search employee by Job title  ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations').as('locations')
    cy.get('.oxd-button').click()   
    cy.wait('@locations').its("response.statusCode").should("eq", 200)
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.get('.oxd-form-row .oxd-select-text').eq(0).click()
    cy.contains('.oxd-select-option', 'HR Manager').click()
    cy.get('.oxd-button--secondary').click()
    })

    it("MDI_003 - Successfully search employee by Location  ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations').as('locations')
    cy.get('.oxd-button').click()   
    cy.wait('@locations').its("response.statusCode").should("eq", 200)
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-input-group .oxd-select-text').click()
    cy.contains('.oxd-select-option', 'Texas R&D').click()
    cy.get('.oxd-button--secondary').click()
    })
    })
