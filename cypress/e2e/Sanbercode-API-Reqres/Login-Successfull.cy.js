// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
  it("POST - Login Successful", () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: {
        'x-api-key': 'reqres-free-v1'   // tambahkan API key
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.eq(200) // seharusnya sukses
      expect(response.body).to.have.property("token")
      cy.log("Token: " + response.body.token)
    })
  })
})