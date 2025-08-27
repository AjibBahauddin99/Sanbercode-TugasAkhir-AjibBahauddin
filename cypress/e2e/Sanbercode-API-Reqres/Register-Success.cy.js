// Tugas Harian 18 - API Testing Reqres.in dengan Cypress
// Sanbercode - Ajib Bahauddin

/// <reference types="cypress"/> 

describe("API Testing Reqres.in dengan Cypress - Ajib Bahauddin", () => {
  const baseUrl = "https://reqres.in/api";
  const apiKey = "reqres-free-v1";

  it("POST - Register Successful", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers: { "x-api-key": apiKey },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
      cy.log("Register berhasil, token: " + response.body.token);
    });
  });
});