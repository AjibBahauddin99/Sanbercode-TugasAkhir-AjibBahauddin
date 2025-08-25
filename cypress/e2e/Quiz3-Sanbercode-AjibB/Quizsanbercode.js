// Quiz 3 Sanbercode - Ajib Bahauddin

describe("Quiz 3 Sanbercode Testing Login Website Orange HRM by Ajib Bahauddin",  () => {
   it("LOG_001-Successfully login with valid username and valid password ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()   
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')      
    })     

    it("LOG_002-Login failed with valid credentials when username starts with lowercase letter ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()   
    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials')        
    })   
    
    it("LOG_003-Login failed when using valid username and wrong password ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin321')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials') 
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')  
    })

    it("LOG_004-Login failed when using invalid username and correct password ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Atmin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content-text').should('be.visible')
    .and('contain.text', 'Invalid credentials')
    })

    it("LOG_005-Login failed due to swapped username and password fields ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials')  
    })
    
    it("LOG_006-Login failed when valid username is entered with @gmail.com and valid password ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin@gmail.com')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.url().should('include', '/auth/login')
    })

    it("LOG_007-Login failed when password contains '@' instead of 'a' with valid username and password ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('@dmin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', '')
    cy.get('body').should('not.contain.text', 'Dashboard')
    })

    it("LOG_008-User cannot login with empty credentials ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('') //jika type nya hanya spasi 1x, hasilnya akan passed
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('') //jika type nya hanya spasi 1x, hasilnya akan passed
    cy.get('.oxd-button').click()
    cy.get('body').should('not.contain.text', 'Invalid credentials')
    cy.url().should('include', '/auth/login')
    })

    it("LOG_009-Login failed when valid username is entered but password field is empty ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('') //jika type nya hanya spasi 1x, hasilnya akan passed
    cy.get('.oxd-button').click()
    cy.get('body').should('not.contain.text', 'Invalid credentials')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')
    .and('contain.text', 'Required')
    cy.url().should('include', '/auth/login')
    })

    it("LOG_010-Login failed when username field is empty but password is valid", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('') //jika type nya hanya spasi 1x, hasilnya akan passed
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
    .and('contain.text', 'Required')
    cy.get('body').should('not.contain.text', 'Invalid credentials')

    
    })
})