// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
    it("Get API Testing", () => {
        cy.request('GET',' https://reqres.in/api/users?page=2')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
        
    })
})