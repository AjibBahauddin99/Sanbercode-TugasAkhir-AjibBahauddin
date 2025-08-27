// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
  it("PUT - Update User", () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'   // tambahkan API key
      },
      body: {
        name: "Ajib Ibra",
        job: "Senior SQA"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property("name", "Ajib Ibra")
      expect(response.body).to.have.property("job", "Senior SQA")
      expect(response.body).to.have.property("updatedAt")
    })
  })
})