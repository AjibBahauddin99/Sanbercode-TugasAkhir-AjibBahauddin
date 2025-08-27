// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
  const apiKey = "reqres-free-v1" // tambahkan API key
  const baseUrl = "https://reqres.in/api"

  it("GET - List Users", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users?page=2`,
      headers: { "x-api-key": apiKey }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data")
      expect(response.body.data).to.be.an("array")
      cy.log("GET berhasil, total user: " + response.body.data.length)
    })
  })

  it("POST - Create User", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: { "x-api-key": apiKey },
      body: {
        name: "Bahauddin",
        job: "QA Manual"
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", "Bahauddin")
      expect(response.body).to.have.property("job", "QA Manual")
      cy.log("User berhasil dibuat")
    })
  })

  it("PUT - Update User", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/users/2`,
      headers: { "x-api-key": apiKey },
      body: {
        name: "Ajib Bahauddin",
        job: "QA Automation"
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "Ajib Bahauddin")
      cy.log("User berhasil diupdate")
    })
  })

  it("DELETE - Remove User", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/users/2`,
      headers: { "x-api-key": apiKey }
    }).then((response) => {
      expect(response.status).to.eq(204)
      cy.log("User berhasil dihapus (204 No Content)")
    })
  })

})