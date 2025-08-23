/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("Test Automation Contact Us via webdriveruniversity",  () => {
   it.only ("Contact Us Page", () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('ajib')
        cy.get('#ContactUsFrm_email').type('ajibibra@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('bagaimana cara mendapatkan kupon diskon?')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')


       
   })
})

 