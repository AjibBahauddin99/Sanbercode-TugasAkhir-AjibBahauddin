/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("Test Automation Contact Us via webdriveruniversity",  () => {
    it.only ("Submit data successfully via form webdriveruniversity", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')  
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        // cy.get('#contact-us > .thumbnail').click()
        cy.get('[name="first_name"]').type("Ajib")
        cy.get('[name="last_name"]').type("Bahauddin")
        cy.get('[name="email"]').type("ajibbahauddin10@gmail.com")
        cy.get('textarea.feedback-input').type("Belajar cypress itu mudah")
        cy.get('[type="submit"]').click()
    })

    it("Submit data not successfully via form webdriveruniversity", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("Ajib")
        cy.get('[name="last_name"]').type("Bahauddin")
        cy.get('textarea.feedback-input').type("Belajar cypress itu mudah")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
   })
//    it.only ("Contact Us Page", () => {
//         cy.visit('https://automationteststore.com/')
//         cy.xpath("//a[contains(@href,'contact')]").click()

       
   })

 