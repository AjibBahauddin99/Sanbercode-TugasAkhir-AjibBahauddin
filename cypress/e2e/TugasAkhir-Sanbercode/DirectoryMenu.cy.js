import DirectoryPage from '../../support/POM-TugasAkhir-Sanbercode/TA-POM-DashboardDM'

describe("Testing Website OrangeHRM - Directory Menu - POM and Intercept", () => {

  it("MDI_001 - Successfully search employee by name", () => {
    DirectoryPage.visit()
    DirectoryPage.interceptDashboard()
    DirectoryPage.login("admin", "admin123")

    cy.wait("@dashboard").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200)
      expect(intercept.response.body).to.exist
    })

    DirectoryPage.goToDirectoryMenu()
    DirectoryPage.searchByName("Peter", "Peter Mac Anderson")
  });

  it("MDI_002 - Successfully search employee by Job title", () => {
    DirectoryPage.visit()
    DirectoryPage.interceptLocations()
    DirectoryPage.login("admin", "admin123")

    cy.wait("@locations").its("response.statusCode").should("eq", 200)
    DirectoryPage.goToDirectoryMenu()
    DirectoryPage.searchByJobTitle("HR Manager")
  });

  it("MDI_003 - Successfully search employee by Location", () => {
    DirectoryPage.visit()
    DirectoryPage.interceptLocations()
    DirectoryPage.login("admin", "admin123")

    cy.wait("@locations").its("response.statusCode").should("eq", 200)
    DirectoryPage.goToDirectoryMenu()
    DirectoryPage.searchByLocation("Texas R&D")
  })

})