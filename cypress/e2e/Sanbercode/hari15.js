/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("Tugas hari ke 15 Sanbercode by Ajib Bahauddin",  () => {
   it("Testing login web driver university  ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()   
      })   

   it("Testing drop dan checkbox ", () => {
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('#dropdowm-menu-1').select('SQL')
    cy.get('#checkboxes input[value="option-1"]').check()   
      })

      it("Testing clear ", () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('ajib')
    cy.get('[name="first_name"]').clear()  
      })

     it("Testing scroll to bottom ", () => {
    cy.visit('https://webdriveruniversity.com/index.html')
    cy.scrollTo('bottom')    
      })

      it("Testing double click", () => {
    cy.visit('https://qa-practice.netlify.app/double-click')
    cy.get('#double-click-btn').dblclick()
      })

      it.only("Testing assertion web orange hrm by ajib bahauddin  ", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('div.orangehrm-login-form').should('be.visible') //1
   
    cy.get("input[name='username']").should('have.attr','placeholder','Username') //2
   
    cy.get('.orangehrm-login-forgot-header').should('contain.text', 'Forgot your password?') //3
    
    cy.get("button[type='submit']").should('be.enabled').and('contain','Login') //4

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials').should('be.visible') //5
        
    cy.url().should('include','/auth/login') //6
    
    cy.get('.orangehrm-login-branding > img').should('exist') //7

    cy.get('.oxd-loading-spinner').should('not.exist') //8

    cy.get("input[name='username']").should('be.empty') //9

    cy.get("button[type='submit']").should('not.be.disabled') //10
      })
      
    })

    