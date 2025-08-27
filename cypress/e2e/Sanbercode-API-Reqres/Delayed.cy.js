// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
  it("GET - Delayed Users (delay 3 detik)", () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3',
      headers: {
        'x-api-key': 'reqres-free-v1'   // tambahkan API key
      },
      timeout: 7000   // kasih timeout lebih lama (7 detik) untuk handle delay
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array')
      expect(response.body.data[0]).to.have.property('email')
      expect(response.body.data[0]).to.have.property('first_name')
      expect(response.body.data[0]).to.have.property('last_name')
    })
  })
})