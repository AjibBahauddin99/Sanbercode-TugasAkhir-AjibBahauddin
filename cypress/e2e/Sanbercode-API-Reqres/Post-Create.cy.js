// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
  it("POST - Create User", () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': 'reqres-free-v1'   // tambahkan API key
      },
      body: {
        name: "Bahauddin",
        job: "Senior QA"
      }
    }).then((response) => {
      expect(response.status).to.eq(201)               
      expect(response.body).to.have.property("name", "Bahauddin")
      expect(response.body).to.have.property("job", "Senior QA")
      expect(response.body).to.have.property("id")     
      expect(response.body).to.have.property("createdAt")
    })
  })
})